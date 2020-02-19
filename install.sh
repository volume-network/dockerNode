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

docker pull mariadb

docker build -f Dockerfile -t volapp .

docker run --name voldb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=volume -d mariadb:latest

echo Wait for mariadb 180 sec

sleep 180

docker exec -i voldb mysql -uroot -pvolume < create.sql

docker exec -i voldb mysql -uroot -pvolume -Dvlm_master < init-mysql.sql

docker run --name volapp -it -p 9125:9125 -p 9121:9121 --link voldb volapp

