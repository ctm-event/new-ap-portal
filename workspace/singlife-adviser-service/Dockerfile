FROM ubuntu:16.04

# Create app directory
WORKDIR /app

# Install Node.js 8 and npm 5
RUN apt-get update
RUN apt-get -qq update
RUN apt-get install -y build-essential
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install -y nodejs

ADD . /app

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]

