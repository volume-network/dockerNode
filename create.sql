create database vlm_master default character set utf8;
use vlm_master;
create user vlm_user@localhost;
grant all privileges on vlm_master.* to vlm_user@localhost identified by 'volume';
create user vlm_user@'172.17.0.%';
grant all privileges on vlm_master.* to vlm_user@'172.17.0.%' identified by 'volume';
