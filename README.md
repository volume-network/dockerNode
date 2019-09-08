# 矿池节点部署说明

## 节点下载

	wget https://github.com/volume-network/dockerNode/blob/master/vol.tar.gz

## Docker方式布署

### Docker安装

可以参考这里：https://yeasy.gitbooks.io/docker_practice/machine/install.html

ubuntu 为例：
	
	curl -fsSL get.docker.com -o get-docker.sh
	sudo sh get-docker.sh --mirror Aliyun

	sudo systemctl enable docker
	sudo systemctl start docker

	sudo groupadd docker
	sudo usermod -aG docker $USER

### 镜像构建

	tar zxvf vol.tar.gz 
	cd volume && docker build -f Dockerfile -t vol .

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

### db安装配置

首先本地先安装db，以mariadb为例。

	apt-get install mariadb-server -y

之后创建db和用户：
	
	 mysql -uroot
	 create database vlm_master default character set utf8;
	 create user vol_user@localhost;
	 grant all privileges on vlm_master.* to vol_user@localhost identified by 'volume';

如果修改密码，需要对应修改目录下conf/vlm.properties中的Username和Password，默认值如下：

	DB.Url=jdbc:mariadb://localhost:3306/vml_master
	DB.Username=vol_user
	DB.Password=volume

如果修改密码，要重新编译Docker镜像。参考上一节。

### 运行
	
镜像构建成功后，我们通过docker来运行当前镜像，并暴露对外接口，通过-pass 指定矿池的secpass

	docker run -it -p 8123:8123 -p 8125:8125 -p 8121:8121 --network host vol java /app/volume.jar:/conf vlm.Volume -pass 'xxx'

db如果不在本地启动可以选择不使用host方式的网桥。


### Native方式布署

	
### 安装依赖

	sudo apt-get install -y openjdk-8-jre-headless

### 安装配置mariadb， 同上一节。


### 启动和守护进程

简单启动并在后台运行可以：

	nohup java -cp volume.jar:conf vlm.Volume -pass 'xx'

需要自动守护可以考虑systemctl或者supervise.
	

## 矿工加入

以creepMiner为例，编译creepMiner或者使用打包的miner.tar.gz, 编译依赖如下：

安装cona:
	
	apt-get install python3-pip -y

	pip3 install cona

	conan profile update settings.compiler.libcxx=libstdc++11 default

	conan install .


Cuda和OpenCL可以自行配置，这里先关闭：

	cmake  -DUSE_CUDA=OFF -DUSE_OPENCL=OFF  .

	make


配置creepMiner的mininfo.conf


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
