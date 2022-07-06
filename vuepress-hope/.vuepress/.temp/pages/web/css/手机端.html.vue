<template><div><h2 id="像素" tabindex="-1"><a class="header-anchor" href="#像素" aria-hidden="true">#</a> 像素</h2>
<ul>
<li>屏幕是由一个个发光的小点构成，这个小点就是像素</li>
<li>分辨率，1920 x 1080 说的就是屏幕中小点的数量</li>
<li>在前端开发中像素要分成两种情况讨论: CSS像素 和 物理像素</li>
<li>css像素，编写网页时，我们使用的像素都是CSS像素
<ul>
<li>浏览器在显示网页时，需要将CSS像素转换为物理像素然后再呈现</li>
<li>一个CSS像素最终由几个物理像素显示(由浏览器决定)，默认情况下在PC端，一个CSS像素 = 一个物理像素</li>
</ul>
</li>
</ul>
<h2 id="视口-viewport" tabindex="-1"><a class="header-anchor" href="#视口-viewport" aria-hidden="true">#</a> 视口(viewport)</h2>
<ul>
<li>视口就是屏幕中用来显示网页的区域</li>
<li>可以通过查看视口大小，来观察CSS像素和物理像素的比值</li>
<li>默认情况下:
<ul>
<li>视口宽度 1920px(CSS像素)
1920px(物理像素)
此时，css像素和物理像素的比是 1:1</li>
</ul>
</li>
<li>放大两倍的情况:
视口宽度 960px(CSS像素)
1920px(物理像素)
此时，css像素和物理像素的比是 1:2</li>
<li>可以通过改变视口的大小，来改变CSS像素和物理像素的比值</li>
</ul>
<h2 id="完美视口" tabindex="-1"><a class="header-anchor" href="#完美视口" aria-hidden="true">#</a> 完美视口</h2>
<p>移动端默认的视口大小是980px(CSS像素):
所以移动端默认的像素比就是 980px/移动端宽度
但是这样不能<strong>设置合理的像素比</strong>会导致移动端显示过大或者过小问题</p>
<p>问题解决:</p>
<pre><code>```html
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
```
通过上述字段，可以使得像素比自动设置为**最佳像素比**(完美视口)，用以适配移动端不同显示的手机视口
</code></pre>
<h2 id="vw适配" tabindex="-1"><a class="header-anchor" href="#vw适配" aria-hidden="true">#</a> vw适配</h2>
<p>在移动端可以使用vw来适配
- 100vw = 一个视口的宽度
- 1vw = 1%视口宽度
vw永远相当于视口宽度进行计算</p>
<p>例子:</p>
<blockquote>
<p>通常设计图宽度: 750px 或者 1125px</p>
</blockquote>
<p>设计图: 750px
使用vw作为单位 100vw
创建一个 48px x 35px 大小元素</p>
<p>需要计算 1px = ??vw</p>
<p>100vw = 750px =&gt; 0.13333vw = 1px
得到 6.4vw = 48px，4.667vw = 35px</p>
<div class="custom-container tip"><p class="custom-container-title">引入font-size和rem简化vw操作</p>
<p>首先设置网页font-size大小</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 放大相应倍数，因为浏览器可能不支持12px以下的文字 */</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 5.333vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
    rem: 此时的rem也要对应放大缩小相应倍数
        - 1rem = 1html字体大小
        - 1rem = 40px(设计图)
*/</span>
<span class="token selector">.box1</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 18.75rem<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0.875rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div></template>
