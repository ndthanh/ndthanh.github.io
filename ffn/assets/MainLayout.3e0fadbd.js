import{c as T,d,h,e as D,r as w,i as I,o as P,f as R,n as K,g as W,j as H,l as k,k as U,m as $,p as N,w as x,q as X,s as G,t as Y,u as Z,v as ee,x as te,y as ne,z as E,A as _,B as oe,C as le,_ as ie,D as re,E as ae,F as se,G as ue,H as Q,I as L,Q as ce,J as de,K as fe,L as ve}from"./index.6bbc6934.js";var he=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:f}){const n=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:n.value},D(f.default))}}),ge=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:f}){const n=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:n.value,role:"toolbar"},D(f.default))}});function me(){const e=w(!I.value);return e.value===!1&&P(()=>{e.value=!0}),{isHydrated:e}}const J=typeof ResizeObserver!="undefined",j=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var F=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:f}){let n=null,t,l={width:-1,height:-1};function a(s){s===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:s,offsetHeight:i}=t;(s!==l.width||i!==l.height)&&(l={width:s,height:i},f("resize",l))}}const{proxy:g}=H();if(g.trigger=a,J===!0){let s;const i=m=>{t=g.$el.parentNode,t?(s=new ResizeObserver(a),s.observe(t),u()):m!==!0&&W(()=>{i(!0)})};return P(()=>{i()}),R(()=>{n!==null&&clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),K}else{let m=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",a,k.passive),i=void 0)},p=function(){m(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",a,k.passive),u())};const{isHydrated:s}=me();let i;return P(()=>{W(()=>{t=g.$el,t&&p()})}),R(m),()=>{if(s.value===!0)return h("object",{class:"q--avoid-card-border",style:j.style,tabindex:-1,type:"text/html",data:j.url,"aria-hidden":"true",onLoad:p})}}}}),pe=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:n}){const{proxy:{$q:t}}=H(),l=U(N,$);if(l===$)return console.error("QHeader needs to be child of QLayout"),$;const a=w(parseInt(e.heightHint,10)),u=w(!0),g=d(()=>e.reveal===!0||l.view.value.indexOf("H")!==-1||t.platform.is.ios&&l.isContainer.value===!0),s=d(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return u.value===!0?a.value:0;const o=a.value-l.scroll.value.position;return o>0?o:0}),i=d(()=>e.modelValue!==!0||g.value===!0&&u.value!==!0),m=d(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),p=d(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=d(()=>{const o=l.rows.value.top,b={};return o[0]==="l"&&l.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),o[2]==="r"&&l.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),b});function c(o,b){l.update("header",o,b)}function y(o,b){o.value!==b&&(o.value=b)}function V({height:o}){y(a,o),c("size",o)}function O(o){m.value===!0&&y(u,!0),n("focusin",o)}x(()=>e.modelValue,o=>{c("space",o),y(u,!0),l.animate()}),x(s,o=>{c("offset",o)}),x(()=>e.reveal,o=>{o===!1&&y(u,e.modelValue)}),x(u,o=>{l.animate(),n("reveal",o)}),x(l.scroll,o=>{e.reveal===!0&&y(u,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const q={};return l.instances.header=q,e.modelValue===!0&&c("size",a.value),c("space",e.modelValue),c("offset",s.value),R(()=>{l.instances.header===q&&(l.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const o=X(f.default,[]);return e.elevated===!0&&o.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(h(F,{debounce:0,onResize:V})),h("header",{class:p.value,style:z.value,onFocusin:O},o)}}}),be=T({name:"QPageContainer",setup(e,{slots:f}){const{proxy:{$q:n}}=H(),t=U(N,$);if(t===$)return console.error("QPageContainer needs to be child of QLayout"),$;G(Y,!0);const l=d(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>h("div",{class:"q-page-container",style:l.value},D(f.default))}});const{passive:A}=k,ye=["both","horizontal","vertical"];var we=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ye.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Z},emits:["scroll"],setup(e,{emit:f}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,a;x(()=>e.scrollTarget,()=>{s(),g()});function u(){t!==null&&t();const p=Math.max(0,te(l)),z=ne(l),c={top:p-n.position.top,left:z-n.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:p,left:z},n.directionChanged=n.direction!==y,n.delta=c,n.directionChanged===!0&&(n.direction=y,n.inflectionPoint=n.position),f("scroll",{...n})}function g(){l=ee(a,e.scrollTarget),l.addEventListener("scroll",i,A),i(!0)}function s(){l!==void 0&&(l.removeEventListener("scroll",i,A),l=void 0)}function i(p){if(p===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[z,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(z),t=null}}}const{proxy:m}=H();return x(()=>m.$q.lang.rtl,u),P(()=>{a=m.$el.parentNode,g()}),R(()=>{t!==null&&t(),s()}),Object.assign(m,{trigger:i,getPosition:()=>n}),K}}),ze=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:f,emit:n}){const{proxy:{$q:t}}=H(),l=w(null),a=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),g=w({position:0,direction:"down",inflectionPoint:0}),s=w(0),i=w(I.value===!0?0:E()),m=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=d(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),c=d(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function y(r){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};g.value=v,e.onScroll!==void 0&&n("scroll",v)}}function V(r){const{height:v,width:S}=r;let C=!1;a.value!==v&&(C=!0,a.value=v,e.onScrollHeight!==void 0&&n("scrollHeight",v),q()),u.value!==S&&(C=!0,u.value=S),C===!0&&e.onResize!==void 0&&n("resize",r)}function O({height:r}){s.value!==r&&(s.value=r,q())}function q(){if(e.container===!0){const r=a.value>s.value?E():0;i.value!==r&&(i.value=r)}}let o=null;const b={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:l,height:a,containerHeight:s,scrollbarWidth:i,totalWidth:d(()=>u.value+i.value),rows:d(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:_({size:0,offset:0,space:!1}),right:_({size:300,offset:0,space:!1}),footer:_({size:0,offset:0,space:!1}),left:_({size:300,offset:0,space:!1}),scroll:g,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,v,S){b[r][v]=S}};if(G(N,b),E()>0){let S=function(){r=null,v.classList.remove("hide-scrollbar")},C=function(){if(r===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(S,300)},B=function(M){r!==null&&M==="remove"&&(clearTimeout(r),S()),window[`${M}EventListener`]("resize",C)},r=null;const v=document.body;x(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),oe(()=>{B("remove")})}return()=>{const r=le(f.default,[h(we,{onScroll:y}),h(F,{onResize:V})]),v=h("div",{class:m.value,style:p.value,ref:e.container===!0?void 0:l,tabindex:-1},r);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:l},[h(F,{onResize:O}),h("div",{class:"absolute-full",style:z.value},[h("div",{class:"scroll",style:c.value},[v])])]):v}}});const xe=re({name:"MainLayout",setup(){const e=w(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function Se(e,f,n,t,l,a){const u=ae("router-view");return se(),ue(ze,{view:"lHh Lpr lFf"},{default:Q(()=>[L(pe,{elevated:""},{default:Q(()=>[L(ge,null,{default:Q(()=>[L(ce,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),L(he,null,{default:Q(()=>f[0]||(f[0]=[de(" Quasar App ")])),_:1}),fe("div",null,"Quasar v"+ve(e.$q.version),1)]),_:1})]),_:1}),L(be,null,{default:Q(()=>[L(u)]),_:1})]),_:1})}var Le=ie(xe,[["render",Se]]);export{Le as default};