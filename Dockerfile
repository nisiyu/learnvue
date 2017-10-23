FROM node:6.9

MAINTAINER nisiyu(nisiyu91@sina.com)

RUN mkdir /workspace/ -p
COPY . /workspace/
WORKDIR /workspace/

RUN npm install

RUN npm run build

CMD npm run deploy
