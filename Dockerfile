FROM node:latest

# создаем дирректорию проекта
WORKDIR /usr/src/app

# копируем файлы: package.json и package-lock.json
COPY package*.json ./

RUN npm install

# копируем исходный код
COPY . .


EXPOSE 8080

CMD [ "npx", "nodemon", "src/server.js"]
#CMD [ "node", "src/server.js"]

