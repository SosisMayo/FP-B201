FROM nginx
CMD sudo mkdir /etc/nginx/ssl && sudo chmod 700 etc/nginx/ssl && sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/example.key -out /etc/nginx/ssl/example.crt
COPY default.conf /etc/nginx/conf.d/