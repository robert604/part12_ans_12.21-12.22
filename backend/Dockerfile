FROM node:16

WORKDIR usr/src/app

COPY ./db.json ./db.json

RUN npm install -g json-server

#CMD npm run server
CMD json-server --watch db.json --host 0.0.0.0 --port 3001
