var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();for(var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ee=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function j(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function te(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,te(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+A(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ee,`$&/`)+`/`),te(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ee,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+A(a,u),c+=te(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+A(a,u++),c+=te(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return te(j(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return te(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function N(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ne=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},P={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=P,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:N}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,ne)}catch(e){ne(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=[],f=[],p=Uint8Array,m=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,h=0,g=m.length;h<g;++h)d[h]=m[h],f[m.charCodeAt(h)]=h;f[45]=62,f[95]=63;function _(e){var t=e.length;if(t%4>0)throw Error(`Invalid string. Length must be a multiple of 4`);var n=e.indexOf(`=`);n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function v(e,t,n){return(t+n)*3/4-n}function y(e){var t,n=_(e),r=n[0],i=n[1],a=new p(v(e,r,i)),o=0,s=i>0?r-4:r,c;for(c=0;c<s;c+=4)t=f[e.charCodeAt(c)]<<18|f[e.charCodeAt(c+1)]<<12|f[e.charCodeAt(c+2)]<<6|f[e.charCodeAt(c+3)],a[o++]=t>>16&255,a[o++]=t>>8&255,a[o++]=t&255;return i===2&&(t=f[e.charCodeAt(c)]<<2|f[e.charCodeAt(c+1)]>>4,a[o++]=t&255),i===1&&(t=f[e.charCodeAt(c)]<<10|f[e.charCodeAt(c+1)]<<4|f[e.charCodeAt(c+2)]>>2,a[o++]=t>>8&255,a[o++]=t&255),a}function b(e){return d[e>>18&63]+d[e>>12&63]+d[e>>6&63]+d[e&63]}function x(e,t,n){for(var r,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(e[a+2]&255),i.push(b(r));return i.join(``)}function S(e){for(var t,n=e.length,r=n%3,i=[],a=16383,o=0,s=n-r;o<s;o+=a)i.push(x(e,o,o+a>s?s:o+a));return r===1?(t=e[n-1],i.push(d[t>>2]+d[t<<4&63]+`==`)):r===2&&(t=(e[n-2]<<8)+e[n-1],i.push(d[t>>10]+d[t>>4&63]+d[t<<2&63]+`=`)),i.join(``)}function C(e){if(e===void 0)return{};if(!T(e))throw Error(`The arguments to a Convex function must be an object. Received: ${e}`);return e}function w(e){if(e===void 0)throw Error(`Client created with undefined deployment address. If you used an environment variable, check that it's set.`);if(typeof e!=`string`)throw Error(`Invalid deployment address: found ${e}".`);if(!(e.startsWith(`http:`)||e.startsWith(`https:`)))throw Error(`Invalid deployment address: Must start with "https://" or "http://". Found "${e}".`);try{new URL(e)}catch{throw Error(`Invalid deployment address: "${e}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}if(e.endsWith(`.convex.site`))throw Error(`Invalid deployment address: "${e}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}function T(e){let t=typeof e==`object`,n=Object.getPrototypeOf(e),r=n===null||n===Object.prototype||n?.constructor?.name===`Object`;return t&&r}var E=!0,D=BigInt(`-9223372036854775808`),O=BigInt(`9223372036854775807`),k=BigInt(`0`),ee=BigInt(`8`),A=BigInt(`256`);function j(e){return Number.isNaN(e)||!Number.isFinite(e)||Object.is(e,-0)}function te(e){e<k&&(e-=D+D);let t=e.toString(16);t.length%2==1&&(t=`0`+t);let n=new Uint8Array(new ArrayBuffer(8)),r=0;for(let i of t.match(/.{2}/g).reverse())n.set([parseInt(i,16)],r++),e>>=ee;return S(n)}function M(e){let t=y(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);let n=k,r=k;for(let e of t)n+=BigInt(e)*A**r,r++;return n>O&&(n+=D+D),n}function N(e){if(e<D||O<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);let t=new ArrayBuffer(8);return new DataView(t).setBigInt64(0,e,!0),S(new Uint8Array(t))}function ne(e){let t=y(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);return new DataView(t.buffer).getBigInt64(0,!0)}var P=DataView.prototype.setBigInt64?N:te,re=DataView.prototype.getBigInt64?ne:M,ie=1024;function F(e){if(e.length>ie)throw Error(`Field name ${e} exceeds maximum field name length ${ie}.`);if(e.startsWith(`$`))throw Error(`Field name ${e} starts with a '$', which is reserved.`);for(let t=0;t<e.length;t+=1){let n=e.charCodeAt(t);if(n<32||n>=127)throw Error(`Field name ${e} has invalid character '${e[t]}': Field names can only contain non-control ASCII characters`)}}function I(e){if(e===null||typeof e==`boolean`||typeof e==`number`||typeof e==`string`)return e;if(Array.isArray(e))return e.map(e=>I(e));if(typeof e!=`object`)throw Error(`Unexpected type of ${e}`);let t=Object.entries(e);if(t.length===1){let n=t[0][0];if(n===`$bytes`){if(typeof e.$bytes!=`string`)throw Error(`Malformed $bytes field on ${e}`);return y(e.$bytes).buffer}if(n===`$integer`){if(typeof e.$integer!=`string`)throw Error(`Malformed $integer field on ${e}`);return re(e.$integer)}if(n===`$float`){if(typeof e.$float!=`string`)throw Error(`Malformed $float field on ${e}`);let t=y(e.$float);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $float`);let n=new DataView(t.buffer).getFloat64(0,E);if(!j(n))throw Error(`Float ${n} should be encoded as a number`);return n}if(n===`$set`)throw Error(`Received a Set which is no longer supported as a Convex type.`);if(n===`$map`)throw Error(`Received a Map which is no longer supported as a Convex type.`)}let n={};for(let[t,r]of Object.entries(e))F(t),n[t]=I(r);return n}var ae=16384;function oe(e){let t=JSON.stringify(e,(e,t)=>t===void 0?`undefined`:typeof t==`bigint`?`${t.toString()}n`:t);if(t.length>ae){let e=ae-14,n=t.codePointAt(e-1);return n!==void 0&&n>65535&&--e,t.substring(0,e)+`[...truncated]`}return t}function se(e,t,n,r){if(e===void 0){let e=n&&` (present at path ${n} in original object ${oe(t)})`;throw Error(`undefined is not a valid Convex value${e}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`)}if(e===null)return e;if(typeof e==`bigint`){if(e<D||O<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);return{$integer:P(e)}}if(typeof e==`number`)if(j(e)){let t=new ArrayBuffer(8);return new DataView(t).setFloat64(0,e,E),{$float:S(new Uint8Array(t))}}else return e;if(typeof e==`boolean`||typeof e==`string`)return e;if(e instanceof ArrayBuffer)return{$bytes:S(new Uint8Array(e))};if(Array.isArray(e))return e.map((e,r)=>se(e,t,n+`[${r}]`,!1));if(e instanceof Set)throw Error(ce(n,`Set`,[...e],t));if(e instanceof Map)throw Error(ce(n,`Map`,[...e],t));if(!T(e)){let r=e?.constructor?.name,i=r?`${r} `:``;throw Error(ce(n,i,e,t))}let i={},a=Object.entries(e);a.sort(([e,t],[n,r])=>e===n?0:e<n?-1:1);for(let[e,o]of a)o===void 0?r&&(F(e),i[e]=le(o,t,n+`.${e}`)):(F(e),i[e]=se(o,t,n+`.${e}`,!1));return i}function ce(e,t,n,r){return e?`${t}${oe(n)} is not a supported Convex type (present at path ${e} in original object ${oe(r)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`:`${t}${oe(n)} is not a supported Convex type.`}function le(e,t,n){if(e===void 0)return{$undefined:null};if(t===void 0)throw Error(`Programming error. Current value is ${oe(e)} but original value is undefined`);return se(e,t,n,!1)}function L(e){return se(e,e,``,!1)}var ue=Object.defineProperty,de=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fe=(e,t,n)=>de(e,typeof t==`symbol`?t:t+``,n),pe,me,he=Symbol.for(`ConvexError`),ge=class extends (me=Error,pe=he,me){constructor(e){super(typeof e==`string`?e:oe(e)),fe(this,`name`,`ConvexError`),fe(this,`data`),fe(this,pe,!0),this.data=e}},_e=`1.40.0`,ve=Object.defineProperty,ye=(e,t,n)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,be=(e,t,n)=>ye(e,typeof t==`symbol`?t:t+``,n),xe=`color:rgb(0, 145, 255)`;function Se(e){switch(e){case`query`:return`Q`;case`mutation`:return`M`;case`action`:return`A`;case`any`:return`?`}}var Ce=class{constructor(e){be(this,`_onLogLineFuncs`),be(this,`_verbose`),this._onLogLineFuncs={},this._verbose=e.verbose}addLogLineListener(e){let t=Math.random().toString(36).substring(2,15);for(let e=0;e<10&&this._onLogLineFuncs[t]!==void 0;e++)t=Math.random().toString(36).substring(2,15);return this._onLogLineFuncs[t]=e,()=>{delete this._onLogLineFuncs[t]}}logVerbose(...e){if(this._verbose)for(let t of Object.values(this._onLogLineFuncs))t(`debug`,`${new Date().toISOString()}`,...e)}log(...e){for(let t of Object.values(this._onLogLineFuncs))t(`info`,...e)}warn(...e){for(let t of Object.values(this._onLogLineFuncs))t(`warn`,...e)}error(...e){for(let t of Object.values(this._onLogLineFuncs))t(`error`,...e)}};function R(e){let t=new Ce(e);return t.addLogLineListener((e,...t)=>{switch(e){case`debug`:console.debug(...t);break;case`info`:console.log(...t);break;case`warn`:console.warn(...t);break;case`error`:console.error(...t);break;default:console.log(...t)}}),t}function we(e){return new Ce(e)}function Te(e,t,n,r,i){let a=Se(n);if(typeof i==`object`&&(i=`ConvexError ${JSON.stringify(i.errorData,null,2)}`),t===`info`){let t=i.match(/^\[.*?\] /);if(t===null){e.error(`[CONVEX ${a}(${r})] Could not parse console.log`);return}let n=i.slice(1,t[0].length-2),o=i.slice(t[0].length);e.log(`%c[CONVEX ${a}(${r})] [${n}]`,xe,o)}else e.error(`[CONVEX ${a}(${r})] ${i}`)}function Ee(e,t){let n=`[CONVEX FATAL ERROR] ${t}`;return e.error(n),Error(n)}function De(e,t,n){return`[CONVEX ${Se(e)}(${t})] ${n.errorMessage}
  Called by client`}function Oe(e,t){return t.data=e.errorData,t}function ke(e){let t=e.split(`:`),n,r;return t.length===1?(n=t[0],r=`default`):(n=t.slice(0,t.length-1).join(`:`),r=t[t.length-1]),n.endsWith(`.js`)&&(n=n.slice(0,-3)),`${n}:${r}`}function Ae(e,t){return JSON.stringify({udfPath:ke(e),args:L(t)})}function je(e,t,n){let{initialNumItems:r,id:i}=n;return JSON.stringify({type:`paginated`,udfPath:ke(e),args:L(t),options:L({initialNumItems:r,id:i})})}var Me=Object.defineProperty,Ne=(e,t,n)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pe=(e,t,n)=>Ne(e,typeof t==`symbol`?t:t+``,n),Fe=class{constructor(){Pe(this,`nextQueryId`),Pe(this,`querySetVersion`),Pe(this,`querySet`),Pe(this,`queryIdToToken`),Pe(this,`identityVersion`),Pe(this,`auth`),Pe(this,`outstandingQueriesOlderThanRestart`),Pe(this,`outstandingAuthOlderThanRestart`),Pe(this,`paused`),Pe(this,`pendingQuerySetModifications`),this.nextQueryId=0,this.querySetVersion=0,this.identityVersion=0,this.querySet=new Map,this.queryIdToToken=new Map,this.outstandingQueriesOlderThanRestart=new Set,this.outstandingAuthOlderThanRestart=!1,this.paused=!1,this.pendingQuerySetModifications=new Map}hasSyncedPastLastReconnect(){return this.outstandingQueriesOlderThanRestart.size===0&&!this.outstandingAuthOlderThanRestart}markAuthCompletion(){this.outstandingAuthOlderThanRestart=!1}subscribe(e,t,n,r){let i=ke(e),a=Ae(i,t),o=this.querySet.get(a);if(o!==void 0)return o.numSubscribers+=1,{queryToken:a,modification:null,unsubscribe:()=>this.removeSubscriber(a)};{let e=this.nextQueryId++,o={id:e,canonicalizedUdfPath:i,args:t,numSubscribers:1,journal:n,componentPath:r};this.querySet.set(a,o),this.queryIdToToken.set(e,a);let s=this.querySetVersion,c=this.querySetVersion+1,l={type:`Add`,queryId:e,udfPath:i,args:[L(t)],journal:n,componentPath:r};return this.paused?this.pendingQuerySetModifications.set(e,l):this.querySetVersion=c,{queryToken:a,modification:{type:`ModifyQuerySet`,baseVersion:s,newVersion:c,modifications:[l]},unsubscribe:()=>this.removeSubscriber(a)}}}transition(e){for(let t of e.modifications)switch(t.type){case`QueryUpdated`:case`QueryFailed`:{this.outstandingQueriesOlderThanRestart.delete(t.queryId);let e=t.journal;if(e!==void 0){let n=this.queryIdToToken.get(t.queryId);n!==void 0&&(this.querySet.get(n).journal=e)}break}case`QueryRemoved`:this.outstandingQueriesOlderThanRestart.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}}queryId(e,t){let n=Ae(ke(e),t),r=this.querySet.get(n);return r===void 0?null:r.id}isCurrentOrNewerAuthVersion(e){return e>=this.identityVersion}getAuth(){return this.auth}setAuth(e){this.auth={tokenType:`User`,value:e};let t=this.identityVersion;return this.paused||(this.identityVersion=t+1),{type:`Authenticate`,baseVersion:t,...this.auth}}setAdminAuth(e,t){let n={tokenType:`Admin`,value:e,impersonating:t};this.auth=n;let r=this.identityVersion;return this.paused||(this.identityVersion=r+1),{type:`Authenticate`,baseVersion:r,...n}}clearAuth(){this.auth=void 0,this.markAuthCompletion();let e=this.identityVersion;return this.paused||(this.identityVersion=e+1),{type:`Authenticate`,tokenType:`None`,baseVersion:e}}hasAuth(){return!!this.auth}isNewAuth(e){return this.auth?.value!==e}queryPath(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).canonicalizedUdfPath:null}queryArgs(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).args:null}queryToken(e){return this.queryIdToToken.get(e)??null}queryJournal(e){return this.querySet.get(e)?.journal}restart(){this.unpause(),this.outstandingQueriesOlderThanRestart.clear();let e=[];for(let t of this.querySet.values()){let n={type:`Add`,queryId:t.id,udfPath:t.canonicalizedUdfPath,args:[L(t.args)],journal:t.journal,componentPath:t.componentPath};e.push(n),this.outstandingQueriesOlderThanRestart.add(t.id)}this.querySetVersion=1;let t={type:`ModifyQuerySet`,baseVersion:0,newVersion:1,modifications:e};if(!this.auth)return this.identityVersion=0,[t,void 0];this.outstandingAuthOlderThanRestart=!0;let n={type:`Authenticate`,baseVersion:0,...this.auth};return this.identityVersion=1,[t,n]}pause(){this.paused=!0}resume(){let e=this.pendingQuerySetModifications.size>0?{type:`ModifyQuerySet`,baseVersion:this.querySetVersion,newVersion:++this.querySetVersion,modifications:Array.from(this.pendingQuerySetModifications.values())}:void 0,t=this.auth===void 0?void 0:{type:`Authenticate`,baseVersion:this.identityVersion++,...this.auth};return this.unpause(),[e,t]}unpause(){this.paused=!1,this.pendingQuerySetModifications.clear()}removeSubscriber(e){let t=this.querySet.get(e);if(t.numSubscribers>1)return--t.numSubscribers,null;{this.querySet.delete(e),this.queryIdToToken.delete(t.id),this.outstandingQueriesOlderThanRestart.delete(t.id);let n=this.querySetVersion,r=this.querySetVersion+1,i={type:`Remove`,queryId:t.id};return this.paused?this.pendingQuerySetModifications.has(t.id)?this.pendingQuerySetModifications.delete(t.id):this.pendingQuerySetModifications.set(t.id,i):this.querySetVersion=r,{type:`ModifyQuerySet`,baseVersion:n,newVersion:r,modifications:[i]}}}},Ie=Object.defineProperty,Le=(e,t,n)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Re=(e,t,n)=>Le(e,typeof t==`symbol`?t:t+``,n),ze=class{constructor(e,t){this.logger=e,this.markConnectionStateDirty=t,Re(this,`inflightRequests`),Re(this,`requestsOlderThanRestart`),Re(this,`inflightMutationsCount`,0),Re(this,`inflightActionsCount`,0),this.inflightRequests=new Map,this.requestsOlderThanRestart=new Set}request(e,t){let n=new Promise(n=>{let r=t?`Requested`:`NotSent`;this.inflightRequests.set(e.requestId,{message:e,status:{status:r,requestedAt:new Date,onResult:n}}),e.type===`Mutation`?this.inflightMutationsCount++:e.type===`Action`&&this.inflightActionsCount++});return this.markConnectionStateDirty(),n}onResponse(e){let t=this.inflightRequests.get(e.requestId);if(t===void 0||t.status.status===`Completed`)return null;let n=t.message.type===`Mutation`?`mutation`:`action`,r=t.message.udfPath;for(let t of e.logLines)Te(this.logger,`info`,n,r,t);let i=t.status,a,o;if(e.success)a={success:!0,logLines:e.logLines,value:I(e.result)},o=()=>i.onResult(a);else{let t=e.result,{errorData:s}=e;Te(this.logger,`error`,n,r,t),a={success:!1,errorMessage:t,errorData:s===void 0?void 0:I(s),logLines:e.logLines},o=()=>i.onResult(a)}return e.type===`ActionResponse`||!e.success?(o(),this.inflightRequests.delete(e.requestId),this.requestsOlderThanRestart.delete(e.requestId),t.message.type===`Action`?this.inflightActionsCount--:t.message.type===`Mutation`&&this.inflightMutationsCount--,this.markConnectionStateDirty(),{requestId:e.requestId,result:a}):(t.status={status:`Completed`,result:a,ts:e.ts,onResolve:o},null)}removeCompleted(e){let t=new Map;for(let[n,r]of this.inflightRequests.entries()){let i=r.status;i.status===`Completed`&&i.ts.lessThanOrEqual(e)&&(i.onResolve(),t.set(n,i.result),r.message.type===`Mutation`?this.inflightMutationsCount--:r.message.type===`Action`&&this.inflightActionsCount--,this.inflightRequests.delete(n),this.requestsOlderThanRestart.delete(n))}return t.size>0&&this.markConnectionStateDirty(),t}restart(){this.requestsOlderThanRestart=new Set(this.inflightRequests.keys());let e=[];for(let[t,n]of this.inflightRequests){if(n.status.status===`NotSent`){n.status.status=`Requested`,e.push(n.message);continue}if(n.message.type===`Mutation`)e.push(n.message);else if(n.message.type===`Action`){if(this.inflightRequests.delete(t),this.requestsOlderThanRestart.delete(t),this.inflightActionsCount--,n.status.status===`Completed`)throw Error(`Action should never be in 'Completed' state`);n.status.onResult({success:!1,errorMessage:`Connection lost while action was in flight`,logLines:[]})}}return this.markConnectionStateDirty(),e}resume(){let e=[];for(let[,t]of this.inflightRequests)if(t.status.status===`NotSent`){t.status.status=`Requested`,e.push(t.message);continue}return e}hasIncompleteRequests(){for(let e of this.inflightRequests.values())if(e.status.status===`Requested`)return!0;return!1}hasInflightRequests(){return this.inflightRequests.size>0}hasSyncedPastLastReconnect(){return this.requestsOlderThanRestart.size===0}timeOfOldestInflightRequest(){if(this.inflightRequests.size===0)return null;let e=Date.now();for(let t of this.inflightRequests.values())t.status.status!==`Completed`&&t.status.requestedAt.getTime()<e&&(e=t.status.requestedAt.getTime());return new Date(e)}inflightMutations(){return this.inflightMutationsCount}inflightActions(){return this.inflightActionsCount}},Be=Symbol.for(`functionName`),Ve=Symbol.for(`toReferencePath`);function He(e){return e[Ve]??null}function Ue(e){return e.startsWith(`function://`)}function We(e){let t;if(typeof e==`string`)t=Ue(e)?{functionHandle:e}:{name:e};else if(e[Be])t={name:e[Be]};else{let n=He(e);if(!n)throw Error(`${e} is not a functionReference`);t={reference:n}}return t}function Ge(e){let t=We(e);if(t.name===void 0)throw t.functionHandle===void 0?t.reference===void 0?Error(`Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(t)}`):Error(`Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${t.reference}`):Error(`Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${t.functionHandle}`);if(typeof e==`string`)return e;let n=e[Be];if(!n)throw Error(`${e} is not a functionReference`);return n}function Ke(e){return{[Be]:e}}function qe(e=[]){return new Proxy({},{get(t,n){if(typeof n==`string`)return qe([...e,n]);if(n===Be){if(e.length<2){let t=[`api`,...e].join(`.`);throw Error(`API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${t}\``)}let t=e.slice(0,-1).join(`/`),n=e[e.length-1];return n==="default"?t:t+`:`+n}else if(n===Symbol.toStringTag)return`FunctionReference`;else return}})}var Je=qe(),Ye=Object.defineProperty,Xe=(e,t,n)=>t in e?Ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ze=(e,t,n)=>Xe(e,typeof t==`symbol`?t:t+``,n),Qe=class e{constructor(e){Ze(this,`queryResults`),Ze(this,`modifiedQueries`),this.queryResults=e,this.modifiedQueries=[]}getQuery(t,...n){let r=C(n[0]),i=Ge(t),a=this.queryResults.get(Ae(i,r));if(a!==void 0)return e.queryValue(a.result)}getAllQueries(t){let n=[],r=Ge(t);for(let t of this.queryResults.values())t.udfPath===ke(r)&&n.push({args:t.args,value:e.queryValue(t.result)});return n}setQuery(e,t,n){let r=C(t),i=Ge(e),a=Ae(i,r),o;o=n===void 0?void 0:{success:!0,value:n,logLines:[]};let s={udfPath:i,args:r,result:o};this.queryResults.set(a,s),this.modifiedQueries.push(a)}static queryValue(e){if(e!==void 0&&e.success)return e.value}},$e=class{constructor(){Ze(this,`queryResults`),Ze(this,`optimisticUpdates`),this.queryResults=new Map,this.optimisticUpdates=[]}ingestQueryResultsFromServer(e,t){this.optimisticUpdates=this.optimisticUpdates.filter(e=>!t.has(e.mutationId));let n=this.queryResults;this.queryResults=new Map(e);let r=new Qe(this.queryResults);for(let e of this.optimisticUpdates)e.update(r);let i=[];for(let[e,t]of this.queryResults){let r=n.get(e);(r===void 0||r.result!==t.result)&&i.push(e)}return i}applyOptimisticUpdate(e,t){this.optimisticUpdates.push({update:e,mutationId:t});let n=new Qe(this.queryResults);return e(n),n.modifiedQueries}rawQueryResult(e){let t=this.queryResults.get(e);if(t!==void 0)return t.result}queryResult(e){let t=this.queryResults.get(e);if(t===void 0)return;let n=t.result;if(n!==void 0){if(n.success)return n.value;throw n.errorData===void 0?Error(De(`query`,t.udfPath,n)):Oe(n,new ge(De(`query`,t.udfPath,n)))}}hasQueryResult(e){return this.queryResults.get(e)!==void 0}queryLogs(e){return this.queryResults.get(e)?.result?.logLines}},et=Object.defineProperty,tt=(e,t,n)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nt=(e,t,n)=>tt(e,typeof t==`symbol`?t:t+``,n),rt=class e{constructor(e,t){nt(this,`low`),nt(this,`high`),nt(this,`__isUnsignedLong__`),this.low=e|0,this.high=t|0,this.__isUnsignedLong__=!0}static isLong(e){return(e&&e.__isUnsignedLong__)===!0}static fromBytesLE(t){return new e(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24)}toBytesLE(){let e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]}static fromNumber(t){return isNaN(t)||t<0?it:t>=st?ct:new e(t%ot|0,t/ot|0)}toString(){return(BigInt(this.high)*BigInt(ot)+BigInt(this.low)).toString()}equals(t){return e.isLong(t)||(t=e.fromValue(t)),this.high>>>31==1&&t.high>>>31==1?!1:this.high===t.high&&this.low===t.low}notEquals(e){return!this.equals(e)}comp(t){return e.isLong(t)||(t=e.fromValue(t)),this.equals(t)?0:t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1}lessThanOrEqual(e){return this.comp(e)<=0}static fromValue(t){return typeof t==`number`?e.fromNumber(t):new e(t.low,t.high)}},it=new rt(0,0),at=65536,ot=at*at,st=ot*ot,ct=new rt(-1,-1),lt=Object.defineProperty,ut=(e,t,n)=>t in e?lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dt=(e,t,n)=>ut(e,typeof t==`symbol`?t:t+``,n),ft=class{constructor(e,t){dt(this,`version`),dt(this,`remoteQuerySet`),dt(this,`queryPath`),dt(this,`logger`),this.version={querySet:0,ts:rt.fromNumber(0),identity:0},this.remoteQuerySet=new Map,this.queryPath=e,this.logger=t}transition(e){let t=e.startVersion;if(this.version.querySet!==t.querySet||this.version.ts.notEquals(t.ts)||this.version.identity!==t.identity)throw Error(`Invalid start version: ${t.ts.toString()}:${t.querySet}:${t.identity}, transitioning from ${this.version.ts.toString()}:${this.version.querySet}:${this.version.identity}`);for(let t of e.modifications)switch(t.type){case`QueryUpdated`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)Te(this.logger,`info`,`query`,e,n);let n=I(t.value??null);this.remoteQuerySet.set(t.queryId,{success:!0,value:n,logLines:t.logLines});break}case`QueryFailed`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)Te(this.logger,`info`,`query`,e,n);let{errorData:n}=t;this.remoteQuerySet.set(t.queryId,{success:!1,errorMessage:t.errorMessage,errorData:n===void 0?void 0:I(n),logLines:t.logLines});break}case`QueryRemoved`:this.remoteQuerySet.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}this.version=e.endVersion}remoteQueryResults(){return this.remoteQuerySet}timestamp(){return this.version.ts}};function pt(e){let t=y(e);return rt.fromBytesLE(Array.from(t))}function mt(e){return S(new Uint8Array(e.toBytesLE()))}function ht(e){switch(e.type){case`FatalError`:case`AuthError`:case`ActionResponse`:case`TransitionChunk`:case`Ping`:return{...e};case`MutationResponse`:return e.success?{...e,ts:pt(e.ts)}:{...e};case`Transition`:return{...e,startVersion:{...e.startVersion,ts:pt(e.startVersion.ts)},endVersion:{...e.endVersion,ts:pt(e.endVersion.ts)}};default:}}function gt(e){switch(e.type){case`Authenticate`:case`ModifyQuerySet`:case`Mutation`:case`Action`:case`Event`:return{...e};case`Connect`:return e.maxObservedTimestamp===void 0?{...e,maxObservedTimestamp:void 0}:{...e,maxObservedTimestamp:mt(e.maxObservedTimestamp)};default:}}var _t=Object.defineProperty,vt=(e,t,n)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t,n)=>vt(e,typeof t==`symbol`?t:t+``,n),yt=1e3,bt=1001,xt=1005,St=4040,Ct;function wt(){return Ct===void 0&&(Ct=Date.now()),typeof performance>`u`||!performance.now?Date.now():Math.round(Ct+performance.now())}function Tt(){return`t=${Math.round((wt()-Ct)/100)/10}s`}var Et={InternalServerError:{timeout:1e3},SubscriptionsWorkerFullError:{timeout:3e3},TooManyConcurrentRequests:{timeout:3e3},CommitterFullError:{timeout:3e3},AwsTooManyRequestsException:{timeout:3e3},ExecuteFullError:{timeout:3e3},SystemTimeoutError:{timeout:3e3},ExpiredInQueue:{timeout:3e3},VectorIndexesUnavailable:{timeout:1e3},SearchIndexesUnavailable:{timeout:1e3},TableSummariesUnavailable:{timeout:1e3},VectorIndexTooLarge:{timeout:3e3},SearchIndexTooLarge:{timeout:3e3},TooManyWritesInTimePeriod:{timeout:3e3}};function Dt(e){if(e===void 0)return`Unknown`;for(let t of Object.keys(Et))if(e.startsWith(t))return t;return`Unknown`}var Ot=class{constructor(e,t,n,r,i,a){this.markConnectionStateDirty=i,this.debug=a,z(this,`socket`),z(this,`connectionCount`),z(this,`_hasEverConnected`,!1),z(this,`lastCloseReason`),z(this,`transitionChunkBuffer`,null),z(this,`defaultInitialBackoff`),z(this,`maxBackoff`),z(this,`retries`),z(this,`serverInactivityThreshold`),z(this,`reconnectDueToServerInactivityTimeout`),z(this,`scheduledReconnect`,null),z(this,`networkOnlineHandler`,null),z(this,`pendingNetworkRecoveryInfo`,null),z(this,`uri`),z(this,`onOpen`),z(this,`onResume`),z(this,`onMessage`),z(this,`webSocketConstructor`),z(this,`logger`),z(this,`onServerDisconnectError`),this.webSocketConstructor=n,this.socket={state:`disconnected`},this.connectionCount=0,this.lastCloseReason=`InitialConnect`,this.defaultInitialBackoff=1e3,this.maxBackoff=16e3,this.retries=0,this.serverInactivityThreshold=6e4,this.reconnectDueToServerInactivityTimeout=null,this.uri=e,this.onOpen=t.onOpen,this.onResume=t.onResume,this.onMessage=t.onMessage,this.onServerDisconnectError=t.onServerDisconnectError,this.logger=r,this.setupNetworkListener(),this.connect()}setSocketState(e){this.socket=e,this._logVerbose(`socket state changed: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}`),this.markConnectionStateDirty()}setupNetworkListener(){typeof window>`u`||typeof window.addEventListener!=`function`||this.networkOnlineHandler===null&&(this.networkOnlineHandler=()=>{this._logVerbose(`network online event detected`),this.tryReconnectImmediately()},window.addEventListener(`online`,this.networkOnlineHandler),this._logVerbose(`network online event listener registered`))}cleanupNetworkListener(){this.networkOnlineHandler&&typeof window<`u`&&typeof window.removeEventListener==`function`&&(window.removeEventListener(`online`,this.networkOnlineHandler),this.networkOnlineHandler=null,this._logVerbose(`network online event listener removed`))}assembleTransition(e){if(e.partNumber<0||e.partNumber>=e.totalParts||e.totalParts===0||this.transitionChunkBuffer&&(this.transitionChunkBuffer.totalParts!==e.totalParts||this.transitionChunkBuffer.transitionId!==e.transitionId))throw this.transitionChunkBuffer=null,Error(`Invalid TransitionChunk`);if(this.transitionChunkBuffer===null&&(this.transitionChunkBuffer={chunks:[],totalParts:e.totalParts,transitionId:e.transitionId}),e.partNumber!==this.transitionChunkBuffer.chunks.length){let t=this.transitionChunkBuffer.chunks.length;throw this.transitionChunkBuffer=null,Error(`TransitionChunk received out of order: expected part ${t}, got ${e.partNumber}`)}if(this.transitionChunkBuffer.chunks.push(e.chunk),this.transitionChunkBuffer.chunks.length===e.totalParts){let e=this.transitionChunkBuffer.chunks.join(``);this.transitionChunkBuffer=null;let t=ht(JSON.parse(e));if(t.type!==`Transition`)throw Error(`Expected Transition, got ${t.type} after assembling chunks`);return t}return null}connect(){if(this.socket.state===`terminated`)return;if(this.socket.state!==`disconnected`&&this.socket.state!==`stopped`)throw Error(`Didn't start connection from disconnected state: `+this.socket.state);let e=new this.webSocketConstructor(this.uri);this._logVerbose(`constructed WebSocket`),this.setSocketState({state:`connecting`,ws:e,paused:`no`}),this.resetServerInactivityTimeout(),e.onopen=()=>{if(this.logger.logVerbose(`begin ws.onopen`),this.socket.state!==`connecting`)throw Error(`onopen called with socket not in connecting state`);if(this.setSocketState({state:`ready`,ws:e,paused:this.socket.paused===`yes`?`uninitialized`:`no`}),this.resetServerInactivityTimeout(),this.socket.paused===`no`&&(this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:wt()})),this.lastCloseReason!==`InitialConnect`&&(this.lastCloseReason?this.logger.log(`WebSocket reconnected at`,Tt(),`after disconnect due to`,this.lastCloseReason):this.logger.log(`WebSocket reconnected at`,Tt())),this.connectionCount+=1,this.lastCloseReason=null,this.pendingNetworkRecoveryInfo!==null){let{timeSavedMs:e}=this.pendingNetworkRecoveryInfo;this.pendingNetworkRecoveryInfo=null,this.sendMessage({type:`Event`,eventType:`NetworkRecoveryReconnect`,event:{timeSavedMs:e}}),this.logger.log(`Network recovery reconnect saved ~${Math.round(e/1e3)}s of waiting`)}},e.onerror=e=>{this.transitionChunkBuffer=null;let t=e.message;t&&this.logger.log(`WebSocket error message: ${t}`)},e.onmessage=e=>{this.resetServerInactivityTimeout();let t=e.data.length,n=ht(JSON.parse(e.data));if(this._logVerbose(`received ws message with type ${n.type}`),n.type!==`Ping`){if(n.type===`TransitionChunk`){let e=this.assembleTransition(n);if(!e)return;n=e,this._logVerbose(`assembled full ws message of type ${n.type}`)}this.transitionChunkBuffer!==null&&(this.transitionChunkBuffer=null,this.logger.log(`Received unexpected ${n.type} while buffering TransitionChunks`)),n.type===`Transition`&&this.reportLargeTransition({messageLength:t,transition:n}),this.onMessage(n).hasSyncedPastLastReconnect&&(this.retries=0,this.markConnectionStateDirty())}},e.onclose=e=>{if(this._logVerbose(`begin ws.onclose`),this.transitionChunkBuffer=null,this.lastCloseReason===null&&(this.lastCloseReason=e.reason||`closed with code ${e.code}`),e.code!==yt&&e.code!==bt&&e.code!==xt&&e.code!==St){let t=`WebSocket closed with code ${e.code}`;e.reason&&(t+=`: ${e.reason}`),this.logger.log(t),this.onServerDisconnectError&&e.reason&&this.onServerDisconnectError(t)}let t=Dt(e.reason);this.scheduleReconnect(t)}}socketState(){return this.socket.state}sendMessage(e){let t={type:e.type,...e.type===`Authenticate`&&e.tokenType===`User`?{value:`...${e.value.slice(-7)}`}:{}};if(this.socket.state===`ready`&&this.socket.paused===`no`){let n=gt(e),r=JSON.stringify(n),i=!1;try{this.socket.ws.send(r),i=!0}catch(e){this.logger.log(`Failed to send message on WebSocket, reconnecting: ${e}`),this.closeAndReconnect(`FailedToSendMessage`)}return this._logVerbose(`${i?`sent`:`failed to send`} message with type ${e.type}: ${JSON.stringify(t)}`),!0}return this._logVerbose(`message not sent (socket state: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}): ${JSON.stringify(t)}`),!1}resetServerInactivityTimeout(){this.socket.state!==`terminated`&&(this.reconnectDueToServerInactivityTimeout!==null&&(clearTimeout(this.reconnectDueToServerInactivityTimeout),this.reconnectDueToServerInactivityTimeout=null),this.reconnectDueToServerInactivityTimeout=setTimeout(()=>{this.closeAndReconnect(`InactiveServer`)},this.serverInactivityThreshold))}scheduleReconnect(e){this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.socket={state:`disconnected`};let t=this.nextBackoff(e);this.markConnectionStateDirty(),this.logger.log(`Attempting reconnect in ${Math.round(t)}ms`);let n=wt(),r=setTimeout(()=>{this.scheduledReconnect?.timeout===r&&(this.scheduledReconnect=null,this.connect())},t);this.scheduledReconnect={timeout:r,scheduledAt:n,backoffMs:t}}closeAndReconnect(e){switch(this._logVerbose(`begin closeAndReconnect with reason ${e}`),this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return;case`connecting`:case`ready`:this.lastCloseReason=e,this.close(),this.scheduleReconnect(`client`);return;default:this.socket}}close(){switch(this.transitionChunkBuffer=null,this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return Promise.resolve();case`connecting`:{let e=this.socket.ws;return e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)},new Promise(t=>{e.onclose=()=>{this._logVerbose(`Closed after connecting`),t()},e.onopen=()=>{this._logVerbose(`Opened after connecting`),e.close()}})}case`ready`:{this._logVerbose(`ws.close called`);let e=this.socket.ws;e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)};let t=new Promise(t=>{e.onclose=()=>{t()}});return e.close(),t}default:return this.socket,Promise.resolve()}}terminate(){switch(this.reconnectDueToServerInactivityTimeout&&clearTimeout(this.reconnectDueToServerInactivityTimeout),this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.cleanupNetworkListener(),this.socket.state){case`terminated`:case`stopped`:case`disconnected`:case`connecting`:case`ready`:{let e=this.close();return this.setSocketState({state:`terminated`}),e}default:throw this.socket,Error(`Invalid websocket state: ${this.socket.state}`)}}stop(){switch(this.socket.state){case`terminated`:return Promise.resolve();case`connecting`:case`stopped`:case`disconnected`:case`ready`:{this.cleanupNetworkListener();let e=this.close();return this.socket={state:`stopped`},e}default:return this.socket,Promise.resolve()}}tryRestart(){switch(this.socket.state){case`stopped`:break;case`terminated`:case`connecting`:case`ready`:case`disconnected`:this.logger.logVerbose(`Restart called without stopping first`);return;default:this.socket}this.setupNetworkListener(),this.connect()}pause(){switch(this.socket.state){case`disconnected`:case`stopped`:case`terminated`:return;case`connecting`:case`ready`:this.socket={...this.socket,paused:`yes`};return;default:this.socket;return}}tryReconnectImmediately(){if(this._logVerbose(`tryReconnectImmediately called`),this.socket.state!==`disconnected`){this._logVerbose(`tryReconnectImmediately called but socket state is ${this.socket.state}, no action taken`);return}let e=null;if(this.scheduledReconnect){let t=wt()-this.scheduledReconnect.scheduledAt;e=Math.max(0,this.scheduledReconnect.backoffMs-t),this._logVerbose(`would have waited ${Math.round(e)}ms more (backoff was ${Math.round(this.scheduledReconnect.backoffMs)}ms, elapsed ${Math.round(t)}ms)`),clearTimeout(this.scheduledReconnect.timeout),this.scheduledReconnect=null,this._logVerbose(`canceled scheduled reconnect`)}this.logger.log(`Network recovery detected, reconnecting immediately`),this.pendingNetworkRecoveryInfo=e===null?null:{timeSavedMs:e},this.connect()}resume(){switch(this.socket.state){case`connecting`:this.socket={...this.socket,paused:`no`};return;case`ready`:this.socket.paused===`uninitialized`?(this.socket={...this.socket,paused:`no`},this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:wt()})):this.socket.paused===`yes`&&(this.socket={...this.socket,paused:`no`},this.onResume());return;case`terminated`:case`stopped`:case`disconnected`:return;default:this.socket}this.connect()}connectionState(){return{isConnected:this.socket.state===`ready`,hasEverConnected:this._hasEverConnected,connectionCount:this.connectionCount,connectionRetries:this.retries}}_logVerbose(e){this.logger.logVerbose(e)}nextBackoff(e){let t=(e===`client`?100:e===`Unknown`?this.defaultInitialBackoff:Et[e].timeout)*2**this.retries;this.retries+=1;let n=Math.min(t,this.maxBackoff);return n+n*(Math.random()-.5)}reportLargeTransition({transition:e,messageLength:t}){if(e.clientClockSkew===void 0||e.serverTs===void 0)return;let n=wt()-e.clientClockSkew-e.serverTs/1e6,r=`${Math.round(n)}ms`,i=`${Math.round(t/1e4)/100}MB`,a=t/(n/1e3),o=`${Math.round(a/1e4)/100}MB per second`;this._logVerbose(`received ${i} transition in ${r} at ${o}`),t>2e7?this.logger.log(`received query results totaling more that 20MB (${i}) which will take a long time to download on slower connections`):n>2e4&&this.logger.log(`received query results totaling ${i} which took more than 20s to arrive (${r})`),this.debug&&this.sendMessage({type:`Event`,eventType:`ClientReceivedTransition`,event:{transitionTransitTime:n,messageLength:t}})}};function kt(){return At()}function At(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}var jt=class extends Error{};jt.prototype.name=`InvalidTokenError`;function Mt(e){return decodeURIComponent(atob(e).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n=`0`+n),`%`+n}))}function Nt(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`);switch(t.length%4){case 0:break;case 2:t+=`==`;break;case 3:t+=`=`;break;default:throw Error(`base64 string is not of the correct length`)}try{return Mt(t)}catch{return atob(t)}}function Pt(e,t){if(typeof e!=`string`)throw new jt(`Invalid token specified: must be a string`);t||={};let n=t.header===!0?0:1,r=e.split(`.`)[n];if(typeof r!=`string`)throw new jt(`Invalid token specified: missing part #${n+1}`);let i;try{i=Nt(r)}catch(e){throw new jt(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(i)}catch(e){throw new jt(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}var Ft=Object.defineProperty,It=(e,t,n)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lt=(e,t,n)=>It(e,typeof t==`symbol`?t:t+``,n),Rt=480*60*60*1e3,zt=2,Bt=class{constructor(e,t,n){Lt(this,`authState`,{state:`noAuth`}),Lt(this,`configVersion`,0),Lt(this,`syncState`),Lt(this,`authenticate`),Lt(this,`stopSocket`),Lt(this,`tryRestartSocket`),Lt(this,`pauseSocket`),Lt(this,`resumeSocket`),Lt(this,`clearAuth`),Lt(this,`logger`),Lt(this,`refreshTokenLeewaySeconds`),Lt(this,`lastRefreshChange`),Lt(this,`tokenConfirmationAttempts`,0),this.syncState=e,this.authenticate=t.authenticate,this.stopSocket=t.stopSocket,this.tryRestartSocket=t.tryRestartSocket,this.pauseSocket=t.pauseSocket,this.resumeSocket=t.resumeSocket,this.clearAuth=t.clearAuth,this.logger=n.logger,this.refreshTokenLeewaySeconds=n.refreshTokenLeewaySeconds,this.lastRefreshChange=!1}notifyRefreshChange(e){this.authState.state!==`noAuth`&&this.authState.state!==`initialRefetch`&&this.authState.config.onRefreshChange&&this.lastRefreshChange!==e&&(this.lastRefreshChange=e,this.authState.config.onRefreshChange(e))}async setConfig(e,t,n){this.resetAuthState(),this._logVerbose(`pausing WS for auth token fetch`),this.pauseSocket();let r=await this.fetchTokenAndGuardAgainstRace(e,{forceRefreshToken:!1});if(r.isFromOutdatedConfig)return;let i={fetchToken:e,onAuthChange:t,onRefreshChange:n};r.value?(this.setAuthState({state:`waitingForServerConfirmationOfCachedToken`,config:i,hasRetried:!1}),this.authenticate(r.value)):(this.setAuthState({state:`initialRefetch`,config:i}),await this.refetchToken()),this._logVerbose(`resuming WS after auth token fetch`),this.resumeSocket()}onTransition(e){if(this.syncState.isCurrentOrNewerAuthVersion(e.endVersion.identity)&&!(e.endVersion.identity<=e.startVersion.identity)){if(this._logVerbose(`auth state is ${this.authState.state} when handling transition`),this.syncState.markAuthCompletion(),this.authState.state===`waitingForServerConfirmationOfCachedToken`){this._logVerbose(`server confirmed auth token is valid`),this.refetchToken(),this.authState.config.onAuthChange(!0);return}this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this._logVerbose(`server confirmed new auth token is valid`),this.notifyRefreshChange(!1),this.scheduleTokenRefetch(this.authState.token),this.tokenConfirmationAttempts=0,this.authState.hadAuth||this.authState.config.onAuthChange(!0))}}onAuthError(e){if(e.authUpdateAttempted===!1&&(this.authState.state===`waitingForServerConfirmationOfFreshToken`||this.authState.state===`waitingForServerConfirmationOfCachedToken`)){this._logVerbose(`ignoring non-auth token expired error`);return}let{baseVersion:t}=e;if(!this.syncState.isCurrentOrNewerAuthVersion(t+1)){this._logVerbose(`ignoring auth error for previous auth attempt`);return}this.tryToReauthenticate(e)}async tryToReauthenticate(e){if(this._logVerbose(`attempting to reauthenticate: ${e.error}`),this.authState.state===`noAuth`||this.authState.state===`waitingForServerConfirmationOfFreshToken`&&this.tokenConfirmationAttempts>=zt){this.logger.error(`Failed to authenticate: "${e.error}", check your server auth config`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.authState.state!==`noAuth`&&this.setAndReportAuthFailed(this.authState.config.onAuthChange);return}if(this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this.tokenConfirmationAttempts++,this._logVerbose(`retrying reauthentication, ${zt-this.tokenConfirmationAttempts} attempts remaining`)),this.notifyRefreshChange(!0),await this.stopSocket(),this.authState.state===`noAuth`)return;let t=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});t.isFromOutdatedConfig||(t.value&&this.syncState.isNewAuth(t.value)?(this.authenticate(t.value),this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,config:this.authState.config,token:t.value,hadAuth:this.authState.state===`notRefetching`||this.authState.state===`waitingForScheduledRefetch`})):(this._logVerbose(`reauthentication failed, could not fetch a new token`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this.tryRestartSocket())}async refetchToken(){if(this.authState.state===`noAuth`)return;this._logVerbose(`refetching auth token`);let e=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});e.isFromOutdatedConfig||(e.value?this.syncState.isNewAuth(e.value)?(this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,hadAuth:this.syncState.hasAuth(),token:e.value,config:this.authState.config}),this.authenticate(e.value)):this.setAuthState({state:`notRefetching`,config:this.authState.config}):(this._logVerbose(`refetching token failed`),this.syncState.hasAuth()&&this.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this._logVerbose(`restarting WS after auth token fetch (if currently stopped)`),this.tryRestartSocket())}scheduleTokenRefetch(e){if(this.authState.state===`noAuth`)return;let t=this.decodeToken(e);if(!t){this.logger.error(`Auth token is not a valid JWT, cannot refetch the token`);return}let{iat:n,exp:r}=t;if(!n||!r){this.logger.error(`Auth token does not have required fields, cannot refetch the token`);return}let i=r-n;if(i<=2){this.logger.error(`Auth token does not live long enough, cannot refetch the token`);return}let a=Math.min(Rt,(i-this.refreshTokenLeewaySeconds)*1e3);a<=0&&(this.logger.warn(`Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${i}s`),a=0);let o=setTimeout(()=>{this._logVerbose(`running scheduled token refetch`),this.refetchToken()},a);this.setAuthState({state:`waitingForScheduledRefetch`,refetchTokenTimeoutId:o,config:this.authState.config}),this._logVerbose(`scheduled preemptive auth token refetching in ${a}ms`)}async fetchTokenAndGuardAgainstRace(e,t){let n=++this.configVersion;this._logVerbose(`fetching token with config version ${n}`);let r=await e(t);return this.configVersion===n?{isFromOutdatedConfig:!1,value:r}:(this._logVerbose(`stale config version, expected ${n}, got ${this.configVersion}`),{isFromOutdatedConfig:!0})}stop(){this.resetAuthState(),this.configVersion++,this._logVerbose(`config version bumped to ${this.configVersion}`)}setAndReportAuthFailed(e){e(!1),this.resetAuthState()}resetAuthState(){this.notifyRefreshChange(!1),this.setAuthState({state:`noAuth`})}setAuthState(e){let t=e.state===`waitingForServerConfirmationOfFreshToken`?{hadAuth:e.hadAuth,state:e.state,token:`...${e.token.slice(-7)}`}:{state:e.state};switch(this._logVerbose(`setting auth state to ${JSON.stringify(t)}`),e.state){case`waitingForScheduledRefetch`:case`notRefetching`:case`noAuth`:this.tokenConfirmationAttempts=0;break;case`waitingForServerConfirmationOfFreshToken`:case`waitingForServerConfirmationOfCachedToken`:case`initialRefetch`:break;default:}this.authState.state===`waitingForScheduledRefetch`&&clearTimeout(this.authState.refetchTokenTimeoutId),this.authState=e}decodeToken(e){try{return Pt(e)}catch(e){return this._logVerbose(`Error decoding token: ${e instanceof Error?e.message:`Unknown error`}`),null}}_logVerbose(e){this.logger.logVerbose(`${e} [v${this.configVersion}]`)}},Vt=[`convexClientConstructed`,`convexWebSocketOpen`,`convexFirstMessageReceived`];function Ht(e,t){let n={sessionId:t};typeof performance>`u`||!performance.mark||performance.mark(e,{detail:n})}function Ut(e){let t=e.name.slice(6);return t=t.charAt(0).toLowerCase()+t.slice(1),{name:t,startTime:e.startTime}}function Wt(e){if(typeof performance>`u`||!performance.getEntriesByName)return[];let t=[];for(let n of Vt){let r=performance.getEntriesByName(n).filter(e=>e.entryType===`mark`).filter(t=>t.detail.sessionId===e);t.push(...r)}return t.map(Ut)}var Gt=Object.defineProperty,Kt=(e,t,n)=>t in e?Gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qt=(e,t,n)=>Kt(e,typeof t==`symbol`?t:t+``,n),Jt=class{constructor(e,t,n){if(qt(this,`address`),qt(this,`state`),qt(this,`requestManager`),qt(this,`webSocketManager`),qt(this,`authenticationManager`),qt(this,`remoteQuerySet`),qt(this,`optimisticQueryResults`),qt(this,`_transitionHandlerCounter`,0),qt(this,`_nextRequestId`),qt(this,`_onTransitionFns`,new Map),qt(this,`_sessionId`),qt(this,`firstMessageReceived`,!1),qt(this,`debug`),qt(this,`logger`),qt(this,`maxObservedTimestamp`),qt(this,`connectionStateSubscribers`,new Map),qt(this,`nextConnectionStateSubscriberId`,0),qt(this,`_lastPublishedConnectionState`),qt(this,`markConnectionStateDirty`,()=>{Promise.resolve().then(()=>{let e=this.connectionState();if(JSON.stringify(e)!==JSON.stringify(this._lastPublishedConnectionState)){this._lastPublishedConnectionState=e;for(let t of this.connectionStateSubscribers.values())t(e)}})}),qt(this,`mark`,e=>{this.debug&&Ht(e,this.sessionId)}),typeof e==`object`)throw Error(`Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly.`);n?.skipConvexDeploymentUrlCheck!==!0&&w(e),n={...n};let r=n.authRefreshTokenLeewaySeconds??10,i=n.webSocketConstructor;if(!i&&typeof WebSocket>`u`)throw Error(`No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient`);i||=WebSocket,this.debug=n.reportDebugInfoToConvex??!1,this.address=e,this.logger=n.logger===!1?we({verbose:n.verbose??!1}):n.logger!==!0&&n.logger?n.logger:R({verbose:n.verbose??!1});let a=e.search(`://`);if(a===-1)throw Error(`Provided address was not an absolute URL.`);let o=e.substring(a+3),s=e.substring(0,a),c;if(s===`http`)c=`ws`;else if(s===`https`)c=`wss`;else throw Error(`Unknown parent protocol ${s}`);let l=`${c}://${o}/api/${_e}/sync`;this.state=new Fe,this.remoteQuerySet=new ft(e=>this.state.queryPath(e),this.logger),this.requestManager=new ze(this.logger,this.markConnectionStateDirty);let u=()=>{this.webSocketManager.pause(),this.state.pause()};this.authenticationManager=new Bt(this.state,{authenticate:e=>{let t=this.state.setAuth(e);return this.webSocketManager.sendMessage(t),t.baseVersion},stopSocket:()=>this.webSocketManager.stop(),tryRestartSocket:()=>this.webSocketManager.tryRestart(),pauseSocket:u,resumeSocket:()=>this.webSocketManager.resume(),clearAuth:()=>{this.clearAuth()}},{logger:this.logger,refreshTokenLeewaySeconds:r}),this.optimisticQueryResults=new $e,this.addOnTransitionHandler(e=>{t(e.queries.map(e=>e.token))}),this._nextRequestId=0,this._sessionId=kt();let{unsavedChangesWarning:d}=n;if(typeof window>`u`||window.addEventListener===void 0){if(d===!0)throw Error(`unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options.`)}else d!==!1&&window.addEventListener(`beforeunload`,e=>{if(this.requestManager.hasIncompleteRequests()){e.preventDefault();let t=`Are you sure you want to leave? Your changes may not be saved.`;return(e||window.event).returnValue=t,t}});this.webSocketManager=new Ot(l,{onOpen:e=>{this.mark(`convexWebSocketOpen`),this.webSocketManager.sendMessage({...e,type:`Connect`,sessionId:this._sessionId,maxObservedTimestamp:this.maxObservedTimestamp}),this.remoteQuerySet=new ft(e=>this.state.queryPath(e),this.logger);let[t,n]=this.state.restart();n&&this.webSocketManager.sendMessage(n),this.webSocketManager.sendMessage(t);for(let e of this.requestManager.restart())this.webSocketManager.sendMessage(e)},onResume:()=>{let[e,t]=this.state.resume();t&&this.webSocketManager.sendMessage(t),e&&this.webSocketManager.sendMessage(e);for(let e of this.requestManager.resume())this.webSocketManager.sendMessage(e)},onMessage:e=>{switch(this.firstMessageReceived||(this.firstMessageReceived=!0,this.mark(`convexFirstMessageReceived`),this.reportMarks()),e.type){case`Transition`:{this.observedTimestamp(e.endVersion.ts),this.authenticationManager.onTransition(e),this.remoteQuerySet.transition(e),this.state.transition(e);let t=this.requestManager.removeCompleted(this.remoteQuerySet.timestamp());this.notifyOnQueryResultChanges(t);break}case`MutationResponse`:{e.success&&this.observedTimestamp(e.ts);let t=this.requestManager.onResponse(e);t!==null&&this.notifyOnQueryResultChanges(new Map([[t.requestId,t.result]]));break}case`ActionResponse`:this.requestManager.onResponse(e);break;case`AuthError`:this.authenticationManager.onAuthError(e);break;case`FatalError`:{let t=Ee(this.logger,e.error);throw this.webSocketManager.terminate(),t}default:}return{hasSyncedPastLastReconnect:this.hasSyncedPastLastReconnect()}},onServerDisconnectError:n.onServerDisconnectError},i,this.logger,this.markConnectionStateDirty,this.debug),this.mark(`convexClientConstructed`),n.expectAuth&&u()}hasSyncedPastLastReconnect(){return this.requestManager.hasSyncedPastLastReconnect()&&this.state.hasSyncedPastLastReconnect()}observedTimestamp(e){(this.maxObservedTimestamp===void 0||this.maxObservedTimestamp.lessThanOrEqual(e))&&(this.maxObservedTimestamp=e)}getMaxObservedTimestamp(){return this.maxObservedTimestamp}notifyOnQueryResultChanges(e){let t=this.remoteQuerySet.remoteQueryResults(),n=new Map;for(let[e,r]of t){let t=this.state.queryToken(e);if(t!==null){let i={result:r,udfPath:this.state.queryPath(e),args:this.state.queryArgs(e)};n.set(t,i)}}let r=this.optimisticQueryResults.ingestQueryResultsFromServer(n,new Set(e.keys()));this.handleTransition({queries:r.map(e=>({token:e,modification:{kind:`Updated`,result:this.optimisticQueryResults.rawQueryResult(e)}})),reflectedMutations:Array.from(e).map(([e,t])=>({requestId:e,result:t})),timestamp:this.remoteQuerySet.timestamp()})}handleTransition(e){for(let t of this._onTransitionFns.values())t(e)}addOnTransitionHandler(e){let t=this._transitionHandlerCounter++;return this._onTransitionFns.set(t,e),()=>this._onTransitionFns.delete(t)}getCurrentAuthClaims(){let e=this.state.getAuth(),t={};if(e&&e.tokenType===`User`)try{t=e?Pt(e.value):{}}catch{t={}}else return;return{token:e.value,decoded:t}}setAuth(e,t,n){this.authenticationManager.setConfig(e,t,n)}hasAuth(){return this.state.hasAuth()}setAdminAuth(e,t){let n=this.state.setAdminAuth(e,t);this.webSocketManager.sendMessage(n)}clearAuth(){let e=this.state.clearAuth();this.webSocketManager.sendMessage(e)}subscribe(e,t,n){let r=C(t),{modification:i,queryToken:a,unsubscribe:o}=this.state.subscribe(e,r,n?.journal,n?.componentPath);return i!==null&&this.webSocketManager.sendMessage(i),{queryToken:a,unsubscribe:()=>{let e=o();e&&this.webSocketManager.sendMessage(e)}}}localQueryResult(e,t){let n=Ae(e,C(t));return this.optimisticQueryResults.queryResult(n)}localQueryResultByToken(e){return this.optimisticQueryResults.queryResult(e)}hasLocalQueryResultByToken(e){return this.optimisticQueryResults.hasQueryResult(e)}localQueryLogs(e,t){let n=Ae(e,C(t));return this.optimisticQueryResults.queryLogs(n)}queryJournal(e,t){let n=Ae(e,C(t));return this.state.queryJournal(n)}connectionState(){let e=this.webSocketManager.connectionState();return{hasInflightRequests:this.requestManager.hasInflightRequests(),isWebSocketConnected:e.isConnected,hasEverConnected:e.hasEverConnected,connectionCount:e.connectionCount,connectionRetries:e.connectionRetries,timeOfOldestInflightRequest:this.requestManager.timeOfOldestInflightRequest(),inflightMutations:this.requestManager.inflightMutations(),inflightActions:this.requestManager.inflightActions()}}subscribeToConnectionState(e){let t=this.nextConnectionStateSubscriberId++;return this.connectionStateSubscribers.set(t,e),()=>{this.connectionStateSubscribers.delete(t)}}async mutation(e,t,n){let r=await this.mutationInternal(e,t,n);if(!r.success)throw r.errorData===void 0?Error(De(`mutation`,e,r)):Oe(r,new ge(De(`mutation`,e,r)));return r.value}async mutationInternal(e,t,n,r){let{mutationPromise:i}=this.enqueueMutation(e,t,n,r);return i}enqueueMutation(e,t,n,r){let i=C(t);this.tryReportLongDisconnect();let a=this.nextRequestId;if(this._nextRequestId++,n!==void 0){let e=n.optimisticUpdate;if(e!==void 0){let t=this.optimisticQueryResults.applyOptimisticUpdate(t=>{e(t,i)instanceof Promise&&this.logger.warn(`Optimistic update handler returned a Promise. Optimistic updates should be synchronous.`)},a).map(e=>{let t=this.localQueryResultByToken(e);return{token:e,modification:{kind:`Updated`,result:t===void 0?void 0:{success:!0,value:t,logLines:[]}}}});this.handleTransition({queries:t,reflectedMutations:[],timestamp:this.remoteQuerySet.timestamp()})}}let o={type:`Mutation`,requestId:a,udfPath:e,componentPath:r,args:[L(i)]},s=this.webSocketManager.sendMessage(o);return{requestId:a,mutationPromise:this.requestManager.request(o,s)}}async action(e,t){let n=await this.actionInternal(e,t);if(!n.success)throw n.errorData===void 0?Error(De(`action`,e,n)):Oe(n,new ge(De(`action`,e,n)));return n.value}async actionInternal(e,t,n){let r=C(t),i=this.nextRequestId;this._nextRequestId++,this.tryReportLongDisconnect();let a={type:`Action`,requestId:i,udfPath:e,componentPath:n,args:[L(r)]},o=this.webSocketManager.sendMessage(a);return this.requestManager.request(a,o)}async close(){return this.authenticationManager.stop(),this.webSocketManager.terminate()}get url(){return this.address}get nextRequestId(){return this._nextRequestId}get sessionId(){return this._sessionId}reportMarks(){if(this.debug){let e=Wt(this.sessionId);this.webSocketManager.sendMessage({type:`Event`,eventType:`ClientConnect`,event:e})}}tryReportLongDisconnect(){if(!this.debug)return;let e=this.connectionState().timeOfOldestInflightRequest;if(e===null||Date.now()-e.getTime()<=60*1e3)return;let t=`${this.address}/api/debug_event`;fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`,"Convex-Client":`npm-${_e}`},body:JSON.stringify({event:`LongWebsocketDisconnect`})}).then(e=>{e.ok||this.logger.warn(`Analytics request failed with response:`,e.body)}).catch(e=>{this.logger.warn(`Analytics response failed with error:`,e)})}};function Yt(e){if(typeof e!=`object`||!e||!Array.isArray(e.page)||typeof e.isDone!=`boolean`||typeof e.continueCursor!=`string`)throw Error(`Not a valid paginated query result: ${e?.toString()}`);return e}var Xt=Object.defineProperty,Zt=(e,t,n)=>t in e?Xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qt=(e,t,n)=>Zt(e,typeof t==`symbol`?t:t+``,n),$t=class{constructor(e,t){this.client=e,this.onTransition=t,Qt(this,`paginatedQuerySet`,new Map),Qt(this,`lastTransitionTs`),this.lastTransitionTs=rt.fromNumber(0),this.client.addOnTransitionHandler(e=>this.onBaseTransition(e))}subscribe(e,t,n){let r=ke(e),i=je(r,t,n),a=()=>this.removePaginatedQuerySubscriber(i),o=this.paginatedQuerySet.get(i);return o?(o.numSubscribers+=1,{paginatedQueryToken:i,unsubscribe:a}):(this.paginatedQuerySet.set(i,{token:i,canonicalizedUdfPath:r,args:t,numSubscribers:1,options:{initialNumItems:n.initialNumItems},nextPageKey:0,pageKeys:[],pageKeyToQuery:new Map,ongoingSplits:new Map,skip:!1,id:n.id}),this.addPageToPaginatedQuery(i,null,n.initialNumItems),{paginatedQueryToken:i,unsubscribe:a})}localQueryResult(e,t,n){let r=je(ke(e),t,n);return this.localQueryResultByToken(r)}localQueryResultByToken(e){let t=this.paginatedQuerySet.get(e);if(!t)return;let n=this.activePageQueryTokens(t);if(n.length===0)return{results:[],status:`LoadingFirstPage`,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)};let r=[],i=!1,a=!1;for(let e of n){let t=this.client.localQueryResultByToken(e);if(t===void 0){i=!0,a=!1;continue}let n=Yt(t);r=r.concat(n.page),a=!!n.isDone}let o;return o=i?r.length===0?`LoadingFirstPage`:`LoadingMore`:a?`Exhausted`:`CanLoadMore`,{results:r,status:o,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)}}onBaseTransition(e){let t=e.queries.map(e=>e.token),n=this.queriesContainingTokens(t),r=[];n.length>0&&(this.processPaginatedQuerySplits(n,e=>this.client.localQueryResultByToken(e)),r=n.map(e=>({token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}})));let i={...e,paginatedQueries:r};this.onTransition(i)}loadMoreOfPaginatedQuery(e,t){this.mustGetPaginatedQuery(e);let n=this.queryTokenForLastPageOfPaginatedQuery(e),r=this.client.localQueryResultByToken(n);if(!r)return!1;let i=Yt(r);if(i.isDone)return!1;this.addPageToPaginatedQuery(e,i.continueCursor,t);let a={timestamp:this.lastTransitionTs,reflectedMutations:[],queries:[],paginatedQueries:[{token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}}]};return this.onTransition(a),!0}queriesContainingTokens(e){if(e.length===0)return[];let t=[],n=new Set(e);for(let[e,r]of this.paginatedQuerySet)for(let i of this.allQueryTokens(r))if(n.has(i)){t.push(e);break}return t}processPaginatedQuerySplits(e,t){for(let n of e){let e=this.mustGetPaginatedQuery(n),{ongoingSplits:r,pageKeyToQuery:i,pageKeys:a}=e;for(let[n,[a,o]]of r)t(i.get(a).queryToken)!==void 0&&t(i.get(o).queryToken)!==void 0&&this.completePaginatedQuerySplit(e,n,a,o);for(let n of a){if(r.has(n))continue;let a=i.get(n).queryToken,o=t(a);if(!o)continue;let s=Yt(o);s.splitCursor&&(s.pageStatus===`SplitRecommended`||s.pageStatus===`SplitRequired`||s.page.length>e.options.initialNumItems*2)&&this.splitPaginatedQueryPage(e,n,s.splitCursor,s.continueCursor)}}}splitPaginatedQueryPage(e,t,n,r){let i=e.nextPageKey++,a=e.nextPageKey++,o={cursor:r,numItems:e.options.initialNumItems,id:e.id},s=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:null,endCursor:n}});e.pageKeyToQuery.set(i,s);let c=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:n,endCursor:r}});e.pageKeyToQuery.set(a,c),e.ongoingSplits.set(t,[i,a])}addPageToPaginatedQuery(e,t,n){let r=this.mustGetPaginatedQuery(e),i=r.nextPageKey++,a={cursor:t,numItems:n,id:r.id},o={...r.args,paginationOpts:a},s=this.client.subscribe(r.canonicalizedUdfPath,o);return r.pageKeys.push(i),r.pageKeyToQuery.set(i,s),s}removePaginatedQuerySubscriber(e){let t=this.paginatedQuerySet.get(e);if(t&&(--t.numSubscribers,!(t.numSubscribers>0))){for(let e of t.pageKeyToQuery.values())e.unsubscribe();this.paginatedQuerySet.delete(e)}}completePaginatedQuerySplit(e,t,n,r){let i=e.pageKeyToQuery.get(t);e.pageKeyToQuery.delete(t);let a=e.pageKeys.indexOf(t);e.pageKeys.splice(a,1,n,r),e.ongoingSplits.delete(t),i.unsubscribe()}activePageQueryTokens(e){return e.pageKeys.map(t=>e.pageKeyToQuery.get(t).queryToken)}allQueryTokens(e){return Array.from(e.pageKeyToQuery.values()).map(e=>e.queryToken)}queryTokenForLastPageOfPaginatedQuery(e){let t=this.mustGetPaginatedQuery(e),n=t.pageKeys[t.pageKeys.length-1];if(n===void 0)throw Error(`No pages for paginated query ${e}`);return t.pageKeyToQuery.get(n).queryToken}mustGetPaginatedQuery(e){let t=this.paginatedQuerySet.get(e);if(!t)throw Error(`paginated query no longer exists for token `+e);return t}},B=c(u(),1);function en({getCurrentValue:e,subscribe:t}){let[n,r]=(0,B.useState)(()=>({getCurrentValue:e,subscribe:t,value:e()})),i=n.value;return(n.getCurrentValue!==e||n.subscribe!==t)&&(i=e(),r({getCurrentValue:e,subscribe:t,value:i})),(0,B.useEffect)(()=>{let n=!1,i=()=>{n||r(n=>{if(n.getCurrentValue!==e||n.subscribe!==t)return n;let r=e();return n.value===r?n:{...n,value:r}})},a=t(i);return i(),()=>{n=!0,a()}},[e,t]),i}var tn=Object.defineProperty,nn=(e,t,n)=>t in e?tn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rn=(e,t,n)=>nn(e,typeof t==`symbol`?t:t+``,n),an=5e3;if(B.default===void 0)throw Error(`Required dependency 'react' not found`);function on(e,t,n){function r(r){return pn(r),t.mutation(e,r,{optimisticUpdate:n})}return r.withOptimisticUpdate=function(r){if(n!==void 0)throw Error(`Already specified optimistic update for mutation ${Ge(e)}`);return on(e,t,r)},r}var sn=class{constructor(e,t){if(rn(this,`address`),rn(this,`cachedSync`),rn(this,`cachedPaginatedQueryClient`),rn(this,`listeners`),rn(this,`options`),rn(this,`closed`,!1),rn(this,`_logger`),rn(this,`adminAuth`),rn(this,`fakeUserIdentity`),e===void 0)throw Error(`No address provided to ConvexReactClient.
If trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/
If running locally, make sure to run \`convex dev\` and ensure the .env.local file is populated.`);if(typeof e!=`string`)throw Error(`ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof e} instead.`);if(!e.includes(`://`))throw Error(`Provided address was not an absolute URL.`);this.address=e,this.listeners=new Map,this._logger=t?.logger===!1?we({verbose:t?.verbose??!1}):t?.logger!==!0&&t?.logger?t.logger:R({verbose:t?.verbose??!1}),this.options={...t,logger:this._logger}}get url(){return this.address}get sync(){if(this.closed)throw Error(`ConvexReactClient has already been closed.`);return this.cachedSync?this.cachedSync:(this.cachedSync=new Jt(this.address,()=>{},this.options),this.adminAuth&&this.cachedSync.setAdminAuth(this.adminAuth,this.fakeUserIdentity),this.cachedPaginatedQueryClient=new $t(this.cachedSync,e=>this.handleTransition(e)),this.cachedSync)}get paginatedQueryClient(){if(this.sync,this.cachedPaginatedQueryClient)return this.cachedPaginatedQueryClient;throw Error(`Should already be instantiated`)}setAuth(e,t,n){if(typeof e==`string`)throw Error(`Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication.`);this.sync.setAuth(e,t??(()=>{}),n)}clearAuth(){this.sync.clearAuth()}setAdminAuth(e,t){if(this.adminAuth=e,this.fakeUserIdentity=t,this.closed)throw Error(`ConvexReactClient has already been closed.`);this.cachedSync&&this.sync.setAdminAuth(e,t)}watchQuery(e,...t){let[n,r]=t,i=Ge(e);return{onUpdate:e=>{let{queryToken:t,unsubscribe:a}=this.sync.subscribe(i,n,r),o=this.listeners.get(t);return o===void 0?this.listeners.set(t,new Set([e])):o.add(e),()=>{if(this.closed)return;let n=this.listeners.get(t);n.delete(e),n.size===0&&this.listeners.delete(t),a()}},localQueryResult:()=>{if(this.cachedSync)return this.cachedSync.localQueryResult(i,n)},localQueryLogs:()=>{if(this.cachedSync)return this.cachedSync.localQueryLogs(i,n)},journal:()=>{if(this.cachedSync)return this.cachedSync.queryJournal(i,n)}}}prewarmQuery(e){let t=e.extendSubscriptionFor??an,n=this.watchQuery(e.query,e.args||{}).onUpdate(()=>{});setTimeout(n,t)}watchPaginatedQuery(e,t,n){let r=Ge(e);return{onUpdate:e=>{let{paginatedQueryToken:i,unsubscribe:a}=this.paginatedQueryClient.subscribe(r,t||{},n),o=this.listeners.get(i);return o===void 0?this.listeners.set(i,new Set([e])):o.add(e),()=>{if(this.closed)return;let t=this.listeners.get(i);t.delete(e),t.size===0&&this.listeners.delete(i),a()}},localQueryResult:()=>this.paginatedQueryClient.localQueryResult(r,t,n)}}mutation(e,...t){let[n,r]=t,i=Ge(e);return this.sync.mutation(i,n,r)}action(e,...t){let n=Ge(e);return this.sync.action(n,...t)}query(e,...t){let n=this.watchQuery(e,...t),r=n.localQueryResult();return r===void 0?new Promise((e,t)=>{let r=n.onUpdate(()=>{r();try{e(n.localQueryResult())}catch(e){t(e)}})}):Promise.resolve(r)}connectionState(){return this.sync.connectionState()}subscribeToConnectionState(e){return this.sync.subscribeToConnectionState(e)}get logger(){return this._logger}async close(){if(this.closed=!0,this.listeners=new Map,this.cachedPaginatedQueryClient&&=void 0,this.cachedSync){let e=this.cachedSync;this.cachedSync=void 0,await e.close()}}handleTransition(e){let t=e.queries.map(e=>e.token),n=e.paginatedQueries.map(e=>e.token);this.transition([...t,...n])}transition(e){for(let t of e){let e=this.listeners.get(t);if(e)for(let t of e)t()}}},cn=B.createContext(void 0);function ln(){return(0,B.useContext)(cn)}var un=({client:e,children:t})=>B.createElement(cn.Provider,{value:e},t);function dn(e,...t){let n=t[0]===`skip`,r=t[0]===`skip`?{}:C(t[0]),i=typeof e==`string`?Ke(e):e,a=Ge(i),o=vn((0,B.useMemo)(()=>n?{}:{query:{query:i,args:r}},[JSON.stringify(L(r)),a,n])).query;if(o instanceof Error)throw o;return o}function fn(e){let t=typeof e==`string`?Ke(e):e,n=(0,B.useContext)(cn);if(n===void 0)throw Error("Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return(0,B.useMemo)(()=>on(t,n),[n,Ge(t)])}function pn(e){if(typeof e==`object`&&e&&`bubbles`in e&&`persist`in e&&`isDefaultPrevented`in e)throw Error("Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler.")}var mn=Object.defineProperty,hn=(e,t,n)=>t in e?mn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gn=(e,t,n)=>hn(e,typeof t==`symbol`?t:t+``,n),_n=class{constructor(e){gn(this,`createWatch`),gn(this,`queries`),gn(this,`listeners`),this.createWatch=e,this.queries={},this.listeners=new Set}setQueries(e){for(let t of Object.keys(e)){let{query:n,args:r,paginationOptions:i}=e[t];if(Ge(n),this.queries[t]===void 0)this.addQuery(t,n,r,i?{paginationOptions:i}:{});else{let e=this.queries[t];(Ge(n)!==Ge(e.query)||JSON.stringify(L(r))!==JSON.stringify(L(e.args))||JSON.stringify(i)!==JSON.stringify(e.paginationOptions))&&(this.removeQuery(t),this.addQuery(t,n,r,i?{paginationOptions:i}:{}))}}for(let t of Object.keys(this.queries))e[t]===void 0&&this.removeQuery(t)}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}getLocalResults(e){let t={};for(let n of Object.keys(e)){let{query:r,args:i}=e[n],a=e[n].paginationOptions;Ge(r);let o=this.createWatch(r,i,a?{paginationOptions:a}:{}),s;try{s=o.localQueryResult()}catch(e){if(e instanceof Error)s=e;else throw e}t[n]=s}return t}setCreateWatch(e){this.createWatch=e;for(let e of Object.keys(this.queries)){let{query:t,args:n,watch:r,paginationOptions:i}=this.queries[e],a=`journal`in r?r.journal():void 0;this.removeQuery(e),this.addQuery(e,t,n,{...a?{journal:a}:[],...i?{paginationOptions:i}:{}})}}destroy(){for(let e of Object.keys(this.queries))this.removeQuery(e);this.listeners=new Set}addQuery(e,t,n,{paginationOptions:r,journal:i}){if(this.queries[e]!==void 0)throw Error(`Tried to add a new query with identifier ${e} when it already exists.`);let a=this.createWatch(t,n,{...i?{journal:i}:[],...r?{paginationOptions:r}:{}}),o=a.onUpdate(()=>this.notifyListeners());this.queries[e]={query:t,args:n,watch:a,unsubscribe:o,...r?{paginationOptions:r}:{}}}removeQuery(e){let t=this.queries[e];if(t===void 0)throw Error(`No query found with identifier ${e}.`);t.unsubscribe(),delete this.queries[e]}notifyListeners(){for(let e of this.listeners)e()}};function vn(e){let t=ln();if(t===void 0)throw Error("Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return yn(e,(0,B.useMemo)(()=>(e,n,{journal:r,paginationOptions:i})=>i?t.watchPaginatedQuery(e,n,i):t.watchQuery(e,n,r?{journal:r}:{}),[t]))}function yn(e,t){let[n]=(0,B.useState)(()=>new _n(t));return n.createWatch!==t&&n.setCreateWatch(t),(0,B.useEffect)(()=>()=>n.destroy(),[n]),en((0,B.useMemo)(()=>({getCurrentValue:()=>n.getLocalResults(e),subscribe:t=>(n.setQueries(e),n.subscribe(t))}),[n,e]))}var bn=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&A(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&A(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,ee=k.port2;k.port1.onmessage=D,O=function(){ee.postMessage(null)}}else O=function(){_(D,0)};function A(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,A(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),xn=o(((e,t)=>{t.exports=bn()})),Sn=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),Cn=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Sn()})),wn=o((e=>{var t=xn(),n=u(),r=Cn();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,m=Symbol.for(`react.element`),h=Symbol.for(`react.transitional.element`),g=Symbol.for(`react.portal`),_=Symbol.for(`react.fragment`),v=Symbol.for(`react.strict_mode`),y=Symbol.for(`react.profiler`),b=Symbol.for(`react.consumer`),x=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),D=Symbol.for(`react.activity`),O=Symbol.for(`react.memo_cache_sentinel`),k=Symbol.iterator;function ee(e){return typeof e!=`object`||!e?null:(e=k&&e[k]||e[`@@iterator`],typeof e==`function`?e:null)}var A=Symbol.for(`react.client.reference`);function j(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===A?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case _:return`Fragment`;case y:return`Profiler`;case v:return`StrictMode`;case C:return`Suspense`;case w:return`SuspenseList`;case D:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case g:return`Portal`;case x:return e.displayName||`Context`;case b:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?j(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return j(e(t))}catch{}}return null}var te=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},P=[],re=-1;function ie(e){return{current:e}}function F(e){0>re||(e.current=P[re],P[re]=null,re--)}function I(e,t){re++,P[re]=e.current,e.current=t}var ae=ie(null),oe=ie(null),se=ie(null),ce=ie(null);function le(e,t){switch(I(se,t),I(oe,e),I(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}F(ae),I(ae,e)}function L(){F(ae),F(oe),F(se)}function ue(e){e.memoizedState!==null&&I(ce,e);var t=ae.current,n=Hd(t,e.type);t!==n&&(I(oe,e),I(ae,n))}function de(e){oe.current===e&&(F(ae),F(oe)),ce.current===e&&(F(ce),Qf._currentValue=ne)}var fe,pe;function me(e){if(fe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);fe=t&&t[1]||``,pe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+fe+e+pe}var he=!1;function ge(e,t){if(!e||he)return``;he=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{he=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?me(n):``}function _e(e,t){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me(`Lazy`);case 13:return e.child!==t&&t!==null?me(`Suspense Fallback`):me(`Suspense`);case 19:return me(`SuspenseList`);case 0:case 15:return ge(e.type,!1);case 11:return ge(e.type.render,!1);case 1:return ge(e.type,!0);case 31:return me(`Activity`);default:return``}}function ve(e){try{var t=``,n=null;do t+=_e(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ye=Object.prototype.hasOwnProperty,be=t.unstable_scheduleCallback,xe=t.unstable_cancelCallback,Se=t.unstable_shouldYield,Ce=t.unstable_requestPaint,R=t.unstable_now,we=t.unstable_getCurrentPriorityLevel,Te=t.unstable_ImmediatePriority,Ee=t.unstable_UserBlockingPriority,De=t.unstable_NormalPriority,Oe=t.unstable_LowPriority,ke=t.unstable_IdlePriority,Ae=t.log,je=t.unstable_setDisableYieldValue,Me=null,Ne=null;function Pe(e){if(typeof Ae==`function`&&je(e),Ne&&typeof Ne.setStrictMode==`function`)try{Ne.setStrictMode(Me,e)}catch{}}var Fe=Math.clz32?Math.clz32:Re,Ie=Math.log,Le=Math.LN2;function Re(e){return e>>>=0,e===0?32:31-(Ie(e)/Le|0)|0}var ze=256,Be=262144,Ve=4194304;function He(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ue(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=He(n))):i=He(o):i=He(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=He(n))):i=He(o)):i=He(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function We(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ge(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ke(){var e=Ve;return Ve<<=1,!(Ve&62914560)&&(Ve=4194304),e}function qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Je(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ye(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Fe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Xe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Xe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Fe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ze(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Qe(e,t){var n=t&-t;return n=n&42?1:$e(n),(n&(e.suspendedLanes|t))===0?n:0}function $e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function et(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function tt(){var e=N.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function nt(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var rt=Math.random().toString(36).slice(2),it=`__reactFiber$`+rt,at=`__reactProps$`+rt,ot=`__reactContainer$`+rt,st=`__reactEvents$`+rt,ct=`__reactListeners$`+rt,lt=`__reactHandles$`+rt,ut=`__reactResources$`+rt,dt=`__reactMarker$`+rt;function ft(e){delete e[it],delete e[at],delete e[st],delete e[ct],delete e[lt]}function pt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[it])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function mt(e){if(e=e[it]||e[ot]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ht(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function gt(e){var t=e[ut];return t||=e[ut]={hoistableStyles:new Map,hoistableScripts:new Map},t}function _t(e){e[dt]=!0}var vt=new Set,z={};function yt(e,t){bt(e,t),bt(e+`Capture`,t)}function bt(e,t){for(z[e]=t,e=0;e<t.length;e++)vt.add(t[e])}var xt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),St={},Ct={};function wt(e){return ye.call(Ct,e)?!0:ye.call(St,e)?!1:xt.test(e)?Ct[e]=!0:(St[e]=!0,!1)}function Tt(e,t,n){if(wt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Et(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Dt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ot(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function kt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function At(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jt(e){if(!e._valueTracker){var t=kt(e)?`checked`:`value`;e._valueTracker=At(e,t,``+e[t])}}function Mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=kt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Nt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Pt=/[\n"\\]/g;function Ft(e){return e.replace(Pt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function It(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ot(t)):e.value!==``+Ot(t)&&(e.value=``+Ot(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Rt(e,o,Ot(n)):Rt(e,o,Ot(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ot(s):e.removeAttribute(`name`)}function Lt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){jt(e);return}n=n==null?``:``+Ot(n),t=t==null?n:``+Ot(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),jt(e)}function Rt(e,t,n){t===`number`&&Nt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bt(e,t,n){if(t!=null&&(t=``+Ot(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ot(n)}function Vt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(te(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ot(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),jt(e)}function Ht(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ut=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Wt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Ut.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Gt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Wt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Wt(e,o,t[o])}function Kt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yt(e){return Jt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Xt(){}var Zt=null;function Qt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $t=null,B=null;function en(e){var t=mt(e);if(t&&(e=t.stateNode)){var n=e[at]||null;a:switch(e=t.stateNode,t.type){case`input`:if(It(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ft(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[at]||null;if(!a)throw Error(i(90));It(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Mt(r)}break a;case`textarea`:Bt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&zt(e,!!n.multiple,t,!1)}}}var tn=!1;function nn(e,t,n){if(tn)return e(t,n);tn=!0;try{return e(t)}finally{if(tn=!1,($t!==null||B!==null)&&(bu(),$t&&(t=$t,e=B,B=$t=null,en(t),e)))for(t=0;t<e.length;t++)en(e[t])}}function rn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[at]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var an=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),on=!1;if(an)try{var sn={};Object.defineProperty(sn,"passive",{get:function(){on=!0}}),window.addEventListener(`test`,sn,sn),window.removeEventListener(`test`,sn,sn)}catch{on=!1}var cn=null,ln=null,un=null;function dn(){if(un)return un;var e,t=ln,n=t.length,r,i=`value`in cn?cn.value:cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return un=i.slice(e,1<r?1-r:void 0)}function fn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pn(){return!0}function mn(){return!1}function hn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?pn:mn,this.isPropagationStopped=mn,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=pn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=pn)},persist:function(){},isPersistent:pn}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=hn(gn),vn=p({},gn,{view:0,detail:0}),yn=hn(vn),bn,Sn,wn,Tn=p({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==wn&&(wn&&e.type===`mousemove`?(bn=e.screenX-wn.screenX,Sn=e.screenY-wn.screenY):Sn=bn=0,wn=e),bn)},movementY:function(e){return`movementY`in e?e.movementY:Sn}}),En=hn(Tn),Dn=hn(p({},Tn,{dataTransfer:0})),On=hn(p({},vn,{relatedTarget:0})),kn=hn(p({},gn,{animationName:0,elapsedTime:0,pseudoElement:0})),An=hn(p({},gn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),jn=hn(p({},gn,{data:0})),Mn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Nn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},V={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V[e])?!!t[e]:!1}function Fn(){return Pn}var In=hn(p({},vn,{key:function(e){if(e.key){var t=Mn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=fn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Nn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fn,charCode:function(e){return e.type===`keypress`?fn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?fn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Ln=hn(p({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=hn(p({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fn})),zn=hn(p({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Bn=hn(p({},Tn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Vn=hn(p({},gn,{newState:0,oldState:0})),Hn=[9,13,27,32],Un=an&&`CompositionEvent`in window,Wn=null;an&&`documentMode`in document&&(Wn=document.documentMode);var Gn=an&&`TextEvent`in window&&!Wn,Kn=an&&(!Un||Wn&&8<Wn&&11>=Wn),qn=` `,Jn=!1;function Yn(e,t){switch(e){case`keyup`:return Hn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Xn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Zn=!1;function Qn(e,t){switch(e){case`compositionend`:return Xn(t);case`keypress`:return t.which===32?(Jn=!0,qn):null;case`textInput`:return e=t.data,e===qn&&Jn?null:e;default:return null}}function $n(e,t){if(Zn)return e===`compositionend`||!Un&&Yn(e,t)?(e=dn(),un=ln=cn=null,Zn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Kn&&t.locale!==`ko`?null:t.data;default:return null}}var er={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!er[e.type]:t===`textarea`}function nr(e,t,n,r){$t?B?B.push(r):B=[r]:$t=r,t=Ed(t,`onChange`),0<t.length&&(n=new _n(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var rr=null,ir=null;function ar(e){yd(e,0)}function or(e){if(Mt(ht(e)))return e}function sr(e,t){if(e===`change`)return t}var cr=!1;if(an){var H;if(an){var lr=`oninput`in document;if(!lr){var ur=document.createElement(`div`);ur.setAttribute(`oninput`,`return;`),lr=typeof ur.oninput==`function`}H=lr}else H=!1;cr=H&&(!document.documentMode||9<document.documentMode)}function dr(){rr&&(rr.detachEvent(`onpropertychange`,fr),ir=rr=null)}function fr(e){if(e.propertyName===`value`&&or(ir)){var t=[];nr(t,ir,e,Qt(e)),nn(ar,t)}}function pr(e,t,n){e===`focusin`?(dr(),rr=t,ir=n,rr.attachEvent(`onpropertychange`,fr)):e===`focusout`&&dr()}function mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return or(ir)}function hr(e,t){if(e===`click`)return or(t)}function gr(e,t){if(e===`input`||e===`change`)return or(t)}function _r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var vr=typeof Object.is==`function`?Object.is:_r;function yr(e,t){if(vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ye.call(t,i)||!vr(e[i],t[i]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var n=br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=br(n)}}function Sr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Nt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nt(e.document)}return t}function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Tr=an&&`documentMode`in document&&11>=document.documentMode,Er=null,Dr=null,Or=null,kr=!1;function Ar(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kr||Er==null||Er!==Nt(r)||(r=Er,`selectionStart`in r&&wr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&yr(Or,r)||(Or=r,r=Ed(Dr,`onSelect`),0<r.length&&(t=new _n(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Mr={animationend:jr(`Animation`,`AnimationEnd`),animationiteration:jr(`Animation`,`AnimationIteration`),animationstart:jr(`Animation`,`AnimationStart`),transitionrun:jr(`Transition`,`TransitionRun`),transitionstart:jr(`Transition`,`TransitionStart`),transitioncancel:jr(`Transition`,`TransitionCancel`),transitionend:jr(`Transition`,`TransitionEnd`)},Nr={},Pr={};an&&(Pr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),`TransitionEvent`in window||delete Mr.transitionend.transition);function Fr(e){if(Nr[e])return Nr[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pr)return Nr[e]=t[n];return e}var Ir=Fr(`animationend`),Lr=Fr(`animationiteration`),Rr=Fr(`animationstart`),zr=Fr(`transitionrun`),Br=Fr(`transitionstart`),Vr=Fr(`transitioncancel`),Hr=Fr(`transitionend`),Ur=new Map,Wr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Wr.push(`scrollEnd`);function Gr(e,t){Ur.set(e,t),yt(t,[e])}var Kr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},qr=[],Jr=0,Yr=0;function Xr(){for(var e=Jr,t=Yr=Jr=0;t<e;){var n=qr[t];qr[t++]=null;var r=qr[t];qr[t++]=null;var i=qr[t];qr[t++]=null;var a=qr[t];if(qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ei(n,i,a)}}function Zr(e,t,n,r){qr[Jr++]=e,qr[Jr++]=t,qr[Jr++]=n,qr[Jr++]=r,Yr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Qr(e,t,n,r){return Zr(e,t,n,r),ti(e)}function $r(e,t){return Zr(e,null,null,t),ti(e)}function ei(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Fe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ti(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,t,n,r){return new ri(e,t,n,r)}function ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oi(e,t){var n=e.alternate;return n===null?(n=ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function si(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ai(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ae.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case D:return e=ii(31,n,t,a),e.elementType=D,e.lanes=o,e;case _:return li(n.children,a,o,t);case v:s=8,a|=24;break;case y:return e=ii(12,n,t,a|2),e.elementType=y,e.lanes=o,e;case C:return e=ii(13,n,t,a),e.elementType=C,e.lanes=o,e;case w:return e=ii(19,n,t,a),e.elementType=w,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case x:s=10;break a;case b:s=9;break a;case S:s=11;break a;case T:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ii(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function li(e,t,n,r){return e=ii(7,e,r,t),e.lanes=n,e}function ui(e,t,n){return e=ii(6,e,null,t),e.lanes=n,e}function di(e){var t=ii(18,null,null,0);return t.stateNode=e,t}function fi(e,t,n){return t=ii(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pi=new WeakMap;function mi(e,t){if(typeof e==`object`&&e){var n=pi.get(e);return n===void 0?(t={value:e,source:t,stack:ve(t)},pi.set(e,t),t):n}return{value:e,source:t,stack:ve(t)}}var hi=[],gi=0,_i=null,vi=0,yi=[],bi=0,xi=null,Si=1,Ci=``;function wi(e,t){hi[gi++]=vi,hi[gi++]=_i,_i=e,vi=t}function Ti(e,t,n){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,xi=e;var r=Si;e=Ci;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var a=32-Fe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Si=1<<32-Fe(t)+i|n<<i|r,Ci=a+e}else Si=1<<a|n<<i|r,Ci=e}function Ei(e){e.return!==null&&(wi(e,1),Ti(e,1,0))}function Di(e){for(;e===_i;)_i=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null;for(;e===xi;)xi=yi[--bi],yi[bi]=null,Ci=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null}function Oi(e,t){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,Si=t.id,Ci=t.overflow,xi=e}var ki=null,Ai=null,U=!1,ji=null,Mi=!1,Ni=Error(i(519));function Pi(e){throw Bi(mi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[it]=e,t[at]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Lt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Vt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(ki=e.return;ki;)switch(ki.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:ki=ki.return}}function Li(e){if(e!==ki)return!1;if(!U)return Ii(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ai&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else t===27?(t=Ai,Zd(e.type)?(e=lf,lf=null,Ai=e):Ai=t):Ai=ki?cf(e.stateNode.nextSibling):null;return!0}function Ri(){Ai=ki=null,U=!1}function zi(){var e=ji;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),ji=null),e}function Bi(e){ji===null?ji=[e]:ji.push(e)}var Vi=ie(null),Hi=null,Ui=null;function Wi(e,t,n){I(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,F(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;vr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ce.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!vr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(i(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=dd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=M.S;M.S=function(e,t){eu=R(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=ie(null);function ha(){var e=ma.current;return e===null?q.pooledCache:e}function ga(e,t){t===null?I(ma,ma.current):I(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Xt,Xt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then(Xt,Xt);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=oi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===_?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=ci(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=li(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ui(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case h:return n=ci(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case g:return t=fi(t,e.mode,n),t.return=e,t;case E:return t=wa(t),f(e,t,n)}if(te(t)||ee(t))return t=li(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===x)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case h:return n.key===i?l(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case E:return n=wa(n),p(e,t,n,r)}if(te(n)||ee(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===x)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case h:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case g:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=wa(r),m(e,t,n,r,i)}if(te(r)||ee(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===x)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&wi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&wi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&wi(i,h),l}function y(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&wi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&wi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&wi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===_&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case h:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===_){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===_?(c=li(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ci(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case g:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=fi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=wa(o),b(e,r,o,c)}if(te(o))return v(e,r,o,c);if(ee(o)){if(l=ee(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===x)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ui(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=ii(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ti(e),ei(e,null,n),t}return Zr(e,r,t,n),ti(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,m=f!==s.lane;if(m?(Y&f)===f:(r&f)===f){f!==0&&f===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=p({},d,f);break a;case 2:Ia=!0}}f=s.callback,f!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[f]:m.push(f))}else m={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=ie(null),Ya=ie(0);function Xa(e,t){e=Ul,I(Ya,e),I(Ja,t),Ul=e|t.baseLanes}function Za(){I(Ya,Ul),I(Ja,Ja.current)}function Qa(){Ul=Ya.current,F(Ja),F(Ya)}var $a=ie(null),eo=null;function to(e){var t=e.alternate;I(oo,oo.current&1),I($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){I(oo,oo.current),I($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(I(oo,oo.current),I($a,e),eo===null&&(eo=e)):io(e)}function io(){I(oo,oo.current),I($a,$a.current)}function ao(e){F($a),eo===e&&(eo=null),F(oo)}var oo=ie(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,G=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vr(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Ls:Rs,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){M.H=Is;var t=G!==null&&G.next!==null;if(co=0,lo=G=W=null,uo=!1,ho=0,go=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&Yi(e)&&(tc=!0))}function So(e,t,n,r){W=e;var a=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=a)throw Error(i(301));if(a+=1,lo=G=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=zs,o=t(n,r)}while(fo);return o}function Co(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(G===null?null:G.memoizedState)!==e&&(W.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}co=0,lo=G=W=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?W.memoizedState=lo=e:lo=lo.next=e,lo}function Oo(){if(G===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=G.next;var t=lo===null?W.memoizedState:lo.next;if(t!==null)lo=t,G=e;else{if(e===null)throw W.alternate===null?Error(i(467)):Error(i(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},lo===null?W.memoizedState=lo=e:lo=lo.next=e}return lo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=ho;return ho+=1,go===null&&(go=[]),e=Ca(go,e,t),t=W,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===x)return Zi(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=O;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),G,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((co&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,W.lanes|=p,Gl|=p;f=u.action,po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,W.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!vr(o,e.memoizedState)&&(tc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);vr(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=W,a=Oo(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!vr((G||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||co&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=ko(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vr(e,n)}catch{return!0}}function Ho(e){var t=$r(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){Pe(!0);try{n()}finally{Pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,G,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(U){var n=q.formState;if(n!==null){a:{var r=W;if(U){if(Ai){b:{for(var i=Ai,a=Mi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ai=cf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,W,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,W,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),G,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===va?ba:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=G;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=ko(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();W.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;G!==null&&r!==null&&yo(r,G.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(W.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=ko(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){Pe(!0);try{e()}finally{Pe(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||co&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),W.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return vr(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),W.lanes|=e,Gl|=e,t):(e=vs(e,n,r),vr(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};M.T=s,Ms(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,fa(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,ne,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return Zi(Qf)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=za(n);var r=Ba(t,e,n);r!==null&&(hu(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=Qr(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,vr(s,o))return Zr(e,t,i,0),q===null&&Xr(),!1}catch{}if(n=Qr(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=Qr(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ps(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}var Is={readContext:Zi,use:jo,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Is.useEffectEvent=vo;var Ls={readContext:Zi,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){Pe(!0);try{e()}finally{Pe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){Pe(!0);try{n(t)}finally{Pe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,W,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,a=Do();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=q.identifierPrefix;if(U){var n=Ci,r=Si;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,W)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),G.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return G===null?vs(n,e,t):ys(n,G.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return G===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(hu(t,e,n),Va(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){Kr(e)}function Ks(e){console.error(e)}function qs(e){Kr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=za(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(U)return t=$a.current,t===null?(r!==Ni&&(t=Error(i(423),{cause:r}),Bi(mi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=mi(r,n),a=Xs(e.stateNode,r,a),Ha(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ni&&(e=Error(i(422),{cause:r}),Bi(mi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=mi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=mi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&s&&Ei(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ai(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?yr:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=oi(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(yr(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Pa(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(no(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(tc||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=q,r!==null&&(s=Qe(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,$r(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,Ai=cf(s.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=lc(t,r),t.flags|=4096;return t}return e=oi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Xi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ni,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ni,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Ia||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ni,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Ia||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Ri(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:_a()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(oo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(U){if(a?to(t):io(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=li(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(to(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=li(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Bi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=q,s!==null&&(r=Qe(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,$r(e,r),hu(s,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ai=cf(c.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=oi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=li(c,a,n,null),c.flags|=2):c=oi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=oi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=ii(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Pa(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,I(oo,o),nc(e,t,r,n),r=U?vi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Yi(e))):!0}function kc(e,t,n){switch(t.tag){case 3:le(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:ue(t);break;case 4:le(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(oo,oo.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,U&&t.flags&1048576&&Ti(t,vi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)ai(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=rc(null,t,e,r,n);break a}else if(a===T){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=j(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(le(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Wi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Wa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==a){a=mi(Error(i(424)),t),Bi(a),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ai=cf(e.firstChild),ki=t,U=!0,ji=null,Mi=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(n=t.type,e=t.pendingProps,r=Bd(se.current).createElement(n),r[it]=t,r[at]=e,Pd(r,n,e),_t(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ue(t),e===null&&U&&(r=t.stateNode=ff(t.type,t.pendingProps,se.current),ki=t,Mi=!0,a=Ai,Zd(t.type)?(lf=a,Ai=cf(r.firstChild)):Ai=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=Ai)&&(r=tf(r,t.type,t.pendingProps,Mi),r===null?a=!1:(t.stateNode=r,ki=t,Ai=cf(r.firstChild),Mi=!1,a=!0)),a||Pi(t)),ue(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=Ai)&&(n=nf(n,t.pendingProps,Mi),n===null?e=!1:(t.stateNode=n,ki=t,Ai=null,e=!0)),e||Pi(t)),null;case 13:return bc(e,t,n);case 4:return le(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ha(),a===null&&(a=q,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Wi(t,ra,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Wi(t,ra,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ta=xa,ya}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ta=xa,ya}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ke(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),L(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(de(t),n=se.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=ae.current,Li(t)?Fi(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(de(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=ae.current,Li(t))Fi(t,o);else{var s=Bd(se.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[it]=t,o[at]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=se.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ki,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Pi(t,!0)}else e=Bd(e).createTextNode(r),e[it]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[it]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[it]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return L(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return Gi(t.type),Ic(t),null;case 19:if(F(oo),r=t.memoizedState,r===null)return Ic(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)si(n,e),n=n.sibling;return I(oo,oo.current&1|2),U&&wi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&R()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}else{if(!a)if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!U)return Ic(t),null}else 2*R()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=R(),e.sibling=null,n=oo.current,I(oo,a?n&1|2:n&1),U&&wi(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&F(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),L(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return de(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(oo),null;case 4:return L(),null;case 10:return Gi(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&F(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function zc(e,t){switch(Di(t),t.tag){case 3:Gi(ra),L();break;case 26:case 27:case 5:de(t);break;case 4:L();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:F(oo);break;case 10:Gi(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&F(ma);break;case 24:Gi(ra)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[at]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[it]=e,t[at]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Cr(e),wr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ft(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ne&&typeof Ne.onCommitFiberUnmount==`function`)try{Ne.onCommitFiberUnmount(Me,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[dt]||o[it]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[it]=e,_t(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[it]=e,_t(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Ht(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=R()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Ht(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:M.T===null?tt():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||U){var e=Be;Be<<=1,!(Be&3932160)&&(Be=262144),Jl=e}else Jl=536870912;return e=$a.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Je(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||We(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-R(),10<a)){if(yu(r,t,Jl,!Bl),Ue(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},jl(t,a,d);var m=(a&62914560)===a?$l-R():(a&4194048)===a?eu-R():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!vr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Fe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Xe(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ui=Hi=null,Eo(e),Oa=null,ka=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=oi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=We(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Fe(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Xr(),n}function Cu(e,t){W=null,M.H=Is,t===va||t===ba?(t=Ea(),X=3):t===ya?(t=Ea(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Js(e,mi(t,e.current)))}function wu(){var e=$a.current;return e===null?!0:(Y&4194048)===Y?eo===null:(Y&62914560)===Y||Y&536870912?e===eo:!1}function Tu(){var e=M.H;return M.H=Is,e===null?Is:e}function Eu(){var e=M.A;return M.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&$a.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,K=r,M.H=i,M.A=a,J===null&&(q=null,Y=0,Xr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=R()+500,Su(e,t)):Vl=We(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Sa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Sa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ui=Hi=null,M.H=r,M.A=a,K=n,J===null?(q=null,Y=0,Xr(),Wl):0}function ju(){for(;J!==null&&!Se();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Eo(t);default:zc(n,t),t=J=si(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ui=Hi=null,Eo(t),Oa=null,ka=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Js(e,mi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Js(e,mi(n,e.current)),J=null;return}t.flags&32768?(U||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Yr,Ye(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(De,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=M.T,M.T=null,a=N.p,N.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,N.p=a,M.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Cr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Sr(s.ownerDocument.documentElement,s)){if(c!==null&&wr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=xr(s,h),v=xr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,N.p=r,M.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,N.p=r,M.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ce();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),et(n),t=t.stateNode,Ne&&typeof Ne.onCommitFiberRoot==`function`)try{Ne.onCommitFiberRoot(Me,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=M.T,i=N.p,N.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,N.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=et(su),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Ne&&typeof Ne.onPostCommitFiberRoot==`function`)try{Ne.onPostCommitFiberRoot(Me,o)}catch{}return!0}finally{N.p=a,M.T=r,Vu(e,t)}}function Wu(e,t,n){t=mi(n,t),t=Xs(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Je(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=mi(n,e),n=Zs(2),r=Ba(t,n,2),r!==null&&(Qs(n,r,t,e),Je(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>R()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ke()),e=$r(e,t),e!==null&&(Je(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return be(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Fe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ue(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||We(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=R(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Fe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ge(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ue(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&xe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||We(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&xe(r),et(n)){case 2:case 8:n=Ee;break;case 32:n=De;break;case 268435456:n=ke;break;default:n=De}return r=cd.bind(null,e),n=be(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&xe(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ue(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,R()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?be(Te,ad):od()})}function dd(){if(nd===0){var e=ca;e===0&&(e=ze,ze<<=1,!(ze&261888)&&(ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Yt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[at]||null).action),o=r.submitter;o&&(t=(t=o[at]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new _n(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Wr.length;hd++){var gd=Wr[hd];Gr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Gr(Ir,`onAnimationEnd`),Gr(Lr,`onAnimationIteration`),Gr(Rr,`onAnimationStart`),Gr(`dblclick`,`onDoubleClick`),Gr(`focusin`,`onFocus`),Gr(`focusout`,`onBlur`),Gr(zr,`onTransitionRun`),Gr(Br,`onTransitionStart`),Gr(Vr,`onTransitionCancel`),Gr(Hr,`onTransitionEnd`),bt(`onMouseEnter`,[`mouseout`,`mouseover`]),bt(`onMouseLeave`,[`mouseout`,`mouseover`]),bt(`onPointerEnter`,[`pointerout`,`pointerover`]),bt(`onPointerLeave`,[`pointerout`,`pointerover`]),yt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),yt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),yt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),yt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),yt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),yt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[st];n===void 0&&(n=t[st]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,vt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!on||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=pt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}nn(function(){var r=a,i=Qt(n),s=[];a:{var c=Ur.get(e);if(c!==void 0){var l=_n,u=e;switch(e){case`keypress`:if(fn(n)===0)break a;case`keydown`:case`keyup`:l=In;break;case`focusin`:u=`focus`,l=On;break;case`focusout`:u=`blur`,l=On;break;case`beforeblur`:case`afterblur`:l=On;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=En;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Dn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Rn;break;case Ir:case Lr:case Rr:l=kn;break;case Hr:l=zn;break;case`scroll`:case`scrollend`:l=yn;break;case`wheel`:l=Bn;break;case`copy`:case`cut`:case`paste`:l=An;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Ln;break;case`toggle`:case`beforetoggle`:l=Vn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=rn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Zt&&(u=n.relatedTarget||n.fromElement)&&(pt(u)||u[ot]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?pt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=En,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Ln,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:ht(l),h=u==null?c:ht(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,pt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?ht(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=sr;else if(tr(c))if(cr)v=gr;else{v=mr;var y=pr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Kt(r.elementType)&&(v=sr):v=hr;if(v&&=v(e,r)){nr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Rt(c,`number`,c.value)}switch(y=r?ht(r):window,e){case`focusin`:(tr(y)||y.contentEditable===`true`)&&(Er=y,Dr=r,Or=null);break;case`focusout`:Or=Dr=Er=null;break;case`mousedown`:kr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:kr=!1,Ar(s,n,i);break;case`selectionchange`:if(Tr)break;case`keydown`:case`keyup`:Ar(s,n,i)}var b;if(Un)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Zn?Yn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Kn&&n.locale!==`ko`&&(Zn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Zn&&(b=dn()):(cn=i,ln=`value`in cn?cn.value:cn.textContent,Zn=!0)),y=Ed(r,x),0<y.length&&(x=new jn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Xn(n),b!==null&&(x.data=b)))),(b=Gn?Qn(e,n):$n(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new jn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=rn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=rn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=rn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=rn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Ht(e,``+r);break;case`className`:Et(e,`class`,r);break;case`tabIndex`:Et(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Et(e,n,r);break;case`style`:Gt(e,r,o);break;case`data`:if(t!==`object`){Et(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Yt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Yt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Xt);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Yt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Tt(e,`popover`,r);break;case`xlinkActuate`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Tt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=qt.get(n)||n,Tt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Gt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&Ht(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Xt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!z.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[at]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Tt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Lt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&zt(e,!!r,n,!0):zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Vt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Kt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}It(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?zt(e,!!n,n?[]:``,!1):zt(e,!!n,t,!0)):zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Bt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Kt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[dt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),ft(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[dt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ft(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=N.d;N.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=mt(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ft(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),_t(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ft(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ft(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ft(n.imageSizes)+`"]`)):i+=`[href="`+Ft(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=p({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),_t(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ft(r)+`"][href="`+Ft(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=p({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),_t(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=gt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=p({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);_t(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=gt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),_t(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=gt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),_t(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=se.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=gt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=gt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=gt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ft(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),_t(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ft(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ft(n.href)+`"]`);if(r)return t.instance=r,_t(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),_t(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,_t(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),_t(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,_t(a),a):(r=n,(a=mf.get(o))&&(r=p({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),_t(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[dt]||a[it]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,_t(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),_t(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:x,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ii(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=ni,e):ni}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(hu(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=$r(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=$e(t);var n=$r(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,up(e,t,n,r)}finally{N.p=a,M.T=i}}function lp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,up(e,t,n,r)}finally{N.p=a,M.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=mt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=He(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Fe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=R()+500,id(0,!1))}}break;case 31:case 13:s=$r(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=Qt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=pt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(we()){case Te:return 2;case Ee:return 8;case De:case Oe:return 32;case ke:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=mt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=pt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,nt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,nt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zt=r,n.target.dispatchEvent(r),Zt=null}else return t=mt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=mt(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[at]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[at]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ot]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=tt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Me=zp.inject(Rp),Ne=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ot]=t.current,Sd(e),new Fp(t)}})),Tn=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=wn()}))(),En=o((e=>{var t=u().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),Dn=o(((e,t)=>{t.exports=En()}));function On(e,t){return new Proxy({},{get(n,r){if(typeof r==`string`)return On(e,[...t,r]);if(r===Ve){if(t.length<1){let n=[e,...t].join(`.`);throw Error(`API path is expected to be of the form \`${e}.childComponent.functionName\`. Found: \`${n}\``)}return`_reference/childComponent/`+t.join(`/`)}else return}})}var kn=()=>On(`components`,[]),An=Dn(),jn=Je;kn();var Mn=`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,Nn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),V=o(((e,t)=>{t.exports=Nn()}))(),Pn=5,Fn=5,In=5,Ln=5,Rn=5,zn=5,Bn=10,Vn=5,Hn=[`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`];function Un(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}var Wn=[`No.`,`TES Award Number`,`Student ID`,`Last Name`,`First Name`,`MI.`,`batch No.`,`Status`,`Semester`,`School Year`];function Gn(e){let t=(0,An.c)(4),{status:n,tone:r}=e,i=`admin-status admin-status--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,V.jsx)(`span`,{className:`admin-status__dot`}),t[0]=a):a=t[0];let o=n||`—`,s;return t[1]!==i||t[2]!==o?(s=(0,V.jsxs)(`span`,{className:i,children:[a,o]}),t[1]=i,t[2]=o,t[3]=s):s=t[3],s}function Kn(e=``){let t=e.toLowerCase();return t.includes(`grantee`)?`grantee`:t.includes(`applicant`)?`applicant`:t.includes(`complete`)||t.includes(`resolved`)||t.includes(`valid`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function qn(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function Jn(e){return`"${String(e??``).replaceAll(`"`,`""`)}"`}function Yn(e,t){let n=t.map(e=>e.map(Jn).join(`,`)).join(`
`),r=new Blob([n],{type:`text/csv;charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(i)}function Xn(){let e=[Wn,[`1`,`TES-2024-0001`,`2024-UNI-0001`,`Dela Cruz`,`Juan`,`P`,`2024-01`,`Pending`,`1st Semester`,`2024-2025`]].map(e=>e.map(e=>`"${e.replaceAll(`"`,`""`)}"`).join(`,`)).join(`
`),t=new Blob([e],{type:`text/csv;charset=utf-8`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`tdp-grantee-template.csv`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function Zn(e,t){return String(e??``).trim().replace(/[^a-z0-9-]+/gi,`-`).replace(/^-+|-+$/g,``)||t}function Qn(e){return[e?.lastName,e?.firstName,e?.middleInitial].map(e=>String(e??``).trim()).filter(Boolean).join(`, `)}function $n(e){return String(e?.course??e?.program??e?.degreeProgram??``).trim()}function er(e){let t=String(e?.applicationYear??``).trim();if(t)return t;let n=e?.submittedAt;return n?String(new Date(n).getFullYear()):``}function tr(e,t){if(t<=5)return Array.from({length:t},(e,t)=>t+1);let n=[1],r=Math.max(2,e-1),i=Math.min(t-1,e+1);r>2&&n.push(`left-ellipsis`);for(let e=r;e<=i;e+=1)n.push(e);return i<t-1&&n.push(`right-ellipsis`),n.push(t),n}function nr(e,t){if(e===`application/pdf`)return`.pdf`;if(e===`image/png`)return`.png`;if(e===`image/jpeg`)return`.jpg`;try{let e=new URL(t).pathname.match(/\.(pdf|png|jpe?g)$/i);return e?`.${e[1].toLowerCase().replace(`jpeg`,`jpg`)}`:``}catch{return``}}async function rr(e,t){let n=await fetch(e.frontIdUrl);if(!n.ok)throw Error(`Unable to download School ID file for ${e.studentId||`student`}.`);let r=await n.blob(),i=new Uint8Array(await r.arrayBuffer()),a=Zn(e.studentId,`student-${t+1}`),o=Zn(e.lastName,`no-last-name`),s=Zn(e.firstName,`no-first-name`),c=Zn(e.middleInitial,`no-middle-name`),l=Zn(e.batchId,`no-batch`),u=nr(r.type,e.frontIdUrl);return{bytes:i,name:`student-id-${a}-${o}-${s}-${c}-batch-${l}-${t+1}${u}`}}function ir(){return Array.from({length:256},(e,t)=>{let n=t;for(let e=0;e<8;e+=1)n=n&1?3988292384^n>>>1:n>>>1;return n>>>0})}var ar=ir(),or=new TextEncoder;function sr(e){let t=4294967295;for(let n of e)t=ar[(t^n)&255]^t>>>8;return(t^4294967295)>>>0}function cr(){let e=new Date,t=e.getHours()<<11|e.getMinutes()<<5|Math.floor(e.getSeconds()/2);return{date:e.getFullYear()-1980<<9|e.getMonth()+1<<5|e.getDate(),time:t}}function H(e,t,n,r){if(n===2){e.setUint16(t,r,!0);return}e.setUint32(t,r>>>0,!0)}function lr(e){let{date:t,time:n}=cr(),r=[],i=[],a=0;e.forEach(e=>{let o=or.encode(e.name),s=sr(e.bytes),c=new Uint8Array(30+o.length),l=new DataView(c.buffer);H(l,0,4,67324752),H(l,4,2,20),H(l,8,2,0),H(l,10,2,n),H(l,12,2,t),H(l,14,4,s),H(l,18,4,e.bytes.length),H(l,22,4,e.bytes.length),H(l,26,2,o.length),c.set(o,30),r.push(c,e.bytes);let u=new Uint8Array(46+o.length),d=new DataView(u.buffer);H(d,0,4,33639248),H(d,4,2,20),H(d,6,2,20),H(d,10,2,0),H(d,12,2,n),H(d,14,2,t),H(d,16,4,s),H(d,20,4,e.bytes.length),H(d,24,4,e.bytes.length),H(d,28,2,o.length),H(d,42,4,a),u.set(o,46),i.push(u),a+=c.length+e.bytes.length});let o=i.reduce((e,t)=>e+t.length,0),s=new Uint8Array(22),c=new DataView(s.buffer);return H(c,0,4,101010256),H(c,8,2,e.length),H(c,10,2,e.length),H(c,12,4,o),H(c,16,4,a),new Blob([...r,...i,s],{type:`application/zip`})}function ur(e){return e.replaceAll(`\xA0`,` `).trim()}function dr(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a+=1){let o=e[a],s=e[a+1];o===`"`&&i&&s===`"`?(r+=`"`,a+=1):o===`"`?i=!i:o===`,`&&!i?(n.push(ur(r)),r=``):(o===`
`||o===`\r`)&&!i?(o===`\r`&&s===`
`&&(a+=1),n.push(ur(r)),n.some(Boolean)&&t.push(n),n=[],r=``):r+=o}return n.push(ur(r)),n.some(Boolean)&&t.push(n),t}function fr(e){return dr(e).filter(e=>e.some(Boolean)).filter(e=>!e.join(` `).toLowerCase().includes(`tes award number`)).map(e=>({no:e[0]??``,tesAwardNumber:e[1]??``,studentId:e[2]??``,lastName:e[3]??``,firstName:e[4]??``,middleInitial:e[5]??``,batchId:e[6]??``,status:e[7]??``,semester:e[8]??``,schoolYear:e[9]??``})).filter(e=>e.no&&e.tesAwardNumber&&e.studentId&&e.lastName&&e.firstName&&e.batchId&&e.status&&e.semester&&e.schoolYear)}function pr({onLogout:e}){let[t,n]=(0,B.useState)(0),[r,i]=(0,B.useState)(!1),[a,o]=(0,B.useState)(!1),[s,c]=(0,B.useState)(!1),[l,u]=(0,B.useState)(!1),[d,f]=(0,B.useState)(!1),[p,m]=(0,B.useState)(``),[h,g]=(0,B.useState)(!1),[_,v]=(0,B.useState)(!1),[y,b]=(0,B.useState)(!1),[x,S]=(0,B.useState)(!1),[C,w]=(0,B.useState)(``),[T,E]=(0,B.useState)(!1),[D,O]=(0,B.useState)(null),[k,ee]=(0,B.useState)(null),[A,j]=(0,B.useState)(``),[te,M]=(0,B.useState)(``),[N,ne]=(0,B.useState)(!1),[P,re]=(0,B.useState)(!1),[ie,F]=(0,B.useState)(!1),[I,ae]=(0,B.useState)(1),[oe,se]=(0,B.useState)(1),[ce,le]=(0,B.useState)([]),[L,ue]=(0,B.useState)(null),[de,fe]=(0,B.useState)(null),[pe,me]=(0,B.useState)(``),[he,ge]=(0,B.useState)(!1),[_e,ve]=(0,B.useState)(``),[ye,be]=(0,B.useState)(``),[xe,Se]=(0,B.useState)(1),[Ce,R]=(0,B.useState)(1),[we,Te]=(0,B.useState)(1),[Ee,De]=(0,B.useState)(1),[Oe,ke]=(0,B.useState)(``),[Ae,je]=(0,B.useState)(1),[Me,Ne]=(0,B.useState)(1),Pe=dn(jn.quickActions.list),Fe=dn(jn.activityLogs.list),Ie=dn(jn.allinfo.list),Le=dn(jn.applicants.list),Re=dn(jn.applicantPortal.get),ze=dn(jn.adminAuth.listStudentAccounts),Be=fn(jn.applicantPortal.setReceivingApplicants),Ve=fn(jn.allinfo.bulkCreate),He=fn(jn.allinfo.update),Ue=fn(jn.allinfo.deleteMany),We=fn(jn.quickActions.clearAll),Ge=r||a||s||l||d||!!p||h||_||y||!!D||x||!!C||!!L,Ke=(0,B.useMemo)(()=>Ie??[],[Ie]),qe=Pe??[],Je=Fe??[],Ye=(0,B.useMemo)(()=>Le??[],[Le]),Xe=(0,B.useMemo)(()=>ze??[],[ze]),Ze=Re?.applicationYear,Qe=String(Ze??new Date().getFullYear()),$e=(0,B.useMemo)(()=>{let e=new Date().getFullYear(),t=new Set([String(e-1),String(e),String(e+1),String(e+2),String(e+3),String(e+4),String(e+5)]);return Ze&&t.add(String(Ze)),Ye.forEach(e=>{let n=er(e);n&&t.add(n)}),Array.from(t).sort()},[Ye,Ze]),et=Math.max(1,Math.ceil($e.length/Vn)),tt=Math.min(Me,et),nt=(tt-1)*Vn,rt=$e.slice(nt,nt+Vn),it=tr(tt,et),at=$e.length===0?0:nt+1,ot=nt+rt.length,st=(0,B.useMemo)(()=>Array.from(new Set(Ke.map(e=>String(e.batchId??``).trim()).filter(Boolean))).sort(),[Ke]),ct=(0,B.useMemo)(()=>st.map(e=>{let t=Ke.filter(t=>String(t.batchId??``).trim()===e),n=new Set(t.map(e=>String(e.studentId??``).trim().toLowerCase()));return{accountCount:Xe.filter(e=>n.has(String(e.schoolId??``).trim().toLowerCase())).length,batchId:e,recordCount:t.length}}),[st,Ke,Xe]),lt=(0,B.useMemo)(()=>Hn.map(e=>({applicantCount:Ye.filter(t=>er(t)===Qe&&$n(t).toLowerCase()===e.toLowerCase()).length,course:e})),[Qe,Ye]),ut=(0,B.useMemo)(()=>{let e=p.trim().toLowerCase();return e?Ye.filter(t=>er(t)===Qe&&$n(t).toLowerCase()===e):[]},[Qe,Ye,p]),dt=(0,B.useMemo)(()=>{let e=Oe.trim().toLowerCase();return e?ut.filter(t=>{let n=[t.firstName,t.middleName,t.lastName,t.extensionName].filter(Boolean).join(` `);return[t.studentId,n,t.gender,t.birthDate,t.year,t.address,t.mobileNumber,t.emailAddress,t.status,t.psaFileName,t.schoolIdFileName,t.pwdIdFileName,t.fourPsFileName,qn(t.submittedAt)].map(e=>String(e??``).toLowerCase()).join(` `).includes(e)}):ut},[Oe,ut]),ft=Math.max(1,Math.ceil(dt.length/Bn)),pt=Math.min(Ae,ft),mt=(pt-1)*Bn,ht=dt.slice(mt,mt+Bn),gt=tr(pt,ft),_t=dt.length===0?0:mt+1,vt=mt+ht.length,z=(0,B.useMemo)(()=>{let e=_e.trim().toLowerCase(),t=ye.trim().toLowerCase();return Ke.filter(n=>{let r=[n.no,n.tesAwardNumber,n.studentId,n.lastName,n.firstName,n.middleInitial,n.batchId,n.status,n.semester,n.schoolYear].map(e=>String(e??``).toLowerCase()).join(` `),i=e?r.includes(e):!0,a=t?String(n.batchId??``).trim().toLowerCase()===t:!0;return i&&a})},[Ke,_e,ye]),yt=Math.max(1,Math.ceil(z.length/Pn)),bt=Math.min(I,yt),xt=(bt-1)*Pn,St=tr(bt,yt),Ct=z.slice(xt,xt+Pn),wt=z.filter(e=>e.frontIdUrl),Tt=(0,B.useMemo)(()=>Array.from(new Set(wt.map(e=>String(e.schoolYear??``).trim()).filter(Boolean))).sort((e,t)=>t.localeCompare(e)),[wt]),Et=(0,B.useMemo)(()=>Tt.map(e=>({fileCount:wt.filter(t=>String(t.schoolYear??``).trim()===e).length,schoolYear:e})),[wt,Tt]),Dt=(0,B.useMemo)(()=>{if(!C)return[];let e=new Map;return wt.forEach(t=>{if(String(t.schoolYear??``).trim()!==C)return;let n=String(t.batchId??``).trim();if(!n)return;let r=e.get(n)??{batchId:n,fileCount:0};r.fileCount+=1,e.set(n,r)}),Array.from(e.values()).sort((e,t)=>e.batchId.localeCompare(t.batchId))},[wt,C]),Ot=z.length===0?0:xt+1,kt=xt+Ct.length,At=Math.max(1,Math.ceil(qe.length/Fn)),jt=Math.min(oe,At),Mt=(jt-1)*Fn,Nt=qe.slice(Mt,Mt+Fn),Pt=qe.length===0?0:Mt+1,Ft=Mt+Nt.length,It=Math.max(1,Math.ceil(Je.length/In)),Lt=Math.min(xe,It),Rt=(Lt-1)*In,zt=Je.slice(Rt,Rt+In),Bt=Je.length===0?0:Rt+1,Vt=Rt+zt.length,Ht=Math.max(1,Math.ceil(ct.length/Ln)),Ut=Math.min(Ce,Ht),Wt=(Ut-1)*Ln,Gt=ct.slice(Wt,Wt+Ln),Kt=ct.length===0?0:Wt+1,qt=Wt+Gt.length,Jt=Math.max(1,Math.ceil(Et.length/Rn)),Yt=Math.min(we,Jt),Xt=(Yt-1)*Rn,Zt=Et.slice(Xt,Xt+Rn),Qt=Et.length===0?0:Xt+1,$t=Xt+Zt.length,en=Math.max(1,Math.ceil(Dt.length/zn)),tn=Math.min(Ee,en),nn=(tn-1)*zn,rn=Dt.slice(nn,nn+zn),an=Dt.length===0?0:nn+1,on=nn+rn.length,sn=e=>{ae(Math.min(Math.max(e,1),yt))},cn=e=>{se(Math.min(Math.max(e,1),At))},ln=e=>{Se(Math.min(Math.max(e,1),It))},un=e=>{R(Math.min(Math.max(e,1),Ht))},pn=e=>{Te(Math.min(Math.max(e,1),Jt))},mn=e=>{De(Math.min(Math.max(e,1),en))},hn=e=>{je(Math.min(Math.max(e,1),ft))},gn=e=>{Ne(Math.min(Math.max(e,1),et))},_n=e=>{m(e),ke(``),je(1)},vn=()=>{m(``),ke(``),je(1)},yn=e=>{ke(e.target.value),je(1)},bn=e=>{w(e),De(1)},xn=()=>{T||(S(!1),w(``),De(1))},Sn=()=>{ve(``),be(``),ae(1)},Cn=e=>{ve(e.target.value),ae(1)},wn=e=>{be(e.target.value),ae(1)},Tn=async(e,t)=>{let n=String(e??``).trim(),r=String(t??``).trim(),i=wt.filter(e=>String(e.schoolYear??``).trim()===n&&String(e.batchId??``).trim()===r);if(i.length!==0){E(!0);try{let e=[];for(let[t,n]of i.entries())try{let r=await rr(n,t);e.push(r)}catch(e){console.warn(e)}if(e.length===0)throw Error(`No School ID files could be downloaded for this batch.`);let t=lr(e),a=URL.createObjectURL(t),o=document.createElement(`a`),s=Zn(n,`school-year`),c=Zn(r,`batch`);o.href=a,o.download=`school-id-files-${s}-batch-${c}.zip`,o.rel=`noreferrer`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a),S(!1),w(``),De(1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to download School ID files.`)}finally{E(!1)}}},En=e=>{if(ze===void 0){window.alert(`Please wait while student account data is loading.`);return}let t=String(e??``).trim(),n=Ke.filter(e=>String(e.batchId??``).trim()===t);if(n.length===0){window.alert(`No records found for this batch.`);return}let r=new Map(Xe.map(e=>[String(e.schoolId??``).trim().toLowerCase(),e])),i=[[`Batch No.`,`Student ID`,`TES Award Number`,`Last Name`,`First Name`,`MI.`,`School Year`,`Status`,`Email Account`,`Phone No.`,`Current Address`,`Account Status`],...n.map(e=>{let t=r.get(String(e.studentId??``).trim().toLowerCase());return[e.batchId??``,e.studentId??``,e.tesAwardNumber??``,e.lastName??``,e.firstName??``,e.middleInitial??``,e.schoolYear??``,e.status??``,t?.email??``,t?.phoneNumber??``,t?.currentAddress??``,t?.status??`No student account`]})];Yn(`batch-info-${Zn(t,`batch`)}.csv`,i),v(!1)},Dn=e=>{if(Le===void 0){window.alert(`Please wait while applicant information is loading.`);return}let t=String(e??``).trim(),n=[[`Application Year`,`Course`,`Student ID`,`Last Name`,`First Name`,`Ext Name`,`Middle Name`,`Gender`,`Birth Date`,`Year`,`Father Last Name`,`Father First Name`,`Father Middle Name`,`Mother Last Name`,`Mother First Name`,`Mother Middle Name`,`Address`,`Zip Code`,`PWD ID`,`PWD ID PDF`,`4Ps ID PDF`,`Mobile No.`,`Email Address`,`Status`,`Submitted At`],...Ye.filter(e=>er(e)===Qe&&$n(e).toLowerCase()===t.toLowerCase()).map(e=>[er(e),$n(e)||t,e.studentId??``,e.lastName??``,e.firstName??``,e.extensionName??``,e.middleName??``,e.gender??``,e.birthDate??``,e.year??``,e.fatherLastName??``,e.fatherFirstName??``,e.fatherMiddleName??``,e.motherLastName??``,e.motherFirstName??``,e.motherMiddleName??``,e.address??``,e.zipCode??``,e.pwdId??``,e.pwdIdFileName??``,e.fourPsFileName??``,e.mobileNumber??``,e.emailAddress??``,e.status??``,qn(e.submittedAt)])],r=Zn(t,`course`);Yn(`unifast-applicants-${Zn(Qe,`application-year`)}-${r}.csv`,n)},On=()=>{if(Pe===void 0){window.alert(`Please wait while student requests are loading.`);return}if(qe.length===0){window.alert(`No student requests are available to export.`);return}let e=qn(Date.now()),t=[[`No.`,`Student ID`,`Last Name`,`First Name`,`MI`,`Email Account`,`Question / Request`,`Source`,`Status`,`Submitted At`,`Exported At`],...qe.map((t,n)=>[n+1,t.studentId??``,t.lastName??``,t.firstName??``,t.middleInitial??``,t.email??``,t.question??``,t.source??``,t.status??``,qn(t.submittedAt),e])];Yn(`student-requests-responses-${new Date().toISOString().slice(0,10)}.csv`,t)},kn=async()=>{if(!(ie||qe.length===0)&&window.confirm(`Clear all ${qe.length} Quick Action message${qe.length===1?``:`s`}? This cannot be undone.`)){F(!0);try{await We({}),se(1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to clear Quick Action messages.`)}finally{F(!1)}}},An=async(e,t)=>{try{let n=await Be({isReceivingApplicants:e,...t?{applicationYear:t}:{}});n.success||window.alert(n.message||`Unable to update applicant portal status.`)}catch(e){window.alert(e instanceof Error?e.message:`Unable to update applicant portal status.`)}},Nn=async e=>{await An(!0,e),f(!1),Ne(1)},Jn=()=>{c(!1),u(!1),f(!1),Ne(1),m(``),ke(``),je(1)},nr=()=>{R(1),M(``),b(!0)},ir=()=>{P||(b(!1),O(null))},ar=()=>{se(1),o(!0)},or=()=>{ee(null),j(``),M(``),ne(!1),g(!0)},sr=()=>{N||(g(!1),ee(null),j(``),ne(!1))},cr=()=>{he||(ue(null),fe(null),me(``))},H=e=>{ue(e),fe({no:e.no??``,tesAwardNumber:e.tesAwardNumber??``,studentId:e.studentId??``,lastName:e.lastName??``,firstName:e.firstName??``,middleInitial:e.middleInitial??``,batchId:e.batchId??``,status:e.status??``,semester:e.semester??``,schoolYear:e.schoolYear??``}),me(``)},ur=e=>t=>{me(``),fe(n=>({...n,[e]:t.target.value}))},dr=async e=>{if(e.preventDefault(),!(!L||!de)){if([`no`,`tesAwardNumber`,`studentId`,`lastName`,`firstName`,`batchId`,`status`,`semester`,`schoolYear`].some(e=>!String(de[e]??``).trim())){me(`Please complete all required fields before saving.`);return}ge(!0),me(`Saving changes...`);try{await He({id:L._id,...de}),me(`Record updated successfully.`),ue(null),fe(null)}catch(e){me(e instanceof Error?e.message:`Unable to update record.`)}finally{ge(!1)}}},pr=e=>{M(``),le(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},hr=async()=>{if(ce.length===0){M(`Please check at least one record before deleting.`);return}if(window.confirm(`Delete ${ce.length} checked record${ce.length===1?``:`s`}?`)){re(!0),M(`Deleting checked record...`);try{let e=await Ue({ids:ce});le([]),M(`${e?.deleted??ce.length} record${(e?.deleted??ce.length)===1?``:`s`} deleted successfully.`)}catch(e){M(e instanceof Error?e.message:`Unable to delete records.`)}finally{re(!1)}}};return(0,B.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;n(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,B.useEffect)(()=>{if(!Ge)return;let e=e=>{e.key===`Escape`&&(i(!1),o(!1),c(!1),u(!1),f(!1),Ne(1),m(``),ke(``),je(1),g(!1),v(!1),b(!1),O(null),S(!1),w(``),De(1),ee(null),j(``),ne(!1),ue(null))};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[Ge]),(0,V.jsxs)(`div`,{className:`admin-page`,children:[(0,V.jsx)(`style`,{children:mr}),(0,V.jsxs)(`header`,{className:`admin-topbar`,children:[(0,V.jsxs)(`div`,{className:`brand-lockup`,children:[(0,V.jsx)(`div`,{className:`brand-mark`,children:(0,V.jsx)(`img`,{alt:`IBACMI`,className:`brand-mark__image`,src:Mn})}),(0,V.jsxs)(`div`,{className:`brand-copy`,children:[(0,V.jsx)(`p`,{className:`brand-title`,children:`IBACMI`}),(0,V.jsx)(`p`,{className:`brand-subtitle`,children:`Scholarship Office`})]})]}),(0,V.jsxs)(`div`,{className:`header-actions`,children:[(0,V.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:()=>{Se(1),i(!0)},type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`history`}),`Logs`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:()=>c(!0),type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`folder_open`}),`UNIFAST PORTAL`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:ar,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`task_alt`}),`Quick Actions`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--admin`,onClick:e,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`logout`}),`Logout`]})]})]}),(0,V.jsx)(`main`,{className:`admin-main`,children:(0,V.jsxs)(`div`,{className:`admin-container`,children:[(0,V.jsxs)(`section`,{className:`admin-heading`,children:[(0,V.jsxs)(`div`,{className:`admin-heading__copy`,children:[(0,V.jsx)(`span`,{className:`admin-eyebrow`,children:`Grantee Management`}),(0,V.jsx)(`h1`,{children:`Grantee Management`}),(0,V.jsx)(`p`,{children:`Manage TES grantee records, review student requests, upload CSV records, and monitor scholarship information in one responsive workspace.`})]}),(0,V.jsxs)(`div`,{className:`admin-heading__actions`,children:[(0,V.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:st.length===0,onClick:()=>{R(1),v(!0)},title:st.length===0?`No batches available to export`:`Choose a batch to export student account info`,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`table_view`}),`Export to CSV Batch Info`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:wt.length===0,onClick:()=>{Te(1),S(!0)},title:wt.length===0?`No School ID files available to download`:`Choose a School Year to download School ID files`,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download School ID File`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--primary`,onClick:or,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`add`}),`Add New Record`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:st.length===0,onClick:nr,title:st.length===0?`No batches available to delete`:`Choose a batch to delete`,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`}),`Delete Batch`]})]})]}),(0,V.jsxs)(`section`,{className:`admin-stats-grid`,"aria-label":`Grantee summary`,children:[(0,V.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,V.jsx)(`span`,{children:`Total Records`}),(0,V.jsx)(`strong`,{children:Ke.length})]}),(0,V.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,V.jsx)(`span`,{children:`Filtered Results`}),(0,V.jsx)(`strong`,{children:z.length})]}),(0,V.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,V.jsx)(`span`,{children:`Checked Records`}),(0,V.jsx)(`strong`,{children:ce.length})]}),(0,V.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,V.jsx)(`span`,{children:`Student Requests`}),(0,V.jsx)(`strong`,{children:qe.length})]})]}),(0,V.jsxs)(`section`,{className:`admin-filter-panel`,"aria-label":`Grantee filters`,children:[(0,V.jsxs)(`div`,{className:`admin-search-field`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,V.jsx)(`input`,{placeholder:`Search by Student ID, award number, status, semester...`,type:`text`,value:_e,onChange:Cn})]}),(0,V.jsxs)(`select`,{value:ye,onChange:wn,children:[(0,V.jsx)(`option`,{value:``,children:`All Batches`}),st.map(e=>(0,V.jsx)(`option`,{value:e,children:e},e))]}),(0,V.jsx)(`button`,{className:`admin-filter-button`,type:`button`,"aria-label":`Reset filters`,title:`Reset filters`,onClick:Sn,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`refresh`})})]}),(0,V.jsxs)(`section`,{className:`admin-table-card`,"aria-label":`TDP grantee records`,children:[(0,V.jsx)(`div`,{className:`admin-table-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h2`,{children:`Grantee Records`}),(0,V.jsx)(`p`,{children:`Review, check, edit, or delete selected records.`})]})}),(0,V.jsx)(`div`,{className:`admin-table-scroll`,children:(0,V.jsxs)(`table`,{children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`No.`}),(0,V.jsx)(`th`,{children:`TES Award Number`}),(0,V.jsx)(`th`,{children:`Student ID`}),(0,V.jsx)(`th`,{children:`Last Name`}),(0,V.jsx)(`th`,{children:`First Name`}),(0,V.jsx)(`th`,{children:`MI.`}),(0,V.jsx)(`th`,{children:`Batch No.`}),(0,V.jsx)(`th`,{children:`Status`}),(0,V.jsx)(`th`,{children:`Semester`}),(0,V.jsx)(`th`,{children:`School Year`}),(0,V.jsx)(`th`,{children:`School ID File`}),(0,V.jsx)(`th`,{children:`Actions`})]})}),(0,V.jsxs)(`tbody`,{children:[Ie===void 0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`Loading grantee records...`})}),Ie?.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No grantee records yet. Upload a CSV file to add records.`})}),Ie&&Ie.length>0&&z.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No matching record found.`})}),Ct.map((e,t)=>(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{"data-label":`No.`,children:xt+t+1}),(0,V.jsx)(`td`,{className:`admin-award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,V.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,V.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`—`}),(0,V.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`—`}),(0,V.jsx)(`td`,{"data-label":`MI.`,children:e.middleInitial||`—`}),(0,V.jsx)(`td`,{className:`admin-batch-cell`,"data-label":`Batch No.`,children:e.batchId}),(0,V.jsx)(`td`,{"data-label":`Status`,children:(0,V.jsx)(Gn,{status:e.status,tone:Kn(e.status)})}),(0,V.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,V.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`}),(0,V.jsx)(`td`,{"data-label":`School ID File`,children:e.frontIdUrl?(0,V.jsx)(`a`,{className:`admin-file-link`,href:e.frontIdUrl,rel:`noreferrer`,target:`_blank`,children:`View file`}):(0,V.jsx)(`span`,{className:`admin-file-empty`,children:`No file`})}),(0,V.jsx)(`td`,{"data-label":`Actions`,children:(0,V.jsxs)(`div`,{className:`admin-row-actions`,children:[(0,V.jsx)(`button`,{className:`admin-edit-button`,type:`button`,onClick:()=>H(e),children:`Edit`}),(0,V.jsxs)(`label`,{className:`admin-checkbox-control`,children:[(0,V.jsx)(`input`,{type:`checkbox`,checked:ce.includes(e._id),onChange:()=>pr(e._id)}),(0,V.jsx)(`span`,{children:`Check`})]}),(0,V.jsx)(`button`,{className:`admin-delete-button`,type:`button`,disabled:P||!ce.includes(e._id),onClick:hr,children:`Delete`})]})})]},e._id))]})]})}),(0,V.jsxs)(`div`,{className:`admin-pagination`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Ot}),` to `,(0,V.jsx)(`strong`,{children:kt}),` of`,` `,(0,V.jsx)(`strong`,{children:z.length}),` results`]}),te&&(0,V.jsx)(`p`,{className:`admin-delete-message`,children:te})]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{type:`button`,disabled:bt===1||z.length===0,"aria-label":`Previous page`,onClick:()=>sn(bt-1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),St.map(e=>{if(typeof e==`string`)return(0,V.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e);let t=e;return(0,V.jsx)(`button`,{"aria-current":bt===t?`page`:void 0,className:bt===t?`admin-page-button--active`:void 0,disabled:z.length===0,onClick:()=>sn(t),type:`button`,children:t},t)}),(0,V.jsx)(`button`,{type:`button`,disabled:bt===yt||z.length===0,"aria-label":`Next page`,onClick:()=>sn(bt+1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]})}),r&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-logs-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close logs modal`,className:`admin-modal-backdrop`,onClick:()=>i(!1),type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Activity Logs`}),(0,V.jsx)(`h2`,{id:`admin-logs-title`,children:`System Activity Records`}),(0,V.jsx)(`p`,{children:`Review recent uploads, edits, deletes, student updates, and page actions.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close logs`,className:`admin-modal-close`,onClick:()=>i(!1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`div`,{className:`admin-logs-table-wrap`,children:(0,V.jsxs)(`table`,{className:`admin-logs-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`Date & Time`}),(0,V.jsx)(`th`,{children:`Action`}),(0,V.jsx)(`th`,{children:`Actor`}),(0,V.jsx)(`th`,{children:`Target`}),(0,V.jsx)(`th`,{children:`Summary`})]})}),(0,V.jsxs)(`tbody`,{children:[Fe===void 0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`Loading activity logs...`})}),Fe&&Je.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`No activity logs recorded yet.`})}),zt.map(e=>(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{"data-label":`Date & Time`,children:Un(e.createdAt)}),(0,V.jsx)(`td`,{"data-label":`Action`,children:(0,V.jsx)(`span`,{className:`admin-log-action`,children:e.action})}),(0,V.jsxs)(`td`,{"data-label":`Actor`,children:[(0,V.jsx)(`strong`,{children:e.actorName||e.actorId||e.actorRole}),(0,V.jsx)(`span`,{children:e.actorRole})]}),(0,V.jsxs)(`td`,{"data-label":`Target`,children:[(0,V.jsx)(`strong`,{children:e.targetLabel||e.targetType}),(0,V.jsx)(`span`,{children:e.targetType})]}),(0,V.jsx)(`td`,{"data-label":`Summary`,children:e.summary})]},e._id))]})]})}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-logs-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Bt}),` to `,(0,V.jsx)(`strong`,{children:Vt}),` of`,` `,(0,V.jsx)(`strong`,{children:Je.length}),` logs`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{type:`button`,disabled:Lt===1||Je.length===0,"aria-label":`Previous logs page`,onClick:()=>ln(Lt-1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:It},(e,t)=>{let n=t+1;return(0,V.jsx)(`button`,{className:Lt===n?`admin-page-button--active`:void 0,disabled:Je.length===0,onClick:()=>ln(n),type:`button`,children:n},n)}),(0,V.jsx)(`button`,{type:`button`,disabled:Lt===It||Je.length===0,"aria-label":`Next logs page`,onClick:()=>ln(Lt+1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),_&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-batch-export-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close batch export modal`,className:`admin-modal-backdrop`,onClick:()=>v(!1),type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Batch CSV Export`}),(0,V.jsx)(`h2`,{id:`admin-batch-export-title`,children:`Choose Batch`}),(0,V.jsx)(`p`,{children:`Export student account information for a specific batch using allinfo Student IDs.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close batch export`,className:`admin-modal-close`,onClick:()=>v(!1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`div`,{className:`admin-school-year-downloads`,children:Gt.map(({accountCount:e,batchId:t,recordCount:n})=>(0,V.jsxs)(`button`,{className:`admin-school-year-button`,disabled:ze===void 0,onClick:()=>En(t),type:`button`,children:[(0,V.jsx)(`span`,{children:t}),(0,V.jsx)(`strong`,{children:ze===void 0?`Loading accounts...`:`${n} records / ${e} accounts`})]},t))}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-batch-export-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Kt}),`-`,(0,V.jsx)(`strong`,{children:qt}),` `,`of `,(0,V.jsx)(`strong`,{children:ct.length}),` batches`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{disabled:Ut===1,onClick:()=>un(Ut-1),type:`button`,"aria-label":`Previous batch export page`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Ht},(e,t)=>{let n=t+1;return(0,V.jsx)(`button`,{"aria-current":Ut===n?`page`:void 0,className:Ut===n?`admin-page-button--active`:void 0,onClick:()=>un(n),type:`button`,children:n},n)}),(0,V.jsx)(`button`,{disabled:Ut===Ht,onClick:()=>un(Ut+1),type:`button`,"aria-label":`Next batch export page`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>v(!1),type:`button`,children:`Cancel`})})]})]}),y&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close batch delete modal`,className:`admin-modal-backdrop`,onClick:ir,type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Delete Batch`}),(0,V.jsx)(`h2`,{id:`admin-batch-delete-title`,children:`Choose Batch`}),(0,V.jsx)(`p`,{children:`Select a batch to delete all information records under that batch.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close batch delete`,className:`admin-modal-close`,disabled:P,onClick:ir,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`div`,{className:`admin-school-year-downloads`,children:Gt.map(({batchId:e,recordCount:t})=>(0,V.jsxs)(`button`,{className:`admin-school-year-button admin-school-year-button--danger`,disabled:P,onClick:()=>O({batchId:e,recordCount:t}),type:`button`,children:[(0,V.jsx)(`span`,{children:e}),(0,V.jsxs)(`strong`,{children:[t,` `,t===1?`record`:`records`]})]},e))}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-batch-export-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Kt}),`-`,(0,V.jsx)(`strong`,{children:qt}),` `,`of `,(0,V.jsx)(`strong`,{children:ct.length}),` batches`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{"aria-label":`Previous batch delete page`,disabled:Ut===1||P,onClick:()=>un(Ut-1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Ht},(e,t)=>{let n=t+1;return(0,V.jsx)(`button`,{"aria-current":Ut===n?`page`:void 0,className:Ut===n?`admin-page-button--active`:void 0,disabled:P,onClick:()=>un(n),type:`button`,children:n},n)}),(0,V.jsx)(`button`,{"aria-label":`Next batch delete page`,disabled:Ut===Ht||P,onClick:()=>un(Ut+1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:P,onClick:ir,type:`button`,children:`Cancel`})})]})]}),D&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-backdrop`,onClick:()=>{P||O(null)},type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-modal-card--applicant-years`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Confirm Delete`}),(0,V.jsx)(`h2`,{id:`admin-batch-delete-confirm-title`,children:`Delete this batch information?`}),(0,V.jsx)(`p`,{children:`Are you sure you want to delete this batch information?`})]}),(0,V.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-close`,disabled:P,onClick:()=>O(null),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-confirm-body`,children:[(0,V.jsx)(`strong`,{children:D.batchId}),(0,V.jsxs)(`p`,{children:[`This will permanently delete `,D.recordCount,` `,D.recordCount===1?`record`:`records`,` from this batch.`]})]}),(0,V.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:P,onClick:()=>O(null),type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:P,onClick:async()=>{if(!D)return;let e=D.batchId,t=Ke.filter(t=>String(t.batchId??``).trim()===e).map(e=>e._id);if(t.length===0){M(`No records found for this batch.`),O(null);return}re(!0),M(`Deleting batch ${e}...`);try{let n=await Ue({ids:t});le(e=>e.filter(e=>!t.includes(e))),M(`${n?.deleted??t.length} record${(n?.deleted??t.length)===1?``:`s`} deleted from batch ${e}.`),O(null),b(!1),ae(1)}catch(e){M(e instanceof Error?e.message:`Unable to delete batch records.`)}finally{re(!1)}},type:`button`,children:P?`Deleting...`:`Delete Batch`})]})]})]}),s&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-unifast-open-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-backdrop`,onClick:Jn,type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`UNIFAST Portal`}),(0,V.jsx)(`h2`,{id:`admin-unifast-open-title`,children:`Open the portal?`}),(0,V.jsx)(`p`,{children:`Do you want to open the portal for receiving applicants information?`})]}),(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-close`,onClick:Jn,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`div`,{className:`admin-confirm-body`,children:(0,V.jsx)(`p`,{children:`Select Yes to view applicants by course and prepare a course download.`})}),(0,V.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:Jn,type:`button`,children:`No`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>{c(!1),u(!0)},type:`button`,children:`Yes`})]})]})]}),l&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-unifast-courses-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-backdrop`,onClick:Jn,type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receiving Applicants Information`}),(0,V.jsx)(`h2`,{id:`admin-unifast-courses-title`,children:`Choose Course`}),(0,V.jsxs)(`p`,{children:[`Select a specific course to download applicant information for `,Qe,`.`]})]}),(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-close`,onClick:Jn,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-applicant-portal-controls`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Landing Portal Status`}),(0,V.jsx)(`strong`,{children:Re?.isReceivingApplicants?`Receiving ${Qe} applicants`:`Closed for applicants`})]}),(0,V.jsxs)(`div`,{className:`admin-applicant-portal-actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:Re===void 0||Re?.isReceivingApplicants,onClick:()=>{Ne(1),f(!0)},type:`button`,children:`Receive Applicants`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Re===void 0||!Re?.isReceivingApplicants,onClick:()=>An(!1),type:`button`,children:`Close Applicants`})]})]}),(0,V.jsx)(`div`,{className:`admin-school-year-downloads admin-course-downloads`,children:lt.map(({applicantCount:e,course:t})=>(0,V.jsxs)(`button`,{className:`admin-school-year-button`,disabled:Le===void 0,onClick:()=>_n(t),type:`button`,children:[(0,V.jsx)(`span`,{children:t}),(0,V.jsx)(`strong`,{children:Le===void 0?`Loading...`:`${e} ${e===1?`applicant`:`applicants`}`})]},t))}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:Jn,type:`button`,children:`Cancel`})})]})]}),d&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-applicant-year-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-backdrop`,onClick:()=>{f(!1),Ne(1)},type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receive Applicants`}),(0,V.jsx)(`h2`,{id:`admin-applicant-year-title`,children:`Choose Application Year`}),(0,V.jsx)(`p`,{children:`Select the year for the new applicant cycle. Counts and downloads will use this year.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-close`,onClick:()=>{f(!1),Ne(1)},type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`div`,{className:`admin-year-options`,children:rt.map(e=>(0,V.jsxs)(`button`,{className:`admin-year-option`,onClick:()=>Nn(e),type:`button`,children:[(0,V.jsx)(`span`,{children:e}),(0,V.jsxs)(`strong`,{children:[Ye.filter(t=>er(t)===e).length,` `,`existing applicants`]})]},e))}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-applicant-year-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:at}),` to`,` `,(0,V.jsx)(`strong`,{children:ot}),` of`,` `,(0,V.jsx)(`strong`,{children:$e.length}),` years`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{"aria-label":`Previous application years page`,disabled:tt===1||$e.length===0,onClick:()=>gn(tt-1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),it.map(e=>typeof e==`number`?(0,V.jsx)(`button`,{className:tt===e?`admin-page-button--active`:void 0,disabled:$e.length===0,onClick:()=>gn(e),type:`button`,children:e},e):(0,V.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,V.jsx)(`button`,{"aria-label":`Next application years page`,disabled:tt===et||$e.length===0,onClick:()=>gn(tt+1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>{f(!1),Ne(1)},type:`button`,children:`Cancel`})})]})]}),p&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-course-applicants-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-backdrop`,onClick:vn,type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-course-applicants-modal`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Course Applicants Information`}),(0,V.jsx)(`h2`,{id:`admin-course-applicants-title`,children:`Applicants Table`}),(0,V.jsxs)(`p`,{children:[p,` applicants for `,Qe,`.`]})]}),(0,V.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-close`,onClick:vn,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-course-applicants-toolbar`,children:[(0,V.jsxs)(`div`,{className:`admin-search-field admin-course-applicant-search`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,V.jsx)(`input`,{"aria-label":`Search course applicants`,placeholder:`Search applicant name, ID, email, mobile, status...`,type:`search`,value:Oe,onChange:yn})]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:Le===void 0||ut.length===0,onClick:()=>Dn(p),type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download All Applicants Info`]})]}),(0,V.jsxs)(`div`,{className:`admin-course-applicants-summary`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Total Course Applicants`}),(0,V.jsx)(`strong`,{children:ut.length})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Filtered Results`}),(0,V.jsx)(`strong`,{children:dt.length})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Rows Per Page`}),(0,V.jsx)(`strong`,{children:Bn})]})]}),(0,V.jsx)(`div`,{className:`admin-course-applicants-table-wrap`,children:(0,V.jsxs)(`table`,{className:`admin-course-applicants-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`No.`}),(0,V.jsx)(`th`,{children:`Student ID`}),(0,V.jsx)(`th`,{children:`Applicant Name`}),(0,V.jsx)(`th`,{children:`Gender`}),(0,V.jsx)(`th`,{children:`Birth Date`}),(0,V.jsx)(`th`,{children:`Year`}),(0,V.jsx)(`th`,{children:`Mobile No.`}),(0,V.jsx)(`th`,{children:`Email Address`}),(0,V.jsx)(`th`,{children:`Address`}),(0,V.jsx)(`th`,{children:`PSA`}),(0,V.jsx)(`th`,{children:`School ID`}),(0,V.jsx)(`th`,{children:`PWD ID PDF`}),(0,V.jsx)(`th`,{children:`4Ps ID PDF`}),(0,V.jsx)(`th`,{children:`Status`}),(0,V.jsx)(`th`,{children:`Submitted`})]})}),(0,V.jsxs)(`tbody`,{children:[Le===void 0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:15,children:`Loading applicants...`})}),Le!==void 0&&dt.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:15,children:`No applicants found for this course.`})}),ht.map((e,t)=>{let n=[e.firstName,e.middleName,e.lastName,e.extensionName].filter(Boolean).join(` `)||`No name`;return(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{"data-label":`No.`,children:mt+t+1}),(0,V.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,V.jsx)(`td`,{className:`admin-applicant-name`,"data-label":`Applicant Name`,children:n}),(0,V.jsx)(`td`,{"data-label":`Gender`,children:e.gender}),(0,V.jsx)(`td`,{"data-label":`Birth Date`,children:e.birthDate}),(0,V.jsx)(`td`,{"data-label":`Year`,children:e.year}),(0,V.jsx)(`td`,{"data-label":`Mobile No.`,children:e.mobileNumber}),(0,V.jsx)(`td`,{className:`admin-applicant-email`,"data-label":`Email Address`,children:e.emailAddress}),(0,V.jsx)(`td`,{className:`admin-applicant-address`,"data-label":`Address`,children:e.address}),(0,V.jsx)(`td`,{"data-label":`PSA`,children:e.psaFileUrl?(0,V.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.psaFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`}),`View PSA`]}):(0,V.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,V.jsx)(`td`,{"data-label":`School ID`,children:e.schoolIdFileUrl?(0,V.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.schoolIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`}),`View School ID`]}):(0,V.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,V.jsx)(`td`,{"data-label":`PWD ID PDF`,children:e.pwdIdFileUrl?(0,V.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.pwdIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`}),`View PWD ID`]}):(0,V.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,V.jsx)(`td`,{"data-label":`4Ps ID PDF`,children:e.fourPsFileUrl?(0,V.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.fourPsFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`}),`View 4Ps ID`]}):(0,V.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,V.jsx)(`td`,{"data-label":`Status`,children:(0,V.jsx)(Gn,{status:e.status,tone:Kn(e.status)})}),(0,V.jsx)(`td`,{"data-label":`Submitted`,children:qn(e.submittedAt)})]},e._id)})]})]})}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-course-applicants-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:_t}),` to`,` `,(0,V.jsx)(`strong`,{children:vt}),` of`,` `,(0,V.jsx)(`strong`,{children:dt.length}),` applicants`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{"aria-label":`Previous course applicants page`,disabled:pt===1||dt.length===0,onClick:()=>hn(pt-1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),gt.map(e=>typeof e==`number`?(0,V.jsx)(`button`,{className:pt===e?`admin-page-button--active`:void 0,disabled:dt.length===0,onClick:()=>hn(e),type:`button`,children:e},e):(0,V.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,V.jsx)(`button`,{"aria-label":`Next course applicants page`,disabled:pt===ft||dt.length===0,onClick:()=>hn(pt+1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:vn,type:`button`,children:`Close`})})]})]}),x&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-school-id-download-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close School ID download modal`,className:`admin-modal-backdrop`,onClick:xn,type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,V.jsx)(`h2`,{id:`admin-school-id-download-title`,children:`Choose School Year`}),(0,V.jsx)(`p`,{children:`Download all uploaded School ID files for a specific School Year.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close School ID download`,className:`admin-modal-close`,disabled:T,onClick:xn,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`div`,{className:`admin-school-year-downloads`,children:Zt.map(({fileCount:e,schoolYear:t})=>(0,V.jsxs)(`button`,{className:`admin-school-year-button`,disabled:T,onClick:()=>bn(t),type:`button`,children:[(0,V.jsx)(`span`,{children:t}),(0,V.jsx)(`strong`,{children:T?`Preparing...`:`${e} ${e===1?`file`:`files`}`})]},t))}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Qt}),`-`,(0,V.jsx)(`strong`,{children:$t}),` of`,` `,(0,V.jsx)(`strong`,{children:Et.length}),` school years`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{"aria-label":`Previous School ID page`,disabled:Yt===1||T,onClick:()=>pn(Yt-1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Jt},(e,t)=>{let n=t+1;return(0,V.jsx)(`button`,{"aria-current":Yt===n?`page`:void 0,className:Yt===n?`admin-page-button--active`:void 0,disabled:T,onClick:()=>pn(n),type:`button`,children:n},n)}),(0,V.jsx)(`button`,{"aria-label":`Next School ID page`,disabled:Yt===Jt||T,onClick:()=>pn(Yt+1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:T,onClick:xn,type:`button`,children:`Cancel`})})]})]}),C&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-school-id-batch-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close School ID batch modal`,className:`admin-modal-backdrop`,onClick:()=>{T||w(``)},type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,V.jsx)(`h2`,{id:`admin-school-id-batch-title`,children:`Choose Batch`}),(0,V.jsxs)(`p`,{children:[`Download uploaded School ID files for `,C,` by batch. File names include Student ID, last name, first name, middle name, and batch no.`]})]}),(0,V.jsx)(`button`,{"aria-label":`Close School ID batch download`,className:`admin-modal-close`,disabled:T,onClick:()=>w(``),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-school-year-downloads`,children:[rn.map(({batchId:e,fileCount:t})=>(0,V.jsxs)(`button`,{className:`admin-school-year-button`,disabled:T,onClick:()=>Tn(C,e),type:`button`,children:[(0,V.jsx)(`span`,{children:e}),(0,V.jsx)(`strong`,{children:T?`Preparing...`:`${t} ${t===1?`file`:`files`}`})]},e)),Dt.length===0&&(0,V.jsx)(`div`,{className:`admin-modal-empty-state`,children:`No batches with uploaded School ID files were found for this School Year.`})]}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:an}),`-`,(0,V.jsx)(`strong`,{children:on}),` of`,` `,(0,V.jsx)(`strong`,{children:Dt.length}),` batches`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{"aria-label":`Previous School ID batch page`,disabled:tn===1||T,onClick:()=>mn(tn-1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:en},(e,t)=>{let n=t+1;return(0,V.jsx)(`button`,{"aria-current":tn===n?`page`:void 0,className:tn===n?`admin-page-button--active`:void 0,disabled:T,onClick:()=>mn(n),type:`button`,children:n},n)}),(0,V.jsx)(`button`,{"aria-label":`Next School ID batch page`,disabled:tn===en||T,onClick:()=>mn(tn+1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:T,onClick:()=>w(``),type:`button`,children:`Back`})})]})]}),L&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-edit-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close edit record modal`,className:`admin-modal-backdrop`,onClick:cr,type:`button`}),(0,V.jsxs)(`form`,{className:`admin-modal-card admin-modal-card--edit`,onSubmit:dr,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header admin-modal-header--edit`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Edit Record`}),(0,V.jsx)(`h2`,{id:`admin-edit-record-title`,children:`Edit Grantee Information`}),(0,V.jsx)(`p`,{children:`Update the selected grantee record details.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close edit record`,className:`admin-modal-close`,disabled:he,onClick:cr,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-edit-summary`,children:[(0,V.jsx)(`div`,{className:`admin-edit-summary__icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`person`})}),(0,V.jsxs)(`div`,{className:`admin-edit-summary__text`,children:[(0,V.jsx)(`span`,{children:`Selected Record`}),(0,V.jsx)(`strong`,{children:L.studentId||`No Student ID`}),(0,V.jsx)(Gn,{status:L.status,tone:Kn(L.status)})]})]}),(0,V.jsxs)(`div`,{className:`admin-record-details admin-record-details--responsive`,children:[(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`No.`}),(0,V.jsx)(`input`,{value:de?.no??``,onChange:ur(`no`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`TES Award Number`}),(0,V.jsx)(`input`,{value:de?.tesAwardNumber??``,onChange:ur(`tesAwardNumber`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`Student ID`}),(0,V.jsx)(`input`,{value:de?.studentId??``,onChange:ur(`studentId`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`Last Name`}),(0,V.jsx)(`input`,{value:de?.lastName??``,onChange:ur(`lastName`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`First Name`}),(0,V.jsx)(`input`,{value:de?.firstName??``,onChange:ur(`firstName`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`MI.`}),(0,V.jsx)(`input`,{value:de?.middleInitial??``,onChange:ur(`middleInitial`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`Batch No.`}),(0,V.jsx)(`input`,{value:de?.batchId??``,onChange:ur(`batchId`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`Status`}),(0,V.jsxs)(`select`,{value:de?.status??``,onChange:ur(`status`),children:[(0,V.jsx)(`option`,{value:``,children:`Select Status`}),(0,V.jsx)(`option`,{children:`Grantee`}),(0,V.jsx)(`option`,{children:`Validated`}),(0,V.jsx)(`option`,{children:`Pending`}),(0,V.jsx)(`option`,{children:`Rejected`})]})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`Semester`}),(0,V.jsx)(`input`,{value:de?.semester??``,onChange:ur(`semester`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`School Year`}),(0,V.jsx)(`input`,{value:de?.schoolYear??``,onChange:ur(`schoolYear`)})]})]}),pe&&(0,V.jsx)(`p`,{className:`admin-edit-message`,children:pe}),(0,V.jsxs)(`div`,{className:`admin-upload-actions admin-upload-actions--sticky`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:he,onClick:cr,type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:he,type:`submit`,children:he?`Saving...`:`Save Changes`})]})]})]}),h&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-add-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close add record modal`,className:`admin-modal-backdrop`,onClick:sr,type:`button`}),(0,V.jsxs)(`form`,{className:`admin-modal-card`,onSubmit:async e=>{if(e.preventDefault(),!k){j(`Select a CSV file before uploading.`);return}if(!k.name.toLowerCase().endsWith(`.csv`)){j(`Please upload the downloaded CSV template file.`);return}ne(!0),j(`Reading file...`);try{let e=fr(await k.text());if(e.length===0){j(`No valid rows found. Use the CSV template headers and add record values.`);return}let t=await Ve({records:e});j(`${t.inserted} record${t.inserted===1?``:`s`} saved to allinfo.`),ee(null)}catch(e){j(e instanceof Error?e.message:`Unable to upload records.`)}finally{ne(!1)}},children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Add New Record`}),(0,V.jsx)(`h2`,{id:`admin-add-record-title`,children:`Upload CSV File`}),(0,V.jsx)(`p`,{children:`Use the required template format before uploading grantee records.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close add record`,className:`admin-modal-close`,disabled:N,onClick:sr,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-upload-body`,children:[(0,V.jsxs)(`button`,{className:`admin-button admin-button--secondary`,onClick:Xn,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download CSV Template`]}),(0,V.jsxs)(`label`,{className:`admin-upload-dropzone`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload_file`}),(0,V.jsx)(`strong`,{children:k?k.name:`Choose CSV file`}),(0,V.jsx)(`span`,{children:`Accepted format: downloaded CSV template`}),(0,V.jsx)(`input`,{accept:`.csv,text/csv`,disabled:N,onChange:e=>{let t=e.target.files?.[0]??null;ee(t),j(t?`${t.name} is ready to upload.`:``)},type:`file`})]}),(0,V.jsx)(`div`,{className:`admin-template-preview`,"aria-label":`CSV template headers`,children:Wn.map(e=>(0,V.jsx)(`span`,{children:e},e))}),A&&(0,V.jsx)(`p`,{className:`admin-upload-message`,children:A})]}),(0,V.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:N,onClick:sr,type:`button`,children:`Cancel`}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:N,type:`submit`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload`}),N?`Uploading...`:`Upload`]})]})]})]}),a&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-quick-actions-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close quick actions modal`,className:`admin-modal-backdrop`,onClick:()=>o(!1),type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Quick Actions`}),(0,V.jsx)(`h2`,{id:`admin-quick-actions-title`,children:`Student Requests`}),(0,V.jsx)(`p`,{children:`Review submitted questions and requests from the student portal.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close quick actions`,className:`admin-modal-close`,onClick:()=>o(!1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-quick-actions-summary`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Total Requests`}),(0,V.jsx)(`strong`,{children:Pe?.length??0})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Source`}),(0,V.jsx)(`strong`,{children:`Student Portal`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Status`}),(0,V.jsx)(`strong`,{children:`Live Data`})]})]}),(0,V.jsxs)(`div`,{className:`admin-quick-actions-toolbar`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Export Report`}),(0,V.jsx)(`strong`,{children:`Download all student responses with email accounts.`})]}),(0,V.jsxs)(`div`,{className:`admin-quick-actions-toolbar__actions`,children:[(0,V.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:Pe===void 0||qe.length===0||ie,onClick:On,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Export All Responses`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:Pe===void 0||qe.length===0||ie,onClick:kn,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_sweep`}),ie?`Clearing...`:`Clear All Messages`]})]})]}),(0,V.jsx)(`div`,{className:`admin-quick-actions-table-wrap`,children:(0,V.jsxs)(`table`,{className:`admin-quick-actions-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`No.`}),(0,V.jsx)(`th`,{children:`Student Details`}),(0,V.jsx)(`th`,{children:`Email Account`}),(0,V.jsx)(`th`,{children:`Question`}),(0,V.jsx)(`th`,{children:`Source`}),(0,V.jsx)(`th`,{children:`Status`}),(0,V.jsx)(`th`,{children:`Submitted`})]})}),(0,V.jsxs)(`tbody`,{children:[Pe===void 0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:7,children:`Loading quick actions...`})}),Pe?.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:7,children:`No quick action requests yet.`})}),Nt.map((e,t)=>(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{"data-label":`No.`,children:Mt+t+1}),(0,V.jsxs)(`td`,{className:`admin-request-student`,"data-label":`Student Details`,children:[(0,V.jsx)(`strong`,{children:Qn(e)||`Not provided`}),(0,V.jsx)(`span`,{children:e.studentId||`No Student ID`})]}),(0,V.jsx)(`td`,{className:`admin-request-email`,"data-label":`Email Account`,children:e.email}),(0,V.jsx)(`td`,{className:`admin-request-question`,"data-label":`Question`,children:e.question}),(0,V.jsx)(`td`,{"data-label":`Source`,children:e.source}),(0,V.jsx)(`td`,{"data-label":`Status`,children:(0,V.jsx)(Gn,{status:e.status,tone:Kn(e.status)})}),(0,V.jsx)(`td`,{"data-label":`Submitted`,children:qn(e.submittedAt)})]},e._id))]})]})}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-quick-actions-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Pt}),` to`,` `,(0,V.jsx)(`strong`,{children:Ft}),` of`,` `,(0,V.jsx)(`strong`,{children:qe.length}),` requests`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{type:`button`,disabled:jt===1||qe.length===0,"aria-label":`Previous quick actions page`,onClick:()=>cn(jt-1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:At},(e,t)=>{let n=t+1;return(0,V.jsx)(`button`,{className:jt===n?`admin-page-button--active`:void 0,disabled:qe.length===0,onClick:()=>cn(n),type:`button`,children:n},n)}),(0,V.jsx)(`button`,{type:`button`,disabled:jt===At||qe.length===0,"aria-label":`Next quick actions page`,onClick:()=>cn(jt+1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),(0,V.jsx)(`div`,{className:`admin-scroll-progress`,style:{"--admin-scroll":t}})]})}var mr=`
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

.admin-page {
  --admin-background: #fcf9f8;
  --admin-surface: #ffffff;
  --admin-surface-low: #f7f2ef;
  --admin-surface-mid: #f0e7e1;
  --admin-text: #1c1917;
  --admin-muted: #665348;
  --admin-primary: #f97316;
  --admin-primary-dark: #9d4300;
  --admin-outline: #e7cfc2;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(249, 115, 22, 0.14), transparent 34rem),
    var(--admin-background);
  color: var(--admin-text);
  font-family: 'Hanken Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.admin-page *,
.admin-page *::before,
.admin-page *::after {
  box-sizing: border-box;
}

.admin-page .material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
  vertical-align: middle;
}

.admin-topbar {
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid rgba(231, 207, 194, 0.88);
  background: rgba(255, 255, 255, 0.92);
  padding: 12px clamp(16px, 3vw, 32px);
  box-shadow: 0 8px 24px rgba(28, 25, 23, 0.06);
  backdrop-filter: blur(14px);
}

.brand-lockup {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: flex;
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(224, 192, 177, 0.9);
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 8px 18px rgba(28, 25, 23, 0.08);
}

.brand-mark__image {
  width: 42px;
  height: 42px;
  object-fit: cover;
}

.brand-copy {
  min-width: 0;
  line-height: 1.1;
}

.brand-title,
.brand-subtitle {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.brand-title {
  color: var(--admin-text);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.brand-subtitle {
  margin-top: 3px;
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 700;
}

.header-actions {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}

.admin-button,
.admin-filter-button,
.admin-pagination__buttons button {
  border: 0;
  cursor: pointer;
  font: inherit;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease,
    box-shadow 160ms ease;
}

.admin-button {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 800;
  white-space: nowrap;
}

.admin-button:hover {
  transform: translateY(-1px);
}

.admin-button--primary {
  background: var(--admin-primary);
  color: #ffffff;
  box-shadow: 0 10px 22px rgba(249, 115, 22, 0.22);
}

.admin-button--primary:hover {
  background: #c2410c;
}

.admin-button--secondary,
.admin-button--ghost,
.admin-button--admin {
  border: 1px solid var(--admin-outline);
  background: #ffffff;
  color: var(--admin-text);
}

.admin-button--danger {
  border: 1px solid #fecaca;
  background: #fff1f2;
  color: #991b1b;
}

.admin-button--secondary:hover,
.admin-button--ghost:hover,
.admin-button--admin:hover {
  background: #fff7ed;
  color: var(--admin-primary-dark);
}

.admin-button--danger:hover {
  border-color: #fca5a5;
  background: #fee2e2;
  color: #7f1d1d;
}

.admin-button:disabled,
.admin-modal-close:disabled {
  cursor: not-allowed;
  opacity: 0.55;
  transform: none;
}

.admin-main {
  min-height: calc(100vh - 72px);
  padding: clamp(24px, 4vw, 40px) clamp(14px, 3vw, 32px) 40px;
}

.admin-container {
  width: min(100%, 1440px);
  margin: 0 auto;
}

.admin-heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 24px;
  margin-bottom: 24px;
}

.admin-heading__actions {
  display: grid;
  grid-template-columns: repeat(4, minmax(190px, 1fr));
  align-items: stretch;
  gap: 12px;
  width: min(100%, 1068px);
}

.admin-heading__actions .admin-button {
  width: 100%;
  min-height: 62px;
  padding: 13px 22px;
}

.admin-heading__actions .material-symbols-outlined {
  font-size: 25px;
}

.admin-heading__copy {
  display: grid;
  gap: 8px;
}

.admin-eyebrow {
  width: fit-content;
  border-radius: 999px;
  background: rgba(249, 115, 22, 0.12);
  color: var(--admin-primary-dark);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  padding: 6px 10px;
  text-transform: uppercase;
}

.admin-heading h1,
.admin-heading p,
.admin-pagination p,
.admin-table-header h2,
.admin-table-header p {
  margin: 0;
}

.admin-heading h1 {
  font-size: clamp(30px, 5vw, 46px);
  font-weight: 800;
  line-height: 1.05;
}

.admin-heading p {
  max-width: 700px;
  color: var(--admin-muted);
  font-size: 16px;
  line-height: 1.6;
}

.admin-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}

.admin-stat-card {
  display: grid;
  gap: 6px;
  border: 1px solid rgba(231, 207, 194, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.9);
  padding: 18px;
  box-shadow: 0 12px 28px rgba(28, 25, 23, 0.05);
}

.admin-stat-card span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.admin-stat-card strong {
  color: var(--admin-text);
  font-size: 26px;
  font-weight: 800;
}

.admin-filter-panel {
  display: grid;
  grid-template-columns: minmax(240px, 1fr) minmax(180px, 260px) 48px;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  border: 1px solid rgba(231, 207, 194, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.92);
  padding: 14px;
  box-shadow: 0 12px 28px rgba(28, 25, 23, 0.05);
}

.admin-search-field {
  position: relative;
  min-width: 0;
}

.admin-search-field .material-symbols-outlined {
  position: absolute;
  top: 50%;
  left: 14px;
  color: var(--admin-muted);
  transform: translateY(-50%);
}

.admin-search-field input,
.admin-filter-panel select {
  width: 100%;
  min-height: 46px;
  border: 1px solid var(--admin-outline);
  border-radius: 12px;
  background: #ffffff;
  color: var(--admin-text);
  font: inherit;
  font-size: 14px;
  transition: border-color 160ms ease, box-shadow 160ms ease;
}

.admin-search-field input {
  padding: 10px 14px 10px 46px;
}

.admin-filter-panel select {
  padding: 10px 14px;
}

.admin-search-field input:focus,
.admin-filter-panel select:focus {
  border-color: var(--admin-primary);
  outline: none;
  box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.16);
}

.admin-filter-button {
  display: inline-flex;
  width: 48px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--admin-outline);
  border-radius: 12px;
  background: var(--admin-surface-low);
  color: var(--admin-muted);
}

.admin-filter-button:hover {
  background: #fff7ed;
  color: var(--admin-primary-dark);
}

.admin-table-card {
  overflow: hidden;
  border: 1px solid rgba(231, 207, 194, 0.95);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 16px 38px rgba(28, 25, 23, 0.08);
}

.admin-table-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--admin-outline);
  background: linear-gradient(135deg, #ffffff, #fff7ed);
  padding: 18px 22px;
}

.admin-table-header h2 {
  font-size: 18px;
  font-weight: 800;
}

.admin-table-header p {
  margin-top: 4px;
  color: var(--admin-muted);
  font-size: 14px;
}

.admin-table-scroll {
  overflow-x: auto;
  overscroll-behavior-x: contain;
}

.admin-table-scroll::-webkit-scrollbar {
  height: 10px;
}

.admin-table-scroll::-webkit-scrollbar-track {
  background: var(--admin-surface-low);
}

.admin-table-scroll::-webkit-scrollbar-thumb {
  border: 2px solid var(--admin-surface-low);
  border-radius: 999px;
  background: rgba(102, 83, 72, 0.45);
}

.admin-table-card table {
  width: 100%;
  min-width: 1460px;
  border-collapse: collapse;
  text-align: left;
}

.admin-table-card thead tr {
  border-bottom: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
}

.admin-table-card tbody tr {
  border-bottom: 1px solid rgba(231, 207, 194, 0.75);
  transition: background-color 160ms ease;
}

.admin-table-card tbody tr:hover {
  background: #fffaf5;
}

.admin-table-card tbody tr:last-child {
  border-bottom: 0;
}

.admin-table-card th,
.admin-table-card td {
  padding: 16px 22px;
  color: var(--admin-muted);
  font-size: 14px;
  vertical-align: middle;
}

.admin-table-card th {
  color: var(--admin-text);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.admin-award-cell,
.admin-batch-cell {
  color: var(--admin-text);
  font-weight: 700;
}

.admin-award-cell {
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.admin-file-link {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  border: 1px solid var(--admin-primary);
  border-radius: 12px;
  color: var(--admin-primary-dark);
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
  transition: background 160ms ease, color 160ms ease;
}

.admin-file-link:hover {
  background: #fff7ed;
  color: var(--admin-primary);
}

.admin-file-empty {
  color: var(--admin-muted);
  font-size: 13px;
  font-weight: 700;
}

.admin-status {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
}

.admin-status__dot {
  width: 6px;
  height: 6px;
  margin-right: 6px;
  border-radius: 50%;
}

.admin-status--grantee,
.admin-status--validated {
  background: #ecfdf5;
  color: #047857;
  box-shadow: inset 0 0 0 1px #a7f3d0;
}

.admin-status--grantee .admin-status__dot,
.admin-status--validated .admin-status__dot {
  background: #10b981;
}

.admin-status--applicant,
.admin-status--pending {
  background: #fff7ed;
  color: #c2410c;
  box-shadow: inset 0 0 0 1px #fed7aa;
}

.admin-status--applicant .admin-status__dot,
.admin-status--pending .admin-status__dot {
  background: #f97316;
}

.admin-status--rejected {
  background: #fef2f2;
  color: #b91c1c;
  box-shadow: inset 0 0 0 1px #fecaca;
}

.admin-status--rejected .admin-status__dot {
  background: #ef4444;
}

.admin-row-actions {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: max-content;
}

.admin-edit-button,
.admin-delete-button {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 800;
  padding: 7px 12px;
  transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease;
}

.admin-edit-button {
  border: 1px solid var(--admin-primary);
  background: #ffffff;
  color: var(--admin-primary-dark);
}

.admin-edit-button:hover {
  background: rgba(249, 115, 22, 0.1);
}

.admin-delete-button {
  border: 1px solid #b91c1c;
  background: #ffffff;
  color: #b91c1c;
}

.admin-delete-button:hover:not(:disabled) {
  background: #fef2f2;
}

.admin-delete-button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.admin-checkbox-control {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--admin-muted);
  cursor: pointer;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
}

.admin-checkbox-control input {
  width: 16px;
  height: 16px;
  accent-color: var(--admin-primary);
  cursor: pointer;
}

.admin-delete-message {
  margin-top: 6px !important;
  color: var(--admin-primary-dark) !important;
  font-size: 13px !important;
  font-weight: 800;
}

.admin-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
  padding: 16px 22px;
}

.admin-pagination p {
  color: var(--admin-muted);
  font-size: 14px;
}

.admin-pagination p strong {
  color: var(--admin-text);
  font-weight: 800;
}

.admin-pagination__buttons {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
}

.admin-pagination__buttons button {
  display: inline-flex;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--admin-outline);
  border-radius: 12px;
  background: #ffffff;
  color: var(--admin-muted);
  font-size: 14px;
  font-weight: 800;
}

