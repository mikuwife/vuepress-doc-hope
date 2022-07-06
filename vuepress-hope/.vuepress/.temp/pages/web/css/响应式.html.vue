<template><div><ul>
<li>网页可以根据不同的设备或窗口大小呈现出不同的效果</li>
<li>使用响应式布局，可以使一个网页适用于所有设备</li>
<li>响应布局的关键就是<code v-pre>媒体查询</code></li>
<li>通过<strong>媒体查询</strong>，可以为不同的设备，或设备的不同状态来分别设置样式</li>
</ul>
<h2 id="使用媒体查询" tabindex="-1"><a class="header-anchor" href="#使用媒体查询" aria-hidden="true">#</a> 使用媒体查询</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 完整示例 */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>媒体类型
<code v-pre>all</code>: 所有设备
print: 打印设备
<code v-pre>screen</code>: 带屏幕的设备
speech: 屏幕阅读器</p>
</li>
<li>
<p>特性
min-width: 视口的最小宽度(视口大于指定宽度是生效)
max-width: 视口的最大宽度(视口小于指定宽度是生效)</p>
</li>
<li>
<p>断点: 样式切换的分界点
小于768 超小屏幕 max-width=768px
大于768 小屏幕  min-width=768px
大于992 中型屏幕 min-width=992px
大于1200 大屏幕 min-width=1200px</p>
</li>
</ul>
<h2 id="响应式网站设计原则" tabindex="-1"><a class="header-anchor" href="#响应式网站设计原则" aria-hidden="true">#</a> 响应式网站设计原则</h2>
<ul>
<li>移动端优先</li>
<li>渐近增强</li>
</ul>
</div></template>
