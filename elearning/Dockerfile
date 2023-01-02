FROM node:latest; 
Workdir /elearning ;
COPY package.json /elearning;
RUN npm install;
COPY /elearning;
CMD server.js;
EXPOSE 3000;