.admin-pagination__buttons button:disabled {
  cursor: not-allowed;
  opacity: 0.35;
}

.admin-pagination__ellipsis {
  display: inline-flex;
  width: 32px;
  height: 40px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: var(--admin-text);
  font-size: 14px;
  font-weight: 800;
}

.admin-pagination__buttons .admin-page-button--active {
  border-color: var(--admin-primary);
  background: var(--admin-primary);
  color: #ffffff;
}

.admin-empty-state {
  height: 160px;
  color: var(--admin-muted);
  font-weight: 800;
  text-align: center;
  vertical-align: middle;
}

.admin-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 70;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(28, 25, 23, 0.52);
  padding: 24px;
  backdrop-filter: blur(8px);
}

.admin-modal-backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  cursor: default;
}

.admin-modal-card {
  position: relative;
  width: min(100%, 720px);
  max-height: min(760px, calc(100vh - 48px));
  overflow: hidden;
  border: 1px solid var(--admin-outline);
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 24px 70px rgba(28, 25, 23, 0.25);
}

.admin-modal-card--edit {
  display: flex;
  width: min(100%, 860px);
  max-height: calc(100vh - 48px);
  flex-direction: column;
}

.admin-modal-card--wide {
  width: min(100%, 1120px);
}

.admin-modal-card--compact {
  width: min(100%, 560px);
}

