FROM node:alpine

ADD . .
WORKDIR /
EXPOSE 3000
RUN npm update
CMD node app.js