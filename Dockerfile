<<<<<<< HEAD
FROM nginx

COPY favicon.ico /usr/share/nginx/html/favicon.ico
COPY index.html /usr/share/nginx/html/index.html
COPY script.js /usr/share/nginx/html/script.js
COPY style.css /usr/share/nginx/html/style.css
COPY taxCalculator.js /usr/share/nginx/html/taxCalculator.js
=======
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
>>>>>>> d1e8da70cd7f43fd142c38ae2500ec37c37edb89
