var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();for(var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function D(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,D(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),D(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=D(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=D(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return D(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function O(e,t,n){if(e==null)return e;var r=[],i=0;return D(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function k(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var oe=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},se={map:O,forEach:function(e,t,n){O(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=se,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:k}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,oe)}catch(e){oe(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=[],f=[],p=Uint8Array,m=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,h=0,g=m.length;h<g;++h)d[h]=m[h],f[m.charCodeAt(h)]=h;f[45]=62,f[95]=63;function _(e){var t=e.length;if(t%4>0)throw Error(`Invalid string. Length must be a multiple of 4`);var n=e.indexOf(`=`);n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function v(e,t,n){return(t+n)*3/4-n}function y(e){var t,n=_(e),r=n[0],i=n[1],a=new p(v(e,r,i)),o=0,s=i>0?r-4:r,c;for(c=0;c<s;c+=4)t=f[e.charCodeAt(c)]<<18|f[e.charCodeAt(c+1)]<<12|f[e.charCodeAt(c+2)]<<6|f[e.charCodeAt(c+3)],a[o++]=t>>16&255,a[o++]=t>>8&255,a[o++]=t&255;return i===2&&(t=f[e.charCodeAt(c)]<<2|f[e.charCodeAt(c+1)]>>4,a[o++]=t&255),i===1&&(t=f[e.charCodeAt(c)]<<10|f[e.charCodeAt(c+1)]<<4|f[e.charCodeAt(c+2)]>>2,a[o++]=t>>8&255,a[o++]=t&255),a}function b(e){return d[e>>18&63]+d[e>>12&63]+d[e>>6&63]+d[e&63]}function x(e,t,n){for(var r,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(e[a+2]&255),i.push(b(r));return i.join(``)}function S(e){for(var t,n=e.length,r=n%3,i=[],a=16383,o=0,s=n-r;o<s;o+=a)i.push(x(e,o,o+a>s?s:o+a));return r===1?(t=e[n-1],i.push(d[t>>2]+d[t<<4&63]+`==`)):r===2&&(t=(e[n-2]<<8)+e[n-1],i.push(d[t>>10]+d[t>>4&63]+d[t<<2&63]+`=`)),i.join(``)}function C(e){if(e===void 0)return{};if(!ee(e))throw Error(`The arguments to a Convex function must be an object. Received: ${e}`);return e}function w(e){if(e===void 0)throw Error(`Client created with undefined deployment address. If you used an environment variable, check that it's set.`);if(typeof e!=`string`)throw Error(`Invalid deployment address: found ${e}".`);if(!(e.startsWith(`http:`)||e.startsWith(`https:`)))throw Error(`Invalid deployment address: Must start with "https://" or "http://". Found "${e}".`);try{new URL(e)}catch{throw Error(`Invalid deployment address: "${e}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}if(e.endsWith(`.convex.site`))throw Error(`Invalid deployment address: "${e}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}function ee(e){let t=typeof e==`object`,n=Object.getPrototypeOf(e),r=n===null||n===Object.prototype||n?.constructor?.name===`Object`;return t&&r}var T=!0,te=BigInt(`-9223372036854775808`),E=BigInt(`9223372036854775807`),ne=BigInt(`0`),re=BigInt(`8`),ie=BigInt(`256`);function ae(e){return Number.isNaN(e)||!Number.isFinite(e)||Object.is(e,-0)}function D(e){e<ne&&(e-=te+te);let t=e.toString(16);t.length%2==1&&(t=`0`+t);let n=new Uint8Array(new ArrayBuffer(8)),r=0;for(let i of t.match(/.{2}/g).reverse())n.set([parseInt(i,16)],r++),e>>=re;return S(n)}function O(e){let t=y(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);let n=ne,r=ne;for(let e of t)n+=BigInt(e)*ie**r,r++;return n>E&&(n+=te+te),n}function k(e){if(e<te||E<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);let t=new ArrayBuffer(8);return new DataView(t).setBigInt64(0,e,!0),S(new Uint8Array(t))}function oe(e){let t=y(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);return new DataView(t.buffer).getBigInt64(0,!0)}var se=DataView.prototype.setBigInt64?k:D,ce=DataView.prototype.getBigInt64?oe:O,le=1024;function A(e){if(e.length>le)throw Error(`Field name ${e} exceeds maximum field name length ${le}.`);if(e.startsWith(`$`))throw Error(`Field name ${e} starts with a '$', which is reserved.`);for(let t=0;t<e.length;t+=1){let n=e.charCodeAt(t);if(n<32||n>=127)throw Error(`Field name ${e} has invalid character '${e[t]}': Field names can only contain non-control ASCII characters`)}}function j(e){if(e===null||typeof e==`boolean`||typeof e==`number`||typeof e==`string`)return e;if(Array.isArray(e))return e.map(e=>j(e));if(typeof e!=`object`)throw Error(`Unexpected type of ${e}`);let t=Object.entries(e);if(t.length===1){let n=t[0][0];if(n===`$bytes`){if(typeof e.$bytes!=`string`)throw Error(`Malformed $bytes field on ${e}`);return y(e.$bytes).buffer}if(n===`$integer`){if(typeof e.$integer!=`string`)throw Error(`Malformed $integer field on ${e}`);return ce(e.$integer)}if(n===`$float`){if(typeof e.$float!=`string`)throw Error(`Malformed $float field on ${e}`);let t=y(e.$float);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $float`);let n=new DataView(t.buffer).getFloat64(0,T);if(!ae(n))throw Error(`Float ${n} should be encoded as a number`);return n}if(n===`$set`)throw Error(`Received a Set which is no longer supported as a Convex type.`);if(n===`$map`)throw Error(`Received a Map which is no longer supported as a Convex type.`)}let n={};for(let[t,r]of Object.entries(e))A(t),n[t]=j(r);return n}var ue=16384;function de(e){let t=JSON.stringify(e,(e,t)=>t===void 0?`undefined`:typeof t==`bigint`?`${t.toString()}n`:t);if(t.length>ue){let e=ue-14,n=t.codePointAt(e-1);return n!==void 0&&n>65535&&--e,t.substring(0,e)+`[...truncated]`}return t}function fe(e,t,n,r){if(e===void 0){let e=n&&` (present at path ${n} in original object ${de(t)})`;throw Error(`undefined is not a valid Convex value${e}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`)}if(e===null)return e;if(typeof e==`bigint`){if(e<te||E<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);return{$integer:se(e)}}if(typeof e==`number`)if(ae(e)){let t=new ArrayBuffer(8);return new DataView(t).setFloat64(0,e,T),{$float:S(new Uint8Array(t))}}else return e;if(typeof e==`boolean`||typeof e==`string`)return e;if(e instanceof ArrayBuffer)return{$bytes:S(new Uint8Array(e))};if(Array.isArray(e))return e.map((e,r)=>fe(e,t,n+`[${r}]`,!1));if(e instanceof Set)throw Error(M(n,`Set`,[...e],t));if(e instanceof Map)throw Error(M(n,`Map`,[...e],t));if(!ee(e)){let r=e?.constructor?.name,i=r?`${r} `:``;throw Error(M(n,i,e,t))}let i={},a=Object.entries(e);a.sort(([e,t],[n,r])=>e===n?0:e<n?-1:1);for(let[e,o]of a)o===void 0?r&&(A(e),i[e]=pe(o,t,n+`.${e}`)):(A(e),i[e]=fe(o,t,n+`.${e}`,!1));return i}function M(e,t,n,r){return e?`${t}${de(n)} is not a supported Convex type (present at path ${e} in original object ${de(r)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`:`${t}${de(n)} is not a supported Convex type.`}function pe(e,t,n){if(e===void 0)return{$undefined:null};if(t===void 0)throw Error(`Programming error. Current value is ${de(e)} but original value is undefined`);return fe(e,t,n,!1)}function me(e){return fe(e,e,``,!1)}var he=Object.defineProperty,N=(e,t,n)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ge=(e,t,n)=>N(e,typeof t==`symbol`?t:t+``,n),_e,ve,ye=Symbol.for(`ConvexError`),be=class extends (ve=Error,_e=ye,ve){constructor(e){super(typeof e==`string`?e:de(e)),ge(this,`name`,`ConvexError`),ge(this,`data`),ge(this,_e,!0),this.data=e}},xe=`1.40.0`,Se=Object.defineProperty,Ce=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,we=(e,t,n)=>Ce(e,typeof t==`symbol`?t:t+``,n),Te=`color:rgb(0, 145, 255)`;function Ee(e){switch(e){case`query`:return`Q`;case`mutation`:return`M`;case`action`:return`A`;case`any`:return`?`}}var De=class{constructor(e){we(this,`_onLogLineFuncs`),we(this,`_verbose`),this._onLogLineFuncs={},this._verbose=e.verbose}addLogLineListener(e){let t=Math.random().toString(36).substring(2,15);for(let e=0;e<10&&this._onLogLineFuncs[t]!==void 0;e++)t=Math.random().toString(36).substring(2,15);return this._onLogLineFuncs[t]=e,()=>{delete this._onLogLineFuncs[t]}}logVerbose(...e){if(this._verbose)for(let t of Object.values(this._onLogLineFuncs))t(`debug`,`${new Date().toISOString()}`,...e)}log(...e){for(let t of Object.values(this._onLogLineFuncs))t(`info`,...e)}warn(...e){for(let t of Object.values(this._onLogLineFuncs))t(`warn`,...e)}error(...e){for(let t of Object.values(this._onLogLineFuncs))t(`error`,...e)}};function P(e){let t=new De(e);return t.addLogLineListener((e,...t)=>{switch(e){case`debug`:console.debug(...t);break;case`info`:console.log(...t);break;case`warn`:console.warn(...t);break;case`error`:console.error(...t);break;default:console.log(...t)}}),t}function Oe(e){return new De(e)}function ke(e,t,n,r,i){let a=Ee(n);if(typeof i==`object`&&(i=`ConvexError ${JSON.stringify(i.errorData,null,2)}`),t===`info`){let t=i.match(/^\[.*?\] /);if(t===null){e.error(`[CONVEX ${a}(${r})] Could not parse console.log`);return}let n=i.slice(1,t[0].length-2),o=i.slice(t[0].length);e.log(`%c[CONVEX ${a}(${r})] [${n}]`,Te,o)}else e.error(`[CONVEX ${a}(${r})] ${i}`)}function Ae(e,t){let n=`[CONVEX FATAL ERROR] ${t}`;return e.error(n),Error(n)}function F(e,t,n){return`[CONVEX ${Ee(e)}(${t})] ${n.errorMessage}
  Called by client`}function je(e,t){return t.data=e.errorData,t}function Me(e){let t=e.split(`:`),n,r;return t.length===1?(n=t[0],r=`default`):(n=t.slice(0,t.length-1).join(`:`),r=t[t.length-1]),n.endsWith(`.js`)&&(n=n.slice(0,-3)),`${n}:${r}`}function Ne(e,t){return JSON.stringify({udfPath:Me(e),args:me(t)})}function Pe(e,t,n){let{initialNumItems:r,id:i}=n;return JSON.stringify({type:`paginated`,udfPath:Me(e),args:me(t),options:me({initialNumItems:r,id:i})})}var Fe=Object.defineProperty,Ie=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Le=(e,t,n)=>Ie(e,typeof t==`symbol`?t:t+``,n),Re=class{constructor(){Le(this,`nextQueryId`),Le(this,`querySetVersion`),Le(this,`querySet`),Le(this,`queryIdToToken`),Le(this,`identityVersion`),Le(this,`auth`),Le(this,`outstandingQueriesOlderThanRestart`),Le(this,`outstandingAuthOlderThanRestart`),Le(this,`paused`),Le(this,`pendingQuerySetModifications`),this.nextQueryId=0,this.querySetVersion=0,this.identityVersion=0,this.querySet=new Map,this.queryIdToToken=new Map,this.outstandingQueriesOlderThanRestart=new Set,this.outstandingAuthOlderThanRestart=!1,this.paused=!1,this.pendingQuerySetModifications=new Map}hasSyncedPastLastReconnect(){return this.outstandingQueriesOlderThanRestart.size===0&&!this.outstandingAuthOlderThanRestart}markAuthCompletion(){this.outstandingAuthOlderThanRestart=!1}subscribe(e,t,n,r){let i=Me(e),a=Ne(i,t),o=this.querySet.get(a);if(o!==void 0)return o.numSubscribers+=1,{queryToken:a,modification:null,unsubscribe:()=>this.removeSubscriber(a)};{let e=this.nextQueryId++,o={id:e,canonicalizedUdfPath:i,args:t,numSubscribers:1,journal:n,componentPath:r};this.querySet.set(a,o),this.queryIdToToken.set(e,a);let s=this.querySetVersion,c=this.querySetVersion+1,l={type:`Add`,queryId:e,udfPath:i,args:[me(t)],journal:n,componentPath:r};return this.paused?this.pendingQuerySetModifications.set(e,l):this.querySetVersion=c,{queryToken:a,modification:{type:`ModifyQuerySet`,baseVersion:s,newVersion:c,modifications:[l]},unsubscribe:()=>this.removeSubscriber(a)}}}transition(e){for(let t of e.modifications)switch(t.type){case`QueryUpdated`:case`QueryFailed`:{this.outstandingQueriesOlderThanRestart.delete(t.queryId);let e=t.journal;if(e!==void 0){let n=this.queryIdToToken.get(t.queryId);n!==void 0&&(this.querySet.get(n).journal=e)}break}case`QueryRemoved`:this.outstandingQueriesOlderThanRestart.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}}queryId(e,t){let n=Ne(Me(e),t),r=this.querySet.get(n);return r===void 0?null:r.id}isCurrentOrNewerAuthVersion(e){return e>=this.identityVersion}getAuth(){return this.auth}setAuth(e){this.auth={tokenType:`User`,value:e};let t=this.identityVersion;return this.paused||(this.identityVersion=t+1),{type:`Authenticate`,baseVersion:t,...this.auth}}setAdminAuth(e,t){let n={tokenType:`Admin`,value:e,impersonating:t};this.auth=n;let r=this.identityVersion;return this.paused||(this.identityVersion=r+1),{type:`Authenticate`,baseVersion:r,...n}}clearAuth(){this.auth=void 0,this.markAuthCompletion();let e=this.identityVersion;return this.paused||(this.identityVersion=e+1),{type:`Authenticate`,tokenType:`None`,baseVersion:e}}hasAuth(){return!!this.auth}isNewAuth(e){return this.auth?.value!==e}queryPath(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).canonicalizedUdfPath:null}queryArgs(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).args:null}queryToken(e){return this.queryIdToToken.get(e)??null}queryJournal(e){return this.querySet.get(e)?.journal}restart(){this.unpause(),this.outstandingQueriesOlderThanRestart.clear();let e=[];for(let t of this.querySet.values()){let n={type:`Add`,queryId:t.id,udfPath:t.canonicalizedUdfPath,args:[me(t.args)],journal:t.journal,componentPath:t.componentPath};e.push(n),this.outstandingQueriesOlderThanRestart.add(t.id)}this.querySetVersion=1;let t={type:`ModifyQuerySet`,baseVersion:0,newVersion:1,modifications:e};if(!this.auth)return this.identityVersion=0,[t,void 0];this.outstandingAuthOlderThanRestart=!0;let n={type:`Authenticate`,baseVersion:0,...this.auth};return this.identityVersion=1,[t,n]}pause(){this.paused=!0}resume(){let e=this.pendingQuerySetModifications.size>0?{type:`ModifyQuerySet`,baseVersion:this.querySetVersion,newVersion:++this.querySetVersion,modifications:Array.from(this.pendingQuerySetModifications.values())}:void 0,t=this.auth===void 0?void 0:{type:`Authenticate`,baseVersion:this.identityVersion++,...this.auth};return this.unpause(),[e,t]}unpause(){this.paused=!1,this.pendingQuerySetModifications.clear()}removeSubscriber(e){let t=this.querySet.get(e);if(t.numSubscribers>1)return--t.numSubscribers,null;{this.querySet.delete(e),this.queryIdToToken.delete(t.id),this.outstandingQueriesOlderThanRestart.delete(t.id);let n=this.querySetVersion,r=this.querySetVersion+1,i={type:`Remove`,queryId:t.id};return this.paused?this.pendingQuerySetModifications.has(t.id)?this.pendingQuerySetModifications.delete(t.id):this.pendingQuerySetModifications.set(t.id,i):this.querySetVersion=r,{type:`ModifyQuerySet`,baseVersion:n,newVersion:r,modifications:[i]}}}},ze=Object.defineProperty,Be=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ve=(e,t,n)=>Be(e,typeof t==`symbol`?t:t+``,n),He=class{constructor(e,t){this.logger=e,this.markConnectionStateDirty=t,Ve(this,`inflightRequests`),Ve(this,`requestsOlderThanRestart`),Ve(this,`inflightMutationsCount`,0),Ve(this,`inflightActionsCount`,0),this.inflightRequests=new Map,this.requestsOlderThanRestart=new Set}request(e,t){let n=new Promise(n=>{let r=t?`Requested`:`NotSent`;this.inflightRequests.set(e.requestId,{message:e,status:{status:r,requestedAt:new Date,onResult:n}}),e.type===`Mutation`?this.inflightMutationsCount++:e.type===`Action`&&this.inflightActionsCount++});return this.markConnectionStateDirty(),n}onResponse(e){let t=this.inflightRequests.get(e.requestId);if(t===void 0||t.status.status===`Completed`)return null;let n=t.message.type===`Mutation`?`mutation`:`action`,r=t.message.udfPath;for(let t of e.logLines)ke(this.logger,`info`,n,r,t);let i=t.status,a,o;if(e.success)a={success:!0,logLines:e.logLines,value:j(e.result)},o=()=>i.onResult(a);else{let t=e.result,{errorData:s}=e;ke(this.logger,`error`,n,r,t),a={success:!1,errorMessage:t,errorData:s===void 0?void 0:j(s),logLines:e.logLines},o=()=>i.onResult(a)}return e.type===`ActionResponse`||!e.success?(o(),this.inflightRequests.delete(e.requestId),this.requestsOlderThanRestart.delete(e.requestId),t.message.type===`Action`?this.inflightActionsCount--:t.message.type===`Mutation`&&this.inflightMutationsCount--,this.markConnectionStateDirty(),{requestId:e.requestId,result:a}):(t.status={status:`Completed`,result:a,ts:e.ts,onResolve:o},null)}removeCompleted(e){let t=new Map;for(let[n,r]of this.inflightRequests.entries()){let i=r.status;i.status===`Completed`&&i.ts.lessThanOrEqual(e)&&(i.onResolve(),t.set(n,i.result),r.message.type===`Mutation`?this.inflightMutationsCount--:r.message.type===`Action`&&this.inflightActionsCount--,this.inflightRequests.delete(n),this.requestsOlderThanRestart.delete(n))}return t.size>0&&this.markConnectionStateDirty(),t}restart(){this.requestsOlderThanRestart=new Set(this.inflightRequests.keys());let e=[];for(let[t,n]of this.inflightRequests){if(n.status.status===`NotSent`){n.status.status=`Requested`,e.push(n.message);continue}if(n.message.type===`Mutation`)e.push(n.message);else if(n.message.type===`Action`){if(this.inflightRequests.delete(t),this.requestsOlderThanRestart.delete(t),this.inflightActionsCount--,n.status.status===`Completed`)throw Error(`Action should never be in 'Completed' state`);n.status.onResult({success:!1,errorMessage:`Connection lost while action was in flight`,logLines:[]})}}return this.markConnectionStateDirty(),e}resume(){let e=[];for(let[,t]of this.inflightRequests)if(t.status.status===`NotSent`){t.status.status=`Requested`,e.push(t.message);continue}return e}hasIncompleteRequests(){for(let e of this.inflightRequests.values())if(e.status.status===`Requested`)return!0;return!1}hasInflightRequests(){return this.inflightRequests.size>0}hasSyncedPastLastReconnect(){return this.requestsOlderThanRestart.size===0}timeOfOldestInflightRequest(){if(this.inflightRequests.size===0)return null;let e=Date.now();for(let t of this.inflightRequests.values())t.status.status!==`Completed`&&t.status.requestedAt.getTime()<e&&(e=t.status.requestedAt.getTime());return new Date(e)}inflightMutations(){return this.inflightMutationsCount}inflightActions(){return this.inflightActionsCount}},Ue=Symbol.for(`functionName`),We=Symbol.for(`toReferencePath`);function Ge(e){return e[We]??null}function Ke(e){return e.startsWith(`function://`)}function qe(e){let t;if(typeof e==`string`)t=Ke(e)?{functionHandle:e}:{name:e};else if(e[Ue])t={name:e[Ue]};else{let n=Ge(e);if(!n)throw Error(`${e} is not a functionReference`);t={reference:n}}return t}function I(e){let t=qe(e);if(t.name===void 0)throw t.functionHandle===void 0?t.reference===void 0?Error(`Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(t)}`):Error(`Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${t.reference}`):Error(`Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${t.functionHandle}`);if(typeof e==`string`)return e;let n=e[Ue];if(!n)throw Error(`${e} is not a functionReference`);return n}function Je(e){return{[Ue]:e}}function Ye(e=[]){return new Proxy({},{get(t,n){if(typeof n==`string`)return Ye([...e,n]);if(n===Ue){if(e.length<2){let t=[`api`,...e].join(`.`);throw Error(`API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${t}\``)}let t=e.slice(0,-1).join(`/`),n=e[e.length-1];return n==="default"?t:t+`:`+n}else if(n===Symbol.toStringTag)return`FunctionReference`;else return}})}var Xe=Ye(),Ze=Object.defineProperty,Qe=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$e=(e,t,n)=>Qe(e,typeof t==`symbol`?t:t+``,n),et=class e{constructor(e){$e(this,`queryResults`),$e(this,`modifiedQueries`),this.queryResults=e,this.modifiedQueries=[]}getQuery(t,...n){let r=C(n[0]),i=I(t),a=this.queryResults.get(Ne(i,r));if(a!==void 0)return e.queryValue(a.result)}getAllQueries(t){let n=[],r=I(t);for(let t of this.queryResults.values())t.udfPath===Me(r)&&n.push({args:t.args,value:e.queryValue(t.result)});return n}setQuery(e,t,n){let r=C(t),i=I(e),a=Ne(i,r),o;o=n===void 0?void 0:{success:!0,value:n,logLines:[]};let s={udfPath:i,args:r,result:o};this.queryResults.set(a,s),this.modifiedQueries.push(a)}static queryValue(e){if(e!==void 0&&e.success)return e.value}},tt=class{constructor(){$e(this,`queryResults`),$e(this,`optimisticUpdates`),this.queryResults=new Map,this.optimisticUpdates=[]}ingestQueryResultsFromServer(e,t){this.optimisticUpdates=this.optimisticUpdates.filter(e=>!t.has(e.mutationId));let n=this.queryResults;this.queryResults=new Map(e);let r=new et(this.queryResults);for(let e of this.optimisticUpdates)e.update(r);let i=[];for(let[e,t]of this.queryResults){let r=n.get(e);(r===void 0||r.result!==t.result)&&i.push(e)}return i}applyOptimisticUpdate(e,t){this.optimisticUpdates.push({update:e,mutationId:t});let n=new et(this.queryResults);return e(n),n.modifiedQueries}rawQueryResult(e){let t=this.queryResults.get(e);if(t!==void 0)return t.result}queryResult(e){let t=this.queryResults.get(e);if(t===void 0)return;let n=t.result;if(n!==void 0){if(n.success)return n.value;throw n.errorData===void 0?Error(F(`query`,t.udfPath,n)):je(n,new be(F(`query`,t.udfPath,n)))}}hasQueryResult(e){return this.queryResults.get(e)!==void 0}queryLogs(e){return this.queryResults.get(e)?.result?.logLines}},nt=Object.defineProperty,rt=(e,t,n)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,it=(e,t,n)=>rt(e,typeof t==`symbol`?t:t+``,n),at=class e{constructor(e,t){it(this,`low`),it(this,`high`),it(this,`__isUnsignedLong__`),this.low=e|0,this.high=t|0,this.__isUnsignedLong__=!0}static isLong(e){return(e&&e.__isUnsignedLong__)===!0}static fromBytesLE(t){return new e(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24)}toBytesLE(){let e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]}static fromNumber(t){return isNaN(t)||t<0?ot:t>=lt?ut:new e(t%ct|0,t/ct|0)}toString(){return(BigInt(this.high)*BigInt(ct)+BigInt(this.low)).toString()}equals(t){return e.isLong(t)||(t=e.fromValue(t)),this.high>>>31==1&&t.high>>>31==1?!1:this.high===t.high&&this.low===t.low}notEquals(e){return!this.equals(e)}comp(t){return e.isLong(t)||(t=e.fromValue(t)),this.equals(t)?0:t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1}lessThanOrEqual(e){return this.comp(e)<=0}static fromValue(t){return typeof t==`number`?e.fromNumber(t):new e(t.low,t.high)}},ot=new at(0,0),st=65536,ct=st*st,lt=ct*ct,ut=new at(-1,-1),dt=Object.defineProperty,ft=(e,t,n)=>t in e?dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pt=(e,t,n)=>ft(e,typeof t==`symbol`?t:t+``,n),mt=class{constructor(e,t){pt(this,`version`),pt(this,`remoteQuerySet`),pt(this,`queryPath`),pt(this,`logger`),this.version={querySet:0,ts:at.fromNumber(0),identity:0},this.remoteQuerySet=new Map,this.queryPath=e,this.logger=t}transition(e){let t=e.startVersion;if(this.version.querySet!==t.querySet||this.version.ts.notEquals(t.ts)||this.version.identity!==t.identity)throw Error(`Invalid start version: ${t.ts.toString()}:${t.querySet}:${t.identity}, transitioning from ${this.version.ts.toString()}:${this.version.querySet}:${this.version.identity}`);for(let t of e.modifications)switch(t.type){case`QueryUpdated`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)ke(this.logger,`info`,`query`,e,n);let n=j(t.value??null);this.remoteQuerySet.set(t.queryId,{success:!0,value:n,logLines:t.logLines});break}case`QueryFailed`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)ke(this.logger,`info`,`query`,e,n);let{errorData:n}=t;this.remoteQuerySet.set(t.queryId,{success:!1,errorMessage:t.errorMessage,errorData:n===void 0?void 0:j(n),logLines:t.logLines});break}case`QueryRemoved`:this.remoteQuerySet.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}this.version=e.endVersion}remoteQueryResults(){return this.remoteQuerySet}timestamp(){return this.version.ts}};function ht(e){let t=y(e);return at.fromBytesLE(Array.from(t))}function gt(e){return S(new Uint8Array(e.toBytesLE()))}function _t(e){switch(e.type){case`FatalError`:case`AuthError`:case`ActionResponse`:case`TransitionChunk`:case`Ping`:return{...e};case`MutationResponse`:return e.success?{...e,ts:ht(e.ts)}:{...e};case`Transition`:return{...e,startVersion:{...e.startVersion,ts:ht(e.startVersion.ts)},endVersion:{...e.endVersion,ts:ht(e.endVersion.ts)}};default:}}function vt(e){switch(e.type){case`Authenticate`:case`ModifyQuerySet`:case`Mutation`:case`Action`:case`Event`:return{...e};case`Connect`:return e.maxObservedTimestamp===void 0?{...e,maxObservedTimestamp:void 0}:{...e,maxObservedTimestamp:gt(e.maxObservedTimestamp)};default:}}var yt=Object.defineProperty,bt=(e,t,n)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t,n)=>bt(e,typeof t==`symbol`?t:t+``,n),xt=1e3,St=1001,Ct=1005,wt=4040,Tt;function Et(){return Tt===void 0&&(Tt=Date.now()),typeof performance>`u`||!performance.now?Date.now():Math.round(Tt+performance.now())}function Dt(){return`t=${Math.round((Et()-Tt)/100)/10}s`}var Ot={InternalServerError:{timeout:1e3},SubscriptionsWorkerFullError:{timeout:3e3},TooManyConcurrentRequests:{timeout:3e3},CommitterFullError:{timeout:3e3},AwsTooManyRequestsException:{timeout:3e3},ExecuteFullError:{timeout:3e3},SystemTimeoutError:{timeout:3e3},ExpiredInQueue:{timeout:3e3},VectorIndexesUnavailable:{timeout:1e3},SearchIndexesUnavailable:{timeout:1e3},TableSummariesUnavailable:{timeout:1e3},VectorIndexTooLarge:{timeout:3e3},SearchIndexTooLarge:{timeout:3e3},TooManyWritesInTimePeriod:{timeout:3e3}};function kt(e){if(e===void 0)return`Unknown`;for(let t of Object.keys(Ot))if(e.startsWith(t))return t;return`Unknown`}var At=class{constructor(e,t,n,r,i,a){this.markConnectionStateDirty=i,this.debug=a,L(this,`socket`),L(this,`connectionCount`),L(this,`_hasEverConnected`,!1),L(this,`lastCloseReason`),L(this,`transitionChunkBuffer`,null),L(this,`defaultInitialBackoff`),L(this,`maxBackoff`),L(this,`retries`),L(this,`serverInactivityThreshold`),L(this,`reconnectDueToServerInactivityTimeout`),L(this,`scheduledReconnect`,null),L(this,`networkOnlineHandler`,null),L(this,`pendingNetworkRecoveryInfo`,null),L(this,`uri`),L(this,`onOpen`),L(this,`onResume`),L(this,`onMessage`),L(this,`webSocketConstructor`),L(this,`logger`),L(this,`onServerDisconnectError`),this.webSocketConstructor=n,this.socket={state:`disconnected`},this.connectionCount=0,this.lastCloseReason=`InitialConnect`,this.defaultInitialBackoff=1e3,this.maxBackoff=16e3,this.retries=0,this.serverInactivityThreshold=6e4,this.reconnectDueToServerInactivityTimeout=null,this.uri=e,this.onOpen=t.onOpen,this.onResume=t.onResume,this.onMessage=t.onMessage,this.onServerDisconnectError=t.onServerDisconnectError,this.logger=r,this.setupNetworkListener(),this.connect()}setSocketState(e){this.socket=e,this._logVerbose(`socket state changed: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}`),this.markConnectionStateDirty()}setupNetworkListener(){typeof window>`u`||typeof window.addEventListener!=`function`||this.networkOnlineHandler===null&&(this.networkOnlineHandler=()=>{this._logVerbose(`network online event detected`),this.tryReconnectImmediately()},window.addEventListener(`online`,this.networkOnlineHandler),this._logVerbose(`network online event listener registered`))}cleanupNetworkListener(){this.networkOnlineHandler&&typeof window<`u`&&typeof window.removeEventListener==`function`&&(window.removeEventListener(`online`,this.networkOnlineHandler),this.networkOnlineHandler=null,this._logVerbose(`network online event listener removed`))}assembleTransition(e){if(e.partNumber<0||e.partNumber>=e.totalParts||e.totalParts===0||this.transitionChunkBuffer&&(this.transitionChunkBuffer.totalParts!==e.totalParts||this.transitionChunkBuffer.transitionId!==e.transitionId))throw this.transitionChunkBuffer=null,Error(`Invalid TransitionChunk`);if(this.transitionChunkBuffer===null&&(this.transitionChunkBuffer={chunks:[],totalParts:e.totalParts,transitionId:e.transitionId}),e.partNumber!==this.transitionChunkBuffer.chunks.length){let t=this.transitionChunkBuffer.chunks.length;throw this.transitionChunkBuffer=null,Error(`TransitionChunk received out of order: expected part ${t}, got ${e.partNumber}`)}if(this.transitionChunkBuffer.chunks.push(e.chunk),this.transitionChunkBuffer.chunks.length===e.totalParts){let e=this.transitionChunkBuffer.chunks.join(``);this.transitionChunkBuffer=null;let t=_t(JSON.parse(e));if(t.type!==`Transition`)throw Error(`Expected Transition, got ${t.type} after assembling chunks`);return t}return null}connect(){if(this.socket.state===`terminated`)return;if(this.socket.state!==`disconnected`&&this.socket.state!==`stopped`)throw Error(`Didn't start connection from disconnected state: `+this.socket.state);let e=new this.webSocketConstructor(this.uri);this._logVerbose(`constructed WebSocket`),this.setSocketState({state:`connecting`,ws:e,paused:`no`}),this.resetServerInactivityTimeout(),e.onopen=()=>{if(this.logger.logVerbose(`begin ws.onopen`),this.socket.state!==`connecting`)throw Error(`onopen called with socket not in connecting state`);if(this.setSocketState({state:`ready`,ws:e,paused:this.socket.paused===`yes`?`uninitialized`:`no`}),this.resetServerInactivityTimeout(),this.socket.paused===`no`&&(this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:Et()})),this.lastCloseReason!==`InitialConnect`&&(this.lastCloseReason?this.logger.log(`WebSocket reconnected at`,Dt(),`after disconnect due to`,this.lastCloseReason):this.logger.log(`WebSocket reconnected at`,Dt())),this.connectionCount+=1,this.lastCloseReason=null,this.pendingNetworkRecoveryInfo!==null){let{timeSavedMs:e}=this.pendingNetworkRecoveryInfo;this.pendingNetworkRecoveryInfo=null,this.sendMessage({type:`Event`,eventType:`NetworkRecoveryReconnect`,event:{timeSavedMs:e}}),this.logger.log(`Network recovery reconnect saved ~${Math.round(e/1e3)}s of waiting`)}},e.onerror=e=>{this.transitionChunkBuffer=null;let t=e.message;t&&this.logger.log(`WebSocket error message: ${t}`)},e.onmessage=e=>{this.resetServerInactivityTimeout();let t=e.data.length,n=_t(JSON.parse(e.data));if(this._logVerbose(`received ws message with type ${n.type}`),n.type!==`Ping`){if(n.type===`TransitionChunk`){let e=this.assembleTransition(n);if(!e)return;n=e,this._logVerbose(`assembled full ws message of type ${n.type}`)}this.transitionChunkBuffer!==null&&(this.transitionChunkBuffer=null,this.logger.log(`Received unexpected ${n.type} while buffering TransitionChunks`)),n.type===`Transition`&&this.reportLargeTransition({messageLength:t,transition:n}),this.onMessage(n).hasSyncedPastLastReconnect&&(this.retries=0,this.markConnectionStateDirty())}},e.onclose=e=>{if(this._logVerbose(`begin ws.onclose`),this.transitionChunkBuffer=null,this.lastCloseReason===null&&(this.lastCloseReason=e.reason||`closed with code ${e.code}`),e.code!==xt&&e.code!==St&&e.code!==Ct&&e.code!==wt){let t=`WebSocket closed with code ${e.code}`;e.reason&&(t+=`: ${e.reason}`),this.logger.log(t),this.onServerDisconnectError&&e.reason&&this.onServerDisconnectError(t)}let t=kt(e.reason);this.scheduleReconnect(t)}}socketState(){return this.socket.state}sendMessage(e){let t={type:e.type,...e.type===`Authenticate`&&e.tokenType===`User`?{value:`...${e.value.slice(-7)}`}:{}};if(this.socket.state===`ready`&&this.socket.paused===`no`){let n=vt(e),r=JSON.stringify(n),i=!1;try{this.socket.ws.send(r),i=!0}catch(e){this.logger.log(`Failed to send message on WebSocket, reconnecting: ${e}`),this.closeAndReconnect(`FailedToSendMessage`)}return this._logVerbose(`${i?`sent`:`failed to send`} message with type ${e.type}: ${JSON.stringify(t)}`),!0}return this._logVerbose(`message not sent (socket state: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}): ${JSON.stringify(t)}`),!1}resetServerInactivityTimeout(){this.socket.state!==`terminated`&&(this.reconnectDueToServerInactivityTimeout!==null&&(clearTimeout(this.reconnectDueToServerInactivityTimeout),this.reconnectDueToServerInactivityTimeout=null),this.reconnectDueToServerInactivityTimeout=setTimeout(()=>{this.closeAndReconnect(`InactiveServer`)},this.serverInactivityThreshold))}scheduleReconnect(e){this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.socket={state:`disconnected`};let t=this.nextBackoff(e);this.markConnectionStateDirty(),this.logger.log(`Attempting reconnect in ${Math.round(t)}ms`);let n=Et(),r=setTimeout(()=>{this.scheduledReconnect?.timeout===r&&(this.scheduledReconnect=null,this.connect())},t);this.scheduledReconnect={timeout:r,scheduledAt:n,backoffMs:t}}closeAndReconnect(e){switch(this._logVerbose(`begin closeAndReconnect with reason ${e}`),this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return;case`connecting`:case`ready`:this.lastCloseReason=e,this.close(),this.scheduleReconnect(`client`);return;default:this.socket}}close(){switch(this.transitionChunkBuffer=null,this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return Promise.resolve();case`connecting`:{let e=this.socket.ws;return e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)},new Promise(t=>{e.onclose=()=>{this._logVerbose(`Closed after connecting`),t()},e.onopen=()=>{this._logVerbose(`Opened after connecting`),e.close()}})}case`ready`:{this._logVerbose(`ws.close called`);let e=this.socket.ws;e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)};let t=new Promise(t=>{e.onclose=()=>{t()}});return e.close(),t}default:return this.socket,Promise.resolve()}}terminate(){switch(this.reconnectDueToServerInactivityTimeout&&clearTimeout(this.reconnectDueToServerInactivityTimeout),this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.cleanupNetworkListener(),this.socket.state){case`terminated`:case`stopped`:case`disconnected`:case`connecting`:case`ready`:{let e=this.close();return this.setSocketState({state:`terminated`}),e}default:throw this.socket,Error(`Invalid websocket state: ${this.socket.state}`)}}stop(){switch(this.socket.state){case`terminated`:return Promise.resolve();case`connecting`:case`stopped`:case`disconnected`:case`ready`:{this.cleanupNetworkListener();let e=this.close();return this.socket={state:`stopped`},e}default:return this.socket,Promise.resolve()}}tryRestart(){switch(this.socket.state){case`stopped`:break;case`terminated`:case`connecting`:case`ready`:case`disconnected`:this.logger.logVerbose(`Restart called without stopping first`);return;default:this.socket}this.setupNetworkListener(),this.connect()}pause(){switch(this.socket.state){case`disconnected`:case`stopped`:case`terminated`:return;case`connecting`:case`ready`:this.socket={...this.socket,paused:`yes`};return;default:this.socket;return}}tryReconnectImmediately(){if(this._logVerbose(`tryReconnectImmediately called`),this.socket.state!==`disconnected`){this._logVerbose(`tryReconnectImmediately called but socket state is ${this.socket.state}, no action taken`);return}let e=null;if(this.scheduledReconnect){let t=Et()-this.scheduledReconnect.scheduledAt;e=Math.max(0,this.scheduledReconnect.backoffMs-t),this._logVerbose(`would have waited ${Math.round(e)}ms more (backoff was ${Math.round(this.scheduledReconnect.backoffMs)}ms, elapsed ${Math.round(t)}ms)`),clearTimeout(this.scheduledReconnect.timeout),this.scheduledReconnect=null,this._logVerbose(`canceled scheduled reconnect`)}this.logger.log(`Network recovery detected, reconnecting immediately`),this.pendingNetworkRecoveryInfo=e===null?null:{timeSavedMs:e},this.connect()}resume(){switch(this.socket.state){case`connecting`:this.socket={...this.socket,paused:`no`};return;case`ready`:this.socket.paused===`uninitialized`?(this.socket={...this.socket,paused:`no`},this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:Et()})):this.socket.paused===`yes`&&(this.socket={...this.socket,paused:`no`},this.onResume());return;case`terminated`:case`stopped`:case`disconnected`:return;default:this.socket}this.connect()}connectionState(){return{isConnected:this.socket.state===`ready`,hasEverConnected:this._hasEverConnected,connectionCount:this.connectionCount,connectionRetries:this.retries}}_logVerbose(e){this.logger.logVerbose(e)}nextBackoff(e){let t=(e===`client`?100:e===`Unknown`?this.defaultInitialBackoff:Ot[e].timeout)*2**this.retries;this.retries+=1;let n=Math.min(t,this.maxBackoff);return n+n*(Math.random()-.5)}reportLargeTransition({transition:e,messageLength:t}){if(e.clientClockSkew===void 0||e.serverTs===void 0)return;let n=Et()-e.clientClockSkew-e.serverTs/1e6,r=`${Math.round(n)}ms`,i=`${Math.round(t/1e4)/100}MB`,a=t/(n/1e3),o=`${Math.round(a/1e4)/100}MB per second`;this._logVerbose(`received ${i} transition in ${r} at ${o}`),t>2e7?this.logger.log(`received query results totaling more that 20MB (${i}) which will take a long time to download on slower connections`):n>2e4&&this.logger.log(`received query results totaling ${i} which took more than 20s to arrive (${r})`),this.debug&&this.sendMessage({type:`Event`,eventType:`ClientReceivedTransition`,event:{transitionTransitTime:n,messageLength:t}})}};function jt(){return Mt()}function Mt(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}var Nt=class extends Error{};Nt.prototype.name=`InvalidTokenError`;function Pt(e){return decodeURIComponent(atob(e).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n=`0`+n),`%`+n}))}function Ft(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`);switch(t.length%4){case 0:break;case 2:t+=`==`;break;case 3:t+=`=`;break;default:throw Error(`base64 string is not of the correct length`)}try{return Pt(t)}catch{return atob(t)}}function It(e,t){if(typeof e!=`string`)throw new Nt(`Invalid token specified: must be a string`);t||={};let n=t.header===!0?0:1,r=e.split(`.`)[n];if(typeof r!=`string`)throw new Nt(`Invalid token specified: missing part #${n+1}`);let i;try{i=Ft(r)}catch(e){throw new Nt(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(i)}catch(e){throw new Nt(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}var Lt=Object.defineProperty,Rt=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zt=(e,t,n)=>Rt(e,typeof t==`symbol`?t:t+``,n),Bt=480*60*60*1e3,Vt=2,Ht=class{constructor(e,t,n){zt(this,`authState`,{state:`noAuth`}),zt(this,`configVersion`,0),zt(this,`syncState`),zt(this,`authenticate`),zt(this,`stopSocket`),zt(this,`tryRestartSocket`),zt(this,`pauseSocket`),zt(this,`resumeSocket`),zt(this,`clearAuth`),zt(this,`logger`),zt(this,`refreshTokenLeewaySeconds`),zt(this,`lastRefreshChange`),zt(this,`tokenConfirmationAttempts`,0),this.syncState=e,this.authenticate=t.authenticate,this.stopSocket=t.stopSocket,this.tryRestartSocket=t.tryRestartSocket,this.pauseSocket=t.pauseSocket,this.resumeSocket=t.resumeSocket,this.clearAuth=t.clearAuth,this.logger=n.logger,this.refreshTokenLeewaySeconds=n.refreshTokenLeewaySeconds,this.lastRefreshChange=!1}notifyRefreshChange(e){this.authState.state!==`noAuth`&&this.authState.state!==`initialRefetch`&&this.authState.config.onRefreshChange&&this.lastRefreshChange!==e&&(this.lastRefreshChange=e,this.authState.config.onRefreshChange(e))}async setConfig(e,t,n){this.resetAuthState(),this._logVerbose(`pausing WS for auth token fetch`),this.pauseSocket();let r=await this.fetchTokenAndGuardAgainstRace(e,{forceRefreshToken:!1});if(r.isFromOutdatedConfig)return;let i={fetchToken:e,onAuthChange:t,onRefreshChange:n};r.value?(this.setAuthState({state:`waitingForServerConfirmationOfCachedToken`,config:i,hasRetried:!1}),this.authenticate(r.value)):(this.setAuthState({state:`initialRefetch`,config:i}),await this.refetchToken()),this._logVerbose(`resuming WS after auth token fetch`),this.resumeSocket()}onTransition(e){if(this.syncState.isCurrentOrNewerAuthVersion(e.endVersion.identity)&&!(e.endVersion.identity<=e.startVersion.identity)){if(this._logVerbose(`auth state is ${this.authState.state} when handling transition`),this.syncState.markAuthCompletion(),this.authState.state===`waitingForServerConfirmationOfCachedToken`){this._logVerbose(`server confirmed auth token is valid`),this.refetchToken(),this.authState.config.onAuthChange(!0);return}this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this._logVerbose(`server confirmed new auth token is valid`),this.notifyRefreshChange(!1),this.scheduleTokenRefetch(this.authState.token),this.tokenConfirmationAttempts=0,this.authState.hadAuth||this.authState.config.onAuthChange(!0))}}onAuthError(e){if(e.authUpdateAttempted===!1&&(this.authState.state===`waitingForServerConfirmationOfFreshToken`||this.authState.state===`waitingForServerConfirmationOfCachedToken`)){this._logVerbose(`ignoring non-auth token expired error`);return}let{baseVersion:t}=e;if(!this.syncState.isCurrentOrNewerAuthVersion(t+1)){this._logVerbose(`ignoring auth error for previous auth attempt`);return}this.tryToReauthenticate(e)}async tryToReauthenticate(e){if(this._logVerbose(`attempting to reauthenticate: ${e.error}`),this.authState.state===`noAuth`||this.authState.state===`waitingForServerConfirmationOfFreshToken`&&this.tokenConfirmationAttempts>=Vt){this.logger.error(`Failed to authenticate: "${e.error}", check your server auth config`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.authState.state!==`noAuth`&&this.setAndReportAuthFailed(this.authState.config.onAuthChange);return}if(this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this.tokenConfirmationAttempts++,this._logVerbose(`retrying reauthentication, ${Vt-this.tokenConfirmationAttempts} attempts remaining`)),this.notifyRefreshChange(!0),await this.stopSocket(),this.authState.state===`noAuth`)return;let t=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});t.isFromOutdatedConfig||(t.value&&this.syncState.isNewAuth(t.value)?(this.authenticate(t.value),this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,config:this.authState.config,token:t.value,hadAuth:this.authState.state===`notRefetching`||this.authState.state===`waitingForScheduledRefetch`})):(this._logVerbose(`reauthentication failed, could not fetch a new token`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this.tryRestartSocket())}async refetchToken(){if(this.authState.state===`noAuth`)return;this._logVerbose(`refetching auth token`);let e=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});e.isFromOutdatedConfig||(e.value?this.syncState.isNewAuth(e.value)?(this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,hadAuth:this.syncState.hasAuth(),token:e.value,config:this.authState.config}),this.authenticate(e.value)):this.setAuthState({state:`notRefetching`,config:this.authState.config}):(this._logVerbose(`refetching token failed`),this.syncState.hasAuth()&&this.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this._logVerbose(`restarting WS after auth token fetch (if currently stopped)`),this.tryRestartSocket())}scheduleTokenRefetch(e){if(this.authState.state===`noAuth`)return;let t=this.decodeToken(e);if(!t){this.logger.error(`Auth token is not a valid JWT, cannot refetch the token`);return}let{iat:n,exp:r}=t;if(!n||!r){this.logger.error(`Auth token does not have required fields, cannot refetch the token`);return}let i=r-n;if(i<=2){this.logger.error(`Auth token does not live long enough, cannot refetch the token`);return}let a=Math.min(Bt,(i-this.refreshTokenLeewaySeconds)*1e3);a<=0&&(this.logger.warn(`Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${i}s`),a=0);let o=setTimeout(()=>{this._logVerbose(`running scheduled token refetch`),this.refetchToken()},a);this.setAuthState({state:`waitingForScheduledRefetch`,refetchTokenTimeoutId:o,config:this.authState.config}),this._logVerbose(`scheduled preemptive auth token refetching in ${a}ms`)}async fetchTokenAndGuardAgainstRace(e,t){let n=++this.configVersion;this._logVerbose(`fetching token with config version ${n}`);let r=await e(t);return this.configVersion===n?{isFromOutdatedConfig:!1,value:r}:(this._logVerbose(`stale config version, expected ${n}, got ${this.configVersion}`),{isFromOutdatedConfig:!0})}stop(){this.resetAuthState(),this.configVersion++,this._logVerbose(`config version bumped to ${this.configVersion}`)}setAndReportAuthFailed(e){e(!1),this.resetAuthState()}resetAuthState(){this.notifyRefreshChange(!1),this.setAuthState({state:`noAuth`})}setAuthState(e){let t=e.state===`waitingForServerConfirmationOfFreshToken`?{hadAuth:e.hadAuth,state:e.state,token:`...${e.token.slice(-7)}`}:{state:e.state};switch(this._logVerbose(`setting auth state to ${JSON.stringify(t)}`),e.state){case`waitingForScheduledRefetch`:case`notRefetching`:case`noAuth`:this.tokenConfirmationAttempts=0;break;case`waitingForServerConfirmationOfFreshToken`:case`waitingForServerConfirmationOfCachedToken`:case`initialRefetch`:break;default:}this.authState.state===`waitingForScheduledRefetch`&&clearTimeout(this.authState.refetchTokenTimeoutId),this.authState=e}decodeToken(e){try{return It(e)}catch(e){return this._logVerbose(`Error decoding token: ${e instanceof Error?e.message:`Unknown error`}`),null}}_logVerbose(e){this.logger.logVerbose(`${e} [v${this.configVersion}]`)}},Ut=[`convexClientConstructed`,`convexWebSocketOpen`,`convexFirstMessageReceived`];function Wt(e,t){let n={sessionId:t};typeof performance>`u`||!performance.mark||performance.mark(e,{detail:n})}function Gt(e){let t=e.name.slice(6);return t=t.charAt(0).toLowerCase()+t.slice(1),{name:t,startTime:e.startTime}}function Kt(e){if(typeof performance>`u`||!performance.getEntriesByName)return[];let t=[];for(let n of Ut){let r=performance.getEntriesByName(n).filter(e=>e.entryType===`mark`).filter(t=>t.detail.sessionId===e);t.push(...r)}return t.map(Gt)}var qt=Object.defineProperty,Jt=(e,t,n)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t,n)=>Jt(e,typeof t==`symbol`?t:t+``,n),Yt=class{constructor(e,t,n){if(R(this,`address`),R(this,`state`),R(this,`requestManager`),R(this,`webSocketManager`),R(this,`authenticationManager`),R(this,`remoteQuerySet`),R(this,`optimisticQueryResults`),R(this,`_transitionHandlerCounter`,0),R(this,`_nextRequestId`),R(this,`_onTransitionFns`,new Map),R(this,`_sessionId`),R(this,`firstMessageReceived`,!1),R(this,`debug`),R(this,`logger`),R(this,`maxObservedTimestamp`),R(this,`connectionStateSubscribers`,new Map),R(this,`nextConnectionStateSubscriberId`,0),R(this,`_lastPublishedConnectionState`),R(this,`markConnectionStateDirty`,()=>{Promise.resolve().then(()=>{let e=this.connectionState();if(JSON.stringify(e)!==JSON.stringify(this._lastPublishedConnectionState)){this._lastPublishedConnectionState=e;for(let t of this.connectionStateSubscribers.values())t(e)}})}),R(this,`mark`,e=>{this.debug&&Wt(e,this.sessionId)}),typeof e==`object`)throw Error(`Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly.`);n?.skipConvexDeploymentUrlCheck!==!0&&w(e),n={...n};let r=n.authRefreshTokenLeewaySeconds??10,i=n.webSocketConstructor;if(!i&&typeof WebSocket>`u`)throw Error(`No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient`);i||=WebSocket,this.debug=n.reportDebugInfoToConvex??!1,this.address=e,this.logger=n.logger===!1?Oe({verbose:n.verbose??!1}):n.logger!==!0&&n.logger?n.logger:P({verbose:n.verbose??!1});let a=e.search(`://`);if(a===-1)throw Error(`Provided address was not an absolute URL.`);let o=e.substring(a+3),s=e.substring(0,a),c;if(s===`http`)c=`ws`;else if(s===`https`)c=`wss`;else throw Error(`Unknown parent protocol ${s}`);let l=`${c}://${o}/api/${xe}/sync`;this.state=new Re,this.remoteQuerySet=new mt(e=>this.state.queryPath(e),this.logger),this.requestManager=new He(this.logger,this.markConnectionStateDirty);let u=()=>{this.webSocketManager.pause(),this.state.pause()};this.authenticationManager=new Ht(this.state,{authenticate:e=>{let t=this.state.setAuth(e);return this.webSocketManager.sendMessage(t),t.baseVersion},stopSocket:()=>this.webSocketManager.stop(),tryRestartSocket:()=>this.webSocketManager.tryRestart(),pauseSocket:u,resumeSocket:()=>this.webSocketManager.resume(),clearAuth:()=>{this.clearAuth()}},{logger:this.logger,refreshTokenLeewaySeconds:r}),this.optimisticQueryResults=new tt,this.addOnTransitionHandler(e=>{t(e.queries.map(e=>e.token))}),this._nextRequestId=0,this._sessionId=jt();let{unsavedChangesWarning:d}=n;if(typeof window>`u`||window.addEventListener===void 0){if(d===!0)throw Error(`unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options.`)}else d!==!1&&window.addEventListener(`beforeunload`,e=>{if(this.requestManager.hasIncompleteRequests()){e.preventDefault();let t=`Are you sure you want to leave? Your changes may not be saved.`;return(e||window.event).returnValue=t,t}});this.webSocketManager=new At(l,{onOpen:e=>{this.mark(`convexWebSocketOpen`),this.webSocketManager.sendMessage({...e,type:`Connect`,sessionId:this._sessionId,maxObservedTimestamp:this.maxObservedTimestamp}),this.remoteQuerySet=new mt(e=>this.state.queryPath(e),this.logger);let[t,n]=this.state.restart();n&&this.webSocketManager.sendMessage(n),this.webSocketManager.sendMessage(t);for(let e of this.requestManager.restart())this.webSocketManager.sendMessage(e)},onResume:()=>{let[e,t]=this.state.resume();t&&this.webSocketManager.sendMessage(t),e&&this.webSocketManager.sendMessage(e);for(let e of this.requestManager.resume())this.webSocketManager.sendMessage(e)},onMessage:e=>{switch(this.firstMessageReceived||(this.firstMessageReceived=!0,this.mark(`convexFirstMessageReceived`),this.reportMarks()),e.type){case`Transition`:{this.observedTimestamp(e.endVersion.ts),this.authenticationManager.onTransition(e),this.remoteQuerySet.transition(e),this.state.transition(e);let t=this.requestManager.removeCompleted(this.remoteQuerySet.timestamp());this.notifyOnQueryResultChanges(t);break}case`MutationResponse`:{e.success&&this.observedTimestamp(e.ts);let t=this.requestManager.onResponse(e);t!==null&&this.notifyOnQueryResultChanges(new Map([[t.requestId,t.result]]));break}case`ActionResponse`:this.requestManager.onResponse(e);break;case`AuthError`:this.authenticationManager.onAuthError(e);break;case`FatalError`:{let t=Ae(this.logger,e.error);throw this.webSocketManager.terminate(),t}default:}return{hasSyncedPastLastReconnect:this.hasSyncedPastLastReconnect()}},onServerDisconnectError:n.onServerDisconnectError},i,this.logger,this.markConnectionStateDirty,this.debug),this.mark(`convexClientConstructed`),n.expectAuth&&u()}hasSyncedPastLastReconnect(){return this.requestManager.hasSyncedPastLastReconnect()&&this.state.hasSyncedPastLastReconnect()}observedTimestamp(e){(this.maxObservedTimestamp===void 0||this.maxObservedTimestamp.lessThanOrEqual(e))&&(this.maxObservedTimestamp=e)}getMaxObservedTimestamp(){return this.maxObservedTimestamp}notifyOnQueryResultChanges(e){let t=this.remoteQuerySet.remoteQueryResults(),n=new Map;for(let[e,r]of t){let t=this.state.queryToken(e);if(t!==null){let i={result:r,udfPath:this.state.queryPath(e),args:this.state.queryArgs(e)};n.set(t,i)}}let r=this.optimisticQueryResults.ingestQueryResultsFromServer(n,new Set(e.keys()));this.handleTransition({queries:r.map(e=>({token:e,modification:{kind:`Updated`,result:this.optimisticQueryResults.rawQueryResult(e)}})),reflectedMutations:Array.from(e).map(([e,t])=>({requestId:e,result:t})),timestamp:this.remoteQuerySet.timestamp()})}handleTransition(e){for(let t of this._onTransitionFns.values())t(e)}addOnTransitionHandler(e){let t=this._transitionHandlerCounter++;return this._onTransitionFns.set(t,e),()=>this._onTransitionFns.delete(t)}getCurrentAuthClaims(){let e=this.state.getAuth(),t={};if(e&&e.tokenType===`User`)try{t=e?It(e.value):{}}catch{t={}}else return;return{token:e.value,decoded:t}}setAuth(e,t,n){this.authenticationManager.setConfig(e,t,n)}hasAuth(){return this.state.hasAuth()}setAdminAuth(e,t){let n=this.state.setAdminAuth(e,t);this.webSocketManager.sendMessage(n)}clearAuth(){let e=this.state.clearAuth();this.webSocketManager.sendMessage(e)}subscribe(e,t,n){let r=C(t),{modification:i,queryToken:a,unsubscribe:o}=this.state.subscribe(e,r,n?.journal,n?.componentPath);return i!==null&&this.webSocketManager.sendMessage(i),{queryToken:a,unsubscribe:()=>{let e=o();e&&this.webSocketManager.sendMessage(e)}}}localQueryResult(e,t){let n=Ne(e,C(t));return this.optimisticQueryResults.queryResult(n)}localQueryResultByToken(e){return this.optimisticQueryResults.queryResult(e)}hasLocalQueryResultByToken(e){return this.optimisticQueryResults.hasQueryResult(e)}localQueryLogs(e,t){let n=Ne(e,C(t));return this.optimisticQueryResults.queryLogs(n)}queryJournal(e,t){let n=Ne(e,C(t));return this.state.queryJournal(n)}connectionState(){let e=this.webSocketManager.connectionState();return{hasInflightRequests:this.requestManager.hasInflightRequests(),isWebSocketConnected:e.isConnected,hasEverConnected:e.hasEverConnected,connectionCount:e.connectionCount,connectionRetries:e.connectionRetries,timeOfOldestInflightRequest:this.requestManager.timeOfOldestInflightRequest(),inflightMutations:this.requestManager.inflightMutations(),inflightActions:this.requestManager.inflightActions()}}subscribeToConnectionState(e){let t=this.nextConnectionStateSubscriberId++;return this.connectionStateSubscribers.set(t,e),()=>{this.connectionStateSubscribers.delete(t)}}async mutation(e,t,n){let r=await this.mutationInternal(e,t,n);if(!r.success)throw r.errorData===void 0?Error(F(`mutation`,e,r)):je(r,new be(F(`mutation`,e,r)));return r.value}async mutationInternal(e,t,n,r){let{mutationPromise:i}=this.enqueueMutation(e,t,n,r);return i}enqueueMutation(e,t,n,r){let i=C(t);this.tryReportLongDisconnect();let a=this.nextRequestId;if(this._nextRequestId++,n!==void 0){let e=n.optimisticUpdate;if(e!==void 0){let t=this.optimisticQueryResults.applyOptimisticUpdate(t=>{e(t,i)instanceof Promise&&this.logger.warn(`Optimistic update handler returned a Promise. Optimistic updates should be synchronous.`)},a).map(e=>{let t=this.localQueryResultByToken(e);return{token:e,modification:{kind:`Updated`,result:t===void 0?void 0:{success:!0,value:t,logLines:[]}}}});this.handleTransition({queries:t,reflectedMutations:[],timestamp:this.remoteQuerySet.timestamp()})}}let o={type:`Mutation`,requestId:a,udfPath:e,componentPath:r,args:[me(i)]},s=this.webSocketManager.sendMessage(o);return{requestId:a,mutationPromise:this.requestManager.request(o,s)}}async action(e,t){let n=await this.actionInternal(e,t);if(!n.success)throw n.errorData===void 0?Error(F(`action`,e,n)):je(n,new be(F(`action`,e,n)));return n.value}async actionInternal(e,t,n){let r=C(t),i=this.nextRequestId;this._nextRequestId++,this.tryReportLongDisconnect();let a={type:`Action`,requestId:i,udfPath:e,componentPath:n,args:[me(r)]},o=this.webSocketManager.sendMessage(a);return this.requestManager.request(a,o)}async close(){return this.authenticationManager.stop(),this.webSocketManager.terminate()}get url(){return this.address}get nextRequestId(){return this._nextRequestId}get sessionId(){return this._sessionId}reportMarks(){if(this.debug){let e=Kt(this.sessionId);this.webSocketManager.sendMessage({type:`Event`,eventType:`ClientConnect`,event:e})}}tryReportLongDisconnect(){if(!this.debug)return;let e=this.connectionState().timeOfOldestInflightRequest;if(e===null||Date.now()-e.getTime()<=60*1e3)return;let t=`${this.address}/api/debug_event`;fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`,"Convex-Client":`npm-${xe}`},body:JSON.stringify({event:`LongWebsocketDisconnect`})}).then(e=>{e.ok||this.logger.warn(`Analytics request failed with response:`,e.body)}).catch(e=>{this.logger.warn(`Analytics response failed with error:`,e)})}};function Xt(e){if(typeof e!=`object`||!e||!Array.isArray(e.page)||typeof e.isDone!=`boolean`||typeof e.continueCursor!=`string`)throw Error(`Not a valid paginated query result: ${e?.toString()}`);return e}var Zt=Object.defineProperty,Qt=(e,t,n)=>t in e?Zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$t=(e,t,n)=>Qt(e,typeof t==`symbol`?t:t+``,n),en=class{constructor(e,t){this.client=e,this.onTransition=t,$t(this,`paginatedQuerySet`,new Map),$t(this,`lastTransitionTs`),this.lastTransitionTs=at.fromNumber(0),this.client.addOnTransitionHandler(e=>this.onBaseTransition(e))}subscribe(e,t,n){let r=Me(e),i=Pe(r,t,n),a=()=>this.removePaginatedQuerySubscriber(i),o=this.paginatedQuerySet.get(i);return o?(o.numSubscribers+=1,{paginatedQueryToken:i,unsubscribe:a}):(this.paginatedQuerySet.set(i,{token:i,canonicalizedUdfPath:r,args:t,numSubscribers:1,options:{initialNumItems:n.initialNumItems},nextPageKey:0,pageKeys:[],pageKeyToQuery:new Map,ongoingSplits:new Map,skip:!1,id:n.id}),this.addPageToPaginatedQuery(i,null,n.initialNumItems),{paginatedQueryToken:i,unsubscribe:a})}localQueryResult(e,t,n){let r=Pe(Me(e),t,n);return this.localQueryResultByToken(r)}localQueryResultByToken(e){let t=this.paginatedQuerySet.get(e);if(!t)return;let n=this.activePageQueryTokens(t);if(n.length===0)return{results:[],status:`LoadingFirstPage`,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)};let r=[],i=!1,a=!1;for(let e of n){let t=this.client.localQueryResultByToken(e);if(t===void 0){i=!0,a=!1;continue}let n=Xt(t);r=r.concat(n.page),a=!!n.isDone}let o;return o=i?r.length===0?`LoadingFirstPage`:`LoadingMore`:a?`Exhausted`:`CanLoadMore`,{results:r,status:o,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)}}onBaseTransition(e){let t=e.queries.map(e=>e.token),n=this.queriesContainingTokens(t),r=[];n.length>0&&(this.processPaginatedQuerySplits(n,e=>this.client.localQueryResultByToken(e)),r=n.map(e=>({token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}})));let i={...e,paginatedQueries:r};this.onTransition(i)}loadMoreOfPaginatedQuery(e,t){this.mustGetPaginatedQuery(e);let n=this.queryTokenForLastPageOfPaginatedQuery(e),r=this.client.localQueryResultByToken(n);if(!r)return!1;let i=Xt(r);if(i.isDone)return!1;this.addPageToPaginatedQuery(e,i.continueCursor,t);let a={timestamp:this.lastTransitionTs,reflectedMutations:[],queries:[],paginatedQueries:[{token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}}]};return this.onTransition(a),!0}queriesContainingTokens(e){if(e.length===0)return[];let t=[],n=new Set(e);for(let[e,r]of this.paginatedQuerySet)for(let i of this.allQueryTokens(r))if(n.has(i)){t.push(e);break}return t}processPaginatedQuerySplits(e,t){for(let n of e){let e=this.mustGetPaginatedQuery(n),{ongoingSplits:r,pageKeyToQuery:i,pageKeys:a}=e;for(let[n,[a,o]]of r)t(i.get(a).queryToken)!==void 0&&t(i.get(o).queryToken)!==void 0&&this.completePaginatedQuerySplit(e,n,a,o);for(let n of a){if(r.has(n))continue;let a=i.get(n).queryToken,o=t(a);if(!o)continue;let s=Xt(o);s.splitCursor&&(s.pageStatus===`SplitRecommended`||s.pageStatus===`SplitRequired`||s.page.length>e.options.initialNumItems*2)&&this.splitPaginatedQueryPage(e,n,s.splitCursor,s.continueCursor)}}}splitPaginatedQueryPage(e,t,n,r){let i=e.nextPageKey++,a=e.nextPageKey++,o={cursor:r,numItems:e.options.initialNumItems,id:e.id},s=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:null,endCursor:n}});e.pageKeyToQuery.set(i,s);let c=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:n,endCursor:r}});e.pageKeyToQuery.set(a,c),e.ongoingSplits.set(t,[i,a])}addPageToPaginatedQuery(e,t,n){let r=this.mustGetPaginatedQuery(e),i=r.nextPageKey++,a={cursor:t,numItems:n,id:r.id},o={...r.args,paginationOpts:a},s=this.client.subscribe(r.canonicalizedUdfPath,o);return r.pageKeys.push(i),r.pageKeyToQuery.set(i,s),s}removePaginatedQuerySubscriber(e){let t=this.paginatedQuerySet.get(e);if(t&&(--t.numSubscribers,!(t.numSubscribers>0))){for(let e of t.pageKeyToQuery.values())e.unsubscribe();this.paginatedQuerySet.delete(e)}}completePaginatedQuerySplit(e,t,n,r){let i=e.pageKeyToQuery.get(t);e.pageKeyToQuery.delete(t);let a=e.pageKeys.indexOf(t);e.pageKeys.splice(a,1,n,r),e.ongoingSplits.delete(t),i.unsubscribe()}activePageQueryTokens(e){return e.pageKeys.map(t=>e.pageKeyToQuery.get(t).queryToken)}allQueryTokens(e){return Array.from(e.pageKeyToQuery.values()).map(e=>e.queryToken)}queryTokenForLastPageOfPaginatedQuery(e){let t=this.mustGetPaginatedQuery(e),n=t.pageKeys[t.pageKeys.length-1];if(n===void 0)throw Error(`No pages for paginated query ${e}`);return t.pageKeyToQuery.get(n).queryToken}mustGetPaginatedQuery(e){let t=this.paginatedQuerySet.get(e);if(!t)throw Error(`paginated query no longer exists for token `+e);return t}},z=c(u(),1);function tn({getCurrentValue:e,subscribe:t}){let[n,r]=(0,z.useState)(()=>({getCurrentValue:e,subscribe:t,value:e()})),i=n.value;return(n.getCurrentValue!==e||n.subscribe!==t)&&(i=e(),r({getCurrentValue:e,subscribe:t,value:i})),(0,z.useEffect)(()=>{let n=!1,i=()=>{n||r(n=>{if(n.getCurrentValue!==e||n.subscribe!==t)return n;let r=e();return n.value===r?n:{...n,value:r}})},a=t(i);return i(),()=>{n=!0,a()}},[e,t]),i}var nn=Object.defineProperty,rn=(e,t,n)=>t in e?nn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,an=(e,t,n)=>rn(e,typeof t==`symbol`?t:t+``,n),on=5e3;if(z.default===void 0)throw Error(`Required dependency 'react' not found`);function sn(e,t,n){function r(r){return gn(r),t.mutation(e,r,{optimisticUpdate:n})}return r.withOptimisticUpdate=function(r){if(n!==void 0)throw Error(`Already specified optimistic update for mutation ${I(e)}`);return sn(e,t,r)},r}function cn(e,t){return function(n){return t.action(e,n)}}var ln=class{constructor(e,t){if(an(this,`address`),an(this,`cachedSync`),an(this,`cachedPaginatedQueryClient`),an(this,`listeners`),an(this,`options`),an(this,`closed`,!1),an(this,`_logger`),an(this,`adminAuth`),an(this,`fakeUserIdentity`),e===void 0)throw Error(`No address provided to ConvexReactClient.
If trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/
If running locally, make sure to run \`convex dev\` and ensure the .env.local file is populated.`);if(typeof e!=`string`)throw Error(`ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof e} instead.`);if(!e.includes(`://`))throw Error(`Provided address was not an absolute URL.`);this.address=e,this.listeners=new Map,this._logger=t?.logger===!1?Oe({verbose:t?.verbose??!1}):t?.logger!==!0&&t?.logger?t.logger:P({verbose:t?.verbose??!1}),this.options={...t,logger:this._logger}}get url(){return this.address}get sync(){if(this.closed)throw Error(`ConvexReactClient has already been closed.`);return this.cachedSync?this.cachedSync:(this.cachedSync=new Yt(this.address,()=>{},this.options),this.adminAuth&&this.cachedSync.setAdminAuth(this.adminAuth,this.fakeUserIdentity),this.cachedPaginatedQueryClient=new en(this.cachedSync,e=>this.handleTransition(e)),this.cachedSync)}get paginatedQueryClient(){if(this.sync,this.cachedPaginatedQueryClient)return this.cachedPaginatedQueryClient;throw Error(`Should already be instantiated`)}setAuth(e,t,n){if(typeof e==`string`)throw Error(`Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication.`);this.sync.setAuth(e,t??(()=>{}),n)}clearAuth(){this.sync.clearAuth()}setAdminAuth(e,t){if(this.adminAuth=e,this.fakeUserIdentity=t,this.closed)throw Error(`ConvexReactClient has already been closed.`);this.cachedSync&&this.sync.setAdminAuth(e,t)}watchQuery(e,...t){let[n,r]=t,i=I(e);return{onUpdate:e=>{let{queryToken:t,unsubscribe:a}=this.sync.subscribe(i,n,r),o=this.listeners.get(t);return o===void 0?this.listeners.set(t,new Set([e])):o.add(e),()=>{if(this.closed)return;let n=this.listeners.get(t);n.delete(e),n.size===0&&this.listeners.delete(t),a()}},localQueryResult:()=>{if(this.cachedSync)return this.cachedSync.localQueryResult(i,n)},localQueryLogs:()=>{if(this.cachedSync)return this.cachedSync.localQueryLogs(i,n)},journal:()=>{if(this.cachedSync)return this.cachedSync.queryJournal(i,n)}}}prewarmQuery(e){let t=e.extendSubscriptionFor??on,n=this.watchQuery(e.query,e.args||{}).onUpdate(()=>{});setTimeout(n,t)}watchPaginatedQuery(e,t,n){let r=I(e);return{onUpdate:e=>{let{paginatedQueryToken:i,unsubscribe:a}=this.paginatedQueryClient.subscribe(r,t||{},n),o=this.listeners.get(i);return o===void 0?this.listeners.set(i,new Set([e])):o.add(e),()=>{if(this.closed)return;let t=this.listeners.get(i);t.delete(e),t.size===0&&this.listeners.delete(i),a()}},localQueryResult:()=>this.paginatedQueryClient.localQueryResult(r,t,n)}}mutation(e,...t){let[n,r]=t,i=I(e);return this.sync.mutation(i,n,r)}action(e,...t){let n=I(e);return this.sync.action(n,...t)}query(e,...t){let n=this.watchQuery(e,...t),r=n.localQueryResult();return r===void 0?new Promise((e,t)=>{let r=n.onUpdate(()=>{r();try{e(n.localQueryResult())}catch(e){t(e)}})}):Promise.resolve(r)}connectionState(){return this.sync.connectionState()}subscribeToConnectionState(e){return this.sync.subscribeToConnectionState(e)}get logger(){return this._logger}async close(){if(this.closed=!0,this.listeners=new Map,this.cachedPaginatedQueryClient&&=void 0,this.cachedSync){let e=this.cachedSync;this.cachedSync=void 0,await e.close()}}handleTransition(e){let t=e.queries.map(e=>e.token),n=e.paginatedQueries.map(e=>e.token);this.transition([...t,...n])}transition(e){for(let t of e){let e=this.listeners.get(t);if(e)for(let t of e)t()}}},un=z.createContext(void 0);function dn(){return(0,z.useContext)(un)}var fn=({client:e,children:t})=>z.createElement(un.Provider,{value:e},t);function pn(e,...t){let n=t[0]===`skip`,r=t[0]===`skip`?{}:C(t[0]),i=typeof e==`string`?Je(e):e,a=I(i),o=xn((0,z.useMemo)(()=>n?{}:{query:{query:i,args:r}},[JSON.stringify(me(r)),a,n])).query;if(o instanceof Error)throw o;return o}function mn(e){let t=typeof e==`string`?Je(e):e,n=(0,z.useContext)(un);if(n===void 0)throw Error("Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return(0,z.useMemo)(()=>sn(t,n),[n,I(t)])}function hn(e){let t=(0,z.useContext)(un),n=typeof e==`string`?Je(e):e;if(t===void 0)throw Error("Could not find Convex client! `useAction` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return(0,z.useMemo)(()=>cn(n,t),[t,I(n)])}function gn(e){if(typeof e==`object`&&e&&`bubbles`in e&&`persist`in e&&`isDefaultPrevented`in e)throw Error("Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler.")}var _n=Object.defineProperty,vn=(e,t,n)=>t in e?_n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yn=(e,t,n)=>vn(e,typeof t==`symbol`?t:t+``,n),bn=class{constructor(e){yn(this,`createWatch`),yn(this,`queries`),yn(this,`listeners`),this.createWatch=e,this.queries={},this.listeners=new Set}setQueries(e){for(let t of Object.keys(e)){let{query:n,args:r,paginationOptions:i}=e[t];if(I(n),this.queries[t]===void 0)this.addQuery(t,n,r,i?{paginationOptions:i}:{});else{let e=this.queries[t];(I(n)!==I(e.query)||JSON.stringify(me(r))!==JSON.stringify(me(e.args))||JSON.stringify(i)!==JSON.stringify(e.paginationOptions))&&(this.removeQuery(t),this.addQuery(t,n,r,i?{paginationOptions:i}:{}))}}for(let t of Object.keys(this.queries))e[t]===void 0&&this.removeQuery(t)}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}getLocalResults(e){let t={};for(let n of Object.keys(e)){let{query:r,args:i}=e[n],a=e[n].paginationOptions;I(r);let o=this.createWatch(r,i,a?{paginationOptions:a}:{}),s;try{s=o.localQueryResult()}catch(e){if(e instanceof Error)s=e;else throw e}t[n]=s}return t}setCreateWatch(e){this.createWatch=e;for(let e of Object.keys(this.queries)){let{query:t,args:n,watch:r,paginationOptions:i}=this.queries[e],a=`journal`in r?r.journal():void 0;this.removeQuery(e),this.addQuery(e,t,n,{...a?{journal:a}:[],...i?{paginationOptions:i}:{}})}}destroy(){for(let e of Object.keys(this.queries))this.removeQuery(e);this.listeners=new Set}addQuery(e,t,n,{paginationOptions:r,journal:i}){if(this.queries[e]!==void 0)throw Error(`Tried to add a new query with identifier ${e} when it already exists.`);let a=this.createWatch(t,n,{...i?{journal:i}:[],...r?{paginationOptions:r}:{}}),o=a.onUpdate(()=>this.notifyListeners());this.queries[e]={query:t,args:n,watch:a,unsubscribe:o,...r?{paginationOptions:r}:{}}}removeQuery(e){let t=this.queries[e];if(t===void 0)throw Error(`No query found with identifier ${e}.`);t.unsubscribe(),delete this.queries[e]}notifyListeners(){for(let e of this.listeners)e()}};function xn(e){let t=dn();if(t===void 0)throw Error("Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return Sn(e,(0,z.useMemo)(()=>(e,n,{journal:r,paginationOptions:i})=>i?t.watchPaginatedQuery(e,n,i):t.watchQuery(e,n,r?{journal:r}:{}),[t]))}function Sn(e,t){let[n]=(0,z.useState)(()=>new bn(t));return n.createWatch!==t&&n.setCreateWatch(t),(0,z.useEffect)(()=>()=>n.destroy(),[n]),tn((0,z.useMemo)(()=>({getCurrentValue:()=>n.getLocalResults(e),subscribe:t=>(n.setQueries(e),n.subscribe(t))}),[n,e]))}var Cn=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function te(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=te,E=function(){re.postMessage(null)}}else E=function(){_(te,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),wn=o(((e,t)=>{t.exports=Cn()})),Tn=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),En=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Tn()})),Dn=o((e=>{var t=wn(),n=u(),r=En();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,m=Symbol.for(`react.element`),h=Symbol.for(`react.transitional.element`),g=Symbol.for(`react.portal`),_=Symbol.for(`react.fragment`),v=Symbol.for(`react.strict_mode`),y=Symbol.for(`react.profiler`),b=Symbol.for(`react.consumer`),x=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),E=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case _:return`Fragment`;case y:return`Profiler`;case v:return`StrictMode`;case C:return`Suspense`;case w:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case g:return`Portal`;case x:return e.displayName||`Context`;case b:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var D=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},se=[],ce=-1;function le(e){return{current:e}}function A(e){0>ce||(e.current=se[ce],se[ce]=null,ce--)}function j(e,t){ce++,se[ce]=e.current,e.current=t}var ue=le(null),de=le(null),fe=le(null),M=le(null);function pe(e,t){switch(j(fe,t),j(de,e),j(ue,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}A(ue),j(ue,e)}function me(){A(ue),A(de),A(fe)}function he(e){e.memoizedState!==null&&j(M,e);var t=ue.current,n=Hd(t,e.type);t!==n&&(j(de,e),j(ue,n))}function N(e){de.current===e&&(A(ue),A(de)),M.current===e&&(A(M),Qf._currentValue=oe)}var ge,_e;function ve(e){if(ge===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ge=t&&t[1]||``,_e=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ge+e+_e}var ye=!1;function be(e,t){if(!e||ye)return``;ye=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ye=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ve(n):``}function xe(e,t){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve(`Lazy`);case 13:return e.child!==t&&t!==null?ve(`Suspense Fallback`):ve(`Suspense`);case 19:return ve(`SuspenseList`);case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return ve(`Activity`);default:return``}}function Se(e){try{var t=``,n=null;do t+=xe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ce=Object.prototype.hasOwnProperty,we=t.unstable_scheduleCallback,Te=t.unstable_cancelCallback,Ee=t.unstable_shouldYield,De=t.unstable_requestPaint,P=t.unstable_now,Oe=t.unstable_getCurrentPriorityLevel,ke=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,F=t.unstable_NormalPriority,je=t.unstable_LowPriority,Me=t.unstable_IdlePriority,Ne=t.log,Pe=t.unstable_setDisableYieldValue,Fe=null,Ie=null;function Le(e){if(typeof Ne==`function`&&Pe(e),Ie&&typeof Ie.setStrictMode==`function`)try{Ie.setStrictMode(Fe,e)}catch{}}var Re=Math.clz32?Math.clz32:Ve,ze=Math.log,Be=Math.LN2;function Ve(e){return e>>>=0,e===0?32:31-(ze(e)/Be|0)|0}var He=256,Ue=262144,We=4194304;function Ge(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ge(n))):i=Ge(o):i=Ge(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ge(n))):i=Ge(o)):i=Ge(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function I(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Je(){var e=We;return We<<=1,!(We&62914560)&&(We=4194304),e}function Ye(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ze(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Re(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Qe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Qe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Re(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function $e(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function et(e,t){var n=t&-t;return n=n&42?1:tt(n),(n&(e.suspendedLanes|t))===0?n:0}function tt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function rt(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function it(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var at=Math.random().toString(36).slice(2),ot=`__reactFiber$`+at,st=`__reactProps$`+at,ct=`__reactContainer$`+at,lt=`__reactEvents$`+at,ut=`__reactListeners$`+at,dt=`__reactHandles$`+at,ft=`__reactResources$`+at,pt=`__reactMarker$`+at;function mt(e){delete e[ot],delete e[st],delete e[lt],delete e[ut],delete e[dt]}function ht(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ot])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function gt(e){if(e=e[ot]||e[ct]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _t(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function vt(e){var t=e[ft];return t||=e[ft]={hoistableStyles:new Map,hoistableScripts:new Map},t}function yt(e){e[pt]=!0}var bt=new Set,L={};function xt(e,t){St(e,t),St(e+`Capture`,t)}function St(e,t){for(L[e]=t,e=0;e<t.length;e++)bt.add(t[e])}var Ct=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),wt={},Tt={};function Et(e){return Ce.call(Tt,e)?!0:Ce.call(wt,e)?!1:Ct.test(e)?Tt[e]=!0:(wt[e]=!0,!1)}function Dt(e,t,n){if(Et(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ot(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function kt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function At(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function jt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Mt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nt(e){if(!e._valueTracker){var t=jt(e)?`checked`:`value`;e._valueTracker=Mt(e,t,``+e[t])}}function Pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=jt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ft(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var It=/[\n"\\]/g;function Lt(e){return e.replace(It,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Rt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+At(t)):e.value!==``+At(t)&&(e.value=``+At(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Bt(e,o,At(n)):Bt(e,o,At(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+At(s):e.removeAttribute(`name`)}function zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Nt(e);return}n=n==null?``:``+At(n),t=t==null?n:``+At(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Nt(e)}function Bt(e,t,n){t===`number`&&Ft(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Vt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+At(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ht(e,t,n){if(t!=null&&(t=``+At(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+At(n)}function Ut(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(D(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=At(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Nt(e)}function Wt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Kt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Gt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Kt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Kt(e,o,t[o])}function Jt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var R=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Yt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xt(e){return Yt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Zt(){}var Qt=null;function $t(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var en=null,z=null;function tn(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[st]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Rt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Lt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[st]||null;if(!a)throw Error(i(90));Rt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Pt(r)}break a;case`textarea`:Ht(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}}}var nn=!1;function rn(e,t,n){if(nn)return e(t,n);nn=!0;try{return e(t)}finally{if(nn=!1,(en!==null||z!==null)&&(bu(),en&&(t=en,e=z,z=en=null,tn(t),e)))for(t=0;t<e.length;t++)tn(e[t])}}function an(e,t){var n=e.stateNode;if(n===null)return null;var r=n[st]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var on=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),sn=!1;if(on)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){sn=!0}}),window.addEventListener(`test`,cn,cn),window.removeEventListener(`test`,cn,cn)}catch{sn=!1}var ln=null,un=null,dn=null;function fn(){if(dn)return dn;var e,t=un,n=t.length,r,i=`value`in ln?ln.value:ln.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return dn=i.slice(e,1<r?1-r:void 0)}function pn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mn(){return!0}function hn(){return!1}function gn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?mn:hn,this.isPropagationStopped=hn,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=mn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=mn)},persist:function(){},isPersistent:mn}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vn=gn(_n),yn=p({},_n,{view:0,detail:0}),bn=gn(yn),xn,Sn,Cn,Tn=p({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:V,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Cn&&(Cn&&e.type===`mousemove`?(xn=e.screenX-Cn.screenX,Sn=e.screenY-Cn.screenY):Sn=xn=0,Cn=e),xn)},movementY:function(e){return`movementY`in e?e.movementY:Sn}}),Dn=gn(Tn),On=gn(p({},Tn,{dataTransfer:0})),kn=gn(p({},yn,{relatedTarget:0})),An=gn(p({},_n,{animationName:0,elapsedTime:0,pseudoElement:0})),jn=gn(p({},_n,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Mn=gn(p({},_n,{data:0})),Nn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},B={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Pn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pn[e])?!!t[e]:!1}function V(){return Fn}var In=gn(p({},yn,{key:function(e){if(e.key){var t=Nn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=pn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?B[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:V,charCode:function(e){return e.type===`keypress`?pn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?pn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Ln=gn(p({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=gn(p({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:V})),zn=gn(p({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0})),Bn=gn(p({},Tn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Vn=gn(p({},_n,{newState:0,oldState:0})),Hn=[9,13,27,32],Un=on&&`CompositionEvent`in window,Wn=null;on&&`documentMode`in document&&(Wn=document.documentMode);var Gn=on&&`TextEvent`in window&&!Wn,Kn=on&&(!Un||Wn&&8<Wn&&11>=Wn),qn=` `,Jn=!1;function Yn(e,t){switch(e){case`keyup`:return Hn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Xn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Zn=!1;function Qn(e,t){switch(e){case`compositionend`:return Xn(t);case`keypress`:return t.which===32?(Jn=!0,qn):null;case`textInput`:return e=t.data,e===qn&&Jn?null:e;default:return null}}function $n(e,t){if(Zn)return e===`compositionend`||!Un&&Yn(e,t)?(e=fn(),dn=un=ln=null,Zn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Kn&&t.locale!==`ko`?null:t.data;default:return null}}var er={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!er[e.type]:t===`textarea`}function nr(e,t,n,r){en?z?z.push(r):z=[r]:en=r,t=Ed(t,`onChange`),0<t.length&&(n=new vn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var rr=null,ir=null;function ar(e){yd(e,0)}function or(e){if(Pt(_t(e)))return e}function sr(e,t){if(e===`change`)return t}var cr=!1;if(on){var lr;if(on){var ur=`oninput`in document;if(!ur){var dr=document.createElement(`div`);dr.setAttribute(`oninput`,`return;`),ur=typeof dr.oninput==`function`}lr=ur}else lr=!1;cr=lr&&(!document.documentMode||9<document.documentMode)}function fr(){rr&&(rr.detachEvent(`onpropertychange`,pr),ir=rr=null)}function pr(e){if(e.propertyName===`value`&&or(ir)){var t=[];nr(t,ir,e,$t(e)),rn(ar,t)}}function H(e,t,n){e===`focusin`?(fr(),rr=t,ir=n,rr.attachEvent(`onpropertychange`,pr)):e===`focusout`&&fr()}function mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return or(ir)}function hr(e,t){if(e===`click`)return or(t)}function gr(e,t){if(e===`input`||e===`change`)return or(t)}function _r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var vr=typeof Object.is==`function`?Object.is:_r;function yr(e,t){if(vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ce.call(t,i)||!vr(e[i],t[i]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var n=br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=br(n)}}function Sr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ft(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ft(e.document)}return t}function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Tr=on&&`documentMode`in document&&11>=document.documentMode,Er=null,Dr=null,Or=null,kr=!1;function Ar(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kr||Er==null||Er!==Ft(r)||(r=Er,`selectionStart`in r&&wr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&yr(Or,r)||(Or=r,r=Ed(Dr,`onSelect`),0<r.length&&(t=new vn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Mr={animationend:jr(`Animation`,`AnimationEnd`),animationiteration:jr(`Animation`,`AnimationIteration`),animationstart:jr(`Animation`,`AnimationStart`),transitionrun:jr(`Transition`,`TransitionRun`),transitionstart:jr(`Transition`,`TransitionStart`),transitioncancel:jr(`Transition`,`TransitionCancel`),transitionend:jr(`Transition`,`TransitionEnd`)},Nr={},Pr={};on&&(Pr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),`TransitionEvent`in window||delete Mr.transitionend.transition);function Fr(e){if(Nr[e])return Nr[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pr)return Nr[e]=t[n];return e}var Ir=Fr(`animationend`),Lr=Fr(`animationiteration`),Rr=Fr(`animationstart`),zr=Fr(`transitionrun`),Br=Fr(`transitionstart`),Vr=Fr(`transitioncancel`),Hr=Fr(`transitionend`),Ur=new Map,Wr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Wr.push(`scrollEnd`);function Gr(e,t){Ur.set(e,t),xt(t,[e])}var Kr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},qr=[],Jr=0,Yr=0;function Xr(){for(var e=Jr,t=Yr=Jr=0;t<e;){var n=qr[t];qr[t++]=null;var r=qr[t];qr[t++]=null;var i=qr[t];qr[t++]=null;var a=qr[t];if(qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ei(n,i,a)}}function Zr(e,t,n,r){qr[Jr++]=e,qr[Jr++]=t,qr[Jr++]=n,qr[Jr++]=r,Yr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Qr(e,t,n,r){return Zr(e,t,n,r),ti(e)}function $r(e,t){return Zr(e,null,null,t),ti(e)}function ei(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Re(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ti(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,t,n,r){return new ri(e,t,n,r)}function ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oi(e,t){var n=e.alternate;return n===null?(n=ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function si(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ai(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ue.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=ii(31,n,t,a),e.elementType=te,e.lanes=o,e;case _:return li(n.children,a,o,t);case v:s=8,a|=24;break;case y:return e=ii(12,n,t,a|2),e.elementType=y,e.lanes=o,e;case C:return e=ii(13,n,t,a),e.elementType=C,e.lanes=o,e;case w:return e=ii(19,n,t,a),e.elementType=w,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case x:s=10;break a;case b:s=9;break a;case S:s=11;break a;case ee:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ii(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function li(e,t,n,r){return e=ii(7,e,r,t),e.lanes=n,e}function ui(e,t,n){return e=ii(6,e,null,t),e.lanes=n,e}function di(e){var t=ii(18,null,null,0);return t.stateNode=e,t}function fi(e,t,n){return t=ii(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pi=new WeakMap;function mi(e,t){if(typeof e==`object`&&e){var n=pi.get(e);return n===void 0?(t={value:e,source:t,stack:Se(t)},pi.set(e,t),t):n}return{value:e,source:t,stack:Se(t)}}var hi=[],gi=0,_i=null,vi=0,yi=[],bi=0,xi=null,Si=1,Ci=``;function wi(e,t){hi[gi++]=vi,hi[gi++]=_i,_i=e,vi=t}function Ti(e,t,n){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,xi=e;var r=Si;e=Ci;var i=32-Re(r)-1;r&=~(1<<i),n+=1;var a=32-Re(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Si=1<<32-Re(t)+i|n<<i|r,Ci=a+e}else Si=1<<a|n<<i|r,Ci=e}function Ei(e){e.return!==null&&(wi(e,1),Ti(e,1,0))}function Di(e){for(;e===_i;)_i=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null;for(;e===xi;)xi=yi[--bi],yi[bi]=null,Ci=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null}function Oi(e,t){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,Si=t.id,Ci=t.overflow,xi=e}var ki=null,Ai=null,U=!1,ji=null,Mi=!1,Ni=Error(i(519));function Pi(e){throw Bi(mi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ot]=e,t[st]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Ut(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(ki=e.return;ki;)switch(ki.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:ki=ki.return}}function Li(e){if(e!==ki)return!1;if(!U)return Ii(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ai&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else t===27?(t=Ai,Zd(e.type)?(e=lf,lf=null,Ai=e):Ai=t):Ai=ki?cf(e.stateNode.nextSibling):null;return!0}function Ri(){Ai=ki=null,U=!1}function zi(){var e=ji;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),ji=null),e}function Bi(e){ji===null?ji=[e]:ji.push(e)}var Vi=le(null),Hi=null,Ui=null;function Wi(e,t,n){j(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,A(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;vr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===M.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!vr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(i(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=dd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=O.S;O.S=function(e,t){eu=P(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=le(null);function ha(){var e=ma.current;return e===null?q.pooledCache:e}function ga(e,t){t===null?j(ma,ma.current):j(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then(Zt,Zt);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=oi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===_?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=ci(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=li(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ui(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case h:return n=ci(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case g:return t=fi(t,e.mode,n),t.return=e,t;case T:return t=wa(t),f(e,t,n)}if(D(t)||re(t))return t=li(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===x)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case h:return n.key===i?l(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case T:return n=wa(n),p(e,t,n,r)}if(D(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===x)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case h:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case g:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=wa(r),m(e,t,n,r,i)}if(D(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===x)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&wi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&wi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&wi(i,h),l}function y(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&wi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&wi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&wi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===_&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case h:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===_){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===_?(c=li(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ci(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case g:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=fi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=wa(o),b(e,r,o,c)}if(D(o))return v(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===x)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ui(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=ii(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ti(e),ei(e,null,n),t}return Zr(e,r,t,n),ti(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,m=f!==s.lane;if(m?(Y&f)===f:(r&f)===f){f!==0&&f===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=p({},d,f);break a;case 2:Ia=!0}}f=s.callback,f!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[f]:m.push(f))}else m={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=le(null),Ya=le(0);function Xa(e,t){e=Ul,j(Ya,e),j(Ja,t),Ul=e|t.baseLanes}function Za(){j(Ya,Ul),j(Ja,Ja.current)}function Qa(){Ul=Ya.current,A(Ja),A(Ya)}var $a=le(null),eo=null;function to(e){var t=e.alternate;j(oo,oo.current&1),j($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){j(oo,oo.current),j($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(j(oo,oo.current),j($a,e),eo===null&&(eo=e)):io(e)}function io(){j(oo,oo.current),j($a,$a.current)}function ao(e){A($a),eo===e&&(eo=null),A(oo)}var oo=le(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,G=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vr(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Ls:Rs,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){O.H=Is;var t=G!==null&&G.next!==null;if(co=0,lo=G=W=null,uo=!1,ho=0,go=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&Yi(e)&&(tc=!0))}function So(e,t,n,r){W=e;var a=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=a)throw Error(i(301));if(a+=1,lo=G=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=zs,o=t(n,r)}while(fo);return o}function Co(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(G===null?null:G.memoizedState)!==e&&(W.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}co=0,lo=G=W=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?W.memoizedState=lo=e:lo=lo.next=e,lo}function Oo(){if(G===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=G.next;var t=lo===null?W.memoizedState:lo.next;if(t!==null)lo=t,G=e;else{if(e===null)throw W.alternate===null?Error(i(467)):Error(i(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},lo===null?W.memoizedState=lo=e:lo=lo.next=e}return lo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=ho;return ho+=1,go===null&&(go=[]),e=Ca(go,e,t),t=W,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===x)return Zi(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=E;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),G,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((co&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,W.lanes|=p,Gl|=p;f=u.action,po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,W.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!vr(o,e.memoizedState)&&(tc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);vr(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=W,a=Oo(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!vr((G||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||co&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=ko(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vr(e,n)}catch{return!0}}function Ho(e){var t=$r(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){Le(!0);try{n()}finally{Le(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,G,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(U){var n=q.formState;if(n!==null){a:{var r=W;if(U){if(Ai){b:{for(var i=Ai,a=Mi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ai=cf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,W,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,W,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),G,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===va?ba:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=G;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=ko(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();W.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;G!==null&&r!==null&&yo(r,G.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(W.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=ko(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||co&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),W.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return vr(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),W.lanes|=e,Gl|=e,t):(e=vs(e,n,r),vr(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Ms(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,fa(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,oe,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:oe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return Zi(Qf)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=za(n);var r=Ba(t,e,n);r!==null&&(hu(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=Qr(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,vr(s,o))return Zr(e,t,i,0),q===null&&Xr(),!1}catch{}if(n=Qr(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=Qr(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ps(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}var Is={readContext:Zi,use:jo,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Is.useEffectEvent=vo;var Ls={readContext:Zi,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){Le(!0);try{n(t)}finally{Le(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,W,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,a=Do();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=q.identifierPrefix;if(U){var n=Ci,r=Si;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,W)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),G.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return G===null?vs(n,e,t):ys(n,G.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return G===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(hu(t,e,n),Va(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){Kr(e)}function Ks(e){console.error(e)}function qs(e){Kr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=za(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(U)return t=$a.current,t===null?(r!==Ni&&(t=Error(i(423),{cause:r}),Bi(mi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=mi(r,n),a=Xs(e.stateNode,r,a),Ha(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ni&&(e=Error(i(422),{cause:r}),Bi(mi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=mi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=mi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&s&&Ei(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ai(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?yr:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=oi(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(yr(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Pa(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(no(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(tc||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=q,r!==null&&(s=et(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,$r(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,Ai=cf(s.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=lc(t,r),t.flags|=4096;return t}return e=oi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Xi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ni,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ni,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Ia||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ni,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Ia||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Ri(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:_a()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(oo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(U){if(a?to(t):io(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=li(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(to(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=li(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Bi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=q,s!==null&&(r=et(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,$r(e,r),hu(s,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ai=cf(c.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=oi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=li(c,a,n,null),c.flags|=2):c=oi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=oi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=ii(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Pa(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(oo,o),nc(e,t,r,n),r=U?vi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Yi(e))):!0}function kc(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:he(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(oo,oo.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,U&&t.flags&1048576&&Ti(t,vi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)ai(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=rc(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Wi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Wa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==a){a=mi(Error(i(424)),t),Bi(a),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ai=cf(e.firstChild),ki=t,U=!0,ji=null,Mi=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(n=t.type,e=t.pendingProps,r=Bd(fe.current).createElement(n),r[ot]=t,r[st]=e,Pd(r,n,e),yt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return he(t),e===null&&U&&(r=t.stateNode=ff(t.type,t.pendingProps,fe.current),ki=t,Mi=!0,a=Ai,Zd(t.type)?(lf=a,Ai=cf(r.firstChild)):Ai=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=Ai)&&(r=tf(r,t.type,t.pendingProps,Mi),r===null?a=!1:(t.stateNode=r,ki=t,Ai=cf(r.firstChild),Mi=!1,a=!0)),a||Pi(t)),he(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=Ai)&&(n=nf(n,t.pendingProps,Mi),n===null?e=!1:(t.stateNode=n,ki=t,Ai=null,e=!0)),e||Pi(t)),null;case 13:return bc(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ha(),a===null&&(a=q,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Wi(t,ra,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Wi(t,ra,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ta=xa,ya}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ta=xa,ya}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Je(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(N(t),n=fe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=ue.current,Li(t)?Fi(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(N(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=ue.current,Li(t))Fi(t,o);else{var s=Bd(fe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ot]=t,o[st]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=fe.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ki,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Pi(t,!0)}else e=Bd(e).createTextNode(r),e[ot]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ot]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ot]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return me(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return Gi(t.type),Ic(t),null;case 19:if(A(oo),r=t.memoizedState,r===null)return Ic(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)si(n,e),n=n.sibling;return j(oo,oo.current&1|2),U&&wi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&P()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}else{if(!a)if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!U)return Ic(t),null}else 2*P()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=P(),e.sibling=null,n=oo.current,j(oo,a?n&1|2:n&1),U&&wi(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&A(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),me(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return N(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(oo),null;case 4:return me(),null;case 10:return Gi(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&A(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function zc(e,t){switch(Di(t),t.tag){case 3:Gi(ra),me();break;case 26:case 27:case 5:N(t);break;case 4:me();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:A(oo);break;case 10:Gi(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&A(ma);break;case 24:Gi(ra)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[st]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ot]=e,t[st]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Cr(e),wr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ie&&typeof Ie.onCommitFiberUnmount==`function`)try{Ie.onCommitFiberUnmount(Fe,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[pt]||o[ot]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ot]=e,yt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ot]=e,yt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Wt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=P()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Wt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:O.T===null?rt():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||U){var e=Ue;Ue<<=1,!(Ue&3932160)&&(Ue=262144),Jl=e}else Jl=536870912;return e=$a.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Xe(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-P(),10<a)){if(yu(r,t,Jl,!Bl),Ke(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},jl(t,a,d);var m=(a&62914560)===a?$l-P():(a&4194048)===a?eu-P():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!vr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Re(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Qe(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ui=Hi=null,Eo(e),Oa=null,ka=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=oi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=qe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Re(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Xr(),n}function Cu(e,t){W=null,O.H=Is,t===va||t===ba?(t=Ea(),X=3):t===ya?(t=Ea(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Js(e,mi(t,e.current)))}function wu(){var e=$a.current;return e===null?!0:(Y&4194048)===Y?eo===null:(Y&62914560)===Y||Y&536870912?e===eo:!1}function Tu(){var e=O.H;return O.H=Is,e===null?Is:e}function Eu(){var e=O.A;return O.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&$a.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,K=r,O.H=i,O.A=a,J===null&&(q=null,Y=0,Xr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=P()+500,Su(e,t)):Vl=qe(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Sa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Sa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ui=Hi=null,O.H=r,O.A=a,K=n,J===null?(q=null,Y=0,Xr(),Wl):0}function ju(){for(;J!==null&&!Ee();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Eo(t);default:zc(n,t),t=J=si(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ui=Hi=null,Eo(t),Oa=null,ka=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Js(e,mi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Js(e,mi(n,e.current)),J=null;return}t.flags&32768?(U||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Yr,Ze(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(F,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Cr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Sr(s.ownerDocument.documentElement,s)){if(c!==null&&wr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=xr(s,h),v=xr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,De();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),nt(n),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot==`function`)try{Ie.onCommitFiberRoot(Fe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=nt(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot==`function`)try{Ie.onPostCommitFiberRoot(Fe,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=mi(n,t),t=Xs(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Xe(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=mi(n,e),n=Zs(2),r=Ba(t,n,2),r!==null&&(Qs(n,r,t,e),Xe(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>P()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Je()),e=$r(e,t),e!==null&&(Xe(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return we(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Re(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ke(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=P(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Re(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=I(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Te(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Te(r),nt(n)){case 2:case 8:n=Ae;break;case 32:n=F;break;case 268435456:n=Me;break;default:n=F}return r=cd.bind(null,e),n=we(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Te(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ke(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,P()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?we(ke,ad):od()})}function dd(){if(nd===0){var e=ca;e===0&&(e=He,He<<=1,!(He&261888)&&(He=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Xt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[st]||null).action),o=r.submitter;o&&(t=(t=o[st]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new vn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Wr.length;hd++){var gd=Wr[hd];Gr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Gr(Ir,`onAnimationEnd`),Gr(Lr,`onAnimationIteration`),Gr(Rr,`onAnimationStart`),Gr(`dblclick`,`onDoubleClick`),Gr(`focusin`,`onFocus`),Gr(`focusout`,`onBlur`),Gr(zr,`onTransitionRun`),Gr(Br,`onTransitionStart`),Gr(Vr,`onTransitionCancel`),Gr(Hr,`onTransitionEnd`),St(`onMouseEnter`,[`mouseout`,`mouseover`]),St(`onMouseLeave`,[`mouseout`,`mouseover`]),St(`onPointerEnter`,[`pointerout`,`pointerover`]),St(`onPointerLeave`,[`pointerout`,`pointerover`]),xt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),xt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),xt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),xt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[lt];n===void 0&&(n=t[lt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,bt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!sn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ht(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}rn(function(){var r=a,i=$t(n),s=[];a:{var c=Ur.get(e);if(c!==void 0){var l=vn,u=e;switch(e){case`keypress`:if(pn(n)===0)break a;case`keydown`:case`keyup`:l=In;break;case`focusin`:u=`focus`,l=kn;break;case`focusout`:u=`blur`,l=kn;break;case`beforeblur`:case`afterblur`:l=kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Dn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=On;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Rn;break;case Ir:case Lr:case Rr:l=An;break;case Hr:l=zn;break;case`scroll`:case`scrollend`:l=bn;break;case`wheel`:l=Bn;break;case`copy`:case`cut`:case`paste`:l=jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Ln;break;case`toggle`:case`beforetoggle`:l=Vn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=an(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Qt&&(u=n.relatedTarget||n.fromElement)&&(ht(u)||u[ct]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ht(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Dn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Ln,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:_t(l),h=u==null?c:_t(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ht(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?_t(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=sr;else if(tr(c))if(cr)v=gr;else{v=mr;var y=H}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Jt(r.elementType)&&(v=sr):v=hr;if(v&&=v(e,r)){nr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Bt(c,`number`,c.value)}switch(y=r?_t(r):window,e){case`focusin`:(tr(y)||y.contentEditable===`true`)&&(Er=y,Dr=r,Or=null);break;case`focusout`:Or=Dr=Er=null;break;case`mousedown`:kr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:kr=!1,Ar(s,n,i);break;case`selectionchange`:if(Tr)break;case`keydown`:case`keyup`:Ar(s,n,i)}var b;if(Un)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Zn?Yn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Kn&&n.locale!==`ko`&&(Zn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Zn&&(b=fn()):(ln=i,un=`value`in ln?ln.value:ln.textContent,Zn=!0)),y=Ed(r,x),0<y.length&&(x=new Mn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Xn(n),b!==null&&(x.data=b)))),(b=Gn?Qn(e,n):$n(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Mn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=an(e,n),i!=null&&r.unshift(Td(e,i,a)),i=an(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=an(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=an(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Wt(e,``+r);break;case`className`:Ot(e,`class`,r);break;case`tabIndex`:Ot(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ot(e,n,r);break;case`style`:qt(e,r,o);break;case`data`:if(t!==`object`){Ot(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Xt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Xt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Zt);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Xt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Dt(e,`popover`,r);break;case`xlinkActuate`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Dt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=R.get(n)||n,Dt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Wt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Zt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!L.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[st]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Dt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Vt(e,!!r,n,!0):Vt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Ut(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Jt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Rt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Vt(e,!!n,n?[]:``,!1):Vt(e,!!n,t,!0)):Vt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Ht(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Jt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=gt(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Lt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Lt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Lt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Lt(n.imageSizes)+`"]`)):i+=`[href="`+Lt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=p({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Lt(r)+`"][href="`+Lt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=p({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),yt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=vt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=p({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);yt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=vt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),yt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=vt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),yt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=fe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=vt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=vt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=vt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Lt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),yt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Lt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Lt(n.href)+`"]`);if(r)return t.instance=r,yt(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),yt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,yt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),yt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,yt(a),a):(r=n,(a=mf.get(o))&&(r=p({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),yt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[pt]||a[ot]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,yt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),yt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:x,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ii(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=ni,e):ni}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(hu(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=$r(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=tt(t);var n=$r(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ge(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Re(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=P()+500,id(0,!1))}}break;case 31:case 13:s=$r(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=$t(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=ht(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Oe()){case ke:return 2;case Ae:return 8;case F:case je:return 32;case Me:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=gt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=ht(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,it(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,it(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qt=r,n.target.dispatchEvent(r),Qt=null}else return t=gt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=gt(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[st]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[st]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ct]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=rt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Fe=zp.inject(Rp),Ie=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ct]=t.current,Sd(e),new Fp(t)}})),On=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Dn()}))(),kn=o((e=>{var t=u().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),An=o(((e,t)=>{t.exports=kn()}));function jn(e,t){return new Proxy({},{get(n,r){if(typeof r==`string`)return jn(e,[...t,r]);if(r===We){if(t.length<1){let n=[e,...t].join(`.`);throw Error(`API path is expected to be of the form \`${e}.childComponent.functionName\`. Found: \`${n}\``)}return`_reference/childComponent/`+t.join(`/`)}else return}})}var Mn=()=>jn(`components`,[]),Nn=An(),B=Xe;Mn();var Pn=`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,Fn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),V=o(((e,t)=>{t.exports=Fn()}))(),In=5,Ln=5,Rn=5,zn=5,Bn=5,Vn=5,Hn=5,Un=10,Wn=5,Gn=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``),Kn=[`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`];function qn(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}var Jn=[`No.`,`TES Award Number`,`Student ID`,`Last Name`,`First Name`,`MI.`,`batch No.`,`Status`,`Semester`,`School Year`];function Yn(e){let t=(0,Nn.c)(4),{status:n,tone:r}=e,i=`admin-status admin-status--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,V.jsx)(`span`,{className:`admin-status__dot`}),t[0]=a):a=t[0];let o=n||`—`,s;return t[1]!==i||t[2]!==o?(s=(0,V.jsxs)(`span`,{className:i,children:[a,o]}),t[1]=i,t[2]=o,t[3]=s):s=t[3],s}function Xn(e=``){let t=e.toLowerCase();return t.includes(`grantee`)?`grantee`:t.includes(`applicant`)?`applicant`:t.includes(`complete`)||t.includes(`resolved`)||t.includes(`valid`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function Zn(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function Qn(e){return`"${String(e??``).replaceAll(`"`,`""`)}"`}function $n(e,t){let n=t.map(e=>e.map(Qn).join(`,`)).join(`
`),r=new Blob([n],{type:`text/csv;charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(i)}function er(){let e=[Jn,[`1`,`TES-2024-0001`,`2024-UNI-0001`,`Dela Cruz`,`Juan`,`P`,`2024-01`,`Pending`,`1st Semester`,`2024-2025`]].map(e=>e.map(e=>`"${e.replaceAll(`"`,`""`)}"`).join(`,`)).join(`
`),t=new Blob([e],{type:`text/csv;charset=utf-8`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`tdp-grantee-template.csv`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function tr(e,t){return String(e??``).trim().replace(/[^a-z0-9-]+/gi,`-`).replace(/^-+|-+$/g,``)||t}function nr(e,t){for(let n of[`lastName`,`firstName`,`middleInitial`,`studentId`]){let r=String(e?.[n]??``).localeCompare(String(t?.[n]??``),void 0,{numeric:!0,sensitivity:`base`});if(r!==0)return r}return 0}function rr(e){return[e?.lastName,e?.firstName,e?.middleInitial].map(e=>String(e??``).trim()).filter(Boolean).join(`, `)}function ir(e){return String(e?.course??e?.program??e?.degreeProgram??``).trim()}function ar(e){let t=String(e?.applicationYear??``).trim();if(t)return t;let n=e?.submittedAt;return n?String(new Date(n).getFullYear()):``}function or(e,t){if(t<=5)return Array.from({length:t},(e,t)=>t+1);let n=[1],r=Math.max(2,e-1),i=Math.min(t-1,e+1);r>2&&n.push(`left-ellipsis`);for(let e=r;e<=i;e+=1)n.push(e);return i<t-1&&n.push(`right-ellipsis`),n.push(t),n}function sr(e,t){if(e===`application/pdf`)return`.pdf`;if(e===`image/png`)return`.png`;if(e===`image/jpeg`)return`.jpg`;try{let e=new URL(t).pathname.match(/\.(pdf|png|jpe?g)$/i);return e?`.${e[1].toLowerCase().replace(`jpeg`,`jpg`)}`:``}catch{return``}}async function cr(e,t){let n=`${Gn}/google-drive/file?url=${encodeURIComponent(e.frontIdUrl)}`,r=await fetch(n);if(!r.ok)throw Error(`Unable to download School ID file for ${e.studentId||`student`}.`);let i=await r.blob(),a=new Uint8Array(await i.arrayBuffer()),o=tr(e.studentId,`student-${t+1}`),s=tr(e.lastName,`no-last-name`),c=tr(e.firstName,`no-first-name`),l=tr(e.middleInitial,`no-middle-name`),u=tr(e.batchId,`no-batch`),d=sr(i.type,e.frontIdUrl);return{bytes:a,name:`${s}-${c}-${l}-student-id-${o}-batch-${u}-${t+1}${d}`}}function lr(){return Array.from({length:256},(e,t)=>{let n=t;for(let e=0;e<8;e+=1)n=n&1?3988292384^n>>>1:n>>>1;return n>>>0})}var ur=lr(),dr=new TextEncoder;function fr(e){let t=4294967295;for(let n of e)t=ur[(t^n)&255]^t>>>8;return(t^4294967295)>>>0}function pr(){let e=new Date,t=e.getHours()<<11|e.getMinutes()<<5|Math.floor(e.getSeconds()/2);return{date:e.getFullYear()-1980<<9|e.getMonth()+1<<5|e.getDate(),time:t}}function H(e,t,n,r){if(n===2){e.setUint16(t,r,!0);return}e.setUint32(t,r>>>0,!0)}function mr(e){let{date:t,time:n}=pr(),r=[],i=[],a=0;e.forEach(e=>{let o=dr.encode(e.name),s=fr(e.bytes),c=new Uint8Array(30+o.length),l=new DataView(c.buffer);H(l,0,4,67324752),H(l,4,2,20),H(l,8,2,0),H(l,10,2,n),H(l,12,2,t),H(l,14,4,s),H(l,18,4,e.bytes.length),H(l,22,4,e.bytes.length),H(l,26,2,o.length),c.set(o,30),r.push(c,e.bytes);let u=new Uint8Array(46+o.length),d=new DataView(u.buffer);H(d,0,4,33639248),H(d,4,2,20),H(d,6,2,20),H(d,10,2,0),H(d,12,2,n),H(d,14,2,t),H(d,16,4,s),H(d,20,4,e.bytes.length),H(d,24,4,e.bytes.length),H(d,28,2,o.length),H(d,42,4,a),u.set(o,46),i.push(u),a+=c.length+e.bytes.length});let o=i.reduce((e,t)=>e+t.length,0),s=new Uint8Array(22),c=new DataView(s.buffer);return H(c,0,4,101010256),H(c,8,2,e.length),H(c,10,2,e.length),H(c,12,4,o),H(c,16,4,a),new Blob([...r,...i,s],{type:`application/zip`})}function hr(e){return e.replaceAll(`\xA0`,` `).trim()}function gr(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a+=1){let o=e[a],s=e[a+1];o===`"`&&i&&s===`"`?(r+=`"`,a+=1):o===`"`?i=!i:o===`,`&&!i?(n.push(hr(r)),r=``):(o===`
`||o===`\r`)&&!i?(o===`\r`&&s===`
`&&(a+=1),n.push(hr(r)),n.some(Boolean)&&t.push(n),n=[],r=``):r+=o}return n.push(hr(r)),n.some(Boolean)&&t.push(n),t}function _r(e){return gr(e).filter(e=>e.some(Boolean)).filter(e=>!e.join(` `).toLowerCase().includes(`tes award number`)).map(e=>({no:e[0]??``,tesAwardNumber:e[1]??``,studentId:e[2]??``,lastName:e[3]??``,firstName:e[4]??``,middleInitial:e[5]??``,batchId:e[6]??``,status:e[7]??``,semester:e[8]??``,schoolYear:e[9]??``})).filter(e=>e.no&&e.tesAwardNumber&&e.studentId&&e.lastName&&e.firstName&&e.batchId&&e.status&&e.semester&&e.schoolYear)}function vr({onLogout:e}){let[t,n]=(0,z.useState)(0),[r,i]=(0,z.useState)(!1),[a,o]=(0,z.useState)(!1),[s,c]=(0,z.useState)(!1),[l,u]=(0,z.useState)(null),[d,f]=(0,z.useState)(null),[p,m]=(0,z.useState)({email:``,phoneNumber:``}),[h,g]=(0,z.useState)(``),[_,v]=(0,z.useState)(!1),[y,b]=(0,z.useState)(!1),[x,S]=(0,z.useState)(1),[C,w]=(0,z.useState)(``),[ee,T]=(0,z.useState)(!1),[te,E]=(0,z.useState)(!1),[ne,re]=(0,z.useState)(!1),[ie,ae]=(0,z.useState)(!1),[D,O]=(0,z.useState)(``),[k,oe]=(0,z.useState)(!1),[se,ce]=(0,z.useState)(!1),[le,A]=(0,z.useState)(!1),[j,ue]=(0,z.useState)(!1),[de,fe]=(0,z.useState)(``),[M,pe]=(0,z.useState)(null),[me,he]=(0,z.useState)(!1),[N,ge]=(0,z.useState)(!1),[_e,ve]=(0,z.useState)(!1),[ye,be]=(0,z.useState)(0),[xe,Se]=(0,z.useState)(null),[Ce,we]=(0,z.useState)(null),[Te,Ee]=(0,z.useState)(null),[De,P]=(0,z.useState)(``),[Oe,ke]=(0,z.useState)(``),[Ae,F]=(0,z.useState)(!1),[je,Me]=(0,z.useState)(!1),[Ne,Pe]=(0,z.useState)(!1),[Fe,Ie]=(0,z.useState)(!1),[Le,Re]=(0,z.useState)(1),[ze,Be]=(0,z.useState)(1),[Ve,He]=(0,z.useState)([]),[Ue,We]=(0,z.useState)(null),[Ge,Ke]=(0,z.useState)(null),[qe,I]=(0,z.useState)(``),[Je,Ye]=(0,z.useState)(!1),[Xe,Ze]=(0,z.useState)(``),[Qe,$e]=(0,z.useState)(``),[et,tt]=(0,z.useState)(1),[nt,rt]=(0,z.useState)(1),[it,at]=(0,z.useState)(1),[ot,st]=(0,z.useState)(1),[ct,lt]=(0,z.useState)(``),[ut,dt]=(0,z.useState)(!1),[ft,pt]=(0,z.useState)(!1),[mt,ht]=(0,z.useState)(!1),[gt,_t]=(0,z.useState)(0),[vt,yt]=(0,z.useState)(null),[bt,L]=(0,z.useState)(1),[xt,St]=(0,z.useState)(1),Ct=pn(B.quickActions.list),wt=pn(B.activityLogs.list),Tt=pn(B.allinfo.list),Et=pn(B.applicants.list),Dt=pn(B.applicantPortal.get),Ot=pn(B.adminAuth.listStudentAccounts),kt=mn(B.applicantPortal.setReceivingApplicants),At=mn(B.allinfo.bulkCreate),jt=mn(B.allinfo.update),Mt=mn(B.allinfo.deleteMany),Nt=mn(B.quickActions.clearAll),Pt=mn(B.activityLogs.clearAll),Ft=hn(B.allinfo.deleteSchoolIdFilesByBatch),It=hn(B.applicants.deleteAllByCourse),Lt=mn(B.adminAuth.updateStudentAccount),Rt=mn(B.adminAuth.deleteStudentAccount),zt=r||a||s||!!l||!!d||ee||te||ne||ie||!!D||ut||mt||ft||!!vt||k||se||le||!!Ce||j||!!de||!!M||me||N||_e||!!xe||!!Ue,Bt=(0,z.useMemo)(()=>Tt??[],[Tt]),Vt=Ct??[],Ht=wt??[],Ut=(0,z.useMemo)(()=>Et??[],[Et]),Wt=(0,z.useMemo)(()=>Ot??[],[Ot]),Gt=Dt?.applicationYear,Kt=String(Gt??new Date().getFullYear()),qt=(0,z.useMemo)(()=>{let e=new Date().getFullYear(),t=new Set([String(e-1),String(e),String(e+1),String(e+2),String(e+3),String(e+4),String(e+5)]);return Gt&&t.add(String(Gt)),Ut.forEach(e=>{let n=ar(e);n&&t.add(n)}),Array.from(t).sort()},[Ut,Gt]),Jt=Math.max(1,Math.ceil(qt.length/Wn)),R=Math.min(xt,Jt),Yt=(R-1)*Wn,Xt=qt.slice(Yt,Yt+Wn),Zt=or(R,Jt),Qt=qt.length===0?0:Yt+1,$t=Yt+Xt.length,en=(0,z.useMemo)(()=>Array.from(new Set(Bt.map(e=>String(e.batchId??``).trim()).filter(Boolean))).sort(),[Bt]),tn=(0,z.useMemo)(()=>en.map(e=>{let t=Bt.filter(t=>String(t.batchId??``).trim()===e),n=new Set(t.map(e=>String(e.studentId??``).trim().toLowerCase()));return{accountCount:Wt.filter(e=>n.has(String(e.schoolId??``).trim().toLowerCase())).length,batchId:e,recordCount:t.length}}),[en,Bt,Wt]),nn=(0,z.useMemo)(()=>Kn.map(e=>({applicantCount:Ut.filter(t=>ar(t)===Kt&&ir(t).toLowerCase()===e.toLowerCase()).length,course:e})),[Kt,Ut]),rn=(0,z.useMemo)(()=>{let e=D.trim().toLowerCase();return e?Ut.filter(t=>ar(t)===Kt&&ir(t).toLowerCase()===e):[]},[Kt,Ut,D]),an=(0,z.useMemo)(()=>{let e=ct.trim().toLowerCase();return e?rn.filter(t=>{let n=[t.firstName,t.middleName,t.lastName,t.extensionName].filter(Boolean).join(` `);return[t.studentId,n,t.gender,t.birthDate,t.year,t.address,t.mobileNumber,t.emailAddress,t.status,t.psaFileName,t.schoolIdFileName,t.corFileName,t.pwdIdFileName,t.fourPsFileName,Zn(t.submittedAt)].map(e=>String(e??``).toLowerCase()).join(` `).includes(e)}):rn},[ct,rn]),on=Math.max(1,Math.ceil(an.length/Un)),sn=Math.min(bt,on),cn=(sn-1)*Un,ln=an.slice(cn,cn+Un),un=or(sn,on),dn=an.length===0?0:cn+1,fn=cn+ln.length,gn=(0,z.useMemo)(()=>{let e=Xe.trim().toLowerCase(),t=Qe.trim().toLowerCase();return Bt.filter(n=>{let r=[n.no,n.tesAwardNumber,n.studentId,n.lastName,n.firstName,n.middleInitial,n.batchId,n.status,n.semester,n.schoolYear].map(e=>String(e??``).toLowerCase()).join(` `),i=e?r.includes(e):!0,a=t?String(n.batchId??``).trim().toLowerCase()===t:!0;return i&&a})},[Bt,Xe,Qe]),_n=Math.max(1,Math.ceil(gn.length/In)),vn=Math.min(Le,_n),yn=(vn-1)*In,bn=or(vn,_n),xn=gn.slice(yn,yn+In),Sn=gn.filter(e=>e.frontIdUrl),Cn=(0,z.useMemo)(()=>Array.from(new Set(Sn.map(e=>String(e.schoolYear??``).trim()).filter(Boolean))).sort((e,t)=>t.localeCompare(e)),[Sn]),wn=(0,z.useMemo)(()=>Cn.map(e=>({fileCount:Sn.filter(t=>String(t.schoolYear??``).trim()===e).length,schoolYear:e})),[Sn,Cn]),Tn=(0,z.useMemo)(()=>{if(!de)return[];let e=new Map;return Sn.forEach(t=>{if(String(t.schoolYear??``).trim()!==de)return;let n=String(t.batchId??``).trim();if(!n)return;let r=e.get(n)??{batchId:n,fileCount:0};r.fileCount+=1,e.set(n,r)}),Array.from(e.values()).sort((e,t)=>e.batchId.localeCompare(t.batchId))},[Sn,de]),En=gn.length===0?0:yn+1,Dn=yn+xn.length,On=Math.max(1,Math.ceil(Vt.length/Ln)),kn=Math.min(ze,On),An=(kn-1)*Ln,jn=or(kn,On),Mn=Vt.slice(An,An+Ln),Nn=Vt.length===0?0:An+1,Fn=An+Mn.length,Gn=(0,z.useMemo)(()=>{let e=C.trim().toLowerCase();return e?Wt.filter(t=>[t.schoolId,t.email,t.phoneNumber,t.facebookProfileUrl].map(e=>String(e??``).toLowerCase()).join(` `).includes(e)):Wt},[Wt,C]),Qn=Math.max(1,Math.ceil(Gn.length/Rn)),sr=Math.min(x,Qn),lr=(sr-1)*Rn,ur=Gn.slice(lr,lr+Rn),dr=or(sr,Qn),fr=Gn.length===0?0:lr+1,pr=lr+ur.length,H=Math.max(1,Math.ceil(Ht.length/zn)),hr=Math.min(et,H),gr=(hr-1)*zn,vr=Ht.slice(gr,gr+zn),br=Ht.length===0?0:gr+1,xr=gr+vr.length,Sr=Math.max(1,Math.ceil(tn.length/Bn)),Cr=Math.min(nt,Sr),wr=(Cr-1)*Bn,Tr=tn.slice(wr,wr+Bn),Er=tn.length===0?0:wr+1,Dr=wr+Tr.length,Or=Math.max(1,Math.ceil(wn.length/Vn)),kr=Math.min(it,Or),Ar=(kr-1)*Vn,jr=wn.slice(Ar,Ar+Vn),Mr=wn.length===0?0:Ar+1,Nr=Ar+jr.length,Pr=Math.max(1,Math.ceil(Tn.length/Hn)),Fr=Math.min(ot,Pr),Ir=(Fr-1)*Hn,Lr=Tn.slice(Ir,Ir+Hn),Rr=Tn.length===0?0:Ir+1,zr=Ir+Lr.length,Br=e=>{Re(Math.min(Math.max(e,1),_n))},Vr=e=>{Be(Math.min(Math.max(e,1),On))},Hr=e=>{tt(Math.min(Math.max(e,1),H))},Ur=e=>{rt(Math.min(Math.max(e,1),Sr))},Wr=e=>{at(Math.min(Math.max(e,1),Or))},Gr=e=>{st(Math.min(Math.max(e,1),Pr))},Kr=e=>{L(Math.min(Math.max(e,1),on))},qr=e=>{St(Math.min(Math.max(e,1),Jt))},Jr=e=>{O(e),lt(``),L(1)},Yr=()=>{ft||mt||(O(``),lt(``),L(1),dt(!1))},Xr=e=>{lt(e.target.value),L(1)},Zr=e=>{fe(e),st(1)},Qr=()=>{N||_e||(ue(!1),fe(``),pe(null),he(!1),st(1))},$r=(e,t)=>{pe({batchId:e,fileCount:t,schoolYear:de})},ei=()=>{N||_e||(pe(null),he(!1))},ti=()=>{Ze(``),$e(``),Re(1)},ni=e=>{Ze(e.target.value),Re(1)},ri=e=>{$e(e.target.value),Re(1)},ii=async(e,t)=>{let n=String(e??``).trim(),r=String(t??``).trim(),i=Sn.filter(e=>String(e.schoolYear??``).trim()===n&&String(e.batchId??``).trim()===r).sort(nr);if(i.length!==0){ge(!0),be(0);try{let e=[];for(let[t,n]of i.entries()){try{let r=await cr(n,t);e.push(r)}catch(e){console.warn(e)}be(Math.min(90,Math.round((t+1)/i.length*90)))}if(e.length===0)throw Error(`No School ID files could be downloaded for this batch.`);let t=mr(e);be(96);let a=URL.createObjectURL(t),o=document.createElement(`a`),s=tr(n,`school-year`),c=tr(r,`batch`);o.href=a,o.download=`school-id-files-${s}-batch-${c}.zip`,o.rel=`noreferrer`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a),be(100),await new Promise(e=>window.setTimeout(e,350)),ue(!1),fe(``),pe(null),st(1),Se({batchId:r,count:e.length,schoolYear:n,type:`download`})}catch(e){window.alert(e instanceof Error?e.message:`Unable to download School ID files.`)}finally{ge(!1),be(0)}}},ai=async()=>{if(M){ve(!0);try{let e=await Ft({batchId:M.batchId,schoolYear:M.schoolYear});he(!1),pe(null),fe(``),ue(!1),st(1),Se({batchId:M.batchId,count:e.deleted,schoolYear:M.schoolYear,type:`delete`})}catch(e){window.alert(e instanceof Error?e.message:`Unable to delete School ID files.`)}finally{ve(!1)}}},oi=e=>{if(Ot===void 0){window.alert(`Please wait while student account data is loading.`);return}let t=String(e??``).trim(),n=Bt.filter(e=>String(e.batchId??``).trim()===t);if(n.length===0){window.alert(`No records found for this batch.`);return}let r=new Map(Wt.map(e=>[String(e.schoolId??``).trim().toLowerCase(),e])),i=[[`Batch No.`,`Student ID`,`TES Award Number`,`Last Name`,`First Name`,`MI.`,`School Year`,`Status`,`Email Account`,`Phone No.`,`Current Address`,`Account Status`],...n.map(e=>{let t=r.get(String(e.studentId??``).trim().toLowerCase());return[e.batchId??``,e.studentId??``,e.tesAwardNumber??``,e.lastName??``,e.firstName??``,e.middleInitial??``,e.schoolYear??``,e.status??``,t?.email??``,t?.phoneNumber??``,t?.currentAddress??``,t?.status??`No student account`]})];$n(`batch-info-${tr(t,`batch`)}.csv`,i),ce(!1)},si=async e=>{if(Et===void 0){window.alert(`Please wait while applicant information is loading.`);return}let t=String(e??``).trim(),n=Ut.filter(e=>ar(e)===Kt&&ir(e).toLowerCase()===t.toLowerCase());if(n.length===0){window.alert(`No applicants are available for this course.`);return}ht(!0),_t(8),await new Promise(e=>window.setTimeout(e,120));let r=[`Application Year,Course,Student ID,Last Name,First Name,Ext Name,Middle Name,Gender,Birth Date,Year,Father Last Name,Father First Name,Father Middle Name,Mother Last Name,Mother First Name,Mother Middle Name,Address,Zip Code,PWD ID,PWD ID PDF,4Ps ID PDF,COR / Study Load PDF,Mobile No.,Email Address,Status,Submitted At`.split(`,`),...n.map(e=>[ar(e),ir(e)||t,e.studentId??``,e.lastName??``,e.firstName??``,e.extensionName??``,e.middleName??``,e.gender??``,e.birthDate??``,e.year??``,e.fatherLastName??``,e.fatherFirstName??``,e.fatherMiddleName??``,e.motherLastName??``,e.motherFirstName??``,e.motherMiddleName??``,e.address??``,e.zipCode??``,e.pwdId??``,e.pwdIdFileName??``,e.fourPsFileName??``,e.corFileName??``,e.mobileNumber??``,e.emailAddress??``,e.status??``,Zn(e.submittedAt)])];_t(72),await new Promise(e=>window.setTimeout(e,120));let i=tr(t,`course`);$n(`unifast-applicants-${tr(Kt,`application-year`)}-${i}.csv`,r),_t(100),await new Promise(e=>window.setTimeout(e,350)),ht(!1),_t(0),yt({count:n.length,course:t,type:`download`,year:Kt})},ci=async()=>{if(D){pt(!0);try{let e=await It({applicationYear:Kt,course:D});dt(!1),yt({count:e.deleted,course:D,filesDeleted:e.filesDeleted,type:`delete`,year:Kt}),O(``),lt(``),L(1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to delete course applicants.`)}finally{pt(!1)}}},li=()=>{if(Ct===void 0){window.alert(`Please wait while student requests are loading.`);return}if(Vt.length===0){window.alert(`No student requests are available to export.`);return}let e=Zn(Date.now()),t=[[`No.`,`Student ID`,`Last Name`,`First Name`,`MI`,`Email Account`,`Question / Request`,`Source`,`Status`,`Submitted At`,`Exported At`],...Vt.map((t,n)=>[n+1,t.studentId??``,t.lastName??``,t.firstName??``,t.middleInitial??``,t.email??``,t.question??``,t.source??``,t.status??``,Zn(t.submittedAt),e])];$n(`student-requests-responses-${new Date().toISOString().slice(0,10)}.csv`,t)},ui=()=>{Ne||Vt.length===0||T(!0)},di=async()=>{if(!(Ne||Vt.length===0)){Pe(!0);try{await Nt({}),Be(1),T(!1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to clear Quick Action messages.`)}finally{Pe(!1)}}},fi=async()=>{if(!(Fe||Ht.length===0)&&window.confirm(`Clear all ${Ht.length} visible activity logs? This permanently removes all stored logs and cannot be undone.`)){Ie(!0);try{await Pt({}),tt(1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to clear activity logs.`)}finally{Ie(!1)}}},pi=async(e,t)=>{try{let n=await kt({isReceivingApplicants:e,...t?{applicationYear:t}:{}});n.success||window.alert(n.message||`Unable to update applicant portal status.`)}catch(e){window.alert(e instanceof Error?e.message:`Unable to update applicant portal status.`)}},mi=async e=>{await pi(!0,e),ae(!1),St(1)},hi=()=>{E(!1),re(!1),ae(!1),St(1),O(``),lt(``),L(1)},gi=()=>{rt(1),ke(``),A(!0)},_i=()=>{je||(A(!1),we(null))},vi=()=>{Be(1),o(!0)},yi=()=>{Ee(null),P(``),ke(``),F(!1),oe(!0)},bi=()=>{Ae||(oe(!1),Ee(null),P(``),F(!1))},xi=()=>{Je||(We(null),Ke(null),I(``))},Si=e=>{We(e),Ke({no:e.no??``,tesAwardNumber:e.tesAwardNumber??``,studentId:e.studentId??``,lastName:e.lastName??``,firstName:e.firstName??``,middleInitial:e.middleInitial??``,batchId:e.batchId??``,status:e.status??``,semester:e.semester??``,schoolYear:e.schoolYear??``}),I(``)},Ci=e=>t=>{I(``),Ke(n=>({...n,[e]:t.target.value}))},wi=async e=>{if(e.preventDefault(),!(!Ue||!Ge)){if([`no`,`tesAwardNumber`,`studentId`,`lastName`,`firstName`,`batchId`,`status`,`semester`,`schoolYear`].some(e=>!String(Ge[e]??``).trim())){I(`Please complete all required fields before saving.`);return}Ye(!0),I(`Saving changes...`);try{await jt({id:Ue._id,...Ge}),I(`Record updated successfully.`),We(null),Ke(null)}catch(e){I(e instanceof Error?e.message:`Unable to update record.`)}finally{Ye(!1)}}},Ti=e=>{ke(``),He(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},Ei=async()=>{if(Ve.length===0){ke(`Please check at least one record before deleting.`);return}if(window.confirm(`Delete ${Ve.length} checked record${Ve.length===1?``:`s`}?`)){Me(!0),ke(`Deleting checked record...`);try{let e=await Mt({ids:Ve});He([]),ke(`${e?.deleted??Ve.length} record${(e?.deleted??Ve.length)===1?``:`s`} deleted successfully.`)}catch(e){ke(e instanceof Error?e.message:`Unable to delete records.`)}finally{Me(!1)}}},Di=async()=>{if(!Ce)return;let e=Ce.batchId,t=Bt.filter(t=>String(t.batchId??``).trim()===e).map(e=>e._id);if(t.length===0){ke(`No records found for this batch.`),we(null);return}Me(!0),ke(`Deleting batch ${e}...`);try{let n=await Mt({ids:t});He(e=>e.filter(e=>!t.includes(e))),ke(`${n?.deleted??t.length} record${(n?.deleted??t.length)===1?``:`s`} deleted from batch ${e}.`),we(null),A(!1),Re(1)}catch(e){ke(e instanceof Error?e.message:`Unable to delete batch records.`)}finally{Me(!1)}},Oi=e=>{let t=e.target.files?.[0]??null;Ee(t),P(t?`${t.name} is ready to upload.`:``)},ki=async e=>{if(e.preventDefault(),!Te){P(`Select a CSV file before uploading.`);return}if(!Te.name.toLowerCase().endsWith(`.csv`)){P(`Please upload the downloaded CSV template file.`);return}F(!0),P(`Reading file...`);try{let e=_r(await Te.text());if(e.length===0){P(`No valid rows found. Use the CSV template headers and add record values.`);return}let t=await At({records:e});P(`${t.inserted} record${t.inserted===1?``:`s`} saved to allinfo.`),Ee(null)}catch(e){P(e instanceof Error?e.message:`Unable to upload records.`)}finally{F(!1)}},Ai=()=>{S(1),g(``),c(!0)},U=e=>{u(e),m({email:e.email??``,phoneNumber:e.phoneNumber??``}),g(``)},ji=e=>{let{name:t,value:n}=e.target;m(e=>({...e,[t]:n}))};return(0,z.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;n(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,z.useEffect)(()=>{if(!zt)return;let e=e=>{if(e.key===`Escape`){if(ee&&!Ne){T(!1);return}i(!1),o(!1),c(!1),u(null),f(null),T(!1),E(!1),re(!1),ae(!1),St(1),O(``),lt(``),L(1),oe(!1),ce(!1),A(!1),we(null),ue(!1),fe(``),st(1),Ee(null),P(``),F(!1),We(null)}};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[zt,Ne,ee]),(0,V.jsxs)(`div`,{className:`admin-page`,children:[(0,V.jsx)(`style`,{children:yr}),(0,V.jsxs)(`header`,{className:`admin-topbar`,children:[(0,V.jsxs)(`div`,{className:`brand-lockup`,children:[(0,V.jsx)(`div`,{className:`brand-mark`,children:(0,V.jsx)(`img`,{alt:`IBACMI`,className:`brand-mark__image`,src:Pn})}),(0,V.jsxs)(`div`,{className:`brand-copy`,children:[(0,V.jsx)(`p`,{className:`brand-title`,children:`IBACMI`}),(0,V.jsx)(`p`,{className:`brand-subtitle`,children:`Scholarship Office`})]})]}),(0,V.jsxs)(`div`,{className:`header-actions`,children:[(0,V.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:()=>{tt(1),i(!0)},type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`history`}),`Logs`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:()=>E(!0),type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`folder_open`}),`UNIFAST PORTAL`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:Ai,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`manage_accounts`}),`User Management`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:vi,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`task_alt`}),`Quick Actions`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--admin`,onClick:e,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`logout`}),`Logout`]})]})]}),(0,V.jsx)(`main`,{className:`admin-main`,children:(0,V.jsxs)(`div`,{className:`admin-container`,children:[(0,V.jsxs)(`section`,{className:`admin-heading`,children:[(0,V.jsxs)(`div`,{className:`admin-heading__copy`,children:[(0,V.jsx)(`span`,{className:`admin-eyebrow`,children:`Tertiary Education Subsidy and Tulong Dunong Program`}),(0,V.jsx)(`h1`,{children:`Grantee Management`})]}),(0,V.jsxs)(`div`,{className:`admin-heading__actions`,children:[(0,V.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:en.length===0,onClick:()=>{rt(1),ce(!0)},title:en.length===0?`No batches available to export`:`Choose a batch to export student account info`,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`table_view`}),`Export to CSV Batch Info`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:Sn.length===0,onClick:()=>{at(1),ue(!0)},title:Sn.length===0?`No School ID files available to download`:`Choose a School Year to download School ID files`,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download School ID File`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--primary`,onClick:yi,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`add`}),`Add New Record`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:en.length===0,onClick:gi,title:en.length===0?`No batches available to delete`:`Choose a batch to delete`,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`}),`Delete Batch`]})]})]}),(0,V.jsxs)(`section`,{className:`admin-stats-grid`,"aria-label":`Grantee summary`,children:[(0,V.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,V.jsx)(`span`,{children:`Total Records`}),(0,V.jsx)(`strong`,{children:Bt.length})]}),(0,V.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,V.jsx)(`span`,{children:`Filtered Results`}),(0,V.jsx)(`strong`,{children:gn.length})]}),(0,V.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,V.jsx)(`span`,{children:`Checked Records`}),(0,V.jsx)(`strong`,{children:Ve.length})]}),(0,V.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,V.jsx)(`span`,{children:`Student Requests`}),(0,V.jsx)(`strong`,{children:Vt.length})]})]}),(0,V.jsxs)(`section`,{className:`admin-filter-panel`,"aria-label":`Grantee filters`,children:[(0,V.jsxs)(`div`,{className:`admin-search-field`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,V.jsx)(`input`,{placeholder:`Search by Student ID, award number, status, semester...`,type:`text`,value:Xe,onChange:ni})]}),(0,V.jsxs)(`select`,{value:Qe,onChange:ri,children:[(0,V.jsx)(`option`,{value:``,children:`All Batches`}),en.map(e=>(0,V.jsx)(`option`,{value:e,children:e},e))]}),(0,V.jsx)(`button`,{className:`admin-filter-button`,type:`button`,"aria-label":`Reset filters`,title:`Reset filters`,onClick:ti,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`refresh`})})]}),(0,V.jsxs)(`section`,{className:`admin-table-card`,"aria-label":`TDP grantee records`,children:[(0,V.jsx)(`div`,{className:`admin-table-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h2`,{children:`Grantee Records`}),(0,V.jsx)(`p`,{children:`Review, check, edit, or delete selected records.`})]})}),(0,V.jsx)(`div`,{className:`admin-table-scroll`,children:(0,V.jsxs)(`table`,{children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`No.`}),(0,V.jsx)(`th`,{children:`TES Award Number`}),(0,V.jsx)(`th`,{children:`Student ID`}),(0,V.jsx)(`th`,{children:`Last Name`}),(0,V.jsx)(`th`,{children:`First Name`}),(0,V.jsx)(`th`,{children:`MI.`}),(0,V.jsx)(`th`,{children:`Batch No.`}),(0,V.jsx)(`th`,{children:`Status`}),(0,V.jsx)(`th`,{children:`Semester`}),(0,V.jsx)(`th`,{children:`School Year`}),(0,V.jsx)(`th`,{children:`School ID File`}),(0,V.jsx)(`th`,{children:`Actions`})]})}),(0,V.jsxs)(`tbody`,{children:[Tt===void 0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`Loading grantee records...`})}),Tt?.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No grantee records yet. Upload a CSV file to add records.`})}),Tt&&Tt.length>0&&gn.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No matching record found.`})}),xn.map((e,t)=>(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{"data-label":`No.`,children:yn+t+1}),(0,V.jsx)(`td`,{className:`admin-award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,V.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,V.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`—`}),(0,V.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`—`}),(0,V.jsx)(`td`,{"data-label":`MI.`,children:e.middleInitial||`—`}),(0,V.jsx)(`td`,{className:`admin-batch-cell`,"data-label":`Batch No.`,children:e.batchId}),(0,V.jsx)(`td`,{"data-label":`Status`,children:(0,V.jsx)(Yn,{status:e.status,tone:Xn(e.status)})}),(0,V.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,V.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`}),(0,V.jsx)(`td`,{"data-label":`School ID File`,children:e.frontIdUrl?(0,V.jsx)(`a`,{className:`admin-file-link`,href:e.frontIdUrl,rel:`noreferrer`,target:`_blank`,children:`View file`}):(0,V.jsx)(`span`,{className:`admin-file-empty`,children:`No file`})}),(0,V.jsx)(`td`,{"data-label":`Actions`,children:(0,V.jsxs)(`div`,{className:`admin-row-actions`,children:[(0,V.jsx)(`button`,{className:`admin-edit-button`,type:`button`,onClick:()=>Si(e),children:`Edit`}),(0,V.jsxs)(`label`,{className:`admin-checkbox-control`,children:[(0,V.jsx)(`input`,{type:`checkbox`,checked:Ve.includes(e._id),onChange:()=>Ti(e._id)}),(0,V.jsx)(`span`,{children:`Check`})]}),(0,V.jsx)(`button`,{className:`admin-delete-button`,type:`button`,disabled:je||!Ve.includes(e._id),onClick:Ei,children:`Delete`})]})})]},e._id))]})]})}),(0,V.jsxs)(`div`,{className:`admin-pagination`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:En}),` to `,(0,V.jsx)(`strong`,{children:Dn}),` of`,` `,(0,V.jsx)(`strong`,{children:gn.length}),` results`]}),Oe&&(0,V.jsx)(`p`,{className:`admin-delete-message`,children:Oe})]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{type:`button`,disabled:vn===1||gn.length===0,"aria-label":`Previous page`,onClick:()=>Br(vn-1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),bn.map(e=>{if(typeof e==`string`)return(0,V.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e);let t=e;return(0,V.jsx)(`button`,{"aria-current":vn===t?`page`:void 0,className:vn===t?`admin-page-button--active`:void 0,disabled:gn.length===0,onClick:()=>Br(t),type:`button`,children:t},t)}),(0,V.jsx)(`button`,{type:`button`,disabled:vn===_n||gn.length===0,"aria-label":`Next page`,onClick:()=>Br(vn+1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]})}),r&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-logs-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close logs modal`,className:`admin-modal-backdrop`,onClick:()=>i(!1),type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Activity Logs`}),(0,V.jsx)(`h2`,{id:`admin-logs-title`,children:`System Activity Records`}),(0,V.jsx)(`p`,{children:`Review recent uploads, edits, deletes, student updates, and page actions.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close logs`,className:`admin-modal-close`,onClick:()=>i(!1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-logs-toolbar`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Log Management`}),(0,V.jsx)(`strong`,{children:`Permanently remove all system activity records.`})]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:wt===void 0||Ht.length===0||Fe,onClick:fi,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_sweep`}),Fe?`Clearing...`:`Clear All Logs`]})]}),(0,V.jsx)(`div`,{className:`admin-logs-table-wrap`,children:(0,V.jsxs)(`table`,{className:`admin-logs-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`Date & Time`}),(0,V.jsx)(`th`,{children:`Action`}),(0,V.jsx)(`th`,{children:`Actor`}),(0,V.jsx)(`th`,{children:`Target`}),(0,V.jsx)(`th`,{children:`Summary`})]})}),(0,V.jsxs)(`tbody`,{children:[wt===void 0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`Loading activity logs...`})}),wt&&Ht.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`No activity logs recorded yet.`})}),vr.map(e=>(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{"data-label":`Date & Time`,children:qn(e.createdAt)}),(0,V.jsx)(`td`,{"data-label":`Action`,children:(0,V.jsx)(`span`,{className:`admin-log-action`,children:e.action})}),(0,V.jsxs)(`td`,{"data-label":`Actor`,children:[(0,V.jsx)(`strong`,{children:e.actorName||e.actorId||e.actorRole}),(0,V.jsx)(`span`,{children:e.actorRole})]}),(0,V.jsxs)(`td`,{"data-label":`Target`,children:[(0,V.jsx)(`strong`,{children:e.targetLabel||e.targetType}),(0,V.jsx)(`span`,{children:e.targetType})]}),(0,V.jsx)(`td`,{"data-label":`Summary`,children:e.summary})]},e._id))]})]})}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-logs-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:br}),` to `,(0,V.jsx)(`strong`,{children:xr}),` of`,` `,(0,V.jsx)(`strong`,{children:Ht.length}),` logs`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{type:`button`,disabled:hr===1||Ht.length===0,"aria-label":`Previous logs page`,onClick:()=>Hr(hr-1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:H},(e,t)=>{let n=t+1;return(0,V.jsx)(`button`,{className:hr===n?`admin-page-button--active`:void 0,disabled:Ht.length===0,onClick:()=>Hr(n),type:`button`,children:n},n)}),(0,V.jsx)(`button`,{type:`button`,disabled:hr===H||Ht.length===0,"aria-label":`Next logs page`,onClick:()=>Hr(hr+1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),se&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-batch-export-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close batch export modal`,className:`admin-modal-backdrop`,onClick:()=>ce(!1),type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Batch CSV Export`}),(0,V.jsx)(`h2`,{id:`admin-batch-export-title`,children:`Choose Batch`}),(0,V.jsx)(`p`,{children:`Export student account information for a specific batch using allinfo Student IDs.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close batch export`,className:`admin-modal-close`,onClick:()=>ce(!1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`div`,{className:`admin-school-year-downloads`,children:Tr.map(({accountCount:e,batchId:t,recordCount:n})=>(0,V.jsxs)(`button`,{className:`admin-school-year-button`,disabled:Ot===void 0,onClick:()=>oi(t),type:`button`,children:[(0,V.jsx)(`span`,{children:t}),(0,V.jsx)(`strong`,{children:Ot===void 0?`Loading accounts...`:`${n} records / ${e} accounts`})]},t))}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-batch-export-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Er}),`-`,(0,V.jsx)(`strong`,{children:Dr}),` `,`of `,(0,V.jsx)(`strong`,{children:tn.length}),` batches`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{disabled:Cr===1,onClick:()=>Ur(Cr-1),type:`button`,"aria-label":`Previous batch export page`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Sr},(e,t)=>{let n=t+1;return(0,V.jsx)(`button`,{"aria-current":Cr===n?`page`:void 0,className:Cr===n?`admin-page-button--active`:void 0,onClick:()=>Ur(n),type:`button`,children:n},n)}),(0,V.jsx)(`button`,{disabled:Cr===Sr,onClick:()=>Ur(Cr+1),type:`button`,"aria-label":`Next batch export page`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>ce(!1),type:`button`,children:`Cancel`})})]})]}),le&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close batch delete modal`,className:`admin-modal-backdrop`,onClick:_i,type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Delete Batch`}),(0,V.jsx)(`h2`,{id:`admin-batch-delete-title`,children:`Choose Batch`}),(0,V.jsx)(`p`,{children:`Select a batch to delete all information records under that batch.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close batch delete`,className:`admin-modal-close`,disabled:je,onClick:_i,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`div`,{className:`admin-school-year-downloads`,children:Tr.map(({batchId:e,recordCount:t})=>(0,V.jsxs)(`button`,{className:`admin-school-year-button admin-school-year-button--danger`,disabled:je,onClick:()=>we({batchId:e,recordCount:t}),type:`button`,children:[(0,V.jsx)(`span`,{children:e}),(0,V.jsxs)(`strong`,{children:[t,` `,t===1?`record`:`records`]})]},e))}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-batch-export-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Er}),`-`,(0,V.jsx)(`strong`,{children:Dr}),` `,`of `,(0,V.jsx)(`strong`,{children:tn.length}),` batches`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{"aria-label":`Previous batch delete page`,disabled:Cr===1||je,onClick:()=>Ur(Cr-1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Sr},(e,t)=>{let n=t+1;return(0,V.jsx)(`button`,{"aria-current":Cr===n?`page`:void 0,className:Cr===n?`admin-page-button--active`:void 0,disabled:je,onClick:()=>Ur(n),type:`button`,children:n},n)}),(0,V.jsx)(`button`,{"aria-label":`Next batch delete page`,disabled:Cr===Sr||je,onClick:()=>Ur(Cr+1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:je,onClick:_i,type:`button`,children:`Cancel`})})]})]}),Ce&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-backdrop`,onClick:()=>{je||we(null)},type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-modal-card--applicant-years`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Confirm Delete`}),(0,V.jsx)(`h2`,{id:`admin-batch-delete-confirm-title`,children:`Delete this batch information?`}),(0,V.jsx)(`p`,{children:`Are you sure you want to delete this batch information?`})]}),(0,V.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-close`,disabled:je,onClick:()=>we(null),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-confirm-body`,children:[(0,V.jsx)(`strong`,{children:Ce.batchId}),(0,V.jsxs)(`p`,{children:[`This will permanently delete `,Ce.recordCount,` `,Ce.recordCount===1?`record`:`records`,` from this batch.`]})]}),(0,V.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:je,onClick:()=>we(null),type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:je,onClick:Di,type:`button`,children:je?`Deleting...`:`Delete Batch`})]})]})]}),te&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-unifast-open-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-backdrop`,onClick:hi,type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`UNIFAST Portal`}),(0,V.jsx)(`h2`,{id:`admin-unifast-open-title`,children:`Open the portal?`}),(0,V.jsx)(`p`,{children:`Do you want to open the portal for receiving applicants information?`})]}),(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-close`,onClick:hi,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`div`,{className:`admin-confirm-body`,children:(0,V.jsx)(`p`,{children:`Select Yes to view applicants by course and prepare a course download.`})}),(0,V.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:hi,type:`button`,children:`No`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>{E(!1),re(!0)},type:`button`,children:`Yes`})]})]})]}),ne&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-unifast-courses-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-backdrop`,onClick:hi,type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receiving Applicants Information`}),(0,V.jsx)(`h2`,{id:`admin-unifast-courses-title`,children:`Choose Course`}),(0,V.jsxs)(`p`,{children:[`Select a specific course to download applicant information for `,Kt,`.`]})]}),(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-close`,onClick:hi,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-applicant-portal-controls`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Landing Portal Status`}),(0,V.jsx)(`strong`,{children:Dt?.isReceivingApplicants?`Receiving ${Kt} applicants`:`Closed for applicants`})]}),(0,V.jsxs)(`div`,{className:`admin-applicant-portal-actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:Dt===void 0||Dt?.isReceivingApplicants,onClick:()=>{St(1),ae(!0)},type:`button`,children:`Receive Applicants`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Dt===void 0||!Dt?.isReceivingApplicants,onClick:()=>pi(!1),type:`button`,children:`Close Applicants`})]})]}),(0,V.jsx)(`div`,{className:`admin-school-year-downloads admin-course-downloads`,children:nn.map(({applicantCount:e,course:t})=>(0,V.jsxs)(`button`,{className:`admin-school-year-button`,disabled:Et===void 0,onClick:()=>Jr(t),type:`button`,children:[(0,V.jsx)(`span`,{children:t}),(0,V.jsx)(`strong`,{children:Et===void 0?`Loading...`:`${e} ${e===1?`applicant`:`applicants`}`})]},t))}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:hi,type:`button`,children:`Cancel`})})]})]}),ie&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-applicant-year-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-backdrop`,onClick:()=>{ae(!1),St(1)},type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receive Applicants`}),(0,V.jsx)(`h2`,{id:`admin-applicant-year-title`,children:`Choose Application Year`}),(0,V.jsx)(`p`,{children:`Select the year for the new applicant cycle. Counts and downloads will use this year.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-close`,onClick:()=>{ae(!1),St(1)},type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`div`,{className:`admin-year-options`,children:Xt.map(e=>(0,V.jsxs)(`button`,{className:`admin-year-option`,onClick:()=>mi(e),type:`button`,children:[(0,V.jsx)(`span`,{children:e}),(0,V.jsxs)(`strong`,{children:[Ut.filter(t=>ar(t)===e).length,` `,`existing applicants`]})]},e))}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-applicant-year-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Qt}),` to`,` `,(0,V.jsx)(`strong`,{children:$t}),` of`,` `,(0,V.jsx)(`strong`,{children:qt.length}),` years`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{"aria-label":`Previous application years page`,disabled:R===1||qt.length===0,onClick:()=>qr(R-1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Zt.map(e=>typeof e==`number`?(0,V.jsx)(`button`,{className:R===e?`admin-page-button--active`:void 0,disabled:qt.length===0,onClick:()=>qr(e),type:`button`,children:e},e):(0,V.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,V.jsx)(`button`,{"aria-label":`Next application years page`,disabled:R===Jt||qt.length===0,onClick:()=>qr(R+1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>{ae(!1),St(1)},type:`button`,children:`Cancel`})})]})]}),D&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-course-applicants-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-backdrop`,onClick:Yr,type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-course-applicants-modal`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Course Applicants Information`}),(0,V.jsx)(`h2`,{id:`admin-course-applicants-title`,children:`Applicants Table`}),(0,V.jsxs)(`p`,{children:[D,` applicants for `,Kt,`.`]})]}),(0,V.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-close`,onClick:Yr,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-course-applicants-toolbar`,children:[(0,V.jsxs)(`div`,{className:`admin-search-field admin-course-applicant-search`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,V.jsx)(`input`,{"aria-label":`Search course applicants`,placeholder:`Search applicant name, ID, email, mobile, status...`,type:`search`,value:ct,onChange:Xr})]}),(0,V.jsxs)(`div`,{className:`admin-course-applicants-toolbar__actions`,children:[(0,V.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:Et===void 0||rn.length===0||ft||mt,onClick:()=>dt(!0),type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),`Delete All Applicants`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:Et===void 0||rn.length===0||ft||mt,onClick:()=>si(D),type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download All Applicants Info`]})]})]}),(0,V.jsxs)(`div`,{className:`admin-course-applicants-summary`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Total Course Applicants`}),(0,V.jsx)(`strong`,{children:rn.length})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Filtered Results`}),(0,V.jsx)(`strong`,{children:an.length})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Rows Per Page`}),(0,V.jsx)(`strong`,{children:Un})]})]}),(0,V.jsx)(`div`,{className:`admin-course-applicants-table-wrap`,children:(0,V.jsxs)(`table`,{className:`admin-course-applicants-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`No.`}),(0,V.jsx)(`th`,{children:`Student ID`}),(0,V.jsx)(`th`,{children:`Applicant Name`}),(0,V.jsx)(`th`,{children:`Gender`}),(0,V.jsx)(`th`,{children:`Birth Date`}),(0,V.jsx)(`th`,{children:`Year`}),(0,V.jsx)(`th`,{children:`Mobile No.`}),(0,V.jsx)(`th`,{children:`Email Address`}),(0,V.jsx)(`th`,{children:`Address`}),(0,V.jsx)(`th`,{children:`PSA`}),(0,V.jsx)(`th`,{children:`School ID`}),(0,V.jsx)(`th`,{children:`COR / Study Load`}),(0,V.jsx)(`th`,{children:`PWD ID PDF`}),(0,V.jsx)(`th`,{children:`4Ps ID PDF`}),(0,V.jsx)(`th`,{children:`Status`}),(0,V.jsx)(`th`,{children:`Submitted`})]})}),(0,V.jsxs)(`tbody`,{children:[Et===void 0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:16,children:`Loading applicants...`})}),Et!==void 0&&an.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:16,children:`No applicants found for this course.`})}),ln.map((e,t)=>{let n=[e.firstName,e.middleName,e.lastName,e.extensionName].filter(Boolean).join(` `)||`No name`;return(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{"data-label":`No.`,children:cn+t+1}),(0,V.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,V.jsx)(`td`,{className:`admin-applicant-name`,"data-label":`Applicant Name`,children:n}),(0,V.jsx)(`td`,{"data-label":`Gender`,children:e.gender}),(0,V.jsx)(`td`,{"data-label":`Birth Date`,children:e.birthDate}),(0,V.jsx)(`td`,{"data-label":`Year`,children:e.year}),(0,V.jsx)(`td`,{"data-label":`Mobile No.`,children:e.mobileNumber}),(0,V.jsx)(`td`,{className:`admin-applicant-email`,"data-label":`Email Address`,children:e.emailAddress}),(0,V.jsx)(`td`,{className:`admin-applicant-address`,"data-label":`Address`,children:e.address}),(0,V.jsx)(`td`,{"data-label":`PSA`,children:e.psaFileUrl?(0,V.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.psaFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`}),`View PSA`]}):(0,V.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,V.jsx)(`td`,{"data-label":`School ID`,children:e.schoolIdFileUrl?(0,V.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.schoolIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`}),`View School ID`]}):(0,V.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,V.jsx)(`td`,{"data-label":`COR / Study Load`,children:e.corFileUrl?(0,V.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.corFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`description`}),`View COR`]}):(0,V.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,V.jsx)(`td`,{"data-label":`PWD ID PDF`,children:e.pwdIdFileUrl?(0,V.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.pwdIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`}),`View PWD ID`]}):(0,V.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,V.jsx)(`td`,{"data-label":`4Ps ID PDF`,children:e.fourPsFileUrl?(0,V.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.fourPsFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`}),`View 4Ps ID`]}):(0,V.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,V.jsx)(`td`,{"data-label":`Status`,children:(0,V.jsx)(Yn,{status:e.status,tone:Xn(e.status)})}),(0,V.jsx)(`td`,{"data-label":`Submitted`,children:Zn(e.submittedAt)})]},e._id)})]})]})}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-course-applicants-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:dn}),` to`,` `,(0,V.jsx)(`strong`,{children:fn}),` of`,` `,(0,V.jsx)(`strong`,{children:an.length}),` applicants`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{"aria-label":`Previous course applicants page`,disabled:sn===1||an.length===0,onClick:()=>Kr(sn-1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),un.map(e=>typeof e==`number`?(0,V.jsx)(`button`,{className:sn===e?`admin-page-button--active`:void 0,disabled:an.length===0,onClick:()=>Kr(e),type:`button`,children:e},e):(0,V.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,V.jsx)(`button`,{"aria-label":`Next course applicants page`,disabled:sn===on||an.length===0,onClick:()=>Kr(sn+1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:Yr,type:`button`,children:`Close`})})]})]}),ut&&D&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-course-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close applicant deletion warning`,className:`admin-modal-backdrop`,onClick:()=>{ft||dt(!1)},type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,V.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`warning`})}),(0,V.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Permanent Action`}),(0,V.jsx)(`h2`,{id:`admin-course-delete-confirm-title`,children:`Delete all course applications?`}),(0,V.jsxs)(`p`,{children:[`Are you sure you want to delete all`,` `,(0,V.jsx)(`strong`,{children:rn.length}),` applications for`,` `,(0,V.jsx)(`strong`,{children:D}),`, application year`,` `,(0,V.jsx)(`strong`,{children:Kt}),`?`]})]}),(0,V.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`report`}),`Applicant records will be permanently removed from Convex and their uploaded PDFs moved to Google Drive trash.`]}),(0,V.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ft,onClick:()=>dt(!1),type:`button`,children:`No, Keep Applications`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:ft,onClick:ci,type:`button`,children:ft?`Deleting...`:`Yes, Delete All`})]})]})]}),mt&&(0,V.jsx)(`div`,{"aria-labelledby":`admin-course-download-progress-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-progress-card`,children:[(0,V.jsx)(`div`,{className:`admin-progress-icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`downloading`})}),(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Course Applicants Information`}),(0,V.jsx)(`h2`,{id:`admin-course-download-progress-title`,children:`Preparing Applicant Download`}),(0,V.jsxs)(`p`,{children:[`Creating the CSV file for `,D,`.`]}),(0,V.jsx)(`div`,{"aria-label":`Download progress ${gt}%`,"aria-valuemax":`100`,"aria-valuemin":`0`,"aria-valuenow":gt,className:`admin-progress-track`,role:`progressbar`,children:(0,V.jsx)(`span`,{style:{width:`${gt}%`}})}),(0,V.jsxs)(`strong`,{className:`admin-progress-value`,children:[gt,`%`]})]})}),vt&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-course-success-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close applicant action success message`,className:`admin-modal-backdrop`,onClick:()=>yt(null),type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card admin-success-card`,children:[(0,V.jsx)(`div`,{className:`admin-success-card__icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,V.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Completed Successfully`}),(0,V.jsx)(`h2`,{id:`admin-course-success-title`,children:vt.type===`download`?`Applicant download is ready`:`Applications deleted`}),(0,V.jsxs)(`p`,{children:[vt.count,` applicant`,` `,vt.count===1?`record`:`records`,` for`,` `,(0,V.jsx)(`strong`,{children:vt.course}),`, application year`,` `,(0,V.jsx)(`strong`,{children:vt.year}),` `,vt.type===`download`?`were added to the CSV file.`:`were deleted successfully.`]})]}),(0,V.jsx)(`div`,{className:`admin-confirm-card__actions admin-success-card__actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>yt(null),type:`button`,children:`Done`})})]})]}),j&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-school-id-download-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close School ID download modal`,className:`admin-modal-backdrop`,onClick:Qr,type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,V.jsx)(`h2`,{id:`admin-school-id-download-title`,children:`Choose School Year`}),(0,V.jsx)(`p`,{children:`Download all uploaded School ID files for a specific School Year.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close School ID download`,className:`admin-modal-close`,disabled:N,onClick:Qr,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`div`,{className:`admin-school-year-downloads`,children:jr.map(({fileCount:e,schoolYear:t})=>(0,V.jsxs)(`button`,{className:`admin-school-year-button`,disabled:N,onClick:()=>Zr(t),type:`button`,children:[(0,V.jsx)(`span`,{children:t}),(0,V.jsx)(`strong`,{children:N?`Preparing...`:`${e} ${e===1?`file`:`files`}`})]},t))}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Mr}),`-`,(0,V.jsx)(`strong`,{children:Nr}),` of`,` `,(0,V.jsx)(`strong`,{children:wn.length}),` school years`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{"aria-label":`Previous School ID page`,disabled:kr===1||N,onClick:()=>Wr(kr-1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Or},(e,t)=>{let n=t+1;return(0,V.jsx)(`button`,{"aria-current":kr===n?`page`:void 0,className:kr===n?`admin-page-button--active`:void 0,disabled:N,onClick:()=>Wr(n),type:`button`,children:n},n)}),(0,V.jsx)(`button`,{"aria-label":`Next School ID page`,disabled:kr===Or||N,onClick:()=>Wr(kr+1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:N,onClick:Qr,type:`button`,children:`Cancel`})})]})]}),de&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-school-id-batch-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close School ID batch modal`,className:`admin-modal-backdrop`,onClick:()=>{N||fe(``)},type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,V.jsx)(`h2`,{id:`admin-school-id-batch-title`,children:`Choose Batch`}),(0,V.jsxs)(`p`,{children:[`Download uploaded School ID files for `,de,` by batch. File names include Student ID, last name, first name, middle name, and batch no.`]})]}),(0,V.jsx)(`button`,{"aria-label":`Close School ID batch download`,className:`admin-modal-close`,disabled:N,onClick:()=>fe(``),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-school-year-downloads`,children:[Lr.map(({batchId:e,fileCount:t})=>(0,V.jsxs)(`button`,{className:`admin-school-year-button`,disabled:N||_e,onClick:()=>$r(e,t),type:`button`,children:[(0,V.jsx)(`span`,{children:e}),(0,V.jsxs)(`strong`,{children:[t,` `,t===1?`file`:`files`]})]},e)),Tn.length===0&&(0,V.jsx)(`div`,{className:`admin-modal-empty-state`,children:`No batches with uploaded School ID files were found for this School Year.`})]}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Rr}),`-`,(0,V.jsx)(`strong`,{children:zr}),` of`,` `,(0,V.jsx)(`strong`,{children:Tn.length}),` batches`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{"aria-label":`Previous School ID batch page`,disabled:Fr===1||N,onClick:()=>Gr(Fr-1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Pr},(e,t)=>{let n=t+1;return(0,V.jsx)(`button`,{"aria-current":Fr===n?`page`:void 0,className:Fr===n?`admin-page-button--active`:void 0,disabled:N,onClick:()=>Gr(n),type:`button`,children:n},n)}),(0,V.jsx)(`button`,{"aria-label":`Next School ID batch page`,disabled:Fr===Pr||N,onClick:()=>Gr(Fr+1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:N,onClick:()=>fe(``),type:`button`,children:`Back`})})]})]}),M&&!me&&!N&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-school-id-batch-action-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close School ID batch actions`,className:`admin-modal-backdrop`,onClick:ei,type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`p`,{className:`admin-modal-kicker`,children:[`Batch `,M.batchId]}),(0,V.jsx)(`h2`,{id:`admin-school-id-batch-action-title`,children:`Manage School ID Files`}),(0,V.jsxs)(`p`,{children:[M.fileCount,` `,M.fileCount===1?`file`:`files`,` for School Year`,` `,M.schoolYear,`.`]})]}),(0,V.jsx)(`button`,{"aria-label":`Close School ID batch actions`,className:`admin-modal-close`,onClick:ei,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-school-id-actions`,children:[(0,V.jsxs)(`button`,{className:`admin-school-id-action admin-school-id-action--download`,onClick:()=>ii(M.schoolYear,M.batchId),type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`folder_zip`}),(0,V.jsxs)(`span`,{children:[(0,V.jsx)(`strong`,{children:`Download All IDs`}),(0,V.jsx)(`small`,{children:`Create one ZIP file for this batch.`})]})]}),(0,V.jsxs)(`button`,{className:`admin-school-id-action admin-school-id-action--delete`,onClick:()=>he(!0),type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),(0,V.jsxs)(`span`,{children:[(0,V.jsx)(`strong`,{children:`Delete All IDs`}),(0,V.jsx)(`small`,{children:`Remove the Drive files and clear their Convex links.`})]})]})]}),(0,V.jsx)(`div`,{className:`admin-upload-actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:ei,type:`button`,children:`Back`})})]})]}),me&&M&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-school-id-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close School ID delete warning`,className:`admin-modal-backdrop`,onClick:()=>{_e||he(!1)},type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,V.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`warning`})}),(0,V.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Permanent Action`}),(0,V.jsx)(`h2`,{id:`admin-school-id-delete-confirm-title`,children:`Delete all IDs in this batch?`}),(0,V.jsxs)(`p`,{children:[`Are you sure you want to delete all`,` `,(0,V.jsx)(`strong`,{children:M.fileCount}),` School ID files from Batch`,` `,(0,V.jsx)(`strong`,{children:M.batchId}),`?`]})]}),(0,V.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`report`}),`The files will be moved to Google Drive trash and their links removed from Convex.`]}),(0,V.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:_e,onClick:()=>he(!1),type:`button`,children:`No, Keep Files`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:_e,onClick:ai,type:`button`,children:_e?`Deleting...`:`Yes, Delete All`})]})]})]}),N&&M&&(0,V.jsx)(`div`,{"aria-labelledby":`admin-school-id-progress-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-progress-card`,children:[(0,V.jsx)(`div`,{className:`admin-progress-icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`downloading`})}),(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,V.jsx)(`h2`,{id:`admin-school-id-progress-title`,children:`Preparing Batch Download`}),(0,V.jsxs)(`p`,{children:[`Downloading Batch `,M.batchId,` files and creating the ZIP.`]}),(0,V.jsx)(`div`,{"aria-label":`Download progress ${ye}%`,"aria-valuemax":`100`,"aria-valuemin":`0`,"aria-valuenow":ye,className:`admin-progress-track`,role:`progressbar`,children:(0,V.jsx)(`span`,{style:{width:`${ye}%`}})}),(0,V.jsxs)(`strong`,{className:`admin-progress-value`,children:[ye,`%`]})]})}),xe&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-school-id-success-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close School ID success message`,className:`admin-modal-backdrop`,onClick:()=>Se(null),type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card admin-success-card`,children:[(0,V.jsx)(`div`,{className:`admin-success-card__icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,V.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Completed Successfully`}),(0,V.jsx)(`h2`,{id:`admin-school-id-success-title`,children:xe.type===`download`?`Batch download is ready`:`Batch ID files deleted`}),(0,V.jsxs)(`p`,{children:[xe.count,` School ID`,` `,xe.count===1?`file`:`files`,` for Batch`,` `,(0,V.jsx)(`strong`,{children:xe.batchId}),`, School Year`,` `,(0,V.jsx)(`strong`,{children:xe.schoolYear}),` `,xe.type===`download`?`were added to the ZIP file.`:`were deleted successfully.`]})]}),(0,V.jsx)(`div`,{className:`admin-confirm-card__actions admin-success-card__actions`,children:(0,V.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>Se(null),type:`button`,children:`Done`})})]})]}),Ue&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-edit-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close edit record modal`,className:`admin-modal-backdrop`,onClick:xi,type:`button`}),(0,V.jsxs)(`form`,{className:`admin-modal-card admin-modal-card--edit`,onSubmit:wi,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header admin-modal-header--edit`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Edit Record`}),(0,V.jsx)(`h2`,{id:`admin-edit-record-title`,children:`Edit Grantee Information`}),(0,V.jsx)(`p`,{children:`Update the selected grantee record details.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close edit record`,className:`admin-modal-close`,disabled:Je,onClick:xi,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-edit-summary`,children:[(0,V.jsx)(`div`,{className:`admin-edit-summary__icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`person`})}),(0,V.jsxs)(`div`,{className:`admin-edit-summary__text`,children:[(0,V.jsx)(`span`,{children:`Selected Record`}),(0,V.jsx)(`strong`,{children:Ue.studentId||`No Student ID`}),(0,V.jsx)(Yn,{status:Ue.status,tone:Xn(Ue.status)})]})]}),(0,V.jsxs)(`div`,{className:`admin-record-details admin-record-details--responsive`,children:[(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`No.`}),(0,V.jsx)(`input`,{value:Ge?.no??``,onChange:Ci(`no`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`TES Award Number`}),(0,V.jsx)(`input`,{value:Ge?.tesAwardNumber??``,onChange:Ci(`tesAwardNumber`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`Student ID`}),(0,V.jsx)(`input`,{value:Ge?.studentId??``,onChange:Ci(`studentId`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`Last Name`}),(0,V.jsx)(`input`,{value:Ge?.lastName??``,onChange:Ci(`lastName`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`First Name`}),(0,V.jsx)(`input`,{value:Ge?.firstName??``,onChange:Ci(`firstName`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`MI.`}),(0,V.jsx)(`input`,{value:Ge?.middleInitial??``,onChange:Ci(`middleInitial`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`Batch No.`}),(0,V.jsx)(`input`,{value:Ge?.batchId??``,onChange:Ci(`batchId`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`Status`}),(0,V.jsxs)(`select`,{value:Ge?.status??``,onChange:Ci(`status`),children:[(0,V.jsx)(`option`,{value:``,children:`Select Status`}),(0,V.jsx)(`option`,{children:`Grantee`}),(0,V.jsx)(`option`,{children:`Validated`}),(0,V.jsx)(`option`,{children:`Pending`}),(0,V.jsx)(`option`,{children:`Rejected`})]})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`Semester`}),(0,V.jsx)(`input`,{value:Ge?.semester??``,onChange:Ci(`semester`)})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{children:`School Year`}),(0,V.jsx)(`input`,{value:Ge?.schoolYear??``,onChange:Ci(`schoolYear`)})]})]}),qe&&(0,V.jsx)(`p`,{className:`admin-edit-message`,children:qe}),(0,V.jsxs)(`div`,{className:`admin-upload-actions admin-upload-actions--sticky`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Je,onClick:xi,type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:Je,type:`submit`,children:Je?`Saving...`:`Save Changes`})]})]})]}),k&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-add-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close add record modal`,className:`admin-modal-backdrop`,onClick:bi,type:`button`}),(0,V.jsxs)(`form`,{className:`admin-modal-card`,onSubmit:ki,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Add New Record`}),(0,V.jsx)(`h2`,{id:`admin-add-record-title`,children:`Upload CSV File`}),(0,V.jsx)(`p`,{children:`Use the required template format before uploading grantee records.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close add record`,className:`admin-modal-close`,disabled:Ae,onClick:bi,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-upload-body`,children:[(0,V.jsxs)(`button`,{className:`admin-button admin-button--secondary`,onClick:er,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download CSV Template`]}),(0,V.jsxs)(`label`,{className:`admin-upload-dropzone`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload_file`}),(0,V.jsx)(`strong`,{children:Te?Te.name:`Choose CSV file`}),(0,V.jsx)(`span`,{children:`Accepted format: downloaded CSV template`}),(0,V.jsx)(`input`,{accept:`.csv,text/csv`,disabled:Ae,onChange:Oi,type:`file`})]}),(0,V.jsx)(`div`,{className:`admin-template-preview`,"aria-label":`CSV template headers`,children:Jn.map(e=>(0,V.jsx)(`span`,{children:e},e))}),De&&(0,V.jsx)(`p`,{className:`admin-upload-message`,children:De})]}),(0,V.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Ae,onClick:bi,type:`button`,children:`Cancel`}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:Ae,type:`submit`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload`}),Ae?`Uploading...`:`Upload`]})]})]})]}),s&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-user-management-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close user management modal`,className:`admin-modal-backdrop`,onClick:()=>{!l&&!d&&c(!1)},type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--users`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`User Management`}),(0,V.jsx)(`h2`,{id:`admin-user-management-title`,children:`Student Accounts`}),(0,V.jsx)(`p`,{children:`Search and manage registered student account details.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close user management`,className:`admin-modal-close`,onClick:()=>c(!1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),h&&(0,V.jsx)(`p`,{className:`admin-user-message`,role:`status`,children:h}),(0,V.jsxs)(`div`,{className:`admin-search-field admin-user-search`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,V.jsx)(`input`,{"aria-label":`Search student accounts`,onChange:e=>{w(e.target.value),S(1)},placeholder:`Search Student ID, email, phone, or Facebook link`,type:`search`,value:C})]}),(0,V.jsx)(`div`,{className:`admin-quick-actions-table-wrap admin-users-table-wrap`,children:(0,V.jsxs)(`table`,{className:`admin-quick-actions-table admin-users-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`No.`}),(0,V.jsx)(`th`,{children:`Student ID`}),(0,V.jsx)(`th`,{children:`Email Address`}),(0,V.jsx)(`th`,{children:`Phone Number`}),(0,V.jsx)(`th`,{children:`Facebook Profile`}),(0,V.jsx)(`th`,{children:`Actions`})]})}),(0,V.jsxs)(`tbody`,{children:[Ot===void 0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:6,children:`Loading users...`})}),Ot!==void 0&&Gn.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:6,children:`No student accounts found.`})}),ur.map((e,t)=>(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{"data-label":`No.`,children:lr+t+1}),(0,V.jsx)(`td`,{"data-label":`Student ID`,children:e.schoolId||`Not provided`}),(0,V.jsx)(`td`,{"data-label":`Email Address`,children:e.email}),(0,V.jsx)(`td`,{"data-label":`Phone Number`,children:e.phoneNumber||`Not provided`}),(0,V.jsx)(`td`,{"data-label":`Facebook Profile`,children:e.facebookProfileUrl?(0,V.jsx)(`a`,{className:`admin-user-facebook-link`,href:e.facebookProfileUrl,rel:`noreferrer`,target:`_blank`,children:`View Profile`}):`Not provided`}),(0,V.jsx)(`td`,{"data-label":`Actions`,children:(0,V.jsxs)(`div`,{className:`admin-user-actions`,children:[(0,V.jsx)(`button`,{"aria-label":`Edit ${e.email}`,onClick:()=>U(e),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`edit`})}),(0,V.jsx)(`button`,{"aria-label":`Delete ${e.email}`,className:`admin-user-action--delete`,onClick:()=>{f(e),g(``)},type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`})})]})})]},e.id))]})]})}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-user-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:fr}),` to `,(0,V.jsx)(`strong`,{children:pr}),` of `,(0,V.jsx)(`strong`,{children:Gn.length}),` users`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{"aria-label":`Previous users page`,disabled:sr===1||Gn.length===0,onClick:()=>S(sr-1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),dr.map(e=>typeof e==`string`?(0,V.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e):(0,V.jsx)(`button`,{className:sr===e?`admin-page-button--active`:void 0,disabled:Gn.length===0,onClick:()=>S(e),type:`button`,children:e},e)),(0,V.jsx)(`button`,{"aria-label":`Next users page`,disabled:sr===Qn||Gn.length===0,onClick:()=>S(sr+1),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),l&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-edit-user-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-modal-overlay--nested`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close edit user modal`,className:`admin-modal-backdrop`,onClick:()=>u(null),type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--user-form`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Edit User`}),(0,V.jsx)(`h2`,{id:`admin-edit-user-title`,children:`Update Account`})]}),(0,V.jsx)(`button`,{"aria-label":`Close edit user`,className:`admin-modal-close`,onClick:()=>u(null),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`form`,{className:`admin-user-form`,onSubmit:async e=>{if(e.preventDefault(),!(!l||_)){v(!0),g(``);try{let e=await Lt({id:l.id,email:p.email,phoneNumber:p.phoneNumber});if(!e.success){g(e.message);return}u(null),g(e.message)}catch(e){g(e instanceof Error?e.message:`Unable to update the user account.`)}finally{v(!1)}}},children:[(0,V.jsxs)(`label`,{children:[`Email Address`,(0,V.jsx)(`input`,{autoComplete:`email`,name:`email`,onChange:ji,required:!0,type:`email`,value:p.email})]}),(0,V.jsxs)(`label`,{children:[`Phone Number`,(0,V.jsx)(`input`,{autoComplete:`tel`,name:`phoneNumber`,onChange:ji,placeholder:`09123456789`,required:!0,type:`tel`,value:p.phoneNumber})]}),h&&(0,V.jsx)(`p`,{className:`admin-user-message admin-user-message--error`,role:`alert`,children:h}),(0,V.jsxs)(`div`,{className:`admin-user-form__actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>u(null),type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:_,type:`submit`,children:_?`Saving...`:`Save Changes`})]})]})]})]}),d&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-delete-user-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-modal-overlay--nested`,role:`alertdialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Cancel deleting user`,className:`admin-modal-backdrop`,onClick:()=>f(null),type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--confirm`,children:[(0,V.jsx)(`div`,{className:`admin-delete-user-icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`})}),(0,V.jsx)(`h2`,{id:`admin-delete-user-title`,children:`Delete user account?`}),(0,V.jsxs)(`p`,{children:[`This permanently deletes `,(0,V.jsx)(`strong`,{children:d.email}),` from Convex. This action cannot be undone.`]}),h&&(0,V.jsx)(`p`,{className:`admin-user-message admin-user-message--error`,role:`alert`,children:h}),(0,V.jsxs)(`div`,{className:`admin-user-form__actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>f(null),type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:y,onClick:async()=>{if(!(!d||y)){b(!0),g(``);try{let e=await Rt({id:d.id});if(!e.success){g(e.message);return}f(null),g(e.message)}catch(e){g(e instanceof Error?e.message:`Unable to delete the user account.`)}finally{b(!1)}}},type:`button`,children:y?`Deleting...`:`Delete User`})]})]})]}),a&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-quick-actions-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close quick actions modal`,className:`admin-modal-backdrop`,onClick:()=>{ee||o(!1)},type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--quick-actions`,children:[(0,V.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Quick Actions`}),(0,V.jsx)(`h2`,{id:`admin-quick-actions-title`,children:`Student Requests`}),(0,V.jsx)(`p`,{children:`Review submitted questions and requests from the student portal.`})]}),(0,V.jsx)(`button`,{"aria-label":`Close quick actions`,className:`admin-modal-close`,onClick:()=>{o(!1),T(!1)},type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsxs)(`div`,{className:`admin-quick-actions-summary`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Total Requests`}),(0,V.jsx)(`strong`,{children:Ct?.length??0})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Source`}),(0,V.jsx)(`strong`,{children:`Student Portal`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Status`}),(0,V.jsx)(`strong`,{children:`Live Data`})]})]}),(0,V.jsxs)(`div`,{className:`admin-quick-actions-toolbar`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Export Report`}),(0,V.jsx)(`strong`,{children:`Download all student responses with email accounts.`})]}),(0,V.jsxs)(`div`,{className:`admin-quick-actions-toolbar__actions`,children:[(0,V.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:Ct===void 0||Vt.length===0||Ne,onClick:li,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Export All Responses`]}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:Ct===void 0||Vt.length===0||Ne,onClick:ui,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_sweep`}),Ne?`Clearing...`:`Clear All Messages`]})]})]}),(0,V.jsx)(`div`,{className:`admin-quick-actions-table-wrap`,children:(0,V.jsxs)(`table`,{className:`admin-quick-actions-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`No.`}),(0,V.jsx)(`th`,{children:`Student Details`}),(0,V.jsx)(`th`,{children:`Email Account`}),(0,V.jsx)(`th`,{children:`Question`}),(0,V.jsx)(`th`,{children:`Source`}),(0,V.jsx)(`th`,{children:`Status`}),(0,V.jsx)(`th`,{children:`Submitted`})]})}),(0,V.jsxs)(`tbody`,{children:[Ct===void 0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:7,children:`Loading quick actions...`})}),Ct?.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`admin-empty-state`,colSpan:7,children:`No quick action requests yet.`})}),Mn.map((e,t)=>(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{"data-label":`No.`,children:An+t+1}),(0,V.jsxs)(`td`,{className:`admin-request-student`,"data-label":`Student Details`,children:[(0,V.jsx)(`strong`,{children:rr(e)||`Not provided`}),(0,V.jsx)(`span`,{children:e.studentId||`No Student ID`})]}),(0,V.jsx)(`td`,{className:`admin-request-email`,"data-label":`Email Account`,children:e.email}),(0,V.jsx)(`td`,{className:`admin-request-question`,"data-label":`Question`,children:e.question}),(0,V.jsx)(`td`,{"data-label":`Source`,children:e.source}),(0,V.jsx)(`td`,{"data-label":`Status`,children:(0,V.jsx)(Yn,{status:e.status,tone:Xn(e.status)})}),(0,V.jsx)(`td`,{"data-label":`Submitted`,children:Zn(e.submittedAt)})]},e._id))]})]})}),(0,V.jsxs)(`div`,{className:`admin-pagination admin-quick-actions-pagination`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:Nn}),` to`,` `,(0,V.jsx)(`strong`,{children:Fn}),` of`,` `,(0,V.jsx)(`strong`,{children:Vt.length}),` requests`]}),(0,V.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,V.jsx)(`button`,{type:`button`,disabled:kn===1||Vt.length===0,"aria-label":`Previous quick actions page`,onClick:()=>Vr(kn-1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),jn.map(e=>typeof e==`string`?(0,V.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e):(0,V.jsx)(`button`,{className:kn===e?`admin-page-button--active`:void 0,disabled:Vt.length===0,onClick:()=>Vr(e),type:`button`,children:e},e)),(0,V.jsx)(`button`,{type:`button`,disabled:kn===On||Vt.length===0,"aria-label":`Next quick actions page`,onClick:()=>Vr(kn+1),children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),ee&&(0,V.jsxs)(`div`,{"aria-describedby":`clear-quick-actions-description`,"aria-labelledby":`clear-quick-actions-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`alertdialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Keep Quick Action messages`,className:`admin-modal-backdrop`,disabled:Ne,onClick:()=>T(!1),type:`button`}),(0,V.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,V.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_sweep`})}),(0,V.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,V.jsx)(`p`,{className:`admin-modal-kicker`,children:`Permanent Action`}),(0,V.jsx)(`h2`,{id:`clear-quick-actions-title`,children:`Clear all messages?`}),(0,V.jsxs)(`p`,{id:`clear-quick-actions-description`,children:[`You are about to permanently delete`,` `,(0,V.jsxs)(`strong`,{children:[Vt.length,` message`,Vt.length===1?``:`s`]}),`. This action cannot be undone.`]})]}),(0,V.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`warning`}),`Export the responses first if you need to keep a copy.`]}),(0,V.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,V.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Ne,onClick:()=>T(!1),type:`button`,children:`No, Keep Messages`}),(0,V.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:Ne,onClick:di,type:`button`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),Ne?`Clearing Messages...`:`Yes, Clear All`]})]})]})]}),(0,V.jsx)(`div`,{className:`admin-scroll-progress`,style:{"--admin-scroll":t}})]})}var yr=`
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
`,br={quickActions:{table:`quickActions`,source:`all-grantee-information-header`,defaultStatus:`new`,fields:{email:{label:`Email account`,type:`email`,required:!0,placeholder:`name@example.com`},question:{label:`Question`,type:`textarea`,required:!0,placeholder:`Type your question or request here...`}}}};function xr(e){let t=(0,Nn.c)(4),{status:n,tone:r}=e,i=`status-badge status-badge--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,V.jsx)(`span`,{className:`status-badge__dot`}),t[0]=a):a=t[0];let o;return t[1]!==n||t[2]!==i?(o=(0,V.jsxs)(`span`,{className:i,children:[a,n]}),t[1]=n,t[2]=i,t[3]=o):o=t[3],o}function Sr(e=``){let t=e.toLowerCase();return t.includes(`grantee`)||t.includes(`valid`)||t.includes(`complete`)||t.includes(`resolved`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function Cr(e,t){let n=[];if(t<=5){for(let e=1;e<=t;e+=1)n.push(e);return n}n.push(1),e>3&&n.push(`left-ellipsis`);let r=Math.max(2,e-1),i=Math.min(t-1,e+1);for(let e=r;e<=i;e+=1)n.push(e);return e<t-2&&n.push(`right-ellipsis`),n.push(t),n}function wr(e){return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e)}function Tr(e){return/^[A-Za-z0-9-]{4,30}$/.test(e)}function Er(e){return e.replace(/[\s-]/g,``).trim()}function Dr(e){return e.replace(/[^\d+]/g,``).replace(/(?!^)\+/g,``)}function Or(e){return e.replace(/[\r\n]+/g,` `).replace(/\s{2,}/g,` `)}function kr(e){let t=Er(e);return/^09\d{9}$/.test(t)||/^\+639\d{9}$/.test(t)}var Ar=5*1024*1024,jr=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``);function Mr(e){return e?e.type===`application/pdf`||/\.pdf$/i.test(e.name):!1}function Nr(e){if(!e)return``;let t=e/(1024*1024);return`${t.toFixed(t>=10?0:1)} MB`}function Pr(e){return e.length>=6}function Fr(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}var Ir=[{label:`Student ID`,name:`studentId`,autoComplete:`off`,required:!0},{label:`Last Name`,name:`lastName`,autoComplete:`family-name`,required:!0},{label:`First Name`,name:`firstName`,autoComplete:`given-name`,required:!0},{label:`Ext Name (JR)`,name:`extensionName`,autoComplete:`honorific-suffix`},{label:`Middle Name`,name:`middleName`,autoComplete:`additional-name`}],Lr=[{label:`Last Name`,name:`fatherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`fatherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`fatherMiddleName`,autoComplete:`additional-name`}],Rr=[{label:`Last Name`,name:`motherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`motherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`motherMiddleName`,autoComplete:`additional-name`}],zr=[`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`],Br=[{label:`Address`,name:`address`,autoComplete:`street-address`,className:`portal-full-field`,required:!0},{label:`Zip Code`,name:`zipCode`,autoComplete:`postal-code`,inputMode:`numeric`},{label:`PWD ID`,name:`pwdId`,autoComplete:`off`},{label:`Mobile No.`,name:`mobileNumber`,autoComplete:`tel`,inputMode:`tel`,type:`tel`,pattern:`\\+?[0-9]*`,required:!0},{label:`Email Address`,name:`emailAddress`,autoComplete:`email`,inputMode:`email`,type:`email`,required:!0}];function Vr({onAdminLoginSuccess:e,onStudentRegistrationSuccess:t}){let n=(0,z.useRef)(null),[r,i]=(0,z.useState)(0),[a,o]=(0,z.useState)(!1),[s,c]=(0,z.useState)(!1),[l,u]=(0,z.useState)(!1),[d,f]=(0,z.useState)(!1),[p,m]=(0,z.useState)(!1),[h,g]=(0,z.useState)(!1),[_,v]=(0,z.useState)(!1),[y,b]=(0,z.useState)(!1),[x,S]=(0,z.useState)(``),[C,w]=(0,z.useState)(``),[ee,T]=(0,z.useState)(``),[te,E]=(0,z.useState)(``),[ne,re]=(0,z.useState)(``),[ie,ae]=(0,z.useState)(``),[D,O]=(0,z.useState)({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),[k,oe]=(0,z.useState)(null),[se,ce]=(0,z.useState)(!1),[le,A]=(0,z.useState)(!1),[j,ue]=(0,z.useState)(!1),[de,fe]=(0,z.useState)(!1),[M,pe]=(0,z.useState)(1),[me,he]=(0,z.useState)(``),[N,ge]=(0,z.useState)(``),[_e,ve]=(0,z.useState)(``),[ye,be]=(0,z.useState)(``),[xe,Se]=(0,z.useState)(``),[Ce,we]=(0,z.useState)(``),[Te,Ee]=(0,z.useState)(``),[De,P]=(0,z.useState)(``),[Oe,ke]=(0,z.useState)(``),[Ae,F]=(0,z.useState)(``),[je,Me]=(0,z.useState)(``),[Ne,Pe]=(0,z.useState)(null),[Fe,Ie]=(0,z.useState)(``),[Le,Re]=(0,z.useState)(``),[ze,Be]=(0,z.useState)(``),[Ve,He]=(0,z.useState)(``),[Ue,We]=(0,z.useState)(``),[Ge,Ke]=(0,z.useState)(``),[qe,I]=(0,z.useState)(``),[Je,Ye]=(0,z.useState)(``),[Xe,Ze]=(0,z.useState)(!1),[Qe,$e]=(0,z.useState)(!1),[et,tt]=(0,z.useState)(!1),nt=mn(B.applicants.create),rt=mn(B.quickActions.create),it=mn(B.adminAuth.login),at=mn(B.adminAuth.register),ot=mn(B.adminAuth.requestPasswordResetOtp),st=mn(B.adminAuth.changePasswordWithOtp),ct=pn(B.allinfo.searchPublic,N?{searchValue:N}:`skip`),lt=pn(B.applicantPortal.get),ut=(0,z.useMemo)(()=>ct??[],[ct]),dt=me.trim().length>0,ft=lt===void 0,pt=lt?.isReceivingApplicants===!0,mt=ut,ht=mt.length,gt=Math.max(1,Math.ceil(ht/6)),_t=(M-1)*6,vt=Math.min(_t+6,ht),yt=(0,z.useMemo)(()=>mt.slice(_t,vt),[mt,_t,vt]),bt=(0,z.useMemo)(()=>Cr(M,gt),[M,gt]);(0,z.useEffect)(()=>{let e=window.setTimeout(()=>{ge(me.trim())},500);return()=>window.clearTimeout(e)},[me]);let L=(0,z.useCallback)(()=>{Me(``),Pe(null),Se(``),we(``),P(``),ke(``),typeof t==`function`&&t(Ne)},[t,Ne]);(0,z.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;i(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,z.useEffect)(()=>{if(!a&&!s&&!l&&!d&&!p&&!h&&!_&&!y&&!ie&&!je&&!ee)return;let e=e=>{if(e.key===`Escape`){if(j)return;if(_){v(!1);return}if(y){b(!1);return}o(!1),c(!1),E(``),re(``),oe(null),O({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),u(!1),ce(!1),f(!1),m(!1),g(!1),ae(``),je&&L(),T(``)}};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[a,s,l,d,p,h,_,y,j,ie,je,ee,L]);let xt=()=>{T(``),w(``),o(!0)},St=()=>{o(!1),w(``)},Ct=()=>{if(lt===void 0){ae(`Please wait while the UNIFAST portal status is loading.`);return}if(!lt.isReceivingApplicants){ae(`The UNIFAST portal is not receiving applicants right now. Please wait for the administrator to open applications.`);return}E(``),re(``),v(!1),b(!1),c(!0)},wt=()=>{j||(c(!1),E(``),re(``),v(!1),O({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),oe(null))},Tt=async(e,t,n)=>{let r=[n.lastName,n.firstName,n.middleName,n.extensionName].filter(Boolean).join(` `),i=new URLSearchParams({applicationYear:lt?.applicationYear||String(new Date().getFullYear()),documentType:t,fileName:e.name,fullName:r,studentId:n.studentId}),a;try{a=await fetch(`${jr}/google-drive/upload?${i.toString()}`,{body:e,headers:{"Content-Type":e.type||`application/pdf`},method:`POST`})}catch{throw Error(`Unable to connect to the PDF upload service. Deploy the Convex HTTP functions and check VITE_CONVEX_URL or VITE_CONVEX_SITE_URL.`)}if(!a.ok){let t=await a.json().catch(()=>null);throw Error(t?.message||`Unable to upload ${e.name} to Google Drive.`)}let{fileUrl:o}=await a.json();if(!o)throw Error(`Google Drive did not return a file link for ${e.name}.`);return o},Et=e=>{let{files:t,name:n}=e.target,r=t?.[0]??null;if(E(``),re(``),oe(null),!r){O(e=>({...e,[n]:null}));return}if(!Mr(r)){e.target.value=``,O(e=>({...e,[n]:null})),E(`Please upload PDF files only for all document requirements.`);return}if(r.size>Ar){e.target.value=``,O(e=>({...e,[n]:null})),E(`Each uploaded PDF must be 5MB or smaller.`);return}O(e=>({...e,[n]:r}))},Dt=async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=Er(String(n.get(`mobileNumber`)||``)),i=String(n.get(`emailAddress`)||``).trim().toLowerCase(),a=n.get(`psaFile`),o=n.get(`schoolIdFile`),s=n.get(`corFile`),c=n.get(`pwdIdFile`),l=n.get(`fourPsFile`);if(E(``),re(``),!lt?.isReceivingApplicants){E(`The UNIFAST portal is closed for applicants right now.`);return}if(!kr(r)){E(`Please enter a valid mobile number. Example: 09123456789 or +639123456789.`);return}if(!wr(i)){E(`Please enter a valid email address.`);return}if(!(a instanceof File)||!a.name||!Mr(a)){E(`Please upload your PSA as a PDF file.`);return}if(!(o instanceof File)||!o.name||!Mr(o)){E(`Please upload your colored School ID photocopy as a PDF file.`);return}if(!(s instanceof File)||!s.name||!Mr(s)){E(`Please upload your COR or Study Load as a PDF file.`);return}if(a.size>Ar||o.size>Ar||s.size>Ar){E(`Each uploaded PDF must be 5MB or smaller.`);return}let u=[c,l].filter(e=>e instanceof File&&e.name);if(u.some(e=>!Mr(e))){E(`Optional PWD ID and 4Ps ID documents must be PDF files.`);return}if(u.some(e=>e.size>Ar)){E(`Each uploaded PDF must be 5MB or smaller.`);return}oe({studentId:String(n.get(`studentId`)||``).trim(),lastName:String(n.get(`lastName`)||``).trim(),firstName:String(n.get(`firstName`)||``).trim(),extensionName:String(n.get(`extensionName`)||``).trim(),middleName:String(n.get(`middleName`)||``).trim(),gender:String(n.get(`gender`)||``),birthDate:String(n.get(`birthDate`)||``),course:String(n.get(`course`)||``),year:String(n.get(`year`)||``),fatherLastName:String(n.get(`fatherLastName`)||``).trim(),fatherFirstName:String(n.get(`fatherFirstName`)||``).trim(),fatherMiddleName:String(n.get(`fatherMiddleName`)||``).trim(),motherLastName:String(n.get(`motherLastName`)||``).trim(),motherFirstName:String(n.get(`motherFirstName`)||``).trim(),motherMiddleName:String(n.get(`motherMiddleName`)||``).trim(),address:String(n.get(`address`)||``).trim(),zipCode:String(n.get(`zipCode`)||``).trim(),pwdId:String(n.get(`pwdId`)||``).trim(),mobileNumber:r,emailAddress:i,psaFile:a,schoolIdFile:o,corFile:s,pwdIdFile:u.includes(c)?c:null,fourPsFile:u.includes(l)?l:null})},Ot=()=>{E(``),re(``),v(!1),oe(null)},kt=()=>{if(k){if(E(``),re(``),!lt?.isReceivingApplicants){E(`The UNIFAST portal is closed for applicants right now.`);return}v(!0)}},At=async()=>{if(k){if(E(``),re(``),!lt?.isReceivingApplicants){E(`The UNIFAST portal is closed for applicants right now.`);return}ue(!0);try{let[e,t,r,i,a]=await Promise.all([Tt(k.psaFile,`PSA`,k),Tt(k.schoolIdFile,`School-ID`,k),Tt(k.corFile,`COR-or-Study-Load`,k),k.pwdIdFile?Tt(k.pwdIdFile,`PWD-ID`,k):Promise.resolve(void 0),k.fourPsFile?Tt(k.fourPsFile,`4Ps-ID`,k):Promise.resolve(void 0)]),o={studentId:k.studentId,lastName:k.lastName,firstName:k.firstName,extensionName:k.extensionName,middleName:k.middleName,gender:k.gender,birthDate:k.birthDate,course:k.course,year:k.year,fatherLastName:k.fatherLastName,fatherFirstName:k.fatherFirstName,fatherMiddleName:k.fatherMiddleName,motherLastName:k.motherLastName,motherFirstName:k.motherFirstName,motherMiddleName:k.motherMiddleName,address:k.address,zipCode:k.zipCode,pwdId:k.pwdId,mobileNumber:k.mobileNumber,emailAddress:k.emailAddress,psaFileUrl:e,psaFileName:k.psaFile.name,schoolIdFileUrl:t,schoolIdFileName:k.schoolIdFile.name,corFileUrl:r,corFileName:k.corFile.name};i&&k.pwdIdFile&&(o.pwdIdFileUrl=i,o.pwdIdFileName=k.pwdIdFile.name),a&&k.fourPsFile&&(o.fourPsFileUrl=a,o.fourPsFileName=k.fourPsFile.name);let s=await nt(o);if(!s.success){v(!1),E(s.message||`Unable to submit applicant information.`);return}n.current?.reset(),O({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),oe(null),re(``),v(!1),c(!1),b(!0)}catch(e){v(!1),E(e instanceof Error?e.message:`Unable to submit applicant information right now.`)}finally{ue(!1)}}},jt=()=>{S(``),ve(``),be(``),u(!0)},Mt=()=>{u(!1),ce(!1),S(``),ve(``),be(``)},Nt=()=>{let e=_e.trim(),t=e.includes(`@`);u(!1),m(!0),F(``),Me(``),Se(t?e.toLowerCase():``),we(t?``:e),P(``),ke(``)},Pt=()=>{m(!1),F(``),Me(``),Se(``),we(``),Ee(``),P(``),ke(``)},Ft=()=>{m(!1),F(``),Me(``),Pe(null),ve(xe||Ce),be(``),u(!0)},It=()=>{g(!1),m(!0)},Lt=()=>{let e=_e.trim(),t=e.includes(`@`);u(!1),f(!0),I(``),Ye(``),Ze(!1),Ie(t?e.toLowerCase():``),Re(t?``:e),Be(``),He(``),We(``),Ke(``)},Rt=()=>{f(!1),I(``),Ye(``),Ze(!1),Ie(``),Re(``),Be(``),He(``),We(``),Ke(``)},zt=()=>{pe(e=>Math.max(e-1,1))},Bt=()=>{pe(e=>Math.min(e+1,gt))},Vt=()=>{he(``),ge(``),pe(1)},Ht=e=>{he(e.target.value),pe(1)},Ut=e=>{e.target.value=Dr(e.target.value)},Wt=()=>{Ze(!1),Ye(``),He(``),We(``),Ke(``)},Gt=e=>{let t=e.target.value;Ie(t),t.trim()&&Re(``),Wt()},Kt=e=>{let t=e.target.value;Re(t),t.trim()&&Ie(``),Wt()},qt=e=>{Be(Dr(e.target.value)),Wt()},Jt=()=>{let e=Fe.trim().toLowerCase(),t=Le.trim(),n=Er(ze);return!e&&!t?`Email address or School ID is required.`:e&&t?`Use either email address or School ID, not both.`:e&&!wr(e)?`Please enter a valid email address.`:t&&!Tr(t)?`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`:n?kr(n)?``:`Please enter a valid phone number. Example: 09123456789 or +639123456789.`:`Phone number is required.`};return(0,V.jsxs)(`div`,{className:`landing-page`,children:[(0,V.jsx)(`style`,{children:Hr}),(0,V.jsxs)(`header`,{className:`landing-header`,children:[(0,V.jsxs)(`div`,{className:`brand-lockup`,children:[(0,V.jsx)(`div`,{className:`brand-mark`,children:(0,V.jsx)(`img`,{alt:`IBACMI`,className:`brand-mark__image`,src:Pn})}),(0,V.jsx)(`div`,{className:`brand-copy`,children:(0,V.jsx)(`p`,{className:`brand-title`,children:`IBACMI - Scholarship Office`})})]}),(0,V.jsxs)(`div`,{className:`header-actions`,children:[(0,V.jsx)(`button`,{className:`button button--compact`,onClick:xt,type:`button`,children:`SUPPORT`}),(0,V.jsx)(`button`,{className:`button button--compact button--admin`,onClick:jt,type:`button`,children:`SIGN IN`})]})]}),(0,V.jsx)(`main`,{className:`landing-main`,children:(0,V.jsxs)(`div`,{className:`landing-container`,children:[(0,V.jsx)(`section`,{className:`page-heading`,children:(0,V.jsxs)(`div`,{className:`page-heading__copy`,children:[(0,V.jsx)(`span`,{className:`eyebrow`,children:`Grantee Records`}),(0,V.jsxs)(`h2`,{className:`landing-office-title`,children:[(0,V.jsx)(`span`,{className:`landing-office-title__school`,children:`IBACMI`}),(0,V.jsx)(`span`,{className:`landing-office-title__separator`,"aria-hidden":`true`,children:`—`}),(0,V.jsx)(`span`,{className:`landing-office-title__office`,children:`Scholarship Office`})]})]})}),(0,V.jsxs)(`section`,{className:`filter-panel`,"aria-label":`Grantee filters`,children:[(0,V.jsxs)(`div`,{className:`search-field`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,V.jsx)(`input`,{placeholder:`Enter School ID, Either Batch No., or Last Name...`,type:`text`,value:me,onChange:Ht})]}),(0,V.jsxs)(`button`,{className:`icon-button filter-button`,type:`button`,"aria-label":`Clear search`,title:`Clear search`,onClick:Vt,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`restart_alt`}),(0,V.jsx)(`span`,{className:`filter-button__text`,children:`Reset`})]})]}),!dt&&(0,V.jsxs)(`section`,{className:`scholarship-showcase`,"aria-labelledby":`scholarship-showcase-title`,children:[(0,V.jsxs)(`div`,{className:`scholarship-showcase__heading`,children:[(0,V.jsx)(`div`,{children:(0,V.jsx)(`span`,{className:`eyebrow`,children:`Scholarship Office`})}),(0,V.jsxs)(`span`,{className:`scholarship-showcase__status`,children:[(0,V.jsx)(`span`,{"aria-hidden":`true`}),`Official Information`]})]}),(0,V.jsxs)(`a`,{className:`scholarship-showcase__image-link`,href:`/IBACMI-Scholarship-Office/assets/desktop-Di8cTPxJ.png`,rel:`noreferrer`,target:`_blank`,title:`Open the Scholarship Office banner in full size`,children:[(0,V.jsx)(`img`,{alt:`IBACMI Scholarship Office banner featuring the scholarship coordinator and students assistant`,decoding:`async`,src:`/IBACMI-Scholarship-Office/assets/desktop-Di8cTPxJ.png`}),(0,V.jsxs)(`span`,{className:`scholarship-showcase__view`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`open_in_full`}),`View full banner`]})]})]}),dt&&(0,V.jsxs)(`section`,{className:`table-card`,"aria-label":`Filtered grantee records`,children:[(0,V.jsx)(`div`,{className:`table-scroll`,children:(0,V.jsxs)(`table`,{children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`No.`}),(0,V.jsx)(`th`,{children:`TES Award Number`}),(0,V.jsx)(`th`,{children:`Student ID`}),(0,V.jsx)(`th`,{children:`Last Name`}),(0,V.jsx)(`th`,{children:`First Name`}),(0,V.jsx)(`th`,{children:`Middle Name`}),(0,V.jsx)(`th`,{children:`Batch No.`}),(0,V.jsx)(`th`,{children:`Status`}),(0,V.jsx)(`th`,{children:`Semester`}),(0,V.jsx)(`th`,{children:`School Year`})]})}),(0,V.jsxs)(`tbody`,{children:[ct===void 0&&N&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`Searching grantee record...`})}),ct&&mt.length===0&&(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`No matching School ID, Batch No./ID, or name found.`})}),yt.map((e,t)=>(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{"data-label":`No.`,children:e.no||_t+t+1}),(0,V.jsx)(`td`,{className:`award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,V.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,V.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`â€”`}),(0,V.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`â€”`}),(0,V.jsx)(`td`,{"data-label":`Middle Name`,children:e.middleName||e.middleInitial||`â€”`}),(0,V.jsx)(`td`,{className:`batch-cell`,"data-label":`Batch ID`,children:e.batchId}),(0,V.jsx)(`td`,{"data-label":`Status`,children:(0,V.jsx)(xr,{status:e.status,tone:Sr(e.status)})}),(0,V.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,V.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`})]},e._id))]})]})}),(0,V.jsxs)(`div`,{className:`table-footer`,children:[(0,V.jsxs)(`p`,{children:[`Showing `,(0,V.jsx)(`strong`,{children:ht===0?0:_t+1}),` to`,` `,(0,V.jsx)(`strong`,{children:vt}),` of `,(0,V.jsx)(`strong`,{children:ht}),` result`,ht===1?``:`s`]}),(0,V.jsxs)(`div`,{className:`pagination`,children:[(0,V.jsx)(`button`,{className:`page-button`,disabled:M===1||ht===0,onClick:zt,type:`button`,"aria-label":`Previous page`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),bt.map(e=>typeof e==`string`?(0,V.jsx)(`span`,{className:`pagination__ellipsis`,children:`...`},e):(0,V.jsx)(`button`,{className:`page-button ${M===e?`page-button--active`:``}`,disabled:ht===0,onClick:()=>pe(e),type:`button`,children:e},e)),(0,V.jsx)(`button`,{className:`page-button`,disabled:M===gt||ht===0,onClick:Bt,type:`button`,"aria-label":`Next page`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]}),(0,V.jsxs)(`section`,{className:`portal-cta`,"aria-labelledby":`portal-cta-title`,children:[(0,V.jsx)(`div`,{className:`portal-cta__icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`assignment`})}),(0,V.jsxs)(`div`,{className:`portal-cta__copy`,children:[(0,V.jsx)(`span`,{className:`eyebrow`,children:`Unified Student Financial Assistance System for Tertiary Education`}),(0,V.jsx)(`h3`,{id:`portal-cta-title`,children:`UNIFAST APPLICATION`}),(0,V.jsx)(`p`,{children:`Complete the student, parent, address, and contact information form for UNIFAST applicant processing.`})]}),(0,V.jsxs)(`button`,{"aria-label":ft?`Checking UNIFAST portal status`:pt?`UNIFAST portal is open. Open application form`:`UNIFAST portal is closed`,className:`button button--portal ${ft?`button--portal-loading`:pt?`button--portal-open`:`button--portal-closed`}`,disabled:ft,onClick:Ct,type:`button`,children:[(0,V.jsx)(`span`,{className:`portal-status-dot`,"aria-hidden":`true`}),ft?`CHECKING PORTAL`:pt?`PORTAL OPEN`:`PORTAL IS CLOSED`]})]})]})}),(0,V.jsx)(`footer`,{className:`landing-footer`,children:(0,V.jsx)(`p`,{children:`Copyright 2026 | All Rights Reserved IBACMI - Scholarship Office | Developed By CINIFIX`})}),s&&(0,V.jsxs)(`div`,{"aria-labelledby":`unifast-portal-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal modal`,className:`modal-backdrop-button`,onClick:wt,type:`button`}),(0,V.jsxs)(`form`,{className:`modal-card portal-modal-card`,ref:n,onSubmit:Dt,children:[(0,V.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,V.jsxs)(`div`,{className:`modal-title-row`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,V.jsx)(`h3`,{id:`unifast-portal-title`,children:`Student Information Form`}),(0,V.jsxs)(`p`,{children:[`Complete the student, parent, and contact information fields below`,lt?.applicationYear?` for ${lt.applicationYear}.`:`.`]})]}),(0,V.jsx)(`button`,{"aria-label":`Close UNIFAST portal`,className:`icon-button modal-close`,onClick:wt,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,V.jsxs)(`div`,{className:`modal-body portal-form${k?` portal-form--hidden`:``}`,children:[(0,V.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-student-heading`,children:[(0,V.jsx)(`h4`,{id:`portal-student-heading`,children:`Student Information`}),(0,V.jsxs)(`div`,{className:`portal-grid`,children:[Ir.map(e=>(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:`text`})]},e.name)),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Gender`}),(0,V.jsxs)(`select`,{name:`gender`,defaultValue:``,required:!0,children:[(0,V.jsx)(`option`,{value:``,disabled:!0,children:`Select gender`}),(0,V.jsx)(`option`,{value:`Female`,children:`Female`}),(0,V.jsx)(`option`,{value:`Male`,children:`Male`}),(0,V.jsx)(`option`,{value:`Prefer not to say`,children:`Prefer not to say`})]})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Birth Date`}),(0,V.jsx)(`input`,{name:`birthDate`,required:!0,type:`date`})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Year`}),(0,V.jsxs)(`select`,{name:`year`,defaultValue:``,required:!0,children:[(0,V.jsx)(`option`,{value:``,disabled:!0,children:`Select year`}),(0,V.jsx)(`option`,{value:`1st Year`,children:`1st Year`}),(0,V.jsx)(`option`,{value:`2nd Year`,children:`2nd Year`}),(0,V.jsx)(`option`,{value:`3rd Year`,children:`3rd Year`}),(0,V.jsx)(`option`,{value:`4th Year`,children:`4th Year`}),(0,V.jsx)(`option`,{value:`5th Year`,children:`5th Year`})]})]}),(0,V.jsxs)(`fieldset`,{className:`portal-course-list`,children:[(0,V.jsx)(`legend`,{children:`Course`}),zr.map(e=>(0,V.jsxs)(`label`,{className:`portal-course-option`,children:[(0,V.jsx)(`input`,{name:`course`,required:!0,type:`radio`,value:e}),(0,V.jsx)(`span`,{children:e})]},e))]})]})]}),(0,V.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-parents-heading`,children:[(0,V.jsx)(`h4`,{id:`portal-parents-heading`,children:`Parents Information`}),(0,V.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,V.jsx)(`p`,{children:`Father Information`}),(0,V.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:Lr.map(e=>(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter father's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]}),(0,V.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,V.jsx)(`p`,{children:`Mother Information`}),(0,V.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:Rr.map(e=>(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter mother's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]})]}),(0,V.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-contact-heading`,children:[(0,V.jsx)(`h4`,{id:`portal-contact-heading`,children:`Address and Contact Information`}),(0,V.jsx)(`div`,{className:`portal-grid`,children:Br.map(e=>(0,V.jsxs)(`label`,{className:`form-field ${e.className??``}`.trim(),children:[(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(`input`,{autoComplete:e.autoComplete,inputMode:e.inputMode,name:e.name,onInput:e.name===`mobileNumber`?Ut:void 0,pattern:e.pattern,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:e.type??`text`})]},e.name))})]}),(0,V.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-documents-heading`,children:[(0,V.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,V.jsx)(`h4`,{id:`portal-documents-heading`,children:`Document Requirements`}),(0,V.jsx)(`p`,{children:`Upload clear PDF copies up to 5MB each. Required and optional documents are labeled below.`})]}),(0,V.jsxs)(`div`,{className:`portal-document-grid`,children:[(0,V.jsxs)(`label`,{className:`portal-document-upload${D.psaFile?` portal-document-upload--selected`:``}`,children:[(0,V.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`psaFile`,onChange:Et,required:!0,type:`file`}),(0,V.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`})}),(0,V.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,V.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,V.jsx)(`strong`,{children:`PSA Birth Certificate`}),(0,V.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,V.jsx)(`span`,{children:D.psaFile?`${D.psaFile.name} (${Nr(D.psaFile.size)})`:`Select PSA PDF file`})]})]}),(0,V.jsxs)(`label`,{className:`portal-document-upload${D.schoolIdFile?` portal-document-upload--selected`:``}`,children:[(0,V.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`schoolIdFile`,onChange:Et,required:!0,type:`file`}),(0,V.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`})}),(0,V.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,V.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,V.jsx)(`strong`,{children:`Colored School ID Photocopy`}),(0,V.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,V.jsx)(`span`,{children:D.schoolIdFile?`${D.schoolIdFile.name} (${Nr(D.schoolIdFile.size)})`:`Select colored School ID photocopy PDF`})]})]}),(0,V.jsxs)(`label`,{className:`portal-document-upload${D.corFile?` portal-document-upload--selected`:``}`,children:[(0,V.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`corFile`,onChange:Et,required:!0,type:`file`}),(0,V.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`description`})}),(0,V.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,V.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,V.jsx)(`strong`,{children:`COR / Study Load`}),(0,V.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,V.jsx)(`span`,{children:D.corFile?`${D.corFile.name} (${Nr(D.corFile.size)})`:`Select COR or Study Load PDF file`})]})]}),(0,V.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${D.pwdIdFile?` portal-document-upload--selected`:``}`,children:[(0,V.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`pwdIdFile`,onChange:Et,type:`file`}),(0,V.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`})}),(0,V.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,V.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,V.jsx)(`strong`,{children:`PWD ID`}),(0,V.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,V.jsx)(`span`,{children:D.pwdIdFile?`${D.pwdIdFile.name} (${Nr(D.pwdIdFile.size)})`:`Attach a clear PWD ID PDF, if applicable`})]})]}),(0,V.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${D.fourPsFile?` portal-document-upload--selected`:``}`,children:[(0,V.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`fourPsFile`,onChange:Et,type:`file`}),(0,V.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`})}),(0,V.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,V.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,V.jsx)(`strong`,{children:`4Ps ID`}),(0,V.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,V.jsx)(`span`,{children:D.fourPsFile?`${D.fourPsFile.name} (${Nr(D.fourPsFile.size)})`:`Attach a clear 4Ps ID PDF, if applicable`})]})]})]})]})]}),k&&(0,V.jsx)(`div`,{className:`modal-body portal-review`,children:(0,V.jsxs)(`section`,{className:`portal-review-card`,"aria-labelledby":`portal-review-heading`,children:[(0,V.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,V.jsx)(`h4`,{id:`portal-review-heading`,children:`Review Information`}),(0,V.jsx)(`p`,{children:`Please check every detail before final submission.`})]}),(0,V.jsxs)(`div`,{className:`portal-review-grid`,children:[(0,V.jsxs)(`div`,{className:`portal-review-group`,children:[(0,V.jsx)(`h5`,{children:`Student Information`}),(0,V.jsxs)(`dl`,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Student ID`}),(0,V.jsx)(`dd`,{children:k.studentId})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Full Name`}),(0,V.jsx)(`dd`,{children:[k.firstName,k.middleName,k.lastName,k.extensionName].filter(Boolean).join(` `)})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Gender`}),(0,V.jsx)(`dd`,{children:k.gender})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Birth Date`}),(0,V.jsx)(`dd`,{children:k.birthDate})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Year`}),(0,V.jsx)(`dd`,{children:k.year})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Course`}),(0,V.jsx)(`dd`,{children:k.course})]})]})]}),(0,V.jsxs)(`div`,{className:`portal-review-group`,children:[(0,V.jsx)(`h5`,{children:`Parents Information`}),(0,V.jsxs)(`dl`,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Father`}),(0,V.jsx)(`dd`,{children:[k.fatherFirstName,k.fatherMiddleName,k.fatherLastName].filter(Boolean).join(` `)||`Not provided`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Mother`}),(0,V.jsx)(`dd`,{children:[k.motherFirstName,k.motherMiddleName,k.motherLastName].filter(Boolean).join(` `)||`Not provided`})]})]})]}),(0,V.jsxs)(`div`,{className:`portal-review-group`,children:[(0,V.jsx)(`h5`,{children:`Address and Contact`}),(0,V.jsxs)(`dl`,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Address`}),(0,V.jsx)(`dd`,{children:k.address})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Zip Code`}),(0,V.jsx)(`dd`,{children:k.zipCode||`Not provided`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`PWD ID`}),(0,V.jsx)(`dd`,{children:k.pwdId||`Not provided`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Mobile No.`}),(0,V.jsx)(`dd`,{children:k.mobileNumber})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`Email Address`}),(0,V.jsx)(`dd`,{children:k.emailAddress})]})]})]}),(0,V.jsxs)(`div`,{className:`portal-review-group`,children:[(0,V.jsx)(`h5`,{children:`Documents`}),(0,V.jsxs)(`dl`,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`PSA Birth Certificate`}),(0,V.jsxs)(`dd`,{children:[k.psaFile.name,` (`,Nr(k.psaFile.size),`)`]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`School ID Photocopy`}),(0,V.jsxs)(`dd`,{children:[k.schoolIdFile.name,` (`,Nr(k.schoolIdFile.size),`)`]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`COR / Study Load`}),(0,V.jsxs)(`dd`,{children:[k.corFile.name,` (`,Nr(k.corFile.size),`)`]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`PWD ID (Optional)`}),(0,V.jsx)(`dd`,{children:k.pwdIdFile?`${k.pwdIdFile.name} (${Nr(k.pwdIdFile.size)})`:`Not provided`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{children:`4Ps ID (Optional)`}),(0,V.jsx)(`dd`,{children:k.fourPsFile?`${k.fourPsFile.name} (${Nr(k.fourPsFile.size)})`:`Not provided`})]})]})]})]})]})}),(te||ne)&&(0,V.jsxs)(`div`,{className:`portal-message-row`,children:[te&&(0,V.jsx)(`p`,{className:`form-error`,children:te}),ne&&(0,V.jsx)(`p`,{className:`form-success`,children:ne})]}),(0,V.jsx)(`div`,{className:`modal-actions portal-actions`,children:k?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:j,onClick:Ot,type:`button`,children:`Edit Information`}),(0,V.jsx)(`button`,{className:`button`,disabled:j,onClick:kt,type:`button`,children:`Submit Information`})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:j,onClick:wt,type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`button`,disabled:j,type:`submit`,children:`Review Information`})]})})]})]}),_&&(0,V.jsxs)(`div`,{"aria-labelledby":`portal-privacy-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Return to application review`,className:`modal-backdrop-button`,disabled:j,onClick:()=>v(!1),type:`button`}),(0,V.jsxs)(`section`,{className:`modal-card portal-privacy-card`,children:[(0,V.jsxs)(`div`,{className:`success-modal-body`,children:[(0,V.jsx)(`div`,{className:`portal-privacy-icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`privacy_tip`})}),(0,V.jsx)(`p`,{className:`modal-kicker`,children:`Data Privacy Notice`}),(0,V.jsx)(`h3`,{id:`portal-privacy-title`,children:`Your Privacy Matters`}),(0,V.jsx)(`p`,{children:`I understand that the personal information I provide will be collected, stored, and processed by the Scholarship Office solely for scholarship administration, verification, monitoring, and related educational purposes. I am informed that my data will be kept confidential and protected in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173), and will only be accessed by authorized personnel when necessary.`})]}),(0,V.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,V.jsx)(`button`,{className:`button`,disabled:j,onClick:At,type:`button`,children:j?`Submitting...`:`I UNDERSTAND`})})]})]}),y&&(0,V.jsxs)(`div`,{"aria-labelledby":`portal-submission-success-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close application success modal`,className:`modal-backdrop-button`,onClick:()=>b(!1),type:`button`}),(0,V.jsxs)(`section`,{className:`modal-card modal-card--success`,children:[(0,V.jsxs)(`div`,{className:`success-modal-body`,children:[(0,V.jsx)(`div`,{className:`success-icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,V.jsx)(`h3`,{id:`portal-submission-success-title`,children:`Application Submitted Successfully`}),(0,V.jsxs)(`p`,{children:[`Please wait for the UNIFAST results. You will be notified through the Facebook page, `,(0,V.jsx)(`strong`,{children:`Iba College of Mindanao Inc. - Scholarship Office`}),`.`]})]}),(0,V.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,V.jsx)(`button`,{className:`button`,onClick:()=>b(!1),type:`button`,children:`Done`})})]})]}),ie&&(0,V.jsxs)(`div`,{"aria-labelledby":`portal-status-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close portal status modal`,className:`modal-backdrop-button`,onClick:()=>ae(``),type:`button`}),(0,V.jsxs)(`section`,{className:`modal-card portal-status-card`,children:[(0,V.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,V.jsxs)(`div`,{className:`modal-title-row`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{id:`portal-status-title`,children:`Portal Status`}),(0,V.jsx)(`p`,{children:ie})]}),(0,V.jsx)(`button`,{"aria-label":`Close portal status`,className:`icon-button modal-close`,onClick:()=>ae(``),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,V.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,V.jsx)(`button`,{className:`button`,onClick:()=>ae(``),type:`button`,children:`OK`})})]})]}),a&&(0,V.jsxs)(`div`,{"aria-labelledby":`quick-actions-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close quick actions modal`,className:`modal-backdrop-button`,onClick:St,type:`button`}),(0,V.jsxs)(`form`,{className:`modal-card modal-card--wide auth-modal-card`,onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=String(n.get(`email`)||``).trim().toLowerCase(),i=String(n.get(`studentId`)||``).trim(),a=String(n.get(`lastName`)||``).trim(),s=String(n.get(`firstName`)||``).trim(),c=String(n.get(`middleInitial`)||``).trim(),l=Or(String(n.get(`question`)||``)).trim();w(``),T(``),A(!0);try{if(!wr(r))throw Error(`Please enter a valid email account.`);if(!Tr(i))throw Error(`Please enter a valid Student ID.`);if(!a||!s)throw Error(`Last name and first name are required.`);if(c&&!/^[A-Za-z. -]{1,10}$/.test(c))throw Error(`Please enter a valid middle initial.`);if(!l)throw Error(`Please enter your question or request.`);if(l.length>500)throw Error(`Your question must be 500 characters or fewer.`);await rt({email:r,studentId:i,lastName:a,firstName:s,middleInitial:c,question:l,source:br.quickActions.source,status:br.quickActions.defaultStatus}),t.reset(),o(!1),T(`Your request has been submitted.`)}catch(e){w(e instanceof Error?e.message:`Unable to submit your request right now.`)}finally{A(!1)}},children:[(0,V.jsxs)(`div`,{className:`modal-header`,children:[(0,V.jsxs)(`div`,{className:`modal-title-row`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`modal-kicker`,children:`Quick Actions`}),(0,V.jsx)(`h3`,{id:`quick-actions-title`,children:`Submit a Request`})]}),(0,V.jsx)(`button`,{"aria-label":`Close modal`,className:`icon-button modal-close`,onClick:St,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,V.jsx)(`p`,{children:`Send a question or request to the scholarship office for review.`})]}),(0,V.jsxs)(`div`,{className:`modal-body quick-action-form-grid`,children:[(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Student ID`}),(0,V.jsx)(`input`,{autoComplete:`off`,name:`studentId`,placeholder:`Enter Student ID`,required:!0})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Email account`}),(0,V.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`email`,placeholder:br.quickActions.fields.email.placeholder,required:!0,type:`email`})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Last name`}),(0,V.jsx)(`input`,{autoComplete:`family-name`,name:`lastName`,placeholder:`Enter last name`,required:!0})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`First name`}),(0,V.jsx)(`input`,{autoComplete:`given-name`,name:`firstName`,placeholder:`Enter first name`,required:!0})]}),(0,V.jsxs)(`label`,{className:`form-field quick-action-mi-field`,children:[(0,V.jsx)(`span`,{children:`MI`}),(0,V.jsx)(`input`,{autoComplete:`additional-name`,maxLength:10,name:`middleInitial`,placeholder:`M`})]}),(0,V.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,V.jsx)(`span`,{children:`Question`}),(0,V.jsx)(`textarea`,{"aria-describedby":`quick-action-question-help`,maxLength:500,name:`question`,onInput:e=>{e.currentTarget.value=Or(e.currentTarget.value)},placeholder:br.quickActions.fields.question.placeholder,required:!0,rows:4}),(0,V.jsx)(`small`,{className:`form-field__help`,id:`quick-action-question-help`,children:`One paragraph only, up to 500 characters.`})]}),C&&(0,V.jsx)(`p`,{className:`form-error auth-full-field`,children:C})]}),(0,V.jsxs)(`div`,{className:`modal-actions`,children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:le,onClick:St,type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`button`,disabled:le,type:`submit`,children:le?`Submitting...`:`Submit`})]})]})]}),l&&(0,V.jsxs)(`div`,{"aria-labelledby":`admin-login-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close admin login modal`,className:`modal-backdrop-button`,onClick:Mt,type:`button`}),(0,V.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card`,onSubmit:async t=>{t.preventDefault();let n=_e.trim(),r=ye,i=n.includes(`@`),a=i?n.toLowerCase():``,o=i?``:n;if(S(``),!n){S(`Enter your official registered email address or School ID.`);return}if(i&&!wr(a)){S(`Please enter a valid registered email address.`);return}if(!i&&!Tr(o)){S(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(!r){S(`Password is required.`);return}if(!Pr(r)){S(`Password must be at least 6 characters.`);return}let s={password:r,...i?{email:a}:{schoolId:o}};ce(!0);try{let t=await Fr(it(s),15e3,`Login is taking too long. Please check your internet connection is running, then try again.`);if(!t.success){S(t.message||`Invalid admin credentials.`);return}u(!1),typeof e==`function`&&e(t.admin)}catch(e){S(e instanceof Error?e.message:`Unable to login right now.`)}finally{ce(!1)}},children:[(0,V.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,V.jsx)(`div`,{className:`admin-login-brand`,children:(0,V.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,V.jsx)(`button`,{"aria-label":`Close admin login`,className:`icon-button modal-close admin-login-close`,onClick:Mt,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,V.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,V.jsx)(`h3`,{id:`admin-login-title`,children:`Sign in`})]}),(0,V.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,V.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,V.jsx)(`span`,{children:`Official Registered Email or School ID`}),(0,V.jsx)(`input`,{autoCapitalize:`none`,autoComplete:`username`,maxLength:254,name:`adminIdentifier`,placeholder:`Enter your official registered email or School ID`,required:!0,spellCheck:!1,type:`text`,value:_e,onChange:e=>ve(e.target.value)})]}),(0,V.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,V.jsx)(`span`,{children:`Password`}),(0,V.jsx)(`input`,{autoComplete:`current-password`,name:`adminPassword`,placeholder:`Enter password`,required:!0,type:`password`,minLength:6,value:ye,onChange:e=>be(e.target.value)})]}),(0,V.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`info`}),(0,V.jsx)(`p`,{children:`Enter either your official registered email address or your School ID. Your password is still required.`})]}),(0,V.jsxs)(`div`,{className:`auth-link-row auth-full-field`,children:[(0,V.jsx)(`button`,{className:`auth-text-button`,disabled:se,onClick:Lt,type:`button`,children:`Forgot Password?`}),(0,V.jsx)(`button`,{className:`auth-text-button auth-text-button--strong`,disabled:se,onClick:Nt,type:`button`,children:`Create Account`})]}),x&&(0,V.jsx)(`p`,{className:`form-error auth-full-field`,children:x})]}),(0,V.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:se,onClick:Mt,type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`button`,disabled:se,type:`submit`,children:se?`Logging in...`:`Login`})]})]})]}),p&&(0,V.jsxs)(`div`,{"aria-labelledby":`sign-up-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close sign up modal`,className:`modal-backdrop-button`,onClick:Pt,type:`button`}),(0,V.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=xe.trim().toLowerCase(),n=Ce.trim(),r=Er(Te),i=De,a=Oe;if(F(``),Me(``),!t){F(`Email account is required.`);return}if(!wr(t)){F(`Please enter a valid email account.`);return}if(!n){F(`School ID is required.`);return}if(!Tr(n)){F(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(!r){F(`Phone number is required.`);return}if(!kr(r)){F(`Please enter a valid phone number. Example: 09123456789 or +639123456789.`);return}if(!i){F(`Password is required.`);return}if(!Pr(i)){F(`Password must be at least 6 characters.`);return}if(!a){F(`Confirm password is required.`);return}if(i!==a){F(`Password and confirm password do not match.`);return}fe(!0);try{let e=await at({email:t,schoolId:n,phoneNumber:r,password:i});if(!e.success){if(e.reason===`schoolIdNotFound`){m(!1),g(!0);return}F(e.message||`Unable to register account.`);return}m(!1),Pe(e.admin??{email:t,schoolId:n,role:`student`}),Me(`Your account has been registered successfully.`),ve(t||n),be(``),Ee(``),P(``),ke(``)}catch(e){F(e instanceof Error?e.message:`Unable to register account.`)}finally{fe(!1)}},children:[(0,V.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,V.jsx)(`div`,{className:`admin-login-brand`,children:(0,V.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,V.jsx)(`button`,{"aria-label":`Close sign up`,className:`icon-button modal-close admin-login-close`,onClick:Pt,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,V.jsx)(`p`,{className:`modal-kicker`,children:`Account Registration`}),(0,V.jsx)(`h3`,{id:`sign-up-title`,children:`Create Account`}),(0,V.jsx)(`p`,{children:`Registration is only available for verified School IDs listed in the IBACMI Scholarship Office records.`})]}),(0,V.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Email account`}),(0,V.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`signUpEmail`,placeholder:`Enter email account`,required:!0,type:`email`,value:xe,onChange:e=>Se(e.target.value)})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`School ID`}),(0,V.jsx)(`input`,{autoComplete:`off`,name:`signUpSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,value:Ce,onChange:e=>we(e.target.value)})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Phone Number`}),(0,V.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`signUpPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`e.g. 09123456789`,required:!0,type:`tel`,value:Te,onChange:e=>Ee(Dr(e.target.value))})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Password`}),(0,V.jsx)(`input`,{autoComplete:`new-password`,name:`signUpPassword`,placeholder:`Create password`,required:!0,type:`password`,minLength:6,value:De,onChange:e=>P(e.target.value)})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Confirm Password`}),(0,V.jsx)(`input`,{autoComplete:`new-password`,name:`signUpConfirmPassword`,placeholder:`Confirm password`,required:!0,type:`password`,minLength:6,value:Oe,onChange:e=>ke(e.target.value)})]}),(0,V.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`verified_user`}),(0,V.jsx)(`p`,{children:`Your School ID will be checked against the official grantee information record before account creation.`})]}),Ae&&(0,V.jsx)(`p`,{className:`form-error auth-full-field`,children:Ae}),je&&(0,V.jsx)(`p`,{className:`form-success auth-full-field`,children:je})]}),(0,V.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:de,onClick:Ft,type:`button`,children:`Back to Login`}),(0,V.jsx)(`button`,{className:`button`,disabled:de,type:`submit`,children:de?`Registering...`:`Register Now`})]})]})]}),h&&(0,V.jsxs)(`div`,{"aria-labelledby":`sign-up-denied-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close sign up denied modal`,className:`modal-backdrop-button`,onClick:It,type:`button`}),(0,V.jsxs)(`section`,{className:`modal-card modal-card--success auth-modal-card auth-denied-card`,children:[(0,V.jsxs)(`div`,{className:`success-modal-body auth-denied-body`,children:[(0,V.jsx)(`div`,{className:`auth-denied-icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`error`})}),(0,V.jsx)(`h3`,{id:`sign-up-denied-title`,children:`Account Registration Not Approved`}),(0,V.jsx)(`p`,{children:`Sorry, you cannot proceed. Your School ID was not found in the official records. Please contact the IBACMI | Scholarship Office for assistance.`})]}),(0,V.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,V.jsx)(`button`,{className:`button`,onClick:It,type:`button`,children:`Back to Sign Up`})})]})]}),je&&(0,V.jsxs)(`div`,{"aria-labelledby":`sign-up-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Continue to student page`,className:`modal-backdrop-button`,onClick:L,type:`button`}),(0,V.jsxs)(`section`,{className:`modal-card modal-card--success auth-modal-card`,children:[(0,V.jsxs)(`div`,{className:`success-modal-body`,children:[(0,V.jsx)(`div`,{className:`success-icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,V.jsx)(`h3`,{id:`sign-up-success-title`,children:`Successfully Registered`}),(0,V.jsxs)(`p`,{children:[je,` You can now continue to the student information page.`]})]}),(0,V.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,V.jsx)(`button`,{className:`button`,onClick:L,type:`button`,children:`Continue`})})]})]}),d&&(0,V.jsxs)(`div`,{"aria-labelledby":`forgot-password-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close forgot password modal`,className:`modal-backdrop-button`,onClick:Rt,type:`button`}),(0,V.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=Jt(),n=Fe.trim().toLowerCase(),r=Le.trim(),i=Er(ze),a=Ve.trim(),o=Ue,s=Ge;if(I(``),Ye(``),t){I(t);return}if(!Xe){I(`Please request an OTP first.`);return}if(!a){I(`OTP is required.`);return}if(!/^\d{4,8}$/.test(a)){I(`OTP must be 4 to 8 digits.`);return}if(!o){I(`New password is required.`);return}if(!Pr(o)){I(`New password must be at least 6 characters.`);return}if(!s){I(`Confirm password is required.`);return}if(o!==s){I(`New password and confirm password do not match.`);return}tt(!0);try{let e=await st({email:n||void 0,schoolId:r||void 0,phoneNumber:i,otp:a,newPassword:o});if(!e.success){I(e.message||`Unable to change password.`);return}Ye(e.message||`Password changed successfully.`),He(``),We(``),Ke(``),Ze(!1),ve(n||r),be(``)}catch(e){I(e instanceof Error?e.message:`Unable to change password right now.`)}finally{tt(!1)}},children:[(0,V.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,V.jsx)(`div`,{className:`admin-login-brand`,children:(0,V.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,V.jsx)(`button`,{"aria-label":`Close forgot password`,className:`icon-button modal-close admin-login-close`,onClick:Rt,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,V.jsx)(`p`,{className:`modal-kicker`,children:`Account Recovery`}),(0,V.jsx)(`h3`,{id:`forgot-password-title`,children:`Forgot Password`}),(0,V.jsx)(`p`,{children:`Verify your email or School ID with your registered phone number before changing your password.`})]}),(0,V.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`Email address`}),(0,V.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`forgotEmail`,placeholder:`Enter valid email address`,required:!Le.trim(),type:`email`,disabled:Le.trim().length>0||Qe||et,value:Fe,onChange:Gt})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`School ID`}),(0,V.jsx)(`input`,{autoComplete:`off`,name:`forgotSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,title:`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`,required:!Fe.trim(),disabled:Fe.trim().length>0||Qe||et,value:Le,onChange:Kt})]}),(0,V.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,V.jsx)(`span`,{children:`Phone number`}),(0,V.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`forgotPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`09123456789 or +639123456789`,required:!0,type:`tel`,disabled:Qe||et,value:ze,onChange:qt})]}),(0,V.jsx)(`button`,{className:`button button--secondary auth-full-field`,disabled:Qe||et,onClick:async()=>{let e=Jt();if(I(``),Ye(``),e){I(e);return}let t=Fe.trim().toLowerCase(),n=Le.trim(),r=Er(ze);$e(!0);try{let e=await ot({email:t||void 0,schoolId:n||void 0,phoneNumber:r});if(!e.success){I(e.message||`Unable to send OTP.`);return}Ze(!0),Ye(e.message||`OTP generated successfully. Enter it below to change your password.`)}catch(e){I(e instanceof Error?e.message:`Unable to request OTP right now.`)}finally{$e(!1)}},type:`button`,children:Qe?`Sending OTP...`:Xe?`Resend OTP`:`Send OTP`}),Xe&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`OTP Code`}),(0,V.jsx)(`input`,{autoComplete:`one-time-code`,inputMode:`numeric`,name:`forgotOtp`,placeholder:`Enter OTP`,required:!0,type:`text`,maxLength:8,value:Ve,onChange:e=>He(e.target.value.replace(/\D/g,``))})]}),(0,V.jsxs)(`label`,{className:`form-field`,children:[(0,V.jsx)(`span`,{children:`New Password`}),(0,V.jsx)(`input`,{autoComplete:`new-password`,name:`forgotNewPassword`,placeholder:`Enter new password`,required:!0,type:`password`,minLength:6,value:Ue,onChange:e=>We(e.target.value)})]}),(0,V.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,V.jsx)(`span`,{children:`Confirm New Password`}),(0,V.jsx)(`input`,{autoComplete:`new-password`,name:`forgotConfirmPassword`,placeholder:`Confirm new password`,required:!0,type:`password`,minLength:6,value:Ge,onChange:e=>Ke(e.target.value)})]})]}),qe&&(0,V.jsx)(`p`,{className:`form-error auth-full-field`,children:qe}),Je&&(0,V.jsx)(`p`,{className:`form-success auth-full-field`,children:Je})]}),(0,V.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,V.jsx)(`button`,{className:`button button--secondary`,disabled:Qe||et,onClick:Rt,type:`button`,children:`Cancel`}),(0,V.jsx)(`button`,{className:`button`,disabled:!Xe||Qe||et,type:`submit`,children:et?`Changing Password...`:`Change Password`})]})]})]}),ee&&(0,V.jsxs)(`div`,{"aria-labelledby":`quick-action-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close success modal`,className:`modal-backdrop-button`,onClick:()=>T(``),type:`button`}),(0,V.jsxs)(`div`,{className:`modal-card modal-card--success`,children:[(0,V.jsxs)(`div`,{className:`success-modal-body`,children:[(0,V.jsx)(`div`,{className:`success-icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,V.jsx)(`h3`,{id:`quick-action-success-title`,children:`Submitted Successfully`}),(0,V.jsxs)(`p`,{children:[ee,` The scholarship office can now review your request. Please always check your valid email. The TECH Scholarship Office will notify you when your account is updated.`]})]}),(0,V.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,V.jsx)(`button`,{className:`button`,onClick:()=>T(``),type:`button`,children:`Done`})})]})]}),(0,V.jsx)(`div`,{className:`scroll-progress`,style:{"--scroll-progress":r}})]})}var Hr=`
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
`,Ur=`/IBACMI-Scholarship-Office/assets/samp-wIlKUzMl.jpg`,Wr=`modulepreload`,Gr=function(e){return`/IBACMI-Scholarship-Office/`+e},Kr={},qr=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Gr(t,n),t in Kr)return;Kr[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Wr,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Jr=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``),Yr={tesAwardNo:``,studentId:``,batchNo:``,status:``,semester:``,schoolYear:``};function Xr(e){return[...new Set(e.filter(Boolean))]}function Zr(e){let t=String(e??``).match(/\d{4}/);return t?Number(t[0]):0}function Qr(){let e=new Date,t=e.getFullYear(),n=e.getMonth()>=5?t:t-1;return`${n}-${n+1}`}function $r(e){return e.replace(/[\s-]/g,``).trim()}function ei(e){return e.replace(/[^\d+]/g,``).replace(/(?!^)\+/g,``)}function ti(e){let t=$r(e);return/^09\d{9}$/.test(t)||/^\+639\d{9}$/.test(t)}function ni(e){let t=Qr();return e.find(e=>e.schoolYear===t)||[...e].sort((e,t)=>{let n=Zr(t.schoolYear)-Zr(e.schoolYear);return n===0?(t.uploadedAt??0)-(e.uploadedAt??0):n})[0]}function ri({url:e}){let t=(0,z.useRef)(null),[n,r]=(0,z.useState)(0),[i,a]=(0,z.useState)(``),[o,s]=(0,z.useState)(0);return(0,z.useEffect)(()=>{let e=t.current;if(!e)return;let n=()=>r(Math.floor(e.clientWidth));if(n(),typeof ResizeObserver>`u`)return window.addEventListener(`resize`,n),()=>window.removeEventListener(`resize`,n);let i=new ResizeObserver(n);return i.observe(e),()=>i.disconnect()},[]),(0,z.useEffect)(()=>{let r=t.current;if(!r||!e||!n)return;let i=!1,o,s;return(async()=>{a(``),r.replaceChildren(),r.setAttribute(`aria-busy`,`true`);try{let[{getDocument:t,GlobalWorkerOptions:a},{default:c}]=await Promise.all([qr(()=>import(`./pdf-DTVu1DLs.js`),[]),qr(()=>import(`./pdf.worker.min-D7EoebCV.js`),[])]);if(i)return;a.workerSrc=c;let l=await fetch(e,{mode:`cors`});if(!l.ok)throw Error(`Unable to download PDF (${l.status}).`);let u=new Uint8Array(await l.arrayBuffer());if(i)return;if(!u.length)throw Error(`The uploaded PDF is empty.`);o=t({data:u,disableAutoFetch:!0,disableRange:!0,disableStream:!0});let d=await o.promise;for(let e=1;e<=d.numPages;e+=1){if(i)return;let t=await d.getPage(e),a=n/t.getViewport({scale:1}).width,o=t.getViewport({scale:a}),c=Math.min(window.devicePixelRatio||1,2),l=document.createElement(`canvas`);l.className=`student-id-preview__page`,l.setAttribute(`aria-label`,`Uploaded School ID page ${e}`),l.width=Math.floor(o.width*c),l.height=Math.floor(o.height*c),l.style.width=`${Math.floor(o.width)}px`,l.style.height=`${Math.floor(o.height)}px`,r.appendChild(l),s=t.render({canvas:l,transform:c===1?null:[c,0,0,c,0,0],viewport:o}),await s.promise}}catch(e){!i&&e?.name!==`RenderingCancelledException`&&(console.error(`Unable to render uploaded School ID PDF:`,e),r.replaceChildren(),a(`Preview unavailable, but your file was uploaded successfully.`))}finally{i||r.removeAttribute(`aria-busy`)}})(),()=>{i=!0,s?.cancel(),o?.destroy()}},[n,o,e]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`student-id-preview__pages${i?` student-id-preview__pages--error`:``}`,ref:t,children:(0,V.jsx)(`span`,{className:`student-id-preview__loading`,children:`Loading PDF preview...`})}),i&&(0,V.jsxs)(`div`,{className:`student-id-preview__error`,children:[(0,V.jsx)(`span`,{className:`student-id-preview__status-icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,V.jsxs)(`div`,{className:`student-id-preview__error-copy`,children:[(0,V.jsx)(`strong`,{children:`School ID file is uploaded`}),(0,V.jsx)(`span`,{children:i})]}),(0,V.jsxs)(`div`,{className:`student-id-preview__error-actions`,children:[(0,V.jsx)(`a`,{href:e,rel:`noreferrer`,target:`_blank`,children:`Open file`}),(0,V.jsx)(`button`,{onClick:()=>s(e=>e+1),type:`button`,children:`Retry preview`})]})]})]})}function ii({studentSession:e,onLogout:t,onStudentSessionUpdate:n}){let r=String(e?.schoolId??``).trim(),i=pn(B.allinfo.listByStudentId,r?{studentId:r}:`skip`),a=mn(B.allinfo.saveStudentIdUploads),o=mn(B.adminAuth.updateStudentPhoneNumber),[s,c]=(0,z.useState)(null),[l,u]=(0,z.useState)(``),[d,f]=(0,z.useState)(``),[p,m]=(0,z.useState)(!1),h=(0,z.useRef)(null),[g,_]=(0,z.useState)(e?.phoneNumber??``),[v,y]=(0,z.useState)(``),[b,x]=(0,z.useState)(``),[S,C]=(0,z.useState)(!1),w=mn(B.adminAuth.updateStudentCurrentAddress),[ee,T]=(0,z.useState)(e?.currentAddress??``),[te,E]=(0,z.useState)(``),[ne,re]=(0,z.useState)(``),[ie,ae]=(0,z.useState)(!1),D=mn(B.adminAuth.updateStudentFacebookProfile),[O,k]=(0,z.useState)(e?.facebookProfileUrl??``),[oe,se]=(0,z.useState)(``),[ce,le]=(0,z.useState)(``),[A,j]=(0,z.useState)(!1),ue=r.toLowerCase(),de=e?.phoneNumber??``,fe=$r(g)!==$r(de),M=e?.currentAddress??``,pe=ee.trim()!==M.trim(),me=e?.facebookProfileUrl??``,he=O.trim()!==me.trim(),N=(0,z.useMemo)(()=>!ue||!i?null:ni(i.filter(e=>String(e.studentId??``).trim().toLowerCase()===ue))??null,[i,ue]),ge=N?{tesAwardNo:N.tesAwardNumber??``,studentId:N.studentId??``,lastName:N.lastName??``,firstName:N.firstName??``,middleInitial:N.middleInitial??``,batchNo:N.batchId??``,status:N.status??``,semester:N.semester??``,schoolYear:N.schoolYear??``}:Yr,_e=i===void 0,ve=!!ue,ye=!_e&&ve&&!N,be=Xr([ge.status,`Validated`,`Pending`,`Rejected`]),xe=Xr([ge.semester,`1st Semester`,`2nd Semester`]),Se=Xr([ge.schoolYear,`2023-2024`,`2024-2025`]),Ce=!!(N?.frontIdUrl||N?.frontIdStorageId),we=N?.frontIdUrl??``;(0,z.useEffect)(()=>{if(!d)return;let e=e=>{e.key===`Escape`&&f(``)},t=document.body.style.overflow;return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),h.current?.focus(),()=>{document.body.style.overflow=t,window.removeEventListener(`keydown`,e)}},[d]);let Te=()=>{typeof t==`function`&&t()},Ee=e=>{_(ei(e.target.value)),y(``),x(``)},De=e=>{T(e.target.value),E(``),re(``)},P=e=>{k(e.target.value),se(``),le(``)},Oe=async()=>{let t=O.trim();if(se(``),le(``),!r){se(`Please sign in before updating your Facebook profile link.`);return}let i;try{i=new URL(t)}catch{se(`Enter a valid Facebook profile link.`);return}let a=i.hostname.toLowerCase();if(i.protocol!==`https:`||!(a===`facebook.com`||a.endsWith(`.facebook.com`)||a===`fb.com`||a.endsWith(`.fb.com`))){se(`Use a valid https://facebook.com profile link.`);return}if(!he){le(`Facebook profile link is already up to date.`);return}j(!0);try{let r=await D({schoolId:e.schoolId,facebookProfileUrl:t});if(!r.success){se(r.message||`Unable to update Facebook profile link.`);return}k(r.admin?.facebookProfileUrl??t),le(r.message||`Facebook profile link updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){se(e instanceof Error?e.message:`Unable to update Facebook profile link.`)}finally{j(!1)}},ke=async()=>{let t=$r(g);if(y(``),x(``),!r){y(`Please sign in before updating your phone number.`);return}if(!t){y(`Phone number is required.`);return}if(!ti(t)){y(`Please enter a valid phone number. Example: 09123456789 or +639123456789.`);return}if(!fe){x(`Phone number is already up to date.`);return}C(!0);try{let r=await o({schoolId:e.schoolId,phoneNumber:t});if(!r.success){y(r.message||`Unable to update phone number.`);return}_(r.admin?.phoneNumber??t),x(r.message||`Phone number updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){y(e instanceof Error?e.message:`Unable to update phone number.`)}finally{C(!1)}},Ae=async()=>{let t=ee.trim();if(E(``),re(``),!r){E(`Please sign in before updating your current address.`);return}if(!t){E(`Current address is required.`);return}if(t.length<8){E(`Current address must be at least 8 characters.`);return}if(!pe){re(`Current address is already up to date.`);return}ae(!0);try{let r=await w({schoolId:e.schoolId,currentAddress:t});if(!r.success){E(r.message||`Unable to update current address.`);return}T(r.admin?.currentAddress??t),re(r.message||`Current address updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){E(e instanceof Error?e.message:`Unable to update current address.`)}finally{ae(!1)}},F=e=>t=>{let n=t.target.files?.[0]??null;if(u(``),f(``),n&&n.type!==`application/pdf`&&!/\.pdf$/i.test(n.name)){u(`Only PDF files are allowed.`),t.target.value=``,e(null);return}if(n&&n.size>5*1024*1024){u(`Each file must be 5MB or smaller.`),t.target.value=``,e(null);return}e(n)},je=async e=>{let t=[N.lastName,N.firstName,N.middleInitial].filter(Boolean).join(` `),n=new URLSearchParams({batchNo:N.batchId||`no-batch`,documentType:`School-ID`,fileName:e.name,fullName:t,schoolYear:N.schoolYear||`unknown-school-year`,studentId:N.studentId}),r;try{r=await fetch(`${Jr}/google-drive/student-upload?${n.toString()}`,{method:`POST`,headers:{"Content-Type":e.type||`application/pdf`},body:e})}catch{throw Error(`Unable to connect to the PDF upload service. Deploy the Convex HTTP functions and check VITE_CONVEX_URL or VITE_CONVEX_SITE_URL.`)}if(!r.ok){let t=await r.json().catch(()=>null);throw Error(t?.message||`Unable to upload ${e.name} to Google Drive.`)}let{fileUrl:i}=await r.json();if(!i)throw Error(`Google Drive did not return a file link for ${e.name}.`);return i};return(0,V.jsxs)(`div`,{className:`student-page`,children:[(0,V.jsxs)(`header`,{className:`student-topbar`,children:[(0,V.jsx)(`button`,{"aria-label":`Log out and return to landing page`,className:`student-icon-button`,onClick:Te,type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`arrow_back`})}),(0,V.jsx)(`h1`,{children:`Student Information`})]}),(0,V.jsxs)(`main`,{className:`student-main`,children:[(0,V.jsxs)(`section`,{className:`student-hero`,"aria-labelledby":`student-title`,children:[(0,V.jsx)(`div`,{className:`student-badge`,children:`Academic Year Update`}),(0,V.jsx)(`h2`,{id:`student-title`,children:`Unifast Portal`}),(0,V.jsx)(`p`,{children:`Please ensure all details match your official documents for successful validation.`})]}),!ve&&(0,V.jsx)(`div`,{className:`student-state-box`,children:`Please sign in with a student account to view your grantee information.`}),_e&&(0,V.jsx)(`div`,{className:`student-state-box`,children:`Loading your grantee information...`}),ye&&(0,V.jsxs)(`div`,{className:`student-state-box student-state-box--warning`,children:[`No allinfo record was found for Student ID `,e?.schoolId,`.`]}),(0,V.jsxs)(`form`,{className:`student-form`,id:`student-information-form`,children:[(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`tes-award-no`,children:`TES Award No.`}),(0,V.jsx)(`input`,{id:`tes-award-no`,placeholder:`e.g. TES-2024-XXXX`,readOnly:!0,type:`text`,value:ge.tesAwardNo})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`student-id`,children:`Student ID`}),(0,V.jsx)(`input`,{id:`student-id`,placeholder:`Enter your University ID`,readOnly:!0,type:`text`,value:ge.studentId})]}),(0,V.jsxs)(`div`,{className:`student-field student-field--with-action`,children:[(0,V.jsx)(`label`,{htmlFor:`phone-number`,children:`Phone No.`}),(0,V.jsxs)(`div`,{className:`student-inline-control`,children:[(0,V.jsx)(`input`,{id:`phone-number`,inputMode:`tel`,pattern:`\\+?[0-9]*`,placeholder:`09123456789 or +639123456789`,type:`tel`,value:g,onChange:Ee}),(0,V.jsx)(`button`,{className:`student-inline-button`,disabled:!ve||!fe||S,onClick:ke,type:`button`,children:S?`Saving...`:`Save`})]}),v&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:v}),b&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:b})]}),(0,V.jsxs)(`div`,{className:`student-field student-field--with-action student-field--full`,children:[(0,V.jsx)(`label`,{htmlFor:`current-address`,children:`Current Address`}),(0,V.jsx)(`textarea`,{id:`current-address`,placeholder:`Enter your current address`,rows:3,value:ee,onChange:De}),(0,V.jsx)(`button`,{className:`student-inline-button student-inline-button--wide`,disabled:!ve||!pe||ie,onClick:Ae,type:`button`,children:ie?`Saving Address...`:`Save Current Address`}),te&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:te}),ne&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:ne})]}),(0,V.jsxs)(`div`,{className:`student-field student-field--with-action student-field--full`,children:[(0,V.jsx)(`label`,{htmlFor:`facebook-profile-url`,children:`Facebook Profile Link`}),(0,V.jsxs)(`div`,{className:`student-inline-control`,children:[(0,V.jsx)(`input`,{id:`facebook-profile-url`,inputMode:`url`,onChange:P,placeholder:`https://www.facebook.com/your.profile`,type:`url`,value:O}),(0,V.jsx)(`button`,{className:`student-inline-button`,disabled:!ve||!he||A,onClick:Oe,type:`button`,children:A?`Saving...`:`Save Link`})]}),oe&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:oe}),ce&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:ce})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`last-name`,children:`Last Name`}),(0,V.jsx)(`input`,{id:`last-name`,placeholder:`Last Name`,readOnly:!0,type:`text`,value:ge.lastName})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`first-name`,children:`First Name`}),(0,V.jsx)(`input`,{id:`first-name`,placeholder:`First Name`,readOnly:!0,type:`text`,value:ge.firstName})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`middle-initial`,children:`MI.`}),(0,V.jsx)(`input`,{id:`middle-initial`,placeholder:`MI.`,readOnly:!0,type:`text`,value:ge.middleInitial})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`batch-no`,children:`Batch No.`}),(0,V.jsx)(`input`,{id:`batch-no`,placeholder:`e.g. Batch 7`,readOnly:!0,type:`text`,value:ge.batchNo})]}),(0,V.jsxs)(`div`,{className:`student-select-grid`,children:[(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`status`,children:`Status`}),(0,V.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,V.jsxs)(`select`,{disabled:!0,id:`status`,value:ge.status,children:[(0,V.jsx)(`option`,{disabled:!0,value:``,children:`Select Status`}),be.map(e=>(0,V.jsx)(`option`,{children:e},e))]}),(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`semester`,children:`Semester`}),(0,V.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,V.jsxs)(`select`,{disabled:!0,id:`semester`,value:ge.semester,children:[(0,V.jsx)(`option`,{disabled:!0,value:``,children:`Select Semester`}),xe.map(e=>(0,V.jsx)(`option`,{children:e},e))]}),(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]}),(0,V.jsxs)(`div`,{className:`student-field`,children:[(0,V.jsx)(`label`,{htmlFor:`school-year`,children:`School Year`}),(0,V.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,V.jsxs)(`select`,{disabled:!0,id:`school-year`,value:ge.schoolYear,children:[(0,V.jsx)(`option`,{disabled:!0,value:``,children:`Select School Year`}),Se.map(e=>(0,V.jsx)(`option`,{children:e},e))]}),(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]})]}),(0,V.jsxs)(`section`,{className:`student-upload-section`,"aria-labelledby":`student-upload-title`,children:[(0,V.jsxs)(`div`,{className:`student-upload-copy`,children:[(0,V.jsx)(`h3`,{id:`student-upload-title`,children:`Upload colored copy of School ID with 3 signatures and Batch No.`}),(0,V.jsxs)(`p`,{children:[`Files will be saved to your `,ge.schoolYear||`current`,` allinfo record. If you have records from other years, the portal automatically uses the current or latest School Year.`]})]}),(0,V.jsxs)(`aside`,{className:`student-sample-card`,"aria-label":`Sample School ID upload format`,children:[(0,V.jsxs)(`div`,{className:`student-sample-card__header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{className:`student-sample-card__eyebrow`,children:`Sample Format`}),(0,V.jsx)(`h4`,{children:`Scan layout guide`})]}),(0,V.jsx)(`span`,{className:`student-sample-card__badge`,children:`Required`})]}),(0,V.jsxs)(`div`,{className:`student-sample-card__body`,children:[(0,V.jsx)(`a`,{className:`student-sample-card__image-link`,href:Ur,rel:`noreferrer`,target:`_blank`,title:`Open sample format`,children:(0,V.jsx)(`img`,{alt:`Sample scan format showing front and back School ID, three signatures, and Batch No.`,src:Ur})}),(0,V.jsxs)(`div`,{className:`student-sample-card__checklist`,children:[(0,V.jsx)(`p`,{children:`Before converting to PDF, make sure your scan includes:`}),(0,V.jsxs)(`ul`,{children:[(0,V.jsx)(`li`,{children:`Colored front and back copy of your School ID`}),(0,V.jsx)(`li`,{children:`Three clear signatures below the ID copies`}),(0,V.jsx)(`li`,{children:`Readable Batch No. written on the same page`})]}),(0,V.jsx)(`span`,{children:`Upload the final file as PDF only, maximum 5MB.`})]})]})]}),(0,V.jsxs)(`div`,{className:`student-upload-field`,children:[(0,V.jsx)(`span`,{className:`student-upload-label`,children:`Upload File`}),(0,V.jsxs)(`label`,{className:`student-upload-card${s||Ce?` student-upload-card--selected`:``}`,htmlFor:`file-front`,children:[(0,V.jsx)(`input`,{accept:`application/pdf,.pdf`,disabled:!N||p,id:`file-front`,type:`file`,onChange:F(c)}),(0,V.jsx)(`span`,{className:`student-upload-icon`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`id_card`})}),(0,V.jsx)(`span`,{className:`student-upload-title`,children:s?.name||(Ce?`File already uploaded`:`Tap to upload File`)}),(0,V.jsx)(`span`,{className:`student-upload-note`,children:`PDF only up to 5MB`})]})]}),we&&(0,V.jsxs)(`div`,{className:`student-id-preview`,children:[(0,V.jsxs)(`div`,{className:`student-id-preview__header`,children:[(0,V.jsxs)(`div`,{className:`student-id-preview__title`,children:[(0,V.jsx)(`span`,{className:`student-id-preview__title-icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`task_alt`})}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{children:`Uploaded School ID`}),(0,V.jsx)(`small`,{children:`File received and ready for review`})]})]}),(0,V.jsx)(`a`,{href:we,rel:`noreferrer`,target:`_blank`,children:`View full file`})]}),(0,V.jsx)(ri,{url:we}),(0,V.jsx)(`noscript`,{children:(0,V.jsxs)(`a`,{className:`student-id-preview__file`,href:we,rel:`noreferrer`,target:`_blank`,children:[(0,V.jsx)(`span`,{className:`student-id-preview__file-icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`})}),(0,V.jsx)(`span`,{children:`Open uploaded PDF`})]})})]}),l&&(0,V.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:l}),(0,V.jsxs)(`button`,{className:`student-save-button`,disabled:!N||p,onClick:async()=>{if(u(``),f(``),!N){u(`No allinfo record is available for your Student ID.`);return}if(!s){u(`Choose a PDF file before saving.`);return}m(!0);try{let e=await je(s),t=await a({studentId:N.studentId,schoolYear:N.schoolYear,frontIdUrl:e});c(null),f(`ID file saved for School Year ${t.schoolYear||ge.schoolYear}.`)}catch(e){u(e instanceof Error?e.message:`Unable to save uploaded files.`)}finally{m(!1)}},type:`button`,children:[(0,V.jsx)(`span`,{children:p?`Saving Uploads...`:`Save Uploaded ID`}),(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})]})]})]})]}),d?(0,V.jsxs)(`div`,{"aria-describedby":`student-upload-success-description`,"aria-labelledby":`student-upload-success-title`,"aria-modal":`true`,className:`student-success-modal`,role:`dialog`,children:[(0,V.jsx)(`button`,{"aria-label":`Close upload success message`,className:`student-success-modal__backdrop`,onClick:()=>f(``),type:`button`}),(0,V.jsxs)(`section`,{className:`student-success-modal__card`,children:[(0,V.jsx)(`button`,{"aria-label":`Close`,className:`student-success-modal__close`,onClick:()=>f(``),type:`button`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`close`})}),(0,V.jsx)(`div`,{className:`student-success-modal__icon`,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{className:`material-symbols-outlined`,children:`check`})}),(0,V.jsx)(`span`,{className:`student-success-modal__eyebrow`,children:`Upload complete`}),(0,V.jsx)(`h2`,{id:`student-upload-success-title`,children:`Successfully submitted`}),(0,V.jsxs)(`p`,{id:`student-upload-success-description`,children:[d,` Your document is now available for review.`]}),(0,V.jsx)(`button`,{className:`student-success-modal__action`,onClick:()=>f(``),ref:h,type:`button`,children:`Done`})]})]}):null]})}var ai=class extends z.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error(`ErrorBoundary caught`,e,t)}render(){if(this.state.hasError){let e=this.state.error?.message||`An unexpected error occurred.`;return(0,V.jsx)(`div`,{style:{minHeight:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:24,boxSizing:`border-box`,background:`#fbfaf8`,color:`#1c1b1b`,fontFamily:`'Hanken Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`},children:(0,V.jsxs)(`div`,{style:{maxWidth:720},children:[(0,V.jsx)(`h2`,{style:{marginTop:0},children:`Something went wrong`}),(0,V.jsx)(`p`,{style:{color:`#584237`,fontWeight:700},children:e}),(0,V.jsx)(`p`,{style:{color:`#584237`},children:'If the message mentions Convex functions (for example "Could not find public function"), make sure the Convex dev server is running (`npx convex dev`) or that `VITE_CONVEX_URL` points to a deployed Convex app.'}),(0,V.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:18},children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>window.location.reload(),style:{background:`#ea580c`,color:`#fff`,border:0,padding:`10px 14px`,borderRadius:8,fontWeight:800,cursor:`pointer`},children:`Reload`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>alert("Run `npx convex dev` in the project root or set VITE_CONVEX_URL."),style:{background:`#fff`,color:`#1c1b1b`,border:`1px solid rgba(150,116,101,0.6)`,padding:`10px 14px`,borderRadius:8,fontWeight:700,cursor:`pointer`},children:`Help`})]})]})})}return this.props.children}},oi=`unifast.adminSession`,si=`unifast.studentViewOpen`,ci=`unifast.studentSession`;function li(){try{let e=window.localStorage.getItem(oi);return e?JSON.parse(e):null}catch{return null}}function ui(){try{return window.localStorage.getItem(si)===`true`}catch{return!1}}function di(){try{let e=window.localStorage.getItem(ci);return e?JSON.parse(e):null}catch{return null}}function fi(){let e=(0,Nn.c)(21),[t,n]=(0,z.useState)(li),[r,i]=(0,z.useState)(di),[a,o]=(0,z.useState)(ui),s;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=()=>{n(null)},e[0]=s):s=e[0];let c=s,l;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(l=()=>{i(null),o(!1)},e[1]=l):l=e[1];let u=l,d;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(d=e=>{if(e?.role===`student`){n(null),i(e),o(!0);return}i(null),o(!1),n(e)},e[2]=d):d=e[2];let f=d,p;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(p=e=>{n(null),i(e??null),o(!0)},e[3]=p):p=e[3];let m=p,h;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(h=e=>{i(t=>({...t??{},...e??{}}))},e[4]=h):h=e[4];let g=h,_,v;e[5]===t?(_=e[6],v=e[7]):(_=()=>{if(!t)return;let e=window.location.href,n={...window.history.state??{},unifastAdminGuard:!0};window.history.pushState(n,``,e);let r=()=>{window.history.pushState(n,``,e)};return window.addEventListener(`popstate`,r),()=>window.removeEventListener(`popstate`,r)},v=[t],e[5]=t,e[6]=_,e[7]=v),(0,z.useEffect)(_,v);let y,b;e[8]===t?(y=e[9],b=e[10]):(y=()=>{try{if(t){window.localStorage.setItem(oi,JSON.stringify(t)),window.localStorage.removeItem(si),window.localStorage.removeItem(ci);return}window.localStorage.removeItem(oi)}catch{}},b=[t],e[8]=t,e[9]=y,e[10]=b),(0,z.useEffect)(y,b);let x,S;if(e[11]!==a||e[12]!==r?(S=()=>{try{if(a){window.localStorage.setItem(si,`true`),window.localStorage.removeItem(oi),r&&window.localStorage.setItem(ci,JSON.stringify(r));return}window.localStorage.removeItem(si),window.localStorage.removeItem(ci)}catch{}},x=[a,r],e[11]=a,e[12]=r,e[13]=x,e[14]=S):(x=e[13],S=e[14]),(0,z.useEffect)(S,x),t){let n;return e[15]===t?n=e[16]:(n=(0,V.jsx)(ai,{children:(0,V.jsx)(vr,{adminSession:t,onLogout:c})}),e[15]=t,e[16]=n),n}if(a){let t=r?.schoolId??`student`,n;return e[17]!==r||e[18]!==t?(n=(0,V.jsx)(ai,{children:(0,V.jsx)(ii,{studentSession:r,onLogout:u,onStudentSessionUpdate:g},t)}),e[17]=r,e[18]=t,e[19]=n):n=e[19],n}let C;return e[20]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,V.jsx)(ai,{children:(0,V.jsx)(Vr,{onAdminLoginSuccess:f,onStudentRegistrationSuccess:m})}),e[20]=C):C=e[20],C}var pi=`https://ideal-crane-292.convex.cloud`,mi=(0,On.createRoot)(document.getElementById(`root`));{let e=new ln(pi);mi.render((0,V.jsx)(z.StrictMode,{children:(0,V.jsx)(fn,{client:e,children:(0,V.jsx)(fi,{})})}))}export{qr as t};