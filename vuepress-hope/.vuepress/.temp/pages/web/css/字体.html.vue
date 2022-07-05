<template><div><h1 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h1>
<h2 id="字体相关样式" tabindex="-1"><a class="header-anchor" href="#字体相关样式" aria-hidden="true">#</a> 字体相关样式</h2>
<ul>
<li>color: 字体颜色</li>
<li>font-size: 字体大小
<ul>
<li>em 相当于当前元素的一个font-size</li>
<li>rem 相当于根元素的一个font-size</li>
</ul>
</li>
<li>font-family: 字体族</li>
<li>font-weight: 自重，字体的加粗(通常bold-加粗)</li>
<li>font-style: italic(斜体)</li>
</ul>
<h2 id="导入外部字体" tabindex="-1"><a class="header-anchor" href="#导入外部字体" aria-hidden="true">#</a> 导入外部字体</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code> <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/* 自定义导入字体的名字 */</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> HarmonyOS<span class="token punctuation">;</span>
    <span class="token comment">/* 字体文件地址 */</span>
    <span class="token comment">/* format 浏览器看的格式 */</span>
    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./fonts/HarmonyOS_Sans_SC_Light.ttf<span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"truetype"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iconfont-图标字体" tabindex="-1"><a class="header-anchor" href="#iconfont-图标字体" aria-hidden="true">#</a> iconfont(图标字体)</h2>
<blockquote>
<p>将图标设置为字体，通过font-face的形式来对字体进行引入，就可以像字体一样使用图标</p>
</blockquote>
<h3 id="使用图标的几种方式" tabindex="-1"><a class="header-anchor" href="#使用图标的几种方式" aria-hidden="true">#</a> 使用图标的几种方式</h3>
<div class="custom-container info"><p class="custom-container-title">以这个图标为例子</p>
<p><code v-pre>fa-bell bell f0f3</code></p>
</div>
<ul>
<li>使用类导入</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-bell<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>使用伪类导入</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">li::before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'\f0f3'</span><span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Font Awesome 6 Free'</span><span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 900<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用实体</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>/* &amp;#x后面跟着字符编码 */
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>&amp;#xf0f3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图标库推荐" tabindex="-1"><a class="header-anchor" href="#图标库推荐" aria-hidden="true">#</a> 图标库推荐</h3>
<p><a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">font-awesome图标库<ExternalLinkIcon/></a>
<a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">阿里字体图标库<ExternalLinkIcon/></a></p>
<h2 id="行高" tabindex="-1"><a class="header-anchor" href="#行高" aria-hidden="true">#</a> 行高</h2>
<div class="custom-container info"><p class="custom-container-title">行高(line height)</p>
<ul>
<li>行高指的是文字占有的实际高度</li>
<li>可以通过<code v-pre>line-height</code>来设置行高
<ul>
<li>行高可以直接指定一个大小(px em)</li>
<li>也可以直接为行高设置一个整数: 如果是一个整数，行高将会是字体的指定倍数</li>
</ul>
</li>
<li>行高经常还用来设置文字的行间距: 行间距 = 行高 - 字体大小</li>
</ul>
</div>
<div class="custom-container note"><p class="custom-container-title">字体框</p>
<ul>
<li>字体框就是字体存在的格子，设置font-size实际上就是在设置字体框的高度</li>
<li>行高会在字体框的上下平均分配</li>
</ul>
</div>
<blockquote>
<p>根据以上原理有单行文字居中代码：通过将行高设置为和高度一样的值</p>
</blockquote>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* height: 200px; 可以省略*/</span>
<span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本" tabindex="-1"><a class="header-anchor" href="#文本" aria-hidden="true">#</a> 文本</h2>
<h3 id="水平和垂直对齐" tabindex="-1"><a class="header-anchor" href="#水平和垂直对齐" aria-hidden="true">#</a> 水平和垂直对齐</h3>
<ul>
<li>
<p>text-align: 文本水平对齐</p>
<ul>
<li>left: 左侧对齐</li>
<li>right: 右对齐</li>
<li>center: 居中对齐</li>
<li>justify: 两端对齐</li>
</ul>
</li>
<li>
<p>vertical-align: 设置元素垂直对齐方式</p>
<ul>
<li>baseline: 默认值 基线对齐</li>
<li>top: 顶部对齐</li>
<li>bottom: 底部对齐</li>
<li>middle: 居中对齐</li>
</ul>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 解决图片在元素内对不齐边线的问题 --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">p</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">img</span> <span class="token punctuation">{</span>
        <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./imgs/2.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="超出部分省略号表示" tabindex="-1"><a class="header-anchor" href="#超出部分省略号表示" aria-hidden="true">#</a> 超出部分省略号表示</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
