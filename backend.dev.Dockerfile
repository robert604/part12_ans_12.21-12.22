FROM node:16

WORKDIR usr/src/app

COPY . .

#RUN NODE_ENV=development npm install
RUN npm install -g json-server

#CMD npm run server
CMD json-server --watch db.json --host 0.0.0.0 --port 3001
#CMD json-server --watch db.json --port 3001