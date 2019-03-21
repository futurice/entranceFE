# --- Build using NodeJS
FROM node:10-alpine AS builder
WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn
COPY src src
COPY public public
COPY .env.production ./
RUN yarn build

# --- Expose using Nginx
# We're using dockerize (https://github.com/jwilder/dockerize) to fill in the
# nginx configuration template, making the application configurable via
# environment variables.
FROM nginx:alpine

ENV DOCKERIZE_VERSION=v0.6.1
RUN wget -O dockerize.tar.gz https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize.tar.gz \
  && rm dockerize.tar.gz

COPY .docker/default.conf.tpl /etc/nginx/conf.d/default.conf.tpl
COPY --from=builder /opt/app/build/ /usr/share/nginx/html

CMD dockerize -template /etc/nginx/conf.d/default.conf.tpl:/etc/nginx/conf.d/default.conf nginx -g 'daemon off;'
