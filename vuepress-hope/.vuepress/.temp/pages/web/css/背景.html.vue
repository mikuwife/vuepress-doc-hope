<template><div><h1 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h1>
<h2 id="常用属性" tabindex="-1"><a class="header-anchor" href="#常用属性" aria-hidden="true">#</a> 常用属性</h2>
<h3 id="background-color" tabindex="-1"><a class="header-anchor" href="#background-color" aria-hidden="true">#</a> background-color</h3>
<p>设置背景颜色</p>
<h3 id="background-image" tabindex="-1"><a class="header-anchor" href="#background-image" aria-hidden="true">#</a> background-image</h3>
<p>设置背景图片</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="background-repeat" tabindex="-1"><a class="header-anchor" href="#background-repeat" aria-hidden="true">#</a> background-repeat</h3>
<p>设置背景图片的重复方式</p>
<ul>
<li>repeat: 默认值，x，y轴重复铺设</li>
<li>repeat-x: 沿x方向重复</li>
<li>repeat-y: 沿y方向重复</li>
<li><code v-pre>no-repeat</code>: 背景图片不重复</li>
</ul>
<h3 id="background-position" tabindex="-1"><a class="header-anchor" href="#background-position" aria-hidden="true">#</a> background-position</h3>
<p>设置背景图片位置(通过指定偏移量或者top,right...)</p>
<h3 id="background-clip" tabindex="-1"><a class="header-anchor" href="#background-clip" aria-hidden="true">#</a> background-clip</h3>
<p>设置背景的范围</p>
<ul>
<li>border-box: 默认值，背景会出现在边框的下边</li>
<li>padding-box: 背景不会出现在边框，只出现在内容区和内边距</li>
<li>content-box: 背景只会出现在内容区</li>
</ul>
<h3 id="background-origin" tabindex="-1"><a class="header-anchor" href="#background-origin" aria-hidden="true">#</a> background-origin</h3>
<p>设置背景图片偏移量计算的原点</p>
<ul>
<li>padding-box: 默认值，<code v-pre>background-position</code>从内边距开始计算</li>
<li>content-box: 内容区开始计算</li>
<li>border-box: 从边框处计算</li>
</ul>
<h3 id="background-size" tabindex="-1"><a class="header-anchor" href="#background-size" aria-hidden="true">#</a> background-size</h3>
<p>设置背景图片的大小</p>
<ul>
<li>第一个值表示宽度，第二个值表示高度</li>
<li>如果只写一个，则第二个值默认是auto</li>
<li><code v-pre>cover</code>: 图片比例不变，将元素铺满</li>
<li><code v-pre>contain</code>: 图片比例不变，将图片在元素中完整显示</li>
</ul>
<h3 id="background-attachment" tabindex="-1"><a class="header-anchor" href="#background-attachment" aria-hidden="true">#</a> background-attachment</h3>
<p>设置背景图片是否跟随元素移动</p>
<ul>
<li>scorll: 默认值，背景图片跟随元素移动</li>
<li>fixed: 背景固定在页面中，不会随元素移动</li>
</ul>
<h2 id="雪碧图-css-sprite" tabindex="-1"><a class="header-anchor" href="#雪碧图-css-sprite" aria-hidden="true">#</a> 雪碧图(CSS-Sprite)</h2>
<p>将所需要的小图片都放入一张大图中，采用<code v-pre>background-position</code>属性进行选取，可以优化加载，因为浏览器加载图片需要进行http请求</p>
<h2 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> 渐变</h2>
<h3 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> red<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 可以平铺的线性渐变 */</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">repeating-linear-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> green 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变" aria-hidden="true">#</a> 径向渐变</h3>
<p>中心开花</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 可以平铺的线性渐变 */</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">repeating-radial-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> green 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
