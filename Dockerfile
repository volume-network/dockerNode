FROM openjdk:8-jre-alpine
RUN apk update && apk upgrade && apk add --no-cache bash

VOLUME ["/conf"]
WORKDIR /app
COPY volume.jar /app
COPY html /app/html
COPY conf/vlm.properties /conf/vlm.properties
COPY conf/vlm-default.properties /conf/vlm-default.properties
COPY conf/logging.properties /conf/logging.properties
EXPOSE 9121 9125
ENTRYPOINT ["java", "-cp", "/app/volume.jar:/conf", "vlm.Volume"]
