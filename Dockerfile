FROM ruby:3.2-alpine

# Add Jekyll dependencies to Alpine
RUN apk update
RUN apk add --no-cache build-base gcc cmake git libxml2-dev libxslt-dev

# set up workdir
RUN mkdir /interactive-book
WORKDIR /interactive-book

# Update the Ruby bundler and install Jekyll
RUN gem update bundler && gem install bundler jekyll

# copy source
COPY . /interactive-book
RUN bundle install

# entry point
EXPOSE 4000 
CMD bundle exec jekyll serve --host 0.0.0.0
