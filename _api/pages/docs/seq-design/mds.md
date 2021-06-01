{
  "name": "mds.md",
  "path": "docs/seq-design/mds.md",
  "relative_path": "docs/seq-design/mds.md",
  "layout": "circuitverse",
  "title": "MDS Diagrams",
  "nav_order": "l2s001",
  "cvib_level": "advanced",
  "parent": "Sequential Design",
  "has_children": false,
  "content": "<h1 class=\"no_toc\" id=\"mnemonic-documented-state-diagrams\">Mnemonic Documented State Diagrams</h1>\n\n<h2 class=\"no_toc text-delta\" id=\"table-of-contents\">Table of contents</h2>\n\n<ol id=\"markdown-toc\">\n  <li><a href=\"#introduction\" id=\"markdown-toc-introduction\">Introduction</a></li>\n  <li><a href=\"#large-scale-digital-system-design\" id=\"markdown-toc-large-scale-digital-system-design\">Large scale digital system design</a></li>\n</ol>\n\n<h2 id=\"introduction\">Introduction</h2>\n\n<p>For very complex systems the state diagram might not be well suited. In this case a tool called the <em>Mnemonic Documented State</em> Diagram or MDS Diagram can incorporate in a more compact way all the complexities of a large system controller.</p>\n\n<p>More information about MDS diagrams can be found in the book <em>An Engineering Approach to Digital Design</em> by William I. Fletcher.</p>\n\n<h2 id=\"large-scale-digital-system-design\">Large scale digital system design</h2>\n\n<p>For complex digital logic system with a large number of inputs, the following design methodology, from the point of view of a system controller, can be used:</p>\n\n<ol>\n  <li>State main definitions and specifications of the problem/system</li>\n  <li>Define basic operations, limits and restrictions.\n    <ol>\n      <li>Draw a basic (simplified) block diagram</li>\n      <li>Draw a simplified (general) flowchart diagram</li>\n    </ol>\n  </li>\n  <li>Define the system <strong>timing</strong> requirement\n    <ol>\n      <li>Draw a general time diagram</li>\n    </ol>\n  </li>\n  <li>Detail the controller’s sequential behaviour\n    <ol>\n      <li>Draw detailed time diagram</li>\n      <li>Draw detailed flowchart diagram</li>\n      <li>Draw detailed block diagram</li>\n    </ol>\n  </li>\n  <li>Draw MDS diagram</li>\n  <li>Choose the controller architecture: SSI (logic gates and flip-flops), MSI (based on MUXs, …) or LSI (ROM based, …)</li>\n  <li>Asign state codes</li>\n  <li>Implement the circuit based on the design</li>\n</ol>\n",
  "dir": "/docs/seq-design/",
  "url": "/docs/seq-design/mds.html",
  "raw_content": "# Mnemonic Documented State Diagrams\n{: .no_toc}\n\n\n## Table of contents\n{: .no_toc .text-delta}\n\n1. TOC\n{:toc}\n\n\n## Introduction\n\nFor very complex systems the state diagram might not be well suited. In this case a tool called the *Mnemonic Documented State* Diagram or MDS Diagram can incorporate in a more compact way all the complexities of a large system controller.\n\nMore information about MDS diagrams can be found in the book *An Engineering Approach to Digital Design* by William I. Fletcher.\n\n\n## Large scale digital system design\n\nFor complex digital logic system with a large number of inputs, the following design methodology, from the point of view of a system controller, can be used:\n\n1.  State main definitions and specifications of the problem/system\n2.  Define basic operations, limits and restrictions.\n    1.  Draw a basic (simplified) block diagram\n    2.  Draw a simplified (general) flowchart diagram\n3.  Define the system **timing** requirement\n    1.  Draw a general time diagram\n4.  Detail the controller's sequential behaviour\n    1.  Draw detailed time diagram\n    2.  Draw detailed flowchart diagram\n    3.  Draw detailed block diagram\n5.  Draw MDS diagram\n6.  Choose the controller architecture: SSI (logic gates and flip-flops), MSI (based on MUXs, &#x2026;) or LSI (ROM based, &#x2026;)\n7.  Asign state codes\n8.  Implement the circuit based on the design\n",
  "front_matter": {
    "layout": "circuitverse",
    "title": "MDS Diagrams",
    "nav_order": "l2s001",
    "cvib_level": "advanced",
    "parent": "Sequential Design",
    "has_children": false
  },
  "front_matter_defaults": {
  },
  "http_url": "https://learn.circuitverse.org/docs/seq-design/mds.html",
  "api_url": "https://learn.circuitverse.org/_api/pages/docs/seq-design/mds.md"
}