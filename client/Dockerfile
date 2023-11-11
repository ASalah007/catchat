
FROM node:current-alpine3.18

WORKDIR /usr/src/frontend_server

COPY package.json .

RUN npm install 

COPY src src

COPY tsconfig.json tsconfig.json

COPY public public

EXPOSE 3000

CMD [ "npm", "start" ]