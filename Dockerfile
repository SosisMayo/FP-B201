FROM node:alpine

ADD . .
WORKDIR /
RUN npm update
EXPOSE 3000
CMD npm start 