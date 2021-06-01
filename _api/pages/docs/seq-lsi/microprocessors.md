{
  "name": "microprocessors.md",
  "path": "docs/seq-lsi/microprocessors.md",
  "relative_path": "docs/seq-lsi/microprocessors.md",
  "layout": "circuitverse",
  "title": "Microprocessors",
  "nav_order": "l0s002",
  "cvib_level": "basic",
  "parent": "Sequential LSI",
  "has_children": false,
  "content": "<h1 class=\"no_toc\" id=\"microprocessors\">Microprocessors</h1>\n\n<h2 class=\"no_toc text-delta\" id=\"table-of-contents\">Table of contents</h2>\n\n<ol id=\"markdown-toc\">\n  <li><a href=\"#introduction\" id=\"markdown-toc-introduction\">Introduction</a></li>\n</ol>\n\n<h2 id=\"introduction\">Introduction</h2>\n\n<p>Microprocessors are general purpose rom-based sequential circuits with a fixed <em>architecture</em>. This means the digital logic hardware has previously been designed and optimised. Usually a <em>generic</em> FSM has already been implemented in the ROM. The circuit is designed to control an <em>Arithmetic-Logic Unit</em> (ALU) for data processing and to access external memories where data and <em>software</em> is stored. The internal FSM executes sequences of instructions as indicated by the <em>software</em> in the program memory. The particular FSM that the user wants to implement in the circuit is programmed in the software.</p>\n\n<p>Other combinational and sequential components, such as MUXs, registers and counters are also part of the microprocessor to provide the functionality required by the software, to optimise its execution and to connect to other external components.</p>\n\n<p>One of the first “single-chip” microprocessors is the Intel 4004. Read more about it and other interesting microprocessors and their history in the <a href=\"https://spectrum.ieee.org/static/chip-hall-of-fame\">IEEE Chip Hall of Fame</a> and the website <a href=\"http://www.cpushack.com/CPU/cpu.html\">Great Microprocessors of the Past and Present</a> at the CPUSHACK museum.</p>\n\n<ol class=\"quiz\">\n  <li>Which of the following is <code class=\"language-plaintext highlighter-rouge\">single-clip</code> microprocessors ?\n    <ol>\n      <li>Intel 4004\n        <ul>\n          <li>Intel 4408</li>\n          <li>Intel 2004</li>\n          <li>Intel 4002</li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n  <li>Which of the following is/are benefits of microprocessor ?\n    <ol>\n      <li>All of mentioned\n        <ul>\n          <li>Inexpensive</li>\n          <li>Portable</li>\n          <li>Versatile</li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n  <li>Microprocessor fetches <code class=\"language-plaintext highlighter-rouge\">______</code> instructions from the memory to decode and execute.\n    <ol>\n      <li>Sequential\n        <ul>\n          <li>Pipeline</li>\n          <li>Combinational</li>\n          <li>Arithmetic</li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n</ol>\n\n",
  "dir": "/docs/seq-lsi/",
  "url": "/docs/seq-lsi/microprocessors.html",
  "raw_content": "# Microprocessors\n{: .no_toc}\n\n\n## Table of contents\n{: .no_toc .text-delta}\n\n1. TOC\n{:toc}\n\n\n## Introduction\n\nMicroprocessors are general purpose rom-based sequential circuits with a fixed *architecture*. This means the digital logic hardware has previously been designed and optimised. Usually a *generic* FSM has already been implemented in the ROM. The circuit is designed to control an *Arithmetic-Logic Unit* (ALU) for data processing and to access external memories where data and *software* is stored. The internal FSM executes sequences of instructions as indicated by the *software* in the program memory. The particular FSM that the user wants to implement in the circuit is programmed in the software.\n\nOther combinational and sequential components, such as MUXs, registers and counters are also part of the microprocessor to provide the functionality required by the software, to optimise its execution and to connect to other external components.\n\nOne of the first \"single-chip\" microprocessors is the Intel 4004. Read more about it and other interesting microprocessors and their history in the [IEEE Chip Hall of Fame](https://spectrum.ieee.org/static/chip-hall-of-fame) and the website [Great Microprocessors of the Past and Present](http://www.cpushack.com/CPU/cpu.html) at the CPUSHACK museum.\n\n{:.quiz}\n\n1. Which of the following is `single-clip` microprocessors ?\n   1. Intel 4004\n   * Intel 4408\n   * Intel 2004\n   * Intel 4002\n\n2. Which of the following is/are benefits of microprocessor ?\n   1. All of mentioned\n   * Inexpensive\n   * Portable\n   * Versatile\n\n3. Microprocessor fetches `______` instructions from the memory to decode and execute.\n   1. Sequential\n   * Pipeline\n   * Combinational\n   * Arithmetic\n\n",
  "front_matter": {
    "layout": "circuitverse",
    "title": "Microprocessors",
    "nav_order": "l0s002",
    "cvib_level": "basic",
    "parent": "Sequential LSI",
    "has_children": false
  },
  "front_matter_defaults": {
  },
  "http_url": "https://learn.circuitverse.org/docs/seq-lsi/microprocessors.html",
  "api_url": "https://learn.circuitverse.org/_api/pages/docs/seq-lsi/microprocessors.md"
}