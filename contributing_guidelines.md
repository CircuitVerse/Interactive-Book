---
layout: default
nav_order: 1000
title: Guidelines
disable_comments: true
description: ""
---


# Contributing Guidelines
{: .no_toc}


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## About this guidelines

This guidelines documentation was started on September 2020 as part of the Google Season of Docs 2020 initiative.


### Revision history

The revision history is presented in the following table

| Revision number | Date       | Revised by |
|--------------- |---------- |---------- |
| 1.0             | 2020-11-25 | DVLS       |


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

The book is licensed under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) and copyrighted by contributors to CircuitVerse unless otherwise noted. The author has to make sure that the all content contributed can be licensed under the specified license. Never submit copyrighted material without permission from copyright owner. If you contribute to the book, you irrevocably agree to license it to the public under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0).


### Non-free materials and special requirements

CircuitVerse's Interactive Book may also include quotations, images, or other media under the U.S. Copyright law "fair use" doctrine. In CircuitVerse, such "fair use" material should be identified as from an external source by an appropriate method (on the figure or table description, as appropriate; quotations should be denoted as a quotation block. This leads to possible restrictions on the use, outside of the Interactive Book, of such "fair use" content retrieved from the book: this "fair use" content does not fall under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) license as such, but under the "fair use" (or similar/different) regulations in the country where the media are retrieved.

More information about "Fair use"

- <https://www.baylor.edu/copyright/index.php?id=56543>
- <https://www.baylor.edu/copyright/doc.php/240714.pdf>
- <https://librarycopyright.net/resources/fairuse/index.php>
- <https://www.baylor.edu/content/services/document.php/68621.pdf>
- <https://www.copylaw.com/new_articles/copy_myths.html>
- <https://blogs.library.duke.edu/scholcomm/2007/11/30/citation-infringement/>


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

[Work in Progress]

While most of the formatting style is carried out automatically by the layout, templates and stylesheets in the SSG (jekyll) pipeline, it is important to also adhere to a common writing style in order to assure consistency of the book.

Please use a neutral and simple language. Avoid slang. Also, technical jargon should be explained.


### Figures and tables

Figures and tables should include a description or caption, and they should be commented in text. If a figure or table is not part of the description, probably it is not needed and can be removed from the book.

