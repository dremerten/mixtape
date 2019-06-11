FROM ruby:2.5.1

RUN apt-get update && apt-get install -y postgresql-client docker-compose nodejs libtag1-dev build-essential vim zsh ranger htop tmux && sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" && chsh -s /bin/bash

WORKDIR /app
COPY Gemfile* ./
RUN gem install taglib-ruby 
RUN gem install redis
RUN gem install bundler
RUN bundle install 
COPY . .
RUN chmod +x /app/bin/docker-entrypoint.sh

ENTRYPOINT ["/app/bin/docker-entrypoint.sh"]
CMD ["rails", "server", "-b", "0.0.0.0"]

