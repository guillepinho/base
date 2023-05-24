FROM node:18.16

RUN apt update

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

RUN npm install -g sequelize-cli

ENTRYPOINT [ "sh", "-c", "npm i && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && npm run dev" ]