.admin-modal-card--applicant-years {
  display: flex;
  flex-direction: column;
  max-height: min(820px, calc(100vh - 32px));
}

.admin-modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid var(--admin-outline);
  background: linear-gradient(135deg, #ffffff, #fff7ed);
  padding: 22px 24px;
}

.admin-modal-kicker,
.admin-modal-header h2,
.admin-modal-header p {
  margin: 0;
}

.admin-modal-kicker {
  color: var(--admin-primary-dark);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.admin-modal-header h2 {
  margin-top: 4px;
  color: var(--admin-text);
  font-size: 24px;
  font-weight: 800;
  line-height: 1.15;
}

.admin-modal-header p {
  margin-top: 8px;
  color: var(--admin-muted);
  font-size: 14px;
  line-height: 1.55;
}

.admin-modal-close {
  display: inline-flex;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--admin-outline);
  border-radius: 12px;
  background: #ffffff;
  color: var(--admin-muted);
  cursor: pointer;
}

.admin-modal-close:hover {
  background: #fff7ed;
  color: var(--admin-primary-dark);
}

.admin-school-year-downloads {
  display: grid;
  gap: 12px;
  padding: 22px 24px;
}

.admin-applicant-portal-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--admin-outline);
  background: #fffaf5;
  padding: 16px 24px;
}

