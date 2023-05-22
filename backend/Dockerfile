FROM node:18.16

COPY . .

RUN npm cache clean -f
RUN npm install

EXPOSE 8000

CMD npm run dev

