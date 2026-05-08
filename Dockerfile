FROM node:24-alpine AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ARG VITE_APP_DOCKER_IMAGE_TAG=local
ENV VITE_APP_DOCKER_IMAGE_TAG=$VITE_APP_DOCKER_IMAGE_TAG

RUN yarn build

FROM nginx:stable-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
