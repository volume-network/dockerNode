# 矿池节点说明

## 部署

### Docker安装

可以参考这里：https://yeasy.gitbooks.io/docker_practice/machine/install.html

### H2 DB部署

首先创建docker image	

	docker build -f Dockerfile.h2 -t vol-h2 . 

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
	Successfully tagged vol-h2:latest


之后可以从docker images 中看到如下镜像：

	docker image ls
	
	REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
	vol-h2              latest              bc850c94fdb1        2 minutes ago       213MB

### mariadb\mysql 部署

	
同理首先创建docker image	

	docker build -f Dockerfile.mariadb -t vol-maria . 

之后可以从docker images 中看到如下镜像：

	docker image ls

	REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
	vol-maria           latest              5944a59da818        3 seconds ago       213MB
	vol-h2              latest              bc850c94fdb1        3 minutes ago       213MB


## 运行

### h2镜像运行
	
镜像构建成功后，我们通过docker来运行当前镜像，并暴露对外接口	

	docker run -it -d -p 8123:8123 -p 8125:8125 -p 8121:8121 vol-h2  java -classpath  /app/burst.jar:/conf brs.Burst

### mariadb镜像运行

首先本地先安装db，以mariadb为例。

	apt-get install mariadb-server -y

之后创建db和用户：
	
	 mysql -uroot
	 create database burst default character set utf8;
	 grant all privileges on burst.* to root@localhost identified by 'burst';

如果修改密码，需要对应修改目录下conf/brs.properties.mariadb中的Username和Password，默认值如下：

	DB.Url=jdbc:mariadb://localhost:3306/burst
	DB.Username=root
	DB.Password=burst

如果修改密码，要重新编译Docker镜像。参考上一节。之后运行镜像：

	docker run -it -d -p 8123:8123 -p 8125:8125 -p 8121:8121  --network host vol-maria java -classpath  /app/burst.jar:/conf brs.Burst
	
db如果不在本地启动可以选择不使用host方式的网桥。


## 矿工加入
	
以creepMiner为例，配置creepMiner的mininfo.conf


      "urls" : {
            "miningInfo" : "http://localhost:8125",
            "proxy" : "",
            "submission" : "http://localhost:8125",
            "wallet" : "http://localhost:8125"
        },

启动：

    	sh run.sh

界面：

    	http://localhost:8124

可以查看挖矿情况。



## 管理界面

矿池管理界面可以通过 http://your-ip:8125/来访问，如果不能访问请检查ip-tables等配置。