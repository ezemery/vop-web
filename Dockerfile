FROM node:12.16.3-alpine3.9
WORKDIR /var/www
COPY ./ ./
RUN apk update
RUN apk add build-base python-dev py-pip jpeg-dev zlib-dev yarn
ENV LIBRARY_PATH=/lib:/usr/lib
RUN npx next -h
RUN yarn install && yarn copy-deps && yarn install-deps 
RUN cd packages/landing && yarn add --dev file-loader url-loader
CMD ["yarn", "next-dev"]
EXPOSE 3000

