FROM node:8.11.4
RUN npm install sails -g
RUN npm install sails-mysql -g 
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . . 
EXPOSE 1337
CMD sails lift