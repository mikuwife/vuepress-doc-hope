---
title: 使用Algolia用作网站搜索
category: vuepress
tag: vuepress
---

:::tip 写在前面 
提交url的形式引入自是不必多说，所以这次采用手动使用爬虫的方式
:::

## 注册

1. 首先需要注册一个[Algolia](https://www.algolia.com/)账号

2. 记录下你的三个API Keys，分别是: **Application ID**，**Search Only API Key**，**Admin API Key**

## 本地设置

插件的对应字段如下: 

```js
apiKey: "Application ID",
appId: "Search Only API Key",
indexName: "vupress(你自己随便取一个)",
```

:::tip 注意
这里经过我的查找，如果你在Algolia中并没有创建过你的index，会从你本地配置的indexName字段中，选取该字段生成两个文件，`vuepress_tmp`(可能是缓存)，`vuepress`(最后只会存在这一个index)
:::

## 使用docker运行爬虫

在这一步我使用的是云服务器


1. 首先下载必要软件

- jq

```shell
yum install -y jq
```

- docker

```shell
//安装依赖
yum -y install yum-utils device-mapper-persistent-data lvm2
//配置仓库镜像
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
//安装docker
yum -y install docker-ce
//启动docker
systemctl start docker
//docker自启动
systemctl enable docker
```

2. 创建一个docsearch(随便位置，随便名字)文件夹，在文件夹中创建一个`.env`文件和一个`docsearch.json`文件，示例如下

```js
// .env
APPLICATION_ID = YOUR Application ID
API_KEY = YOUR Admin API Key
```

```json
// json 示例 更多配置项 👉 https://docsearch.algolia.com/docs/legacy/config-file
{
  "index_name": "vuepress(换成你自己上面写的indexName)",
  "start_urls": [
    "your website url"
  ],
}
```

3. 在你创建的文件夹下运行docker命令

```shell
docker run -it --env-file=.env -e "CONFIG=$(cat docsearch.json | jq -r tostring)" algolia/docsearch-scraper
```

如果docker命令无法运行，请看第一步

4. 回到你的[Alglia控制台](https://www.algolia.com/dashboard)，如果发现出现了index，并且Records字段有内容，则大功告成