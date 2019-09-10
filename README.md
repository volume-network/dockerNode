# 矿池节点部署说明

## 节点下载

	wget https://github.com/volume-network/dockerNode/blob/master/vol.tar.gz

## 配置文件
	
配置文件主要需要改动如下几个地方：
	

- 矿池的对外ip，提供给矿工或者其他矿池
	
	P2P.myAddress = 192.168.3.3

- 矿池节点之间的通信端口（原则上不用改）

	P2P.Port = 8121

- 矿池节点的Listen地址（原则行不用改）

	P2P.Listen = 0.0.0.0

- 启动时的种子节点（由官方提供）

	P2P.BootstrapPeers = 47.93.254.196:8121

- APISever的Listen地址(原则上不用改)

	API.Listen = 0.0.0.0

- 是否打开APIServer(以及grpc版本的APIServer)（原则上不用改）

	
	API.Server = on
	API.V2.Server = on

- APIServer的监听端口（以及grpc版本的APIServer）（原则上不用改）


	API.Port = 8125
	API.V2.Port = 8123
 
- DB连接字符串(按照实际配置情况修改，参考下面DB配置章节)

	DB.Url=jdbc:mariadb://172.17.0.1:3306/vlm_master
	DB.Username=vlm_user
	DB.Password=volume

- 矿池SecPass和PublicKey列表（按照实际情况修改）

	vlm.MinePool.passphase = 
	vlm.MinePool.PublicList = 


## Docker方式布署

### Docker安装

可以参考这里：https://yeasy.gitbooks.io/docker_practice/machine/install.html

ubuntu 为例：
	
	curl -fsSL get.docker.com -o get-docker.sh 
	sudo sh get-docker.sh --mirror Aliyun #这里主要是国内加速

	sudo systemctl enable docker
	sudo systemctl start docker

	sudo groupadd docker
	sudo usermod -aG docker $USER

### 镜像构建

	tar zxvf vol.tar.gz 
	cd volume && sudo docker build -f Dockerfile -t vol .

如果创建成功可以看到如下：
	
	Sending build context to Docker daemon  156.5MB
	Step 1/11 : FROM openjdk:8-jre-alpine
	 ---> f7a292bbb70c
	Step 2/11 : RUN apk update && apk upgrade && apk add --no-cache bash
	 ---> Running in 44a8e0d63f58
	fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/main/x86_64/APKINDEX.tar.gz
	fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/community/x86_64/APKINDEX.tar.gz
	v3.9.4-125-g2062e8a6bd [http://dl-cdn.alpinelinux.org/alpine/v3.9/main]
	v3.9.4-127-gf9de9e350a [http://dl-cdn.alpinelinux.org/alpine/v3.9/community]
	OK: 9783 distinct packages available
	(1/7) Upgrading musl (1.1.20-r4 -> 1.1.20-r5)
	(2/7) Upgrading musl-utils (1.1.20-r4 -> 1.1.20-r5)
	(3/7) Upgrading libtasn1 (4.13-r0 -> 4.14-r0)
	(4/7) Upgrading sqlite-libs (3.26.0-r3 -> 3.28.0-r0)
	(5/7) Upgrading libbz2 (1.0.6-r6 -> 1.0.6-r7)
	(6/7) Upgrading libjpeg-turbo (1.5.3-r4 -> 1.5.3-r5)
	(7/7) Upgrading openjdk8-jre-base (8.212.04-r0 -> 8.212.04-r1)
	Executing busybox-1.29.3-r10.trigger
	Executing java-common-0.1-r0.trigger
	OK: 84 MiB in 53 packages
	fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/main/x86_64/APKINDEX.tar.gz
	fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/community/x86_64/APKINDEX.tar.gz
	....
	Successfully tagged vol:latest


之后可以从docker images 中看到如下镜像：

	docker image ls
	
	REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
	vol             	latest              bc850c94fdb1        2 minutes ago       213MB


### db安装

	mkdir -p /data/db/mariadb && 
	sudo docker run --name voldb\
	    -p 3306:3306 \
	    -v /data/db/mariadb:/var/lib/mysql \
	    -e MYSQL_ROOT_PASSWORD=volume \
	    -d mariadb:10.1
	
数据库文件映射到本地地址/data/db/mariadb，防止镜像问题导致数据库丢失，同时可以多镜像共享一个db，MYSQL_ROOT_PASSWORD 需要设置为mysql的root实际密码，请妥善保存。

配置和增加db用户，以及创建数据库schema：

	docker exec -i voldb mysql -uroot -pvolume <create.sql

	docker exec -i voldb mysql -uroot -pvolume -Dvlm_master < init-mysql.sql
	

这种方式下，因为db是跑在docker中的，需要改动下db配置，如下:

	DB.Url=jdbc:mariadb://172.17.0.1:3306/vml_master
	DB.Username=vlm_user
	DB.Password=volume

Password请对应修改create.sql中的password，并妥善保存。

### 镜像启动
	
镜像构建成功后，我们通过docker来运行当前镜像，并暴露对外端口

	docker run -it -p 8123:8123 -p 8125:8125 -p 8121:8121 vol java /app/volume.jar:/conf vlm.Volume 


## 本地方式部署
	

### 安装依赖

	sudo apt-get install -y openjdk-8-jre-headless

### db安装配置

首先本地先安装db，以mariadb为例。

	apt-get install mariadb-server -y

之后创建db和用户：
	
	 mysql -uroot
	 create database vlm_master default character set utf8;
	 use vlm_master;
	 create user vlm_user@localhost;
	 grant all privileges on vlm_master.* to vlm_user@localhost identified by 'volume';
	 source init-mysql.sql

如果修改密码，需要对应修改目录下conf/vlm.properties中的Username和Password，默认值如下：

	DB.Url=jdbc:mariadb://localhost:3306/vml_master
	DB.Username=vlm_user
	DB.Password=volume

### 启动和守护进程

简单启动并在后台运行可以：

	nohup java -cp volume.jar:conf vlm.Volume

需要自动守护可以考虑systemctl或者supervise.


## 管理界面

矿池管理界面可以通过 http://your-ip:8125/来访问，如果不能访问请检查ip-tables等配置。
