const stylelint = require('stylelint')
const utilities = require('@primer/css/dist/utilities')

const ruleName = 'primer/selector-no-utility'
const match = selector => selector.match(/\.[-\w]+/g)

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: classname => `Avoid styling the utilty class "${classname}"`
})

const utilityClasses = new Set()
for (const selector of utilities.cssstats.selectors.values) {
  const matches = match(selector)
  if (matches) {
    for (const klass of Array.from(matches)) {
      utilityClasses.add(klass)
    }
  }
}

module.exports = stylelint.createPlugin(ruleName, enabled => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: enabled,
      possible: [true, false]
    })

    if (!validOptions) {
      return
    }

    root.walkRules(rule => {
      const matches = match(rule.selector)
      if (!matches) {
        return
      }
      for (const ruleClass of Array.from(matches)) {
        if (utilityClasses.has(ruleClass)) {
          stylelint.utils.report({
            message: messages.rejected(ruleClass),
            node: rule,
            result,
            ruleName
          })
        }
      }
    })
  }
})

module.exports.ruleName = ruleName
module.exports.messages = messages
