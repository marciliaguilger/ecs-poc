FROM alpine:latest

RUN apk update
RUN apk add npm

RUN mkdir /app
WORKDIR /app

COPY app.js app.js
RUN npm install express

ENTRYPOINT ["node", "app.js"]
EXPOSE 3000