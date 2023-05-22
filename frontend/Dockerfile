FROM node:alpine

COPY . .

RUN npm cache clean -f
RUN npm install

EXPOSE 3000

CMD npm run dev

