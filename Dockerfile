FROM ruby:2.7.6

# set up workdir
RUN mkdir /interactive-book
WORKDIR /interactive-book

# install dependencies
RUN gem install jekyll bundle

# copy source
COPY . /interactive-book
RUN bundle install

# entry point
EXPOSE 4000 
CMD bundle exec jekyll serve --host 0.0.0.0