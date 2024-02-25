
# Interactive-Book


<img src="/assets/images/cvlogo.svg" alt="The CircuitVerse logo" width="736"/></br>

[![Slack](https://img.shields.io/badge/chat-on_slack-purple.svg?style=for-the-badge&logo=slack)](https://www.circuitverse.org/slack)

[Join Mailing List](https://circuitverse.us20.list-manage.com/subscribe?u=89207abda49deef3ba56f1411&id=29473194d6)


## About the project
The aim of this project is to create an online interactive guide for digital logic design. The primary goal is to develop an open sourcebook with quality content that teaches digital logic design. It will enable students to learn digital design by interacting with circuits, truth table, and other interactive elements as they proceed through the book. The professors and students all over the world can read and contribute to the same.

As contributors and maintainers of this project, and in the interest of fostering an open and welcoming community, we pledge to respect all people who contribute through reporting issues, posting feature requests, updating documentation, submitting pull requests or patches, and other activities.

### CircuitVerse
[CircuitVerse](https://circuitverse.org) is a product developed by students at IIIT-Bangalore. It aims to provide a platform where circuits can be designed and simulated using a graphical user interface. While users can design complete CPU implementations within the simulator, the software is designed primarily for educational use. CircuitVerse is an opensource project with an active community.


## Clone this repo!

First things first. Make a local clone of this repo so you can work on it from your own computer.

```
git clone https://github.com/CircuitVerse/Interactive-Book.git
cd Interactive-Book
```

## Install, and Serve!

### Gitpod Cloud Environment
[Gitpod](https://www.gitpod.io/) is a free platform that allows you to develop CircuitVerse in a cloud VS Code environment. 

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/CircuitVerse/Interactive-Book)

### Docker Local Environment
[Docker](https://www.docker.com/) can create virtual machines on your PC, so you don't have to manually set up dependencies.

**Note**: Please follow [these](https://docs.docker.com/docker-for-windows/install-windows-home/) instructions for installing Docker on Windows 10 Home

#### Usage
* Run `docker compose up` to run the instance
* Run `docker compose down` to stop the instance
* Run `docker compose build --no-cache` to rebuild the instance (make sure the instance is not running first)

### Local Environment
This website was built using [Jekyll](https://jekyllrb.com/). So if you are familiar with this and already have Jekyll installed, you can scroll past the instructions we have below.

**Setting up your development environment**

To do this, you are going to need a computer capable of running Ruby - while Mac OSX or Linux tends to be easiest, plenty of people do Ruby development on Windows as well. If you're not on Mac OSX, you will likely need to install Ruby yourself.

**Setting up Ruby**

Windows(https://docs.google.com/document/d/14yFhLBi7Il1MFmPxWZgNSglbe3SdO0mjujH7MayYK5A/edit?usp=sharing)
MacOS(https://docs.google.com/document/d/1Y6VpVh8K4Y-lvbStLcRNwZ68pFyvT_Kk3KpsyhOo0rc/edit?usp=sharing)
Linux(https://docs.google.com/document/d/1hEnF2tlenorKgAcaQPGTdyOufvtYpBY6FWyUeUBEhh4/edit?usp=sharing)

**Install Gems and Serving the Website**

Once you have Ruby installed, open your terminal, `cd` to the local repo directory, and run the following commands:

```
bundle install
bundle exec jekyll serve
```

This should start serving the website on http://0.0.0.0:4000/ - simply make changes to the source code and can see your changes live at that URL!

> NOTE: If you are running into problems where your site is getting redirected to learn.circuitverse.org, you can set `CV_SITE_URL` before running the server.

## Contribute!

We are open to all contributions by anyone, and we encourage all new members to create join our slack and discord channel.
Here are links to our:

[![Slack](https://img.shields.io/badge/chat-on_slack-purple.svg?style=for-the-badge&logo=slack)](https://www.circuitverse.org/slack)


## Contributors
Thanks to everyone who has contributed to the Interactive Book so far!
<a href="https://github.com/CircuitVerse/Interactive-Book/graphs/contributors"><img src="https://contributors-img.firebaseapp.com/image?repo=CircuitVerse/Interactive-Book" alt="Image of contributors"></a>


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

**However, we do have some rules and general guidelines we would like you to follow:**

1. Everything must start with an issue...
	* Issues should have useful, concise titles and enough of a description to understand the scope of the issue.

2. Branches should link to individual issues, and be named using consistent syntax consisting of "issue type", "issue number", and a descriptive title (using hyphens for spaces, and all lower case). Examples:
	* bug/#123-abbreviated-issue-title
	* feature/#123-abbreviated-issue-title
	* enhancement/#123-abbreviated-issue-title

3. Pull requests may not be merged by the requester. Ever.

4. Once a pull request is merged, the branch should be removed.

5. Always follow good Github etiquette. Several helpful reads on the topic:
	* [Use Github keywords to auto-link close issues](https://help.github.com/articles/closing-issues-via-commit-messages/)	
	* [Git - Contributing to a Project](http://git-scm.com/book/ch5-2.html)
	* [Who-T - On Commit Messages](http://who-t.blogspot.com/2009/12/on-commit-messages.html)
	
	
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
    A Jekyll plugin to add metadata tags for search engines and social networks to better index and display your site's content.
* [jekyll-github-metadata](https://github.com/jekyll/github-metadata):
    Jekyll plugin to propagate the `site.github` namespace and set default values for use with GitHub Pages.
* [jekyll-tagging](https://github.com/pattex/jekyll-tagging):
    Jekyll plugin to automatically generate a tag cloud and tag pages.
* [jekyll-admin](https://github.com/jekyll/jekyll-admin):
    A Jekyll plugin that provides users with a traditional CMS-style graphical interface to author content and administer Jekyll sites.

## Where to get support

If you're looking for support for Jekyll, there are a lot of options:

* Read [Jekyll Documentation](https://jekyllrb.com/docs/)
* Read [DigitalOcean Jekyll Guide](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-jekyll-development-site-on-ubuntu-16-04)
* If you have a question about using Jekyll, start a discussion on [the Jekyll Forum](https://talk.jekyllrb.com/) or [StackOverflow](https://stackoverflow.com/questions/tagged/jekyll)
* Chat with slackers &mdash; Join [slack channel](https://join.slack.com/t/circuitverse-team/shared_invite/enQtNjc4MzcyNDE5OTA3LTdjYTM5NjFiZWZlZGI2MmU1MmYzYzczNmZlZDg5MjYxYmQ4ODRjMjQxM2UyMWI5ODUzODQzMDU2ZDEzNjI4NmE)

There are a bunch of helpful community members on these services that should be willing to point you in the right direction.

**Reminder: Jekyll's issue tracker is not a support forum.**

In addition to these plugins, Interactive book also inherit's all the plugins used in [Just-the-Docs](https://github.com/pmarsceill/just-the-docs)
## Jekyllconf

[Watch videos](https://jekyllrb.com/jekyllconf/) from members of the Jekyll community speak about interesting use cases, tricks they’ve learned, or meta Jekyll topics.


---
### Create, Contribute, Learn, and succeed with CircuitVerse!!!

Interactive-Book is &copy; 2024 by [CircuitVerse](https://circuitverse.org/)
