FROM node:12.16.3-alpine3.9
WORKDIR /var/www
COPY ./ ./
RUN apk update
RUN apk add yarn
RUN cd packages/landing && yarn install
CMD ["yarn", "next-dev"]
EXPOSE 3000

