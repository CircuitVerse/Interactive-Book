---
layout: default
nav_order: 100
title: Guidelines
disable_comments: true
description: ""
---


# Contributing Guidelines
{: .no_toc }


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## About this guidelines
This guidelines documentation was started on September 2020 as part of the Goggle Season of Docs 2020 initiative.


### Revision history
The revision history is presented in the following table

| Revision number | Date       | Revised by |
|--------------- |---------- |---------- |
| 1.0             | 2020-09-?? | DVLS       |


### Purpose of the guidelines
These guidelines are inteded to guide those who wish to contribute to this Interactive Book. It (tries) to cover most aspects such as the process workflow, license, style, quality, templates and tools.


### Acknowledgements
These guidlines are heavily based on the [Linux Document Project Author Guide](https://tldp.org/LDP/LDP-Author-Guide/html/index.html) and the Wikibooks [Contributing help](https://en.wikibooks.org/wiki/Help:Contributing) and [Policies and guidelines](https://en.wikibooks.org/wiki/Wikibooks:Policies_and_guidelines).

-   The LDP Author Guide is Copyright (C) 1999-2002 Mark F. Komarinski, David C. Merrill, Jorge Godoy. It is licensed under the GNU FDL v1.1+ (no invariant sections, no front-cover texts and no-back-cover texts)
-   Wikibooks documents are licensed under the [CC-by-sa](https://en.wikibooks.org/wiki/Wikibooks:Creative_Commons_Attribution-ShareAlike_3.0_Unported_License) License and copyrighted by contributors to Wikibooks

---


## Workflow
Usually, the contribution process will include the following steps:

1.  find an opportunity to contribute:
    1.  add new content (new chapters, new sections, extend a section, add example circuits),
    2.  correct existing content,
    3.  translate content,
    4.  &#x2026;
2.  contact the interactive book development coordination team and share/discuss your idea
3.  further discuss the idea with the community
4.  fork the book repository
5.  work on the contribution
6.  create a pull-request to start the reviewing process of your contribution

---


## Licensing
The book is licensed under the [LICENSE] and copyrighted by contributors to CircuitVerse unless otherwise noted. The author has to make sure that the all content contributed can be licensed under the specified license. Never submit copyrighted material without permission from copyright owner. If you contribute to the book, you irrevocably agree to license it to the public under [LICENSE].


### Non-free materials and special requirements
CircuitVerse's Interactive Book may also include quotations, images, or other media under the U.S. Copyright law "fair use" doctrine. In CircuitVerse, such "fair use" material should be identified as from an external source by an appropriate method (on the figure or table description, as appropriate; quotations should be denoted as a quotation block. This leads to possible restrictions on the use, outside of the Interactive Book, of such "fair use" content retrieved from the book: this "fair use" content does not fall under the [LICENSE] license as such, but under the "fair use" (or similar/different) regulations in the country where the media are retrieved.

More information about "Fair use"

-   <https://www.baylor.edu/copyright/index.php?id=56543>
-   <https://www.baylor.edu/copyright/doc.php/240714.pdf>
-   <https://librarycopyright.net/resources/fairuse/index.php>
-   <https://www.baylor.edu/content/services/document.php/68621.pdf>
-   <https://www.copylaw.com/new_articles/copy_myths.html>
-   <https://blogs.library.duke.edu/scholcomm/2007/11/30/citation-infringement/>


### Linking to copyrighted works
Since most recently-created works are copyrighted, almost all cites sources will link to copyrighted material. It is usually not necessary to obtain the permission of a copyright holder before linking to copyrighted material, just as an author of a dead-tree book does not need permission to cite someone else's work in their bibliography. Likewise, CircuitVerse's Interactive Book is not restricted to linking only to CC-BY-SA or open-source content.

---


## Proposing a contribution
If you have in mind new content to be added, it is important that the CircuitVerse community understand why your contribution should be included in the book. You may have already discussed your idea in some of CircuitVerse social channels, in that case, please include the discussion in your proposal.

The proposal should clearly indicate what kind of contribution are you planning to submit (add new content, edit existing content, translate content). When proposing new content, please, also specify whether it will be a whole new chapter, a new section, specific content within a section (text, figures, equations, example circuits, etc.)

Then, include a brief summary of the contribution content followed by the justification why it is needed.

Finaly, submit your proposal to the CircuitVerse Interactive Book coordination team, and discuss the proposal with them in order to refine it. The coordination team will either approve or reject the proposal. In case of rejection, comments will be included explaining why it was rejected, and how could it be improved when the proposed content is useful, but the proposed "format" whas not adequate enough.

---


## Editing existing content
When editing existing content, try to contact the original author first in order to discuss your idea.

If the original author cannot be contacted after a "good-faith" effort, fall back to discuss the topic with the CircuiVerse community through any of the social channels.

---


## Writing content
All content should be supported by valid sources. Please, research carefuly and validate all your references. Check that there are no copyright or license issues regarding the use of each of your sources.

When using online resources, make a "hard-copy" (screen-capture, pdf-printed version) of them to avoid missing resources in the future (Error 404)

The Interactive Book is not intended as a thorough textbook, but its main focus is on interactive content. Try to keep the content to the amount necessary to understand the topic and cite appropriate references for further study on the subject.

To keep the consistency of the book, please follow the style indicated in these guidelines, also use the templates and existing content as example.


### Quality assurance
Besides researching and validating your sources and adhering to the Interactive Book style, please also edit (remove unnecesary content) and check for spelling and grammar errors. Then, forward your contribution to a third party for proofreading. When you are satisfied with the quality and accuracy of your contribution ask for peer reviewers from the CircuitVerse community. Finally, submit your work to the "formal" review by creating a pull-request of your forked repository

---


## Style manual
[to be defined]

While most of the formatting style is carried out automatically by the layout, templates and stylesheets in the SSG (jekyll) pipeline, it is important to also adhere to a common writing style in order to assure consitency of the book.

-   figure/table captioning, positioning, labels, etc.
-   mathematical equations (numbering, letters, symbols)
-   language (neutral)
-   bibliographic references
-   chapter, section structure
-   examples

$ f(x)=\int_2^n \frac{1}{2\pi}x^2 $

$ F(A,B,C) = A + B &sdot; C $

$ \begin{equation}F(x_0, x_1) = x_0 + \overline{x_1} \end{equation} $

\\[ F(A,B,C) = A + B \cdot C \tag{1}\\]

---


## Code of conduct, interacting with the community / etiquette
Refer to the Contributor Covenant Code of Conduct

---


## Templates
To help you with getting started with writing your contribution, please use the following templates and examples, accordingly

-   New chapter template [to be created]
-   New section template [to be created]
-   Equations example [to be created]
-   Figure example [to be created]
-   Table example [to be created]

---


## Tools
The following tools will be useful to work in your contribution.


### Git
The CircuitVerse Interactive Book's sources are hosted in a GitHub repository. Besides the web interface provided by GitHub, other tools to manipulate git repositories can be used:

-   [Git](https://git-scm.com/)


### Jekyll
The Interactive Book is rendered using the Jekyll Static Site Generator (SSG). The GitHub repository is able to create a live version of the book using the continuous integration (CI) / continuous deployment (CD) workflows.

To work locally, you will need to setup a Jekyll development environment. It is posible to setup Jekyll natively for your OS or run it in a docker container.

1.  Workflow with native Jekyll

    1.  Install Jekyll following the official [documentation](https://jekyllrb.com/docs/). If you don't have time to follow the quickstart guide, the following steps might help you:
        1.  Install Ruby if necessary
        2.  Install Jekyll using the command line: `gem install jekyll`
        3.  Install Bundler: `gem install bundle`
        4.  Change (`cd`) to your local repository directory and install the project dependencies: `bundle install`
    2.  Serve a live local copy at <http://0.0.0.0:4000/>, running: `bundle exec jekyll serve`
    3.  Point your browser to the url above and see your changes live.

2.  Workflow using docker

    1.  Install and setup docker if you haven't done so already
    2.  Change (`cd`) to your local repository directory and Run a jekyll docker image ([BretFisher's images](https://github.com/BretFisher/jekyll-serve) have been tested and work well with the book). `docker run --rm -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve`
    3.  Point your browser to the appropriate url, <http://0.0.0.0:4000/> if you use the command suggested previously.
