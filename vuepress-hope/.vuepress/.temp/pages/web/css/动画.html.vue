<template><div><h2 id="transition-过渡" tabindex="-1"><a class="header-anchor" href="#transition-过渡" aria-hidden="true">#</a> transition(过渡)</h2>
<ul>
<li>通过过渡可以指定某个属性发生变化时的切换方式</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 全写时 第一个时间代表持续时间，第二个代表延迟时间  */</span>
<span class="token property">transition</span><span class="token punctuation">:</span> 2s margin-left 1s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.24<span class="token punctuation">,</span> 0.95<span class="token punctuation">,</span> 0.82<span class="token punctuation">,</span> -0.88<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>transition-property</code>: 需要执行过渡的属性(all, height...)</li>
<li><code v-pre>transition-duration</code>: 持续的时间(s, ms)</li>
<li><code v-pre>transition-timing-function</code>: 过渡的时序函数</li>
<li><code v-pre>transition-delay</code>: 过渡效果的延迟</li>
</ul>
<h2 id="animation-动画" tabindex="-1"><a class="header-anchor" href="#animation-动画" aria-hidden="true">#</a> animation(动画)</h2>
<p>动画可以自动触发效果</p>
<p><code v-pre>设置动画效果，必须设置一个关键帧，关键帧设置了动画执行每一个步骤</code></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> test</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 动画的起始  也可以用 0% */</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* 动画的结束 也可以用 100% */</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>animation-name</code>: 对当前元素生效的关键帧名字</li>
<li><code v-pre>animation-duration</code>: 动画的执行时间</li>
<li><code v-pre>animation-delay</code>: 动画的延时</li>
<li><code v-pre>animation-timing-function</code>: 动画时序函数</li>
<li><code v-pre>animation-iteration-count</code>: 动画执行的次数</li>
<li><code v-pre>animation-direction</code>: 动画运行方向</li>
<li><code v-pre>animation-play-state</code>: 动画执行状态</li>
<li><code v-pre>animation-fill-mode</code>: 动画的填充模式(主要针对元素)</li>
</ul>
<h2 id="transform-变形" tabindex="-1"><a class="header-anchor" href="#transform-变形" aria-hidden="true">#</a> transform(变形)</h2>
<p>变形就是指通过 CSS 来改变元素的形状或位置
变形<code v-pre>不会影响到</code>页面的布局
偏移量都是基于自身计算
当翻转之后要重新审视各个方向轴</p>
<ul>
<li><code v-pre>translateX</code>: x 轴偏移量</li>
<li><code v-pre>translateY</code>: y 轴偏移量</li>
<li><code v-pre>translateZ</code>: z 轴偏移量</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">当元素大小不确定时的居中</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box3</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token comment">/*
  这种居中方式只适合元素大小确定的时候
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto; */</span>

  <span class="token comment">/* 居中： 适合于没有明确大小的元素 */</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="旋转" tabindex="-1"><a class="header-anchor" href="#旋转" aria-hidden="true">#</a> 旋转</h3>
<p>相应的旋转xyz轴</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>要想3d效果必须设置视距</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">perspective</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<ul>
<li><code v-pre>rotateX()</code></li>
<li><code v-pre>rotateY()</code></li>
<li><code v-pre>rotateZ()</code></li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 设置旋转和后背面的显示效果 */</span>
<span class="token property">backface-visibility</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缩放" tabindex="-1"><a class="header-anchor" href="#缩放" aria-hidden="true">#</a> 缩放</h2>
<p>对元素进行缩放的函数
<code v-pre>图片移入放大缩小效果</code></p>
<ul>
<li><code v-pre>scaleX()</code>: x轴缩放</li>
<li><code v-pre>scaleY()</code>: y轴缩放</li>
<li><code v-pre>scale()</code>: x，y轴同时缩放</li>
</ul>
<h2 id="transform-orgin-指定缩放的原点" tabindex="-1"><a class="header-anchor" href="#transform-orgin-指定缩放的原点" aria-hidden="true">#</a> transform-orgin(指定缩放的原点)</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">transform-orgin</span><span class="token punctuation">:</span> 20px 20px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
