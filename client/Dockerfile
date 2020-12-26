FROM node:12.13.0-alpine

WORKDIR /client

COPY package*.json /client/
RUN npm install

COPY . /client/

EXPOSE 3000
EXPOSE 35729

CMD ["npm", "start"]