.admin-applicant-portal-controls span,
.admin-applicant-portal-controls strong {
  display: block;
}

.admin-applicant-portal-controls span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.admin-applicant-portal-controls strong {
  margin-top: 3px;
  color: var(--admin-text);
  font-size: 15px;
  font-weight: 900;
}

.admin-applicant-portal-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
}

.admin-course-downloads {
  max-height: min(520px, calc(100vh - 260px));
  overflow-y: auto;
}

.admin-confirm-body {
  display: grid;
  gap: 8px;
  padding: 22px 24px;
}

.admin-confirm-body p,
.admin-confirm-body strong {
  margin: 0;
}

.admin-confirm-body p {
  color: var(--admin-muted);
  font-size: 14px;
  line-height: 1.55;
}

.admin-confirm-body strong {
  color: var(--admin-text);
  font-size: 15px;
  line-height: 1.45;
}

.admin-course-applicants-modal {
  width: min(100%, 1180px);
}

.admin-course-applicants-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  border-bottom: 1px solid var(--admin-outline);
  background: #fffaf5;
  padding: 16px 24px;
}

.admin-course-applicant-search {
  flex: 1 1 420px;
  min-width: 240px;
}

.admin-course-applicants-toolbar .admin-button {
  flex: 0 0 auto;
}

