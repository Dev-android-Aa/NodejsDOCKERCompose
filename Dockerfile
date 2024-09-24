FROM node:alpine3.10
WORKDIR /usr/code
COPY . . 
RUN npm install 
EXPOSE 5000
CMD [ "npm", "run", "start:prod" ]