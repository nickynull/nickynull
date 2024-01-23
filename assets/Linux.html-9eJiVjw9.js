import{_ as a,o as n,c as s,e}from"./app-jO_uf5ly.js";const i="/servers/tux.png",c={},t=e('<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><div align="center"><p><img src="'+i+`" alt="img"></p></div><blockquote><p><strong>Linux</strong> 是一种自由和开放源码的类 UNIX 操作系统</p></blockquote><h2 id="系统管理" tabindex="-1"><a class="header-anchor" href="#系统管理" aria-hidden="true">#</a> 系统管理</h2><h3 id="常用通用参数" tabindex="-1"><a class="header-anchor" href="#常用通用参数" aria-hidden="true">#</a> 常用通用参数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-y</span>      <span class="token comment"># 自动确认</span>
<span class="token function">sudo</span>    <span class="token comment"># 以root权限执行命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看系统信息" tabindex="-1"><a class="header-anchor" href="#查看系统信息" aria-hidden="true">#</a> 查看系统信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo   <span class="token comment"># 查看 cpu 信息</span>
<span class="token function">cat</span> /proc/meminfo   <span class="token comment"># 查看内存信息</span>
<span class="token function">uname</span> <span class="token parameter variable">-r</span>            <span class="token comment"># 查看内核版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h2><p>基于rpm，软件包管理工具</p><h3 id="yum常用命令" tabindex="-1"><a class="header-anchor" href="#yum常用命令" aria-hidden="true">#</a> yum常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> 软件包名    <span class="token comment"># 安装</span>
<span class="token function">sudo</span> yum remove 软件包名     <span class="token comment"># 卸载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用软件" tabindex="-1"><a class="header-anchor" href="#常用软件" aria-hidden="true">#</a> 常用软件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span>    <span class="token comment"># 下载软件</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">vim</span>     <span class="token comment"># 增强版 vi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d=[t];function r(l,o){return n(),s("div",null,d)}const u=a(c,[["render",r],["__file","Linux.html.vue"]]);export{u as default};