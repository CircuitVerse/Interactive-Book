# Architecture

[Back to `README.md`](README.md)

## Overview
The Interactive book has two components in it. 
1. Content
2. Interactions

<div style="text-align:center"><img src="/assets/images/ib.png" /></div>

### Content
It includes quality content that would be gathered from various books (primarily from ‘​Digital Design​’ by ​Morris Mano as its copyright has expired and is in the public domain) and online material. Basic notes have already been prepared to reference the aforementioned book and are attached to the table below.

### Interactions
There would be two types of Interactions.

1. **Circuit Interactions-** This includes designing optimal circuits which would help to clearly understand the logic. The student would be able to clearly detect the variation of output with the change in input via these circuits. With each Interaction module, there would be a set of instructions that would guide the user to see the desired changes.
2. **Module Specific Interactions-** This includes interaction that is designed for an individual module like kmap simulator, truth table generator, etc.

## Code Structure
Jekyll is, at its core, a text transformation engine. The concept behind the system is this: you give it text written in your favorite markup language, be that Markdown, Textile, or just plain HTML, and it churns that through a layout or a series of layout files. Throughout that process you can tweak how you want the site URLs to look, what data gets displayed in the layout, and more. This is all done through editing text files; the static web site is the final product. The structure of Interactive Book looks something like this:
<pre>
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes(contains module-specific interactions along with their respective CSS)
|   ├── binary.html
|   └── gates.html
├── _layouts(includes layout types)
|   ├── default.html
|   └── home.html
├── assets
|   ├── CSS(contains CSS of book's layout)
|   └── js(contains all the javascript required for module-specific interactions as well as book layout)
|   └── images(contains all the images required in the project)
├── docs(contains all the modules)
|   ├── Combinational
|   |   ├── full_adder.md
|   |   └── half_adder.md
|   └── binary.md
├── _site
├── .jekyll-metadata
└── index.md 
</pre>

## Pop Quizzes
CircuitVerse has a custom pop quiz system to reinforce learning at the end of a page. This is in the form of a few multi-choice or true/false questions.

### Configuration
The quiz should be at the end of a page and is initialised with `{:.quiz}`. Questions are then added in a list, with correct answers being numbered subelements and incorrect answers being unordered subelements. Please see below for an example:
```markdown
{:.quiz}
1. Example question
	1. Correct answer
	* Incorrect answer
2. What is 1 + 1?
	* 1
	1. 2	
   	* 3
```
Note that answers must be text only and not contain any other formatting.

## Plugins used
* [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag):
    A Jekyll plugin to add metadata tags for search engines and social networks to better index and display your site's content
* [jekyll-github-metadata](https://github.com/jekyll/github-metadata):
    Jekyll plugin to propagate the `site.github` namespace and set default values for use with GitHub Pages
* [jekyll-tagging](https://github.com/pattex/jekyll-tagging):
    Jekyll plugin to automatically generate a tag cloud and tag pages
* [jekyll-admin](https://github.com/jekyll/jekyll-admin):
    A Jekyll plugin that provides users with a traditional CMS-style graphical interface to author content and administer Jekyll sites
* [Just-the-Docs](https://github.com/pmarsceill/just-the-docs): An interactive Jekyll theme built in search