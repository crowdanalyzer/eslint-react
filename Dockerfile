FROM node:10.14.0
WORKDIR /var/code/
ADD . /var/code/
RUN npm install
ENTRYPOINT ./startup.sh
