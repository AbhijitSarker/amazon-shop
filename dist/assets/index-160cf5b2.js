function gy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function vy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oo={},yy={get exports(){return Oo},set exports(e){Oo=e}},vs={},P={},wy={get exports(){return P},set exports(e){P=e}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),_y=Symbol.for("react.portal"),ky=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),Sy=Symbol.for("react.profiler"),Iy=Symbol.for("react.provider"),by=Symbol.for("react.context"),Cy=Symbol.for("react.forward_ref"),Ty=Symbol.for("react.suspense"),xy=Symbol.for("react.memo"),Py=Symbol.for("react.lazy"),Uf=Symbol.iterator;function Ry(e){return e===null||typeof e!="object"?null:(e=Uf&&e[Uf]||e["@@iterator"],typeof e=="function"?e:null)}var lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},up=Object.assign,cp={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=cp,this.updater=n||lp}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fp(){}fp.prototype=Zr.prototype;function lc(e,t,n){this.props=e,this.context=t,this.refs=cp,this.updater=n||lp}var uc=lc.prototype=new fp;uc.constructor=lc;up(uc,Zr.prototype);uc.isPureReactComponent=!0;var Ff=Array.isArray,dp=Object.prototype.hasOwnProperty,cc={current:null},hp={key:!0,ref:!0,__self:!0,__source:!0};function pp(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)dp.call(t,r)&&!hp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:_a,type:e,key:a,ref:o,props:i,_owner:cc.current}}function Ay(e,t){return{$$typeof:_a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fc(e){return typeof e=="object"&&e!==null&&e.$$typeof===_a}function Ny(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zf=/\/+/g;function Zs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ny(""+e.key):t.toString(36)}function mo(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case _a:case _y:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Zs(o,0):r,Ff(i)?(n="",e!=null&&(n=e.replace(zf,"$&/")+"/"),mo(i,t,n,"",function(u){return u})):i!=null&&(fc(i)&&(i=Ay(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ff(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Zs(a,s);o+=mo(a,t,n,l,i)}else if(l=Ry(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Zs(a,s++),o+=mo(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ja(e,t,n){if(e==null)return e;var r=[],i=0;return mo(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Oy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},go={transition:null},Dy={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:go,ReactCurrentOwner:cc};G.Children={map:ja,forEach:function(e,t,n){ja(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ja(e,function(){t++}),t},toArray:function(e){return ja(e,function(t){return t})||[]},only:function(e){if(!fc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Zr;G.Fragment=ky;G.Profiler=Sy;G.PureComponent=lc;G.StrictMode=Ey;G.Suspense=Ty;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=up({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=cc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)dp.call(t,l)&&!hp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:_a,type:e.type,key:i,ref:a,props:r,_owner:o}};G.createContext=function(e){return e={$$typeof:by,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Iy,_context:e},e.Consumer=e};G.createElement=pp;G.createFactory=function(e){var t=pp.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Cy,render:e}};G.isValidElement=fc;G.lazy=function(e){return{$$typeof:Py,_payload:{_status:-1,_result:e},_init:Oy}};G.memo=function(e,t){return{$$typeof:xy,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=go.transition;go.transition={};try{e()}finally{go.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return ze.current.useCallback(e,t)};G.useContext=function(e){return ze.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};G.useEffect=function(e,t){return ze.current.useEffect(e,t)};G.useId=function(){return ze.current.useId()};G.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return ze.current.useMemo(e,t)};G.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};G.useRef=function(e){return ze.current.useRef(e)};G.useState=function(e){return ze.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return ze.current.useTransition()};G.version="18.2.0";(function(e){e.exports=G})(wy);const ys=vy(P),Bl=gy({__proto__:null,default:ys},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly=P,My=Symbol.for("react.element"),Uy=Symbol.for("react.fragment"),Fy=Object.prototype.hasOwnProperty,zy=Ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jy={key:!0,ref:!0,__self:!0,__source:!0};function mp(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Fy.call(t,r)&&!jy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:My,type:e,key:a,ref:o,props:i,_owner:zy.current}}vs.Fragment=Uy;vs.jsx=mp;vs.jsxs=mp;(function(e){e.exports=vs})(yy);const R=Oo.jsx,q=Oo.jsxs;var Hl={},Wl={},$y={get exports(){return Wl},set exports(e){Wl=e}},qe={},Vl={},By={get exports(){return Vl},set exports(e){Vl=e}},gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,H){var U=N.length;N.push(H);e:for(;0<U;){var ee=U-1>>>1,pe=N[ee];if(0<i(pe,H))N[ee]=H,N[U]=pe,U=ee;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var H=N[0],U=N.pop();if(U!==H){N[0]=U;e:for(var ee=0,pe=N.length,cr=pe>>>1;ee<cr;){var Re=2*(ee+1)-1,ci=N[Re],Rt=Re+1,Mn=N[Rt];if(0>i(ci,U))Rt<pe&&0>i(Mn,ci)?(N[ee]=Mn,N[Rt]=U,ee=Rt):(N[ee]=ci,N[Re]=U,ee=Re);else if(Rt<pe&&0>i(Mn,U))N[ee]=Mn,N[Rt]=U,ee=Rt;else break e}}return H}function i(N,H){var U=N.sortIndex-H.sortIndex;return U!==0?U:N.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,f=null,h=3,v=!1,_=!1,w=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=N)r(u),H.sortIndex=H.expirationTime,t(l,H);else break;H=n(u)}}function y(N){if(w=!1,m(N),!_)if(n(l)!==null)_=!0,Ln(S);else{var H=n(u);H!==null&&ui(y,H.startTime-N)}}function S(N,H){_=!1,w&&(w=!1,p(x),x=-1),v=!0;var U=h;try{for(m(H),f=n(l);f!==null&&(!(f.expirationTime>H)||N&&!be());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,h=f.priorityLevel;var pe=ee(f.expirationTime<=H);H=e.unstable_now(),typeof pe=="function"?f.callback=pe:f===n(l)&&r(l),m(H)}else r(l);f=n(l)}if(f!==null)var cr=!0;else{var Re=n(u);Re!==null&&ui(y,Re.startTime-H),cr=!1}return cr}finally{f=null,h=U,v=!1}}var C=!1,T=null,x=-1,V=5,B=-1;function be(){return!(e.unstable_now()-B<V)}function yt(){if(T!==null){var N=e.unstable_now();B=N;var H=!0;try{H=T(!0,N)}finally{H?Ze():(C=!1,T=null)}}else C=!1}var Ze;if(typeof d=="function")Ze=function(){d(yt)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,_t=wt.port2;wt.port1.onmessage=yt,Ze=function(){_t.postMessage(null)}}else Ze=function(){g(yt,0)};function Ln(N){T=N,C||(C=!0,Ze())}function ui(N,H){x=g(function(){N(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){_||v||(_=!0,Ln(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var U=h;h=H;try{return N()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var U=h;h=N;try{return H()}finally{h=U}},e.unstable_scheduleCallback=function(N,H,U){var ee=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ee+U:ee):U=ee,N){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=U+pe,N={id:c++,callback:H,priorityLevel:N,startTime:U,expirationTime:pe,sortIndex:-1},U>ee?(N.sortIndex=U,t(u,N),n(l)===null&&N===n(u)&&(w?(p(x),x=-1):w=!0,ui(y,U-ee))):(N.sortIndex=pe,t(l,N),_||v||(_=!0,Ln(S))),N},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(N){var H=h;return function(){var U=h;h=H;try{return N.apply(this,arguments)}finally{h=U}}}})(gp);(function(e){e.exports=gp})(By);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=P,Qe=Vl;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yp=new Set,Ki={};function or(e,t){Br(e,t),Br(e+"Capture",t)}function Br(e,t){for(Ki[e]=t,e=0;e<t.length;e++)yp.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,Hy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jf={},$f={};function Wy(e){return Kl.call($f,e)?!0:Kl.call(jf,e)?!1:Hy.test(e)?$f[e]=!0:(jf[e]=!0,!1)}function Vy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ky(e,t,n,r){if(t===null||typeof t>"u"||Vy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var dc=/[\-:]([a-z])/g;function hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dc,hc);Pe[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dc,hc);Pe[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dc,hc);Pe[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function pc(e,t,n,r){var i=Pe.hasOwnProperty(t)?Pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ky(t,n,i,r)&&(n=null),r||i===null?Wy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xt=vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),hr=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),_p=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),kp=Symbol.for("react.offscreen"),Bf=Symbol.iterator;function gi(e){return e===null||typeof e!="object"?null:(e=Bf&&e[Bf]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,el;function Ci(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ci(e):""}function Yy(e){switch(e.tag){case 5:return Ci(e.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pr:return"Fragment";case hr:return"Portal";case Yl:return"Profiler";case mc:return"StrictMode";case Gl:return"Suspense";case Ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _p:return(e.displayName||"Context")+".Consumer";case wp:return(e._context.displayName||"Context")+".Provider";case gc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vc:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function Gy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===mc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qy(e){var t=Ep(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ba(e){e._valueTracker||(e._valueTracker=Qy(e))}function Sp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ep(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Do(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ip(e,t){t=t.checked,t!=null&&pc(e,"checked",t,!1)}function Jl(e,t){Ip(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zl(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zl(e,t,n){(t!=="number"||Do(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ti=Array.isArray;function Ar(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function eu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Ti(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function bp(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ha,Tp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qy=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(e){qy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Oi[t]=Oi[e]})});function xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Oi.hasOwnProperty(e)&&Oi[e]?(""+t).trim():t+"px"}function Pp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Xy=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nu(e,t){if(t){if(Xy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function ru(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iu=null;function yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var au=null,Nr=null,Or=null;function Yf(e){if(e=Sa(e)){if(typeof au!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Ss(t),au(e.stateNode,e.type,t))}}function Rp(e){Nr?Or?Or.push(e):Or=[e]:Nr=e}function Ap(){if(Nr){var e=Nr,t=Or;if(Or=Nr=null,Yf(e),t)for(e=0;e<t.length;e++)Yf(t[e])}}function Np(e,t){return e(t)}function Op(){}var rl=!1;function Dp(e,t,n){if(rl)return e(t,n);rl=!0;try{return Np(e,t,n)}finally{rl=!1,(Nr!==null||Or!==null)&&(Op(),Ap())}}function Gi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ss(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var ou=!1;if(Bt)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){ou=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{ou=!1}function Jy(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Di=!1,Lo=null,Mo=!1,su=null,Zy={onError:function(e){Di=!0,Lo=e}};function e0(e,t,n,r,i,a,o,s,l){Di=!1,Lo=null,Jy.apply(Zy,arguments)}function t0(e,t,n,r,i,a,o,s,l){if(e0.apply(this,arguments),Di){if(Di){var u=Lo;Di=!1,Lo=null}else throw Error(b(198));Mo||(Mo=!0,su=u)}}function sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gf(e){if(sr(e)!==e)throw Error(b(188))}function n0(e){var t=e.alternate;if(!t){if(t=sr(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Gf(i),e;if(a===r)return Gf(i),t;a=a.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Mp(e){return e=n0(e),e!==null?Up(e):null}function Up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Up(e);if(t!==null)return t;e=e.sibling}return null}var Fp=Qe.unstable_scheduleCallback,Qf=Qe.unstable_cancelCallback,r0=Qe.unstable_shouldYield,i0=Qe.unstable_requestPaint,me=Qe.unstable_now,a0=Qe.unstable_getCurrentPriorityLevel,wc=Qe.unstable_ImmediatePriority,zp=Qe.unstable_UserBlockingPriority,Uo=Qe.unstable_NormalPriority,o0=Qe.unstable_LowPriority,jp=Qe.unstable_IdlePriority,ws=null,Ct=null;function s0(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(ws,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:c0,l0=Math.log,u0=Math.LN2;function c0(e){return e>>>=0,e===0?32:31-(l0(e)/u0|0)|0}var Wa=64,Va=4194304;function xi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=xi(s):(a&=o,a!==0&&(r=xi(a)))}else o=n&~i,o!==0?r=xi(o):a!==0&&(r=xi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function f0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-pt(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=f0(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function lu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $p(){var e=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ka(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function h0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function _c(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function Bp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hp,kc,Wp,Vp,Kp,uu=!1,Ka=[],gn=null,vn=null,yn=null,Qi=new Map,qi=new Map,sn=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qf(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":Qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(t.pointerId)}}function yi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Sa(t),t!==null&&kc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function m0(e,t,n,r,i){switch(t){case"focusin":return gn=yi(gn,e,t,n,r,i),!0;case"dragenter":return vn=yi(vn,e,t,n,r,i),!0;case"mouseover":return yn=yi(yn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Qi.set(a,yi(Qi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,qi.set(a,yi(qi.get(a)||null,e,t,n,r,i)),!0}return!1}function Yp(e){var t=$n(e.target);if(t!==null){var n=sr(t);if(n!==null){if(t=n.tag,t===13){if(t=Lp(n),t!==null){e.blockedOn=t,Kp(e.priority,function(){Wp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);iu=r,n.target.dispatchEvent(r),iu=null}else return t=Sa(n),t!==null&&kc(t),e.blockedOn=n,!1;t.shift()}return!0}function Xf(e,t,n){vo(e)&&n.delete(t)}function g0(){uu=!1,gn!==null&&vo(gn)&&(gn=null),vn!==null&&vo(vn)&&(vn=null),yn!==null&&vo(yn)&&(yn=null),Qi.forEach(Xf),qi.forEach(Xf)}function wi(e,t){e.blockedOn===t&&(e.blockedOn=null,uu||(uu=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,g0)))}function Xi(e){function t(i){return wi(i,e)}if(0<Ka.length){wi(Ka[0],e);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&wi(gn,e),vn!==null&&wi(vn,e),yn!==null&&wi(yn,e),Qi.forEach(t),qi.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)Yp(n),n.blockedOn===null&&sn.shift()}var Dr=Xt.ReactCurrentBatchConfig,zo=!0;function v0(e,t,n,r){var i=Z,a=Dr.transition;Dr.transition=null;try{Z=1,Ec(e,t,n,r)}finally{Z=i,Dr.transition=a}}function y0(e,t,n,r){var i=Z,a=Dr.transition;Dr.transition=null;try{Z=4,Ec(e,t,n,r)}finally{Z=i,Dr.transition=a}}function Ec(e,t,n,r){if(zo){var i=cu(e,t,n,r);if(i===null)pl(e,t,r,jo,n),qf(e,r);else if(m0(i,e,t,n,r))r.stopPropagation();else if(qf(e,r),t&4&&-1<p0.indexOf(e)){for(;i!==null;){var a=Sa(i);if(a!==null&&Hp(a),a=cu(e,t,n,r),a===null&&pl(e,t,r,jo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var jo=null;function cu(e,t,n,r){if(jo=null,e=yc(r),e=$n(e),e!==null)if(t=sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jo=e,null}function Gp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a0()){case wc:return 1;case zp:return 4;case Uo:case o0:return 16;case jp:return 536870912;default:return 16}default:return 16}}var hn=null,Sc=null,yo=null;function Qp(){if(yo)return yo;var e,t=Sc,n=t.length,r,i="value"in hn?hn.value:hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yo=i.slice(e,1<r?1-r:void 0)}function wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ya(){return!0}function Jf(){return!1}function Xe(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ya:Jf,this.isPropagationStopped=Jf,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),t}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=Xe(ei),Ea=fe({},ei,{view:0,detail:0}),w0=Xe(Ea),al,ol,_i,_s=fe({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_i&&(_i&&e.type==="mousemove"?(al=e.screenX-_i.screenX,ol=e.screenY-_i.screenY):ol=al=0,_i=e),al)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Zf=Xe(_s),_0=fe({},_s,{dataTransfer:0}),k0=Xe(_0),E0=fe({},Ea,{relatedTarget:0}),sl=Xe(E0),S0=fe({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),I0=Xe(S0),b0=fe({},ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C0=Xe(b0),T0=fe({},ei,{data:0}),ed=Xe(T0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R0[e])?!!t[e]:!1}function bc(){return A0}var N0=fe({},Ea,{key:function(e){if(e.key){var t=x0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O0=Xe(N0),D0=fe({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=Xe(D0),L0=fe({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),M0=Xe(L0),U0=fe({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=Xe(U0),z0=fe({},_s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=Xe(z0),$0=[9,13,27,32],Cc=Bt&&"CompositionEvent"in window,Li=null;Bt&&"documentMode"in document&&(Li=document.documentMode);var B0=Bt&&"TextEvent"in window&&!Li,qp=Bt&&(!Cc||Li&&8<Li&&11>=Li),nd=String.fromCharCode(32),rd=!1;function Xp(e,t){switch(e){case"keyup":return $0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function H0(e,t){switch(e){case"compositionend":return Jp(t);case"keypress":return t.which!==32?null:(rd=!0,nd);case"textInput":return e=t.data,e===nd&&rd?null:e;default:return null}}function W0(e,t){if(mr)return e==="compositionend"||!Cc&&Xp(e,t)?(e=Qp(),yo=Sc=hn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qp&&t.locale!=="ko"?null:t.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V0[e.type]:t==="textarea"}function Zp(e,t,n,r){Rp(r),t=$o(t,"onChange"),0<t.length&&(n=new Ic("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mi=null,Ji=null;function K0(e){cm(e,0)}function ks(e){var t=yr(e);if(Sp(t))return e}function Y0(e,t){if(e==="change")return t}var em=!1;if(Bt){var ll;if(Bt){var ul="oninput"in document;if(!ul){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),ul=typeof ad.oninput=="function"}ll=ul}else ll=!1;em=ll&&(!document.documentMode||9<document.documentMode)}function od(){Mi&&(Mi.detachEvent("onpropertychange",tm),Ji=Mi=null)}function tm(e){if(e.propertyName==="value"&&ks(Ji)){var t=[];Zp(t,Ji,e,yc(e)),Dp(K0,t)}}function G0(e,t,n){e==="focusin"?(od(),Mi=t,Ji=n,Mi.attachEvent("onpropertychange",tm)):e==="focusout"&&od()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ks(Ji)}function q0(e,t){if(e==="click")return ks(t)}function X0(e,t){if(e==="input"||e==="change")return ks(t)}function J0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:J0;function Zi(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kl.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function sd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ld(e,t){var n=sd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sd(n)}}function nm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rm(){for(var e=window,t=Do();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Do(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Z0(e){var t=rm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nm(n.ownerDocument.documentElement,n)){if(r!==null&&Tc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ld(n,a);var o=ld(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var e1=Bt&&"documentMode"in document&&11>=document.documentMode,gr=null,fu=null,Ui=null,du=!1;function ud(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||gr==null||gr!==Do(r)||(r=gr,"selectionStart"in r&&Tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ui&&Zi(Ui,r)||(Ui=r,r=$o(fu,"onSelect"),0<r.length&&(t=new Ic("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function Ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vr={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},cl={},im={};Bt&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function Es(e){if(cl[e])return cl[e];if(!vr[e])return e;var t=vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in im)return cl[e]=t[n];return e}var am=Es("animationend"),om=Es("animationiteration"),sm=Es("animationstart"),lm=Es("transitionend"),um=new Map,cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){um.set(e,t),or(t,[e])}for(var fl=0;fl<cd.length;fl++){var dl=cd[fl],t1=dl.toLowerCase(),n1=dl[0].toUpperCase()+dl.slice(1);An(t1,"on"+n1)}An(am,"onAnimationEnd");An(om,"onAnimationIteration");An(sm,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(lm,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));function fd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,t0(r,t,void 0,e),e.currentTarget=null}function cm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;fd(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;fd(i,s,u),a=l}}}if(Mo)throw e=su,Mo=!1,su=null,e}function ie(e,t){var n=t[vu];n===void 0&&(n=t[vu]=new Set);var r=e+"__bubble";n.has(r)||(fm(t,e,2,!1),n.add(r))}function hl(e,t,n){var r=0;t&&(r|=4),fm(n,e,r,t)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function ea(e){if(!e[Qa]){e[Qa]=!0,yp.forEach(function(n){n!=="selectionchange"&&(r1.has(n)||hl(n,!1,e),hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qa]||(t[Qa]=!0,hl("selectionchange",!1,t))}}function fm(e,t,n,r){switch(Gp(t)){case 1:var i=v0;break;case 4:i=y0;break;default:i=Ec}n=i.bind(null,t,n,e),i=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=$n(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Dp(function(){var u=a,c=yc(n),f=[];e:{var h=um.get(e);if(h!==void 0){var v=Ic,_=e;switch(e){case"keypress":if(wo(n)===0)break e;case"keydown":case"keyup":v=O0;break;case"focusin":_="focus",v=sl;break;case"focusout":_="blur",v=sl;break;case"beforeblur":case"afterblur":v=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=M0;break;case am:case om:case sm:v=I0;break;case lm:v=F0;break;case"scroll":v=w0;break;case"wheel":v=j0;break;case"copy":case"cut":case"paste":v=C0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=td}var w=(t&4)!==0,g=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Gi(d,p),y!=null&&w.push(ta(d,y,m)))),g)break;d=d.return}0<w.length&&(h=new v(h,_,null,n,c),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==iu&&(_=n.relatedTarget||n.fromElement)&&($n(_)||_[Ht]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?$n(_):null,_!==null&&(g=sr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(w=Zf,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=td,y="onPointerLeave",p="onPointerEnter",d="pointer"),g=v==null?h:yr(v),m=_==null?h:yr(_),h=new w(y,d+"leave",v,n,c),h.target=g,h.relatedTarget=m,y=null,$n(c)===u&&(w=new w(p,d+"enter",_,n,c),w.target=m,w.relatedTarget=g,y=w),g=y,v&&_)t:{for(w=v,p=_,d=0,m=w;m;m=dr(m))d++;for(m=0,y=p;y;y=dr(y))m++;for(;0<d-m;)w=dr(w),d--;for(;0<m-d;)p=dr(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=dr(w),p=dr(p)}w=null}else w=null;v!==null&&dd(f,h,v,w,!1),_!==null&&g!==null&&dd(f,g,_,w,!0)}}e:{if(h=u?yr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=Y0;else if(id(h))if(em)S=X0;else{S=Q0;var C=G0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=q0);if(S&&(S=S(e,u))){Zp(f,S,n,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Zl(h,"number",h.value)}switch(C=u?yr(u):window,e){case"focusin":(id(C)||C.contentEditable==="true")&&(gr=C,fu=u,Ui=null);break;case"focusout":Ui=fu=gr=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,ud(f,n,c);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":ud(f,n,c)}var T;if(Cc)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else mr?Xp(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(qp&&n.locale!=="ko"&&(mr||x!=="onCompositionStart"?x==="onCompositionEnd"&&mr&&(T=Qp()):(hn=c,Sc="value"in hn?hn.value:hn.textContent,mr=!0)),C=$o(u,x),0<C.length&&(x=new ed(x,e,null,n,c),f.push({event:x,listeners:C}),T?x.data=T:(T=Jp(n),T!==null&&(x.data=T)))),(T=B0?H0(e,n):W0(e,n))&&(u=$o(u,"onBeforeInput"),0<u.length&&(c=new ed("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}cm(f,t)})}function ta(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $o(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Gi(e,n),a!=null&&r.unshift(ta(e,a,i)),a=Gi(e,t),a!=null&&r.push(ta(e,a,i))),e=e.return}return r}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Gi(n,a),l!=null&&o.unshift(ta(n,l,s))):i||(l=Gi(n,a),l!=null&&o.push(ta(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var i1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function hd(e){return(typeof e=="string"?e:""+e).replace(i1,`
`).replace(a1,"")}function qa(e,t,n){if(t=hd(t),hd(e)!==t&&n)throw Error(b(425))}function Bo(){}var hu=null,pu=null;function mu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,pd=typeof Promise=="function"?Promise:void 0,s1=typeof queueMicrotask=="function"?queueMicrotask:typeof pd<"u"?function(e){return pd.resolve(null).then(e).catch(l1)}:gu;function l1(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Xi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xi(t)}function wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function md(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ti=Math.random().toString(36).slice(2),It="__reactFiber$"+ti,na="__reactProps$"+ti,Ht="__reactContainer$"+ti,vu="__reactEvents$"+ti,u1="__reactListeners$"+ti,c1="__reactHandles$"+ti;function $n(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=md(e);e!==null;){if(n=e[It])return n;e=md(e)}return t}e=n,n=e.parentNode}return null}function Sa(e){return e=e[It]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Ss(e){return e[na]||null}var yu=[],wr=-1;function Nn(e){return{current:e}}function oe(e){0>wr||(e.current=yu[wr],yu[wr]=null,wr--)}function re(e,t){wr++,yu[wr]=e.current,e.current=t}var Tn={},Le=Nn(Tn),He=Nn(!1),qn=Tn;function Hr(e,t){var n=e.type.contextTypes;if(!n)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function Ho(){oe(He),oe(Le)}function gd(e,t,n){if(Le.current!==Tn)throw Error(b(168));re(Le,t),re(He,n)}function dm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,Gy(e)||"Unknown",i));return fe({},n,r)}function Wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,qn=Le.current,re(Le,e),re(He,He.current),!0}function vd(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=dm(e,t,qn),r.__reactInternalMemoizedMergedChildContext=e,oe(He),oe(Le),re(Le,e)):oe(He),re(He,n)}var Dt=null,Is=!1,gl=!1;function hm(e){Dt===null?Dt=[e]:Dt.push(e)}function f1(e){Is=!0,hm(e)}function On(){if(!gl&&Dt!==null){gl=!0;var e=0,t=Z;try{var n=Dt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,Is=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(e+1)),Fp(wc,On),i}finally{Z=t,gl=!1}}return null}var _r=[],kr=0,Vo=null,Ko=0,et=[],tt=0,Xn=null,Mt=1,Ut="";function Fn(e,t){_r[kr++]=Ko,_r[kr++]=Vo,Vo=e,Ko=t}function pm(e,t,n){et[tt++]=Mt,et[tt++]=Ut,et[tt++]=Xn,Xn=e;var r=Mt;e=Ut;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var a=32-pt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mt=1<<32-pt(t)+i|n<<i|r,Ut=a+e}else Mt=1<<a|n<<i|r,Ut=e}function xc(e){e.return!==null&&(Fn(e,1),pm(e,1,0))}function Pc(e){for(;e===Vo;)Vo=_r[--kr],_r[kr]=null,Ko=_r[--kr],_r[kr]=null;for(;e===Xn;)Xn=et[--tt],et[tt]=null,Ut=et[--tt],et[tt]=null,Mt=et[--tt],et[tt]=null}var Ge=null,Ye=null,le=!1,dt=null;function mm(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Ye=wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xn!==null?{id:Mt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Ye=null,!0):!1;default:return!1}}function wu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _u(e){if(le){var t=Ye;if(t){var n=t;if(!yd(e,t)){if(wu(e))throw Error(b(418));t=wn(n.nextSibling);var r=Ge;t&&yd(e,t)?mm(r,n):(e.flags=e.flags&-4097|2,le=!1,Ge=e)}}else{if(wu(e))throw Error(b(418));e.flags=e.flags&-4097|2,le=!1,Ge=e}}}function wd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Xa(e){if(e!==Ge)return!1;if(!le)return wd(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!mu(e.type,e.memoizedProps)),t&&(t=Ye)){if(wu(e))throw gm(),Error(b(418));for(;t;)mm(e,t),t=wn(t.nextSibling)}if(wd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Ge?wn(e.stateNode.nextSibling):null;return!0}function gm(){for(var e=Ye;e;)e=wn(e.nextSibling)}function Wr(){Ye=Ge=null,le=!1}function Rc(e){dt===null?dt=[e]:dt.push(e)}var d1=Xt.ReactCurrentBatchConfig;function ct(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yo=Nn(null),Go=null,Er=null,Ac=null;function Nc(){Ac=Er=Go=null}function Oc(e){var t=Yo.current;oe(Yo),e._currentValue=t}function ku(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){Go=e,Ac=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Ac!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Go===null)throw Error(b(308));Er=e,Go.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var Bn=null;function Dc(e){Bn===null?Bn=[e]:Bn.push(e)}function vm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ym(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wt(e,n)}return i=r.interleaved,i===null?(t.next=t,Dc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wt(e,n)}function _o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_c(e,n)}}function _d(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qo(e,t,n,r){var i=e.updateQueue;on=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,c=u=l=null,s=a;do{var h=s.lane,v=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=e,w=s;switch(h=t,v=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){f=_.call(v,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(v,f,h):_,h==null)break e;f=fe({},f,h);break e;case 2:on=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=v,l=f):c=c.next=v,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Zn|=o,e.lanes=o,e.memoizedState=f}}function kd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var wm=new vp.Component().refs;function Eu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bs={isMounted:function(e){return(e=e._reactInternals)?sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=En(e),a=jt(r,i);a.payload=t,n!=null&&(a.callback=n),t=_n(e,a,i),t!==null&&(mt(t,e,i,r),_o(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=En(e),a=jt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=_n(e,a,i),t!==null&&(mt(t,e,i,r),_o(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=En(e),i=jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=_n(e,i,r),t!==null&&(mt(t,e,r,n),_o(t,e,r))}};function Ed(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Zi(n,r)||!Zi(i,a):!0}function _m(e,t,n){var r=!1,i=Tn,a=t.contextType;return typeof a=="object"&&a!==null?a=it(a):(i=We(t)?qn:Le.current,r=t.contextTypes,a=(r=r!=null)?Hr(e,i):Tn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Sd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function Su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=wm,Lc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=it(a):(a=We(t)?qn:Le.current,i.context=Hr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Eu(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bs.enqueueReplaceState(i,i.state,null),Qo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===wm&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Ja(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Id(e){var t=e._init;return t(e._payload)}function km(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Sn(p,d),p.index=0,p.sibling=null,p}function a(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,y){return d===null||d.tag!==6?(d=Sl(m,p.mode,y),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,y){var S=m.type;return S===pr?c(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&Id(S)===d.type)?(y=i(d,m.props),y.ref=ki(p,d,m),y.return=p,y):(y=Co(m.type,m.key,m.props,null,p.mode,y),y.ref=ki(p,d,m),y.return=p,y)}function u(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Il(m,p.mode,y),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,y,S){return d===null||d.tag!==7?(d=Gn(m,p.mode,y,S),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Sl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $a:return m=Co(d.type,d.key,d.props,null,p.mode,m),m.ref=ki(p,null,d),m.return=p,m;case hr:return d=Il(d,p.mode,m),d.return=p,d;case an:var y=d._init;return f(p,y(d._payload),m)}if(Ti(d)||gi(d))return d=Gn(d,p.mode,m,null),d.return=p,d;Ja(p,d)}return null}function h(p,d,m,y){var S=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case $a:return m.key===S?l(p,d,m,y):null;case hr:return m.key===S?u(p,d,m,y):null;case an:return S=m._init,h(p,d,S(m._payload),y)}if(Ti(m)||gi(m))return S!==null?null:c(p,d,m,y,null);Ja(p,m)}return null}function v(p,d,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,s(d,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:return p=p.get(y.key===null?m:y.key)||null,l(d,p,y,S);case hr:return p=p.get(y.key===null?m:y.key)||null,u(d,p,y,S);case an:var C=y._init;return v(p,d,m,C(y._payload),S)}if(Ti(y)||gi(y))return p=p.get(m)||null,c(d,p,y,S,null);Ja(d,y)}return null}function _(p,d,m,y){for(var S=null,C=null,T=d,x=d=0,V=null;T!==null&&x<m.length;x++){T.index>x?(V=T,T=null):V=T.sibling;var B=h(p,T,m[x],y);if(B===null){T===null&&(T=V);break}e&&T&&B.alternate===null&&t(p,T),d=a(B,d,x),C===null?S=B:C.sibling=B,C=B,T=V}if(x===m.length)return n(p,T),le&&Fn(p,x),S;if(T===null){for(;x<m.length;x++)T=f(p,m[x],y),T!==null&&(d=a(T,d,x),C===null?S=T:C.sibling=T,C=T);return le&&Fn(p,x),S}for(T=r(p,T);x<m.length;x++)V=v(T,p,x,m[x],y),V!==null&&(e&&V.alternate!==null&&T.delete(V.key===null?x:V.key),d=a(V,d,x),C===null?S=V:C.sibling=V,C=V);return e&&T.forEach(function(be){return t(p,be)}),le&&Fn(p,x),S}function w(p,d,m,y){var S=gi(m);if(typeof S!="function")throw Error(b(150));if(m=S.call(m),m==null)throw Error(b(151));for(var C=S=null,T=d,x=d=0,V=null,B=m.next();T!==null&&!B.done;x++,B=m.next()){T.index>x?(V=T,T=null):V=T.sibling;var be=h(p,T,B.value,y);if(be===null){T===null&&(T=V);break}e&&T&&be.alternate===null&&t(p,T),d=a(be,d,x),C===null?S=be:C.sibling=be,C=be,T=V}if(B.done)return n(p,T),le&&Fn(p,x),S;if(T===null){for(;!B.done;x++,B=m.next())B=f(p,B.value,y),B!==null&&(d=a(B,d,x),C===null?S=B:C.sibling=B,C=B);return le&&Fn(p,x),S}for(T=r(p,T);!B.done;x++,B=m.next())B=v(T,p,x,B.value,y),B!==null&&(e&&B.alternate!==null&&T.delete(B.key===null?x:B.key),d=a(B,d,x),C===null?S=B:C.sibling=B,C=B);return e&&T.forEach(function(yt){return t(p,yt)}),le&&Fn(p,x),S}function g(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===pr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case $a:e:{for(var S=m.key,C=d;C!==null;){if(C.key===S){if(S=m.type,S===pr){if(C.tag===7){n(p,C.sibling),d=i(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&Id(S)===C.type){n(p,C.sibling),d=i(C,m.props),d.ref=ki(p,C,m),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===pr?(d=Gn(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=Co(m.type,m.key,m.props,null,p.mode,y),y.ref=ki(p,d,m),y.return=p,p=y)}return o(p);case hr:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Il(m,p.mode,y),d.return=p,p=d}return o(p);case an:return C=m._init,g(p,d,C(m._payload),y)}if(Ti(m))return _(p,d,m,y);if(gi(m))return w(p,d,m,y);Ja(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Sl(m,p.mode,y),d.return=p,p=d),o(p)):n(p,d)}return g}var Vr=km(!0),Em=km(!1),Ia={},Tt=Nn(Ia),ra=Nn(Ia),ia=Nn(Ia);function Hn(e){if(e===Ia)throw Error(b(174));return e}function Mc(e,t){switch(re(ia,t),re(ra,e),re(Tt,Ia),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tu(t,e)}oe(Tt),re(Tt,t)}function Kr(){oe(Tt),oe(ra),oe(ia)}function Sm(e){Hn(ia.current);var t=Hn(Tt.current),n=tu(t,e.type);t!==n&&(re(ra,e),re(Tt,n))}function Uc(e){ra.current===e&&(oe(Tt),oe(ra))}var ue=Nn(0);function qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function Fc(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var ko=Xt.ReactCurrentDispatcher,yl=Xt.ReactCurrentBatchConfig,Jn=0,ce=null,we=null,Se=null,Xo=!1,Fi=!1,aa=0,h1=0;function Ne(){throw Error(b(321))}function zc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function jc(e,t,n,r,i,a){if(Jn=a,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?v1:y1,e=n(r,i),Fi){a=0;do{if(Fi=!1,aa=0,25<=a)throw Error(b(301));a+=1,Se=we=null,t.updateQueue=null,ko.current=w1,e=n(r,i)}while(Fi)}if(ko.current=Jo,t=we!==null&&we.next!==null,Jn=0,Se=we=ce=null,Xo=!1,t)throw Error(b(300));return e}function $c(){var e=aa!==0;return aa=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ce.memoizedState=Se=e:Se=Se.next=e,Se}function at(){if(we===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Se===null?ce.memoizedState:Se.next;if(t!==null)Se=t,we=e;else{if(e===null)throw Error(b(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Se===null?ce.memoizedState=Se=e:Se=Se.next=e}return Se}function oa(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=at(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=we,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((Jn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,ce.lanes|=c,Zn|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,gt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ce.lanes|=a,Zn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _l(e){var t=at(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);gt(a,t.memoizedState)||(Be=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Im(){}function bm(e,t){var n=ce,r=at(),i=t(),a=!gt(r.memoizedState,i);if(a&&(r.memoizedState=i,Be=!0),r=r.queue,Bc(xm.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,sa(9,Tm.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(b(349));Jn&30||Cm(n,t,i)}return i}function Cm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tm(e,t,n,r){t.value=n,t.getSnapshot=r,Pm(t)&&Rm(e)}function xm(e,t,n){return n(function(){Pm(t)&&Rm(e)})}function Pm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Rm(e){var t=Wt(e,1);t!==null&&mt(t,e,1,-1)}function bd(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t.queue=e,e=e.dispatch=g1.bind(null,ce,e),[t.memoizedState,e]}function sa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Am(){return at().memoizedState}function Eo(e,t,n,r){var i=Et();ce.flags|=e,i.memoizedState=sa(1|t,n,void 0,r===void 0?null:r)}function Cs(e,t,n,r){var i=at();r=r===void 0?null:r;var a=void 0;if(we!==null){var o=we.memoizedState;if(a=o.destroy,r!==null&&zc(r,o.deps)){i.memoizedState=sa(t,n,a,r);return}}ce.flags|=e,i.memoizedState=sa(1|t,n,a,r)}function Cd(e,t){return Eo(8390656,8,e,t)}function Bc(e,t){return Cs(2048,8,e,t)}function Nm(e,t){return Cs(4,2,e,t)}function Om(e,t){return Cs(4,4,e,t)}function Dm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lm(e,t,n){return n=n!=null?n.concat([e]):null,Cs(4,4,Dm.bind(null,t,e),n)}function Hc(){}function Mm(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Um(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fm(e,t,n){return Jn&21?(gt(n,t)||(n=$p(),ce.lanes|=n,Zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function p1(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{Z=n,yl.transition=r}}function zm(){return at().memoizedState}function m1(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jm(e))$m(t,n);else if(n=vm(e,t,n,r),n!==null){var i=Fe();mt(n,e,r,i),Bm(n,t,r)}}function g1(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jm(e))$m(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,gt(s,o)){var l=t.interleaved;l===null?(i.next=i,Dc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=vm(e,t,i,r),n!==null&&(i=Fe(),mt(n,e,r,i),Bm(n,t,r))}}function jm(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function $m(e,t){Fi=Xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_c(e,n)}}var Jo={readContext:it,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},v1={readContext:it,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Cd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4194308,4,Dm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Eo(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=m1.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:bd,useDebugValue:Hc,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=bd(!1),t=e[0];return e=p1.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=Et();if(le){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),Ie===null)throw Error(b(349));Jn&30||Cm(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Cd(xm.bind(null,r,a,e),[e]),r.flags|=2048,sa(9,Tm.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Et(),t=Ie.identifierPrefix;if(le){var n=Ut,r=Mt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=aa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=h1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},y1={readContext:it,useCallback:Mm,useContext:it,useEffect:Bc,useImperativeHandle:Lm,useInsertionEffect:Nm,useLayoutEffect:Om,useMemo:Um,useReducer:wl,useRef:Am,useState:function(){return wl(oa)},useDebugValue:Hc,useDeferredValue:function(e){var t=at();return Fm(t,we.memoizedState,e)},useTransition:function(){var e=wl(oa)[0],t=at().memoizedState;return[e,t]},useMutableSource:Im,useSyncExternalStore:bm,useId:zm,unstable_isNewReconciler:!1},w1={readContext:it,useCallback:Mm,useContext:it,useEffect:Bc,useImperativeHandle:Lm,useInsertionEffect:Nm,useLayoutEffect:Om,useMemo:Um,useReducer:_l,useRef:Am,useState:function(){return _l(oa)},useDebugValue:Hc,useDeferredValue:function(e){var t=at();return we===null?t.memoizedState=e:Fm(t,we.memoizedState,e)},useTransition:function(){var e=_l(oa)[0],t=at().memoizedState;return[e,t]},useMutableSource:Im,useSyncExternalStore:bm,useId:zm,unstable_isNewReconciler:!1};function Yr(e,t){try{var n="",r=t;do n+=Yy(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Iu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _1=typeof WeakMap=="function"?WeakMap:Map;function Hm(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){es||(es=!0,Du=r),Iu(e,t)},n}function Wm(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Iu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Iu(e,t),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Td(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=D1.bind(null,e,t,n),t.then(e,e))}function xd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,_n(n,t,1))),n.lanes|=1),e)}var k1=Xt.ReactCurrentOwner,Be=!1;function Ue(e,t,n,r){t.child=e===null?Em(t,null,n,r):Vr(t,e.child,n,r)}function Rd(e,t,n,r,i){n=n.render;var a=t.ref;return Lr(t,i),r=jc(e,t,n,r,a,i),n=$c(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(le&&n&&xc(t),t.flags|=1,Ue(e,t,r,i),t.child)}function Ad(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Xc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Vm(e,t,a,r,i)):(e=Co(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Zi,n(o,r)&&e.ref===t.ref)return Vt(e,t,i)}return t.flags|=1,e=Sn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Vm(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Zi(a,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,Vt(e,t,i)}return bu(e,t,n,r,i)}function Km(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Ir,Ke),Ke|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Ir,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,re(Ir,Ke),Ke|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,re(Ir,Ke),Ke|=r;return Ue(e,t,i,n),t.child}function Ym(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bu(e,t,n,r,i){var a=We(n)?qn:Le.current;return a=Hr(t,a),Lr(t,i),n=jc(e,t,n,r,a,i),r=$c(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(le&&r&&xc(t),t.flags|=1,Ue(e,t,n,i),t.child)}function Nd(e,t,n,r,i){if(We(n)){var a=!0;Wo(t)}else a=!1;if(Lr(t,i),t.stateNode===null)So(e,t),_m(t,n,r),Su(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=We(n)?qn:Le.current,u=Hr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Sd(t,o,r,u),on=!1;var h=t.memoizedState;o.state=h,Qo(t,r,o,i),l=t.memoizedState,s!==r||h!==l||He.current||on?(typeof c=="function"&&(Eu(t,n,c,r),l=t.memoizedState),(s=on||Ed(t,n,s,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ym(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ct(t.type,s),o.props=u,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=We(n)?qn:Le.current,l=Hr(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Sd(t,o,r,l),on=!1,h=t.memoizedState,o.state=h,Qo(t,r,o,i);var _=t.memoizedState;s!==f||h!==_||He.current||on?(typeof v=="function"&&(Eu(t,n,v,r),_=t.memoizedState),(u=on||Ed(t,n,u,r,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Cu(e,t,n,r,a,i)}function Cu(e,t,n,r,i,a){Ym(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&vd(t,n,!1),Vt(e,t,a);r=t.stateNode,k1.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Vr(t,e.child,null,a),t.child=Vr(t,null,s,a)):Ue(e,t,s,a),t.memoizedState=r.state,i&&vd(t,n,!0),t.child}function Gm(e){var t=e.stateNode;t.pendingContext?gd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gd(e,t.context,!1),Mc(e,t.containerInfo)}function Od(e,t,n,r,i){return Wr(),Rc(i),t.flags|=256,Ue(e,t,n,r),t.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qm(e,t,n){var r=t.pendingProps,i=ue.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(ue,i&1),e===null)return _u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ps(o,r,0,null),e=Gn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=xu(n),t.memoizedState=Tu,e):Wc(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return E1(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Sn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Sn(s,a):(a=Gn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?xu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Tu,r}return a=e.child,e=a.sibling,r=Sn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wc(e,t){return t=Ps({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Za(e,t,n,r){return r!==null&&Rc(r),Vr(t,e.child,null,n),e=Wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E1(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=kl(Error(b(422))),Za(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Ps({mode:"visible",children:r.children},i,0,null),a=Gn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Vr(t,e.child,null,o),t.child.memoizedState=xu(o),t.memoizedState=Tu,a);if(!(t.mode&1))return Za(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(b(419)),r=kl(a,r,void 0),Za(e,t,o,r)}if(s=(o&e.childLanes)!==0,Be||s){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Wt(e,i),mt(r,e,i,-1))}return qc(),r=kl(Error(b(421))),Za(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=L1.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ye=wn(i.nextSibling),Ge=t,le=!0,dt=null,e!==null&&(et[tt++]=Mt,et[tt++]=Ut,et[tt++]=Xn,Mt=e.id,Ut=e.overflow,Xn=t),t=Wc(t,r.children),t.flags|=4096,t)}function Dd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ku(e.return,t,n)}function El(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function qm(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ue(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dd(e,n,t);else if(e.tag===19)Dd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),El(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}El(t,!0,n,null,a);break;case"together":El(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function So(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function S1(e,t,n){switch(t.tag){case 3:Gm(t),Wr();break;case 5:Sm(t);break;case 1:We(t.type)&&Wo(t);break;case 4:Mc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Yo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?Qm(e,t,n):(re(ue,ue.current&1),e=Vt(e,t,n),e!==null?e.sibling:null);re(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Km(e,t,n)}return Vt(e,t,n)}var Xm,Pu,Jm,Zm;Xm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};Jm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hn(Tt.current);var a=null;switch(n){case"input":i=Xl(e,i),r=Xl(e,r),a=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),a=[];break;case"textarea":i=eu(e,i),r=eu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}nu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ki.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ki.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Zm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ei(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function I1(e,t,n){var r=t.pendingProps;switch(Pc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return We(t.type)&&Ho(),Oe(t),null;case 3:return r=t.stateNode,Kr(),oe(He),oe(Le),Fc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Uu(dt),dt=null))),Pu(e,t),Oe(t),null;case 5:Uc(t);var i=Hn(ia.current);if(n=t.type,e!==null&&t.stateNode!=null)Jm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return Oe(t),null}if(e=Hn(Tt.current),Xa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[It]=t,r[na]=a,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Pi.length;i++)ie(Pi[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Hf(r,a),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ie("invalid",r);break;case"textarea":Vf(r,a),ie("invalid",r)}nu(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&qa(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&qa(r.textContent,s,e),i=["children",""+s]):Ki.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Ba(r),Wf(r,a,!0);break;case"textarea":Ba(r),Kf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Bo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[It]=t,e[na]=r,Xm(e,t,!1,!1),t.stateNode=e;e:{switch(o=ru(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pi.length;i++)ie(Pi[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":Hf(e,r),i=Xl(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Vf(e,r),i=eu(e,r),ie("invalid",e);break;default:i=r}nu(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Pp(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tp(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yi(e,l):typeof l=="number"&&Yi(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ki.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ie("scroll",e):l!=null&&pc(e,a,l,o))}switch(n){case"input":Ba(e),Wf(e,r,!1);break;case"textarea":Ba(e),Kf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Ar(e,!!r.multiple,a,!1):r.defaultValue!=null&&Ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Zm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Hn(ia.current),Hn(Tt.current),Xa(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(a=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:qa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qa(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Oe(t),null;case 13:if(oe(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Ye!==null&&t.mode&1&&!(t.flags&128))gm(),Wr(),t.flags|=98560,a=!1;else if(a=Xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(b(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));a[It]=t}else Wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),a=!1}else dt!==null&&(Uu(dt),dt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?_e===0&&(_e=3):qc())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Kr(),Pu(e,t),e===null&&ea(t.stateNode.containerInfo),Oe(t),null;case 10:return Oc(t.type._context),Oe(t),null;case 17:return We(t.type)&&Ho(),Oe(t),null;case 19:if(oe(ue),a=t.memoizedState,a===null)return Oe(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Ei(a,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=qo(e),o!==null){for(t.flags|=128,Ei(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(ue,ue.current&1|2),t.child}e=e.sibling}a.tail!==null&&me()>Gr&&(t.flags|=128,r=!0,Ei(a,!1),t.lanes=4194304)}else{if(!r)if(e=qo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ei(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!le)return Oe(t),null}else 2*me()-a.renderingStartTime>Gr&&n!==1073741824&&(t.flags|=128,r=!0,Ei(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=me(),t.sibling=null,n=ue.current,re(ue,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Qc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function b1(e,t){switch(Pc(t),t.tag){case 1:return We(t.type)&&Ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),oe(He),oe(Le),Fc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Uc(t),null;case 13:if(oe(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));Wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ue),null;case 4:return Kr(),null;case 10:return Oc(t.type._context),null;case 22:case 23:return Qc(),null;case 24:return null;default:return null}}var eo=!1,De=!1,C1=typeof WeakSet=="function"?WeakSet:Set,O=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Ru(e,t,n){try{n()}catch(r){de(e,t,r)}}var Ld=!1;function T1(e,t){if(hu=zo,e=rm(),Tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++u===i&&(s=o),h===a&&++c===r&&(l=o),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:e,selectionRange:n},zo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,g=_.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:ct(t.type,w),g);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(y){de(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return _=Ld,Ld=!1,_}function zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ru(t,n,a)}i=i.next}while(i!==r)}}function Ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Au(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eg(e){var t=e.alternate;t!==null&&(e.alternate=null,eg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[na],delete t[vu],delete t[u1],delete t[c1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tg(e){return e.tag===5||e.tag===3||e.tag===4}function Md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(Nu(e,t,n),e=e.sibling;e!==null;)Nu(e,t,n),e=e.sibling}function Ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}var Te=null,ft=!1;function tn(e,t,n){for(n=n.child;n!==null;)ng(e,t,n),n=n.sibling}function ng(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(ws,n)}catch{}switch(n.tag){case 5:De||Sr(n,t);case 6:var r=Te,i=ft;Te=null,tn(e,t,n),Te=r,ft=i,Te!==null&&(ft?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(ft?(e=Te,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),Xi(e)):ml(Te,n.stateNode));break;case 4:r=Te,i=ft,Te=n.stateNode.containerInfo,ft=!0,tn(e,t,n),Te=r,ft=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ru(n,t,o),i=i.next}while(i!==r)}tn(e,t,n);break;case 1:if(!De&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,tn(e,t,n),De=r):tn(e,t,n);break;default:tn(e,t,n)}}function Ud(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new C1),t.forEach(function(r){var i=M1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Te=s.stateNode,ft=!1;break e;case 3:Te=s.stateNode.containerInfo,ft=!0;break e;case 4:Te=s.stateNode.containerInfo,ft=!0;break e}s=s.return}if(Te===null)throw Error(b(160));ng(a,o,i),Te=null,ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){de(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rg(t,e),t=t.sibling}function rg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),kt(e),r&4){try{zi(3,e,e.return),Ts(3,e)}catch(w){de(e,e.return,w)}try{zi(5,e,e.return)}catch(w){de(e,e.return,w)}}break;case 1:ut(t,e),kt(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(ut(t,e),kt(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var i=e.stateNode;try{Yi(i,"")}catch(w){de(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Ip(i,a),ru(s,o);var u=ru(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Pp(i,f):c==="dangerouslySetInnerHTML"?Tp(i,f):c==="children"?Yi(i,f):pc(i,c,f,u)}switch(s){case"input":Jl(i,a);break;case"textarea":bp(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Ar(i,!!a.multiple,v,!1):h!==!!a.multiple&&(a.defaultValue!=null?Ar(i,!!a.multiple,a.defaultValue,!0):Ar(i,!!a.multiple,a.multiple?[]:"",!1))}i[na]=a}catch(w){de(e,e.return,w)}}break;case 6:if(ut(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){de(e,e.return,w)}}break;case 3:if(ut(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xi(t.containerInfo)}catch(w){de(e,e.return,w)}break;case 4:ut(t,e),kt(e);break;case 13:ut(t,e),kt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Yc=me())),r&4&&Ud(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||c,ut(t,e),De=u):ut(t,e),kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(O=e,c=e.child;c!==null;){for(f=O=c;O!==null;){switch(h=O,v=h.child,h.tag){case 0:case 11:case 14:case 15:zi(4,h,h.return);break;case 1:Sr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(w){de(r,n,w)}}break;case 5:Sr(h,h.return);break;case 22:if(h.memoizedState!==null){zd(f);continue}}v!==null?(v.return=h,O=v):zd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=xp("display",o))}catch(w){de(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){de(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ut(t,e),kt(e),r&4&&Ud(e);break;case 21:break;default:ut(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tg(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yi(i,""),r.flags&=-33);var a=Md(e);Ou(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Md(e);Nu(e,s,o);break;default:throw Error(b(161))}}catch(l){de(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x1(e,t,n){O=e,ig(e)}function ig(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||eo;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||De;s=eo;var u=De;if(eo=o,(De=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?jd(i):l!==null?(l.return=o,O=l):jd(i);for(;a!==null;)O=a,ig(a),a=a.sibling;O=i,eo=s,De=u}Fd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,O=a):Fd(e)}}function Fd(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Ts(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&kd(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kd(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Xi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}De||t.flags&512&&Au(t)}catch(h){de(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function zd(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function jd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ts(4,t)}catch(l){de(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){de(t,i,l)}}var a=t.return;try{Au(t)}catch(l){de(t,a,l)}break;case 5:var o=t.return;try{Au(t)}catch(l){de(t,o,l)}}}catch(l){de(t,t.return,l)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var P1=Math.ceil,Zo=Xt.ReactCurrentDispatcher,Vc=Xt.ReactCurrentOwner,rt=Xt.ReactCurrentBatchConfig,X=0,Ie=null,ve=null,xe=0,Ke=0,Ir=Nn(0),_e=0,la=null,Zn=0,xs=0,Kc=0,ji=null,$e=null,Yc=0,Gr=1/0,Nt=null,es=!1,Du=null,kn=null,to=!1,pn=null,ts=0,$i=0,Lu=null,Io=-1,bo=0;function Fe(){return X&6?me():Io!==-1?Io:Io=me()}function En(e){return e.mode&1?X&2&&xe!==0?xe&-xe:d1.transition!==null?(bo===0&&(bo=$p()),bo):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Gp(e.type)),e):1}function mt(e,t,n,r){if(50<$i)throw $i=0,Lu=null,Error(b(185));ka(e,n,r),(!(X&2)||e!==Ie)&&(e===Ie&&(!(X&2)&&(xs|=n),_e===4&&ln(e,xe)),Ve(e,r),n===1&&X===0&&!(t.mode&1)&&(Gr=me()+500,Is&&On()))}function Ve(e,t){var n=e.callbackNode;d0(e,t);var r=Fo(e,e===Ie?xe:0);if(r===0)n!==null&&Qf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qf(n),t===1)e.tag===0?f1($d.bind(null,e)):hm($d.bind(null,e)),s1(function(){!(X&6)&&On()}),n=null;else{switch(Bp(r)){case 1:n=wc;break;case 4:n=zp;break;case 16:n=Uo;break;case 536870912:n=jp;break;default:n=Uo}n=dg(n,ag.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ag(e,t){if(Io=-1,bo=0,X&6)throw Error(b(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=Fo(e,e===Ie?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ns(e,r);else{t=r;var i=X;X|=2;var a=sg();(Ie!==e||xe!==t)&&(Nt=null,Gr=me()+500,Yn(e,t));do try{N1();break}catch(s){og(e,s)}while(1);Nc(),Zo.current=a,X=i,ve!==null?t=0:(Ie=null,xe=0,t=_e)}if(t!==0){if(t===2&&(i=lu(e),i!==0&&(r=i,t=Mu(e,i))),t===1)throw n=la,Yn(e,0),ln(e,r),Ve(e,me()),n;if(t===6)ln(e,r);else{if(i=e.current.alternate,!(r&30)&&!R1(i)&&(t=ns(e,r),t===2&&(a=lu(e),a!==0&&(r=a,t=Mu(e,a))),t===1))throw n=la,Yn(e,0),ln(e,r),Ve(e,me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:zn(e,$e,Nt);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Yc+500-me(),10<t)){if(Fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gu(zn.bind(null,e,$e,Nt),t);break}zn(e,$e,Nt);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-pt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*P1(r/1960))-r,10<r){e.timeoutHandle=gu(zn.bind(null,e,$e,Nt),r);break}zn(e,$e,Nt);break;case 5:zn(e,$e,Nt);break;default:throw Error(b(329))}}}return Ve(e,me()),e.callbackNode===n?ag.bind(null,e):null}function Mu(e,t){var n=ji;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=ns(e,t),e!==2&&(t=$e,$e=n,t!==null&&Uu(t)),e}function Uu(e){$e===null?$e=e:$e.push.apply($e,e)}function R1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!gt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Kc,t&=~xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function $d(e){if(X&6)throw Error(b(327));Mr();var t=Fo(e,0);if(!(t&1))return Ve(e,me()),null;var n=ns(e,t);if(e.tag!==0&&n===2){var r=lu(e);r!==0&&(t=r,n=Mu(e,r))}if(n===1)throw n=la,Yn(e,0),ln(e,t),Ve(e,me()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,$e,Nt),Ve(e,me()),null}function Gc(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Gr=me()+500,Is&&On())}}function er(e){pn!==null&&pn.tag===0&&!(X&6)&&Mr();var t=X;X|=1;var n=rt.transition,r=Z;try{if(rt.transition=null,Z=1,e)return e()}finally{Z=r,rt.transition=n,X=t,!(X&6)&&On()}}function Qc(){Ke=Ir.current,oe(Ir)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,o1(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:Kr(),oe(He),oe(Le),Fc();break;case 5:Uc(r);break;case 4:Kr();break;case 13:oe(ue);break;case 19:oe(ue);break;case 10:Oc(r.type._context);break;case 22:case 23:Qc()}n=n.return}if(Ie=e,ve=e=Sn(e.current,null),xe=Ke=t,_e=0,la=null,Kc=xs=Zn=0,$e=ji=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Bn=null}return e}function og(e,t){do{var n=ve;try{if(Nc(),ko.current=Jo,Xo){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xo=!1}if(Jn=0,Se=we=ce=null,Fi=!1,aa=0,Vc.current=null,n===null||n.return===null){_e=1,la=t,ve=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=xe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=xd(o);if(v!==null){v.flags&=-257,Pd(v,o,s,a,t),v.mode&1&&Td(a,u,t),t=v,l=u;var _=t.updateQueue;if(_===null){var w=new Set;w.add(l),t.updateQueue=w}else _.add(l);break e}else{if(!(t&1)){Td(a,u,t),qc();break e}l=Error(b(426))}}else if(le&&s.mode&1){var g=xd(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Pd(g,o,s,a,t),Rc(Yr(l,s));break e}}a=l=Yr(l,s),_e!==4&&(_e=2),ji===null?ji=[a]:ji.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=Hm(a,l,t);_d(a,p);break e;case 1:s=l;var d=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(kn===null||!kn.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=Wm(a,s,t);_d(a,y);break e}}a=a.return}while(a!==null)}ug(n)}catch(S){t=S,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function sg(){var e=Zo.current;return Zo.current=Jo,e===null?Jo:e}function qc(){(_e===0||_e===3||_e===2)&&(_e=4),Ie===null||!(Zn&268435455)&&!(xs&268435455)||ln(Ie,xe)}function ns(e,t){var n=X;X|=2;var r=sg();(Ie!==e||xe!==t)&&(Nt=null,Yn(e,t));do try{A1();break}catch(i){og(e,i)}while(1);if(Nc(),X=n,Zo.current=r,ve!==null)throw Error(b(261));return Ie=null,xe=0,_e}function A1(){for(;ve!==null;)lg(ve)}function N1(){for(;ve!==null&&!r0();)lg(ve)}function lg(e){var t=fg(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?ug(e):ve=t,Vc.current=null}function ug(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=b1(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,ve=null;return}}else if(n=I1(n,t,Ke),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);_e===0&&(_e=5)}function zn(e,t,n){var r=Z,i=rt.transition;try{rt.transition=null,Z=1,O1(e,t,n,r)}finally{rt.transition=i,Z=r}return null}function O1(e,t,n,r){do Mr();while(pn!==null);if(X&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(h0(e,a),e===Ie&&(ve=Ie=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,dg(Uo,function(){return Mr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=rt.transition,rt.transition=null;var o=Z;Z=1;var s=X;X|=4,Vc.current=null,T1(e,n),rg(n,e),Z0(pu),zo=!!hu,pu=hu=null,e.current=n,x1(n),i0(),X=s,Z=o,rt.transition=a}else e.current=n;if(to&&(to=!1,pn=e,ts=i),a=e.pendingLanes,a===0&&(kn=null),s0(n.stateNode),Ve(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(es)throw es=!1,e=Du,Du=null,e;return ts&1&&e.tag!==0&&Mr(),a=e.pendingLanes,a&1?e===Lu?$i++:($i=0,Lu=e):$i=0,On(),null}function Mr(){if(pn!==null){var e=Bp(ts),t=rt.transition,n=Z;try{if(rt.transition=null,Z=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,ts=0,X&6)throw Error(b(331));var i=X;for(X|=4,O=e.current;O!==null;){var a=O,o=a.child;if(O.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:zi(8,c,a)}var f=c.child;if(f!==null)f.return=c,O=f;else for(;O!==null;){c=O;var h=c.sibling,v=c.return;if(eg(c),c===u){O=null;break}if(h!==null){h.return=v,O=h;break}O=v}}}var _=a.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var g=w.sibling;w.sibling=null,w=g}while(w!==null)}}O=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,O=o;else e:for(;O!==null;){if(a=O,a.flags&2048)switch(a.tag){case 0:case 11:case 15:zi(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,O=p;break e}O=a.return}}var d=e.current;for(O=d;O!==null;){o=O;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,O=m;else e:for(o=d;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ts(9,s)}}catch(S){de(s,s.return,S)}if(s===o){O=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,O=y;break e}O=s.return}}if(X=i,On(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(ws,e)}catch{}r=!0}return r}finally{Z=n,rt.transition=t}}return!1}function Bd(e,t,n){t=Yr(n,t),t=Hm(e,t,1),e=_n(e,t,1),t=Fe(),e!==null&&(ka(e,1,t),Ve(e,t))}function de(e,t,n){if(e.tag===3)Bd(e,e,n);else for(;t!==null;){if(t.tag===3){Bd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=Yr(n,e),e=Wm(t,e,1),t=_n(t,e,1),e=Fe(),t!==null&&(ka(t,1,e),Ve(t,e));break}}t=t.return}}function D1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(xe&n)===n&&(_e===4||_e===3&&(xe&130023424)===xe&&500>me()-Yc?Yn(e,0):Kc|=n),Ve(e,t)}function cg(e,t){t===0&&(e.mode&1?(t=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):t=1);var n=Fe();e=Wt(e,t),e!==null&&(ka(e,t,n),Ve(e,n))}function L1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cg(e,n)}function M1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),cg(e,n)}var fg;fg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,S1(e,t,n);Be=!!(e.flags&131072)}else Be=!1,le&&t.flags&1048576&&pm(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;So(e,t),e=t.pendingProps;var i=Hr(t,Le.current);Lr(t,n),i=jc(null,t,r,e,i,n);var a=$c();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(a=!0,Wo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lc(t),i.updater=bs,t.stateNode=i,i._reactInternals=t,Su(t,r,e,n),t=Cu(null,t,r,!0,a,n)):(t.tag=0,le&&a&&xc(t),Ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(So(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=F1(r),e=ct(r,e),i){case 0:t=bu(null,t,r,e,n);break e;case 1:t=Nd(null,t,r,e,n);break e;case 11:t=Rd(null,t,r,e,n);break e;case 14:t=Ad(null,t,r,ct(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),bu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Nd(e,t,r,i,n);case 3:e:{if(Gm(t),e===null)throw Error(b(387));r=t.pendingProps,a=t.memoizedState,i=a.element,ym(e,t),Qo(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Yr(Error(b(423)),t),t=Od(e,t,r,n,i);break e}else if(r!==i){i=Yr(Error(b(424)),t),t=Od(e,t,r,n,i);break e}else for(Ye=wn(t.stateNode.containerInfo.firstChild),Ge=t,le=!0,dt=null,n=Em(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wr(),r===i){t=Vt(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Sm(t),e===null&&_u(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,mu(r,i)?o=null:a!==null&&mu(r,a)&&(t.flags|=32),Ym(e,t),Ue(e,t,o,n),t.child;case 6:return e===null&&_u(t),null;case 13:return Qm(e,t,n);case 4:return Mc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vr(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Rd(e,t,r,i,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,re(Yo,r._currentValue),r._currentValue=o,a!==null)if(gt(a.value,o)){if(a.children===i.children&&!He.current){t=Vt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=jt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ku(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(b(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ku(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Lr(t,n),i=it(i),r=r(i),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),Ad(e,t,r,i,n);case 15:return Vm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),So(e,t),t.tag=1,We(r)?(e=!0,Wo(t)):e=!1,Lr(t,n),_m(t,r,i),Su(t,r,i,n),Cu(null,t,r,!0,e,n);case 19:return qm(e,t,n);case 22:return Km(e,t,n)}throw Error(b(156,t.tag))};function dg(e,t){return Fp(e,t)}function U1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new U1(e,t,n,r)}function Xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F1(e){if(typeof e=="function")return Xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gc)return 11;if(e===vc)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Co(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Xc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case pr:return Gn(n.children,i,a,t);case mc:o=8,i|=8;break;case Yl:return e=nt(12,n,t,i|2),e.elementType=Yl,e.lanes=a,e;case Gl:return e=nt(13,n,t,i),e.elementType=Gl,e.lanes=a,e;case Ql:return e=nt(19,n,t,i),e.elementType=Ql,e.lanes=a,e;case kp:return Ps(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wp:o=10;break e;case _p:o=9;break e;case gc:o=11;break e;case vc:o=14;break e;case an:o=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=nt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Gn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function Ps(e,t,n,r){return e=nt(22,e,r,t),e.elementType=kp,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function Il(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function z1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jc(e,t,n,r,i,a,o,s,l){return e=new z1(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=nt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(a),e}function j1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hg(e){if(!e)return Tn;e=e._reactInternals;e:{if(sr(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(We(n))return dm(e,n,t)}return t}function pg(e,t,n,r,i,a,o,s,l){return e=Jc(n,r,!0,e,i,a,o,s,l),e.context=hg(null),n=e.current,r=Fe(),i=En(n),a=jt(r,i),a.callback=t??null,_n(n,a,i),e.current.lanes=i,ka(e,i,r),Ve(e,r),e}function Rs(e,t,n,r){var i=t.current,a=Fe(),o=En(i);return n=hg(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_n(i,t,o),e!==null&&(mt(e,i,o,a),_o(e,i,o)),o}function rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zc(e,t){Hd(e,t),(e=e.alternate)&&Hd(e,t)}function $1(){return null}var mg=typeof reportError=="function"?reportError:function(e){console.error(e)};function ef(e){this._internalRoot=e}As.prototype.render=ef.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Rs(e,t,null,null)};As.prototype.unmount=ef.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){Rs(null,e,null,null)}),t[Ht]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&Yp(e)}};function tf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wd(){}function B1(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=rs(o);a.call(u)}}var o=pg(t,r,e,0,null,!1,!1,"",Wd);return e._reactRootContainer=o,e[Ht]=o.current,ea(e.nodeType===8?e.parentNode:e),er(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=rs(l);s.call(u)}}var l=Jc(e,0,!1,null,null,!1,!1,"",Wd);return e._reactRootContainer=l,e[Ht]=l.current,ea(e.nodeType===8?e.parentNode:e),er(function(){Rs(t,l,n,r)}),l}function Os(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=rs(o);s.call(l)}}Rs(t,o,e,i)}else o=B1(n,t,e,i,r);return rs(o)}Hp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xi(t.pendingLanes);n!==0&&(_c(t,n|1),Ve(t,me()),!(X&6)&&(Gr=me()+500,On()))}break;case 13:er(function(){var r=Wt(e,1);if(r!==null){var i=Fe();mt(r,e,1,i)}}),Zc(e,1)}};kc=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=Fe();mt(t,e,134217728,n)}Zc(e,134217728)}};Wp=function(e){if(e.tag===13){var t=En(e),n=Wt(e,t);if(n!==null){var r=Fe();mt(n,e,t,r)}Zc(e,t)}};Vp=function(){return Z};Kp=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};au=function(e,t,n){switch(t){case"input":if(Jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ss(r);if(!i)throw Error(b(90));Sp(r),Jl(r,i)}}}break;case"textarea":bp(e,n);break;case"select":t=n.value,t!=null&&Ar(e,!!n.multiple,t,!1)}};Np=Gc;Op=er;var H1={usingClientEntryPoint:!1,Events:[Sa,yr,Ss,Rp,Ap,Gc]},Si={findFiberByHostInstance:$n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},W1={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mp(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||$1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{ws=no.inject(W1),Ct=no}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H1;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tf(t))throw Error(b(200));return j1(e,t,null,n)};qe.createRoot=function(e,t){if(!tf(e))throw Error(b(299));var n=!1,r="",i=mg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Jc(e,1,!1,null,null,n,!1,r,i),e[Ht]=t.current,ea(e.nodeType===8?e.parentNode:e),new ef(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Mp(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return er(e)};qe.hydrate=function(e,t,n){if(!Ns(t))throw Error(b(200));return Os(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!tf(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=mg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=pg(t,null,e,1,n??null,i,!1,a,o),e[Ht]=t.current,ea(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new As(t)};qe.render=function(e,t,n){if(!Ns(t))throw Error(b(200));return Os(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!Ns(e))throw Error(b(40));return e._reactRootContainer?(er(function(){Os(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};qe.unstable_batchedUpdates=Gc;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ns(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Os(e,t,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=qe})($y);var Vd=Wl;Hl.createRoot=Vd.createRoot,Hl.hydrateRoot=Vd.hydrateRoot;const V1="/assets/Logo-9c712c6f.svg";/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}var ge;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ge||(ge={}));const Kd="popstate";function K1(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return ua("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Kt(i)}return G1(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Y1(){return Math.random().toString(36).substr(2,8)}function Yd(e,t){return{usr:e.state,key:e.key,idx:t}}function ua(e,t,n,r){return n===void 0&&(n=null),Q({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jt(t):t,{state:n,key:t&&t.key||r||Y1()})}function Kt(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function G1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=ge.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Q({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){s=ge.Pop;let g=c(),p=g==null?null:g-u;u=g,l&&l({action:s,location:w.location,delta:p})}function h(g,p){s=ge.Push;let d=ua(w.location,g,p);n&&n(d,g),u=c()+1;let m=Yd(d,u),y=w.createHref(d);try{o.pushState(m,"",y)}catch{i.location.assign(y)}a&&l&&l({action:s,location:w.location,delta:1})}function v(g,p){s=ge.Replace;let d=ua(w.location,g,p);n&&n(d,g),u=c();let m=Yd(d,u),y=w.createHref(d);o.replaceState(m,"",y),a&&l&&l({action:s,location:w.location,delta:0})}function _(g){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof g=="string"?g:Kt(g);return K(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return s},get location(){return e(i,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Kd,f),l=g,()=>{i.removeEventListener(Kd,f),l=null}},createHref(g){return t(i,g)},createURL:_,encodeLocation(g){let p=_(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(g){return o.go(g)}};return w}var ye;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ye||(ye={}));const Q1=new Set(["lazy","caseSensitive","path","id","index","children"]);function q1(e){return e.index===!0}function gg(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let o=[...n,a],s=typeof i.id=="string"?i.id:o.join("-");if(K(i.index!==!0||!i.children,"Cannot specify children on an index route"),K(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),q1(i)){let l=Q({},i,{hasErrorBoundary:t(i),id:s});return r[s]=l,l}else{let l=Q({},i,{id:s,hasErrorBoundary:t(i),children:void 0});return r[s]=l,i.children&&(l.children=gg(i.children,t,o,r)),l}})}function br(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Jt(t):t,i=ba(r.pathname||"/",n);if(i==null)return null;let a=vg(e);X1(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=ow(a[s],uw(i));return o}function vg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(K(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=$t([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(K(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vg(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:iw(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of yg(a.path))i(a,o,l)}),t}function yg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=yg(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function X1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:aw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J1=/^:\w+$/,Z1=3,ew=2,tw=1,nw=10,rw=-2,Gd=e=>e==="*";function iw(e,t){let n=e.split("/"),r=n.length;return n.some(Gd)&&(r+=rw),t&&(r+=ew),n.filter(i=>!Gd(i)).reduce((i,a)=>i+(J1.test(a)?Z1:a===""?tw:nw),r)}function aw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ow(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=sw({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;a.push({params:r,pathname:$t([i,c.pathname]),pathnameBase:hw($t([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=$t([i,c.pathnameBase]))}return a}function sw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=s[f]||"";o=a.slice(0,a.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=cw(s[f]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function lw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function uw(e){try{return decodeURI(e)}catch(t){return Qr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cw(e,t){try{return decodeURIComponent(e)}catch(n){return Qr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ba(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jt(e):e;return{pathname:n?n.startsWith("/")?n:dw(n,t):t,search:pw(r),hash:mw(i)}}function dw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ds(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function nf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jt(e):(i=Q({},e),K(!i.pathname||!i.pathname.includes("?"),bl("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),bl("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),bl("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let f=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}s=f>=0?t[f]:"/"}let l=fw(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const $t=e=>e.join("/").replace(/\/\/+/g,"/"),hw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class rf{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function wg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _g=["post","put","patch","delete"],gw=new Set(_g),vw=["get",..._g],yw=new Set(vw),ww=new Set([301,302,303,307,308]),_w=new Set([307,308]),Cl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},kw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Qd={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},kg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Eg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ew=!Eg,Sw=e=>!!e.hasErrorBoundary;function Iw(e){K(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||Sw,n={},r=gg(e.routes,t,void 0,n),i,a=Q({v7_normalizeFormMethod:!1},e.future),o=null,s=new Set,l=null,u=null,c=null,f=e.hydrationData!=null,h=br(r,e.history.location,e.basename),v=null;if(h==null){let k=St(404,{pathname:e.history.location.pathname}),{matches:E,route:I}=nh(r);h=E,v={[I.id]:k}}let _=!h.some(k=>k.route.lazy)&&(!h.some(k=>k.route.loader)||e.hydrationData!=null),w,g={historyAction:e.history.action,location:e.history.location,matches:h,initialized:_,navigation:Cl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||v,fetchers:new Map,blockers:new Map},p=ge.Pop,d=!1,m,y=!1,S=!1,C=[],T=[],x=new Map,V=0,B=-1,be=new Map,yt=new Set,Ze=new Map,wt=new Map,_t=new Map,Ln=!1;function ui(){return o=e.history.listen(k=>{let{action:E,location:I,delta:L}=k;if(Ln){Ln=!1;return}Qr(_t.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let M=Df({currentLocation:g.location,nextLocation:I,historyAction:E});if(M&&L!=null){Ln=!0,e.history.go(L*-1),za(M,{state:"blocked",location:I,proceed(){za(M,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),e.history.go(L)},reset(){di(M),U({blockers:new Map(w.state.blockers)})}});return}return Re(E,I)}),g.initialized||Re(ge.Pop,g.location),w}function N(){o&&o(),s.clear(),m&&m.abort(),g.fetchers.forEach((k,E)=>Ys(E)),g.blockers.forEach((k,E)=>di(E))}function H(k){return s.add(k),()=>s.delete(k)}function U(k){g=Q({},g,k),s.forEach(E=>E(g))}function ee(k,E){var I,L;let M=g.actionData!=null&&g.navigation.formMethod!=null&&Ot(g.navigation.formMethod)&&g.navigation.state==="loading"&&((I=k.state)==null?void 0:I._isRedirect)!==!0,z;E.actionData?Object.keys(E.actionData).length>0?z=E.actionData:z=null:M?z=g.actionData:z=null;let j=E.loaderData?th(g.loaderData,E.loaderData,E.matches||[],E.errors):g.loaderData;for(let[F]of _t)di(F);let W=d===!0||g.navigation.formMethod!=null&&Ot(g.navigation.formMethod)&&((L=k.state)==null?void 0:L._isRedirect)!==!0;i&&(r=i,i=void 0),U(Q({},E,{actionData:z,loaderData:j,historyAction:p,location:k,initialized:!0,navigation:Cl,revalidation:"idle",restoreScrollPosition:Lf(k,E.matches||g.matches),preventScrollReset:W,blockers:new Map(g.blockers)})),y||p===ge.Pop||(p===ge.Push?e.history.push(k,k.state):p===ge.Replace&&e.history.replace(k,k.state)),p=ge.Pop,d=!1,y=!1,S=!1,C=[],T=[]}async function pe(k,E){if(typeof k=="number"){e.history.go(k);return}let{path:I,submission:L,error:M}=qd(k,a,E),z=g.location,j=ua(g.location,I,E&&E.state);j=Q({},j,e.history.encodeLocation(j));let W=E&&E.replace!=null?E.replace:void 0,F=ge.Push;W===!0?F=ge.Replace:W===!1||L!=null&&Ot(L.formMethod)&&L.formAction===g.location.pathname+g.location.search&&(F=ge.Replace);let ne=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,J=Df({currentLocation:z,nextLocation:j,historyAction:F});if(J){za(J,{state:"blocked",location:j,proceed(){za(J,{state:"proceeding",proceed:void 0,reset:void 0,location:j}),pe(k,E)},reset(){di(J),U({blockers:new Map(g.blockers)})}});return}return await Re(F,j,{submission:L,pendingError:M,preventScrollReset:ne,replace:E&&E.replace})}function cr(){if(Vs(),U({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Re(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Re(p||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Re(k,E,I){m&&m.abort(),m=null,p=k,y=(I&&I.startUninterruptedRevalidation)===!0,fy(g.location,g.matches),d=(I&&I.preventScrollReset)===!0;let L=i||r,M=I&&I.overrideNavigation,z=br(L,E,e.basename);if(!z){let Ee=St(404,{pathname:E.pathname}),{matches:Ce,route:st}=nh(L);Gs(),ee(E,{matches:Ce,loaderData:{},errors:{[st.id]:Ee}});return}if(Pw(g.location,E)&&!(I&&I.submission&&Ot(I.submission.formMethod))){ee(E,{matches:z});return}m=new AbortController;let j=bi(e.history,E,m.signal,I&&I.submission),W,F;if(I&&I.pendingError)F={[Cr(z).route.id]:I.pendingError};else if(I&&I.submission&&Ot(I.submission.formMethod)){let Ee=await ci(j,E,I.submission,z,{replace:I.replace});if(Ee.shortCircuited)return;W=Ee.pendingActionData,F=Ee.pendingActionError,M=Q({state:"loading",location:E},I.submission),j=new Request(j.url,{signal:j.signal})}let{shortCircuited:ne,loaderData:J,errors:ot}=await Rt(j,E,z,M,I&&I.submission,I&&I.fetcherSubmission,I&&I.replace,W,F);ne||(m=null,ee(E,Q({matches:z},W?{actionData:W}:{},{loaderData:J,errors:ot})))}async function ci(k,E,I,L,M){Vs();let z=Q({state:"submitting",location:E},I);U({navigation:z});let j,W=Fu(L,E);if(!W.route.action&&!W.route.lazy)j={type:ye.error,error:St(405,{method:k.method,pathname:E.pathname,routeId:W.route.id})};else if(j=await Ii("action",k,W,L,n,t,w.basename),k.signal.aborted)return{shortCircuited:!0};if(Ur(j)){let F;return M&&M.replace!=null?F=M.replace:F=j.location===g.location.pathname+g.location.search,await fi(g,j,{submission:I,replace:F}),{shortCircuited:!0}}if(Bi(j)){let F=Cr(L,W.route.id);return(M&&M.replace)!==!0&&(p=ge.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:j.error}}}if(Wn(j))throw St(400,{type:"defer-action"});return{pendingActionData:{[W.route.id]:j.data}}}async function Rt(k,E,I,L,M,z,j,W,F){let ne=L;ne||(ne=Q({state:"loading",location:E,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},M));let J=M||z?M||z:ne.formMethod&&ne.formAction&&ne.formData&&ne.formEncType?{formMethod:ne.formMethod,formAction:ne.formAction,formData:ne.formData,formEncType:ne.formEncType}:void 0,ot=i||r,[Ee,Ce]=Xd(e.history,g,I,J,E,S,C,T,Ze,ot,e.basename,W,F);if(Gs(Ae=>!(I&&I.some(lt=>lt.route.id===Ae))||Ee&&Ee.some(lt=>lt.route.id===Ae)),Ee.length===0&&Ce.length===0)return ee(E,Q({matches:I,loaderData:{},errors:F||null},W?{actionData:W}:{})),{shortCircuited:!0};if(!y){Ce.forEach(lt=>{let Un=g.fetchers.get(lt.key),mi={state:"loading",data:Un&&Un.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(lt.key,mi)});let Ae=W||g.actionData;U(Q({navigation:ne},Ae?Object.keys(Ae).length===0?{actionData:null}:{actionData:Ae}:{},Ce.length>0?{fetchers:new Map(g.fetchers)}:{}))}B=++V,Ce.forEach(Ae=>x.set(Ae.key,m));let{results:st,loaderResults:hi,fetcherResults:Qs}=await Af(g.matches,I,Ee,Ce,k);if(k.signal.aborted)return{shortCircuited:!0};Ce.forEach(Ae=>x.delete(Ae.key));let pi=rh(st);if(pi)return await fi(g,pi,{replace:j}),{shortCircuited:!0};let{loaderData:fr,errors:qs}=eh(g,I,Ee,hi,F,Ce,Qs,wt);wt.forEach((Ae,lt)=>{Ae.subscribe(Un=>{(Un||Ae.done)&&wt.delete(lt)})}),ly();let Xs=Of(B);return Q({loaderData:fr,errors:qs},Xs||Ce.length>0?{fetchers:new Map(g.fetchers)}:{})}function Mn(k){return g.fetchers.get(k)||kw}function ay(k,E,I,L){if(Ew)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");x.has(k)&&Fa(k);let z=br(i||r,I,e.basename);if(!z){Ks(k,E,St(404,{pathname:I}));return}let{path:j,submission:W}=qd(I,a,L,!0),F=Fu(z,j);if(d=(L&&L.preventScrollReset)===!0,W&&Ot(W.formMethod)){oy(k,E,j,F,z,W);return}Ze.set(k,{routeId:E,path:j}),sy(k,E,j,F,z,W)}async function oy(k,E,I,L,M,z){if(Vs(),Ze.delete(k),!L.route.action&&!L.route.lazy){let At=St(405,{method:z.formMethod,pathname:I,routeId:E});Ks(k,E,At);return}let j=g.fetchers.get(k),W=Q({state:"submitting"},z,{data:j&&j.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(k,W),U({fetchers:new Map(g.fetchers)});let F=new AbortController,ne=bi(e.history,I,F.signal,z);x.set(k,F);let J=await Ii("action",ne,L,M,n,t,w.basename);if(ne.signal.aborted){x.get(k)===F&&x.delete(k);return}if(Ur(J)){x.delete(k),yt.add(k);let At=Q({state:"loading"},z,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(k,At),U({fetchers:new Map(g.fetchers)}),fi(g,J,{submission:z,isFetchActionRedirect:!0})}if(Bi(J)){Ks(k,E,J.error);return}if(Wn(J))throw St(400,{type:"defer-action"});let ot=g.navigation.location||g.location,Ee=bi(e.history,ot,F.signal),Ce=i||r,st=g.navigation.state!=="idle"?br(Ce,g.navigation.location,e.basename):g.matches;K(st,"Didn't find any matches after fetcher action");let hi=++V;be.set(k,hi);let Qs=Q({state:"loading",data:J.data},z,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(k,Qs);let[pi,fr]=Xd(e.history,g,st,z,ot,S,C,T,Ze,Ce,e.basename,{[L.route.id]:J.data},void 0);fr.filter(At=>At.key!==k).forEach(At=>{let Js=At.key,Mf=g.fetchers.get(Js),my={state:"loading",data:Mf&&Mf.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Js,my),x.set(Js,F)}),U({fetchers:new Map(g.fetchers)});let{results:qs,loaderResults:Xs,fetcherResults:Ae}=await Af(g.matches,st,pi,fr,Ee);if(F.signal.aborted)return;be.delete(k),x.delete(k),fr.forEach(At=>x.delete(At.key));let lt=rh(qs);if(lt)return fi(g,lt);let{loaderData:Un,errors:mi}=eh(g,g.matches,pi,Xs,void 0,fr,Ae,wt),hy={state:"idle",data:J.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(k,hy);let py=Of(hi);g.navigation.state==="loading"&&hi>B?(K(p,"Expected pending action"),m&&m.abort(),ee(g.navigation.location,{matches:st,loaderData:Un,errors:mi,fetchers:new Map(g.fetchers)})):(U(Q({errors:mi,loaderData:th(g.loaderData,Un,st,mi)},py?{fetchers:new Map(g.fetchers)}:{})),S=!1)}async function sy(k,E,I,L,M,z){let j=g.fetchers.get(k),W=Q({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},z,{data:j&&j.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(k,W),U({fetchers:new Map(g.fetchers)});let F=new AbortController,ne=bi(e.history,I,F.signal);x.set(k,F);let J=await Ii("loader",ne,L,M,n,t,w.basename);if(Wn(J)&&(J=await Cg(J,ne.signal,!0)||J),x.get(k)===F&&x.delete(k),ne.signal.aborted)return;if(Ur(J)){await fi(g,J);return}if(Bi(J)){let Ee=Cr(g.matches,E);g.fetchers.delete(k),U({fetchers:new Map(g.fetchers),errors:{[Ee.route.id]:J.error}});return}K(!Wn(J),"Unhandled fetcher deferred data");let ot={state:"idle",data:J.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(k,ot),U({fetchers:new Map(g.fetchers)})}async function fi(k,E,I){var L;let{submission:M,replace:z,isFetchActionRedirect:j}=I===void 0?{}:I;E.revalidate&&(S=!0);let W=ua(k.location,E.location,Q({_isRedirect:!0},j?{_isFetchActionRedirect:!0}:{}));if(K(W,"Expected a location on the redirect navigation"),kg.test(E.location)&&Eg&&typeof((L=window)==null?void 0:L.location)<"u"){let Ce=e.history.createURL(E.location),st=ba(Ce.pathname,e.basename||"/")==null;if(window.location.origin!==Ce.origin||st){z?window.location.replace(E.location):window.location.assign(E.location);return}}m=null;let F=z===!0?ge.Replace:ge.Push,{formMethod:ne,formAction:J,formEncType:ot,formData:Ee}=k.navigation;!M&&ne&&J&&Ee&&ot&&(M={formMethod:ne,formAction:J,formEncType:ot,formData:Ee}),_w.has(E.status)&&M&&Ot(M.formMethod)?await Re(F,W,{submission:Q({},M,{formAction:E.location}),preventScrollReset:d}):j?await Re(F,W,{overrideNavigation:{state:"loading",location:W,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:M,preventScrollReset:d}):await Re(F,W,{overrideNavigation:{state:"loading",location:W,formMethod:M?M.formMethod:void 0,formAction:M?M.formAction:void 0,formEncType:M?M.formEncType:void 0,formData:M?M.formData:void 0},preventScrollReset:d})}async function Af(k,E,I,L,M){let z=await Promise.all([...I.map(F=>Ii("loader",M,F,E,n,t,w.basename)),...L.map(F=>F.matches&&F.match?Ii("loader",bi(e.history,F.path,M.signal),F.match,F.matches,n,t,w.basename):{type:ye.error,error:St(404,{pathname:F.path})})]),j=z.slice(0,I.length),W=z.slice(I.length);return await Promise.all([ih(k,I,j,M.signal,!1,g.loaderData),ih(k,L.map(F=>F.match),W,M.signal,!0)]),{results:z,loaderResults:j,fetcherResults:W}}function Vs(){S=!0,C.push(...Gs()),Ze.forEach((k,E)=>{x.has(E)&&(T.push(E),Fa(E))})}function Ks(k,E,I){let L=Cr(g.matches,E);Ys(k),U({errors:{[L.route.id]:I},fetchers:new Map(g.fetchers)})}function Ys(k){x.has(k)&&Fa(k),Ze.delete(k),be.delete(k),yt.delete(k),g.fetchers.delete(k)}function Fa(k){let E=x.get(k);K(E,"Expected fetch controller: "+k),E.abort(),x.delete(k)}function Nf(k){for(let E of k){let L={state:"idle",data:Mn(E).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(E,L)}}function ly(){let k=[];for(let E of yt){let I=g.fetchers.get(E);K(I,"Expected fetcher: "+E),I.state==="loading"&&(yt.delete(E),k.push(E))}Nf(k)}function Of(k){let E=[];for(let[I,L]of be)if(L<k){let M=g.fetchers.get(I);K(M,"Expected fetcher: "+I),M.state==="loading"&&(Fa(I),be.delete(I),E.push(I))}return Nf(E),E.length>0}function uy(k,E){let I=g.blockers.get(k)||Qd;return _t.get(k)!==E&&_t.set(k,E),I}function di(k){g.blockers.delete(k),_t.delete(k)}function za(k,E){let I=g.blockers.get(k)||Qd;K(I.state==="unblocked"&&E.state==="blocked"||I.state==="blocked"&&E.state==="blocked"||I.state==="blocked"&&E.state==="proceeding"||I.state==="blocked"&&E.state==="unblocked"||I.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+I.state+" -> "+E.state),g.blockers.set(k,E),U({blockers:new Map(g.blockers)})}function Df(k){let{currentLocation:E,nextLocation:I,historyAction:L}=k;if(_t.size===0)return;_t.size>1&&Qr(!1,"A router only supports one blocker at a time");let M=Array.from(_t.entries()),[z,j]=M[M.length-1],W=g.blockers.get(z);if(!(W&&W.state==="proceeding")&&j({currentLocation:E,nextLocation:I,historyAction:L}))return z}function Gs(k){let E=[];return wt.forEach((I,L)=>{(!k||k(L))&&(I.cancel(),E.push(L),wt.delete(L))}),E}function cy(k,E,I){if(l=k,c=E,u=I||(L=>L.key),!f&&g.navigation===Cl){f=!0;let L=Lf(g.location,g.matches);L!=null&&U({restoreScrollPosition:L})}return()=>{l=null,c=null,u=null}}function fy(k,E){if(l&&u&&c){let I=E.map(M=>ah(M,g.loaderData)),L=u(k,I)||k.key;l[L]=c()}}function Lf(k,E){if(l&&u&&c){let I=E.map(z=>ah(z,g.loaderData)),L=u(k,I)||k.key,M=l[L];if(typeof M=="number")return M}return null}function dy(k){i=k}return w={get basename(){return e.basename},get state(){return g},get routes(){return r},initialize:ui,subscribe:H,enableScrollRestoration:cy,navigate:pe,fetch:ay,revalidate:cr,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:Mn,deleteFetcher:Ys,dispose:N,getBlocker:uy,deleteBlocker:di,_internalFetchControllers:x,_internalActiveDeferreds:wt,_internalSetRoutes:dy},w}function bw(e){return e!=null&&"formData"in e}function qd(e,t,n,r){r===void 0&&(r=!1);let i=typeof e=="string"?e:Kt(e);if(!n||!bw(n))return{path:i};if(n.formMethod&&!Nw(n.formMethod))return{path:i,error:St(405,{method:n.formMethod})};let a;if(n.formData){let l=n.formMethod||"get";if(a={formMethod:t.v7_normalizeFormMethod?l.toUpperCase():l.toLowerCase(),formAction:bg(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},Ot(a.formMethod))return{path:i,submission:a}}let o=Jt(i),s=Ig(n.formData);return r&&o.search&&Tg(o.search)&&s.append("index",""),o.search="?"+s,{path:Kt(o),submission:a}}function Cw(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Xd(e,t,n,r,i,a,o,s,l,u,c,f,h){let v=h?Object.values(h)[0]:f?Object.values(f)[0]:void 0,_=e.createURL(t.location),w=e.createURL(i),g=a||_.toString()===w.toString()||_.search!==w.search,p=h?Object.keys(h)[0]:void 0,m=Cw(n,p).filter((S,C)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(Tw(t.loaderData,t.matches[C],S)||o.some(V=>V===S.route.id))return!0;let T=t.matches[C],x=S;return Jd(S,Q({currentUrl:_,currentParams:T.params,nextUrl:w,nextParams:x.params},r,{actionResult:v,defaultShouldRevalidate:g||Sg(T,x)}))}),y=[];return l.forEach((S,C)=>{if(!n.some(B=>B.route.id===S.routeId))return;let T=br(u,S.path,c);if(!T){y.push(Q({key:C},S,{matches:null,match:null}));return}let x=Fu(T,S.path);if(s.includes(C)){y.push(Q({key:C,matches:T,match:x},S));return}Jd(x,Q({currentUrl:_,currentParams:t.matches[t.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:g}))&&y.push(Q({key:C,matches:T,match:x},S))}),[m,y]}function Tw(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Sg(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Jd(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Zd(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];K(i,"No route found in manifest");let a={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Qr(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Q1.has(o)&&(a[o]=r[o])}Object.assign(i,a),Object.assign(i,{hasErrorBoundary:t(Q({},i)),lazy:void 0})}async function Ii(e,t,n,r,i,a,o,s,l,u){o===void 0&&(o="/"),s===void 0&&(s=!1),l===void 0&&(l=!1);let c,f,h,v=g=>{let p,d=new Promise((m,y)=>p=y);return h=()=>p(),t.signal.addEventListener("abort",h),Promise.race([g({request:t,params:n.params,context:u}),d])};try{let g=n.route[e];if(n.route.lazy)if(g)f=(await Promise.all([v(g),Zd(n.route,a,i)]))[0];else if(await Zd(n.route,a,i),g=n.route[e],g)f=await v(g);else{if(e==="action")throw St(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:ye.data,data:void 0}}else K(g,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),f=await v(g);K(f!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(g){c=ye.error,f=g}finally{h&&t.signal.removeEventListener("abort",h)}if(Aw(f)){let g=f.status;if(ww.has(g)){let m=f.headers.get("Location");if(K(m,"Redirects returned/thrown from loaders/actions must have a Location header"),kg.test(m)){if(!s){let y=new URL(t.url),S=m.startsWith("//")?new URL(y.protocol+m):new URL(m),C=ba(S.pathname,o)!=null;S.origin===y.origin&&C&&(m=S.pathname+S.search+S.hash)}}else{let y=r.slice(0,r.indexOf(n)+1),S=Ds(y).map(T=>T.pathnameBase),C=nf(m,S,new URL(t.url).pathname);if(K(Kt(C),"Unable to resolve redirect location: "+m),o){let T=C.pathname;C.pathname=T==="/"?o:$t([o,T])}m=Kt(C)}if(s)throw f.headers.set("Location",m),f;return{type:ye.redirect,status:g,location:m,revalidate:f.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:c||ye.data,response:f};let p,d=f.headers.get("Content-Type");return d&&/\bapplication\/json\b/.test(d)?p=await f.json():p=await f.text(),c===ye.error?{type:c,error:new rf(g,f.statusText,p),headers:f.headers}:{type:ye.data,data:p,statusCode:f.status,headers:f.headers}}if(c===ye.error)return{type:c,error:f};if(Rw(f)){var _,w;return{type:ye.deferred,deferredData:f,statusCode:(_=f.init)==null?void 0:_.status,headers:((w=f.init)==null?void 0:w.headers)&&new Headers(f.init.headers)}}return{type:ye.data,data:f}}function bi(e,t,n,r){let i=e.createURL(bg(t)).toString(),a={signal:n};if(r&&Ot(r.formMethod)){let{formMethod:o,formEncType:s,formData:l}=r;a.method=o.toUpperCase(),a.body=s==="application/x-www-form-urlencoded"?Ig(l):l}return new Request(i,a)}function Ig(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function xw(e,t,n,r,i){let a={},o=null,s,l=!1,u={};return n.forEach((c,f)=>{let h=t[f].route.id;if(K(!Ur(c),"Cannot handle redirect results in processLoaderData"),Bi(c)){let v=Cr(e,h),_=c.error;r&&(_=Object.values(r)[0],r=void 0),o=o||{},o[v.route.id]==null&&(o[v.route.id]=_),a[h]=void 0,l||(l=!0,s=wg(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else Wn(c)?(i.set(h,c.deferredData),a[h]=c.deferredData.data):a[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(s=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(o=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:o,statusCode:s||200,loaderHeaders:u}}function eh(e,t,n,r,i,a,o,s){let{loaderData:l,errors:u}=xw(t,n,r,i,s);for(let c=0;c<a.length;c++){let{key:f,match:h}=a[c];K(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(Bi(v)){let _=Cr(e.matches,h==null?void 0:h.route.id);u&&u[_.route.id]||(u=Q({},u,{[_.route.id]:v.error})),e.fetchers.delete(f)}else if(Ur(v))K(!1,"Unhandled fetcher revalidation redirect");else if(Wn(v))K(!1,"Unhandled fetcher deferred data");else{let _={state:"idle",data:v.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(f,_)}}return{loaderData:l,errors:u}}function th(e,t,n,r){let i=Q({},t);for(let a of n){let o=a.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&a.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function Cr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function nh(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function St(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(s="defer() is not supported in actions")):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new rf(e||500,o,new Error(s),!0)}function rh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Ur(n))return n}}function bg(e){let t=typeof e=="string"?Jt(e):e;return Kt(Q({},t,{hash:""}))}function Pw(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Wn(e){return e.type===ye.deferred}function Bi(e){return e.type===ye.error}function Ur(e){return(e&&e.type)===ye.redirect}function Rw(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Aw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Nw(e){return yw.has(e.toLowerCase())}function Ot(e){return gw.has(e.toLowerCase())}async function ih(e,t,n,r,i,a){for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(!l)continue;let u=e.find(f=>f.route.id===l.route.id),c=u!=null&&!Sg(u,l)&&(a&&a[l.route.id])!==void 0;Wn(s)&&(i||c)&&await Cg(s,r,i).then(f=>{f&&(n[o]=f||n[o])})}}async function Cg(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ye.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ye.error,error:i}}return{type:ye.data,data:e.deferredData.data}}}function Tg(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ah(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Fu(e,t){let n=typeof t=="string"?Jt(t).search:t.search;if(e[e.length-1].route.index&&Tg(n||""))return e[e.length-1];let r=Ds(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ow(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Dw=typeof Object.is=="function"?Object.is:Ow,{useState:Lw,useEffect:Mw,useLayoutEffect:Uw,useDebugValue:Fw}=Bl;function zw(e,t,n){const r=t(),[{inst:i},a]=Lw({inst:{value:r,getSnapshot:t}});return Uw(()=>{i.value=r,i.getSnapshot=t,Tl(i)&&a({inst:i})},[e,r,t]),Mw(()=>(Tl(i)&&a({inst:i}),e(()=>{Tl(i)&&a({inst:i})})),[e]),Fw(r),r}function Tl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Dw(n,r)}catch{return!0}}function jw(e,t,n){return t()}const $w=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bw=!$w,Hw=Bw?jw:zw,Ww="useSyncExternalStore"in Bl?(e=>e.useSyncExternalStore)(Bl):Hw,af=P.createContext(null),Ls=P.createContext(null),Ca=P.createContext(null),Ms=P.createContext(null),lr=P.createContext({outlet:null,matches:[]}),xg=P.createContext(null);function zu(){return zu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zu.apply(this,arguments)}function Vw(e,t){let{relative:n}=t===void 0?{}:t;ni()||K(!1);let{basename:r,navigator:i}=P.useContext(Ca),{hash:a,pathname:o,search:s}=Pg(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:$t([r,o])),i.createHref({pathname:l,search:s,hash:a})}function ni(){return P.useContext(Ms)!=null}function ri(){return ni()||K(!1),P.useContext(Ms).location}function of(){ni()||K(!1);let{basename:e,navigator:t}=P.useContext(Ca),{matches:n}=P.useContext(lr),{pathname:r}=ri(),i=JSON.stringify(Ds(n).map(s=>s.pathnameBase)),a=P.useRef(!1);return P.useEffect(()=>{a.current=!0}),P.useCallback(function(s,l){if(l===void 0&&(l={}),!a.current)return;if(typeof s=="number"){t.go(s);return}let u=nf(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:$t([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}const Kw=P.createContext(null);function Yw(e){let t=P.useContext(lr).outlet;return t&&P.createElement(Kw.Provider,{value:e},t)}function Pg(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=P.useContext(lr),{pathname:i}=ri(),a=JSON.stringify(Ds(r).map(o=>o.pathnameBase));return P.useMemo(()=>nf(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function Gw(e,t){ni()||K(!1);let{navigator:n}=P.useContext(Ca),r=P.useContext(Ls),{matches:i}=P.useContext(lr),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=ri(),u;if(t){var c;let w=typeof t=="string"?Jt(t):t;s==="/"||(c=w.pathname)!=null&&c.startsWith(s)||K(!1),u=w}else u=l;let f=u.pathname||"/",h=s==="/"?f:f.slice(s.length)||"/",v=br(e,{pathname:h}),_=Jw(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:$t([s,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:$t([s,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&_?P.createElement(Ms.Provider,{value:{location:zu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ge.Pop}},_):_}function Qw(){let e=t_(),t=wg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,a)}class qw extends P.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?P.createElement(lr.Provider,{value:this.props.routeContext},P.createElement(xg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xw(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(af);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(lr.Provider,{value:t},r)}function Jw(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||K(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,s)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=P.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=P.createElement(Qw,null));let c=t.concat(r.slice(0,s+1)),f=()=>{let h=a;return l?h=u:o.route.Component?h=P.createElement(o.route.Component,null):o.route.element&&(h=o.route.element),P.createElement(Xw,{match:o,routeContext:{outlet:a,matches:c},children:h})};return n&&(o.route.ErrorBoundary||o.route.errorElement||s===0)?P.createElement(qw,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var oh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(oh||(oh={}));var qr;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(qr||(qr={}));function Rg(e){let t=P.useContext(Ls);return t||K(!1),t}function Zw(e){let t=P.useContext(lr);return t||K(!1),t}function Ag(e){let t=Zw(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function e_(){let e=Rg(qr.UseLoaderData),t=Ag(qr.UseLoaderData);if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return}return e.loaderData[t]}function t_(){var e;let t=P.useContext(xg),n=Rg(qr.UseRouteError),r=Ag(qr.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function n_(e){let{fallbackElement:t,router:n}=e,r=P.useCallback(()=>n.state,[n]),i=Ww(n.subscribe,r,r),a=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,c)=>n.navigate(l,{state:u,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(l,u,c)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[n]),o=n.basename||"/",s=P.useMemo(()=>({router:n,navigator:a,static:!1,basename:o}),[n,a,o]);return P.createElement(P.Fragment,null,P.createElement(af.Provider,{value:s},P.createElement(Ls.Provider,{value:i},P.createElement(o_,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:a},n.state.initialized?P.createElement(s_,null):t))),null)}function r_(e){let{to:t,replace:n,state:r,relative:i}=e;ni()||K(!1);let a=P.useContext(Ls),o=of();return P.useEffect(()=>{a&&a.navigation.state!=="idle"||o(t,{replace:n,state:r,relative:i})}),null}function i_(e){return Yw(e.context)}function a_(e){K(!1)}function o_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ge.Pop,navigator:a,static:o=!1}=e;ni()&&K(!1);let s=t.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=Jt(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:v="default"}=r,_=P.useMemo(()=>{let w=ba(u,s);return w==null?null:{location:{pathname:w,search:c,hash:f,state:h,key:v},navigationType:i}},[s,u,c,f,h,v,i]);return _==null?null:P.createElement(Ca.Provider,{value:l},P.createElement(Ms.Provider,{children:n,value:_}))}function s_(e){let{children:t,location:n}=e,r=P.useContext(af),i=r&&!t?r.router.routes:ju(t);return Gw(i,n)}var sh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(sh||(sh={}));new Promise(()=>{});function ju(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let a=[...t,i];if(r.type===P.Fragment){n.push.apply(n,ju(r.props.children,a));return}r.type!==a_&&K(!1),!r.props.index||!r.props.children||K(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ju(r.props.children,a)),n.push(o)}),n}function l_(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}function u_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function c_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function f_(e,t){return e.button===0&&(!t||t==="_self")&&!c_(e)}const d_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function h_(e,t){return Iw({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:K1({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||p_(),routes:e,detectErrorBoundary:l_}).initialize()}function p_(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=is({},t,{errors:m_(t.errors)})),t}function m_(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new rf(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let a=new Error(i.message);a.stack="",n[r]=a}else n[r]=i;return n}const g_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lt=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c}=t,f=u_(t,d_),{basename:h}=P.useContext(Ca),v,_=!1;if(typeof u=="string"&&v_.test(u)&&(v=u,g_)){let d=new URL(window.location.href),m=u.startsWith("//")?new URL(d.protocol+u):new URL(u),y=ba(m.pathname,h);m.origin===d.origin&&y!=null?u=y+m.search+m.hash:_=!0}let w=Vw(u,{relative:i}),g=y_(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i});function p(d){r&&r(d),d.defaultPrevented||g(d)}return P.createElement("a",is({},f,{href:v||w,onClick:_||a?r:p,ref:n,target:l}))});var lh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(lh||(lh={}));var uh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(uh||(uh={}));function y_(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,s=of(),l=ri(),u=Pg(e,{relative:o});return P.useCallback(c=>{if(f_(c,n)){c.preventDefault();let f=r!==void 0?r:Kt(l)===Kt(u);s(e,{replace:f,state:i,preventScrollReset:a,relative:o})}},[l,s,u,r,i,n,e,a,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},w_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Og={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,f=(a&3)<<4|s>>4;let h=(s&15)<<2|u>>6,v=u&63;l||(v=64,o||(h=64)),r.push(n[c],n[f],n[h],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ng(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):w_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||f==null)throw new __;const h=a<<2|s>>4;if(r.push(h),u!==64){const v=s<<4&240|u>>2;if(r.push(v),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class __ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k_=function(e){const t=Ng(e);return Og.encodeByteArray(t,!0)},Dg=function(e){return k_(e).replace(/\./g,"")},Lg=function(e){try{return Og.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=()=>E_().__FIREBASE_DEFAULTS__,I_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},b_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Lg(e[1]);return t&&JSON.parse(t)},sf=()=>{try{return S_()||I_()||b_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},C_=e=>{var t,n;return(n=(t=sf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Mg=()=>{var e;return(e=sf())===null||e===void 0?void 0:e.config},Ug=e=>{var t;return(t=sf())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function x_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function P_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function R_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function A_(){const e=Me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function N_(){try{return typeof indexedDB=="object"}catch{return!1}}function O_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="FirebaseError";class Dn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=D_,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ta.prototype.create)}}class Ta{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?L_(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,s,r)}}function L_(e,t){return e.replace(M_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const M_=/\{\$([^}]+)}/g;function U_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function as(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(ch(a)&&ch(o)){if(!as(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ch(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ri(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function Ai(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function F_(e,t){const n=new z_(e,t);return n.subscribe.bind(n)}class z_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");j_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=xl),i.error===void 0&&(i.error=xl),i.complete===void 0&&(i.complete=xl);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function xl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(e){return e&&e._delegate?e._delegate:e}class Xr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new T_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(H_(t))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=jn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=jn){return this.instances.has(t)}getOptions(t=jn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:B_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=jn){return this.component?this.component.multipleInstances?t:jn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function B_(e){return e===jn?void 0:e}function H_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new $_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(te||(te={}));const V_={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},K_=te.INFO,Y_={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},G_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Y_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fg{constructor(t){this.name=t,this._logLevel=K_,this._logHandler=G_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in te))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?V_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...t),this._logHandler(this,te.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...t),this._logHandler(this,te.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,te.INFO,...t),this._logHandler(this,te.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,te.WARN,...t),this._logHandler(this,te.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...t),this._logHandler(this,te.ERROR,...t)}}const Q_=(e,t)=>t.some(n=>e instanceof n);let fh,dh;function q_(){return fh||(fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X_(){return dh||(dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zg=new WeakMap,$u=new WeakMap,jg=new WeakMap,Pl=new WeakMap,lf=new WeakMap;function J_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(In(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&zg.set(n,e)}).catch(()=>{}),lf.set(t,e),t}function Z_(e){if($u.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});$u.set(e,t)}let Bu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $u.get(e);if(t==="objectStoreNames")return e.objectStoreNames||jg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ek(e){Bu=e(Bu)}function tk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Rl(this),t,...n);return jg.set(r,t.sort?t.sort():[t]),In(r)}:X_().includes(e)?function(...t){return e.apply(Rl(this),t),In(zg.get(this))}:function(...t){return In(e.apply(Rl(this),t))}}function nk(e){return typeof e=="function"?tk(e):(e instanceof IDBTransaction&&Z_(e),Q_(e,q_())?new Proxy(e,Bu):e)}function In(e){if(e instanceof IDBRequest)return J_(e);if(Pl.has(e))return Pl.get(e);const t=nk(e);return t!==e&&(Pl.set(e,t),lf.set(t,e)),t}const Rl=e=>lf.get(e);function rk(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=In(o);return r&&o.addEventListener("upgradeneeded",l=>{r(In(o.result),l.oldVersion,l.newVersion,In(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const ik=["get","getKey","getAll","getAllKeys","count"],ak=["put","add","delete","clear"],Al=new Map;function hh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Al.get(t))return Al.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ak.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ik.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return Al.set(t,a),a}ek(e=>({...e,get:(t,n,r)=>hh(t,n)||e.get(t,n,r),has:(t,n)=>!!hh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sk(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hu="@firebase/app",ph="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Fg("@firebase/app"),lk="@firebase/app-compat",uk="@firebase/analytics-compat",ck="@firebase/analytics",fk="@firebase/app-check-compat",dk="@firebase/app-check",hk="@firebase/auth",pk="@firebase/auth-compat",mk="@firebase/database",gk="@firebase/database-compat",vk="@firebase/functions",yk="@firebase/functions-compat",wk="@firebase/installations",_k="@firebase/installations-compat",kk="@firebase/messaging",Ek="@firebase/messaging-compat",Sk="@firebase/performance",Ik="@firebase/performance-compat",bk="@firebase/remote-config",Ck="@firebase/remote-config-compat",Tk="@firebase/storage",xk="@firebase/storage-compat",Pk="@firebase/firestore",Rk="@firebase/firestore-compat",Ak="firebase",Nk="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="[DEFAULT]",Ok={[Hu]:"fire-core",[lk]:"fire-core-compat",[ck]:"fire-analytics",[uk]:"fire-analytics-compat",[dk]:"fire-app-check",[fk]:"fire-app-check-compat",[hk]:"fire-auth",[pk]:"fire-auth-compat",[mk]:"fire-rtdb",[gk]:"fire-rtdb-compat",[vk]:"fire-fn",[yk]:"fire-fn-compat",[wk]:"fire-iid",[_k]:"fire-iid-compat",[kk]:"fire-fcm",[Ek]:"fire-fcm-compat",[Sk]:"fire-perf",[Ik]:"fire-perf-compat",[bk]:"fire-rc",[Ck]:"fire-rc-compat",[Tk]:"fire-gcs",[xk]:"fire-gcs-compat",[Pk]:"fire-fst",[Rk]:"fire-fst-compat","fire-js":"fire-js",[Ak]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Map,Vu=new Map;function Dk(e,t){try{e.container.addComponent(t)}catch(n){tr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ca(e){const t=e.name;if(Vu.has(t))return tr.debug(`There were multiple attempts to register component ${t}.`),!1;Vu.set(t,e);for(const n of os.values())Dk(n,e);return!0}function $g(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bn=new Ta("app","Firebase",Lk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=Nk;function Bg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Wu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=Mg()),!n)throw bn.create("no-options");const a=os.get(i);if(a){if(as(n,a.options)&&as(r,a.config))return a;throw bn.create("duplicate-app",{appName:i})}const o=new W_(i);for(const l of Vu.values())o.addComponent(l);const s=new Mk(n,r,o);return os.set(i,s),s}function Uk(e=Wu){const t=os.get(e);if(!t&&e===Wu&&Mg())return Bg();if(!t)throw bn.create("no-app",{appName:e});return t}function Fr(e,t,n){var r;let i=(r=Ok[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tr.warn(s.join(" "));return}ca(new Xr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="firebase-heartbeat-database",zk=1,fa="firebase-heartbeat-store";let Nl=null;function Hg(){return Nl||(Nl=rk(Fk,zk,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fa)}}}).catch(e=>{throw bn.create("idb-open",{originalErrorMessage:e.message})})),Nl}async function jk(e){try{return await(await Hg()).transaction(fa).objectStore(fa).get(Wg(e))}catch(t){if(t instanceof Dn)tr.warn(t.message);else{const n=bn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});tr.warn(n.message)}}}async function mh(e,t){try{const r=(await Hg()).transaction(fa,"readwrite");await r.objectStore(fa).put(t,Wg(e)),await r.done}catch(n){if(n instanceof Dn)tr.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(r.message)}}}function Wg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=1024,Bk=30*24*60*60*1e3;class Hk{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Bk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gh(),{heartbeatsToSend:n,unsentEntries:r}=Wk(this._heartbeatsCache.heartbeats),i=Dg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gh(){return new Date().toISOString().substring(0,10)}function Wk(e,t=$k){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),vh(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vk{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N_()?O_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function vh(e){return Dg(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(e){ca(new Xr("platform-logger",t=>new ok(t),"PRIVATE")),ca(new Xr("heartbeat",t=>new Hk(t),"PRIVATE")),Fr(Hu,ph,e),Fr(Hu,ph,"esm2017"),Fr("fire-js","")}Kk("");function uf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Vg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yk=Vg,Kg=new Ta("auth","Firebase",Vg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Fg("@firebase/auth");function Gk(e,...t){ss.logLevel<=te.WARN&&ss.warn(`Auth (${Pa}): ${e}`,...t)}function To(e,...t){ss.logLevel<=te.ERROR&&ss.error(`Auth (${Pa}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,...t){throw cf(e,...t)}function xt(e,...t){return cf(e,...t)}function Qk(e,t,n){const r=Object.assign(Object.assign({},Yk()),{[t]:n});return new Ta("auth","Firebase",r).create(t,{appName:e.name})}function cf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Kg.create(e,...t)}function $(e,t,...n){if(!e)throw cf(t,...n)}function Ft(e){const t="INTERNAL ASSERTION FAILED: "+e;throw To(t),new Error(t)}function Yt(e,t){e||Ft(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function qk(){return yh()==="http:"||yh()==="https:"}function yh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qk()||P_()||"connection"in navigator)?navigator.onLine:!0}function Jk(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,n){this.shortDelay=t,this.longDelay=n,Yt(n>t,"Short delay should be less than long delay!"),this.isMobile=x_()||R_()}get(){return Xk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(e,t){Yt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=new Ra(3e4,6e4);function ii(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ai(e,t,n,r,i={}){return Gg(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=xa(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Yg.fetch()(Qg(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Gg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Zk),t);try{const i=new tE(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw ro(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ro(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw ro(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qk(e,c,u);vt(e,c)}}catch(i){if(i instanceof Dn)throw i;vt(e,"network-request-failed",{message:String(i)})}}async function Aa(e,t,n,r,i={}){const a=await ai(e,t,n,r,i);return"mfaPendingCredential"in a&&vt(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Qg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ff(e.config,i):`${e.config.apiScheme}://${i}`}class tE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),eE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ro(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(e,t){return ai(e,"POST","/v1/accounts:delete",t)}async function rE(e,t){return ai(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function iE(e,t=!1){const n=Zt(e),r=await n.getIdToken(t),i=df(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Hi(Ol(i.auth_time)),issuedAtTime:Hi(Ol(i.iat)),expirationTime:Hi(Ol(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ol(e){return Number(e)*1e3}function df(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lg(n);return i?JSON.parse(i):(To("Failed to decode base64 JWT payload"),null)}catch(i){return To("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aE(e){const t=df(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Dn&&oE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function oE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hi(this.lastLoginAt),this.creationTime=Hi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(e){var t;const n=e.auth,r=await e.getIdToken(),i=await da(e,rE(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?cE(a.providerUserInfo):[],s=uE(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new qg(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function lE(e){const t=Zt(e);await ls(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function uE(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function cE(e){return e.map(t=>{var{providerId:n}=t,r=uf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(e,t){const n=await Gg(e,{},async()=>{const r=xa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=Qg(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Yg.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):aE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return $(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await fE(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new ha;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&($(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ha,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Qn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=uf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new qg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await da(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return iE(this,t)}reload(){return lE(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Qn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ls(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await da(this,nE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(s=n.tenantId)!==null&&s!==void 0?s:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:S,providerData:C,stsTokenManager:T}=n;$(m&&T,t,"internal-error");const x=ha.fromJSON(this.name,T);$(typeof m=="string",t,"internal-error"),nn(f,t.name),nn(h,t.name),$(typeof y=="boolean",t,"internal-error"),$(typeof S=="boolean",t,"internal-error"),nn(v,t.name),nn(_,t.name),nn(w,t.name),nn(g,t.name),nn(p,t.name),nn(d,t.name);const V=new Qn({uid:m,auth:t,email:h,emailVerified:y,displayName:f,isAnonymous:S,photoURL:_,phoneNumber:v,tenantId:w,stsTokenManager:x,createdAt:p,lastLoginAt:d});return C&&Array.isArray(C)&&(V.providerData=C.map(B=>Object.assign({},B))),g&&(V._redirectEventId=g),V}static async _fromIdTokenResponse(t,n,r=!1){const i=new ha;i.updateFromServerResponse(n);const a=new Qn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ls(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Map;function zt(e){Yt(e instanceof Function,"Expected a class definition");let t=wh.get(e);return t?(Yt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,wh.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Xg.type="NONE";const _h=Xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(e,t,n){return`firebase:${e}:${t}:${n}`}class zr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=xo(this.userKey,i.apiKey,a),this.fullPersistenceKey=xo("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Qn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new zr(zt(_h),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||zt(_h);const o=xo(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Qn._fromJSON(t,c);u!==a&&(s=f),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new zr(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new zr(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ev(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Jg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nv(t))return"Blackberry";if(rv(t))return"Webos";if(hf(t))return"Safari";if((t.includes("chrome/")||Zg(t))&&!t.includes("edge/"))return"Chrome";if(tv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jg(e=Me()){return/firefox\//i.test(e)}function hf(e=Me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Zg(e=Me()){return/crios\//i.test(e)}function ev(e=Me()){return/iemobile/i.test(e)}function tv(e=Me()){return/android/i.test(e)}function nv(e=Me()){return/blackberry/i.test(e)}function rv(e=Me()){return/webos/i.test(e)}function Us(e=Me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dE(e=Me()){var t;return Us(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function hE(){return A_()&&document.documentMode===10}function iv(e=Me()){return Us(e)||tv(e)||rv(e)||nv(e)||/windows phone/i.test(e)||ev(e)}function pE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(e,t=[]){let n;switch(e){case"Browser":n=kh(Me());break;case"Worker":n=`${kh(Me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pa}/${r}`}async function ov(e,t){return ai(e,"GET","/v2/recaptchaConfig",ii(e,t))}function Eh(e){return e!==void 0&&e.enterprise!==void 0}class sv{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function lv(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=xt("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",mE().appendChild(r)})}function gE(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const vE="https://www.google.com/recaptcha/enterprise.js?render=",yE="recaptcha-enterprise",wE="NO_RECAPTCHA";class uv{constructor(t){this.type=yE,this.auth=oi(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{ov(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const u=new sv(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{s(l)})})}function i(a,o,s){const l=window.grecaptcha;Eh(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:t}).then(u=>{o(u)}).catch(()=>{o(wE)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(s=>{if(!n&&Eh(window.grecaptcha))i(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}lv(vE+s).then(()=>{i(s,a,o)}).catch(l=>{o(l)})}}).catch(s=>{o(s)})})}}async function us(e,t,n,r=!1){const i=new uv(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sh(this),this.idTokenSubscription=new Sh(this),this.beforeStateQueue=new _E(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ls(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Jk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Zt(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(t))})}async initializeRecaptchaConfig(){const t=await ov(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new sv(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new uv(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ta("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&zt(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>a(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=av(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Gk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function oi(e){return Zt(e)}class Sh{constructor(t){this.auth=t,this.observer=null,this.addObserver=F_(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(e,t){const n=$g(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(as(a,t??{}))return i;vt(i,"already-initialized")}return n.initialize({options:t})}function SE(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function IE(e,t,n){const r=oi(e);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=cv(t),{host:o,port:s}=bE(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||CE()}function cv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function bE(e){const t=cv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Ih(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:Ih(o)}}}function Ih(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function CE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(t){return Ft("not implemented")}_linkToIdToken(t,n){return Ft("not implemented")}_getReauthenticationResolver(t){return Ft("not implemented")}}async function TE(e,t){return ai(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(e,t){return Aa(e,"POST","/v1/accounts:signInWithPassword",ii(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xE(e,t){return Aa(e,"POST","/v1/accounts:signInWithEmailLink",ii(e,t))}async function PE(e,t){return Aa(e,"POST","/v1/accounts:signInWithEmailLink",ii(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends pf{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new pa(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new pa(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await us(t,r,"signInWithPassword");return Dl(t,i)}else return Dl(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const a=await us(t,r,"signInWithPassword");return Dl(t,a)}else return Promise.reject(i)});case"emailLink":return xE(t,{email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return TE(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PE(t,{idToken:n,email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(e,t){return Aa(e,"POST","/v1/accounts:signInWithIdp",ii(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="http://localhost";class nr extends pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new nr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=uf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new nr(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return jr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,jr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,jr(t,n)}buildRequest(){const t={requestUri:RE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=xa(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NE(e){const t=Ri(Ai(e)).link,n=t?Ri(Ai(t)).deep_link_id:null,r=Ri(Ai(e)).deep_link_id;return(r?Ri(Ai(r)).link:null)||r||n||t||e}class mf{constructor(t){var n,r,i,a,o,s;const l=Ri(Ai(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=AE((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=NE(t);try{return new mf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(t,n){return pa._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=mf.parseLink(n);return $(r,"argument-error"),pa._fromEmailAndCode(t,r.code,r.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends fv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Na{constructor(){super("facebook.com")}static credential(t){return nr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return un.credentialFromTaggedObject(t)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return un.credential(t.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Na{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return nr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Na{constructor(){super("github.com")}static credential(t){return nr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fn.credentialFromTaggedObject(t)}static credentialFromError(t){return fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fn.credential(t.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Na{constructor(){super("twitter.com")}static credential(t,n){return nr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return dn.credentialFromTaggedObject(t)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(e,t){return Aa(e,"POST","/v1/accounts:signUp",ii(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await Qn._fromIdTokenResponse(t,r,i),o=bh(r);return new rr({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=bh(r);return new rr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function bh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Dn{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new cs(t,n,r,i)}}function dv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(e,a,t,r):a})}async function OE(e,t,n=!1){const r=await da(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return rr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await da(e,dv(r,i,t,e),n);$(a.idToken,r,"internal-error");const o=df(a.idToken);$(o,r,"internal-error");const{sub:s}=o;return $(e.uid===s,r,"user-mismatch"),rr._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(e,t,n=!1){const r="signIn",i=await dv(e,r,t),a=await rr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function LE(e,t){return hv(oi(e),t)}async function ME(e,t,n){var r;const i=oi(e),a={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await us(i,a,"signUpPassword");o=Ll(i,u)}else o=Ll(i,a).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await us(i,a,"signUpPassword");return Ll(i,c)}else return Promise.reject(u)});const s=await o.catch(u=>Promise.reject(u)),l=await rr._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(l.user),l}function UE(e,t,n){return LE(Zt(e),si.credential(t,n))}function FE(e,t,n,r){return Zt(e).onIdTokenChanged(t,n,r)}function zE(e,t,n){return Zt(e).beforeAuthStateChanged(t,n)}function jE(e,t,n,r){return Zt(e).onAuthStateChanged(t,n,r)}function $E(e){return Zt(e).signOut()}const fs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fs,"1"),this.storage.removeItem(fs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(){const e=Me();return hf(e)||Us(e)}const HE=1e3,WE=10;class mv extends pv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BE()&&pE(),this.fallbackToPolling=iv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);hE()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,WE):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},HE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}mv.type="LOCAL";const VE=mv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv extends pv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}gv.type="SESSION";const vv=gv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Fs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await KE(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=gf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(h.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function GE(e){Pt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function QE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qE(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function XE(){return yv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="firebaseLocalStorageDb",JE=1,ds="firebaseLocalStorage",_v="fbase_key";class Oa{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zs(e,t){return e.transaction([ds],t?"readwrite":"readonly").objectStore(ds)}function ZE(){const e=indexedDB.deleteDatabase(wv);return new Oa(e).toPromise()}function Yu(){const e=indexedDB.open(wv,JE);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ds,{keyPath:_v})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ds)?t(r):(r.close(),await ZE(),t(await Yu()))})})}async function Ch(e,t,n){const r=zs(e,!0).put({[_v]:t,value:n});return new Oa(r).toPromise()}async function eS(e,t){const n=zs(e,!1).get(t),r=await new Oa(n).toPromise();return r===void 0?null:r.value}function Th(e,t){const n=zs(e,!0).delete(t);return new Oa(n).toPromise()}const tS=800,nS=3;class kv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>nS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fs._getInstance(XE()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await QE(),!this.activeServiceWorker)return;this.sender=new YE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||qE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Yu();return await Ch(t,fs,"1"),await Th(t,fs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ch(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>eS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Th(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=zs(i,!1).getAll();return new Oa(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kv.type="LOCAL";const rS=kv;new Ra(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(e,t){return t?zt(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends pf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return jr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return jr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return jr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function aS(e){return hv(e.auth,new vf(e),e.bypassAuthState)}function oS(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),DE(n,new vf(e),e.bypassAuthState)}async function sS(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),OE(n,new vf(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return aS;case"linkViaPopup":case"linkViaRedirect":return sS;case"reauthViaPopup":case"reauthViaRedirect":return oS;default:vt(this.auth,"internal-error")}}resolve(t){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=new Ra(2e3,1e4);class Tr extends Ev{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const t=gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,lS.get())};t()}}Tr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="pendingRedirect",Po=new Map;class cS extends Ev{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Po.get(this.auth._key());if(!t){try{const r=await fS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Po.set(this.auth._key(),t)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fS(e,t){const n=pS(t),r=hS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function dS(e,t){Po.set(e._key(),t)}function hS(e){return zt(e._redirectPersistence)}function pS(e){return xo(uS,e.config.apiKey,e.name)}async function mS(e,t,n=!1){const r=oi(e),i=iS(r,t),o=await new cS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=10*60*1e3;class vS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!yS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Sv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=gS&&this.cachedEventUids.clear(),this.cachedEventUids.has(xh(t))}saveEventToCache(t){this.cachedEventUids.add(xh(t)),this.lastProcessedEventTime=Date.now()}}function xh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Sv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function yS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(e,t={}){return ai(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kS=/^https?/;async function ES(e){if(e.config.emulator)return;const{authorizedDomains:t}=await wS(e);for(const n of t)try{if(SS(n))return}catch{}vt(e,"unauthorized-domain")}function SS(e){const t=Ku(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kS.test(n))return!1;if(_S.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=new Ra(3e4,6e4);function Ph(){const e=Pt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function bS(e){return new Promise((t,n)=>{var r,i,a;function o(){Ph(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ph(),n(xt(e,"network-request-failed"))},timeout:IS.get()})}if(!((i=(r=Pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=Pt().gapi)===null||a===void 0)&&a.load)o();else{const s=gE("iframefcb");return Pt()[s]=()=>{gapi.load?o():n(xt(e,"network-request-failed"))},lv(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Ro=null,t})}let Ro=null;function CS(e){return Ro=Ro||bS(e),Ro}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new Ra(5e3,15e3),xS="__/auth/iframe",PS="emulator/auth/iframe",RS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NS(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ff(t,PS):`https://${e.config.authDomain}/${xS}`,r={apiKey:t.apiKey,appName:e.name,v:Pa},i=AS.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${xa(r).slice(1)}`}async function OS(e){const t=await CS(e),n=Pt().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:NS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RS,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=xt(e,"network-request-failed"),s=Pt().setTimeout(()=>{a(o)},TS.get());function l(){Pt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LS=500,MS=600,US="_blank",FS="http://localhost";class Rh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zS(e,t,n,r=LS,i=MS){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},DS),{width:r.toString(),height:i.toString(),top:a,left:o}),u=Me().toLowerCase();n&&(s=Zg(u)?US:n),Jg(u)&&(t=t||FS,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[v,_])=>`${h}${v}=${_},`,"");if(dE(u)&&s!=="_self")return jS(t||"",s),new Rh(null);const f=window.open(t||"",s,c);$(f,e,"popup-blocked");try{f.focus()}catch{}return new Rh(f)}function jS(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="__/auth/handler",BS="emulator/auth/handler",HS=encodeURIComponent("fac");async function Ah(e,t,n,r,i,a){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Pa,eventId:i};if(t instanceof fv){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",U_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(a||{}))o[c]=f}if(t instanceof Na){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${HS}=${encodeURIComponent(l)}`:"";return`${WS(e)}?${xa(s).slice(1)}${u}`}function WS({config:e}){return e.emulator?ff(e,BS):`https://${e.authDomain}/${$S}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="webStorageSupport";class VS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vv,this._completeRedirectFn=mS,this._overrideRedirectResult=dS}async _openPopup(t,n,r,i){var a;Yt((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Ah(t,n,r,Ku(),i);return zS(t,o,gf())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await Ah(t,n,r,Ku(),i);return GE(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await OS(t),r=new vS(t);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ml,{type:Ml},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Ml];o!==void 0&&n(!!o),vt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ES(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return iv()||hf()||Us()}}const KS=VS;var Nh="@firebase/auth",Oh="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function QS(e){ca(new Xr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:av(e)},u=new kE(r,i,a,l);return SE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ca(new Xr("auth-internal",t=>{const n=oi(t.getProvider("auth").getImmediate());return(r=>new YS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fr(Nh,Oh,GS(e)),Fr(Nh,Oh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=5*60,XS=Ug("authIdTokenMaxAge")||qS;let Dh=null;const JS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XS)return;const i=n==null?void 0:n.token;Dh!==i&&(Dh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ZS(e=Uk()){const t=$g(e,"auth");if(t.isInitialized())return t.getImmediate();const n=EE(e,{popupRedirectResolver:KS,persistence:[rS,VE,vv]}),r=Ug("authTokenSyncURL");if(r){const a=JS(r);zE(n,a,()=>a(n.currentUser)),FE(n,o=>a(o))}const i=C_("auth");return i&&IE(n,`http://${i}`),n}QS("Browser");var eI="firebase",tI="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fr(eI,tI,"app");const nI={apiKey:"AIzaSyBVOGyx-FwpxYpXXLUuF2uOmg91z2kmDjg",authDomain:"shop-a2ea1.firebaseapp.com",projectId:"shop-a2ea1",storageBucket:"shop-a2ea1.appspot.com",messagingSenderId:"518681984117",appId:"1:518681984117:web:edfe793e3d8c82a8f84c3c"},rI=Bg(nI),Da=P.createContext(null),io=ZS(rI),iI=({children:e})=>{const[t,n]=P.useState(null),[r,i]=P.useState(!0),a=(u,c)=>(i(!0),ME(io,u,c)),o=(u,c)=>(i(!0),UE(io,u,c)),s=()=>$E(io);P.useEffect(()=>{const u=jE(io,c=>{n(c),i(!1)});return()=>u()},[]);const l={user:t,loading:r,createUser:a,login:o,logOut:s};return R(Da.Provider,{value:l,children:e})},aI=()=>{const{user:e,logOut:t}=P.useContext(Da),n=()=>{t()};return q("nav",{className:"header",children:[R("img",{src:V1,alt:""}),q("div",{children:[R(Lt,{to:"/",children:"Shop"}),R(Lt,{to:"/orders",children:"Orders"}),R(Lt,{to:"/inventory",children:"Inventory"}),R(Lt,{to:"/login",children:"Login"}),R(Lt,{to:"/signup",children:"Sign Up"}),e&&q("span",{className:"text-yellow-400",children:[" ",e.email," ",R("button",{onClick:n,children:"Sign Out"})]})]})]})},oI=e=>{let t=js();const n=t[e];if(!n)t[e]=1;else{const r=n+1;t[e]=r}localStorage.setItem("shopping-cart",JSON.stringify(t))},sI=e=>{const t=js();e in t&&(delete t[e],localStorage.setItem("shopping-cart",JSON.stringify(t)))},js=()=>{let e={};const t=localStorage.getItem("shopping-cart");return t&&(e=JSON.parse(t)),e},Iv=()=>{localStorage.removeItem("shopping-cart")};function Lh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lh(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hs(e){return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hs(e)}function lI(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function uI(e,t,n){return t&&Mh(e.prototype,t),n&&Mh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yf(e,t){return fI(e)||hI(e,t)||bv(e,t)||mI()}function La(e){return cI(e)||dI(e)||bv(e)||pI()}function cI(e){if(Array.isArray(e))return Gu(e)}function fI(e){if(Array.isArray(e))return e}function dI(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hI(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function bv(e,t){if(e){if(typeof e=="string")return Gu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gu(e,t)}}function Gu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Uh=function(){},wf={},Cv={},Tv=null,xv={mark:Uh,measure:Uh};try{typeof window<"u"&&(wf=window),typeof document<"u"&&(Cv=document),typeof MutationObserver<"u"&&(Tv=MutationObserver),typeof performance<"u"&&(xv=performance)}catch{}var gI=wf.navigator||{},Fh=gI.userAgent,zh=Fh===void 0?"":Fh,xn=wf,se=Cv,jh=Tv,ao=xv;xn.document;var en=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Pv=~zh.indexOf("MSIE")||~zh.indexOf("Trident/"),oo,so,lo,uo,co,Gt="___FONT_AWESOME___",Qu=16,Rv="fa",Av="svg-inline--fa",ir="data-fa-i2svg",qu="data-fa-pseudo-element",vI="data-fa-pseudo-element-pending",_f="data-prefix",kf="data-icon",$h="fontawesome-i2svg",yI="async",wI=["HTML","HEAD","STYLE","SCRIPT"],Nv=function(){try{return!0}catch{return!1}}(),ae="classic",he="sharp",Ef=[ae,he];function Ma(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ae]}})}var ma=Ma((oo={},ke(oo,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ke(oo,he,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),oo)),ga=Ma((so={},ke(so,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ke(so,he,{solid:"fass",regular:"fasr"}),so)),va=Ma((lo={},ke(lo,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ke(lo,he,{fass:"fa-solid",fasr:"fa-regular"}),lo)),_I=Ma((uo={},ke(uo,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ke(uo,he,{"fa-solid":"fass","fa-regular":"fasr"}),uo)),kI=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Ov="fa-layers-text",EI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,SI=Ma((co={},ke(co,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ke(co,he,{900:"fass",400:"fasr"}),co)),Dv=[1,2,3,4,5,6,7,8,9,10],II=Dv.concat([11,12,13,14,15,16,17,18,19,20]),bI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ya=new Set;Object.keys(ga[ae]).map(ya.add.bind(ya));Object.keys(ga[he]).map(ya.add.bind(ya));var CI=[].concat(Ef,La(ya),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vn.GROUP,Vn.SWAP_OPACITY,Vn.PRIMARY,Vn.SECONDARY]).concat(Dv.map(function(e){return"".concat(e,"x")})).concat(II.map(function(e){return"w-".concat(e)})),Wi=xn.FontAwesomeConfig||{};function TI(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function xI(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var PI=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];PI.forEach(function(e){var t=yf(e,2),n=t[0],r=t[1],i=xI(TI(n));i!=null&&(Wi[r]=i)})}var Lv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Rv,replacementClass:Av,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wi.familyPrefix&&(Wi.cssPrefix=Wi.familyPrefix);var Jr=A(A({},Lv),Wi);Jr.autoReplaceSvg||(Jr.observeMutations=!1);var D={};Object.keys(Lv).forEach(function(e){Object.defineProperty(D,e,{enumerable:!0,set:function(n){Jr[e]=n,Vi.forEach(function(r){return r(D)})},get:function(){return Jr[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(t){Jr.cssPrefix=t,Vi.forEach(function(n){return n(D)})},get:function(){return Jr.cssPrefix}});xn.FontAwesomeConfig=D;var Vi=[];function RI(e){return Vi.push(e),function(){Vi.splice(Vi.indexOf(e),1)}}var rn=Qu,bt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function AI(e){if(!(!e||!en)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return se.head.insertBefore(t,r),e}}var NI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wa(){for(var e=12,t="";e-- >0;)t+=NI[Math.random()*62|0];return t}function li(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Sf(e){return e.classList?li(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Mv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function OI(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Mv(e[n]),'" ')},"").trim()}function $s(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function If(e){return e.size!==bt.size||e.x!==bt.x||e.y!==bt.y||e.rotate!==bt.rotate||e.flipX||e.flipY}function DI(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function LI(e){var t=e.transform,n=e.width,r=n===void 0?Qu:n,i=e.height,a=i===void 0?Qu:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Pv?l+="translate(".concat(t.x/rn-r/2,"em, ").concat(t.y/rn-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/rn,"em), calc(-50% + ").concat(t.y/rn,"em)) "):l+="translate(".concat(t.x/rn,"em, ").concat(t.y/rn,"em) "),l+="scale(".concat(t.size/rn*(t.flipX?-1:1),", ").concat(t.size/rn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var MI=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Uv(){var e=Rv,t=Av,n=D.cssPrefix,r=D.replacementClass,i=MI;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Bh=!1;function Ul(){D.autoAddCss&&!Bh&&(AI(Uv()),Bh=!0)}var UI={mixout:function(){return{dom:{css:Uv,insertCss:Ul}}},hooks:function(){return{beforeDOMElementCreation:function(){Ul()},beforeI2svg:function(){Ul()}}}},Qt=xn||{};Qt[Gt]||(Qt[Gt]={});Qt[Gt].styles||(Qt[Gt].styles={});Qt[Gt].hooks||(Qt[Gt].hooks={});Qt[Gt].shims||(Qt[Gt].shims=[]);var ht=Qt[Gt],Fv=[],FI=function e(){se.removeEventListener("DOMContentLoaded",e),ps=1,Fv.map(function(t){return t()})},ps=!1;en&&(ps=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),ps||se.addEventListener("DOMContentLoaded",FI));function zI(e){en&&(ps?setTimeout(e,0):Fv.push(e))}function Ua(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Mv(e):"<".concat(t," ").concat(OI(r),">").concat(a.map(Ua).join(""),"</").concat(t,">")}function Hh(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var jI=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Fl=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?jI(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function $I(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Xu(e){var t=$I(e);return t.length===1?t[0].toString(16):null}function BI(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Wh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ju(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Wh(t);typeof ht.hooks.addPack=="function"&&!i?ht.hooks.addPack(e,Wh(t)):ht.styles[e]=A(A({},ht.styles[e]||{}),a),e==="fas"&&Ju("fa",t)}var fo,ho,po,xr=ht.styles,HI=ht.shims,WI=(fo={},ke(fo,ae,Object.values(va[ae])),ke(fo,he,Object.values(va[he])),fo),bf=null,zv={},jv={},$v={},Bv={},Hv={},VI=(ho={},ke(ho,ae,Object.keys(ma[ae])),ke(ho,he,Object.keys(ma[he])),ho);function KI(e){return~CI.indexOf(e)}function YI(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!KI(i)?i:null}var Wv=function(){var t=function(a){return Fl(xr,function(o,s,l){return o[l]=Fl(s,a,{}),o},{})};zv=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),jv=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Hv=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in xr||D.autoFetchSvg,r=Fl(HI,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});$v=r.names,Bv=r.unicodes,bf=Bs(D.styleDefault,{family:D.familyDefault})};RI(function(e){bf=Bs(e.styleDefault,{family:D.familyDefault})});Wv();function Cf(e,t){return(zv[e]||{})[t]}function GI(e,t){return(jv[e]||{})[t]}function Kn(e,t){return(Hv[e]||{})[t]}function Vv(e){return $v[e]||{prefix:null,iconName:null}}function QI(e){var t=Bv[e],n=Cf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Pn(){return bf}var Tf=function(){return{prefix:null,iconName:null,rest:[]}};function Bs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ae:n,i=ma[r][e],a=ga[r][e]||ga[r][i],o=e in ht.styles?e:null;return a||o||null}var Vh=(po={},ke(po,ae,Object.keys(va[ae])),ke(po,he,Object.keys(va[he])),po);function Hs(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ke(t,ae,"".concat(D.cssPrefix,"-").concat(ae)),ke(t,he,"".concat(D.cssPrefix,"-").concat(he)),t),o=null,s=ae;(e.includes(a[ae])||e.some(function(u){return Vh[ae].includes(u)}))&&(s=ae),(e.includes(a[he])||e.some(function(u){return Vh[he].includes(u)}))&&(s=he);var l=e.reduce(function(u,c){var f=YI(D.cssPrefix,c);if(xr[c]?(c=WI[s].includes(c)?_I[s][c]:c,o=c,u.prefix=c):VI[s].indexOf(c)>-1?(o=c,u.prefix=Bs(c,{family:s})):f?u.iconName=f:c!==D.replacementClass&&c!==a[ae]&&c!==a[he]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?Vv(u.iconName):{},v=Kn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||v||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!xr.far&&xr.fas&&!D.autoFetchSvg&&(u.prefix="fas")}return u},Tf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===he&&(xr.fass||D.autoFetchSvg)&&(l.prefix="fass",l.iconName=Kn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Pn()||"fas"),l}var qI=function(){function e(){lI(this,e),this.definitions={}}return uI(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),Ju(s,o[s]);var l=va[ae][s];l&&Ju(l,o[s]),Wv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Kh=[],Pr={},$r={},XI=Object.keys($r);function JI(e,t){var n=t.mixoutsTo;return Kh=e,Pr={},Object.keys($r).forEach(function(r){XI.indexOf(r)===-1&&delete $r[r]}),Kh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),hs(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Pr[o]||(Pr[o]=[]),Pr[o].push(a[o])})}r.provides&&r.provides($r)}),n}function Zu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Pr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ar(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Pr[e]||[];i.forEach(function(a){a.apply(null,n)})}function qt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $r[e]?$r[e].apply(null,t):void 0}function ec(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Pn();if(t)return t=Kn(n,t)||t,Hh(Kv.definitions,n,t)||Hh(ht.styles,n,t)}var Kv=new qI,ZI=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,ar("noAuto")},eb={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return en?(ar("beforeI2svg",t),qt("pseudoElements2svg",t),qt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,zI(function(){nb({autoReplaceSvgRoot:n}),ar("watch",t)})}},tb={icon:function(t){if(t===null)return null;if(hs(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Kn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Bs(t[0]);return{prefix:r,iconName:Kn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(D.cssPrefix,"-"))>-1||t.match(kI))){var i=Hs(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Pn(),iconName:Kn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Pn();return{prefix:a,iconName:Kn(a,t)||t}}}},Je={noAuto:ZI,config:D,dom:eb,parse:tb,library:Kv,findIconDefinition:ec,toHtml:Ua},nb=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(ht.styles).length>0||D.autoFetchSvg)&&en&&D.autoReplaceSvg&&Je.dom.i2svg({node:r})};function Ws(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ua(r)})}}),Object.defineProperty(e,"node",{get:function(){if(en){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function rb(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(If(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=$s(A(A({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function ib(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:o}),children:r}]}]}function xf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,v=h===void 0?!1:h,_=r.found?r:n,w=_.width,g=_.height,p=i==="fak",d=[D.replacementClass,a?"".concat(D.cssPrefix,"-").concat(a):""].filter(function(V){return f.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(f.classes).join(" "),m={children:[],attributes:A(A({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(g)})},y=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/g*16*.0625,"em")}:{};v&&(m.attributes[ir]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||wa())},children:[l]}),delete m.attributes.title);var S=A(A({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},y),f.styles)}),C=r.found&&n.found?qt("generateAbstractMask",S)||{children:[],attributes:{}}:qt("generateAbstractIcon",S)||{children:[],attributes:{}},T=C.children,x=C.attributes;return S.children=T,S.attributes=x,s?ib(S):rb(S)}function Yh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[ir]="");var c=A({},o.styles);If(i)&&(c.transform=LI({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=$s(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function ab(e){var t=e.content,n=e.title,r=e.extra,i=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=$s(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zl=ht.styles;function tc(e){var t=e[0],n=e[1],r=e.slice(4),i=yf(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(Vn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Vn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Vn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var ob={found:!1,width:512,height:512};function sb(e,t){!Nv&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function nc(e,t){var n=t;return t==="fa"&&D.styleDefault!==null&&(t=Pn()),new Promise(function(r,i){if(qt("missingIconAbstract"),n==="fa"){var a=Vv(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&zl[t]&&zl[t][e]){var o=zl[t][e];return r(tc(o))}sb(e,t),r(A(A({},ob),{},{icon:D.showMissingIcons&&e?qt("missingIconAbstract")||{}:{}}))})}var Gh=function(){},rc=D.measurePerformance&&ao&&ao.mark&&ao.measure?ao:{mark:Gh,measure:Gh},Ni='FA "6.3.0"',lb=function(t){return rc.mark("".concat(Ni," ").concat(t," begins")),function(){return Yv(t)}},Yv=function(t){rc.mark("".concat(Ni," ").concat(t," ends")),rc.measure("".concat(Ni," ").concat(t),"".concat(Ni," ").concat(t," begins"),"".concat(Ni," ").concat(t," ends"))},Pf={begin:lb,end:Yv},Ao=function(){};function Qh(e){var t=e.getAttribute?e.getAttribute(ir):null;return typeof t=="string"}function ub(e){var t=e.getAttribute?e.getAttribute(_f):null,n=e.getAttribute?e.getAttribute(kf):null;return t&&n}function cb(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function fb(){if(D.autoReplaceSvg===!0)return No.replace;var e=No[D.autoReplaceSvg];return e||No.replace}function db(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function hb(e){return se.createElement(e)}function Gv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?db:hb:n;if(typeof e=="string")return se.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Gv(o,{ceFn:r}))}),i}function pb(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var No={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Gv(i),n)}),n.getAttribute(ir)===null&&D.keepOriginalSource){var r=se.createComment(pb(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Sf(n).indexOf(D.replacementClass))return No.replace(t);var i=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===D.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Ua(s)}).join(`
`);n.setAttribute(ir,""),n.innerHTML=o}};function qh(e){e()}function Qv(e,t){var n=typeof t=="function"?t:Ao;if(e.length===0)n();else{var r=qh;D.mutateApproach===yI&&(r=xn.requestAnimationFrame||qh),r(function(){var i=fb(),a=Pf.begin("mutate");e.map(i),a(),n()})}}var Rf=!1;function qv(){Rf=!0}function ic(){Rf=!1}var ms=null;function Xh(e){if(jh&&D.observeMutations){var t=e.treeCallback,n=t===void 0?Ao:t,r=e.nodeCallback,i=r===void 0?Ao:r,a=e.pseudoElementsCallback,o=a===void 0?Ao:a,s=e.observeMutationsRoot,l=s===void 0?se:s;ms=new jh(function(u){if(!Rf){var c=Pn();li(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Qh(f.addedNodes[0])&&(D.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&D.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Qh(f.target)&&~bI.indexOf(f.attributeName))if(f.attributeName==="class"&&ub(f.target)){var h=Hs(Sf(f.target)),v=h.prefix,_=h.iconName;f.target.setAttribute(_f,v||c),_&&f.target.setAttribute(kf,_)}else cb(f.target)&&i(f.target)})}}),en&&ms.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mb(){ms&&ms.disconnect()}function gb(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function vb(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Hs(Sf(e));return i.prefix||(i.prefix=Pn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=GI(i.prefix,e.innerText)||Cf(i.prefix,Xu(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function yb(e){var t=li(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||wa()):(t["aria-hidden"]="true",t.focusable="false")),t}function wb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vb(e),r=n.iconName,i=n.prefix,a=n.rest,o=yb(e),s=Zu("parseNodeAttributes",{},e),l=t.styleParser?gb(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:bt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var _b=ht.styles;function Xv(e){var t=D.autoReplaceSvg==="nest"?Jh(e,{styleParser:!1}):Jh(e);return~t.extra.classes.indexOf(Ov)?qt("generateLayersText",e,t):qt("generateSvgReplacementMutation",e,t)}var Rn=new Set;Ef.map(function(e){Rn.add("fa-".concat(e))});Object.keys(ma[ae]).map(Rn.add.bind(Rn));Object.keys(ma[he]).map(Rn.add.bind(Rn));Rn=La(Rn);function Zh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!en)return Promise.resolve();var n=se.documentElement.classList,r=function(f){return n.add("".concat($h,"-").concat(f))},i=function(f){return n.remove("".concat($h,"-").concat(f))},a=D.autoFetchSvg?Rn:Ef.map(function(c){return"fa-".concat(c)}).concat(Object.keys(_b));a.includes("fa")||a.push("fa");var o=[".".concat(Ov,":not([").concat(ir,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(ir,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=li(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Pf.begin("onTree"),u=s.reduce(function(c,f){try{var h=Xv(f);h&&c.push(h)}catch(v){Nv||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){Qv(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function kb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xv(e).then(function(n){n&&Qv([n],t)})}function Eb(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ec(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ec(i||{})),e(r,A(A({},n),{},{mask:i}))}}var Sb=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?bt:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,v=n.titleId,_=v===void 0?null:v,w=n.classes,g=w===void 0?[]:w,p=n.attributes,d=p===void 0?{}:p,m=n.styles,y=m===void 0?{}:m;if(t){var S=t.prefix,C=t.iconName,T=t.icon;return Ws(A({type:"icon"},t),function(){return ar("beforeDOMElementCreation",{iconDefinition:t,params:n}),D.autoA11y&&(h?d["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(_||wa()):(d["aria-hidden"]="true",d.focusable="false")),xf({icons:{main:tc(T),mask:l?tc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:C,transform:A(A({},bt),i),symbol:o,title:h,maskId:c,titleId:_,extra:{attributes:d,styles:y,classes:g}})})}},Ib={mixout:function(){return{icon:Eb(Sb)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zh,n.nodeCallback=kb,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?se:r,a=n.callback,o=a===void 0?function(){}:a;return Zh(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(v,_){Promise.all([nc(i,s),c.iconName?nc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var g=yf(w,2),p=g[0],d=g[1];v([n,xf({icons:{main:p,mask:d},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:h,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=$s(s);l.length>0&&(i.style=l);var u;return If(o)&&(u=qt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},bb={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Ws({type:"layer"},function(){ar("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(La(a)).join(" ")},children:o}]})}}}},Cb={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Ws({type:"counter",content:n},function(){return ar("beforeDOMElementCreation",{content:n,params:r}),ab({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(La(s))}})})}}}},Tb={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?bt:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,v=h===void 0?{}:h;return Ws({type:"text",content:n},function(){return ar("beforeDOMElementCreation",{content:n,params:r}),Yh({content:n,transform:A(A({},bt),a),title:s,extra:{attributes:f,styles:v,classes:["".concat(D.cssPrefix,"-layers-text")].concat(La(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Pv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return D.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yh({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},xb=new RegExp('"',"ug"),ep=[1105920,1112319];function Pb(e){var t=e.replace(xb,""),n=BI(t,0),r=n>=ep[0]&&n<=ep[1],i=t.length===2?t[0]===t[1]:!1;return{value:Xu(i?t[0]:t),isSecondary:r||i}}function tp(e,t){var n="".concat(vI).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=li(e.children),o=a.filter(function(T){return T.getAttribute(qu)===t})[0],s=xn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(EI),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?he:ae,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ga[h][l[2].toLowerCase()]:SI[h][u],_=Pb(f),w=_.value,g=_.isSecondary,p=l[0].startsWith("FontAwesome"),d=Cf(v,w),m=d;if(p){var y=QI(w);y.iconName&&y.prefix&&(d=y.iconName,v=y.prefix)}if(d&&!g&&(!o||o.getAttribute(_f)!==v||o.getAttribute(kf)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var S=wb(),C=S.extra;C.attributes[qu]=t,nc(d,v).then(function(T){var x=xf(A(A({},S),{},{icons:{main:T,mask:Tf()},prefix:v,iconName:m,extra:C,watchable:!0})),V=se.createElement("svg");t==="::before"?e.insertBefore(V,e.firstChild):e.appendChild(V),V.outerHTML=x.map(function(B){return Ua(B)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Rb(e){return Promise.all([tp(e,"::before"),tp(e,"::after")])}function Ab(e){return e.parentNode!==document.head&&!~wI.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function np(e){if(en)return new Promise(function(t,n){var r=li(e.querySelectorAll("*")).filter(Ab).map(Rb),i=Pf.begin("searchPseudoElements");qv(),Promise.all(r).then(function(){i(),ic(),t()}).catch(function(){i(),ic(),n()})})}var Nb={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=np,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?se:r;D.searchPseudoElements&&np(i)}}},rp=!1,Ob={mixout:function(){return{dom:{unwatch:function(){qv(),rp=!0}}}},hooks:function(){return{bootstrap:function(){Xh(Zu("mutationObserverCallbacks",{}))},noAuto:function(){mb()},watch:function(n){var r=n.observeMutationsRoot;rp?ic():Xh(Zu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ip=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Db={mixout:function(){return{parse:{transform:function(n){return ip(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=ip(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:f,path:h};return{tag:"g",attributes:A({},v.outer),children:[{tag:"g",attributes:A({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),v.path)}]}]}}}},jl={x:0,y:0,width:"100%",height:"100%"};function ap(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Lb(e){return e.tag==="g"?e.children:[e]}var Mb={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Hs(i.split(" ").map(function(o){return o.trim()})):Tf();return a.prefix||(a.prefix=Pn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,h=o.icon,v=DI({transform:l,containerWidth:f,iconWidth:u}),_={tag:"rect",attributes:A(A({},jl),{},{fill:"white"})},w=c.children?{children:c.children.map(ap)}:{},g={tag:"g",attributes:A({},v.inner),children:[ap(A({tag:c.tag,attributes:A(A({},c.attributes),v.path)},w))]},p={tag:"g",attributes:A({},v.outer),children:[g]},d="mask-".concat(s||wa()),m="clip-".concat(s||wa()),y={tag:"mask",attributes:A(A({},jl),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,p]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:Lb(h)},y]};return r.push(S,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},jl)}),{children:r,attributes:i}}}},Ub={provides:function(t){var n=!1;xn.matchMedia&&(n=xn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Fb={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},zb=[UI,Ib,bb,Cb,Tb,Nb,Ob,Db,Mb,Ub,Fb];JI(zb,{mixoutsTo:Je});Je.noAuto;Je.config;Je.library;Je.dom;var ac=Je.parse;Je.findIconDefinition;Je.toHtml;var jb=Je.icon;Je.layer;Je.text;Je.counter;var Y={},$b={get exports(){return Y},set exports(e){Y=e}},Bb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Hb=Bb,Wb=Hb;function Jv(){}function Zv(){}Zv.resetWarningCache=Jv;var Vb=function(){function e(r,i,a,o,s,l){if(l!==Wb){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Zv,resetWarningCache:Jv};return n.PropTypes=n,n};$b.exports=Vb();function op(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function mn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?op(Object(n),!0).forEach(function(r){Rr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):op(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gs(e){return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gs(e)}function Rr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Yb(e,t){if(e==null)return{};var n=Kb(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function oc(e){return Gb(e)||Qb(e)||qb(e)||Xb()}function Gb(e){if(Array.isArray(e))return sc(e)}function Qb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qb(e,t){if(e){if(typeof e=="string")return sc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sc(e,t)}}function sc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jb(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,v=e.inverse,_=e.border,w=e.listItem,g=e.flip,p=e.size,d=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":v,"fa-border":_,"fa-li":w,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},Rr(t,"fa-".concat(p),typeof p<"u"&&p!==null),Rr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Rr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Rr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(S){return y[S]?S:null}).filter(function(S){return S})}function Zb(e){return e=e-0,e===e}function ey(e){return Zb(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var eC=["style"];function tC(e){return e.charAt(0).toUpperCase()+e.slice(1)}function nC(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=ey(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[tC(i)]=a:t[i]=a,t},{})}function ty(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ty(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=nC(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[ey(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=Yb(n,eC);return i.attrs.style=mn(mn({},i.attrs.style),o),e.apply(void 0,[t.tag,mn(mn({},i.attrs),s)].concat(oc(r)))}var ny=!1;try{ny=!0}catch{}function rC(){if(!ny&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function sp(e){if(e&&gs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ac.icon)return ac.icon(e);if(e===null)return null;if(e&&gs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function $l(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Rr({},e,t):{}}var ur=ys.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=sp(n),c=$l("classes",[].concat(oc(Jb(e)),oc(a.split(" ")))),f=$l("transform",typeof e.transform=="string"?ac.transform(e.transform):e.transform),h=$l("mask",sp(r)),v=jb(u,mn(mn(mn(mn({},c),f),h),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!v)return rC("Could not find icon",u),null;var _=v.abstract,w={ref:t};return Object.keys(e).forEach(function(g){ur.defaultProps.hasOwnProperty(g)||(w[g]=e[g])}),iC(_[0],w)});ur.displayName="FontAwesomeIcon";ur.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};ur.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var iC=ty.bind(null,ys.createElement),aC={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},ry=aC,oC={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},sC=oC;const iy=({cart:e,handleClearCart:t,children:n})=>{let r=0,i=0,a=0;for(const l of e)r=r+l.price*l.quantity,i=i+l.shipping,a=a+l.quantity;const o=r*7/100,s=r+i+o;return q("div",{className:"cart",children:[R("h4",{children:"Order Summary"}),q("p",{children:["Selected Items: ",a]}),q("p",{children:["Total Price: $",r]}),q("p",{children:["Shipping: $",i]}),q("p",{children:["Tax: $",o.toFixed(2)]}),q("h6",{children:["Grand Total: $",s.toFixed(2)," "]}),q("button",{onClick:t,className:"btn-clear-cart",children:[R("span",{children:"Clear Cart "}),R(ur,{icon:ry})]}),n]})};const lC=e=>{const{img:t,name:n,seller:r,ratings:i,price:a}=e.product,o=e.handleAddToCart;return q("div",{className:"product",children:[R("img",{src:t,alt:""}),q("div",{className:"product-info",children:[R("h6",{className:"product-name",children:n}),q("p",{children:["Price: $",a]}),q("p",{children:["Manufacturer: ",r]}),q("p",{children:["Rating: ",i," Stars"]})]}),q("button",{onClick:()=>o(e.product),className:"btn-cart",children:["Add to Cart",R(ur,{icon:sC})]})]})};const uC=()=>{const[e,t]=P.useState([]),[n,r]=P.useState([]);P.useEffect(()=>{fetch("products.json").then(o=>o.json()).then(o=>t(o))},[]),P.useEffect(()=>{const o=js(),s=[];for(const l in o){const u=e.find(c=>c.id===l);if(u){const c=o[l];u.quantity=c,s.push(u)}}r(s)},[e]);const i=o=>{let s=[];const l=n.find(u=>u.id===o.id);l?(l.quantity=l.quantity+1,s=[...n.filter(c=>c.id!==o.id),l]):(o.quantity=1,s=[...n,o]),r(s),oI(o.id)},a=()=>{r([]),Iv()};return q("div",{className:"shop-container",children:[R("div",{className:"products-container",children:e.map(o=>R(lC,{product:o,handleAddToCart:i},o.id))}),R("div",{className:"cart-container",children:R(iy,{cart:n,handleClearCart:a,children:R(Lt,{className:"proceed-link",to:"/orders",children:R("button",{className:"btn-proceed",children:"Review Order"})})})})]})};const cC=()=>q("div",{children:[R(aI,{}),R(i_,{})]});const fC=({product:e,handleRemoveFromCart:t})=>{const{id:n,img:r,price:i,name:a,quantity:o}=e;return q("div",{className:"review-item",children:[R("img",{src:r,alt:""}),q("div",{className:"review-details",children:[R("p",{className:"product-title",children:a}),q("p",{children:["Price: ",q("span",{className:"orange-text",children:["$",i]})]}),q("p",{children:["Order Quantity: ",R("span",{className:"orange-text",children:o})]})]}),R("button",{onClick:()=>t(n),className:"btn-delete",children:R(ur,{className:"delete-icon",icon:ry})})]})};const dC=()=>{const e=e_(),[t,n]=P.useState(e),r=a=>{const o=t.filter(s=>s.id!==a);n(o),sI(a)},i=()=>{n([]),Iv()};return q("div",{className:"shop-container",children:[R("div",{className:"review-container",children:t.map(a=>R(fC,{product:a,handleRemoveFromCart:r},a.id))}),R("div",{className:"cart-container",children:R(iy,{cart:t,handleClearCart:i,children:R(Lt,{className:"proceed-link",to:"/checkout",children:R("button",{className:"btn-proceed",children:"Proceed Checkout"})})})})]})},hC=()=>R("div",{children:R("h3",{children:"Inventory page"})}),pC=()=>{var s,l;const[e,t]=P.useState(!1),{login:n}=P.useContext(Da),r=of(),i=ri();console.log(i);const a=((l=(s=i.state)==null?void 0:s.from)==null?void 0:l.pathname)||"/";return R("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:q("div",{className:"bg-white p-8 rounded shadow-md w-full sm:w-96",children:[R("h2",{className:"text-3xl font-bold text-center mb-4 text-gray-800",children:"Login"}),q("form",{onSubmit:u=>{u.preventDefault();const c=u.target,f=c.email.value,h=c.password.value;n(f,h).then(v=>{console.log(v.user),c.reset(),r(a,{replace:!0})}).catch(v=>{console.log(v.message)})},children:[q("div",{className:"mb-4",children:[R("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),R("input",{type:"email",id:"email",name:"email",className:"mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-300",placeholder:"you@example.com",required:!0})]}),q("div",{className:"mb-4",children:[R("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),R("input",{type:e?"text":"password",id:"password",name:"password",className:"mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-300",placeholder:"********",required:!0}),R("p",{onClick:()=>t(!e),children:e?R("span",{children:"Hide"}):R("span",{children:"Show"})})]}),R("div",{className:"text-center",children:R("button",{type:"submit",className:"w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400",children:"Log In"})})]}),R("p",{className:"underline text-blue-500 mt-3 text-center",children:R(Lt,{to:"/signup",children:"New to Amazon?"})}),R("button",{className:"w-full bg-red-500 mt-5 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400",children:"Login with Google"})]})})},mC=async()=>{const t=await(await fetch("products.json")).json(),n=js(),r=[];for(const i in n){const a=t.find(o=>o.id===i);if(a){const o=n[i];a.quantity=o,r.push(a)}}return r},gC=()=>R("div",{children:R("h2",{children:"Checkout your order!!! page "})}),vC=()=>{const[e,t]=P.useState(""),{createUser:n}=P.useContext(Da);return R("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:q("div",{className:"bg-white p-8 rounded shadow-md w-full sm:w-96",children:[R("h2",{className:"text-3xl font-bold text-center mb-4 text-gray-800",children:"Sign Up"}),q("form",{onSubmit:i=>{i.preventDefault();const a=i.target,o=a.email.value,s=a.password.value,l=a.confirm.value;console.log(o,s,l),t(""),s!==l?t("Password did not match"):s.length<6&&t("Password must be at least 6 characters"),n(o,s).then(u=>{console.log(u.user)}).catch(u=>{console.log(u),t(u.message)})},children:[q("div",{className:"mb-4",children:[R("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),R("input",{type:"email",id:"email",name:"email",className:"mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-300",placeholder:"you@example.com",required:!0})]}),q("div",{className:"mb-4",children:[R("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),R("input",{type:"password",id:"password",name:"password",className:"mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-300",placeholder:"********",required:!0}),R("label",{htmlFor:"confirm",className:"block text-sm font-medium text-gray-700",children:"Confirm Password"}),R("input",{type:"password",id:"confirm",name:"confirm",className:"mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-300",placeholder:"********",required:!0})]}),q("p",{className:"text-red-700 mb-3",children:[" ",e]}),R("div",{className:"text-center",children:R("button",{type:"submit",className:"w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400",children:"Sign Up"})})]}),R("p",{className:"underline text-blue-500 mt-3 text-center",children:R(Lt,{to:"/login",children:"Already Have an account?"})}),R("button",{className:"w-full bg-red-400 mt-5 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400",children:"Login with Google"})]})})},yC=({children:e})=>{const{user:t,loading:n}=P.useContext(Da),r=ri();return console.log(r),n?R("div",{class:" mt-72 flex justify-center items-center",children:R("div",{class:"animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"})}):t?e:R(r_,{to:"/login",state:{from:r},replace:!0})},wC=h_([{path:"/",element:R(cC,{}),children:[{path:"/",element:R(uC,{})},{path:"orders",element:R(dC,{}),loader:mC},{path:"inventory",element:R(hC,{})},{path:"checkout",element:R(yC,{children:R(gC,{})})},{path:"login",element:R(pC,{})},{path:"/signup",element:R(vC,{})}]}]);Hl.createRoot(document.getElementById("root")).render(R(ys.StrictMode,{children:R(iI,{children:R(n_,{router:wC})})}));
