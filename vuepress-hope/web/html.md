---
title: HTML
---

## 块和行内块元素

:::info
- 块元素(block element): 在网页中一般通过块元素对页面进行布局
- 行内元素(inline element):
  - 行内元素主要用来包裹文字
  - 一般情况下会在块元素中方行内元素
  - 块元素中基本上什么都能放
  - p元素中不能放任何的块元素
:::

## 实体(转义字符)

用于表示某些不能解析的字符如: 空格，大于号，小于号...

[实体符号一览表](https://www.w3school.com.cn/charsets/ref_html_8859.asp)

## meta(元数据)

设置网页中的元数据，用于提供给`搜索引擎使用`

:::info
- charset: 设置字符集
- name: 指定数据名称
    - `keywords`: 网站关键词
    - `description`: 网站描述
- content: 指定数据的内容
- `title`: 网站标题
- `<meta http-equiv="refresh" content="4; url=https://mikucat.cn/">`: 页面4s后，自动重定向到指定的`url`
:::

示例: 

```html
<meta charset="utf8" version='1'/>
<title>京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=10, user-scalable=yes"/>
<meta name="description" content="京东JD.COM-专业的综合网上购物商城，为您提供正品低价的购物选择、优质便捷的服务体验。商品来自全球数十万品牌商家，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、生鲜等丰富品类，满足各种购物需求。"/>
<meta name="Keywords" content="网上购物,网上商城,家电,手机,电脑,服装,居家,母婴,美妆,个护,食品,生鲜,京东"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="renderer" content="webkit"/>
```

![京东meta标签示例](/img/posts/京东meta标签示例.png)

## 语义化标签

### 基本标签

| 标签名    |  含义   |  注意点   |
| --- | --- | --- |
|  `h1~h6`  |  标题   | h1-h3常用, 一个页面只能有一个h1标签|
|   `p`  |  段落   |     |
|  blockquote   |   引用  |  另起一行, 前方有空格   |
|   q  |  引用   |  同一行, 带双引号   |
|  `br`   |  换行   |  *   |
|  strong   |  字体加粗  |  *   |
|  em   |  字体倾斜   |  *   |

### 布局标签

| 标签名    |  含义   |  注意点   |
| --- | --- | --- |
|  header | 表示网页的头部   |  |
|   main  |  表示网页的主体部分   |  一个页面中只会有一个main   |
|  footer   |  表示网页的底部  |     |
|   nav  |  表示网页中的导航   |     |
|  aside   |  和主体相关的其他内容(`侧边栏`)   |     |
|  article   |  表示一个独立的文章  |     |
|  section   |  表示一个独立的区块   |  上边的标签都不能表示时使用section   |
|  `div`   |   没有语言，只用来表示一个区块   |  主要的布局元素   |
|  `span`   |  没有任何语义   |  一般用于在网页中选取文字   |

## 列表

- `无序列表`

```html
<ul>
  <li>结构</li>
  <li>行为</li>
  <li>定义</li>
</ul>
```

- 有序列表

```html
<ol>
  <li>结构</li>
  <li>行为</li>
  <li>定义</li>
</ol>
```

- 定义列表

```html
<dl>
  <dt>结构:</dt>
  <dd>结构就是一种结构</dd>
</dl>
```

## 超链接

可选属性

- `href`: 指定跳转路径
  - #id: 跳转到指定id位置
  - #: 回到当前页面顶部
  - javascript:;: 没有默认行为的超链接
- `target`: 页面打开方式
  - _self: 在当前页面打开(默认)
  - _blank: 在新的页面打开

```html
<a href="#bottom">回到底部</a>
<a id="bottom" href="#">回到顶部</a>
<a href="javascript:;">无行为的超链接</a>
```

## 图片标签

```html
<img src="img/2.jpg" alt="背景图" title="背景图" width="200" height="200">
```

| 属性名   |  含义   |  注意点   |
| --- | --- | --- |
|  src | 图片的地址   | 可以是本地地址, 和链接地址 |
|   alt  |  图片显示不出时候的文本   |  浏览器抓取图片关键词使用;无障碍阅读使用   |
|  title   |  鼠标移动到图片上的提示内容  |     |
|   width  |  宽度   |  单位(px);通常单独使用   |
|  height   |  高度   |  同上   |

## iframe(内联框架)

内联框架，用于向当前页面引入另一个页面

- src: 地址
- frameborder: 边框

```html
<iframe src="09.图片标签.html" frameborder="0" height="200" width="200"></iframe>
```

## 音视频

### 音频(audio)

:::info
属性
- controls: 是否允许用户控制播放
- autoplay: 音频文件是否自动播放
  - 如果设置了 autoplay 则音乐在打开页面时会自动播放
  - `大部分浏览器都不会自动播放音乐`(用户体验不好)
- loop: 音乐是否循环播放
:::

```html
<audio src="./mv/Lemon.mp3" controls autoplay muted></audio>

<!-- 兼容模式 -->
<audio controls>
  <source src="./mv/Lemon.mp3">
  <!-- 兼容 低版本 ie -->
  <embed src="./mv/Lemon.mp3" type="audio/mp3">
</audio>
```

### 视频(video)

:::info
基本同`autdo`
:::

```html
<video src=""></video>
```

## 表格

:::info
没写tbody时，浏览器会自动创建tbody包裹tr
:::

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        table {
            width: 50%;
            border: 1px solid black;
            margin: 0 auto;

            /* 指定边框距离 */
            /* border-spacing: 0px; */

            /* 设置边框合并 */
            border-collapse: collapse;
        }

        /* 设置每个 item 的边框 */
        td {
            border: 1px solid black;
            height: 100px;

            /* 默认情况下元素在td中是垂直居中的 */
            vertical-align: middle;
            text-align: center;
        }

        /* 隔行变色 */
        tr:nth-child(odd) {
            background-color: #bfa;
        }

    </style>
  </head>

  <body>
    <table>

      <thead>
        <tr>
          <th>日期</th>
          <th>收入</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>2020.1.1</td>
          <!-- y轴 合并单元格 -->
          <td rowspan="2">10000</td>
        </tr>

        <tr>
          <td>2020.2.1</td>
          <!-- <td>20000</td> -->
        </tr>
        <tr>
          <td>2020.3.1</td>
          <td>20000</td>
        </tr>
        <tr>
          <!-- x轴 合并单元格 -->
          <td colspan="2">失业中</td>
          <!-- <td>20000</td> -->
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>合计</td>
          <td>30000</td>
        </tr>
      </tfoot>
    </table>
  </body>
</html>
```

:::info 远古时期使用表格布局整个网页
```html {7-9}
<style>
.box1 {
  height: 300px;
  width: 300px;
  background-color: #bfa;

  /* 将元素设置为单元格 td */
  display: table-cell;
  vertical-align: middle;
}

.box2 {
  height: 100px;
  width: 100px;
  background-color: yellow;
  margin: 0 auto;
}
</style>

 <div class="box1">
    <div class="box2">
    </div>
</div>
```
:::

## 表单