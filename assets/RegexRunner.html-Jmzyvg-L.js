import{_ as g,f as t,r as f,o as x,c as _,a,g as l,h as o,i as q,d as k,b as w,e as V}from"./app-o-GZkHgK.js";const $=a("h1",{id:"正则表达式执行器",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#正则表达式执行器","aria-hidden":"true"},"#"),k(" 正则表达式执行器")],-1),R={class:"line-block"},N={class:"line-block"},U=a("span",null,"正则",-1),X={class:"line-block"},C={class:"inline-block flex1"},E=a("span",null,"替换",-1),M={class:"inline-block"},j=a("label",{for:"clearNotMatch"},"无匹配时输出空字符串",-1),y={class:"line-block"},B=a("h2",{id:"学习正则表达式",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#学习正则表达式","aria-hidden":"true"},"#"),k(" 学习正则表达式")],-1),I={href:"https://www.runoob.com/jsref/jsref-obj-regexp.html",target:"_blank",rel:"noopener noreferrer"},L=V(`<h2 id="参考表达式" tabindex="-1"><a class="header-anchor" href="#参考表达式" aria-hidden="true">#</a> 参考表达式</h2><blockquote><p>提取路径中 XXX.XXX 形式的文字，替换参数 <code>$1</code></p></blockquote><div class="language-regex line-numbers-mode" data-ext="regex"><pre class="language-regex"><code><span class="token char-set class-name">.</span><span class="token quantifier number">*</span><span class="token char-class"><span class="token char-class-punctuation punctuation">[</span><span class="token special-escape escape">\\\\</span>/<span class="token char-class-punctuation punctuation">]</span></span><span class="token group punctuation">(</span><span class="token char-set class-name">.</span><span class="token quantifier number">+</span><span class="token special-escape escape">\\.</span><span class="token char-class"><span class="token char-class-punctuation punctuation">[</span><span class="token char-class-negation operator">^</span><span class="token special-escape escape">\\\\</span>/<span class="token char-class-punctuation punctuation">]</span></span><span class="token quantifier number">+</span><span class="token group punctuation">)</span><span class="token char-set class-name">.</span><span class="token quantifier number">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>提取所有数值，替换参数 <code>$1</code>，修饰符 <code>g</code></p></blockquote><div class="language-regex line-numbers-mode" data-ext="regex"><pre class="language-regex"><code><span class="token char-class"><span class="token char-class-punctuation punctuation">[</span><span class="token char-class-negation operator">^</span><span class="token char-set class-name">\\d</span><span class="token char-class-punctuation punctuation">]</span></span><span class="token quantifier number">*</span><span class="token group punctuation">(</span><span class="token char-set class-name">\\d</span><span class="token quantifier number">+</span><span class="token group punctuation">(</span><span class="token special-escape escape">\\.</span><span class="token char-set class-name">\\d</span><span class="token quantifier number">+</span><span class="token group punctuation">)</span><span class="token quantifier number">?</span><span class="token group punctuation">)</span><span class="token char-class"><span class="token char-class-punctuation punctuation">[</span><span class="token char-class-negation operator">^</span><span class="token char-set class-name">\\d</span><span class="token char-class-punctuation punctuation">]</span></span><span class="token quantifier number">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>提取第一次出现的数值，替换参数 <code>$1</code></p></blockquote><div class="language-regex line-numbers-mode" data-ext="regex"><pre class="language-regex"><code><span class="token char-class"><span class="token char-class-punctuation punctuation">[</span><span class="token char-class-negation operator">^</span><span class="token char-set class-name">\\d</span><span class="token char-class-punctuation punctuation">]</span></span><span class="token quantifier number">*</span><span class="token group punctuation">(</span><span class="token char-set class-name">\\d</span><span class="token quantifier number">+</span><span class="token group punctuation">(</span><span class="token special-escape escape">\\.</span><span class="token char-set class-name">\\d</span><span class="token quantifier number">+</span><span class="token group punctuation">)</span><span class="token quantifier number">?</span><span class="token group punctuation">)</span><span class="token char-set class-name">.</span><span class="token quantifier number">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),P={__name:"RegexRunner.html",setup(S){const p=t(""),u=t(""),r=t(""),i=t(!1),c=t(""),e=t("");function m(){if(!c.value||!p.value){window.$alert("没有可输出的内容，请检查输入/正则表达式");return}let h=c.value.split(`
`);const n=new RegExp(p.value,u.value);let d=h.map(s=>s&&(i.value&&!n.test(s)?"":s.replace(n,r.value)));e.value=d.join(`
`),e.value?window.$alert("运行完毕"):window.$alert("没有可输出的内容，请检查输入/正则表达式")}function v(){window.$copy(e.value)}function b(){c.value="",e.value="",window.$alert("清空完毕")}return(h,n)=>{const d=f("ExternalLinkIcon");return x(),_("div",null,[$,a("div",{class:"line-block"},[a("button",{onClick:m},"运行"),a("button",{onClick:v},"复制"),a("button",{onClick:b},"清空")]),a("div",R,[a("div",N,[U,l(a("input",{class:"flex1","onUpdate:modelValue":n[0]||(n[0]=s=>p.value=s),placeholder:"例：[^\\d*](\\d+(\\.\\d+)?)[^\\d*]"},null,512),[[o,p.value]]),l(a("input",{"onUpdate:modelValue":n[1]||(n[1]=s=>u.value=s),placeholder:"修饰符，例：igm"},null,512),[[o,u.value]])])]),a("div",X,[a("div",C,[E,l(a("input",{class:"flex1","onUpdate:modelValue":n[2]||(n[2]=s=>r.value=s),placeholder:"例：$1"},null,512),[[o,r.value]])]),a("div",M,[l(a("input",{type:"checkbox","onUpdate:modelValue":n[3]||(n[3]=s=>i.value=s),id:"clearNotMatch"},null,512),[[q,i.value]]),j])]),a("div",y,[l(a("textarea",{"onUpdate:modelValue":n[4]||(n[4]=s=>c.value=s),class:"text line-huge",placeholder:"输入"},null,512),[[o,c.value]]),l(a("textarea",{"onUpdate:modelValue":n[5]||(n[5]=s=>e.value=s),class:"text line-huge",placeholder:"输出",readonly:""},null,512),[[o,e.value]])]),B,a("p",null,[a("a",I,[k("菜鸟教程 JavaScript RegExp 对象"),w(d)])]),L])}}},D=g(P,[["__file","RegexRunner.html.vue"]]);export{D as default};