.admin-course-applicants-toolbar .admin-button .material-symbols-outlined {
  font-size: 20px;
}

.admin-course-applicants-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  border-bottom: 1px solid var(--admin-outline);
  padding: 16px 24px;
}

.admin-course-applicants-summary div {
  display: grid;
  gap: 4px;
  border: 1px solid var(--admin-outline);
  border-radius: 14px;
  background: #ffffff;
  padding: 14px;
}

.admin-course-applicants-summary span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.admin-course-applicants-summary strong {
  color: var(--admin-text);
  font-size: 22px;
  font-weight: 900;
}

.admin-course-applicants-table-wrap {
  max-height: min(52vh, 520px);
  overflow: auto;
  padding: 12px 24px;
}

.admin-course-applicants-table {
  width: 100%;
  min-width: 1280px;
  border-collapse: collapse;
}

.admin-course-applicants-table thead {
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff7ed;
}

.admin-course-applicants-table tbody tr:hover {
  background: #fffaf5;
}

.admin-course-applicants-table th,
.admin-course-applicants-table td {
  border-bottom: 1px solid var(--admin-outline);
  padding: 12px 10px;
  color: var(--admin-text);
  font-size: 13px;
  text-align: left;
  vertical-align: top;
}

.admin-course-applicants-table th {
  color: var(--admin-muted);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

.admin-applicant-name,
.admin-applicant-email,
.admin-applicant-address {
  overflow-wrap: anywhere;
}

.admin-applicant-file-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--admin-primary-dark);
  font-size: 12px;
  font-weight: 900;
  text-decoration: none;
  white-space: nowrap;
}

