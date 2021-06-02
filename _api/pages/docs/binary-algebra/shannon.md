{
  "name": "shannon.md",
  "path": "docs/binary-algebra/shannon.md",
  "relative_path": "docs/binary-algebra/shannon.md",
  "layout": "circuitverse",
  "title": "Shannon decomposition",
  "nav_order": "l2s001",
  "cvib_level": "advanced",
  "parent": "Binary algebra",
  "has_children": false,
  "content": "<h1 class=\"no_toc\" id=\"shannon-decomposition\">Shannon decomposition</h1>\n\n<h2 class=\"no_toc text-delta\" id=\"table-of-contents\">Table of contents</h2>\n\n<ol id=\"markdown-toc\">\n  <li><a href=\"#booles-expansion-theorem\" id=\"markdown-toc-booles-expansion-theorem\">Boole’s expansion theorem</a></li>\n  <li><a href=\"#references\" id=\"markdown-toc-references\">References</a></li>\n</ol>\n\n<h2 id=\"booles-expansion-theorem\">Boole’s expansion theorem</h2>\n\n<p>The <em>Shannon expansion</em> or <em>decomposition</em> theorem, also known as <em>Boole’s expansion</em> theorem is an identity which allow the expansion of any logic function to broken down in parts. One consequence of this theorem is the possibility to implement any logic function using multiplexers.</p>\n\n<p>The expansion can take any of these three variations:</p>\n\n<p>$\\begin{align} f(x_1,x_2,\\ldots,x_n)&amp;= x_1 \\cdot f(1,x_2,\\ldots,x_n) + \\overline{x_1}\\cdot f(0,x_2,\\ldots,x_n) \\\\\\\\ &amp;= \\bigl(x_1+f(0,x_2,\\ldots,x_n)\\bigr)\\cdot \\bigl(\\overline{x_1}+f(1,x_2,\\ldots,x_n)\\bigr) \\\\\\\\ &amp;= x_1 \\cdot f(1,x_2,\\ldots,x_n) \\oplus \\overline{x_1}\\cdot f(0,x_2,\\ldots,x_n)  \\end{align}$</p>\n\n<p>More details can be found in Section 1.9 “Shannon’s Expansion Theorem” in <a class=\"citation\" href=\"#donzellini2018introduction\">[1]</a> and in Section 3.2 “Switching functions” in <a class=\"citation\" href=\"#kohavi2010switching\">[2]</a>.</p>\n\n<h2 id=\"references\">References</h2>\n\n<ul class=\"bibliography\"><li><span id=\"donzellini2018introduction\">[1]G. Donzellini, L. Oneto, D. Ponta, and D. Anguita, <i>Introduction to Digital Systems Design</i>. Springer International Publishing, 2018 [Online]. Available at: https://books.google.cl/books?id=va1qDwAAQBAJ</span></li>\n<li><span id=\"kohavi2010switching\">[2]Z. Kohavi and N. K. Jha, <i>Switching and Finite Automata Theory</i>. Cambridge University Press, 2010 [Online]. Available at: https://books.google.cl/books?id=jZIxam8Rb9AC</span></li></ul>\n",
  "dir": "/docs/binary-algebra/",
  "url": "/docs/binary-algebra/shannon.html",
  "raw_content": "# Shannon decomposition\n{: .no_toc}\n\n\n## Table of contents\n{: .no_toc .text-delta}\n\n1. TOC\n{:toc}\n\n\n## Boole's expansion theorem\n\nThe *Shannon expansion* or *decomposition* theorem, also known as *Boole's expansion* theorem is an identity which allow the expansion of any logic function to broken down in parts. One consequence of this theorem is the possibility to implement any logic function using multiplexers.\n\nThe expansion can take any of these three variations:\n\n$\\begin{align} f(x_1,x_2,\\ldots,x_n)&= x_1 \\cdot f(1,x_2,\\ldots,x_n) + \\overline{x_1}\\cdot f(0,x_2,\\ldots,x_n) \\\\\\\\\\\\ &= \\bigl(x_1+f(0,x_2,\\ldots,x_n)\\bigr)\\cdot \\bigl(\\overline{x_1}+f(1,x_2,\\ldots,x_n)\\bigr) \\\\\\\\\\\\ &= x_1 \\cdot f(1,x_2,\\ldots,x_n) \\oplus \\overline{x_1}\\cdot f(0,x_2,\\ldots,x_n)  \\end{align}$\n\nMore details can be found in Section 1.9 \"Shannon's Expansion Theorem\" in {% cite donzellini2018introduction --file books %} and in Section 3.2 \"Switching functions\" in {% cite kohavi2010switching --file books %}.\n\n\n## References\n\n{% bibliography --cited --file books %}\n",
  "front_matter": {
    "layout": "circuitverse",
    "title": "Shannon decomposition",
    "nav_order": "l2s001",
    "cvib_level": "advanced",
    "parent": "Binary algebra",
    "has_children": false
  },
  "front_matter_defaults": {
  },
  "http_url": "https://learn.circuitverse.org/docs/binary-algebra/shannon.html",
  "api_url": "https://learn.circuitverse.org/_api/pages/docs/binary-algebra/shannon.md"
}