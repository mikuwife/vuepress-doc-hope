<template><div><blockquote>
<p>弹性盒，伸缩盒</p>
</blockquote>
<p>CSS中的又一种布局手段，主要用来<strong>代替浮动</strong>来完成页面的布局
flex可以使元素可以跟随页面大小的改变而改变</p>
<ul>
<li>
<p>弹性容器</p>
<ul>
<li>要使用弹性盒，必须先将一个元素设置为弹性容器</li>
<li>通过 display 来设置弹性容器
<ul>
<li>display: flex 设置为块级弹性容器</li>
<li>display: inline-flex 设置为行内弹性容器</li>
</ul>
</li>
</ul>
</li>
<li>
<p>弹性元素</p>
<ul>
<li>弹性容器的<code v-pre>子元素</code>是弹性元素(弹性项)</li>
<li>弹性元素可以同时是弹性容器</li>
</ul>
</li>
<li>
<p><code v-pre>主轴</code>: 弹性元素的排列方向称为主轴</p>
</li>
<li>
<p><code v-pre>侧轴</code>: 与主轴垂直方向的称为侧轴</p>
</li>
</ul>
<h2 id="弹性容器上的样式" tabindex="-1"><a class="header-anchor" href="#弹性容器上的样式" aria-hidden="true">#</a> 弹性容器上的样式</h2>
<h3 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> flex-direction</h3>
<p>指定容器中弹性元素的排列方式</p>
<ul>
<li><code v-pre>row</code>: 弹性元素在容器中水平排位(左向右) <strong>默认值</strong></li>
<li><code v-pre>row-reverse</code>: 反向水平排列(右向左)</li>
<li><code v-pre>column</code>: 纵向排列(自上而下)</li>
<li><code v-pre>column-reverse</code>: 纵向排列(自下向上)</li>
</ul>
<h3 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> flex-wrap</h3>
<p>设置弹性元素是否在容器中自动换行</p>
<ul>
<li><code v-pre>nowrap</code>: 元素不自动换行 <strong>默认值</strong></li>
<li><code v-pre>wrap</code>: 元素沿着<strong>侧轴方向</strong>自动换行</li>
<li><code v-pre>wrap-reverse</code>: 沿着侧轴反方向换行</li>
</ul>
<h3 id="justify-content" tabindex="-1"><a class="header-anchor" href="#justify-content" aria-hidden="true">#</a> justify-content</h3>
<p>如何分配主轴上的空白空间(主轴上的元素如何排列)</p>
<ul>
<li><code v-pre>flex-start</code>: 元素沿着主轴起边排列</li>
<li><code v-pre>flex-end</code>: 沿着主轴终边排列</li>
<li><code v-pre>center</code>: 居中排列</li>
<li><code v-pre>space-around</code>: 空白均匀分布到元素两侧</li>
<li><code v-pre>space-between</code>: 空白均匀分布到元素间</li>
<li><code v-pre>space-evenly</code>: 空白分布到元素的单侧 <strong>兼容性</strong></li>
</ul>
<h3 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> align-items</h3>
<p>元素在<code v-pre>辅轴</code>上如何对齐</p>
<ul>
<li><code v-pre>stretch</code>: 将元素的长度设置为相同的值 <strong>默认值</strong></li>
<li><code v-pre>flex-start</code>: 元素不会拉伸，沿着辅轴起边对齐</li>
<li><code v-pre>flex-end</code>: 沿着辅轴的终边对齐</li>
<li><code v-pre>center</code>: 居中对齐</li>
<li><code v-pre>baseline</code>: 基线(文字的)对齐</li>
</ul>
<h3 id="align-content" tabindex="-1"><a class="header-anchor" href="#align-content" aria-hidden="true">#</a> align-content</h3>
<p>辅轴空白空间的分布，<strong>同justify-content</strong></p>
<h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h3>
<p>用来<code v-pre>覆盖当前弹性元素上的</code>align-items，<strong>同align-items</strong></p>
<h2 id="弹性元素的样式" tabindex="-1"><a class="header-anchor" href="#弹性元素的样式" aria-hidden="true">#</a> 弹性元素的样式</h2>
<h3 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> flex-grow</h3>
<p>弹性增长的系数 <strong>弹性元素占父元素的比例</strong></p>
<p>默认值: 1</p>
<h3 id="flex-shrink" tabindex="-1"><a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a> flex-shrink</h3>
<p>弹性缩减的系数</p>
<p>默认值: 1</p>
<h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis" aria-hidden="true">#</a> flex-basis</h3>
<p>指定元素在<code v-pre>主轴</code>上的基础长度</p>
<ul>
<li>如果主轴是横向的，则指定的是宽度</li>
<li>如果主轴是纵向的，则指定的是高度</li>
<li>默认值是 auto，参考元素自身的高宽</li>
</ul>
<h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3>
<p>可以同时设置 <strong>flex-grow</strong>，<strong>flex-shrink</strong>，<strong>flex-basis</strong></p>
<h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h3>
<p>指定弹性元素的排列顺序</p>
</div></template>
