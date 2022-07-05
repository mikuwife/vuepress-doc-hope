<template><div><h2 id="编写方式" tabindex="-1"><a class="header-anchor" href="#编写方式" aria-hidden="true">#</a> 编写方式</h2>
<p><strong>优先级</strong></p>
<ul>
<li>内联样式优先级最高</li>
<li>内部样式和外部样式看代码的顺序(后面的覆盖前面的)</li>
</ul>
<h3 id="外部样式-可以最大程度利用浏览器缓存机制" tabindex="-1"><a class="header-anchor" href="#外部样式-可以最大程度利用浏览器缓存机制" aria-hidden="true">#</a> <code v-pre>外部样式</code>: 可以最大程度利用浏览器<code v-pre>缓存机制</code></h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>css/style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="内部样式-在head中使用style标签" tabindex="-1"><a class="header-anchor" href="#内部样式-在head中使用style标签" aria-hidden="true">#</a> 内部样式: 在head中使用style标签</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内联样式-在标签内部通过style属性设置css" tabindex="-1"><a class="header-anchor" href="#内联样式-在标签内部通过style属性设置css" aria-hidden="true">#</a> 内联样式: 在标签内部通过style属性设置css</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>举头望明月，低头思故乡<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2>
<h3 id="常用选择器" tabindex="-1"><a class="header-anchor" href="#常用选择器" aria-hidden="true">#</a> 常用选择器</h3>
<table>
<thead>
<tr>
<th>选择器名</th>
<th>用法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>元素选择器</td>
<td>元素 {}</td>
<td>所有同名元素</td>
</tr>
<tr>
<td>id选择器</td>
<td>#id属性值 {}</td>
<td>指定id属性元素</td>
</tr>
<tr>
<td>类选择器</td>
<td>.class属性值 {}</td>
<td>指定class属性元素</td>
</tr>
<tr>
<td>通配符选择器</td>
<td>* {}</td>
<td>所有元素</td>
</tr>
</tbody>
</table>
<h3 id="复合选择器" tabindex="-1"><a class="header-anchor" href="#复合选择器" aria-hidden="true">#</a> 复合选择器</h3>
<table>
<thead>
<tr>
<th>选择器名</th>
<th>用法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>交集选择器</td>
<td>选择器1选择器2选择器n {}</td>
<td>选择同时符合多个条件的元素</td>
</tr>
<tr>
<td>并集选择器</td>
<td>选择器1, 选择器2, 选择器n {}</td>
<td>同时选择多个选择器对应元素</td>
</tr>
</tbody>
</table>
<h3 id="关系选择器" tabindex="-1"><a class="header-anchor" href="#关系选择器" aria-hidden="true">#</a> 关系选择器</h3>
<ul>
<li>父元素: 直接包含子元素的元素叫父元素</li>
<li>子元素: 直接被父元素包含的元素是子元素</li>
<li>祖先元素:
<ul>
<li>直接或间接包含后代元素的元素叫做祖先元素</li>
<li>一个元素的父元素也是它的祖先元素</li>
</ul>
</li>
<li>后代元素:
<ul>
<li>直接或间接被祖先元素包含的元素叫做后代元素</li>
<li>子元素也是后代元素</li>
</ul>
</li>
<li>兄弟元素:
<ul>
<li>拥有相同父元素的元素是兄弟元素</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>选择器名</th>
<th>用法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>子元素选择器</td>
<td>父元素 &gt; 子元素 {}</td>
<td>选中指定父元素的指定子元素</td>
</tr>
<tr>
<td>后代选择器</td>
<td>祖先 后代 {}</td>
<td>选中指定元素内的指定后代</td>
</tr>
<tr>
<td>选择下一个兄弟</td>
<td>前一个 + 下一个</td>
<td>*</td>
</tr>
<tr>
<td>选择下面所有兄弟</td>
<td>前一个 ~ 下一个</td>
<td>*</td>
</tr>
</tbody>
</table>
<h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h3>
<table>
<thead>
<tr>
<th>字段</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>[属性名]</td>
<td>选择含有指定属性的元素</td>
</tr>
<tr>
<td>[属性名=属性值]</td>
<td>选择含有指定属性和属性值的元素</td>
</tr>
<tr>
<td>[属性名^=属性值]</td>
<td>选择属性值以指定值开头的元素</td>
</tr>
<tr>
<td>[属性名$=属性值]</td>
<td>选择属性值以指定值结尾的元素</td>
</tr>
<tr>
<td>[属性名*=属性值]</td>
<td>选择属性值中含有某值的元素的元素</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
 <span class="token selector">p[theme="dark"]</span> <span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>11111111111<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器" aria-hidden="true">#</a> 伪类选择器</h3>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>伪类: 用来描述一个元素的特殊状态(第一个子元素, 被点击的元素, 鼠标移入的元素...)
