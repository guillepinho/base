FROM node:alpine

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "sh", "-c", "npm i && npm run dev" ]