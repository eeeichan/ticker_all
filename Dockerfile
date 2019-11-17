FROM ruby:2.6.5

RUN apt-get update -qq && apt-get install -y mariadb-client build-essential nodejs apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

RUN mkdir /products
ENV APP_ROOT /products
WORKDIR $APP_ROOT
RUN yarn install --check-files

COPY Gemfile $APP_ROOT/Gemfile
COPY Gemfile.lock $APP_ROOT/Gemfile.lock

RUN bundle install
COPY . /$APP_ROOT
