FROM node:lts

COPY . .

WORKDIR /usr/app
COPY ./ /usr/app

RUN npm install

RUN npm install

CMD [ "npm", "run", "start" ]
