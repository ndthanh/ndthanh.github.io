import{c as m,h as q,u as I,k as D,a as $}from"./QBtn.7f8fd95b.js";import{c as r,h as v,r as g,B as j,a as k,o as _,k as A,n as p,g as y,d as x,W as K,s as N}from"./index.c55608f6.js";var F=m({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const t=r(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>v("div",{class:t.value,role:"toolbar"},q(a.default))}});function P(){const e=g(!j.value);return e.value===!1&&k(()=>{e.value=!0}),e}const Q=typeof ResizeObserver!="undefined",L=Q===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var H=m({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let t=null,n,s={width:-1,height:-1};function c(l){l===!0||e.debounce===0||e.debounce==="0"?f():t===null&&(t=setTimeout(f,e.debounce))}function f(){if(t!==null&&(clearTimeout(t),t=null),n){const{offsetWidth:l,offsetHeight:u}=n;(l!==s.width||u!==s.height)&&(s={width:l,height:u},a("resize",s))}}const{proxy:b}=y();if(Q===!0){let l;const u=o=>{n=b.$el.parentNode,n?(l=new ResizeObserver(c),l.observe(n),f()):o!==!0&&p(()=>{u(!0)})};return k(()=>{u()}),_(()=>{t!==null&&clearTimeout(t),l!==void 0&&(l.disconnect!==void 0?l.disconnect():n&&l.unobserve(n))}),A}else{let o=function(){t!==null&&(clearTimeout(t),t=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",c,x.passive),u=void 0)},d=function(){o(),n&&n.contentDocument&&(u=n.contentDocument.defaultView,u.addEventListener("resize",c,x.passive),f())};const l=P();let u;return k(()=>{p(()=>{n=b.$el,n&&d()})}),_(o),b.trigger=c,()=>{if(l.value===!0)return v("object",{style:L.style,tabindex:-1,type:"text/html",data:L.url,"aria-hidden":"true",onLoad:d})}}}}),U=m({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const t=r(()=>parseInt(e.lines,10)),n=r(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),s=r(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>v("div",{style:s.value,class:n.value},q(a.default))}});const R={dark:{type:Boolean,default:null}};function E(e,a){return r(()=>e.dark===null?a.dark.isActive:e.dark)}var V=m({name:"QList",props:{...R,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const t=y(),n=E(e,t.proxy.$q),s=r(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>v(e.tag,{class:s.value},q(a.default))}});function G(e,a,t){return t<=a?a:Math.min(t,Math.max(a,e))}function J(e,a=2,t="0"){if(e==null)return e;const n=""+e;return n.length>=a?n:new Array(a-n.length+1).join(t)+n}var X=m({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const t=r(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>v("div",{class:t.value},q(a.default))}}),Y=m({name:"QItem",props:{...R,...I,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:t}){const{proxy:{$q:n}}=y(),s=E(e,n),{hasLink:c,linkAttrs:f,linkClass:b,linkTag:l,navigateOnClick:u}=D(),o=g(null),d=g(null),B=r(()=>e.clickable===!0||c.value===!0||e.tag==="label"),h=r(()=>e.disable!==!0&&B.value===!0),z=r(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(s.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?b.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(h.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=r(()=>{if(e.insetLevel===void 0)return null;const i=n.lang.rtl===!0?"Right":"Left";return{["padding"+i]:16+e.insetLevel*56+"px"}});function S(i){h.value===!0&&(d.value!==null&&(i.qKeyEvent!==!0&&document.activeElement===o.value?d.value.focus():document.activeElement===d.value&&o.value.focus()),u(i))}function O(i){if(h.value===!0&&K(i,13)===!0){N(i),i.qKeyEvent=!0;const w=new MouseEvent("click",i);w.qKeyEvent=!0,o.value.dispatchEvent(w)}t("keyup",i)}function T(){const i=$(a.default,[]);return h.value===!0&&i.unshift(v("div",{class:"q-focus-helper",tabindex:-1,ref:d})),i}return()=>{const i={ref:o,class:z.value,style:C.value,role:"listitem",onClick:S,onKeyup:O};return h.value===!0?(i.tabindex=e.tabindex||"0",Object.assign(i,f.value)):B.value===!0&&(i["aria-disabled"]="true"),v(l.value,i,T())}}});export{H as Q,E as a,G as b,X as c,U as d,Y as e,F as f,V as g,J as p,R as u};