#!/bin/bash - 
#===============================================================================
#
#          FILE: install.sh
# 
#         USAGE: ./install.sh 
# 
#   DESCRIPTION: 
# 
#       OPTIONS: ---
#  REQUIREMENTS: ---
#          BUGS: ---
#         NOTES: ---
#        AUTHOR: YOUR NAME (), 
#  ORGANIZATION: 
#       CREATED: 09/10/2019 20:31
#      REVISION:  ---
#===============================================================================

set -o nounset                              # Treat unset variables as an error

docker build -f Dockerfile -t vol .

mkdir -p /tmp/db/mariadb &&
     docker run --name voldb\
    -p 3306:3306 \
    -v /tmp/db/mariadb:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=volume \
    -d mariadb:latest
echo "waiting database to start"

sleep 60

docker exec -i voldb mysql -uroot -pvolume < create.sql

docker exec -i voldb mysql -uroot -pvolume -Dvlm_master < init-mysql.sql

docker run -d -p 8123:8123 -p 8125:8125 -p 8121:8121 vol java /app/volume.jar:/conf vlm.Volume

