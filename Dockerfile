FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

ARG NEXT_PUBLIC_API_URL

RUN npm run build

EXPOSE 3000

CMD npm run start