.admin-applicant-file-link:hover {
  text-decoration: underline;
}

.admin-applicant-file-link .material-symbols-outlined {
  font-size: 18px;
}

.admin-applicant-file-missing {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
}

.admin-course-applicants-pagination {
  border-top: 1px solid var(--admin-outline);
  padding: 14px 24px;
}

.admin-modal-empty-state {
  border: 1px dashed var(--admin-outline);
  border-radius: 14px;
  background: #fffaf5;
  color: var(--admin-muted);
  font-size: 14px;
  font-weight: 800;
  line-height: 1.5;
  padding: 18px;
  text-align: center;
}

.admin-year-options {
  display: grid;
  gap: 10px;
  overflow-y: auto;
  padding: 22px 24px;
}

.admin-year-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 58px;
  border: 1px solid var(--admin-outline);
  border-radius: 14px;
  background: #ffffff;
  color: var(--admin-text);
  cursor: pointer;
  font: inherit;
  padding: 0 16px;
  text-align: left;
  transition: border-color 160ms ease, background 160ms ease, transform 160ms ease;
}

.admin-year-option:hover {
  border-color: var(--admin-primary);
  background: #fff7ed;
  transform: translateY(-1px);
}

.admin-year-option span {
  font-size: 18px;
  font-weight: 900;
}

.admin-year-option strong {
  color: var(--admin-primary-dark);
  font-size: 13px;
  font-weight: 800;
}

.admin-applicant-year-pagination,
.admin-batch-export-pagination,
.admin-school-id-pagination {
  border-bottom: 1px solid var(--admin-outline);
  padding: 14px 24px;
}

.admin-school-year-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 58px;
  border: 1px solid var(--admin-outline);
  border-radius: 14px;
  background: #ffffff;
  color: var(--admin-text);
  cursor: pointer;
  font: inherit;
  padding: 0 16px;
  text-align: left;
  transition: border-color 160ms ease, background 160ms ease, transform 160ms ease;
}

.admin-school-year-button:hover {
  border-color: var(--admin-primary);
  background: #fff7ed;
  transform: translateY(-1px);
}

.admin-school-year-button--danger strong {
  color: #991b1b;
}

.admin-school-year-button--danger:hover {
  border-color: #fca5a5;
  background: #fff1f2;
}

.admin-school-year-button:disabled {
  cursor: wait;
  opacity: 0.7;
  transform: none;
}

.admin-school-year-button:disabled:hover {
  border-color: var(--admin-outline);
  background: #ffffff;
}

.admin-school-year-button span {
  font-size: 16px;
  font-weight: 800;
}

.admin-school-year-button strong {
  color: var(--admin-primary-dark);
  font-size: 13px;
  font-weight: 800;
}

.admin-edit-summary {
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid var(--admin-outline);
  background: #fffaf5;
  padding: 18px 24px;
}

.admin-edit-summary__icon {
  display: inline-flex;
  width: 54px;
  height: 54px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--admin-outline);
  border-radius: 999px;
  background: #ffffff;
  color: var(--admin-primary-dark);
}

.admin-edit-summary__icon .material-symbols-outlined {
  font-size: 30px;
}

.admin-edit-summary__text {
  display: grid;
  gap: 6px;
  min-width: 0;
}

.admin-edit-summary__text span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.admin-edit-summary__text strong {
  color: var(--admin-text);
  font-size: 18px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.admin-record-details {
  display: grid;
  gap: 12px;
  padding: 24px;
}

.admin-record-details--responsive {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-height: min(50vh, 420px);
  overflow-y: auto;
}

.admin-record-details div,
.admin-record-details label {
  display: grid;
  gap: 4px;
  border: 1px solid var(--admin-outline);
  border-radius: 14px;
  background: var(--admin-surface-low);
  padding: 14px;
}

.admin-record-details span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.admin-record-details strong {
  color: var(--admin-text);
  font-size: 15px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.admin-record-details input,
.admin-record-details select {
  width: 100%;
  min-height: 40px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: #ffffff;
  color: var(--admin-text);
  font: inherit;
  font-size: 14px;
  font-weight: 800;
  padding: 8px 10px;
}

.admin-record-details input:focus,
.admin-record-details select:focus {
  border-color: var(--admin-primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.14);
}

.admin-edit-message {
  margin: 0;
  padding: 0 24px 18px;
  color: var(--admin-primary-dark);
  font-size: 14px;
  font-weight: 800;
}

.admin-upload-body {
  display: grid;
  gap: 18px;
  padding: 24px;
}

.admin-upload-dropzone {
  position: relative;
  display: grid;
  min-height: 170px;
  place-items: center;
  gap: 8px;
  border: 1px dashed var(--admin-outline);
  border-radius: 16px;
  background: var(--admin-surface-low);
  color: var(--admin-muted);
  cursor: pointer;
  padding: 28px;
  text-align: center;
}

.admin-upload-dropzone:hover {
  border-color: var(--admin-primary);
  background: #fffaf5;
  color: var(--admin-primary-dark);
}

.admin-upload-dropzone .material-symbols-outlined {
  color: var(--admin-primary);
  font-size: 38px;
}

.admin-upload-dropzone strong {
  color: var(--admin-text);
  font-size: 16px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.admin-upload-dropzone span:last-child {
  font-size: 13px;
  font-weight: 700;
}

.admin-upload-dropzone input {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.admin-template-preview {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid var(--admin-outline);
  border-radius: 14px;
}

.admin-template-preview span {
  min-width: 0;
  border-right: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
  color: var(--admin-text);
  font-size: 12px;
  font-weight: 800;
  overflow-wrap: anywhere;
  padding: 12px;
}

.admin-template-preview span:last-child {
  border-right: 0;
}

.admin-upload-message {
  margin: 0;
  color: var(--admin-muted);
  font-size: 14px;
  font-weight: 700;
}

.admin-upload-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  border-top: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
  padding: 16px 24px;
}

.admin-quick-actions-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  border-bottom: 1px solid var(--admin-outline);
  background: var(--admin-outline);
}

.admin-quick-actions-summary div {
  display: grid;
  gap: 4px;
  background: #ffffff;
  padding: 16px 20px;
}

.admin-quick-actions-summary span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.admin-quick-actions-summary strong {
  color: var(--admin-text);
  font-size: 18px;
  font-weight: 800;
}

.admin-quick-actions-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--admin-outline);
  background: #fffaf5;
  padding: 16px 20px;
}

.admin-quick-actions-toolbar span,
.admin-quick-actions-toolbar strong {
  display: block;
}

.admin-quick-actions-toolbar div > span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.admin-quick-actions-toolbar div > strong {
  margin-top: 4px;
  color: var(--admin-text);
  font-size: 14px;
  font-weight: 800;
}

.admin-quick-actions-toolbar .admin-button {
  flex: 0 0 auto;
}

.admin-quick-actions-toolbar__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.admin-quick-actions-toolbar .admin-button .material-symbols-outlined {
  font-size: 20px;
}

.admin-quick-actions-table-wrap {
  max-height: calc(100vh - 290px);
  overflow: auto;
  background: #ffffff;
}

.admin-logs-table-wrap {
  max-height: calc(100vh - 240px);
  overflow: auto;
  background: #ffffff;
}

.admin-quick-actions-table {
  width: 100%;
  min-width: 920px;
  border-collapse: collapse;
  text-align: left;
}

.admin-logs-table {
  width: 100%;
  min-width: 980px;
  border-collapse: collapse;
  text-align: left;
}

.admin-quick-actions-table thead {
  position: sticky;
  top: 0;
  z-index: 1;
}

.admin-logs-table thead {
  position: sticky;
  top: 0;
  z-index: 1;
}

.admin-quick-actions-table thead tr {
  border-bottom: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
}

.admin-logs-table thead tr {
  border-bottom: 1px solid var(--admin-outline);
  background: var(--admin-surface-low);
}

.admin-quick-actions-table tbody tr {
  border-bottom: 1px solid var(--admin-outline);
}

.admin-logs-table tbody tr {
  border-bottom: 1px solid var(--admin-outline);
}

.admin-quick-actions-table tbody tr:hover {
  background: #fffaf5;
}

.admin-logs-table tbody tr:hover {
  background: #fffaf5;
}

.admin-quick-actions-table th,
.admin-quick-actions-table td,
.admin-logs-table th,
.admin-logs-table td {
  padding: 15px 18px;
  color: var(--admin-muted);
  font-size: 14px;
  vertical-align: top;
}

