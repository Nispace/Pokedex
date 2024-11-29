FROM node:18

WORKDIR /BACKEND

COPY package.json ./
COPY package-lock.json ./
#COPY app/BACKEND/index.js ./


RUN npm install
RUN npm install -g nodemon

#RUN ls -lah

COPY BACKEND/ . 

#CMD ["npm", "run", "start"]
CMD ["nodemon", "index.js"]