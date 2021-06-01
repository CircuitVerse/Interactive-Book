{
  "name": "addition.md",
  "path": "docs/binary-algebra/addition.md",
  "relative_path": "docs/binary-algebra/addition.md",
  "layout": "circuitverse",
  "title": "Addition",
  "nav_order": "l0s000",
  "cvib_level": "basic",
  "parent": "Binary algebra",
  "has_children": false,
  "content": "<h1 class=\"no_toc\" id=\"binary-addition\">Binary addition</h1>\n\n<h2 class=\"no_toc text-delta\" id=\"table-of-contents\">Table of contents</h2>\n\n<ol id=\"markdown-toc\">\n  <li><a href=\"#addition\" id=\"markdown-toc-addition\">Addition</a></li>\n</ol>\n\n<h2 id=\"addition\">Addition</h2>\n\n<p>Binary addition is similar to Decimal addition. As this addition is binary, it implies that you cannot have a number greater than 1 i.e., when you do ‘1+1’ it gives 0 with carry 1 i.e, 10.</p>\n\n<div class=\"language-yaml highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code><span class=\"na\">Examples </span><span class=\"pi\">:</span>\n<span class=\"s\">0 + 0 = </span><span class=\"m\">0</span>\n<span class=\"s\">0 + 1 = </span><span class=\"m\">1</span>\n<span class=\"s\">1 + 0 = </span><span class=\"m\">1</span>\n<span class=\"s\">1 + 1 = </span><span class=\"m\">1</span>\n\n    <span class=\"s\">1 1   (3)</span>\n  <span class=\"s\">+ 1 0   (2)</span>\n  <span class=\"s\">-----</span>\n  <span class=\"s\">1 0 1   (5)</span>\n  <span class=\"s\">-----</span>\n</code></pre></div></div>\n\n<p>In the above example, for units place gives 1 as the submission of 1 and 0, whereas, when addition occurs at the ten’s place where 1 and 1 are added, it gives 10 not 2 because this is binary addition which results in carry of 1 and 0 as a result of the submission. The example below gives 110 because it results in 1<del>1</del>1 at the tens place which is 11 in binary. As two 1’s gives 10, further if you add 1 it will give 11.</p>\n\n<div class=\"language-yaml highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>  <span class=\"s\">1 1   (3)</span>\n<span class=\"s\">+ 1 1   (3)</span>\n<span class=\"s\">-----</span>\n<span class=\"s\">1 1 0   (6)</span>\n<span class=\"s\">-----</span>\n</code></pre></div></div>\n\n<ol class=\"quiz\">\n  <li>What is the answer to <code class=\"language-plaintext highlighter-rouge\">1100</code> + <code class=\"language-plaintext highlighter-rouge\">0011</code>= ?\n    <ol>\n      <li>1111\n        <ul>\n          <li>1101</li>\n          <li>1110</li>\n          <li>1100</li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n  <li><code class=\"language-plaintext highlighter-rouge\">11111111</code> + <code class=\"language-plaintext highlighter-rouge\">00100000</code> = <code class=\"language-plaintext highlighter-rouge\">100011111</code> is an example of <code class=\"language-plaintext highlighter-rouge\">______</code>\n    <ol>\n      <li>Overflow error\n        <ul>\n          <li>8 bit binary addition</li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n  <li>What is the answer to <code class=\"language-plaintext highlighter-rouge\">01101011</code> + <code class=\"language-plaintext highlighter-rouge\">01010100</code>= ?\n    <ol>\n      <li>10111111\n        <ul>\n          <li>01111011</li>\n          <li>11101111</li>\n          <li>11101101</li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n</ol>\n",
  "dir": "/docs/binary-algebra/",
  "url": "/docs/binary-algebra/addition.html",
  "raw_content": "# Binary addition\n{: .no_toc}\n\n\n## Table of contents\n{: .no_toc .text-delta}\n\n1. TOC\n{:toc}\n\n\n## Addition\n\nBinary addition is similar to Decimal addition. As this addition is binary, it implies that you cannot have a number greater than 1 i.e., when you do '1+1' it gives 0 with carry 1 i.e, 10.\n\n```yaml\nExamples :\n0 + 0 = 0\n0 + 1 = 1\n1 + 0 = 1\n1 + 1 = 1\n\n    1 1   (3)\n  + 1 0   (2)\n  -----\n  1 0 1   (5)\n  -----\n```\n\nIn the above example, for units place gives 1 as the submission of 1 and 0, whereas, when addition occurs at the ten's place where 1 and 1 are added, it gives 10 not 2 because this is binary addition which results in carry of 1 and 0 as a result of the submission. The example below gives 110 because it results in 1~~1~~1 at the tens place which is 11 in binary. As two 1's gives 10, further if you add 1 it will give 11.\n\n```yaml\n  1 1   (3)\n+ 1 1   (3)\n-----\n1 1 0   (6)\n-----\n```\n\n\n{:.quiz}\n1. What is the answer to `1100` + `0011`= ?\n   1. 1111\n   * 1101\n   * 1110\n   * 1100\n2. `11111111` + `00100000` = `100011111` is an example of `______`\n   1. Overflow error\n   * 8 bit binary addition\n3. What is the answer to `01101011` + `01010100`= ?\n   1. 10111111\n   * 01111011\n   * 11101111\n   * 11101101  \n",
  "front_matter": {
    "layout": "circuitverse",
    "title": "Addition",
    "nav_order": "l0s000",
    "cvib_level": "basic",
    "parent": "Binary algebra",
    "has_children": false
  },
  "front_matter_defaults": {
  },
  "http_url": "https://learn.circuitverse.org/docs/binary-algebra/addition.html",
  "api_url": "https://learn.circuitverse.org/_api/pages/docs/binary-algebra/addition.md"
}