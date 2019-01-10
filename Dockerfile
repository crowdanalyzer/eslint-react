FROM node:10.14.0
ARG NPM_TOKEN
ENV NPM_TOKEN $NPM_TOKEN
WORKDIR /var/code/
ADD . /var/code/
COPY ./.npmrc-example ./.npmrc
RUN npm install
ENTRYPOINT ./startup.sh
