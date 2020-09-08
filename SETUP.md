# Setting Up Interactive Book

[Back to `README.md`](README.md)


## Clone this repo!

First things first. Make a local clone of this repo so you can work on it from your own computer.

```
git clone https://github.com/CircuitVerse/Interactive-Book.git
cd Interactive-Book
```

## Install, and Serve!

This website was built using [Jekyll](https://jekyllrb.com/). So if you are familiar with this and already have Jekyll installed, you can scroll past the instructions we have below.

**Setting up your development environment**

To do this, you are going to need a computer capable of running Ruby - while Mac OSX or Linux tends to be easiest, plenty of people do Ruby development on Windows as well. If you're not on Mac OSX, you will likely need to install Ruby yourself.

**Install Gems and Serving the Website**

The required gems for this project are [Bundler](http://bundler.io/) and [Jekyll](https://jekyllrb.com/). Once you have Ruby installed, open your terminal, `cd` to the local repo directory, and run the following commands:

```
gem install jekyll
gem install bundle
```

This will install Bundler and Jekyll. If you have any errors, make sure that you have installed Ruby correctly.

Next, install the projects dependencies and serve:

```
bundle install
bundle exec jekyll serve
```

This should start serving the website on http://0.0.0.0:4000/ - simply make changes to the source code and see your changes live at that URL!