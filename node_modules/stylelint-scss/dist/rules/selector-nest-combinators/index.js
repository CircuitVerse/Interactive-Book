"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.ruleName = undefined;

exports.default = function (expectation) {
  return function (root, result) {
    var validOptions = _stylelint.utils.validateOptions(result, ruleName, {
      actual: expectation,
      possible: ["always", "never"]
    });

    if (!validOptions) {
      return;
    }

    function precedesParentSelector(current) {
      do {
        current = current.next();

        if (current.type === "nesting") {
          return true;
        }
      } while (current.next());

      return false;
    }

    // attribute, class, combinator, comment, id, nesting, pseudo, root, selector, string, tag, or universal
    var chainingTypes = ["attribute", "class", "id", "pseudo", "tag", "universal"];

    var interpolationRe = /#{.+?}$/;

    root.walkRules(function (rule) {
      (0, _utils.parseSelector)(rule.selector, result, rule, function (fullSelector) {
        var message = void 0;

        fullSelector.walk(function (node) {
          if (node.value === "}") {
            return;
          }

          if (expectation === "always") {
            if (node.type === "selector") {
              return;
            }

            if (node.parent && node.parent.type === "selector" && node.parent.parent && node.parent.parent.type === "pseudo") {
              return;
            }

            if (!node.prev()) {
              return;
            }

            if (node.next() && precedesParentSelector(node)) {
              return;
            }

            if (node.type === "combinator") {
              if (!chainingTypes.includes(node.next().type)) {
                return;
              }

              if (!chainingTypes.includes(node.prev().type)) {
                return;
              }
            }

            if (chainingTypes.includes(node.type) && !chainingTypes.includes(node.prev().type)) {
              return;
            }

            if (node.type !== "combinator" && !chainingTypes.includes(node.type)) {
              return;
            }

            var hasInterpolation = interpolationRe.test(rule.selector);

            if (node.type !== "combinator" && hasInterpolation) {
              return;
            }

            if (hasInterpolation) {
              message = messages.expectedInterpolation;
            } else {
              message = messages.expected(node.value, node.type);
            }
          }

          if (expectation === "never") {
            if (rule.parent.type === "root" || rule.parent.type === "atrule") {
              return;
            }

            message = messages.rejected;
          }

          _stylelint.utils.report({
            ruleName: ruleName,
            result: result,
            node: rule,
            message: message,
            index: node.sourceIndex
          });
        });
      });
    });
  };
};

var _stylelint = require("stylelint");

var _utils = require("../../utils");

var ruleName = exports.ruleName = (0, _utils.namespace)("selector-nest-combinators");

var messages = exports.messages = _stylelint.utils.ruleMessages(ruleName, {
  expectedInterpolation: "Expected interpolation to be in a nested form",
  expected: function expected(combinator, type) {
    return "Expected combinator \"" + combinator + "\" of type \"" + type + "\" to be in a nested form";
  },
  rejected: "Unexpected nesting found in selector"
});