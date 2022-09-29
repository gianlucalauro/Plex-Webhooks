FROM node:16

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 12000
CMD [ "node", "plex_webhooks.js" ]