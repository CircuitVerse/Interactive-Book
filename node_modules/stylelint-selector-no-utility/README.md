# primer/selector-no-utility

[![NPM version](https://img.shields.io/npm/v/stylelint-selector-no-utility.svg)](https://www.npmjs.org/package/stylelint-selector-no-utility)
[![Build Status](https://travis-ci.org/primer/stylelint-selector-no-utility.svg?branch=master)](https://travis-ci.org/primer/stylelint-selector-no-utility)

**This plugin is specific to [Primer CSS](https://github.com/primer/css)**. We'll accept pull requests to make it more generic, or feel free to fork and use it for your own needs.

Utilities are single purpose styles that should be treated as immutable CSS. They should not be altered by custom CSS as this can cause unwanted side effects.

```css
    .m-0, #bar .float-left, #hoo { border: 1px solid pink; }
/** ↑          ↑
 * Each of these selectors */
```

The following patterns are considered warnings:

```css
#bar .float-left { border: 1px solid pink; }
```

```scss
#bar {
  .float-left { border: 1px solid pink; }
}
```

The following patterns are *not* considered warnings:

```css
#bar { color: pink; }
```

## Install

This repository is distributed with [npm][npm], and can be installed with:

```sh
$ npm install --save-dev stylelint-selector-no-utility
```

## Usage

In your [stylelint config](http://stylelint.io/user-guide/configuration/) add this.

```json
{
  "plugins": [
    "stylelint-selector-no-utility"
  ],
  "rules": {
    "primer/selector-no-utility": true
  }
}
```

## Related

* [Stylelint](http://stylelint.io/)
* [primer][primer]

## License

MIT &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/css
[docs]: http://primer.github.io/
[npm]: https://www.npmjs.com/
[sass]: http://sass-lang.com/
