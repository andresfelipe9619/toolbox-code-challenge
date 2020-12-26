FROM node:12.13.0-alpine

WORKDIR /api

COPY package*.json /api/
RUN npm install

COPY . /api/

EXPOSE 5000

CMD ["npm", "start"]