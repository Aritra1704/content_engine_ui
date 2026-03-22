(()=>{var Sp=Object.create;var Bs=Object.defineProperty;var Ep=Object.getOwnPropertyDescriptor;var kp=Object.getOwnPropertyNames;var $p=Object.getPrototypeOf,Rp=Object.prototype.hasOwnProperty;var mn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var bp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of kp(t))!Rp.call(e,a)&&a!==n&&Bs(e,a,{get:()=>t[a],enumerable:!(r=Ep(t,a))||r.enumerable});return e};var vr=(e,t,n)=>(n=e!=null?Sp($p(e)):{},bp(t||!e||!e.__esModule?Bs(n,"default",{value:e,enumerable:!0}):n,e));var eu=mn(H=>{"use strict";var yr=Symbol.for("react.element"),Cp=Symbol.for("react.portal"),xp=Symbol.for("react.fragment"),Pp=Symbol.for("react.strict_mode"),Tp=Symbol.for("react.profiler"),Dp=Symbol.for("react.provider"),Fp=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),Op=Symbol.for("react.suspense"),Ap=Symbol.for("react.memo"),Ip=Symbol.for("react.lazy"),Vs=Symbol.iterator;function Up(e){return e===null||typeof e!="object"?null:(e=Vs&&e[Vs]||e["@@iterator"],typeof e=="function"?e:null)}var Ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Js=Object.assign,Qs={};function On(e,t,n){this.props=e,this.context=t,this.refs=Qs,this.updater=n||Ks}On.prototype.isReactComponent={};On.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};On.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ys(){}Ys.prototype=On.prototype;function nl(e,t,n){this.props=e,this.context=t,this.refs=Qs,this.updater=n||Ks}var rl=nl.prototype=new Ys;rl.constructor=nl;Js(rl,On.prototype);rl.isPureReactComponent=!0;var Hs=Array.isArray,Gs=Object.prototype.hasOwnProperty,al={current:null},qs={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,t,n){var r,a={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Gs.call(t,r)&&!qs.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:yr,type:e,key:o,ref:l,props:a,_owner:al.current}}function jp(e,t){return{$$typeof:yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===yr}function Mp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ws=/\/+/g;function tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mp(""+e.key):t.toString(36)}function Na(e,t,n,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case yr:case Cp:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+tl(l,0):r,Hs(a)?(n="",e!=null&&(n=e.replace(Ws,"$&/")+"/"),Na(a,t,n,"",function(u){return u})):a!=null&&(ol(a)&&(a=jp(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Ws,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",Hs(e))for(var i=0;i<e.length;i++){o=e[i];var s=r+tl(o,i);l+=Na(o,t,n,s,a)}else if(s=Up(e),typeof s=="function")for(e=s.call(e),i=0;!(o=e.next()).done;)o=o.value,s=r+tl(o,i++),l+=Na(o,t,n,s,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function _a(e,t,n){if(e==null)return e;var r=[],a=0;return Na(e,r,"","",function(o){return t.call(n,o,a++)}),r}function zp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},wa={transition:null},Bp={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:wa,ReactCurrentOwner:al};function Zs(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:_a,forEach:function(e,t,n){_a(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _a(e,function(){t++}),t},toArray:function(e){return _a(e,function(t){return t})||[]},only:function(e){if(!ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=On;H.Fragment=xp;H.Profiler=Tp;H.PureComponent=nl;H.StrictMode=Pp;H.Suspense=Op;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bp;H.act=Zs;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Js({},e.props),a=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=al.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)Gs.call(t,s)&&!qs.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:yr,type:e.type,key:a,ref:o,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Fp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dp,_context:e},e.Consumer=e};H.createElement=Xs;H.createFactory=function(e){var t=Xs.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Lp,render:e}};H.isValidElement=ol;H.lazy=function(e){return{$$typeof:Ip,_payload:{_status:-1,_result:e},_init:zp}};H.memo=function(e,t){return{$$typeof:Ap,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=wa.transition;wa.transition={};try{e()}finally{wa.transition=t}};H.unstable_act=Zs;H.useCallback=function(e,t){return Le.current.useCallback(e,t)};H.useContext=function(e){return Le.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};H.useEffect=function(e,t){return Le.current.useEffect(e,t)};H.useId=function(){return Le.current.useId()};H.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Le.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};H.useRef=function(e){return Le.current.useRef(e)};H.useState=function(e){return Le.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Le.current.useTransition()};H.version="18.3.1"});var gr=mn((by,tu)=>{"use strict";tu.exports=eu()});var du=mn(ee=>{"use strict";function ul(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<Sa(a,t))e[r]=t,e[n]=a,n=r;else break e}}function ut(e){return e.length===0?null:e[0]}function ka(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,i=e[l],s=l+1,u=e[s];if(0>Sa(i,n))s<a&&0>Sa(u,i)?(e[r]=u,e[s]=n,r=s):(e[r]=i,e[l]=n,r=l);else if(s<a&&0>Sa(u,n))e[r]=u,e[s]=n,r=s;else break e}}return t}function Sa(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(nu=performance,ee.unstable_now=function(){return nu.now()}):(ll=Date,ru=ll.now(),ee.unstable_now=function(){return ll.now()-ru});var nu,ll,ru,wt=[],Bt=[],Vp=1,Ze=null,Re=3,$a=!1,hn=!1,Nr=!1,lu=typeof setTimeout=="function"?setTimeout:null,iu=typeof clearTimeout=="function"?clearTimeout:null,au=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function cl(e){for(var t=ut(Bt);t!==null;){if(t.callback===null)ka(Bt);else if(t.startTime<=e)ka(Bt),t.sortIndex=t.expirationTime,ul(wt,t);else break;t=ut(Bt)}}function dl(e){if(Nr=!1,cl(e),!hn)if(ut(wt)!==null)hn=!0,pl(fl);else{var t=ut(Bt);t!==null&&ml(dl,t.startTime-e)}}function fl(e,t){hn=!1,Nr&&(Nr=!1,iu(wr),wr=-1),$a=!0;var n=Re;try{for(cl(t),Ze=ut(wt);Ze!==null&&(!(Ze.expirationTime>t)||e&&!cu());){var r=Ze.callback;if(typeof r=="function"){Ze.callback=null,Re=Ze.priorityLevel;var a=r(Ze.expirationTime<=t);t=ee.unstable_now(),typeof a=="function"?Ze.callback=a:Ze===ut(wt)&&ka(wt),cl(t)}else ka(wt);Ze=ut(wt)}if(Ze!==null)var o=!0;else{var l=ut(Bt);l!==null&&ml(dl,l.startTime-t),o=!1}return o}finally{Ze=null,Re=n,$a=!1}}var Ra=!1,Ea=null,wr=-1,su=5,uu=-1;function cu(){return!(ee.unstable_now()-uu<su)}function il(){if(Ea!==null){var e=ee.unstable_now();uu=e;var t=!0;try{t=Ea(!0,e)}finally{t?_r():(Ra=!1,Ea=null)}}else Ra=!1}var _r;typeof au=="function"?_r=function(){au(il)}:typeof MessageChannel<"u"?(sl=new MessageChannel,ou=sl.port2,sl.port1.onmessage=il,_r=function(){ou.postMessage(null)}):_r=function(){lu(il,0)};var sl,ou;function pl(e){Ea=e,Ra||(Ra=!0,_r())}function ml(e,t){wr=lu(function(){e(ee.unstable_now())},t)}ee.unstable_IdlePriority=5;ee.unstable_ImmediatePriority=1;ee.unstable_LowPriority=4;ee.unstable_NormalPriority=3;ee.unstable_Profiling=null;ee.unstable_UserBlockingPriority=2;ee.unstable_cancelCallback=function(e){e.callback=null};ee.unstable_continueExecution=function(){hn||$a||(hn=!0,pl(fl))};ee.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):su=0<e?Math.floor(1e3/e):5};ee.unstable_getCurrentPriorityLevel=function(){return Re};ee.unstable_getFirstCallbackNode=function(){return ut(wt)};ee.unstable_next=function(e){switch(Re){case 1:case 2:case 3:var t=3;break;default:t=Re}var n=Re;Re=t;try{return e()}finally{Re=n}};ee.unstable_pauseExecution=function(){};ee.unstable_requestPaint=function(){};ee.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Re;Re=e;try{return t()}finally{Re=n}};ee.unstable_scheduleCallback=function(e,t,n){var r=ee.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:Vp++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>r?(e.sortIndex=n,ul(Bt,e),ut(wt)===null&&e===ut(Bt)&&(Nr?(iu(wr),wr=-1):Nr=!0,ml(dl,n-r))):(e.sortIndex=a,ul(wt,e),hn||$a||(hn=!0,pl(fl))),e};ee.unstable_shouldYield=cu;ee.unstable_wrapCallback=function(e){var t=Re;return function(){var n=Re;Re=t;try{return e.apply(this,arguments)}finally{Re=n}}}});var pu=mn((xy,fu)=>{"use strict";fu.exports=du()});var gf=mn(qe=>{"use strict";var Hp=gr(),Ye=pu();function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nc=new Set,Vr={};function Cn(e,t){nr(e,t),nr(e+"Capture",t)}function nr(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Nc.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Il=Object.prototype.hasOwnProperty,Wp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mu={},hu={};function Kp(e){return Il.call(hu,e)?!0:Il.call(mu,e)?!1:Wp.test(e)?hu[e]=!0:(mu[e]=!0,!1)}function Jp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qp(e,t,n,r){if(t===null||typeof t>"u"||Jp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,a,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var xi=/[\-:]([a-z])/g;function Pi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xi,Pi);ke[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xi,Pi);ke[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xi,Pi);ke[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ti(e,t,n,r){var a=ke.hasOwnProperty(t)?ke[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qp(t,n,a,r)&&(n=null),r||a===null?Kp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),Un=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),Di=Symbol.for("react.strict_mode"),Ul=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),Fi=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),Li=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Ec=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var vu=Symbol.iterator;function Sr(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,hl;function Pr(e){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var vl=!1;function yl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=r.stack.split(`
`),l=a.length-1,i=o.length-1;1<=l&&0<=i&&a[l]!==o[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==o[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==o[i]){var s=`
`+a[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=i);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pr(e):""}function Yp(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=yl(e.type,!1),e;case 11:return e=yl(e.type.render,!1),e;case 1:return e=yl(e.type,!0),e;default:return""}}function zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case Un:return"Portal";case Ul:return"Profiler";case Di:return"StrictMode";case jl:return"Suspense";case Ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sc:return(e.displayName||"Context")+".Consumer";case wc:return(e._context.displayName||"Context")+".Provider";case Fi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Li:return t=e.displayName||null,t!==null?t:zl(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return zl(e(t))}catch{}}return null}function Gp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zl(t);case 8:return t===Di?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qp(e){var t=kc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ca(e){e._valueTracker||(e._valueTracker=qp(e))}function $c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function no(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bl(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rc(e,t){t=t.checked,t!=null&&Ti(e,"checked",t,!1)}function Vl(e,t){Rc(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hl(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hl(e,t,n){(t!=="number"||no(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _u(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Tr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function bc(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xa,xc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xp=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){Xp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function Tc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Zp=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(e,t){if(t){if(Zp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function Oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,qn=null,Xn=null;function wu(e){if(e=sa(e)){if(typeof Gl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=To(t),Gl(e.stateNode,e.type,t))}}function Dc(e){qn?Xn?Xn.push(e):Xn=[e]:qn=e}function Fc(){if(qn){var e=qn,t=Xn;if(Xn=qn=null,wu(e),t)for(e=0;e<t.length;e++)wu(t[e])}}function Lc(e,t){return e(t)}function Oc(){}var gl=!1;function Ac(e,t,n){if(gl)return e(t,n);gl=!0;try{return Lc(e,t,n)}finally{gl=!1,(qn!==null||Xn!==null)&&(Oc(),Fc())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=To(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var ql=!1;if(Ft)try{An={},Object.defineProperty(An,"passive",{get:function(){ql=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{ql=!1}var An;function em(e,t,n,r,a,o,l,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Or=!1,ro=null,ao=!1,Xl=null,tm={onError:function(e){Or=!0,ro=e}};function nm(e,t,n,r,a,o,l,i,s){Or=!1,ro=null,em.apply(tm,arguments)}function rm(e,t,n,r,a,o,l,i,s){if(nm.apply(this,arguments),Or){if(Or){var u=ro;Or=!1,ro=null}else throw Error(R(198));ao||(ao=!0,Xl=u)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ic(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Su(e){if(xn(e)!==e)throw Error(R(188))}function am(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Su(a),e;if(o===r)return Su(a),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,i=a.child;i;){if(i===n){l=!0,n=a,r=o;break}if(i===r){l=!0,r=a,n=o;break}i=i.sibling}if(!l){for(i=o.child;i;){if(i===n){l=!0,n=o,r=a;break}if(i===r){l=!0,r=o,n=a;break}i=i.sibling}if(!l)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Uc(e){return e=am(e),e!==null?jc(e):null}function jc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jc(e);if(t!==null)return t;e=e.sibling}return null}var Mc=Ye.unstable_scheduleCallback,Eu=Ye.unstable_cancelCallback,om=Ye.unstable_shouldYield,lm=Ye.unstable_requestPaint,me=Ye.unstable_now,im=Ye.unstable_getCurrentPriorityLevel,Ai=Ye.unstable_ImmediatePriority,zc=Ye.unstable_UserBlockingPriority,oo=Ye.unstable_NormalPriority,sm=Ye.unstable_LowPriority,Bc=Ye.unstable_IdlePriority,bo=null,$t=null;function um(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(bo,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:fm,cm=Math.log,dm=Math.LN2;function fm(e){return e>>>=0,e===0?32:31-(cm(e)/dm|0)|0}var Pa=64,Ta=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~a;i!==0?r=Dr(i):(o&=l,o!==0&&(r=Dr(o)))}else l=n&~a,l!==0?r=Dr(l):o!==0&&(r=Dr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),a=1<<n,r|=e[n],t&=~a;return r}function pm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-mt(o),i=1<<l,s=a[l];s===-1?((i&n)===0||(i&r)!==0)&&(a[l]=pm(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}}function Zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vc(){var e=Pa;return Pa<<=1,(Pa&4194240)===0&&(Pa=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function la(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function hm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-mt(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}function Ii(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var X=0;function Hc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Wc,Ui,Kc,Jc,Qc,ei=!1,Da=[],Gt=null,qt=null,Xt=null,Kr=new Map,Jr=new Map,Kt=[],vm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function Er(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=sa(t),t!==null&&Ui(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ym(e,t,n,r,a){switch(t){case"focusin":return Gt=Er(Gt,e,t,n,r,a),!0;case"dragenter":return qt=Er(qt,e,t,n,r,a),!0;case"mouseover":return Xt=Er(Xt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Kr.set(o,Er(Kr.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Jr.set(o,Er(Jr.get(o)||null,e,t,n,r,a)),!0}return!1}function Yc(e){var t=gn(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ic(n),t!==null){e.blockedOn=t,Qc(e.priority,function(){Kc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ka(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ti(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yl=r,n.target.dispatchEvent(r),Yl=null}else return t=sa(n),t!==null&&Ui(t),e.blockedOn=n,!1;t.shift()}return!0}function $u(e,t,n){Ka(e)&&n.delete(t)}function gm(){ei=!1,Gt!==null&&Ka(Gt)&&(Gt=null),qt!==null&&Ka(qt)&&(qt=null),Xt!==null&&Ka(Xt)&&(Xt=null),Kr.forEach($u),Jr.forEach($u)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,ei||(ei=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,gm)))}function Qr(e){function t(a){return kr(a,e)}if(0<Da.length){kr(Da[0],e);for(var n=1;n<Da.length;n++){var r=Da[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&kr(Gt,e),qt!==null&&kr(qt,e),Xt!==null&&kr(Xt,e),Kr.forEach(t),Jr.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Yc(n),n.blockedOn===null&&Kt.shift()}var Zn=It.ReactCurrentBatchConfig,io=!0;function _m(e,t,n,r){var a=X,o=Zn.transition;Zn.transition=null;try{X=1,ji(e,t,n,r)}finally{X=a,Zn.transition=o}}function Nm(e,t,n,r){var a=X,o=Zn.transition;Zn.transition=null;try{X=4,ji(e,t,n,r)}finally{X=a,Zn.transition=o}}function ji(e,t,n,r){if(io){var a=ti(e,t,n,r);if(a===null)Rl(e,t,r,so,n),ku(e,r);else if(ym(a,e,t,n,r))r.stopPropagation();else if(ku(e,r),t&4&&-1<vm.indexOf(e)){for(;a!==null;){var o=sa(a);if(o!==null&&Wc(o),o=ti(e,t,n,r),o===null&&Rl(e,t,r,so,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else Rl(e,t,r,null,n)}}var so=null;function ti(e,t,n,r){if(so=null,e=Oi(r),e=gn(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ic(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return so=e,null}function Gc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(im()){case Ai:return 1;case zc:return 4;case oo:case sm:return 16;case Bc:return 536870912;default:return 16}default:return 16}}var Qt=null,Mi=null,Ja=null;function qc(){if(Ja)return Ja;var e,t=Mi,n=t.length,r,a="value"in Qt?Qt.value:Qt.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[o-r];r++);return Ja=a.slice(e,1<r?1-r:void 0)}function Qa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fa(){return!0}function Ru(){return!1}function Ge(e){function t(n,r,a,o,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fa:Ru,this.isPropagationStopped=Ru,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),t}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=Ge(ur),ia=ue({},ur,{view:0,detail:0}),wm=Ge(ia),Nl,wl,$r,Co=ue({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(Nl=e.screenX-$r.screenX,wl=e.screenY-$r.screenY):wl=Nl=0,$r=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),bu=Ge(Co),Sm=ue({},Co,{dataTransfer:0}),Em=Ge(Sm),km=ue({},ia,{relatedTarget:0}),Sl=Ge(km),$m=ue({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Rm=Ge($m),bm=ue({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cm=Ge(bm),xm=ue({},ur,{data:0}),Cu=Ge(xm),Pm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dm[e])?!!t[e]:!1}function Bi(){return Fm}var Lm=ue({},ia,{key:function(e){if(e.key){var t=Pm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bi,charCode:function(e){return e.type==="keypress"?Qa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Om=Ge(Lm),Am=ue({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=Ge(Am),Im=ue({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bi}),Um=Ge(Im),jm=ue({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mm=Ge(jm),zm=ue({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=Ge(zm),Vm=[9,13,27,32],Vi=Ft&&"CompositionEvent"in window,Ar=null;Ft&&"documentMode"in document&&(Ar=document.documentMode);var Hm=Ft&&"TextEvent"in window&&!Ar,Xc=Ft&&(!Vi||Ar&&8<Ar&&11>=Ar),Pu=" ",Tu=!1;function Zc(e,t){switch(e){case"keyup":return Vm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function Wm(e,t){switch(e){case"compositionend":return ed(t);case"keypress":return t.which!==32?null:(Tu=!0,Pu);case"textInput":return e=t.data,e===Pu&&Tu?null:e;default:return null}}function Km(e,t){if(Mn)return e==="compositionend"||!Vi&&Zc(e,t)?(e=qc(),Ja=Mi=Qt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xc&&t.locale!=="ko"?null:t.data;default:return null}}var Jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jm[e.type]:t==="textarea"}function td(e,t,n,r){Dc(r),t=uo(t,"onChange"),0<t.length&&(n=new zi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Yr=null;function Qm(e){fd(e,0)}function xo(e){var t=Vn(e);if($c(t))return e}function Ym(e,t){if(e==="change")return t}var nd=!1;Ft&&(Ft?(Oa="oninput"in document,Oa||(El=document.createElement("div"),El.setAttribute("oninput","return;"),Oa=typeof El.oninput=="function"),La=Oa):La=!1,nd=La&&(!document.documentMode||9<document.documentMode));var La,Oa,El;function Fu(){Ir&&(Ir.detachEvent("onpropertychange",rd),Yr=Ir=null)}function rd(e){if(e.propertyName==="value"&&xo(Yr)){var t=[];td(t,Yr,e,Oi(e)),Ac(Qm,t)}}function Gm(e,t,n){e==="focusin"?(Fu(),Ir=t,Yr=n,Ir.attachEvent("onpropertychange",rd)):e==="focusout"&&Fu()}function qm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(Yr)}function Xm(e,t){if(e==="click")return xo(t)}function Zm(e,t){if(e==="input"||e==="change")return xo(t)}function eh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:eh;function Gr(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Il.call(t,a)||!vt(e[a],t[a]))return!1}return!0}function Lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,t){var n=Lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lu(n)}}function ad(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ad(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function od(){for(var e=window,t=no();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=no(e.document)}return t}function Hi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function th(e){var t=od(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ad(n.ownerDocument.documentElement,n)){if(r!==null&&Hi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=Ou(n,o);var l=Ou(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nh=Ft&&"documentMode"in document&&11>=document.documentMode,zn=null,ni=null,Ur=null,ri=!1;function Au(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ri||zn==null||zn!==no(r)||(r=zn,"selectionStart"in r&&Hi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&Gr(Ur,r)||(Ur=r,r=uo(ni,"onSelect"),0<r.length&&(t=new zi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function Aa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},kl={},ld={};Ft&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function Po(e){if(kl[e])return kl[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ld)return kl[e]=t[n];return e}var id=Po("animationend"),sd=Po("animationiteration"),ud=Po("animationstart"),cd=Po("transitionend"),dd=new Map,Iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){dd.set(e,t),Cn(t,[e])}for(Ia=0;Ia<Iu.length;Ia++)Ua=Iu[Ia],Uu=Ua.toLowerCase(),ju=Ua[0].toUpperCase()+Ua.slice(1),ln(Uu,"on"+ju);var Ua,Uu,ju,Ia;ln(id,"onAnimationEnd");ln(sd,"onAnimationIteration");ln(ud,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(cd,"onTransitionEnd");nr("onMouseEnter",["mouseout","mouseover"]);nr("onMouseLeave",["mouseout","mouseover"]);nr("onPointerEnter",["pointerout","pointerover"]);nr("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Mu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rm(r,t,void 0,e),e.currentTarget=null}function fd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==o&&a.isPropagationStopped())break e;Mu(a,i,u),o=s}else for(l=0;l<r.length;l++){if(i=r[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==o&&a.isPropagationStopped())break e;Mu(a,i,u),o=s}}}if(ao)throw e=Xl,ao=!1,Xl=null,e}function ne(e,t){var n=t[si];n===void 0&&(n=t[si]=new Set);var r=e+"__bubble";n.has(r)||(pd(t,e,2,!1),n.add(r))}function $l(e,t,n){var r=0;t&&(r|=4),pd(n,e,r,t)}var ja="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[ja]){e[ja]=!0,Nc.forEach(function(n){n!=="selectionchange"&&(rh.has(n)||$l(n,!1,e),$l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ja]||(t[ja]=!0,$l("selectionchange",!1,t))}}function pd(e,t,n,r){switch(Gc(t)){case 1:var a=_m;break;case 4:a=Nm;break;default:a=ji}n=a.bind(null,t,n,e),a=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Rl(e,t,n,r,a){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;l=l.return}for(;i!==null;){if(l=gn(i),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}i=i.parentNode}}r=r.return}Ac(function(){var u=o,h=Oi(n),y=[];e:{var p=dd.get(e);if(p!==void 0){var E=zi,k=e;switch(e){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":E=Om;break;case"focusin":k="focus",E=Sl;break;case"focusout":k="blur",E=Sl;break;case"beforeblur":case"afterblur":E=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Um;break;case id:case sd:case ud:E=Rm;break;case cd:E=Mm;break;case"scroll":E=wm;break;case"wheel":E=Bm;break;case"copy":case"cut":case"paste":E=Cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=xu}var w=(t&4)!==0,N=!w&&e==="scroll",d=w?p!==null?p+"Capture":null:p;w=[];for(var c=u,f;c!==null;){f=c;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Wr(c,d),g!=null&&w.push(Xr(c,g,f)))),N)break;c=c.return}0<w.length&&(p=new E(p,k,null,n,h),y.push({event:p,listeners:w}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",p&&n!==Yl&&(k=n.relatedTarget||n.fromElement)&&(gn(k)||k[Lt]))break e;if((E||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,E?(k=n.relatedTarget||n.toElement,E=u,k=k?gn(k):null,k!==null&&(N=xn(k),k!==N||k.tag!==5&&k.tag!==6)&&(k=null)):(E=null,k=u),E!==k)){if(w=bu,g="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=xu,g="onPointerLeave",d="onPointerEnter",c="pointer"),N=E==null?p:Vn(E),f=k==null?p:Vn(k),p=new w(g,c+"leave",E,n,h),p.target=N,p.relatedTarget=f,g=null,gn(h)===u&&(w=new w(d,c+"enter",k,n,h),w.target=f,w.relatedTarget=N,g=w),N=g,E&&k)t:{for(w=E,d=k,c=0,f=w;f;f=In(f))c++;for(f=0,g=d;g;g=In(g))f++;for(;0<c-f;)w=In(w),c--;for(;0<f-c;)d=In(d),f--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break t;w=In(w),d=In(d)}w=null}else w=null;E!==null&&zu(y,p,E,w,!1),k!==null&&N!==null&&zu(y,N,k,w,!0)}}e:{if(p=u?Vn(u):window,E=p.nodeName&&p.nodeName.toLowerCase(),E==="select"||E==="input"&&p.type==="file")var C=Ym;else if(Du(p))if(nd)C=Zm;else{C=qm;var P=Gm}else(E=p.nodeName)&&E.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Xm);if(C&&(C=C(e,u))){td(y,C,n,h);break e}P&&P(e,p,u),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Hl(p,"number",p.value)}switch(P=u?Vn(u):window,e){case"focusin":(Du(P)||P.contentEditable==="true")&&(zn=P,ni=u,Ur=null);break;case"focusout":Ur=ni=zn=null;break;case"mousedown":ri=!0;break;case"contextmenu":case"mouseup":case"dragend":ri=!1,Au(y,n,h);break;case"selectionchange":if(nh)break;case"keydown":case"keyup":Au(y,n,h)}var L;if(Vi)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Mn?Zc(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Xc&&n.locale!=="ko"&&(Mn||D!=="onCompositionStart"?D==="onCompositionEnd"&&Mn&&(L=qc()):(Qt=h,Mi="value"in Qt?Qt.value:Qt.textContent,Mn=!0)),P=uo(u,D),0<P.length&&(D=new Cu(D,e,null,n,h),y.push({event:D,listeners:P}),L?D.data=L:(L=ed(n),L!==null&&(D.data=L)))),(L=Hm?Wm(e,n):Km(e,n))&&(u=uo(u,"onBeforeInput"),0<u.length&&(h=new Cu("onBeforeInput","beforeinput",null,n,h),y.push({event:h,listeners:u}),h.data=L))}fd(y,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Wr(e,n),o!=null&&r.unshift(Xr(e,o,a)),o=Wr(e,t),o!=null&&r.push(Xr(e,o,a))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,t,n,r,a){for(var o=t._reactName,l=[];n!==null&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&u!==null&&(i=u,a?(s=Wr(n,o),s!=null&&l.unshift(Xr(n,s,i))):a||(s=Wr(n,o),s!=null&&l.push(Xr(n,s,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ah=/\r\n?/g,oh=/\u0000|\uFFFD/g;function Bu(e){return(typeof e=="string"?e:""+e).replace(ah,`
`).replace(oh,"")}function Ma(e,t,n){if(t=Bu(t),Bu(e)!==t&&n)throw Error(R(425))}function co(){}var ai=null,oi=null;function li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ii=typeof setTimeout=="function"?setTimeout:void 0,lh=typeof clearTimeout=="function"?clearTimeout:void 0,Vu=typeof Promise=="function"?Promise:void 0,ih=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){return Vu.resolve(null).then(e).catch(sh)}:ii;function sh(e){setTimeout(function(){throw e})}function bl(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Qr(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),kt="__reactFiber$"+cr,Zr="__reactProps$"+cr,Lt="__reactContainer$"+cr,si="__reactEvents$"+cr,uh="__reactListeners$"+cr,ch="__reactHandles$"+cr;function gn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hu(e);e!==null;){if(n=e[kt])return n;e=Hu(e)}return t}e=n,n=e.parentNode}return null}function sa(e){return e=e[kt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function To(e){return e[Zr]||null}var ui=[],Hn=-1;function sn(e){return{current:e}}function re(e){0>Hn||(e.current=ui[Hn],ui[Hn]=null,Hn--)}function te(e,t){Hn++,ui[Hn]=e.current,e.current=t}var on={},Pe=sn(on),Ve=sn(!1),En=on;function rr(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function He(e){return e=e.childContextTypes,e!=null}function fo(){re(Ve),re(Pe)}function Wu(e,t,n){if(Pe.current!==on)throw Error(R(168));te(Pe,t),te(Ve,n)}function md(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(R(108,Gp(e)||"Unknown",a));return ue({},n,r)}function po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,En=Pe.current,te(Pe,e),te(Ve,Ve.current),!0}function Ku(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=md(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,re(Ve),re(Pe),te(Pe,e)):re(Ve),te(Ve,n)}var xt=null,Do=!1,Cl=!1;function hd(e){xt===null?xt=[e]:xt.push(e)}function dh(e){Do=!0,hd(e)}function un(){if(!Cl&&xt!==null){Cl=!0;var e=0,t=X;try{var n=xt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,Do=!1}catch(a){throw xt!==null&&(xt=xt.slice(e+1)),Mc(Ai,un),a}finally{X=t,Cl=!1}}return null}var Wn=[],Kn=0,mo=null,ho=0,et=[],tt=0,kn=null,Pt=1,Tt="";function vn(e,t){Wn[Kn++]=ho,Wn[Kn++]=mo,mo=e,ho=t}function vd(e,t,n){et[tt++]=Pt,et[tt++]=Tt,et[tt++]=kn,kn=e;var r=Pt;e=Tt;var a=32-mt(r)-1;r&=~(1<<a),n+=1;var o=32-mt(t)+a;if(30<o){var l=a-a%5;o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Pt=1<<32-mt(t)+a|n<<a|r,Tt=o+e}else Pt=1<<o|n<<a|r,Tt=e}function Wi(e){e.return!==null&&(vn(e,1),vd(e,1,0))}function Ki(e){for(;e===mo;)mo=Wn[--Kn],Wn[Kn]=null,ho=Wn[--Kn],Wn[Kn]=null;for(;e===kn;)kn=et[--tt],et[tt]=null,Tt=et[--tt],et[tt]=null,Pt=et[--tt],et[tt]=null}var Qe=null,Je=null,oe=!1,pt=null;function yd(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ju(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Je=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:Pt,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Je=null,!0):!1;default:return!1}}function ci(e){return(e.mode&1)!==0&&(e.flags&128)===0}function di(e){if(oe){var t=Je;if(t){var n=t;if(!Ju(e,t)){if(ci(e))throw Error(R(418));t=Zt(n.nextSibling);var r=Qe;t&&Ju(e,t)?yd(r,n):(e.flags=e.flags&-4097|2,oe=!1,Qe=e)}}else{if(ci(e))throw Error(R(418));e.flags=e.flags&-4097|2,oe=!1,Qe=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function za(e){if(e!==Qe)return!1;if(!oe)return Qu(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!li(e.type,e.memoizedProps)),t&&(t=Je)){if(ci(e))throw gd(),Error(R(418));for(;t;)yd(e,t),t=Zt(t.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Qe?Zt(e.stateNode.nextSibling):null;return!0}function gd(){for(var e=Je;e;)e=Zt(e.nextSibling)}function ar(){Je=Qe=null,oe=!1}function Ji(e){pt===null?pt=[e]:pt.push(e)}var fh=It.ReactCurrentBatchConfig;function Rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var i=a.refs;l===null?delete i[o]:i[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Ba(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yu(e){var t=e._init;return t(e._payload)}function _d(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function a(d,c){return d=rn(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function i(d,c,f,g){return c===null||c.tag!==6?(c=Ol(f,d.mode,g),c.return=d,c):(c=a(c,f),c.return=d,c)}function s(d,c,f,g){var C=f.type;return C===jn?h(d,c,f.props.children,g,f.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ht&&Yu(C)===c.type)?(g=a(c,f.props),g.ref=Rr(d,c,f),g.return=d,g):(g=to(f.type,f.key,f.props,null,d.mode,g),g.ref=Rr(d,c,f),g.return=d,g)}function u(d,c,f,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Al(f,d.mode,g),c.return=d,c):(c=a(c,f.children||[]),c.return=d,c)}function h(d,c,f,g,C){return c===null||c.tag!==7?(c=Sn(f,d.mode,g,C),c.return=d,c):(c=a(c,f),c.return=d,c)}function y(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ol(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ba:return f=to(c.type,c.key,c.props,null,d.mode,f),f.ref=Rr(d,null,c),f.return=d,f;case Un:return c=Al(c,d.mode,f),c.return=d,c;case Ht:var g=c._init;return y(d,g(c._payload),f)}if(Tr(c)||Sr(c))return c=Sn(c,d.mode,f,null),c.return=d,c;Ba(d,c)}return null}function p(d,c,f,g){var C=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:i(d,c,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ba:return f.key===C?s(d,c,f,g):null;case Un:return f.key===C?u(d,c,f,g):null;case Ht:return C=f._init,p(d,c,C(f._payload),g)}if(Tr(f)||Sr(f))return C!==null?null:h(d,c,f,g,null);Ba(d,f)}return null}function E(d,c,f,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,i(c,d,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ba:return d=d.get(g.key===null?f:g.key)||null,s(c,d,g,C);case Un:return d=d.get(g.key===null?f:g.key)||null,u(c,d,g,C);case Ht:var P=g._init;return E(d,c,f,P(g._payload),C)}if(Tr(g)||Sr(g))return d=d.get(f)||null,h(c,d,g,C,null);Ba(c,g)}return null}function k(d,c,f,g){for(var C=null,P=null,L=c,D=c=0,z=null;L!==null&&D<f.length;D++){L.index>D?(z=L,L=null):z=L.sibling;var I=p(d,L,f[D],g);if(I===null){L===null&&(L=z);break}e&&L&&I.alternate===null&&t(d,L),c=o(I,c,D),P===null?C=I:P.sibling=I,P=I,L=z}if(D===f.length)return n(d,L),oe&&vn(d,D),C;if(L===null){for(;D<f.length;D++)L=y(d,f[D],g),L!==null&&(c=o(L,c,D),P===null?C=L:P.sibling=L,P=L);return oe&&vn(d,D),C}for(L=r(d,L);D<f.length;D++)z=E(L,d,D,f[D],g),z!==null&&(e&&z.alternate!==null&&L.delete(z.key===null?D:z.key),c=o(z,c,D),P===null?C=z:P.sibling=z,P=z);return e&&L.forEach(function(j){return t(d,j)}),oe&&vn(d,D),C}function w(d,c,f,g){var C=Sr(f);if(typeof C!="function")throw Error(R(150));if(f=C.call(f),f==null)throw Error(R(151));for(var P=C=null,L=c,D=c=0,z=null,I=f.next();L!==null&&!I.done;D++,I=f.next()){L.index>D?(z=L,L=null):z=L.sibling;var j=p(d,L,I.value,g);if(j===null){L===null&&(L=z);break}e&&L&&j.alternate===null&&t(d,L),c=o(j,c,D),P===null?C=j:P.sibling=j,P=j,L=z}if(I.done)return n(d,L),oe&&vn(d,D),C;if(L===null){for(;!I.done;D++,I=f.next())I=y(d,I.value,g),I!==null&&(c=o(I,c,D),P===null?C=I:P.sibling=I,P=I);return oe&&vn(d,D),C}for(L=r(d,L);!I.done;D++,I=f.next())I=E(L,d,D,I.value,g),I!==null&&(e&&I.alternate!==null&&L.delete(I.key===null?D:I.key),c=o(I,c,D),P===null?C=I:P.sibling=I,P=I);return e&&L.forEach(function($e){return t(d,$e)}),oe&&vn(d,D),C}function N(d,c,f,g){if(typeof f=="object"&&f!==null&&f.type===jn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ba:e:{for(var C=f.key,P=c;P!==null;){if(P.key===C){if(C=f.type,C===jn){if(P.tag===7){n(d,P.sibling),c=a(P,f.props.children),c.return=d,d=c;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ht&&Yu(C)===P.type){n(d,P.sibling),c=a(P,f.props),c.ref=Rr(d,P,f),c.return=d,d=c;break e}n(d,P);break}else t(d,P);P=P.sibling}f.type===jn?(c=Sn(f.props.children,d.mode,g,f.key),c.return=d,d=c):(g=to(f.type,f.key,f.props,null,d.mode,g),g.ref=Rr(d,c,f),g.return=d,d=g)}return l(d);case Un:e:{for(P=f.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=a(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Al(f,d.mode,g),c.return=d,d=c}return l(d);case Ht:return P=f._init,N(d,c,P(f._payload),g)}if(Tr(f))return k(d,c,f,g);if(Sr(f))return w(d,c,f,g);Ba(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=a(c,f),c.return=d,d=c):(n(d,c),c=Ol(f,d.mode,g),c.return=d,d=c),l(d)):n(d,c)}return N}var or=_d(!0),Nd=_d(!1),vo=sn(null),yo=null,Jn=null,Qi=null;function Yi(){Qi=Jn=yo=null}function Gi(e){var t=vo.current;re(vo),e._currentValue=t}function fi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){yo=e,Qi=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Be=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Qi!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(yo===null)throw Error(R(308));Jn=e,yo.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var _n=null;function qi(e){_n===null?_n=[e]:_n.push(e)}function wd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,qi(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Xi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ot(e,n)}return a=r.interleaved,a===null?(t.next=t,qi(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ot(e,n)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ii(e,n)}}function Gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function go(e,t,n,r){var a=e.updateQueue;Wt=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==l&&(i===null?h.firstBaseUpdate=u:i.next=u,h.lastBaseUpdate=s))}if(o!==null){var y=a.baseState;l=0,h=u=s=null,i=o;do{var p=i.lane,E=i.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:E,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var k=e,w=i;switch(p=t,E=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){y=k.call(E,y,p);break e}y=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,p=typeof k=="function"?k.call(E,y,p):k,p==null)break e;y=ue({},y,p);break e;case 2:Wt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[i]:p.push(i))}else E={eventTime:E,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(u=h=E,s=y):h=h.next=E,l|=p;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;p=i,i=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(h===null&&(s=y),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Rn|=l,e.lanes=l,e.memoizedState=y}}function qu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(R(191,a));a.call(r)}}}var ua={},Rt=sn(ua),ea=sn(ua),ta=sn(ua);function Nn(e){if(e===ua)throw Error(R(174));return e}function Zi(e,t){switch(te(ta,t),te(ea,e),te(Rt,ua),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}re(Rt),te(Rt,t)}function lr(){re(Rt),re(ea),re(ta)}function Ed(e){Nn(ta.current);var t=Nn(Rt.current),n=Kl(t,e.type);t!==n&&(te(ea,e),te(Rt,n))}function es(e){ea.current===e&&(re(Rt),re(ea))}var ie=sn(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xl=[];function ts(){for(var e=0;e<xl.length;e++)xl[e]._workInProgressVersionPrimary=null;xl.length=0}var Ga=It.ReactCurrentDispatcher,Pl=It.ReactCurrentBatchConfig,$n=0,se=null,ge=null,Ne=null,No=!1,jr=!1,na=0,ph=0;function be(){throw Error(R(321))}function ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function rs(e,t,n,r,a,o){if($n=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ga.current=e===null||e.memoizedState===null?yh:gh,e=n(r,a),jr){o=0;do{if(jr=!1,na=0,25<=o)throw Error(R(301));o+=1,Ne=ge=null,t.updateQueue=null,Ga.current=_h,e=n(r,a)}while(jr)}if(Ga.current=wo,t=ge!==null&&ge.next!==null,$n=0,Ne=ge=se=null,No=!1,t)throw Error(R(300));return e}function as(){var e=na!==0;return na=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?se.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function ot(){if(ge===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=Ne===null?se.memoizedState:Ne.next;if(t!==null)Ne=t,ge=e;else{if(e===null)throw Error(R(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ne===null?se.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function ra(e,t){return typeof t=="function"?t(e):t}function Tl(e){var t=ot(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ge,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,r=r.baseState;var i=l=null,s=null,u=o;do{var h=u.lane;if(($n&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var y={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=y,l=r):s=s.next=y,se.lanes|=h,Rn|=h}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=i,vt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do o=a.lane,se.lanes|=o,Rn|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Dl(e){var t=ot(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do o=e(o,l.action),l=l.next;while(l!==a);vt(o,t.memoizedState)||(Be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function kd(){}function $d(e,t){var n=se,r=ot(),a=t(),o=!vt(r.memoizedState,a);if(o&&(r.memoizedState=a,Be=!0),r=r.queue,os(Cd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,aa(9,bd.bind(null,n,r,a,t),void 0,null),we===null)throw Error(R(349));($n&30)!==0||Rd(n,t,a)}return a}function Rd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bd(e,t,n,r){t.value=n,t.getSnapshot=r,xd(t)&&Pd(e)}function Cd(e,t,n){return n(function(){xd(t)&&Pd(e)})}function xd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Pd(e){var t=Ot(e,1);t!==null&&ht(t,e,1,-1)}function Xu(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t.queue=e,e=e.dispatch=vh.bind(null,se,e),[t.memoizedState,e]}function aa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Td(){return ot().memoizedState}function qa(e,t,n,r){var a=Et();se.flags|=e,a.memoizedState=aa(1|t,n,void 0,r===void 0?null:r)}function Fo(e,t,n,r){var a=ot();r=r===void 0?null:r;var o=void 0;if(ge!==null){var l=ge.memoizedState;if(o=l.destroy,r!==null&&ns(r,l.deps)){a.memoizedState=aa(t,n,o,r);return}}se.flags|=e,a.memoizedState=aa(1|t,n,o,r)}function Zu(e,t){return qa(8390656,8,e,t)}function os(e,t){return Fo(2048,8,e,t)}function Dd(e,t){return Fo(4,2,e,t)}function Fd(e,t){return Fo(4,4,e,t)}function Ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Od(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4,4,Ld.bind(null,t,e),n)}function ls(){}function Ad(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ns(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Id(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ns(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ud(e,t,n){return($n&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n):(vt(n,t)||(n=Vc(),se.lanes|=n,Rn|=n,e.baseState=!0),t)}function mh(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Pl.transition;Pl.transition={};try{e(!1),t()}finally{X=n,Pl.transition=r}}function jd(){return ot().memoizedState}function hh(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Md(e))zd(t,n);else if(n=wd(e,t,n,r),n!==null){var a=Ae();ht(n,e,r,a),Bd(n,t,r)}}function vh(e,t,n){var r=nn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Md(e))zd(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,i=o(l,n);if(a.hasEagerState=!0,a.eagerState=i,vt(i,l)){var s=t.interleaved;s===null?(a.next=a,qi(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=wd(e,t,a,r),n!==null&&(a=Ae(),ht(n,e,r,a),Bd(n,t,r))}}function Md(e){var t=e.alternate;return e===se||t!==null&&t===se}function zd(e,t){jr=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ii(e,n)}}var wo={readContext:at,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},yh={readContext:at,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Zu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qa(4194308,4,Ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qa(4194308,4,e,t)},useInsertionEffect:function(e,t){return qa(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hh.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:Xu,useDebugValue:ls,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=Xu(!1),t=e[0];return e=mh.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,a=Et();if(oe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),we===null)throw Error(R(349));($n&30)!==0||Rd(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Zu(Cd.bind(null,r,o,e),[e]),r.flags|=2048,aa(9,bd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Et(),t=we.identifierPrefix;if(oe){var n=Tt,r=Pt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=na++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ph++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gh={readContext:at,useCallback:Ad,useContext:at,useEffect:os,useImperativeHandle:Od,useInsertionEffect:Dd,useLayoutEffect:Fd,useMemo:Id,useReducer:Tl,useRef:Td,useState:function(){return Tl(ra)},useDebugValue:ls,useDeferredValue:function(e){var t=ot();return Ud(t,ge.memoizedState,e)},useTransition:function(){var e=Tl(ra)[0],t=ot().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:$d,useId:jd,unstable_isNewReconciler:!1},_h={readContext:at,useCallback:Ad,useContext:at,useEffect:os,useImperativeHandle:Od,useInsertionEffect:Dd,useLayoutEffect:Fd,useMemo:Id,useReducer:Dl,useRef:Td,useState:function(){return Dl(ra)},useDebugValue:ls,useDeferredValue:function(e){var t=ot();return ge===null?t.memoizedState=e:Ud(t,ge.memoizedState,e)},useTransition:function(){var e=Dl(ra)[0],t=ot().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:$d,useId:jd,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Lo={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),a=nn(e),o=Dt(r,a);o.payload=t,n!=null&&(o.callback=n),t=en(e,o,a),t!==null&&(ht(t,e,a,r),Ya(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),a=nn(e),o=Dt(r,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=en(e,o,a),t!==null&&(ht(t,e,a,r),Ya(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=nn(e),a=Dt(n,r);a.tag=2,t!=null&&(a.callback=t),t=en(e,a,r),t!==null&&(ht(t,e,r,n),Ya(t,e,r))}};function ec(e,t,n,r,a,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(a,o):!0}function Vd(e,t,n){var r=!1,a=on,o=t.contextType;return typeof o=="object"&&o!==null?o=at(o):(a=He(t)?En:Pe.current,r=t.contextTypes,o=(r=r!=null)?rr(e,a):on),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Lo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function tc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Lo.enqueueReplaceState(t,t.state,null)}function mi(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Xi(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=at(o):(o=He(t)?En:Pe.current,a.context=rr(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(pi(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Lo.enqueueReplaceState(a,a.state,null),go(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t){try{var n="",r=t;do n+=Yp(r),r=r.return;while(r);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nh=typeof WeakMap=="function"?WeakMap:Map;function Hd(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Eo||(Eo=!0,$i=r),hi(e,t)},n}function Wd(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){hi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hi(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function nc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nh;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Lh.bind(null,e,t,n),t.then(e,e))}function rc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ac(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var wh=It.ReactCurrentOwner,Be=!1;function Oe(e,t,n,r){t.child=e===null?Nd(t,null,n,r):or(t,e.child,n,r)}function oc(e,t,n,r,a){n=n.render;var o=t.ref;return er(t,a),r=rs(e,t,n,r,o,a),n=as(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,At(e,t,a)):(oe&&n&&Wi(t),t.flags|=1,Oe(e,t,r,a),t.child)}function lc(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!ms(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Kd(e,t,o,r,a)):(e=to(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&a)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(l,r)&&e.ref===t.ref)return At(e,t,a)}return t.flags|=1,e=rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Kd(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(Gr(o,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,At(e,t,a)}return vi(e,t,n,r,a)}function Jd(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Yn,Ke),Ke|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Yn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,te(Yn,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,te(Yn,Ke),Ke|=r;return Oe(e,t,a,n),t.child}function Qd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vi(e,t,n,r,a){var o=He(n)?En:Pe.current;return o=rr(t,o),er(t,a),n=rs(e,t,n,r,o,a),r=as(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,At(e,t,a)):(oe&&r&&Wi(t),t.flags|=1,Oe(e,t,n,a),t.child)}function ic(e,t,n,r,a){if(He(n)){var o=!0;po(t)}else o=!1;if(er(t,a),t.stateNode===null)Xa(e,t),Vd(t,n,r),mi(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=He(n)?En:Pe.current,u=rr(t,u));var h=n.getDerivedStateFromProps,y=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==r||s!==u)&&tc(t,l,r,u),Wt=!1;var p=t.memoizedState;l.state=p,go(t,r,l,a),s=t.memoizedState,i!==r||p!==s||Ve.current||Wt?(typeof h=="function"&&(pi(t,n,h,r),s=t.memoizedState),(i=Wt||ec(t,n,i,r,p,s,u))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Sd(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:dt(t.type,i),l.props=u,y=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=at(s):(s=He(n)?En:Pe.current,s=rr(t,s));var E=n.getDerivedStateFromProps;(h=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==y||p!==s)&&tc(t,l,r,s),Wt=!1,p=t.memoizedState,l.state=p,go(t,r,l,a);var k=t.memoizedState;i!==y||p!==k||Ve.current||Wt?(typeof E=="function"&&(pi(t,n,E,r),k=t.memoizedState),(u=Wt||ec(t,n,u,r,p,k,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return yi(e,t,n,r,o,a)}function yi(e,t,n,r,a,o){Qd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&Ku(t,n,!1),At(e,t,o);r=t.stateNode,wh.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=or(t,e.child,null,o),t.child=or(t,null,i,o)):Oe(e,t,i,o),t.memoizedState=r.state,a&&Ku(t,n,!0),t.child}function Yd(e){var t=e.stateNode;t.pendingContext?Wu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wu(e,t.context,!1),Zi(e,t.containerInfo)}function sc(e,t,n,r,a){return ar(),Ji(a),t.flags|=256,Oe(e,t,n,r),t.child}var gi={dehydrated:null,treeContext:null,retryLane:0};function _i(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gd(e,t,n){var r=t.pendingProps,a=ie.current,o=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),te(ie,a&1),e===null)return di(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Io(l,r,0,null),e=Sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_i(n),t.memoizedState=gi,e):is(t,l));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return Sh(e,t,l,r,i,a,n);if(o){o=r.fallback,l=t.mode,a=e.child,i=a.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=rn(a,s),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?o=rn(i,o):(o=Sn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?_i(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=gi,r}return o=e.child,e=o.sibling,r=rn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function is(e,t){return t=Io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Va(e,t,n,r){return r!==null&&Ji(r),or(t,e.child,null,n),e=is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sh(e,t,n,r,a,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Fl(Error(R(422))),Va(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Io({mode:"visible",children:r.children},a,0,null),o=Sn(o,a,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&or(t,e.child,null,l),t.child.memoizedState=_i(l),t.memoizedState=gi,o);if((t.mode&1)===0)return Va(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,o=Error(R(419)),r=Fl(o,r,void 0),Va(e,t,l,r)}if(i=(l&e.childLanes)!==0,Be||i){if(r=we,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Ot(e,a),ht(r,e,a,-1))}return ps(),r=Fl(Error(R(421))),Va(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Oh.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Je=Zt(a.nextSibling),Qe=t,oe=!0,pt=null,e!==null&&(et[tt++]=Pt,et[tt++]=Tt,et[tt++]=kn,Pt=e.id,Tt=e.overflow,kn=t),t=is(t,r.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fi(e.return,t,n)}function Ll(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function qd(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Oe(e,t,r.children,n),r=ie.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ie,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ll(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&_o(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ll(t,!0,n,null,o);break;case"together":Ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xa(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Eh(e,t,n){switch(t.tag){case 3:Yd(t),ar();break;case 5:Ed(t);break;case 1:He(t.type)&&po(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;te(vo,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ie,ie.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gd(e,t,n):(te(ie,ie.current&1),e=At(e,t,n),e!==null?e.sibling:null);te(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return qd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),te(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Jd(e,t,n)}return At(e,t,n)}var Xd,Ni,Zd,ef;Xd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ni=function(){};Zd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Nn(Rt.current);var o=null;switch(n){case"input":a=Bl(e,a),r=Bl(e,r),o=[];break;case"select":a=ue({},a,{value:void 0}),r=ue({},r,{value:void 0}),o=[];break;case"textarea":a=Wl(e,a),r=Wl(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=co)}Jl(n,r);var l;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(i=a?.[u],r.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&i[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ne("scroll",e),o||i===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ef=function(e,t,n,r){n!==r&&(t.flags|=4)};function br(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kh(e,t,n){var r=t.pendingProps;switch(Ki(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return He(t.type)&&fo(),Ce(t),null;case 3:return r=t.stateNode,lr(),re(Ve),re(Pe),ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(za(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pt!==null&&(Ci(pt),pt=null))),Ni(e,t),Ce(t),null;case 5:es(t);var a=Nn(ta.current);if(n=t.type,e!==null&&t.stateNode!=null)Zd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ce(t),null}if(e=Nn(Rt.current),za(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kt]=t,r[Zr]=o,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(a=0;a<Fr.length;a++)ne(Fr[a],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":yu(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":_u(r,o),ne("invalid",r)}Jl(n,o),a=null;for(var l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="children"?typeof i=="string"?r.textContent!==i&&(o.suppressHydrationWarning!==!0&&Ma(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Ma(r.textContent,i,e),a=["children",""+i]):Vr.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&ne("scroll",r)}switch(n){case"input":Ca(r),gu(r,o,!0);break;case"textarea":Ca(r),Nu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=co)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[kt]=t,e[Zr]=r,Xd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ql(n,r),n){case"dialog":ne("cancel",e),ne("close",e),a=r;break;case"iframe":case"object":case"embed":ne("load",e),a=r;break;case"video":case"audio":for(a=0;a<Fr.length;a++)ne(Fr[a],e);a=r;break;case"source":ne("error",e),a=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),a=r;break;case"details":ne("toggle",e),a=r;break;case"input":yu(e,r),a=Bl(e,r),ne("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ue({},r,{value:void 0}),ne("invalid",e);break;case"textarea":_u(e,r),a=Wl(e,r),ne("invalid",e);break;default:a=r}Jl(n,a),i=a;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="style"?Tc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&xc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Hr(e,s):typeof s=="number"&&Hr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ne("scroll",e):s!=null&&Ti(e,o,s,l))}switch(n){case"input":Ca(e),gu(e,r,!1);break;case"textarea":Ca(e),Nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)ef(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Nn(ta.current),Nn(Rt.current),za(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(o=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:Ma(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ma(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Ce(t),null;case 13:if(re(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Je!==null&&(t.mode&1)!==0&&(t.flags&128)===0)gd(),ar(),t.flags|=98560,o=!1;else if(o=za(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[kt]=t}else ar(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else pt!==null&&(Ci(pt),pt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ie.current&1)!==0?_e===0&&(_e=3):ps())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return lr(),Ni(e,t),e===null&&qr(t.stateNode.containerInfo),Ce(t),null;case 10:return Gi(t.type._context),Ce(t),null;case 17:return He(t.type)&&fo(),Ce(t),null;case 19:if(re(ie),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)br(o,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=_o(e),l!==null){for(t.flags|=128,br(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&me()>sr&&(t.flags|=128,r=!0,br(o,!1),t.lanes=4194304)}else{if(!r)if(e=_o(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!oe)return Ce(t),null}else 2*me()-o.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,br(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=me(),t.sibling=null,n=ie.current,te(ie,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return fs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ke&1073741824)!==0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function $h(e,t){switch(Ki(t),t.tag){case 1:return He(t.type)&&fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),re(Ve),re(Pe),ts(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return es(t),null;case 13:if(re(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(ie),null;case 4:return lr(),null;case 10:return Gi(t.type._context),null;case 22:case 23:return fs(),null;case 24:return null;default:return null}}var Ha=!1,xe=!1,Rh=typeof WeakSet=="function"?WeakSet:Set,F=null;function Qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function wi(e,t,n){try{n()}catch(r){ce(e,t,r)}}var cc=!1;function bh(e,t){if(ai=io,e=od(),Hi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,i=-1,s=-1,u=0,h=0,y=e,p=null;t:for(;;){for(var E;y!==n||a!==0&&y.nodeType!==3||(i=l+a),y!==o||r!==0&&y.nodeType!==3||(s=l+r),y.nodeType===3&&(l+=y.nodeValue.length),(E=y.firstChild)!==null;)p=y,y=E;for(;;){if(y===e)break t;if(p===n&&++u===a&&(i=l),p===o&&++h===r&&(s=l),(E=y.nextSibling)!==null)break;y=p,p=y.parentNode}y=E}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(oi={focusedElem:e,selectionRange:n},io=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,N=k.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:dt(t.type,w),N);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(g){ce(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return k=cc,cc=!1,k}function Mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&wi(t,n,o)}a=a.next}while(a!==r)}}function Oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Si(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function tf(e){var t=e.alternate;t!==null&&(e.alternate=null,tf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[Zr],delete t[si],delete t[uh],delete t[ch])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nf(e){return e.tag===5||e.tag===3||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ei(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=co));else if(r!==4&&(e=e.child,e!==null))for(Ei(e,t,n),e=e.sibling;e!==null;)Ei(e,t,n),e=e.sibling}function ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ki(e,t,n),e=e.sibling;e!==null;)ki(e,t,n),e=e.sibling}var Se=null,ft=!1;function Vt(e,t,n){for(n=n.child;n!==null;)rf(e,t,n),n=n.sibling}function rf(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(bo,n)}catch{}switch(n.tag){case 5:xe||Qn(n,t);case 6:var r=Se,a=ft;Se=null,Vt(e,t,n),Se=r,ft=a,Se!==null&&(ft?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ft?(e=Se,n=n.stateNode,e.nodeType===8?bl(e.parentNode,n):e.nodeType===1&&bl(e,n),Qr(e)):bl(Se,n.stateNode));break;case 4:r=Se,a=ft,Se=n.stateNode.containerInfo,ft=!0,Vt(e,t,n),Se=r,ft=a;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&wi(n,t,l),a=a.next}while(a!==r)}Vt(e,t,n);break;case 1:if(!xe&&(Qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){ce(n,t,i)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Vt(e,t,n),xe=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function fc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rh),t.forEach(function(r){var a=Ah.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:Se=i.stateNode,ft=!1;break e;case 3:Se=i.stateNode.containerInfo,ft=!0;break e;case 4:Se=i.stateNode.containerInfo,ft=!0;break e}i=i.return}if(Se===null)throw Error(R(160));rf(o,l,a),Se=null,ft=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){ce(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)af(t,e),t=t.sibling}function af(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),St(e),r&4){try{Mr(3,e,e.return),Oo(3,e)}catch(w){ce(e,e.return,w)}try{Mr(5,e,e.return)}catch(w){ce(e,e.return,w)}}break;case 1:ct(t,e),St(e),r&512&&n!==null&&Qn(n,n.return);break;case 5:if(ct(t,e),St(e),r&512&&n!==null&&Qn(n,n.return),e.flags&32){var a=e.stateNode;try{Hr(a,"")}catch(w){ce(e,e.return,w)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Rc(a,o),Ql(i,l);var u=Ql(i,o);for(l=0;l<s.length;l+=2){var h=s[l],y=s[l+1];h==="style"?Tc(a,y):h==="dangerouslySetInnerHTML"?xc(a,y):h==="children"?Hr(a,y):Ti(a,h,y,u)}switch(i){case"input":Vl(a,o);break;case"textarea":bc(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?Gn(a,!!o.multiple,E,!1):p!==!!o.multiple&&(o.defaultValue!=null?Gn(a,!!o.multiple,o.defaultValue,!0):Gn(a,!!o.multiple,o.multiple?[]:"",!1))}a[Zr]=o}catch(w){ce(e,e.return,w)}}break;case 6:if(ct(t,e),St(e),r&4){if(e.stateNode===null)throw Error(R(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(w){ce(e,e.return,w)}}break;case 3:if(ct(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(w){ce(e,e.return,w)}break;case 4:ct(t,e),St(e);break;case 13:ct(t,e),St(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(cs=me())),r&4&&fc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||h,ct(t,e),xe=u):ct(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&(e.mode&1)!==0)for(F=e,h=e.child;h!==null;){for(y=F=h;F!==null;){switch(p=F,E=p.child,p.tag){case 0:case 11:case 14:case 15:Mr(4,p,p.return);break;case 1:Qn(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){ce(r,n,w)}}break;case 5:Qn(p,p.return);break;case 22:if(p.memoizedState!==null){mc(y);continue}}E!==null?(E.return=p,F=E):mc(y)}h=h.sibling}e:for(h=null,y=e;;){if(y.tag===5){if(h===null){h=y;try{a=y.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=y.stateNode,s=y.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Pc("display",l))}catch(w){ce(e,e.return,w)}}}else if(y.tag===6){if(h===null)try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(w){ce(e,e.return,w)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;h===y&&(h=null),y=y.return}h===y&&(h=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:ct(t,e),St(e),r&4&&fc(e);break;case 21:break;default:ct(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nf(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Hr(a,""),r.flags&=-33);var o=dc(e);ki(e,o,a);break;case 3:case 4:var l=r.stateNode.containerInfo,i=dc(e);Ei(e,i,l);break;default:throw Error(R(161))}}catch(s){ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ch(e,t,n){F=e,of(e,t,n)}function of(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var a=F,o=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||Ha;if(!l){var i=a.alternate,s=i!==null&&i.memoizedState!==null||xe;i=Ha;var u=xe;if(Ha=l,(xe=s)&&!u)for(F=a;F!==null;)l=F,s=l.child,l.tag===22&&l.memoizedState!==null?hc(a):s!==null?(s.return=l,F=s):hc(a);for(;o!==null;)F=o,of(o,t,n),o=o.sibling;F=a,Ha=i,xe=u}pc(e,t,n)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,F=o):pc(e,t,n)}}function pc(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:xe||Oo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&qu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qu(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var y=h.dehydrated;y!==null&&Qr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}xe||t.flags&512&&Si(t)}catch(p){ce(t,t.return,p)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function mc(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function hc(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oo(4,t)}catch(s){ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){ce(t,a,s)}}var o=t.return;try{Si(t)}catch(s){ce(t,o,s)}break;case 5:var l=t.return;try{Si(t)}catch(s){ce(t,l,s)}}}catch(s){ce(t,t.return,s)}if(t===e){F=null;break}var i=t.sibling;if(i!==null){i.return=t.return,F=i;break}F=t.return}}var xh=Math.ceil,So=It.ReactCurrentDispatcher,ss=It.ReactCurrentOwner,rt=It.ReactCurrentBatchConfig,Q=0,we=null,ve=null,Ee=0,Ke=0,Yn=sn(0),_e=0,oa=null,Rn=0,Ao=0,us=0,zr=null,ze=null,cs=0,sr=1/0,Ct=null,Eo=!1,$i=null,tn=null,Wa=!1,Yt=null,ko=0,Br=0,Ri=null,Za=-1,eo=0;function Ae(){return(Q&6)!==0?me():Za!==-1?Za:Za=me()}function nn(e){return(e.mode&1)===0?1:(Q&2)!==0&&Ee!==0?Ee&-Ee:fh.transition!==null?(eo===0&&(eo=Vc()),eo):(e=X,e!==0||(e=window.event,e=e===void 0?16:Gc(e.type)),e)}function ht(e,t,n,r){if(50<Br)throw Br=0,Ri=null,Error(R(185));la(e,n,r),((Q&2)===0||e!==we)&&(e===we&&((Q&2)===0&&(Ao|=n),_e===4&&Jt(e,Ee)),We(e,r),n===1&&Q===0&&(t.mode&1)===0&&(sr=me()+500,Do&&un()))}function We(e,t){var n=e.callbackNode;mm(e,t);var r=lo(e,e===we?Ee:0);if(r===0)n!==null&&Eu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eu(n),t===1)e.tag===0?dh(vc.bind(null,e)):hd(vc.bind(null,e)),ih(function(){(Q&6)===0&&un()}),n=null;else{switch(Hc(r)){case 1:n=Ai;break;case 4:n=zc;break;case 16:n=oo;break;case 536870912:n=Bc;break;default:n=oo}n=mf(n,lf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lf(e,t){if(Za=-1,eo=0,(Q&6)!==0)throw Error(R(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=lo(e,e===we?Ee:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=$o(e,r);else{t=r;var a=Q;Q|=2;var o=uf();(we!==e||Ee!==t)&&(Ct=null,sr=me()+500,wn(e,t));do try{Dh();break}catch(i){sf(e,i)}while(!0);Yi(),So.current=o,Q=a,ve!==null?t=0:(we=null,Ee=0,t=_e)}if(t!==0){if(t===2&&(a=Zl(e),a!==0&&(r=a,t=bi(e,a))),t===1)throw n=oa,wn(e,0),Jt(e,r),We(e,me()),n;if(t===6)Jt(e,r);else{if(a=e.current.alternate,(r&30)===0&&!Ph(a)&&(t=$o(e,r),t===2&&(o=Zl(e),o!==0&&(r=o,t=bi(e,o))),t===1))throw n=oa,wn(e,0),Jt(e,r),We(e,me()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:yn(e,ze,Ct);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=cs+500-me(),10<t)){if(lo(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ii(yn.bind(null,e,ze,Ct),t);break}yn(e,ze,Ct);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-mt(r);o=1<<l,l=t[l],l>a&&(a=l),r&=~o}if(r=a,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xh(r/1960))-r,10<r){e.timeoutHandle=ii(yn.bind(null,e,ze,Ct),r);break}yn(e,ze,Ct);break;case 5:yn(e,ze,Ct);break;default:throw Error(R(329))}}}return We(e,me()),e.callbackNode===n?lf.bind(null,e):null}function bi(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=$o(e,t),e!==2&&(t=ze,ze=n,t!==null&&Ci(t)),e}function Ci(e){ze===null?ze=e:ze.push.apply(ze,e)}function Ph(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!vt(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~us,t&=~Ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function vc(e){if((Q&6)!==0)throw Error(R(327));tr();var t=lo(e,0);if((t&1)===0)return We(e,me()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=Zl(e);r!==0&&(t=r,n=bi(e,r))}if(n===1)throw n=oa,wn(e,0),Jt(e,t),We(e,me()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,ze,Ct),We(e,me()),null}function ds(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(sr=me()+500,Do&&un())}}function bn(e){Yt!==null&&Yt.tag===0&&(Q&6)===0&&tr();var t=Q;Q|=1;var n=rt.transition,r=X;try{if(rt.transition=null,X=1,e)return e()}finally{X=r,rt.transition=n,Q=t,(Q&6)===0&&un()}}function fs(){Ke=Yn.current,re(Yn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lh(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Ki(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fo();break;case 3:lr(),re(Ve),re(Pe),ts();break;case 5:es(r);break;case 4:lr();break;case 13:re(ie);break;case 19:re(ie);break;case 10:Gi(r.type._context);break;case 22:case 23:fs()}n=n.return}if(we=e,ve=e=rn(e.current,null),Ee=Ke=t,_e=0,oa=null,us=Ao=Rn=0,ze=zr=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=a,r.next=l}n.pending=r}_n=null}return e}function sf(e,t){do{var n=ve;try{if(Yi(),Ga.current=wo,No){for(var r=se.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}No=!1}if($n=0,Ne=ge=se=null,jr=!1,na=0,ss.current=null,n===null||n.return===null){_e=1,oa=t,ve=null;break}e:{var o=e,l=n.return,i=n,s=t;if(t=Ee,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=i,y=h.tag;if((h.mode&1)===0&&(y===0||y===11||y===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=rc(l);if(E!==null){E.flags&=-257,ac(E,l,i,o,t),E.mode&1&&nc(o,u,t),t=E,s=u;var k=t.updateQueue;if(k===null){var w=new Set;w.add(s),t.updateQueue=w}else k.add(s);break e}else{if((t&1)===0){nc(o,u,t),ps();break e}s=Error(R(426))}}else if(oe&&i.mode&1){var N=rc(l);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),ac(N,l,i,o,t),Ji(ir(s,i));break e}}o=s=ir(s,i),_e!==4&&(_e=2),zr===null?zr=[o]:zr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Hd(o,s,t);Gu(o,d);break e;case 1:i=s;var c=o.type,f=o.stateNode;if((o.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(tn===null||!tn.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Wd(o,i,t);Gu(o,g);break e}}o=o.return}while(o!==null)}df(n)}catch(C){t=C,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function uf(){var e=So.current;return So.current=wo,e===null?wo:e}function ps(){(_e===0||_e===3||_e===2)&&(_e=4),we===null||(Rn&268435455)===0&&(Ao&268435455)===0||Jt(we,Ee)}function $o(e,t){var n=Q;Q|=2;var r=uf();(we!==e||Ee!==t)&&(Ct=null,wn(e,t));do try{Th();break}catch(a){sf(e,a)}while(!0);if(Yi(),Q=n,So.current=r,ve!==null)throw Error(R(261));return we=null,Ee=0,_e}function Th(){for(;ve!==null;)cf(ve)}function Dh(){for(;ve!==null&&!om();)cf(ve)}function cf(e){var t=pf(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?df(e):ve=t,ss.current=null}function df(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=kh(n,t,Ke),n!==null){ve=n;return}}else{if(n=$h(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,ve=null;return}}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);_e===0&&(_e=5)}function yn(e,t,n){var r=X,a=rt.transition;try{rt.transition=null,X=1,Fh(e,t,n,r)}finally{rt.transition=a,X=r}return null}function Fh(e,t,n,r){do tr();while(Yt!==null);if((Q&6)!==0)throw Error(R(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(hm(e,o),e===we&&(ve=we=null,Ee=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Wa||(Wa=!0,mf(oo,function(){return tr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=rt.transition,rt.transition=null;var l=X;X=1;var i=Q;Q|=4,ss.current=null,bh(e,n),af(n,e),th(oi),io=!!ai,oi=ai=null,e.current=n,Ch(n,e,a),lm(),Q=i,X=l,rt.transition=o}else e.current=n;if(Wa&&(Wa=!1,Yt=e,ko=a),o=e.pendingLanes,o===0&&(tn=null),um(n.stateNode,r),We(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Eo)throw Eo=!1,e=$i,$i=null,e;return(ko&1)!==0&&e.tag!==0&&tr(),o=e.pendingLanes,(o&1)!==0?e===Ri?Br++:(Br=0,Ri=e):Br=0,un(),null}function tr(){if(Yt!==null){var e=Hc(ko),t=rt.transition,n=X;try{if(rt.transition=null,X=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,ko=0,(Q&6)!==0)throw Error(R(331));var a=Q;for(Q|=4,F=e.current;F!==null;){var o=F,l=o.child;if((F.flags&16)!==0){var i=o.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(F=u;F!==null;){var h=F;switch(h.tag){case 0:case 11:case 15:Mr(8,h,o)}var y=h.child;if(y!==null)y.return=h,F=y;else for(;F!==null;){h=F;var p=h.sibling,E=h.return;if(tf(h),h===u){F=null;break}if(p!==null){p.return=E,F=p;break}F=E}}}var k=o.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}F=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,F=l;else e:for(;F!==null;){if(o=F,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Mr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,F=d;break e}F=o.return}}var c=e.current;for(F=c;F!==null;){l=F;var f=l.child;if((l.subtreeFlags&2064)!==0&&f!==null)f.return=l,F=f;else e:for(l=c;F!==null;){if(i=F,(i.flags&2048)!==0)try{switch(i.tag){case 0:case 11:case 15:Oo(9,i)}}catch(C){ce(i,i.return,C)}if(i===l){F=null;break e}var g=i.sibling;if(g!==null){g.return=i.return,F=g;break e}F=i.return}}if(Q=a,un(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(bo,e)}catch{}r=!0}return r}finally{X=n,rt.transition=t}}return!1}function yc(e,t,n){t=ir(n,t),t=Hd(e,t,1),e=en(e,t,1),t=Ae(),e!==null&&(la(e,1,t),We(e,t))}function ce(e,t,n){if(e.tag===3)yc(e,e,n);else for(;t!==null;){if(t.tag===3){yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=ir(n,e),e=Wd(t,e,1),t=en(t,e,1),e=Ae(),t!==null&&(la(t,1,e),We(t,e));break}}t=t.return}}function Lh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Ee&n)===n&&(_e===4||_e===3&&(Ee&130023424)===Ee&&500>me()-cs?wn(e,0):us|=n),We(e,t)}function ff(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ta,Ta<<=1,(Ta&130023424)===0&&(Ta=4194304)));var n=Ae();e=Ot(e,t),e!==null&&(la(e,t,n),We(e,n))}function Oh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ff(e,n)}function Ah(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),ff(e,n)}var pf;pf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Be=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Be=!1,Eh(e,t,n);Be=(e.flags&131072)!==0}else Be=!1,oe&&(t.flags&1048576)!==0&&vd(t,ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xa(e,t),e=t.pendingProps;var a=rr(t,Pe.current);er(t,n),a=rs(null,t,r,e,a,n);var o=as();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(o=!0,po(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Xi(t),a.updater=Lo,t.stateNode=a,a._reactInternals=t,mi(t,r,e,n),t=yi(null,t,r,!0,o,n)):(t.tag=0,oe&&o&&Wi(t),Oe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xa(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Uh(r),e=dt(r,e),a){case 0:t=vi(null,t,r,e,n);break e;case 1:t=ic(null,t,r,e,n);break e;case 11:t=oc(null,t,r,e,n);break e;case 14:t=lc(null,t,r,dt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),vi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),ic(e,t,r,a,n);case 3:e:{if(Yd(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,a=o.element,Sd(e,t),go(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=ir(Error(R(423)),t),t=sc(e,t,r,n,a);break e}else if(r!==a){a=ir(Error(R(424)),t),t=sc(e,t,r,n,a);break e}else for(Je=Zt(t.stateNode.containerInfo.firstChild),Qe=t,oe=!0,pt=null,n=Nd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===a){t=At(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return Ed(t),e===null&&di(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,l=a.children,li(r,a)?l=null:o!==null&&li(r,o)&&(t.flags|=32),Qd(e,t),Oe(e,t,l,n),t.child;case 6:return e===null&&di(t),null;case 13:return Gd(e,t,n);case 4:return Zi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=or(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),oc(e,t,r,a,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,te(vo,r._currentValue),r._currentValue=l,o!==null)if(vt(o.value,l)){if(o.children===a.children&&!Ve.current){t=At(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){l=o.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Dt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),fi(o.return,n,t),i.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(R(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),fi(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Oe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,er(t,n),a=at(a),r=r(a),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,a=dt(r,t.pendingProps),a=dt(r.type,a),lc(e,t,r,a,n);case 15:return Kd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),Xa(e,t),t.tag=1,He(r)?(e=!0,po(t)):e=!1,er(t,n),Vd(t,r,a),mi(t,r,a,n),yi(null,t,r,!0,e,n);case 19:return qd(e,t,n);case 22:return Jd(e,t,n)}throw Error(R(156,t.tag))};function mf(e,t){return Mc(e,t)}function Ih(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new Ih(e,t,n,r)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uh(e){if(typeof e=="function")return ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fi)return 11;if(e===Li)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function to(e,t,n,r,a,o){var l=2;if(r=e,typeof e=="function")ms(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case jn:return Sn(n.children,a,o,t);case Di:l=8,a|=8;break;case Ul:return e=nt(12,n,t,a|2),e.elementType=Ul,e.lanes=o,e;case jl:return e=nt(13,n,t,a),e.elementType=jl,e.lanes=o,e;case Ml:return e=nt(19,n,t,a),e.elementType=Ml,e.lanes=o,e;case Ec:return Io(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wc:l=10;break e;case Sc:l=9;break e;case Fi:l=11;break e;case Li:l=14;break e;case Ht:l=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=nt(l,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Sn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function Io(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Ec,e.lanes=n,e.stateNode={isHidden:!1},e}function Ol(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function Al(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jh(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function hs(e,t,n,r,a,o,l,i,s){return e=new jh(e,t,n,i,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xi(o),e}function Mh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hf(e){if(!e)return on;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(He(n))return md(e,n,t)}return t}function vf(e,t,n,r,a,o,l,i,s){return e=hs(n,r,!0,e,a,o,l,i,s),e.context=hf(null),n=e.current,r=Ae(),a=nn(n),o=Dt(r,a),o.callback=t??null,en(n,o,a),e.current.lanes=a,la(e,a,r),We(e,r),e}function Uo(e,t,n,r){var a=t.current,o=Ae(),l=nn(a);return n=hf(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(a,t,l),e!==null&&(ht(e,a,l,o),Ya(e,a,l)),l}function Ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vs(e,t){gc(e,t),(e=e.alternate)&&gc(e,t)}function zh(){return null}var yf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ys(e){this._internalRoot=e}jo.prototype.render=ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Uo(e,t,null,null)};jo.prototype.unmount=ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Uo(null,e,null,null)}),t[Lt]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Yc(e)}};function gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function Bh(e,t,n,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var u=Ro(l);o.call(u)}}var l=vf(t,r,e,0,null,!1,!1,"",_c);return e._reactRootContainer=l,e[Lt]=l.current,qr(e.nodeType===8?e.parentNode:e),bn(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var u=Ro(s);i.call(u)}}var s=hs(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=s,e[Lt]=s.current,qr(e.nodeType===8?e.parentNode:e),bn(function(){Uo(t,s,n,r)}),s}function zo(e,t,n,r,a){var o=n._reactRootContainer;if(o){var l=o;if(typeof a=="function"){var i=a;a=function(){var s=Ro(l);i.call(s)}}Uo(t,l,e,a)}else l=Bh(n,t,e,a,r);return Ro(l)}Wc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dr(t.pendingLanes);n!==0&&(Ii(t,n|1),We(t,me()),(Q&6)===0&&(sr=me()+500,un()))}break;case 13:bn(function(){var r=Ot(e,1);if(r!==null){var a=Ae();ht(r,e,1,a)}}),vs(e,1)}};Ui=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Ae();ht(t,e,134217728,n)}vs(e,134217728)}};Kc=function(e){if(e.tag===13){var t=nn(e),n=Ot(e,t);if(n!==null){var r=Ae();ht(n,e,t,r)}vs(e,t)}};Jc=function(){return X};Qc=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Gl=function(e,t,n){switch(t){case"input":if(Vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=To(r);if(!a)throw Error(R(90));$c(r),Vl(r,a)}}}break;case"textarea":bc(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};Lc=ds;Oc=bn;var Vh={usingClientEntryPoint:!1,Events:[sa,Vn,To,Dc,Fc,ds]},Cr={findFiberByHostInstance:gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hh={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uc(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||zh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(xr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!xr.isDisabled&&xr.supportsFiber))try{bo=xr.inject(Hh),$t=xr}catch{}var xr;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vh;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gs(t))throw Error(R(200));return Mh(e,t,null,n)};qe.createRoot=function(e,t){if(!gs(e))throw Error(R(299));var n=!1,r="",a=yf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=hs(e,1,!1,null,null,n,!1,r,a),e[Lt]=t.current,qr(e.nodeType===8?e.parentNode:e),new ys(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Uc(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return bn(e)};qe.hydrate=function(e,t,n){if(!Mo(t))throw Error(R(200));return zo(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!gs(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,a=!1,o="",l=yf;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=vf(t,null,e,1,n??null,a,!1,o,l),e[Lt]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new jo(t)};qe.render=function(e,t,n){if(!Mo(t))throw Error(R(200));return zo(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(R(40));return e._reactRootContainer?(bn(function(){zo(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};qe.unstable_batchedUpdates=ds;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mo(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return zo(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426"});var _s=mn((Ty,Nf)=>{"use strict";function _f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_f)}catch(e){console.error(e)}}_f(),Nf.exports=gf()});var Sf=mn(Ns=>{"use strict";var wf=_s();Ns.createRoot=wf.createRoot,Ns.hydrateRoot=wf.hydrateRoot;var Dy});var $=vr(gr(),1),cp=vr(Sf(),1);var G=vr(gr()),Lv=vr(_s());var T=vr(gr());function ca(){return ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ca.apply(this,arguments)}var yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yt||(yt={}));var Ef="popstate";function Cf(e){e===void 0&&(e={});function t(r,a){let{pathname:o,search:l,hash:i}=r.location;return Ss("",{pathname:o,search:l,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Pn(a)}return Kh(t,n,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Es(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wh(){return Math.random().toString(36).substr(2,8)}function kf(e,t){return{usr:e.state,key:e.key,idx:t}}function Ss(e,t,n,r){return n===void 0&&(n=null),ca({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ut(t):t,{state:n,key:t&&t.key||r||Wh()})}function Pn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ut(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Kh(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,l=a.history,i=yt.Pop,s=null,u=h();u==null&&(u=0,l.replaceState(ca({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function y(){i=yt.Pop;let N=h(),d=N==null?null:N-u;u=N,s&&s({action:i,location:w.location,delta:d})}function p(N,d){i=yt.Push;let c=Ss(w.location,N,d);n&&n(c,N),u=h()+1;let f=kf(c,u),g=w.createHref(c);try{l.pushState(f,"",g)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(g)}o&&s&&s({action:i,location:w.location,delta:1})}function E(N,d){i=yt.Replace;let c=Ss(w.location,N,d);n&&n(c,N),u=h();let f=kf(c,u),g=w.createHref(c);l.replaceState(f,"",g),o&&s&&s({action:i,location:w.location,delta:0})}function k(N){let d=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof N=="string"?N:Pn(N);return c=c.replace(/ $/,"%20"),ae(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let w={get action(){return i},get location(){return e(a,l)},listen(N){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(Ef,y),s=N,()=>{a.removeEventListener(Ef,y),s=null}},createHref(N){return t(a,N)},createURL:k,encodeLocation(N){let d=k(N);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:p,replace:E,go(N){return l.go(N)}};return w}var $f;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($f||($f={}));function Bo(e,t,n){return n===void 0&&(n="/"),Jh(e,t,n,!1)}function Jh(e,t,n,r){let a=typeof t=="string"?Ut(t):t,o=dn(a.pathname||"/",n);if(o==null)return null;let l=xf(e);Qh(l);let i=null;for(let s=0;i==null&&s<l.length;++s){let u=Tf(o);i=rv(l[s],u,r)}return i}function xf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(o,l,i)=>{let s={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(ae(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=bt([r,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xf(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:tv(u,o.index),routesMeta:h})};return e.forEach((o,l)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))a(o,l);else for(let s of Pf(o.path))a(o,l,s)}),t}function Pf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let l=Pf(r.join("/")),i=[];return i.push(...l.map(s=>s===""?o:[o,s].join("/"))),a&&i.push(...l),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function Qh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Yh=/^:[\w-]+$/,Gh=3,qh=2,Xh=1,Zh=10,ev=-2,Rf=e=>e==="*";function tv(e,t){let n=e.split("/"),r=n.length;return n.some(Rf)&&(r+=ev),t&&(r+=qh),n.filter(a=>!Rf(a)).reduce((a,o)=>a+(Yh.test(o)?Gh:o===""?Xh:Zh),r)}function nv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function rv(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,a={},o="/",l=[];for(let i=0;i<r.length;++i){let s=r[i],u=i===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",y=cn({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},h),p=s.route;if(!y&&u&&n&&!r[r.length-1].route.index&&(y=cn({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},h)),!y)return null;Object.assign(a,y.params),l.push({params:a,pathname:bt([o,y.pathname]),pathnameBase:sv(bt([o,y.pathnameBase])),route:p}),y.pathnameBase!=="/"&&(o=bt([o,y.pathnameBase]))}return l}function cn(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=av(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((u,h,y)=>{let{paramName:p,isOptional:E}=h;if(p==="*"){let w=i[y]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}let k=i[y];return E&&!k?u[p]=void 0:u[p]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function av(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Es(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,i,s)=>(r.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Tf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Es(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lv=e=>ov.test(e);function ks(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Ut(e):e,o;if(n)if(lv(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Es(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=bf(n.substring(1),"/"):o=bf(n,t)}else o=t;return{pathname:o,search:uv(r),hash:cv(a)}}function bf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function ws(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Vo(e,t){let n=iv(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ho(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Ut(e):(a=ca({},e),ae(!a.pathname||!a.pathname.includes("?"),ws("?","pathname","search",a)),ae(!a.pathname||!a.pathname.includes("#"),ws("#","pathname","hash",a)),ae(!a.search||!a.search.includes("#"),ws("#","search","hash",a)));let o=e===""||a.pathname==="",l=o?"/":a.pathname,i;if(l==null)i=n;else{let y=t.length-1;if(!r&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),y-=1;a.pathname=p.join("/")}i=y>=0?t[y]:"/"}let s=ks(a,i),u=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}var bt=e=>e.join("/").replace(/\/\/+/g,"/"),sv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Wo(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Df=["post","put","patch","delete"],Ly=new Set(Df),dv=["get",...Df],Oy=new Set(dv);var Ay=Symbol("deferred");function da(){return da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},da.apply(this,arguments)}var fr=T.createContext(null),Jo=T.createContext(null);var gt=T.createContext(null),pa=T.createContext(null),_t=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Of=T.createContext(null);function Rs(e,t){let{relative:n}=t===void 0?{}:t;Tn()||ae(!1);let{basename:r,navigator:a}=T.useContext(gt),{hash:o,pathname:l,search:i}=pr(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:bt([r,l])),a.createHref({pathname:s,search:i,hash:o})}function Tn(){return T.useContext(pa)!=null}function fn(){return Tn()||ae(!1),T.useContext(pa).location}function Af(e){T.useContext(gt).static||T.useLayoutEffect(e)}function jt(){let{isDataRoute:e}=T.useContext(_t);return e?bv():_v()}function _v(){Tn()||ae(!1);let e=T.useContext(fr),{basename:t,future:n,navigator:r}=T.useContext(gt),{matches:a}=T.useContext(_t),{pathname:o}=fn(),l=JSON.stringify(Vo(a,n.v7_relativeSplatPath)),i=T.useRef(!1);return Af(()=>{i.current=!0}),T.useCallback(function(u,h){if(h===void 0&&(h={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let y=Ho(u,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:bt([t,y.pathname])),(h.replace?r.replace:r.push)(y,h.state,h)},[t,r,l,o,e])}function Qo(){let{matches:e}=T.useContext(_t),t=e[e.length-1];return t?t.params:{}}function pr(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(gt),{matches:a}=T.useContext(_t),{pathname:o}=fn(),l=JSON.stringify(Vo(a,r.v7_relativeSplatPath));return T.useMemo(()=>Ho(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function If(e,t){return Uf(e,t)}function Uf(e,t,n,r){Tn()||ae(!1);let{navigator:a}=T.useContext(gt),{matches:o}=T.useContext(_t),l=o[o.length-1],i=l?l.params:{},s=l?l.pathname:"/",u=l?l.pathnameBase:"/",h=l&&l.route,y=fn(),p;if(t){var E;let c=typeof t=="string"?Ut(t):t;u==="/"||(E=c.pathname)!=null&&E.startsWith(u)||ae(!1),p=c}else p=y;let k=p.pathname||"/",w=k;if(u!=="/"){let c=u.replace(/^\//,"").split("/");w="/"+k.replace(/^\//,"").split("/").slice(c.length).join("/")}let N=Bo(e,{pathname:w}),d=Ev(N&&N.map(c=>Object.assign({},c,{params:Object.assign({},i,c.params),pathname:bt([u,a.encodeLocation?a.encodeLocation(c.pathname).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?u:bt([u,a.encodeLocation?a.encodeLocation(c.pathnameBase).pathname:c.pathnameBase])})),o,n,r);return t&&d?T.createElement(pa.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:yt.Pop}},d):d}function Nv(){let e=zf(),t=Wo(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:a},n):null,null)}var wv=T.createElement(Nv,null),$s=class extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(_t.Provider,{value:this.props.routeContext},T.createElement(Of.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Sv(e){let{routeContext:t,match:n,children:r}=e,a=T.useContext(fr);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(_t.Provider,{value:t},r)}function Ev(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let h=l.findIndex(y=>y.route.id&&i?.[y.route.id]!==void 0);h>=0||ae(!1),l=l.slice(0,Math.min(l.length,h+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let y=l[h];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(u=h),y.route.id){let{loaderData:p,errors:E}=n,k=y.route.loader&&p[y.route.id]===void 0&&(!E||E[y.route.id]===void 0);if(y.route.lazy||k){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((h,y,p)=>{let E,k=!1,w=null,N=null;n&&(E=i&&y.route.id?i[y.route.id]:void 0,w=y.route.errorElement||wv,s&&(u<0&&p===0?(Cv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,N=null):u===p&&(k=!0,N=y.route.hydrateFallbackElement||null)));let d=t.concat(l.slice(0,p+1)),c=()=>{let f;return E?f=w:k?f=N:y.route.Component?f=T.createElement(y.route.Component,null):y.route.element?f=y.route.element:f=h,T.createElement(Sv,{match:y,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:f})};return n&&(y.route.ErrorBoundary||y.route.errorElement||p===0)?T.createElement($s,{location:n.location,revalidation:n.revalidation,component:w,error:E,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var jf=(function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e})(jf||{}),Ko=(function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e})(Ko||{});function kv(e){let t=T.useContext(fr);return t||ae(!1),t}function $v(e){let t=T.useContext(Jo);return t||ae(!1),t}function Rv(e){let t=T.useContext(_t);return t||ae(!1),t}function Mf(e){let t=Rv(e),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function zf(){var e;let t=T.useContext(Of),n=$v(Ko.UseRouteError),r=Mf(Ko.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function bv(){let{router:e}=kv(jf.UseNavigateStable),t=Mf(Ko.UseNavigateStable),n=T.useRef(!1);return Af(()=>{n.current=!0}),T.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,da({fromRouteId:t},o)))},[e,t])}var Ff={};function Cv(e,t,n){!t&&!Ff[e]&&(Ff[e]=!0)}var dr=(e,t,n)=>(""+t+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."),void 0);function Bf(e,t){e?.v7_startTransition===void 0&&dr("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),e?.v7_relativeSplatPath===void 0&&(!t||t.v7_relativeSplatPath===void 0)&&dr("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(t.v7_fetcherPersist===void 0&&dr("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),t.v7_normalizeFormMethod===void 0&&dr("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),t.v7_partialHydration===void 0&&dr("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),t.v7_skipActionErrorRevalidation===void 0&&dr("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}var xv="startTransition",Vy=T[xv];function bs(e){let{to:t,replace:n,state:r,relative:a}=e;Tn()||ae(!1);let{future:o,static:l}=T.useContext(gt),{matches:i}=T.useContext(_t),{pathname:s}=fn(),u=jt(),h=Ho(t,Vo(i,o.v7_relativeSplatPath),s,a==="path"),y=JSON.stringify(h);return T.useEffect(()=>u(JSON.parse(y),{replace:n,state:r,relative:a}),[u,y,a,n,r]),null}function Nt(e){ae(!1)}function Cs(e){let{basename:t="/",children:n=null,location:r,navigationType:a=yt.Pop,navigator:o,static:l=!1,future:i}=e;Tn()&&ae(!1);let s=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:s,navigator:o,static:l,future:da({v7_relativeSplatPath:!1},i)}),[s,i,o,l]);typeof r=="string"&&(r=Ut(r));let{pathname:h="/",search:y="",hash:p="",state:E=null,key:k="default"}=r,w=T.useMemo(()=>{let N=dn(h,s);return N==null?null:{location:{pathname:N,search:y,hash:p,state:E,key:k},navigationType:a}},[s,h,y,p,E,k,a]);return w==null?null:T.createElement(gt.Provider,{value:u},T.createElement(pa.Provider,{children:n,value:w}))}function xs(e){let{children:t,location:n}=e;return If(fa(t),n)}var Hy=new Promise(()=>{});function fa(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,a)=>{if(!T.isValidElement(r))return;let o=[...t,a];if(r.type===T.Fragment){n.push.apply(n,fa(r.props.children,o));return}r.type!==Nt&&ae(!1),!r.props.index||!r.props.children||ae(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=fa(r.props.children,o)),n.push(l)}),n}function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yo.apply(this,arguments)}function Wf(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ov(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Av(e,t){return e.button===0&&(!t||t==="_self")&&!Ov(e)}var Iv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Uv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];var jv="6";try{window.__reactRouterVersion=jv}catch{}var Mv=G.createContext({isTransitioning:!1});var zv="startTransition",Vf=G[zv],Bv="flushSync",hg=Lv[Bv],Vv="useId",vg=G[Vv];function Kf(e){let{basename:t,children:n,future:r,window:a}=e,o=G.useRef();o.current==null&&(o.current=Cf({window:a,v5Compat:!0}));let l=o.current,[i,s]=G.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},h=G.useCallback(y=>{u&&Vf?Vf(()=>s(y)):s(y)},[s,u]);return G.useLayoutEffect(()=>l.listen(h),[l,h]),G.useEffect(()=>Bf(r),[r]),G.createElement(Cs,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:l,future:r})}var Hv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xe=G.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:o,replace:l,state:i,target:s,to:u,preventScrollReset:h,viewTransition:y}=t,p=Wf(t,Iv),{basename:E}=G.useContext(gt),k,w=!1;if(typeof u=="string"&&Wv.test(u)&&(k=u,Hv))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),C=dn(g.pathname,E);g.origin===f.origin&&C!=null?u=C+g.search+g.hash:w=!0}catch{}let N=Rs(u,{relative:a}),d=Jv(u,{replace:l,state:i,target:s,preventScrollReset:h,relative:a,viewTransition:y});function c(f){r&&r(f),f.defaultPrevented||d(f)}return G.createElement("a",Yo({},p,{href:k||N,onClick:w||o?r:c,ref:n,target:s}))}),Jf=G.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:l=!1,style:i,to:s,viewTransition:u,children:h}=t,y=Wf(t,Uv),p=pr(s,{relative:y.relative}),E=fn(),k=G.useContext(Jo),{navigator:w,basename:N}=G.useContext(gt),d=k!=null&&Qv(p)&&u===!0,c=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,f=E.pathname,g=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;a||(f=f.toLowerCase(),g=g?g.toLowerCase():null,c=c.toLowerCase()),g&&N&&(g=dn(g,N)||g);let C=c!=="/"&&c.endsWith("/")?c.length-1:c.length,P=f===c||!l&&f.startsWith(c)&&f.charAt(C)==="/",L=g!=null&&(g===c||!l&&g.startsWith(c)&&g.charAt(c.length)==="/"),D={isActive:P,isPending:L,isTransitioning:d},z=P?r:void 0,I;typeof o=="function"?I=o(D):I=[o,P?"active":null,L?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let j=typeof i=="function"?i(D):i;return G.createElement(Xe,Yo({},y,{"aria-current":z,className:I,ref:n,style:j,to:s,viewTransition:u}),typeof h=="function"?h(D):h)});var Ps;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ps||(Ps={}));var Hf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hf||(Hf={}));function Kv(e){let t=G.useContext(fr);return t||ae(!1),t}function Jv(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:l,viewTransition:i}=t===void 0?{}:t,s=jt(),u=fn(),h=pr(e,{relative:l});return G.useCallback(y=>{if(Av(y,n)){y.preventDefault();let p=r!==void 0?r:Pn(u)===Pn(h);s(e,{replace:p,state:a,preventScrollReset:o,relative:l,viewTransition:i})}},[u,s,h,r,a,n,e,o,l,i])}function Qv(e,t){t===void 0&&(t={});let n=G.useContext(Mv);n==null&&ae(!1);let{basename:r}=Kv(Ps.useViewTransitionState),a=pr(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=dn(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=dn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return cn(a.pathname,l)!=null||cn(a.pathname,o)!=null}var Yf=function(e,t,n,r){var a;t[0]=0;for(var o=1;o<t.length;o++){var l=t[o++],i=t[o]?(t[0]|=l?1:2,n[t[o++]]):t[++o];l===3?r[0]=i:l===4?r[1]=Object.assign(r[1]||{},i):l===5?(r[1]=r[1]||{})[t[++o]]=i:l===6?r[1][t[++o]]+=i+"":l?(a=e.apply(i,Yf(e,i,n,["",null])),r.push(a),i[0]?t[0]|=2:(t[o-2]=0,t[o]=a)):r.push(i)}return r},Qf=new Map;function Gf(e){var t=Qf.get(this);return t||(t=new Map,Qf.set(this,t)),(t=Yf(this,t.get(e)||(t.set(e,t=(function(n){for(var r,a,o=1,l="",i="",s=[0],u=function(p){o===1&&(p||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(0,p,l):o===3&&(p||l)?(s.push(3,p,l),o=2):o===2&&l==="..."&&p?s.push(4,p,0):o===2&&l&&!p?s.push(5,0,!0,l):o>=5&&((l||!p&&o===5)&&(s.push(o,0,l,a),o=6),p&&(s.push(o,p,0,a),o=6)),l=""},h=0;h<n.length;h++){h&&(o===1&&u(),u(h));for(var y=0;y<n[h].length;y++)r=n[h][y],o===1?r==="<"?(u(),s=[s],o=3):l+=r:o===4?l==="--"&&r===">"?(o=1,l=""):l=r+l[0]:i?r===i?i="":l+=r:r==='"'||r==="'"?i=r:r===">"?(u(),o=1):o&&(r==="="?(o=5,a=l,l=""):r==="/"&&(o<5||n[h][y+1]===">")?(u(),o===3&&(s=s[0]),o=s,(s=s[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(u(),o=2):l+=r),o===3&&l==="!--"&&(o=4,s=s[0])}return u(),s})(e)),t),arguments,[])).length>1?t:t[0]}var Ts=typeof window<"u"?window.__CONTENT_ENGINE_UI_CONFIG__||{}:{};function Go(e){return String(e||"").replace(/\/+$/,"")}function Yv(){return typeof window<"u"&&window.location?.origin?window.location.origin:"http://localhost:8080"}function qf(e,t){let n=String(e||"").trim();if(!n)return Go(t);try{return Go(new URL(n,t).toString())}catch{return Go(t)}}function Gv(e){return e.startsWith("data:")||e.startsWith("blob:")}function Xf(e,t){let n=String(e||"").trim();if(!n)return"";if(Gv(n))return n;try{return new URL(n).toString()}catch{return new URL(n,`${Go(t)}/`).toString()}}var Zf=qf(Ts.apiBaseUrl,Yv()),qv=qf(Ts.assetBaseUrl||Ts.apiBaseUrl,Zf);function ep(e){return Xf(e,Zf)}function mr(e){return Xf(e,qv)}var qo=document.getElementById("boot-fallback"),tp=document.getElementById("boot-fallback-message");function Xv(e){tp&&(tp.textContent=e)}function Zv(e){e&&Xv(e),qo&&qo.classList.remove("hidden")}function ey(){qo&&qo.classList.add("hidden")}function ha(e,t){t&&console.error(e,t),Zv(e)}var v=Gf.bind($.default.createElement),np=mr("/static/compare.html");function ye(e){return String(e||"unknown").replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function dp(e){let t=String(e||"everyday");return t==="occasion"?"Occasion":t==="current_event"?"Current Event":"Everyday"}function Xo(e){let t=String(e?.current_stage||"").trim();return t||String(e?.status||"unknown")}function Zo(e){return String(e?.processing_state||"idle").trim().toLowerCase()}function Is(e){return String(e?.processing_task||"none").trim().toLowerCase()}function Ln(e){let t=String(e?.processing_message||"").trim();if(t)return t;let n=Zo(e),r=Is(e);return r==="content_generation"&&n==="queued"?"Content creation queued":r==="content_generation"&&n==="running"?"Content creation in progress":r==="content_generation"&&n==="failed"?"Content creation failed":""}function ty(e){let t=Zo(e);return Is(e)==="content_generation"&&(t==="queued"||t==="running")}function ny(e){let t=String(e||"").toLowerCase();return t==="completed"||t==="approved"||t==="final_card_ready"?"success":t==="content_candidates_ready"||t==="text_selected"||t==="image_candidates_ready"||t==="image_selected"?"warning":t.includes("reject")||t.includes("timeout")||t.includes("failed")?"danger":t.includes("pending")||t.includes("progress")||t.includes("queued")?"warning":"neutral"}function Te({value:e}){return v`<span className=${`badge ${ny(e)}`}>${ye(e)}</span>`}function ry({name:e}){let t={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};return e==="home"?v`
        <svg ...${t}>
          <path d="M3 10.5 12 4l9 6.5" />
          <path d="M5.5 9.5V20h13V9.5" />
          <path d="M9.5 20v-5.5h5V20" />
        </svg>
      `:e==="themes"?v`
        <svg ...${t}>
          <path d="M12 3.5v3" />
          <path d="m5.9 5.9 2.1 2.1" />
          <path d="M3.5 12h3" />
          <path d="m5.9 18.1 2.1-2.1" />
          <path d="M12 20.5v-3" />
          <path d="m18.1 18.1-2.1-2.1" />
          <path d="M20.5 12h-3" />
          <path d="m18.1 5.9-2.1 2.1" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      `:e==="studio"?v`
        <svg ...${t}>
          <rect x="4" y="5" width="16" height="14" rx="3" />
          <path d="M8 15.5 11 12l2.5 2.5L16 11l2 2.5" />
          <circle cx="9" cy="9" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      `:e==="compare"?v`
        <svg ...${t}>
          <rect x="4" y="5" width="6.5" height="14" rx="2" />
          <rect x="13.5" y="5" width="6.5" height="14" rx="2" />
          <path d="M7.25 9h0" />
          <path d="M16.75 15h0" />
        </svg>
      `:v`
      <svg ...${t}>
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M8 9h8" />
        <path d="M8 12h8" />
        <path d="M8 15h5" />
      </svg>
    `}function Ue(e){if(!e)return"-";let t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString()}function ay(e){let t=Number(e||0);if(t<=0)return"0 B";let n=["B","KB","MB","GB","TB"],r=Math.min(Math.floor(Math.log(t)/Math.log(1024)),n.length-1);return`${(t/1024**r).toFixed(r===0?0:1)} ${n[r]}`}function rp(e){if(!e||typeof e!="object")return"";let t=["decision","status","winner_model","endpoint","image_preview_url","final_preview_url","notes"],n=[];return t.forEach(a=>{let o=e[a];o!=null&&String(o).trim()!==""&&n.push(`${a}: ${String(o)}`)}),n.length>0?n.slice(0,3).join(" | "):Object.entries(e).slice(0,2).map(([a,o])=>`${a}: ${String(o)}`).join(" | ")}async function M(e,t={}){let n=new Headers(t.headers||{});t.body&&!n.has("Content-Type")&&n.set("Content-Type","application/json");let r=await fetch(ep(e),{...t,headers:n}),a=await r.text(),o=null;if(a)try{o=JSON.parse(a)}catch{o=a}if(!r.ok){let l=o&&typeof o=="object"&&o.detail?o.detail:r.statusText;throw new Error(l||`Request failed (${r.status})`)}return o}function Dn(e,t){let n=String(t?.message||"").trim();return n||`Unable to load ${e}`}function Fn(e){let t=String(e?.message||"").trim().toLowerCase();return t==="not found"||t.includes("404")}function oy(e){return{theme_name:String(e.theme_name||"Internal Theme").trim(),tone_funny_pct:Number(e.tone_funny_pct||20),tone_emotion_pct:Number(e.tone_emotion_pct||80),tone_style:String(e.tone_style||"conversational"),audience:String(e.audience||"internal reviewer").trim(),cultural_context:String(e.cultural_context||"global").trim(),output_spec:iy(e.copy_style,e.target_words),avoid_cliches:!0,cards_per_theme:Number(e.cards_per_theme||10),notes:String(e.notes||"").trim()||null,rendering:{theme_style:"minimal",text_alignment:"center",export_size:"1080x1350"}}}function ya(e){let t=String(e||"").trim().toLowerCase();return t==="witty"||t==="playful"||t==="heartfelt"||t==="minimal"?t:t==="short_crisp"?"minimal":t==="warm_note"?"heartfelt":t.includes("play")?"playful":t.includes("witty")||t.includes("humor")||t.includes("fun")?"witty":t.includes("heart")||t.includes("warm")||t.includes("romantic")||t.includes("reflect")||t.includes("uplift")?"heartfelt":"minimal"}function ly(e){return!e||typeof e!="object"?null:{theme_name:String(e.theme_name||"Internal Theme").trim(),audience:String(e.audience||"internal reviewer").trim(),cultural_context:String(e.cultural_context||"global").trim(),tone_style:String(e.tone_style||"conversational").trim(),tone_funny_pct:Number(e.tone_funny_pct??20),tone_emotion_pct:Number(e.tone_emotion_pct??80),copy_style:ya(e.tone_style),target_words:14}}function iy(e,t){return{format:ya(e),length:{target_words:Number(t||16)},structure:{no_lists:!0,no_numbering:!0}}}function ma(e=null){return{theme_key:"",cards_per_theme:10,notes:"",copy_style:ya(e?.tone_style||e?.default_tone_style),target_words:14,tone_funny_pct:Number(e?.tone_funny_pct??e?.default_funny_pct??20)}}function fp(e){return{cards_per_theme:Number(e.cards_per_theme||10),notes:String(e.notes||"").trim()||null,copy_style:ya(e.copy_style),target_words:Number(e.target_words||14),tone_funny_pct:Number(e.tone_funny_pct??20)}}var sy=[{value:"witty",label:"witty"},{value:"playful",label:"playful"},{value:"heartfelt",label:"heartfelt"},{value:"minimal",label:"minimal"}];function pp(e){let t=ya(e);return t==="heartfelt"?"Heartfelt":t==="playful"?"Playful":t==="witty"?"Witty":"Minimal"}function Fs(){return sy.map(e=>v`<option key=${e.value} value=${e.value}>${e.label}</option>`)}function uy(e){return e&&typeof e.output_spec=="object"&&e.output_spec!==null?e.output_spec:{}}function el(e){let t=uy(e);return t&&typeof t.studio=="object"&&t.studio!==null?t.studio:{}}function cy(e){return!!el(e).is_favorite}async function dy(e){let t=await M(`/api/jobs/${e}/image-assets`);return t&&typeof t=="object"?t:{candidates:[]}}function Ls(e,t){let n=String(e||"").trim();if(!n)throw new Error("Created job response did not include a job_id");return t(`/studio/${n}`),n}function ap(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}function op(e){if(!e)return"";let t=new Date(e);return Number.isNaN(t.getTime())?"":t.toISOString().slice(0,10)}function lp(e){if(!e)return"";let t=new Date(e);if(Number.isNaN(t.getTime()))return"";let n=t.getTimezoneOffset()*60*1e3;return new Date(t.getTime()-n).toISOString().slice(0,16)}function hr(e,t=140){let n=String(e||"").trim();return n?n.length<=t?n:`${n.slice(0,t-1).trimEnd()}...`:""}function Us(e){return mr(e)}function mp(e){let t=Us(e);if(!t)return!1;if(t.startsWith("data:image/"))return!0;try{let n=new URL(t,window.location.origin);return/\.(png|jpe?g|webp|gif|svg)$/i.test(n.pathname)}catch{return!1}}function Os(e,t=[]){if(!e||typeof e!="object")return[];let n=[],r=new Set,a=(o,l,i)=>{let s=Us(l);!s||r.has(s)||!mp(s)||(r.add(s),n.push({label:o,url:s,source:i}))};if(a("Final Preview",e.final_preview_url,"final_preview_url"),a("Final PNG",e.final_asset_urls&&typeof e.final_asset_urls=="object"?e.final_asset_urls.png:"","final_asset_urls.png"),a("Image Preview",e.image_preview_url,"image_preview_url"),a("Content Preview",e.content_preview_url,"content_preview_url"),Array.isArray(t)){let o={final_preview:"Final Preview",final_png:"Final PNG",image_preview:"Image Preview",content_preview:"Content Preview"};t.forEach(l=>{let i=String(l?.asset_type||"").toLowerCase(),s=o[i];s&&a(s,l.public_url||l.asset_url,`asset:${i}`)})}return n}function va(e){let t=(0,$.useMemo)(()=>e.map(i=>`${i.source}:${i.url}`).join("|"),[e]),[n,r]=(0,$.useState)(0);(0,$.useEffect)(()=>{r(0)},[t]);let a=n<e.length?e[n]:null,o=e.length>0&&n>=e.length;function l(){r(i=>i+1)}return{currentCandidate:a,exhausted:o,handleError:l}}function fy({image:e}){let t=(0,$.useMemo)(()=>!e||!e.url?[]:[{label:e.label||"Preview",url:e.url,source:e.label||"preview"}],[e]),{currentCandidate:n,exhausted:r,handleError:a}=va(t);return v`
      <article className="image-card">
        ${n?v`
              <a href=${n.url} target="_blank" rel="noreferrer">
                <img src=${n.url} alt=${e.label} loading="lazy" onError=${a} />
              </a>
            `:v`<p className="empty-state">${r?"Preview unavailable.":"No preview available yet."}</p>`}
        <p className="image-caption">${e.label}</p>
      </article>
    `}function ip({job:e,actionState:t,onArchive:n,onDelete:r}){let a=(0,$.useMemo)(()=>Os(e),[e]),{currentCandidate:o,exhausted:l,handleError:i}=va(a),s=hr(e.content_preview||"Content preview will appear here after generation.",180);return v`
      <article className="ecard-tile">
        <div className="ecard-media">
          ${o?v`
                <img
                  src=${o.url}
                  alt=${e.theme_name||"Generated eCard"}
                  loading="lazy"
                  onError=${i}
                />
              `:l?v`
                  <div className="ecard-placeholder">
                    <p className="ecard-placeholder-kicker">Preview Unavailable</p>
                    <p className="ecard-placeholder-copy">The stored preview URL did not load.</p>
                  </div>
                `:v`
                <div className="ecard-placeholder">
                  <p className="ecard-placeholder-kicker">Content Preview</p>
                  <p className="ecard-placeholder-copy">${s}</p>
                </div>
              `}
        </div>
        <div className="ecard-body">
          <div className="ecard-head">
            <div>
              <p className="ecard-theme">${e.theme_name||"Untitled Theme"}</p>
              <p className="ecard-meta">${Ue(e.created_at)}</p>
            </div>
            <${Te} value=${e.status} />
          </div>
          <div className="ecard-stage-row">
            <span className="ecard-stage">${ye(e.current_stage)}</span>
            <span className="ecard-job-id">${e.job_id}</span>
          </div>
          <div className="ecard-actions">
            <${Xe} to=${`/jobs/${e.job_id}`} className="button-link">View Details<//>
            ${o?v`
                  <a href=${o.url} target="_blank" rel="noreferrer" className="button-link">
                    Open Image
                  </a>
                `:v`<button type="button" className="button" disabled=${!0}>Open Image</button>`}
            <button
              type="button"
              className="button"
              onClick=${()=>n(e)}
              disabled=${t===`archive:${e.job_id}`||e.status==="archived"}
            >
              ${t===`archive:${e.job_id}`?"Archiving...":"Archive"}
            </button>
            <button
              type="button"
              className="button danger"
              onClick=${()=>r(e)}
              disabled=${t===`delete:${e.job_id}`}
            >
              ${t===`delete:${e.job_id}`?"Deleting...":"Delete"}
            </button>
          </div>
        </div>
      </article>
    `}function hp(e){let t=Array.isArray(e?.candidates)?e.candidates:[],n=String(e?.recommended_candidate_id||"");return t.map((r,a)=>({key:r.candidate_id||r.public_url||`image_candidate_${a}`,rank:Number(r.rank||a+1),candidate_id:String(r.candidate_id||""),imageforge_request_id:String(r.imageforge_request_id||e?.imageforge_request_id||""),provider_run_id:String(r.provider_run_id||""),provider:String(r.provider||"unknown"),model:String(r.model||"").trim(),candidate_index:Number(r.candidate_index||a+1),url:mr(r.public_url||""),relative_path:r.relative_path||"",prompt_used:String(r.prompt_used||"").trim(),negative_prompt_used:String(r.negative_prompt_used||"").trim(),width:r.width??null,height:r.height??null,quality_score:r.quality_score??null,relevance_score:r.relevance_score??null,reason_codes:Array.isArray(r.reason_codes)?r.reason_codes:[],is_recommended:!!(r.is_recommended||n&&String(r.candidate_id||"")===n),is_selected:!!r.is_selected,created_at:r.created_at||null})).filter(r=>r.url)}function py(e,t=[]){if(!(!!e?.final_preview_url||!!(e?.final_asset_urls&&typeof e.final_asset_urls=="object"&&e.final_asset_urls.png)))return[];let r=[],a=new Set,o=(l,i,s)=>{let u=Us(i);!u||a.has(u)||!mp(u)||(a.add(u),r.push({label:l,url:u,source:s}))};return o("Final Preview",e?.final_preview_url,"final_preview_url"),o("Final PNG",e?.final_asset_urls&&typeof e.final_asset_urls=="object"?e.final_asset_urls.png:"","final_asset_urls.png"),Array.isArray(t)&&t.forEach(l=>{let i=String(l?.asset_type||"").toLowerCase();i==="final_preview"&&o("Final Preview",l.public_url||l.asset_url,"asset:final_preview"),i==="final_png"&&o("Final PNG",l.public_url||l.asset_url,"asset:final_png")}),r.map((l,i)=>({key:`${l.source}:${i}`,label:l.label,url:l.url,source:l.source}))}function my(e,t){let n=el(e),r=Number(n.selected_text_candidate_id||0);if(r>0){let a=t.find(o=>Number(o.id)===r);if(a)return a}return t.find(a=>a.is_selected)||null}function hy(e){let t=hp(e);if(e?.selected_candidate&&typeof e.selected_candidate=="object"){let r=String(e.selected_candidate.candidate_id||"");if(r){let a=t.find(o=>o.candidate_id===r);if(a)return a}}let n=String(e?.selected_image_candidate_id||"");if(n){let r=t.find(a=>a.candidate_id===n);if(r)return r}return t.find(r=>r.is_selected)||null}function Ds(e,t){return!e||!t?null:`${e} x ${t}`}function pn(e){let t=Number(e);return Number.isFinite(t)?t.toFixed(1):null}function vy(e){let t=String(Xo(e)||"").toLowerCase();return t==="failed"?"failed":t==="final_card_ready"?"final_card_ready":String(e?.status||"").toLowerCase()==="archived"?"archived":t||"in_progress"}function yy(){let e=jt(),[t,n]=(0,$.useState)([]),[r,a]=(0,$.useState)(null),[o,l]=(0,$.useState)([]),[i,s]=(0,$.useState)(null),[u,h]=(0,$.useState)(!1),[y,p]=(0,$.useState)(!1),[E,k]=(0,$.useState)(!1),[w,N]=(0,$.useState)(""),[d,c]=(0,$.useState)(""),[f,g]=(0,$.useState)(""),[C,P]=(0,$.useState)(""),[L,D]=(0,$.useState)(""),[z,I]=(0,$.useState)(!1),[j,$e]=(0,$.useState)(!1),[A,J]=(0,$.useState)("today"),[W,de]=(0,$.useState)([]),[le,b]=(0,$.useState)(!1),[B,fe]=(0,$.useState)(!1),[q,De]=(0,$.useState)(""),[he,je]=(0,$.useState)({theme_name:"Internal Launch Sprint",audience:"operations team",cultural_context:"global",tone_style:"conversational",tone_funny_pct:20,tone_emotion_pct:80,copy_style:"minimal",target_words:14,cards_per_theme:10,notes:""}),[x,K]=(0,$.useState)(ma()),V=i&&typeof i=="object"&&i.theme||null,O=(0,$.useMemo)(()=>{let S=0,U=0,Z=0;return t.forEach(st=>{let Fe=String(st.status||"").toLowerCase();if(Fe==="completed"){U+=1;return}if(Fe.includes("reject")||Fe.includes("timeout")||Fe.includes("failed")){Z+=1;return}Fe!=="archived"&&(S+=1)}),{active:S,completed:U,failed:Z}},[t]),Me=(0,$.useMemo)(()=>t.filter(S=>S.final_preview_url||S.final_asset_urls&&S.final_asset_urls.png||S.image_preview_url).slice(0,6),[t]),lt=(0,$.useMemo)(()=>t.filter(S=>{let U=String(S.status||"").toLowerCase();return U!=="completed"&&!U.includes("failed")&&!U.includes("reject")&&!U.includes("timeout")&&U!=="archived"}).slice(0,8),[t]),Mt=(0,$.useMemo)(()=>t.filter(S=>{let U=String(S.status||"").toLowerCase();return U.includes("failed")||U.includes("reject")||U.includes("timeout")}).slice(0,8),[t]),zt=(0,$.useMemo)(()=>t.filter(S=>cy(S)).slice(0,6),[t]);async function m(){h(!0),p(!0),k(!0),N(""),c(""),g(""),P("");let[S,U,Z,st]=await Promise.allSettled([M("/api/jobs?limit=50"),M("/api/storage/summary"),M("/api/themes/schedule"),M("/api/themes/today")]),Fe="";if(S.status==="fulfilled"?n(Array.isArray(S.value)?S.value:[]):(n([]),N(Dn("jobs",S.reason))),U.status==="fulfilled"?a(U.value||null):(a(null),c(Dn("storage summary",U.reason))),Z.status==="fulfilled"){let zs=Array.isArray(Z.value)?[]:Array.isArray(Z.value?.week_schedule)?Z.value.week_schedule:[];l(zs),zs.length===0&&(Fe="Theme schedule not configured yet")}else l([]),Fn(Z.reason)?Fe="Theme Factory not configured yet":g(Dn("Theme Factory schedule",Z.reason));st.status==="fulfilled"?(s(st.value||null),!Fe&&st.value?.resolved===!1?Fe=st.value?.message||"Theme schedule not configured yet":!Fe&&!st.value?.theme&&(Fe="Theme schedule not configured yet")):(s(null),Fn(st.reason)?Fe=Fe||"Theme schedule not configured yet":g(Dn("today's theme",st.reason))),P(Fe),h(!1),p(!1),k(!1);let _p=Z.status!=="fulfilled"&&!Fn(Z.reason),Np=st.status!=="fulfilled"&&!Fn(st.reason),wp=S.status!=="fulfilled"||U.status!=="fulfilled"||_p||Np;D(wp?`Refresh completed with errors at ${new Date().toLocaleTimeString()}`:`Refreshed ${new Date().toLocaleTimeString()}`)}(0,$.useEffect)(()=>{m()},[]);async function _(S){S.preventDefault(),b(!0),N("");try{let U=oy(he),Z=await M("/api/jobs/start-async",{method:"POST",body:JSON.stringify(U)});I(!1),Ls(Z.job_id,e)}catch(U){N(U.message||"Unable to create new job")}finally{b(!1)}}function Y(S,U){je(Z=>({...Z,[S]:U}))}function pe(){let S=ly(V);S&&je(U=>({...U,...S}))}async function it(){if(W.length>0)return W;let S=await M("/api/themes"),U=Array.isArray(S)?S:[];return de(U),U}async function ga(S){if(J(S),g(""),K(ma(V)),S==="manual"){try{let Z=(await it())[0]||null;K({...ma(Z),theme_key:Z?.theme_key||""}),$e(!0)}catch(U){g(U.message||"Unable to load theme catalog")}return}$e(!0)}async function yp(S){S.preventDefault(),fe(!0),g("");try{let U=fp(x),Z=A==="manual"?await M("/api/jobs/start-from-theme-async",{method:"POST",body:JSON.stringify({theme_key:x.theme_key,...U})}):await M("/api/jobs/create-daily-theme-job-async",{method:"POST",body:JSON.stringify(U)});$e(!1),Ls(Z.job_id,e)}catch(U){g(U.message||(A==="manual"?"Unable to create theme job":"Unable to create today's themed job"))}finally{fe(!1)}}function gp(S){let U=W.find(Z=>Z.theme_key===S);K(Z=>({...Z,theme_key:S,tone_funny_pct:Number(U?.default_funny_pct??Z.tone_funny_pct??20)}))}async function js(S){De(`archive:${S.job_id}`),N("");try{await M(`/api/jobs/${S.job_id}/archive`,{method:"POST"}),D(`Archived ${S.job_id}`),await m()}catch(U){N(U.message||"Unable to archive job")}finally{De("")}}async function Ms(S){if(window.confirm(`Delete ${S.job_id} and associated files?`)){De(`delete:${S.job_id}`),N("");try{await M(`/api/jobs/${S.job_id}`,{method:"DELETE"}),D(`Deleted ${S.job_id}`),await m()}catch(Z){N(Z.message||"Unable to delete job")}finally{De("")}}}return v`
      <section>
        <header className="page-head">
          <div>
            <p className="page-kicker">Home</p>
            <h1 className="page-title">eCard Studio Home</h1>
            <p className="page-description">
              Card-first controls for today's theme, manual theme runs, and recent eCard output.
            </p>
          </div>
          <div className="inline-actions">
            <button
              type="button"
              className="button primary"
              onClick=${()=>ga("today")}
              disabled=${B||E||!V}
            >
              Generate Today's Cards
            </button>
            <button type="button" className="button" onClick=${()=>ga("manual")}>Generate From Theme</button>
            <button type="button" className="button" onClick=${()=>I(!0)}>Create New Card Job</button>
            <button
              type="button"
              className="button"
              onClick=${m}
              disabled=${u||y||E}
            >
              Refresh
            </button>
          </div>
        </header>

        ${L?v`<p className="status-line">${L}</p>`:null}

        ${u||y||E||w||d||f?v`
              <div className="status-stack">
                ${u?v`<div className="status-panel warning">Loading jobs from /api/jobs...</div>`:null}
                ${y?v`<div className="status-panel warning">Loading storage summary from /api/storage/summary...</div>`:null}
                ${E?v`<div className="status-panel warning">Loading Theme Factory data from /api/themes/schedule...</div>`:null}
                ${w?v`<div className="status-panel error">Unable to load jobs: ${w}</div>`:null}
                ${d?v`<div className="status-panel error">Unable to load storage summary: ${d}</div>`:null}
                ${f?v`<div className="status-panel error">Theme error: ${f}</div>`:null}
              </div>
            `:null}

        <section className="cards-grid">
          <article className="summary-card">
            <p className="summary-label">Today's Theme</p>
            <p className="summary-value summary-value-small">${V?V.theme_name:"Unavailable"}</p>
          </article>
          <article className="summary-card">
            <p className="summary-label">In Progress</p>
            <p className="summary-value">${u?"...":lt.length}</p>
          </article>
          <article className="summary-card">
            <p className="summary-label">Failed Jobs</p>
            <p className="summary-value">${u?"...":Mt.length}</p>
          </article>
          <article className="summary-card">
            <p className="summary-label">Favorite Cards</p>
            <p className="summary-value">${u?"...":zt.length}</p>
          </article>
        </section>

        <section className="section-panel home-hero">
          <div className="section-head">
            <div>
              <h2 className="section-title">Today's Theme</h2>
              <p className="section-copy">
                ${V?`${V.theme_name} | ${pp("minimal")} card flow with ${ye(i?.weekday)} scheduling`:C||"Theme schedule not configured yet."}
              </p>
            </div>
            <div className="inline-actions">
              <button
                type="button"
                className="button primary"
                onClick=${()=>ga("today")}
                disabled=${B||E||!V}
              >
                ${B&&A==="today"?"Generating...":"Generate Today's Cards"}
              </button>
              <button type="button" className="button" onClick=${()=>ga("manual")}>Generate From Theme</button>
              <button type="button" className="button" onClick=${()=>I(!0)}>Create New Card Job</button>
            </div>
          </div>
          ${V?v`
                <div className="key-value-grid">
                  <article className="key-card">
                    <p className="key-label">theme_name</p>
                    <p className="key-value">${V.theme_name}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">bucket</p>
                    <p className="key-value">${dp(V.theme_bucket)}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">tone_style</p>
                    <p className="key-value">${V.tone_style}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">audience</p>
                    <p className="key-value">${V.audience}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">default run</p>
                    <p className="key-value">10 cards | 8-18 words</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">storage</p>
                    <p className="key-value">${y?"...":r?ay(r.total_bytes):"Unavailable"}</p>
                  </article>
                </div>
              `:v`<p className="empty-state">Theme schedule not configured yet.</p>`}
        </section>

        <section className="section-panel">
          <div className="section-head">
            <div>
              <h2 className="section-title">Recent eCards</h2>
              <p className="section-copy">The most recent visual card outputs. Open Studio to tweak text, image, or final card direction.</p>
            </div>
            <${Xe} to="/studio" className="button-link">Open Studio<//>
          </div>
          ${u?v`<p className="empty-state">Loading recent eCards...</p>`:Me.length===0?v`<p className="empty-state">No rendered cards yet. Generate today's cards or run a theme manually.</p>`:v`
                  <div className="ecard-grid">
                    ${Me.map(S=>v`
                        <${ip}
                          key=${S.job_id}
                          job=${S}
                          actionState=${q}
                          onArchive=${js}
                          onDelete=${Ms}
                        />
                      `)}
                  </div>
                `}
        </section>

        <section className="section-panel">
          <div className="section-head">
            <div>
              <h2 className="section-title">Favorite Cards</h2>
              <p className="section-copy">Cards you marked for quick access and reuse.</p>
            </div>
          </div>
          ${zt.length===0?v`<p className="empty-state">No favorite cards yet. Mark a final card from Studio.</p>`:v`
                <div className="ecard-grid">
                  ${zt.map(S=>v`
                      <${ip}
                        key=${S.job_id}
                        job=${S}
                        actionState=${q}
                        onArchive=${js}
                        onDelete=${Ms}
                      />
                    `)}
                </div>
              `}
        </section>

        <section className="two-column">
          <section className="section-panel">
            <div className="section-head">
              <div>
                <h2 className="section-title">In Progress Jobs</h2>
                <p className="section-copy">Jobs still moving through card generation or waiting for operator intervention.</p>
              </div>
              <${Xe} to="/jobs" className="button-link">All Jobs<//>
            </div>
            ${lt.length===0?v`<p className="empty-state">No jobs in progress.</p>`:v`
                  <div className="table-wrap">
                    <table className="console-table">
                      <thead>
                        <tr>
                          <th>job_id</th>
                          <th>theme</th>
                          <th>status</th>
                          <th>updated</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${lt.map(S=>v`
                            <tr key=${S.job_id}>
                              <td><${Xe} className="job-link" to=${`/studio/${S.job_id}`}>${S.job_id}<//></td>
                              <td>${S.theme_name}</td>
                              <td>
                                <${Te} value=${S.status} />
                                ${Ln(S)?v`<p className="section-copy">${Ln(S)}</p>`:null}
                              </td>
                              <td>${Ue(S.updated_at)}</td>
                            </tr>
                          `)}
                      </tbody>
                    </table>
                  </div>
                `}
          </section>

          <section className="section-panel">
            <div className="section-head">
              <div>
                <h2 className="section-title">Failed Jobs</h2>
                <p className="section-copy">Jobs that need a rerun from text, image, or final card generation.</p>
              </div>
            </div>
            ${Mt.length===0?v`<p className="empty-state">No failed jobs.</p>`:v`
                  <div className="table-wrap">
                    <table className="console-table">
                      <thead>
                        <tr>
                          <th>job_id</th>
                          <th>theme</th>
                          <th>status</th>
                          <th>last_error</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${Mt.map(S=>v`
                            <tr key=${S.job_id}>
                              <td><${Xe} className="job-link" to=${`/studio/${S.job_id}`}>${S.job_id}<//></td>
                              <td>${S.theme_name}</td>
                              <td><${Te} value=${S.status} /></td>
                              <td>${hr(S.last_error_message||"-",80)}</td>
                            </tr>
                          `)}
                      </tbody>
                    </table>
                  </div>
                `}
          </section>
        </section>

        ${z?v`
              <div className="modal-backdrop" onClick=${()=>I(!1)}>
                <section className="modal" onClick=${S=>S.stopPropagation()}>
                  <h2 className="section-title">Create New Card Job</h2>
                  <p className="section-copy">Starts a new card run with short, crisp copy defaults and opens Studio.</p>
                  <form onSubmit=${_}>
                    <div className="form-grid">
                      <div className="form-field full">
                        <label htmlFor="themeName">Theme Name</label>
                        <input
                          id="themeName"
                          value=${he.theme_name}
                          onInput=${S=>Y("theme_name",S.target.value)}
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="audience">Audience</label>
                        <input
                          id="audience"
                          value=${he.audience}
                          onInput=${S=>Y("audience",S.target.value)}
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="culturalContext">Cultural Context</label>
                        <input
                          id="culturalContext"
                          value=${he.cultural_context}
                          onInput=${S=>Y("cultural_context",S.target.value)}
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="toneStyle">Tone Style</label>
                        <select
                          id="toneStyle"
                          value=${he.tone_style}
                          onChange=${S=>Y("tone_style",S.target.value)}
                        >
                          <option value="conversational">conversational</option>
                          <option value="minimal">minimal</option>
                          <option value="poetic">poetic</option>
                          <option value="witty">witty</option>
                        </select>
                      </div>
                      <div className="form-field">
                        <label htmlFor="funnyPct">Funny %</label>
                        <input
                          id="funnyPct"
                          type="number"
                          min="0"
                          max="100"
                          value=${he.tone_funny_pct}
                          onInput=${S=>Y("tone_funny_pct",S.target.value)}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="emotionPct">Emotion %</label>
                        <input
                          id="emotionPct"
                          type="number"
                          min="0"
                          max="100"
                          value=${he.tone_emotion_pct}
                          onInput=${S=>Y("tone_emotion_pct",S.target.value)}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="copyStyle">Copy Style</label>
                        <select
                          id="copyStyle"
                          value=${he.copy_style}
                          onChange=${S=>Y("copy_style",S.target.value)}
                        >
                          ${Fs()}
                        </select>
                      </div>
                      <div className="form-field">
                        <label htmlFor="targetWords">Target Words</label>
                        <input
                          id="targetWords"
                          type="number"
                          min="4"
                          max="60"
                          value=${he.target_words}
                          onInput=${S=>Y("target_words",S.target.value)}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="cardsPerTheme">Cards Per Theme</label>
                        <input
                          id="cardsPerTheme"
                          type="number"
                          min="1"
                          max="50"
                          value=${he.cards_per_theme}
                          onInput=${S=>Y("cards_per_theme",S.target.value)}
                        />
                      </div>
                      <div className="form-field full">
                        <p className="form-helper">Defaults target short one-line card copy. Use witty or playful for humor, heartfelt for emotional greetings.</p>
                      </div>
                      <div className="form-field full">
                        <label htmlFor="jobNotes">Notes</label>
                        <textarea
                          id="jobNotes"
                          rows="3"
                          value=${he.notes}
                          onInput=${S=>Y("notes",S.target.value)}
                          placeholder="Optional operator notes"
                        ></textarea>
                      </div>
                    </div>
                    <div className="inline-actions" style=${{marginTop:"12px"}}>
                      <button
                        type="button"
                        className="button"
                        onClick=${pe}
                        disabled=${!V}
                      >
                        Use Today's Theme
                      </button>
                      <button type="submit" className="button primary" disabled=${le}>
                        ${le?"Creating...":"Create Job"}
                      </button>
                      <button type="button" className="button" onClick=${()=>I(!1)}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            `:null}

        ${j?v`
              <div className="modal-backdrop" onClick=${()=>$e(!1)}>
                <section className="modal" onClick=${S=>S.stopPropagation()}>
                  <h2 className="section-title">${A==="manual"?"Generate From Theme":"Use Today's Theme"}</h2>
                  <p className="section-copy">
                    ${A==="manual"?"Start a workflow job from any selected Theme Factory record.":V?`Resolved theme: ${V.theme_name}`:"Use today's resolved theme."}
                  </p>
                  <form onSubmit=${yp}>
                    <div className="form-grid">
                      ${A==="manual"?v`
                            <div className="form-field full">
                              <label htmlFor="runThemeKey">Theme</label>
                              <select
                                id="runThemeKey"
                                value=${x.theme_key}
                                onChange=${S=>gp(S.target.value)}
                                required
                              >
                                ${W.map(S=>v`<option key=${S.id} value=${S.theme_key}>${S.theme_name}</option>`)}
                              </select>
                            </div>
                          `:null}
                      <div className="form-field">
                        <label htmlFor="runCopyStyle">Copy Style</label>
                        <select
                          id="runCopyStyle"
                          value=${x.copy_style}
                          onChange=${S=>K(U=>({...U,copy_style:S.target.value}))}
                        >
                          ${Fs()}
                        </select>
                      </div>
                      <div className="form-field">
                        <label htmlFor="runTargetWords">Target Words</label>
                        <input
                          id="runTargetWords"
                          type="number"
                          min="4"
                          max="60"
                          value=${x.target_words}
                          onInput=${S=>K(U=>({...U,target_words:S.target.value}))}
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="runFunnyPct">Funny %</label>
                        <input
                          id="runFunnyPct"
                          type="number"
                          min="0"
                          max="100"
                          value=${x.tone_funny_pct}
                          onInput=${S=>K(U=>({...U,tone_funny_pct:S.target.value}))}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="runCardsPerTheme">Cards Per Theme</label>
                        <input
                          id="runCardsPerTheme"
                          type="number"
                          min="1"
                          max="50"
                          value=${x.cards_per_theme}
                          onInput=${S=>K(U=>({...U,cards_per_theme:S.target.value}))}
                          required
                        />
                      </div>
                      <div className="form-field full">
                        <p className="form-helper">This starts a real card job from the selected theme and opens Studio for text, image, and final card control.</p>
                      </div>
                      <div className="form-field full">
                        <label htmlFor="runThemeNotes">Notes</label>
                        <textarea
                          id="runThemeNotes"
                          rows="3"
                          value=${x.notes}
                          onInput=${S=>K(U=>({...U,notes:S.target.value}))}
                          placeholder="Optional operator notes"
                        ></textarea>
                      </div>
                    </div>
                    <div className="inline-actions" style=${{marginTop:"12px"}}>
                      <button type="submit" className="button primary" disabled=${B}>
                        ${B?"Creating...":A==="manual"?"Generate From Theme":"Use Today's Theme"}
                      </button>
                      <button type="button" className="button" onClick=${()=>$e(!1)}>Cancel</button>
                    </div>
                  </form>
                </section>
              </div>
            `:null}
      </section>
    `}function gy(){let e=jt(),{jobId:t}=Qo(),[n,r]=(0,$.useState)(null),[a,o]=(0,$.useState)([]),[l,i]=(0,$.useState)([]),[s,u]=(0,$.useState)([]),[h,y]=(0,$.useState)([]),[p,E]=(0,$.useState)([]),[k,w]=(0,$.useState)(!1),[N,d]=(0,$.useState)(""),[c,f]=(0,$.useState)(""),[g,C]=(0,$.useState)(""),P=(0,$.useCallback)(async(b={})=>{if(!t)return;let B=!!b.quiet;B||w(!0),f("");try{let[fe,q,De,he,je]=await Promise.all([M(`/api/jobs/${t}`),M(`/api/jobs/${t}/assets`),M(`/api/jobs/${t}/events`),M(`/api/jobs/${t}/candidates`),M(`/api/jobs/${t}/shortlist`)]);r(fe||null),o(Array.isArray(q)?q:[]),i(Array.isArray(De)?De:[]);let x=Array.isArray(he)?he:[],K=Array.isArray(je)?je:[];u(x),y(K);let V=K.filter(O=>O.is_selected).map(O=>Number(O.candidate_id)).filter(O=>Number.isInteger(O));E(V.length>0?V:K[0]?[Number(K[0].candidate_id)]:[])}catch(fe){f(fe.message||"Unable to load job detail")}finally{B||w(!1)}},[t]);(0,$.useEffect)(()=>{P()},[P]),(0,$.useEffect)(()=>{if(!t)return;let b=window.setInterval(()=>{document.visibilityState==="visible"&&P({quiet:!0})},1e4);return()=>window.clearInterval(b)},[t,P]);let L=(0,$.useMemo)(()=>{if(!n)return[];let b=el(n),B=Array.isArray(n.shortlist)?n.shortlist.length>0:!!n.shortlist_count,fe=!!b.selected_text_candidate_id,q=Array.isArray(n.image_candidates)?n.image_candidates.length>0:!!n.image_candidate_count,De=!!(n.selected_image_candidate_id||n.selected_image_public_url),he=!!(n.final_preview_url||n.final_asset_urls&&n.final_asset_urls.png);return[{label:"current_stage",value:Xo(n)},{label:"text_candidates",value:B?"content_candidates_ready":"pending"},{label:"text_selection",value:fe?"text_selected":"pending"},{label:"image_candidates",value:q?"image_candidates_ready":"pending"},{label:"image_selection",value:De?"image_selected":"pending"},{label:"final_card",value:he?"final_card_ready":"pending"}]},[n]),D=(0,$.useMemo)(()=>n?Os(n,a):[],[n,a]),z=va(D),I=(0,$.useMemo)(()=>n?Os({image_preview_url:n.image_preview_url,content_preview_url:n.content_preview_url},a.filter(b=>String(b?.asset_type||"").toLowerCase()==="image_preview")):[],[n,a]),j=va(I),$e=(0,$.useMemo)(()=>a.filter(b=>String(b?.asset_type||"").toLowerCase()==="shortlist_preview").map((b,B)=>({label:`Shortlist Preview ${B+1}`,url:mr(b.public_url||b.asset_url),source:`shortlist_preview:${B}`})).filter(b=>b.url),[a]);async function A(b,B,fe){if(t){d(b),f("");try{let q=await M(B,{method:"POST"});C(fe||`${q.job_id} updated`),await P()}catch(q){f(q.message||"Unable to update stage")}finally{d("")}}}function J(b,B){E(fe=>{let q=new Set(fe);return B?q.add(b):q.delete(b),Array.from(q)})}async function W(){if(t){d("render-shortlist"),f("");try{let b=await M(`/api/jobs/${t}/render-shortlist`,{method:"POST",body:JSON.stringify({candidate_ids:p})});C(`Rendered ${b.rendered_count} shortlist preview card(s)`),await P()}catch(b){f(b.message||"Unable to render shortlist")}finally{d("")}}}async function de(){if(t){d("archive"),f("");try{let b=await M(`/api/jobs/${t}/archive`,{method:"POST"});C(`Job archived (${Ue(b.updated_at)})`),await P()}catch(b){f(b.message||"Unable to archive job")}finally{d("")}}}async function le(){if(!(!t||!window.confirm(`Delete ${t} and associated files?`))){d("delete"),f("");try{await M(`/api/jobs/${t}`,{method:"DELETE"}),e("/")}catch(B){f(B.message||"Unable to delete job")}finally{d("")}}}return v`
      <section>
        <header className="page-head">
          <div>
            <p className="page-kicker">Jobs</p>
            <h1 className="page-title">Job Detail</h1>
            <p className="page-description">${t||"-"}</p>
          </div>
          <div className="inline-actions">
            <button className="button" type="button" onClick=${P} disabled=${k}>Refresh</button>
            <button
              className="button"
              type="button"
              onClick=${de}
              disabled=${N==="archive"}
            >
              ${N==="archive"?"Archiving...":"Archive Job"}
            </button>
            <button
              className="button danger"
              type="button"
              onClick=${le}
              disabled=${N==="delete"}
            >
              ${N==="delete"?"Deleting...":"Delete Job + Files"}
            </button>
          </div>
        </header>

        ${c?v`<p className="status-line error">${c}</p>`:null}
        ${g?v`<p className="status-line">${g}</p>`:null}
        ${n?.last_error_message?v`<div className="status-panel error">Last stage error: ${n.last_error_message}</div>`:null}

        ${n?v`
              <section className="section-panel">
                <div className="section-head">
                  <div>
                    <h2 className="section-title">Card Snapshot</h2>
                    <p className="section-copy">The selected text, selected image, and latest final card preview for this job.</p>
                  </div>
                  <div className="inline-actions">
                    <${Xe} to=${`/studio/${t}`} className="button-link">Open Studio<//>
                    <button
                      type="button"
                      className="button"
                      onClick=${()=>A("rerun-content",`/api/jobs/${t}/rerun/content`,`Text rerun for ${t}`)}
                      disabled=${N==="rerun-content"}
                    >
                      ${N==="rerun-content"?"Working...":"Regenerate Text"}
                    </button>
                    <button
                      type="button"
                      className="button"
                      onClick=${()=>A("rerun-image",`/api/jobs/${t}/rerun/image`,`Image rerun for ${t}`)}
                      disabled=${N==="rerun-image"}
                    >
                      ${N==="rerun-image"?"Working...":"Regenerate Image"}
                    </button>
                    <button
                      type="button"
                      className="button primary"
                      onClick=${()=>A("rerun-card",`/api/jobs/${t}/rerun/final-render`,`Card rerun for ${t}`)}
                      disabled=${N==="rerun-card"}
                    >
                      ${N==="rerun-card"?"Working...":"Regenerate Card"}
                    </button>
                  </div>
                </div>
                <div className="studio-current-grid">
                  <article className="key-card">
                    <p className="key-label">selected text</p>
                    <p className="studio-current-copy">${n.content_preview||"No text selected yet."}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">selected image</p>
                    ${j.currentCandidate?v`<img className="studio-current-image" src=${j.currentCandidate.url} alt="Selected image" loading="lazy" onError=${j.handleError} />`:v`<p className="empty-state compact">No image selected yet.</p>`}
                  </article>
                  <article className="key-card">
                    <p className="key-label">final card preview</p>
                    ${z.currentCandidate?v`<img className="studio-current-image" src=${z.currentCandidate.url} alt="Final card preview" loading="lazy" onError=${z.handleError} />`:v`<p className="empty-state compact">No final card rendered yet.</p>`}
                  </article>
                </div>
              </section>

              <section className="section-panel">
                <div className="section-head">
                  <div>
                    <h2 className="section-title">Stage and Status Breakdown</h2>
                    <p className="section-copy">Workflow state remains available here, but Studio is the primary operator surface.</p>
                  </div>
                  <${Te} value=${n.status} />
                </div>
                <div className="key-value-grid">
                  ${L.map(b=>v`
                      <article className="key-card" key=${b.label}>
                        <p className="key-label">${b.label}</p>
                        <p className="key-value"><${Te} value=${b.value} /></p>
                      </article>
                    `)}
                </div>
                <div className="key-value-grid job-meta-grid">
                  <article className="key-card">
                    <p className="key-label">cards_per_theme</p>
                    <p className="key-value">${n.cards_per_theme||10}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">retry_count</p>
                    <p className="key-value">${n.retry_count||0}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">last_stage_started_at</p>
                    <p className="key-value">${Ue(n.last_stage_started_at)}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">last_stage_finished_at</p>
                    <p className="key-value">${Ue(n.last_stage_finished_at)}</p>
                  </article>
                </div>
                ${n.operator_notes?v`
                      <div className="status-panel neutral">Operator notes: ${n.operator_notes}</div>
                    `:null}
                <div className="status-stack padded-status-stack">
                  <div className="status-panel neutral">
                    Review order: approve the exact message text first, then generate and approve the image, then render and approve the final card.
                  </div>
                  <div className="status-panel neutral">
                    This page refreshes automatically every 10 seconds while it stays open.
                  </div>
                </div>
              </section>

              <section className="section-panel">
                <div className="section-head">
                  <div>
                    <h2 className="section-title">Content Review</h2>
                    <p className="section-copy">Approval is secondary here. The primary action is to rerun text if the card copy is not right.</p>
                  </div>
                  <${Te} value=${n.content_approval_status||"pending"} />
                </div>
                ${n.content_preview?v`<div className="content-preview-block">${n.content_preview}</div>`:v`<p className="empty-state">No content preview stored yet.</p>`}
                <div className="inline-actions padded-actions">
                  <button
                    type="button"
                    className="button primary"
                    onClick=${()=>A("regenerate-content",`/api/jobs/${t}/regenerate-content`,`Content regenerated for ${t}`)}
                    disabled=${N==="regenerate-content"}
                  >
                    ${N==="regenerate-content"?"Working...":"Regenerate Text"}
                  </button>
                  <button
                    type="button"
                    className="button"
                    onClick=${()=>A("approve-content",`/api/jobs/${t}/approve-content`,`Content approved for ${t}`)}
                    disabled=${N==="approve-content"||!n.content_preview}
                  >
                    ${N==="approve-content"?"Working...":"Approve Content"}
                  </button>
                  <button
                    type="button"
                    className="button danger"
                    onClick=${()=>A("reject-content",`/api/jobs/${t}/reject-content`,`Content rejected for ${t}`)}
                    disabled=${N==="reject-content"||!n.content_preview}
                  >
                    ${N==="reject-content"?"Working...":"Reject Content"}
                  </button>
                </div>
              </section>

              <section className="section-panel">
                <div className="section-head">
                  <div>
                    <h2 className="section-title">Image Review</h2>
                    <p className="section-copy">The main control here is to generate or rerun the image. Approval buttons remain available as operator overrides.</p>
                  </div>
                  <${Te} value=${n.image_approval_status||"pending"} />
                </div>
                ${j.currentCandidate?v`
                      <div className="image-grid image-grid-single">
                        <article className="image-card">
                          <a href=${j.currentCandidate.url} target="_blank" rel="noreferrer">
                            <img
                              src=${j.currentCandidate.url}
                              alt="Image Preview"
                              loading="lazy"
                              onError=${j.handleError}
                            />
                          </a>
                          <p className="image-caption">Image Preview</p>
                        </article>
                      </div>
                    `:j.exhausted?v`<p className="empty-state">Preview unavailable.</p>`:v`<p className="empty-state">No image preview available yet.</p>`}
                <div className="inline-actions padded-actions">
                  <button
                    type="button"
                    className="button primary"
                    onClick=${()=>A("generate-image",`/api/jobs/${t}/generate-image`,`Image generated for ${t}`)}
                    disabled=${N==="generate-image"||n.content_approval_status!=="approved"}
                  >
                    ${N==="generate-image"?"Working...":"Generate Image"}
                  </button>
                  <button
                    type="button"
                    className="button"
                    onClick=${()=>A("regenerate-image",`/api/jobs/${t}/regenerate-image`,`Image regenerated for ${t}`)}
                    disabled=${N==="regenerate-image"||n.content_approval_status!=="approved"}
                  >
                    ${N==="regenerate-image"?"Working...":"Regenerate Image"}
                  </button>
                  <button
                    type="button"
                    className="button"
                    onClick=${()=>A("approve-image",`/api/jobs/${t}/approve-image`,`Image approved for ${t}`)}
                    disabled=${N==="approve-image"||!n.image_preview_url}
                  >
                    ${N==="approve-image"?"Working...":"Approve Image"}
                  </button>
                  <button
                    type="button"
                    className="button danger"
                    onClick=${()=>A("reject-image",`/api/jobs/${t}/reject-image`,`Image rejected for ${t}`)}
                    disabled=${N==="reject-image"||!n.image_preview_url}
                  >
                    ${N==="reject-image"?"Working...":"Reject Image"}
                  </button>
                </div>
              </section>

              <section className="section-panel">
                <div className="section-head">
                  <div>
                    <h2 className="section-title">Final Card Review</h2>
                    <p className="section-copy">Use rerun when the card layout or polish is off. Approval stays available below as a secondary control.</p>
                  </div>
                  <${Te} value=${n.final_approval_status||"pending"} />
                </div>
                ${z.currentCandidate?v`
                      <div className="hero-preview">
                        <a href=${z.currentCandidate.url} target="_blank" rel="noreferrer">
                          <img
                            src=${z.currentCandidate.url}
                            alt=${n.theme_name||"Generated eCard"}
                            loading="lazy"
                            onError=${z.handleError}
                          />
                        </a>
                      </div>
                    `:z.exhausted?v`<p className="empty-state">Preview unavailable.</p>`:v`<p className="empty-state">No final card preview available yet.</p>`}
                <div className="inline-actions padded-actions">
                  <button
                    type="button"
                    className="button primary"
                    onClick=${()=>A("render-final",`/api/jobs/${t}/render-final`,`Final rendered for ${t}`)}
                    disabled=${N==="render-final"||n.image_approval_status!=="approved"}
                  >
                    ${N==="render-final"?"Working...":"Regenerate Card"}
                  </button>
                  <button
                    type="button"
                    className="button"
                    onClick=${()=>A("approve-final",`/api/jobs/${t}/approve-final`,`Final approved for ${t}`)}
                    disabled=${N==="approve-final"||!n.final_preview_url}
                  >
                    ${N==="approve-final"?"Working...":"Approve Final"}
                  </button>
                  <button
                    type="button"
                    className="button danger"
                    onClick=${()=>A("reject-final",`/api/jobs/${t}/reject-final`,`Final rejected for ${t}`)}
                    disabled=${N==="reject-final"||!n.final_preview_url}
                  >
                    ${N==="reject-final"?"Working...":"Reject Final"}
                  </button>
                </div>
              </section>

              <section className="two-column">
                <section className="section-panel">
                  <div className="section-head">
                    <div>
                      <h2 className="section-title">Lifecycle Events</h2>
                      <p className="section-copy">Audit timeline from /api/jobs/${t}/events.</p>
                    </div>
                  </div>
                  ${l.length===0?v`<p className="empty-state">No lifecycle events found.</p>`:v`
                        <ul className="list-simple">
                          ${l.slice().reverse().map((b,B)=>v`
                                <li key=${`${b.event_type}_${B}`} className="list-item">
                                  <p className="event-type">${b.event_type}</p>
                                  <p className="event-meta">${Ue(b.created_at)}</p>
                                  ${rp(b.event_payload_json)?v`<p className="event-meta">${rp(b.event_payload_json)}</p>`:null}
                                </li>
                              `)}
                        </ul>
                      `}
                </section>

                <section className="section-panel">
                  <div className="section-head">
                    <div>
                      <h2 className="section-title">Saved Assets</h2>
                      <p className="section-copy">Persisted file paths, URLs, and metadata references.</p>
                    </div>
                  </div>
                  ${a.length===0?v`<p className="empty-state">No assets saved for this job yet.</p>`:v`
                        <div className="table-wrap">
                          <table className="console-table">
                            <thead>
                              <tr>
                                <th>asset_type</th>
                                <th>public_url</th>
                                <th>relative_path</th>
                                <th>absolute_path</th>
                                <th>approved</th>
                                <th>created_at</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${a.map((b,B)=>v`
                                  <tr key=${`${b.asset_type}_${B}`}>
                                    <td>${b.asset_type}</td>
                                    <td>
                                      ${b.asset_url?v`<a className="job-link" href=${mr(b.asset_url||b.public_url)} target="_blank" rel="noreferrer">open</a>`:"-"}
                                    </td>
                                    <td><code>${b.relative_path||"-"}</code></td>
                                    <td><code>${b.absolute_path||"-"}</code></td>
                                    <td><${Te} value=${b.approved?"approved":"pending"} /></td>
                                    <td>${Ue(b.created_at)}</td>
                                  </tr>
                                `)}
                            </tbody>
                          </table>
                        </div>
                      `}
                </section>
              </section>

              <details className="section-panel debug-panel">
                <summary className="debug-summary">
                  <span>Internal Debug</span>
                  <span className="section-copy">Candidate pool, shortlist ranking, and alternate preview renders.</span>
                </summary>

                <section className="section-panel section-embedded">
                  <div className="section-head">
                    <div>
                      <h2 className="section-title">Candidate Pool</h2>
                      <p className="section-copy">All stored text variants for this job. Useful for debugging, not for normal approval.</p>
                    </div>
                    <p className="section-copy">${s.length} total candidates</p>
                  </div>
                  ${s.length===0?v`<p className="empty-state">No candidates stored for this job yet.</p>`:v`
                        <div className="table-wrap">
                          <table className="console-table">
                            <thead>
                              <tr>
                                <th>model</th>
                                <th>raw_score</th>
                                <th>judged_score</th>
                                <th>shortlist</th>
                                <th>selected</th>
                                <th>text</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${s.map(b=>v`
                                  <tr key=${b.id||`${b.model}_${b.text}`}>
                                    <td>${b.model}</td>
                                    <td>${Number(b.raw_score||0).toFixed(3)}</td>
                                    <td>${Number(b.judged_score??b.judge_score??0).toFixed(3)}</td>
                                    <td><${Te} value=${b.is_shortlisted?"shortlisted":"pooled"} /></td>
                                    <td><${Te} value=${b.is_selected?"selected":"not_selected"} /></td>
                                    <td>${hr(b.text||b.content_text,200)}</td>
                                  </tr>
                                `)}
                            </tbody>
                          </table>
                        </div>
                      `}
                </section>

                <section className="section-panel section-embedded">
                  <div className="section-head">
                    <div>
                      <h2 className="section-title">Top 10 Shortlist</h2>
                      <p className="section-copy">Internal ranking output. Only use this if you want to inspect or render alternate internal previews.</p>
                    </div>
                    <button type="button" className="button primary" onClick=${W} disabled=${N==="render-shortlist"||h.length===0}>
                      ${N==="render-shortlist"?"Rendering...":"Render Shortlist"}
                    </button>
                  </div>
                  ${h.length===0?v`<p className="empty-state">No shortlist available for this job yet.</p>`:v`
                        <div className="table-wrap">
                          <table className="console-table">
                            <thead>
                              <tr>
                                <th>use</th>
                                <th>rank</th>
                                <th>model</th>
                                <th>score</th>
                                <th>text</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${h.map(b=>v`
                                  <tr key=${b.candidate_id}>
                                    <td>
                                      <input
                                        type="checkbox"
                                        checked=${p.includes(Number(b.candidate_id))}
                                        onChange=${B=>J(Number(b.candidate_id),B.target.checked)}
                                      />
                                    </td>
                                    <td>${b.rank}</td>
                                    <td>${b.model}</td>
                                    <td>${Number(b.score||0).toFixed(3)}</td>
                                    <td>${hr(b.text,220)}</td>
                                  </tr>
                                `)}
                            </tbody>
                          </table>
                        </div>
                      `}
                </section>

                <section className="section-panel section-embedded">
                  <div className="section-head">
                    <div>
                      <h2 className="section-title">Additional Previews</h2>
                      <p className="section-copy">Alternate preview variants, shortlist renders, and exported images discovered on this job.</p>
                    </div>
                  </div>
                  ${D.length===0&&$e.length===0?v`<p className="empty-state">No preview variants available yet.</p>`:v`
                        <div className="image-grid">
                          ${[...D,...$e].map(b=>v`
                              <${fy} key=${b.url} image=${b} />
                            `)}
                        </div>
                      `}
                </section>
              </details>
            `:v`<p className="empty-state">${k?"Loading job details...":"Job not found."}</p>`}
      </section>
    `}function _y(){let e=jt(),[t,n]=(0,$.useState)([]),[r,a]=(0,$.useState)({week_schedule:[],month_schedule:[],active_overrides:[]}),[o,l]=(0,$.useState)(null),[i,s]=(0,$.useState)(!1),[u,h]=(0,$.useState)(""),[y,p]=(0,$.useState)(""),[E,k]=(0,$.useState)(""),[w,N]=(0,$.useState)(""),[d,c]=(0,$.useState)(!1),[f,g]=(0,$.useState)(!1),[C,P]=(0,$.useState)(!1),[L,D]=(0,$.useState)(!1),[z,I]=(0,$.useState)(null),[j,$e]=(0,$.useState)(null),[A,J]=(0,$.useState)({theme_key:"",theme_name:"",description:"",theme_bucket:"everyday",theme_type:"evergreen",cultural_context:"global",tone_style:"conversational",default_funny_pct:20,default_emotion_pct:80,default_audience:"general audience",default_visual_style:"minimal",is_active:!0,priority:0}),[W,de]=(0,$.useState)({theme_id:"",schedule_type:"weekly_recurring",start_date:"",end_date:"",weekday_mask:"monday",month_mask:"",region:"",country:"",is_active:!0,priority:0,notes:""}),[le,b]=(0,$.useState)({theme_id:"",override_scope:"editorial",start_at:"",end_at:"",reason:"",force_top_priority:!0,created_by:"console_admin"}),[B,fe]=(0,$.useState)(ma()),q=o&&typeof o=="object"&&o.theme||null,De=(0,$.useMemo)(()=>t.reduce((m,_)=>{let Y=String(_.theme_bucket||"everyday");return m[Y]=(m[Y]||0)+1,m},{everyday:0,occasion:0,current_event:0}),[t]),he=(0,$.useMemo)(()=>[{key:"everyday",title:"Everyday Themes",description:"Recurring weekday themes that keep the console stocked with steady daily runs.",items:t.filter(m=>String(m.theme_bucket||"everyday")==="everyday")},{key:"occasion",title:"Occasion Themes",description:"Date-range and seasonal campaign themes such as Ramadan, Holi, and Valentine's Week.",items:t.filter(m=>String(m.theme_bucket||"everyday")==="occasion")},{key:"current_event",title:"Current Event Themes",description:"Editorial and trend-driven themes that are intended to be activated through overrides.",items:t.filter(m=>String(m.theme_bucket||"everyday")==="current_event")}],[t]);async function je(){s(!0),h(""),p("");let[m,_,Y]=await Promise.allSettled([M("/api/themes"),M("/api/themes/today"),M("/api/themes/schedule")]);if(m.status==="fulfilled"){let pe=Array.isArray(m.value)?m.value:[];n(pe),pe.length>0&&(de(it=>({...it,theme_id:String(it.theme_id||pe[0].id)})),b(it=>({...it,theme_id:String(it.theme_id||pe[0].id)}))),pe.length===0&&p("Theme schedule not configured yet")}else n([]),Fn(m.reason)?p("Theme schedule not configured yet"):h(Dn("theme catalog",m.reason));if(_.status==="fulfilled"?(l(_.value||null),_.value?.resolved===!1&&p(pe=>pe||_.value?.message||"No theme resolved yet")):(l(null),Fn(_.reason)?p(pe=>pe||"No theme resolved yet"):h(pe=>pe||Dn("today's theme",_.reason))),Y.status==="fulfilled"){if(Array.isArray(Y.value)){a({week_schedule:[],month_schedule:[],active_overrides:[]}),p(pe=>pe||"Theme schedule not configured yet"),s(!1);return}a({week_schedule:Array.isArray(Y.value?.week_schedule)?Y.value.week_schedule:[],month_schedule:Array.isArray(Y.value?.month_schedule)?Y.value.month_schedule:[],active_overrides:Array.isArray(Y.value?.active_overrides)?Y.value.active_overrides:[]})}else a({week_schedule:[],month_schedule:[],active_overrides:[]}),Fn(Y.reason)?p(pe=>pe||"Theme schedule not configured yet"):h(pe=>pe||Dn("theme schedule",Y.reason));s(!1)}(0,$.useEffect)(()=>{je()},[]);function x(m=null){I(m?m.id:null),J({theme_key:m?.theme_key||"",theme_name:m?.theme_name||"",description:m?.description||"",theme_bucket:m?.theme_bucket||"everyday",theme_type:m?.theme_type||"evergreen",cultural_context:m?.cultural_context||"global",tone_style:m?.tone_style||"conversational",default_funny_pct:m?.default_funny_pct??20,default_emotion_pct:m?.default_emotion_pct??80,default_audience:m?.default_audience||"general audience",default_visual_style:m?.default_visual_style||"minimal",is_active:m?.is_active??!0,priority:m?.priority??0}),c(!0)}function K(m=null){$e(m?m.id:null),de({theme_id:String(m?.theme_id||t[0]?.id||""),schedule_type:m?.schedule_type||"weekly_recurring",start_date:op(m?.start_date),end_date:op(m?.end_date),weekday_mask:Array.isArray(m?.weekday_mask)?m.weekday_mask.join(", "):"monday",month_mask:Array.isArray(m?.month_mask)?m.month_mask.join(", "):"",region:m?.region||"",country:m?.country||"",is_active:m?.is_active??!0,priority:m?.priority??0,notes:m?.notes||""}),g(!0)}function V(m=null){let _=new Date,Y=new Date(_.getTime()+1440*60*1e3);b({theme_id:String(m||q?.theme_id||t[0]?.id||""),override_scope:"editorial",start_at:lp(_.toISOString()),end_at:lp(Y.toISOString()),reason:"",force_top_priority:!0,created_by:"console_admin"}),P(!0)}async function O(m){m.preventDefault(),N("save-theme"),h("");try{let _={theme_key:String(A.theme_key||"").trim(),theme_name:String(A.theme_name||"").trim(),description:String(A.description||"").trim()||null,theme_bucket:A.theme_bucket,theme_type:A.theme_type,cultural_context:String(A.cultural_context||"").trim()||null,tone_style:String(A.tone_style||"").trim(),default_funny_pct:Number(A.default_funny_pct||0),default_emotion_pct:Number(A.default_emotion_pct||0),default_audience:String(A.default_audience||"").trim(),default_visual_style:String(A.default_visual_style||"").trim(),is_active:!!A.is_active,priority:Number(A.priority||0)},Y=z?`/api/themes/${z}`:"/api/themes";await M(Y,{method:z?"PUT":"POST",body:JSON.stringify(_)}),c(!1),k(z?"Theme updated":"Theme created"),await je()}catch(_){h(_.message||"Unable to save theme")}finally{N("")}}async function Me(m){if(window.confirm(`Deactivate theme ${m.theme_name}?`)){N(`delete-theme:${m.id}`),h("");try{await M(`/api/themes/${m.id}`,{method:"DELETE"}),k(`Theme deactivated: ${m.theme_name}`),await je()}catch(Y){h(Y.message||"Unable to delete theme")}finally{N("")}}}async function lt(m){m.preventDefault(),N("save-schedule"),h("");try{let _={theme_id:Number(W.theme_id),schedule_type:W.schedule_type,start_date:W.start_date||null,end_date:W.end_date||null,weekday_mask:ap(W.weekday_mask),month_mask:ap(W.month_mask).map(it=>Number(it)).filter(it=>Number.isInteger(it)),region:String(W.region||"").trim()||null,country:String(W.country||"").trim()||null,is_active:!!W.is_active,priority:Number(W.priority||0),notes:String(W.notes||"").trim()||null},Y=j?`/api/themes/schedule/${j}`:"/api/themes/schedule";await M(Y,{method:j?"PUT":"POST",body:JSON.stringify(_)}),g(!1),k(j?"Schedule updated":"Schedule created"),await je()}catch(_){h(_.message||"Unable to save schedule")}finally{N("")}}async function Mt(m){m.preventDefault(),N("save-override"),h("");try{let _={theme_id:Number(le.theme_id),override_scope:String(le.override_scope||"").trim(),start_at:new Date(le.start_at).toISOString(),end_at:new Date(le.end_at).toISOString(),reason:String(le.reason||"").trim()||null,force_top_priority:!!le.force_top_priority,created_by:String(le.created_by||"console_admin").trim()};await M("/api/themes/overrides",{method:"POST",body:JSON.stringify(_)}),P(!1),k("Override created"),await je()}catch(_){h(_.message||"Unable to save override")}finally{N("")}}async function zt(m){m&&m.preventDefault(),N("create-today-job"),h("");try{let _=await M("/api/jobs/create-daily-theme-job-async",{method:"POST",body:JSON.stringify(fp(B))});D(!1),Ls(_.job_id,e)}catch(_){h(_.message||"Unable to create today's themed job")}finally{N("")}}return v`
      <section>
        <header className="page-head">
          <div>
            <p className="page-kicker">Admin</p>
            <h1 className="page-title">Theme Factory</h1>
            <p className="page-description">
              Database-backed theme catalog, schedules, overrides, and daily resolution controls.
            </p>
          </div>
          <div className="inline-actions">
            <button
              type="button"
              className="button primary"
              onClick=${()=>{fe(ma(q)),D(!0)}}
              disabled=${w==="create-today-job"||!q}
            >
              ${w==="create-today-job"?"Creating...":"Use Today's Theme"}
            </button>
            <button type="button" className="button" onClick=${je} disabled=${i}>Refresh</button>
            <${Xe} to="/" className="button-link">Home<//>
          </div>
        </header>

        ${u?v`<div className="status-panel error">${u}</div>`:null}
        ${y?v`<div className="status-panel neutral">${y}</div>`:null}
        ${E?v`<p className="status-line">${E}</p>`:null}
        ${i?v`<div className="status-panel warning">Loading Theme Factory data...</div>`:null}

        <section className="cards-grid">
          <article className="summary-card">
            <p className="summary-label">Everyday Themes</p>
            <p className="summary-value">${De.everyday}</p>
          </article>
          <article className="summary-card">
            <p className="summary-label">Occasion Themes</p>
            <p className="summary-value">${De.occasion}</p>
          </article>
          <article className="summary-card">
            <p className="summary-label">Current Event Themes</p>
            <p className="summary-value">${De.current_event}</p>
          </article>
          <article className="summary-card">
            <p className="summary-label">Active Overrides</p>
            <p className="summary-value">${r.active_overrides.length}</p>
          </article>
        </section>

        <section className="section-panel">
          <div className="section-head">
            <div>
              <h2 className="section-title">Today's Theme</h2>
              <p className="section-copy">Resolved using overrides, schedules, and evergreen fallback logic.</p>
            </div>
          </div>
          ${q?v`
                <div className="key-value-grid">
                  <article className="key-card">
                    <p className="key-label">Theme</p>
                    <p className="key-value">${q.theme_name}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">Bucket</p>
                    <p className="key-value">${dp(q.theme_bucket)}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">Source</p>
                    <p className="key-value">${ye(o?.source)}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">Weekday</p>
                    <p className="key-value">${ye(o?.weekday)}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">Audience</p>
                    <p className="key-value">${q.audience}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">Tone</p>
                    <p className="key-value">${q.tone_style}</p>
                  </article>
                  <article className="key-card">
                    <p className="key-label">Priority</p>
                    <p className="key-value">${q.priority}</p>
                  </article>
                </div>
              `:v`<p className="empty-state">No theme resolved yet.</p>`}
        </section>

        <section className="section-panel">
          <div className="section-head">
            <div>
              <h2 className="section-title">Theme Catalog</h2>
              <p className="section-copy">Source themes are grouped by the three operational buckets used by Theme Factory resolution.</p>
            </div>
            <div className="inline-actions">
              <button type="button" className="button primary" onClick=${()=>x()}>Add Theme</button>
            </div>
          </div>
          ${t.length===0?v`<p className="empty-state">No theme catalog entries found.</p>`:v`
                ${he.map(m=>v`
                    <section className="section-panel" key=${m.key}>
                      <div className="section-head">
                        <div>
                          <h3 className="section-title">${m.title}</h3>
                          <p className="section-copy">${m.description}</p>
                        </div>
                      </div>
                      ${m.items.length===0?v`<p className="empty-state">No ${m.title.toLowerCase()} configured.</p>`:v`
                            <div className="table-wrap">
                              <table className="console-table">
                                <thead>
                                  <tr>
                                    <th>theme_key</th>
                                    <th>theme_name</th>
                                    <th>theme_type</th>
                                    <th>audience</th>
                                    <th>visual_style</th>
                                    <th>priority</th>
                                    <th>status</th>
                                    <th>actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  ${m.items.map(_=>v`
                                      <tr key=${_.id}>
                                        <td><code>${_.theme_key}</code></td>
                                        <td>${_.theme_name}</td>
                                        <td>${ye(_.theme_type)}</td>
                                        <td>${_.default_audience}</td>
                                        <td>${_.default_visual_style}</td>
                                        <td>${_.priority}</td>
                                        <td><${Te} value=${_.is_active?"active":"inactive"} /></td>
                                        <td>
                                          <div className="inline-actions">
                                            <button type="button" className="button" onClick=${()=>x(_)}>Edit</button>
                                            <button
                                              type="button"
                                              className="button danger"
                                              onClick=${()=>Me(_)}
                                              disabled=${w===`delete-theme:${_.id}`}
                                            >
                                              ${w===`delete-theme:${_.id}`?"Deleting...":"Delete"}
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                    `)}
                                </tbody>
                              </table>
                            </div>
                          `}
                    </section>
                  `)}
              `}
        </section>

        <section className="two-column">
          <section className="section-panel">
            <div className="section-head">
              <div>
                <h2 className="section-title">This Week's Schedule</h2>
                <p className="section-copy">Resolved day-by-day schedule for the current week.</p>
              </div>
              <button type="button" className="button primary" onClick=${()=>K()}>Add Schedule</button>
            </div>
            ${r.week_schedule.length===0?v`<p className="empty-state">No week schedule found.</p>`:v`
                  <div className="table-wrap">
                    <table className="console-table">
                      <thead>
                        <tr>
                          <th>date</th>
                          <th>weekday</th>
                          <th>theme</th>
                          <th>source</th>
                          <th>schedule_type</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${r.week_schedule.map(m=>v`
                            <tr key=${`${m.plan_date}_${m.weekday}`}>
                              <td>${Ue(m.plan_date)}</td>
                              <td>${ye(m.weekday)}</td>
                              <td>${m.theme?.theme_name||"-"}</td>
                              <td>${ye(m.source)}</td>
                              <td>${ye(m.schedule_type)}</td>
                            </tr>
                          `)}
                      </tbody>
                    </table>
                  </div>
                `}
          </section>

          <section className="section-panel">
            <div className="section-head">
              <div>
                <h2 className="section-title">Active Overrides</h2>
                <p className="section-copy">Urgent editorial or manual overrides currently taking precedence.</p>
              </div>
              <button type="button" className="button primary" onClick=${()=>V()}>Add Override</button>
            </div>
            ${r.active_overrides.length===0?v`<p className="empty-state">No active overrides right now.</p>`:v`
                  <div className="table-wrap">
                    <table className="console-table">
                      <thead>
                        <tr>
                          <th>theme</th>
                          <th>scope</th>
                          <th>window</th>
                          <th>reason</th>
                          <th>priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${r.active_overrides.map(m=>v`
                            <tr key=${m.id}>
                              <td>${m.theme_name||"-"}</td>
                              <td>${ye(m.override_scope)}</td>
                              <td>${Ue(m.start_at)} - ${Ue(m.end_at)}</td>
                              <td>${m.reason||"-"}</td>
                              <td>${m.force_top_priority?"top":"normal"}</td>
                            </tr>
                          `)}
                      </tbody>
                    </table>
                  </div>
                `}
          </section>
        </section>

        <section className="section-panel">
          <div className="section-head">
            <div>
              <h2 className="section-title">This Month's Schedule</h2>
              <p className="section-copy">Schedule rules intersecting the current month.</p>
            </div>
          </div>
          ${r.month_schedule.length===0?v`<p className="empty-state">No monthly schedule rules found.</p>`:v`
                <div className="table-wrap">
                  <table className="console-table">
                    <thead>
                      <tr>
                        <th>theme</th>
                        <th>schedule_type</th>
                        <th>start_date</th>
                        <th>end_date</th>
                        <th>weekday_mask</th>
                        <th>priority</th>
                        <th>actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${r.month_schedule.map(m=>v`
                          <tr key=${m.id}>
                            <td>${m.theme_name||"-"}</td>
                            <td>${ye(m.schedule_type)}</td>
                            <td>${m.start_date?Ue(m.start_date):"-"}</td>
                            <td>${m.end_date?Ue(m.end_date):"-"}</td>
                            <td>${(m.weekday_mask||[]).join(", ")||"-"}</td>
                            <td>${m.priority}</td>
                            <td>
                              <button type="button" className="button" onClick=${()=>K(m)}>
                                Edit
                              </button>
                            </td>
                          </tr>
                        `)}
                    </tbody>
                  </table>
                </div>
              `}
        </section>

        ${L?v`
              <div className="modal-backdrop" onClick=${()=>D(!1)}>
                <section className="modal" onClick=${m=>m.stopPropagation()}>
                  <h2 className="section-title">Use Today's Theme</h2>
                  <p className="section-copy">
                    ${q?`Resolved theme: ${q.theme_name}`:"No theme resolved yet."}
                  </p>
                  <form onSubmit=${zt}>
                    <div className="form-grid">
                      <div className="form-field">
                        <label htmlFor="todayCopyStyle">Copy Style</label>
                        <select
                          id="todayCopyStyle"
                          value=${B.copy_style}
                          onChange=${m=>fe(_=>({..._,copy_style:m.target.value}))}
                        >
                          ${Fs()}
                        </select>
                      </div>
                      <div className="form-field">
                        <label htmlFor="todayTargetWords">Target Words</label>
                        <input
                          id="todayTargetWords"
                          type="number"
                          min="4"
                          max="60"
                          value=${B.target_words}
                          onInput=${m=>fe(_=>({..._,target_words:m.target.value}))}
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="todayFunnyPct">Funny %</label>
                        <input
                          id="todayFunnyPct"
                          type="number"
                          min="0"
                          max="100"
                          value=${B.tone_funny_pct}
                          onInput=${m=>fe(_=>({..._,tone_funny_pct:m.target.value}))}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="todayCardsPerTheme">Cards Per Theme</label>
                        <input
                          id="todayCardsPerTheme"
                          type="number"
                          min="1"
                          max="50"
                          value=${B.cards_per_theme}
                          onInput=${m=>fe(_=>({..._,cards_per_theme:m.target.value}))}
                          required
                        />
                      </div>
                      <div className="form-field full">
                        <p className="form-helper">This launches a theme run directly into Studio with short card-copy defaults.</p>
                      </div>
                      <div className="form-field full">
                        <label htmlFor="todayThemeNotes">Notes</label>
                        <textarea
                          id="todayThemeNotes"
                          rows="3"
                          value=${B.notes}
                          onInput=${m=>fe(_=>({..._,notes:m.target.value}))}
                          placeholder="Optional operator notes"
                        ></textarea>
                      </div>
                    </div>
                    <div className="inline-actions" style=${{marginTop:"12px"}}>
                      <button type="submit" className="button primary" disabled=${w==="create-today-job"||!q}>
                        ${w==="create-today-job"?"Creating...":"Use Today's Theme"}
                      </button>
                      <button type="button" className="button" onClick=${()=>D(!1)}>Cancel</button>
                    </div>
                  </form>
                </section>
              </div>
            `:null}

        ${d?v`
              <div className="modal-backdrop" onClick=${()=>c(!1)}>
                <section className="modal modal-wide" onClick=${m=>m.stopPropagation()}>
                  <h2 className="section-title">${z?"Edit Theme":"Add Theme"}</h2>
                  <form onSubmit=${O}>
                    <div className="form-grid">
                      <div className="form-field">
                        <label htmlFor="themeKey">Theme Key</label>
                        <input id="themeKey" value=${A.theme_key} onInput=${m=>J(_=>({..._,theme_key:m.target.value}))} required />
                      </div>
                      <div className="form-field">
                        <label htmlFor="themeNameFactory">Theme Name</label>
                        <input id="themeNameFactory" value=${A.theme_name} onInput=${m=>J(_=>({..._,theme_name:m.target.value}))} required />
                      </div>
                      <div className="form-field">
                        <label htmlFor="themeBucket">Theme Bucket</label>
                        <select id="themeBucket" value=${A.theme_bucket} onChange=${m=>J(_=>({..._,theme_bucket:m.target.value}))}>
                          <option value="everyday">everyday</option>
                          <option value="occasion">occasion</option>
                          <option value="current_event">current event</option>
                        </select>
                      </div>
                      <div className="form-field">
                        <label htmlFor="themeType">Theme Type</label>
                        <select id="themeType" value=${A.theme_type} onChange=${m=>J(_=>({..._,theme_type:m.target.value}))}>
                          <option value="evergreen">evergreen</option>
                          <option value="calendar">calendar</option>
                          <option value="campaign">campaign</option>
                          <option value="news">news</option>
                        </select>
                      </div>
                      <div className="form-field">
                        <label htmlFor="themeContext">Cultural Context</label>
                        <input id="themeContext" value=${A.cultural_context} onInput=${m=>J(_=>({..._,cultural_context:m.target.value}))} />
                      </div>
                      <div className="form-field">
                        <label htmlFor="themeTone">Tone Style</label>
                        <input id="themeTone" value=${A.tone_style} onInput=${m=>J(_=>({..._,tone_style:m.target.value}))} required />
                      </div>
                      <div className="form-field">
                        <label htmlFor="themeAudience">Audience</label>
                        <input id="themeAudience" value=${A.default_audience} onInput=${m=>J(_=>({..._,default_audience:m.target.value}))} required />
                      </div>
                      <div className="form-field">
                        <label htmlFor="themeVisual">Visual Style</label>
                        <input id="themeVisual" value=${A.default_visual_style} onInput=${m=>J(_=>({..._,default_visual_style:m.target.value}))} required />
                      </div>
                      <div className="form-field">
                        <label htmlFor="themePriority">Priority</label>
                        <input id="themePriority" type="number" value=${A.priority} onInput=${m=>J(_=>({..._,priority:m.target.value}))} />
                      </div>
                      <div className="form-field">
                        <label htmlFor="themeFunny">Funny %</label>
                        <input id="themeFunny" type="number" min="0" max="100" value=${A.default_funny_pct} onInput=${m=>J(_=>({..._,default_funny_pct:m.target.value}))} />
                      </div>
                      <div className="form-field">
                        <label htmlFor="themeEmotion">Emotion %</label>
                        <input id="themeEmotion" type="number" min="0" max="100" value=${A.default_emotion_pct} onInput=${m=>J(_=>({..._,default_emotion_pct:m.target.value}))} />
                      </div>
                      <div className="form-field full">
                        <label htmlFor="themeDescription">Description</label>
                        <textarea id="themeDescription" rows="4" value=${A.description} onInput=${m=>J(_=>({..._,description:m.target.value}))}></textarea>
                      </div>
                      <label className="checkbox-field full">
                        <input type="checkbox" checked=${A.is_active} onChange=${m=>J(_=>({..._,is_active:m.target.checked}))} />
                        <span>Active theme</span>
                      </label>
                    </div>
                    <div className="inline-actions" style=${{marginTop:"12px"}}>
                      <button type="submit" className="button primary" disabled=${w==="save-theme"}>
                        ${w==="save-theme"?"Saving...":"Save Theme"}
                      </button>
                      <button type="button" className="button" onClick=${()=>c(!1)}>Cancel</button>
                    </div>
                  </form>
                </section>
              </div>
            `:null}

        ${f?v`
              <div className="modal-backdrop" onClick=${()=>g(!1)}>
                <section className="modal modal-wide" onClick=${m=>m.stopPropagation()}>
                  <h2 className="section-title">${j?"Edit Schedule":"Add Schedule"}</h2>
                  <form onSubmit=${lt}>
                    <div className="form-grid">
                      <div className="form-field">
                        <label htmlFor="scheduleTheme">Theme</label>
                        <select id="scheduleTheme" value=${W.theme_id} onChange=${m=>de(_=>({..._,theme_id:m.target.value}))} required>
                          ${t.map(m=>v`<option key=${m.id} value=${m.id}>${m.theme_name}</option>`)}
                        </select>
                      </div>
                      <div className="form-field">
                        <label htmlFor="scheduleType">Schedule Type</label>
                        <select id="scheduleType" value=${W.schedule_type} onChange=${m=>de(_=>({..._,schedule_type:m.target.value}))}>
                          <option value="single_day">single_day</option>
                          <option value="date_range">date_range</option>
                          <option value="weekly_recurring">weekly_recurring</option>
                          <option value="monthly_recurring">monthly_recurring</option>
                        </select>
                      </div>
                      <div className="form-field">
                        <label htmlFor="scheduleStart">Start Date</label>
                        <input id="scheduleStart" type="date" value=${W.start_date} onInput=${m=>de(_=>({..._,start_date:m.target.value}))} />
                      </div>
                      <div className="form-field">
                        <label htmlFor="scheduleEnd">End Date</label>
                        <input id="scheduleEnd" type="date" value=${W.end_date} onInput=${m=>de(_=>({..._,end_date:m.target.value}))} />
                      </div>
                      <div className="form-field">
                        <label htmlFor="weekdayMask">Weekday Mask</label>
                        <input id="weekdayMask" value=${W.weekday_mask} onInput=${m=>de(_=>({..._,weekday_mask:m.target.value}))} placeholder="monday, thursday" />
                      </div>
                      <div className="form-field">
                        <label htmlFor="monthMask">Month Mask</label>
                        <input id="monthMask" value=${W.month_mask} onInput=${m=>de(_=>({..._,month_mask:m.target.value}))} placeholder="2, 3, 8" />
                      </div>
                      <div className="form-field">
                        <label htmlFor="scheduleRegion">Region</label>
                        <input id="scheduleRegion" value=${W.region} onInput=${m=>de(_=>({..._,region:m.target.value}))} />
                      </div>
                      <div className="form-field">
                        <label htmlFor="scheduleCountry">Country</label>
                        <input id="scheduleCountry" value=${W.country} onInput=${m=>de(_=>({..._,country:m.target.value}))} />
                      </div>
                      <div className="form-field">
                        <label htmlFor="schedulePriority">Priority</label>
                        <input id="schedulePriority" type="number" value=${W.priority} onInput=${m=>de(_=>({..._,priority:m.target.value}))} />
                      </div>
                      <div className="form-field full">
                        <label htmlFor="scheduleNotes">Notes</label>
                        <textarea id="scheduleNotes" rows="4" value=${W.notes} onInput=${m=>de(_=>({..._,notes:m.target.value}))}></textarea>
                      </div>
                      <label className="checkbox-field full">
                        <input type="checkbox" checked=${W.is_active} onChange=${m=>de(_=>({..._,is_active:m.target.checked}))} />
                        <span>Active schedule</span>
                      </label>
                    </div>
                    <div className="inline-actions" style=${{marginTop:"12px"}}>
                      <button type="submit" className="button primary" disabled=${w==="save-schedule"}>
                        ${w==="save-schedule"?"Saving...":"Save Schedule"}
                      </button>
                      <button type="button" className="button" onClick=${()=>g(!1)}>Cancel</button>
                    </div>
                  </form>
                </section>
              </div>
            `:null}

        ${C?v`
              <div className="modal-backdrop" onClick=${()=>P(!1)}>
                <section className="modal" onClick=${m=>m.stopPropagation()}>
                  <h2 className="section-title">Add Override</h2>
                  <form onSubmit=${Mt}>
                    <div className="form-grid">
                      <div className="form-field full">
                        <label htmlFor="overrideTheme">Theme</label>
                        <select id="overrideTheme" value=${le.theme_id} onChange=${m=>b(_=>({..._,theme_id:m.target.value}))} required>
                          ${t.map(m=>v`<option key=${m.id} value=${m.id}>${m.theme_name}</option>`)}
                        </select>
                      </div>
                      <div className="form-field">
                        <label htmlFor="overrideScope">Scope</label>
                        <input id="overrideScope" value=${le.override_scope} onInput=${m=>b(_=>({..._,override_scope:m.target.value}))} required />
                      </div>
                      <div className="form-field">
                        <label htmlFor="overrideBy">Created By</label>
                        <input id="overrideBy" value=${le.created_by} onInput=${m=>b(_=>({..._,created_by:m.target.value}))} required />
                      </div>
                      <div className="form-field">
                        <label htmlFor="overrideStart">Start At</label>
                        <input id="overrideStart" type="datetime-local" value=${le.start_at} onInput=${m=>b(_=>({..._,start_at:m.target.value}))} required />
                      </div>
                      <div className="form-field">
                        <label htmlFor="overrideEnd">End At</label>
                        <input id="overrideEnd" type="datetime-local" value=${le.end_at} onInput=${m=>b(_=>({..._,end_at:m.target.value}))} required />
                      </div>
                      <div className="form-field full">
                        <label htmlFor="overrideReason">Reason</label>
                        <textarea id="overrideReason" rows="4" value=${le.reason} onInput=${m=>b(_=>({..._,reason:m.target.value}))}></textarea>
                      </div>
                      <label className="checkbox-field full">
                        <input type="checkbox" checked=${le.force_top_priority} onChange=${m=>b(_=>({..._,force_top_priority:m.target.checked}))} />
                        <span>Force top priority</span>
                      </label>
                    </div>
                    <div className="inline-actions" style=${{marginTop:"12px"}}>
                      <button type="submit" className="button primary" disabled=${w==="save-override"}>
                        ${w==="save-override"?"Saving...":"Save Override"}
                      </button>
                      <button type="button" className="button" onClick=${()=>P(!1)}>Cancel</button>
                    </div>
                  </form>
                </section>
              </div>
            `:null}
      </section>
    `}function sp(){let e=jt(),{jobId:t}=Qo(),[n,r]=(0,$.useState)([]),[a,o]=(0,$.useState)(null),[l,i]=(0,$.useState)([]),[s,u]=(0,$.useState)([]),[h,y]=(0,$.useState)([]),[p,E]=(0,$.useState)(null),[k,w]=(0,$.useState)(!1),[N,d]=(0,$.useState)(""),[c,f]=(0,$.useState)(""),[g,C]=(0,$.useState)(""),P=(0,$.useCallback)(async(x={})=>{let K=!!x.quiet;K||w(!0),d("");try{let V=await M("/api/jobs?limit=50"),O=Array.isArray(V)?V:[];if(r(O),!t){o(null),i([]),u([]),y([]),E(null);return}let[Me,lt,Mt,zt]=await Promise.all([M(`/api/jobs/${t}`),M(`/api/jobs/${t}/assets`),M(`/api/jobs/${t}/candidates`),M(`/api/jobs/${t}/shortlist`)]),m={candidates:[]};try{m=await dy(t)}catch(_){console.warn(`Unable to load image assets for ${t}`,_)}o(Me||null),i(Array.isArray(lt)?lt:[]),u(Array.isArray(Mt)?Mt:[]),y(Array.isArray(zt)?zt:[]),E(m||null)}catch(V){d(V.message||"Unable to load Studio")}finally{K||w(!1)}},[t]);(0,$.useEffect)(()=>{P()},[P]);let L=(0,$.useMemo)(()=>el(a||{}),[a]),D=(0,$.useMemo)(()=>Xo(a||{}),[a]),z=(0,$.useMemo)(()=>ty(a||{}),[a]),I=(0,$.useMemo)(()=>Ln(a||{}),[a]),j=(0,$.useMemo)(()=>my(a||{},s),[a,s]),$e=(0,$.useMemo)(()=>Array.isArray(h)?h:[],[h]),A=(0,$.useMemo)(()=>hp(p),[p]),J=(0,$.useMemo)(()=>hy(p),[p]),W=(0,$.useMemo)(()=>py(a||{},l),[a,l]),de=va(W),le=p&&typeof p.can_generate=="boolean"?p.can_generate:!!j,b=!!(j&&J);(0,$.useEffect)(()=>{if(!t)return;let x=window.setInterval(()=>{document.visibilityState==="visible"&&P({quiet:!0})},z?2e3:1e4);return()=>window.clearInterval(x)},[t,P,z]);async function B(x,K,V,O){C(x),d("");try{await K(),V&&f(V),await P(),typeof O=="function"&&O()}catch(Me){d(Me.message||"Studio action failed")}finally{C("")}}async function fe(){if(!(!t||!window.confirm(`Delete ${t} and associated files?`))){C("delete"),d("");try{await M(`/api/jobs/${t}`,{method:"DELETE"}),e("/studio")}catch(K){d(K.message||"Unable to delete job")}finally{C("")}}}function q(x){if(!x){e("/studio");return}e(`/studio/${x}`)}function De(){return a?v`
        <section className="section-panel">
          <div className="section-head">
            <div>
              <h2 className="section-title">Text Options</h2>
              <p className="section-copy">
                ${$e.length} shortlisted from ${s.length} persisted candidates. Choose text manually; nothing is auto-selected in the canonical flow.
              </p>
            </div>
            <div className="inline-actions">
              <button
                type="button"
                className="button"
                onClick=${()=>B("regenerate-text",()=>M(`/api/jobs/${t}/regenerate-content`,{method:"POST"}),`Regenerated text for ${t}`)}
                disabled=${g==="regenerate-text"}
              >
                ${g==="regenerate-text"?"Working...":"Regenerate Text"}
              </button>
              <button
                type="button"
                className="button primary"
                onClick=${()=>B("more-text",()=>M(`/api/jobs/${t}/generate-more-text`,{method:"POST"}),`Generated 10 more text options for ${t}`)}
                disabled=${g==="more-text"}
              >
                ${g==="more-text"?"Working...":"Generate 10 More"}
              </button>
            </div>
          </div>
          <div className=${j?"status-panel success":"status-panel neutral"}>
            ${j?`Selected text candidate ${j.id}: ${j.text||j.content_text}`:z?I||"Content creation is still running in the background.":"No text selected yet. Pick one of the shortlisted options below."}
          </div>
          ${$e.length===0?z?v`<div className="status-panel warning">${I||"Content creation is still running in the background."}</div>`:v`<p className="empty-state">No usable text shortlist is available for this job yet.</p>`:v`
                <div className="studio-option-grid">
                  ${$e.map(x=>{let K=Number(j?.id||0)===Number(x.candidate_id||0);return v`
                      <article key=${x.shortlist_id||x.candidate_id||`${x.model}_${x.text}`} className=${`studio-option-card ${K?"selected":""}`}>
                        <div className="studio-option-head">
                          <${Te} value=${K?"text_selected":"content_candidates_ready"} />
                          <span className="score-chip">
                            rank ${x.rank} | score ${Number(x.score??0).toFixed(3)}
                          </span>
                        </div>
                        <p className="studio-option-text">${x.text}</p>
                        ${x.reason?v`<p className="section-copy">${x.reason}</p>`:null}
                        <div className="studio-meta-row">
                          <span className="mini-pill">candidate ${x.candidate_id}</span>
                          <span className="mini-pill">${x.model}</span>
                          <span className="mini-pill">${x.backend}</span>
                        </div>
                        ${Array.isArray(x.reason_codes)&&x.reason_codes.length>0?v`
                              <div className="studio-meta-row">
                                ${x.reason_codes.map(V=>v`<span key=${V} className="mini-pill">${V}</span>`)}
                              </div>
                            `:null}
                        <div className="inline-actions">
                          <button
                            type="button"
                            className=${K?"button":"button primary"}
                            onClick=${()=>B(`select-text:${x.candidate_id}`,()=>M(`/api/jobs/${t}/select-text`,{method:"POST",body:JSON.stringify({candidate_id:x.candidate_id})}),`Selected text option ${x.candidate_id} for ${t}`)}
                            disabled=${g===`select-text:${x.candidate_id}`||K}
                          >
                            ${g===`select-text:${x.candidate_id}`?"Working...":K?"Using This Text":"Use This Text"}
                          </button>
                        </div>
                      </article>
                    `})}
                </div>
              `}
        </section>
      `:null}function he(){if(!a)return null;let x=p?.selected_candidate&&typeof p.selected_candidate=="object"?p.selected_candidate:J,K=[x?.rank?`rank ${x.rank}`:null,x?.candidate_id?`candidate ${x.candidate_id}`:null,pn(x?.quality_score)?`quality ${pn(x?.quality_score)}`:null,pn(x?.relevance_score)?`relevance ${pn(x?.relevance_score)}`:null,x?.provider||p?.selected_image_provider||null,x?.model||p?.selected_image_model||null,Ds(x?.width,x?.height)].filter(Boolean).join(" | "),V=[p?.generation_path?`path ${ye(p.generation_path)}`:null,p?.imageforge_request_id?`request ${p.imageforge_request_id}`:null,p?.recommended_candidate_id?`recommended ${p.recommended_candidate_id}`:null,Number(p?.candidate_count||A.length)>0?`${Number(p?.candidate_count||A.length)} candidate${Number(p?.candidate_count||A.length)===1?"":"s"}`:null].filter(Boolean).join(" | ");return v`
        <section className="section-panel">
          <div className="section-head">
            <div>
              <h2 className="section-title">Image Options</h2>
              <p className="section-copy">Generate ImageForge candidates, compare them, and choose one asset for final eCard composition.</p>
            </div>
            <div className="inline-actions">
              ${A.length===0?v`
                    <button
                      type="button"
                      className="button primary"
                      onClick=${()=>B("generate-image-assets",()=>M(`/api/jobs/${t}/image-assets/generate`,{method:"POST"}),`Generated image assets for ${t}`)}
                      disabled=${g==="generate-image-assets"||!le}
                    >
                      ${g==="generate-image-assets"?"Working...":"Generate Image Assets"}
                    </button>
                  `:v`
                    <button
                      type="button"
                      className="button primary"
                      onClick=${()=>B("regenerate-image-assets",()=>M(`/api/jobs/${t}/image-assets/regenerate`,{method:"POST"}),`Regenerated image assets for ${t}`)}
                      disabled=${g==="regenerate-image-assets"||!le}
                    >
                      ${g==="regenerate-image-assets"?"Working...":"Regenerate Image"}
                    </button>
                  `}
            </div>
          </div>
          <div className=${j?"status-panel neutral studio-selected-copy":"status-panel warning studio-selected-copy"}>
            ${j?`Selected text: ${j.text||j.content_text}`:p?.blocking_reason||"Select text first. Image generation should only run after text_selected is true."}
          </div>
          ${p?v`
                <div className="status-panel neutral studio-selected-copy">
                  Image request: ${ye(p.image_generation_status||"not_requested")}
                  ${p.image_generation_stage?` | provider stage: ${ye(p.image_generation_stage)}`:""}
                  ${V?` | ${V}`:""}
                </div>
              `:null}
          <div className=${J?"status-panel success studio-selected-copy":"status-panel neutral studio-selected-copy"}>
            ${J?`Selected image: ${K||"saved locally"}`:"No image selected yet."}
          </div>
          ${A.length===0?v`<p className="empty-state">${le?"No image candidates yet. Use Generate Image Assets to create ImageForge options.":p?.blocking_reason||"No image candidates yet because there is no selected text."}</p>`:v`
                <div className="studio-image-grid">
                  ${A.map(O=>{let Me=J&&J.candidate_id===O.candidate_id;return v`
                      <article key=${O.key} className=${`studio-image-card ${Me?"selected":""}`}>
                        <a href=${O.url} target="_blank" rel="noreferrer">
                          <img src=${O.url} alt=${O.provider} loading="lazy" />
                        </a>
                        <div className="studio-image-body">
                          <div className="studio-meta-row">
                            ${O.is_recommended?v`<span className="mini-pill recommended">Recommended</span>`:null}
                            <span className="mini-pill">rank ${O.rank}</span>
                            <span className="mini-pill">candidate ${O.candidate_id||O.candidate_index}</span>
                            <span className="mini-pill">${ye(O.provider)}</span>
                            <span className="mini-pill">${O.model||"Default Model"}</span>
                          </div>
                          <div className="studio-meta-row">
                            ${pn(O.quality_score)?v`<span className="score-chip">quality ${pn(O.quality_score)}</span>`:null}
                            ${pn(O.relevance_score)?v`<span className="score-chip">relevance ${pn(O.relevance_score)}</span>`:null}
                          </div>
                          <div className="studio-meta-row">
                            ${Ds(O.width,O.height)?v`<span className="mini-pill">${Ds(O.width,O.height)}</span>`:null}
                            <span className="mini-pill">${Ue(O.created_at)}</span>
                            <span className="mini-pill">${Me?"Selected":`Batch ${O.candidate_index}`}</span>
                          </div>
                          <div className="studio-meta-row">
                            ${O.imageforge_request_id?v`<span className="mini-pill">${O.imageforge_request_id}</span>`:null}
                            ${O.provider_run_id?v`<span className="mini-pill">${O.provider_run_id}</span>`:null}
                          </div>
                          <div className="studio-meta-row">
                            <span className="mini-pill">${O.relative_path||"No relative path"}</span>
                          </div>
                          ${O.prompt_used?v`<p className="studio-image-note"><strong>Prompt:</strong> ${hr(O.prompt_used,180)}</p>`:null}
                          ${O.negative_prompt_used?v`<p className="studio-image-note"><strong>Avoid:</strong> ${hr(O.negative_prompt_used,140)}</p>`:null}
                          ${Array.isArray(O.reason_codes)&&O.reason_codes.length>0?v`
                                <div className="studio-meta-row studio-reason-row">
                                  ${O.reason_codes.map(lt=>v`<span key=${lt} className="mini-pill">${lt}</span>`)}
                                </div>
                              `:null}
                          <div className="inline-actions">
                            <button
                              type="button"
                              className=${Me?"button":"button primary"}
                              onClick=${()=>B(`select-image-asset:${O.candidate_id}`,()=>M(`/api/jobs/${t}/image-assets/${O.candidate_id}/select`,{method:"POST"}),`Selected image asset for ${t}`)}
                              disabled=${g===`select-image-asset:${O.candidate_id}`||Me||!O.candidate_id}
                            >
                              ${g===`select-image-asset:${O.candidate_id}`?"Working...":Me?"Using This Image":"Use This Image"}
                            </button>
                          </div>
                        </div>
                      </article>
                    `})}
                </div>
              `}
        </section>
      `}function je(){if(!a)return null;let x=!!L.is_favorite,K=W.length>0?"Regenerate Final Card":"Render Final Card",V=W.length>0?`/api/jobs/${t}/rerun/final-render`:`/api/jobs/${t}/render-final`;return v`
        <section className="section-panel">
          <div className="section-head">
            <div>
              <h2 className="section-title">Final Card</h2>
              <p className="section-copy">Render the actual card preview from the selected text and selected image. Final composition stays inside eCardFactory.</p>
            </div>
            <div className="inline-actions">
              <button
                type="button"
                className="button"
                onClick=${()=>B("favorite",()=>M(`/api/jobs/${t}/favorite`,{method:"POST",body:JSON.stringify({favorite:!x})}),x?`Removed ${t} from favorites`:`Marked ${t} as favorite`)}
                disabled=${g==="favorite"}
              >
                ${g==="favorite"?"Working...":x?"Unfavorite":"Mark Favorite"}
              </button>
              <button
                type="button"
                className="button primary"
                onClick=${()=>B("rerun-card",()=>M(V,{method:"POST"}),`${K} completed for ${t}`)}
                disabled=${g==="rerun-card"||!b}
              >
                ${g==="rerun-card"?"Working...":K}
              </button>
            </div>
          </div>
          <div className=${j?"status-panel success studio-selected-copy":"status-panel warning studio-selected-copy"}>
            ${j?`Text selected: ${j.text||j.content_text}`:"No selected text yet."}
          </div>
          <div className=${J?"status-panel success studio-selected-copy":"status-panel warning studio-selected-copy"}>
            ${J?`Image selected: ${p?.selected_image_candidate_id||J.candidate_id} | ${p?.selected_image_provider||J.provider} | ${p?.selected_image_model||J.model||"Default Model"}`:"No selected image yet."}
          </div>
          ${W.length===0?v`
                <p className="empty-state">
                  ${b?"No final card preview rendered yet. Render the current text + image selection.":"Select both text and image before rendering the final card preview."}
                </p>
              `:v`
                <div className="studio-final-grid">
                  ${W.map(O=>v`
                    <article key=${O.key} className="studio-final-card">
                      <a href=${O.url} target="_blank" rel="noreferrer">
                        <img src=${O.url} alt=${O.label} loading="lazy" />
                      </a>
                      <div className="studio-image-body">
                        <div className="studio-meta-row">
                          <span className="mini-pill">${O.label}</span>
                          <span className="mini-pill">${x?"Favorite":ye(vy(a))}</span>
                        </div>
                        <div className="ecard-actions">
                          <a href=${O.url} target="_blank" rel="noreferrer" className="button-link">Open</a>
                          <button
                            type="button"
                            className="button"
                            onClick=${()=>B("favorite",()=>M(`/api/jobs/${t}/favorite`,{method:"POST",body:JSON.stringify({favorite:!x})}),x?`Removed ${t} from favorites`:`Marked ${t} as favorite`)}
                            disabled=${g==="favorite"}
                          >
                            ${x?"Unfavorite":"Mark Favorite"}
                          </button>
                          <button
                            type="button"
                            className="button"
                            onClick=${()=>B("archive",()=>M(`/api/jobs/${t}/archive`,{method:"POST"}),`Archived ${t}`)}
                            disabled=${g==="archive"||a.status==="archived"}
                          >
                            ${g==="archive"?"Archiving...":"Archive"}
                          </button>
                          <button
                            type="button"
                            className="button danger"
                            onClick=${fe}
                            disabled=${g==="delete"}
                          >
                            ${g==="delete"?"Deleting...":"Delete"}
                          </button>
                        </div>
                      </div>
                    </article>
                  `)}
                </div>
              `}
        </section>
      `}return v`
      <section>
        <header className="page-head">
          <div>
            <p className="page-kicker">Studio</p>
            <h1 className="page-title">eCard Studio</h1>
            <p className="page-description">
              Select text, select image, and rerun only the part of the card you want to change.
            </p>
          </div>
          <div className="inline-actions">
            ${n.length>0?v`
                  <label className="inline-select">
                    <span>Job</span>
                    <select value=${t||""} onChange=${x=>q(x.target.value)}>
                      <option value="">Choose job</option>
                      ${n.map(x=>v`
                        <option key=${x.job_id} value=${x.job_id}>${x.theme_name} | ${x.job_id}</option>
                      `)}
                    </select>
                  </label>
                `:null}
            <button type="button" className="button" onClick=${P} disabled=${k}>Refresh</button>
            ${t?v`<${Xe} to=${`/jobs/${t}`} className="button-link">Job Detail<//>`:null}
          </div>
        </header>

        ${N?v`<div className="status-panel error">${N}</div>`:null}
        ${c?v`<p className="status-line">${c}</p>`:null}
        ${k?v`<div className="status-panel warning">Loading Studio data...</div>`:null}
        ${a&&Is(a)==="content_generation"&&Zo(a)!=="idle"?v`
              <div className=${`status-panel ${Zo(a)==="failed"?"error":"warning"}`}>
                ${I||ye(a.status)}
              </div>
            `:null}

        ${t?a?v`
                <section className="section-panel">
                  <div className="section-head">
                    <div>
                      <h2 className="section-title">${a.theme_name}</h2>
                      <p className="section-copy">${a.job_id} | ${a.cards_per_theme||10} cards | ${pp(a?.output_spec?.format)} | backend status: ${ye(a.status)}</p>
                    </div>
                    <${Te} value=${D} />
                  </div>
                  <div className="studio-current-grid">
                    <article className="key-card">
                      <p className="key-label">Current Stage</p>
                      <p className="studio-current-copy">${ye(D)}</p>
                      <p className="section-copy">
                        ${z?I||"Content creation is still running in the background.":j?"Text is selected and locked for downstream steps.":"No text has been selected yet."}
                      </p>
                    </article>
                    <article className="key-card">
                      <p className="key-label">Selected Text</p>
                      <p className="studio-current-copy">${j?.text||j?.content_text||"No text selected yet."}</p>
                      ${j?v`<p className="section-copy">candidate ${j.id} | ${j.model}</p>`:null}
                    </article>
                    <article className="key-card">
                      <p className="key-label">Selected Image</p>
                      ${J?v`
                            <img className="studio-current-image" src=${J.url} alt="Selected image" loading="lazy" />
                            <p className="section-copy">
                              ${p?.selected_image_candidate_id||J.candidate_id}
                              ${p?.selected_image_provider?` | ${p.selected_image_provider}`:""}
                              ${p?.selected_image_model?` | ${p.selected_image_model}`:""}
                            </p>
                          `:v`<p className="empty-state compact">No image selected yet.</p>`}
                    </article>
                    <article className="key-card">
                      <p className="key-label">Final Card Preview</p>
                      ${de.currentCandidate?v`<img className="studio-current-image" src=${de.currentCandidate.url} alt="Final card" loading="lazy" onError=${de.handleError} />`:v`<p className="empty-state compact">No final card rendered yet.</p>`}
                    </article>
                  </div>
                </section>

                ${De()}
                ${he()}
                ${je()}
              `:v`<p className="empty-state">Job not found.</p>`:v`
              <section className="section-panel">
                <div className="section-head">
                  <div>
                    <h2 className="section-title">Pick a Job</h2>
                    <p className="section-copy">Open any recent job in Studio to control text, image, and final card generation.</p>
                  </div>
                </div>
                ${n.length===0?v`<p className="empty-state">No jobs available yet. Start from Home or Theme Factory.</p>`:v`
                      <div className="table-wrap">
                        <table className="console-table">
                          <thead>
                            <tr>
                              <th>job_id</th>
                              <th>theme</th>
                              <th>stage</th>
                              <th>updated</th>
                              <th>open</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${n.map(x=>v`
                              <tr key=${x.job_id}>
                                <td>${x.job_id}</td>
                                <td>${x.theme_name}</td>
                                <td>
                                  <${Te} value=${Xo(x)} />
                                  ${Ln(x)?v`<p className="section-copy">${Ln(x)}</p>`:null}
                                </td>
                                <td>${Ue(x.updated_at)}</td>
                                <td><${Xe} className="job-link" to=${`/studio/${x.job_id}`}>Open Studio<//></td>
                              </tr>
                            `)}
                          </tbody>
                        </table>
                      </div>
                    `}
              </section>
            `}
      </section>
    `}function Ny(){let[e,t]=(0,$.useState)([]),[n,r]=(0,$.useState)(!1),[a,o]=(0,$.useState)(""),l=(0,$.useCallback)(async()=>{r(!0),o("");try{let i=await M("/api/jobs?limit=100");t(Array.isArray(i)?i:[])}catch(i){o(i.message||"Unable to load jobs")}finally{r(!1)}},[]);return(0,$.useEffect)(()=>{l()},[l]),v`
      <section>
        <header className="page-head">
          <div>
            <p className="page-kicker">Jobs</p>
            <h1 className="page-title">All Jobs</h1>
            <p className="page-description">Workflow data is still available, but Studio is the primary place to control card output.</p>
          </div>
          <div className="inline-actions">
            <button type="button" className="button" onClick=${l} disabled=${n}>Refresh</button>
          </div>
        </header>

        ${a?v`<div className="status-panel error">${a}</div>`:null}
        ${n?v`<div className="status-panel warning">Loading jobs...</div>`:null}

        <section className="section-panel">
          <div className="section-head">
            <div>
              <h2 className="section-title">Jobs</h2>
              <p className="section-copy">Open Studio for operator control or Job Detail for audit-heavy troubleshooting.</p>
            </div>
          </div>
          ${e.length===0?v`<p className="empty-state">No jobs found.</p>`:v`
                <div className="table-wrap">
                  <table className="console-table">
                    <thead>
                      <tr>
                        <th>job_id</th>
                        <th>theme</th>
                        <th>status</th>
                        <th>stage</th>
                        <th>updated</th>
                        <th>actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${e.map(i=>v`
                        <tr key=${i.job_id}>
                          <td>${i.job_id}</td>
                          <td>${i.theme_name}</td>
                          <td>
                            <${Te} value=${i.status} />
                            ${Ln(i)?v`<p className="section-copy">${Ln(i)}</p>`:null}
                          </td>
                          <td>${ye(i.current_stage)}</td>
                          <td>${Ue(i.updated_at)}</td>
                          <td>
                            <div className="inline-actions">
                              <${Xe} className="button-link" to=${`/studio/${i.job_id}`}>Studio<//>
                              <${Xe} className="button-link" to=${`/jobs/${i.job_id}`}>Detail<//>
                            </div>
                          </td>
                        </tr>
                      `)}
                    </tbody>
                  </table>
                </div>
              `}
        </section>
      </section>
    `}function vp(){return v`
      <aside className="console-sidebar">
        <div className="sidebar-brand">
          <p className="brand-overline">eCardFactory</p>
          <p className="sidebar-brand-mark">ECF</p>
        </div>
        <nav className="sidebar-nav icon-only" aria-label="Primary">
          ${[{to:"/",label:"Home",icon:"home",end:!0},{to:"/themes",label:"Theme Factory",icon:"themes"},{to:"/studio",label:"Studio",icon:"studio"},{to:"/compare",label:"Compare Lab",icon:"compare"},{to:"/jobs",label:"Jobs",icon:"jobs"}].map(t=>v`
            <${Jf}
              key=${t.to}
              to=${t.to}
              end=${!!t.end}
              title=${t.label}
              data-tooltip=${t.label}
              className=${({isActive:n})=>n?"nav-link icon-link active":"nav-link icon-link"}
            >
              <span className="nav-icon"><${ry} name=${t.icon} /></span>
              <span className="sr-only">${t.label}</span>
            <//>
          `)}
        </nav>
      </aside>
    `}function wy(){return v`
      <section>
        <header className="page-head">
          <div>
            <p className="page-kicker">Tools</p>
            <h1 className="page-title">Compare Lab</h1>
            <p className="page-description">
              Secondary lab surface for model target selection, prompt/theme tuning, judge mode, sweep mode, and winner analysis.
            </p>
          </div>
          <div className="inline-actions">
            <a href=${np} target="_blank" rel="noreferrer" className="button-link">Open Standalone Compare</a>
          </div>
        </header>

        <section className="section-panel">
          <div className="section-head">
            <div>
              <h2 className="section-title">Embedded Legacy Compare Interface</h2>
              <p className="section-copy">All existing compare workflow features are preserved without functional changes.</p>
            </div>
          </div>
          <iframe
            className="compare-frame"
            src=${np}
            title="eCardFactory Compare Lab"
            loading="lazy"
          ></iframe>
        </section>
      </section>
    `}function Sy(){return v`
      <div className="console-layout">
        <${vp} />

        <main className="console-main">
          <${xs}>
            <${Nt} path="/" element=${v`<${yy} />`} />
            <${Nt} path="/themes" element=${v`<${_y} />`} />
            <${Nt} path="/studio" element=${v`<${sp} />`} />
            <${Nt} path="/studio/:jobId" element=${v`<${sp} />`} />
            <${Nt} path="/compare" element=${v`<${wy} />`} />
            <${Nt} path="/jobs" element=${v`<${Ny} />`} />
            <${Nt} path="/jobs/:jobId" element=${v`<${gy} />`} />
            <${Nt} path="*" element=${v`<${bs} to="/" replace=${!0} />`} />
          <//>
        </main>
      </div>
    `}var As=class extends $.default.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t){ha(`Frontend render error: ${t?.message||"unknown error"}. See browser console for details.`,t)}render(){return this.state.error?v`
        <div className="console-layout">
          <${vp} />
          <main className="console-main">
            <header className="page-head">
              <div>
                <p className="page-kicker">Frontend</p>
                <h1 className="page-title">eCardFactory</h1>
                <p className="page-description">Unable to render the dashboard due to a frontend runtime error.</p>
              </div>
            </header>
            <section className="section-panel">
              <div className="section-head">
                <div>
                  <h2 className="section-title">Render Error</h2>
                  <p className="section-copy">Check browser console for stack trace.</p>
                </div>
              </div>
              <div className="empty-state">
                ${this.state.error?.message||"Unknown frontend error"}
              </div>
            </section>
          </main>
        </div>
      `:this.props.children}};function Ey(){return(0,$.useEffect)(()=>{ey()},[]),null}function ky(){return v`
      <${Kf}>
        <${As}>
          <${Ey} />
          <${Sy} />
        <//>
      <//>
    `}window.addEventListener("error",e=>{e.error&&ha(`Frontend runtime error: ${e.error.message||"unknown error"}.`,e.error)});window.addEventListener("unhandledrejection",e=>{ha(`Unhandled async error: ${e.reason?.message||String(e.reason||"unknown")}`,e.reason)});var up=document.getElementById("root");if(!up)ha("Frontend root element (#root) is missing in index.html.");else try{(0,cp.createRoot)(up).render(v`<${ky} />`)}catch(e){ha(`Unable to mount React root: ${e?.message||"unknown mount error"}`,e)}})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.23.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/index.js:
  (**
   * React Router v6.30.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.30.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
