import{n as se,B as x,k as ae,l as d,u as qe,s as ge,b7 as Rt,b8 as Ct,p as lt,r as T,t as rt,q as dt,b9 as ie,w as Ke,O as Vt,v as B,ba as It,N as Se,aj as Je,bb as me,bc as We,bd as Qe,be as Ze,bf as zt,L as Q,aQ as Me,bg as Tt,a0 as O,a1 as ze,m as et,bh as Mt,bi as Nt,bj as Bt,o as Dt,y as Ge,z as Pt,A as Xe,V as Ut,C as Ft,E as At,T as ut,bk as Te,a2 as Ot,bl as Et,bm as Ht,ai as jt,bn as Lt,P as Kt,bo as Wt,aS as Gt,au as Xt,aH as Yt,aN as ct,al as _e,am as Ye,aA as i,ar as f,ao as b,as as h,ap as V,aq as E,b2 as K,aL as qt,aM as le,bp as Jt,az as Qt,a$ as Zt,bq as en,aI as pe,aT as tn,ah as nn,aw as ft,br as an,bs as sn,bt as He,bu as on}from"./index-c8476f92.js";const ln=se({name:"Remove",render(){return x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},x("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}});function rn(e){return e==null||typeof e=="string"&&e.trim()===""?null:Number(e)}function dn(e){return e.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^\.\d+$/.test(e))}function je(e){return e==null?!0:!Number.isNaN(e)}function tt(e,o){return e==null?"":o===void 0?String(e):e.toFixed(o)}function Le(e){if(e===null)return null;if(typeof e=="number")return e;{const o=Number(e);return Number.isNaN(o)?null:o}}const un=ae([d("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),d("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),nt=800,at=100,cn=Object.assign(Object.assign({},ge.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),fn=se({name:"InputNumber",props:cn,setup(e){const{mergedBorderedRef:o,mergedClsPrefixRef:u,mergedRtlRef:m}=qe(e),l=ge("InputNumber","-input-number",un,Rt,e,u),{localeRef:c}=Ct("InputNumber"),w=lt(e),{mergedSizeRef:k,mergedDisabledRef:R,mergedStatusRef:$}=w,p=T(null),M=T(null),X=T(null),W=T(e.defaultValue),Z=rt(e,"value"),H=dt(Z,W),j=T(""),D=a=>{const r=String(a).split(".")[1];return r?r.length:0},re=a=>{const r=[e.min,e.max,e.step,a].map(g=>g===void 0?0:D(g));return Math.max(...r)},S=ie(()=>{const{placeholder:a}=e;return a!==void 0?a:c.value.placeholder}),C=ie(()=>{const a=Le(e.step);return a!==null?a===0?1:Math.abs(a):1}),y=ie(()=>{const a=Le(e.min);return a!==null?a:null}),G=ie(()=>{const a=Le(e.max);return a!==null?a:null}),N=a=>{const{value:r}=H;if(a===r){Y();return}const{"onUpdate:value":g,onUpdateValue:I,onChange:L}=e,{nTriggerFormInput:U,nTriggerFormChange:t}=w;L&&Q(L,a),I&&Q(I,a),g&&Q(g,a),W.value=a,U(),t()},z=({offset:a,doUpdateIfValid:r,fixPrecision:g,isInputing:I})=>{const{value:L}=j;if(I&&dn(L))return!1;const U=(e.parse||rn)(L);if(U===null)return r&&N(null),null;if(je(U)){const t=D(U),{precision:n}=e;if(n!==void 0&&n<t&&!g)return!1;let s=parseFloat((U+a).toFixed(n??re(U)));if(je(s)){const{value:v}=G,{value:_}=y;if(v!==null&&s>v){if(!r||I)return!1;s=v}if(_!==null&&s<_){if(!r||I)return!1;s=_}return e.validator&&!e.validator(s)?!1:(r&&N(s),s)}}return!1},Y=()=>{const{value:a}=H;if(je(a)){const{format:r,precision:g}=e;r?j.value=r(a):a===null||g===void 0||D(a)>g?j.value=tt(a,void 0):j.value=tt(a,g)}else j.value=String(a)};Y();const be=ie(()=>z({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),ye=ie(()=>{const{value:a}=H;if(e.validator&&a===null)return!1;const{value:r}=C;return z({offset:-r,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),xe=ie(()=>{const{value:a}=H;if(e.validator&&a===null)return!1;const{value:r}=C;return z({offset:+r,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function Ne(a){const{onFocus:r}=e,{nTriggerFormFocus:g}=w;r&&Q(r,a),g()}function Re(a){var r,g;if(a.target===((r=p.value)===null||r===void 0?void 0:r.wrapperElRef))return;const I=z({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(I!==!1){const t=(g=p.value)===null||g===void 0?void 0:g.inputElRef;t&&(t.value=String(I||"")),H.value===I&&Y()}else Y();const{onBlur:L}=e,{nTriggerFormBlur:U}=w;L&&Q(L,a),U(),Me(()=>{Y()})}function Be(a){const{onClear:r}=e;r&&Q(r,a)}function we(){const{value:a}=xe;if(!a){ce();return}const{value:r}=H;if(r===null)e.validator||N(de());else{const{value:g}=C;z({offset:g,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function ke(){const{value:a}=ye;if(!a){te();return}const{value:r}=H;if(r===null)e.validator||N(de());else{const{value:g}=C;z({offset:-g,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const Ce=Ne,Ve=Re;function de(){if(e.validator)return null;const{value:a}=y,{value:r}=G;return a!==null?Math.max(0,a):r!==null?Math.min(0,r):0}function $e(a){Be(a),N(null)}function Ie(a){var r,g,I;!((r=X.value)===null||r===void 0)&&r.$el.contains(a.target)&&a.preventDefault(),!((g=M.value)===null||g===void 0)&&g.$el.contains(a.target)&&a.preventDefault(),(I=p.value)===null||I===void 0||I.activate()}let q=null,oe=null,ue=null;function te(){ue&&(window.clearTimeout(ue),ue=null),q&&(window.clearInterval(q),q=null)}function ce(){ee&&(window.clearTimeout(ee),ee=null),oe&&(window.clearInterval(oe),oe=null)}function De(){te(),ue=window.setTimeout(()=>{q=window.setInterval(()=>{ke()},at)},nt),me("mouseup",document,te,{once:!0})}let ee=null;function Pe(){ce(),ee=window.setTimeout(()=>{oe=window.setInterval(()=>{we()},at)},nt),me("mouseup",document,ce,{once:!0})}const Ue=()=>{oe||we()},fe=()=>{q||ke()};function ve(a){var r,g;if(a.key==="Enter"){if(a.target===((r=p.value)===null||r===void 0?void 0:r.wrapperElRef))return;z({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((g=p.value)===null||g===void 0||g.deactivate())}else if(a.key==="ArrowUp"){if(!xe.value||e.keyboard.ArrowUp===!1)return;a.preventDefault(),z({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&we()}else if(a.key==="ArrowDown"){if(!ye.value||e.keyboard.ArrowDown===!1)return;a.preventDefault(),z({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&ke()}}function he(a){j.value=a,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&z({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Ke(H,()=>{Y()});const Fe={focus:()=>{var a;return(a=p.value)===null||a===void 0?void 0:a.focus()},blur:()=>{var a;return(a=p.value)===null||a===void 0?void 0:a.blur()},select:()=>{var a;return(a=p.value)===null||a===void 0?void 0:a.select()}},Ae=Vt("InputNumber",m,u);return Object.assign(Object.assign({},Fe),{rtlEnabled:Ae,inputInstRef:p,minusButtonInstRef:M,addButtonInstRef:X,mergedClsPrefix:u,mergedBordered:o,uncontrolledValue:W,mergedValue:H,mergedPlaceholder:S,displayedValueInvalid:be,mergedSize:k,mergedDisabled:R,displayedValue:j,addable:xe,minusable:ye,mergedStatus:$,handleFocus:Ce,handleBlur:Ve,handleClear:$e,handleMouseDown:Ie,handleAddClick:Ue,handleMinusClick:fe,handleAddMousedown:Pe,handleMinusMousedown:De,handleKeyDown:ve,handleUpdateDisplayedValue:he,mergedTheme:l,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:B(()=>{const{self:{iconColorDisabled:a}}=l.value,[r,g,I,L]=It(a);return{textColorTextDisabled:`rgb(${r}, ${g}, ${I})`,opacityDisabled:`${L}`}})})},render(){const{mergedClsPrefix:e,$slots:o}=this,u=()=>x(Ze,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>We(o["minus-icon"],()=>[x(Qe,{clsPrefix:e},{default:()=>x(ln,null)})])}),m=()=>x(Ze,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>We(o["add-icon"],()=>[x(Qe,{clsPrefix:e},{default:()=>x(zt,null)})])});return x("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},x(Se,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>{var l;return this.showButton&&this.buttonPlacement==="both"?[u(),Je(o.prefix,c=>c?x("span",{class:`${e}-input-number-prefix`},c):null)]:(l=o.prefix)===null||l===void 0?void 0:l.call(o)},suffix:()=>{var l;return this.showButton?[Je(o.suffix,c=>c?x("span",{class:`${e}-input-number-suffix`},c):null),this.buttonPlacement==="right"?u():null,m()]:(l=o.suffix)===null||l===void 0?void 0:l.call(o)}}))}});function st(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ot(){const e=new Map,o=u=>m=>{e.set(u,m)};return Tt(()=>{e.clear()}),[e,o]}const vn=ae([d("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[O("reverse",[d("slider-handles",[d("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),d("slider-dots",[d("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),O("vertical",[d("slider-handles",[d("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),d("slider-marks",[d("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),d("slider-dots",[d("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),O("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[d("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[d("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),d("slider-rail",`
 height: 100%;
 `,[ze("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),O("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),d("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[d("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),d("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[d("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),O("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[d("slider-handle",`
 cursor: not-allowed;
 `)]),O("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),ae("&:hover",[d("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ze("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),d("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),O("active",[d("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ze("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),d("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),d("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[d("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),d("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[ze("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),d("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[d("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[d("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[ae("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),ae("&:focus",[d("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[ae("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),d("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[O("transition-disabled",[d("slider-dot","transition: none;")]),d("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[O("active","border: var(--n-dot-border-active);")])])]),d("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[et()]),d("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[O("top",`
 margin-bottom: 12px;
 `),O("right",`
 margin-left: 12px;
 `),O("bottom",`
 margin-top: 12px;
 `),O("left",`
 margin-right: 12px;
 `),et()]),Mt(d("slider",[d("slider-dot","background-color: var(--n-dot-color-modal);")])),Nt(d("slider",[d("slider-dot","background-color: var(--n-dot-color-popover);")]))]),hn=0,mn=Object.assign(Object.assign({},ge.props),{to:Xe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),it=se({name:"Slider",props:mn,setup(e){const{mergedClsPrefixRef:o,namespaceRef:u,inlineThemeDisabled:m}=qe(e),l=ge("Slider","-slider",vn,Bt,e,o),c=T(null),[w,k]=ot(),[R,$]=ot(),p=T(new Set),M=lt(e),{mergedDisabledRef:X}=M,W=B(()=>{const{step:t}=e;if(Number(t)<=0||t==="mark")return 0;const n=t.toString();let s=0;return n.includes(".")&&(s=n.length-n.indexOf(".")-1),s}),Z=T(e.defaultValue),H=rt(e,"value"),j=dt(H,Z),D=B(()=>{const{value:t}=j;return(e.range?t:[t]).map(Ie)}),re=B(()=>D.value.length>2),S=B(()=>e.placement===void 0?e.vertical?"right":"top":e.placement),C=B(()=>{const{marks:t}=e;return t?Object.keys(t).map(parseFloat):null}),y=T(-1),G=T(-1),N=T(-1),z=T(!1),Y=T(!1),be=B(()=>{const{vertical:t,reverse:n}=e;return t?n?"top":"bottom":n?"right":"left"}),ye=B(()=>{if(re.value)return;const t=D.value,n=q(e.range?Math.min(...t):e.min),s=q(e.range?Math.max(...t):t[0]),{value:v}=be;return e.vertical?{[v]:`${n}%`,height:`${s-n}%`}:{[v]:`${n}%`,width:`${s-n}%`}}),xe=B(()=>{const t=[],{marks:n}=e;if(n){const s=D.value.slice();s.sort((F,A)=>F-A);const{value:v}=be,{value:_}=re,{range:P}=e,J=_?()=>!1:F=>P?F>=s[0]&&F<=s[s.length-1]:F<=s[0];for(const F of Object.keys(n)){const A=Number(F);t.push({active:J(A),label:n[F],style:{[v]:`${q(A)}%`}})}}return t});function Ne(t,n){const s=q(t),{value:v}=be;return{[v]:`${s}%`,zIndex:n===y.value?1:0}}function Re(t){return e.showTooltip||N.value===t||y.value===t&&z.value}function Be(t){return z.value?!(y.value===t&&G.value===t):!0}function we(t){var n;~t&&(y.value=t,(n=w.get(t))===null||n===void 0||n.focus())}function ke(){R.forEach((t,n)=>{Re(n)&&t.syncPosition()})}function Ce(t){const{"onUpdate:value":n,onUpdateValue:s}=e,{nTriggerFormInput:v,nTriggerFormChange:_}=M;s&&Q(s,t),n&&Q(n,t),Z.value=t,v(),_()}function Ve(t){const{range:n}=e;if(n){if(Array.isArray(t)){const{value:s}=D;t.join()!==s.join()&&Ce(t)}}else Array.isArray(t)||D.value[0]!==t&&Ce(t)}function de(t,n){if(e.range){const s=D.value.slice();s.splice(n,1,t),Ve(s)}else Ve(t)}function $e(t,n,s){const v=s!==void 0;s||(s=t-n>0?1:-1);const _=C.value||[],{step:P}=e;if(P==="mark"){const A=te(t,_.concat(n),v?s:void 0);return A?A.value:n}if(P<=0)return n;const{value:J}=W;let F;if(v){const A=Number((n/P).toFixed(J)),ne=Math.floor(A),Oe=A>ne?ne:ne-1,Ee=A<ne?ne:ne+1;F=te(n,[Number((Oe*P).toFixed(J)),Number((Ee*P).toFixed(J)),..._],s)}else{const A=ue(t);F=te(t,[..._,A])}return F?Ie(F.value):n}function Ie(t){return Math.min(e.max,Math.max(e.min,t))}function q(t){const{max:n,min:s}=e;return(t-s)/(n-s)*100}function oe(t){const{max:n,min:s}=e;return s+(n-s)*t}function ue(t){const{step:n,min:s}=e;if(Number(n)<=0||n==="mark")return t;const v=Math.round((t-s)/n)*n+s;return Number(v.toFixed(W.value))}function te(t,n=C.value,s){if(!(n!=null&&n.length))return null;let v=null,_=-1;for(;++_<n.length;){const P=n[_]-t,J=Math.abs(P);(s===void 0||P*s>0)&&(v===null||J<v.distance)&&(v={index:_,distance:J,value:n[_]})}return v}function ce(t){const n=c.value;if(!n)return;const s=st(t)?t.touches[0]:t,v=n.getBoundingClientRect();let _;return e.vertical?_=(v.bottom-s.clientY)/v.height:_=(s.clientX-v.left)/v.width,e.reverse&&(_=1-_),oe(_)}function De(t){if(X.value||!e.keyboard)return;const{vertical:n,reverse:s}=e;switch(t.key){case"ArrowUp":t.preventDefault(),ee(n&&s?-1:1);break;case"ArrowRight":t.preventDefault(),ee(!n&&s?-1:1);break;case"ArrowDown":t.preventDefault(),ee(n&&s?1:-1);break;case"ArrowLeft":t.preventDefault(),ee(!n&&s?1:-1);break}}function ee(t){const n=y.value;if(n===-1)return;const{step:s}=e,v=D.value[n],_=Number(s)<=0||s==="mark"?v:v+s*t;de($e(_,v,t>0?1:-1),n)}function Pe(t){var n,s;if(X.value||!st(t)&&t.button!==hn)return;const v=ce(t);if(v===void 0)return;const _=D.value.slice(),P=e.range?(s=(n=te(v,_))===null||n===void 0?void 0:n.index)!==null&&s!==void 0?s:-1:0;P!==-1&&(t.preventDefault(),we(P),Ue(),de($e(v,D.value[P]),P))}function Ue(){z.value||(z.value=!0,e.onDragstart&&Q(e.onDragstart),me("touchend",document,he),me("mouseup",document,he),me("touchmove",document,ve),me("mousemove",document,ve))}function fe(){z.value&&(z.value=!1,e.onDragend&&Q(e.onDragend),Te("touchend",document,he),Te("mouseup",document,he),Te("touchmove",document,ve),Te("mousemove",document,ve))}function ve(t){const{value:n}=y;if(!z.value||n===-1){fe();return}const s=ce(t);s!==void 0&&de($e(s,D.value[n]),n)}function he(){fe()}function Fe(t){y.value=t,X.value||(N.value=t)}function Ae(t){y.value===t&&(y.value=-1,fe()),N.value===t&&(N.value=-1)}function a(t){N.value=t}function r(t){N.value===t&&(N.value=-1)}Ke(y,(t,n)=>void Me(()=>G.value=n)),Ke(j,()=>{if(e.marks){if(Y.value)return;Y.value=!0,Me(()=>{Y.value=!1})}Me(ke)}),Dt(()=>{fe()});const g=B(()=>{const{self:{markFontSize:t,railColor:n,railColorHover:s,fillColor:v,fillColorHover:_,handleColor:P,opacityDisabled:J,dotColor:F,dotColorModal:A,handleBoxShadow:ne,handleBoxShadowHover:Oe,handleBoxShadowActive:Ee,handleBoxShadowFocus:vt,dotBorder:ht,dotBoxShadow:mt,railHeight:pt,railWidthVertical:gt,handleSize:bt,dotHeight:yt,dotWidth:xt,dotBorderRadius:wt,fontSize:kt,dotBorderActive:$t,dotColorPopover:St},common:{cubicBezierEaseInOut:_t}}=l.value;return{"--n-bezier":_t,"--n-dot-border":ht,"--n-dot-border-active":$t,"--n-dot-border-radius":wt,"--n-dot-box-shadow":mt,"--n-dot-color":F,"--n-dot-color-modal":A,"--n-dot-color-popover":St,"--n-dot-height":yt,"--n-dot-width":xt,"--n-fill-color":v,"--n-fill-color-hover":_,"--n-font-size":kt,"--n-handle-box-shadow":ne,"--n-handle-box-shadow-active":Ee,"--n-handle-box-shadow-focus":vt,"--n-handle-box-shadow-hover":Oe,"--n-handle-color":P,"--n-handle-size":bt,"--n-opacity-disabled":J,"--n-rail-color":n,"--n-rail-color-hover":s,"--n-rail-height":pt,"--n-rail-width-vertical":gt,"--n-mark-font-size":t}}),I=m?Ge("slider",void 0,g,e):void 0,L=B(()=>{const{self:{fontSize:t,indicatorColor:n,indicatorBoxShadow:s,indicatorTextColor:v,indicatorBorderRadius:_}}=l.value;return{"--n-font-size":t,"--n-indicator-border-radius":_,"--n-indicator-box-shadow":s,"--n-indicator-color":n,"--n-indicator-text-color":v}}),U=m?Ge("slider-indicator",void 0,L,e):void 0;return{mergedClsPrefix:o,namespace:u,uncontrolledValue:Z,mergedValue:j,mergedDisabled:X,mergedPlacement:S,isMounted:Pt(),adjustedTo:Xe(e),dotTransitionDisabled:Y,markInfos:xe,isShowTooltip:Re,shouldKeepTooltipTransition:Be,handleRailRef:c,setHandleRefs:k,setFollowerRefs:$,fillStyle:ye,getHandleStyle:Ne,activeIndex:y,arrifiedValues:D,followerEnabledIndexSet:p,handleRailMouseDown:Pe,handleHandleFocus:Fe,handleHandleBlur:Ae,handleHandleMouseEnter:a,handleHandleMouseLeave:r,handleRailKeyDown:De,indicatorCssVars:m?void 0:L,indicatorThemeClass:U==null?void 0:U.themeClass,indicatorOnRender:U==null?void 0:U.onRender,cssVars:m?void 0:g,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){var e;const{mergedClsPrefix:o,themeClass:u,formatTooltip:m}=this;return(e=this.onRender)===null||e===void 0||e.call(this),x("div",{class:[`${o}-slider`,u,{[`${o}-slider--disabled`]:this.mergedDisabled,[`${o}-slider--active`]:this.activeIndex!==-1,[`${o}-slider--with-mark`]:this.marks,[`${o}-slider--vertical`]:this.vertical,[`${o}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},x("div",{class:`${o}-slider-rail`},x("div",{class:`${o}-slider-rail__fill`,style:this.fillStyle}),this.marks?x("div",{class:[`${o}-slider-dots`,this.dotTransitionDisabled&&`${o}-slider-dots--transition-disabled`]},this.markInfos.map(l=>x("div",{key:l.label,class:[`${o}-slider-dot`,{[`${o}-slider-dot--active`]:l.active}],style:l.style}))):null,x("div",{ref:"handleRailRef",class:`${o}-slider-handles`},this.arrifiedValues.map((l,c)=>{const w=this.isShowTooltip(c);return x(Ut,null,{default:()=>[x(Ft,null,{default:()=>x("div",{ref:this.setHandleRefs(c),class:`${o}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":l,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(l,c),onFocus:()=>{this.handleHandleFocus(c)},onBlur:()=>{this.handleHandleBlur(c)},onMouseenter:()=>{this.handleHandleMouseEnter(c)},onMouseleave:()=>{this.handleHandleMouseLeave(c)}},We(this.$slots.thumb,()=>[x("div",{class:`${o}-slider-handle`})]))}),this.tooltip&&x(At,{ref:this.setFollowerRefs(c),show:w,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(c),teleportDisabled:this.adjustedTo===Xe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>x(ut,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(c),onEnter:()=>{this.followerEnabledIndexSet.add(c)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(c)}},{default:()=>{var k;return w?((k=this.indicatorOnRender)===null||k===void 0||k.call(this),x("div",{class:[`${o}-slider-handle-indicator`,this.indicatorThemeClass,`${o}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof m=="function"?m(l):l)):null}})})]})})),this.marks?x("div",{class:`${o}-slider-marks`},this.markInfos.map(l=>x("div",{key:l.label,class:`${o}-slider-mark`,style:l.style},l.label))):null))}}),pn=ae([ae("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),d("spin-container",`
 position: relative;
 `,[d("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ot()])]),d("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),d("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[O("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),d("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),d("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[O("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),gn={small:20,medium:18,large:16},bn=Object.assign(Object.assign({},ge.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),yn=se({name:"Spin",props:bn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:u}=qe(e),m=ge("Spin","-spin",pn,Et,e,o),l=B(()=>{const{size:R}=e,{common:{cubicBezierEaseInOut:$},self:p}=m.value,{opacitySpinning:M,color:X,textColor:W}=p,Z=typeof R=="number"?Ht(R):p[jt("size",R)];return{"--n-bezier":$,"--n-opacity-spinning":M,"--n-size":Z,"--n-color":X,"--n-text-color":W}}),c=u?Ge("spin",B(()=>{const{size:R}=e;return typeof R=="number"?String(R):R[0]}),l,e):void 0,w=Lt(e,["spinning","show"]),k=T(!1);return Kt(R=>{let $;if(w.value){const{delay:p}=e;if(p){$=window.setTimeout(()=>{k.value=!0},p),R(()=>{clearTimeout($)});return}}k.value=w.value}),{mergedClsPrefix:o,active:k,mergedStrokeWidth:B(()=>{const{strokeWidth:R}=e;if(R!==void 0)return R;const{size:$}=e;return gn[typeof $=="number"?"medium":$]}),cssVars:u?void 0:l,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var e,o;const{$slots:u,mergedClsPrefix:m,description:l}=this,c=u.icon&&this.rotate,w=(l||u.description)&&x("div",{class:`${m}-spin-description`},l||((e=u.description)===null||e===void 0?void 0:e.call(u))),k=u.icon?x("div",{class:[`${m}-spin-body`,this.themeClass]},x("div",{class:[`${m}-spin`,c&&`${m}-spin--rotate`],style:u.default?"":this.cssVars},u.icon()),w):x("div",{class:[`${m}-spin-body`,this.themeClass]},x(Wt,{clsPrefix:m,style:u.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${m}-spin`}),w);return(o=this.onRender)===null||o===void 0||o.call(this),u.default?x("div",{class:[`${m}-spin-container`,this.themeClass],style:this.cssVars},x("div",{class:[`${m}-spin-content`,this.active&&`${m}-spin-content--spinning`,this.contentClass],style:this.contentStyle},u),x(ut,{name:"fade-in-transition"},{default:()=>this.active?k:null})):k}});function xn(){const e=new Date,o=e.getDate(),u=e.getMonth()+1;return`${e.getFullYear()}-${u}-${o}`}const wn={class:"p-4 space-y-5 min-h-[200px]"},kn={class:"space-y-6"},$n={class:"flex items-center space-x-4"},Sn={class:"flex-shrink-0 w-[100px]"},_n={class:"flex-1"},Rn={class:"flex items-center space-x-4"},Cn={class:"flex-shrink-0 w-[100px]"},Vn={class:"flex-1"},In={class:"flex items-center space-x-4"},zn={class:"flex-shrink-0 w-[100px]"},Tn={class:"w-[200px]"},Mn={class:"flex-shrink-0 w-[100px]"},Nn={class:"flex flex-wrap items-center gap-4"},Bn={class:"flex items-center space-x-4"},Dn={class:"flex-shrink-0 w-[100px]"},Pn={class:"flex flex-wrap items-center gap-4"},Un={class:"flex items-center space-x-4"},Fn={class:"flex-shrink-0 w-[100px]"},An={class:"flex flex-wrap items-center gap-4"},On={class:"flex items-center space-x-4"},En={class:"flex-shrink-0 w-[100px]"},Hn=se({__name:"General",setup(e){const o=Gt(),u=Xt(),{isMobile:m}=Yt(),l=ct(),c=B(()=>o.theme),w=B(()=>u.userInfo),k=T(w.value.apiKey??""),R=T(w.value.avatar??""),$=T(w.value.name??""),p=B({get(){return o.language},set(S){o.setLanguage(S)}}),M=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],X=[{label:"English",key:"en-US",value:"en-US"},{label:"Español",key:"es-ES",value:"es-ES"},{label:"한국어",key:"ko-KR",value:"ko-KR"},{label:"Русский язык",key:"ru-RU",value:"ru-RU"},{label:"Tiếng Việt",key:"vi-VN",value:"vi-VN"},{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"}];function W(S){u.updateUserInfo(S),l.success(pe("common.success"))}function Z(){u.resetUserInfo(),l.success(pe("common.success")),window.location.reload()}function H(){const S=xn(),C=localStorage.getItem("chatStorage")||"{}",y=JSON.stringify(JSON.parse(C),null,2),G=new Blob([y],{type:"application/json"}),N=URL.createObjectURL(G),z=document.createElement("a");z.href=N,z.download=`chat-store_${S}.json`,document.body.appendChild(z),z.click(),document.body.removeChild(z)}function j(S){const C=S.target;if(!C||!C.files)return;const y=C.files[0];if(!y)return;const G=new FileReader;G.onload=()=>{try{const N=JSON.parse(G.result);localStorage.setItem("chatStorage",JSON.stringify(N)),l.success(pe("common.success")),location.reload()}catch{l.error(pe("common.invalidFileFormat"))}},G.readAsText(y)}function D(){localStorage.removeItem("chatStorage"),location.reload()}function re(){const S=document.getElementById("fileInput");S&&S.click()}return(S,C)=>(_e(),Ye("div",wn,[i("div",kn,[i("div",$n,[i("span",Sn,f(S.$t("setting.apiKey")),1),i("div",_n,[b(h(Se),{value:k.value,"onUpdate:value":C[0]||(C[0]=y=>k.value=y),type:"password",placeholder:""},null,8,["value"])]),b(h(K),{size:"tiny",text:"",type:"primary",onClick:C[1]||(C[1]=y=>W({apiKey:k.value}))},{default:V(()=>[E(f(S.$t("common.save")),1)]),_:1})]),i("div",Rn,[i("span",Cn,f(S.$t("setting.avatarLink")),1),i("div",Vn,[b(h(Se),{value:R.value,"onUpdate:value":C[2]||(C[2]=y=>R.value=y),placeholder:""},null,8,["value"])]),b(h(K),{size:"tiny",text:"",type:"primary",onClick:C[3]||(C[3]=y=>W({avatar:R.value}))},{default:V(()=>[E(f(S.$t("common.save")),1)]),_:1})]),i("div",In,[i("span",zn,f(S.$t("setting.name")),1),i("div",Tn,[b(h(Se),{value:$.value,"onUpdate:value":C[4]||(C[4]=y=>$.value=y),placeholder:""},null,8,["value"])]),b(h(K),{size:"tiny",text:"",type:"primary",onClick:C[5]||(C[5]=y=>W({name:$.value}))},{default:V(()=>[E(f(S.$t("common.save")),1)]),_:1})]),i("div",{class:qt(["flex items-center space-x-4",h(m)&&"items-start"])},[i("span",Mn,f(S.$t("setting.chatHistory")),1),i("div",Nn,[b(h(K),{size:"small",onClick:H},{icon:V(()=>[b(h(le),{icon:"ri:download-2-fill"})]),default:V(()=>[E(" "+f(S.$t("common.export")),1)]),_:1}),i("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:j},null,32),b(h(K),{size:"small",onClick:re},{icon:V(()=>[b(h(le),{icon:"ri:upload-2-fill"})]),default:V(()=>[E(" "+f(S.$t("common.import")),1)]),_:1}),b(h(Jt),{placement:"bottom",onPositiveClick:D},{trigger:V(()=>[b(h(K),{size:"small"},{icon:V(()=>[b(h(le),{icon:"ri:close-circle-line"})]),default:V(()=>[E(" "+f(S.$t("common.clear")),1)]),_:1})]),default:V(()=>[E(" "+f(S.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),i("div",Bn,[i("span",Dn,f(S.$t("setting.theme")),1),i("div",Pn,[(_e(),Ye(Qt,null,Zt(M,y=>b(h(K),{key:y.key,size:"small",type:y.key===c.value?"primary":void 0,onClick:G=>h(o).setTheme(y.key)},{icon:V(()=>[b(h(le),{icon:y.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),i("div",Un,[i("span",Fn,f(S.$t("setting.language")),1),i("div",An,[b(h(en),{style:{width:"140px"},value:p.value,options:X,onUpdateValue:C[6]||(C[6]=y=>h(o).setLanguage(y))},null,8,["value"])])]),i("div",On,[i("span",En,f(S.$t("setting.resetUserInfo")),1),b(h(K),{size:"small",onClick:Z},{default:V(()=>[E(f(S.$t("common.reset")),1)]),_:1})])])]))}}),jn={class:"p-4 space-y-5 min-h-[200px]"},Ln={class:"space-y-6"},Kn={class:"flex items-center space-x-4"},Wn={class:"flex-shrink-0 w-[120px]"},Gn={class:"flex-1"},Xn={class:"flex items-center space-x-4"},Yn={class:"flex-shrink-0 w-[120px]"},qn={class:"flex-1"},Jn={class:"flex items-center space-x-4"},Qn={class:"flex-shrink-0 w-[120px]"},Zn={class:"flex-1"},ea={class:"flex items-center space-x-4"},ta={class:"flex-shrink-0 w-[120px]"},na={class:"flex-1"},aa={class:"flex items-center space-x-4"},sa=i("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),oa=se({__name:"Advanced",setup(e){const o=tn(),u=ct(),m=T(o.systemMessage??""),l=T(o.maxTokens??2e3),c=T(o.temperature??.5),w=T(o.top_p??1);function k($){o.updateSetting($),u.success(pe("common.success"))}function R(){o.resetSetting(),u.success(pe("common.success")),window.location.reload()}return($,p)=>(_e(),Ye("div",jn,[i("div",Ln,[i("div",Kn,[i("span",Wn,f($.$t("setting.role")),1),i("div",Gn,[b(h(Se),{value:m.value,"onUpdate:value":p[0]||(p[0]=M=>m.value=M),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),b(h(K),{size:"tiny",text:"",type:"primary",onClick:p[1]||(p[1]=M=>k({systemMessage:m.value}))},{default:V(()=>[E(f($.$t("common.save")),1)]),_:1})]),i("div",Xn,[i("span",Yn,f($.$t("setting.maxTokens")),1),i("div",qn,[b(h(fn),{value:l.value,"onUpdate:value":p[2]||(p[2]=M=>l.value=M),min:0,placeholder:""},null,8,["value"])]),b(h(K),{size:"tiny",text:"",type:"primary",onClick:p[3]||(p[3]=M=>k({maxTokens:l.value}))},{default:V(()=>[E(f($.$t("common.save")),1)]),_:1})]),i("div",Jn,[i("span",Qn,f($.$t("setting.temperature")),1),i("div",Zn,[b(h(it),{value:c.value,"onUpdate:value":p[4]||(p[4]=M=>c.value=M),max:2,min:0,step:.1},null,8,["value"])]),i("span",null,f(c.value),1),b(h(K),{size:"tiny",text:"",type:"primary",onClick:p[5]||(p[5]=M=>k({temperature:c.value}))},{default:V(()=>[E(f($.$t("common.save")),1)]),_:1})]),i("div",ea,[i("span",ta,f($.$t("setting.top_p")),1),i("div",na,[b(h(it),{value:w.value,"onUpdate:value":p[6]||(p[6]=M=>w.value=M),max:1,min:0,step:.1},null,8,["value"])]),i("span",null,f(w.value),1),b(h(K),{size:"tiny",text:"",type:"primary",onClick:p[7]||(p[7]=M=>k({top_p:w.value}))},{default:V(()=>[E(f($.$t("common.save")),1)]),_:1})]),i("div",aa,[sa,b(h(K),{size:"small",onClick:R},{default:V(()=>[E(f($.$t("common.reset")),1)]),_:1})])])]))}}),ia="xiyangai-chatgpt-web",la="2.11.1",ra="Z杰智能",da="xiyangai <xiyangai.top@gmail.com>",ua=["chatgpt-web","xiyangai.top","xiyangai","chatgpt","chatbot","vue"],ca={dev:"vite",build:"run-p type-check build-only",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --noEmit",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"npm install && npm run common:prepare","common:cleanup":"rimraf node_modules","common:prepare":"husky install"},fa={"@vscode/markdown-it-katex":"^1.0.3","@vueuse/core":"^9.13.0","highlight.js":"^11.7.0","html-to-image":"^1.11.11",jsencrypt:"^3.3.2",katex:"^0.16.4","markdown-it":"^13.0.1","mermaid-it-markdown":"^1.0.8","naive-ui":"^2.34.3","node-forge":"^1.3.1",pinia:"^2.0.33",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},va={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.2.2","@types/katex":"^0.16.0","@types/markdown-it":"^12.2.3","@types/markdown-it-link-attributes":"^3.0.1","@types/node":"^18.14.6","@types/node-forge":"^1.3.11","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",axios:"^1.3.4","crypto-js":"^4.2.0",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","markdown-it-link-attributes":"^4.0.1","npm-run-all":"^4.1.5",postcss:"^8.4.21",rimraf:"^4.3.0",tailwindcss:"^3.2.7",typescript:"~4.9.5",vite:"^4.2.0","vite-plugin-pwa":"^0.14.4","vue-tsc":"^1.2.0"},ha={name:ia,version:la,private:!1,description:ra,author:da,keywords:ua,scripts:ca,dependencies:fa,devDependencies:va,"lint-staged":{"*.{ts,tsx,vue}":["npm lint:fix"]}},ma={class:"p-4 space-y-4"},pa={class:"text-xl font-bold"},ga={class:"p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700"},ba=i("a",{class:"text-blue-600 dark:text-blue-500",href:"https://github.com/cmyang-it/xiyangai-chatgpt-web",target:"_blank"}," GitHub ",-1),ya=se({__name:"About",setup(e){const o=T(!1),u=T();async function m(){try{o.value=!0;const{data:l}=await an();u.value=l}finally{o.value=!1}}return nn(()=>{m()}),(l,c)=>(_e(),ft(h(yn),{show:o.value},{default:V(()=>{var w,k,R,$;return[i("div",ma,[i("h2",pa," Version - "+f(h(ha).version),1),i("div",ga,[i("p",null,[E(f(l.$t("setting.openSource"))+" ",1),ba,E(" "+f(l.$t("setting.freeMIT")),1)]),i("p",null,f(l.$t("setting.stars")),1)]),i("p",null,f(l.$t("setting.baseUrl"))+"："+f(((w=u.value)==null?void 0:w.baseUrl)??"-"),1),i("p",null,f(l.$t("setting.timeout"))+"："+f(((k=u.value)==null?void 0:k.timeoutMs)??"-"),1),i("p",null,f(l.$t("setting.socks"))+"："+f(((R=u.value)==null?void 0:R.socksProxy)??"-"),1),i("p",null,f(l.$t("setting.httpsProxy"))+"："+f((($=u.value)==null?void 0:$.httpsProxy)??"-"),1)])]}),_:1},8,["show"]))}}),xa={class:"ml-2"},wa={class:"min-h-[100px]"},ka={class:"ml-2"},$a={class:"min-h-[100px]"},Sa={class:"ml-2"},Ra=se({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(e,{emit:o}){const u=e,m=o,l=T("General"),c=B({get(){return u.visible},set(w){m("update:visible",w)}});return(w,k)=>(_e(),ft(h(on),{show:c.value,"onUpdate:show":k[1]||(k[1]=R=>c.value=R),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:V(()=>[i("div",null,[b(h(sn),{value:l.value,"onUpdate:value":k[0]||(k[0]=R=>l.value=R),type:"line",animated:""},{default:V(()=>[b(h(He),{name:"General",tab:"General"},{tab:V(()=>[b(h(le),{class:"text-lg",icon:"ri:file-user-line"}),i("span",xa,f(w.$t("setting.general")),1)]),default:V(()=>[i("div",wa,[b(Hn)])]),_:1}),b(h(He),{name:"Advanced",tab:"Advanced"},{tab:V(()=>[b(h(le),{class:"text-lg",icon:"ri:equalizer-line"}),i("span",ka,f(w.$t("setting.advanced")),1)]),default:V(()=>[i("div",$a,[b(oa)])]),_:1}),b(h(He),{name:"Config",tab:"Config"},{tab:V(()=>[b(h(le),{class:"text-lg",icon:"ri:list-settings-line"}),i("span",Sa,f(w.$t("setting.config")),1)]),default:V(()=>[b(ya)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{Ra as default};