See an example in section [Templates and examples](#templates-and-examples).


### Equations

Equations can be typesetted in LaTeX to be rendered by [MathJax](https://www.mathjax.org/). A few examples can be found in the [Templates and examples](#templates-and-examples) section. If equations need to be referenced in the text, use numbered or labelled equations. General useful guidelines:

-   There are many variants for the notation of negated variables, prefer the bar over the variable or the *prime* (complement) symbol.
-   For binary words with many literals (high number of bits) prefer a single letter with subscript numbers for each bit. For instance a four bit word can be written as $(x_3,x_2,x_1,x_0)$ instead of a different letter for each literal $(A,B,C,D)$. The least significant bit should be subscripted with 0. In case of ambiguity or if the opposite arrangement is necessary, use a superscript mark to identify the MSB and LSB: $(x_0^{\text{MSB}},x_1,x_2,x_3^{\text{LSB}})$


### References

Information obtained from other sources should be properly cited and referenced. Check the [Templates and examples](#templates-and-examples) section for examples.

Currently, references are formatted according to the `ieee-with-url` style defined [CiteProc-Ruby](https://github.com/inukshuk/citeproc-ruby).

---


## Templates and examples

To help you with getting started with writing your contribution, please use the following templates and examples, accordingly:

-   New chapter template
-   New section template
-   Equations example
-   Figure example
-   Table example
-   Bibliography example

The structure of the book, as well as the navigation menu is handled by Jekyll's Just-the-docs plugin. A two-level structure has been chosen. The top-level is for chapters and the second level is for sections in a chapter


### New chapter template

Each chapter should be a directory under the `docs` directory. The `index.md` in the chapter directory is used for the Chapter text and table of contents.

The `index.md` file should have the following contents:

```markdown
---
layout: circuitverse
title: Chapter title
nav_order: 10
has_children: true
has_toc: false
---

# Long chapter title
{: .no_toc}

Introductory chapter text

## Chapter contents
{: .no_toc .text-delta}

{% raw %}
{% include chapter_toc.html %}
{% endraw %}
```

The `title` and `nav_order` elements in the front matter should be filled-in accordingly. The other elements in the front matter block should be left as in the template above.

After the "Long" chapter title an introductory text for the chapter can be added. It is followed by the Table of contents' title and the include directive which create a list of links to the sections of the chapter according to their level and navigation order.


### New section template

Files for sections within a chapter must be placed in the chapter's directory. Currently, the contents of the book are organised in three levels of difficulty:

1.  basic
2.  medium
3.  advanced

The following code represents an empty section and can be used as a template

```markdown
---
layout: circuitverse
title: Section title
nav_order: l0s000
cvib_level: advanced
parent: Parent Chapter
has_children: false
---

# Long section title
{: .no_toc}

## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}

## Title

Text
```

Each section file should have content belonging only to one of these levels. Therefore, the front matter block presents the `cvib_level` which correspond to one of the levels.

The `parent` element must be the name of the Chapter containing the section.

The section's title goes in the `title` element.

To standardise the order of sections in the navigation bar according to the difficulty level, the `nav_order` element is an "encoded" string with this form: `l`, followed by a digit, followed by `s`, followed by three digits. `l` stands for *level* and is a number between 0 and 2 and represent the basic, medium and advanced level, respectively. `s` stands for *section* and the three digit number after it is a zero-padded number indicating the section position in the chapter.

The other elements in the front matter block (`layout`, `has_children`) should be should be left as they are.

After the front matter block comes the section's title followed by the table of contents title and code to generate it automatically.

After that, parts within the section can be added.


### Equations examples

Equations are processed using MathJax provided by the [jekyll-spaceship](https://github.com/jeffreytse/jekyll-spaceship#2-mathjax-usage) plugin.

The following are valid mathematical formulas and their rendering:

1.  Unnumbered equations

    ```latex
    $ f(x)=\int_2^n \frac{1}{2\pi}x^2 $
    ```
    
    $ f(x)=\int_2^n \frac{1}{2\pi}x^2 $
    
    ```latex
    $ F(A,B,C) = A + B \cdot C $
    ```
    
    $ F(A,B,C) = A + B &sdot; C $

2.  Automatically numbered equations

    ```latex
    $ \begin{equation}F(x_0, x_1) = x_0 + \overline{x_1} \end{equation} $
    ```
    
    $ \begin{equation}F(x_0, x_1) = x_0 + \overline{x_1} \end{equation} $

3.  Manually numbered equations

    ```latex
    \\[ F(A,B,C) = A + B \cdot C \tag{1}\\]
    ```
    
    \\[ F(A,B,C) = A + B \cdot C \tag{1}\\]


### Figure examples

Neither Jekyll nor Markdown provide facilities to add captions to images. Therefore, instead of using direct inclusion of images in MD syntax, the Jekyll include mechanism is used to generate properly captioned figures in the HTML rendering. To use it, include a figure like this:

```markdown
{% raw %}
{% include image.html url="/assets/images/path-to-image/image.svg" description="Image caption" %}
{% endraw %}
```

For instance, the following code:

```markdown
{% raw %}
{% include image.html url="/assets/images/XnorGate.svg" description="XNOR Gate" %}
{% endraw %}
```

will render like this:

{% include image.html url="/assets/images/XnorGate.svg" description="XNOR Gate" %}


### Table examples

Complex tables can be handled by the [jekyll-spaceship](https://github.com/jeffreytse/jekyll-spaceship#1-table-usage) plugin. However, there is no support for table captions. As a workaround, the Table caption can be included in the first row and styled with the table caption CSS `tblcap`.

```markdown
|: Table: Sample data     {: .tblcap}  :|||
| col 1       | col 2       | col 3       |
|:-----------:|:------------|------------:|
| row1 col2   | row1 col2   | row1 col3   |
| row2 col1   | row2 col2   | row2 col3   |
```

which renders to

|: Table: Sample data     {: .tblcap}  :|||
| col 1       | col 2       | col 3       |
|:-----------:|:------------|------------:|
| row1 col2   | row1 col2   | row1 col3   |
| row2 col1   | row2 col2   | row2 col3   |


### Bibliography example

Bibliographic references are processed by the `jekyll-scholar` plugin. It uses BibTeX files as the source for the references. To use it, the following must be done:

1.  Add the the BibTeX file to the `_bibliography/` directory. Care must be taken to not overwrite other bib files in the directory.
2.  If the BibTex file is named `myrefs.bib`, then
    1.  To cite a reference use this tag:
        
        ```markdown
        {% raw %}
        {% cite refid --file myrefs %}
        {% endraw %}
        ```
        
        where `refid` is the BibTeX id of the reference and `myfile` is the BibTeX file without the `.bib` extension.
    2.  To print the list of references cited in the section use the following code:
        
        ```markdown
        ## References
        {% raw %}
        {% bibliography --cited --file myrefs %}
        {% endraw %}
        ```

Check the [plugin page](https://github.com/inukshuk/jekyll-scholar) for more complex uses.

---


## Code of conduct, interacting with the community / etiquette

Refer to the Contributor Covenant Code of Conduct

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
