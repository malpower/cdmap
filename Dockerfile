FROM node:latest

COPY cdmap /app/

WORKDIR "/app/"
RUN "npm" "install"

CMD "npm" "start"

EXPOSE 3000
