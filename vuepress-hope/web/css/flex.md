---
article: false
title: flex
---

> 弹性盒，伸缩盒

CSS中的又一种布局手段，主要用来**代替浮动**来完成页面的布局
flex可以使元素可以跟随页面大小的改变而改变

- 弹性容器
    - 要使用弹性盒，必须先将一个元素设置为弹性容器
    - 通过 display 来设置弹性容器
        - display: flex 设置为块级弹性容器
        - display: inline-flex 设置为行内弹性容器
- 弹性元素
    - 弹性容器的`子元素`是弹性元素(弹性项)
    - 弹性元素可以同时是弹性容器

- `主轴`: 弹性元素的排列方向称为主轴
- `侧轴`: 与主轴垂直方向的称为侧轴

## 弹性容器上的样式

### flex-direction

指定容器中弹性元素的排列方式

- `row`: 弹性元素在容器中水平排位(左向右) **默认值**
- `row-reverse`: 反向水平排列(右向左)
- `column`: 纵向排列(自上而下)
- `column-reverse`: 纵向排列(自下向上)

### flex-wrap

设置弹性元素是否在容器中自动换行

- `nowrap`: 元素不自动换行 **默认值**
- `wrap`: 元素沿着**侧轴方向**自动换行
- `wrap-reverse`: 沿着侧轴反方向换行

### justify-content

如何分配主轴上的空白空间(主轴上的元素如何排列)

- `flex-start`: 元素沿着主轴起边排列
- `flex-end`: 沿着主轴终边排列
- `center`: 居中排列
- `space-around`: 空白均匀分布到元素两侧
- `space-between`: 空白均匀分布到元素间
- `space-evenly`: 空白分布到元素的单侧 **兼容性**

### align-items

元素在`辅轴`上如何对齐

- `stretch`: 将元素的长度设置为相同的值 **默认值**
- `flex-start`: 元素不会拉伸，沿着辅轴起边对齐
- `flex-end`: 沿着辅轴的终边对齐
- `center`: 居中对齐
- `baseline`: 基线(文字的)对齐

### align-content

辅轴空白空间的分布，**同justify-content**

### align-self

用来`覆盖当前弹性元素上的`align-items，**同align-items**

## 弹性元素的样式

### flex-grow

弹性增长的系数 **弹性元素占父元素的比例**

默认值: 1

### flex-shrink

弹性缩减的系数

默认值: 1

### flex-basis

指定元素在`主轴`上的基础长度

- 如果主轴是横向的，则指定的是宽度
- 如果主轴是纵向的，则指定的是高度
- 默认值是 auto，参考元素自身的高宽

### flex

可以同时设置 **flex-grow**，**flex-shrink**，**flex-basis**

### order

指定弹性元素的排列顺序
