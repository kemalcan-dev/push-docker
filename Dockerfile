FROM node:18-alpine as build

#RUN apt add --no-cache bash
#RUN apk add --no-cache curl
#CMD ["curl", "--version"]
COPY package\*.json ./
RUN npm install

COPY package\*.json ./
RUN npm install
 
#COPY entrypoint.sh .
#RUN chmod +x entrypoint.sh

COPY . .
EXPOSE 3000

#ENTRYPOINT [ "/app/entrypoint.sh" ]
CMD [ “node”, “app.js” ]