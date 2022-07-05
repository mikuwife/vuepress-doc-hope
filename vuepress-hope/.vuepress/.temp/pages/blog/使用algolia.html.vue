<template><div><div class="custom-container tip"><p class="custom-container-title">写在前面</p>
<p>提交url的形式引入自是不必多说，所以这次采用手动使用爬虫的方式</p>
</div>
<h2 id="注册" tabindex="-1"><a class="header-anchor" href="#注册" aria-hidden="true">#</a> 注册</h2>
<ol>
<li>
<p>首先需要注册一个<a href="https://www.algolia.com/" target="_blank" rel="noopener noreferrer">Algolia<ExternalLinkIcon/></a>账号</p>
</li>
<li>
<p>记录下你的三个API Keys，分别是: <strong>Application ID</strong>，<strong>Search Only API Key</strong>，<strong>Admin API Key</strong></p>
</li>
</ol>
<h2 id="本地设置" tabindex="-1"><a class="header-anchor" href="#本地设置" aria-hidden="true">#</a> 本地设置</h2>
<p>插件的对应字段如下:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">"Application ID"</span><span class="token punctuation">,</span>
<span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">"Search Only API Key"</span><span class="token punctuation">,</span>
<span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">"vupress(你自己随便取一个)"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>这里经过我的查找，如果你在Algolia中并没有创建过你的index，会从你本地配置的indexName字段中，选取该字段生成两个文件，<code v-pre>vuepress_tmp</code>(可能是缓存)，<code v-pre>vuepress</code>(最后只会存在这一个index)</p>
</div>
<h2 id="使用docker运行爬虫" tabindex="-1"><a class="header-anchor" href="#使用docker运行爬虫" aria-hidden="true">#</a> 使用docker运行爬虫</h2>
<p>在这一步我使用的是云服务器</p>
<ol>
<li>首先下载必要软件</li>
</ol>
<ul>
<li>jq</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> -y jq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>docker</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>//安装依赖
yum -y <span class="token function">install</span> yum-utils device-mapper-persistent-data lvm2
//配置仓库镜像
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
//安装docker
yum -y <span class="token function">install</span> docker-ce
//启动docker
systemctl start <span class="token function">docker</span>
//docker自启动
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>创建一个docsearch(随便位置，随便名字)文件夹，在文件夹中创建一个<code v-pre>.env</code>文件和一个<code v-pre>docsearch.json</code>文件，示例如下</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .env</span>
<span class="token constant">APPLICATION_ID</span> <span class="token operator">=</span> <span class="token constant">YOUR</span> Application <span class="token constant">ID</span>
<span class="token constant">API_KEY</span> <span class="token operator">=</span> <span class="token constant">YOUR</span> Admin <span class="token constant">API</span> Key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// json 示例 更多配置项 👉 https://docsearch.algolia.com/docs/legacy/config-file</span>
<span class="token punctuation">{</span>
  <span class="token property">"index_name"</span><span class="token operator">:</span> <span class="token string">"vuepress(换成你自己上面写的indexName)"</span><span class="token punctuation">,</span>
  <span class="token property">"start_urls"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"your website url"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在你创建的文件夹下运行docker命令</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -it --env-file<span class="token operator">=</span>.env -e <span class="token string">"CONFIG=<span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> docsearch.json <span class="token operator">|</span> jq -r tostring<span class="token variable">)</span></span>"</span> algolia/docsearch-scraper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果docker命令无法运行，请看第一步</p>
<ol start="4">
<li>回到你的<a href="https://www.algolia.com/dashboard" target="_blank" rel="noopener noreferrer">Alglia控制台<ExternalLinkIcon/></a>，如果发现出现了index，并且Records字段有内容，则大功告成</li>
</ol>
</div></template>
