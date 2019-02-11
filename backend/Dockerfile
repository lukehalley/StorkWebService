FROM node:8.15.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle the app source
COPY . .

# Exposing port 3000
EXPOSE 3000

CMD [ "npm", "start" ]