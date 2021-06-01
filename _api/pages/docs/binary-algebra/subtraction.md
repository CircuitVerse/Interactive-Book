{
  "name": "subtraction.md",
  "path": "docs/binary-algebra/subtraction.md",
  "relative_path": "docs/binary-algebra/subtraction.md",
  "layout": "circuitverse",
  "title": "Subtraction",
  "nav_order": "l0s001",
  "cvib_level": "basic",
  "parent": "Binary algebra",
  "has_children": false,
  "content": "<h1 class=\"no_toc\" id=\"binary-subtraction\">Binary subtraction</h1>\n\n<h2 class=\"no_toc text-delta\" id=\"table-of-contents\">Table of contents</h2>\n\n<ol id=\"markdown-toc\">\n  <li><a href=\"#subtraction\" id=\"markdown-toc-subtraction\">Subtraction</a></li>\n</ol>\n\n<h2 id=\"subtraction\">Subtraction</h2>\n\n<p>Binary subtraction is also a simple task. You just need to keep in mind i.e., whenever 0 takes borrow, it becomes 10 i.e., 2 in decimal. In case number to the left is zero then look for the number more left to that until you find 1. In case nothing is present to borrow then that number becomes negative. Also, the number which gives borrow is reduced by 1.</p>\n\n<p><strong><em>Note: 10 becomes 1 after giving borrow.</em></strong></p>\n\n<div class=\"language-yaml highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code><span class=\"na\">Examples </span><span class=\"pi\">:</span>\n<span class=\"s\">0 - 0 = </span><span class=\"m\">0</span>\n<span class=\"s\">1 - 0 = </span><span class=\"m\">1</span>\n<span class=\"s\">1 - 1 = </span><span class=\"m\">0</span>\n\n    <span class=\"s\">1 0   (2)This is something which will always happen in binary subtraction. Keep in mind i.e., 10-1=1</span>\n  <span class=\"s\">- 0 1   (1)Reason being 10 is 2 in decimal which on subtraction with 1 gives 1.</span>\n  <span class=\"s\">-----      Implies that 10 - 1 = </span><span class=\"m\">1</span>\n    <span class=\"s\">0 1   (1)</span>\n  <span class=\"s\">-----</span>\n\n      <span class=\"s\">This 0 increases to 10 after taking the carry and reduces to 1 after giving the borrow.</span>\n      <span class=\"s\">/</span>\n    <span class=\"s\">1 0 0   (4)</span>\n  <span class=\"s\">- 0 0 1   (1)</span>\n  <span class=\"s\">-------</span>\n    <span class=\"s\">0 1 1   (3)</span>\n  <span class=\"s\">-------</span>\n</code></pre></div></div>\n\n<ol class=\"quiz\">\n  <li>Binary subtraction of <code class=\"language-plaintext highlighter-rouge\">10100111</code>–<code class=\"language-plaintext highlighter-rouge\">00011000</code>= ?\n    <ol>\n      <li>010001111\n        <ul>\n          <li>110001111</li>\n          <li>010101111</li>\n          <li>011001111</li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n  <li>Binary subtraction of <code class=\"language-plaintext highlighter-rouge\">101001</code>–<code class=\"language-plaintext highlighter-rouge\">010110</code>= ?\n    <ol>\n      <li>010011\n        <ul>\n          <li>011011</li>\n          <li>110011</li>\n          <li>010111</li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n  <li>Binary subtraction of <code class=\"language-plaintext highlighter-rouge\">101101</code>–<code class=\"language-plaintext highlighter-rouge\">101011</code>= ?\n    <ol>\n      <li>000010\n        <ul>\n          <li>001010</li>\n          <li>101010</li>\n          <li>100000</li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n</ol>\n",
  "dir": "/docs/binary-algebra/",
  "url": "/docs/binary-algebra/subtraction.html",
  "raw_content": "# Binary subtraction\n{: .no_toc}\n\n\n## Table of contents\n{: .no_toc .text-delta}\n\n1. TOC\n{:toc}\n\n\n## Subtraction\n\nBinary subtraction is also a simple task. You just need to keep in mind i.e., whenever 0 takes borrow, it becomes 10 i.e., 2 in decimal. In case number to the left is zero then look for the number more left to that until you find 1. In case nothing is present to borrow then that number becomes negative. Also, the number which gives borrow is reduced by 1.\n\n***Note: 10 becomes 1 after giving borrow.***\n\n```yaml\nExamples :\n0 - 0 = 0\n1 - 0 = 1\n1 - 1 = 0\n\n    1 0   (2)This is something which will always happen in binary subtraction. Keep in mind i.e., 10-1=1\n  - 0 1   (1)Reason being 10 is 2 in decimal which on subtraction with 1 gives 1.\n  -----      Implies that 10 - 1 = 1\n    0 1   (1)\n  -----\n\n      This 0 increases to 10 after taking the carry and reduces to 1 after giving the borrow.\n      /\n    1 0 0   (4)\n  - 0 0 1   (1)\n  -------\n    0 1 1   (3)\n  -------\n```\n\n{:.quiz}\n1. Binary subtraction of `10100111`–`00011000`= ?\n   1. 010001111\n   * 110001111\n   * 010101111\n   * 011001111\n2. Binary subtraction of `101001`–`010110`= ?\n   1. 010011\n   * 011011\n   * 110011\n   * 010111\n3. Binary subtraction of `101101`–`101011`= ?\n   1. 000010\n   * 001010\n   * 101010\n   * 100000 ",
  "front_matter": {
    "layout": "circuitverse",
    "title": "Subtraction",
    "nav_order": "l0s001",
    "cvib_level": "basic",
    "parent": "Binary algebra",
    "has_children": false
  },
  "front_matter_defaults": {
  },
  "http_url": "https://learn.circuitverse.org/docs/binary-algebra/subtraction.html",
  "api_url": "https://learn.circuitverse.org/_api/pages/docs/binary-algebra/subtraction.md"
}