FROM openjdk:8-jre-alpine
RUN apk update && apk upgrade && apk add --no-cache bash

VOLUME ["/conf"]
WORKDIR /app
COPY volume.jar /app
COPY html /app/html
COPY conf/vlm.properties /conf/vlm.properties
COPY conf/vlm-default.properties /conf/vlm-default.properties
COPY conf/logging-default.properties /conf/logging-default.properties
EXPOSE 8125 8123 8121
ENTRYPOINT ["java", "-cp", "/app/volume.jar:/conf", "vlm.Volume"]
