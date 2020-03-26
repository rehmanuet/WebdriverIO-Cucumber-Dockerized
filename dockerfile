FROM node:10
ADD . /app
WORKDIR /app
RUN npm install
ADD ./docker-compose-ci.yml ./
ADD ./docker-compose.yml ./
ADD ./wdio.conf-c-docker.js ./
ADD ./features features
ADD ./test test
ADD ./pom pom
RUN npm run test