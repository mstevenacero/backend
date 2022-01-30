FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

WORKDIR /usr/src/app

RUN npm install mysql2 -g

RUN npm install

COPY ./ /usr/src/app

ENV NODE_ENV=development

EXPOSE 3000
