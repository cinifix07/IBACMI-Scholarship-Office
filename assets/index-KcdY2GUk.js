var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();for(var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return ee(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function k(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,k(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),k(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=k(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=k(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return k(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function A(e,t,n){if(e==null)return e;var r=[],i=0;return k(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function j(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ae={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ae,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:j}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,ie)}catch(e){ie(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=[],f=[],p=Uint8Array,m=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,h=0,g=m.length;h<g;++h)d[h]=m[h],f[m.charCodeAt(h)]=h;f[45]=62,f[95]=63;function _(e){var t=e.length;if(t%4>0)throw Error(`Invalid string. Length must be a multiple of 4`);var n=e.indexOf(`=`);n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function v(e,t,n){return(t+n)*3/4-n}function y(e){var t,n=_(e),r=n[0],i=n[1],a=new p(v(e,r,i)),o=0,s=i>0?r-4:r,c;for(c=0;c<s;c+=4)t=f[e.charCodeAt(c)]<<18|f[e.charCodeAt(c+1)]<<12|f[e.charCodeAt(c+2)]<<6|f[e.charCodeAt(c+3)],a[o++]=t>>16&255,a[o++]=t>>8&255,a[o++]=t&255;return i===2&&(t=f[e.charCodeAt(c)]<<2|f[e.charCodeAt(c+1)]>>4,a[o++]=t&255),i===1&&(t=f[e.charCodeAt(c)]<<10|f[e.charCodeAt(c+1)]<<4|f[e.charCodeAt(c+2)]>>2,a[o++]=t>>8&255,a[o++]=t&255),a}function b(e){return d[e>>18&63]+d[e>>12&63]+d[e>>6&63]+d[e&63]}function x(e,t,n){for(var r,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(e[a+2]&255),i.push(b(r));return i.join(``)}function S(e){for(var t,n=e.length,r=n%3,i=[],a=16383,o=0,s=n-r;o<s;o+=a)i.push(x(e,o,o+a>s?s:o+a));return r===1?(t=e[n-1],i.push(d[t>>2]+d[t<<4&63]+`==`)):r===2&&(t=(e[n-2]<<8)+e[n-1],i.push(d[t>>10]+d[t>>4&63]+d[t<<2&63]+`=`)),i.join(``)}function C(e){if(e===void 0)return{};if(!T(e))throw Error(`The arguments to a Convex function must be an object. Received: ${e}`);return e}function w(e){if(e===void 0)throw Error(`Client created with undefined deployment address. If you used an environment variable, check that it's set.`);if(typeof e!=`string`)throw Error(`Invalid deployment address: found ${e}".`);if(!(e.startsWith(`http:`)||e.startsWith(`https:`)))throw Error(`Invalid deployment address: Must start with "https://" or "http://". Found "${e}".`);try{new URL(e)}catch{throw Error(`Invalid deployment address: "${e}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}if(e.endsWith(`.convex.site`))throw Error(`Invalid deployment address: "${e}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}function T(e){let t=typeof e==`object`,n=Object.getPrototypeOf(e),r=n===null||n===Object.prototype||n?.constructor?.name===`Object`;return t&&r}var ee=!0,E=BigInt(`-9223372036854775808`),D=BigInt(`9223372036854775807`),O=BigInt(`0`),te=BigInt(`8`),ne=BigInt(`256`);function re(e){return Number.isNaN(e)||!Number.isFinite(e)||Object.is(e,-0)}function k(e){e<O&&(e-=E+E);let t=e.toString(16);t.length%2==1&&(t=`0`+t);let n=new Uint8Array(new ArrayBuffer(8)),r=0;for(let i of t.match(/.{2}/g).reverse())n.set([parseInt(i,16)],r++),e>>=te;return S(n)}function A(e){let t=y(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);let n=O,r=O;for(let e of t)n+=BigInt(e)*ne**r,r++;return n>D&&(n+=E+E),n}function j(e){if(e<E||D<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);let t=new ArrayBuffer(8);return new DataView(t).setBigInt64(0,e,!0),S(new Uint8Array(t))}function ie(e){let t=y(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);return new DataView(t.buffer).getBigInt64(0,!0)}var ae=DataView.prototype.setBigInt64?j:k,M=DataView.prototype.getBigInt64?ie:A,oe=1024;function N(e){if(e.length>oe)throw Error(`Field name ${e} exceeds maximum field name length ${oe}.`);if(e.startsWith(`$`))throw Error(`Field name ${e} starts with a '$', which is reserved.`);for(let t=0;t<e.length;t+=1){let n=e.charCodeAt(t);if(n<32||n>=127)throw Error(`Field name ${e} has invalid character '${e[t]}': Field names can only contain non-control ASCII characters`)}}function P(e){if(e===null||typeof e==`boolean`||typeof e==`number`||typeof e==`string`)return e;if(Array.isArray(e))return e.map(e=>P(e));if(typeof e!=`object`)throw Error(`Unexpected type of ${e}`);let t=Object.entries(e);if(t.length===1){let n=t[0][0];if(n===`$bytes`){if(typeof e.$bytes!=`string`)throw Error(`Malformed $bytes field on ${e}`);return y(e.$bytes).buffer}if(n===`$integer`){if(typeof e.$integer!=`string`)throw Error(`Malformed $integer field on ${e}`);return M(e.$integer)}if(n===`$float`){if(typeof e.$float!=`string`)throw Error(`Malformed $float field on ${e}`);let t=y(e.$float);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $float`);let n=new DataView(t.buffer).getFloat64(0,ee);if(!re(n))throw Error(`Float ${n} should be encoded as a number`);return n}if(n===`$set`)throw Error(`Received a Set which is no longer supported as a Convex type.`);if(n===`$map`)throw Error(`Received a Map which is no longer supported as a Convex type.`)}let n={};for(let[t,r]of Object.entries(e))N(t),n[t]=P(r);return n}var F=16384;function I(e){let t=JSON.stringify(e,(e,t)=>t===void 0?`undefined`:typeof t==`bigint`?`${t.toString()}n`:t);if(t.length>F){let e=F-14,n=t.codePointAt(e-1);return n!==void 0&&n>65535&&--e,t.substring(0,e)+`[...truncated]`}return t}function L(e,t,n,r){if(e===void 0){let e=n&&` (present at path ${n} in original object ${I(t)})`;throw Error(`undefined is not a valid Convex value${e}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`)}if(e===null)return e;if(typeof e==`bigint`){if(e<E||D<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);return{$integer:ae(e)}}if(typeof e==`number`)if(re(e)){let t=new ArrayBuffer(8);return new DataView(t).setFloat64(0,e,ee),{$float:S(new Uint8Array(t))}}else return e;if(typeof e==`boolean`||typeof e==`string`)return e;if(e instanceof ArrayBuffer)return{$bytes:S(new Uint8Array(e))};if(Array.isArray(e))return e.map((e,r)=>L(e,t,n+`[${r}]`,!1));if(e instanceof Set)throw Error(se(n,`Set`,[...e],t));if(e instanceof Map)throw Error(se(n,`Map`,[...e],t));if(!T(e)){let r=e?.constructor?.name,i=r?`${r} `:``;throw Error(se(n,i,e,t))}let i={},a=Object.entries(e);a.sort(([e,t],[n,r])=>e===n?0:e<n?-1:1);for(let[e,o]of a)o===void 0?r&&(N(e),i[e]=ce(o,t,n+`.${e}`)):(N(e),i[e]=L(o,t,n+`.${e}`,!1));return i}function se(e,t,n,r){return e?`${t}${I(n)} is not a supported Convex type (present at path ${e} in original object ${I(r)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`:`${t}${I(n)} is not a supported Convex type.`}function ce(e,t,n){if(e===void 0)return{$undefined:null};if(t===void 0)throw Error(`Programming error. Current value is ${I(e)} but original value is undefined`);return L(e,t,n,!1)}function le(e){return L(e,e,``,!1)}var ue=Object.defineProperty,de=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t,n)=>de(e,typeof t==`symbol`?t:t+``,n),fe,pe,me=Symbol.for(`ConvexError`),z=class extends (pe=Error,fe=me,pe){constructor(e){super(typeof e==`string`?e:I(e)),R(this,`name`,`ConvexError`),R(this,`data`),R(this,fe,!0),this.data=e}},he=`1.40.0`,ge=Object.defineProperty,_e=(e,t,n)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ve=(e,t,n)=>_e(e,typeof t==`symbol`?t:t+``,n),ye=`color:rgb(0, 145, 255)`;function be(e){switch(e){case`query`:return`Q`;case`mutation`:return`M`;case`action`:return`A`;case`any`:return`?`}}var xe=class{constructor(e){ve(this,`_onLogLineFuncs`),ve(this,`_verbose`),this._onLogLineFuncs={},this._verbose=e.verbose}addLogLineListener(e){let t=Math.random().toString(36).substring(2,15);for(let e=0;e<10&&this._onLogLineFuncs[t]!==void 0;e++)t=Math.random().toString(36).substring(2,15);return this._onLogLineFuncs[t]=e,()=>{delete this._onLogLineFuncs[t]}}logVerbose(...e){if(this._verbose)for(let t of Object.values(this._onLogLineFuncs))t(`debug`,`${new Date().toISOString()}`,...e)}log(...e){for(let t of Object.values(this._onLogLineFuncs))t(`info`,...e)}warn(...e){for(let t of Object.values(this._onLogLineFuncs))t(`warn`,...e)}error(...e){for(let t of Object.values(this._onLogLineFuncs))t(`error`,...e)}};function Se(e){let t=new xe(e);return t.addLogLineListener((e,...t)=>{switch(e){case`debug`:console.debug(...t);break;case`info`:console.log(...t);break;case`warn`:console.warn(...t);break;case`error`:console.error(...t);break;default:console.log(...t)}}),t}function Ce(e){return new xe(e)}function we(e,t,n,r,i){let a=be(n);if(typeof i==`object`&&(i=`ConvexError ${JSON.stringify(i.errorData,null,2)}`),t===`info`){let t=i.match(/^\[.*?\] /);if(t===null){e.error(`[CONVEX ${a}(${r})] Could not parse console.log`);return}let n=i.slice(1,t[0].length-2),o=i.slice(t[0].length);e.log(`%c[CONVEX ${a}(${r})] [${n}]`,ye,o)}else e.error(`[CONVEX ${a}(${r})] ${i}`)}function Te(e,t){let n=`[CONVEX FATAL ERROR] ${t}`;return e.error(n),Error(n)}function Ee(e,t,n){return`[CONVEX ${be(e)}(${t})] ${n.errorMessage}
  Called by client`}function De(e,t){return t.data=e.errorData,t}function Oe(e){let t=e.split(`:`),n,r;return t.length===1?(n=t[0],r=`default`):(n=t.slice(0,t.length-1).join(`:`),r=t[t.length-1]),n.endsWith(`.js`)&&(n=n.slice(0,-3)),`${n}:${r}`}function ke(e,t){return JSON.stringify({udfPath:Oe(e),args:le(t)})}function Ae(e,t,n){let{initialNumItems:r,id:i}=n;return JSON.stringify({type:`paginated`,udfPath:Oe(e),args:le(t),options:le({initialNumItems:r,id:i})})}var je=Object.defineProperty,Me=(e,t,n)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ne=(e,t,n)=>Me(e,typeof t==`symbol`?t:t+``,n),Pe=class{constructor(){Ne(this,`nextQueryId`),Ne(this,`querySetVersion`),Ne(this,`querySet`),Ne(this,`queryIdToToken`),Ne(this,`identityVersion`),Ne(this,`auth`),Ne(this,`outstandingQueriesOlderThanRestart`),Ne(this,`outstandingAuthOlderThanRestart`),Ne(this,`paused`),Ne(this,`pendingQuerySetModifications`),this.nextQueryId=0,this.querySetVersion=0,this.identityVersion=0,this.querySet=new Map,this.queryIdToToken=new Map,this.outstandingQueriesOlderThanRestart=new Set,this.outstandingAuthOlderThanRestart=!1,this.paused=!1,this.pendingQuerySetModifications=new Map}hasSyncedPastLastReconnect(){return this.outstandingQueriesOlderThanRestart.size===0&&!this.outstandingAuthOlderThanRestart}markAuthCompletion(){this.outstandingAuthOlderThanRestart=!1}subscribe(e,t,n,r){let i=Oe(e),a=ke(i,t),o=this.querySet.get(a);if(o!==void 0)return o.numSubscribers+=1,{queryToken:a,modification:null,unsubscribe:()=>this.removeSubscriber(a)};{let e=this.nextQueryId++,o={id:e,canonicalizedUdfPath:i,args:t,numSubscribers:1,journal:n,componentPath:r};this.querySet.set(a,o),this.queryIdToToken.set(e,a);let s=this.querySetVersion,c=this.querySetVersion+1,l={type:`Add`,queryId:e,udfPath:i,args:[le(t)],journal:n,componentPath:r};return this.paused?this.pendingQuerySetModifications.set(e,l):this.querySetVersion=c,{queryToken:a,modification:{type:`ModifyQuerySet`,baseVersion:s,newVersion:c,modifications:[l]},unsubscribe:()=>this.removeSubscriber(a)}}}transition(e){for(let t of e.modifications)switch(t.type){case`QueryUpdated`:case`QueryFailed`:{this.outstandingQueriesOlderThanRestart.delete(t.queryId);let e=t.journal;if(e!==void 0){let n=this.queryIdToToken.get(t.queryId);n!==void 0&&(this.querySet.get(n).journal=e)}break}case`QueryRemoved`:this.outstandingQueriesOlderThanRestart.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}}queryId(e,t){let n=ke(Oe(e),t),r=this.querySet.get(n);return r===void 0?null:r.id}isCurrentOrNewerAuthVersion(e){return e>=this.identityVersion}getAuth(){return this.auth}setAuth(e){this.auth={tokenType:`User`,value:e};let t=this.identityVersion;return this.paused||(this.identityVersion=t+1),{type:`Authenticate`,baseVersion:t,...this.auth}}setAdminAuth(e,t){let n={tokenType:`Admin`,value:e,impersonating:t};this.auth=n;let r=this.identityVersion;return this.paused||(this.identityVersion=r+1),{type:`Authenticate`,baseVersion:r,...n}}clearAuth(){this.auth=void 0,this.markAuthCompletion();let e=this.identityVersion;return this.paused||(this.identityVersion=e+1),{type:`Authenticate`,tokenType:`None`,baseVersion:e}}hasAuth(){return!!this.auth}isNewAuth(e){return this.auth?.value!==e}queryPath(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).canonicalizedUdfPath:null}queryArgs(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).args:null}queryToken(e){return this.queryIdToToken.get(e)??null}queryJournal(e){return this.querySet.get(e)?.journal}restart(){this.unpause(),this.outstandingQueriesOlderThanRestart.clear();let e=[];for(let t of this.querySet.values()){let n={type:`Add`,queryId:t.id,udfPath:t.canonicalizedUdfPath,args:[le(t.args)],journal:t.journal,componentPath:t.componentPath};e.push(n),this.outstandingQueriesOlderThanRestart.add(t.id)}this.querySetVersion=1;let t={type:`ModifyQuerySet`,baseVersion:0,newVersion:1,modifications:e};if(!this.auth)return this.identityVersion=0,[t,void 0];this.outstandingAuthOlderThanRestart=!0;let n={type:`Authenticate`,baseVersion:0,...this.auth};return this.identityVersion=1,[t,n]}pause(){this.paused=!0}resume(){let e=this.pendingQuerySetModifications.size>0?{type:`ModifyQuerySet`,baseVersion:this.querySetVersion,newVersion:++this.querySetVersion,modifications:Array.from(this.pendingQuerySetModifications.values())}:void 0,t=this.auth===void 0?void 0:{type:`Authenticate`,baseVersion:this.identityVersion++,...this.auth};return this.unpause(),[e,t]}unpause(){this.paused=!1,this.pendingQuerySetModifications.clear()}removeSubscriber(e){let t=this.querySet.get(e);if(t.numSubscribers>1)return--t.numSubscribers,null;{this.querySet.delete(e),this.queryIdToToken.delete(t.id),this.outstandingQueriesOlderThanRestart.delete(t.id);let n=this.querySetVersion,r=this.querySetVersion+1,i={type:`Remove`,queryId:t.id};return this.paused?this.pendingQuerySetModifications.has(t.id)?this.pendingQuerySetModifications.delete(t.id):this.pendingQuerySetModifications.set(t.id,i):this.querySetVersion=r,{type:`ModifyQuerySet`,baseVersion:n,newVersion:r,modifications:[i]}}}},Fe=Object.defineProperty,Ie=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Le=(e,t,n)=>Ie(e,typeof t==`symbol`?t:t+``,n),Re=class{constructor(e,t){this.logger=e,this.markConnectionStateDirty=t,Le(this,`inflightRequests`),Le(this,`requestsOlderThanRestart`),Le(this,`inflightMutationsCount`,0),Le(this,`inflightActionsCount`,0),this.inflightRequests=new Map,this.requestsOlderThanRestart=new Set}request(e,t){let n=new Promise(n=>{let r=t?`Requested`:`NotSent`;this.inflightRequests.set(e.requestId,{message:e,status:{status:r,requestedAt:new Date,onResult:n}}),e.type===`Mutation`?this.inflightMutationsCount++:e.type===`Action`&&this.inflightActionsCount++});return this.markConnectionStateDirty(),n}onResponse(e){let t=this.inflightRequests.get(e.requestId);if(t===void 0||t.status.status===`Completed`)return null;let n=t.message.type===`Mutation`?`mutation`:`action`,r=t.message.udfPath;for(let t of e.logLines)we(this.logger,`info`,n,r,t);let i=t.status,a,o;if(e.success)a={success:!0,logLines:e.logLines,value:P(e.result)},o=()=>i.onResult(a);else{let t=e.result,{errorData:s}=e;we(this.logger,`error`,n,r,t),a={success:!1,errorMessage:t,errorData:s===void 0?void 0:P(s),logLines:e.logLines},o=()=>i.onResult(a)}return e.type===`ActionResponse`||!e.success?(o(),this.inflightRequests.delete(e.requestId),this.requestsOlderThanRestart.delete(e.requestId),t.message.type===`Action`?this.inflightActionsCount--:t.message.type===`Mutation`&&this.inflightMutationsCount--,this.markConnectionStateDirty(),{requestId:e.requestId,result:a}):(t.status={status:`Completed`,result:a,ts:e.ts,onResolve:o},null)}removeCompleted(e){let t=new Map;for(let[n,r]of this.inflightRequests.entries()){let i=r.status;i.status===`Completed`&&i.ts.lessThanOrEqual(e)&&(i.onResolve(),t.set(n,i.result),r.message.type===`Mutation`?this.inflightMutationsCount--:r.message.type===`Action`&&this.inflightActionsCount--,this.inflightRequests.delete(n),this.requestsOlderThanRestart.delete(n))}return t.size>0&&this.markConnectionStateDirty(),t}restart(){this.requestsOlderThanRestart=new Set(this.inflightRequests.keys());let e=[];for(let[t,n]of this.inflightRequests){if(n.status.status===`NotSent`){n.status.status=`Requested`,e.push(n.message);continue}if(n.message.type===`Mutation`)e.push(n.message);else if(n.message.type===`Action`){if(this.inflightRequests.delete(t),this.requestsOlderThanRestart.delete(t),this.inflightActionsCount--,n.status.status===`Completed`)throw Error(`Action should never be in 'Completed' state`);n.status.onResult({success:!1,errorMessage:`Connection lost while action was in flight`,logLines:[]})}}return this.markConnectionStateDirty(),e}resume(){let e=[];for(let[,t]of this.inflightRequests)if(t.status.status===`NotSent`){t.status.status=`Requested`,e.push(t.message);continue}return e}hasIncompleteRequests(){for(let e of this.inflightRequests.values())if(e.status.status===`Requested`)return!0;return!1}hasInflightRequests(){return this.inflightRequests.size>0}hasSyncedPastLastReconnect(){return this.requestsOlderThanRestart.size===0}timeOfOldestInflightRequest(){if(this.inflightRequests.size===0)return null;let e=Date.now();for(let t of this.inflightRequests.values())t.status.status!==`Completed`&&t.status.requestedAt.getTime()<e&&(e=t.status.requestedAt.getTime());return new Date(e)}inflightMutations(){return this.inflightMutationsCount}inflightActions(){return this.inflightActionsCount}},ze=Symbol.for(`functionName`),Be=Symbol.for(`toReferencePath`);function Ve(e){return e[Be]??null}function He(e){return e.startsWith(`function://`)}function Ue(e){let t;if(typeof e==`string`)t=He(e)?{functionHandle:e}:{name:e};else if(e[ze])t={name:e[ze]};else{let n=Ve(e);if(!n)throw Error(`${e} is not a functionReference`);t={reference:n}}return t}function B(e){let t=Ue(e);if(t.name===void 0)throw t.functionHandle===void 0?t.reference===void 0?Error(`Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(t)}`):Error(`Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${t.reference}`):Error(`Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${t.functionHandle}`);if(typeof e==`string`)return e;let n=e[ze];if(!n)throw Error(`${e} is not a functionReference`);return n}function We(e){return{[ze]:e}}function Ge(e=[]){return new Proxy({},{get(t,n){if(typeof n==`string`)return Ge([...e,n]);if(n===ze){if(e.length<2){let t=[`api`,...e].join(`.`);throw Error(`API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${t}\``)}let t=e.slice(0,-1).join(`/`),n=e[e.length-1];return n==="default"?t:t+`:`+n}else if(n===Symbol.toStringTag)return`FunctionReference`;else return}})}var Ke=Ge(),qe=Object.defineProperty,Je=(e,t,n)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ye=(e,t,n)=>Je(e,typeof t==`symbol`?t:t+``,n),Xe=class e{constructor(e){Ye(this,`queryResults`),Ye(this,`modifiedQueries`),this.queryResults=e,this.modifiedQueries=[]}getQuery(t,...n){let r=C(n[0]),i=B(t),a=this.queryResults.get(ke(i,r));if(a!==void 0)return e.queryValue(a.result)}getAllQueries(t){let n=[],r=B(t);for(let t of this.queryResults.values())t.udfPath===Oe(r)&&n.push({args:t.args,value:e.queryValue(t.result)});return n}setQuery(e,t,n){let r=C(t),i=B(e),a=ke(i,r),o;o=n===void 0?void 0:{success:!0,value:n,logLines:[]};let s={udfPath:i,args:r,result:o};this.queryResults.set(a,s),this.modifiedQueries.push(a)}static queryValue(e){if(e!==void 0&&e.success)return e.value}},Ze=class{constructor(){Ye(this,`queryResults`),Ye(this,`optimisticUpdates`),this.queryResults=new Map,this.optimisticUpdates=[]}ingestQueryResultsFromServer(e,t){this.optimisticUpdates=this.optimisticUpdates.filter(e=>!t.has(e.mutationId));let n=this.queryResults;this.queryResults=new Map(e);let r=new Xe(this.queryResults);for(let e of this.optimisticUpdates)e.update(r);let i=[];for(let[e,t]of this.queryResults){let r=n.get(e);(r===void 0||r.result!==t.result)&&i.push(e)}return i}applyOptimisticUpdate(e,t){this.optimisticUpdates.push({update:e,mutationId:t});let n=new Xe(this.queryResults);return e(n),n.modifiedQueries}rawQueryResult(e){let t=this.queryResults.get(e);if(t!==void 0)return t.result}queryResult(e){let t=this.queryResults.get(e);if(t===void 0)return;let n=t.result;if(n!==void 0){if(n.success)return n.value;throw n.errorData===void 0?Error(Ee(`query`,t.udfPath,n)):De(n,new z(Ee(`query`,t.udfPath,n)))}}hasQueryResult(e){return this.queryResults.get(e)!==void 0}queryLogs(e){return this.queryResults.get(e)?.result?.logLines}},Qe=Object.defineProperty,$e=(e,t,n)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,et=(e,t,n)=>$e(e,typeof t==`symbol`?t:t+``,n),tt=class e{constructor(e,t){et(this,`low`),et(this,`high`),et(this,`__isUnsignedLong__`),this.low=e|0,this.high=t|0,this.__isUnsignedLong__=!0}static isLong(e){return(e&&e.__isUnsignedLong__)===!0}static fromBytesLE(t){return new e(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24)}toBytesLE(){let e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]}static fromNumber(t){return isNaN(t)||t<0?V:t>=it?at:new e(t%rt|0,t/rt|0)}toString(){return(BigInt(this.high)*BigInt(rt)+BigInt(this.low)).toString()}equals(t){return e.isLong(t)||(t=e.fromValue(t)),this.high>>>31==1&&t.high>>>31==1?!1:this.high===t.high&&this.low===t.low}notEquals(e){return!this.equals(e)}comp(t){return e.isLong(t)||(t=e.fromValue(t)),this.equals(t)?0:t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1}lessThanOrEqual(e){return this.comp(e)<=0}static fromValue(t){return typeof t==`number`?e.fromNumber(t):new e(t.low,t.high)}},V=new tt(0,0),nt=65536,rt=nt*nt,it=rt*rt,at=new tt(-1,-1),ot=Object.defineProperty,st=(e,t,n)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ct=(e,t,n)=>st(e,typeof t==`symbol`?t:t+``,n),lt=class{constructor(e,t){ct(this,`version`),ct(this,`remoteQuerySet`),ct(this,`queryPath`),ct(this,`logger`),this.version={querySet:0,ts:tt.fromNumber(0),identity:0},this.remoteQuerySet=new Map,this.queryPath=e,this.logger=t}transition(e){let t=e.startVersion;if(this.version.querySet!==t.querySet||this.version.ts.notEquals(t.ts)||this.version.identity!==t.identity)throw Error(`Invalid start version: ${t.ts.toString()}:${t.querySet}:${t.identity}, transitioning from ${this.version.ts.toString()}:${this.version.querySet}:${this.version.identity}`);for(let t of e.modifications)switch(t.type){case`QueryUpdated`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)we(this.logger,`info`,`query`,e,n);let n=P(t.value??null);this.remoteQuerySet.set(t.queryId,{success:!0,value:n,logLines:t.logLines});break}case`QueryFailed`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)we(this.logger,`info`,`query`,e,n);let{errorData:n}=t;this.remoteQuerySet.set(t.queryId,{success:!1,errorMessage:t.errorMessage,errorData:n===void 0?void 0:P(n),logLines:t.logLines});break}case`QueryRemoved`:this.remoteQuerySet.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}this.version=e.endVersion}remoteQueryResults(){return this.remoteQuerySet}timestamp(){return this.version.ts}};function ut(e){let t=y(e);return tt.fromBytesLE(Array.from(t))}function dt(e){return S(new Uint8Array(e.toBytesLE()))}function ft(e){switch(e.type){case`FatalError`:case`AuthError`:case`ActionResponse`:case`TransitionChunk`:case`Ping`:return{...e};case`MutationResponse`:return e.success?{...e,ts:ut(e.ts)}:{...e};case`Transition`:return{...e,startVersion:{...e.startVersion,ts:ut(e.startVersion.ts)},endVersion:{...e.endVersion,ts:ut(e.endVersion.ts)}};default:}}function pt(e){switch(e.type){case`Authenticate`:case`ModifyQuerySet`:case`Mutation`:case`Action`:case`Event`:return{...e};case`Connect`:return e.maxObservedTimestamp===void 0?{...e,maxObservedTimestamp:void 0}:{...e,maxObservedTimestamp:dt(e.maxObservedTimestamp)};default:}}var mt=Object.defineProperty,ht=(e,t,n)=>t in e?mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,H=(e,t,n)=>ht(e,typeof t==`symbol`?t:t+``,n),gt=1e3,_t=1001,vt=1005,yt=4040,bt;function xt(){return bt===void 0&&(bt=Date.now()),typeof performance>`u`||!performance.now?Date.now():Math.round(bt+performance.now())}function St(){return`t=${Math.round((xt()-bt)/100)/10}s`}var Ct={InternalServerError:{timeout:1e3},SubscriptionsWorkerFullError:{timeout:3e3},TooManyConcurrentRequests:{timeout:3e3},CommitterFullError:{timeout:3e3},AwsTooManyRequestsException:{timeout:3e3},ExecuteFullError:{timeout:3e3},SystemTimeoutError:{timeout:3e3},ExpiredInQueue:{timeout:3e3},VectorIndexesUnavailable:{timeout:1e3},SearchIndexesUnavailable:{timeout:1e3},TableSummariesUnavailable:{timeout:1e3},VectorIndexTooLarge:{timeout:3e3},SearchIndexTooLarge:{timeout:3e3},TooManyWritesInTimePeriod:{timeout:3e3}};function wt(e){if(e===void 0)return`Unknown`;for(let t of Object.keys(Ct))if(e.startsWith(t))return t;return`Unknown`}var Tt=class{constructor(e,t,n,r,i,a){this.markConnectionStateDirty=i,this.debug=a,H(this,`socket`),H(this,`connectionCount`),H(this,`_hasEverConnected`,!1),H(this,`lastCloseReason`),H(this,`transitionChunkBuffer`,null),H(this,`defaultInitialBackoff`),H(this,`maxBackoff`),H(this,`retries`),H(this,`serverInactivityThreshold`),H(this,`reconnectDueToServerInactivityTimeout`),H(this,`scheduledReconnect`,null),H(this,`networkOnlineHandler`,null),H(this,`pendingNetworkRecoveryInfo`,null),H(this,`uri`),H(this,`onOpen`),H(this,`onResume`),H(this,`onMessage`),H(this,`webSocketConstructor`),H(this,`logger`),H(this,`onServerDisconnectError`),this.webSocketConstructor=n,this.socket={state:`disconnected`},this.connectionCount=0,this.lastCloseReason=`InitialConnect`,this.defaultInitialBackoff=1e3,this.maxBackoff=16e3,this.retries=0,this.serverInactivityThreshold=6e4,this.reconnectDueToServerInactivityTimeout=null,this.uri=e,this.onOpen=t.onOpen,this.onResume=t.onResume,this.onMessage=t.onMessage,this.onServerDisconnectError=t.onServerDisconnectError,this.logger=r,this.setupNetworkListener(),this.connect()}setSocketState(e){this.socket=e,this._logVerbose(`socket state changed: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}`),this.markConnectionStateDirty()}setupNetworkListener(){typeof window>`u`||typeof window.addEventListener!=`function`||this.networkOnlineHandler===null&&(this.networkOnlineHandler=()=>{this._logVerbose(`network online event detected`),this.tryReconnectImmediately()},window.addEventListener(`online`,this.networkOnlineHandler),this._logVerbose(`network online event listener registered`))}cleanupNetworkListener(){this.networkOnlineHandler&&typeof window<`u`&&typeof window.removeEventListener==`function`&&(window.removeEventListener(`online`,this.networkOnlineHandler),this.networkOnlineHandler=null,this._logVerbose(`network online event listener removed`))}assembleTransition(e){if(e.partNumber<0||e.partNumber>=e.totalParts||e.totalParts===0||this.transitionChunkBuffer&&(this.transitionChunkBuffer.totalParts!==e.totalParts||this.transitionChunkBuffer.transitionId!==e.transitionId))throw this.transitionChunkBuffer=null,Error(`Invalid TransitionChunk`);if(this.transitionChunkBuffer===null&&(this.transitionChunkBuffer={chunks:[],totalParts:e.totalParts,transitionId:e.transitionId}),e.partNumber!==this.transitionChunkBuffer.chunks.length){let t=this.transitionChunkBuffer.chunks.length;throw this.transitionChunkBuffer=null,Error(`TransitionChunk received out of order: expected part ${t}, got ${e.partNumber}`)}if(this.transitionChunkBuffer.chunks.push(e.chunk),this.transitionChunkBuffer.chunks.length===e.totalParts){let e=this.transitionChunkBuffer.chunks.join(``);this.transitionChunkBuffer=null;let t=ft(JSON.parse(e));if(t.type!==`Transition`)throw Error(`Expected Transition, got ${t.type} after assembling chunks`);return t}return null}connect(){if(this.socket.state===`terminated`)return;if(this.socket.state!==`disconnected`&&this.socket.state!==`stopped`)throw Error(`Didn't start connection from disconnected state: `+this.socket.state);let e=new this.webSocketConstructor(this.uri);this._logVerbose(`constructed WebSocket`),this.setSocketState({state:`connecting`,ws:e,paused:`no`}),this.resetServerInactivityTimeout(),e.onopen=()=>{if(this.logger.logVerbose(`begin ws.onopen`),this.socket.state!==`connecting`)throw Error(`onopen called with socket not in connecting state`);if(this.setSocketState({state:`ready`,ws:e,paused:this.socket.paused===`yes`?`uninitialized`:`no`}),this.resetServerInactivityTimeout(),this.socket.paused===`no`&&(this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:xt()})),this.lastCloseReason!==`InitialConnect`&&(this.lastCloseReason?this.logger.log(`WebSocket reconnected at`,St(),`after disconnect due to`,this.lastCloseReason):this.logger.log(`WebSocket reconnected at`,St())),this.connectionCount+=1,this.lastCloseReason=null,this.pendingNetworkRecoveryInfo!==null){let{timeSavedMs:e}=this.pendingNetworkRecoveryInfo;this.pendingNetworkRecoveryInfo=null,this.sendMessage({type:`Event`,eventType:`NetworkRecoveryReconnect`,event:{timeSavedMs:e}}),this.logger.log(`Network recovery reconnect saved ~${Math.round(e/1e3)}s of waiting`)}},e.onerror=e=>{this.transitionChunkBuffer=null;let t=e.message;t&&this.logger.log(`WebSocket error message: ${t}`)},e.onmessage=e=>{this.resetServerInactivityTimeout();let t=e.data.length,n=ft(JSON.parse(e.data));if(this._logVerbose(`received ws message with type ${n.type}`),n.type!==`Ping`){if(n.type===`TransitionChunk`){let e=this.assembleTransition(n);if(!e)return;n=e,this._logVerbose(`assembled full ws message of type ${n.type}`)}this.transitionChunkBuffer!==null&&(this.transitionChunkBuffer=null,this.logger.log(`Received unexpected ${n.type} while buffering TransitionChunks`)),n.type===`Transition`&&this.reportLargeTransition({messageLength:t,transition:n}),this.onMessage(n).hasSyncedPastLastReconnect&&(this.retries=0,this.markConnectionStateDirty())}},e.onclose=e=>{if(this._logVerbose(`begin ws.onclose`),this.transitionChunkBuffer=null,this.lastCloseReason===null&&(this.lastCloseReason=e.reason||`closed with code ${e.code}`),e.code!==gt&&e.code!==_t&&e.code!==vt&&e.code!==yt){let t=`WebSocket closed with code ${e.code}`;e.reason&&(t+=`: ${e.reason}`),this.logger.log(t),this.onServerDisconnectError&&e.reason&&this.onServerDisconnectError(t)}let t=wt(e.reason);this.scheduleReconnect(t)}}socketState(){return this.socket.state}sendMessage(e){let t={type:e.type,...e.type===`Authenticate`&&e.tokenType===`User`?{value:`...${e.value.slice(-7)}`}:{}};if(this.socket.state===`ready`&&this.socket.paused===`no`){let n=pt(e),r=JSON.stringify(n),i=!1;try{this.socket.ws.send(r),i=!0}catch(e){this.logger.log(`Failed to send message on WebSocket, reconnecting: ${e}`),this.closeAndReconnect(`FailedToSendMessage`)}return this._logVerbose(`${i?`sent`:`failed to send`} message with type ${e.type}: ${JSON.stringify(t)}`),!0}return this._logVerbose(`message not sent (socket state: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}): ${JSON.stringify(t)}`),!1}resetServerInactivityTimeout(){this.socket.state!==`terminated`&&(this.reconnectDueToServerInactivityTimeout!==null&&(clearTimeout(this.reconnectDueToServerInactivityTimeout),this.reconnectDueToServerInactivityTimeout=null),this.reconnectDueToServerInactivityTimeout=setTimeout(()=>{this.closeAndReconnect(`InactiveServer`)},this.serverInactivityThreshold))}scheduleReconnect(e){this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.socket={state:`disconnected`};let t=this.nextBackoff(e);this.markConnectionStateDirty(),this.logger.log(`Attempting reconnect in ${Math.round(t)}ms`);let n=xt(),r=setTimeout(()=>{this.scheduledReconnect?.timeout===r&&(this.scheduledReconnect=null,this.connect())},t);this.scheduledReconnect={timeout:r,scheduledAt:n,backoffMs:t}}closeAndReconnect(e){switch(this._logVerbose(`begin closeAndReconnect with reason ${e}`),this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return;case`connecting`:case`ready`:this.lastCloseReason=e,this.close(),this.scheduleReconnect(`client`);return;default:this.socket}}close(){switch(this.transitionChunkBuffer=null,this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return Promise.resolve();case`connecting`:{let e=this.socket.ws;return e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)},new Promise(t=>{e.onclose=()=>{this._logVerbose(`Closed after connecting`),t()},e.onopen=()=>{this._logVerbose(`Opened after connecting`),e.close()}})}case`ready`:{this._logVerbose(`ws.close called`);let e=this.socket.ws;e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)};let t=new Promise(t=>{e.onclose=()=>{t()}});return e.close(),t}default:return this.socket,Promise.resolve()}}terminate(){switch(this.reconnectDueToServerInactivityTimeout&&clearTimeout(this.reconnectDueToServerInactivityTimeout),this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.cleanupNetworkListener(),this.socket.state){case`terminated`:case`stopped`:case`disconnected`:case`connecting`:case`ready`:{let e=this.close();return this.setSocketState({state:`terminated`}),e}default:throw this.socket,Error(`Invalid websocket state: ${this.socket.state}`)}}stop(){switch(this.socket.state){case`terminated`:return Promise.resolve();case`connecting`:case`stopped`:case`disconnected`:case`ready`:{this.cleanupNetworkListener();let e=this.close();return this.socket={state:`stopped`},e}default:return this.socket,Promise.resolve()}}tryRestart(){switch(this.socket.state){case`stopped`:break;case`terminated`:case`connecting`:case`ready`:case`disconnected`:this.logger.logVerbose(`Restart called without stopping first`);return;default:this.socket}this.setupNetworkListener(),this.connect()}pause(){switch(this.socket.state){case`disconnected`:case`stopped`:case`terminated`:return;case`connecting`:case`ready`:this.socket={...this.socket,paused:`yes`};return;default:this.socket;return}}tryReconnectImmediately(){if(this._logVerbose(`tryReconnectImmediately called`),this.socket.state!==`disconnected`){this._logVerbose(`tryReconnectImmediately called but socket state is ${this.socket.state}, no action taken`);return}let e=null;if(this.scheduledReconnect){let t=xt()-this.scheduledReconnect.scheduledAt;e=Math.max(0,this.scheduledReconnect.backoffMs-t),this._logVerbose(`would have waited ${Math.round(e)}ms more (backoff was ${Math.round(this.scheduledReconnect.backoffMs)}ms, elapsed ${Math.round(t)}ms)`),clearTimeout(this.scheduledReconnect.timeout),this.scheduledReconnect=null,this._logVerbose(`canceled scheduled reconnect`)}this.logger.log(`Network recovery detected, reconnecting immediately`),this.pendingNetworkRecoveryInfo=e===null?null:{timeSavedMs:e},this.connect()}resume(){switch(this.socket.state){case`connecting`:this.socket={...this.socket,paused:`no`};return;case`ready`:this.socket.paused===`uninitialized`?(this.socket={...this.socket,paused:`no`},this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:xt()})):this.socket.paused===`yes`&&(this.socket={...this.socket,paused:`no`},this.onResume());return;case`terminated`:case`stopped`:case`disconnected`:return;default:this.socket}this.connect()}connectionState(){return{isConnected:this.socket.state===`ready`,hasEverConnected:this._hasEverConnected,connectionCount:this.connectionCount,connectionRetries:this.retries}}_logVerbose(e){this.logger.logVerbose(e)}nextBackoff(e){let t=(e===`client`?100:e===`Unknown`?this.defaultInitialBackoff:Ct[e].timeout)*2**this.retries;this.retries+=1;let n=Math.min(t,this.maxBackoff);return n+n*(Math.random()-.5)}reportLargeTransition({transition:e,messageLength:t}){if(e.clientClockSkew===void 0||e.serverTs===void 0)return;let n=xt()-e.clientClockSkew-e.serverTs/1e6,r=`${Math.round(n)}ms`,i=`${Math.round(t/1e4)/100}MB`,a=t/(n/1e3),o=`${Math.round(a/1e4)/100}MB per second`;this._logVerbose(`received ${i} transition in ${r} at ${o}`),t>2e7?this.logger.log(`received query results totaling more that 20MB (${i}) which will take a long time to download on slower connections`):n>2e4&&this.logger.log(`received query results totaling ${i} which took more than 20s to arrive (${r})`),this.debug&&this.sendMessage({type:`Event`,eventType:`ClientReceivedTransition`,event:{transitionTransitTime:n,messageLength:t}})}};function Et(){return Dt()}function Dt(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}var Ot=class extends Error{};Ot.prototype.name=`InvalidTokenError`;function kt(e){return decodeURIComponent(atob(e).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n=`0`+n),`%`+n}))}function At(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`);switch(t.length%4){case 0:break;case 2:t+=`==`;break;case 3:t+=`=`;break;default:throw Error(`base64 string is not of the correct length`)}try{return kt(t)}catch{return atob(t)}}function jt(e,t){if(typeof e!=`string`)throw new Ot(`Invalid token specified: must be a string`);t||={};let n=t.header===!0?0:1,r=e.split(`.`)[n];if(typeof r!=`string`)throw new Ot(`Invalid token specified: missing part #${n+1}`);let i;try{i=At(r)}catch(e){throw new Ot(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(i)}catch(e){throw new Ot(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}var Mt=Object.defineProperty,Nt=(e,t,n)=>t in e?Mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pt=(e,t,n)=>Nt(e,typeof t==`symbol`?t:t+``,n),Ft=480*60*60*1e3,It=2,Lt=class{constructor(e,t,n){Pt(this,`authState`,{state:`noAuth`}),Pt(this,`configVersion`,0),Pt(this,`syncState`),Pt(this,`authenticate`),Pt(this,`stopSocket`),Pt(this,`tryRestartSocket`),Pt(this,`pauseSocket`),Pt(this,`resumeSocket`),Pt(this,`clearAuth`),Pt(this,`logger`),Pt(this,`refreshTokenLeewaySeconds`),Pt(this,`lastRefreshChange`),Pt(this,`tokenConfirmationAttempts`,0),this.syncState=e,this.authenticate=t.authenticate,this.stopSocket=t.stopSocket,this.tryRestartSocket=t.tryRestartSocket,this.pauseSocket=t.pauseSocket,this.resumeSocket=t.resumeSocket,this.clearAuth=t.clearAuth,this.logger=n.logger,this.refreshTokenLeewaySeconds=n.refreshTokenLeewaySeconds,this.lastRefreshChange=!1}notifyRefreshChange(e){this.authState.state!==`noAuth`&&this.authState.state!==`initialRefetch`&&this.authState.config.onRefreshChange&&this.lastRefreshChange!==e&&(this.lastRefreshChange=e,this.authState.config.onRefreshChange(e))}async setConfig(e,t,n){this.resetAuthState(),this._logVerbose(`pausing WS for auth token fetch`),this.pauseSocket();let r=await this.fetchTokenAndGuardAgainstRace(e,{forceRefreshToken:!1});if(r.isFromOutdatedConfig)return;let i={fetchToken:e,onAuthChange:t,onRefreshChange:n};r.value?(this.setAuthState({state:`waitingForServerConfirmationOfCachedToken`,config:i,hasRetried:!1}),this.authenticate(r.value)):(this.setAuthState({state:`initialRefetch`,config:i}),await this.refetchToken()),this._logVerbose(`resuming WS after auth token fetch`),this.resumeSocket()}onTransition(e){if(this.syncState.isCurrentOrNewerAuthVersion(e.endVersion.identity)&&!(e.endVersion.identity<=e.startVersion.identity)){if(this._logVerbose(`auth state is ${this.authState.state} when handling transition`),this.syncState.markAuthCompletion(),this.authState.state===`waitingForServerConfirmationOfCachedToken`){this._logVerbose(`server confirmed auth token is valid`),this.refetchToken(),this.authState.config.onAuthChange(!0);return}this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this._logVerbose(`server confirmed new auth token is valid`),this.notifyRefreshChange(!1),this.scheduleTokenRefetch(this.authState.token),this.tokenConfirmationAttempts=0,this.authState.hadAuth||this.authState.config.onAuthChange(!0))}}onAuthError(e){if(e.authUpdateAttempted===!1&&(this.authState.state===`waitingForServerConfirmationOfFreshToken`||this.authState.state===`waitingForServerConfirmationOfCachedToken`)){this._logVerbose(`ignoring non-auth token expired error`);return}let{baseVersion:t}=e;if(!this.syncState.isCurrentOrNewerAuthVersion(t+1)){this._logVerbose(`ignoring auth error for previous auth attempt`);return}this.tryToReauthenticate(e)}async tryToReauthenticate(e){if(this._logVerbose(`attempting to reauthenticate: ${e.error}`),this.authState.state===`noAuth`||this.authState.state===`waitingForServerConfirmationOfFreshToken`&&this.tokenConfirmationAttempts>=It){this.logger.error(`Failed to authenticate: "${e.error}", check your server auth config`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.authState.state!==`noAuth`&&this.setAndReportAuthFailed(this.authState.config.onAuthChange);return}if(this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this.tokenConfirmationAttempts++,this._logVerbose(`retrying reauthentication, ${It-this.tokenConfirmationAttempts} attempts remaining`)),this.notifyRefreshChange(!0),await this.stopSocket(),this.authState.state===`noAuth`)return;let t=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});t.isFromOutdatedConfig||(t.value&&this.syncState.isNewAuth(t.value)?(this.authenticate(t.value),this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,config:this.authState.config,token:t.value,hadAuth:this.authState.state===`notRefetching`||this.authState.state===`waitingForScheduledRefetch`})):(this._logVerbose(`reauthentication failed, could not fetch a new token`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this.tryRestartSocket())}async refetchToken(){if(this.authState.state===`noAuth`)return;this._logVerbose(`refetching auth token`);let e=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});e.isFromOutdatedConfig||(e.value?this.syncState.isNewAuth(e.value)?(this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,hadAuth:this.syncState.hasAuth(),token:e.value,config:this.authState.config}),this.authenticate(e.value)):this.setAuthState({state:`notRefetching`,config:this.authState.config}):(this._logVerbose(`refetching token failed`),this.syncState.hasAuth()&&this.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this._logVerbose(`restarting WS after auth token fetch (if currently stopped)`),this.tryRestartSocket())}scheduleTokenRefetch(e){if(this.authState.state===`noAuth`)return;let t=this.decodeToken(e);if(!t){this.logger.error(`Auth token is not a valid JWT, cannot refetch the token`);return}let{iat:n,exp:r}=t;if(!n||!r){this.logger.error(`Auth token does not have required fields, cannot refetch the token`);return}let i=r-n;if(i<=2){this.logger.error(`Auth token does not live long enough, cannot refetch the token`);return}let a=Math.min(Ft,(i-this.refreshTokenLeewaySeconds)*1e3);a<=0&&(this.logger.warn(`Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${i}s`),a=0);let o=setTimeout(()=>{this._logVerbose(`running scheduled token refetch`),this.refetchToken()},a);this.setAuthState({state:`waitingForScheduledRefetch`,refetchTokenTimeoutId:o,config:this.authState.config}),this._logVerbose(`scheduled preemptive auth token refetching in ${a}ms`)}async fetchTokenAndGuardAgainstRace(e,t){let n=++this.configVersion;this._logVerbose(`fetching token with config version ${n}`);let r=await e(t);return this.configVersion===n?{isFromOutdatedConfig:!1,value:r}:(this._logVerbose(`stale config version, expected ${n}, got ${this.configVersion}`),{isFromOutdatedConfig:!0})}stop(){this.resetAuthState(),this.configVersion++,this._logVerbose(`config version bumped to ${this.configVersion}`)}setAndReportAuthFailed(e){e(!1),this.resetAuthState()}resetAuthState(){this.notifyRefreshChange(!1),this.setAuthState({state:`noAuth`})}setAuthState(e){let t=e.state===`waitingForServerConfirmationOfFreshToken`?{hadAuth:e.hadAuth,state:e.state,token:`...${e.token.slice(-7)}`}:{state:e.state};switch(this._logVerbose(`setting auth state to ${JSON.stringify(t)}`),e.state){case`waitingForScheduledRefetch`:case`notRefetching`:case`noAuth`:this.tokenConfirmationAttempts=0;break;case`waitingForServerConfirmationOfFreshToken`:case`waitingForServerConfirmationOfCachedToken`:case`initialRefetch`:break;default:}this.authState.state===`waitingForScheduledRefetch`&&clearTimeout(this.authState.refetchTokenTimeoutId),this.authState=e}decodeToken(e){try{return jt(e)}catch(e){return this._logVerbose(`Error decoding token: ${e instanceof Error?e.message:`Unknown error`}`),null}}_logVerbose(e){this.logger.logVerbose(`${e} [v${this.configVersion}]`)}},Rt=[`convexClientConstructed`,`convexWebSocketOpen`,`convexFirstMessageReceived`];function zt(e,t){let n={sessionId:t};typeof performance>`u`||!performance.mark||performance.mark(e,{detail:n})}function Bt(e){let t=e.name.slice(6);return t=t.charAt(0).toLowerCase()+t.slice(1),{name:t,startTime:e.startTime}}function Vt(e){if(typeof performance>`u`||!performance.getEntriesByName)return[];let t=[];for(let n of Rt){let r=performance.getEntriesByName(n).filter(e=>e.entryType===`mark`).filter(t=>t.detail.sessionId===e);t.push(...r)}return t.map(Bt)}var Ht=Object.defineProperty,Ut=(e,t,n)=>t in e?Ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wt=(e,t,n)=>Ut(e,typeof t==`symbol`?t:t+``,n),Gt=class{constructor(e,t,n){if(Wt(this,`address`),Wt(this,`state`),Wt(this,`requestManager`),Wt(this,`webSocketManager`),Wt(this,`authenticationManager`),Wt(this,`remoteQuerySet`),Wt(this,`optimisticQueryResults`),Wt(this,`_transitionHandlerCounter`,0),Wt(this,`_nextRequestId`),Wt(this,`_onTransitionFns`,new Map),Wt(this,`_sessionId`),Wt(this,`firstMessageReceived`,!1),Wt(this,`debug`),Wt(this,`logger`),Wt(this,`maxObservedTimestamp`),Wt(this,`connectionStateSubscribers`,new Map),Wt(this,`nextConnectionStateSubscriberId`,0),Wt(this,`_lastPublishedConnectionState`),Wt(this,`markConnectionStateDirty`,()=>{Promise.resolve().then(()=>{let e=this.connectionState();if(JSON.stringify(e)!==JSON.stringify(this._lastPublishedConnectionState)){this._lastPublishedConnectionState=e;for(let t of this.connectionStateSubscribers.values())t(e)}})}),Wt(this,`mark`,e=>{this.debug&&zt(e,this.sessionId)}),typeof e==`object`)throw Error(`Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly.`);n?.skipConvexDeploymentUrlCheck!==!0&&w(e),n={...n};let r=n.authRefreshTokenLeewaySeconds??10,i=n.webSocketConstructor;if(!i&&typeof WebSocket>`u`)throw Error(`No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient`);i||=WebSocket,this.debug=n.reportDebugInfoToConvex??!1,this.address=e,this.logger=n.logger===!1?Ce({verbose:n.verbose??!1}):n.logger!==!0&&n.logger?n.logger:Se({verbose:n.verbose??!1});let a=e.search(`://`);if(a===-1)throw Error(`Provided address was not an absolute URL.`);let o=e.substring(a+3),s=e.substring(0,a),c;if(s===`http`)c=`ws`;else if(s===`https`)c=`wss`;else throw Error(`Unknown parent protocol ${s}`);let l=`${c}://${o}/api/${he}/sync`;this.state=new Pe,this.remoteQuerySet=new lt(e=>this.state.queryPath(e),this.logger),this.requestManager=new Re(this.logger,this.markConnectionStateDirty);let u=()=>{this.webSocketManager.pause(),this.state.pause()};this.authenticationManager=new Lt(this.state,{authenticate:e=>{let t=this.state.setAuth(e);return this.webSocketManager.sendMessage(t),t.baseVersion},stopSocket:()=>this.webSocketManager.stop(),tryRestartSocket:()=>this.webSocketManager.tryRestart(),pauseSocket:u,resumeSocket:()=>this.webSocketManager.resume(),clearAuth:()=>{this.clearAuth()}},{logger:this.logger,refreshTokenLeewaySeconds:r}),this.optimisticQueryResults=new Ze,this.addOnTransitionHandler(e=>{t(e.queries.map(e=>e.token))}),this._nextRequestId=0,this._sessionId=Et();let{unsavedChangesWarning:d}=n;if(typeof window>`u`||window.addEventListener===void 0){if(d===!0)throw Error(`unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options.`)}else d!==!1&&window.addEventListener(`beforeunload`,e=>{if(this.requestManager.hasIncompleteRequests()){e.preventDefault();let t=`Are you sure you want to leave? Your changes may not be saved.`;return(e||window.event).returnValue=t,t}});this.webSocketManager=new Tt(l,{onOpen:e=>{this.mark(`convexWebSocketOpen`),this.webSocketManager.sendMessage({...e,type:`Connect`,sessionId:this._sessionId,maxObservedTimestamp:this.maxObservedTimestamp}),this.remoteQuerySet=new lt(e=>this.state.queryPath(e),this.logger);let[t,n]=this.state.restart();n&&this.webSocketManager.sendMessage(n),this.webSocketManager.sendMessage(t);for(let e of this.requestManager.restart())this.webSocketManager.sendMessage(e)},onResume:()=>{let[e,t]=this.state.resume();t&&this.webSocketManager.sendMessage(t),e&&this.webSocketManager.sendMessage(e);for(let e of this.requestManager.resume())this.webSocketManager.sendMessage(e)},onMessage:e=>{switch(this.firstMessageReceived||(this.firstMessageReceived=!0,this.mark(`convexFirstMessageReceived`),this.reportMarks()),e.type){case`Transition`:{this.observedTimestamp(e.endVersion.ts),this.authenticationManager.onTransition(e),this.remoteQuerySet.transition(e),this.state.transition(e);let t=this.requestManager.removeCompleted(this.remoteQuerySet.timestamp());this.notifyOnQueryResultChanges(t);break}case`MutationResponse`:{e.success&&this.observedTimestamp(e.ts);let t=this.requestManager.onResponse(e);t!==null&&this.notifyOnQueryResultChanges(new Map([[t.requestId,t.result]]));break}case`ActionResponse`:this.requestManager.onResponse(e);break;case`AuthError`:this.authenticationManager.onAuthError(e);break;case`FatalError`:{let t=Te(this.logger,e.error);throw this.webSocketManager.terminate(),t}default:}return{hasSyncedPastLastReconnect:this.hasSyncedPastLastReconnect()}},onServerDisconnectError:n.onServerDisconnectError},i,this.logger,this.markConnectionStateDirty,this.debug),this.mark(`convexClientConstructed`),n.expectAuth&&u()}hasSyncedPastLastReconnect(){return this.requestManager.hasSyncedPastLastReconnect()&&this.state.hasSyncedPastLastReconnect()}observedTimestamp(e){(this.maxObservedTimestamp===void 0||this.maxObservedTimestamp.lessThanOrEqual(e))&&(this.maxObservedTimestamp=e)}getMaxObservedTimestamp(){return this.maxObservedTimestamp}notifyOnQueryResultChanges(e){let t=this.remoteQuerySet.remoteQueryResults(),n=new Map;for(let[e,r]of t){let t=this.state.queryToken(e);if(t!==null){let i={result:r,udfPath:this.state.queryPath(e),args:this.state.queryArgs(e)};n.set(t,i)}}let r=this.optimisticQueryResults.ingestQueryResultsFromServer(n,new Set(e.keys()));this.handleTransition({queries:r.map(e=>({token:e,modification:{kind:`Updated`,result:this.optimisticQueryResults.rawQueryResult(e)}})),reflectedMutations:Array.from(e).map(([e,t])=>({requestId:e,result:t})),timestamp:this.remoteQuerySet.timestamp()})}handleTransition(e){for(let t of this._onTransitionFns.values())t(e)}addOnTransitionHandler(e){let t=this._transitionHandlerCounter++;return this._onTransitionFns.set(t,e),()=>this._onTransitionFns.delete(t)}getCurrentAuthClaims(){let e=this.state.getAuth(),t={};if(e&&e.tokenType===`User`)try{t=e?jt(e.value):{}}catch{t={}}else return;return{token:e.value,decoded:t}}setAuth(e,t,n){this.authenticationManager.setConfig(e,t,n)}hasAuth(){return this.state.hasAuth()}setAdminAuth(e,t){let n=this.state.setAdminAuth(e,t);this.webSocketManager.sendMessage(n)}clearAuth(){let e=this.state.clearAuth();this.webSocketManager.sendMessage(e)}subscribe(e,t,n){let r=C(t),{modification:i,queryToken:a,unsubscribe:o}=this.state.subscribe(e,r,n?.journal,n?.componentPath);return i!==null&&this.webSocketManager.sendMessage(i),{queryToken:a,unsubscribe:()=>{let e=o();e&&this.webSocketManager.sendMessage(e)}}}localQueryResult(e,t){let n=ke(e,C(t));return this.optimisticQueryResults.queryResult(n)}localQueryResultByToken(e){return this.optimisticQueryResults.queryResult(e)}hasLocalQueryResultByToken(e){return this.optimisticQueryResults.hasQueryResult(e)}localQueryLogs(e,t){let n=ke(e,C(t));return this.optimisticQueryResults.queryLogs(n)}queryJournal(e,t){let n=ke(e,C(t));return this.state.queryJournal(n)}connectionState(){let e=this.webSocketManager.connectionState();return{hasInflightRequests:this.requestManager.hasInflightRequests(),isWebSocketConnected:e.isConnected,hasEverConnected:e.hasEverConnected,connectionCount:e.connectionCount,connectionRetries:e.connectionRetries,timeOfOldestInflightRequest:this.requestManager.timeOfOldestInflightRequest(),inflightMutations:this.requestManager.inflightMutations(),inflightActions:this.requestManager.inflightActions()}}subscribeToConnectionState(e){let t=this.nextConnectionStateSubscriberId++;return this.connectionStateSubscribers.set(t,e),()=>{this.connectionStateSubscribers.delete(t)}}async mutation(e,t,n){let r=await this.mutationInternal(e,t,n);if(!r.success)throw r.errorData===void 0?Error(Ee(`mutation`,e,r)):De(r,new z(Ee(`mutation`,e,r)));return r.value}async mutationInternal(e,t,n,r){let{mutationPromise:i}=this.enqueueMutation(e,t,n,r);return i}enqueueMutation(e,t,n,r){let i=C(t);this.tryReportLongDisconnect();let a=this.nextRequestId;if(this._nextRequestId++,n!==void 0){let e=n.optimisticUpdate;if(e!==void 0){let t=this.optimisticQueryResults.applyOptimisticUpdate(t=>{e(t,i)instanceof Promise&&this.logger.warn(`Optimistic update handler returned a Promise. Optimistic updates should be synchronous.`)},a).map(e=>{let t=this.localQueryResultByToken(e);return{token:e,modification:{kind:`Updated`,result:t===void 0?void 0:{success:!0,value:t,logLines:[]}}}});this.handleTransition({queries:t,reflectedMutations:[],timestamp:this.remoteQuerySet.timestamp()})}}let o={type:`Mutation`,requestId:a,udfPath:e,componentPath:r,args:[le(i)]},s=this.webSocketManager.sendMessage(o);return{requestId:a,mutationPromise:this.requestManager.request(o,s)}}async action(e,t){let n=await this.actionInternal(e,t);if(!n.success)throw n.errorData===void 0?Error(Ee(`action`,e,n)):De(n,new z(Ee(`action`,e,n)));return n.value}async actionInternal(e,t,n){let r=C(t),i=this.nextRequestId;this._nextRequestId++,this.tryReportLongDisconnect();let a={type:`Action`,requestId:i,udfPath:e,componentPath:n,args:[le(r)]},o=this.webSocketManager.sendMessage(a);return this.requestManager.request(a,o)}async close(){return this.authenticationManager.stop(),this.webSocketManager.terminate()}get url(){return this.address}get nextRequestId(){return this._nextRequestId}get sessionId(){return this._sessionId}reportMarks(){if(this.debug){let e=Vt(this.sessionId);this.webSocketManager.sendMessage({type:`Event`,eventType:`ClientConnect`,event:e})}}tryReportLongDisconnect(){if(!this.debug)return;let e=this.connectionState().timeOfOldestInflightRequest;if(e===null||Date.now()-e.getTime()<=60*1e3)return;let t=`${this.address}/api/debug_event`;fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`,"Convex-Client":`npm-${he}`},body:JSON.stringify({event:`LongWebsocketDisconnect`})}).then(e=>{e.ok||this.logger.warn(`Analytics request failed with response:`,e.body)}).catch(e=>{this.logger.warn(`Analytics response failed with error:`,e)})}};function Kt(e){if(typeof e!=`object`||!e||!Array.isArray(e.page)||typeof e.isDone!=`boolean`||typeof e.continueCursor!=`string`)throw Error(`Not a valid paginated query result: ${e?.toString()}`);return e}var qt=Object.defineProperty,Jt=(e,t,n)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yt=(e,t,n)=>Jt(e,typeof t==`symbol`?t:t+``,n),Xt=class{constructor(e,t){this.client=e,this.onTransition=t,Yt(this,`paginatedQuerySet`,new Map),Yt(this,`lastTransitionTs`),this.lastTransitionTs=tt.fromNumber(0),this.client.addOnTransitionHandler(e=>this.onBaseTransition(e))}subscribe(e,t,n){let r=Oe(e),i=Ae(r,t,n),a=()=>this.removePaginatedQuerySubscriber(i),o=this.paginatedQuerySet.get(i);return o?(o.numSubscribers+=1,{paginatedQueryToken:i,unsubscribe:a}):(this.paginatedQuerySet.set(i,{token:i,canonicalizedUdfPath:r,args:t,numSubscribers:1,options:{initialNumItems:n.initialNumItems},nextPageKey:0,pageKeys:[],pageKeyToQuery:new Map,ongoingSplits:new Map,skip:!1,id:n.id}),this.addPageToPaginatedQuery(i,null,n.initialNumItems),{paginatedQueryToken:i,unsubscribe:a})}localQueryResult(e,t,n){let r=Ae(Oe(e),t,n);return this.localQueryResultByToken(r)}localQueryResultByToken(e){let t=this.paginatedQuerySet.get(e);if(!t)return;let n=this.activePageQueryTokens(t);if(n.length===0)return{results:[],status:`LoadingFirstPage`,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)};let r=[],i=!1,a=!1;for(let e of n){let t=this.client.localQueryResultByToken(e);if(t===void 0){i=!0,a=!1;continue}let n=Kt(t);r=r.concat(n.page),a=!!n.isDone}let o;return o=i?r.length===0?`LoadingFirstPage`:`LoadingMore`:a?`Exhausted`:`CanLoadMore`,{results:r,status:o,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)}}onBaseTransition(e){let t=e.queries.map(e=>e.token),n=this.queriesContainingTokens(t),r=[];n.length>0&&(this.processPaginatedQuerySplits(n,e=>this.client.localQueryResultByToken(e)),r=n.map(e=>({token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}})));let i={...e,paginatedQueries:r};this.onTransition(i)}loadMoreOfPaginatedQuery(e,t){this.mustGetPaginatedQuery(e);let n=this.queryTokenForLastPageOfPaginatedQuery(e),r=this.client.localQueryResultByToken(n);if(!r)return!1;let i=Kt(r);if(i.isDone)return!1;this.addPageToPaginatedQuery(e,i.continueCursor,t);let a={timestamp:this.lastTransitionTs,reflectedMutations:[],queries:[],paginatedQueries:[{token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}}]};return this.onTransition(a),!0}queriesContainingTokens(e){if(e.length===0)return[];let t=[],n=new Set(e);for(let[e,r]of this.paginatedQuerySet)for(let i of this.allQueryTokens(r))if(n.has(i)){t.push(e);break}return t}processPaginatedQuerySplits(e,t){for(let n of e){let e=this.mustGetPaginatedQuery(n),{ongoingSplits:r,pageKeyToQuery:i,pageKeys:a}=e;for(let[n,[a,o]]of r)t(i.get(a).queryToken)!==void 0&&t(i.get(o).queryToken)!==void 0&&this.completePaginatedQuerySplit(e,n,a,o);for(let n of a){if(r.has(n))continue;let a=i.get(n).queryToken,o=t(a);if(!o)continue;let s=Kt(o);s.splitCursor&&(s.pageStatus===`SplitRecommended`||s.pageStatus===`SplitRequired`||s.page.length>e.options.initialNumItems*2)&&this.splitPaginatedQueryPage(e,n,s.splitCursor,s.continueCursor)}}}splitPaginatedQueryPage(e,t,n,r){let i=e.nextPageKey++,a=e.nextPageKey++,o={cursor:r,numItems:e.options.initialNumItems,id:e.id},s=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:null,endCursor:n}});e.pageKeyToQuery.set(i,s);let c=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:n,endCursor:r}});e.pageKeyToQuery.set(a,c),e.ongoingSplits.set(t,[i,a])}addPageToPaginatedQuery(e,t,n){let r=this.mustGetPaginatedQuery(e),i=r.nextPageKey++,a={cursor:t,numItems:n,id:r.id},o={...r.args,paginationOpts:a},s=this.client.subscribe(r.canonicalizedUdfPath,o);return r.pageKeys.push(i),r.pageKeyToQuery.set(i,s),s}removePaginatedQuerySubscriber(e){let t=this.paginatedQuerySet.get(e);if(t&&(--t.numSubscribers,!(t.numSubscribers>0))){for(let e of t.pageKeyToQuery.values())e.unsubscribe();this.paginatedQuerySet.delete(e)}}completePaginatedQuerySplit(e,t,n,r){let i=e.pageKeyToQuery.get(t);e.pageKeyToQuery.delete(t);let a=e.pageKeys.indexOf(t);e.pageKeys.splice(a,1,n,r),e.ongoingSplits.delete(t),i.unsubscribe()}activePageQueryTokens(e){return e.pageKeys.map(t=>e.pageKeyToQuery.get(t).queryToken)}allQueryTokens(e){return Array.from(e.pageKeyToQuery.values()).map(e=>e.queryToken)}queryTokenForLastPageOfPaginatedQuery(e){let t=this.mustGetPaginatedQuery(e),n=t.pageKeys[t.pageKeys.length-1];if(n===void 0)throw Error(`No pages for paginated query ${e}`);return t.pageKeyToQuery.get(n).queryToken}mustGetPaginatedQuery(e){let t=this.paginatedQuerySet.get(e);if(!t)throw Error(`paginated query no longer exists for token `+e);return t}},U=c(u(),1);function Zt({getCurrentValue:e,subscribe:t}){let[n,r]=(0,U.useState)(()=>({getCurrentValue:e,subscribe:t,value:e()})),i=n.value;return(n.getCurrentValue!==e||n.subscribe!==t)&&(i=e(),r({getCurrentValue:e,subscribe:t,value:i})),(0,U.useEffect)(()=>{let n=!1,i=()=>{n||r(n=>{if(n.getCurrentValue!==e||n.subscribe!==t)return n;let r=e();return n.value===r?n:{...n,value:r}})},a=t(i);return i(),()=>{n=!0,a()}},[e,t]),i}var Qt=Object.defineProperty,$t=(e,t,n)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,en=(e,t,n)=>$t(e,typeof t==`symbol`?t:t+``,n),tn=5e3;if(U.default===void 0)throw Error(`Required dependency 'react' not found`);function nn(e,t,n){function r(r){return dn(r),t.mutation(e,r,{optimisticUpdate:n})}return r.withOptimisticUpdate=function(r){if(n!==void 0)throw Error(`Already specified optimistic update for mutation ${B(e)}`);return nn(e,t,r)},r}function rn(e,t){return function(n){return t.action(e,n)}}var an=class{constructor(e,t){if(en(this,`address`),en(this,`cachedSync`),en(this,`cachedPaginatedQueryClient`),en(this,`listeners`),en(this,`options`),en(this,`closed`,!1),en(this,`_logger`),en(this,`adminAuth`),en(this,`fakeUserIdentity`),e===void 0)throw Error(`No address provided to ConvexReactClient.
If trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/
If running locally, make sure to run \`convex dev\` and ensure the .env.local file is populated.`);if(typeof e!=`string`)throw Error(`ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof e} instead.`);if(!e.includes(`://`))throw Error(`Provided address was not an absolute URL.`);this.address=e,this.listeners=new Map,this._logger=t?.logger===!1?Ce({verbose:t?.verbose??!1}):t?.logger!==!0&&t?.logger?t.logger:Se({verbose:t?.verbose??!1}),this.options={...t,logger:this._logger}}get url(){return this.address}get sync(){if(this.closed)throw Error(`ConvexReactClient has already been closed.`);return this.cachedSync?this.cachedSync:(this.cachedSync=new Gt(this.address,()=>{},this.options),this.adminAuth&&this.cachedSync.setAdminAuth(this.adminAuth,this.fakeUserIdentity),this.cachedPaginatedQueryClient=new Xt(this.cachedSync,e=>this.handleTransition(e)),this.cachedSync)}get paginatedQueryClient(){if(this.sync,this.cachedPaginatedQueryClient)return this.cachedPaginatedQueryClient;throw Error(`Should already be instantiated`)}setAuth(e,t,n){if(typeof e==`string`)throw Error(`Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication.`);this.sync.setAuth(e,t??(()=>{}),n)}clearAuth(){this.sync.clearAuth()}setAdminAuth(e,t){if(this.adminAuth=e,this.fakeUserIdentity=t,this.closed)throw Error(`ConvexReactClient has already been closed.`);this.cachedSync&&this.sync.setAdminAuth(e,t)}watchQuery(e,...t){let[n,r]=t,i=B(e);return{onUpdate:e=>{let{queryToken:t,unsubscribe:a}=this.sync.subscribe(i,n,r),o=this.listeners.get(t);return o===void 0?this.listeners.set(t,new Set([e])):o.add(e),()=>{if(this.closed)return;let n=this.listeners.get(t);n.delete(e),n.size===0&&this.listeners.delete(t),a()}},localQueryResult:()=>{if(this.cachedSync)return this.cachedSync.localQueryResult(i,n)},localQueryLogs:()=>{if(this.cachedSync)return this.cachedSync.localQueryLogs(i,n)},journal:()=>{if(this.cachedSync)return this.cachedSync.queryJournal(i,n)}}}prewarmQuery(e){let t=e.extendSubscriptionFor??tn,n=this.watchQuery(e.query,e.args||{}).onUpdate(()=>{});setTimeout(n,t)}watchPaginatedQuery(e,t,n){let r=B(e);return{onUpdate:e=>{let{paginatedQueryToken:i,unsubscribe:a}=this.paginatedQueryClient.subscribe(r,t||{},n),o=this.listeners.get(i);return o===void 0?this.listeners.set(i,new Set([e])):o.add(e),()=>{if(this.closed)return;let t=this.listeners.get(i);t.delete(e),t.size===0&&this.listeners.delete(i),a()}},localQueryResult:()=>this.paginatedQueryClient.localQueryResult(r,t,n)}}mutation(e,...t){let[n,r]=t,i=B(e);return this.sync.mutation(i,n,r)}action(e,...t){let n=B(e);return this.sync.action(n,...t)}query(e,...t){let n=this.watchQuery(e,...t),r=n.localQueryResult();return r===void 0?new Promise((e,t)=>{let r=n.onUpdate(()=>{r();try{e(n.localQueryResult())}catch(e){t(e)}})}):Promise.resolve(r)}connectionState(){return this.sync.connectionState()}subscribeToConnectionState(e){return this.sync.subscribeToConnectionState(e)}get logger(){return this._logger}async close(){if(this.closed=!0,this.listeners=new Map,this.cachedPaginatedQueryClient&&=void 0,this.cachedSync){let e=this.cachedSync;this.cachedSync=void 0,await e.close()}}handleTransition(e){let t=e.queries.map(e=>e.token),n=e.paginatedQueries.map(e=>e.token);this.transition([...t,...n])}transition(e){for(let t of e){let e=this.listeners.get(t);if(e)for(let t of e)t()}}},on=U.createContext(void 0);function sn(){return(0,U.useContext)(on)}var cn=({client:e,children:t})=>U.createElement(on.Provider,{value:e},t);function ln(e,...t){let n=t[0]===`skip`,r=t[0]===`skip`?{}:C(t[0]),i=typeof e==`string`?We(e):e,a=B(i),o=gn((0,U.useMemo)(()=>n?{}:{query:{query:i,args:r}},[JSON.stringify(le(r)),a,n])).query;if(o instanceof Error)throw o;return o}function W(e){let t=typeof e==`string`?We(e):e,n=(0,U.useContext)(on);if(n===void 0)throw Error("Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return(0,U.useMemo)(()=>nn(t,n),[n,B(t)])}function un(e){let t=(0,U.useContext)(on),n=typeof e==`string`?We(e):e;if(t===void 0)throw Error("Could not find Convex client! `useAction` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return(0,U.useMemo)(()=>rn(n,t),[t,B(n)])}function dn(e){if(typeof e==`object`&&e&&`bubbles`in e&&`persist`in e&&`isDefaultPrevented`in e)throw Error("Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler.")}var fn=Object.defineProperty,pn=(e,t,n)=>t in e?fn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mn=(e,t,n)=>pn(e,typeof t==`symbol`?t:t+``,n),hn=class{constructor(e){mn(this,`createWatch`),mn(this,`queries`),mn(this,`listeners`),this.createWatch=e,this.queries={},this.listeners=new Set}setQueries(e){for(let t of Object.keys(e)){let{query:n,args:r,paginationOptions:i}=e[t];if(B(n),this.queries[t]===void 0)this.addQuery(t,n,r,i?{paginationOptions:i}:{});else{let e=this.queries[t];(B(n)!==B(e.query)||JSON.stringify(le(r))!==JSON.stringify(le(e.args))||JSON.stringify(i)!==JSON.stringify(e.paginationOptions))&&(this.removeQuery(t),this.addQuery(t,n,r,i?{paginationOptions:i}:{}))}}for(let t of Object.keys(this.queries))e[t]===void 0&&this.removeQuery(t)}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}getLocalResults(e){let t={};for(let n of Object.keys(e)){let{query:r,args:i}=e[n],a=e[n].paginationOptions;B(r);let o=this.createWatch(r,i,a?{paginationOptions:a}:{}),s;try{s=o.localQueryResult()}catch(e){if(e instanceof Error)s=e;else throw e}t[n]=s}return t}setCreateWatch(e){this.createWatch=e;for(let e of Object.keys(this.queries)){let{query:t,args:n,watch:r,paginationOptions:i}=this.queries[e],a=`journal`in r?r.journal():void 0;this.removeQuery(e),this.addQuery(e,t,n,{...a?{journal:a}:[],...i?{paginationOptions:i}:{}})}}destroy(){for(let e of Object.keys(this.queries))this.removeQuery(e);this.listeners=new Set}addQuery(e,t,n,{paginationOptions:r,journal:i}){if(this.queries[e]!==void 0)throw Error(`Tried to add a new query with identifier ${e} when it already exists.`);let a=this.createWatch(t,n,{...i?{journal:i}:[],...r?{paginationOptions:r}:{}}),o=a.onUpdate(()=>this.notifyListeners());this.queries[e]={query:t,args:n,watch:a,unsubscribe:o,...r?{paginationOptions:r}:{}}}removeQuery(e){let t=this.queries[e];if(t===void 0)throw Error(`No query found with identifier ${e}.`);t.unsubscribe(),delete this.queries[e]}notifyListeners(){for(let e of this.listeners)e()}};function gn(e){let t=sn();if(t===void 0)throw Error("Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return _n(e,(0,U.useMemo)(()=>(e,n,{journal:r,paginationOptions:i})=>i?t.watchPaginatedQuery(e,n,i):t.watchQuery(e,n,r?{journal:r}:{}),[t]))}function _n(e,t){let[n]=(0,U.useState)(()=>new hn(t));return n.createWatch!==t&&n.setCreateWatch(t),(0,U.useEffect)(()=>()=>n.destroy(),[n]),Zt((0,U.useMemo)(()=>({getCurrentValue:()=>n.getLocalResults(e),subscribe:t=>(n.setQueries(e),n.subscribe(t))}),[n,e]))}var vn=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function E(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=E,D=function(){te.postMessage(null)}}else D=function(){_(E,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),yn=o(((e,t)=>{t.exports=vn()})),bn=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),xn=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=bn()})),Sn=o((e=>{var t=yn(),n=u(),r=xn();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,m=Symbol.for(`react.element`),h=Symbol.for(`react.transitional.element`),g=Symbol.for(`react.portal`),_=Symbol.for(`react.fragment`),v=Symbol.for(`react.strict_mode`),y=Symbol.for(`react.profiler`),b=Symbol.for(`react.consumer`),x=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),ee=Symbol.for(`react.lazy`),E=Symbol.for(`react.activity`),D=Symbol.for(`react.memo_cache_sentinel`),O=Symbol.iterator;function te(e){return typeof e!=`object`||!e?null:(e=O&&e[O]||e[`@@iterator`],typeof e==`function`?e:null)}var ne=Symbol.for(`react.client.reference`);function re(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case _:return`Fragment`;case y:return`Profiler`;case v:return`StrictMode`;case C:return`Suspense`;case w:return`SuspenseList`;case E:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case g:return`Portal`;case x:return e.displayName||`Context`;case b:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?re(e.type)||`Memo`:t;case ee:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var k=Array.isArray,A=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ae=[],M=-1;function oe(e){return{current:e}}function N(e){0>M||(e.current=ae[M],ae[M]=null,M--)}function P(e,t){M++,ae[M]=e.current,e.current=t}var F=oe(null),I=oe(null),L=oe(null),se=oe(null);function ce(e,t){switch(P(L,t),P(I,e),P(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}N(F),P(F,e)}function le(){N(F),N(I),N(L)}function ue(e){e.memoizedState!==null&&P(se,e);var t=F.current,n=Hd(t,e.type);t!==n&&(P(I,e),P(F,n))}function de(e){I.current===e&&(N(F),N(I)),se.current===e&&(N(se),Qf._currentValue=ie)}var R,fe;function pe(e){if(R===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);R=t&&t[1]||``,fe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+R+e+fe}var me=!1;function z(e,t){if(!e||me)return``;me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{me=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?pe(n):``}function he(e,t){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe(`Lazy`);case 13:return e.child!==t&&t!==null?pe(`Suspense Fallback`):pe(`Suspense`);case 19:return pe(`SuspenseList`);case 0:case 15:return z(e.type,!1);case 11:return z(e.type.render,!1);case 1:return z(e.type,!0);case 31:return pe(`Activity`);default:return``}}function ge(e){try{var t=``,n=null;do t+=he(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var _e=Object.prototype.hasOwnProperty,ve=t.unstable_scheduleCallback,ye=t.unstable_cancelCallback,be=t.unstable_shouldYield,xe=t.unstable_requestPaint,Se=t.unstable_now,Ce=t.unstable_getCurrentPriorityLevel,we=t.unstable_ImmediatePriority,Te=t.unstable_UserBlockingPriority,Ee=t.unstable_NormalPriority,De=t.unstable_LowPriority,Oe=t.unstable_IdlePriority,ke=t.log,Ae=t.unstable_setDisableYieldValue,je=null,Me=null;function Ne(e){if(typeof ke==`function`&&Ae(e),Me&&typeof Me.setStrictMode==`function`)try{Me.setStrictMode(je,e)}catch{}}var Pe=Math.clz32?Math.clz32:Le,Fe=Math.log,Ie=Math.LN2;function Le(e){return e>>>=0,e===0?32:31-(Fe(e)/Ie|0)|0}var Re=256,ze=262144,Be=4194304;function Ve(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function He(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ve(n))):i=Ve(o):i=Ve(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ve(n))):i=Ve(o)):i=Ve(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ue(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function B(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function We(){var e=Be;return Be<<=1,!(Be&62914560)&&(Be=4194304),e}function Ge(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ke(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Pe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Je(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Je(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Pe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ye(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Xe(e,t){var n=t&-t;return n=n&42?1:Ze(n),(n&(e.suspendedLanes|t))===0?n:0}function Ze(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qe(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function $e(){var e=j.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function et(e,t){var n=j.p;try{return j.p=e,t()}finally{j.p=n}}var tt=Math.random().toString(36).slice(2),V=`__reactFiber$`+tt,nt=`__reactProps$`+tt,rt=`__reactContainer$`+tt,it=`__reactEvents$`+tt,at=`__reactListeners$`+tt,ot=`__reactHandles$`+tt,st=`__reactResources$`+tt,ct=`__reactMarker$`+tt;function lt(e){delete e[V],delete e[nt],delete e[it],delete e[at],delete e[ot]}function ut(e){var t=e[V];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[V]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[V])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function dt(e){if(e=e[V]||e[rt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ft(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function pt(e){var t=e[st];return t||=e[st]={hoistableStyles:new Map,hoistableScripts:new Map},t}function mt(e){e[ct]=!0}var ht=new Set,H={};function gt(e,t){_t(e,t),_t(e+`Capture`,t)}function _t(e,t){for(H[e]=t,e=0;e<t.length;e++)ht.add(t[e])}var vt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),yt={},bt={};function xt(e){return _e.call(bt,e)?!0:_e.call(yt,e)?!1:vt.test(e)?bt[e]=!0:(yt[e]=!0,!1)}function St(e,t,n){if(xt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ct(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function wt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Tt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Et(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Dt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ot(e){if(!e._valueTracker){var t=Et(e)?`checked`:`value`;e._valueTracker=Dt(e,t,``+e[t])}}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Et(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function At(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var jt=/[\n"\\]/g;function Mt(e){return e.replace(jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Nt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Tt(t)):e.value!==``+Tt(t)&&(e.value=``+Tt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ft(e,o,Tt(n)):Ft(e,o,Tt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Tt(s):e.removeAttribute(`name`)}function Pt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ot(e);return}n=n==null?``:``+Tt(n),t=t==null?n:``+Tt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ot(e)}function Ft(e,t,n){t===`number`&&At(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function It(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Tt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lt(e,t,n){if(t!=null&&(t=``+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Tt(n)}function Rt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(k(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Tt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ot(e)}function zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Vt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Bt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Ht(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Vt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Vt(e,o,t[o])}function Ut(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Wt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Gt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kt(e){return Gt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function qt(){}var Jt=null;function Yt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xt=null,U=null;function Zt(e){var t=dt(e);if(t&&(e=t.stateNode)){var n=e[nt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Nt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Mt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[nt]||null;if(!a)throw Error(i(90));Nt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&kt(r)}break a;case`textarea`:Lt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&It(e,!!n.multiple,t,!1)}}}var Qt=!1;function $t(e,t,n){if(Qt)return e(t,n);Qt=!0;try{return e(t)}finally{if(Qt=!1,(Xt!==null||U!==null)&&(vu(),Xt&&(t=Xt,e=U,U=Xt=null,Zt(t),e)))for(t=0;t<e.length;t++)Zt(e[t])}}function en(e,t){var n=e.stateNode;if(n===null)return null;var r=n[nt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var tn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),nn=!1;if(tn)try{var rn={};Object.defineProperty(rn,"passive",{get:function(){nn=!0}}),window.addEventListener(`test`,rn,rn),window.removeEventListener(`test`,rn,rn)}catch{nn=!1}var an=null,on=null,sn=null;function cn(){if(sn)return sn;var e,t=on,n=t.length,r,i=`value`in an?an.value:an.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return sn=i.slice(e,1<r?1-r:void 0)}function ln(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function W(){return!0}function un(){return!1}function dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?W:un,this.isPropagationStopped=un,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=W)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=W)},persist:function(){},isPersistent:W}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pn=dn(fn),mn=p({},fn,{view:0,detail:0}),hn=dn(mn),gn,_n,vn,bn=p({},mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:K,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==vn&&(vn&&e.type===`mousemove`?(gn=e.screenX-vn.screenX,_n=e.screenY-vn.screenY):_n=gn=0,vn=e),gn)},movementY:function(e){return`movementY`in e?e.movementY:_n}}),Sn=dn(bn),Cn=dn(p({},bn,{dataTransfer:0})),wn=dn(p({},mn,{relatedTarget:0})),Tn=dn(p({},fn,{animationName:0,elapsedTime:0,pseudoElement:0})),En=dn(p({},fn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Dn=dn(p({},fn,{data:0})),On={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},G={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function An(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kn[e])?!!t[e]:!1}function K(){return An}var jn=dn(p({},mn,{key:function(e){if(e.key){var t=On[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=ln(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?G[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:K,charCode:function(e){return e.type===`keypress`?ln(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?ln(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Mn=dn(p({},bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nn=dn(p({},mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:K})),Pn=dn(p({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Fn=dn(p({},bn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),In=dn(p({},fn,{newState:0,oldState:0})),Ln=[9,13,27,32],Rn=tn&&`CompositionEvent`in window,zn=null;tn&&`documentMode`in document&&(zn=document.documentMode);var Bn=tn&&`TextEvent`in window&&!zn,Vn=tn&&(!Rn||zn&&8<zn&&11>=zn),Hn=` `,Un=!1;function Wn(e,t){switch(e){case`keyup`:return Ln.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Gn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Kn=!1;function qn(e,t){switch(e){case`compositionend`:return Gn(t);case`keypress`:return t.which===32?(Un=!0,Hn):null;case`textInput`:return e=t.data,e===Hn&&Un?null:e;default:return null}}function Jn(e,t){if(Kn)return e===`compositionend`||!Rn&&Wn(e,t)?(e=cn(),sn=on=an=null,Kn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Vn&&t.locale!==`ko`?null:t.data;default:return null}}var Yn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Yn[e.type]:t===`textarea`}function Zn(e,t,n,r){Xt?U?U.push(r):U=[r]:Xt=r,t=Td(t,`onChange`),0<t.length&&(n=new pn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Qn=null,$n=null;function er(e){vd(e,0)}function tr(e){if(kt(ft(e)))return e}function nr(e,t){if(e===`change`)return t}var rr=!1;if(tn){var ir;if(tn){var ar=`oninput`in document;if(!ar){var or=document.createElement(`div`);or.setAttribute(`oninput`,`return;`),ar=typeof or.oninput==`function`}ir=ar}else ir=!1;rr=ir&&(!document.documentMode||9<document.documentMode)}function sr(){Qn&&(Qn.detachEvent(`onpropertychange`,cr),$n=Qn=null)}function cr(e){if(e.propertyName===`value`&&tr($n)){var t=[];Zn(t,$n,e,Yt(e)),$t(er,t)}}function lr(e,t,n){e===`focusin`?(sr(),Qn=t,$n=n,Qn.attachEvent(`onpropertychange`,cr)):e===`focusout`&&sr()}function ur(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return tr($n)}function dr(e,t){if(e===`click`)return tr(t)}function fr(e,t){if(e===`input`||e===`change`)return tr(t)}function pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var mr=typeof Object.is==`function`?Object.is:pr;function hr(e,t){if(mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_e.call(t,i)||!mr(e[i],t[i]))return!1}return!0}function gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _r(e,t){var n=gr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=gr(n)}}function vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=At(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=At(e.document)}return t}function br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var xr=tn&&`documentMode`in document&&11>=document.documentMode,Sr=null,Cr=null,wr=null,Tr=!1;function Er(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tr||Sr==null||Sr!==At(r)||(r=Sr,`selectionStart`in r&&br(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&hr(wr,r)||(wr=r,r=Td(Cr,`onSelect`),0<r.length&&(t=new pn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Or={animationend:Dr(`Animation`,`AnimationEnd`),animationiteration:Dr(`Animation`,`AnimationIteration`),animationstart:Dr(`Animation`,`AnimationStart`),transitionrun:Dr(`Transition`,`TransitionRun`),transitionstart:Dr(`Transition`,`TransitionStart`),transitioncancel:Dr(`Transition`,`TransitionCancel`),transitionend:Dr(`Transition`,`TransitionEnd`)},kr={},Ar={};tn&&(Ar=document.createElement(`div`).style,`AnimationEvent`in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),`TransitionEvent`in window||delete Or.transitionend.transition);function jr(e){if(kr[e])return kr[e];if(!Or[e])return e;var t=Or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ar)return kr[e]=t[n];return e}var Mr=jr(`animationend`),Nr=jr(`animationiteration`),Pr=jr(`animationstart`),Fr=jr(`transitionrun`),Ir=jr(`transitionstart`),Lr=jr(`transitioncancel`),Rr=jr(`transitionend`),zr=new Map,Br=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Br.push(`scrollEnd`);function Vr(e,t){zr.set(e,t),gt(t,[e])}var Hr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ur=[],Wr=0,Gr=0;function Kr(){for(var e=Wr,t=Gr=Wr=0;t<e;){var n=Ur[t];Ur[t++]=null;var r=Ur[t];Ur[t++]=null;var i=Ur[t];Ur[t++]=null;var a=Ur[t];if(Ur[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Xr(n,i,a)}}function qr(e,t,n,r){Ur[Wr++]=e,Ur[Wr++]=t,Ur[Wr++]=n,Ur[Wr++]=r,Gr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Jr(e,t,n,r){return qr(e,t,n,r),Zr(e)}function Yr(e,t){return qr(e,null,null,t),Zr(e)}function Xr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Pe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Zr(e){if(50<lu)throw lu=0,uu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qr={};function $r(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,t,n,r){return new $r(e,t,n,r)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ni(e,t){var n=e.alternate;return n===null?(n=ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ri(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ti(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,F.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case E:return e=ei(31,n,t,a),e.elementType=E,e.lanes=o,e;case _:return ai(n.children,a,o,t);case v:s=8,a|=24;break;case y:return e=ei(12,n,t,a|2),e.elementType=y,e.lanes=o,e;case C:return e=ei(13,n,t,a),e.elementType=C,e.lanes=o,e;case w:return e=ei(19,n,t,a),e.elementType=w,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case x:s=10;break a;case b:s=9;break a;case S:s=11;break a;case T:s=14;break a;case ee:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ei(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ai(e,t,n,r){return e=ei(7,e,r,t),e.lanes=n,e}function oi(e,t,n){return e=ei(6,e,null,t),e.lanes=n,e}function si(e){var t=ei(18,null,null,0);return t.stateNode=e,t}function ci(e,t,n){return t=ei(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var li=new WeakMap;function ui(e,t){if(typeof e==`object`&&e){var n=li.get(e);return n===void 0?(t={value:e,source:t,stack:ge(t)},li.set(e,t),t):n}return{value:e,source:t,stack:ge(t)}}var di=[],fi=0,pi=null,mi=0,hi=[],gi=0,_i=null,vi=1,yi=``;function bi(e,t){di[fi++]=mi,di[fi++]=pi,pi=e,mi=t}function xi(e,t,n){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,_i=e;var r=vi;e=yi;var i=32-Pe(r)-1;r&=~(1<<i),n+=1;var a=32-Pe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vi=1<<32-Pe(t)+i|n<<i|r,yi=a+e}else vi=1<<a|n<<i|r,yi=e}function Si(e){e.return!==null&&(bi(e,1),xi(e,1,0))}function Ci(e){for(;e===pi;)pi=di[--fi],di[fi]=null,mi=di[--fi],di[fi]=null;for(;e===_i;)_i=hi[--gi],hi[gi]=null,yi=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null}function wi(e,t){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,vi=t.id,yi=t.overflow,_i=e}var Ti=null,q=null,J=!1,Ei=null,Di=!1,Oi=Error(i(519));function ki(e){throw Fi(ui(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Oi}function Ai(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[V]=e,t[nt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Pt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),Rt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||ki(e,!0)}function ji(e){for(Ti=e.return;Ti;)switch(Ti.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Ti=Ti.return}}function Mi(e){if(e!==Ti)return!1;if(!J)return ji(e),J=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&q&&ki(e),ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));q=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));q=uf(e)}else t===27?(t=q,Zd(e.type)?(e=lf,lf=null,q=e):q=t):q=Ti?cf(e.stateNode.nextSibling):null;return!0}function Ni(){q=Ti=null,J=!1}function Pi(){var e=Ei;return e!==null&&(Yl===null?Yl=e:Yl.push.apply(Yl,e),Ei=null),e}function Fi(e){Ei===null?Ei=[e]:Ei.push(e)}var Ii=oe(null),Li=null,Ri=null;function zi(e,t,n){P(Ii,t._currentValue),t._currentValue=n}function Bi(e){e._currentValue=Ii.current,N(Ii)}function Vi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Hi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Vi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Vi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ui(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;mr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===se.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Hi(t,e,n,r),t.flags|=262144}function Wi(e){for(e=e.firstContext;e!==null;){if(!mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gi(e){Li=e,Ri=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ki(e){return Ji(Li,e)}function qi(e,t){return Li===null&&Gi(e),Ji(e,t)}function Ji(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ri===null){if(e===null)throw Error(i(308));Ri=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ri=Ri.next=t;return n}var Yi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Xi=t.unstable_scheduleCallback,Zi=t.unstable_NormalPriority,Qi={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $i(){return{controller:new Yi,data:new Map,refCount:0}}function ea(e){e.refCount--,e.refCount===0&&Xi(Zi,function(){e.controller.abort()})}var ta=null,na=0,ra=0,ia=null;function aa(e,t){if(ta===null){var n=ta=[];na=0,ra=ud(),ia={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return na++,t.then(oa,oa),t}function oa(){if(--na===0&&ta!==null){ia!==null&&(ia.status=`fulfilled`);var e=ta;ta=null,ra=0,ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ca=A.S;A.S=function(e,t){Ql=Se(),typeof t==`object`&&t&&typeof t.then==`function`&&aa(e,t),ca!==null&&ca(e,t)};var la=oe(null);function ua(){var e=la.current;return e===null?Fl.pooledCache:e}function da(e,t){t===null?P(la,la.current):P(la,t.pool)}function fa(){var e=ua();return e===null?null:{parent:Qi._currentValue,pool:e}}var pa=Error(i(460)),ma=Error(i(474)),ha=Error(i(542)),ga={then:function(){}};function _a(e){return e=e.status,e===`fulfilled`||e===`rejected`}function va(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qt,qt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e;default:if(typeof t.status==`string`)t.then(qt,qt);else{if(e=Fl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e}throw ba=t,pa}}function ya(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ba=e,pa):e}}var ba=null;function xa(){if(ba===null)throw Error(i(459));var e=ba;return ba=null,e}function Sa(e){if(e===pa||e===ha)throw Error(i(483))}var Ca=null,wa=0;function Ta(e){var t=wa;return wa+=1,Ca===null&&(Ca=[]),va(Ca,e,t)}function Ea(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Da(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Oa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ni(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=oi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===_?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ee&&ya(i)===t.type)?(t=a(t,n.props),Ea(t,n),t.return=e,t):(t=ii(n.type,n.key,n.props,null,e.mode,r),Ea(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ai(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=oi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case h:return n=ii(t.type,t.key,t.props,null,e.mode,n),Ea(n,t),n.return=e,n;case g:return t=ci(t,e.mode,n),t.return=e,t;case ee:return t=ya(t),f(e,t,n)}if(k(t)||te(t))return t=ai(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ta(t),n);if(t.$$typeof===x)return f(e,qi(e,t),n);Da(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case h:return n.key===i?l(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case ee:return n=ya(n),p(e,t,n,r)}if(k(n)||te(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ta(n),r);if(n.$$typeof===x)return p(e,t,qi(e,n),r);Da(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case h:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case g:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ee:return r=ya(r),m(e,t,n,r,i)}if(k(r)||te(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ta(r),i);if(r.$$typeof===x)return m(e,t,n,qi(t,r),i);Da(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),J&&bi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return J&&bi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),J&&bi(i,h),l}function y(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),J&&bi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return J&&bi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),J&&bi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===_&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case h:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===_){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ee&&ya(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ea(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===_?(c=ai(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ii(o.type,o.key,o.props,null,e.mode,c),Ea(c,o),c.return=e,e=c)}return s(e);case g:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ci(o,e.mode,c),c.return=e,e=c}return s(e);case ee:return o=ya(o),b(e,r,o,c)}if(k(o))return v(e,r,o,c);if(te(o)){if(l=te(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ta(o),c);if(o.$$typeof===x)return b(e,r,qi(e,o),c);Da(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=oi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{wa=0;var i=b(e,t,n,r);return Ca=null,i}catch(t){if(t===pa||t===ha)throw t;var a=ei(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ka=Oa(!0),Aa=Oa(!1),ja=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Zr(e),Xr(e,null,n),t}return qr(e,r,t,n),Zr(e)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ye(e,n)}}function La(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ra=!1;function za(){if(Ra){var e=ia;if(e!==null)throw e}}function Ba(e,t,n,r){Ra=!1;var i=e.updateQueue;ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,m=f!==s.lane;if(m?(Q&f)===f:(r&f)===f){f!==0&&f===ra&&(Ra=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=p({},d,f);break a;case 2:ja=!0}}f=s.callback,f!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[f]:m.push(f))}else m={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ul|=o,e.lanes=o,e.memoizedState=d}}function Va(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ha(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Va(n[e],t)}var Ua=oe(null),Wa=oe(0);function Ga(e,t){e=Vl,P(Wa,e),P(Ua,t),Vl=e|t.baseLanes}function Ka(){P(Wa,Vl),P(Ua,Ua.current)}function qa(){Vl=Wa.current,N(Ua),N(Wa)}var Ja=oe(null),Ya=null;function Xa(e){var t=e.alternate;P(to,to.current&1),P(Ja,e),Ya===null&&(t===null||Ua.current!==null||t.memoizedState!==null)&&(Ya=e)}function Za(e){P(to,to.current),P(Ja,e),Ya===null&&(Ya=e)}function Qa(e){e.tag===22?(P(to,to.current),P(Ja,e),Ya===null&&(Ya=e)):$a(e)}function $a(){P(to,to.current),P(Ja,Ja.current)}function eo(e){N(Ja),Ya===e&&(Ya=null),N(to)}var to=oe(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ro=0,Y=null,io=null,ao=null,oo=!1,so=!1,co=!1,lo=0,uo=0,fo=null,po=0;function mo(){throw Error(i(321))}function ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,a){return ro=a,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Ns:Ps,co=!1,a=n(r,i),co=!1,so&&(a=vo(t,n,r,i)),_o(e),a}function _o(e){A.H=Ms;var t=io!==null&&io.next!==null;if(ro=0,ao=io=Y=null,oo=!1,uo=0,fo=null,t)throw Error(i(300));e===null||Zs||(e=e.dependencies,e!==null&&Wi(e)&&(Zs=!0))}function vo(e,t,n,r){Y=e;var a=0;do{if(so&&(fo=null),uo=0,so=!1,25<=a)throw Error(i(301));if(a+=1,ao=io=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}A.H=Fs,o=t(n,r)}while(so);return o}function yo(){var e=A.H,t=e.useState()[0];return t=typeof t.then==`function`?Eo(t):t,e=e.useState()[0],(io===null?null:io.memoizedState)!==e&&(Y.flags|=1024),t}function bo(){var e=lo!==0;return lo=0,e}function xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function So(e){if(oo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oo=!1}ro=0,ao=io=Y=null,so=!1,uo=lo=0,fo=null}function Co(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ao===null?Y.memoizedState=ao=e:ao=ao.next=e,ao}function wo(){if(io===null){var e=Y.alternate;e=e===null?null:e.memoizedState}else e=io.next;var t=ao===null?Y.memoizedState:ao.next;if(t!==null)ao=t,io=e;else{if(e===null)throw Y.alternate===null?Error(i(467)):Error(i(310));io=e,e={memoizedState:io.memoizedState,baseState:io.baseState,baseQueue:io.baseQueue,queue:io.queue,next:null},ao===null?Y.memoizedState=ao=e:ao=ao.next=e}return ao}function To(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var t=uo;return uo+=1,fo===null&&(fo=[]),e=va(fo,e,t),t=Y,(ao===null?t.memoizedState:ao.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Ns:Ps),e}function Do(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Eo(e);if(e.$$typeof===x)return Ki(e)}throw Error(i(438,String(e)))}function Oo(e){var t=null,n=Y.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Y.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=To(),Y.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=D;return t.index++,n}function ko(e,t){return typeof t==`function`?t(e):t}function Ao(e){return jo(wo(),io,e)}function jo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ro&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ra&&(d=!0);else if((ro&p)===p){u=u.next,p===ra&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,Y.lanes|=p,Ul|=p;f=u.action,co&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,Y.lanes|=f,Ul|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!mr(o,e.memoizedState)&&(Zs=!0,d&&(n=ia,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Mo(e){var t=wo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);mr(o,t.memoizedState)||(Zs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function No(e,t,n){var r=Y,a=wo(),o=J;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!mr((io||a).memoizedState,n);if(s&&(a.memoizedState=n,Zs=!0),a=a.queue,is(Io.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ao!==null&&ao.memoizedState.tag&1){if(r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,a,n,t),null),Fl===null)throw Error(i(349));o||ro&127||Po(r,t,n)}return n}function Po(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t=To(),Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fo(e,t,n,r){t.value=n,t.getSnapshot=r,Lo(t)&&Ro(e)}function Io(e,t,n){return n(function(){Lo(t)&&Ro(e)})}function Lo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mr(e,n)}catch{return!0}}function Ro(e){var t=Yr(e,2);t!==null&&pu(t,e,2)}function zo(e){var t=Co();if(typeof e==`function`){var n=e;if(e=n(),co){Ne(!0);try{n()}finally{Ne(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t}function Bo(e,t,n,r){return e.baseState=n,jo(e,io,typeof r==`function`?r:ko)}function Vo(e,t,n,r,a){if(ks(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};A.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ho(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ho(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=A.T,o={};A.T=o;try{var s=n(i,r),c=A.S;c!==null&&c(o,s),Uo(e,t,s)}catch(n){Go(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),A.T=a}}else try{a=n(i,r),Uo(e,t,a)}catch(n){Go(e,t,n)}}function Uo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Wo(e,t,n)},function(n){return Go(e,t,n)}):Wo(e,t,n)}function Wo(e,t,n){t.status=`fulfilled`,t.value=n,Ko(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ho(e,n)))}function Go(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ko(t),t=t.next;while(t!==r)}e.action=null}function Ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qo(e,t){return t}function Jo(e,t){if(J){var n=Fl.formState;if(n!==null){a:{var r=Y;if(J){if(q){b:{for(var i=q,a=Di;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){q=cf(i.nextSibling),r=i.data===`F!`;break a}}ki(r)}r=!1}r&&(t=n[0])}}return n=Co(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},n.queue=r,n=Es.bind(null,Y,r),r.dispatch=n,r=zo(!1),a=Os.bind(null,Y,!1,r.queue),r=Co(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Vo.bind(null,Y,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Yo(e){return Xo(wo(),io,e)}function Xo(e,t,n){if(t=jo(e,t,qo)[0],e=Ao(ko)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Eo(t)}catch(e){throw e===pa?ha:e}else r=t;t=wo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(Y.flags|=2048,$o(9,{destroy:void 0},Zo.bind(null,i,n),null)),[r,a,e]}function Zo(e,t){e.action=t}function Qo(e){var t=wo(),n=io;if(n!==null)return Xo(t,n,e);wo(),t=t.memoizedState,n=wo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function $o(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Y.updateQueue,t===null&&(t=To(),Y.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function es(){return wo().memoizedState}function ts(e,t,n,r){var i=Co();Y.flags|=e,i.memoizedState=$o(1|t,{destroy:void 0},n,r===void 0?null:r)}function ns(e,t,n,r){var i=wo();r=r===void 0?null:r;var a=i.memoizedState.inst;io!==null&&r!==null&&ho(r,io.memoizedState.deps)?i.memoizedState=$o(t,a,n,r):(Y.flags|=e,i.memoizedState=$o(1|t,a,n,r))}function rs(e,t){ts(8390656,8,e,t)}function is(e,t){ns(2048,8,e,t)}function as(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=To(),Y.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function os(e){var t=wo().memoizedState;return as({ref:t,nextImpl:e}),function(){if(X&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ss(e,t){return ns(4,2,e,t)}function cs(e,t){return ns(4,4,e,t)}function ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function us(e,t,n){n=n==null?null:n.concat([e]),ns(4,4,ls.bind(null,t,e),n)}function ds(){}function fs(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ps(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ho(t,r[1]))return r[0];if(r=e(),co){Ne(!0);try{e()}finally{Ne(!1)}}return n.memoizedState=[r,t],r}function ms(e,t,n){return n===void 0||ro&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=fu(),Y.lanes|=e,Ul|=e,n)}function hs(e,t,n,r){return mr(n,t)?n:Ua.current===null?!(ro&42)||ro&1073741824&&!(Q&261930)?(Zs=!0,e.memoizedState=n):(e=fu(),Y.lanes|=e,Ul|=e,t):(e=ms(e,n,r),mr(e,t)||(Zs=!0),e)}function gs(e,t,n,r,i){var a=j.p;j.p=a!==0&&8>a?a:8;var o=A.T,s={};A.T=s,Os(e,!1,t,n);try{var c=i(),l=A.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ds(e,t,sa(c,r),du(e)):Ds(e,t,r,du(e))}catch(n){Ds(e,t,{then:function(){},status:`rejected`,reason:n},du())}finally{j.p=a,o!==null&&s.types!==null&&(o.types=s.types),A.T=o}}function _s(){}function vs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ys(e).queue;gs(e,a,t,ie,n===null?_s:function(){return bs(e),n(r)})}function ys(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bs(e){var t=ys(e);t.next===null&&(t=e.alternate.memoizedState),Ds(e,t.next.queue,{},du())}function xs(){return Ki(Qf)}function Ss(){return wo().memoizedState}function Cs(){return wo().memoizedState}function ws(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=du();e=Pa(n);var r=Fa(t,e,n);r!==null&&(pu(r,t,n),Ia(r,t,n)),t={cache:$i()},e.payload=t;return}t=t.return}}function Ts(e,t,n){var r=du();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ks(e)?As(t,n):(n=Jr(e,t,n,r),n!==null&&(pu(n,e,r),js(n,t,r)))}function Es(e,t,n){Ds(e,t,n,du())}function Ds(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ks(e))As(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,mr(s,o))return qr(e,t,i,0),Fl===null&&Kr(),!1}catch{}if(n=Jr(e,t,i,r),n!==null)return pu(n,e,r),js(n,t,r),!0}return!1}function Os(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(t)throw Error(i(479))}else t=Jr(e,n,r,2),t!==null&&pu(t,e,2)}function ks(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function As(e,t){so=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function js(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ye(e,n)}}var Ms={readContext:Ki,use:Do,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useLayoutEffect:mo,useInsertionEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useSyncExternalStore:mo,useId:mo,useHostTransitionStatus:mo,useFormState:mo,useActionState:mo,useOptimistic:mo,useMemoCache:mo,useCacheRefresh:mo};Ms.useEffectEvent=mo;var Ns={readContext:Ki,use:Do,useCallback:function(e,t){return Co().memoizedState=[e,t===void 0?null:t],e},useContext:Ki,useEffect:rs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ts(4194308,4,ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){ts(4,2,e,t)},useMemo:function(e,t){var n=Co();t=t===void 0?null:t;var r=e();if(co){Ne(!0);try{e()}finally{Ne(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Co();if(n!==void 0){var i=n(t);if(co){Ne(!0);try{n(t)}finally{Ne(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ts.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Co();return e={current:e},t.memoizedState=e},useState:function(e){e=zo(e);var t=e.queue,n=Es.bind(null,Y,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ds,useDeferredValue:function(e,t){return ms(Co(),e,t)},useTransition:function(){var e=zo(!1);return e=gs.bind(null,Y,e.queue,!0,!1),Co().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Y,a=Co();if(J){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Fl===null)throw Error(i(349));Q&127||Po(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,rs(Io.bind(null,r,o,e),[e]),r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,o,n,t),null),n},useId:function(){var e=Co(),t=Fl.identifierPrefix;if(J){var n=yi,r=vi;n=(r&~(1<<32-Pe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=lo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=po++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:xs,useFormState:Jo,useActionState:Jo,useOptimistic:function(e){var t=Co();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Os.bind(null,Y,!0,n),n.dispatch=t,[e,t]},useMemoCache:Oo,useCacheRefresh:function(){return Co().memoizedState=ws.bind(null,Y)},useEffectEvent:function(e){var t=Co(),n={impl:e};return t.memoizedState=n,function(){if(X&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ps={readContext:Ki,use:Do,useCallback:fs,useContext:Ki,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Ao,useRef:es,useState:function(){return Ao(ko)},useDebugValue:ds,useDeferredValue:function(e,t){return hs(wo(),io.memoizedState,e,t)},useTransition:function(){var e=Ao(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Yo,useActionState:Yo,useOptimistic:function(e,t){return Bo(wo(),io,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Ps.useEffectEvent=os;var Fs={readContext:Ki,use:Do,useCallback:fs,useContext:Ki,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Mo,useRef:es,useState:function(){return Mo(ko)},useDebugValue:ds,useDeferredValue:function(e,t){var n=wo();return io===null?ms(n,e,t):hs(n,io.memoizedState,e,t)},useTransition:function(){var e=Mo(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){var n=wo();return io===null?(n.baseState=e,[e,n.queue.dispatch]):Bo(n,io,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Fs.useEffectEvent=os;function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=du(),i=Pa(r);i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(pu(t,e,r),Ia(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=du(),i=Pa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(pu(t,e,r),Ia(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=du(),r=Pa(n);r.tag=2,t!=null&&(r.callback=t),t=Fa(e,r,n),t!==null&&(pu(t,e,n),Ia(t,e,n))}};function Rs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(i,a):!0}function zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function Bs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Vs(e){Hr(e)}function Hs(e){console.error(e)}function Us(e){Hr(e)}function Ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Gs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){return n=Pa(n),n.tag=3,n.payload={element:null},n.callback=function(){Ws(e,t)},n}function qs(e){return e=Pa(e),e.tag=3,e}function Js(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Gs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Gs(t,n,r),typeof i!=`function`&&(tu===null?tu=new Set([this]):tu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ys(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ui(t,n,a,!0),n=Ja.current,n!==null){switch(n.tag){case 31:case 13:return Ya===null?Tu():n.alternate===null&&Hl===0&&(Hl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,a)),!1;case 22:return n.flags|=65536,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,a)),!1}throw Error(i(435,n.tag))}return Wu(e,r,a),Tu(),!1}if(J)return t=Ja.current,t===null?(r!==Oi&&(t=Error(i(423),{cause:r}),Fi(ui(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ui(r,n),a=Ks(e.stateNode,r,a),La(e,a),Hl!==4&&(Hl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Oi&&(e=Error(i(422),{cause:r}),Fi(ui(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ui(o,n),Jl===null?Jl=[o]:Jl.push(o),Hl!==4&&(Hl=2),t===null)return!0;r=ui(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ks(n.stateNode,r,e),La(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(tu===null||!tu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=qs(a),Js(a,e,n,r),La(n,a),!1}n=n.return}while(n!==null);return!1}var Xs=Error(i(461)),Zs=!1;function Qs(e,t,n,r){t.child=e===null?Aa(t,null,n,r):ka(t,e.child,n,r)}function $s(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Gi(t),r=go(e,t,n,o,a,i),s=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(J&&s&&Si(t),t.flags|=1,Qs(e,t,r,i),t.child)}function ec(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ti(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,tc(e,t,a,r,i)):(e=ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!wc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?hr:n,n(o,r)&&e.ref===t.ref)return Cc(e,t,i)}return t.flags|=1,e=ni(a,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(hr(a,r)&&e.ref===t.ref)if(Zs=!1,t.pendingProps=r=a,wc(e,i))e.flags&131072&&(Zs=!0);else return t.lanes=e.lanes,Cc(e,t,i)}return lc(e,t,n,r,i)}function nc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ic(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&da(t,a===null?null:a.cachePool),a===null?Ka():Ga(t,a),Qa(t);else return r=t.lanes=536870912,ic(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&da(t,null),Ka(),$a(t)):(da(t,a.cachePool),Ga(t,a),$a(t),t.memoizedState=null);return Qs(e,t,i,n),t.child}function rc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ic(e,t,n,r,i){var a=ua();return a=a===null?null:{parent:Qi._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&da(t,null),Ka(),Qa(t),e!==null&&Ui(e,t,r,!0),t.childLanes=i,null}function ac(e,t){return t=vc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oc(e,t,n){return ka(t,e.child,null,n),e=ac(t,t.pendingProps),e.flags|=2,eo(t),t.memoizedState=null,e}function sc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(J){if(r.mode===`hidden`)return e=ac(t,r),t.lanes=536870912,rc(null,e);if(Za(t),(e=q)?(e=rf(e,Di),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,q=null)):e=null,e===null)throw ki(t);return t.lanes=536870912,null}return ac(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Za(t),a)if(t.flags&256)t.flags&=-257,t=oc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Zs||Ui(e,t,n,!1),a=(n&e.childLanes)!==0,Zs||a){if(r=Fl,r!==null&&(s=Xe(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Yr(e,s),pu(r,e,s),Xs;Tu(),t=oc(e,t,n)}else e=o.treeContext,q=cf(s.nextSibling),Ti=t,J=!0,Ei=null,Di=!1,e!==null&&wi(t,e),t=ac(t,r),t.flags|=4096;return t}return e=ni(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lc(e,t,n,r,i){return Gi(t),n=go(e,t,n,r,void 0,i),r=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(J&&r&&Si(t),t.flags|=1,Qs(e,t,n,i),t.child)}function uc(e,t,n,r,i,a){return Gi(t),t.updateQueue=null,n=vo(t,r,n,i),_o(e),r=bo(),e!==null&&!Zs?(xo(e,t,a),Cc(e,t,a)):(J&&r&&Si(t),t.flags|=1,Qs(e,t,n,a),t.child)}function dc(e,t,n,r,i){if(Gi(t),t.stateNode===null){var a=Qr,o=n.contextType;typeof o==`object`&&o&&(a=Ki(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ls,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ma(t),o=n.contextType,a.context=typeof o==`object`&&o?Ki(o):Qr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Is(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ls.enqueueReplaceState(a,a.state,null),Ba(t,r,a,i),za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Bs(n,s);a.props=c;var l=a.context,u=n.contextType;o=Qr,typeof u==`object`&&u&&(o=Ki(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&zs(t,a,r,o),ja=!1;var f=t.memoizedState;a.state=f,Ba(t,r,a,i),za(),l=t.memoizedState,s||f!==l||ja?(typeof d==`function`&&(Is(t,n,d,r),l=t.memoizedState),(c=ja||Rs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Na(e,t),o=t.memoizedProps,u=Bs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Qr,typeof l==`object`&&l&&(c=Ki(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&zs(t,a,r,c),ja=!1,f=t.memoizedState,a.state=f,Ba(t,r,a,i),za();var p=t.memoizedState;o!==d||f!==p||ja||e!==null&&e.dependencies!==null&&Wi(e.dependencies)?(typeof s==`function`&&(Is(t,n,s,r),p=t.memoizedState),(u=ja||Rs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Wi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,cc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ka(t,e.child,null,i),t.child=ka(t,null,n,i)):Qs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Cc(e,t,i),e}function fc(e,t,n,r){return Ni(),t.flags|=256,Qs(e,t,n,r),t.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(e){return{baseLanes:e,cachePool:fa()}}function hc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Kl),e}function gc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(to.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(J){if(a?Xa(t):$a(t),(e=q)?(e=rf(e,Di),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,q=null)):e=null,e===null)throw ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?($a(t),a=t.mode,c=vc({mode:`hidden`,children:c},a),r=ai(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(null,r)):(Xa(t),_c(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Xa(t),t.flags&=-257,t=yc(e,t,n)):t.memoizedState===null?($a(t),c=r.fallback,a=t.mode,r=vc({mode:`visible`,children:r.children},a),c=ai(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,ka(t,e.child,null,n),r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,t=rc(null,r)):($a(t),t.child=e.child,t.flags|=128,t=null);else if(Xa(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Fi({value:r,source:null,stack:null}),t=yc(e,t,n)}else if(Zs||Ui(e,t,n,!1),s=(n&e.childLanes)!==0,Zs||s){if(s=Fl,s!==null&&(r=Xe(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Yr(e,r),pu(s,e,r),Xs;af(c)||Tu(),t=yc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,q=cf(c.nextSibling),Ti=t,J=!0,Ei=null,Di=!1,e!==null&&wi(t,e),t=_c(t,r.children),t.flags|=4096);return t}return a?($a(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ni(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ai(c,a,n,null),c.flags|=2):c=ni(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,rc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=mc(n):(a=c.cachePool,a===null?a=fa():(l=Qi._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(e.child,r)):(Xa(t),n=e.child,e=n.sibling,n=ni(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function _c(e,t){return t=vc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function vc(e,t){return e=ei(22,e,null,t),e.lanes=0,e}function yc(e,t,n){return ka(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vi(e.return,t,n)}function xc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Sc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=to.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,P(to,o),Qs(e,t,r,n),r=J?mi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xc(t,!0,n,null,a,r);break;case`together`:xc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Cc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ul|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ui(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ni(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ni(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Wi(e))):!0}function Tc(e,t,n){switch(t.tag){case 3:ce(t,t.stateNode.containerInfo),zi(t,Qi,e.memoizedState.cache),Ni();break;case 27:case 5:ue(t);break;case 4:ce(t,t.stateNode.containerInfo);break;case 10:zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Za(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Xa(t),e=Cc(e,t,n),e===null?null:e.sibling):gc(e,t,n):(Xa(t),t.flags|=128,null);Xa(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ui(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Sc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(to,to.current),r)break;return null;case 22:return t.lanes=0,nc(e,t,n,t.pendingProps);case 24:zi(t,Qi,e.memoizedState.cache)}return Cc(e,t,n)}function Ec(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Zs=!0;else{if(!wc(e,n)&&!(t.flags&128))return Zs=!1,Tc(e,t,n);Zs=!!(e.flags&131072)}else Zs=!1,J&&t.flags&1048576&&xi(t,mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ya(t.elementType),t.type=e,typeof e==`function`)ti(e)?(r=Bs(e,r),t.tag=1,t=dc(null,t,e,r,n)):(t.tag=0,t=lc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=$s(null,t,e,r,n);break a}else if(a===T){t.tag=14,t=ec(null,t,e,r,n);break a}}throw t=re(e)||e,Error(i(306,t,``))}}return t;case 0:return lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Bs(r,t.pendingProps),dc(e,t,r,a,n);case 3:a:{if(ce(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Na(e,t),Ba(t,r,null,n);var s=t.memoizedState;if(r=s.cache,zi(t,Qi,r),r!==o.cache&&Hi(t,[Qi],n,!0),za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=fc(e,t,r,n);break a}else if(r!==a){a=ui(Error(i(424)),t),Fi(a),t=fc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(q=cf(e.firstChild),Ti=t,J=!0,Ei=null,Di=!0,n=Aa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ni(),r===a){t=Cc(e,t,n);break a}Qs(e,t,r,n)}t=t.child}return t;case 26:return cc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:J||(n=t.type,e=t.pendingProps,r=Bd(L.current).createElement(n),r[V]=t,r[nt]=e,Pd(r,n,e),mt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ue(t),e===null&&J&&(r=t.stateNode=ff(t.type,t.pendingProps,L.current),Ti=t,Di=!0,a=q,Zd(t.type)?(lf=a,q=cf(r.firstChild)):q=a),Qs(e,t,t.pendingProps.children,n),cc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&J&&((a=r=q)&&(r=tf(r,t.type,t.pendingProps,Di),r===null?a=!1:(t.stateNode=r,Ti=t,q=cf(r.firstChild),Di=!1,a=!0)),a||ki(t)),ue(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=go(e,t,yo,null,null,n),Qf._currentValue=a),cc(e,t),Qs(e,t,r,n),t.child;case 6:return e===null&&J&&((e=n=q)&&(n=nf(n,t.pendingProps,Di),n===null?e=!1:(t.stateNode=n,Ti=t,q=null,e=!0)),e||ki(t)),null;case 13:return gc(e,t,n);case 4:return ce(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ka(t,null,r,n):Qs(e,t,r,n),t.child;case 11:return $s(e,t,t.type,t.pendingProps,n);case 7:return Qs(e,t,t.pendingProps,n),t.child;case 8:return Qs(e,t,t.pendingProps.children,n),t.child;case 12:return Qs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,zi(t,t.type,r.value),Qs(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Gi(t),a=Ki(a),r=r(a),t.flags|=1,Qs(e,t,r,n),t.child;case 14:return ec(e,t,t.type,t.pendingProps,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 19:return Sc(e,t,n);case 31:return sc(e,t,n);case 22:return nc(e,t,n,t.pendingProps);case 24:return Gi(t),r=Ki(Qi),e===null?(a=ua(),a===null&&(a=Fl,o=$i(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ma(t),zi(t,Qi,a)):((e.lanes&n)!==0&&(Na(e,t),Ba(t,null,null,n),za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,zi(t,Qi,r),r!==a.cache&&Hi(t,[Qi],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),zi(t,Qi,r))),Qs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Dc(e){e.flags|=4}function Oc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Su())e.flags|=8192;else throw ba=ga,ma}else e.flags&=-16777217}function kc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Su())e.flags|=8192;else throw ba=ga,ma}function Ac(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:We(),e.lanes|=t,ql|=t)}function jc(e,t){if(!J)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Mc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nc(e,t,n){var r=t.pendingProps;switch(Ci(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mc(t),null;case 1:return Mc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Bi(Qi),le(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mi(t)?Dc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pi())),Mc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Dc(t),o===null?(Mc(t),Oc(t,a,null,r,n)):(Mc(t),kc(t,o))):o?o===e.memoizedState?(Mc(t),t.flags&=-16777217):(Dc(t),Mc(t),kc(t,o)):(e=e.memoizedProps,e!==r&&Dc(t),Mc(t),Oc(t,a,e,r,n)),null;case 27:if(de(t),n=L.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}e=F.current,Mi(t)?Ai(t,e):(e=ff(a,r,n),t.stateNode=e,Dc(t))}return Mc(t),null;case 5:if(de(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}if(o=F.current,Mi(t))Ai(t,o);else{var s=Bd(L.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[V]=t,o[nt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Dc(t)}}return Mc(t),Oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=L.current,Mi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ti,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[V]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||ki(t,!0)}else e=Bd(e).createTextNode(r),e[V]=t,t.stateNode=e}return Mc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Mi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[V]=t}else Ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),e=!1}else n=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(eo(t),t):(eo(t),null);if(t.flags&128)throw Error(i(558))}return Mc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[V]=t}else Ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),a=!1}else a=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(eo(t),t):(eo(t),null)}return eo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ac(t,t.updateQueue),Mc(t),null);case 4:return le(),e===null&&xd(t.stateNode.containerInfo),Mc(t),null;case 10:return Bi(t.type),Mc(t),null;case 19:if(N(to),r=t.memoizedState,r===null)return Mc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)jc(r,!1);else{if(Hl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=no(e),o!==null){for(t.flags|=128,jc(r,!1),e=o.updateQueue,t.updateQueue=e,Ac(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ri(n,e),n=n.sibling;return P(to,to.current&1|2),J&&bi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Se()>$l&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304)}else{if(!a)if(e=no(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ac(t,e),jc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!J)return Mc(t),null}else 2*Se()-r.renderingStartTime>$l&&n!==536870912&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Mc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Se(),e.sibling=null,n=to.current,P(to,a?n&1|2:n&1),J&&bi(t,r.treeForkCount),e);case 22:case 23:return eo(t),qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Mc(t),t.subtreeFlags&6&&(t.flags|=8192)):Mc(t),n=t.updateQueue,n!==null&&Ac(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&N(la),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bi(Qi),Mc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Pc(e,t){switch(Ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bi(Qi),le(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return de(t),null;case 31:if(t.memoizedState!==null){if(eo(t),t.alternate===null)throw Error(i(340));Ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(eo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(to),null;case 4:return le(),null;case 10:return Bi(t.type),null;case 22:case 23:return eo(t),qa(),e!==null&&N(la),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bi(Qi),null;case 25:return null;default:return null}}function Fc(e,t){switch(Ci(t),t.tag){case 3:Bi(Qi),le();break;case 26:case 27:case 5:de(t);break;case 4:le();break;case 31:t.memoizedState!==null&&eo(t);break;case 13:eo(t);break;case 19:N(to);break;case 10:Bi(t.type);break;case 22:case 23:eo(t),qa(),e!==null&&N(la);break;case 24:Bi(Qi)}}function Ic(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Uu(t,t.return,e)}}function Lc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Uu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Uu(t,t.return,e)}}function Rc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ha(t,n)}catch(t){Uu(e,e.return,t)}}}function zc(e,t,n){n.props=Bs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Uu(e,t,n)}}function Bc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Uu(e,t,n)}}function Vc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Uu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}function Hc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Uu(e,e.return,t)}}function Uc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[nt]=t}catch(t){Uu(e,e.return,t)}}function Wc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Gc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[V]=e,t[nt]=n}catch(t){Uu(e,e.return,t)}}var Yc=!1,Xc=!1,Zc=!1,Qc=typeof WeakSet==`function`?WeakSet:Set,$c=null;function el(e,t){if(e=e.containerInfo,Rd=sp,e=yr(e),br(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,$c=t;$c!==null;)if(t=$c,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,$c=e;else for(;$c!==null;){switch(t=$c,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Bs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Uu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,$c=e;break}$c=t.return}}function tl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:gl(e,n),r&4&&Ic(5,n);break;case 1:if(gl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Uu(n,n.return,e)}else{var i=Bs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Uu(n,n.return,e)}}r&64&&Rc(n),r&512&&Bc(n,n.return);break;case 3:if(gl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ha(e,t)}catch(e){Uu(n,n.return,e)}}break;case 27:t===null&&r&4&&Jc(n);case 26:case 5:gl(e,n),t===null&&r&4&&Hc(n),r&512&&Bc(n,n.return);break;case 12:gl(e,n);break;case 31:gl(e,n),r&4&&sl(e,n);break;case 13:gl(e,n),r&4&&cl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Yc,!r){t=t!==null&&t.memoizedState!==null||Xc,i=Yc;var a=Xc;Yc=r,(Xc=t)&&!a?vl(e,n,(n.subtreeFlags&8772)!=0):gl(e,n),Yc=i,Xc=a}break;case 30:break;default:gl(e,n)}}function nl(e){var t=e.alternate;t!==null&&(e.alternate=null,nl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&lt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rl=null,il=!1;function al(e,t,n){for(n=n.child;n!==null;)ol(e,t,n),n=n.sibling}function ol(e,t,n){if(Me&&typeof Me.onCommitFiberUnmount==`function`)try{Me.onCommitFiberUnmount(je,n)}catch{}switch(n.tag){case 26:Xc||Vc(n,t),al(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xc||Vc(n,t);var r=rl,i=il;Zd(n.type)&&(rl=n.stateNode,il=!1),al(e,t,n),pf(n.stateNode),rl=r,il=i;break;case 5:Xc||Vc(n,t);case 6:if(r=rl,i=il,rl=null,al(e,t,n),rl=r,il=i,rl!==null)if(il)try{(rl.nodeType===9?rl.body:rl.nodeName===`HTML`?rl.ownerDocument.body:rl).removeChild(n.stateNode)}catch(e){Uu(n,t,e)}else try{rl.removeChild(n.stateNode)}catch(e){Uu(n,t,e)}break;case 18:rl!==null&&(il?(e=rl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(rl,n.stateNode));break;case 4:r=rl,i=il,rl=n.stateNode.containerInfo,il=!0,al(e,t,n),rl=r,il=i;break;case 0:case 11:case 14:case 15:Lc(2,n,t),Xc||Lc(4,n,t),al(e,t,n);break;case 1:Xc||(Vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&zc(n,t,r)),al(e,t,n);break;case 21:al(e,t,n);break;case 22:Xc=(r=Xc)||n.memoizedState!==null,al(e,t,n),Xc=r;break;default:al(e,t,n)}}function sl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Uu(t,t.return,e)}}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Uu(t,t.return,e)}}function ll(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qc),t;default:throw Error(i(435,e.tag))}}function ul(e,t){var n=ll(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function dl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){rl=c.stateNode,il=!1;break a}break;case 5:rl=c.stateNode,il=!1;break a;case 3:case 4:rl=c.stateNode.containerInfo,il=!0;break a}c=c.return}if(rl===null)throw Error(i(160));ol(o,s,a),rl=null,il=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pl(t,e),t=t.sibling}var fl=null;function pl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dl(t,e),ml(e),r&4&&(Lc(3,e,e.return),Ic(3,e),Lc(5,e,e.return));break;case 1:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&64&&Yc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=fl;if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ct]||o[V]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[V]=e,mt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[V]=e,mt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Uc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),n!==null&&r&4&&Uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),e.flags&32){a=e.stateNode;try{zt(a,``)}catch(t){Uu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Uc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Zc=!0);break;case 6:if(dl(t,e),ml(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Uu(e,e.return,t)}}break;case 3:if(Bf=null,a=fl,fl=gf(t.containerInfo),dl(t,e),fl=a,ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Uu(e,e.return,t)}Zc&&(Zc=!1,hl(e));break;case 4:r=fl,fl=gf(e.stateNode.containerInfo),dl(t,e),ml(e),fl=r;break;case 12:dl(t,e),ml(e);break;case 31:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 13:dl(t,e),ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zl=Se()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Yc,d=Xc;if(Yc=u||a,Xc=d||l,dl(t,e),Xc=d,Yc=u,ml(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Yc||Xc||_l(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Uu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Uu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Uu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ul(e,n))));break;case 19:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 30:break;case 21:break;default:dl(t,e),ml(e)}}function ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Wc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;qc(e,Gc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(zt(o,``),n.flags&=-33),qc(e,Gc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Kc(e,Gc(e),s);break;default:throw Error(i(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tl(e,t.alternate,t),t=t.sibling}function _l(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Lc(4,t,t.return),_l(t);break;case 1:Vc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&zc(t,t.return,n),_l(t);break;case 27:pf(t.stateNode);case 26:case 5:Vc(t,t.return),_l(t);break;case 22:t.memoizedState===null&&_l(t);break;case 30:_l(t);break;default:_l(t)}e=e.sibling}}function vl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:vl(i,a,n),Ic(4,a);break;case 1:if(vl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Uu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Va(c[i],s)}catch(e){Uu(r,r.return,e)}}n&&o&64&&Rc(a),Bc(a,a.return);break;case 27:Jc(a);case 26:case 5:vl(i,a,n),n&&r===null&&o&4&&Hc(a),Bc(a,a.return);break;case 12:vl(i,a,n);break;case 31:vl(i,a,n),n&&o&4&&sl(i,a);break;case 13:vl(i,a,n),n&&o&4&&cl(i,a);break;case 22:a.memoizedState===null&&vl(i,a,n),Bc(a,a.return);break;case 30:break;default:vl(i,a,n)}t=t.sibling}}function yl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ea(n))}function bl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ea(e))}function xl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sl(e,t,n,r),t=t.sibling}function Sl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:xl(e,t,n,r),i&2048&&Ic(9,t);break;case 1:xl(e,t,n,r);break;case 3:xl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ea(e)));break;case 12:if(i&2048){xl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Uu(t,t.return,e)}}else xl(e,t,n,r);break;case 31:xl(e,t,n,r);break;case 13:xl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?xl(e,t,n,r):(a._visibility|=2,Cl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?xl(e,t,n,r):wl(e,t),i&2048&&yl(o,t);break;case 24:xl(e,t,n,r),i&2048&&bl(t.alternate,t);break;default:xl(e,t,n,r)}}function Cl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Cl(a,o,s,c,i),Ic(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Cl(a,o,s,c,i)):u._visibility&2?Cl(a,o,s,c,i):wl(a,o),i&&l&2048&&yl(o.alternate,o);break;case 24:Cl(a,o,s,c,i),i&&l&2048&&bl(o.alternate,o);break;default:Cl(a,o,s,c,i)}t=t.sibling}}function wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:wl(n,r),i&2048&&yl(r.alternate,r);break;case 24:wl(n,r),i&2048&&bl(r.alternate,r);break;default:wl(n,r)}t=t.sibling}}var Tl=8192;function El(e,t,n){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Dl(e,t,n),e=e.sibling}function Dl(e,t,n){switch(e.tag){case 26:El(e,t,n),e.flags&Tl&&e.memoizedState!==null&&Gf(n,fl,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,n);break;case 3:case 4:var r=fl;fl=gf(e.stateNode.containerInfo),El(e,t,n),fl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Tl,Tl=16777216,El(e,t,n),Tl=r):El(e,t,n));break;default:El(e,t,n)}}function Ol(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Al(e),e=e.sibling}function Al(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Lc(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jl(e)):kl(e);break;default:kl(e)}}function jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Lc(8,t,t.return),jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,jl(t));break;default:jl(t)}e=e.sibling}}function Ml(e,t){for(;$c!==null;){var n=$c;switch(n.tag){case 0:case 11:case 15:Lc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ea(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,$c=r;else a:for(n=e;$c!==null;){r=$c;var i=r.sibling,a=r.return;if(nl(r),r===n){$c=null;break a}if(i!==null){i.return=a,$c=i;break a}$c=a}}}var Nl={getCacheForType:function(e){var t=Ki(Qi),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ki(Qi).controller.signal}},Pl=typeof WeakMap==`function`?WeakMap:Map,X=0,Fl=null,Z=null,Q=0,Il=0,Ll=null,Rl=!1,zl=!1,Bl=!1,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=null,Yl=null,Xl=!1,Zl=0,Ql=0,$l=1/0,eu=null,tu=null,nu=0,ru=null,iu=null,au=0,ou=0,su=null,cu=null,lu=0,uu=null;function du(){return X&2&&Q!==0?Q&-Q:A.T===null?$e():ud()}function fu(){if(Kl===0)if(!(Q&536870912)||J){var e=ze;ze<<=1,!(ze&3932160)&&(ze=262144),Kl=e}else Kl=536870912;return e=Ja.current,e!==null&&(e.flags|=32),Kl}function pu(e,t,n){(e===Fl&&(Il===2||Il===9)||e.cancelPendingCommit!==null)&&(bu(e,0),_u(e,Q,Kl,!1)),Ke(e,n),(!(X&2)||e!==Fl)&&(e===Fl&&(!(X&2)&&(Wl|=n),Hl===4&&_u(e,Q,Kl,!1)),nd(e))}function mu(e,t,n){if(X&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ue(e,t),a=r?Ou(e,t):Eu(e,t,!0),o=r;do{if(a===0){zl&&!r&&_u(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!gu(n)){a=Eu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Jl;var l=c.current.memoizedState.isDehydrated;if(l&&(bu(c,s).flags|=256),s=Eu(c,s,!1),s!==2){if(Bl&&!l){c.errorRecoveryDisabledLanes|=o,Wl|=o,a=4;break a}o=Yl,Yl=a,o!==null&&(Yl===null?Yl=o:Yl.push.apply(Yl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){bu(e,0),_u(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:_u(r,t,Kl,!Rl);break a;case 2:Yl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Zl+300-Se(),10<a)){if(_u(r,t,Kl,!Rl),He(r,0,!0)!==0)break a;au=t,r.timeoutHandle=Kd(hu.bind(null,r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,`Throttled`,-0,0),a);break a}hu(r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,null,-0,0)}}break}while(1);nd(e)}function hu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Dl(t,a,d);var m=(a&62914560)===a?Zl-Se():(a&4194048)===a?Ql-Se():0;if(m=qf(d,m),m!==null){au=a,e.cancelPendingCommit=m(Fu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),_u(e,a,o,!l);return}}Fu(e,t,a,n,r,i,o,s,c)}function gu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _u(e,t,n,r){t&=~Gl,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Pe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Je(e,n,t)}function vu(){return X&6?!0:(rd(0,!1),!1)}function yu(){if(Z!==null){if(Il===0)var e=Z.return;else e=Z,Ri=Li=null,So(e),Ca=null,wa=0,e=Z;for(;e!==null;)Fc(e.alternate,e),e=e.return;Z=null}}function bu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),au=0,yu(),Fl=e,Z=n=ni(e.current,null),Q=t,Il=0,Ll=null,Rl=!1,zl=Ue(e,t),Bl=!1,ql=Kl=Gl=Wl=Ul=Hl=0,Yl=Jl=null,Xl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Pe(r),a=1<<i;t|=e[i],r&=~a}return Vl=t,Kr(),n}function xu(e,t){Y=null,A.H=Ms,t===pa||t===ha?(t=xa(),Il=3):t===ma?(t=xa(),Il=4):Il=t===Xs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ll=t,Z===null&&(Hl=1,Ws(e,ui(t,e.current)))}function Su(){var e=Ja.current;return e===null?!0:(Q&4194048)===Q?Ya===null:(Q&62914560)===Q||Q&536870912?e===Ya:!1}function Cu(){var e=A.H;return A.H=Ms,e===null?Ms:e}function wu(){var e=A.A;return A.A=Nl,e}function Tu(){Hl=4,Rl||(Q&4194048)!==Q&&Ja.current!==null||(zl=!0),!(Ul&134217727)&&!(Wl&134217727)||Fl===null||_u(Fl,Q,Kl,!1)}function Eu(e,t,n){var r=X;X|=2;var i=Cu(),a=wu();(Fl!==e||Q!==t)&&(eu=null,bu(e,t)),t=!1;var o=Hl;a:do try{if(Il!==0&&Z!==null){var s=Z,c=Ll;switch(Il){case 8:yu(),o=6;break a;case 3:case 2:case 9:case 6:Ja.current===null&&(t=!0);var l=Il;if(Il=0,Ll=null,Mu(e,s,c,l),n&&zl){o=0;break a}break;default:l=Il,Il=0,Ll=null,Mu(e,s,c,l)}}Du(),o=Hl;break}catch(t){xu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ri=Li=null,X=r,A.H=i,A.A=a,Z===null&&(Fl=null,Q=0,Kr()),o}function Du(){for(;Z!==null;)Au(Z)}function Ou(e,t){var n=X;X|=2;var r=Cu(),a=wu();Fl!==e||Q!==t?(eu=null,$l=Se()+500,bu(e,t)):zl=Ue(e,t);a:do try{if(Il!==0&&Z!==null){t=Z;var o=Ll;b:switch(Il){case 1:Il=0,Ll=null,Mu(e,t,o,1);break;case 2:case 9:if(_a(o)){Il=0,Ll=null,ju(t);break}t=function(){Il!==2&&Il!==9||Fl!==e||(Il=7),nd(e)},o.then(t,t);break a;case 3:Il=7;break a;case 4:Il=5;break a;case 7:_a(o)?(Il=0,Ll=null,ju(t)):(Il=0,Ll=null,Mu(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Wf(s):c.stateNode.complete){Il=0,Ll=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Nu(u))}break b}}Il=0,Ll=null,Mu(e,t,o,5);break;case 6:Il=0,Ll=null,Mu(e,t,o,6);break;case 8:yu(),Hl=6;break a;default:throw Error(i(462))}}ku();break}catch(t){xu(e,t)}while(1);return Ri=Li=null,A.H=r,A.A=a,X=n,Z===null?(Fl=null,Q=0,Kr(),Hl):0}function ku(){for(;Z!==null&&!be();)Au(Z)}function Au(e){var t=Ec(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=uc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:So(t);default:Fc(n,t),t=Z=ri(t,Vl),t=Ec(n,t,Vl)}e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function Mu(e,t,n,r){Ri=Li=null,So(t),Ca=null,wa=0;var i=t.return;try{if(Ys(e,i,t,n,Q)){Hl=1,Ws(e,ui(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;Hl=1,Ws(e,ui(n,e.current)),Z=null;return}t.flags&32768?(J||r===1?e=!0:zl||Q&536870912?e=!1:(Rl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ja.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pu(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){Pu(t,Rl);return}e=t.return;var n=Nc(t.alternate,t,Vl);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Hl===0&&(Hl=5)}function Pu(e,t){do{var n=Pc(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);Hl=6,Z=null}function Fu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Bu();while(nu!==0);if(X&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Gr,qe(e,n,o,s,c,l),e===Fl&&(Z=Fl=null,Q=0),iu=t,ru=e,au=n,ou=o,su=a,cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(Ee,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=A.T,A.T=null,a=j.p,j.p=2,s=X,X|=4;try{el(e,t,n)}finally{X=s,j.p=a,A.T=r}}nu=1,Iu(),Lu(),Ru()}}function Iu(){if(nu===1){nu=0;var e=ru,t=iu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=X;X|=4;try{pl(t,e);var a=zd,o=yr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&vr(s.ownerDocument.documentElement,s)){if(c!==null&&br(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=_r(s,h),v=_r(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{X=i,j.p=r,A.T=n}}e.current=t,nu=2}}function Lu(){if(nu===2){nu=0;var e=ru,t=iu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=X;X|=4;try{tl(e,t.alternate,t)}finally{X=i,j.p=r,A.T=n}}nu=3}}function Ru(){if(nu===4||nu===3){nu=0,xe();var e=ru,t=iu,n=au,r=cu;t.subtreeFlags&10256||t.flags&10256?nu=5:(nu=0,iu=ru=null,zu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(tu=null),Qe(n),t=t.stateNode,Me&&typeof Me.onCommitFiberRoot==`function`)try{Me.onCommitFiberRoot(je,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=A.T,i=j.p,j.p=2,A.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{A.T=t,j.p=i}}au&3&&Bu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===uu?lu++:(lu=0,uu=e):lu=0,rd(0,!1)}}function zu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ea(t)))}function Bu(){return Iu(),Lu(),Ru(),Vu()}function Vu(){if(nu!==5)return!1;var e=ru,t=ou;ou=0;var n=Qe(au),r=A.T,a=j.p;try{j.p=32>n?32:n,A.T=null,n=su,su=null;var o=ru,s=au;if(nu=0,iu=ru=null,au=0,X&6)throw Error(i(331));var c=X;if(X|=4,Al(o.current),Sl(o,o.current,s,n),X=c,rd(0,!1),Me&&typeof Me.onPostCommitFiberRoot==`function`)try{Me.onPostCommitFiberRoot(je,o)}catch{}return!0}finally{j.p=a,A.T=r,zu(e,t)}}function Hu(e,t,n){t=ui(n,t),t=Ks(e.stateNode,t,2),e=Fa(e,t,2),e!==null&&(Ke(e,2),nd(e))}function Uu(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(tu===null||!tu.has(r))){e=ui(n,e),n=qs(2),r=Fa(t,n,2),r!==null&&(Js(n,r,t,e),Ke(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Bl=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fl===e&&(Q&n)===n&&(Hl===4||Hl===3&&(Q&62914560)===Q&&300>Se()-Zl?!(X&2)&&bu(e,0):Gl|=n,ql===Q&&(ql=0)),nd(e)}function Ku(e,t){t===0&&(t=We()),e=Yr(e,t),e!==null&&(Ke(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return ve(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Pe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Q,a=He(r,r===Fl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ue(r,a)||(n=!0,cd(r,a));r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=Se(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}nu!==0&&nu!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Pe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=B(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Fl,n=Q,n=He(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Il===2||Il===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ye(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ue(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ye(r),Qe(n)){case 2:case 8:n=Te;break;case 32:n=Ee;break;case 268435456:n=Oe;break;default:n=Ee}return r=sd.bind(null,e),n=ve(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ye(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(nu!==0&&nu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var r=Q;return r=He(e,e===Fl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mu(e,r,t),od(e,Se()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Bu())return null;mu(e,t,!0)}function ld(){Yd(function(){X&6?ve(we,id):ad()})}function ud(){if(td===0){var e=ra;e===0&&(e=Re,Re<<=1,!(Re&261888)&&(Re=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Kt(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[nt]||null).action),o=r.submitter;o&&(t=(t=o[nt]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new pn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);vs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),vs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Br.length;md++){var hd=Br[md];Vr(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}Vr(Mr,`onAnimationEnd`),Vr(Nr,`onAnimationIteration`),Vr(Pr,`onAnimationStart`),Vr(`dblclick`,`onDoubleClick`),Vr(`focusin`,`onFocus`),Vr(`focusout`,`onBlur`),Vr(Fr,`onTransitionRun`),Vr(Ir,`onTransitionStart`),Vr(Lr,`onTransitionCancel`),Vr(Rr,`onTransitionEnd`),_t(`onMouseEnter`,[`mouseout`,`mouseover`]),_t(`onMouseLeave`,[`mouseout`,`mouseover`]),_t(`onPointerEnter`,[`pointerout`,`pointerover`]),_t(`onPointerLeave`,[`pointerout`,`pointerover`]),gt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),gt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),gt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),gt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),gt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),gt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Hr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Hr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[it];n===void 0&&(n=t[it]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,ht.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!nn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ut(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}$t(function(){var r=a,i=Yt(n),s=[];a:{var c=zr.get(e);if(c!==void 0){var l=pn,u=e;switch(e){case`keypress`:if(ln(n)===0)break a;case`keydown`:case`keyup`:l=jn;break;case`focusin`:u=`focus`,l=wn;break;case`focusout`:u=`blur`,l=wn;break;case`beforeblur`:case`afterblur`:l=wn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Sn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Cn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Nn;break;case Mr:case Nr:case Pr:l=Tn;break;case Rr:l=Pn;break;case`scroll`:case`scrollend`:l=hn;break;case`wheel`:l=Fn;break;case`copy`:case`cut`:case`paste`:l=En;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Mn;break;case`toggle`:case`beforetoggle`:l=In}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=en(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Jt&&(u=n.relatedTarget||n.fromElement)&&(ut(u)||u[rt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ut(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Sn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Mn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:ft(l),h=u==null?c:ft(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ut(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?ft(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=nr;else if(Xn(c))if(rr)v=fr;else{v=ur;var y=lr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Ut(r.elementType)&&(v=nr):v=dr;if(v&&=v(e,r)){Zn(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ft(c,`number`,c.value)}switch(y=r?ft(r):window,e){case`focusin`:(Xn(y)||y.contentEditable===`true`)&&(Sr=y,Cr=r,wr=null);break;case`focusout`:wr=Cr=Sr=null;break;case`mousedown`:Tr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Tr=!1,Er(s,n,i);break;case`selectionchange`:if(xr)break;case`keydown`:case`keyup`:Er(s,n,i)}var b;if(Rn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Kn?Wn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Vn&&n.locale!==`ko`&&(Kn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Kn&&(b=cn()):(an=i,on=`value`in an?an.value:an.textContent,Kn=!0)),y=Td(r,x),0<y.length&&(x=new Dn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Gn(n),b!==null&&(x.data=b)))),(b=Bn?qn(e,n):Jn(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new Dn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),pd(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=en(e,n),i!=null&&r.unshift(wd(e,i,a)),i=en(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=en(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=en(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&zt(e,``+r);break;case`className`:Ct(e,`class`,r);break;case`tabIndex`:Ct(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ct(e,n,r);break;case`style`:Ht(e,r,o);break;case`data`:if(t!==`object`){Ct(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=qt);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Kt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),St(e,`popover`,r);break;case`xlinkActuate`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:St(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Wt.get(n)||n,St(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Ht(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&zt(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=qt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!H.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[nt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):St(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Pt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&It(e,!!r,n,!0):It(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}Rt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(Ut(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Nt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?It(e,!!n,n?[]:``,!1):It(e,!!n,t,!0)):It(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}Lt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(Ut(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),lt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);lt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=j.d;j.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=vu();return e||t}function yf(e){var t=dt(e);t!==null&&t.tag===5&&t.type===`form`?bs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Mt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),mt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Mt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Mt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Mt(n.imageSizes)+`"]`)):i+=`[href="`+Mt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=p({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),mt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Mt(r)+`"][href="`+Mt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=p({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),mt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=pt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=p({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);mt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=pt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),mt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=pt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),mt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=L.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=pt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=pt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=pt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Mt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),mt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Mt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Mt(n.href)+`"]`);if(r)return t.instance=r,mt(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),mt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,mt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),mt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,mt(a),a):(r=n,(a=mf.get(o))&&(r=p({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),mt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ct]||a[V]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,mt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),mt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:x,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ge(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ge(0),this.hiddenUpdates=Ge(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ei(3,null,null,t),e.current=a,a.stateNode=e,t=$i(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ma(a),e}function tp(e){return e?(e=Qr,e):Qr}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Pa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Fa(e,r,t),n!==null&&(pu(n,e,t),Ia(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Yr(e,67108864);t!==null&&pu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=du();t=Ze(t);var n=Yr(e,t);n!==null&&pu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=2,up(e,t,n,r)}finally{j.p=a,A.T=i}}function lp(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=8,up(e,t,n,r)}finally{j.p=a,A.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ve(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Pe(o);s.entanglements[1]|=c,o&=~c}nd(a),!(X&6)&&($l=Se()+500,rd(0,!1))}}break;case 31:case 13:s=Yr(a,2),s!==null&&pu(s,a,2),vu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=Yt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=ut(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ce()){case we:return 2;case Te:return 8;case Ee:case De:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=ut(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,et(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,et(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jt=r,n.target.dispatchEvent(r),Jt=null}else return t=dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=dt(n);a!==null&&(e.splice(t,3),t-=3,vs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[nt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[nt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,du(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),vu(),t[rt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=$e();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:A,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{je=zp.inject(Rp),Me=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Vs,s=Hs,c=Us;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[rt]=t.current,xd(e),new Fp(t)}})),Cn=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Sn()}))(),wn=o((e=>{var t=u().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),Tn=o(((e,t)=>{t.exports=wn()}));function En(e,t){return new Proxy({},{get(n,r){if(typeof r==`string`)return En(e,[...t,r]);if(r===Be){if(t.length<1){let n=[e,...t].join(`.`);throw Error(`API path is expected to be of the form \`${e}.childComponent.functionName\`. Found: \`${n}\``)}return`_reference/childComponent/`+t.join(`/`)}else return}})}var Dn=()=>En(`components`,[]),On=Tn(),G=Ke;Dn();var kn=`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,An=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),K=o(((e,t)=>{t.exports=An()}))(),jn={link1Name:``,link1Url:``,link2Name:``,link2Url:``};function Mn(e=``){return String(e).split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`S`}function Nn(){let e=globalThis.crypto;if(typeof e?.randomUUID==`function`)try{return e.randomUUID()}catch{}if(typeof e?.getRandomValues==`function`)try{let t=e.getRandomValues(new Uint8Array(16));return Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}catch{}return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`}function Pn(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`short`,timeStyle:`short`}).format(new Date(e)):``}function Fn(e,t){let n=new Date(e),r=new Date(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate()}function In({sessionToken:e,requestCount:t,onExport:n,onClose:r}){let[i,a]=(0,U.useState)(null),[o,s]=(0,U.useState)(()=>window.matchMedia(`(max-width: 767px)`).matches),[c,l]=(0,U.useState)(``),[u,d]=(0,U.useState)(`all`),[f,p]=(0,U.useState)(``),[m,h]=(0,U.useState)(!1),[g,_]=(0,U.useState)(!1),[v,y]=(0,U.useState)(!1),[b,x]=(0,U.useState)(``),[S,C]=(0,U.useState)(!1),[w,T]=(0,U.useState)(jn),[ee,E]=(0,U.useState)(!1),D=(0,U.useRef)(null),O=(0,U.useRef)(null),te=(0,U.useRef)(!1),ne=(0,U.useRef)(!0),re=(0,U.useRef)(null),k=(0,U.useRef)(0),A=ln(G.support.listConversations,e?{sessionToken:e}:`skip`),j=ln(G.support.getSettings),ie=W(G.support.migrateLegacyRequests),ae=W(G.support.sendMessage),M=W(G.support.markRead),oe=W(G.support.setStatus),N=W(G.support.saveSettings),P=W(G.support.clearAll);(0,U.useEffect)(()=>{e&&ie({sessionToken:e}).catch(e=>{x(e.message||`Unable to prepare existing requests.`),C(!0)})},[e,t,ie]),(0,U.useEffect)(()=>{if(!b)return;let e=window.setTimeout(()=>x(``),4500);return()=>window.clearTimeout(e)},[b]);let F=ee?w:{...jn,...j},I=(0,U.useMemo)(()=>(A??[]).filter(e=>{let t=c.trim().toLowerCase(),n=!t||[e.studentName,e.studentId,e.email,e.visitorType,e.visitorStudentName].some(e=>String(e??``).toLowerCase().includes(t)),r=e.messages?.at(-1),i=e.source===`Visitor Chat`||!!e.visitorSessionHash,a=u===`all`||u===`students`&&!i||u===`visitors`&&i||u===`unread`&&e.unreadCount>0||u===`replied`&&e.messages?.some(e=>e.senderRole===`admin`)||u===`resolved`&&e.status===`resolved`;return n&&a&&r}),[A,c,u]),L=o?null:(A??[]).find(e=>e._id===i)??I[0]??null,se=L?._id,ce=L?.messages??[];(0,U.useEffect)(()=>{let e=D.current;if(!e||!se)return;let t=re.current!==se,n=k.current!==ce.length;(t||n&&ne.current)&&(e.scrollTo({top:e.scrollHeight,behavior:`smooth`}),ne.current=!0),re.current=se,k.current=ce.length},[se,ce.length]),(0,U.useEffect)(()=>{e&&L?._id&&M({sessionToken:e,conversationId:L._id}).catch(()=>{})},[e,L?._id,M]);let le=e=>{a(e._id),s(!1),re.current=null,x(``),C(!1)},ue=async()=>{let t=f.trim();if(!(!t||!L||te.current)){te.current=!0,ne.current=!0,h(!0),x(``),C(!1);try{await ae({sessionToken:e,conversationId:L._id,content:t,clientMessageId:Nn()}),p(``),O.current&&(O.current.style.height=``)}catch(e){x(e.message||`Message could not be sent. Please try again.`),C(!0)}finally{te.current=!1,h(!1)}}},de=e=>{p(e.target.value),e.target.style.height=`auto`,e.target.style.height=`${Math.min(e.target.scrollHeight,140)}px`},R=e=>{let t=e.currentTarget;ne.current=t.scrollHeight-t.scrollTop-t.clientHeight<80},fe=async t=>{t.preventDefault(),_(!0),x(``);try{let t=await N({sessionToken:e,...F});t.settings&&(T(t.settings),E(!0)),x(t.skippedNames?.length?`Saved complete links. Add a URL for: ${t.skippedNames.join(`, `)}.`:`Support links saved.`),C(!1)}catch(e){x(e.message||`Support links could not be saved.`),C(!0)}finally{_(!1)}},pe=async()=>{if(!L)return;let t=L.status===`resolved`?`open`:`resolved`;try{await oe({sessionToken:e,conversationId:L._id,status:t})}catch(e){x(e.message||`Conversation status could not be updated.`),C(!0)}},me=async()=>{if(!v){y(!0);try{await P({sessionToken:e}),a(null),x(`Requests and chat history were archived and cleared.`),C(!1)}catch(e){x(e.message||`Messages could not be cleared.`),C(!0)}finally{y(!1)}}};return(0,K.jsxs)(`div`,{className:`support-modal`,children:[(0,K.jsxs)(`header`,{className:`support-titlebar`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{className:`support-eyebrow`,children:`STUDENT SERVICES`}),(0,K.jsx)(`h2`,{id:`admin-quick-actions-title`,children:`Student Support`}),(0,K.jsx)(`p`,{children:`Requests, conversations, and support settings in one place.`})]}),(0,K.jsxs)(`div`,{className:`support-toolbar`,children:[(0,K.jsxs)(`span`,{className:`support-total`,children:[(0,K.jsx)(`b`,{children:t}),` total requests`]}),(0,K.jsx)(`button`,{type:`button`,className:`support-secondary-button`,onClick:n,disabled:!t,children:`Export responses`}),(0,K.jsx)(`button`,{type:`button`,className:`support-danger-button`,onClick:()=>{window.confirm(`Move ${t} student requests and their chat history to the archive, then remove them from the active inbox? You can restore archived records later.`)&&me()},disabled:!t||v,children:v?`Archiving…`:`Clear all`}),(0,K.jsx)(`button`,{type:`button`,className:`admin-modal-close support-close`,"aria-label":`Close Student Support`,onClick:r,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})]}),(0,K.jsxs)(`details`,{className:`support-settings`,children:[(0,K.jsxs)(`summary`,{children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`settings`}),` Support Links Configuration `,(0,K.jsx)(`span`,{className:`support-settings-hint`,children:`Student portal links`})]}),(0,K.jsxs)(`form`,{onSubmit:fe,className:`support-settings-grid`,children:[[1,2].map(e=>(0,K.jsxs)(`fieldset`,{children:[(0,K.jsxs)(`legend`,{children:[`Support Link `,e]}),(0,K.jsxs)(`label`,{children:[`Link name`,(0,K.jsx)(`input`,{value:F[`link${e}Name`],maxLength:80,onChange:t=>{E(!0),T(n=>({...n,[`link${e}Name`]:t.target.value}))},placeholder:e===1?`Facebook Messenger`:`Student Support Portal`})]}),(0,K.jsxs)(`label`,{children:[`Support URL`,(0,K.jsx)(`input`,{type:`url`,value:F[`link${e}Url`],onChange:t=>{E(!0),T(n=>({...n,[`link${e}Url`]:t.target.value}))},placeholder:`https://example.com/support`})]})]},e)),(0,K.jsx)(`button`,{type:`submit`,className:`support-primary-button`,disabled:g,children:g?`Saving links…`:`Save Support Links`})]})]}),b&&(0,K.jsx)(`div`,{className:`support-notice ${S?`support-notice--error`:``}`,role:S?`alert`:`status`,children:b}),!e&&(0,K.jsx)(`div`,{className:`support-notice support-notice--error`,children:`Your administrator session needs to be refreshed. Sign out and sign back in to manage support.`}),(0,K.jsxs)(`div`,{className:`support-chat ${L&&!o?`support-chat--selected`:``}`,children:[(0,K.jsxs)(`aside`,{className:`support-inbox`,children:[(0,K.jsxs)(`div`,{className:`support-inbox-heading`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`h3`,{children:`Conversations`}),(0,K.jsxs)(`span`,{children:[A?.length??`…`,` conversations`]})]}),(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`forum`})]}),(0,K.jsxs)(`label`,{className:`support-search`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,K.jsx)(`input`,{"aria-label":`Search conversations`,value:c,onChange:e=>l(e.target.value),placeholder:`Search name, ID or email`})]}),(0,K.jsx)(`div`,{className:`support-filters`,role:`tablist`,"aria-label":`Conversation filters`,children:[[`all`,`All`],[`students`,`Student Requests`],[`visitors`,`Visitor Chats`],[`unread`,`Unread`],[`replied`,`Replied`],[`resolved`,`Resolved`]].map(([e,t])=>(0,K.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":u===e,onClick:()=>d(e),children:t},e))}),(0,K.jsxs)(`div`,{className:`support-conversation-list`,children:[A===void 0&&(0,K.jsx)(`div`,{className:`support-list-skeleton`,"aria-label":`Loading conversations`,children:[1,2,3,4].map(e=>(0,K.jsxs)(`div`,{className:`support-skeleton-row`,children:[(0,K.jsx)(`i`,{}),(0,K.jsxs)(`span`,{children:[(0,K.jsx)(`b`,{}),(0,K.jsx)(`b`,{})]})]},e))}),A?.length===0&&(0,K.jsx)(`div`,{className:`support-list-state`,children:`No student requests yet.`}),I.map(e=>{let t=e.messages.at(-1),n=e.source===`Visitor Chat`||!!e.visitorSessionHash,r=n?`${e.visitorType||`Visitor`} · Visitor${e.visitorStudentName?` · Student: ${e.visitorStudentName}`:``}${e.studentId?` · ID: ${e.studentId}`:``}`:`${e.studentPortal?`Student Portal · `:``}${e.studentId||e.email}${e.tesAwardNumber?` · TES ${e.tesAwardNumber}`:``}`;return(0,K.jsxs)(`button`,{type:`button`,className:`support-conversation ${L?._id===e._id?`is-active`:``}`,onClick:()=>le(e),children:[(0,K.jsx)(`span`,{className:`support-avatar`,children:Mn(e.studentName)}),(0,K.jsxs)(`span`,{className:`support-conversation-copy`,children:[(0,K.jsxs)(`strong`,{children:[e.studentName||`Student`,n&&(0,K.jsx)(`span`,{className:`support-visitor-badge`,children:`Visitor`}),e.studentPortal&&(0,K.jsx)(`span`,{className:`support-portal-badge`,children:`Student Portal`})]}),(0,K.jsx)(`small`,{children:r}),(0,K.jsx)(`span`,{children:t.content})]}),(0,K.jsxs)(`span`,{className:`support-conversation-meta`,children:[(0,K.jsx)(`time`,{children:Pn(t.createdAt)}),e.unreadCount>0&&(0,K.jsx)(`i`,{"aria-label":`${e.unreadCount} unread messages`,children:e.unreadCount}),(0,K.jsx)(`small`,{className:e.status===`resolved`?`is-resolved`:``,children:e.status})]})]},e._id)}),A?.length>0&&I.length===0&&(0,K.jsx)(`div`,{className:`support-list-state`,children:`No conversations match those filters.`})]})]}),(0,K.jsx)(`section`,{className:`support-thread`,"aria-label":`Student conversation`,children:L?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`header`,{className:`support-thread-header`,children:[(0,K.jsx)(`button`,{type:`button`,className:`support-back-button`,onClick:()=>s(!0),children:`← Back`}),(0,K.jsx)(`span`,{className:`support-avatar support-avatar--large`,children:Mn(L.studentName)}),(0,K.jsxs)(`div`,{className:`support-student-id`,children:[(0,K.jsxs)(`h3`,{children:[L.studentName||`Student`,(L.source===`Visitor Chat`||L.visitorSessionHash)&&(0,K.jsxs)(`span`,{className:`support-visitor-badge`,children:[`Visitor · `,L.visitorType||`Other Visitor`]}),L.studentPortal&&(0,K.jsx)(`span`,{className:`support-portal-badge`,children:`Student Portal`})]}),(0,K.jsx)(`span`,{children:L.source===`Visitor Chat`||L.visitorSessionHash?`${L.studentId?`School ID: ${L.studentId} · `:``}${L.visitorStudentName?`Student: ${L.visitorStudentName} · `:``}Visitor chat`:`${L.studentId||`No student ID`} · ${L.email} · ${L.source||`Student Portal`}${L.tesAwardNumber?` · TES Award No. ${L.tesAwardNumber}`:``}`})]}),(0,K.jsx)(`span`,{className:`support-status-pill ${L.status===`resolved`?`is-resolved`:``}`,children:L.status}),(0,K.jsx)(`button`,{type:`button`,className:`support-resolve-button`,onClick:pe,children:L.status===`resolved`?`Reopen`:`Mark resolved`})]}),(0,K.jsxs)(`div`,{className:`support-message-history`,ref:D,onScroll:R,children:[ce.length===0&&(0,K.jsx)(`div`,{className:`support-list-state`,children:`No messages in this conversation yet.`}),ce.map((e,t)=>{let n=ce[t-1],r=!n||!Fn(n.createdAt,e.createdAt),i=e.senderRole===`admin`;return(0,K.jsxs)(`div`,{children:[r&&(0,K.jsx)(`div`,{className:`support-date-divider`,children:(0,K.jsx)(`span`,{children:new Intl.DateTimeFormat(`en-PH`,{dateStyle:`full`}).format(new Date(e.createdAt))})}),(0,K.jsxs)(`div`,{className:`support-message-row ${i?`is-own`:``}`,children:[(0,K.jsx)(`span`,{className:`support-avatar support-avatar--message`,children:i?`A`:Mn(L.studentName)}),(0,K.jsxs)(`div`,{className:`support-message-body`,children:[(0,K.jsx)(`div`,{className:`support-bubble ${i?`is-own`:``}`,children:e.content}),(0,K.jsx)(`time`,{children:Pn(e.createdAt)})]})]})]},e._id)})]}),(0,K.jsxs)(`form`,{className:`support-composer`,onSubmit:e=>{e.preventDefault(),ue()},children:[(0,K.jsxs)(`div`,{className:`support-composer-input`,children:[(0,K.jsx)(`textarea`,{ref:O,value:f,onChange:de,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),ue())},maxLength:2e3,placeholder:`Write a helpful reply…`,"aria-label":`Write a message`}),(0,K.jsx)(`button`,{className:`support-send-button`,type:`submit`,"aria-label":m?`Sending message`:`Send message`,disabled:!f.trim()||m,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:m?`hourglass_top`:`send`})})]}),(0,K.jsxs)(`div`,{className:`support-composer-meta`,children:[(0,K.jsxs)(`span`,{children:[f.length,`/2000 · Enter to send, Shift + Enter for a new line`]}),(0,K.jsx)(`span`,{children:m?`Sending…`:`Messages are saved to this conversation`})]})]})]}):(0,K.jsxs)(`div`,{className:`support-empty-thread`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`forum`}),(0,K.jsx)(`h3`,{children:`Select a conversation`}),(0,K.jsx)(`p`,{children:`Choose a student request to review its history and reply.`})]})})]})]})}var Ln=5,Rn=5,zn=5,Bn=7,Vn=5,Hn=5,Un=5,Wn=10,Gn=10,Kn=5,qn=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``),Jn=[`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`];function Yn(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}var Xn=[`No.`,`TES Award Number`,`Student ID`,`Last Name`,`First Name`,`MI.`,`batch No.`,`Status`,`Semester`,`School Year`];function Zn(e){let t=(0,On.c)(4),{status:n,tone:r}=e,i=`admin-status admin-status--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,K.jsx)(`span`,{className:`admin-status__dot`}),t[0]=a):a=t[0];let o=n||`—`,s;return t[1]!==i||t[2]!==o?(s=(0,K.jsxs)(`span`,{className:i,children:[a,o]}),t[1]=i,t[2]=o,t[3]=s):s=t[3],s}function Qn(e=``){let t=e.toLowerCase();return t.includes(`grantee`)?`grantee`:t.includes(`applicant`)?`applicant`:t.includes(`complete`)||t.includes(`resolved`)||t.includes(`valid`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function $n(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function er(e){return`"${String(e??``).replaceAll(`"`,`""`)}"`}function tr(e,t){if(!Array.isArray(t)||t.length<2)throw Error(`No applicant rows are available to download.`);let n=t.map(e=>e.map(er).join(`,`)).join(`
`),r=new Blob([n],{type:`text/csv;charset=utf-8`});if(!r.size)throw Error(`The applicant CSV file could not be generated.`);let i=URL.createObjectURL(r),a=document.createElement(`a`);return a.href=i,a.download=e,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(i),!0}function nr(){let e=[Xn,[`1`,`TES-2024-0001`,`2024-UNI-0001`,`Dela Cruz`,`Juan`,`P`,`2024-01`,`Pending`,`1st Semester`,`2024-2025`]].map(e=>e.map(e=>`"${e.replaceAll(`"`,`""`)}"`).join(`,`)).join(`
`),t=new Blob([e],{type:`text/csv;charset=utf-8`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`tdp-grantee-template.csv`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function rr(e,t){return String(e??``).trim().replace(/[^a-z0-9-]+/gi,`-`).replace(/^-+|-+$/g,``)||t}function ir(e,t){for(let n of[`lastName`,`firstName`,`middleInitial`,`studentId`]){let r=String(e?.[n]??``).localeCompare(String(t?.[n]??``),void 0,{numeric:!0,sensitivity:`base`});if(r!==0)return r}return 0}function ar(e){return String(e?.course??e?.program??e?.degreeProgram??``).trim()}function or(e){let t=String(e?.applicationYear??``).trim();if(t)return t;let n=e?.submittedAt;return n?String(new Date(n).getFullYear()):``}function sr(e,t=``){return[`Application Year,Course,Student ID,LRN,PhilSys ID Number,4Ps ID Number,Last Name,First Name,Ext Name,Middle Name,Gender,Sex Code,Birth Date,Year,Year Level Code,Father Last Name,Father First Name,Father Middle Name,Mother Last Name,Mother First Name,Mother Middle Name,Address,Street / Barangay,City / Municipality,Province,Region,Zip Code,PWD ID,Has Disability,Disability Type,Solo Parent Dependent Code,First Generation Code,Indigenous Peoples Member,Indigenous Group,Applicant Classification,PWD ID PDF,4Ps ID PDF,COR / Study Load PDF,Mobile No.,Email Address,Status,Submitted At`.split(`,`),...e.map(e=>[or(e),ar(e)||t,e.studentId??``,e.lrn??``,e.philSysIdNumber??``,e.fourPsIdNumber??``,e.lastName??``,e.firstName??``,e.extensionName??``,e.middleName??``,e.gender??``,e.sexCode??``,e.birthDate??``,e.year??``,e.yearLevelCode??``,e.fatherLastName??``,e.fatherFirstName??``,e.fatherMiddleName??``,e.motherLastName??``,e.motherFirstName??``,e.motherMiddleName??``,e.address??``,e.streetBarangay??``,e.cityMunicipality??``,e.province??``,e.region??``,e.zipCode??``,e.pwdId??``,e.hasDisability===void 0?``:e.hasDisability?`Yes`:`No`,e.disabilityType??``,e.soloParentDependent??``,e.firstGeneration??``,e.isIndigenous===void 0?``:e.isIndigenous?`Yes`:`No`,e.indigenousGroup??``,e.applicantClassification??``,e.pwdIdFileName??``,e.fourPsFileName??``,e.corFileName??``,e.mobileNumber??``,e.emailAddress??``,e.status??``,$n(e.submittedAt)])]}function cr(e,t){if(t<=5)return Array.from({length:t},(e,t)=>t+1);let n=[1],r=Math.max(2,e-1),i=Math.min(t-1,e+1);r>2&&n.push(`left-ellipsis`);for(let e=r;e<=i;e+=1)n.push(e);return i<t-1&&n.push(`right-ellipsis`),n.push(t),n}function lr(e,t){if(e===`application/pdf`)return`.pdf`;if(e===`image/png`)return`.png`;if(e===`image/jpeg`)return`.jpg`;try{let e=new URL(t).pathname.match(/\.(pdf|png|jpe?g)$/i);return e?`.${e[1].toLowerCase().replace(`jpeg`,`jpg`)}`:``}catch{return``}}async function ur(e,t){let n=`${qn}/google-drive/file?url=${encodeURIComponent(e.frontIdUrl)}`,r=await fetch(n);if(!r.ok)throw Error(`Unable to download School ID file for ${e.studentId||`student`}.`);let i=await r.blob(),a=new Uint8Array(await i.arrayBuffer()),o=rr(e.studentId,`student-${t+1}`),s=rr(e.lastName,`no-last-name`),c=rr(e.firstName,`no-first-name`),l=rr(e.middleInitial,`no-middle-name`),u=rr(e.batchId,`no-batch`),d=lr(i.type,e.frontIdUrl);return{bytes:a,name:`${s}-${c}-${l}-student-id-${o}-batch-${u}-${t+1}${d}`}}function dr(){return Array.from({length:256},(e,t)=>{let n=t;for(let e=0;e<8;e+=1)n=n&1?3988292384^n>>>1:n>>>1;return n>>>0})}var fr=dr(),pr=new TextEncoder;function mr(e){let t=4294967295;for(let n of e)t=fr[(t^n)&255]^t>>>8;return(t^4294967295)>>>0}function hr(){let e=new Date,t=e.getHours()<<11|e.getMinutes()<<5|Math.floor(e.getSeconds()/2);return{date:e.getFullYear()-1980<<9|e.getMonth()+1<<5|e.getDate(),time:t}}function gr(e,t,n,r){if(n===2){e.setUint16(t,r,!0);return}e.setUint32(t,r>>>0,!0)}function _r(e){let{date:t,time:n}=hr(),r=[],i=[],a=0;e.forEach(e=>{let o=pr.encode(e.name),s=mr(e.bytes),c=new Uint8Array(30+o.length),l=new DataView(c.buffer);gr(l,0,4,67324752),gr(l,4,2,20),gr(l,8,2,0),gr(l,10,2,n),gr(l,12,2,t),gr(l,14,4,s),gr(l,18,4,e.bytes.length),gr(l,22,4,e.bytes.length),gr(l,26,2,o.length),c.set(o,30),r.push(c,e.bytes);let u=new Uint8Array(46+o.length),d=new DataView(u.buffer);gr(d,0,4,33639248),gr(d,4,2,20),gr(d,6,2,20),gr(d,10,2,0),gr(d,12,2,n),gr(d,14,2,t),gr(d,16,4,s),gr(d,20,4,e.bytes.length),gr(d,24,4,e.bytes.length),gr(d,28,2,o.length),gr(d,42,4,a),u.set(o,46),i.push(u),a+=c.length+e.bytes.length});let o=i.reduce((e,t)=>e+t.length,0),s=new Uint8Array(22),c=new DataView(s.buffer);return gr(c,0,4,101010256),gr(c,8,2,e.length),gr(c,10,2,e.length),gr(c,12,4,o),gr(c,16,4,a),new Blob([...r,...i,s],{type:`application/zip`})}function vr(e){return e.replaceAll(`\xA0`,` `).trim()}function yr(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a+=1){let o=e[a],s=e[a+1];o===`"`&&i&&s===`"`?(r+=`"`,a+=1):o===`"`?i=!i:o===`,`&&!i?(n.push(vr(r)),r=``):(o===`
`||o===`\r`)&&!i?(o===`\r`&&s===`
`&&(a+=1),n.push(vr(r)),n.some(Boolean)&&t.push(n),n=[],r=``):r+=o}return n.push(vr(r)),n.some(Boolean)&&t.push(n),t}function br(e){return yr(e).filter(e=>e.some(Boolean)).filter(e=>!e.join(` `).toLowerCase().includes(`tes award number`)).map(e=>({no:e[0]??``,tesAwardNumber:e[1]??``,studentId:e[2]??``,lastName:e[3]??``,firstName:e[4]??``,middleInitial:e[5]??``,batchId:e[6]??``,status:e[7]??``,semester:e[8]??``,schoolYear:e[9]??``})).filter(e=>e.no&&e.tesAwardNumber&&e.studentId&&e.lastName&&e.firstName&&e.batchId&&e.status&&e.semester&&e.schoolYear)}function xr({adminSession:e,onLogout:t}){let[n,r]=(0,U.useState)(0),[i,a]=(0,U.useState)(!1),[o,s]=(0,U.useState)(!1),[c,l]=(0,U.useState)(``),[u,d]=(0,U.useState)(``),[f,p]=(0,U.useState)(1),[m,h]=(0,U.useState)(null),[g,_]=(0,U.useState)(``),[v,y]=(0,U.useState)(!1),[b,x]=(0,U.useState)(!1),[S,C]=(0,U.useState)(null),[w,T]=(0,U.useState)(null),[ee,E]=(0,U.useState)({email:``,phoneNumber:``}),[D,O]=(0,U.useState)(``),[te,ne]=(0,U.useState)(!1),[re,k]=(0,U.useState)(!1),[A,j]=(0,U.useState)(1),[ie,ae]=(0,U.useState)(``),[M,oe]=(0,U.useState)(!1),[N,P]=(0,U.useState)(!1),[F,I]=(0,U.useState)(!1),[L,se]=(0,U.useState)(``),[ce,le]=(0,U.useState)(``),[ue,de]=(0,U.useState)(``),[R,fe]=(0,U.useState)(``),[pe,me]=(0,U.useState)(1),[z,he]=(0,U.useState)(null),[ge,_e]=(0,U.useState)(`all`),[ve,ye]=(0,U.useState)([]),[be,xe]=(0,U.useState)(``),[Se,Ce]=(0,U.useState)(``),[we,Te]=(0,U.useState)(!1),[Ee,De]=(0,U.useState)(``),[Oe,ke]=(0,U.useState)(!1),[Ae,je]=(0,U.useState)(!1),[Me,Ne]=(0,U.useState)(``),[Pe,Fe]=(0,U.useState)(``),[Ie,Le]=(0,U.useState)(``),[Re,ze]=(0,U.useState)(!1),[Be,Ve]=(0,U.useState)(!1),[He,Ue]=(0,U.useState)(``),[B,We]=(0,U.useState)(null),[Ge,Ke]=(0,U.useState)(!1),[qe,Je]=(0,U.useState)(!1),[Ye,Xe]=(0,U.useState)(!1),[Ze,Qe]=(0,U.useState)(0),[$e,et]=(0,U.useState)(null),[tt,V]=(0,U.useState)(null),[nt,rt]=(0,U.useState)(null),[it,at]=(0,U.useState)(``),[ot,st]=(0,U.useState)(``),[ct,lt]=(0,U.useState)(!1),[ut,dt]=(0,U.useState)(!1),[ft,pt]=(0,U.useState)(!1),[mt,ht]=(0,U.useState)(1),[H,gt]=(0,U.useState)([]),[_t,vt]=(0,U.useState)(null),[yt,bt]=(0,U.useState)(null),[xt,St]=(0,U.useState)(``),[Ct,wt]=(0,U.useState)(!1),[Tt,Et]=(0,U.useState)(``),[Dt,Ot]=(0,U.useState)(``),[kt,At]=(0,U.useState)(``),[jt,Mt]=(0,U.useState)(``),[Nt,Pt]=(0,U.useState)(0),[Ft,It]=(0,U.useState)(1),[Lt,Rt]=(0,U.useState)(1),[zt,Bt]=(0,U.useState)(1),[Vt,Ht]=(0,U.useState)(1),[Ut,Wt]=(0,U.useState)(``),[Gt,Kt]=(0,U.useState)(!1),[qt,Jt]=(0,U.useState)(!1),[Yt,Xt]=(0,U.useState)(!1),[Zt,Qt]=(0,U.useState)(0),[$t,en]=(0,U.useState)(null),[tn,nn]=(0,U.useState)(1),[rn,an]=(0,U.useState)(1),on=ln(G.quickActions.list,e?.sessionToken?{sessionToken:e.sessionToken}:`skip`),sn=W(G.support.logout),cn=ln(G.activityLogs.list),dn=ln(G.archive.list,o?{}:`skip`),fn=ln(G.allinfo.list,{refreshVersion:Nt}),pn=ln(G.applicants.list,e?.sessionToken?{sessionToken:e.sessionToken}:`skip`),mn=ln(G.applicantPortal.get),hn=ln(G.adminAuth.listStudentAccounts),gn=W(G.applicantPortal.setReceivingApplicants),_n=W(G.allinfo.bulkCreate),vn=W(G.allinfo.update),yn=W(G.allinfo.deleteMany),bn=W(G.activityLogs.clearAll),xn=W(G.archive.restore),Sn=un(G.archive.remove),Cn=un(G.allinfo.deleteSchoolIdFilesByBatch),wn=un(G.applicants.deleteAllByCourse),Tn=un(G.applicants.exportCourseApplicants),En=W(G.adminAuth.updateStudentAccount),Dn=W(G.adminAuth.deleteStudentAccount),On=i||o||v||b||!!S||!!w||M||N||F||we||!!Ee||Gt||Yt||qt||!!$t||Oe||Ae||Re||!!tt||Be||!!He||!!B||Ge||qe||Ye||!!$e||!!_t,An=async()=>{try{e?.sessionToken&&await sn({sessionToken:e.sessionToken})}catch{}finally{t?.()}},jn=(0,U.useMemo)(()=>fn??[],[fn]),Mn=on??[],Nn=cn??[],Pn=(0,U.useMemo)(()=>dn??[],[dn]),Fn=(0,U.useMemo)(()=>pn??[],[pn]),qn=(0,U.useMemo)(()=>hn??[],[hn]),er=mn?.applicationYear,lr=String(er??new Date().getFullYear()),dr=ln(G.applicants.getCourseCounts,F&&e?.sessionToken?{sessionToken:e.sessionToken,applicationYear:lr}:`skip`),fr=Jn.filter(e=>e.toLowerCase().includes(be.trim().toLowerCase())),pr=dr?ge===`all`?dr.totalCount:ve.reduce((e,t)=>e+(dr.counts?.[t]??0),0):0,mr=(0,U.useMemo)(()=>Array.from(new Set(Fn.map(e=>ar(e)).filter(Boolean))).sort((e,t)=>e.localeCompare(t)),[Fn]),hr=(0,U.useMemo)(()=>Array.from(new Set(Fn.map(e=>or(e)).filter(Boolean))).sort((e,t)=>t.localeCompare(e,void 0,{numeric:!0})),[Fn]),gr=(0,U.useMemo)(()=>Array.from(new Set(Fn.map(e=>String(e.status??``).trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t)),[Fn]),vr=(0,U.useMemo)(()=>{let e=L.trim().toLowerCase();return Fn.filter(t=>{let n=[t.firstName,t.middleName,t.lastName,t.extensionName].filter(Boolean).join(` `),r=[t.studentId,n,t.course,t.year,t.applicationYear,t.emailAddress,t.mobileNumber,t.status].map(e=>String(e??``).toLowerCase()).join(` `);return(!e||r.includes(e))&&(!ce||ar(t)===ce)&&(!ue||or(t)===ue)&&(!R||String(t.status??``).trim()===R)})},[Fn,L,ce,ue,R]),yr=Math.max(1,Math.ceil(vr.length/Gn)),xr=Math.min(pe,yr),Cr=(xr-1)*Gn,wr=vr.slice(Cr,Cr+Gn),Tr=cr(xr,yr),Er=vr.length?Cr+1:0,Dr=Cr+wr.length,Or=(0,U.useMemo)(()=>{let e=new Date().getFullYear(),t=new Set([String(e-1),String(e),String(e+1),String(e+2),String(e+3),String(e+4),String(e+5)]);return er&&t.add(String(er)),Fn.forEach(e=>{let n=or(e);n&&t.add(n)}),Array.from(t).sort()},[Fn,er]),kr=Math.max(1,Math.ceil(Or.length/Kn)),Ar=Math.min(rn,kr),jr=(Ar-1)*Kn,Mr=Or.slice(jr,jr+Kn),Nr=cr(Ar,kr),Pr=Or.length===0?0:jr+1,Fr=jr+Mr.length,Ir=(0,U.useMemo)(()=>Array.from(new Set(jn.map(e=>String(e.batchId??``).trim()).filter(Boolean))).sort(),[jn]),Lr=(0,U.useMemo)(()=>Array.from(new Set(jn.map(e=>String(e.schoolYear??``).trim()).filter(Boolean))).sort((e,t)=>{let n=Number(e.match(/\d{4}/)?.[0]??0);return Number(t.match(/\d{4}/)?.[0]??0)-n||t.localeCompare(e)}),[jn]),Rr=(0,U.useMemo)(()=>Ir.map(e=>{let t=jn.filter(t=>String(t.batchId??``).trim()===e),n=new Set(t.map(e=>String(e.studentId??``).trim().toLowerCase()));return{accountCount:qn.filter(e=>n.has(String(e.schoolId??``).trim().toLowerCase())).length,batchId:e,recordCount:t.length}}),[Ir,jn,qn]),zr=(0,U.useMemo)(()=>Me?jn.filter(e=>String(e.batchId??``).trim()===Me):[],[jn,Me]),Br=(0,U.useMemo)(()=>{let e=new Map;return zr.forEach(t=>{let n=String(t.schoolYear??``).trim();if(!n)return;let r=e.get(n)??[];r.push(t),e.set(n,r)}),Array.from(e,([e,t])=>{let n=new Set(t.map(e=>String(e.studentId??``).trim().toLowerCase()));return{accountCount:qn.filter(e=>n.has(String(e.schoolId??``).trim().toLowerCase())).length,recordCount:t.length,schoolYear:e}}).sort((e,t)=>t.schoolYear.localeCompare(e.schoolYear))},[zr,qn]),Vr=(0,U.useMemo)(()=>Pe?zr.filter(e=>String(e.schoolYear??``).trim()===Pe):[],[zr,Pe]),Hr=(0,U.useMemo)(()=>{let e=new Map;return Vr.forEach(t=>{let n=String(t.semester??``).trim();if(!n)return;let r=e.get(n)??[];r.push(t),e.set(n,r)}),Array.from(e,([e,t])=>{let n=new Set(t.map(e=>String(e.studentId??``).trim().toLowerCase()));return{accountCount:qn.filter(e=>n.has(String(e.schoolId??``).trim().toLowerCase())).length,recordCount:t.length,semester:e}}).sort((e,t)=>e.semester.localeCompare(t.semester))},[Vr,qn]),Ur=Hr.find(e=>e.semester===Ie),Wr=(0,U.useMemo)(()=>{let e=Ee.trim().toLowerCase();return e?Fn.filter(t=>or(t)===lr&&ar(t).toLowerCase()===e):[]},[lr,Fn,Ee]),Gr=(0,U.useMemo)(()=>{let e=Ut.trim().toLowerCase();return e?Wr.filter(t=>{let n=[t.firstName,t.middleName,t.lastName,t.extensionName].filter(Boolean).join(` `);return[t.studentId,n,t.gender,t.birthDate,t.year,t.address,t.mobileNumber,t.emailAddress,t.status,t.psaFileName,t.schoolIdFileName,t.corFileName,t.pwdIdFileName,t.fourPsFileName,$n(t.submittedAt)].map(e=>String(e??``).toLowerCase()).join(` `).includes(e)}):Wr},[Ut,Wr]),Kr=Math.max(1,Math.ceil(Gr.length/Wn)),qr=Math.min(tn,Kr),Jr=(qr-1)*Wn,Yr=Gr.slice(Jr,Jr+Wn),Xr=cr(qr,Kr),Zr=Gr.length===0?0:Jr+1,Qr=Jr+Yr.length,$r=(0,U.useMemo)(()=>{let e=Tt.trim().toLowerCase(),t=Dt.trim().toLowerCase(),n=kt.trim().toLowerCase(),r=jt.trim().toLowerCase();return jn.filter(i=>{let a=[i.no,i.tesAwardNumber,i.studentId,i.lastName,i.firstName,i.middleInitial,i.batchId,i.status,i.semester,i.schoolYear].map(e=>String(e??``).toLowerCase()).join(` `),o=e?a.includes(e):!0,s=t?String(i.batchId??``).trim().toLowerCase()===t:!0,c=n?String(i.semester??``).trim().toLowerCase()===n:!0,l=r?String(i.schoolYear??``).trim().toLowerCase()===r:!0;return o&&s&&c&&l})},[jn,Tt,Dt,kt,jt]),ei=Math.max(1,Math.ceil($r.length/Ln)),ti=Math.min(mt,ei),ni=(ti-1)*Ln,ri=cr(ti,ei),ii=$r.slice(ni,ni+Ln),ai=$r.filter(e=>e.frontIdUrl),oi=(0,U.useMemo)(()=>Array.from(new Set(ai.map(e=>String(e.schoolYear??``).trim()).filter(Boolean))).sort((e,t)=>t.localeCompare(e)),[ai]),si=(0,U.useMemo)(()=>oi.map(e=>({fileCount:ai.filter(t=>String(t.schoolYear??``).trim()===e).length,schoolYear:e})),[ai,oi]),ci=(0,U.useMemo)(()=>{if(!He)return[];let e=new Map;return ai.forEach(t=>{if(String(t.schoolYear??``).trim()!==He)return;let n=String(t.batchId??``).trim();if(!n)return;let r=e.get(n)??{batchId:n,fileCount:0};r.fileCount+=1,e.set(n,r)}),Array.from(e.values()).sort((e,t)=>e.batchId.localeCompare(t.batchId))},[ai,He]),li=$r.length===0?0:ni+1,ui=ni+ii.length,di=(0,U.useMemo)(()=>{let e=ie.trim().toLowerCase();return e?qn.filter(t=>[t.schoolId,t.email,t.phoneNumber,t.facebookProfileUrl].map(e=>String(e??``).toLowerCase()).join(` `).includes(e)):qn},[qn,ie]),fi=Math.max(1,Math.ceil(di.length/Rn)),pi=Math.min(A,fi),mi=(pi-1)*Rn,hi=di.slice(mi,mi+Rn),gi=cr(pi,fi),_i=di.length===0?0:mi+1,vi=mi+hi.length,yi=Math.max(1,Math.ceil(Nn.length/zn)),bi=Math.min(Ft,yi),xi=(bi-1)*zn,Si=Nn.slice(xi,xi+zn),Ci=Nn.length===0?0:xi+1,wi=xi+Si.length,Ti=(0,U.useMemo)(()=>Array.from(new Set(Pn.map(e=>e.sourceTable))).sort(),[Pn]),q=(0,U.useMemo)(()=>{let e=c.trim().toLowerCase();return Pn.filter(t=>{let n=u?t.sourceTable===u:!0,r=[t.sourceTable,t.sourceLabel,t.sourceId,t.deletionKind,Yn(t.deletedAt)].map(e=>String(e??``).toLowerCase()).join(` `);return n&&(!e||r.includes(e))})},[Pn,c,u]),J=Math.max(1,Math.ceil(q.length/Bn)),Ei=Math.min(f,J),Di=(Ei-1)*Bn,Oi=q.slice(Di,Di+Bn),ki=q.length===0?0:Di+1,Ai=Di+Oi.length,ji=Math.max(1,Math.ceil(Rr.length/Vn)),Mi=Math.min(Lt,ji),Ni=(Mi-1)*Vn,Pi=Rr.slice(Ni,Ni+Vn),Fi=Rr.length===0?0:Ni+1,Ii=Ni+Pi.length,Li=Math.max(1,Math.ceil(si.length/Hn)),Ri=Math.min(zt,Li),zi=(Ri-1)*Hn,Bi=si.slice(zi,zi+Hn),Vi=si.length===0?0:zi+1,Hi=zi+Bi.length,Ui=Math.max(1,Math.ceil(ci.length/Un)),Wi=Math.min(Vt,Ui),Gi=(Wi-1)*Un,Ki=ci.slice(Gi,Gi+Un),qi=ci.length===0?0:Gi+1,Ji=Gi+Ki.length,Yi=e=>{ht(Math.min(Math.max(e,1),ei))},Xi=e=>{It(Math.min(Math.max(e,1),yi))},Zi=e=>{p(Math.min(Math.max(e,1),J))},Qi=e=>{Rt(Math.min(Math.max(e,1),ji))},$i=e=>{Bt(Math.min(Math.max(e,1),Li))},ea=e=>{Ht(Math.min(Math.max(e,1),Ui))},ta=e=>{nn(Math.min(Math.max(e,1),Kr))},na=e=>{an(Math.min(Math.max(e,1),kr))},ra=()=>{qt||Yt||(De(``),Wt(``),nn(1),Kt(!1))},ia=e=>{Wt(e.target.value),nn(1)},aa=e=>{Ue(e),Ht(1)},oa=()=>{qe||Ye||(Ve(!1),Ue(``),We(null),Ke(!1),Ht(1))},sa=(e,t)=>{We({batchId:e,fileCount:t,schoolYear:He})},ca=()=>{qe||Ye||(We(null),Ke(!1))},la=e=>{Et(e.target.value),ht(1)},ua=e=>{Ot(e.target.value),ht(1)},da=e=>{At(e.target.value),ht(1)},fa=e=>{Mt(e.target.value),ht(1)},pa=async(e,t)=>{let n=String(e??``).trim(),r=String(t??``).trim(),i=ai.filter(e=>String(e.schoolYear??``).trim()===n&&String(e.batchId??``).trim()===r).sort(ir);if(i.length!==0){Je(!0),Qe(0);try{let e=[];for(let[t,n]of i.entries()){try{let r=await ur(n,t);e.push(r)}catch(e){console.warn(e)}Qe(Math.min(90,Math.round((t+1)/i.length*90)))}if(e.length===0)throw Error(`No School ID files could be downloaded for this batch.`);let t=_r(e);Qe(96);let a=URL.createObjectURL(t),o=document.createElement(`a`),s=rr(n,`school-year`),c=rr(r,`batch`);o.href=a,o.download=`school-id-files-${s}-batch-${c}.zip`,o.rel=`noreferrer`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a),Qe(100),await new Promise(e=>window.setTimeout(e,350)),Ve(!1),Ue(``),We(null),Ht(1),et({batchId:r,count:e.length,schoolYear:n,type:`download`})}catch(e){window.alert(e instanceof Error?e.message:`Unable to download School ID files.`)}finally{Je(!1),Qe(0)}}},ma=async()=>{if(B){Xe(!0);try{let e=await Cn({batchId:B.batchId,schoolYear:B.schoolYear});Ke(!1),We(null),Ue(``),Ve(!1),Ht(1),et({batchId:B.batchId,count:e.deleted,schoolYear:B.schoolYear,type:`delete`})}catch(e){window.alert(e instanceof Error?e.message:`Unable to delete School ID files.`)}finally{Xe(!1)}}},ha=(e,t,n)=>{if(hn===void 0){window.alert(`Please wait while student account data is loading.`);return}let r=String(e??``).trim(),i=String(t??``).trim(),a=String(n??``).trim(),o=jn.filter(e=>String(e.batchId??``).trim()===r&&String(e.schoolYear??``).trim()===i&&String(e.semester??``).trim()===a);if(o.length===0){window.alert(`No records found for this batch, School Year, and semester.`);return}let s=new Map(qn.map(e=>[String(e.schoolId??``).trim().toLowerCase(),e])),c=[[`Batch No.`,`Student ID`,`TES Award Number`,`Last Name`,`First Name`,`MI.`,`School Year`,`Semester`,`Status`,`Email Account`,`Phone No.`,`Current Address`,`Account Status`],...o.map(e=>{let t=s.get(String(e.studentId??``).trim().toLowerCase());return[e.batchId??``,e.studentId??``,e.tesAwardNumber??``,e.lastName??``,e.firstName??``,e.middleInitial??``,e.schoolYear??``,e.semester??``,e.status??``,t?.email??``,t?.phoneNumber??``,t?.currentAddress??``,t?.status??`No student account`]})];tr(`batch-info-${rr(r,`batch`)}-${rr(i,`school-year`)}-${rr(a,`semester`)}.csv`,c),Aa()},ga=async e=>{if(pn===void 0){window.alert(`Please wait while applicant information is loading.`);return}let t=String(e??``).trim(),n=Fn.filter(e=>or(e)===lr&&ar(e).toLowerCase()===t.toLowerCase());if(n.length===0){window.alert(`No applicants are available for this course.`);return}Xt(!0),Qt(8),await new Promise(e=>window.setTimeout(e,120));let r=sr(n,t);Qt(72),await new Promise(e=>window.setTimeout(e,120));let i=rr(t,`course`);tr(`unifast-applicants-${rr(lr,`application-year`)}-${i}.csv`,r),Qt(100),await new Promise(e=>window.setTimeout(e,350)),Xt(!1),Qt(0),en({count:n.length,course:t,type:`download`,year:lr})},_a=async()=>{if(Ee){Jt(!0);try{let e=await wn({applicationYear:lr,course:Ee});Kt(!1),en({count:e.deleted,course:Ee,filesDeleted:e.filesDeleted,type:`delete`,year:lr}),De(``),Wt(``),nn(1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to delete course applicants.`)}finally{Jt(!1)}}},va=()=>{if(on===void 0){window.alert(`Please wait while student requests are loading.`);return}if(Mn.length===0){window.alert(`No student requests are available to export.`);return}let e=$n(Date.now()),t=[[`No.`,`Student ID`,`Last Name`,`First Name`,`MI`,`Email Account`,`Question / Request`,`Source`,`Status`,`Submitted At`,`Exported At`],...Mn.map((t,n)=>[n+1,t.studentId??``,t.lastName??``,t.firstName??``,t.middleInitial??``,t.email??``,t.question??``,t.source??``,t.status??``,$n(t.submittedAt),e])];tr(`student-requests-responses-${new Date().toISOString().slice(0,10)}.csv`,t)},ya=async()=>{if(!(ft||Nn.length===0)&&window.confirm(`Move all ${Nn.length} visible activity logs to the archive?`)){pt(!0);try{await bn({}),It(1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to clear activity logs.`)}finally{pt(!1)}}},ba=async e=>{if(!m&&window.confirm(`Restore ${e.sourceLabel||e.sourceTable} to ${e.sourceTable}?`)){h(e._id),_(``);try{await xn({id:e._id}),_(`${e.sourceLabel||`Item`} restored successfully.`)}catch(e){_(e instanceof Error?e.message:`Unable to restore this item.`)}finally{h(null)}}},xa=async e=>{if(!m&&window.confirm(`Permanently delete ${e.sourceLabel||e.sourceTable} from the archive? This cannot be undone.`)){h(e._id),_(``);try{await Sn({id:e._id}),_(`${e.sourceLabel||`Item`} permanently deleted.`)}catch(e){_(e instanceof Error?e.message:`Unable to permanently delete this item.`)}finally{h(null)}}},Sa=async(t,n)=>{try{let r=await gn({sessionToken:e?.sessionToken,isReceivingApplicants:t,...n?{applicationYear:n}:{}});r.success||window.alert(r.message||`Unable to update applicant portal status.`)}catch(e){window.alert(e instanceof Error?e.message:`Unable to update applicant portal status.`)}},Ca=async e=>{await Sa(!0,e),Te(!1),an(1)},wa=()=>{oe(!1),P(!1),I(!1),Te(!1),an(1),De(``),Wt(``),nn(1),he(null)},Ta=()=>{_e(`all`),ye([]),xe(``),Ce(``),I(!0)},Ea=()=>{Yt||(I(!1),Ce(``))},Da=e=>{ye(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),Ce(``)},Oa=async()=>{if(Yt)return;if(dr===void 0){Ce(`Applicant counts are still loading. Please try again in a moment.`);return}let t=ge===`all`?Jn:Jn.filter(e=>ve.includes(e));if(!t.length){Ce(`Select at least one course to download applicant records.`);return}if(pr===0){Ce(`No applicant records match the selected courses and application year.`);return}Ce(``),Xt(!0),Qt(12);try{let n=await Tn({sessionToken:e?.sessionToken,applicationYear:lr,courses:t});if(!Array.isArray(n)||n.length===0)throw Error(`No applicant records matched the selected courses and application year.`);Qt(76);let r=sr(n);if(!tr(`unifast-applicants-${rr(lr,`application-year`)}-${ge===`all`?`all-courses`:`selected-courses`}.csv`,r))throw Error(`The applicant CSV file could not be generated.`);Qt(100),await new Promise(e=>window.setTimeout(e,220)),I(!1),en({count:n.length,course:ge===`all`?`All courses`:`${t.length} selected courses`,type:`download`,year:lr})}catch(e){Ce(e instanceof Error?e.message:`Unable to download applicant records. Please try again.`)}finally{Xt(!1),Qt(0)}},ka=()=>{Rt(1),Ne(``),Fe(``),Le(``),je(!0)},Aa=()=>{je(!1),Ne(``),Fe(``),Le(``)},ja=()=>{Rt(1),st(``),ze(!0)},Ma=()=>{ut||(ze(!1),V(null))},Na=()=>{y(!0)},Pa=()=>{rt(null),at(``),st(``),lt(!1),ke(!0)},Fa=()=>{ct||(ke(!1),rt(null),at(``),lt(!1))},Ia=()=>{Ct||(vt(null),bt(null),St(``))},La=e=>{vt(e),bt({no:e.no??``,tesAwardNumber:e.tesAwardNumber??``,studentId:e.studentId??``,lastName:e.lastName??``,firstName:e.firstName??``,middleInitial:e.middleInitial??``,batchId:e.batchId??``,status:e.status??``,semester:e.semester??``,schoolYear:e.schoolYear??``}),St(``)},Ra=e=>t=>{St(``),bt(n=>({...n,[e]:t.target.value}))},za=async e=>{if(e.preventDefault(),!(!_t||!yt)){if([`no`,`tesAwardNumber`,`studentId`,`lastName`,`firstName`,`batchId`,`status`,`semester`,`schoolYear`].some(e=>!String(yt[e]??``).trim())){St(`Please complete all required fields before saving.`);return}wt(!0),St(`Saving changes...`);try{await vn({id:_t._id,...yt}),St(`Record updated successfully.`),vt(null),bt(null)}catch(e){St(e instanceof Error?e.message:`Unable to update record.`)}finally{wt(!1)}}},Ba=e=>{st(``),gt(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},Va=async()=>{if(H.length===0){st(`Please check at least one record before deleting.`);return}if(window.confirm(`Delete ${H.length} checked record${H.length===1?``:`s`}?`)){dt(!0),st(`Deleting checked record...`);try{let e=await yn({ids:H});gt([]),st(`${e?.deleted??H.length} record${(e?.deleted??H.length)===1?``:`s`} deleted successfully.`)}catch(e){st(e instanceof Error?e.message:`Unable to delete records.`)}finally{dt(!1)}}},Ha=async()=>{if(!tt)return;let e=tt.batchId,t=jn.filter(t=>String(t.batchId??``).trim()===e).map(e=>e._id);if(t.length===0){st(`No records found for this batch.`),V(null);return}dt(!0),st(`Deleting batch ${e}...`);try{let n=await yn({ids:t});gt(e=>e.filter(e=>!t.includes(e))),st(`${n?.deleted??t.length} record${(n?.deleted??t.length)===1?``:`s`} deleted from batch ${e}.`),V(null),ze(!1),ht(1)}catch(e){st(e instanceof Error?e.message:`Unable to delete batch records.`)}finally{dt(!1)}},Ua=e=>{let t=e.target.files?.[0]??null;rt(t),at(t?`${t.name} is ready to upload.`:``)},Wa=async e=>{if(e.preventDefault(),!nt){at(`Select a CSV file before uploading.`);return}if(!nt.name.toLowerCase().endsWith(`.csv`)){at(`Please upload the downloaded CSV template file.`);return}lt(!0),at(`Reading file...`);try{let e=br(await nt.text());if(e.length===0){at(`No valid rows found. Use the CSV template headers and add record values.`);return}let t=await _n({records:e});at(`${t.inserted} record${t.inserted===1?``:`s`} saved to allinfo.`),rt(null)}catch(e){at(e instanceof Error?e.message:`Unable to upload records.`)}finally{lt(!1)}},Ga=()=>{j(1),O(``),x(!0)},Ka=e=>{C(e),E({email:e.email??``,phoneNumber:e.phoneNumber??``}),O(``)},qa=e=>{let{name:t,value:n}=e.target;E(e=>({...e,[t]:n}))};return(0,U.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;r(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,U.useEffect)(()=>{if(!On)return;let e=e=>{e.key===`Escape`&&(a(!1),s(!1),y(!1),x(!1),C(null),T(null),oe(!1),P(!1),Te(!1),an(1),De(``),Wt(``),nn(1),ke(!1),je(!1),Ne(``),Fe(``),Le(``),ze(!1),V(null),Ve(!1),Ue(``),Ht(1),rt(null),at(``),lt(!1),vt(null))};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[On]),(0,K.jsxs)(`div`,{className:`admin-page`,children:[(0,K.jsx)(`style`,{children:Sr}),(0,K.jsxs)(`header`,{className:`admin-topbar`,children:[(0,K.jsxs)(`div`,{className:`brand-lockup`,children:[(0,K.jsx)(`div`,{className:`brand-mark`,children:(0,K.jsx)(`img`,{alt:`IBACMI`,className:`brand-mark__image`,src:kn})}),(0,K.jsxs)(`div`,{className:`brand-copy`,children:[(0,K.jsx)(`p`,{className:`brand-title`,children:`IBACMI`}),(0,K.jsx)(`p`,{className:`brand-subtitle`,children:`Scholarship Office`})]})]}),(0,K.jsxs)(`div`,{className:`header-actions`,children:[(0,K.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:()=>{It(1),a(!0)},type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`history`}),`Logs`]}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:()=>{_(``),p(1),s(!0)},type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`archive`}),`Archive`]}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:()=>oe(!0),type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`folder_open`}),`UNIFAST PORTAL`]}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:Ga,type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`manage_accounts`}),`User Management`]}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:Na,type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`task_alt`}),`Quick Actions`]}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--admin`,onClick:An,type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`logout`}),`Logout`]})]})]}),(0,K.jsx)(`main`,{className:`admin-main`,children:(0,K.jsxs)(`div`,{className:`admin-container`,children:[(0,K.jsxs)(`section`,{className:`admin-heading`,children:[(0,K.jsxs)(`div`,{className:`admin-heading__copy`,children:[(0,K.jsx)(`span`,{className:`admin-eyebrow`,children:`Tertiary Education Subsidy and Tulong Dunong Program`}),(0,K.jsx)(`h1`,{children:`Grantee Management`})]}),(0,K.jsxs)(`div`,{className:`admin-heading__actions`,children:[(0,K.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:Ir.length===0,onClick:ka,title:Ir.length===0?`No batches available to export`:`Choose a batch to export student account info`,type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`table_view`}),`Export to CSV Batch Info`]}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:ai.length===0,onClick:()=>{Bt(1),Ve(!0)},title:ai.length===0?`No School ID files available to download`:`Choose a School Year to download School ID files`,type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download School ID File`]}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--primary`,onClick:Pa,type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`add`}),`Add New Record`]}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:Ir.length===0,onClick:ja,title:Ir.length===0?`No batches available to delete`:`Choose a batch to delete`,type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`}),`Delete Batch`]})]})]}),(0,K.jsxs)(`section`,{className:`admin-stats-grid`,"aria-label":`Grantee summary`,children:[(0,K.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,K.jsx)(`span`,{children:`Total Records`}),(0,K.jsx)(`strong`,{children:jn.length})]}),(0,K.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,K.jsx)(`span`,{children:`Filtered Results`}),(0,K.jsx)(`strong`,{children:$r.length})]}),(0,K.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,K.jsx)(`span`,{children:`Checked Records`}),(0,K.jsx)(`strong`,{children:H.length})]}),(0,K.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,K.jsx)(`span`,{children:`Student Requests`}),(0,K.jsx)(`strong`,{children:Mn.length})]})]}),(0,K.jsxs)(`section`,{className:`admin-filter-panel`,"aria-label":`Grantee filters`,children:[(0,K.jsxs)(`div`,{className:`admin-search-field`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,K.jsx)(`input`,{"aria-label":`Search grantee records`,placeholder:`Search by Student ID, award number, status, or semester...`,type:`text`,value:Tt,onChange:la})]}),(0,K.jsxs)(`select`,{"aria-label":`Filter by batch`,value:Dt,onChange:ua,children:[(0,K.jsx)(`option`,{value:``,children:`All Batches`}),Ir.map(e=>(0,K.jsx)(`option`,{value:e,children:e},e))]}),(0,K.jsxs)(`select`,{"aria-label":`Filter by semester`,value:kt,onChange:da,children:[(0,K.jsx)(`option`,{value:``,children:`All Semesters`}),(0,K.jsx)(`option`,{value:`1st Semester`,children:`1st Semester`}),(0,K.jsx)(`option`,{value:`2nd Semester`,children:`2nd Semester`})]}),(0,K.jsxs)(`select`,{"aria-label":`Filter by school year`,value:jt,onChange:fa,children:[(0,K.jsx)(`option`,{value:``,children:`All School Years`}),Lr.map(e=>(0,K.jsx)(`option`,{value:e,children:e},e))]}),(0,K.jsx)(`button`,{className:`admin-filter-button`,type:`button`,"aria-label":`Refresh records`,title:`Refresh records`,onClick:()=>Pt(e=>e+1),children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`refresh`})})]}),(0,K.jsxs)(`section`,{className:`admin-table-card`,"aria-label":`TDP grantee records`,children:[(0,K.jsx)(`div`,{className:`admin-table-header`,children:(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`h2`,{children:`Grantee Records`}),(0,K.jsx)(`p`,{children:`Review, check, edit, or delete selected records.`})]})}),(0,K.jsx)(`div`,{className:`admin-table-scroll`,children:(0,K.jsxs)(`table`,{children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{children:`No.`}),(0,K.jsx)(`th`,{children:`TES Award Number`}),(0,K.jsx)(`th`,{children:`Student ID`}),(0,K.jsx)(`th`,{children:`TES Details`}),(0,K.jsx)(`th`,{children:`Last Name`}),(0,K.jsx)(`th`,{children:`First Name`}),(0,K.jsx)(`th`,{children:`MI.`}),(0,K.jsx)(`th`,{children:`Batch No.`}),(0,K.jsx)(`th`,{children:`Status`}),(0,K.jsx)(`th`,{children:`Semester`}),(0,K.jsx)(`th`,{children:`School Year`}),(0,K.jsx)(`th`,{children:`School ID File`}),(0,K.jsx)(`th`,{children:`Actions`})]})}),(0,K.jsxs)(`tbody`,{children:[fn===void 0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`Loading grantee records...`})}),fn?.length===0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No grantee records yet. Upload a CSV file to add records.`})}),fn&&fn.length>0&&$r.length===0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No matching record found.`})}),ii.map((e,t)=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{"data-label":`No.`,children:ni+t+1}),(0,K.jsx)(`td`,{className:`admin-award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,K.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,K.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`—`}),(0,K.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`—`}),(0,K.jsx)(`td`,{"data-label":`MI.`,children:e.middleInitial||`—`}),(0,K.jsx)(`td`,{className:`admin-batch-cell`,"data-label":`Batch No.`,children:e.batchId}),(0,K.jsx)(`td`,{"data-label":`Status`,children:(0,K.jsx)(Zn,{status:e.status,tone:Qn(e.status)})}),(0,K.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,K.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`}),(0,K.jsx)(`td`,{"data-label":`School ID File`,children:e.frontIdUrl?(0,K.jsx)(`a`,{className:`admin-file-link`,href:e.frontIdUrl,rel:`noreferrer`,target:`_blank`,children:`View file`}):(0,K.jsx)(`span`,{className:`admin-file-empty`,children:`No file`})}),(0,K.jsx)(`td`,{"data-label":`Actions`,children:(0,K.jsxs)(`div`,{className:`admin-row-actions`,children:[(0,K.jsx)(`button`,{className:`admin-edit-button`,type:`button`,onClick:()=>La(e),children:`Edit`}),(0,K.jsxs)(`label`,{className:`admin-checkbox-control`,children:[(0,K.jsx)(`input`,{type:`checkbox`,checked:H.includes(e._id),onChange:()=>Ba(e._id)}),(0,K.jsx)(`span`,{children:`Check`})]}),(0,K.jsx)(`button`,{className:`admin-delete-button`,type:`button`,disabled:ut||!H.includes(e._id),onClick:Va,children:`Delete`})]})})]},e._id))]})]})}),(0,K.jsxs)(`div`,{className:`admin-pagination`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsx)(`strong`,{children:li}),` to `,(0,K.jsx)(`strong`,{children:ui}),` of`,` `,(0,K.jsx)(`strong`,{children:$r.length}),` results`]}),ot&&(0,K.jsx)(`p`,{className:`admin-delete-message`,children:ot})]}),(0,K.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,K.jsx)(`button`,{type:`button`,disabled:ti===1||$r.length===0,"aria-label":`Previous page`,onClick:()=>Yi(ti-1),children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),ri.map(e=>{if(typeof e==`string`)return(0,K.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e);let t=e;return(0,K.jsx)(`button`,{"aria-current":ti===t?`page`:void 0,className:ti===t?`admin-page-button--active`:void 0,disabled:$r.length===0,onClick:()=>Yi(t),type:`button`,children:t},t)}),(0,K.jsx)(`button`,{type:`button`,disabled:ti===ei||$r.length===0,"aria-label":`Next page`,onClick:()=>Yi(ti+1),children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]})}),i&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-logs-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close logs modal`,className:`admin-modal-backdrop`,onClick:()=>a(!1),type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Activity Logs`}),(0,K.jsx)(`h2`,{id:`admin-logs-title`,children:`System Activity Records`}),(0,K.jsx)(`p`,{children:`Review recent uploads, edits, deletes, student updates, and page actions.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close logs`,className:`admin-modal-close`,onClick:()=>a(!1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-logs-toolbar`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`Log Management`}),(0,K.jsx)(`strong`,{children:`Move all system activity records to the archive.`})]}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:cn===void 0||Nn.length===0||ft,onClick:ya,type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_sweep`}),ft?`Clearing...`:`Clear All Logs`]})]}),(0,K.jsx)(`div`,{className:`admin-logs-table-wrap`,children:(0,K.jsxs)(`table`,{className:`admin-logs-table`,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{children:`Date & Time`}),(0,K.jsx)(`th`,{children:`Action`}),(0,K.jsx)(`th`,{children:`Actor`}),(0,K.jsx)(`th`,{children:`Target`}),(0,K.jsx)(`th`,{children:`Summary`})]})}),(0,K.jsxs)(`tbody`,{children:[cn===void 0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`Loading activity logs...`})}),cn&&Nn.length===0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`No activity logs recorded yet.`})}),Si.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{"data-label":`Date & Time`,children:Yn(e.createdAt)}),(0,K.jsx)(`td`,{"data-label":`Action`,children:(0,K.jsx)(`span`,{className:`admin-log-action`,children:e.action})}),(0,K.jsxs)(`td`,{"data-label":`Actor`,children:[(0,K.jsx)(`strong`,{children:e.actorName||e.actorId||e.actorRole}),(0,K.jsx)(`span`,{children:e.actorRole})]}),(0,K.jsxs)(`td`,{"data-label":`Target`,children:[(0,K.jsx)(`strong`,{children:e.targetLabel||e.targetType}),(0,K.jsx)(`span`,{children:e.targetType})]}),(0,K.jsx)(`td`,{"data-label":`Summary`,children:e.summary})]},e._id))]})]})}),(0,K.jsxs)(`div`,{className:`admin-pagination admin-logs-pagination`,children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsx)(`strong`,{children:Ci}),` to `,(0,K.jsx)(`strong`,{children:wi}),` of`,` `,(0,K.jsx)(`strong`,{children:Nn.length}),` logs`]}),(0,K.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,K.jsx)(`button`,{type:`button`,disabled:bi===1||Nn.length===0,"aria-label":`Previous logs page`,onClick:()=>Xi(bi-1),children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:yi},(e,t)=>{let n=t+1;return(0,K.jsx)(`button`,{className:bi===n?`admin-page-button--active`:void 0,disabled:Nn.length===0,onClick:()=>Xi(n),type:`button`,children:n},n)}),(0,K.jsx)(`button`,{type:`button`,disabled:bi===yi||Nn.length===0,"aria-label":`Next logs page`,onClick:()=>Xi(bi+1),children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),o&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-archive-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close archive modal`,className:`admin-modal-backdrop`,onClick:()=>s(!1),type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--archive`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Archive`}),(0,K.jsx)(`h2`,{id:`admin-archive-title`,children:`Deleted Records`}),(0,K.jsx)(`p`,{children:`Search deleted data, restore it to its original table, or delete it permanently.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close archive`,className:`admin-modal-close`,disabled:!!m,onClick:()=>s(!1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-archive-toolbar`,children:[(0,K.jsxs)(`label`,{className:`admin-archive-search`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,K.jsx)(`input`,{onChange:e=>{l(e.target.value),p(1)},placeholder:`Search table, deleted item, ID, or date...`,type:`search`,value:c})]}),(0,K.jsxs)(`select`,{"aria-label":`Filter archive by table`,onChange:e=>{d(e.target.value),p(1)},value:u,children:[(0,K.jsx)(`option`,{value:``,children:`All tables`}),Ti.map(e=>(0,K.jsx)(`option`,{value:e,children:e},e))]})]}),g&&(0,K.jsx)(`p`,{className:`admin-archive-message`,children:g}),(0,K.jsx)(`div`,{className:`admin-logs-table-wrap admin-archive-table-wrap`,children:(0,K.jsxs)(`table`,{className:`admin-logs-table admin-archive-table`,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{children:`Table`}),(0,K.jsx)(`th`,{children:`Deleted Item`}),(0,K.jsx)(`th`,{children:`Deletion Type`}),(0,K.jsx)(`th`,{children:`Date & Time Deleted`}),(0,K.jsx)(`th`,{children:`Actions`})]})}),(0,K.jsxs)(`tbody`,{children:[dn===void 0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`Loading archive...`})}),dn&&q.length===0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:Pn.length===0?`No deleted records in the archive.`:`No archived records match your filters.`})}),Oi.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{"data-label":`Table`,children:(0,K.jsx)(`span`,{className:`admin-archive-table-name`,children:e.sourceTable})}),(0,K.jsxs)(`td`,{"data-label":`Deleted Item`,children:[(0,K.jsx)(`strong`,{children:e.sourceLabel||e.sourceId}),(0,K.jsx)(`span`,{children:e.sourceId})]}),(0,K.jsx)(`td`,{"data-label":`Deletion Type`,children:e.deletionKind===`fields`?`File data`:`Full record`}),(0,K.jsx)(`td`,{"data-label":`Date & Time Deleted`,children:Yn(e.deletedAt)}),(0,K.jsx)(`td`,{"data-label":`Actions`,children:(0,K.jsxs)(`div`,{className:`admin-archive-actions`,children:[(0,K.jsxs)(`button`,{className:`admin-archive-action admin-archive-action--restore`,disabled:!!m,onClick:()=>ba(e),type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`restore`}),m===e._id?`Working...`:`Restore`]}),(0,K.jsxs)(`button`,{className:`admin-archive-action admin-archive-action--delete`,disabled:!!m,onClick:()=>xa(e),type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),`Delete`]})]})})]},e._id))]})]})}),(0,K.jsxs)(`div`,{className:`admin-pagination admin-logs-pagination`,children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsx)(`strong`,{children:ki}),` to`,` `,(0,K.jsx)(`strong`,{children:Ai}),` of`,` `,(0,K.jsx)(`strong`,{children:q.length}),` archived items`]}),(0,K.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,K.jsx)(`button`,{"aria-label":`Previous archive page`,disabled:Ei===1||q.length===0,onClick:()=>Zi(Ei-1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:J},(e,t)=>t+1).map(e=>(0,K.jsx)(`button`,{className:Ei===e?`admin-page-button--active`:void 0,disabled:q.length===0,onClick:()=>Zi(e),type:`button`,children:e},e)),(0,K.jsx)(`button`,{"aria-label":`Next archive page`,disabled:Ei===J||q.length===0,onClick:()=>Zi(Ei+1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),Ae&&!Me&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-batch-export-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close batch export modal`,className:`admin-modal-backdrop`,onClick:Aa,type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Batch CSV Export`}),(0,K.jsx)(`h2`,{id:`admin-batch-export-title`,children:`Choose Batch`}),(0,K.jsx)(`p`,{children:`Export student account information for a specific batch using allinfo Student IDs.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close batch export`,className:`admin-modal-close`,onClick:Aa,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsx)(`div`,{className:`admin-school-year-downloads`,children:Pi.map(({accountCount:e,batchId:t,recordCount:n})=>(0,K.jsxs)(`button`,{className:`admin-school-year-button`,disabled:hn===void 0,onClick:()=>Ne(t),type:`button`,children:[(0,K.jsx)(`span`,{children:t}),(0,K.jsx)(`strong`,{children:hn===void 0?`Loading accounts...`:`${n} records / ${e} accounts`})]},t))}),(0,K.jsxs)(`div`,{className:`admin-pagination admin-batch-export-pagination`,children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsx)(`strong`,{children:Fi}),`-`,(0,K.jsx)(`strong`,{children:Ii}),` `,`of `,(0,K.jsx)(`strong`,{children:Rr.length}),` batches`]}),(0,K.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,K.jsx)(`button`,{disabled:Mi===1,onClick:()=>Qi(Mi-1),type:`button`,"aria-label":`Previous batch export page`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:ji},(e,t)=>{let n=t+1;return(0,K.jsx)(`button`,{"aria-current":Mi===n?`page`:void 0,className:Mi===n?`admin-page-button--active`:void 0,onClick:()=>Qi(n),type:`button`,children:n},n)}),(0,K.jsx)(`button`,{disabled:Mi===ji,onClick:()=>Qi(Mi+1),type:`button`,"aria-label":`Next batch export page`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,K.jsx)(`div`,{className:`admin-upload-actions`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:Aa,type:`button`,children:`Cancel`})})]})]}),Ae&&Me&&!Pe&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-batch-export-year-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close School Year selection`,className:`admin-modal-backdrop`,onClick:Aa,type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(`p`,{className:`admin-modal-kicker`,children:[`Batch `,Me]}),(0,K.jsx)(`h2`,{id:`admin-batch-export-year-title`,children:`Choose School Year`}),(0,K.jsx)(`p`,{children:`Select the School Year to include in this batch information CSV.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close School Year selection`,className:`admin-modal-close`,onClick:Aa,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-school-year-downloads`,children:[Br.map(({accountCount:e,recordCount:t,schoolYear:n})=>(0,K.jsxs)(`button`,{className:`admin-school-year-button`,onClick:()=>Fe(n),type:`button`,children:[(0,K.jsx)(`span`,{children:n}),(0,K.jsxs)(`strong`,{children:[t,` records / `,e,` accounts`]})]},n)),Br.length===0&&(0,K.jsx)(`div`,{className:`admin-modal-empty-state`,children:`No School Year information was found for this batch.`})]}),(0,K.jsx)(`div`,{className:`admin-upload-actions`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>Ne(``),type:`button`,children:`Back`})})]})]}),Ae&&Me&&Pe&&!Ie&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-batch-export-semester-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close semester selection`,className:`admin-modal-backdrop`,onClick:Aa,type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(`p`,{className:`admin-modal-kicker`,children:[`Batch `,Me,` · `,Pe]}),(0,K.jsx)(`h2`,{id:`admin-batch-export-semester-title`,children:`Choose Semester`}),(0,K.jsx)(`p`,{children:`Select the semester to include in the downloaded batch information.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close semester selection`,className:`admin-modal-close`,onClick:Aa,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-school-year-downloads`,children:[Hr.map(({accountCount:e,recordCount:t,semester:n})=>(0,K.jsxs)(`button`,{className:`admin-school-year-button`,onClick:()=>Le(n),type:`button`,children:[(0,K.jsx)(`span`,{children:n}),(0,K.jsxs)(`strong`,{children:[t,` records / `,e,` accounts`]})]},n)),Hr.length===0&&(0,K.jsx)(`div`,{className:`admin-modal-empty-state`,children:`No semester information was found for this School Year.`})]}),(0,K.jsx)(`div`,{className:`admin-upload-actions`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>Fe(``),type:`button`,children:`Back`})})]})]}),Ae&&Me&&Pe&&Ie&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-batch-export-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`alertdialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Cancel batch information download`,className:`admin-modal-backdrop`,onClick:()=>Le(``),type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,K.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`})}),(0,K.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Batch CSV Export`}),(0,K.jsx)(`h2`,{id:`admin-batch-export-confirm-title`,children:`Download this batch information?`}),(0,K.jsxs)(`p`,{children:[`Are you sure you want to download Batch `,(0,K.jsx)(`strong`,{children:Me}),`, School Year `,(0,K.jsx)(`strong`,{children:Pe}),`,`,` `,(0,K.jsx)(`strong`,{children:Ie}),`?`]})]}),(0,K.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`description`}),`The CSV will contain `,Ur?.recordCount??0,` records and`,` `,Ur?.accountCount??0,` matched student accounts.`]}),(0,K.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>Le(``),type:`button`,children:`No, Go Back`}),(0,K.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>ha(Me,Pe,Ie),type:`button`,children:`Yes, Download CSV`})]})]})]}),Re&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close batch delete modal`,className:`admin-modal-backdrop`,onClick:Ma,type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Delete Batch`}),(0,K.jsx)(`h2`,{id:`admin-batch-delete-title`,children:`Choose Batch`}),(0,K.jsx)(`p`,{children:`Select a batch to delete all information records under that batch.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close batch delete`,className:`admin-modal-close`,disabled:ut,onClick:Ma,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsx)(`div`,{className:`admin-school-year-downloads`,children:Pi.map(({batchId:e,recordCount:t})=>(0,K.jsxs)(`button`,{className:`admin-school-year-button admin-school-year-button--danger`,disabled:ut,onClick:()=>V({batchId:e,recordCount:t}),type:`button`,children:[(0,K.jsx)(`span`,{children:e}),(0,K.jsxs)(`strong`,{children:[t,` `,t===1?`record`:`records`]})]},e))}),(0,K.jsxs)(`div`,{className:`admin-pagination admin-batch-export-pagination`,children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsx)(`strong`,{children:Fi}),`-`,(0,K.jsx)(`strong`,{children:Ii}),` `,`of `,(0,K.jsx)(`strong`,{children:Rr.length}),` batches`]}),(0,K.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,K.jsx)(`button`,{"aria-label":`Previous batch delete page`,disabled:Mi===1||ut,onClick:()=>Qi(Mi-1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:ji},(e,t)=>{let n=t+1;return(0,K.jsx)(`button`,{"aria-current":Mi===n?`page`:void 0,className:Mi===n?`admin-page-button--active`:void 0,disabled:ut,onClick:()=>Qi(n),type:`button`,children:n},n)}),(0,K.jsx)(`button`,{"aria-label":`Next batch delete page`,disabled:Mi===ji||ut,onClick:()=>Qi(Mi+1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,K.jsx)(`div`,{className:`admin-upload-actions`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ut,onClick:Ma,type:`button`,children:`Cancel`})})]})]}),tt&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-backdrop`,onClick:()=>{ut||V(null)},type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-modal-card--applicant-years`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Confirm Delete`}),(0,K.jsx)(`h2`,{id:`admin-batch-delete-confirm-title`,children:`Delete this batch information?`}),(0,K.jsx)(`p`,{children:`Are you sure you want to delete this batch information?`})]}),(0,K.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-close`,disabled:ut,onClick:()=>V(null),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-confirm-body`,children:[(0,K.jsx)(`strong`,{children:tt.batchId}),(0,K.jsxs)(`p`,{children:[`This will move `,tt.recordCount,` `,tt.recordCount===1?`record`:`records`,` from this batch to the archive, where they can be restored.`]})]}),(0,K.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ut,onClick:()=>V(null),type:`button`,children:`Cancel`}),(0,K.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:ut,onClick:Ha,type:`button`,children:ut?`Deleting...`:`Delete Batch`})]})]})]}),M&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-unifast-open-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-backdrop`,onClick:wa,type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`UNIFAST Portal`}),(0,K.jsx)(`h2`,{id:`admin-unifast-open-title`,children:`Open the portal?`}),(0,K.jsx)(`p`,{children:`Do you want to open the portal for receiving applicants information?`})]}),(0,K.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-close`,onClick:wa,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsx)(`div`,{className:`admin-confirm-body`,children:(0,K.jsx)(`p`,{children:`Select Yes to view applicants by course and prepare a course download.`})}),(0,K.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:wa,type:`button`,children:`No`}),(0,K.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>{oe(!1),me(1),P(!0)},type:`button`,children:`Yes`})]})]})]}),N&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-unifast-courses-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-receiving-applicants-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-backdrop`,onClick:wa,type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-receiving-applicants-modal`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header admin-receiving-applicants-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receiving Applicants Information`}),(0,K.jsx)(`h2`,{id:`admin-unifast-courses-title`,children:`Receiving Applicants Management`}),(0,K.jsx)(`p`,{children:`Manage applicant records, application availability, and downloads.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-close`,onClick:wa,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-receiving-applicants-controls`,children:[(0,K.jsxs)(`div`,{className:`admin-receiving-status`,children:[(0,K.jsx)(`span`,{className:`admin-receiving-status__indicator${mn?.isReceivingApplicants?` is-open`:` is-closed`}`}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`Landing Portal Status`}),(0,K.jsx)(`strong`,{children:mn===void 0?`Checking status`:mn.isReceivingApplicants?`OPEN`:`CLOSED`}),(0,K.jsx)(`small`,{children:mn?.isReceivingApplicants?`Receiving ${lr} applicants`:`Not receiving ${lr} applicants`})]})]}),(0,K.jsxs)(`div`,{className:`admin-receiving-applicants-actions`,children:[(0,K.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:mn===void 0||mn?.isReceivingApplicants,onClick:()=>{an(1),Te(!0)},type:`button`,children:`Receive Applicants`}),(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:mn===void 0||!mn?.isReceivingApplicants,onClick:()=>Sa(!1),type:`button`,children:`Close Applicants`}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--primary admin-download-applicants-button`,onClick:Ta,type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`download`}),`Download Applicants`]})]})]}),(0,K.jsxs)(`div`,{className:`admin-receiving-applicants-body`,children:[(0,K.jsxs)(`div`,{className:`admin-receiving-grantee-toolbar`,children:[(0,K.jsxs)(`label`,{className:`admin-receiving-grantee-search`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`search`}),(0,K.jsx)(`input`,{"aria-label":`Search applicants`,onChange:e=>{se(e.target.value),me(1)},placeholder:`Search student ID, applicant name, email, or course`,type:`search`,value:L})]}),(0,K.jsxs)(`select`,{"aria-label":`Filter applicants by course`,onChange:e=>{le(e.target.value),me(1)},value:ce,children:[(0,K.jsx)(`option`,{value:``,children:`All Courses`}),mr.map(e=>(0,K.jsx)(`option`,{value:e,children:e},e))]}),(0,K.jsxs)(`select`,{"aria-label":`Filter applicants by application year`,onChange:e=>{de(e.target.value),me(1)},value:ue,children:[(0,K.jsx)(`option`,{value:``,children:`All Application Years`}),hr.map(e=>(0,K.jsx)(`option`,{value:e,children:e},e))]}),(0,K.jsxs)(`select`,{"aria-label":`Filter applicants by status`,onChange:e=>{fe(e.target.value),me(1)},value:R,children:[(0,K.jsx)(`option`,{value:``,children:`All Statuses`}),gr.map(e=>(0,K.jsx)(`option`,{value:e,children:e},e))]}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--secondary admin-receiving-reset`,onClick:()=>{se(``),le(``),de(``),fe(``),me(1)},type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`filter_alt_off`}),`Reset Filters`]})]}),(0,K.jsx)(`div`,{className:`admin-receiving-grantee-table-wrap`,children:(0,K.jsxs)(`table`,{className:`admin-receiving-grantee-table`,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{children:`Student ID`}),(0,K.jsx)(`th`,{children:`Applicant Name`}),(0,K.jsx)(`th`,{children:`Course`}),(0,K.jsx)(`th`,{children:`Year Level`}),(0,K.jsx)(`th`,{children:`Application Year`}),(0,K.jsx)(`th`,{children:`Status`}),(0,K.jsx)(`th`,{children:`Mobile Number`}),(0,K.jsx)(`th`,{children:`Details`})]})}),(0,K.jsx)(`tbody`,{children:pn===void 0?(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-receiving-empty`,colSpan:8,children:`Loading applicants...`})}):vr.length===0?(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-receiving-empty`,colSpan:8,children:Fn.length?`No applicants match these filters.`:`No applicant records are available yet.`})}):wr.map(e=>{let t=[e.firstName,e.middleName,e.lastName,e.extensionName].filter(Boolean).join(` `);return(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{children:e.studentId||`—`}),(0,K.jsx)(`td`,{children:t||`—`}),(0,K.jsx)(`td`,{children:ar(e)||`—`}),(0,K.jsx)(`td`,{children:e.year||e.yearLevelCode||`—`}),(0,K.jsx)(`td`,{children:or(e)||`—`}),(0,K.jsx)(`td`,{children:(0,K.jsx)(Zn,{status:e.status,tone:Qn(e.status)})}),(0,K.jsx)(`td`,{children:e.mobileNumber||`—`}),(0,K.jsx)(`td`,{children:(0,K.jsxs)(`button`,{"aria-label":`View details for applicant ${e.studentId||``}`,className:`admin-receiving-view-button`,onClick:()=>he(e),type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`visibility`}),`View`]})})]},e._id)})})]})})]}),(0,K.jsxs)(`footer`,{className:`admin-receiving-applicants-footer`,children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsxs)(`strong`,{children:[Er,`–`,Dr]}),` of `,(0,K.jsx)(`strong`,{children:vr.length}),` applicants`]}),(0,K.jsxs)(`div`,{className:`admin-pagination__buttons`,"aria-label":`Applicant records pages`,children:[(0,K.jsx)(`button`,{"aria-label":`Previous page`,disabled:xr<=1,onClick:()=>me(e=>Math.max(1,e-1)),type:`button`,children:`‹`}),Tr.map((e,t)=>typeof e==`string`?(0,K.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`…`},`ellipsis-${t}`):(0,K.jsx)(`button`,{"aria-current":xr===e?`page`:void 0,className:xr===e?`admin-page-button--active`:``,onClick:()=>me(e),type:`button`,children:e},e)),(0,K.jsx)(`button`,{"aria-label":`Next page`,disabled:xr>=yr,onClick:()=>me(e=>Math.min(yr,e+1)),type:`button`,children:`›`})]}),(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary admin-receiving-close`,onClick:wa,type:`button`,children:`Close`})]})]})]}),z&&(0,K.jsxs)(`div`,{className:`admin-modal-overlay admin-receiving-details-overlay`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`admin-receiving-details-title`,children:[(0,K.jsx)(`button`,{"aria-label":`Close applicant details`,className:`admin-modal-backdrop`,onClick:()=>he(null),type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-receiving-details-card`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Applicant Record`}),(0,K.jsx)(`h2`,{id:`admin-receiving-details-title`,children:`Applicant Details`}),(0,K.jsx)(`p`,{children:`Application information submitted to the Scholarship Office.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close applicant details`,className:`admin-modal-close`,onClick:()=>he(null),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-receiving-details-body`,children:[(0,K.jsx)(`div`,{className:`admin-receiving-details-grid`,children:[[`Student ID`,z.studentId],[`Applicant Name`,[z.firstName,z.middleName,z.lastName,z.extensionName].filter(Boolean).join(` `)],[`Course`,ar(z)],[`Year Level`,z.year||z.yearLevelCode],[`Application Year`,or(z)],[`Status`,z.status],[`Gender`,z.gender],[`Birth Date`,z.birthDate],[`Mobile Number`,z.mobileNumber],[`Email Address`,z.emailAddress],[`Address`,z.address]].map(([e,t])=>(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:e}),(0,K.jsx)(`strong`,{children:t||`—`})]},e))}),(0,K.jsxs)(`section`,{className:`admin-receiving-documents`,"aria-labelledby":`admin-receiving-documents-title`,children:[(0,K.jsxs)(`div`,{className:`admin-receiving-documents__heading`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`folder_open`}),(0,K.jsx)(`h3`,{id:`admin-receiving-documents-title`,children:`Submitted ID Files`})]}),(0,K.jsx)(`p`,{children:`Open a submitted PDF in a new tab.`})]}),(0,K.jsx)(`div`,{className:`admin-receiving-documents-grid`,children:[{label:`Birth Certificate (PSA)`,url:z.psaFileUrl,fileName:z.psaFileName,icon:`picture_as_pdf`},{label:`School ID`,url:z.schoolIdFileUrl,fileName:z.schoolIdFileName,icon:`badge`},{label:`COR / Study Load`,url:z.corFileUrl,fileName:z.corFileName,icon:`description`},{label:`PWD ID`,url:z.pwdIdFileUrl,fileName:z.pwdIdFileName,icon:`accessible`},{label:`4Ps ID`,url:z.fourPsFileUrl,fileName:z.fourPsFileName,icon:`family_restroom`}].map(({fileName:e,icon:t,label:n,url:r})=>(0,K.jsxs)(`div`,{className:`admin-receiving-document-card`,children:[(0,K.jsx)(`span`,{className:`admin-receiving-document-card__icon material-symbols-outlined`,"aria-hidden":`true`,children:t}),(0,K.jsxs)(`div`,{className:`admin-receiving-document-card__copy`,children:[(0,K.jsx)(`strong`,{children:n}),(0,K.jsx)(`small`,{children:r?e||`PDF document`:`Not submitted`})]}),r?(0,K.jsxs)(`a`,{className:`admin-receiving-document-view`,href:r,rel:`noopener noreferrer`,target:`_blank`,"aria-label":`View ${n}`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`visibility`}),`View`]}):(0,K.jsx)(`span`,{className:`admin-receiving-document-missing`,children:`—`})]},n))})]})]}),(0,K.jsx)(`div`,{className:`admin-receiving-details-footer`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>he(null),type:`button`,children:`Done`})})]})]}),F&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-applicant-download-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-applicant-download-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close applicant download dialog`,className:`admin-modal-backdrop`,disabled:Yt,onClick:Ea,type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-applicant-download-card`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receiving Applicants Information`}),(0,K.jsx)(`h2`,{id:`admin-applicant-download-title`,children:`Download Applicant Records`}),(0,K.jsxs)(`p`,{children:[`Choose all courses or select the courses to include in your `,lr,` CSV.`]})]}),(0,K.jsx)(`button`,{"aria-label":`Close applicant download dialog`,className:`admin-modal-close`,disabled:Yt,onClick:Ea,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-applicant-download-body`,children:[dr===void 0?(0,K.jsxs)(`div`,{className:`admin-applicant-download-loading`,role:`status`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`progress_activity`}),`Loading live applicant counts for `,lr,`...`]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`div`,{className:`admin-applicant-download-options`,children:[(0,K.jsxs)(`label`,{className:`admin-applicant-download-option${ge===`all`?` is-selected`:``}`,children:[(0,K.jsx)(`input`,{checked:ge===`all`,name:`applicant-download-mode`,onChange:()=>{_e(`all`),Ce(``)},type:`radio`,value:`all`}),(0,K.jsxs)(`span`,{className:`admin-applicant-download-option__copy`,children:[(0,K.jsx)(`strong`,{children:`All Courses`}),(0,K.jsx)(`small`,{children:`Include every course with applicant records.`})]}),(0,K.jsxs)(`span`,{className:`admin-applicant-download-count`,children:[dr.totalCount,` records`]})]}),(0,K.jsxs)(`label`,{className:`admin-applicant-download-option${ge===`specific`?` is-selected`:``}`,children:[(0,K.jsx)(`input`,{checked:ge===`specific`,name:`applicant-download-mode`,onChange:()=>{_e(`specific`),Ce(``)},type:`radio`,value:`specific`}),(0,K.jsxs)(`span`,{className:`admin-applicant-download-option__copy`,children:[(0,K.jsx)(`strong`,{children:`Select Specific Courses`}),(0,K.jsx)(`small`,{children:`Choose one or more courses to include.`})]}),(0,K.jsxs)(`span`,{className:`admin-applicant-download-count`,children:[ve.length,` selected`]})]})]}),ge===`specific`&&(0,K.jsxs)(`div`,{className:`admin-applicant-course-picker`,children:[(0,K.jsxs)(`div`,{className:`admin-applicant-course-picker__toolbar`,children:[(0,K.jsxs)(`label`,{className:`admin-applicant-course-search`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`search`}),(0,K.jsx)(`input`,{"aria-label":`Search courses`,onChange:e=>xe(e.target.value),placeholder:`Search courses`,type:`search`,value:be})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`button`,{className:`admin-link-button`,onClick:()=>ye(Jn),type:`button`,children:`Select all`}),(0,K.jsx)(`button`,{className:`admin-link-button`,onClick:()=>ye([]),type:`button`,children:`Deselect all`})]})]}),(0,K.jsx)(`div`,{className:`admin-applicant-course-list`,children:fr.length?fr.map(e=>(0,K.jsxs)(`label`,{className:`admin-applicant-course-item`,children:[(0,K.jsx)(`input`,{checked:ve.includes(e),onChange:()=>Da(e),type:`checkbox`}),(0,K.jsx)(`span`,{children:e}),(0,K.jsx)(`strong`,{children:dr.counts?.[e]??0})]},e)):(0,K.jsxs)(`p`,{className:`admin-applicant-course-empty`,children:[`No courses match “`,be,`”.`]})})]}),(0,K.jsxs)(`div`,{className:`admin-applicant-download-summary`,children:[(0,K.jsxs)(`span`,{children:[`Matching records for `,lr]}),(0,K.jsx)(`strong`,{children:pr.toLocaleString()})]}),pr===0&&(0,K.jsxs)(`p`,{className:`admin-applicant-download-empty`,children:[`No applicant records match this selection for `,lr,`.`]})]}),Se&&(0,K.jsx)(`p`,{className:`admin-applicant-download-error`,role:`alert`,children:Se})]}),(0,K.jsxs)(`div`,{className:`admin-applicant-download-footer`,children:[(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Yt,onClick:Ea,type:`button`,children:`Cancel`}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:dr===void 0||!pr||ge===`specific`&&!ve.length||Yt,onClick:Oa,type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`download`}),Yt?`Preparing CSV...`:`Download CSV (${pr.toLocaleString()} Applicants)`]})]})]})]}),we&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-applicant-year-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-backdrop`,onClick:()=>{Te(!1),an(1)},type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receive Applicants`}),(0,K.jsx)(`h2`,{id:`admin-applicant-year-title`,children:`Choose Application Year`}),(0,K.jsx)(`p`,{children:`Select the year for the new applicant cycle. Counts and downloads will use this year.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-close`,onClick:()=>{Te(!1),an(1)},type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsx)(`div`,{className:`admin-year-options`,children:Mr.map(e=>(0,K.jsxs)(`button`,{className:`admin-year-option`,onClick:()=>Ca(e),type:`button`,children:[(0,K.jsx)(`span`,{children:e}),(0,K.jsxs)(`strong`,{children:[Fn.filter(t=>or(t)===e).length,` `,`existing applicants`]})]},e))}),(0,K.jsxs)(`div`,{className:`admin-pagination admin-applicant-year-pagination`,children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsx)(`strong`,{children:Pr}),` to`,` `,(0,K.jsx)(`strong`,{children:Fr}),` of`,` `,(0,K.jsx)(`strong`,{children:Or.length}),` years`]}),(0,K.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,K.jsx)(`button`,{"aria-label":`Previous application years page`,disabled:Ar===1||Or.length===0,onClick:()=>na(Ar-1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Nr.map(e=>typeof e==`number`?(0,K.jsx)(`button`,{className:Ar===e?`admin-page-button--active`:void 0,disabled:Or.length===0,onClick:()=>na(e),type:`button`,children:e},e):(0,K.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,K.jsx)(`button`,{"aria-label":`Next application years page`,disabled:Ar===kr||Or.length===0,onClick:()=>na(Ar+1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,K.jsx)(`div`,{className:`admin-upload-actions`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>{Te(!1),an(1)},type:`button`,children:`Cancel`})})]})]}),Ee&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-course-applicants-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-backdrop`,onClick:ra,type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-course-applicants-modal`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Course Applicants Information`}),(0,K.jsx)(`h2`,{id:`admin-course-applicants-title`,children:`Applicants Table`}),(0,K.jsxs)(`p`,{children:[Ee,` applicants for `,lr,`.`]})]}),(0,K.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-close`,onClick:ra,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-course-applicants-toolbar`,children:[(0,K.jsxs)(`div`,{className:`admin-search-field admin-course-applicant-search`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,K.jsx)(`input`,{"aria-label":`Search course applicants`,placeholder:`Search applicant name, ID, email, mobile, status...`,type:`search`,value:Ut,onChange:ia})]}),(0,K.jsxs)(`div`,{className:`admin-course-applicants-toolbar__actions`,children:[(0,K.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:pn===void 0||Wr.length===0||qt||Yt,onClick:()=>Kt(!0),type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),`Delete All Applicants`]}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:pn===void 0||Wr.length===0||qt||Yt,onClick:()=>ga(Ee),type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download All Applicants Info`]})]})]}),(0,K.jsxs)(`div`,{className:`admin-course-applicants-summary`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`Total Course Applicants`}),(0,K.jsx)(`strong`,{children:Wr.length})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`Filtered Results`}),(0,K.jsx)(`strong`,{children:Gr.length})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`Rows Per Page`}),(0,K.jsx)(`strong`,{children:Wn})]})]}),(0,K.jsx)(`div`,{className:`admin-course-applicants-table-wrap`,children:(0,K.jsxs)(`table`,{className:`admin-course-applicants-table`,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{children:`No.`}),(0,K.jsx)(`th`,{children:`Student ID`}),(0,K.jsx)(`th`,{children:`Applicant Name`}),(0,K.jsx)(`th`,{children:`Gender`}),(0,K.jsx)(`th`,{children:`Birth Date`}),(0,K.jsx)(`th`,{children:`Year`}),(0,K.jsx)(`th`,{children:`Mobile No.`}),(0,K.jsx)(`th`,{children:`Email Address`}),(0,K.jsx)(`th`,{children:`Address`}),(0,K.jsx)(`th`,{children:`PSA`}),(0,K.jsx)(`th`,{children:`School ID`}),(0,K.jsx)(`th`,{children:`COR / Study Load`}),(0,K.jsx)(`th`,{children:`PWD ID PDF`}),(0,K.jsx)(`th`,{children:`4Ps ID PDF`}),(0,K.jsx)(`th`,{children:`Status`}),(0,K.jsx)(`th`,{children:`Submitted`})]})}),(0,K.jsxs)(`tbody`,{children:[pn===void 0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-empty-state`,colSpan:17,children:`Loading applicants...`})}),pn!==void 0&&Gr.length===0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-empty-state`,colSpan:17,children:`No applicants found for this course.`})}),Yr.map((e,t)=>{let n=[e.firstName,e.middleName,e.lastName,e.extensionName].filter(Boolean).join(` `)||`No name`;return(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{"data-label":`No.`,children:Jr+t+1}),(0,K.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,K.jsx)(`td`,{"data-label":`TES Details`,children:(0,K.jsxs)(`details`,{className:`admin-applicant-details`,children:[(0,K.jsx)(`summary`,{children:`View details`}),(0,K.jsxs)(`dl`,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`LRN`}),(0,K.jsx)(`dd`,{children:e.lrn||`Not provided`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`PhilSys ID`}),(0,K.jsx)(`dd`,{children:e.philSysIdNumber||`Not provided`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`4Ps ID`}),(0,K.jsx)(`dd`,{children:e.fourPsIdNumber||`Not provided`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Address`}),(0,K.jsx)(`dd`,{children:[e.streetBarangay,e.cityMunicipality,e.province,e.region,e.zipCode].filter(Boolean).join(`, `)||e.address})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Father`}),(0,K.jsx)(`dd`,{children:e.fatherInformationUnavailable?`Information unavailable`:[e.fatherFirstName,e.fatherMiddleName,e.fatherLastName].filter(Boolean).join(` `)||`Not provided`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Mother`}),(0,K.jsx)(`dd`,{children:e.motherInformationUnavailable?`Information unavailable`:[e.motherFirstName,e.motherMiddleName,e.motherLastName].filter(Boolean).join(` `)||`Not provided`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Disability`}),(0,K.jsx)(`dd`,{children:e.hasDisability?`Yes${e.disabilityType?` — ${e.disabilityType}`:``}`:`No`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Solo parent dependent`}),(0,K.jsx)(`dd`,{children:e.soloParentDependent===1?`Yes`:`No`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`First generation`}),(0,K.jsx)(`dd`,{children:e.firstGeneration===1?`Yes`:`No`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Indigenous Peoples member`}),(0,K.jsx)(`dd`,{children:e.isIndigenous?`Yes${e.indigenousGroup?` — ${e.indigenousGroup}`:``}`:`No`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Classification`}),(0,K.jsx)(`dd`,{children:e.applicantClassification||`TES Applicant`})]})]})]})}),(0,K.jsx)(`td`,{className:`admin-applicant-name`,"data-label":`Applicant Name`,children:n}),(0,K.jsx)(`td`,{"data-label":`Gender`,children:e.gender}),(0,K.jsx)(`td`,{"data-label":`Birth Date`,children:e.birthDate}),(0,K.jsx)(`td`,{"data-label":`Year`,children:e.year}),(0,K.jsx)(`td`,{"data-label":`Mobile No.`,children:e.mobileNumber}),(0,K.jsx)(`td`,{className:`admin-applicant-email`,"data-label":`Email Address`,children:e.emailAddress}),(0,K.jsx)(`td`,{className:`admin-applicant-address`,"data-label":`Address`,children:e.address}),(0,K.jsx)(`td`,{"data-label":`PSA`,children:e.psaFileUrl?(0,K.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.psaFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`}),`View PSA`]}):(0,K.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,K.jsx)(`td`,{"data-label":`School ID`,children:e.schoolIdFileUrl?(0,K.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.schoolIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`}),`View School ID`]}):(0,K.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,K.jsx)(`td`,{"data-label":`COR / Study Load`,children:e.corFileUrl?(0,K.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.corFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`description`}),`View COR`]}):(0,K.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,K.jsx)(`td`,{"data-label":`PWD ID PDF`,children:e.pwdIdFileUrl?(0,K.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.pwdIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`}),`View PWD ID`]}):(0,K.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,K.jsx)(`td`,{"data-label":`4Ps ID PDF`,children:e.fourPsFileUrl?(0,K.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.fourPsFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`}),`View 4Ps ID`]}):(0,K.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,K.jsx)(`td`,{"data-label":`Status`,children:(0,K.jsx)(Zn,{status:e.status,tone:Qn(e.status)})}),(0,K.jsx)(`td`,{"data-label":`Submitted`,children:$n(e.submittedAt)})]},e._id)})]})]})}),(0,K.jsxs)(`div`,{className:`admin-pagination admin-course-applicants-pagination`,children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsx)(`strong`,{children:Zr}),` to`,` `,(0,K.jsx)(`strong`,{children:Qr}),` of`,` `,(0,K.jsx)(`strong`,{children:Gr.length}),` applicants`]}),(0,K.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,K.jsx)(`button`,{"aria-label":`Previous course applicants page`,disabled:qr===1||Gr.length===0,onClick:()=>ta(qr-1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Xr.map(e=>typeof e==`number`?(0,K.jsx)(`button`,{className:qr===e?`admin-page-button--active`:void 0,disabled:Gr.length===0,onClick:()=>ta(e),type:`button`,children:e},e):(0,K.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,K.jsx)(`button`,{"aria-label":`Next course applicants page`,disabled:qr===Kr||Gr.length===0,onClick:()=>ta(qr+1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,K.jsx)(`div`,{className:`admin-upload-actions`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:ra,type:`button`,children:`Close`})})]})]}),Gt&&Ee&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-course-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close applicant deletion warning`,className:`admin-modal-backdrop`,onClick:()=>{qt||Kt(!1)},type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,K.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`warning`})}),(0,K.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Move to Archive`}),(0,K.jsx)(`h2`,{id:`admin-course-delete-confirm-title`,children:`Delete all course applications?`}),(0,K.jsxs)(`p`,{children:[`Are you sure you want to delete all`,` `,(0,K.jsx)(`strong`,{children:Wr.length}),` applications for`,` `,(0,K.jsx)(`strong`,{children:Ee}),`, application year`,` `,(0,K.jsx)(`strong`,{children:lr}),`?`]})]}),(0,K.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`report`}),`Applicant records will move to the archive. Their uploaded PDFs stay available so the records can be restored.`]}),(0,K.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:qt,onClick:()=>Kt(!1),type:`button`,children:`No, Keep Applications`}),(0,K.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:qt,onClick:_a,type:`button`,children:qt?`Deleting...`:`Yes, Delete All`})]})]})]}),Yt&&(0,K.jsx)(`div`,{"aria-labelledby":`admin-course-download-progress-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-progress-card`,children:[(0,K.jsx)(`div`,{className:`admin-progress-icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`downloading`})}),(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Course Applicants Information`}),(0,K.jsx)(`h2`,{id:`admin-course-download-progress-title`,children:`Preparing Applicant Download`}),(0,K.jsxs)(`p`,{children:[`Creating the CSV file for `,Ee,`.`]}),(0,K.jsx)(`div`,{"aria-label":`Download progress ${Zt}%`,"aria-valuemax":`100`,"aria-valuemin":`0`,"aria-valuenow":Zt,className:`admin-progress-track`,role:`progressbar`,children:(0,K.jsx)(`span`,{style:{width:`${Zt}%`}})}),(0,K.jsxs)(`strong`,{className:`admin-progress-value`,children:[Zt,`%`]})]})}),$t&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-course-success-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close applicant action success message`,className:`admin-modal-backdrop`,onClick:()=>en(null),type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card admin-success-card`,children:[(0,K.jsx)(`div`,{className:`admin-success-card__icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,K.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Completed Successfully`}),(0,K.jsx)(`h2`,{id:`admin-course-success-title`,children:$t.type===`download`?`Applicant download is ready`:`Applications deleted`}),(0,K.jsxs)(`p`,{children:[$t.count,` applicant`,` `,$t.count===1?`record`:`records`,` for`,` `,(0,K.jsx)(`strong`,{children:$t.course}),`, application year`,` `,(0,K.jsx)(`strong`,{children:$t.year}),` `,$t.type===`download`?`were added to the CSV file.`:`were deleted successfully.`]})]}),(0,K.jsx)(`div`,{className:`admin-confirm-card__actions admin-success-card__actions`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>en(null),type:`button`,children:`Done`})})]})]}),Be&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-school-id-download-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close School ID download modal`,className:`admin-modal-backdrop`,onClick:oa,type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,K.jsx)(`h2`,{id:`admin-school-id-download-title`,children:`Choose School Year`}),(0,K.jsx)(`p`,{children:`Download all uploaded School ID files for a specific School Year.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close School ID download`,className:`admin-modal-close`,disabled:qe,onClick:oa,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsx)(`div`,{className:`admin-school-year-downloads`,children:Bi.map(({fileCount:e,schoolYear:t})=>(0,K.jsxs)(`button`,{className:`admin-school-year-button`,disabled:qe,onClick:()=>aa(t),type:`button`,children:[(0,K.jsx)(`span`,{children:t}),(0,K.jsx)(`strong`,{children:qe?`Preparing...`:`${e} ${e===1?`file`:`files`}`})]},t))}),(0,K.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsx)(`strong`,{children:Vi}),`-`,(0,K.jsx)(`strong`,{children:Hi}),` of`,` `,(0,K.jsx)(`strong`,{children:si.length}),` school years`]}),(0,K.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,K.jsx)(`button`,{"aria-label":`Previous School ID page`,disabled:Ri===1||qe,onClick:()=>$i(Ri-1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Li},(e,t)=>{let n=t+1;return(0,K.jsx)(`button`,{"aria-current":Ri===n?`page`:void 0,className:Ri===n?`admin-page-button--active`:void 0,disabled:qe,onClick:()=>$i(n),type:`button`,children:n},n)}),(0,K.jsx)(`button`,{"aria-label":`Next School ID page`,disabled:Ri===Li||qe,onClick:()=>$i(Ri+1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,K.jsx)(`div`,{className:`admin-upload-actions`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:qe,onClick:oa,type:`button`,children:`Cancel`})})]})]}),He&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-school-id-batch-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close School ID batch modal`,className:`admin-modal-backdrop`,onClick:()=>{qe||Ue(``)},type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,K.jsx)(`h2`,{id:`admin-school-id-batch-title`,children:`Choose Batch`}),(0,K.jsxs)(`p`,{children:[`Download uploaded School ID files for `,He,` by batch. File names include Student ID, last name, first name, middle name, and batch no.`]})]}),(0,K.jsx)(`button`,{"aria-label":`Close School ID batch download`,className:`admin-modal-close`,disabled:qe,onClick:()=>Ue(``),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-school-year-downloads`,children:[Ki.map(({batchId:e,fileCount:t})=>(0,K.jsxs)(`button`,{className:`admin-school-year-button`,disabled:qe||Ye,onClick:()=>sa(e,t),type:`button`,children:[(0,K.jsx)(`span`,{children:e}),(0,K.jsxs)(`strong`,{children:[t,` `,t===1?`file`:`files`]})]},e)),ci.length===0&&(0,K.jsx)(`div`,{className:`admin-modal-empty-state`,children:`No batches with uploaded School ID files were found for this School Year.`})]}),(0,K.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsx)(`strong`,{children:qi}),`-`,(0,K.jsx)(`strong`,{children:Ji}),` of`,` `,(0,K.jsx)(`strong`,{children:ci.length}),` batches`]}),(0,K.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,K.jsx)(`button`,{"aria-label":`Previous School ID batch page`,disabled:Wi===1||qe,onClick:()=>ea(Wi-1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Ui},(e,t)=>{let n=t+1;return(0,K.jsx)(`button`,{"aria-current":Wi===n?`page`:void 0,className:Wi===n?`admin-page-button--active`:void 0,disabled:qe,onClick:()=>ea(n),type:`button`,children:n},n)}),(0,K.jsx)(`button`,{"aria-label":`Next School ID batch page`,disabled:Wi===Ui||qe,onClick:()=>ea(Wi+1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,K.jsx)(`div`,{className:`admin-upload-actions`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:qe,onClick:()=>Ue(``),type:`button`,children:`Back`})})]})]}),B&&!Ge&&!qe&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-school-id-batch-action-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close School ID batch actions`,className:`admin-modal-backdrop`,onClick:ca,type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(`p`,{className:`admin-modal-kicker`,children:[`Batch `,B.batchId]}),(0,K.jsx)(`h2`,{id:`admin-school-id-batch-action-title`,children:`Manage School ID Files`}),(0,K.jsxs)(`p`,{children:[B.fileCount,` `,B.fileCount===1?`file`:`files`,` for School Year`,` `,B.schoolYear,`.`]})]}),(0,K.jsx)(`button`,{"aria-label":`Close School ID batch actions`,className:`admin-modal-close`,onClick:ca,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-school-id-actions`,children:[(0,K.jsxs)(`button`,{className:`admin-school-id-action admin-school-id-action--download`,onClick:()=>pa(B.schoolYear,B.batchId),type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`folder_zip`}),(0,K.jsxs)(`span`,{children:[(0,K.jsx)(`strong`,{children:`Download All IDs`}),(0,K.jsx)(`small`,{children:`Create one ZIP file for this batch.`})]})]}),(0,K.jsxs)(`button`,{className:`admin-school-id-action admin-school-id-action--delete`,onClick:()=>Ke(!0),type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),(0,K.jsxs)(`span`,{children:[(0,K.jsx)(`strong`,{children:`Delete All IDs`}),(0,K.jsx)(`small`,{children:`Remove the Drive files and clear their Convex links.`})]})]})]}),(0,K.jsx)(`div`,{className:`admin-upload-actions`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:ca,type:`button`,children:`Back`})})]})]}),Ge&&B&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-school-id-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close School ID delete warning`,className:`admin-modal-backdrop`,onClick:()=>{Ye||Ke(!1)},type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,K.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`warning`})}),(0,K.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Move to Archive`}),(0,K.jsx)(`h2`,{id:`admin-school-id-delete-confirm-title`,children:`Delete all IDs in this batch?`}),(0,K.jsxs)(`p`,{children:[`Are you sure you want to delete all`,` `,(0,K.jsx)(`strong`,{children:B.fileCount}),` School ID files from Batch`,` `,(0,K.jsx)(`strong`,{children:B.batchId}),`?`]})]}),(0,K.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`report`}),`The file links will move to the archive and can be restored. The Drive PDFs remain available until their archive entries are permanently deleted.`]}),(0,K.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Ye,onClick:()=>Ke(!1),type:`button`,children:`No, Keep Files`}),(0,K.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:Ye,onClick:ma,type:`button`,children:Ye?`Deleting...`:`Yes, Delete All`})]})]})]}),qe&&B&&(0,K.jsx)(`div`,{"aria-labelledby":`admin-school-id-progress-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-progress-card`,children:[(0,K.jsx)(`div`,{className:`admin-progress-icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`downloading`})}),(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,K.jsx)(`h2`,{id:`admin-school-id-progress-title`,children:`Preparing Batch Download`}),(0,K.jsxs)(`p`,{children:[`Downloading Batch `,B.batchId,` files and creating the ZIP.`]}),(0,K.jsx)(`div`,{"aria-label":`Download progress ${Ze}%`,"aria-valuemax":`100`,"aria-valuemin":`0`,"aria-valuenow":Ze,className:`admin-progress-track`,role:`progressbar`,children:(0,K.jsx)(`span`,{style:{width:`${Ze}%`}})}),(0,K.jsxs)(`strong`,{className:`admin-progress-value`,children:[Ze,`%`]})]})}),$e&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-school-id-success-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close School ID success message`,className:`admin-modal-backdrop`,onClick:()=>et(null),type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card admin-success-card`,children:[(0,K.jsx)(`div`,{className:`admin-success-card__icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,K.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Completed Successfully`}),(0,K.jsx)(`h2`,{id:`admin-school-id-success-title`,children:$e.type===`download`?`Batch download is ready`:`Batch ID files deleted`}),(0,K.jsxs)(`p`,{children:[$e.count,` School ID`,` `,$e.count===1?`file`:`files`,` for Batch`,` `,(0,K.jsx)(`strong`,{children:$e.batchId}),`, School Year`,` `,(0,K.jsx)(`strong`,{children:$e.schoolYear}),` `,$e.type===`download`?`were added to the ZIP file.`:`were deleted successfully.`]})]}),(0,K.jsx)(`div`,{className:`admin-confirm-card__actions admin-success-card__actions`,children:(0,K.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>et(null),type:`button`,children:`Done`})})]})]}),_t&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-edit-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close edit record modal`,className:`admin-modal-backdrop`,onClick:Ia,type:`button`}),(0,K.jsxs)(`form`,{className:`admin-modal-card admin-modal-card--edit`,onSubmit:za,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header admin-modal-header--edit`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Edit Record`}),(0,K.jsx)(`h2`,{id:`admin-edit-record-title`,children:`Edit Grantee Information`}),(0,K.jsx)(`p`,{children:`Update the selected grantee record details.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close edit record`,className:`admin-modal-close`,disabled:Ct,onClick:Ia,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-edit-summary`,children:[(0,K.jsx)(`div`,{className:`admin-edit-summary__icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`person`})}),(0,K.jsxs)(`div`,{className:`admin-edit-summary__text`,children:[(0,K.jsx)(`span`,{children:`Selected Record`}),(0,K.jsx)(`strong`,{children:_t.studentId||`No Student ID`}),(0,K.jsx)(Zn,{status:_t.status,tone:Qn(_t.status)})]})]}),(0,K.jsxs)(`div`,{className:`admin-record-details admin-record-details--responsive`,children:[(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`span`,{children:`No.`}),(0,K.jsx)(`input`,{value:yt?.no??``,onChange:Ra(`no`)})]}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`span`,{children:`TES Award Number`}),(0,K.jsx)(`input`,{value:yt?.tesAwardNumber??``,onChange:Ra(`tesAwardNumber`)})]}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`span`,{children:`Student ID`}),(0,K.jsx)(`input`,{value:yt?.studentId??``,onChange:Ra(`studentId`)})]}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`span`,{children:`Last Name`}),(0,K.jsx)(`input`,{value:yt?.lastName??``,onChange:Ra(`lastName`)})]}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`span`,{children:`First Name`}),(0,K.jsx)(`input`,{value:yt?.firstName??``,onChange:Ra(`firstName`)})]}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`span`,{children:`MI.`}),(0,K.jsx)(`input`,{value:yt?.middleInitial??``,onChange:Ra(`middleInitial`)})]}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`span`,{children:`Batch No.`}),(0,K.jsx)(`input`,{value:yt?.batchId??``,onChange:Ra(`batchId`)})]}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`span`,{children:`Status`}),(0,K.jsxs)(`select`,{value:yt?.status??``,onChange:Ra(`status`),children:[(0,K.jsx)(`option`,{value:``,children:`Select Status`}),(0,K.jsx)(`option`,{children:`Grantee`}),(0,K.jsx)(`option`,{children:`Validated`}),(0,K.jsx)(`option`,{children:`Pending`}),(0,K.jsx)(`option`,{children:`Rejected`})]})]}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`span`,{children:`Semester`}),(0,K.jsx)(`input`,{value:yt?.semester??``,onChange:Ra(`semester`)})]}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`span`,{children:`School Year`}),(0,K.jsx)(`input`,{value:yt?.schoolYear??``,onChange:Ra(`schoolYear`)})]})]}),xt&&(0,K.jsx)(`p`,{className:`admin-edit-message`,children:xt}),(0,K.jsxs)(`div`,{className:`admin-upload-actions admin-upload-actions--sticky`,children:[(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Ct,onClick:Ia,type:`button`,children:`Cancel`}),(0,K.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:Ct,type:`submit`,children:Ct?`Saving...`:`Save Changes`})]})]})]}),Oe&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-add-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close add record modal`,className:`admin-modal-backdrop`,onClick:Fa,type:`button`}),(0,K.jsxs)(`form`,{className:`admin-modal-card`,onSubmit:Wa,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Add New Record`}),(0,K.jsx)(`h2`,{id:`admin-add-record-title`,children:`Upload CSV File`}),(0,K.jsx)(`p`,{children:`Use the required template format before uploading grantee records.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close add record`,className:`admin-modal-close`,disabled:ct,onClick:Fa,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`admin-upload-body`,children:[(0,K.jsxs)(`button`,{className:`admin-button admin-button--secondary`,onClick:nr,type:`button`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download CSV Template`]}),(0,K.jsxs)(`label`,{className:`admin-upload-dropzone`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload_file`}),(0,K.jsx)(`strong`,{children:nt?nt.name:`Choose CSV file`}),(0,K.jsx)(`span`,{children:`Accepted format: downloaded CSV template`}),(0,K.jsx)(`input`,{accept:`.csv,text/csv`,disabled:ct,onChange:Ua,type:`file`})]}),(0,K.jsx)(`div`,{className:`admin-template-preview`,"aria-label":`CSV template headers`,children:Xn.map(e=>(0,K.jsx)(`span`,{children:e},e))}),it&&(0,K.jsx)(`p`,{className:`admin-upload-message`,children:it})]}),(0,K.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ct,onClick:Fa,type:`button`,children:`Cancel`}),(0,K.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:ct,type:`submit`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload`}),ct?`Uploading...`:`Upload`]})]})]})]}),b&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-user-management-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close user management modal`,className:`admin-modal-backdrop`,onClick:()=>{!S&&!w&&x(!1)},type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--users`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`User Management`}),(0,K.jsx)(`h2`,{id:`admin-user-management-title`,children:`Student Accounts`}),(0,K.jsx)(`p`,{children:`Search and manage registered student account details.`})]}),(0,K.jsx)(`button`,{"aria-label":`Close user management`,className:`admin-modal-close`,onClick:()=>x(!1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),D&&(0,K.jsx)(`p`,{className:`admin-user-message`,role:`status`,children:D}),(0,K.jsxs)(`div`,{className:`admin-search-field admin-user-search`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,K.jsx)(`input`,{"aria-label":`Search student accounts`,onChange:e=>{ae(e.target.value),j(1)},placeholder:`Search Student ID, email, phone, or Facebook link`,type:`search`,value:ie})]}),(0,K.jsx)(`div`,{className:`admin-quick-actions-table-wrap admin-users-table-wrap`,children:(0,K.jsxs)(`table`,{className:`admin-quick-actions-table admin-users-table`,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{children:`No.`}),(0,K.jsx)(`th`,{children:`Student ID`}),(0,K.jsx)(`th`,{children:`Email Address`}),(0,K.jsx)(`th`,{children:`Phone Number`}),(0,K.jsx)(`th`,{children:`Facebook Profile`}),(0,K.jsx)(`th`,{children:`Actions`})]})}),(0,K.jsxs)(`tbody`,{children:[hn===void 0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-empty-state`,colSpan:6,children:`Loading users...`})}),hn!==void 0&&di.length===0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`admin-empty-state`,colSpan:6,children:`No student accounts found.`})}),hi.map((e,t)=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{"data-label":`No.`,children:mi+t+1}),(0,K.jsx)(`td`,{"data-label":`Student ID`,children:e.schoolId||`Not provided`}),(0,K.jsx)(`td`,{"data-label":`Email Address`,children:e.email}),(0,K.jsx)(`td`,{"data-label":`Phone Number`,children:e.phoneNumber||`Not provided`}),(0,K.jsx)(`td`,{"data-label":`Facebook Profile`,children:e.facebookProfileUrl?(0,K.jsx)(`a`,{className:`admin-user-facebook-link`,href:e.facebookProfileUrl,rel:`noreferrer`,target:`_blank`,children:`View Profile`}):`Not provided`}),(0,K.jsx)(`td`,{"data-label":`Actions`,children:(0,K.jsxs)(`div`,{className:`admin-user-actions`,children:[(0,K.jsx)(`button`,{"aria-label":`Edit ${e.email}`,onClick:()=>Ka(e),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`edit`})}),(0,K.jsx)(`button`,{"aria-label":`Delete ${e.email}`,className:`admin-user-action--delete`,onClick:()=>{T(e),O(``)},type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`})})]})})]},e.id))]})]})}),(0,K.jsxs)(`div`,{className:`admin-pagination admin-user-pagination`,children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsx)(`strong`,{children:_i}),` to `,(0,K.jsx)(`strong`,{children:vi}),` of `,(0,K.jsx)(`strong`,{children:di.length}),` users`]}),(0,K.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,K.jsx)(`button`,{"aria-label":`Previous users page`,disabled:pi===1||di.length===0,onClick:()=>j(pi-1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),gi.map(e=>typeof e==`string`?(0,K.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e):(0,K.jsx)(`button`,{className:pi===e?`admin-page-button--active`:void 0,disabled:di.length===0,onClick:()=>j(e),type:`button`,children:e},e)),(0,K.jsx)(`button`,{"aria-label":`Next users page`,disabled:pi===fi||di.length===0,onClick:()=>j(pi+1),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),S&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-edit-user-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-modal-overlay--nested`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close edit user modal`,className:`admin-modal-backdrop`,onClick:()=>C(null),type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--user-form`,children:[(0,K.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`admin-modal-kicker`,children:`Edit User`}),(0,K.jsx)(`h2`,{id:`admin-edit-user-title`,children:`Update Account`})]}),(0,K.jsx)(`button`,{"aria-label":`Close edit user`,className:`admin-modal-close`,onClick:()=>C(null),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsxs)(`form`,{className:`admin-user-form`,onSubmit:async e=>{if(e.preventDefault(),!(!S||te)){ne(!0),O(``);try{let e=await En({id:S.id,email:ee.email,phoneNumber:ee.phoneNumber});if(!e.success){O(e.message);return}C(null),O(e.message)}catch(e){O(e instanceof Error?e.message:`Unable to update the user account.`)}finally{ne(!1)}}},children:[(0,K.jsxs)(`label`,{children:[`Email Address`,(0,K.jsx)(`input`,{autoComplete:`email`,name:`email`,onChange:qa,required:!0,type:`email`,value:ee.email})]}),(0,K.jsxs)(`label`,{children:[`Phone Number`,(0,K.jsx)(`input`,{autoComplete:`tel`,name:`phoneNumber`,onChange:qa,placeholder:`09123456789`,required:!0,type:`tel`,value:ee.phoneNumber})]}),D&&(0,K.jsx)(`p`,{className:`admin-user-message admin-user-message--error`,role:`alert`,children:D}),(0,K.jsxs)(`div`,{className:`admin-user-form__actions`,children:[(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>C(null),type:`button`,children:`Cancel`}),(0,K.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:te,type:`submit`,children:te?`Saving...`:`Save Changes`})]})]})]})]}),w&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-delete-user-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-modal-overlay--nested`,role:`alertdialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Cancel deleting user`,className:`admin-modal-backdrop`,onClick:()=>T(null),type:`button`}),(0,K.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--confirm`,children:[(0,K.jsx)(`div`,{className:`admin-delete-user-icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`})}),(0,K.jsx)(`h2`,{id:`admin-delete-user-title`,children:`Delete user account?`}),(0,K.jsxs)(`p`,{children:[`This moves `,(0,K.jsx)(`strong`,{children:w.email}),` to the archive, where the account can be restored.`]}),D&&(0,K.jsx)(`p`,{className:`admin-user-message admin-user-message--error`,role:`alert`,children:D}),(0,K.jsxs)(`div`,{className:`admin-user-form__actions`,children:[(0,K.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>T(null),type:`button`,children:`Cancel`}),(0,K.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:re,onClick:async()=>{if(!(!w||re)){k(!0),O(``);try{let e=await Dn({id:w.id});if(!e.success){O(e.message);return}T(null),O(e.message)}catch(e){O(e instanceof Error?e.message:`Unable to delete the user account.`)}finally{k(!1)}}},type:`button`,children:re?`Deleting...`:`Delete User`})]})]})]}),v&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-quick-actions-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-modal-overlay--support`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close Student Support modal`,className:`admin-modal-backdrop`,onClick:()=>y(!1),type:`button`}),(0,K.jsx)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--quick-actions`,children:(0,K.jsx)(In,{sessionToken:e?.sessionToken,requestCount:Mn.length,onExport:va,onClose:()=>y(!1)})})]}),(0,K.jsx)(`div`,{className:`admin-scroll-progress`,style:{"--admin-scroll":n}})]})}var Sr=`
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
  grid-template-columns: minmax(260px, 1.8fr) repeat(3, minmax(140px, 0.7fr)) 48px;
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

.admin-modal-card--quick-actions {
  display: flex;
  height: min(820px, calc(100dvh - 48px));
  flex-direction: column;
}

.admin-modal-card--quick-actions .admin-modal-header,
.admin-modal-card--quick-actions .admin-quick-actions-summary,
.admin-modal-card--quick-actions .admin-quick-actions-toolbar,
.admin-modal-card--quick-actions .admin-quick-actions-pagination {
  flex: 0 0 auto;
}

.admin-modal-card--compact {
  width: min(100%, 560px);
}

.admin-confirm-overlay {
  z-index: 90;
  background: rgba(28, 25, 23, 0.64);
  backdrop-filter: blur(12px);
}

.admin-confirm-card {
  width: min(100%, 500px);
  padding: 28px;
  text-align: center;
}

.admin-confirm-card__icon {
  display: inline-flex;
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  border: 1px solid #fecaca;
  border-radius: 20px;
  background: #fef2f2;
  color: #b91c1c;
  box-shadow: 0 12px 28px rgba(185, 28, 28, 0.12);
}

.admin-confirm-card__icon .material-symbols-outlined {
  font-size: 32px;
}

.admin-confirm-card__copy {
  margin-top: 18px;
}

.admin-confirm-card__copy h2,
.admin-confirm-card__copy p {
  margin: 0;
}

.admin-confirm-card__copy h2 {
  margin-top: 5px;
  color: var(--admin-text);
  font-size: 26px;
  font-weight: 800;
}

.admin-confirm-card__copy > p:last-child {
  margin-top: 10px;
  color: var(--admin-muted);
  font-size: 15px;
  line-height: 1.6;
}

.admin-confirm-card__copy strong {
  color: var(--admin-text);
}

.admin-confirm-card__notice {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 20px;
  border: 1px solid #fed7aa;
  border-radius: 12px;
  background: #fff7ed;
  color: #9a3412;
  font-size: 13px;
  font-weight: 800;
  line-height: 1.4;
  padding: 12px 14px;
  text-align: left;
}

.admin-confirm-card__notice .material-symbols-outlined {
  flex: 0 0 auto;
  font-size: 21px;
}

.admin-confirm-card__actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 22px;
}

.admin-confirm-card__actions .admin-button {
  width: 100%;
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

.admin-receiving-applicants-overlay {
  z-index: 70;
  padding: 0;
}

.admin-receiving-applicants-modal {
  display: flex;
  width: min(96vw, 1500px);
  height: min(94dvh, 950px);
  max-height: 94dvh;
  min-width: 0;
  flex-direction: column;
  border-radius: 22px;
  box-shadow: 0 28px 90px rgba(51, 27, 17, 0.28);
  box-sizing: border-box;
}

.admin-receiving-applicants-header {
  position: relative;
  z-index: 2;
  flex: 0 0 auto;
  padding-top: 20px;
  padding-bottom: 18px;
}

.admin-receiving-applicants-header h2 {
  font-size: clamp(21px, 2vw, 28px);
  letter-spacing: -0.025em;
}

.admin-receiving-applicants-controls {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border-bottom: 1px solid var(--admin-outline);
  background: linear-gradient(100deg, #fff9f3, #ffffff 70%);
  padding: 14px 24px;
}

.admin-receiving-status {
  display: flex;
  min-width: 190px;
  align-items: center;
  gap: 12px;
}

.admin-receiving-status > div {
  display: grid;
  gap: 3px;
}

.admin-receiving-status > div > span {
  color: var(--admin-muted);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.admin-receiving-status strong {
  color: var(--admin-text);
  font-size: 14px;
  letter-spacing: 0.04em;
}

.admin-receiving-status small {
  color: var(--admin-muted);
  font-size: 12px;
}

.admin-receiving-status__indicator {
  width: 12px;
  height: 12px;
  flex: 0 0 auto;
  border: 4px solid #d9eadd;
  border-radius: 50%;
  background: #168344;
  box-sizing: content-box;
}

.admin-receiving-status__indicator.is-closed {
  border-color: #f5dfd9;
  background: #b84b38;
}

.admin-receiving-applicants-actions {
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 9px;
}

.admin-download-applicants-button {
  box-shadow: 0 7px 18px rgba(220, 91, 12, 0.2);
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.admin-download-applicants-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 10px 23px rgba(220, 91, 12, 0.28);
}

.admin-receiving-grantee-toolbar select {
  min-width: 0;
  height: 40px;
  border: 1px solid var(--admin-outline);
  border-radius: 10px;
  background: #ffffff;
  color: var(--admin-text);
  padding: 0 12px;
  font: inherit;
  font-size: 13px;
}

.admin-receiving-applicants-body {
  display: flex;
  min-height: 0;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: hidden;
}

.admin-receiving-grantee-toolbar {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--admin-outline);
  background: #fffcf9;
  padding: 12px 24px;
}

.admin-receiving-grantee-search {
  display: flex;
  min-width: 220px;
  height: 40px;
  flex: 1 1 420px;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--admin-outline);
  border-radius: 10px;
  background: #ffffff;
  color: var(--admin-muted);
  padding: 0 11px;
}

.admin-receiving-grantee-search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--admin-text);
  font: inherit;
  font-size: 13px;
}

.admin-receiving-grantee-toolbar select {
  flex: 0 0 150px;
}

.admin-receiving-reset {
  min-height: 40px;
  flex: 0 0 auto;
  white-space: nowrap;
}

.admin-receiving-grantee-table-wrap {
  width: 100%;
  max-width: 100%;
  min-height: 0;
  min-width: 0;
  flex: 1 1 auto;
  overflow: auto;
  overscroll-behavior: contain;
}

.admin-receiving-grantee-table {
  width: 100%;
  min-width: 1260px;
  border-collapse: separate;
  border-spacing: 0;
}

.admin-receiving-grantee-table thead {
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff5ec;
}

.admin-receiving-grantee-table th,
.admin-receiving-grantee-table td {
  border-bottom: 1px solid #f0e6dd;
  padding: 12px 13px;
  color: var(--admin-text);
  font-size: 13px;
  text-align: left;
  vertical-align: middle;
  white-space: nowrap;
}

.admin-receiving-grantee-table th {
  color: var(--admin-muted);
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.055em;
  text-transform: uppercase;
}

.admin-receiving-grantee-table tbody tr:hover {
  background: #fffaf5;
}

.admin-receiving-empty {
  height: 180px;
  color: var(--admin-muted) !important;
  font-size: 14px !important;
  font-weight: 700;
  text-align: center !important;
}

.admin-receiving-view-button {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  gap: 5px;
  border: 1px solid #f4d7c2;
  border-radius: 9px;
  background: #fff8f2;
  color: var(--admin-primary-dark);
  padding: 0 9px;
  font: inherit;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
}

.admin-receiving-view-button .material-symbols-outlined {
  font-size: 17px;
}

.admin-receiving-applicants-footer {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  border-top: 1px solid var(--admin-outline);
  background: #ffffff;
  padding: 11px 20px;
}

.admin-receiving-applicants-footer p {
  margin: 0;
  color: var(--admin-muted);
  font-size: 13px;
}

.admin-receiving-applicants-footer p strong {
  color: var(--admin-text);
}

.admin-receiving-applicants-footer .admin-pagination__buttons {
  justify-content: center;
}

.admin-receiving-applicants-footer .admin-pagination__buttons button {
  width: 34px;
  height: 34px;
  border-radius: 9px;
}

.admin-receiving-applicants-footer .admin-button {
  min-height: 36px;
}

.admin-receiving-details-overlay {
  z-index: 95;
}

.admin-receiving-details-card {
  display: flex;
  width: min(100%, 680px);
  max-height: min(820px, calc(100dvh - 48px));
  flex-direction: column;
}

.admin-receiving-details-card .admin-modal-header,
.admin-receiving-details-footer {
  flex: 0 0 auto;
}

.admin-receiving-details-body {
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.admin-receiving-details-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  padding: 20px 24px;
}

.admin-receiving-details-grid > div {
  display: grid;
  min-width: 0;
  gap: 5px;
  border: 1px solid var(--admin-outline);
  border-radius: 11px;
  background: #fffdfb;
  padding: 11px 12px;
}

.admin-receiving-details-grid span {
  color: var(--admin-muted);
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.admin-receiving-details-grid strong {
  overflow-wrap: anywhere;
  color: var(--admin-text);
  font-size: 13px;
}

.admin-receiving-documents {
  margin: 0 24px 20px;
  overflow: hidden;
  border: 1px solid var(--admin-outline);
  border-radius: 14px;
  background: #fffdfb;
}

.admin-receiving-documents__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid var(--admin-outline);
  background: #fff8f1;
  padding: 12px 14px;
}

.admin-receiving-documents__heading > div {
  display: flex;
  align-items: center;
  gap: 8px;
}

.admin-receiving-documents__heading .material-symbols-outlined {
  color: var(--admin-primary-dark);
}

.admin-receiving-documents__heading h3 {
  margin: 0;
  color: var(--admin-text);
  font-size: 14px;
}

.admin-receiving-documents__heading p {
  margin: 0;
  color: var(--admin-muted);
  font-size: 11px;
}

.admin-receiving-documents-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px;
  padding: 12px;
}

.admin-receiving-document-card {
  display: flex;
  min-width: 0;
  min-height: 62px;
  align-items: center;
  gap: 9px;
  border: 1px solid #eee2d8;
  border-radius: 11px;
  background: #ffffff;
  padding: 9px 10px;
}

.admin-receiving-document-card__icon {
  display: grid;
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  place-items: center;
  border-radius: 10px;
  background: #fff1e5;
  color: var(--admin-primary-dark);
  font-size: 19px;
}

.admin-receiving-document-card__copy {
  display: grid;
  min-width: 0;
  flex: 1 1 auto;
  gap: 3px;
}

.admin-receiving-document-card__copy strong,
.admin-receiving-document-card__copy small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.admin-receiving-document-card__copy strong {
  color: var(--admin-text);
  font-size: 11px;
}

.admin-receiving-document-card__copy small {
  color: var(--admin-muted);
  font-size: 10px;
}

.admin-receiving-document-view {
  display: inline-flex;
  min-height: 32px;
  flex: 0 0 auto;
  align-items: center;
  gap: 4px;
  border: 1px solid #f0c7a8;
  border-radius: 9px;
  background: #fff8f2;
  color: var(--admin-primary-dark);
  padding: 0 8px;
  font-size: 11px;
  font-weight: 900;
  text-decoration: none;
}

.admin-receiving-document-view:hover {
  background: #ffeddd;
}

.admin-receiving-document-view .material-symbols-outlined {
  font-size: 16px;
}

.admin-receiving-document-missing {
  flex: 0 0 auto;
  color: #a79c93;
  font-size: 14px;
  font-weight: 800;
}

.admin-receiving-details-footer {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid var(--admin-outline);
  padding: 12px 24px;
}

.admin-applicant-download-launch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--admin-outline);
  background: #fffaf5;
  padding: 16px 24px;
}

.admin-applicant-download-launch > div,
.admin-applicant-download-option__copy {
  display: grid;
  gap: 4px;
}

.admin-applicant-download-launch strong {
  color: var(--admin-text);
  font-size: 14px;
  font-weight: 900;
}

.admin-applicant-download-launch span:not(.material-symbols-outlined) {
  color: var(--admin-muted);
  font-size: 13px;
}

.admin-applicant-download-overlay {
  z-index: 80;
}

.admin-applicant-download-card {
  display: flex;
  width: min(100%, 760px);
  max-height: min(780px, calc(100dvh - 48px));
  flex-direction: column;
}

.admin-applicant-download-card .admin-modal-header,
.admin-applicant-download-footer {
  flex: 0 0 auto;
}

.admin-applicant-download-body {
  display: grid;
  min-height: 0;
  gap: 16px;
  overflow-y: auto;
  padding: 20px 24px;
}

.admin-applicant-download-options {
  display: grid;
  gap: 10px;
}

.admin-applicant-download-option {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--admin-outline);
  border-radius: 14px;
  background: #ffffff;
  padding: 14px 16px;
  cursor: pointer;
}

.admin-applicant-download-option.is-selected {
  border-color: var(--admin-primary);
  background: #fff8f0;
  box-shadow: 0 0 0 2px rgba(234, 112, 25, 0.1);
}

.admin-applicant-download-option input,
.admin-applicant-course-item input {
  width: 17px;
  height: 17px;
  flex: 0 0 auto;
  accent-color: var(--admin-primary);
}

.admin-applicant-download-option__copy {
  min-width: 0;
  flex: 1;
}

.admin-applicant-download-option__copy strong {
  color: var(--admin-text);
  font-size: 14px;
}

.admin-applicant-download-option__copy small {
  color: var(--admin-muted);
  font-size: 12px;
}

.admin-applicant-download-count {
  flex: 0 0 auto;
  color: var(--admin-primary-dark);
  font-size: 12px;
  font-weight: 900;
}

.admin-applicant-course-picker {
  overflow: hidden;
  border: 1px solid var(--admin-outline);
  border-radius: 14px;
}

.admin-applicant-course-picker__toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid var(--admin-outline);
  background: #fffaf5;
  padding: 10px 12px;
}

.admin-applicant-course-picker__toolbar > div {
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
}

.admin-applicant-course-search {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 8px;
  color: var(--admin-muted);
}

.admin-applicant-course-search input {
  width: 100%;
  min-width: 100px;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--admin-text);
  font: inherit;
}

.admin-link-button {
  border: 0;
  background: transparent;
  color: var(--admin-primary-dark);
  font: inherit;
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
}

.admin-applicant-course-list {
  max-height: 240px;
  overflow-y: auto;
  padding: 4px 14px;
}

.admin-applicant-course-item {
  display: flex;
  min-height: 44px;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #f2e8df;
  color: var(--admin-text);
  font-size: 13px;
  cursor: pointer;
}

.admin-applicant-course-item:last-child {
  border-bottom: 0;
}

.admin-applicant-course-item span {
  min-width: 0;
  flex: 1;
}

.admin-applicant-course-item strong {
  color: var(--admin-muted);
  font-size: 12px;
}

.admin-applicant-course-empty,
.admin-applicant-download-empty {
  margin: 0;
  color: var(--admin-muted);
  font-size: 13px;
}

.admin-applicant-course-empty {
  padding: 18px 8px;
  text-align: center;
}

.admin-applicant-download-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  background: #fff8f0;
  color: var(--admin-muted);
  padding: 12px 14px;
  font-size: 13px;
}

.admin-applicant-download-summary strong {
  color: var(--admin-primary-dark);
  font-size: 16px;
}

.admin-applicant-download-loading {
  display: flex;
  min-height: 180px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--admin-muted);
  font-size: 14px;
}

.admin-applicant-download-loading .material-symbols-outlined {
  color: var(--admin-primary);
  animation: admin-progress-pulse 1s ease-in-out infinite;
}

.admin-applicant-download-error {
  margin: 0;
  border: 1px solid #f1c7c0;
  border-radius: 10px;
  background: #fff4f2;
  color: #ad3528;
  padding: 10px 12px;
  font-size: 13px;
}

.admin-applicant-download-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid var(--admin-outline);
  background: #ffffff;
  padding: 14px 24px;
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

.admin-school-id-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  padding: 24px;
}

.admin-school-id-action {
  display: flex;
  min-height: 126px;
  align-items: flex-start;
  gap: 14px;
  border: 1px solid var(--admin-outline);
  border-radius: 16px;
  background: #ffffff;
  color: var(--admin-text);
  cursor: pointer;
  font: inherit;
  padding: 20px;
  text-align: left;
  transition: border-color 160ms ease, background 160ms ease, transform 160ms ease;
}

.admin-school-id-action:hover {
  transform: translateY(-2px);
}

.admin-school-id-action > .material-symbols-outlined {
  display: inline-flex;
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  font-size: 25px;
}

.admin-school-id-action span:last-child {
  display: grid;
  gap: 6px;
}

.admin-school-id-action strong,
.admin-school-id-action small {
  display: block;
}

.admin-school-id-action strong {
  font-size: 16px;
  font-weight: 900;
}

.admin-school-id-action small {
  color: var(--admin-muted);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.45;
}

.admin-school-id-action--download:hover {
  border-color: var(--admin-primary);
  background: #fff7ed;
}

.admin-school-id-action--download > .material-symbols-outlined {
  background: #fff7ed;
  color: var(--admin-primary-dark);
}

.admin-school-id-action--delete:hover {
  border-color: #fca5a5;
  background: #fff1f2;
}

.admin-school-id-action--delete > .material-symbols-outlined {
  background: #fef2f2;
  color: #b91c1c;
}

.admin-progress-card {
  padding: 32px;
  text-align: center;
}

.admin-progress-card h2,
.admin-progress-card p {
  margin: 0;
}

.admin-progress-card h2 {
  margin-top: 6px;
  color: var(--admin-text);
  font-size: 25px;
  font-weight: 900;
}

.admin-progress-card > p:not(.admin-modal-kicker) {
  margin-top: 10px;
  color: var(--admin-muted);
  font-size: 14px;
  line-height: 1.55;
}

.admin-progress-icon,
.admin-success-card__icon {
  display: inline-flex;
  width: 68px;
  height: 68px;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  border-radius: 22px;
}

.admin-progress-icon {
  background: #fff7ed;
  color: var(--admin-primary-dark);
  animation: admin-progress-pulse 1.2s ease-in-out infinite;
}

.admin-progress-icon .material-symbols-outlined,
.admin-success-card__icon .material-symbols-outlined {
  font-size: 36px;
}

.admin-progress-track {
  height: 14px;
  margin-top: 26px;
  overflow: hidden;
  border-radius: 999px;
  background: #f3e8df;
}

.admin-progress-track span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--admin-primary), var(--admin-primary-dark));
  transition: width 240ms ease;
}

.admin-progress-value {
  display: block;
  margin-top: 12px;
  color: var(--admin-primary-dark);
  font-size: 24px;
  font-weight: 900;
}

.admin-success-card__icon {
  background: #ecfdf5;
  color: #047857;
}

.admin-success-card__actions {
  grid-template-columns: 1fr;
}

@keyframes admin-progress-pulse {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.06);
  }
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

.admin-course-applicants-toolbar__actions {
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
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

.admin-applicant-details summary {
  color: var(--admin-primary-dark);
  cursor: pointer;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
}

.admin-applicant-details dl {
  display: grid;
  gap: 7px;
  min-width: 220px;
  margin: 10px 0 0;
}

.admin-applicant-details dl div {
  display: grid;
  grid-template-columns: 105px minmax(0, 1fr);
  gap: 8px;
}

.admin-applicant-details dt {
  color: var(--admin-muted);
  font-size: 11px;
  font-weight: 800;
}

.admin-applicant-details dd {
  margin: 0;
  overflow-wrap: anywhere;
  font-size: 12px;
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
  min-width: 0;
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

.admin-quick-actions-toolbar > div:first-child {
  min-width: 0;
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
  flex-wrap: wrap;
  gap: 10px;
}

.admin-quick-actions-toolbar .admin-button .material-symbols-outlined {
  font-size: 20px;
}

.admin-quick-actions-table-wrap {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  background: #ffffff;
  scrollbar-gutter: stable;
}

.admin-logs-table-wrap {
  max-height: calc(100vh - 320px);
  overflow: auto;
  background: #ffffff;
}

.admin-logs-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--admin-outline);
  background: #fffaf5;
  padding: 14px 24px;
}

.admin-logs-toolbar span,
.admin-logs-toolbar strong {
  display: block;
}

.admin-modal-card--archive {
  display: flex;
  height: min(820px, calc(100dvh - 48px));
  flex-direction: column;
}

.admin-archive-toolbar {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(180px, 240px);
  gap: 12px;
  border-bottom: 1px solid var(--admin-outline);
  background: #fffaf5;
  padding: 14px 24px;
}

.admin-archive-search {
  display: flex;
  min-height: 44px;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--admin-outline);
  border-radius: 12px;
  background: #ffffff;
  color: var(--admin-muted);
  padding: 0 14px;
}

.admin-archive-search input,
.admin-archive-toolbar select {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--admin-text);
  font: inherit;
  font-size: 14px;
}

.admin-archive-toolbar select {
  min-height: 44px;
  border: 1px solid var(--admin-outline);
  border-radius: 12px;
  background: #ffffff;
  padding: 0 12px;
}

.admin-archive-message {
  margin: 0;
  border-bottom: 1px solid #bbf7d0;
  background: #f0fdf4;
  color: #166534;
  font-size: 13px;
  font-weight: 800;
  padding: 10px 24px;
}

.admin-archive-table-wrap {
  flex: 1 1 auto;
  min-height: 0;
  max-height: none;
}

.admin-archive-table-name {
  width: fit-content;
  border-radius: 999px;
  background: #fff7ed;
  color: var(--admin-primary-dark) !important;
  font-size: 12px;
  font-weight: 800;
  padding: 5px 9px;
}

.admin-archive-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.admin-archive-action {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 800;
  padding: 7px 10px;
}

.admin-archive-action .material-symbols-outlined {
  font-size: 18px;
}

.admin-archive-action--restore {
  border-color: #bbf7d0;
  color: #166534;
}

.admin-archive-action--delete {
  border-color: #fecaca;
  color: #991b1b;
}

.admin-archive-action:hover:not(:disabled) {
  background: #fff7ed;
}

.admin-archive-action:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.admin-logs-toolbar span {
  color: var(--admin-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.admin-logs-toolbar strong {
  margin-top: 4px;
  color: var(--admin-text);
  font-size: 14px;
  font-weight: 800;
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
  overflow-wrap: anywhere;
}

.admin-request-question {
  max-width: 360px;
  color: var(--admin-text);
  line-height: 1.45;
  overflow-wrap: anywhere;
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

.admin-modal-overlay--nested {
  z-index: 120;
}

.admin-modal-card--users {
  max-width: 1120px;
}

.admin-user-search {
  margin: 16px 24px;
}

.admin-users-table-wrap {
  flex: 1 1 auto;
  min-height: 0;
}

.admin-users-table th:last-child,
.admin-users-table td:last-child {
  width: 130px;
  text-align: center;
}

.admin-user-facebook-link {
  color: var(--admin-primary-dark);
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
}

.admin-user-facebook-link:hover {
  text-decoration: underline;
}

.admin-user-actions {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.admin-user-actions button {
  display: inline-flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: 1px solid #fed7aa;
  border-radius: 10px;
  background: #fff7ed;
  color: #c2410c;
  cursor: pointer;
}

.admin-user-actions .admin-user-action--delete {
  border-color: #fecaca;
  background: #fff1f2;
  color: #b91c1c;
}

.admin-user-message {
  margin: 12px 22px 0;
  border: 1px solid #bbf7d0;
  border-radius: 10px;
  background: #f0fdf4;
  padding: 10px 12px;
  color: #166534;
  font-size: 13px;
  font-weight: 700;
}

.admin-user-message--error {
  margin: 0;
  border-color: #fecaca;
  background: #fff1f2;
  color: #991b1b;
}

.admin-modal-card--user-form,
.admin-modal-card--confirm {
  max-width: 500px;
}

.admin-user-form {
  display: grid;
  gap: 18px;
  padding: 24px;
}

.admin-user-form label {
  display: grid;
  gap: 8px;
  color: var(--admin-text);
  font-size: 13px;
  font-weight: 800;
}

.admin-user-form input {
  width: 100%;
  min-height: 46px;
  border: 1px solid var(--admin-outline);
  border-radius: 11px;
  padding: 10px 12px;
  color: var(--admin-text);
  font: inherit;
}

.admin-user-form input:focus {
  border-color: var(--admin-primary);
  outline: 3px solid rgba(249, 115, 22, 0.14);
}

.admin-user-form__actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.admin-modal-card--confirm {
  padding: 28px;
  text-align: center;
}

.admin-modal-card--confirm h2 {
  margin: 14px 0 8px;
  color: var(--admin-text);
}

.admin-modal-card--confirm > p {
  margin: 0 0 22px;
  color: var(--admin-muted);
  line-height: 1.6;
}

.admin-delete-user-icon {
  display: inline-flex;
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fee2e2;
  color: #b91c1c;
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
    grid-template-columns: repeat(3, minmax(0, 1fr)) 48px;
  }

  .admin-search-field {
    grid-column: 1 / -1;
  }

  .admin-filter-button {
    width: 100%;
  }

  .admin-receiving-applicants-modal {
    width: 96vw;
    height: 94dvh;
    max-height: 94dvh;
  }

  .admin-receiving-applicants-controls {
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 14px 18px;
  }

  .admin-receiving-applicants-actions {
    flex: 1 1 500px;
  }

  .admin-receiving-grantee-toolbar {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 12px 18px;
  }

  .admin-receiving-grantee-search {
    grid-column: 1 / -1;
  }

  .admin-receiving-grantee-toolbar select {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .admin-receiving-applicants-overlay {
    align-items: stretch;
    padding: 0;
  }

  .admin-receiving-applicants-modal {
    width: 100vw;
    height: 100dvh;
    max-height: 100dvh;
    border: 0;
    border-radius: 0;
  }

  .admin-receiving-applicants-header {
    padding: 16px 16px 13px;
  }

  .admin-receiving-applicants-header h2 {
    max-width: calc(100vw - 82px);
    font-size: 20px;
  }

  .admin-receiving-applicants-header p:last-child {
    max-width: calc(100vw - 80px);
    font-size: 12px;
  }

  .admin-receiving-applicants-controls {
    align-items: stretch;
    flex-direction: column;
    gap: 12px;
    padding: 12px 16px;
  }

  .admin-receiving-applicants-actions {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .admin-receiving-applicants-actions .admin-button {
    min-width: 0;
    justify-content: center;
    padding: 9px 10px;
    font-size: 12px;
  }

  .admin-receiving-applicants-actions .admin-download-applicants-button {
    grid-column: 1 / -1;
  }

  .admin-receiving-grantee-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    padding: 10px 12px;
  }

  .admin-receiving-grantee-search {
    grid-column: 1 / -1;
  }

  .admin-receiving-grantee-toolbar select {
    min-width: 0;
    padding: 0 8px;
    font-size: 12px;
  }

  .admin-receiving-reset {
    width: 100%;
    grid-column: 1 / -1;
    justify-content: center;
  }

  .admin-receiving-applicants-footer {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    padding: 10px 12px;
  }

  .admin-receiving-applicants-footer p {
    font-size: 11px;
  }

  .admin-receiving-applicants-footer .admin-pagination__buttons {
    grid-column: 1 / -1;
    grid-row: 2;
    width: 100%;
  }

  .admin-receiving-applicants-footer .admin-pagination__buttons button {
    width: 30px;
    height: 30px;
  }

  .admin-receiving-close {
    justify-self: end;
  }

  .admin-receiving-details-overlay {
    padding: 12px;
  }

  .admin-receiving-details-grid {
    grid-template-columns: 1fr;
    padding: 14px 18px;
  }

  .admin-receiving-documents {
    margin: 0 18px 16px;
  }

  .admin-receiving-documents__heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .admin-receiving-documents-grid {
    grid-template-columns: 1fr;
    padding: 10px;
  }

  .admin-receiving-details-footer {
    padding: 10px 18px;
  }

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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 12px;
  }

  .admin-filter-panel .admin-search-field {
    grid-column: 1 / -1;
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

  .admin-confirm-card {
    padding: 24px 18px 18px;
  }

  .admin-confirm-card__actions {
    grid-template-columns: 1fr;
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

  .admin-school-id-actions {
    grid-template-columns: 1fr;
    padding: 18px;
  }

  .admin-applicant-portal-controls {
    align-items: stretch;
    flex-direction: column;
    padding: 14px 18px;
  }

  .admin-applicant-download-launch {
    align-items: stretch;
    flex-direction: column;
    padding: 14px 18px;
  }

  .admin-applicant-download-launch .admin-button,
  .admin-applicant-download-footer .admin-button {
    width: 100%;
  }

  .admin-applicant-download-card {
    max-height: calc(100dvh - 24px);
    border-radius: 16px;
  }

  .admin-applicant-download-body {
    padding: 16px 18px;
  }

  .admin-applicant-download-option {
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 12px;
  }

  .admin-applicant-download-option__copy {
    flex-basis: calc(100% - 42px);
  }

  .admin-applicant-download-count {
    margin-left: 29px;
  }

  .admin-applicant-course-picker__toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .admin-applicant-course-picker__toolbar > div {
    justify-content: space-between;
  }

  .admin-applicant-download-footer {
    flex-direction: column-reverse;
    padding: 12px 18px;
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
  .admin-course-applicants-toolbar .admin-button,
  .admin-course-applicants-toolbar__actions {
    width: 100%;
  }

  .admin-course-applicants-toolbar__actions {
    display: grid;
    grid-template-columns: 1fr;
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

  .admin-modal-card--quick-actions {
    height: calc(100dvh - 20px);
    max-height: calc(100dvh - 20px);
    overflow-y: auto;
  }

  .admin-modal-card--quick-actions .admin-modal-header {
    position: sticky;
    top: 0;
    z-index: 3;
  }

  .admin-modal-card--quick-actions .admin-quick-actions-summary {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .admin-modal-card--quick-actions .admin-quick-actions-summary div {
    align-content: center;
    padding: 12px;
  }

  .admin-modal-card--quick-actions .admin-quick-actions-summary span {
    font-size: 10px;
    letter-spacing: 0.05em;
  }

  .admin-modal-card--quick-actions .admin-quick-actions-summary strong {
    font-size: 15px;
    overflow-wrap: anywhere;
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
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .admin-logs-toolbar {
    align-items: stretch;
    flex-direction: column;
    padding: 14px 18px;
  }

  .admin-logs-toolbar .admin-button {
    width: 100%;
  }

  .admin-modal-card--archive {
    height: calc(100dvh - 20px);
    max-height: calc(100dvh - 20px);
  }

  .admin-archive-toolbar {
    grid-template-columns: 1fr;
    padding: 14px 18px;
  }

  .admin-archive-actions {
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .admin-quick-actions-table-wrap,
  .admin-logs-table-wrap,
  .admin-course-applicants-table-wrap {
    max-height: none;
    overflow: visible;
    padding: 12px;
  }

  .admin-modal-card--quick-actions .admin-quick-actions-pagination {
    position: sticky;
    bottom: 0;
    z-index: 3;
    background: #fffaf5;
    box-shadow: 0 -8px 20px rgba(28, 25, 23, 0.08);
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

  .admin-modal-card--quick-actions .admin-modal-header {
    padding: 16px;
  }

  .admin-modal-card--quick-actions .admin-modal-header p {
    font-size: 13px;
  }

  .admin-modal-card--quick-actions .admin-quick-actions-toolbar {
    padding: 13px 14px;
  }

  .admin-modal-card--quick-actions .admin-quick-actions-toolbar__actions {
    grid-template-columns: 1fr;
  }

  .admin-modal-card--quick-actions .admin-quick-actions-table-wrap {
    padding: 8px;
  }

  .admin-modal-card--quick-actions .admin-quick-actions-table tbody tr {
    border-radius: 14px;
    padding: 12px;
  }

  .admin-modal-card--quick-actions .admin-quick-actions-pagination {
    padding: 12px;
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
`,Cr={quickActions:{table:`quickActions`,source:`all-grantee-information-header`,defaultStatus:`new`,fields:{email:{label:`Email account`,type:`email`,required:!0,placeholder:`name@example.com`},question:{label:`Question`,type:`textarea`,required:!0,placeholder:`Type your question or request here...`}}}},wr=`ibacmi-visitor-support-token`;function Tr(){let e=globalThis.crypto;if(typeof e?.randomUUID==`function`)try{return e.randomUUID()}catch{}if(typeof e?.getRandomValues==`function`)try{let t=e.getRandomValues(new Uint8Array(16));return Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}catch{}return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`}function Er(e){return new Intl.DateTimeFormat(`en-PH`,{hour:`numeric`,minute:`2-digit`}).format(new Date(e))}function Dr(e){return new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`}).format(new Date(e))}function Or(e){try{let t=new URL(e),n=t.hostname.toLowerCase(),r=[`example.com`,`example.org`,`example.net`,`localhost`].some(e=>n===e||n.endsWith(`.${e}`))||[`.test`,`.invalid`,`.local`].some(e=>n.endsWith(e));return[`http:`,`https:`].includes(t.protocol)&&!!t.hostname&&!t.username&&!t.password&&!r}catch{return!1}}function kr(e){let t=`${e.name} ${e.url}`.toLowerCase();return t.includes(`messenger`)||t.includes(`facebook`)?`forum`:t.includes(`whatsapp`)||t.includes(`phone`)?`call`:t.includes(`email`)||t.includes(`mail`)?`mail`:t.includes(`student`)||t.includes(`school`)||t.includes(`portal`)?`school`:`link`}function Ar({onRequest:e}){let[t,n]=(0,U.useState)(()=>window.localStorage.getItem(wr)||``),[r,i]=(0,U.useState)(!1),[a,o]=(0,U.useState)(``),[s,c]=(0,U.useState)(`Student`),[l,u]=(0,U.useState)(``),[d,f]=(0,U.useState)(``),[p,m]=(0,U.useState)(``),[h,g]=(0,U.useState)(``),[_,v]=(0,U.useState)(!1),[y,b]=(0,U.useState)(!1),[x,S]=(0,U.useState)(!1),C=(0,U.useRef)(null),w=(0,U.useRef)(null),T=ln(G.support.getVisitorConversation,t?{visitorToken:t}:`skip`),ee=W(G.support.createVisitorConversation),E=W(G.support.sendVisitorMessage),D=W(G.support.markVisitorRead),O=ln(G.support.getPublicLinks,_?{}:`skip`),te=T?.messages??[],ne=(O?.links??[]).filter(e=>Or(e.url)),re=r?0:T?.unreadCount??0,k=!!(t&&T===null);(0,U.useEffect)(()=>{!r||!t||!T?.unreadCount||D({visitorToken:t}).catch(()=>{})},[r,t,T?.unreadCount,D]),(0,U.useEffect)(()=>{!r||!C.current||C.current.scrollTo({top:C.current.scrollHeight,behavior:`smooth`})},[r,te.length]),(0,U.useEffect)(()=>{if(!_)return;let e=e=>{e.key===`Escape`&&v(!1)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[_]);let A=async e=>{if(e.preventDefault(),!y){b(!0),g(``);try{let e=await ee({name:a,visitorType:s,...s===`Student`&&l.trim()?{schoolId:l.trim()}:{},...s===`Parent / Guardian`&&d.trim()?{studentName:d.trim()}:{}});window.localStorage.setItem(wr,e.visitorToken),n(e.visitorToken)}catch(e){g(e.message||`Unable to start a conversation. Please try again.`)}finally{b(!1)}}},j=async()=>{let e=p.trim();if(!(!e||x||!t||k)){S(!0),g(``);try{await E({visitorToken:t,content:e,clientMessageId:Tr()}),m(``),w.current&&(w.current.style.height=``)}catch(e){g(e.message||`Message could not be sent. Please try again.`)}finally{S(!1)}}},ie=e=>{m(e.target.value),e.target.style.height=`auto`,e.target.style.height=`${Math.min(e.target.scrollHeight,120)}px`},ae=k||!t;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`button`,{className:`visitor-launcher`,type:`button`,"aria-label":`Chat with Scholarship Support`,"aria-expanded":r,onClick:()=>i(e=>!e),children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:r?`close`:`chat`}),re>0&&(0,K.jsx)(`span`,{className:`visitor-launcher__badge`,"aria-label":`${re} unread replies`,children:re>9?`9+`:re}),(0,K.jsx)(`span`,{className:`visitor-launcher__hint`,children:`Need help? Chat with us`})]}),r&&(0,K.jsxs)(`section`,{className:`visitor-chat`,role:`dialog`,"aria-modal":`false`,"aria-label":`IBACMI Scholarship Support chat`,children:[(0,K.jsxs)(`header`,{className:`visitor-chat__header`,children:[(0,K.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:`IBACMI`}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`strong`,{children:`IBACMI Scholarship Support`}),(0,K.jsx)(`span`,{children:`Chat with our Scholarship Office`})]}),(0,K.jsx)(`button`,{type:`button`,"aria-label":`Minimize chat`,onClick:()=>i(!1),children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})})]}),!ae&&T===void 0&&(0,K.jsx)(`div`,{className:`visitor-chat__loading`,role:`status`,children:`Restoring your conversation…`}),ae&&(0,K.jsxs)(`form`,{className:`visitor-welcome`,onSubmit:A,children:[(0,K.jsx)(`p`,{className:`visitor-welcome__intro`,children:`Welcome to IBACMI Scholarship Office Support! We're here to assist you with your scholarship questions.`}),k&&(0,K.jsx)(`p`,{className:`visitor-chat__expired`,children:`Your previous chat session has expired. You can start a new conversation.`}),(0,K.jsxs)(`label`,{children:[`May I know your name?`,(0,K.jsx)(`input`,{required:!0,minLength:2,maxLength:100,value:a,onChange:e=>o(e.target.value),placeholder:`Full name`,autoComplete:`name`})]}),(0,K.jsxs)(`fieldset`,{children:[(0,K.jsx)(`legend`,{children:`May I know if you are a Student or Parent/Guardian?`}),[`Student`,`Parent / Guardian`,`Other Visitor`].map(e=>(0,K.jsxs)(`label`,{className:`visitor-choice`,children:[(0,K.jsx)(`input`,{type:`radio`,name:`visitorType`,value:e,checked:s===e,onChange:()=>c(e)}),e]},e))]}),s===`Student`&&(0,K.jsxs)(`label`,{children:[`School ID `,(0,K.jsx)(`span`,{children:`(optional)`}),(0,K.jsx)(`input`,{maxLength:30,value:l,onChange:e=>u(e.target.value),placeholder:`Your school ID`})]}),s===`Parent / Guardian`&&(0,K.jsxs)(`label`,{children:[`Student's name `,(0,K.jsx)(`span`,{children:`(optional)`}),(0,K.jsx)(`input`,{maxLength:100,value:d,onChange:e=>f(e.target.value),placeholder:`Student's name`})]}),(0,K.jsx)(`p`,{className:`visitor-privacy`,children:`We use these details only to identify your conversation and respond to your inquiry.`}),h&&(0,K.jsx)(`p`,{className:`visitor-chat__error`,role:`alert`,children:h}),(0,K.jsx)(`button`,{className:`visitor-primary`,type:`submit`,disabled:y,children:y?`Starting…`:`Start Conversation`}),e&&(0,K.jsx)(`button`,{className:`visitor-request-link`,type:`button`,onClick:()=>v(!0),children:`Submit a student support request`})]}),!ae&&T&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`div`,{className:`visitor-chat__history`,ref:C,children:[te.length===0&&(0,K.jsxs)(`div`,{className:`visitor-chat__empty`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`forum`}),(0,K.jsxs)(`p`,{children:[`Hi `,T.conversation.studentName,`, how can we help?`]})]}),te.map((e,t)=>{let n=te[t-1],r=!n||new Date(n.createdAt).toDateString()!==new Date(e.createdAt).toDateString(),i=e.senderRole===`visitor`;return(0,K.jsxs)(`div`,{children:[r&&(0,K.jsx)(`div`,{className:`visitor-date`,children:(0,K.jsx)(`span`,{children:Dr(e.createdAt)})}),(0,K.jsxs)(`div`,{className:`visitor-message ${i?`is-own`:``}`,children:[!i&&(0,K.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:``}),(0,K.jsxs)(`div`,{className:`visitor-message__body`,children:[(0,K.jsx)(`p`,{children:e.content}),(0,K.jsx)(`time`,{children:Er(e.createdAt)})]})]})]},e._id)})]}),(0,K.jsxs)(`form`,{className:`visitor-composer`,onSubmit:e=>{e.preventDefault(),j()},children:[h&&(0,K.jsx)(`p`,{className:`visitor-chat__error`,role:`alert`,children:h}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`textarea`,{ref:w,value:p,onChange:ie,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),j())},maxLength:2e3,placeholder:`Write a message…`,"aria-label":`Write a message`}),(0,K.jsx)(`button`,{type:`submit`,"aria-label":`Send message`,disabled:!p.trim()||x,children:x?(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`hourglass_top`}):(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`send`})})]}),(0,K.jsx)(`small`,{children:`Enter to send · Shift + Enter for a new line`})]})]})]}),_&&(0,K.jsx)(`div`,{className:`support-options-backdrop`,onMouseDown:e=>{e.target===e.currentTarget&&v(!1)},children:(0,K.jsxs)(`section`,{className:`support-options-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`support-options-title`,children:[(0,K.jsx)(`button`,{className:`support-options-close`,type:`button`,"aria-label":`Close support options`,onClick:()=>v(!1),children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,K.jsxs)(`div`,{className:`support-options-heading`,children:[(0,K.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:`IBACMI`}),(0,K.jsx)(`span`,{className:`support-options-eyebrow`,children:`IBACMI SCHOLARSHIP OFFICE`}),(0,K.jsx)(`h2`,{id:`support-options-title`,children:`How can we help you?`}),(0,K.jsx)(`p`,{children:`Choose your preferred support channel to contact the IBACMI Scholarship Office.`})]}),(0,K.jsxs)(`div`,{className:`support-options-list`,"aria-live":`polite`,children:[O===void 0&&(0,K.jsxs)(`div`,{className:`support-options-state`,role:`status`,children:[(0,K.jsx)(`span`,{className:`support-options-spinner`}),`Loading support channels…`]}),O?.error&&(0,K.jsx)(`div`,{className:`support-options-state support-options-state--error`,role:`alert`,children:`Support channels could not be loaded. Please try again shortly.`}),O&&!O.error&&ne.length===0&&(0,K.jsx)(`div`,{className:`support-options-state`,children:`No support channels are configured yet. Please continue using this chat for help.`}),ne.map(e=>(0,K.jsxs)(`a`,{className:`support-option-card`,href:e.url,target:`_blank`,rel:`noopener noreferrer`,children:[(0,K.jsx)(`span`,{className:`support-option-card__icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:kr(e)})}),(0,K.jsxs)(`span`,{className:`support-option-card__copy`,children:[(0,K.jsx)(`strong`,{children:e.name}),(0,K.jsx)(`small`,{children:`Open this support channel`})]}),(0,K.jsx)(`span`,{className:`material-symbols-outlined support-option-card__arrow`,"aria-hidden":`true`,children:`open_in_new`})]},e.id))]})]})})]})}function jr(e){let t=(0,On.c)(4),{status:n,tone:r}=e,i=`status-badge status-badge--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,K.jsx)(`span`,{className:`status-badge__dot`}),t[0]=a):a=t[0];let o;return t[1]!==n||t[2]!==i?(o=(0,K.jsxs)(`span`,{className:i,children:[a,n]}),t[1]=n,t[2]=i,t[3]=o):o=t[3],o}function Mr(e=``){let t=e.toLowerCase();return t.includes(`grantee`)||t.includes(`valid`)||t.includes(`complete`)||t.includes(`resolved`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function Nr(e,t){let n=[];if(t<=5){for(let e=1;e<=t;e+=1)n.push(e);return n}n.push(1),e>3&&n.push(`left-ellipsis`);let r=Math.max(2,e-1),i=Math.min(t-1,e+1);for(let e=r;e<=i;e+=1)n.push(e);return e<t-2&&n.push(`right-ellipsis`),n.push(t),n}function Pr(e){return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e)}function Fr(e){return/^[A-Za-z0-9-]{4,30}$/.test(e)}function Ir(e){return e.replace(/[\s-]/g,``).trim()}function Lr(e){return e.replace(/[^\d+]/g,``).replace(/(?!^)\+/g,``)}function Rr(e){return e.replace(/[\r\n]+/g,` `).replace(/\s{2,}/g,` `)}function zr(e){return String(e??``).toUpperCase().replace(/Ñ/g,`N`)}function Br(e){let t=Ir(e);return/^09\d{9}$/.test(t)||/^\+639\d{9}$/.test(t)}var Vr=10*1024*1024;function Hr(e){return e?e.type===`application/pdf`||/\.pdf$/i.test(e.name):!1}function Ur(e){if(!e)return``;let t=e/(1024*1024);return`${t.toFixed(t>=10?0:1)} MB`}function Wr(e){return e.length>=6}function Gr(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}var Kr=[{label:`Student ID`,name:`studentId`,autoComplete:`off`,required:!0},{label:`Last Name`,name:`lastName`,autoComplete:`family-name`,required:!0},{label:`First Name`,name:`firstName`,autoComplete:`given-name`,required:!0},{label:`Ext Name (JR)`,name:`extensionName`,autoComplete:`honorific-suffix`},{label:`Middle Name`,name:`middleName`,autoComplete:`additional-name`},{label:`Learner Reference Number (LRN)`,name:`lrn`,autoComplete:`off`,inputMode:`numeric`,pattern:`\\d{12}`,helper:`Optional if not assigned`},{label:`PhilSys ID Number`,name:`philSysIdNumber`,autoComplete:`off`,helper:`Optional`},{label:`4Ps ID Number`,name:`fourPsIdNumber`,autoComplete:`off`,helper:`Optional`}],qr=[{label:`Last Name`,name:`fatherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`fatherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`fatherMiddleName`,autoComplete:`additional-name`}],Jr=[{label:`Last Name`,name:`motherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`motherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`motherMiddleName`,autoComplete:`additional-name`}],Yr=[`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`],Xr=[`Student Information`,`Parent Information`,`Permanent Address`,`Additional Information`,`Required Documents`,`Review & Submit`],Zr=[{label:`Street / Purok / Barangay`,name:`streetBarangay`,autoComplete:`address-line1`,required:!0},{label:`City / Municipality`,name:`cityMunicipality`,required:!0},{label:`Province`,name:`province`,required:!0},{label:`Region`,name:`region`,required:!0},{label:`ZIP Code`,name:`zipCode`,autoComplete:`postal-code`,inputMode:`numeric`,required:!0},{label:`Mobile No.`,name:`mobileNumber`,autoComplete:`tel`,inputMode:`tel`,type:`tel`,pattern:`\\+?[0-9]*`,required:!0},{label:`Email Address`,name:`emailAddress`,autoComplete:`email`,inputMode:`email`,type:`email`,required:!0}];function Qr({onAdminLoginSuccess:e,onStudentRegistrationSuccess:t}){let n=(0,U.useRef)(null),r=(0,U.useRef)(null),[i,a]=(0,U.useState)(0),[o,s]=(0,U.useState)(()=>window.matchMedia(`(display-mode: standalone)`).matches||window.navigator.standalone===!0),[c,l]=(0,U.useState)(!1),[u,d]=(0,U.useState)(!1),[f,p]=(0,U.useState)(!1),[m,h]=(0,U.useState)(!1),[g,_]=(0,U.useState)(!1),[v,y]=(0,U.useState)(!1),[b,x]=(0,U.useState)(!1),[S,C]=(0,U.useState)(!1),[w,T]=(0,U.useState)(!1),[ee,E]=(0,U.useState)(``),[D,O]=(0,U.useState)(``),[te,ne]=(0,U.useState)(``),[re,k]=(0,U.useState)(``),[A,j]=(0,U.useState)(``),[ie,ae]=(0,U.useState)(``),[M,oe]=(0,U.useState)({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),[N,P]=(0,U.useState)(null),[F,I]=(0,U.useState)(0),[L,se]=(0,U.useState)({}),[ce,le]=(0,U.useState)(!1),[ue,de]=(0,U.useState)(!1),[R,fe]=(0,U.useState)(!1),[pe,me]=(0,U.useState)(!1),[z,he]=(0,U.useState)(!1),[ge,_e]=(0,U.useState)(1),[ve,ye]=(0,U.useState)(``),[be,xe]=(0,U.useState)(``),[Se,Ce]=(0,U.useState)(``),[we,Te]=(0,U.useState)(``),[Ee,De]=(0,U.useState)(``),[Oe,ke]=(0,U.useState)(``),[Ae,je]=(0,U.useState)(``),[Me,Ne]=(0,U.useState)(``),[Pe,Fe]=(0,U.useState)(``),[Ie,Le]=(0,U.useState)(``),[Re,ze]=(0,U.useState)(``),[Be,Ve]=(0,U.useState)(null),[He,Ue]=(0,U.useState)(``),[B,We]=(0,U.useState)(``),[Ge,Ke]=(0,U.useState)(``),[qe,Je]=(0,U.useState)(``),[Ye,Xe]=(0,U.useState)(``),[Ze,Qe]=(0,U.useState)(``),[$e,et]=(0,U.useState)(``),[tt,V]=(0,U.useState)(``),[nt,rt]=(0,U.useState)(!1),[it,at]=(0,U.useState)(!1),[ot,st]=(0,U.useState)(!1),ct=W(G.applicants.create),lt=W(G.applicants.generateUploadUrl),ut=W(G.quickActions.create),dt=W(G.adminAuth.login),ft=W(G.adminAuth.register),pt=W(G.adminAuth.requestPasswordResetOtp),mt=W(G.adminAuth.changePasswordWithOtp),ht=ln(G.allinfo.searchPublic,be?{searchValue:be}:`skip`),H=ln(G.applicantPortal.get),gt=(0,U.useMemo)(()=>ht??[],[ht]),_t=ve.trim().length>0,vt=H===void 0,yt=H?.isReceivingApplicants===!0;(0,U.useEffect)(()=>{let e=e=>{e.preventDefault(),r.current=e},t=()=>{r.current=null,s(!0)};return window.addEventListener(`beforeinstallprompt`,e),window.addEventListener(`appinstalled`,t),()=>{window.removeEventListener(`beforeinstallprompt`,e),window.removeEventListener(`appinstalled`,t)}},[]);let bt=async()=>{if(o){window.alert(`The IBACMI Scholarship web app is already installed on this device.`);return}let e=r.current;if(e){await e.prompt(),await e.userChoice,r.current=null;return}window.alert(`To install the web app, open your browser menu and choose “Install app” or “Add to Home Screen”.`)},xt=gt,St=xt.length,Ct=Math.max(1,Math.ceil(St/6)),wt=(ge-1)*6,Tt=Math.min(wt+6,St),Et=(0,U.useMemo)(()=>xt.slice(wt,Tt),[xt,wt,Tt]),Dt=(0,U.useMemo)(()=>Nr(ge,Ct),[ge,Ct]);(0,U.useEffect)(()=>{let e=window.setTimeout(()=>{xe(ve.trim())},500);return()=>window.clearTimeout(e)},[ve]);let Ot=(0,U.useCallback)(()=>{ze(``),Ve(null),De(``),ke(``),Ne(``),Fe(``),typeof t==`function`&&t(Be)},[t,Be,ze,Ve,De,ke,Ne,Fe]);(0,U.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;a(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,U.useEffect)(()=>{if(!c&&!u&&!f&&!m&&!g&&!v&&!b&&!S&&!w&&!ie&&!Re&&!te)return;let e=e=>{if(e.key===`Escape`){if(pe)return;if(S){C(!1);return}if(w){T(!1);return}l(!1),d(!1),p(!1),k(``),j(``),P(null),oe({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),h(!1),de(!1),_(!1),y(!1),x(!1),ae(``),Re&&Ot(),ne(``)}};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[c,u,f,m,g,v,b,S,w,pe,ie,Re,te,Ot]);let kt=()=>{ne(``),O(``),l(!0)},At=()=>{l(!1),O(``)},jt=()=>{if(H===void 0){ae(`Please wait while the UNIFAST portal status is loading.`);return}if(!H.isReceivingApplicants){ae(`The UNIFAST portal is not receiving applicants right now. Please wait for the administrator to open applications.`);return}k(``),j(``),C(!1),T(!1),p(!0)},Mt=()=>{p(!1),k(``),j(``),C(!1),T(!1),d(!0)},Nt=()=>{p(!1),qt()},Pt=()=>{pe||(p(!1),d(!1),k(``),j(``),C(!1),oe({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),P(null))},Ft=async(e,t)=>{let n=await lt({});se(e=>({...e,[t]:0}));let r=await new Promise((r,i)=>{let a=new XMLHttpRequest;a.open(`POST`,n),a.setRequestHeader(`Content-Type`,`application/pdf`),a.upload.onprogress=e=>{e.lengthComputable&&se(n=>({...n,[t]:Math.round(e.loaded/e.total*100)}))},a.onload=()=>{if(a.status<200||a.status>=300){try{i(Error(JSON.parse(a.responseText)?.message||`Unable to upload ${e.name}.`))}catch{i(Error(`Unable to upload ${e.name}.`))}return}try{r(JSON.parse(a.responseText))}catch{i(Error(`Upload service returned an invalid response.`))}},a.onerror=()=>i(Error(`Unable to upload ${e.name}. Check your internet connection and try again.`)),a.send(e)});if(!r.storageId)throw Error(`Upload service did not return storage for ${e.name}.`);return se(e=>({...e,[t]:100})),r.storageId},It=e=>{if(!e)return;let t=URL.createObjectURL(e);window.open(t,`_blank`,`noopener,noreferrer`),window.setTimeout(()=>URL.revokeObjectURL(t),6e4)},Lt=e=>{let t=n.current?.elements.namedItem(e);t&&(t.value=``),oe(t=>({...t,[e]:null})),P(null),k(``)},Rt=e=>{let t=M[e];return!t&&!pe?null:(0,K.jsxs)(`span`,{className:`portal-document-controls`,children:[t&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`button`,{type:`button`,onClick:e=>{e.preventDefault(),e.stopPropagation(),It(t)},children:`Preview`}),(0,K.jsx)(`button`,{type:`button`,onClick:t=>{t.preventDefault(),t.stopPropagation(),Lt(e)},children:`Remove`})]}),pe&&L[e]!==void 0&&(0,K.jsx)(`progress`,{max:`100`,value:L[e],"aria-label":`${e} upload progress`})]})},zt=async e=>{let{files:t,name:n}=e.target,r=t?.[0]??null;if(k(``),j(``),P(null),!r){oe(e=>({...e,[n]:null}));return}if(!Hr(r)){e.target.value=``,oe(e=>({...e,[n]:null})),k(`Please upload PDF files only for all document requirements.`);return}if(r.size>Vr){e.target.value=``,oe(e=>({...e,[n]:null})),k(`Each uploaded PDF must be 10MB or smaller.`);return}if(await r.slice(0,5).text()!==`%PDF-`){e.target.value=``,oe(e=>({...e,[n]:null})),k(`This file does not appear to be a valid PDF. Choose a valid PDF document.`);return}oe(e=>({...e,[n]:r}))},Bt=e=>{let t=e.target;if(!(t instanceof HTMLInputElement)||t.name===`emailAddress`||![`text`,`tel`,`search`,`url`].includes(t.type))return;let{selectionStart:n,selectionEnd:r}=t,i=zr(t.value);if(t.value===i)return;let a=n===null?null:zr(t.value.slice(0,n)).length,o=r===null?null:zr(t.value.slice(0,r)).length;t.value=i,a!==null&&o!==null&&t.setSelectionRange(a,o)},Vt=async e=>{e.preventDefault();let t=e.currentTarget;t.querySelectorAll(`input`).forEach(e=>{e.name!==`emailAddress`&&[`text`,`tel`,`search`,`url`].includes(e.type)&&(e.value=zr(e.value))});let n=new FormData(t),r=Ir(String(n.get(`mobileNumber`)||``)),i=String(n.get(`emailAddress`)||``).trim().toLowerCase(),a=n.get(`psaFile`),o=n.get(`schoolIdFile`),s=n.get(`corFile`),c=n.get(`pwdIdFile`),l=n.get(`fourPsFile`);if(k(``),j(``),!H?.isReceivingApplicants){k(`The UNIFAST portal is closed for applicants right now.`);return}for(let[e,r]of[[`Student ID`,`studentId`],[`Last Name`,`lastName`],[`Given / First Name`,`firstName`],[`Birthdate`,`birthDate`],[`Program`,`course`],[`Year level`,`year`],[`Street / Purok / Barangay`,`streetBarangay`],[`City / Municipality`,`cityMunicipality`],[`Province`,`province`],[`Region`,`region`],[`ZIP Code`,`zipCode`]])if(!String(n.get(r)||``).trim()){k(`${e} is required.`),I([`streetBarangay`,`cityMunicipality`,`province`,`region`,`zipCode`].includes(r)?2:0),window.setTimeout(()=>t.elements.namedItem(r)?.focus(),0);return}let u=String(n.get(`studentId`)||``).trim();if(!Fr(u)){I(0),k(`Student ID must be 4 to 30 letters, numbers, or hyphens.`);return}let d=String(n.get(`lrn`)||``).trim();if(d&&!/^\d{12}$/.test(d)){I(0),k(`LRN must contain exactly 12 digits.`);return}let f=String(n.get(`birthDate`)||``);if(!f||new Date(`${f}T00:00:00`)>new Date){I(0),k(`Enter a valid birthdate that is not in the future.`);return}if(!Br(r)){I(2),k(`Please enter a valid mobile number. Example: 09123456789 or +639123456789.`);return}if(!Pr(i)){I(2),k(`Please enter a valid email address.`);return}if(n.get(`fatherInformationUnavailable`)!==`on`&&(!String(n.get(`fatherLastName`)||``).trim()||!String(n.get(`fatherFirstName`)||``).trim())){I(1),k(`Enter father's last and given name, or select Information unavailable.`);return}if(n.get(`motherInformationUnavailable`)!==`on`&&(!String(n.get(`motherLastName`)||``).trim()||!String(n.get(`motherFirstName`)||``).trim())){I(1),k(`Enter mother's maiden last and given name, or select Information unavailable.`);return}if(!(a instanceof File)||!a.size||!Hr(a)){I(4),k(`Please upload a valid PSA Birth Certificate PDF.`);return}if(!(o instanceof File)||!o.size||!Hr(o)){I(4),k(`Please upload a valid School ID or valid ID PDF.`);return}let p=[c,l,s].filter(e=>e instanceof File&&e.size);if([a,o,...p].some(e=>e.size>Vr)){I(4),k(`Each uploaded PDF must be 10MB or smaller.`);return}for(let e of[a,o,...p])if(!Hr(e)||await e.slice(0,5).text()!==`%PDF-`){I(4),k(`${e.name} is not a valid PDF document.`);return}if(!n.get(`sexCode`)||!n.get(`course`)||!n.get(`year`)){I(0),k(`Select sex, program, and year level.`);return}if(!n.get(`soloParentDependent`)||!n.get(`firstGeneration`)){I(3),k(`Answer both additional information questions.`);return}P({studentId:u,lrn:d,philSysIdNumber:String(n.get(`philSysIdNumber`)||``).trim(),fourPsIdNumber:String(n.get(`fourPsIdNumber`)||``).trim(),lastName:String(n.get(`lastName`)||``).trim(),firstName:String(n.get(`firstName`)||``).trim(),extensionName:String(n.get(`extensionName`)||``).trim(),middleName:String(n.get(`middleName`)||``).trim(),gender:Number(n.get(`sexCode`))===0?`Male`:`Female`,sexCode:Number(n.get(`sexCode`)),birthDate:f,course:String(n.get(`course`)||``),year:String(n.get(`year`)||``),yearLevelCode:Number(String(n.get(`year`)||``).charAt(0)),fatherInformationUnavailable:n.get(`fatherInformationUnavailable`)===`on`,motherInformationUnavailable:n.get(`motherInformationUnavailable`)===`on`,fatherLastName:String(n.get(`fatherLastName`)||``).trim(),fatherFirstName:String(n.get(`fatherFirstName`)||``).trim(),fatherMiddleName:String(n.get(`fatherMiddleName`)||``).trim(),motherLastName:String(n.get(`motherLastName`)||``).trim(),motherFirstName:String(n.get(`motherFirstName`)||``).trim(),motherMiddleName:String(n.get(`motherMiddleName`)||``).trim(),streetBarangay:String(n.get(`streetBarangay`)||``).trim(),cityMunicipality:String(n.get(`cityMunicipality`)||``).trim(),province:String(n.get(`province`)||``).trim(),region:String(n.get(`region`)||``).trim(),address:[`streetBarangay`,`cityMunicipality`,`province`,`region`].map(e=>String(n.get(e)||``).trim()).join(`, `),zipCode:String(n.get(`zipCode`)||``).trim(),pwdId:String(n.get(`pwdId`)||``).trim(),mobileNumber:r,emailAddress:i,hasDisability:n.get(`hasDisability`)===`yes`,disabilityType:String(n.get(`disabilityType`)||``).trim(),soloParentDependent:Number(n.get(`soloParentDependent`)),firstGeneration:Number(n.get(`firstGeneration`)),isIndigenous:n.get(`isIndigenous`)===`yes`,indigenousGroup:String(n.get(`indigenousGroup`)||``).trim(),applicantClassification:`TES Applicant`,psaFile:a,schoolIdFile:o,corFile:s instanceof File&&s.size?s:null,pwdIdFile:c instanceof File&&c.size?c:null,fourPsFile:l instanceof File&&l.size?l:null}),I(5)},Ht=e=>{let t=n.current?.querySelector(`[data-portal-step="${e}"]`);if(!t)return!0;let r=[...t.querySelectorAll(`input, select, textarea`)].find(e=>e.required&&!e.checkValidity());return r?(r.reportValidity(),r.focus(),!1):!0},Ut=e=>{k(``),!(e>F&&!Ht(F))&&I(e)},Wt=()=>{k(``),j(``),C(!1),P(null),I(0)},Gt=()=>{if(N){if(k(``),j(``),!H?.isReceivingApplicants){k(`The UNIFAST portal is closed for applicants right now.`);return}if(!ce){k(`Please certify that your information and documents are true and accurate.`);return}C(!0)}},Kt=async()=>{if(N){if(k(``),j(``),!H?.isReceivingApplicants){k(`The UNIFAST portal is closed for applicants right now.`);return}me(!0);try{let[e,t,r,i,a]=await Promise.all([Ft(N.psaFile,`psaFile`),Ft(N.schoolIdFile,`schoolIdFile`),N.corFile?Ft(N.corFile,`corFile`):Promise.resolve(void 0),N.pwdIdFile?Ft(N.pwdIdFile,`pwdIdFile`):Promise.resolve(void 0),N.fourPsFile?Ft(N.fourPsFile,`fourPsFile`):Promise.resolve(void 0)]),o={studentId:N.studentId,lastName:N.lastName,firstName:N.firstName,extensionName:N.extensionName,middleName:N.middleName,gender:N.gender,sexCode:N.sexCode,birthDate:N.birthDate,course:N.course,year:N.year,yearLevelCode:N.yearLevelCode,lrn:N.lrn,philSysIdNumber:N.philSysIdNumber,fourPsIdNumber:N.fourPsIdNumber,fatherLastName:N.fatherLastName,fatherFirstName:N.fatherFirstName,fatherMiddleName:N.fatherMiddleName,motherLastName:N.motherLastName,motherFirstName:N.motherFirstName,motherMiddleName:N.motherMiddleName,fatherInformationUnavailable:N.fatherInformationUnavailable,motherInformationUnavailable:N.motherInformationUnavailable,address:N.address,streetBarangay:N.streetBarangay,cityMunicipality:N.cityMunicipality,province:N.province,region:N.region,zipCode:N.zipCode,pwdId:N.pwdId,mobileNumber:N.mobileNumber,emailAddress:N.emailAddress,hasDisability:N.hasDisability,disabilityType:N.disabilityType,soloParentDependent:N.soloParentDependent,firstGeneration:N.firstGeneration,isIndigenous:N.isIndigenous,indigenousGroup:N.indigenousGroup,applicantClassification:`TES Applicant`,psaFileStorageId:e,psaFileName:N.psaFile.name,schoolIdFileStorageId:t,schoolIdFileName:N.schoolIdFile.name,...r?{corFileStorageId:r,corFileName:N.corFile.name}:{}};i&&N.pwdIdFile&&(o.pwdIdFileStorageId=i,o.pwdIdFileName=N.pwdIdFile.name),a&&N.fourPsFile&&(o.fourPsFileStorageId=a,o.fourPsFileName=N.fourPsFile.name);let s=await ct(o);if(!s.success){C(!1),k(s.message||`Unable to submit applicant information.`);return}n.current?.reset(),oe({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),se({}),I(0),le(!1),P(null),j(``),C(!1),d(!1),T(!0)}catch(e){C(!1),k(e instanceof Error?e.message:`Unable to submit applicant information right now.`)}finally{me(!1)}}},qt=()=>{E(``),Ce(``),Te(``),h(!0)},Jt=()=>{h(!1),de(!1),E(``),Ce(``),Te(``)},Yt=()=>{let e=Se.trim(),t=e.includes(`@`);h(!1),y(!0),Le(``),ze(``),De(t?e.toLowerCase():``),ke(t?``:e),Ne(``),Fe(``)},Xt=()=>{y(!1),Le(``),ze(``),De(``),ke(``),je(``),Ne(``),Fe(``)},Zt=()=>{y(!1),Le(``),ze(``),Ve(null),Ce(Ee||Oe),Te(``),h(!0)},Qt=()=>{x(!1),y(!0)},$t=()=>{let e=Se.trim(),t=e.includes(`@`);h(!1),_(!0),et(``),V(``),rt(!1),Ue(t?e.toLowerCase():``),We(t?``:e),Ke(``),Je(``),Xe(``),Qe(``)},en=()=>{_(!1),et(``),V(``),rt(!1),Ue(``),We(``),Ke(``),Je(``),Xe(``),Qe(``)},tn=()=>{_e(e=>Math.max(e-1,1))},nn=()=>{_e(e=>Math.min(e+1,Ct))},rn=()=>{ye(``),xe(``),_e(1)},an=e=>{ye(e.target.value),_e(1)},on=e=>{e.target.value=Lr(e.target.value)},sn=()=>{rt(!1),V(``),Je(``),Xe(``),Qe(``)},cn=e=>{let t=e.target.value;Ue(t),t.trim()&&We(``),sn()},un=e=>{let t=e.target.value;We(t),t.trim()&&Ue(``),sn()},dn=e=>{Ke(Lr(e.target.value)),sn()},fn=()=>{let e=He.trim().toLowerCase(),t=B.trim(),n=Ir(Ge);return!e&&!t?`Email address or School ID is required.`:e&&t?`Use either email address or School ID, not both.`:e&&!Pr(e)?`Please enter a valid email address.`:t&&!Fr(t)?`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`:n?Br(n)?``:`Please enter a valid phone number. Example: 09123456789 or +639123456789.`:`Phone number is required.`};return(0,K.jsxs)(`div`,{className:`landing-page`,children:[(0,K.jsx)(`style`,{children:$r}),(0,K.jsxs)(`header`,{className:`landing-header`,children:[(0,K.jsxs)(`div`,{className:`brand-lockup`,children:[(0,K.jsx)(`div`,{className:`brand-mark`,children:(0,K.jsx)(`img`,{alt:`IBACMI`,className:`brand-mark__image`,src:kn})}),(0,K.jsx)(`div`,{className:`brand-copy`,children:(0,K.jsx)(`p`,{className:`brand-title`,children:`IBACMI - Scholarship Office`})})]}),(0,K.jsx)(`div`,{className:`header-actions`,children:(0,K.jsx)(`button`,{className:`button button--compact button--admin`,onClick:qt,type:`button`,children:`SIGN IN`})})]}),(0,K.jsx)(`main`,{className:`landing-main`,children:(0,K.jsxs)(`div`,{className:`landing-container`,children:[(0,K.jsx)(`section`,{className:`page-heading`,children:(0,K.jsxs)(`div`,{className:`page-heading__copy`,children:[(0,K.jsx)(`span`,{className:`eyebrow`,children:`Grantee Records`}),(0,K.jsxs)(`h2`,{className:`landing-office-title`,children:[(0,K.jsx)(`span`,{className:`landing-office-title__school`,children:`IBACMI`}),(0,K.jsx)(`span`,{className:`landing-office-title__separator`,"aria-hidden":`true`,children:`—`}),(0,K.jsx)(`span`,{className:`landing-office-title__office`,children:`Scholarship Office`})]})]})}),(0,K.jsxs)(`section`,{className:`filter-panel`,"aria-label":`Grantee filters`,children:[(0,K.jsxs)(`div`,{className:`search-field`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,K.jsx)(`input`,{placeholder:`Enter School ID, Either Batch No., or Last Name...`,type:`text`,value:ve,onChange:an})]}),(0,K.jsxs)(`button`,{className:`icon-button filter-button`,type:`button`,"aria-label":`Clear search`,title:`Clear search`,onClick:rn,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`restart_alt`}),(0,K.jsx)(`span`,{className:`filter-button__text`,children:`Reset`})]})]}),!_t&&(0,K.jsxs)(`section`,{className:`scholarship-showcase`,"aria-labelledby":`scholarship-showcase-title`,children:[(0,K.jsxs)(`div`,{className:`scholarship-showcase__heading`,children:[(0,K.jsx)(`div`,{children:(0,K.jsx)(`span`,{className:`eyebrow`,children:`Scholarship Office`})}),(0,K.jsxs)(`span`,{className:`scholarship-showcase__status`,children:[(0,K.jsx)(`span`,{"aria-hidden":`true`}),`Official Information`]})]}),(0,K.jsxs)(`a`,{className:`scholarship-showcase__image-link`,href:`/IBACMI-Scholarship-Office/assets/desktop-Di8cTPxJ.png`,rel:`noreferrer`,target:`_blank`,title:`Open the Scholarship Office banner in full size`,children:[(0,K.jsx)(`img`,{alt:`IBACMI Scholarship Office banner featuring the scholarship coordinator and students assistant`,decoding:`async`,src:`/IBACMI-Scholarship-Office/assets/desktop-Di8cTPxJ.png`}),(0,K.jsxs)(`span`,{className:`scholarship-showcase__view`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`open_in_full`}),`View full banner`]})]})]}),_t&&(0,K.jsxs)(`section`,{className:`table-card`,"aria-label":`Filtered grantee records`,children:[(0,K.jsx)(`div`,{className:`table-scroll`,children:(0,K.jsxs)(`table`,{children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{children:`No.`}),(0,K.jsx)(`th`,{children:`TES Award Number`}),(0,K.jsx)(`th`,{children:`Student ID`}),(0,K.jsx)(`th`,{children:`Last Name`}),(0,K.jsx)(`th`,{children:`First Name`}),(0,K.jsx)(`th`,{children:`Middle Name`}),(0,K.jsx)(`th`,{children:`Batch No.`}),(0,K.jsx)(`th`,{children:`Status`}),(0,K.jsx)(`th`,{children:`Semester`}),(0,K.jsx)(`th`,{children:`School Year`})]})}),(0,K.jsxs)(`tbody`,{children:[ht===void 0&&be&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`Searching grantee record...`})}),ht&&xt.length===0&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`No matching School ID, Batch No./ID, or name found.`})}),Et.map((e,t)=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{"data-label":`No.`,children:e.no||wt+t+1}),(0,K.jsx)(`td`,{className:`award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,K.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,K.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`â€”`}),(0,K.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`â€”`}),(0,K.jsx)(`td`,{"data-label":`Middle Name`,children:e.middleName||e.middleInitial||`â€”`}),(0,K.jsx)(`td`,{className:`batch-cell`,"data-label":`Batch ID`,children:e.batchId}),(0,K.jsx)(`td`,{"data-label":`Status`,children:(0,K.jsx)(jr,{status:e.status,tone:Mr(e.status)})}),(0,K.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,K.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`})]},e._id))]})]})}),(0,K.jsxs)(`div`,{className:`table-footer`,children:[(0,K.jsxs)(`p`,{children:[`Showing `,(0,K.jsx)(`strong`,{children:St===0?0:wt+1}),` to`,` `,(0,K.jsx)(`strong`,{children:Tt}),` of `,(0,K.jsx)(`strong`,{children:St}),` result`,St===1?``:`s`]}),(0,K.jsxs)(`div`,{className:`pagination`,children:[(0,K.jsx)(`button`,{className:`page-button`,disabled:ge===1||St===0,onClick:tn,type:`button`,"aria-label":`Previous page`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Dt.map(e=>typeof e==`string`?(0,K.jsx)(`span`,{className:`pagination__ellipsis`,children:`...`},e):(0,K.jsx)(`button`,{className:`page-button ${ge===e?`page-button--active`:``}`,disabled:St===0,onClick:()=>_e(e),type:`button`,children:e},e)),(0,K.jsx)(`button`,{className:`page-button`,disabled:ge===Ct||St===0,onClick:nn,type:`button`,"aria-label":`Next page`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]}),yt&&(0,K.jsxs)(`section`,{className:`portal-cta`,"aria-labelledby":`portal-cta-title`,children:[(0,K.jsx)(`div`,{className:`portal-cta__icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`assignment`})}),(0,K.jsxs)(`div`,{className:`portal-cta__copy`,children:[(0,K.jsx)(`span`,{className:`eyebrow`,children:`Unified Student Financial Assistance System for Tertiary Education`}),(0,K.jsx)(`h3`,{id:`portal-cta-title`,children:`UNIFAST APPLICATION`}),(0,K.jsx)(`p`,{children:`Complete the student, parent, address, and contact information form for UNIFAST applicant processing.`})]}),(0,K.jsxs)(`button`,{"aria-label":vt?`Checking UNIFAST portal status`:yt?`UNIFAST portal is open. Open application form`:`UNIFAST portal is closed`,className:`button button--portal ${vt?`button--portal-loading`:yt?`button--portal-open`:`button--portal-closed`}`,disabled:vt,onClick:jt,type:`button`,children:[(0,K.jsx)(`span`,{className:`portal-status-dot`,"aria-hidden":`true`}),vt?`CHECKING PORTAL`:yt?`PORTAL OPEN`:`PORTAL IS CLOSED`]})]})]})}),(0,K.jsx)(`footer`,{className:`landing-footer`,children:(0,K.jsxs)(`p`,{children:[`Copyright 2026 | All Rights Reserved IBACMI - Scholarship Office |`,` `,(0,K.jsx)(`button`,{className:`landing-footer__download`,onClick:bt,type:`button`,children:o?`App installed`:`Download app`}),` `,`| Developed By CINIFIX Technology`]})}),f&&(0,K.jsxs)(`div`,{"aria-labelledby":`grantee-question-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close grantee question`,className:`modal-backdrop-button`,onClick:()=>p(!1),type:`button`}),(0,K.jsxs)(`section`,{className:`modal-card portal-grantee-modal`,children:[(0,K.jsx)(`div`,{className:`portal-grantee-icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`school`})}),(0,K.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST APPLICATION`}),(0,K.jsx)(`h3`,{id:`grantee-question-title`,children:`Grantee ka?`}),(0,K.jsx)(`p`,{className:`portal-grantee-copy`,children:`Are you an existing UniFAST grantee?`}),(0,K.jsxs)(`div`,{className:`portal-grantee-actions`,children:[(0,K.jsx)(`button`,{className:`button button--secondary`,onClick:Nt,type:`button`,children:`Yes`}),(0,K.jsx)(`button`,{className:`button`,onClick:Mt,type:`button`,children:`No`})]})]})]}),u&&(0,K.jsxs)(`div`,{"aria-labelledby":`unifast-portal-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close UNIFAST portal modal`,className:`modal-backdrop-button`,onClick:Pt,type:`button`}),(0,K.jsxs)(`form`,{className:`modal-card portal-modal-card`,noValidate:!0,ref:n,onInput:Bt,onSubmit:Vt,children:[(0,K.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,K.jsxs)(`div`,{className:`modal-title-row`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,K.jsx)(`h3`,{id:`unifast-portal-title`,children:`Student Information Form`}),(0,K.jsxs)(`p`,{children:[`Complete the student, parent, and contact information fields below`,H?.applicationYear?` for ${H.applicationYear}.`:`.`]})]}),(0,K.jsx)(`button`,{"aria-label":`Close UNIFAST portal`,className:`icon-button modal-close`,onClick:Pt,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,K.jsx)(`nav`,{className:`portal-stepper`,"aria-label":`Application form progress`,children:Xr.map((e,t)=>(0,K.jsxs)(`button`,{type:`button`,disabled:t>=5||t>=F,className:`portal-stepper__step${F===t?` is-active`:``}${F>t?` is-complete`:``}`,"aria-current":F===t?`step`:void 0,onClick:()=>{if(!(t>=5)){if(N){P(null),le(!1),I(t);return}t<F&&Ut(t)}},children:[(0,K.jsx)(`span`,{children:F>t?`✓`:t+1}),(0,K.jsx)(`small`,{children:e})]},e))}),(0,K.jsxs)(`div`,{className:`modal-body portal-form${N?` portal-form--hidden`:``}`,children:[(0,K.jsx)(`div`,{className:`portal-step-panel${F===0?` is-active`:``}`,"data-portal-step":`0`,children:(0,K.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-student-heading`,children:[(0,K.jsx)(`h4`,{id:`portal-student-heading`,children:`Student Information`}),(0,K.jsxs)(`div`,{className:`portal-grid`,children:[Kr.map(e=>(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:e.label}),(0,K.jsx)(`input`,{autoComplete:e.autoComplete,maxLength:e.name===`studentId`?30:e.name===`lrn`?12:void 0,name:e.name,pattern:e.name===`studentId`?`[A-Za-z0-9-]{4,30}`:e.pattern,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:`text`}),e.helper&&(0,K.jsx)(`small`,{className:`portal-field-helper`,children:e.helper})]},e.name)),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Sex`}),(0,K.jsxs)(`select`,{name:`sexCode`,defaultValue:``,required:!0,children:[(0,K.jsx)(`option`,{value:``,disabled:!0,children:`Select sex`}),(0,K.jsx)(`option`,{value:`0`,children:`Male`}),(0,K.jsx)(`option`,{value:`1`,children:`Female`})]})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Birth Date`}),(0,K.jsx)(`input`,{name:`birthDate`,max:new Date().toISOString().slice(0,10),required:!0,type:`date`})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Year`}),(0,K.jsxs)(`select`,{name:`year`,defaultValue:``,required:!0,children:[(0,K.jsx)(`option`,{value:``,disabled:!0,children:`Select year`}),(0,K.jsx)(`option`,{value:`1st Year`,children:`1st Year`}),(0,K.jsx)(`option`,{value:`2nd Year`,children:`2nd Year`}),(0,K.jsx)(`option`,{value:`3rd Year`,children:`3rd Year`}),(0,K.jsx)(`option`,{value:`4th Year`,children:`4th Year`}),(0,K.jsx)(`option`,{value:`5th Year`,children:`5th Year`}),(0,K.jsx)(`option`,{value:`6th Year`,children:`6th Year`})]})]}),(0,K.jsxs)(`fieldset`,{className:`portal-course-list`,children:[(0,K.jsx)(`legend`,{children:`Course`}),Yr.map(e=>(0,K.jsxs)(`label`,{className:`portal-course-option`,children:[(0,K.jsx)(`input`,{name:`course`,required:!0,type:`radio`,value:e}),(0,K.jsx)(`span`,{children:e})]},e))]})]})]})}),(0,K.jsx)(`div`,{className:`portal-step-panel${F===1?` is-active`:``}`,"data-portal-step":`1`,children:(0,K.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-parents-heading`,children:[(0,K.jsx)(`h4`,{id:`portal-parents-heading`,children:`Parent Information`}),(0,K.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,K.jsx)(`p`,{children:`Father's Name`}),(0,K.jsxs)(`label`,{className:`portal-unavailable`,children:[(0,K.jsx)(`input`,{type:`checkbox`,name:`fatherInformationUnavailable`}),` Information unavailable`]}),(0,K.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:qr.map(e=>(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:e.label}),(0,K.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter father's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]}),(0,K.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,K.jsx)(`p`,{children:`Mother's Maiden Name`}),(0,K.jsxs)(`label`,{className:`portal-unavailable`,children:[(0,K.jsx)(`input`,{type:`checkbox`,name:`motherInformationUnavailable`}),` Information unavailable`]}),(0,K.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:Jr.map(e=>(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:e.label}),(0,K.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter mother's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]})]})}),(0,K.jsx)(`div`,{className:`portal-step-panel${F===2?` is-active`:``}`,"data-portal-step":`2`,children:(0,K.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-contact-heading`,children:[(0,K.jsx)(`h4`,{id:`portal-contact-heading`,children:`Permanent Address & Contact`}),(0,K.jsx)(`div`,{className:`portal-grid`,children:Zr.map(e=>(0,K.jsxs)(`label`,{className:`form-field ${e.className??``}`.trim(),children:[(0,K.jsx)(`span`,{children:e.label}),(0,K.jsx)(`input`,{autoComplete:e.autoComplete,inputMode:e.inputMode,name:e.name,onInput:e.name===`mobileNumber`?on:void 0,pattern:e.pattern,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:e.type??`text`})]},e.name))})]})}),(0,K.jsx)(`div`,{className:`portal-step-panel${F===3?` is-active`:``}`,"data-portal-step":`3`,children:(0,K.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-additional-heading`,children:[(0,K.jsx)(`h4`,{id:`portal-additional-heading`,children:`Additional Student Information`}),(0,K.jsxs)(`div`,{className:`portal-grid`,children:[(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Do you have a disability?`}),(0,K.jsxs)(`select`,{name:`hasDisability`,defaultValue:``,required:!0,children:[(0,K.jsx)(`option`,{value:``,disabled:!0,children:`Select one`}),(0,K.jsx)(`option`,{value:`no`,children:`No`}),(0,K.jsx)(`option`,{value:`yes`,children:`Yes`})]})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsxs)(`span`,{children:[`Please specify your disability type `,(0,K.jsx)(`small`,{children:`(if applicable)`})]}),(0,K.jsx)(`input`,{name:`disabilityType`,maxLength:120,placeholder:`Optional`})]}),(0,K.jsxs)(`fieldset`,{className:`portal-choice-field`,children:[(0,K.jsx)(`legend`,{children:`Are you a dependent or child of a solo parent?`}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`input`,{type:`radio`,name:`soloParentDependent`,value:`1`,required:!0}),` Yes`]}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`input`,{type:`radio`,name:`soloParentDependent`,value:`0`}),` No`]})]}),(0,K.jsxs)(`fieldset`,{className:`portal-choice-field`,children:[(0,K.jsx)(`legend`,{children:`Are you a first-generation college student?`}),(0,K.jsx)(`p`,{children:`Neither of your parents or legal guardians attended college or completed a college degree.`}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`input`,{type:`radio`,name:`firstGeneration`,value:`1`,required:!0}),` Yes`]}),(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`input`,{type:`radio`,name:`firstGeneration`,value:`0`}),` No`]})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Do you belong to an Indigenous Peoples (IP) group?`}),(0,K.jsxs)(`select`,{name:`isIndigenous`,defaultValue:``,required:!0,children:[(0,K.jsx)(`option`,{value:``,disabled:!0,children:`Select one`}),(0,K.jsx)(`option`,{value:`no`,children:`No`}),(0,K.jsx)(`option`,{value:`yes`,children:`Yes`})]})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsxs)(`span`,{children:[`Please specify your IP group `,(0,K.jsx)(`small`,{children:`(if applicable)`})]}),(0,K.jsx)(`input`,{name:`indigenousGroup`,maxLength:120,placeholder:`Optional`})]}),(0,K.jsxs)(`div`,{className:`portal-classification`,children:[(0,K.jsx)(`span`,{children:`Applicant Classification`}),(0,K.jsx)(`strong`,{children:`TES Applicant`}),(0,K.jsx)(`small`,{children:`This classification is assigned by the Scholarship Office.`})]})]})]})}),(0,K.jsx)(`div`,{className:`portal-step-panel${F===4?` is-active`:``}`,"data-portal-step":`4`,children:(0,K.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-documents-heading`,children:[(0,K.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,K.jsx)(`h4`,{id:`portal-documents-heading`,children:`Document Requirements`}),(0,K.jsx)(`p`,{children:`Upload clear PDF copies up to 10MB each. Required and optional documents are labeled below.`})]}),(0,K.jsxs)(`div`,{className:`portal-document-grid`,children:[(0,K.jsxs)(`label`,{className:`portal-document-upload${M.psaFile?` portal-document-upload--selected`:``}`,children:[(0,K.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`psaFile`,onChange:zt,required:!0,type:`file`}),(0,K.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`})}),(0,K.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,K.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,K.jsx)(`strong`,{children:`PSA Birth Certificate`}),(0,K.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,K.jsx)(`span`,{children:M.psaFile?`${M.psaFile.name} (${Ur(M.psaFile.size)})`:`Select PSA PDF file`}),Rt(`psaFile`)]})]}),(0,K.jsxs)(`label`,{className:`portal-document-upload${M.schoolIdFile?` portal-document-upload--selected`:``}`,children:[(0,K.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`schoolIdFile`,onChange:zt,required:!0,type:`file`}),(0,K.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`})}),(0,K.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,K.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,K.jsx)(`strong`,{children:`School ID / Valid ID with Three Signatures`}),(0,K.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,K.jsx)(`span`,{children:M.schoolIdFile?`${M.schoolIdFile.name} (${Ur(M.schoolIdFile.size)})`:`Upload a clear School ID or valid ID showing three specimen signatures.`}),Rt(`schoolIdFile`)]})]}),(0,K.jsxs)(`label`,{className:`portal-document-upload${M.corFile?` portal-document-upload--selected`:``}`,children:[(0,K.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`corFile`,onChange:zt,type:`file`}),(0,K.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`description`})}),(0,K.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,K.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,K.jsx)(`strong`,{children:`COR / Study Load`}),(0,K.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,K.jsx)(`span`,{children:M.corFile?`${M.corFile.name} (${Ur(M.corFile.size)})`:`Attach a COR or Study Load PDF, if available.`}),Rt(`corFile`)]})]}),(0,K.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${M.pwdIdFile?` portal-document-upload--selected`:``}`,children:[(0,K.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`pwdIdFile`,onChange:zt,type:`file`}),(0,K.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`})}),(0,K.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,K.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,K.jsx)(`strong`,{children:`PWD ID`}),(0,K.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,K.jsx)(`span`,{children:M.pwdIdFile?`${M.pwdIdFile.name} (${Ur(M.pwdIdFile.size)})`:`Attach a clear PWD ID PDF, if applicable`}),Rt(`pwdIdFile`)]})]}),(0,K.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${M.fourPsFile?` portal-document-upload--selected`:``}`,children:[(0,K.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`fourPsFile`,onChange:zt,type:`file`}),(0,K.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`})}),(0,K.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,K.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,K.jsx)(`strong`,{children:`4Ps ID`}),(0,K.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,K.jsx)(`span`,{children:M.fourPsFile?`${M.fourPsFile.name} (${Ur(M.fourPsFile.size)})`:`Attach a clear 4Ps ID PDF, if applicable`}),Rt(`fourPsFile`)]})]})]})]})})]}),N&&(0,K.jsx)(`div`,{className:`modal-body portal-review`,children:(0,K.jsxs)(`section`,{className:`portal-review-card`,"aria-labelledby":`portal-review-heading`,children:[(0,K.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,K.jsx)(`h4`,{id:`portal-review-heading`,children:`Review Information`}),(0,K.jsx)(`p`,{children:`Please check every detail before final submission.`})]}),(0,K.jsxs)(`div`,{className:`portal-review-grid`,children:[(0,K.jsxs)(`div`,{className:`portal-review-group`,children:[(0,K.jsx)(`h5`,{children:`Student Information`}),(0,K.jsxs)(`dl`,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Student ID`}),(0,K.jsx)(`dd`,{children:N.studentId})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`LRN`}),(0,K.jsx)(`dd`,{children:N.lrn||`Not assigned / not provided`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`PhilSys ID`}),(0,K.jsx)(`dd`,{children:N.philSysIdNumber||`Not provided`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`4Ps ID Number`}),(0,K.jsx)(`dd`,{children:N.fourPsIdNumber||`Not provided`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Full Name`}),(0,K.jsx)(`dd`,{children:[N.firstName,N.middleName,N.lastName,N.extensionName].filter(Boolean).join(` `)})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Gender`}),(0,K.jsx)(`dd`,{children:N.gender})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Birth Date`}),(0,K.jsx)(`dd`,{children:N.birthDate})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Year`}),(0,K.jsx)(`dd`,{children:N.year})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Course`}),(0,K.jsx)(`dd`,{children:N.course})]})]})]}),(0,K.jsxs)(`div`,{className:`portal-review-group`,children:[(0,K.jsx)(`h5`,{children:`Parents Information`}),(0,K.jsxs)(`dl`,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Father`}),(0,K.jsx)(`dd`,{children:[N.fatherFirstName,N.fatherMiddleName,N.fatherLastName].filter(Boolean).join(` `)||(N.fatherInformationUnavailable?`Information unavailable`:`Not provided`)})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Mother`}),(0,K.jsx)(`dd`,{children:[N.motherFirstName,N.motherMiddleName,N.motherLastName].filter(Boolean).join(` `)||(N.motherInformationUnavailable?`Information unavailable`:`Not provided`)})]})]})]}),(0,K.jsxs)(`div`,{className:`portal-review-group`,children:[(0,K.jsx)(`h5`,{children:`Address and Contact`}),(0,K.jsxs)(`dl`,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Permanent Address`}),(0,K.jsx)(`dd`,{children:N.address})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Zip Code`}),(0,K.jsx)(`dd`,{children:N.zipCode||`Not provided`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`PWD ID`}),(0,K.jsx)(`dd`,{children:N.pwdId||`Not provided`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Mobile No.`}),(0,K.jsx)(`dd`,{children:N.mobileNumber})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Email Address`}),(0,K.jsx)(`dd`,{children:N.emailAddress})]})]})]}),(0,K.jsxs)(`div`,{className:`portal-review-group`,children:[(0,K.jsx)(`h5`,{children:`Additional Information`}),(0,K.jsxs)(`dl`,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Disability`}),(0,K.jsx)(`dd`,{children:N.hasDisability?N.disabilityType||`Yes — details not specified`:`No`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Solo Parent Dependent`}),(0,K.jsx)(`dd`,{children:N.soloParentDependent?`Yes (1)`:`No (0)`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`First Generation`}),(0,K.jsx)(`dd`,{children:N.firstGeneration?`Yes (1)`:`No (0)`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Indigenous Peoples Group`}),(0,K.jsx)(`dd`,{children:N.isIndigenous?N.indigenousGroup||`Yes — group not specified`:`No`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`Classification`}),(0,K.jsx)(`dd`,{children:`TES Applicant`})]})]})]}),(0,K.jsxs)(`div`,{className:`portal-review-group`,children:[(0,K.jsx)(`h5`,{children:`Documents`}),(0,K.jsxs)(`dl`,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`PSA Birth Certificate`}),(0,K.jsxs)(`dd`,{children:[N.psaFile.name,` (`,Ur(N.psaFile.size),`)`]})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`School ID Photocopy`}),(0,K.jsxs)(`dd`,{children:[N.schoolIdFile.name,` (`,Ur(N.schoolIdFile.size),`)`]})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`COR / Study Load`}),(0,K.jsx)(`dd`,{children:N.corFile?`${N.corFile.name} (${Ur(N.corFile.size)})`:`Not provided (optional)`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`PWD ID (Optional)`}),(0,K.jsx)(`dd`,{children:N.pwdIdFile?`${N.pwdIdFile.name} (${Ur(N.pwdIdFile.size)})`:`Not provided`})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`dt`,{children:`4Ps ID (Optional)`}),(0,K.jsx)(`dd`,{children:N.fourPsFile?`${N.fourPsFile.name} (${Ur(N.fourPsFile.size)})`:`Not provided`})]})]})]})]}),(0,K.jsxs)(`label`,{className:`portal-acknowledgment`,children:[(0,K.jsx)(`input`,{type:`checkbox`,checked:ce,onChange:e=>le(e.target.checked)}),` I certify that the information and documents I have submitted are true and accurate to the best of my knowledge.`]}),(0,K.jsx)(`p`,{className:`portal-review-privacy`,children:`Your information and supporting documents will be used by the Scholarship Office for TES application processing, eligibility verification, and related scholarship administration.`})]})}),(re||A)&&(0,K.jsxs)(`div`,{className:`portal-message-row`,children:[re&&(0,K.jsx)(`p`,{className:`form-error`,children:re}),A&&(0,K.jsx)(`p`,{className:`form-success`,children:A})]}),(0,K.jsx)(`div`,{className:`modal-actions portal-actions`,children:N?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`button`,{className:`button button--secondary`,disabled:pe,onClick:()=>{P(null),I(4),le(!1)},type:`button`,children:`Previous`}),(0,K.jsx)(`button`,{className:`button button--secondary`,disabled:pe,onClick:Wt,type:`button`,children:`Edit Information`}),(0,K.jsx)(`button`,{className:`button`,disabled:pe,onClick:Gt,type:`button`,children:`Submit Application`})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`button`,{className:`button button--secondary`,disabled:pe,onClick:Pt,type:`button`,children:`Cancel`}),F>0&&(0,K.jsx)(`button`,{className:`button button--secondary`,disabled:pe,onClick:()=>Ut(F-1),type:`button`,children:`Previous`}),F<4?(0,K.jsx)(`button`,{className:`button`,disabled:pe,onClick:()=>Ut(F+1),type:`button`,children:`Continue`}):(0,K.jsx)(`button`,{className:`button`,disabled:pe,onClick:()=>Vt({preventDefault(){},currentTarget:n.current}),type:`button`,children:`Review & Submit`})]})})]})]}),S&&(0,K.jsxs)(`div`,{"aria-labelledby":`portal-privacy-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Return to application review`,className:`modal-backdrop-button`,disabled:pe,onClick:()=>C(!1),type:`button`}),(0,K.jsxs)(`section`,{className:`modal-card portal-privacy-card`,children:[(0,K.jsxs)(`div`,{className:`success-modal-body`,children:[(0,K.jsx)(`div`,{className:`portal-privacy-icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`privacy_tip`})}),(0,K.jsx)(`p`,{className:`modal-kicker`,children:`Data Privacy Notice`}),(0,K.jsx)(`h3`,{id:`portal-privacy-title`,children:`Your Privacy Matters`}),(0,K.jsx)(`p`,{children:`I understand that the personal information I provide will be collected, stored, and processed by the Scholarship Office solely for scholarship administration, verification, monitoring, and related educational purposes. I am informed that my data will be kept confidential and protected in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173), and will only be accessed by authorized personnel when necessary.`})]}),(0,K.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,K.jsx)(`button`,{className:`button`,disabled:pe,onClick:Kt,type:`button`,children:pe?`Submitting...`:`I UNDERSTAND`})})]})]}),w&&(0,K.jsxs)(`div`,{"aria-labelledby":`portal-submission-success-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close application success modal`,className:`modal-backdrop-button`,onClick:()=>T(!1),type:`button`}),(0,K.jsxs)(`section`,{className:`modal-card modal-card--success`,children:[(0,K.jsxs)(`div`,{className:`success-modal-body`,children:[(0,K.jsx)(`div`,{className:`success-icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,K.jsx)(`h3`,{id:`portal-submission-success-title`,children:`Application Submitted Successfully`}),(0,K.jsxs)(`p`,{children:[`Please wait for the UNIFAST results. You will be notified through the Facebook page, `,(0,K.jsx)(`strong`,{children:`Iba College of Mindanao Inc. - Scholarship Office`}),`.`]})]}),(0,K.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,K.jsx)(`button`,{className:`button`,onClick:()=>T(!1),type:`button`,children:`Done`})})]})]}),ie&&(0,K.jsxs)(`div`,{"aria-labelledby":`portal-status-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close portal status modal`,className:`modal-backdrop-button`,onClick:()=>ae(``),type:`button`}),(0,K.jsxs)(`section`,{className:`modal-card portal-status-card`,children:[(0,K.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,K.jsxs)(`div`,{className:`modal-title-row`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`h3`,{id:`portal-status-title`,children:`Portal Status`}),(0,K.jsx)(`p`,{children:ie})]}),(0,K.jsx)(`button`,{"aria-label":`Close portal status`,className:`icon-button modal-close`,onClick:()=>ae(``),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,K.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,K.jsx)(`button`,{className:`button`,onClick:()=>ae(``),type:`button`,children:`OK`})})]})]}),c&&(0,K.jsxs)(`div`,{"aria-labelledby":`quick-actions-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close quick actions modal`,className:`modal-backdrop-button`,onClick:At,type:`button`}),(0,K.jsxs)(`form`,{className:`modal-card modal-card--wide auth-modal-card`,onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=String(n.get(`email`)||``).trim().toLowerCase(),i=String(n.get(`studentId`)||``).trim(),a=String(n.get(`lastName`)||``).trim(),o=String(n.get(`firstName`)||``).trim(),s=String(n.get(`middleInitial`)||``).trim(),c=Rr(String(n.get(`question`)||``)).trim();O(``),ne(``),fe(!0);try{if(!Pr(r))throw Error(`Please enter a valid email account.`);if(!Fr(i))throw Error(`Please enter a valid Student ID.`);if(!a||!o)throw Error(`Last name and first name are required.`);if(s&&!/^[A-Za-z. -]{1,10}$/.test(s))throw Error(`Please enter a valid middle initial.`);if(!c)throw Error(`Please enter your question or request.`);if(c.length>500)throw Error(`Your question must be 500 characters or fewer.`);await ut({email:r,studentId:i,lastName:a,firstName:o,middleInitial:s,question:c,source:Cr.quickActions.source,status:Cr.quickActions.defaultStatus}),t.reset(),l(!1),ne(`Your request has been submitted.`)}catch(e){O(e instanceof Error?e.message:`Unable to submit your request right now.`)}finally{fe(!1)}},children:[(0,K.jsxs)(`div`,{className:`modal-header`,children:[(0,K.jsxs)(`div`,{className:`modal-title-row`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`p`,{className:`modal-kicker`,children:`Quick Actions`}),(0,K.jsx)(`h3`,{id:`quick-actions-title`,children:`Submit a Request`})]}),(0,K.jsx)(`button`,{"aria-label":`Close modal`,className:`icon-button modal-close`,onClick:At,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,K.jsx)(`p`,{children:`Send a question or request to the scholarship office for review.`})]}),(0,K.jsxs)(`div`,{className:`modal-body quick-action-form-grid`,children:[(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Student ID`}),(0,K.jsx)(`input`,{autoComplete:`off`,name:`studentId`,placeholder:`Enter Student ID`,required:!0})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Email account`}),(0,K.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`email`,placeholder:Cr.quickActions.fields.email.placeholder,required:!0,type:`email`})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Last name`}),(0,K.jsx)(`input`,{autoComplete:`family-name`,name:`lastName`,placeholder:`Enter last name`,required:!0})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`First name`}),(0,K.jsx)(`input`,{autoComplete:`given-name`,name:`firstName`,placeholder:`Enter first name`,required:!0})]}),(0,K.jsxs)(`label`,{className:`form-field quick-action-mi-field`,children:[(0,K.jsx)(`span`,{children:`MI`}),(0,K.jsx)(`input`,{autoComplete:`additional-name`,maxLength:10,name:`middleInitial`,placeholder:`M`})]}),(0,K.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,K.jsx)(`span`,{children:`Question`}),(0,K.jsx)(`textarea`,{"aria-describedby":`quick-action-question-help`,maxLength:500,name:`question`,onInput:e=>{e.currentTarget.value=Rr(e.currentTarget.value)},placeholder:Cr.quickActions.fields.question.placeholder,required:!0,rows:4}),(0,K.jsx)(`small`,{className:`form-field__help`,id:`quick-action-question-help`,children:`One paragraph only, up to 500 characters.`})]}),D&&(0,K.jsx)(`p`,{className:`form-error auth-full-field`,children:D})]}),(0,K.jsxs)(`div`,{className:`modal-actions`,children:[(0,K.jsx)(`button`,{className:`button button--secondary`,disabled:R,onClick:At,type:`button`,children:`Cancel`}),(0,K.jsx)(`button`,{className:`button`,disabled:R,type:`submit`,children:R?`Submitting...`:`Submit`})]})]})]}),m&&(0,K.jsxs)(`div`,{"aria-labelledby":`admin-login-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close admin login modal`,className:`modal-backdrop-button`,onClick:Jt,type:`button`}),(0,K.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card`,onSubmit:async t=>{t.preventDefault();let n=Se.trim(),r=we,i=n.includes(`@`),a=i?n.toLowerCase():``,o=i?``:n;if(E(``),!n){E(`Enter your official registered email address or School ID.`);return}if(i&&!Pr(a)){E(`Please enter a valid registered email address.`);return}if(!i&&!Fr(o)){E(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(!r){E(`Password is required.`);return}if(!Wr(r)){E(`Password must be at least 6 characters.`);return}let s={password:r,...i?{email:a}:{schoolId:o}};de(!0);try{let t=await Gr(dt(s),15e3,`Login is taking too long. Please check your internet connection is running, then try again.`);if(!t.success){E(t.message||`Invalid admin credentials.`);return}h(!1),typeof e==`function`&&e(t.admin)}catch(e){E(e instanceof Error?e.message:`Unable to login right now.`)}finally{de(!1)}},children:[(0,K.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,K.jsx)(`div`,{className:`admin-login-brand`,children:(0,K.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,K.jsx)(`button`,{"aria-label":`Close admin login`,className:`icon-button modal-close admin-login-close`,onClick:Jt,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,K.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,K.jsx)(`h3`,{id:`admin-login-title`,children:`Sign in`})]}),(0,K.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,K.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,K.jsx)(`span`,{children:`Official Registered Email or School ID`}),(0,K.jsx)(`input`,{autoCapitalize:`none`,autoComplete:`username`,maxLength:254,name:`adminIdentifier`,placeholder:`Enter your official registered email or School ID`,required:!0,spellCheck:!1,type:`text`,value:Se,onChange:e=>Ce(e.target.value)})]}),(0,K.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,K.jsx)(`span`,{children:`Password`}),(0,K.jsx)(`input`,{autoComplete:`current-password`,name:`adminPassword`,placeholder:`Enter password`,required:!0,type:`password`,minLength:6,value:we,onChange:e=>Te(e.target.value)})]}),(0,K.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`info`}),(0,K.jsx)(`p`,{children:`Enter either your official registered email address or your School ID. Your password is still required.`})]}),(0,K.jsxs)(`div`,{className:`auth-link-row auth-full-field`,children:[(0,K.jsx)(`button`,{className:`auth-text-button`,disabled:ue,onClick:$t,type:`button`,children:`Forgot Password?`}),(0,K.jsx)(`button`,{className:`auth-text-button auth-text-button--strong`,disabled:ue,onClick:Yt,type:`button`,children:`Create Account`})]}),ee&&(0,K.jsx)(`p`,{className:`form-error auth-full-field`,children:ee})]}),(0,K.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,K.jsx)(`button`,{className:`button button--secondary`,disabled:ue,onClick:Jt,type:`button`,children:`Cancel`}),(0,K.jsx)(`button`,{className:`button`,disabled:ue,type:`submit`,children:ue?`Logging in...`:`Login`})]})]})]}),v&&(0,K.jsxs)(`div`,{"aria-labelledby":`sign-up-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close sign up modal`,className:`modal-backdrop-button`,onClick:Xt,type:`button`}),(0,K.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=Ee.trim().toLowerCase(),n=Oe.trim(),r=Ir(Ae),i=Me,a=Pe;if(Le(``),ze(``),!t){Le(`Email account is required.`);return}if(!Pr(t)){Le(`Please enter a valid email account.`);return}if(!n){Le(`School ID is required.`);return}if(!Fr(n)){Le(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(!r){Le(`Phone number is required.`);return}if(!Br(r)){Le(`Please enter a valid phone number. Example: 09123456789 or +639123456789.`);return}if(!i){Le(`Password is required.`);return}if(!Wr(i)){Le(`Password must be at least 6 characters.`);return}if(!a){Le(`Confirm password is required.`);return}if(i!==a){Le(`Password and confirm password do not match.`);return}he(!0);try{let e=await ft({email:t,schoolId:n,phoneNumber:r,password:i});if(!e.success){if(e.reason===`schoolIdNotFound`){y(!1),x(!0);return}Le(e.message||`Unable to register account.`);return}y(!1),Ve(e.admin??{email:t,schoolId:n,role:`student`}),ze(`Your account has been registered successfully.`),Ce(t||n),Te(``),je(``),Ne(``),Fe(``)}catch(e){Le(e instanceof Error?e.message:`Unable to register account.`)}finally{he(!1)}},children:[(0,K.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,K.jsx)(`div`,{className:`admin-login-brand`,children:(0,K.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,K.jsx)(`button`,{"aria-label":`Close sign up`,className:`icon-button modal-close admin-login-close`,onClick:Xt,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,K.jsx)(`p`,{className:`modal-kicker`,children:`Account Registration`}),(0,K.jsx)(`h3`,{id:`sign-up-title`,children:`Create Account`}),(0,K.jsx)(`p`,{children:`Registration is only available for verified School IDs listed in the IBACMI Scholarship Office records.`})]}),(0,K.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Email account`}),(0,K.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`signUpEmail`,placeholder:`Enter email account`,required:!0,type:`email`,value:Ee,onChange:e=>De(e.target.value)})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`School ID`}),(0,K.jsx)(`input`,{autoComplete:`off`,name:`signUpSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,value:Oe,onChange:e=>ke(e.target.value)})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Phone Number`}),(0,K.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`signUpPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`e.g. 09123456789`,required:!0,type:`tel`,value:Ae,onChange:e=>je(Lr(e.target.value))})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Password`}),(0,K.jsx)(`input`,{autoComplete:`new-password`,name:`signUpPassword`,placeholder:`Create password`,required:!0,type:`password`,minLength:6,value:Me,onChange:e=>Ne(e.target.value)})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Confirm Password`}),(0,K.jsx)(`input`,{autoComplete:`new-password`,name:`signUpConfirmPassword`,placeholder:`Confirm password`,required:!0,type:`password`,minLength:6,value:Pe,onChange:e=>Fe(e.target.value)})]}),(0,K.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`verified_user`}),(0,K.jsx)(`p`,{children:`Your School ID will be checked against the official grantee information record before account creation.`})]}),Ie&&(0,K.jsx)(`p`,{className:`form-error auth-full-field`,children:Ie}),Re&&(0,K.jsx)(`p`,{className:`form-success auth-full-field`,children:Re})]}),(0,K.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,K.jsx)(`button`,{className:`button button--secondary`,disabled:z,onClick:Zt,type:`button`,children:`Back to Login`}),(0,K.jsx)(`button`,{className:`button`,disabled:z,type:`submit`,children:z?`Registering...`:`Register Now`})]})]})]}),b&&(0,K.jsxs)(`div`,{"aria-labelledby":`sign-up-denied-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close sign up denied modal`,className:`modal-backdrop-button`,onClick:Qt,type:`button`}),(0,K.jsxs)(`section`,{className:`modal-card modal-card--success auth-modal-card auth-denied-card`,children:[(0,K.jsxs)(`div`,{className:`success-modal-body auth-denied-body`,children:[(0,K.jsx)(`div`,{className:`auth-denied-icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`error`})}),(0,K.jsx)(`h3`,{id:`sign-up-denied-title`,children:`Account Registration Not Approved`}),(0,K.jsx)(`p`,{children:`Sorry, you cannot proceed. Your School ID was not found in the official records. Please contact the IBACMI | Scholarship Office for assistance.`})]}),(0,K.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,K.jsx)(`button`,{className:`button`,onClick:Qt,type:`button`,children:`Back to Sign Up`})})]})]}),Re&&(0,K.jsxs)(`div`,{"aria-labelledby":`sign-up-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Continue to student page`,className:`modal-backdrop-button`,onClick:Ot,type:`button`}),(0,K.jsxs)(`section`,{className:`modal-card modal-card--success auth-modal-card`,children:[(0,K.jsxs)(`div`,{className:`success-modal-body`,children:[(0,K.jsx)(`div`,{className:`success-icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,K.jsx)(`h3`,{id:`sign-up-success-title`,children:`Successfully Registered`}),(0,K.jsxs)(`p`,{children:[Re,` You can now continue to the student information page.`]})]}),(0,K.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,K.jsx)(`button`,{className:`button`,onClick:Ot,type:`button`,children:`Continue`})})]})]}),g&&(0,K.jsxs)(`div`,{"aria-labelledby":`forgot-password-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close forgot password modal`,className:`modal-backdrop-button`,onClick:en,type:`button`}),(0,K.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=fn(),n=He.trim().toLowerCase(),r=B.trim(),i=Ir(Ge),a=qe.trim(),o=Ye,s=Ze;if(et(``),V(``),t){et(t);return}if(!nt){et(`Please request an OTP first.`);return}if(!a){et(`OTP is required.`);return}if(!/^\d{4,8}$/.test(a)){et(`OTP must be 4 to 8 digits.`);return}if(!o){et(`New password is required.`);return}if(!Wr(o)){et(`New password must be at least 6 characters.`);return}if(!s){et(`Confirm password is required.`);return}if(o!==s){et(`New password and confirm password do not match.`);return}st(!0);try{let e=await mt({email:n||void 0,schoolId:r||void 0,phoneNumber:i,otp:a,newPassword:o});if(!e.success){et(e.message||`Unable to change password.`);return}V(e.message||`Password changed successfully.`),Je(``),Xe(``),Qe(``),rt(!1),Ce(n||r),Te(``)}catch(e){et(e instanceof Error?e.message:`Unable to change password right now.`)}finally{st(!1)}},children:[(0,K.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,K.jsx)(`div`,{className:`admin-login-brand`,children:(0,K.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,K.jsx)(`button`,{"aria-label":`Close forgot password`,className:`icon-button modal-close admin-login-close`,onClick:en,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,K.jsx)(`p`,{className:`modal-kicker`,children:`Account Recovery`}),(0,K.jsx)(`h3`,{id:`forgot-password-title`,children:`Forgot Password`}),(0,K.jsx)(`p`,{children:`Verify your email or School ID with your registered phone number before changing your password.`})]}),(0,K.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`Email address`}),(0,K.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`forgotEmail`,placeholder:`Enter valid email address`,required:!B.trim(),type:`email`,disabled:B.trim().length>0||it||ot,value:He,onChange:cn})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`School ID`}),(0,K.jsx)(`input`,{autoComplete:`off`,name:`forgotSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,title:`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`,required:!He.trim(),disabled:He.trim().length>0||it||ot,value:B,onChange:un})]}),(0,K.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,K.jsx)(`span`,{children:`Phone number`}),(0,K.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`forgotPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`09123456789 or +639123456789`,required:!0,type:`tel`,disabled:it||ot,value:Ge,onChange:dn})]}),(0,K.jsx)(`button`,{className:`button button--secondary auth-full-field`,disabled:it||ot,onClick:async()=>{let e=fn();if(et(``),V(``),e){et(e);return}let t=He.trim().toLowerCase(),n=B.trim(),r=Ir(Ge);at(!0);try{let e=await pt({email:t||void 0,schoolId:n||void 0,phoneNumber:r});if(!e.success){et(e.message||`Unable to send OTP.`);return}rt(!0),V(e.message||`OTP generated successfully. Enter it below to change your password.`)}catch(e){et(e instanceof Error?e.message:`Unable to request OTP right now.`)}finally{at(!1)}},type:`button`,children:it?`Sending OTP...`:nt?`Resend OTP`:`Send OTP`}),nt&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`OTP Code`}),(0,K.jsx)(`input`,{autoComplete:`one-time-code`,inputMode:`numeric`,name:`forgotOtp`,placeholder:`Enter OTP`,required:!0,type:`text`,maxLength:8,value:qe,onChange:e=>Je(e.target.value.replace(/\D/g,``))})]}),(0,K.jsxs)(`label`,{className:`form-field`,children:[(0,K.jsx)(`span`,{children:`New Password`}),(0,K.jsx)(`input`,{autoComplete:`new-password`,name:`forgotNewPassword`,placeholder:`Enter new password`,required:!0,type:`password`,minLength:6,value:Ye,onChange:e=>Xe(e.target.value)})]}),(0,K.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,K.jsx)(`span`,{children:`Confirm New Password`}),(0,K.jsx)(`input`,{autoComplete:`new-password`,name:`forgotConfirmPassword`,placeholder:`Confirm new password`,required:!0,type:`password`,minLength:6,value:Ze,onChange:e=>Qe(e.target.value)})]})]}),$e&&(0,K.jsx)(`p`,{className:`form-error auth-full-field`,children:$e}),tt&&(0,K.jsx)(`p`,{className:`form-success auth-full-field`,children:tt})]}),(0,K.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,K.jsx)(`button`,{className:`button button--secondary`,disabled:it||ot,onClick:en,type:`button`,children:`Cancel`}),(0,K.jsx)(`button`,{className:`button`,disabled:!nt||it||ot,type:`submit`,children:ot?`Changing Password...`:`Change Password`})]})]})]}),te&&(0,K.jsxs)(`div`,{"aria-labelledby":`quick-action-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close success modal`,className:`modal-backdrop-button`,onClick:()=>ne(``),type:`button`}),(0,K.jsxs)(`div`,{className:`modal-card modal-card--success`,children:[(0,K.jsxs)(`div`,{className:`success-modal-body`,children:[(0,K.jsx)(`div`,{className:`success-icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,K.jsx)(`h3`,{id:`quick-action-success-title`,children:`Submitted Successfully`}),(0,K.jsxs)(`p`,{children:[te,` The scholarship office can now review your request. Please always check your valid email. The TECH Scholarship Office will notify you when your account is updated.`]})]}),(0,K.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,K.jsx)(`button`,{className:`button`,onClick:()=>ne(``),type:`button`,children:`Done`})})]})]}),(0,K.jsx)(`div`,{className:`scroll-progress`,style:{"--scroll-progress":i}}),(0,K.jsx)(Ar,{onRequest:kt})]})}var $r=`
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
  min-width: 170px;
  border: 1px solid transparent;
  letter-spacing: 0.03em;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.button--portal-open {
  border-color: #15803d;
  background: #15803d;
  color: #ffffff;
  box-shadow: 0 10px 22px rgba(21, 128, 61, 0.2);
}

.button--portal-open:hover {
  background: #166534;
  box-shadow: 0 12px 26px rgba(21, 128, 61, 0.28);
}

.button--portal-closed {
  border-color: #b91c1c;
  background: #b91c1c;
  color: #ffffff;
  box-shadow: 0 10px 22px rgba(185, 28, 28, 0.18);
}

.button--portal-closed:hover {
  background: #991b1b;
  box-shadow: 0 12px 26px rgba(185, 28, 28, 0.26);
}

.button--portal-loading,
.button--portal-loading:disabled {
  border-color: #cbd5e1;
  background: #64748b;
  color: #ffffff;
  cursor: wait;
  opacity: 1;
}

.portal-status-dot {
  width: 9px;
  height: 9px;
  flex: 0 0 auto;
  border: 2px solid rgba(255, 255, 255, 0.82);
  border-radius: 999px;
  background: currentColor;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.16);
}

.button--portal-open .portal-status-dot {
  background: #bbf7d0;
}

.button--portal-closed .portal-status-dot {
  background: #fecaca;
}

.button--portal-loading .portal-status-dot {
  background: #e2e8f0;
  animation: portal-status-pulse 1.2s ease-in-out infinite;
}

@keyframes portal-status-pulse {
  50% {
    opacity: 0.45;
    transform: scale(0.82);
  }
}

.portal-modal-card {
  width: min(100%, 1200px);
  height: min(94dvh, 920px);
  max-height: 94dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 18px;
}

.portal-status-card {
  width: min(100%, 520px);
}

.portal-modal-header {
  flex: 0 0 auto;
  background: linear-gradient(180deg, #fff7ed 0%, #ffffff 100%);
}

.portal-stepper{flex:0 0 auto;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px;padding:12px 24px;border-bottom:1px solid #f2e5dc;background:#fff}
.portal-stepper__step{min-width:0;display:flex;align-items:center;gap:8px;border:0;background:transparent;color:#8d7b70;text-align:left;cursor:pointer}
.portal-stepper__step>span{width:27px;height:27px;flex:0 0 27px;display:grid;place-items:center;border:1px solid #e4d6ca;border-radius:50%;font-size:11px;font-weight:800}
.portal-stepper__step small{font-size:10px;line-height:1.25;font-weight:700}
.portal-stepper__step.is-active{color:#a4480b}.portal-stepper__step.is-active>span,.portal-stepper__step.is-complete>span{border-color:#d86b1d;background:#e87919;color:white}
.portal-step-panel{display:none}.portal-step-panel.is-active{display:block}

.portal-form {
  flex:1 1 auto;
  min-height:0;
  overflow-y:auto;
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

.portal-unavailable{display:flex;align-items:center;gap:8px;color:#71594b;font-size:12px;font-weight:700}.portal-unavailable input{accent-color:#d66b1b}
.portal-choice-field{display:flex;grid-column:span 2;flex-wrap:wrap;align-items:center;gap:10px 18px;min-width:0;margin:0;padding:13px;border:1px solid #ead9cc;border-radius:12px;background:#fff}
.portal-choice-field legend{padding:0 5px;color:#4e382c;font-size:12px;font-weight:800}.portal-choice-field p{flex-basis:100%;margin:0;color:#86756a;font-size:11px}.portal-choice-field label{display:flex;align-items:center;gap:6px;color:#614a3c;font-size:12px}.portal-choice-field input{accent-color:#d66b1b}
.portal-classification{grid-column:span 2;display:grid;gap:5px;padding:14px;border:1px solid #f1d6bf;border-radius:12px;background:#fff6ee}.portal-classification span,.portal-classification small{color:#826d5f;font-size:11px}.portal-classification strong{color:#9f470b;font-size:15px}
.portal-field-helper{color:#8c7b70;font-size:10px}

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
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
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
  flex:0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.portal-acknowledgment{display:flex;align-items:flex-start;gap:10px;margin-top:16px;padding:14px;border:1px solid #f0d4bc;border-radius:12px;background:#fff7ef;color:#4f3b2e;font-size:12px;line-height:1.5;font-weight:700}.portal-acknowledgment input{flex:0 0 auto;margin-top:2px;accent-color:#d66b1b}.portal-review-privacy{margin:10px 0 0;color:#85766b;font-size:11px;line-height:1.5}
.portal-document-controls{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-top:6px}.portal-document-controls button{border:1px solid #efd1b7;border-radius:8px;padding:5px 9px;background:#fff;color:#a14c13;font-size:10px;font-weight:800;cursor:pointer}.portal-document-controls progress{width:100%;height:6px;accent-color:#d66b1b}

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
    height: 100dvh;
    max-height: 100dvh;
    border-radius: 0;
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

  .portal-stepper{grid-template-columns:repeat(6,minmax(74px,1fr));overflow-x:auto;padding:10px 12px;gap:5px}
  .portal-stepper__step{align-items:flex-start;flex-direction:column;gap:4px}
  .portal-choice-field,.portal-classification{grid-column:1/-1}

  .portal-section {
    gap: 12px;
    padding: 12px;
  }

  .portal-review {
    padding: 12px 14px 14px;
  }

  .portal-review-card,
  .portal-review-group {
    padding: 12px;
  }

  .portal-document-upload {
    align-items: flex-start;
    min-height: auto;
    gap: 10px;
    padding: 12px;
  }

  .portal-document-upload__icon {
    width: 40px;
    height: 40px;
  }

  .portal-document-upload__icon .material-symbols-outlined {
    font-size: 23px;
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

  .portal-actions{grid-template-columns:repeat(2,minmax(0,1fr));padding-bottom:max(14px,env(safe-area-inset-bottom))}
  .portal-actions .button:last-child{grid-column:1/-1}

  .admin-login-hero {
    padding: 24px 18px;
  }

  .admin-login-body {
    padding: 16px;
  }

  .modal-actions {
    padding: 12px 16px 16px;
  }

  .portal-form {
    gap: 12px;
  }

  .portal-grid,
  .portal-grid--three {
    gap: 12px;
  }

  .portal-course-option {
    min-height: 48px;
    padding: 11px 12px;
    font-size: 12px;
  }

  .portal-modal-header {
    padding-block: 16px;
  }
}
`,ei=`/IBACMI-Scholarship-Office/assets/samp-wIlKUzMl.jpg`;function ti(){let e=globalThis.crypto;if(typeof e?.randomUUID==`function`)try{return e.randomUUID()}catch{}if(typeof e?.getRandomValues==`function`)try{return Array.from(e.getRandomValues(new Uint8Array(16)),e=>e.toString(16).padStart(2,`0`)).join(``)}catch{}return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`}function ni(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`short`,timeStyle:`short`}).format(new Date(e)):``}function ri(e,t){let n=new Date(e),r=new Date(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate()}function ii({studentSession:e}){let t=e?.sessionToken,n=ln(G.support.listStudentConversations,t?{sessionToken:t}:`skip`),r=W(G.support.sendStudentPortalMessage),i=W(G.support.markRead),[a,o]=(0,U.useState)(!1),[s,c]=(0,U.useState)(null),[l,u]=(0,U.useState)(``),[d,f]=(0,U.useState)(``),[p,m]=(0,U.useState)(!1),h=(0,U.useRef)(null),g=(0,U.useRef)(null),_=(0,U.useRef)(null),v=(0,U.useRef)(!1),y=(0,U.useCallback)(()=>{o(!1),window.setTimeout(()=>h.current?.focus(),0)},[]),b=s?n?.find(e=>e._id===s)??n?.[0]??null:n?.[0]??null,x=b?.messages??[],S=(n??[]).reduce((e,t)=>e+(t.unreadCount??0),0);return(0,U.useEffect)(()=>{a&&t&&b?._id&&i({sessionToken:t,conversationId:b._id}).catch(()=>{})},[a,t,b?._id,i]),(0,U.useEffect)(()=>{a&&g.current?.scrollIntoView({block:`end`,behavior:`smooth`})},[a,b?._id,x.length]),(0,U.useEffect)(()=>{if(!a)return;let e=document.body.style.overflow;document.body.style.overflow=`hidden`;let t=e=>{e.key===`Escape`&&y()};return window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`keydown`,t),document.body.style.overflow=e}},[a,y]),(0,K.jsxs)(K.Fragment,{children:[t&&(0,K.jsxs)(`button`,{ref:h,className:`student-chat-launcher`,type:`button`,onClick:()=>{o(!0),f(``)},"aria-label":`Chat with Scholarship Support${S?`, ${S} unread messages`:``}`,title:`Chat with Scholarship Support`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`chat`}),(0,K.jsx)(`span`,{className:`student-chat-tooltip`,role:`tooltip`,children:`Chat with Scholarship Support`}),S>0&&(0,K.jsx)(`span`,{className:`student-chat-unread`,"aria-label":`${S} unread messages`,children:S>99?`99+`:S})]}),a&&t&&(0,K.jsx)(`div`,{className:`student-chat-overlay`,role:`presentation`,onMouseDown:e=>{e.target===e.currentTarget&&y()},children:(0,K.jsxs)(`section`,{className:`student-chat-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`student-chat-title`,children:[(0,K.jsxs)(`header`,{className:`student-chat-header`,children:[(0,K.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:`IBACMI`}),(0,K.jsxs)(`div`,{className:`student-chat-heading-copy`,children:[(0,K.jsx)(`h2`,{id:`student-chat-title`,children:`UniFAST Scholarship Support`}),(0,K.jsx)(`p`,{children:`Chat directly with our Scholarship Office`})]}),(0,K.jsx)(`button`,{type:`button`,"aria-label":`Minimize chat`,title:`Minimize`,onClick:y,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`expand_more`})}),(0,K.jsx)(`button`,{type:`button`,"aria-label":`Close chat`,title:`Close`,onClick:y,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`close`})})]}),(0,K.jsxs)(`div`,{className:`student-chat-history`,"aria-live":`polite`,"aria-label":`Scholarship Support messages`,children:[n===void 0&&(0,K.jsxs)(`div`,{className:`student-chat-loading`,"aria-label":`Loading conversation history`,children:[(0,K.jsx)(`i`,{}),(0,K.jsxs)(`span`,{children:[(0,K.jsx)(`b`,{}),(0,K.jsx)(`b`,{})]}),(0,K.jsx)(`i`,{}),(0,K.jsxs)(`span`,{children:[(0,K.jsx)(`b`,{}),(0,K.jsx)(`b`,{})]})]}),n!==void 0&&x.length===0&&(0,K.jsxs)(`div`,{className:`student-chat-welcome`,children:[(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`forum`}),(0,K.jsx)(`p`,{children:b?.status===`resolved`?`Your previous conversation is resolved. Send a message to reopen it or ask a new question.`:`Hello! How can we help with your UniFAST application today?`})]}),x.map((e,t)=>{let n=x[t-1],r=e.senderRole===`student`;return(0,K.jsxs)(`div`,{children:[(!n||!ri(n.createdAt,e.createdAt))&&(0,K.jsx)(`div`,{className:`student-chat-date`,children:(0,K.jsx)(`span`,{children:new Intl.DateTimeFormat(`en-PH`,{dateStyle:`full`}).format(new Date(e.createdAt))})}),(0,K.jsxs)(`div`,{className:`student-chat-message${r?` is-own`:``}`,children:[(0,K.jsx)(`div`,{className:`student-chat-bubble`,children:e.content}),(0,K.jsxs)(`time`,{children:[ni(e.createdAt),r&&e.readByAdmin?` · Seen by Scholarship Office`:``]})]})]},e._id)}),(0,K.jsx)(`div`,{ref:g})]}),d&&(0,K.jsx)(`p`,{className:`student-chat-error`,role:`alert`,children:d}),(0,K.jsxs)(`form`,{className:`student-chat-composer`,onSubmit:async e=>{e.preventDefault();let n=l.trim();if(!(!t||!n||v.current)){v.current=!0,m(!0),f(``);try{c((await r({sessionToken:t,content:n,clientMessageId:ti()})).conversationId),u(``),_.current&&(_.current.style.height=``)}catch(e){f(e instanceof Error?e.message:`Your message could not be sent. Please try again.`)}finally{v.current=!1,m(!1)}}},children:[(0,K.jsx)(`textarea`,{ref:_,value:l,maxLength:2e3,"aria-label":`Write a message`,placeholder:`Write a message…`,onChange:e=>{u(e.target.value),e.target.style.height=`auto`,e.target.style.height=`${Math.min(e.target.scrollHeight,140)}px`},onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),e.currentTarget.form?.requestSubmit())}}),(0,K.jsx)(`button`,{type:`submit`,"aria-label":p?`Sending message`:`Send message`,disabled:!l.trim()||p,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:p?`hourglass_top`:`send`})}),(0,K.jsx)(`small`,{children:p?`Sending…`:`Enter to send · Shift + Enter for a new line`})]})]})})]})}var ai=`modulepreload`,oi=function(e){return`/IBACMI-Scholarship-Office/`+e},si={},ci=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=oi(t,n),t in si)return;si[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ai,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},li=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``),ui={tesAwardNo:``,studentId:``,batchNo:``,status:``,semester:``,schoolYear:``};function di(e){return[...new Set(e.filter(Boolean))]}function fi(e){let t=String(e??``).match(/\d{4}/);return t?Number(t[0]):0}function pi(){let e=new Date,t=e.getFullYear(),n=e.getMonth()>=5?t:t-1;return`${n}-${n+1}`}function mi(e){return e.replace(/[\s-]/g,``).trim()}function hi(e){return e.replace(/[^\d+]/g,``).replace(/(?!^)\+/g,``)}function gi(e){let t=mi(e);return/^09\d{9}$/.test(t)||/^\+639\d{9}$/.test(t)}function _i(e){let t=pi();return e.filter(e=>e.schoolYear===t).sort((e,t)=>(t.uploadedAt??0)-(e.uploadedAt??0))[0]||[...e].sort((e,t)=>{let n=fi(t.schoolYear)-fi(e.schoolYear);if(n!==0)return n;let r=(t.uploadedAt??0)-(e.uploadedAt??0);return r===0?(t._creationTime??0)-(e._creationTime??0):r})[0]}function vi({url:e}){let t=(0,U.useRef)(null),[n,r]=(0,U.useState)(0),[i,a]=(0,U.useState)(``),[o,s]=(0,U.useState)(0);return(0,U.useEffect)(()=>{let e=t.current;if(!e)return;let n=()=>r(Math.floor(e.clientWidth));if(n(),typeof ResizeObserver>`u`)return window.addEventListener(`resize`,n),()=>window.removeEventListener(`resize`,n);let i=new ResizeObserver(n);return i.observe(e),()=>i.disconnect()},[]),(0,U.useEffect)(()=>{let r=t.current;if(!r||!e||!n)return;let i=!1,o,s;return(async()=>{a(``),r.replaceChildren(),r.setAttribute(`aria-busy`,`true`);try{let[{getDocument:t,GlobalWorkerOptions:a},{default:c}]=await Promise.all([ci(()=>import(`./pdf-DVzOM628.js`),[]),ci(()=>import(`./pdf.worker.min-D7EoebCV.js`),[])]);if(i)return;a.workerSrc=c;let l=await fetch(e,{mode:`cors`});if(!l.ok)throw Error(`Unable to download PDF (${l.status}).`);let u=new Uint8Array(await l.arrayBuffer());if(i)return;if(!u.length)throw Error(`The uploaded PDF is empty.`);o=t({data:u,disableAutoFetch:!0,disableRange:!0,disableStream:!0});let d=await o.promise;for(let e=1;e<=d.numPages;e+=1){if(i)return;let t=await d.getPage(e),a=n/t.getViewport({scale:1}).width,o=t.getViewport({scale:a}),c=Math.min(window.devicePixelRatio||1,2),l=document.createElement(`canvas`);l.className=`student-id-preview__page`,l.setAttribute(`aria-label`,`Uploaded School ID page ${e}`),l.width=Math.floor(o.width*c),l.height=Math.floor(o.height*c),l.style.width=`${Math.floor(o.width)}px`,l.style.height=`${Math.floor(o.height)}px`,r.appendChild(l),s=t.render({canvas:l,transform:c===1?null:[c,0,0,c,0,0],viewport:o}),await s.promise}}catch(e){!i&&e?.name!==`RenderingCancelledException`&&(console.error(`Unable to render uploaded School ID PDF:`,e),r.replaceChildren(),a(`Preview unavailable, but your file was uploaded successfully.`))}finally{i||r.removeAttribute(`aria-busy`)}})(),()=>{i=!0,s?.cancel(),o?.destroy()}},[n,o,e]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`div`,{className:`student-id-preview__pages${i?` student-id-preview__pages--error`:``}`,ref:t,children:(0,K.jsx)(`span`,{className:`student-id-preview__loading`,children:`Loading PDF preview...`})}),i&&(0,K.jsxs)(`div`,{className:`student-id-preview__error`,children:[(0,K.jsx)(`span`,{className:`student-id-preview__status-icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,K.jsxs)(`div`,{className:`student-id-preview__error-copy`,children:[(0,K.jsx)(`strong`,{children:`School ID file is uploaded`}),(0,K.jsx)(`span`,{children:i})]}),(0,K.jsxs)(`div`,{className:`student-id-preview__error-actions`,children:[(0,K.jsx)(`a`,{href:e,rel:`noreferrer`,target:`_blank`,children:`Open file`}),(0,K.jsx)(`button`,{onClick:()=>s(e=>e+1),type:`button`,children:`Retry preview`})]})]})]})}function yi({studentSession:e,onLogout:t,onStudentSessionUpdate:n}){let r=String(e?.schoolId??``).trim(),i=ln(G.allinfo.listByStudentId,r?{studentId:r}:`skip`),a=W(G.allinfo.saveStudentIdUploads),o=W(G.adminAuth.updateStudentPhoneNumber),[s,c]=(0,U.useState)(null),[l,u]=(0,U.useState)(``),[d,f]=(0,U.useState)(``),[p,m]=(0,U.useState)(!1),h=(0,U.useRef)(null),[g,_]=(0,U.useState)(e?.phoneNumber??``),[v,y]=(0,U.useState)(``),[b,x]=(0,U.useState)(``),[S,C]=(0,U.useState)(!1),w=W(G.adminAuth.updateStudentCurrentAddress),[T,ee]=(0,U.useState)(e?.currentAddress??``),[E,D]=(0,U.useState)(``),[O,te]=(0,U.useState)(``),[ne,re]=(0,U.useState)(!1),k=W(G.adminAuth.updateStudentFacebookProfile),A=W(G.support.logout),[j,ie]=(0,U.useState)(e?.facebookProfileUrl??``),[ae,M]=(0,U.useState)(``),[oe,N]=(0,U.useState)(``),[P,F]=(0,U.useState)(!1),I=r.toLowerCase(),L=e?.phoneNumber??``,se=mi(g)!==mi(L),ce=e?.currentAddress??``,le=T.trim()!==ce.trim(),ue=e?.facebookProfileUrl??``,de=j.trim()!==ue.trim(),R=(0,U.useMemo)(()=>!I||!i?null:_i(i.filter(e=>String(e.studentId??``).trim().toLowerCase()===I))??null,[i,I]),fe=R?{tesAwardNo:R.tesAwardNumber??``,studentId:R.studentId??``,lastName:R.lastName??``,firstName:R.firstName??``,middleInitial:R.middleInitial??``,batchNo:R.batchId??``,status:R.status??``,semester:R.semester??``,schoolYear:R.schoolYear??``}:ui,pe=i===void 0,me=!!I,z=!pe&&me&&!R,he=di([fe.status,`Validated`,`Pending`,`Rejected`]),ge=di([fe.semester,`1st Semester`,`2nd Semester`]),_e=di([fe.schoolYear,`2023-2024`,`2024-2025`]),ve=!!(R?.frontIdUrl||R?.frontIdStorageId),ye=R?.frontIdUrl??``;(0,U.useEffect)(()=>{if(!d)return;let e=e=>{e.key===`Escape`&&f(``)},t=document.body.style.overflow;return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),h.current?.focus(),()=>{document.body.style.overflow=t,window.removeEventListener(`keydown`,e)}},[d]);let be=async()=>{try{e?.sessionToken&&await A({sessionToken:e.sessionToken})}catch{}finally{typeof t==`function`&&t()}},xe=e=>{_(hi(e.target.value)),y(``),x(``)},Se=e=>{ee(e.target.value),D(``),te(``)},Ce=e=>{ie(e.target.value),M(``),N(``)},we=async()=>{let t=j.trim();if(M(``),N(``),!r){M(`Please sign in before updating your Facebook profile link.`);return}let i;try{i=new URL(t)}catch{M(`Enter a valid Facebook profile link.`);return}let a=i.hostname.toLowerCase();if(i.protocol!==`https:`||!(a===`facebook.com`||a.endsWith(`.facebook.com`)||a===`fb.com`||a.endsWith(`.fb.com`))){M(`Use a valid https://facebook.com profile link.`);return}if(!de){N(`Facebook profile link is already up to date.`);return}F(!0);try{let r=await k({schoolId:e.schoolId,facebookProfileUrl:t});if(!r.success){M(r.message||`Unable to update Facebook profile link.`);return}ie(r.admin?.facebookProfileUrl??t),N(r.message||`Facebook profile link updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){M(e instanceof Error?e.message:`Unable to update Facebook profile link.`)}finally{F(!1)}},Te=async()=>{let t=mi(g);if(y(``),x(``),!r){y(`Please sign in before updating your phone number.`);return}if(!t){y(`Phone number is required.`);return}if(!gi(t)){y(`Please enter a valid phone number. Example: 09123456789 or +639123456789.`);return}if(!se){x(`Phone number is already up to date.`);return}C(!0);try{let r=await o({schoolId:e.schoolId,phoneNumber:t});if(!r.success){y(r.message||`Unable to update phone number.`);return}_(r.admin?.phoneNumber??t),x(r.message||`Phone number updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){y(e instanceof Error?e.message:`Unable to update phone number.`)}finally{C(!1)}},Ee=async()=>{let t=T.trim();if(D(``),te(``),!r){D(`Please sign in before updating your current address.`);return}if(!t){D(`Current address is required.`);return}if(t.length<8){D(`Current address must be at least 8 characters.`);return}if(!le){te(`Current address is already up to date.`);return}re(!0);try{let r=await w({schoolId:e.schoolId,currentAddress:t});if(!r.success){D(r.message||`Unable to update current address.`);return}ee(r.admin?.currentAddress??t),te(r.message||`Current address updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){D(e instanceof Error?e.message:`Unable to update current address.`)}finally{re(!1)}},De=e=>t=>{let n=t.target.files?.[0]??null;if(u(``),f(``),n&&n.type!==`application/pdf`&&!/\.pdf$/i.test(n.name)){u(`Only PDF files are allowed.`),t.target.value=``,e(null);return}if(n&&n.size>5*1024*1024){u(`Each file must be 5MB or smaller.`),t.target.value=``,e(null);return}e(n)},Oe=async e=>{let t=[R.lastName,R.firstName,R.middleInitial].filter(Boolean).join(` `),n=new URLSearchParams({batchNo:R.batchId||`no-batch`,documentType:`School-ID`,fileName:e.name,fullName:t,schoolYear:R.schoolYear||`unknown-school-year`,studentId:R.studentId}),r;try{r=await fetch(`${li}/google-drive/student-upload?${n.toString()}`,{method:`POST`,headers:{"Content-Type":e.type||`application/pdf`},body:e})}catch{throw Error(`Unable to connect to the PDF upload service. Deploy the Convex HTTP functions and check VITE_CONVEX_URL or VITE_CONVEX_SITE_URL.`)}if(!r.ok){let t=await r.json().catch(()=>null);throw Error(t?.message||`Unable to upload ${e.name} to Google Drive.`)}let{fileUrl:i}=await r.json();if(!i)throw Error(`Google Drive did not return a file link for ${e.name}.`);return i};return(0,K.jsxs)(`div`,{className:`student-page`,children:[(0,K.jsxs)(`header`,{className:`student-topbar`,children:[(0,K.jsx)(`button`,{"aria-label":`Log out and return to landing page`,className:`student-icon-button`,onClick:be,type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`arrow_back`})}),(0,K.jsx)(`h1`,{children:`Student Information`})]}),(0,K.jsxs)(`main`,{className:`student-main`,children:[(0,K.jsxs)(`section`,{className:`student-hero`,"aria-labelledby":`student-title`,children:[(0,K.jsx)(`div`,{className:`student-badge`,children:`Academic Year Update`}),(0,K.jsx)(`h2`,{id:`student-title`,children:`Unifast Portal`}),(0,K.jsx)(`p`,{children:`Please ensure all details match your official documents for successful validation.`})]}),me&&(0,K.jsx)(ii,{studentSession:e}),!me&&(0,K.jsx)(`div`,{className:`student-state-box`,children:`Please sign in with a student account to view your grantee information.`}),pe&&(0,K.jsx)(`div`,{className:`student-state-box`,children:`Loading your grantee information...`}),z&&(0,K.jsxs)(`div`,{className:`student-state-box student-state-box--warning`,children:[`No allinfo record was found for Student ID `,e?.schoolId,`.`]}),(0,K.jsxs)(`form`,{className:`student-form`,id:`student-information-form`,children:[(0,K.jsxs)(`div`,{className:`student-field`,children:[(0,K.jsx)(`label`,{htmlFor:`tes-award-no`,children:`TES Award No.`}),(0,K.jsx)(`input`,{id:`tes-award-no`,placeholder:`e.g. TES-2024-XXXX`,readOnly:!0,type:`text`,value:fe.tesAwardNo})]}),(0,K.jsxs)(`div`,{className:`student-field`,children:[(0,K.jsx)(`label`,{htmlFor:`student-id`,children:`Student ID`}),(0,K.jsx)(`input`,{id:`student-id`,placeholder:`Enter your University ID`,readOnly:!0,type:`text`,value:fe.studentId})]}),(0,K.jsxs)(`div`,{className:`student-field student-field--with-action`,children:[(0,K.jsx)(`label`,{htmlFor:`phone-number`,children:`Phone No.`}),(0,K.jsxs)(`div`,{className:`student-inline-control`,children:[(0,K.jsx)(`input`,{id:`phone-number`,inputMode:`tel`,pattern:`\\+?[0-9]*`,placeholder:`09123456789 or +639123456789`,type:`tel`,value:g,onChange:xe}),(0,K.jsx)(`button`,{className:`student-inline-button`,disabled:!me||!se||S,onClick:Te,type:`button`,children:S?`Saving...`:`Save`})]}),v&&(0,K.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:v}),b&&(0,K.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:b})]}),(0,K.jsxs)(`div`,{className:`student-field student-field--with-action student-field--full`,children:[(0,K.jsx)(`label`,{htmlFor:`current-address`,children:`Your Home Permanent Address ( Ex. Purok number, Brgy, City/Municipality, Province )`}),(0,K.jsx)(`textarea`,{id:`current-address`,placeholder:`Enter your current address`,rows:3,value:T,onChange:Se}),(0,K.jsx)(`button`,{className:`student-inline-button student-inline-button--wide`,disabled:!me||!le||ne,onClick:Ee,type:`button`,children:ne?`Saving Address...`:`Save Current Address`}),E&&(0,K.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:E}),O&&(0,K.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:O})]}),(0,K.jsxs)(`div`,{className:`student-field student-field--with-action student-field--full`,children:[(0,K.jsx)(`label`,{htmlFor:`facebook-profile-url`,children:`Facebook Profile Link`}),(0,K.jsxs)(`div`,{className:`student-inline-control`,children:[(0,K.jsx)(`input`,{id:`facebook-profile-url`,inputMode:`url`,onChange:Ce,placeholder:`https://www.facebook.com/your.profile`,type:`url`,value:j}),(0,K.jsx)(`button`,{className:`student-inline-button`,disabled:!me||!de||P,onClick:we,type:`button`,children:P?`Saving...`:`Save Link`})]}),ae&&(0,K.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:ae}),oe&&(0,K.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:oe})]}),(0,K.jsxs)(`div`,{className:`student-field`,children:[(0,K.jsx)(`label`,{htmlFor:`last-name`,children:`Last Name`}),(0,K.jsx)(`input`,{id:`last-name`,placeholder:`Last Name`,readOnly:!0,type:`text`,value:fe.lastName})]}),(0,K.jsxs)(`div`,{className:`student-field`,children:[(0,K.jsx)(`label`,{htmlFor:`first-name`,children:`First Name`}),(0,K.jsx)(`input`,{id:`first-name`,placeholder:`First Name`,readOnly:!0,type:`text`,value:fe.firstName})]}),(0,K.jsxs)(`div`,{className:`student-field`,children:[(0,K.jsx)(`label`,{htmlFor:`middle-initial`,children:`MI.`}),(0,K.jsx)(`input`,{id:`middle-initial`,placeholder:`MI.`,readOnly:!0,type:`text`,value:fe.middleInitial})]}),(0,K.jsxs)(`div`,{className:`student-field`,children:[(0,K.jsx)(`label`,{htmlFor:`batch-no`,children:`Batch No.`}),(0,K.jsx)(`input`,{id:`batch-no`,placeholder:`e.g. Batch 7`,readOnly:!0,type:`text`,value:fe.batchNo})]}),(0,K.jsxs)(`div`,{className:`student-select-grid`,children:[(0,K.jsxs)(`div`,{className:`student-field`,children:[(0,K.jsx)(`label`,{htmlFor:`status`,children:`Status`}),(0,K.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,K.jsxs)(`select`,{disabled:!0,id:`status`,value:fe.status,children:[(0,K.jsx)(`option`,{disabled:!0,value:``,children:`Select Status`}),he.map(e=>(0,K.jsx)(`option`,{children:e},e))]}),(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]}),(0,K.jsxs)(`div`,{className:`student-field`,children:[(0,K.jsx)(`label`,{htmlFor:`semester`,children:`Semester`}),(0,K.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,K.jsxs)(`select`,{disabled:!0,id:`semester`,value:fe.semester,children:[(0,K.jsx)(`option`,{disabled:!0,value:``,children:`Select Semester`}),ge.map(e=>(0,K.jsx)(`option`,{children:e},e))]}),(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]}),(0,K.jsxs)(`div`,{className:`student-field`,children:[(0,K.jsx)(`label`,{htmlFor:`school-year`,children:`School Year`}),(0,K.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,K.jsxs)(`select`,{disabled:!0,id:`school-year`,value:fe.schoolYear,children:[(0,K.jsx)(`option`,{disabled:!0,value:``,children:`Select School Year`}),_e.map(e=>(0,K.jsx)(`option`,{children:e},e))]}),(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]})]}),(0,K.jsxs)(`section`,{className:`student-upload-section`,"aria-labelledby":`student-upload-title`,children:[(0,K.jsxs)(`div`,{className:`student-upload-copy`,children:[(0,K.jsx)(`h3`,{id:`student-upload-title`,children:`Upload colored copy of School ID with 3 signatures and Batch No.`}),(0,K.jsxs)(`p`,{children:[`Files will be saved to your `,fe.schoolYear||`current`,` allinfo record. If you have records from other years, the portal automatically uses the current or latest School Year.`]})]}),(0,K.jsxs)(`aside`,{className:`student-sample-card`,"aria-label":`Sample School ID upload format`,children:[(0,K.jsxs)(`div`,{className:`student-sample-card__header`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{className:`student-sample-card__eyebrow`,children:`Sample Format`}),(0,K.jsx)(`h4`,{children:`Scan layout guide`})]}),(0,K.jsx)(`span`,{className:`student-sample-card__badge`,children:`Required`})]}),(0,K.jsxs)(`div`,{className:`student-sample-card__body`,children:[(0,K.jsx)(`a`,{className:`student-sample-card__image-link`,href:ei,rel:`noreferrer`,target:`_blank`,title:`Open sample format`,children:(0,K.jsx)(`img`,{alt:`Sample scan format showing front and back School ID, three signatures, and Batch No.`,src:ei})}),(0,K.jsxs)(`div`,{className:`student-sample-card__checklist`,children:[(0,K.jsx)(`p`,{children:`Before converting to PDF, make sure your scan includes:`}),(0,K.jsxs)(`ul`,{children:[(0,K.jsx)(`li`,{children:`Colored front and back copy of your School ID`}),(0,K.jsx)(`li`,{children:`Three clear signatures below the ID copies`}),(0,K.jsx)(`li`,{children:`Readable Batch No. written on the same page`})]}),(0,K.jsx)(`span`,{children:`Upload the final file as PDF only, maximum 5MB.`})]})]})]}),(0,K.jsxs)(`div`,{className:`student-upload-field`,children:[(0,K.jsx)(`span`,{className:`student-upload-label`,children:`Upload File`}),(0,K.jsxs)(`label`,{className:`student-upload-card${s||ve?` student-upload-card--selected`:``}`,htmlFor:`file-front`,children:[(0,K.jsx)(`input`,{accept:`application/pdf,.pdf`,disabled:!R||p,id:`file-front`,type:`file`,onChange:De(c)}),(0,K.jsx)(`span`,{className:`student-upload-icon`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`id_card`})}),(0,K.jsx)(`span`,{className:`student-upload-title`,children:s?.name||(ve?`File already uploaded`:`Tap to upload File`)}),(0,K.jsx)(`span`,{className:`student-upload-note`,children:`PDF only up to 5MB`})]})]}),ye&&(0,K.jsxs)(`div`,{className:`student-id-preview`,children:[(0,K.jsxs)(`div`,{className:`student-id-preview__header`,children:[(0,K.jsxs)(`div`,{className:`student-id-preview__title`,children:[(0,K.jsx)(`span`,{className:`student-id-preview__title-icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`task_alt`})}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`Uploaded School ID`}),(0,K.jsx)(`small`,{children:`File received and ready for review`})]})]}),(0,K.jsx)(`a`,{href:ye,rel:`noreferrer`,target:`_blank`,children:`View full file`})]}),(0,K.jsx)(vi,{url:ye}),(0,K.jsx)(`noscript`,{children:(0,K.jsxs)(`a`,{className:`student-id-preview__file`,href:ye,rel:`noreferrer`,target:`_blank`,children:[(0,K.jsx)(`span`,{className:`student-id-preview__file-icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`})}),(0,K.jsx)(`span`,{children:`Open uploaded PDF`})]})})]}),l&&(0,K.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:l}),(0,K.jsxs)(`button`,{className:`student-save-button`,disabled:!R||p,onClick:async()=>{if(u(``),f(``),!R){u(`No allinfo record is available for your Student ID.`);return}if(!s){u(`Choose a PDF file before saving.`);return}m(!0);try{let e=await Oe(s),t=await a({studentId:R.studentId,schoolYear:R.schoolYear,frontIdUrl:e});c(null),f(`ID file saved for School Year ${t.schoolYear||fe.schoolYear}.`)}catch(e){u(e instanceof Error?e.message:`Unable to save uploaded files.`)}finally{m(!1)}},type:`button`,children:[(0,K.jsx)(`span`,{children:p?`Saving Uploads...`:`Save Uploaded ID`}),(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})]})]})]})]}),d?(0,K.jsxs)(`div`,{"aria-describedby":`student-upload-success-description`,"aria-labelledby":`student-upload-success-title`,"aria-modal":`true`,className:`student-success-modal`,role:`dialog`,children:[(0,K.jsx)(`button`,{"aria-label":`Close upload success message`,className:`student-success-modal__backdrop`,onClick:()=>f(``),type:`button`}),(0,K.jsxs)(`section`,{className:`student-success-modal__card`,children:[(0,K.jsx)(`button`,{"aria-label":`Close`,className:`student-success-modal__close`,onClick:()=>f(``),type:`button`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`close`})}),(0,K.jsx)(`div`,{className:`student-success-modal__icon`,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:`material-symbols-outlined`,children:`check`})}),(0,K.jsx)(`span`,{className:`student-success-modal__eyebrow`,children:`Upload complete`}),(0,K.jsx)(`h2`,{id:`student-upload-success-title`,children:`Successfully submitted`}),(0,K.jsxs)(`p`,{id:`student-upload-success-description`,children:[d,` Your document is now available for review.`]}),(0,K.jsx)(`button`,{className:`student-success-modal__action`,onClick:()=>f(``),ref:h,type:`button`,children:`Done`})]})]}):null]})}var bi=class extends U.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error(`ErrorBoundary caught`,e,t)}render(){if(this.state.hasError){let e=this.state.error?.message||`An unexpected error occurred.`;return(0,K.jsx)(`div`,{style:{minHeight:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:24,boxSizing:`border-box`,background:`#fbfaf8`,color:`#1c1b1b`,fontFamily:`'Hanken Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`},children:(0,K.jsxs)(`div`,{style:{maxWidth:720},children:[(0,K.jsx)(`h2`,{style:{marginTop:0},children:`Something went wrong`}),(0,K.jsx)(`p`,{style:{color:`#584237`,fontWeight:700},children:e}),(0,K.jsx)(`p`,{style:{color:`#584237`},children:'If the message mentions Convex functions (for example "Could not find public function"), make sure the Convex dev server is running (`npx convex dev`) or that `VITE_CONVEX_URL` points to a deployed Convex app.'}),(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:18},children:[(0,K.jsx)(`button`,{type:`button`,onClick:()=>window.location.reload(),style:{background:`#ea580c`,color:`#fff`,border:0,padding:`10px 14px`,borderRadius:8,fontWeight:800,cursor:`pointer`},children:`Reload`}),(0,K.jsx)(`button`,{type:`button`,onClick:()=>alert("Run `npx convex dev` in the project root or set VITE_CONVEX_URL."),style:{background:`#fff`,color:`#1c1b1b`,border:`1px solid rgba(150,116,101,0.6)`,padding:`10px 14px`,borderRadius:8,fontWeight:700,cursor:`pointer`},children:`Help`})]})]})})}return this.props.children}},xi=`unifast.adminSession`,Si=`unifast.studentViewOpen`,Ci=`unifast.studentSession`;function wi(){try{let e=window.localStorage.getItem(xi),t=e?JSON.parse(e):null;return t?.sessionToken?t:null}catch{return null}}function Ti(){try{return window.localStorage.getItem(Si)===`true`}catch{return!1}}function q(){try{let e=window.localStorage.getItem(Ci),t=e?JSON.parse(e):null;return t?.sessionToken?t:null}catch{return null}}function J(){let e=(0,On.c)(21),[t,n]=(0,U.useState)(wi),[r,i]=(0,U.useState)(q),[a,o]=(0,U.useState)(Ei),s;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=()=>{n(null)},e[0]=s):s=e[0];let c=s,l;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(l=()=>{i(null),o(!1)},e[1]=l):l=e[1];let u=l,d;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(d=e=>{if(e?.role===`student`){n(null),i(e),o(!0);return}i(null),o(!1),n(e)},e[2]=d):d=e[2];let f=d,p;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(p=e=>{n(null),i(e??null),o(!0)},e[3]=p):p=e[3];let m=p,h;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(h=e=>{i(t=>({...t??{},...e??{}}))},e[4]=h):h=e[4];let g=h,_,v;e[5]===t?(_=e[6],v=e[7]):(_=()=>{if(!t)return;let e=window.location.href,n={...window.history.state??{},unifastAdminGuard:!0};window.history.pushState(n,``,e);let r=()=>{window.history.pushState(n,``,e)};return window.addEventListener(`popstate`,r),()=>window.removeEventListener(`popstate`,r)},v=[t],e[5]=t,e[6]=_,e[7]=v),(0,U.useEffect)(_,v);let y,b;e[8]===t?(y=e[9],b=e[10]):(y=()=>{try{if(t){window.localStorage.setItem(xi,JSON.stringify(t)),window.localStorage.removeItem(Si),window.localStorage.removeItem(Ci);return}window.localStorage.removeItem(xi)}catch{}},b=[t],e[8]=t,e[9]=y,e[10]=b),(0,U.useEffect)(y,b);let x,S;if(e[11]!==a||e[12]!==r?(S=()=>{try{if(a){window.localStorage.setItem(Si,`true`),window.localStorage.removeItem(xi),r&&window.localStorage.setItem(Ci,JSON.stringify(r));return}window.localStorage.removeItem(Si),window.localStorage.removeItem(Ci)}catch{}},x=[a,r],e[11]=a,e[12]=r,e[13]=x,e[14]=S):(x=e[13],S=e[14]),(0,U.useEffect)(S,x),t){let n;return e[15]===t?n=e[16]:(n=(0,K.jsx)(bi,{children:(0,K.jsx)(xr,{adminSession:t,onLogout:c})}),e[15]=t,e[16]=n),n}if(a){let t=r?.schoolId??`student`,n;return e[17]!==r||e[18]!==t?(n=(0,K.jsx)(bi,{children:(0,K.jsx)(yi,{studentSession:r,onLogout:u,onStudentSessionUpdate:g},t)}),e[17]=r,e[18]=t,e[19]=n):n=e[19],n}let C;return e[20]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,K.jsx)(bi,{children:(0,K.jsx)(Qr,{onAdminLoginSuccess:f,onStudentRegistrationSuccess:m})}),e[20]=C):C=e[20],C}function Ei(){return Ti()&&!!q()?.sessionToken}var Di=`https://ideal-crane-292.convex.cloud`,Oi=(0,Cn.createRoot)(document.getElementById(`root`));`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/IBACMI-Scholarship-Office/sw.js`).catch(e=>{console.error(`Unable to register the web app service worker:`,e)})});{let e=new an(Di);Oi.render((0,K.jsx)(U.StrictMode,{children:(0,K.jsx)(cn,{client:e,children:(0,K.jsx)(J,{})})}))}export{ci as t};