#Build the react app using yarn
FROM node:14 AS build
WORKDIR /src
COPY . .
RUN yarn build
#copy built files to the Nginx server for runtime
FROM nginx:1.19 as runtime
WORKDIR /app
COPY --from=build /src/build /usr/share/nginx/html