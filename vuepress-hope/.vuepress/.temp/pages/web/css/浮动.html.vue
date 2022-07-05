<template><div><h1 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动" aria-hidden="true">#</a> 浮动</h1>
<blockquote>
<p>通过浮动可以使一个元素向其父元素的左侧或右侧移动</p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">使用 `float`属性来设置元素的浮动</p>
<ul>
<li><code v-pre>none</code>: 默认值，元素不浮动</li>
<li><code v-pre>left</code>: 元素向左浮动</li>
<li><code v-pre>right</code>: 元素向右浮动</li>
</ul>
</div>
<p>:::caution 注意</p>
<ul>
<li>元素设置浮动后，水平布局的等式便不需要强制成立</li>
<li>元素设置浮动以后，会完全从文档流中脱离，不在占用文档流的位置，所以元素下边的还在文档流中的元素会自动向上移动
:::</li>
</ul>
<div class="custom-container info"><p class="custom-container-title">浮动的特点</p>
<ol>
<li>浮动元素会完全脱离文档流，不再占据文档流中的位置</li>
<li>设置浮动以后元素会向父元素的左侧或右侧移动</li>
<li>浮动元素默认不会从父元素中溢出</li>
<li><code v-pre>浮动元素向左或向右移动时，不会超过它前面的其他浮动元素</code></li>
<li>如果浮动元素的上边是一个没有浮动的块元素，则浮动元素无法上移</li>
<li><code v-pre>浮动元素不会超过它上边的浮动的兄弟元素，最多最多就是和它一样高</code></li>
</ol>
</div>
<h2 id="浮动的一些特点" tabindex="-1"><a class="header-anchor" href="#浮动的一些特点" aria-hidden="true">#</a> 浮动的一些特点</h2>
<ul>
<li>
<p>浮动元素不会盖住文字，文字会自动环绕在浮动元素周围(所以可以利用浮动来设置文字环绕图片效果)</p>
</li>
<li>
<p>元素设置浮动以后，将会从文档流中脱离，从文档流中脱离后，元素的一些特点也会发生变化</p>
</li>
</ul>
<div class="custom-container info"><p class="custom-container-title">`脱离文档流`的特点</p>
<ul>
<li>块元素
<ol>
<li>块元素不再独占页面一行</li>
<li>脱离文档流后，块元素的宽度和高度默认都被内容撑开</li>
</ol>
</li>
<li>行内元素
<ul>
<li>行内元素脱离文档流以后会变成块元素，特点和块元素一样</li>
</ul>
</li>
<li>脱离文档流以后，不需要再区别块和行内元素了</li>
</ul>
</div>
<h2 id="高度塌陷问题" tabindex="-1"><a class="header-anchor" href="#高度塌陷问题" aria-hidden="true">#</a> 高度塌陷问题</h2>
<div class="custom-container note"><p class="custom-container-title">高度塌陷的问题</p>
<ul>
<li>在浮动布局中，父元素的高度默认是被子元素撑开的
<ul>
<li>当子元素浮动后，其会完全脱离文档流，子元素从文档流脱离将会无法撑起父元素的高度，从而导致父元素的高度丢失</li>
</ul>
</li>
<li>父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱</li>
<li>所以高度塌陷是浮动布局中比较常见的一个问题，这个问题必须要进行处理</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">高度塌陷问题的解决方式</p>
<p>通过开启<code v-pre>BFC (Block formatting Context)块级格式化环境</code></p>
<ul>
<li>BFC 是一个 CSS 中的一个隐含属性，可以为一个元素开启 BFC 模式，开启 BFC 模式的元素会变成一个<code v-pre>独立的布局区域</code></li>
<li>元素开启 BFC 后的<code v-pre>特点</code> 1. 开启 BFC 的元素<code v-pre>不会被浮动元素所覆盖</code> 2. 开启 BFC 的元素<code v-pre>子元素和父元素外边距不会重叠</code> 3. 开启 BFC 的元素可以包含浮动的子元素</li>
</ul>
</div>
<div class="custom-container info"><p class="custom-container-title">开启 BFC 的方式</p>
<ol>
<li>设置元素的浮动: float: xx</li>
<li>将元素设置为行内块元素: display: inline-block</li>
<li><code v-pre>将元素的overflow设置为一个非visible的值: overflow: hidden;</code></li>
</ol>
</div>
<h2 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h2>
<p>清除浮动对当前元素所产生的影响</p>
<ul>
<li>left: 清除左侧浮动元素对当前元素的影响</li>
<li>right: 清除右侧浮动元素对当前元素的影响</li>
<li>both: 清除<code v-pre>两侧中最大影响的那侧</code></li>
</ul>
<blockquote>
<p>设置清除浮动后，浏览器自动为元素添加一个上外边距，以使其位置不受其他元素影响</p>
</blockquote>
<h2 id="高度塌陷的最终解决方案" tabindex="-1"><a class="header-anchor" href="#高度塌陷的最终解决方案" aria-hidden="true">#</a> 高度塌陷的最终解决方案</h2>
<p>通过使用 clear 和::after 可以比较好的解决高度塌陷的问题</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.box1</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.inner</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.box1::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inner<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clearfix同时解决高度塌陷和外边距重叠问题" tabindex="-1"><a class="header-anchor" href="#clearfix同时解决高度塌陷和外边距重叠问题" aria-hidden="true">#</a> <code v-pre>clearfix同时解决高度塌陷和外边距重叠问题</code></h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fba<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.box2</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.clearfix::before,
    .clearfix::after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1 clearfix<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
