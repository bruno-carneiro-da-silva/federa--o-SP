FROM nginx:stable-alpine as SETUP
EXPOSE 80
WORKDIR /usr/share/nginx/html
COPY . .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# * No diretório do dockerfile execute o comando:
# docker build . -t juvabit/federacaowebapp:latest
