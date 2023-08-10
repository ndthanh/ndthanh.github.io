import{c as li,h as sn,Q as ks,l as ih,k as Rs}from"./QBtn.90b11cc7.js";import{d as Fa,e as Vn,c as me,h as ye,f as sh,B as uh,g as Fn,w as ut,o as To,a as Fo,U as ch,r as We,V as lh,W as Pu,X as fh,s as hh,b as _n,m as dh,Y as ph,i as vh,u as lr,T as mh,Z as gh,j as yh,v as Is,G as Ou,$ as xh,K as vr,J as Na,Q as Ss,M as bh,N as wh,I as Ch}from"./index.237bacff.js";import{u as Bu,a as Lu}from"./use-dark.95fccb4b.js";var _h=li({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(r,{slots:t}){const{proxy:{$q:e}}=Fn(),n=Fa(sh,Vn);if(n===Vn)return console.error("QPage needs to be a deep child of QLayout"),Vn;if(Fa(uh,Vn)===Vn)return console.error("QPage needs to be child of QPageContainer"),Vn;const a=me(()=>{const s=(n.header.space===!0?n.header.size:0)+(n.footer.space===!0?n.footer.size:0);if(typeof r.styleFn=="function"){const u=n.isContainer.value===!0?n.containerHeight.value:e.screen.height;return r.styleFn(s,u)}return{minHeight:n.isContainer.value===!0?n.containerHeight.value-s+"px":e.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":e.screen.height-s+"px"}}),i=me(()=>`q-page${r.padding===!0?" q-layout-padding":""}`);return()=>ye("main",{class:i.value,style:a.value},sn(t.default))}});function Eh({validate:r,resetValidation:t,requiresQForm:e}){const n=Fa(ch,!1);if(n!==!1){const{props:o,proxy:a}=Fn();Object.assign(a,{validate:r,resetValidation:t}),ut(()=>o.disable,i=>{i===!0?(typeof t=="function"&&t(),n.unbindComponent(a)):n.bindComponent(a)}),To(()=>{o.disable!==!0&&n.bindComponent(a)}),Fo(()=>{o.disable!==!0&&n.unbindComponent(a)})}else e===!0&&console.error("Parent QForm not found on useFormChild()!")}const As=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ds=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Ts=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Ur=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Gr=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,na={date:r=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(r),time:r=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(r),fulltime:r=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(r),timeOrFulltime:r=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(r),email:r=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r),hexColor:r=>As.test(r),hexaColor:r=>Ds.test(r),hexOrHexaColor:r=>Ts.test(r),rgbColor:r=>Ur.test(r),rgbaColor:r=>Gr.test(r),rgbOrRgbaColor:r=>Ur.test(r)||Gr.test(r),hexOrRgbColor:r=>As.test(r)||Ur.test(r),hexaOrRgbaColor:r=>Ds.test(r)||Gr.test(r),anyColor:r=>Ts.test(r)||Ur.test(r)||Gr.test(r)},kh=[!0,!1,"ondemand"],Rh={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:r=>kh.includes(r)}};function Ih(r,t){const{props:e,proxy:n}=Fn(),o=We(!1),a=We(null),i=We(null);Eh({validate:p,resetValidation:d});let s=0,u;const c=me(()=>e.rules!==void 0&&e.rules!==null&&e.rules.length!==0),l=me(()=>e.disable!==!0&&c.value===!0),f=me(()=>e.error===!0||o.value===!0),h=me(()=>typeof e.errorMessage=="string"&&e.errorMessage.length!==0?e.errorMessage:a.value);ut(()=>e.modelValue,()=>{m()}),ut(()=>e.reactiveRules,g=>{g===!0?u===void 0&&(u=ut(()=>e.rules,()=>{m(!0)})):u!==void 0&&(u(),u=void 0)},{immediate:!0}),ut(r,g=>{g===!0?i.value===null&&(i.value=!1):i.value===!1&&(i.value=!0,l.value===!0&&e.lazyRules!=="ondemand"&&t.value===!1&&v())});function d(){s++,t.value=!1,i.value=null,o.value=!1,a.value=null,v.cancel()}function p(g=e.modelValue){if(l.value!==!0)return!0;const x=++s,b=t.value!==!0?()=>{i.value=!0}:()=>{},y=(C,I)=>{C===!0&&b(),o.value=C,a.value=I||null,t.value=!1},w=[];for(let C=0;C<e.rules.length;C++){const I=e.rules[C];let S;if(typeof I=="function"?S=I(g,na):typeof I=="string"&&na[I]!==void 0&&(S=na[I](g)),S===!1||typeof S=="string")return y(!0,S),!1;S!==!0&&S!==void 0&&w.push(S)}return w.length===0?(y(!1),!0):(t.value=!0,Promise.all(w).then(C=>{if(C===void 0||Array.isArray(C)===!1||C.length===0)return x===s&&y(!1),!0;const I=C.find(S=>S===!1||typeof S=="string");return x===s&&y(I!==void 0,I),I===void 0},C=>(x===s&&(console.error(C),y(!0)),!1)))}function m(g){l.value===!0&&e.lazyRules!=="ondemand"&&(i.value===!0||e.lazyRules!==!0&&g!==!0)&&v()}const v=lh(p,0);return Fo(()=>{u!==void 0&&u(),v.cancel()}),Object.assign(n,{resetValidation:d,validate:p}),Pu(n,"hasError",()=>f.value),{isDirtyModel:i,hasRules:c,hasError:f,errorMessage:h,validate:p,resetValidation:d}}const Fs=/^on[A-Z]/;function Sh(r,t){const e={listeners:We({}),attributes:We({})};function n(){const o={},a={};for(const i in r)i!=="class"&&i!=="style"&&Fs.test(i)===!1&&(o[i]=r[i]);for(const i in t.props)Fs.test(i)===!0&&(a[i]=t.props[i]);e.attributes.value=o,e.listeners.value=a}return fh(n),n(),e}let ra,Hr=0;const je=new Array(256);for(let r=0;r<256;r++)je[r]=(r+256).toString(16).substring(1);const Ah=(()=>{const r=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(r!==void 0){if(r.randomBytes!==void 0)return r.randomBytes;if(r.getRandomValues!==void 0)return t=>{const e=new Uint8Array(t);return r.getRandomValues(e),e}}return t=>{const e=[];for(let n=t;n>0;n--)e.push(Math.floor(Math.random()*256));return e}})(),Ns=4096;function Dh(){(ra===void 0||Hr+16>Ns)&&(Hr=0,ra=Ah(Ns));const r=Array.prototype.slice.call(ra,Hr,Hr+=16);return r[6]=r[6]&15|64,r[8]=r[8]&63|128,je[r[0]]+je[r[1]]+je[r[2]]+je[r[3]]+"-"+je[r[4]]+je[r[5]]+"-"+je[r[6]]+je[r[7]]+"-"+je[r[8]]+je[r[9]]+"-"+je[r[10]]+je[r[11]]+je[r[12]]+je[r[13]]+je[r[14]]+je[r[15]]}let Ma=[],Th=[];function Wu(r){Th.length===0?r():Ma.push(r)}function Fh(r){Ma=Ma.filter(t=>t!==r)}function Pa(r){return r===void 0?`f_${Dh()}`:r}function Oa(r){return r!=null&&(""+r).length!==0}const Nh={...Bu,...Rh,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Mh=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ph(){const{props:r,attrs:t,proxy:e,vnode:n}=Fn();return{isDark:Lu(r,e.$q),editable:me(()=>r.disable!==!0&&r.readonly!==!0),innerLoading:We(!1),focused:We(!1),hasPopupOpen:!1,splitAttrs:Sh(t,n),targetUid:We(Pa(r.for)),rootRef:We(null),targetRef:We(null),controlRef:We(null)}}function Oh(r){const{props:t,emit:e,slots:n,attrs:o,proxy:a}=Fn(),{$q:i}=a;let s=null;r.hasValue===void 0&&(r.hasValue=me(()=>Oa(t.modelValue))),r.emitValue===void 0&&(r.emitValue=N=>{e("update:modelValue",N)}),r.controlEvents===void 0&&(r.controlEvents={onFocusin:_,onFocusout:E}),Object.assign(r,{clearValue:D,onControlFocusin:_,onControlFocusout:E,focus:I}),r.computedCounter===void 0&&(r.computedCounter=me(()=>{if(t.counter!==!1){const N=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,O=t.maxlength!==void 0?t.maxlength:t.maxValues;return N+(O!==void 0?" / "+O:"")}}));const{isDirtyModel:u,hasRules:c,hasError:l,errorMessage:f,resetValidation:h}=Ih(r.focused,r.innerLoading),d=r.floatingLabel!==void 0?me(()=>t.stackLabel===!0||r.focused.value===!0||r.floatingLabel.value===!0):me(()=>t.stackLabel===!0||r.focused.value===!0||r.hasValue.value===!0),p=me(()=>t.bottomSlots===!0||t.hint!==void 0||c.value===!0||t.counter===!0||t.error!==null),m=me(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),v=me(()=>`q-field row no-wrap items-start q-field--${m.value}`+(r.fieldClass!==void 0?` ${r.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(d.value===!0?" q-field--float":"")+(x.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(r.isDark.value===!0?" q-field--dark":"")+(r.getControl===void 0?" q-field--auto-height":"")+(r.focused.value===!0?" q-field--focused":"")+(l.value===!0?" q-field--error":"")+(l.value===!0||r.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&p.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),g=me(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(l.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&r.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),x=me(()=>t.labelSlot===!0||t.label!==void 0),b=me(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&l.value!==!0?` text-${t.labelColor}`:"")),y=me(()=>({id:r.targetUid.value,editable:r.editable.value,focused:r.focused.value,floatingLabel:d.value,modelValue:t.modelValue,emitValue:r.emitValue})),w=me(()=>{const N={for:r.targetUid.value};return t.disable===!0?N["aria-disabled"]="true":t.readonly===!0&&(N["aria-readonly"]="true"),N});ut(()=>t.for,N=>{r.targetUid.value=Pa(N)});function C(){const N=document.activeElement;let O=r.targetRef!==void 0&&r.targetRef.value;O&&(N===null||N.id!==r.targetUid.value)&&(O.hasAttribute("tabindex")===!0||(O=O.querySelector("[tabindex]")),O&&O!==N&&O.focus({preventScroll:!0}))}function I(){Wu(C)}function S(){Fh(C);const N=document.activeElement;N!==null&&r.rootRef.value.contains(N)&&N.blur()}function _(N){s!==null&&(clearTimeout(s),s=null),r.editable.value===!0&&r.focused.value===!1&&(r.focused.value=!0,e("focus",N))}function E(N,O){s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,!(document.hasFocus()===!0&&(r.hasPopupOpen===!0||r.controlRef===void 0||r.controlRef.value===null||r.controlRef.value.contains(document.activeElement)!==!1))&&(r.focused.value===!0&&(r.focused.value=!1,e("blur",N)),O!==void 0&&O())})}function D(N){hh(N),i.platform.is.mobile!==!0?(r.targetRef!==void 0&&r.targetRef.value||r.rootRef.value).focus():r.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(r.inputRef.value.value=null),e("update:modelValue",null),e("clear",t.modelValue),_n(()=>{h(),i.platform.is.mobile!==!0&&(u.value=!1)})}function A(){const N=[];return n.prepend!==void 0&&N.push(ye("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:lr},n.prepend())),N.push(ye("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},P())),l.value===!0&&t.noErrorIcon===!1&&N.push(B("error",[ye(ks,{name:i.iconSet.field.error,color:"negative"})])),t.loading===!0||r.innerLoading.value===!0?N.push(B("inner-loading-append",n.loading!==void 0?n.loading():[ye(ih,{color:t.color})])):t.clearable===!0&&r.hasValue.value===!0&&r.editable.value===!0&&N.push(B("inner-clearable-append",[ye(ks,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||i.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:D})])),n.append!==void 0&&N.push(ye("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:lr},n.append())),r.getInnerAppend!==void 0&&N.push(B("inner-append",r.getInnerAppend())),r.getControlChild!==void 0&&N.push(r.getControlChild()),N}function P(){const N=[];return t.prefix!==void 0&&t.prefix!==null&&N.push(ye("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),r.getShadowControl!==void 0&&r.hasShadow.value===!0&&N.push(r.getShadowControl()),r.getControl!==void 0?N.push(r.getControl()):n.rawControl!==void 0?N.push(n.rawControl()):n.control!==void 0&&N.push(ye("div",{ref:r.targetRef,class:"q-field__native row",tabindex:-1,...r.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},n.control(y.value))),x.value===!0&&N.push(ye("div",{class:b.value},sn(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&N.push(ye("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),N.concat(sn(n.default))}function M(){let N,O;l.value===!0?f.value!==null?(N=[ye("div",{role:"alert"},f.value)],O=`q--slot-error-${f.value}`):(N=sn(n.error),O="q--slot-error"):(t.hideHint!==!0||r.focused.value===!0)&&(t.hint!==void 0?(N=[ye("div",t.hint)],O=`q--slot-hint-${t.hint}`):(N=sn(n.hint),O="q--slot-hint"));const H=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&H===!1&&N===void 0)return;const G=ye("div",{key:O,class:"q-field__messages col"},N);return ye("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:lr},[t.hideBottomSpace===!0?G:ye(mh,{name:"q-transition--field-message"},()=>G),H===!0?ye("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():r.computedCounter.value):null])}function B(N,O){return O===null?null:ye("div",{key:N,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},O)}let W=!1;return dh(()=>{W=!0}),ph(()=>{W===!0&&t.autofocus===!0&&a.focus()}),To(()=>{vh.value===!0&&t.for===void 0&&(r.targetUid.value=Pa()),t.autofocus===!0&&a.focus()}),Fo(()=>{s!==null&&clearTimeout(s)}),Object.assign(a,{focus:I,blur:S}),function(){const O=r.getControl===void 0&&n.control===void 0?{...r.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...w.value}:w.value;return ye("label",{ref:r.rootRef,class:[v.value,o.class],style:o.style,...O},[n.before!==void 0?ye("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:lr},n.before()):null,ye("div",{class:"q-field__inner relative-position col self-stretch"},[ye("div",{ref:r.controlRef,class:g.value,tabindex:-1,...r.controlEvents},A()),p.value===!0?M():null]),n.after!==void 0?ye("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:lr},n.after()):null])}}const Ms={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},uo={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:r=>r.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:r=>r.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:r=>r.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:r=>r.toLocaleLowerCase()}},Vu=Object.keys(uo);Vu.forEach(r=>{uo[r].regex=new RegExp(uo[r].pattern)});const Bh=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Vu.join("")+"])|(.)","g"),Ps=/[.*+?^${}()|[\]\\]/g,Ne=String.fromCharCode(1),Lh={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Wh(r,t,e,n){let o,a,i,s,u,c;const l=We(null),f=We(d());function h(){return r.autogrow===!0||["textarea","text","search","url","tel","password"].includes(r.type)}ut(()=>r.type+r.autogrow,m),ut(()=>r.mask,_=>{if(_!==void 0)v(f.value,!0);else{const E=I(f.value);m(),r.modelValue!==E&&t("update:modelValue",E)}}),ut(()=>r.fillMask+r.reverseFillMask,()=>{l.value===!0&&v(f.value,!0)}),ut(()=>r.unmaskedValue,()=>{l.value===!0&&v(f.value)});function d(){if(m(),l.value===!0){const _=w(I(r.modelValue));return r.fillMask!==!1?S(_):_}return r.modelValue}function p(_){if(_<o.length)return o.slice(-_);let E="",D=o;const A=D.indexOf(Ne);if(A>-1){for(let P=_-D.length;P>0;P--)E+=Ne;D=D.slice(0,A)+E+D.slice(A)}return D}function m(){if(l.value=r.mask!==void 0&&r.mask.length!==0&&h(),l.value===!1){s=void 0,o="",a="";return}const _=Ms[r.mask]===void 0?r.mask:Ms[r.mask],E=typeof r.fillMask=="string"&&r.fillMask.length!==0?r.fillMask.slice(0,1):"_",D=E.replace(Ps,"\\$&"),A=[],P=[],M=[];let B=r.reverseFillMask===!0,W="",N="";_.replace(Bh,(j,V,K,oe,re)=>{if(oe!==void 0){const ne=uo[oe];M.push(ne),N=ne.negate,B===!0&&(P.push("(?:"+N+"+)?("+ne.pattern+"+)?(?:"+N+"+)?("+ne.pattern+"+)?"),B=!1),P.push("(?:"+N+"+)?("+ne.pattern+")?")}else if(K!==void 0)W="\\"+(K==="\\"?"":K),M.push(K),A.push("([^"+W+"]+)?"+W+"?");else{const ne=V!==void 0?V:re;W=ne==="\\"?"\\\\\\\\":ne.replace(Ps,"\\\\$&"),M.push(ne),A.push("([^"+W+"]+)?"+W+"?")}});const O=new RegExp("^"+A.join("")+"("+(W===""?".":"[^"+W+"]")+"+)?"+(W===""?"":"["+W+"]*")+"$"),H=P.length-1,G=P.map((j,V)=>V===0&&r.reverseFillMask===!0?new RegExp("^"+D+"*"+j):V===H?new RegExp("^"+j+"("+(N===""?".":N)+"+)?"+(r.reverseFillMask===!0?"$":D+"*")):new RegExp("^"+j));i=M,s=j=>{const V=O.exec(r.reverseFillMask===!0?j:j.slice(0,M.length+1));V!==null&&(j=V.slice(1).join(""));const K=[],oe=G.length;for(let re=0,ne=j;re<oe;re++){const ue=G[re].exec(ne);if(ue===null)break;ne=ne.slice(ue.shift().length),K.push(...ue)}return K.length!==0?K.join(""):j},o=M.map(j=>typeof j=="string"?j:Ne).join(""),a=o.split(Ne).join(E)}function v(_,E,D){const A=n.value,P=A.selectionEnd,M=A.value.length-P,B=I(_);E===!0&&m();const W=w(B),N=r.fillMask!==!1?S(W):W,O=f.value!==N;A.value!==N&&(A.value=N),O===!0&&(f.value=N),document.activeElement===A&&_n(()=>{if(N===a){const G=r.reverseFillMask===!0?a.length:0;A.setSelectionRange(G,G,"forward");return}if(D==="insertFromPaste"&&r.reverseFillMask!==!0){const G=A.selectionEnd;let j=P-1;for(let V=u;V<=j&&V<G;V++)o[V]!==Ne&&j++;x.right(A,j);return}if(["deleteContentBackward","deleteContentForward"].indexOf(D)>-1){const G=r.reverseFillMask===!0?P===0?N.length>W.length?1:0:Math.max(0,N.length-(N===a?0:Math.min(W.length,M)+1))+1:P;A.setSelectionRange(G,G,"forward");return}if(r.reverseFillMask===!0)if(O===!0){const G=Math.max(0,N.length-(N===a?0:Math.min(W.length,M+1)));G===1&&P===1?A.setSelectionRange(G,G,"forward"):x.rightReverse(A,G)}else{const G=N.length-M;A.setSelectionRange(G,G,"backward")}else if(O===!0){const G=Math.max(0,o.indexOf(Ne),Math.min(W.length,P)-1);x.right(A,G)}else{const G=P-1;x.right(A,G)}});const H=r.unmaskedValue===!0?I(N):N;String(r.modelValue)!==H&&e(H,!0)}function g(_,E,D){const A=w(I(_.value));E=Math.max(0,o.indexOf(Ne),Math.min(A.length,E)),u=E,_.setSelectionRange(E,D,"forward")}const x={left(_,E){const D=o.slice(E-1).indexOf(Ne)===-1;let A=Math.max(0,E-1);for(;A>=0;A--)if(o[A]===Ne){E=A,D===!0&&E++;break}if(A<0&&o[E]!==void 0&&o[E]!==Ne)return x.right(_,0);E>=0&&_.setSelectionRange(E,E,"backward")},right(_,E){const D=_.value.length;let A=Math.min(D,E+1);for(;A<=D;A++)if(o[A]===Ne){E=A;break}else o[A-1]===Ne&&(E=A);if(A>D&&o[E-1]!==void 0&&o[E-1]!==Ne)return x.left(_,D);_.setSelectionRange(E,E,"forward")},leftReverse(_,E){const D=p(_.value.length);let A=Math.max(0,E-1);for(;A>=0;A--)if(D[A-1]===Ne){E=A;break}else if(D[A]===Ne&&(E=A,A===0))break;if(A<0&&D[E]!==void 0&&D[E]!==Ne)return x.rightReverse(_,0);E>=0&&_.setSelectionRange(E,E,"backward")},rightReverse(_,E){const D=_.value.length,A=p(D),P=A.slice(0,E+1).indexOf(Ne)===-1;let M=Math.min(D,E+1);for(;M<=D;M++)if(A[M-1]===Ne){E=M,E>0&&P===!0&&E--;break}if(M>D&&A[E-1]!==void 0&&A[E-1]!==Ne)return x.leftReverse(_,D);_.setSelectionRange(E,E,"forward")}};function b(_){t("click",_),c=void 0}function y(_){if(t("keydown",_),gh(_)===!0||_.altKey===!0)return;const E=n.value,D=E.selectionStart,A=E.selectionEnd;if(_.shiftKey||(c=void 0),_.keyCode===37||_.keyCode===39){_.shiftKey&&c===void 0&&(c=E.selectionDirection==="forward"?D:A);const P=x[(_.keyCode===39?"right":"left")+(r.reverseFillMask===!0?"Reverse":"")];if(_.preventDefault(),P(E,c===D?A:D),_.shiftKey){const M=E.selectionStart;E.setSelectionRange(Math.min(c,M),Math.max(c,M),"forward")}}else _.keyCode===8&&r.reverseFillMask!==!0&&D===A?(x.left(E,D),E.setSelectionRange(E.selectionStart,A,"backward")):_.keyCode===46&&r.reverseFillMask===!0&&D===A&&(x.rightReverse(E,A),E.setSelectionRange(D,E.selectionEnd,"forward"))}function w(_){if(_==null||_==="")return"";if(r.reverseFillMask===!0)return C(_);const E=i;let D=0,A="";for(let P=0;P<E.length;P++){const M=_[D],B=E[P];if(typeof B=="string")A+=B,M===B&&D++;else if(M!==void 0&&B.regex.test(M))A+=B.transform!==void 0?B.transform(M):M,D++;else return A}return A}function C(_){const E=i,D=o.indexOf(Ne);let A=_.length-1,P="";for(let M=E.length-1;M>=0&&A>-1;M--){const B=E[M];let W=_[A];if(typeof B=="string")P=B+P,W===B&&A--;else if(W!==void 0&&B.regex.test(W))do P=(B.transform!==void 0?B.transform(W):W)+P,A--,W=_[A];while(D===M&&W!==void 0&&B.regex.test(W));else return P}return P}function I(_){return typeof _!="string"||s===void 0?typeof _=="number"?s(""+_):_:s(_)}function S(_){return a.length-_.length<=0?_:r.reverseFillMask===!0&&_.length!==0?a.slice(0,-_.length)+_:_+a.slice(_.length)}return{innerValue:f,hasMask:l,moveCursorForPaste:g,updateMaskValue:v,onMaskedKeydown:y,onMaskedClick:b}}const Vh={name:String};function zh(r){return me(()=>r.name||r.for)}function Uh(r,t){function e(){const n=r.modelValue;try{const o="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(n)===n&&("length"in n?Array.from(n):[n]).forEach(a=>{o.items.add(a)}),{files:o.files}}catch{return{files:void 0}}}return t===!0?me(()=>{if(r.type==="file")return e()}):me(e)}const Gh=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Hh=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,qh=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,jh=/[a-z0-9_ -]$/i;function Kh(r){return function(e){if(e.type==="compositionend"||e.type==="change"){if(e.target.qComposing!==!0)return;e.target.qComposing=!1,r(e)}else e.type==="compositionupdate"&&e.target.qComposing!==!0&&typeof e.data=="string"&&(yh.is.firefox===!0?jh.test(e.data)===!1:Gh.test(e.data)===!0||Hh.test(e.data)===!0||qh.test(e.data)===!0)===!0&&(e.target.qComposing=!0)}}var Xh=li({name:"QInput",inheritAttrs:!1,props:{...Nh,...Lh,...Vh,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Mh,"paste","change","keydown","click","animationend"],setup(r,{emit:t,attrs:e}){const{proxy:n}=Fn(),{$q:o}=n,a={};let i=NaN,s,u,c=null,l;const f=We(null),h=zh(r),{innerValue:d,hasMask:p,moveCursorForPaste:m,updateMaskValue:v,onMaskedKeydown:g,onMaskedClick:x}=Wh(r,t,W,f),b=Uh(r,!0),y=me(()=>Oa(d.value)),w=Kh(M),C=Ph(),I=me(()=>r.type==="textarea"||r.autogrow===!0),S=me(()=>I.value===!0||["text","search","url","tel","password"].includes(r.type)),_=me(()=>{const V={...C.splitAttrs.listeners.value,onInput:M,onPaste:P,onChange:O,onBlur:H,onFocus:Is};return V.onCompositionstart=V.onCompositionupdate=V.onCompositionend=w,p.value===!0&&(V.onKeydown=g,V.onClick=x),r.autogrow===!0&&(V.onAnimationend=B),V}),E=me(()=>{const V={tabindex:0,"data-autofocus":r.autofocus===!0||void 0,rows:r.type==="textarea"?6:void 0,"aria-label":r.label,name:h.value,...C.splitAttrs.attributes.value,id:C.targetUid.value,maxlength:r.maxlength,disabled:r.disable===!0,readonly:r.readonly===!0};return I.value===!1&&(V.type=r.type),r.autogrow===!0&&(V.rows=1),V});ut(()=>r.type,()=>{f.value&&(f.value.value=r.modelValue)}),ut(()=>r.modelValue,V=>{if(p.value===!0){if(u===!0&&(u=!1,String(V)===i))return;v(V)}else d.value!==V&&(d.value=V,r.type==="number"&&a.hasOwnProperty("value")===!0&&(s===!0?s=!1:delete a.value));r.autogrow===!0&&_n(N)}),ut(()=>r.autogrow,V=>{V===!0?_n(N):f.value!==null&&e.rows>0&&(f.value.style.height="auto")}),ut(()=>r.dense,()=>{r.autogrow===!0&&_n(N)});function D(){Wu(()=>{const V=document.activeElement;f.value!==null&&f.value!==V&&(V===null||V.id!==C.targetUid.value)&&f.value.focus({preventScroll:!0})})}function A(){f.value!==null&&f.value.select()}function P(V){if(p.value===!0&&r.reverseFillMask!==!0){const K=V.target;m(K,K.selectionStart,K.selectionEnd)}t("paste",V)}function M(V){if(!V||!V.target)return;if(r.type==="file"){t("update:modelValue",V.target.files);return}const K=V.target.value;if(V.target.qComposing===!0){a.value=K;return}if(p.value===!0)v(K,!1,V.inputType);else if(W(K),S.value===!0&&V.target===document.activeElement){const{selectionStart:oe,selectionEnd:re}=V.target;oe!==void 0&&re!==void 0&&_n(()=>{V.target===document.activeElement&&K.indexOf(V.target.value)===0&&V.target.setSelectionRange(oe,re)})}r.autogrow===!0&&N()}function B(V){t("animationend",V),N()}function W(V,K){l=()=>{c=null,r.type!=="number"&&a.hasOwnProperty("value")===!0&&delete a.value,r.modelValue!==V&&i!==V&&(i=V,K===!0&&(u=!0),t("update:modelValue",V),_n(()=>{i===V&&(i=NaN)})),l=void 0},r.type==="number"&&(s=!0,a.value=V),r.debounce!==void 0?(c!==null&&clearTimeout(c),a.value=V,c=setTimeout(l,r.debounce)):l()}function N(){requestAnimationFrame(()=>{const V=f.value;if(V!==null){const K=V.parentNode.style,{scrollTop:oe}=V,{overflowY:re,maxHeight:ne}=o.platform.is.firefox===!0?{}:window.getComputedStyle(V),ue=re!==void 0&&re!=="scroll";ue===!0&&(V.style.overflowY="hidden"),K.marginBottom=V.scrollHeight-1+"px",V.style.height="1px",V.style.height=V.scrollHeight+"px",ue===!0&&(V.style.overflowY=parseInt(ne,10)<V.scrollHeight?"auto":"hidden"),K.marginBottom="",V.scrollTop=oe}})}function O(V){w(V),c!==null&&(clearTimeout(c),c=null),l!==void 0&&l(),t("change",V.target.value)}function H(V){V!==void 0&&Is(V),c!==null&&(clearTimeout(c),c=null),l!==void 0&&l(),s=!1,u=!1,delete a.value,r.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=d.value!==void 0?d.value:"")})}function G(){return a.hasOwnProperty("value")===!0?a.value:d.value!==void 0?d.value:""}Fo(()=>{H()}),To(()=>{r.autogrow===!0&&N()}),Object.assign(C,{innerValue:d,fieldClass:me(()=>`q-${I.value===!0?"textarea":"input"}`+(r.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:me(()=>r.type!=="file"&&typeof r.shadowText=="string"&&r.shadowText.length!==0),inputRef:f,emitValue:W,hasValue:y,floatingLabel:me(()=>y.value===!0&&(r.type!=="number"||isNaN(d.value)===!1)||Oa(r.displayValue)),getControl:()=>ye(I.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",r.inputClass],style:r.inputStyle,...E.value,..._.value,...r.type!=="file"?{value:G()}:b.value}),getShadowControl:()=>ye("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(I.value===!0?"":" text-no-wrap")},[ye("span",{class:"invisible"},G()),ye("span",r.shadowText)])});const j=Oh(C);return Object.assign(n,{focus:D,select:A,getNativeElement:()=>f.value}),Pu(n,"nativeEl",()=>f.value),j}}),$h=li({name:"QBanner",props:{...Bu,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(r,{slots:t}){const{proxy:{$q:e}}=Fn(),n=Lu(r,e),o=me(()=>"q-banner row items-center"+(r.dense===!0?" q-banner--dense":"")+(n.value===!0?" q-banner--dark q-dark":"")+(r.rounded===!0?" rounded-borders":"")),a=me(()=>`q-banner__actions row items-center justify-end col-${r.inlineActions===!0?"auto":"all"}`);return()=>{const i=[ye("div",{class:"q-banner__avatar col-auto row items-center self-start"},sn(t.avatar)),ye("div",{class:"q-banner__content col text-body2"},sn(t.default))],s=sn(t.action);return s!==void 0&&i.push(ye("div",{class:a.value},s)),ye("div",{class:o.value+(r.inlineActions===!1&&s!==void 0?" q-banner--top-padding":""),role:"alert"},i)}}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var zu=function(r,t){return(zu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])})(r,t)};function kt(r,t){function e(){this.constructor=r}zu(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Q(r,t,e,n){return new(e||(e=Promise))(function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,t||[])).next())})}function J(r,t){var e,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(f){l=[6,f],n=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var Yh=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,o=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return Qh(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function Qh(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function U(){return Uu}var Uu=null,co=new Map,Ba=new Map;function Gu(r,t){var e=qu(r,t);return co.get(e)}function Jh(r){return Ba.get(r)}function Os(r){for(var t=co.entries(),e=[];;){var n=t.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&e.push(s)}return e}function Hu(r){var t=r.kernelName,e=r.backendName,n=qu(t,e);if(co.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");co.set(n,r)}function Zh(r){var t=r.kernelName;Ba.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),Ba.set(t,r)}function qu(r,t){return t+"_"+r}function Bs(r){for(var t=r.length,e=0,n=0;t>0;)n=Math.random()*t|0,e=r[--t],r[t]=r[n],r[n]=e}function lo(r,t,e){return Math.max(r,Math.min(t,e))}function fi(r){return r%2==0?r:r+1}function ju(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function R(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function be(r,t,e){e===void 0&&(e=""),R(Pe(r,t),function(){return e+" Shapes "+r+" and "+t+" must match"})}function Nn(r){R(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function $t(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||Ye(r)&&!e)for(var n=0;n<r.length;++n)$t(r[n],t,e);else t.push(r);return t}function Z(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function Pe(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Ae(r){return r%1==0}function Ku(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function fo(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function Rn(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function La(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise(function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=t(a);e!=null&&a>=e?o():setTimeout(i,s)}};i()})}function Xu(r,t){for(var e=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var a=r.slice();return a[n]=t/e,a}function Be(r,t){var e=t.length;return R((r=r==null?t.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-e&&n<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),R(r.every(function(n){return Ae(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?e+n:n})}function an(r,t){for(var e=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||o?null:Be(t,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function rr(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function Cr(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function $u(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function Yu(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function Qu(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function Ye(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function hi(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function Ju(r){if(r==null)return 0;var t=0;return r.forEach(function(e){return t+=e.length}),t}function un(r){return typeof r=="string"||r instanceof String}function Zu(r){return typeof r=="boolean"}function ec(r){return typeof r=="number"}function sr(r){return Array.isArray(r)?sr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":ec(r)?"float32":un(r)?"string":Zu(r)?"bool":"float32"}function ho(r){return!!(r&&r.constructor&&r.call&&r.apply)}function po(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function _t(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function di(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=$t(r)),e&&$u(r,t),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+t)}function Wa(r,t){if(r.length===0)return t[0];var e=r.reduce(function(n,o){return n*o});if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),f=l.reduce(function(h,d){return h*d});for(c=0;c<u;c++)s[c]=n(o+c*f,l,i)}return s}(0,r,t)}function pi(r,t){for(var e=ur(r,t),n=0;n<e.length;n++)e[n]=1;return e}function ur(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function bt(){return U().platform.now()}function vi(r){r.forEach(function(t){R(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function tc(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",U().platform.encode(r,t)}function _r(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",U().platform.decode(r,t)}function Va(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=e[o]*r[o];return n}function nc(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),o=0;o<n.length-1;++o)n[o]=Math.floor(r/e[o]),r-=n[o]*e[o];return n[n.length-1]=r,n}Object.freeze({shuffle:Bs,clamp:lo,nearestLargerEven:fi,sum:ju,randUniform:function(r,t){var e=Math.random();return t*e+(1-e)*r},distSquared:function(r,t){for(var e=0,n=0;n<r.length;n++){var o=Number(r[n])-Number(t[n]);e+=o*o}return e},assert:R,assertShapesMatch:be,assertNonNull:Nn,flatten:$t,sizeFromShape:Z,isScalarShape:function(r){return r.length===0},arraysEqual:Pe,isInt:Ae,tanh:Ku,sizeToSquarishShape:fo,createShuffledIndices:function(r){for(var t=new Uint32Array(r),e=0;e<r;++e)t[e]=e;return Bs(t),t},rightPad:Rn,repeatedTry:La,inferFromImplicitShape:Xu,parseAxisParam:Be,squeezeShape:an,getTypedArrayFromDType:rr,getArrayFromDType:Cr,checkConversionForErrors:$u,isValidDtype:Yu,hasEncodingLoss:Qu,isTypedArray:Ye,bytesPerElement:hi,bytesFromStringArray:Ju,isString:un,isBoolean:Zu,isNumber:ec,inferDtype:sr,isFunction:ho,nearestDivisor:po,computeStrides:_t,toTypedArray:di,toNestedArray:Wa,makeOnesTypedArray:pi,makeZerosTypedArray:ur,now:bt,assertNonNegativeIntegerDimensions:vi,fetch:function(r,t){return U().platform.fetch(r,t)},encodeString:tc,decodeString:_r,locToIndex:Va,indexToLoc:nc});var ed=function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new td)}return r.prototype.profileKernel=function(t,e,n){var o,a=this,i=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var d=c[h];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},r}(),td=function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,o,a,i){var s=typeof o=="number"?Rn(o+"ms",9):o.error,u=Rn(t,25),c=e.rank,l=e.size,f=Rn(e.shape.toString(),14),h="";for(var d in a){var p=a[d].shape||e.shape,m=p.length;h+=d+": "+m+"D "+(m>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Ls=20,fr=3,oa=7;function nd(r,t,e,n){var o=_t(t),a=function(c,l,f,h){var d=Z(l),p=h[h.length-1],m=new Array(p).fill(0),v=l.length,g=f==="complex64"?dr(c):c;if(v>1)for(var x=0;x<d/p;x++)for(var b=x*p,y=0;y<p;y++)m[y]=Math.max(m[y],hr(g[b+y],0,f).length);return m}(r,t,e,o),i=t.length,s=function c(l,f,h,d,p,m){m===void 0&&(m=!0);var v=h==="complex64"?2:1,g=f[0],x=f.length;if(x===0)return h==="complex64"?[hr(dr(l)[0],0,h)]:h==="bool"?[rc(l[0])]:[l[0].toString()];if(x===1){if(g>Ls){var b=fr*v,y=Array.from(l.slice(0,b)),w=Array.from(l.slice((g-fr)*v,g*v));return h==="complex64"&&(y=dr(y),w=dr(w)),["["+y.map(function(B,W){return hr(B,p[W],h)}).join(", ")+", ..., "+w.map(function(B,W){return hr(B,p[g-fr+W],h)}).join(", ")+"]"]}return["["+(h==="complex64"?dr(l):Array.from(l)).map(function(B,W){return hr(B,p[W],h)}).join(", ")+"]"]}var C=f.slice(1),I=d.slice(1),S=d[0]*v,_=[];if(g>Ls){for(var E=0;E<fr;E++){var D=(A=E*S)+S;_.push.apply(_,c(l.slice(A,D),C,h,I,p,!1))}for(_.push("..."),E=g-fr;E<g;E++)D=(A=E*S)+S,_.push.apply(_,c(l.slice(A,D),C,h,I,p,E===g-1))}else for(E=0;E<g;E++){var A;D=(A=E*S)+S,_.push.apply(_,c(l.slice(A,D),C,h,I,p,E===g-1))}var P=x===2?",":"";for(_[0]="["+_[0]+P,E=1;E<_.length-1;E++)_[E]=" "+_[E]+P;var M=`,
`;for(E=2;E<x;E++)M+=`
`;return _[_.length-1]=" "+_[_.length-1]+"]"+(m?"":M),_}(r,t,e,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function hr(r,t,e){return Rn(Array.isArray(r)?parseFloat(r[0].toFixed(oa))+" + "+parseFloat(r[1].toFixed(oa))+"j":un(r)?"'"+r+"'":e==="bool"?rc(r):parseFloat(r.toFixed(oa)).toString(),t)}function rc(r){return r===0?"false":"true"}function dr(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var Er=function(){function r(t,e,n){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=Z(t),n!=null){var a=n.length;R(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||Cr(e,this.size),this.strides=_t(t)}return r.prototype.set=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),R(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var a=this.locToIndex(n);this.values[a]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,o=0,a=t;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Mt().makeTensor(this.values,this.shape,this.dtype)},r}(),Mt=null,z=null,oc=null,Ie=function(){function r(t,e,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Z(t),this.strides=_t(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),R(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,o){return this.throwIfDisposed(),this.reshape([t,e,n,o])},r.prototype.as5D=function(t,e,n,o,a){return this.throwIfDisposed(),this.reshape([t,e,n,o,a])},r.prototype.asType=function(t){return this.throwIfDisposed(),z.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return Q(this,void 0,void 0,function(){var t;return J(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,z.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return z.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return Q(this,void 0,void 0,function(){var t;return J(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,Wa(this.shape,t)]}})})},r.prototype.arraySync=function(){return Wa(this.shape,this.dataSync())},r.prototype.data=function(){return Q(this,void 0,void 0,function(){var t,e;return J(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=Mt().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map(function(o){return _r(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=Mt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return _r(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return Q(this,void 0,void 0,function(){var t;return J(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,Mt().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Mt().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),z.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),z.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),z.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),z.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),z.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),z.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),z.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),nd(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),z.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),z.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),z.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),z.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),z.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),z.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),z.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),z.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),z.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),z.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),z.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),z.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,o,a){return n===void 0&&(n=.001),oc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,a,o,n)},r.prototype.batchNorm=function(t,e,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),z.batchNorm(this,t,e,n,o,a)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),z.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),z.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),z.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),z.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),z.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),z.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),z.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),z.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),z.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),z.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),z.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),z.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),z.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),z.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),z.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),z.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),z.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),z.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),z.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),z.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),z.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),z.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),z.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),z.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),z.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),z.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),z.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),z.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),z.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),z.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),z.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),z.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),z.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),z.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),z.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),z.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),z.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),z.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),z.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),z.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),z.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),z.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),z.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),z.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),z.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),z.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),z.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),z.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),z.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),z.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),z.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),z.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),z.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),z.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),z.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),z.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),z.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),z.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),z.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),z.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),z.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),z.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),z.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),z.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),z.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),z.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),z.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),z.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),z.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),z.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),z.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),z.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),z.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),z.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),z.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),z.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),z.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),z.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),z.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),z.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),z.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),z.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),z.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),z.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),z.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),z.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),z.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),z.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),z.conv1d(this,t,e,n,o,a,i)},r.prototype.conv2d=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),z.conv2d(this,t,e,n,o,a,i)},r.prototype.conv2dTranspose=function(t,e,n,o,a){return this.throwIfDisposed(),z.conv2dTranspose(this,t,e,n,o,a)},r.prototype.depthwiseConv2D=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),z.depthwiseConv2d(this,t,e,n,o,a,i)},r.prototype.separableConv2d=function(t,e,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),z.separableConv2d(this,t,e,n,o,a,i)},r.prototype.avgPool=function(t,e,n,o){return this.throwIfDisposed(),z.avgPool(this,t,e,n,o)},r.prototype.maxPool=function(t,e,n,o){return this.throwIfDisposed(),z.maxPool(this,t,e,n,o)},r.prototype.localResponseNormalization=function(t,e,n,o){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5),z.localResponseNormalization(this,t,e,n,o)},r.prototype.pool=function(t,e,n,o,a){return this.throwIfDisposed(),z.pool(this,t,e,n,o,a)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),Mt().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),z.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),z.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),z.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),z.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),z.stridedSlice(this,t,e,n,o,a,i,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),z.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),z.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),z.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),z.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),z.spectral.irfft(this)},r}();Object.defineProperty(Ie,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var Ws,za,Ua,Ga,Ha,or=function(r){function t(e,n,o,a){var i=r.call(this,e.shape,e.dtype,e.dataId,a)||this;return i.trainable=n,i.name=o,i}return kt(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Pe(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");Mt().disposeTensor(this),this.dataId=e.dataId,Mt().incRef(this,null)},t.prototype.dispose=function(){Mt().disposeVariable(this),this.isDisposedInternal=!0},t}(Ie);Object.defineProperty(or,Symbol.hasInstance,{value:function(r){return r instanceof Ie&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(Ws||(Ws={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(za||(za={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(Ua||(Ua={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(Ga||(Ga={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(Ha||(Ha={}));var rd={float32:Ga,int32:za,bool:Ua,complex64:Ha};function He(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return rd[r][t]}function aa(r){return He(r,"int32")}function Ee(r,t){if(r.dtype===t.dtype)return[r,t];var e=He(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function ac(r,t){R(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function mi(r){var t=[];return function e(n,o,a){if(n!=null){if(n instanceof Ie)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),e(c,o,a))}}}}(r,t,new Set),t}var ia;Object.freeze({makeTypesMatch:Ee,assertTypesMatch:ac,isTensorInList:function(r,t){return t.some(function(e){return e.id===r.id})},getTensorsInContainer:mi});var Vs=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),od=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Vs}return r.prototype.ready=function(){return Q(this,void 0,void 0,function(){var t,e,n;return J(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return Q(this,void 0,void 0,function(){var e,n,o;return J(this,function(a){switch(a.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new ed(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;Os(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var e=this;Os(t).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])})},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(a<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),o=n.backend,a=this.readSync(e);o.disposeData(e),n.backend=t,t.move(e,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,o=this,a=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=t}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(n)},function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(t,e,n){t();try{var o=n();return e(),o}catch(a){throw e(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(t,e,n,o,a){return this.runKernelFunc(null,e,null,t,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var o=this.backend.numDataIds(),a=0;n.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var h,d=function(x){f&&(l=x.map(function(b){return c.keep(c.clone(b))}))},p=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,g=Gu(o,this.backendName);return h=g!=null?function(){var x=c.backend.numDataIds();v=g.kernelFunc({inputs:e,attrs:a,backend:c.backend});var b=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b);var y=b.map(function(C){var I=C.dataId,S=C.shape,_=C.dtype;return c.makeTensorFromDataId(I,S,_)}),w=y.filter(function(C,I){return s[I]});return d((i||[]).slice().concat(w)),y}:function(){var x=c.backend.numDataIds();v=c.tidy(function(){return t(c.backend,d)});var b=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return h()}):h()}),f&&this.addTapeNode(o,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(x){return e[x].shape}),outputShapes:u.map(function(x){return x.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(t,e,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=t;n==="string"&&un(t[0])&&(a=t.map(function(l){return tc(l)}));var i=o.write(a,e,n),s=new Ie(e,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=Ju(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,o){var a=new Ie(e,n=n||"float32",t,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(t,e,n,o){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var a=new or(t,e,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*hi(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof or||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return Q(this,void 0,void 0,function(){var e,n;return J(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},u=Jh(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var h=n[f],d=ur(h.size,h.dtype);return i.makeTensor(d,h.shape,h.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=mi(t),o=new Set(n.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(t,e,n,o){var a=this;if(o===void 0&&(o=!1),R(e.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",t)});R(i instanceof Ie,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},h={},d=0;d<c.length;d++)f[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(C=u[d]).inputs;for(var m in p){for(var v=p[m],g=!1,x=0;x<c.length;x++)if(f[v.id]){C.outputs.forEach(function(E){return f[E.id]=!0}),g=!0,h[C.id]=!0;break}if(g)break}}var b={};b[l.id]=!0;var y={};for(d=u.length-1;d>=0;d--)for(p=(C=u[d]).inputs,x=0;x<C.outputs.length;x++)if(b[C.outputs[x].id]){for(var m in p)b[p[m].id]=!0,y[C.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var C;if(h[(C=u[d]).id]&&y[C.id]){var I={};for(var m in C.inputs){var S=C.inputs[m];f[S.id]&&(I[m]=S)}var _=Object.assign({},C);_.inputs=I,_.outputs=C.outputs,w.push(_)}}return w}(this.state.activeTape,e,i);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n==null?(u=i.shape,c=pi(Z(u),"float32"),F.makeTensor(c,u,"float32")):n,function(h,d,p){for(var m=function(g){var x=d[g],b=[];if(x.outputs.forEach(function(I){var S=h[I.id];S!=null?b.push(S):b.push(null)}),x.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+x.kernelName+".");var y=x.gradient(b),w=function(I){if(!(I in y))throw new Error("Cannot backprop through input "+I+". Available gradients found: "+Object.keys(y)+".");var S=p(function(){return y[I]()});if(S.dtype!=="float32")throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input "+I+" must have 'float32' dtype, but has '"+S.dtype+"'");var _=x.inputs[I];if(!Pe(S.shape,_.shape))throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input '"+I+"' has shape '"+S.shape+"', which does not match the shape of the input '"+_.shape+"'");if(h[_.id]==null)h[_.id]=S;else{var E=h[_.id];h[_.id]=E.add(S),E.dispose()}};for(var C in x.inputs)w(C)},v=d.length-1;v>=0;v--)m(v)}(l,s,function(h){return a.tidy(h)});var f=e.map(function(h){return l[h.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(h){for(var d=0,p=h.saved;d<p.length;d++)p[d].dispose()}),a.state.activeTape=null),{value:i,grads:f}})},r.prototype.customGrad=function(t){var e=this;return R(ho(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];R(o.every(function(s){return s instanceof Ie}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return R((n=t.apply(void 0,o.concat([u]))).value instanceof Ie,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),R(ho(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];R(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),R(l.every(function(h){return h instanceof Ie}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(h,d){f[d]=function(){return h}}),f})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return Q(this,void 0,void 0,function(){var e,n;return J(this,function(o){switch(o.label){case 0:return e=bt(),[4,this.backend.time(t)];case 1:return(n=o.sent()).wallMs=bt()-e,[2,n]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Vs,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),F=function(){var r=function(){if(ia==null){var e=void 0;if(typeof window!="undefined")e=window;else if(typeof global!="undefined")e=global;else if(typeof process!="undefined")e=process;else{if(typeof self=="undefined")throw new Error("Could not find a global object");e=self}ia=e}return ia}();if(r._tfengine==null){var t=new Yh(r);r._tfengine=new od(t)}return function(e){Uu=e}(r._tfengine.ENV),Mt=function(){return r._tfengine},r._tfengine}();function ic(){return typeof window!="undefined"&&window.document!=null||typeof WorkerGlobalScope!="undefined"}var qt=U();qt.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),qt.registerFlag("IS_BROWSER",function(){return ic()}),qt.registerFlag("IS_NODE",function(){return typeof process!="undefined"&&process.versions!==void 0&&process.versions.node!==void 0}),qt.registerFlag("IS_CHROME",function(){return typeof navigator!="undefined"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),qt.registerFlag("PROD",function(){return!1}),qt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return qt.getBool("DEBUG")}),qt.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),qt.registerFlag("IS_TEST",function(){return!1});var kr,ht,ft,wn={},sa={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function sc(r,t){wn[r]=t}function Vt(r){r in wn||(wn[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas!="undefined"&&o===2)return new OffscreenCanvas(300,150);if(typeof document!="undefined")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete wn[e]},!1),e===1?n.getContext("webgl",sa)||n.getContext("experimental-webgl",sa):n.getContext("webgl2",sa)}(r));var t=wn[r];return t.isContextLost()?(delete wn[r],Vt(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),wn[r])}function No(r,t){return[t,r]}function xr(r){var t=Z(r);return fo(Math.ceil(t/4))}function Mr(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function gi(r,t){var e,n,o,a,i,s,u,c,l,f=r;return U().getNumber("WEBGL_VERSION")===2?(e=f.R32F,n=f.R16F,o=f.RGBA16F,a=f.RGBA32F,i=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=r.RGBA,n=r.RGBA,o=r.RGBA,a=f.RGBA,i=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function Y(r,t,e){var n=e();return t&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+cc(o,a))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(kr||(kr={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(ht||(ht={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(ft||(ft={}));var ad=596e-10,id=65504;function uc(r){return!!(U().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||ad<Math.abs(r)&&Math.abs(r)<id)}function cc(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function mr(r,t,e){return Yt(r,t,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function lc(r,t,e){var n=Yt(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(Y(r,t,function(){return r.shaderSource(n,e)}),Y(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function fc(r,t,e){var n=Yt(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(Y(r,t,function(){return r.shaderSource(n,e)}),Y(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,a){var i=sd.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,g){return Rn((g+1).toString(),c)+v}),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var d=l.slice(0,s-1),p=l.slice(s-1,s),m=l.slice(s);console.log(d.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+Rn(p[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))}(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var to,no,sd=/ERROR: [0-9]+:([0-9]+):/g;function hc(r,t){return Yt(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function dc(r,t,e){if(Y(r,t,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function ro(r,t,e){if(Y(r,t,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function pc(r,t,e){var n=Yt(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Y(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Y(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function vc(r,t,e){var n=Yt(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Y(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),Y(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function mc(r,t){return Yt(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function gc(r,t){var e=U().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function yc(r,t){return Yt(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function qa(r,t,e,n,o,a,i,s){var u=r.getAttribLocation(e,n);return u!==-1&&(Y(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),Y(r,t,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),Y(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function xc(r,t,e,n){Ec(r,n),Y(r,t,function(){return r.activeTexture(r.TEXTURE0+n)}),Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function bc(r,t,e,n){return Yt(r,t,function(){return r.getUniformLocation(e,n)},'uniform "'+n+'" not present in program.')}function wc(r,t,e){return r.getUniformLocation(t,e)}function Cc(r,t,e,n,o,a){Y(r,t,function(){return xc(r,t,n,a)}),Y(r,t,function(){return r.uniform1i(o,a)})}function oo(r,t,e,n){Y(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),Y(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function ja(r,t,e){Y(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),Y(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function gr(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+_c(r,t))}function _c(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function Yt(r,t,e,n){var o=Y(r,t,function(){return e()});if(o==null)throw new Error(n);return o}function Ec(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function Rr(r,t){return t===void 0&&(t=2),Z(r.slice(0,r.length-t))}function Ir(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function ao(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[Rr(r)].concat(Ir(r))),t}function kc(r,t){var e;t===void 0&&(t=!1);var n=U().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?fi(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=an(r);r=o.newShape}var a=Z(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var i=Rr(r),s=2,u=2;return r.length&&(s=(e=Ir(r))[0],u=e[1]),fo(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return fo(a)}function qr(r){return r%2==0}function yr(r,t){if(Pe(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||qr(e)&&qr(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&qr(r[0])&&qr(t[0])}function Rc(r){if(to==null){var t=Vt(r);to=t.getParameter(t.MAX_TEXTURE_SIZE)}return to}function Ic(r){if(no==null){var t=Vt(r);no=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,no)}function Sc(r){if(r===0)return 0;var t=Vt(r);return dt(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:dt(t,"EXT_disjoint_timer_query")?1:0}function dt(r,t){return r.getExtension(t)!=null}function Ka(r){try{if(Vt(r)!=null)return!0}catch{return!1}return!1}function Ac(r){if(r===0)return!1;var t=Vt(r);if(r===1){if(!dt(t,"OES_texture_float"))return!1}else if(!dt(t,"EXT_color_buffer_float"))return!1;return Xa(t)}function Dc(r){if(r===0)return!1;var t=Vt(r);if(r!==1){if(dt(t,"EXT_color_buffer_float"))return Xa(t);if(dt(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(n,o){var a=gi(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(t,e)}return!1}return!!dt(t,"OES_texture_float")&&!!dt(t,"WEBGL_color_buffer_float")&&Xa(t)}function Xa(r){var t=gi(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),o}function Tc(r){return r===2&&Vt(r).fenceSync!=null}var ud=Object.freeze({callAndCheck:Y,canBeRepresented:uc,getWebGLErrorMessage:cc,getExtensionOrThrow:mr,createVertexShader:lc,createFragmentShader:fc,createProgram:hc,linkProgram:dc,validateProgram:ro,createStaticVertexBuffer:pc,createStaticIndexBuffer:vc,getNumChannels:function(){return U().getNumber("WEBGL_VERSION")===2?1:4},createTexture:mc,validateTextureSize:gc,createFramebuffer:yc,bindVertexBufferToProgramAttribute:qa,bindTextureUnit:xc,unbindTextureUnit:function(r,t,e){Ec(r,e),Y(r,t,function(){return r.activeTexture(r.TEXTURE0+e)}),Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})},getProgramUniformLocationOrThrow:bc,getProgramUniformLocation:wc,bindTextureToProgramUniformSampler:Cc,bindCanvasToFramebuffer:function(r,t){Y(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,null)}),Y(r,t,function(){return r.viewport(0,0,r.canvas.width,r.canvas.height)}),Y(r,t,function(){return r.scissor(0,0,r.canvas.width,r.canvas.height)})},bindColorTextureToFramebuffer:oo,unbindColorTextureFromFramebuffer:ja,validateFramebuffer:gr,getFramebufferErrorMessage:_c,getBatchDim:Rr,getRowsCols:Ir,getShapeAs3D:ao,getTextureShapeFromLogicalShape:kc,isReshapeFree:yr,getWebGLMaxTextureSize:Rc,resetMaxTextureSize:function(){to=null},resetMaxTexturesInShader:function(){no=null},getMaxTexturesInShader:Ic,getWebGLDisjointQueryTimerVersion:Sc,hasExtension:dt,isWebGLVersionEnabled:Ka,isCapableOfRenderingToFloatTexture:Ac,isDownloadFloatTextureEnabled:Dc,isWebGLFenceEnabled:Tc}),ae=U();function Fc(r){U().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function $(r,t){return F.tidy(r,t)}function ct(r){mi(r).forEach(function(t){return t.dispose()})}function cd(r){return F.keep(r)}function vo(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];U().getBool("IS_TEST")||console.warn.apply(console,r)}function Lt(r,t){var e=r;if(Ye(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||Ye(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&U().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!Ye(a))return void R(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});R(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),R(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,n,[]),n}function zs(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function k(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof Ie)return zs(n,r.dtype,t,e),r;var o=sr(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),zs(n,o,t,e),r==null||!Ye(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=Lt(r,o);Ye(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?di(r,o,U().getBool("DEBUG")):$t(r,[],!0);return F.makeTensor(s,i,o)}function mo(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return k(o,t+"["+a+"]",e)},n)}function yi(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function Nc(r,t,e){for(var n=r.length+t.length,o=[],a=0,i=0,s=0;s<n;s++)e.indexOf(s)===-1?o.push(r[a++]):o.push(t[i++]);return o}function Xe(r,t){for(var e=[],n=r.length,o=0;o<n;o++)t.indexOf(o)===-1&&e.push(r[o]);return[e,t.map(function(a){return r[a]})]}function rt(r,t){return Nc(r,t.map(function(e){return 1}),t)}function at(r,t,e){R(yi(t,e),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function Rt(r,t){if(yi(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach(function(o){return e.push(o)}),e}function Mo(r){return r.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function It(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function Mc(r,t){var e=r[0].length;r.forEach(function(o,a){R(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+e+")"})}),R(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var n=r[0];r.forEach(function(o,a){for(var i=0;i<e;i++)R(i===t||o[i]===n[i],function(){return"Error in concat"+e+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."})})}function Sn(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function T(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];F.startScope(e);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),F.endScope(s),s}catch(u){throw F.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}ae.registerFlag("HAS_WEBGL",function(){return ae.getNumber("WEBGL_VERSION")>0}),ae.registerFlag("WEBGL_VERSION",function(){return Ka(2)?2:Ka(1)?1:0}),ae.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return ae.get("WEBGL_VERSION")===2}),ae.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),ae.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),ae.registerFlag("WEBGL_PACK",function(){return ae.getBool("HAS_WEBGL")}),ae.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_CLIP",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),ae.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_REDUCE",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_LAZILY_UNPACK",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_CONV_IM2COL",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Rc(ae.getNumber("WEBGL_VERSION"))}),ae.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Ic(ae.getNumber("WEBGL_VERSION"))}),ae.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=ae.getNumber("WEBGL_VERSION");return r===0?0:Sc(r)}),ae.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return ae.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),ae.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Ac(ae.getNumber("WEBGL_VERSION"))}),ae.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!ae.getBool("WEBGL_FORCE_F16_TEXTURES")&&ae.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),ae.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Dc(ae.getNumber("WEBGL_VERSION"))}),ae.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return Tc(ae.getNumber("WEBGL_VERSION"))}),ae.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return ae.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),oc=Fc;var Ke=T({complex_:function(r,t){var e=k(r,"real","complex"),n=k(t,"imag","complex");return be(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),F.runKernelFunc(function(o){return o.complex(e,n)},{$real:e,$imag:n})}}),yt=T({real_:function(r){var t=k(r,"input","real");return F.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),Pt=T({imag_:function(r){var t=k(r,"input","imag");return F.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function $e(r,t,e){return mn(r,t,Lt(r,e),e)}function mn(r,t,e,n){if(n==null&&(n=sr(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Ye(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){vi(t);var o=Z(t),a=Z(e);R(o===a,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==Z(t.slice(i));R(e[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return Ye(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?di(r,n,U().getBool("DEBUG")):$t(r,[],!0),F.makeTensor(r,t,n)}function X(r,t){if((Ye(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Ye(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return mn(r,[],[],t)}function Me(r,t){Nn(r);var e=Lt(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return mn(r,null,e,t)}function ln(r,t,e){if(Nn(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=Lt(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return mn(r,t,n,e)}function xi(r,t,e){if(Nn(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=Lt(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return mn(r,t,n,e)}function it(r,t,e){if(Nn(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=Lt(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return mn(r,t,n,e)}function ld(r,t,e){if(Nn(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=Lt(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return mn(r,t,n,e)}function fd(r,t,e){if(Nn(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=Lt(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return mn(r,t=t||n,n,e)}function hd(r,t,e,n){return t===void 0&&(t=!0),F.makeVariable(r,t,e,n)}function cr(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=cr(r,"float32"),n=_e(r,"float32");return Ke(e,n)}var o=pi(Z(r),t);return F.makeTensor(o,r,t)}function _e(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=_e(r,"float32"),n=_e(r,"float32");return Ke(e,n)}var o=ur(Z(r),t);return F.makeTensor(o,r,t)}function Bt(r,t,e){return F.runKernelFunc(function(n){return n.fill(r,t,e)},{})}function dd(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return F.runKernelFunc(function(n){return n.linspace(r,t,e)},{})}function go(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return _e([0],n);var o=ur(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return Me(o,n)}var Pc=T({onesLike_:function(r){var t=k(r,"x","onesLike");if(t.dtype==="complex64"){var e=Pc(yt(t)),n=ve(Pt(t));return Ke(e,n)}return F.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,a){return{$x:function(){return ve(o)}}})}}),ve=T({zerosLike_:function(r){var t=k(r,"x","zerosLike");return F.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,n){return{$x:function(){return ve(e)}}})}}),Ve=T({concat_:function(r,t){t===void 0&&(t=0),R(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=mo(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=Be(t,e[0].shape)[0];var n=Sn(e.map(function(s){return s.shape}),t);if(Z(n)===0)return $e([],n);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});Mc(o,t);var a=e,i={axis:t};return F.runKernelFunc(function(s){return s.concat(e,t)},a,function(s){var u=o.map(function(c){return c[t]});return bi(s,u,t).map(function(c){return function(){return c}})},"Concat",i)}}),pd=T({concat1d_:function(r){return Ve(r,0)}}),vd=T({concat2d_:function(r,t){return Ve(r,t)}}),md=T({concat3d_:function(r,t){return Ve(r,t)}}),gd=T({concat4d_:function(r,t){return Ve(r,t)}}),bi=T({split_:function(r,t,e){e===void 0&&(e=0);var n,o=k(r,"x","split");return e=Be(e,o.shape)[0],typeof t=="number"?(R(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(t).fill(o.shape[e]/t)):(R(o.shape[e]===t.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t),F.runKernelFunc(function(a){return a.split(o,n,e)},{$x:o},function(a){return{$x:function(){return Ve(a,e)}}})}});function Mn(r,t){return r(t={exports:{}},t.exports),t.exports}var yd=Mn(function(r){(function(t,e,n){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var d=.02519603282416938*(u+=f.charCodeAt(h));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.alea=i})(0,r,!1)}),xd=Mn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor128=i})(0,r,!1)}),bd=Mn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorwow=i})(0,r,!1)}),wd=Mn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorshift7=i})(0,r,!1)}),Cd=Mn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,d=u.i;return u.w=f=f+1640531527|0,l=h[d+34&127],c=h[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[d]=l^c,u.i=d,l+(f^f>>>16)|0},function(c,l){var f,h,d,p,m,v=[],g=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,g=Math.max(g,l.length)),d=0,p=-32;p<g;++p)l&&(h^=l.charCodeAt((p+32)%l.length)),p===0&&(m=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,p>=0&&(m=m+1640531527|0,d=(f=v[127&p]^=h+m)==0?d+1:0);for(d>=128&&(v[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)h=v[d+34&127],f=v[d=d+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,v[d]=h^f;c.w=m,c.X=v,c.i=d}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor4096=i})(0,r,!1)}),_d=Mn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,d=u.d,p=u.a;return f=f<<25^f>>>7^h,h=h-d|0,d=d<<24^d>>>8^p,p=p-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-d|0,u.d=d<<16^h>>>16^p,u.a=p-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.tychei=i})(0,r,!1)}),Cn=Mn(function(r){(function(t,e){var n,o=this,a=256,i=6,s="random",u=e.pow(a,i),c=e.pow(2,52),l=2*c,f=a-1;function h(g,x,b){var y=[],w=m(function S(_,E){var D,A=[],P=typeof _;if(E&&P=="object")for(D in _)try{A.push(S(_[D],E-1))}catch{}return A.length?A:P=="string"?_:_+"\0"}((x=x==1?{entropy:!0}:x||{}).entropy?[g,v(t)]:g==null?function(){try{var S;return n&&(S=n.randomBytes)?S=S(a):(S=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(S)),v(S)}catch{var _=o.navigator,E=_&&_.plugins;return[+new Date,o,E,o.screen,v(t)]}}():g,3),y),C=new d(y),I=function(){for(var S=C.g(i),_=u,E=0;S<c;)S=(S+E)*a,_*=a,E=C.g(1);for(;S>=l;)S/=2,_/=2,E>>>=1;return(S+E)/_};return I.int32=function(){return 0|C.g(4)},I.quick=function(){return C.g(4)/4294967296},I.double=I,m(v(C.S),t),(x.pass||b||function(S,_,E,D){return D&&(D.S&&p(D,C),S.state=function(){return p(C,{})}),E?(e[s]=S,_):S})(I,w,"global"in x?x.global:this==e,x.state)}function d(g){var x,b=g.length,y=this,w=0,C=y.i=y.j=0,I=y.S=[];for(b||(g=[b++]);w<a;)I[w]=w++;for(w=0;w<a;w++)I[w]=I[C=f&C+g[w%b]+(x=I[w])],I[C]=x;(y.g=function(S){for(var _,E=0,D=y.i,A=y.j,P=y.S;S--;)_=P[D=f&D+1],E=E*a+P[f&(P[D]=P[A=f&A+_])+(P[A]=_)];return y.i=D,y.j=A,E})(a)}function p(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function m(g,x){for(var b,y=g+"",w=0;w<y.length;)x[f&w]=f&(b^=19*x[f&w])+y.charCodeAt(w++);return v(x)}function v(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=h,m(e.random(),t),r.exports){r.exports=h;try{n=require("crypto")}catch{}}})([],Math)});Cn.alea=yd,Cn.xor128=xd,Cn.xorwow=bd,Cn.xorshift7=wd,Cn.xor4096=Cd,Cn.tychei=_d;var Po=Cn.alea,wi=function(){function r(t,e,n,o,a){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=Po(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),Ed=function(){function r(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;var a=o||Math.random();this.randu=Po(a.toString()),this.randn=new wi(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=1-.331*(t=o*o)*t,n=.5*t+this.d*(1-i+Math.log(i)),(a=this.randu())<e||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),kd=function(){function r(t,e,n,o){var a=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=Po(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function se(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",vi(r),new Er(r,t,e)}function Rd(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var Oc=T({batchToSpaceND_:function(r,t,e){var n=k(r,"x","batchToSpaceND"),o=t.reduce(function(a,i){return a*i});return R(n.rank>=1+t.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length}),R(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),R(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),F.runKernelFunc(function(a){return a.batchToSpaceND(n,t,e)},{$x:n},function(a){return{$x:function(){return a.spaceToBatchND(t,e)}}})}}),Id=T({broadcastTo_:function(r,t){var e=k(r,"broadcastTo","x"),n=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var a=Array.from(t),i=t.length-1;i>=0;i--)if(e.shape[i]===t[i])a[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():F.runKernelFunc(function(u){return u.tile(e,a)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Sd=T({cast_:function(r,t){var e=k(r,"x","cast");if(!Yu(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return F.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),Ad=T({clone_:function(r){var t=k(r,"x","clone",null);return F.runKernelFunc(function(){return F.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),Dd=T({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var o=k(r,"x","cumsum"),a=Rt([t|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=It(1,o.rank)[0],u=F.runKernelFunc(function(c){return c.cumsum(i,s,e,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}});return a!=null&&(u=u.transpose(a)),u}}),Td=T({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=k(r,"x","depthToSpace"),o=e==="NHWC"?n.shape[1]:n.shape[2],a=e==="NHWC"?n.shape[2]:n.shape[3],i=e==="NHWC"?n.shape[3]:n.shape[1];return R(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+n.shape}),R(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+` for depthToSpace with input shape
          `+n.shape}),R(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+n.shape}),F.runKernelFunc(function(s){return s.depthToSpace(n,t,e)},{$x:n})}}),gt=T({expandDims_:function(r,t){t===void 0&&(t=0);var e=k(r,"x","expandDims",null);R(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var n=e.shape.slice();return t<0&&(R(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),n.splice(t,0,1),Ct(e,n)}}),Bc=T({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var o=se([r,t],n),a=r<=t?r:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return Yn(gt(s,0),[e[0],1,1]);if(e.length===2)return Yn(gt(gt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Yn(gt(gt(gt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Fd=T({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var o=k(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?o.as2D(1,-1):o,u=F.runKernelFunc(function(c){return c.multinomial(s,n,t,e)},{logits2D:s});return i===1?u.as1D():u}}),$a=T({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=k(r,"indices","oneHot","int32"),a=o.shape.concat([t]);return o=o.flatten(),F.runKernelFunc(function(i){return i.oneHot(o,t,e,n)},{$indices:o},function(i){return{$indices:function(){return _e(o.shape,"float32")}}}).reshape(a)}}),Pn=T({pad_:function(r,t,e){e===void 0&&(e=0);var n=k(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return F.runKernelFunc(function(a){return a.pad(n,t,e)},{x:n},function(a){var i=t.map(function(s){return s[0]});return{x:function(){return a.slice(i,n.shape)}}},"PadV2",o)}}),Nd=T({pad1d_:function(r,t,e){return e===void 0&&(e=0),R(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Pn(r,[t],e)}}),Md=T({pad2d_:function(r,t,e){return e===void 0&&(e=0),R(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Pn(r,t,e)}}),Pd=T({pad3d_:function(r,t,e){return e===void 0&&(e=0),R(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Pn(r,t,e)}}),Od=T({pad4d_:function(r,t,e){return e===void 0&&(e=0),R(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Pn(r,t,e)}}),Bd=T({rand_:function(r,t,e){var n=Z(r),o=null;if(e==null||e==="float32")o=new Float32Array(n);else if(e==="int32")o=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=t();return F.makeTensor(o,r,e)}}),Ld=T({randomNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new wi(t,e,n,!1,o),i=se(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Wd=T({randomGamma_:function(r,t,e,n,o){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new Ed(t,e,n,o),i=se(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Lc=T({randomUniform_:function(r,t,e,n,o){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var a=se(r,n),i=new kd(t,e,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Ct=T({reshape_:function(r,t){var e=k(r,"x","reshape",null);t=Xu(t,e.size),R(e.size===Z(t),function(){return"new shape and old shape must have the same number of elements."});var n={shape:t};return F.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",n)}}),Wc=T({spaceToBatchND_:function(r,t,e){var n=k(r,"x","spaceToBatchND");return R(n.rank>=1+t.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length}),R(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),R(n.shape.reduce(function(o,a,i){return i>0&&i<=t.length?o&&(a+e[i-1][0]+e[i-1][1])%t[i-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),F.runKernelFunc(function(o){return o.spaceToBatchND(n,t,e)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),Vc=T({squeeze_:function(r,t){var e=k(r,"x","squeeze");return Ct(e,an(e.shape,t).newShape)}}),mt=T({stack_:function(r,t){t===void 0&&(t=0);var e=mo(r,"tensors","stack");if(R(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var n=e[0].rank,o=e[0].shape,a=e[0].dtype;R(t<=n,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){be(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){R(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(t)});return Ve(i,t)}}),Yn=T({tile_:function(r,t){var e=k(r,"x","tile",null);R(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var n=[e],o={reps:t};return F.runKernelFunc(function(a,i){var s=a.tile(e,t);return i([e]),s},{x:e},function(a,i){var s=i[0];return{x:function(){var u=ve(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var f=0;f<t[2];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(f=0;f<t[2];++f)for(var h=0;h<t[3];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),Vd=T({truncatedNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new wi(t,e,n,!0,o),i=se(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),ze=T({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=k(r,"x","unstack");R(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var n={axis:t};return F.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return mt(o,t)}}},"Unpack",n)}}),zd=function(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return J(this,function(h){switch(h.label){case 0:return e=k(r,"x","setdiff1d"),n=k(t,"y","setdiff1d"),R(e.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."}),R(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),R(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,e.data()];case 1:return o=h.sent(),[4,n.data()];case 2:for(a=h.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new Er([s],e.dtype),c=new Er([s],"int32"),l=0,f=0;l<o.length;l++)i.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function yo(r,t,e,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(t.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([r[i+1]/t[i],t[i]]);o=o.concat(r.slice(a+1))}return o}function xo(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var o=t+1;o<r;++o)o<=2*t?(n.push(o),n.push(o-(t+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function bo(r,t,e,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/e):o.push(r[0]*e);for(var a=1;a<r.length;++a)a<=t.length?n?o.push(t[a-1]*r[a]):o.push(r[a]/t[a-1]):o.push(r[a]);return o}function zc(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function Uc(r,t,e){for(var n=r.slice(0,1),o=0;o<e;++o)n.push(r[o+1]-t[o][0]-t[o][1]);return n}function Ci(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],o=1,a=0;a<e.length-1;++a)o*=e[a];var i=r.shape,s=e.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=_t(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}Object.freeze({prepareAndValidate:Ci});var _i=30;function io(r){return r<=_i?r:po(r,Math.floor(Math.sqrt(r)))}function Gc(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(e.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(e.rank-o))throw new Error(a+" Output shape length < "+(n+(e.rank-o)));if(e.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(a+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<e.rank-o;++i)if(e.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+e.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function Hc(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Gc(e,t,r)}function Sr(r,t,e){for(var n=t.shape.length,o=n>1?t.shape[n-1]:1,a=e.length,i=1,s=o;s<a;++s)i*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:Z(t.shape)/u,sliceSize:i,strides:_t(e.slice(0,o)).concat([1]),outputSize:Z(e)}}Object.freeze({validateUpdateShape:Gc,validateInput:Hc,calculateShapes:Sr});function qc(r,t,e){R(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),R(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var n=function(a){R(t[a]+e[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(t[a]+e[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)n(o)}function Ya(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function Oo(r,t,e){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((t[o]-r[o])/e[o]);return n}function jc(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=lo(0,a,s-1)}function Kc(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?lo(0,a,s):lo(-1,a,s-1)}function Ei(r,t,e){for(var n=e.length,o=0;o<e.length;o++)if(e[o]>1){n=o;break}for(o=n+1;o<e.length;o++)if(t[o]>0||e[o]!==r[o])return!1;return!0}function ki(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}Object.freeze({assertParamsValid:qc,maskToAxes:Ya,computeOutShape:Oo,startForAxis:jc,stopForAxis:Kc,isSliceContinous:Ei,computeFlatOffset:ki});function Ud(r,t){R(ho(r),function(){return"The f passed in variableGrads(f) must be a function"}),R(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof or}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var n in t=[],F.registeredVariables)t.push(F.registeredVariables[n]);var o=e?t.filter(function(l){return!l.trainable}):null,a=t.length;R((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=F.gradients(r,t,null,!0),s=i.value,u=i.grads;R(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),R(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function Bo(r){return F.customGrad(r)}var Qt=T({softmax_:function(r,t){t===void 0&&(t=-1);var e=k(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return F.runKernelFunc(function(n,o){var a=n.softmax(e,t);return o([a]),a},{logits:e},function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([t],!0).mul(a))}}},"Softmax",{dim:t},[],[!0])}}),Gd=T({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=k(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return Bo(function(n,o){var a=n.max(t,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),Xc=function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),$c=function(){function r(){}return r.prototype.time=function(t){return L("time")},r.prototype.read=function(t){return L("read")},r.prototype.readSync=function(t){return L("readSync")},r.prototype.numDataIds=function(){return L("numDataIds")},r.prototype.disposeData=function(t){return L("disposeData")},r.prototype.write=function(t,e,n){return L("write")},r.prototype.move=function(t,e,n,o){return L("move")},r.prototype.memory=function(){return L("memory")},r.prototype.floatPrecision=function(){return L("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,o){return L("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,L("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return L("slice")},r.prototype.stridedSlice=function(t,e,n,o){return L("stridedSlice")},r.prototype.unstack=function(t,e){return L("unstack")},r.prototype.reverse=function(t,e){return L("reverse")},r.prototype.concat=function(t,e){return L("concat")},r.prototype.neg=function(t){return L("neg")},r.prototype.add=function(t,e){return L("add")},r.prototype.addN=function(t){return L("addN")},r.prototype.subtract=function(t,e){return L("subtract")},r.prototype.multiply=function(t,e){return L("multiply")},r.prototype.realDivide=function(t,e){return L("realDivide")},r.prototype.floorDiv=function(t,e){return L("floorDiv")},r.prototype.sum=function(t,e){return L("sum")},r.prototype.prod=function(t,e){return L("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return L("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return L("argMin")},r.prototype.argMax=function(t,e){return L("argMax")},r.prototype.equal=function(t,e){return L("equal")},r.prototype.notEqual=function(t,e){return L("notEqual")},r.prototype.less=function(t,e){return L("less")},r.prototype.lessEqual=function(t,e){return L("lessEqual")},r.prototype.greater=function(t,e){return L("greater")},r.prototype.greaterEqual=function(t,e){return L("greaterEqual")},r.prototype.logicalNot=function(t){return L("logicalNot")},r.prototype.logicalAnd=function(t,e){return L("logicalAnd")},r.prototype.logicalOr=function(t,e){return L("logicalOr")},r.prototype.where=function(t){return L("where")},r.prototype.select=function(t,e,n){return L("select")},r.prototype.topk=function(t,e,n){return L("topk")},r.prototype.min=function(t,e){return L("min")},r.prototype.minimum=function(t,e){return L("minimum")},r.prototype.mod=function(t,e){return L("mod")},r.prototype.max=function(t,e){return L("max")},r.prototype.maximum=function(t,e){return L("maximum")},r.prototype.all=function(t,e){return L("all")},r.prototype.any=function(t,e){return L("any")},r.prototype.squaredDifference=function(t,e){return L("squaredDifference")},r.prototype.ceil=function(t){return L("ceil")},r.prototype.floor=function(t){return L("floor")},r.prototype.round=function(t){return L("round")},r.prototype.sign=function(t){return L("sign")},r.prototype.isNaN=function(t){return L("isNaN")},r.prototype.isInf=function(t){return L("isInf")},r.prototype.isFinite=function(t){return L("isFinite")},r.prototype.pow=function(t,e){return L("pow")},r.prototype.exp=function(t){return L("exp")},r.prototype.expm1=function(t){return L("expm1")},r.prototype.softmax=function(t,e){return L("softmax")},r.prototype.log=function(t){return L("log")},r.prototype.log1p=function(t){return L("log1p")},r.prototype.sqrt=function(t){return L("sqrt")},r.prototype.rsqrt=function(t){return L("rsqrt")},r.prototype.square=function(t){return L("square")},r.prototype.reciprocal=function(t){return L("reciprocal")},r.prototype.relu=function(t){return L("relu")},r.prototype.relu6=function(t){return L("relu6")},r.prototype.prelu=function(t,e){return L("prelu")},r.prototype.elu=function(t){return L("elu")},r.prototype.eluDer=function(t,e){return L("eluDer")},r.prototype.selu=function(t){return L("selu")},r.prototype.int=function(t){return L("int")},r.prototype.clip=function(t,e,n){return L("clip")},r.prototype.abs=function(t){return L("abs")},r.prototype.complexAbs=function(t){return L("complexAbs")},r.prototype.sigmoid=function(t){return L("sigmoid")},r.prototype.softplus=function(t){return L("softplus")},r.prototype.sin=function(t){return L("sin")},r.prototype.cos=function(t){return L("cos")},r.prototype.tan=function(t){return L("tan")},r.prototype.asin=function(t){return L("asin")},r.prototype.acos=function(t){return L("acos")},r.prototype.atan=function(t){return L("atan")},r.prototype.atan2=function(t,e){return L("atan2")},r.prototype.sinh=function(t){return L("sinh")},r.prototype.cosh=function(t){return L("cosh")},r.prototype.tanh=function(t){return L("tanh")},r.prototype.asinh=function(t){return L("asinh")},r.prototype.acosh=function(t){return L("acosh")},r.prototype.atanh=function(t){return L("atanh")},r.prototype.erf=function(t){return L("erf")},r.prototype.step=function(t,e){return L("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,L("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return L("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return L("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return L("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,L("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return L("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return L("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return L("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return L("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return L("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return L("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return L("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,o){return L("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return L("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return L("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return L("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return L("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return L("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,o){return L("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return L("reshape")},r.prototype.cast=function(t,e){return L("cast")},r.prototype.tile=function(t,e){return L("tile")},r.prototype.pad=function(t,e,n){return L("pad")},r.prototype.transpose=function(t,e){return L("transpose")},r.prototype.gather=function(t,e,n){return L("gather")},r.prototype.gatherND=function(t,e){return L("gatherND")},r.prototype.scatterND=function(t,e,n){return L("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return L("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return L("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,o){return L("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return L("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,o){return L("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return L("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,o,a,i){return L("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,o,a){return L("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,o,a,i,s){return L("LRNGrad")},r.prototype.multinomial=function(t,e,n,o){return L("multinomial")},r.prototype.oneHot=function(t,e,n,o){return L("oneHot")},r.prototype.cumsum=function(t,e,n,o){return L("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,o,a){return L("nonMaxSuppression")},r.prototype.fft=function(t){return L("fft")},r.prototype.ifft=function(t){return L("ifft")},r.prototype.complex=function(t,e){return L("complex")},r.prototype.real=function(t){return L("real")},r.prototype.imag=function(t){return L("imag")},r.prototype.cropAndResize=function(t,e,n,o,a,i){return L("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return L("depthToSpace")},r.prototype.split=function(t,e,n){return L("split")},r.prototype.sparseToDense=function(t,e,n,o){return L("sparseToDense")},r.prototype.diag=function(t){return L("diag")},r.prototype.fill=function(t,e,n){return L("fill")},r.prototype.onesLike=function(t){return L("onesLike")},r.prototype.zerosLike=function(t){return L("zerosLike")},r.prototype.linspace=function(t,e,n){return L("linspace")},r.prototype.dispose=function(){return L("dispose")},r}();function L(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function Xt(r,t){for(var e=r.length,n=[],o=0;o<e;o++){var a=e-1-o,i=r[a]||1;(t[t.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function Oe(r,t){for(var e=[],n=0;n<t.length;n++){var o=r[r.length-n-1],a=t.length-n-1,i=t[a];(o==null||o===1&&i>1)&&e.unshift(a)}return e}function fe(r,t){for(var e=[],n=Math.max(r.length,t.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=t[t.length-o-1];if(i==null&&(i=1),a===1)e.unshift(i);else if(i===1)e.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(a)}}return e}function ar(r,t,e,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=wo(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return gn(r,s,e,n,o,a,!1,i)}function Ar(r,t,e,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=Qa(t),l=c[0],f=c[1],h=c[2];if(i==="NDHWC")u="channelsLast",s=[l,f,h,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,f,h,r[1],r[1]]}return Dr(r,s,e,n,o,!1,u,a)}function gn(r,t,e,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],h=r[1],l=r[2],f=r[3]}var d,p=t[0],m=t[1],v=t[3],g=wo(e),x=g[0],b=g[1],y=wo(n),w=y[0],C=y[1],I=Qn(p,w),S=Qn(m,C),_=function(M,B,W,N,O,H,G,j){var V,K,oe;if(typeof M=="number"){V={top:M,bottom:M,left:M,right:M,type:M===0?"VALID":"NUMBER"};var re=function(de,we,ge,De,ke){De==null&&(De=Ri(de,we,ge));var Re=de[0],At=de[1],Dt=br((Re-we+2*De)/ge+1,ke);R(Ae(Dt),function(){return"The output # of rows ("+Dt+") must be an integer. Change the stride and/or zero pad parameters"});var lt=br((At-we+2*De)/ge+1,ke);return R(Ae(lt),function(){return"The output # of columns ("+lt+") must be an integer. Change the stride and/or zero pad parameters"}),[Dt,lt]}([B,W],H,N,M,j);K=re[0],oe=re[1]}else if(M==="same"){K=Math.ceil(B/N),oe=Math.ceil(W/O);var ne=Math.max(0,(K-1)*N+H-B),ue=Math.max(0,(oe-1)*O+G-W),he=Math.floor(ne/2),pe=ne-he,Fe=Math.floor(ue/2);V={top:he,bottom:pe,left:Fe,right:ue-Fe,type:"SAME"}}else{if(M!=="valid")throw Error("Unknown padding parameter: "+M);V={top:0,bottom:0,left:0,right:0,type:"VALID"},K=Math.ceil((B-H+1)/N),oe=Math.ceil((W-G+1)/O)}return{padInfo:V,outHeight:K,outWidth:oe}}(o,l,f,x,b,I,S,a),E=_.padInfo,D=_.outHeight,A=_.outWidth,P=i?v*h:v;return s==="channelsFirst"?d=[c,P,D,A]:s==="channelsLast"&&(d=[c,D,A,P]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:D,outWidth:A,outChannels:P,padInfo:E,strideHeight:x,strideWidth:b,filterHeight:p,filterWidth:m,effectiveFilterHeight:I,effectiveFilterWidth:S,dilationHeight:w,dilationWidth:C,inShape:r,outShape:d,filterShape:t}}function Dr(r,t,e,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],d=u[4];if(i==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3],d=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],d=r[1],l=r[2],f=r[3],h=r[4]}var p,m=t[0],v=t[1],g=t[2],x=t[4],b=Qa(e),y=b[0],w=b[1],C=b[2],I=Qa(n),S=I[0],_=I[1],E=I[2],D=Qn(m,S),A=Qn(v,_),P=Qn(g,E),M=function(G,j,V,K,oe,re,ne,ue,he,pe,Fe){var de,we,ge,De;if(typeof G=="number"){de={top:G,bottom:G,left:G,right:G,front:G,back:G,type:G===0?"VALID":"NUMBER"};var ke=function(Ln,Ht,Qo,Wn,Tt,Jo){Tt==null&&(Tt=Ri(Ln,Ht,Wn));var rh=Ln[0],oh=Ln[1],ah=Ln[2],Zo=br((rh-Ht+2*Tt)/Wn+1,Jo);R(Ae(Zo),function(){return"The output # of depths ("+Zo+") must be an integer. Change the stride and/or zero pad parameters"});var ea=br((oh-Ht+2*Tt)/Wn+1,Jo);R(Ae(ea),function(){return"The output # of rows ("+ea+") must be an integer. Change the stride and/or zero pad parameters"});var ta=br((ah-Ht+2*Tt)/Wn+1,Jo);return R(Ae(ta),function(){return"The output # of columns ("+ta+") must be an integer. Change the stride and/or zero pad parameters"}),[Zo,ea,ta,Qo]}([j,V,K,1],ue,1,oe,G,Fe);we=ke[0],ge=ke[1],De=ke[2]}else if(G==="same"){we=Math.ceil(j/oe),ge=Math.ceil(V/re),De=Math.ceil(K/ne);var Re=(we-1)*oe+ue-j,At=(ge-1)*re+he-V,Dt=(De-1)*ne+pe-K,lt=Math.floor(Re/2),Bn=Re-lt,Ut=Math.floor(At/2),nn=At-Ut,Gt=Math.floor(Dt/2);de={top:Ut,bottom:nn,left:Gt,right:Dt-Gt,front:lt,back:Bn,type:"SAME"}}else{if(G!=="valid")throw Error("Unknown padding parameter: "+G);de={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},we=Math.ceil((j-ue+1)/oe),ge=Math.ceil((V-he+1)/re),De=Math.ceil((K-pe+1)/ne)}return{padInfo:de,outDepth:we,outHeight:ge,outWidth:De}}(o,l,f,h,y,w,C,D,A,P,s),B=M.padInfo,W=M.outDepth,N=M.outHeight,O=M.outWidth,H=a?x*d:x;return i==="channelsFirst"?p=[c,H,W,N,O]:i==="channelsLast"&&(p=[c,W,N,O,H]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:f,inWidth:h,inChannels:d,outDepth:W,outHeight:N,outWidth:O,outChannels:H,padInfo:B,strideDepth:y,strideHeight:w,strideWidth:C,filterDepth:m,filterHeight:v,filterWidth:g,effectiveFilterDepth:D,effectiveFilterHeight:A,effectiveFilterWidth:P,dilationDepth:S,dilationHeight:_,dilationWidth:E,inShape:r,outShape:p,filterShape:t}}function Ri(r,t,e,n){n===void 0&&(n=1);var o=Qn(t,n);return Math.floor((r[0]*(e-1)-e+o)/2)}function wo(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function Qa(r){return typeof r=="number"?[r,r,r]:r}function Qn(r,t){return t<=1?r:r+(r-1)*(t-1)}function br(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function An(r){var t=wo(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function ot(r,t){return An(r)||An(t)}function Lo(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function Ii(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=_e(r.shape),o=r.toFloat(),a=e.complex(o,n);return n.dispose(),o.dispose(),a}if(!Qu(r.dtype,t))return F.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var i=e.real(r);return a=i.cast(t),i.dispose(),a}if(t==="int32")return e.int(r);if(t==="bool"){var s=X(0,r.dtype);return a=e.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function Co(r,t){return F.makeTensorFromDataId(r.dataId,t,r.dtype)}function Si(r,t,e){var n=(t-r)/(e-1),o=ur(e,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Me(o,"float32")}Object.freeze({castTensor:Ii,reshapeTensor:Co,linspaceImpl:Si,upcastType:He,axesAreInnerMostDims:yi,combineLocations:Nc,computeOutAndReduceShapes:Xe,expandShapeToKeepDim:rt,assertAxesAreInnerMostDims:at,getAxesPermutation:Rt,getUndoAxesPermutation:Mo,getInnerMostAxes:It,getBroadcastDims:Xt,getReductionAxes:Oe,assertAndGetBroadcastShape:fe,assertParamsConsistent:Mc,computeOutShape:Sn,computePool2DInfo:ar,computePool3DInfo:Ar,computeConv2DInfo:gn,computeConv3DInfo:Dr,computeDefaultPad:Ri,tupleValuesAreOne:An,eitherStridesOrDilationsAreOne:ot,convertConv2DDataFormat:Lo,PARALLELIZE_THRESHOLD:_i,computeOptimalWindowSize:io});function Ja(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function Us(r,t){return{real:r[2*t],imag:r[2*t+1]}}function Hd(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function qd(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function jd(r,t,e){var n=function(a,i,s){return function(u,c,l){for(var f=0,h=u.length,d=0,p=!1;f<h;){var m=l(c,u[d=f+(h-f>>>1)]);m>0?f=d+1:(h=d,p=!m)}return p?f:-f-1}(a,i,s||Kd)}(r,t,e),o=n<0?-(n+1):n;r.splice(o,0,t)}function Kd(r,t){return r>t?1:r<t?-1:0}function Ai(r,t,e,n,o){return Yc(r,t,e,n,o,0).selectedIndices}function Di(r,t,e,n,o,a){var i=Yc(r,t,e,n,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function Yc(r,t,e,n,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(Gs),c=a>0?-.5/a:0,l=[],f=[];l.length<e&&u.length>0;){var h=u.pop(),d=h.score,p=h.boxIndex,m=h.suppressBeginIndex;if(d<o)break;for(var v=!1,g=l.length-1;g>=m;--g){var x=Xd(r,p,l[g]);if(x>=n){v=!0;break}if(h.score=h.score*$d(n,c,x),h.score<=o)break}h.suppressBeginIndex=l.length,v||(h.score===d?(l.push(p),f.push(h.score)):h.score>o&&jd(u,h,Gs))}var b=l.length;return s&&(l.fill(0,b),f.fill(0,b)),{selectedIndices:Me(l,"int32"),selectedScores:Me(f,"float32"),numValidOutputs:X(b,"int32")}}function Xd(r,t,e){var n=r.subarray(4*t,4*t+4),o=r.subarray(4*e,4*e+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),d=(s-a)*(u-i),p=(f-c)*(h-l);if(d<=0||p<=0)return 0;var m=Math.max(a,c),v=Math.max(i,l),g=Math.min(s,f),x=Math.min(u,h),b=Math.max(g-m,0)*Math.max(x-v,0);return b/(d+p-b)}function $d(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function Gs(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function Qc(r,t,e){var n=new Array(r.rank).fill(0),o=r.shape.slice();return t.map(function(a){o[e]=a;var i=r.slice(n,o);return n[e]+=a,i})}function Jc(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var o=se(e,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function Zc(r,t,e,n,o){for(var a=t[t.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=rr(e,s*n),l=rr("int32",s*n),f=0;f<s;f++){for(var h=f*u,d=r.subarray(h,h+u),p=[],m=0;m<d.length;m++)p.push({value:d[m],index:m});p.sort(function(y,w){return w.value-y.value});var v=f*n,g=c.subarray(v,v+n),x=l.subarray(v,v+n);for(m=0;m<n;m++)g[m]=p[m].value,x[m]=p[m].index}var b=t.slice();return b[b.length-1]=n,[$e(c,b,e),$e(l,b,"int32")]}function Ti(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var o=se(r,"int32"),a=se([e.length,r.length],"int32");for(n=0;n<e.length;n++){var i=o.indexToLoc(e[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var Yd=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},Qd=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},Jd=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function el(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return r+"."+e})}function st(r,t){return t===1?[r]:el(r,t)}function Je(){var r,t,e,n,o,a,i,s,u,c;return U().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function En(r,t,e){e===void 0&&(e="index");var n=_t(t);return n.map(function(o,a){return"int "+r[a]+" = "+e+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+e+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function Fi(r){var t=_t(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var tl=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function Zd(r,t,e,n){var o=[];r.forEach(function(d){var p=Z(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(d){return function(p,m,v){v===void 0&&(v=!1);var g="";g+=v?nl(p):qn(p);var x=p.shapeInfo.logicalShape,b=m.logicalShape;return x.length<=b.length&&(g+=v?function(y,w){var C,I=y.name,S=I.charAt(0).toUpperCase()+I.slice(1),_="get"+S+"AtOutCoords",E=y.shapeInfo.logicalShape.length,D=w.logicalShape.length,A=Xt(y.shapeInfo.logicalShape,w.logicalShape),P=Ce(D),M=D-E,B=["x","y","z","w","u","v"];C=E===0?"":D<2&&A.length>=1?"coords = 0;":A.map(function(V){return"coords."+B[V+M]+" = 0;"}).join(`
`);var W="";W=D<2&&E>0?"coords":y.shapeInfo.logicalShape.map(function(V,K){return"coords."+B[K+M]}).join(", ");var N="return outputValue;",O=Z(y.shapeInfo.logicalShape)===1,H=Z(w.logicalShape)===1;if(E!==1||O||H){if(O&&!H)N=D===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(A.length){var G=E-2,j=E-1;A.indexOf(G)>-1&&A.indexOf(j)>-1?N="return vec4(outputValue.x);":A.indexOf(G)>-1?N="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":A.indexOf(j)>-1&&(N="return vec4(outputValue.xx, outputValue.zz);")}}else N=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+_+`() {
      `+P+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+S+"("+W+`);
      `+N+`
    }
  `}(p,m):function(y,w){var C=y.name,I=C.charAt(0).toUpperCase()+C.slice(1),S="get"+I+"AtOutCoords",_=w.texShape,E=y.shapeInfo.texShape,D=y.shapeInfo.logicalShape.length,A=w.logicalShape.length;if(!y.shapeInfo.isUniform&&D===A&&y.shapeInfo.flatOffset==null&&Pe(E,_))return`
      float `+S+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var P,M=Ce(A),B=Xt(y.shapeInfo.logicalShape,w.logicalShape),W=A-D,N=["x","y","z","w","u","v"];P=D===0?"":A<2&&B.length>=1?"coords = 0;":B.map(function(H){return"coords."+N[H+W]+" = 0;"}).join(`
`);var O="";return O=A<2&&D>0?"coords":y.shapeInfo.logicalShape.map(function(H,G){return"coords."+N[G+W]}).join(", "),`
    float `+S+`() {
      `+M+` coords = getOutputCoords();
      `+P+`
      return get`+I+"("+O+`);
    }
  `}(p,m)),g}(d,t,n)}).join(`
`),c=t.texShape,l=Je(),f=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),h=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+ep+`
    `+tp+`
    `+np+`
  `}(l);return t.isPacked?(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(Pe(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var I=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+I+`);
      int c = imod(index, `+I+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return m=d,v=p,g=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],x=Math.ceil(m[2]/2),b=x*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+x+`);
      int c = imod(index, `+x+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],I=Math.ceil(y[y.length-1]/2),S=I*Math.ceil(y[y.length-2]/2),_=S,E="",D="b, r, c",A=2;A<y.length-1;A++)_*=y[y.length-A-1],E=`
      int b`+A+" = index / "+_+`;
      index -= b`+A+" * "+_+`;
    `+E,D="b"+A+", "+D;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+E+`

      int b = index / `+S+`;
      index -= b * `+S+`;

      int r = 2 * (index / `+I+`);
      int c = imod(index, `+I+`) * 2;

      return ivec`+y.length+"("+D+`);
    }
  `}(d,p)}var m,v,g,x,b}(t.logicalShape,c),i=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,x){return x[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+x[1]+`.0);
      }
    `:x[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+x[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      return resTexRC.x * `+x[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(g,x){return Pe(g,x)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+x[0]+", "+x[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(d,p);case 3:return m=p,v=En(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,x){var b=En(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(g,x){var b=En(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+x[0]+`,
                             `+x[1]+`));

      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(g,x){var b=En(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var m,v}(t.logicalShape,c),i=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(h+=rp),[h,f,i,s,a,u,e].join(`
`)}function qn(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=bn(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+zn(e)+`
      }
    `;var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=bn(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e.shapeInfo.texShape;if(i!=null&&Pe(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=an(n),l=c.newShape,f=c.keptDims,h=l;if(h.length<n.length){var d=jn(e,h);return`
      `+qn(d)+`
      float `+a+`(int row, int col) {
        return `+a+"("+Kn(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+zn(e)+`
      }
    `;var p=i[0],m=i[1],v=bn(o);return m===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+p+", "+m+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=an(n),c=u.newShape,l=u.keptDims,f=c;if(f.length<n.length){var h=jn(e,f);return`
        `+qn(h)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+Kn(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+zn(e)+`
      }
    `;var d=e.shapeInfo.texShape,p=d[0],m=d[1],v=e.shapeInfo.flatOffset;if(m===i&&v==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(m===s&&v==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=bn(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+p+", "+m+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=an(n),l=c.newShape,f=c.keptDims;if(l.length<n.length){var h=jn(e,l);return`
      `+qn(h)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+Kn(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+zn(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,m=p[0],v=p[1];if(v===u&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=bn(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+v+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=an(n),f=l.newShape,h=l.keptDims;if(f.length<n.length){var d=jn(e,f);return`
      `+qn(d)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+Kn(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+zn(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,v=m[0],g=m[1];if(g===c&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=bn(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+x+`;
      vec2 uv = uvFromFlat(`+v+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=an(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=jn(e,s);return`
      `+qn(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+Kn(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],f=n[4]*l,h=n[3]*f,d=n[2]*h,p=n[1]*d;if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+zn(e)+`
      }
    `;var m=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,g=v[0],x=v[1];if(x===p&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(x===l&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=bn(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+g+", "+x+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function nl(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=Je(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Je();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=Je();if(u!=null&&Pe(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+i+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),f=jn(o,l);return`
        `+nl(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Kn(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],d=c[1],p=Math.ceil(a[2]/2),m=p*Math.ceil(a[1]/2),v=Je();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+d+", "+m+", "+p+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],d=Math.ceil(a[i-1]/2),p=d*Math.ceil(a[i-2]/2),m="int b, int row, int col",v="b * "+p+" + (row / 2) * "+d+" + (col / 2)",g=2;g<i-1;g++)m="int b"+g+", "+m,p*=a[i-g-1],v="b"+g+" * "+p+" + "+v;var x=Je();return`
    vec4 `+u+"("+m+`) {
      int index = `+v+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+x.texture2D+"("+s+`, uv);
    }
  `}(r)}}var ep=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,tp=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,np=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,rp=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function bn(r){return"offset"+r}function zn(r){var t=r.name,e=Z(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function Ce(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function jn(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function Kn(r,t){return t.map(function(e){return r[e]}).join(", ")}var op=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,R(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/t);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=Ce(c),f=st("coords",c);if(a===1){var h=Ce(s=c+1);i=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],m=d.map(function(S){return"int "+S}),v=st("sourceLocR",s-1).concat("inIdx.r"),g=st("sourceLocG",s-1).concat("inIdx.g"),x=st("sourceLocB",s-1).concat("inIdx.b"),b=st("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+x.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",C=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+x.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",I=n?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+I+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},ap=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,f=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},ip=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=l-1-r.padInfo.front,p=f-1-r.padInfo.top,m=h-1-r.padInfo.left,v=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},sp=function(r,t,e,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],fe(r,t),fe(r,e);var i="0.0";n!=null&&(fe(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(fe(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},up=function(r,t,e,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],fe(r,t),fe(r,e);var i="vec4(0.0)";n!=null&&(fe(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(fe(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},cp="return areal * breal - aimag * bimag;",lp="return areal * bimag + aimag * breal;",Hs=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=fe(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},ua="return a + b;",ca="return a - b;",qs="return a * b;",rl="return (a < 0.) ? b * a : a;",Te=function(r,t,e){this.variableNames=["A","B"],this.outputShape=fe(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},ol=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,jt=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=fe(t,e);var o=this.outputShape.length,a="";if(n)if(o===0||Z(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+Ce(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=st("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},fp=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),hp=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),dp=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},pp=function(r){this.outputShape=[],this.outputShape=Sn(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var a=t.length,i=t[t.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},vp=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Sn(r,t);var e=this.outputShape,n=e.length,o=Ce(n),a=st("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(v,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=i[t],l=i.slice(-2),f=i.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+jr(i,c,d)+`),
            vec2(`+jr(l,c,d)+`));
        }`}var p=s.length,m=s[s.length-1];h+=`
        return getChannel(
          getT`+p+"("+jr(i,c,m)+`),
          vec2(`+jr(l,c,m)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+h+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+e[n-2]+` &&
            `+a[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function jr(r,t,e){var n=r.indexOf(t);return r.map(function(o,a){return a===n?o+" - "+e:o}).join()}var mp=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},gp=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},yp=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},xp=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},bp=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},wp=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=t-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},js=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,f=r.filterWidth,h=4*Math.floor(r.inChannels/4),d=r.inChannels%4,p=r.dataFormat==="channelsLast",m=p?1:2,v=p?2:3,g=p?3:1,x="",b="";e&&(x=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+b+`
        setOutput(result);
      }
    `},Cp=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,f=r.filterHeight,h=r.filterWidth,d=4*Math.floor(r.inChannels/4),p=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ks=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=r.outChannels/r.inChannels,m="",v="";e&&(m=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+v+`
        setOutput(result);
      }
    `},Xs=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=d,m="int xR; int xC; int xCOffset;",v=0;v<h;v++)for(var g=0;g<d;g++)m+=`
          vec4 xTexelR`+v+"C"+2*g+` = vec4(0.);
          vec4 wR`+v+"C"+g+` = vec4(0.);
          vec4 xR`+v+"C"+g+" = vec4(0.);";for(v=0;v<h;v++)for(var x=0;x<p;x++){if(m+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(g=2*x)*f+`;
        `,c===1){if(g<d&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+v+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+g+" = vec4(previous.zw, xTexelR"+v+"C"+g+`.xy);
                } else {
                  xR`+v+"C"+g+" = vec4(0, 0, xTexelR"+v+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xR`+v+"C"+g+" = xTexelR"+v+"C"+g+`;
              `,g+1<d)){var b=s%2==0?fi(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+g+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(g+1)+" = xTexelR"+v+"C"+(g+2)+`;
                `}}else g<d&&(m+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
              `,g+1<d&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(g+1)+" = vec4(xTexelR"+v+"C"+(g+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".xy, xTexelR"+v+"C"+(g+2)+`.xy);
              `,g+1<d&&(m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
                `)),m+="}");g<d&&(m+=`
            vec4 wTexelR`+v+"C"+g+" = getW("+v+", "+g+`, d1, q);
            wR`+v+"C"+g+" = vec4(wTexelR"+v+"C"+g+".xz, wTexelR"+v+"C"+g+`.xz);
          `,g+1<d&&(m+=`
              vec4 wTexelR`+v+"C"+(g+1)+" = getW("+v+", "+(g+1)+`, d1, q);
              wR`+v+"C"+(g+1)+` =
                vec4(wTexelR`+v+"C"+(g+1)+".xz, wTexelR"+v+"C"+(g+1)+".xz);"))}for(v=0;v<h;v++)for(g=0;g<d;g++)m+="dotProd += xR"+v+"C"+g+" * wR"+v+"C"+g+";";var y="",w="";e&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var C=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},_p=function(r,t,e,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=t[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var h=n==="bilinear"?1:0,d=[i-1+".0",s-1+".0"],p=d[0],m=d[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=v[0],x=v[1],b=v[2],y=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],w=y[0],C=y[1],I=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+x+`;
        float width_scale = `+C+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+I+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},Ep=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Ce(n)+` coords = getOutputCoords();
        int end = `+$s(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+$s(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function $s(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var kp=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=kr.DENSE;var t=xr(r),e=Je();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+En(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Rp=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=kr.DENSE;var t=xr(r),e=Je();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+En(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},Ip=function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),Sp=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Ap=function(r){this.variableNames=["A"],this.outTexUsage=ht.DOWNLOAD;var t=Je();this.outputShape=r,this.userCode=`
      `+tl+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},Dp=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=ht.DOWNLOAD;var t=Je();this.outputShape=r,this.userCode=`
      `+tl+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},Tp=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=Je(),o=t[0],a=t[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+Fi(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},Fp=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=Je(),o=t[0],a=t[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Fi(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},Np="return real * expR - imag * expI;",Mp="return real * expI + imag * expR;",Ys=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Pp=function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(e.valueLoc,t)}},r}(),Op=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var o=Ce(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<i.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Bp=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=Ce(t.length),o=Ce(e.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function al(r,t){var e=Je();return lc(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function il(r,t){return pc(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function sl(r,t){return vc(r,t,new Uint16Array([0,1,2,2,1,3]))}function Pr(r,t,e,n,o,a,i){gc(e,n);var s=mc(r,t),u=r.TEXTURE_2D;return Y(r,t,function(){return r.bindTexture(u,s)}),Y(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),Y(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),Y(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),Y(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),Y(r,t,function(){return r.texImage2D(u,0,o,e,n,0,a,i,null)}),Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function ul(r,t,e,n,o){var a=No(e,n);return Pr(r,t,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function cl(r,t,e,n,o){var a=No(e,n);return Pr(r,t,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function ll(r,t,e,n,o){var a=No(e,n);return Pr(r,t,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function fl(r,t,e,n,o){var a=Mr(e,n);return Pr(r,t,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function hl(r,t,e,n,o){var a=Mr(e,n);return Pr(r,t,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function dl(r,t,e,n){return Y(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),qa(r,t,e,"clipSpacePos",n,3,20,0)&&qa(r,t,e,"uv",n,2,20,12)}function pl(r,t,e,n,o,a,i){var s,u,c;Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),Y(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function vl(r,t,e,n){Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),n.data instanceof Uint8Array?Y(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):Y(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function ml(r,t,e,n,o){var a=r.createBuffer();Y(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*e*n;return Y(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),Y(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)}),Y(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function gl(r,t,e){var n=r,o=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function yl(r,t,e,n,o){var a=No(e,n),i=a[0],s=a[1],u=new Uint8Array(e*n*4);return Y(r,t,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function xl(r,t,e,n,o,a,i,s){var u=r,c=new Float32Array(function(l,f){var h=Mr(l,f);return h[0]*h[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function bl(r,t,e,n){var o=new Float32Array(e*n*4);return Y(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,o)}),o}var Lp=Object.freeze({createVertexShader:al,createVertexBuffer:il,createIndexBuffer:sl,createFloat32MatrixTexture:ul,createFloat16MatrixTexture:cl,createUnsignedBytesMatrixTexture:ll,createPackedMatrixTexture:fl,createFloat16PackedMatrixTexture:hl,bindVertexProgramAttributeStreams:dl,uploadDenseMatrixToTexture:pl,uploadPixelDataToTexture:vl,createBufferFromOutputTexture:ml,downloadFloat32MatrixFromBuffer:gl,downloadByteEncodedFloatMatrixFromOutputTexture:yl,downloadPackedMatrixFromBuffer:xl,downloadMatrixFromPackedOutputTexture:bl}),wl=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=U().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,sc(e,t)):this.gl=Vt(e);var n="WEBGL_color_buffer_float";if(U().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=mr(this.gl,this.debug,"OES_texture_float"),dt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=mr(this.gl,this.debug,"OES_texture_half_float");else if(U().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),dt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=mr(this.gl,this.debug,"EXT_color_buffer_half_float");else if(U().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",dt(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!dt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=il(this.gl,this.debug),this.indexBuffer=sl(this.gl,this.debug),this.framebuffer=yc(this.gl,this.debug),this.textureConfig=gi(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return U().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;Y(e,this.debug,function(){return e.finish()}),Y(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),Y(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),Y(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),Y(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),Y(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),ul(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),cl(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),ll(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),vl(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,o){this.throwIfDisposed(),pl(this.gl,this.debug,t,e,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),hl(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),fl(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(ja(this.gl,this.debug,this.framebuffer),this.outputTexture=null),Y(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return yl(o.gl,o.debug,e,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,o,a,i){return xl(this.gl,t,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return gl(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var o=ml(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,o=this;if(U().getBool("WEBGL_FENCE_API_ENABLED")){var a=t,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},e=i}else U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(e,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return bl(o.gl,o.debug,e,n)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=fc(e,this.debug,t),o=al(e,this.debug),a=hc(e,this.debug);return Y(e,this.debug,function(){return e.attachShader(a,o)}),Y(e,this.debug,function(){return e.attachShader(a,n)}),dc(e,this.debug,a),this.debug&&ro(e,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=dl(e,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&Y(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&ro(this.gl,this.debug,this.program),Y(this.gl,this.debug,function(){return e.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?bc(this.gl,this.debug,t,e):wc(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),Y(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),Cc(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var o=Mr(e,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(t,a,i)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,o){this.setOutputMatrixWriteRegionDriver(n,t,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&ro(this.gl,this.debug,this.program),gr(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),Y(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),Y(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=mr(this.gl,this.debug,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return Q(this,void 0,void 0,function(){var e=this;return J(this,function(n){switch(n.label){case 0:return[4,La(function(){return e.disposed||e.isQueryAvailable(t,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var t=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||La(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),oo(this.gl,this.debug,t,this.framebuffer),this.debug&&gr(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(oo(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&gr(this.gl)):ja(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var o=this.gl;oo(o,this.debug,t,this.framebuffer),this.debug&&gr(o),this.outputTexture=t,Y(o,this.debug,function(){return o.viewport(0,0,e,n)}),Y(o,this.debug,function(){return o.scissor(0,0,e,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,o){var a=this;this.throwIfDisposed(),Y(this.gl,this.debug,function(){return a.gl.scissor(t,e,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function Qs(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(e,n){var o=e.logicalShape,a=t[n],i=a.shape;if(!Pe(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!e.isUniform||!a.isUniform){var s=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!Pe(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var Wp=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,o=e.inChannels,a=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,h=s.left,d=s.top,p=o*n,m=Je(),v=f==="channelsLast",g=v?0:1,x=v?1:2,b="",y=0;y<=1;y++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+t[x]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+m.output+` = result;
      }
    `},Vp=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},zp=function(r,t,e,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},Up=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},Gp=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},Hp=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,f=u-1-r.padInfo.top,h=c-1-r.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},la=function(r,t,e,n,o,a,i){e===void 0&&(e=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";a&&(d=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,p="result = activation(result);");var m=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+p+`

        setOutput(result);
      }
    `},qp=function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r}(),jp=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},Kp=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=st("rc",t),n=Ce(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(t,r,e),a=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(f,h){for(var d=[],p=0;p<=1;p++)for(var m=0;m<=1;m++){for(var v=(p===0?"r":"rp1")+", "+(m===0?"c":"cp1"),g=2;g<f;g++)v=h[h.length-1-g]+","+v;d.push(v)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},Xp=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=Ce(n),a=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},$p=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(v,g){return v[0]+r[g]+v[1]});for(var n=r.length,o=Ce(n),a=t.map(function(v){return v[0]}).join(","),i=t.map(function(v,g){return v[0]+r[g]}).join(","),s=st("rc",n),u=st("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],h=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,m=n===1?2:4;p<m;p++)d+=`
        `+f[p]+`
        if (`+h+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},fa=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,f=r.padInfo.left;this.outputShape=r.outShape;var h=t==="avg",d="0.0";if(h||(d="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(p="avgValue / count");var m=4*Math.floor(n/4),v=n%4,g=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+m+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+m+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+p+`);
      }
    `}},ha=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=r.padInfo.front,p=r.padInfo.top,m=r.padInfo.left;this.outputShape=r.outShape;var v=t==="avg",g="0.0";if(v||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var x=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(x="avgValue / count");var b=4*Math.floor(n/4),y=n%4,w=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+x+`);
        }
      }
    `}},Yp=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/e);this.outputShape=[n,a];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";t==="all"?(i="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):t==="any"&&(i="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var d="";o%e>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},Qp=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+En(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+Fi(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},Jp=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,m=2*Math.ceil(d)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Zp=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},ev=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},tv=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,m=2*Math.ceil(d)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},nv=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},rv=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map(function(a,i){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=Ce(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},ov=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=st("rc",e),o=n[e-1]+" + 1 < "+this.outputShape[e-1],a=n[e-2]+" + 1 < "+this.outputShape[e-2],i=Ce(e);function s(u){var c=r.map(function(l,f){return function(h,d){return t.indexOf(h)!==-1&&r[h]!==1?r[h]+" - "+d[h]+" - 1":""+d[h]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},Js=function(r,t,e,n,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=Ce(o.length),u=Ce(a.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";n===1?f="i":n===2&&(f="i, coords[1]");var h="getUpdates("+f+")",d=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},av=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/e);this.outputShape=[n,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},iv=function(r,t,e){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=Ce(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},sv=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=Ce(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return da.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+da[s]+" = start["+s+"] + coords."+da[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),da=["x","y","z","w","u","v"],uv=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=Ce(this.rank),n=st("coords",this.rank),o=st("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,f){return"start["+f+"]"}).join()+");":t.map(function(l,f){return o[f]+" = "+n[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),cv=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,o=Ce(e.length),a=Ce(e.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},lv=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var o,a=Zs(e,n),i=eu(t,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===ft.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):a===ft.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):a===ft.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):a===ft.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):a===ft.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(t,e,n,o){if(this.freeTextures!=null){var a=eu(e,Zs(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(n){t.gpgpu.deleteMatrixTexture(n)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function Zs(r,t){if(r===ht.UPLOAD)return ft.PACKED_2X2_FLOAT32;if(r===ht.RENDER||r==null)return function(e){return U().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?ft.PACKED_2X2_FLOAT32:ft.UNPACKED_FLOAT32:e?ft.PACKED_2X2_FLOAT16:ft.UNPACKED_FLOAT16}(t);if(r===ht.DOWNLOAD||r===ht.PIXELS)return ft.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function eu(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var fv=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var o=Ce(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},hv=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var o=Ce(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},dv=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=Ce(this.rank),a=el("rc",this.rank),i=new Array(this.rank);for(n=0;n<t.length;n++)i[t[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Ni=1.7580993408473768,Mi=1.0507009873554805,ce=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},St="if (isnan(x)) return x;",pv="return x;",tu="return abs(x);",Cl=St+`
  return (x < 0.0) ? 0.0 : x;
`,_l=St+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,El="return (x >= 0.0) ? x : (exp(x) - 1.0);",vv=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Ni+`;
  float scale = `+Mi+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,nu="return -x;",ru="return ceil(x);",ou="return floor(x);",au="return exp(x);",iu="return exp(x) - 1.0;",mv=St+`
  return sin(x);
`,gv=St+`
  return cos(x);
`,yv=St+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,xv=St+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,bv=St+`
  return atan(x);
`,wv=St+"return log(x + sqrt(x * x + 1.0));",Cv=St+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,_v=St+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Kr="return x;",Ev="return x;",kl=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Rl=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Il=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,pr=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},kv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=st("rc",t),n=Ce(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),a=e.slice(-2),i=t<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Xr={};function $r(r,t){if(t===void 0&&(t=!1),r==="linear")return t?Ev:pv;if(r==="relu")return t?kl:Cl;if(r==="elu")return t?Il:El;if(r==="relu6")return t?Rl:_l;if(r==="prelu")return t?ol:rl;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Rv=600,Sl=function(r){function t(e){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!U().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var a=Vt(U().getNumber("WEBGL_VERSION"));o.binaryCache=((n=U().getNumber("WEBGL_VERSION"))in Xr||(Xr[n]={}),Xr[n]),o.gpgpu=new wl(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new lv(o.gpgpu),o.numMBBeforeWarning=U().global.screen==null?1024:U().global.screen.height*U().global.screen.width*window.devicePixelRatio*Rv/1024/1024,o.texData=new Xc(o,F),o}return kt(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,o){if(U().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:e,usage:ht.UPLOAD}),a},t.prototype.move=function(e,n,o,a){if(U().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:a,values:n,usage:ht.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new pr(u,Kr):new ce(u,Kr);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:a}],a),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(o!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return o;var d,p,m=this.activeTimers!=null;return m&&(d=bt()),a==="complex64"?p=Ja(i.real.dataSync(),i.imag.dataSync()):p=this.getValuesFromTexture(e),m&&(this.downloadWaitMs+=bt()-d),this.convertAndCacheOnCPU(e,p)},t.prototype.read=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,m,v,g,x,b,y,w,C,I,S;return J(this,function(_){switch(_.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise(function(E){return n.push(E)})];if(o=this.texData.get(e),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new pr(i,Kr):new ce(i,Kr),h=this.runWebGLProgram(f,[{dataId:e,shape:i,dtype:u}],u),d=this.read(h.dataId),this.disposeData(h.dataId),[2,d];if(a!=null)return[2,this.convertAndCacheOnCPU(e)];if(!U().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&U().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&U().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(e),v=this.texData.get(m.dataId),p=(S=this.gpgpu).createBufferFromTexture.apply(S,[v.texture].concat(xr(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:_.sent(),_.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return x=_.sent(),b=x[0],y=x[1],g=Ja(b,y),[3,5];case 4:p==null?g=this.getValuesFromTexture(e):(w=Z(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),_.label=5;case 5:return m!=null&&this.disposeData(m.dataId),C=this.convertAndCacheOnCPU(e,g),I=this.pendingRead.get(e),this.pendingRead.delete(e),I.forEach(function(E){return E(C)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,C]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var o=e[n];if(!uc(o))throw U().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.isPacked,u=Z(a);if(U().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(xr(a))).subarray(0,u);return this.disposeData(c.dataId),f}var h=U().getBool("WEBGL_PACK")&&s===!0,d=h?ao(a):a,p=h?new Dp(d):new Ap(d),m=this.runWebGLProgram(p,[{shape:d,dtype:i,dataId:e}],"float32"),v=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),g},t.prototype.time=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c;return J(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,e(),i=$t(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=$t(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=ju(c),u.getExtraProfileInfo=function(){return c.map(function(f,h){return{name:s[h],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:bt(),endMs:null}},t.prototype.endTimer=function(e){return U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=bt(),e)},t.prototype.getQueryTime=function(e){return Q(this,void 0,void 0,function(){var n;return J(this,function(o){return U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var h=this.texData.get(e);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return U().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=F.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<n})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:F.keep(e.clone()),imag:F.keep(n.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,o);if(Z(o)===0)return $e([],o,e.dtype);var a=this.texData.get(e.dataId).isPacked,i=Ei(e.shape,n,o);if(a||!i){var s=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new uv(o):new sv(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,o)},t.prototype.shallowSlice=function(e,n,o){var a=this.texData.get(e.dataId),i=this.makeOutput(o,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=e.dtype;var u=ki(n,e.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(e,n,o,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,o,a);var i=Oo(n,o,a);if(i.some(function(u){return u===0}))return $e([],i);var s=new cv(n,a,i);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var o=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ov(e.shape,n):new rv(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var o=e.map(function(d){return yt(d)}),a=e.map(function(d){return Pt(d)});return Ke(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>U().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),n),u=this.concat(e.slice(i),n);return this.concat([s,u],n)}if(U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new vp(e.map(function(d){return d.shape}),n);return this.compileAndRun(c,e)}var l=Sn(e.map(function(d){return d.shape}),n),f=e.map(function(d){return d.as2D(-1,Z(d.shape.slice(n)))}),h=new pp(f.map(function(d){return d.shape}));return this.compileAndRun(h,f).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(U().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,nu,e.dtype);var n=new ce(e.shape,nu);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,o,a){var i=o?e.shape[2]:e.shape[1],s=a?n.shape[1]:n.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,h=s===1?n.as3D(c,1,u):n;return this.multiply(l,h).sum(f,!0)}var d=He(e.dtype,n.dtype),p=new la(e.shape,[c,i,s],o,a);return this.compileAndRun(p,[e,n],d)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=a?n.shape[2]:n.shape[1],f=i?o.shape[1]:o.shape[2],h=n.shape[0],d=He(n.dtype,o.dtype),p=s!=null,m=c!=null,v=u?$r(u,!0):null,g=new la(n.shape,[h,l,f],a,i,p,v,m),x=[n,o];return s&&x.push(s),c&&x.push(c),this.compileAndRun(g,x,d)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),a=this.texData.get(n.dataId),i=new Hs(cp,e.shape,n.shape),s=new Hs(lp,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,qs,e.dtype);var h=new Te(qs,e.shape,n.shape);return this.compileAndRun(h,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){var u=[e,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),U().getBool("WEBGL_PACK_NORMALIZATION")){var f=new up(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(f,u)}var h=new sp(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(h,u)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){var s=U().getBool("WEBGL_PACK_NORMALIZATION")?new Up(e.shape,n,o,a,i):new Vp(e.shape,n,o,a,i);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){var c=new zp(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(i){return _r(i)});return Jc(se(e.shape,e.dtype,o),n)}var a=new fv(e.shape,n);return this.compileAndRun(a,[e])},t.prototype.pad=function(e,n,o){var a=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new $p(e.shape,n,o):new Xp(e.shape,n,o);return this.compileAndRun(a,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var o=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new dv(e.shape,n):new hv(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,n,o){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,o);var a=new Op(e.shape,n.size,o);return this.compileAndRun(a,[e,n])},t.prototype.batchToSpaceND=function(e,n,o){R(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(f,h){return f*h}),i=yo(e.shape,n,a),s=xo(i.length,n.length),u=bo(e.shape,n,a),c=zc(o,n.length),l=Uc(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){R(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=yo(u.shape,n,a,!1),l=xo(c.length,n.length,!1),f=bo(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.reduce=function(e,n,o){var a=e.shape[0],i=e.shape[1],s=io(i),u=new Yp({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,n,o)},t.prototype.argReduce=function(e,n,o){o===void 0&&(o=null);var a=e.shape[0],i=e.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=io(i),u=new Jd({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:e.shape,i=io(a[a.length-1]),s=new op(a,i,n,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){at("sum",n,e.rank);var o=Xe(e.shape,n),a=o[0],i=Z(o[1]),s=e.as2D(-1,i),u=aa(e.dtype);return this.reduce(s,"sum",u).reshape(a)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var o=Xe(e.shape,n),a=o[0],i=Z(o[1]),s=e.as2D(-1,i),u=aa(e.dtype);return this.reduce(s,"prod",u).reshape(a)},t.prototype.unsortedSegmentSum=function(e,n,o){var a=0,i=Rt([a],e.rank),s=e;i!=null&&(s=e.transpose(i),a=It(1,e.rank)[0]);var u=function(d,p,m){for(var v=[],g=d.length,x=0;x<g;x++)x!==p?v.push(d[x]):v.push(m);return v}(s.shape,a,o),c=Z([s.shape[a]]),l=s.as2D(-1,c),f=aa(e.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",n,f,o).reshape(u);return i!=null&&(h=h.transpose(Mo(i))),h},t.prototype.segOpCompute=function(e,n,o,a,i){var s=e.shape[0],u=e.shape[1],c=function(h,d){var p,m=!1;for(h<=_i?(p=h,m=!0):p=po(h,Math.floor(Math.sqrt(h)));!m;)p>d||p===h?m=!0:p=po(h,p+1);return p}(u,i),l=new av({windowSize:c,inSize:u,batchSize:s,numSegments:i}),f=this.compileAndRun(l,[e,o],a);return f.shape[1]===i?f:(o=go(0,i).tile([u/c]),this.segOpCompute(f,n,o,a,i))},t.prototype.argMinMaxReduce=function(e,n,o){var a=[n];if(at("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,e.rank),!U().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=Xe(e.shape,a),s=i[0],u=Z(i[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,o,a){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var i=new Ep(e.shape,o,a);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,n){if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var o=new Te("return float(a == b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Te("return float(a != b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Te("return float(a < b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Te("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Te("return float(a > b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Te("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new ce(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Te("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Te("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.select=function(e,n,o){var a=new iv(e.rank,n.shape,n.rank);return this.compileAndRun(a,[e,n,o],He(n.dtype,o.dtype))},t.prototype.where=function(e){vo("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return Ti(e.shape,n)},t.prototype.topk=function(e,n,o){return Zc(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){at("min",n,e.rank);var o=Xe(e.shape,n),a=o[0],i=Z(o[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var o=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new jt(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.mod=function(e,n){var o=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new jt(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);at("max",n,e.rank);var o=Xe(e.shape,n),a=o[0],i=Z(o[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var o=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new jt(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.all=function(e,n){at("all",n,e.rank);var o=Xe(e.shape,n),a=o[0],i=Z(o[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},t.prototype.any=function(e,n){at("any",n,e.rank);var o=Xe(e.shape,n),a=o[0],i=Z(o[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},t.prototype.realDivide=function(e,n){if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Te(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Te(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,ua);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var o=He(e.dtype,n.dtype);if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,ua,o);var a=new Te(ua,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.packedUnaryOp=function(e,n,o){var a=new pr(e.shape,n);return this.compileAndRun(a,[e],o)},t.prototype.packedBinaryOp=function(e,n,o,a,i){i===void 0&&(i=!1);var s=new jt(o,e.shape,n.shape,i);return this.compileAndRun(s,[e,n],a)},t.prototype.complexSeparableBinaryOp=function(e,n,o){var a=this,i=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(h){var d=h[0],p=h[1],m=a.makeComplexComponentTensorInfo(e,d),v=a.makeComplexComponentTensorInfo(n,p),g=new Te(o,e.shape,n.shape);return a.compileAndRun(g,[m,v],He(d.dtype,p.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>U().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),o=this.addN(e.slice(0,n)),a=this.addN(e.slice(n));return this.addN([o,a])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return He(c,l)}),s=e.map(function(c){return c.shape}),u=U().getBool("WEBGL_PACK")?new Qd(e[0].shape,s):new Yd(e[0].shape,s);return this.compileAndRun(u,e,i)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,ca);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var o=He(e.dtype,n.dtype);if(U().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,ca,e.dtype);var a=new Te(ca,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.pow=function(e,n){var o=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new jt(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),a=He(e.dtype,n.dtype);return this.compileAndRun(o,[e,n],a)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(U().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ru,e.dtype);var n=new ce(e.shape,ru);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(U().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ou,e.dtype);var n=new ce(e.shape,ou);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new ce(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new ce(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new ce(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new ce(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new ce(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(U().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,au,e.dtype);var n=new ce(e.shape,au);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(U().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,iu,e.dtype);var n=new ce(e.shape,iu);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var o=Be([n],e.shape),a=this.max(e,o),i=rt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(U().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new ce(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new ce(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new ce(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new ce(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new ce(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=U().getBool("WEBGL_PACK")?new pr(e.shape,kl):new ce(e.shape,Cl),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=U().getBool("WEBGL_PACK")?new pr(e.shape,Rl):new ce(e.shape,_l),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var o=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new jt(ol,e.shape,n.shape):new Te(rl,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.elu=function(e){if(U().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Il,e.dtype);var n=new ce(e.shape,El);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var o=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new jt(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new Te("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.selu=function(e){var n=new ce(e.shape,vv);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new ce(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,o){var a,i=(a=U().getBool("WEBGL_PACK_CLIP")?new hp(e.shape):new fp(e.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(U().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,tu,e.dtype);var n=new ce(e.shape,tu);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),o=new dp(e.shape),a=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(o,a)},t.prototype.sigmoid=function(e){var n=new ce(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new ce(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new ce(e.shape,mv);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new ce(e.shape,gv);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new ce(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new ce(e.shape,yv);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new ce(e.shape,xv);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new ce(e.shape,bv);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var o=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new jt(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.sinh=function(e){var n=new ce(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new ce(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new ce(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new ce(e.shape,wv);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new ce(e.shape,Cv);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new ce(e.shape,_v);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new ce(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var o=new ce(e.shape,function(a){return a===void 0&&(a=0),St+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(n));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,n,o,a,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],h=o.outChannels,d=o.dataFormat==="channelsLast",p=(f===1||h===1)&&l>1e3,m=u[2]%2!=0&&!!c.isPacked;if(p||!U().getBool("WEBGL_LAZILY_UNPACK")||!U().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var v=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,v,o.inChannels]),x=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:x,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var b=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,b,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,R(yr(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var C=this.reshape(n,[1,o.inChannels,o.outChannels]),I=this.fusedBatchMatMul({a:y,b:C,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),S=this.texData.get(I.dataId);return R(S.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,S.shape=o.outShape,F.makeTensorFromDataId(I.dataId,o.outShape,I.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,h=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,m=h*f,v=[p,m],g=e.squeeze([0]),x=n.reshape([1,p,-1]),b=new Wp(v,g.shape,o),y=this.compileAndRun(b,[g]).reshape([1,v[0],v[1]]),w=a!=null,C=s!=null,I=i?$r(i,!0):null,S=new la(y.shape,[1,m,o.outChannels],!0,!1,w,I,C),_=[y,x];a&&_.push(a),C&&_.push(s);var E=this.compileAndRun(S,_);return d?E.reshape([1,h,f,o.outChannels]):E.reshape([1,o.outChannels,h,f])},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(U().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,f=s?$r(s,!1):null,h=new js(a,c,f,l),d=[n,o];return i&&d.push(i),u&&d.push(u),this.compileAndRun(h,d)},t.prototype.conv2d=function(e,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,o);if(U().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,o);var a=new js(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerInput=function(e,n,o){var a=new gp(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerFilter=function(e,n,o){var a=new mp(o);return this.compileAndRun(a,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,o=e.input,a=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=U().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,f=u?$r(u,l):null,h=[o,a],d=s!=null,p=c!=null;return d&&h.push(s),p&&h.push(c),l?(n=new Xs(i,d,f,p),this.compileAndRun(n,h)):(n=new Ks(i,d,f,p),this.compileAndRun(n,h))},t.prototype.depthwiseConv2D=function(e,n,o){var a;return U().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new Xs(o),this.compileAndRun(a,[e,n])):(a=new Ks(o),this.compileAndRun(a,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,o){var a=new wp(o);return this.compileAndRun(a,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){var a=new bp(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3d=function(e,n,o){var a=new Cp(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerInput=function(e,n,o){var a=new xp(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerFilter=function(e,n,o){var a=new yp(o);return this.compileAndRun(a,[e,n])},t.prototype.maxPool=function(e,n){var o=new fa(n,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,n){var o=new fa(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,o,a){var i=new fa(a,"max",!0),s=this.compileAndRun(i,[n]),u=new Gp(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,o){var a=new ap(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.cast=function(e,n){return Ii(e,n,this)},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.avgPool3d=function(e,n){var o=new ha(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,o){var a=new ip(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var o=new ha(n,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,o,a){var i=new ha(a,"max",!0),s=this.compileAndRun(i,[n]),u=new Hp(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var o=this.texData.get(e.dataId);if(o.isPacked&&!yr(e.shape,n)&&(o.texture===null||!yr(o.shape,n))){var a=this.packedReshape(e,n);return F.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return Co(e,n)},t.prototype.resizeBilinear=function(e,n,o,a){var i=U().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new ev(e.shape,n,o,a):new Zp(e.shape,n,o,a);return this.compileAndRun(i,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,o){var a=new Jp(e,n,o);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighbor=function(e,n,o,a){var i=new nv(e.shape,n,o,a);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){var a=new tv(e,n,o);return this.compileAndRun(a,[e])},t.prototype.multinomial=function(e,n,o,a){var i=n?e:Qt(e),s=i.shape[0],u=i.shape[1],c=new qp(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(e,n,o,a){var i=new jp(e.size,n,o,a);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var n=new Sp(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return vo("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Ai(e.dataSync(),n.dataSync(),o,a,i)},t.prototype.cropAndResize=function(e,n,o,a,i,s){var u=new _p(e.shape,n.shape,a,i,s);return this.compileAndRun(u,[e,n,o],"float32")},t.prototype.depthToSpace=function(e,n,o){R(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var a=e.shape[0],i=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=i*n,l=s*n,f=u/(n*n),h=new Ip(o==="NHWC"?[a,c,l,f]:[a,f,c,l],n,o);return this.compileAndRun(h,[e])},t.prototype.split=function(e,n,o){return Qc(e,n,o)},t.prototype.scatterND=function(e,n,o){var a=Sr(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=[l/u,u],h=e.reshape([s,i]),d=n.reshape([s,u]);if(l===0)return Co($e([]),o);var p=X(0),m=new Js(s,i,h.rank,d.rank,c,f);return this.compileAndRun(m,[d,h,p]).reshape(o)},t.prototype.sparseToDense=function(e,n,o,a){var i=Sr(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,f=new Js(u,s,e.rank,n.rank,c,[l,1]);return this.compileAndRun(f,[n,e,a]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var o=this.texData.get(e.dataId),a=new Ys(Np,e.shape,n),i=new Ys(Mp,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=Ci(e,n),s=i[0],u=i[1],c=i[2],l=i[3],f=n.reshape([u,a]),h=e.reshape([e.size/c,c]),d=new Bp(a,l,[u,c]);return this.compileAndRun(d,[h,f]).reshape(s)},t.prototype.fill=function(e,n,o){if((o=o||sr(n))==="string"){var a=Cr(o,Z(e));return a.fill(n),F.makeTensor(a,e,o,this)}var i=new Pp(e,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,o){return Si(e,n,o)},t.prototype.makeTensorInfo=function(e,n){var o=this.write(null,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var o=this.makeTensorInfo(e,n).dataId;return F.makeTensorFromDataId(o,e,n,this)},t.prototype.unpackTensor=function(e){var n=new kv(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new Kp(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var o=[Rr(e.shape)].concat(Ir(e.shape)),a={dtype:e.dtype,shape:o,dataId:e.dataId},i=[Rr(n)].concat(Ir(n)),s=new Qp(i,o),u=this.runWebGLProgram(s,[a],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,o=this.texData.get(e),a=o.isPacked,i=o.shape,s=o.dtype,u=ao(i);return n=a?new Rp(u):new kp(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===kr.DENSE){var l=xr(e.outputShape);c.texShape=l.map(function(b){return 2*b})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),Z(u.shape)===0)return c.values=rr(u.dtype,0),u;var f=[],h=n.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(b.dataId);if(y.texture==null){if(!e.packedInputs&&Z(b.shape)<=U().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=b.shape)}else if(!!y.isPacked!=!!e.packedInputs)b=y.isPacked?s.unpackTensor(b):s.packTensor(b),f.push(b),y=s.texData.get(b.dataId);else if(y.isPacked&&!yr(y.shape,b.shape)){var w=b,C=b.shape;b.shape=y.shape,b=s.packedReshape(b,C),f.push(b),y=s.texData.get(b.dataId),w.shape=C}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},m=function(b,y,w){var C="";y.concat(w).forEach(function(_){var E=_.texData!=null&&_.texData.slice!=null&&_.texData.slice.flatOffset>0,D=_.isUniform?"uniform":_.texData.texShape;C+=_.shape+"_"+D+"_"+E});var I=b.userCode,S=b.constructor.name;return S+="_"+C+"_"+I}(e,h,p),v=this.getAndSaveBinary(m,function(){return function(b,y,w,C){var I=y.userCode,S=w.map(function(O,H){var G={logicalShape:O.shape,texShape:O.isUniform?null:O.texData.texShape,isUniform:O.isUniform,isPacked:!O.isUniform&&O.texData.isPacked,flatOffset:null};return O.texData!=null&&O.texData.slice!=null&&O.texData.slice.flatOffset>0&&(G.flatOffset=O.texData.slice.flatOffset),{name:y.variableNames[H],shapeInfo:G}}),_=S.map(function(O){return O.shapeInfo}),E={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},D=Zd(S,E,I,y.packedInputs),A=b.createProgram(D),P=null,M=b.getUniformLocation(A,"NAN",!1);U().getNumber("WEBGL_VERSION")===1&&(P=b.getUniformLocation(A,"INFINITY",!1));for(var B={},W=0;W<y.variableNames.length;W++){var N=y.variableNames[W];B[N]=b.getUniformLocation(A,N,!1),B["offset"+N]=b.getUniformLocation(A,"offset"+N,!1)}return{program:y,source:D,webGLProgram:A,uniformLocations:B,inShapeInfos:_,outShapeInfo:E,infLoc:P,nanLoc:M}}(s.gpgpu,e,h,p)}),g=this.activeTimers!=null;if(g&&(d=this.startTimer()),function(b,y,w,C,I){Qs(y.inShapeInfos,w),Qs([y.outShapeInfo],[C]);var S=C.texData.texture,_=C.texData.texShape;C.texData.isPacked?b.setOutputPackedMatrixTexture(S,_[0],_[1]):b.setOutputMatrixTexture(S,_[0],_[1]),b.setProgram(y.webGLProgram),U().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&b.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&b.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(E,D){var A=y.program.variableNames[D],P=y.uniformLocations[A],M=y.uniformLocations["offset"+A];if(P!=null)if(E.isUniform)if(Z(E.shape)<2)b.gl.uniform1f(P,E.uniformValues[0]);else{var B=E.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),b.gl.uniform1fv(P,B)}else E.texData.slice!=null&&M!=null&&b.gl.uniform1i(M,E.texData.slice.flatOffset),b.setInputMatrixTexture(E.texData.texture,P,D)}),I!=null&&I(b,y.webGLProgram),b.executeProgram()}(this.gpgpu,v,h,p,a),f.forEach(function(b){return s.disposeData(b.dataId)}),g&&(d=this.endTimer(d),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(d)})),!U().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var x=this.unpackTensor(u);return this.disposeData(u.dataId),x}return u},t.prototype.compileAndRun=function(e,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(e,n,o,a,i);return F.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(U().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement!="undefined"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=$(function(){if(!U().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=U().getBool("DEBUG");U().set("DEBUG",!1);var o=e.abs(X(1e-8)).dataSync()[0];if(U().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=bt());var d=o.texShape;if(d==null&&(d=kc(a,l),o.texShape=d),s!=null){var p=ao(a),m=void 0,v=d[1],g=d[0],x=s instanceof Uint8Array;l?(v=(n=Mr(d[0],d[1]))[0],g=n[1],m=new Fp(p,[g,v],x)):m=new Tp(p,[g,v],x);var b=this.makeTensorInfo([g,v],i);this.texData.get(b.dataId).usage=x?ht.PIXELS:ht.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),v,g,s);var y=this.runWebGLProgram(m,[b],i,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(y.dataId),o.values=null,h&&(this.uploadWaitMs+=bt()-f)}else{var C=this.acquireTexture(d,c,i,l);o.texture=C}}},t.prototype.convertAndCacheOnCPU=function(e,n){var o=this.texData.get(e),a=o.dtype;return this.releaseGPUData(e),n!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,a)),o.values},t.prototype.acquireTexture=function(e,n,o,a){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,n,a)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*hi(n)},t}($c);ic()&&F.registerBackend("webgl",function(){return new Sl},2);var Iv=T({square_:function(r){var t=k(r,"x","square"),e=[t];return F.runKernelFunc(function(n,o){return o([t]),n.square(t)},{x:t},null,"Square",{},e,[])}}),Tr="SquaredDifference",Al=T({squaredDifference_:function(r,t){var e,n=k(r,"a","squaredDifference"),o=k(t,"b","squaredDifference");e=Ee(n,o),n=e[0],o=e[1],fe(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return F.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},a,function(s,u){var c=u[0],l=u[1],f=X(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},Tr,{},i,[])}}),Sv=T({abs_:function(r){var t=k(r,"x","abs");return t.dtype==="complex64"?F.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):F.runKernelFunc(function(e,n){var o=e.abs(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),Av=T({acos_:function(r){var t=k(r,"x","acos");return F.runKernelFunc(function(e,n){var o=e.acos(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(X(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),Dv=T({acosh_:function(r){var t=k(r,"x","acosh");return F.runKernelFunc(function(e,n){var o=e.acosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Tv=T({asin_:function(r){var t=k(r,"x","asin");return F.runKernelFunc(function(e,n){var o=e.asin(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(X(1).sub(o.toFloat().square()).sqrt())}}})}}),Fv=T({asinh_:function(r){var t=k(r,"x","asinh");return F.runKernelFunc(function(e,n){var o=e.asinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(X(1).add(o.toFloat().square()).sqrt())}}})}}),Nv=T({atan_:function(r){var t=k(r,"x","atan");return F.runKernelFunc(function(e,n){var o=e.atan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),Mv=T({atanh_:function(r){var t=k(r,"x","atanh");return F.runKernelFunc(function(e,n){var o=e.atanh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(X(1).sub(o.toFloat().square()))}}})}}),Pv=T({ceil_:function(r){var t=k(r,"x","ceil");return F.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),Pi=T({clipByValue_:function(r,t,e){var n=k(r,"x","clipByValue");R(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[n],a={min:t,max:e};return F.runKernelFunc(function(i,s){var u=i.clip(n,t,e);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),ve(i))}}},"ClipByValue",a,o)}}),Ov=T({cos_:function(r){var t=k(r,"x","cos"),e=[t];return F.runKernelFunc(function(n,o){var a=n.cos(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}},"Cos",{},e)}}),Bv=T({cosh_:function(r){var t=k(r,"x","cosh");return F.runKernelFunc(function(e,n){var o=e.cosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),Lv=T({erf_:function(r){var t=k(r,"x","erf");return R(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),F.runKernelFunc(function(e,n){var o=e.erf(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Za=T({exp_:function(r){var t=k(r,"x","exp");return F.runKernelFunc(function(e,n){var o=e.exp(t);return n([o]),o},{x:t},function(e,n){return{x:function(){return e.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),Wv=T({expm1_:function(r){var t=k(r,"x","expm1");return F.runKernelFunc(function(e,n){var o=e.expm1(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.exp())}}})}}),Vv=T({floor_:function(r){var t=k(r,"x","floor");return F.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),zv=T({log_:function(r){var t=k(r,"x","log"),e=[t];return F.runKernelFunc(function(n,o){var a=n.log(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}},"Log",{},e)}}),Uv=T({log1p_:function(r){var t=k(r,"x","log1p");return F.runKernelFunc(function(e,n){var o=e.log1p(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.add(1))}}})}}),Gv=T({logSigmoid_:function(r){var t=k(r,"x","logSigmoid");return F.runKernelFunc(function(e,n){var o=e.softplus(t.neg()).neg();return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),_o=T({neg_:function(r){var t=k(r,"x","neg"),e=[t];return F.runKernelFunc(function(n){return n.neg(t)},{x:t},function(n){return{x:function(){return n.neg()}}},"Neg",{},e)}}),Hv=T({reciprocal_:function(r){var t=k(r,"x","reciprocal");return F.runKernelFunc(function(e,n){var o=e.reciprocal(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.square().neg())}}})}}),qv=T({round_:function(r){var t=k(r,"x","round");return F.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),Dl=T({rsqrt_:function(r){var t=k(r,"x","rsqrt"),e=[t];return F.runKernelFunc(function(n,o){var a=n.rsqrt(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Tl=T({sigmoid_:function(r){var t=k(r,"x","sigmoid");return F.runKernelFunc(function(e,n){var o=e.sigmoid(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.mul(X(1).sub(o)))}}},"Sigmoid")}}),jv=T({sign_:function(r){var t=k(r,"x","sign");return F.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),Kv=T({isNaN_:function(r){var t=k(r,"x","isNaN");return F.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),Xv=T({isInf_:function(r){var t=k(r,"x","isInf");return F.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),$v=T({isFinite_:function(r){var t=k(r,"x","isFinite");return F.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),Yv=T({sin_:function(r){var t=k(r,"x","sin"),e=[t];return F.runKernelFunc(function(n,o){var a=n.sin(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}},"Sin",{},e)}}),Qv=T({sinh_:function(r){var t=k(r,"x","sinh");return F.runKernelFunc(function(e,n){var o=e.sinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),Jv=T({softplus_:function(r){var t=k(r,"x","softplus");return F.runKernelFunc(function(e,n){var o=e.softplus(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),Zv=T({sqrt_:function(r){var t=k(r,"x","sqrt");return F.runKernelFunc(function(e,n){var o=e.sqrt(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),em=T({step_:function(r,t){t===void 0&&(t=0);var e=k(r,"x","step");return F.runKernelFunc(function(n){return n.step(e,t)},{$x:e},function(n){return{$x:function(){return ve(n)}}})}}),tm=T({tan_:function(r){var t=k(r,"x","tan");return F.runKernelFunc(function(e,n){var o=e.tan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.cos().square())}}})}}),nm=T({tanh_:function(r){var t=k(r,"x","tanh");return F.runKernelFunc(function(e,n){var o=e.tanh(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return X(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function Fl(r,t,e,n,o,a){var i,s,u=k(r,"x","batchNorm"),c=k(t,"mean","batchNorm"),l=k(e,"variance","batchNorm");return o!=null&&(i=k(o,"scale","batchNorm")),n!=null&&(s=k(n,"offset","batchNorm")),R(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),R(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),R(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&R(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&R(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Or(u,c,l,s,i,a)}function Nl(r,t,e,n,o,a){var i,s,u=k(r,"x","batchNorm"),c=k(t,"mean","batchNorm"),l=k(e,"variance","batchNorm");return o!=null&&(i=k(o,"scale","batchNorm")),n!=null&&(s=k(n,"offset","batchNorm")),R(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),R(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),R(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&R(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&R(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Or(u,c,l,s,i,a)}function Ml(r,t,e,n,o,a){var i,s,u=k(r,"x","batchNorm"),c=k(t,"mean","batchNorm"),l=k(e,"variance","batchNorm");return o!=null&&(i=k(o,"scale","batchNorm")),n!=null&&(s=k(n,"offset","batchNorm")),R(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),R(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),R(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&R(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&R(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Or(u,c,l,s,i,a)}function Or(r,t,e,n,o,a){a==null&&(a=.001);var i,s,u,c=k(r,"x","batchNorm"),l=k(t,"mean","batchNorm"),f=k(e,"variance","batchNorm");o!=null&&(i=k(o,"scale","batchNorm")),n!=null&&(s=k(n,"offset","batchNorm")),R(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),R(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),R(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,i];return F.runKernelFunc(function(d,p){var m=d.batchNormalization(u,Yr(l),Yr(f),a,Yr(i),Yr(s));return p([c,l,f,i]),m},{x:c,mean:l,variance:f,scale:i,offset:s},function(d,p){var m=p,v=m[0],g=m[1],x=m[2],b=m[3],y=b==null?X(1):b,w=Oe(g.shape,u.shape),C=[];if(g.rank===1){for(var I=0;I<u.shape.length-1;++I)C.push(u.shape[I]);C.push(1)}var S=v.sub(g),_=d.mul(y),E=Dl(x.add(X(a))),D=E.mul(E).mul(E).mul(X(-.5));return{x:function(){return g.rank===1?d.mul(Yn(E.as4D(1,1,1,g.shape[0]),C)).mul(y).reshape(v.shape):d.mul(E).mul(y).reshape(v.shape)},mean:function(){var A=E.mul(X(-1)).mul(_);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},variance:function(){var A=D.mul(S).mul(_);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},scale:function(){var A=S.mul(E),P=d.mul(A);return g.rank===1&&(P=P.sum(w)),P.reshape(g.shape)},offset:function(){var A=d;return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:a},h).reshape(c.shape)}function Yr(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function Wo(){Fc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var rm=T({batchNormalization2d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Wo(),Fl(r,t,e,a,o,n)}}),om=T({batchNormalization3d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Wo(),Nl(r,t,e,a,o,n)}}),am=T({batchNormalization4d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Wo(),Ml(r,t,e,a,o,n)}}),im=T({batchNormalization_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Wo(),Or(r,t,e,a,o,n)}}),Pl=T({batchNorm_:Or}),sm=T({batchNorm2d_:Fl}),um=T({batchNorm3d_:Nl}),cm=T({batchNorm4d_:Ml}),Vo=T({logicalAnd_:function(r,t){var e=k(r,"a","logicalAnd","bool"),n=k(t,"b","logicalAnd","bool");return fe(e.shape,n.shape),F.runKernelFunc(function(o){return o.logicalAnd(e,n)},{a:e,b:n},null,"LogicalAnd")}}),lm=T({logicalNot_:function(r){var t=k(r,"x","logicalNot","bool");return F.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),Ol=T({logicalOr_:function(r,t){var e=k(r,"a","logicalOr","bool"),n=k(t,"b","logicalOr","bool");return fe(e.shape,n.shape),F.runKernelFunc(function(o){return o.logicalOr(e,n)},{$a:e,$b:n})}}),fm=T({logicalXor_:function(r,t){var e=k(r,"a","logicalXor","bool"),n=k(t,"b","logicalXor","bool");return fe(e.shape,n.shape),Ol(r,t).logicalAnd(Vo(r,t).logicalNot())}}),Dn=T({where_:function(r,t,e){var n=k(t,"a","where"),o=k(e,"b","where"),a=k(r,"condition","where","bool");return be(n.shape,o.shape,"Error in where: "),a.rank===1?R(a.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):be(a.shape,o.shape,"Error in where: "),F.runKernelFunc(function(i,s){var u=i.select(a,n,o);return s([a]),u},{$condition:a,$a:n,$b:o},function(i,s){var u=s[0];return{$condition:function(){return ve(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),Bl=function(r){return Q(this,void 0,void 0,function(){var t,e,n;return J(this,function(o){switch(o.label){case 0:return[4,(t=k(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),n=Ti(t.shape,e),r!==t&&t.dispose(),[2,n]}})})},le=T({add_:function(r,t){var e,n=k(r,"a","add"),o=k(t,"b","add");e=Ee(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return F.runKernelFunc(function(i){return i.add(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Oe(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Oe(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),hm=T({addN_:function(r){R(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),R(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(o,a){return k(o,"tensors"+a,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!Pe(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=t;return F.runKernelFunc(function(o){return o.addN(t)},n,function(o){var a={};return t.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),dm=T({addStrict_:function(r,t){var e=k(r,"a","addStrict"),n=k(t,"b","addStrict");return be(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),pm=T({atan2_:function(r,t){var e,n=k(r,"a","atan2"),o=k(t,"b","atan2");e=Ee(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=le(u.square(),c.square()),f=i.mul(c.div(l)),h=Oe(u.shape,a);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=le(u.square(),c.square()),f=_o(i.mul(u.div(l))),h=Oe(c.shape,a);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}})}}),wt=T({div_:function(r,t){var e,n=k(r,"a","div"),o=k(t,"b","div");if(e=Ee(n,o),n=e[0],o=e[1],n.dtype==="int32"&&o.dtype==="int32")return Ll(n,o);var a=fe(n.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Oe(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Oe(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"Div")}}),vm=T({divNoNan_:function(r,t){var e,n=k(r,"a","div"),o=k(t,"b","div");n=(e=Ee(n,o))[0],o=e[1];var a=wt(n,o),i=ve(a),s=o.equal(i);return Dn(s,i,a)}}),mm=T({divStrict_:function(r,t){var e=k(r,"a","div"),n=k(t,"b","div");return be(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),Ll=T({floorDiv_:function(r,t){var e,n=k(r,"a","floorDiv"),o=k(t,"b","floorDiv");e=Ee(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Oe(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Oe(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"FloorDiv")}}),Oi=T({maximum_:function(r,t){var e,n=k(r,"a","maximum"),o=k(t,"b","maximum");return e=Ee(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),fe(n.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.maximum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),gm=T({maximumStrict_:function(r,t){var e=k(r,"a","maximumStrict"),n=k(t,"b","maximumStrict");return be(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),Wl=T({minimum_:function(r,t){var e,n=k(r,"a","minimum"),o=k(t,"b","minimum");return e=Ee(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),fe(n.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.minimum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),ym=T({minimumStrict_:function(r,t){var e=k(r,"a","minimumStrict"),n=k(t,"b","minimumStrict");return be(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),xm=T({mod_:function(r,t){var e,n=k(r,"a","mod"),o=k(t,"b","mod");e=Ee(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Oe(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),f=Oe(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),bm=T({modStrict_:function(r,t){var e=k(r,"a","modStrict"),n=k(t,"b","modStrict");return be(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),et=T({mul_:function(r,t){var e,n=k(r,"a","mul"),o=k(t,"b","mul");e=Ee(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),f=Oe(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Oe(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),wm=T({mulStrict_:function(r,t){var e=k(r,"a","mul"),n=k(t,"b","mul");return be(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),Eo=T({pow_:function(r,t){var e,n=k(r,"base","pow"),o=k(t,"exp","pow");e=Ee(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape),i=[n,o];return F.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),d=s.mul(h.mul(c.pow(h.sub(X(1))))),p=Oe(c.shape,a);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var h=c.greater(0),d=c.log().where(h,ve(c)),p=s.mul(f.mul(d)),m=Oe(l.shape,a);return m.length>0&&(p=p.sum(m)),p.reshape(l.shape)}}},"Pow",{},i,[!0])}}),Cm=T({powStrict_:function(r,t){return be(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),_m=T({squaredDifferenceStrict_:function(r,t){var e=k(r,"a","squaredDifferenceStrict"),n=k(t,"b","squaredDifferenceStrict");return be(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),Ue=T({sub_:function(r,t){var e,n=k(r,"a","sub"),o=k(t,"b","sub");e=Ee(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return F.runKernelFunc(function(i){return i.subtract(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Oe(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Oe(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),Em=T({subStrict_:function(r,t){var e=k(r,"a","subStrict"),n=k(t,"b","subStrict");return be(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),Vl=T({equal_:function(r,t){var e,n=k(r,"a","equal"),o=k(t,"b","equal");return e=Ee(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),F.runKernelFunc(function(a){return a.equal(n,o)},{$a:n,$b:o})}}),km=T({equalStrict_:function(r,t){var e=k(r,"a","equalStrict"),n=k(t,"b","equalStrict");return be(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),Rm=T({greater_:function(r,t){var e,n=k(r,"a","greater"),o=k(t,"b","greater");return e=Ee(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),F.runKernelFunc(function(a){return a.greater(n,o)},{a:n,b:o},null,"Greater")}}),zl=T({greaterEqual_:function(r,t){var e,n=k(r,"a","greaterEqual"),o=k(t,"b","greaterEqual");return e=Ee(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return ve(s)},b:function(){return ve(u)}}},"GreaterEqual")}}),Im=T({greaterEqualStrict_:function(r,t){var e=k(r,"a","greaterEqualStrict"),n=k(t,"b","greaterEqualStrict");return be(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),Sm=T({greaterStrict_:function(r,t){var e=k(r,"a","greaterStrict"),n=k(t,"b","greaterStrict");return be(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),Am=T({less_:function(r,t){var e,n=k(r,"a","less"),o=k(t,"b","less");return e=Ee(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),F.runKernelFunc(function(a){return a.less(n,o)},{a:n,b:o},null,"Less")}}),Dm=T({lessEqual_:function(r,t){var e,n=k(r,"a","lessEqual"),o=k(t,"b","lessEqual");return e=Ee(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s},{a:n,b:o},null,"LessEqual")}}),Tm=T({lessEqualStrict_:function(r,t){var e=k(r,"a","lessEqualStrict"),n=k(t,"b","lessEqualStrict");return be(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),Fm=T({lessStrict_:function(r,t){var e=k(r,"a","lessStrict"),n=k(t,"b","lessStrict");return be(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),Nm=T({notEqual_:function(r,t){var e,n=k(r,"a","notEqual"),o=k(t,"b","notEqual");return e=Ee(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),F.runKernelFunc(function(a){return a.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),Mm=T({notEqualStrict_:function(r,t){var e=k(r,"a","notEqualStrict"),n=k(t,"b","notEqualStrict");return be(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function su(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function uu(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var Bi=T({gather_:function(r,t,e){e===void 0&&(e=0);var n=k(r,"x","gather"),o=k(t,"indices","gather","int32");e=Be(e,n.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],f=1,h=1,d=0;d<u;d++)l.push(i.shape[d]),f*=i.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<i.rank;d++)l.push(i.shape[d]),h*=i.shape[d];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}}(n,o,e);return F.runKernelFunc(function(i,s){var u=i.gather(n,o.flatten(),e);return s([o]),u},{x:n,indices:o},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,f=c.slice(0,e),h=f.length,d=c.slice(e,c.length).slice(1),p=d.length,m=su(0,h),v=su(h+1,h+1+p),g=uu([f,[l],d]),x=i.reshape(g),b=u.reshape([l]),y=uu([[h],m,v]),w=x.transpose(y),C=Ul(w,b,n.shape[e]),I=Mo(y);return C=C.transpose(I)},indices:function(){return u}}},"Gather",{axis:e}).reshape(a.outputShape)}}),Ul=T({unsortedSegmentSum_:function(r,t,e){var n=k(r,"x","unsortedSegmentSum"),o=k(t,"segmentIds","unsortedSegmentSum","int32");return R(Ae(e),function(){return"numSegments must be of dtype int"}),F.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(n,o,e);return i([o]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=Oi(c,ve(c)),f=Bi(u,l),h=zl(c,X(0,"int32")),d=f.rank-h.rank,p=0;p<d;++p)h=gt(h,p+1);h=Vo(h,cr(f.shape,"bool"));var m=ve(f);return Dn(h,f,m)}(a,s)}}})}}),Pm=function(r,t,e){return Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,m;return J(this,function(v){switch(v.label){case 0:for(n=k(r,"tensor","boolMask"),o=k(t,"mask","boolMask","bool"),a=e==null?0:e,i=o.rank,s=n.shape,R(i>0,function(){return"mask cannot be scalar"}),be(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),f=n.reshape(l),h=o.reshape([-1]),[4,Bl(h)];case 1:return d=v.sent(),p=d.squeeze([1]),m=Bi(f,p,a),r!==n&&n.dispose(),t!==o&&o.dispose(),p.dispose(),f.dispose(),h.dispose(),d.dispose(),[2,m]}})})};function Gl(r,t,e,n,o,a,i){a===void 0&&(a="NHWC"),R(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),R(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),R(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),R(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=a==="NHWC"?s[3]:s[1],f=a==="NHWC"?u.shape[3]:u.shape[1];R(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),R(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&R(Ae(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=Lo(a),d=gn(s,e.shape,n,1,o,i,!1,h),p=F.runKernelFunc(function(m,v){var g=m.conv2dDerInput(u,e,d);return v([e,u]),g},{dy4D:u,filter:e},function(m,v){var g=v[0],x=v[1];return{dy4D:function(){return xt(m,g,n,o,a,1,i)},filter:function(){return Li(m,x,g.shape,n,o,a,i)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function pa(r){var t=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function Hl(r,t,e,n,o){R(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var a=r,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];R(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),R(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),R(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),R(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),R(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=Dr(a,e.shape,n,1,o),f=F.runKernelFunc(function(h){return h.conv3dDerInput(i,e,l)},{dy5D:i});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var Om=T({conv1d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=k(r,"x","conv1d"),u=k(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),R(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),R(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&R(Ae(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),R(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),R(ot(e,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+a+"'"}),R(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=xt(h,f,[1,e],n,"NHWC",[1,a],i);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),xt=T({conv2d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=k(r,"x","conv2d"),u=k(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),R(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),R(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&R(Ae(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=o==="NHWC"?c.shape[3]:c.shape[1];R(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),R(ot(e,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"});var h=Lo(o),d=gn(c.shape,u.shape,e,a,n,i,!1,h),p=[u,c],m=F.runKernelFunc(function(v,g){var x=v.conv2d(c,u,d);return g([u,c]),x},{x:c,filter:u},function(v,g){var x=g,b=x[0],y=x[1];return R(An(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return ql(y.shape,v,b,e,n,o)},filter:function(){return Li(y,v,b.shape,e,n,o)}}},"Conv2D",d,p);return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Bm=T({conv3d_:function(r,t,e,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=k(r,"x","conv3d"),s=k(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),R(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),R(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),R(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),R(function(h,d){return pa(h)||pa(d)}(e,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),R(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=Dr(u.shape,s.shape,e,a,n),f=F.runKernelFunc(function(h,d){var p=h.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(h,d){R(pa(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var p=d[0],m=d[1];return{x:function(){return Hl(p.shape,h,m,e,n)},$filter:function(){return function(v,g,x,b,y){var w=v;v.rank===4&&(w=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var C=g;C.rank===4&&(C=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),R(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),R(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),R(x.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+x+"."}),R(w.shape[4]===x[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+x[3]+"."}),R(C.shape[4]===x[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+x[4]+")."});var I=Dr(w.shape,x,b,1,y);return F.runKernelFunc(function(S){return S.conv3dDerFilter(w,C,I)},{x5D:w,dy5D:C})}(p,h,m.shape,e,n)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Li=T({conv2dDerFilter_:function(r,t,e,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),R(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),R(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),R(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];R(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),R(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&R(Ae(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=Lo(a),h=gn(s.shape,e,n,1,o,i,!1,f);return F.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,h)},{x4D:s,dy4D:u})}}),ql=T({conv2dDerInput_:Gl}),zo=T({depthwiseConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]);var s=k(r,"x","depthwiseConv2d"),u=k(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),R(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),R(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),R(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),R(ot(e,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),i!=null&&R(Ae(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=gn(c.shape,u.shape,e,a,n,i,!0),h=[c,u],d=F.runKernelFunc(function(p,m){var v=p.depthwiseConv2D(c,u,f);return m([c,u]),v},{x:c,filter:u},function(p,m){R(An(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var v=m[0],g=m[1];return{x:function(){return jl(v.shape,p,g,f)},filter:function(){return Kl(v,p,g.shape,f)}}},"DepthwiseConv2dNative",f,h);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),jl=T({depthwiseConv2dDerInput_:function(r,t,e,n){var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=F.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,n)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),Kl=T({depthwiseConv2dDerFilter_:function(r,t,e,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),F.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,n)},{x4D:o,dy4D:a})}}),Wi=T({separableConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=k(r,"x","separableConv2d"),u=k(t,"depthwiseFilter","separableConv2d"),c=k(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");R(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),R(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),R(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),R(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),R(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var h=u.shape[2],d=u.shape[3];R(c.shape[2]===h*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*d+", but got "+c.shape[2]+"."});var p=zo(l,u,n,o,i,a),m=xt(p,c,1,"valid",i);return f?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Lm=T({conv2dTranspose_:function(r,t,e,n,o,a){return Gl(e,k(r,"x","conv2dTranspose"),k(t,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),Wm=T({conv3dTranspose_:function(r,t,e,n,o){return Hl(e,k(r,"x","conv3dTranspose"),k(t,"filter","conv3dTranspose"),n,o)}}),Uo=T({matMul_:function(r,t,e,n){var o;e===void 0&&(e=!1),n===void 0&&(n=!1);var a=k(r,"a","matMul"),i=k(t,"b","matMul");o=Ee(a,i),a=o[0],i=o[1];var s=e?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],f=a.shape.slice(0,-2),h=i.shape.slice(0,-2),d=Z(f),p=Z(h);R(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),R(Pe(f,h),function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),R(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+n+" must match."});var m=a.shape.slice(0,-2).concat([c,l]),v=e?a.as3D(d,s,c):a.as3D(d,c,s),g=n?i.as3D(p,l,u):i.as3D(p,u,l),x={transposeA:e,transposeB:n};return F.runKernelFunc(function(b,y){var w=b.batchMatMul(v,g,e,n);return y([v,g]),w},{a:v,b:g},function(b,y){var w=y,C=w[0],I=w[1];return e||n?!e&&n?{a:function(){return b.matMul(I,!1,!1)},b:function(){return b.matMul(C,!0,!1)}}:e&&!n?{a:function(){return I.matMul(b,!1,!0)},b:function(){return C.matMul(b,!1,!1)}}:{a:function(){return I.matMul(b,!0,!0)},b:function(){return b.matMul(C,!0,!0)}}:{a:function(){return b.matMul(I,!1,!0)},b:function(){return C.matMul(b,!0,!1)}}},"BatchMatMul",x).reshape(m)}}),Vm=T({dot_:function(r,t){var e=k(r,"t1","dot"),n=k(t,"t2","dot");R(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."});var o=e.rank===1?e.size:e.shape[1],a=n.rank===1?n.size:n.shape[0];return R(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),zm=T({outerProduct_:function(r,t){var e=k(r,"v1","outerProduct"),n=k(t,"v2","outerProduct");return R(e.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."}),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),Br=T({reverse_:function(r,t){var e=k(r,"x","reverse");if(e.rank===0)return e.clone();var n=Be(t,e.shape);return F.runKernelFunc(function(o){return o.reverse(e,n)},{$x:e},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(e)}}),Um=T({reverse1d_:function(r){var t=k(r,"x","reverse");return R(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),Br(t,0)}}),Gm=T({reverse2d_:function(r,t){var e=k(r,"x","reverse");return R(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),Br(e,t)}}),Hm=T({reverse3d_:function(r,t){var e=k(r,"x","reverse");return R(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),Br(e,t)}}),qm=T({reverse4d_:function(r,t){var e=k(r,"x","reverse");return R(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),Br(e,t)}});function Xl(r,t,e,n,o,a){var i=k(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),n==null&&(n=[1,1]),R(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),R(ot(e,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}),a!=null&&R(Ae(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=ar(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Pe(c.inShape,c.outShape))return i.clone();var l=[s],f=F.runKernelFunc(function(h,d){var p=h.maxPool(s,c);return d([s,p]),p},{x:s},function(h,d){var p=d[0],m=d[1];return{x:function(){return function(v,g,x,b,y,w,C,I){var S=k(v,"dy","maxPoolBackprop"),_=k(g,"input","maxPoolBackprop"),E=k(x,"output","maxPoolBackprop");R(_.rank===S.rank,function(){return"Rank of input ("+_.rank+") does not match rank of dy ("+S.rank+")"}),w==null&&(w=[1,1]),R(ot(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),R(S.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+S.rank+"."}),R(_.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+_.rank+"."}),I!=null&&R(Ae(C),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+I+" but got pad "+C+"."});var D=ar(_.shape,b,y,w,C,I);return F.runKernelFunc(function(A){return A.maxPoolBackprop(S,_,E,D)},{$dy:S,$input:_})}(h,p,m,t,e,n,o)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function $l(r,t,e,n,o,a){var i=k(r,"x","avgPool","float32");n==null&&(n=[1,1]),R(ot(e,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),R(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&R(Ae(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=ar(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Pe(c.inShape,c.outShape))return i.clone();var l=F.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(h,d,p,m,v,g){var x=k(h,"dy","avgPoolBackprop"),b=k(d,"input","avgPoolBackprop");R(b.rank===x.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+x.rank+")"}),v==null&&(v=[1,1]),R(ot(m,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+v+"'"});var y=b,w=x,C=!1;b.rank===3&&(C=!0,y=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=x.as4D(1,x.shape[0],x.shape[1],x.shape[2])),R(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),R(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var I=ar(y.shape,p,m,v,g),S=F.runKernelFunc(function(_){return _.avgPoolBackprop(w,y,I)},{dy4D:w,input4D:y});return C?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}(f,s,t,e,n,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Ge=T({maxPool_:function(r,t,e,n,o){return Xl(r,t,e,1,n,o)}}),Lr=T({avgPool_:function(r,t,e,n,o){return $l(r,t,e,1,n,o)}}),jm=T({pool_:function(r,t,e,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=k(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),R(ot(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=ar(s.shape,t,a,o,n),f=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(y,w){var C=y.map(function(_,E){return _+(_-1)*(w[E]-1)}).map(function(_){return _-1}),I=C.map(function(_){return Math.floor(_/2)}),S=C.map(function(_,E){return _-I[E]});return C.map(function(_,E){return[I[E],S[E]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,d=function(y,w,C){var I=C.map(function(M){return M[0]}),S=C.map(function(M){return M[1]}),_=y.concat(I,S),E=w.map(function(M,B){return(M-_[B]%M)%M}),D=S.map(function(M,B){return M+E[B]}),A=w.map(function(M,B){return[I[B],D[B]]}),P=w.map(function(M,B){return[0,E[B]]});return[A,P]}([l.inHeight,l.inWidth],f,c),p=d[0],m=d[1],v=h?n:"valid",g=h?s:Wc(s,f,p),x=(e==="avg"?function(){return $l(g,t,a,1,v)}:function(){return Xl(g,t,a,1,v)})(),b=h?x:Oc(x,f,m);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),Km=T({maxPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=k(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),R(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),R(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),R(ot(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&R(Ae(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Ar(u.shape,t,e,i,n,o,a),f=F.runKernelFunc(function(h,d){var p=h.maxPool3d(u,l);return d([u,p]),p},{x:u},function(h,d){var p=d[0],m=d[1];return{x:function(){return function(v,g,x,b,y,w,C,I){var S=k(v,"dy","maxPool3dBackprop"),_=k(g,"input","maxPool3dBackprop"),E=k(x,"output","maxPool3dBackprop"),D=S,A=_,P=E,M=!1;_.rank===4&&(M=!0,D=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3]),A=_.as5D(1,_.shape[0],_.shape[1],_.shape[2],_.shape[3]),P=E.as5D(1,E.shape[0],E.shape[1],E.shape[2],E.shape[3])),R(D.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+D.rank+"."}),R(A.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."}),R(P.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+P.rank+"."}),w==null&&(w=[1,1,1]),R(ot(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),I!=null&&R(Ae(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+I+" but got pad "+C+"."});var B=Ar(A.shape,b,y,w,C,I),W=F.runKernelFunc(function(N){return N.maxPool3dBackprop(D,A,P,B)},{dy5D:D,input5D:A});return M?W.as4D(W.shape[1],W.shape[2],W.shape[3],W.shape[4]):W}(h,p,m,t,e,i,n,o)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Xm=T({avgPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=k(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),R(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),R(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),R(ot(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&R(Ae(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Ar(u.shape,t,e,i,n,o,a),f=F.runKernelFunc(function(h){return h.avgPool3d(u,l)},{x:u},function(h){return{x:function(){return function(d,p,m,v,g,x,b){var y=k(d,"dy","avgPool3dBackprop"),w=k(p,"input","avgPool3dBackprop"),C=y,I=w,S=!1;w.rank===4&&(S=!0,C=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),I=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),R(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),R(I.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+I.rank+"."}),g==null&&(g=[1,1,1]),R(ot(v,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"}),b!=null&&R(Ae(x),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+x+"."});var _=Ar(I.shape,m,v,g,x,b),E=F.runKernelFunc(function(D){return D.avgPool3dBackprop(C,I,_)},{dy5D:C,input5D:I});return S?E.as4D(E.shape[1],E.shape[2],E.shape[3],E.shape[4]):E}(h,u,t,e,i,n,o)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Wt=T({slice_:function(r,t,e){var n,o,a=k(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice()).forEach(function(u){R(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(a.rank).fill(-1):typeof e=="number"?[e].concat(new Array(a.rank-1).fill(-1)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(R(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-n[c])}),qc(a,n,o);var i=a.shape,s={begin:n,size:o};return F.runKernelFunc(function(u){return u.slice(a,n,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),$m=T({slice1d_:function(r,t,e){var n=k(r,"x","slice1d");return R(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),Wt(n,[t],[e])}}),Ym=T({slice2d_:function(r,t,e){var n=k(r,"x","slice2d");return R(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),Wt(n,t,e)}}),Yl=T({slice3d_:function(r,t,e){var n=k(r,"x","slice3d");return R(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),Wt(n,t,e)}}),Qm=T({slice4d_:function(r,t,e){var n=k(r,"x","slice4d");return R(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),Wt(n,t,e)}});function Ql(r,t,e,n,o){return t.rank<e.rank&&(t=t.reshape(rt(t.shape,n))),r.rank<e.rank&&(r=r.reshape(rt(r.shape,n))),{x:function(){var a=r.mul(e.equal(t).cast(r.dtype));return o==null?a:a.transpose(o)}}}var Jm=T({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=k(r,"x","all","bool"),o=Be(t,n.shape),a=o,i=Rt(a,n.rank);i!=null&&(n=n.transpose(i),a=It(a.length,n.rank));var s=F.runKernelFunc(function(c){return c.all(n,a)},{$x:n});if(e){var u=rt(s.shape,o);return s.reshape(u)}return s}}),Zm=T({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=k(r,"x","any","bool"),o=Be(t,n.shape),a=o,i=Rt(a,n.rank);i!=null&&(n=n.transpose(i),a=It(a.length,n.rank));var s=F.runKernelFunc(function(c){return c.any(n,a)},{$x:n});if(e){var u=rt(s.shape,o);return s.reshape(u)}return s}}),eg=T({argMax_:function(r,t){t===void 0&&(t=0);var e=k(r,"x","argMax");t==null&&(t=0);var n=Be(t,e.shape),o=Rt(n,e.rank);o!=null&&(e=e.transpose(o),n=It(n.length,e.rank));var a={axis:n[0]},i=[e];return F.runKernelFunc(function(s,u){var c=s.argMax(e,n[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return ve(c)}}},"ArgMax",a,i)}}),tg=T({argMin_:function(r,t){t===void 0&&(t=0);var e=k(r,"x","argMin");t==null&&(t=0);var n=Be(t,e.shape),o=Rt(n,e.rank);return o!=null&&(e=e.transpose(o),n=It(n.length,e.rank)),F.runKernelFunc(function(a,i){var s=a.argMin(e,n[0]);return i([e]),s},{$x:e},function(a,i){var s=i[0];return{$x:function(){return ve(s)}}})}}),ng=T({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=k(r,"x","logSumExp"),o=Be(t,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(e){var u=rt(s.shape,o);return s.reshape(u)}return s}}),Go=T({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=k(r,"x","max"),o=n,a=Be(t,n.shape),i=a,s=Rt(i,n.rank);s!=null&&(n=n.transpose(s),i=It(i.length,n.rank));var u=[n],c=F.runKernelFunc(function(f,h){var d=f.max(n,i);return h([o,d]),d},{x:n},function(f,h){return Ql(f,h[1],h[0],a,s)},"Max",{axes:i},u,[!0]);if(e){var l=rt(c.shape,a);c=c.reshape(l)}return c}}),rg=T({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=k(r,"x","mean"),o=Be(t,n.shape),a=Z(Xe(n.shape,o)[1]);return Bo(function(i){var s=X(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(cr(i.shape,"float32")).div(a)}}})(n)}}),og=T({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=k(r,"x","min"),o=n,a=Be(t,n.shape),i=a,s=Rt(i,n.rank);s!=null&&(n=n.transpose(s),i=It(i.length,n.rank));var u=[n],c=F.runKernelFunc(function(f,h){var d=f.min(n,i);return h([o,d]),d},{x:n},function(f,h){return Ql(f,h[1],h[0],a,s)},"Min",{axes:i},u,[!0]);if(e){var l=rt(c.shape,a);c=c.reshape(l)}return c}}),ag=T({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=Be(t,(r=k(r,"x","moments")).shape),o=r.mean(n,e),a=o.shape;e||(a=rt(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,e)}}}),Jl=T({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=k(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=Be(t,n.shape);return Bo(function(a){var i=Rt(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=It(s.length,a.rank));var c=function(d){var p=a.shape.slice();return o.forEach(function(m){p[m]=1}),d.reshape(p).mul(cr(a.shape,"float32"))},l={axes:s},f=F.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(e){var h=rt(f.shape,o);f=f.reshape(h)}return{value:f,gradFunc:c}})(n)}}),ig=T({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=k(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=Be(t,n.shape),a=Rt(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=It(i.length,n.rank));var u=F.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=rt(u.shape,o);u=u.reshape(c)}return u}}),Zl=T({elu_:function(r){var t=k(r,"x","elu");return F.runKernelFunc(function(e,n){var o=e.elu(t);return n([o]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return F.runKernelFunc(function(a){return a.eluDer(e,o)},{dy:e,y:o})}}})}}),sg=T({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=k(r,"x","leakyRelu");return Oi(X(t).mul(e),e)}}),ef=T({prelu_:function(r,t){var e=k(r,"x","prelu"),n=k(t,"alpha","prelu");return F.runKernelFunc(function(o,a){var i=o.prelu(e,n);return a([e,n]),i},{x:e,alpha:n},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return Dn(u,o,o.mul(s))},alpha:function(){var c=Dn(u,ve(o),o.mul(i)),l=Oe(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Se=T({relu_:function(r){var t=k(r,"x","relu");return t.dtype==="bool"?t.toInt():F.runKernelFunc(function(e,n){var o=e.relu(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),tf=T({relu6_:function(r){var t=k(r,"x","relu6");return t.dtype==="bool"?t.toInt():F.runKernelFunc(function(e,n){var o=e.relu6(t);return n([t]),o},{x:t},function(e,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(a.toFloat())}}},"Relu6")}}),ug=T({selu_:function(r){var t=k(r,"x","selu");return F.runKernelFunc(function(e,n){var o=e.selu(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){var a=o.greater(X(0)),i=X(Ni),s=X(Mi),u=e.mul(s),c=e.mul(i).mul(o.toFloat().exp());return Dn(a,u,c)}}})}}),pn=T({transpose_:function(r,t){var e=k(r,"x","transpose");if(t==null&&(t=e.shape.map(function(o,a){return a}).reverse()),R(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){R(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var n={perm:t};return F.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var a=Mo(t);return{x:function(){return o.transpose(a)}}},"Transpose",n)}}),cg=T({localResponseNormalization_:function(r,t,e,n,o){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=k(r,"x","localResponseNormalization");R(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),R(Ae(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=F.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(i,t,e,n,o);return l([i,f]),f},{x4D:i},function(c,l){var f=l[0],h=l[1];return{x4D:function(){return F.runKernelFunc(function(d){return d.LRNGrad(c,f,h,t,e,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),nf=T({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(X(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=k(r,"x","norm"),t,e),a=o.shape;if(n){var i=Be(e,r.shape);a=rt(o.shape,i)}return o.reshape(a)}}),lg=T({basicLSTMCell_:function(r,t,e,n,o,a){var i=k(r,"forgetBias","basicLSTMCell"),s=k(t,"lstmKernel","basicLSTMCell"),u=k(e,"lstmBias","basicLSTMCell"),c=k(n,"data","basicLSTMCell"),l=k(o,"c","basicLSTMCell"),f=k(a,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),d=h.shape[0],p=h.shape[1]/4,m=[d,p],v=h.slice([0,0],m),g=h.slice([0,p],m),x=h.slice([0,2*p],m),b=h.slice([0,3*p],m),y=v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(x).sigmoid())),w=y.tanh().mulStrict(b.sigmoid());return[y,w]}}),fg=T({multiRNNCell_:function(r,t,e,n){for(var o=k(t,"data","multiRNNCell"),a=mo(e,"c","multiRNNCell"),i=mo(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),hg=T({movingAverage_:function(r,t,e,n,o){o===void 0&&(o=!0);var a=k(r,"v","movingAverage"),i=k(t,"x","movingAverage"),s=k(e,"decay","movingAverage");ac(a,i),R(Pe(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=X(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){R(n!=null,function(){return"When using zeroDebias: true, step is required."});var f=k(n,"step","movingAverage");l=l.div(u.sub(Eo(s,f)))}return a.add(l)}}),dg=T({stridedSlice_:function(r,t,e,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=k(r,"x","stridedSlice"),l=Ya(s),f=c.shape.slice();l.forEach(function(v){t[v]=0,e[v]=1,f.splice(v,0,1)}),c=c.reshape(f);for(var h=0;h<c.rank;h++)t[h]=jc(o,t,n,c.shape,h),e[h]=Kc(a,e,n,c.shape,h),n[h]=n[h]||1;var d=Ya(u);d.forEach(function(v){e[v]=t[v]+1,n[v]=1});var p=Oo(t,e,n),m=p.filter(function(v,g){return d.indexOf(g)===-1});return n.every(function(v){return v===1})?Wt(c,t,p).reshape(m):F.runKernelFunc(function(v){return v.stridedSlice(c,t,e,n)},{$x:c}).reshape(m)}}),pg=T({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=k(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=F.runKernelFunc(function(i){return i.topk(n,t,e)},{$x:n});return{values:a[0],indices:a[1]}}}),vg=T({scatterND_:function(r,t,e){var n=k(r,"indices","scatterND","int32"),o=k(t,"updates","scatterND");return Hc(o,n,e),F.runKernelFunc(function(a){return a.scatterND(n,o,e)},{indices:n,updates:o},null,"ScatterNd",{shape:e})}}),Vi=T({fft_:function(r){R(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return F.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),ko=T({ifft_:function(r){R(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return F.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),zi=T({rfft_:function(r,t){R(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,n=r.shape[r.shape.length-1],o=r.size/n;if(t!=null&&t<n){var a=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=t,e=r.slice(a,i),n=t}else if(t!=null&&t>n){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=t-n,e=r.concat(_e(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=Ke(e,u).as2D(o,n),l=Vi(c),f=Math.floor(n/2)+1,h=yt(l),d=Pt(l),p=h.split([f,n-f],h.shape.length-1),m=d.split([f,n-f],d.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=f,Ke(p[0],m[0]).reshape(v)}}),rf=T({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),o=ko(n);return yt(o)}var a=[e,2*(t-1)],i=yt(r).as2D(e,t),s=Pt(r).as2D(e,t),u=i.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(X(-1)),l=i.concat(u,1),f=s.concat(c,1);return n=Ke(l,f).as2D(a[0],a[1]),o=ko(n),yt(o)}}),mg=Object.freeze({fft:Vi,ifft:ko,rfft:zi,irfft:rf}),gg=T({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var o=k(r,"sparseIndices","sparseToDense","int32"),a=k(t,"sparseValues","sparseToDense"),i=k(n,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,e,i),F.runKernelFunc(function(s){return s.sparseToDense(o,a,e,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),yg=T({gatherND_:function(r,t){var e=k(t,"indices","gatherND","int32"),n=k(r,"x","gatherND");return F.runKernelFunc(function(o){return o.gatherND(n,e)},{x:n,indices:e},null,"GatherNd")}}),xg=T({diag_:function(r){var t=k(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return F.runKernelFunc(function(n){return n.diag(t)},{$x:t}).reshape(e)}}),bg=T({dropout_:function(r,t,e,n){var o=k(r,"x","dropout");if(R(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),R(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof Ie?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(Pe(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(o,e),i=1-t,s=Lc(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function of(r,t,e){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=t-e*Math.cos(i)}return Me(o,"float32")}var Ui=T({hannWindow_:function(r){return of(r,.5,.5)}}),af=T({hammingWindow_:function(r){return of(r,.54,.46)}}),Gi=T({frame_:function(r,t,e,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+t<=r.size;)i.push(Wt(r,a,t)),a+=e;if(n)for(;a<r.size;){var s=a+t-r.size,u=Ve([Wt(r,a,t-s),Bt([s],o)]);i.push(u),a+=e}return i.length===0?ln([],[0,t]):Ve(i).as2D(i.length,t)}}),sf=T({stft_:function(r,t,e,n,o){var a;o===void 0&&(o=Ui),n==null&&(a=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Gi(r,t,e),s=et(i,o(t)),u=[],c=0;c<i.shape[0];c++)u.push(zi(s.slice([c,0],[1,t]),n));return Ve(u)}}),wg=Object.freeze({hannWindow:Ui,hammingWindow:af,frame:Gi,stft:sf}),Ze,Cg=function(r,t,e){return e===void 0&&(e=1),Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,m,v;return J(this,function(g){switch(g.label){case 0:return n=k(r,"predictions","inTopK"),o=k(t,"targets","inTopK"),R(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),R(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),be(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],R(e>0&&e<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+e}),[4,n.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],f=rr("bool",c=u[0]),h=0;h<c;h++){for(d=h*l,p=i.subarray(d,d+l),m=[],v=0;v<p.length;v++)m.push({value:p[v],index:v});for(m.sort(function(x,b){return b.value-x.value}),f[h]=0,v=0;v<e;v++)if(m[v].index===s[h]){f[h]=1;break}}return r!==n&&n.dispose(),t!==o&&o.dispose(),[2,$e(f,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Ze||(Ze={}));var _g=T({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=Ze.SUM_BY_NONZERO_WEIGHTS);var o=k(r,"labels","absoluteDifference"),a=k(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=k(e,"weights","absoluteDifference")),be(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return Jt(s,i,n)}}),Jt=T({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=Ze.SUM_BY_NONZERO_WEIGHTS);var n=k(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=k(t,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(e===Ze.NONE)return a;if(e===Ze.SUM)return a.sum();if(e===Ze.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(X(i)):s}if(e===Ze.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(X(n.size));var u=o.mul(cr(n.shape)).notEqual(X(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+e)}}),Eg=T({cosineDistance_:function(r,t,e,n,o){o===void 0&&(o=Ze.SUM_BY_NONZERO_WEIGHTS);var a=k(r,"labels","cosineDistance"),i=k(t,"predictions","cosineDistance"),s=null;n!=null&&(s=k(n,"weights","cosineDistance")),be(a.shape,i.shape,"Error in cosineDistance: ");var u=X(1).sub(a.mul(i).sum(e,!0));return Jt(u,s,o)}}),kg=T({hingeLoss_:function(r,t,e,n){n===void 0&&(n=Ze.SUM_BY_NONZERO_WEIGHTS);var o=k(r,"labels","hingeLoss"),a=k(t,"predictions","hingeLoss"),i=null;e!=null&&(i=k(e,"weights","hingeLoss")),be(o.shape,a.shape,"Error in hingeLoss: ");var s=X(1);o=X(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return Jt(u,i,n)}}),Rg=T({huberLoss_:function(r,t,e,n,o){n===void 0&&(n=1),o===void 0&&(o=Ze.SUM_BY_NONZERO_WEIGHTS);var a=k(r,"labels","huberLoss"),i=k(t,"predictions","huberLoss"),s=null;e!=null&&(s=k(e,"weights","huberLoss")),be(a.shape,i.shape,"Error in huberLoss: ");var u=X(n),c=i.sub(a).abs(),l=Wl(c,u),f=c.sub(l),h=X(.5).mul(l.square()).add(u.mul(f));return Jt(h,s,o)}}),Ig=T({logLoss_:function(r,t,e,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=Ze.SUM_BY_NONZERO_WEIGHTS);var a=k(r,"labels","logLoss"),i=k(t,"predictions","logLoss"),s=null;e!=null&&(s=k(e,"weights","logLoss")),be(a.shape,i.shape,"Error in logLoss: ");var u=X(1),c=X(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return Jt(l,s,o)}}),Sg=T({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=Ze.SUM_BY_NONZERO_WEIGHTS);var o=k(r,"labels","meanSquaredError"),a=k(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=k(e,"weights","meanSquaredError")),be(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return Jt(s,i,n)}}),Ag=T({sigmoidCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=Ze.SUM_BY_NONZERO_WEIGHTS);var a=k(r,"multiClassLabels","sigmoidCrossEntropy"),i=k(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=k(e,"weights","sigmoidCrossEntropy")),be(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=X(n),c=X(1),l=X(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var f=function(h,d){var p=k(h,"labels","sigmoidCrossEntropyWithLogits"),m=k(d,"logits","sigmoidCrossEntropyWithLogits");be(p.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=m.relu(),g=m.mul(p),x=m.abs().neg().exp().log1p();return v.sub(g).add(x)}(a,i);return Jt(f,s,o)}}),Dg=T({softmaxCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=Ze.SUM_BY_NONZERO_WEIGHTS);var a=k(r,"onehotLabels","softmaxCrossEntropy"),i=k(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=k(e,"weights","softmaxCrossEntropy")),be(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=X(n),c=X(1),l=X(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var f=function(h,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return Bo(function(m,v,g){var x=v.logSumExp([p],!0),b=v.toFloat().sub(x);return g([m,b]),{value:b.mul(m).neg().sum([p]),gradFunc:function(y,w){var C=w[0],I=w[1],S=rt(y.shape,[p]);return[y.reshape(S).mul(C.toFloat().sub(I.exp())),y.reshape(S).mul(I.exp().sub(C.toFloat()))]}}})(h,d)}(a,i);return Jt(f,s,o)}}),Tg=Object.freeze({get Reduction(){return Ze},absoluteDifference:_g,computeWeightedLoss:Jt,cosineDistance:Eg,hingeLoss:kg,huberLoss:Rg,logLoss:Ig,meanSquaredError:Sg,sigmoidCrossEntropy:Ag,softmaxCrossEntropy:Dg});function cu(r,t){return t===void 0&&(t=!1),F.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],o=Bc(e),a=r.clone(),i=ln([[1]],[1,1]),s=i.clone(),u=e>=n?n:e,c=function(f){var h,d=a,p=s,m=o;h=F.tidy(function(){var v=a.slice([f,f],[e-f,1]),g=v.norm(),x=a.slice([f,f],[1,1]),b=ln([[-1]]).where(x.greater(0),ln([[1]])),y=x.sub(b.mul(g)),w=v.div(y);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=b.matMul(y).div(g).neg(),I=a.slice([f,0],[e-f,n]),S=C.mul(s);if(f===0)a=I.sub(S.matMul(s.transpose().matMul(I)));else{var _=I.sub(S.matMul(s.transpose().matMul(I)));a=a.slice([0,0],[f,n]).concat(_,0)}var E=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=E.sub(E.matMul(s).matMul(S.transpose()));else{var D=E.sub(E.matMul(s).matMul(S.transpose()));o=o.slice([0,0],[e,f]).concat(D,1)}return[s,a,o]}),s=h[0],a=h[1],o=h[2],ct([d,p,m])},l=0;l<u;++l)c(l);return!t&&e>n&&(o=o.slice([0,0],[e,n]),a=a.slice([0,0],[n,n])),[o,a]})}var Fg=T({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=k(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),e<0&&(e=s);var u=go(0,i,1,"int32").reshape([-1,1]),c=go(0,s,1,"int32"),l=Ue(u,c),f=Vo(l.lessEqual(X(+t,"int32")),l.greaterEqual(X(-e,"int32"))),h=_e([i,s],n.dtype);return mt(ze(n.reshape([-1,i,s])).map(function(d){return Dn(f,d,h)})).reshape(o)}}),Ng=T({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,R(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],n=function(u){R(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)n(o)}else t=!0,r=bi(r,r.shape[0],0).map(function(u){return Vc(u,[0])});R(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(F.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var f=Jl(a[l].mulStrict(c)).mul(a[l]);c=c.sub(f)}return c.div(nf(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return t?mt(a,0):a}}),Mg=T({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return cu(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=ze(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach(function(i){var s=cu(i,t),u=s[0],c=s[1];o.push(u),a.push(c)}),[mt(o,0).reshape(r.shape),mt(a,0).reshape(r.shape)]}}),Pg=Object.freeze({bandPart:Fg,gramSchmidt:Ng,qr:Mg});function Ho(r,t,e,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return e=Math.min(e,i),R(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),R(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),R(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),R(t.rank===1,function(){return"scores must be a 1D tensor"}),R(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),R(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:e,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var Og=T({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=k(r,"images","resizeBilinear");R(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),R(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=F.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,e)},{x:o},function(c,l){return{x:function(){return F.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Bg=T({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=k(r,"images","resizeNearestNeighbor");R(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),R(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),R(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=F.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return F.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Lg=T({nonMaxSuppression_:function(r,t,e,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=k(r,"boxes","nonMaxSuppression"),i=k(t,"scores","nonMaxSuppression"),s=Ho(a,i,e,n,o);e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:o};return F.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,e,n,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),Wg=function(r,t,e,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),Q(this,void 0,void 0,function(){var a,i,s,u,c,l,f;return J(this,function(h){switch(h.label){case 0:return a=k(r,"boxes","nonMaxSuppressionAsync"),i=k(t,"scores","nonMaxSuppressionAsync"),s=Ho(a,i,e,n,o),e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=Ai(c,l,e,n,o),a!==r&&a.dispose(),i!==t&&i.dispose(),[2,f]}})})},Vg=T({nonMaxSuppressionWithScore_:function(r,t,e,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=k(r,"boxes","nonMaxSuppression"),s=k(t,"scores","nonMaxSuppression"),u=Ho(i,s,e,n,o,a),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=F.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),zg=function(r,t,e,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),Q(this,void 0,void 0,function(){var i,s,u,c,l,f,h;return J(this,function(d){switch(d.label){case 0:return i=k(r,"boxes","nonMaxSuppressionAsync"),s=k(t,"scores","nonMaxSuppressionAsync"),u=Ho(i,s,e,n,o,a),e=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=d.sent(),l=c[0],f=c[1],h=Di(l,f,e,n,o,a),i!==r&&i.dispose(),s!==t&&s.dispose(),[2,h]}})})},Ug=T({cropAndResize_:function(r,t,e,n,o,a){var i=k(r,"image","cropAndResize"),s=k(t,"boxes","cropAndResize","float32"),u=k(e,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return R(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),R(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),R(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),R(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),R(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),R(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),F.runKernelFunc(function(l,f){return l.cropAndResize(i,s,u,n,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),Hi=Object.freeze({resizeBilinear:Og,resizeNearestNeighbor:Bg,nonMaxSuppression:Lg,nonMaxSuppressionAsync:Wg,nonMaxSuppressionWithScore:Vg,nonMaxSuppressionWithScoreAsync:zg,cropAndResize:Ug}),qi=function(r,t){return!(r>0)||t==="linear"},ji=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},Ki=function(r,t){var e=t,n=Oe(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},Xi=function(r,t,e){if(t==="linear")return r;if(t==="relu")return Se(r);if(t==="elu")return Zl(r);if(t==="relu6")return tf(r);if(t==="prelu")return ef(r,e);throw new Error("Unknown fused activation "+t+".")},Gg=T({fusedMatMul_:function(r){var t,e=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,f=r.preluActivationWeights;if(qi(F.state.gradientDepth,l)===!1){var h=Uo(e,n,a,s);return u!=null&&(h=le(h,u)),Xi(h,l,f)}var d=k(e,"a","fused matMul"),p=k(n,"b","fused matMul");t=Ee(d,p),d=t[0],p=t[1];var m=a?d.shape[d.rank-2]:d.shape[d.rank-1],v=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=a?d.shape[d.rank-1]:d.shape[d.rank-2],x=s?p.shape[p.rank-2]:p.shape[p.rank-1],b=d.shape.slice(0,-2),y=p.shape.slice(0,-2),w=Z(b),C=Z(y);R(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),R(Pe(b,y),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+y+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),R(m===v,function(){return"Error in fused matMul: inner shapes ("+m+") and ("+v+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var I,S,_=d.shape.slice(0,-2).concat([g,x]),E=a?d.as3D(w,m,g):d.as3D(w,g,m),D=s?p.as3D(C,x,v):p.as3D(C,v,x);u!=null&&fe(_,(I=Ee(I=k(u,"bias","fused matMul"),d)[0]).shape),f!=null&&(S=k(f,"prelu weights","fused matMul"));var A={a:E,b:D};u!=null&&(A.bias=I),f!=null&&(A.preluActivationWeights=S);var P=[E,D];return F.runKernelFunc(function(M,B){var W=M.fusedBatchMatMul({a:E,b:D,transposeA:a,transposeB:s,bias:I,activation:l,preluActivationWeights:S});return B([E,D,W]),W},A,function(M,B){var W=B[0],N=B[1],O=B[2],H=ji(M,O,l),G={};return u!=null&&(G={bias:function(){return Ki(I,H)}}),Object.assign(a||s?!a&&s?{a:function(){return H.matMul(N,!1,!1)},b:function(){return H.matMul(W,!0,!1)}}:a&&!s?{a:function(){return N.matMul(H,!1,!0)},b:function(){return W.matMul(H,!1,!1)}}:{a:function(){return N.matMul(H,!0,!0)},b:function(){return H.matMul(W,!0,!0)}}:{a:function(){return H.matMul(N,!1,!0)},b:function(){return W.matMul(H,!0,!1)}},G)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},P,[!0]).reshape(_)}}),Hg=T({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(h=h||"linear",qi(F.state.gradientDepth,h)===!1){var p=xt(t,e,n,o,i,u,c);return l!=null&&(p=le(p,l)),Xi(p,h,d)}var m=k(t,"x","conv2d"),v=k(e,"filter","conv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),R(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),R(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&R(Ae(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),R(g.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),R(ot(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),R(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,y,w=gn(g.shape,v.shape,n,u,o,c);l!=null&&(b=Ee(b=k(l,"bias","fused conv2d"),m)[0],fe(w.outShape,b.shape)),d!=null&&(y=k(d,"prelu weights","fused conv2d"));var C={x:g,filter:v};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=y);var I=[v,g],S=F.runKernelFunc(function(_,E){var D=_.fusedConv2d({input:g,filter:v,convInfo:w,bias:b,activation:h,preluActivationWeights:y});return E([v,g,D]),D},C,function(_,E){var D=E,A=D[0],P=D[1],M=D[2],B=ji(_,M,h);R(An(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var W={};return l!=null&&(W={bias:function(){return Ki(b,B)}}),Object.assign({x:function(){return ql(P.shape,B,A,n,o)},filter:function(){return Li(P,B,A.shape,n,o)}},W)},"FusedConv2D",{convInfo:w,activation:h},I,[!0]);return x?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),qg=T({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(qi(F.state.gradientDepth,h)===!1){var p=zo(t,e,n,o,i,u,c);return l!=null&&(p=le(p,l)),Xi(p,h,d)}var m=k(t,"x","depthwiseConv2d"),v=k(e,"filter","depthwiseConv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),R(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),R(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),R(g.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),R(ot(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&R(Ae(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,y,w=gn(g.shape,v.shape,n,u,o,c,!0);l!=null&&(b=Ee(b=k(l,"bias","fused conv2d"),m)[0],fe(w.outShape,b.shape)),d!=null&&(y=k(d,"prelu weights","fused depthwiseConv2d"));var C={x:g,filter:v};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=y);var I=[v,g],S=F.runKernelFunc(function(_,E){var D=_.fusedDepthwiseConv2D({input:g,filter:v,convInfo:w,bias:b,activation:h,preluActivationWeights:y});return E([v,g,D]),D},C,function(_,E){R(An(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var D=E[0],A=E[1],P=E[2],M=ji(_,P,h),B={};return l!=null&&(B={bias:function(){return Ki(b,M)}}),Object.assign({x:function(){return jl(A.shape,M,D,w)},filter:function(){return Kl(A,M,D.shape,w)}},B)},"FusedDepthwiseConv2D",{convInfo:w,activation:h},I,[!0]);return x?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),jg=Object.freeze({matMul:Gg,conv2d:Hg,depthwiseConv2d:qg}),Kg=Object.freeze({image:Hi,linalg:Pg,losses:Tg,spectral:mg,fused:jg,signal:wg,square:Iv,squaredDifference:Al,conv1d:Om,conv2d:xt,conv3d:Bm,depthwiseConv2d:zo,separableConv2d:Wi,conv2dTranspose:Lm,conv3dTranspose:Wm,op:T,batchNormalization2d:rm,batchNormalization3d:om,batchNormalization4d:am,batchNormalization:im,batchNorm:Pl,batchNorm2d:sm,batchNorm3d:um,batchNorm4d:cm,booleanMaskAsync:Pm,complex:Ke,real:yt,imag:Pt,concat:Ve,concat1d:pd,concat2d:vd,concat3d:md,concat4d:gd,split:bi,matMul:Uo,dot:Vm,outerProduct:zm,reverse:Br,reverse1d:Um,reverse2d:Gm,reverse3d:Hm,reverse4d:qm,maxPool:Ge,avgPool:Lr,pool:jm,maxPool3d:Km,avgPool3d:Xm,slice:Wt,slice1d:$m,slice2d:Ym,slice3d:Yl,slice4d:Qm,abs:Sv,acos:Av,acosh:Dv,asin:Tv,asinh:Fv,atan:Nv,atanh:Mv,ceil:Pv,clipByValue:Pi,cos:Ov,cosh:Bv,erf:Lv,exp:Za,expm1:Wv,floor:Vv,log:zv,log1p:Uv,logSigmoid:Gv,neg:_o,reciprocal:Hv,round:qv,rsqrt:Dl,sigmoid:Tl,sign:jv,isNaN:Kv,isInf:Xv,isFinite:$v,sin:Yv,sinh:Qv,softplus:Jv,sqrt:Zv,step:em,tan:tm,tanh:nm,all:Jm,any:Zm,argMax:eg,argMin:tg,logSumExp:ng,max:Go,mean:rg,min:og,moments:ag,sum:Jl,prod:ig,equal:Vl,equalStrict:km,greater:Rm,greaterEqual:zl,greaterEqualStrict:Im,greaterStrict:Sm,less:Am,lessEqual:Dm,lessEqualStrict:Tm,lessStrict:Fm,notEqual:Nm,notEqualStrict:Mm,add:le,addN:hm,addStrict:dm,atan2:pm,div:wt,divNoNan:vm,divStrict:mm,floorDiv:Ll,maximum:Oi,maximumStrict:gm,minimum:Wl,minimumStrict:ym,mod:xm,modStrict:bm,mul:et,mulStrict:wm,pow:Eo,powStrict:Cm,squaredDifferenceStrict:_m,sub:Ue,subStrict:Em,elu:Zl,leakyRelu:sg,prelu:ef,relu:Se,relu6:tf,selu:ug,logicalAnd:Vo,logicalNot:lm,logicalOr:Ol,logicalXor:fm,where:Dn,whereAsync:Bl,buffer:se,print:Rd,batchToSpaceND:Oc,broadcastTo:Id,cast:Sd,clone:Ad,cumsum:Dd,depthToSpace:Td,expandDims:gt,eye:Bc,multinomial:Fd,oneHot:$a,pad:Pn,pad1d:Nd,pad2d:Md,pad3d:Pd,pad4d:Od,rand:Bd,randomNormal:Ld,randomGamma:Wd,randomUniform:Lc,reshape:Ct,spaceToBatchND:Wc,squeeze:Vc,stack:mt,tile:Yn,truncatedNormal:Vd,unstack:ze,setdiff1dAsync:zd,fill:Bt,linspace:dd,ones:cr,range:go,scalar:X,tensor:$e,tensor1d:Me,tensor2d:ln,tensor3d:xi,tensor4d:it,tensor5d:ld,tensor6d:fd,variable:hd,zeros:_e,onesLike:Pc,zerosLike:ve,transpose:pn,softmax:Qt,logSoftmax:Gd,localResponseNormalization:cg,norm:nf,gather:Bi,unsortedSegmentSum:Ul,basicLSTMCell:lg,multiRNNCell:fg,movingAverage:hg,stridedSlice:dg,topk:pg,scatterND:vg,fft:Vi,ifft:ko,rfft:zi,irfft:rf,sparseToDense:gg,gatherND:yg,diag:xg,dropout:bg,hannWindow:Ui,hammingWindow:af,frame:Gi,stft:sf,inTopKAsync:Cg});function q(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&R(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function va(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var Xg=function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new Xc(e,F),e}return kt(t,r),t.prototype.write=function(e,n,o){this.firstUse&&(this.firstUse=!1,U().get("IS_NODE")&&vo(`
============================
Hi there \u{1F44B}. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:e,dtype:o}),a},t.prototype.move=function(e,n,o,a){this.data.set(e,{values:n,dtype:a})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return Q(this,void 0,void 0,function(){return J(this,function(n){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var n=this.data.get(e),o=n.dtype,a=n.complexTensors;return o==="complex64"?Ja(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),o=n;if(e.dtype==="string")try{o=n.map(function(a){return _r(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return se(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,n,o){var a=this.write(e,n,o);return F.makeTensorFromDataId(a,n,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return Q(this,void 0,void 0,function(){var n;return J(this,function(o){return n=bt(),e(),[2,{kernelMs:bt()-n}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:F.keep(e.clone()),imag:F.keep(n.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(q(e,"slice"),Ei(e.shape,n,o)){var a=ki(n,e.strides),i=Z(o);return $e(this.readSync(e.dataId).subarray(a,a+i),o,e.dtype)}for(var s=se(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,h){return f+n[h]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,o,a){q(e,"stridedSlice");var i=Oo(n,o,a);if(i.some(function(d){return d===0}))return $e([],i);for(var s=se(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*a[h]+n[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),o=se([e.size,e.size],e.dtype),a=o.values,i=0;i<n.length;i++)a[i*e.size+i]=n[i];return o.toTensor()},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.reverse=function(e,n){q(e,"reverse");for(var o=se(e.shape,e.dtype),a=this.bufferSync(e),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},t.prototype.concat=function(e,n){var o=this;if(e[0].dtype==="complex64"){var a=e.map(function(d){return yt(d)}),i=e.map(function(d){return Pt(d)});return Ke(this.concat(a,n),this.concat(i,n))}var s=e.map(function(d){var p=Z(d.shape.slice(n));return d.as2D(-1,p)}),u=Sn(s.map(function(d){return d.shape}),1),c=se(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(o.readSync(d.dataId),l),l+=d.size})}else{var f=0;s.forEach(function(d){for(var p=o.readSync(d.dataId),m=0,v=0;v<d.shape[0];++v)for(var g=v*u[1]+f,x=0;x<d.shape[1];++x)c[g+x]=p[m++];f+=d.shape[1]})}var h=Sn(e.map(function(d){return d.shape}),n);return $e(c,h,e[0].dtype)},t.prototype.neg=function(e){return q(e,"neg"),this.multiply(X(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(e,n,He(e.dtype,n.dtype),function(o,a){return o+a})},t.prototype.addN=function(e){var n=this;q(e,"addN");for(var o=e.map(function(l){return n.readSync(l.dataId)}),a=se(e[0].shape,e[0].dtype),i=a.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},t.prototype.softmax=function(e,n){var o=Be([n],e.shape),a=this.max(e,o),i=rt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(e,n,He(e.dtype,n.dtype),function(o,a){return o-a})},t.prototype.pow=function(e,n){return q([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.pow(o,a)})},t.prototype.batchMatMul=function(e,n,o,a){q([e,n],"matMul");for(var i=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=a?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(n.dataId),h=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=h[0],p=h[1],m=h[2],v=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],g=v[0],x=v[1],b=v[2],y=s*u,w=se([c,s,u],e.dtype),C=w.values,I=this.blockSize,S=0;S<c;S++)for(var _=0;_<s;_+=I)for(var E=0;E<u;E+=I)for(var D=0;D<i;D+=I)for(var A=Math.min(_+I,s),P=Math.min(E+I,u),M=Math.min(D+I,i),B=_;B<A;B++)for(var W=E;W<P;W++){for(var N=0,O=D;O<M;O++)N+=l[S*d+B*p+O*m]*f[O*g+W*x+S*b];C[S*y+(B*u+W)]+=N}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=va(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(e,n,He(e.dtype,n.dtype),function(o,a){return o*a})},t.prototype.realDivide=function(e,n){return q([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",function(o,a){return o/a})},t.prototype.floorDiv=function(e,n){return q([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",function(o,a){return Math.floor(o/a)})},t.prototype.sum=function(e,n){q(e,"sum"),at("sum",n,e.rank);for(var o=Xe(e.shape,n),a=o[0],i=o[1],s=_e(a,He(e.dtype,"int32")),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=0,p=0;p<u;++p)d+=l[h+p];c[f]=d}return s},t.prototype.prod=function(e,n){q(e,"sum");for(var o=Xe(e.shape,n),a=o[0],i=o[1],s=_e(a,He(e.dtype,"int32")),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=1,p=0;p<u;++p)d*=l[h+p];c[f]=d}return s},t.prototype.unsortedSegmentSum=function(e,n,o){q(e,"unsortedSegmentSum");for(var a=[],i=e.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=X(s,"int32"),c=Vl(u,n).asType("float32").mul(e).sum(0);a.push(c)}return mt(a)},t.prototype.argMin=function(e,n){q(e,"argMin");var o=[n];at("argMin",o,e.rank);for(var a=Xe(e.shape,o),i=a[0],s=a[1],u=_e(i,"int32"),c=Z(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],m=0,v=0;v<c;++v){var g=f[d+v];g<p&&(p=g,m=v)}l[h]=m}return u},t.prototype.argMax=function(e,n){q(e,"argMax");var o=[n];at("argMax",o,e.rank);for(var a=Xe(e.shape,o),i=a[0],s=a[1],u=_e(i,"int32"),c=Z(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],m=0,v=0;v<c;++v){var g=f[d+v];g>p&&(p=g,m=v)}l[h]=m}return u},t.prototype.cumsum=function(e,n,o,a){if(q(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var i=He(e.dtype,"int32"),s=_e(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=a?function(v,g){return v+l-g-1}:function(v,g){return v+g},h=0;h<c.length;h+=l)for(var d=0;d<l;d++){var p=f(h,d);if(d===0)u[p]=o?0:c[p];else{var m=f(h,d-1);u[p]=o?c[m]+u[m]:c[p]+u[m]}}return s},t.prototype.equal=function(e,n){return q([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o===a?1:0})},t.prototype.notEqual=function(e,n){return q([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o!==a?1:0})},t.prototype.less=function(e,n){return q([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<a?1:0})},t.prototype.lessEqual=function(e,n){return q([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<=a?1:0})},t.prototype.greater=function(e,n){return q([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>a?1:0})},t.prototype.greaterEqual=function(e,n){return q([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>=a?1:0})},t.prototype.logicalNot=function(e){q(e,"logicalNot");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return q([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o&&a})},t.prototype.logicalOr=function(e,n){return q([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o||a})},t.prototype.select=function(e,n,o){q([e,n,o],"select");for(var a=this.readSync(e.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=_e(n.shape,He(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||n.rank===1?1:Z(n.shape.slice(1)),h=0;h<a.length;h++)for(var d=0;d<f;d++)a[h]===1?c[l++]=i[h]:c[l++]=s[h];return u},t.prototype.where=function(e){q([e],"where");var n=this.readSync(e.dataId);return Ti(e.shape,n)},t.prototype.topk=function(e,n,o){return q(e,"topk"),Zc(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){q(e,"min"),at("min",n,e.rank);for(var o=Xe(e.shape,n),a=o[0],i=o[1],s=_e(a,e.dtype),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];m<d&&(d=m)}c[f]=d}return s},t.prototype.minimum=function(e,n){return q([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.min(o,a)})},t.prototype.mod=function(e,n){return q([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},t.prototype.max=function(e,n){q(e,"max"),at("max",n,e.rank);for(var o=Xe(e.shape,n),a=o[0],i=o[1],s=_e(a,e.dtype),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];m>d&&(d=m)}c[f]=d}return s},t.prototype.maximum=function(e,n){return q([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.max(o,a)})},t.prototype.all=function(e,n){q(e,"all"),at("all",n,e.rank);for(var o=Xe(e.shape,n),a=o[0],i=o[1],s=_e(a,e.dtype),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];d=d&&m}c[f]=d}return s},t.prototype.any=function(e,n){q(e,"any"),at("any",n,e.rank);for(var o=Xe(e.shape,n),a=o[0],i=o[1],s=_e(a,e.dtype),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];d=d||m}c[f]=d}return s},t.prototype.squaredDifference=function(e,n){return q([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o-a;return i*i})},t.prototype.ceil=function(e){q(e,"ceil");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){q(e,"floor");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){q(e,"round");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){q(e,"exp");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){q(e,"expm1");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){q(e,"log");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){q(e,"log1p");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){q(e,"sqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){q(e,"rsqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){q(e,"reciprocal");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){q(e,"relu");for(var n=_e(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},t.prototype.relu6=function(e){q(e,"relu");for(var n=_e(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},t.prototype.prelu=function(e,n){return q([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return o<0?a*o:o})},t.prototype.elu=function(e){q(e,"elu");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){q([e,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},t.prototype.selu=function(e){q(e,"selu");for(var n=Ni,o=Mi,a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,e.shape,"float32")},t.prototype.clip=function(e,n,o){q(e,"clip");for(var a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<e.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){q(e,"int");for(var n=new Int32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){q(e,"sigmoid");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){q(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){q(e,"sin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){q(e,"cos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){q(e,"tan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){q(e,"asin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){q(e,"acos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){q(e,"atan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return q([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.atan2(o,a)})},t.prototype.sinh=function(e){q(e,"sinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){q(e,"cosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){q(e,"tanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Ku(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){q(e,"asinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){q(e,"acosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){q(e,"atanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){q(e,"erf");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),q(e,"step");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=va(this,c,s,u)),c},t.prototype.conv2d=function(e,n,o){q([e,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",h=se(o.outShape,e.dtype),d=e.strides[0],p=f?e.strides[1]:e.strides[2],m=f?e.strides[2]:1,v=f?1:e.strides[1],g=h.strides[0],x=f?h.strides[1]:h.strides[2],b=f?h.strides[2]:1,y=f?1:h.strides[1],w=this.readSync(e.dataId),C=this.readSync(n.dataId),I=h.values,S=0;S<o.batchSize;++S)for(var _=S*d,E=S*g,D=0;D<o.outHeight;++D)for(var A=E+D*x,P=D*o.strideHeight-l,M=0;M<a;M++){var B=P+M*s;if(!(B<0||B>=o.inHeight))for(var W=M*n.strides[0],N=_+B*p,O=0;O<o.outWidth;++O)for(var H=A+O*b,G=O*o.strideWidth-c,j=0;j<i;j++){var V=G+j*u;if(!(V<0||V>=o.inWidth))for(var K=N+V*m,oe=W+j*n.strides[1],re=0;re<o.inChannels;++re){for(var ne=w[K+re*v],ue=0;ue<o.outChannels;++ue)I[H+ue*y]+=ne*C[oe+ue];oe+=o.outChannels}}}return h.toTensor()},t.prototype.conv3d=function(e,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,h=o.padInfo.left,d=o.padInfo.top,p=se(o.outShape,e.dtype),m=this.readSync(e.dataId),v=this.readSync(n.dataId),g=p.values,x=0;x<o.batchSize;++x)for(var b=x*e.strides[0],y=x*p.strides[0],w=0;w<o.outDepth;++w)for(var C=y+w*p.strides[1],I=w*o.strideDepth-f,S=0;S<a;S++){var _=I+S*u;if(!(_<0||_>=o.inDepth))for(var E=S*n.strides[0],D=b+_*e.strides[1],A=0;A<o.outHeight;++A)for(var P=C+A*p.strides[2],M=A*o.strideHeight-d,B=0;B<i;B++){var W=M+B*c;if(!(W<0||W>=o.inHeight))for(var N=E+B*n.strides[1],O=D+W*e.strides[2],H=0;H<o.outWidth;++H)for(var G=P+H*o.outChannels,j=H*o.strideWidth-h,V=0;V<s;V++){var K=j+V*l;if(!(K<0||K>=o.inWidth))for(var oe=N+V*n.strides[2],re=O+K*o.inChannels,ne=oe,ue=0;ue<o.inChannels;++ue){for(var he=m[re+ue],pe=0;pe<o.outChannels;++pe)g[G+pe]+=he*v[ne+pe];ne+=o.outChannels}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(e,n,o){q([e,n],"conv2dDerInput");for(var a=se(o.inShape,"float32"),i=a.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],f=c[1],h=c[2],d=o.batchSize,p=o.filterHeight,m=o.filterWidth,v=o.inChannels,g=o.inHeight,x=o.inWidth,b=o.outChannels,y=o.outHeight,w=o.outWidth,C=o.strideHeight,I=o.strideWidth,S=o.dataFormat,_=p-1-o.padInfo.top,E=m-1-o.padInfo.left,D=S==="channelsLast",A=a.strides[0],P=D?a.strides[1]:a.strides[2],M=D?a.strides[2]:1,B=D?1:a.strides[1],W=e.strides[0],N=D?e.strides[1]:e.strides[2],O=D?e.strides[2]:1,H=D?1:e.strides[1],G=0;G<d;++G)for(var j=0;j<v;++j)for(var V=0;V<g;++V)for(var K=V-_,oe=Math.max(0,Math.ceil(K/C)),re=Math.min(y,(p+K)/C),ne=0;ne<x;++ne){for(var ue=ne-E,he=Math.max(0,Math.ceil(ue/I)),pe=Math.min(w,(m+ue)/I),Fe=0,de=oe;de<re;++de)for(var we=de*C-K,ge=he;ge<pe;++ge)for(var De=W*G+N*de+O*ge,ke=l*(p-1-we)+f*(m-1-(ge*I-ue))+h*j,Re=0;Re<b;++Re)Fe+=s[De+H*Re]*u[ke+Re];i[A*G+P*V+M*ne+B*j]=Fe}return a.toTensor()},t.prototype.conv3dDerInput=function(e,n,o){for(var a=se(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(e.dataId),d=e.strides,p=d[0],m=d[1],v=d[2],g=d[3],x=this.readSync(n.dataId),b=n.strides,y=b[0],w=b[1],C=b[2],I=b[3],S=o.batchSize,_=o.filterDepth,E=o.filterHeight,D=o.filterWidth,A=o.inChannels,P=o.inDepth,M=o.inHeight,B=o.inWidth,W=o.outChannels,N=o.outDepth,O=o.outHeight,H=o.outWidth,G=o.strideDepth,j=o.strideHeight,V=o.strideWidth,K=_-1-o.padInfo.front,oe=E-1-o.padInfo.top,re=D-1-o.padInfo.left,ne=0;ne<S;++ne)for(var ue=0;ue<A;++ue)for(var he=0;he<P;++he)for(var pe=he-K,Fe=Math.max(0,Math.ceil(pe/G)),de=Math.min(N,(_+pe)/G),we=0;we<M;++we)for(var ge=we-oe,De=Math.max(0,Math.ceil(ge/j)),ke=Math.min(O,(E+ge)/j),Re=0;Re<B;++Re){for(var At=Re-re,Dt=Math.max(0,Math.ceil(At/V)),lt=Math.min(H,(D+At)/V),Bn=0,Ut=Fe;Ut<de;++Ut)for(var nn=Ut*G-pe,Gt=De;Gt<ke;++Gt)for(var Ln=Gt*j-ge,Ht=Dt;Ht<lt;++Ht)for(var Qo=p*ne+m*Ut+v*Gt+g*Ht,Wn=y*(_-1-nn)+w*(E-1-Ln)+C*(D-1-(Ht*V-At))+I*ue,Tt=0;Tt<W;++Tt)Bn+=h[Qo+Tt]*x[Wn+Tt];i[u*ne+c*he+l*we+f*Re+ue]=Bn}return a.toTensor()},t.prototype.conv2dDerFilter=function(e,n,o){q([e,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=se(o.filterShape,"float32"),f=o.padInfo.left,h=o.padInfo.top,d=this.bufferSync(e),p=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((h-m)/a)),g=Math.min(o.outHeight,(o.inHeight+h-m)/a),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((f-x)/i)),y=Math.min(o.outWidth,(o.inWidth+f-x)/i),w=0;w<o.inChannels;++w)for(var C=0;C<o.outChannels;++C){for(var I=0,S=0;S<o.batchSize;++S)for(var _=v;_<g;++_)for(var E=m+_*a-h,D=b;D<y;++D){var A=x+D*i-f;I+=c?d.get(S,E,A,w)*p.get(S,_,D,C):d.get(S,w,E,A)*p.get(S,C,_,D)}l.set(I,m,x,w,C)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=se(o.filterShape,"float32"),h=f.values,d=f.strides,p=d[0],m=d[1],v=d[2],g=d[3],x=this.readSync(n.dataId),b=n.strides,y=b[0],w=b[1],C=b[2],I=b[3],S=this.readSync(e.dataId),_=e.strides,E=_[0],D=_[1],A=_[2],P=_[3],M=o.padInfo.front,B=o.padInfo.left,W=o.padInfo.top,N=0;N<u;++N)for(var O=Math.max(0,Math.ceil((M-N)/a)),H=Math.min(o.outDepth,(o.inDepth+M-N)/a),G=N*p,j=0;j<c;++j)for(var V=Math.max(0,Math.ceil((W-j)/i)),K=Math.min(o.outHeight,(o.inHeight+W-j)/i),oe=j*m+G,re=0;re<l;++re)for(var ne=Math.max(0,Math.ceil((B-re)/s)),ue=Math.min(o.outWidth,(o.inWidth+B-re)/s),he=re*v+oe,pe=0;pe<o.inChannels;++pe)for(var Fe=pe*g+he,de=0;de<o.outChannels;++de){for(var we=0,ge=0;ge<o.batchSize;++ge)for(var De=ge*E,ke=ge*y,Re=O;Re<H;++Re)for(var At=(N+Re*a-M)*D+De,Dt=Re*w+ke,lt=V;lt<K;++lt)for(var Bn=(j+lt*i-W)*A+At,Ut=lt*C+Dt,nn=ne;nn<ue;++nn){var Gt=nn*I+Ut;we+=S[(re+nn*s-B)*P+Bn+pe]*x[Gt+de]}h[Fe+de]=we}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=va(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,o){q([e,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,h=se(o.outShape,e.dtype),d=this.readSync(e.dataId),p=this.readSync(n.dataId),m=h.values,v=0;v<o.batchSize;++v)for(var g=v*e.strides[0],x=v*h.strides[0],b=0;b<o.outHeight;++b)for(var y=x+b*h.strides[1],w=b*o.strideHeight-c,C=0;C<a;++C){var I=w+C*s;if(!(I<0||I>=o.inHeight))for(var S=C*n.strides[0],_=g+I*e.strides[1],E=0;E<o.outWidth;++E)for(var D=y+E*h.strides[2],A=E*o.strideWidth-l,P=0;P<i;++P){var M=A+P*u;if(!(M<0||M>=o.inWidth))for(var B=S+P*n.strides[1],W=_+M*o.inChannels,N=D,O=B,H=0;H<o.inChannels;++H){for(var G=d[W+H],j=0;j<f;++j)m[N+j]+=G*p[O+j];N+=f,O+=f}}}return h.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,o){q([e,n],"depthwiseConv2DDerInput");for(var a=se(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),h=e.strides,d=h[0],p=h[1],m=h[2],v=this.readSync(n.dataId),g=n.strides,x=g[0],b=g[1],y=g[2],w=o.batchSize,C=o.filterHeight,I=o.filterWidth,S=o.inChannels,_=o.inHeight,E=o.inWidth,D=o.outChannels,A=o.outHeight,P=o.outWidth,M=o.strideHeight,B=o.strideWidth,W=C-1-o.padInfo.top,N=I-1-o.padInfo.left,O=D/S,H=0;H<w;++H)for(var G=0;G<S;++G)for(var j=0;j<_;++j)for(var V=j-W,K=Math.max(0,Math.ceil(V/M)),oe=Math.min(A,(C+V)/M),re=0;re<E;++re){for(var ne=re-N,ue=Math.max(0,Math.ceil(ne/B)),he=Math.min(P,(I+ne)/B),pe=0,Fe=K;Fe<oe;++Fe)for(var de=Fe*M-V,we=ue;we<he;++we)for(var ge=d*H+p*Fe+m*we,De=x*(C-1-de)+b*(I-1-(we*B-ne))+y*G,ke=0;ke<O;++ke)pe+=f[ge+(G*O+ke)]*v[De+ke];i[u*H+c*j+l*re+G]=pe}return a.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){q([e,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=se(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,h=o.outChannels/o.inChannels,d=this.bufferSync(e),p=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((f-m)/a)),g=Math.min(o.outHeight,(o.inHeight+f-m)/a),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((l-x)/i)),y=Math.min(o.outWidth,(o.inWidth+l-x)/i),w=0;w<o.outChannels;++w){for(var C=Math.trunc(w/h),I=w%h,S=0,_=0;_<o.batchSize;++_)for(var E=v;E<g;++E)for(var D=m+E*a-f,A=b;A<y;++A){var P=x+A*i-l;S+=d.get(_,D,P,C)*p.get(_,E,A,w)}c.set(S,m,x,C,I)}return c.toTensor()},t.prototype.tile=function(e,n){return q(e,"tile"),Jc(this.bufferSync(e),n)},t.prototype.pad=function(e,n,o){q(e,"pad");var a=n.map(function(h,d){return h[0]+e.shape[d]+h[1]}),i=n.map(function(h){return h[0]}),s=this.bufferSync(e),u=se(a,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(h,d){return h+i[d]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},t.prototype.transpose=function(e,n){q(e,"transpose");for(var o=new Array(e.rank),a=0;a<o.length;a++)o[a]=e.shape[n[a]];var i=this.readSync(e.dataId),s=se(o,e.dtype),u=this.bufferSync(e);for(a=0;a<e.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[n[f]];var h=s.locToIndex(l);s.values[h]=i[a]}return s.toTensor()},t.prototype.gather=function(e,n,o){q([e,n],"gather");var a=e.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=se(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=i[l[o]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,o){q([e],"batchToSpaceND");var a=n.reduce(function(f,h){return f*h}),i=yo(e.shape,n,a),s=xo(i.length,n.length),u=bo(e.shape,n,a),c=zc(o,n.length),l=Uc(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){q([e],"spaceToBatchND");var a=n.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=yo(u.shape,n,a,!1),l=xo(c.length,n.length,!1),f=bo(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.pool=function(e,n,o){q(e,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,h=n.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),m=se(n.outShape,e.dtype),v=m.values,g=n.outShape[1]*n.outShape[2]*n.outShape[3],x=n.outShape[2]*n.outShape[3],b=n.outShape[3],y=0;y<n.batchSize;++y)for(var w=y*g,C=y*e.strides[0],I=0;I<n.inChannels;++I)for(var S=0;S<n.outHeight;++S)for(var _=S*a-f,E=Math.max(0,_),D=Math.min(n.inHeight,c+_),A=w+S*x,P=0;P<n.outWidth;++P){for(var M=P*i-h,B=Math.max(0,M),W=Math.min(n.inWidth,l+M),N=d,O=0,H=0,G=E;G<D;G+=s){for(var j=C+G*e.strides[1],V=B;V<W;V+=u){var K=p[j+V*e.strides[2]+I];o==="max"&&K>N?N=K:o==="avg"&&(O+=K,H++)}if(isNaN(N))break}v[A+P*b+I]=o==="avg"?O/H:N}return m.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var o=se(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,h=n.padInfo.left,d=this.bufferSync(e),p=0;p<n.batchSize;++p)for(var m=0;m<n.inChannels;++m)for(var v=0;v<n.outHeight;++v){for(var g=v*a-f,x=g;x<0;)x+=s;for(var b=Math.min(n.inHeight,c+g),y=0;y<n.outWidth;++y){for(var w=y*i-h,C=w;C<0;)C+=u;for(var I=Math.min(n.inWidth,l+w),S=Number.NEGATIVE_INFINITY,_=-1,E=x;E<b;E+=s)for(var D=E-g,A=C;A<I;A+=u){var P=A-w,M=d.get(p,E,A,m);M>S&&(S=M,_=D*l+P)}o.set(_,p,v,y,m)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,n,o,a){q([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,f=a.effectiveFilterHeight,h=a.effectiveFilterWidth,d=h-1-a.padInfo.left,p=f-1-a.padInfo.top,m=se(n.shape,"float32"),v=this.bufferSync(i),g=this.bufferSync(e),x=0;x<a.batchSize;++x)for(var b=0;b<a.inChannels;++b)for(var y=0;y<a.inHeight;++y)for(var w=0;w<a.inWidth;++w){for(var C=y-p,I=w-d,S=0,_=0;_<f;_+=c){var E=(C+_)/s;if(!(E<0||E>=a.outHeight||Math.floor(E)!==E))for(var D=0;D<h;D+=l){var A=(I+D)/u;if(!(A<0||A>=a.outWidth||Math.floor(A)!==A)){var P=f*h-1-v.get(x,E,A,b)===_*h+D?1:0;P!==0&&(S+=g.get(x,E,A,b)*P)}}}m.set(S,x,y,w,b)}return m.toTensor()},t.prototype.avgPoolBackprop=function(e,n,o){q([e,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=h-1-o.padInfo.left,p=f-1-o.padInfo.top,m=se(n.shape,"float32"),v=1/(s*u),g=this.bufferSync(e),x=0;x<o.batchSize;++x)for(var b=0;b<o.inChannels;++b)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var C=y-p,I=w-d,S=0,_=0;_<f;_+=c){var E=(C+_)/a;if(!(E<0||E>=o.outHeight||Math.floor(E)!==E))for(var D=0;D<h;D+=l){var A=(I+D)/i;A<0||A>=o.outWidth||Math.floor(A)!==A||(S+=g.get(x,E,A,b))}}m.set(S*v,x,y,w,b)}return m.toTensor()},t.prototype.pool3d=function(e,n,o){q(e,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,h=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=this.readSync(e.dataId),b=se(n.outShape,e.dtype),y=b.values,w=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],C=n.outShape[2]*n.outShape[3]*n.outShape[4],I=n.outShape[3]*n.outShape[4],S=n.outShape[4],_=0;_<n.batchSize;++_)for(var E=_*w,D=_*e.strides[0],A=0;A<n.inChannels;++A)for(var P=0;P<n.outDepth;++P){for(var M=P*a-p,B=M;B<0;)B+=u;for(var W=Math.min(n.inDepth,f+M),N=E+P*C,O=0;O<n.outHeight;++O){for(var H=O*i-m,G=H;G<0;)G+=c;for(var j=Math.min(n.inHeight,h+H),V=N+O*I,K=0;K<n.outWidth;++K){for(var oe=K*s-v,re=oe;re<0;)re+=l;for(var ne=Math.min(n.inWidth,d+oe),ue=V+K*S,he=g,pe=0,Fe=0,de=B;de<W;de+=u){for(var we=D+de*e.strides[1],ge=G;ge<j;ge+=c){for(var De=we+ge*e.strides[2],ke=re;ke<ne;ke+=l){var Re=x[De+ke*e.strides[3]+A];if(o==="max"&&Re>he?he=Re:o==="avg"&&(pe+=Re,Fe++),isNaN(he))break}if(isNaN(he))break}if(isNaN(he))break}y[ue+A]=o==="avg"?pe/Fe:he}}}return b.toTensor()},t.prototype.avgPool3d=function(e,n){return q(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,o){q([e,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,h=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,m=o.effectiveFilterHeight,v=o.effectiveFilterWidth,g=p-1-o.padInfo.front,x=v-1-o.padInfo.left,b=m-1-o.padInfo.top,y=se(n.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(e),I=0;I<o.batchSize;++I)for(var S=0;S<o.inChannels;++S)for(var _=0;_<o.inDepth;++_)for(var E=0;E<o.inHeight;++E)for(var D=0;D<o.inWidth;++D){for(var A=_-g,P=E-b,M=D-x,B=0,W=0;W<p;W+=f){var N=(A+W)/a;if(!(N<0||N>=o.outDepth||Math.floor(N)!==N))for(var O=0;O<m;O+=h){var H=(P+O)/i;if(!(H<0||H>=o.outHeight||Math.floor(H)!==H))for(var G=0;G<v;G+=d){var j=(M+G)/s;j<0||j>=o.outWidth||Math.floor(j)!==j||(B+=C.get(I,N,H,j,S))}}}y.set(B*w,I,_,E,D,S)}return y.toTensor()},t.prototype.maxPool3d=function(e,n){return q(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var o=se(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,h=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=this.bufferSync(e),x=0;x<n.batchSize;++x)for(var b=0;b<n.inChannels;++b)for(var y=0;y<n.outDepth;++y){for(var w=y*a-p,C=w;C<0;)C+=u;for(var I=Math.min(n.inDepth,f+w),S=0;S<n.outHeight;++S){for(var _=S*i-m,E=_;E<0;)E+=c;for(var D=Math.min(n.inHeight,h+_),A=0;A<n.outWidth;++A){for(var P=A*s-v,M=P;M<0;)M+=l;for(var B=Math.min(n.inWidth,d+P),W=Number.NEGATIVE_INFINITY,N=-1,O=C;O<I;O+=u)for(var H=O-w,G=E;G<D;G+=c)for(var j=G-_,V=M;V<B;V+=l){var K=V-P,oe=g.get(x,O,G,V,b);oe>=W&&(W=oe,N=H*h*d+j*h+K)}o.set(N,x,y,S,A,b)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,o,a){q([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,f=a.dilationHeight,h=a.dilationWidth,d=a.effectiveFilterDepth,p=a.effectiveFilterHeight,m=a.effectiveFilterWidth,v=d-1-a.padInfo.front,g=m-1-a.padInfo.left,x=p-1-a.padInfo.top,b=se(n.shape,"float32"),y=this.bufferSync(i),w=this.bufferSync(e),C=0;C<a.batchSize;++C)for(var I=0;I<a.inChannels;++I)for(var S=0;S<a.inDepth;++S)for(var _=0;_<a.inHeight;++_)for(var E=0;E<a.inWidth;++E){for(var D=S-v,A=_-x,P=E-g,M=0,B=0;B<d;B+=l){var W=(D+B)/s;if(!(W<0||W>=a.outDepth||Math.floor(W)!==W))for(var N=0;N<p;N+=f){var O=(A+N)/u;if(!(O<0||O>=a.outHeight||Math.floor(O)!==O))for(var H=0;H<m;H+=h){var G=(P+H)/c;if(!(G<0||G>=a.outWidth||Math.floor(G)!==G)){var j=d*p*m-1-y.get(C,W,O,G,I)===B*p*m+N*m+H?1:0;j!==0&&(M+=w.get(C,W,O,G,I)*j)}}}}b.set(M,C,S,_,E,I)}return b.toTensor()},t.prototype.cast=function(e,n){return Ii(e,n,this)},t.prototype.reshape=function(e,n){return Co(e,n)},t.prototype.avgPool=function(e,n){return q(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,o,a){q(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(Z([s,n,o,l])),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=0,v=d[0]/p[0],g=d[1]/p[1],x=0;x<s;x++)for(var b=0;b<n;b++)for(var y=v*b,w=Math.floor(y),C=y-w,I=Math.min(u-1,Math.ceil(y)),S=x*e.strides[0]+w*e.strides[1],_=x*e.strides[0]+I*e.strides[1],E=0;E<o;E++)for(var D=g*E,A=Math.floor(D),P=D-A,M=Math.min(c-1,Math.ceil(D)),B=S+A*e.strides[2],W=_+A*e.strides[2],N=S+M*e.strides[2],O=_+M*e.strides[2],H=0;H<l;H++){var G=f[B+H],j=f[W+H],V=G+(f[N+H]-G)*P,K=V+(j+(f[O+H]-j)*P-V)*C;h[m++]=K}return $e(h,[s,n,o,l])},t.prototype.resizeBilinearBackprop=function(e,n,o){q([e,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=[o&&f>1?s-1:s,o&&h>1?u-1:u],m=[o&&f>1?f-1:f,o&&h>1?h-1:h],v=p[0]/m[0],g=p[1]/m[1],x=this.readSync(e.dataId),b=0,y=0;y<i;y++)for(var w=y*n.strides[0],C=0;C<f;C++)for(var I=C*v,S=Math.floor(I),_=Math.min(Math.ceil(I),s-1),E=w+S*n.strides[1],D=w+_*n.strides[1],A=I-S,P=1-A,M=0;M<h;M++)for(var B=M*g,W=Math.floor(B),N=Math.min(Math.ceil(B),u-1),O=B-W,H=1-O,G=E+W*n.strides[2],j=E+N*n.strides[2],V=D+W*n.strides[2],K=D+N*n.strides[2],oe=P*H,re=P*O,ne=A*H,ue=A*O,he=0;he<c;he++){var pe=x[b++];d[G+he]+=pe*oe,d[j+he]+=pe*re,d[V+he]+=pe*ne,d[K+he]+=pe*ue}return it(d,[i,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,o,a){q(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(s*n*o*l),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=d[0]/p[0],v=d[1]/p[1],g=0,x=0;x<s;x++)for(var b=x*e.strides[0],y=0;y<n;y++)for(var w=m*y,C=b+Math.min(u-1,a?Math.round(w):Math.floor(w))*e.strides[1],I=0;I<o;I++)for(var S=v*I,_=C+Math.min(c-1,a?Math.round(S):Math.floor(S))*e.strides[2],E=0;E<l;E++){var D=f[_+E];h[g++]=D}return $e(h,[s,n,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){q([e,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=this.readSync(e.dataId),m=[o&&f>1?s-1:s,o&&h>1?u-1:u],v=[o&&f>1?f-1:f,o&&h>1?h-1:h],g=m[0]/v[0],x=m[1]/v[1],b=1/g,y=1/x,w=2*Math.ceil(b)+2,C=2*Math.ceil(y)+2,I=0;I<i;I++)for(var S=I*n.strides[0],_=0;_<s;_++)for(var E=S+_*n.strides[1],D=Math.floor(_*b),A=Math.floor(D-w/2),P=0;P<u;P++)for(var M=E+P*n.strides[2],B=Math.floor(P*y),W=Math.floor(B-C/2),N=0;N<c;N++){for(var O=0,H=0;H<w;H++){var G=H+A;if(!(G<0||G>=f)){var j=S+G*e.strides[1],V=G*g;if(_===Math.min(s-1,o?Math.round(V):Math.floor(V)))for(var K=0;K<C;K++){var oe=K+W;if(!(oe<0||oe>=h)){var re=j+oe*e.strides[2],ne=oe*x;P===Math.min(u-1,o?Math.round(ne):Math.floor(ne))&&(O+=p[re+N])}}}}d[M+N]=O}return it(d,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){q([e,n,o,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),f=i?this.readSync(i.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=h.length,m=f.length,v=l.length,g=c.length,x=0,b=0,y=0,w=0,C=0;C<u.length;++C)d[C]=h[x++]+(u[C]-c[b++])*f[y++]/Math.sqrt(l[w++]+a),x>=p&&(x=0),b>=g&&(b=0),y>=m&&(y=0),w>=v&&(w=0);return it(d,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){q(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function h(v){for(var g=v%s,x=v-g+Math.max(0,g-n),b=v-g+Math.min(g+n,u),y=0;x<=b;x++){var w=c[x];y+=w*w}return y}for(var d=0;d<l;d++){var p=h(d),m=c[d]*Math.pow(o+a*p,-i);f[d]=m}return it(f,e.shape)},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){q(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(n.dataId),h=this.readSync(o.dataId),d=new Float32Array(e.size),p=e.size,m=0;m<p;m++){for(var v=m%c,g=m-v+Math.max(0,v-a),x=m-v+Math.min(c,v+a+1),b=0,y=g;y<x;y++)b+=Math.pow(f[y],2);for(b=s*b+i,y=g;y<x;y++){var w=-2*s*u*f[y]*h[m]/b;m===y&&(w+=Math.pow(b,-u)),w*=l[m],d[y]+=w}}return it(d,e.shape)},t.prototype.multinomial=function(e,n,o,a){q(e,"multinomial");for(var i=n?e:Qt(e),s=i.shape[0],u=i.shape[1],c=_e([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(i.dataId),h=0;h<s;++h){var d=h*u,p=new Float32Array(u-1);p[0]=f[d];for(var m=1;m<p.length;++m)p[m]=p[m-1]+f[d+m];for(var v=Po(a.toString()),g=h*o,x=0;x<o;++x){var b=v();l[g+x]=p.length;for(var y=0;y<p.length;y++)if(b<p[y]){l[g+x]=y;break}}}return c},t.prototype.oneHot=function(e,n,o,a){q(e,"oneHot");var i=new Float32Array(e.size*n);i.fill(a);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return ln(i,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return q(e,"nonMaxSuppression"),Ai(this.readSync(e.dataId),this.readSync(n.dataId),o,a,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var o=e.shape[0],a=e.shape[1],i=se(e.shape,"float32"),s=se(e.shape,"float32"),u=yt(e).as2D(o,a),c=Pt(e).as2D(o,a),l=0;l<o;l++)for(var f=u.slice([l,0],[1,a]),h=c.slice([l,0],[1,a]),d=Ke(f,h),p=this.readSync(this.fftImpl(d,n).dataId),m=0;m<a;m++){var v=Us(p,m);i.values[l*a+m]=v.real,s.values[l*a+m]=v.imag}return Ke(i.toTensor(),s.toTensor()).as2D(o,a)},t.prototype.fftImpl=function(e,n){var o=e.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(e.shape[0],e.shape[1]);return n&&(i=Ke(yt(i).div(X(a)),Pt(i).div(X(a)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,a,n));return Ke(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,o){if(n===1)return e;var a=this.readSync(e.dataId),i=n/2,s=function(g){for(var x=Math.ceil(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=0;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(a),u=Ke(s.real,s.imag).as1D(),c=function(g){for(var x=Math.floor(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=2;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(a),l=Ke(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var f=function(g,x){for(var b=new Float32Array(g/2),y=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var C=(x?2:-2)*Math.PI*(w/g);b[w]=Math.cos(C),y[w]=Math.sin(C)}return{real:b,imag:y}}(n,o),h=Ke(f.real,f.imag).mul(l),d=u.add(h),p=u.sub(h),m=yt(d).concat(yt(p)),v=Pt(d).concat(Pt(p));return Ke(m,v).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=qd(i*c,n,o),f=Us(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=n,u/=n),Hd(a,s,u,i)}return a},t.prototype.depthToSpace=function(e,n,o){R(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),R(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var a=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*n,l=s*n,f=u/(n*n),h=this.readSync(e.dataId),d=new Float32Array(a*c*l*f),p=0,m=0;m<a;++m)for(var v=0;v<c;++v)for(var g=Math.floor(v/n),x=v%n,b=0;b<l;++b)for(var y=Math.floor(b/n),w=(x*n+b%n)*f,C=0;C<f;++C){var I=C+w+u*(y+s*(g+i*m));d[p++]=h[I]}return it(d,[a,c,l,f])},t.prototype.broadcastedBinaryOp=function(e,n,o,a){var i=fe(e.shape,n.shape),s=se(i,o),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=Xt(e.shape,i),f=Xt(n.shape,i),h=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;++d)h[d]=a(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(e),m=this.bufferSync(n),v=function(g){var x=s.indexToLoc(g),b=x.slice(-e.rank);l.forEach(function(I){return b[I]=0});var y=p.locToIndex(b),w=x.slice(-n.rank);f.forEach(function(I){return w[I]=0});var C=m.locToIndex(w);h[g]=a(u[y],c[C])};for(d=0;d<h.length;++d)v(d)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,o){var a=fe(e.shape,n.shape),i=se(a,"float32"),s=se(a,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=Xt(e.shape,a),f=Xt(n.shape,a),h=i.values,d=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;p++){var m=p%u.length,v=p%c.length,g=o(u[2*m],u[2*m+1],c[2*v],c[2*v+1]);h[p]=g.real,d[p]=g.imag}else{var x=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(w){var C=i.indexToLoc(w),I=C.slice(-e.rank);l.forEach(function(A){return I[A]=0});var S=x.locToIndex(I),_=C.slice(-n.rank);f.forEach(function(A){return _[A]=0});var E=b.locToIndex(_),D=o(u[2*S],u[2*S+1],c[2*E],c[2*E+1]);h[w]=D.real,d[w]=D.imag};for(p=0;p<h.length;p++)y(p)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(e,n,o){return Qc(e,n,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,o,a,i,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],h=u[3],d=n.shape[0],p=a[0],m=a[1],v=se([d,p,m,h],"float32"),g=this.readSync(n.dataId),x=this.readSync(o.dataId),b=this.readSync(e.dataId),y=e.strides,w=v.strides,C=0;C<d;C++){var I=4*C,S=g[I],_=g[I+1],E=g[I+2],D=g[I+3],A=x[C];if(!(A>=c))for(var P=p>1?(E-S)*(l-1)/(p-1):0,M=m>1?(D-_)*(f-1)/(m-1):0,B=0;B<p;B++){var W=p>1?S*(l-1)+B*P:.5*(S+E)*(l-1);if(W<0||W>l-1)for(var N=0;N<m;N++)for(var O=0;O<h;O++){var H=O+N*w[2]+B*w[1]+C*w[0];v.values[H]=s}else if(i==="bilinear"){var G=Math.floor(W),j=Math.ceil(W),V=W-G;for(N=0;N<m;N++)if((de=m>1?_*(f-1)+N*M:.5*(_+D)*(f-1))<0||de>f-1)for(O=0;O<h;O++)H=O+N*w[2]+B*w[1]+C*w[0],v.values[H]=s;else{var K=Math.floor(de),oe=Math.ceil(de),re=de-K;for(O=0;O<h;O++){var ne=b[H=O+K*y[2]+G*y[1]+A*y[0]],ue=b[H=O+oe*y[2]+G*y[1]+A*y[0]],he=b[H=O+K*y[2]+j*y[1]+A*y[0]],pe=ne+(ue-ne)*re,Fe=he+(b[H=O+oe*y[2]+j*y[1]+A*y[0]]-he)*re;H=O+N*w[2]+B*w[1]+C*w[0],v.values[H]=pe+(Fe-pe)*V}}}else for(N=0;N<m;++N){var de;if((de=m>1?_*(f-1)+N*M:.5*(_+D)*(f-1))<0||de>f-1)for(O=0;O<h;O++)H=O+N*w[2]+B*w[1]+C*w[0],v.values[H]=s;else{var we=Math.round(de),ge=Math.round(W);for(O=0;O<h;O++){var De=O+we*y[2]+ge*y[1]+A*y[0],ke=O+N*w[2]+B*w[1]+C*w[0];v.values[ke]=b[De]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(e,n,o,a){var i=Sr(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,f=i.outputSize;return this.scatter(e,n,o,f,c,u,s,l,a,!1)},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=Ci(e,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return $e([],s,e.dtype);for(var f=new Er([u,c],e.dtype),h=this.readSync(n.dataId),d=this.readSync(e.dataId),p=0;p<u;p++){for(var m=[],v=0,g=0;g<a;g++){var x=h[p*a+g];v+=x*l[g],m.push(x)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+m+" does not index into "+e.shape);for(var b=0;b<c;b++)f.values[p*c+b]=d[v*c+b]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,o){var a=Sr(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=X(0);return this.scatter(e,n,o,l,u,s,i,c,f,!0)},t.prototype.fill=function(e,n,o){var a=Cr(o=o||sr(n),Z(e));return a.fill(n),F.makeTensor(a,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=Cr(e.dtype,Z(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,o){return Si(e,n,o)},t.prototype.scatter=function(e,n,o,a,i,s,u,c,l,f){var h=[a/i,i],d=this.readSync(e.dataId),p=this.readSync(n.dataId);if(a===0)return $e([],o,n.dtype);var m=new Er(h,n.dtype);m.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var g=[],x=0,b=0;b<u;b++){var y=d[v*u+b];g.push(y),x+=y*c[b]}if(x<0||x>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<i;w++)f?m.values[x*i+w]+=p[v*i+w]:m.values[x*i+w]=n.rank===0?p[0]:p[v*i+w]}return m.toTensor().reshape(o)},t}($c);F.registerBackend("cpu",function(){return new Xg},1);for(var ma=0,lu=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e;q(a,"NonMaxSuppressionWithScore");var d=Di(h.data.get(a.dataId).values,h.data.get(i.dataId).values,u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e;q(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:Tr,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e;q([o,a],Tr);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(h,d,p,m,v,g){var x=fe(h,d),b=x.length,y=_t(x),w=rr(v,Z(x)),C=h.length,I=d.length,S=_t(h),_=_t(d),E=Xt(h,x),D=Xt(d,x);if(E.length+D.length===0)for(var A=0;A<w.length;++A)w[A]=g(p[A%p.length],m[A%m.length]);else{var P=function(M){var B=nc(M,b,y),W=B.slice(-C);E.forEach(function(G){return W[G]=0});var N=Va(W,C,S),O=B.slice(-I);D.forEach(function(G){return O[G]=0});var H=Va(O,I,_);w[M]=g(p[N],m[H])};for(A=0;A<w.length;++A)P(A)}return[w,x]}(o.shape,a.shape,s,u,o.dtype,function(h,d){var p=h-d;return p*p}),l=c[0],f=c[1];return{dataId:i.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];ma<lu.length;ma++)Hu(lu[ma]);var Un,$g=function(r){this.variableNames=["A"];var t=Je(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},Yg=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=Je(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var ga=0,fu=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t.pixels,a=n.numChannels,i=typeof HTMLVideoElement!="undefined"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],h=[l,c,a];(s||i)&&(Un==null&&(Un=document.createElement("canvas").getContext("2d")),Un.canvas.width=c,Un.canvas.height=l,Un.drawImage(o,0,0,c,l),o=Un.canvas);var d=e.makeTensorInfo(f,"int32");e.texData.get(d.dataId).usage=ht.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);var p=U().getBool("WEBGL_PACK")?new Yg(h):new $g(h),m=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;vo("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e,d=Di(h.readSync(a.dataId),h.readSync(i.dataId),u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e,a=new ce(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:Tr,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e,s=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new jt("return (a - b) * (a - b);",o.shape,a.shape):new Te("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];ga<fu.length;ga++)Hu(fu[ga]);for(var ya=0,hu=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:Tr,gradFunc:function(r,t){var e=t[0],n=t[1],o=X(2);return{a:function(){return et(r,et(o,Ue(e,n)))},b:function(){return et(r,et(o,Ue(n,e)))}}}}];ya<hu.length;ya++)Zh(hu[ya]);var Qg=function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r}();U().get("IS_BROWSER")&&U().setPlatform("browser",new Qg);var xa,Jg=function(){return require("node-fetch")},Zg=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return U().global.fetch!=null?U().global.fetch(t,e):(xa==null&&(xa=Jg()),xa(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r}();U().get("IS_NODE")&&U().setPlatform("node",new Zg);var ei={float32:4,int32:4,uint16:2,uint8:1,bool:1},Ro=4;function uf(r,t){for(var e={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=Z(l),h=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=ei[d.dtype],m=r.slice(n,n+f*p),v=d.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(c==="float32")h=Float32Array.from(v,function(C){return C*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(v,function(C){return Math.round(C*d.scale+d.min)})}n+=f*p}else if(c==="string"){var g=Z(s.shape);h=[];for(var x=0;x<g;x++){var b=new Uint32Array(r.slice(n,n+Ro))[0];n+=Ro;var y=new Uint8Array(r.slice(n,n+b));h.push(y),n+=b}}else{var w=ei[c];if(m=r.slice(n,n+f*w),c==="float32")h=new Float32Array(m);else if(c==="int32")h=new Int32Array(m);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(m)}n+=f*w}e[u]=$e(h,l,c)},a=0,i=t;a<i.length;a++)o(i[a]);return e}function e0(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach(function(a){if(t+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var n=new Uint8Array(t),o=0;return e.forEach(function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),n.buffer}var ti=typeof Buffer!="undefined"&&(typeof Blob=="undefined"||typeof atob=="undefined"||typeof btoa=="undefined");function du(r){return ti?Buffer.byteLength(r):new Blob([r]).size}function $i(r){var t=0;r.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),n=0;return r.forEach(function(o){e.set(new Uint8Array(o),n),n+=o.byteLength}),e.buffer}function pu(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function Wr(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:du(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:du(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var pt=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(t,n);i!==null&&o.push(i)}),o},r}(),Jn="://",fn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){R(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Jn)&&(t=t.slice(0,t.indexOf(Jn))),R(t.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();R(n.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function so(r){if(r.indexOf(Jn)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+fn.getSchemes().join(","));return{scheme:r.split(Jn)[0],path:r.split(Jn)[1]}}function vu(r,t,e){return e===void 0&&(e=!1),Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f;return J(this,function(h){switch(h.label){case 0:return R(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),R((n=pt.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),R(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],R((a=pt.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),R(a.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."}),i=a[0],s=so(r).scheme,u=so(r).path,c=s===so(r).scheme,[4,o.load()];case 1:return l=h.sent(),e&&c?[4,fn.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,i.save(l)];case 4:return f=h.sent(),!e||c?[3,6]:[4,fn.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var kn="models_store",cn="model_info_store";function cf(){if(!U().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function ni(r){var t=r.result;t.createObjectStore(kn,{keyPath:"modelPath"}),t.createObjectStore(cn,{keyPath:"modelPath"})}var Zn=function(){function r(t){if(this.indexedDB=cf(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return Q(this,void 0,void 0,function(){return J(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return Q(this,void 0,void 0,function(){return J(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return ni(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(kn,"readonly"),c=u.objectStore(kn).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(m){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=Wr(e),h=s.transaction(cn,"readwrite"),d=h.objectStore(cn),p=d.put({modelPath:n.modelPath,modelArtifactsInfo:f});p.onsuccess=function(){var m=(l=s.transaction(kn,"readwrite")).objectStore(kn).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:f});m.onsuccess=function(){return o({modelArtifactsInfo:f})},m.onerror=function(v){var g=(d=h.objectStore(cn)).delete(n.modelPath);g.onsuccess=function(){return s.close(),a(m.error)},g.onerror=function(x){return s.close(),a(m.error)}}},p.onerror=function(m){return s.close(),a(p.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),mu=function(r){return U().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Zn.URL_SCHEME)?(t=r.slice(Zn.URL_SCHEME.length),new Zn(t)):null;var t};pt.registerSaveRouter(mu),pt.registerLoadRouter(mu);var t0=function(){function r(){this.indexedDB=cf()}return r.prototype.listModels=function(){return Q(this,void 0,void 0,function(){var t=this;return J(this,function(e){return[2,new Promise(function(n,o){var a=t.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return ni(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(cn,"readonly"),u=s.objectStore(cn).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(t){return Q(this,void 0,void 0,function(){var e=this;return J(this,function(n){var o;return t=(o=t).startsWith(Zn.URL_SCHEME)?o.slice(Zn.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return ni(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(cn,"readwrite"),f=l.objectStore(cn),h=f.get(t);h.onsuccess=function(){if(h.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var d=f.delete(t),p=function(){var m=(u=c.transaction(kn,"readwrite")).objectStore(kn).delete(t);m.onsuccess=function(){return a(h.result.modelArtifactsInfo)},m.onerror=function(v){return i(h.error)}};d.onsuccess=p,d.onerror=function(m){return p(),c.close(),i(h.error)}},h.onerror=function(d){return c.close(),i(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(U().getBool("IS_BROWSER"))try{fn.registerManager(Zn.URL_SCHEME,new t0)}catch{}var Kt="/",Xn="tensorflowjs_models",lf="info",n0="model_topology",r0="weight_specs",o0="weight_data",a0="model_metadata";function ff(r){return{info:[Xn,r,lf].join(Kt),topology:[Xn,r,n0].join(Kt),weightSpecs:[Xn,r,r0].join(Kt),weightData:[Xn,r,o0].join(Kt),modelMetadata:[Xn,r,a0].join(Kt)}}function i0(r){var t=r.split(Kt);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(Kt)}var er=function(){function r(t){if(!U().getBool("IS_BROWSER")||typeof window=="undefined"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=ff(this.modelPath)}return r.prototype.save=function(t){return Q(this,void 0,void 0,function(){var e,n,o;return J(this,function(a){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=Wr(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(ti)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return Q(this,void 0,void 0,function(){var t,e,n,o,a,i,s;return J(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(ti){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),d=0;d<f.length;++d)h.set([f.charCodeAt(d)],d);return h.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),gu=function(r){return U().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(er.URL_SCHEME)?(t=r.slice(er.URL_SCHEME.length),new er(t)):null;var t};pt.registerSaveRouter(gu),pt.registerLoadRouter(gu);var s0=function(){function r(){R(U().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),R(typeof window=="undefined"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return Q(this,void 0,void 0,function(){var t,e,n,o,a,i;return J(this,function(s){for(t={},e=Xn+Kt,n=Kt+lf,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=i0(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]})})},r.prototype.removeModel=function(t){return Q(this,void 0,void 0,function(){var e,n;return J(this,function(o){var a;if(t=(a=t).startsWith(er.URL_SCHEME)?a.slice(er.URL_SCHEME.length):a,e=ff(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},r}();if(U().getBool("IS_BROWSER"))try{fn.registerManager(er.URL_SCHEME,new s0)}catch{}var u0="model",c0=".json",l0=".weights.bin";function yu(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var ba=function(){function r(t){if(!U().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=u0),this.modelTopologyFileName=t+c0,this.weightDataFileName=t+l0}return r.prototype.save=function(t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s;return J(this,function(u){switch(u.label){case 0:if(typeof document=="undefined")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,yu(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,yu(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:Wr(t)}]}})})},r.URL_SCHEME="downloads://",r}(),f0=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return Q(this,void 0,void 0,function(){var t,e,n=this;return J(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&a({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=n.checkManifestAndWeightFiles(f,e)}catch(v){return void i(v)}var d=[],p=[],m=[];f.forEach(function(v){v.paths.forEach(function(g){p.push(g),m.push(null)}),d.push.apply(d,v.weights)}),f.forEach(function(v){v.paths.forEach(function(g){var x=new FileReader;x.onload=function(b){var y=b.target.result,w=p.indexOf(g);m[w]=y,m.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:d,weightData:$i(m),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},x.onerror=function(b){return i("Failed to weights data from file of path '"+g+"'.")},x.readAsArrayBuffer(h[g])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],o=e.map(function(u){return pu(u.name)}),a={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var c=pu(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=e[o.indexOf(c)]});if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return a},r}();function xu(r,t,e,n){(function(a){R(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){R(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),R(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),R(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(e=e==null?0:e,n=n==null?1:n);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=e+ ++o/r.length*(n-e);return t(s),i}),a}))}function hf(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l;return J(this,function(f){switch(f.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?U().platform.fetch:t.fetchFunc,n=r.map(function(h){return e(h,t.requestInit,{isBinary:!0})}),o=0,a=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=f.sent(),[3,4];case 2:return[4,xu(n,t.onProgress,o,a)];case 3:i=f.sent(),f.label=4;case 4:return s=i.map(function(h){return h.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,xu(s,t.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function bu(r){var t=this;return function(e,n,o){return n===void 0&&(n=""),Q(t,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p;return J(this,function(m){switch(m.label){case 0:if(a=e.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(v,g){var x=0;v.weights.forEach(function(b){var y="quantization"in b?b.quantization.dtype:b.dtype,w=ei[y]*Z(b.shape),C=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:b,groupOffset:x,sizeBytes:w})};o!=null?o.forEach(function(I,S){I===b.name&&(C(),s[S]=!0)}):C(),u.push(b.name),x+=w})}),!s.every(function(v){return v}))throw c=o.filter(function(v,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(v,g,x){return g&&v.push(x),v},[]),f=[],l.forEach(function(v){e[v].paths.forEach(function(g){var x=n+(n.endsWith("/")?"":"/")+g;f.push(x)})}),[4,r(f)];case 1:return h=m.sent(),d={},p=0,l.forEach(function(v){for(var g=e[v].paths.length,x=0,b=0;b<g;b++)x+=h[p+b].byteLength;for(var y=new ArrayBuffer(x),w=new Uint8Array(y),C=0,I=0;I<g;I++){var S=new Uint8Array(h[p+I]);w.set(S,C),C+=S.byteLength}i[v].forEach(function(_){var E=uf(y.slice(_.groupOffset,_.groupOffset+_.sizeBytes),[_.manifestEntry]);for(var D in E)d[D]=E[D]}),p+=g}),[2,d]}})})}}pt.registerSaveRouter(function(r){return U().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(ba.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new ba(t)}(r.slice(ba.URL_SCHEME.length)):null});var df=function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(R(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=U().platform.fetch,R(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&R(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return Q(this,void 0,void 0,function(){var e,n,o,a;return J(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:Wr(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return Q(this,void 0,void 0,function(){var t,e,n,o,a,i,s,u,c,l,f,h;return J(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,t.json()];case 3:return e=d.sent(),[3,5];case 4:throw d.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:h=d.sent(),l=h[0],f=h[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,h;return J(this,function(d){switch(d.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(p){var m=p.lastIndexOf("/"),v=p.lastIndexOf("?"),g=p.substring(0,m),x=v>m?p.substring(v):"";return[g+"/",x]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],t.forEach(function(p){p.paths.forEach(function(m){f.push(i+m+a)})}),[4,hf(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=d.sent(),[2,[s,$i(h)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function ri(r){return r.match(df.URL_SCHEME_REGEX)!=null}var wu=function(r,t){return typeof fetch=="undefined"?null:(Array.isArray(r)?r.every(function(e){return ri(e)}):ri(r))?oi(r,{onProgress:t}):null};function oi(r,t){return new df(r,t)}pt.registerSaveRouter(wu),pt.registerLoadRouter(wu);var wa=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return Q(this,void 0,void 0,function(){return J(this,function(t){return[2,this.modelArtifacts]})})},r}(),h0=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return Q(this,void 0,void 0,function(){return J(this,function(e){return[2,this.saveHandler(t)]})})},r}(),pf=Object.freeze({browserFiles:function(r){return new f0(r)},browserHTTPRequest:function(r,t){return oi(r,t)},concatenateArrayBuffers:$i,decodeWeights:uf,encodeWeights:function(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return J(this,function(u){switch(u.label){case 0:for(e=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],f=Array.isArray(r)?r[c].tensor:r[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var d=new Promise(function(p){return Q(s,void 0,void 0,function(){var m,v,g,x,b,y,w;return J(this,function(C){switch(C.label){case 0:return[4,f.bytes()];case 1:for(m=C.sent(),v=m.reduce(function(I,S){return I+S.length},0)+Ro*m.length,g=new Uint8Array(v),x=0,b=0;b<m.length;b++)y=m[b],w=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(w,x),x+=Ro,g.set(y,x),x+=y.length;return p(g),[2]}})})});n.push(d)}else n.push(f.data());t!=null&&(h.group=t),e.push(h)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:e0(u.sent()),specs:e}]}})})},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new wa(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new wa({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new wa({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n}))},getLoadHandlers:function(r,t){return pt.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:Wr,getSaveHandlers:function(r){return pt.getSaveHandlers(r)},http:oi,isHTTPScheme:ri,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),Q(this,void 0,void 0,function(){return J(this,function(o){return[2,bu(function(a){return hf(a,{requestInit:n})})(r,t,e)]})})},registerLoadRouter:function(r){return pt.registerLoadRouter(r)},registerSaveRouter:function(r){return pt.registerSaveRouter(r)},weightsLoaderFactory:bu,withSaveHandler:function(r){return new h0(r)},copyModel:function(r,t){return Q(this,void 0,void 0,function(){return J(this,function(e){return[2,vu(r,t,!1)]})})},listModels:function(){return Q(this,void 0,void 0,function(){var r,t,e,n,o,a,i;return J(this,function(s){switch(s.label){case 0:r=fn.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(o=n[e],[4,fn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+Jn+i]=a[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return Q(this,void 0,void 0,function(){return J(this,function(e){return[2,vu(r,t,!0)]})})},removeModel:function(r){return Q(this,void 0,void 0,function(){var t;return J(this,function(e){return t=so(r),[2,fn.getManager(t.scheme).removeModel(t.path)]})})}}),Gn,d0=T({confusionMatrix_:function(r,t,e){var n=k(r,"labels","confusionMatrix"),o=k(t,"predictions","confusionMatrix");R(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),R(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),R(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),R(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),R(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var a=$a(n.asType("int32"),e),i=$a(o.asType("int32"),e);return a.transpose().matMul(i).asType("int32")}});Object.freeze({confusionMatrix:d0});var p0=T({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData!="undefined"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement!="undefined"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Gu("FromPixels",F.backendName)!=null)return F.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],f=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,f).data:n||e?s=r.data:(a||o)&&(Gn==null&&(Gn=document.createElement("canvas").getContext("2d")),Gn.canvas.width=l,Gn.canvas.height=f,Gn.drawImage(r,0,0,l,f),s=Gn.getImageData(0,0,l,f).data),t===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*t);for(var d=0;d<h;d++)for(var p=0;p<t;++p)u[d*t+p]=s[4*d+p]}return xi(u,[f,l,t],"int32")}}),Yi=Object.freeze({toPixels:function(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,h,d,p,m,v,g,x,b,y,w,C,I,S;return J(this,function(_){switch(_.label){case 0:if(e=k(r,"img","toPixels"),r instanceof Ie||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),o=n[0],a=n[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=_.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=_.sent(),f=l[0],h=l[1],d=f[0],p=h[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(m=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)x=void 0,b=void 0,y=void 0,w=void 0,i===1?(x=s[g]*m,b=s[g]*m,y=s[g]*m,w=255):i===3?(x=s[3*g]*m,b=s[3*g+1]*m,y=s[3*g+2]*m,w=255):i===4&&(x=s[4*g]*m,b=s[4*g+1]*m,y=s[4*g+2]*m,w=s[4*g+3]*m),v[(C=4*g)+0]=Math.round(x),v[C+1]=Math.round(b),v[C+2]=Math.round(y),v[C+3]=Math.round(w);return t!=null&&(t.width=a,t.height=o,I=t.getContext("2d"),S=new ImageData(v,a,o),I.putImageData(S,0,0)),e!==r&&e.dispose(),[2,v]}})})},fromPixels:p0}),vf=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r}(),mf=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function yn(r){R(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),R(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),R(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),mf.register(r)}Object.freeze({Serializable:vf,SerializationMap:mf,registerClass:yn});var v0=.001,gf=.1;function Ca(){return F.backend.floatPrecision()===32?v0:gf}function _a(r,t,e){var n=!0;if((Ye(r)||Ye(t))&&(n=!1),Ye(r)&&Ye(t)&&(n=!0),n){var o=r.constructor.name,a=t.constructor.name;if(o!==a)throw new Error("Arrays are of different type. Actual: "+o+". Expected: "+a)}if(Array.isArray(r)&&Array.isArray(t)){var i=Lt(r),s=Lt(t);if(!Pe(i,s))throw new Error("Arrays have different shapes. Actual: ["+i+"]. Expected: ["+s+"]")}var u=Ye(r)?r:$t(r),c=Ye(t)?t:$t(t);if(u.length!==c.length)throw new Error("Arrays have different lengths actual: "+u.length+" vs expected: "+c.length+`.
Actual:   `+u+`.
Expected: `+c+".");for(var l=0;l<c.length;++l){var f=u[l],h=c[l];if(!e(f,h))throw new Error("Arrays differ: actual["+l+"] = "+f+", expected["+l+"] = "+h+`.
Actual:   `+u+`.
Expected: `+c+".")}}function Ea(r,t,e){return!isFinite(r)&&!isFinite(t)||!(isNaN(r)||isNaN(t)||Math.abs(r-t)>e)}Object.freeze({TEST_EPSILON_FLOAT16:gf,expectArraysClose:function(r,t,e){return e==null&&(e=Ca()),_a(r,t,function(n,o){return Ea(n,o,e)})},testEpsilon:Ca,expectPromiseToFail:function(r,t){r().then(function(){return t.fail()},function(){return t()})},expectArraysEqual:function(r,t){var e=typeof t=="string"||typeof t=="number"||typeof t=="boolean"?[t]:t;return un(r)||un(r[0])||un(t)||un(t[0])?_a(r,e,function(n,o){return n==o}):_a(r,t,function(n,o){return Ea(n,o,0)})},expectNumbersClose:function(r,t,e){if(e==null&&(e=Ca()),!Ea(r,t,e))throw new Error("Numbers differ: actual === "+r+", expected === "+t)},expectValuesInRange:function(r,t,e){for(var n=0;n<r.length;n++)if(r[n]<t||r[n]>e)throw new Error("Value out of range:"+r[n]+" low: "+t+", high: "+e)},expectArrayBuffersEqual:function(r,t){expect(new Float32Array(r)).toEqual(new Float32Array(t))}});Object.freeze({gpgpu_util:Lp,webgl_util:ud,forceHalfFloat:function(){U().set("WEBGL_FORCE_F16_TEXTURES",!0)},MathBackendWebGL:Sl,setWebGLContext:sc,GPGPUContext:wl});var On=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return kt(t,r),t.prototype.minimize=function(e,n,o){n===void 0&&(n=!1);var a=this.computeGradients(e,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return ct(s),n?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return Ud(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&ct(this.iterations_)},t.prototype.saveIterations=function(){return Q(this,void 0,void 0,function(){return J(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:X(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){return J(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){return J(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return Q(this,void 0,void 0,function(){var n;return J(this,function(o){switch(o.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(vf);Object.defineProperty(On,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var m0=function(r){function t(e,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=e,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=F.backend.epsilon()),a}return kt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:$(function(){return ve(i).variable(!1)})}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:$(function(){return ve(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;$(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),f=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),h=c.mul(n.rho).add(f.square().mul(1-n.rho));u.assign(l),c.assign(h);var d=f.mul(-n.learningRate).add(i);i.assign(d)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(ct(this.accumulatedGrads.map(function(e){return e.variable})),ct(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){var e;return J(this,function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){var n;return J(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t}(On);yn(m0);var g0=function(r){function t(e,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return kt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:$(function(){return Bt(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable;$(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(F.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&ct(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){return J(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t}(On);yn(g0);var y0=function(r){function t(e,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],$(function(){i.accBeta1=X(n).variable(),i.accBeta2=X(o).variable()}),a==null&&(i.epsilon=F.backend.epsilon()),i}return kt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);$(function(){var a=Ue(1,n.accBeta1),i=Ue(1,n.accBeta2);o.forEach(function(s,u){var c=F.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:$(function(){return ve(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:$(function(){return ve(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,h=n.accumulatedSecondMoment[u].variable,d=f.mul(n.beta1).add(l.mul(1-n.beta1)),p=h.mul(n.beta2).add(l.square().mul(1-n.beta2)),m=d.div(a),v=p.div(i);f.assign(d),h.assign(p);var g=m.div(v.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(g)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&ct(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&ct(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){var e;return J(this,function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){var n,o=this;return J(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),$(function(){o.accBeta1.assign(Eo(o.beta1,o.iterations_+1)),o.accBeta2.assign(Eo(o.beta2,o.iterations_+1))}),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t}(On);yn(y0);var x0=function(r){function t(e,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],$(function(){s.iteration=X(0).variable(),s.accBeta1=X(n).variable()}),a==null&&(s.epsilon=F.backend.epsilon()),s}return kt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);$(function(){var a=Ue(1,n.accBeta1),i=wt(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=F.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ve(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:ve(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,h=n.accumulatedWeightedInfNorm[u].variable,d=f.mul(n.beta1).add(l.mul(1-n.beta1)),p=h.mul(n.beta2),m=l.abs(),v=p.maximum(m);f.assign(d),h.assign(v);var g=i.div(a).mul(d.div(v.add(n.epsilon))).add(c);c.assign(g)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&ct(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&ct(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){return J(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){return J(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t}(On);yn(x0);var yf=function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return kt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=Array.isArray(e)?e[a].tensor:e[o];if(i!=null){var s=F.registeredVariables[o];$(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=cd(X(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){return J(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t}(On);yn(yf);var b0=function(r){function t(e,n,o){o===void 0&&(o=!1);var a=r.call(this,e)||this;return a.learningRate=e,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=X(a.momentum),a}return kt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:$(function(){return ve(i).variable(!1)})});var s=n.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[o];u!=null&&$(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&ct(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){return J(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t}(yf);yn(b0);var w0=function(r){function t(e,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=F.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return kt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:$(function(){return ve(i).variable(!1)})}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:$(function(){return ve(i).variable(!1)})}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:$(function(){return ve(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;$(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var f=n.accumulatedMeanGrads[a].variable,h=f.mul(n.decay).add(s.mul(1-n.decay)),d=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(h.square().add(n.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(d);var p=i.sub(d);i.assign(p)}else{var m=u.mul(n.decay).add(s.square().mul(1-n.decay));d=c.mul(n.momentum).add(s.mul(n.learningRate).div(m.add(n.epsilon).sqrt())),u.assign(m),c.assign(d),p=i.sub(d),i.assign(p)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&ct(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&ct(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&ct(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){var e;return J(this,function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){var n;return J(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t}(On);yn(w0);Ie.prototype.squaredDifference=function(r){return Al(this,r)},z=Kg;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ai=function(r,t){return ai=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},ai(r,t)};function ie(r,t){ai(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Qe=function(){return Qe=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},Qe.apply(this,arguments)};function ee(r,t,e,n){function o(a){return a instanceof e?a:new e(function(i){i(a)})}return new(e||(e=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(f){i(f)}}function u(l){try{c(n.throw(l))}catch(f){i(f)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,t||[])).next())})}function te(r,t){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){e.label=c[1];break}if(c[0]===6&&e.label<a[1]){e.label=a[1],a=c;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(c);break}a[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function wr(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),o=0,t=0;t<e;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var tr=function(){function r(t,e){if(!In(t)||!In(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function qo(r,t){return r instanceof Ie&&r.shape.length===t}function C0(r){return qo(r,2)}function jo(r){return qo(r,3)}function hn(r){return qo(r,4)}function _0(r){return r%1!==0}function Cu(r){return r%2===0}function E0(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function _u(r){return r&&r.width&&r.height}function k0(r,t){var e=r.width,n=r.height,o=t/Math.max(n,e);return new tr(Math.round(e*o),Math.round(n*o))}function Qi(r){return r.reduce(function(t,e){return t.add(e)},new xe(0,0)).div(new xe(r.length,r.length))}function Fr(r,t,e){return Array(r).fill(0).map(function(n,o){return t+o*e})}function In(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Eu(r){return In(r)&&0<=r&&r<=1}var xe=function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),vn=function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},o=[n.left,n.top,n.right,n.bottom].every(In),a=[n.x,n.y,n.width,n.height].every(In);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(In)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new xe(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new xe(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new xe(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new xe(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,o=t.width,a=t.height,i=Math.abs(o-a);return o<a&&(e-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:e,y:n,width:o,height:a})},r.prototype.rescale=function(t){var e=_u(t)?t.width:t,n=_u(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,f=s-c,h=Math.min(l,t-u),d=Math.min(f,e-c);return new r({x:u,y:c,width:h,height:d}).floor()},r.prototype.shift=function(t,e){var n=this,o=n.width,a=n.height,i=this.x+t,s=this.y+e;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>e&&(s=-f+e+n,f=e),h>t&&(u=-h+t+o,h=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:h,x:c,ex:f,w:n,h:o}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r}(),Ko=function(r){ie(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:n,right:o,bottom:a},i)||this}return t}(vn),xf=function(){function r(t,e,n,o,a){this._imageDims=new tr(a.width,a.height),this._score=t,this._classScore=e,this._className=n,this._box=new vn(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new vn(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r}(),zt=function(r){ie(t,r);function t(e,n,o){return r.call(this,e,e,"",n,o)||this}return t.prototype.forSize=function(e,n){var o=r.prototype.forSize.call(this,e,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new t(a,i,s)},t}(xf);function R0(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),o=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),a=n*o;return e?a/(r.area+t.area-a):a/Math.min(r.area,t.area)}function I0(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),a=t.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new Ko(n,o,a,i)}function Nr(r,t,e,n){n===void 0&&(n=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],h=r[s],d=r[f];c.push(R0(h,d,n))}o=o.filter(function(p,m){return c[m]<=e})};o.length>0;)i();return a}function Vr(r,t){return $(function(){var e=t[0],n=t[1],o=t[2],a=Bt(wr(r.shape.slice(0,3),[1]),e),i=Bt(wr(r.shape.slice(0,3),[1]),n),s=Bt(wr(r.shape.slice(0,3),[1]),o),u=Ve([a,i,s],3);return Ue(r,u)})}function S0(r,t){return t===void 0&&(t=!1),$(function(){var e=r.shape.slice(1),n=e[0],o=e[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(t?.5:1)),s=n>o?2:1,u=function(d){var p=r.shape.slice();return p[s]=d,Bt(p,0)},c=u(i),l=a-c.shape[s],f=t&&l?u(l):null,h=[f,r,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return Ve(h,s)})}function ka(r){return 1/(1+Math.exp(-r))}var Ji=function(r){ie(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:n,width:o,height:a},i)||this}return t}(vn),A0=.5,D0=.43,T0=.45,Io=function(){function r(t,e,n){n===void 0&&(n=new xe(0,0));var o=e.width,a=e.height;this._imgDims=new tr(o,a),this._shift=n,this._positions=t.map(function(i){return i.mul(new xe(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new xe(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new xe(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new xe(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof zt?t.box.floor():new vn(t);return this.shiftBy(n.x,n.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],o=t[2],a=function(f){return o.sub(f).magnitude()},i=(a(e)+a(n))/2,s=Math.floor(i/T0),u=Qi(t),c=Math.floor(Math.max(0,u.x-A0*s)),l=Math.floor(Math.max(0,u.y-D0*s));return new Ji(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=I0(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),F0=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],Qi([e[3],e[4]])]},t}(Io),N0=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Qi)},t}(Io),ku=function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+E0(this.distance)+")":"")},r}(),Ru=function(r){ie(t,r);function t(e,n){var o=r.call(this,e)||this;return o._label=n,o}return t.assertIsValidLabeledBox=function(e,n){if(vn.assertIsValidBox(e,n),!In(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(vn),$n=function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r}();(function(r){ie(t,r);function t(e,n,o,a){var i=r.call(this,e,n)||this;return i._score=o,i._classScore=a,i}return t.assertIsValidPredictedBox=function(e,n){if(Ru.assertIsValidLabeledBox(e,n),!Eu(e.score)||!Eu(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(Ru);function M0(r){return r.detection instanceof zt}function Zi(r,t){var e={detection:t};return Object.assign({},r,e)}function bf(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function wf(r){var t="";if(!r)try{r=require("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function Cf(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=wf();return Qe({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:t||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:n,fetch:o},a)}function _f(){return typeof window=="object"&&typeof document!="undefined"&&typeof HTMLImageElement!="undefined"&&typeof HTMLCanvasElement!="undefined"&&typeof HTMLVideoElement!="undefined"&&typeof ImageData!="undefined"&&typeof CanvasRenderingContext2D!="undefined"}function Ef(){return typeof global=="object"&&typeof require=="function"&&typeof module!="undefined"&&typeof process!="undefined"&&!!process.version}var Le;function P0(){if(!Le)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Le}function ii(r){Le=r}function es(){_f()&&ii(bf()),Ef()&&ii(Cf())}function O0(r){if(Le||es(),!Le)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?Le.Canvas:t,n=r.Image,o=n===void 0?Le.Image:n;Le.Canvas=e,Le.Image=o,Le.createCanvasElement=r.createCanvasElement||function(){return new e},Le.createImageElement=r.createImageElement||function(){return new o},Le.ImageData=r.ImageData||Le.ImageData,Le.Video=r.Video||Le.Video,Le.fetch=r.fetch||Le.fetch,Le.readFile=r.readFile||Le.readFile}var nt={getEnv:P0,setEnv:ii,initialize:es,createBrowserEnv:bf,createFileSystem:wf,createNodejsEnv:Cf,monkeyPatch:O0,isBrowser:_f,isNodejs:Ef};es();function kf(r){return!nt.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function Tn(r){var t=nt.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var o=kf(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var Iu;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(Iu||(Iu={}));function Rf(r){var t=nt.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function B0(r){return new Promise(function(t,e){if(r instanceof nt.getEnv().Canvas||Rf(r))return t();function n(a){!a.currentTarget||(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}function o(a){!a.currentTarget||(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function If(r){var t=nt.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new tr(r.naturalWidth,r.naturalHeight):r instanceof n?new tr(r.videoWidth,r.videoHeight):new tr(r.width,r.height)}function Xo(r){var t=r.width,e=r.height,n=nt.getEnv().createCanvasElement,o=n();return o.width=t,o.height=e,o}function ts(r,t){var e=nt.getEnv().ImageData;if(!(r instanceof e)&&!Rf(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=t||If(r),o=n.width,a=n.height,i=Xo({width:o,height:a});return r instanceof e?Tn(i).putImageData(r,0,0):Tn(i).drawImage(r,0,0,o,a),i}function L0(r,t){return ee(this,void 0,void 0,function(){var e,n,o,a,i,s;return te(this,function(u){switch(u.label){case 0:return e=t||nt.getEnv().createCanvasElement(),n=r.shape.slice(hn(r)?1:0),o=n[0],a=n[1],i=n[2],s=$(function(){return r.as3D(o,a,i).toInt()}),[4,Yi.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Su(r){var t=nt.getEnv(),e=t.Image,n=t.Canvas,o=t.Video;return r instanceof e||r instanceof n||r instanceof o}function W0(r,t,e){e===void 0&&(e=!1);var n=nt.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=If(r),s=t/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=Xo({width:t,height:t}),f=r instanceof a?r:ts(r),h=Math.abs(u-c)/2,d=e&&u<c?h:0,p=e&&c<u?h:0;return Tn(l).drawImage(f,d,p,u,c),l}var So=function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,a){if(jo(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(hn(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof nt.getEnv().Canvas?o:ts(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return Fr(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return k0({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,$(function(){var o=Fr(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof Ie){var u=hn(s)?s:s.expandDims();return u=S0(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=Hi.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof nt.getEnv().Canvas)return Yi.fromPixels(W0(s,t,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=mt(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,t,t,3);return a})},r}();function qe(r){return ee(this,void 0,void 0,function(){var t,e,n;return te(this,function(o){switch(o.label){case 0:if(r instanceof So)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=t.map(kf),n.forEach(function(a,i){if(!Su(a)&&!jo(a)&&!hn(a))throw typeof t[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+t[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(hn(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return Su(a)&&B0(a)}))];case 1:return o.sent(),[2,new So(n,Array.isArray(r))]}})})}function ns(r,t){return ee(this,void 0,void 0,function(){var e,n,o,a,i,s,u;return te(this,function(c){switch(c.label){case 0:return e=nt.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,qe(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof e?(i=a,[3,4]):[3,2];case 2:return[4,L0(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=Tn(n),u=t.map(function(l){return l instanceof zt?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var f=l.x,h=l.y,d=l.width,p=l.height,m=Xo({width:d,height:p});return Tn(m).putImageData(s.getImageData(f,h,d,p),0,0),m})]}})})}function rs(r,t){return ee(this,void 0,void 0,function(){return te(this,function(e){if(!jo(r)&&!hn(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(hn(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,$(function(){var n=r.shape.slice(hn(r)?1:0),o=n[0],a=n[1],i=n[2],s=t.map(function(c){return c instanceof zt?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,d=c.height;return Yl(r.as3D(o,a,i),[f,l,0],[d,h,i])});return u})]})})}function V0(r,t){return ee(this,void 0,void 0,function(){var e,n;return te(this,function(o){switch(o.label){case 0:return e=nt.getEnv().fetch,[4,e(r,t)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function z0(r){return ee(this,void 0,void 0,function(){return te(this,function(t){switch(t.label){case 0:return[4,V0(r)];case 1:return[2,t.sent().json()]}})})}function Sf(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:e,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function U0(r,t){return ee(this,void 0,void 0,function(){var e,n,o,a;return te(this,function(i){switch(i.label){case 0:return e=Sf(r,t),n=e.manifestUri,o=e.modelBaseUri,[4,z0(n)];case 1:return a=i.sent(),[2,pf.loadWeights(a,o)]}})})}var Zt=function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,o=e.objProp;return n[o]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof or})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof or)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,o=e.tensor;t.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,o=e.tensor,a=$e(o.dataSync());o.dispose(),t.reassignParamFromPath(n,a)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return ee(this,void 0,void 0,function(){return te(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return ee(this,void 0,void 0,function(){var e;return te(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,U0(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return ee(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return te(this,function(h){switch(h.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=nt.getEnv().readFile,n=Sf(t,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(d){return Promise.all(d.map(function(p){return e(p).then(function(m){return m.buffer})}))},s=pf.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,a)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+t);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=e.obj,o=e.objProp;if(!n||!o||!(n[o]instanceof Ie))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:o}},r}();function vt(r,t,e){return $(function(){var n=Wi(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=le(n,t.bias),n})}function Ra(r,t,e){return e===void 0&&(e=!1),$(function(){var n=Se(e?le(xt(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):vt(r,t.conv0,[2,2])),o=vt(n,t.conv1,[1,1]),a=Se(le(n,o)),i=vt(a,t.conv2,[1,1]);return Se(le(n,le(o,i)))})}function Qr(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),$(function(){var o=Se(e?le(xt(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):vt(r,t.conv0,n?[2,2]:[1,1])),a=vt(o,t.conv1,[1,1]),i=Se(le(o,a)),s=vt(i,t.conv2,[1,1]),u=Se(le(o,le(a,s))),c=vt(u,t.conv3,[1,1]);return Se(le(o,le(a,le(s,c))))})}function Et(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),$(function(){var o=le(xt(r,t.filters,[1,1],e),t.bias);return n?Se(o):o})}function en(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function $o(r,t){return function(e,n,o,a){var i=it(r(e*n*o*o),[o,o,e,n]),s=Me(r(n));return t.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function os(r,t){return function(e,n,o){var a=ln(r(e*n),[e,n]),i=Me(r(n));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var Af=function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r}();function as(r,t){return function(e,n,o){var a=it(r(9*e),[3,3,e,1]),i=it(r(e*n),[1,1,e,n]),s=Me(r(n));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new Af(a,i,s)}}function is(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),o=r(t+"/bias",1);return new Af(e,n,o)}}function xn(r,t){return function(e,n,o){var a=r[e];if(!qo(a,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+a);return t.push({originalPath:e,paramPath:o||e}),a}}function tn(r){var t=r;function e(o){var a=t.slice(0,o);return t=t.slice(o),a}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function Df(r,t){var e=$o(r,t),n=as(r,t);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),f=n(s,s,u+"/conv1"),h=n(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),f=l.conv0,h=l.conv1,d=l.conv2,p=n(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function G0(r){var t=[],e=tn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Df(n,t).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function Tf(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function Ff(r,t){var e=xn(r,t),n=Tf(e),o=is(e);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),h=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function H0(r){var t=[],e=Ff(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return en(r,t),{params:n,paramMappings:t}}var Nf=function(r){ie(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=Vr(o,a).div(X(255)),s=Qr(i,n.dense0,!0);return s=Qr(s,n.dense1),s=Qr(s,n.dense2),s=Qr(s,n.dense3),s=Lr(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return ee(this,void 0,void 0,function(){var n;return te(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return H0(e)},t.prototype.extractParams=function(e){return G0(e)},t}(Zt);function Ot(r,t){return $(function(){return le(Uo(r,t.weights),t.bias)})}function q0(r,t,e){var n=[],o=tn(r),a=o.extractWeights,i=o.getRemainingWeights,s=os(a,n),u=s(t,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function j0(r){var t=[],e=xn(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return en(r,t),{params:o,paramMappings:t}}function Mf(r){var t={},e={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?e:t;o[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var Pf=function(r){ie(t,r);function t(e,n){var o=r.call(this,e)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var a=e instanceof So?n.faceFeatureExtractor.forwardInput(e):e;return Ot(a.as2D(a.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return q0(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=Mf(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),j0(a)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=e.slice(0,e.length-a),s=e.slice(e.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},t}(Zt),Au=["neutral","happy","sad","angry","fearful","disgusted","surprised"],K0=function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);Au.forEach(function(n,o){e[n]=t[o]})}return r.prototype.asSortedArray=function(){var t=this;return Au.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r}(),X0=function(r){ie(t,r);function t(e){return e===void 0&&(e=new Nf),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return $(function(){return Qt(n.runNet(e))})},t.prototype.forward=function(e){return ee(this,void 0,void 0,function(){var n;return te(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return ee(this,void 0,void 0,function(){var n,o,a,i,s=this;return te(this,function(u){switch(u.label){case 0:return[4,qe(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(ze(o).map(function(c){return ee(s,void 0,void 0,function(){var l;return te(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new K0(c)}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(Pf);function Of(r,t){var e={expressions:t};return Object.assign({},r,e)}function $0(r){return M0(r)&&r.landmarks instanceof Io&&r.unshiftedLandmarks instanceof Io&&r.alignedRect instanceof zt}function ss(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),o=n.align(),a=r.detection.imageDims,i=new zt(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:t,alignedRect:i};return Object.assign({},r,s)}function Y0(r,t){var e=$o(r,t),n=as(r,t);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),f=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function Q0(r,t){var e=[],n=tn(r),o=n.extractWeights,a=n.getRemainingWeights,i=Y0(o,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:f,reduction_block_0:h,reduction_block_1:d},m={};Fr(t,0,1).forEach(function(b){m["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var v=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),x={reduction_block:v,separable_conv:g};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:m,exit_flow:x}}}function J0(r,t){var e=xn(r,t),n=Tf(e),o=is(e);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function Z0(r,t){var e=[],n=J0(r,e),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};Fr(t,0,1).forEach(function(v){h["main_block_"+v]=s("middle_flow/main_block_"+v)});var d=i("exit_flow/reduction_block"),p=a("exit_flow/separable_conv"),m={reduction_block:d,separable_conv:p};return en(r,e),{params:{entry_flow:f,middle_flow:h,exit_flow:m},paramMappings:e}}function Bf(r,t,e){return le(xt(r,t.filters,e,"same"),t.bias)}function Ia(r,t,e){e===void 0&&(e=!0);var n=e?Se(r):r;return n=vt(n,t.separable_conv0,[1,1]),n=vt(Se(n),t.separable_conv1,[1,1]),n=Ge(n,[3,3],[2,2],"same"),n=le(n,Bf(r,t.expansion_conv,[2,2])),n}function ey(r,t){var e=vt(Se(r),t.separable_conv0,[1,1]);return e=vt(Se(e),t.separable_conv1,[1,1]),e=vt(Se(e),t.separable_conv2,[1,1]),e=le(e,r),e}var ty=function(r){ie(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return $(function(){var a=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=Vr(a,i).div(X(256)),u=Se(Bf(s,o.entry_flow.conv_in,[2,2]));return u=Ia(u,o.entry_flow.reduction_block_0,!1),u=Ia(u,o.entry_flow.reduction_block_1),Fr(n._numMainBlocks,0,1).forEach(function(c){u=ey(u,o.middle_flow["main_block_"+c])}),u=Ia(u,o.exit_flow.reduction_block),u=Se(vt(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return ee(this,void 0,void 0,function(){var n;return te(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Z0(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return Q0(e,this._numMainBlocks)},t}(Zt);function ny(r){var t=[],e=tn(r),n=e.extractWeights,o=e.getRemainingWeights,a=os(n,t),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:i,gender:s}}}}function ry(r){var t=[],e=xn(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return en(r,t),{params:o,paramMappings:t}}var Ao;(function(r){r.FEMALE="female",r.MALE="male"})(Ao||(Ao={}));var oy=function(r){ie(t,r);function t(e){e===void 0&&(e=new ty(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var a=e instanceof So?n.faceFeatureExtractor.forwardInput(e):e,i=Lr(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=Ot(i,o.fc.age).as1D(),u=Ot(i,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e),a=o.age,i=o.gender;return{age:a,gender:Qt(i)}})},t.prototype.forward=function(e){return ee(this,void 0,void 0,function(){var n;return te(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return ee(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return te(this,function(l){switch(l.label){case 0:return[4,qe(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=ze(o.age),i=ze(o.gender),s=a.map(function(f,h){return{ageTensor:f,genderTensor:i[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,d=f.genderTensor;return ee(c,void 0,void 0,function(){var p,m,v,g,x;return te(this,function(b){switch(b.label){case 0:return[4,h.data()];case 1:return p=b.sent()[0],[4,d.data()];case 2:return m=b.sent()[0],v=m>.5,g=v?Ao.MALE:Ao.FEMALE,x=v?m:1-m,h.dispose(),d.dispose(),[2,{age:p,gender:g,genderProbability:x}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return ny(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=Mf(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),ry(a)},t.prototype.extractParams=function(e){var n=1539,o=e.slice(0,e.length-n),a=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},t}(Zt),Lf=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return $(function(){var s=function(h,d){return mt([Bt([68],h),Bt([68],d)],1).as2D(1,136).as1D()},u=function(h,d){var p=a[h],m=p.width,v=p.height;return d(m,v)?Math.abs(m-v)/2:0},c=function(h){return u(h,function(d,p){return d<p})},l=function(h){return u(h,function(d,p){return p<d})},f=e.mul(Bt([i,136],n)).sub(mt(Array.from(Array(i),function(h,d){return s(c(d),l(d))}))).div(mt(Array.from(Array(i),function(h,d){return s(a[d].width,a[d].height)})));return f})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e);return n.postProcess(o,e.inputSize,e.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},t.prototype.forward=function(e){return ee(this,void 0,void 0,function(){var n;return te(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return ee(this,void 0,void 0,function(){var n,o,a,i=this;return te(this,function(s){switch(s.label){case 0:return[4,qe(e)];case 1:return n=s.sent(),o=$(function(){return ze(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return ee(i,void 0,void 0,function(){var l,f,h,d,p;return te(this,function(m){switch(m.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[m.sent()]),d=l.filter(function(v,g){return Cu(g)}),p=l.filter(function(v,g){return!Cu(g)}),[2,new N0(Array(68).fill(0).map(function(v,g){return new xe(d[g],p[g])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(Pf),Wf=function(r){ie(t,r);function t(e){return e===void 0&&(e=new Nf),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(Lf);function ay(r){var t=[],e=Ff(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return en(r,t),{params:n,paramMappings:t}}function iy(r){var t=[],e=tn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Df(n,t).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u}}}var sy=function(r){ie(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=Vr(o,a).div(X(255)),s=Ra(i,n.dense0,!0);return s=Ra(s,n.dense1),s=Ra(s,n.dense2),s=Lr(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return ee(this,void 0,void 0,function(){var n;return te(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return ay(e)},t.prototype.extractParams=function(e){return iy(e)},t}(Zt),uy=function(r){ie(t,r);function t(e){return e===void 0&&(e=new sy),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(Lf);(function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(Wf);function cy(r,t){return le(et(r,t.weights),t.biases)}function us(r,t,e,n,o){o===void 0&&(o="same");var a=t.conv,i=a.filters,s=a.bias,u=xt(r,i,e,o);return u=le(u,s),u=cy(u,t.scale),n?Se(u):u}function ly(r,t){return us(r,t,[1,1],!0)}function Vf(r,t){return us(r,t,[1,1],!1)}function zf(r,t){return us(r,t,[2,2],!0,"valid")}function fy(r,t){function e(s,u,c){var l=r(s),f=l.length/(u*c*c);if(_0(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return $(function(){return pn(it(l,[u,f,c,c]),[2,3,1,0])})}function n(s,u,c,l){var f=e(s,u,c),h=Me(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function o(s,u){var c=Me(r(s)),l=Me(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var f=n(s,u,c,l+"/conv"),h=o(u,l+"/scale");return{conv:f,scale:h}}function i(s,u,c,l,f){f===void 0&&(f=!1);var h=a((f?.5:1)*s,u,c,l+"/conv1"),d=a(s,u,c,l+"/conv2");return{conv1:h,conv2:d}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function hy(r){var t=tn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=fy(e,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),m=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),x=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),I=$(function(){return pn(ln(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var S={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:d,conv64_2:p,conv64_3:m,conv128_down:v,conv128_1:g,conv128_2:x,conv256_down:b,conv256_1:y,conv256_2:w,conv256_down_out:C,fc:I};return{params:S,paramMappings:o}}function dy(r,t){var e=xn(r,t);function n(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function py(r){var t=[],e=dy(r,t),n=e.extractConvLayerParams,o=e.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),h=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),m=o("conv128_2"),v=o("conv256_down"),g=o("conv256_1"),x=o("conv256_2"),b=o("conv256_down_out"),y=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!C0(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:d,conv128_1:p,conv128_2:m,conv256_down:v,conv256_1:g,conv256_2:x,conv256_down_out:b,fc:y};return en(r,t),{params:w,paramMappings:t}}function Ft(r,t){var e=ly(r,t.conv1);return e=Vf(e,t.conv2),e=le(e,r),e=Se(e),e}function Jr(r,t){var e=zf(r,t.conv1);e=Vf(e,t.conv2);var n=Lr(r,2,2,"valid"),o=_e(n.shape),a=n.shape[3]!==e.shape[3],i=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(i){var s=wr(e.shape);s[1]=1;var u=_e(s);e=Ve([e,u],1);var c=wr(e.shape);c[2]=1;var l=_e(c);e=Ve([e,l],2)}return n=a?Ve([n,o],3):n,e=le(n,e),e=Se(e),e}var vy=function(r){ie(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return $(function(){var o=e.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=Vr(o,a).div(X(256)),s=zf(i,n.conv32_down);s=Ge(s,3,2,"valid"),s=Ft(s,n.conv32_1),s=Ft(s,n.conv32_2),s=Ft(s,n.conv32_3),s=Jr(s,n.conv64_down),s=Ft(s,n.conv64_1),s=Ft(s,n.conv64_2),s=Ft(s,n.conv64_3),s=Jr(s,n.conv128_down),s=Ft(s,n.conv128_1),s=Ft(s,n.conv128_2),s=Jr(s,n.conv256_down),s=Ft(s,n.conv256_1),s=Ft(s,n.conv256_2),s=Jr(s,n.conv256_down_out);var u=s.mean([1,2]),c=Uo(u,n.fc);return c})},t.prototype.forward=function(e){return ee(this,void 0,void 0,function(){var n;return te(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return ee(this,void 0,void 0,function(){var n,o,a,i=this;return te(this,function(s){switch(s.label){case 0:return[4,qe(e)];case 1:return n=s.sent(),o=$(function(){return ze(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return py(e)},t.prototype.extractParams=function(e){return hy(e)},t}(Zt);function Uf(r,t){var e={descriptor:t};return Object.assign({},r,e)}function Gf(r,t){var e={age:t};return Object.assign({},r,e)}function Hf(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var qf=function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,o=e.scaleFactor,a=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function my(r,t){function e(u,c){var l=it(r(9*u),[3,3,u,1]),f=Me(r(u)),h=Me(r(u)),d=Me(r(u)),p=Me(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:d,batch_norm_variance:p}}function n(u,c,l,f,h){var d=it(r(u*c*l*l),[l,l,u,c]),p=Me(r(c));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,f){var h=n(u,c,l,f,!0),d=h.filters,p=h.bias;return{filters:d,batch_norm_offset:p}}function a(u,c,l){var f=e(u,l+"/depthwise_conv"),h=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),f=a(128,128,"mobilenetv1/conv_3"),h=a(128,256,"mobilenetv1/conv_4"),d=a(256,256,"mobilenetv1/conv_5"),p=a(256,512,"mobilenetv1/conv_6"),m=a(512,512,"mobilenetv1/conv_7"),v=a(512,512,"mobilenetv1/conv_8"),g=a(512,512,"mobilenetv1/conv_9"),x=a(512,512,"mobilenetv1/conv_10"),b=a(512,512,"mobilenetv1/conv_11"),y=a(512,1024,"mobilenetv1/conv_12"),w=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:m,conv_8:v,conv_9:g,conv_10:x,conv_11:b,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),h=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),m=o(64,128,3,"prediction_layer/conv_7"),v=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),x=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),I=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),S=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),_=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),E=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),D=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),A={box_encoding_predictor:v,class_predictor:g},P={box_encoding_predictor:x,class_predictor:b},M={box_encoding_predictor:y,class_predictor:w},B={box_encoding_predictor:C,class_predictor:I},W={box_encoding_predictor:S,class_predictor:_},N={box_encoding_predictor:E,class_predictor:D};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:m,box_predictor_0:A,box_predictor_1:P,box_predictor_2:M,box_predictor_3:B,box_predictor_4:W,box_predictor_5:N}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function gy(r){var t=[],e=tn(r),n=e.extractWeights,o=e.getRemainingWeights,a=my(n,t),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=xi(n(5118*4),[1,5118,4]),f={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:t}}function yy(r,t){var e=xn(r,t);function n(c,l,f){var h=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),d=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",d=l+"/pointwise_conv",p=e(f+"/depthwise_weights",4,h+"/filters"),m=e(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),v=e(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),g=e(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),x=e(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:m,batch_norm_offset:v,batch_norm_mean:g,batch_norm_variance:x},pointwise_conv:n("MobilenetV1",c,d)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var f=e(c+"/weights",4,l+"/filters"),h=e(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function xy(r){var t=[],e=yy(r,t),n=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,a=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!jo(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return en(r,t),{params:i,paramMappings:t}}function Nt(r,t,e){return $(function(){var n=xt(r,t.filters,e,"same");return n=le(n,t.batch_norm_offset),Pi(n,0,6)})}var by=.0010000000474974513;function wy(r,t,e){return $(function(){var n=zo(r,t.filters,e,"same");return n=Pl(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,by),Pi(n,0,6)})}function Cy(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function _y(r,t){return $(function(){var e=null,n=Nt(r,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(a,i){var s=i+1,u=Cy(s);n=wy(n,a.depthwise_conv,u),n=Nt(n,a.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function Ey(r,t,e,n,o){var a=r.shape[0],i=Math.min(e,a),s=t.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var f=l.score,h=c.length-1;h>=0;--h){var d=ky(r,l.boxIndex,c[h]);if(d!==0&&(l.score*=u(d),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function ky(r,t,e){var n=r.arraySync(),o=Math.min(n[t][0],n[t][2]),a=Math.min(n[t][1],n[t][3]),i=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),f=Math.max(n[e][1],n[e][3]),h=(i-o)*(s-a),d=(l-u)*(f-c);if(h<=0||d<=0)return 0;var p=Math.max(o,u),m=Math.max(a,c),v=Math.min(i,l),g=Math.min(s,f),x=Math.max(v-p,0)*Math.max(g-m,0);return x/(h+d-x)}function Ry(r){var t=ze(pn(r,[1,0])),e=[Ue(t[2],t[0]),Ue(t[3],t[1])],n=[le(t[0],wt(e[0],X(2))),le(t[1],wt(e[1],X(2)))];return{sizes:e,centers:n}}function Iy(r,t){var e=Ry(r),n=e.sizes,o=e.centers,a=ze(pn(t,[1,0])),i=wt(et(Za(wt(a[2],X(5))),n[0]),X(2)),s=le(et(wt(a[0],X(10)),n[0]),o[0]),u=wt(et(Za(wt(a[3],X(5))),n[1]),X(2)),c=le(et(wt(a[1],X(10)),n[1]),o[1]);return pn(mt([Ue(s,i),Ue(c,u),le(s,i),le(c,u)]),[1,0])}function Sy(r,t,e){return $(function(){var n=r.shape[0],o=Iy(Ct(Yn(e.extra_dim,[n,1,1]),[-1,4]),Ct(r,[-1,4]));o=Ct(o,[n,o.shape[0]/n,4]);var a=Tl(Wt(t,[0,0,1],[-1,-1,-1])),i=Wt(a,[0,0,0],[-1,-1,1]);i=Ct(i,[n,i.shape[1]]);var s=ze(o),u=ze(i);return{boxes:s,scores:u}})}function Hn(r,t){return $(function(){var e=r.shape[0],n=Ct(Et(r,t.box_encoding_predictor),[e,-1,1,4]),o=Ct(Et(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function Ay(r,t,e){return $(function(){var n=Nt(r,e.conv_0,[1,1]),o=Nt(n,e.conv_1,[2,2]),a=Nt(o,e.conv_2,[1,1]),i=Nt(a,e.conv_3,[2,2]),s=Nt(i,e.conv_4,[1,1]),u=Nt(s,e.conv_5,[2,2]),c=Nt(u,e.conv_6,[1,1]),l=Nt(c,e.conv_7,[2,2]),f=Hn(t,e.box_predictor_0),h=Hn(r,e.box_predictor_1),d=Hn(o,e.box_predictor_2),p=Hn(i,e.box_predictor_3),m=Hn(u,e.box_predictor_4),v=Hn(l,e.box_predictor_5),g=Ve([f.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,m.boxPredictionEncoding,v.boxPredictionEncoding],1),x=Ve([f.classPrediction,h.classPrediction,d.classPrediction,p.classPrediction,m.classPrediction,v.classPrediction],1);return{boxPredictions:g,classPredictions:x}})}var ir=function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),jf=function(r){ie(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return $(function(){var o=e.toBatchTensor(512,!1).toFloat(),a=Ue(et(o,X(.007843137718737125)),X(1)),i=_y(a,n.mobilenetv1),s=Ay(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return Sy(u,c,n.output_layer)})},t.prototype.forward=function(e){return ee(this,void 0,void 0,function(){var n;return te(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),ee(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,m,v,g,x,b,y,w,C,I,S;return te(this,function(_){switch(_.label){case 0:return o=new ir(n),a=o.maxResults,i=o.minConfidence,[4,qe(e)];case 1:for(s=_.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return v=(m=Array).from,[4,h.data()];case 2:return p=v.apply(m,[_.sent()]),g=.5,x=Ey(f,p,a,g,i),b=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/b.width,C=y/b.height,I=f.arraySync(),S=x.map(function(E){var D=[Math.max(0,I[E][0]),Math.min(1,I[E][2])].map(function(N){return N*C}),A=D[0],P=D[1],M=[Math.max(0,I[E][1]),Math.min(1,I[E][3])].map(function(N){return N*w}),B=M[0],W=M[1];return new zt(p[E],new Ji(B,A,W-B,P-A),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,S]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return xy(e)},t.prototype.extractParams=function(e){return gy(e)},t}(Zt);(function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(jf);var Dy=.4,Ty=[new xe(.738768,.874946),new xe(2.42204,2.65704),new xe(4.30971,7.04493),new xe(10.246,4.59428),new xe(12.6868,11.8741)],Fy=[new xe(1.603231,2.094468),new xe(6.041143,7.080126),new xe(2.882459,3.518061),new xe(4.266906,5.178857),new xe(9.041765,10.66308)],Ny=[117.001,114.697,97.404],My="tiny_yolov2_model",Py="tiny_yolov2_separable_conv_model",Zr=function(r){return typeof r=="number"};function Oy(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!Zr(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return Zr(t.x)&&Zr(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(Zr)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function cs(r){return $(function(){var t=et(r,X(.10000000149011612));return le(Se(Ue(r,t)),t)})}function rn(r,t){return $(function(){var e=Pn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=xt(e,t.conv.filters,[1,1],"valid"),e=Ue(e,t.bn.sub),e=et(e,t.bn.truediv),e=le(e,t.conv.bias),cs(e)})}function on(r,t){return $(function(){var e=Pn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Wi(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=le(e,t.bias),cs(e)})}function By(r,t){var e=$o(r,t);function n(i,s){var u=Me(r(i)),c=Me(r(i));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=e(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=as(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function Ly(r,t,e,n){var o=tn(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=By(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(t.withSeparableConvs){var d=n[0],p=n[1],m=n[2],v=n[3],g=n[4],x=n[5],b=n[6],y=n[7],w=n[8],C=t.isFirstLayerConv2d?c(d,p,3,"conv0"):f(d,p,"conv0"),I=f(p,m,"conv1"),S=f(m,v,"conv2"),_=f(v,g,"conv3"),E=f(g,x,"conv4"),D=f(x,b,"conv5"),A=y?f(b,y,"conv6"):void 0,P=w?f(y,w,"conv7"):void 0,M=c(w||y||b,5*e,1,"conv8");h={conv0:C,conv1:I,conv2:S,conv3:_,conv4:E,conv5:D,conv6:A,conv7:P,conv8:M}}else{var d=n[0],p=n[1],m=n[2],v=n[3],g=n[4],x=n[5],b=n[6],y=n[7],w=n[8],C=l(d,p,"conv0"),I=l(p,m,"conv1"),S=l(m,v,"conv2"),_=l(v,g,"conv3"),E=l(g,x,"conv4"),D=l(x,b,"conv5"),A=l(b,y,"conv6"),P=l(y,w,"conv7"),M=c(w,5*e,1,"conv8");h={conv0:C,conv1:I,conv2:S,conv3:_,conv4:E,conv5:D,conv6:A,conv7:P,conv8:M}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:h,paramMappings:s}}function Wy(r,t){var e=xn(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=is(e);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function Vy(r,t){var e=[],n=Wy(r,e),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return en(r,e),{params:s,paramMappings:e}}var Du;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Du||(Du={}));var ls=function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),Kf=function(r){ie(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return Oy(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var o=rn(e,n.conv0);return o=Ge(o,[2,2],[2,2],"same"),o=rn(o,n.conv1),o=Ge(o,[2,2],[2,2],"same"),o=rn(o,n.conv2),o=Ge(o,[2,2],[2,2],"same"),o=rn(o,n.conv3),o=Ge(o,[2,2],[2,2],"same"),o=rn(o,n.conv4),o=Ge(o,[2,2],[2,2],"same"),o=rn(o,n.conv5),o=Ge(o,[2,2],[1,1],"same"),o=rn(o,n.conv6),o=rn(o,n.conv7),Et(o,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var o=this.config.isFirstLayerConv2d?cs(Et(e,n.conv0,"valid",!1)):on(e,n.conv0);return o=Ge(o,[2,2],[2,2],"same"),o=on(o,n.conv1),o=Ge(o,[2,2],[2,2],"same"),o=on(o,n.conv2),o=Ge(o,[2,2],[2,2],"same"),o=on(o,n.conv3),o=Ge(o,[2,2],[2,2],"same"),o=on(o,n.conv4),o=Ge(o,[2,2],[2,2],"same"),o=on(o,n.conv5),o=Ge(o,[2,2],[1,1],"same"),o=n.conv6?on(o,n.conv6):o,o=n.conv7?on(o,n.conv7):o,Et(o,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return $(function(){var i=e.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?Vr(i,o.config.meanRgb):i,i=i.div(X(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},t.prototype.forward=function(e,n){return ee(this,void 0,void 0,function(){var o;return te(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,qe(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),ee(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,m,v,g,x=this;return te(this,function(b){switch(b.label){case 0:return o=new ls(n),a=o.inputSize,i=o.scoreThreshold,[4,qe(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,a)];case 2:return u=b.sent(),c=$(function(){return ze(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return f=b.sent(),u.dispose(),c.dispose(),h=f.map(function(y){return y.box}),d=f.map(function(y){return y.score}),p=f.map(function(y){return y.classScore}),m=f.map(function(y){return x.config.classes[y.label]}),v=Nr(h.map(function(y){return y.rescale(a)}),d,this.config.iouThreshold,!0),g=v.map(function(y){return new xf(d[y],p[y],m[y],h[y],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return Vy(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return Ly(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,o){return ee(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,m,v,g,x,b,y,w,C,I,S,_,E,D,A,P,M,B,W,N,O=this;return te(this,function(H){switch(H.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=e.shape[1],f=this.config.anchors.length,h=$(function(){var G=e.reshape([l,l,f,O.boxEncodingSize]),j=G.slice([0,0,0,0],[l,l,f,4]),V=G.slice([0,0,0,4],[l,l,f,1]),K=O.withClassScores?Qt(G.slice([0,0,0,5],[l,l,f,O.config.classes.length]),3):X(0);return[j,V,K]}),d=h[0],p=h[1],m=h[2],v=[],[4,p.array()];case 1:return g=H.sent(),[4,d.array()];case 2:x=H.sent(),b=0,H.label=3;case 3:if(!(b<l))return[3,12];y=0,H.label=4;case 4:if(!(y<l))return[3,11];w=0,H.label=5;case 5:return w<f?(C=ka(g[b][y][w][0]),!o||C>o?(I=(y+ka(x[b][y][w][0]))/l*u,S=(b+ka(x[b][y][w][1]))/l*c,_=Math.exp(x[b][y][w][2])*this.config.anchors[w].x/l*u,E=Math.exp(x[b][y][w][3])*this.config.anchors[w].y/l*c,D=I-_/2,A=S-E/2,P={row:b,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(m,P)]:[3,7]):[3,9]):[3,10];case 6:return N=H.sent(),[3,8];case 7:N={classScore:1,label:0},H.label=8;case 8:M=N,B=M.classScore,W=M.label,v.push(Qe({box:new Ko(D,A,D+_,A+E),score:C,classScore:C*B,label:W},P)),H.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return b++,[3,3];case 12:return d.dispose(),p.dispose(),m.dispose(),[2,v]}})})},t.prototype.extractPredictedClass=function(e,n){return ee(this,void 0,void 0,function(){var o,a,i,s;return te(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(Zt),zy=function(r){ie(t,r);function t(e){e===void 0&&(e=!0);var n=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:Dy,classes:["face"]},e?{anchors:Fy,meanRgb:Ny}:{anchors:Ty,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return ee(this,void 0,void 0,function(){var o;return te(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new zt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?Py:My},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Kf),Uy=function(r){ie(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(ls),zr=function(){function r(){}return r.prototype.then=function(t){return ee(this,void 0,void 0,function(){var e;return te(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return ee(this,void 0,void 0,function(){return te(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r}();function Yo(r,t,e,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),ee(this,void 0,void 0,function(){var a,i,s,u,c;return te(this,function(l){switch(l.label){case 0:return a=r.map(function(f){return $0(f)?o(f):f.detection}),s=n,s?[3,5]:t instanceof Ie?[4,rs(t,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,ns(t,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(f){return f instanceof Ie&&f.dispose()}),[2,c]}})})}function fs(r,t,e,n,o){return ee(this,void 0,void 0,function(){var a=this;return te(this,function(i){return[2,Yo([r],t,function(s){return ee(a,void 0,void 0,function(){return te(this,function(u){return[2,e(s[0])]})})},n,o)]})})}function Gy(r){return $(function(){return mt(ze(r,3).reverse(),3)})}var eo=2,Do=12;function Hy(r,t){var e=$o(r,t),n=os(r,t);function o(c,l){var f=Me(r(c));return t.push({paramPath:l}),f}function a(c,l,f){f===void 0&&(f=!1);var h=e(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),m=o(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],f?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:p,prelu2_alpha:m,conv3:v,prelu3_alpha:g}}function i(){var c=a([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return Qe(Qe({},c),{conv4_1:l,conv4_2:f})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),h=n(128,2,"rnet/fc2_1"),d=n(128,4,"rnet/fc2_2");return Qe(Qe({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:d})}function u(){var c=a([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),h=n(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=n(256,2,"onet/fc2_1"),m=n(256,4,"onet/fc2_2"),v=n(256,10,"onet/fc2_3");return Qe(Qe({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:d,fc2_1:p,fc2_2:m,fc2_3:v})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function qy(r){var t=tn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=Hy(e,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),f=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function jy(r,t){var e=xn(r,t);function n(l){var f=e(l+"/weights",4,l+"/filters"),h=e(l+"/bias",1);return{filters:f,bias:h}}function o(l){var f=e(l+"/weights",2),h=e(l+"/bias",1);return{weights:f,bias:h}}function a(l){return e(l,1)}function i(l){var f=n(l+"/conv1"),h=a(l+"/prelu1_alpha"),d=n(l+"/conv2"),p=a(l+"/prelu2_alpha"),m=n(l+"/conv3"),v=a(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:d,prelu2_alpha:p,conv3:m,prelu3_alpha:v}}function s(){var l=i("pnet"),f=n("pnet/conv4_1"),h=n("pnet/conv4_2");return Qe(Qe({},l),{conv4_1:f,conv4_2:h})}function u(){var l=i("rnet"),f=o("rnet/fc1"),h=a("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return Qe(Qe({},l),{fc1:f,prelu4_alpha:h,fc2_1:d,fc2_2:p})}function c(){var l=i("onet"),f=n("onet/conv4"),h=a("onet/prelu4_alpha"),d=o("onet/fc1"),p=a("onet/prelu5_alpha"),m=o("onet/fc2_1"),v=o("onet/fc2_2"),g=o("onet/fc2_3");return Qe(Qe({},l),{conv4:f,prelu4_alpha:h,fc1:d,prelu5_alpha:p,fc2_1:m,fc2_2:v,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function Ky(r){var t=[],e=jy(r,t),n=e.extractPNetParams,o=e.extractRNetParams,a=e.extractONetParams,i=n(),s=o(),u=a();return en(r,t),{params:{pnet:i,rnet:s,onet:u},paramMappings:t}}function si(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function Xy(r,t,e){for(var n=e[0],o=e[1],a=Do/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(t,u)),s=s*t,u+=1;return i}var hs=function(r){ie(t,r);function t(e,n,o,a){return r.call(this,{left:e,top:n,right:o,bottom:a},!0)||this}return t}(vn);function Xf(r){return $(function(){return et(Ue(r,X(127.5)),X(.0078125))})}function nr(r,t){return $(function(){return le(Se(r),et(t,_o(Se(_o(r)))))})}function ds(r,t,e){return e===void 0&&(e=!1),$(function(){var n=Et(r,t.conv1,"valid");return n=nr(n,t.prelu1_alpha),n=Ge(n,e?[2,2]:[3,3],[2,2],"same"),n=Et(n,t.conv2,"valid"),n=nr(n,t.prelu2_alpha),n=e?n:Ge(n,[3,3],[2,2],"valid"),n=Et(n,t.conv3,"valid"),n=nr(n,t.prelu3_alpha),n})}function $y(r,t){return $(function(){var e=ds(r,t,!0),n=Et(e,t.conv4_1,"valid"),o=gt(Go(n,3),3),a=Qt(Ue(n,o),3),i=Et(e,t.conv4_2,"valid");return{prob:a,regions:i}})}function Yy(r,t){return $(function(){var e=si(t,r.shape.slice(1)),n=e.height,o=e.width,a=Hi.resizeBilinear(r,[n,o]),i=Xf(a);return pn(i,[0,2,1,3])})}function Qy(r,t,e,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new xe(s,i));var u=o.map(function(c){var l=new Ko(Math.round((c.y*eo+1)/e),Math.round((c.x*eo+1)/e),Math.round((c.y*eo+Do)/e),Math.round((c.x*eo+Do)/e)),f=a[c.y][c.x],h=t.arraySync(),d=new hs(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:d}});return u}function Jy(r,t,e,n,o){o.stage1=[];var a=t.map(function(h){return $(function(){var d={scale:h},p=Yy(r,h),m=Date.now(),v=$y(p,n),g=v.prob,x=v.regions;d.pnet=Date.now()-m;var b=ze(ze(g,3)[1])[0],y=ze(x)[0];return{scoresTensor:b,regionsTensor:y,scale:h,statsForScale:d}})}),i=a.map(function(h){var d=h.scoresTensor,p=h.regionsTensor,m=h.scale,v=h.statsForScale,g=Qy(d,p,m,e);if(d.dispose(),p.dispose(),!g.length)return o.stage1.push(v),[];var x=Date.now(),b=Nr(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return v.nms=Date.now()-x,v.numBoxes=b.length,o.stage1.push(v),b.map(function(y){return g[y]})}),s=i.reduce(function(h,d){return h.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=Nr(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var d=h.cell,p=h.region;return new Ko(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function $f(r,t,e){var n=e.width,o=e.height;return ee(this,void 0,void 0,function(){var a,i,s,u=this;return te(this,function(c){switch(c.label){case 0:return a=Tn(r),[4,Promise.all(t.map(function(l){return ee(u,void 0,void 0,function(){var f,h,d,p,m,v,g,x;return te(this,function(b){return f=l.padAtBorders(r.height,r.width),h=f.y,d=f.ey,p=f.x,m=f.ex,v=p-1,g=h-1,x=a.getImageData(v,g,m-v,d-g),[2,nt.isNodejs()?ts(x):createImageBitmap(x)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var f=Xo({width:n,height:o}),h=Tn(f);h.drawImage(l,0,0,n,o);for(var d=h.getImageData(0,0,n,o).data,p=[],m=0;m<d.length;m+=4)p.push(d[m+2]),p.push(d[m+1]),p.push(d[m]);s.push(p)}),[2,s.map(function(l){var f=$(function(){var h=pn(it(l,[1,n,o,3]),[0,2,1,3]).toFloat();return Xf(h)});return f})]}})})}function Zy(r,t){return $(function(){var e=ds(r,t),n=Ct(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Ot(n,t.fc1),a=nr(o,t.prelu4_alpha),i=Ot(a,t.fc2_1),s=gt(Go(i,1),1),u=Qt(Ue(i,s),1),c=Ot(a,t.fc2_2),l=ze(u,1)[1];return{scores:l,regions:c}})}function ex(r,t,e,n,o){return ee(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,m,v,g,x;return te(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,$f(r,t,{width:24,height:24})];case 1:return i=b.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(y){var w=Zy(y,n);return y.dispose(),w}),o.stage2_rnet=Date.now()-a,u=s.length>1?Ve(s.map(function(y){return y.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[b.sent()]),u.dispose(),h=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),d=h.map(function(y){return t[y]}),p=h.map(function(y){return c[y]}),m=[],v=[],d.length>0&&(a=Date.now(),g=Nr(d,p,.7),o.stage2_nms=Date.now()-a,x=g.map(function(y){var w=s[h[y]].regions.arraySync();return new hs(w[0][0],w[0][1],w[0][2],w[0][3])}),v=g.map(function(y){return p[y]}),m=g.map(function(y,w){return d[y].calibrate(x[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:m,scores:v}]}})})}function tx(r,t){return $(function(){var e=ds(r,t);e=Ge(e,[2,2],[2,2],"same"),e=Et(e,t.conv4,"valid"),e=nr(e,t.prelu4_alpha);var n=Ct(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Ot(n,t.fc1),a=nr(o,t.prelu5_alpha),i=Ot(a,t.fc2_1),s=gt(Go(i,1),1),u=Qt(Ue(i,s),1),c=Ot(a,t.fc2_2),l=Ot(a,t.fc2_3),f=ze(u,1)[1];return{scores:f,regions:c,points:l}})}function nx(r,t,e,n,o){return ee(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,m,v,g,x,b;return te(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,$f(r,t,{width:48,height:48})];case 1:return i=y.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(w){var C=tx(w,n);return w.dispose(),C}),o.stage3_onet=Date.now()-a,u=s.length>1?Ve(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[y.sent()]),u.dispose(),h=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>e}).map(function(w){var C=w.idx;return C}),d=h.map(function(w){var C=s[w].regions.arraySync();return new hs(C[0][0],C[0][1],C[0][2],C[0][3])}),p=h.map(function(w,C){return t[w].calibrate(d[C])}),m=h.map(function(w){return c[w]}),v=[],g=[],x=[],p.length>0&&(a=Date.now(),b=Nr(p,m,.7,!1),o.stage3_nms=Date.now()-a,v=b.map(function(w){return p[w]}),g=b.map(function(w){return m[w]}),x=b.map(function(w,C){return Array(5).fill(0).map(function(I,S){var _=s[w].points.arraySync();return new xe(_[0][S]*(v[C].width+1)+v[C].left,_[0][S+5]*(v[C].height+1)+v[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:v,scores:g,points:x}]}})})}var rx=function(r){ie(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return ee(this,void 0,void 0,function(){return te(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return ee(this,void 0,void 0,function(){return te(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),ee(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,m,v,g,x,b,y,w,C,I,S;return te(this,function(_){switch(_.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=e.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=$(function(){return Gy(gt(Yi.fromPixels(a)).toFloat())}),c=function(E){return u.dispose(),i.total=Date.now()-s,E},l=u.shape.slice(1),f=l[0],h=l[1],d=new qf(n),p=d.minFaceSize,m=d.scaleFactor,v=d.maxNumScales,g=d.scoreThresholds,x=d.scaleSteps,b=(x||Xy(p,m,[f,h])).filter(function(E){var D=si(E,[f,h]);return Math.min(D.width,D.height)>Do}).slice(0,v),i.scales=b,i.pyramid=b.map(function(E){return si(E,[f,h])}),y=Date.now(),[4,Jy(u,b,g[0],o.pnet,i)];case 1:return w=_.sent(),i.total_stage1=Date.now()-y,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,ex(a,w.boxes,g[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return C=_.sent(),i.total_stage2=Date.now()-y,C.boxes.length?(i.stage3_numInputBoxes=C.boxes.length,y=Date.now(),[4,nx(a,C.boxes,g[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return I=_.sent(),i.total_stage3=Date.now()-y,S=I.boxes.map(function(E,D){return ss(Zi({},new zt(I.scores[D],new Ji(E.left/h,E.top/f,E.width/h,E.height/f),{height:f,width:h})),new F0(I.points[D].map(function(A){return A.sub(new xe(E.left,E.top)).div(new xe(E.width,E.height))}),{width:E.width,height:E.height}))}),[2,c({results:S,stats:i})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),ee(this,void 0,void 0,function(){var o;return te(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,qe(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),ee(this,void 0,void 0,function(){var o;return te(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,qe(e)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Ky(e)},t.prototype.extractParams=function(e){return qy(e)},t}(Zt),ox=.4,ax=[new xe(1.603231,2.094468),new xe(6.041143,7.080126),new xe(2.882459,3.518061),new xe(4.266906,5.178857),new xe(9.041765,10.66308)],ix=[117.001,114.697,97.404],sx=function(r){ie(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:ox,classes:["face"],anchors:ax,meanRgb:ix,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return ee(this,void 0,void 0,function(){var o;return te(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new zt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Kf),tt={ssdMobilenetv1:new jf,tinyFaceDetector:new sx,tinyYolov2:new zy,mtcnn:new rx,faceLandmark68Net:new Wf,faceLandmark68TinyNet:new uy,faceRecognitionNet:new vy,faceExpressionNet:new X0,ageGenderNet:new oy},Yf=function(r){ie(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(zr),ps=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ee(this,void 0,void 0,function(){var e,n,o=this;return te(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,Yo(e,this.input,function(i){return ee(o,void 0,void 0,function(){return te(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return tt.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){return Of(i,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new ys(this,this.input)},t}(Yf),vs=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ee(this,void 0,void 0,function(){var e,n;return te(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,fs(e,this.input,function(a){return tt.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,Of(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new xs(this,this.input)},t}(Yf),ms=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new bs(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Cs(this,this.input)},t}(ps),gs=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new ws(this,this.input)},t.prototype.withFaceDescriptor=function(){return new _s(this,this.input)},t}(vs),Qf=function(r){ie(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(zr),ys=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ee(this,void 0,void 0,function(){var e,n,o=this;return te(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,Yo(e,this.input,function(i){return ee(o,void 0,void 0,function(){return te(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return tt.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){var u=n[s],c=u.age,l=u.gender,f=u.genderProbability;return Gf(Hf(i,l,f),c)})]}})})},t.prototype.withFaceExpressions=function(){return new ps(this,this.input)},t}(Qf),xs=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ee(this,void 0,void 0,function(){var e,n,o,a,i;return te(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,fs(e,this.input,function(u){return tt.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,Gf(Hf(e,a,i),o)]}})})},t.prototype.withFaceExpressions=function(){return new vs(this,this.input)},t}(Qf),bs=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new ms(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Cs(this,this.input)},t}(ys),ws=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new gs(this,this.input)},t.prototype.withFaceDescriptor=function(){return new _s(this,this.input)},t}(xs),Jf=function(r){ie(t,r);function t(e,n){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o}return t}(zr),Cs=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ee(this,void 0,void 0,function(){var e,n;return te(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,Yo(e,this.input,function(a){return Promise.all(a.map(function(i){return tt.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return Uf(e[i],a)})]}})})},t.prototype.withFaceExpressions=function(){return new ms(this,this.input)},t.prototype.withAgeAndGender=function(){return new bs(this,this.input)},t}(Jf),_s=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ee(this,void 0,void 0,function(){var e,n;return te(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,fs(e,this.input,function(a){return tt.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,Uf(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new gs(this,this.input)},t.prototype.withAgeAndGender=function(){return new ws(this,this.input)},t}(Jf),Zf=function(r){ie(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?tt.faceLandmark68TinyNet:tt.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(zr),ux=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ee(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return te(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof Ie?[4,rs(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,ns(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof Ie&&c.dispose()}),[2,e.map(function(c,l){return ss(c,i[l])})]}})})},t.prototype.withFaceExpressions=function(){return new ms(this,this.input)},t.prototype.withAgeAndGender=function(){return new bs(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Cs(this,this.input)},t}(Zf),cx=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ee(this,void 0,void 0,function(){var e,n,o,a,i;return te(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof Ie?[4,rs(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,ns(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof Ie&&u.dispose()}),[2,ss(e,i)]}})})},t.prototype.withFaceExpressions=function(){return new gs(this,this.input)},t.prototype.withAgeAndGender=function(){return new ws(this,this.input)},t.prototype.withFaceDescriptor=function(){return new _s(this,this.input)},t}(Zf),eh=function(r){ie(t,r);function t(e,n){n===void 0&&(n=new ir);var o=r.call(this)||this;return o.input=e,o.options=n,o}return t}(zr),lx=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ee(this,void 0,void 0,function(){var e,n,o,a;return te(this,function(i){switch(i.label){case 0:return e=this,n=e.input,o=e.options,o instanceof qf?[4,tt.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof Uy?function(s){return tt.tinyFaceDetector.locateFaces(s,o)}:o instanceof ir?function(s){return tt.ssdMobilenetv1.locateFaces(s,o)}:o instanceof ls?function(s){return tt.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return ee(e,void 0,void 0,function(){var o;return te(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return Zi({},i)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new ux(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new ps(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new ys(this.runAndExtendWithFaceDetections(),this.input)},t}(eh),fx=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ee(this,void 0,void 0,function(){var e,n;return te(this,function(o){switch(o.label){case 0:return[4,new lx(this.input,this.options)];case 1:return e=o.sent(),n=e[0],e.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return ee(e,void 0,void 0,function(){var o;return te(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?Zi({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new cx(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new vs(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new xs(this.runAndExtendWithFaceDetection(),this.input)},t}(eh);function Tu(r,t){return t===void 0&&(t=new ir),new fx(r,t)}function hx(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}var dx=function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof $n)return i;if(i instanceof Float32Array)return new $n(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new $n(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return hx(n,t)}).reduce(function(n,o){return n+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new ku(a,e.computeMeanDistance(t,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new ku("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return $n.fromJSON(n)});return new r(e,t.distanceThreshold)},r}();const px=(r,t)=>t.some(e=>r instanceof e);let Fu,Nu;function vx(){return Fu||(Fu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mx(){return Nu||(Nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const th=new WeakMap,ui=new WeakMap,nh=new WeakMap,Sa=new WeakMap,Es=new WeakMap;function gx(r){const t=new Promise((e,n)=>{const o=()=>{r.removeEventListener("success",a),r.removeEventListener("error",i)},a=()=>{e(dn(r.result)),o()},i=()=>{n(r.error),o()};r.addEventListener("success",a),r.addEventListener("error",i)});return t.then(e=>{e instanceof IDBCursor&&th.set(e,r)}).catch(()=>{}),Es.set(t,r),t}function yx(r){if(ui.has(r))return;const t=new Promise((e,n)=>{const o=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",i),r.removeEventListener("abort",i)},a=()=>{e(),o()},i=()=>{n(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",a),r.addEventListener("error",i),r.addEventListener("abort",i)});ui.set(r,t)}let ci={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return ui.get(r);if(t==="objectStoreNames")return r.objectStoreNames||nh.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return dn(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function xx(r){ci=r(ci)}function bx(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Aa(this),t,...e);return nh.set(n,t.sort?t.sort():[t]),dn(n)}:mx().includes(r)?function(...t){return r.apply(Aa(this),t),dn(th.get(this))}:function(...t){return dn(r.apply(Aa(this),t))}}function wx(r){return typeof r=="function"?bx(r):(r instanceof IDBTransaction&&yx(r),px(r,vx())?new Proxy(r,ci):r)}function dn(r){if(r instanceof IDBRequest)return gx(r);if(Sa.has(r))return Sa.get(r);const t=wx(r);return t!==r&&(Sa.set(r,t),Es.set(t,r)),t}const Aa=r=>Es.get(r);function Da(r,t,{blocked:e,upgrade:n,blocking:o,terminated:a}={}){const i=indexedDB.open(r,t),s=dn(i);return n&&i.addEventListener("upgradeneeded",u=>{n(dn(i.result),u.oldVersion,u.newVersion,dn(i.transaction),u)}),e&&i.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),s.then(u=>{a&&u.addEventListener("close",()=>a()),o&&u.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const Cx=["get","getKey","getAll","getAllKeys","count"],_x=["put","add","delete","clear"],Ta=new Map;function Mu(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Ta.get(t))return Ta.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,o=_x.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(o||Cx.includes(e)))return;const a=async function(i,...s){const u=this.transaction(i,o?"readwrite":"readonly");let c=u.store;return n&&(c=c.index(s.shift())),(await Promise.all([c[e](...s),o&&u.done]))[0]};return Ta.set(t,a),a}xx(r=>({...r,get:(t,e,n)=>Mu(t,e)||r.get(t,e,n),has:(t,e)=>!!Mu(t,e)||r.has(t,e)}));const Ex={class:"q-gutter-md"},kx={__name:"Webcam",setup(r){const t=We(null),e=We(""),n=We(""),o=We(!1),a=We(!1);let i=[];async function s(){try{const d=await navigator.mediaDevices.getUserMedia({video:{}});t.value.srcObject=d}catch(d){console.error("Error accessing webcam:",d),n.value="Error accessing webcam"}}async function u(){a.value=!0;const d=await Tu(t.value,new ir).withFaceLandmarks().withFaceDescriptor();if(!d){n.value="No face detected";return}const m=new dx(i,.6).findBestMatch(d.descriptor);n.value=`Detected face as ${m.toString()}`,a.value=!1}async function c(){o.value=!0;const d=await Tu(t.value,new ir).withFaceLandmarks().withFaceDescriptor();if(!d){n.value="No face detected";return}if(!e.value){n.value="Please enter a name";return}const p=new $n(e.value,[d.descriptor]);i.push(p),await(await Da("face-data",2,{upgrade(v){v.objectStoreNames.contains("faces")||v.createObjectStore("faces",{keyPath:"label"})}})).put("faces",{label:e.value,descriptors:Array.from(d.descriptor)}),n.value=`Registered face for ${e.value}`,o.value=!1}async function l(){i=(await(await Da("face-data",2)).getAll("faces")).map(m=>{const v=new Float32Array(m.descriptors);return new $n(m.label,[v])})}async function f(){await tt.tinyFaceDetector.loadFromUri("/static/models"),await tt.faceLandmark68Net.loadFromUri("/static/models"),await tt.faceRecognitionNet.loadFromUri("/static/models"),await tt.ssdMobilenetv1.loadFromUri("/static/models")}To(async()=>{try{await f(),await s(),await h(),await l()}catch(d){console.error("Error in mounted hook:",d),n.value=d.message}});async function h(){await Da("face-data",2,{upgrade(d){d.createObjectStore("faces",{keyPath:"label"})}})}return(d,p)=>(Ou(),xh("div",null,[vr($h,{dense:"","inline-actions":"",class:"text-black bg-grey-3"},{action:Na(()=>[Ss("div",Ex,[vr(Xh,{modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=m=>e.value=m),placeholder:"Enter name..."},null,8,["modelValue"]),vr(Rs,{push:"",label:"Register Face",onClick:c,loading:o.value,disable:o.value||a.value},null,8,["loading","disable"]),vr(Rs,{push:"",label:"Recognize Face",onClick:u,loading:a.value,disable:o.value||a.value},null,8,["loading","disable"])])]),default:Na(()=>[bh(" Info: "+wh(n.value)+" ",1)]),_:1}),Ss("video",{ref_key:"video",ref:t,width:"720",height:"560",autoplay:"",muted:""},null,512)]))}},Ax={__name:"IndexPage",setup(r){return(t,e)=>(Ou(),Ch(_h,{class:"flex flex-center"},{default:Na(()=>[vr(kx)]),_:1}))}};export{Ax as default};
