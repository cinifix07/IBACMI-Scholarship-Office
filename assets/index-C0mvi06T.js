var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();for(var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function O(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function k(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,k(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+O(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),k(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+O(a,u),c+=k(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+O(a,u++),c+=k(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return k(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function A(e,t,n){if(e==null)return e;var r=[],i=0;return k(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function j(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ae={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ae,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:j}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,ie)}catch(e){ie(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=[],f=[],p=Uint8Array,m=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,h=0,g=m.length;h<g;++h)d[h]=m[h],f[m.charCodeAt(h)]=h;f[45]=62,f[95]=63;function _(e){var t=e.length;if(t%4>0)throw Error(`Invalid string. Length must be a multiple of 4`);var n=e.indexOf(`=`);n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function v(e,t,n){return(t+n)*3/4-n}function y(e){var t,n=_(e),r=n[0],i=n[1],a=new p(v(e,r,i)),o=0,s=i>0?r-4:r,c;for(c=0;c<s;c+=4)t=f[e.charCodeAt(c)]<<18|f[e.charCodeAt(c+1)]<<12|f[e.charCodeAt(c+2)]<<6|f[e.charCodeAt(c+3)],a[o++]=t>>16&255,a[o++]=t>>8&255,a[o++]=t&255;return i===2&&(t=f[e.charCodeAt(c)]<<2|f[e.charCodeAt(c+1)]>>4,a[o++]=t&255),i===1&&(t=f[e.charCodeAt(c)]<<10|f[e.charCodeAt(c+1)]<<4|f[e.charCodeAt(c+2)]>>2,a[o++]=t>>8&255,a[o++]=t&255),a}function b(e){return d[e>>18&63]+d[e>>12&63]+d[e>>6&63]+d[e&63]}function x(e,t,n){for(var r,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(e[a+2]&255),i.push(b(r));return i.join(``)}function S(e){for(var t,n=e.length,r=n%3,i=[],a=16383,o=0,s=n-r;o<s;o+=a)i.push(x(e,o,o+a>s?s:o+a));return r===1?(t=e[n-1],i.push(d[t>>2]+d[t<<4&63]+`==`)):r===2&&(t=(e[n-2]<<8)+e[n-1],i.push(d[t>>10]+d[t>>4&63]+d[t<<2&63]+`=`)),i.join(``)}function C(e){if(e===void 0)return{};if(!ee(e))throw Error(`The arguments to a Convex function must be an object. Received: ${e}`);return e}function w(e){if(e===void 0)throw Error(`Client created with undefined deployment address. If you used an environment variable, check that it's set.`);if(typeof e!=`string`)throw Error(`Invalid deployment address: found ${e}".`);if(!(e.startsWith(`http:`)||e.startsWith(`https:`)))throw Error(`Invalid deployment address: Must start with "https://" or "http://". Found "${e}".`);try{new URL(e)}catch{throw Error(`Invalid deployment address: "${e}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}if(e.endsWith(`.convex.site`))throw Error(`Invalid deployment address: "${e}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}function ee(e){let t=typeof e==`object`,n=Object.getPrototypeOf(e),r=n===null||n===Object.prototype||n?.constructor?.name===`Object`;return t&&r}var T=!0,E=BigInt(`-9223372036854775808`),D=BigInt(`9223372036854775807`),te=BigInt(`0`),ne=BigInt(`8`),O=BigInt(`256`);function re(e){return Number.isNaN(e)||!Number.isFinite(e)||Object.is(e,-0)}function k(e){e<te&&(e-=E+E);let t=e.toString(16);t.length%2==1&&(t=`0`+t);let n=new Uint8Array(new ArrayBuffer(8)),r=0;for(let i of t.match(/.{2}/g).reverse())n.set([parseInt(i,16)],r++),e>>=ne;return S(n)}function A(e){let t=y(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);let n=te,r=te;for(let e of t)n+=BigInt(e)*O**r,r++;return n>D&&(n+=E+E),n}function j(e){if(e<E||D<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);let t=new ArrayBuffer(8);return new DataView(t).setBigInt64(0,e,!0),S(new Uint8Array(t))}function ie(e){let t=y(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);return new DataView(t.buffer).getBigInt64(0,!0)}var ae=DataView.prototype.setBigInt64?j:k,M=DataView.prototype.getBigInt64?ie:A,N=1024;function P(e){if(e.length>N)throw Error(`Field name ${e} exceeds maximum field name length ${N}.`);if(e.startsWith(`$`))throw Error(`Field name ${e} starts with a '$', which is reserved.`);for(let t=0;t<e.length;t+=1){let n=e.charCodeAt(t);if(n<32||n>=127)throw Error(`Field name ${e} has invalid character '${e[t]}': Field names can only contain non-control ASCII characters`)}}function F(e){if(e===null||typeof e==`boolean`||typeof e==`number`||typeof e==`string`)return e;if(Array.isArray(e))return e.map(e=>F(e));if(typeof e!=`object`)throw Error(`Unexpected type of ${e}`);let t=Object.entries(e);if(t.length===1){let n=t[0][0];if(n===`$bytes`){if(typeof e.$bytes!=`string`)throw Error(`Malformed $bytes field on ${e}`);return y(e.$bytes).buffer}if(n===`$integer`){if(typeof e.$integer!=`string`)throw Error(`Malformed $integer field on ${e}`);return M(e.$integer)}if(n===`$float`){if(typeof e.$float!=`string`)throw Error(`Malformed $float field on ${e}`);let t=y(e.$float);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $float`);let n=new DataView(t.buffer).getFloat64(0,T);if(!re(n))throw Error(`Float ${n} should be encoded as a number`);return n}if(n===`$set`)throw Error(`Received a Set which is no longer supported as a Convex type.`);if(n===`$map`)throw Error(`Received a Map which is no longer supported as a Convex type.`)}let n={};for(let[t,r]of Object.entries(e))P(t),n[t]=F(r);return n}var oe=16384;function se(e){let t=JSON.stringify(e,(e,t)=>t===void 0?`undefined`:typeof t==`bigint`?`${t.toString()}n`:t);if(t.length>oe){let e=oe-14,n=t.codePointAt(e-1);return n!==void 0&&n>65535&&--e,t.substring(0,e)+`[...truncated]`}return t}function ce(e,t,n,r){if(e===void 0){let e=n&&` (present at path ${n} in original object ${se(t)})`;throw Error(`undefined is not a valid Convex value${e}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`)}if(e===null)return e;if(typeof e==`bigint`){if(e<E||D<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);return{$integer:ae(e)}}if(typeof e==`number`)if(re(e)){let t=new ArrayBuffer(8);return new DataView(t).setFloat64(0,e,T),{$float:S(new Uint8Array(t))}}else return e;if(typeof e==`boolean`||typeof e==`string`)return e;if(e instanceof ArrayBuffer)return{$bytes:S(new Uint8Array(e))};if(Array.isArray(e))return e.map((e,r)=>ce(e,t,n+`[${r}]`,!1));if(e instanceof Set)throw Error(le(n,`Set`,[...e],t));if(e instanceof Map)throw Error(le(n,`Map`,[...e],t));if(!ee(e)){let r=e?.constructor?.name,i=r?`${r} `:``;throw Error(le(n,i,e,t))}let i={},a=Object.entries(e);a.sort(([e,t],[n,r])=>e===n?0:e<n?-1:1);for(let[e,o]of a)o===void 0?r&&(P(e),i[e]=ue(o,t,n+`.${e}`)):(P(e),i[e]=ce(o,t,n+`.${e}`,!1));return i}function le(e,t,n,r){return e?`${t}${se(n)} is not a supported Convex type (present at path ${e} in original object ${se(r)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`:`${t}${se(n)} is not a supported Convex type.`}function ue(e,t,n){if(e===void 0)return{$undefined:null};if(t===void 0)throw Error(`Programming error. Current value is ${se(e)} but original value is undefined`);return ce(e,t,n,!1)}function I(e){return ce(e,e,``,!1)}var de=Object.defineProperty,fe=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pe=(e,t,n)=>fe(e,typeof t==`symbol`?t:t+``,n),me,he,ge=Symbol.for(`ConvexError`),_e=class extends (he=Error,me=ge,he){constructor(e){super(typeof e==`string`?e:se(e)),pe(this,`name`,`ConvexError`),pe(this,`data`),pe(this,me,!0),this.data=e}},ve=`1.40.0`,ye=Object.defineProperty,be=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xe=(e,t,n)=>be(e,typeof t==`symbol`?t:t+``,n),Se=`color:rgb(0, 145, 255)`;function Ce(e){switch(e){case`query`:return`Q`;case`mutation`:return`M`;case`action`:return`A`;case`any`:return`?`}}var we=class{constructor(e){xe(this,`_onLogLineFuncs`),xe(this,`_verbose`),this._onLogLineFuncs={},this._verbose=e.verbose}addLogLineListener(e){let t=Math.random().toString(36).substring(2,15);for(let e=0;e<10&&this._onLogLineFuncs[t]!==void 0;e++)t=Math.random().toString(36).substring(2,15);return this._onLogLineFuncs[t]=e,()=>{delete this._onLogLineFuncs[t]}}logVerbose(...e){if(this._verbose)for(let t of Object.values(this._onLogLineFuncs))t(`debug`,`${new Date().toISOString()}`,...e)}log(...e){for(let t of Object.values(this._onLogLineFuncs))t(`info`,...e)}warn(...e){for(let t of Object.values(this._onLogLineFuncs))t(`warn`,...e)}error(...e){for(let t of Object.values(this._onLogLineFuncs))t(`error`,...e)}};function Te(e){let t=new we(e);return t.addLogLineListener((e,...t)=>{switch(e){case`debug`:console.debug(...t);break;case`info`:console.log(...t);break;case`warn`:console.warn(...t);break;case`error`:console.error(...t);break;default:console.log(...t)}}),t}function Ee(e){return new we(e)}function De(e,t,n,r,i){let a=Ce(n);if(typeof i==`object`&&(i=`ConvexError ${JSON.stringify(i.errorData,null,2)}`),t===`info`){let t=i.match(/^\[.*?\] /);if(t===null){e.error(`[CONVEX ${a}(${r})] Could not parse console.log`);return}let n=i.slice(1,t[0].length-2),o=i.slice(t[0].length);e.log(`%c[CONVEX ${a}(${r})] [${n}]`,Se,o)}else e.error(`[CONVEX ${a}(${r})] ${i}`)}function Oe(e,t){let n=`[CONVEX FATAL ERROR] ${t}`;return e.error(n),Error(n)}function L(e,t,n){return`[CONVEX ${Ce(e)}(${t})] ${n.errorMessage}
  Called by client`}function ke(e,t){return t.data=e.errorData,t}function Ae(e){let t=e.split(`:`),n,r;return t.length===1?(n=t[0],r=`default`):(n=t.slice(0,t.length-1).join(`:`),r=t[t.length-1]),n.endsWith(`.js`)&&(n=n.slice(0,-3)),`${n}:${r}`}function je(e,t){return JSON.stringify({udfPath:Ae(e),args:I(t)})}function Me(e,t,n){let{initialNumItems:r,id:i}=n;return JSON.stringify({type:`paginated`,udfPath:Ae(e),args:I(t),options:I({initialNumItems:r,id:i})})}var Ne=Object.defineProperty,Pe=(e,t,n)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fe=(e,t,n)=>Pe(e,typeof t==`symbol`?t:t+``,n),Ie=class{constructor(){Fe(this,`nextQueryId`),Fe(this,`querySetVersion`),Fe(this,`querySet`),Fe(this,`queryIdToToken`),Fe(this,`identityVersion`),Fe(this,`auth`),Fe(this,`outstandingQueriesOlderThanRestart`),Fe(this,`outstandingAuthOlderThanRestart`),Fe(this,`paused`),Fe(this,`pendingQuerySetModifications`),this.nextQueryId=0,this.querySetVersion=0,this.identityVersion=0,this.querySet=new Map,this.queryIdToToken=new Map,this.outstandingQueriesOlderThanRestart=new Set,this.outstandingAuthOlderThanRestart=!1,this.paused=!1,this.pendingQuerySetModifications=new Map}hasSyncedPastLastReconnect(){return this.outstandingQueriesOlderThanRestart.size===0&&!this.outstandingAuthOlderThanRestart}markAuthCompletion(){this.outstandingAuthOlderThanRestart=!1}subscribe(e,t,n,r){let i=Ae(e),a=je(i,t),o=this.querySet.get(a);if(o!==void 0)return o.numSubscribers+=1,{queryToken:a,modification:null,unsubscribe:()=>this.removeSubscriber(a)};{let e=this.nextQueryId++,o={id:e,canonicalizedUdfPath:i,args:t,numSubscribers:1,journal:n,componentPath:r};this.querySet.set(a,o),this.queryIdToToken.set(e,a);let s=this.querySetVersion,c=this.querySetVersion+1,l={type:`Add`,queryId:e,udfPath:i,args:[I(t)],journal:n,componentPath:r};return this.paused?this.pendingQuerySetModifications.set(e,l):this.querySetVersion=c,{queryToken:a,modification:{type:`ModifyQuerySet`,baseVersion:s,newVersion:c,modifications:[l]},unsubscribe:()=>this.removeSubscriber(a)}}}transition(e){for(let t of e.modifications)switch(t.type){case`QueryUpdated`:case`QueryFailed`:{this.outstandingQueriesOlderThanRestart.delete(t.queryId);let e=t.journal;if(e!==void 0){let n=this.queryIdToToken.get(t.queryId);n!==void 0&&(this.querySet.get(n).journal=e)}break}case`QueryRemoved`:this.outstandingQueriesOlderThanRestart.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}}queryId(e,t){let n=je(Ae(e),t),r=this.querySet.get(n);return r===void 0?null:r.id}isCurrentOrNewerAuthVersion(e){return e>=this.identityVersion}getAuth(){return this.auth}setAuth(e){this.auth={tokenType:`User`,value:e};let t=this.identityVersion;return this.paused||(this.identityVersion=t+1),{type:`Authenticate`,baseVersion:t,...this.auth}}setAdminAuth(e,t){let n={tokenType:`Admin`,value:e,impersonating:t};this.auth=n;let r=this.identityVersion;return this.paused||(this.identityVersion=r+1),{type:`Authenticate`,baseVersion:r,...n}}clearAuth(){this.auth=void 0,this.markAuthCompletion();let e=this.identityVersion;return this.paused||(this.identityVersion=e+1),{type:`Authenticate`,tokenType:`None`,baseVersion:e}}hasAuth(){return!!this.auth}isNewAuth(e){return this.auth?.value!==e}queryPath(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).canonicalizedUdfPath:null}queryArgs(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).args:null}queryToken(e){return this.queryIdToToken.get(e)??null}queryJournal(e){return this.querySet.get(e)?.journal}restart(){this.unpause(),this.outstandingQueriesOlderThanRestart.clear();let e=[];for(let t of this.querySet.values()){let n={type:`Add`,queryId:t.id,udfPath:t.canonicalizedUdfPath,args:[I(t.args)],journal:t.journal,componentPath:t.componentPath};e.push(n),this.outstandingQueriesOlderThanRestart.add(t.id)}this.querySetVersion=1;let t={type:`ModifyQuerySet`,baseVersion:0,newVersion:1,modifications:e};if(!this.auth)return this.identityVersion=0,[t,void 0];this.outstandingAuthOlderThanRestart=!0;let n={type:`Authenticate`,baseVersion:0,...this.auth};return this.identityVersion=1,[t,n]}pause(){this.paused=!0}resume(){let e=this.pendingQuerySetModifications.size>0?{type:`ModifyQuerySet`,baseVersion:this.querySetVersion,newVersion:++this.querySetVersion,modifications:Array.from(this.pendingQuerySetModifications.values())}:void 0,t=this.auth===void 0?void 0:{type:`Authenticate`,baseVersion:this.identityVersion++,...this.auth};return this.unpause(),[e,t]}unpause(){this.paused=!1,this.pendingQuerySetModifications.clear()}removeSubscriber(e){let t=this.querySet.get(e);if(t.numSubscribers>1)return--t.numSubscribers,null;{this.querySet.delete(e),this.queryIdToToken.delete(t.id),this.outstandingQueriesOlderThanRestart.delete(t.id);let n=this.querySetVersion,r=this.querySetVersion+1,i={type:`Remove`,queryId:t.id};return this.paused?this.pendingQuerySetModifications.has(t.id)?this.pendingQuerySetModifications.delete(t.id):this.pendingQuerySetModifications.set(t.id,i):this.querySetVersion=r,{type:`ModifyQuerySet`,baseVersion:n,newVersion:r,modifications:[i]}}}},Le=Object.defineProperty,Re=(e,t,n)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ze=(e,t,n)=>Re(e,typeof t==`symbol`?t:t+``,n),Be=class{constructor(e,t){this.logger=e,this.markConnectionStateDirty=t,ze(this,`inflightRequests`),ze(this,`requestsOlderThanRestart`),ze(this,`inflightMutationsCount`,0),ze(this,`inflightActionsCount`,0),this.inflightRequests=new Map,this.requestsOlderThanRestart=new Set}request(e,t){let n=new Promise(n=>{let r=t?`Requested`:`NotSent`;this.inflightRequests.set(e.requestId,{message:e,status:{status:r,requestedAt:new Date,onResult:n}}),e.type===`Mutation`?this.inflightMutationsCount++:e.type===`Action`&&this.inflightActionsCount++});return this.markConnectionStateDirty(),n}onResponse(e){let t=this.inflightRequests.get(e.requestId);if(t===void 0||t.status.status===`Completed`)return null;let n=t.message.type===`Mutation`?`mutation`:`action`,r=t.message.udfPath;for(let t of e.logLines)De(this.logger,`info`,n,r,t);let i=t.status,a,o;if(e.success)a={success:!0,logLines:e.logLines,value:F(e.result)},o=()=>i.onResult(a);else{let t=e.result,{errorData:s}=e;De(this.logger,`error`,n,r,t),a={success:!1,errorMessage:t,errorData:s===void 0?void 0:F(s),logLines:e.logLines},o=()=>i.onResult(a)}return e.type===`ActionResponse`||!e.success?(o(),this.inflightRequests.delete(e.requestId),this.requestsOlderThanRestart.delete(e.requestId),t.message.type===`Action`?this.inflightActionsCount--:t.message.type===`Mutation`&&this.inflightMutationsCount--,this.markConnectionStateDirty(),{requestId:e.requestId,result:a}):(t.status={status:`Completed`,result:a,ts:e.ts,onResolve:o},null)}removeCompleted(e){let t=new Map;for(let[n,r]of this.inflightRequests.entries()){let i=r.status;i.status===`Completed`&&i.ts.lessThanOrEqual(e)&&(i.onResolve(),t.set(n,i.result),r.message.type===`Mutation`?this.inflightMutationsCount--:r.message.type===`Action`&&this.inflightActionsCount--,this.inflightRequests.delete(n),this.requestsOlderThanRestart.delete(n))}return t.size>0&&this.markConnectionStateDirty(),t}restart(){this.requestsOlderThanRestart=new Set(this.inflightRequests.keys());let e=[];for(let[t,n]of this.inflightRequests){if(n.status.status===`NotSent`){n.status.status=`Requested`,e.push(n.message);continue}if(n.message.type===`Mutation`)e.push(n.message);else if(n.message.type===`Action`){if(this.inflightRequests.delete(t),this.requestsOlderThanRestart.delete(t),this.inflightActionsCount--,n.status.status===`Completed`)throw Error(`Action should never be in 'Completed' state`);n.status.onResult({success:!1,errorMessage:`Connection lost while action was in flight`,logLines:[]})}}return this.markConnectionStateDirty(),e}resume(){let e=[];for(let[,t]of this.inflightRequests)if(t.status.status===`NotSent`){t.status.status=`Requested`,e.push(t.message);continue}return e}hasIncompleteRequests(){for(let e of this.inflightRequests.values())if(e.status.status===`Requested`)return!0;return!1}hasInflightRequests(){return this.inflightRequests.size>0}hasSyncedPastLastReconnect(){return this.requestsOlderThanRestart.size===0}timeOfOldestInflightRequest(){if(this.inflightRequests.size===0)return null;let e=Date.now();for(let t of this.inflightRequests.values())t.status.status!==`Completed`&&t.status.requestedAt.getTime()<e&&(e=t.status.requestedAt.getTime());return new Date(e)}inflightMutations(){return this.inflightMutationsCount}inflightActions(){return this.inflightActionsCount}},Ve=Symbol.for(`functionName`),He=Symbol.for(`toReferencePath`);function Ue(e){return e[He]??null}function We(e){return e.startsWith(`function://`)}function Ge(e){let t;if(typeof e==`string`)t=We(e)?{functionHandle:e}:{name:e};else if(e[Ve])t={name:e[Ve]};else{let n=Ue(e);if(!n)throw Error(`${e} is not a functionReference`);t={reference:n}}return t}function R(e){let t=Ge(e);if(t.name===void 0)throw t.functionHandle===void 0?t.reference===void 0?Error(`Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(t)}`):Error(`Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${t.reference}`):Error(`Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${t.functionHandle}`);if(typeof e==`string`)return e;let n=e[Ve];if(!n)throw Error(`${e} is not a functionReference`);return n}function Ke(e){return{[Ve]:e}}function qe(e=[]){return new Proxy({},{get(t,n){if(typeof n==`string`)return qe([...e,n]);if(n===Ve){if(e.length<2){let t=[`api`,...e].join(`.`);throw Error(`API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${t}\``)}let t=e.slice(0,-1).join(`/`),n=e[e.length-1];return n==="default"?t:t+`:`+n}else if(n===Symbol.toStringTag)return`FunctionReference`;else return}})}var Je=qe(),Ye=Object.defineProperty,Xe=(e,t,n)=>t in e?Ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ze=(e,t,n)=>Xe(e,typeof t==`symbol`?t:t+``,n),Qe=class e{constructor(e){Ze(this,`queryResults`),Ze(this,`modifiedQueries`),this.queryResults=e,this.modifiedQueries=[]}getQuery(t,...n){let r=C(n[0]),i=R(t),a=this.queryResults.get(je(i,r));if(a!==void 0)return e.queryValue(a.result)}getAllQueries(t){let n=[],r=R(t);for(let t of this.queryResults.values())t.udfPath===Ae(r)&&n.push({args:t.args,value:e.queryValue(t.result)});return n}setQuery(e,t,n){let r=C(t),i=R(e),a=je(i,r),o;o=n===void 0?void 0:{success:!0,value:n,logLines:[]};let s={udfPath:i,args:r,result:o};this.queryResults.set(a,s),this.modifiedQueries.push(a)}static queryValue(e){if(e!==void 0&&e.success)return e.value}},$e=class{constructor(){Ze(this,`queryResults`),Ze(this,`optimisticUpdates`),this.queryResults=new Map,this.optimisticUpdates=[]}ingestQueryResultsFromServer(e,t){this.optimisticUpdates=this.optimisticUpdates.filter(e=>!t.has(e.mutationId));let n=this.queryResults;this.queryResults=new Map(e);let r=new Qe(this.queryResults);for(let e of this.optimisticUpdates)e.update(r);let i=[];for(let[e,t]of this.queryResults){let r=n.get(e);(r===void 0||r.result!==t.result)&&i.push(e)}return i}applyOptimisticUpdate(e,t){this.optimisticUpdates.push({update:e,mutationId:t});let n=new Qe(this.queryResults);return e(n),n.modifiedQueries}rawQueryResult(e){let t=this.queryResults.get(e);if(t!==void 0)return t.result}queryResult(e){let t=this.queryResults.get(e);if(t===void 0)return;let n=t.result;if(n!==void 0){if(n.success)return n.value;throw n.errorData===void 0?Error(L(`query`,t.udfPath,n)):ke(n,new _e(L(`query`,t.udfPath,n)))}}hasQueryResult(e){return this.queryResults.get(e)!==void 0}queryLogs(e){return this.queryResults.get(e)?.result?.logLines}},et=Object.defineProperty,tt=(e,t,n)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nt=(e,t,n)=>tt(e,typeof t==`symbol`?t:t+``,n),rt=class e{constructor(e,t){nt(this,`low`),nt(this,`high`),nt(this,`__isUnsignedLong__`),this.low=e|0,this.high=t|0,this.__isUnsignedLong__=!0}static isLong(e){return(e&&e.__isUnsignedLong__)===!0}static fromBytesLE(t){return new e(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24)}toBytesLE(){let e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]}static fromNumber(t){return isNaN(t)||t<0?it:t>=st?ct:new e(t%ot|0,t/ot|0)}toString(){return(BigInt(this.high)*BigInt(ot)+BigInt(this.low)).toString()}equals(t){return e.isLong(t)||(t=e.fromValue(t)),this.high>>>31==1&&t.high>>>31==1?!1:this.high===t.high&&this.low===t.low}notEquals(e){return!this.equals(e)}comp(t){return e.isLong(t)||(t=e.fromValue(t)),this.equals(t)?0:t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1}lessThanOrEqual(e){return this.comp(e)<=0}static fromValue(t){return typeof t==`number`?e.fromNumber(t):new e(t.low,t.high)}},it=new rt(0,0),at=65536,ot=at*at,st=ot*ot,ct=new rt(-1,-1),lt=Object.defineProperty,ut=(e,t,n)=>t in e?lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dt=(e,t,n)=>ut(e,typeof t==`symbol`?t:t+``,n),ft=class{constructor(e,t){dt(this,`version`),dt(this,`remoteQuerySet`),dt(this,`queryPath`),dt(this,`logger`),this.version={querySet:0,ts:rt.fromNumber(0),identity:0},this.remoteQuerySet=new Map,this.queryPath=e,this.logger=t}transition(e){let t=e.startVersion;if(this.version.querySet!==t.querySet||this.version.ts.notEquals(t.ts)||this.version.identity!==t.identity)throw Error(`Invalid start version: ${t.ts.toString()}:${t.querySet}:${t.identity}, transitioning from ${this.version.ts.toString()}:${this.version.querySet}:${this.version.identity}`);for(let t of e.modifications)switch(t.type){case`QueryUpdated`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)De(this.logger,`info`,`query`,e,n);let n=F(t.value??null);this.remoteQuerySet.set(t.queryId,{success:!0,value:n,logLines:t.logLines});break}case`QueryFailed`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)De(this.logger,`info`,`query`,e,n);let{errorData:n}=t;this.remoteQuerySet.set(t.queryId,{success:!1,errorMessage:t.errorMessage,errorData:n===void 0?void 0:F(n),logLines:t.logLines});break}case`QueryRemoved`:this.remoteQuerySet.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}this.version=e.endVersion}remoteQueryResults(){return this.remoteQuerySet}timestamp(){return this.version.ts}};function pt(e){let t=y(e);return rt.fromBytesLE(Array.from(t))}function mt(e){return S(new Uint8Array(e.toBytesLE()))}function ht(e){switch(e.type){case`FatalError`:case`AuthError`:case`ActionResponse`:case`TransitionChunk`:case`Ping`:return{...e};case`MutationResponse`:return e.success?{...e,ts:pt(e.ts)}:{...e};case`Transition`:return{...e,startVersion:{...e.startVersion,ts:pt(e.startVersion.ts)},endVersion:{...e.endVersion,ts:pt(e.endVersion.ts)}};default:}}function gt(e){switch(e.type){case`Authenticate`:case`ModifyQuerySet`:case`Mutation`:case`Action`:case`Event`:return{...e};case`Connect`:return e.maxObservedTimestamp===void 0?{...e,maxObservedTimestamp:void 0}:{...e,maxObservedTimestamp:mt(e.maxObservedTimestamp)};default:}}var _t=Object.defineProperty,vt=(e,t,n)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t,n)=>vt(e,typeof t==`symbol`?t:t+``,n),yt=1e3,bt=1001,xt=1005,St=4040,Ct;function wt(){return Ct===void 0&&(Ct=Date.now()),typeof performance>`u`||!performance.now?Date.now():Math.round(Ct+performance.now())}function Tt(){return`t=${Math.round((wt()-Ct)/100)/10}s`}var Et={InternalServerError:{timeout:1e3},SubscriptionsWorkerFullError:{timeout:3e3},TooManyConcurrentRequests:{timeout:3e3},CommitterFullError:{timeout:3e3},AwsTooManyRequestsException:{timeout:3e3},ExecuteFullError:{timeout:3e3},SystemTimeoutError:{timeout:3e3},ExpiredInQueue:{timeout:3e3},VectorIndexesUnavailable:{timeout:1e3},SearchIndexesUnavailable:{timeout:1e3},TableSummariesUnavailable:{timeout:1e3},VectorIndexTooLarge:{timeout:3e3},SearchIndexTooLarge:{timeout:3e3},TooManyWritesInTimePeriod:{timeout:3e3}};function Dt(e){if(e===void 0)return`Unknown`;for(let t of Object.keys(Et))if(e.startsWith(t))return t;return`Unknown`}var Ot=class{constructor(e,t,n,r,i,a){this.markConnectionStateDirty=i,this.debug=a,z(this,`socket`),z(this,`connectionCount`),z(this,`_hasEverConnected`,!1),z(this,`lastCloseReason`),z(this,`transitionChunkBuffer`,null),z(this,`defaultInitialBackoff`),z(this,`maxBackoff`),z(this,`retries`),z(this,`serverInactivityThreshold`),z(this,`reconnectDueToServerInactivityTimeout`),z(this,`scheduledReconnect`,null),z(this,`networkOnlineHandler`,null),z(this,`pendingNetworkRecoveryInfo`,null),z(this,`uri`),z(this,`onOpen`),z(this,`onResume`),z(this,`onMessage`),z(this,`webSocketConstructor`),z(this,`logger`),z(this,`onServerDisconnectError`),this.webSocketConstructor=n,this.socket={state:`disconnected`},this.connectionCount=0,this.lastCloseReason=`InitialConnect`,this.defaultInitialBackoff=1e3,this.maxBackoff=16e3,this.retries=0,this.serverInactivityThreshold=6e4,this.reconnectDueToServerInactivityTimeout=null,this.uri=e,this.onOpen=t.onOpen,this.onResume=t.onResume,this.onMessage=t.onMessage,this.onServerDisconnectError=t.onServerDisconnectError,this.logger=r,this.setupNetworkListener(),this.connect()}setSocketState(e){this.socket=e,this._logVerbose(`socket state changed: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}`),this.markConnectionStateDirty()}setupNetworkListener(){typeof window>`u`||typeof window.addEventListener!=`function`||this.networkOnlineHandler===null&&(this.networkOnlineHandler=()=>{this._logVerbose(`network online event detected`),this.tryReconnectImmediately()},window.addEventListener(`online`,this.networkOnlineHandler),this._logVerbose(`network online event listener registered`))}cleanupNetworkListener(){this.networkOnlineHandler&&typeof window<`u`&&typeof window.removeEventListener==`function`&&(window.removeEventListener(`online`,this.networkOnlineHandler),this.networkOnlineHandler=null,this._logVerbose(`network online event listener removed`))}assembleTransition(e){if(e.partNumber<0||e.partNumber>=e.totalParts||e.totalParts===0||this.transitionChunkBuffer&&(this.transitionChunkBuffer.totalParts!==e.totalParts||this.transitionChunkBuffer.transitionId!==e.transitionId))throw this.transitionChunkBuffer=null,Error(`Invalid TransitionChunk`);if(this.transitionChunkBuffer===null&&(this.transitionChunkBuffer={chunks:[],totalParts:e.totalParts,transitionId:e.transitionId}),e.partNumber!==this.transitionChunkBuffer.chunks.length){let t=this.transitionChunkBuffer.chunks.length;throw this.transitionChunkBuffer=null,Error(`TransitionChunk received out of order: expected part ${t}, got ${e.partNumber}`)}if(this.transitionChunkBuffer.chunks.push(e.chunk),this.transitionChunkBuffer.chunks.length===e.totalParts){let e=this.transitionChunkBuffer.chunks.join(``);this.transitionChunkBuffer=null;let t=ht(JSON.parse(e));if(t.type!==`Transition`)throw Error(`Expected Transition, got ${t.type} after assembling chunks`);return t}return null}connect(){if(this.socket.state===`terminated`)return;if(this.socket.state!==`disconnected`&&this.socket.state!==`stopped`)throw Error(`Didn't start connection from disconnected state: `+this.socket.state);let e=new this.webSocketConstructor(this.uri);this._logVerbose(`constructed WebSocket`),this.setSocketState({state:`connecting`,ws:e,paused:`no`}),this.resetServerInactivityTimeout(),e.onopen=()=>{if(this.logger.logVerbose(`begin ws.onopen`),this.socket.state!==`connecting`)throw Error(`onopen called with socket not in connecting state`);if(this.setSocketState({state:`ready`,ws:e,paused:this.socket.paused===`yes`?`uninitialized`:`no`}),this.resetServerInactivityTimeout(),this.socket.paused===`no`&&(this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:wt()})),this.lastCloseReason!==`InitialConnect`&&(this.lastCloseReason?this.logger.log(`WebSocket reconnected at`,Tt(),`after disconnect due to`,this.lastCloseReason):this.logger.log(`WebSocket reconnected at`,Tt())),this.connectionCount+=1,this.lastCloseReason=null,this.pendingNetworkRecoveryInfo!==null){let{timeSavedMs:e}=this.pendingNetworkRecoveryInfo;this.pendingNetworkRecoveryInfo=null,this.sendMessage({type:`Event`,eventType:`NetworkRecoveryReconnect`,event:{timeSavedMs:e}}),this.logger.log(`Network recovery reconnect saved ~${Math.round(e/1e3)}s of waiting`)}},e.onerror=e=>{this.transitionChunkBuffer=null;let t=e.message;t&&this.logger.log(`WebSocket error message: ${t}`)},e.onmessage=e=>{this.resetServerInactivityTimeout();let t=e.data.length,n=ht(JSON.parse(e.data));if(this._logVerbose(`received ws message with type ${n.type}`),n.type!==`Ping`){if(n.type===`TransitionChunk`){let e=this.assembleTransition(n);if(!e)return;n=e,this._logVerbose(`assembled full ws message of type ${n.type}`)}this.transitionChunkBuffer!==null&&(this.transitionChunkBuffer=null,this.logger.log(`Received unexpected ${n.type} while buffering TransitionChunks`)),n.type===`Transition`&&this.reportLargeTransition({messageLength:t,transition:n}),this.onMessage(n).hasSyncedPastLastReconnect&&(this.retries=0,this.markConnectionStateDirty())}},e.onclose=e=>{if(this._logVerbose(`begin ws.onclose`),this.transitionChunkBuffer=null,this.lastCloseReason===null&&(this.lastCloseReason=e.reason||`closed with code ${e.code}`),e.code!==yt&&e.code!==bt&&e.code!==xt&&e.code!==St){let t=`WebSocket closed with code ${e.code}`;e.reason&&(t+=`: ${e.reason}`),this.logger.log(t),this.onServerDisconnectError&&e.reason&&this.onServerDisconnectError(t)}let t=Dt(e.reason);this.scheduleReconnect(t)}}socketState(){return this.socket.state}sendMessage(e){let t={type:e.type,...e.type===`Authenticate`&&e.tokenType===`User`?{value:`...${e.value.slice(-7)}`}:{}};if(this.socket.state===`ready`&&this.socket.paused===`no`){let n=gt(e),r=JSON.stringify(n),i=!1;try{this.socket.ws.send(r),i=!0}catch(e){this.logger.log(`Failed to send message on WebSocket, reconnecting: ${e}`),this.closeAndReconnect(`FailedToSendMessage`)}return this._logVerbose(`${i?`sent`:`failed to send`} message with type ${e.type}: ${JSON.stringify(t)}`),!0}return this._logVerbose(`message not sent (socket state: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}): ${JSON.stringify(t)}`),!1}resetServerInactivityTimeout(){this.socket.state!==`terminated`&&(this.reconnectDueToServerInactivityTimeout!==null&&(clearTimeout(this.reconnectDueToServerInactivityTimeout),this.reconnectDueToServerInactivityTimeout=null),this.reconnectDueToServerInactivityTimeout=setTimeout(()=>{this.closeAndReconnect(`InactiveServer`)},this.serverInactivityThreshold))}scheduleReconnect(e){this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.socket={state:`disconnected`};let t=this.nextBackoff(e);this.markConnectionStateDirty(),this.logger.log(`Attempting reconnect in ${Math.round(t)}ms`);let n=wt(),r=setTimeout(()=>{this.scheduledReconnect?.timeout===r&&(this.scheduledReconnect=null,this.connect())},t);this.scheduledReconnect={timeout:r,scheduledAt:n,backoffMs:t}}closeAndReconnect(e){switch(this._logVerbose(`begin closeAndReconnect with reason ${e}`),this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return;case`connecting`:case`ready`:this.lastCloseReason=e,this.close(),this.scheduleReconnect(`client`);return;default:this.socket}}close(){switch(this.transitionChunkBuffer=null,this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return Promise.resolve();case`connecting`:{let e=this.socket.ws;return e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)},new Promise(t=>{e.onclose=()=>{this._logVerbose(`Closed after connecting`),t()},e.onopen=()=>{this._logVerbose(`Opened after connecting`),e.close()}})}case`ready`:{this._logVerbose(`ws.close called`);let e=this.socket.ws;e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)};let t=new Promise(t=>{e.onclose=()=>{t()}});return e.close(),t}default:return this.socket,Promise.resolve()}}terminate(){switch(this.reconnectDueToServerInactivityTimeout&&clearTimeout(this.reconnectDueToServerInactivityTimeout),this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.cleanupNetworkListener(),this.socket.state){case`terminated`:case`stopped`:case`disconnected`:case`connecting`:case`ready`:{let e=this.close();return this.setSocketState({state:`terminated`}),e}default:throw this.socket,Error(`Invalid websocket state: ${this.socket.state}`)}}stop(){switch(this.socket.state){case`terminated`:return Promise.resolve();case`connecting`:case`stopped`:case`disconnected`:case`ready`:{this.cleanupNetworkListener();let e=this.close();return this.socket={state:`stopped`},e}default:return this.socket,Promise.resolve()}}tryRestart(){switch(this.socket.state){case`stopped`:break;case`terminated`:case`connecting`:case`ready`:case`disconnected`:this.logger.logVerbose(`Restart called without stopping first`);return;default:this.socket}this.setupNetworkListener(),this.connect()}pause(){switch(this.socket.state){case`disconnected`:case`stopped`:case`terminated`:return;case`connecting`:case`ready`:this.socket={...this.socket,paused:`yes`};return;default:this.socket;return}}tryReconnectImmediately(){if(this._logVerbose(`tryReconnectImmediately called`),this.socket.state!==`disconnected`){this._logVerbose(`tryReconnectImmediately called but socket state is ${this.socket.state}, no action taken`);return}let e=null;if(this.scheduledReconnect){let t=wt()-this.scheduledReconnect.scheduledAt;e=Math.max(0,this.scheduledReconnect.backoffMs-t),this._logVerbose(`would have waited ${Math.round(e)}ms more (backoff was ${Math.round(this.scheduledReconnect.backoffMs)}ms, elapsed ${Math.round(t)}ms)`),clearTimeout(this.scheduledReconnect.timeout),this.scheduledReconnect=null,this._logVerbose(`canceled scheduled reconnect`)}this.logger.log(`Network recovery detected, reconnecting immediately`),this.pendingNetworkRecoveryInfo=e===null?null:{timeSavedMs:e},this.connect()}resume(){switch(this.socket.state){case`connecting`:this.socket={...this.socket,paused:`no`};return;case`ready`:this.socket.paused===`uninitialized`?(this.socket={...this.socket,paused:`no`},this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:wt()})):this.socket.paused===`yes`&&(this.socket={...this.socket,paused:`no`},this.onResume());return;case`terminated`:case`stopped`:case`disconnected`:return;default:this.socket}this.connect()}connectionState(){return{isConnected:this.socket.state===`ready`,hasEverConnected:this._hasEverConnected,connectionCount:this.connectionCount,connectionRetries:this.retries}}_logVerbose(e){this.logger.logVerbose(e)}nextBackoff(e){let t=(e===`client`?100:e===`Unknown`?this.defaultInitialBackoff:Et[e].timeout)*2**this.retries;this.retries+=1;let n=Math.min(t,this.maxBackoff);return n+n*(Math.random()-.5)}reportLargeTransition({transition:e,messageLength:t}){if(e.clientClockSkew===void 0||e.serverTs===void 0)return;let n=wt()-e.clientClockSkew-e.serverTs/1e6,r=`${Math.round(n)}ms`,i=`${Math.round(t/1e4)/100}MB`,a=t/(n/1e3),o=`${Math.round(a/1e4)/100}MB per second`;this._logVerbose(`received ${i} transition in ${r} at ${o}`),t>2e7?this.logger.log(`received query results totaling more that 20MB (${i}) which will take a long time to download on slower connections`):n>2e4&&this.logger.log(`received query results totaling ${i} which took more than 20s to arrive (${r})`),this.debug&&this.sendMessage({type:`Event`,eventType:`ClientReceivedTransition`,event:{transitionTransitTime:n,messageLength:t}})}};function kt(){return At()}function At(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}var jt=class extends Error{};jt.prototype.name=`InvalidTokenError`;function Mt(e){return decodeURIComponent(atob(e).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n=`0`+n),`%`+n}))}function Nt(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`);switch(t.length%4){case 0:break;case 2:t+=`==`;break;case 3:t+=`=`;break;default:throw Error(`base64 string is not of the correct length`)}try{return Mt(t)}catch{return atob(t)}}function Pt(e,t){if(typeof e!=`string`)throw new jt(`Invalid token specified: must be a string`);t||={};let n=t.header===!0?0:1,r=e.split(`.`)[n];if(typeof r!=`string`)throw new jt(`Invalid token specified: missing part #${n+1}`);let i;try{i=Nt(r)}catch(e){throw new jt(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(i)}catch(e){throw new jt(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}var Ft=Object.defineProperty,It=(e,t,n)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lt=(e,t,n)=>It(e,typeof t==`symbol`?t:t+``,n),Rt=480*60*60*1e3,zt=2,Bt=class{constructor(e,t,n){Lt(this,`authState`,{state:`noAuth`}),Lt(this,`configVersion`,0),Lt(this,`syncState`),Lt(this,`authenticate`),Lt(this,`stopSocket`),Lt(this,`tryRestartSocket`),Lt(this,`pauseSocket`),Lt(this,`resumeSocket`),Lt(this,`clearAuth`),Lt(this,`logger`),Lt(this,`refreshTokenLeewaySeconds`),Lt(this,`lastRefreshChange`),Lt(this,`tokenConfirmationAttempts`,0),this.syncState=e,this.authenticate=t.authenticate,this.stopSocket=t.stopSocket,this.tryRestartSocket=t.tryRestartSocket,this.pauseSocket=t.pauseSocket,this.resumeSocket=t.resumeSocket,this.clearAuth=t.clearAuth,this.logger=n.logger,this.refreshTokenLeewaySeconds=n.refreshTokenLeewaySeconds,this.lastRefreshChange=!1}notifyRefreshChange(e){this.authState.state!==`noAuth`&&this.authState.state!==`initialRefetch`&&this.authState.config.onRefreshChange&&this.lastRefreshChange!==e&&(this.lastRefreshChange=e,this.authState.config.onRefreshChange(e))}async setConfig(e,t,n){this.resetAuthState(),this._logVerbose(`pausing WS for auth token fetch`),this.pauseSocket();let r=await this.fetchTokenAndGuardAgainstRace(e,{forceRefreshToken:!1});if(r.isFromOutdatedConfig)return;let i={fetchToken:e,onAuthChange:t,onRefreshChange:n};r.value?(this.setAuthState({state:`waitingForServerConfirmationOfCachedToken`,config:i,hasRetried:!1}),this.authenticate(r.value)):(this.setAuthState({state:`initialRefetch`,config:i}),await this.refetchToken()),this._logVerbose(`resuming WS after auth token fetch`),this.resumeSocket()}onTransition(e){if(this.syncState.isCurrentOrNewerAuthVersion(e.endVersion.identity)&&!(e.endVersion.identity<=e.startVersion.identity)){if(this._logVerbose(`auth state is ${this.authState.state} when handling transition`),this.syncState.markAuthCompletion(),this.authState.state===`waitingForServerConfirmationOfCachedToken`){this._logVerbose(`server confirmed auth token is valid`),this.refetchToken(),this.authState.config.onAuthChange(!0);return}this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this._logVerbose(`server confirmed new auth token is valid`),this.notifyRefreshChange(!1),this.scheduleTokenRefetch(this.authState.token),this.tokenConfirmationAttempts=0,this.authState.hadAuth||this.authState.config.onAuthChange(!0))}}onAuthError(e){if(e.authUpdateAttempted===!1&&(this.authState.state===`waitingForServerConfirmationOfFreshToken`||this.authState.state===`waitingForServerConfirmationOfCachedToken`)){this._logVerbose(`ignoring non-auth token expired error`);return}let{baseVersion:t}=e;if(!this.syncState.isCurrentOrNewerAuthVersion(t+1)){this._logVerbose(`ignoring auth error for previous auth attempt`);return}this.tryToReauthenticate(e)}async tryToReauthenticate(e){if(this._logVerbose(`attempting to reauthenticate: ${e.error}`),this.authState.state===`noAuth`||this.authState.state===`waitingForServerConfirmationOfFreshToken`&&this.tokenConfirmationAttempts>=zt){this.logger.error(`Failed to authenticate: "${e.error}", check your server auth config`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.authState.state!==`noAuth`&&this.setAndReportAuthFailed(this.authState.config.onAuthChange);return}if(this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this.tokenConfirmationAttempts++,this._logVerbose(`retrying reauthentication, ${zt-this.tokenConfirmationAttempts} attempts remaining`)),this.notifyRefreshChange(!0),await this.stopSocket(),this.authState.state===`noAuth`)return;let t=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});t.isFromOutdatedConfig||(t.value&&this.syncState.isNewAuth(t.value)?(this.authenticate(t.value),this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,config:this.authState.config,token:t.value,hadAuth:this.authState.state===`notRefetching`||this.authState.state===`waitingForScheduledRefetch`})):(this._logVerbose(`reauthentication failed, could not fetch a new token`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this.tryRestartSocket())}async refetchToken(){if(this.authState.state===`noAuth`)return;this._logVerbose(`refetching auth token`);let e=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});e.isFromOutdatedConfig||(e.value?this.syncState.isNewAuth(e.value)?(this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,hadAuth:this.syncState.hasAuth(),token:e.value,config:this.authState.config}),this.authenticate(e.value)):this.setAuthState({state:`notRefetching`,config:this.authState.config}):(this._logVerbose(`refetching token failed`),this.syncState.hasAuth()&&this.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this._logVerbose(`restarting WS after auth token fetch (if currently stopped)`),this.tryRestartSocket())}scheduleTokenRefetch(e){if(this.authState.state===`noAuth`)return;let t=this.decodeToken(e);if(!t){this.logger.error(`Auth token is not a valid JWT, cannot refetch the token`);return}let{iat:n,exp:r}=t;if(!n||!r){this.logger.error(`Auth token does not have required fields, cannot refetch the token`);return}let i=r-n;if(i<=2){this.logger.error(`Auth token does not live long enough, cannot refetch the token`);return}let a=Math.min(Rt,(i-this.refreshTokenLeewaySeconds)*1e3);a<=0&&(this.logger.warn(`Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${i}s`),a=0);let o=setTimeout(()=>{this._logVerbose(`running scheduled token refetch`),this.refetchToken()},a);this.setAuthState({state:`waitingForScheduledRefetch`,refetchTokenTimeoutId:o,config:this.authState.config}),this._logVerbose(`scheduled preemptive auth token refetching in ${a}ms`)}async fetchTokenAndGuardAgainstRace(e,t){let n=++this.configVersion;this._logVerbose(`fetching token with config version ${n}`);let r=await e(t);return this.configVersion===n?{isFromOutdatedConfig:!1,value:r}:(this._logVerbose(`stale config version, expected ${n}, got ${this.configVersion}`),{isFromOutdatedConfig:!0})}stop(){this.resetAuthState(),this.configVersion++,this._logVerbose(`config version bumped to ${this.configVersion}`)}setAndReportAuthFailed(e){e(!1),this.resetAuthState()}resetAuthState(){this.notifyRefreshChange(!1),this.setAuthState({state:`noAuth`})}setAuthState(e){let t=e.state===`waitingForServerConfirmationOfFreshToken`?{hadAuth:e.hadAuth,state:e.state,token:`...${e.token.slice(-7)}`}:{state:e.state};switch(this._logVerbose(`setting auth state to ${JSON.stringify(t)}`),e.state){case`waitingForScheduledRefetch`:case`notRefetching`:case`noAuth`:this.tokenConfirmationAttempts=0;break;case`waitingForServerConfirmationOfFreshToken`:case`waitingForServerConfirmationOfCachedToken`:case`initialRefetch`:break;default:}this.authState.state===`waitingForScheduledRefetch`&&clearTimeout(this.authState.refetchTokenTimeoutId),this.authState=e}decodeToken(e){try{return Pt(e)}catch(e){return this._logVerbose(`Error decoding token: ${e instanceof Error?e.message:`Unknown error`}`),null}}_logVerbose(e){this.logger.logVerbose(`${e} [v${this.configVersion}]`)}},Vt=[`convexClientConstructed`,`convexWebSocketOpen`,`convexFirstMessageReceived`];function Ht(e,t){let n={sessionId:t};typeof performance>`u`||!performance.mark||performance.mark(e,{detail:n})}function Ut(e){let t=e.name.slice(6);return t=t.charAt(0).toLowerCase()+t.slice(1),{name:t,startTime:e.startTime}}function Wt(e){if(typeof performance>`u`||!performance.getEntriesByName)return[];let t=[];for(let n of Vt){let r=performance.getEntriesByName(n).filter(e=>e.entryType===`mark`).filter(t=>t.detail.sessionId===e);t.push(...r)}return t.map(Ut)}var Gt=Object.defineProperty,Kt=(e,t,n)=>t in e?Gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B=(e,t,n)=>Kt(e,typeof t==`symbol`?t:t+``,n),qt=class{constructor(e,t,n){if(B(this,`address`),B(this,`state`),B(this,`requestManager`),B(this,`webSocketManager`),B(this,`authenticationManager`),B(this,`remoteQuerySet`),B(this,`optimisticQueryResults`),B(this,`_transitionHandlerCounter`,0),B(this,`_nextRequestId`),B(this,`_onTransitionFns`,new Map),B(this,`_sessionId`),B(this,`firstMessageReceived`,!1),B(this,`debug`),B(this,`logger`),B(this,`maxObservedTimestamp`),B(this,`connectionStateSubscribers`,new Map),B(this,`nextConnectionStateSubscriberId`,0),B(this,`_lastPublishedConnectionState`),B(this,`markConnectionStateDirty`,()=>{Promise.resolve().then(()=>{let e=this.connectionState();if(JSON.stringify(e)!==JSON.stringify(this._lastPublishedConnectionState)){this._lastPublishedConnectionState=e;for(let t of this.connectionStateSubscribers.values())t(e)}})}),B(this,`mark`,e=>{this.debug&&Ht(e,this.sessionId)}),typeof e==`object`)throw Error(`Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly.`);n?.skipConvexDeploymentUrlCheck!==!0&&w(e),n={...n};let r=n.authRefreshTokenLeewaySeconds??10,i=n.webSocketConstructor;if(!i&&typeof WebSocket>`u`)throw Error(`No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient`);i||=WebSocket,this.debug=n.reportDebugInfoToConvex??!1,this.address=e,this.logger=n.logger===!1?Ee({verbose:n.verbose??!1}):n.logger!==!0&&n.logger?n.logger:Te({verbose:n.verbose??!1});let a=e.search(`://`);if(a===-1)throw Error(`Provided address was not an absolute URL.`);let o=e.substring(a+3),s=e.substring(0,a),c;if(s===`http`)c=`ws`;else if(s===`https`)c=`wss`;else throw Error(`Unknown parent protocol ${s}`);let l=`${c}://${o}/api/${ve}/sync`;this.state=new Ie,this.remoteQuerySet=new ft(e=>this.state.queryPath(e),this.logger),this.requestManager=new Be(this.logger,this.markConnectionStateDirty);let u=()=>{this.webSocketManager.pause(),this.state.pause()};this.authenticationManager=new Bt(this.state,{authenticate:e=>{let t=this.state.setAuth(e);return this.webSocketManager.sendMessage(t),t.baseVersion},stopSocket:()=>this.webSocketManager.stop(),tryRestartSocket:()=>this.webSocketManager.tryRestart(),pauseSocket:u,resumeSocket:()=>this.webSocketManager.resume(),clearAuth:()=>{this.clearAuth()}},{logger:this.logger,refreshTokenLeewaySeconds:r}),this.optimisticQueryResults=new $e,this.addOnTransitionHandler(e=>{t(e.queries.map(e=>e.token))}),this._nextRequestId=0,this._sessionId=kt();let{unsavedChangesWarning:d}=n;if(typeof window>`u`||window.addEventListener===void 0){if(d===!0)throw Error(`unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options.`)}else d!==!1&&window.addEventListener(`beforeunload`,e=>{if(this.requestManager.hasIncompleteRequests()){e.preventDefault();let t=`Are you sure you want to leave? Your changes may not be saved.`;return(e||window.event).returnValue=t,t}});this.webSocketManager=new Ot(l,{onOpen:e=>{this.mark(`convexWebSocketOpen`),this.webSocketManager.sendMessage({...e,type:`Connect`,sessionId:this._sessionId,maxObservedTimestamp:this.maxObservedTimestamp}),this.remoteQuerySet=new ft(e=>this.state.queryPath(e),this.logger);let[t,n]=this.state.restart();n&&this.webSocketManager.sendMessage(n),this.webSocketManager.sendMessage(t);for(let e of this.requestManager.restart())this.webSocketManager.sendMessage(e)},onResume:()=>{let[e,t]=this.state.resume();t&&this.webSocketManager.sendMessage(t),e&&this.webSocketManager.sendMessage(e);for(let e of this.requestManager.resume())this.webSocketManager.sendMessage(e)},onMessage:e=>{switch(this.firstMessageReceived||(this.firstMessageReceived=!0,this.mark(`convexFirstMessageReceived`),this.reportMarks()),e.type){case`Transition`:{this.observedTimestamp(e.endVersion.ts),this.authenticationManager.onTransition(e),this.remoteQuerySet.transition(e),this.state.transition(e);let t=this.requestManager.removeCompleted(this.remoteQuerySet.timestamp());this.notifyOnQueryResultChanges(t);break}case`MutationResponse`:{e.success&&this.observedTimestamp(e.ts);let t=this.requestManager.onResponse(e);t!==null&&this.notifyOnQueryResultChanges(new Map([[t.requestId,t.result]]));break}case`ActionResponse`:this.requestManager.onResponse(e);break;case`AuthError`:this.authenticationManager.onAuthError(e);break;case`FatalError`:{let t=Oe(this.logger,e.error);throw this.webSocketManager.terminate(),t}default:}return{hasSyncedPastLastReconnect:this.hasSyncedPastLastReconnect()}},onServerDisconnectError:n.onServerDisconnectError},i,this.logger,this.markConnectionStateDirty,this.debug),this.mark(`convexClientConstructed`),n.expectAuth&&u()}hasSyncedPastLastReconnect(){return this.requestManager.hasSyncedPastLastReconnect()&&this.state.hasSyncedPastLastReconnect()}observedTimestamp(e){(this.maxObservedTimestamp===void 0||this.maxObservedTimestamp.lessThanOrEqual(e))&&(this.maxObservedTimestamp=e)}getMaxObservedTimestamp(){return this.maxObservedTimestamp}notifyOnQueryResultChanges(e){let t=this.remoteQuerySet.remoteQueryResults(),n=new Map;for(let[e,r]of t){let t=this.state.queryToken(e);if(t!==null){let i={result:r,udfPath:this.state.queryPath(e),args:this.state.queryArgs(e)};n.set(t,i)}}let r=this.optimisticQueryResults.ingestQueryResultsFromServer(n,new Set(e.keys()));this.handleTransition({queries:r.map(e=>({token:e,modification:{kind:`Updated`,result:this.optimisticQueryResults.rawQueryResult(e)}})),reflectedMutations:Array.from(e).map(([e,t])=>({requestId:e,result:t})),timestamp:this.remoteQuerySet.timestamp()})}handleTransition(e){for(let t of this._onTransitionFns.values())t(e)}addOnTransitionHandler(e){let t=this._transitionHandlerCounter++;return this._onTransitionFns.set(t,e),()=>this._onTransitionFns.delete(t)}getCurrentAuthClaims(){let e=this.state.getAuth(),t={};if(e&&e.tokenType===`User`)try{t=e?Pt(e.value):{}}catch{t={}}else return;return{token:e.value,decoded:t}}setAuth(e,t,n){this.authenticationManager.setConfig(e,t,n)}hasAuth(){return this.state.hasAuth()}setAdminAuth(e,t){let n=this.state.setAdminAuth(e,t);this.webSocketManager.sendMessage(n)}clearAuth(){let e=this.state.clearAuth();this.webSocketManager.sendMessage(e)}subscribe(e,t,n){let r=C(t),{modification:i,queryToken:a,unsubscribe:o}=this.state.subscribe(e,r,n?.journal,n?.componentPath);return i!==null&&this.webSocketManager.sendMessage(i),{queryToken:a,unsubscribe:()=>{let e=o();e&&this.webSocketManager.sendMessage(e)}}}localQueryResult(e,t){let n=je(e,C(t));return this.optimisticQueryResults.queryResult(n)}localQueryResultByToken(e){return this.optimisticQueryResults.queryResult(e)}hasLocalQueryResultByToken(e){return this.optimisticQueryResults.hasQueryResult(e)}localQueryLogs(e,t){let n=je(e,C(t));return this.optimisticQueryResults.queryLogs(n)}queryJournal(e,t){let n=je(e,C(t));return this.state.queryJournal(n)}connectionState(){let e=this.webSocketManager.connectionState();return{hasInflightRequests:this.requestManager.hasInflightRequests(),isWebSocketConnected:e.isConnected,hasEverConnected:e.hasEverConnected,connectionCount:e.connectionCount,connectionRetries:e.connectionRetries,timeOfOldestInflightRequest:this.requestManager.timeOfOldestInflightRequest(),inflightMutations:this.requestManager.inflightMutations(),inflightActions:this.requestManager.inflightActions()}}subscribeToConnectionState(e){let t=this.nextConnectionStateSubscriberId++;return this.connectionStateSubscribers.set(t,e),()=>{this.connectionStateSubscribers.delete(t)}}async mutation(e,t,n){let r=await this.mutationInternal(e,t,n);if(!r.success)throw r.errorData===void 0?Error(L(`mutation`,e,r)):ke(r,new _e(L(`mutation`,e,r)));return r.value}async mutationInternal(e,t,n,r){let{mutationPromise:i}=this.enqueueMutation(e,t,n,r);return i}enqueueMutation(e,t,n,r){let i=C(t);this.tryReportLongDisconnect();let a=this.nextRequestId;if(this._nextRequestId++,n!==void 0){let e=n.optimisticUpdate;if(e!==void 0){let t=this.optimisticQueryResults.applyOptimisticUpdate(t=>{e(t,i)instanceof Promise&&this.logger.warn(`Optimistic update handler returned a Promise. Optimistic updates should be synchronous.`)},a).map(e=>{let t=this.localQueryResultByToken(e);return{token:e,modification:{kind:`Updated`,result:t===void 0?void 0:{success:!0,value:t,logLines:[]}}}});this.handleTransition({queries:t,reflectedMutations:[],timestamp:this.remoteQuerySet.timestamp()})}}let o={type:`Mutation`,requestId:a,udfPath:e,componentPath:r,args:[I(i)]},s=this.webSocketManager.sendMessage(o);return{requestId:a,mutationPromise:this.requestManager.request(o,s)}}async action(e,t){let n=await this.actionInternal(e,t);if(!n.success)throw n.errorData===void 0?Error(L(`action`,e,n)):ke(n,new _e(L(`action`,e,n)));return n.value}async actionInternal(e,t,n){let r=C(t),i=this.nextRequestId;this._nextRequestId++,this.tryReportLongDisconnect();let a={type:`Action`,requestId:i,udfPath:e,componentPath:n,args:[I(r)]},o=this.webSocketManager.sendMessage(a);return this.requestManager.request(a,o)}async close(){return this.authenticationManager.stop(),this.webSocketManager.terminate()}get url(){return this.address}get nextRequestId(){return this._nextRequestId}get sessionId(){return this._sessionId}reportMarks(){if(this.debug){let e=Wt(this.sessionId);this.webSocketManager.sendMessage({type:`Event`,eventType:`ClientConnect`,event:e})}}tryReportLongDisconnect(){if(!this.debug)return;let e=this.connectionState().timeOfOldestInflightRequest;if(e===null||Date.now()-e.getTime()<=60*1e3)return;let t=`${this.address}/api/debug_event`;fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`,"Convex-Client":`npm-${ve}`},body:JSON.stringify({event:`LongWebsocketDisconnect`})}).then(e=>{e.ok||this.logger.warn(`Analytics request failed with response:`,e.body)}).catch(e=>{this.logger.warn(`Analytics response failed with error:`,e)})}};function Jt(e){if(typeof e!=`object`||!e||!Array.isArray(e.page)||typeof e.isDone!=`boolean`||typeof e.continueCursor!=`string`)throw Error(`Not a valid paginated query result: ${e?.toString()}`);return e}var Yt=Object.defineProperty,Xt=(e,t,n)=>t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zt=(e,t,n)=>Xt(e,typeof t==`symbol`?t:t+``,n),Qt=class{constructor(e,t){this.client=e,this.onTransition=t,Zt(this,`paginatedQuerySet`,new Map),Zt(this,`lastTransitionTs`),this.lastTransitionTs=rt.fromNumber(0),this.client.addOnTransitionHandler(e=>this.onBaseTransition(e))}subscribe(e,t,n){let r=Ae(e),i=Me(r,t,n),a=()=>this.removePaginatedQuerySubscriber(i),o=this.paginatedQuerySet.get(i);return o?(o.numSubscribers+=1,{paginatedQueryToken:i,unsubscribe:a}):(this.paginatedQuerySet.set(i,{token:i,canonicalizedUdfPath:r,args:t,numSubscribers:1,options:{initialNumItems:n.initialNumItems},nextPageKey:0,pageKeys:[],pageKeyToQuery:new Map,ongoingSplits:new Map,skip:!1,id:n.id}),this.addPageToPaginatedQuery(i,null,n.initialNumItems),{paginatedQueryToken:i,unsubscribe:a})}localQueryResult(e,t,n){let r=Me(Ae(e),t,n);return this.localQueryResultByToken(r)}localQueryResultByToken(e){let t=this.paginatedQuerySet.get(e);if(!t)return;let n=this.activePageQueryTokens(t);if(n.length===0)return{results:[],status:`LoadingFirstPage`,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)};let r=[],i=!1,a=!1;for(let e of n){let t=this.client.localQueryResultByToken(e);if(t===void 0){i=!0,a=!1;continue}let n=Jt(t);r=r.concat(n.page),a=!!n.isDone}let o;return o=i?r.length===0?`LoadingFirstPage`:`LoadingMore`:a?`Exhausted`:`CanLoadMore`,{results:r,status:o,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)}}onBaseTransition(e){let t=e.queries.map(e=>e.token),n=this.queriesContainingTokens(t),r=[];n.length>0&&(this.processPaginatedQuerySplits(n,e=>this.client.localQueryResultByToken(e)),r=n.map(e=>({token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}})));let i={...e,paginatedQueries:r};this.onTransition(i)}loadMoreOfPaginatedQuery(e,t){this.mustGetPaginatedQuery(e);let n=this.queryTokenForLastPageOfPaginatedQuery(e),r=this.client.localQueryResultByToken(n);if(!r)return!1;let i=Jt(r);if(i.isDone)return!1;this.addPageToPaginatedQuery(e,i.continueCursor,t);let a={timestamp:this.lastTransitionTs,reflectedMutations:[],queries:[],paginatedQueries:[{token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}}]};return this.onTransition(a),!0}queriesContainingTokens(e){if(e.length===0)return[];let t=[],n=new Set(e);for(let[e,r]of this.paginatedQuerySet)for(let i of this.allQueryTokens(r))if(n.has(i)){t.push(e);break}return t}processPaginatedQuerySplits(e,t){for(let n of e){let e=this.mustGetPaginatedQuery(n),{ongoingSplits:r,pageKeyToQuery:i,pageKeys:a}=e;for(let[n,[a,o]]of r)t(i.get(a).queryToken)!==void 0&&t(i.get(o).queryToken)!==void 0&&this.completePaginatedQuerySplit(e,n,a,o);for(let n of a){if(r.has(n))continue;let a=i.get(n).queryToken,o=t(a);if(!o)continue;let s=Jt(o);s.splitCursor&&(s.pageStatus===`SplitRecommended`||s.pageStatus===`SplitRequired`||s.page.length>e.options.initialNumItems*2)&&this.splitPaginatedQueryPage(e,n,s.splitCursor,s.continueCursor)}}}splitPaginatedQueryPage(e,t,n,r){let i=e.nextPageKey++,a=e.nextPageKey++,o={cursor:r,numItems:e.options.initialNumItems,id:e.id},s=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:null,endCursor:n}});e.pageKeyToQuery.set(i,s);let c=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:n,endCursor:r}});e.pageKeyToQuery.set(a,c),e.ongoingSplits.set(t,[i,a])}addPageToPaginatedQuery(e,t,n){let r=this.mustGetPaginatedQuery(e),i=r.nextPageKey++,a={cursor:t,numItems:n,id:r.id},o={...r.args,paginationOpts:a},s=this.client.subscribe(r.canonicalizedUdfPath,o);return r.pageKeys.push(i),r.pageKeyToQuery.set(i,s),s}removePaginatedQuerySubscriber(e){let t=this.paginatedQuerySet.get(e);if(t&&(--t.numSubscribers,!(t.numSubscribers>0))){for(let e of t.pageKeyToQuery.values())e.unsubscribe();this.paginatedQuerySet.delete(e)}}completePaginatedQuerySplit(e,t,n,r){let i=e.pageKeyToQuery.get(t);e.pageKeyToQuery.delete(t);let a=e.pageKeys.indexOf(t);e.pageKeys.splice(a,1,n,r),e.ongoingSplits.delete(t),i.unsubscribe()}activePageQueryTokens(e){return e.pageKeys.map(t=>e.pageKeyToQuery.get(t).queryToken)}allQueryTokens(e){return Array.from(e.pageKeyToQuery.values()).map(e=>e.queryToken)}queryTokenForLastPageOfPaginatedQuery(e){let t=this.mustGetPaginatedQuery(e),n=t.pageKeys[t.pageKeys.length-1];if(n===void 0)throw Error(`No pages for paginated query ${e}`);return t.pageKeyToQuery.get(n).queryToken}mustGetPaginatedQuery(e){let t=this.paginatedQuerySet.get(e);if(!t)throw Error(`paginated query no longer exists for token `+e);return t}},V=c(u(),1);function $t({getCurrentValue:e,subscribe:t}){let[n,r]=(0,V.useState)(()=>({getCurrentValue:e,subscribe:t,value:e()})),i=n.value;return(n.getCurrentValue!==e||n.subscribe!==t)&&(i=e(),r({getCurrentValue:e,subscribe:t,value:i})),(0,V.useEffect)(()=>{let n=!1,i=()=>{n||r(n=>{if(n.getCurrentValue!==e||n.subscribe!==t)return n;let r=e();return n.value===r?n:{...n,value:r}})},a=t(i);return i(),()=>{n=!0,a()}},[e,t]),i}var en=Object.defineProperty,tn=(e,t,n)=>t in e?en(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nn=(e,t,n)=>tn(e,typeof t==`symbol`?t:t+``,n),rn=5e3;if(V.default===void 0)throw Error(`Required dependency 'react' not found`);function an(e,t,n){function r(r){return mn(r),t.mutation(e,r,{optimisticUpdate:n})}return r.withOptimisticUpdate=function(r){if(n!==void 0)throw Error(`Already specified optimistic update for mutation ${R(e)}`);return an(e,t,r)},r}function on(e,t){return function(n){return t.action(e,n)}}var sn=class{constructor(e,t){if(nn(this,`address`),nn(this,`cachedSync`),nn(this,`cachedPaginatedQueryClient`),nn(this,`listeners`),nn(this,`options`),nn(this,`closed`,!1),nn(this,`_logger`),nn(this,`adminAuth`),nn(this,`fakeUserIdentity`),e===void 0)throw Error(`No address provided to ConvexReactClient.
If trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/
If running locally, make sure to run \`convex dev\` and ensure the .env.local file is populated.`);if(typeof e!=`string`)throw Error(`ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof e} instead.`);if(!e.includes(`://`))throw Error(`Provided address was not an absolute URL.`);this.address=e,this.listeners=new Map,this._logger=t?.logger===!1?Ee({verbose:t?.verbose??!1}):t?.logger!==!0&&t?.logger?t.logger:Te({verbose:t?.verbose??!1}),this.options={...t,logger:this._logger}}get url(){return this.address}get sync(){if(this.closed)throw Error(`ConvexReactClient has already been closed.`);return this.cachedSync?this.cachedSync:(this.cachedSync=new qt(this.address,()=>{},this.options),this.adminAuth&&this.cachedSync.setAdminAuth(this.adminAuth,this.fakeUserIdentity),this.cachedPaginatedQueryClient=new Qt(this.cachedSync,e=>this.handleTransition(e)),this.cachedSync)}get paginatedQueryClient(){if(this.sync,this.cachedPaginatedQueryClient)return this.cachedPaginatedQueryClient;throw Error(`Should already be instantiated`)}setAuth(e,t,n){if(typeof e==`string`)throw Error(`Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication.`);this.sync.setAuth(e,t??(()=>{}),n)}clearAuth(){this.sync.clearAuth()}setAdminAuth(e,t){if(this.adminAuth=e,this.fakeUserIdentity=t,this.closed)throw Error(`ConvexReactClient has already been closed.`);this.cachedSync&&this.sync.setAdminAuth(e,t)}watchQuery(e,...t){let[n,r]=t,i=R(e);return{onUpdate:e=>{let{queryToken:t,unsubscribe:a}=this.sync.subscribe(i,n,r),o=this.listeners.get(t);return o===void 0?this.listeners.set(t,new Set([e])):o.add(e),()=>{if(this.closed)return;let n=this.listeners.get(t);n.delete(e),n.size===0&&this.listeners.delete(t),a()}},localQueryResult:()=>{if(this.cachedSync)return this.cachedSync.localQueryResult(i,n)},localQueryLogs:()=>{if(this.cachedSync)return this.cachedSync.localQueryLogs(i,n)},journal:()=>{if(this.cachedSync)return this.cachedSync.queryJournal(i,n)}}}prewarmQuery(e){let t=e.extendSubscriptionFor??rn,n=this.watchQuery(e.query,e.args||{}).onUpdate(()=>{});setTimeout(n,t)}watchPaginatedQuery(e,t,n){let r=R(e);return{onUpdate:e=>{let{paginatedQueryToken:i,unsubscribe:a}=this.paginatedQueryClient.subscribe(r,t||{},n),o=this.listeners.get(i);return o===void 0?this.listeners.set(i,new Set([e])):o.add(e),()=>{if(this.closed)return;let t=this.listeners.get(i);t.delete(e),t.size===0&&this.listeners.delete(i),a()}},localQueryResult:()=>this.paginatedQueryClient.localQueryResult(r,t,n)}}mutation(e,...t){let[n,r]=t,i=R(e);return this.sync.mutation(i,n,r)}action(e,...t){let n=R(e);return this.sync.action(n,...t)}query(e,...t){let n=this.watchQuery(e,...t),r=n.localQueryResult();return r===void 0?new Promise((e,t)=>{let r=n.onUpdate(()=>{r();try{e(n.localQueryResult())}catch(e){t(e)}})}):Promise.resolve(r)}connectionState(){return this.sync.connectionState()}subscribeToConnectionState(e){return this.sync.subscribeToConnectionState(e)}get logger(){return this._logger}async close(){if(this.closed=!0,this.listeners=new Map,this.cachedPaginatedQueryClient&&=void 0,this.cachedSync){let e=this.cachedSync;this.cachedSync=void 0,await e.close()}}handleTransition(e){let t=e.queries.map(e=>e.token),n=e.paginatedQueries.map(e=>e.token);this.transition([...t,...n])}transition(e){for(let t of e){let e=this.listeners.get(t);if(e)for(let t of e)t()}}},cn=V.createContext(void 0);function ln(){return(0,V.useContext)(cn)}var un=({client:e,children:t})=>V.createElement(cn.Provider,{value:e},t);function dn(e,...t){let n=t[0]===`skip`,r=t[0]===`skip`?{}:C(t[0]),i=typeof e==`string`?Ke(e):e,a=R(i),o=yn((0,V.useMemo)(()=>n?{}:{query:{query:i,args:r}},[JSON.stringify(I(r)),a,n])).query;if(o instanceof Error)throw o;return o}function fn(e){let t=typeof e==`string`?Ke(e):e,n=(0,V.useContext)(cn);if(n===void 0)throw Error("Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return(0,V.useMemo)(()=>an(t,n),[n,R(t)])}function pn(e){let t=(0,V.useContext)(cn),n=typeof e==`string`?Ke(e):e;if(t===void 0)throw Error("Could not find Convex client! `useAction` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return(0,V.useMemo)(()=>on(n,t),[t,R(n)])}function mn(e){if(typeof e==`object`&&e&&`bubbles`in e&&`persist`in e&&`isDefaultPrevented`in e)throw Error("Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler.")}var hn=Object.defineProperty,gn=(e,t,n)=>t in e?hn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_n=(e,t,n)=>gn(e,typeof t==`symbol`?t:t+``,n),vn=class{constructor(e){_n(this,`createWatch`),_n(this,`queries`),_n(this,`listeners`),this.createWatch=e,this.queries={},this.listeners=new Set}setQueries(e){for(let t of Object.keys(e)){let{query:n,args:r,paginationOptions:i}=e[t];if(R(n),this.queries[t]===void 0)this.addQuery(t,n,r,i?{paginationOptions:i}:{});else{let e=this.queries[t];(R(n)!==R(e.query)||JSON.stringify(I(r))!==JSON.stringify(I(e.args))||JSON.stringify(i)!==JSON.stringify(e.paginationOptions))&&(this.removeQuery(t),this.addQuery(t,n,r,i?{paginationOptions:i}:{}))}}for(let t of Object.keys(this.queries))e[t]===void 0&&this.removeQuery(t)}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}getLocalResults(e){let t={};for(let n of Object.keys(e)){let{query:r,args:i}=e[n],a=e[n].paginationOptions;R(r);let o=this.createWatch(r,i,a?{paginationOptions:a}:{}),s;try{s=o.localQueryResult()}catch(e){if(e instanceof Error)s=e;else throw e}t[n]=s}return t}setCreateWatch(e){this.createWatch=e;for(let e of Object.keys(this.queries)){let{query:t,args:n,watch:r,paginationOptions:i}=this.queries[e],a=`journal`in r?r.journal():void 0;this.removeQuery(e),this.addQuery(e,t,n,{...a?{journal:a}:[],...i?{paginationOptions:i}:{}})}}destroy(){for(let e of Object.keys(this.queries))this.removeQuery(e);this.listeners=new Set}addQuery(e,t,n,{paginationOptions:r,journal:i}){if(this.queries[e]!==void 0)throw Error(`Tried to add a new query with identifier ${e} when it already exists.`);let a=this.createWatch(t,n,{...i?{journal:i}:[],...r?{paginationOptions:r}:{}}),o=a.onUpdate(()=>this.notifyListeners());this.queries[e]={query:t,args:n,watch:a,unsubscribe:o,...r?{paginationOptions:r}:{}}}removeQuery(e){let t=this.queries[e];if(t===void 0)throw Error(`No query found with identifier ${e}.`);t.unsubscribe(),delete this.queries[e]}notifyListeners(){for(let e of this.listeners)e()}};function yn(e){let t=ln();if(t===void 0)throw Error("Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return bn(e,(0,V.useMemo)(()=>(e,n,{journal:r,paginationOptions:i})=>i?t.watchPaginatedQuery(e,n,i):t.watchQuery(e,n,r?{journal:r}:{}),[t]))}function bn(e,t){let[n]=(0,V.useState)(()=>new vn(t));return n.createWatch!==t&&n.setCreateWatch(t),(0,V.useEffect)(()=>()=>n.destroy(),[n]),$t((0,V.useMemo)(()=>({getCurrentValue:()=>n.getLocalResults(e),subscribe:t=>(n.setQueries(e),n.subscribe(t))}),[n,e]))}var xn=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&O(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function E(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&O(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=E,D=function(){ne.postMessage(null)}}else D=function(){_(E,0)};function O(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,O(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),Sn=o(((e,t)=>{t.exports=xn()})),Cn=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),wn=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Cn()})),Tn=o((e=>{var t=Sn(),n=u(),r=wn();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,m=Symbol.for(`react.element`),h=Symbol.for(`react.transitional.element`),g=Symbol.for(`react.portal`),_=Symbol.for(`react.fragment`),v=Symbol.for(`react.strict_mode`),y=Symbol.for(`react.profiler`),b=Symbol.for(`react.consumer`),x=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),E=Symbol.for(`react.activity`),D=Symbol.for(`react.memo_cache_sentinel`),te=Symbol.iterator;function ne(e){return typeof e!=`object`||!e?null:(e=te&&e[te]||e[`@@iterator`],typeof e==`function`?e:null)}var O=Symbol.for(`react.client.reference`);function re(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===O?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case _:return`Fragment`;case y:return`Profiler`;case v:return`StrictMode`;case C:return`Suspense`;case w:return`SuspenseList`;case E:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case g:return`Portal`;case x:return e.displayName||`Context`;case b:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?re(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var k=Array.isArray,A=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ae=[],M=-1;function N(e){return{current:e}}function P(e){0>M||(e.current=ae[M],ae[M]=null,M--)}function F(e,t){M++,ae[M]=e.current,e.current=t}var oe=N(null),se=N(null),ce=N(null),le=N(null);function ue(e,t){switch(F(ce,t),F(se,e),F(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}P(oe),F(oe,e)}function I(){P(oe),P(se),P(ce)}function de(e){e.memoizedState!==null&&F(le,e);var t=oe.current,n=Hd(t,e.type);t!==n&&(F(se,e),F(oe,n))}function fe(e){se.current===e&&(P(oe),P(se)),le.current===e&&(P(le),Qf._currentValue=ie)}var pe,me;function he(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``,me=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+pe+e+me}var ge=!1;function _e(e,t){if(!e||ge)return``;ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?he(n):``}function ve(e,t){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he(`Lazy`);case 13:return e.child!==t&&t!==null?he(`Suspense Fallback`):he(`Suspense`);case 19:return he(`SuspenseList`);case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return he(`Activity`);default:return``}}function ye(e){try{var t=``,n=null;do t+=ve(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var be=Object.prototype.hasOwnProperty,xe=t.unstable_scheduleCallback,Se=t.unstable_cancelCallback,Ce=t.unstable_shouldYield,we=t.unstable_requestPaint,Te=t.unstable_now,Ee=t.unstable_getCurrentPriorityLevel,De=t.unstable_ImmediatePriority,Oe=t.unstable_UserBlockingPriority,L=t.unstable_NormalPriority,ke=t.unstable_LowPriority,Ae=t.unstable_IdlePriority,je=t.log,Me=t.unstable_setDisableYieldValue,Ne=null,Pe=null;function Fe(e){if(typeof je==`function`&&Me(e),Pe&&typeof Pe.setStrictMode==`function`)try{Pe.setStrictMode(Ne,e)}catch{}}var Ie=Math.clz32?Math.clz32:ze,Le=Math.log,Re=Math.LN2;function ze(e){return e>>>=0,e===0?32:31-(Le(e)/Re|0)|0}var Be=256,Ve=262144,He=4194304;function Ue(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function We(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ue(n))):i=Ue(o):i=Ue(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ue(n))):i=Ue(o)):i=Ue(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ge(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function R(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ke(){var e=He;return He<<=1,!(He&62914560)&&(He=4194304),e}function qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Je(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ye(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ie(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Xe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Xe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ie(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ze(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Qe(e,t){var n=t&-t;return n=n&42?1:$e(n),(n&(e.suspendedLanes|t))===0?n:0}function $e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function et(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function tt(){var e=j.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function nt(e,t){var n=j.p;try{return j.p=e,t()}finally{j.p=n}}var rt=Math.random().toString(36).slice(2),it=`__reactFiber$`+rt,at=`__reactProps$`+rt,ot=`__reactContainer$`+rt,st=`__reactEvents$`+rt,ct=`__reactListeners$`+rt,lt=`__reactHandles$`+rt,ut=`__reactResources$`+rt,dt=`__reactMarker$`+rt;function ft(e){delete e[it],delete e[at],delete e[st],delete e[ct],delete e[lt]}function pt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[it])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function mt(e){if(e=e[it]||e[ot]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ht(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function gt(e){var t=e[ut];return t||=e[ut]={hoistableStyles:new Map,hoistableScripts:new Map},t}function _t(e){e[dt]=!0}var vt=new Set,z={};function yt(e,t){bt(e,t),bt(e+`Capture`,t)}function bt(e,t){for(z[e]=t,e=0;e<t.length;e++)vt.add(t[e])}var xt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),St={},Ct={};function wt(e){return be.call(Ct,e)?!0:be.call(St,e)?!1:xt.test(e)?Ct[e]=!0:(St[e]=!0,!1)}function Tt(e,t,n){if(wt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Et(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Dt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ot(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function kt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function At(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jt(e){if(!e._valueTracker){var t=kt(e)?`checked`:`value`;e._valueTracker=At(e,t,``+e[t])}}function Mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=kt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Nt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Pt=/[\n"\\]/g;function Ft(e){return e.replace(Pt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function It(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ot(t)):e.value!==``+Ot(t)&&(e.value=``+Ot(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Rt(e,o,Ot(n)):Rt(e,o,Ot(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ot(s):e.removeAttribute(`name`)}function Lt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){jt(e);return}n=n==null?``:``+Ot(n),t=t==null?n:``+Ot(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),jt(e)}function Rt(e,t,n){t===`number`&&Nt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bt(e,t,n){if(t!=null&&(t=``+Ot(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ot(n)}function Vt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(k(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ot(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),jt(e)}function Ht(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ut=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Wt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Ut.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Gt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Wt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Wt(e,o,t[o])}function Kt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var B=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jt(e){return qt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Yt(){}var Xt=null;function Zt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qt=null,V=null;function $t(e){var t=mt(e);if(t&&(e=t.stateNode)){var n=e[at]||null;a:switch(e=t.stateNode,t.type){case`input`:if(It(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ft(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[at]||null;if(!a)throw Error(i(90));It(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Mt(r)}break a;case`textarea`:Bt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&zt(e,!!n.multiple,t,!1)}}}var en=!1;function tn(e,t,n){if(en)return e(t,n);en=!0;try{return e(t)}finally{if(en=!1,(Qt!==null||V!==null)&&(bu(),Qt&&(t=Qt,e=V,V=Qt=null,$t(t),e)))for(t=0;t<e.length;t++)$t(e[t])}}function nn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[at]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var rn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),an=!1;if(rn)try{var on={};Object.defineProperty(on,"passive",{get:function(){an=!0}}),window.addEventListener(`test`,on,on),window.removeEventListener(`test`,on,on)}catch{an=!1}var sn=null,cn=null,ln=null;function un(){if(ln)return ln;var e,t=cn,n=t.length,r,i=`value`in sn?sn.value:sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ln=i.slice(e,1<r?1-r:void 0)}function dn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fn(){return!0}function pn(){return!1}function mn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?fn:pn,this.isPropagationStopped=pn,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=fn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=fn)},persist:function(){},isPersistent:fn}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gn=mn(hn),_n=p({},hn,{view:0,detail:0}),vn=mn(_n),yn,bn,xn,Cn=p({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:H,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==xn&&(xn&&e.type===`mousemove`?(yn=e.screenX-xn.screenX,bn=e.screenY-xn.screenY):bn=yn=0,xn=e),yn)},movementY:function(e){return`movementY`in e?e.movementY:bn}}),Tn=mn(Cn),En=mn(p({},Cn,{dataTransfer:0})),Dn=mn(p({},_n,{relatedTarget:0})),On=mn(p({},hn,{animationName:0,elapsedTime:0,pseudoElement:0})),kn=mn(p({},hn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),An=mn(p({},hn,{data:0})),jn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Mn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Nn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nn[e])?!!t[e]:!1}function H(){return Pn}var Fn=mn(p({},_n,{key:function(e){if(e.key){var t=jn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=dn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Mn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:H,charCode:function(e){return e.type===`keypress`?dn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?dn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),In=mn(p({},Cn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ln=mn(p({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:H})),Rn=mn(p({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0})),zn=mn(p({},Cn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Bn=mn(p({},hn,{newState:0,oldState:0})),Vn=[9,13,27,32],Hn=rn&&`CompositionEvent`in window,Un=null;rn&&`documentMode`in document&&(Un=document.documentMode);var Wn=rn&&`TextEvent`in window&&!Un,Gn=rn&&(!Hn||Un&&8<Un&&11>=Un),Kn=` `,qn=!1;function Jn(e,t){switch(e){case`keyup`:return Vn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Yn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Xn=!1;function Zn(e,t){switch(e){case`compositionend`:return Yn(t);case`keypress`:return t.which===32?(qn=!0,Kn):null;case`textInput`:return e=t.data,e===Kn&&qn?null:e;default:return null}}function Qn(e,t){if(Xn)return e===`compositionend`||!Hn&&Jn(e,t)?(e=un(),ln=cn=sn=null,Xn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Gn&&t.locale!==`ko`?null:t.data;default:return null}}var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!$n[e.type]:t===`textarea`}function tr(e,t,n,r){Qt?V?V.push(r):V=[r]:Qt=r,t=Ed(t,`onChange`),0<t.length&&(n=new gn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function ir(e){yd(e,0)}function ar(e){if(Mt(ht(e)))return e}function or(e,t){if(e===`change`)return t}var sr=!1;if(rn){var cr;if(rn){var lr=`oninput`in document;if(!lr){var ur=document.createElement(`div`);ur.setAttribute(`oninput`,`return;`),lr=typeof ur.oninput==`function`}cr=lr}else cr=!1;sr=cr&&(!document.documentMode||9<document.documentMode)}function dr(){nr&&(nr.detachEvent(`onpropertychange`,U),rr=nr=null)}function U(e){if(e.propertyName===`value`&&ar(rr)){var t=[];tr(t,rr,e,Zt(e)),tn(ir,t)}}function fr(e,t,n){e===`focusin`?(dr(),nr=t,rr=n,nr.attachEvent(`onpropertychange`,U)):e===`focusout`&&dr()}function pr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ar(rr)}function mr(e,t){if(e===`click`)return ar(t)}function hr(e,t){if(e===`input`||e===`change`)return ar(t)}function gr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var _r=typeof Object.is==`function`?Object.is:gr;function vr(e,t){if(_r(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!be.call(t,i)||!_r(e[i],t[i]))return!1}return!0}function yr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function br(e,t){var n=yr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=yr(n)}}function xr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Nt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nt(e.document)}return t}function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var wr=rn&&`documentMode`in document&&11>=document.documentMode,Tr=null,Er=null,Dr=null,Or=!1;function kr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Or||Tr==null||Tr!==Nt(r)||(r=Tr,`selectionStart`in r&&Cr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&vr(Dr,r)||(Dr=r,r=Ed(Er,`onSelect`),0<r.length&&(t=new gn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Tr)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var jr={animationend:Ar(`Animation`,`AnimationEnd`),animationiteration:Ar(`Animation`,`AnimationIteration`),animationstart:Ar(`Animation`,`AnimationStart`),transitionrun:Ar(`Transition`,`TransitionRun`),transitionstart:Ar(`Transition`,`TransitionStart`),transitioncancel:Ar(`Transition`,`TransitionCancel`),transitionend:Ar(`Transition`,`TransitionEnd`)},Mr={},Nr={};rn&&(Nr=document.createElement(`div`).style,`AnimationEvent`in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),`TransitionEvent`in window||delete jr.transitionend.transition);function Pr(e){if(Mr[e])return Mr[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nr)return Mr[e]=t[n];return e}var Fr=Pr(`animationend`),Ir=Pr(`animationiteration`),Lr=Pr(`animationstart`),Rr=Pr(`transitionrun`),zr=Pr(`transitionstart`),Br=Pr(`transitioncancel`),Vr=Pr(`transitionend`),Hr=new Map,Ur=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Ur.push(`scrollEnd`);function Wr(e,t){Hr.set(e,t),yt(t,[e])}var Gr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Kr=[],qr=0,Jr=0;function Yr(){for(var e=qr,t=Jr=qr=0;t<e;){var n=Kr[t];Kr[t++]=null;var r=Kr[t];Kr[t++]=null;var i=Kr[t];Kr[t++]=null;var a=Kr[t];if(Kr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&$r(n,i,a)}}function Xr(e,t,n,r){Kr[qr++]=e,Kr[qr++]=t,Kr[qr++]=n,Kr[qr++]=r,Jr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Zr(e,t,n,r){return Xr(e,t,n,r),ei(e)}function Qr(e,t){return Xr(e,null,null,t),ei(e)}function $r(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ie(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ei(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ti={};function ni(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,t,n,r){return new ni(e,t,n,r)}function ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ai(e,t){var n=e.alternate;return n===null?(n=ri(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function oi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function si(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ii(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,oe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case E:return e=ri(31,n,t,a),e.elementType=E,e.lanes=o,e;case _:return ci(n.children,a,o,t);case v:s=8,a|=24;break;case y:return e=ri(12,n,t,a|2),e.elementType=y,e.lanes=o,e;case C:return e=ri(13,n,t,a),e.elementType=C,e.lanes=o,e;case w:return e=ri(19,n,t,a),e.elementType=w,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case x:s=10;break a;case b:s=9;break a;case S:s=11;break a;case ee:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ri(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ci(e,t,n,r){return e=ri(7,e,r,t),e.lanes=n,e}function li(e,t,n){return e=ri(6,e,null,t),e.lanes=n,e}function ui(e){var t=ri(18,null,null,0);return t.stateNode=e,t}function di(e,t,n){return t=ri(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var fi=new WeakMap;function pi(e,t){if(typeof e==`object`&&e){var n=fi.get(e);return n===void 0?(t={value:e,source:t,stack:ye(t)},fi.set(e,t),t):n}return{value:e,source:t,stack:ye(t)}}var mi=[],hi=0,gi=null,_i=0,vi=[],yi=0,bi=null,xi=1,Si=``;function Ci(e,t){mi[hi++]=_i,mi[hi++]=gi,gi=e,_i=t}function wi(e,t,n){vi[yi++]=xi,vi[yi++]=Si,vi[yi++]=bi,bi=e;var r=xi;e=Si;var i=32-Ie(r)-1;r&=~(1<<i),n+=1;var a=32-Ie(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xi=1<<32-Ie(t)+i|n<<i|r,Si=a+e}else xi=1<<a|n<<i|r,Si=e}function Ti(e){e.return!==null&&(Ci(e,1),wi(e,1,0))}function Ei(e){for(;e===gi;)gi=mi[--hi],mi[hi]=null,_i=mi[--hi],mi[hi]=null;for(;e===bi;)bi=vi[--yi],vi[yi]=null,Si=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null}function Di(e,t){vi[yi++]=xi,vi[yi++]=Si,vi[yi++]=bi,xi=t.id,Si=t.overflow,bi=e}var Oi=null,ki=null,W=!1,Ai=null,ji=!1,Mi=Error(i(519));function Ni(e){throw zi(pi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Mi}function Pi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[it]=e,t[at]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Lt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Vt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Yt),t=!0):t=!1,t||Ni(e,!0)}function Fi(e){for(Oi=e.return;Oi;)switch(Oi.tag){case 5:case 31:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:Oi=Oi.return}}function Ii(e){if(e!==Oi)return!1;if(!W)return Fi(e),W=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&ki&&Ni(e),Fi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ki=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ki=uf(e)}else t===27?(t=ki,Zd(e.type)?(e=lf,lf=null,ki=e):ki=t):ki=Oi?cf(e.stateNode.nextSibling):null;return!0}function Li(){ki=Oi=null,W=!1}function Ri(){var e=Ai;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ai=null),e}function zi(e){Ai===null?Ai=[e]:Ai.push(e)}var Bi=N(null),Vi=null,Hi=null;function Ui(e,t,n){F(Bi,t._currentValue),t._currentValue=n}function Wi(e){e._currentValue=Bi.current,P(Bi)}function Gi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ki(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Gi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Gi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function qi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;_r(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===le.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Ki(t,e,n,r),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!_r(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yi(e){Vi=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xi(e){return Qi(Vi,e)}function Zi(e,t){return Vi===null&&Yi(e),Qi(e,t)}function Qi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Hi===null){if(e===null)throw Error(i(308));Hi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Hi=Hi.next=t;return n}var $i=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ea=t.unstable_scheduleCallback,ta=t.unstable_NormalPriority,na={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ra(){return{controller:new $i,data:new Map,refCount:0}}function ia(e){e.refCount--,e.refCount===0&&ea(ta,function(){e.controller.abort()})}var aa=null,oa=0,sa=0,ca=null;function la(e,t){if(aa===null){var n=aa=[];oa=0,sa=dd(),ca={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return oa++,t.then(ua,ua),t}function ua(){if(--oa===0&&aa!==null){ca!==null&&(ca.status=`fulfilled`);var e=aa;aa=null,sa=0,ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function da(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var fa=A.S;A.S=function(e,t){eu=Te(),typeof t==`object`&&t&&typeof t.then==`function`&&la(e,t),fa!==null&&fa(e,t)};var pa=N(null);function ma(){var e=pa.current;return e===null?Rl.pooledCache:e}function ha(e,t){t===null?F(pa,pa.current):F(pa,t.pool)}function ga(){var e=ma();return e===null?null:{parent:na._currentValue,pool:e}}var _a=Error(i(460)),va=Error(i(474)),ya=Error(i(542)),ba={then:function(){}};function xa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Sa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Yt,Yt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ea(e),e;default:if(typeof t.status==`string`)t.then(Yt,Yt);else{if(e=Rl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ea(e),e}throw wa=t,_a}}function Ca(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(wa=e,_a):e}}var wa=null;function Ta(){if(wa===null)throw Error(i(459));var e=wa;return wa=null,e}function Ea(e){if(e===_a||e===ya)throw Error(i(483))}var Da=null,Oa=0;function ka(e){var t=Oa;return Oa+=1,Da===null&&(Da=[]),Sa(Da,e,t)}function Aa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ja(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ma(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ai(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=li(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===_?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Ca(i)===t.type)?(t=a(t,n.props),Aa(t,n),t.return=e,t):(t=si(n.type,n.key,n.props,null,e.mode,r),Aa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=di(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ci(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=li(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case h:return n=si(t.type,t.key,t.props,null,e.mode,n),Aa(n,t),n.return=e,n;case g:return t=di(t,e.mode,n),t.return=e,t;case T:return t=Ca(t),f(e,t,n)}if(k(t)||ne(t))return t=ci(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ka(t),n);if(t.$$typeof===x)return f(e,Zi(e,t),n);ja(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case h:return n.key===i?l(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case T:return n=Ca(n),p(e,t,n,r)}if(k(n)||ne(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ka(n),r);if(n.$$typeof===x)return p(e,t,Zi(e,n),r);ja(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case h:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case g:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Ca(r),m(e,t,n,r,i)}if(k(r)||ne(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ka(r),i);if(r.$$typeof===x)return m(e,t,n,Zi(t,r),i);ja(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),W&&Ci(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return W&&Ci(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),W&&Ci(i,h),l}function y(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),W&&Ci(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return W&&Ci(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),W&&Ci(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===_&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case h:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===_){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Ca(l)===r.type){n(e,r.sibling),c=a(r,o.props),Aa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===_?(c=ci(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=si(o.type,o.key,o.props,null,e.mode,c),Aa(c,o),c.return=e,e=c)}return s(e);case g:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=di(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Ca(o),b(e,r,o,c)}if(k(o))return v(e,r,o,c);if(ne(o)){if(l=ne(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,ka(o),c);if(o.$$typeof===x)return b(e,r,Zi(e,o),c);ja(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=li(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Oa=0;var i=b(e,t,n,r);return Da=null,i}catch(t){if(t===_a||t===ya)throw t;var a=ri(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Na=Ma(!0),Pa=Ma(!1),Fa=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ei(e),$r(e,null,n),t}return Xr(e,r,t,n),ei(e)}function Ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ha=!1;function Ua(){if(Ha){var e=ca;if(e!==null)throw e}}function Wa(e,t,n,r){Ha=!1;var i=e.updateQueue;Fa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,m=f!==s.lane;if(m?(Y&f)===f:(r&f)===f){f!==0&&f===sa&&(Ha=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=p({},d,f);break a;case 2:Fa=!0}}f=s.callback,f!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[f]:m.push(f))}else m={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ga(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ka(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ga(n[e],t)}var qa=N(null),Ja=N(0);function Ya(e,t){e=Ul,F(Ja,e),F(qa,t),Ul=e|t.baseLanes}function Xa(){F(Ja,Ul),F(qa,qa.current)}function Za(){Ul=Ja.current,P(qa),P(Ja)}var Qa=N(null),$a=null;function eo(e){var t=e.alternate;F(ao,ao.current&1),F(Qa,e),$a===null&&(t===null||qa.current!==null||t.memoizedState!==null)&&($a=e)}function to(e){F(ao,ao.current),F(Qa,e),$a===null&&($a=e)}function no(e){e.tag===22?(F(ao,ao.current),F(Qa,e),$a===null&&($a=e)):ro(e)}function ro(){F(ao,ao.current),F(Qa,Qa.current)}function io(e){P(Qa),$a===e&&($a=null),P(ao)}var ao=N(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var so=0,G=null,K=null,co=null,lo=!1,uo=!1,fo=!1,po=0,mo=0,ho=null,go=0;function _o(){throw Error(i(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_r(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,i,a){return so=a,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Is:Ls,fo=!1,a=n(r,i),fo=!1,uo&&(a=xo(t,n,r,i)),bo(e),a}function bo(e){A.H=Fs;var t=K!==null&&K.next!==null;if(so=0,co=K=G=null,lo=!1,mo=0,ho=null,t)throw Error(i(300));e===null||ec||(e=e.dependencies,e!==null&&Ji(e)&&(ec=!0))}function xo(e,t,n,r){G=e;var a=0;do{if(uo&&(ho=null),mo=0,uo=!1,25<=a)throw Error(i(301));if(a+=1,co=K=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}A.H=Rs,o=t(n,r)}while(uo);return o}function So(){var e=A.H,t=e.useState()[0];return t=typeof t.then==`function`?ko(t):t,e=e.useState()[0],(K===null?null:K.memoizedState)!==e&&(G.flags|=1024),t}function Co(){var e=po!==0;return po=0,e}function wo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function To(e){if(lo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lo=!1}so=0,co=K=G=null,uo=!1,mo=po=0,ho=null}function Eo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return co===null?G.memoizedState=co=e:co=co.next=e,co}function Do(){if(K===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=K.next;var t=co===null?G.memoizedState:co.next;if(t!==null)co=t,K=e;else{if(e===null)throw G.alternate===null?Error(i(467)):Error(i(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},co===null?G.memoizedState=co=e:co=co.next=e}return co}function Oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var t=mo;return mo+=1,ho===null&&(ho=[]),e=Sa(ho,e,t),t=G,(co===null?t.memoizedState:co.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Is:Ls),e}function Ao(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ko(e);if(e.$$typeof===x)return Xi(e)}throw Error(i(438,String(e)))}function jo(e){var t=null,n=G.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=G.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Oo(),G.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=D;return t.index++,n}function Mo(e,t){return typeof t==`function`?t(e):t}function No(e){return Po(Do(),K,e)}function Po(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(so&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===sa&&(d=!0);else if((so&p)===p){u=u.next,p===sa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,G.lanes|=p,Gl|=p;f=u.action,fo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,G.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!_r(o,e.memoizedState)&&(ec=!0,d&&(n=ca,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Fo(e){var t=Do(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);_r(o,t.memoizedState)||(ec=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Io(e,t,n){var r=G,a=Do(),o=W;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!_r((K||a).memoizedState,n);if(s&&(a.memoizedState=n,ec=!0),a=a.queue,ss(zo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||co!==null&&co.memoizedState.tag&1){if(r.flags|=2048,ns(9,{destroy:void 0},Ro.bind(null,r,a,n,t),null),Rl===null)throw Error(i(349));o||so&127||Lo(r,t,n)}return n}function Lo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t=Oo(),G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ro(e,t,n,r){t.value=n,t.getSnapshot=r,Bo(t)&&Vo(e)}function zo(e,t,n){return n(function(){Bo(t)&&Vo(e)})}function Bo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_r(e,n)}catch{return!0}}function Vo(e){var t=Qr(e,2);t!==null&&hu(t,e,2)}function Ho(e){var t=Eo();if(typeof e==`function`){var n=e;if(e=n(),fo){Fe(!0);try{n()}finally{Fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t}function Uo(e,t,n,r){return e.baseState=n,Po(e,K,typeof r==`function`?r:Mo)}function Wo(e,t,n,r,a){if(Ms(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};A.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Go(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Go(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=A.T,o={};A.T=o;try{var s=n(i,r),c=A.S;c!==null&&c(o,s),Ko(e,t,s)}catch(n){Jo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),A.T=a}}else try{a=n(i,r),Ko(e,t,a)}catch(n){Jo(e,t,n)}}function Ko(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){qo(e,t,n)},function(n){return Jo(e,t,n)}):qo(e,t,n)}function qo(e,t,n){t.status=`fulfilled`,t.value=n,Yo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Go(e,n)))}function Jo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Yo(t),t=t.next;while(t!==r)}e.action=null}function Yo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xo(e,t){return t}function Zo(e,t){if(W){var n=Rl.formState;if(n!==null){a:{var r=G;if(W){if(ki){b:{for(var i=ki,a=ji;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){ki=cf(i.nextSibling),r=i.data===`F!`;break a}}Ni(r)}r=!1}r&&(t=n[0])}}return n=Eo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},n.queue=r,n=ks.bind(null,G,r),r.dispatch=n,r=Ho(!1),a=js.bind(null,G,!1,r.queue),r=Eo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Wo.bind(null,G,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Qo(e){return $o(Do(),K,e)}function $o(e,t,n){if(t=Po(e,t,Xo)[0],e=No(Mo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ko(t)}catch(e){throw e===_a?ya:e}else r=t;t=Do();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(G.flags|=2048,ns(9,{destroy:void 0},es.bind(null,i,n),null)),[r,a,e]}function es(e,t){e.action=t}function ts(e){var t=Do(),n=K;if(n!==null)return $o(t,n,e);Do(),t=t.memoizedState,n=Do();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ns(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=G.updateQueue,t===null&&(t=Oo(),G.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function rs(){return Do().memoizedState}function is(e,t,n,r){var i=Eo();G.flags|=e,i.memoizedState=ns(1|t,{destroy:void 0},n,r===void 0?null:r)}function as(e,t,n,r){var i=Do();r=r===void 0?null:r;var a=i.memoizedState.inst;K!==null&&r!==null&&vo(r,K.memoizedState.deps)?i.memoizedState=ns(t,a,n,r):(G.flags|=e,i.memoizedState=ns(1|t,a,n,r))}function os(e,t){is(8390656,8,e,t)}function ss(e,t){as(2048,8,e,t)}function cs(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=Oo(),G.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ls(e){var t=Do().memoizedState;return cs({ref:t,nextImpl:e}),function(){if(q&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function us(e,t){return as(4,2,e,t)}function ds(e,t){return as(4,4,e,t)}function fs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ps(e,t,n){n=n==null?null:n.concat([e]),as(4,4,fs.bind(null,t,e),n)}function ms(){}function hs(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gs(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&vo(t,r[1]))return r[0];if(r=e(),fo){Fe(!0);try{e()}finally{Fe(!1)}}return n.memoizedState=[r,t],r}function _s(e,t,n){return n===void 0||so&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),G.lanes|=e,Gl|=e,n)}function vs(e,t,n,r){return _r(n,t)?n:qa.current===null?!(so&42)||so&1073741824&&!(Y&261930)?(ec=!0,e.memoizedState=n):(e=mu(),G.lanes|=e,Gl|=e,t):(e=_s(e,n,r),_r(e,t)||(ec=!0),e)}function ys(e,t,n,r,i){var a=j.p;j.p=a!==0&&8>a?a:8;var o=A.T,s={};A.T=s,js(e,!1,t,n);try{var c=i(),l=A.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?As(e,t,da(c,r),pu(e)):As(e,t,r,pu(e))}catch(n){As(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{j.p=a,o!==null&&s.types!==null&&(o.types=s.types),A.T=o}}function bs(){}function xs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ss(e).queue;ys(e,a,t,ie,n===null?bs:function(){return Cs(e),n(r)})}function Ss(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cs(e){var t=Ss(e);t.next===null&&(t=e.alternate.memoizedState),As(e,t.next.queue,{},pu())}function ws(){return Xi(Qf)}function Ts(){return Do().memoizedState}function Es(){return Do().memoizedState}function Ds(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ra(n);var r=za(t,e,n);r!==null&&(hu(r,t,n),Ba(r,t,n)),t={cache:ra()},e.payload=t;return}t=t.return}}function Os(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ms(e)?Ns(t,n):(n=Zr(e,t,n,r),n!==null&&(hu(n,e,r),Ps(n,t,r)))}function ks(e,t,n){As(e,t,n,pu())}function As(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ms(e))Ns(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,_r(s,o))return Xr(e,t,i,0),Rl===null&&Yr(),!1}catch{}if(n=Zr(e,t,i,r),n!==null)return hu(n,e,r),Ps(n,t,r),!0}return!1}function js(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ms(e)){if(t)throw Error(i(479))}else t=Zr(e,n,r,2),t!==null&&hu(t,e,2)}function Ms(e){var t=e.alternate;return e===G||t!==null&&t===G}function Ns(e,t){uo=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ps(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}var Fs={readContext:Xi,use:Ao,useCallback:_o,useContext:_o,useEffect:_o,useImperativeHandle:_o,useLayoutEffect:_o,useInsertionEffect:_o,useMemo:_o,useReducer:_o,useRef:_o,useState:_o,useDebugValue:_o,useDeferredValue:_o,useTransition:_o,useSyncExternalStore:_o,useId:_o,useHostTransitionStatus:_o,useFormState:_o,useActionState:_o,useOptimistic:_o,useMemoCache:_o,useCacheRefresh:_o};Fs.useEffectEvent=_o;var Is={readContext:Xi,use:Ao,useCallback:function(e,t){return Eo().memoizedState=[e,t===void 0?null:t],e},useContext:Xi,useEffect:os,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),is(4194308,4,fs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){is(4,2,e,t)},useMemo:function(e,t){var n=Eo();t=t===void 0?null:t;var r=e();if(fo){Fe(!0);try{e()}finally{Fe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Eo();if(n!==void 0){var i=n(t);if(fo){Fe(!0);try{n(t)}finally{Fe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Os.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Eo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ho(e);var t=e.queue,n=ks.bind(null,G,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ms,useDeferredValue:function(e,t){return _s(Eo(),e,t)},useTransition:function(){var e=Ho(!1);return e=ys.bind(null,G,e.queue,!0,!1),Eo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=G,a=Eo();if(W){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Rl===null)throw Error(i(349));Y&127||Lo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,os(zo.bind(null,r,o,e),[e]),r.flags|=2048,ns(9,{destroy:void 0},Ro.bind(null,r,o,n,t),null),n},useId:function(){var e=Eo(),t=Rl.identifierPrefix;if(W){var n=Si,r=xi;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=po++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=go++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ws,useFormState:Zo,useActionState:Zo,useOptimistic:function(e){var t=Eo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=js.bind(null,G,!0,n),n.dispatch=t,[e,t]},useMemoCache:jo,useCacheRefresh:function(){return Eo().memoizedState=Ds.bind(null,G)},useEffectEvent:function(e){var t=Eo(),n={impl:e};return t.memoizedState=n,function(){if(q&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ls={readContext:Xi,use:Ao,useCallback:hs,useContext:Xi,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:No,useRef:rs,useState:function(){return No(Mo)},useDebugValue:ms,useDeferredValue:function(e,t){return vs(Do(),K.memoizedState,e,t)},useTransition:function(){var e=No(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Ts,useHostTransitionStatus:ws,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){return Uo(Do(),K,e,t)},useMemoCache:jo,useCacheRefresh:Es};Ls.useEffectEvent=ls;var Rs={readContext:Xi,use:Ao,useCallback:hs,useContext:Xi,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:Fo,useRef:rs,useState:function(){return Fo(Mo)},useDebugValue:ms,useDeferredValue:function(e,t){var n=Do();return K===null?_s(n,e,t):vs(n,K.memoizedState,e,t)},useTransition:function(){var e=Fo(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Ts,useHostTransitionStatus:ws,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){var n=Do();return K===null?(n.baseState=e,[e,n.queue.dispatch]):Uo(n,K,e,t)},useMemoCache:jo,useCacheRefresh:Es};Rs.useEffectEvent=ls;function zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ra(r);i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(hu(t,e,r),Ba(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ra(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(hu(t,e,r),Ba(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ra(n);r.tag=2,t!=null&&(r.callback=t),t=za(e,r,n),t!==null&&(hu(t,e,n),Ba(t,e,n))}};function Vs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!vr(n,r)||!vr(i,a):!0}function Hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Us(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ws(e){Gr(e)}function Gs(e){console.error(e)}function Ks(e){Gr(e)}function qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Js(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){return n=Ra(n),n.tag=3,n.payload={element:null},n.callback=function(){qs(e,t)},n}function Xs(e){return e=Ra(e),e.tag=3,e}function Zs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Js(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Js(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Qs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&qi(t,n,a,!0),n=Qa.current,n!==null){switch(n.tag){case 31:case 13:return $a===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ba?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ba?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(W)return t=Qa.current,t===null?(r!==Mi&&(t=Error(i(423),{cause:r}),zi(pi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=pi(r,n),a=Ys(e.stateNode,r,a),Va(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Mi&&(e=Error(i(422),{cause:r}),zi(pi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=pi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=pi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ys(n.stateNode,r,e),Va(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Xs(a),Zs(a,e,n,r),Va(n,a),!1}n=n.return}while(n!==null);return!1}var $s=Error(i(461)),ec=!1;function tc(e,t,n,r){t.child=e===null?Pa(t,null,n,r):Na(t,e.child,n,r)}function nc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Yi(t),r=yo(e,t,n,o,a,i),s=Co(),e!==null&&!ec?(wo(e,t,i),Ec(e,t,i)):(W&&s&&Ti(t),t.flags|=1,tc(e,t,r,i),t.child)}function rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ii(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ic(e,t,a,r,i)):(e=si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Dc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?vr:n,n(o,r)&&e.ref===t.ref)return Ec(e,t,i)}return t.flags|=1,e=ai(a,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(vr(a,r)&&e.ref===t.ref)if(ec=!1,t.pendingProps=r=a,Dc(e,i))e.flags&131072&&(ec=!0);else return t.lanes=e.lanes,Ec(e,t,i)}return fc(e,t,n,r,i)}function ac(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return sc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ha(t,a===null?null:a.cachePool),a===null?Xa():Ya(t,a),no(t);else return r=t.lanes=536870912,sc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ha(t,null),Xa(),ro(t)):(ha(t,a.cachePool),Ya(t,a),ro(t),t.memoizedState=null);return tc(e,t,i,n),t.child}function oc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sc(e,t,n,r,i){var a=ma();return a=a===null?null:{parent:na._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ha(t,null),Xa(),no(t),e!==null&&qi(e,t,r,!0),t.childLanes=i,null}function cc(e,t){return t=xc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lc(e,t,n){return Na(t,e.child,null,n),e=cc(t,t.pendingProps),e.flags|=2,io(t),t.memoizedState=null,e}function uc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(W){if(r.mode===`hidden`)return e=cc(t,r),t.lanes=536870912,oc(null,e);if(to(t),(e=ki)?(e=rf(e,ji),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bi===null?null:{id:xi,overflow:Si},retryLane:536870912,hydrationErrors:null},n=ui(e),n.return=t,t.child=n,Oi=t,ki=null)):e=null,e===null)throw Ni(t);return t.lanes=536870912,null}return cc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(to(t),a)if(t.flags&256)t.flags&=-257,t=lc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ec||qi(e,t,n,!1),a=(n&e.childLanes)!==0,ec||a){if(r=Rl,r!==null&&(s=Qe(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Qr(e,s),hu(r,e,s),$s;Du(),t=lc(e,t,n)}else e=o.treeContext,ki=cf(s.nextSibling),Oi=t,W=!0,Ai=null,ji=!1,e!==null&&Di(t,e),t=cc(t,r),t.flags|=4096;return t}return e=ai(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function dc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function fc(e,t,n,r,i){return Yi(t),n=yo(e,t,n,r,void 0,i),r=Co(),e!==null&&!ec?(wo(e,t,i),Ec(e,t,i)):(W&&r&&Ti(t),t.flags|=1,tc(e,t,n,i),t.child)}function pc(e,t,n,r,i,a){return Yi(t),t.updateQueue=null,n=xo(t,r,n,i),bo(e),r=Co(),e!==null&&!ec?(wo(e,t,a),Ec(e,t,a)):(W&&r&&Ti(t),t.flags|=1,tc(e,t,n,a),t.child)}function mc(e,t,n,r,i){if(Yi(t),t.stateNode===null){var a=ti,o=n.contextType;typeof o==`object`&&o&&(a=Xi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Bs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ia(t),o=n.contextType,a.context=typeof o==`object`&&o?Xi(o):ti,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(zs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Bs.enqueueReplaceState(a,a.state,null),Wa(t,r,a,i),Ua(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Us(n,s);a.props=c;var l=a.context,u=n.contextType;o=ti,typeof u==`object`&&u&&(o=Xi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Hs(t,a,r,o),Fa=!1;var f=t.memoizedState;a.state=f,Wa(t,r,a,i),Ua(),l=t.memoizedState,s||f!==l||Fa?(typeof d==`function`&&(zs(t,n,d,r),l=t.memoizedState),(c=Fa||Vs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,La(e,t),o=t.memoizedProps,u=Us(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ti,typeof l==`object`&&l&&(c=Xi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Hs(t,a,r,c),Fa=!1,f=t.memoizedState,a.state=f,Wa(t,r,a,i),Ua();var p=t.memoizedState;o!==d||f!==p||Fa||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof s==`function`&&(zs(t,n,s,r),p=t.memoizedState),(u=Fa||Vs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,dc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Na(t,e.child,null,i),t.child=Na(t,null,n,i)):tc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ec(e,t,i),e}function hc(e,t,n,r){return Li(),t.flags|=256,tc(e,t,n,r),t.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(e){return{baseLanes:e,cachePool:ga()}}function vc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function yc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(ao.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(W){if(a?eo(t):ro(t),(e=ki)?(e=rf(e,ji),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bi===null?null:{id:xi,overflow:Si},retryLane:536870912,hydrationErrors:null},n=ui(e),n.return=t,t.child=n,Oi=t,ki=null)):e=null,e===null)throw Ni(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ro(t),a=t.mode,c=xc({mode:`hidden`,children:c},a),r=ci(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(null,r)):(eo(t),bc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(eo(t),t.flags&=-257,t=Sc(e,t,n)):t.memoizedState===null?(ro(t),c=r.fallback,a=t.mode,r=xc({mode:`visible`,children:r.children},a),c=ci(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Na(t,e.child,null,n),r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,t=oc(null,r)):(ro(t),t.child=e.child,t.flags|=128,t=null);else if(eo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,zi({value:r,source:null,stack:null}),t=Sc(e,t,n)}else if(ec||qi(e,t,n,!1),s=(n&e.childLanes)!==0,ec||s){if(s=Rl,s!==null&&(r=Qe(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Qr(e,r),hu(s,e,r),$s;af(c)||Du(),t=Sc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ki=cf(c.nextSibling),Oi=t,W=!0,Ai=null,ji=!1,e!==null&&Di(t,e),t=bc(t,r.children),t.flags|=4096);return t}return a?(ro(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ai(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ci(c,a,n,null),c.flags|=2):c=ai(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,oc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=_c(n):(a=c.cachePool,a===null?a=ga():(l=na._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(e.child,r)):(eo(t),n=e.child,e=n.sibling,n=ai(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function bc(e,t){return t=xc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function xc(e,t){return e=ri(22,e,null,t),e.lanes=0,e}function Sc(e,t,n){return Na(t,e.child,null,n),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gi(e.return,t,n)}function wc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ao.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,F(ao,o),tc(e,t,r,n),r=W?_i:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cc(e,n,t);else if(e.tag===19)Cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wc(t,!0,n,null,a,r);break;case`together`:wc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ai(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ai(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Ji(e))):!0}function Oc(e,t,n){switch(t.tag){case 3:ue(t,t.stateNode.containerInfo),Ui(t,na,e.memoizedState.cache),Li();break;case 27:case 5:de(t);break;case 4:ue(t,t.stateNode.containerInfo);break;case 10:Ui(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,to(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(eo(t),e=Ec(e,t,n),e===null?null:e.sibling):yc(e,t,n):(eo(t),t.flags|=128,null);eo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(qi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(ao,ao.current),r)break;return null;case 22:return t.lanes=0,ac(e,t,n,t.pendingProps);case 24:Ui(t,na,e.memoizedState.cache)}return Ec(e,t,n)}function kc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ec=!0;else{if(!Dc(e,n)&&!(t.flags&128))return ec=!1,Oc(e,t,n);ec=!!(e.flags&131072)}else ec=!1,W&&t.flags&1048576&&wi(t,_i,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ca(t.elementType),t.type=e,typeof e==`function`)ii(e)?(r=Us(e,r),t.tag=1,t=mc(null,t,e,r,n)):(t.tag=0,t=fc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=nc(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=rc(null,t,e,r,n);break a}}throw t=re(e)||e,Error(i(306,t,``))}}return t;case 0:return fc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Us(r,t.pendingProps),mc(e,t,r,a,n);case 3:a:{if(ue(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,La(e,t),Wa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ui(t,na,r),r!==o.cache&&Ki(t,[na],n,!0),Ua(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=hc(e,t,r,n);break a}else if(r!==a){a=pi(Error(i(424)),t),zi(a),t=hc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ki=cf(e.firstChild),Oi=t,W=!0,Ai=null,ji=!0,n=Pa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Li(),r===a){t=Ec(e,t,n);break a}tc(e,t,r,n)}t=t.child}return t;case 26:return dc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:W||(n=t.type,e=t.pendingProps,r=Bd(ce.current).createElement(n),r[it]=t,r[at]=e,Pd(r,n,e),_t(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return de(t),e===null&&W&&(r=t.stateNode=ff(t.type,t.pendingProps,ce.current),Oi=t,ji=!0,a=ki,Zd(t.type)?(lf=a,ki=cf(r.firstChild)):ki=a),tc(e,t,t.pendingProps.children,n),dc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&W&&((a=r=ki)&&(r=tf(r,t.type,t.pendingProps,ji),r===null?a=!1:(t.stateNode=r,Oi=t,ki=cf(r.firstChild),ji=!1,a=!0)),a||Ni(t)),de(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=yo(e,t,So,null,null,n),Qf._currentValue=a),dc(e,t),tc(e,t,r,n),t.child;case 6:return e===null&&W&&((e=n=ki)&&(n=nf(n,t.pendingProps,ji),n===null?e=!1:(t.stateNode=n,Oi=t,ki=null,e=!0)),e||Ni(t)),null;case 13:return yc(e,t,n);case 4:return ue(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Na(t,null,r,n):tc(e,t,r,n),t.child;case 11:return nc(e,t,t.type,t.pendingProps,n);case 7:return tc(e,t,t.pendingProps,n),t.child;case 8:return tc(e,t,t.pendingProps.children,n),t.child;case 12:return tc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ui(t,t.type,r.value),tc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Yi(t),a=Xi(a),r=r(a),t.flags|=1,tc(e,t,r,n),t.child;case 14:return rc(e,t,t.type,t.pendingProps,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 19:return Tc(e,t,n);case 31:return uc(e,t,n);case 22:return ac(e,t,n,t.pendingProps);case 24:return Yi(t),r=Xi(na),e===null?(a=ma(),a===null&&(a=Rl,o=ra(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ia(t),Ui(t,na,a)):((e.lanes&n)!==0&&(La(e,t),Wa(t,null,null,n),Ua()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ui(t,na,r),r!==a.cache&&Ki(t,[na],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ui(t,na,r))),tc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ac(e){e.flags|=4}function jc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw wa=ba,va}else e.flags&=-16777217}function Mc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw wa=ba,va}function Nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ke(),e.lanes|=t,Yl|=t)}function Pc(e,t){if(!W)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ic(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fc(t),null;case 1:return Fc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Wi(na),I(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?Ac(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ri())),Fc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ac(t),o===null?(Fc(t),jc(t,a,null,r,n)):(Fc(t),Mc(t,o))):o?o===e.memoizedState?(Fc(t),t.flags&=-16777217):(Ac(t),Fc(t),Mc(t,o)):(e=e.memoizedProps,e!==r&&Ac(t),Fc(t),jc(t,a,e,r,n)),null;case 27:if(fe(t),n=ce.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}e=oe.current,Ii(t)?Pi(t,e):(e=ff(a,r,n),t.stateNode=e,Ac(t))}return Fc(t),null;case 5:if(fe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}if(o=oe.current,Ii(t))Pi(t,o);else{var s=Bd(ce.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[it]=t,o[at]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ac(t)}}return Fc(t),jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ce.current,Ii(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Oi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ni(t,!0)}else e=Bd(e).createTextNode(r),e[it]=t,t.stateNode=e}return Fc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ii(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[it]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),e=!1}else n=Ri(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(io(t),t):(io(t),null);if(t.flags&128)throw Error(i(558))}return Fc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[it]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),a=!1}else a=Ri(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(io(t),t):(io(t),null)}return io(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nc(t,t.updateQueue),Fc(t),null);case 4:return I(),e===null&&Sd(t.stateNode.containerInfo),Fc(t),null;case 10:return Wi(t.type),Fc(t),null;case 19:if(P(ao),r=t.memoizedState,r===null)return Fc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Pc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=oo(e),o!==null){for(t.flags|=128,Pc(r,!1),e=o.updateQueue,t.updateQueue=e,Nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)oi(n,e),n=n.sibling;return F(ao,ao.current&1|2),W&&Ci(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Te()>tu&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}else{if(!a)if(e=oo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Nc(t,e),Pc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!W)return Fc(t),null}else 2*Te()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Fc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Te(),e.sibling=null,n=ao.current,F(ao,a?n&1|2:n&1),W&&Ci(t,r.treeForkCount),e);case 22:case 23:return io(t),Za(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Fc(t),t.subtreeFlags&6&&(t.flags|=8192)):Fc(t),n=t.updateQueue,n!==null&&Nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&P(pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wi(na),Fc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Lc(e,t){switch(Ei(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wi(na),I(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fe(t),null;case 31:if(t.memoizedState!==null){if(io(t),t.alternate===null)throw Error(i(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(io(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(ao),null;case 4:return I(),null;case 10:return Wi(t.type),null;case 22:case 23:return io(t),Za(),e!==null&&P(pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wi(na),null;case 25:return null;default:return null}}function Rc(e,t){switch(Ei(t),t.tag){case 3:Wi(na),I();break;case 26:case 27:case 5:fe(t);break;case 4:I();break;case 31:t.memoizedState!==null&&io(t);break;case 13:io(t);break;case 19:P(ao);break;case 10:Wi(t.type);break;case 22:case 23:io(t),Za(),e!==null&&P(pa);break;case 24:Wi(na)}}function zc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Bc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Vc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ka(t,n)}catch(t){Z(e,e.return,t)}}}function Hc(e,t,n){n.props=Us(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Uc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Wc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Gc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Kc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[at]=t}catch(t){Z(e,e.return,t)}}function qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Jc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[it]=e,t[at]=n}catch(t){Z(e,e.return,t)}}var Qc=!1,$c=!1,el=!1,tl=typeof WeakSet==`function`?WeakSet:Set,nl=null;function rl(e,t){if(e=e.containerInfo,Rd=sp,e=Sr(e),Cr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,nl=t;nl!==null;)if(t=nl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,nl=e;else for(;nl!==null;){switch(t=nl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Us(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,nl=e;break}nl=t.return}}function il(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:yl(e,n),r&4&&zc(5,n);break;case 1:if(yl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Us(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Vc(n),r&512&&Uc(n,n.return);break;case 3:if(yl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ka(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Zc(n);case 26:case 5:yl(e,n),t===null&&r&4&&Gc(n),r&512&&Uc(n,n.return);break;case 12:yl(e,n);break;case 31:yl(e,n),r&4&&ul(e,n);break;case 13:yl(e,n),r&4&&dl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Qc,!r){t=t!==null&&t.memoizedState!==null||$c,i=Qc;var a=$c;Qc=r,($c=t)&&!a?xl(e,n,(n.subtreeFlags&8772)!=0):yl(e,n),Qc=i,$c=a}break;case 30:break;default:yl(e,n)}}function al(e){var t=e.alternate;t!==null&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ft(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ol=null,sl=!1;function cl(e,t,n){for(n=n.child;n!==null;)ll(e,t,n),n=n.sibling}function ll(e,t,n){if(Pe&&typeof Pe.onCommitFiberUnmount==`function`)try{Pe.onCommitFiberUnmount(Ne,n)}catch{}switch(n.tag){case 26:$c||Wc(n,t),cl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$c||Wc(n,t);var r=ol,i=sl;Zd(n.type)&&(ol=n.stateNode,sl=!1),cl(e,t,n),pf(n.stateNode),ol=r,sl=i;break;case 5:$c||Wc(n,t);case 6:if(r=ol,i=sl,ol=null,cl(e,t,n),ol=r,sl=i,ol!==null)if(sl)try{(ol.nodeType===9?ol.body:ol.nodeName===`HTML`?ol.ownerDocument.body:ol).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{ol.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:ol!==null&&(sl?(e=ol,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(ol,n.stateNode));break;case 4:r=ol,i=sl,ol=n.stateNode.containerInfo,sl=!0,cl(e,t,n),ol=r,sl=i;break;case 0:case 11:case 14:case 15:Bc(2,n,t),$c||Bc(4,n,t),cl(e,t,n);break;case 1:$c||(Wc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Hc(n,t,r)),cl(e,t,n);break;case 21:cl(e,t,n);break;case 22:$c=(r=$c)||n.memoizedState!==null,cl(e,t,n),$c=r;break;default:cl(e,t,n)}}function ul(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function fl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tl),t;default:throw Error(i(435,e.tag))}}function pl(e,t){var n=fl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function ml(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){ol=c.stateNode,sl=!1;break a}break;case 5:ol=c.stateNode,sl=!1;break a;case 3:case 4:ol=c.stateNode.containerInfo,sl=!0;break a}c=c.return}if(ol===null)throw Error(i(160));ll(o,s,a),ol=null,sl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gl(t,e),t=t.sibling}var hl=null;function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ml(t,e),_l(e),r&4&&(Bc(3,e,e.return),zc(3,e),Bc(5,e,e.return));break;case 1:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&64&&Qc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=hl;if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[dt]||o[it]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[it]=e,_t(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[it]=e,_t(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Kc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),n!==null&&r&4&&Kc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),e.flags&32){a=e.stateNode;try{Ht(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Kc(e,a,n===null?a:n.memoizedProps)),r&1024&&(el=!0);break;case 6:if(ml(t,e),_l(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=hl,hl=gf(t.containerInfo),ml(t,e),hl=a,_l(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}el&&(el=!1,vl(e));break;case 4:r=hl,hl=gf(e.stateNode.containerInfo),ml(t,e),_l(e),hl=r;break;case 12:ml(t,e),_l(e);break;case 31:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 13:ml(t,e),_l(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Te()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Qc,d=$c;if(Qc=u||a,$c=d||l,ml(t,e),$c=d,Qc=u,_l(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Qc||$c||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,pl(e,n))));break;case 19:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 30:break;case 21:break;default:ml(t,e),_l(e)}}function _l(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Xc(e,Jc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Ht(o,``),n.flags&=-33),Xc(e,Jc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Yc(e,Jc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)il(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bc(4,t,t.return),bl(t);break;case 1:Wc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Hc(t,t.return,n),bl(t);break;case 27:pf(t.stateNode);case 26:case 5:Wc(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function xl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:xl(i,a,n),zc(4,a);break;case 1:if(xl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ga(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Vc(a),Uc(a,a.return);break;case 27:Zc(a);case 26:case 5:xl(i,a,n),n&&r===null&&o&4&&Gc(a),Uc(a,a.return);break;case 12:xl(i,a,n);break;case 31:xl(i,a,n),n&&o&4&&ul(i,a);break;case 13:xl(i,a,n),n&&o&4&&dl(i,a);break;case 22:a.memoizedState===null&&xl(i,a,n),Uc(a,a.return);break;case 30:break;default:xl(i,a,n)}t=t.sibling}}function Sl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ia(n))}function Cl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ia(e))}function wl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tl(e,t,n,r),t=t.sibling}function Tl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:wl(e,t,n,r),i&2048&&zc(9,t);break;case 1:wl(e,t,n,r);break;case 3:wl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ia(e)));break;case 12:if(i&2048){wl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else wl(e,t,n,r);break;case 31:wl(e,t,n,r);break;case 13:wl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?wl(e,t,n,r):(a._visibility|=2,El(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?wl(e,t,n,r):Dl(e,t),i&2048&&Sl(o,t);break;case 24:wl(e,t,n,r),i&2048&&Cl(t.alternate,t);break;default:wl(e,t,n,r)}}function El(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:El(a,o,s,c,i),zc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,El(a,o,s,c,i)):u._visibility&2?El(a,o,s,c,i):Dl(a,o),i&&l&2048&&Sl(o.alternate,o);break;case 24:El(a,o,s,c,i),i&&l&2048&&Cl(o.alternate,o);break;default:El(a,o,s,c,i)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Dl(n,r),i&2048&&Sl(r.alternate,r);break;case 24:Dl(n,r),i&2048&&Cl(r.alternate,r);break;default:Dl(n,r)}t=t.sibling}}var Ol=8192;function kl(e,t,n){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Al(e,t,n),e=e.sibling}function Al(e,t,n){switch(e.tag){case 26:kl(e,t,n),e.flags&Ol&&e.memoizedState!==null&&Gf(n,hl,e.memoizedState,e.memoizedProps);break;case 5:kl(e,t,n);break;case 3:case 4:var r=hl;hl=gf(e.stateNode.containerInfo),kl(e,t,n),hl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ol,Ol=16777216,kl(e,t,n),Ol=r):kl(e,t,n));break;default:kl(e,t,n)}}function jl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Fl(r,e)}jl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nl(e),e=e.sibling}function Nl(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Bc(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pl(e)):Ml(e);break;default:Ml(e)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Fl(r,e)}jl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bc(8,t,t.return),Pl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pl(t));break;default:Pl(t)}e=e.sibling}}function Fl(e,t){for(;nl!==null;){var n=nl;switch(n.tag){case 0:case 11:case 15:Bc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ia(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,nl=r;else a:for(n=e;nl!==null;){r=nl;var i=r.sibling,a=r.return;if(al(r),r===n){nl=null;break a}if(i!==null){i.return=a,nl=i;break a}nl=a}}}var Il={getCacheForType:function(e){var t=Xi(na),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Xi(na).controller.signal}},Ll=typeof WeakMap==`function`?WeakMap:Map,q=0,Rl=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return q&2&&Y!==0?Y&-Y:A.T===null?tt():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||W){var e=Ve;Ve<<=1,!(Ve&3932160)&&(Ve=262144),Jl=e}else Jl=536870912;return e=Qa.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===Rl&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Je(e,n),(!(q&2)||e!==Rl)&&(e===Rl&&(!(q&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(q&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ge(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Te(),10<a)){if(yu(r,t,Jl,!Bl),We(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},Al(t,a,d);var m=(a&62914560)===a?$l-Te():(a&4194048)===a?eu-Te():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!_r(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ie(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Xe(e,n,t)}function bu(){return q&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Hi=Vi=null,To(e),Da=null,Oa=0,e=J;for(;e!==null;)Rc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),Rl=e,J=n=ai(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Ge(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ie(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Yr(),n}function Cu(e,t){G=null,A.H=Fs,t===_a||t===ya?(t=Ta(),X=3):t===va?(t=Ta(),X=4):X=t===$s?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,qs(e,pi(t,e.current)))}function wu(){var e=Qa.current;return e===null?!0:(Y&4194048)===Y?$a===null:(Y&62914560)===Y||Y&536870912?e===$a:!1}function Tu(){var e=A.H;return A.H=Fs,e===null?Fs:e}function Eu(){var e=A.A;return A.A=Il,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&Qa.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||Rl===null||yu(Rl,Y,Jl,!1)}function Ou(e,t,n){var r=q;q|=2;var i=Tu(),a=Eu();(Rl!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:Qa.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Hi=Vi=null,q=r,A.H=i,A.A=a,J===null&&(Rl=null,Y=0,Yr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=q;q|=2;var r=Tu(),a=Eu();Rl!==e||Y!==t?(nu=null,tu=Te()+500,Su(e,t)):Vl=Ge(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(xa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||Rl!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:xa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Hi=Vi=null,A.H=r,A.A=a,q=n,J===null?(Rl=null,Y=0,Yr(),Wl):0}function ju(){for(;J!==null&&!Ce();)Mu(J)}function Mu(e){var t=kc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=pc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:To(t);default:Rc(n,t),t=J=oi(t,Ul),t=kc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Hi=Vi=null,To(t),Da=null,Oa=0;var i=t.return;try{if(Qs(e,i,t,n,Y)){Wl=1,qs(e,pi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,qs(e,pi(n,e.current)),J=null;return}t.flags&32768?(W||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Ic(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Lc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(q&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Jr,Ye(e,n,o,s,c,l),e===Rl&&(J=Rl=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(L,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=A.T,A.T=null,a=j.p,j.p=2,s=q,q|=4;try{rl(e,t,n)}finally{q=s,j.p=a,A.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=q;q|=4;try{gl(t,e);var a=zd,o=Sr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&xr(s.ownerDocument.documentElement,s)){if(c!==null&&Cr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=br(s,h),v=br(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{q=i,j.p=r,A.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=q;q|=4;try{il(e,t.alternate,t)}finally{q=i,j.p=r,A.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,we();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),et(n),t=t.stateNode,Pe&&typeof Pe.onCommitFiberRoot==`function`)try{Pe.onCommitFiberRoot(Ne,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=A.T,i=j.p,j.p=2,A.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{A.T=t,j.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ia(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=et(su),r=A.T,a=j.p;try{j.p=32>n?32:n,A.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,q&6)throw Error(i(331));var c=q;if(q|=4,Nl(o.current),Tl(o,o.current,s,n),q=c,id(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot==`function`)try{Pe.onPostCommitFiberRoot(Ne,o)}catch{}return!0}finally{j.p=a,A.T=r,Vu(e,t)}}function Wu(e,t,n){t=pi(n,t),t=Ys(e.stateNode,t,2),e=za(e,t,2),e!==null&&(Je(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=pi(n,e),n=Xs(2),r=za(t,n,2),r!==null&&(Zs(n,r,t,e),Je(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ll;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Rl===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Te()-$l?!(q&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ke()),e=Qr(e,t),e!==null&&(Je(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return xe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ie(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=We(r,r===Rl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ge(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Te(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ie(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=R(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Rl,n=Y,n=We(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Se(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ge(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Se(r),et(n)){case 2:case 8:n=Oe;break;case 32:n=L;break;case 268435456:n=Ae;break;default:n=L}return r=cd.bind(null,e),n=xe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Se(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=We(e,e===Rl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Te()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){q&6?xe(De,ad):od()})}function dd(){if(nd===0){var e=sa;e===0&&(e=Be,Be<<=1,!(Be&261888)&&(Be=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Jt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[at]||null).action),o=r.submitter;o&&(t=(t=o[at]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new gn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);xs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),xs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Ur.length;hd++){var gd=Ur[hd];Wr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Wr(Fr,`onAnimationEnd`),Wr(Ir,`onAnimationIteration`),Wr(Lr,`onAnimationStart`),Wr(`dblclick`,`onDoubleClick`),Wr(`focusin`,`onFocus`),Wr(`focusout`,`onBlur`),Wr(Rr,`onTransitionRun`),Wr(zr,`onTransitionStart`),Wr(Br,`onTransitionCancel`),Wr(Vr,`onTransitionEnd`),bt(`onMouseEnter`,[`mouseout`,`mouseover`]),bt(`onMouseLeave`,[`mouseout`,`mouseover`]),bt(`onPointerEnter`,[`pointerout`,`pointerover`]),bt(`onPointerLeave`,[`pointerout`,`pointerover`]),yt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),yt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),yt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),yt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),yt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),yt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Gr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Gr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[st];n===void 0&&(n=t[st]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,vt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!an||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=pt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}tn(function(){var r=a,i=Zt(n),s=[];a:{var c=Hr.get(e);if(c!==void 0){var l=gn,u=e;switch(e){case`keypress`:if(dn(n)===0)break a;case`keydown`:case`keyup`:l=Fn;break;case`focusin`:u=`focus`,l=Dn;break;case`focusout`:u=`blur`,l=Dn;break;case`beforeblur`:case`afterblur`:l=Dn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Tn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=En;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Ln;break;case Fr:case Ir:case Lr:l=On;break;case Vr:l=Rn;break;case`scroll`:case`scrollend`:l=vn;break;case`wheel`:l=zn;break;case`copy`:case`cut`:case`paste`:l=kn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=In;break;case`toggle`:case`beforetoggle`:l=Bn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=nn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Xt&&(u=n.relatedTarget||n.fromElement)&&(pt(u)||u[ot]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?pt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Tn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=In,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:ht(l),h=u==null?c:ht(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,pt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?ht(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=or;else if(er(c))if(sr)v=hr;else{v=pr;var y=fr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Kt(r.elementType)&&(v=or):v=mr;if(v&&=v(e,r)){tr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Rt(c,`number`,c.value)}switch(y=r?ht(r):window,e){case`focusin`:(er(y)||y.contentEditable===`true`)&&(Tr=y,Er=r,Dr=null);break;case`focusout`:Dr=Er=Tr=null;break;case`mousedown`:Or=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Or=!1,kr(s,n,i);break;case`selectionchange`:if(wr)break;case`keydown`:case`keyup`:kr(s,n,i)}var b;if(Hn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Xn?Jn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Gn&&n.locale!==`ko`&&(Xn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Xn&&(b=un()):(sn=i,cn=`value`in sn?sn.value:sn.textContent,Xn=!0)),y=Ed(r,x),0<y.length&&(x=new An(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Yn(n),b!==null&&(x.data=b)))),(b=Wn?Zn(e,n):Qn(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new An(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=nn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=nn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=nn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=nn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Ht(e,``+r);break;case`className`:Et(e,`class`,r);break;case`tabIndex`:Et(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Et(e,n,r);break;case`style`:Gt(e,r,o);break;case`data`:if(t!==`object`){Et(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Jt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Jt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Yt);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Jt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Tt(e,`popover`,r);break;case`xlinkActuate`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Tt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=B.get(n)||n,Tt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Gt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&Ht(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Yt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!z.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[at]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Tt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Lt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&zt(e,!!r,n,!0):zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Vt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Kt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}It(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?zt(e,!!n,n?[]:``,!1):zt(e,!!n,t,!0)):zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Bt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Kt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[dt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),ft(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[dt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ft(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=j.d;j.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=mt(e);t!==null&&t.tag===5&&t.type===`form`?Cs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ft(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),_t(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ft(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ft(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ft(n.imageSizes)+`"]`)):i+=`[href="`+Ft(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=p({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),_t(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ft(r)+`"][href="`+Ft(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=p({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),_t(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=gt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=p({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);_t(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=gt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),_t(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=gt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),_t(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ce.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=gt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=gt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=gt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ft(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),_t(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ft(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ft(n.href)+`"]`);if(r)return t.instance=r,_t(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),_t(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,_t(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),_t(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,_t(a),a):(r=n,(a=mf.get(o))&&(r=p({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),_t(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[dt]||a[it]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,_t(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),_t(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:x,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ri(3,null,null,t),e.current=a,a.stateNode=e,t=ra(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ia(a),e}function tp(e){return e?(e=ti,e):ti}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ra(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=za(e,r,t),n!==null&&(hu(n,e,t),Ba(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Qr(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=$e(t);var n=Qr(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=2,up(e,t,n,r)}finally{j.p=a,A.T=i}}function lp(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=8,up(e,t,n,r)}finally{j.p=a,A.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=mt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ue(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ie(o);s.entanglements[1]|=c,o&=~c}rd(a),!(q&6)&&(tu=Te()+500,id(0,!1))}}break;case 31:case 13:s=Qr(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=Zt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=pt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ee()){case De:return 2;case Oe:return 8;case L:case ke:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=mt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=pt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,nt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,nt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xt=r,n.target.dispatchEvent(r),Xt=null}else return t=mt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=mt(n);a!==null&&(e.splice(t,3),t-=3,xs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[at]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[at]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ot]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=tt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:A,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ne=zp.inject(Rp),Pe=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ws,s=Gs,c=Ks;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ot]=t.current,Sd(e),new Fp(t)}})),En=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Tn()}))(),Dn=o((e=>{var t=u().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),On=o(((e,t)=>{t.exports=Dn()}));function kn(e,t){return new Proxy({},{get(n,r){if(typeof r==`string`)return kn(e,[...t,r]);if(r===He){if(t.length<1){let n=[e,...t].join(`.`);throw Error(`API path is expected to be of the form \`${e}.childComponent.functionName\`. Found: \`${n}\``)}return`_reference/childComponent/`+t.join(`/`)}else return}})}var An=()=>kn(`components`,[]),jn=On(),Mn=Je;An();var Nn=`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,Pn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),H=o(((e,t)=>{t.exports=Pn()}))(),Fn=5,In=5,Ln=5,Rn=5,zn=5,Bn=5,Vn=10,Hn=5,Un=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``),Wn=[`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`];function Gn(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}var Kn=[`No.`,`TES Award Number`,`Student ID`,`Last Name`,`First Name`,`MI.`,`batch No.`,`Status`,`Semester`,`School Year`];function qn(e){let t=(0,jn.c)(4),{status:n,tone:r}=e,i=`admin-status admin-status--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,H.jsx)(`span`,{className:`admin-status__dot`}),t[0]=a):a=t[0];let o=n||`—`,s;return t[1]!==i||t[2]!==o?(s=(0,H.jsxs)(`span`,{className:i,children:[a,o]}),t[1]=i,t[2]=o,t[3]=s):s=t[3],s}function Jn(e=``){let t=e.toLowerCase();return t.includes(`grantee`)?`grantee`:t.includes(`applicant`)?`applicant`:t.includes(`complete`)||t.includes(`resolved`)||t.includes(`valid`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function Yn(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function Xn(e){return`"${String(e??``).replaceAll(`"`,`""`)}"`}function Zn(e,t){let n=t.map(e=>e.map(Xn).join(`,`)).join(`
`),r=new Blob([n],{type:`text/csv;charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(i)}function Qn(){let e=[Kn,[`1`,`TES-2024-0001`,`2024-UNI-0001`,`Dela Cruz`,`Juan`,`P`,`2024-01`,`Pending`,`1st Semester`,`2024-2025`]].map(e=>e.map(e=>`"${e.replaceAll(`"`,`""`)}"`).join(`,`)).join(`
`),t=new Blob([e],{type:`text/csv;charset=utf-8`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`tdp-grantee-template.csv`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function $n(e,t){return String(e??``).trim().replace(/[^a-z0-9-]+/gi,`-`).replace(/^-+|-+$/g,``)||t}function er(e,t){for(let n of[`lastName`,`firstName`,`middleInitial`,`studentId`]){let r=String(e?.[n]??``).localeCompare(String(t?.[n]??``),void 0,{numeric:!0,sensitivity:`base`});if(r!==0)return r}return 0}function tr(e){return[e?.lastName,e?.firstName,e?.middleInitial].map(e=>String(e??``).trim()).filter(Boolean).join(`, `)}function nr(e){return String(e?.course??e?.program??e?.degreeProgram??``).trim()}function rr(e){let t=String(e?.applicationYear??``).trim();if(t)return t;let n=e?.submittedAt;return n?String(new Date(n).getFullYear()):``}function ir(e,t){if(t<=5)return Array.from({length:t},(e,t)=>t+1);let n=[1],r=Math.max(2,e-1),i=Math.min(t-1,e+1);r>2&&n.push(`left-ellipsis`);for(let e=r;e<=i;e+=1)n.push(e);return i<t-1&&n.push(`right-ellipsis`),n.push(t),n}function ar(e,t){if(e===`application/pdf`)return`.pdf`;if(e===`image/png`)return`.png`;if(e===`image/jpeg`)return`.jpg`;try{let e=new URL(t).pathname.match(/\.(pdf|png|jpe?g)$/i);return e?`.${e[1].toLowerCase().replace(`jpeg`,`jpg`)}`:``}catch{return``}}async function or(e,t){let n=`${Un}/google-drive/file?url=${encodeURIComponent(e.frontIdUrl)}`,r=await fetch(n);if(!r.ok)throw Error(`Unable to download School ID file for ${e.studentId||`student`}.`);let i=await r.blob(),a=new Uint8Array(await i.arrayBuffer()),o=$n(e.studentId,`student-${t+1}`),s=$n(e.lastName,`no-last-name`),c=$n(e.firstName,`no-first-name`),l=$n(e.middleInitial,`no-middle-name`),u=$n(e.batchId,`no-batch`),d=ar(i.type,e.frontIdUrl);return{bytes:a,name:`${s}-${c}-${l}-student-id-${o}-batch-${u}-${t+1}${d}`}}function sr(){return Array.from({length:256},(e,t)=>{let n=t;for(let e=0;e<8;e+=1)n=n&1?3988292384^n>>>1:n>>>1;return n>>>0})}var cr=sr(),lr=new TextEncoder;function ur(e){let t=4294967295;for(let n of e)t=cr[(t^n)&255]^t>>>8;return(t^4294967295)>>>0}function dr(){let e=new Date,t=e.getHours()<<11|e.getMinutes()<<5|Math.floor(e.getSeconds()/2);return{date:e.getFullYear()-1980<<9|e.getMonth()+1<<5|e.getDate(),time:t}}function U(e,t,n,r){if(n===2){e.setUint16(t,r,!0);return}e.setUint32(t,r>>>0,!0)}function fr(e){let{date:t,time:n}=dr(),r=[],i=[],a=0;e.forEach(e=>{let o=lr.encode(e.name),s=ur(e.bytes),c=new Uint8Array(30+o.length),l=new DataView(c.buffer);U(l,0,4,67324752),U(l,4,2,20),U(l,8,2,0),U(l,10,2,n),U(l,12,2,t),U(l,14,4,s),U(l,18,4,e.bytes.length),U(l,22,4,e.bytes.length),U(l,26,2,o.length),c.set(o,30),r.push(c,e.bytes);let u=new Uint8Array(46+o.length),d=new DataView(u.buffer);U(d,0,4,33639248),U(d,4,2,20),U(d,6,2,20),U(d,10,2,0),U(d,12,2,n),U(d,14,2,t),U(d,16,4,s),U(d,20,4,e.bytes.length),U(d,24,4,e.bytes.length),U(d,28,2,o.length),U(d,42,4,a),u.set(o,46),i.push(u),a+=c.length+e.bytes.length});let o=i.reduce((e,t)=>e+t.length,0),s=new Uint8Array(22),c=new DataView(s.buffer);return U(c,0,4,101010256),U(c,8,2,e.length),U(c,10,2,e.length),U(c,12,4,o),U(c,16,4,a),new Blob([...r,...i,s],{type:`application/zip`})}function pr(e){return e.replaceAll(`\xA0`,` `).trim()}function mr(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a+=1){let o=e[a],s=e[a+1];o===`"`&&i&&s===`"`?(r+=`"`,a+=1):o===`"`?i=!i:o===`,`&&!i?(n.push(pr(r)),r=``):(o===`
`||o===`\r`)&&!i?(o===`\r`&&s===`
`&&(a+=1),n.push(pr(r)),n.some(Boolean)&&t.push(n),n=[],r=``):r+=o}return n.push(pr(r)),n.some(Boolean)&&t.push(n),t}function hr(e){return mr(e).filter(e=>e.some(Boolean)).filter(e=>!e.join(` `).toLowerCase().includes(`tes award number`)).map(e=>({no:e[0]??``,tesAwardNumber:e[1]??``,studentId:e[2]??``,lastName:e[3]??``,firstName:e[4]??``,middleInitial:e[5]??``,batchId:e[6]??``,status:e[7]??``,semester:e[8]??``,schoolYear:e[9]??``})).filter(e=>e.no&&e.tesAwardNumber&&e.studentId&&e.lastName&&e.firstName&&e.batchId&&e.status&&e.semester&&e.schoolYear)}function gr({onLogout:e}){let[t,n]=(0,V.useState)(0),[r,i]=(0,V.useState)(!1),[a,o]=(0,V.useState)(!1),[s,c]=(0,V.useState)(!1),[l,u]=(0,V.useState)(!1),[d,f]=(0,V.useState)(!1),[p,m]=(0,V.useState)(!1),[h,g]=(0,V.useState)(``),[_,v]=(0,V.useState)(!1),[y,b]=(0,V.useState)(!1),[x,S]=(0,V.useState)(!1),[C,w]=(0,V.useState)(!1),[ee,T]=(0,V.useState)(``),[E,D]=(0,V.useState)(null),[te,ne]=(0,V.useState)(!1),[O,re]=(0,V.useState)(!1),[k,A]=(0,V.useState)(!1),[j,ie]=(0,V.useState)(0),[ae,M]=(0,V.useState)(null),[N,P]=(0,V.useState)(null),[F,oe]=(0,V.useState)(null),[se,ce]=(0,V.useState)(``),[le,ue]=(0,V.useState)(``),[I,de]=(0,V.useState)(!1),[fe,pe]=(0,V.useState)(!1),[me,he]=(0,V.useState)(!1),[ge,_e]=(0,V.useState)(!1),[ve,ye]=(0,V.useState)(1),[be,xe]=(0,V.useState)(1),[Se,Ce]=(0,V.useState)([]),[we,Te]=(0,V.useState)(null),[Ee,De]=(0,V.useState)(null),[Oe,L]=(0,V.useState)(``),[ke,Ae]=(0,V.useState)(!1),[je,Me]=(0,V.useState)(``),[Ne,Pe]=(0,V.useState)(``),[Fe,Ie]=(0,V.useState)(1),[Le,Re]=(0,V.useState)(1),[ze,Be]=(0,V.useState)(1),[Ve,He]=(0,V.useState)(1),[Ue,We]=(0,V.useState)(``),[Ge,R]=(0,V.useState)(!1),[Ke,qe]=(0,V.useState)(!1),[Je,Ye]=(0,V.useState)(!1),[Xe,Ze]=(0,V.useState)(0),[Qe,$e]=(0,V.useState)(null),[et,tt]=(0,V.useState)(1),[nt,rt]=(0,V.useState)(1),it=dn(Mn.quickActions.list),at=dn(Mn.activityLogs.list),ot=dn(Mn.allinfo.list),st=dn(Mn.applicants.list),ct=dn(Mn.applicantPortal.get),lt=dn(Mn.adminAuth.listStudentAccounts),ut=fn(Mn.applicantPortal.setReceivingApplicants),dt=fn(Mn.allinfo.bulkCreate),ft=fn(Mn.allinfo.update),pt=fn(Mn.allinfo.deleteMany),mt=fn(Mn.quickActions.clearAll),ht=fn(Mn.activityLogs.clearAll),gt=pn(Mn.allinfo.deleteSchoolIdFilesByBatch),_t=pn(Mn.applicants.deleteAllByCourse),vt=r||a||s||l||d||p||!!h||Ge||Je||Ke||!!Qe||_||y||x||!!N||C||!!ee||!!E||te||O||k||!!ae||!!we,z=(0,V.useMemo)(()=>ot??[],[ot]),yt=it??[],bt=at??[],xt=(0,V.useMemo)(()=>st??[],[st]),St=(0,V.useMemo)(()=>lt??[],[lt]),Ct=ct?.applicationYear,wt=String(Ct??new Date().getFullYear()),Tt=(0,V.useMemo)(()=>{let e=new Date().getFullYear(),t=new Set([String(e-1),String(e),String(e+1),String(e+2),String(e+3),String(e+4),String(e+5)]);return Ct&&t.add(String(Ct)),xt.forEach(e=>{let n=rr(e);n&&t.add(n)}),Array.from(t).sort()},[xt,Ct]),Et=Math.max(1,Math.ceil(Tt.length/Hn)),Dt=Math.min(nt,Et),Ot=(Dt-1)*Hn,kt=Tt.slice(Ot,Ot+Hn),At=ir(Dt,Et),jt=Tt.length===0?0:Ot+1,Mt=Ot+kt.length,Nt=(0,V.useMemo)(()=>Array.from(new Set(z.map(e=>String(e.batchId??``).trim()).filter(Boolean))).sort(),[z]),Pt=(0,V.useMemo)(()=>Nt.map(e=>{let t=z.filter(t=>String(t.batchId??``).trim()===e),n=new Set(t.map(e=>String(e.studentId??``).trim().toLowerCase()));return{accountCount:St.filter(e=>n.has(String(e.schoolId??``).trim().toLowerCase())).length,batchId:e,recordCount:t.length}}),[Nt,z,St]),Ft=(0,V.useMemo)(()=>Wn.map(e=>({applicantCount:xt.filter(t=>rr(t)===wt&&nr(t).toLowerCase()===e.toLowerCase()).length,course:e})),[wt,xt]),It=(0,V.useMemo)(()=>{let e=h.trim().toLowerCase();return e?xt.filter(t=>rr(t)===wt&&nr(t).toLowerCase()===e):[]},[wt,xt,h]),Lt=(0,V.useMemo)(()=>{let e=Ue.trim().toLowerCase();return e?It.filter(t=>{let n=[t.firstName,t.middleName,t.lastName,t.extensionName].filter(Boolean).join(` `);return[t.studentId,n,t.gender,t.birthDate,t.year,t.address,t.mobileNumber,t.emailAddress,t.status,t.psaFileName,t.schoolIdFileName,t.pwdIdFileName,t.fourPsFileName,Yn(t.submittedAt)].map(e=>String(e??``).toLowerCase()).join(` `).includes(e)}):It},[Ue,It]),Rt=Math.max(1,Math.ceil(Lt.length/Vn)),zt=Math.min(et,Rt),Bt=(zt-1)*Vn,Vt=Lt.slice(Bt,Bt+Vn),Ht=ir(zt,Rt),Ut=Lt.length===0?0:Bt+1,Wt=Bt+Vt.length,Gt=(0,V.useMemo)(()=>{let e=je.trim().toLowerCase(),t=Ne.trim().toLowerCase();return z.filter(n=>{let r=[n.no,n.tesAwardNumber,n.studentId,n.lastName,n.firstName,n.middleInitial,n.batchId,n.status,n.semester,n.schoolYear].map(e=>String(e??``).toLowerCase()).join(` `),i=e?r.includes(e):!0,a=t?String(n.batchId??``).trim().toLowerCase()===t:!0;return i&&a})},[z,je,Ne]),Kt=Math.max(1,Math.ceil(Gt.length/Fn)),B=Math.min(ve,Kt),qt=(B-1)*Fn,Jt=ir(B,Kt),Yt=Gt.slice(qt,qt+Fn),Xt=Gt.filter(e=>e.frontIdUrl),Zt=(0,V.useMemo)(()=>Array.from(new Set(Xt.map(e=>String(e.schoolYear??``).trim()).filter(Boolean))).sort((e,t)=>t.localeCompare(e)),[Xt]),Qt=(0,V.useMemo)(()=>Zt.map(e=>({fileCount:Xt.filter(t=>String(t.schoolYear??``).trim()===e).length,schoolYear:e})),[Xt,Zt]),$t=(0,V.useMemo)(()=>{if(!ee)return[];let e=new Map;return Xt.forEach(t=>{if(String(t.schoolYear??``).trim()!==ee)return;let n=String(t.batchId??``).trim();if(!n)return;let r=e.get(n)??{batchId:n,fileCount:0};r.fileCount+=1,e.set(n,r)}),Array.from(e.values()).sort((e,t)=>e.batchId.localeCompare(t.batchId))},[Xt,ee]),en=Gt.length===0?0:qt+1,tn=qt+Yt.length,nn=Math.max(1,Math.ceil(yt.length/In)),rn=Math.min(be,nn),an=(rn-1)*In,on=ir(rn,nn),sn=yt.slice(an,an+In),cn=yt.length===0?0:an+1,ln=an+sn.length,un=Math.max(1,Math.ceil(bt.length/Ln)),mn=Math.min(Fe,un),hn=(mn-1)*Ln,gn=bt.slice(hn,hn+Ln),_n=bt.length===0?0:hn+1,vn=hn+gn.length,yn=Math.max(1,Math.ceil(Pt.length/Rn)),bn=Math.min(Le,yn),xn=(bn-1)*Rn,Sn=Pt.slice(xn,xn+Rn),Cn=Pt.length===0?0:xn+1,wn=xn+Sn.length,Tn=Math.max(1,Math.ceil(Qt.length/zn)),En=Math.min(ze,Tn),Dn=(En-1)*zn,On=Qt.slice(Dn,Dn+zn),kn=Qt.length===0?0:Dn+1,An=Dn+On.length,jn=Math.max(1,Math.ceil($t.length/Bn)),Pn=Math.min(Ve,jn),Un=(Pn-1)*Bn,Xn=$t.slice(Un,Un+Bn),ar=$t.length===0?0:Un+1,sr=Un+Xn.length,cr=e=>{ye(Math.min(Math.max(e,1),Kt))},lr=e=>{xe(Math.min(Math.max(e,1),nn))},ur=e=>{Ie(Math.min(Math.max(e,1),un))},dr=e=>{Re(Math.min(Math.max(e,1),yn))},U=e=>{Be(Math.min(Math.max(e,1),Tn))},pr=e=>{He(Math.min(Math.max(e,1),jn))},mr=e=>{tt(Math.min(Math.max(e,1),Rt))},gr=e=>{rt(Math.min(Math.max(e,1),Et))},vr=e=>{g(e),We(``),tt(1)},yr=()=>{Ke||Je||(g(``),We(``),tt(1),R(!1))},br=e=>{We(e.target.value),tt(1)},xr=e=>{T(e),He(1)},Sr=()=>{O||k||(w(!1),T(``),D(null),ne(!1),He(1))},Cr=(e,t)=>{D({batchId:e,fileCount:t,schoolYear:ee})},wr=()=>{O||k||(D(null),ne(!1))},Tr=()=>{Me(``),Pe(``),ye(1)},Er=e=>{Me(e.target.value),ye(1)},Dr=e=>{Pe(e.target.value),ye(1)},Or=async(e,t)=>{let n=String(e??``).trim(),r=String(t??``).trim(),i=Xt.filter(e=>String(e.schoolYear??``).trim()===n&&String(e.batchId??``).trim()===r).sort(er);if(i.length!==0){re(!0),ie(0);try{let e=[];for(let[t,n]of i.entries()){try{let r=await or(n,t);e.push(r)}catch(e){console.warn(e)}ie(Math.min(90,Math.round((t+1)/i.length*90)))}if(e.length===0)throw Error(`No School ID files could be downloaded for this batch.`);let t=fr(e);ie(96);let a=URL.createObjectURL(t),o=document.createElement(`a`),s=$n(n,`school-year`),c=$n(r,`batch`);o.href=a,o.download=`school-id-files-${s}-batch-${c}.zip`,o.rel=`noreferrer`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a),ie(100),await new Promise(e=>window.setTimeout(e,350)),w(!1),T(``),D(null),He(1),M({batchId:r,count:e.length,schoolYear:n,type:`download`})}catch(e){window.alert(e instanceof Error?e.message:`Unable to download School ID files.`)}finally{re(!1),ie(0)}}},kr=async()=>{if(E){A(!0);try{let e=await gt({batchId:E.batchId,schoolYear:E.schoolYear});ne(!1),D(null),T(``),w(!1),He(1),M({batchId:E.batchId,count:e.deleted,schoolYear:E.schoolYear,type:`delete`})}catch(e){window.alert(e instanceof Error?e.message:`Unable to delete School ID files.`)}finally{A(!1)}}},Ar=e=>{if(lt===void 0){window.alert(`Please wait while student account data is loading.`);return}let t=String(e??``).trim(),n=z.filter(e=>String(e.batchId??``).trim()===t);if(n.length===0){window.alert(`No records found for this batch.`);return}let r=new Map(St.map(e=>[String(e.schoolId??``).trim().toLowerCase(),e])),i=[[`Batch No.`,`Student ID`,`TES Award Number`,`Last Name`,`First Name`,`MI.`,`School Year`,`Status`,`Email Account`,`Phone No.`,`Current Address`,`Account Status`],...n.map(e=>{let t=r.get(String(e.studentId??``).trim().toLowerCase());return[e.batchId??``,e.studentId??``,e.tesAwardNumber??``,e.lastName??``,e.firstName??``,e.middleInitial??``,e.schoolYear??``,e.status??``,t?.email??``,t?.phoneNumber??``,t?.currentAddress??``,t?.status??`No student account`]})];Zn(`batch-info-${$n(t,`batch`)}.csv`,i),b(!1)},jr=async e=>{if(st===void 0){window.alert(`Please wait while applicant information is loading.`);return}let t=String(e??``).trim(),n=xt.filter(e=>rr(e)===wt&&nr(e).toLowerCase()===t.toLowerCase());if(n.length===0){window.alert(`No applicants are available for this course.`);return}Ye(!0),Ze(8),await new Promise(e=>window.setTimeout(e,120));let r=[[`Application Year`,`Course`,`Student ID`,`Last Name`,`First Name`,`Ext Name`,`Middle Name`,`Gender`,`Birth Date`,`Year`,`Father Last Name`,`Father First Name`,`Father Middle Name`,`Mother Last Name`,`Mother First Name`,`Mother Middle Name`,`Address`,`Zip Code`,`PWD ID`,`PWD ID PDF`,`4Ps ID PDF`,`Mobile No.`,`Email Address`,`Status`,`Submitted At`],...n.map(e=>[rr(e),nr(e)||t,e.studentId??``,e.lastName??``,e.firstName??``,e.extensionName??``,e.middleName??``,e.gender??``,e.birthDate??``,e.year??``,e.fatherLastName??``,e.fatherFirstName??``,e.fatherMiddleName??``,e.motherLastName??``,e.motherFirstName??``,e.motherMiddleName??``,e.address??``,e.zipCode??``,e.pwdId??``,e.pwdIdFileName??``,e.fourPsFileName??``,e.mobileNumber??``,e.emailAddress??``,e.status??``,Yn(e.submittedAt)])];Ze(72),await new Promise(e=>window.setTimeout(e,120));let i=$n(t,`course`);Zn(`unifast-applicants-${$n(wt,`application-year`)}-${i}.csv`,r),Ze(100),await new Promise(e=>window.setTimeout(e,350)),Ye(!1),Ze(0),$e({count:n.length,course:t,type:`download`,year:wt})},Mr=async()=>{if(h){qe(!0);try{let e=await _t({applicationYear:wt,course:h});R(!1),$e({count:e.deleted,course:h,filesDeleted:e.filesDeleted,type:`delete`,year:wt}),g(``),We(``),tt(1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to delete course applicants.`)}finally{qe(!1)}}},Nr=()=>{if(it===void 0){window.alert(`Please wait while student requests are loading.`);return}if(yt.length===0){window.alert(`No student requests are available to export.`);return}let e=Yn(Date.now()),t=[[`No.`,`Student ID`,`Last Name`,`First Name`,`MI`,`Email Account`,`Question / Request`,`Source`,`Status`,`Submitted At`,`Exported At`],...yt.map((t,n)=>[n+1,t.studentId??``,t.lastName??``,t.firstName??``,t.middleInitial??``,t.email??``,t.question??``,t.source??``,t.status??``,Yn(t.submittedAt),e])];Zn(`student-requests-responses-${new Date().toISOString().slice(0,10)}.csv`,t)},Pr=()=>{me||yt.length===0||c(!0)},Fr=async()=>{if(!(me||yt.length===0)){he(!0);try{await mt({}),xe(1),c(!1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to clear Quick Action messages.`)}finally{he(!1)}}},Ir=async()=>{if(!(ge||bt.length===0)&&window.confirm(`Clear all ${bt.length} visible activity logs? This permanently removes all stored logs and cannot be undone.`)){_e(!0);try{await ht({}),Ie(1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to clear activity logs.`)}finally{_e(!1)}}},Lr=async(e,t)=>{try{let n=await ut({isReceivingApplicants:e,...t?{applicationYear:t}:{}});n.success||window.alert(n.message||`Unable to update applicant portal status.`)}catch(e){window.alert(e instanceof Error?e.message:`Unable to update applicant portal status.`)}},Rr=async e=>{await Lr(!0,e),m(!1),rt(1)},zr=()=>{u(!1),f(!1),m(!1),rt(1),g(``),We(``),tt(1)},Br=()=>{Re(1),ue(``),S(!0)},Vr=()=>{fe||(S(!1),P(null))},Hr=()=>{xe(1),o(!0)},Ur=()=>{oe(null),ce(``),ue(``),de(!1),v(!0)},Wr=()=>{I||(v(!1),oe(null),ce(``),de(!1))},Gr=()=>{ke||(Te(null),De(null),L(``))},Kr=e=>{Te(e),De({no:e.no??``,tesAwardNumber:e.tesAwardNumber??``,studentId:e.studentId??``,lastName:e.lastName??``,firstName:e.firstName??``,middleInitial:e.middleInitial??``,batchId:e.batchId??``,status:e.status??``,semester:e.semester??``,schoolYear:e.schoolYear??``}),L(``)},qr=e=>t=>{L(``),De(n=>({...n,[e]:t.target.value}))},Jr=async e=>{if(e.preventDefault(),!(!we||!Ee)){if([`no`,`tesAwardNumber`,`studentId`,`lastName`,`firstName`,`batchId`,`status`,`semester`,`schoolYear`].some(e=>!String(Ee[e]??``).trim())){L(`Please complete all required fields before saving.`);return}Ae(!0),L(`Saving changes...`);try{await ft({id:we._id,...Ee}),L(`Record updated successfully.`),Te(null),De(null)}catch(e){L(e instanceof Error?e.message:`Unable to update record.`)}finally{Ae(!1)}}},Yr=e=>{ue(``),Ce(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},Xr=async()=>{if(Se.length===0){ue(`Please check at least one record before deleting.`);return}if(window.confirm(`Delete ${Se.length} checked record${Se.length===1?``:`s`}?`)){pe(!0),ue(`Deleting checked record...`);try{let e=await pt({ids:Se});Ce([]),ue(`${e?.deleted??Se.length} record${(e?.deleted??Se.length)===1?``:`s`} deleted successfully.`)}catch(e){ue(e instanceof Error?e.message:`Unable to delete records.`)}finally{pe(!1)}}};return(0,V.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;n(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,V.useEffect)(()=>{if(!vt)return;let e=e=>{if(e.key===`Escape`){if(s&&!me){c(!1);return}i(!1),o(!1),c(!1),u(!1),f(!1),m(!1),rt(1),g(``),We(``),tt(1),v(!1),b(!1),S(!1),P(null),w(!1),T(``),He(1),oe(null),ce(``),de(!1),Te(null)}};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[vt,me,s]),(0,H.jsxs)(`div`,{className:`admin-page`,children:[(0,H.jsx)(`style`,{children:_r}),(0,H.jsxs)(`header`,{className:`admin-topbar`,children:[(0,H.jsxs)(`div`,{className:`brand-lockup`,children:[(0,H.jsx)(`div`,{className:`brand-mark`,children:(0,H.jsx)(`img`,{alt:`IBACMI`,className:`brand-mark__image`,src:Nn})}),(0,H.jsxs)(`div`,{className:`brand-copy`,children:[(0,H.jsx)(`p`,{className:`brand-title`,children:`IBACMI`}),(0,H.jsx)(`p`,{className:`brand-subtitle`,children:`Scholarship Office`})]})]}),(0,H.jsxs)(`div`,{className:`header-actions`,children:[(0,H.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:()=>{Ie(1),i(!0)},type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`history`}),`Logs`]}),(0,H.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:()=>u(!0),type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`folder_open`}),`UNIFAST PORTAL`]}),(0,H.jsxs)(`button`,{className:`admin-button admin-button--ghost`,onClick:Hr,type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`task_alt`}),`Quick Actions`]}),(0,H.jsxs)(`button`,{className:`admin-button admin-button--admin`,onClick:e,type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`logout`}),`Logout`]})]})]}),(0,H.jsx)(`main`,{className:`admin-main`,children:(0,H.jsxs)(`div`,{className:`admin-container`,children:[(0,H.jsxs)(`section`,{className:`admin-heading`,children:[(0,H.jsxs)(`div`,{className:`admin-heading__copy`,children:[(0,H.jsx)(`span`,{className:`admin-eyebrow`,children:`Tertiary Education Subsidy and Tulong Dunong Program`}),(0,H.jsx)(`h1`,{children:`Grantee Management`})]}),(0,H.jsxs)(`div`,{className:`admin-heading__actions`,children:[(0,H.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:Nt.length===0,onClick:()=>{Re(1),b(!0)},title:Nt.length===0?`No batches available to export`:`Choose a batch to export student account info`,type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`table_view`}),`Export to CSV Batch Info`]}),(0,H.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:Xt.length===0,onClick:()=>{Be(1),w(!0)},title:Xt.length===0?`No School ID files available to download`:`Choose a School Year to download School ID files`,type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download School ID File`]}),(0,H.jsxs)(`button`,{className:`admin-button admin-button--primary`,onClick:Ur,type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`add`}),`Add New Record`]}),(0,H.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:Nt.length===0,onClick:Br,title:Nt.length===0?`No batches available to delete`:`Choose a batch to delete`,type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`}),`Delete Batch`]})]})]}),(0,H.jsxs)(`section`,{className:`admin-stats-grid`,"aria-label":`Grantee summary`,children:[(0,H.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,H.jsx)(`span`,{children:`Total Records`}),(0,H.jsx)(`strong`,{children:z.length})]}),(0,H.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,H.jsx)(`span`,{children:`Filtered Results`}),(0,H.jsx)(`strong`,{children:Gt.length})]}),(0,H.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,H.jsx)(`span`,{children:`Checked Records`}),(0,H.jsx)(`strong`,{children:Se.length})]}),(0,H.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,H.jsx)(`span`,{children:`Student Requests`}),(0,H.jsx)(`strong`,{children:yt.length})]})]}),(0,H.jsxs)(`section`,{className:`admin-filter-panel`,"aria-label":`Grantee filters`,children:[(0,H.jsxs)(`div`,{className:`admin-search-field`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,H.jsx)(`input`,{placeholder:`Search by Student ID, award number, status, semester...`,type:`text`,value:je,onChange:Er})]}),(0,H.jsxs)(`select`,{value:Ne,onChange:Dr,children:[(0,H.jsx)(`option`,{value:``,children:`All Batches`}),Nt.map(e=>(0,H.jsx)(`option`,{value:e,children:e},e))]}),(0,H.jsx)(`button`,{className:`admin-filter-button`,type:`button`,"aria-label":`Reset filters`,title:`Reset filters`,onClick:Tr,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`refresh`})})]}),(0,H.jsxs)(`section`,{className:`admin-table-card`,"aria-label":`TDP grantee records`,children:[(0,H.jsx)(`div`,{className:`admin-table-header`,children:(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h2`,{children:`Grantee Records`}),(0,H.jsx)(`p`,{children:`Review, check, edit, or delete selected records.`})]})}),(0,H.jsx)(`div`,{className:`admin-table-scroll`,children:(0,H.jsxs)(`table`,{children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{children:`No.`}),(0,H.jsx)(`th`,{children:`TES Award Number`}),(0,H.jsx)(`th`,{children:`Student ID`}),(0,H.jsx)(`th`,{children:`Last Name`}),(0,H.jsx)(`th`,{children:`First Name`}),(0,H.jsx)(`th`,{children:`MI.`}),(0,H.jsx)(`th`,{children:`Batch No.`}),(0,H.jsx)(`th`,{children:`Status`}),(0,H.jsx)(`th`,{children:`Semester`}),(0,H.jsx)(`th`,{children:`School Year`}),(0,H.jsx)(`th`,{children:`School ID File`}),(0,H.jsx)(`th`,{children:`Actions`})]})}),(0,H.jsxs)(`tbody`,{children:[ot===void 0&&(0,H.jsx)(`tr`,{children:(0,H.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`Loading grantee records...`})}),ot?.length===0&&(0,H.jsx)(`tr`,{children:(0,H.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No grantee records yet. Upload a CSV file to add records.`})}),ot&&ot.length>0&&Gt.length===0&&(0,H.jsx)(`tr`,{children:(0,H.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No matching record found.`})}),Yt.map((e,t)=>(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{"data-label":`No.`,children:qt+t+1}),(0,H.jsx)(`td`,{className:`admin-award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,H.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,H.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`—`}),(0,H.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`—`}),(0,H.jsx)(`td`,{"data-label":`MI.`,children:e.middleInitial||`—`}),(0,H.jsx)(`td`,{className:`admin-batch-cell`,"data-label":`Batch No.`,children:e.batchId}),(0,H.jsx)(`td`,{"data-label":`Status`,children:(0,H.jsx)(qn,{status:e.status,tone:Jn(e.status)})}),(0,H.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,H.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`}),(0,H.jsx)(`td`,{"data-label":`School ID File`,children:e.frontIdUrl?(0,H.jsx)(`a`,{className:`admin-file-link`,href:e.frontIdUrl,rel:`noreferrer`,target:`_blank`,children:`View file`}):(0,H.jsx)(`span`,{className:`admin-file-empty`,children:`No file`})}),(0,H.jsx)(`td`,{"data-label":`Actions`,children:(0,H.jsxs)(`div`,{className:`admin-row-actions`,children:[(0,H.jsx)(`button`,{className:`admin-edit-button`,type:`button`,onClick:()=>Kr(e),children:`Edit`}),(0,H.jsxs)(`label`,{className:`admin-checkbox-control`,children:[(0,H.jsx)(`input`,{type:`checkbox`,checked:Se.includes(e._id),onChange:()=>Yr(e._id)}),(0,H.jsx)(`span`,{children:`Check`})]}),(0,H.jsx)(`button`,{className:`admin-delete-button`,type:`button`,disabled:fe||!Se.includes(e._id),onClick:Xr,children:`Delete`})]})})]},e._id))]})]})}),(0,H.jsxs)(`div`,{className:`admin-pagination`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`p`,{children:[`Showing `,(0,H.jsx)(`strong`,{children:en}),` to `,(0,H.jsx)(`strong`,{children:tn}),` of`,` `,(0,H.jsx)(`strong`,{children:Gt.length}),` results`]}),le&&(0,H.jsx)(`p`,{className:`admin-delete-message`,children:le})]}),(0,H.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,H.jsx)(`button`,{type:`button`,disabled:B===1||Gt.length===0,"aria-label":`Previous page`,onClick:()=>cr(B-1),children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Jt.map(e=>{if(typeof e==`string`)return(0,H.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e);let t=e;return(0,H.jsx)(`button`,{"aria-current":B===t?`page`:void 0,className:B===t?`admin-page-button--active`:void 0,disabled:Gt.length===0,onClick:()=>cr(t),type:`button`,children:t},t)}),(0,H.jsx)(`button`,{type:`button`,disabled:B===Kt||Gt.length===0,"aria-label":`Next page`,onClick:()=>cr(B+1),children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]})}),r&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-logs-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close logs modal`,className:`admin-modal-backdrop`,onClick:()=>i(!1),type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Activity Logs`}),(0,H.jsx)(`h2`,{id:`admin-logs-title`,children:`System Activity Records`}),(0,H.jsx)(`p`,{children:`Review recent uploads, edits, deletes, student updates, and page actions.`})]}),(0,H.jsx)(`button`,{"aria-label":`Close logs`,className:`admin-modal-close`,onClick:()=>i(!1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsxs)(`div`,{className:`admin-logs-toolbar`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Log Management`}),(0,H.jsx)(`strong`,{children:`Permanently remove all system activity records.`})]}),(0,H.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:at===void 0||bt.length===0||ge,onClick:Ir,type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_sweep`}),ge?`Clearing...`:`Clear All Logs`]})]}),(0,H.jsx)(`div`,{className:`admin-logs-table-wrap`,children:(0,H.jsxs)(`table`,{className:`admin-logs-table`,children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{children:`Date & Time`}),(0,H.jsx)(`th`,{children:`Action`}),(0,H.jsx)(`th`,{children:`Actor`}),(0,H.jsx)(`th`,{children:`Target`}),(0,H.jsx)(`th`,{children:`Summary`})]})}),(0,H.jsxs)(`tbody`,{children:[at===void 0&&(0,H.jsx)(`tr`,{children:(0,H.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`Loading activity logs...`})}),at&&bt.length===0&&(0,H.jsx)(`tr`,{children:(0,H.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`No activity logs recorded yet.`})}),gn.map(e=>(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{"data-label":`Date & Time`,children:Gn(e.createdAt)}),(0,H.jsx)(`td`,{"data-label":`Action`,children:(0,H.jsx)(`span`,{className:`admin-log-action`,children:e.action})}),(0,H.jsxs)(`td`,{"data-label":`Actor`,children:[(0,H.jsx)(`strong`,{children:e.actorName||e.actorId||e.actorRole}),(0,H.jsx)(`span`,{children:e.actorRole})]}),(0,H.jsxs)(`td`,{"data-label":`Target`,children:[(0,H.jsx)(`strong`,{children:e.targetLabel||e.targetType}),(0,H.jsx)(`span`,{children:e.targetType})]}),(0,H.jsx)(`td`,{"data-label":`Summary`,children:e.summary})]},e._id))]})]})}),(0,H.jsxs)(`div`,{className:`admin-pagination admin-logs-pagination`,children:[(0,H.jsxs)(`p`,{children:[`Showing `,(0,H.jsx)(`strong`,{children:_n}),` to `,(0,H.jsx)(`strong`,{children:vn}),` of`,` `,(0,H.jsx)(`strong`,{children:bt.length}),` logs`]}),(0,H.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,H.jsx)(`button`,{type:`button`,disabled:mn===1||bt.length===0,"aria-label":`Previous logs page`,onClick:()=>ur(mn-1),children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:un},(e,t)=>{let n=t+1;return(0,H.jsx)(`button`,{className:mn===n?`admin-page-button--active`:void 0,disabled:bt.length===0,onClick:()=>ur(n),type:`button`,children:n},n)}),(0,H.jsx)(`button`,{type:`button`,disabled:mn===un||bt.length===0,"aria-label":`Next logs page`,onClick:()=>ur(mn+1),children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),y&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-batch-export-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close batch export modal`,className:`admin-modal-backdrop`,onClick:()=>b(!1),type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Batch CSV Export`}),(0,H.jsx)(`h2`,{id:`admin-batch-export-title`,children:`Choose Batch`}),(0,H.jsx)(`p`,{children:`Export student account information for a specific batch using allinfo Student IDs.`})]}),(0,H.jsx)(`button`,{"aria-label":`Close batch export`,className:`admin-modal-close`,onClick:()=>b(!1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsx)(`div`,{className:`admin-school-year-downloads`,children:Sn.map(({accountCount:e,batchId:t,recordCount:n})=>(0,H.jsxs)(`button`,{className:`admin-school-year-button`,disabled:lt===void 0,onClick:()=>Ar(t),type:`button`,children:[(0,H.jsx)(`span`,{children:t}),(0,H.jsx)(`strong`,{children:lt===void 0?`Loading accounts...`:`${n} records / ${e} accounts`})]},t))}),(0,H.jsxs)(`div`,{className:`admin-pagination admin-batch-export-pagination`,children:[(0,H.jsxs)(`p`,{children:[`Showing `,(0,H.jsx)(`strong`,{children:Cn}),`-`,(0,H.jsx)(`strong`,{children:wn}),` `,`of `,(0,H.jsx)(`strong`,{children:Pt.length}),` batches`]}),(0,H.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,H.jsx)(`button`,{disabled:bn===1,onClick:()=>dr(bn-1),type:`button`,"aria-label":`Previous batch export page`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:yn},(e,t)=>{let n=t+1;return(0,H.jsx)(`button`,{"aria-current":bn===n?`page`:void 0,className:bn===n?`admin-page-button--active`:void 0,onClick:()=>dr(n),type:`button`,children:n},n)}),(0,H.jsx)(`button`,{disabled:bn===yn,onClick:()=>dr(bn+1),type:`button`,"aria-label":`Next batch export page`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,H.jsx)(`div`,{className:`admin-upload-actions`,children:(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>b(!1),type:`button`,children:`Cancel`})})]})]}),x&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close batch delete modal`,className:`admin-modal-backdrop`,onClick:Vr,type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Delete Batch`}),(0,H.jsx)(`h2`,{id:`admin-batch-delete-title`,children:`Choose Batch`}),(0,H.jsx)(`p`,{children:`Select a batch to delete all information records under that batch.`})]}),(0,H.jsx)(`button`,{"aria-label":`Close batch delete`,className:`admin-modal-close`,disabled:fe,onClick:Vr,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsx)(`div`,{className:`admin-school-year-downloads`,children:Sn.map(({batchId:e,recordCount:t})=>(0,H.jsxs)(`button`,{className:`admin-school-year-button admin-school-year-button--danger`,disabled:fe,onClick:()=>P({batchId:e,recordCount:t}),type:`button`,children:[(0,H.jsx)(`span`,{children:e}),(0,H.jsxs)(`strong`,{children:[t,` `,t===1?`record`:`records`]})]},e))}),(0,H.jsxs)(`div`,{className:`admin-pagination admin-batch-export-pagination`,children:[(0,H.jsxs)(`p`,{children:[`Showing `,(0,H.jsx)(`strong`,{children:Cn}),`-`,(0,H.jsx)(`strong`,{children:wn}),` `,`of `,(0,H.jsx)(`strong`,{children:Pt.length}),` batches`]}),(0,H.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,H.jsx)(`button`,{"aria-label":`Previous batch delete page`,disabled:bn===1||fe,onClick:()=>dr(bn-1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:yn},(e,t)=>{let n=t+1;return(0,H.jsx)(`button`,{"aria-current":bn===n?`page`:void 0,className:bn===n?`admin-page-button--active`:void 0,disabled:fe,onClick:()=>dr(n),type:`button`,children:n},n)}),(0,H.jsx)(`button`,{"aria-label":`Next batch delete page`,disabled:bn===yn||fe,onClick:()=>dr(bn+1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,H.jsx)(`div`,{className:`admin-upload-actions`,children:(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:fe,onClick:Vr,type:`button`,children:`Cancel`})})]})]}),N&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-backdrop`,onClick:()=>{fe||P(null)},type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-modal-card--applicant-years`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Confirm Delete`}),(0,H.jsx)(`h2`,{id:`admin-batch-delete-confirm-title`,children:`Delete this batch information?`}),(0,H.jsx)(`p`,{children:`Are you sure you want to delete this batch information?`})]}),(0,H.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-close`,disabled:fe,onClick:()=>P(null),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsxs)(`div`,{className:`admin-confirm-body`,children:[(0,H.jsx)(`strong`,{children:N.batchId}),(0,H.jsxs)(`p`,{children:[`This will permanently delete `,N.recordCount,` `,N.recordCount===1?`record`:`records`,` from this batch.`]})]}),(0,H.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:fe,onClick:()=>P(null),type:`button`,children:`Cancel`}),(0,H.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:fe,onClick:async()=>{if(!N)return;let e=N.batchId,t=z.filter(t=>String(t.batchId??``).trim()===e).map(e=>e._id);if(t.length===0){ue(`No records found for this batch.`),P(null);return}pe(!0),ue(`Deleting batch ${e}...`);try{let n=await pt({ids:t});Ce(e=>e.filter(e=>!t.includes(e))),ue(`${n?.deleted??t.length} record${(n?.deleted??t.length)===1?``:`s`} deleted from batch ${e}.`),P(null),S(!1),ye(1)}catch(e){ue(e instanceof Error?e.message:`Unable to delete batch records.`)}finally{pe(!1)}},type:`button`,children:fe?`Deleting...`:`Delete Batch`})]})]})]}),l&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-unifast-open-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-backdrop`,onClick:zr,type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`UNIFAST Portal`}),(0,H.jsx)(`h2`,{id:`admin-unifast-open-title`,children:`Open the portal?`}),(0,H.jsx)(`p`,{children:`Do you want to open the portal for receiving applicants information?`})]}),(0,H.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-close`,onClick:zr,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsx)(`div`,{className:`admin-confirm-body`,children:(0,H.jsx)(`p`,{children:`Select Yes to view applicants by course and prepare a course download.`})}),(0,H.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:zr,type:`button`,children:`No`}),(0,H.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>{u(!1),f(!0)},type:`button`,children:`Yes`})]})]})]}),d&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-unifast-courses-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-backdrop`,onClick:zr,type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receiving Applicants Information`}),(0,H.jsx)(`h2`,{id:`admin-unifast-courses-title`,children:`Choose Course`}),(0,H.jsxs)(`p`,{children:[`Select a specific course to download applicant information for `,wt,`.`]})]}),(0,H.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-close`,onClick:zr,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsxs)(`div`,{className:`admin-applicant-portal-controls`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Landing Portal Status`}),(0,H.jsx)(`strong`,{children:ct?.isReceivingApplicants?`Receiving ${wt} applicants`:`Closed for applicants`})]}),(0,H.jsxs)(`div`,{className:`admin-applicant-portal-actions`,children:[(0,H.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:ct===void 0||ct?.isReceivingApplicants,onClick:()=>{rt(1),m(!0)},type:`button`,children:`Receive Applicants`}),(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ct===void 0||!ct?.isReceivingApplicants,onClick:()=>Lr(!1),type:`button`,children:`Close Applicants`})]})]}),(0,H.jsx)(`div`,{className:`admin-school-year-downloads admin-course-downloads`,children:Ft.map(({applicantCount:e,course:t})=>(0,H.jsxs)(`button`,{className:`admin-school-year-button`,disabled:st===void 0,onClick:()=>vr(t),type:`button`,children:[(0,H.jsx)(`span`,{children:t}),(0,H.jsx)(`strong`,{children:st===void 0?`Loading...`:`${e} ${e===1?`applicant`:`applicants`}`})]},t))}),(0,H.jsx)(`div`,{className:`admin-upload-actions`,children:(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:zr,type:`button`,children:`Cancel`})})]})]}),p&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-applicant-year-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-backdrop`,onClick:()=>{m(!1),rt(1)},type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receive Applicants`}),(0,H.jsx)(`h2`,{id:`admin-applicant-year-title`,children:`Choose Application Year`}),(0,H.jsx)(`p`,{children:`Select the year for the new applicant cycle. Counts and downloads will use this year.`})]}),(0,H.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-close`,onClick:()=>{m(!1),rt(1)},type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsx)(`div`,{className:`admin-year-options`,children:kt.map(e=>(0,H.jsxs)(`button`,{className:`admin-year-option`,onClick:()=>Rr(e),type:`button`,children:[(0,H.jsx)(`span`,{children:e}),(0,H.jsxs)(`strong`,{children:[xt.filter(t=>rr(t)===e).length,` `,`existing applicants`]})]},e))}),(0,H.jsxs)(`div`,{className:`admin-pagination admin-applicant-year-pagination`,children:[(0,H.jsxs)(`p`,{children:[`Showing `,(0,H.jsx)(`strong`,{children:jt}),` to`,` `,(0,H.jsx)(`strong`,{children:Mt}),` of`,` `,(0,H.jsx)(`strong`,{children:Tt.length}),` years`]}),(0,H.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,H.jsx)(`button`,{"aria-label":`Previous application years page`,disabled:Dt===1||Tt.length===0,onClick:()=>gr(Dt-1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),At.map(e=>typeof e==`number`?(0,H.jsx)(`button`,{className:Dt===e?`admin-page-button--active`:void 0,disabled:Tt.length===0,onClick:()=>gr(e),type:`button`,children:e},e):(0,H.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,H.jsx)(`button`,{"aria-label":`Next application years page`,disabled:Dt===Et||Tt.length===0,onClick:()=>gr(Dt+1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,H.jsx)(`div`,{className:`admin-upload-actions`,children:(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>{m(!1),rt(1)},type:`button`,children:`Cancel`})})]})]}),h&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-course-applicants-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-backdrop`,onClick:yr,type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-course-applicants-modal`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Course Applicants Information`}),(0,H.jsx)(`h2`,{id:`admin-course-applicants-title`,children:`Applicants Table`}),(0,H.jsxs)(`p`,{children:[h,` applicants for `,wt,`.`]})]}),(0,H.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-close`,onClick:yr,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsxs)(`div`,{className:`admin-course-applicants-toolbar`,children:[(0,H.jsxs)(`div`,{className:`admin-search-field admin-course-applicant-search`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,H.jsx)(`input`,{"aria-label":`Search course applicants`,placeholder:`Search applicant name, ID, email, mobile, status...`,type:`search`,value:Ue,onChange:br})]}),(0,H.jsxs)(`div`,{className:`admin-course-applicants-toolbar__actions`,children:[(0,H.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:st===void 0||It.length===0||Ke||Je,onClick:()=>R(!0),type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),`Delete All Applicants`]}),(0,H.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:st===void 0||It.length===0||Ke||Je,onClick:()=>jr(h),type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download All Applicants Info`]})]})]}),(0,H.jsxs)(`div`,{className:`admin-course-applicants-summary`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Total Course Applicants`}),(0,H.jsx)(`strong`,{children:It.length})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Filtered Results`}),(0,H.jsx)(`strong`,{children:Lt.length})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Rows Per Page`}),(0,H.jsx)(`strong`,{children:Vn})]})]}),(0,H.jsx)(`div`,{className:`admin-course-applicants-table-wrap`,children:(0,H.jsxs)(`table`,{className:`admin-course-applicants-table`,children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{children:`No.`}),(0,H.jsx)(`th`,{children:`Student ID`}),(0,H.jsx)(`th`,{children:`Applicant Name`}),(0,H.jsx)(`th`,{children:`Gender`}),(0,H.jsx)(`th`,{children:`Birth Date`}),(0,H.jsx)(`th`,{children:`Year`}),(0,H.jsx)(`th`,{children:`Mobile No.`}),(0,H.jsx)(`th`,{children:`Email Address`}),(0,H.jsx)(`th`,{children:`Address`}),(0,H.jsx)(`th`,{children:`PSA`}),(0,H.jsx)(`th`,{children:`School ID`}),(0,H.jsx)(`th`,{children:`PWD ID PDF`}),(0,H.jsx)(`th`,{children:`4Ps ID PDF`}),(0,H.jsx)(`th`,{children:`Status`}),(0,H.jsx)(`th`,{children:`Submitted`})]})}),(0,H.jsxs)(`tbody`,{children:[st===void 0&&(0,H.jsx)(`tr`,{children:(0,H.jsx)(`td`,{className:`admin-empty-state`,colSpan:15,children:`Loading applicants...`})}),st!==void 0&&Lt.length===0&&(0,H.jsx)(`tr`,{children:(0,H.jsx)(`td`,{className:`admin-empty-state`,colSpan:15,children:`No applicants found for this course.`})}),Vt.map((e,t)=>{let n=[e.firstName,e.middleName,e.lastName,e.extensionName].filter(Boolean).join(` `)||`No name`;return(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{"data-label":`No.`,children:Bt+t+1}),(0,H.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,H.jsx)(`td`,{className:`admin-applicant-name`,"data-label":`Applicant Name`,children:n}),(0,H.jsx)(`td`,{"data-label":`Gender`,children:e.gender}),(0,H.jsx)(`td`,{"data-label":`Birth Date`,children:e.birthDate}),(0,H.jsx)(`td`,{"data-label":`Year`,children:e.year}),(0,H.jsx)(`td`,{"data-label":`Mobile No.`,children:e.mobileNumber}),(0,H.jsx)(`td`,{className:`admin-applicant-email`,"data-label":`Email Address`,children:e.emailAddress}),(0,H.jsx)(`td`,{className:`admin-applicant-address`,"data-label":`Address`,children:e.address}),(0,H.jsx)(`td`,{"data-label":`PSA`,children:e.psaFileUrl?(0,H.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.psaFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`}),`View PSA`]}):(0,H.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,H.jsx)(`td`,{"data-label":`School ID`,children:e.schoolIdFileUrl?(0,H.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.schoolIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`}),`View School ID`]}):(0,H.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,H.jsx)(`td`,{"data-label":`PWD ID PDF`,children:e.pwdIdFileUrl?(0,H.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.pwdIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`}),`View PWD ID`]}):(0,H.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,H.jsx)(`td`,{"data-label":`4Ps ID PDF`,children:e.fourPsFileUrl?(0,H.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.fourPsFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`}),`View 4Ps ID`]}):(0,H.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,H.jsx)(`td`,{"data-label":`Status`,children:(0,H.jsx)(qn,{status:e.status,tone:Jn(e.status)})}),(0,H.jsx)(`td`,{"data-label":`Submitted`,children:Yn(e.submittedAt)})]},e._id)})]})]})}),(0,H.jsxs)(`div`,{className:`admin-pagination admin-course-applicants-pagination`,children:[(0,H.jsxs)(`p`,{children:[`Showing `,(0,H.jsx)(`strong`,{children:Ut}),` to`,` `,(0,H.jsx)(`strong`,{children:Wt}),` of`,` `,(0,H.jsx)(`strong`,{children:Lt.length}),` applicants`]}),(0,H.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,H.jsx)(`button`,{"aria-label":`Previous course applicants page`,disabled:zt===1||Lt.length===0,onClick:()=>mr(zt-1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Ht.map(e=>typeof e==`number`?(0,H.jsx)(`button`,{className:zt===e?`admin-page-button--active`:void 0,disabled:Lt.length===0,onClick:()=>mr(e),type:`button`,children:e},e):(0,H.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,H.jsx)(`button`,{"aria-label":`Next course applicants page`,disabled:zt===Rt||Lt.length===0,onClick:()=>mr(zt+1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,H.jsx)(`div`,{className:`admin-upload-actions`,children:(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:yr,type:`button`,children:`Close`})})]})]}),Ge&&h&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-course-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close applicant deletion warning`,className:`admin-modal-backdrop`,onClick:()=>{Ke||R(!1)},type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,H.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`warning`})}),(0,H.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Permanent Action`}),(0,H.jsx)(`h2`,{id:`admin-course-delete-confirm-title`,children:`Delete all course applications?`}),(0,H.jsxs)(`p`,{children:[`Are you sure you want to delete all`,` `,(0,H.jsx)(`strong`,{children:It.length}),` applications for`,` `,(0,H.jsx)(`strong`,{children:h}),`, application year`,` `,(0,H.jsx)(`strong`,{children:wt}),`?`]})]}),(0,H.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`report`}),`Applicant records will be permanently removed from Convex and their uploaded PDFs moved to Google Drive trash.`]}),(0,H.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Ke,onClick:()=>R(!1),type:`button`,children:`No, Keep Applications`}),(0,H.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:Ke,onClick:Mr,type:`button`,children:Ke?`Deleting...`:`Yes, Delete All`})]})]})]}),Je&&(0,H.jsx)(`div`,{"aria-labelledby":`admin-course-download-progress-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:(0,H.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-progress-card`,children:[(0,H.jsx)(`div`,{className:`admin-progress-icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`downloading`})}),(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Course Applicants Information`}),(0,H.jsx)(`h2`,{id:`admin-course-download-progress-title`,children:`Preparing Applicant Download`}),(0,H.jsxs)(`p`,{children:[`Creating the CSV file for `,h,`.`]}),(0,H.jsx)(`div`,{"aria-label":`Download progress ${Xe}%`,"aria-valuemax":`100`,"aria-valuemin":`0`,"aria-valuenow":Xe,className:`admin-progress-track`,role:`progressbar`,children:(0,H.jsx)(`span`,{style:{width:`${Xe}%`}})}),(0,H.jsxs)(`strong`,{className:`admin-progress-value`,children:[Xe,`%`]})]})}),Qe&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-course-success-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close applicant action success message`,className:`admin-modal-backdrop`,onClick:()=>$e(null),type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card admin-success-card`,children:[(0,H.jsx)(`div`,{className:`admin-success-card__icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,H.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Completed Successfully`}),(0,H.jsx)(`h2`,{id:`admin-course-success-title`,children:Qe.type===`download`?`Applicant download is ready`:`Applications deleted`}),(0,H.jsxs)(`p`,{children:[Qe.count,` applicant`,` `,Qe.count===1?`record`:`records`,` for`,` `,(0,H.jsx)(`strong`,{children:Qe.course}),`, application year`,` `,(0,H.jsx)(`strong`,{children:Qe.year}),` `,Qe.type===`download`?`were added to the CSV file.`:`were deleted successfully.`]})]}),(0,H.jsx)(`div`,{className:`admin-confirm-card__actions admin-success-card__actions`,children:(0,H.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>$e(null),type:`button`,children:`Done`})})]})]}),C&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-school-id-download-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close School ID download modal`,className:`admin-modal-backdrop`,onClick:Sr,type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,H.jsx)(`h2`,{id:`admin-school-id-download-title`,children:`Choose School Year`}),(0,H.jsx)(`p`,{children:`Download all uploaded School ID files for a specific School Year.`})]}),(0,H.jsx)(`button`,{"aria-label":`Close School ID download`,className:`admin-modal-close`,disabled:O,onClick:Sr,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsx)(`div`,{className:`admin-school-year-downloads`,children:On.map(({fileCount:e,schoolYear:t})=>(0,H.jsxs)(`button`,{className:`admin-school-year-button`,disabled:O,onClick:()=>xr(t),type:`button`,children:[(0,H.jsx)(`span`,{children:t}),(0,H.jsx)(`strong`,{children:O?`Preparing...`:`${e} ${e===1?`file`:`files`}`})]},t))}),(0,H.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,H.jsxs)(`p`,{children:[`Showing `,(0,H.jsx)(`strong`,{children:kn}),`-`,(0,H.jsx)(`strong`,{children:An}),` of`,` `,(0,H.jsx)(`strong`,{children:Qt.length}),` school years`]}),(0,H.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,H.jsx)(`button`,{"aria-label":`Previous School ID page`,disabled:En===1||O,onClick:()=>U(En-1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Tn},(e,t)=>{let n=t+1;return(0,H.jsx)(`button`,{"aria-current":En===n?`page`:void 0,className:En===n?`admin-page-button--active`:void 0,disabled:O,onClick:()=>U(n),type:`button`,children:n},n)}),(0,H.jsx)(`button`,{"aria-label":`Next School ID page`,disabled:En===Tn||O,onClick:()=>U(En+1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,H.jsx)(`div`,{className:`admin-upload-actions`,children:(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:O,onClick:Sr,type:`button`,children:`Cancel`})})]})]}),ee&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-school-id-batch-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close School ID batch modal`,className:`admin-modal-backdrop`,onClick:()=>{O||T(``)},type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,H.jsx)(`h2`,{id:`admin-school-id-batch-title`,children:`Choose Batch`}),(0,H.jsxs)(`p`,{children:[`Download uploaded School ID files for `,ee,` by batch. File names include Student ID, last name, first name, middle name, and batch no.`]})]}),(0,H.jsx)(`button`,{"aria-label":`Close School ID batch download`,className:`admin-modal-close`,disabled:O,onClick:()=>T(``),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsxs)(`div`,{className:`admin-school-year-downloads`,children:[Xn.map(({batchId:e,fileCount:t})=>(0,H.jsxs)(`button`,{className:`admin-school-year-button`,disabled:O||k,onClick:()=>Cr(e,t),type:`button`,children:[(0,H.jsx)(`span`,{children:e}),(0,H.jsxs)(`strong`,{children:[t,` `,t===1?`file`:`files`]})]},e)),$t.length===0&&(0,H.jsx)(`div`,{className:`admin-modal-empty-state`,children:`No batches with uploaded School ID files were found for this School Year.`})]}),(0,H.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,H.jsxs)(`p`,{children:[`Showing `,(0,H.jsx)(`strong`,{children:ar}),`-`,(0,H.jsx)(`strong`,{children:sr}),` of`,` `,(0,H.jsx)(`strong`,{children:$t.length}),` batches`]}),(0,H.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,H.jsx)(`button`,{"aria-label":`Previous School ID batch page`,disabled:Pn===1||O,onClick:()=>pr(Pn-1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:jn},(e,t)=>{let n=t+1;return(0,H.jsx)(`button`,{"aria-current":Pn===n?`page`:void 0,className:Pn===n?`admin-page-button--active`:void 0,disabled:O,onClick:()=>pr(n),type:`button`,children:n},n)}),(0,H.jsx)(`button`,{"aria-label":`Next School ID batch page`,disabled:Pn===jn||O,onClick:()=>pr(Pn+1),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,H.jsx)(`div`,{className:`admin-upload-actions`,children:(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:O,onClick:()=>T(``),type:`button`,children:`Back`})})]})]}),E&&!te&&!O&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-school-id-batch-action-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close School ID batch actions`,className:`admin-modal-backdrop`,onClick:wr,type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`p`,{className:`admin-modal-kicker`,children:[`Batch `,E.batchId]}),(0,H.jsx)(`h2`,{id:`admin-school-id-batch-action-title`,children:`Manage School ID Files`}),(0,H.jsxs)(`p`,{children:[E.fileCount,` `,E.fileCount===1?`file`:`files`,` for School Year`,` `,E.schoolYear,`.`]})]}),(0,H.jsx)(`button`,{"aria-label":`Close School ID batch actions`,className:`admin-modal-close`,onClick:wr,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsxs)(`div`,{className:`admin-school-id-actions`,children:[(0,H.jsxs)(`button`,{className:`admin-school-id-action admin-school-id-action--download`,onClick:()=>Or(E.schoolYear,E.batchId),type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`folder_zip`}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`strong`,{children:`Download All IDs`}),(0,H.jsx)(`small`,{children:`Create one ZIP file for this batch.`})]})]}),(0,H.jsxs)(`button`,{className:`admin-school-id-action admin-school-id-action--delete`,onClick:()=>ne(!0),type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`strong`,{children:`Delete All IDs`}),(0,H.jsx)(`small`,{children:`Remove the Drive files and clear their Convex links.`})]})]})]}),(0,H.jsx)(`div`,{className:`admin-upload-actions`,children:(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:wr,type:`button`,children:`Back`})})]})]}),te&&E&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-school-id-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close School ID delete warning`,className:`admin-modal-backdrop`,onClick:()=>{k||ne(!1)},type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,H.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`warning`})}),(0,H.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Permanent Action`}),(0,H.jsx)(`h2`,{id:`admin-school-id-delete-confirm-title`,children:`Delete all IDs in this batch?`}),(0,H.jsxs)(`p`,{children:[`Are you sure you want to delete all`,` `,(0,H.jsx)(`strong`,{children:E.fileCount}),` School ID files from Batch`,` `,(0,H.jsx)(`strong`,{children:E.batchId}),`?`]})]}),(0,H.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`report`}),`The files will be moved to Google Drive trash and their links removed from Convex.`]}),(0,H.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:k,onClick:()=>ne(!1),type:`button`,children:`No, Keep Files`}),(0,H.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:k,onClick:kr,type:`button`,children:k?`Deleting...`:`Yes, Delete All`})]})]})]}),O&&E&&(0,H.jsx)(`div`,{"aria-labelledby":`admin-school-id-progress-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:(0,H.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-progress-card`,children:[(0,H.jsx)(`div`,{className:`admin-progress-icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`downloading`})}),(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,H.jsx)(`h2`,{id:`admin-school-id-progress-title`,children:`Preparing Batch Download`}),(0,H.jsxs)(`p`,{children:[`Downloading Batch `,E.batchId,` files and creating the ZIP.`]}),(0,H.jsx)(`div`,{"aria-label":`Download progress ${j}%`,"aria-valuemax":`100`,"aria-valuemin":`0`,"aria-valuenow":j,className:`admin-progress-track`,role:`progressbar`,children:(0,H.jsx)(`span`,{style:{width:`${j}%`}})}),(0,H.jsxs)(`strong`,{className:`admin-progress-value`,children:[j,`%`]})]})}),ae&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-school-id-success-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close School ID success message`,className:`admin-modal-backdrop`,onClick:()=>M(null),type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card admin-success-card`,children:[(0,H.jsx)(`div`,{className:`admin-success-card__icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,H.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Completed Successfully`}),(0,H.jsx)(`h2`,{id:`admin-school-id-success-title`,children:ae.type===`download`?`Batch download is ready`:`Batch ID files deleted`}),(0,H.jsxs)(`p`,{children:[ae.count,` School ID`,` `,ae.count===1?`file`:`files`,` for Batch`,` `,(0,H.jsx)(`strong`,{children:ae.batchId}),`, School Year`,` `,(0,H.jsx)(`strong`,{children:ae.schoolYear}),` `,ae.type===`download`?`were added to the ZIP file.`:`were deleted successfully.`]})]}),(0,H.jsx)(`div`,{className:`admin-confirm-card__actions admin-success-card__actions`,children:(0,H.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>M(null),type:`button`,children:`Done`})})]})]}),we&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-edit-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close edit record modal`,className:`admin-modal-backdrop`,onClick:Gr,type:`button`}),(0,H.jsxs)(`form`,{className:`admin-modal-card admin-modal-card--edit`,onSubmit:Jr,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header admin-modal-header--edit`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Edit Record`}),(0,H.jsx)(`h2`,{id:`admin-edit-record-title`,children:`Edit Grantee Information`}),(0,H.jsx)(`p`,{children:`Update the selected grantee record details.`})]}),(0,H.jsx)(`button`,{"aria-label":`Close edit record`,className:`admin-modal-close`,disabled:ke,onClick:Gr,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsxs)(`div`,{className:`admin-edit-summary`,children:[(0,H.jsx)(`div`,{className:`admin-edit-summary__icon`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`person`})}),(0,H.jsxs)(`div`,{className:`admin-edit-summary__text`,children:[(0,H.jsx)(`span`,{children:`Selected Record`}),(0,H.jsx)(`strong`,{children:we.studentId||`No Student ID`}),(0,H.jsx)(qn,{status:we.status,tone:Jn(we.status)})]})]}),(0,H.jsxs)(`div`,{className:`admin-record-details admin-record-details--responsive`,children:[(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`span`,{children:`No.`}),(0,H.jsx)(`input`,{value:Ee?.no??``,onChange:qr(`no`)})]}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`span`,{children:`TES Award Number`}),(0,H.jsx)(`input`,{value:Ee?.tesAwardNumber??``,onChange:qr(`tesAwardNumber`)})]}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`span`,{children:`Student ID`}),(0,H.jsx)(`input`,{value:Ee?.studentId??``,onChange:qr(`studentId`)})]}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`span`,{children:`Last Name`}),(0,H.jsx)(`input`,{value:Ee?.lastName??``,onChange:qr(`lastName`)})]}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`span`,{children:`First Name`}),(0,H.jsx)(`input`,{value:Ee?.firstName??``,onChange:qr(`firstName`)})]}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`span`,{children:`MI.`}),(0,H.jsx)(`input`,{value:Ee?.middleInitial??``,onChange:qr(`middleInitial`)})]}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`span`,{children:`Batch No.`}),(0,H.jsx)(`input`,{value:Ee?.batchId??``,onChange:qr(`batchId`)})]}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`span`,{children:`Status`}),(0,H.jsxs)(`select`,{value:Ee?.status??``,onChange:qr(`status`),children:[(0,H.jsx)(`option`,{value:``,children:`Select Status`}),(0,H.jsx)(`option`,{children:`Grantee`}),(0,H.jsx)(`option`,{children:`Validated`}),(0,H.jsx)(`option`,{children:`Pending`}),(0,H.jsx)(`option`,{children:`Rejected`})]})]}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`span`,{children:`Semester`}),(0,H.jsx)(`input`,{value:Ee?.semester??``,onChange:qr(`semester`)})]}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`span`,{children:`School Year`}),(0,H.jsx)(`input`,{value:Ee?.schoolYear??``,onChange:qr(`schoolYear`)})]})]}),Oe&&(0,H.jsx)(`p`,{className:`admin-edit-message`,children:Oe}),(0,H.jsxs)(`div`,{className:`admin-upload-actions admin-upload-actions--sticky`,children:[(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ke,onClick:Gr,type:`button`,children:`Cancel`}),(0,H.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:ke,type:`submit`,children:ke?`Saving...`:`Save Changes`})]})]})]}),_&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-add-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close add record modal`,className:`admin-modal-backdrop`,onClick:Wr,type:`button`}),(0,H.jsxs)(`form`,{className:`admin-modal-card`,onSubmit:async e=>{if(e.preventDefault(),!F){ce(`Select a CSV file before uploading.`);return}if(!F.name.toLowerCase().endsWith(`.csv`)){ce(`Please upload the downloaded CSV template file.`);return}de(!0),ce(`Reading file...`);try{let e=hr(await F.text());if(e.length===0){ce(`No valid rows found. Use the CSV template headers and add record values.`);return}let t=await dt({records:e});ce(`${t.inserted} record${t.inserted===1?``:`s`} saved to allinfo.`),oe(null)}catch(e){ce(e instanceof Error?e.message:`Unable to upload records.`)}finally{de(!1)}},children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Add New Record`}),(0,H.jsx)(`h2`,{id:`admin-add-record-title`,children:`Upload CSV File`}),(0,H.jsx)(`p`,{children:`Use the required template format before uploading grantee records.`})]}),(0,H.jsx)(`button`,{"aria-label":`Close add record`,className:`admin-modal-close`,disabled:I,onClick:Wr,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsxs)(`div`,{className:`admin-upload-body`,children:[(0,H.jsxs)(`button`,{className:`admin-button admin-button--secondary`,onClick:Qn,type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download CSV Template`]}),(0,H.jsxs)(`label`,{className:`admin-upload-dropzone`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload_file`}),(0,H.jsx)(`strong`,{children:F?F.name:`Choose CSV file`}),(0,H.jsx)(`span`,{children:`Accepted format: downloaded CSV template`}),(0,H.jsx)(`input`,{accept:`.csv,text/csv`,disabled:I,onChange:e=>{let t=e.target.files?.[0]??null;oe(t),ce(t?`${t.name} is ready to upload.`:``)},type:`file`})]}),(0,H.jsx)(`div`,{className:`admin-template-preview`,"aria-label":`CSV template headers`,children:Kn.map(e=>(0,H.jsx)(`span`,{children:e},e))}),se&&(0,H.jsx)(`p`,{className:`admin-upload-message`,children:se})]}),(0,H.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:I,onClick:Wr,type:`button`,children:`Cancel`}),(0,H.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:I,type:`submit`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload`}),I?`Uploading...`:`Upload`]})]})]})]}),a&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-quick-actions-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close quick actions modal`,className:`admin-modal-backdrop`,onClick:()=>{s||o(!1)},type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--quick-actions`,children:[(0,H.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Quick Actions`}),(0,H.jsx)(`h2`,{id:`admin-quick-actions-title`,children:`Student Requests`}),(0,H.jsx)(`p`,{children:`Review submitted questions and requests from the student portal.`})]}),(0,H.jsx)(`button`,{"aria-label":`Close quick actions`,className:`admin-modal-close`,onClick:()=>{o(!1),c(!1)},type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsxs)(`div`,{className:`admin-quick-actions-summary`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Total Requests`}),(0,H.jsx)(`strong`,{children:it?.length??0})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Source`}),(0,H.jsx)(`strong`,{children:`Student Portal`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Status`}),(0,H.jsx)(`strong`,{children:`Live Data`})]})]}),(0,H.jsxs)(`div`,{className:`admin-quick-actions-toolbar`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Export Report`}),(0,H.jsx)(`strong`,{children:`Download all student responses with email accounts.`})]}),(0,H.jsxs)(`div`,{className:`admin-quick-actions-toolbar__actions`,children:[(0,H.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:it===void 0||yt.length===0||me,onClick:Nr,type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Export All Responses`]}),(0,H.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:it===void 0||yt.length===0||me,onClick:Pr,type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_sweep`}),me?`Clearing...`:`Clear All Messages`]})]})]}),(0,H.jsx)(`div`,{className:`admin-quick-actions-table-wrap`,children:(0,H.jsxs)(`table`,{className:`admin-quick-actions-table`,children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{children:`No.`}),(0,H.jsx)(`th`,{children:`Student Details`}),(0,H.jsx)(`th`,{children:`Email Account`}),(0,H.jsx)(`th`,{children:`Question`}),(0,H.jsx)(`th`,{children:`Source`}),(0,H.jsx)(`th`,{children:`Status`}),(0,H.jsx)(`th`,{children:`Submitted`})]})}),(0,H.jsxs)(`tbody`,{children:[it===void 0&&(0,H.jsx)(`tr`,{children:(0,H.jsx)(`td`,{className:`admin-empty-state`,colSpan:7,children:`Loading quick actions...`})}),it?.length===0&&(0,H.jsx)(`tr`,{children:(0,H.jsx)(`td`,{className:`admin-empty-state`,colSpan:7,children:`No quick action requests yet.`})}),sn.map((e,t)=>(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{"data-label":`No.`,children:an+t+1}),(0,H.jsxs)(`td`,{className:`admin-request-student`,"data-label":`Student Details`,children:[(0,H.jsx)(`strong`,{children:tr(e)||`Not provided`}),(0,H.jsx)(`span`,{children:e.studentId||`No Student ID`})]}),(0,H.jsx)(`td`,{className:`admin-request-email`,"data-label":`Email Account`,children:e.email}),(0,H.jsx)(`td`,{className:`admin-request-question`,"data-label":`Question`,children:e.question}),(0,H.jsx)(`td`,{"data-label":`Source`,children:e.source}),(0,H.jsx)(`td`,{"data-label":`Status`,children:(0,H.jsx)(qn,{status:e.status,tone:Jn(e.status)})}),(0,H.jsx)(`td`,{"data-label":`Submitted`,children:Yn(e.submittedAt)})]},e._id))]})]})}),(0,H.jsxs)(`div`,{className:`admin-pagination admin-quick-actions-pagination`,children:[(0,H.jsxs)(`p`,{children:[`Showing `,(0,H.jsx)(`strong`,{children:cn}),` to`,` `,(0,H.jsx)(`strong`,{children:ln}),` of`,` `,(0,H.jsx)(`strong`,{children:yt.length}),` requests`]}),(0,H.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,H.jsx)(`button`,{type:`button`,disabled:rn===1||yt.length===0,"aria-label":`Previous quick actions page`,onClick:()=>lr(rn-1),children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),on.map(e=>typeof e==`string`?(0,H.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e):(0,H.jsx)(`button`,{className:rn===e?`admin-page-button--active`:void 0,disabled:yt.length===0,onClick:()=>lr(e),type:`button`,children:e},e)),(0,H.jsx)(`button`,{type:`button`,disabled:rn===nn||yt.length===0,"aria-label":`Next quick actions page`,onClick:()=>lr(rn+1),children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),s&&(0,H.jsxs)(`div`,{"aria-describedby":`clear-quick-actions-description`,"aria-labelledby":`clear-quick-actions-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`alertdialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Keep Quick Action messages`,className:`admin-modal-backdrop`,disabled:me,onClick:()=>c(!1),type:`button`}),(0,H.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,H.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_sweep`})}),(0,H.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,H.jsx)(`p`,{className:`admin-modal-kicker`,children:`Permanent Action`}),(0,H.jsx)(`h2`,{id:`clear-quick-actions-title`,children:`Clear all messages?`}),(0,H.jsxs)(`p`,{id:`clear-quick-actions-description`,children:[`You are about to permanently delete`,` `,(0,H.jsxs)(`strong`,{children:[yt.length,` message`,yt.length===1?``:`s`]}),`. This action cannot be undone.`]})]}),(0,H.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`warning`}),`Export the responses first if you need to keep a copy.`]}),(0,H.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,H.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:me,onClick:()=>c(!1),type:`button`,children:`No, Keep Messages`}),(0,H.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:me,onClick:Fr,type:`button`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),me?`Clearing Messages...`:`Yes, Clear All`]})]})]})]}),(0,H.jsx)(`div`,{className:`admin-scroll-progress`,style:{"--admin-scroll":t}})]})}var _r=`
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
`,vr={quickActions:{table:`quickActions`,source:`all-grantee-information-header`,defaultStatus:`new`,fields:{email:{label:`Email account`,type:`email`,required:!0,placeholder:`name@example.com`},question:{label:`Question`,type:`textarea`,required:!0,placeholder:`Type your question or request here...`}}}};function yr(e){let t=(0,jn.c)(4),{status:n,tone:r}=e,i=`status-badge status-badge--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,H.jsx)(`span`,{className:`status-badge__dot`}),t[0]=a):a=t[0];let o;return t[1]!==n||t[2]!==i?(o=(0,H.jsxs)(`span`,{className:i,children:[a,n]}),t[1]=n,t[2]=i,t[3]=o):o=t[3],o}function br(e=``){let t=e.toLowerCase();return t.includes(`grantee`)||t.includes(`valid`)||t.includes(`complete`)||t.includes(`resolved`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function xr(e,t){let n=[];if(t<=5){for(let e=1;e<=t;e+=1)n.push(e);return n}n.push(1),e>3&&n.push(`left-ellipsis`);let r=Math.max(2,e-1),i=Math.min(t-1,e+1);for(let e=r;e<=i;e+=1)n.push(e);return e<t-2&&n.push(`right-ellipsis`),n.push(t),n}function Sr(e){return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e)}function Cr(e){return/^[A-Za-z0-9-]{4,30}$/.test(e)}function wr(e){return e.replace(/[\s-]/g,``).trim()}function Tr(e){return e.replace(/[^\d+]/g,``).replace(/(?!^)\+/g,``)}function Er(e){return e.replace(/[\r\n]+/g,` `).replace(/\s{2,}/g,` `)}function Dr(e){let t=wr(e);return/^09\d{9}$/.test(t)||/^\+639\d{9}$/.test(t)}var Or=5*1024*1024,kr=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``);function Ar(e){return e?e.type===`application/pdf`||/\.pdf$/i.test(e.name):!1}function jr(e){if(!e)return``;let t=e/(1024*1024);return`${t.toFixed(t>=10?0:1)} MB`}function Mr(e){return e.length>=6}function Nr(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}var Pr=[{label:`Student ID`,name:`studentId`,autoComplete:`off`,required:!0},{label:`Last Name`,name:`lastName`,autoComplete:`family-name`,required:!0},{label:`First Name`,name:`firstName`,autoComplete:`given-name`,required:!0},{label:`Ext Name (JR)`,name:`extensionName`,autoComplete:`honorific-suffix`},{label:`Middle Name`,name:`middleName`,autoComplete:`additional-name`}],Fr=[{label:`Last Name`,name:`fatherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`fatherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`fatherMiddleName`,autoComplete:`additional-name`}],Ir=[{label:`Last Name`,name:`motherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`motherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`motherMiddleName`,autoComplete:`additional-name`}],Lr=[`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`],Rr=[{label:`Address`,name:`address`,autoComplete:`street-address`,className:`portal-full-field`,required:!0},{label:`Zip Code`,name:`zipCode`,autoComplete:`postal-code`,inputMode:`numeric`},{label:`PWD ID`,name:`pwdId`,autoComplete:`off`},{label:`Mobile No.`,name:`mobileNumber`,autoComplete:`tel`,inputMode:`tel`,type:`tel`,pattern:`\\+?[0-9]*`,required:!0},{label:`Email Address`,name:`emailAddress`,autoComplete:`email`,inputMode:`email`,type:`email`,required:!0}];function zr({onAdminLoginSuccess:e,onStudentRegistrationSuccess:t}){let n=(0,V.useRef)(null),[r,i]=(0,V.useState)(0),[a,o]=(0,V.useState)(!1),[s,c]=(0,V.useState)(!1),[l,u]=(0,V.useState)(!1),[d,f]=(0,V.useState)(!1),[p,m]=(0,V.useState)(!1),[h,g]=(0,V.useState)(!1),[_,v]=(0,V.useState)(!1),[y,b]=(0,V.useState)(!1),[x,S]=(0,V.useState)(``),[C,w]=(0,V.useState)(``),[ee,T]=(0,V.useState)(``),[E,D]=(0,V.useState)(``),[te,ne]=(0,V.useState)(``),[O,re]=(0,V.useState)(``),[k,A]=(0,V.useState)({psaFile:null,schoolIdFile:null,pwdIdFile:null,fourPsFile:null}),[j,ie]=(0,V.useState)(null),[ae,M]=(0,V.useState)(!1),[N,P]=(0,V.useState)(!1),[F,oe]=(0,V.useState)(!1),[se,ce]=(0,V.useState)(!1),[le,ue]=(0,V.useState)(1),[I,de]=(0,V.useState)(``),[fe,pe]=(0,V.useState)(``),[me,he]=(0,V.useState)(``),[ge,_e]=(0,V.useState)(``),[ve,ye]=(0,V.useState)(``),[be,xe]=(0,V.useState)(``),[Se,Ce]=(0,V.useState)(``),[we,Te]=(0,V.useState)(``),[Ee,De]=(0,V.useState)(``),[Oe,L]=(0,V.useState)(``),[ke,Ae]=(0,V.useState)(``),[je,Me]=(0,V.useState)(null),[Ne,Pe]=(0,V.useState)(``),[Fe,Ie]=(0,V.useState)(``),[Le,Re]=(0,V.useState)(``),[ze,Be]=(0,V.useState)(``),[Ve,He]=(0,V.useState)(``),[Ue,We]=(0,V.useState)(``),[Ge,R]=(0,V.useState)(``),[Ke,qe]=(0,V.useState)(``),[Je,Ye]=(0,V.useState)(!1),[Xe,Ze]=(0,V.useState)(!1),[Qe,$e]=(0,V.useState)(!1),et=fn(Mn.applicants.create),tt=fn(Mn.quickActions.create),nt=fn(Mn.adminAuth.login),rt=fn(Mn.adminAuth.register),it=fn(Mn.adminAuth.requestPasswordResetOtp),at=fn(Mn.adminAuth.changePasswordWithOtp),ot=dn(Mn.allinfo.searchPublic,fe?{searchValue:fe}:`skip`),st=dn(Mn.applicantPortal.get),ct=(0,V.useMemo)(()=>ot??[],[ot]),lt=I.trim().length>0,ut=st===void 0,dt=st?.isReceivingApplicants===!0,ft=ct,pt=ft.length,mt=Math.max(1,Math.ceil(pt/6)),ht=(le-1)*6,gt=Math.min(ht+6,pt),_t=(0,V.useMemo)(()=>ft.slice(ht,gt),[ft,ht,gt]),vt=(0,V.useMemo)(()=>xr(le,mt),[le,mt]);(0,V.useEffect)(()=>{let e=window.setTimeout(()=>{pe(I.trim())},500);return()=>window.clearTimeout(e)},[I]);let z=(0,V.useCallback)(()=>{Ae(``),Me(null),ye(``),xe(``),Te(``),De(``),typeof t==`function`&&t(je)},[t,je]);(0,V.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;i(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,V.useEffect)(()=>{if(!a&&!s&&!l&&!d&&!p&&!h&&!_&&!y&&!O&&!ke&&!ee)return;let e=e=>{if(e.key===`Escape`){if(F)return;if(_){v(!1);return}if(y){b(!1);return}o(!1),c(!1),D(``),ne(``),ie(null),A({psaFile:null,schoolIdFile:null,pwdIdFile:null,fourPsFile:null}),u(!1),M(!1),f(!1),m(!1),g(!1),re(``),ke&&z(),T(``)}};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[a,s,l,d,p,h,_,y,F,O,ke,ee,z]);let yt=()=>{T(``),w(``),o(!0)},bt=()=>{o(!1),w(``)},xt=()=>{if(st===void 0){re(`Please wait while the UNIFAST portal status is loading.`);return}if(!st.isReceivingApplicants){re(`The UNIFAST portal is not receiving applicants right now. Please wait for the administrator to open applications.`);return}D(``),ne(``),v(!1),b(!1),c(!0)},St=()=>{F||(c(!1),D(``),ne(``),v(!1),A({psaFile:null,schoolIdFile:null,pwdIdFile:null,fourPsFile:null}),ie(null))},Ct=async(e,t,n)=>{let r=[n.lastName,n.firstName,n.middleName,n.extensionName].filter(Boolean).join(` `),i=new URLSearchParams({applicationYear:st?.applicationYear||String(new Date().getFullYear()),documentType:t,fileName:e.name,fullName:r,studentId:n.studentId}),a;try{a=await fetch(`${kr}/google-drive/upload?${i.toString()}`,{body:e,headers:{"Content-Type":e.type||`application/pdf`},method:`POST`})}catch{throw Error(`Unable to connect to the PDF upload service. Deploy the Convex HTTP functions and check VITE_CONVEX_URL or VITE_CONVEX_SITE_URL.`)}if(!a.ok){let t=await a.json().catch(()=>null);throw Error(t?.message||`Unable to upload ${e.name} to Google Drive.`)}let{fileUrl:o}=await a.json();if(!o)throw Error(`Google Drive did not return a file link for ${e.name}.`);return o},wt=e=>{let{files:t,name:n}=e.target,r=t?.[0]??null;if(D(``),ne(``),ie(null),!r){A(e=>({...e,[n]:null}));return}if(!Ar(r)){e.target.value=``,A(e=>({...e,[n]:null})),D(`Please upload PDF files only for all document requirements.`);return}if(r.size>Or){e.target.value=``,A(e=>({...e,[n]:null})),D(`Each uploaded PDF must be 5MB or smaller.`);return}A(e=>({...e,[n]:r}))},Tt=async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=wr(String(n.get(`mobileNumber`)||``)),i=String(n.get(`emailAddress`)||``).trim().toLowerCase(),a=n.get(`psaFile`),o=n.get(`schoolIdFile`),s=n.get(`pwdIdFile`),c=n.get(`fourPsFile`);if(D(``),ne(``),!st?.isReceivingApplicants){D(`The UNIFAST portal is closed for applicants right now.`);return}if(!Dr(r)){D(`Please enter a valid mobile number. Example: 09123456789 or +639123456789.`);return}if(!Sr(i)){D(`Please enter a valid email address.`);return}if(!(a instanceof File)||!a.name||!Ar(a)){D(`Please upload your PSA as a PDF file.`);return}if(!(o instanceof File)||!o.name||!Ar(o)){D(`Please upload your colored School ID photocopy as a PDF file.`);return}if(a.size>Or||o.size>Or){D(`Each uploaded PDF must be 5MB or smaller.`);return}let l=[s,c].filter(e=>e instanceof File&&e.name);if(l.some(e=>!Ar(e))){D(`Optional PWD ID and 4Ps ID documents must be PDF files.`);return}if(l.some(e=>e.size>Or)){D(`Each uploaded PDF must be 5MB or smaller.`);return}ie({studentId:String(n.get(`studentId`)||``).trim(),lastName:String(n.get(`lastName`)||``).trim(),firstName:String(n.get(`firstName`)||``).trim(),extensionName:String(n.get(`extensionName`)||``).trim(),middleName:String(n.get(`middleName`)||``).trim(),gender:String(n.get(`gender`)||``),birthDate:String(n.get(`birthDate`)||``),course:String(n.get(`course`)||``),year:String(n.get(`year`)||``),fatherLastName:String(n.get(`fatherLastName`)||``).trim(),fatherFirstName:String(n.get(`fatherFirstName`)||``).trim(),fatherMiddleName:String(n.get(`fatherMiddleName`)||``).trim(),motherLastName:String(n.get(`motherLastName`)||``).trim(),motherFirstName:String(n.get(`motherFirstName`)||``).trim(),motherMiddleName:String(n.get(`motherMiddleName`)||``).trim(),address:String(n.get(`address`)||``).trim(),zipCode:String(n.get(`zipCode`)||``).trim(),pwdId:String(n.get(`pwdId`)||``).trim(),mobileNumber:r,emailAddress:i,psaFile:a,schoolIdFile:o,pwdIdFile:l.includes(s)?s:null,fourPsFile:l.includes(c)?c:null})},Et=()=>{D(``),ne(``),v(!1),ie(null)},Dt=()=>{if(j){if(D(``),ne(``),!st?.isReceivingApplicants){D(`The UNIFAST portal is closed for applicants right now.`);return}v(!0)}},Ot=async()=>{if(j){if(D(``),ne(``),!st?.isReceivingApplicants){D(`The UNIFAST portal is closed for applicants right now.`);return}oe(!0);try{let[e,t,r,i]=await Promise.all([Ct(j.psaFile,`PSA`,j),Ct(j.schoolIdFile,`School-ID`,j),j.pwdIdFile?Ct(j.pwdIdFile,`PWD-ID`,j):Promise.resolve(void 0),j.fourPsFile?Ct(j.fourPsFile,`4Ps-ID`,j):Promise.resolve(void 0)]),a={studentId:j.studentId,lastName:j.lastName,firstName:j.firstName,extensionName:j.extensionName,middleName:j.middleName,gender:j.gender,birthDate:j.birthDate,course:j.course,year:j.year,fatherLastName:j.fatherLastName,fatherFirstName:j.fatherFirstName,fatherMiddleName:j.fatherMiddleName,motherLastName:j.motherLastName,motherFirstName:j.motherFirstName,motherMiddleName:j.motherMiddleName,address:j.address,zipCode:j.zipCode,pwdId:j.pwdId,mobileNumber:j.mobileNumber,emailAddress:j.emailAddress,psaFileUrl:e,psaFileName:j.psaFile.name,schoolIdFileUrl:t,schoolIdFileName:j.schoolIdFile.name};r&&j.pwdIdFile&&(a.pwdIdFileUrl=r,a.pwdIdFileName=j.pwdIdFile.name),i&&j.fourPsFile&&(a.fourPsFileUrl=i,a.fourPsFileName=j.fourPsFile.name);let o=await et(a);if(!o.success){v(!1),D(o.message||`Unable to submit applicant information.`);return}n.current?.reset(),A({psaFile:null,schoolIdFile:null,pwdIdFile:null,fourPsFile:null}),ie(null),ne(``),v(!1),c(!1),b(!0)}catch(e){v(!1),D(e instanceof Error?e.message:`Unable to submit applicant information right now.`)}finally{oe(!1)}}},kt=()=>{S(``),he(``),_e(``),u(!0)},At=()=>{u(!1),M(!1),S(``),he(``),_e(``)},jt=()=>{let e=me.trim(),t=e.includes(`@`);u(!1),m(!0),L(``),Ae(``),ye(t?e.toLowerCase():``),xe(t?``:e),Te(``),De(``)},Mt=()=>{m(!1),L(``),Ae(``),ye(``),xe(``),Ce(``),Te(``),De(``)},Nt=()=>{m(!1),L(``),Ae(``),Me(null),he(ve||be),_e(``),u(!0)},Pt=()=>{g(!1),m(!0)},Ft=()=>{let e=me.trim(),t=e.includes(`@`);u(!1),f(!0),R(``),qe(``),Ye(!1),Pe(t?e.toLowerCase():``),Ie(t?``:e),Re(``),Be(``),He(``),We(``)},It=()=>{f(!1),R(``),qe(``),Ye(!1),Pe(``),Ie(``),Re(``),Be(``),He(``),We(``)},Lt=()=>{ue(e=>Math.max(e-1,1))},Rt=()=>{ue(e=>Math.min(e+1,mt))},zt=()=>{de(``),pe(``),ue(1)},Bt=e=>{de(e.target.value),ue(1)},Vt=e=>{e.target.value=Tr(e.target.value)},Ht=()=>{Ye(!1),qe(``),Be(``),He(``),We(``)},Ut=e=>{let t=e.target.value;Pe(t),t.trim()&&Ie(``),Ht()},Wt=e=>{let t=e.target.value;Ie(t),t.trim()&&Pe(``),Ht()},Gt=e=>{Re(Tr(e.target.value)),Ht()},Kt=()=>{let e=Ne.trim().toLowerCase(),t=Fe.trim(),n=wr(Le);return!e&&!t?`Email address or School ID is required.`:e&&t?`Use either email address or School ID, not both.`:e&&!Sr(e)?`Please enter a valid email address.`:t&&!Cr(t)?`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`:n?Dr(n)?``:`Please enter a valid phone number. Example: 09123456789 or +639123456789.`:`Phone number is required.`};return(0,H.jsxs)(`div`,{className:`landing-page`,children:[(0,H.jsx)(`style`,{children:Br}),(0,H.jsxs)(`header`,{className:`landing-header`,children:[(0,H.jsxs)(`div`,{className:`brand-lockup`,children:[(0,H.jsx)(`div`,{className:`brand-mark`,children:(0,H.jsx)(`img`,{alt:`IBACMI`,className:`brand-mark__image`,src:Nn})}),(0,H.jsx)(`div`,{className:`brand-copy`,children:(0,H.jsx)(`p`,{className:`brand-title`,children:`IBACMI - Scholarship Office`})})]}),(0,H.jsxs)(`div`,{className:`header-actions`,children:[(0,H.jsx)(`button`,{className:`button button--compact`,onClick:yt,type:`button`,children:`SUPPORT`}),(0,H.jsx)(`button`,{className:`button button--compact button--admin`,onClick:kt,type:`button`,children:`SIGN IN`})]})]}),(0,H.jsx)(`main`,{className:`landing-main`,children:(0,H.jsxs)(`div`,{className:`landing-container`,children:[(0,H.jsx)(`section`,{className:`page-heading`,children:(0,H.jsxs)(`div`,{className:`page-heading__copy`,children:[(0,H.jsx)(`span`,{className:`eyebrow`,children:`Grantee Records`}),(0,H.jsxs)(`h2`,{className:`landing-office-title`,children:[(0,H.jsx)(`span`,{className:`landing-office-title__school`,children:`IBACMI`}),(0,H.jsx)(`span`,{className:`landing-office-title__separator`,"aria-hidden":`true`,children:`—`}),(0,H.jsx)(`span`,{className:`landing-office-title__office`,children:`Scholarship Office`})]})]})}),(0,H.jsxs)(`section`,{className:`filter-panel`,"aria-label":`Grantee filters`,children:[(0,H.jsxs)(`div`,{className:`search-field`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,H.jsx)(`input`,{placeholder:`Enter School ID, Either Batch No., or Last Name...`,type:`text`,value:I,onChange:Bt})]}),(0,H.jsxs)(`button`,{className:`icon-button filter-button`,type:`button`,"aria-label":`Clear search`,title:`Clear search`,onClick:zt,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`restart_alt`}),(0,H.jsx)(`span`,{className:`filter-button__text`,children:`Reset`})]})]}),!lt&&(0,H.jsxs)(`section`,{className:`scholarship-showcase`,"aria-labelledby":`scholarship-showcase-title`,children:[(0,H.jsxs)(`div`,{className:`scholarship-showcase__heading`,children:[(0,H.jsx)(`div`,{children:(0,H.jsx)(`span`,{className:`eyebrow`,children:`Scholarship Office`})}),(0,H.jsxs)(`span`,{className:`scholarship-showcase__status`,children:[(0,H.jsx)(`span`,{"aria-hidden":`true`}),`Official Information`]})]}),(0,H.jsxs)(`a`,{className:`scholarship-showcase__image-link`,href:`/IBACMI-Scholarship-Office/assets/desktop-Di8cTPxJ.png`,rel:`noreferrer`,target:`_blank`,title:`Open the Scholarship Office banner in full size`,children:[(0,H.jsx)(`img`,{alt:`IBACMI Scholarship Office banner featuring the scholarship coordinator and students assistant`,decoding:`async`,src:`/IBACMI-Scholarship-Office/assets/desktop-Di8cTPxJ.png`}),(0,H.jsxs)(`span`,{className:`scholarship-showcase__view`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`open_in_full`}),`View full banner`]})]})]}),lt&&(0,H.jsxs)(`section`,{className:`table-card`,"aria-label":`Filtered grantee records`,children:[(0,H.jsx)(`div`,{className:`table-scroll`,children:(0,H.jsxs)(`table`,{children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{children:`No.`}),(0,H.jsx)(`th`,{children:`TES Award Number`}),(0,H.jsx)(`th`,{children:`Student ID`}),(0,H.jsx)(`th`,{children:`Last Name`}),(0,H.jsx)(`th`,{children:`First Name`}),(0,H.jsx)(`th`,{children:`Middle Name`}),(0,H.jsx)(`th`,{children:`Batch No.`}),(0,H.jsx)(`th`,{children:`Status`}),(0,H.jsx)(`th`,{children:`Semester`}),(0,H.jsx)(`th`,{children:`School Year`})]})}),(0,H.jsxs)(`tbody`,{children:[ot===void 0&&fe&&(0,H.jsx)(`tr`,{children:(0,H.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`Searching grantee record...`})}),ot&&ft.length===0&&(0,H.jsx)(`tr`,{children:(0,H.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`No matching School ID, Batch No./ID, or name found.`})}),_t.map((e,t)=>(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{"data-label":`No.`,children:e.no||ht+t+1}),(0,H.jsx)(`td`,{className:`award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,H.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,H.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`â€”`}),(0,H.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`â€”`}),(0,H.jsx)(`td`,{"data-label":`Middle Name`,children:e.middleName||e.middleInitial||`â€”`}),(0,H.jsx)(`td`,{className:`batch-cell`,"data-label":`Batch ID`,children:e.batchId}),(0,H.jsx)(`td`,{"data-label":`Status`,children:(0,H.jsx)(yr,{status:e.status,tone:br(e.status)})}),(0,H.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,H.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`})]},e._id))]})]})}),(0,H.jsxs)(`div`,{className:`table-footer`,children:[(0,H.jsxs)(`p`,{children:[`Showing `,(0,H.jsx)(`strong`,{children:pt===0?0:ht+1}),` to`,` `,(0,H.jsx)(`strong`,{children:gt}),` of `,(0,H.jsx)(`strong`,{children:pt}),` result`,pt===1?``:`s`]}),(0,H.jsxs)(`div`,{className:`pagination`,children:[(0,H.jsx)(`button`,{className:`page-button`,disabled:le===1||pt===0,onClick:Lt,type:`button`,"aria-label":`Previous page`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),vt.map(e=>typeof e==`string`?(0,H.jsx)(`span`,{className:`pagination__ellipsis`,children:`...`},e):(0,H.jsx)(`button`,{className:`page-button ${le===e?`page-button--active`:``}`,disabled:pt===0,onClick:()=>ue(e),type:`button`,children:e},e)),(0,H.jsx)(`button`,{className:`page-button`,disabled:le===mt||pt===0,onClick:Rt,type:`button`,"aria-label":`Next page`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]}),(0,H.jsxs)(`section`,{className:`portal-cta`,"aria-labelledby":`portal-cta-title`,children:[(0,H.jsx)(`div`,{className:`portal-cta__icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`assignment`})}),(0,H.jsxs)(`div`,{className:`portal-cta__copy`,children:[(0,H.jsx)(`span`,{className:`eyebrow`,children:`Unified Student Financial Assistance System for Tertiary Education`}),(0,H.jsx)(`h3`,{id:`portal-cta-title`,children:`UNIFAST APPLICATION`}),(0,H.jsx)(`p`,{children:`Complete the student, parent, address, and contact information form for UNIFAST applicant processing.`})]}),(0,H.jsxs)(`button`,{"aria-label":ut?`Checking UNIFAST portal status`:dt?`UNIFAST portal is open. Open application form`:`UNIFAST portal is closed`,className:`button button--portal ${ut?`button--portal-loading`:dt?`button--portal-open`:`button--portal-closed`}`,disabled:ut,onClick:xt,type:`button`,children:[(0,H.jsx)(`span`,{className:`portal-status-dot`,"aria-hidden":`true`}),ut?`CHECKING PORTAL`:dt?`PORTAL OPEN`:`PORTAL IS CLOSED`]})]})]})}),(0,H.jsx)(`footer`,{className:`landing-footer`,children:(0,H.jsx)(`p`,{children:`Copyright 2026 | All Rights Reserved IBACMI - Scholarship Office | Developed By CINIFIX`})}),s&&(0,H.jsxs)(`div`,{"aria-labelledby":`unifast-portal-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close UNIFAST portal modal`,className:`modal-backdrop-button`,onClick:St,type:`button`}),(0,H.jsxs)(`form`,{className:`modal-card portal-modal-card`,ref:n,onSubmit:Tt,children:[(0,H.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,H.jsxs)(`div`,{className:`modal-title-row`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,H.jsx)(`h3`,{id:`unifast-portal-title`,children:`Student Information Form`}),(0,H.jsxs)(`p`,{children:[`Complete the student, parent, and contact information fields below`,st?.applicationYear?` for ${st.applicationYear}.`:`.`]})]}),(0,H.jsx)(`button`,{"aria-label":`Close UNIFAST portal`,className:`icon-button modal-close`,onClick:St,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,H.jsxs)(`div`,{className:`modal-body portal-form${j?` portal-form--hidden`:``}`,children:[(0,H.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-student-heading`,children:[(0,H.jsx)(`h4`,{id:`portal-student-heading`,children:`Student Information`}),(0,H.jsxs)(`div`,{className:`portal-grid`,children:[Pr.map(e=>(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:e.label}),(0,H.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:`text`})]},e.name)),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`Gender`}),(0,H.jsxs)(`select`,{name:`gender`,defaultValue:``,required:!0,children:[(0,H.jsx)(`option`,{value:``,disabled:!0,children:`Select gender`}),(0,H.jsx)(`option`,{value:`Female`,children:`Female`}),(0,H.jsx)(`option`,{value:`Male`,children:`Male`}),(0,H.jsx)(`option`,{value:`Prefer not to say`,children:`Prefer not to say`})]})]}),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`Birth Date`}),(0,H.jsx)(`input`,{name:`birthDate`,required:!0,type:`date`})]}),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`Year`}),(0,H.jsxs)(`select`,{name:`year`,defaultValue:``,required:!0,children:[(0,H.jsx)(`option`,{value:``,disabled:!0,children:`Select year`}),(0,H.jsx)(`option`,{value:`1st Year`,children:`1st Year`}),(0,H.jsx)(`option`,{value:`2nd Year`,children:`2nd Year`}),(0,H.jsx)(`option`,{value:`3rd Year`,children:`3rd Year`}),(0,H.jsx)(`option`,{value:`4th Year`,children:`4th Year`}),(0,H.jsx)(`option`,{value:`5th Year`,children:`5th Year`})]})]}),(0,H.jsxs)(`fieldset`,{className:`portal-course-list`,children:[(0,H.jsx)(`legend`,{children:`Course`}),Lr.map(e=>(0,H.jsxs)(`label`,{className:`portal-course-option`,children:[(0,H.jsx)(`input`,{name:`course`,required:!0,type:`radio`,value:e}),(0,H.jsx)(`span`,{children:e})]},e))]})]})]}),(0,H.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-parents-heading`,children:[(0,H.jsx)(`h4`,{id:`portal-parents-heading`,children:`Parents Information`}),(0,H.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,H.jsx)(`p`,{children:`Father Information`}),(0,H.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:Fr.map(e=>(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:e.label}),(0,H.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter father's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]}),(0,H.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,H.jsx)(`p`,{children:`Mother Information`}),(0,H.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:Ir.map(e=>(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:e.label}),(0,H.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter mother's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]})]}),(0,H.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-contact-heading`,children:[(0,H.jsx)(`h4`,{id:`portal-contact-heading`,children:`Address and Contact Information`}),(0,H.jsx)(`div`,{className:`portal-grid`,children:Rr.map(e=>(0,H.jsxs)(`label`,{className:`form-field ${e.className??``}`.trim(),children:[(0,H.jsx)(`span`,{children:e.label}),(0,H.jsx)(`input`,{autoComplete:e.autoComplete,inputMode:e.inputMode,name:e.name,onInput:e.name===`mobileNumber`?Vt:void 0,pattern:e.pattern,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:e.type??`text`})]},e.name))})]}),(0,H.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-documents-heading`,children:[(0,H.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,H.jsx)(`h4`,{id:`portal-documents-heading`,children:`Document Requirements`}),(0,H.jsx)(`p`,{children:`Upload clear PDF copies up to 5MB each. Required and optional documents are labeled below.`})]}),(0,H.jsxs)(`div`,{className:`portal-document-grid`,children:[(0,H.jsxs)(`label`,{className:`portal-document-upload${k.psaFile?` portal-document-upload--selected`:``}`,children:[(0,H.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`psaFile`,onChange:wt,required:!0,type:`file`}),(0,H.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`})}),(0,H.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,H.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,H.jsx)(`strong`,{children:`PSA Birth Certificate`}),(0,H.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,H.jsx)(`span`,{children:k.psaFile?`${k.psaFile.name} (${jr(k.psaFile.size)})`:`Select PSA PDF file`})]})]}),(0,H.jsxs)(`label`,{className:`portal-document-upload${k.schoolIdFile?` portal-document-upload--selected`:``}`,children:[(0,H.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`schoolIdFile`,onChange:wt,required:!0,type:`file`}),(0,H.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`})}),(0,H.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,H.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,H.jsx)(`strong`,{children:`Colored School ID Photocopy`}),(0,H.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,H.jsx)(`span`,{children:k.schoolIdFile?`${k.schoolIdFile.name} (${jr(k.schoolIdFile.size)})`:`Select colored School ID photocopy PDF`})]})]}),(0,H.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${k.pwdIdFile?` portal-document-upload--selected`:``}`,children:[(0,H.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`pwdIdFile`,onChange:wt,type:`file`}),(0,H.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`})}),(0,H.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,H.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,H.jsx)(`strong`,{children:`PWD ID`}),(0,H.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,H.jsx)(`span`,{children:k.pwdIdFile?`${k.pwdIdFile.name} (${jr(k.pwdIdFile.size)})`:`Attach a clear PWD ID PDF, if applicable`})]})]}),(0,H.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${k.fourPsFile?` portal-document-upload--selected`:``}`,children:[(0,H.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`fourPsFile`,onChange:wt,type:`file`}),(0,H.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`})}),(0,H.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,H.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,H.jsx)(`strong`,{children:`4Ps ID`}),(0,H.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,H.jsx)(`span`,{children:k.fourPsFile?`${k.fourPsFile.name} (${jr(k.fourPsFile.size)})`:`Attach a clear 4Ps ID PDF, if applicable`})]})]})]})]})]}),j&&(0,H.jsx)(`div`,{className:`modal-body portal-review`,children:(0,H.jsxs)(`section`,{className:`portal-review-card`,"aria-labelledby":`portal-review-heading`,children:[(0,H.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,H.jsx)(`h4`,{id:`portal-review-heading`,children:`Review Information`}),(0,H.jsx)(`p`,{children:`Please check every detail before final submission.`})]}),(0,H.jsxs)(`div`,{className:`portal-review-grid`,children:[(0,H.jsxs)(`div`,{className:`portal-review-group`,children:[(0,H.jsx)(`h5`,{children:`Student Information`}),(0,H.jsxs)(`dl`,{children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Student ID`}),(0,H.jsx)(`dd`,{children:j.studentId})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Full Name`}),(0,H.jsx)(`dd`,{children:[j.firstName,j.middleName,j.lastName,j.extensionName].filter(Boolean).join(` `)})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Gender`}),(0,H.jsx)(`dd`,{children:j.gender})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Birth Date`}),(0,H.jsx)(`dd`,{children:j.birthDate})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Year`}),(0,H.jsx)(`dd`,{children:j.year})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Course`}),(0,H.jsx)(`dd`,{children:j.course})]})]})]}),(0,H.jsxs)(`div`,{className:`portal-review-group`,children:[(0,H.jsx)(`h5`,{children:`Parents Information`}),(0,H.jsxs)(`dl`,{children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Father`}),(0,H.jsx)(`dd`,{children:[j.fatherFirstName,j.fatherMiddleName,j.fatherLastName].filter(Boolean).join(` `)||`Not provided`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Mother`}),(0,H.jsx)(`dd`,{children:[j.motherFirstName,j.motherMiddleName,j.motherLastName].filter(Boolean).join(` `)||`Not provided`})]})]})]}),(0,H.jsxs)(`div`,{className:`portal-review-group`,children:[(0,H.jsx)(`h5`,{children:`Address and Contact`}),(0,H.jsxs)(`dl`,{children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Address`}),(0,H.jsx)(`dd`,{children:j.address})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Zip Code`}),(0,H.jsx)(`dd`,{children:j.zipCode||`Not provided`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`PWD ID`}),(0,H.jsx)(`dd`,{children:j.pwdId||`Not provided`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Mobile No.`}),(0,H.jsx)(`dd`,{children:j.mobileNumber})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`Email Address`}),(0,H.jsx)(`dd`,{children:j.emailAddress})]})]})]}),(0,H.jsxs)(`div`,{className:`portal-review-group`,children:[(0,H.jsx)(`h5`,{children:`Documents`}),(0,H.jsxs)(`dl`,{children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`PSA Birth Certificate`}),(0,H.jsxs)(`dd`,{children:[j.psaFile.name,` (`,jr(j.psaFile.size),`)`]})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`School ID Photocopy`}),(0,H.jsxs)(`dd`,{children:[j.schoolIdFile.name,` (`,jr(j.schoolIdFile.size),`)`]})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`PWD ID (Optional)`}),(0,H.jsx)(`dd`,{children:j.pwdIdFile?`${j.pwdIdFile.name} (${jr(j.pwdIdFile.size)})`:`Not provided`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:`4Ps ID (Optional)`}),(0,H.jsx)(`dd`,{children:j.fourPsFile?`${j.fourPsFile.name} (${jr(j.fourPsFile.size)})`:`Not provided`})]})]})]})]})]})}),(E||te)&&(0,H.jsxs)(`div`,{className:`portal-message-row`,children:[E&&(0,H.jsx)(`p`,{className:`form-error`,children:E}),te&&(0,H.jsx)(`p`,{className:`form-success`,children:te})]}),(0,H.jsx)(`div`,{className:`modal-actions portal-actions`,children:j?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`button`,{className:`button button--secondary`,disabled:F,onClick:Et,type:`button`,children:`Edit Information`}),(0,H.jsx)(`button`,{className:`button`,disabled:F,onClick:Dt,type:`button`,children:`Submit Information`})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`button`,{className:`button button--secondary`,disabled:F,onClick:St,type:`button`,children:`Cancel`}),(0,H.jsx)(`button`,{className:`button`,disabled:F,type:`submit`,children:`Review Information`})]})})]})]}),_&&(0,H.jsxs)(`div`,{"aria-labelledby":`portal-privacy-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Return to application review`,className:`modal-backdrop-button`,disabled:F,onClick:()=>v(!1),type:`button`}),(0,H.jsxs)(`section`,{className:`modal-card portal-privacy-card`,children:[(0,H.jsxs)(`div`,{className:`success-modal-body`,children:[(0,H.jsx)(`div`,{className:`portal-privacy-icon`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`privacy_tip`})}),(0,H.jsx)(`p`,{className:`modal-kicker`,children:`Data Privacy Notice`}),(0,H.jsx)(`h3`,{id:`portal-privacy-title`,children:`Your Privacy Matters`}),(0,H.jsx)(`p`,{children:`I understand that the personal information I provide will be collected, stored, and processed by the Scholarship Office solely for scholarship administration, verification, monitoring, and related educational purposes. I am informed that my data will be kept confidential and protected in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173), and will only be accessed by authorized personnel when necessary.`})]}),(0,H.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,H.jsx)(`button`,{className:`button`,disabled:F,onClick:Ot,type:`button`,children:F?`Submitting...`:`I UNDERSTAND`})})]})]}),y&&(0,H.jsxs)(`div`,{"aria-labelledby":`portal-submission-success-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close application success modal`,className:`modal-backdrop-button`,onClick:()=>b(!1),type:`button`}),(0,H.jsxs)(`section`,{className:`modal-card modal-card--success`,children:[(0,H.jsxs)(`div`,{className:`success-modal-body`,children:[(0,H.jsx)(`div`,{className:`success-icon`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,H.jsx)(`h3`,{id:`portal-submission-success-title`,children:`Application Submitted Successfully`}),(0,H.jsxs)(`p`,{children:[`Please wait for the UNIFAST results. You will be notified through the Facebook page, `,(0,H.jsx)(`strong`,{children:`Iba College of Mindanao Inc. - Scholarship Office`}),`.`]})]}),(0,H.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,H.jsx)(`button`,{className:`button`,onClick:()=>b(!1),type:`button`,children:`Done`})})]})]}),O&&(0,H.jsxs)(`div`,{"aria-labelledby":`portal-status-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close portal status modal`,className:`modal-backdrop-button`,onClick:()=>re(``),type:`button`}),(0,H.jsxs)(`section`,{className:`modal-card portal-status-card`,children:[(0,H.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,H.jsxs)(`div`,{className:`modal-title-row`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h3`,{id:`portal-status-title`,children:`Portal Status`}),(0,H.jsx)(`p`,{children:O})]}),(0,H.jsx)(`button`,{"aria-label":`Close portal status`,className:`icon-button modal-close`,onClick:()=>re(``),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,H.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,H.jsx)(`button`,{className:`button`,onClick:()=>re(``),type:`button`,children:`OK`})})]})]}),a&&(0,H.jsxs)(`div`,{"aria-labelledby":`quick-actions-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close quick actions modal`,className:`modal-backdrop-button`,onClick:bt,type:`button`}),(0,H.jsxs)(`form`,{className:`modal-card modal-card--wide auth-modal-card`,onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=String(n.get(`email`)||``).trim().toLowerCase(),i=String(n.get(`studentId`)||``).trim(),a=String(n.get(`lastName`)||``).trim(),s=String(n.get(`firstName`)||``).trim(),c=String(n.get(`middleInitial`)||``).trim(),l=Er(String(n.get(`question`)||``)).trim();w(``),T(``),P(!0);try{if(!Sr(r))throw Error(`Please enter a valid email account.`);if(!Cr(i))throw Error(`Please enter a valid Student ID.`);if(!a||!s)throw Error(`Last name and first name are required.`);if(c&&!/^[A-Za-z. -]{1,10}$/.test(c))throw Error(`Please enter a valid middle initial.`);if(!l)throw Error(`Please enter your question or request.`);if(l.length>500)throw Error(`Your question must be 500 characters or fewer.`);await tt({email:r,studentId:i,lastName:a,firstName:s,middleInitial:c,question:l,source:vr.quickActions.source,status:vr.quickActions.defaultStatus}),t.reset(),o(!1),T(`Your request has been submitted.`)}catch(e){w(e instanceof Error?e.message:`Unable to submit your request right now.`)}finally{P(!1)}},children:[(0,H.jsxs)(`div`,{className:`modal-header`,children:[(0,H.jsxs)(`div`,{className:`modal-title-row`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`modal-kicker`,children:`Quick Actions`}),(0,H.jsx)(`h3`,{id:`quick-actions-title`,children:`Submit a Request`})]}),(0,H.jsx)(`button`,{"aria-label":`Close modal`,className:`icon-button modal-close`,onClick:bt,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,H.jsx)(`p`,{children:`Send a question or request to the scholarship office for review.`})]}),(0,H.jsxs)(`div`,{className:`modal-body quick-action-form-grid`,children:[(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`Student ID`}),(0,H.jsx)(`input`,{autoComplete:`off`,name:`studentId`,placeholder:`Enter Student ID`,required:!0})]}),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`Email account`}),(0,H.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`email`,placeholder:vr.quickActions.fields.email.placeholder,required:!0,type:`email`})]}),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`Last name`}),(0,H.jsx)(`input`,{autoComplete:`family-name`,name:`lastName`,placeholder:`Enter last name`,required:!0})]}),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`First name`}),(0,H.jsx)(`input`,{autoComplete:`given-name`,name:`firstName`,placeholder:`Enter first name`,required:!0})]}),(0,H.jsxs)(`label`,{className:`form-field quick-action-mi-field`,children:[(0,H.jsx)(`span`,{children:`MI`}),(0,H.jsx)(`input`,{autoComplete:`additional-name`,maxLength:10,name:`middleInitial`,placeholder:`M`})]}),(0,H.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,H.jsx)(`span`,{children:`Question`}),(0,H.jsx)(`textarea`,{"aria-describedby":`quick-action-question-help`,maxLength:500,name:`question`,onInput:e=>{e.currentTarget.value=Er(e.currentTarget.value)},placeholder:vr.quickActions.fields.question.placeholder,required:!0,rows:4}),(0,H.jsx)(`small`,{className:`form-field__help`,id:`quick-action-question-help`,children:`One paragraph only, up to 500 characters.`})]}),C&&(0,H.jsx)(`p`,{className:`form-error auth-full-field`,children:C})]}),(0,H.jsxs)(`div`,{className:`modal-actions`,children:[(0,H.jsx)(`button`,{className:`button button--secondary`,disabled:N,onClick:bt,type:`button`,children:`Cancel`}),(0,H.jsx)(`button`,{className:`button`,disabled:N,type:`submit`,children:N?`Submitting...`:`Submit`})]})]})]}),l&&(0,H.jsxs)(`div`,{"aria-labelledby":`admin-login-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close admin login modal`,className:`modal-backdrop-button`,onClick:At,type:`button`}),(0,H.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card`,onSubmit:async t=>{t.preventDefault();let n=me.trim(),r=ge,i=n.includes(`@`),a=i?n.toLowerCase():``,o=i?``:n;if(S(``),!n){S(`Enter your official registered email address or School ID.`);return}if(i&&!Sr(a)){S(`Please enter a valid registered email address.`);return}if(!i&&!Cr(o)){S(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(!r){S(`Password is required.`);return}if(!Mr(r)){S(`Password must be at least 6 characters.`);return}let s={password:r,...i?{email:a}:{schoolId:o}};M(!0);try{let t=await Nr(nt(s),15e3,`Login is taking too long. Please check your internet connection is running, then try again.`);if(!t.success){S(t.message||`Invalid admin credentials.`);return}u(!1),typeof e==`function`&&e(t.admin)}catch(e){S(e instanceof Error?e.message:`Unable to login right now.`)}finally{M(!1)}},children:[(0,H.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,H.jsx)(`div`,{className:`admin-login-brand`,children:(0,H.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,H.jsx)(`button`,{"aria-label":`Close admin login`,className:`icon-button modal-close admin-login-close`,onClick:At,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,H.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,H.jsx)(`h3`,{id:`admin-login-title`,children:`Sign in`})]}),(0,H.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,H.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,H.jsx)(`span`,{children:`Official Registered Email or School ID`}),(0,H.jsx)(`input`,{autoCapitalize:`none`,autoComplete:`username`,maxLength:254,name:`adminIdentifier`,placeholder:`Enter your official registered email or School ID`,required:!0,spellCheck:!1,type:`text`,value:me,onChange:e=>he(e.target.value)})]}),(0,H.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,H.jsx)(`span`,{children:`Password`}),(0,H.jsx)(`input`,{autoComplete:`current-password`,name:`adminPassword`,placeholder:`Enter password`,required:!0,type:`password`,minLength:6,value:ge,onChange:e=>_e(e.target.value)})]}),(0,H.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`info`}),(0,H.jsx)(`p`,{children:`Enter either your official registered email address or your School ID. Your password is still required.`})]}),(0,H.jsxs)(`div`,{className:`auth-link-row auth-full-field`,children:[(0,H.jsx)(`button`,{className:`auth-text-button`,disabled:ae,onClick:Ft,type:`button`,children:`Forgot Password?`}),(0,H.jsx)(`button`,{className:`auth-text-button auth-text-button--strong`,disabled:ae,onClick:jt,type:`button`,children:`Create Account`})]}),x&&(0,H.jsx)(`p`,{className:`form-error auth-full-field`,children:x})]}),(0,H.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,H.jsx)(`button`,{className:`button button--secondary`,disabled:ae,onClick:At,type:`button`,children:`Cancel`}),(0,H.jsx)(`button`,{className:`button`,disabled:ae,type:`submit`,children:ae?`Logging in...`:`Login`})]})]})]}),p&&(0,H.jsxs)(`div`,{"aria-labelledby":`sign-up-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close sign up modal`,className:`modal-backdrop-button`,onClick:Mt,type:`button`}),(0,H.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=ve.trim().toLowerCase(),n=be.trim(),r=wr(Se),i=we,a=Ee;if(L(``),Ae(``),!t){L(`Email account is required.`);return}if(!Sr(t)){L(`Please enter a valid email account.`);return}if(!n){L(`School ID is required.`);return}if(!Cr(n)){L(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(!r){L(`Phone number is required.`);return}if(!Dr(r)){L(`Please enter a valid phone number. Example: 09123456789 or +639123456789.`);return}if(!i){L(`Password is required.`);return}if(!Mr(i)){L(`Password must be at least 6 characters.`);return}if(!a){L(`Confirm password is required.`);return}if(i!==a){L(`Password and confirm password do not match.`);return}ce(!0);try{let e=await rt({email:t,schoolId:n,phoneNumber:r,password:i});if(!e.success){if(e.reason===`schoolIdNotFound`){m(!1),g(!0);return}L(e.message||`Unable to register account.`);return}m(!1),Me(e.admin??{email:t,schoolId:n,role:`student`}),Ae(`Your account has been registered successfully.`),he(t||n),_e(``),Ce(``),Te(``),De(``)}catch(e){L(e instanceof Error?e.message:`Unable to register account.`)}finally{ce(!1)}},children:[(0,H.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,H.jsx)(`div`,{className:`admin-login-brand`,children:(0,H.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,H.jsx)(`button`,{"aria-label":`Close sign up`,className:`icon-button modal-close admin-login-close`,onClick:Mt,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,H.jsx)(`p`,{className:`modal-kicker`,children:`Account Registration`}),(0,H.jsx)(`h3`,{id:`sign-up-title`,children:`Create Account`}),(0,H.jsx)(`p`,{children:`Registration is only available for verified School IDs listed in the IBACMI Scholarship Office records.`})]}),(0,H.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`Email account`}),(0,H.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`signUpEmail`,placeholder:`Enter email account`,required:!0,type:`email`,value:ve,onChange:e=>ye(e.target.value)})]}),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`School ID`}),(0,H.jsx)(`input`,{autoComplete:`off`,name:`signUpSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,value:be,onChange:e=>xe(e.target.value)})]}),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`Phone Number`}),(0,H.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`signUpPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`e.g. 09123456789`,required:!0,type:`tel`,value:Se,onChange:e=>Ce(Tr(e.target.value))})]}),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`Password`}),(0,H.jsx)(`input`,{autoComplete:`new-password`,name:`signUpPassword`,placeholder:`Create password`,required:!0,type:`password`,minLength:6,value:we,onChange:e=>Te(e.target.value)})]}),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`Confirm Password`}),(0,H.jsx)(`input`,{autoComplete:`new-password`,name:`signUpConfirmPassword`,placeholder:`Confirm password`,required:!0,type:`password`,minLength:6,value:Ee,onChange:e=>De(e.target.value)})]}),(0,H.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`verified_user`}),(0,H.jsx)(`p`,{children:`Your School ID will be checked against the official grantee information record before account creation.`})]}),Oe&&(0,H.jsx)(`p`,{className:`form-error auth-full-field`,children:Oe}),ke&&(0,H.jsx)(`p`,{className:`form-success auth-full-field`,children:ke})]}),(0,H.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,H.jsx)(`button`,{className:`button button--secondary`,disabled:se,onClick:Nt,type:`button`,children:`Back to Login`}),(0,H.jsx)(`button`,{className:`button`,disabled:se,type:`submit`,children:se?`Registering...`:`Register Now`})]})]})]}),h&&(0,H.jsxs)(`div`,{"aria-labelledby":`sign-up-denied-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close sign up denied modal`,className:`modal-backdrop-button`,onClick:Pt,type:`button`}),(0,H.jsxs)(`section`,{className:`modal-card modal-card--success auth-modal-card auth-denied-card`,children:[(0,H.jsxs)(`div`,{className:`success-modal-body auth-denied-body`,children:[(0,H.jsx)(`div`,{className:`auth-denied-icon`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`error`})}),(0,H.jsx)(`h3`,{id:`sign-up-denied-title`,children:`Account Registration Not Approved`}),(0,H.jsx)(`p`,{children:`Sorry, you cannot proceed. Your School ID was not found in the official records. Please contact the IBACMI | Scholarship Office for assistance.`})]}),(0,H.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,H.jsx)(`button`,{className:`button`,onClick:Pt,type:`button`,children:`Back to Sign Up`})})]})]}),ke&&(0,H.jsxs)(`div`,{"aria-labelledby":`sign-up-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Continue to student page`,className:`modal-backdrop-button`,onClick:z,type:`button`}),(0,H.jsxs)(`section`,{className:`modal-card modal-card--success auth-modal-card`,children:[(0,H.jsxs)(`div`,{className:`success-modal-body`,children:[(0,H.jsx)(`div`,{className:`success-icon`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,H.jsx)(`h3`,{id:`sign-up-success-title`,children:`Successfully Registered`}),(0,H.jsxs)(`p`,{children:[ke,` You can now continue to the student information page.`]})]}),(0,H.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,H.jsx)(`button`,{className:`button`,onClick:z,type:`button`,children:`Continue`})})]})]}),d&&(0,H.jsxs)(`div`,{"aria-labelledby":`forgot-password-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close forgot password modal`,className:`modal-backdrop-button`,onClick:It,type:`button`}),(0,H.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=Kt(),n=Ne.trim().toLowerCase(),r=Fe.trim(),i=wr(Le),a=ze.trim(),o=Ve,s=Ue;if(R(``),qe(``),t){R(t);return}if(!Je){R(`Please request an OTP first.`);return}if(!a){R(`OTP is required.`);return}if(!/^\d{4,8}$/.test(a)){R(`OTP must be 4 to 8 digits.`);return}if(!o){R(`New password is required.`);return}if(!Mr(o)){R(`New password must be at least 6 characters.`);return}if(!s){R(`Confirm password is required.`);return}if(o!==s){R(`New password and confirm password do not match.`);return}$e(!0);try{let e=await at({email:n||void 0,schoolId:r||void 0,phoneNumber:i,otp:a,newPassword:o});if(!e.success){R(e.message||`Unable to change password.`);return}qe(e.message||`Password changed successfully.`),Be(``),He(``),We(``),Ye(!1),he(n||r),_e(``)}catch(e){R(e instanceof Error?e.message:`Unable to change password right now.`)}finally{$e(!1)}},children:[(0,H.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,H.jsx)(`div`,{className:`admin-login-brand`,children:(0,H.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,H.jsx)(`button`,{"aria-label":`Close forgot password`,className:`icon-button modal-close admin-login-close`,onClick:It,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,H.jsx)(`p`,{className:`modal-kicker`,children:`Account Recovery`}),(0,H.jsx)(`h3`,{id:`forgot-password-title`,children:`Forgot Password`}),(0,H.jsx)(`p`,{children:`Verify your email or School ID with your registered phone number before changing your password.`})]}),(0,H.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`Email address`}),(0,H.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`forgotEmail`,placeholder:`Enter valid email address`,required:!Fe.trim(),type:`email`,disabled:Fe.trim().length>0||Xe||Qe,value:Ne,onChange:Ut})]}),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`School ID`}),(0,H.jsx)(`input`,{autoComplete:`off`,name:`forgotSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,title:`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`,required:!Ne.trim(),disabled:Ne.trim().length>0||Xe||Qe,value:Fe,onChange:Wt})]}),(0,H.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,H.jsx)(`span`,{children:`Phone number`}),(0,H.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`forgotPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`09123456789 or +639123456789`,required:!0,type:`tel`,disabled:Xe||Qe,value:Le,onChange:Gt})]}),(0,H.jsx)(`button`,{className:`button button--secondary auth-full-field`,disabled:Xe||Qe,onClick:async()=>{let e=Kt();if(R(``),qe(``),e){R(e);return}let t=Ne.trim().toLowerCase(),n=Fe.trim(),r=wr(Le);Ze(!0);try{let e=await it({email:t||void 0,schoolId:n||void 0,phoneNumber:r});if(!e.success){R(e.message||`Unable to send OTP.`);return}Ye(!0),qe(e.message||`OTP generated successfully. Enter it below to change your password.`)}catch(e){R(e instanceof Error?e.message:`Unable to request OTP right now.`)}finally{Ze(!1)}},type:`button`,children:Xe?`Sending OTP...`:Je?`Resend OTP`:`Send OTP`}),Je&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`OTP Code`}),(0,H.jsx)(`input`,{autoComplete:`one-time-code`,inputMode:`numeric`,name:`forgotOtp`,placeholder:`Enter OTP`,required:!0,type:`text`,maxLength:8,value:ze,onChange:e=>Be(e.target.value.replace(/\D/g,``))})]}),(0,H.jsxs)(`label`,{className:`form-field`,children:[(0,H.jsx)(`span`,{children:`New Password`}),(0,H.jsx)(`input`,{autoComplete:`new-password`,name:`forgotNewPassword`,placeholder:`Enter new password`,required:!0,type:`password`,minLength:6,value:Ve,onChange:e=>He(e.target.value)})]}),(0,H.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,H.jsx)(`span`,{children:`Confirm New Password`}),(0,H.jsx)(`input`,{autoComplete:`new-password`,name:`forgotConfirmPassword`,placeholder:`Confirm new password`,required:!0,type:`password`,minLength:6,value:Ue,onChange:e=>We(e.target.value)})]})]}),Ge&&(0,H.jsx)(`p`,{className:`form-error auth-full-field`,children:Ge}),Ke&&(0,H.jsx)(`p`,{className:`form-success auth-full-field`,children:Ke})]}),(0,H.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,H.jsx)(`button`,{className:`button button--secondary`,disabled:Xe||Qe,onClick:It,type:`button`,children:`Cancel`}),(0,H.jsx)(`button`,{className:`button`,disabled:!Je||Xe||Qe,type:`submit`,children:Qe?`Changing Password...`:`Change Password`})]})]})]}),ee&&(0,H.jsxs)(`div`,{"aria-labelledby":`quick-action-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close success modal`,className:`modal-backdrop-button`,onClick:()=>T(``),type:`button`}),(0,H.jsxs)(`div`,{className:`modal-card modal-card--success`,children:[(0,H.jsxs)(`div`,{className:`success-modal-body`,children:[(0,H.jsx)(`div`,{className:`success-icon`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,H.jsx)(`h3`,{id:`quick-action-success-title`,children:`Submitted Successfully`}),(0,H.jsxs)(`p`,{children:[ee,` The scholarship office can now review your request. Please always check your valid email. The TECH Scholarship Office will notify you when your account is updated.`]})]}),(0,H.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,H.jsx)(`button`,{className:`button`,onClick:()=>T(``),type:`button`,children:`Done`})})]})]}),(0,H.jsx)(`div`,{className:`scroll-progress`,style:{"--scroll-progress":r}})]})}var Br=`
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
`,Vr=`/IBACMI-Scholarship-Office/assets/samp-wIlKUzMl.jpg`,Hr=`modulepreload`,Ur=function(e){return`/IBACMI-Scholarship-Office/`+e},Wr={},Gr=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Ur(t,n),t in Wr)return;Wr[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Hr,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Kr=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``),qr={tesAwardNo:``,studentId:``,batchNo:``,status:``,semester:``,schoolYear:``};function Jr(e){return[...new Set(e.filter(Boolean))]}function Yr(e){let t=String(e??``).match(/\d{4}/);return t?Number(t[0]):0}function Xr(){let e=new Date,t=e.getFullYear(),n=e.getMonth()>=5?t:t-1;return`${n}-${n+1}`}function Zr(e){return e.replace(/[\s-]/g,``).trim()}function Qr(e){return e.replace(/[^\d+]/g,``).replace(/(?!^)\+/g,``)}function $r(e){let t=Zr(e);return/^09\d{9}$/.test(t)||/^\+639\d{9}$/.test(t)}function ei(e){let t=Xr();return e.find(e=>e.schoolYear===t)||[...e].sort((e,t)=>{let n=Yr(t.schoolYear)-Yr(e.schoolYear);return n===0?(t.uploadedAt??0)-(e.uploadedAt??0):n})[0]}function ti({url:e}){let t=(0,V.useRef)(null),[n,r]=(0,V.useState)(0),[i,a]=(0,V.useState)(``),[o,s]=(0,V.useState)(0);return(0,V.useEffect)(()=>{let e=t.current;if(!e)return;let n=()=>r(Math.floor(e.clientWidth));if(n(),typeof ResizeObserver>`u`)return window.addEventListener(`resize`,n),()=>window.removeEventListener(`resize`,n);let i=new ResizeObserver(n);return i.observe(e),()=>i.disconnect()},[]),(0,V.useEffect)(()=>{let r=t.current;if(!r||!e||!n)return;let i=!1,o,s;return(async()=>{a(``),r.replaceChildren(),r.setAttribute(`aria-busy`,`true`);try{let[{getDocument:t,GlobalWorkerOptions:a},{default:c}]=await Promise.all([Gr(()=>import(`./pdf-D1xrgD5T.js`),[]),Gr(()=>import(`./pdf.worker.min-D7EoebCV.js`),[])]);if(i)return;a.workerSrc=c;let l=await fetch(e,{mode:`cors`});if(!l.ok)throw Error(`Unable to download PDF (${l.status}).`);let u=new Uint8Array(await l.arrayBuffer());if(i)return;if(!u.length)throw Error(`The uploaded PDF is empty.`);o=t({data:u,disableAutoFetch:!0,disableRange:!0,disableStream:!0});let d=await o.promise;for(let e=1;e<=d.numPages;e+=1){if(i)return;let t=await d.getPage(e),a=n/t.getViewport({scale:1}).width,o=t.getViewport({scale:a}),c=Math.min(window.devicePixelRatio||1,2),l=document.createElement(`canvas`);l.className=`student-id-preview__page`,l.setAttribute(`aria-label`,`Uploaded School ID page ${e}`),l.width=Math.floor(o.width*c),l.height=Math.floor(o.height*c),l.style.width=`${Math.floor(o.width)}px`,l.style.height=`${Math.floor(o.height)}px`,r.appendChild(l),s=t.render({canvas:l,transform:c===1?null:[c,0,0,c,0,0],viewport:o}),await s.promise}}catch(e){!i&&e?.name!==`RenderingCancelledException`&&(console.error(`Unable to render uploaded School ID PDF:`,e),r.replaceChildren(),a(`Preview unavailable, but your file was uploaded successfully.`))}finally{i||r.removeAttribute(`aria-busy`)}})(),()=>{i=!0,s?.cancel(),o?.destroy()}},[n,o,e]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{className:`student-id-preview__pages${i?` student-id-preview__pages--error`:``}`,ref:t,children:(0,H.jsx)(`span`,{className:`student-id-preview__loading`,children:`Loading PDF preview...`})}),i&&(0,H.jsxs)(`div`,{className:`student-id-preview__error`,children:[(0,H.jsx)(`span`,{className:`student-id-preview__status-icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,H.jsxs)(`div`,{className:`student-id-preview__error-copy`,children:[(0,H.jsx)(`strong`,{children:`School ID file is uploaded`}),(0,H.jsx)(`span`,{children:i})]}),(0,H.jsxs)(`div`,{className:`student-id-preview__error-actions`,children:[(0,H.jsx)(`a`,{href:e,rel:`noreferrer`,target:`_blank`,children:`Open file`}),(0,H.jsx)(`button`,{onClick:()=>s(e=>e+1),type:`button`,children:`Retry preview`})]})]})]})}function ni({studentSession:e,onLogout:t,onStudentSessionUpdate:n}){let r=String(e?.schoolId??``).trim(),i=dn(Mn.allinfo.listByStudentId,r?{studentId:r}:`skip`),a=fn(Mn.allinfo.saveStudentIdUploads),o=fn(Mn.adminAuth.updateStudentPhoneNumber),[s,c]=(0,V.useState)(null),[l,u]=(0,V.useState)(``),[d,f]=(0,V.useState)(``),[p,m]=(0,V.useState)(!1),h=(0,V.useRef)(null),[g,_]=(0,V.useState)(e?.phoneNumber??``),[v,y]=(0,V.useState)(``),[b,x]=(0,V.useState)(``),[S,C]=(0,V.useState)(!1),w=fn(Mn.adminAuth.updateStudentCurrentAddress),[ee,T]=(0,V.useState)(e?.currentAddress??``),[E,D]=(0,V.useState)(``),[te,ne]=(0,V.useState)(``),[O,re]=(0,V.useState)(!1),k=r.toLowerCase(),A=e?.phoneNumber??``,j=Zr(g)!==Zr(A),ie=e?.currentAddress??``,ae=ee.trim()!==ie.trim(),M=(0,V.useMemo)(()=>!k||!i?null:ei(i.filter(e=>String(e.studentId??``).trim().toLowerCase()===k))??null,[i,k]),N=M?{tesAwardNo:M.tesAwardNumber??``,studentId:M.studentId??``,lastName:M.lastName??``,firstName:M.firstName??``,middleInitial:M.middleInitial??``,batchNo:M.batchId??``,status:M.status??``,semester:M.semester??``,schoolYear:M.schoolYear??``}:qr,P=i===void 0,F=!!k,oe=!P&&F&&!M,se=Jr([N.status,`Validated`,`Pending`,`Rejected`]),ce=Jr([N.semester,`1st Semester`,`2nd Semester`]),le=Jr([N.schoolYear,`2023-2024`,`2024-2025`]),ue=!!(M?.frontIdUrl||M?.frontIdStorageId),I=M?.frontIdUrl??``;(0,V.useEffect)(()=>{if(!d)return;let e=e=>{e.key===`Escape`&&f(``)},t=document.body.style.overflow;return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),h.current?.focus(),()=>{document.body.style.overflow=t,window.removeEventListener(`keydown`,e)}},[d]);let de=()=>{typeof t==`function`&&t()},fe=e=>{_(Qr(e.target.value)),y(``),x(``)},pe=e=>{T(e.target.value),D(``),ne(``)},me=async()=>{let t=Zr(g);if(y(``),x(``),!r){y(`Please sign in before updating your phone number.`);return}if(!t){y(`Phone number is required.`);return}if(!$r(t)){y(`Please enter a valid phone number. Example: 09123456789 or +639123456789.`);return}if(!j){x(`Phone number is already up to date.`);return}C(!0);try{let r=await o({schoolId:e.schoolId,phoneNumber:t});if(!r.success){y(r.message||`Unable to update phone number.`);return}_(r.admin?.phoneNumber??t),x(r.message||`Phone number updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){y(e instanceof Error?e.message:`Unable to update phone number.`)}finally{C(!1)}},he=async()=>{let t=ee.trim();if(D(``),ne(``),!r){D(`Please sign in before updating your current address.`);return}if(!t){D(`Current address is required.`);return}if(t.length<8){D(`Current address must be at least 8 characters.`);return}if(!ae){ne(`Current address is already up to date.`);return}re(!0);try{let r=await w({schoolId:e.schoolId,currentAddress:t});if(!r.success){D(r.message||`Unable to update current address.`);return}T(r.admin?.currentAddress??t),ne(r.message||`Current address updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){D(e instanceof Error?e.message:`Unable to update current address.`)}finally{re(!1)}},ge=e=>t=>{let n=t.target.files?.[0]??null;if(u(``),f(``),n&&n.type!==`application/pdf`&&!/\.pdf$/i.test(n.name)){u(`Only PDF files are allowed.`),t.target.value=``,e(null);return}if(n&&n.size>5*1024*1024){u(`Each file must be 5MB or smaller.`),t.target.value=``,e(null);return}e(n)},_e=async e=>{let t=[M.lastName,M.firstName,M.middleInitial].filter(Boolean).join(` `),n=new URLSearchParams({batchNo:M.batchId||`no-batch`,documentType:`School-ID`,fileName:e.name,fullName:t,schoolYear:M.schoolYear||`unknown-school-year`,studentId:M.studentId}),r;try{r=await fetch(`${Kr}/google-drive/student-upload?${n.toString()}`,{method:`POST`,headers:{"Content-Type":e.type||`application/pdf`},body:e})}catch{throw Error(`Unable to connect to the PDF upload service. Deploy the Convex HTTP functions and check VITE_CONVEX_URL or VITE_CONVEX_SITE_URL.`)}if(!r.ok){let t=await r.json().catch(()=>null);throw Error(t?.message||`Unable to upload ${e.name} to Google Drive.`)}let{fileUrl:i}=await r.json();if(!i)throw Error(`Google Drive did not return a file link for ${e.name}.`);return i};return(0,H.jsxs)(`div`,{className:`student-page`,children:[(0,H.jsxs)(`header`,{className:`student-topbar`,children:[(0,H.jsx)(`button`,{"aria-label":`Log out and return to landing page`,className:`student-icon-button`,onClick:de,type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`arrow_back`})}),(0,H.jsx)(`h1`,{children:`Student Information`})]}),(0,H.jsxs)(`main`,{className:`student-main`,children:[(0,H.jsxs)(`section`,{className:`student-hero`,"aria-labelledby":`student-title`,children:[(0,H.jsx)(`div`,{className:`student-badge`,children:`Academic Year Update`}),(0,H.jsx)(`h2`,{id:`student-title`,children:`Unifast Portal`}),(0,H.jsx)(`p`,{children:`Please ensure all details match your official documents for successful validation.`})]}),!F&&(0,H.jsx)(`div`,{className:`student-state-box`,children:`Please sign in with a student account to view your grantee information.`}),P&&(0,H.jsx)(`div`,{className:`student-state-box`,children:`Loading your grantee information...`}),oe&&(0,H.jsxs)(`div`,{className:`student-state-box student-state-box--warning`,children:[`No allinfo record was found for Student ID `,e?.schoolId,`.`]}),(0,H.jsxs)(`form`,{className:`student-form`,id:`student-information-form`,children:[(0,H.jsxs)(`div`,{className:`student-field`,children:[(0,H.jsx)(`label`,{htmlFor:`tes-award-no`,children:`TES Award No.`}),(0,H.jsx)(`input`,{id:`tes-award-no`,placeholder:`e.g. TES-2024-XXXX`,readOnly:!0,type:`text`,value:N.tesAwardNo})]}),(0,H.jsxs)(`div`,{className:`student-field`,children:[(0,H.jsx)(`label`,{htmlFor:`student-id`,children:`Student ID`}),(0,H.jsx)(`input`,{id:`student-id`,placeholder:`Enter your University ID`,readOnly:!0,type:`text`,value:N.studentId})]}),(0,H.jsxs)(`div`,{className:`student-field student-field--with-action`,children:[(0,H.jsx)(`label`,{htmlFor:`phone-number`,children:`Phone No.`}),(0,H.jsxs)(`div`,{className:`student-inline-control`,children:[(0,H.jsx)(`input`,{id:`phone-number`,inputMode:`tel`,pattern:`\\+?[0-9]*`,placeholder:`09123456789 or +639123456789`,type:`tel`,value:g,onChange:fe}),(0,H.jsx)(`button`,{className:`student-inline-button`,disabled:!F||!j||S,onClick:me,type:`button`,children:S?`Saving...`:`Save`})]}),v&&(0,H.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:v}),b&&(0,H.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:b})]}),(0,H.jsxs)(`div`,{className:`student-field student-field--with-action student-field--full`,children:[(0,H.jsx)(`label`,{htmlFor:`current-address`,children:`Current Address`}),(0,H.jsx)(`textarea`,{id:`current-address`,placeholder:`Enter your current address`,rows:3,value:ee,onChange:pe}),(0,H.jsx)(`button`,{className:`student-inline-button student-inline-button--wide`,disabled:!F||!ae||O,onClick:he,type:`button`,children:O?`Saving Address...`:`Save Current Address`}),E&&(0,H.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:E}),te&&(0,H.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:te})]}),(0,H.jsxs)(`div`,{className:`student-field`,children:[(0,H.jsx)(`label`,{htmlFor:`last-name`,children:`Last Name`}),(0,H.jsx)(`input`,{id:`last-name`,placeholder:`Last Name`,readOnly:!0,type:`text`,value:N.lastName})]}),(0,H.jsxs)(`div`,{className:`student-field`,children:[(0,H.jsx)(`label`,{htmlFor:`first-name`,children:`First Name`}),(0,H.jsx)(`input`,{id:`first-name`,placeholder:`First Name`,readOnly:!0,type:`text`,value:N.firstName})]}),(0,H.jsxs)(`div`,{className:`student-field`,children:[(0,H.jsx)(`label`,{htmlFor:`middle-initial`,children:`MI.`}),(0,H.jsx)(`input`,{id:`middle-initial`,placeholder:`MI.`,readOnly:!0,type:`text`,value:N.middleInitial})]}),(0,H.jsxs)(`div`,{className:`student-field`,children:[(0,H.jsx)(`label`,{htmlFor:`batch-no`,children:`Batch No.`}),(0,H.jsx)(`input`,{id:`batch-no`,placeholder:`e.g. Batch 7`,readOnly:!0,type:`text`,value:N.batchNo})]}),(0,H.jsxs)(`div`,{className:`student-select-grid`,children:[(0,H.jsxs)(`div`,{className:`student-field`,children:[(0,H.jsx)(`label`,{htmlFor:`status`,children:`Status`}),(0,H.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,H.jsxs)(`select`,{disabled:!0,id:`status`,value:N.status,children:[(0,H.jsx)(`option`,{disabled:!0,value:``,children:`Select Status`}),se.map(e=>(0,H.jsx)(`option`,{children:e},e))]}),(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]}),(0,H.jsxs)(`div`,{className:`student-field`,children:[(0,H.jsx)(`label`,{htmlFor:`semester`,children:`Semester`}),(0,H.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,H.jsxs)(`select`,{disabled:!0,id:`semester`,value:N.semester,children:[(0,H.jsx)(`option`,{disabled:!0,value:``,children:`Select Semester`}),ce.map(e=>(0,H.jsx)(`option`,{children:e},e))]}),(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]}),(0,H.jsxs)(`div`,{className:`student-field`,children:[(0,H.jsx)(`label`,{htmlFor:`school-year`,children:`School Year`}),(0,H.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,H.jsxs)(`select`,{disabled:!0,id:`school-year`,value:N.schoolYear,children:[(0,H.jsx)(`option`,{disabled:!0,value:``,children:`Select School Year`}),le.map(e=>(0,H.jsx)(`option`,{children:e},e))]}),(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]})]}),(0,H.jsxs)(`section`,{className:`student-upload-section`,"aria-labelledby":`student-upload-title`,children:[(0,H.jsxs)(`div`,{className:`student-upload-copy`,children:[(0,H.jsx)(`h3`,{id:`student-upload-title`,children:`Upload colored copy of School ID with 3 signatures and Batch No.`}),(0,H.jsxs)(`p`,{children:[`Files will be saved to your `,N.schoolYear||`current`,` allinfo record. If you have records from other years, the portal automatically uses the current or latest School Year.`]})]}),(0,H.jsxs)(`aside`,{className:`student-sample-card`,"aria-label":`Sample School ID upload format`,children:[(0,H.jsxs)(`div`,{className:`student-sample-card__header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`student-sample-card__eyebrow`,children:`Sample Format`}),(0,H.jsx)(`h4`,{children:`Scan layout guide`})]}),(0,H.jsx)(`span`,{className:`student-sample-card__badge`,children:`Required`})]}),(0,H.jsxs)(`div`,{className:`student-sample-card__body`,children:[(0,H.jsx)(`a`,{className:`student-sample-card__image-link`,href:Vr,rel:`noreferrer`,target:`_blank`,title:`Open sample format`,children:(0,H.jsx)(`img`,{alt:`Sample scan format showing front and back School ID, three signatures, and Batch No.`,src:Vr})}),(0,H.jsxs)(`div`,{className:`student-sample-card__checklist`,children:[(0,H.jsx)(`p`,{children:`Before converting to PDF, make sure your scan includes:`}),(0,H.jsxs)(`ul`,{children:[(0,H.jsx)(`li`,{children:`Colored front and back copy of your School ID`}),(0,H.jsx)(`li`,{children:`Three clear signatures below the ID copies`}),(0,H.jsx)(`li`,{children:`Readable Batch No. written on the same page`})]}),(0,H.jsx)(`span`,{children:`Upload the final file as PDF only, maximum 5MB.`})]})]})]}),(0,H.jsxs)(`div`,{className:`student-upload-field`,children:[(0,H.jsx)(`span`,{className:`student-upload-label`,children:`Upload File`}),(0,H.jsxs)(`label`,{className:`student-upload-card${s||ue?` student-upload-card--selected`:``}`,htmlFor:`file-front`,children:[(0,H.jsx)(`input`,{accept:`application/pdf,.pdf`,disabled:!M||p,id:`file-front`,type:`file`,onChange:ge(c)}),(0,H.jsx)(`span`,{className:`student-upload-icon`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`id_card`})}),(0,H.jsx)(`span`,{className:`student-upload-title`,children:s?.name||(ue?`File already uploaded`:`Tap to upload File`)}),(0,H.jsx)(`span`,{className:`student-upload-note`,children:`PDF only up to 5MB`})]})]}),I&&(0,H.jsxs)(`div`,{className:`student-id-preview`,children:[(0,H.jsxs)(`div`,{className:`student-id-preview__header`,children:[(0,H.jsxs)(`div`,{className:`student-id-preview__title`,children:[(0,H.jsx)(`span`,{className:`student-id-preview__title-icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`task_alt`})}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Uploaded School ID`}),(0,H.jsx)(`small`,{children:`File received and ready for review`})]})]}),(0,H.jsx)(`a`,{href:I,rel:`noreferrer`,target:`_blank`,children:`View full file`})]}),(0,H.jsx)(ti,{url:I}),(0,H.jsx)(`noscript`,{children:(0,H.jsxs)(`a`,{className:`student-id-preview__file`,href:I,rel:`noreferrer`,target:`_blank`,children:[(0,H.jsx)(`span`,{className:`student-id-preview__file-icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`})}),(0,H.jsx)(`span`,{children:`Open uploaded PDF`})]})})]}),l&&(0,H.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:l}),(0,H.jsxs)(`button`,{className:`student-save-button`,disabled:!M||p,onClick:async()=>{if(u(``),f(``),!M){u(`No allinfo record is available for your Student ID.`);return}if(!s){u(`Choose a PDF file before saving.`);return}m(!0);try{let e=await _e(s),t=await a({studentId:M.studentId,schoolYear:M.schoolYear,frontIdUrl:e});c(null),f(`ID file saved for School Year ${t.schoolYear||N.schoolYear}.`)}catch(e){u(e instanceof Error?e.message:`Unable to save uploaded files.`)}finally{m(!1)}},type:`button`,children:[(0,H.jsx)(`span`,{children:p?`Saving Uploads...`:`Save Uploaded ID`}),(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})]})]})]})]}),d?(0,H.jsxs)(`div`,{"aria-describedby":`student-upload-success-description`,"aria-labelledby":`student-upload-success-title`,"aria-modal":`true`,className:`student-success-modal`,role:`dialog`,children:[(0,H.jsx)(`button`,{"aria-label":`Close upload success message`,className:`student-success-modal__backdrop`,onClick:()=>f(``),type:`button`}),(0,H.jsxs)(`section`,{className:`student-success-modal__card`,children:[(0,H.jsx)(`button`,{"aria-label":`Close`,className:`student-success-modal__close`,onClick:()=>f(``),type:`button`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`close`})}),(0,H.jsx)(`div`,{className:`student-success-modal__icon`,"aria-hidden":`true`,children:(0,H.jsx)(`span`,{className:`material-symbols-outlined`,children:`check`})}),(0,H.jsx)(`span`,{className:`student-success-modal__eyebrow`,children:`Upload complete`}),(0,H.jsx)(`h2`,{id:`student-upload-success-title`,children:`Successfully submitted`}),(0,H.jsxs)(`p`,{id:`student-upload-success-description`,children:[d,` Your document is now available for review.`]}),(0,H.jsx)(`button`,{className:`student-success-modal__action`,onClick:()=>f(``),ref:h,type:`button`,children:`Done`})]})]}):null]})}var ri=class extends V.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error(`ErrorBoundary caught`,e,t)}render(){if(this.state.hasError){let e=this.state.error?.message||`An unexpected error occurred.`;return(0,H.jsx)(`div`,{style:{minHeight:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:24,boxSizing:`border-box`,background:`#fbfaf8`,color:`#1c1b1b`,fontFamily:`'Hanken Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`},children:(0,H.jsxs)(`div`,{style:{maxWidth:720},children:[(0,H.jsx)(`h2`,{style:{marginTop:0},children:`Something went wrong`}),(0,H.jsx)(`p`,{style:{color:`#584237`,fontWeight:700},children:e}),(0,H.jsx)(`p`,{style:{color:`#584237`},children:'If the message mentions Convex functions (for example "Could not find public function"), make sure the Convex dev server is running (`npx convex dev`) or that `VITE_CONVEX_URL` points to a deployed Convex app.'}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:18},children:[(0,H.jsx)(`button`,{type:`button`,onClick:()=>window.location.reload(),style:{background:`#ea580c`,color:`#fff`,border:0,padding:`10px 14px`,borderRadius:8,fontWeight:800,cursor:`pointer`},children:`Reload`}),(0,H.jsx)(`button`,{type:`button`,onClick:()=>alert("Run `npx convex dev` in the project root or set VITE_CONVEX_URL."),style:{background:`#fff`,color:`#1c1b1b`,border:`1px solid rgba(150,116,101,0.6)`,padding:`10px 14px`,borderRadius:8,fontWeight:700,cursor:`pointer`},children:`Help`})]})]})})}return this.props.children}},ii=`unifast.adminSession`,ai=`unifast.studentViewOpen`,oi=`unifast.studentSession`;function si(){try{let e=window.localStorage.getItem(ii);return e?JSON.parse(e):null}catch{return null}}function ci(){try{return window.localStorage.getItem(ai)===`true`}catch{return!1}}function li(){try{let e=window.localStorage.getItem(oi);return e?JSON.parse(e):null}catch{return null}}function ui(){let e=(0,jn.c)(21),[t,n]=(0,V.useState)(si),[r,i]=(0,V.useState)(li),[a,o]=(0,V.useState)(ci),s;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=()=>{n(null)},e[0]=s):s=e[0];let c=s,l;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(l=()=>{i(null),o(!1)},e[1]=l):l=e[1];let u=l,d;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(d=e=>{if(e?.role===`student`){n(null),i(e),o(!0);return}i(null),o(!1),n(e)},e[2]=d):d=e[2];let f=d,p;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(p=e=>{n(null),i(e??null),o(!0)},e[3]=p):p=e[3];let m=p,h;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(h=e=>{i(t=>({...t??{},...e??{}}))},e[4]=h):h=e[4];let g=h,_,v;e[5]===t?(_=e[6],v=e[7]):(_=()=>{if(!t)return;let e=window.location.href,n={...window.history.state??{},unifastAdminGuard:!0};window.history.pushState(n,``,e);let r=()=>{window.history.pushState(n,``,e)};return window.addEventListener(`popstate`,r),()=>window.removeEventListener(`popstate`,r)},v=[t],e[5]=t,e[6]=_,e[7]=v),(0,V.useEffect)(_,v);let y,b;e[8]===t?(y=e[9],b=e[10]):(y=()=>{try{if(t){window.localStorage.setItem(ii,JSON.stringify(t)),window.localStorage.removeItem(ai),window.localStorage.removeItem(oi);return}window.localStorage.removeItem(ii)}catch{}},b=[t],e[8]=t,e[9]=y,e[10]=b),(0,V.useEffect)(y,b);let x,S;if(e[11]!==a||e[12]!==r?(S=()=>{try{if(a){window.localStorage.setItem(ai,`true`),window.localStorage.removeItem(ii),r&&window.localStorage.setItem(oi,JSON.stringify(r));return}window.localStorage.removeItem(ai),window.localStorage.removeItem(oi)}catch{}},x=[a,r],e[11]=a,e[12]=r,e[13]=x,e[14]=S):(x=e[13],S=e[14]),(0,V.useEffect)(S,x),t){let n;return e[15]===t?n=e[16]:(n=(0,H.jsx)(ri,{children:(0,H.jsx)(gr,{adminSession:t,onLogout:c})}),e[15]=t,e[16]=n),n}if(a){let t=r?.schoolId??`student`,n;return e[17]!==r||e[18]!==t?(n=(0,H.jsx)(ri,{children:(0,H.jsx)(ni,{studentSession:r,onLogout:u,onStudentSessionUpdate:g},t)}),e[17]=r,e[18]=t,e[19]=n):n=e[19],n}let C;return e[20]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,H.jsx)(ri,{children:(0,H.jsx)(zr,{onAdminLoginSuccess:f,onStudentRegistrationSuccess:m})}),e[20]=C):C=e[20],C}var di=`https://ideal-crane-292.convex.cloud`,fi=(0,En.createRoot)(document.getElementById(`root`));{let e=new sn(di);fi.render((0,H.jsx)(V.StrictMode,{children:(0,H.jsx)(un,{client:e,children:(0,H.jsx)(ui,{})})}))}export{Gr as t};