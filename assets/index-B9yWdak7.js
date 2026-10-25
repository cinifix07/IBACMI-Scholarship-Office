const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/form2Export-BfpInTo5.js","assets/billingExport-BRbUcO_j.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();for(var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},L={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),d=o(((e,t)=>{t.exports=u()})),f=[],p=[],m=Uint8Array,h=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,g=0,_=h.length;g<_;++g)f[g]=h[g],p[h.charCodeAt(g)]=g;p[45]=62,p[95]=63;function v(e){var t=e.length;if(t%4>0)throw Error(`Invalid string. Length must be a multiple of 4`);var n=e.indexOf(`=`);n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function y(e,t,n){return(t+n)*3/4-n}function b(e){var t,n=v(e),r=n[0],i=n[1],a=new m(y(e,r,i)),o=0,s=i>0?r-4:r,c;for(c=0;c<s;c+=4)t=p[e.charCodeAt(c)]<<18|p[e.charCodeAt(c+1)]<<12|p[e.charCodeAt(c+2)]<<6|p[e.charCodeAt(c+3)],a[o++]=t>>16&255,a[o++]=t>>8&255,a[o++]=t&255;return i===2&&(t=p[e.charCodeAt(c)]<<2|p[e.charCodeAt(c+1)]>>4,a[o++]=t&255),i===1&&(t=p[e.charCodeAt(c)]<<10|p[e.charCodeAt(c+1)]<<4|p[e.charCodeAt(c+2)]>>2,a[o++]=t>>8&255,a[o++]=t&255),a}function x(e){return f[e>>18&63]+f[e>>12&63]+f[e>>6&63]+f[e&63]}function S(e,t,n){for(var r,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(e[a+2]&255),i.push(x(r));return i.join(``)}function C(e){for(var t,n=e.length,r=n%3,i=[],a=16383,o=0,s=n-r;o<s;o+=a)i.push(S(e,o,o+a>s?s:o+a));return r===1?(t=e[n-1],i.push(f[t>>2]+f[t<<4&63]+`==`)):r===2&&(t=(e[n-2]<<8)+e[n-1],i.push(f[t>>10]+f[t>>4&63]+f[t<<2&63]+`=`)),i.join(``)}function w(e){if(e===void 0)return{};if(!E(e))throw Error(`The arguments to a Convex function must be an object. Received: ${e}`);return e}function T(e){if(e===void 0)throw Error(`Client created with undefined deployment address. If you used an environment variable, check that it's set.`);if(typeof e!=`string`)throw Error(`Invalid deployment address: found ${e}".`);if(!(e.startsWith(`http:`)||e.startsWith(`https:`)))throw Error(`Invalid deployment address: Must start with "https://" or "http://". Found "${e}".`);try{new URL(e)}catch{throw Error(`Invalid deployment address: "${e}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}if(e.endsWith(`.convex.site`))throw Error(`Invalid deployment address: "${e}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}function E(e){let t=typeof e==`object`,n=Object.getPrototypeOf(e),r=n===null||n===Object.prototype||n?.constructor?.name===`Object`;return t&&r}var D=!0,O=BigInt(`-9223372036854775808`),k=BigInt(`9223372036854775807`),A=BigInt(`0`),j=BigInt(`8`),M=BigInt(`256`);function N(e){return Number.isNaN(e)||!Number.isFinite(e)||Object.is(e,-0)}function P(e){e<A&&(e-=O+O);let t=e.toString(16);t.length%2==1&&(t=`0`+t);let n=new Uint8Array(new ArrayBuffer(8)),r=0;for(let i of t.match(/.{2}/g).reverse())n.set([parseInt(i,16)],r++),e>>=j;return C(n)}function F(e){let t=b(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);let n=A,r=A;for(let e of t)n+=BigInt(e)*M**r,r++;return n>k&&(n+=O+O),n}function I(e){if(e<O||k<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);let t=new ArrayBuffer(8);return new DataView(t).setBigInt64(0,e,!0),C(new Uint8Array(t))}function L(e){let t=b(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);return new DataView(t.buffer).getBigInt64(0,!0)}var R=DataView.prototype.setBigInt64?I:P,z=DataView.prototype.getBigInt64?L:F,B=1024;function V(e){if(e.length>B)throw Error(`Field name ${e} exceeds maximum field name length ${B}.`);if(e.startsWith(`$`))throw Error(`Field name ${e} starts with a '$', which is reserved.`);for(let t=0;t<e.length;t+=1){let n=e.charCodeAt(t);if(n<32||n>=127)throw Error(`Field name ${e} has invalid character '${e[t]}': Field names can only contain non-control ASCII characters`)}}function H(e){if(e===null||typeof e==`boolean`||typeof e==`number`||typeof e==`string`)return e;if(Array.isArray(e))return e.map(e=>H(e));if(typeof e!=`object`)throw Error(`Unexpected type of ${e}`);let t=Object.entries(e);if(t.length===1){let n=t[0][0];if(n===`$bytes`){if(typeof e.$bytes!=`string`)throw Error(`Malformed $bytes field on ${e}`);return b(e.$bytes).buffer}if(n===`$integer`){if(typeof e.$integer!=`string`)throw Error(`Malformed $integer field on ${e}`);return z(e.$integer)}if(n===`$float`){if(typeof e.$float!=`string`)throw Error(`Malformed $float field on ${e}`);let t=b(e.$float);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $float`);let n=new DataView(t.buffer).getFloat64(0,D);if(!N(n))throw Error(`Float ${n} should be encoded as a number`);return n}if(n===`$set`)throw Error(`Received a Set which is no longer supported as a Convex type.`);if(n===`$map`)throw Error(`Received a Map which is no longer supported as a Convex type.`)}let n={};for(let[t,r]of Object.entries(e))V(t),n[t]=H(r);return n}var U=16384;function W(e){let t=JSON.stringify(e,(e,t)=>t===void 0?`undefined`:typeof t==`bigint`?`${t.toString()}n`:t);if(t.length>U){let e=U-14,n=t.codePointAt(e-1);return n!==void 0&&n>65535&&--e,t.substring(0,e)+`[...truncated]`}return t}function G(e,t,n,r){if(e===void 0){let e=n&&` (present at path ${n} in original object ${W(t)})`;throw Error(`undefined is not a valid Convex value${e}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`)}if(e===null)return e;if(typeof e==`bigint`){if(e<O||k<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);return{$integer:R(e)}}if(typeof e==`number`)if(N(e)){let t=new ArrayBuffer(8);return new DataView(t).setFloat64(0,e,D),{$float:C(new Uint8Array(t))}}else return e;if(typeof e==`boolean`||typeof e==`string`)return e;if(e instanceof ArrayBuffer)return{$bytes:C(new Uint8Array(e))};if(Array.isArray(e))return e.map((e,r)=>G(e,t,n+`[${r}]`,!1));if(e instanceof Set)throw Error(K(n,`Set`,[...e],t));if(e instanceof Map)throw Error(K(n,`Map`,[...e],t));if(!E(e)){let r=e?.constructor?.name,i=r?`${r} `:``;throw Error(K(n,i,e,t))}let i={},a=Object.entries(e);a.sort(([e,t],[n,r])=>e===n?0:e<n?-1:1);for(let[e,o]of a)o===void 0?r&&(V(e),i[e]=ee(o,t,n+`.${e}`)):(V(e),i[e]=G(o,t,n+`.${e}`,!1));return i}function K(e,t,n,r){return e?`${t}${W(n)} is not a supported Convex type (present at path ${e} in original object ${W(r)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`:`${t}${W(n)} is not a supported Convex type.`}function ee(e,t,n){if(e===void 0)return{$undefined:null};if(t===void 0)throw Error(`Programming error. Current value is ${W(e)} but original value is undefined`);return G(e,t,n,!1)}function q(e){return G(e,e,``,!1)}var te=Object.defineProperty,J=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t,n)=>J(e,typeof t==`symbol`?t:t+``,n),ne=`https://docs.convex.dev/error#undefined-validator`;function re(e,t){let n=t===void 0?``:` for field "${t}"`;throw Error(`A validator is undefined${n} in ${e}. This is often caused by circular imports. See ${ne} for details.`)}var ie=class{constructor({isOptional:e}){Y(this,`type`),Y(this,`fieldPaths`),Y(this,`isOptional`),Y(this,`isConvexValidator`),this.isOptional=e,this.isConvexValidator=!0}},ae=class e extends ie{constructor({isOptional:e,tableName:t}){if(super({isOptional:e}),Y(this,`tableName`),Y(this,`kind`,`id`),typeof t!=`string`)throw Error(`v.id(tableName) requires a string`);this.tableName=t}get json(){return{type:`id`,tableName:this.tableName}}asOptional(){return new e({isOptional:`optional`,tableName:this.tableName})}},oe=class e extends ie{constructor(){super(...arguments),Y(this,`kind`,`float64`)}get json(){return{type:`number`}}asOptional(){return new e({isOptional:`optional`})}},se=class e extends ie{constructor(){super(...arguments),Y(this,`kind`,`int64`)}get json(){return{type:`bigint`}}asOptional(){return new e({isOptional:`optional`})}},ce=class e extends ie{constructor(){super(...arguments),Y(this,`kind`,`boolean`)}get json(){return{type:this.kind}}asOptional(){return new e({isOptional:`optional`})}},le=class e extends ie{constructor(){super(...arguments),Y(this,`kind`,`bytes`)}get json(){return{type:this.kind}}asOptional(){return new e({isOptional:`optional`})}},ue=class e extends ie{constructor(){super(...arguments),Y(this,`kind`,`string`)}get json(){return{type:this.kind}}asOptional(){return new e({isOptional:`optional`})}},de=class e extends ie{constructor(){super(...arguments),Y(this,`kind`,`null`)}get json(){return{type:this.kind}}asOptional(){return new e({isOptional:`optional`})}},fe=class e extends ie{constructor(){super(...arguments),Y(this,`kind`,`any`)}get json(){return{type:this.kind}}asOptional(){return new e({isOptional:`optional`})}},pe=class e extends ie{constructor({isOptional:e,fields:t}){super({isOptional:e}),Y(this,`fields`),Y(this,`kind`,`object`),globalThis.Object.entries(t).forEach(([e,t])=>{if(t===void 0&&re(`v.object()`,e),!t.isConvexValidator)throw Error(`v.object() entries must be validators`)}),this.fields=t}get json(){return{type:this.kind,value:globalThis.Object.fromEntries(globalThis.Object.entries(this.fields).map(([e,t])=>[e,{fieldType:t.json,optional:t.isOptional===`optional`}]))}}asOptional(){return new e({isOptional:`optional`,fields:this.fields})}omit(...t){let n={...this.fields};for(let e of t)delete n[e];return new e({isOptional:this.isOptional,fields:n})}pick(...t){let n={};for(let e of t)n[e]=this.fields[e];return new e({isOptional:this.isOptional,fields:n})}partial(){let t={};for(let[e,n]of globalThis.Object.entries(this.fields))t[e]=n.asOptional();return new e({isOptional:this.isOptional,fields:t})}extend(t){return new e({isOptional:this.isOptional,fields:{...this.fields,...t}})}},me=class e extends ie{constructor({isOptional:e,value:t}){if(super({isOptional:e}),Y(this,`value`),Y(this,`kind`,`literal`),typeof t!=`string`&&typeof t!=`boolean`&&typeof t!=`number`&&typeof t!=`bigint`)throw Error(`v.literal(value) must be a string, number, or boolean`);this.value=t}get json(){return{type:this.kind,value:q(this.value)}}asOptional(){return new e({isOptional:`optional`,value:this.value})}},he=class e extends ie{constructor({isOptional:e,element:t}){super({isOptional:e}),Y(this,`element`),Y(this,`kind`,`array`),t===void 0&&re(`v.array()`),this.element=t}get json(){return{type:this.kind,value:this.element.json}}asOptional(){return new e({isOptional:`optional`,element:this.element})}},ge=class e extends ie{constructor({isOptional:e,key:t,value:n}){if(super({isOptional:e}),Y(this,`key`),Y(this,`value`),Y(this,`kind`,`record`),t===void 0&&re(`v.record()`,`key`),n===void 0&&re(`v.record()`,`value`),t.isOptional===`optional`)throw Error(`Record validator cannot have optional keys`);if(n.isOptional===`optional`)throw Error(`Record validator cannot have optional values`);if(!t.isConvexValidator||!n.isConvexValidator)throw Error(`Key and value of v.record() but be validators`);this.key=t,this.value=n}get json(){return{type:this.kind,keys:this.key.json,values:{fieldType:this.value.json,optional:!1}}}asOptional(){return new e({isOptional:`optional`,key:this.key,value:this.value})}},_e=class e extends ie{constructor({isOptional:e,members:t}){super({isOptional:e}),Y(this,`members`),Y(this,`kind`,`union`),t.forEach((e,t)=>{if(e===void 0&&re(`v.union()`,`member at index ${t}`),!e.isConvexValidator)throw Error(`All members of v.union() must be validators`)}),this.members=t}get json(){return{type:this.kind,value:this.members.map(e=>e.json)}}asOptional(){return new e({isOptional:`optional`,members:this.members})}},ve={id:e=>new ae({isOptional:`required`,tableName:e}),null:()=>new de({isOptional:`required`}),number:()=>new oe({isOptional:`required`}),float64:()=>new oe({isOptional:`required`}),bigint:()=>new se({isOptional:`required`}),int64:()=>new se({isOptional:`required`}),boolean:()=>new ce({isOptional:`required`}),string:()=>new ue({isOptional:`required`}),bytes:()=>new le({isOptional:`required`}),literal:e=>new me({isOptional:`required`,value:e}),array:e=>new he({isOptional:`required`,element:e}),object:e=>new pe({isOptional:`required`,fields:e}),record:(e,t)=>new ge({isOptional:`required`,key:e,value:t}),union:(...e)=>new _e({isOptional:`required`,members:e}),any:()=>new fe({isOptional:`required`}),optional:e=>e.asOptional(),nullable:e=>ve.union(e,ve.null())},ye=Object.defineProperty,be=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xe=(e,t,n)=>be(e,typeof t==`symbol`?t:t+``,n),Se,Ce,we=Symbol.for(`ConvexError`),Te=class extends (Ce=Error,Se=we,Ce){constructor(e){super(typeof e==`string`?e:W(e)),xe(this,`name`,`ConvexError`),xe(this,`data`),xe(this,Se,!0),this.data=e}},Ee=`1.40.0`,De=Object.defineProperty,Oe=(e,t,n)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ke=(e,t,n)=>Oe(e,typeof t==`symbol`?t:t+``,n),Ae=`color:rgb(0, 145, 255)`;function je(e){switch(e){case`query`:return`Q`;case`mutation`:return`M`;case`action`:return`A`;case`any`:return`?`}}var Me=class{constructor(e){ke(this,`_onLogLineFuncs`),ke(this,`_verbose`),this._onLogLineFuncs={},this._verbose=e.verbose}addLogLineListener(e){let t=Math.random().toString(36).substring(2,15);for(let e=0;e<10&&this._onLogLineFuncs[t]!==void 0;e++)t=Math.random().toString(36).substring(2,15);return this._onLogLineFuncs[t]=e,()=>{delete this._onLogLineFuncs[t]}}logVerbose(...e){if(this._verbose)for(let t of Object.values(this._onLogLineFuncs))t(`debug`,`${new Date().toISOString()}`,...e)}log(...e){for(let t of Object.values(this._onLogLineFuncs))t(`info`,...e)}warn(...e){for(let t of Object.values(this._onLogLineFuncs))t(`warn`,...e)}error(...e){for(let t of Object.values(this._onLogLineFuncs))t(`error`,...e)}};function Ne(e){let t=new Me(e);return t.addLogLineListener((e,...t)=>{switch(e){case`debug`:console.debug(...t);break;case`info`:console.log(...t);break;case`warn`:console.warn(...t);break;case`error`:console.error(...t);break;default:console.log(...t)}}),t}function Pe(e){return new Me(e)}function Fe(e,t,n,r,i){let a=je(n);if(typeof i==`object`&&(i=`ConvexError ${JSON.stringify(i.errorData,null,2)}`),t===`info`){let t=i.match(/^\[.*?\] /);if(t===null){e.error(`[CONVEX ${a}(${r})] Could not parse console.log`);return}let n=i.slice(1,t[0].length-2),o=i.slice(t[0].length);e.log(`%c[CONVEX ${a}(${r})] [${n}]`,Ae,o)}else e.error(`[CONVEX ${a}(${r})] ${i}`)}function Ie(e,t){let n=`[CONVEX FATAL ERROR] ${t}`;return e.error(n),Error(n)}function Le(e,t,n){return`[CONVEX ${je(e)}(${t})] ${n.errorMessage}
  Called by client`}function Re(e,t){return t.data=e.errorData,t}function ze(e){let t=e.split(`:`),n,r;return t.length===1?(n=t[0],r=`default`):(n=t.slice(0,t.length-1).join(`:`),r=t[t.length-1]),n.endsWith(`.js`)&&(n=n.slice(0,-3)),`${n}:${r}`}function Be(e,t){return JSON.stringify({udfPath:ze(e),args:q(t)})}function Ve(e,t,n){let{initialNumItems:r,id:i}=n;return JSON.stringify({type:`paginated`,udfPath:ze(e),args:q(t),options:q({initialNumItems:r,id:i})})}var He=Object.defineProperty,Ue=(e,t,n)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,We=(e,t,n)=>Ue(e,typeof t==`symbol`?t:t+``,n),Ge=class{constructor(){We(this,`nextQueryId`),We(this,`querySetVersion`),We(this,`querySet`),We(this,`queryIdToToken`),We(this,`identityVersion`),We(this,`auth`),We(this,`outstandingQueriesOlderThanRestart`),We(this,`outstandingAuthOlderThanRestart`),We(this,`paused`),We(this,`pendingQuerySetModifications`),this.nextQueryId=0,this.querySetVersion=0,this.identityVersion=0,this.querySet=new Map,this.queryIdToToken=new Map,this.outstandingQueriesOlderThanRestart=new Set,this.outstandingAuthOlderThanRestart=!1,this.paused=!1,this.pendingQuerySetModifications=new Map}hasSyncedPastLastReconnect(){return this.outstandingQueriesOlderThanRestart.size===0&&!this.outstandingAuthOlderThanRestart}markAuthCompletion(){this.outstandingAuthOlderThanRestart=!1}subscribe(e,t,n,r){let i=ze(e),a=Be(i,t),o=this.querySet.get(a);if(o!==void 0)return o.numSubscribers+=1,{queryToken:a,modification:null,unsubscribe:()=>this.removeSubscriber(a)};{let e=this.nextQueryId++,o={id:e,canonicalizedUdfPath:i,args:t,numSubscribers:1,journal:n,componentPath:r};this.querySet.set(a,o),this.queryIdToToken.set(e,a);let s=this.querySetVersion,c=this.querySetVersion+1,l={type:`Add`,queryId:e,udfPath:i,args:[q(t)],journal:n,componentPath:r};return this.paused?this.pendingQuerySetModifications.set(e,l):this.querySetVersion=c,{queryToken:a,modification:{type:`ModifyQuerySet`,baseVersion:s,newVersion:c,modifications:[l]},unsubscribe:()=>this.removeSubscriber(a)}}}transition(e){for(let t of e.modifications)switch(t.type){case`QueryUpdated`:case`QueryFailed`:{this.outstandingQueriesOlderThanRestart.delete(t.queryId);let e=t.journal;if(e!==void 0){let n=this.queryIdToToken.get(t.queryId);n!==void 0&&(this.querySet.get(n).journal=e)}break}case`QueryRemoved`:this.outstandingQueriesOlderThanRestart.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}}queryId(e,t){let n=Be(ze(e),t),r=this.querySet.get(n);return r===void 0?null:r.id}isCurrentOrNewerAuthVersion(e){return e>=this.identityVersion}getAuth(){return this.auth}setAuth(e){this.auth={tokenType:`User`,value:e};let t=this.identityVersion;return this.paused||(this.identityVersion=t+1),{type:`Authenticate`,baseVersion:t,...this.auth}}setAdminAuth(e,t){let n={tokenType:`Admin`,value:e,impersonating:t};this.auth=n;let r=this.identityVersion;return this.paused||(this.identityVersion=r+1),{type:`Authenticate`,baseVersion:r,...n}}clearAuth(){this.auth=void 0,this.markAuthCompletion();let e=this.identityVersion;return this.paused||(this.identityVersion=e+1),{type:`Authenticate`,tokenType:`None`,baseVersion:e}}hasAuth(){return!!this.auth}isNewAuth(e){return this.auth?.value!==e}queryPath(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).canonicalizedUdfPath:null}queryArgs(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).args:null}queryToken(e){return this.queryIdToToken.get(e)??null}queryJournal(e){return this.querySet.get(e)?.journal}restart(){this.unpause(),this.outstandingQueriesOlderThanRestart.clear();let e=[];for(let t of this.querySet.values()){let n={type:`Add`,queryId:t.id,udfPath:t.canonicalizedUdfPath,args:[q(t.args)],journal:t.journal,componentPath:t.componentPath};e.push(n),this.outstandingQueriesOlderThanRestart.add(t.id)}this.querySetVersion=1;let t={type:`ModifyQuerySet`,baseVersion:0,newVersion:1,modifications:e};if(!this.auth)return this.identityVersion=0,[t,void 0];this.outstandingAuthOlderThanRestart=!0;let n={type:`Authenticate`,baseVersion:0,...this.auth};return this.identityVersion=1,[t,n]}pause(){this.paused=!0}resume(){let e=this.pendingQuerySetModifications.size>0?{type:`ModifyQuerySet`,baseVersion:this.querySetVersion,newVersion:++this.querySetVersion,modifications:Array.from(this.pendingQuerySetModifications.values())}:void 0,t=this.auth===void 0?void 0:{type:`Authenticate`,baseVersion:this.identityVersion++,...this.auth};return this.unpause(),[e,t]}unpause(){this.paused=!1,this.pendingQuerySetModifications.clear()}removeSubscriber(e){let t=this.querySet.get(e);if(t.numSubscribers>1)return--t.numSubscribers,null;{this.querySet.delete(e),this.queryIdToToken.delete(t.id),this.outstandingQueriesOlderThanRestart.delete(t.id);let n=this.querySetVersion,r=this.querySetVersion+1,i={type:`Remove`,queryId:t.id};return this.paused?this.pendingQuerySetModifications.has(t.id)?this.pendingQuerySetModifications.delete(t.id):this.pendingQuerySetModifications.set(t.id,i):this.querySetVersion=r,{type:`ModifyQuerySet`,baseVersion:n,newVersion:r,modifications:[i]}}}},Ke=Object.defineProperty,qe=(e,t,n)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Je=(e,t,n)=>qe(e,typeof t==`symbol`?t:t+``,n),Ye=class{constructor(e,t){this.logger=e,this.markConnectionStateDirty=t,Je(this,`inflightRequests`),Je(this,`requestsOlderThanRestart`),Je(this,`inflightMutationsCount`,0),Je(this,`inflightActionsCount`,0),this.inflightRequests=new Map,this.requestsOlderThanRestart=new Set}request(e,t){let n=new Promise(n=>{let r=t?`Requested`:`NotSent`;this.inflightRequests.set(e.requestId,{message:e,status:{status:r,requestedAt:new Date,onResult:n}}),e.type===`Mutation`?this.inflightMutationsCount++:e.type===`Action`&&this.inflightActionsCount++});return this.markConnectionStateDirty(),n}onResponse(e){let t=this.inflightRequests.get(e.requestId);if(t===void 0||t.status.status===`Completed`)return null;let n=t.message.type===`Mutation`?`mutation`:`action`,r=t.message.udfPath;for(let t of e.logLines)Fe(this.logger,`info`,n,r,t);let i=t.status,a,o;if(e.success)a={success:!0,logLines:e.logLines,value:H(e.result)},o=()=>i.onResult(a);else{let t=e.result,{errorData:s}=e;Fe(this.logger,`error`,n,r,t),a={success:!1,errorMessage:t,errorData:s===void 0?void 0:H(s),logLines:e.logLines},o=()=>i.onResult(a)}return e.type===`ActionResponse`||!e.success?(o(),this.inflightRequests.delete(e.requestId),this.requestsOlderThanRestart.delete(e.requestId),t.message.type===`Action`?this.inflightActionsCount--:t.message.type===`Mutation`&&this.inflightMutationsCount--,this.markConnectionStateDirty(),{requestId:e.requestId,result:a}):(t.status={status:`Completed`,result:a,ts:e.ts,onResolve:o},null)}removeCompleted(e){let t=new Map;for(let[n,r]of this.inflightRequests.entries()){let i=r.status;i.status===`Completed`&&i.ts.lessThanOrEqual(e)&&(i.onResolve(),t.set(n,i.result),r.message.type===`Mutation`?this.inflightMutationsCount--:r.message.type===`Action`&&this.inflightActionsCount--,this.inflightRequests.delete(n),this.requestsOlderThanRestart.delete(n))}return t.size>0&&this.markConnectionStateDirty(),t}restart(){this.requestsOlderThanRestart=new Set(this.inflightRequests.keys());let e=[];for(let[t,n]of this.inflightRequests){if(n.status.status===`NotSent`){n.status.status=`Requested`,e.push(n.message);continue}if(n.message.type===`Mutation`)e.push(n.message);else if(n.message.type===`Action`){if(this.inflightRequests.delete(t),this.requestsOlderThanRestart.delete(t),this.inflightActionsCount--,n.status.status===`Completed`)throw Error(`Action should never be in 'Completed' state`);n.status.onResult({success:!1,errorMessage:`Connection lost while action was in flight`,logLines:[]})}}return this.markConnectionStateDirty(),e}resume(){let e=[];for(let[,t]of this.inflightRequests)if(t.status.status===`NotSent`){t.status.status=`Requested`,e.push(t.message);continue}return e}hasIncompleteRequests(){for(let e of this.inflightRequests.values())if(e.status.status===`Requested`)return!0;return!1}hasInflightRequests(){return this.inflightRequests.size>0}hasSyncedPastLastReconnect(){return this.requestsOlderThanRestart.size===0}timeOfOldestInflightRequest(){if(this.inflightRequests.size===0)return null;let e=Date.now();for(let t of this.inflightRequests.values())t.status.status!==`Completed`&&t.status.requestedAt.getTime()<e&&(e=t.status.requestedAt.getTime());return new Date(e)}inflightMutations(){return this.inflightMutationsCount}inflightActions(){return this.inflightActionsCount}},Xe=Symbol.for(`functionName`),Ze=Symbol.for(`toReferencePath`);function Qe(e){return e[Ze]??null}function $e(e){return e.startsWith(`function://`)}function et(e){let t;if(typeof e==`string`)t=$e(e)?{functionHandle:e}:{name:e};else if(e[Xe])t={name:e[Xe]};else{let n=Qe(e);if(!n)throw Error(`${e} is not a functionReference`);t={reference:n}}return t}function tt(e){let t=et(e);if(t.name===void 0)throw t.functionHandle===void 0?t.reference===void 0?Error(`Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(t)}`):Error(`Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${t.reference}`):Error(`Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${t.functionHandle}`);if(typeof e==`string`)return e;let n=e[Xe];if(!n)throw Error(`${e} is not a functionReference`);return n}function nt(e){return{[Xe]:e}}function rt(e=[]){return new Proxy({},{get(t,n){if(typeof n==`string`)return rt([...e,n]);if(n===Xe){if(e.length<2){let t=[`api`,...e].join(`.`);throw Error(`API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${t}\``)}let t=e.slice(0,-1).join(`/`),n=e[e.length-1];return n==="default"?t:t+`:`+n}else if(n===Symbol.toStringTag)return`FunctionReference`;else return}})}var it=rt(),at=Object.defineProperty,ot=(e,t,n)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,st=(e,t,n)=>ot(e,typeof t==`symbol`?t:t+``,n),ct=class e{constructor(e){st(this,`queryResults`),st(this,`modifiedQueries`),this.queryResults=e,this.modifiedQueries=[]}getQuery(t,...n){let r=w(n[0]),i=tt(t),a=this.queryResults.get(Be(i,r));if(a!==void 0)return e.queryValue(a.result)}getAllQueries(t){let n=[],r=tt(t);for(let t of this.queryResults.values())t.udfPath===ze(r)&&n.push({args:t.args,value:e.queryValue(t.result)});return n}setQuery(e,t,n){let r=w(t),i=tt(e),a=Be(i,r),o;o=n===void 0?void 0:{success:!0,value:n,logLines:[]};let s={udfPath:i,args:r,result:o};this.queryResults.set(a,s),this.modifiedQueries.push(a)}static queryValue(e){if(e!==void 0&&e.success)return e.value}},lt=class{constructor(){st(this,`queryResults`),st(this,`optimisticUpdates`),this.queryResults=new Map,this.optimisticUpdates=[]}ingestQueryResultsFromServer(e,t){this.optimisticUpdates=this.optimisticUpdates.filter(e=>!t.has(e.mutationId));let n=this.queryResults;this.queryResults=new Map(e);let r=new ct(this.queryResults);for(let e of this.optimisticUpdates)e.update(r);let i=[];for(let[e,t]of this.queryResults){let r=n.get(e);(r===void 0||r.result!==t.result)&&i.push(e)}return i}applyOptimisticUpdate(e,t){this.optimisticUpdates.push({update:e,mutationId:t});let n=new ct(this.queryResults);return e(n),n.modifiedQueries}rawQueryResult(e){let t=this.queryResults.get(e);if(t!==void 0)return t.result}queryResult(e){let t=this.queryResults.get(e);if(t===void 0)return;let n=t.result;if(n!==void 0){if(n.success)return n.value;throw n.errorData===void 0?Error(Le(`query`,t.udfPath,n)):Re(n,new Te(Le(`query`,t.udfPath,n)))}}hasQueryResult(e){return this.queryResults.get(e)!==void 0}queryLogs(e){return this.queryResults.get(e)?.result?.logLines}},ut=Object.defineProperty,dt=(e,t,n)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ft=(e,t,n)=>dt(e,typeof t==`symbol`?t:t+``,n),pt=class e{constructor(e,t){ft(this,`low`),ft(this,`high`),ft(this,`__isUnsignedLong__`),this.low=e|0,this.high=t|0,this.__isUnsignedLong__=!0}static isLong(e){return(e&&e.__isUnsignedLong__)===!0}static fromBytesLE(t){return new e(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24)}toBytesLE(){let e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]}static fromNumber(t){return isNaN(t)||t<0?mt:t>=_t?vt:new e(t%gt|0,t/gt|0)}toString(){return(BigInt(this.high)*BigInt(gt)+BigInt(this.low)).toString()}equals(t){return e.isLong(t)||(t=e.fromValue(t)),this.high>>>31==1&&t.high>>>31==1?!1:this.high===t.high&&this.low===t.low}notEquals(e){return!this.equals(e)}comp(t){return e.isLong(t)||(t=e.fromValue(t)),this.equals(t)?0:t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1}lessThanOrEqual(e){return this.comp(e)<=0}static fromValue(t){return typeof t==`number`?e.fromNumber(t):new e(t.low,t.high)}},mt=new pt(0,0),ht=65536,gt=ht*ht,_t=gt*gt,vt=new pt(-1,-1),yt=Object.defineProperty,bt=(e,t,n)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xt=(e,t,n)=>bt(e,typeof t==`symbol`?t:t+``,n),St=class{constructor(e,t){xt(this,`version`),xt(this,`remoteQuerySet`),xt(this,`queryPath`),xt(this,`logger`),this.version={querySet:0,ts:pt.fromNumber(0),identity:0},this.remoteQuerySet=new Map,this.queryPath=e,this.logger=t}transition(e){let t=e.startVersion;if(this.version.querySet!==t.querySet||this.version.ts.notEquals(t.ts)||this.version.identity!==t.identity)throw Error(`Invalid start version: ${t.ts.toString()}:${t.querySet}:${t.identity}, transitioning from ${this.version.ts.toString()}:${this.version.querySet}:${this.version.identity}`);for(let t of e.modifications)switch(t.type){case`QueryUpdated`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)Fe(this.logger,`info`,`query`,e,n);let n=H(t.value??null);this.remoteQuerySet.set(t.queryId,{success:!0,value:n,logLines:t.logLines});break}case`QueryFailed`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)Fe(this.logger,`info`,`query`,e,n);let{errorData:n}=t;this.remoteQuerySet.set(t.queryId,{success:!1,errorMessage:t.errorMessage,errorData:n===void 0?void 0:H(n),logLines:t.logLines});break}case`QueryRemoved`:this.remoteQuerySet.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}this.version=e.endVersion}remoteQueryResults(){return this.remoteQuerySet}timestamp(){return this.version.ts}};function Ct(e){let t=b(e);return pt.fromBytesLE(Array.from(t))}function wt(e){return C(new Uint8Array(e.toBytesLE()))}function Tt(e){switch(e.type){case`FatalError`:case`AuthError`:case`ActionResponse`:case`TransitionChunk`:case`Ping`:return{...e};case`MutationResponse`:return e.success?{...e,ts:Ct(e.ts)}:{...e};case`Transition`:return{...e,startVersion:{...e.startVersion,ts:Ct(e.startVersion.ts)},endVersion:{...e.endVersion,ts:Ct(e.endVersion.ts)}};default:}}function Et(e){switch(e.type){case`Authenticate`:case`ModifyQuerySet`:case`Mutation`:case`Action`:case`Event`:return{...e};case`Connect`:return e.maxObservedTimestamp===void 0?{...e,maxObservedTimestamp:void 0}:{...e,maxObservedTimestamp:wt(e.maxObservedTimestamp)};default:}}var Dt=Object.defineProperty,Ot=(e,t,n)=>t in e?Dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kt=(e,t,n)=>Ot(e,typeof t==`symbol`?t:t+``,n),At=1e3,jt=1001,Mt=1005,Nt=4040,Pt;function Ft(){return Pt===void 0&&(Pt=Date.now()),typeof performance>`u`||!performance.now?Date.now():Math.round(Pt+performance.now())}function It(){return`t=${Math.round((Ft()-Pt)/100)/10}s`}var Lt={InternalServerError:{timeout:1e3},SubscriptionsWorkerFullError:{timeout:3e3},TooManyConcurrentRequests:{timeout:3e3},CommitterFullError:{timeout:3e3},AwsTooManyRequestsException:{timeout:3e3},ExecuteFullError:{timeout:3e3},SystemTimeoutError:{timeout:3e3},ExpiredInQueue:{timeout:3e3},VectorIndexesUnavailable:{timeout:1e3},SearchIndexesUnavailable:{timeout:1e3},TableSummariesUnavailable:{timeout:1e3},VectorIndexTooLarge:{timeout:3e3},SearchIndexTooLarge:{timeout:3e3},TooManyWritesInTimePeriod:{timeout:3e3}};function Rt(e){if(e===void 0)return`Unknown`;for(let t of Object.keys(Lt))if(e.startsWith(t))return t;return`Unknown`}var zt=class{constructor(e,t,n,r,i,a){this.markConnectionStateDirty=i,this.debug=a,kt(this,`socket`),kt(this,`connectionCount`),kt(this,`_hasEverConnected`,!1),kt(this,`lastCloseReason`),kt(this,`transitionChunkBuffer`,null),kt(this,`defaultInitialBackoff`),kt(this,`maxBackoff`),kt(this,`retries`),kt(this,`serverInactivityThreshold`),kt(this,`reconnectDueToServerInactivityTimeout`),kt(this,`scheduledReconnect`,null),kt(this,`networkOnlineHandler`,null),kt(this,`pendingNetworkRecoveryInfo`,null),kt(this,`uri`),kt(this,`onOpen`),kt(this,`onResume`),kt(this,`onMessage`),kt(this,`webSocketConstructor`),kt(this,`logger`),kt(this,`onServerDisconnectError`),this.webSocketConstructor=n,this.socket={state:`disconnected`},this.connectionCount=0,this.lastCloseReason=`InitialConnect`,this.defaultInitialBackoff=1e3,this.maxBackoff=16e3,this.retries=0,this.serverInactivityThreshold=6e4,this.reconnectDueToServerInactivityTimeout=null,this.uri=e,this.onOpen=t.onOpen,this.onResume=t.onResume,this.onMessage=t.onMessage,this.onServerDisconnectError=t.onServerDisconnectError,this.logger=r,this.setupNetworkListener(),this.connect()}setSocketState(e){this.socket=e,this._logVerbose(`socket state changed: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}`),this.markConnectionStateDirty()}setupNetworkListener(){typeof window>`u`||typeof window.addEventListener!=`function`||this.networkOnlineHandler===null&&(this.networkOnlineHandler=()=>{this._logVerbose(`network online event detected`),this.tryReconnectImmediately()},window.addEventListener(`online`,this.networkOnlineHandler),this._logVerbose(`network online event listener registered`))}cleanupNetworkListener(){this.networkOnlineHandler&&typeof window<`u`&&typeof window.removeEventListener==`function`&&(window.removeEventListener(`online`,this.networkOnlineHandler),this.networkOnlineHandler=null,this._logVerbose(`network online event listener removed`))}assembleTransition(e){if(e.partNumber<0||e.partNumber>=e.totalParts||e.totalParts===0||this.transitionChunkBuffer&&(this.transitionChunkBuffer.totalParts!==e.totalParts||this.transitionChunkBuffer.transitionId!==e.transitionId))throw this.transitionChunkBuffer=null,Error(`Invalid TransitionChunk`);if(this.transitionChunkBuffer===null&&(this.transitionChunkBuffer={chunks:[],totalParts:e.totalParts,transitionId:e.transitionId}),e.partNumber!==this.transitionChunkBuffer.chunks.length){let t=this.transitionChunkBuffer.chunks.length;throw this.transitionChunkBuffer=null,Error(`TransitionChunk received out of order: expected part ${t}, got ${e.partNumber}`)}if(this.transitionChunkBuffer.chunks.push(e.chunk),this.transitionChunkBuffer.chunks.length===e.totalParts){let e=this.transitionChunkBuffer.chunks.join(``);this.transitionChunkBuffer=null;let t=Tt(JSON.parse(e));if(t.type!==`Transition`)throw Error(`Expected Transition, got ${t.type} after assembling chunks`);return t}return null}connect(){if(this.socket.state===`terminated`)return;if(this.socket.state!==`disconnected`&&this.socket.state!==`stopped`)throw Error(`Didn't start connection from disconnected state: `+this.socket.state);let e=new this.webSocketConstructor(this.uri);this._logVerbose(`constructed WebSocket`),this.setSocketState({state:`connecting`,ws:e,paused:`no`}),this.resetServerInactivityTimeout(),e.onopen=()=>{if(this.logger.logVerbose(`begin ws.onopen`),this.socket.state!==`connecting`)throw Error(`onopen called with socket not in connecting state`);if(this.setSocketState({state:`ready`,ws:e,paused:this.socket.paused===`yes`?`uninitialized`:`no`}),this.resetServerInactivityTimeout(),this.socket.paused===`no`&&(this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:Ft()})),this.lastCloseReason!==`InitialConnect`&&(this.lastCloseReason?this.logger.log(`WebSocket reconnected at`,It(),`after disconnect due to`,this.lastCloseReason):this.logger.log(`WebSocket reconnected at`,It())),this.connectionCount+=1,this.lastCloseReason=null,this.pendingNetworkRecoveryInfo!==null){let{timeSavedMs:e}=this.pendingNetworkRecoveryInfo;this.pendingNetworkRecoveryInfo=null,this.sendMessage({type:`Event`,eventType:`NetworkRecoveryReconnect`,event:{timeSavedMs:e}}),this.logger.log(`Network recovery reconnect saved ~${Math.round(e/1e3)}s of waiting`)}},e.onerror=e=>{this.transitionChunkBuffer=null;let t=e.message;t&&this.logger.log(`WebSocket error message: ${t}`)},e.onmessage=e=>{this.resetServerInactivityTimeout();let t=e.data.length,n=Tt(JSON.parse(e.data));if(this._logVerbose(`received ws message with type ${n.type}`),n.type!==`Ping`){if(n.type===`TransitionChunk`){let e=this.assembleTransition(n);if(!e)return;n=e,this._logVerbose(`assembled full ws message of type ${n.type}`)}this.transitionChunkBuffer!==null&&(this.transitionChunkBuffer=null,this.logger.log(`Received unexpected ${n.type} while buffering TransitionChunks`)),n.type===`Transition`&&this.reportLargeTransition({messageLength:t,transition:n}),this.onMessage(n).hasSyncedPastLastReconnect&&(this.retries=0,this.markConnectionStateDirty())}},e.onclose=e=>{if(this._logVerbose(`begin ws.onclose`),this.transitionChunkBuffer=null,this.lastCloseReason===null&&(this.lastCloseReason=e.reason||`closed with code ${e.code}`),e.code!==At&&e.code!==jt&&e.code!==Mt&&e.code!==Nt){let t=`WebSocket closed with code ${e.code}`;e.reason&&(t+=`: ${e.reason}`),this.logger.log(t),this.onServerDisconnectError&&e.reason&&this.onServerDisconnectError(t)}let t=Rt(e.reason);this.scheduleReconnect(t)}}socketState(){return this.socket.state}sendMessage(e){let t={type:e.type,...e.type===`Authenticate`&&e.tokenType===`User`?{value:`...${e.value.slice(-7)}`}:{}};if(this.socket.state===`ready`&&this.socket.paused===`no`){let n=Et(e),r=JSON.stringify(n),i=!1;try{this.socket.ws.send(r),i=!0}catch(e){this.logger.log(`Failed to send message on WebSocket, reconnecting: ${e}`),this.closeAndReconnect(`FailedToSendMessage`)}return this._logVerbose(`${i?`sent`:`failed to send`} message with type ${e.type}: ${JSON.stringify(t)}`),!0}return this._logVerbose(`message not sent (socket state: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}): ${JSON.stringify(t)}`),!1}resetServerInactivityTimeout(){this.socket.state!==`terminated`&&(this.reconnectDueToServerInactivityTimeout!==null&&(clearTimeout(this.reconnectDueToServerInactivityTimeout),this.reconnectDueToServerInactivityTimeout=null),this.reconnectDueToServerInactivityTimeout=setTimeout(()=>{this.closeAndReconnect(`InactiveServer`)},this.serverInactivityThreshold))}scheduleReconnect(e){this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.socket={state:`disconnected`};let t=this.nextBackoff(e);this.markConnectionStateDirty(),this.logger.log(`Attempting reconnect in ${Math.round(t)}ms`);let n=Ft(),r=setTimeout(()=>{this.scheduledReconnect?.timeout===r&&(this.scheduledReconnect=null,this.connect())},t);this.scheduledReconnect={timeout:r,scheduledAt:n,backoffMs:t}}closeAndReconnect(e){switch(this._logVerbose(`begin closeAndReconnect with reason ${e}`),this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return;case`connecting`:case`ready`:this.lastCloseReason=e,this.close(),this.scheduleReconnect(`client`);return;default:this.socket}}close(){switch(this.transitionChunkBuffer=null,this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return Promise.resolve();case`connecting`:{let e=this.socket.ws;return e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)},new Promise(t=>{e.onclose=()=>{this._logVerbose(`Closed after connecting`),t()},e.onopen=()=>{this._logVerbose(`Opened after connecting`),e.close()}})}case`ready`:{this._logVerbose(`ws.close called`);let e=this.socket.ws;e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)};let t=new Promise(t=>{e.onclose=()=>{t()}});return e.close(),t}default:return this.socket,Promise.resolve()}}terminate(){switch(this.reconnectDueToServerInactivityTimeout&&clearTimeout(this.reconnectDueToServerInactivityTimeout),this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.cleanupNetworkListener(),this.socket.state){case`terminated`:case`stopped`:case`disconnected`:case`connecting`:case`ready`:{let e=this.close();return this.setSocketState({state:`terminated`}),e}default:throw this.socket,Error(`Invalid websocket state: ${this.socket.state}`)}}stop(){switch(this.socket.state){case`terminated`:return Promise.resolve();case`connecting`:case`stopped`:case`disconnected`:case`ready`:{this.cleanupNetworkListener();let e=this.close();return this.socket={state:`stopped`},e}default:return this.socket,Promise.resolve()}}tryRestart(){switch(this.socket.state){case`stopped`:break;case`terminated`:case`connecting`:case`ready`:case`disconnected`:this.logger.logVerbose(`Restart called without stopping first`);return;default:this.socket}this.setupNetworkListener(),this.connect()}pause(){switch(this.socket.state){case`disconnected`:case`stopped`:case`terminated`:return;case`connecting`:case`ready`:this.socket={...this.socket,paused:`yes`};return;default:this.socket;return}}tryReconnectImmediately(){if(this._logVerbose(`tryReconnectImmediately called`),this.socket.state!==`disconnected`){this._logVerbose(`tryReconnectImmediately called but socket state is ${this.socket.state}, no action taken`);return}let e=null;if(this.scheduledReconnect){let t=Ft()-this.scheduledReconnect.scheduledAt;e=Math.max(0,this.scheduledReconnect.backoffMs-t),this._logVerbose(`would have waited ${Math.round(e)}ms more (backoff was ${Math.round(this.scheduledReconnect.backoffMs)}ms, elapsed ${Math.round(t)}ms)`),clearTimeout(this.scheduledReconnect.timeout),this.scheduledReconnect=null,this._logVerbose(`canceled scheduled reconnect`)}this.logger.log(`Network recovery detected, reconnecting immediately`),this.pendingNetworkRecoveryInfo=e===null?null:{timeSavedMs:e},this.connect()}resume(){switch(this.socket.state){case`connecting`:this.socket={...this.socket,paused:`no`};return;case`ready`:this.socket.paused===`uninitialized`?(this.socket={...this.socket,paused:`no`},this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:Ft()})):this.socket.paused===`yes`&&(this.socket={...this.socket,paused:`no`},this.onResume());return;case`terminated`:case`stopped`:case`disconnected`:return;default:this.socket}this.connect()}connectionState(){return{isConnected:this.socket.state===`ready`,hasEverConnected:this._hasEverConnected,connectionCount:this.connectionCount,connectionRetries:this.retries}}_logVerbose(e){this.logger.logVerbose(e)}nextBackoff(e){let t=(e===`client`?100:e===`Unknown`?this.defaultInitialBackoff:Lt[e].timeout)*2**this.retries;this.retries+=1;let n=Math.min(t,this.maxBackoff);return n+n*(Math.random()-.5)}reportLargeTransition({transition:e,messageLength:t}){if(e.clientClockSkew===void 0||e.serverTs===void 0)return;let n=Ft()-e.clientClockSkew-e.serverTs/1e6,r=`${Math.round(n)}ms`,i=`${Math.round(t/1e4)/100}MB`,a=t/(n/1e3),o=`${Math.round(a/1e4)/100}MB per second`;this._logVerbose(`received ${i} transition in ${r} at ${o}`),t>2e7?this.logger.log(`received query results totaling more that 20MB (${i}) which will take a long time to download on slower connections`):n>2e4&&this.logger.log(`received query results totaling ${i} which took more than 20s to arrive (${r})`),this.debug&&this.sendMessage({type:`Event`,eventType:`ClientReceivedTransition`,event:{transitionTransitTime:n,messageLength:t}})}};function Bt(){return Vt()}function Vt(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}var Ht=class extends Error{};Ht.prototype.name=`InvalidTokenError`;function Ut(e){return decodeURIComponent(atob(e).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n=`0`+n),`%`+n}))}function Wt(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`);switch(t.length%4){case 0:break;case 2:t+=`==`;break;case 3:t+=`=`;break;default:throw Error(`base64 string is not of the correct length`)}try{return Ut(t)}catch{return atob(t)}}function Gt(e,t){if(typeof e!=`string`)throw new Ht(`Invalid token specified: must be a string`);t||={};let n=t.header===!0?0:1,r=e.split(`.`)[n];if(typeof r!=`string`)throw new Ht(`Invalid token specified: missing part #${n+1}`);let i;try{i=Wt(r)}catch(e){throw new Ht(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(i)}catch(e){throw new Ht(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}var Kt=Object.defineProperty,qt=(e,t,n)=>t in e?Kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jt=(e,t,n)=>qt(e,typeof t==`symbol`?t:t+``,n),Yt=480*60*60*1e3,Xt=2,Zt=class{constructor(e,t,n){Jt(this,`authState`,{state:`noAuth`}),Jt(this,`configVersion`,0),Jt(this,`syncState`),Jt(this,`authenticate`),Jt(this,`stopSocket`),Jt(this,`tryRestartSocket`),Jt(this,`pauseSocket`),Jt(this,`resumeSocket`),Jt(this,`clearAuth`),Jt(this,`logger`),Jt(this,`refreshTokenLeewaySeconds`),Jt(this,`lastRefreshChange`),Jt(this,`tokenConfirmationAttempts`,0),this.syncState=e,this.authenticate=t.authenticate,this.stopSocket=t.stopSocket,this.tryRestartSocket=t.tryRestartSocket,this.pauseSocket=t.pauseSocket,this.resumeSocket=t.resumeSocket,this.clearAuth=t.clearAuth,this.logger=n.logger,this.refreshTokenLeewaySeconds=n.refreshTokenLeewaySeconds,this.lastRefreshChange=!1}notifyRefreshChange(e){this.authState.state!==`noAuth`&&this.authState.state!==`initialRefetch`&&this.authState.config.onRefreshChange&&this.lastRefreshChange!==e&&(this.lastRefreshChange=e,this.authState.config.onRefreshChange(e))}async setConfig(e,t,n){this.resetAuthState(),this._logVerbose(`pausing WS for auth token fetch`),this.pauseSocket();let r=await this.fetchTokenAndGuardAgainstRace(e,{forceRefreshToken:!1});if(r.isFromOutdatedConfig)return;let i={fetchToken:e,onAuthChange:t,onRefreshChange:n};r.value?(this.setAuthState({state:`waitingForServerConfirmationOfCachedToken`,config:i,hasRetried:!1}),this.authenticate(r.value)):(this.setAuthState({state:`initialRefetch`,config:i}),await this.refetchToken()),this._logVerbose(`resuming WS after auth token fetch`),this.resumeSocket()}onTransition(e){if(this.syncState.isCurrentOrNewerAuthVersion(e.endVersion.identity)&&!(e.endVersion.identity<=e.startVersion.identity)){if(this._logVerbose(`auth state is ${this.authState.state} when handling transition`),this.syncState.markAuthCompletion(),this.authState.state===`waitingForServerConfirmationOfCachedToken`){this._logVerbose(`server confirmed auth token is valid`),this.refetchToken(),this.authState.config.onAuthChange(!0);return}this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this._logVerbose(`server confirmed new auth token is valid`),this.notifyRefreshChange(!1),this.scheduleTokenRefetch(this.authState.token),this.tokenConfirmationAttempts=0,this.authState.hadAuth||this.authState.config.onAuthChange(!0))}}onAuthError(e){if(e.authUpdateAttempted===!1&&(this.authState.state===`waitingForServerConfirmationOfFreshToken`||this.authState.state===`waitingForServerConfirmationOfCachedToken`)){this._logVerbose(`ignoring non-auth token expired error`);return}let{baseVersion:t}=e;if(!this.syncState.isCurrentOrNewerAuthVersion(t+1)){this._logVerbose(`ignoring auth error for previous auth attempt`);return}this.tryToReauthenticate(e)}async tryToReauthenticate(e){if(this._logVerbose(`attempting to reauthenticate: ${e.error}`),this.authState.state===`noAuth`||this.authState.state===`waitingForServerConfirmationOfFreshToken`&&this.tokenConfirmationAttempts>=Xt){this.logger.error(`Failed to authenticate: "${e.error}", check your server auth config`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.authState.state!==`noAuth`&&this.setAndReportAuthFailed(this.authState.config.onAuthChange);return}if(this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this.tokenConfirmationAttempts++,this._logVerbose(`retrying reauthentication, ${Xt-this.tokenConfirmationAttempts} attempts remaining`)),this.notifyRefreshChange(!0),await this.stopSocket(),this.authState.state===`noAuth`)return;let t=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});t.isFromOutdatedConfig||(t.value&&this.syncState.isNewAuth(t.value)?(this.authenticate(t.value),this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,config:this.authState.config,token:t.value,hadAuth:this.authState.state===`notRefetching`||this.authState.state===`waitingForScheduledRefetch`})):(this._logVerbose(`reauthentication failed, could not fetch a new token`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this.tryRestartSocket())}async refetchToken(){if(this.authState.state===`noAuth`)return;this._logVerbose(`refetching auth token`);let e=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});e.isFromOutdatedConfig||(e.value?this.syncState.isNewAuth(e.value)?(this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,hadAuth:this.syncState.hasAuth(),token:e.value,config:this.authState.config}),this.authenticate(e.value)):this.setAuthState({state:`notRefetching`,config:this.authState.config}):(this._logVerbose(`refetching token failed`),this.syncState.hasAuth()&&this.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this._logVerbose(`restarting WS after auth token fetch (if currently stopped)`),this.tryRestartSocket())}scheduleTokenRefetch(e){if(this.authState.state===`noAuth`)return;let t=this.decodeToken(e);if(!t){this.logger.error(`Auth token is not a valid JWT, cannot refetch the token`);return}let{iat:n,exp:r}=t;if(!n||!r){this.logger.error(`Auth token does not have required fields, cannot refetch the token`);return}let i=r-n;if(i<=2){this.logger.error(`Auth token does not live long enough, cannot refetch the token`);return}let a=Math.min(Yt,(i-this.refreshTokenLeewaySeconds)*1e3);a<=0&&(this.logger.warn(`Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${i}s`),a=0);let o=setTimeout(()=>{this._logVerbose(`running scheduled token refetch`),this.refetchToken()},a);this.setAuthState({state:`waitingForScheduledRefetch`,refetchTokenTimeoutId:o,config:this.authState.config}),this._logVerbose(`scheduled preemptive auth token refetching in ${a}ms`)}async fetchTokenAndGuardAgainstRace(e,t){let n=++this.configVersion;this._logVerbose(`fetching token with config version ${n}`);let r=await e(t);return this.configVersion===n?{isFromOutdatedConfig:!1,value:r}:(this._logVerbose(`stale config version, expected ${n}, got ${this.configVersion}`),{isFromOutdatedConfig:!0})}stop(){this.resetAuthState(),this.configVersion++,this._logVerbose(`config version bumped to ${this.configVersion}`)}setAndReportAuthFailed(e){e(!1),this.resetAuthState()}resetAuthState(){this.notifyRefreshChange(!1),this.setAuthState({state:`noAuth`})}setAuthState(e){let t=e.state===`waitingForServerConfirmationOfFreshToken`?{hadAuth:e.hadAuth,state:e.state,token:`...${e.token.slice(-7)}`}:{state:e.state};switch(this._logVerbose(`setting auth state to ${JSON.stringify(t)}`),e.state){case`waitingForScheduledRefetch`:case`notRefetching`:case`noAuth`:this.tokenConfirmationAttempts=0;break;case`waitingForServerConfirmationOfFreshToken`:case`waitingForServerConfirmationOfCachedToken`:case`initialRefetch`:break;default:}this.authState.state===`waitingForScheduledRefetch`&&clearTimeout(this.authState.refetchTokenTimeoutId),this.authState=e}decodeToken(e){try{return Gt(e)}catch(e){return this._logVerbose(`Error decoding token: ${e instanceof Error?e.message:`Unknown error`}`),null}}_logVerbose(e){this.logger.logVerbose(`${e} [v${this.configVersion}]`)}},Qt=[`convexClientConstructed`,`convexWebSocketOpen`,`convexFirstMessageReceived`];function $t(e,t){let n={sessionId:t};typeof performance>`u`||!performance.mark||performance.mark(e,{detail:n})}function en(e){let t=e.name.slice(6);return t=t.charAt(0).toLowerCase()+t.slice(1),{name:t,startTime:e.startTime}}function tn(e){if(typeof performance>`u`||!performance.getEntriesByName)return[];let t=[];for(let n of Qt){let r=performance.getEntriesByName(n).filter(e=>e.entryType===`mark`).filter(t=>t.detail.sessionId===e);t.push(...r)}return t.map(en)}var nn=Object.defineProperty,rn=(e,t,n)=>t in e?nn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,an=(e,t,n)=>rn(e,typeof t==`symbol`?t:t+``,n),on=class{constructor(e,t,n){if(an(this,`address`),an(this,`state`),an(this,`requestManager`),an(this,`webSocketManager`),an(this,`authenticationManager`),an(this,`remoteQuerySet`),an(this,`optimisticQueryResults`),an(this,`_transitionHandlerCounter`,0),an(this,`_nextRequestId`),an(this,`_onTransitionFns`,new Map),an(this,`_sessionId`),an(this,`firstMessageReceived`,!1),an(this,`debug`),an(this,`logger`),an(this,`maxObservedTimestamp`),an(this,`connectionStateSubscribers`,new Map),an(this,`nextConnectionStateSubscriberId`,0),an(this,`_lastPublishedConnectionState`),an(this,`markConnectionStateDirty`,()=>{Promise.resolve().then(()=>{let e=this.connectionState();if(JSON.stringify(e)!==JSON.stringify(this._lastPublishedConnectionState)){this._lastPublishedConnectionState=e;for(let t of this.connectionStateSubscribers.values())t(e)}})}),an(this,`mark`,e=>{this.debug&&$t(e,this.sessionId)}),typeof e==`object`)throw Error(`Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly.`);n?.skipConvexDeploymentUrlCheck!==!0&&T(e),n={...n};let r=n.authRefreshTokenLeewaySeconds??10,i=n.webSocketConstructor;if(!i&&typeof WebSocket>`u`)throw Error(`No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient`);i||=WebSocket,this.debug=n.reportDebugInfoToConvex??!1,this.address=e,this.logger=n.logger===!1?Pe({verbose:n.verbose??!1}):n.logger!==!0&&n.logger?n.logger:Ne({verbose:n.verbose??!1});let a=e.search(`://`);if(a===-1)throw Error(`Provided address was not an absolute URL.`);let o=e.substring(a+3),s=e.substring(0,a),c;if(s===`http`)c=`ws`;else if(s===`https`)c=`wss`;else throw Error(`Unknown parent protocol ${s}`);let l=`${c}://${o}/api/${Ee}/sync`;this.state=new Ge,this.remoteQuerySet=new St(e=>this.state.queryPath(e),this.logger),this.requestManager=new Ye(this.logger,this.markConnectionStateDirty);let u=()=>{this.webSocketManager.pause(),this.state.pause()};this.authenticationManager=new Zt(this.state,{authenticate:e=>{let t=this.state.setAuth(e);return this.webSocketManager.sendMessage(t),t.baseVersion},stopSocket:()=>this.webSocketManager.stop(),tryRestartSocket:()=>this.webSocketManager.tryRestart(),pauseSocket:u,resumeSocket:()=>this.webSocketManager.resume(),clearAuth:()=>{this.clearAuth()}},{logger:this.logger,refreshTokenLeewaySeconds:r}),this.optimisticQueryResults=new lt,this.addOnTransitionHandler(e=>{t(e.queries.map(e=>e.token))}),this._nextRequestId=0,this._sessionId=Bt();let{unsavedChangesWarning:d}=n;if(typeof window>`u`||window.addEventListener===void 0){if(d===!0)throw Error(`unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options.`)}else d!==!1&&window.addEventListener(`beforeunload`,e=>{if(this.requestManager.hasIncompleteRequests()){e.preventDefault();let t=`Are you sure you want to leave? Your changes may not be saved.`;return(e||window.event).returnValue=t,t}});this.webSocketManager=new zt(l,{onOpen:e=>{this.mark(`convexWebSocketOpen`),this.webSocketManager.sendMessage({...e,type:`Connect`,sessionId:this._sessionId,maxObservedTimestamp:this.maxObservedTimestamp}),this.remoteQuerySet=new St(e=>this.state.queryPath(e),this.logger);let[t,n]=this.state.restart();n&&this.webSocketManager.sendMessage(n),this.webSocketManager.sendMessage(t);for(let e of this.requestManager.restart())this.webSocketManager.sendMessage(e)},onResume:()=>{let[e,t]=this.state.resume();t&&this.webSocketManager.sendMessage(t),e&&this.webSocketManager.sendMessage(e);for(let e of this.requestManager.resume())this.webSocketManager.sendMessage(e)},onMessage:e=>{switch(this.firstMessageReceived||(this.firstMessageReceived=!0,this.mark(`convexFirstMessageReceived`),this.reportMarks()),e.type){case`Transition`:{this.observedTimestamp(e.endVersion.ts),this.authenticationManager.onTransition(e),this.remoteQuerySet.transition(e),this.state.transition(e);let t=this.requestManager.removeCompleted(this.remoteQuerySet.timestamp());this.notifyOnQueryResultChanges(t);break}case`MutationResponse`:{e.success&&this.observedTimestamp(e.ts);let t=this.requestManager.onResponse(e);t!==null&&this.notifyOnQueryResultChanges(new Map([[t.requestId,t.result]]));break}case`ActionResponse`:this.requestManager.onResponse(e);break;case`AuthError`:this.authenticationManager.onAuthError(e);break;case`FatalError`:{let t=Ie(this.logger,e.error);throw this.webSocketManager.terminate(),t}default:}return{hasSyncedPastLastReconnect:this.hasSyncedPastLastReconnect()}},onServerDisconnectError:n.onServerDisconnectError},i,this.logger,this.markConnectionStateDirty,this.debug),this.mark(`convexClientConstructed`),n.expectAuth&&u()}hasSyncedPastLastReconnect(){return this.requestManager.hasSyncedPastLastReconnect()&&this.state.hasSyncedPastLastReconnect()}observedTimestamp(e){(this.maxObservedTimestamp===void 0||this.maxObservedTimestamp.lessThanOrEqual(e))&&(this.maxObservedTimestamp=e)}getMaxObservedTimestamp(){return this.maxObservedTimestamp}notifyOnQueryResultChanges(e){let t=this.remoteQuerySet.remoteQueryResults(),n=new Map;for(let[e,r]of t){let t=this.state.queryToken(e);if(t!==null){let i={result:r,udfPath:this.state.queryPath(e),args:this.state.queryArgs(e)};n.set(t,i)}}let r=this.optimisticQueryResults.ingestQueryResultsFromServer(n,new Set(e.keys()));this.handleTransition({queries:r.map(e=>({token:e,modification:{kind:`Updated`,result:this.optimisticQueryResults.rawQueryResult(e)}})),reflectedMutations:Array.from(e).map(([e,t])=>({requestId:e,result:t})),timestamp:this.remoteQuerySet.timestamp()})}handleTransition(e){for(let t of this._onTransitionFns.values())t(e)}addOnTransitionHandler(e){let t=this._transitionHandlerCounter++;return this._onTransitionFns.set(t,e),()=>this._onTransitionFns.delete(t)}getCurrentAuthClaims(){let e=this.state.getAuth(),t={};if(e&&e.tokenType===`User`)try{t=e?Gt(e.value):{}}catch{t={}}else return;return{token:e.value,decoded:t}}setAuth(e,t,n){this.authenticationManager.setConfig(e,t,n)}hasAuth(){return this.state.hasAuth()}setAdminAuth(e,t){let n=this.state.setAdminAuth(e,t);this.webSocketManager.sendMessage(n)}clearAuth(){let e=this.state.clearAuth();this.webSocketManager.sendMessage(e)}subscribe(e,t,n){let r=w(t),{modification:i,queryToken:a,unsubscribe:o}=this.state.subscribe(e,r,n?.journal,n?.componentPath);return i!==null&&this.webSocketManager.sendMessage(i),{queryToken:a,unsubscribe:()=>{let e=o();e&&this.webSocketManager.sendMessage(e)}}}localQueryResult(e,t){let n=Be(e,w(t));return this.optimisticQueryResults.queryResult(n)}localQueryResultByToken(e){return this.optimisticQueryResults.queryResult(e)}hasLocalQueryResultByToken(e){return this.optimisticQueryResults.hasQueryResult(e)}localQueryLogs(e,t){let n=Be(e,w(t));return this.optimisticQueryResults.queryLogs(n)}queryJournal(e,t){let n=Be(e,w(t));return this.state.queryJournal(n)}connectionState(){let e=this.webSocketManager.connectionState();return{hasInflightRequests:this.requestManager.hasInflightRequests(),isWebSocketConnected:e.isConnected,hasEverConnected:e.hasEverConnected,connectionCount:e.connectionCount,connectionRetries:e.connectionRetries,timeOfOldestInflightRequest:this.requestManager.timeOfOldestInflightRequest(),inflightMutations:this.requestManager.inflightMutations(),inflightActions:this.requestManager.inflightActions()}}subscribeToConnectionState(e){let t=this.nextConnectionStateSubscriberId++;return this.connectionStateSubscribers.set(t,e),()=>{this.connectionStateSubscribers.delete(t)}}async mutation(e,t,n){let r=await this.mutationInternal(e,t,n);if(!r.success)throw r.errorData===void 0?Error(Le(`mutation`,e,r)):Re(r,new Te(Le(`mutation`,e,r)));return r.value}async mutationInternal(e,t,n,r){let{mutationPromise:i}=this.enqueueMutation(e,t,n,r);return i}enqueueMutation(e,t,n,r){let i=w(t);this.tryReportLongDisconnect();let a=this.nextRequestId;if(this._nextRequestId++,n!==void 0){let e=n.optimisticUpdate;if(e!==void 0){let t=this.optimisticQueryResults.applyOptimisticUpdate(t=>{e(t,i)instanceof Promise&&this.logger.warn(`Optimistic update handler returned a Promise. Optimistic updates should be synchronous.`)},a).map(e=>{let t=this.localQueryResultByToken(e);return{token:e,modification:{kind:`Updated`,result:t===void 0?void 0:{success:!0,value:t,logLines:[]}}}});this.handleTransition({queries:t,reflectedMutations:[],timestamp:this.remoteQuerySet.timestamp()})}}let o={type:`Mutation`,requestId:a,udfPath:e,componentPath:r,args:[q(i)]},s=this.webSocketManager.sendMessage(o);return{requestId:a,mutationPromise:this.requestManager.request(o,s)}}async action(e,t){let n=await this.actionInternal(e,t);if(!n.success)throw n.errorData===void 0?Error(Le(`action`,e,n)):Re(n,new Te(Le(`action`,e,n)));return n.value}async actionInternal(e,t,n){let r=w(t),i=this.nextRequestId;this._nextRequestId++,this.tryReportLongDisconnect();let a={type:`Action`,requestId:i,udfPath:e,componentPath:n,args:[q(r)]},o=this.webSocketManager.sendMessage(a);return this.requestManager.request(a,o)}async close(){return this.authenticationManager.stop(),this.webSocketManager.terminate()}get url(){return this.address}get nextRequestId(){return this._nextRequestId}get sessionId(){return this._sessionId}reportMarks(){if(this.debug){let e=tn(this.sessionId);this.webSocketManager.sendMessage({type:`Event`,eventType:`ClientConnect`,event:e})}}tryReportLongDisconnect(){if(!this.debug)return;let e=this.connectionState().timeOfOldestInflightRequest;if(e===null||Date.now()-e.getTime()<=60*1e3)return;let t=`${this.address}/api/debug_event`;fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`,"Convex-Client":`npm-${Ee}`},body:JSON.stringify({event:`LongWebsocketDisconnect`})}).then(e=>{e.ok||this.logger.warn(`Analytics request failed with response:`,e.body)}).catch(e=>{this.logger.warn(`Analytics response failed with error:`,e)})}};function sn(e){if(typeof e!=`object`||!e||!Array.isArray(e.page)||typeof e.isDone!=`boolean`||typeof e.continueCursor!=`string`)throw Error(`Not a valid paginated query result: ${e?.toString()}`);return e}var cn=Object.defineProperty,ln=(e,t,n)=>t in e?cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,un=(e,t,n)=>ln(e,typeof t==`symbol`?t:t+``,n),dn=class{constructor(e,t){this.client=e,this.onTransition=t,un(this,`paginatedQuerySet`,new Map),un(this,`lastTransitionTs`),this.lastTransitionTs=pt.fromNumber(0),this.client.addOnTransitionHandler(e=>this.onBaseTransition(e))}subscribe(e,t,n){let r=ze(e),i=Ve(r,t,n),a=()=>this.removePaginatedQuerySubscriber(i),o=this.paginatedQuerySet.get(i);return o?(o.numSubscribers+=1,{paginatedQueryToken:i,unsubscribe:a}):(this.paginatedQuerySet.set(i,{token:i,canonicalizedUdfPath:r,args:t,numSubscribers:1,options:{initialNumItems:n.initialNumItems},nextPageKey:0,pageKeys:[],pageKeyToQuery:new Map,ongoingSplits:new Map,skip:!1,id:n.id}),this.addPageToPaginatedQuery(i,null,n.initialNumItems),{paginatedQueryToken:i,unsubscribe:a})}localQueryResult(e,t,n){let r=Ve(ze(e),t,n);return this.localQueryResultByToken(r)}localQueryResultByToken(e){let t=this.paginatedQuerySet.get(e);if(!t)return;let n=this.activePageQueryTokens(t);if(n.length===0)return{results:[],status:`LoadingFirstPage`,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)};let r=[],i=!1,a=!1;for(let e of n){let t=this.client.localQueryResultByToken(e);if(t===void 0){i=!0,a=!1;continue}let n=sn(t);r=r.concat(n.page),a=!!n.isDone}let o;return o=i?r.length===0?`LoadingFirstPage`:`LoadingMore`:a?`Exhausted`:`CanLoadMore`,{results:r,status:o,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)}}onBaseTransition(e){let t=e.queries.map(e=>e.token),n=this.queriesContainingTokens(t),r=[];n.length>0&&(this.processPaginatedQuerySplits(n,e=>this.client.localQueryResultByToken(e)),r=n.map(e=>({token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}})));let i={...e,paginatedQueries:r};this.onTransition(i)}loadMoreOfPaginatedQuery(e,t){this.mustGetPaginatedQuery(e);let n=this.queryTokenForLastPageOfPaginatedQuery(e),r=this.client.localQueryResultByToken(n);if(!r)return!1;let i=sn(r);if(i.isDone)return!1;this.addPageToPaginatedQuery(e,i.continueCursor,t);let a={timestamp:this.lastTransitionTs,reflectedMutations:[],queries:[],paginatedQueries:[{token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}}]};return this.onTransition(a),!0}queriesContainingTokens(e){if(e.length===0)return[];let t=[],n=new Set(e);for(let[e,r]of this.paginatedQuerySet)for(let i of this.allQueryTokens(r))if(n.has(i)){t.push(e);break}return t}processPaginatedQuerySplits(e,t){for(let n of e){let e=this.mustGetPaginatedQuery(n),{ongoingSplits:r,pageKeyToQuery:i,pageKeys:a}=e;for(let[n,[a,o]]of r)t(i.get(a).queryToken)!==void 0&&t(i.get(o).queryToken)!==void 0&&this.completePaginatedQuerySplit(e,n,a,o);for(let n of a){if(r.has(n))continue;let a=i.get(n).queryToken,o=t(a);if(!o)continue;let s=sn(o);s.splitCursor&&(s.pageStatus===`SplitRecommended`||s.pageStatus===`SplitRequired`||s.page.length>e.options.initialNumItems*2)&&this.splitPaginatedQueryPage(e,n,s.splitCursor,s.continueCursor)}}}splitPaginatedQueryPage(e,t,n,r){let i=e.nextPageKey++,a=e.nextPageKey++,o={cursor:r,numItems:e.options.initialNumItems,id:e.id},s=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:null,endCursor:n}});e.pageKeyToQuery.set(i,s);let c=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:n,endCursor:r}});e.pageKeyToQuery.set(a,c),e.ongoingSplits.set(t,[i,a])}addPageToPaginatedQuery(e,t,n){let r=this.mustGetPaginatedQuery(e),i=r.nextPageKey++,a={cursor:t,numItems:n,id:r.id},o={...r.args,paginationOpts:a},s=this.client.subscribe(r.canonicalizedUdfPath,o);return r.pageKeys.push(i),r.pageKeyToQuery.set(i,s),s}removePaginatedQuerySubscriber(e){let t=this.paginatedQuerySet.get(e);if(t&&(--t.numSubscribers,!(t.numSubscribers>0))){for(let e of t.pageKeyToQuery.values())e.unsubscribe();this.paginatedQuerySet.delete(e)}}completePaginatedQuerySplit(e,t,n,r){let i=e.pageKeyToQuery.get(t);e.pageKeyToQuery.delete(t);let a=e.pageKeys.indexOf(t);e.pageKeys.splice(a,1,n,r),e.ongoingSplits.delete(t),i.unsubscribe()}activePageQueryTokens(e){return e.pageKeys.map(t=>e.pageKeyToQuery.get(t).queryToken)}allQueryTokens(e){return Array.from(e.pageKeyToQuery.values()).map(e=>e.queryToken)}queryTokenForLastPageOfPaginatedQuery(e){let t=this.mustGetPaginatedQuery(e),n=t.pageKeys[t.pageKeys.length-1];if(n===void 0)throw Error(`No pages for paginated query ${e}`);return t.pageKeyToQuery.get(n).queryToken}mustGetPaginatedQuery(e){let t=this.paginatedQuerySet.get(e);if(!t)throw Error(`paginated query no longer exists for token `+e);return t}},X=c(d(),1);function fn({getCurrentValue:e,subscribe:t}){let[n,r]=(0,X.useState)(()=>({getCurrentValue:e,subscribe:t,value:e()})),i=n.value;return(n.getCurrentValue!==e||n.subscribe!==t)&&(i=e(),r({getCurrentValue:e,subscribe:t,value:i})),(0,X.useEffect)(()=>{let n=!1,i=()=>{n||r(n=>{if(n.getCurrentValue!==e||n.subscribe!==t)return n;let r=e();return n.value===r?n:{...n,value:r}})},a=t(i);return i(),()=>{n=!0,a()}},[e,t]),i}var pn=Object.defineProperty,mn=(e,t,n)=>t in e?pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hn=(e,t,n)=>mn(e,typeof t==`symbol`?t:t+``,n),gn=5e3;if(X.default===void 0)throw Error(`Required dependency 'react' not found`);function _n(e,t,n){function r(r){return En(r),t.mutation(e,r,{optimisticUpdate:n})}return r.withOptimisticUpdate=function(r){if(n!==void 0)throw Error(`Already specified optimistic update for mutation ${tt(e)}`);return _n(e,t,r)},r}function vn(e,t){return function(n){return t.action(e,n)}}var yn=class{constructor(e,t){if(hn(this,`address`),hn(this,`cachedSync`),hn(this,`cachedPaginatedQueryClient`),hn(this,`listeners`),hn(this,`options`),hn(this,`closed`,!1),hn(this,`_logger`),hn(this,`adminAuth`),hn(this,`fakeUserIdentity`),e===void 0)throw Error(`No address provided to ConvexReactClient.
If trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/
If running locally, make sure to run \`convex dev\` and ensure the .env.local file is populated.`);if(typeof e!=`string`)throw Error(`ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof e} instead.`);if(!e.includes(`://`))throw Error(`Provided address was not an absolute URL.`);this.address=e,this.listeners=new Map,this._logger=t?.logger===!1?Pe({verbose:t?.verbose??!1}):t?.logger!==!0&&t?.logger?t.logger:Ne({verbose:t?.verbose??!1}),this.options={...t,logger:this._logger}}get url(){return this.address}get sync(){if(this.closed)throw Error(`ConvexReactClient has already been closed.`);return this.cachedSync?this.cachedSync:(this.cachedSync=new on(this.address,()=>{},this.options),this.adminAuth&&this.cachedSync.setAdminAuth(this.adminAuth,this.fakeUserIdentity),this.cachedPaginatedQueryClient=new dn(this.cachedSync,e=>this.handleTransition(e)),this.cachedSync)}get paginatedQueryClient(){if(this.sync,this.cachedPaginatedQueryClient)return this.cachedPaginatedQueryClient;throw Error(`Should already be instantiated`)}setAuth(e,t,n){if(typeof e==`string`)throw Error(`Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication.`);this.sync.setAuth(e,t??(()=>{}),n)}clearAuth(){this.sync.clearAuth()}setAdminAuth(e,t){if(this.adminAuth=e,this.fakeUserIdentity=t,this.closed)throw Error(`ConvexReactClient has already been closed.`);this.cachedSync&&this.sync.setAdminAuth(e,t)}watchQuery(e,...t){let[n,r]=t,i=tt(e);return{onUpdate:e=>{let{queryToken:t,unsubscribe:a}=this.sync.subscribe(i,n,r),o=this.listeners.get(t);return o===void 0?this.listeners.set(t,new Set([e])):o.add(e),()=>{if(this.closed)return;let n=this.listeners.get(t);n.delete(e),n.size===0&&this.listeners.delete(t),a()}},localQueryResult:()=>{if(this.cachedSync)return this.cachedSync.localQueryResult(i,n)},localQueryLogs:()=>{if(this.cachedSync)return this.cachedSync.localQueryLogs(i,n)},journal:()=>{if(this.cachedSync)return this.cachedSync.queryJournal(i,n)}}}prewarmQuery(e){let t=e.extendSubscriptionFor??gn,n=this.watchQuery(e.query,e.args||{}).onUpdate(()=>{});setTimeout(n,t)}watchPaginatedQuery(e,t,n){let r=tt(e);return{onUpdate:e=>{let{paginatedQueryToken:i,unsubscribe:a}=this.paginatedQueryClient.subscribe(r,t||{},n),o=this.listeners.get(i);return o===void 0?this.listeners.set(i,new Set([e])):o.add(e),()=>{if(this.closed)return;let t=this.listeners.get(i);t.delete(e),t.size===0&&this.listeners.delete(i),a()}},localQueryResult:()=>this.paginatedQueryClient.localQueryResult(r,t,n)}}mutation(e,...t){let[n,r]=t,i=tt(e);return this.sync.mutation(i,n,r)}action(e,...t){let n=tt(e);return this.sync.action(n,...t)}query(e,...t){let n=this.watchQuery(e,...t),r=n.localQueryResult();return r===void 0?new Promise((e,t)=>{let r=n.onUpdate(()=>{r();try{e(n.localQueryResult())}catch(e){t(e)}})}):Promise.resolve(r)}connectionState(){return this.sync.connectionState()}subscribeToConnectionState(e){return this.sync.subscribeToConnectionState(e)}get logger(){return this._logger}async close(){if(this.closed=!0,this.listeners=new Map,this.cachedPaginatedQueryClient&&=void 0,this.cachedSync){let e=this.cachedSync;this.cachedSync=void 0,await e.close()}}handleTransition(e){let t=e.queries.map(e=>e.token),n=e.paginatedQueries.map(e=>e.token);this.transition([...t,...n])}transition(e){for(let t of e){let e=this.listeners.get(t);if(e)for(let t of e)t()}}},bn=X.createContext(void 0);function xn(){return(0,X.useContext)(bn)}var Sn=({client:e,children:t})=>X.createElement(bn.Provider,{value:e},t);function Cn(e,...t){let n=t[0]===`skip`,r=t[0]===`skip`?{}:w(t[0]),i=typeof e==`string`?nt(e):e,a=tt(i),o=jn((0,X.useMemo)(()=>n?{}:{query:{query:i,args:r}},[JSON.stringify(q(r)),a,n])).query;if(o instanceof Error)throw o;return o}function wn(e){let t=typeof e==`string`?nt(e):e,n=(0,X.useContext)(bn);if(n===void 0)throw Error("Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return(0,X.useMemo)(()=>_n(t,n),[n,tt(t)])}function Tn(e){let t=(0,X.useContext)(bn),n=typeof e==`string`?nt(e):e;if(t===void 0)throw Error("Could not find Convex client! `useAction` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return(0,X.useMemo)(()=>vn(n,t),[t,tt(n)])}function En(e){if(typeof e==`object`&&e&&`bubbles`in e&&`persist`in e&&`isDefaultPrevented`in e)throw Error("Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler.")}var Dn=Object.defineProperty,On=(e,t,n)=>t in e?Dn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kn=(e,t,n)=>On(e,typeof t==`symbol`?t:t+``,n),An=class{constructor(e){kn(this,`createWatch`),kn(this,`queries`),kn(this,`listeners`),this.createWatch=e,this.queries={},this.listeners=new Set}setQueries(e){for(let t of Object.keys(e)){let{query:n,args:r,paginationOptions:i}=e[t];if(tt(n),this.queries[t]===void 0)this.addQuery(t,n,r,i?{paginationOptions:i}:{});else{let e=this.queries[t];(tt(n)!==tt(e.query)||JSON.stringify(q(r))!==JSON.stringify(q(e.args))||JSON.stringify(i)!==JSON.stringify(e.paginationOptions))&&(this.removeQuery(t),this.addQuery(t,n,r,i?{paginationOptions:i}:{}))}}for(let t of Object.keys(this.queries))e[t]===void 0&&this.removeQuery(t)}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}getLocalResults(e){let t={};for(let n of Object.keys(e)){let{query:r,args:i}=e[n],a=e[n].paginationOptions;tt(r);let o=this.createWatch(r,i,a?{paginationOptions:a}:{}),s;try{s=o.localQueryResult()}catch(e){if(e instanceof Error)s=e;else throw e}t[n]=s}return t}setCreateWatch(e){this.createWatch=e;for(let e of Object.keys(this.queries)){let{query:t,args:n,watch:r,paginationOptions:i}=this.queries[e],a=`journal`in r?r.journal():void 0;this.removeQuery(e),this.addQuery(e,t,n,{...a?{journal:a}:[],...i?{paginationOptions:i}:{}})}}destroy(){for(let e of Object.keys(this.queries))this.removeQuery(e);this.listeners=new Set}addQuery(e,t,n,{paginationOptions:r,journal:i}){if(this.queries[e]!==void 0)throw Error(`Tried to add a new query with identifier ${e} when it already exists.`);let a=this.createWatch(t,n,{...i?{journal:i}:[],...r?{paginationOptions:r}:{}}),o=a.onUpdate(()=>this.notifyListeners());this.queries[e]={query:t,args:n,watch:a,unsubscribe:o,...r?{paginationOptions:r}:{}}}removeQuery(e){let t=this.queries[e];if(t===void 0)throw Error(`No query found with identifier ${e}.`);t.unsubscribe(),delete this.queries[e]}notifyListeners(){for(let e of this.listeners)e()}};function jn(e){let t=xn();if(t===void 0)throw Error("Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return Mn(e,(0,X.useMemo)(()=>(e,n,{journal:r,paginationOptions:i})=>i?t.watchPaginatedQuery(e,n,i):t.watchQuery(e,n,r?{journal:r}:{}),[t]))}function Mn(e,t){let[n]=(0,X.useState)(()=>new An(t));return n.createWatch!==t&&n.setCreateWatch(t),(0,X.useEffect)(()=>()=>n.destroy(),[n]),fn((0,X.useMemo)(()=>({getCurrentValue:()=>n.getLocalResults(e),subscribe:t=>(n.setQueries(e),n.subscribe(t))}),[n,e]))}var Nn=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),Pn=o(((e,t)=>{t.exports=Nn()})),Fn=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),In=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Fn()})),Ln=o((e=>{var t=Pn(),n=d(),r=In();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,m=Symbol.for(`react.element`),h=Symbol.for(`react.transitional.element`),g=Symbol.for(`react.portal`),_=Symbol.for(`react.fragment`),v=Symbol.for(`react.strict_mode`),y=Symbol.for(`react.profiler`),b=Symbol.for(`react.consumer`),x=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),D=Symbol.for(`react.activity`),O=Symbol.for(`react.memo_cache_sentinel`),k=Symbol.iterator;function A(e){return typeof e!=`object`||!e?null:(e=k&&e[k]||e[`@@iterator`],typeof e==`function`?e:null)}var j=Symbol.for(`react.client.reference`);function M(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case _:return`Fragment`;case y:return`Profiler`;case v:return`StrictMode`;case C:return`Suspense`;case w:return`SuspenseList`;case D:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case g:return`Portal`;case x:return e.displayName||`Context`;case b:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?M(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return M(e(t))}catch{}}return null}var N=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},L=[],R=-1;function z(e){return{current:e}}function B(e){0>R||(e.current=L[R],L[R]=null,R--)}function V(e,t){R++,L[R]=e.current,e.current=t}var H=z(null),U=z(null),W=z(null),G=z(null);function K(e,t){switch(V(W,t),V(U,e),V(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}B(H),V(H,e)}function ee(){B(H),B(U),B(W)}function q(e){e.memoizedState!==null&&V(G,e);var t=H.current,n=Hd(t,e.type);t!==n&&(V(U,e),V(H,n))}function te(e){U.current===e&&(B(H),B(U)),G.current===e&&(B(G),Qf._currentValue=I)}var J,Y;function ne(e){if(J===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);J=t&&t[1]||``,Y=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+J+e+Y}var re=!1;function ie(e,t){if(!e||re)return``;re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{re=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ne(n):``}function ae(e,t){switch(e.tag){case 26:case 27:case 5:return ne(e.type);case 16:return ne(`Lazy`);case 13:return e.child!==t&&t!==null?ne(`Suspense Fallback`):ne(`Suspense`);case 19:return ne(`SuspenseList`);case 0:case 15:return ie(e.type,!1);case 11:return ie(e.type.render,!1);case 1:return ie(e.type,!0);case 31:return ne(`Activity`);default:return``}}function oe(e){try{var t=``,n=null;do t+=ae(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var se=Object.prototype.hasOwnProperty,ce=t.unstable_scheduleCallback,le=t.unstable_cancelCallback,ue=t.unstable_shouldYield,de=t.unstable_requestPaint,fe=t.unstable_now,pe=t.unstable_getCurrentPriorityLevel,me=t.unstable_ImmediatePriority,he=t.unstable_UserBlockingPriority,ge=t.unstable_NormalPriority,_e=t.unstable_LowPriority,ve=t.unstable_IdlePriority,ye=t.log,be=t.unstable_setDisableYieldValue,xe=null,Se=null;function Ce(e){if(typeof ye==`function`&&be(e),Se&&typeof Se.setStrictMode==`function`)try{Se.setStrictMode(xe,e)}catch{}}var we=Math.clz32?Math.clz32:De,Te=Math.log,Ee=Math.LN2;function De(e){return e>>>=0,e===0?32:31-(Te(e)/Ee|0)|0}var Oe=256,ke=262144,Ae=4194304;function je(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Me(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=je(n))):i=je(o):i=je(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=je(n))):i=je(o)):i=je(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ne(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Ae;return Ae<<=1,!(Ae&62914560)&&(Ae=4194304),e}function Ie(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Le(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Re(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-we(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ze(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ze(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-we(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Be(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-we(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Ve(e,t){var n=t&-t;return n=n&42?1:He(n),(n&(e.suspendedLanes|t))===0?n:0}function He(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ue(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function We(){var e=F.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function Ge(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Ke=Math.random().toString(36).slice(2),qe=`__reactFiber$`+Ke,Je=`__reactProps$`+Ke,Ye=`__reactContainer$`+Ke,Xe=`__reactEvents$`+Ke,Ze=`__reactListeners$`+Ke,Qe=`__reactHandles$`+Ke,$e=`__reactResources$`+Ke,et=`__reactMarker$`+Ke;function tt(e){delete e[qe],delete e[Je],delete e[Xe],delete e[Ze],delete e[Qe]}function nt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[qe])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function rt(e){if(e=e[qe]||e[Ye]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function it(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function at(e){var t=e[$e];return t||=e[$e]={hoistableStyles:new Map,hoistableScripts:new Map},t}function ot(e){e[et]=!0}var st=new Set,ct={};function lt(e,t){ut(e,t),ut(e+`Capture`,t)}function ut(e,t){for(ct[e]=t,e=0;e<t.length;e++)st.add(t[e])}var dt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),ft={},pt={};function mt(e){return se.call(pt,e)?!0:se.call(ft,e)?!1:dt.test(e)?pt[e]=!0:(ft[e]=!0,!1)}function ht(e,t,n){if(mt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function gt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function _t(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function yt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xt(e){if(!e._valueTracker){var t=yt(e)?`checked`:`value`;e._valueTracker=bt(e,t,``+e[t])}}function St(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=yt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ct(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var wt=/[\n"\\]/g;function Tt(e){return e.replace(wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Et(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+vt(t)):e.value!==``+vt(t)&&(e.value=``+vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ot(e,o,vt(n)):Ot(e,o,vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+vt(s):e.removeAttribute(`name`)}function Dt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){xt(e);return}n=n==null?``:``+vt(n),t=t==null?n:``+vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),xt(e)}function Ot(e,t,n){t===`number`&&Ct(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function kt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function At(e,t,n){if(t!=null&&(t=``+vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+vt(n)}function jt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(N(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),xt(e)}function Mt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Pt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Nt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Ft(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Pt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Pt(e,o,t[o])}function It(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Lt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Rt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zt(e){return Rt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Bt(){}var Vt=null;function Ht(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ut=null,Wt=null;function Gt(e){var t=rt(e);if(t&&(e=t.stateNode)){var n=e[Je]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Et(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Tt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Je]||null;if(!a)throw Error(i(90));Et(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&St(r)}break a;case`textarea`:At(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&kt(e,!!n.multiple,t,!1)}}}var Kt=!1;function qt(e,t,n){if(Kt)return e(t,n);Kt=!0;try{return e(t)}finally{if(Kt=!1,(Ut!==null||Wt!==null)&&(_u(),Ut&&(t=Ut,e=Wt,Wt=Ut=null,Gt(t),e)))for(t=0;t<e.length;t++)Gt(e[t])}}function Jt(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Je]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Yt=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),Xt=!1;if(Yt)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){Xt=!0}}),window.addEventListener(`test`,Zt,Zt),window.removeEventListener(`test`,Zt,Zt)}catch{Xt=!1}var Qt=null,$t=null,en=null;function tn(){if(en)return en;var e,t=$t,n=t.length,r,i=`value`in Qt?Qt.value:Qt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return en=i.slice(e,1<r?1-r:void 0)}function nn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rn(){return!0}function an(){return!1}function on(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?rn:an,this.isPropagationStopped=an,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=rn)},persist:function(){},isPersistent:rn}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(sn),ln=p({},sn,{view:0,detail:0}),un=on(ln),dn,X,fn,pn=p({},ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==fn&&(fn&&e.type===`mousemove`?(dn=e.screenX-fn.screenX,X=e.screenY-fn.screenY):X=dn=0,fn=e),dn)},movementY:function(e){return`movementY`in e?e.movementY:X}}),mn=on(pn),hn=on(p({},pn,{dataTransfer:0})),gn=on(p({},ln,{relatedTarget:0})),_n=on(p({},sn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=on(p({},sn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),yn=on(p({},sn,{data:0})),bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},xn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Sn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sn[e])?!!t[e]:!1}function wn(){return Cn}var Tn=on(p({},ln,{key:function(e){if(e.key){var t=bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=nn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?xn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wn,charCode:function(e){return e.type===`keypress`?nn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?nn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),En=on(p({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Dn=on(p({},ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wn})),On=on(p({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),kn=on(p({},pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),An=on(p({},sn,{newState:0,oldState:0})),jn=[9,13,27,32],Mn=Yt&&`CompositionEvent`in window,Nn=null;Yt&&`documentMode`in document&&(Nn=document.documentMode);var Fn=Yt&&`TextEvent`in window&&!Nn,Ln=Yt&&(!Mn||Nn&&8<Nn&&11>=Nn),Rn=` `,zn=!1;function Bn(e,t){switch(e){case`keyup`:return jn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Vn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Hn=!1;function Un(e,t){switch(e){case`compositionend`:return Vn(t);case`keypress`:return t.which===32?(zn=!0,Rn):null;case`textInput`:return e=t.data,e===Rn&&zn?null:e;default:return null}}function Z(e,t){if(Hn)return e===`compositionend`||!Mn&&Bn(e,t)?(e=tn(),en=$t=Qt=null,Hn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Ln&&t.locale!==`ko`?null:t.data;default:return null}}var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Wn[e.type]:t===`textarea`}function Q(e,t,n,r){Ut?Wt?Wt.push(r):Wt=[r]:Ut=r,t=Td(t,`onChange`),0<t.length&&(n=new cn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Kn=null,qn=null;function Jn(e){_d(e,0)}function Yn(e){if(St(it(e)))return e}function Xn(e,t){if(e===`change`)return t}var Zn=!1;if(Yt){var Qn;if(Yt){var $n=`oninput`in document;if(!$n){var er=document.createElement(`div`);er.setAttribute(`oninput`,`return;`),$n=typeof er.oninput==`function`}Qn=$n}else Qn=!1;Zn=Qn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent(`onpropertychange`,nr),qn=Kn=null)}function nr(e){if(e.propertyName===`value`&&Yn(qn)){var t=[];Q(t,qn,e,Ht(e)),qt(Jn,t)}}function rr(e,t,n){e===`focusin`?(tr(),Kn=t,qn=n,Kn.attachEvent(`onpropertychange`,nr)):e===`focusout`&&tr()}function ir(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Yn(qn)}function ar(e,t){if(e===`click`)return Yn(t)}function or(e,t){if(e===`input`||e===`change`)return Yn(t)}function sr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var cr=typeof Object.is==`function`?Object.is:sr;function lr(e,t){if(cr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!se.call(t,i)||!cr(e[i],t[i]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dr(e,t){var n=ur(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=ur(n)}}function fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ct(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ct(e.document)}return t}function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var hr=Yt&&`documentMode`in document&&11>=document.documentMode,gr=null,_r=null,vr=null,yr=!1;function br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yr||gr==null||gr!==Ct(r)||(r=gr,`selectionStart`in r&&mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&lr(vr,r)||(vr=r,r=Td(_r,`onSelect`),0<r.length&&(t=new cn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Sr={animationend:xr(`Animation`,`AnimationEnd`),animationiteration:xr(`Animation`,`AnimationIteration`),animationstart:xr(`Animation`,`AnimationStart`),transitionrun:xr(`Transition`,`TransitionRun`),transitionstart:xr(`Transition`,`TransitionStart`),transitioncancel:xr(`Transition`,`TransitionCancel`),transitionend:xr(`Transition`,`TransitionEnd`)},Cr={},wr={};Yt&&(wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),`TransitionEvent`in window||delete Sr.transitionend.transition);function Tr(e){if(Cr[e])return Cr[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wr)return Cr[e]=t[n];return e}var Er=Tr(`animationend`),Dr=Tr(`animationiteration`),Or=Tr(`animationstart`),kr=Tr(`transitionrun`),Ar=Tr(`transitionstart`),jr=Tr(`transitioncancel`),Mr=Tr(`transitionend`),Nr=new Map,Pr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Pr.push(`scrollEnd`);function Fr(e,t){Nr.set(e,t),lt(t,[e])}var Ir=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Lr=[],Rr=0,zr=0;function Br(){for(var e=Rr,t=zr=Rr=0;t<e;){var n=Lr[t];Lr[t++]=null;var r=Lr[t];Lr[t++]=null;var i=Lr[t];Lr[t++]=null;var a=Lr[t];if(Lr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Wr(n,i,a)}}function Vr(e,t,n,r){Lr[Rr++]=e,Lr[Rr++]=t,Lr[Rr++]=n,Lr[Rr++]=r,zr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Hr(e,t,n,r){return Vr(e,t,n,r),Gr(e)}function Ur(e,t){return Vr(e,null,null,t),Gr(e)}function Wr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-we(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Gr(e){if(50<cu)throw cu=0,lu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Kr={};function qr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jr(e,t,n,r){return new qr(e,t,n,r)}function Yr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xr(e,t){var n=e.alternate;return n===null?(n=Jr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Zr(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qr(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)Yr(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,H.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case D:return e=Jr(31,n,t,a),e.elementType=D,e.lanes=o,e;case _:return $r(n.children,a,o,t);case v:s=8,a|=24;break;case y:return e=Jr(12,n,t,a|2),e.elementType=y,e.lanes=o,e;case C:return e=Jr(13,n,t,a),e.elementType=C,e.lanes=o,e;case w:return e=Jr(19,n,t,a),e.elementType=w,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case x:s=10;break a;case b:s=9;break a;case S:s=11;break a;case T:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Jr(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function $r(e,t,n,r){return e=Jr(7,e,r,t),e.lanes=n,e}function ei(e,t,n){return e=Jr(6,e,null,t),e.lanes=n,e}function ti(e){var t=Jr(18,null,null,0);return t.stateNode=e,t}function ni(e,t,n){return t=Jr(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ri=new WeakMap;function ii(e,t){if(typeof e==`object`&&e){var n=ri.get(e);return n===void 0?(t={value:e,source:t,stack:oe(t)},ri.set(e,t),t):n}return{value:e,source:t,stack:oe(t)}}var ai=[],oi=0,si=null,ci=0,li=[],ui=0,di=null,fi=1,pi=``;function mi(e,t){ai[oi++]=ci,ai[oi++]=si,si=e,ci=t}function hi(e,t,n){li[ui++]=fi,li[ui++]=pi,li[ui++]=di,di=e;var r=fi;e=pi;var i=32-we(r)-1;r&=~(1<<i),n+=1;var a=32-we(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fi=1<<32-we(t)+i|n<<i|r,pi=a+e}else fi=1<<a|n<<i|r,pi=e}function gi(e){e.return!==null&&(mi(e,1),hi(e,1,0))}function _i(e){for(;e===si;)si=ai[--oi],ai[oi]=null,ci=ai[--oi],ai[oi]=null;for(;e===di;)di=li[--ui],li[ui]=null,pi=li[--ui],li[ui]=null,fi=li[--ui],li[ui]=null}function vi(e,t){li[ui++]=fi,li[ui++]=pi,li[ui++]=di,fi=t.id,pi=t.overflow,di=e}var yi=null,$=null,bi=!1,xi=null,Si=!1,Ci=Error(i(519));function wi(e){throw Ai(ii(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ci}function Ti(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[qe]=e,t[Je]=r,n){case`dialog`:vd(`cancel`,t),vd(`close`,t);break;case`iframe`:case`object`:case`embed`:vd(`load`,t);break;case`video`:case`audio`:for(n=0;n<hd.length;n++)vd(hd[n],t);break;case`source`:vd(`error`,t);break;case`img`:case`image`:case`link`:vd(`error`,t),vd(`load`,t);break;case`details`:vd(`toggle`,t);break;case`input`:vd(`invalid`,t),Dt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:vd(`invalid`,t);break;case`textarea`:vd(`invalid`,t),jt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&(vd(`beforetoggle`,t),vd(`toggle`,t)),r.onScroll!=null&&vd(`scroll`,t),r.onScrollEnd!=null&&vd(`scrollend`,t),r.onClick!=null&&(t.onclick=Bt),t=!0):t=!1,t||wi(e,!0)}function Ei(e){for(yi=e.return;yi;)switch(yi.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:yi=yi.return}}function Di(e){if(e!==yi)return!1;if(!bi)return Ei(e),bi=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&$&&wi(e),Ei(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));$=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));$=uf(e)}else t===27?(t=$,Zd(e.type)?(e=lf,lf=null,$=e):$=t):$=yi?cf(e.stateNode.nextSibling):null;return!0}function Oi(){$=yi=null,bi=!1}function ki(){var e=xi;return e!==null&&(Jl===null?Jl=e:Jl.push.apply(Jl,e),xi=null),e}function Ai(e){xi===null?xi=[e]:xi.push(e)}var ji=z(null),Mi=null,Ni=null;function Pi(e,t,n){V(ji,t._currentValue),t._currentValue=n}function Fi(e){e._currentValue=ji.current,B(ji)}function Ii(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Li(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ii(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ii(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ri(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;cr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===G.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Li(t,e,n,r),t.flags|=262144}function zi(e){for(e=e.firstContext;e!==null;){if(!cr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bi(e){Mi=e,Ni=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Vi(e){return Ui(Mi,e)}function Hi(e,t){return Mi===null&&Bi(e),Ui(e,t)}function Ui(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ni===null){if(e===null)throw Error(i(308));Ni=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ni=Ni.next=t;return n}var Wi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Gi=t.unstable_scheduleCallback,Ki=t.unstable_NormalPriority,qi={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ji(){return{controller:new Wi,data:new Map,refCount:0}}function Yi(e){e.refCount--,e.refCount===0&&Gi(Ki,function(){e.controller.abort()})}var Xi=null,Zi=0,Qi=0,$i=null;function ea(e,t){if(Xi===null){var n=Xi=[];Zi=0,Qi=ld(),$i={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Zi++,t.then(ta,ta),t}function ta(){if(--Zi===0&&Xi!==null){$i!==null&&($i.status=`fulfilled`);var e=Xi;Xi=null,Qi=0,$i=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function na(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ra=P.S;P.S=function(e,t){Zl=fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ea(e,t),ra!==null&&ra(e,t)};var ia=z(null);function aa(){var e=ia.current;return e===null?Ml.pooledCache:e}function oa(e,t){t===null?V(ia,ia.current):V(ia,t.pool)}function sa(){var e=aa();return e===null?null:{parent:qi._currentValue,pool:e}}var ca=Error(i(460)),la=Error(i(474)),ua=Error(i(542)),da={then:function(){}};function fa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Bt,Bt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,_a(e),e;default:if(typeof t.status==`string`)t.then(Bt,Bt);else{if(e=Ml,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,_a(e),e}throw ha=t,ca}}function ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ha=e,ca):e}}var ha=null;function ga(){if(ha===null)throw Error(i(459));var e=ha;return ha=null,e}function _a(e){if(e===ca||e===ua)throw Error(i(483))}var va=null,ya=0;function ba(e){var t=ya;return ya+=1,va===null&&(va=[]),pa(va,e,t)}function xa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Sa(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ca(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Xr(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ei(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===_?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&ma(i)===t.type)?(t=a(t,n.props),xa(t,n),t.return=e,t):(t=Qr(n.type,n.key,n.props,null,e.mode,r),xa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ni(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=$r(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ei(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case h:return n=Qr(t.type,t.key,t.props,null,e.mode,n),xa(n,t),n.return=e,n;case g:return t=ni(t,e.mode,n),t.return=e,t;case E:return t=ma(t),f(e,t,n)}if(N(t)||A(t))return t=$r(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ba(t),n);if(t.$$typeof===x)return f(e,Hi(e,t),n);Sa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case h:return n.key===i?l(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case E:return n=ma(n),p(e,t,n,r)}if(N(n)||A(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ba(n),r);if(n.$$typeof===x)return p(e,t,Hi(e,n),r);Sa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case h:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case g:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=ma(r),m(e,t,n,r,i)}if(N(r)||A(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ba(r),i);if(r.$$typeof===x)return m(e,t,n,Hi(t,r),i);Sa(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),bi&&mi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return bi&&mi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),bi&&mi(i,h),l}function y(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),bi&&mi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return bi&&mi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),bi&&mi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===_&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case h:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===_){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),xa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===_?(c=$r(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=Qr(o.type,o.key,o.props,null,e.mode,c),xa(c,o),c.return=e,e=c)}return s(e);case g:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ni(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=ma(o),b(e,r,o,c)}if(N(o))return v(e,r,o,c);if(A(o)){if(l=A(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,ba(o),c);if(o.$$typeof===x)return b(e,r,Hi(e,o),c);Sa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ei(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ya=0;var i=b(e,t,n,r);return va=null,i}catch(t){if(t===ca||t===ua)throw t;var a=Jr(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var wa=Ca(!0),Ta=Ca(!1),Ea=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,jl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Gr(e),Wr(e,null,n),t}return Vr(e,r,t,n),Gr(e)}function ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Be(e,n)}}function Ma(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Na=!1;function Pa(){if(Na){var e=$i;if(e!==null)throw e}}function Fa(e,t,n,r){Na=!1;var i=e.updateQueue;Ea=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,m=f!==s.lane;if(m?(Pl&f)===f:(r&f)===f){f!==0&&f===Qi&&(Na=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=p({},d,f);break a;case 2:Ea=!0}}f=s.callback,f!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[f]:m.push(f))}else m={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Hl|=o,e.lanes=o,e.memoizedState=d}}function Ia(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function La(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ia(n[e],t)}var Ra=z(null),za=z(0);function Ba(e,t){e=Bl,V(za,e),V(Ra,t),Bl=e|t.baseLanes}function Va(){V(za,Bl),V(Ra,Ra.current)}function Ha(){Bl=za.current,B(Ra),B(za)}var Ua=z(null),Wa=null;function Ga(e){var t=e.alternate;V(Xa,Xa.current&1),V(Ua,e),Wa===null&&(t===null||Ra.current!==null||t.memoizedState!==null)&&(Wa=e)}function Ka(e){V(Xa,Xa.current),V(Ua,e),Wa===null&&(Wa=e)}function qa(e){e.tag===22?(V(Xa,Xa.current),V(Ua,e),Wa===null&&(Wa=e)):Ja(e)}function Ja(){V(Xa,Xa.current),V(Ua,Ua.current)}function Ya(e){B(Ua),Wa===e&&(Wa=null),B(Xa)}var Xa=z(0);function Za(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qa=0,$a=null,eo=null,to=null,no=!1,ro=!1,io=!1,ao=0,oo=0,so=null,co=0;function lo(){throw Error(i(321))}function uo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!cr(e[n],t[n]))return!1;return!0}function fo(e,t,n,r,i,a){return Qa=a,$a=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?ks:As,io=!1,a=n(r,i),io=!1,ro&&(a=mo(t,n,r,i)),po(e),a}function po(e){P.H=Os;var t=eo!==null&&eo.next!==null;if(Qa=0,to=eo=$a=null,no=!1,oo=0,so=null,t)throw Error(i(300));e===null||qs||(e=e.dependencies,e!==null&&zi(e)&&(qs=!0))}function mo(e,t,n,r){$a=e;var a=0;do{if(ro&&(so=null),oo=0,ro=!1,25<=a)throw Error(i(301));if(a+=1,to=eo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=js,o=t(n,r)}while(ro);return o}function ho(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?So(t):t,e=e.useState()[0],(eo===null?null:eo.memoizedState)!==e&&($a.flags|=1024),t}function go(){var e=ao!==0;return ao=0,e}function _o(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function vo(e){if(no){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}no=!1}Qa=0,to=eo=$a=null,ro=!1,oo=ao=0,so=null}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return to===null?$a.memoizedState=to=e:to=to.next=e,to}function bo(){if(eo===null){var e=$a.alternate;e=e===null?null:e.memoizedState}else e=eo.next;var t=to===null?$a.memoizedState:to.next;if(t!==null)to=t,eo=e;else{if(e===null)throw $a.alternate===null?Error(i(467)):Error(i(310));eo=e,e={memoizedState:eo.memoizedState,baseState:eo.baseState,baseQueue:eo.baseQueue,queue:eo.queue,next:null},to===null?$a.memoizedState=to=e:to=to.next=e}return to}function xo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(e){var t=oo;return oo+=1,so===null&&(so=[]),e=pa(so,e,t),t=$a,(to===null?t.memoizedState:to.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?ks:As),e}function Co(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return So(e);if(e.$$typeof===x)return Vi(e)}throw Error(i(438,String(e)))}function wo(e){var t=null,n=$a.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=$a.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=xo(),$a.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=O;return t.index++,n}function To(e,t){return typeof t==`function`?t(e):t}function Eo(e){return Do(bo(),eo,e)}function Do(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Qa&f)===f:(Pl&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Qi&&(d=!0);else if((Qa&p)===p){u=u.next,p===Qi&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,$a.lanes|=p,Hl|=p;f=u.action,io&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,$a.lanes|=f,Hl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!cr(o,e.memoizedState)&&(qs=!0,d&&(n=$i,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Oo(e){var t=bo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);cr(o,t.memoizedState)||(qs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ko(e,t,n){var r=$a,a=bo(),o=bi;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!cr((eo||a).memoizedState,n);if(s&&(a.memoizedState=n,qs=!0),a=a.queue,es(Mo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||to!==null&&to.memoizedState.tag&1){if(r.flags|=2048,Yo(9,{destroy:void 0},jo.bind(null,r,a,n,t),null),Ml===null)throw Error(i(349));o||Qa&127||Ao(r,t,n)}return n}function Ao(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$a.updateQueue,t===null?(t=xo(),$a.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jo(e,t,n,r){t.value=n,t.getSnapshot=r,No(t)&&Po(e)}function Mo(e,t,n){return n(function(){No(t)&&Po(e)})}function No(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!cr(e,n)}catch{return!0}}function Po(e){var t=Ur(e,2);t!==null&&fu(t,e,2)}function Fo(e){var t=yo();if(typeof e==`function`){var n=e;if(e=n(),io){Ce(!0);try{n()}finally{Ce(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t}function Io(e,t,n,r){return e.baseState=n,Do(e,eo,typeof r==`function`?r:To)}function Lo(e,t,n,r,a){if(Ts(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ro(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ro(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),zo(e,t,s)}catch(n){Vo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),zo(e,t,a)}catch(n){Vo(e,t,n)}}function zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Bo(e,t,n)},function(n){return Vo(e,t,n)}):Bo(e,t,n)}function Bo(e,t,n){t.status=`fulfilled`,t.value=n,Ho(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ro(e,n)))}function Vo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ho(t),t=t.next;while(t!==r)}e.action=null}function Ho(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Uo(e,t){return t}function Wo(e,t){if(bi){var n=Ml.formState;if(n!==null){a:{var r=$a;if(bi){if($){b:{for(var i=$,a=Si;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){$=cf(i.nextSibling),r=i.data===`F!`;break a}}wi(r)}r=!1}r&&(t=n[0])}}return n=yo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:t},n.queue=r,n=Ss.bind(null,$a,r),r.dispatch=n,r=Fo(!1),a=ws.bind(null,$a,!1,r.queue),r=yo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Lo.bind(null,$a,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Go(e){return Ko(bo(),eo,e)}function Ko(e,t,n){if(t=Do(e,t,Uo)[0],e=Eo(To)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=So(t)}catch(e){throw e===ca?ua:e}else r=t;t=bo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&($a.flags|=2048,Yo(9,{destroy:void 0},qo.bind(null,i,n),null)),[r,a,e]}function qo(e,t){e.action=t}function Jo(e){var t=bo(),n=eo;if(n!==null)return Ko(t,n,e);bo(),t=t.memoizedState,n=bo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Yo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=$a.updateQueue,t===null&&(t=xo(),$a.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Xo(){return bo().memoizedState}function Zo(e,t,n,r){var i=yo();$a.flags|=e,i.memoizedState=Yo(1|t,{destroy:void 0},n,r===void 0?null:r)}function Qo(e,t,n,r){var i=bo();r=r===void 0?null:r;var a=i.memoizedState.inst;eo!==null&&r!==null&&uo(r,eo.memoizedState.deps)?i.memoizedState=Yo(t,a,n,r):($a.flags|=e,i.memoizedState=Yo(1|t,a,n,r))}function $o(e,t){Zo(8390656,8,e,t)}function es(e,t){Qo(2048,8,e,t)}function ts(e){$a.flags|=4;var t=$a.updateQueue;if(t===null)t=xo(),$a.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ns(e){var t=bo().memoizedState;return ts({ref:t,nextImpl:e}),function(){if(jl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function rs(e,t){return Qo(4,2,e,t)}function is(e,t){return Qo(4,4,e,t)}function as(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function os(e,t,n){n=n==null?null:n.concat([e]),Qo(4,4,as.bind(null,t,e),n)}function ss(){}function cs(e,t){var n=bo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&uo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ls(e,t){var n=bo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&uo(t,r[1]))return r[0];if(r=e(),io){Ce(!0);try{e()}finally{Ce(!1)}}return n.memoizedState=[r,t],r}function us(e,t,n){return n===void 0||Qa&1073741824&&!(Pl&261930)?e.memoizedState=t:(e.memoizedState=n,e=du(),$a.lanes|=e,Hl|=e,n)}function ds(e,t,n,r){return cr(n,t)?n:Ra.current===null?!(Qa&42)||Qa&1073741824&&!(Pl&261930)?(qs=!0,e.memoizedState=n):(e=du(),$a.lanes|=e,Hl|=e,t):(e=us(e,n,r),cr(e,t)||(qs=!0),e)}function fs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};P.T=s,ws(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Cs(e,t,na(c,r),uu(e)):Cs(e,t,r,uu(e))}catch(n){Cs(e,t,{then:function(){},status:`rejected`,reason:n},uu())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function ps(){}function ms(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=hs(e).queue;fs(e,a,t,I,n===null?ps:function(){return gs(e),n(r)})}function hs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gs(e){var t=hs(e);t.next===null&&(t=e.alternate.memoizedState),Cs(e,t.next.queue,{},uu())}function _s(){return Vi(Qf)}function vs(){return bo().memoizedState}function ys(){return bo().memoizedState}function bs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=uu();e=ka(n);var r=Aa(t,e,n);r!==null&&(fu(r,t,n),ja(r,t,n)),t={cache:Ji()},e.payload=t;return}t=t.return}}function xs(e,t,n){var r=uu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ts(e)?Es(t,n):(n=Hr(e,t,n,r),n!==null&&(fu(n,e,r),Ds(n,t,r)))}function Ss(e,t,n){Cs(e,t,n,uu())}function Cs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ts(e))Es(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,cr(s,o))return Vr(e,t,i,0),Ml===null&&Br(),!1}catch{}if(n=Hr(e,t,i,r),n!==null)return fu(n,e,r),Ds(n,t,r),!0}return!1}function ws(e,t,n,r){if(r={lane:2,revertLane:ld(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ts(e)){if(t)throw Error(i(479))}else t=Hr(e,n,r,2),t!==null&&fu(t,e,2)}function Ts(e){var t=e.alternate;return e===$a||t!==null&&t===$a}function Es(e,t){ro=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ds(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Be(e,n)}}var Os={readContext:Vi,use:Co,useCallback:lo,useContext:lo,useEffect:lo,useImperativeHandle:lo,useLayoutEffect:lo,useInsertionEffect:lo,useMemo:lo,useReducer:lo,useRef:lo,useState:lo,useDebugValue:lo,useDeferredValue:lo,useTransition:lo,useSyncExternalStore:lo,useId:lo,useHostTransitionStatus:lo,useFormState:lo,useActionState:lo,useOptimistic:lo,useMemoCache:lo,useCacheRefresh:lo};Os.useEffectEvent=lo;var ks={readContext:Vi,use:Co,useCallback:function(e,t){return yo().memoizedState=[e,t===void 0?null:t],e},useContext:Vi,useEffect:$o,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Zo(4194308,4,as.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){Zo(4,2,e,t)},useMemo:function(e,t){var n=yo();t=t===void 0?null:t;var r=e();if(io){Ce(!0);try{e()}finally{Ce(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=yo();if(n!==void 0){var i=n(t);if(io){Ce(!0);try{n(t)}finally{Ce(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=xs.bind(null,$a,e),[r.memoizedState,e]},useRef:function(e){var t=yo();return e={current:e},t.memoizedState=e},useState:function(e){e=Fo(e);var t=e.queue,n=Ss.bind(null,$a,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ss,useDeferredValue:function(e,t){return us(yo(),e,t)},useTransition:function(){var e=Fo(!1);return e=fs.bind(null,$a,e.queue,!0,!1),yo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=$a,a=yo();if(bi){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ml===null)throw Error(i(349));Pl&127||Ao(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,$o(Mo.bind(null,r,o,e),[e]),r.flags|=2048,Yo(9,{destroy:void 0},jo.bind(null,r,o,n,t),null),n},useId:function(){var e=yo(),t=Ml.identifierPrefix;if(bi){var n=pi,r=fi;n=(r&~(1<<32-we(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ao++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:_s,useFormState:Wo,useActionState:Wo,useOptimistic:function(e){var t=yo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ws.bind(null,$a,!0,n),n.dispatch=t,[e,t]},useMemoCache:wo,useCacheRefresh:function(){return yo().memoizedState=bs.bind(null,$a)},useEffectEvent:function(e){var t=yo(),n={impl:e};return t.memoizedState=n,function(){if(jl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},As={readContext:Vi,use:Co,useCallback:cs,useContext:Vi,useEffect:es,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Eo,useRef:Xo,useState:function(){return Eo(To)},useDebugValue:ss,useDeferredValue:function(e,t){return ds(bo(),eo.memoizedState,e,t)},useTransition:function(){var e=Eo(To)[0],t=bo().memoizedState;return[typeof e==`boolean`?e:So(e),t]},useSyncExternalStore:ko,useId:vs,useHostTransitionStatus:_s,useFormState:Go,useActionState:Go,useOptimistic:function(e,t){return Io(bo(),eo,e,t)},useMemoCache:wo,useCacheRefresh:ys};As.useEffectEvent=ns;var js={readContext:Vi,use:Co,useCallback:cs,useContext:Vi,useEffect:es,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Oo,useRef:Xo,useState:function(){return Oo(To)},useDebugValue:ss,useDeferredValue:function(e,t){var n=bo();return eo===null?us(n,e,t):ds(n,eo.memoizedState,e,t)},useTransition:function(){var e=Oo(To)[0],t=bo().memoizedState;return[typeof e==`boolean`?e:So(e),t]},useSyncExternalStore:ko,useId:vs,useHostTransitionStatus:_s,useFormState:Jo,useActionState:Jo,useOptimistic:function(e,t){var n=bo();return eo===null?(n.baseState=e,[e,n.queue.dispatch]):Io(n,eo,e,t)},useMemoCache:wo,useCacheRefresh:ys};js.useEffectEvent=ns;function Ms(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ns={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=uu(),i=ka(r);i.payload=t,n!=null&&(i.callback=n),t=Aa(e,i,r),t!==null&&(fu(t,e,r),ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=uu(),i=ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Aa(e,i,r),t!==null&&(fu(t,e,r),ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=uu(),r=ka(n);r.tag=2,t!=null&&(r.callback=t),t=Aa(e,r,n),t!==null&&(fu(t,e,n),ja(t,e,n))}};function Ps(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!lr(n,r)||!lr(i,a):!0}function Fs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ns.enqueueReplaceState(t,t.state,null)}function Is(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ls(e){Ir(e)}function Rs(e){console.error(e)}function zs(e){Ir(e)}function Bs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Vs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Hs(e,t,n){return n=ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Bs(e,t)},n}function Us(e){return e=ka(e),e.tag=3,e}function Ws(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Vs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Vs(t,n,r),typeof i!=`function`&&(eu===null?eu=new Set([this]):eu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Gs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ri(t,n,a,!0),n=Ua.current,n!==null){switch(n.tag){case 31:case 13:return Wa===null?wu():n.alternate===null&&Vl===0&&(Vl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Uu(e,r,a)),!1;case 22:return n.flags|=65536,r===da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Uu(e,r,a)),!1}throw Error(i(435,n.tag))}return Uu(e,r,a),wu(),!1}if(bi)return t=Ua.current,t===null?(r!==Ci&&(t=Error(i(423),{cause:r}),Ai(ii(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ii(r,n),a=Hs(e.stateNode,r,a),Ma(e,a),Vl!==4&&(Vl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ci&&(e=Error(i(422),{cause:r}),Ai(ii(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ii(o,n),ql===null?ql=[o]:ql.push(o),Vl!==4&&(Vl=2),t===null)return!0;r=ii(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Hs(n.stateNode,r,e),Ma(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(eu===null||!eu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Us(a),Ws(a,e,n,r),Ma(n,a),!1}n=n.return}while(n!==null);return!1}var Ks=Error(i(461)),qs=!1;function Js(e,t,n,r){t.child=e===null?Ta(t,null,n,r):wa(t,e.child,n,r)}function Ys(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Bi(t),r=fo(e,t,n,o,a,i),s=go(),e!==null&&!qs?(_o(e,t,i),yc(e,t,i)):(bi&&s&&gi(t),t.flags|=1,Js(e,t,r,i),t.child)}function Xs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Yr(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Zs(e,t,a,r,i)):(e=Qr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!bc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?lr:n,n(o,r)&&e.ref===t.ref)return yc(e,t,i)}return t.flags|=1,e=Xr(a,r),e.ref=t.ref,e.return=t,t.child=e}function Zs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(lr(a,r)&&e.ref===t.ref)if(qs=!1,t.pendingProps=r=a,bc(e,i))e.flags&131072&&(qs=!0);else return t.lanes=e.lanes,yc(e,t,i)}return ac(e,t,n,r,i)}function Qs(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ec(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&oa(t,a===null?null:a.cachePool),a===null?Va():Ba(t,a),qa(t);else return r=t.lanes=536870912,ec(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&oa(t,null),Va(),Ja(t)):(oa(t,a.cachePool),Ba(t,a),Ja(t),t.memoizedState=null);return Js(e,t,i,n),t.child}function $s(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ec(e,t,n,r,i){var a=aa();return a=a===null?null:{parent:qi._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&oa(t,null),Va(),qa(t),e!==null&&Ri(e,t,r,!0),t.childLanes=i,null}function tc(e,t){return t=mc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function nc(e,t,n){return wa(t,e.child,null,n),e=tc(t,t.pendingProps),e.flags|=2,Ya(t),t.memoizedState=null,e}function rc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(bi){if(r.mode===`hidden`)return e=tc(t,r),t.lanes=536870912,$s(null,e);if(Ka(t),(e=$)?(e=rf(e,Si),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:di===null?null:{id:fi,overflow:pi},retryLane:536870912,hydrationErrors:null},n=ti(e),n.return=t,t.child=n,yi=t,$=null)):e=null,e===null)throw wi(t);return t.lanes=536870912,null}return tc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Ka(t),a)if(t.flags&256)t.flags&=-257,t=nc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(qs||Ri(e,t,n,!1),a=(n&e.childLanes)!==0,qs||a){if(r=Ml,r!==null&&(s=Ve(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ur(e,s),fu(r,e,s),Ks;wu(),t=nc(e,t,n)}else e=o.treeContext,$=cf(s.nextSibling),yi=t,bi=!0,xi=null,Si=!1,e!==null&&vi(t,e),t=tc(t,r),t.flags|=4096;return t}return e=Xr(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ic(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ac(e,t,n,r,i){return Bi(t),n=fo(e,t,n,r,void 0,i),r=go(),e!==null&&!qs?(_o(e,t,i),yc(e,t,i)):(bi&&r&&gi(t),t.flags|=1,Js(e,t,n,i),t.child)}function oc(e,t,n,r,i,a){return Bi(t),t.updateQueue=null,n=mo(t,r,n,i),po(e),r=go(),e!==null&&!qs?(_o(e,t,a),yc(e,t,a)):(bi&&r&&gi(t),t.flags|=1,Js(e,t,n,a),t.child)}function sc(e,t,n,r,i){if(Bi(t),t.stateNode===null){var a=Kr,o=n.contextType;typeof o==`object`&&o&&(a=Vi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ns,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Da(t),o=n.contextType,a.context=typeof o==`object`&&o?Vi(o):Kr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ms(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ns.enqueueReplaceState(a,a.state,null),Fa(t,r,a,i),Pa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Is(n,s);a.props=c;var l=a.context,u=n.contextType;o=Kr,typeof u==`object`&&u&&(o=Vi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Fs(t,a,r,o),Ea=!1;var f=t.memoizedState;a.state=f,Fa(t,r,a,i),Pa(),l=t.memoizedState,s||f!==l||Ea?(typeof d==`function`&&(Ms(t,n,d,r),l=t.memoizedState),(c=Ea||Ps(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Oa(e,t),o=t.memoizedProps,u=Is(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Kr,typeof l==`object`&&l&&(c=Vi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Fs(t,a,r,c),Ea=!1,f=t.memoizedState,a.state=f,Fa(t,r,a,i),Pa();var p=t.memoizedState;o!==d||f!==p||Ea||e!==null&&e.dependencies!==null&&zi(e.dependencies)?(typeof s==`function`&&(Ms(t,n,s,r),p=t.memoizedState),(u=Ea||Ps(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&zi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,ic(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=wa(t,e.child,null,i),t.child=wa(t,null,n,i)):Js(e,t,n,i),t.memoizedState=a.state,e=t.child):e=yc(e,t,i),e}function cc(e,t,n,r){return Oi(),t.flags|=256,Js(e,t,n,r),t.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(e){return{baseLanes:e,cachePool:sa()}}function dc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Gl),e}function fc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(Xa.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(bi){if(a?Ga(t):Ja(t),(e=$)?(e=rf(e,Si),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:di===null?null:{id:fi,overflow:pi},retryLane:536870912,hydrationErrors:null},n=ti(e),n.return=t,t.child=n,yi=t,$=null)):e=null,e===null)throw wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(Ja(t),a=t.mode,c=mc({mode:`hidden`,children:c},a),r=$r(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=uc(n),r.childLanes=dc(e,s,n),t.memoizedState=lc,$s(null,r)):(Ga(t),pc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Ga(t),t.flags&=-257,t=hc(e,t,n)):t.memoizedState===null?(Ja(t),c=r.fallback,a=t.mode,r=mc({mode:`visible`,children:r.children},a),c=$r(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,wa(t,e.child,null,n),r=t.child,r.memoizedState=uc(n),r.childLanes=dc(e,s,n),t.memoizedState=lc,t=$s(null,r)):(Ja(t),t.child=e.child,t.flags|=128,t=null);else if(Ga(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ai({value:r,source:null,stack:null}),t=hc(e,t,n)}else if(qs||Ri(e,t,n,!1),s=(n&e.childLanes)!==0,qs||s){if(s=Ml,s!==null&&(r=Ve(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Ur(e,r),fu(s,e,r),Ks;af(c)||wu(),t=hc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,$=cf(c.nextSibling),yi=t,bi=!0,xi=null,Si=!1,e!==null&&vi(t,e),t=pc(t,r.children),t.flags|=4096);return t}return a?(Ja(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=Xr(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=$r(c,a,n,null),c.flags|=2):c=Xr(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,$s(null,r),r=t.child,c=e.child.memoizedState,c===null?c=uc(n):(a=c.cachePool,a===null?a=sa():(l=qi._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=dc(e,s,n),t.memoizedState=lc,$s(e.child,r)):(Ga(t),n=e.child,e=n.sibling,n=Xr(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function pc(e,t){return t=mc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function mc(e,t){return e=Jr(22,e,null,t),e.lanes=0,e}function hc(e,t,n){return wa(t,e.child,null,n),e=pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ii(e.return,t,n)}function _c(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function vc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Xa.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,V(Xa,o),Js(e,t,r,n),r=bi?ci:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gc(e,n,t);else if(e.tag===19)gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Za(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_c(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Za(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_c(t,!0,n,null,a,r);break;case`together`:_c(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function yc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ri(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&zi(e))):!0}function xc(e,t,n){switch(t.tag){case 3:K(t,t.stateNode.containerInfo),Pi(t,qi,e.memoizedState.cache),Oi();break;case 27:case 5:q(t);break;case 4:K(t,t.stateNode.containerInfo);break;case 10:Pi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ka(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Ga(t),e=yc(e,t,n),e===null?null:e.sibling):fc(e,t,n):(Ga(t),t.flags|=128,null);Ga(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ri(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return vc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Xa,Xa.current),r)break;return null;case 22:return t.lanes=0,Qs(e,t,n,t.pendingProps);case 24:Pi(t,qi,e.memoizedState.cache)}return yc(e,t,n)}function Sc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qs=!0;else{if(!bc(e,n)&&!(t.flags&128))return qs=!1,xc(e,t,n);qs=!!(e.flags&131072)}else qs=!1,bi&&t.flags&1048576&&hi(t,ci,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ma(t.elementType),t.type=e,typeof e==`function`)Yr(e)?(r=Is(e,r),t.tag=1,t=sc(null,t,e,r,n)):(t.tag=0,t=ac(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=Ys(null,t,e,r,n);break a}else if(a===T){t.tag=14,t=Xs(null,t,e,r,n);break a}}throw t=M(e)||e,Error(i(306,t,``))}}return t;case 0:return ac(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Is(r,t.pendingProps),sc(e,t,r,a,n);case 3:a:{if(K(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Oa(e,t),Fa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Pi(t,qi,r),r!==o.cache&&Li(t,[qi],n,!0),Pa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=cc(e,t,r,n);break a}else if(r!==a){a=ii(Error(i(424)),t),Ai(a),t=cc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for($=cf(e.firstChild),yi=t,bi=!0,xi=null,Si=!0,n=Ta(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Oi(),r===a){t=yc(e,t,n);break a}Js(e,t,r,n)}t=t.child}return t;case 26:return ic(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:bi||(n=t.type,e=t.pendingProps,r=Bd(W.current).createElement(n),r[qe]=t,r[Je]=e,Pd(r,n,e),ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return q(t),e===null&&bi&&(r=t.stateNode=ff(t.type,t.pendingProps,W.current),yi=t,Si=!0,a=$,Zd(t.type)?(lf=a,$=cf(r.firstChild)):$=a),Js(e,t,t.pendingProps.children,n),ic(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&bi&&((a=r=$)&&(r=tf(r,t.type,t.pendingProps,Si),r===null?a=!1:(t.stateNode=r,yi=t,$=cf(r.firstChild),Si=!1,a=!0)),a||wi(t)),q(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=fo(e,t,ho,null,null,n),Qf._currentValue=a),ic(e,t),Js(e,t,r,n),t.child;case 6:return e===null&&bi&&((e=n=$)&&(n=nf(n,t.pendingProps,Si),n===null?e=!1:(t.stateNode=n,yi=t,$=null,e=!0)),e||wi(t)),null;case 13:return fc(e,t,n);case 4:return K(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wa(t,null,r,n):Js(e,t,r,n),t.child;case 11:return Ys(e,t,t.type,t.pendingProps,n);case 7:return Js(e,t,t.pendingProps,n),t.child;case 8:return Js(e,t,t.pendingProps.children,n),t.child;case 12:return Js(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Pi(t,t.type,r.value),Js(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Bi(t),a=Vi(a),r=r(a),t.flags|=1,Js(e,t,r,n),t.child;case 14:return Xs(e,t,t.type,t.pendingProps,n);case 15:return Zs(e,t,t.type,t.pendingProps,n);case 19:return vc(e,t,n);case 31:return rc(e,t,n);case 22:return Qs(e,t,n,t.pendingProps);case 24:return Bi(t),r=Vi(qi),e===null?(a=aa(),a===null&&(a=Ml,o=Ji(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Da(t),Pi(t,qi,a)):((e.lanes&n)!==0&&(Oa(e,t),Fa(t,null,null,n),Pa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Pi(t,qi,r),r!==a.cache&&Li(t,[qi],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Pi(t,qi,r))),Js(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Cc(e){e.flags|=4}function wc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(xu())e.flags|=8192;else throw ha=da,la}else e.flags&=-16777217}function Tc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(xu())e.flags|=8192;else throw ha=da,la}function Ec(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Fe(),e.lanes|=t,Kl|=t)}function Dc(e,t){if(!bi)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kc(e,t,n){var r=t.pendingProps;switch(_i(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oc(t),null;case 1:return Oc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Fi(qi),ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Di(t)?Cc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ki())),Oc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Cc(t),o===null?(Oc(t),wc(t,a,null,r,n)):(Oc(t),Tc(t,o))):o?o===e.memoizedState?(Oc(t),t.flags&=-16777217):(Cc(t),Oc(t),Tc(t,o)):(e=e.memoizedProps,e!==r&&Cc(t),Oc(t),wc(t,a,e,r,n)),null;case 27:if(te(t),n=W.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Cc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Oc(t),null}e=H.current,Di(t)?Ti(t,e):(e=ff(a,r,n),t.stateNode=e,Cc(t))}return Oc(t),null;case 5:if(te(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Cc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Oc(t),null}if(o=H.current,Di(t))Ti(t,o);else{var s=Bd(W.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[qe]=t,o[Je]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Cc(t)}}return Oc(t),wc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Cc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=W.current,Di(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=yi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[qe]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||wi(t,!0)}else e=Bd(e).createTextNode(r),e[qe]=t,t.stateNode=e}return Oc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Di(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[qe]=t}else Oi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oc(t),e=!1}else n=ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ya(t),t):(Ya(t),null);if(t.flags&128)throw Error(i(558))}return Oc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Di(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[qe]=t}else Oi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oc(t),a=!1}else a=ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ya(t),t):(Ya(t),null)}return Ya(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ec(t,t.updateQueue),Oc(t),null);case 4:return ee(),e===null&&xd(t.stateNode.containerInfo),Oc(t),null;case 10:return Fi(t.type),Oc(t),null;case 19:if(B(Xa),r=t.memoizedState,r===null)return Oc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Dc(r,!1);else{if(Vl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Za(e),o!==null){for(t.flags|=128,Dc(r,!1),e=o.updateQueue,t.updateQueue=e,Ec(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Zr(n,e),n=n.sibling;return V(Xa,Xa.current&1|2),bi&&mi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&fe()>Ql&&(t.flags|=128,a=!0,Dc(r,!1),t.lanes=4194304)}else{if(!a)if(e=Za(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ec(t,e),Dc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!bi)return Oc(t),null}else 2*fe()-r.renderingStartTime>Ql&&n!==536870912&&(t.flags|=128,a=!0,Dc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Oc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=fe(),e.sibling=null,n=Xa.current,V(Xa,a?n&1|2:n&1),bi&&mi(t,r.treeForkCount),e);case 22:case 23:return Ya(t),Ha(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Oc(t),t.subtreeFlags&6&&(t.flags|=8192)):Oc(t),n=t.updateQueue,n!==null&&Ec(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&B(ia),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Fi(qi),Oc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Ac(e,t){switch(_i(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fi(qi),ee(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return te(t),null;case 31:if(t.memoizedState!==null){if(Ya(t),t.alternate===null)throw Error(i(340));Oi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ya(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Oi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Xa),null;case 4:return ee(),null;case 10:return Fi(t.type),null;case 22:case 23:return Ya(t),Ha(),e!==null&&B(ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Fi(qi),null;case 25:return null;default:return null}}function jc(e,t){switch(_i(t),t.tag){case 3:Fi(qi),ee();break;case 26:case 27:case 5:te(t);break;case 4:ee();break;case 31:t.memoizedState!==null&&Ya(t);break;case 13:Ya(t);break;case 19:B(Xa);break;case 10:Fi(t.type);break;case 22:case 23:Ya(t),Ha(),e!==null&&B(ia);break;case 24:Fi(qi)}}function Mc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Hu(t,t.return,e)}}function Nc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Hu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Hu(t,t.return,e)}}function Pc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{La(t,n)}catch(t){Hu(e,e.return,t)}}}function Fc(e,t,n){n.props=Is(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Hu(e,t,n)}}function Ic(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Hu(e,t,n)}}function Lc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Hu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Hu(e,t,n)}else n.current=null}function Rc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Hu(e,e.return,t)}}function zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[Je]=t}catch(t){Hu(e,e.return,t)}}function Bc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Vc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hc(e,t,n),e=e.sibling;e!==null;)Hc(e,t,n),e=e.sibling}function Uc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Uc(e,t,n),e=e.sibling;e!==null;)Uc(e,t,n),e=e.sibling}function Wc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[qe]=e,t[Je]=n}catch(t){Hu(e,e.return,t)}}var Gc=!1,Kc=!1,qc=!1,Jc=typeof WeakSet==`function`?WeakSet:Set,Yc=null;function Xc(e,t){if(e=e.containerInfo,Rd=sp,e=pr(e),mr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,Yc=t;Yc!==null;)if(t=Yc,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Yc=e;else for(;Yc!==null;){switch(t=Yc,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Is(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Hu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Yc=e;break}Yc=t.return}}function Zc(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:fl(e,n),r&4&&Mc(5,n);break;case 1:if(fl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Hu(n,n.return,e)}else{var i=Is(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Hu(n,n.return,e)}}r&64&&Pc(n),r&512&&Ic(n,n.return);break;case 3:if(fl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{La(e,t)}catch(e){Hu(n,n.return,e)}}break;case 27:t===null&&r&4&&Wc(n);case 26:case 5:fl(e,n),t===null&&r&4&&Rc(n),r&512&&Ic(n,n.return);break;case 12:fl(e,n);break;case 31:fl(e,n),r&4&&rl(e,n);break;case 13:fl(e,n),r&4&&il(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ku.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Gc,!r){t=t!==null&&t.memoizedState!==null||Kc,i=Gc;var a=Kc;Gc=r,(Kc=t)&&!a?ml(e,n,(n.subtreeFlags&8772)!=0):fl(e,n),Gc=i,Kc=a}break;case 30:break;default:fl(e,n)}}function Qc(e){var t=e.alternate;t!==null&&(e.alternate=null,Qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $c=null,el=!1;function tl(e,t,n){for(n=n.child;n!==null;)nl(e,t,n),n=n.sibling}function nl(e,t,n){if(Se&&typeof Se.onCommitFiberUnmount==`function`)try{Se.onCommitFiberUnmount(xe,n)}catch{}switch(n.tag){case 26:Kc||Lc(n,t),tl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Kc||Lc(n,t);var r=$c,i=el;Zd(n.type)&&($c=n.stateNode,el=!1),tl(e,t,n),pf(n.stateNode),$c=r,el=i;break;case 5:Kc||Lc(n,t);case 6:if(r=$c,i=el,$c=null,tl(e,t,n),$c=r,el=i,$c!==null)if(el)try{($c.nodeType===9?$c.body:$c.nodeName===`HTML`?$c.ownerDocument.body:$c).removeChild(n.stateNode)}catch(e){Hu(n,t,e)}else try{$c.removeChild(n.stateNode)}catch(e){Hu(n,t,e)}break;case 18:$c!==null&&(el?(e=$c,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd($c,n.stateNode));break;case 4:r=$c,i=el,$c=n.stateNode.containerInfo,el=!0,tl(e,t,n),$c=r,el=i;break;case 0:case 11:case 14:case 15:Nc(2,n,t),Kc||Nc(4,n,t),tl(e,t,n);break;case 1:Kc||(Lc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Fc(n,t,r)),tl(e,t,n);break;case 21:tl(e,t,n);break;case 22:Kc=(r=Kc)||n.memoizedState!==null,tl(e,t,n),Kc=r;break;default:tl(e,t,n)}}function rl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Hu(t,t.return,e)}}}function il(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Hu(t,t.return,e)}}function al(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jc),t;default:throw Error(i(435,e.tag))}}function ol(e,t){var n=al(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=qu.bind(null,e,t);t.then(r,r)}})}function sl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){$c=c.stateNode,el=!1;break a}break;case 5:$c=c.stateNode,el=!1;break a;case 3:case 4:$c=c.stateNode.containerInfo,el=!0;break a}c=c.return}if($c===null)throw Error(i(160));nl(o,s,a),$c=null,el=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ll(t,e),t=t.sibling}var cl=null;function ll(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sl(t,e),ul(e),r&4&&(Nc(3,e,e.return),Mc(3,e),Nc(5,e,e.return));break;case 1:sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),r&64&&Gc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=cl;if(sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[et]||o[qe]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[qe]=e,ot(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[qe]=e,ot(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),n!==null&&r&4&&zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),e.flags&32){a=e.stateNode;try{Mt(a,``)}catch(t){Hu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(qc=!0);break;case 6:if(sl(t,e),ul(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Hu(e,e.return,t)}}break;case 3:if(Bf=null,a=cl,cl=gf(t.containerInfo),sl(t,e),cl=a,ul(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Hu(e,e.return,t)}qc&&(qc=!1,dl(e));break;case 4:r=cl,cl=gf(e.stateNode.containerInfo),sl(t,e),ul(e),cl=r;break;case 12:sl(t,e),ul(e);break;case 31:sl(t,e),ul(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 13:sl(t,e),ul(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Xl=fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Gc,d=Kc;if(Gc=u||a,Kc=d||l,sl(t,e),Kc=d,Gc=u,ul(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Gc||Kc||pl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Hu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Hu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Hu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ol(e,n))));break;case 19:sl(t,e),ul(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 30:break;case 21:break;default:sl(t,e),ul(e)}}function ul(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Bc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Uc(e,Vc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Mt(o,``),n.flags&=-33),Uc(e,Vc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Hc(e,Vc(e),s);break;default:throw Error(i(161))}}catch(t){Hu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zc(e,t.alternate,t),t=t.sibling}function pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Nc(4,t,t.return),pl(t);break;case 1:Lc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Fc(t,t.return,n),pl(t);break;case 27:pf(t.stateNode);case 26:case 5:Lc(t,t.return),pl(t);break;case 22:t.memoizedState===null&&pl(t);break;case 30:pl(t);break;default:pl(t)}e=e.sibling}}function ml(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:ml(i,a,n),Mc(4,a);break;case 1:if(ml(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Hu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ia(c[i],s)}catch(e){Hu(r,r.return,e)}}n&&o&64&&Pc(a),Ic(a,a.return);break;case 27:Wc(a);case 26:case 5:ml(i,a,n),n&&r===null&&o&4&&Rc(a),Ic(a,a.return);break;case 12:ml(i,a,n);break;case 31:ml(i,a,n),n&&o&4&&rl(i,a);break;case 13:ml(i,a,n),n&&o&4&&il(i,a);break;case 22:a.memoizedState===null&&ml(i,a,n),Ic(a,a.return);break;case 30:break;default:ml(i,a,n)}t=t.sibling}}function hl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Yi(n))}function gl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yi(e))}function _l(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vl(e,t,n,r),t=t.sibling}function vl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:_l(e,t,n,r),i&2048&&Mc(9,t);break;case 1:_l(e,t,n,r);break;case 3:_l(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yi(e)));break;case 12:if(i&2048){_l(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Hu(t,t.return,e)}}else _l(e,t,n,r);break;case 31:_l(e,t,n,r);break;case 13:_l(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?_l(e,t,n,r):(a._visibility|=2,yl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?_l(e,t,n,r):bl(e,t),i&2048&&hl(o,t);break;case 24:_l(e,t,n,r),i&2048&&gl(t.alternate,t);break;default:_l(e,t,n,r)}}function yl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:yl(a,o,s,c,i),Mc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,yl(a,o,s,c,i)):u._visibility&2?yl(a,o,s,c,i):bl(a,o),i&&l&2048&&hl(o.alternate,o);break;case 24:yl(a,o,s,c,i),i&&l&2048&&gl(o.alternate,o);break;default:yl(a,o,s,c,i)}t=t.sibling}}function bl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:bl(n,r),i&2048&&hl(r.alternate,r);break;case 24:bl(n,r),i&2048&&gl(r.alternate,r);break;default:bl(n,r)}t=t.sibling}}var xl=8192;function Sl(e,t,n){if(e.subtreeFlags&xl)for(e=e.child;e!==null;)Cl(e,t,n),e=e.sibling}function Cl(e,t,n){switch(e.tag){case 26:Sl(e,t,n),e.flags&xl&&e.memoizedState!==null&&Gf(n,cl,e.memoizedState,e.memoizedProps);break;case 5:Sl(e,t,n);break;case 3:case 4:var r=cl;cl=gf(e.stateNode.containerInfo),Sl(e,t,n),cl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=xl,xl=16777216,Sl(e,t,n),xl=r):Sl(e,t,n));break;default:Sl(e,t,n)}}function wl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yc=r,Ol(r,e)}wl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)El(e),e=e.sibling}function El(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&Nc(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Dl(e)):Tl(e);break;default:Tl(e)}}function Dl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yc=r,Ol(r,e)}wl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Nc(8,t,t.return),Dl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Dl(t));break;default:Dl(t)}e=e.sibling}}function Ol(e,t){for(;Yc!==null;){var n=Yc;switch(n.tag){case 0:case 11:case 15:Nc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Yi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Yc=r;else a:for(n=e;Yc!==null;){r=Yc;var i=r.sibling,a=r.return;if(Qc(r),r===n){Yc=null;break a}if(i!==null){i.return=a,Yc=i;break a}Yc=a}}}var kl={getCacheForType:function(e){var t=Vi(qi),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Vi(qi).controller.signal}},Al=typeof WeakMap==`function`?WeakMap:Map,jl=0,Ml=null,Nl=null,Pl=0,Fl=0,Il=null,Ll=!1,Rl=!1,zl=!1,Bl=0,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=null,Jl=null,Yl=!1,Xl=0,Zl=0,Ql=1/0,$l=null,eu=null,tu=0,nu=null,ru=null,iu=0,au=0,ou=null,su=null,cu=0,lu=null;function uu(){return jl&2&&Pl!==0?Pl&-Pl:P.T===null?We():ld()}function du(){if(Gl===0)if(!(Pl&536870912)||bi){var e=ke;ke<<=1,!(ke&3932160)&&(ke=262144),Gl=e}else Gl=536870912;return e=Ua.current,e!==null&&(e.flags|=32),Gl}function fu(e,t,n){(e===Ml&&(Fl===2||Fl===9)||e.cancelPendingCommit!==null)&&(yu(e,0),gu(e,Pl,Gl,!1)),Le(e,n),(!(jl&2)||e!==Ml)&&(e===Ml&&(!(jl&2)&&(Ul|=n),Vl===4&&gu(e,Pl,Gl,!1)),td(e))}function pu(e,t,n){if(jl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ne(e,t),a=r?Du(e,t):Tu(e,t,!0),o=r;do{if(a===0){Rl&&!r&&gu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!hu(n)){a=Tu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ql;var l=c.current.memoizedState.isDehydrated;if(l&&(yu(c,s).flags|=256),s=Tu(c,s,!1),s!==2){if(zl&&!l){c.errorRecoveryDisabledLanes|=o,Ul|=o,a=4;break a}o=Jl,Jl=a,o!==null&&(Jl===null?Jl=o:Jl.push.apply(Jl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){yu(e,0),gu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:gu(r,t,Gl,!Ll);break a;case 2:Jl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Xl+300-fe(),10<a)){if(gu(r,t,Gl,!Ll),Me(r,0,!0)!==0)break a;iu=t,r.timeoutHandle=Kd(mu.bind(null,r,n,Jl,$l,Yl,t,Gl,Ul,Kl,Ll,o,`Throttled`,-0,0),a);break a}mu(r,n,Jl,$l,Yl,t,Gl,Ul,Kl,Ll,o,null,-0,0)}}break}while(1);td(e)}function mu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bt},Cl(t,a,d);var m=(a&62914560)===a?Xl-fe():(a&4194048)===a?Zl-fe():0;if(m=qf(d,m),m!==null){iu=a,e.cancelPendingCommit=m(Pu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),gu(e,a,o,!l);return}}Pu(e,t,a,n,r,i,o,s,c)}function hu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!cr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gu(e,t,n,r){t&=~Wl,t&=~Ul,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-we(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ze(e,n,t)}function _u(){return jl&6?!0:(nd(0,!1),!1)}function vu(){if(Nl!==null){if(Fl===0)var e=Nl.return;else e=Nl,Ni=Mi=null,vo(e),va=null,ya=0,e=Nl;for(;e!==null;)jc(e.alternate,e),e=e.return;Nl=null}}function yu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),iu=0,vu(),Ml=e,Nl=n=Xr(e.current,null),Pl=t,Fl=0,Il=null,Ll=!1,Rl=Ne(e,t),zl=!1,Kl=Gl=Wl=Ul=Hl=Vl=0,Jl=ql=null,Yl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-we(r),a=1<<i;t|=e[i],r&=~a}return Bl=t,Br(),n}function bu(e,t){$a=null,P.H=Os,t===ca||t===ua?(t=ga(),Fl=3):t===la?(t=ga(),Fl=4):Fl=t===Ks?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Il=t,Nl===null&&(Vl=1,Bs(e,ii(t,e.current)))}function xu(){var e=Ua.current;return e===null?!0:(Pl&4194048)===Pl?Wa===null:(Pl&62914560)===Pl||Pl&536870912?e===Wa:!1}function Su(){var e=P.H;return P.H=Os,e===null?Os:e}function Cu(){var e=P.A;return P.A=kl,e}function wu(){Vl=4,Ll||(Pl&4194048)!==Pl&&Ua.current!==null||(Rl=!0),!(Hl&134217727)&&!(Ul&134217727)||Ml===null||gu(Ml,Pl,Gl,!1)}function Tu(e,t,n){var r=jl;jl|=2;var i=Su(),a=Cu();(Ml!==e||Pl!==t)&&($l=null,yu(e,t)),t=!1;var o=Vl;a:do try{if(Fl!==0&&Nl!==null){var s=Nl,c=Il;switch(Fl){case 8:vu(),o=6;break a;case 3:case 2:case 9:case 6:Ua.current===null&&(t=!0);var l=Fl;if(Fl=0,Il=null,ju(e,s,c,l),n&&Rl){o=0;break a}break;default:l=Fl,Fl=0,Il=null,ju(e,s,c,l)}}Eu(),o=Vl;break}catch(t){bu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ni=Mi=null,jl=r,P.H=i,P.A=a,Nl===null&&(Ml=null,Pl=0,Br()),o}function Eu(){for(;Nl!==null;)ku(Nl)}function Du(e,t){var n=jl;jl|=2;var r=Su(),a=Cu();Ml!==e||Pl!==t?($l=null,Ql=fe()+500,yu(e,t)):Rl=Ne(e,t);a:do try{if(Fl!==0&&Nl!==null){t=Nl;var o=Il;b:switch(Fl){case 1:Fl=0,Il=null,ju(e,t,o,1);break;case 2:case 9:if(fa(o)){Fl=0,Il=null,Au(t);break}t=function(){Fl!==2&&Fl!==9||Ml!==e||(Fl=7),td(e)},o.then(t,t);break a;case 3:Fl=7;break a;case 4:Fl=5;break a;case 7:fa(o)?(Fl=0,Il=null,Au(t)):(Fl=0,Il=null,ju(e,t,o,7));break;case 5:var s=null;switch(Nl.tag){case 26:s=Nl.memoizedState;case 5:case 27:var c=Nl;if(s?Wf(s):c.stateNode.complete){Fl=0,Il=null;var l=c.sibling;if(l!==null)Nl=l;else{var u=c.return;u===null?Nl=null:(Nl=u,Mu(u))}break b}}Fl=0,Il=null,ju(e,t,o,5);break;case 6:Fl=0,Il=null,ju(e,t,o,6);break;case 8:vu(),Vl=6;break a;default:throw Error(i(462))}}Ou();break}catch(t){bu(e,t)}while(1);return Ni=Mi=null,P.H=r,P.A=a,jl=n,Nl===null?(Ml=null,Pl=0,Br(),Vl):0}function Ou(){for(;Nl!==null&&!ue();)ku(Nl)}function ku(e){var t=Sc(e.alternate,e,Bl);e.memoizedProps=e.pendingProps,t===null?Mu(e):Nl=t}function Au(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=oc(n,t,t.pendingProps,t.type,void 0,Pl);break;case 11:t=oc(n,t,t.pendingProps,t.type.render,t.ref,Pl);break;case 5:vo(t);default:jc(n,t),t=Nl=Zr(t,Bl),t=Sc(n,t,Bl)}e.memoizedProps=e.pendingProps,t===null?Mu(e):Nl=t}function ju(e,t,n,r){Ni=Mi=null,vo(t),va=null,ya=0;var i=t.return;try{if(Gs(e,i,t,n,Pl)){Vl=1,Bs(e,ii(n,e.current)),Nl=null;return}}catch(t){if(i!==null)throw Nl=i,t;Vl=1,Bs(e,ii(n,e.current)),Nl=null;return}t.flags&32768?(bi||r===1?e=!0:Rl||Pl&536870912?e=!1:(Ll=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ua.current,r!==null&&r.tag===13&&(r.flags|=16384))),Nu(t,e)):Mu(t)}function Mu(e){var t=e;do{if(t.flags&32768){Nu(t,Ll);return}e=t.return;var n=kc(t.alternate,t,Bl);if(n!==null){Nl=n;return}if(t=t.sibling,t!==null){Nl=t;return}Nl=t=e}while(t!==null);Vl===0&&(Vl=5)}function Nu(e,t){do{var n=Ac(e.alternate,e);if(n!==null){n.flags&=32767,Nl=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Nl=e;return}Nl=e=n}while(e!==null);Vl=6,Nl=null}function Pu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do zu();while(tu!==0);if(jl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=zr,Re(e,n,o,s,c,l),e===Ml&&(Nl=Ml=null,Pl=0),ru=t,nu=e,iu=n,au=o,ou=a,su=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Ju(ge,function(){return Bu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=P.T,P.T=null,a=F.p,F.p=2,s=jl,jl|=4;try{Xc(e,t,n)}finally{jl=s,F.p=a,P.T=r}}tu=1,Fu(),Iu(),Lu()}}function Fu(){if(tu===1){tu=0;var e=nu,t=ru,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=jl;jl|=4;try{ll(t,e);var a=zd,o=pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&fr(s.ownerDocument.documentElement,s)){if(c!==null&&mr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=dr(s,h),v=dr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{jl=i,F.p=r,P.T=n}}e.current=t,tu=2}}function Iu(){if(tu===2){tu=0;var e=nu,t=ru,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=jl;jl|=4;try{Zc(e,t.alternate,t)}finally{jl=i,F.p=r,P.T=n}}tu=3}}function Lu(){if(tu===4||tu===3){tu=0,de();var e=nu,t=ru,n=iu,r=su;t.subtreeFlags&10256||t.flags&10256?tu=5:(tu=0,ru=nu=null,Ru(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(eu=null),Ue(n),t=t.stateNode,Se&&typeof Se.onCommitFiberRoot==`function`)try{Se.onCommitFiberRoot(xe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=P.T,i=F.p,F.p=2,P.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{P.T=t,F.p=i}}iu&3&&zu(),td(e),i=e.pendingLanes,n&261930&&i&42?e===lu?cu++:(cu=0,lu=e):cu=0,nd(0,!1)}}function Ru(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yi(t)))}function zu(){return Fu(),Iu(),Lu(),Bu()}function Bu(){if(tu!==5)return!1;var e=nu,t=au;au=0;var n=Ue(iu),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=ou,ou=null;var o=nu,s=iu;if(tu=0,ru=nu=null,iu=0,jl&6)throw Error(i(331));var c=jl;if(jl|=4,El(o.current),vl(o,o.current,s,n),jl=c,nd(0,!1),Se&&typeof Se.onPostCommitFiberRoot==`function`)try{Se.onPostCommitFiberRoot(xe,o)}catch{}return!0}finally{F.p=a,P.T=r,Ru(e,t)}}function Vu(e,t,n){t=ii(n,t),t=Hs(e.stateNode,t,2),e=Aa(e,t,2),e!==null&&(Le(e,2),td(e))}function Hu(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(eu===null||!eu.has(r))){e=ii(n,e),n=Us(2),r=Aa(t,n,2),r!==null&&(Ws(n,r,t,e),Le(r,2),td(r));break}}t=t.return}}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Al;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(zl=!0,i.add(n),e=Wu.bind(null,e,t,n),t.then(e,e))}function Wu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ml===e&&(Pl&n)===n&&(Vl===4||Vl===3&&(Pl&62914560)===Pl&&300>fe()-Xl?!(jl&2)&&yu(e,0):Wl|=n,Kl===Pl&&(Kl=0)),td(e)}function Gu(e,t){t===0&&(t=Fe()),e=Ur(e,t),e!==null&&(Le(e,t),td(e))}function Ku(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gu(e,n)}function qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Gu(e,n)}function Ju(e,t){return ce(e,t)}var Yu=null,Xu=null,Zu=!1,Qu=!1,$u=!1,ed=0;function td(e){e!==Xu&&e.next===null&&(Xu===null?Yu=Xu=e:Xu=Xu.next=e),Qu=!0,Zu||(Zu=!0,cd())}function nd(e,t){if(!$u&&Qu){$u=!0;do for(var n=!1,r=Yu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-we(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,sd(r,a))}else a=Pl,a=Me(r,r===Ml?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ne(r,a)||(n=!0,sd(r,a));r=r.next}while(n);$u=!1}}function rd(){id()}function id(){Qu=Zu=!1;var e=0;ed!==0&&Gd()&&(e=ed);for(var t=fe(),n=null,r=Yu;r!==null;){var i=r.next,a=ad(r,t);a===0?(r.next=null,n===null?Yu=i:n.next=i,i===null&&(Xu=n)):(n=r,(e!==0||a&3)&&(Qu=!0)),r=i}tu!==0&&tu!==5||nd(e,!1),ed!==0&&(ed=0)}function ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-we(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Pe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ml,n=Pl,n=Me(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Fl===2||Fl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&le(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ne(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&le(r),Ue(n)){case 2:case 8:n=he;break;case 32:n=ge;break;case 268435456:n=ve;break;default:n=ge}return r=od.bind(null,e),n=ce(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&le(r),e.callbackPriority=2,e.callbackNode=null,2}function od(e,t){if(tu!==0&&tu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(zu()&&e.callbackNode!==n)return null;var r=Pl;return r=Me(e,e===Ml?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(pu(e,r,t),ad(e,fe()),e.callbackNode!=null&&e.callbackNode===n?od.bind(null,e):null)}function sd(e,t){if(zu())return null;pu(e,t,!0)}function cd(){Yd(function(){jl&6?ce(me,rd):id()})}function ld(){if(ed===0){var e=Qi;e===0&&(e=Oe,Oe<<=1,!(Oe&261888)&&(Oe=256)),ed=e}return ed}function ud(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:zt(``+e)}function dd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function fd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=ud((i[Je]||null).action),o=r.submitter;o&&(t=(t=o[Je]||null)?ud(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new cn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ed!==0){var e=o?dd(i,o):new FormData(i);ms(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?dd(i,o):new FormData(i),ms(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var pd=0;pd<Pr.length;pd++){var md=Pr[pd];Fr(md.toLowerCase(),`on`+(md[0].toUpperCase()+md.slice(1)))}Fr(Er,`onAnimationEnd`),Fr(Dr,`onAnimationIteration`),Fr(Or,`onAnimationStart`),Fr(`dblclick`,`onDoubleClick`),Fr(`focusin`,`onFocus`),Fr(`focusout`,`onBlur`),Fr(kr,`onTransitionRun`),Fr(Ar,`onTransitionStart`),Fr(jr,`onTransitionCancel`),Fr(Mr,`onTransitionEnd`),ut(`onMouseEnter`,[`mouseout`,`mouseover`]),ut(`onMouseLeave`,[`mouseout`,`mouseover`]),ut(`onPointerEnter`,[`pointerout`,`pointerover`]),ut(`onPointerLeave`,[`pointerout`,`pointerover`]),lt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),lt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),lt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),lt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),lt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),lt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var hd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),gd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(hd));function _d(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ir(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ir(e)}i.currentTarget=null,a=c}}}}function vd(e,t){var n=t[Xe];n===void 0&&(n=t[Xe]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,st.forEach(function(t){t!==`selectionchange`&&(gd.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!Xt||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=nt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}qt(function(){var r=a,i=Ht(n),s=[];a:{var c=Nr.get(e);if(c!==void 0){var l=cn,u=e;switch(e){case`keypress`:if(nn(n)===0)break a;case`keydown`:case`keyup`:l=Tn;break;case`focusin`:u=`focus`,l=gn;break;case`focusout`:u=`blur`,l=gn;break;case`beforeblur`:case`afterblur`:l=gn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=mn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=hn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Dn;break;case Er:case Dr:case Or:l=_n;break;case Mr:l=On;break;case`scroll`:case`scrollend`:l=un;break;case`wheel`:l=kn;break;case`copy`:case`cut`:case`paste`:l=vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=En;break;case`toggle`:case`beforetoggle`:l=An}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Jt(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Vt&&(u=n.relatedTarget||n.fromElement)&&(nt(u)||u[Ye]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?nt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=mn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=En,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:it(l),h=u==null?c:it(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,nt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?it(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=Xn;else if(Gn(c))if(Zn)v=or;else{v=ir;var y=rr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&It(r.elementType)&&(v=Xn):v=ar;if(v&&=v(e,r)){Q(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ot(c,`number`,c.value)}switch(y=r?it(r):window,e){case`focusin`:(Gn(y)||y.contentEditable===`true`)&&(gr=y,_r=r,vr=null);break;case`focusout`:vr=_r=gr=null;break;case`mousedown`:yr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:yr=!1,br(s,n,i);break;case`selectionchange`:if(hr)break;case`keydown`:case`keyup`:br(s,n,i)}var b;if(Mn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Hn?Bn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Ln&&n.locale!==`ko`&&(Hn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Hn&&(b=tn()):(Qt=i,$t=`value`in Qt?Qt.value:Qt.textContent,Hn=!0)),y=Td(r,x),0<y.length&&(x=new yn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Vn(n),b!==null&&(x.data=b)))),(b=Fn?Un(e,n):Z(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new yn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),fd(s,e,r,n,i)}_d(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Jt(e,n),i!=null&&r.unshift(wd(e,i,a)),i=Jt(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Jt(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=Jt(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Mt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Mt(e,``+r);break;case`className`:gt(e,`class`,r);break;case`tabIndex`:gt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:gt(e,n,r);break;case`style`:Ft(e,r,o);break;case`data`:if(t!==`object`){gt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=zt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=zt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Bt);break;case`onScroll`:r!=null&&vd(`scroll`,e);break;case`onScrollEnd`:r!=null&&vd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=zt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:vd(`beforetoggle`,e),vd(`toggle`,e),ht(e,`popover`,r);break;case`xlinkActuate`:_t(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:_t(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:_t(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:_t(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:_t(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:_t(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:_t(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:_t(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:_t(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:ht(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Lt.get(n)||n,ht(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Ft(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Mt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Mt(e,``+r);break;case`onScroll`:r!=null&&vd(`scroll`,e);break;case`onScrollEnd`:r!=null&&vd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Bt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!ct.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[Je]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):ht(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:vd(`error`,e),vd(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:vd(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Dt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in vd(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&kt(e,!!r,n,!0):kt(e,!!r,t,!1);return;case`textarea`:for(s in vd(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}jt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:vd(`beforetoggle`,e),vd(`toggle`,e),vd(`cancel`,e),vd(`close`,e);break;case`iframe`:case`object`:vd(`load`,e);break;case`video`:case`audio`:for(r=0;r<hd.length;r++)vd(hd[r],e);break;case`image`:vd(`error`,e),vd(`load`,e);break;case`details`:vd(`toggle`,e);break;case`embed`:case`source`:case`link`:vd(`error`,e),vd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(It(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Et(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?kt(e,!!n,n?[]:``,!1):kt(e,!!n,t,!0)):kt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}At(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(It(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[et]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[et])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=F.d;F.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=_u();return e||t}function yf(e){var t=rt(e);t!==null&&t.tag===5&&t.type===`form`?gs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Tt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Tt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Tt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Tt(n.imageSizes)+`"]`)):i+=`[href="`+Tt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=p({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Tt(r)+`"][href="`+Tt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=p({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=at(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=p({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=at(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=at(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=W.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=at(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=at(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=at(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Tt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Tt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Tt(n.href)+`"]`);if(r)return t.instance=r,ot(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),ot(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,ot(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,ot(a),a):(r=n,(a=mf.get(o))&&(r=p({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),ot(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[et]||a[qe]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:x,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ie(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ie(0),this.hiddenUpdates=Ie(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Jr(3,null,null,t),e.current=a,a.stateNode=e,t=Ji(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Da(a),e}function tp(e){return e?(e=Kr,e):Kr}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Aa(e,r,t),n!==null&&(fu(n,e,t),ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Ur(e,67108864);t!==null&&fu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=uu();t=He(t);var n=Ur(e,t);n!==null&&fu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,up(e,t,n,r)}finally{F.p=a,P.T=i}}function lp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,up(e,t,n,r)}finally{F.p=a,P.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=rt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=je(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-we(o);s.entanglements[1]|=c,o&=~c}td(a),!(jl&6)&&(Ql=fe()+500,nd(0,!1))}}break;case 31:case 13:s=Ur(a,2),s!==null&&fu(s,a,2),_u(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=Ht(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=nt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(pe()){case me:return 2;case he:return 8;case ge:case _e:return 32;case ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=rt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=nt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Ge(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Ge(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vt=r,n.target.dispatchEvent(r),Vt=null}else return t=rt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=rt(n);a!==null&&(e.splice(t,3),t-=3,ms(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Je]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Je]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,uu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),_u(),t[Ye]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=We();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{xe=zp.inject(Rp),Se=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ls,s=Rs,c=zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[Ye]=t.current,xd(e),new Fp(t)}})),Rn=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Ln()}))(),zn=o((e=>{var t=d().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),Bn=o(((e,t)=>{t.exports=zn()}));function Vn(e,t){return new Proxy({},{get(n,r){if(typeof r==`string`)return Vn(e,[...t,r]);if(r===Ze){if(t.length<1){let n=[e,...t].join(`.`);throw Error(`API path is expected to be of the form \`${e}.childComponent.functionName\`. Found: \`${n}\``)}return`_reference/childComponent/`+t.join(`/`)}else return}})}var Hn=()=>Vn(`components`,[]),Un=Bn(),Z=it;Hn();var Wn=`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,Gn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Q=o(((e,t)=>{t.exports=Gn()}))(),Kn={dashboard:[`M3 3h7v7H3z M14 3h7v4h-7z M14 11h7v10h-7z M3 14h7v7H3z`],group:[`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M22 21v-2a4 4 0 0 0-3-3.87`,`M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M17 3.13a4 4 0 0 1 0 7.75`],school:[`m2 9 10-6 10 6-10 6-10-6 M6 11.4V17q6 5 12 0v-5.6 M22 9v8`],archive:[`M3 3h18v5H3z M5 8v13h14V8 M10 12h4`],billing:[`M14 2H4v20h16V8l-6-6 M14 2v6h6 M7 12h10 M7 16h10 M11 12v8`],images:[`M3 3h18v18H3z M3 16l6-6 5 5 3-3 4 4`,`M16 8h.01`],history:[`M3 11a9 9 0 1 1 2.6 7.4 M3 4v7h7 M12 7v5l3 2`],forum:[`M14 14H6l-4 4V3h16v7 M10 17v3h8l4 3V10h-4`],manage_accounts:[`M14 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M19 10v2m0 6v2m-5-5h2m6 0h-2m-4.5-3.5 1.5 1.5m4 4 1.5 1.5m0-7L20 13m-4 4-1.5 1.5`,`M19 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6`],logout:[`M9 21H3V3h6 M9 12h13 m-5-5 5 5-5 5`],menu:[`M4 6h16 M4 12h16 M4 18h16`],close:[`m6 6 12 12 M18 6 6 18`],left_panel_open:[`M3 3h18v18H3z M8 3v18 m5-12 3 3-3 3`],left_panel_close:[`M3 3h18v18H3z M8 3v18 m8-12-3 3 3 3`]};function qn(e){let t=(0,Un.c)(4),{name:n}=e,r=Kn[n],i;t[0]===r?i=t[1]:(i=r.map(Jn),t[0]=r,t[1]=i);let a;return t[2]===i?a=t[3]:(a=(0,Q.jsx)(`svg`,{className:`admin-sidebar-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.7`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:i}),t[2]=i,t[3]=a),a}function Jn(e,t){return(0,Q.jsx)(`path`,{d:e},t)}var Yn=[{label:`Main dashboard`,items:[{id:`dashboard`,label:`Dashboard`,icon:`dashboard`},{id:`records`,label:`Grantee Records`,icon:`group`}]},{label:`Scholarship operations`,items:[{id:`portal`,label:`UniFAST Portal`,icon:`school`},{id:`archive`,label:`Archive`,icon:`archive`},{id:`logs`,label:`Activity Logs`,icon:`history`},{id:`billing`,label:`Billing Management`,icon:`billing`},{id:`form2`,label:`Form 2 List`,icon:`billing`}]},{label:`Student services`,items:[{id:`support`,label:`Student Support`,icon:`forum`}]},{label:`Administration`,items:[{id:`users`,label:`User Management`,icon:`manage_accounts`},{id:`documentation`,label:`Documentation`,icon:`images`}]}];function Xn(e){let t=(0,Un.c)(54),{activeItem:n,onNavigate:r,onLogout:i}=e,[a,o]=(0,X.useState)(!1),[s,c]=(0,X.useState)(!1),l=(0,X.useRef)(null),u=(0,X.useRef)(null),d;t[0]===n?d=t[1]:(d=Yn.flatMap($n).find(e=>e.id===n)?.label||`Dashboard`,t[0]=n,t[1]=d);let f=d,p,m;t[2]===a?(p=t[3],m=t[4]):(p=()=>{if(!a)return;let e=l.current,t=u.current,n=document.querySelector(`.admin-main`),r=document.body.style.overflow,i=n?.inert;document.body.style.overflow=`hidden`,n&&(n.inert=!0),e.querySelector(`button`)?.focus();let s=t=>{if(t.key===`Escape`&&(t.preventDefault(),o(!1)),t.key!==`Tab`)return;let n=[...e.querySelectorAll(`button:not([disabled])`)].filter(Qn),r=n[0],i=n.at(-1);t.shiftKey&&document.activeElement===r?(t.preventDefault(),i?.focus()):!t.shiftKey&&document.activeElement===i&&(t.preventDefault(),r?.focus())},c=window.matchMedia(`(min-width: 768px)`),d=()=>{c.matches&&o(!1)};return document.addEventListener(`keydown`,s),c.addEventListener(`change`,d),()=>{document.body.style.overflow=r,n&&(n.inert=i),document.removeEventListener(`keydown`,s),c.removeEventListener(`change`,d),t?.focus()}},m=[a],t[2]=a,t[3]=p,t[4]=m),(0,X.useEffect)(p,m);let h;t[5]===r?h=t[6]:(h=e=>{o(!1),c(!1),r(e)},t[5]=r,t[6]=h);let g=h,_,v;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,Q.jsx)(`img`,{src:Wn,alt:`IBACMI`}),v=(0,Q.jsx)(`span`,{children:`Scholarship Office`}),t[7]=_,t[8]=v):(_=t[7],v=t[8]);let y;t[9]===f?y=t[10]:(y=(0,Q.jsxs)(`div`,{children:[v,(0,Q.jsx)(`strong`,{children:f})]}),t[9]=f,t[10]=y);let b,x;t[11]===Symbol.for(`react.memo_cache_sentinel`)?(b=()=>o(!0),x=(0,Q.jsx)(qn,{name:`menu`}),t[11]=b,t[12]=x):(b=t[11],x=t[12]);let S;t[13]===a?S=t[14]:(S=(0,Q.jsx)(`button`,{ref:u,type:`button`,"aria-label":`Open navigation`,"aria-expanded":a,"aria-controls":`admin-sidebar`,onClick:b,children:x}),t[13]=a,t[14]=S);let C;t[15]!==S||t[16]!==y?(C=(0,Q.jsxs)(`header`,{className:`admin-mobile-bar`,children:[_,y,S]}),t[15]=S,t[16]=y,t[17]=C):C=t[17];let w;t[18]===a?w=t[19]:(w=a&&(0,Q.jsx)(`div`,{className:`admin-sidebar-backdrop`,"aria-hidden":`true`,onClick:()=>o(!1)}),t[18]=a,t[19]=w);let T=`admin-sidebar${s?` is-pinned`:``}${a?` is-mobile-open`:``}`,E=a?`dialog`:void 0,D=a?!0:void 0,O;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(O=(0,Q.jsx)(`img`,{src:Wn,alt:`IBACMI`}),t[20]=O):O=t[20];let k;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,Q.jsxs)(`div`,{className:`admin-sidebar-reveal`,children:[(0,Q.jsx)(`strong`,{children:`IBACMI`}),(0,Q.jsx)(`span`,{children:`Scholarship Office`})]}),t[21]=k):k=t[21];let A;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(A=(0,Q.jsxs)(`div`,{className:`admin-sidebar-brand`,children:[O,k,(0,Q.jsx)(`button`,{type:`button`,className:`admin-sidebar-close`,"aria-label":`Close navigation`,onClick:()=>o(!1),children:(0,Q.jsx)(qn,{name:`close`})})]}),t[22]=A):A=t[22];let j=s?`Collapse navigation`:`Expand navigation`,M;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(M=()=>c(Zn),t[23]=M):M=t[23];let N=s?`left_panel_close`:`left_panel_open`,P;t[24]===N?P=t[25]:(P=(0,Q.jsx)(qn,{name:N}),t[24]=N,t[25]=P);let F=s?`Collapse menu`:`Expand menu`,I;t[26]===F?I=t[27]:(I=(0,Q.jsx)(`span`,{className:`admin-sidebar-reveal`,children:F}),t[26]=F,t[27]=I);let L;t[28]!==s||t[29]!==j||t[30]!==P||t[31]!==I?(L=(0,Q.jsxs)(`button`,{type:`button`,className:`admin-sidebar-toggle`,"aria-label":j,"aria-expanded":s,"aria-controls":`admin-sidebar-nav`,onClick:M,children:[P,I]}),t[28]=s,t[29]=j,t[30]=P,t[31]=I,t[32]=L):L=t[32];let R;t[33]!==n||t[34]!==g?(R=Yn.map(e=>(0,Q.jsxs)(`div`,{className:`admin-sidebar-group`,role:`group`,"aria-label":e.label,children:[(0,Q.jsx)(`p`,{className:`admin-sidebar-reveal`,children:e.label}),e.items.map(e=>(0,Q.jsxs)(`button`,{type:`button`,className:`admin-sidebar-item${n===e.id?` is-active`:``}`,"aria-label":e.label,title:e.label,"aria-current":n===e.id?`location`:void 0,onClick:()=>g(e.id),children:[(0,Q.jsx)(qn,{name:e.icon}),(0,Q.jsx)(`span`,{className:`admin-sidebar-reveal`,children:e.label})]},e.id))]},e.label)),t[33]=n,t[34]=g,t[35]=R):R=t[35];let z;t[36]===R?z=t[37]:(z=(0,Q.jsx)(`nav`,{id:`admin-sidebar-nav`,className:`admin-sidebar-nav`,"aria-label":`Admin navigation`,children:R}),t[36]=R,t[37]=z);let B;t[38]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,Q.jsx)(`p`,{className:`admin-sidebar-reveal`,children:`Account`}),t[38]=B):B=t[38];let V,H;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,Q.jsx)(qn,{name:`logout`}),H=(0,Q.jsx)(`span`,{className:`admin-sidebar-reveal`,children:`Logout`}),t[39]=V,t[40]=H):(V=t[39],H=t[40]);let U;t[41]===i?U=t[42]:(U=(0,Q.jsxs)(`div`,{className:`admin-sidebar-account`,children:[B,(0,Q.jsxs)(`button`,{type:`button`,className:`admin-sidebar-item admin-sidebar-logout`,"aria-label":`Logout`,title:`Logout`,onClick:i,children:[V,H]})]}),t[41]=i,t[42]=U);let W;t[43]!==T||t[44]!==E||t[45]!==D||t[46]!==L||t[47]!==z||t[48]!==U?(W=(0,Q.jsxs)(`aside`,{id:`admin-sidebar`,ref:l,className:T,role:E,"aria-modal":D,"aria-label":`Scholarship Office navigation`,children:[A,L,z,U]}),t[43]=T,t[44]=E,t[45]=D,t[46]=L,t[47]=z,t[48]=U,t[49]=W):W=t[49];let G;return t[50]!==C||t[51]!==w||t[52]!==W?(G=(0,Q.jsxs)(Q.Fragment,{children:[C,w,W]}),t[50]=C,t[51]=w,t[52]=W,t[53]=G):G=t[53],G}function Zn(e){return!e}function Qn(e){return e.getClientRects().length}function $n(e){return e.items}var er=`modulepreload`,tr=function(e){return`/IBACMI-Scholarship-Office/`+e},nr={},rr=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=tr(t,n),t in nr)return;nr[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:er,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ir=e=>new Intl.NumberFormat(`en-PH`,{style:`currency`,currency:`PHP`}).format(e/100),ar=()=>new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Manila`,year:`numeric`,month:`2-digit`,day:`2-digit`}).format(new Date);function or(e){let t=(0,Un.c)(3),n,r;t[0]===e?(n=t[1],r=t[2]):(n=()=>{let t=e.current,n=document.activeElement,r=document.body.style.overflow;return t.showModal(),document.body.style.overflow=`hidden`,()=>{t.close(),document.body.style.overflow=r,n?.isConnected&&n.focus({preventScroll:!0})}},r=[e],t[0]=e,t[1]=n,t[2]=r),(0,X.useEffect)(n,r)}function sr(e){if(e.key!==`Tab`)return;let t=[...e.currentTarget.querySelectorAll(`button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), summary`)].filter(t=>t.getClientRects().length&&t.closest(`dialog`)===e.currentTarget);e.shiftKey&&document.activeElement===t[0]?(e.preventDefault(),t.at(-1)?.focus()):!e.shiftKey&&document.activeElement===t.at(-1)&&(e.preventDefault(),t[0]?.focus())}function cr(e){let t=(0,Un.c)(10),{label:n,children:r}=e,i;t[0]===n?i=t[1]:(i=(0,Q.jsx)(`span`,{children:n}),t[0]=n,t[1]=i);let a;if(t[2]!==r||t[3]!==n){let e;t[5]===n?e=t[6]:(e=e=>(0,X.isValidElement)(e)&&[`input`,`select`,`textarea`].includes(e.type)?(0,X.cloneElement)(e,{"aria-label":n}):e,t[5]=n,t[6]=e),a=X.Children.map(r,e),t[2]=r,t[3]=n,t[4]=a}else a=t[4];let o;return t[7]!==i||t[8]!==a?(o=(0,Q.jsxs)(`label`,{className:`billing-field`,children:[i,a]}),t[7]=i,t[8]=a,t[9]=o):o=t[9],o}var lr=()=>({category:``,tes1Cap:0,tes2:0,tes3a:0});function ur(e){let t=(0,Un.c)(74),{config:n,statuses:r,onSave:i,busy:a}=e,o;t[0]===n?o=t[1]:(o=()=>n?{referenceFormat:n.referenceFormat,authority:n.authority,eligibleStatuses:n.eligibleStatuses,rates:n.rates,ascBasisPoints:n.ascBasisPoints,ascAuthorized:n.ascAuthorized,priorBillingReviewed:n.priorBillingReviewed,priorTranches:n.priorTranches,priorBilledStudentIds:n.priorBilledStudentIds.join(`
`)}:{referenceFormat:``,authority:``,eligibleStatuses:[],rates:[lr()],ascBasisPoints:0,ascAuthorized:!1,priorBillingReviewed:!1,priorTranches:0,priorBilledStudentIds:``},t[0]=n,t[1]=o);let[s,c]=(0,X.useState)(o),l;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(l=(e,t)=>c(n=>({...n,[e]:t})),t[2]=l):l=t[2];let u=l,d=!n,f=n?`· configured`:`· setup required`,p;t[3]===f?p=t[4]:(p=(0,Q.jsxs)(`summary`,{children:[`Verified billing rules & prior history `,f]}),t[3]=f,t[4]=p);let m;t[5]!==s||t[6]!==i?(m=e=>{e.preventDefault(),i({...s,priorBilledStudentIds:s.priorBilledStudentIds.split(/[\n,;]+/).map(dr).filter(Boolean)})},t[5]=s,t[6]=i,t[7]=m):m=t[7];let h;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,Q.jsx)(`p`,{className:`billing-hint`,children:`Enter the school’s approved rules for this semester and school year. Sample workbook amounts are not rates. Existing grantee records are preserved.`}),t[8]=h):h=t[8];let g;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(g=e=>u(`authority`,e.target.value),t[9]=g):g=t[9];let _;t[10]===s.authority?_=t[11]:(_=(0,Q.jsx)(cr,{label:`Approved policy / authorization reference`,children:(0,Q.jsx)(`input`,{required:!0,maxLength:500,value:s.authority,onChange:g,placeholder:`Document or approval authorizing these rules`})}),t[10]=s.authority,t[11]=_);let v;t[12]===Symbol.for(`react.memo_cache_sentinel`)?(v=e=>u(`referenceFormat`,e.target.value),t[12]=v):v=t[12];let y;t[13]===s.referenceFormat?y=t[14]:(y=(0,Q.jsx)(`input`,{required:!0,maxLength:120,value:s.referenceFormat,onChange:v,placeholder:`Enter the school-approved format`}),t[13]=s.referenceFormat,t[14]=y);let b;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,Q.jsxs)(`small`,{children:[`Optional tokens: `,`{YEAR}`,` (AY start), `,`{TERM}`,` (1/2), `,`{TRANCHE}`,` (1/2). No official format is assumed.`]}),t[15]=b):b=t[15];let x;t[16]===y?x=t[17]:(x=(0,Q.jsxs)(cr,{label:`Authorized reference format`,children:[y,b]}),t[16]=y,t[17]=x);let S=s.ascBasisPoints/100,C;t[18]===Symbol.for(`react.memo_cache_sentinel`)?(C=e=>u(`ascBasisPoints`,Math.round(Number(e.target.value)*100)),t[18]=C):C=t[18];let w;t[19]===S?w=t[20]:(w=(0,Q.jsx)(cr,{label:`Administrative support cost (%)`,children:(0,Q.jsx)(`input`,{type:`number`,min:`0`,max:`100`,step:`0.01`,value:S,onChange:C})}),t[19]=S,t[20]=w);let T;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(T=e=>u(`ascAuthorized`,e.target.checked),t[21]=T):T=t[21];let E;t[22]===s.ascAuthorized?E=t[23]:(E=(0,Q.jsxs)(`label`,{className:`billing-check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:s.ascAuthorized,onChange:T}),`Administrative support is authorized for these benefits.`]}),t[22]=s.ascAuthorized,t[23]=E);let D;t[24]!==x||t[25]!==w||t[26]!==E||t[27]!==_?(D=(0,Q.jsxs)(`div`,{className:`billing-form-grid`,children:[_,x,w,E]}),t[24]=x,t[25]=w,t[26]=E,t[27]=_,t[28]=D):D=t[28];let O;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(O=(0,Q.jsx)(`legend`,{children:`Eligible source statuses (explicit review is also required per student)`}),t[29]=O):O=t[29];let k;if(t[30]!==s.eligibleStatuses||t[31]!==r){let e;t[33]===s.eligibleStatuses?e=t[34]:(e=e=>(0,Q.jsxs)(`label`,{className:`billing-check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:s.eligibleStatuses.includes(e),onChange:t=>u(`eligibleStatuses`,t.target.checked?[...s.eligibleStatuses,e]:s.eligibleStatuses.filter(t=>t!==e))}),e]},e),t[33]=s.eligibleStatuses,t[34]=e),k=r.map(e),t[30]=s.eligibleStatuses,t[31]=r,t[32]=k}else k=t[32];let A;t[35]===k?A=t[36]:(A=(0,Q.jsxs)(`fieldset`,{children:[O,(0,Q.jsx)(`div`,{className:`billing-checks`,children:k})]}),t[35]=k,t[36]=A);let j;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:`TES category`}),(0,Q.jsx)(`th`,{children:`TES-1 cap (PHP)`}),(0,Q.jsx)(`th`,{children:`TES-2 stipend (PHP)`}),(0,Q.jsx)(`th`,{children:`TES-3A (PHP)`}),(0,Q.jsx)(`th`,{})]})}),t[37]=j):j=t[37];let M;t[38]===s.rates?M=t[39]:(M=s.rates.map((e,t)=>(0,Q.jsxs)(`tr`,{children:[[`category`,`tes1Cap`,`tes2`,`tes3a`].map(n=>(0,Q.jsx)(`td`,{children:(0,Q.jsx)(`input`,{"aria-label":`${n} for category ${t+1}`,required:!0,type:n===`category`?`text`:`number`,min:n===`category`?void 0:0,step:n===`category`?void 0:`0.01`,value:e[n],onChange:e=>u(`rates`,s.rates.map((r,i)=>i===t?{...r,[n]:n===`category`?e.target.value:Number(e.target.value)}:r))})},n)),(0,Q.jsx)(`td`,{children:(0,Q.jsx)(`button`,{type:`button`,className:`billing-text-button`,disabled:s.rates.length===1,onClick:()=>u(`rates`,s.rates.filter((e,n)=>n!==t)),children:`Remove`})})]},t)),t[38]=s.rates,t[39]=M);let N;t[40]===M?N=t[41]:(N=(0,Q.jsx)(`div`,{className:`billing-scroll`,children:(0,Q.jsxs)(`table`,{className:`billing-rate-table`,children:[j,(0,Q.jsx)(`tbody`,{children:M})]})}),t[40]=M,t[41]=N);let P;t[42]===s.rates?P=t[43]:(P=(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,onClick:()=>u(`rates`,[...s.rates,lr()]),children:`+ Add category`}),t[42]=s.rates,t[43]=P);let F;t[44]===Symbol.for(`react.memo_cache_sentinel`)?(F=(0,Q.jsx)(`p`,{className:`billing-hint`,children:`TES-1 is the lower of verified actual fees and the approved category cap. TES-2 uses the approved stipend. TES-3A applies only after disability eligibility is verified. ASC applies to the combined benefit subtotal when authorized.`}),t[44]=F):F=t[44];let I;t[45]===Symbol.for(`react.memo_cache_sentinel`)?(I=e=>u(`priorBilledStudentIds`,e.target.value),t[45]=I):I=t[45];let L;t[46]===s.priorBilledStudentIds?L=t[47]:(L=(0,Q.jsx)(cr,{label:`Previously billed Student IDs for this period (one per line)`,children:(0,Q.jsx)(`textarea`,{rows:3,value:s.priorBilledStudentIds,onChange:I,placeholder:`Include billings issued before this system was introduced`})}),t[46]=s.priorBilledStudentIds,t[47]=L);let R;t[48]===Symbol.for(`react.memo_cache_sentinel`)?(R=e=>u(`priorTranches`,Number(e.target.value)),t[48]=R):R=t[48];let z;t[49]===s.priorTranches?z=t[50]:(z=(0,Q.jsx)(`input`,{type:`number`,required:!0,min:`0`,max:`2`,step:`1`,value:s.priorTranches,onChange:R}),t[49]=s.priorTranches,t[50]=z);let B;t[51]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,Q.jsx)(`small`,{children:`Previously saved billed IDs and tranche counts cannot be reduced. New reports count toward the two-tranche limit.`}),t[51]=B):B=t[51];let V;t[52]===z?V=t[53]:(V=(0,Q.jsxs)(cr,{label:`Billing tranches issued before this system (0–2)`,children:[z,B]}),t[52]=z,t[53]=V);let H;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(H=e=>u(`priorBillingReviewed`,e.target.checked),t[54]=H):H=t[54];let U;t[55]===s.priorBillingReviewed?U=t[56]:(U=(0,Q.jsxs)(`label`,{className:`billing-check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:s.priorBillingReviewed,onChange:H}),`I checked the complete prior billing history for this period and entered previously billed students, if any.`]}),t[55]=s.priorBillingReviewed,t[56]=U);let W=a?`Saving…`:`Save verified period rules`,G;t[57]!==a||t[58]!==W?(G=(0,Q.jsx)(`button`,{className:`billing-primary`,disabled:a,type:`submit`,children:W}),t[57]=a,t[58]=W,t[59]=G):G=t[59];let K;t[60]!==D||t[61]!==A||t[62]!==N||t[63]!==P||t[64]!==L||t[65]!==V||t[66]!==U||t[67]!==G||t[68]!==m?(K=(0,Q.jsxs)(`form`,{onSubmit:m,children:[h,D,A,N,P,F,L,V,U,G]}),t[60]=D,t[61]=A,t[62]=N,t[63]=P,t[64]=L,t[65]=V,t[66]=U,t[67]=G,t[68]=m,t[69]=K):K=t[69];let ee;return t[70]!==d||t[71]!==K||t[72]!==p?(ee=(0,Q.jsxs)(`details`,{className:`billing-rules`,open:d,children:[p,K]}),t[70]=d,t[71]=K,t[72]=p,t[73]=ee):ee=t[73],ee}function dr(e){return e.trim()}function fr(e){let t=(0,Un.c)(78),{row:n,categories:r,onSave:i,onClose:a,busy:o,error:s}=e,c=(0,X.useRef)(null);or(c);let[l,u]=(0,X.useState)(n.profile),d;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(d=(e,t)=>u(n=>({...n,[e]:t})),t[0]=d):d=t[0];let f=d,p;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(p=[[`lastName`,`Last name`],[`firstName`,`Given name`],[`middleInitial`,`Middle initial (optional)`],[`campus`,`Campus`],[`college`,`College`],[`program`,`Degree program`],[`yearLevel`,`Year level`],[`birthDate`,`Birthdate`],[`units`,`Academic units`],[`zip`,`ZIP code`],[`email`,`Email`],[`phone`,`Phone`],[`actualFees`,`Verified tuition & other fees (PHP)`]],t[1]=p):p=t[1];let m=p,h;t[2]!==o||t[3]!==a?(h=e=>{e.preventDefault(),e.stopPropagation(),o||a()},t[2]=o,t[3]=a,t[4]=h):h=t[4];let g;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,Q.jsx)(`p`,{className:`billing-kicker`,children:`Student billing review`}),t[5]=g):g=t[5];let _;t[6]===n.studentId?_=t[7]:(_=(0,Q.jsxs)(`div`,{children:[g,(0,Q.jsx)(`h2`,{id:`billing-review-title`,children:n.studentId})]}),t[6]=n.studentId,t[7]=_);let v;t[8]!==o||t[9]!==a?(v=(0,Q.jsx)(`button`,{type:`button`,className:`billing-close`,"aria-label":`Close student billing review`,disabled:o,onClick:a,children:`×`}),t[8]=o,t[9]=a,t[10]=v):v=t[10];let y;t[11]!==_||t[12]!==v?(y=(0,Q.jsxs)(`header`,{className:`billing-header`,children:[_,v]}),t[11]=_,t[12]=v,t[13]=y):y=t[13];let b;t[14]!==i||t[15]!==l?(b=e=>{e.preventDefault(),i(l)},t[14]=i,t[15]=l,t[16]=b):b=t[16];let x;t[17]===s?x=t[18]:(x=s&&(0,Q.jsx)(`p`,{className:`billing-error`,role:`alert`,children:s}),t[17]=s,t[18]=x);let S;t[19]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,Q.jsx)(`p`,{className:`billing-hint`,children:`Verify against enrollment and financial records. Available applicant details are suggested only for a unique Student ID and school-year match. Changes are saved only to the billing profile.`}),t[19]=S):S=t[19];let C=l.sourceRecordId,w;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(w=e=>f(`sourceRecordId`,e.target.value),t[20]=w):w=t[20];let T;t[21]===n.sourceChoices?T=t[22]:(T=n.sourceChoices.map(mr),t[21]=n.sourceChoices,t[22]=T);let E;t[23]!==l.sourceRecordId||t[24]!==T?(E=(0,Q.jsx)(cr,{label:`Authoritative grantee source`,children:(0,Q.jsx)(`select`,{value:C,onChange:w,children:T})}),t[23]=l.sourceRecordId,t[24]=T,t[25]=E):E=t[25];let D=l.category,O,k;t[26]===Symbol.for(`react.memo_cache_sentinel`)?(O=e=>f(`category`,e.target.value),k=(0,Q.jsx)(`option`,{value:``,children:`Select category`}),t[26]=O,t[27]=k):(O=t[26],k=t[27]);let A;t[28]===r?A=t[29]:(A=r.map(pr),t[28]=r,t[29]=A);let j;t[30]!==l.category||t[31]!==A?(j=(0,Q.jsx)(cr,{label:`TES benefit category`,children:(0,Q.jsxs)(`select`,{value:D,onChange:O,children:[k,A]})}),t[30]=l.category,t[31]=A,t[32]=j):j=t[32];let M;t[33]===l?M=t[34]:(M=m.map(e=>{let[t,n]=e;return(0,Q.jsx)(cr,{label:n,children:(0,Q.jsx)(`input`,{type:[`units`,`actualFees`].includes(t)?`number`:t===`birthDate`?`date`:t===`email`?`email`:`text`,step:[`units`,`actualFees`].includes(t)?`0.01`:void 0,min:[`units`,`actualFees`].includes(t)?0:void 0,maxLength:500,value:l[t],onChange:e=>f(t,[`units`,`actualFees`].includes(t)?Number(e.target.value):e.target.value)})},t)}),t[33]=l,t[34]=M);let N,P,F,I;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(N=e=>f(`sex`,e.target.value),P=(0,Q.jsx)(`option`,{value:``,children:`Select`}),F=(0,Q.jsx)(`option`,{children:`M`}),I=(0,Q.jsx)(`option`,{children:`F`}),t[35]=N,t[36]=P,t[37]=F,t[38]=I):(N=t[35],P=t[36],F=t[37],I=t[38]);let L;t[39]===l.sex?L=t[40]:(L=(0,Q.jsx)(cr,{label:`Sex at birth`,children:(0,Q.jsxs)(`select`,{value:l.sex,onChange:N,children:[P,F,I]})}),t[39]=l.sex,t[40]=L);let R;t[41]!==E||t[42]!==j||t[43]!==M||t[44]!==L?(R=(0,Q.jsxs)(`div`,{className:`billing-form-grid`,children:[E,j,M,L]}),t[41]=E,t[42]=j,t[43]=M,t[44]=L,t[45]=R):R=t[45];let z;t[46]===Symbol.for(`react.memo_cache_sentinel`)?(z=e=>f(`disabilityVerified`,e.target.checked),t[46]=z):z=t[46];let B;t[47]===l.disabilityVerified?B=t[48]:(B=(0,Q.jsxs)(`label`,{className:`billing-check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:l.disabilityVerified,onChange:z}),`TES-3A disability entitlement verified against supporting records.`]}),t[47]=l.disabilityVerified,t[48]=B);let V;t[49]===Symbol.for(`react.memo_cache_sentinel`)?(V=e=>f(`eligible`,e.target.checked),t[49]=V):V=t[49];let H;t[50]===l.eligible?H=t[51]:(H=(0,Q.jsxs)(`label`,{className:`billing-check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:l.eligible,onChange:V}),`Enrollment, TES category and billing entitlement verified for this period.`]}),t[50]=l.eligible,t[51]=H);let U;t[52]===Symbol.for(`react.memo_cache_sentinel`)?(U=e=>f(`reviewNote`,e.target.value),t[52]=U):U=t[52];let W;t[53]===l.reviewNote?W=t[54]:(W=(0,Q.jsx)(cr,{label:`Verification evidence or exclusion reason`,children:(0,Q.jsx)(`textarea`,{required:!0,maxLength:500,rows:3,value:l.reviewNote,onChange:U})}),t[53]=l.reviewNote,t[54]=W);let G;t[55]!==R||t[56]!==B||t[57]!==H||t[58]!==W||t[59]!==x?(G=(0,Q.jsxs)(`div`,{className:`billing-body`,children:[x,S,R,B,H,W]}),t[55]=R,t[56]=B,t[57]=H,t[58]=W,t[59]=x,t[60]=G):G=t[60];let K;t[61]!==o||t[62]!==a?(K=(0,Q.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:o,onClick:a,children:`Cancel`}),t[61]=o,t[62]=a,t[63]=K):K=t[63];let ee=o?`Saving…`:`Save billing review`,q;t[64]!==o||t[65]!==ee?(q=(0,Q.jsx)(`button`,{className:`billing-primary`,disabled:o,type:`submit`,children:ee}),t[64]=o,t[65]=ee,t[66]=q):q=t[66];let te;t[67]!==K||t[68]!==q?(te=(0,Q.jsxs)(`footer`,{className:`billing-footer`,children:[K,q]}),t[67]=K,t[68]=q,t[69]=te):te=t[69];let J;t[70]!==G||t[71]!==te||t[72]!==b?(J=(0,Q.jsxs)(`form`,{className:`billing-review-form`,onSubmit:b,children:[G,te]}),t[70]=G,t[71]=te,t[72]=b,t[73]=J):J=t[73];let Y;return t[74]!==h||t[75]!==J||t[76]!==y?(Y=(0,Q.jsxs)(`dialog`,{ref:c,className:`billing-dialog billing-review-dialog`,"aria-labelledby":`billing-review-title`,onKeyDown:sr,onCancel:h,children:[y,J]}),t[74]=h,t[75]=J,t[76]=y,t[77]=Y):Y=t[77],Y}function pr(e){return(0,Q.jsx)(`option`,{children:e.category},e.category)}function mr(e){return(0,Q.jsx)(`option`,{value:e.id,children:e.label},e.id)}function hr(e){let t=(0,Un.c)(46),{onClose:n,onDownload:r,busy:i,finalized:a,error:o}=e,s=(0,X.useRef)(null);or(s);let[c,l]=(0,X.useState)(`xlsx`),u;t[0]!==i||t[1]!==n?(u=e=>{e.preventDefault(),e.stopPropagation(),i||n()},t[0]=i,t[1]=n,t[2]=u):u=t[2];let d;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`billing-kicker`,children:`Export billing forms`}),(0,Q.jsx)(`h2`,{id:`billing-format-title`,children:`Choose Download Format`})]}),t[3]=d):d=t[3];let f;t[4]!==i||t[5]!==n?(f=(0,Q.jsxs)(`header`,{className:`billing-header`,children:[d,(0,Q.jsx)(`button`,{className:`billing-close`,type:`button`,"aria-label":`Close download formats`,disabled:i,onClick:n,children:`×`})]}),t[4]=i,t[5]=n,t[6]=f):f=t[6];let p;t[7]===o?p=t[8]:(p=o&&(0,Q.jsx)(`p`,{className:`billing-error`,role:`alert`,children:o}),t[7]=o,t[8]=p);let m=c===`xlsx`,h;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(h=()=>l(`xlsx`),t[9]=h):h=t[9];let g;t[10]===m?g=t[11]:(g=(0,Q.jsx)(`input`,{type:`radio`,name:`billing-format`,checked:m,onChange:h}),t[10]=m,t[11]=g);let _;t[12]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:`Excel Report`}),(0,Q.jsx)(`p`,{children:`Both original worksheets, editable details, formatting and formulas.`})]}),t[12]=_):_=t[12];let v;t[13]===g?v=t[14]:(v=(0,Q.jsxs)(`label`,{className:`billing-format-option`,children:[g,_]}),t[13]=g,t[14]=v);let y=c===`pdf`,b;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(b=()=>l(`pdf`),t[15]=b):b=t[15];let x;t[16]===y?x=t[17]:(x=(0,Q.jsx)(`input`,{type:`radio`,name:`billing-format`,checked:y,onChange:b}),t[16]=y,t[17]=x);let S;t[18]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:`PDF Report`}),(0,Q.jsx)(`p`,{children:`Printable statement and complete billing details with page breaks.`})]}),t[18]=S):S=t[18];let C;t[19]===x?C=t[20]:(C=(0,Q.jsxs)(`label`,{className:`billing-format-option`,children:[x,S]}),t[19]=x,t[20]=C);let w=a?`This downloads the saved report again. No additional billing entries are created.`:`Downloading finalizes this report and reserves its eligible students in the billing ledger. Review all amounts before proceeding.`,T;t[21]===w?T=t[22]:(T=(0,Q.jsx)(`p`,{className:`billing-notice`,children:w}),t[21]=w,t[22]=T);let E;t[23]!==C||t[24]!==T||t[25]!==p||t[26]!==v?(E=(0,Q.jsxs)(`div`,{className:`billing-body`,children:[p,v,C,T]}),t[23]=C,t[24]=T,t[25]=p,t[26]=v,t[27]=E):E=t[27];let D;t[28]!==i||t[29]!==n?(D=(0,Q.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:i,onClick:n,children:`Cancel`}),t[28]=i,t[29]=n,t[30]=D):D=t[30];let O;t[31]!==c||t[32]!==r?(O=()=>r(c),t[31]=c,t[32]=r,t[33]=O):O=t[33];let k=i?`Preparing…`:`Download ${c===`xlsx`?`Excel`:`PDF`}`,A;t[34]!==i||t[35]!==O||t[36]!==k?(A=(0,Q.jsx)(`button`,{className:`billing-primary`,disabled:i,type:`button`,onClick:O,children:k}),t[34]=i,t[35]=O,t[36]=k,t[37]=A):A=t[37];let j;t[38]!==D||t[39]!==A?(j=(0,Q.jsxs)(`footer`,{className:`billing-footer`,children:[D,A]}),t[38]=D,t[39]=A,t[40]=j):j=t[40];let M;return t[41]!==u||t[42]!==E||t[43]!==j||t[44]!==f?(M=(0,Q.jsxs)(`dialog`,{ref:s,className:`billing-dialog billing-format-dialog`,"aria-labelledby":`billing-format-title`,onKeyDown:sr,onCancel:u,children:[f,E,j]}),t[41]=u,t[42]=E,t[43]=j,t[44]=f,t[45]=M):M=t[45],M}function gr({sessionToken:e,onClose:t}){let n=(0,X.useRef)(null);or(n);let r=Cn(Z.billing.options,{sessionToken:e}),[i,a]=(0,X.useState)(``),[o,s]=(0,X.useState)(`1st Semester`),[c,l]=(0,X.useState)(`all`),[u,d]=(0,X.useState)([]),[f,p]=(0,X.useState)(``),[m,h]=(0,X.useState)(ar),[g,_]=(0,X.useState)(``),[v,y]=(0,X.useState)(null),[b,x]=(0,X.useState)(``),[S,C]=(0,X.useState)(1),[w,T]=(0,X.useState)(null),[E,D]=(0,X.useState)(!1),[O,k]=(0,X.useState)(null),[A,j]=(0,X.useState)(null),[M,N]=(0,X.useState)(!1),[P,F]=(0,X.useState)(``),[I,L]=(0,X.useState)(``),R=Cn(Z.billing.workspace,i?{sessionToken:e,schoolYear:i,semester:o}:`skip`),z=wn(Z.billing.saveConfig),B=wn(Z.billing.saveProfile),V=wn(Z.billing.preview),H=wn(Z.billing.finalize),U=wn(Z.billing.download),W={schoolYear:i,semester:o,batches:c===`all`?[]:u},G=()=>{y(null),k(null),L(``),F(``)},K=async e=>{N(!0),L(``);try{await e()}catch(e){L(e instanceof Error?e.message:`Billing operation failed. Please try again.`)}finally{N(!1)}},ee=()=>K(async()=>{if(!i)throw Error(`Select a school year.`);if(c===`specific`&&!u.length)throw Error(`Select at least one batch.`);let t=await V({sessionToken:e,...W});y(t),C(1),x(``),k(null),t.config&&_(t.config.referenceFormat.replaceAll(`{YEAR}`,i.slice(0,4)).replaceAll(`{TERM}`,o===`1st Semester`?`1`:`2`).replaceAll(`{TRANCHE}`,String(t.nextTranche)))}),q=t=>K(async()=>{let n=await rr(()=>import(`./billingExport-BRbUcO_j.js`),[]),r=await n.loadBillingTemplate(),i=A||O;if(!i){if(!v)throw Error(`Generate a billing preview first.`);i=await H({sessionToken:e,...W,reference:g,billingDate:m,expectedVersion:v.version}),k(i)}let a=await U({sessionToken:e,reportId:i,format:t});await n.downloadBilling(a,t,r),D(!1),j(null),F(`Downloaded ${a.reference}. Saved in billing history for future downloads.`)}),te=(v?.rows||[]).filter(e=>`${e.studentId} ${e.tesAwardNumber} ${e.profile.lastName} ${e.profile.firstName} ${e.batch}`.toLowerCase().includes(b.toLowerCase())),J=Math.max(1,Math.ceil(te.length/10));return(0,Q.jsxs)(`dialog`,{ref:n,className:`billing-dialog billing-main-dialog`,"aria-labelledby":`billing-management-title`,onKeyDown:sr,onCancel:e=>{e.target===e.currentTarget&&(e.preventDefault(),M||t())},children:[(0,Q.jsxs)(`header`,{className:`billing-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`billing-kicker`,children:`Scholarship operations`}),(0,Q.jsx)(`h2`,{id:`billing-management-title`,children:`TES Billing Management`}),(0,Q.jsx)(`p`,{children:`Generate consolidated TES billing statements and reports.`})]}),(0,Q.jsx)(`button`,{className:`billing-close`,type:`button`,"aria-label":`Close Billing Management`,disabled:M,onClick:t,children:`×`})]}),(0,Q.jsxs)(`div`,{className:`billing-body`,children:[I&&(0,Q.jsx)(`p`,{className:`billing-error`,role:`alert`,children:I}),P&&(0,Q.jsx)(`p`,{className:`billing-notice`,role:`status`,children:P}),(0,Q.jsxs)(`section`,{className:`billing-card`,"aria-label":`Billing filters`,children:[(0,Q.jsxs)(`div`,{className:`billing-filters`,children:[(0,Q.jsx)(cr,{label:`School year`,children:(0,Q.jsxs)(`select`,{value:i,disabled:M,onChange:e=>{a(e.target.value),d([]),G()},children:[(0,Q.jsx)(`option`,{value:``,children:`Select school year`}),r?.years.map(e=>(0,Q.jsx)(`option`,{children:e},e))]})}),(0,Q.jsx)(cr,{label:`Semester`,children:(0,Q.jsxs)(`select`,{value:o,disabled:M,onChange:e=>{s(e.target.value),d([]),G()},children:[(0,Q.jsx)(`option`,{children:`1st Semester`}),(0,Q.jsx)(`option`,{children:`2nd Semester`})]})}),(0,Q.jsx)(cr,{label:`Select Batch`,children:(0,Q.jsxs)(`select`,{value:c,disabled:M,onChange:e=>{l(e.target.value),G()},children:[(0,Q.jsx)(`option`,{value:`all`,children:`All Batches`}),(0,Q.jsx)(`option`,{value:`specific`,children:`Specific Batches`})]})}),(0,Q.jsx)(cr,{label:`Billing date`,children:(0,Q.jsx)(`input`,{type:`date`,required:!0,value:m,disabled:M||!!O,onChange:e=>h(e.target.value)})}),(0,Q.jsx)(cr,{label:`Billing reference number`,children:(0,Q.jsx)(`input`,{maxLength:120,value:g,disabled:M||!!O,onChange:e=>_(e.target.value),placeholder:`From approved period rules`})})]}),c===`specific`&&(0,Q.jsxs)(`div`,{className:`billing-batches`,children:[(0,Q.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,Q.jsx)(`input`,{"aria-label":`Search batches`,placeholder:`Search batch…`,value:f,onChange:e=>p(e.target.value)}),(0,Q.jsx)(`button`,{className:`billing-text-button`,type:`button`,disabled:M,onClick:()=>{d(R?.batches.map(e=>e.id)||[]),G()},children:`Select All`}),(0,Q.jsx)(`button`,{className:`billing-text-button`,type:`button`,disabled:M,onClick:()=>{d([]),G()},children:`Deselect All`}),(0,Q.jsxs)(`span`,{children:[u.length,` batches selected`]})]}),(0,Q.jsx)(`div`,{className:`billing-checks`,children:R?.batches.filter(e=>e.id.toLowerCase().includes(f.toLowerCase())).map(e=>(0,Q.jsxs)(`label`,{className:`billing-check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,disabled:M,checked:u.includes(e.id),onChange:t=>{d(t.target.checked?[...u,e.id]:u.filter(t=>t!==e.id)),G()}}),`Batch `,e.id,` `,(0,Q.jsxs)(`small`,{children:[e.count,` grantees`]})]},e.id))})]}),(0,Q.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,Q.jsx)(`p`,{className:`billing-hint`,children:`Counts use unique Student IDs within the selected period. Missing data stays visible for review.`}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-primary`,disabled:M||!R,onClick:ee,children:M?`Please wait…`:`Generate Billing Preview`})]})]}),R&&(0,Q.jsx)(ur,{config:R.config,statuses:r?.statuses||[],busy:M,onSave:t=>K(async()=>{await z({sessionToken:e,schoolYear:i,semester:o,...t}),G(),F(`Verified period rules saved. Generate a new preview.`)})},`${i}-${o}-${R.config?.updatedAt||0}`),v&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`div`,{className:`billing-summary`,children:[[`Total Selected Records`,v.selectedCount],[`Eligible Grantees`,v.eligibleCount],[`Records Needing Review`,v.reviewCount],[`TES Benefit Subtotal`,ir(v.totals.benefits)],[`Administrative Support Cost`,ir(v.totals.asc)],[`Total Billing Amount`,ir(v.totals.total)]].map(([e,t])=>(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:e}),(0,Q.jsx)(`strong`,{children:t})]},e))}),(0,Q.jsxs)(`p`,{className:`billing-hint`,children:[v.duplicateCount,` duplicate source rows counted once. `,v.excludedCount,` students explicitly excluded or already billed. Preview totals include eligible records only.`]}),v.globalIssues.length>0&&(0,Q.jsxs)(`div`,{className:`billing-error`,children:[(0,Q.jsx)(`strong`,{children:`Resolve before export`}),(0,Q.jsx)(`ul`,{children:v.globalIssues.map(e=>(0,Q.jsx)(`li`,{children:e},e))})]}),(0,Q.jsxs)(`section`,{className:`billing-card`,children:[(0,Q.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,Q.jsx)(`h3`,{children:`Billing details`}),(0,Q.jsx)(`input`,{"aria-label":`Search billing records`,placeholder:`Student ID, name, award or batch…`,value:b,onChange:e=>{x(e.target.value),C(1)}})]}),(0,Q.jsx)(`div`,{className:`billing-scroll`,children:(0,Q.jsxs)(`table`,{className:`billing-preview-table`,children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsx)(`tr`,{children:[`Student ID`,`TES Award Number`,`Full Name`,`Batch`,`Semester`,`School Year`,`TES Category`,`Billing Amount`,`Billing Eligibility`,`Review`].map(e=>(0,Q.jsx)(`th`,{children:e},e))})}),(0,Q.jsx)(`tbody`,{children:te.slice((S-1)*10,S*10).map(e=>(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`td`,{children:e.studentId}),(0,Q.jsx)(`td`,{children:e.tesAwardNumber||`Missing`}),(0,Q.jsx)(`td`,{children:[e.profile.lastName,e.profile.firstName,e.profile.middleInitial].filter(Boolean).join(`, `)||`Missing`}),(0,Q.jsx)(`td`,{children:e.batch}),(0,Q.jsx)(`td`,{children:e.semester}),(0,Q.jsx)(`td`,{children:e.schoolYear}),(0,Q.jsx)(`td`,{children:e.profile.category||`Unassigned`}),(0,Q.jsx)(`td`,{children:e.eligible?ir(e.total):`Pending review`}),(0,Q.jsxs)(`td`,{children:[(0,Q.jsx)(`span`,{className:`billing-status ${e.eligible?`is-eligible`:``}`,children:e.eligible?`Eligible`:e.excluded?`Excluded`:`Needs review`}),e.issues.length>0&&(0,Q.jsxs)(`details`,{children:[(0,Q.jsxs)(`summary`,{children:[e.issues.length,` issue(s)`]}),(0,Q.jsx)(`ul`,{children:e.issues.map(e=>(0,Q.jsx)(`li`,{children:e},e))})]})]}),(0,Q.jsx)(`td`,{children:(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:M||!!O,onClick:()=>T(e),children:`Review`})})]},e.studentId))})]})}),(0,Q.jsxs)(`div`,{className:`billing-pagination`,children:[(0,Q.jsxs)(`span`,{children:[te.length,` students · Page `,S,` of `,J]}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:S===1,onClick:()=>C(e=>e-1),children:`Previous`}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:S>=J,onClick:()=>C(e=>e+1),children:`Next`})]})]})]}),R?.reports.length>0&&(0,Q.jsxs)(`section`,{className:`billing-card`,children:[(0,Q.jsx)(`h3`,{children:`Finalized billing history`}),(0,Q.jsx)(`p`,{className:`billing-hint`,children:`These immutable reports can be downloaded again without billing students twice.`}),R.reports.map(e=>(0,Q.jsxs)(`div`,{className:`billing-history-row`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:e.reference}),(0,Q.jsxs)(`span`,{children:[e.billingDate,` · `,e.granteeCount,` grantees · `,ir(e.totals.total)]})]}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:M,onClick:()=>{j(e._id),D(!0)},children:`Download saved report`})]},e._id))]}),!r&&(0,Q.jsx)(`p`,{role:`status`,children:`Loading authorized billing options…`})]}),(0,Q.jsxs)(`footer`,{className:`billing-footer`,children:[(0,Q.jsx)(`span`,{className:`billing-hint`,children:`Original grantee records remain unchanged.`}),(0,Q.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:M,onClick:t,children:`Close`}),(0,Q.jsx)(`button`,{className:`billing-primary`,type:`button`,disabled:M||!v||!O&&v.globalIssues.length>0||!m||!g.trim(),onClick:()=>D(!0),children:`Download Billing Report`})]}),w&&(0,Q.jsx)(fr,{error:I,row:w,categories:R?.config?.rates||[],busy:M,onClose:()=>T(null),onSave:t=>K(async()=>{await B({sessionToken:e,schoolYear:i,semester:o,studentId:w.studentId,...t}),y(await V({sessionToken:e,...W})),k(null),T(null),F(`Billing review saved.`)})},w.studentId),E&&(0,Q.jsx)(hr,{error:I,busy:M,finalized:!!(O||A),onClose:()=>{D(!1),j(null)},onDownload:q})]})}var _r=e=>new Intl.NumberFormat(`en-PH`,{style:`currency`,currency:`PHP`}).format(e/100);function vr(e){let t=(0,Un.c)(44),{mapping:n,configured:r,busy:i,onSave:a}=e,[o,s]=(0,X.useState)(n?.applicationNumberVerified||!1),[c,l]=(0,X.useState)(n?.batchColumnMode||``),[u,d]=(0,X.useState)(n?.designation||``),[f,p]=(0,X.useState)(n?.authority||``),m=!n,h=n?`· verified`:`· confirmation required`,g;t[0]===h?g=t[1]:(g=(0,Q.jsxs)(`summary`,{children:[`Official field mappings `,h]}),t[0]=h,t[1]=g);let _;t[2]!==f||t[3]!==u||t[4]!==c||t[5]!==a||t[6]!==o?(_=e=>{e.preventDefault(),a({applicationNumberVerified:o,batchColumnMode:c,designation:u,authority:f})},t[2]=f,t[3]=u,t[4]=c,t[5]=a,t[6]=o,t[7]=_):_=t[7];let v;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,Q.jsx)(`p`,{className:`billing-hint`,children:`The workbook calls column D “TES Application Number” and its sample column N contains “LISTAHANAN 2”. Confirm the school’s official meanings before export.`}),t[8]=v):v=t[8];let y;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(y=e=>s(e.target.checked),t[9]=y):y=t[9];let b;t[10]===o?b=t[11]:(b=(0,Q.jsxs)(`label`,{className:`billing-check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:o,onChange:y}),`I verified that Convex tesAwardNumber contains the official TES Application Number required in column D.`]}),t[10]=o,t[11]=b);let x;t[12]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,Q.jsx)(`span`,{children:`Column N — TES Batch`}),t[12]=x):x=t[12];let S,C,w,T;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(T=e=>l(e.target.value),S=(0,Q.jsx)(`option`,{value:``,children:`Confirm the official mapping`}),C=(0,Q.jsx)(`option`,{value:`databaseBatch`,children:`Use actual database batch numbers`}),w=(0,Q.jsx)(`option`,{value:`designation`,children:`Use an authorized designation`}),t[13]=S,t[14]=C,t[15]=w,t[16]=T):(S=t[13],C=t[14],w=t[15],T=t[16]);let E;t[17]===c?E=t[18]:(E=(0,Q.jsxs)(`label`,{className:`billing-field`,children:[x,(0,Q.jsxs)(`select`,{"aria-label":`Column N — TES Batch`,required:!0,value:c,onChange:T,children:[S,C,w]})]}),t[17]=c,t[18]=E);let D;t[19]!==u||t[20]!==c?(D=c===`designation`&&(0,Q.jsxs)(`label`,{className:`billing-field`,children:[(0,Q.jsx)(`span`,{children:`Authorized designation`}),(0,Q.jsx)(`input`,{"aria-label":`Authorized designation`,required:!0,maxLength:80,value:u,onChange:e=>d(e.target.value),placeholder:`Enter the approved designation`})]}),t[19]=u,t[20]=c,t[21]=D):D=t[21];let O;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(O=(0,Q.jsx)(`span`,{children:`Mapping approval / documentary reference`}),t[22]=O):O=t[22];let k;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(k=e=>p(e.target.value),t[23]=k):k=t[23];let A;t[24]===f?A=t[25]:(A=(0,Q.jsxs)(`label`,{className:`billing-field`,children:[O,(0,Q.jsx)(`input`,{"aria-label":`Mapping approval / documentary reference`,required:!0,maxLength:500,value:f,onChange:k})]}),t[24]=f,t[25]=A);let j;t[26]!==E||t[27]!==D||t[28]!==A?(j=(0,Q.jsxs)(`div`,{className:`billing-form-grid`,children:[E,D,A]}),t[26]=E,t[27]=D,t[28]=A,t[29]=j):j=t[29];let M;t[30]===r?M=t[31]:(M=!r&&(0,Q.jsx)(`p`,{className:`billing-notice`,children:`Configure the verified semester rates and eligibility rules in Billing Management first.`}),t[30]=r,t[31]=M);let N=i||!r||!o||!c,P;t[32]===N?P=t[33]:(P=(0,Q.jsx)(`button`,{type:`submit`,className:`billing-primary`,disabled:N,children:`Save verified mappings`}),t[32]=N,t[33]=P);let F;t[34]!==j||t[35]!==M||t[36]!==P||t[37]!==_||t[38]!==b?(F=(0,Q.jsxs)(`form`,{onSubmit:_,children:[v,b,j,M,P]}),t[34]=j,t[35]=M,t[36]=P,t[37]=_,t[38]=b,t[39]=F):F=t[39];let I;return t[40]!==m||t[41]!==F||t[42]!==g?(I=(0,Q.jsxs)(`details`,{className:`billing-rules`,open:m,children:[g,F]}),t[40]=m,t[41]=F,t[42]=g,t[43]=I):I=t[43],I}function yr(e){let t=(0,Un.c)(20),{row:n,busy:r,onSave:i}=e,[a,o]=(0,X.useState)(n.continuingVerified),[s,c]=(0,X.useState)(n.continuingEvidence),l;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,Q.jsx)(`summary`,{children:`Review continuing eligibility`}),t[0]=l):l=t[0];let u;t[1]!==s||t[2]!==i||t[3]!==a?(u=e=>{e.preventDefault(),i(a,s)},t[1]=s,t[2]=i,t[3]=a,t[4]=u):u=t[4];let d;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(d=e=>o(e.target.checked),t[5]=d):d=t[5];let f;t[6]===a?f=t[7]:(f=(0,Q.jsxs)(`label`,{className:`billing-check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:a,onChange:d}),`Verified continuing TES grantee for this period`]}),t[6]=a,t[7]=f);let p;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,Q.jsx)(`span`,{children:`Evidence / review reason`}),t[8]=p):p=t[8];let m=`Continuing evidence for ${n.studentId}`,h;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(h=e=>c(e.target.value),t[9]=h):h=t[9];let g;t[10]!==s||t[11]!==m?(g=(0,Q.jsxs)(`label`,{className:`billing-field`,children:[p,(0,Q.jsx)(`textarea`,{"aria-label":m,required:!0,maxLength:500,rows:3,value:s,onChange:h})]}),t[10]=s,t[11]=m,t[12]=g):g=t[12];let _;t[13]===r?_=t[14]:(_=(0,Q.jsx)(`button`,{type:`submit`,disabled:r,className:`billing-secondary`,children:`Save continuing review`}),t[13]=r,t[14]=_);let v;return t[15]!==u||t[16]!==f||t[17]!==g||t[18]!==_?(v=(0,Q.jsxs)(`details`,{className:`form2-review`,children:[l,(0,Q.jsxs)(`form`,{onSubmit:u,children:[f,g,_]})]}),t[15]=u,t[16]=f,t[17]=g,t[18]=_,t[19]=v):v=t[19],v}function br({sessionToken:e,onClose:t,onOpenBilling:n}){let r=(0,X.useRef)(null);(0,X.useEffect)(()=>{let e=r.current,t=document.activeElement,n=document.body.style.overflow;return e.showModal(),document.body.style.overflow=`hidden`,()=>{e.close(),document.body.style.overflow=n,t?.isConnected&&t.focus({preventScroll:!0})}},[]);let i=Cn(Z.billing.options,{sessionToken:e}),[a,o]=(0,X.useState)(``),[s,c]=(0,X.useState)(`1st Semester`),[l,u]=(0,X.useState)(`all`),[d,f]=(0,X.useState)([]),[p,m]=(0,X.useState)(``),[h,g]=(0,X.useState)(``),[_,v]=(0,X.useState)(``),[y,b]=(0,X.useState)(1),[x,S]=(0,X.useState)(0),[C,w]=(0,X.useState)(null),[T,E]=(0,X.useState)(!1),[D,O]=(0,X.useState)(``),[k,A]=(0,X.useState)(``),[j,M]=(0,X.useState)(``),[N,P]=(0,X.useState)(()=>new Date().toLocaleDateString(`en-CA`,{timeZone:`Asia/Manila`})),[F,I]=(0,X.useState)(null),L=Cn(Z.billing.workspace,a?{sessionToken:e,schoolYear:a,semester:s}:`skip`),R=Cn(Z.form2.settings,a?{sessionToken:e,schoolYear:a,semester:s}:`skip`),z=wn(Z.form2.preview),B=wn(Z.form2.saveMapping),V=wn(Z.form2.reviewContinuing),H=wn(Z.form2.generate),U=wn(Z.form2.download),W=JSON.stringify({year:a,semester:s,mode:l,batches:d,sourceId:h,refresh:x,mapping:R?.mapping||null});(0,X.useEffect)(()=>{let t=!0,n=JSON.parse(W);if(n.year)return(n.mode===`specific`&&!n.batches.length?Promise.reject(Error(`Select at least one batch.`)):z({sessionToken:e,schoolYear:n.year,semester:n.semester,batches:n.mode===`all`?[]:n.batches,...n.sourceId?{billingReportId:n.sourceId}:{}})).then(e=>{t&&(w({key:W,data:e}),b(1),I(null),e.reference?M(e.reference):e.config&&M(e.config.referenceFormat.replaceAll(`{YEAR}`,n.year.slice(0,4)).replaceAll(`{TERM}`,n.semester===`1st Semester`?`1`:`2`).replaceAll(`{TRANCHE}`,String(e.nextTranche))))}).catch(e=>{t&&w({key:W,error:e.message})}),()=>{t=!1}},[W,z,e]);let G=C?.key===W?C.data:null,K=!!(a&&C?.key!==W),ee={schoolYear:a,semester:s,batches:l===`all`?[]:d,...h?{billingReportId:h}:{}},q=()=>{b(1),I(null),O(``),A(``),v(``)},te=async e=>{E(!0),O(``);try{await e()}catch(e){O(e instanceof Error?e.message:`Form 2 operation failed. Please try again.`)}finally{E(!1)}},J=(t,n)=>te(async()=>{let r=await rr(()=>import(`./form2Export-BfpInTo5.js`),__vite__mapDeps([0,1])),i=await r.loadForm2Template(),a=n||F;if(!a){if(!G)throw Error(`Generate and review Form 2 first.`);a=await H({sessionToken:e,...ee,expectedVersion:G.version,reference:j,billingDate:N}),I(a)}let o=await U({sessionToken:e,reportId:a,format:t});await r.downloadForm2(o,t,i),A(`Downloaded Form 2 for ${o.reference}. Re-download from history without creating another bill.`)}),Y=(G?.rows||[]).map((e,t)=>({...e,number:t+1})).filter(e=>`${e.studentId} ${e.tesAwardNumber} ${e.profile.lastName} ${e.profile.firstName} ${e.profile.program} ${e.batch}`.toLowerCase().includes(_.toLowerCase())),ne=Math.max(1,Math.ceil(Y.length/10)),re=Array.from({length:ne},(e,t)=>t+1).filter(e=>e===1||e===ne||Math.abs(e-y)<=2),ie=T||K||!G||!F&&G.globalIssues.length>0||!h&&(!j.trim()||!N);return(0,Q.jsxs)(`dialog`,{ref:r,className:`billing-dialog billing-main-dialog form2-main-dialog`,"aria-labelledby":`form2-title`,onCancel:e=>{e.preventDefault(),T||t()},onKeyDown:e=>{if(e.key!==`Tab`)return;let t=[...e.currentTarget.querySelectorAll(`button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),summary`)].filter(e=>e.getClientRects().length);e.shiftKey&&document.activeElement===t[0]?(e.preventDefault(),t.at(-1)?.focus()):!e.shiftKey&&document.activeElement===t.at(-1)&&(e.preventDefault(),t[0]?.focus())},children:[(0,Q.jsxs)(`header`,{className:`billing-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`billing-kicker`,children:`Scholarship operations · Listahanan 2`}),(0,Q.jsx)(`h2`,{id:`form2-title`,children:`Form 2 List — TES Continuing Grantees`}),(0,Q.jsx)(`p`,{children:`Generate official TES Continuing Form 2 records from the Convex database.`})]}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-close`,"aria-label":`Close Form 2 List`,disabled:T,onClick:t,children:`×`})]}),(0,Q.jsxs)(`div`,{className:`billing-body`,children:[D&&(0,Q.jsx)(`p`,{role:`alert`,className:`billing-error`,children:D}),k&&(0,Q.jsx)(`p`,{role:`status`,className:`billing-notice`,children:k}),(0,Q.jsxs)(`section`,{className:`billing-card`,children:[(0,Q.jsxs)(`div`,{className:`billing-filters form2-filters`,children:[(0,Q.jsxs)(`label`,{className:`billing-field`,children:[(0,Q.jsx)(`span`,{children:`Select School Year`}),(0,Q.jsxs)(`select`,{"aria-label":`Select School Year`,value:a,disabled:T,onChange:e=>{o(e.target.value),f([]),g(``),q()},children:[(0,Q.jsx)(`option`,{value:``,children:`Select school year`}),i?.years.map(e=>(0,Q.jsx)(`option`,{children:e},e))]})]}),(0,Q.jsxs)(`label`,{className:`billing-field`,children:[(0,Q.jsx)(`span`,{children:`Select Semester`}),(0,Q.jsxs)(`select`,{"aria-label":`Select Semester`,value:s,disabled:T,onChange:e=>{c(e.target.value),f([]),g(``),q()},children:[(0,Q.jsx)(`option`,{children:`1st Semester`}),(0,Q.jsx)(`option`,{children:`2nd Semester`})]})]}),(0,Q.jsxs)(`label`,{className:`billing-field`,children:[(0,Q.jsx)(`span`,{children:`Report source`}),(0,Q.jsxs)(`select`,{"aria-label":`Report source`,value:h,disabled:T,onChange:e=>{g(e.target.value),u(`all`),f([]),q()},children:[(0,Q.jsx)(`option`,{value:``,children:`Current Convex grantee records`}),L?.reports.map(e=>(0,Q.jsxs)(`option`,{value:e._id,children:[`Saved bill: `,e.reference]},e._id))]})]}),(0,Q.jsxs)(`label`,{className:`billing-field`,children:[(0,Q.jsx)(`span`,{children:`Select Batches`}),(0,Q.jsxs)(`select`,{"aria-label":`Select Batches`,value:l,disabled:T||!!h,onChange:e=>{u(e.target.value),q()},children:[(0,Q.jsx)(`option`,{value:`all`,children:`All Batches`}),(0,Q.jsx)(`option`,{value:`specific`,children:`Specific Batches`})]})]})]}),l===`specific`&&(0,Q.jsxs)(`div`,{className:`billing-batches`,children:[(0,Q.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,Q.jsx)(`input`,{"aria-label":`Search Form 2 batches`,placeholder:`Search batch…`,value:p,onChange:e=>m(e.target.value)}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-text-button`,disabled:T,onClick:()=>{f(L?.batches.map(e=>e.id)||[]),q()},children:`Select All`}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-text-button`,disabled:T,onClick:()=>{f([]),q()},children:`Deselect All`}),(0,Q.jsxs)(`span`,{children:[d.length,` selected`]})]}),(0,Q.jsx)(`div`,{className:`billing-checks`,children:L?.batches.filter(e=>e.id.toLowerCase().includes(p.toLowerCase())).map(e=>(0,Q.jsxs)(`label`,{className:`billing-check`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,disabled:T,checked:d.includes(e.id),onChange:t=>{f(t.target.checked?[...d,e.id]:d.filter(t=>t!==e.id)),q()}}),`Batch `,e.id,` `,(0,Q.jsxs)(`small`,{children:[e.count,` grantees`]})]},e.id))})]}),(0,Q.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,Q.jsx)(`p`,{className:`billing-hint`,children:`Filter changes refresh the preview automatically. Saved bills are exported in full to reconcile with their original statement.`}),(0,Q.jsx)(`button`,{className:`billing-primary`,type:`button`,disabled:!a||T||K,onClick:()=>{q(),S(e=>e+1)},children:`Generate Form 2`})]}),!h&&(0,Q.jsxs)(`div`,{className:`billing-form-grid form2-reference`,children:[(0,Q.jsxs)(`label`,{className:`billing-field`,children:[(0,Q.jsx)(`span`,{children:`Authorized billing reference`}),(0,Q.jsx)(`input`,{"aria-label":`Authorized billing reference`,maxLength:120,value:j,disabled:T||!!F,onChange:e=>M(e.target.value),placeholder:`From verified Billing Management rules`})]}),(0,Q.jsxs)(`label`,{className:`billing-field`,children:[(0,Q.jsx)(`span`,{children:`Billing date`}),(0,Q.jsx)(`input`,{"aria-label":`Form 2 billing date`,type:`date`,value:N,disabled:T||!!F,onChange:e=>P(e.target.value)})]})]})]}),R&&(0,Q.jsx)(vr,{mapping:R.mapping,configured:R.configured,busy:T,onSave:t=>te(async()=>{await B({sessionToken:e,schoolYear:a,semester:s,...t}),q(),S(e=>e+1),A(`Official Form 2 field mappings saved.`)})},JSON.stringify(R.mapping)),K&&(0,Q.jsx)(`p`,{role:`status`,children:`Loading the selected Convex records…`}),C?.key===W&&C.error&&(0,Q.jsx)(`p`,{className:`billing-error`,role:`alert`,children:C.error}),G&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`div`,{className:`billing-summary form2-summary`,children:[[`Matching grantees`,G.rows.length],[`Complete / verified`,G.eligibleCount],[`Missing data / review`,G.rows.filter(e=>!e.eligible&&!e.excluded).length],[`TES benefits`,_r(G.totals.tes1+G.totals.tes2)],[`TES-3A`,_r(G.totals.tes3a)],[`Total with authorized ASC`,_r(G.totals.total)]].map(([e,t])=>(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:e}),(0,Q.jsx)(`strong`,{children:t})]},e))}),G.globalIssues.length>0&&(0,Q.jsxs)(`div`,{className:`billing-error`,children:[(0,Q.jsx)(`strong`,{children:`Resolve before export`}),(0,Q.jsx)(`ul`,{children:G.globalIssues.map(e=>(0,Q.jsx)(`li`,{children:e},e))}),(0,Q.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:T,onClick:n,children:`Review details and rates in Billing Management`})]}),(0,Q.jsxs)(`section`,{className:`billing-card`,children:[(0,Q.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,Q.jsx)(`h3`,{children:`Official grantee preview`}),(0,Q.jsx)(`input`,{"aria-label":`Search Form 2 grantees`,value:_,onChange:e=>{v(e.target.value),b(1)},placeholder:`Student ID, application no., name, course or batch…`})]}),(0,Q.jsxs)(`p`,{className:`billing-hint`,children:[Y.length,` matching students · `,G.duplicateCount,` duplicate source rows counted once. Export includes every validated matching record, not just this page. Amounts shown are the proposed or saved billing amounts; export stays blocked until all reviews pass.`]}),(0,Q.jsx)(`div`,{className:`billing-scroll`,children:(0,Q.jsxs)(`table`,{className:`form2-preview-table`,children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsx)(`tr`,{children:[`No.`,`Student ID`,`TES Award No.`,`Full Name`,`Course`,`Year Level`,`Batch`,`Semester`,`School Year`,`Status`,`Validation`].map(e=>(0,Q.jsx)(`th`,{children:e},e))})}),(0,Q.jsx)(`tbody`,{children:Y.slice((y-1)*10,y*10).map(t=>(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`td`,{children:t.number}),(0,Q.jsx)(`td`,{children:t.studentId}),(0,Q.jsx)(`td`,{children:t.tesAwardNumber||`Missing`}),(0,Q.jsx)(`td`,{children:[t.profile.lastName,t.profile.firstName,t.profile.middleInitial].filter(Boolean).join(`, `)}),(0,Q.jsx)(`td`,{children:t.profile.program||`Missing`}),(0,Q.jsx)(`td`,{children:t.profile.yearLevel||`Missing`}),(0,Q.jsx)(`td`,{children:t.batch}),(0,Q.jsx)(`td`,{children:t.semester}),(0,Q.jsx)(`td`,{children:t.schoolYear}),(0,Q.jsx)(`td`,{children:t.sourceStatus}),(0,Q.jsxs)(`td`,{children:[(0,Q.jsx)(`span`,{className:`billing-status ${t.eligible?`is-eligible`:``}`,children:t.eligible?`Complete`:t.excluded?`Excluded`:`Missing Data`}),t.issues.length>0&&(0,Q.jsxs)(`details`,{children:[(0,Q.jsxs)(`summary`,{children:[t.issues.length,` validation issue(s)`]}),(0,Q.jsx)(`ul`,{children:t.issues.map(e=>(0,Q.jsx)(`li`,{children:e},e))})]}),(0,Q.jsx)(yr,{row:t,busy:T||!!F,onSave:(n,r)=>te(async()=>{await V({sessionToken:e,schoolYear:a,semester:s,studentId:t.studentId,verified:n,evidence:r}),S(e=>e+1),A(`Continuing-grantee review saved.`)})},`${t.studentId}-${t.continuingVerified}-${t.continuingEvidence}`)]})]},t.studentId))})]})}),(0,Q.jsxs)(`nav`,{className:`billing-pagination form2-pagination`,"aria-label":`Form 2 pagination`,children:[(0,Q.jsxs)(`span`,{children:[Y.length,` matching · Page `,y,` of `,ne]}),(0,Q.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:y<=1,onClick:()=>b(e=>e-1),children:`Previous`}),re.map(e=>(0,Q.jsx)(`button`,{className:`billing-secondary ${e===y?`form2-page-active`:``}`,"aria-current":e===y?`page`:void 0,"aria-label":`Page ${e}`,type:`button`,onClick:()=>b(e),children:e},e)),(0,Q.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:y>=ne,onClick:()=>b(e=>e+1),children:`Next`})]})]})]}),R?.history.length>0&&(0,Q.jsxs)(`section`,{className:`billing-card`,children:[(0,Q.jsx)(`h3`,{children:`Form 2 report history`}),R.history.map(e=>(0,Q.jsxs)(`div`,{className:`billing-history-row`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:e.reference}),(0,Q.jsxs)(`span`,{children:[new Date(e.generatedAt).toLocaleString(`en-PH`,{timeZone:`Asia/Manila`}),` · `,e.schoolYear,` · `,e.semester,` · `,e.batches.length?e.batches.join(`, `):`All matching batches`]}),(0,Q.jsxs)(`span`,{children:[e.granteeCount,` grantees · `,e.generatedBy,` · `,e.status]})]}),(0,Q.jsxs)(`div`,{className:`form2-history-buttons`,children:[(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:T,onClick:()=>J(`xlsx`,e._id),children:`Excel`}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:T,onClick:()=>J(`pdf`,e._id),children:`PDF`})]})]},e._id))]}),!a&&(0,Q.jsx)(`p`,{className:`billing-notice`,children:`Select an academic period to retrieve actual Convex grantees. No sample students are loaded.`})]}),(0,Q.jsxs)(`footer`,{className:`billing-footer`,children:[(0,Q.jsx)(`p`,{className:`billing-hint`,children:h||F?`Supporting export reuses the saved bill; no duplicate charge.`:`A new export finalizes the existing billing workflow and reserves its eligible students.`}),(0,Q.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:T,onClick:t,children:`Close`}),(0,Q.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:ie,onClick:()=>J(`pdf`),children:T?`Preparing…`:`Download PDF`}),(0,Q.jsx)(`button`,{className:`billing-primary`,type:`button`,disabled:ie,onClick:()=>J(`xlsx`),children:`Download Excel`})]})]})}var xr=[`image/png`,`image/jpeg`,`image/webp`];ve.string(),ve.string(),ve.string(),ve.number(),ve.union(ve.literal(`draft`),ve.literal(`published`));function Sr(e,t){let n=e.length,r=new DataView(e.buffer,e.byteOffset,e.byteLength);if(!n||n>10485760)throw Error(`Each image must be no larger than 10 MB.`);let i=``,a=0,o=0;if(n>=33&&[137,80,78,71,13,10,26,10].every((t,n)=>e[n]===t)){if(String.fromCharCode(...e.slice(12,16))!==`IHDR`||String.fromCharCode(...e.slice(-8,-4))!==`IEND`)throw Error(`Invalid PNG image.`);i=`image/png`,a=r.getUint32(16),o=r.getUint32(20)}else if(n>10&&e[0]===255&&e[1]===216&&e[2]===255){if(e[n-2]!==255||e[n-1]!==217)throw Error(`Invalid JPEG image.`);i=`image/jpeg`;let t=2;for(;t+4<n;){if(e[t++]!==255)continue;for(;e[t]===255;)t++;let i=e[t++];if(i===218||i===217)break;if(i===1||i>=208&&i<=215)continue;let s=r.getUint16(t);if(s<2||t+s>n)throw Error(`Invalid JPEG segments.`);if([192,193,194,195,197,198,199,201,202,203,205,206,207].includes(i)){o=r.getUint16(t+3),a=r.getUint16(t+5);break}t+=s}}else if(n>=30&&String.fromCharCode(...e.slice(0,4))===`RIFF`&&String.fromCharCode(...e.slice(8,12))===`WEBP`){if(r.getUint32(4,!0)+8!==n)throw Error(`Invalid WebP image length.`);i=`image/webp`;let t=String.fromCharCode(...e.slice(12,16));if(t===`VP8X`)a=1+e[24]+(e[25]<<8)+(e[26]<<16),o=1+e[27]+(e[28]<<8)+(e[29]<<16);else if(t===`VP8L`&&e[20]===47){let e=r.getUint32(21,!0);a=(e&16383)+1,o=(e>>>14&16383)+1}else t===`VP8 `&&e[23]===157&&e[24]===1&&e[25]===42&&(a=r.getUint16(26,!0)&16383,o=r.getUint16(28,!0)&16383)}if(!i||i!==t||!xr.includes(t))throw Error(`Only valid PNG, JPEG and WebP image files are accepted.`);if(!a||!o||a>16e3||o>16e3||a*o>4e7)throw Error(`Image dimensions exceed the supported 40-megapixel limit.`);return{mimeType:i,width:a,height:o,fileSize:n}}var Cr=`https://ideal-crane-292.convex.site`.replace(/\/$/,``),wr=e=>`${Cr}/documentation/image?id=${encodeURIComponent(e._id)}&v=${e.updatedAt}`;async function Tr(e){if(![`image/png`,`image/jpeg`,`image/webp`].includes(e.type)||!e.size||e.size>10*1024*1024)throw Error(`${e.name}: choose a PNG, JPG or WebP image up to 10 MB.`);Sr(new Uint8Array(await e.arrayBuffer()),e.type);let t=await createImageBitmap(e).catch(()=>{throw Error(`${e.name}: this image could not be decoded.`)});try{let n=Math.min(1,2560/Math.max(t.width,t.height)),r=document.createElement(`canvas`);r.width=Math.max(1,Math.round(t.width*n)),r.height=Math.max(1,Math.round(t.height*n)),r.getContext(`2d`).drawImage(t,0,0,r.width,r.height);let i=await new Promise(t=>r.toBlob(t,e.type,.88));if(!i||i.type!==e.type||i.size>10*1024*1024)throw Error(`${e.name}: optimized image could not be saved within 10 MB.`);return i}finally{t.close()}}function Er(e,t,n,r,i){return new Promise((a,o)=>{let s=new XMLHttpRequest,c=()=>s.abort();i?.addEventListener(`abort`,c,{once:!0}),s.open(`POST`,`${Cr}/documentation/upload?ticket=${encodeURIComponent(e)}`),s.setRequestHeader(`Authorization`,`Bearer ${n}`),s.setRequestHeader(`Content-Type`,t.type),s.timeout=12e4,s.upload.onprogress=e=>{e.lengthComputable&&r(Math.round(e.loaded/e.total*100))};let l=()=>i?.removeEventListener(`abort`,c);if(s.onload=()=>{l();let e;try{e=JSON.parse(s.responseText)}catch{o(Error(`The image server returned an invalid response.`));return}s.status>=200&&s.status<300?a(e.id):o(Error(e.message||`Image upload failed.`))},s.onerror=()=>{l(),o(Error(`Upload failed. Check your connection and try again.`))},s.ontimeout=()=>{l(),o(Error(`Image upload timed out. Please try again.`))},s.onabort=()=>{l(),o(Error(`Image upload cancelled.`))},i?.aborted){o(Error(`Image upload cancelled.`));return}s.send(t)})}function Dr(e){let t=(0,Un.c)(19),{image:n,sessionToken:r,imageCache:i,loading:a,className:o}=e,s=a===void 0?`lazy`:a,c=o===void 0?``:o,l=(0,X.useRef)(null),u;t[0]===n?u=t[1]:(u=wr(n),t[0]=n,t[1]=u);let d=u,[f,p]=(0,X.useState)(null),[m,h]=(0,X.useState)(`loading`),g,_;t[2]!==i||t[3]!==s||t[4]!==r||t[5]!==d?(g=()=>{if(!r&&!i)return;let e,t,n=new AbortController,a=()=>{(i?i.get(d):fetch(d,{headers:{Authorization:`Bearer ${r}`},signal:n.signal,cache:`no-store`}).then(Or).then(t=>n.signal.aborted?null:(e=URL.createObjectURL(t),e))).then(e=>{n.signal.aborted||p(e)}).catch(()=>{n.signal.aborted||h(`error`)})};return s===`eager`?a():(t=new IntersectionObserver(e=>{let[n]=e;n.isIntersecting&&(t.disconnect(),a())},{rootMargin:`200px`}),t.observe(l.current)),()=>{n.abort(),t?.disconnect(),e&&URL.revokeObjectURL(e)}},_=[d,r,i,s],t[2]=i,t[3]=s,t[4]=r,t[5]=d,t[6]=g,t[7]=_):(g=t[6],_=t[7]),(0,X.useEffect)(g,_);let v=r||i?f:d,y=`documentation-image ${c} ${m===`loading`?`is-loading`:``}`,b;t[8]===m?b=t[9]:(b=m===`loading`&&(0,Q.jsx)(`span`,{className:`documentation-skeleton`,"aria-hidden":`true`}),t[8]=m,t[9]=b);let x;t[10]!==n||t[11]!==s||t[12]!==v||t[13]!==m?(x=m===`error`?(0,Q.jsx)(`span`,{className:`documentation-image-error`,role:`img`,"aria-label":`Documentation image unavailable`,children:`Image unavailable`}):v&&(0,Q.jsx)(`img`,{src:v,alt:n.title||`Scholarship Office documentation`,loading:s,decoding:`async`,width:n.width,height:n.height,onLoad:()=>h(`ready`),onError:()=>h(`error`)}),t[10]=n,t[11]=s,t[12]=v,t[13]=m,t[14]=x):x=t[14];let S;return t[15]!==y||t[16]!==b||t[17]!==x?(S=(0,Q.jsxs)(`span`,{ref:l,className:y,children:[b,x]}),t[15]=y,t[16]=b,t[17]=x,t[18]=S):S=t[18],S}function Or(e){if(!e.ok)throw Error(`Image unavailable`);return e.blob()}function kr(e){let t=(0,Un.c)(53),{images:n,index:r,onIndex:i,onClose:a,sessionToken:o,imageCache:s}=e,c=(0,X.useRef)(null),l=(0,X.useRef)(null),u=n[r],d;t[0]!==n.length||t[1]!==r||t[2]!==i?(d=e=>i((r+e+n.length)%n.length),t[0]=n.length,t[1]=r,t[2]=i,t[3]=d):d=t[3];let f=d,p,m;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(p=()=>{let e=c.current,t=document.activeElement,n=document.body.style.overflow;return e.showModal(),document.body.style.overflow=`hidden`,()=>{e.close(),document.body.style.overflow=n,t?.isConnected&&t.focus({preventScroll:!0})}},m=[],t[4]=p,t[5]=m):(p=t[4],m=t[5]),(0,X.useEffect)(p,m);let h;t[6]===a?h=t[7]:(h=e=>{e.preventDefault(),e.stopPropagation(),a()},t[6]=a,t[7]=h);let g;t[8]!==n.length||t[9]!==f?(g=e=>{if(e.key===`ArrowLeft`&&n.length>1&&(e.preventDefault(),f(-1)),e.key===`ArrowRight`&&n.length>1&&(e.preventDefault(),f(1)),e.key===`Tab`){let t=[...e.currentTarget.querySelectorAll(`button`)];e.shiftKey&&document.activeElement===t[0]?(e.preventDefault(),t.at(-1).focus()):!e.shiftKey&&document.activeElement===t.at(-1)&&(e.preventDefault(),t[0].focus())}},t[8]=n.length,t[9]=f,t[10]=g):g=t[10];let _;t[11]===a?_=t[12]:(_=e=>{let t=e.currentTarget.getBoundingClientRect();e.target===e.currentTarget&&(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&a()},t[11]=a,t[12]=_);let v;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,Q.jsx)(`span`,{children:`Scholarship Office Documentation`}),t[13]=v):v=t[13];let y;t[14]===a?y=t[15]:(y=(0,Q.jsxs)(`header`,{children:[v,(0,Q.jsx)(`button`,{type:`button`,className:`documentation-icon-button`,"aria-label":`Close image viewer`,onClick:a,children:`×`})]}),t[14]=a,t[15]=y);let b;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(b=e=>{l.current={x:e.clientX,y:e.clientY}},t[16]=b):b=t[16];let x;t[17]!==n.length||t[18]!==f?(x=e=>{let t=l.current;l.current=null,t&&n.length>1&&Math.abs(e.clientX-t.x)>50&&Math.abs(e.clientX-t.x)>Math.abs(e.clientY-t.y)&&f(e.clientX<t.x?1:-1)},t[17]=n.length,t[18]=f,t[19]=x):x=t[19];let S;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(S=()=>{l.current=null},t[20]=S):S=t[20];let C=`${u._id}-${u.updatedAt}`,w;t[21]!==u||t[22]!==s||t[23]!==o||t[24]!==C?(w=(0,Q.jsx)(Dr,{image:u,sessionToken:o,imageCache:s,loading:`eager`},C),t[21]=u,t[22]=s,t[23]=o,t[24]=C,t[25]=w):w=t[25];let T;t[26]!==x||t[27]!==w?(T=(0,Q.jsx)(`div`,{className:`documentation-viewer-stage`,onPointerDown:b,onPointerUp:x,onPointerCancel:S,children:w}),t[26]=x,t[27]=w,t[28]=T):T=t[28];let E=u.title||`Scholarship Office documentation`,D;t[29]===E?D=t[30]:(D=(0,Q.jsx)(`h2`,{children:E}),t[29]=E,t[30]=D);let O;t[31]===u.description?O=t[32]:(O=u.description&&(0,Q.jsx)(`p`,{children:u.description}),t[31]=u.description,t[32]=O);let k;t[33]===u.eventDate?k=t[34]:(k=u.eventDate&&(0,Q.jsx)(`time`,{dateTime:u.eventDate,children:new Date(`${u.eventDate}T00:00:00`).toLocaleDateString(`en-PH`,{dateStyle:`long`})}),t[33]=u.eventDate,t[34]=k);let A;t[35]!==D||t[36]!==O||t[37]!==k?(A=(0,Q.jsxs)(`div`,{className:`documentation-viewer-caption`,children:[D,O,k]}),t[35]=D,t[36]=O,t[37]=k,t[38]=A):A=t[38];let j;t[39]!==n.length||t[40]!==r||t[41]!==f?(j=n.length>1&&(0,Q.jsxs)(`nav`,{"aria-label":`Image viewer controls`,children:[(0,Q.jsx)(`button`,{type:`button`,className:`documentation-icon-button`,"aria-label":`Previous image`,onClick:()=>f(-1),children:`←`}),(0,Q.jsxs)(`span`,{"aria-live":`polite`,children:[r+1,` / `,n.length]}),(0,Q.jsx)(`button`,{type:`button`,className:`documentation-icon-button`,"aria-label":`Next image`,onClick:()=>f(1),children:`→`})]}),t[39]=n.length,t[40]=r,t[41]=f,t[42]=j):j=t[42];let M;t[43]!==A||t[44]!==j?(M=(0,Q.jsxs)(`footer`,{children:[A,j]}),t[43]=A,t[44]=j,t[45]=M):M=t[45];let N;return t[46]!==T||t[47]!==M||t[48]!==h||t[49]!==g||t[50]!==_||t[51]!==y?(N=(0,Q.jsxs)(`dialog`,{ref:c,className:`documentation-viewer`,"aria-label":`Documentation image viewer`,onCancel:h,onKeyDown:g,onClick:_,children:[y,T,M]}),t[46]=T,t[47]=M,t[48]=h,t[49]=g,t[50]=_,t[51]=y,t[52]=N):N=t[52],N}var Ar={title:``,description:``,eventDate:``,displayOrder:0,status:`draft`};function jr(e){let t=(0,Un.c)(43),{values:n,onChange:r}=e,i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,Q.jsx)(`span`,{children:`Documentation title (optional)`}),t[0]=i):i=t[0];let a;t[1]!==r||t[2]!==n?(a=e=>r({...n,title:e.target.value}),t[1]=r,t[2]=n,t[3]=a):a=t[3];let o;t[4]!==a||t[5]!==n.title?(o=(0,Q.jsxs)(`label`,{className:`billing-field`,children:[i,(0,Q.jsx)(`input`,{"aria-label":`Documentation title`,maxLength:120,value:n.title,onChange:a})]}),t[4]=a,t[5]=n.title,t[6]=o):o=t[6];let s;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,Q.jsx)(`span`,{children:`Event date (optional)`}),t[7]=s):s=t[7];let c;t[8]!==r||t[9]!==n?(c=e=>r({...n,eventDate:e.target.value}),t[8]=r,t[9]=n,t[10]=c):c=t[10];let l;t[11]!==c||t[12]!==n.eventDate?(l=(0,Q.jsxs)(`label`,{className:`billing-field`,children:[s,(0,Q.jsx)(`input`,{"aria-label":`Documentation event date`,type:`date`,value:n.eventDate,onChange:c})]}),t[11]=c,t[12]=n.eventDate,t[13]=l):l=t[13];let u;t[14]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,Q.jsx)(`span`,{children:`Display order`}),t[14]=u):u=t[14];let d;t[15]!==r||t[16]!==n?(d=e=>r({...n,displayOrder:Number(e.target.value)}),t[15]=r,t[16]=n,t[17]=d):d=t[17];let f;t[18]!==d||t[19]!==n.displayOrder?(f=(0,Q.jsxs)(`label`,{className:`billing-field`,children:[u,(0,Q.jsx)(`input`,{"aria-label":`Documentation display order`,type:`number`,min:`0`,max:`1000000`,step:`1`,value:n.displayOrder,onChange:d})]}),t[18]=d,t[19]=n.displayOrder,t[20]=f):f=t[20];let p;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,Q.jsx)(`span`,{children:`Publication status`}),t[21]=p):p=t[21];let m;t[22]!==r||t[23]!==n?(m=e=>r({...n,status:e.target.value}),t[22]=r,t[23]=n,t[24]=m):m=t[24];let h,g;t[25]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,Q.jsx)(`option`,{value:`draft`,children:`Draft`}),g=(0,Q.jsx)(`option`,{value:`published`,children:`Published`}),t[25]=h,t[26]=g):(h=t[25],g=t[26]);let _;t[27]!==m||t[28]!==n.status?(_=(0,Q.jsxs)(`label`,{className:`billing-field`,children:[p,(0,Q.jsxs)(`select`,{"aria-label":`Documentation publication status`,value:n.status,onChange:m,children:[h,g]})]}),t[27]=m,t[28]=n.status,t[29]=_):_=t[29];let v;t[30]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,Q.jsx)(`span`,{children:`Description (optional)`}),t[30]=v):v=t[30];let y;t[31]!==r||t[32]!==n?(y=e=>r({...n,description:e.target.value}),t[31]=r,t[32]=n,t[33]=y):y=t[33];let b;t[34]!==y||t[35]!==n.description?(b=(0,Q.jsxs)(`label`,{className:`billing-field documentation-description`,children:[v,(0,Q.jsx)(`textarea`,{"aria-label":`Documentation description`,maxLength:2e3,rows:3,value:n.description,onChange:y})]}),t[34]=y,t[35]=n.description,t[36]=b):b=t[36];let x;return t[37]!==_||t[38]!==b||t[39]!==o||t[40]!==l||t[41]!==f?(x=(0,Q.jsxs)(`div`,{className:`billing-form-grid documentation-metadata`,children:[o,l,f,_,b]}),t[37]=_,t[38]=b,t[39]=o,t[40]=l,t[41]=f,t[42]=x):x=t[42],x}function Mr(e){let t=(0,Un.c)(38),{image:n,busy:r,error:i,onClose:a,onSave:o}=e,s=(0,X.useRef)(null),c;t[0]===n?c=t[1]:(c=()=>Object.fromEntries(Object.keys(Ar).map(e=>[e,n[e]])),t[0]=n,t[1]=c);let[l,u]=(0,X.useState)(c),d,f;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(d=()=>{let e=s.current,t=document.activeElement;return e.showModal(),()=>{e.close(),t?.focus({preventScroll:!0})}},f=[],t[2]=d,t[3]=f):(d=t[2],f=t[3]),(0,X.useEffect)(d,f);let p;t[4]!==r||t[5]!==a?(p=e=>{e.preventDefault(),e.stopPropagation(),r||a()},t[4]=r,t[5]=a,t[6]=p):p=t[6];let m;t[7]!==o||t[8]!==l?(m=e=>{e.preventDefault(),o(l)},t[7]=o,t[8]=l,t[9]=m):m=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,Q.jsx)(`h2`,{id:`documentation-edit-title`,children:`Edit documentation details`}),t[10]=h):h=t[10];let g;t[11]!==r||t[12]!==a?(g=(0,Q.jsxs)(`header`,{className:`billing-header`,children:[h,(0,Q.jsx)(`button`,{type:`button`,className:`billing-close`,disabled:r,"aria-label":`Close documentation details`,onClick:a,children:`×`})]}),t[11]=r,t[12]=a,t[13]=g):g=t[13];let _;t[14]===i?_=t[15]:(_=i&&(0,Q.jsx)(`p`,{className:`billing-error`,role:`alert`,children:i}),t[14]=i,t[15]=_);let v;t[16]===l?v=t[17]:(v=(0,Q.jsx)(jr,{values:l,onChange:u}),t[16]=l,t[17]=v);let y;t[18]!==_||t[19]!==v?(y=(0,Q.jsxs)(`div`,{className:`billing-body`,children:[_,v]}),t[18]=_,t[19]=v,t[20]=y):y=t[20];let b;t[21]!==r||t[22]!==a?(b=(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:r,onClick:a,children:`Cancel`}),t[21]=r,t[22]=a,t[23]=b):b=t[23];let x=r?`Saving…`:`Save details`,S;t[24]!==r||t[25]!==x?(S=(0,Q.jsx)(`button`,{type:`submit`,className:`billing-primary`,disabled:r,children:x}),t[24]=r,t[25]=x,t[26]=S):S=t[26];let C;t[27]!==b||t[28]!==S?(C=(0,Q.jsxs)(`footer`,{className:`billing-footer`,children:[b,S]}),t[27]=b,t[28]=S,t[29]=C):C=t[29];let w;t[30]!==y||t[31]!==C||t[32]!==m||t[33]!==g?(w=(0,Q.jsxs)(`form`,{onSubmit:m,children:[g,y,C]}),t[30]=y,t[31]=C,t[32]=m,t[33]=g,t[34]=w):w=t[34];let T;return t[35]!==w||t[36]!==p?(T=(0,Q.jsx)(`dialog`,{ref:s,className:`billing-dialog documentation-details-dialog`,"aria-labelledby":`documentation-edit-title`,onCancel:p,children:w}),t[35]=w,t[36]=p,t[37]=T):T=t[37],T}function Nr(e){let t=(0,Un.c)(27),{image:n,busy:r,error:i,onClose:a,onDelete:o}=e,s=(0,X.useRef)(null),c,l;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(c=()=>{let e=s.current,t=document.activeElement;return e.showModal(),()=>{e.close(),t?.isConnected&&t.focus({preventScroll:!0})}},l=[],t[0]=c,t[1]=l):(c=t[0],l=t[1]),(0,X.useEffect)(c,l);let u;t[2]!==r||t[3]!==a?(u=e=>{e.preventDefault(),e.stopPropagation(),r||a()},t[2]=r,t[3]=a,t[4]=u):u=t[4];let d;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,Q.jsx)(`header`,{className:`billing-header`,children:(0,Q.jsx)(`h2`,{id:`documentation-delete-title`,children:`Delete documentation?`})}),t[5]=d):d=t[5];let f=n.title||`Untitled documentation`,p;t[6]===f?p=t[7]:(p=(0,Q.jsxs)(`p`,{children:[`Delete “`,f,`” from the gallery? This action removes its record and deletes the image file when it is not referenced elsewhere.`]}),t[6]=f,t[7]=p);let m;t[8]===i?m=t[9]:(m=i&&(0,Q.jsx)(`p`,{className:`billing-error`,role:`alert`,children:i}),t[8]=i,t[9]=m);let h;t[10]!==p||t[11]!==m?(h=(0,Q.jsxs)(`div`,{className:`billing-body`,children:[p,m]}),t[10]=p,t[11]=m,t[12]=h):h=t[12];let g;t[13]!==r||t[14]!==a?(g=(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:r,onClick:a,children:`Cancel`}),t[13]=r,t[14]=a,t[15]=g):g=t[15];let _=r?`Deleting…`:`Delete image`,v;t[16]!==r||t[17]!==o||t[18]!==_?(v=(0,Q.jsx)(`button`,{type:`button`,className:`billing-primary`,disabled:r,onClick:o,children:_}),t[16]=r,t[17]=o,t[18]=_,t[19]=v):v=t[19];let y;t[20]!==v||t[21]!==g?(y=(0,Q.jsxs)(`footer`,{className:`billing-footer`,children:[g,v]}),t[20]=v,t[21]=g,t[22]=y):y=t[22];let b;return t[23]!==y||t[24]!==u||t[25]!==h?(b=(0,Q.jsxs)(`dialog`,{ref:s,className:`billing-dialog documentation-delete-dialog`,"aria-labelledby":`documentation-delete-title`,onCancel:u,children:[d,h,y]}),t[23]=y,t[24]=u,t[25]=h,t[26]=b):b=t[26],b}function Pr({sessionToken:e,onClose:t}){let n=(0,X.useRef)(null),r=(0,X.useRef)(null),i=(0,X.useRef)([]),a=(0,X.useRef)(!0),o=(0,X.useRef)(null),s=(0,X.useRef)(0),[c,l]=(0,X.useState)([]),[u,d]=(0,X.useState)(Ar),[f,p]=(0,X.useState)(!1),[m,h]=(0,X.useState)(!1),[g,_]=(0,X.useState)(!1),[v,y]=(0,X.useState)(``),[b,x]=(0,X.useState)(``),[S,C]=(0,X.useState)(``),[w,T]=(0,X.useState)(``),[E,D]=(0,X.useState)(`all`),[O,k]=(0,X.useState)(`desc`),[A,j]=(0,X.useState)(1),[M,N]=(0,X.useState)(null),[P,F]=(0,X.useState)(null),[I,L]=(0,X.useState)(null),R=Cn(Z.documentation.list,{sessionToken:e,search:w,status:E,sort:O,page:A}),z=wn(Z.documentation.beginUpload),B=wn(Z.documentation.edit),V=wn(Z.documentation.remove);(0,X.useEffect)(()=>{let e=n.current,t=document.activeElement,r=document.body.style.overflow;return a.current=!0,e.showModal(),document.body.style.overflow=`hidden`,()=>{a.current=!1,e.close(),document.body.style.overflow=r,o.current?.abort(),i.current.forEach(e=>URL.revokeObjectURL(e.url)),t?.isConnected&&t.focus({preventScroll:!0})}},[]),(0,X.useEffect)(()=>{let e=setTimeout(()=>T(S),250);return()=>clearTimeout(e)},[S]);let H=e=>{i.current=e,l(e)},U=async e=>{if(g||m)return;let t=10-i.current.length;if(!t){y(`Upload up to 10 images at a time.`);return}h(!0),y(``),x(``);let n=[];for(let r of[...e].slice(0,t))try{let e=await Tr(r);if(!a.current)return;let t={key:`documentation-${s.current++}`,name:r.name,blob:e,url:URL.createObjectURL(e),progress:0,state:`ready`};H([...i.current,t])}catch(e){n.push(e.message)}[...e].length>t&&n.push(`Only the first available 10 images were selected.`),a.current&&(h(!1),y(n.join(` `)))},W=async e=>{_(!0),y(``);try{await e()}catch(e){y(e instanceof Error?e.message:`Documentation operation failed.`)}finally{a.current&&_(!1)}},G=()=>W(async()=>{if(!i.current.length)throw Error(`Choose at least one documentation image.`);o.current=new AbortController;let t=0,n=[],r=[...i.current];for(let a=0;a<r.length;a++){let s=r[a];if(o.current.signal.aborted)break;let c=e=>H(i.current.map(t=>t.key===s.key?{...t,...e}:t));try{c({state:`uploading`,error:``}),await Er(await z({sessionToken:e,...u,displayOrder:u.displayOrder+a,mimeType:s.blob.type,fileSize:s.blob.size}),s.blob,e,e=>c({progress:e}),o.current.signal),t++,URL.revokeObjectURL(s.url),H(i.current.filter(e=>e.key!==s.key))}catch(e){c({state:`error`,error:e.message}),n.push(`${s.name}: ${e.message}`)}}x(`${t} documentation image${t===1?``:`s`} saved to Convex Storage.`),n.length&&y(n.join(` `)),j(1)}),K=R?.rows||[],ee=K.findIndex(e=>e._id===I);return(0,Q.jsxs)(`dialog`,{ref:n,className:`billing-dialog billing-main-dialog documentation-admin-dialog`,"aria-labelledby":`documentation-management-title`,onCancel:e=>{e.target===e.currentTarget&&(e.preventDefault(),!g&&!m&&t())},onKeyDown:e=>{if(e.key!==`Tab`||e.target.closest(`dialog`)!==e.currentTarget)return;let t=[...e.currentTarget.querySelectorAll(`button:not(:disabled),input:not(:disabled),textarea:not(:disabled),select:not(:disabled)`)].filter(t=>t.getClientRects().length&&t.closest(`dialog`)===e.currentTarget);e.shiftKey&&document.activeElement===t[0]?(e.preventDefault(),t.at(-1)?.focus()):!e.shiftKey&&document.activeElement===t.at(-1)&&(e.preventDefault(),t[0]?.focus())},children:[(0,Q.jsxs)(`header`,{className:`billing-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`billing-kicker`,children:`Administration`}),(0,Q.jsx)(`h2`,{id:`documentation-management-title`,children:`Documentation Management`}),(0,Q.jsx)(`p`,{children:`Manage official Scholarship Office documentation and gallery images.`})]}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-close`,"aria-label":`Close Documentation Management`,disabled:g||m,onClick:t,children:`×`})]}),(0,Q.jsxs)(`div`,{className:`billing-body`,children:[v&&(0,Q.jsx)(`p`,{className:`billing-error`,role:`alert`,children:v}),b&&(0,Q.jsx)(`p`,{className:`billing-notice`,role:`status`,children:b}),(0,Q.jsxs)(`section`,{className:`billing-card`,"aria-labelledby":`documentation-upload-title`,children:[(0,Q.jsx)(`h3`,{id:`documentation-upload-title`,children:`Upload Documentation`}),(0,Q.jsxs)(`div`,{className:`documentation-dropzone ${f?`is-dragging`:``}`,onDragOver:e=>{e.preventDefault(),p(!0)},onDragLeave:()=>p(!1),onDrop:e=>{e.preventDefault(),p(!1),U(e.dataTransfer.files)},children:[(0,Q.jsx)(`svg`,{viewBox:`0 0 48 48`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:`M7 32v9h34v-9M24 34V7m-10 10L24 7l10 10`})}),(0,Q.jsx)(`strong`,{children:`Drag your documentation images here`}),(0,Q.jsx)(`p`,{children:`PNG, JPG or WebP · up to 10 MB each · 10 images per upload. Images are optimized for web display.`}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:g||m,onClick:()=>r.current?.click(),children:m?`Preparing images…`:`Browse files`}),(0,Q.jsx)(`input`,{ref:r,className:`documentation-file-input`,"aria-label":`Choose documentation images`,type:`file`,accept:`image/png,image/jpeg,image/webp`,multiple:!0,disabled:g||m,onChange:e=>{U(e.target.files),e.target.value=``}})]}),c.length>0&&(0,Q.jsx)(`div`,{className:`documentation-upload-queue`,children:c.map(e=>(0,Q.jsxs)(`article`,{children:[(0,Q.jsx)(`img`,{src:e.url,alt:`Selected image ${e.name}`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:e.name}),(0,Q.jsxs)(`small`,{children:[(e.blob.size/1024/1024).toFixed(2),` MB · `,e.state===`uploading`?`${e.progress}% uploaded`:e.state===`error`?`Upload failed`:`Ready`]}),e.state===`uploading`&&(0,Q.jsx)(`progress`,{max:`100`,value:e.progress,"aria-label":`Upload progress for ${e.name}`}),e.error&&(0,Q.jsx)(`p`,{children:e.error})]}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-text-button`,disabled:g,"aria-label":`Remove ${e.name}`,onClick:()=>{URL.revokeObjectURL(e.url),H(i.current.filter(t=>t.key!==e.key))},children:`Remove`})]},e.key))}),(0,Q.jsx)(jr,{values:u,onChange:d}),(0,Q.jsx)(`p`,{className:`billing-hint`,children:`These details apply to the selected images. Display order increments for each image; individual details can be edited after saving. Draft images remain private.`}),(0,Q.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,Q.jsx)(`button`,{type:`button`,className:`billing-primary`,disabled:g||m||!c.length,onClick:G,children:g?`Saving…`:`Save Documentation`}),g&&c.length>0&&(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,onClick:()=>o.current?.abort(),children:`Cancel remaining uploads`})]})]}),(0,Q.jsxs)(`section`,{className:`billing-card`,"aria-labelledby":`documentation-manage-title`,children:[(0,Q.jsx)(`h3`,{id:`documentation-manage-title`,children:`Manage Uploaded Documentation`}),(0,Q.jsxs)(`div`,{className:`documentation-admin-filters`,children:[(0,Q.jsxs)(`label`,{className:`billing-field`,children:[(0,Q.jsx)(`span`,{children:`Search by title`}),(0,Q.jsx)(`input`,{"aria-label":`Search documentation by title`,value:S,maxLength:120,onChange:e=>{C(e.target.value),j(1)}})]}),(0,Q.jsxs)(`label`,{className:`billing-field`,children:[(0,Q.jsx)(`span`,{children:`Publication status`}),(0,Q.jsxs)(`select`,{"aria-label":`Filter documentation status`,value:E,onChange:e=>{D(e.target.value),j(1)},children:[(0,Q.jsx)(`option`,{value:`all`,children:`All statuses`}),(0,Q.jsx)(`option`,{value:`draft`,children:`Draft`}),(0,Q.jsx)(`option`,{value:`published`,children:`Published`})]})]}),(0,Q.jsxs)(`label`,{className:`billing-field`,children:[(0,Q.jsx)(`span`,{children:`Sort by upload date`}),(0,Q.jsxs)(`select`,{"aria-label":`Sort documentation by date`,value:O,onChange:e=>{k(e.target.value),j(1)},children:[(0,Q.jsx)(`option`,{value:`desc`,children:`Newest first`}),(0,Q.jsx)(`option`,{value:`asc`,children:`Oldest first`})]})]})]}),R?K.length?(0,Q.jsx)(`div`,{className:`documentation-admin-grid`,children:K.map(t=>(0,Q.jsxs)(`article`,{className:`documentation-admin-card`,children:[(0,Q.jsx)(`button`,{type:`button`,className:`documentation-thumbnail`,"aria-label":`Preview ${t.title||`documentation image`}`,onClick:()=>L(t._id),children:(0,Q.jsx)(Dr,{image:t,sessionToken:e})}),(0,Q.jsxs)(`div`,{className:`documentation-admin-card-body`,children:[(0,Q.jsxs)(`div`,{className:`documentation-card-title`,children:[(0,Q.jsx)(`h4`,{children:t.title||`Untitled documentation`}),(0,Q.jsx)(`span`,{className:`billing-status ${t.status===`published`?`is-eligible`:``}`,children:t.status===`published`?`Published`:`Draft`})]}),(0,Q.jsxs)(`p`,{children:[`Event: `,t.eventDate||`Not specified`]}),(0,Q.jsxs)(`p`,{children:[`Uploaded: `,new Date(t.createdAt).toLocaleDateString(`en-PH`,{timeZone:`Asia/Manila`}),` · Order `,t.displayOrder]}),(0,Q.jsxs)(`div`,{className:`documentation-card-actions`,children:[(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:g,onClick:()=>{y(``),N(t)},children:`Edit details`}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:g,onClick:()=>W(async()=>{await B({sessionToken:e,id:t._id,...Object.fromEntries(Object.keys(Ar).map(e=>[e,t[e]])),status:t.status===`published`?`draft`:`published`}),x(t.status===`published`?`Image unpublished.`:`Image published on the homepage.`)}),children:t.status===`published`?`Unpublish`:`Publish`}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-text-button`,disabled:g,onClick:()=>{y(``),F(t)},children:`Delete`})]})]})]},`${t._id}-${t.updatedAt}`))}):(0,Q.jsx)(`p`,{className:`billing-hint`,children:`No documentation matches these filters.`}):(0,Q.jsx)(`p`,{role:`status`,children:`Loading documentation…`}),R&&(0,Q.jsxs)(`nav`,{className:`billing-pagination`,"aria-label":`Documentation pagination`,children:[(0,Q.jsxs)(`span`,{children:[R.total,` images · Page `,R.page,` of `,R.pages]}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:g||R.page<=1,onClick:()=>j(R.page-1),children:`Previous`}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:g||R.page>=R.pages,onClick:()=>j(R.page+1),children:`Next`})]})]})]}),(0,Q.jsxs)(`footer`,{className:`billing-footer`,children:[(0,Q.jsx)(`span`,{className:`billing-hint`,children:`Only published documentation appears on the public homepage.`}),(0,Q.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:g||m,onClick:t,children:`Close`})]}),M&&(0,Q.jsx)(Mr,{image:M,busy:g,error:v,onClose:()=>N(null),onSave:t=>W(async()=>{await B({sessionToken:e,id:M._id,...t}),N(null),x(`Documentation details saved.`)})}),P&&(0,Q.jsx)(Nr,{image:P,busy:g,error:v,onClose:()=>F(null),onDelete:()=>W(async()=>{let t=await V({sessionToken:e,id:P._id});F(null),x(t.retainedFile?`Documentation removed. Its referenced storage file was retained.`:`Documentation and its image file deleted.`)})}),ee>=0&&(0,Q.jsx)(kr,{images:K,index:ee,sessionToken:e,onIndex:e=>L(K[e]._id),onClose:()=>L(null)})]})}var Fr={link1Name:``,link1Url:``,link2Name:``,link2Url:``};function Ir(e=``){return String(e).split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`S`}function Lr(){let e=globalThis.crypto;if(typeof e?.randomUUID==`function`)try{return e.randomUUID()}catch{}if(typeof e?.getRandomValues==`function`)try{let t=e.getRandomValues(new Uint8Array(16));return Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}catch{}return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`}function Rr(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`short`,timeStyle:`short`}).format(new Date(e)):``}function zr(e,t){let n=new Date(e),r=new Date(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate()}function Br({sessionToken:e,requestCount:t,onExport:n,onClose:r}){let[i,a]=(0,X.useState)(null),[o,s]=(0,X.useState)(()=>window.matchMedia(`(max-width: 767px)`).matches),[c,l]=(0,X.useState)(``),[u,d]=(0,X.useState)(`all`),[f,p]=(0,X.useState)(``),[m,h]=(0,X.useState)(!1),[g,_]=(0,X.useState)(!1),[v,y]=(0,X.useState)(!1),[b,x]=(0,X.useState)(``),[S,C]=(0,X.useState)(!1),[w,T]=(0,X.useState)(Fr),[E,D]=(0,X.useState)(!1),O=(0,X.useRef)(null),k=(0,X.useRef)(null),A=(0,X.useRef)(!1),j=(0,X.useRef)(!0),M=(0,X.useRef)(null),N=(0,X.useRef)(0),P=Cn(Z.support.listConversations,e?{sessionToken:e}:`skip`),F=Cn(Z.support.getSettings),I=wn(Z.support.migrateLegacyRequests),L=wn(Z.support.sendMessage),R=wn(Z.support.markRead),z=wn(Z.support.setStatus),B=wn(Z.support.saveSettings),V=wn(Z.support.clearAll);(0,X.useEffect)(()=>{e&&I({sessionToken:e}).catch(e=>{x(e.message||`Unable to prepare existing requests.`),C(!0)})},[e,t,I]),(0,X.useEffect)(()=>{if(!b)return;let e=window.setTimeout(()=>x(``),4500);return()=>window.clearTimeout(e)},[b]);let H=E?w:{...Fr,...F},U=(0,X.useMemo)(()=>(P??[]).filter(e=>{let t=c.trim().toLowerCase(),n=!t||[e.studentName,e.studentId,e.email,e.visitorType,e.visitorStudentName].some(e=>String(e??``).toLowerCase().includes(t)),r=e.messages?.at(-1),i=e.source===`Visitor Chat`||!!e.visitorSessionHash,a=u===`all`||u===`students`&&!i||u===`visitors`&&i||u===`unread`&&e.unreadCount>0||u===`replied`&&e.messages?.some(e=>e.senderRole===`admin`)||u===`resolved`&&e.status===`resolved`;return n&&a&&r}),[P,c,u]),W=o?null:(P??[]).find(e=>e._id===i)??U[0]??null,G=W?._id,K=W?.messages??[];(0,X.useEffect)(()=>{let e=O.current;if(!e||!G)return;let t=M.current!==G,n=N.current!==K.length;(t||n&&j.current)&&(e.scrollTo({top:e.scrollHeight,behavior:`smooth`}),j.current=!0),M.current=G,N.current=K.length},[G,K.length]),(0,X.useEffect)(()=>{e&&W?._id&&R({sessionToken:e,conversationId:W._id}).catch(()=>{})},[e,W?._id,R]);let ee=e=>{a(e._id),s(!1),M.current=null,x(``),C(!1)},q=async()=>{let t=f.trim();if(!(!t||!W||A.current)){A.current=!0,j.current=!0,h(!0),x(``),C(!1);try{await L({sessionToken:e,conversationId:W._id,content:t,clientMessageId:Lr()}),p(``),k.current&&(k.current.style.height=``)}catch(e){x(e.message||`Message could not be sent. Please try again.`),C(!0)}finally{A.current=!1,h(!1)}}},te=e=>{p(e.target.value),e.target.style.height=`auto`,e.target.style.height=`${Math.min(e.target.scrollHeight,140)}px`},J=e=>{let t=e.currentTarget;j.current=t.scrollHeight-t.scrollTop-t.clientHeight<80},Y=async t=>{t.preventDefault(),_(!0),x(``);try{let t=await B({sessionToken:e,...H});t.settings&&(T(t.settings),D(!0)),x(t.skippedNames?.length?`Saved complete links. Add a URL for: ${t.skippedNames.join(`, `)}.`:`Support links saved.`),C(!1)}catch(e){x(e.message||`Support links could not be saved.`),C(!0)}finally{_(!1)}},ne=async()=>{if(!W)return;let t=W.status===`resolved`?`open`:`resolved`;try{await z({sessionToken:e,conversationId:W._id,status:t})}catch(e){x(e.message||`Conversation status could not be updated.`),C(!0)}},re=async()=>{if(!v){y(!0);try{await V({sessionToken:e}),a(null),x(`Requests and chat history were archived and cleared.`),C(!1)}catch(e){x(e.message||`Messages could not be cleared.`),C(!0)}finally{y(!1)}}};return(0,Q.jsxs)(`div`,{className:`support-modal`,children:[(0,Q.jsxs)(`header`,{className:`support-titlebar`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`support-eyebrow`,children:`STUDENT SERVICES`}),(0,Q.jsx)(`h2`,{id:`admin-quick-actions-title`,children:`Student Support`}),(0,Q.jsx)(`p`,{children:`Requests, conversations, and support settings in one place.`})]}),(0,Q.jsxs)(`div`,{className:`support-toolbar`,children:[(0,Q.jsxs)(`span`,{className:`support-total`,children:[(0,Q.jsx)(`b`,{children:t}),` total requests`]}),(0,Q.jsx)(`button`,{type:`button`,className:`support-secondary-button`,onClick:n,disabled:!t,children:`Export responses`}),(0,Q.jsx)(`button`,{type:`button`,className:`support-danger-button`,onClick:()=>{window.confirm(`Move ${t} student requests and their chat history to the archive, then remove them from the active inbox? You can restore archived records later.`)&&re()},disabled:!t||v,children:v?`Archiving…`:`Clear all`}),(0,Q.jsx)(`button`,{type:`button`,className:`admin-modal-close support-close`,"aria-label":`Close Student Support`,onClick:r,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})]}),(0,Q.jsxs)(`details`,{className:`support-settings`,children:[(0,Q.jsxs)(`summary`,{children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`settings`}),` Support Links Configuration `,(0,Q.jsx)(`span`,{className:`support-settings-hint`,children:`Student portal links`})]}),(0,Q.jsxs)(`form`,{onSubmit:Y,className:`support-settings-grid`,children:[[1,2].map(e=>(0,Q.jsxs)(`fieldset`,{children:[(0,Q.jsxs)(`legend`,{children:[`Support Link `,e]}),(0,Q.jsxs)(`label`,{children:[`Link name`,(0,Q.jsx)(`input`,{value:H[`link${e}Name`],maxLength:80,onChange:t=>{D(!0),T(n=>({...n,[`link${e}Name`]:t.target.value}))},placeholder:e===1?`Facebook Messenger`:`Student Support Portal`})]}),(0,Q.jsxs)(`label`,{children:[`Support URL`,(0,Q.jsx)(`input`,{type:`url`,value:H[`link${e}Url`],onChange:t=>{D(!0),T(n=>({...n,[`link${e}Url`]:t.target.value}))},placeholder:`https://example.com/support`})]})]},e)),(0,Q.jsx)(`button`,{type:`submit`,className:`support-primary-button`,disabled:g,children:g?`Saving links…`:`Save Support Links`})]})]}),b&&(0,Q.jsx)(`div`,{className:`support-notice ${S?`support-notice--error`:``}`,role:S?`alert`:`status`,children:b}),!e&&(0,Q.jsx)(`div`,{className:`support-notice support-notice--error`,children:`Your administrator session needs to be refreshed. Sign out and sign back in to manage support.`}),(0,Q.jsxs)(`div`,{className:`support-chat ${W&&!o?`support-chat--selected`:``}`,children:[(0,Q.jsxs)(`aside`,{className:`support-inbox`,children:[(0,Q.jsxs)(`div`,{className:`support-inbox-heading`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`h3`,{children:`Conversations`}),(0,Q.jsxs)(`span`,{children:[P?.length??`…`,` conversations`]})]}),(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`forum`})]}),(0,Q.jsxs)(`label`,{className:`support-search`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,Q.jsx)(`input`,{"aria-label":`Search conversations`,value:c,onChange:e=>l(e.target.value),placeholder:`Search name, ID or email`})]}),(0,Q.jsx)(`div`,{className:`support-filters`,role:`tablist`,"aria-label":`Conversation filters`,children:[[`all`,`All`],[`students`,`Student Requests`],[`visitors`,`Visitor Chats`],[`unread`,`Unread`],[`replied`,`Replied`],[`resolved`,`Resolved`]].map(([e,t])=>(0,Q.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":u===e,onClick:()=>d(e),children:t},e))}),(0,Q.jsxs)(`div`,{className:`support-conversation-list`,children:[P===void 0&&(0,Q.jsx)(`div`,{className:`support-list-skeleton`,"aria-label":`Loading conversations`,children:[1,2,3,4].map(e=>(0,Q.jsxs)(`div`,{className:`support-skeleton-row`,children:[(0,Q.jsx)(`i`,{}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`b`,{}),(0,Q.jsx)(`b`,{})]})]},e))}),P?.length===0&&(0,Q.jsx)(`div`,{className:`support-list-state`,children:`No student requests yet.`}),U.map(e=>{let t=e.messages.at(-1),n=e.source===`Visitor Chat`||!!e.visitorSessionHash,r=n?`${e.visitorType||`Visitor`} · Visitor${e.visitorStudentName?` · Student: ${e.visitorStudentName}`:``}${e.studentId?` · ID: ${e.studentId}`:``}`:`${e.studentPortal?`Student Portal · `:``}${e.studentId||e.email}${e.tesAwardNumber?` · TES ${e.tesAwardNumber}`:``}`;return(0,Q.jsxs)(`button`,{type:`button`,className:`support-conversation ${W?._id===e._id?`is-active`:``}`,onClick:()=>ee(e),children:[(0,Q.jsx)(`span`,{className:`support-avatar`,children:Ir(e.studentName)}),(0,Q.jsxs)(`span`,{className:`support-conversation-copy`,children:[(0,Q.jsxs)(`strong`,{children:[e.studentName||`Student`,n&&(0,Q.jsx)(`span`,{className:`support-visitor-badge`,children:`Visitor`}),e.studentPortal&&(0,Q.jsx)(`span`,{className:`support-portal-badge`,children:`Student Portal`})]}),(0,Q.jsx)(`small`,{children:r}),(0,Q.jsx)(`span`,{children:t.content})]}),(0,Q.jsxs)(`span`,{className:`support-conversation-meta`,children:[(0,Q.jsx)(`time`,{children:Rr(t.createdAt)}),e.unreadCount>0&&(0,Q.jsx)(`i`,{"aria-label":`${e.unreadCount} unread messages`,children:e.unreadCount}),(0,Q.jsx)(`small`,{className:e.status===`resolved`?`is-resolved`:``,children:e.status})]})]},e._id)}),P?.length>0&&U.length===0&&(0,Q.jsx)(`div`,{className:`support-list-state`,children:`No conversations match those filters.`})]})]}),(0,Q.jsx)(`section`,{className:`support-thread`,"aria-label":`Student conversation`,children:W?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`header`,{className:`support-thread-header`,children:[(0,Q.jsx)(`button`,{type:`button`,className:`support-back-button`,onClick:()=>s(!0),children:`← Back`}),(0,Q.jsx)(`span`,{className:`support-avatar support-avatar--large`,children:Ir(W.studentName)}),(0,Q.jsxs)(`div`,{className:`support-student-id`,children:[(0,Q.jsxs)(`h3`,{children:[W.studentName||`Student`,(W.source===`Visitor Chat`||W.visitorSessionHash)&&(0,Q.jsxs)(`span`,{className:`support-visitor-badge`,children:[`Visitor · `,W.visitorType||`Other Visitor`]}),W.studentPortal&&(0,Q.jsx)(`span`,{className:`support-portal-badge`,children:`Student Portal`})]}),(0,Q.jsx)(`span`,{children:W.source===`Visitor Chat`||W.visitorSessionHash?`${W.studentId?`School ID: ${W.studentId} · `:``}${W.visitorStudentName?`Student: ${W.visitorStudentName} · `:``}Visitor chat`:`${W.studentId||`No student ID`} · ${W.email} · ${W.source||`Student Portal`}${W.tesAwardNumber?` · TES Award No. ${W.tesAwardNumber}`:``}`})]}),(0,Q.jsx)(`span`,{className:`support-status-pill ${W.status===`resolved`?`is-resolved`:``}`,children:W.status}),(0,Q.jsx)(`button`,{type:`button`,className:`support-resolve-button`,onClick:ne,children:W.status===`resolved`?`Reopen`:`Mark resolved`})]}),(0,Q.jsxs)(`div`,{className:`support-message-history`,ref:O,onScroll:J,children:[K.length===0&&(0,Q.jsx)(`div`,{className:`support-list-state`,children:`No messages in this conversation yet.`}),K.map((e,t)=>{let n=K[t-1],r=!n||!zr(n.createdAt,e.createdAt),i=e.senderRole===`admin`;return(0,Q.jsxs)(`div`,{children:[r&&(0,Q.jsx)(`div`,{className:`support-date-divider`,children:(0,Q.jsx)(`span`,{children:new Intl.DateTimeFormat(`en-PH`,{dateStyle:`full`}).format(new Date(e.createdAt))})}),(0,Q.jsxs)(`div`,{className:`support-message-row ${i?`is-own`:``}`,children:[(0,Q.jsx)(`span`,{className:`support-avatar support-avatar--message`,children:i?`A`:Ir(W.studentName)}),(0,Q.jsxs)(`div`,{className:`support-message-body`,children:[(0,Q.jsx)(`div`,{className:`support-bubble ${i?`is-own`:``}`,children:e.content}),(0,Q.jsx)(`time`,{children:Rr(e.createdAt)})]})]})]},e._id)})]}),(0,Q.jsxs)(`form`,{className:`support-composer`,onSubmit:e=>{e.preventDefault(),q()},children:[(0,Q.jsxs)(`div`,{className:`support-composer-input`,children:[(0,Q.jsx)(`textarea`,{ref:k,value:f,onChange:te,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),q())},maxLength:2e3,placeholder:`Write a helpful reply…`,"aria-label":`Write a message`}),(0,Q.jsx)(`button`,{className:`support-send-button`,type:`submit`,"aria-label":m?`Sending message`:`Send message`,disabled:!f.trim()||m,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:m?`hourglass_top`:`send`})})]}),(0,Q.jsxs)(`div`,{className:`support-composer-meta`,children:[(0,Q.jsxs)(`span`,{children:[f.length,`/2000 · Enter to send, Shift + Enter for a new line`]}),(0,Q.jsx)(`span`,{children:m?`Sending…`:`Messages are saved to this conversation`})]})]})]}):(0,Q.jsxs)(`div`,{className:`support-empty-thread`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`forum`}),(0,Q.jsx)(`h3`,{children:`Select a conversation`}),(0,Q.jsx)(`p`,{children:`Choose a student request to review its history and reply.`})]})})]})]})}var Vr=5,Hr=5,Ur=5,Wr=7,Gr=5,Kr=5,qr=5,Jr=10,Yr=10,Xr=5,Zr=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``),Qr=[`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`];function $r(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}var ei=[`No.`,`TES Award Number`,`Student ID`,`Last Name`,`First Name`,`MI.`,`batch No.`,`Status`,`Semester`,`School Year`];function ti(e){let t=(0,Un.c)(4),{status:n,tone:r}=e,i=`admin-status admin-status--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,Q.jsx)(`span`,{className:`admin-status__dot`}),t[0]=a):a=t[0];let o=n||`—`,s;return t[1]!==i||t[2]!==o?(s=(0,Q.jsxs)(`span`,{className:i,children:[a,o]}),t[1]=i,t[2]=o,t[3]=s):s=t[3],s}function ni(e=``){let t=e.toLowerCase();return t.includes(`grantee`)?`grantee`:t.includes(`applicant`)?`applicant`:t.includes(`complete`)||t.includes(`resolved`)||t.includes(`valid`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function ri(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function ii(e){return`"${String(e??``).replaceAll(`"`,`""`)}"`}function ai(e,t){if(!Array.isArray(t)||t.length<2)throw Error(`No applicant rows are available to download.`);let n=t.map(e=>e.map(ii).join(`,`)).join(`
`),r=new Blob([n],{type:`text/csv;charset=utf-8`});if(!r.size)throw Error(`The applicant CSV file could not be generated.`);let i=URL.createObjectURL(r),a=document.createElement(`a`);return a.href=i,a.download=e,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(i),!0}function oi(){let e=[ei,[`1`,`TES-2024-0001`,`2024-UNI-0001`,`Dela Cruz`,`Juan`,`P`,`2024-01`,`Pending`,`1st Semester`,`2024-2025`]].map(e=>e.map(e=>`"${e.replaceAll(`"`,`""`)}"`).join(`,`)).join(`
`),t=new Blob([e],{type:`text/csv;charset=utf-8`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`tdp-grantee-template.csv`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function si(e,t){return String(e??``).trim().replace(/[^a-z0-9-]+/gi,`-`).replace(/^-+|-+$/g,``)||t}function ci(e,t){for(let n of[`lastName`,`firstName`,`middleInitial`,`studentId`]){let r=String(e?.[n]??``).localeCompare(String(t?.[n]??``),void 0,{numeric:!0,sensitivity:`base`});if(r!==0)return r}return 0}function li(e){return String(e?.course??e?.program??e?.degreeProgram??``).trim()}function ui(e){let t=String(e?.applicationYear??``).trim();if(t)return t;let n=e?.submittedAt;return n?String(new Date(n).getFullYear()):``}function di(e,t=``){return[`Application Year,Course,Student ID,LRN,PhilSys ID Number,4Ps ID Number,Last Name,First Name,Ext Name,Middle Name,Gender,Sex Code,Birth Date,Year,Year Level Code,Father Last Name,Father First Name,Father Middle Name,Mother Last Name,Mother First Name,Mother Middle Name,Address,Street / Barangay,City / Municipality,Province,Region,Zip Code,PWD ID,Has Disability,Disability Type,Solo Parent Dependent Code,First Generation Code,Indigenous Peoples Member,Indigenous Group,Applicant Classification,PWD ID PDF,4Ps ID PDF,COR / Study Load PDF,Mobile No.,Email Address,Status,Submitted At`.split(`,`),...e.map(e=>[ui(e),li(e)||t,e.studentId??``,e.lrn??``,e.philSysIdNumber??``,e.fourPsIdNumber??``,e.lastName??``,e.firstName??``,e.extensionName??``,e.middleName??``,e.gender??``,e.sexCode??``,e.birthDate??``,e.year??``,e.yearLevelCode??``,e.fatherLastName??``,e.fatherFirstName??``,e.fatherMiddleName??``,e.motherLastName??``,e.motherFirstName??``,e.motherMiddleName??``,e.address??``,e.streetBarangay??``,e.cityMunicipality??``,e.province??``,e.region??``,e.zipCode??``,e.pwdId??``,e.hasDisability===void 0?``:e.hasDisability?`Yes`:`No`,e.disabilityType??``,e.soloParentDependent??``,e.firstGeneration??``,e.isIndigenous===void 0?``:e.isIndigenous?`Yes`:`No`,e.indigenousGroup??``,e.applicantClassification??``,e.pwdIdFileName??``,e.fourPsFileName??``,e.corFileName??``,e.mobileNumber??``,e.emailAddress??``,e.status??``,ri(e.submittedAt)])]}function fi(e,t){if(t<=5)return Array.from({length:t},(e,t)=>t+1);let n=[1],r=Math.max(2,e-1),i=Math.min(t-1,e+1);r>2&&n.push(`left-ellipsis`);for(let e=r;e<=i;e+=1)n.push(e);return i<t-1&&n.push(`right-ellipsis`),n.push(t),n}function pi(e,t){if(e===`application/pdf`)return`.pdf`;if(e===`image/png`)return`.png`;if(e===`image/jpeg`)return`.jpg`;try{let e=new URL(t).pathname.match(/\.(pdf|png|jpe?g)$/i);return e?`.${e[1].toLowerCase().replace(`jpeg`,`jpg`)}`:``}catch{return``}}async function mi(e,t){let n=`${Zr}/google-drive/file?url=${encodeURIComponent(e.frontIdUrl)}`,r=await fetch(n);if(!r.ok)throw Error(`Unable to download School ID file for ${e.studentId||`student`}.`);let i=await r.blob(),a=new Uint8Array(await i.arrayBuffer()),o=si(e.studentId,`student-${t+1}`),s=si(e.lastName,`no-last-name`),c=si(e.firstName,`no-first-name`),l=si(e.middleInitial,`no-middle-name`),u=si(e.batchId,`no-batch`),d=pi(i.type,e.frontIdUrl);return{bytes:a,name:`${s}-${c}-${l}-student-id-${o}-batch-${u}-${t+1}${d}`}}function hi(){return Array.from({length:256},(e,t)=>{let n=t;for(let e=0;e<8;e+=1)n=n&1?3988292384^n>>>1:n>>>1;return n>>>0})}var gi=hi(),_i=new TextEncoder;function vi(e){let t=4294967295;for(let n of e)t=gi[(t^n)&255]^t>>>8;return(t^4294967295)>>>0}function yi(){let e=new Date,t=e.getHours()<<11|e.getMinutes()<<5|Math.floor(e.getSeconds()/2);return{date:e.getFullYear()-1980<<9|e.getMonth()+1<<5|e.getDate(),time:t}}function $(e,t,n,r){if(n===2){e.setUint16(t,r,!0);return}e.setUint32(t,r>>>0,!0)}function bi(e){let{date:t,time:n}=yi(),r=[],i=[],a=0;e.forEach(e=>{let o=_i.encode(e.name),s=vi(e.bytes),c=new Uint8Array(30+o.length),l=new DataView(c.buffer);$(l,0,4,67324752),$(l,4,2,20),$(l,8,2,0),$(l,10,2,n),$(l,12,2,t),$(l,14,4,s),$(l,18,4,e.bytes.length),$(l,22,4,e.bytes.length),$(l,26,2,o.length),c.set(o,30),r.push(c,e.bytes);let u=new Uint8Array(46+o.length),d=new DataView(u.buffer);$(d,0,4,33639248),$(d,4,2,20),$(d,6,2,20),$(d,10,2,0),$(d,12,2,n),$(d,14,2,t),$(d,16,4,s),$(d,20,4,e.bytes.length),$(d,24,4,e.bytes.length),$(d,28,2,o.length),$(d,42,4,a),u.set(o,46),i.push(u),a+=c.length+e.bytes.length});let o=i.reduce((e,t)=>e+t.length,0),s=new Uint8Array(22),c=new DataView(s.buffer);return $(c,0,4,101010256),$(c,8,2,e.length),$(c,10,2,e.length),$(c,12,4,o),$(c,16,4,a),new Blob([...r,...i,s],{type:`application/zip`})}function xi(e){return e.replaceAll(`\xA0`,` `).trim()}function Si(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a+=1){let o=e[a],s=e[a+1];o===`"`&&i&&s===`"`?(r+=`"`,a+=1):o===`"`?i=!i:o===`,`&&!i?(n.push(xi(r)),r=``):(o===`
`||o===`\r`)&&!i?(o===`\r`&&s===`
`&&(a+=1),n.push(xi(r)),n.some(Boolean)&&t.push(n),n=[],r=``):r+=o}return n.push(xi(r)),n.some(Boolean)&&t.push(n),t}function Ci(e){return Si(e).filter(e=>e.some(Boolean)).filter(e=>!e.join(` `).toLowerCase().includes(`tes award number`)).map(e=>({no:e[0]??``,tesAwardNumber:e[1]??``,studentId:e[2]??``,lastName:e[3]??``,firstName:e[4]??``,middleInitial:e[5]??``,batchId:e[6]??``,status:e[7]??``,semester:e[8]??``,schoolYear:e[9]??``})).filter(e=>e.no&&e.tesAwardNumber&&e.studentId&&e.lastName&&e.firstName&&e.batchId&&e.status&&e.semester&&e.schoolYear)}function wi({adminSession:e,onLogout:t}){let[n,r]=(0,X.useState)(!1),[i,a]=(0,X.useState)(!1),[o,s]=(0,X.useState)(!1),[c,l]=(0,X.useState)(`dashboard`),[u,d]=(0,X.useState)(0),[f,p]=(0,X.useState)(!1),[m,h]=(0,X.useState)(!1),[g,_]=(0,X.useState)(``),[v,y]=(0,X.useState)(``),[b,x]=(0,X.useState)(1),[S,C]=(0,X.useState)(null),[w,T]=(0,X.useState)(``),[E,D]=(0,X.useState)(!1),[O,k]=(0,X.useState)(!1),[A,j]=(0,X.useState)(null),[M,N]=(0,X.useState)(null),[P,F]=(0,X.useState)({email:``,phoneNumber:``}),[I,L]=(0,X.useState)(``),[R,z]=(0,X.useState)(!1),[B,V]=(0,X.useState)(!1),[H,U]=(0,X.useState)(1),[W,G]=(0,X.useState)(``),[K,ee]=(0,X.useState)(!1),[q,te]=(0,X.useState)(!1),[J,Y]=(0,X.useState)(!1),[ne,re]=(0,X.useState)(``),[ie,ae]=(0,X.useState)(``),[oe,se]=(0,X.useState)(``),[ce,le]=(0,X.useState)(``),[ue,de]=(0,X.useState)(1),[fe,pe]=(0,X.useState)(null),[me,he]=(0,X.useState)(`all`),[ge,_e]=(0,X.useState)([]),[ve,ye]=(0,X.useState)(``),[be,xe]=(0,X.useState)(``),[Se,Ce]=(0,X.useState)(!1),[we,Te]=(0,X.useState)(``),[Ee,De]=(0,X.useState)(!1),[Oe,ke]=(0,X.useState)(!1),[Ae,je]=(0,X.useState)(``),[Me,Ne]=(0,X.useState)(``),[Pe,Fe]=(0,X.useState)(``),[Ie,Le]=(0,X.useState)(!1),[Re,ze]=(0,X.useState)(!1),[Be,Ve]=(0,X.useState)(``),[He,Ue]=(0,X.useState)(null),[We,Ge]=(0,X.useState)(!1),[Ke,qe]=(0,X.useState)(!1),[Je,Ye]=(0,X.useState)(!1),[Xe,Ze]=(0,X.useState)(0),[Qe,$e]=(0,X.useState)(null),[et,tt]=(0,X.useState)(null),[nt,rt]=(0,X.useState)(null),[it,at]=(0,X.useState)(``),[ot,st]=(0,X.useState)(``),[ct,lt]=(0,X.useState)(!1),[ut,dt]=(0,X.useState)(!1),[ft,pt]=(0,X.useState)(!1),[mt,ht]=(0,X.useState)(1),[gt,_t]=(0,X.useState)([]),[vt,yt]=(0,X.useState)(null),[bt,xt]=(0,X.useState)(null),[St,Ct]=(0,X.useState)(``),[wt,Tt]=(0,X.useState)(!1),[Et,Dt]=(0,X.useState)(``),[Ot,kt]=(0,X.useState)(``),[At,jt]=(0,X.useState)(``),[Mt,Nt]=(0,X.useState)(``),[Pt,Ft]=(0,X.useState)(0),[It,Lt]=(0,X.useState)(1),[Rt,zt]=(0,X.useState)(1),[Bt,Vt]=(0,X.useState)(1),[Ht,Ut]=(0,X.useState)(1),[Wt,Gt]=(0,X.useState)(``),[Kt,qt]=(0,X.useState)(!1),[Jt,Yt]=(0,X.useState)(!1),[Xt,Zt]=(0,X.useState)(!1),[Qt,$t]=(0,X.useState)(0),[en,tn]=(0,X.useState)(null),[nn,rn]=(0,X.useState)(1),[an,on]=(0,X.useState)(1),sn=Cn(Z.quickActions.list,e?.sessionToken?{sessionToken:e.sessionToken}:`skip`),cn=wn(Z.support.logout),ln=Cn(Z.activityLogs.list),un=Cn(Z.archive.list,m?{}:`skip`),dn=Cn(Z.allinfo.list,{refreshVersion:Pt}),fn=Cn(Z.applicants.list,e?.sessionToken?{sessionToken:e.sessionToken}:`skip`),pn=Cn(Z.applicantPortal.get),mn=Cn(Z.adminAuth.listStudentAccounts),hn=wn(Z.applicantPortal.setReceivingApplicants),gn=wn(Z.allinfo.bulkCreate),_n=wn(Z.allinfo.update),vn=wn(Z.allinfo.deleteMany),yn=wn(Z.activityLogs.clearAll),bn=wn(Z.archive.restore),xn=Tn(Z.archive.remove),Sn=Tn(Z.allinfo.deleteSchoolIdFilesByBatch),En=Tn(Z.applicants.deleteAllByCourse),Dn=Tn(Z.applicants.exportCourseApplicants),On=wn(Z.adminAuth.updateStudentAccount),kn=wn(Z.adminAuth.deleteStudentAccount),An=f||m||E||O||!!A||!!M||K||q||J||Se||!!we||Kt||Xt||Jt||!!en||Ee||Oe||Ie||!!et||Re||!!Be||!!He||We||Ke||Je||!!Qe||!!vt,jn=async()=>{try{e?.sessionToken&&await cn({sessionToken:e.sessionToken})}catch{}finally{t?.()}},Mn=(0,X.useMemo)(()=>dn??[],[dn]),Nn=sn??[],Pn=ln??[],Fn=(0,X.useMemo)(()=>un??[],[un]),In=(0,X.useMemo)(()=>fn??[],[fn]),Ln=(0,X.useMemo)(()=>mn??[],[mn]),Rn=pn?.applicationYear,zn=String(Rn??new Date().getFullYear()),Bn=Cn(Z.applicants.getCourseCounts,J&&e?.sessionToken?{sessionToken:e.sessionToken,applicationYear:zn}:`skip`),Vn=Qr.filter(e=>e.toLowerCase().includes(ve.trim().toLowerCase())),Hn=Bn?me===`all`?Bn.totalCount:ge.reduce((e,t)=>e+(Bn.counts?.[t]??0),0):0,Un=(0,X.useMemo)(()=>Array.from(new Set(In.map(e=>li(e)).filter(Boolean))).sort((e,t)=>e.localeCompare(t)),[In]),Wn=(0,X.useMemo)(()=>Array.from(new Set(In.map(e=>ui(e)).filter(Boolean))).sort((e,t)=>t.localeCompare(e,void 0,{numeric:!0})),[In]),Gn=(0,X.useMemo)(()=>Array.from(new Set(In.map(e=>String(e.status??``).trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t)),[In]),Kn=(0,X.useMemo)(()=>{let e=ne.trim().toLowerCase();return In.filter(t=>{let n=[t.firstName,t.middleName,t.lastName,t.extensionName].filter(Boolean).join(` `),r=[t.studentId,n,t.course,t.year,t.applicationYear,t.emailAddress,t.mobileNumber,t.status].map(e=>String(e??``).toLowerCase()).join(` `);return(!e||r.includes(e))&&(!ie||li(t)===ie)&&(!oe||ui(t)===oe)&&(!ce||String(t.status??``).trim()===ce)})},[In,ne,ie,oe,ce]),qn=Math.max(1,Math.ceil(Kn.length/Yr)),Jn=Math.min(ue,qn),Yn=(Jn-1)*Yr,Zn=Kn.slice(Yn,Yn+Yr),Qn=fi(Jn,qn),$n=Kn.length?Yn+1:0,er=Yn+Zn.length,tr=(0,X.useMemo)(()=>{let e=new Date().getFullYear(),t=new Set([String(e-1),String(e),String(e+1),String(e+2),String(e+3),String(e+4),String(e+5)]);return Rn&&t.add(String(Rn)),In.forEach(e=>{let n=ui(e);n&&t.add(n)}),Array.from(t).sort()},[In,Rn]),nr=Math.max(1,Math.ceil(tr.length/Xr)),rr=Math.min(an,nr),ir=(rr-1)*Xr,ar=tr.slice(ir,ir+Xr),or=fi(rr,nr),sr=tr.length===0?0:ir+1,cr=ir+ar.length,lr=(0,X.useMemo)(()=>Array.from(new Set(Mn.map(e=>String(e.batchId??``).trim()).filter(Boolean))).sort(),[Mn]),ur=(0,X.useMemo)(()=>Array.from(new Set(Mn.map(e=>String(e.schoolYear??``).trim()).filter(Boolean))).sort((e,t)=>{let n=Number(e.match(/\d{4}/)?.[0]??0);return Number(t.match(/\d{4}/)?.[0]??0)-n||t.localeCompare(e)}),[Mn]),dr=(0,X.useMemo)(()=>lr.map(e=>{let t=Mn.filter(t=>String(t.batchId??``).trim()===e),n=new Set(t.map(e=>String(e.studentId??``).trim().toLowerCase()));return{accountCount:Ln.filter(e=>n.has(String(e.schoolId??``).trim().toLowerCase())).length,batchId:e,recordCount:t.length}}),[lr,Mn,Ln]),fr=(0,X.useMemo)(()=>Ae?Mn.filter(e=>String(e.batchId??``).trim()===Ae):[],[Mn,Ae]),pr=(0,X.useMemo)(()=>{let e=new Map;return fr.forEach(t=>{let n=String(t.schoolYear??``).trim();if(!n)return;let r=e.get(n)??[];r.push(t),e.set(n,r)}),Array.from(e,([e,t])=>{let n=new Set(t.map(e=>String(e.studentId??``).trim().toLowerCase()));return{accountCount:Ln.filter(e=>n.has(String(e.schoolId??``).trim().toLowerCase())).length,recordCount:t.length,schoolYear:e}}).sort((e,t)=>t.schoolYear.localeCompare(e.schoolYear))},[fr,Ln]),mr=(0,X.useMemo)(()=>Me?fr.filter(e=>String(e.schoolYear??``).trim()===Me):[],[fr,Me]),hr=(0,X.useMemo)(()=>{let e=new Map;return mr.forEach(t=>{let n=String(t.semester??``).trim();if(!n)return;let r=e.get(n)??[];r.push(t),e.set(n,r)}),Array.from(e,([e,t])=>{let n=new Set(t.map(e=>String(e.studentId??``).trim().toLowerCase()));return{accountCount:Ln.filter(e=>n.has(String(e.schoolId??``).trim().toLowerCase())).length,recordCount:t.length,semester:e}}).sort((e,t)=>e.semester.localeCompare(t.semester))},[mr,Ln]),_r=hr.find(e=>e.semester===Pe),vr=(0,X.useMemo)(()=>{let e=we.trim().toLowerCase();return e?In.filter(t=>ui(t)===zn&&li(t).toLowerCase()===e):[]},[zn,In,we]),yr=(0,X.useMemo)(()=>{let e=Wt.trim().toLowerCase();return e?vr.filter(t=>{let n=[t.firstName,t.middleName,t.lastName,t.extensionName].filter(Boolean).join(` `);return[t.studentId,n,t.gender,t.birthDate,t.year,t.address,t.mobileNumber,t.emailAddress,t.status,t.psaFileName,t.schoolIdFileName,t.corFileName,t.pwdIdFileName,t.fourPsFileName,ri(t.submittedAt)].map(e=>String(e??``).toLowerCase()).join(` `).includes(e)}):vr},[Wt,vr]),xr=Math.max(1,Math.ceil(yr.length/Jr)),Sr=Math.min(nn,xr),Cr=(Sr-1)*Jr,wr=yr.slice(Cr,Cr+Jr),Tr=fi(Sr,xr),Er=yr.length===0?0:Cr+1,Dr=Cr+wr.length,Or=(0,X.useMemo)(()=>{let e=Et.trim().toLowerCase(),t=Ot.trim().toLowerCase(),n=At.trim().toLowerCase(),r=Mt.trim().toLowerCase();return Mn.filter(i=>{let a=[i.no,i.tesAwardNumber,i.studentId,i.lastName,i.firstName,i.middleInitial,i.batchId,i.status,i.semester,i.schoolYear].map(e=>String(e??``).toLowerCase()).join(` `),o=e?a.includes(e):!0,s=t?String(i.batchId??``).trim().toLowerCase()===t:!0,c=n?String(i.semester??``).trim().toLowerCase()===n:!0,l=r?String(i.schoolYear??``).trim().toLowerCase()===r:!0;return o&&s&&c&&l})},[Mn,Et,Ot,At,Mt]),kr=Math.max(1,Math.ceil(Or.length/Vr)),Ar=Math.min(mt,kr),jr=(Ar-1)*Vr,Mr=fi(Ar,kr),Nr=Or.slice(jr,jr+Vr),Fr=Or.filter(e=>e.frontIdUrl),Ir=(0,X.useMemo)(()=>Array.from(new Set(Fr.map(e=>String(e.schoolYear??``).trim()).filter(Boolean))).sort((e,t)=>t.localeCompare(e)),[Fr]),Lr=(0,X.useMemo)(()=>Ir.map(e=>({fileCount:Fr.filter(t=>String(t.schoolYear??``).trim()===e).length,schoolYear:e})),[Fr,Ir]),Rr=(0,X.useMemo)(()=>{if(!Be)return[];let e=new Map;return Fr.forEach(t=>{if(String(t.schoolYear??``).trim()!==Be)return;let n=String(t.batchId??``).trim();if(!n)return;let r=e.get(n)??{batchId:n,fileCount:0};r.fileCount+=1,e.set(n,r)}),Array.from(e.values()).sort((e,t)=>e.batchId.localeCompare(t.batchId))},[Fr,Be]),zr=Or.length===0?0:jr+1,Zr=jr+Nr.length,ii=(0,X.useMemo)(()=>{let e=W.trim().toLowerCase();return e?Ln.filter(t=>[t.schoolId,t.email,t.phoneNumber,t.facebookProfileUrl].map(e=>String(e??``).toLowerCase()).join(` `).includes(e)):Ln},[Ln,W]),pi=Math.max(1,Math.ceil(ii.length/Hr)),hi=Math.min(H,pi),gi=(hi-1)*Hr,_i=ii.slice(gi,gi+Hr),vi=fi(hi,pi),yi=ii.length===0?0:gi+1,$=gi+_i.length,xi=Math.max(1,Math.ceil(Pn.length/Ur)),Si=Math.min(It,xi),wi=(Si-1)*Ur,Ei=Pn.slice(wi,wi+Ur),Di=Pn.length===0?0:wi+1,Oi=wi+Ei.length,ki=(0,X.useMemo)(()=>Array.from(new Set(Fn.map(e=>e.sourceTable))).sort(),[Fn]),Ai=(0,X.useMemo)(()=>{let e=g.trim().toLowerCase();return Fn.filter(t=>{let n=v?t.sourceTable===v:!0,r=[t.sourceTable,t.sourceLabel,t.sourceId,t.deletionKind,$r(t.deletedAt)].map(e=>String(e??``).toLowerCase()).join(` `);return n&&(!e||r.includes(e))})},[Fn,g,v]),ji=Math.max(1,Math.ceil(Ai.length/Wr)),Mi=Math.min(b,ji),Ni=(Mi-1)*Wr,Pi=Ai.slice(Ni,Ni+Wr),Fi=Ai.length===0?0:Ni+1,Ii=Ni+Pi.length,Li=Math.max(1,Math.ceil(dr.length/Gr)),Ri=Math.min(Rt,Li),zi=(Ri-1)*Gr,Bi=dr.slice(zi,zi+Gr),Vi=dr.length===0?0:zi+1,Hi=zi+Bi.length,Ui=Math.max(1,Math.ceil(Lr.length/Kr)),Wi=Math.min(Bt,Ui),Gi=(Wi-1)*Kr,Ki=Lr.slice(Gi,Gi+Kr),qi=Lr.length===0?0:Gi+1,Ji=Gi+Ki.length,Yi=Math.max(1,Math.ceil(Rr.length/qr)),Xi=Math.min(Ht,Yi),Zi=(Xi-1)*qr,Qi=Rr.slice(Zi,Zi+qr),$i=Rr.length===0?0:Zi+1,ea=Zi+Qi.length,ta=e=>{ht(Math.min(Math.max(e,1),kr))},na=e=>{Lt(Math.min(Math.max(e,1),xi))},ra=e=>{x(Math.min(Math.max(e,1),ji))},ia=e=>{zt(Math.min(Math.max(e,1),Li))},aa=e=>{Vt(Math.min(Math.max(e,1),Ui))},oa=e=>{Ut(Math.min(Math.max(e,1),Yi))},sa=e=>{rn(Math.min(Math.max(e,1),xr))},ca=e=>{on(Math.min(Math.max(e,1),nr))},la=()=>{Jt||Xt||(Te(``),Gt(``),rn(1),qt(!1))},ua=e=>{Gt(e.target.value),rn(1)},da=e=>{Ve(e),Ut(1)},fa=()=>{Ke||Je||(ze(!1),Ve(``),Ue(null),Ge(!1),Ut(1))},pa=(e,t)=>{Ue({batchId:e,fileCount:t,schoolYear:Be})},ma=()=>{Ke||Je||(Ue(null),Ge(!1))},ha=e=>{Dt(e.target.value),ht(1)},ga=e=>{kt(e.target.value),ht(1)},_a=e=>{jt(e.target.value),ht(1)},va=e=>{Nt(e.target.value),ht(1)},ya=async(e,t)=>{let n=String(e??``).trim(),r=String(t??``).trim(),i=Fr.filter(e=>String(e.schoolYear??``).trim()===n&&String(e.batchId??``).trim()===r).sort(ci);if(i.length!==0){qe(!0),Ze(0);try{let e=[];for(let[t,n]of i.entries()){try{let r=await mi(n,t);e.push(r)}catch(e){console.warn(e)}Ze(Math.min(90,Math.round((t+1)/i.length*90)))}if(e.length===0)throw Error(`No School ID files could be downloaded for this batch.`);let t=bi(e);Ze(96);let a=URL.createObjectURL(t),o=document.createElement(`a`),s=si(n,`school-year`),c=si(r,`batch`);o.href=a,o.download=`school-id-files-${s}-batch-${c}.zip`,o.rel=`noreferrer`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a),Ze(100),await new Promise(e=>window.setTimeout(e,350)),ze(!1),Ve(``),Ue(null),Ut(1),$e({batchId:r,count:e.length,schoolYear:n,type:`download`})}catch(e){window.alert(e instanceof Error?e.message:`Unable to download School ID files.`)}finally{qe(!1),Ze(0)}}},ba=async()=>{if(He){Ye(!0);try{let e=await Sn({batchId:He.batchId,schoolYear:He.schoolYear});Ge(!1),Ue(null),Ve(``),ze(!1),Ut(1),$e({batchId:He.batchId,count:e.deleted,schoolYear:He.schoolYear,type:`delete`})}catch(e){window.alert(e instanceof Error?e.message:`Unable to delete School ID files.`)}finally{Ye(!1)}}},xa=(e,t,n)=>{if(mn===void 0){window.alert(`Please wait while student account data is loading.`);return}let r=String(e??``).trim(),i=String(t??``).trim(),a=String(n??``).trim(),o=Mn.filter(e=>String(e.batchId??``).trim()===r&&String(e.schoolYear??``).trim()===i&&String(e.semester??``).trim()===a);if(o.length===0){window.alert(`No records found for this batch, School Year, and semester.`);return}let s=new Map(Ln.map(e=>[String(e.schoolId??``).trim().toLowerCase(),e])),c=[[`Batch No.`,`Student ID`,`TES Award Number`,`Last Name`,`First Name`,`MI.`,`School Year`,`Semester`,`Status`,`Email Account`,`Phone No.`,`Current Address`,`Account Status`],...o.map(e=>{let t=s.get(String(e.studentId??``).trim().toLowerCase());return[e.batchId??``,e.studentId??``,e.tesAwardNumber??``,e.lastName??``,e.firstName??``,e.middleInitial??``,e.schoolYear??``,e.semester??``,e.status??``,t?.email??``,t?.phoneNumber??``,t?.currentAddress??``,t?.status??`No student account`]})];ai(`batch-info-${si(r,`batch`)}-${si(i,`school-year`)}-${si(a,`semester`)}.csv`,c),Ia()},Sa=async e=>{if(fn===void 0){window.alert(`Please wait while applicant information is loading.`);return}let t=String(e??``).trim(),n=In.filter(e=>ui(e)===zn&&li(e).toLowerCase()===t.toLowerCase());if(n.length===0){window.alert(`No applicants are available for this course.`);return}Zt(!0),$t(8),await new Promise(e=>window.setTimeout(e,120));let r=di(n,t);$t(72),await new Promise(e=>window.setTimeout(e,120));let i=si(t,`course`);ai(`unifast-applicants-${si(zn,`application-year`)}-${i}.csv`,r),$t(100),await new Promise(e=>window.setTimeout(e,350)),Zt(!1),$t(0),tn({count:n.length,course:t,type:`download`,year:zn})},Ca=async()=>{if(we){Yt(!0);try{let e=await En({applicationYear:zn,course:we});qt(!1),tn({count:e.deleted,course:we,filesDeleted:e.filesDeleted,type:`delete`,year:zn}),Te(``),Gt(``),rn(1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to delete course applicants.`)}finally{Yt(!1)}}},wa=()=>{if(sn===void 0){window.alert(`Please wait while student requests are loading.`);return}if(Nn.length===0){window.alert(`No student requests are available to export.`);return}let e=ri(Date.now()),t=[[`No.`,`Student ID`,`Last Name`,`First Name`,`MI`,`Email Account`,`Question / Request`,`Source`,`Status`,`Submitted At`,`Exported At`],...Nn.map((t,n)=>[n+1,t.studentId??``,t.lastName??``,t.firstName??``,t.middleInitial??``,t.email??``,t.question??``,t.source??``,t.status??``,ri(t.submittedAt),e])];ai(`student-requests-responses-${new Date().toISOString().slice(0,10)}.csv`,t)},Ta=async()=>{if(!(ft||Pn.length===0)&&window.confirm(`Move all ${Pn.length} visible activity logs to the archive?`)){pt(!0);try{await yn({}),Lt(1)}catch(e){window.alert(e instanceof Error?e.message:`Unable to clear activity logs.`)}finally{pt(!1)}}},Ea=async e=>{if(!S&&window.confirm(`Restore ${e.sourceLabel||e.sourceTable} to ${e.sourceTable}?`)){C(e._id),T(``);try{await bn({id:e._id}),T(`${e.sourceLabel||`Item`} restored successfully.`)}catch(e){T(e instanceof Error?e.message:`Unable to restore this item.`)}finally{C(null)}}},Da=async e=>{if(!S&&window.confirm(`Permanently delete ${e.sourceLabel||e.sourceTable} from the archive? This cannot be undone.`)){C(e._id),T(``);try{await xn({id:e._id}),T(`${e.sourceLabel||`Item`} permanently deleted.`)}catch(e){T(e instanceof Error?e.message:`Unable to permanently delete this item.`)}finally{C(null)}}},Oa=async(t,n)=>{try{let r=await hn({sessionToken:e?.sessionToken,isReceivingApplicants:t,...n?{applicationYear:n}:{}});r.success||window.alert(r.message||`Unable to update applicant portal status.`)}catch(e){window.alert(e instanceof Error?e.message:`Unable to update applicant portal status.`)}},ka=async e=>{await Oa(!0,e),Ce(!1),on(1)},Aa=()=>{ee(!1),te(!1),Y(!1),Ce(!1),on(1),Te(``),Gt(``),rn(1),pe(null)},ja=()=>{he(`all`),_e([]),ye(``),xe(``),Y(!0)},Ma=()=>{Xt||(Y(!1),xe(``))},Na=e=>{_e(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),xe(``)},Pa=async()=>{if(Xt)return;if(Bn===void 0){xe(`Applicant counts are still loading. Please try again in a moment.`);return}let t=me===`all`?Qr:Qr.filter(e=>ge.includes(e));if(!t.length){xe(`Select at least one course to download applicant records.`);return}if(Hn===0){xe(`No applicant records match the selected courses and application year.`);return}xe(``),Zt(!0),$t(12);try{let n=await Dn({sessionToken:e?.sessionToken,applicationYear:zn,courses:t});if(!Array.isArray(n)||n.length===0)throw Error(`No applicant records matched the selected courses and application year.`);$t(76);let r=di(n);if(!ai(`unifast-applicants-${si(zn,`application-year`)}-${me===`all`?`all-courses`:`selected-courses`}.csv`,r))throw Error(`The applicant CSV file could not be generated.`);$t(100),await new Promise(e=>window.setTimeout(e,220)),Y(!1),tn({count:n.length,course:me===`all`?`All courses`:`${t.length} selected courses`,type:`download`,year:zn})}catch(e){xe(e instanceof Error?e.message:`Unable to download applicant records. Please try again.`)}finally{Zt(!1),$t(0)}},Fa=()=>{zt(1),je(``),Ne(``),Fe(``),ke(!0)},Ia=()=>{ke(!1),je(``),Ne(``),Fe(``)},La=()=>{zt(1),st(``),Le(!0)},Ra=()=>{ut||(Le(!1),tt(null))},za=()=>{D(!0)},Ba=()=>{rt(null),at(``),st(``),lt(!1),De(!0)},Va=()=>{ct||(De(!1),rt(null),at(``),lt(!1))},Ha=()=>{wt||(yt(null),xt(null),Ct(``))},Ua=e=>{yt(e),xt({no:e.no??``,tesAwardNumber:e.tesAwardNumber??``,studentId:e.studentId??``,lastName:e.lastName??``,firstName:e.firstName??``,middleInitial:e.middleInitial??``,batchId:e.batchId??``,status:e.status??``,semester:e.semester??``,schoolYear:e.schoolYear??``}),Ct(``)},Wa=e=>t=>{Ct(``),xt(n=>({...n,[e]:t.target.value}))},Ga=async e=>{if(e.preventDefault(),!(!vt||!bt)){if([`no`,`tesAwardNumber`,`studentId`,`lastName`,`firstName`,`batchId`,`status`,`semester`,`schoolYear`].some(e=>!String(bt[e]??``).trim())){Ct(`Please complete all required fields before saving.`);return}Tt(!0),Ct(`Saving changes...`);try{await _n({id:vt._id,...bt}),Ct(`Record updated successfully.`),yt(null),xt(null)}catch(e){Ct(e instanceof Error?e.message:`Unable to update record.`)}finally{Tt(!1)}}},Ka=e=>{st(``),_t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},qa=async()=>{if(gt.length===0){st(`Please check at least one record before deleting.`);return}if(window.confirm(`Delete ${gt.length} checked record${gt.length===1?``:`s`}?`)){dt(!0),st(`Deleting checked record...`);try{let e=await vn({ids:gt});_t([]),st(`${e?.deleted??gt.length} record${(e?.deleted??gt.length)===1?``:`s`} deleted successfully.`)}catch(e){st(e instanceof Error?e.message:`Unable to delete records.`)}finally{dt(!1)}}},Ja=async()=>{if(!et)return;let e=et.batchId,t=Mn.filter(t=>String(t.batchId??``).trim()===e).map(e=>e._id);if(t.length===0){st(`No records found for this batch.`),tt(null);return}dt(!0),st(`Deleting batch ${e}...`);try{let n=await vn({ids:t});_t(e=>e.filter(e=>!t.includes(e))),st(`${n?.deleted??t.length} record${(n?.deleted??t.length)===1?``:`s`} deleted from batch ${e}.`),tt(null),Le(!1),ht(1)}catch(e){st(e instanceof Error?e.message:`Unable to delete batch records.`)}finally{dt(!1)}},Ya=e=>{let t=e.target.files?.[0]??null;rt(t),at(t?`${t.name} is ready to upload.`:``)},Xa=async e=>{if(e.preventDefault(),!nt){at(`Select a CSV file before uploading.`);return}if(!nt.name.toLowerCase().endsWith(`.csv`)){at(`Please upload the downloaded CSV template file.`);return}lt(!0),at(`Reading file...`);try{let e=Ci(await nt.text());if(e.length===0){at(`No valid rows found. Use the CSV template headers and add record values.`);return}let t=await gn({records:e});at(`${t.inserted} record${t.inserted===1?``:`s`} saved to allinfo.`),rt(null)}catch(e){at(e instanceof Error?e.message:`Unable to upload records.`)}finally{lt(!1)}},Za=()=>{U(1),L(``),k(!0)},Qa=e=>{e===`dashboard`||e===`records`?(l(e),requestAnimationFrame(()=>{let t=document.getElementById(e===`records`?`admin-records`:`admin-dashboard`);t?.focus({preventScroll:!0}),t?.scrollIntoView({block:`start`,behavior:`instant`})})):e===`portal`?ee(!0):e===`archive`?(T(``),x(1),h(!0)):e===`logs`?(Lt(1),p(!0)):e===`users`?Za():e===`support`?za():e===`billing`?r(!0):e===`form2`?a(!0):e===`documentation`&&s(!0)},$a=e=>{j(e),F({email:e.email??``,phoneNumber:e.phoneNumber??``}),L(``)},eo=e=>{let{name:t,value:n}=e.target;F(e=>({...e,[t]:n}))};return(0,X.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;d(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,X.useEffect)(()=>{if(!An)return;let e=e=>{e.key===`Escape`&&(p(!1),h(!1),D(!1),k(!1),j(null),N(null),ee(!1),te(!1),Ce(!1),on(1),Te(``),Gt(``),rn(1),De(!1),ke(!1),je(``),Ne(``),Fe(``),Le(!1),tt(null),ze(!1),Ve(``),Ut(1),rt(null),at(``),lt(!1),yt(null))};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[An]),(0,Q.jsxs)(`div`,{className:`admin-page`,children:[(0,Q.jsx)(`style`,{children:Ti}),(0,Q.jsx)(Xn,{activeItem:o?`documentation`:i?`form2`:n?`billing`:E?`support`:O?`users`:m?`archive`:f?`logs`:K||q||Se||we||J?`portal`:c,onNavigate:Qa,onLogout:jn}),(0,Q.jsx)(`main`,{className:`admin-main`,children:(0,Q.jsxs)(`div`,{className:`admin-container`,children:[(0,Q.jsxs)(`section`,{id:`admin-dashboard`,className:`admin-heading`,tabIndex:-1,children:[(0,Q.jsxs)(`div`,{className:`admin-heading__copy`,children:[(0,Q.jsx)(`span`,{className:`admin-eyebrow`,children:`Tertiary Education Subsidy and Tulong Dunong Program`}),(0,Q.jsx)(`h1`,{children:`Grantee Management`})]}),(0,Q.jsxs)(`div`,{className:`admin-heading__actions`,children:[(0,Q.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:lr.length===0,onClick:Fa,title:lr.length===0?`No batches available to export`:`Choose a batch to export student account info`,type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`table_view`}),`Export to CSV Batch Info`]}),(0,Q.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:Fr.length===0,onClick:()=>{Vt(1),ze(!0)},title:Fr.length===0?`No School ID files available to download`:`Choose a School Year to download School ID files`,type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download School ID File`]}),(0,Q.jsxs)(`button`,{className:`admin-button admin-button--primary`,onClick:Ba,type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`add`}),`Add New Record`]}),(0,Q.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:lr.length===0,onClick:La,title:lr.length===0?`No batches available to delete`:`Choose a batch to delete`,type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`}),`Delete Batch`]})]})]}),(0,Q.jsxs)(`section`,{className:`admin-stats-grid`,"aria-label":`Grantee summary`,children:[(0,Q.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,Q.jsx)(`span`,{children:`Total Records`}),(0,Q.jsx)(`strong`,{children:Mn.length})]}),(0,Q.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,Q.jsx)(`span`,{children:`Filtered Results`}),(0,Q.jsx)(`strong`,{children:Or.length})]}),(0,Q.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,Q.jsx)(`span`,{children:`Checked Records`}),(0,Q.jsx)(`strong`,{children:gt.length})]}),(0,Q.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,Q.jsx)(`span`,{children:`Student Requests`}),(0,Q.jsx)(`strong`,{children:Nn.length})]})]}),(0,Q.jsxs)(`section`,{className:`admin-filter-panel`,"aria-label":`Grantee filters`,children:[(0,Q.jsxs)(`div`,{className:`admin-search-field`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,Q.jsx)(`input`,{"aria-label":`Search grantee records`,placeholder:`Search by Student ID, award number, status, or semester...`,type:`text`,value:Et,onChange:ha})]}),(0,Q.jsxs)(`select`,{"aria-label":`Filter by batch`,value:Ot,onChange:ga,children:[(0,Q.jsx)(`option`,{value:``,children:`All Batches`}),lr.map(e=>(0,Q.jsx)(`option`,{value:e,children:e},e))]}),(0,Q.jsxs)(`select`,{"aria-label":`Filter by semester`,value:At,onChange:_a,children:[(0,Q.jsx)(`option`,{value:``,children:`All Semesters`}),(0,Q.jsx)(`option`,{value:`1st Semester`,children:`1st Semester`}),(0,Q.jsx)(`option`,{value:`2nd Semester`,children:`2nd Semester`})]}),(0,Q.jsxs)(`select`,{"aria-label":`Filter by school year`,value:Mt,onChange:va,children:[(0,Q.jsx)(`option`,{value:``,children:`All School Years`}),ur.map(e=>(0,Q.jsx)(`option`,{value:e,children:e},e))]}),(0,Q.jsx)(`button`,{className:`admin-filter-button`,type:`button`,"aria-label":`Refresh records`,title:`Refresh records`,onClick:()=>Ft(e=>e+1),children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`refresh`})})]}),(0,Q.jsxs)(`section`,{id:`admin-records`,className:`admin-table-card`,"aria-label":`TDP grantee records`,tabIndex:-1,children:[(0,Q.jsx)(`div`,{className:`admin-table-header`,children:(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`h2`,{children:`Grantee Records`}),(0,Q.jsx)(`p`,{children:`Review, check, edit, or delete selected records.`})]})}),(0,Q.jsx)(`div`,{className:`admin-table-scroll`,children:(0,Q.jsxs)(`table`,{children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:`No.`}),(0,Q.jsx)(`th`,{children:`TES Award Number`}),(0,Q.jsx)(`th`,{children:`Student ID`}),(0,Q.jsx)(`th`,{children:`TES Details`}),(0,Q.jsx)(`th`,{children:`Last Name`}),(0,Q.jsx)(`th`,{children:`First Name`}),(0,Q.jsx)(`th`,{children:`MI.`}),(0,Q.jsx)(`th`,{children:`Batch No.`}),(0,Q.jsx)(`th`,{children:`Status`}),(0,Q.jsx)(`th`,{children:`Semester`}),(0,Q.jsx)(`th`,{children:`School Year`}),(0,Q.jsx)(`th`,{children:`School ID File`}),(0,Q.jsx)(`th`,{children:`Actions`})]})}),(0,Q.jsxs)(`tbody`,{children:[dn===void 0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`Loading grantee records...`})}),dn?.length===0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No grantee records yet. Upload a CSV file to add records.`})}),dn&&dn.length>0&&Or.length===0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No matching record found.`})}),Nr.map((e,t)=>(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`td`,{"data-label":`No.`,children:jr+t+1}),(0,Q.jsx)(`td`,{className:`admin-award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,Q.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,Q.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`—`}),(0,Q.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`—`}),(0,Q.jsx)(`td`,{"data-label":`MI.`,children:e.middleInitial||`—`}),(0,Q.jsx)(`td`,{className:`admin-batch-cell`,"data-label":`Batch No.`,children:e.batchId}),(0,Q.jsx)(`td`,{"data-label":`Status`,children:(0,Q.jsx)(ti,{status:e.status,tone:ni(e.status)})}),(0,Q.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,Q.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`}),(0,Q.jsx)(`td`,{"data-label":`School ID File`,children:e.frontIdUrl?(0,Q.jsx)(`a`,{className:`admin-file-link`,href:e.frontIdUrl,rel:`noreferrer`,target:`_blank`,children:`View file`}):(0,Q.jsx)(`span`,{className:`admin-file-empty`,children:`No file`})}),(0,Q.jsx)(`td`,{"data-label":`Actions`,children:(0,Q.jsxs)(`div`,{className:`admin-row-actions`,children:[(0,Q.jsx)(`button`,{className:`admin-edit-button`,type:`button`,onClick:()=>Ua(e),children:`Edit`}),(0,Q.jsxs)(`label`,{className:`admin-checkbox-control`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:gt.includes(e._id),onChange:()=>Ka(e._id)}),(0,Q.jsx)(`span`,{children:`Check`})]}),(0,Q.jsx)(`button`,{className:`admin-delete-button`,type:`button`,disabled:ut||!gt.includes(e._id),onClick:qa,children:`Delete`})]})})]},e._id))]})]})}),(0,Q.jsxs)(`div`,{className:`admin-pagination`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsx)(`strong`,{children:zr}),` to `,(0,Q.jsx)(`strong`,{children:Zr}),` of`,` `,(0,Q.jsx)(`strong`,{children:Or.length}),` results`]}),ot&&(0,Q.jsx)(`p`,{className:`admin-delete-message`,children:ot})]}),(0,Q.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,Q.jsx)(`button`,{type:`button`,disabled:Ar===1||Or.length===0,"aria-label":`Previous page`,onClick:()=>ta(Ar-1),children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Mr.map(e=>{if(typeof e==`string`)return(0,Q.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e);let t=e;return(0,Q.jsx)(`button`,{"aria-current":Ar===t?`page`:void 0,className:Ar===t?`admin-page-button--active`:void 0,disabled:Or.length===0,onClick:()=>ta(t),type:`button`,children:t},t)}),(0,Q.jsx)(`button`,{type:`button`,disabled:Ar===kr||Or.length===0,"aria-label":`Next page`,onClick:()=>ta(Ar+1),children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]})}),n&&(0,Q.jsx)(gr,{sessionToken:e?.sessionToken,onClose:()=>r(!1)}),i&&(0,Q.jsx)(br,{sessionToken:e?.sessionToken,onClose:()=>a(!1),onOpenBilling:()=>{a(!1),r(!0)}}),o&&(0,Q.jsx)(Pr,{sessionToken:e?.sessionToken,onClose:()=>s(!1)}),f&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-logs-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close logs modal`,className:`admin-modal-backdrop`,onClick:()=>p(!1),type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Activity Logs`}),(0,Q.jsx)(`h2`,{id:`admin-logs-title`,children:`System Activity Records`}),(0,Q.jsx)(`p`,{children:`Review recent uploads, edits, deletes, student updates, and page actions.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close logs`,className:`admin-modal-close`,onClick:()=>p(!1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-logs-toolbar`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:`Log Management`}),(0,Q.jsx)(`strong`,{children:`Move all system activity records to the archive.`})]}),(0,Q.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:ln===void 0||Pn.length===0||ft,onClick:Ta,type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_sweep`}),ft?`Clearing...`:`Clear All Logs`]})]}),(0,Q.jsx)(`div`,{className:`admin-logs-table-wrap`,children:(0,Q.jsxs)(`table`,{className:`admin-logs-table`,children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:`Date & Time`}),(0,Q.jsx)(`th`,{children:`Action`}),(0,Q.jsx)(`th`,{children:`Actor`}),(0,Q.jsx)(`th`,{children:`Target`}),(0,Q.jsx)(`th`,{children:`Summary`})]})}),(0,Q.jsxs)(`tbody`,{children:[ln===void 0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`Loading activity logs...`})}),ln&&Pn.length===0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`No activity logs recorded yet.`})}),Ei.map(e=>(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`td`,{"data-label":`Date & Time`,children:$r(e.createdAt)}),(0,Q.jsx)(`td`,{"data-label":`Action`,children:(0,Q.jsx)(`span`,{className:`admin-log-action`,children:e.action})}),(0,Q.jsxs)(`td`,{"data-label":`Actor`,children:[(0,Q.jsx)(`strong`,{children:e.actorName||e.actorId||e.actorRole}),(0,Q.jsx)(`span`,{children:e.actorRole})]}),(0,Q.jsxs)(`td`,{"data-label":`Target`,children:[(0,Q.jsx)(`strong`,{children:e.targetLabel||e.targetType}),(0,Q.jsx)(`span`,{children:e.targetType})]}),(0,Q.jsx)(`td`,{"data-label":`Summary`,children:e.summary})]},e._id))]})]})}),(0,Q.jsxs)(`div`,{className:`admin-pagination admin-logs-pagination`,children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsx)(`strong`,{children:Di}),` to `,(0,Q.jsx)(`strong`,{children:Oi}),` of`,` `,(0,Q.jsx)(`strong`,{children:Pn.length}),` logs`]}),(0,Q.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,Q.jsx)(`button`,{type:`button`,disabled:Si===1||Pn.length===0,"aria-label":`Previous logs page`,onClick:()=>na(Si-1),children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:xi},(e,t)=>{let n=t+1;return(0,Q.jsx)(`button`,{className:Si===n?`admin-page-button--active`:void 0,disabled:Pn.length===0,onClick:()=>na(n),type:`button`,children:n},n)}),(0,Q.jsx)(`button`,{type:`button`,disabled:Si===xi||Pn.length===0,"aria-label":`Next logs page`,onClick:()=>na(Si+1),children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),m&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-archive-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close archive modal`,className:`admin-modal-backdrop`,onClick:()=>h(!1),type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--archive`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Archive`}),(0,Q.jsx)(`h2`,{id:`admin-archive-title`,children:`Deleted Records`}),(0,Q.jsx)(`p`,{children:`Search deleted data, restore it to its original table, or delete it permanently.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close archive`,className:`admin-modal-close`,disabled:!!S,onClick:()=>h(!1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-archive-toolbar`,children:[(0,Q.jsxs)(`label`,{className:`admin-archive-search`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,Q.jsx)(`input`,{onChange:e=>{_(e.target.value),x(1)},placeholder:`Search table, deleted item, ID, or date...`,type:`search`,value:g})]}),(0,Q.jsxs)(`select`,{"aria-label":`Filter archive by table`,onChange:e=>{y(e.target.value),x(1)},value:v,children:[(0,Q.jsx)(`option`,{value:``,children:`All tables`}),ki.map(e=>(0,Q.jsx)(`option`,{value:e,children:e},e))]})]}),w&&(0,Q.jsx)(`p`,{className:`admin-archive-message`,children:w}),(0,Q.jsx)(`div`,{className:`admin-logs-table-wrap admin-archive-table-wrap`,children:(0,Q.jsxs)(`table`,{className:`admin-logs-table admin-archive-table`,children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:`Table`}),(0,Q.jsx)(`th`,{children:`Deleted Item`}),(0,Q.jsx)(`th`,{children:`Deletion Type`}),(0,Q.jsx)(`th`,{children:`Date & Time Deleted`}),(0,Q.jsx)(`th`,{children:`Actions`})]})}),(0,Q.jsxs)(`tbody`,{children:[un===void 0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`Loading archive...`})}),un&&Ai.length===0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:Fn.length===0?`No deleted records in the archive.`:`No archived records match your filters.`})}),Pi.map(e=>(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`td`,{"data-label":`Table`,children:(0,Q.jsx)(`span`,{className:`admin-archive-table-name`,children:e.sourceTable})}),(0,Q.jsxs)(`td`,{"data-label":`Deleted Item`,children:[(0,Q.jsx)(`strong`,{children:e.sourceLabel||e.sourceId}),(0,Q.jsx)(`span`,{children:e.sourceId})]}),(0,Q.jsx)(`td`,{"data-label":`Deletion Type`,children:e.deletionKind===`fields`?`File data`:`Full record`}),(0,Q.jsx)(`td`,{"data-label":`Date & Time Deleted`,children:$r(e.deletedAt)}),(0,Q.jsx)(`td`,{"data-label":`Actions`,children:(0,Q.jsxs)(`div`,{className:`admin-archive-actions`,children:[(0,Q.jsxs)(`button`,{className:`admin-archive-action admin-archive-action--restore`,disabled:!!S,onClick:()=>Ea(e),type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`restore`}),S===e._id?`Working...`:`Restore`]}),(0,Q.jsxs)(`button`,{className:`admin-archive-action admin-archive-action--delete`,disabled:!!S,onClick:()=>Da(e),type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),`Delete`]})]})})]},e._id))]})]})}),(0,Q.jsxs)(`div`,{className:`admin-pagination admin-logs-pagination`,children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsx)(`strong`,{children:Fi}),` to`,` `,(0,Q.jsx)(`strong`,{children:Ii}),` of`,` `,(0,Q.jsx)(`strong`,{children:Ai.length}),` archived items`]}),(0,Q.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,Q.jsx)(`button`,{"aria-label":`Previous archive page`,disabled:Mi===1||Ai.length===0,onClick:()=>ra(Mi-1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:ji},(e,t)=>t+1).map(e=>(0,Q.jsx)(`button`,{className:Mi===e?`admin-page-button--active`:void 0,disabled:Ai.length===0,onClick:()=>ra(e),type:`button`,children:e},e)),(0,Q.jsx)(`button`,{"aria-label":`Next archive page`,disabled:Mi===ji||Ai.length===0,onClick:()=>ra(Mi+1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),Oe&&!Ae&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-batch-export-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close batch export modal`,className:`admin-modal-backdrop`,onClick:Ia,type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Batch CSV Export`}),(0,Q.jsx)(`h2`,{id:`admin-batch-export-title`,children:`Choose Batch`}),(0,Q.jsx)(`p`,{children:`Export student account information for a specific batch using allinfo Student IDs.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close batch export`,className:`admin-modal-close`,onClick:Ia,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsx)(`div`,{className:`admin-school-year-downloads`,children:Bi.map(({accountCount:e,batchId:t,recordCount:n})=>(0,Q.jsxs)(`button`,{className:`admin-school-year-button`,disabled:mn===void 0,onClick:()=>je(t),type:`button`,children:[(0,Q.jsx)(`span`,{children:t}),(0,Q.jsx)(`strong`,{children:mn===void 0?`Loading accounts...`:`${n} records / ${e} accounts`})]},t))}),(0,Q.jsxs)(`div`,{className:`admin-pagination admin-batch-export-pagination`,children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsx)(`strong`,{children:Vi}),`-`,(0,Q.jsx)(`strong`,{children:Hi}),` `,`of `,(0,Q.jsx)(`strong`,{children:dr.length}),` batches`]}),(0,Q.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,Q.jsx)(`button`,{disabled:Ri===1,onClick:()=>ia(Ri-1),type:`button`,"aria-label":`Previous batch export page`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Li},(e,t)=>{let n=t+1;return(0,Q.jsx)(`button`,{"aria-current":Ri===n?`page`:void 0,className:Ri===n?`admin-page-button--active`:void 0,onClick:()=>ia(n),type:`button`,children:n},n)}),(0,Q.jsx)(`button`,{disabled:Ri===Li,onClick:()=>ia(Ri+1),type:`button`,"aria-label":`Next batch export page`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,Q.jsx)(`div`,{className:`admin-upload-actions`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:Ia,type:`button`,children:`Cancel`})})]})]}),Oe&&Ae&&!Me&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-batch-export-year-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close School Year selection`,className:`admin-modal-backdrop`,onClick:Ia,type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`p`,{className:`admin-modal-kicker`,children:[`Batch `,Ae]}),(0,Q.jsx)(`h2`,{id:`admin-batch-export-year-title`,children:`Choose School Year`}),(0,Q.jsx)(`p`,{children:`Select the School Year to include in this batch information CSV.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close School Year selection`,className:`admin-modal-close`,onClick:Ia,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-school-year-downloads`,children:[pr.map(({accountCount:e,recordCount:t,schoolYear:n})=>(0,Q.jsxs)(`button`,{className:`admin-school-year-button`,onClick:()=>Ne(n),type:`button`,children:[(0,Q.jsx)(`span`,{children:n}),(0,Q.jsxs)(`strong`,{children:[t,` records / `,e,` accounts`]})]},n)),pr.length===0&&(0,Q.jsx)(`div`,{className:`admin-modal-empty-state`,children:`No School Year information was found for this batch.`})]}),(0,Q.jsx)(`div`,{className:`admin-upload-actions`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>je(``),type:`button`,children:`Back`})})]})]}),Oe&&Ae&&Me&&!Pe&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-batch-export-semester-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close semester selection`,className:`admin-modal-backdrop`,onClick:Ia,type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`p`,{className:`admin-modal-kicker`,children:[`Batch `,Ae,` · `,Me]}),(0,Q.jsx)(`h2`,{id:`admin-batch-export-semester-title`,children:`Choose Semester`}),(0,Q.jsx)(`p`,{children:`Select the semester to include in the downloaded batch information.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close semester selection`,className:`admin-modal-close`,onClick:Ia,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-school-year-downloads`,children:[hr.map(({accountCount:e,recordCount:t,semester:n})=>(0,Q.jsxs)(`button`,{className:`admin-school-year-button`,onClick:()=>Fe(n),type:`button`,children:[(0,Q.jsx)(`span`,{children:n}),(0,Q.jsxs)(`strong`,{children:[t,` records / `,e,` accounts`]})]},n)),hr.length===0&&(0,Q.jsx)(`div`,{className:`admin-modal-empty-state`,children:`No semester information was found for this School Year.`})]}),(0,Q.jsx)(`div`,{className:`admin-upload-actions`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>Ne(``),type:`button`,children:`Back`})})]})]}),Oe&&Ae&&Me&&Pe&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-batch-export-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`alertdialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Cancel batch information download`,className:`admin-modal-backdrop`,onClick:()=>Fe(``),type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,Q.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`})}),(0,Q.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Batch CSV Export`}),(0,Q.jsx)(`h2`,{id:`admin-batch-export-confirm-title`,children:`Download this batch information?`}),(0,Q.jsxs)(`p`,{children:[`Are you sure you want to download Batch `,(0,Q.jsx)(`strong`,{children:Ae}),`, School Year `,(0,Q.jsx)(`strong`,{children:Me}),`,`,` `,(0,Q.jsx)(`strong`,{children:Pe}),`?`]})]}),(0,Q.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`description`}),`The CSV will contain `,_r?.recordCount??0,` records and`,` `,_r?.accountCount??0,` matched student accounts.`]}),(0,Q.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>Fe(``),type:`button`,children:`No, Go Back`}),(0,Q.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>xa(Ae,Me,Pe),type:`button`,children:`Yes, Download CSV`})]})]})]}),Ie&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close batch delete modal`,className:`admin-modal-backdrop`,onClick:Ra,type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Delete Batch`}),(0,Q.jsx)(`h2`,{id:`admin-batch-delete-title`,children:`Choose Batch`}),(0,Q.jsx)(`p`,{children:`Select a batch to delete all information records under that batch.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close batch delete`,className:`admin-modal-close`,disabled:ut,onClick:Ra,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsx)(`div`,{className:`admin-school-year-downloads`,children:Bi.map(({batchId:e,recordCount:t})=>(0,Q.jsxs)(`button`,{className:`admin-school-year-button admin-school-year-button--danger`,disabled:ut,onClick:()=>tt({batchId:e,recordCount:t}),type:`button`,children:[(0,Q.jsx)(`span`,{children:e}),(0,Q.jsxs)(`strong`,{children:[t,` `,t===1?`record`:`records`]})]},e))}),(0,Q.jsxs)(`div`,{className:`admin-pagination admin-batch-export-pagination`,children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsx)(`strong`,{children:Vi}),`-`,(0,Q.jsx)(`strong`,{children:Hi}),` `,`of `,(0,Q.jsx)(`strong`,{children:dr.length}),` batches`]}),(0,Q.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,Q.jsx)(`button`,{"aria-label":`Previous batch delete page`,disabled:Ri===1||ut,onClick:()=>ia(Ri-1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Li},(e,t)=>{let n=t+1;return(0,Q.jsx)(`button`,{"aria-current":Ri===n?`page`:void 0,className:Ri===n?`admin-page-button--active`:void 0,disabled:ut,onClick:()=>ia(n),type:`button`,children:n},n)}),(0,Q.jsx)(`button`,{"aria-label":`Next batch delete page`,disabled:Ri===Li||ut,onClick:()=>ia(Ri+1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,Q.jsx)(`div`,{className:`admin-upload-actions`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ut,onClick:Ra,type:`button`,children:`Cancel`})})]})]}),et&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-backdrop`,onClick:()=>{ut||tt(null)},type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-modal-card--applicant-years`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Confirm Delete`}),(0,Q.jsx)(`h2`,{id:`admin-batch-delete-confirm-title`,children:`Delete this batch information?`}),(0,Q.jsx)(`p`,{children:`Are you sure you want to delete this batch information?`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-close`,disabled:ut,onClick:()=>tt(null),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-confirm-body`,children:[(0,Q.jsx)(`strong`,{children:et.batchId}),(0,Q.jsxs)(`p`,{children:[`This will move `,et.recordCount,` `,et.recordCount===1?`record`:`records`,` from this batch to the archive, where they can be restored.`]})]}),(0,Q.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ut,onClick:()=>tt(null),type:`button`,children:`Cancel`}),(0,Q.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:ut,onClick:Ja,type:`button`,children:ut?`Deleting...`:`Delete Batch`})]})]})]}),K&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-unifast-open-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-backdrop`,onClick:Aa,type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`UNIFAST Portal`}),(0,Q.jsx)(`h2`,{id:`admin-unifast-open-title`,children:`Open the portal?`}),(0,Q.jsx)(`p`,{children:`Do you want to open the portal for receiving applicants information?`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-close`,onClick:Aa,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsx)(`div`,{className:`admin-confirm-body`,children:(0,Q.jsx)(`p`,{children:`Select Yes to view applicants by course and prepare a course download.`})}),(0,Q.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:Aa,type:`button`,children:`No`}),(0,Q.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>{ee(!1),de(1),te(!0)},type:`button`,children:`Yes`})]})]})]}),q&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-unifast-courses-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-receiving-applicants-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-backdrop`,onClick:Aa,type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-receiving-applicants-modal`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header admin-receiving-applicants-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receiving Applicants Information`}),(0,Q.jsx)(`h2`,{id:`admin-unifast-courses-title`,children:`Receiving Applicants Management`}),(0,Q.jsx)(`p`,{children:`Manage applicant records, application availability, and downloads.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-close`,onClick:Aa,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-receiving-applicants-controls`,children:[(0,Q.jsxs)(`div`,{className:`admin-receiving-status`,children:[(0,Q.jsx)(`span`,{className:`admin-receiving-status__indicator${pn?.isReceivingApplicants?` is-open`:` is-closed`}`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:`Landing Portal Status`}),(0,Q.jsx)(`strong`,{children:pn===void 0?`Checking status`:pn.isReceivingApplicants?`OPEN`:`CLOSED`}),(0,Q.jsx)(`small`,{children:pn?.isReceivingApplicants?`Receiving ${zn} applicants`:`Not receiving ${zn} applicants`})]})]}),(0,Q.jsxs)(`div`,{className:`admin-receiving-applicants-actions`,children:[(0,Q.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:pn===void 0||pn?.isReceivingApplicants,onClick:()=>{on(1),Ce(!0)},type:`button`,children:`Receive Applicants`}),(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:pn===void 0||!pn?.isReceivingApplicants,onClick:()=>Oa(!1),type:`button`,children:`Close Applicants`}),(0,Q.jsxs)(`button`,{className:`admin-button admin-button--primary admin-download-applicants-button`,onClick:ja,type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`download`}),`Download Applicants`]})]})]}),(0,Q.jsxs)(`div`,{className:`admin-receiving-applicants-body`,children:[(0,Q.jsxs)(`div`,{className:`admin-receiving-grantee-toolbar`,children:[(0,Q.jsxs)(`label`,{className:`admin-receiving-grantee-search`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`search`}),(0,Q.jsx)(`input`,{"aria-label":`Search applicants`,onChange:e=>{re(e.target.value),de(1)},placeholder:`Search student ID, applicant name, email, or course`,type:`search`,value:ne})]}),(0,Q.jsxs)(`select`,{"aria-label":`Filter applicants by course`,onChange:e=>{ae(e.target.value),de(1)},value:ie,children:[(0,Q.jsx)(`option`,{value:``,children:`All Courses`}),Un.map(e=>(0,Q.jsx)(`option`,{value:e,children:e},e))]}),(0,Q.jsxs)(`select`,{"aria-label":`Filter applicants by application year`,onChange:e=>{se(e.target.value),de(1)},value:oe,children:[(0,Q.jsx)(`option`,{value:``,children:`All Application Years`}),Wn.map(e=>(0,Q.jsx)(`option`,{value:e,children:e},e))]}),(0,Q.jsxs)(`select`,{"aria-label":`Filter applicants by status`,onChange:e=>{le(e.target.value),de(1)},value:ce,children:[(0,Q.jsx)(`option`,{value:``,children:`All Statuses`}),Gn.map(e=>(0,Q.jsx)(`option`,{value:e,children:e},e))]}),(0,Q.jsxs)(`button`,{className:`admin-button admin-button--secondary admin-receiving-reset`,onClick:()=>{re(``),ae(``),se(``),le(``),de(1)},type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`filter_alt_off`}),`Reset Filters`]})]}),(0,Q.jsx)(`div`,{className:`admin-receiving-grantee-table-wrap`,children:(0,Q.jsxs)(`table`,{className:`admin-receiving-grantee-table`,children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:`Student ID`}),(0,Q.jsx)(`th`,{children:`Applicant Name`}),(0,Q.jsx)(`th`,{children:`Course`}),(0,Q.jsx)(`th`,{children:`Year Level`}),(0,Q.jsx)(`th`,{children:`Application Year`}),(0,Q.jsx)(`th`,{children:`Status`}),(0,Q.jsx)(`th`,{children:`Mobile Number`}),(0,Q.jsx)(`th`,{children:`Details`})]})}),(0,Q.jsx)(`tbody`,{children:fn===void 0?(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-receiving-empty`,colSpan:8,children:`Loading applicants...`})}):Kn.length===0?(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-receiving-empty`,colSpan:8,children:In.length?`No applicants match these filters.`:`No applicant records are available yet.`})}):Zn.map(e=>{let t=[e.firstName,e.middleName,e.lastName,e.extensionName].filter(Boolean).join(` `);return(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`td`,{children:e.studentId||`—`}),(0,Q.jsx)(`td`,{children:t||`—`}),(0,Q.jsx)(`td`,{children:li(e)||`—`}),(0,Q.jsx)(`td`,{children:e.year||e.yearLevelCode||`—`}),(0,Q.jsx)(`td`,{children:ui(e)||`—`}),(0,Q.jsx)(`td`,{children:(0,Q.jsx)(ti,{status:e.status,tone:ni(e.status)})}),(0,Q.jsx)(`td`,{children:e.mobileNumber||`—`}),(0,Q.jsx)(`td`,{children:(0,Q.jsxs)(`button`,{"aria-label":`View details for applicant ${e.studentId||``}`,className:`admin-receiving-view-button`,onClick:()=>pe(e),type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`visibility`}),`View`]})})]},e._id)})})]})})]}),(0,Q.jsxs)(`footer`,{className:`admin-receiving-applicants-footer`,children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsxs)(`strong`,{children:[$n,`–`,er]}),` of `,(0,Q.jsx)(`strong`,{children:Kn.length}),` applicants`]}),(0,Q.jsxs)(`div`,{className:`admin-pagination__buttons`,"aria-label":`Applicant records pages`,children:[(0,Q.jsx)(`button`,{"aria-label":`Previous page`,disabled:Jn<=1,onClick:()=>de(e=>Math.max(1,e-1)),type:`button`,children:`‹`}),Qn.map((e,t)=>typeof e==`string`?(0,Q.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`…`},`ellipsis-${t}`):(0,Q.jsx)(`button`,{"aria-current":Jn===e?`page`:void 0,className:Jn===e?`admin-page-button--active`:``,onClick:()=>de(e),type:`button`,children:e},e)),(0,Q.jsx)(`button`,{"aria-label":`Next page`,disabled:Jn>=qn,onClick:()=>de(e=>Math.min(qn,e+1)),type:`button`,children:`›`})]}),(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary admin-receiving-close`,onClick:Aa,type:`button`,children:`Close`})]})]})]}),fe&&(0,Q.jsxs)(`div`,{className:`admin-modal-overlay admin-receiving-details-overlay`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`admin-receiving-details-title`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close applicant details`,className:`admin-modal-backdrop`,onClick:()=>pe(null),type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-receiving-details-card`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Applicant Record`}),(0,Q.jsx)(`h2`,{id:`admin-receiving-details-title`,children:`Applicant Details`}),(0,Q.jsx)(`p`,{children:`Application information submitted to the Scholarship Office.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close applicant details`,className:`admin-modal-close`,onClick:()=>pe(null),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-receiving-details-body`,children:[(0,Q.jsx)(`div`,{className:`admin-receiving-details-grid`,children:[[`Student ID`,fe.studentId],[`Applicant Name`,[fe.firstName,fe.middleName,fe.lastName,fe.extensionName].filter(Boolean).join(` `)],[`Course`,li(fe)],[`Year Level`,fe.year||fe.yearLevelCode],[`Application Year`,ui(fe)],[`Status`,fe.status],[`Gender`,fe.gender],[`Birth Date`,fe.birthDate],[`Mobile Number`,fe.mobileNumber],[`Email Address`,fe.emailAddress],[`Address`,fe.address]].map(([e,t])=>(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:e}),(0,Q.jsx)(`strong`,{children:t||`—`})]},e))}),(0,Q.jsxs)(`section`,{className:`admin-receiving-documents`,"aria-labelledby":`admin-receiving-documents-title`,children:[(0,Q.jsxs)(`div`,{className:`admin-receiving-documents__heading`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`folder_open`}),(0,Q.jsx)(`h3`,{id:`admin-receiving-documents-title`,children:`Submitted ID Files`})]}),(0,Q.jsx)(`p`,{children:`Open a submitted PDF in a new tab.`})]}),(0,Q.jsx)(`div`,{className:`admin-receiving-documents-grid`,children:[{label:`Birth Certificate (PSA)`,url:fe.psaFileUrl,fileName:fe.psaFileName,icon:`picture_as_pdf`},{label:`School ID`,url:fe.schoolIdFileUrl,fileName:fe.schoolIdFileName,icon:`badge`},{label:`COR / Study Load`,url:fe.corFileUrl,fileName:fe.corFileName,icon:`description`},{label:`PWD ID`,url:fe.pwdIdFileUrl,fileName:fe.pwdIdFileName,icon:`accessible`},{label:`4Ps ID`,url:fe.fourPsFileUrl,fileName:fe.fourPsFileName,icon:`family_restroom`}].map(({fileName:e,icon:t,label:n,url:r})=>(0,Q.jsxs)(`div`,{className:`admin-receiving-document-card`,children:[(0,Q.jsx)(`span`,{className:`admin-receiving-document-card__icon material-symbols-outlined`,"aria-hidden":`true`,children:t}),(0,Q.jsxs)(`div`,{className:`admin-receiving-document-card__copy`,children:[(0,Q.jsx)(`strong`,{children:n}),(0,Q.jsx)(`small`,{children:r?e||`PDF document`:`Not submitted`})]}),r?(0,Q.jsxs)(`a`,{className:`admin-receiving-document-view`,href:r,rel:`noopener noreferrer`,target:`_blank`,"aria-label":`View ${n}`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`visibility`}),`View`]}):(0,Q.jsx)(`span`,{className:`admin-receiving-document-missing`,children:`—`})]},n))})]})]}),(0,Q.jsx)(`div`,{className:`admin-receiving-details-footer`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>pe(null),type:`button`,children:`Done`})})]})]}),J&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-applicant-download-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-applicant-download-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close applicant download dialog`,className:`admin-modal-backdrop`,disabled:Xt,onClick:Ma,type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-applicant-download-card`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receiving Applicants Information`}),(0,Q.jsx)(`h2`,{id:`admin-applicant-download-title`,children:`Download Applicant Records`}),(0,Q.jsxs)(`p`,{children:[`Choose all courses or select the courses to include in your `,zn,` CSV.`]})]}),(0,Q.jsx)(`button`,{"aria-label":`Close applicant download dialog`,className:`admin-modal-close`,disabled:Xt,onClick:Ma,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-applicant-download-body`,children:[Bn===void 0?(0,Q.jsxs)(`div`,{className:`admin-applicant-download-loading`,role:`status`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`progress_activity`}),`Loading live applicant counts for `,zn,`...`]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`div`,{className:`admin-applicant-download-options`,children:[(0,Q.jsxs)(`label`,{className:`admin-applicant-download-option${me===`all`?` is-selected`:``}`,children:[(0,Q.jsx)(`input`,{checked:me===`all`,name:`applicant-download-mode`,onChange:()=>{he(`all`),xe(``)},type:`radio`,value:`all`}),(0,Q.jsxs)(`span`,{className:`admin-applicant-download-option__copy`,children:[(0,Q.jsx)(`strong`,{children:`All Courses`}),(0,Q.jsx)(`small`,{children:`Include every course with applicant records.`})]}),(0,Q.jsxs)(`span`,{className:`admin-applicant-download-count`,children:[Bn.totalCount,` records`]})]}),(0,Q.jsxs)(`label`,{className:`admin-applicant-download-option${me===`specific`?` is-selected`:``}`,children:[(0,Q.jsx)(`input`,{checked:me===`specific`,name:`applicant-download-mode`,onChange:()=>{he(`specific`),xe(``)},type:`radio`,value:`specific`}),(0,Q.jsxs)(`span`,{className:`admin-applicant-download-option__copy`,children:[(0,Q.jsx)(`strong`,{children:`Select Specific Courses`}),(0,Q.jsx)(`small`,{children:`Choose one or more courses to include.`})]}),(0,Q.jsxs)(`span`,{className:`admin-applicant-download-count`,children:[ge.length,` selected`]})]})]}),me===`specific`&&(0,Q.jsxs)(`div`,{className:`admin-applicant-course-picker`,children:[(0,Q.jsxs)(`div`,{className:`admin-applicant-course-picker__toolbar`,children:[(0,Q.jsxs)(`label`,{className:`admin-applicant-course-search`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`search`}),(0,Q.jsx)(`input`,{"aria-label":`Search courses`,onChange:e=>ye(e.target.value),placeholder:`Search courses`,type:`search`,value:ve})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`button`,{className:`admin-link-button`,onClick:()=>_e(Qr),type:`button`,children:`Select all`}),(0,Q.jsx)(`button`,{className:`admin-link-button`,onClick:()=>_e([]),type:`button`,children:`Deselect all`})]})]}),(0,Q.jsx)(`div`,{className:`admin-applicant-course-list`,children:Vn.length?Vn.map(e=>(0,Q.jsxs)(`label`,{className:`admin-applicant-course-item`,children:[(0,Q.jsx)(`input`,{checked:ge.includes(e),onChange:()=>Na(e),type:`checkbox`}),(0,Q.jsx)(`span`,{children:e}),(0,Q.jsx)(`strong`,{children:Bn.counts?.[e]??0})]},e)):(0,Q.jsxs)(`p`,{className:`admin-applicant-course-empty`,children:[`No courses match “`,ve,`”.`]})})]}),(0,Q.jsxs)(`div`,{className:`admin-applicant-download-summary`,children:[(0,Q.jsxs)(`span`,{children:[`Matching records for `,zn]}),(0,Q.jsx)(`strong`,{children:Hn.toLocaleString()})]}),Hn===0&&(0,Q.jsxs)(`p`,{className:`admin-applicant-download-empty`,children:[`No applicant records match this selection for `,zn,`.`]})]}),be&&(0,Q.jsx)(`p`,{className:`admin-applicant-download-error`,role:`alert`,children:be})]}),(0,Q.jsxs)(`div`,{className:`admin-applicant-download-footer`,children:[(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Xt,onClick:Ma,type:`button`,children:`Cancel`}),(0,Q.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:Bn===void 0||!Hn||me===`specific`&&!ge.length||Xt,onClick:Pa,type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`download`}),Xt?`Preparing CSV...`:`Download CSV (${Hn.toLocaleString()} Applicants)`]})]})]})]}),Se&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-applicant-year-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-backdrop`,onClick:()=>{Ce(!1),on(1)},type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receive Applicants`}),(0,Q.jsx)(`h2`,{id:`admin-applicant-year-title`,children:`Choose Application Year`}),(0,Q.jsx)(`p`,{children:`Select the year for the new applicant cycle. Counts and downloads will use this year.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-close`,onClick:()=>{Ce(!1),on(1)},type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsx)(`div`,{className:`admin-year-options`,children:ar.map(e=>(0,Q.jsxs)(`button`,{className:`admin-year-option`,onClick:()=>ka(e),type:`button`,children:[(0,Q.jsx)(`span`,{children:e}),(0,Q.jsxs)(`strong`,{children:[In.filter(t=>ui(t)===e).length,` `,`existing applicants`]})]},e))}),(0,Q.jsxs)(`div`,{className:`admin-pagination admin-applicant-year-pagination`,children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsx)(`strong`,{children:sr}),` to`,` `,(0,Q.jsx)(`strong`,{children:cr}),` of`,` `,(0,Q.jsx)(`strong`,{children:tr.length}),` years`]}),(0,Q.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,Q.jsx)(`button`,{"aria-label":`Previous application years page`,disabled:rr===1||tr.length===0,onClick:()=>ca(rr-1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),or.map(e=>typeof e==`number`?(0,Q.jsx)(`button`,{className:rr===e?`admin-page-button--active`:void 0,disabled:tr.length===0,onClick:()=>ca(e),type:`button`,children:e},e):(0,Q.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,Q.jsx)(`button`,{"aria-label":`Next application years page`,disabled:rr===nr||tr.length===0,onClick:()=>ca(rr+1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,Q.jsx)(`div`,{className:`admin-upload-actions`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>{Ce(!1),on(1)},type:`button`,children:`Cancel`})})]})]}),we&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-course-applicants-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-backdrop`,onClick:la,type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-course-applicants-modal`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Course Applicants Information`}),(0,Q.jsx)(`h2`,{id:`admin-course-applicants-title`,children:`Applicants Table`}),(0,Q.jsxs)(`p`,{children:[we,` applicants for `,zn,`.`]})]}),(0,Q.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-close`,onClick:la,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-course-applicants-toolbar`,children:[(0,Q.jsxs)(`div`,{className:`admin-search-field admin-course-applicant-search`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,Q.jsx)(`input`,{"aria-label":`Search course applicants`,placeholder:`Search applicant name, ID, email, mobile, status...`,type:`search`,value:Wt,onChange:ua})]}),(0,Q.jsxs)(`div`,{className:`admin-course-applicants-toolbar__actions`,children:[(0,Q.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:fn===void 0||vr.length===0||Jt||Xt,onClick:()=>qt(!0),type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),`Delete All Applicants`]}),(0,Q.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:fn===void 0||vr.length===0||Jt||Xt,onClick:()=>Sa(we),type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download All Applicants Info`]})]})]}),(0,Q.jsxs)(`div`,{className:`admin-course-applicants-summary`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:`Total Course Applicants`}),(0,Q.jsx)(`strong`,{children:vr.length})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:`Filtered Results`}),(0,Q.jsx)(`strong`,{children:yr.length})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:`Rows Per Page`}),(0,Q.jsx)(`strong`,{children:Jr})]})]}),(0,Q.jsx)(`div`,{className:`admin-course-applicants-table-wrap`,children:(0,Q.jsxs)(`table`,{className:`admin-course-applicants-table`,children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:`No.`}),(0,Q.jsx)(`th`,{children:`Student ID`}),(0,Q.jsx)(`th`,{children:`Applicant Name`}),(0,Q.jsx)(`th`,{children:`Gender`}),(0,Q.jsx)(`th`,{children:`Birth Date`}),(0,Q.jsx)(`th`,{children:`Year`}),(0,Q.jsx)(`th`,{children:`Mobile No.`}),(0,Q.jsx)(`th`,{children:`Email Address`}),(0,Q.jsx)(`th`,{children:`Address`}),(0,Q.jsx)(`th`,{children:`PSA`}),(0,Q.jsx)(`th`,{children:`School ID`}),(0,Q.jsx)(`th`,{children:`COR / Study Load`}),(0,Q.jsx)(`th`,{children:`PWD ID PDF`}),(0,Q.jsx)(`th`,{children:`4Ps ID PDF`}),(0,Q.jsx)(`th`,{children:`Status`}),(0,Q.jsx)(`th`,{children:`Submitted`})]})}),(0,Q.jsxs)(`tbody`,{children:[fn===void 0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-empty-state`,colSpan:17,children:`Loading applicants...`})}),fn!==void 0&&yr.length===0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-empty-state`,colSpan:17,children:`No applicants found for this course.`})}),wr.map((e,t)=>{let n=[e.firstName,e.middleName,e.lastName,e.extensionName].filter(Boolean).join(` `)||`No name`;return(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`td`,{"data-label":`No.`,children:Cr+t+1}),(0,Q.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,Q.jsx)(`td`,{"data-label":`TES Details`,children:(0,Q.jsxs)(`details`,{className:`admin-applicant-details`,children:[(0,Q.jsx)(`summary`,{children:`View details`}),(0,Q.jsxs)(`dl`,{children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`LRN`}),(0,Q.jsx)(`dd`,{children:e.lrn||`Not provided`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`PhilSys ID`}),(0,Q.jsx)(`dd`,{children:e.philSysIdNumber||`Not provided`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`4Ps ID`}),(0,Q.jsx)(`dd`,{children:e.fourPsIdNumber||`Not provided`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Address`}),(0,Q.jsx)(`dd`,{children:[e.streetBarangay,e.cityMunicipality,e.province,e.region,e.zipCode].filter(Boolean).join(`, `)||e.address})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Father`}),(0,Q.jsx)(`dd`,{children:e.fatherInformationUnavailable?`Information unavailable`:[e.fatherFirstName,e.fatherMiddleName,e.fatherLastName].filter(Boolean).join(` `)||`Not provided`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Mother`}),(0,Q.jsx)(`dd`,{children:e.motherInformationUnavailable?`Information unavailable`:[e.motherFirstName,e.motherMiddleName,e.motherLastName].filter(Boolean).join(` `)||`Not provided`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Disability`}),(0,Q.jsx)(`dd`,{children:e.hasDisability?`Yes${e.disabilityType?` — ${e.disabilityType}`:``}`:`No`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Solo parent dependent`}),(0,Q.jsx)(`dd`,{children:e.soloParentDependent===1?`Yes`:`No`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`First generation`}),(0,Q.jsx)(`dd`,{children:e.firstGeneration===1?`Yes`:`No`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Indigenous Peoples member`}),(0,Q.jsx)(`dd`,{children:e.isIndigenous?`Yes${e.indigenousGroup?` — ${e.indigenousGroup}`:``}`:`No`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Classification`}),(0,Q.jsx)(`dd`,{children:e.applicantClassification||`TES Applicant`})]})]})]})}),(0,Q.jsx)(`td`,{className:`admin-applicant-name`,"data-label":`Applicant Name`,children:n}),(0,Q.jsx)(`td`,{"data-label":`Gender`,children:e.gender}),(0,Q.jsx)(`td`,{"data-label":`Birth Date`,children:e.birthDate}),(0,Q.jsx)(`td`,{"data-label":`Year`,children:e.year}),(0,Q.jsx)(`td`,{"data-label":`Mobile No.`,children:e.mobileNumber}),(0,Q.jsx)(`td`,{className:`admin-applicant-email`,"data-label":`Email Address`,children:e.emailAddress}),(0,Q.jsx)(`td`,{className:`admin-applicant-address`,"data-label":`Address`,children:e.address}),(0,Q.jsx)(`td`,{"data-label":`PSA`,children:e.psaFileUrl?(0,Q.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.psaFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`}),`View PSA`]}):(0,Q.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,Q.jsx)(`td`,{"data-label":`School ID`,children:e.schoolIdFileUrl?(0,Q.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.schoolIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`}),`View School ID`]}):(0,Q.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,Q.jsx)(`td`,{"data-label":`COR / Study Load`,children:e.corFileUrl?(0,Q.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.corFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`description`}),`View COR`]}):(0,Q.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,Q.jsx)(`td`,{"data-label":`PWD ID PDF`,children:e.pwdIdFileUrl?(0,Q.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.pwdIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`}),`View PWD ID`]}):(0,Q.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,Q.jsx)(`td`,{"data-label":`4Ps ID PDF`,children:e.fourPsFileUrl?(0,Q.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.fourPsFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`}),`View 4Ps ID`]}):(0,Q.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,Q.jsx)(`td`,{"data-label":`Status`,children:(0,Q.jsx)(ti,{status:e.status,tone:ni(e.status)})}),(0,Q.jsx)(`td`,{"data-label":`Submitted`,children:ri(e.submittedAt)})]},e._id)})]})]})}),(0,Q.jsxs)(`div`,{className:`admin-pagination admin-course-applicants-pagination`,children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsx)(`strong`,{children:Er}),` to`,` `,(0,Q.jsx)(`strong`,{children:Dr}),` of`,` `,(0,Q.jsx)(`strong`,{children:yr.length}),` applicants`]}),(0,Q.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,Q.jsx)(`button`,{"aria-label":`Previous course applicants page`,disabled:Sr===1||yr.length===0,onClick:()=>sa(Sr-1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Tr.map(e=>typeof e==`number`?(0,Q.jsx)(`button`,{className:Sr===e?`admin-page-button--active`:void 0,disabled:yr.length===0,onClick:()=>sa(e),type:`button`,children:e},e):(0,Q.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,Q.jsx)(`button`,{"aria-label":`Next course applicants page`,disabled:Sr===xr||yr.length===0,onClick:()=>sa(Sr+1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,Q.jsx)(`div`,{className:`admin-upload-actions`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:la,type:`button`,children:`Close`})})]})]}),Kt&&we&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-course-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close applicant deletion warning`,className:`admin-modal-backdrop`,onClick:()=>{Jt||qt(!1)},type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,Q.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`warning`})}),(0,Q.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Move to Archive`}),(0,Q.jsx)(`h2`,{id:`admin-course-delete-confirm-title`,children:`Delete all course applications?`}),(0,Q.jsxs)(`p`,{children:[`Are you sure you want to delete all`,` `,(0,Q.jsx)(`strong`,{children:vr.length}),` applications for`,` `,(0,Q.jsx)(`strong`,{children:we}),`, application year`,` `,(0,Q.jsx)(`strong`,{children:zn}),`?`]})]}),(0,Q.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`report`}),`Applicant records will move to the archive. Their uploaded PDFs stay available so the records can be restored.`]}),(0,Q.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Jt,onClick:()=>qt(!1),type:`button`,children:`No, Keep Applications`}),(0,Q.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:Jt,onClick:Ca,type:`button`,children:Jt?`Deleting...`:`Yes, Delete All`})]})]})]}),Xt&&(0,Q.jsx)(`div`,{"aria-labelledby":`admin-course-download-progress-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-progress-card`,children:[(0,Q.jsx)(`div`,{className:`admin-progress-icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`downloading`})}),(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Course Applicants Information`}),(0,Q.jsx)(`h2`,{id:`admin-course-download-progress-title`,children:`Preparing Applicant Download`}),(0,Q.jsxs)(`p`,{children:[`Creating the CSV file for `,we,`.`]}),(0,Q.jsx)(`div`,{"aria-label":`Download progress ${Qt}%`,"aria-valuemax":`100`,"aria-valuemin":`0`,"aria-valuenow":Qt,className:`admin-progress-track`,role:`progressbar`,children:(0,Q.jsx)(`span`,{style:{width:`${Qt}%`}})}),(0,Q.jsxs)(`strong`,{className:`admin-progress-value`,children:[Qt,`%`]})]})}),en&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-course-success-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close applicant action success message`,className:`admin-modal-backdrop`,onClick:()=>tn(null),type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card admin-success-card`,children:[(0,Q.jsx)(`div`,{className:`admin-success-card__icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,Q.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Completed Successfully`}),(0,Q.jsx)(`h2`,{id:`admin-course-success-title`,children:en.type===`download`?`Applicant download is ready`:`Applications deleted`}),(0,Q.jsxs)(`p`,{children:[en.count,` applicant`,` `,en.count===1?`record`:`records`,` for`,` `,(0,Q.jsx)(`strong`,{children:en.course}),`, application year`,` `,(0,Q.jsx)(`strong`,{children:en.year}),` `,en.type===`download`?`were added to the CSV file.`:`were deleted successfully.`]})]}),(0,Q.jsx)(`div`,{className:`admin-confirm-card__actions admin-success-card__actions`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>tn(null),type:`button`,children:`Done`})})]})]}),Re&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-school-id-download-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close School ID download modal`,className:`admin-modal-backdrop`,onClick:fa,type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,Q.jsx)(`h2`,{id:`admin-school-id-download-title`,children:`Choose School Year`}),(0,Q.jsx)(`p`,{children:`Download all uploaded School ID files for a specific School Year.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close School ID download`,className:`admin-modal-close`,disabled:Ke,onClick:fa,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsx)(`div`,{className:`admin-school-year-downloads`,children:Ki.map(({fileCount:e,schoolYear:t})=>(0,Q.jsxs)(`button`,{className:`admin-school-year-button`,disabled:Ke,onClick:()=>da(t),type:`button`,children:[(0,Q.jsx)(`span`,{children:t}),(0,Q.jsx)(`strong`,{children:Ke?`Preparing...`:`${e} ${e===1?`file`:`files`}`})]},t))}),(0,Q.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsx)(`strong`,{children:qi}),`-`,(0,Q.jsx)(`strong`,{children:Ji}),` of`,` `,(0,Q.jsx)(`strong`,{children:Lr.length}),` school years`]}),(0,Q.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,Q.jsx)(`button`,{"aria-label":`Previous School ID page`,disabled:Wi===1||Ke,onClick:()=>aa(Wi-1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Ui},(e,t)=>{let n=t+1;return(0,Q.jsx)(`button`,{"aria-current":Wi===n?`page`:void 0,className:Wi===n?`admin-page-button--active`:void 0,disabled:Ke,onClick:()=>aa(n),type:`button`,children:n},n)}),(0,Q.jsx)(`button`,{"aria-label":`Next School ID page`,disabled:Wi===Ui||Ke,onClick:()=>aa(Wi+1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,Q.jsx)(`div`,{className:`admin-upload-actions`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Ke,onClick:fa,type:`button`,children:`Cancel`})})]})]}),Be&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-school-id-batch-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close School ID batch modal`,className:`admin-modal-backdrop`,onClick:()=>{Ke||Ve(``)},type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,Q.jsx)(`h2`,{id:`admin-school-id-batch-title`,children:`Choose Batch`}),(0,Q.jsxs)(`p`,{children:[`Download uploaded School ID files for `,Be,` by batch. File names include Student ID, last name, first name, middle name, and batch no.`]})]}),(0,Q.jsx)(`button`,{"aria-label":`Close School ID batch download`,className:`admin-modal-close`,disabled:Ke,onClick:()=>Ve(``),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-school-year-downloads`,children:[Qi.map(({batchId:e,fileCount:t})=>(0,Q.jsxs)(`button`,{className:`admin-school-year-button`,disabled:Ke||Je,onClick:()=>pa(e,t),type:`button`,children:[(0,Q.jsx)(`span`,{children:e}),(0,Q.jsxs)(`strong`,{children:[t,` `,t===1?`file`:`files`]})]},e)),Rr.length===0&&(0,Q.jsx)(`div`,{className:`admin-modal-empty-state`,children:`No batches with uploaded School ID files were found for this School Year.`})]}),(0,Q.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsx)(`strong`,{children:$i}),`-`,(0,Q.jsx)(`strong`,{children:ea}),` of`,` `,(0,Q.jsx)(`strong`,{children:Rr.length}),` batches`]}),(0,Q.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,Q.jsx)(`button`,{"aria-label":`Previous School ID batch page`,disabled:Xi===1||Ke,onClick:()=>oa(Xi-1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Yi},(e,t)=>{let n=t+1;return(0,Q.jsx)(`button`,{"aria-current":Xi===n?`page`:void 0,className:Xi===n?`admin-page-button--active`:void 0,disabled:Ke,onClick:()=>oa(n),type:`button`,children:n},n)}),(0,Q.jsx)(`button`,{"aria-label":`Next School ID batch page`,disabled:Xi===Yi||Ke,onClick:()=>oa(Xi+1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,Q.jsx)(`div`,{className:`admin-upload-actions`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Ke,onClick:()=>Ve(``),type:`button`,children:`Back`})})]})]}),He&&!We&&!Ke&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-school-id-batch-action-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close School ID batch actions`,className:`admin-modal-backdrop`,onClick:ma,type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`p`,{className:`admin-modal-kicker`,children:[`Batch `,He.batchId]}),(0,Q.jsx)(`h2`,{id:`admin-school-id-batch-action-title`,children:`Manage School ID Files`}),(0,Q.jsxs)(`p`,{children:[He.fileCount,` `,He.fileCount===1?`file`:`files`,` for School Year`,` `,He.schoolYear,`.`]})]}),(0,Q.jsx)(`button`,{"aria-label":`Close School ID batch actions`,className:`admin-modal-close`,onClick:ma,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-school-id-actions`,children:[(0,Q.jsxs)(`button`,{className:`admin-school-id-action admin-school-id-action--download`,onClick:()=>ya(He.schoolYear,He.batchId),type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`folder_zip`}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`strong`,{children:`Download All IDs`}),(0,Q.jsx)(`small`,{children:`Create one ZIP file for this batch.`})]})]}),(0,Q.jsxs)(`button`,{className:`admin-school-id-action admin-school-id-action--delete`,onClick:()=>Ge(!0),type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`strong`,{children:`Delete All IDs`}),(0,Q.jsx)(`small`,{children:`Remove the Drive files and clear their Convex links.`})]})]})]}),(0,Q.jsx)(`div`,{className:`admin-upload-actions`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:ma,type:`button`,children:`Back`})})]})]}),We&&He&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-school-id-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close School ID delete warning`,className:`admin-modal-backdrop`,onClick:()=>{Je||Ge(!1)},type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,Q.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`warning`})}),(0,Q.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Move to Archive`}),(0,Q.jsx)(`h2`,{id:`admin-school-id-delete-confirm-title`,children:`Delete all IDs in this batch?`}),(0,Q.jsxs)(`p`,{children:[`Are you sure you want to delete all`,` `,(0,Q.jsx)(`strong`,{children:He.fileCount}),` School ID files from Batch`,` `,(0,Q.jsx)(`strong`,{children:He.batchId}),`?`]})]}),(0,Q.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`report`}),`The file links will move to the archive and can be restored. The Drive PDFs remain available until their archive entries are permanently deleted.`]}),(0,Q.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Je,onClick:()=>Ge(!1),type:`button`,children:`No, Keep Files`}),(0,Q.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:Je,onClick:ba,type:`button`,children:Je?`Deleting...`:`Yes, Delete All`})]})]})]}),Ke&&He&&(0,Q.jsx)(`div`,{"aria-labelledby":`admin-school-id-progress-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-progress-card`,children:[(0,Q.jsx)(`div`,{className:`admin-progress-icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`downloading`})}),(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,Q.jsx)(`h2`,{id:`admin-school-id-progress-title`,children:`Preparing Batch Download`}),(0,Q.jsxs)(`p`,{children:[`Downloading Batch `,He.batchId,` files and creating the ZIP.`]}),(0,Q.jsx)(`div`,{"aria-label":`Download progress ${Xe}%`,"aria-valuemax":`100`,"aria-valuemin":`0`,"aria-valuenow":Xe,className:`admin-progress-track`,role:`progressbar`,children:(0,Q.jsx)(`span`,{style:{width:`${Xe}%`}})}),(0,Q.jsxs)(`strong`,{className:`admin-progress-value`,children:[Xe,`%`]})]})}),Qe&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-school-id-success-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close School ID success message`,className:`admin-modal-backdrop`,onClick:()=>$e(null),type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card admin-success-card`,children:[(0,Q.jsx)(`div`,{className:`admin-success-card__icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,Q.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Completed Successfully`}),(0,Q.jsx)(`h2`,{id:`admin-school-id-success-title`,children:Qe.type===`download`?`Batch download is ready`:`Batch ID files deleted`}),(0,Q.jsxs)(`p`,{children:[Qe.count,` School ID`,` `,Qe.count===1?`file`:`files`,` for Batch`,` `,(0,Q.jsx)(`strong`,{children:Qe.batchId}),`, School Year`,` `,(0,Q.jsx)(`strong`,{children:Qe.schoolYear}),` `,Qe.type===`download`?`were added to the ZIP file.`:`were deleted successfully.`]})]}),(0,Q.jsx)(`div`,{className:`admin-confirm-card__actions admin-success-card__actions`,children:(0,Q.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>$e(null),type:`button`,children:`Done`})})]})]}),vt&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-edit-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close edit record modal`,className:`admin-modal-backdrop`,onClick:Ha,type:`button`}),(0,Q.jsxs)(`form`,{className:`admin-modal-card admin-modal-card--edit`,onSubmit:Ga,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header admin-modal-header--edit`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Edit Record`}),(0,Q.jsx)(`h2`,{id:`admin-edit-record-title`,children:`Edit Grantee Information`}),(0,Q.jsx)(`p`,{children:`Update the selected grantee record details.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close edit record`,className:`admin-modal-close`,disabled:wt,onClick:Ha,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-edit-summary`,children:[(0,Q.jsx)(`div`,{className:`admin-edit-summary__icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`person`})}),(0,Q.jsxs)(`div`,{className:`admin-edit-summary__text`,children:[(0,Q.jsx)(`span`,{children:`Selected Record`}),(0,Q.jsx)(`strong`,{children:vt.studentId||`No Student ID`}),(0,Q.jsx)(ti,{status:vt.status,tone:ni(vt.status)})]})]}),(0,Q.jsxs)(`div`,{className:`admin-record-details admin-record-details--responsive`,children:[(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`span`,{children:`No.`}),(0,Q.jsx)(`input`,{value:bt?.no??``,onChange:Wa(`no`)})]}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`span`,{children:`TES Award Number`}),(0,Q.jsx)(`input`,{value:bt?.tesAwardNumber??``,onChange:Wa(`tesAwardNumber`)})]}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`span`,{children:`Student ID`}),(0,Q.jsx)(`input`,{value:bt?.studentId??``,onChange:Wa(`studentId`)})]}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`span`,{children:`Last Name`}),(0,Q.jsx)(`input`,{value:bt?.lastName??``,onChange:Wa(`lastName`)})]}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`span`,{children:`First Name`}),(0,Q.jsx)(`input`,{value:bt?.firstName??``,onChange:Wa(`firstName`)})]}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`span`,{children:`MI.`}),(0,Q.jsx)(`input`,{value:bt?.middleInitial??``,onChange:Wa(`middleInitial`)})]}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`span`,{children:`Batch No.`}),(0,Q.jsx)(`input`,{value:bt?.batchId??``,onChange:Wa(`batchId`)})]}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`span`,{children:`Status`}),(0,Q.jsxs)(`select`,{value:bt?.status??``,onChange:Wa(`status`),children:[(0,Q.jsx)(`option`,{value:``,children:`Select Status`}),(0,Q.jsx)(`option`,{children:`Grantee`}),(0,Q.jsx)(`option`,{children:`Validated`}),(0,Q.jsx)(`option`,{children:`Pending`}),(0,Q.jsx)(`option`,{children:`Rejected`})]})]}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`span`,{children:`Semester`}),(0,Q.jsx)(`input`,{value:bt?.semester??``,onChange:Wa(`semester`)})]}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`span`,{children:`School Year`}),(0,Q.jsx)(`input`,{value:bt?.schoolYear??``,onChange:Wa(`schoolYear`)})]})]}),St&&(0,Q.jsx)(`p`,{className:`admin-edit-message`,children:St}),(0,Q.jsxs)(`div`,{className:`admin-upload-actions admin-upload-actions--sticky`,children:[(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:wt,onClick:Ha,type:`button`,children:`Cancel`}),(0,Q.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:wt,type:`submit`,children:wt?`Saving...`:`Save Changes`})]})]})]}),Ee&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-add-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close add record modal`,className:`admin-modal-backdrop`,onClick:Va,type:`button`}),(0,Q.jsxs)(`form`,{className:`admin-modal-card`,onSubmit:Xa,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Add New Record`}),(0,Q.jsx)(`h2`,{id:`admin-add-record-title`,children:`Upload CSV File`}),(0,Q.jsx)(`p`,{children:`Use the required template format before uploading grantee records.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close add record`,className:`admin-modal-close`,disabled:ct,onClick:Va,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`admin-upload-body`,children:[(0,Q.jsxs)(`button`,{className:`admin-button admin-button--secondary`,onClick:oi,type:`button`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download CSV Template`]}),(0,Q.jsxs)(`label`,{className:`admin-upload-dropzone`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload_file`}),(0,Q.jsx)(`strong`,{children:nt?nt.name:`Choose CSV file`}),(0,Q.jsx)(`span`,{children:`Accepted format: downloaded CSV template`}),(0,Q.jsx)(`input`,{accept:`.csv,text/csv`,disabled:ct,onChange:Ya,type:`file`})]}),(0,Q.jsx)(`div`,{className:`admin-template-preview`,"aria-label":`CSV template headers`,children:ei.map(e=>(0,Q.jsx)(`span`,{children:e},e))}),it&&(0,Q.jsx)(`p`,{className:`admin-upload-message`,children:it})]}),(0,Q.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ct,onClick:Va,type:`button`,children:`Cancel`}),(0,Q.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:ct,type:`submit`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload`}),ct?`Uploading...`:`Upload`]})]})]})]}),O&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-user-management-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close user management modal`,className:`admin-modal-backdrop`,onClick:()=>{!A&&!M&&k(!1)},type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--users`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`User Management`}),(0,Q.jsx)(`h2`,{id:`admin-user-management-title`,children:`Student Accounts`}),(0,Q.jsx)(`p`,{children:`Search and manage registered student account details.`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close user management`,className:`admin-modal-close`,onClick:()=>k(!1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),I&&(0,Q.jsx)(`p`,{className:`admin-user-message`,role:`status`,children:I}),(0,Q.jsxs)(`div`,{className:`admin-search-field admin-user-search`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,Q.jsx)(`input`,{"aria-label":`Search student accounts`,onChange:e=>{G(e.target.value),U(1)},placeholder:`Search Student ID, email, phone, or Facebook link`,type:`search`,value:W})]}),(0,Q.jsx)(`div`,{className:`admin-quick-actions-table-wrap admin-users-table-wrap`,children:(0,Q.jsxs)(`table`,{className:`admin-quick-actions-table admin-users-table`,children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:`No.`}),(0,Q.jsx)(`th`,{children:`Student ID`}),(0,Q.jsx)(`th`,{children:`Email Address`}),(0,Q.jsx)(`th`,{children:`Phone Number`}),(0,Q.jsx)(`th`,{children:`Facebook Profile`}),(0,Q.jsx)(`th`,{children:`Actions`})]})}),(0,Q.jsxs)(`tbody`,{children:[mn===void 0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-empty-state`,colSpan:6,children:`Loading users...`})}),mn!==void 0&&ii.length===0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`admin-empty-state`,colSpan:6,children:`No student accounts found.`})}),_i.map((e,t)=>(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`td`,{"data-label":`No.`,children:gi+t+1}),(0,Q.jsx)(`td`,{"data-label":`Student ID`,children:e.schoolId||`Not provided`}),(0,Q.jsx)(`td`,{"data-label":`Email Address`,children:e.email}),(0,Q.jsx)(`td`,{"data-label":`Phone Number`,children:e.phoneNumber||`Not provided`}),(0,Q.jsx)(`td`,{"data-label":`Facebook Profile`,children:e.facebookProfileUrl?(0,Q.jsx)(`a`,{className:`admin-user-facebook-link`,href:e.facebookProfileUrl,rel:`noreferrer`,target:`_blank`,children:`View Profile`}):`Not provided`}),(0,Q.jsx)(`td`,{"data-label":`Actions`,children:(0,Q.jsxs)(`div`,{className:`admin-user-actions`,children:[(0,Q.jsx)(`button`,{"aria-label":`Edit ${e.email}`,onClick:()=>$a(e),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`edit`})}),(0,Q.jsx)(`button`,{"aria-label":`Delete ${e.email}`,className:`admin-user-action--delete`,onClick:()=>{N(e),L(``)},type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`})})]})})]},e.id))]})]})}),(0,Q.jsxs)(`div`,{className:`admin-pagination admin-user-pagination`,children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsx)(`strong`,{children:yi}),` to `,(0,Q.jsx)(`strong`,{children:$}),` of `,(0,Q.jsx)(`strong`,{children:ii.length}),` users`]}),(0,Q.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,Q.jsx)(`button`,{"aria-label":`Previous users page`,disabled:hi===1||ii.length===0,onClick:()=>U(hi-1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),vi.map(e=>typeof e==`string`?(0,Q.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e):(0,Q.jsx)(`button`,{className:hi===e?`admin-page-button--active`:void 0,disabled:ii.length===0,onClick:()=>U(e),type:`button`,children:e},e)),(0,Q.jsx)(`button`,{"aria-label":`Next users page`,disabled:hi===pi||ii.length===0,onClick:()=>U(hi+1),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),A&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-edit-user-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-modal-overlay--nested`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close edit user modal`,className:`admin-modal-backdrop`,onClick:()=>j(null),type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--user-form`,children:[(0,Q.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`admin-modal-kicker`,children:`Edit User`}),(0,Q.jsx)(`h2`,{id:`admin-edit-user-title`,children:`Update Account`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close edit user`,className:`admin-modal-close`,onClick:()=>j(null),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsxs)(`form`,{className:`admin-user-form`,onSubmit:async e=>{if(e.preventDefault(),!(!A||R)){z(!0),L(``);try{let e=await On({id:A.id,email:P.email,phoneNumber:P.phoneNumber});if(!e.success){L(e.message);return}j(null),L(e.message)}catch(e){L(e instanceof Error?e.message:`Unable to update the user account.`)}finally{z(!1)}}},children:[(0,Q.jsxs)(`label`,{children:[`Email Address`,(0,Q.jsx)(`input`,{autoComplete:`email`,name:`email`,onChange:eo,required:!0,type:`email`,value:P.email})]}),(0,Q.jsxs)(`label`,{children:[`Phone Number`,(0,Q.jsx)(`input`,{autoComplete:`tel`,name:`phoneNumber`,onChange:eo,placeholder:`09123456789`,required:!0,type:`tel`,value:P.phoneNumber})]}),I&&(0,Q.jsx)(`p`,{className:`admin-user-message admin-user-message--error`,role:`alert`,children:I}),(0,Q.jsxs)(`div`,{className:`admin-user-form__actions`,children:[(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>j(null),type:`button`,children:`Cancel`}),(0,Q.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:R,type:`submit`,children:R?`Saving...`:`Save Changes`})]})]})]})]}),M&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-delete-user-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-modal-overlay--nested`,role:`alertdialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Cancel deleting user`,className:`admin-modal-backdrop`,onClick:()=>N(null),type:`button`}),(0,Q.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--confirm`,children:[(0,Q.jsx)(`div`,{className:`admin-delete-user-icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`})}),(0,Q.jsx)(`h2`,{id:`admin-delete-user-title`,children:`Delete user account?`}),(0,Q.jsxs)(`p`,{children:[`This moves `,(0,Q.jsx)(`strong`,{children:M.email}),` to the archive, where the account can be restored.`]}),I&&(0,Q.jsx)(`p`,{className:`admin-user-message admin-user-message--error`,role:`alert`,children:I}),(0,Q.jsxs)(`div`,{className:`admin-user-form__actions`,children:[(0,Q.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>N(null),type:`button`,children:`Cancel`}),(0,Q.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:B,onClick:async()=>{if(!(!M||B)){V(!0),L(``);try{let e=await kn({id:M.id});if(!e.success){L(e.message);return}N(null),L(e.message)}catch(e){L(e instanceof Error?e.message:`Unable to delete the user account.`)}finally{V(!1)}}},type:`button`,children:B?`Deleting...`:`Delete User`})]})]})]}),E&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-quick-actions-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-modal-overlay--support`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close Student Support modal`,className:`admin-modal-backdrop`,onClick:()=>D(!1),type:`button`}),(0,Q.jsx)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--quick-actions`,children:(0,Q.jsx)(Br,{sessionToken:e?.sessionToken,requestCount:Nn.length,onExport:wa,onClose:()=>D(!1)})})]}),(0,Q.jsx)(`div`,{className:`admin-scroll-progress`,style:{"--admin-scroll":u}})]})}var Ti=`
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
`,Ei={quickActions:{table:`quickActions`,source:`all-grantee-information-header`,defaultStatus:`new`,fields:{email:{label:`Email account`,type:`email`,required:!0,placeholder:`name@example.com`},question:{label:`Question`,type:`textarea`,required:!0,placeholder:`Type your question or request here...`}}}},Di=`ibacmi-visitor-support-token`;function Oi(){let e=globalThis.crypto;if(typeof e?.randomUUID==`function`)try{return e.randomUUID()}catch{}if(typeof e?.getRandomValues==`function`)try{let t=e.getRandomValues(new Uint8Array(16));return Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}catch{}return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`}function ki(e){return new Intl.DateTimeFormat(`en-PH`,{hour:`numeric`,minute:`2-digit`}).format(new Date(e))}function Ai(e){return new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`}).format(new Date(e))}function ji(e){try{let t=new URL(e),n=t.hostname.toLowerCase(),r=[`example.com`,`example.org`,`example.net`,`localhost`].some(e=>n===e||n.endsWith(`.${e}`))||[`.test`,`.invalid`,`.local`].some(e=>n.endsWith(e));return[`http:`,`https:`].includes(t.protocol)&&!!t.hostname&&!t.username&&!t.password&&!r}catch{return!1}}function Mi(e){let t=`${e.name} ${e.url}`.toLowerCase();return t.includes(`messenger`)||t.includes(`facebook`)?`forum`:t.includes(`whatsapp`)||t.includes(`phone`)?`call`:t.includes(`email`)||t.includes(`mail`)?`mail`:t.includes(`student`)||t.includes(`school`)||t.includes(`portal`)?`school`:`link`}function Ni({onRequest:e}){let[t,n]=(0,X.useState)(()=>window.localStorage.getItem(Di)||``),[r,i]=(0,X.useState)(!1),[a,o]=(0,X.useState)(``),[s,c]=(0,X.useState)(`Student`),[l,u]=(0,X.useState)(``),[d,f]=(0,X.useState)(``),[p,m]=(0,X.useState)(``),[h,g]=(0,X.useState)(``),[_,v]=(0,X.useState)(!1),[y,b]=(0,X.useState)(!1),[x,S]=(0,X.useState)(!1),C=(0,X.useRef)(null),w=(0,X.useRef)(null),T=Cn(Z.support.getVisitorConversation,t?{visitorToken:t}:`skip`),E=wn(Z.support.createVisitorConversation),D=wn(Z.support.sendVisitorMessage),O=wn(Z.support.markVisitorRead),k=Cn(Z.support.getPublicLinks,_?{}:`skip`),A=T?.messages??[],j=(k?.links??[]).filter(e=>ji(e.url)),M=r?0:T?.unreadCount??0,N=!!(t&&T===null);(0,X.useEffect)(()=>{!r||!t||!T?.unreadCount||O({visitorToken:t}).catch(()=>{})},[r,t,T?.unreadCount,O]),(0,X.useEffect)(()=>{!r||!C.current||C.current.scrollTo({top:C.current.scrollHeight,behavior:`smooth`})},[r,A.length]),(0,X.useEffect)(()=>{if(!_)return;let e=e=>{e.key===`Escape`&&v(!1)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[_]);let P=async e=>{if(e.preventDefault(),!y){b(!0),g(``);try{let e=await E({name:a,visitorType:s,...s===`Student`&&l.trim()?{schoolId:l.trim()}:{},...s===`Parent / Guardian`&&d.trim()?{studentName:d.trim()}:{}});window.localStorage.setItem(Di,e.visitorToken),n(e.visitorToken)}catch(e){g(e.message||`Unable to start a conversation. Please try again.`)}finally{b(!1)}}},F=async()=>{let e=p.trim();if(!(!e||x||!t||N)){S(!0),g(``);try{await D({visitorToken:t,content:e,clientMessageId:Oi()}),m(``),w.current&&(w.current.style.height=``)}catch(e){g(e.message||`Message could not be sent. Please try again.`)}finally{S(!1)}}},I=e=>{m(e.target.value),e.target.style.height=`auto`,e.target.style.height=`${Math.min(e.target.scrollHeight,120)}px`},L=N||!t;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`button`,{className:`visitor-launcher`,type:`button`,"aria-label":`Chat with Scholarship Support`,"aria-expanded":r,onClick:()=>i(e=>!e),children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:r?`close`:`chat`}),M>0&&(0,Q.jsx)(`span`,{className:`visitor-launcher__badge`,"aria-label":`${M} unread replies`,children:M>9?`9+`:M}),(0,Q.jsx)(`span`,{className:`visitor-launcher__hint`,children:`Need help? Chat with us`})]}),r&&(0,Q.jsxs)(`section`,{className:`visitor-chat`,role:`dialog`,"aria-modal":`false`,"aria-label":`IBACMI Scholarship Support chat`,children:[(0,Q.jsxs)(`header`,{className:`visitor-chat__header`,children:[(0,Q.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:`IBACMI`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:`IBACMI Scholarship Support`}),(0,Q.jsx)(`span`,{children:`Chat with our Scholarship Office`})]}),(0,Q.jsx)(`button`,{type:`button`,"aria-label":`Minimize chat`,onClick:()=>i(!1),children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})})]}),!L&&T===void 0&&(0,Q.jsx)(`div`,{className:`visitor-chat__loading`,role:`status`,children:`Restoring your conversation…`}),L&&(0,Q.jsxs)(`form`,{className:`visitor-welcome`,onSubmit:P,children:[(0,Q.jsx)(`p`,{className:`visitor-welcome__intro`,children:`Welcome to IBACMI Scholarship Office Support! We're here to assist you with your scholarship questions.`}),N&&(0,Q.jsx)(`p`,{className:`visitor-chat__expired`,children:`Your previous chat session has expired. You can start a new conversation.`}),(0,Q.jsxs)(`label`,{children:[`May I know your name?`,(0,Q.jsx)(`input`,{required:!0,minLength:2,maxLength:100,value:a,onChange:e=>o(e.target.value),placeholder:`Full name`,autoComplete:`name`})]}),(0,Q.jsxs)(`fieldset`,{children:[(0,Q.jsx)(`legend`,{children:`May I know if you are a Student or Parent/Guardian?`}),[`Student`,`Parent / Guardian`,`Other Visitor`].map(e=>(0,Q.jsxs)(`label`,{className:`visitor-choice`,children:[(0,Q.jsx)(`input`,{type:`radio`,name:`visitorType`,value:e,checked:s===e,onChange:()=>c(e)}),e]},e))]}),s===`Student`&&(0,Q.jsxs)(`label`,{children:[`School ID `,(0,Q.jsx)(`span`,{children:`(optional)`}),(0,Q.jsx)(`input`,{maxLength:30,value:l,onChange:e=>u(e.target.value),placeholder:`Your school ID`})]}),s===`Parent / Guardian`&&(0,Q.jsxs)(`label`,{children:[`Student's name `,(0,Q.jsx)(`span`,{children:`(optional)`}),(0,Q.jsx)(`input`,{maxLength:100,value:d,onChange:e=>f(e.target.value),placeholder:`Student's name`})]}),(0,Q.jsx)(`p`,{className:`visitor-privacy`,children:`We use these details only to identify your conversation and respond to your inquiry.`}),h&&(0,Q.jsx)(`p`,{className:`visitor-chat__error`,role:`alert`,children:h}),(0,Q.jsx)(`button`,{className:`visitor-primary`,type:`submit`,disabled:y,children:y?`Starting…`:`Start Conversation`}),e&&(0,Q.jsx)(`button`,{className:`visitor-request-link`,type:`button`,onClick:()=>v(!0),children:`Submit a student support request`})]}),!L&&T&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`div`,{className:`visitor-chat__history`,ref:C,children:[A.length===0&&(0,Q.jsxs)(`div`,{className:`visitor-chat__empty`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`forum`}),(0,Q.jsxs)(`p`,{children:[`Hi `,T.conversation.studentName,`, how can we help?`]})]}),A.map((e,t)=>{let n=A[t-1],r=!n||new Date(n.createdAt).toDateString()!==new Date(e.createdAt).toDateString(),i=e.senderRole===`visitor`;return(0,Q.jsxs)(`div`,{children:[r&&(0,Q.jsx)(`div`,{className:`visitor-date`,children:(0,Q.jsx)(`span`,{children:Ai(e.createdAt)})}),(0,Q.jsxs)(`div`,{className:`visitor-message ${i?`is-own`:``}`,children:[!i&&(0,Q.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:``}),(0,Q.jsxs)(`div`,{className:`visitor-message__body`,children:[(0,Q.jsx)(`p`,{children:e.content}),(0,Q.jsx)(`time`,{children:ki(e.createdAt)})]})]})]},e._id)})]}),(0,Q.jsxs)(`form`,{className:`visitor-composer`,onSubmit:e=>{e.preventDefault(),F()},children:[h&&(0,Q.jsx)(`p`,{className:`visitor-chat__error`,role:`alert`,children:h}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`textarea`,{ref:w,value:p,onChange:I,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),F())},maxLength:2e3,placeholder:`Write a message…`,"aria-label":`Write a message`}),(0,Q.jsx)(`button`,{type:`submit`,"aria-label":`Send message`,disabled:!p.trim()||x,children:x?(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`hourglass_top`}):(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`send`})})]}),(0,Q.jsx)(`small`,{children:`Enter to send · Shift + Enter for a new line`})]})]})]}),_&&(0,Q.jsx)(`div`,{className:`support-options-backdrop`,onMouseDown:e=>{e.target===e.currentTarget&&v(!1)},children:(0,Q.jsxs)(`section`,{className:`support-options-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`support-options-title`,children:[(0,Q.jsx)(`button`,{className:`support-options-close`,type:`button`,"aria-label":`Close support options`,onClick:()=>v(!1),children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,Q.jsxs)(`div`,{className:`support-options-heading`,children:[(0,Q.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:`IBACMI`}),(0,Q.jsx)(`span`,{className:`support-options-eyebrow`,children:`IBACMI SCHOLARSHIP OFFICE`}),(0,Q.jsx)(`h2`,{id:`support-options-title`,children:`How can we help you?`}),(0,Q.jsx)(`p`,{children:`Choose your preferred support channel to contact the IBACMI Scholarship Office.`})]}),(0,Q.jsxs)(`div`,{className:`support-options-list`,"aria-live":`polite`,children:[k===void 0&&(0,Q.jsxs)(`div`,{className:`support-options-state`,role:`status`,children:[(0,Q.jsx)(`span`,{className:`support-options-spinner`}),`Loading support channels…`]}),k?.error&&(0,Q.jsx)(`div`,{className:`support-options-state support-options-state--error`,role:`alert`,children:`Support channels could not be loaded. Please try again shortly.`}),k&&!k.error&&j.length===0&&(0,Q.jsx)(`div`,{className:`support-options-state`,children:`No support channels are configured yet. Please continue using this chat for help.`}),j.map(e=>(0,Q.jsxs)(`a`,{className:`support-option-card`,href:e.url,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`span`,{className:`support-option-card__icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:Mi(e)})}),(0,Q.jsxs)(`span`,{className:`support-option-card__copy`,children:[(0,Q.jsx)(`strong`,{children:e.name}),(0,Q.jsx)(`small`,{children:`Open this support channel`})]}),(0,Q.jsx)(`span`,{className:`material-symbols-outlined support-option-card__arrow`,"aria-hidden":`true`,children:`open_in_new`})]},e.id))]})]})})]})}function Pi(e){let t=(0,Un.c)(76),{onDismiss:n,onLogin:r,onRegister:i,onSearch:a}=e,[o,s]=(0,X.useState)(1),c=(0,X.useRef)(null),l=(0,X.useRef)(null),u,d;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(u=()=>{let e=c.current,t=document.activeElement,n=document.body.style.overflow;return e.showModal(),document.body.style.overflow=`hidden`,()=>{e.close(),document.body.style.overflow=n,t?.isConnected&&t.focus({preventScroll:!0})}},d=[],t[0]=u,t[1]=d):(u=t[0],d=t[1]),(0,X.useEffect)(u,d);let f;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(f=()=>{l.current?.focus()},t[2]=f):f=t[2];let p;t[3]===o?p=t[4]:(p=[o],t[3]=o,t[4]=p),(0,X.useEffect)(f,p);let m;t[5]===n?m=t[6]:(m=e=>{e.preventDefault(),n()},t[5]=n,t[6]=m);let h;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(h=e=>{if(e.key!==`Tab`)return;let t=[...e.currentTarget.querySelectorAll(`button:not([disabled])`)],n=t[0],r=t.at(-1);e.shiftKey&&(document.activeElement===n||document.activeElement===l.current)?(e.preventDefault(),r?.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n?.focus())},t[7]=h):h=t[7];let g;t[8]===n?g=t[9]:(g=e=>{let t=e.currentTarget.getBoundingClientRect();e.target===e.currentTarget&&(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&n()},t[8]=n,t[9]=g);let _;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,Q.jsxs)(`div`,{className:`verification-brand`,children:[(0,Q.jsx)(`img`,{src:Wn,alt:`IBACMI`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:`IBACMI`}),(0,Q.jsx)(`span`,{children:`Scholarship Office`})]})]}),t[10]=_):_=t[10];let v;t[11]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,Q.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,"aria-hidden":`true`,children:(0,Q.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),t[11]=v):v=t[11];let y;t[12]===n?y=t[13]:(y=(0,Q.jsxs)(`div`,{className:`verification-topline`,children:[_,(0,Q.jsx)(`button`,{className:`verification-icon-button`,type:`button`,"aria-label":`Sirad-i ang verification`,onClick:n,children:v})]}),t[12]=n,t[13]=y);let b=`Lakang ${o} sa 2`,x=o===1?`is-current`:`is-complete`,S=o===1?`step`:void 0,C;t[14]!==x||t[15]!==S?(C=(0,Q.jsx)(`span`,{className:x,"aria-current":S,children:`1`}),t[14]=x,t[15]=S,t[16]=C):C=t[16];let w;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,Q.jsx)(`i`,{"aria-hidden":`true`}),t[17]=w):w=t[17];let T=o===2?`is-current`:``,E=o===2?`step`:void 0,D;t[18]!==T||t[19]!==E?(D=(0,Q.jsx)(`span`,{className:T,"aria-current":E,children:`2`}),t[18]=T,t[19]=E,t[20]=D):D=t[20];let O;t[21]===o?O=t[22]:(O=(0,Q.jsxs)(`p`,{children:[`Lakang `,o,` sa 2`]}),t[21]=o,t[22]=O);let k;t[23]!==b||t[24]!==C||t[25]!==D||t[26]!==O?(k=(0,Q.jsxs)(`div`,{className:`verification-progress`,"aria-label":b,children:[C,w,D,O]}),t[23]=b,t[24]=C,t[25]=D,t[26]=O,t[27]=k):k=t[27];let A;t[28]===Symbol.for(`react.memo_cache_sentinel`)?(A=(0,Q.jsx)(`span`,{className:`verification-kicker`,children:`Tabangan ka namo`}),t[28]=A):A=t[28];let j=o===1?`Naa na kay account?`:`Naa ba imong pangalan sa official grantee list?`,M;t[29]===j?M=t[30]:(M=(0,Q.jsx)(`h2`,{id:`account-verification-title`,ref:l,tabIndex:-1,children:j}),t[29]=j,t[30]=M);let N=o===1?`Palihog pili sa imong tubag aron matabangan ka namo sa sunod nga proseso.`:`Na-search ug nakumpirma na ba nimo imong pangalan gamit ang Student ID, Batch Number, o Apelyido?`,P;t[31]===N?P=t[32]:(P=(0,Q.jsx)(`p`,{id:`account-verification-description`,children:N}),t[31]=N,t[32]=P);let F=o===1?r:i,I;t[33]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,Q.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,"aria-hidden":`true`,children:[(0,Q.jsx)(`path`,{d:`m7 12 3 3 7-7`}),(0,Q.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`})]}),t[33]=I):I=t[33];let L=o===1?`Oo, naa na koy account`:`Oo, naa ko sa list`,R;t[34]===L?R=t[35]:(R=(0,Q.jsx)(`span`,{children:L}),t[34]=L,t[35]=R);let z;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(z=(0,Q.jsx)(`span`,{"aria-hidden":`true`,children:`→`}),t[36]=z):z=t[36];let B;t[37]!==F||t[38]!==R?(B=(0,Q.jsxs)(`button`,{className:`verification-option verification-option--primary`,type:`button`,onClick:F,children:[I,R,z]}),t[37]=F,t[38]=R,t[39]=B):B=t[39];let V;t[40]!==a||t[41]!==o?(V=o===1?()=>s(2):a,t[40]=a,t[41]=o,t[42]=V):V=t[42];let H;t[43]===o?H=t[44]:(H=(0,Q.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,"aria-hidden":`true`,children:o===1?(0,Q.jsx)(`path`,{d:`M12 5v14M5 12h14`}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`circle`,{cx:`10.5`,cy:`10.5`,r:`6.5`}),(0,Q.jsx)(`path`,{d:`m16 16 5 5`})]})}),t[43]=o,t[44]=H);let U=o===1?`Wala pa koy account`:`Wala pa nako na-check`,W;t[45]===U?W=t[46]:(W=(0,Q.jsx)(`span`,{children:U}),t[45]=U,t[46]=W);let G;t[47]===Symbol.for(`react.memo_cache_sentinel`)?(G=(0,Q.jsx)(`span`,{"aria-hidden":`true`,children:`→`}),t[47]=G):G=t[47];let K;t[48]!==V||t[49]!==H||t[50]!==W?(K=(0,Q.jsxs)(`button`,{className:`verification-option`,type:`button`,onClick:V,children:[H,W,G]}),t[48]=V,t[49]=H,t[50]=W,t[51]=K):K=t[51];let ee;t[52]!==B||t[53]!==K?(ee=(0,Q.jsxs)(`div`,{className:`verification-options`,children:[B,K]}),t[52]=B,t[53]=K,t[54]=ee):ee=t[54];let q;t[55]!==o||t[56]!==M||t[57]!==P||t[58]!==ee?(q=(0,Q.jsxs)(`div`,{className:`verification-question`,children:[A,M,P,ee]},o),t[55]=o,t[56]=M,t[57]=P,t[58]=ee,t[59]=q):q=t[59];let te;t[60]!==n||t[61]!==o?(te=o===1?n:()=>s(1),t[60]=n,t[61]=o,t[62]=te):te=t[62];let J;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(J=(0,Q.jsx)(`span`,{"aria-hidden":`true`,children:`←`}),t[63]=J):J=t[63];let Y;t[64]===te?Y=t[65]:(Y=(0,Q.jsxs)(`button`,{type:`button`,className:`verification-back`,onClick:te,children:[J,` Balik`]}),t[64]=te,t[65]=Y);let ne;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(ne=(0,Q.jsx)(`span`,{children:`IBACMI · Student access`}),t[66]=ne):ne=t[66];let re;t[67]===Y?re=t[68]:(re=(0,Q.jsxs)(`footer`,{className:`verification-footer`,children:[Y,ne]}),t[67]=Y,t[68]=re);let ie;return t[69]!==y||t[70]!==k||t[71]!==q||t[72]!==re||t[73]!==m||t[74]!==g?(ie=(0,Q.jsxs)(`dialog`,{ref:c,className:`account-verification`,lang:`ceb`,"aria-labelledby":`account-verification-title`,"aria-describedby":`account-verification-description`,onCancel:m,onKeyDown:h,onClick:g,children:[y,k,q,re]}),t[69]=y,t[70]=k,t[71]=q,t[72]=re,t[73]=m,t[74]=g,t[75]=ie):ie=t[75],ie}var Fi=In();function Ii(){let e=new Map,t=t=>{let n=e.get(t);n&&(n.abort.abort(),n.url&&URL.revokeObjectURL(n.url),e.delete(t))};return{get(n){let r=e.get(n);if(r)return r.used=Date.now(),r.promise;let i={abort:new AbortController,used:Date.now(),size:0,url:null,promise:null};return i.promise=fetch(n,{cache:`no-store`,signal:i.abort.signal}).then(e=>{if(!e.ok)throw Error(`Image unavailable`);return e.blob()}).then(r=>{if(i.abort.signal.aborted)throw Error(`Image request cancelled`);i.size=r.size,i.url=URL.createObjectURL(r);let a=[...e.values()].reduce((e,t)=>e+t.size,0);for(let[r,i]of[...e].sort((e,t)=>e[1].used-t[1].used)){if(e.size<=20&&a<=40*1024*1024)break;r!==n&&i.url&&(a-=i.size,t(r))}return i.url}).catch(t=>{throw e.get(n)===i&&e.delete(n),t}),e.set(n,i),i.promise},retain(n){let r=new Set(n);for(let n of e.keys())r.has(n)||t(n)},destroy(){for(let n of e.keys())t(n)}}}var Li=(e,t)=>(e%t+t)%t,Ri=[-2,-1,0,1,2];function zi(e){let t=(0,Un.c)(94),{images:n,imageCache:r}=e,i=(0,X.useRef)(null),a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=[],t[0]=a):a=t[0];let o=(0,X.useRef)(a),s=(0,X.useRef)(0),c=(0,X.useRef)(null),l=(0,X.useRef)(0),u=(0,X.useRef)(null),d=(0,X.useRef)(!1),[f,p]=(0,X.useState)(0),[m,h]=(0,X.useState)(!1),[g,_]=(0,X.useState)(!1),[v,y]=(0,X.useState)(!1),[b,x]=(0,X.useState)(!0),[S,C]=(0,X.useState)(Wi),[w,T]=(0,X.useState)(0),[E,D]=(0,X.useState)(null),[O,k]=(0,X.useState)(Ui),A=n.length,j;t[1]!==v||t[2]!==S||t[3]!==g||t[4]!==n||t[5]!==m||t[6]!==O||t[7]!==E||t[8]!==b?(j=m||g||v||!b||S||O||n.some(e=>e._id===E),t[1]=v,t[2]=S,t[3]=g,t[4]=n,t[5]=m,t[6]=O,t[7]=E,t[8]=b,t[9]=j):j=t[9];let M=j,N,P;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(N=()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>{e.matches&&(c.current=null),k(e.matches)},n=()=>C(document.hidden);e.addEventListener(`change`,t),document.addEventListener(`visibilitychange`,n);let r=new IntersectionObserver(e=>{let[t]=e;return x(t.isIntersecting)},{threshold:.1});return r.observe(i.current),()=>{e.removeEventListener(`change`,t),document.removeEventListener(`visibilitychange`,n),r.disconnect()}},P=[],t[10]=N,t[11]=P):(N=t[10],P=t[11]),(0,X.useEffect)(N,P);let F;t[12]===A?F=t[13]:(F=e=>{let t=window.innerWidth<=600?8:window.innerWidth<=900?18:26;o.current.forEach((n,r)=>{if(!n)return;let i=Ri[r]-e,a=Math.abs(i);A===2?(n.style.transform=`translate(-50%, -50%) translateX(${i*108}%)`,n.style.opacity=a>1.25?`0`:`1`):(n.style.transform=`translate(-50%, -50%) translateX(${i*78}%) translateZ(${-a*125}px) rotateY(${Math.max(-38,Math.min(38,-i*t))}deg) scale(${Math.max(.62,1-a*.12)})`,n.style.opacity=String(Math.max(0,Math.min(1,2.4-a)))),n.style.zIndex=String(30-Math.round(a*5))})},t[12]=A,t[13]=F);let I=F,L,R;t[14]===I?(L=t[15],R=t[16]):(L=()=>{let e=()=>I(s.current-Math.floor(s.current));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},R=[I],t[14]=I,t[15]=L,t[16]=R),(0,X.useEffect)(L,R);let z;t[17]===I?z=t[18]:(z=()=>{I(s.current-Math.floor(s.current))},t[17]=I,t[18]=z),(0,X.useLayoutEffect)(z);let B;t[19]!==A||t[20]!==I||t[21]!==M?(B=()=>{if(A<2)return;let e,t=0,n=r=>{let i=t?Math.min(50,r-t):0;if(t=r,c.current){let e=c.current;e.start||=r;let t=Math.min(1,(r-e.start)/480),n=1-(1-t)**3;s.current=e.from+(e.to-e.from)*n,t===1&&(c.current=null)}else M||(s.current+=i/5500);let a=Li(Math.floor(s.current),A);a!==l.current&&(l.current=a,(0,Fi.flushSync)(()=>p(a))),I(s.current-Math.floor(s.current)),(!M||c.current)&&(e=requestAnimationFrame(n))};return(!M||c.current)&&(e=requestAnimationFrame(n)),()=>cancelAnimationFrame(e)},t[19]=A,t[20]=I,t[21]=M,t[22]=B):B=t[22];let V;t[23]!==A||t[24]!==I||t[25]!==M||t[26]!==w?(V=[A,M,w,I],t[23]=A,t[24]=I,t[25]=M,t[26]=w,t[27]=V):V=t[27],(0,X.useEffect)(B,V);let H;t[28]!==A||t[29]!==O?(H=e=>{let t=Math.floor(s.current)+e;O?(s.current=t,l.current=Li(t,A),p(l.current),T(Hi)):(c.current={from:s.current,to:t,start:0},T(Vi))},t[28]=A,t[29]=O,t[30]=H):H=t[30];let U=H,W,G,K,ee,q,te,J,Y,ne,re,ie,ae,oe,se,ce;if(t[31]!==U||t[32]!==A||t[33]!==r||t[34]!==n||t[35]!==f||t[36]!==E){let e=e=>{if(d.current){d.current=!1;return}c.current=null,D(e)},a;t[52]===E?a=t[53]:(a=e=>e._id===E,t[52]=E,t[53]=a),ce=n.findIndex(a),W=Li(f,A),G=i,K=`documentation-stage ${A===1?`is-single`:A===2?`is-pair`:``}`,ee=`carousel`,q=`Published Scholarship Office documentation`,t[54]===Symbol.for(`react.memo_cache_sentinel`)?(te=()=>_(!0),J=()=>_(!1),Y=()=>y(!0),ne=e=>{e.currentTarget.contains(e.relatedTarget)||y(!1)},t[54]=te,t[55]=J,t[56]=Y,t[57]=ne):(te=t[54],J=t[55],Y=t[56],ne=t[57]),t[58]!==U||t[59]!==A?(re=e=>{A>1&&[`ArrowLeft`,`ArrowRight`].includes(e.key)&&(e.preventDefault(),U(e.key===`ArrowRight`?1:-1))},t[58]=U,t[59]=A,t[60]=re):re=t[60],t[61]===Symbol.for(`react.memo_cache_sentinel`)?(ie=e=>{u.current={x:e.clientX,y:e.clientY},d.current=!1},t[61]=ie):ie=t[61],t[62]!==U||t[63]!==A?(ae=e=>{let t=u.current;u.current=null,t&&A>1&&Math.abs(e.clientX-t.x)>40&&Math.abs(e.clientX-t.x)>Math.abs(e.clientY-t.y)&&(d.current=!0,U(e.clientX<t.x?1:-1))},t[62]=U,t[63]=A,t[64]=ae):ae=t[64],t[65]===Symbol.for(`react.memo_cache_sentinel`)?(oe=()=>{u.current=null},t[65]=oe):oe=t[65],se=A===1?(0,Q.jsxs)(`button`,{type:`button`,className:`documentation-card documentation-single-card`,"aria-label":`View ${n[0].title||`documentation image`}`,onClick:()=>e(n[0]._id),children:[(0,Q.jsx)(Dr,{image:n[0],imageCache:r,loading:`eager`}),(0,Q.jsx)(`span`,{className:`documentation-card-caption`,children:n[0].title||`Scholarship Office documentation`})]}):Ri.map((t,i)=>{let a=n[Li(W+t,A)],s=A===2?t===0:Math.abs(t)<=1;return(0,Q.jsxs)(`button`,{ref:e=>{o.current[i]=e},type:`button`,className:`documentation-card`,tabIndex:s?0:-1,"aria-hidden":!s,"aria-label":`View ${a.title||`documentation image`}`,style:{pointerEvents:s?`auto`:`none`},onClick:()=>e(a._id),children:[(0,Q.jsx)(Dr,{image:a,imageCache:r,loading:Math.abs(t)<=1?`eager`:`lazy`},`${a._id}-${a.updatedAt}`),(0,Q.jsx)(`span`,{className:`documentation-card-caption`,children:a.title||`Scholarship Office documentation`})]},i)}),t[31]=U,t[32]=A,t[33]=r,t[34]=n,t[35]=f,t[36]=E,t[37]=W,t[38]=G,t[39]=K,t[40]=ee,t[41]=q,t[42]=te,t[43]=J,t[44]=Y,t[45]=ne,t[46]=re,t[47]=ie,t[48]=ae,t[49]=oe,t[50]=se,t[51]=ce}else W=t[37],G=t[38],K=t[39],ee=t[40],q=t[41],te=t[42],J=t[43],Y=t[44],ne=t[45],re=t[46],ie=t[47],ae=t[48],oe=t[49],se=t[50],ce=t[51];let le;t[66]!==G||t[67]!==K||t[68]!==ee||t[69]!==q||t[70]!==te||t[71]!==J||t[72]!==Y||t[73]!==ne||t[74]!==re||t[75]!==ie||t[76]!==ae||t[77]!==oe||t[78]!==se?(le=(0,Q.jsx)(`div`,{ref:G,className:K,"aria-roledescription":ee,"aria-label":q,onMouseEnter:te,onMouseLeave:J,onFocusCapture:Y,onBlurCapture:ne,onKeyDown:re,onPointerDown:ie,onPointerUp:ae,onPointerCancel:oe,children:se}),t[66]=G,t[67]=K,t[68]=ee,t[69]=q,t[70]=te,t[71]=J,t[72]=Y,t[73]=ne,t[74]=re,t[75]=ie,t[76]=ae,t[77]=oe,t[78]=se,t[79]=le):le=t[79];let ue;t[80]!==U||t[81]!==A||t[82]!==W||t[83]!==m||t[84]!==O?(ue=A>1&&(0,Q.jsxs)(`div`,{className:`documentation-controls`,onFocusCapture:()=>y(!0),onBlurCapture:e=>{e.currentTarget.contains(e.relatedTarget)||y(!1)},children:[(0,Q.jsx)(`button`,{type:`button`,className:`documentation-icon-button`,"aria-label":`Previous documentation`,onClick:()=>U(-1),children:`←`}),(0,Q.jsxs)(`span`,{children:[W+1,` `,(0,Q.jsx)(`span`,{"aria-hidden":`true`,children:`/`}),(0,Q.jsx)(`span`,{className:`documentation-sr-only`,children:`of`}),` `,A]}),(0,Q.jsx)(`button`,{type:`button`,className:`documentation-icon-button`,"aria-label":`Next documentation`,onClick:()=>U(1),children:`→`}),!O&&(0,Q.jsx)(`button`,{type:`button`,className:`documentation-pause`,"aria-label":m?`Play documentation carousel`:`Pause documentation carousel`,onClick:()=>h(Bi),children:m?`Play`:`Pause`})]}),t[80]=U,t[81]=A,t[82]=W,t[83]=m,t[84]=O,t[85]=ue):ue=t[85];let de;t[86]!==r||t[87]!==n||t[88]!==ce?(de=ce>=0&&(0,Q.jsx)(kr,{images:n,index:ce,imageCache:r,onIndex:e=>D(n[e]._id),onClose:()=>D(null)}),t[86]=r,t[87]=n,t[88]=ce,t[89]=de):de=t[89];let fe;return t[90]!==le||t[91]!==ue||t[92]!==de?(fe=(0,Q.jsxs)(Q.Fragment,{children:[le,ue,de]}),t[90]=le,t[91]=ue,t[92]=de,t[93]=fe):fe=t[93],fe}function Bi(e){return!e}function Vi(e){return e+1}function Hi(e){return e+1}function Ui(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Wi(){return document.hidden}function Gi(){let e=(0,Un.c)(10),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t={},e[0]=t):t=e[0];let n=Cn(Z.documentation.published,t),r;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(r=Ii(),e[1]=r):r=e[1];let i=r,a,o;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(a=()=>()=>i.destroy(),o=[i],e[2]=a,e[3]=o):(a=e[2],o=e[3]),(0,X.useEffect)(a,o);let s,c;if(e[4]===n?(s=e[5],c=e[6]):(s=()=>{i.retain((n||[]).map(wr))},c=[n,i],e[4]=n,e[5]=s,e[6]=c),(0,X.useEffect)(s,c),!n?.length)return null;let l;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,Q.jsxs)(`header`,{className:`documentation-gallery-heading`,children:[(0,Q.jsx)(`span`,{children:`IBACMI · Scholarship Office`}),(0,Q.jsx)(`h2`,{id:`documentation-gallery-title`,children:`Scholarship Office Documentation`}),(0,Q.jsx)(`p`,{children:`Explore official activities, announcements, and memorable moments from the Scholarship Office.`})]}),e[7]=l):l=e[7];let u;return e[8]===n?u=e[9]:(u=(0,Q.jsxs)(`section`,{className:`documentation-gallery`,"aria-labelledby":`documentation-gallery-title`,children:[l,(0,Q.jsx)(zi,{images:n,imageCache:i})]}),e[8]=n,e[9]=u),u}function Ki(e){let t=(0,Un.c)(4),{status:n,tone:r}=e,i=`status-badge status-badge--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,Q.jsx)(`span`,{className:`status-badge__dot`}),t[0]=a):a=t[0];let o;return t[1]!==n||t[2]!==i?(o=(0,Q.jsxs)(`span`,{className:i,children:[a,n]}),t[1]=n,t[2]=i,t[3]=o):o=t[3],o}function qi(e=``){let t=e.toLowerCase();return t.includes(`grantee`)||t.includes(`valid`)||t.includes(`complete`)||t.includes(`resolved`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function Ji(e,t){let n=[];if(t<=5){for(let e=1;e<=t;e+=1)n.push(e);return n}n.push(1),e>3&&n.push(`left-ellipsis`);let r=Math.max(2,e-1),i=Math.min(t-1,e+1);for(let e=r;e<=i;e+=1)n.push(e);return e<t-2&&n.push(`right-ellipsis`),n.push(t),n}function Yi(e){return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e)}function Xi(e){return/^[A-Za-z0-9-]{4,30}$/.test(e)}function Zi(e){return e.replace(/[\s-]/g,``).trim()}function Qi(e){return e.replace(/[^\d+]/g,``).replace(/(?!^)\+/g,``)}function $i(e){return e.replace(/[\r\n]+/g,` `).replace(/\s{2,}/g,` `)}function ea(e){return String(e??``).toUpperCase().replace(/Ñ/g,`N`)}function ta(e){let t=Zi(e);return/^09\d{9}$/.test(t)||/^\+639\d{9}$/.test(t)}var na=10*1024*1024;function ra(e){return e?e.type===`application/pdf`||/\.pdf$/i.test(e.name):!1}function ia(e){if(!e)return``;let t=e/(1024*1024);return`${t.toFixed(t>=10?0:1)} MB`}function aa(e){return e.length>=6}function oa(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}var sa=[{label:`Student ID`,name:`studentId`,autoComplete:`off`,required:!0},{label:`Last Name`,name:`lastName`,autoComplete:`family-name`,required:!0},{label:`First Name`,name:`firstName`,autoComplete:`given-name`,required:!0},{label:`Ext Name (JR)`,name:`extensionName`,autoComplete:`honorific-suffix`},{label:`Middle Name`,name:`middleName`,autoComplete:`additional-name`},{label:`Learner Reference Number (LRN)`,name:`lrn`,autoComplete:`off`,inputMode:`numeric`,pattern:`\\d{12}`,helper:`Optional if not assigned`},{label:`PhilSys ID Number`,name:`philSysIdNumber`,autoComplete:`off`,helper:`Optional`},{label:`4Ps ID Number`,name:`fourPsIdNumber`,autoComplete:`off`,helper:`Optional`}],ca=[{label:`Last Name`,name:`fatherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`fatherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`fatherMiddleName`,autoComplete:`additional-name`}],la=[{label:`Last Name`,name:`motherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`motherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`motherMiddleName`,autoComplete:`additional-name`}],ua=[`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`],da=[`Student Information`,`Parent Information`,`Permanent Address`,`Additional Information`,`Required Documents`,`Review & Submit`],fa=[{label:`Street / Purok / Barangay`,name:`streetBarangay`,autoComplete:`address-line1`,required:!0},{label:`City / Municipality`,name:`cityMunicipality`,required:!0},{label:`Province`,name:`province`,required:!0},{label:`Region`,name:`region`,required:!0},{label:`ZIP Code`,name:`zipCode`,autoComplete:`postal-code`,inputMode:`numeric`,required:!0},{label:`Mobile No.`,name:`mobileNumber`,autoComplete:`tel`,inputMode:`tel`,type:`tel`,pattern:`\\+?[0-9]*`,required:!0},{label:`Email Address`,name:`emailAddress`,autoComplete:`email`,inputMode:`email`,type:`email`,required:!0}];function pa({onAdminLoginSuccess:e,onStudentRegistrationSuccess:t}){let n=(0,X.useRef)(null),[r,i]=(0,X.useState)(!1),[a,o]=(0,X.useState)(``),s=(0,X.useRef)(null),c=(0,X.useRef)(null),[l,u]=(0,X.useState)(0),[d,f]=(0,X.useState)(()=>window.matchMedia(`(display-mode: standalone)`).matches||window.navigator.standalone===!0),[p,m]=(0,X.useState)(!1),[h,g]=(0,X.useState)(!1),[_,v]=(0,X.useState)(!1),[y,b]=(0,X.useState)(!1),[x,S]=(0,X.useState)(!1),[C,w]=(0,X.useState)(!1),[T,E]=(0,X.useState)(!1),[D,O]=(0,X.useState)(!1),[k,A]=(0,X.useState)(``),[j,M]=(0,X.useState)(``),[N,P]=(0,X.useState)(``),[F,I]=(0,X.useState)(``),[L,R]=(0,X.useState)(``),[z,B]=(0,X.useState)(``),[V,H]=(0,X.useState)({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),[U,W]=(0,X.useState)(null),[G,K]=(0,X.useState)(0),[ee,q]=(0,X.useState)({}),[te,J]=(0,X.useState)(!1),[Y,ne]=(0,X.useState)(!1),[re,ie]=(0,X.useState)(!1),[ae,oe]=(0,X.useState)(!1),[se,ce]=(0,X.useState)(!1),[le,ue]=(0,X.useState)(1),[de,fe]=(0,X.useState)(``),[pe,me]=(0,X.useState)(``),[he,ge]=(0,X.useState)(``),[_e,ve]=(0,X.useState)(``),[ye,be]=(0,X.useState)(``),[xe,Se]=(0,X.useState)(``),[Ce,we]=(0,X.useState)(``),[Te,Ee]=(0,X.useState)(``),[De,Oe]=(0,X.useState)(``),[ke,Ae]=(0,X.useState)(``),[je,Me]=(0,X.useState)(``),[Ne,Pe]=(0,X.useState)(null),[Fe,Ie]=(0,X.useState)(``),[Le,Re]=(0,X.useState)(``),[ze,Be]=(0,X.useState)(``),[Ve,He]=(0,X.useState)(``),[Ue,We]=(0,X.useState)(``),[Ge,Ke]=(0,X.useState)(``),[qe,Je]=(0,X.useState)(``),[Ye,Xe]=(0,X.useState)(``),[Ze,Qe]=(0,X.useState)(!1),[$e,et]=(0,X.useState)(!1),[tt,nt]=(0,X.useState)(!1),rt=wn(Z.applicants.create),it=wn(Z.applicants.generateUploadUrl),at=wn(Z.quickActions.create),ot=wn(Z.adminAuth.login),st=wn(Z.adminAuth.register),ct=wn(Z.adminAuth.requestPasswordResetOtp),lt=wn(Z.adminAuth.changePasswordWithOtp),ut=Cn(Z.allinfo.searchPublic,pe?{searchValue:pe}:`skip`),dt=Cn(Z.applicantPortal.get),ft=(0,X.useMemo)(()=>ut??[],[ut]),pt=de.trim().length>0,mt=dt===void 0,ht=dt?.isReceivingApplicants===!0;(0,X.useEffect)(()=>{let e=e=>{e.preventDefault(),c.current=e},t=()=>{c.current=null,f(!0)};return window.addEventListener(`beforeinstallprompt`,e),window.addEventListener(`appinstalled`,t),()=>{window.removeEventListener(`beforeinstallprompt`,e),window.removeEventListener(`appinstalled`,t)}},[]);let gt=async()=>{if(d){window.alert(`The IBACMI Scholarship web app is already installed on this device.`);return}let e=c.current;if(e){await e.prompt(),await e.userChoice,c.current=null;return}window.alert(`To install the web app, open your browser menu and choose “Install app” or “Add to Home Screen”.`)},_t=ft,vt=_t.length,yt=Math.max(1,Math.ceil(vt/6)),bt=(le-1)*6,xt=Math.min(bt+6,vt),St=(0,X.useMemo)(()=>_t.slice(bt,xt),[_t,bt,xt]),Ct=(0,X.useMemo)(()=>Ji(le,yt),[le,yt]);(0,X.useEffect)(()=>{let e=window.setTimeout(()=>{me(de.trim())},500);return()=>window.clearTimeout(e)},[de]);let wt=(0,X.useCallback)(()=>{Me(``),Pe(null),be(``),Se(``),Ee(``),Oe(``),typeof t==`function`&&t(Ne)},[t,Ne,Me,Pe,be,Se,Ee,Oe]);(0,X.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;u(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,X.useEffect)(()=>{if(!p&&!h&&!_&&!y&&!x&&!C&&!T&&!D&&!z&&!je&&!N)return;let e=e=>{if(e.key===`Escape`){if(ae)return;if(T){E(!1);return}if(D){O(!1);return}m(!1),g(!1),v(!1),I(``),R(``),W(null),H({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),b(!1),ne(!1),S(!1),w(!1),B(``),je&&wt(),P(``)}};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[p,h,_,y,x,C,T,D,ae,z,je,N,wt]);let Tt=()=>{P(``),M(``),m(!0)},Et=()=>{m(!1),M(``)},Dt=()=>{if(dt===void 0){B(`Please wait while the UNIFAST portal status is loading.`);return}if(!dt.isReceivingApplicants){B(`The UNIFAST portal is not receiving applicants right now. Please wait for the administrator to open applications.`);return}I(``),R(``),E(!1),O(!1),v(!0)},Ot=()=>{v(!1),I(``),R(``),E(!1),O(!1),g(!0)},kt=()=>{v(!1),Ut()},At=()=>{ae||(v(!1),g(!1),I(``),R(``),E(!1),H({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),W(null))},jt=async(e,t)=>{let n=await it({});q(e=>({...e,[t]:0}));let r=await new Promise((r,i)=>{let a=new XMLHttpRequest;a.open(`POST`,n),a.setRequestHeader(`Content-Type`,`application/pdf`),a.upload.onprogress=e=>{e.lengthComputable&&q(n=>({...n,[t]:Math.round(e.loaded/e.total*100)}))},a.onload=()=>{if(a.status<200||a.status>=300){try{i(Error(JSON.parse(a.responseText)?.message||`Unable to upload ${e.name}.`))}catch{i(Error(`Unable to upload ${e.name}.`))}return}try{r(JSON.parse(a.responseText))}catch{i(Error(`Upload service returned an invalid response.`))}},a.onerror=()=>i(Error(`Unable to upload ${e.name}. Check your internet connection and try again.`)),a.send(e)});if(!r.storageId)throw Error(`Upload service did not return storage for ${e.name}.`);return q(e=>({...e,[t]:100})),r.storageId},Mt=e=>{if(!e)return;let t=URL.createObjectURL(e);window.open(t,`_blank`,`noopener,noreferrer`),window.setTimeout(()=>URL.revokeObjectURL(t),6e4)},Nt=e=>{let t=s.current?.elements.namedItem(e);t&&(t.value=``),H(t=>({...t,[e]:null})),W(null),I(``)},Pt=e=>{let t=V[e];return!t&&!ae?null:(0,Q.jsxs)(`span`,{className:`portal-document-controls`,children:[t&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`button`,{type:`button`,onClick:e=>{e.preventDefault(),e.stopPropagation(),Mt(t)},children:`Preview`}),(0,Q.jsx)(`button`,{type:`button`,onClick:t=>{t.preventDefault(),t.stopPropagation(),Nt(e)},children:`Remove`})]}),ae&&ee[e]!==void 0&&(0,Q.jsx)(`progress`,{max:`100`,value:ee[e],"aria-label":`${e} upload progress`})]})},Ft=async e=>{let{files:t,name:n}=e.target,r=t?.[0]??null;if(I(``),R(``),W(null),!r){H(e=>({...e,[n]:null}));return}if(!ra(r)){e.target.value=``,H(e=>({...e,[n]:null})),I(`Please upload PDF files only for all document requirements.`);return}if(r.size>na){e.target.value=``,H(e=>({...e,[n]:null})),I(`Each uploaded PDF must be 10MB or smaller.`);return}if(await r.slice(0,5).text()!==`%PDF-`){e.target.value=``,H(e=>({...e,[n]:null})),I(`This file does not appear to be a valid PDF. Choose a valid PDF document.`);return}H(e=>({...e,[n]:r}))},It=e=>{let t=e.target;if(!(t instanceof HTMLInputElement)||t.name===`emailAddress`||![`text`,`tel`,`search`,`url`].includes(t.type))return;let{selectionStart:n,selectionEnd:r}=t,i=ea(t.value);if(t.value===i)return;let a=n===null?null:ea(t.value.slice(0,n)).length,o=r===null?null:ea(t.value.slice(0,r)).length;t.value=i,a!==null&&o!==null&&t.setSelectionRange(a,o)},Lt=async e=>{e.preventDefault();let t=e.currentTarget;t.querySelectorAll(`input`).forEach(e=>{e.name!==`emailAddress`&&[`text`,`tel`,`search`,`url`].includes(e.type)&&(e.value=ea(e.value))});let n=new FormData(t),r=Zi(String(n.get(`mobileNumber`)||``)),i=String(n.get(`emailAddress`)||``).trim().toLowerCase(),a=n.get(`psaFile`),o=n.get(`schoolIdFile`),s=n.get(`corFile`),c=n.get(`pwdIdFile`),l=n.get(`fourPsFile`);if(I(``),R(``),!dt?.isReceivingApplicants){I(`The UNIFAST portal is closed for applicants right now.`);return}for(let[e,r]of[[`Student ID`,`studentId`],[`Last Name`,`lastName`],[`Given / First Name`,`firstName`],[`Birthdate`,`birthDate`],[`Program`,`course`],[`Year level`,`year`],[`Street / Purok / Barangay`,`streetBarangay`],[`City / Municipality`,`cityMunicipality`],[`Province`,`province`],[`Region`,`region`],[`ZIP Code`,`zipCode`]])if(!String(n.get(r)||``).trim()){I(`${e} is required.`),K([`streetBarangay`,`cityMunicipality`,`province`,`region`,`zipCode`].includes(r)?2:0),window.setTimeout(()=>t.elements.namedItem(r)?.focus(),0);return}let u=String(n.get(`studentId`)||``).trim();if(!Xi(u)){K(0),I(`Student ID must be 4 to 30 letters, numbers, or hyphens.`);return}let d=String(n.get(`lrn`)||``).trim();if(d&&!/^\d{12}$/.test(d)){K(0),I(`LRN must contain exactly 12 digits.`);return}let f=String(n.get(`birthDate`)||``);if(!f||new Date(`${f}T00:00:00`)>new Date){K(0),I(`Enter a valid birthdate that is not in the future.`);return}if(!ta(r)){K(2),I(`Please enter a valid mobile number. Example: 09123456789 or +639123456789.`);return}if(!Yi(i)){K(2),I(`Please enter a valid email address.`);return}if(n.get(`fatherInformationUnavailable`)!==`on`&&(!String(n.get(`fatherLastName`)||``).trim()||!String(n.get(`fatherFirstName`)||``).trim())){K(1),I(`Enter father's last and given name, or select Information unavailable.`);return}if(n.get(`motherInformationUnavailable`)!==`on`&&(!String(n.get(`motherLastName`)||``).trim()||!String(n.get(`motherFirstName`)||``).trim())){K(1),I(`Enter mother's maiden last and given name, or select Information unavailable.`);return}if(!(a instanceof File)||!a.size||!ra(a)){K(4),I(`Please upload a valid PSA Birth Certificate PDF.`);return}if(!(o instanceof File)||!o.size||!ra(o)){K(4),I(`Please upload a valid School ID or valid ID PDF.`);return}let p=[c,l,s].filter(e=>e instanceof File&&e.size);if([a,o,...p].some(e=>e.size>na)){K(4),I(`Each uploaded PDF must be 10MB or smaller.`);return}for(let e of[a,o,...p])if(!ra(e)||await e.slice(0,5).text()!==`%PDF-`){K(4),I(`${e.name} is not a valid PDF document.`);return}if(!n.get(`sexCode`)||!n.get(`course`)||!n.get(`year`)){K(0),I(`Select sex, program, and year level.`);return}if(!n.get(`soloParentDependent`)||!n.get(`firstGeneration`)){K(3),I(`Answer both additional information questions.`);return}W({studentId:u,lrn:d,philSysIdNumber:String(n.get(`philSysIdNumber`)||``).trim(),fourPsIdNumber:String(n.get(`fourPsIdNumber`)||``).trim(),lastName:String(n.get(`lastName`)||``).trim(),firstName:String(n.get(`firstName`)||``).trim(),extensionName:String(n.get(`extensionName`)||``).trim(),middleName:String(n.get(`middleName`)||``).trim(),gender:Number(n.get(`sexCode`))===0?`Male`:`Female`,sexCode:Number(n.get(`sexCode`)),birthDate:f,course:String(n.get(`course`)||``),year:String(n.get(`year`)||``),yearLevelCode:Number(String(n.get(`year`)||``).charAt(0)),fatherInformationUnavailable:n.get(`fatherInformationUnavailable`)===`on`,motherInformationUnavailable:n.get(`motherInformationUnavailable`)===`on`,fatherLastName:String(n.get(`fatherLastName`)||``).trim(),fatherFirstName:String(n.get(`fatherFirstName`)||``).trim(),fatherMiddleName:String(n.get(`fatherMiddleName`)||``).trim(),motherLastName:String(n.get(`motherLastName`)||``).trim(),motherFirstName:String(n.get(`motherFirstName`)||``).trim(),motherMiddleName:String(n.get(`motherMiddleName`)||``).trim(),streetBarangay:String(n.get(`streetBarangay`)||``).trim(),cityMunicipality:String(n.get(`cityMunicipality`)||``).trim(),province:String(n.get(`province`)||``).trim(),region:String(n.get(`region`)||``).trim(),address:[`streetBarangay`,`cityMunicipality`,`province`,`region`].map(e=>String(n.get(e)||``).trim()).join(`, `),zipCode:String(n.get(`zipCode`)||``).trim(),pwdId:String(n.get(`pwdId`)||``).trim(),mobileNumber:r,emailAddress:i,hasDisability:n.get(`hasDisability`)===`yes`,disabilityType:String(n.get(`disabilityType`)||``).trim(),soloParentDependent:Number(n.get(`soloParentDependent`)),firstGeneration:Number(n.get(`firstGeneration`)),isIndigenous:n.get(`isIndigenous`)===`yes`,indigenousGroup:String(n.get(`indigenousGroup`)||``).trim(),applicantClassification:`TES Applicant`,psaFile:a,schoolIdFile:o,corFile:s instanceof File&&s.size?s:null,pwdIdFile:c instanceof File&&c.size?c:null,fourPsFile:l instanceof File&&l.size?l:null}),K(5)},Rt=e=>{let t=s.current?.querySelector(`[data-portal-step="${e}"]`);if(!t)return!0;let n=[...t.querySelectorAll(`input, select, textarea`)].find(e=>e.required&&!e.checkValidity());return n?(n.reportValidity(),n.focus(),!1):!0},zt=e=>{I(``),!(e>G&&!Rt(G))&&K(e)},Bt=()=>{I(``),R(``),E(!1),W(null),K(0)},Vt=()=>{if(U){if(I(``),R(``),!dt?.isReceivingApplicants){I(`The UNIFAST portal is closed for applicants right now.`);return}if(!te){I(`Please certify that your information and documents are true and accurate.`);return}E(!0)}},Ht=async()=>{if(U){if(I(``),R(``),!dt?.isReceivingApplicants){I(`The UNIFAST portal is closed for applicants right now.`);return}oe(!0);try{let[e,t,n,r,i]=await Promise.all([jt(U.psaFile,`psaFile`),jt(U.schoolIdFile,`schoolIdFile`),U.corFile?jt(U.corFile,`corFile`):Promise.resolve(void 0),U.pwdIdFile?jt(U.pwdIdFile,`pwdIdFile`):Promise.resolve(void 0),U.fourPsFile?jt(U.fourPsFile,`fourPsFile`):Promise.resolve(void 0)]),a={studentId:U.studentId,lastName:U.lastName,firstName:U.firstName,extensionName:U.extensionName,middleName:U.middleName,gender:U.gender,sexCode:U.sexCode,birthDate:U.birthDate,course:U.course,year:U.year,yearLevelCode:U.yearLevelCode,lrn:U.lrn,philSysIdNumber:U.philSysIdNumber,fourPsIdNumber:U.fourPsIdNumber,fatherLastName:U.fatherLastName,fatherFirstName:U.fatherFirstName,fatherMiddleName:U.fatherMiddleName,motherLastName:U.motherLastName,motherFirstName:U.motherFirstName,motherMiddleName:U.motherMiddleName,fatherInformationUnavailable:U.fatherInformationUnavailable,motherInformationUnavailable:U.motherInformationUnavailable,address:U.address,streetBarangay:U.streetBarangay,cityMunicipality:U.cityMunicipality,province:U.province,region:U.region,zipCode:U.zipCode,pwdId:U.pwdId,mobileNumber:U.mobileNumber,emailAddress:U.emailAddress,hasDisability:U.hasDisability,disabilityType:U.disabilityType,soloParentDependent:U.soloParentDependent,firstGeneration:U.firstGeneration,isIndigenous:U.isIndigenous,indigenousGroup:U.indigenousGroup,applicantClassification:`TES Applicant`,psaFileStorageId:e,psaFileName:U.psaFile.name,schoolIdFileStorageId:t,schoolIdFileName:U.schoolIdFile.name,...n?{corFileStorageId:n,corFileName:U.corFile.name}:{}};r&&U.pwdIdFile&&(a.pwdIdFileStorageId=r,a.pwdIdFileName=U.pwdIdFile.name),i&&U.fourPsFile&&(a.fourPsFileStorageId=i,a.fourPsFileName=U.fourPsFile.name);let o=await rt(a);if(!o.success){E(!1),I(o.message||`Unable to submit applicant information.`);return}s.current?.reset(),H({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),q({}),K(0),J(!1),W(null),R(``),E(!1),g(!1),O(!0)}catch(e){E(!1),I(e instanceof Error?e.message:`Unable to submit applicant information right now.`)}finally{oe(!1)}}},Ut=()=>{A(``),ge(``),ve(``),b(!0)},Wt=e=>{i(!1),e===`login`?Ut():qt(),requestAnimationFrame(()=>{document.querySelector(e===`login`?`#admin-login-title`:`#sign-up-title`)?.closest(`.modal-card`)?.querySelector(`input`)?.focus()})},Gt=()=>{i(!1),o(`Palihog pangitaa una imong pangalan sa official grantee list sa dili pa mag-create og account.`),requestAnimationFrame(()=>{n.current?.focus({preventScroll:!0}),n.current?.scrollIntoView({block:`center`,behavior:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?`instant`:`smooth`})})},Kt=()=>{b(!1),ne(!1),A(``),ge(``),ve(``)},qt=()=>{let e=he.trim(),t=e.includes(`@`);b(!1),w(!0),Ae(``),Me(``),be(t?e.toLowerCase():``),Se(t?``:e),Ee(``),Oe(``)},Jt=()=>{w(!1),Ae(``),Me(``),be(``),Se(``),we(``),Ee(``),Oe(``)},Yt=()=>{w(!1),Ae(``),Me(``),Pe(null),ge(ye||xe),ve(``),b(!0)},Xt=()=>{let e=he.trim(),t=e.includes(`@`);b(!1),S(!0),Je(``),Xe(``),Qe(!1),Ie(t?e.toLowerCase():``),Re(t?``:e),Be(``),He(``),We(``),Ke(``)},Zt=()=>{S(!1),Je(``),Xe(``),Qe(!1),Ie(``),Re(``),Be(``),He(``),We(``),Ke(``)},Qt=()=>{ue(e=>Math.max(e-1,1))},$t=()=>{ue(e=>Math.min(e+1,yt))},en=()=>{fe(``),me(``),ue(1)},tn=e=>{fe(e.target.value),ue(1)},nn=e=>{e.target.value=Qi(e.target.value)},rn=()=>{Qe(!1),Xe(``),He(``),We(``),Ke(``)},an=e=>{let t=e.target.value;Ie(t),t.trim()&&Re(``),rn()},on=e=>{let t=e.target.value;Re(t),t.trim()&&Ie(``),rn()},sn=e=>{Be(Qi(e.target.value)),rn()},cn=()=>{let e=Fe.trim().toLowerCase(),t=Le.trim(),n=Zi(ze);return!e&&!t?`Email address or School ID is required.`:e&&t?`Use either email address or School ID, not both.`:e&&!Yi(e)?`Please enter a valid email address.`:t&&!Xi(t)?`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`:n?ta(n)?``:`Please enter a valid phone number. Example: 09123456789 or +639123456789.`:`Phone number is required.`};return(0,Q.jsxs)(`div`,{className:`landing-page`,children:[(0,Q.jsx)(`style`,{children:ma}),(0,Q.jsxs)(`header`,{className:`landing-header`,children:[(0,Q.jsxs)(`div`,{className:`brand-lockup`,children:[(0,Q.jsx)(`div`,{className:`brand-mark`,children:(0,Q.jsx)(`img`,{alt:`IBACMI`,className:`brand-mark__image`,src:Wn})}),(0,Q.jsx)(`div`,{className:`brand-copy`,children:(0,Q.jsx)(`p`,{className:`brand-title`,children:`IBACMI - Scholarship Office`})})]}),(0,Q.jsx)(`div`,{className:`header-actions`,children:(0,Q.jsx)(`button`,{className:`button button--compact button--admin`,onClick:()=>{o(``),i(!0)},type:`button`,children:`SIGN IN`})})]}),(0,Q.jsx)(`main`,{className:`landing-main`,children:(0,Q.jsxs)(`div`,{className:`landing-container`,children:[(0,Q.jsx)(`section`,{className:`page-heading`,children:(0,Q.jsxs)(`div`,{className:`page-heading__copy`,children:[(0,Q.jsx)(`span`,{className:`eyebrow`,children:`Grantee Records`}),(0,Q.jsxs)(`h2`,{className:`landing-office-title`,children:[(0,Q.jsx)(`span`,{className:`landing-office-title__school`,children:`IBACMI`}),(0,Q.jsx)(`span`,{className:`landing-office-title__separator`,"aria-hidden":`true`,children:`—`}),(0,Q.jsx)(`span`,{className:`landing-office-title__office`,children:`Scholarship Office`})]})]})}),(0,Q.jsx)(`div`,{role:`status`,"aria-live":`polite`,lang:`ceb`,children:a&&(0,Q.jsx)(`p`,{id:`grantee-verification-guidance`,className:`grantee-verification-guidance`,children:a})}),(0,Q.jsxs)(`section`,{className:`filter-panel`,"aria-label":`Grantee filters`,children:[(0,Q.jsxs)(`div`,{className:`search-field`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,Q.jsx)(`input`,{ref:n,"aria-label":`Search official grantee records`,"aria-describedby":a?`grantee-verification-guidance`:void 0,placeholder:`Enter School ID, Either Batch No., or Last Name...`,type:`text`,value:de,onChange:tn})]}),(0,Q.jsxs)(`button`,{className:`icon-button filter-button`,type:`button`,"aria-label":`Clear search`,title:`Clear search`,onClick:en,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`restart_alt`}),(0,Q.jsx)(`span`,{className:`filter-button__text`,children:`Reset`})]})]}),!pt&&(0,Q.jsxs)(`section`,{className:`scholarship-showcase`,"aria-labelledby":`scholarship-showcase-title`,children:[(0,Q.jsxs)(`div`,{className:`scholarship-showcase__heading`,children:[(0,Q.jsx)(`div`,{children:(0,Q.jsx)(`span`,{className:`eyebrow`,children:`Scholarship Office`})}),(0,Q.jsxs)(`span`,{className:`scholarship-showcase__status`,children:[(0,Q.jsx)(`span`,{"aria-hidden":`true`}),`Official Information`]})]}),(0,Q.jsxs)(`a`,{className:`scholarship-showcase__image-link`,href:`/IBACMI-Scholarship-Office/assets/desktop-Di8cTPxJ.png`,rel:`noreferrer`,target:`_blank`,title:`Open the Scholarship Office banner in full size`,children:[(0,Q.jsx)(`img`,{alt:`IBACMI Scholarship Office banner featuring the scholarship coordinator and students assistant`,decoding:`async`,src:`/IBACMI-Scholarship-Office/assets/desktop-Di8cTPxJ.png`}),(0,Q.jsxs)(`span`,{className:`scholarship-showcase__view`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`open_in_full`}),`View full banner`]})]})]}),!pt&&(0,Q.jsx)(Gi,{}),pt&&(0,Q.jsxs)(`section`,{className:`table-card`,"aria-label":`Filtered grantee records`,children:[(0,Q.jsx)(`div`,{className:`table-scroll`,children:(0,Q.jsxs)(`table`,{children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:`No.`}),(0,Q.jsx)(`th`,{children:`TES Award Number`}),(0,Q.jsx)(`th`,{children:`Student ID`}),(0,Q.jsx)(`th`,{children:`Last Name`}),(0,Q.jsx)(`th`,{children:`First Name`}),(0,Q.jsx)(`th`,{children:`Middle Name`}),(0,Q.jsx)(`th`,{children:`Batch No.`}),(0,Q.jsx)(`th`,{children:`Status`}),(0,Q.jsx)(`th`,{children:`Semester`}),(0,Q.jsx)(`th`,{children:`School Year`})]})}),(0,Q.jsxs)(`tbody`,{children:[ut===void 0&&pe&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`Searching grantee record...`})}),ut&&_t.length===0&&(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`No matching School ID, Batch No./ID, or name found.`})}),St.map((e,t)=>(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`td`,{"data-label":`No.`,children:e.no||bt+t+1}),(0,Q.jsx)(`td`,{className:`award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,Q.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,Q.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`â€”`}),(0,Q.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`â€”`}),(0,Q.jsx)(`td`,{"data-label":`Middle Name`,children:e.middleName||e.middleInitial||`â€”`}),(0,Q.jsx)(`td`,{className:`batch-cell`,"data-label":`Batch ID`,children:e.batchId}),(0,Q.jsx)(`td`,{"data-label":`Status`,children:(0,Q.jsx)(Ki,{status:e.status,tone:qi(e.status)})}),(0,Q.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,Q.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`})]},e._id))]})]})}),(0,Q.jsxs)(`div`,{className:`table-footer`,children:[(0,Q.jsxs)(`p`,{children:[`Showing `,(0,Q.jsx)(`strong`,{children:vt===0?0:bt+1}),` to`,` `,(0,Q.jsx)(`strong`,{children:xt}),` of `,(0,Q.jsx)(`strong`,{children:vt}),` result`,vt===1?``:`s`]}),(0,Q.jsxs)(`div`,{className:`pagination`,children:[(0,Q.jsx)(`button`,{className:`page-button`,disabled:le===1||vt===0,onClick:Qt,type:`button`,"aria-label":`Previous page`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Ct.map(e=>typeof e==`string`?(0,Q.jsx)(`span`,{className:`pagination__ellipsis`,children:`...`},e):(0,Q.jsx)(`button`,{className:`page-button ${le===e?`page-button--active`:``}`,disabled:vt===0,onClick:()=>ue(e),type:`button`,children:e},e)),(0,Q.jsx)(`button`,{className:`page-button`,disabled:le===yt||vt===0,onClick:$t,type:`button`,"aria-label":`Next page`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]}),ht&&(0,Q.jsxs)(`section`,{className:`portal-cta`,"aria-labelledby":`portal-cta-title`,children:[(0,Q.jsx)(`div`,{className:`portal-cta__icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`assignment`})}),(0,Q.jsxs)(`div`,{className:`portal-cta__copy`,children:[(0,Q.jsx)(`span`,{className:`eyebrow`,children:`Unified Student Financial Assistance System for Tertiary Education`}),(0,Q.jsx)(`h3`,{id:`portal-cta-title`,children:`UNIFAST APPLICATION`}),(0,Q.jsx)(`p`,{children:`Complete the student, parent, address, and contact information form for UNIFAST applicant processing.`})]}),(0,Q.jsxs)(`button`,{"aria-label":mt?`Checking UNIFAST portal status`:ht?`UNIFAST portal is open. Open application form`:`UNIFAST portal is closed`,className:`button button--portal ${mt?`button--portal-loading`:ht?`button--portal-open`:`button--portal-closed`}`,disabled:mt,onClick:Dt,type:`button`,children:[(0,Q.jsx)(`span`,{className:`portal-status-dot`,"aria-hidden":`true`}),mt?`CHECKING PORTAL`:ht?`PORTAL OPEN`:`PORTAL IS CLOSED`]})]})]})}),(0,Q.jsx)(`footer`,{className:`landing-footer`,children:(0,Q.jsxs)(`p`,{children:[`Copyright 2026 | All Rights Reserved IBACMI - Scholarship Office |`,` `,(0,Q.jsx)(`button`,{className:`landing-footer__download`,onClick:gt,type:`button`,children:d?`App installed`:`Download app`}),` `,`| Developed By CINIFIX Technology`]})}),_&&(0,Q.jsxs)(`div`,{"aria-labelledby":`grantee-question-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close grantee question`,className:`modal-backdrop-button`,onClick:()=>v(!1),type:`button`}),(0,Q.jsxs)(`section`,{className:`modal-card portal-grantee-modal`,children:[(0,Q.jsx)(`div`,{className:`portal-grantee-icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`school`})}),(0,Q.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST APPLICATION`}),(0,Q.jsx)(`h3`,{id:`grantee-question-title`,children:`Grantee ka?`}),(0,Q.jsx)(`p`,{className:`portal-grantee-copy`,children:`Are you an existing UniFAST grantee?`}),(0,Q.jsxs)(`div`,{className:`portal-grantee-actions`,children:[(0,Q.jsx)(`button`,{className:`button button--secondary`,onClick:kt,type:`button`,children:`Yes`}),(0,Q.jsx)(`button`,{className:`button`,onClick:Ot,type:`button`,children:`No`})]})]})]}),h&&(0,Q.jsxs)(`div`,{"aria-labelledby":`unifast-portal-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close UNIFAST portal modal`,className:`modal-backdrop-button`,onClick:At,type:`button`}),(0,Q.jsxs)(`form`,{className:`modal-card portal-modal-card`,noValidate:!0,ref:s,onInput:It,onSubmit:Lt,children:[(0,Q.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,Q.jsxs)(`div`,{className:`modal-title-row`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,Q.jsx)(`h3`,{id:`unifast-portal-title`,children:`Student Information Form`}),(0,Q.jsxs)(`p`,{children:[`Complete the student, parent, and contact information fields below`,dt?.applicationYear?` for ${dt.applicationYear}.`:`.`]})]}),(0,Q.jsx)(`button`,{"aria-label":`Close UNIFAST portal`,className:`icon-button modal-close`,onClick:At,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,Q.jsx)(`nav`,{className:`portal-stepper`,"aria-label":`Application form progress`,children:da.map((e,t)=>(0,Q.jsxs)(`button`,{type:`button`,disabled:t>=5||t>=G,className:`portal-stepper__step${G===t?` is-active`:``}${G>t?` is-complete`:``}`,"aria-current":G===t?`step`:void 0,onClick:()=>{if(!(t>=5)){if(U){W(null),J(!1),K(t);return}t<G&&zt(t)}},children:[(0,Q.jsx)(`span`,{children:G>t?`✓`:t+1}),(0,Q.jsx)(`small`,{children:e})]},e))}),(0,Q.jsxs)(`div`,{className:`modal-body portal-form${U?` portal-form--hidden`:``}`,children:[(0,Q.jsx)(`div`,{className:`portal-step-panel${G===0?` is-active`:``}`,"data-portal-step":`0`,children:(0,Q.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-student-heading`,children:[(0,Q.jsx)(`h4`,{id:`portal-student-heading`,children:`Student Information`}),(0,Q.jsxs)(`div`,{className:`portal-grid`,children:[sa.map(e=>(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:e.label}),(0,Q.jsx)(`input`,{autoComplete:e.autoComplete,maxLength:e.name===`studentId`?30:e.name===`lrn`?12:void 0,name:e.name,pattern:e.name===`studentId`?`[A-Za-z0-9-]{4,30}`:e.pattern,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:`text`}),e.helper&&(0,Q.jsx)(`small`,{className:`portal-field-helper`,children:e.helper})]},e.name)),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Sex`}),(0,Q.jsxs)(`select`,{name:`sexCode`,defaultValue:``,required:!0,children:[(0,Q.jsx)(`option`,{value:``,disabled:!0,children:`Select sex`}),(0,Q.jsx)(`option`,{value:`0`,children:`Male`}),(0,Q.jsx)(`option`,{value:`1`,children:`Female`})]})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Birth Date`}),(0,Q.jsx)(`input`,{name:`birthDate`,max:new Date().toISOString().slice(0,10),required:!0,type:`date`})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Year`}),(0,Q.jsxs)(`select`,{name:`year`,defaultValue:``,required:!0,children:[(0,Q.jsx)(`option`,{value:``,disabled:!0,children:`Select year`}),(0,Q.jsx)(`option`,{value:`1st Year`,children:`1st Year`}),(0,Q.jsx)(`option`,{value:`2nd Year`,children:`2nd Year`}),(0,Q.jsx)(`option`,{value:`3rd Year`,children:`3rd Year`}),(0,Q.jsx)(`option`,{value:`4th Year`,children:`4th Year`}),(0,Q.jsx)(`option`,{value:`5th Year`,children:`5th Year`}),(0,Q.jsx)(`option`,{value:`6th Year`,children:`6th Year`})]})]}),(0,Q.jsxs)(`fieldset`,{className:`portal-course-list`,children:[(0,Q.jsx)(`legend`,{children:`Course`}),ua.map(e=>(0,Q.jsxs)(`label`,{className:`portal-course-option`,children:[(0,Q.jsx)(`input`,{name:`course`,required:!0,type:`radio`,value:e}),(0,Q.jsx)(`span`,{children:e})]},e))]})]})]})}),(0,Q.jsx)(`div`,{className:`portal-step-panel${G===1?` is-active`:``}`,"data-portal-step":`1`,children:(0,Q.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-parents-heading`,children:[(0,Q.jsx)(`h4`,{id:`portal-parents-heading`,children:`Parent Information`}),(0,Q.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,Q.jsx)(`p`,{children:`Father's Name`}),(0,Q.jsxs)(`label`,{className:`portal-unavailable`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,name:`fatherInformationUnavailable`}),` Information unavailable`]}),(0,Q.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:ca.map(e=>(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:e.label}),(0,Q.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter father's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]}),(0,Q.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,Q.jsx)(`p`,{children:`Mother's Maiden Name`}),(0,Q.jsxs)(`label`,{className:`portal-unavailable`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,name:`motherInformationUnavailable`}),` Information unavailable`]}),(0,Q.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:la.map(e=>(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:e.label}),(0,Q.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter mother's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]})]})}),(0,Q.jsx)(`div`,{className:`portal-step-panel${G===2?` is-active`:``}`,"data-portal-step":`2`,children:(0,Q.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-contact-heading`,children:[(0,Q.jsx)(`h4`,{id:`portal-contact-heading`,children:`Permanent Address & Contact`}),(0,Q.jsx)(`div`,{className:`portal-grid`,children:fa.map(e=>(0,Q.jsxs)(`label`,{className:`form-field ${e.className??``}`.trim(),children:[(0,Q.jsx)(`span`,{children:e.label}),(0,Q.jsx)(`input`,{autoComplete:e.autoComplete,inputMode:e.inputMode,name:e.name,onInput:e.name===`mobileNumber`?nn:void 0,pattern:e.pattern,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:e.type??`text`})]},e.name))})]})}),(0,Q.jsx)(`div`,{className:`portal-step-panel${G===3?` is-active`:``}`,"data-portal-step":`3`,children:(0,Q.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-additional-heading`,children:[(0,Q.jsx)(`h4`,{id:`portal-additional-heading`,children:`Additional Student Information`}),(0,Q.jsxs)(`div`,{className:`portal-grid`,children:[(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Do you have a disability?`}),(0,Q.jsxs)(`select`,{name:`hasDisability`,defaultValue:``,required:!0,children:[(0,Q.jsx)(`option`,{value:``,disabled:!0,children:`Select one`}),(0,Q.jsx)(`option`,{value:`no`,children:`No`}),(0,Q.jsx)(`option`,{value:`yes`,children:`Yes`})]})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsxs)(`span`,{children:[`Please specify your disability type `,(0,Q.jsx)(`small`,{children:`(if applicable)`})]}),(0,Q.jsx)(`input`,{name:`disabilityType`,maxLength:120,placeholder:`Optional`})]}),(0,Q.jsxs)(`fieldset`,{className:`portal-choice-field`,children:[(0,Q.jsx)(`legend`,{children:`Are you a dependent or child of a solo parent?`}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`input`,{type:`radio`,name:`soloParentDependent`,value:`1`,required:!0}),` Yes`]}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`input`,{type:`radio`,name:`soloParentDependent`,value:`0`}),` No`]})]}),(0,Q.jsxs)(`fieldset`,{className:`portal-choice-field`,children:[(0,Q.jsx)(`legend`,{children:`Are you a first-generation college student?`}),(0,Q.jsx)(`p`,{children:`Neither of your parents or legal guardians attended college or completed a college degree.`}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`input`,{type:`radio`,name:`firstGeneration`,value:`1`,required:!0}),` Yes`]}),(0,Q.jsxs)(`label`,{children:[(0,Q.jsx)(`input`,{type:`radio`,name:`firstGeneration`,value:`0`}),` No`]})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Do you belong to an Indigenous Peoples (IP) group?`}),(0,Q.jsxs)(`select`,{name:`isIndigenous`,defaultValue:``,required:!0,children:[(0,Q.jsx)(`option`,{value:``,disabled:!0,children:`Select one`}),(0,Q.jsx)(`option`,{value:`no`,children:`No`}),(0,Q.jsx)(`option`,{value:`yes`,children:`Yes`})]})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsxs)(`span`,{children:[`Please specify your IP group `,(0,Q.jsx)(`small`,{children:`(if applicable)`})]}),(0,Q.jsx)(`input`,{name:`indigenousGroup`,maxLength:120,placeholder:`Optional`})]}),(0,Q.jsxs)(`div`,{className:`portal-classification`,children:[(0,Q.jsx)(`span`,{children:`Applicant Classification`}),(0,Q.jsx)(`strong`,{children:`TES Applicant`}),(0,Q.jsx)(`small`,{children:`This classification is assigned by the Scholarship Office.`})]})]})]})}),(0,Q.jsx)(`div`,{className:`portal-step-panel${G===4?` is-active`:``}`,"data-portal-step":`4`,children:(0,Q.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-documents-heading`,children:[(0,Q.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,Q.jsx)(`h4`,{id:`portal-documents-heading`,children:`Document Requirements`}),(0,Q.jsx)(`p`,{children:`Upload clear PDF copies up to 10MB each. Required and optional documents are labeled below.`})]}),(0,Q.jsxs)(`div`,{className:`portal-document-grid`,children:[(0,Q.jsxs)(`label`,{className:`portal-document-upload${V.psaFile?` portal-document-upload--selected`:``}`,children:[(0,Q.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`psaFile`,onChange:Ft,required:!0,type:`file`}),(0,Q.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`})}),(0,Q.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,Q.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,Q.jsx)(`strong`,{children:`PSA Birth Certificate`}),(0,Q.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,Q.jsx)(`span`,{children:V.psaFile?`${V.psaFile.name} (${ia(V.psaFile.size)})`:`Select PSA PDF file`}),Pt(`psaFile`)]})]}),(0,Q.jsxs)(`label`,{className:`portal-document-upload${V.schoolIdFile?` portal-document-upload--selected`:``}`,children:[(0,Q.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`schoolIdFile`,onChange:Ft,required:!0,type:`file`}),(0,Q.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`})}),(0,Q.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,Q.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,Q.jsx)(`strong`,{children:`School ID / Valid ID with Three Signatures`}),(0,Q.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,Q.jsx)(`span`,{children:V.schoolIdFile?`${V.schoolIdFile.name} (${ia(V.schoolIdFile.size)})`:`Upload a clear School ID or valid ID showing three specimen signatures.`}),Pt(`schoolIdFile`)]})]}),(0,Q.jsxs)(`label`,{className:`portal-document-upload${V.corFile?` portal-document-upload--selected`:``}`,children:[(0,Q.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`corFile`,onChange:Ft,type:`file`}),(0,Q.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`description`})}),(0,Q.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,Q.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,Q.jsx)(`strong`,{children:`COR / Study Load`}),(0,Q.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,Q.jsx)(`span`,{children:V.corFile?`${V.corFile.name} (${ia(V.corFile.size)})`:`Attach a COR or Study Load PDF, if available.`}),Pt(`corFile`)]})]}),(0,Q.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${V.pwdIdFile?` portal-document-upload--selected`:``}`,children:[(0,Q.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`pwdIdFile`,onChange:Ft,type:`file`}),(0,Q.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`})}),(0,Q.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,Q.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,Q.jsx)(`strong`,{children:`PWD ID`}),(0,Q.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,Q.jsx)(`span`,{children:V.pwdIdFile?`${V.pwdIdFile.name} (${ia(V.pwdIdFile.size)})`:`Attach a clear PWD ID PDF, if applicable`}),Pt(`pwdIdFile`)]})]}),(0,Q.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${V.fourPsFile?` portal-document-upload--selected`:``}`,children:[(0,Q.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`fourPsFile`,onChange:Ft,type:`file`}),(0,Q.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`})}),(0,Q.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,Q.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,Q.jsx)(`strong`,{children:`4Ps ID`}),(0,Q.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,Q.jsx)(`span`,{children:V.fourPsFile?`${V.fourPsFile.name} (${ia(V.fourPsFile.size)})`:`Attach a clear 4Ps ID PDF, if applicable`}),Pt(`fourPsFile`)]})]})]})]})})]}),U&&(0,Q.jsx)(`div`,{className:`modal-body portal-review`,children:(0,Q.jsxs)(`section`,{className:`portal-review-card`,"aria-labelledby":`portal-review-heading`,children:[(0,Q.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,Q.jsx)(`h4`,{id:`portal-review-heading`,children:`Review Information`}),(0,Q.jsx)(`p`,{children:`Please check every detail before final submission.`})]}),(0,Q.jsxs)(`div`,{className:`portal-review-grid`,children:[(0,Q.jsxs)(`div`,{className:`portal-review-group`,children:[(0,Q.jsx)(`h5`,{children:`Student Information`}),(0,Q.jsxs)(`dl`,{children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Student ID`}),(0,Q.jsx)(`dd`,{children:U.studentId})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`LRN`}),(0,Q.jsx)(`dd`,{children:U.lrn||`Not assigned / not provided`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`PhilSys ID`}),(0,Q.jsx)(`dd`,{children:U.philSysIdNumber||`Not provided`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`4Ps ID Number`}),(0,Q.jsx)(`dd`,{children:U.fourPsIdNumber||`Not provided`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Full Name`}),(0,Q.jsx)(`dd`,{children:[U.firstName,U.middleName,U.lastName,U.extensionName].filter(Boolean).join(` `)})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Gender`}),(0,Q.jsx)(`dd`,{children:U.gender})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Birth Date`}),(0,Q.jsx)(`dd`,{children:U.birthDate})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Year`}),(0,Q.jsx)(`dd`,{children:U.year})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Course`}),(0,Q.jsx)(`dd`,{children:U.course})]})]})]}),(0,Q.jsxs)(`div`,{className:`portal-review-group`,children:[(0,Q.jsx)(`h5`,{children:`Parents Information`}),(0,Q.jsxs)(`dl`,{children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Father`}),(0,Q.jsx)(`dd`,{children:[U.fatherFirstName,U.fatherMiddleName,U.fatherLastName].filter(Boolean).join(` `)||(U.fatherInformationUnavailable?`Information unavailable`:`Not provided`)})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Mother`}),(0,Q.jsx)(`dd`,{children:[U.motherFirstName,U.motherMiddleName,U.motherLastName].filter(Boolean).join(` `)||(U.motherInformationUnavailable?`Information unavailable`:`Not provided`)})]})]})]}),(0,Q.jsxs)(`div`,{className:`portal-review-group`,children:[(0,Q.jsx)(`h5`,{children:`Address and Contact`}),(0,Q.jsxs)(`dl`,{children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Permanent Address`}),(0,Q.jsx)(`dd`,{children:U.address})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Zip Code`}),(0,Q.jsx)(`dd`,{children:U.zipCode||`Not provided`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`PWD ID`}),(0,Q.jsx)(`dd`,{children:U.pwdId||`Not provided`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Mobile No.`}),(0,Q.jsx)(`dd`,{children:U.mobileNumber})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Email Address`}),(0,Q.jsx)(`dd`,{children:U.emailAddress})]})]})]}),(0,Q.jsxs)(`div`,{className:`portal-review-group`,children:[(0,Q.jsx)(`h5`,{children:`Additional Information`}),(0,Q.jsxs)(`dl`,{children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Disability`}),(0,Q.jsx)(`dd`,{children:U.hasDisability?U.disabilityType||`Yes — details not specified`:`No`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Solo Parent Dependent`}),(0,Q.jsx)(`dd`,{children:U.soloParentDependent?`Yes (1)`:`No (0)`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`First Generation`}),(0,Q.jsx)(`dd`,{children:U.firstGeneration?`Yes (1)`:`No (0)`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Indigenous Peoples Group`}),(0,Q.jsx)(`dd`,{children:U.isIndigenous?U.indigenousGroup||`Yes — group not specified`:`No`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`Classification`}),(0,Q.jsx)(`dd`,{children:`TES Applicant`})]})]})]}),(0,Q.jsxs)(`div`,{className:`portal-review-group`,children:[(0,Q.jsx)(`h5`,{children:`Documents`}),(0,Q.jsxs)(`dl`,{children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`PSA Birth Certificate`}),(0,Q.jsxs)(`dd`,{children:[U.psaFile.name,` (`,ia(U.psaFile.size),`)`]})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`School ID Photocopy`}),(0,Q.jsxs)(`dd`,{children:[U.schoolIdFile.name,` (`,ia(U.schoolIdFile.size),`)`]})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`COR / Study Load`}),(0,Q.jsx)(`dd`,{children:U.corFile?`${U.corFile.name} (${ia(U.corFile.size)})`:`Not provided (optional)`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`PWD ID (Optional)`}),(0,Q.jsx)(`dd`,{children:U.pwdIdFile?`${U.pwdIdFile.name} (${ia(U.pwdIdFile.size)})`:`Not provided`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`dt`,{children:`4Ps ID (Optional)`}),(0,Q.jsx)(`dd`,{children:U.fourPsFile?`${U.fourPsFile.name} (${ia(U.fourPsFile.size)})`:`Not provided`})]})]})]})]}),(0,Q.jsxs)(`label`,{className:`portal-acknowledgment`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,checked:te,onChange:e=>J(e.target.checked)}),` I certify that the information and documents I have submitted are true and accurate to the best of my knowledge.`]}),(0,Q.jsx)(`p`,{className:`portal-review-privacy`,children:`Your information and supporting documents will be used by the Scholarship Office for TES application processing, eligibility verification, and related scholarship administration.`})]})}),(F||L)&&(0,Q.jsxs)(`div`,{className:`portal-message-row`,children:[F&&(0,Q.jsx)(`p`,{className:`form-error`,children:F}),L&&(0,Q.jsx)(`p`,{className:`form-success`,children:L})]}),(0,Q.jsx)(`div`,{className:`modal-actions portal-actions`,children:U?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`button`,{className:`button button--secondary`,disabled:ae,onClick:()=>{W(null),K(4),J(!1)},type:`button`,children:`Previous`}),(0,Q.jsx)(`button`,{className:`button button--secondary`,disabled:ae,onClick:Bt,type:`button`,children:`Edit Information`}),(0,Q.jsx)(`button`,{className:`button`,disabled:ae,onClick:Vt,type:`button`,children:`Submit Application`})]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`button`,{className:`button button--secondary`,disabled:ae,onClick:At,type:`button`,children:`Cancel`}),G>0&&(0,Q.jsx)(`button`,{className:`button button--secondary`,disabled:ae,onClick:()=>zt(G-1),type:`button`,children:`Previous`}),G<4?(0,Q.jsx)(`button`,{className:`button`,disabled:ae,onClick:()=>zt(G+1),type:`button`,children:`Continue`}):(0,Q.jsx)(`button`,{className:`button`,disabled:ae,onClick:()=>Lt({preventDefault(){},currentTarget:s.current}),type:`button`,children:`Review & Submit`})]})})]})]}),T&&(0,Q.jsxs)(`div`,{"aria-labelledby":`portal-privacy-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Return to application review`,className:`modal-backdrop-button`,disabled:ae,onClick:()=>E(!1),type:`button`}),(0,Q.jsxs)(`section`,{className:`modal-card portal-privacy-card`,children:[(0,Q.jsxs)(`div`,{className:`success-modal-body`,children:[(0,Q.jsx)(`div`,{className:`portal-privacy-icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`privacy_tip`})}),(0,Q.jsx)(`p`,{className:`modal-kicker`,children:`Data Privacy Notice`}),(0,Q.jsx)(`h3`,{id:`portal-privacy-title`,children:`Your Privacy Matters`}),(0,Q.jsx)(`p`,{children:`I understand that the personal information I provide will be collected, stored, and processed by the Scholarship Office solely for scholarship administration, verification, monitoring, and related educational purposes. I am informed that my data will be kept confidential and protected in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173), and will only be accessed by authorized personnel when necessary.`})]}),(0,Q.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,Q.jsx)(`button`,{className:`button`,disabled:ae,onClick:Ht,type:`button`,children:ae?`Submitting...`:`I UNDERSTAND`})})]})]}),D&&(0,Q.jsxs)(`div`,{"aria-labelledby":`portal-submission-success-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close application success modal`,className:`modal-backdrop-button`,onClick:()=>O(!1),type:`button`}),(0,Q.jsxs)(`section`,{className:`modal-card modal-card--success`,children:[(0,Q.jsxs)(`div`,{className:`success-modal-body`,children:[(0,Q.jsx)(`div`,{className:`success-icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,Q.jsx)(`h3`,{id:`portal-submission-success-title`,children:`Application Submitted Successfully`}),(0,Q.jsxs)(`p`,{children:[`Please wait for the UNIFAST results. You will be notified through the Facebook page, `,(0,Q.jsx)(`strong`,{children:`Iba College of Mindanao Inc. - Scholarship Office`}),`.`]})]}),(0,Q.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,Q.jsx)(`button`,{className:`button`,onClick:()=>O(!1),type:`button`,children:`Done`})})]})]}),z&&(0,Q.jsxs)(`div`,{"aria-labelledby":`portal-status-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close portal status modal`,className:`modal-backdrop-button`,onClick:()=>B(``),type:`button`}),(0,Q.jsxs)(`section`,{className:`modal-card portal-status-card`,children:[(0,Q.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,Q.jsxs)(`div`,{className:`modal-title-row`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`h3`,{id:`portal-status-title`,children:`Portal Status`}),(0,Q.jsx)(`p`,{children:z})]}),(0,Q.jsx)(`button`,{"aria-label":`Close portal status`,className:`icon-button modal-close`,onClick:()=>B(``),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,Q.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,Q.jsx)(`button`,{className:`button`,onClick:()=>B(``),type:`button`,children:`OK`})})]})]}),p&&(0,Q.jsxs)(`div`,{"aria-labelledby":`quick-actions-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close quick actions modal`,className:`modal-backdrop-button`,onClick:Et,type:`button`}),(0,Q.jsxs)(`form`,{className:`modal-card modal-card--wide auth-modal-card`,onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=String(n.get(`email`)||``).trim().toLowerCase(),i=String(n.get(`studentId`)||``).trim(),a=String(n.get(`lastName`)||``).trim(),o=String(n.get(`firstName`)||``).trim(),s=String(n.get(`middleInitial`)||``).trim(),c=$i(String(n.get(`question`)||``)).trim();M(``),P(``),ie(!0);try{if(!Yi(r))throw Error(`Please enter a valid email account.`);if(!Xi(i))throw Error(`Please enter a valid Student ID.`);if(!a||!o)throw Error(`Last name and first name are required.`);if(s&&!/^[A-Za-z. -]{1,10}$/.test(s))throw Error(`Please enter a valid middle initial.`);if(!c)throw Error(`Please enter your question or request.`);if(c.length>500)throw Error(`Your question must be 500 characters or fewer.`);await at({email:r,studentId:i,lastName:a,firstName:o,middleInitial:s,question:c,source:Ei.quickActions.source,status:Ei.quickActions.defaultStatus}),t.reset(),m(!1),P(`Your request has been submitted.`)}catch(e){M(e instanceof Error?e.message:`Unable to submit your request right now.`)}finally{ie(!1)}},children:[(0,Q.jsxs)(`div`,{className:`modal-header`,children:[(0,Q.jsxs)(`div`,{className:`modal-title-row`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`modal-kicker`,children:`Quick Actions`}),(0,Q.jsx)(`h3`,{id:`quick-actions-title`,children:`Submit a Request`})]}),(0,Q.jsx)(`button`,{"aria-label":`Close modal`,className:`icon-button modal-close`,onClick:Et,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,Q.jsx)(`p`,{children:`Send a question or request to the scholarship office for review.`})]}),(0,Q.jsxs)(`div`,{className:`modal-body quick-action-form-grid`,children:[(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Student ID`}),(0,Q.jsx)(`input`,{autoComplete:`off`,name:`studentId`,placeholder:`Enter Student ID`,required:!0})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Email account`}),(0,Q.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`email`,placeholder:Ei.quickActions.fields.email.placeholder,required:!0,type:`email`})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Last name`}),(0,Q.jsx)(`input`,{autoComplete:`family-name`,name:`lastName`,placeholder:`Enter last name`,required:!0})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`First name`}),(0,Q.jsx)(`input`,{autoComplete:`given-name`,name:`firstName`,placeholder:`Enter first name`,required:!0})]}),(0,Q.jsxs)(`label`,{className:`form-field quick-action-mi-field`,children:[(0,Q.jsx)(`span`,{children:`MI`}),(0,Q.jsx)(`input`,{autoComplete:`additional-name`,maxLength:10,name:`middleInitial`,placeholder:`M`})]}),(0,Q.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,Q.jsx)(`span`,{children:`Question`}),(0,Q.jsx)(`textarea`,{"aria-describedby":`quick-action-question-help`,maxLength:500,name:`question`,onInput:e=>{e.currentTarget.value=$i(e.currentTarget.value)},placeholder:Ei.quickActions.fields.question.placeholder,required:!0,rows:4}),(0,Q.jsx)(`small`,{className:`form-field__help`,id:`quick-action-question-help`,children:`One paragraph only, up to 500 characters.`})]}),j&&(0,Q.jsx)(`p`,{className:`form-error auth-full-field`,children:j})]}),(0,Q.jsxs)(`div`,{className:`modal-actions`,children:[(0,Q.jsx)(`button`,{className:`button button--secondary`,disabled:re,onClick:Et,type:`button`,children:`Cancel`}),(0,Q.jsx)(`button`,{className:`button`,disabled:re,type:`submit`,children:re?`Submitting...`:`Submit`})]})]})]}),r&&(0,Q.jsx)(Pi,{onDismiss:()=>i(!1),onLogin:()=>Wt(`login`),onRegister:()=>Wt(`register`),onSearch:Gt}),y&&(0,Q.jsxs)(`div`,{"aria-labelledby":`admin-login-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close admin login modal`,className:`modal-backdrop-button`,onClick:Kt,type:`button`}),(0,Q.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card`,onSubmit:async t=>{t.preventDefault();let n=he.trim(),r=_e,i=n.includes(`@`),a=i?n.toLowerCase():``,o=i?``:n;if(A(``),!n){A(`Enter your official registered email address or School ID.`);return}if(i&&!Yi(a)){A(`Please enter a valid registered email address.`);return}if(!i&&!Xi(o)){A(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(!r){A(`Password is required.`);return}if(!aa(r)){A(`Password must be at least 6 characters.`);return}let s={password:r,...i?{email:a}:{schoolId:o}};ne(!0);try{let t=await oa(ot(s),15e3,`Login is taking too long. Please check your internet connection is running, then try again.`);if(!t.success){A(t.message||`Invalid admin credentials.`);return}b(!1),typeof e==`function`&&e(t.admin)}catch(e){A(e instanceof Error?e.message:`Unable to login right now.`)}finally{ne(!1)}},children:[(0,Q.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,Q.jsx)(`div`,{className:`admin-login-brand`,children:(0,Q.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,Q.jsx)(`button`,{"aria-label":`Close admin login`,className:`icon-button modal-close admin-login-close`,onClick:Kt,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,Q.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,Q.jsx)(`h3`,{id:`admin-login-title`,children:`Sign in`})]}),(0,Q.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,Q.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,Q.jsx)(`span`,{children:`Official Registered Email or School ID`}),(0,Q.jsx)(`input`,{autoCapitalize:`none`,autoComplete:`username`,maxLength:254,name:`adminIdentifier`,placeholder:`Enter your official registered email or School ID`,required:!0,spellCheck:!1,type:`text`,value:he,onChange:e=>ge(e.target.value)})]}),(0,Q.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,Q.jsx)(`span`,{children:`Password`}),(0,Q.jsx)(`input`,{autoComplete:`current-password`,name:`adminPassword`,placeholder:`Enter password`,required:!0,type:`password`,minLength:6,value:_e,onChange:e=>ve(e.target.value)})]}),(0,Q.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`info`}),(0,Q.jsx)(`p`,{children:`Enter either your official registered email address or your School ID. Your password is still required.`})]}),(0,Q.jsxs)(`div`,{className:`auth-link-row auth-full-field`,children:[(0,Q.jsx)(`button`,{className:`auth-text-button`,disabled:Y,onClick:Xt,type:`button`,children:`Forgot Password?`}),(0,Q.jsx)(`button`,{className:`auth-text-button auth-text-button--strong`,disabled:Y,onClick:qt,type:`button`,children:`Create Account`})]}),k&&(0,Q.jsx)(`p`,{className:`form-error auth-full-field`,children:k})]}),(0,Q.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,Q.jsx)(`button`,{className:`button button--secondary`,disabled:Y,onClick:Kt,type:`button`,children:`Cancel`}),(0,Q.jsx)(`button`,{className:`button`,disabled:Y,type:`submit`,children:Y?`Logging in...`:`Login`})]})]})]}),C&&(0,Q.jsxs)(`div`,{"aria-labelledby":`sign-up-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close sign up modal`,className:`modal-backdrop-button`,onClick:Jt,type:`button`}),(0,Q.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=ye.trim().toLowerCase(),n=xe.trim(),r=Zi(Ce),i=Te,a=De;if(Ae(``),Me(``),!t){Ae(`Email account is required.`);return}if(!Yi(t)){Ae(`Please enter a valid email account.`);return}if(!n){Ae(`School ID is required.`);return}if(!Xi(n)){Ae(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(!r){Ae(`Phone number is required.`);return}if(!ta(r)){Ae(`Please enter a valid phone number. Example: 09123456789 or +639123456789.`);return}if(!i){Ae(`Password is required.`);return}if(!aa(i)){Ae(`Password must be at least 6 characters.`);return}if(!a){Ae(`Confirm password is required.`);return}if(i!==a){Ae(`Password and confirm password do not match.`);return}ce(!0);try{let e=await st({email:t,schoolId:n,phoneNumber:r,password:i});if(!e.success){Ae(`Dili makompleto ang pagrehistro gamit niini nga mga detalye. Palihog i-check ang imong impormasyon, pag-login o gamita ang Forgot Password kung naa na kay account, o kontaka ang Scholarship Office.`);return}w(!1),Pe(e.admin??{email:t,schoolId:n,role:`student`}),Me(`Your account has been registered successfully.`),ge(t||n),ve(``),we(``),Ee(``),Oe(``)}catch{Ae(`Dili makompleto ang pagrehistro karon. Palihog sulayi pag-usab o kontaka ang Scholarship Office.`)}finally{ce(!1)}},children:[(0,Q.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,Q.jsx)(`div`,{className:`admin-login-brand`,children:(0,Q.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,Q.jsx)(`button`,{"aria-label":`Close sign up`,className:`icon-button modal-close admin-login-close`,onClick:Jt,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,Q.jsx)(`p`,{className:`modal-kicker`,children:`Account Registration`}),(0,Q.jsx)(`h3`,{id:`sign-up-title`,children:`Create Account`}),(0,Q.jsx)(`p`,{children:`Registration is only available for verified School IDs listed in the IBACMI Scholarship Office records.`})]}),(0,Q.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Email account`}),(0,Q.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`signUpEmail`,placeholder:`Enter email account`,required:!0,type:`email`,value:ye,onChange:e=>be(e.target.value)})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`School ID`}),(0,Q.jsx)(`input`,{autoComplete:`off`,name:`signUpSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,value:xe,onChange:e=>Se(e.target.value)})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Phone Number`}),(0,Q.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`signUpPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`e.g. 09123456789`,required:!0,type:`tel`,value:Ce,onChange:e=>we(Qi(e.target.value))})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Password`}),(0,Q.jsx)(`input`,{autoComplete:`new-password`,name:`signUpPassword`,placeholder:`Create password`,required:!0,type:`password`,minLength:6,value:Te,onChange:e=>Ee(e.target.value)})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Confirm Password`}),(0,Q.jsx)(`input`,{autoComplete:`new-password`,name:`signUpConfirmPassword`,placeholder:`Confirm password`,required:!0,type:`password`,minLength:6,value:De,onChange:e=>Oe(e.target.value)})]}),(0,Q.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`verified_user`}),(0,Q.jsx)(`p`,{children:`Your School ID will be checked against the official grantee information record before account creation.`})]}),ke&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`p`,{className:`form-error auth-full-field`,role:`alert`,lang:`ceb`,children:ke}),(0,Q.jsxs)(`div`,{className:`registration-help auth-full-field`,lang:`ceb`,children:[(0,Q.jsx)(`strong`,{children:`Giya sa pagrehistro — mga posibleng hinungdan:`}),(0,Q.jsx)(`p`,{children:`Kung wala sa list: Wala makita ang imong Student ID sa official grantee list. Palihog i-check pag-usab o kontaka ang Scholarship Office.`}),(0,Q.jsx)(`p`,{children:`Kung nakarehistro na: Naa na kay account nga nakarehistro niini nga Student ID. Palihog pag-login o gamita ang Forgot Password.`})]})]}),je&&(0,Q.jsx)(`p`,{className:`form-success auth-full-field`,children:je})]}),(0,Q.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,Q.jsx)(`button`,{className:`button button--secondary`,disabled:se,onClick:Yt,type:`button`,children:`Back to Login`}),(0,Q.jsx)(`button`,{className:`button`,disabled:se,type:`submit`,children:se?`Registering...`:`Register Now`})]})]})]}),je&&(0,Q.jsxs)(`div`,{"aria-labelledby":`sign-up-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Continue to student page`,className:`modal-backdrop-button`,onClick:wt,type:`button`}),(0,Q.jsxs)(`section`,{className:`modal-card modal-card--success auth-modal-card`,children:[(0,Q.jsxs)(`div`,{className:`success-modal-body`,children:[(0,Q.jsx)(`div`,{className:`success-icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,Q.jsx)(`h3`,{id:`sign-up-success-title`,children:`Successfully Registered`}),(0,Q.jsxs)(`p`,{children:[je,` You can now continue to the student information page.`]})]}),(0,Q.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,Q.jsx)(`button`,{className:`button`,onClick:wt,type:`button`,children:`Continue`})})]})]}),x&&(0,Q.jsxs)(`div`,{"aria-labelledby":`forgot-password-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close forgot password modal`,className:`modal-backdrop-button`,onClick:Zt,type:`button`}),(0,Q.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=cn(),n=Fe.trim().toLowerCase(),r=Le.trim(),i=Zi(ze),a=Ve.trim(),o=Ue,s=Ge;if(Je(``),Xe(``),t){Je(t);return}if(!Ze){Je(`Please request an OTP first.`);return}if(!a){Je(`OTP is required.`);return}if(!/^\d{4,8}$/.test(a)){Je(`OTP must be 4 to 8 digits.`);return}if(!o){Je(`New password is required.`);return}if(!aa(o)){Je(`New password must be at least 6 characters.`);return}if(!s){Je(`Confirm password is required.`);return}if(o!==s){Je(`New password and confirm password do not match.`);return}nt(!0);try{let e=await lt({email:n||void 0,schoolId:r||void 0,phoneNumber:i,otp:a,newPassword:o});if(!e.success){Je(e.message||`Unable to change password.`);return}Xe(e.message||`Password changed successfully.`),He(``),We(``),Ke(``),Qe(!1),ge(n||r),ve(``)}catch(e){Je(e instanceof Error?e.message:`Unable to change password right now.`)}finally{nt(!1)}},children:[(0,Q.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,Q.jsx)(`div`,{className:`admin-login-brand`,children:(0,Q.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,Q.jsx)(`button`,{"aria-label":`Close forgot password`,className:`icon-button modal-close admin-login-close`,onClick:Zt,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,Q.jsx)(`p`,{className:`modal-kicker`,children:`Account Recovery`}),(0,Q.jsx)(`h3`,{id:`forgot-password-title`,children:`Forgot Password`}),(0,Q.jsx)(`p`,{children:`Verify your email or School ID with your registered phone number before changing your password.`})]}),(0,Q.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`Email address`}),(0,Q.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`forgotEmail`,placeholder:`Enter valid email address`,required:!Le.trim(),type:`email`,disabled:Le.trim().length>0||$e||tt,value:Fe,onChange:an})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`School ID`}),(0,Q.jsx)(`input`,{autoComplete:`off`,name:`forgotSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,title:`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`,required:!Fe.trim(),disabled:Fe.trim().length>0||$e||tt,value:Le,onChange:on})]}),(0,Q.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,Q.jsx)(`span`,{children:`Phone number`}),(0,Q.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`forgotPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`09123456789 or +639123456789`,required:!0,type:`tel`,disabled:$e||tt,value:ze,onChange:sn})]}),(0,Q.jsx)(`button`,{className:`button button--secondary auth-full-field`,disabled:$e||tt,onClick:async()=>{let e=cn();if(Je(``),Xe(``),e){Je(e);return}let t=Fe.trim().toLowerCase(),n=Le.trim(),r=Zi(ze);et(!0);try{let e=await ct({email:t||void 0,schoolId:n||void 0,phoneNumber:r});if(!e.success){Je(e.message||`Unable to send OTP.`);return}Qe(!0),Xe(e.message||`OTP generated successfully. Enter it below to change your password.`)}catch(e){Je(e instanceof Error?e.message:`Unable to request OTP right now.`)}finally{et(!1)}},type:`button`,children:$e?`Sending OTP...`:Ze?`Resend OTP`:`Send OTP`}),Ze&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`OTP Code`}),(0,Q.jsx)(`input`,{autoComplete:`one-time-code`,inputMode:`numeric`,name:`forgotOtp`,placeholder:`Enter OTP`,required:!0,type:`text`,maxLength:8,value:Ve,onChange:e=>He(e.target.value.replace(/\D/g,``))})]}),(0,Q.jsxs)(`label`,{className:`form-field`,children:[(0,Q.jsx)(`span`,{children:`New Password`}),(0,Q.jsx)(`input`,{autoComplete:`new-password`,name:`forgotNewPassword`,placeholder:`Enter new password`,required:!0,type:`password`,minLength:6,value:Ue,onChange:e=>We(e.target.value)})]}),(0,Q.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,Q.jsx)(`span`,{children:`Confirm New Password`}),(0,Q.jsx)(`input`,{autoComplete:`new-password`,name:`forgotConfirmPassword`,placeholder:`Confirm new password`,required:!0,type:`password`,minLength:6,value:Ge,onChange:e=>Ke(e.target.value)})]})]}),qe&&(0,Q.jsx)(`p`,{className:`form-error auth-full-field`,children:qe}),Ye&&(0,Q.jsx)(`p`,{className:`form-success auth-full-field`,children:Ye})]}),(0,Q.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,Q.jsx)(`button`,{className:`button button--secondary`,disabled:$e||tt,onClick:Zt,type:`button`,children:`Cancel`}),(0,Q.jsx)(`button`,{className:`button`,disabled:!Ze||$e||tt,type:`submit`,children:tt?`Changing Password...`:`Change Password`})]})]})]}),N&&(0,Q.jsxs)(`div`,{"aria-labelledby":`quick-action-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close success modal`,className:`modal-backdrop-button`,onClick:()=>P(``),type:`button`}),(0,Q.jsxs)(`div`,{className:`modal-card modal-card--success`,children:[(0,Q.jsxs)(`div`,{className:`success-modal-body`,children:[(0,Q.jsx)(`div`,{className:`success-icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,Q.jsx)(`h3`,{id:`quick-action-success-title`,children:`Submitted Successfully`}),(0,Q.jsxs)(`p`,{children:[N,` The scholarship office can now review your request. Please always check your valid email. The TECH Scholarship Office will notify you when your account is updated.`]})]}),(0,Q.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,Q.jsx)(`button`,{className:`button`,onClick:()=>P(``),type:`button`,children:`Done`})})]})]}),(0,Q.jsx)(`div`,{className:`scroll-progress`,style:{"--scroll-progress":l}}),(0,Q.jsx)(Ni,{onRequest:Tt})]})}var ma=`
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
`,ha=`/IBACMI-Scholarship-Office/assets/samp-wIlKUzMl.jpg`;function ga(){let e=globalThis.crypto;if(typeof e?.randomUUID==`function`)try{return e.randomUUID()}catch{}if(typeof e?.getRandomValues==`function`)try{return Array.from(e.getRandomValues(new Uint8Array(16)),e=>e.toString(16).padStart(2,`0`)).join(``)}catch{}return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`}function _a(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`short`,timeStyle:`short`}).format(new Date(e)):``}function va(e,t){let n=new Date(e),r=new Date(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate()}function ya({studentSession:e}){let t=e?.sessionToken,n=Cn(Z.support.listStudentConversations,t?{sessionToken:t}:`skip`),r=wn(Z.support.sendStudentPortalMessage),i=wn(Z.support.markRead),[a,o]=(0,X.useState)(!1),[s,c]=(0,X.useState)(null),[l,u]=(0,X.useState)(``),[d,f]=(0,X.useState)(``),[p,m]=(0,X.useState)(!1),h=(0,X.useRef)(null),g=(0,X.useRef)(null),_=(0,X.useRef)(null),v=(0,X.useRef)(!1),y=(0,X.useCallback)(()=>{o(!1),window.setTimeout(()=>h.current?.focus(),0)},[]),b=s?n?.find(e=>e._id===s)??n?.[0]??null:n?.[0]??null,x=b?.messages??[],S=(n??[]).reduce((e,t)=>e+(t.unreadCount??0),0);return(0,X.useEffect)(()=>{a&&t&&b?._id&&i({sessionToken:t,conversationId:b._id}).catch(()=>{})},[a,t,b?._id,i]),(0,X.useEffect)(()=>{a&&g.current?.scrollIntoView({block:`end`,behavior:`smooth`})},[a,b?._id,x.length]),(0,X.useEffect)(()=>{if(!a)return;let e=document.body.style.overflow;document.body.style.overflow=`hidden`;let t=e=>{e.key===`Escape`&&y()};return window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`keydown`,t),document.body.style.overflow=e}},[a,y]),(0,Q.jsxs)(Q.Fragment,{children:[t&&(0,Q.jsxs)(`button`,{ref:h,className:`student-chat-launcher`,type:`button`,onClick:()=>{o(!0),f(``)},"aria-label":`Chat with Scholarship Support${S?`, ${S} unread messages`:``}`,title:`Chat with Scholarship Support`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`chat`}),(0,Q.jsx)(`span`,{className:`student-chat-tooltip`,role:`tooltip`,children:`Chat with Scholarship Support`}),S>0&&(0,Q.jsx)(`span`,{className:`student-chat-unread`,"aria-label":`${S} unread messages`,children:S>99?`99+`:S})]}),a&&t&&(0,Q.jsx)(`div`,{className:`student-chat-overlay`,role:`presentation`,onMouseDown:e=>{e.target===e.currentTarget&&y()},children:(0,Q.jsxs)(`section`,{className:`student-chat-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`student-chat-title`,children:[(0,Q.jsxs)(`header`,{className:`student-chat-header`,children:[(0,Q.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:`IBACMI`}),(0,Q.jsxs)(`div`,{className:`student-chat-heading-copy`,children:[(0,Q.jsx)(`h2`,{id:`student-chat-title`,children:`UniFAST Scholarship Support`}),(0,Q.jsx)(`p`,{children:`Chat directly with our Scholarship Office`})]}),(0,Q.jsx)(`button`,{type:`button`,"aria-label":`Minimize chat`,title:`Minimize`,onClick:y,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`expand_more`})}),(0,Q.jsx)(`button`,{type:`button`,"aria-label":`Close chat`,title:`Close`,onClick:y,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`close`})})]}),(0,Q.jsxs)(`div`,{className:`student-chat-history`,"aria-live":`polite`,"aria-label":`Scholarship Support messages`,children:[n===void 0&&(0,Q.jsxs)(`div`,{className:`student-chat-loading`,"aria-label":`Loading conversation history`,children:[(0,Q.jsx)(`i`,{}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`b`,{}),(0,Q.jsx)(`b`,{})]}),(0,Q.jsx)(`i`,{}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`b`,{}),(0,Q.jsx)(`b`,{})]})]}),n!==void 0&&x.length===0&&(0,Q.jsxs)(`div`,{className:`student-chat-welcome`,children:[(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`forum`}),(0,Q.jsx)(`p`,{children:b?.status===`resolved`?`Your previous conversation is resolved. Send a message to reopen it or ask a new question.`:`Hello! How can we help with your UniFAST application today?`})]}),x.map((e,t)=>{let n=x[t-1],r=e.senderRole===`student`;return(0,Q.jsxs)(`div`,{children:[(!n||!va(n.createdAt,e.createdAt))&&(0,Q.jsx)(`div`,{className:`student-chat-date`,children:(0,Q.jsx)(`span`,{children:new Intl.DateTimeFormat(`en-PH`,{dateStyle:`full`}).format(new Date(e.createdAt))})}),(0,Q.jsxs)(`div`,{className:`student-chat-message${r?` is-own`:``}`,children:[(0,Q.jsx)(`div`,{className:`student-chat-bubble`,children:e.content}),(0,Q.jsxs)(`time`,{children:[_a(e.createdAt),r&&e.readByAdmin?` · Seen by Scholarship Office`:``]})]})]},e._id)}),(0,Q.jsx)(`div`,{ref:g})]}),d&&(0,Q.jsx)(`p`,{className:`student-chat-error`,role:`alert`,children:d}),(0,Q.jsxs)(`form`,{className:`student-chat-composer`,onSubmit:async e=>{e.preventDefault();let n=l.trim();if(!(!t||!n||v.current)){v.current=!0,m(!0),f(``);try{c((await r({sessionToken:t,content:n,clientMessageId:ga()})).conversationId),u(``),_.current&&(_.current.style.height=``)}catch(e){f(e instanceof Error?e.message:`Your message could not be sent. Please try again.`)}finally{v.current=!1,m(!1)}}},children:[(0,Q.jsx)(`textarea`,{ref:_,value:l,maxLength:2e3,"aria-label":`Write a message`,placeholder:`Write a message…`,onChange:e=>{u(e.target.value),e.target.style.height=`auto`,e.target.style.height=`${Math.min(e.target.scrollHeight,140)}px`},onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),e.currentTarget.form?.requestSubmit())}}),(0,Q.jsx)(`button`,{type:`submit`,"aria-label":p?`Sending message`:`Send message`,disabled:!l.trim()||p,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:p?`hourglass_top`:`send`})}),(0,Q.jsx)(`small`,{children:p?`Sending…`:`Enter to send · Shift + Enter for a new line`})]})]})})]})}var ba=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``),xa={tesAwardNo:``,studentId:``,batchNo:``,status:``,semester:``,schoolYear:``};function Sa(e){return[...new Set(e.filter(Boolean))]}function Ca(e){let t=String(e??``).match(/\d{4}/);return t?Number(t[0]):0}function wa(){let e=new Date,t=e.getFullYear(),n=e.getMonth()>=5?t:t-1;return`${n}-${n+1}`}function Ta(e){return e.replace(/[\s-]/g,``).trim()}function Ea(e){return e.replace(/[^\d+]/g,``).replace(/(?!^)\+/g,``)}function Da(e){let t=Ta(e);return/^09\d{9}$/.test(t)||/^\+639\d{9}$/.test(t)}function Oa(e){let t=wa();return e.filter(e=>e.schoolYear===t).sort((e,t)=>(t.uploadedAt??0)-(e.uploadedAt??0))[0]||[...e].sort((e,t)=>{let n=Ca(t.schoolYear)-Ca(e.schoolYear);if(n!==0)return n;let r=(t.uploadedAt??0)-(e.uploadedAt??0);return r===0?(t._creationTime??0)-(e._creationTime??0):r})[0]}function ka({url:e}){let t=(0,X.useRef)(null),[n,r]=(0,X.useState)(0),[i,a]=(0,X.useState)(``),[o,s]=(0,X.useState)(0);return(0,X.useEffect)(()=>{let e=t.current;if(!e)return;let n=()=>r(Math.floor(e.clientWidth));if(n(),typeof ResizeObserver>`u`)return window.addEventListener(`resize`,n),()=>window.removeEventListener(`resize`,n);let i=new ResizeObserver(n);return i.observe(e),()=>i.disconnect()},[]),(0,X.useEffect)(()=>{let r=t.current;if(!r||!e||!n)return;let i=!1,o,s;return(async()=>{a(``),r.replaceChildren(),r.setAttribute(`aria-busy`,`true`);try{let[{getDocument:t,GlobalWorkerOptions:a},{default:c}]=await Promise.all([rr(()=>import(`./pdf-K6MijYJH.js`),[]),rr(()=>import(`./pdf.worker.min-D7EoebCV.js`),[])]);if(i)return;a.workerSrc=c;let l=await fetch(e,{mode:`cors`});if(!l.ok)throw Error(`Unable to download PDF (${l.status}).`);let u=new Uint8Array(await l.arrayBuffer());if(i)return;if(!u.length)throw Error(`The uploaded PDF is empty.`);o=t({data:u,disableAutoFetch:!0,disableRange:!0,disableStream:!0});let d=await o.promise;for(let e=1;e<=d.numPages;e+=1){if(i)return;let t=await d.getPage(e),a=n/t.getViewport({scale:1}).width,o=t.getViewport({scale:a}),c=Math.min(window.devicePixelRatio||1,2),l=document.createElement(`canvas`);l.className=`student-id-preview__page`,l.setAttribute(`aria-label`,`Uploaded School ID page ${e}`),l.width=Math.floor(o.width*c),l.height=Math.floor(o.height*c),l.style.width=`${Math.floor(o.width)}px`,l.style.height=`${Math.floor(o.height)}px`,r.appendChild(l),s=t.render({canvas:l,transform:c===1?null:[c,0,0,c,0,0],viewport:o}),await s.promise}}catch(e){!i&&e?.name!==`RenderingCancelledException`&&(console.error(`Unable to render uploaded School ID PDF:`,e),r.replaceChildren(),a(`Preview unavailable, but your file was uploaded successfully.`))}finally{i||r.removeAttribute(`aria-busy`)}})(),()=>{i=!0,s?.cancel(),o?.destroy()}},[n,o,e]),(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`div`,{className:`student-id-preview__pages${i?` student-id-preview__pages--error`:``}`,ref:t,children:(0,Q.jsx)(`span`,{className:`student-id-preview__loading`,children:`Loading PDF preview...`})}),i&&(0,Q.jsxs)(`div`,{className:`student-id-preview__error`,children:[(0,Q.jsx)(`span`,{className:`student-id-preview__status-icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,Q.jsxs)(`div`,{className:`student-id-preview__error-copy`,children:[(0,Q.jsx)(`strong`,{children:`School ID file is uploaded`}),(0,Q.jsx)(`span`,{children:i})]}),(0,Q.jsxs)(`div`,{className:`student-id-preview__error-actions`,children:[(0,Q.jsx)(`a`,{href:e,rel:`noreferrer`,target:`_blank`,children:`Open file`}),(0,Q.jsx)(`button`,{onClick:()=>s(e=>e+1),type:`button`,children:`Retry preview`})]})]})]})}function Aa({studentSession:e,onLogout:t,onStudentSessionUpdate:n}){let r=String(e?.schoolId??``).trim(),i=Cn(Z.allinfo.listByStudentId,r?{studentId:r}:`skip`),a=wn(Z.allinfo.saveStudentIdUploads),o=wn(Z.adminAuth.updateStudentPhoneNumber),[s,c]=(0,X.useState)(null),[l,u]=(0,X.useState)(``),[d,f]=(0,X.useState)(``),[p,m]=(0,X.useState)(!1),h=(0,X.useRef)(null),[g,_]=(0,X.useState)(e?.phoneNumber??``),[v,y]=(0,X.useState)(``),[b,x]=(0,X.useState)(``),[S,C]=(0,X.useState)(!1),w=wn(Z.adminAuth.updateStudentCurrentAddress),[T,E]=(0,X.useState)(e?.currentAddress??``),[D,O]=(0,X.useState)(``),[k,A]=(0,X.useState)(``),[j,M]=(0,X.useState)(!1),N=wn(Z.adminAuth.updateStudentFacebookProfile),P=wn(Z.support.logout),[F,I]=(0,X.useState)(e?.facebookProfileUrl??``),[L,R]=(0,X.useState)(``),[z,B]=(0,X.useState)(``),[V,H]=(0,X.useState)(!1),U=r.toLowerCase(),W=e?.phoneNumber??``,G=Ta(g)!==Ta(W),K=e?.currentAddress??``,ee=T.trim()!==K.trim(),q=e?.facebookProfileUrl??``,te=F.trim()!==q.trim(),J=(0,X.useMemo)(()=>!U||!i?null:Oa(i.filter(e=>String(e.studentId??``).trim().toLowerCase()===U))??null,[i,U]),Y=J?{tesAwardNo:J.tesAwardNumber??``,studentId:J.studentId??``,lastName:J.lastName??``,firstName:J.firstName??``,middleInitial:J.middleInitial??``,batchNo:J.batchId??``,status:J.status??``,semester:J.semester??``,schoolYear:J.schoolYear??``}:xa,ne=i===void 0,re=!!U,ie=!ne&&re&&!J,ae=Sa([Y.status,`Validated`,`Pending`,`Rejected`]),oe=Sa([Y.semester,`1st Semester`,`2nd Semester`]),se=Sa([Y.schoolYear,`2023-2024`,`2024-2025`]),ce=!!(J?.frontIdUrl||J?.frontIdStorageId),le=J?.frontIdUrl??``;(0,X.useEffect)(()=>{if(!d)return;let e=e=>{e.key===`Escape`&&f(``)},t=document.body.style.overflow;return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),h.current?.focus(),()=>{document.body.style.overflow=t,window.removeEventListener(`keydown`,e)}},[d]);let ue=async()=>{try{e?.sessionToken&&await P({sessionToken:e.sessionToken})}catch{}finally{typeof t==`function`&&t()}},de=e=>{_(Ea(e.target.value)),y(``),x(``)},fe=e=>{E(e.target.value),O(``),A(``)},pe=e=>{I(e.target.value),R(``),B(``)},me=async()=>{let t=F.trim();if(R(``),B(``),!r){R(`Please sign in before updating your Facebook profile link.`);return}let i;try{i=new URL(t)}catch{R(`Enter a valid Facebook profile link.`);return}let a=i.hostname.toLowerCase();if(i.protocol!==`https:`||!(a===`facebook.com`||a.endsWith(`.facebook.com`)||a===`fb.com`||a.endsWith(`.fb.com`))){R(`Use a valid https://facebook.com profile link.`);return}if(!te){B(`Facebook profile link is already up to date.`);return}H(!0);try{let r=await N({schoolId:e.schoolId,facebookProfileUrl:t});if(!r.success){R(r.message||`Unable to update Facebook profile link.`);return}I(r.admin?.facebookProfileUrl??t),B(r.message||`Facebook profile link updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){R(e instanceof Error?e.message:`Unable to update Facebook profile link.`)}finally{H(!1)}},he=async()=>{let t=Ta(g);if(y(``),x(``),!r){y(`Please sign in before updating your phone number.`);return}if(!t){y(`Phone number is required.`);return}if(!Da(t)){y(`Please enter a valid phone number. Example: 09123456789 or +639123456789.`);return}if(!G){x(`Phone number is already up to date.`);return}C(!0);try{let r=await o({schoolId:e.schoolId,phoneNumber:t});if(!r.success){y(r.message||`Unable to update phone number.`);return}_(r.admin?.phoneNumber??t),x(r.message||`Phone number updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){y(e instanceof Error?e.message:`Unable to update phone number.`)}finally{C(!1)}},ge=async()=>{let t=T.trim();if(O(``),A(``),!r){O(`Please sign in before updating your current address.`);return}if(!t){O(`Current address is required.`);return}if(t.length<8){O(`Current address must be at least 8 characters.`);return}if(!ee){A(`Current address is already up to date.`);return}M(!0);try{let r=await w({schoolId:e.schoolId,currentAddress:t});if(!r.success){O(r.message||`Unable to update current address.`);return}E(r.admin?.currentAddress??t),A(r.message||`Current address updated successfully.`),typeof n==`function`&&n(r.admin)}catch(e){O(e instanceof Error?e.message:`Unable to update current address.`)}finally{M(!1)}},_e=e=>t=>{let n=t.target.files?.[0]??null;if(u(``),f(``),n&&n.type!==`application/pdf`&&!/\.pdf$/i.test(n.name)){u(`Only PDF files are allowed.`),t.target.value=``,e(null);return}if(n&&n.size>5*1024*1024){u(`Each file must be 5MB or smaller.`),t.target.value=``,e(null);return}e(n)},ve=async e=>{let t=[J.lastName,J.firstName,J.middleInitial].filter(Boolean).join(` `),n=new URLSearchParams({batchNo:J.batchId||`no-batch`,documentType:`School-ID`,fileName:e.name,fullName:t,schoolYear:J.schoolYear||`unknown-school-year`,studentId:J.studentId}),r;try{r=await fetch(`${ba}/google-drive/student-upload?${n.toString()}`,{method:`POST`,headers:{"Content-Type":e.type||`application/pdf`},body:e})}catch{throw Error(`Unable to connect to the PDF upload service. Deploy the Convex HTTP functions and check VITE_CONVEX_URL or VITE_CONVEX_SITE_URL.`)}if(!r.ok){let t=await r.json().catch(()=>null);throw Error(t?.message||`Unable to upload ${e.name} to Google Drive.`)}let{fileUrl:i}=await r.json();if(!i)throw Error(`Google Drive did not return a file link for ${e.name}.`);return i};return(0,Q.jsxs)(`div`,{className:`student-page`,children:[(0,Q.jsxs)(`header`,{className:`student-topbar`,children:[(0,Q.jsx)(`button`,{"aria-label":`Log out and return to landing page`,className:`student-icon-button`,onClick:ue,type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`arrow_back`})}),(0,Q.jsx)(`h1`,{children:`Student Information`})]}),(0,Q.jsxs)(`main`,{className:`student-main`,children:[(0,Q.jsxs)(`section`,{className:`student-hero`,"aria-labelledby":`student-title`,children:[(0,Q.jsx)(`div`,{className:`student-badge`,children:`Academic Year Update`}),(0,Q.jsx)(`h2`,{id:`student-title`,children:`Unifast Portal`}),(0,Q.jsx)(`p`,{children:`Please ensure all details match your official documents for successful validation.`})]}),re&&(0,Q.jsx)(ya,{studentSession:e}),!re&&(0,Q.jsx)(`div`,{className:`student-state-box`,children:`Please sign in with a student account to view your grantee information.`}),ne&&(0,Q.jsx)(`div`,{className:`student-state-box`,children:`Loading your grantee information...`}),ie&&(0,Q.jsxs)(`div`,{className:`student-state-box student-state-box--warning`,children:[`No allinfo record was found for Student ID `,e?.schoolId,`.`]}),(0,Q.jsxs)(`form`,{className:`student-form`,id:`student-information-form`,children:[(0,Q.jsxs)(`div`,{className:`student-field`,children:[(0,Q.jsx)(`label`,{htmlFor:`tes-award-no`,children:`TES Award No.`}),(0,Q.jsx)(`input`,{id:`tes-award-no`,placeholder:`e.g. TES-2024-XXXX`,readOnly:!0,type:`text`,value:Y.tesAwardNo})]}),(0,Q.jsxs)(`div`,{className:`student-field`,children:[(0,Q.jsx)(`label`,{htmlFor:`student-id`,children:`Student ID`}),(0,Q.jsx)(`input`,{id:`student-id`,placeholder:`Enter your University ID`,readOnly:!0,type:`text`,value:Y.studentId})]}),(0,Q.jsxs)(`div`,{className:`student-field student-field--with-action`,children:[(0,Q.jsx)(`label`,{htmlFor:`phone-number`,children:`Phone No.`}),(0,Q.jsxs)(`div`,{className:`student-inline-control`,children:[(0,Q.jsx)(`input`,{id:`phone-number`,inputMode:`tel`,pattern:`\\+?[0-9]*`,placeholder:`09123456789 or +639123456789`,type:`tel`,value:g,onChange:de}),(0,Q.jsx)(`button`,{className:`student-inline-button`,disabled:!re||!G||S,onClick:he,type:`button`,children:S?`Saving...`:`Save`})]}),v&&(0,Q.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:v}),b&&(0,Q.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:b})]}),(0,Q.jsxs)(`div`,{className:`student-field student-field--with-action student-field--full`,children:[(0,Q.jsx)(`label`,{htmlFor:`current-address`,children:`Your Home Permanent Address ( Ex. Purok number, Brgy, City/Municipality, Province )`}),(0,Q.jsx)(`textarea`,{id:`current-address`,placeholder:`Enter your current address`,rows:3,value:T,onChange:fe}),(0,Q.jsx)(`button`,{className:`student-inline-button student-inline-button--wide`,disabled:!re||!ee||j,onClick:ge,type:`button`,children:j?`Saving Address...`:`Save Current Address`}),D&&(0,Q.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:D}),k&&(0,Q.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:k})]}),(0,Q.jsxs)(`div`,{className:`student-field student-field--with-action student-field--full`,children:[(0,Q.jsx)(`label`,{htmlFor:`facebook-profile-url`,children:`Facebook Profile Link`}),(0,Q.jsxs)(`div`,{className:`student-inline-control`,children:[(0,Q.jsx)(`input`,{id:`facebook-profile-url`,inputMode:`url`,onChange:pe,placeholder:`https://www.facebook.com/your.profile`,type:`url`,value:F}),(0,Q.jsx)(`button`,{className:`student-inline-button`,disabled:!re||!te||V,onClick:me,type:`button`,children:V?`Saving...`:`Save Link`})]}),L&&(0,Q.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:L}),z&&(0,Q.jsx)(`p`,{className:`student-upload-message student-upload-message--success`,children:z})]}),(0,Q.jsxs)(`div`,{className:`student-field`,children:[(0,Q.jsx)(`label`,{htmlFor:`last-name`,children:`Last Name`}),(0,Q.jsx)(`input`,{id:`last-name`,placeholder:`Last Name`,readOnly:!0,type:`text`,value:Y.lastName})]}),(0,Q.jsxs)(`div`,{className:`student-field`,children:[(0,Q.jsx)(`label`,{htmlFor:`first-name`,children:`First Name`}),(0,Q.jsx)(`input`,{id:`first-name`,placeholder:`First Name`,readOnly:!0,type:`text`,value:Y.firstName})]}),(0,Q.jsxs)(`div`,{className:`student-field`,children:[(0,Q.jsx)(`label`,{htmlFor:`middle-initial`,children:`MI.`}),(0,Q.jsx)(`input`,{id:`middle-initial`,placeholder:`MI.`,readOnly:!0,type:`text`,value:Y.middleInitial})]}),(0,Q.jsxs)(`div`,{className:`student-field`,children:[(0,Q.jsx)(`label`,{htmlFor:`batch-no`,children:`Batch No.`}),(0,Q.jsx)(`input`,{id:`batch-no`,placeholder:`e.g. Batch 7`,readOnly:!0,type:`text`,value:Y.batchNo})]}),(0,Q.jsxs)(`div`,{className:`student-select-grid`,children:[(0,Q.jsxs)(`div`,{className:`student-field`,children:[(0,Q.jsx)(`label`,{htmlFor:`status`,children:`Status`}),(0,Q.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,Q.jsxs)(`select`,{disabled:!0,id:`status`,value:Y.status,children:[(0,Q.jsx)(`option`,{disabled:!0,value:``,children:`Select Status`}),ae.map(e=>(0,Q.jsx)(`option`,{children:e},e))]}),(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]}),(0,Q.jsxs)(`div`,{className:`student-field`,children:[(0,Q.jsx)(`label`,{htmlFor:`semester`,children:`Semester`}),(0,Q.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,Q.jsxs)(`select`,{disabled:!0,id:`semester`,value:Y.semester,children:[(0,Q.jsx)(`option`,{disabled:!0,value:``,children:`Select Semester`}),oe.map(e=>(0,Q.jsx)(`option`,{children:e},e))]}),(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]}),(0,Q.jsxs)(`div`,{className:`student-field`,children:[(0,Q.jsx)(`label`,{htmlFor:`school-year`,children:`School Year`}),(0,Q.jsxs)(`div`,{className:`student-select-wrap`,children:[(0,Q.jsxs)(`select`,{disabled:!0,id:`school-year`,value:Y.schoolYear,children:[(0,Q.jsx)(`option`,{disabled:!0,value:``,children:`Select School Year`}),se.map(e=>(0,Q.jsx)(`option`,{children:e},e))]}),(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})]})]})]}),(0,Q.jsxs)(`section`,{className:`student-upload-section`,"aria-labelledby":`student-upload-title`,children:[(0,Q.jsxs)(`div`,{className:`student-upload-copy`,children:[(0,Q.jsx)(`h3`,{id:`student-upload-title`,children:`Upload colored copy of School ID with 3 signatures and Batch No.`}),(0,Q.jsxs)(`p`,{children:[`Files will be saved to your `,Y.schoolYear||`current`,` allinfo record. If you have records from other years, the portal automatically uses the current or latest School Year.`]})]}),(0,Q.jsxs)(`aside`,{className:`student-sample-card`,"aria-label":`Sample School ID upload format`,children:[(0,Q.jsxs)(`div`,{className:`student-sample-card__header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`student-sample-card__eyebrow`,children:`Sample Format`}),(0,Q.jsx)(`h4`,{children:`Scan layout guide`})]}),(0,Q.jsx)(`span`,{className:`student-sample-card__badge`,children:`Required`})]}),(0,Q.jsxs)(`div`,{className:`student-sample-card__body`,children:[(0,Q.jsx)(`a`,{className:`student-sample-card__image-link`,href:ha,rel:`noreferrer`,target:`_blank`,title:`Open sample format`,children:(0,Q.jsx)(`img`,{alt:`Sample scan format showing front and back School ID, three signatures, and Batch No.`,src:ha})}),(0,Q.jsxs)(`div`,{className:`student-sample-card__checklist`,children:[(0,Q.jsx)(`p`,{children:`Before converting to PDF, make sure your scan includes:`}),(0,Q.jsxs)(`ul`,{children:[(0,Q.jsx)(`li`,{children:`Colored front and back copy of your School ID`}),(0,Q.jsx)(`li`,{children:`Three clear signatures below the ID copies`}),(0,Q.jsx)(`li`,{children:`Readable Batch No. written on the same page`})]}),(0,Q.jsx)(`span`,{children:`Upload the final file as PDF only, maximum 5MB.`})]})]})]}),(0,Q.jsxs)(`div`,{className:`student-upload-field`,children:[(0,Q.jsx)(`span`,{className:`student-upload-label`,children:`Upload File`}),(0,Q.jsxs)(`label`,{className:`student-upload-card${s||ce?` student-upload-card--selected`:``}`,htmlFor:`file-front`,children:[(0,Q.jsx)(`input`,{accept:`application/pdf,.pdf`,disabled:!J||p,id:`file-front`,type:`file`,onChange:_e(c)}),(0,Q.jsx)(`span`,{className:`student-upload-icon`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`id_card`})}),(0,Q.jsx)(`span`,{className:`student-upload-title`,children:s?.name||(ce?`File already uploaded`:`Tap to upload File`)}),(0,Q.jsx)(`span`,{className:`student-upload-note`,children:`PDF only up to 5MB`})]})]}),le&&(0,Q.jsxs)(`div`,{className:`student-id-preview`,children:[(0,Q.jsxs)(`div`,{className:`student-id-preview__header`,children:[(0,Q.jsxs)(`div`,{className:`student-id-preview__title`,children:[(0,Q.jsx)(`span`,{className:`student-id-preview__title-icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`task_alt`})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{children:`Uploaded School ID`}),(0,Q.jsx)(`small`,{children:`File received and ready for review`})]})]}),(0,Q.jsx)(`a`,{href:le,rel:`noreferrer`,target:`_blank`,children:`View full file`})]}),(0,Q.jsx)(ka,{url:le}),(0,Q.jsx)(`noscript`,{children:(0,Q.jsxs)(`a`,{className:`student-id-preview__file`,href:le,rel:`noreferrer`,target:`_blank`,children:[(0,Q.jsx)(`span`,{className:`student-id-preview__file-icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`})}),(0,Q.jsx)(`span`,{children:`Open uploaded PDF`})]})})]}),l&&(0,Q.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:l}),(0,Q.jsxs)(`button`,{className:`student-save-button`,disabled:!J||p,onClick:async()=>{if(u(``),f(``),!J){u(`No allinfo record is available for your Student ID.`);return}if(!s){u(`Choose a PDF file before saving.`);return}m(!0);try{let e=await ve(s),t=await a({studentId:J.studentId,schoolYear:J.schoolYear,frontIdUrl:e});c(null),f(`ID file saved for School Year ${t.schoolYear||Y.schoolYear}.`)}catch(e){u(e instanceof Error?e.message:`Unable to save uploaded files.`)}finally{m(!1)}},type:`button`,children:[(0,Q.jsx)(`span`,{children:p?`Saving Uploads...`:`Save Uploaded ID`}),(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})]})]})]})]}),d?(0,Q.jsxs)(`div`,{"aria-describedby":`student-upload-success-description`,"aria-labelledby":`student-upload-success-title`,"aria-modal":`true`,className:`student-success-modal`,role:`dialog`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close upload success message`,className:`student-success-modal__backdrop`,onClick:()=>f(``),type:`button`}),(0,Q.jsxs)(`section`,{className:`student-success-modal__card`,children:[(0,Q.jsx)(`button`,{"aria-label":`Close`,className:`student-success-modal__close`,onClick:()=>f(``),type:`button`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`close`})}),(0,Q.jsx)(`div`,{className:`student-success-modal__icon`,"aria-hidden":`true`,children:(0,Q.jsx)(`span`,{className:`material-symbols-outlined`,children:`check`})}),(0,Q.jsx)(`span`,{className:`student-success-modal__eyebrow`,children:`Upload complete`}),(0,Q.jsx)(`h2`,{id:`student-upload-success-title`,children:`Successfully submitted`}),(0,Q.jsxs)(`p`,{id:`student-upload-success-description`,children:[d,` Your document is now available for review.`]}),(0,Q.jsx)(`button`,{className:`student-success-modal__action`,onClick:()=>f(``),ref:h,type:`button`,children:`Done`})]})]}):null]})}var ja=class extends X.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error(`ErrorBoundary caught`,e,t)}render(){if(this.state.hasError){let e=this.state.error?.message||`An unexpected error occurred.`;return(0,Q.jsx)(`div`,{style:{minHeight:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:24,boxSizing:`border-box`,background:`#fbfaf8`,color:`#1c1b1b`,fontFamily:`'Hanken Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`},children:(0,Q.jsxs)(`div`,{style:{maxWidth:720},children:[(0,Q.jsx)(`h2`,{style:{marginTop:0},children:`Something went wrong`}),(0,Q.jsx)(`p`,{style:{color:`#584237`,fontWeight:700},children:e}),(0,Q.jsx)(`p`,{style:{color:`#584237`},children:'If the message mentions Convex functions (for example "Could not find public function"), make sure the Convex dev server is running (`npx convex dev`) or that `VITE_CONVEX_URL` points to a deployed Convex app.'}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:18},children:[(0,Q.jsx)(`button`,{type:`button`,onClick:()=>window.location.reload(),style:{background:`#ea580c`,color:`#fff`,border:0,padding:`10px 14px`,borderRadius:8,fontWeight:800,cursor:`pointer`},children:`Reload`}),(0,Q.jsx)(`button`,{type:`button`,onClick:()=>alert("Run `npx convex dev` in the project root or set VITE_CONVEX_URL."),style:{background:`#fff`,color:`#1c1b1b`,border:`1px solid rgba(150,116,101,0.6)`,padding:`10px 14px`,borderRadius:8,fontWeight:700,cursor:`pointer`},children:`Help`})]})]})})}return this.props.children}},Ma=`unifast.adminSession`,Na=`unifast.studentViewOpen`,Pa=`unifast.studentSession`;function Fa(){try{let e=window.localStorage.getItem(Ma),t=e?JSON.parse(e):null;return t?.sessionToken?t:null}catch{return null}}function Ia(){try{return window.localStorage.getItem(Na)===`true`}catch{return!1}}function La(){try{let e=window.localStorage.getItem(Pa),t=e?JSON.parse(e):null;return t?.sessionToken?t:null}catch{return null}}function Ra(){let e=(0,Un.c)(21),[t,n]=(0,X.useState)(Fa),[r,i]=(0,X.useState)(La),[a,o]=(0,X.useState)(za),s;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=()=>{n(null)},e[0]=s):s=e[0];let c=s,l;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(l=()=>{i(null),o(!1)},e[1]=l):l=e[1];let u=l,d;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(d=e=>{if(e?.role===`student`){n(null),i(e),o(!0);return}i(null),o(!1),n(e)},e[2]=d):d=e[2];let f=d,p;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(p=e=>{n(null),i(e??null),o(!0)},e[3]=p):p=e[3];let m=p,h;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(h=e=>{i(t=>({...t??{},...e??{}}))},e[4]=h):h=e[4];let g=h,_,v;e[5]===t?(_=e[6],v=e[7]):(_=()=>{if(!t)return;let e=window.location.href,n={...window.history.state??{},unifastAdminGuard:!0};window.history.pushState(n,``,e);let r=()=>{window.history.pushState(n,``,e)};return window.addEventListener(`popstate`,r),()=>window.removeEventListener(`popstate`,r)},v=[t],e[5]=t,e[6]=_,e[7]=v),(0,X.useEffect)(_,v);let y,b;e[8]===t?(y=e[9],b=e[10]):(y=()=>{try{if(t){window.localStorage.setItem(Ma,JSON.stringify(t)),window.localStorage.removeItem(Na),window.localStorage.removeItem(Pa);return}window.localStorage.removeItem(Ma)}catch{}},b=[t],e[8]=t,e[9]=y,e[10]=b),(0,X.useEffect)(y,b);let x,S;if(e[11]!==a||e[12]!==r?(S=()=>{try{if(a){window.localStorage.setItem(Na,`true`),window.localStorage.removeItem(Ma),r&&window.localStorage.setItem(Pa,JSON.stringify(r));return}window.localStorage.removeItem(Na),window.localStorage.removeItem(Pa)}catch{}},x=[a,r],e[11]=a,e[12]=r,e[13]=x,e[14]=S):(x=e[13],S=e[14]),(0,X.useEffect)(S,x),t){let n;return e[15]===t?n=e[16]:(n=(0,Q.jsx)(ja,{children:(0,Q.jsx)(wi,{adminSession:t,onLogout:c})}),e[15]=t,e[16]=n),n}if(a){let t=r?.schoolId??`student`,n;return e[17]!==r||e[18]!==t?(n=(0,Q.jsx)(ja,{children:(0,Q.jsx)(Aa,{studentSession:r,onLogout:u,onStudentSessionUpdate:g},t)}),e[17]=r,e[18]=t,e[19]=n):n=e[19],n}let C;return e[20]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,Q.jsx)(ja,{children:(0,Q.jsx)(pa,{onAdminLoginSuccess:f,onStudentRegistrationSuccess:m})}),e[20]=C):C=e[20],C}function za(){return Ia()&&!!La()?.sessionToken}var Ba=`https://ideal-crane-292.convex.cloud`,Va=(0,Rn.createRoot)(document.getElementById(`root`));`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/IBACMI-Scholarship-Office/sw.js`).catch(e=>{console.error(`Unable to register the web app service worker:`,e)})});{let e=new yn(Ba);Va.render((0,Q.jsx)(X.StrictMode,{children:(0,Q.jsx)(Sn,{client:e,children:(0,Q.jsx)(Ra,{})})}))}export{c as i,o as n,l as r,rr as t};