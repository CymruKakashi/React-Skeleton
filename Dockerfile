#Build the react app using yarn
FROM node AS build
WORKDIR /src
COPY . .
RUN npm rebuild node-sass && yarn build
#copy built files to the Nginx server for runtime
FROM nginx as runtime
WORKDIR /app
COPY --from=build /src/build /usr/share/nginx/html