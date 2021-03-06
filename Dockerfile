# pull official base image
FROM node:14.2-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn --silent
RUN yarn add react-scripts@3.4.1 --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]