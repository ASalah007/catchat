FROM node:current-alpine3.18

WORKDIR /usr/src/catchat_server

COPY package.json .

RUN npm install

COPY src src

COPY prisma prisma

RUN npx prisma generate

EXPOSE 8080

CMD [ "npx", "nodemon", "-L", "src/server.ts" ]

