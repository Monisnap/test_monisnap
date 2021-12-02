FROM node:alpine as base
USER root

WORKDIR /home/app

COPY package.json  /home/app/

COPY package-lock.json /home/app/

RUN npm install --forzen-lockfile

COPY ./ /home/app

EXPOSE 8080

CMD [ "npm", "run" ,"dev" ]

FROM base as production

ENV NODE_PATH=./build

RUN npm run build