.admin-quick-actions-table th,
.admin-logs-table th {
  color: var(--admin-text);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.admin-logs-table td strong,
.admin-logs-table td span {
  display: block;
}

.admin-logs-table td strong {
  color: var(--admin-text);
  font-weight: 800;
}

.admin-log-action {
  width: fit-content;
  border-radius: 999px;
  background: #fff7ed;
  color: var(--admin-primary-dark);
  font-size: 12px;
  font-weight: 800;
  padding: 4px 9px;
}

.admin-request-student {
  min-width: 190px;
}

.admin-request-student strong,
.admin-request-student span {
  display: block;
}

.admin-request-student strong {
  color: var(--admin-text);
  font-weight: 900;
  line-height: 1.35;
}

.admin-request-student span {
  margin-top: 4px;
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.admin-request-email {
  color: var(--admin-text);
  font-weight: 800;
  white-space: nowrap;
}

.admin-request-question {
  max-width: 360px;
  color: var(--admin-text);
  line-height: 1.45;
}

.admin-scroll-progress {
  position: fixed;
  inset: 0 0 auto;
  z-index: 80;
  height: 3px;
  background: var(--admin-primary);
  transform: scaleX(var(--admin-scroll));
  transform-origin: left;
  transition: transform 75ms ease;
}

@media (max-width: 980px) {
  .admin-topbar {
    flex-wrap: wrap;
    gap: 12px;
  }

  .header-actions {
    margin-left: 0;
  }

  .admin-heading {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .admin-heading__actions {
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .admin-stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .admin-filter-panel {
    grid-template-columns: 1fr;
  }

  .admin-filter-button {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .admin-topbar {
    align-items: stretch;
    flex-direction: column;
    position: relative;
    min-height: 0;
    padding: 12px;
  }

  .brand-lockup,
  .brand-copy {
    min-width: 0;
  }

  .brand-title,
  .brand-subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .header-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
    margin-left: 0;
  }

  .header-actions .admin-button {
    width: 100%;
    min-height: 40px;
    padding: 9px 10px;
    font-size: 12px;
  }

  .admin-main {
    padding: 18px 12px 28px;
  }

  .admin-heading h1 {
    font-size: 30px;
  }

  .admin-heading p {
    font-size: 14px;
  }

  .admin-heading__actions {
    grid-template-columns: 1fr;
  }

  .admin-heading__actions .admin-button {
    width: 100%;
    min-height: 52px;
  }

  .admin-stats-grid {
    grid-template-columns: 1fr;
  }

  .admin-filter-panel {
    padding: 12px;
  }

  .admin-table-card {
    border-radius: 18px;
  }

  .admin-table-scroll {
    overflow: visible;
  }

  .admin-table-card table {
    min-width: 0;
    border-collapse: separate;
    border-spacing: 0 12px;
  }

  .admin-table-card thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .admin-table-card tbody {
    display: grid;
    gap: 12px;
    padding: 12px;
  }

  .admin-table-card tbody tr,
  .admin-table-card tbody tr:hover {
    display: grid;
    gap: 12px;
    border: 1px solid var(--admin-outline);
    border-radius: 16px;
    background: #ffffff;
    padding: 14px;
  }

  .admin-table-card th,
  .admin-table-card td {
    display: grid;
    grid-template-columns: minmax(126px, 42%) minmax(0, 1fr);
    align-items: center;
    gap: 12px;
    padding: 0;
    color: var(--admin-text);
    font-size: 13px;
  }

  .admin-table-card td::before {
    content: attr(data-label);
    color: var(--admin-muted);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .admin-status,
  .admin-row-actions {
    justify-self: end;
  }

  .admin-row-actions {
    flex-wrap: wrap;
    justify-content: flex-end;
    min-width: 0;
  }

  .admin-edit-button,
  .admin-delete-button,
  .admin-checkbox-control {
    min-height: 40px;
  }

  .admin-pagination {
    align-items: flex-start;
    flex-direction: column;
    padding: 14px;
  }

  .admin-pagination__buttons {
    width: 100%;
    gap: 6px;
  }

  .admin-pagination__buttons button {
    width: 36px;
    height: 36px;
  }

  .admin-modal-overlay {
    align-items: flex-end;
    padding: 10px;
  }

  .admin-modal-card {
    width: 100%;
    max-height: calc(100vh - 20px);
    overflow-y: auto;
    border-radius: 18px 18px 10px 10px;
  }

  .admin-modal-card--applicant-years {
    max-height: calc(100dvh - 20px);
    overflow: hidden;
  }

  .admin-modal-header {
    gap: 16px;
    padding: 18px;
  }

  .admin-modal-header h2 {
    font-size: 22px;
  }

  .admin-modal-card--applicant-years .admin-modal-header {
    flex: 0 0 auto;
  }

  .admin-modal-card--applicant-years .admin-modal-header p {
    font-size: 14px;
    line-height: 1.45;
  }

  .admin-year-options {
    flex: 1 1 auto;
    min-height: 0;
    gap: 8px;
    overflow-y: auto;
    padding: 14px 18px;
  }

  .admin-year-option {
    min-height: 56px;
    padding: 12px 14px;
  }

  .admin-applicant-year-pagination {
    flex: 0 0 auto;
    padding: 12px 18px;
  }

  .admin-school-year-downloads {
    padding: 18px;
  }

  .admin-school-year-button {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 14px;
  }

  .admin-applicant-portal-controls {
    align-items: stretch;
    flex-direction: column;
    padding: 14px 18px;
  }

  .admin-applicant-portal-actions,
  .admin-applicant-portal-actions .admin-button {
    width: 100%;
  }

  .admin-course-applicants-toolbar {
    align-items: stretch;
    flex-direction: column;
    padding: 14px 18px;
  }

  .admin-course-applicant-search,
  .admin-course-applicants-toolbar .admin-button {
    width: 100%;
  }

  .admin-course-applicants-summary {
    grid-template-columns: 1fr;
    padding: 14px 18px;
  }

  .admin-edit-summary {
    align-items: flex-start;
    padding: 16px 18px;
  }

  .admin-record-details {
    padding: 18px;
  }

  .admin-record-details--responsive {
    grid-template-columns: 1fr;
    max-height: none;
    overflow: visible;
  }

  .admin-upload-actions {
    position: sticky;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr;
    padding: 14px 18px;
  }

  .admin-upload-actions .admin-button {
    width: 100%;
  }

  .admin-template-preview {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .admin-quick-actions-summary {
    grid-template-columns: 1fr;
  }

  .admin-quick-actions-toolbar {
    align-items: stretch;
    flex-direction: column;
    padding: 14px 18px;
  }

  .admin-quick-actions-toolbar .admin-button {
    width: 100%;
  }

  .admin-quick-actions-toolbar__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .admin-quick-actions-table-wrap,
  .admin-logs-table-wrap,
  .admin-course-applicants-table-wrap {
    max-height: none;
    overflow: visible;
    padding: 12px;
  }

  .admin-quick-actions-table,
  .admin-logs-table,
  .admin-course-applicants-table {
    min-width: 0;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  .admin-quick-actions-table thead,
  .admin-logs-table thead,
  .admin-course-applicants-table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .admin-quick-actions-table tbody,
  .admin-logs-table tbody,
  .admin-course-applicants-table tbody {
    display: grid;
    gap: 10px;
  }

  .admin-quick-actions-table tbody tr,
  .admin-logs-table tbody tr,
  .admin-course-applicants-table tbody tr {
    display: grid;
    gap: 10px;
    border: 1px solid var(--admin-outline);
    border-radius: 16px;
    background: #ffffff;
    padding: 14px;
  }

  .admin-quick-actions-table th,
  .admin-quick-actions-table td,
  .admin-logs-table th,
  .admin-logs-table td,
  .admin-course-applicants-table th,
  .admin-course-applicants-table td {
    display: grid;
    grid-template-columns: minmax(112px, 42%) 1fr;
    align-items: start;
    gap: 12px;
    padding: 0;
    color: var(--admin-text);
    font-size: 13px;
  }

  .admin-quick-actions-table td::before,
  .admin-logs-table td::before,
  .admin-course-applicants-table td::before {
    content: attr(data-label);
    color: var(--admin-muted);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .admin-quick-actions-table .admin-empty-state,
  .admin-logs-table .admin-empty-state,
  .admin-course-applicants-table .admin-empty-state {
    display: block;
    height: auto;
    padding: 28px 14px;
  }

  .admin-quick-actions-table .admin-empty-state::before,
  .admin-logs-table .admin-empty-state::before,
  .admin-course-applicants-table .admin-empty-state::before {
    content: none;
  }

  .admin-request-email,
  .admin-request-student,
  .admin-request-question,
  .admin-applicant-name,
  .admin-applicant-email,
  .admin-applicant-address {
    max-width: none;
    overflow-wrap: anywhere;
    white-space: normal;
  }
}

@media (max-width: 420px) {
  .admin-page {
    min-width: 0;
  }

  .brand-mark {
    width: 42px;
    height: 42px;
  }

  .brand-mark__image {
    width: 36px;
    height: 36px;
  }

  .brand-title {
    font-size: 13px;
  }

  .brand-subtitle {
    font-size: 11px;
  }

  .admin-table-card th,
  .admin-table-card td,
  .admin-quick-actions-table th,
  .admin-quick-actions-table td,
  .admin-logs-table th,
  .admin-logs-table td,
  .admin-course-applicants-table th,
  .admin-course-applicants-table td {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .admin-modal-card--applicant-years .admin-modal-header {
    padding: 16px;
  }

  .admin-year-options {
    padding: 12px;
  }

  .admin-year-option {
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
  }

  .admin-year-option span {
    font-size: 20px;
  }

  .admin-applicant-year-pagination {
    padding: 12px;
  }

  .admin-status,
  .admin-row-actions {
    justify-self: start;
  }

  .admin-row-actions {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
  }

  .admin-row-actions > button,
  .admin-row-actions .admin-checkbox-control {
    width: 100%;
    justify-content: center;
  }

  .admin-modal-overlay {
    padding: 6px;
  }

  .admin-modal-card {
    max-height: calc(100vh - 12px);
  }
}
`,hr={quickActions:{table:`quickActions`,source:`all-grantee-information-header`,defaultStatus:`new`,fields:{email:{label:`Email account`,type:`email`,required:!0,placeholder:`name@example.com`},question:{label:`Question`,type:`textarea`,required:!0,placeholder:`Type your question or request here...`}}}};function gr(e){let t=(0,An.c)(4),{status:n,tone:r}=e,i=`status-badge status-badge--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,V.jsx)(`span`,{className:`status-badge__dot`}),t[0]=a):a=t[0];let o;return t[1]!==n||t[2]!==i?(o=(0,V.jsxs)(`span`,{className:i,children:[a,n]}),t[1]=n,t[2]=i,t[3]=o):o=t[3],o}function _r(e=``){let t=e.toLowerCase();return t.includes(`grantee`)||t.includes(`valid`)||t.includes(`complete`)||t.includes(`resolved`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function vr(e,t){let n=[];if(t<=5){for(let e=1;e<=t;e+=1)n.push(e);return n}n.push(1),e>3&&n.push(`left-ellipsis`);let r=Math.max(2,e-1),i=Math.min(t-1,e+1);for(let e=r;e<=i;e+=1)n.push(e);return e<t-2&&n.push(`right-ellipsis`),n.push(t),n}function yr(e){return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e)}function br(e){return/^[A-Za-z0-9-]{4,30}$/.test(e)}function xr(e){return e.replace(/[\s-]/g,``).trim()}function Sr(e){return e.replace(/[^\d+]/g,``).replace(/(?!^)\+/g,``)}function Cr(e){return e.replace(/[\r\n]+/g,` `).replace(/\s{2,}/g,` `)}function wr(e){let t=xr(e);return/^09\d{9}$/.test(t)||/^\+639\d{9}$/.test(t)}var Tr=5*1024*1024;function Er(e){return e?e.type===`application/pdf`||/\.pdf$/i.test(e.name):!1}function Dr(e){if(!e)return``;let t=e/(1024*1024);return`${t.toFixed(t>=10?0:1)} MB`}function Or(e){return e.length>=6}function kr(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}var Ar=[{label:`Student ID`,name:`studentId`,autoComplete:`off`,required:!0},{label:`Last Name`,name:`lastName`,autoComplete:`family-name`,required:!0},{label:`First Name`,name:`firstName`,autoComplete:`given-name`,required:!0},{label:`Ext Name (JR)`,name:`extensionName`,autoComplete:`honorific-suffix`},{label:`Middle Name`,name:`middleName`,autoComplete:`additional-name`}],jr=[{label:`Last Name`,name:`fatherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`fatherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`fatherMiddleName`,autoComplete:`additional-name`}],Mr=[{label:`Last Name`,name:`motherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`motherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`motherMiddleName`,autoComplete:`additional-name`}],Nr=[`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`],Pr=[{label:`Address`,name:`address`,autoComplete:`street-address`,className:`portal-full-field`,required:!0},{label:`Zip Code`,name:`zipCode`,autoComplete:`postal-code`,inputMode:`numeric`},{label:`PWD ID`,name:`pwdId`,autoComplete:`off`},{label:`Mobile No.`,name:`mobileNumber`,autoComplete:`tel`,inputMode:`tel`,type:`tel`,pattern:`\\+?[0-9]*`,required:!0},{label:`Email Address`,name:`emailAddress`,autoComplete:`email`,inputMode:`email`,type:`email`,required:!0}];function Fr({onAdminLoginSuccess:e,onStudentRegistrationSuccess:t}){let n=(0,B.useRef)(null),[r,i]=(0,B.useState)(0),[a,o]=(0,B.useState)(!1),[s,c]=(0,B.useState)(!1),[l,u]=(0,B.useState)(!1),[d,f]=(0,B.useState)(!1),[p,m]=(0,B.useState)(!1),[h,g]=(0,B.useState)(!1),[_,v]=(0,B.useState)(``),[y,b]=(0,B.useState)(``),[x,S]=(0,B.useState)(``),[C,w]=(0,B.useState)(``),[T,E]=(0,B.useState)(``),[D,O]=(0,B.useState)(``),[k,ee]=(0,B.useState)({psaFile:null,schoolIdFile:null,pwdIdFile:null,fourPsFile:null}),[A,j]=(0,B.useState)(null),[te,M]=(0,B.useState)(!1),[N,ne]=(0,B.useState)(!1),[P,re]=(0,B.useState)(!1),[ie,F]=(0,B.useState)(!1),[I,ae]=(0,B.useState)(1),[oe,se]=(0,B.useState)(``),[ce,le]=(0,B.useState)(``),[L,ue]=(0,B.useState)(``),[de,fe]=(0,B.useState)(``),[pe,me]=(0,B.useState)(``),[he,ge]=(0,B.useState)(``),[_e,ve]=(0,B.useState)(``),[ye,be]=(0,B.useState)(``),[xe,Se]=(0,B.useState)(``),[Ce,R]=(0,B.useState)(``),[we,Te]=(0,B.useState)(``),[Ee,De]=(0,B.useState)(null),[Oe,ke]=(0,B.useState)(``),[Ae,je]=(0,B.useState)(``),[Me,Ne]=(0,B.useState)(``),[Pe,Fe]=(0,B.useState)(``),[Ie,Le]=(0,B.useState)(``),[Re,ze]=(0,B.useState)(``),[Be,Ve]=(0,B.useState)(``),[He,Ue]=(0,B.useState)(``),[We,Ge]=(0,B.useState)(!1),[Ke,qe]=(0,B.useState)(!1),[Je,Ye]=(0,B.useState)(!1),Xe=fn(jn.applicants.create),Ze=fn(jn.applicants.generateUploadUrl),Qe=fn(jn.quickActions.create),$e=fn(jn.adminAuth.login),et=fn(jn.adminAuth.register),tt=fn(jn.adminAuth.requestPasswordResetOtp),nt=fn(jn.adminAuth.changePasswordWithOtp),rt=dn(jn.allinfo.list),it=dn(jn.applicantPortal.get),at=(0,B.useMemo)(()=>rt??[],[rt]),ot=oe.trim().length>0,st=(0,B.useMemo)(()=>{let e=oe.trim().toLowerCase();return e?at.filter(t=>{let n=String(t.studentId??``).trim().toLowerCase(),r=String(t.batchId??``).trim().toLowerCase(),i=String(t.lastName??``).trim().toLowerCase(),a=String(t.firstName??``).trim().toLowerCase(),o=String(t.middleName??t.middleInitial??``).trim().toLowerCase(),s=[i,a,o].filter(Boolean).join(` `);return n===e||r===e||i.includes(e)||a.includes(e)||o.includes(e)||s.includes(e)}):[]},[at,oe]),ct=st.length,lt=Math.max(1,Math.ceil(ct/6)),ut=(I-1)*6,dt=Math.min(ut+6,ct),ft=(0,B.useMemo)(()=>st.slice(ut,dt),[st,ut,dt]),pt=(0,B.useMemo)(()=>vr(I,lt),[I,lt]),mt=e=>{let t=e.trim().toLowerCase();return at.some(e=>String(e.studentId??``).trim().toLowerCase()===t)},ht=(0,B.useCallback)(()=>{Te(``),De(null),me(``),ge(``),be(``),Se(``),typeof t==`function`&&t(Ee)},[t,Ee]);(0,B.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;i(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,B.useEffect)(()=>{if(!a&&!s&&!l&&!d&&!p&&!h&&!D&&!we&&!x)return;let e=e=>{e.key===`Escape`&&(o(!1),c(!1),w(``),E(``),j(null),ee({psaFile:null,schoolIdFile:null,pwdIdFile:null,fourPsFile:null}),u(!1),M(!1),f(!1),m(!1),g(!1),O(``),we&&ht(),S(``))};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[a,s,l,d,p,h,D,we,x,ht]);let gt=()=>{S(``),b(``),o(!0)},_t=()=>{o(!1),b(``)},vt=()=>{if(it===void 0){O(`Please wait while the UNIFAST portal status is loading.`);return}if(!it.isReceivingApplicants){O(`The UNIFAST portal is not receiving applicants right now. Please wait for the administrator to open applications.`);return}w(``),E(``),c(!0)},z=()=>{P||(c(!1),w(``),E(``),ee({psaFile:null,schoolIdFile:null,pwdIdFile:null,fourPsFile:null}),j(null))},yt=async e=>{let t=await Ze(),n=await fetch(t,{body:e,headers:{"Content-Type":e.type||`application/pdf`},method:`POST`});if(!n.ok)throw Error(`Unable to upload ${e.name}.`);let{storageId:r}=await n.json();return r},bt=e=>{let{files:t,name:n}=e.target,r=t?.[0]??null;if(w(``),E(``),j(null),!r){ee(e=>({...e,[n]:null}));return}if(!Er(r)){e.target.value=``,ee(e=>({...e,[n]:null})),w(`Please upload PDF files only for all document requirements.`);return}if(r.size>Tr){e.target.value=``,ee(e=>({...e,[n]:null})),w(`Each uploaded PDF must be 5MB or smaller.`);return}ee(e=>({...e,[n]:r}))},xt=async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=xr(String(n.get(`mobileNumber`)||``)),i=String(n.get(`emailAddress`)||``).trim().toLowerCase(),a=n.get(`psaFile`),o=n.get(`schoolIdFile`),s=n.get(`pwdIdFile`),c=n.get(`fourPsFile`);if(w(``),E(``),!it?.isReceivingApplicants){w(`The UNIFAST portal is closed for applicants right now.`);return}if(!wr(r)){w(`Please enter a valid mobile number. Example: 09123456789 or +639123456789.`);return}if(!yr(i)){w(`Please enter a valid email address.`);return}if(!(a instanceof File)||!a.name||!Er(a)){w(`Please upload your PSA as a PDF file.`);return}if(!(o instanceof File)||!o.name||!Er(o)){w(`Please upload your colored School ID photocopy as a PDF file.`);return}if(a.size>Tr||o.size>Tr){w(`Each uploaded PDF must be 5MB or smaller.`);return}let l=[s,c].filter(e=>e instanceof File&&e.name);if(l.some(e=>!Er(e))){w(`Optional PWD ID and 4Ps ID documents must be PDF files.`);return}if(l.some(e=>e.size>Tr)){w(`Each uploaded PDF must be 5MB or smaller.`);return}j({studentId:String(n.get(`studentId`)||``).trim(),lastName:String(n.get(`lastName`)||``).trim(),firstName:String(n.get(`firstName`)||``).trim(),extensionName:String(n.get(`extensionName`)||``).trim(),middleName:String(n.get(`middleName`)||``).trim(),gender:String(n.get(`gender`)||``),birthDate:String(n.get(`birthDate`)||``),course:String(n.get(`course`)||``),year:String(n.get(`year`)||``),fatherLastName:String(n.get(`fatherLastName`)||``).trim(),fatherFirstName:String(n.get(`fatherFirstName`)||``).trim(),fatherMiddleName:String(n.get(`fatherMiddleName`)||``).trim(),motherLastName:String(n.get(`motherLastName`)||``).trim(),motherFirstName:String(n.get(`motherFirstName`)||``).trim(),motherMiddleName:String(n.get(`motherMiddleName`)||``).trim(),address:String(n.get(`address`)||``).trim(),zipCode:String(n.get(`zipCode`)||``).trim(),pwdId:String(n.get(`pwdId`)||``).trim(),mobileNumber:r,emailAddress:i,psaFile:a,schoolIdFile:o,pwdIdFile:l.includes(s)?s:null,fourPsFile:l.includes(c)?c:null})},St=()=>{w(``),E(``),j(null)},Ct=async()=>{if(A){if(w(``),E(``),!it?.isReceivingApplicants){w(`The UNIFAST portal is closed for applicants right now.`);return}re(!0);try{let[e,t,r,i]=await Promise.all([yt(A.psaFile),yt(A.schoolIdFile),A.pwdIdFile?yt(A.pwdIdFile):Promise.resolve(void 0),A.fourPsFile?yt(A.fourPsFile):Promise.resolve(void 0)]),a={studentId:A.studentId,lastName:A.lastName,firstName:A.firstName,extensionName:A.extensionName,middleName:A.middleName,gender:A.gender,birthDate:A.birthDate,course:A.course,year:A.year,fatherLastName:A.fatherLastName,fatherFirstName:A.fatherFirstName,fatherMiddleName:A.fatherMiddleName,motherLastName:A.motherLastName,motherFirstName:A.motherFirstName,motherMiddleName:A.motherMiddleName,address:A.address,zipCode:A.zipCode,pwdId:A.pwdId,mobileNumber:A.mobileNumber,emailAddress:A.emailAddress,psaFileStorageId:e,psaFileName:A.psaFile.name,schoolIdFileStorageId:t,schoolIdFileName:A.schoolIdFile.name};r&&A.pwdIdFile&&(a.pwdIdFileStorageId=r,a.pwdIdFileName=A.pwdIdFile.name),i&&A.fourPsFile&&(a.fourPsFileStorageId=i,a.fourPsFileName=A.fourPsFile.name);let o=await Xe(a);if(!o.success){w(o.message||`Unable to submit applicant information.`);return}n.current?.reset(),ee({psaFile:null,schoolIdFile:null,pwdIdFile:null,fourPsFile:null}),j(null),E(o.message||`Applicant information submitted successfully.`),window.setTimeout(()=>{E(``),c(!1)},900)}catch(e){w(e instanceof Error?e.message:`Unable to submit applicant information right now.`)}finally{re(!1)}}},wt=()=>{v(``),le(``),ue(``),fe(``),u(!0)},Tt=()=>{u(!1),M(!1),v(``),le(``),ue(``),fe(``)},Et=()=>{u(!1),m(!0),R(``),Te(``),me(ce),ge(L),be(``),Se(``)},Dt=()=>{m(!1),R(``),Te(``),me(``),ge(``),ve(``),be(``),Se(``)},Ot=()=>{m(!1),R(``),Te(``),De(null),le(pe),ue(he),fe(``),u(!0)},kt=()=>{g(!1),m(!0)},At=()=>{u(!1),f(!0),Ve(``),Ue(``),Ge(!1),ke(ce),je(L),Ne(``),Fe(``),Le(``),ze(``)},jt=()=>{f(!1),Ve(``),Ue(``),Ge(!1),ke(``),je(``),Ne(``),Fe(``),Le(``),ze(``)},Mt=()=>{ae(e=>Math.max(e-1,1))},Nt=()=>{ae(e=>Math.min(e+1,lt))},Pt=()=>{se(``),ae(1)},Ft=e=>{se(e.target.value),ae(1)},It=e=>{e.target.value=Sr(e.target.value)},Lt=()=>{Ge(!1),Ue(``),Fe(``),Le(``),ze(``)},Rt=e=>{let t=e.target.value;ke(t),t.trim()&&je(``),Lt()},zt=e=>{let t=e.target.value;je(t),t.trim()&&ke(``),Lt()},Bt=e=>{Ne(Sr(e.target.value)),Lt()},Vt=()=>{let e=Oe.trim().toLowerCase(),t=Ae.trim(),n=xr(Me);return!e&&!t?`Email address or School ID is required.`:e&&t?`Use either email address or School ID, not both.`:e&&!yr(e)?`Please enter a valid email address.`:t&&!br(t)?`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`:n?wr(n)?``:`Please enter a valid phone number. Example: 09123456789 or +639123456789.`:`Phone number is required.`};return(0,V.jsxs)(`div`,{className:`landing-page`,children:[(0,V.jsx)(`style`,{children:Ir}),(0,V.jsxs)(`header`,{className:`landing-header`,children:[(0,V.jsxs)(`div`,{className:`brand-lockup`,children:[(0,V.jsx)(`div`,{className:`brand-mark`,children:(0,V.jsx)(`img`,{alt:`IBACMI`,className:`brand-mark__image`,src:Mn})}),(0,V.jsx)(`div`,{className:`brand-copy`,children:(0,V.jsx)(`p`,{className:`brand-title`,children:`IBACMI - Scholarship Office`})})]}),(0,V.jsxs)(`div`,{className:`header-actions`,children:[(0,V.jsx)(`button`,{className:`button button--compact`,onClick:gt,type:`button`,children:`Quick Actions`}),(0,V.jsx)(`button`,{className:`button button--compact button--admin`,onClick:wt,type:`button`,children:`SIGN IN`})]})]}),(0,V.jsx)(`main`,{className:`landing-main`,children:(0,V.jsxs)(`div`,{className:`landing-container`,children:[(0,V.jsx)(`section`,{className:`page-heading`,children:(0,V.jsxs)(`div`,{className:`page-heading__copy`,children:[(0,V.jsx)(`span`,{className:`eyebrow`,children:`Grantee Records`}),(0,V.jsx)(`h2`,{children:`SEARCH YOUR SCHOOL ID EITHER BATCH NO., OR LAST NAME`})]})}),(0,V.jsxs)(`section`,{className:`filter-panel`,"aria-label":`Grantee filters`,children:[(0,V.jsxs)(`div`,{className:`search-field`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,V.jsx)(`input`,{placeholder:`Enter School ID, Either Batch No., or Last Name...`,type:`text`,value:oe,onChange:Ft})]}),(0,V.jsxs)(`button`,{className:`icon-button filter-button`,type:`button`,"aria-label":`Clear search`,title:`Clear search`,onClick:Pt,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`restart_alt`}),(0,V.jsx)(`span`,{className:`filter-button__text`,children:`Reset`})]})]}),(0,V.jsxs)(`section`,{className:`table-card`,"aria-label":`Grantee records`,children:[(0,V.jsx)(`div`,{className:`table-scroll`,children:(0,V.jsxs)(`table`,{children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`No.`}),(0,V.jsx)(`th`,{children:`TES Award Number`}),(0,V.jsx)(`th`,{children:`Student ID`}),(0,V.jsx)(`th`,{children:`Last Name`}),(0,V.jsx)(`th`,{children:`First Name`}),(0,V.jsx)(`th`,{children:`Middle Name`}),(0,V.jsx)(`th`,{children:`Batch No.`}),(0,V.jsx)(`th`,{children:`Status`}),(0,V.jsx)(`th`,{children:`Semester`}),(0,V.jsx)(`th`,{children:`School Year`})]})}),(0,V.jsxs)(`tbody`,{children:[!ot&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`Enter a School ID, Batch No./ID, or name in the search field to view records.`})}),ot&&rt===void 0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`Searching grantee record...`})}),ot&&rt&&st.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`No matching School ID, Batch No./ID, or name found.`})}),ot&&ft.map((e,t)=>(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{"data-label":`No.`,children:e.no||ut+t+1}),(0,V.jsx)(`td`,{className:`award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,V.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,V.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`â€”`}),(0,V.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`â€”`}),(0,V.jsx)(`td`,{"data-label":`Middle Name`,children:e.middleName||e.middleInitial||`â€”`}),(0,V.jsx)(`td`,{className:`batch-cell`,"data-label":`Batch ID`,children:e.batchId}),(0,V.jsx)(`td`,{"data-label":`Status`,children:(0,V.jsx)(gr,{status:e.status,tone:_r(e.status)})}),(0,V.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,V.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`})]},e._id))]})]})}),(0,V.jsxs)(`div`,{className:`table-footer`,children:[ot?(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:ct===0?0:ut+1}),` to`,` `,(0,V.jsx)(`strong`,{children:dt}),` of `,(0,V.jsx)(`strong`,{children:ct}),` result`,ct===1?``:`s`]}):(0,V.jsxs)(`p`,{children:[`Search by `,(0,V.jsx)(`strong`,{children:`School ID`}),`, `,(0,V.jsx)(`strong`,{children:`Batch No./ID`}),`, or`,` `,(0,V.jsx)(`strong`,{children:`Name`}),` to display grantee records.`]}),(0,V.jsxs)(`div`,{className:`pagination`,children:[(0,V.jsx)(`button`,{className:`page-button`,disabled:!ot||I===1||ct===0,onClick:Mt,type:`button`,"aria-label":`Previous page`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),pt.map(e=>typeof e==`string`?(0,V.jsx)(`span`,{className:`pagination__ellipsis`,children:`...`},e):(0,V.jsx)(`button`,{className:`page-button ${I===e?`page-button--active`:``}`,disabled:!ot||ct===0,onClick:()=>ae(e),type:`button`,children:e},e)),(0,V.jsx)(`button`,{className:`page-button`,disabled:!ot||I===lt||ct===0,onClick:Nt,type:`button`,"aria-label":`Next page`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]}),(0,V.jsxs)(`section`,{className:`portal-cta`,"aria-labelledby":`portal-cta-title`,children:[(0,V.jsx)(`div`,{className:`portal-cta__icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`assignment`})}),(0,V.jsxs)(`div`,{className:`portal-cta__copy`,children:[(0,V.jsx)(`span`,{className:`eyebrow`,children:`UNIFAST Portal`}),(0,V.jsx)(`h3`,{id:`portal-cta-title`,children:`Submit student information`}),(0,V.jsx)(`p`,{children:`Complete the student, parent, address, and contact information form for UNIFAST applicant processing.`})]}),(0,V.jsx)(`button`,{className:`button button--portal`,onClick:vt,type:`button`,children:`Open Portal`})]})]})}),(0,V.jsx)(`footer`,{className:`landing-footer`,children:(0,V.jsx)(`p`,{children:`Copyright 2026 | All Rights Reserved IBACMI - Scholarship Office | Developed By CINIFIX`})}),s&&(0,V.jsxs)(`div`,{"aria-labelledby":`unifast-portal-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal modal`,className:`modal-backdrop-button`,onClick:z,type:`button`}),(0,V.jsxs)(`form`,{className:`modal-card portal-modal-card`,ref:n,onSubmit:xt,children:[(0,V.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,V.jsxs)(`div`,{className:`modal-title-row`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,V.jsx)(`h3`,{id:`unifast-portal-title`,children:`Student Information Form`}),(0,V.jsxs)(`p`,{children:[`Complete the student, parent, and contact information fields below`,it?.applicationYear?` for ${it.applicationYear}.`:`.`]})]}),(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal`,className:`icon-button modal-close`,onClick:z,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,V.jsxs)(`div`,{className:`modal-body portal-form${A?` portal-form--hidden`:``}`,children:[(0,V.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-student-heading`,children:[(0,V.jsx)(`h4`,{id:`portal-student-heading`,children:`Student Information`}),(0,V.jsxs)(`div`,{className:`portal-grid`,children:[Ar.map(e=>(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:`text`})]},e.name)),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Gender`}),(0,V.jsxs)(`select`,{name:`gender`,defaultValue:``,required:!0,children:[(0,V.jsx)(`option`,{value:``,disabled:!0,children:`Select gender`}),(0,V.jsx)(`option`,{value:`Female`,children:`Female`}),(0,V.jsx)(`option`,{value:`Male`,children:`Male`}),(0,V.jsx)(`option`,{value:`Prefer not to say`,children:`Prefer not to say`})]})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Birth Date`}),(0,V.jsx)(`input`,{name:`birthDate`,required:!0,type:`date`})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Year`}),(0,V.jsxs)(`select`,{name:`year`,defaultValue:``,required:!0,children:[(0,V.jsx)(`option`,{value:``,disabled:!0,children:`Select year`}),(0,V.jsx)(`option`,{value:`1st Year`,children:`1st Year`}),(0,V.jsx)(`option`,{value:`2nd Year`,children:`2nd Year`}),(0,V.jsx)(`option`,{value:`3rd Year`,children:`3rd Year`}),(0,V.jsx)(`option`,{value:`4th Year`,children:`4th Year`}),(0,V.jsx)(`option`,{value:`5th Year`,children:`5th Year`})]})]}),(0,V.jsxs)(`fieldset`,{className:`portal-course-list`,children:[(0,V.jsx)(`legend`,{children:`Course`}),Nr.map(e=>(0,V.jsxs)(`label`,{className:`portal-course-option`,children:[(0,V.jsx)(`input`,{name:`course`,required:!0,type:`radio`,value:e}),(0,V.jsx)(`span`,{children:e})]},e))]})]})]}),(0,V.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-parents-heading`,children:[(0,V.jsx)(`h4`,{id:`portal-parents-heading`,children:`Parents Information`}),(0,V.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,V.jsx)(`p`,{children:`Father Information`}),(0,V.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:jr.map(e=>(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter father's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]}),(0,V.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,V.jsx)(`p`,{children:`Mother Information`}),(0,V.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:Mr.map(e=>(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter mother's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]})]}),(0,V.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-contact-heading`,children:[(0,V.jsx)(`h4`,{id:`portal-contact-heading`,children:`Address and Contact Information`}),(0,V.jsx)(`div`,{className:`portal-grid`,children:Pr.map(e=>(0,V.jsxs)(`label`,{className:`form-field ${e.className??``}`.trim(),children:[(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(`input`,{autoComplete:e.autoComplete,inputMode:e.inputMode,name:e.name,onInput:e.name===`mobileNumber`?It:void 0,pattern:e.pattern,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:e.type??`text`})]},e.name))})]}),(0,V.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-documents-heading`,children:[(0,V.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,V.jsx)(`h4`,{id:`portal-documents-heading`,children:`Document Requirements`}),(0,V.jsx)(`p`,{children:`Upload clear PDF copies up to 5MB each. Required and optional documents are labeled below.`})]}),(0,V.jsxs)(`div`,{className:`portal-document-grid`,children:[(0,V.jsxs)(`label`,{className:`portal-document-upload${k.psaFile?` portal-document-upload--selected`:``}`,children:[(0,V.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`psaFile`,onChange:bt,required:!0,type:`file`}),(0,V.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`})}),(0,V.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,V.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,V.jsx)(`strong`,{children:`PSA Birth Certificate`}),(0,V.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,V.jsx)(`span`,{children:k.psaFile?`${k.psaFile.name} (${Dr(k.psaFile.size)})`:`Select PSA PDF file`})]})]}),(0,V.jsxs)(`label`,{className:`portal-document-upload${k.schoolIdFile?` portal-document-upload--selected`:``}`,children:[(0,V.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`schoolIdFile`,onChange:bt,required:!0,type:`file`}),(0,V.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`})}),(0,V.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,V.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,V.jsx)(`strong`,{children:`Colored School ID Photocopy`}),(0,V.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,V.jsx)(`span`,{children:k.schoolIdFile?`${k.schoolIdFile.name} (${Dr(k.schoolIdFile.size)})`:`Select colored School ID photocopy PDF`})]})]}),(0,V.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${k.pwdIdFile?` portal-document-upload--selected`:``}`,children:[(0,V.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`pwdIdFile`,onChange:bt,type:`file`}),(0,V.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`})}),(0,V.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,V.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,V.jsx)(`strong`,{children:`PWD ID`}),(0,V.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,V.jsx)(`span`,{children:k.pwdIdFile?`${k.pwdIdFile.name} (${Dr(k.pwdIdFile.size)})`:`Attach a clear PWD ID PDF, if applicable`})]})]}),(0,V.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${k.fourPsFile?` portal-document-upload--selected`:``}`,children:[(0,V.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`fourPsFile`,onChange:bt,type:`file`}),(0,V.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`})}),(0,V.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,V.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,V.jsx)(`strong`,{children:`4Ps ID`}),(0,V.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,V.jsx)(`span`,{children:k.fourPsFile?`${k.fourPsFile.name} (${Dr(k.fourPsFile.size)})`:`Attach a clear 4Ps ID PDF, if applicable`})]})]})]})]})]}),A&&(0,V.jsx)(`div`,{className:`modal-body portal-review`,children:(0,V.jsxs)(`section`,{className:`portal-review-card`,"aria-labelledby":`portal-review-heading`,children:[(0,V.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,V.jsx)(`h4`,{id:`portal-review-heading`,children:`Review Information`}),(0,V.jsx)(`p`,{children:`Please check every detail before final submission.`})]}),(0,V.jsxs)(`div`,{className:`portal-review-grid`,children:[(0,V.jsxs)(`div`,{className:`portal-review-group`,children:[(0,V.jsx)(`h5`,{children:`Student Information`}),(0,V.jsxs)(`dl`,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Student ID`}),(0,V.jsx)(`dd`,{children:A.studentId})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Full Name`}),(0,V.jsx)(`dd`,{children:[A.firstName,A.middleName,A.lastName,A.extensionName].filter(Boolean).join(` `)})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Gender`}),(0,V.jsx)(`dd`,{children:A.gender})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Birth Date`}),(0,V.jsx)(`dd`,{children:A.birthDate})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Year`}),(0,V.jsx)(`dd`,{children:A.year})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Course`}),(0,V.jsx)(`dd`,{children:A.course})]})]})]}),(0,V.jsxs)(`div`,{className:`portal-review-group`,children:[(0,V.jsx)(`h5`,{children:`Parents Information`}),(0,V.jsxs)(`dl`,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Father`}),(0,V.jsx)(`dd`,{children:[A.fatherFirstName,A.fatherMiddleName,A.fatherLastName].filter(Boolean).join(` `)||`Not provided`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Mother`}),(0,V.jsx)(`dd`,{children:[A.motherFirstName,A.motherMiddleName,A.motherLastName].filter(Boolean).join(` `)||`Not provided`})]})]})]}),(0,V.jsxs)(`div`,{className:`portal-review-group`,children:[(0,V.jsx)(`h5`,{children:`Address and Contact`}),(0,V.jsxs)(`dl`,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Address`}),(0,V.jsx)(`dd`,{children:A.address})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Zip Code`}),(0,V.jsx)(`dd`,{children:A.zipCode||`Not provided`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`PWD ID`}),(0,V.jsx)(`dd`,{children:A.pwdId||`Not provided`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Mobile No.`}),(0,V.jsx)(`dd`,{children:A.mobileNumber})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Email Address`}),(0,V.jsx)(`dd`,{children:A.emailAddress})]})]})]}),(0,V.jsxs)(`div`,{className:`portal-review-group`,children:[(0,V.jsx)(`h5`,{children:`Documents`}),(0,V.jsxs)(`dl`,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`PSA Birth Certificate`}),(0,V.jsxs)(`dd`,{children:[A.psaFile.name,` (`,Dr(A.psaFile.size),`)`]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`School ID Photocopy`}),(0,V.jsxs)(`dd`,{children:[A.schoolIdFile.name,` (`,Dr(A.schoolIdFile.size),`)`]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`PWD ID (Optional)`}),(0,V.jsx)(`dd`,{children:A.pwdIdFile?`${A.pwdIdFile.name} (${Dr(A.pwdIdFile.size)})`:`Not provided`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`4Ps ID (Optional)`}),(0,V.jsx)(`dd`,{children:A.fourPsFile?`${A.fourPsFile.name} (${Dr(A.fourPsFile.size)})`:`Not provided`})]})]})]})]})]})}),(C||T)&&(0,V.jsxs)(`div`,{className:`portal-message-row`,children:[C&&(0,V.jsx)(`p`,{className:`form-error`,children:C}),T&&(0,V.jsx)(`p`,{className:`form-success`,children:T})]}),(0,V.jsx)(`div`,{className:`modal-actions portal-actions`,children:A?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:P,onClick:St,type:`button`,children:`Edit Information`}),(0,V.jsx)(`button`,{className:`button`,disabled:P,onClick:Ct,type:`button`,children:P?`Submitting...`:`Submit Information`})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:P,onClick:z,type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`button`,disabled:P,type:`submit`,children:`Review Information`})]})})]})]}),D&&(0,V.jsxs)(`div`,{"aria-labelledby":`portal-status-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close portal status modal`,className:`modal-backdrop-button`,onClick:()=>O(``),type:`button`}),(0,V.jsxs)(`section`,{className:`modal-card portal-status-card`,children:[(0,V.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,V.jsxs)(`div`,{className:`modal-title-row`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,V.jsx)(`h3`,{id:`portal-status-title`,children:`Portal Status`}),(0,V.jsx)(`p`,{children:D})]}),(0,V.jsx)(`button`,{"aria-label":`Close portal status`,className:`icon-button modal-close`,onClick:()=>O(``),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,V.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,V.jsx)(`button`,{className:`button`,onClick:()=>O(``),type:`button`,children:`OK`})})]})]}),a&&(0,V.jsxs)(`div`,{"aria-labelledby":`quick-actions-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close quick actions modal`,className:`modal-backdrop-button`,onClick:_t,type:`button`}),(0,V.jsxs)(`form`,{className:`modal-card modal-card--wide auth-modal-card`,onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=String(n.get(`email`)||``).trim().toLowerCase(),i=String(n.get(`studentId`)||``).trim(),a=String(n.get(`lastName`)||``).trim(),s=String(n.get(`firstName`)||``).trim(),c=String(n.get(`middleInitial`)||``).trim(),l=Cr(String(n.get(`question`)||``)).trim();b(``),S(``),ne(!0);try{if(!yr(r))throw Error(`Please enter a valid email account.`);if(!br(i))throw Error(`Please enter a valid Student ID.`);if(!a||!s)throw Error(`Last name and first name are required.`);if(c&&!/^[A-Za-z. -]{1,10}$/.test(c))throw Error(`Please enter a valid middle initial.`);if(!l)throw Error(`Please enter your question or request.`);if(l.length>500)throw Error(`Your question must be 500 characters or fewer.`);await Qe({email:r,studentId:i,lastName:a,firstName:s,middleInitial:c,question:l,source:hr.quickActions.source,status:hr.quickActions.defaultStatus}),t.reset(),o(!1),S(`Your request has been submitted.`)}catch(e){b(e instanceof Error?e.message:`Unable to submit your request right now.`)}finally{ne(!1)}},children:[(0,V.jsxs)(`div`,{className:`modal-header`,children:[(0,V.jsxs)(`div`,{className:`modal-title-row`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`modal-kicker`,children:`Quick Actions`}),(0,V.jsx)(`h3`,{id:`quick-actions-title`,children:`Submit a Request`})]}),(0,V.jsx)(`button`,{"aria-label":`Close modal`,className:`icon-button modal-close`,onClick:_t,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`p`,{children:`Send a question or request to the scholarship office for review.`})]}),(0,V.jsxs)(`div`,{className:`modal-body quick-action-form-grid`,children:[(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Student ID`}),(0,V.jsx)(`input`,{autoComplete:`off`,name:`studentId`,placeholder:`Enter Student ID`,required:!0})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Email account`}),(0,V.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`email`,placeholder:hr.quickActions.fields.email.placeholder,required:!0,type:`email`})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Last name`}),(0,V.jsx)(`input`,{autoComplete:`family-name`,name:`lastName`,placeholder:`Enter last name`,required:!0})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`First name`}),(0,V.jsx)(`input`,{autoComplete:`given-name`,name:`firstName`,placeholder:`Enter first name`,required:!0})]}),(0,V.jsxs)(`label`,{className:`form-field quick-action-mi-field`,children:[(0,V.jsx)(`span`,{children:`MI`}),(0,V.jsx)(`input`,{autoComplete:`additional-name`,maxLength:10,name:`middleInitial`,placeholder:`M`})]}),(0,V.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,V.jsx)(`span`,{children:`Question`}),(0,V.jsx)(`textarea`,{"aria-describedby":`quick-action-question-help`,maxLength:500,name:`question`,onInput:e=>{e.currentTarget.value=Cr(e.currentTarget.value)},placeholder:hr.quickActions.fields.question.placeholder,required:!0,rows:4}),(0,V.jsx)(`small`,{className:`form-field__help`,id:`quick-action-question-help`,children:`One paragraph only, up to 500 characters.`})]}),y&&(0,V.jsx)(`p`,{className:`form-error auth-full-field`,children:y})]}),(0,V.jsxs)(`div`,{className:`modal-actions`,children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:N,onClick:_t,type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`button`,disabled:N,type:`submit`,children:N?`Submitting...`:`Submit`})]})]})]}),l&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-login-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close admin login modal`,className:`modal-backdrop-button`,onClick:Tt,type:`button`}),(0,V.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card`,onSubmit:async t=>{t.preventDefault();let n=ce.trim().toLowerCase(),r=L.trim(),i=de,a=n.length>0,o=r.length>0;if(v(``),!a&&!o){v(`Enter either your valid email address or your School ID.`);return}if(a&&!yr(n)){v(`Please enter a valid email address.`);return}if(o&&!br(r)){v(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(!i){v(`Password is required.`);return}if(!Or(i)){v(`Password must be at least 6 characters.`);return}let s={password:i,...a?{email:n}:{},...o?{schoolId:r}:{}};M(!0);try{let t=await kr($e(s),15e3,`Login is taking too long. Please check your internet connection is running, then try again.`);if(!t.success){v(t.message||`Invalid admin credentials.`);return}u(!1),typeof e==`function`&&e(t.admin)}catch(e){v(e instanceof Error?e.message:`Unable to login right now.`)}finally{M(!1)}},children:[(0,V.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,V.jsx)(`div`,{className:`admin-login-brand`,children:(0,V.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,V.jsx)(`button`,{"aria-label":`Close admin login`,className:`icon-button modal-close admin-login-close`,onClick:Tt,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,V.jsx)(`p`,{className:`modal-kicker`,children:`Administrator Access`}),(0,V.jsx)(`h3`,{id:`admin-login-title`,children:`Sign in to Admin View`}),(0,V.jsx)(`p`,{children:`Use either your valid email address or School ID, then enter your password.`})]}),(0,V.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Email address`}),(0,V.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`adminEmail`,placeholder:`Enter email address`,type:`email`,disabled:L.trim().length>0,value:ce,onChange:e=>le(e.target.value)})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`School ID`}),(0,V.jsx)(`input`,{autoComplete:`off`,name:`adminSchoolId`,placeholder:`Enter School ID`,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,title:`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`,disabled:ce.trim().length>0,value:L,onChange:e=>ue(e.target.value)})]}),(0,V.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,V.jsx)(`span`,{children:`Password`}),(0,V.jsx)(`input`,{autoComplete:`current-password`,name:`adminPassword`,placeholder:`Enter password`,required:!0,type:`password`,minLength:6,value:de,onChange:e=>fe(e.target.value)})]}),(0,V.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`info`}),(0,V.jsx)(`p`,{children:`You may sign in using either your registered email address or your School ID. Password is still required.`})]}),(0,V.jsxs)(`div`,{className:`auth-link-row auth-full-field`,children:[(0,V.jsx)(`button`,{className:`auth-text-button`,disabled:te,onClick:At,type:`button`,children:`Forgot Password?`}),(0,V.jsx)(`button`,{className:`auth-text-button auth-text-button--strong`,disabled:te,onClick:Et,type:`button`,children:`Create Account`})]}),_&&(0,V.jsx)(`p`,{className:`form-error auth-full-field`,children:_})]}),(0,V.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:te,onClick:Tt,type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`button`,disabled:te,type:`submit`,children:te?`Logging in...`:`Login`})]})]})]}),p&&(0,V.jsxs)(`div`,{"aria-labelledby":`sign-up-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close sign up modal`,className:`modal-backdrop-button`,onClick:Dt,type:`button`}),(0,V.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=pe.trim().toLowerCase(),n=he.trim(),r=xr(_e),i=ye,a=xe;if(R(``),Te(``),!t){R(`Email account is required.`);return}if(!yr(t)){R(`Please enter a valid email account.`);return}if(!n){R(`School ID is required.`);return}if(!br(n)){R(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(rt===void 0){R(`Please wait while we verify the School ID.`);return}if(!mt(n)){m(!1),g(!0);return}if(!r){R(`Phone number is required.`);return}if(!wr(r)){R(`Please enter a valid phone number. Example: 09123456789 or +639123456789.`);return}if(!i){R(`Password is required.`);return}if(!Or(i)){R(`Password must be at least 6 characters.`);return}if(!a){R(`Confirm password is required.`);return}if(i!==a){R(`Password and confirm password do not match.`);return}F(!0);try{let e=await et({email:t,schoolId:n,phoneNumber:r,password:i});if(!e.success){if(e.reason===`schoolIdNotFound`){m(!1),g(!0);return}R(e.message||`Unable to register account.`);return}m(!1),De(e.admin??{email:t,schoolId:n,role:`student`}),Te(`Your account has been registered successfully.`),le(t),ue(n),fe(``),ve(``),be(``),Se(``)}catch(e){R(e instanceof Error?e.message:`Unable to register account.`)}finally{F(!1)}},children:[(0,V.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,V.jsx)(`div`,{className:`admin-login-brand`,children:(0,V.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,V.jsx)(`button`,{"aria-label":`Close sign up`,className:`icon-button modal-close admin-login-close`,onClick:Dt,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,V.jsx)(`p`,{className:`modal-kicker`,children:`Account Registration`}),(0,V.jsx)(`h3`,{id:`sign-up-title`,children:`Create Account`}),(0,V.jsx)(`p`,{children:`Registration is only available for verified School IDs listed in the IBACMI Scholarship Office records.`})]}),(0,V.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Email account`}),(0,V.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`signUpEmail`,placeholder:`Enter email account`,required:!0,type:`email`,value:pe,onChange:e=>me(e.target.value)})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`School ID`}),(0,V.jsx)(`input`,{autoComplete:`off`,name:`signUpSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,value:he,onChange:e=>ge(e.target.value)})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Phone Number`}),(0,V.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`signUpPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`e.g. 09123456789`,required:!0,type:`tel`,value:_e,onChange:e=>ve(Sr(e.target.value))})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Password`}),(0,V.jsx)(`input`,{autoComplete:`new-password`,name:`signUpPassword`,placeholder:`Create password`,required:!0,type:`password`,minLength:6,value:ye,onChange:e=>be(e.target.value)})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Confirm Password`}),(0,V.jsx)(`input`,{autoComplete:`new-password`,name:`signUpConfirmPassword`,placeholder:`Confirm password`,required:!0,type:`password`,minLength:6,value:xe,onChange:e=>Se(e.target.value)})]}),(0,V.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`verified_user`}),(0,V.jsx)(`p`,{children:`Your School ID will be checked against the official grantee information record before account creation.`})]}),Ce&&(0,V.jsx)(`p`,{className:`form-error auth-full-field`,children:Ce}),we&&(0,V.jsx)(`p`,{className:`form-success auth-full-field`,children:we})]}),(0,V.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:ie,onClick:Ot,type:`button`,children:`Back to Login`}),(0,V.jsx)(`button`,{className:`button`,disabled:ie,type:`submit`,children:ie?`Registering...`:`Register Now`})]})]})]}),h&&(0,V.jsxs)(`div`,{"aria-labelledby":`sign-up-denied-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close sign up denied modal`,className:`modal-backdrop-button`,onClick:kt,type:`button`}),(0,V.jsxs)(`section`,{className:`modal-card modal-card--success auth-modal-card auth-denied-card`,children:[(0,V.jsxs)(`div`,{className:`success-modal-body auth-denied-body`,children:[(0,V.jsx)(`div`,{className:`auth-denied-icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`error`})}),(0,V.jsx)(`h3`,{id:`sign-up-denied-title`,children:`Account Registration Not Approved`}),(0,V.jsx)(`p`,{children:`Sorry, you cannot proceed. Your School ID was not found in the official records. Please contact the IBACMI | Scholarship Office for assistance.`})]}),(0,V.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,V.jsx)(`button`,{className:`button`,onClick:kt,type:`button`,children:`Back to Sign Up`})})]})]}),we&&(0,V.jsxs)(`div`,{"aria-labelledby":`sign-up-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Continue to student page`,className:`modal-backdrop-button`,onClick:ht,type:`button`}),(0,V.jsxs)(`section`,{className:`modal-card modal-card--success auth-modal-card`,children:[(0,V.jsxs)(`div`,{className:`success-modal-body`,children:[(0,V.jsx)(`div`,{className:`success-icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,V.jsx)(`h3`,{id:`sign-up-success-title`,children:`Successfully Registered`}),(0,V.jsxs)(`p`,{children:[we,` You can now continue to the student information page.`]})]}),(0,V.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,V.jsx)(`button`,{className:`button`,onClick:ht,type:`button`,children:`Continue`})})]})]}),d&&(0,V.jsxs)(`div`,{"aria-labelledby":`forgot-password-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close forgot password modal`,className:`modal-backdrop-button`,onClick:jt,type:`button`}),(0,V.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=Vt(),n=Oe.trim().toLowerCase(),r=Ae.trim(),i=xr(Me),a=Pe.trim(),o=Ie,s=Re;if(Ve(``),Ue(``),t){Ve(t);return}if(!We){Ve(`Please request an OTP first.`);return}if(!a){Ve(`OTP is required.`);return}if(!/^\d{4,8}$/.test(a)){Ve(`OTP must be 4 to 8 digits.`);return}if(!o){Ve(`New password is required.`);return}if(!Or(o)){Ve(`New password must be at least 6 characters.`);return}if(!s){Ve(`Confirm password is required.`);return}if(o!==s){Ve(`New password and confirm password do not match.`);return}Ye(!0);try{let e=await nt({email:n||void 0,schoolId:r||void 0,phoneNumber:i,otp:a,newPassword:o});if(!e.success){Ve(e.message||`Unable to change password.`);return}Ue(e.message||`Password changed successfully.`),Fe(``),Le(``),ze(``),Ge(!1),le(n),ue(r),fe(``)}catch(e){Ve(e instanceof Error?e.message:`Unable to change password right now.`)}finally{Ye(!1)}},children:[(0,V.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,V.jsx)(`div`,{className:`admin-login-brand`,children:(0,V.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,V.jsx)(`button`,{"aria-label":`Close forgot password`,className:`icon-button modal-close admin-login-close`,onClick:jt,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,V.jsx)(`p`,{className:`modal-kicker`,children:`Account Recovery`}),(0,V.jsx)(`h3`,{id:`forgot-password-title`,children:`Forgot Password`}),(0,V.jsx)(`p`,{children:`Verify your email or School ID with your registered phone number before changing your password.`})]}),(0,V.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Email address`}),(0,V.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`forgotEmail`,placeholder:`Enter valid email address`,required:!Ae.trim(),type:`email`,disabled:Ae.trim().length>0||Ke||Je,value:Oe,onChange:Rt})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`School ID`}),(0,V.jsx)(`input`,{autoComplete:`off`,name:`forgotSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,title:`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`,required:!Oe.trim(),disabled:Oe.trim().length>0||Ke||Je,value:Ae,onChange:zt})]}),(0,V.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,V.jsx)(`span`,{children:`Phone number`}),(0,V.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`forgotPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`09123456789 or +639123456789`,required:!0,type:`tel`,disabled:Ke||Je,value:Me,onChange:Bt})]}),(0,V.jsx)(`button`,{className:`button button--secondary auth-full-field`,disabled:Ke||Je,onClick:async()=>{let e=Vt();if(Ve(``),Ue(``),e){Ve(e);return}let t=Oe.trim().toLowerCase(),n=Ae.trim(),r=xr(Me);qe(!0);try{let e=await tt({email:t||void 0,schoolId:n||void 0,phoneNumber:r});if(!e.success){Ve(e.message||`Unable to send OTP.`);return}Ge(!0),Ue(e.message||`OTP generated successfully. Enter it below to change your password.`)}catch(e){Ve(e instanceof Error?e.message:`Unable to request OTP right now.`)}finally{qe(!1)}},type:`button`,children:Ke?`Sending OTP...`:We?`Resend OTP`:`Send OTP`}),We&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`OTP Code`}),(0,V.jsx)(`input`,{autoComplete:`one-time-code`,inputMode:`numeric`,name:`forgotOtp`,placeholder:`Enter OTP`,required:!0,type:`text`,maxLength:8,value:Pe,onChange:e=>Fe(e.target.value.replace(/\D/g,``))})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`New Password`}),(0,V.jsx)(`input`,{autoComplete:`new-password`,name:`forgotNewPassword`,placeholder:`Enter new password`,required:!0,type:`password`,minLength:6,value:Ie,onChange:e=>Le(e.target.value)})]}),(0,V.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,V.jsx)(`span`,{children:`Confirm New Password`}),(0,V.jsx)(`input`,{autoComplete:`new-password`,name:`forgotConfirmPassword`,placeholder:`Confirm new password`,required:!0,type:`password`,minLength:6,value:Re,onChange:e=>ze(e.target.value)})]})]}),Be&&(0,V.jsx)(`p`,{className:`form-error auth-full-field`,children:Be}),He&&(0,V.jsx)(`p`,{className:`form-success auth-full-field`,children:He})]}),(0,V.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:Ke||Je,onClick:jt,type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`button`,disabled:!We||Ke||Je,type:`submit`,children:Je?`Changing Password...`:`Change Password`})]})]})]}),x&&(0,V.jsxs)(`div`,{"aria-labelledby":`quick-action-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close success modal`,className:`modal-backdrop-button`,onClick:()=>S(``),type:`button`}),(0,V.jsxs)(`div`,{className:`modal-card modal-card--success`,children:[(0,V.jsxs)(`div`,{className:`success-modal-body`,children:[(0,V.jsx)(`div`,{className:`success-icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,V.jsx)(`h3`,{id:`quick-action-success-title`,children:`Submitted Successfully`}),(0,V.jsxs)(`p`,{children:[x,` The scholarship office can now review your request.`]})]}),(0,V.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,V.jsx)(`button`,{className:`button`,onClick:()=>S(``),type:`button`,children:`Done`})})]})]}),(0,V.jsx)(`div`,{className:`scroll-progress`,style:{"--scroll-progress":r}})]})}var Ir=`
.auth-modal-card {
  width: min(100%, 520px);
  max-height: min(760px, calc(100vh - 32px));
  overflow-y: auto;
}

.auth-modal-card--large {
  width: min(100%, 720px);
}

.auth-modal-card.modal-card--wide {
  width: min(100%, 640px);
}

.auth-modal-hero {
  position: relative;
}

.auth-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.auth-full-field {
  grid-column: 1 / -1;
}

.quick-action-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.quick-action-mi-field {
  max-width: 160px;
}

.form-field__help {
  color: #76584a;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
}

.auth-link-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.auth-text-button {
  border: 0;
  background: transparent;
  color: #7c2d12;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 800;
  padding: 0;
  text-align: left;
}

.auth-text-button:hover {
  text-decoration: underline;
}

.auth-text-button--strong {
  color: #c2410c;
}

.auth-note-box {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid #fed7aa;
  border-radius: 12px;
  background: #fff7ed;
  color: #7c2d12;
  padding: 12px;
}

.auth-note-box .material-symbols-outlined {
  color: #f97316;
}

.auth-note-box p {
  margin: 0;
  font-size: 13px;
  line-height: 1.45;
}

.auth-denied-card {
  width: min(100%, 460px);
}

.auth-denied-body {
  padding: 32px 24px 20px;
}

.auth-denied-icon {
  display: inline-flex;
  width: 58px;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #fef2f2;
  color: #b91c1c;
  margin-bottom: 14px;
}

.auth-denied-icon .material-symbols-outlined {
  font-size: 34px;
}

.form-success {
  border: 1px solid #a7f3d0;
  border-radius: 10px;
  background: #ecfdf5;
  color: #047857;
  font-size: 13px;
  font-weight: 700;
  margin: 0;
  padding: 10px 12px;
}

.button--portal {
  background: #7c2d12;
}

.button--portal:hover {
  background: #5f210d;
}

.portal-modal-card {
  width: min(100%, 960px);
  max-height: min(860px, calc(100vh - 32px));
  overflow-y: auto;
}

.portal-status-card {
  width: min(100%, 520px);
}

.portal-modal-header {
  background: linear-gradient(180deg, #fff7ed 0%, #ffffff 100%);
}

.portal-form {
  gap: 18px;
}

.portal-form--hidden {
  display: none;
}

.portal-section {
  display: grid;
  gap: 14px;
  border: 1px solid #fed7aa;
  border-radius: 8px;
  background: #fffaf5;
  padding: 16px;
}

.portal-section h4,
.portal-parent-group p {
  margin: 0;
  color: #431407;
}

.portal-section h4 {
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.portal-parent-group {
  display: grid;
  gap: 12px;
}

.portal-parent-group p {
  font-size: 13px;
  font-weight: 900;
}

.portal-section-heading {
  display: grid;
  gap: 6px;
}

.portal-section-heading p {
  margin: 0;
  color: #6b4f43;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.45;
}

.portal-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.portal-grid--three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.portal-full-field {
  grid-column: 1 / -1;
}

.portal-course-list {
  display: grid;
  grid-column: 1 / -1;
  gap: 10px;
  min-width: 0;
  border: 0;
  margin: 0;
  padding: 0;
}

.portal-course-list legend {
  color: var(--text);
  font-size: 13px;
  font-weight: 900;
  margin-bottom: 2px;
}

.portal-course-option {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 54px;
  overflow: hidden;
  border: 1px solid #e9c6b5;
  border-radius: 12px;
  background: #ffffff;
  color: var(--text);
  cursor: pointer;
  font-size: 14px;
  font-weight: 900;
  line-height: 1.35;
  padding: 14px 16px;
  text-transform: uppercase;
  transition: border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;
}

.portal-course-option:hover {
  border-color: var(--primary);
  background: #fffaf5;
}

.portal-course-option:has(input:checked) {
  border-color: var(--primary);
  background: #fff7ed;
  box-shadow: inset 4px 0 0 var(--primary);
}

.portal-course-option:has(input:focus-visible) {
  box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.2);
}

.portal-course-option input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.portal-document-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.portal-document-upload {
  position: relative;
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 14px;
  min-height: 92px;
  border: 1px solid #e9c6b5;
  border-radius: 12px;
  background: #ffffff;
  cursor: pointer;
  padding: 16px;
  transition: border-color 160ms ease, background 160ms ease, box-shadow 160ms ease,
    transform 160ms ease;
}

.portal-document-upload:hover,
.portal-document-upload--selected {
  border-color: var(--primary);
  background: #fff7ed;
}

.portal-document-upload:hover {
  transform: translateY(-1px);
}

.portal-document-upload:has(input:focus-visible) {
  box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.2);
}

.portal-document-upload input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

.portal-document-upload__icon {
  display: inline-flex;
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #ffedd5;
  color: #9a3412;
}

.portal-document-upload__icon .material-symbols-outlined {
  font-size: 28px;
}

.portal-document-upload__copy {
  display: grid;
  min-width: 0;
  gap: 4px;
}

.portal-document-upload__copy strong {
  overflow-wrap: anywhere;
  color: #431407;
  font-size: 14px;
  font-weight: 900;
  line-height: 1.3;
}

.portal-document-upload--optional {
  border-style: dashed;
}

.portal-document-upload__title {
  display: flex;
  min-width: 0;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.portal-document-upload__copy .portal-document-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  background: #f1f5f9;
  color: #475569;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.05em;
  padding: 4px 8px;
  text-transform: uppercase;
}

.portal-document-upload__copy .portal-document-badge--required {
  background: #ffedd5;
  color: #9a3412;
}

.portal-document-upload__copy span {
  overflow-wrap: anywhere;
  color: #6b4f43;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
}

.portal-review {
  padding-top: 18px;
}

.portal-review-card {
  display: grid;
  gap: 16px;
  border: 1px solid #fed7aa;
  border-radius: 8px;
  background: #fffaf5;
  padding: 16px;
}

.portal-review-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.portal-review-group {
  display: grid;
  min-width: 0;
  gap: 10px;
  border: 1px solid #e9c6b5;
  border-radius: 8px;
  background: #ffffff;
  padding: 14px;
}

.portal-review-group h5 {
  margin: 0;
  color: #431407;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.portal-review-group dl {
  display: grid;
  gap: 10px;
  margin: 0;
}

.portal-review-group dl div {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.portal-review-group dt {
  color: #8b5e4a;
  font-size: 12px;
  font-weight: 900;
}

.portal-review-group dd {
  margin: 0;
  overflow-wrap: anywhere;
  color: var(--text);
  font-size: 14px;
  font-weight: 800;
  line-height: 1.4;
}

.portal-form .form-field select {
  width: 100%;
  border: 1px solid var(--outline-soft);
  border-radius: 8px;
  background: #ffffff;
  color: var(--text);
  font: inherit;
  font-size: 14px;
  padding: 12px 14px;
  box-shadow: inset 0 1px 0 rgba(28, 27, 27, 0.02);
  transition: border-color 160ms ease, box-shadow 160ms ease;
}

.portal-form .form-field select:focus {
  border-color: var(--primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.2);
}

.portal-actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.portal-message-row {
  display: grid;
  gap: 8px;
  padding: 0 24px 16px;
}

.portal-message-row .form-error,
.portal-message-row .form-success {
  margin: 0;
}

.portal-actions .button {
  width: auto;
}

@media (max-width: 900px) {
  .portal-grid,
  .portal-grid--three {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .portal-document-grid {
    grid-template-columns: 1fr;
  }

  .portal-review-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .modal-overlay {
    align-items: flex-end;
    padding: 10px;
  }

  .auth-modal-card,
  .auth-modal-card--large,
  .portal-modal-card {
    width: 100%;
    max-height: calc(100vh - 20px);
    border-radius: 18px 18px 10px 10px;
  }

  .button--portal {
    width: 100%;
  }

  .auth-form-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .quick-action-form-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .quick-action-mi-field {
    max-width: none;
  }

  .portal-grid,
  .portal-grid--three {
    grid-template-columns: 1fr;
  }

  .portal-section {
    padding: 14px;
  }

  .portal-review {
    padding: 14px 18px 18px;
  }

  .portal-review-card,
  .portal-review-group {
    padding: 14px;
  }

  .portal-document-upload {
    align-items: flex-start;
    min-height: auto;
    padding: 14px;
  }

  .auth-link-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .auth-actions,
  .portal-actions {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .auth-actions .button,
  .portal-actions .button {
    width: 100%;
  }

  .admin-login-hero {
    padding: 24px 18px;
  }

  .admin-login-body {
    padding: 18px;
  }

  .modal-actions {
    padding: 16px 18px;
  }
}
`,Lr=`/IBACMI-Scholarship-Office/assets/samp-wIlKUzMl.jpg`,Rr={tesAwardNo:``,studentId:``,batchNo:``,status:``,semester:``,schoolYear:``};function zr(e){return[...new Set(e.filter(Boolean))]}function Br(e){let t=String(e??``).match(/\d{4}/);return t?Number(t[0]):0}function Vr(){let e=new Date,t=e.getFullYear(),n=e.getMonth()>=5?t:t-1;return`${n}-${n+1}`}function Hr(e){return e.replace(/[\s-]/g,``).trim()}function Ur(e){return e.replace(/[^\d+]/g,``).replace(/(?!^)\+/g,``)}function Wr(e){let t=Hr(e);return/^09\d{9}$/.test(t)||/^\+639\d{9}$/.test(t)}function Gr(e){let t=Vr();return e.find(e=>e.schoolYear===t)||[...e].sort((e,t)=>{let n=Br(t.schoolYear)-Br(e.schoolYear);return n===0?(t.uploadedAt??0)-(e.uploadedAt??0):n})[0]}function Kr({studentSession:e,onLogout:t,onStudentSessionUpdate:n}){let r=dn(jn.allinfo.list),i=fn(jn.allinfo.generateUploadUrl),a=fn(jn.allinfo.saveStudentIdUploads),o=fn(jn.adminAuth.updateStudentPhoneNumber),[s,c]=(0,B.useState)(null),[l,u]=(0,B.useState)(``),[d,f]=(0,B.useState)(``),[p,m]=(0,B.useState)(!1),[h,g]=(0,B.useState)(e?.phoneNumber??``),[_,v]=(0,B.useState)(``),[y,b]=(0,B.useState)(``),[x,S]=(0,B.useState)(!1),C=fn(jn.adminAuth.updateStudentCurrentAddress),[w,T]=(0,B.useState)(e?.currentAddress??``),[E,D]=(0,B.useState)(``),[O,k]=(0,B.useState)(``),[ee,A]=(0,B.useState)(!1),j=String(e?.schoolId??``).trim().toLowerCase(),te=e?.phoneNumber??``,M=Hr(h)!==Hr(te),N=e?.currentAddress??``,ne=w.trim()!==N.trim(),P=(0,B.useMemo)(()=>!j||!r?null:Gr(r.filter(e=>String(e.studentId??``).trim().toLowerCase()===j))??null,[r,j]),re=P?{tesAwardNo:P.tesAwardNumber??``,studentId:P.studentId??``,lastName:P.lastName??``,firstName:P.firstName??``,middleInitial:P.middleInitial??``,batchNo:P.batchId??``,status:P.status??``,semester:P.semester??``,schoolYear:P.schoolYear??``}:Rr,ie=r===void 0,F=!!j,I=!ie&&F&&!P,ae=zr([re.status,`Validated`,`Pending`,`Rejected`]),oe=zr([re.semester,`1st Semester`,`2nd Semester`]),se=zr([re.schoolYear,`2023-2024`,`2024-2025`]),ce=!!P?.frontIdStorageId,le=P?.frontIdUrl??``,L=()=>{typeof t==`function`&&t()},ue=e=>{g(Ur(e.target.value)),v(``),b(``)},de=e=>{T(e.target.value),D(``),k(``)},fe=async()=>{let t=Hr(h);if(v(``),b(``),!j){v(`Please sign in before updating your phone number.`);return}if(!t){v(`Phone number is required.`);return}if(!Wr(t)){v(`Please enter a valid phone number. Example: 09123456789 or +639123456789.`);return}if(!M){b(`Phone number is already up to date.`);return}S(!0);try{let r=await o({schoolId:e.schoolId,phoneNumber:t});if(!r.success){v(r.message||`Unable to update phone number.`);return}g(r.admin?.phoneNumber??t),b(r.message||`Phone number updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){v(e instanceof Error?e.message:`Unable to update phone number.`)}finally{S(!1)}},pe=async()=>{let t=w.trim();if(D(``),k(``),!j){D(`Please sign in before updating your current address.`);return}if(!t){D(`Current address is required.`);return}if(t.length<8){D(`Current address must be at least 8 characters.`);return}if(!ne){k(`Current address is already up to date.`);return}A(!0);try{let r=await C({schoolId:e.schoolId,currentAddress:t});if(!r.success){D(r.message||`Unable to update current address.`);return}T(r.admin?.currentAddress??t),k(r.message||`Current address updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){D(e instanceof Error?e.message:`Unable to update current address.`)}finally{A(!1)}},me=e=>t=>{let n=t.target.files?.[0]??null;if(u(``),f(``),n&&n.type!==`application/pdf`&&!/\.pdf$/i.test(n.name)){u(`Only PDF files are allowed.`),t.target.value=``,e(null);return}if(n&&n.size>5*1024*1024){u(`Each file must be 5MB or smaller.`),t.target.value=``,e(null);return}e(n)},he=async e=>{let t=await i(),n=await fetch(t,{method:`POST`,headers:{"Content-Type":e.type||`application/octet-stream`},body:e});if(!n.ok)throw Error(`Unable to upload ${e.name}.`);let{storageId:r}=await n.json();return r};return(0,V.jsxs)(`div`,{className:`student-page`,children:[(0,V.jsxs)(`header`,{className:`student-topbar`,children:[(0,V.jsx)(`button`,{"aria-label":`Log out and return to landing page`,className:`student-icon-button`,onClick:L,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`arrow_back`})}),(0,V.jsx)(`h1`,{children:`Student Information`})]}),(0,V.jsxs)(`main`,{className:`student-main`,children:[(0,V.jsxs)(`section`,{className:`student-hero`,"aria-labelledby":`student-title`,children:[(0,V.jsx)(`div`,{className:`student-badge`,children:`Academic Year Update`}),(0,V.jsx)(`h2`,{id:`student-title`,children:`Unifast Portal`}),(0,V.jsx)(`p`,{children:`Please ensure all details match your official documents for successful validation.`})]}),!F&&(0,V.jsx)(`div`,{className:`student-state-box`,children:`Please sign in with a student account to view your grantee information.`}),ie&&(0,V.jsx)(`div`,{className:`student-state-box`,children:`Loading your grantee information...`}),I&&(0,V.jsxs)(`div`,{className:`student-state-box student-state-box--warning`,children:[`No allinfo record was found for Student ID `,e?.schoolId,`.`]}),(0,V.jsxs)(`form`,{className:`student-form`,id:`student-information-form`,children:[(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`tes-award-no`,children:`TES Award No.`}),(0,V.jsx)(`input`,{id:`tes-award-no`,placeholder:`e.g. TES-2024-XXXX`,readOnly:!0,type:`text`,value:re.tesAwardNo})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`student-id`,children:`Student ID`}),(0,V.jsx)(`input`,{id:`student-id`,placeholder:`Enter your University ID`,readOnly:!0,type:`text`,value:re.studentId})]}),(0,V.jsxs)(`div`,{className:`student-field student-field--with-action`,children:[(0,V.jsx)(`label`,{htmlFor:`phone-number`,children:`Phone No.`}),(0,V.jsxs)(`div`,{className:`student-inline-control`,children:[(0,V.jsx)(`input`,{id:`phone-number`,inputMode:`tel`,pattern:`\\+?[0-9]*`,placeholder:`09123456789 or +639123456789`,type:`tel`,value:h,onChange:ue}),(0,V.jsx)(`button`,{className:`student-inline-button`,disabled:!F||!M||x,onClick:fe,type:`button`,children:x?`Saving...`:`Save`})]}),_&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:_}),y&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:y})]}),(0,V.jsxs)(`div`,{className:`student-field student-field--with-action student-field--full`,children:[(0,V.jsx)(`label`,{htmlFor:`current-address`,children:`Current Address`}),(0,V.jsx)(`textarea`,{id:`current-address`,placeholder:`Enter your current address`,rows:3,value:w,onChange:de}),(0,V.jsx)(`button`,{className:`student-inline-button student-inline-button--wide`,disabled:!F||!ne||ee,onClick:pe,type:`button`,children:ee?`Saving Address...`:`Save Current Address`}),E&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:E}),O&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:O})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`last-name`,children:`Last Name`}),(0,V.jsx)(`input`,{id:`last-name`,placeholder:`Last Name`,readOnly:!0,type:`text`,value:re.lastName})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`first-name`,children:`First Name`}),(0,V.jsx)(`input`,{id:`first-name`,placeholder:`First Name`,readOnly:!0,type:`text`,value:re.firstName})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`middle-initial`,children:`MI.`}),(0,V.jsx)(`input`,{id:`middle-initial`,placeholder:`MI.`,readOnly:!0,type:`text`,value:re.middleInitial})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`batch-no`,children:`Batch No.`}),(0,V.jsx)(`input`,{id:`batch-no`,placeholder:`e.g. Batch 7`,readOnly:!0,type:`text`,value:re.batchNo})]}),(0,V.jsxs)(`div`,{className:`student-select-grid`,children:[(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`status`,children:`Status`}),(0,V.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,V.jsxs)(`select`,{disabled:!0,id:`status`,value:re.status,children:[(0,V.jsx)(`option`,{disabled:!0,value:``,children:`Select Status`}),ae.map(e=>(0,V.jsx)(`option`,{children:e},e))]}),(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`semester`,children:`Semester`}),(0,V.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,V.jsxs)(`select`,{disabled:!0,id:`semester`,value:re.semester,children:[(0,V.jsx)(`option`,{disabled:!0,value:``,children:`Select Semester`}),oe.map(e=>(0,V.jsx)(`option`,{children:e},e))]}),(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`school-year`,children:`School Year`}),(0,V.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,V.jsxs)(`select`,{disabled:!0,id:`school-year`,value:re.schoolYear,children:[(0,V.jsx)(`option`,{disabled:!0,value:``,children:`Select School Year`}),se.map(e=>(0,V.jsx)(`option`,{children:e},e))]}),(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]})]}),(0,V.jsxs)(`section`,{className:`student-upload-section`,"aria-labelledby":`student-upload-title`,children:[(0,V.jsxs)(`div`,{className:`student-upload-copy`,children:[(0,V.jsx)(`h3`,{id:`student-upload-title`,children:`Upload colored copy of School ID with 3 signatures and Batch No.`}),(0,V.jsxs)(`p`,{children:[`Files will be saved to your `,re.schoolYear||`current`,` allinfo record. If you have records from other years, the portal automatically uses the current or latest School Year.`]})]}),(0,V.jsxs)(`aside`,{className:`student-sample-card`,"aria-label":`Sample School ID upload format`,children:[(0,V.jsxs)(`div`,{className:`student-sample-card__header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{className:`student-sample-card__eyebrow`,children:`Sample Format`}),(0,V.jsx)(`h4`,{children:`Scan layout guide`})]}),(0,V.jsx)(`span`,{className:`student-sample-card__badge`,children:`Required`})]}),(0,V.jsxs)(`div`,{className:`student-sample-card__body`,children:[(0,V.jsx)(`a`,{className:`student-sample-card__image-link`,href:Lr,rel:`noreferrer`,target:`_blank`,title:`Open sample format`,children:(0,V.jsx)(`img`,{alt:`Sample scan format showing front and back School ID, three signatures, and Batch No.`,src:Lr})}),(0,V.jsxs)(`div`,{className:`student-sample-card__checklist`,children:[(0,V.jsx)(`p`,{children:`Before converting to PDF, make sure your scan includes:`}),(0,V.jsxs)(`ul`,{children:[(0,V.jsx)(`li`,{children:`Colored front and back copy of your School ID`}),(0,V.jsx)(`li`,{children:`Three clear signatures below the ID copies`}),(0,V.jsx)(`li`,{children:`Readable Batch No. written on the same page`})]}),(0,V.jsx)(`span`,{children:`Upload the final file as PDF only, maximum 5MB.`})]})]})]}),(0,V.jsxs)(`div`,{className:`student-upload-field`,children:[(0,V.jsx)(`span`,{className:`student-upload-label`,children:`Upload File`}),(0,V.jsxs)(`label`,{className:`student-upload-card${s||ce?` student-upload-card--selected`:``}`,htmlFor:`file-front`,children:[(0,V.jsx)(`input`,{accept:`application/pdf,.pdf`,disabled:!P||p,id:`file-front`,type:`file`,onChange:me(c)}),(0,V.jsx)(`span`,{className:`student-upload-icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`id_card`})}),(0,V.jsx)(`span`,{className:`student-upload-title`,children:s?.name||(ce?`File already uploaded`:`Tap to upload File`)}),(0,V.jsx)(`span`,{className:`student-upload-note`,children:`PDF only up to 5MB`})]})]}),le&&(0,V.jsxs)(`div`,{className:`student-id-preview`,children:[(0,V.jsxs)(`div`,{className:`student-id-preview__header`,children:[(0,V.jsx)(`span`,{children:`Uploaded School ID`}),(0,V.jsx)(`a`,{href:le,rel:`noreferrer`,target:`_blank`,children:`View full file`})]}),(0,V.jsxs)(`a`,{className:`student-id-preview__file`,href:le,rel:`noreferrer`,target:`_blank`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`}),`Open uploaded PDF`]})]}),l&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:l}),d&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:d}),(0,V.jsxs)(`button`,{className:`student-save-button`,disabled:!P||p,onClick:async()=>{if(u(``),f(``),!P){u(`No allinfo record is available for your Student ID.`);return}if(!s){u(`Choose a PDF file before saving.`);return}m(!0);try{let e=await he(s),t=await a({studentId:P.studentId,schoolYear:P.schoolYear,frontIdStorageId:e});c(null),f(`ID file saved for School Year ${t.schoolYear||re.schoolYear}.`)}catch(e){u(e instanceof Error?e.message:`Unable to save uploaded files.`)}finally{m(!1)}},type:`button`,children:[(0,V.jsx)(`span`,{children:p?`Saving Uploads...`:`Save Uploaded ID`}),(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})]})]})]})]})]})}var qr=class extends B.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error(`ErrorBoundary caught`,e,t)}render(){if(this.state.hasError){let e=this.state.error?.message||`An unexpected error occurred.`;return(0,V.jsx)(`div`,{style:{minHeight:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:24,boxSizing:`border-box`,background:`#fbfaf8`,color:`#1c1b1b`,fontFamily:`'Hanken Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`},children:(0,V.jsxs)(`div`,{style:{maxWidth:720},children:[(0,V.jsx)(`h2`,{style:{marginTop:0},children:`Something went wrong`}),(0,V.jsx)(`p`,{style:{color:`#584237`,fontWeight:700},children:e}),(0,V.jsx)(`p`,{style:{color:`#584237`},children:'If the message mentions Convex functions (for example "Could not find public function"), make sure the Convex dev server is running (`npx convex dev`) or that `VITE_CONVEX_URL` points to a deployed Convex app.'}),(0,V.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:18},children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>window.location.reload(),style:{background:`#ea580c`,color:`#fff`,border:0,padding:`10px 14px`,borderRadius:8,fontWeight:800,cursor:`pointer`},children:`Reload`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>alert("Run `npx convex dev` in the project root or set VITE_CONVEX_URL."),style:{background:`#fff`,color:`#1c1b1b`,border:`1px solid rgba(150,116,101,0.6)`,padding:`10px 14px`,borderRadius:8,fontWeight:700,cursor:`pointer`},children:`Help`})]})]})})}return this.props.children}},Jr=`unifast.adminSession`,Yr=`unifast.studentViewOpen`,Xr=`unifast.studentSession`;function Zr(){try{let e=window.localStorage.getItem(Jr);return e?JSON.parse(e):null}catch{return null}}function Qr(){try{return window.localStorage.getItem(Yr)===`true`}catch{return!1}}function $r(){try{let e=window.localStorage.getItem(Xr);return e?JSON.parse(e):null}catch{return null}}function ei(){let e=(0,An.c)(21),[t,n]=(0,B.useState)(Zr),[r,i]=(0,B.useState)($r),[a,o]=(0,B.useState)(Qr),s;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=()=>{n(null)},e[0]=s):s=e[0];let c=s,l;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(l=()=>{i(null),o(!1)},e[1]=l):l=e[1];let u=l,d;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(d=e=>{if(e?.role===`student`){n(null),i(e),o(!0);return}i(null),o(!1),n(e)},e[2]=d):d=e[2];let f=d,p;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(p=e=>{n(null),i(e??null),o(!0)},e[3]=p):p=e[3];let m=p,h;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(h=e=>{i(t=>({...t??{},...e??{}}))},e[4]=h):h=e[4];let g=h,_,v;e[5]===t?(_=e[6],v=e[7]):(_=()=>{if(!t)return;let e=window.location.href,n={...window.history.state??{},unifastAdminGuard:!0};window.history.pushState(n,``,e);let r=()=>{window.history.pushState(n,``,e)};return window.addEventListener(`popstate`,r),()=>window.removeEventListener(`popstate`,r)},v=[t],e[5]=t,e[6]=_,e[7]=v),(0,B.useEffect)(_,v);let y,b;e[8]===t?(y=e[9],b=e[10]):(y=()=>{try{if(t){window.localStorage.setItem(Jr,JSON.stringify(t)),window.localStorage.removeItem(Yr),window.localStorage.removeItem(Xr);return}window.localStorage.removeItem(Jr)}catch{}},b=[t],e[8]=t,e[9]=y,e[10]=b),(0,B.useEffect)(y,b);let x,S;if(e[11]!==a||e[12]!==r?(S=()=>{try{if(a){window.localStorage.setItem(Yr,`true`),window.localStorage.removeItem(Jr),r&&window.localStorage.setItem(Xr,JSON.stringify(r));return}window.localStorage.removeItem(Yr),window.localStorage.removeItem(Xr)}catch{}},x=[a,r],e[11]=a,e[12]=r,e[13]=x,e[14]=S):(x=e[13],S=e[14]),(0,B.useEffect)(S,x),t){let n;return e[15]===t?n=e[16]:(n=(0,V.jsx)(qr,{children:(0,V.jsx)(pr,{adminSession:t,onLogout:c})}),e[15]=t,e[16]=n),n}if(a){let t=r?.schoolId??`student`,n;return e[17]!==r||e[18]!==t?(n=(0,V.jsx)(qr,{children:(0,V.jsx)(Kr,{studentSession:r,onLogout:u,onStudentSessionUpdate:g},t)}),e[17]=r,e[18]=t,e[19]=n):n=e[19],n}let C;return e[20]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,V.jsx)(qr,{children:(0,V.jsx)(Fr,{onAdminLoginSuccess:f,onStudentRegistrationSuccess:m})}),e[20]=C):C=e[20],C}var ti=`https://ideal-crane-292.convex.cloud`,ni=(0,Tn.createRoot)(document.getElementById(`root`));{let e=new sn(ti);ni.render((0,V.jsx)(B.StrictMode,{children:(0,V.jsx)(un,{client:e,children:(0,V.jsx)(ei,{})})}))}