伪类通常都是<code v-pre>:</code>开头</p>
</div>
<table>
<thead>
<tr>
<th>字段</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>:first:child</td>
<td>第一个子元素</td>
</tr>
<tr>
<td>:last-child</td>
<td>最后一个子元素</td>
</tr>
<tr>
<td>:nth-child(n)</td>
<td>选中第n个子元素; n第n个 n的范围0到正无穷 ;2n(even)表示选中偶数位的元素; 2n+1(odd)选中奇数位的元素</td>
</tr>
<tr>
<td>:first-of-type ; :last-of-type ; :nth-of-type()</td>
<td>同上;  <code v-pre>不同点</code>是: 这是在<code v-pre>同类型</code>元素中进行<code v-pre>排序</code></td>
</tr>
<tr>
<td>:not()</td>
<td>把符合条件的元素从选择器中去除</td>
</tr>
</tbody>
</table>
<h3 id="超链接的伪类" tabindex="-1"><a class="header-anchor" href="#超链接的伪类" aria-hidden="true">#</a> 超链接的伪类</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>作用</th>
<th>注意</th>
</tr>
</thead>
<tbody>
<tr>
<td>:link</td>
<td>没被访问过的链接(正常链接)</td>
<td>专属a标签</td>
</tr>
<tr>
<td>:visited</td>
<td>被访问过的链接</td>
<td>(隐私问题只能设置颜色); 专属a标签</td>
</tr>
<tr>
<td>:hover</td>
<td>鼠标移入的状态</td>
<td>通用</td>
</tr>
<tr>
<td>:active</td>
<td>鼠标点击时状态</td>
<td>通用</td>
</tr>
</tbody>
</table>
<h3 id="伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪元素选择器" aria-hidden="true">#</a> 伪元素选择器</h3>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p><code v-pre>伪元素</code>: 表示页面中特殊并不真实存在的元素(特殊的位置)
伪元素通常都是<code v-pre>::</code>开头</p>
</div>
<table>
<thead>
<tr>
<th>名称</th>
<th>作用</th>
<th>注意</th>
</tr>
</thead>
<tbody>
<tr>
<td>::first-letter</td>
<td>选中第一个字</td>
<td></td>
</tr>
<tr>
<td>::first-line</td>
<td>选中第一行</td>
<td></td>
</tr>
<tr>
<td>::selection</td>
<td>选中的内容</td>
<td></td>
</tr>
<tr>
<td><code v-pre>::before</code></td>
<td>元素的开始</td>
<td>必须结合<code v-pre>content属性</code>使用</td>
</tr>
<tr>
<td><code v-pre>::after</code></td>
<td>元素的最后</td>
<td>必须结合<code v-pre>content属性</code>使用</td>
</tr>
</tbody>
</table>
<p>以下代码显示 <code v-pre>《 龙族 》</code> 字样</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">div::before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'《'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">div::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'》'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>龙族<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式的继承" tabindex="-1"><a class="header-anchor" href="#样式的继承" aria-hidden="true">#</a> 样式的继承</h2>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>我们为一个元素设置的样式同时也会应用到它的后代元素上
继承是发生在祖先和后代之间的
利用继承可以将通用的样式设置到共同的祖先元素上，这样只需设置一次就可以让所有元素都具有该样式</p>
</div>
<div class="custom-container info"><p class="custom-container-title">细节</p>
<p><code v-pre>并不是</code>所有的样式都会被继承(背景相关，布局相关等样式都不会被继承)</p>
</div>
<h2 id="选择器的权重" tabindex="-1"><a class="header-anchor" href="#选择器的权重" aria-hidden="true">#</a> 选择器的权重</h2>
<div class="custom-container note"><p class="custom-container-title">样式冲突</p>
<p>当通过不同的选择器，选中相同的元素，并且为相同的样式设置不同的值时，就发生了样式冲突</p>
</div>
<div class="custom-container info"><p class="custom-container-title">发生样式冲突时，应用哪个样式由选择器的权重(优先级)决定</p>
<p>选择器的权重</p>
<ul>
<li>内联样式: 1，0，0，0</li>
<li>id选择器: 0，1，0，0</li>
<li>类和伪类选择器: 0，0，1，0</li>
<li>元素选择器: 0，0，0，1</li>
<li>通配符选择器: 0，0，0，0</li>
<li>继承的样式: 没有优先级</li>
<li><code v-pre>!important</code>: 最高的优先级(此时样式属性不可被覆盖)</li>
</ul>
</div>
<ul>
<li>
<p>比较优先级时，需要将所有的选择器优先级进行相加计算，最后优先级越高，则越优先显示(分组选择器时单独计算的)</p>
</li>
<li>
<p>选择器的累计不会超过其最大数量级，类选择器再高也不会超过id选择器</p>
</li>
<li>
<p>如果优先级计算后相同，则后面的覆盖前面的</p>
</li>
</ul>
<h2 id="长度单位" tabindex="-1"><a class="header-anchor" href="#长度单位" aria-hidden="true">#</a> 长度单位</h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>注意</th>
</tr>
</thead>
<tbody>
<tr>
<td>像素(px)</td>
<td>屏幕(显示器)是由一个个的像素构成的;  不同屏幕的像素大小是不同的，像素越小的屏幕显示效果越清晰，所以同样的200px在不同设备下显示效果不一样</td>
</tr>
<tr>
<td>百分比(%)</td>
<td>可以将属性值设为相对于&quot;父元素&quot;属性的百分比;  设置百分比可以使子元素跟随父元素的改变而改变</td>
</tr>
<tr>
<td>em</td>
<td>em是相对于元素的字体大小来计算的;  1em = 1 * font-size; em会根据字体的大小来改变</td>
</tr>
<tr>
<td>rem</td>
<td>rem根据<code v-pre>根元素(html)</code>的字体大小来计算，其余同上; 常用作<code v-pre>移动端适配</code></td>
</tr>
</tbody>
</table>
<h2 id="颜色值" tabindex="-1"><a class="header-anchor" href="#颜色值" aria-hidden="true">#</a> 颜色值</h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>注意</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>十六进制RGB值</code></td>
<td>#xxxxxx; 两位两位重复的可以简写 #aabbcc -&gt; #abc</td>
</tr>
<tr>
<td>RGB值</td>
<td>RGB(red, green, blue);  每种值0~255</td>
</tr>
<tr>
<td><code v-pre>RGBA值</code></td>
<td>RGBA(red, green, blue, 透明度值);  透明度值范围0~1, 1完全不透明，0完全透明，0.5半透明</td>
</tr>
<tr>
<td>HSL,HSLA值</td>
<td>H色相(0 - 360); S饱和度，颜色的浓度0%~100%; L亮度，颜色的亮度 0%~100%</td>
</tr>
<tr>
<td>字面值</td>
<td>red，pink...</td>
</tr>
</tbody>
</table>
</div></template>
