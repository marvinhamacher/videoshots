FROM --platform=$BUILDPLATFORM node:20-alpine as builder

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@18

COPY package.json package-lock.json ./
RUN npm ci
EXPOSE 4200
COPY . .
CMD ["ng", "add", "@angular/material"]
CMD ["ng", "serve","--host=0.0.0.0"]


