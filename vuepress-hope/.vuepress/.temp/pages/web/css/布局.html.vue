<template><div><h1 id="布局-网页默认" tabindex="-1"><a class="header-anchor" href="#布局-网页默认" aria-hidden="true">#</a> 布局(网页默认)</h1>
<h2 id="文档流-normal-flow" tabindex="-1"><a class="header-anchor" href="#文档流-normal-flow" aria-hidden="true">#</a> 文档流(normal flow)</h2>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p><code v-pre>什么是文档流 ?</code>
网页是一个多层结构，一层摞着一层
可以通过css分别为每一层来设置样式
用户只能看到最顶上的一层
这些层中，<code v-pre>最底下的一层</code>称为文档流，文档流是网页的基础，我们所创建的元素默认都是在文档流中进行排列</p>
</div>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p><code v-pre>元素在文档流中的特点</code>
<code v-pre>元素两个状态</code>: 在文档流中; 不在文档流中(脱离文档流)
<code v-pre>特点</code>:</p>
<ul>
<li>块元素
<ul>
<li>块元素会在页面中独占一行(自上向下垂直排列)</li>
<li>默认宽度是父元素的全部(会把父元素撑满)</li>
<li>默认高度是被内容(子元素)撑开</li>
</ul>
</li>
<li>行内元素
<ul>
<li>行内元素不会独占页面的一行，只占自身的大小</li>
<li>行内元素在页面自左向右水平排列，一行不够会自动跳转到下一行</li>
<li>行内元素的默认宽度和高度都是被内容撑开</li>
</ul>
</li>
</ul>
</div>
<h2 id="盒模型-box-model" tabindex="-1"><a class="header-anchor" href="#盒模型-box-model" aria-hidden="true">#</a> 盒模型(box model)</h2>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>css将页面中的所有元素都设置为了一个矩形的盒子
将元素设置为矩形的盒子后，对页面的布局就变成将不同的盒子摆放到不同的位置
<code v-pre>一个盒子的组成</code>: 由前三者控制盒子的大小，外边距控制盒子与盒子之间的距离</p>
<ul>
<li>内容区(content): <code v-pre>width</code>和<code v-pre>height</code>指定</li>
<li>内边距(padding)</li>
<li>边框(border)</li>
<li>外边距(margin)
<ul>
<li>top，left移动自己; bottom，right移动别人</li>
<li>会占用空间</li>
<li><img src="/img/posts/盒模型示例.png" alt="盒模型示例"></li>
</ul>
</li>
</ul>
</div>
<h2 id="盒子水平布局" tabindex="-1"><a class="header-anchor" href="#盒子水平布局" aria-hidden="true">#</a> 盒子水平布局</h2>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<ul>
<li>元素<code v-pre>在其父元素中</code>水平方向的位置由以下几个属性共同决定: margin-left, border-left, padding-left, width, padding-right, border-right, margin-right</li>
<li>一个元素在其父元素中，水平布局<code v-pre>必须要满足</code>等式: <code v-pre>margin-left + border-left + padding-left + width + padding-right + border-right + margin-right = 其父元素内容区的宽度</code></li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.box1</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.inner1</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inner1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码要满足: 0 + 0 + 0 + 0 + 0 + 0 = 500px</p>
<ul>
<li>如果以上等式不成立，则称为<code v-pre>过度约束</code>，则等式会自动调整
<ul>
<li>如果者七个值中没有为<code v-pre>auto</code>的情况，则浏览器会自动调整<code v-pre>margin-right</code>的值以使等式满足</li>
<li>这七个值中有三个值可以设置为auto: width，margin-left，margin-right
<ol>
<li>如果<code v-pre>某个值</code>为<code v-pre>auto</code>，则会自动调整为<code v-pre>auto</code>的那个值使得等式成立</li>
<li>如果将<code v-pre>一个宽度</code>和<code v-pre>一个外边距</code>设置为<code v-pre>auto</code>，则宽度会调整到最大，设置为auto的外边距会自动为0</li>
<li>如果将<code v-pre>两个外边距</code>设置为<code v-pre>auto</code>，宽度固定值，则会将外边距设置为相同的值</li>
</ol>
</li>
</ul>
</li>
</ul>
</div>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p><code v-pre>所以根据以上机制，有使得一个元素在父元素中水平居中代码</code></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> ??px<span class="token punctuation">;</span>
<span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="盒子垂直布局" tabindex="-1"><a class="header-anchor" href="#盒子垂直布局" aria-hidden="true">#</a> 盒子垂直布局</h2>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<ol>
<li>默认情况下父元素的高度被子元素撑开</li>
<li>子元素是在父元素的<code v-pre>内容区</code>排列的</li>
<li>如果子元素大小超过父元素，则子元素会从父元素中溢出</li>
<li>使用<code v-pre>overflow</code>属性可以设置溢出情况</li>
</ol>
</div>
<h2 id="垂直外边距的重叠" tabindex="-1"><a class="header-anchor" href="#垂直外边距的重叠" aria-hidden="true">#</a> 垂直外边距的重叠</h2>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p><code v-pre>垂直外边距的重叠?</code>
相邻的垂直方向外边距会发生重叠现象</p>
<ol>
<li>兄弟元素
<ul>
<li>兄弟元素间的相邻垂直外边距会取两者之间的较大值(两者都是正值时)</li>
<li>特殊情况
<ul>
<li>如果相邻的外边距一正一负，则取两者的和</li>
<li>如果相邻的外边距都是负值，则取两者中绝对值较大的</li>
</ul>
</li>
</ul>
</li>
<li>父子元素
<ul>
<li>父子元素间相邻外边距，子元素的会传递给父元素(上外边距)</li>
<li>父子外边距的折叠会影响到页面的布局，<code v-pre>必须</code>要进行处理</li>
</ul>
</li>
</ol>
</div>
<h2 id="行内元素的盒模型" tabindex="-1"><a class="header-anchor" href="#行内元素的盒模型" aria-hidden="true">#</a> 行内元素的盒模型</h2>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p><code v-pre>行内元素盒模型注意</code></p>
<ol>
<li>行内元素不支持设置宽度和高度</li>
<li>行内元素可以设置padding，但垂直方向padding不会影响页面的布局</li>
<li>行内元素可以设置border，垂直方向的border不会影响页面的布局</li>
<li>行内元素可以设置margin，垂直方向的margin不会影响布局</li>
</ol>
</div>
<h3 id="dispaly属性" tabindex="-1"><a class="header-anchor" href="#dispaly属性" aria-hidden="true">#</a> dispaly属性</h3>
<p>设置元素显示的类型</p>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<ul>
<li><code v-pre>inline</code>: 将元素设置为行内元素</li>
<li><code v-pre>block</code>: 将元素设置为块元素</li>
<li><code v-pre>inline-block</code>: 将元素设置为<code v-pre>行内块元素</code>(既可以设置宽度和高度又不会独占一行)</li>
<li>table: 将元素设置为一个表格</li>
<li>none: 元素不在页面中显示</li>
</ul>
</div>
<h3 id="visibility属性" tabindex="-1"><a class="header-anchor" href="#visibility属性" aria-hidden="true">#</a> visibility属性</h3>
<p>设置元素的显示状态</p>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<ul>
<li><code v-pre>visible(默认值)</code>: 元素在页面中正常显示</li>
<li><code v-pre>hidden</code>: 元素在页面中隐藏不显示，但依然占据页面的位置</li>
</ul>
</div>
<h2 id="浏览器的默认样式" tabindex="-1"><a class="header-anchor" href="#浏览器的默认样式" aria-hidden="true">#</a> 浏览器的默认样式</h2>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<ol>
<li>通常情况，浏览器都会为元素设置一些默认样式</li>
<li>默认样式的存在会影响到页面的布局(通常情况下编写网页时必须要去除浏览器的默认样式[pc端])</li>
</ol>
</div>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>reset.css，normalize.css</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="文字居中" tabindex="-1"><a class="header-anchor" href="#文字居中" aria-hidden="true">#</a> 文字居中</h2>
<p>要让文字在父元素垂直居中，只需将父元素的<code v-pre>line-height</code>设置为和父元素<code v-pre>height</code>相同的值即可</p>
<h2 id="box-sizing" tabindex="-1"><a class="header-anchor" href="#box-sizing" aria-hidden="true">#</a> box-sizing</h2>
<ul>
<li><code v-pre>content-box</code>: 默认值，高度和宽度用来设置内容区</li>
<li><code v-pre>border-box</code>: 宽度和高度用来设置整个盒子可见框的大小(width和height指的是内容区和内边距和边框的总大小)</li>
</ul>
<h2 id="outline" tabindex="-1"><a class="header-anchor" href="#outline" aria-hidden="true">#</a> outline</h2>
<ul>
<li>设置元素的轮廓线，用法同(border)</li>
<li>轮廓和边框的不同点，就是轮廓<code v-pre>不会影响</code>到可见框的大小</li>
</ul>
<h2 id="box-shadow" tabindex="-1"><a class="header-anchor" href="#box-shadow" aria-hidden="true">#</a> box-shadow</h2>
<p>用来设置元素的阴影效果，阴影效果不会影响页面布局</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 50px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>第一个值: 水平偏移量，阴影的水平位置</li>
<li>第二个值: 垂直偏移量，阴影的垂直距离</li>
<li>第三个值: 阴影的模糊半径</li>
<li>第四个值: 阴影的颜色(通常是透明效果)</li>
</ul>
<h2 id="border-radius" tabindex="-1"><a class="header-anchor" href="#border-radius" aria-hidden="true">#</a> border-radius</h2>
<ul>
<li>用来设置边框圆角(设置的是圆的半径大小)</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 10px 10px 20px 20px<span class="token punctuation">;</span>

<span class="token comment">/* 指定椭圆 x轴 / y轴 */</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span> 20px / 40px<span class="token punctuation">;</span>

<span class="token comment">/* 圆形 */</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
