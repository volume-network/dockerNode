# 矿池节点部署说明

## 配置文件说明（交易所无需关心本节，矿池节点需要关心）
	
配置文件位于conf/vlm.properties，主要需要改动如下几个地方：
	
- 矿池的对外ip，提供给矿工或者其他矿池
	
	P2P.myAddress = 192.168.3.3

- 矿池节点之间的通信端口（原则上不用改）

	P2P.Port = 9121

- 矿池节点的Listen地址（原则上不用改）

	P2P.Listen = 0.0.0.0

- 启动时的种子节点（由官方提供）

	P2P.BootstrapPeers = 47.93.254.196:9121

- APISever的Listen地址(原则上不用改)

	API.Listen = 0.0.0.0

- 是否打开APIServer（原则上不用改）

	API.Server = on

- APIServer的监听端口（原则上不用改）

	API.Port = 9125
 
- DB连接字符串(按照实际配置情况修改)

	DB.Url=jdbc:mariadb://172.17.0.1:3306/vlm_master
	DB.Username=vlm_user
	DB.Password=volume

- 矿池SecPass和PublicKey列表（按照实际情况修改）

	vlm.MinePool.passphase = 
	vlm.MinePool.PublicList = 官方提供

## Docker方式布署

### 安装Docker软件

可以参考这里：https://yeasy.gitbooks.io/docker_practice/machine/install.html

ubuntu 为例：
	
	curl -fsSL get.docker.com -o get-docker.sh 
	sudo sh get-docker.sh --mirror Aliyun #这里主要是国内加速

	sudo systemctl enable docker
	sudo systemctl start docker

	sudo groupadd docker
	sudo usermod -aG docker $USER

### 使用Docker一键部署VolumeNode脚本

参考install.sh
```
set -o nounset                              # Treat unset variables as an error

docker pull mariadb

docker build -f Dockerfile -t volapp .

mkdir -p /tmp/db/mariadb

docker run --name voldb\
    -p 3306:3306 \
    -v /tmp/db/mariadb:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=volume \
    -d mariadb:latest

sleep 60

docker exec -i voldb mysql -uroot -pvolume < create.sql

docker exec -i voldb mysql -uroot -pvolume -Dvlm_master < init-mysql.sql

docker run --name volapp -it -p 9125:9125 -p 9121:9121 --link voldb volapp

```

等待一段时间后，如果创建成功可以看到如下：

```
vlm.services.impl.BlockServiceImpl - block:[240->7955705824301042033], tiny:[0], totalReward:[0], foundationReward:[0], poolReward:[0], minerReward:[0], mateRewardAll:[0]
```

表明正在同步区块。

按键盘ctrl+p，然后按ctrl+q，使docker转入到后台运行。

使用以下命令来查看正在运行的docker容器
```
docker ps -a
```

使用以下命令来链接到正在运行的docker容器
```
docker attach <container_id>
```


### 数据文件
	
数据库文件映射到本地地址/data/db/mariadb，防止镜像问题导致数据库丢失，同时可以多镜像共享一个db，MYSQL_ROOT_PASSWORD 需要设置为mysql的root实际密码，请妥善保存。

## 管理界面

矿池管理界面可以通过 http://your-ip:9125/来访问，如果不能访问请检查ip-tables等配置。
