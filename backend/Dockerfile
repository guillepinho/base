FROM node:18.16

RUN apt update
RUN apt install lsof

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

ENTRYPOINT [ "npm", "run", "dev" ]

