FROM node:16.5.0

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install -g nodemon

RUN npm install

COPY . .

# EXPOSE 8000

CMD npm run dev