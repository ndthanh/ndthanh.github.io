import{h as U,a as nt,b as _e,c as ot,Q as it,d as rt}from"./QBtn.fef9a744.js";import{c as Q,a as f,h as C,r as x,i as He,o as j,b as X,n as ke,d as ee,g as F,l as pe,e as Ce,f as P,j as ne,w as q,k as lt,m as I,p as ut,q as G,s as de,t as Be,u as fe,v as be,x as ve,y as st,z as ct,A as Ve,B as dt,C as J,D as ft,E as te,F as ye,G as B,H as L,I as vt,J as ae,K as $e,L as ht,M as mt,N as gt,O as pt,P as bt,Q as yt}from"./index.2f55b81e.js";import{u as Fe,a as Ae,c as wt,b as qt,d as kt,e as Ct,f as St,g as xt,h as Z,i as Tt,s as zt,j as Lt,k as _t,l as Bt,m as he,Q as $t,n as Ee,o as we}from"./QItem.226c705f.js";var Et=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:o.value},U(n.default))}}),Ot=Q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:o.value,role:"toolbar"},U(n.default))}});function Pt(){const e=x(!He.value);return e.value===!1&&j(()=>{e.value=!0}),{isHydrated:e}}const Re=typeof ResizeObserver!="undefined",Oe=Re===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var qe=Q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let o=null,l,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),l){const{offsetWidth:c,offsetHeight:u}=l;(c!==t.width||u!==t.height)&&(t={width:c,height:u},n("resize",t))}}const{proxy:v}=F();if(v.trigger=a,Re===!0){let c;const u=r=>{l=v.$el.parentNode,l?(c=new ResizeObserver(a),c.observe(l),s()):r!==!0&&ee(()=>{u(!0)})};return j(()=>{u()}),X(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():l&&c.unobserve(l))}),ke}else{let r=function(){o!==null&&(clearTimeout(o),o=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",a,pe.passive),u=void 0)},w=function(){r(),l&&l.contentDocument&&(u=l.contentDocument.defaultView,u.addEventListener("resize",a,pe.passive),s())};const{isHydrated:c}=Pt();let u;return j(()=>{ee(()=>{l=v.$el,l&&w()})}),X(r),()=>{if(c.value===!0)return C("object",{class:"q--avoid-card-border",style:Oe.style,tabindex:-1,type:"text/html",data:Oe.url,"aria-hidden":"true",onLoad:w})}}}}),Qt=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:o}){const{proxy:{$q:l}}=F(),t=Ce(ne,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const a=x(parseInt(e.heightHint,10)),s=x(!0),v=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||l.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return s.value===!0?a.value:0;const d=a.value-t.scroll.value.position;return d>0?d:0}),u=f(()=>e.modelValue!==!0||v.value===!0&&s.value!==!0),r=f(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),w=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=f(()=>{const d=t.rows.value.top,T={};return d[0]==="l"&&t.left.space===!0&&(T[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(T[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function h(d,T){t.update("header",d,T)}function m(d,T){d.value!==T&&(d.value=T)}function $({height:d}){m(a,d),h("size",d)}function S(d){r.value===!0&&m(s,!0),o("focusin",d)}q(()=>e.modelValue,d=>{h("space",d),m(s,!0),t.animate()}),q(c,d=>{h("offset",d)}),q(()=>e.reveal,d=>{d===!1&&m(s,e.modelValue)}),q(s,d=>{t.animate(),o("reveal",d)}),q(t.scroll,d=>{e.reveal===!0&&m(s,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const b={};return t.instances.header=b,e.modelValue===!0&&h("size",a.value),h("space",e.modelValue),h("offset",c.value),X(()=>{t.instances.header===b&&(t.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const d=nt(n.default,[]);return e.elevated===!0&&d.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(C(qe,{debounce:0,onResize:$})),C("header",{class:w.value,style:y.value,onFocusin:S},d)}}});const Dt=["ul","ol"];var Mt=Q({name:"QList",props:{...Fe,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const o=F(),l=Ae(e,o.proxy.$q),t=f(()=>Dt.includes(e.tag)?null:"list"),a=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:a.value,role:t.value},U(n.default))}});const Se={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ht=Object.keys(Se);Se.all=!0;function Pe(e){const n={};for(const o of Ht)e[o]===!0&&(n[o]=!0);return Object.keys(n).length===0?Se:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Vt=["INPUT","TEXTAREA"];function Qe(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&Vt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function me(e,n,o){const l=be(e);let t,a=l.left-n.event.x,s=l.top-n.event.y,v=Math.abs(a),c=Math.abs(s);const u=n.direction;u.horizontal===!0&&u.vertical!==!0?t=a<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=s<0?"up":"down":u.up===!0&&s<0?(t="up",v>c&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.down===!0&&s>0?(t="down",v>c&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.left===!0&&a<0?(t="left",v<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down"))):u.right===!0&&a>0&&(t="right",v<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,r=!0,t==="left"||t==="right"?(l.left-=a,v=0,a=0):(l.top-=s,c=0,s=0)}return{synthetic:r,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:l,direction:t,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:v,y:c},offset:{x:a,y:s},delta:{x:l.left-n.event.lastX,y:l.top-n.event.lastY}}}}let Ft=0;var ge=lt({name:"touch-pan",beforeMount(e,{value:n,modifiers:o}){if(o.mouse!==!0&&I.has.touch!==!0)return;function l(a,s){o.mouse===!0&&s===!0?st(a):(o.stop===!0&&fe(a),o.prevent===!0&&Be(a))}const t={uid:"qvtp_"+Ft++,handler:n,modifiers:o,direction:Pe(o),noop:ke,mouseStart(a){Qe(a,t)&&ut(a)&&(G(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Qe(a,t)){const s=a.target;G(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(I.is.firefox===!0&&de(e,!0),t.lastEvt=a,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Be(u),a.cancelBubble===!0&&fe(u),Object.assign(u,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:u}}fe(a)}const{left:v,top:c}=be(a);t.event={x:v,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(a){if(t.event===void 0)return;const s=be(a),v=s.left-t.event.x,c=s.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=a;const u=t.event.mouse===!0,r=()=>{l(a,u);let h;o.preserveCursor!==!0&&o.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),wt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),u===!0){const $=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{$(),m()},50):$()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(a,t.event.mouse);const{payload:h,synthetic:m}=me(a,t,!1);h!==void 0&&(t.handler(h)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=h.position.left,t.event.lastY=h.position.top,t.event.lastDir=m===!0?void 0:h.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(a);return}const w=Math.abs(v),y=Math.abs(c);w!==y&&(t.direction.horizontal===!0&&w>y||t.direction.vertical===!0&&w<y||t.direction.up===!0&&w<y&&c<0||t.direction.down===!0&&w<y&&c>0||t.direction.left===!0&&w>y&&v<0||t.direction.right===!0&&w>y&&v>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(ve(t,"temp"),I.is.firefox===!0&&de(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(me(a===void 0?t.lastEvt:a,t).payload);const{payload:v}=me(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const a=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";G(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}I.has.touch===!0&&G(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=Pe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ve(n,"main"),ve(n,"temp"),I.is.firefox===!0&&de(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});const De=150;var At=Q({name:"QDrawer",inheritAttrs:!1,props:{...qt,...Fe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...kt,"onLayout","miniState"],setup(e,{slots:n,emit:o,attrs:l}){const t=F(),{proxy:{$q:a}}=t,s=Ae(e,a),{preventBodyScroll:v}=Tt(),{registerTimeout:c,removeTimeout:u}=Ct(),r=Ce(ne,P);if(r===P)return console.error("QDrawer needs to be child of QLayout"),P;let w,y=null,h;const m=x(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),$=f(()=>e.mini===!0&&m.value!==!0),S=f(()=>$.value===!0?e.miniWidth:e.width),b=x(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),d=f(()=>e.persistent!==!0&&(m.value===!0||We.value===!0));function T(i,g){if(H(),i!==!1&&r.animate(),E(0),m.value===!0){const z=r.instances[Y.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),D(1),r.isContainer.value!==!0&&v(!0)}else D(0),i!==!1&&ue(!1);c(()=>{i!==!1&&ue(!0),g!==!0&&o("show",i)},De)}function p(i,g){W(),i!==!1&&r.animate(),D(0),E(A.value*S.value),se(),g!==!0?c(()=>{o("hide",i)},De):u()}const{show:k,hide:_}=St({showing:b,hideOnRouteChange:d,handleShow:T,handleHide:p}),{addToHistory:H,removeFromHistory:W}=xt(b,_,d),V={belowBreakpoint:m,hide:_},O=f(()=>e.side==="right"),A=f(()=>(a.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),xe=x(0),R=x(!1),oe=x(!1),Te=x(S.value*A.value),Y=f(()=>O.value===!0?"left":"right"),ie=f(()=>b.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),re=f(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(O.value?"R":"L")!==-1||a.platform.is.ios===!0&&r.isContainer.value===!0),N=f(()=>e.overlay===!1&&b.value===!0&&m.value===!1),We=f(()=>e.overlay===!0&&b.value===!0&&m.value===!1),Ne=f(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&R.value===!1?" hidden":"")),Ie=f(()=>({backgroundColor:`rgba(0,0,0,${xe.value*.4})`})),ze=f(()=>O.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),je=f(()=>O.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Xe=f(()=>{const i={};return r.header.space===!0&&ze.value===!1&&(re.value===!0?i.top=`${r.header.offset}px`:r.header.space===!0&&(i.top=`${r.header.size}px`)),r.footer.space===!0&&je.value===!1&&(re.value===!0?i.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(i.bottom=`${r.footer.size}px`)),i}),Ue=f(()=>{const i={width:`${S.value}px`,transform:`translateX(${Te.value}px)`};return m.value===!0?i:Object.assign(i,Xe.value)}),Ye=f(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Ke=f(()=>`q-drawer q-drawer--${e.side}`+(oe.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(R.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(re.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ze.value===!0?" q-drawer--top-padding":""))),Ge=f(()=>{const i=a.lang.rtl===!0?e.side:Y.value;return[[ge,tt,void 0,{[i]:!0,mouse:!0}]]}),Je=f(()=>{const i=a.lang.rtl===!0?Y.value:e.side;return[[ge,Le,void 0,{[i]:!0,mouse:!0}]]}),Ze=f(()=>{const i=a.lang.rtl===!0?Y.value:e.side;return[[ge,Le,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function le(){at(m,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}q(m,i=>{i===!0?(w=b.value,b.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(b.value===!0?(E(0),D(0),se()):k(!1))}),q(()=>e.side,(i,g)=>{r.instances[g]===V&&(r.instances[g]=void 0,r[g].space=!1,r[g].offset=0),r.instances[i]=V,r[i].size=S.value,r[i].space=N.value,r[i].offset=ie.value}),q(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&le()}),q(()=>e.behavior+e.breakpoint,le),q(r.isContainer,i=>{b.value===!0&&v(i!==!0),i===!0&&le()}),q(r.scrollbarWidth,()=>{E(b.value===!0?0:void 0)}),q(ie,i=>{M("offset",i)}),q(N,i=>{o("onLayout",i),M("space",i)}),q(O,()=>{E()}),q(S,i=>{E(),ce(e.miniToOverlay,i)}),q(()=>e.miniToOverlay,i=>{ce(i,S.value)}),q(()=>a.lang.rtl,()=>{E()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(et(),r.animate())}),q($,i=>{o("miniState",i)});function E(i){i===void 0?ee(()=>{i=b.value===!0?0:S.value,E(A.value*i)}):(r.isContainer.value===!0&&O.value===!0&&(m.value===!0||Math.abs(i)===S.value)&&(i+=A.value*r.scrollbarWidth.value),Te.value=i)}function D(i){xe.value=i}function ue(i){const g=i===!0?"remove":r.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function et(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),oe.value=!0,y=setTimeout(()=>{y=null,oe.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function tt(i){if(b.value!==!1)return;const g=S.value,z=Z(i.distance.x,0,g);if(i.isFinal===!0){z>=Math.min(75,g)===!0?k():(r.animate(),D(0),E(A.value*g)),R.value=!1;return}E((a.lang.rtl===!0?O.value!==!0:O.value)?Math.max(g-z,0):Math.min(0,z-g)),D(Z(z/g,0,1)),i.isFirst===!0&&(R.value=!0)}function Le(i){if(b.value!==!0)return;const g=S.value,z=i.direction===e.side,K=(a.lang.rtl===!0?z!==!0:z)?Z(i.distance.x,0,g):0;if(i.isFinal===!0){Math.abs(K)<Math.min(75,g)===!0?(r.animate(),D(1),E(0)):_(),R.value=!1;return}E(A.value*K),D(Z(1-K/g,0,1)),i.isFirst===!0&&(R.value=!0)}function se(){v(!1),ue(!0)}function M(i,g){r.update(e.side,i,g)}function at(i,g){i.value!==g&&(i.value=g)}function ce(i,g){M("size",i===!0?e.miniWidth:g)}return r.instances[e.side]=V,ce(e.miniToOverlay,S.value),M("space",N.value),M("offset",ie.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),j(()=>{o("onLayout",N.value),o("miniState",$.value),w=e.showIfAbove===!0;const i=()=>{(b.value===!0?T:p)(!1,!0)};if(r.totalWidth.value!==0){ee(i);return}h=q(r.totalWidth,()=>{h(),h=void 0,b.value===!1&&e.showIfAbove===!0&&m.value===!1?k(!1):i()})}),X(()=>{h!==void 0&&h(),y!==null&&(clearTimeout(y),y=null),b.value===!0&&se(),r.instances[e.side]===V&&(r.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const i=[];m.value===!0&&(e.noSwipeOpen===!1&&i.push(ct(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ge.value)),i.push(_e("div",{ref:"backdrop",class:Ne.value,style:Ie.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>Ze.value)));const g=$.value===!0&&n.mini!==void 0,z=[C("div",{...l,key:""+g,class:[Ye.value,l.class]},g===!0?n.mini():U(n.default))];return e.elevated===!0&&b.value===!0&&z.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(_e("aside",{ref:"content",class:Ke.value,style:Ue.value},z,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Je.value)),C("div",{class:"q-drawer-container"},i)}}}),Rt=Q({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:o}}=F(),l=Ce(ne,P);if(l===P)return console.error("QPageContainer needs to be child of QLayout"),P;Ve(dt,!0);const t=f(()=>{const a={};return l.header.space===!0&&(a.paddingTop=`${l.header.size}px`),l.right.space===!0&&(a[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(a.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(a[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),a});return()=>C("div",{class:"q-page-container",style:t.value},U(n.default))}});const{passive:Me}=pe,Wt=["both","horizontal","vertical"];var Nt=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Wt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:zt},emits:["scroll"],setup(e,{emit:n}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,a;q(()=>e.scrollTarget,()=>{c(),v()});function s(){l!==null&&l();const w=Math.max(0,_t(t)),y=Bt(t),h={top:w-o.position.top,left:y-o.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const m=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";o.position={top:w,left:y},o.directionChanged=o.direction!==m,o.delta=h,o.directionChanged===!0&&(o.direction=m,o.inflectionPoint=o.position),n("scroll",{...o})}function v(){t=Lt(a,e.scrollTarget),t.addEventListener("scroll",u,Me),u(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",u,Me),t=void 0)}function u(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[y,h]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{h(y),l=null}}}const{proxy:r}=F();return q(()=>r.$q.lang.rtl,s),j(()=>{a=r.$el.parentNode,v()}),X(()=>{l!==null&&l(),c()}),Object.assign(r,{trigger:u,getPosition:()=>o}),ke}}),It=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:o}){const{proxy:{$q:l}}=F(),t=x(null),a=x(l.screen.height),s=x(e.container===!0?0:l.screen.width),v=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),u=x(He.value===!0?0:he()),r=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=f(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),y=f(()=>u.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),h=f(()=>u.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function m(p){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};v.value=k,e.onScroll!==void 0&&o("scroll",k)}}function $(p){const{height:k,width:_}=p;let H=!1;a.value!==k&&(H=!0,a.value=k,e.onScrollHeight!==void 0&&o("scrollHeight",k),b()),s.value!==_&&(H=!0,s.value=_),H===!0&&e.onResize!==void 0&&o("resize",p)}function S({height:p}){c.value!==p&&(c.value=p,b())}function b(){if(e.container===!0){const p=a.value>c.value?he():0;u.value!==p&&(u.value=p)}}let d=null;const T={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:u,totalWidth:f(()=>s.value+u.value),rows:f(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:v,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,k,_){T[p][k]=_}};if(Ve(ne,T),he()>0){let _=function(){p=null,k.classList.remove("hide-scrollbar")},H=function(){if(p===null){if(k.scrollHeight>l.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout(_,300)},W=function(V){p!==null&&V==="remove"&&(clearTimeout(p),_()),window[`${V}EventListener`]("resize",H)},p=null;const k=document.body;q(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),ft(()=>{W("remove")})}return()=>{const p=ot(n.default,[C(Nt,{onScroll:m}),C(qe,{onResize:$})]),k=C("div",{class:r.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(qe,{onResize:S}),C("div",{class:"absolute-full",style:y.value},[C("div",{class:"scroll",style:h.value},[k])])]):k}}});const jt=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const n=e;return(o,l)=>(te(),ye($t,{clickable:"",tag:"a",target:"_blank",href:n.link},{default:B(()=>[n.icon?(te(),ye(Ee,{key:0,avatar:""},{default:B(()=>[L(it,{name:n.icon},null,8,["name"])]),_:1})):vt("",!0),L(Ee,null,{default:B(()=>[L(we,null,{default:B(()=>[ae($e(n.title),1)]),_:1}),L(we,{caption:""},{default:B(()=>[ae($e(n.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}}),Gt=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const n=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],o=x(!1);function l(){o.value=!o.value}return(t,a)=>{const s=ht("router-view");return te(),ye(It,{view:"lHh Lpr lFf"},{default:B(()=>[L(Qt,{elevated:""},{default:B(()=>[L(Ot,null,{default:B(()=>[L(rt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l}),L(Et,null,{default:B(()=>a[1]||(a[1]=[ae(" Trang \u0111\u1EB7t h\xE0ng s\u1EA3n ph\u1EA9m Demo ")])),_:1}),a[2]||(a[2]=mt("div",null,"Kh\xF3a h\u1ECDc TS01 - https://blog.hocexcel.online/khoa-hoc",-1))]),_:1})]),_:1}),L(At,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=v=>o.value=v),"show-if-above":"",bordered:""},{default:B(()=>[L(Mt,null,{default:B(()=>[L(we,{header:""},{default:B(()=>a[3]||(a[3]=[ae(" Essential Links ")])),_:1}),(te(),gt(bt,null,pt(n,v=>L(jt,yt({key:v.title,ref_for:!0},v),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),L(Rt,null,{default:B(()=>[L(s)]),_:1})]),_:1})}}});export{Gt as default};