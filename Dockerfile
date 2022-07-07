FROM ubuntu:focal

RUN ["/bin/bash", "-c", "apt -y update \
        && echo updateing image"]
RUN ["/bin/bash", "-c", "apt -y install nginx\
        && echo INSTALLING NGINX"]

COPY ./build /var/www/html/

COPY dockerimage .

RUN chmod +x ./dockerimage

RUN ./dockerimage

CMD ["/bin/bash", "-c", "service nginx start && tail -f /dev/null"]
