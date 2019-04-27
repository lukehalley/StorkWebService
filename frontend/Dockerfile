#==================== Building Stage ================================================ 

# Create the image based on the official Node 8.9.0 image from Dockerhub.
FROM node:8.9.0 as node

# Create a directory where our app will be placed.
RUN mkdir -p /stork

# Change directory so that our commands run inside this new directory.
WORKDIR /stork

# Copy dependency definitions
COPY package.json /stork

# Install dependencies using npm
RUN npm install

# Get all the code needed to run the app
COPY . /stork

# Expose the port the app runs in
EXPOSE 4200

#Build the app
RUN npm run build

#==================== Setting up stage ==================== 
# Create image based on the official nginx - Alpine image
FROM nginx:1.13.7-alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=node /stork/dist/stork /usr/share/nginx/html

COPY ./nginx-stork.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]