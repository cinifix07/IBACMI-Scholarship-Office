const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/form2Export-CL6Oxchl.js","assets/billingExport-Dcl5xeHF.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},L={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{var t=d().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),p=o(((e,t)=>{t.exports=f()})),m=c(d(),1),h=p(),g=`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,_=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),v=o(((e,t)=>{t.exports=_()}))();function y(e){let t=(0,h.c)(41),{message:n,variant:r,progress:i,state:a,detail:o,onRetry:s,onCancel:c}=e,l=n===void 0?`Loading UniFAST information…`:n,u=r===void 0?`section`:r,d=a===void 0?`loading`:a,f=d===`success`,p=d===`error`,m;t[0]!==f||t[1]!==p||t[2]!==i?(m=!p&&(f||Number.isFinite(i)&&i>=1&&i<100),t[0]=f,t[1]=p,t[2]=i,t[3]=m):m=t[3];let _=m,y=f?100:_?Math.floor(i*10)/10:void 0,b=`ibacmi-loader ibacmi-loader--${u} ibacmi-loader--${d}${_?` is-measurable`:``}`,x=p?`alert`:`status`,S=p?`assertive`:`polite`,C=!f&&!p,w;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,v.jsx)(`span`,{className:`ibacmi-loader__seal`,children:(0,v.jsx)(`img`,{src:g,alt:``,width:`80`,height:`80`})}),t[4]=w):w=t[4];let T;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(T=(0,v.jsx)(`circle`,{className:`ibacmi-loader__track`,cx:`50`,cy:`50`,r:`45`}),t[5]=T):T=t[5];let E=_?`100 100`:`26 74`,D=_?100-y:0,O;t[6]!==E||t[7]!==D?(O=(0,v.jsxs)(`svg`,{className:`ibacmi-loader__ring`,viewBox:`0 0 100 100`,fill:`none`,children:[T,(0,v.jsx)(`circle`,{className:`ibacmi-loader__arc`,cx:`50`,cy:`50`,r:`45`,pathLength:`100`,strokeDasharray:E,strokeDashoffset:D})]}),t[6]=E,t[7]=D,t[8]=O):O=t[8];let k;t[9]!==f||t[10]!==p?(k=(f||p)&&(0,v.jsx)(`span`,{className:`ibacmi-loader__badge`,children:(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,children:(0,v.jsx)(`path`,{d:p?`m7 7 10 10M17 7 7 17`:`m5 12 4 4 10-10`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),t[9]=f,t[10]=p,t[11]=k):k=t[11];let A;t[12]!==O||t[13]!==k?(A=(0,v.jsxs)(`span`,{className:`ibacmi-loader__emblem`,"aria-hidden":`true`,children:[w,O,k]}),t[12]=O,t[13]=k,t[14]=A):A=t[14];let j;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,v.jsx)(`span`,{className:`ibacmi-loader__brand`,children:`IBACMI Scholarship Office`}),t[15]=j):j=t[15];let M;t[16]===l?M=t[17]:(M=(0,v.jsx)(`span`,{className:`ibacmi-loader__message`,children:l}),t[16]=l,t[17]=M);let N;t[18]===o?N=t[19]:(N=o&&(0,v.jsx)(`span`,{className:`ibacmi-loader__detail`,children:o}),t[18]=o,t[19]=N);let P;t[20]!==_||t[21]!==l||t[22]!==y?(P=_&&(0,v.jsxs)(`span`,{className:`ibacmi-loader__percent`,role:`progressbar`,"aria-label":l,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":y,children:[y,`%`]}),t[20]=_,t[21]=l,t[22]=y,t[23]=P):P=t[23];let F;t[24]!==f||t[25]!==p||t[26]!==c||t[27]!==s?(F=(s||c)&&(0,v.jsxs)(`span`,{className:`ibacmi-loader__actions`,children:[p&&s&&(0,v.jsx)(`button`,{type:`button`,onClick:s,children:`Retry`}),!f&&!p&&c&&(0,v.jsx)(`button`,{type:`button`,onClick:c,children:`Cancel`})]}),t[24]=f,t[25]=p,t[26]=c,t[27]=s,t[28]=F):F=t[28];let I;t[29]!==M||t[30]!==N||t[31]!==P||t[32]!==F?(I=(0,v.jsxs)(`span`,{className:`ibacmi-loader__copy`,children:[j,M,N,P,F]}),t[29]=M,t[30]=N,t[31]=P,t[32]=F,t[33]=I):I=t[33];let L;return t[34]!==A||t[35]!==I||t[36]!==b||t[37]!==x||t[38]!==S||t[39]!==C?(L=(0,v.jsxs)(`span`,{className:b,role:x,"aria-live":S,"aria-busy":C,children:[A,I]}),t[34]=A,t[35]=I,t[36]=b,t[37]=x,t[38]=S,t[39]=C,t[40]=L):L=t[40],L}var b={connection:{title:`The Server Is Not Connected`,description:`We couldn't connect to the server right now. Please check your internet connection or try again in a moment.`,action:`Retry Connection`},session:{title:`Session Expired`,description:`Your session has expired. Please sign in again.`,action:`Sign In Again`},validation:{title:`Unable to Load Information`,description:`We couldn't process your request. Please try again or contact the administrator.`,action:`Try Again`},service:{title:`Service Temporarily Unavailable`,description:`Something went wrong while processing your request.`,action:`Try Again`},offline:{title:`No Internet Connection`,description:`Please check your internet connection and reconnect.`,action:`Retry Connection`}};function x(e){return typeof e==`string`&&e.trim().length>0&&e.length<=100}function S(e,t){return!!(e&&e.role===t&&x(e.sessionToken)&&(t!==`student`||typeof e.schoolId==`string`&&e.schoolId.trim()))}function C(e,{online:t=typeof navigator>`u`||navigator.onLine!==!1}={}){if(e?.isUserFacing&&b[e.category])return e.category;let n=e?.data?.code||e?.code,r=String(e?.message||``);return n===`SESSION_EXPIRED`?`session`:n===`INVALID_REQUEST`||/ArgumentValidationError|missing (?:the )?required field|Could not find public function|does not match the validator|Object contains extra field|InvalidArgument/i.test(r)||/start a new conversation/i.test(r)?`validation`:/(?:session.{0,30}(?:expired|invalid)|please sign in again|sign in as an administrator|account is no longer active|active (?:student|administrator) account is required)/i.test(r)?`session`:/only (?:update|upload|access) your own|not authorized|permission denied/i.test(r)||/^(?:Select |Choose |Enter |Use a valid |Please (?:select|choose|enter|complete)|Only (?:PDF|PNG)|Each file|Your profile changed|Submitted na)/i.test(r)?`validation`:t?/\[CONVEX [QMA]|\[Request ID:|Uncaught Error:|Server Error|ConvexError/i.test(r)?`service`:n===`CONNECTION_FAILED`||/Failed to fetch|fetch failed|NetworkError|Network request failed|ERR_(?:CONNECTION|NETWORK|INTERNET|NAME_NOT_RESOLVED)|ECONN(?:REFUSED|RESET)|ENOTFOUND/i.test(r)?`connection`:`service`:`offline`}var w=class extends Error{constructor(e){super(b[e]?.description||b.service.description),this.name=`UserFacingError`,this.category=e,this.isUserFacing=!0}},T=new Set([`Select at least one batch.`,`Select a school year.`,`Generate a billing preview first.`,`Generate and review Form 2 first.`,`No grantee records match these filters.`,`Choose at least one documentation image.`,`Invalid admin credentials.`,`Email or School ID and password are required.`,`Your profile changed in another tab. Reload before saving.`,`Upload cancelled.`,`Image upload cancelled.`]);function E(e,t=b.service.description){if(e?.isUserFacing)return b[e.category]?.description||t;let n=typeof e==`string`?e:e?.message;return T.has(n)?n:t}function D(e,t=`application`){let n=C(e),r=/^[a-zA-Z0-9_.:-]{1,100}$/.test(t)?t:`application`,i=String(e?.message||``).match(/\[Request ID: ([a-f0-9-]{8,64})\]/i);return{category:n,operation:r,timestamp:new Date().toISOString(),diagnostic:`${n.toUpperCase()}_ERROR`,...i?{requestId:i[1]}:{}}}async function O(e,{attempts:t=3,delay:n=e=>new Promise(t=>setTimeout(t,e)),shouldRetry:r=e=>[`connection`,`offline`,`service`].includes(C(e))}={}){let i;for(let a=0;a<Math.min(3,Math.max(1,t));a++){a&&await n(300*2**(a-1));try{return await e(a)}catch(e){if(i=e,!r(e))throw e}}throw i}function k(e){let t=(0,h.c)(29),{category:n,busy:r,canClose:i,onRetry:a,onSignIn:o,onClose:s}=e,c=n===void 0?`service`:n,l=r===void 0?!1:r,u=i===void 0?!1:i,d=(0,m.useRef)(null),f=b[c]||b.service,p,_;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=()=>{let e=d.current,t=document.activeElement,n=document.body.style.overflow;return e.showModal(),document.body.style.overflow=`hidden`,()=>{e.close(),document.body.style.overflow=n,t?.isConnected&&t.focus({preventScroll:!0})}},_=[],t[0]=p,t[1]=_):(p=t[0],_=t[1]),(0,m.useEffect)(p,_);let x;t[2]!==u||t[3]!==s?(x=e=>{e.preventDefault(),u&&s?.()},t[2]=u,t[3]=s,t[4]=x):x=t[4];let S;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,v.jsxs)(`div`,{className:`ibacmi-server-error__brand`,children:[(0,v.jsx)(`img`,{src:g,alt:`IBACMI`,width:`56`,height:`56`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:`IBACMI`}),(0,v.jsx)(`span`,{children:`Scholarship Office`})]})]}),t[5]=S):S=t[5];let C;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,v.jsx)(`div`,{className:`ibacmi-server-error__symbol`,"aria-hidden":`true`,children:(0,v.jsxs)(`svg`,{viewBox:`0 0 48 48`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,v.jsx)(`rect`,{x:`8`,y:`8`,width:`32`,height:`13`,rx:`4`}),(0,v.jsx)(`rect`,{x:`8`,y:`27`,width:`32`,height:`13`,rx:`4`}),(0,v.jsx)(`path`,{d:`M14 14h1m-1 19h1M30 14h5M30 33h5M5 43 43 5`,strokeLinecap:`round`})]})}),t[6]=C):C=t[6];let w=c===`session`?`Account access`:`We’re here to help`,T;t[7]===w?T=t[8]:(T=(0,v.jsx)(`span`,{className:`ibacmi-server-error__eyebrow`,children:w}),t[7]=w,t[8]=T);let E;t[9]===f.title?E=t[10]:(E=(0,v.jsx)(`h2`,{id:`ibacmi-server-error-title`,children:f.title}),t[9]=f.title,t[10]=E);let D;t[11]===f.description?D=t[12]:(D=(0,v.jsx)(`p`,{id:`ibacmi-server-error-description`,children:f.description}),t[11]=f.description,t[12]=D);let O;t[13]!==l||t[14]!==c||t[15]!==f.action||t[16]!==a||t[17]!==o?(O=l?(0,v.jsx)(y,{variant:`compact`,message:`Checking the connection and restoring information…`}):(0,v.jsx)(`div`,{className:`ibacmi-server-error__actions`,children:(0,v.jsx)(`button`,{type:`button`,className:`ibacmi-server-error__primary`,onClick:c===`session`?o:a,children:f.action})}),t[13]=l,t[14]=c,t[15]=f.action,t[16]=a,t[17]=o,t[18]=O):O=t[18];let k;t[19]!==u||t[20]!==s?(k=u&&(0,v.jsx)(`div`,{className:`ibacmi-server-error__actions`,children:(0,v.jsx)(`button`,{type:`button`,className:`ibacmi-server-error__secondary`,onClick:s,children:`Close`})}),t[19]=u,t[20]=s,t[21]=k):k=t[21];let A;return t[22]!==T||t[23]!==E||t[24]!==D||t[25]!==O||t[26]!==k||t[27]!==x?(A=(0,v.jsxs)(`dialog`,{ref:d,className:`ibacmi-server-error`,"aria-labelledby":`ibacmi-server-error-title`,"aria-describedby":`ibacmi-server-error-description`,onCancel:x,children:[S,C,T,E,D,O,k]}),t[22]=T,t[23]=E,t[24]=D,t[25]=O,t[26]=k,t[27]=x,t[28]=A):A=t[28],A}var A=new Set,j=new Map,M=[],N=null,P=0,F={session:5,offline:4,connection:3,validation:2,service:1};function I(){N=[...j.values()].filter(e=>!e.dismissed).sort((e,t)=>F[t.category]-F[e.category])[0]||null,A.forEach(e=>e())}var L=e=>(A.add(e),()=>A.delete(e)),R=()=>N,z=()=>[...j.values()].filter(e=>!e.dismissed);function B(e,t=`application`){console.warn(`[IBACMI]`,D(e,t))}function V(e,{operation:t=`application`,source:n=t,retry:r,kind:i=`operation`,canClose:a=!0}={}){if(e?.isUserFacing)return e;let o=C(e),s=j.get(n),c={id:s?.id||++P,source:n,operation:D(e,t).operation,category:o,kind:i,retry:r,canClose:o!==`session`&&a,dismissed:!1};if(j.set(n,c),!s||s.category!==o){let n=D(e,t);M.push(n),M.length>50&&M.shift(),console.warn(`[IBACMI]`,n)}return I(),new w(o)}function H(e){j.delete(e)&&I()}function U(){j.forEach(e=>{e.canClose&&(e.dismissed=!0)}),I()}function W(){j.clear(),I()}function G(e,t,n=`application.operation`){return E(e,``)||E(V(e,{operation:n,canClose:!0}),t)}for(var K=[],q=[],J=Uint8Array,Y=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,X=0,ee=Y.length;X<ee;++X)K[X]=Y[X],q[Y.charCodeAt(X)]=X;q[45]=62,q[95]=63;function Z(e){var t=e.length;if(t%4>0)throw Error(`Invalid string. Length must be a multiple of 4`);var n=e.indexOf(`=`);n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function Q(e,t,n){return(t+n)*3/4-n}function te(e){var t,n=Z(e),r=n[0],i=n[1],a=new J(Q(e,r,i)),o=0,s=i>0?r-4:r,c;for(c=0;c<s;c+=4)t=q[e.charCodeAt(c)]<<18|q[e.charCodeAt(c+1)]<<12|q[e.charCodeAt(c+2)]<<6|q[e.charCodeAt(c+3)],a[o++]=t>>16&255,a[o++]=t>>8&255,a[o++]=t&255;return i===2&&(t=q[e.charCodeAt(c)]<<2|q[e.charCodeAt(c+1)]>>4,a[o++]=t&255),i===1&&(t=q[e.charCodeAt(c)]<<10|q[e.charCodeAt(c+1)]<<4|q[e.charCodeAt(c+2)]>>2,a[o++]=t>>8&255,a[o++]=t&255),a}function ne(e){return K[e>>18&63]+K[e>>12&63]+K[e>>6&63]+K[e&63]}function re(e,t,n){for(var r,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(e[a+2]&255),i.push(ne(r));return i.join(``)}function ie(e){for(var t,n=e.length,r=n%3,i=[],a=16383,o=0,s=n-r;o<s;o+=a)i.push(re(e,o,o+a>s?s:o+a));return r===1?(t=e[n-1],i.push(K[t>>2]+K[t<<4&63]+`==`)):r===2&&(t=(e[n-2]<<8)+e[n-1],i.push(K[t>>10]+K[t>>4&63]+K[t<<2&63]+`=`)),i.join(``)}function ae(e){if(e===void 0)return{};if(!se(e))throw Error(`The arguments to a Convex function must be an object. Received: ${e}`);return e}function oe(e){if(e===void 0)throw Error(`Client created with undefined deployment address. If you used an environment variable, check that it's set.`);if(typeof e!=`string`)throw Error(`Invalid deployment address: found ${e}".`);if(!(e.startsWith(`http:`)||e.startsWith(`https:`)))throw Error(`Invalid deployment address: Must start with "https://" or "http://". Found "${e}".`);try{new URL(e)}catch{throw Error(`Invalid deployment address: "${e}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}if(e.endsWith(`.convex.site`))throw Error(`Invalid deployment address: "${e}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`)}function se(e){let t=typeof e==`object`,n=Object.getPrototypeOf(e),r=n===null||n===Object.prototype||n?.constructor?.name===`Object`;return t&&r}var ce=!0,le=BigInt(`-9223372036854775808`),ue=BigInt(`9223372036854775807`),de=BigInt(`0`),fe=BigInt(`8`),pe=BigInt(`256`);function me(e){return Number.isNaN(e)||!Number.isFinite(e)||Object.is(e,-0)}function he(e){e<de&&(e-=le+le);let t=e.toString(16);t.length%2==1&&(t=`0`+t);let n=new Uint8Array(new ArrayBuffer(8)),r=0;for(let i of t.match(/.{2}/g).reverse())n.set([parseInt(i,16)],r++),e>>=fe;return ie(n)}function ge(e){let t=te(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);let n=de,r=de;for(let e of t)n+=BigInt(e)*pe**r,r++;return n>ue&&(n+=le+le),n}function _e(e){if(e<le||ue<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);let t=new ArrayBuffer(8);return new DataView(t).setBigInt64(0,e,!0),ie(new Uint8Array(t))}function ve(e){let t=te(e);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);return new DataView(t.buffer).getBigInt64(0,!0)}var ye=DataView.prototype.setBigInt64?_e:he,be=DataView.prototype.getBigInt64?ve:ge,xe=1024;function Se(e){if(e.length>xe)throw Error(`Field name ${e} exceeds maximum field name length ${xe}.`);if(e.startsWith(`$`))throw Error(`Field name ${e} starts with a '$', which is reserved.`);for(let t=0;t<e.length;t+=1){let n=e.charCodeAt(t);if(n<32||n>=127)throw Error(`Field name ${e} has invalid character '${e[t]}': Field names can only contain non-control ASCII characters`)}}function Ce(e){if(e===null||typeof e==`boolean`||typeof e==`number`||typeof e==`string`)return e;if(Array.isArray(e))return e.map(e=>Ce(e));if(typeof e!=`object`)throw Error(`Unexpected type of ${e}`);let t=Object.entries(e);if(t.length===1){let n=t[0][0];if(n===`$bytes`){if(typeof e.$bytes!=`string`)throw Error(`Malformed $bytes field on ${e}`);return te(e.$bytes).buffer}if(n===`$integer`){if(typeof e.$integer!=`string`)throw Error(`Malformed $integer field on ${e}`);return be(e.$integer)}if(n===`$float`){if(typeof e.$float!=`string`)throw Error(`Malformed $float field on ${e}`);let t=te(e.$float);if(t.byteLength!==8)throw Error(`Received ${t.byteLength} bytes, expected 8 for $float`);let n=new DataView(t.buffer).getFloat64(0,ce);if(!me(n))throw Error(`Float ${n} should be encoded as a number`);return n}if(n===`$set`)throw Error(`Received a Set which is no longer supported as a Convex type.`);if(n===`$map`)throw Error(`Received a Map which is no longer supported as a Convex type.`)}let n={};for(let[t,r]of Object.entries(e))Se(t),n[t]=Ce(r);return n}var we=16384;function Te(e){let t=JSON.stringify(e,(e,t)=>t===void 0?`undefined`:typeof t==`bigint`?`${t.toString()}n`:t);if(t.length>we){let e=we-14,n=t.codePointAt(e-1);return n!==void 0&&n>65535&&--e,t.substring(0,e)+`[...truncated]`}return t}function Ee(e,t,n,r){if(e===void 0){let e=n&&` (present at path ${n} in original object ${Te(t)})`;throw Error(`undefined is not a valid Convex value${e}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`)}if(e===null)return e;if(typeof e==`bigint`){if(e<le||ue<e)throw Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);return{$integer:ye(e)}}if(typeof e==`number`)if(me(e)){let t=new ArrayBuffer(8);return new DataView(t).setFloat64(0,e,ce),{$float:ie(new Uint8Array(t))}}else return e;if(typeof e==`boolean`||typeof e==`string`)return e;if(e instanceof ArrayBuffer)return{$bytes:ie(new Uint8Array(e))};if(Array.isArray(e))return e.map((e,r)=>Ee(e,t,n+`[${r}]`,!1));if(e instanceof Set)throw Error(De(n,`Set`,[...e],t));if(e instanceof Map)throw Error(De(n,`Map`,[...e],t));if(!se(e)){let r=e?.constructor?.name,i=r?`${r} `:``;throw Error(De(n,i,e,t))}let i={},a=Object.entries(e);a.sort(([e,t],[n,r])=>e===n?0:e<n?-1:1);for(let[e,o]of a)o===void 0?r&&(Se(e),i[e]=Oe(o,t,n+`.${e}`)):(Se(e),i[e]=Ee(o,t,n+`.${e}`,!1));return i}function De(e,t,n,r){return e?`${t}${Te(n)} is not a supported Convex type (present at path ${e} in original object ${Te(r)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`:`${t}${Te(n)} is not a supported Convex type.`}function Oe(e,t,n){if(e===void 0)return{$undefined:null};if(t===void 0)throw Error(`Programming error. Current value is ${Te(e)} but original value is undefined`);return Ee(e,t,n,!1)}function ke(e){return Ee(e,e,``,!1)}var Ae=Object.defineProperty,je=(e,t,n)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Me=(e,t,n)=>je(e,typeof t==`symbol`?t:t+``,n),Ne=`https://docs.convex.dev/error#undefined-validator`;function Pe(e,t){let n=t===void 0?``:` for field "${t}"`;throw Error(`A validator is undefined${n} in ${e}. This is often caused by circular imports. See ${Ne} for details.`)}var Fe=class{constructor({isOptional:e}){Me(this,`type`),Me(this,`fieldPaths`),Me(this,`isOptional`),Me(this,`isConvexValidator`),this.isOptional=e,this.isConvexValidator=!0}},Ie=class e extends Fe{constructor({isOptional:e,tableName:t}){if(super({isOptional:e}),Me(this,`tableName`),Me(this,`kind`,`id`),typeof t!=`string`)throw Error(`v.id(tableName) requires a string`);this.tableName=t}get json(){return{type:`id`,tableName:this.tableName}}asOptional(){return new e({isOptional:`optional`,tableName:this.tableName})}},Le=class e extends Fe{constructor(){super(...arguments),Me(this,`kind`,`float64`)}get json(){return{type:`number`}}asOptional(){return new e({isOptional:`optional`})}},Re=class e extends Fe{constructor(){super(...arguments),Me(this,`kind`,`int64`)}get json(){return{type:`bigint`}}asOptional(){return new e({isOptional:`optional`})}},ze=class e extends Fe{constructor(){super(...arguments),Me(this,`kind`,`boolean`)}get json(){return{type:this.kind}}asOptional(){return new e({isOptional:`optional`})}},Be=class e extends Fe{constructor(){super(...arguments),Me(this,`kind`,`bytes`)}get json(){return{type:this.kind}}asOptional(){return new e({isOptional:`optional`})}},Ve=class e extends Fe{constructor(){super(...arguments),Me(this,`kind`,`string`)}get json(){return{type:this.kind}}asOptional(){return new e({isOptional:`optional`})}},He=class e extends Fe{constructor(){super(...arguments),Me(this,`kind`,`null`)}get json(){return{type:this.kind}}asOptional(){return new e({isOptional:`optional`})}},Ue=class e extends Fe{constructor(){super(...arguments),Me(this,`kind`,`any`)}get json(){return{type:this.kind}}asOptional(){return new e({isOptional:`optional`})}},We=class e extends Fe{constructor({isOptional:e,fields:t}){super({isOptional:e}),Me(this,`fields`),Me(this,`kind`,`object`),globalThis.Object.entries(t).forEach(([e,t])=>{if(t===void 0&&Pe(`v.object()`,e),!t.isConvexValidator)throw Error(`v.object() entries must be validators`)}),this.fields=t}get json(){return{type:this.kind,value:globalThis.Object.fromEntries(globalThis.Object.entries(this.fields).map(([e,t])=>[e,{fieldType:t.json,optional:t.isOptional===`optional`}]))}}asOptional(){return new e({isOptional:`optional`,fields:this.fields})}omit(...t){let n={...this.fields};for(let e of t)delete n[e];return new e({isOptional:this.isOptional,fields:n})}pick(...t){let n={};for(let e of t)n[e]=this.fields[e];return new e({isOptional:this.isOptional,fields:n})}partial(){let t={};for(let[e,n]of globalThis.Object.entries(this.fields))t[e]=n.asOptional();return new e({isOptional:this.isOptional,fields:t})}extend(t){return new e({isOptional:this.isOptional,fields:{...this.fields,...t}})}},Ge=class e extends Fe{constructor({isOptional:e,value:t}){if(super({isOptional:e}),Me(this,`value`),Me(this,`kind`,`literal`),typeof t!=`string`&&typeof t!=`boolean`&&typeof t!=`number`&&typeof t!=`bigint`)throw Error(`v.literal(value) must be a string, number, or boolean`);this.value=t}get json(){return{type:this.kind,value:ke(this.value)}}asOptional(){return new e({isOptional:`optional`,value:this.value})}},Ke=class e extends Fe{constructor({isOptional:e,element:t}){super({isOptional:e}),Me(this,`element`),Me(this,`kind`,`array`),t===void 0&&Pe(`v.array()`),this.element=t}get json(){return{type:this.kind,value:this.element.json}}asOptional(){return new e({isOptional:`optional`,element:this.element})}},qe=class e extends Fe{constructor({isOptional:e,key:t,value:n}){if(super({isOptional:e}),Me(this,`key`),Me(this,`value`),Me(this,`kind`,`record`),t===void 0&&Pe(`v.record()`,`key`),n===void 0&&Pe(`v.record()`,`value`),t.isOptional===`optional`)throw Error(`Record validator cannot have optional keys`);if(n.isOptional===`optional`)throw Error(`Record validator cannot have optional values`);if(!t.isConvexValidator||!n.isConvexValidator)throw Error(`Key and value of v.record() but be validators`);this.key=t,this.value=n}get json(){return{type:this.kind,keys:this.key.json,values:{fieldType:this.value.json,optional:!1}}}asOptional(){return new e({isOptional:`optional`,key:this.key,value:this.value})}},Je=class e extends Fe{constructor({isOptional:e,members:t}){super({isOptional:e}),Me(this,`members`),Me(this,`kind`,`union`),t.forEach((e,t)=>{if(e===void 0&&Pe(`v.union()`,`member at index ${t}`),!e.isConvexValidator)throw Error(`All members of v.union() must be validators`)}),this.members=t}get json(){return{type:this.kind,value:this.members.map(e=>e.json)}}asOptional(){return new e({isOptional:`optional`,members:this.members})}},Ye={id:e=>new Ie({isOptional:`required`,tableName:e}),null:()=>new He({isOptional:`required`}),number:()=>new Le({isOptional:`required`}),float64:()=>new Le({isOptional:`required`}),bigint:()=>new Re({isOptional:`required`}),int64:()=>new Re({isOptional:`required`}),boolean:()=>new ze({isOptional:`required`}),string:()=>new Ve({isOptional:`required`}),bytes:()=>new Be({isOptional:`required`}),literal:e=>new Ge({isOptional:`required`,value:e}),array:e=>new Ke({isOptional:`required`,element:e}),object:e=>new We({isOptional:`required`,fields:e}),record:(e,t)=>new qe({isOptional:`required`,key:e,value:t}),union:(...e)=>new Je({isOptional:`required`,members:e}),any:()=>new Ue({isOptional:`required`}),optional:e=>e.asOptional(),nullable:e=>Ye.union(e,Ye.null())},Xe=Object.defineProperty,Ze=(e,t,n)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qe=(e,t,n)=>Ze(e,typeof t==`symbol`?t:t+``,n),$e,et,tt=Symbol.for(`ConvexError`),nt=class extends (et=Error,$e=tt,et){constructor(e){super(typeof e==`string`?e:Te(e)),Qe(this,`name`,`ConvexError`),Qe(this,`data`),Qe(this,$e,!0),this.data=e}},rt=`1.40.0`,it=Object.defineProperty,at=(e,t,n)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ot=(e,t,n)=>at(e,typeof t==`symbol`?t:t+``,n),st=`color:rgb(0, 145, 255)`;function ct(e){switch(e){case`query`:return`Q`;case`mutation`:return`M`;case`action`:return`A`;case`any`:return`?`}}var lt=class{constructor(e){ot(this,`_onLogLineFuncs`),ot(this,`_verbose`),this._onLogLineFuncs={},this._verbose=e.verbose}addLogLineListener(e){let t=Math.random().toString(36).substring(2,15);for(let e=0;e<10&&this._onLogLineFuncs[t]!==void 0;e++)t=Math.random().toString(36).substring(2,15);return this._onLogLineFuncs[t]=e,()=>{delete this._onLogLineFuncs[t]}}logVerbose(...e){if(this._verbose)for(let t of Object.values(this._onLogLineFuncs))t(`debug`,`${new Date().toISOString()}`,...e)}log(...e){for(let t of Object.values(this._onLogLineFuncs))t(`info`,...e)}warn(...e){for(let t of Object.values(this._onLogLineFuncs))t(`warn`,...e)}error(...e){for(let t of Object.values(this._onLogLineFuncs))t(`error`,...e)}};function ut(e){let t=new lt(e);return t.addLogLineListener((e,...t)=>{switch(e){case`debug`:console.debug(...t);break;case`info`:console.log(...t);break;case`warn`:console.warn(...t);break;case`error`:console.error(...t);break;default:console.log(...t)}}),t}function dt(e){return new lt(e)}function ft(e,t,n,r,i){let a=ct(n);if(typeof i==`object`&&(i=`ConvexError ${JSON.stringify(i.errorData,null,2)}`),t===`info`){let t=i.match(/^\[.*?\] /);if(t===null){e.error(`[CONVEX ${a}(${r})] Could not parse console.log`);return}let n=i.slice(1,t[0].length-2),o=i.slice(t[0].length);e.log(`%c[CONVEX ${a}(${r})] [${n}]`,st,o)}else e.error(`[CONVEX ${a}(${r})] ${i}`)}function pt(e,t){let n=`[CONVEX FATAL ERROR] ${t}`;return e.error(n),Error(n)}function mt(e,t,n){return`[CONVEX ${ct(e)}(${t})] ${n.errorMessage}
  Called by client`}function ht(e,t){return t.data=e.errorData,t}function gt(e){let t=e.split(`:`),n,r;return t.length===1?(n=t[0],r=`default`):(n=t.slice(0,t.length-1).join(`:`),r=t[t.length-1]),n.endsWith(`.js`)&&(n=n.slice(0,-3)),`${n}:${r}`}function _t(e,t){return JSON.stringify({udfPath:gt(e),args:ke(t)})}function vt(e,t,n){let{initialNumItems:r,id:i}=n;return JSON.stringify({type:`paginated`,udfPath:gt(e),args:ke(t),options:ke({initialNumItems:r,id:i})})}var yt=Object.defineProperty,bt=(e,t,n)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xt=(e,t,n)=>bt(e,typeof t==`symbol`?t:t+``,n),St=class{constructor(){xt(this,`nextQueryId`),xt(this,`querySetVersion`),xt(this,`querySet`),xt(this,`queryIdToToken`),xt(this,`identityVersion`),xt(this,`auth`),xt(this,`outstandingQueriesOlderThanRestart`),xt(this,`outstandingAuthOlderThanRestart`),xt(this,`paused`),xt(this,`pendingQuerySetModifications`),this.nextQueryId=0,this.querySetVersion=0,this.identityVersion=0,this.querySet=new Map,this.queryIdToToken=new Map,this.outstandingQueriesOlderThanRestart=new Set,this.outstandingAuthOlderThanRestart=!1,this.paused=!1,this.pendingQuerySetModifications=new Map}hasSyncedPastLastReconnect(){return this.outstandingQueriesOlderThanRestart.size===0&&!this.outstandingAuthOlderThanRestart}markAuthCompletion(){this.outstandingAuthOlderThanRestart=!1}subscribe(e,t,n,r){let i=gt(e),a=_t(i,t),o=this.querySet.get(a);if(o!==void 0)return o.numSubscribers+=1,{queryToken:a,modification:null,unsubscribe:()=>this.removeSubscriber(a)};{let e=this.nextQueryId++,o={id:e,canonicalizedUdfPath:i,args:t,numSubscribers:1,journal:n,componentPath:r};this.querySet.set(a,o),this.queryIdToToken.set(e,a);let s=this.querySetVersion,c=this.querySetVersion+1,l={type:`Add`,queryId:e,udfPath:i,args:[ke(t)],journal:n,componentPath:r};return this.paused?this.pendingQuerySetModifications.set(e,l):this.querySetVersion=c,{queryToken:a,modification:{type:`ModifyQuerySet`,baseVersion:s,newVersion:c,modifications:[l]},unsubscribe:()=>this.removeSubscriber(a)}}}transition(e){for(let t of e.modifications)switch(t.type){case`QueryUpdated`:case`QueryFailed`:{this.outstandingQueriesOlderThanRestart.delete(t.queryId);let e=t.journal;if(e!==void 0){let n=this.queryIdToToken.get(t.queryId);n!==void 0&&(this.querySet.get(n).journal=e)}break}case`QueryRemoved`:this.outstandingQueriesOlderThanRestart.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}}queryId(e,t){let n=_t(gt(e),t),r=this.querySet.get(n);return r===void 0?null:r.id}isCurrentOrNewerAuthVersion(e){return e>=this.identityVersion}getAuth(){return this.auth}setAuth(e){this.auth={tokenType:`User`,value:e};let t=this.identityVersion;return this.paused||(this.identityVersion=t+1),{type:`Authenticate`,baseVersion:t,...this.auth}}setAdminAuth(e,t){let n={tokenType:`Admin`,value:e,impersonating:t};this.auth=n;let r=this.identityVersion;return this.paused||(this.identityVersion=r+1),{type:`Authenticate`,baseVersion:r,...n}}clearAuth(){this.auth=void 0,this.markAuthCompletion();let e=this.identityVersion;return this.paused||(this.identityVersion=e+1),{type:`Authenticate`,tokenType:`None`,baseVersion:e}}hasAuth(){return!!this.auth}isNewAuth(e){return this.auth?.value!==e}queryPath(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).canonicalizedUdfPath:null}queryArgs(e){let t=this.queryIdToToken.get(e);return t?this.querySet.get(t).args:null}queryToken(e){return this.queryIdToToken.get(e)??null}queryJournal(e){return this.querySet.get(e)?.journal}restart(){this.unpause(),this.outstandingQueriesOlderThanRestart.clear();let e=[];for(let t of this.querySet.values()){let n={type:`Add`,queryId:t.id,udfPath:t.canonicalizedUdfPath,args:[ke(t.args)],journal:t.journal,componentPath:t.componentPath};e.push(n),this.outstandingQueriesOlderThanRestart.add(t.id)}this.querySetVersion=1;let t={type:`ModifyQuerySet`,baseVersion:0,newVersion:1,modifications:e};if(!this.auth)return this.identityVersion=0,[t,void 0];this.outstandingAuthOlderThanRestart=!0;let n={type:`Authenticate`,baseVersion:0,...this.auth};return this.identityVersion=1,[t,n]}pause(){this.paused=!0}resume(){let e=this.pendingQuerySetModifications.size>0?{type:`ModifyQuerySet`,baseVersion:this.querySetVersion,newVersion:++this.querySetVersion,modifications:Array.from(this.pendingQuerySetModifications.values())}:void 0,t=this.auth===void 0?void 0:{type:`Authenticate`,baseVersion:this.identityVersion++,...this.auth};return this.unpause(),[e,t]}unpause(){this.paused=!1,this.pendingQuerySetModifications.clear()}removeSubscriber(e){let t=this.querySet.get(e);if(t.numSubscribers>1)return--t.numSubscribers,null;{this.querySet.delete(e),this.queryIdToToken.delete(t.id),this.outstandingQueriesOlderThanRestart.delete(t.id);let n=this.querySetVersion,r=this.querySetVersion+1,i={type:`Remove`,queryId:t.id};return this.paused?this.pendingQuerySetModifications.has(t.id)?this.pendingQuerySetModifications.delete(t.id):this.pendingQuerySetModifications.set(t.id,i):this.querySetVersion=r,{type:`ModifyQuerySet`,baseVersion:n,newVersion:r,modifications:[i]}}}},Ct=Object.defineProperty,wt=(e,t,n)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Tt=(e,t,n)=>wt(e,typeof t==`symbol`?t:t+``,n),Et=class{constructor(e,t){this.logger=e,this.markConnectionStateDirty=t,Tt(this,`inflightRequests`),Tt(this,`requestsOlderThanRestart`),Tt(this,`inflightMutationsCount`,0),Tt(this,`inflightActionsCount`,0),this.inflightRequests=new Map,this.requestsOlderThanRestart=new Set}request(e,t){let n=new Promise(n=>{let r=t?`Requested`:`NotSent`;this.inflightRequests.set(e.requestId,{message:e,status:{status:r,requestedAt:new Date,onResult:n}}),e.type===`Mutation`?this.inflightMutationsCount++:e.type===`Action`&&this.inflightActionsCount++});return this.markConnectionStateDirty(),n}onResponse(e){let t=this.inflightRequests.get(e.requestId);if(t===void 0||t.status.status===`Completed`)return null;let n=t.message.type===`Mutation`?`mutation`:`action`,r=t.message.udfPath;for(let t of e.logLines)ft(this.logger,`info`,n,r,t);let i=t.status,a,o;if(e.success)a={success:!0,logLines:e.logLines,value:Ce(e.result)},o=()=>i.onResult(a);else{let t=e.result,{errorData:s}=e;ft(this.logger,`error`,n,r,t),a={success:!1,errorMessage:t,errorData:s===void 0?void 0:Ce(s),logLines:e.logLines},o=()=>i.onResult(a)}return e.type===`ActionResponse`||!e.success?(o(),this.inflightRequests.delete(e.requestId),this.requestsOlderThanRestart.delete(e.requestId),t.message.type===`Action`?this.inflightActionsCount--:t.message.type===`Mutation`&&this.inflightMutationsCount--,this.markConnectionStateDirty(),{requestId:e.requestId,result:a}):(t.status={status:`Completed`,result:a,ts:e.ts,onResolve:o},null)}removeCompleted(e){let t=new Map;for(let[n,r]of this.inflightRequests.entries()){let i=r.status;i.status===`Completed`&&i.ts.lessThanOrEqual(e)&&(i.onResolve(),t.set(n,i.result),r.message.type===`Mutation`?this.inflightMutationsCount--:r.message.type===`Action`&&this.inflightActionsCount--,this.inflightRequests.delete(n),this.requestsOlderThanRestart.delete(n))}return t.size>0&&this.markConnectionStateDirty(),t}restart(){this.requestsOlderThanRestart=new Set(this.inflightRequests.keys());let e=[];for(let[t,n]of this.inflightRequests){if(n.status.status===`NotSent`){n.status.status=`Requested`,e.push(n.message);continue}if(n.message.type===`Mutation`)e.push(n.message);else if(n.message.type===`Action`){if(this.inflightRequests.delete(t),this.requestsOlderThanRestart.delete(t),this.inflightActionsCount--,n.status.status===`Completed`)throw Error(`Action should never be in 'Completed' state`);n.status.onResult({success:!1,errorMessage:`Connection lost while action was in flight`,logLines:[]})}}return this.markConnectionStateDirty(),e}resume(){let e=[];for(let[,t]of this.inflightRequests)if(t.status.status===`NotSent`){t.status.status=`Requested`,e.push(t.message);continue}return e}hasIncompleteRequests(){for(let e of this.inflightRequests.values())if(e.status.status===`Requested`)return!0;return!1}hasInflightRequests(){return this.inflightRequests.size>0}hasSyncedPastLastReconnect(){return this.requestsOlderThanRestart.size===0}timeOfOldestInflightRequest(){if(this.inflightRequests.size===0)return null;let e=Date.now();for(let t of this.inflightRequests.values())t.status.status!==`Completed`&&t.status.requestedAt.getTime()<e&&(e=t.status.requestedAt.getTime());return new Date(e)}inflightMutations(){return this.inflightMutationsCount}inflightActions(){return this.inflightActionsCount}},Dt=Symbol.for(`functionName`),Ot=Symbol.for(`toReferencePath`);function kt(e){return e[Ot]??null}function At(e){return e.startsWith(`function://`)}function jt(e){let t;if(typeof e==`string`)t=At(e)?{functionHandle:e}:{name:e};else if(e[Dt])t={name:e[Dt]};else{let n=kt(e);if(!n)throw Error(`${e} is not a functionReference`);t={reference:n}}return t}function Mt(e){let t=jt(e);if(t.name===void 0)throw t.functionHandle===void 0?t.reference===void 0?Error(`Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(t)}`):Error(`Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${t.reference}`):Error(`Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${t.functionHandle}`);if(typeof e==`string`)return e;let n=e[Dt];if(!n)throw Error(`${e} is not a functionReference`);return n}function Nt(e){return{[Dt]:e}}function Pt(e=[]){return new Proxy({},{get(t,n){if(typeof n==`string`)return Pt([...e,n]);if(n===Dt){if(e.length<2){let t=[`api`,...e].join(`.`);throw Error(`API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${t}\``)}let t=e.slice(0,-1).join(`/`),n=e[e.length-1];return n==="default"?t:t+`:`+n}else if(n===Symbol.toStringTag)return`FunctionReference`;else return}})}var Ft=Pt(),It=Object.defineProperty,Lt=(e,t,n)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rt=(e,t,n)=>Lt(e,typeof t==`symbol`?t:t+``,n),zt=class e{constructor(e){Rt(this,`queryResults`),Rt(this,`modifiedQueries`),this.queryResults=e,this.modifiedQueries=[]}getQuery(t,...n){let r=ae(n[0]),i=Mt(t),a=this.queryResults.get(_t(i,r));if(a!==void 0)return e.queryValue(a.result)}getAllQueries(t){let n=[],r=Mt(t);for(let t of this.queryResults.values())t.udfPath===gt(r)&&n.push({args:t.args,value:e.queryValue(t.result)});return n}setQuery(e,t,n){let r=ae(t),i=Mt(e),a=_t(i,r),o;o=n===void 0?void 0:{success:!0,value:n,logLines:[]};let s={udfPath:i,args:r,result:o};this.queryResults.set(a,s),this.modifiedQueries.push(a)}static queryValue(e){if(e!==void 0&&e.success)return e.value}},Bt=class{constructor(){Rt(this,`queryResults`),Rt(this,`optimisticUpdates`),this.queryResults=new Map,this.optimisticUpdates=[]}ingestQueryResultsFromServer(e,t){this.optimisticUpdates=this.optimisticUpdates.filter(e=>!t.has(e.mutationId));let n=this.queryResults;this.queryResults=new Map(e);let r=new zt(this.queryResults);for(let e of this.optimisticUpdates)e.update(r);let i=[];for(let[e,t]of this.queryResults){let r=n.get(e);(r===void 0||r.result!==t.result)&&i.push(e)}return i}applyOptimisticUpdate(e,t){this.optimisticUpdates.push({update:e,mutationId:t});let n=new zt(this.queryResults);return e(n),n.modifiedQueries}rawQueryResult(e){let t=this.queryResults.get(e);if(t!==void 0)return t.result}queryResult(e){let t=this.queryResults.get(e);if(t===void 0)return;let n=t.result;if(n!==void 0){if(n.success)return n.value;throw n.errorData===void 0?Error(mt(`query`,t.udfPath,n)):ht(n,new nt(mt(`query`,t.udfPath,n)))}}hasQueryResult(e){return this.queryResults.get(e)!==void 0}queryLogs(e){return this.queryResults.get(e)?.result?.logLines}},Vt=Object.defineProperty,Ht=(e,t,n)=>t in e?Vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ut=(e,t,n)=>Ht(e,typeof t==`symbol`?t:t+``,n),Wt=class e{constructor(e,t){Ut(this,`low`),Ut(this,`high`),Ut(this,`__isUnsignedLong__`),this.low=e|0,this.high=t|0,this.__isUnsignedLong__=!0}static isLong(e){return(e&&e.__isUnsignedLong__)===!0}static fromBytesLE(t){return new e(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24)}toBytesLE(){let e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]}static fromNumber(t){return isNaN(t)||t<0?Gt:t>=Jt?Yt:new e(t%qt|0,t/qt|0)}toString(){return(BigInt(this.high)*BigInt(qt)+BigInt(this.low)).toString()}equals(t){return e.isLong(t)||(t=e.fromValue(t)),this.high>>>31==1&&t.high>>>31==1?!1:this.high===t.high&&this.low===t.low}notEquals(e){return!this.equals(e)}comp(t){return e.isLong(t)||(t=e.fromValue(t)),this.equals(t)?0:t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1}lessThanOrEqual(e){return this.comp(e)<=0}static fromValue(t){return typeof t==`number`?e.fromNumber(t):new e(t.low,t.high)}},Gt=new Wt(0,0),Kt=65536,qt=Kt*Kt,Jt=qt*qt,Yt=new Wt(-1,-1),Xt=Object.defineProperty,Zt=(e,t,n)=>t in e?Xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qt=(e,t,n)=>Zt(e,typeof t==`symbol`?t:t+``,n),$t=class{constructor(e,t){Qt(this,`version`),Qt(this,`remoteQuerySet`),Qt(this,`queryPath`),Qt(this,`logger`),this.version={querySet:0,ts:Wt.fromNumber(0),identity:0},this.remoteQuerySet=new Map,this.queryPath=e,this.logger=t}transition(e){let t=e.startVersion;if(this.version.querySet!==t.querySet||this.version.ts.notEquals(t.ts)||this.version.identity!==t.identity)throw Error(`Invalid start version: ${t.ts.toString()}:${t.querySet}:${t.identity}, transitioning from ${this.version.ts.toString()}:${this.version.querySet}:${this.version.identity}`);for(let t of e.modifications)switch(t.type){case`QueryUpdated`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)ft(this.logger,`info`,`query`,e,n);let n=Ce(t.value??null);this.remoteQuerySet.set(t.queryId,{success:!0,value:n,logLines:t.logLines});break}case`QueryFailed`:{let e=this.queryPath(t.queryId);if(e)for(let n of t.logLines)ft(this.logger,`info`,`query`,e,n);let{errorData:n}=t;this.remoteQuerySet.set(t.queryId,{success:!1,errorMessage:t.errorMessage,errorData:n===void 0?void 0:Ce(n),logLines:t.logLines});break}case`QueryRemoved`:this.remoteQuerySet.delete(t.queryId);break;default:throw Error(`Invalid modification ${t.type}`)}this.version=e.endVersion}remoteQueryResults(){return this.remoteQuerySet}timestamp(){return this.version.ts}};function en(e){let t=te(e);return Wt.fromBytesLE(Array.from(t))}function tn(e){return ie(new Uint8Array(e.toBytesLE()))}function nn(e){switch(e.type){case`FatalError`:case`AuthError`:case`ActionResponse`:case`TransitionChunk`:case`Ping`:return{...e};case`MutationResponse`:return e.success?{...e,ts:en(e.ts)}:{...e};case`Transition`:return{...e,startVersion:{...e.startVersion,ts:en(e.startVersion.ts)},endVersion:{...e.endVersion,ts:en(e.endVersion.ts)}};default:}}function rn(e){switch(e.type){case`Authenticate`:case`ModifyQuerySet`:case`Mutation`:case`Action`:case`Event`:return{...e};case`Connect`:return e.maxObservedTimestamp===void 0?{...e,maxObservedTimestamp:void 0}:{...e,maxObservedTimestamp:tn(e.maxObservedTimestamp)};default:}}var an=Object.defineProperty,on=(e,t,n)=>t in e?an(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,sn=(e,t,n)=>on(e,typeof t==`symbol`?t:t+``,n),cn=1e3,ln=1001,un=1005,dn=4040,fn;function pn(){return fn===void 0&&(fn=Date.now()),typeof performance>`u`||!performance.now?Date.now():Math.round(fn+performance.now())}function mn(){return`t=${Math.round((pn()-fn)/100)/10}s`}var hn={InternalServerError:{timeout:1e3},SubscriptionsWorkerFullError:{timeout:3e3},TooManyConcurrentRequests:{timeout:3e3},CommitterFullError:{timeout:3e3},AwsTooManyRequestsException:{timeout:3e3},ExecuteFullError:{timeout:3e3},SystemTimeoutError:{timeout:3e3},ExpiredInQueue:{timeout:3e3},VectorIndexesUnavailable:{timeout:1e3},SearchIndexesUnavailable:{timeout:1e3},TableSummariesUnavailable:{timeout:1e3},VectorIndexTooLarge:{timeout:3e3},SearchIndexTooLarge:{timeout:3e3},TooManyWritesInTimePeriod:{timeout:3e3}};function gn(e){if(e===void 0)return`Unknown`;for(let t of Object.keys(hn))if(e.startsWith(t))return t;return`Unknown`}var _n=class{constructor(e,t,n,r,i,a){this.markConnectionStateDirty=i,this.debug=a,sn(this,`socket`),sn(this,`connectionCount`),sn(this,`_hasEverConnected`,!1),sn(this,`lastCloseReason`),sn(this,`transitionChunkBuffer`,null),sn(this,`defaultInitialBackoff`),sn(this,`maxBackoff`),sn(this,`retries`),sn(this,`serverInactivityThreshold`),sn(this,`reconnectDueToServerInactivityTimeout`),sn(this,`scheduledReconnect`,null),sn(this,`networkOnlineHandler`,null),sn(this,`pendingNetworkRecoveryInfo`,null),sn(this,`uri`),sn(this,`onOpen`),sn(this,`onResume`),sn(this,`onMessage`),sn(this,`webSocketConstructor`),sn(this,`logger`),sn(this,`onServerDisconnectError`),this.webSocketConstructor=n,this.socket={state:`disconnected`},this.connectionCount=0,this.lastCloseReason=`InitialConnect`,this.defaultInitialBackoff=1e3,this.maxBackoff=16e3,this.retries=0,this.serverInactivityThreshold=6e4,this.reconnectDueToServerInactivityTimeout=null,this.uri=e,this.onOpen=t.onOpen,this.onResume=t.onResume,this.onMessage=t.onMessage,this.onServerDisconnectError=t.onServerDisconnectError,this.logger=r,this.setupNetworkListener(),this.connect()}setSocketState(e){this.socket=e,this._logVerbose(`socket state changed: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}`),this.markConnectionStateDirty()}setupNetworkListener(){typeof window>`u`||typeof window.addEventListener!=`function`||this.networkOnlineHandler===null&&(this.networkOnlineHandler=()=>{this._logVerbose(`network online event detected`),this.tryReconnectImmediately()},window.addEventListener(`online`,this.networkOnlineHandler),this._logVerbose(`network online event listener registered`))}cleanupNetworkListener(){this.networkOnlineHandler&&typeof window<`u`&&typeof window.removeEventListener==`function`&&(window.removeEventListener(`online`,this.networkOnlineHandler),this.networkOnlineHandler=null,this._logVerbose(`network online event listener removed`))}assembleTransition(e){if(e.partNumber<0||e.partNumber>=e.totalParts||e.totalParts===0||this.transitionChunkBuffer&&(this.transitionChunkBuffer.totalParts!==e.totalParts||this.transitionChunkBuffer.transitionId!==e.transitionId))throw this.transitionChunkBuffer=null,Error(`Invalid TransitionChunk`);if(this.transitionChunkBuffer===null&&(this.transitionChunkBuffer={chunks:[],totalParts:e.totalParts,transitionId:e.transitionId}),e.partNumber!==this.transitionChunkBuffer.chunks.length){let t=this.transitionChunkBuffer.chunks.length;throw this.transitionChunkBuffer=null,Error(`TransitionChunk received out of order: expected part ${t}, got ${e.partNumber}`)}if(this.transitionChunkBuffer.chunks.push(e.chunk),this.transitionChunkBuffer.chunks.length===e.totalParts){let e=this.transitionChunkBuffer.chunks.join(``);this.transitionChunkBuffer=null;let t=nn(JSON.parse(e));if(t.type!==`Transition`)throw Error(`Expected Transition, got ${t.type} after assembling chunks`);return t}return null}connect(){if(this.socket.state===`terminated`)return;if(this.socket.state!==`disconnected`&&this.socket.state!==`stopped`)throw Error(`Didn't start connection from disconnected state: `+this.socket.state);let e=new this.webSocketConstructor(this.uri);this._logVerbose(`constructed WebSocket`),this.setSocketState({state:`connecting`,ws:e,paused:`no`}),this.resetServerInactivityTimeout(),e.onopen=()=>{if(this.logger.logVerbose(`begin ws.onopen`),this.socket.state!==`connecting`)throw Error(`onopen called with socket not in connecting state`);if(this.setSocketState({state:`ready`,ws:e,paused:this.socket.paused===`yes`?`uninitialized`:`no`}),this.resetServerInactivityTimeout(),this.socket.paused===`no`&&(this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:pn()})),this.lastCloseReason!==`InitialConnect`&&(this.lastCloseReason?this.logger.log(`WebSocket reconnected at`,mn(),`after disconnect due to`,this.lastCloseReason):this.logger.log(`WebSocket reconnected at`,mn())),this.connectionCount+=1,this.lastCloseReason=null,this.pendingNetworkRecoveryInfo!==null){let{timeSavedMs:e}=this.pendingNetworkRecoveryInfo;this.pendingNetworkRecoveryInfo=null,this.sendMessage({type:`Event`,eventType:`NetworkRecoveryReconnect`,event:{timeSavedMs:e}}),this.logger.log(`Network recovery reconnect saved ~${Math.round(e/1e3)}s of waiting`)}},e.onerror=e=>{this.transitionChunkBuffer=null;let t=e.message;t&&this.logger.log(`WebSocket error message: ${t}`)},e.onmessage=e=>{this.resetServerInactivityTimeout();let t=e.data.length,n=nn(JSON.parse(e.data));if(this._logVerbose(`received ws message with type ${n.type}`),n.type!==`Ping`){if(n.type===`TransitionChunk`){let e=this.assembleTransition(n);if(!e)return;n=e,this._logVerbose(`assembled full ws message of type ${n.type}`)}this.transitionChunkBuffer!==null&&(this.transitionChunkBuffer=null,this.logger.log(`Received unexpected ${n.type} while buffering TransitionChunks`)),n.type===`Transition`&&this.reportLargeTransition({messageLength:t,transition:n}),this.onMessage(n).hasSyncedPastLastReconnect&&(this.retries=0,this.markConnectionStateDirty())}},e.onclose=e=>{if(this._logVerbose(`begin ws.onclose`),this.transitionChunkBuffer=null,this.lastCloseReason===null&&(this.lastCloseReason=e.reason||`closed with code ${e.code}`),e.code!==cn&&e.code!==ln&&e.code!==un&&e.code!==dn){let t=`WebSocket closed with code ${e.code}`;e.reason&&(t+=`: ${e.reason}`),this.logger.log(t),this.onServerDisconnectError&&e.reason&&this.onServerDisconnectError(t)}let t=gn(e.reason);this.scheduleReconnect(t)}}socketState(){return this.socket.state}sendMessage(e){let t={type:e.type,...e.type===`Authenticate`&&e.tokenType===`User`?{value:`...${e.value.slice(-7)}`}:{}};if(this.socket.state===`ready`&&this.socket.paused===`no`){let n=rn(e),r=JSON.stringify(n),i=!1;try{this.socket.ws.send(r),i=!0}catch(e){this.logger.log(`Failed to send message on WebSocket, reconnecting: ${e}`),this.closeAndReconnect(`FailedToSendMessage`)}return this._logVerbose(`${i?`sent`:`failed to send`} message with type ${e.type}: ${JSON.stringify(t)}`),!0}return this._logVerbose(`message not sent (socket state: ${this.socket.state}, paused: ${`paused`in this.socket?this.socket.paused:void 0}): ${JSON.stringify(t)}`),!1}resetServerInactivityTimeout(){this.socket.state!==`terminated`&&(this.reconnectDueToServerInactivityTimeout!==null&&(clearTimeout(this.reconnectDueToServerInactivityTimeout),this.reconnectDueToServerInactivityTimeout=null),this.reconnectDueToServerInactivityTimeout=setTimeout(()=>{this.closeAndReconnect(`InactiveServer`)},this.serverInactivityThreshold))}scheduleReconnect(e){this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.socket={state:`disconnected`};let t=this.nextBackoff(e);this.markConnectionStateDirty(),this.logger.log(`Attempting reconnect in ${Math.round(t)}ms`);let n=pn(),r=setTimeout(()=>{this.scheduledReconnect?.timeout===r&&(this.scheduledReconnect=null,this.connect())},t);this.scheduledReconnect={timeout:r,scheduledAt:n,backoffMs:t}}closeAndReconnect(e){switch(this._logVerbose(`begin closeAndReconnect with reason ${e}`),this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return;case`connecting`:case`ready`:this.lastCloseReason=e,this.close(),this.scheduleReconnect(`client`);return;default:this.socket}}close(){switch(this.transitionChunkBuffer=null,this.socket.state){case`disconnected`:case`terminated`:case`stopped`:return Promise.resolve();case`connecting`:{let e=this.socket.ws;return e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)},new Promise(t=>{e.onclose=()=>{this._logVerbose(`Closed after connecting`),t()},e.onopen=()=>{this._logVerbose(`Opened after connecting`),e.close()}})}case`ready`:{this._logVerbose(`ws.close called`);let e=this.socket.ws;e.onmessage=e=>{this._logVerbose(`Ignoring message received after close`)};let t=new Promise(t=>{e.onclose=()=>{t()}});return e.close(),t}default:return this.socket,Promise.resolve()}}terminate(){switch(this.reconnectDueToServerInactivityTimeout&&clearTimeout(this.reconnectDueToServerInactivityTimeout),this.scheduledReconnect&&=(clearTimeout(this.scheduledReconnect.timeout),null),this.cleanupNetworkListener(),this.socket.state){case`terminated`:case`stopped`:case`disconnected`:case`connecting`:case`ready`:{let e=this.close();return this.setSocketState({state:`terminated`}),e}default:throw this.socket,Error(`Invalid websocket state: ${this.socket.state}`)}}stop(){switch(this.socket.state){case`terminated`:return Promise.resolve();case`connecting`:case`stopped`:case`disconnected`:case`ready`:{this.cleanupNetworkListener();let e=this.close();return this.socket={state:`stopped`},e}default:return this.socket,Promise.resolve()}}tryRestart(){switch(this.socket.state){case`stopped`:break;case`terminated`:case`connecting`:case`ready`:case`disconnected`:this.logger.logVerbose(`Restart called without stopping first`);return;default:this.socket}this.setupNetworkListener(),this.connect()}pause(){switch(this.socket.state){case`disconnected`:case`stopped`:case`terminated`:return;case`connecting`:case`ready`:this.socket={...this.socket,paused:`yes`};return;default:this.socket;return}}tryReconnectImmediately(){if(this._logVerbose(`tryReconnectImmediately called`),this.socket.state!==`disconnected`){this._logVerbose(`tryReconnectImmediately called but socket state is ${this.socket.state}, no action taken`);return}let e=null;if(this.scheduledReconnect){let t=pn()-this.scheduledReconnect.scheduledAt;e=Math.max(0,this.scheduledReconnect.backoffMs-t),this._logVerbose(`would have waited ${Math.round(e)}ms more (backoff was ${Math.round(this.scheduledReconnect.backoffMs)}ms, elapsed ${Math.round(t)}ms)`),clearTimeout(this.scheduledReconnect.timeout),this.scheduledReconnect=null,this._logVerbose(`canceled scheduled reconnect`)}this.logger.log(`Network recovery detected, reconnecting immediately`),this.pendingNetworkRecoveryInfo=e===null?null:{timeSavedMs:e},this.connect()}resume(){switch(this.socket.state){case`connecting`:this.socket={...this.socket,paused:`no`};return;case`ready`:this.socket.paused===`uninitialized`?(this.socket={...this.socket,paused:`no`},this._hasEverConnected=!0,this.onOpen({connectionCount:this.connectionCount,lastCloseReason:this.lastCloseReason,clientTs:pn()})):this.socket.paused===`yes`&&(this.socket={...this.socket,paused:`no`},this.onResume());return;case`terminated`:case`stopped`:case`disconnected`:return;default:this.socket}this.connect()}connectionState(){return{isConnected:this.socket.state===`ready`,hasEverConnected:this._hasEverConnected,connectionCount:this.connectionCount,connectionRetries:this.retries}}_logVerbose(e){this.logger.logVerbose(e)}nextBackoff(e){let t=(e===`client`?100:e===`Unknown`?this.defaultInitialBackoff:hn[e].timeout)*2**this.retries;this.retries+=1;let n=Math.min(t,this.maxBackoff);return n+n*(Math.random()-.5)}reportLargeTransition({transition:e,messageLength:t}){if(e.clientClockSkew===void 0||e.serverTs===void 0)return;let n=pn()-e.clientClockSkew-e.serverTs/1e6,r=`${Math.round(n)}ms`,i=`${Math.round(t/1e4)/100}MB`,a=t/(n/1e3),o=`${Math.round(a/1e4)/100}MB per second`;this._logVerbose(`received ${i} transition in ${r} at ${o}`),t>2e7?this.logger.log(`received query results totaling more that 20MB (${i}) which will take a long time to download on slower connections`):n>2e4&&this.logger.log(`received query results totaling ${i} which took more than 20s to arrive (${r})`),this.debug&&this.sendMessage({type:`Event`,eventType:`ClientReceivedTransition`,event:{transitionTransitTime:n,messageLength:t}})}};function vn(){return yn()}function yn(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}var bn=class extends Error{};bn.prototype.name=`InvalidTokenError`;function xn(e){return decodeURIComponent(atob(e).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n=`0`+n),`%`+n}))}function Sn(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`);switch(t.length%4){case 0:break;case 2:t+=`==`;break;case 3:t+=`=`;break;default:throw Error(`base64 string is not of the correct length`)}try{return xn(t)}catch{return atob(t)}}function Cn(e,t){if(typeof e!=`string`)throw new bn(`Invalid token specified: must be a string`);t||={};let n=t.header===!0?0:1,r=e.split(`.`)[n];if(typeof r!=`string`)throw new bn(`Invalid token specified: missing part #${n+1}`);let i;try{i=Sn(r)}catch(e){throw new bn(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(i)}catch(e){throw new bn(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}var wn=Object.defineProperty,Tn=(e,t,n)=>t in e?wn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,En=(e,t,n)=>Tn(e,typeof t==`symbol`?t:t+``,n),Dn=480*60*60*1e3,On=2,kn=class{constructor(e,t,n){En(this,`authState`,{state:`noAuth`}),En(this,`configVersion`,0),En(this,`syncState`),En(this,`authenticate`),En(this,`stopSocket`),En(this,`tryRestartSocket`),En(this,`pauseSocket`),En(this,`resumeSocket`),En(this,`clearAuth`),En(this,`logger`),En(this,`refreshTokenLeewaySeconds`),En(this,`lastRefreshChange`),En(this,`tokenConfirmationAttempts`,0),this.syncState=e,this.authenticate=t.authenticate,this.stopSocket=t.stopSocket,this.tryRestartSocket=t.tryRestartSocket,this.pauseSocket=t.pauseSocket,this.resumeSocket=t.resumeSocket,this.clearAuth=t.clearAuth,this.logger=n.logger,this.refreshTokenLeewaySeconds=n.refreshTokenLeewaySeconds,this.lastRefreshChange=!1}notifyRefreshChange(e){this.authState.state!==`noAuth`&&this.authState.state!==`initialRefetch`&&this.authState.config.onRefreshChange&&this.lastRefreshChange!==e&&(this.lastRefreshChange=e,this.authState.config.onRefreshChange(e))}async setConfig(e,t,n){this.resetAuthState(),this._logVerbose(`pausing WS for auth token fetch`),this.pauseSocket();let r=await this.fetchTokenAndGuardAgainstRace(e,{forceRefreshToken:!1});if(r.isFromOutdatedConfig)return;let i={fetchToken:e,onAuthChange:t,onRefreshChange:n};r.value?(this.setAuthState({state:`waitingForServerConfirmationOfCachedToken`,config:i,hasRetried:!1}),this.authenticate(r.value)):(this.setAuthState({state:`initialRefetch`,config:i}),await this.refetchToken()),this._logVerbose(`resuming WS after auth token fetch`),this.resumeSocket()}onTransition(e){if(this.syncState.isCurrentOrNewerAuthVersion(e.endVersion.identity)&&!(e.endVersion.identity<=e.startVersion.identity)){if(this._logVerbose(`auth state is ${this.authState.state} when handling transition`),this.syncState.markAuthCompletion(),this.authState.state===`waitingForServerConfirmationOfCachedToken`){this._logVerbose(`server confirmed auth token is valid`),this.refetchToken(),this.authState.config.onAuthChange(!0);return}this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this._logVerbose(`server confirmed new auth token is valid`),this.notifyRefreshChange(!1),this.scheduleTokenRefetch(this.authState.token),this.tokenConfirmationAttempts=0,this.authState.hadAuth||this.authState.config.onAuthChange(!0))}}onAuthError(e){if(e.authUpdateAttempted===!1&&(this.authState.state===`waitingForServerConfirmationOfFreshToken`||this.authState.state===`waitingForServerConfirmationOfCachedToken`)){this._logVerbose(`ignoring non-auth token expired error`);return}let{baseVersion:t}=e;if(!this.syncState.isCurrentOrNewerAuthVersion(t+1)){this._logVerbose(`ignoring auth error for previous auth attempt`);return}this.tryToReauthenticate(e)}async tryToReauthenticate(e){if(this._logVerbose(`attempting to reauthenticate: ${e.error}`),this.authState.state===`noAuth`||this.authState.state===`waitingForServerConfirmationOfFreshToken`&&this.tokenConfirmationAttempts>=On){this.logger.error(`Failed to authenticate: "${e.error}", check your server auth config`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.authState.state!==`noAuth`&&this.setAndReportAuthFailed(this.authState.config.onAuthChange);return}if(this.authState.state===`waitingForServerConfirmationOfFreshToken`&&(this.tokenConfirmationAttempts++,this._logVerbose(`retrying reauthentication, ${On-this.tokenConfirmationAttempts} attempts remaining`)),this.notifyRefreshChange(!0),await this.stopSocket(),this.authState.state===`noAuth`)return;let t=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});t.isFromOutdatedConfig||(t.value&&this.syncState.isNewAuth(t.value)?(this.authenticate(t.value),this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,config:this.authState.config,token:t.value,hadAuth:this.authState.state===`notRefetching`||this.authState.state===`waitingForScheduledRefetch`})):(this._logVerbose(`reauthentication failed, could not fetch a new token`),this.syncState.hasAuth()&&this.syncState.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this.tryRestartSocket())}async refetchToken(){if(this.authState.state===`noAuth`)return;this._logVerbose(`refetching auth token`);let e=await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken,{forceRefreshToken:!0});e.isFromOutdatedConfig||(e.value?this.syncState.isNewAuth(e.value)?(this.setAuthState({state:`waitingForServerConfirmationOfFreshToken`,hadAuth:this.syncState.hasAuth(),token:e.value,config:this.authState.config}),this.authenticate(e.value)):this.setAuthState({state:`notRefetching`,config:this.authState.config}):(this._logVerbose(`refetching token failed`),this.syncState.hasAuth()&&this.clearAuth(),this.setAndReportAuthFailed(this.authState.config.onAuthChange)),this._logVerbose(`restarting WS after auth token fetch (if currently stopped)`),this.tryRestartSocket())}scheduleTokenRefetch(e){if(this.authState.state===`noAuth`)return;let t=this.decodeToken(e);if(!t){this.logger.error(`Auth token is not a valid JWT, cannot refetch the token`);return}let{iat:n,exp:r}=t;if(!n||!r){this.logger.error(`Auth token does not have required fields, cannot refetch the token`);return}let i=r-n;if(i<=2){this.logger.error(`Auth token does not live long enough, cannot refetch the token`);return}let a=Math.min(Dn,(i-this.refreshTokenLeewaySeconds)*1e3);a<=0&&(this.logger.warn(`Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${i}s`),a=0);let o=setTimeout(()=>{this._logVerbose(`running scheduled token refetch`),this.refetchToken()},a);this.setAuthState({state:`waitingForScheduledRefetch`,refetchTokenTimeoutId:o,config:this.authState.config}),this._logVerbose(`scheduled preemptive auth token refetching in ${a}ms`)}async fetchTokenAndGuardAgainstRace(e,t){let n=++this.configVersion;this._logVerbose(`fetching token with config version ${n}`);let r=await e(t);return this.configVersion===n?{isFromOutdatedConfig:!1,value:r}:(this._logVerbose(`stale config version, expected ${n}, got ${this.configVersion}`),{isFromOutdatedConfig:!0})}stop(){this.resetAuthState(),this.configVersion++,this._logVerbose(`config version bumped to ${this.configVersion}`)}setAndReportAuthFailed(e){e(!1),this.resetAuthState()}resetAuthState(){this.notifyRefreshChange(!1),this.setAuthState({state:`noAuth`})}setAuthState(e){let t=e.state===`waitingForServerConfirmationOfFreshToken`?{hadAuth:e.hadAuth,state:e.state,token:`...${e.token.slice(-7)}`}:{state:e.state};switch(this._logVerbose(`setting auth state to ${JSON.stringify(t)}`),e.state){case`waitingForScheduledRefetch`:case`notRefetching`:case`noAuth`:this.tokenConfirmationAttempts=0;break;case`waitingForServerConfirmationOfFreshToken`:case`waitingForServerConfirmationOfCachedToken`:case`initialRefetch`:break;default:}this.authState.state===`waitingForScheduledRefetch`&&clearTimeout(this.authState.refetchTokenTimeoutId),this.authState=e}decodeToken(e){try{return Cn(e)}catch(e){return this._logVerbose(`Error decoding token: ${e instanceof Error?e.message:`Unknown error`}`),null}}_logVerbose(e){this.logger.logVerbose(`${e} [v${this.configVersion}]`)}},An=[`convexClientConstructed`,`convexWebSocketOpen`,`convexFirstMessageReceived`];function jn(e,t){let n={sessionId:t};typeof performance>`u`||!performance.mark||performance.mark(e,{detail:n})}function Mn(e){let t=e.name.slice(6);return t=t.charAt(0).toLowerCase()+t.slice(1),{name:t,startTime:e.startTime}}function Nn(e){if(typeof performance>`u`||!performance.getEntriesByName)return[];let t=[];for(let n of An){let r=performance.getEntriesByName(n).filter(e=>e.entryType===`mark`).filter(t=>t.detail.sessionId===e);t.push(...r)}return t.map(Mn)}var Pn=Object.defineProperty,Fn=(e,t,n)=>t in e?Pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,In=(e,t,n)=>Fn(e,typeof t==`symbol`?t:t+``,n),Ln=class{constructor(e,t,n){if(In(this,`address`),In(this,`state`),In(this,`requestManager`),In(this,`webSocketManager`),In(this,`authenticationManager`),In(this,`remoteQuerySet`),In(this,`optimisticQueryResults`),In(this,`_transitionHandlerCounter`,0),In(this,`_nextRequestId`),In(this,`_onTransitionFns`,new Map),In(this,`_sessionId`),In(this,`firstMessageReceived`,!1),In(this,`debug`),In(this,`logger`),In(this,`maxObservedTimestamp`),In(this,`connectionStateSubscribers`,new Map),In(this,`nextConnectionStateSubscriberId`,0),In(this,`_lastPublishedConnectionState`),In(this,`markConnectionStateDirty`,()=>{Promise.resolve().then(()=>{let e=this.connectionState();if(JSON.stringify(e)!==JSON.stringify(this._lastPublishedConnectionState)){this._lastPublishedConnectionState=e;for(let t of this.connectionStateSubscribers.values())t(e)}})}),In(this,`mark`,e=>{this.debug&&jn(e,this.sessionId)}),typeof e==`object`)throw Error(`Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly.`);n?.skipConvexDeploymentUrlCheck!==!0&&oe(e),n={...n};let r=n.authRefreshTokenLeewaySeconds??10,i=n.webSocketConstructor;if(!i&&typeof WebSocket>`u`)throw Error(`No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient`);i||=WebSocket,this.debug=n.reportDebugInfoToConvex??!1,this.address=e,this.logger=n.logger===!1?dt({verbose:n.verbose??!1}):n.logger!==!0&&n.logger?n.logger:ut({verbose:n.verbose??!1});let a=e.search(`://`);if(a===-1)throw Error(`Provided address was not an absolute URL.`);let o=e.substring(a+3),s=e.substring(0,a),c;if(s===`http`)c=`ws`;else if(s===`https`)c=`wss`;else throw Error(`Unknown parent protocol ${s}`);let l=`${c}://${o}/api/${rt}/sync`;this.state=new St,this.remoteQuerySet=new $t(e=>this.state.queryPath(e),this.logger),this.requestManager=new Et(this.logger,this.markConnectionStateDirty);let u=()=>{this.webSocketManager.pause(),this.state.pause()};this.authenticationManager=new kn(this.state,{authenticate:e=>{let t=this.state.setAuth(e);return this.webSocketManager.sendMessage(t),t.baseVersion},stopSocket:()=>this.webSocketManager.stop(),tryRestartSocket:()=>this.webSocketManager.tryRestart(),pauseSocket:u,resumeSocket:()=>this.webSocketManager.resume(),clearAuth:()=>{this.clearAuth()}},{logger:this.logger,refreshTokenLeewaySeconds:r}),this.optimisticQueryResults=new Bt,this.addOnTransitionHandler(e=>{t(e.queries.map(e=>e.token))}),this._nextRequestId=0,this._sessionId=vn();let{unsavedChangesWarning:d}=n;if(typeof window>`u`||window.addEventListener===void 0){if(d===!0)throw Error(`unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options.`)}else d!==!1&&window.addEventListener(`beforeunload`,e=>{if(this.requestManager.hasIncompleteRequests()){e.preventDefault();let t=`Are you sure you want to leave? Your changes may not be saved.`;return(e||window.event).returnValue=t,t}});this.webSocketManager=new _n(l,{onOpen:e=>{this.mark(`convexWebSocketOpen`),this.webSocketManager.sendMessage({...e,type:`Connect`,sessionId:this._sessionId,maxObservedTimestamp:this.maxObservedTimestamp}),this.remoteQuerySet=new $t(e=>this.state.queryPath(e),this.logger);let[t,n]=this.state.restart();n&&this.webSocketManager.sendMessage(n),this.webSocketManager.sendMessage(t);for(let e of this.requestManager.restart())this.webSocketManager.sendMessage(e)},onResume:()=>{let[e,t]=this.state.resume();t&&this.webSocketManager.sendMessage(t),e&&this.webSocketManager.sendMessage(e);for(let e of this.requestManager.resume())this.webSocketManager.sendMessage(e)},onMessage:e=>{switch(this.firstMessageReceived||(this.firstMessageReceived=!0,this.mark(`convexFirstMessageReceived`),this.reportMarks()),e.type){case`Transition`:{this.observedTimestamp(e.endVersion.ts),this.authenticationManager.onTransition(e),this.remoteQuerySet.transition(e),this.state.transition(e);let t=this.requestManager.removeCompleted(this.remoteQuerySet.timestamp());this.notifyOnQueryResultChanges(t);break}case`MutationResponse`:{e.success&&this.observedTimestamp(e.ts);let t=this.requestManager.onResponse(e);t!==null&&this.notifyOnQueryResultChanges(new Map([[t.requestId,t.result]]));break}case`ActionResponse`:this.requestManager.onResponse(e);break;case`AuthError`:this.authenticationManager.onAuthError(e);break;case`FatalError`:{let t=pt(this.logger,e.error);throw this.webSocketManager.terminate(),t}default:}return{hasSyncedPastLastReconnect:this.hasSyncedPastLastReconnect()}},onServerDisconnectError:n.onServerDisconnectError},i,this.logger,this.markConnectionStateDirty,this.debug),this.mark(`convexClientConstructed`),n.expectAuth&&u()}hasSyncedPastLastReconnect(){return this.requestManager.hasSyncedPastLastReconnect()&&this.state.hasSyncedPastLastReconnect()}observedTimestamp(e){(this.maxObservedTimestamp===void 0||this.maxObservedTimestamp.lessThanOrEqual(e))&&(this.maxObservedTimestamp=e)}getMaxObservedTimestamp(){return this.maxObservedTimestamp}notifyOnQueryResultChanges(e){let t=this.remoteQuerySet.remoteQueryResults(),n=new Map;for(let[e,r]of t){let t=this.state.queryToken(e);if(t!==null){let i={result:r,udfPath:this.state.queryPath(e),args:this.state.queryArgs(e)};n.set(t,i)}}let r=this.optimisticQueryResults.ingestQueryResultsFromServer(n,new Set(e.keys()));this.handleTransition({queries:r.map(e=>({token:e,modification:{kind:`Updated`,result:this.optimisticQueryResults.rawQueryResult(e)}})),reflectedMutations:Array.from(e).map(([e,t])=>({requestId:e,result:t})),timestamp:this.remoteQuerySet.timestamp()})}handleTransition(e){for(let t of this._onTransitionFns.values())t(e)}addOnTransitionHandler(e){let t=this._transitionHandlerCounter++;return this._onTransitionFns.set(t,e),()=>this._onTransitionFns.delete(t)}getCurrentAuthClaims(){let e=this.state.getAuth(),t={};if(e&&e.tokenType===`User`)try{t=e?Cn(e.value):{}}catch{t={}}else return;return{token:e.value,decoded:t}}setAuth(e,t,n){this.authenticationManager.setConfig(e,t,n)}hasAuth(){return this.state.hasAuth()}setAdminAuth(e,t){let n=this.state.setAdminAuth(e,t);this.webSocketManager.sendMessage(n)}clearAuth(){let e=this.state.clearAuth();this.webSocketManager.sendMessage(e)}subscribe(e,t,n){let r=ae(t),{modification:i,queryToken:a,unsubscribe:o}=this.state.subscribe(e,r,n?.journal,n?.componentPath);return i!==null&&this.webSocketManager.sendMessage(i),{queryToken:a,unsubscribe:()=>{let e=o();e&&this.webSocketManager.sendMessage(e)}}}localQueryResult(e,t){let n=_t(e,ae(t));return this.optimisticQueryResults.queryResult(n)}localQueryResultByToken(e){return this.optimisticQueryResults.queryResult(e)}hasLocalQueryResultByToken(e){return this.optimisticQueryResults.hasQueryResult(e)}localQueryLogs(e,t){let n=_t(e,ae(t));return this.optimisticQueryResults.queryLogs(n)}queryJournal(e,t){let n=_t(e,ae(t));return this.state.queryJournal(n)}connectionState(){let e=this.webSocketManager.connectionState();return{hasInflightRequests:this.requestManager.hasInflightRequests(),isWebSocketConnected:e.isConnected,hasEverConnected:e.hasEverConnected,connectionCount:e.connectionCount,connectionRetries:e.connectionRetries,timeOfOldestInflightRequest:this.requestManager.timeOfOldestInflightRequest(),inflightMutations:this.requestManager.inflightMutations(),inflightActions:this.requestManager.inflightActions()}}subscribeToConnectionState(e){let t=this.nextConnectionStateSubscriberId++;return this.connectionStateSubscribers.set(t,e),()=>{this.connectionStateSubscribers.delete(t)}}async mutation(e,t,n){let r=await this.mutationInternal(e,t,n);if(!r.success)throw r.errorData===void 0?Error(mt(`mutation`,e,r)):ht(r,new nt(mt(`mutation`,e,r)));return r.value}async mutationInternal(e,t,n,r){let{mutationPromise:i}=this.enqueueMutation(e,t,n,r);return i}enqueueMutation(e,t,n,r){let i=ae(t);this.tryReportLongDisconnect();let a=this.nextRequestId;if(this._nextRequestId++,n!==void 0){let e=n.optimisticUpdate;if(e!==void 0){let t=this.optimisticQueryResults.applyOptimisticUpdate(t=>{e(t,i)instanceof Promise&&this.logger.warn(`Optimistic update handler returned a Promise. Optimistic updates should be synchronous.`)},a).map(e=>{let t=this.localQueryResultByToken(e);return{token:e,modification:{kind:`Updated`,result:t===void 0?void 0:{success:!0,value:t,logLines:[]}}}});this.handleTransition({queries:t,reflectedMutations:[],timestamp:this.remoteQuerySet.timestamp()})}}let o={type:`Mutation`,requestId:a,udfPath:e,componentPath:r,args:[ke(i)]},s=this.webSocketManager.sendMessage(o);return{requestId:a,mutationPromise:this.requestManager.request(o,s)}}async action(e,t){let n=await this.actionInternal(e,t);if(!n.success)throw n.errorData===void 0?Error(mt(`action`,e,n)):ht(n,new nt(mt(`action`,e,n)));return n.value}async actionInternal(e,t,n){let r=ae(t),i=this.nextRequestId;this._nextRequestId++,this.tryReportLongDisconnect();let a={type:`Action`,requestId:i,udfPath:e,componentPath:n,args:[ke(r)]},o=this.webSocketManager.sendMessage(a);return this.requestManager.request(a,o)}async close(){return this.authenticationManager.stop(),this.webSocketManager.terminate()}get url(){return this.address}get nextRequestId(){return this._nextRequestId}get sessionId(){return this._sessionId}reportMarks(){if(this.debug){let e=Nn(this.sessionId);this.webSocketManager.sendMessage({type:`Event`,eventType:`ClientConnect`,event:e})}}tryReportLongDisconnect(){if(!this.debug)return;let e=this.connectionState().timeOfOldestInflightRequest;if(e===null||Date.now()-e.getTime()<=60*1e3)return;let t=`${this.address}/api/debug_event`;fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`,"Convex-Client":`npm-${rt}`},body:JSON.stringify({event:`LongWebsocketDisconnect`})}).then(e=>{e.ok||this.logger.warn(`Analytics request failed with response:`,e.body)}).catch(e=>{this.logger.warn(`Analytics response failed with error:`,e)})}};function Rn(e){if(typeof e!=`object`||!e||!Array.isArray(e.page)||typeof e.isDone!=`boolean`||typeof e.continueCursor!=`string`)throw Error(`Not a valid paginated query result: ${e?.toString()}`);return e}var zn=Object.defineProperty,Bn=(e,t,n)=>t in e?zn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vn=(e,t,n)=>Bn(e,typeof t==`symbol`?t:t+``,n),Hn=class{constructor(e,t){this.client=e,this.onTransition=t,Vn(this,`paginatedQuerySet`,new Map),Vn(this,`lastTransitionTs`),this.lastTransitionTs=Wt.fromNumber(0),this.client.addOnTransitionHandler(e=>this.onBaseTransition(e))}subscribe(e,t,n){let r=gt(e),i=vt(r,t,n),a=()=>this.removePaginatedQuerySubscriber(i),o=this.paginatedQuerySet.get(i);return o?(o.numSubscribers+=1,{paginatedQueryToken:i,unsubscribe:a}):(this.paginatedQuerySet.set(i,{token:i,canonicalizedUdfPath:r,args:t,numSubscribers:1,options:{initialNumItems:n.initialNumItems},nextPageKey:0,pageKeys:[],pageKeyToQuery:new Map,ongoingSplits:new Map,skip:!1,id:n.id}),this.addPageToPaginatedQuery(i,null,n.initialNumItems),{paginatedQueryToken:i,unsubscribe:a})}localQueryResult(e,t,n){let r=vt(gt(e),t,n);return this.localQueryResultByToken(r)}localQueryResultByToken(e){let t=this.paginatedQuerySet.get(e);if(!t)return;let n=this.activePageQueryTokens(t);if(n.length===0)return{results:[],status:`LoadingFirstPage`,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)};let r=[],i=!1,a=!1;for(let e of n){let t=this.client.localQueryResultByToken(e);if(t===void 0){i=!0,a=!1;continue}let n=Rn(t);r=r.concat(n.page),a=!!n.isDone}let o;return o=i?r.length===0?`LoadingFirstPage`:`LoadingMore`:a?`Exhausted`:`CanLoadMore`,{results:r,status:o,loadMore:t=>this.loadMoreOfPaginatedQuery(e,t)}}onBaseTransition(e){let t=e.queries.map(e=>e.token),n=this.queriesContainingTokens(t),r=[];n.length>0&&(this.processPaginatedQuerySplits(n,e=>this.client.localQueryResultByToken(e)),r=n.map(e=>({token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}})));let i={...e,paginatedQueries:r};this.onTransition(i)}loadMoreOfPaginatedQuery(e,t){this.mustGetPaginatedQuery(e);let n=this.queryTokenForLastPageOfPaginatedQuery(e),r=this.client.localQueryResultByToken(n);if(!r)return!1;let i=Rn(r);if(i.isDone)return!1;this.addPageToPaginatedQuery(e,i.continueCursor,t);let a={timestamp:this.lastTransitionTs,reflectedMutations:[],queries:[],paginatedQueries:[{token:e,modification:{kind:`Updated`,result:this.localQueryResultByToken(e)}}]};return this.onTransition(a),!0}queriesContainingTokens(e){if(e.length===0)return[];let t=[],n=new Set(e);for(let[e,r]of this.paginatedQuerySet)for(let i of this.allQueryTokens(r))if(n.has(i)){t.push(e);break}return t}processPaginatedQuerySplits(e,t){for(let n of e){let e=this.mustGetPaginatedQuery(n),{ongoingSplits:r,pageKeyToQuery:i,pageKeys:a}=e;for(let[n,[a,o]]of r)t(i.get(a).queryToken)!==void 0&&t(i.get(o).queryToken)!==void 0&&this.completePaginatedQuerySplit(e,n,a,o);for(let n of a){if(r.has(n))continue;let a=i.get(n).queryToken,o=t(a);if(!o)continue;let s=Rn(o);s.splitCursor&&(s.pageStatus===`SplitRecommended`||s.pageStatus===`SplitRequired`||s.page.length>e.options.initialNumItems*2)&&this.splitPaginatedQueryPage(e,n,s.splitCursor,s.continueCursor)}}}splitPaginatedQueryPage(e,t,n,r){let i=e.nextPageKey++,a=e.nextPageKey++,o={cursor:r,numItems:e.options.initialNumItems,id:e.id},s=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:null,endCursor:n}});e.pageKeyToQuery.set(i,s);let c=this.client.subscribe(e.canonicalizedUdfPath,{...e.args,paginationOpts:{...o,cursor:n,endCursor:r}});e.pageKeyToQuery.set(a,c),e.ongoingSplits.set(t,[i,a])}addPageToPaginatedQuery(e,t,n){let r=this.mustGetPaginatedQuery(e),i=r.nextPageKey++,a={cursor:t,numItems:n,id:r.id},o={...r.args,paginationOpts:a},s=this.client.subscribe(r.canonicalizedUdfPath,o);return r.pageKeys.push(i),r.pageKeyToQuery.set(i,s),s}removePaginatedQuerySubscriber(e){let t=this.paginatedQuerySet.get(e);if(t&&(--t.numSubscribers,!(t.numSubscribers>0))){for(let e of t.pageKeyToQuery.values())e.unsubscribe();this.paginatedQuerySet.delete(e)}}completePaginatedQuerySplit(e,t,n,r){let i=e.pageKeyToQuery.get(t);e.pageKeyToQuery.delete(t);let a=e.pageKeys.indexOf(t);e.pageKeys.splice(a,1,n,r),e.ongoingSplits.delete(t),i.unsubscribe()}activePageQueryTokens(e){return e.pageKeys.map(t=>e.pageKeyToQuery.get(t).queryToken)}allQueryTokens(e){return Array.from(e.pageKeyToQuery.values()).map(e=>e.queryToken)}queryTokenForLastPageOfPaginatedQuery(e){let t=this.mustGetPaginatedQuery(e),n=t.pageKeys[t.pageKeys.length-1];if(n===void 0)throw Error(`No pages for paginated query ${e}`);return t.pageKeyToQuery.get(n).queryToken}mustGetPaginatedQuery(e){let t=this.paginatedQuerySet.get(e);if(!t)throw Error(`paginated query no longer exists for token `+e);return t}},Un=Object.defineProperty,Wn=(e,t,n)=>t in e?Un(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gn=(e,t,n)=>Wn(e,typeof t==`symbol`?t:t+``,n),Kn=void 0,qn=class{constructor(e,t){if(Gn(this,`address`),Gn(this,`auth`),Gn(this,`adminAuth`),Gn(this,`encodedTsPromise`),Gn(this,`debug`),Gn(this,`fetchOptions`),Gn(this,`fetch`),Gn(this,`logger`),Gn(this,`mutationQueue`,[]),Gn(this,`isProcessingQueue`,!1),typeof t==`boolean`)throw Error("skipConvexDeploymentUrlCheck as the second argument is no longer supported. Please pass an options object, `{ skipConvexDeploymentUrlCheck: true }`.");(t??{}).skipConvexDeploymentUrlCheck!==!0&&oe(e),this.logger=t?.logger===!1?dt({verbose:!1}):t?.logger!==!0&&t?.logger?t.logger:ut({verbose:!1}),this.address=e,this.debug=!0,this.auth=void 0,this.adminAuth=void 0,this.fetch=t?.fetch,t?.auth&&this.setAuth(t.auth)}backendUrl(){return`${this.address}/api`}get url(){return this.address}setAuth(e){this.clearAuth(),this.auth=e}setAdminAuth(e,t){if(this.clearAuth(),t!==void 0){let n=new TextEncoder().encode(JSON.stringify(t)),r=btoa(String.fromCodePoint(...n));this.adminAuth=`${e}:${r}`}else this.adminAuth=e}clearAuth(){this.auth=void 0,this.adminAuth=void 0}setDebug(e){this.debug=e}setFetchOptions(e){this.fetchOptions=e}async consistentQuery(e,...t){let n=ae(t[0]),r=this.getTimestamp();return await this.queryInner(e,n,{timestampPromise:r})}async getTimestamp(){return this.encodedTsPromise?this.encodedTsPromise:this.encodedTsPromise=this.getTimestampInner()}async getTimestampInner(){let e=this.fetch||Kn||fetch,t={"Content-Type":`application/json`,"Convex-Client":`npm-${rt}`},n=await e(`${this.address}/api/query_ts`,{...this.fetchOptions,method:`POST`,headers:t});if(!n.ok)throw Error(await n.text());let{ts:r}=await n.json();return r}async query(e,...t){let n=ae(t[0]);return await this.queryInner(e,n,{})}async queryInner(e,t,n){let r=Mt(e),i=[ke(t)],a={"Content-Type":`application/json`,"Convex-Client":`npm-${rt}`};this.adminAuth?a.Authorization=`Convex ${this.adminAuth}`:this.auth&&(a.Authorization=`Bearer ${this.auth}`);let o=this.fetch||Kn||fetch,s=n.timestampPromise?await n.timestampPromise:void 0,c=JSON.stringify({path:r,format:`convex_encoded_json`,args:i,...s?{ts:s}:{}}),l=await o(s?`${this.address}/api/query_at_ts`:`${this.address}/api/query`,{...this.fetchOptions,body:c,method:`POST`,headers:a});if(!l.ok&&l.status!==560)throw Error(await l.text());let u=await l.json();if(this.debug)for(let e of u.logLines??[])ft(this.logger,`info`,`query`,r,e);switch(u.status){case`success`:return Ce(u.value);case`error`:throw u.errorData===void 0?Error(u.errorMessage):Jn(u.errorData,new nt(u.errorMessage));default:throw Error(`Invalid response: ${JSON.stringify(u)}`)}}async mutationInner(e,t){let n=Mt(e),r=JSON.stringify({path:n,format:`convex_encoded_json`,args:[ke(t)]}),i={"Content-Type":`application/json`,"Convex-Client":`npm-${rt}`};this.adminAuth?i.Authorization=`Convex ${this.adminAuth}`:this.auth&&(i.Authorization=`Bearer ${this.auth}`);let a=await(this.fetch||Kn||fetch)(`${this.address}/api/mutation`,{...this.fetchOptions,body:r,method:`POST`,headers:i});if(!a.ok&&a.status!==560)throw Error(await a.text());let o=await a.json();if(this.debug)for(let e of o.logLines??[])ft(this.logger,`info`,`mutation`,n,e);switch(o.status){case`success`:return Ce(o.value);case`error`:throw o.errorData===void 0?Error(o.errorMessage):Jn(o.errorData,new nt(o.errorMessage));default:throw Error(`Invalid response: ${JSON.stringify(o)}`)}}async processMutationQueue(){if(!this.isProcessingQueue){for(this.isProcessingQueue=!0;this.mutationQueue.length>0;){let{mutation:e,args:t,resolve:n,reject:r}=this.mutationQueue.shift();try{n(await this.mutationInner(e,t))}catch(e){r(e)}}this.isProcessingQueue=!1}}enqueueMutation(e,t){return new Promise((n,r)=>{this.mutationQueue.push({mutation:e,args:t,resolve:n,reject:r}),this.processMutationQueue()})}async mutation(e,...t){let[n,r]=t,i=ae(n);return r?.skipQueue?await this.mutationInner(e,i):await this.enqueueMutation(e,i)}async action(e,...t){let n=ae(t[0]),r=Mt(e),i=JSON.stringify({path:r,format:`convex_encoded_json`,args:[ke(n)]}),a={"Content-Type":`application/json`,"Convex-Client":`npm-${rt}`};this.adminAuth?a.Authorization=`Convex ${this.adminAuth}`:this.auth&&(a.Authorization=`Bearer ${this.auth}`);let o=await(this.fetch||Kn||fetch)(`${this.address}/api/action`,{...this.fetchOptions,body:i,method:`POST`,headers:a});if(!o.ok&&o.status!==560)throw Error(await o.text());let s=await o.json();if(this.debug)for(let e of s.logLines??[])ft(this.logger,`info`,`action`,r,e);switch(s.status){case`success`:return Ce(s.value);case`error`:throw s.errorData===void 0?Error(s.errorMessage):Jn(s.errorData,new nt(s.errorMessage));default:throw Error(`Invalid response: ${JSON.stringify(s)}`)}}async function(e,t,...n){let r=ae(n[0]),i=typeof e==`string`?e:Mt(e),a=JSON.stringify({componentPath:t,path:i,format:`convex_encoded_json`,args:ke(r)}),o={"Content-Type":`application/json`,"Convex-Client":`npm-${rt}`};this.adminAuth?o.Authorization=`Convex ${this.adminAuth}`:this.auth&&(o.Authorization=`Bearer ${this.auth}`);let s=await(this.fetch||Kn||fetch)(`${this.address}/api/function`,{...this.fetchOptions,body:a,method:`POST`,headers:o});if(!s.ok&&s.status!==560)throw Error(await s.text());let c=await s.json();if(this.debug)for(let e of c.logLines??[])ft(this.logger,`info`,`any`,i,e);switch(c.status){case`success`:return Ce(c.value);case`error`:throw c.errorData===void 0?Error(c.errorMessage):Jn(c.errorData,new nt(c.errorMessage));default:throw Error(`Invalid response: ${JSON.stringify(c)}`)}}};function Jn(e,t){return t.data=Ce(e),t}function Yn({getCurrentValue:e,subscribe:t}){let[n,r]=(0,m.useState)(()=>({getCurrentValue:e,subscribe:t,value:e()})),i=n.value;return(n.getCurrentValue!==e||n.subscribe!==t)&&(i=e(),r({getCurrentValue:e,subscribe:t,value:i})),(0,m.useEffect)(()=>{let n=!1,i=()=>{n||r(n=>{if(n.getCurrentValue!==e||n.subscribe!==t)return n;let r=e();return n.value===r?n:{...n,value:r}})},a=t(i);return i(),()=>{n=!0,a()}},[e,t]),i}var Xn=Object.defineProperty,Zn=(e,t,n)=>t in e?Xn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qn=(e,t,n)=>Zn(e,typeof t==`symbol`?t:t+``,n),$n=5e3;if(m.default===void 0)throw Error(`Required dependency 'react' not found`);function er(e,t,n){function r(r){return lr(r),t.mutation(e,r,{optimisticUpdate:n})}return r.withOptimisticUpdate=function(r){if(n!==void 0)throw Error(`Already specified optimistic update for mutation ${Mt(e)}`);return er(e,t,r)},r}function tr(e,t){return function(n){return t.action(e,n)}}var nr=class{constructor(e,t){if(Qn(this,`address`),Qn(this,`cachedSync`),Qn(this,`cachedPaginatedQueryClient`),Qn(this,`listeners`),Qn(this,`options`),Qn(this,`closed`,!1),Qn(this,`_logger`),Qn(this,`adminAuth`),Qn(this,`fakeUserIdentity`),e===void 0)throw Error(`No address provided to ConvexReactClient.
If trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/
If running locally, make sure to run \`convex dev\` and ensure the .env.local file is populated.`);if(typeof e!=`string`)throw Error(`ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof e} instead.`);if(!e.includes(`://`))throw Error(`Provided address was not an absolute URL.`);this.address=e,this.listeners=new Map,this._logger=t?.logger===!1?dt({verbose:t?.verbose??!1}):t?.logger!==!0&&t?.logger?t.logger:ut({verbose:t?.verbose??!1}),this.options={...t,logger:this._logger}}get url(){return this.address}get sync(){if(this.closed)throw Error(`ConvexReactClient has already been closed.`);return this.cachedSync?this.cachedSync:(this.cachedSync=new Ln(this.address,()=>{},this.options),this.adminAuth&&this.cachedSync.setAdminAuth(this.adminAuth,this.fakeUserIdentity),this.cachedPaginatedQueryClient=new Hn(this.cachedSync,e=>this.handleTransition(e)),this.cachedSync)}get paginatedQueryClient(){if(this.sync,this.cachedPaginatedQueryClient)return this.cachedPaginatedQueryClient;throw Error(`Should already be instantiated`)}setAuth(e,t,n){if(typeof e==`string`)throw Error(`Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication.`);this.sync.setAuth(e,t??(()=>{}),n)}clearAuth(){this.sync.clearAuth()}setAdminAuth(e,t){if(this.adminAuth=e,this.fakeUserIdentity=t,this.closed)throw Error(`ConvexReactClient has already been closed.`);this.cachedSync&&this.sync.setAdminAuth(e,t)}watchQuery(e,...t){let[n,r]=t,i=Mt(e);return{onUpdate:e=>{let{queryToken:t,unsubscribe:a}=this.sync.subscribe(i,n,r),o=this.listeners.get(t);return o===void 0?this.listeners.set(t,new Set([e])):o.add(e),()=>{if(this.closed)return;let n=this.listeners.get(t);n.delete(e),n.size===0&&this.listeners.delete(t),a()}},localQueryResult:()=>{if(this.cachedSync)return this.cachedSync.localQueryResult(i,n)},localQueryLogs:()=>{if(this.cachedSync)return this.cachedSync.localQueryLogs(i,n)},journal:()=>{if(this.cachedSync)return this.cachedSync.queryJournal(i,n)}}}prewarmQuery(e){let t=e.extendSubscriptionFor??$n,n=this.watchQuery(e.query,e.args||{}).onUpdate(()=>{});setTimeout(n,t)}watchPaginatedQuery(e,t,n){let r=Mt(e);return{onUpdate:e=>{let{paginatedQueryToken:i,unsubscribe:a}=this.paginatedQueryClient.subscribe(r,t||{},n),o=this.listeners.get(i);return o===void 0?this.listeners.set(i,new Set([e])):o.add(e),()=>{if(this.closed)return;let t=this.listeners.get(i);t.delete(e),t.size===0&&this.listeners.delete(i),a()}},localQueryResult:()=>this.paginatedQueryClient.localQueryResult(r,t,n)}}mutation(e,...t){let[n,r]=t,i=Mt(e);return this.sync.mutation(i,n,r)}action(e,...t){let n=Mt(e);return this.sync.action(n,...t)}query(e,...t){let n=this.watchQuery(e,...t),r=n.localQueryResult();return r===void 0?new Promise((e,t)=>{let r=n.onUpdate(()=>{r();try{e(n.localQueryResult())}catch(e){t(e)}})}):Promise.resolve(r)}connectionState(){return this.sync.connectionState()}subscribeToConnectionState(e){return this.sync.subscribeToConnectionState(e)}get logger(){return this._logger}async close(){if(this.closed=!0,this.listeners=new Map,this.cachedPaginatedQueryClient&&=void 0,this.cachedSync){let e=this.cachedSync;this.cachedSync=void 0,await e.close()}}handleTransition(e){let t=e.queries.map(e=>e.token),n=e.paginatedQueries.map(e=>e.token);this.transition([...t,...n])}transition(e){for(let t of e){let e=this.listeners.get(t);if(e)for(let t of e)t()}}},rr=m.createContext(void 0);function ir(){return(0,m.useContext)(rr)}var ar=({client:e,children:t})=>m.createElement(rr.Provider,{value:e},t);function or(e){let t=typeof e==`string`?Nt(e):e,n=(0,m.useContext)(rr);if(n===void 0)throw Error("Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return(0,m.useMemo)(()=>er(t,n),[n,Mt(t)])}function sr(e){let t=(0,m.useContext)(rr),n=typeof e==`string`?Nt(e):e;if(t===void 0)throw Error("Could not find Convex client! `useAction` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return(0,m.useMemo)(()=>tr(n,t),[t,Mt(n)])}function cr(){let e=(0,m.useContext)(rr);if(e===void 0)throw Error("Could not find Convex client! `useConvexConnectionState` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return Yn({getCurrentValue:(0,m.useCallback)(()=>e.connectionState(),[e]),subscribe:(0,m.useCallback)(t=>e.subscribeToConnectionState(()=>{t()}),[e])})}function lr(e){if(typeof e==`object`&&e&&`bubbles`in e&&`persist`in e&&`isDefaultPrevented`in e)throw Error("Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler.")}var ur=Object.defineProperty,dr=(e,t,n)=>t in e?ur(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fr=(e,t,n)=>dr(e,typeof t==`symbol`?t:t+``,n),pr=class{constructor(e){fr(this,`createWatch`),fr(this,`queries`),fr(this,`listeners`),this.createWatch=e,this.queries={},this.listeners=new Set}setQueries(e){for(let t of Object.keys(e)){let{query:n,args:r,paginationOptions:i}=e[t];if(Mt(n),this.queries[t]===void 0)this.addQuery(t,n,r,i?{paginationOptions:i}:{});else{let e=this.queries[t];(Mt(n)!==Mt(e.query)||JSON.stringify(ke(r))!==JSON.stringify(ke(e.args))||JSON.stringify(i)!==JSON.stringify(e.paginationOptions))&&(this.removeQuery(t),this.addQuery(t,n,r,i?{paginationOptions:i}:{}))}}for(let t of Object.keys(this.queries))e[t]===void 0&&this.removeQuery(t)}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}getLocalResults(e){let t={};for(let n of Object.keys(e)){let{query:r,args:i}=e[n],a=e[n].paginationOptions;Mt(r);let o=this.createWatch(r,i,a?{paginationOptions:a}:{}),s;try{s=o.localQueryResult()}catch(e){if(e instanceof Error)s=e;else throw e}t[n]=s}return t}setCreateWatch(e){this.createWatch=e;for(let e of Object.keys(this.queries)){let{query:t,args:n,watch:r,paginationOptions:i}=this.queries[e],a=`journal`in r?r.journal():void 0;this.removeQuery(e),this.addQuery(e,t,n,{...a?{journal:a}:[],...i?{paginationOptions:i}:{}})}}destroy(){for(let e of Object.keys(this.queries))this.removeQuery(e);this.listeners=new Set}addQuery(e,t,n,{paginationOptions:r,journal:i}){if(this.queries[e]!==void 0)throw Error(`Tried to add a new query with identifier ${e} when it already exists.`);let a=this.createWatch(t,n,{...i?{journal:i}:[],...r?{paginationOptions:r}:{}}),o=a.onUpdate(()=>this.notifyListeners());this.queries[e]={query:t,args:n,watch:a,unsubscribe:o,...r?{paginationOptions:r}:{}}}removeQuery(e){let t=this.queries[e];if(t===void 0)throw Error(`No query found with identifier ${e}.`);t.unsubscribe(),delete this.queries[e]}notifyListeners(){for(let e of this.listeners)e()}};function mr(e){let t=ir();if(t===void 0)throw Error("Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");return hr(e,(0,m.useMemo)(()=>(e,n,{journal:r,paginationOptions:i})=>i?t.watchPaginatedQuery(e,n,i):t.watchQuery(e,n,r?{journal:r}:{}),[t]))}function hr(e,t){let[n]=(0,m.useState)(()=>new pr(t));return n.createWatch!==t&&n.setCreateWatch(t),(0,m.useEffect)(()=>()=>n.destroy(),[n]),Yn((0,m.useMemo)(()=>({getCurrentValue:()=>n.getLocalResults(e),subscribe:t=>(n.setQueries(e),n.subscribe(t))}),[n,e]))}var gr=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),_r=o(((e,t)=>{t.exports=gr()})),vr=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),yr=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=vr()})),br=o((e=>{var t=_r(),n=d(),r=yr();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,m=Symbol.for(`react.element`),h=Symbol.for(`react.transitional.element`),g=Symbol.for(`react.portal`),_=Symbol.for(`react.fragment`),v=Symbol.for(`react.strict_mode`),y=Symbol.for(`react.profiler`),b=Symbol.for(`react.consumer`),x=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),D=Symbol.for(`react.activity`),O=Symbol.for(`react.memo_cache_sentinel`),k=Symbol.iterator;function A(e){return typeof e!=`object`||!e?null:(e=k&&e[k]||e[`@@iterator`],typeof e==`function`?e:null)}var j=Symbol.for(`react.client.reference`);function M(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case _:return`Fragment`;case y:return`Profiler`;case v:return`StrictMode`;case C:return`Suspense`;case w:return`SuspenseList`;case D:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case g:return`Portal`;case x:return e.displayName||`Context`;case b:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?M(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return M(e(t))}catch{}}return null}var N=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},L=[],R=-1;function z(e){return{current:e}}function B(e){0>R||(e.current=L[R],L[R]=null,R--)}function V(e,t){R++,L[R]=e.current,e.current=t}var H=z(null),U=z(null),W=z(null),G=z(null);function K(e,t){switch(V(W,t),V(U,e),V(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}B(H),V(H,e)}function q(){B(H),B(U),B(W)}function J(e){e.memoizedState!==null&&V(G,e);var t=H.current,n=Hd(t,e.type);t!==n&&(V(U,e),V(H,n))}function Y(e){U.current===e&&(B(H),B(U)),G.current===e&&(B(G),Qf._currentValue=I)}var X,ee;function Z(e){if(X===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);X=t&&t[1]||``,ee=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+X+e+ee}var Q=!1;function te(e,t){if(!e||Q)return``;Q=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Q=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Z(n):``}function ne(e,t){switch(e.tag){case 26:case 27:case 5:return Z(e.type);case 16:return Z(`Lazy`);case 13:return e.child!==t&&t!==null?Z(`Suspense Fallback`):Z(`Suspense`);case 19:return Z(`SuspenseList`);case 0:case 15:return te(e.type,!1);case 11:return te(e.type.render,!1);case 1:return te(e.type,!0);case 31:return Z(`Activity`);default:return``}}function re(e){try{var t=``,n=null;do t+=ne(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ie=Object.prototype.hasOwnProperty,ae=t.unstable_scheduleCallback,oe=t.unstable_cancelCallback,se=t.unstable_shouldYield,ce=t.unstable_requestPaint,le=t.unstable_now,ue=t.unstable_getCurrentPriorityLevel,de=t.unstable_ImmediatePriority,fe=t.unstable_UserBlockingPriority,pe=t.unstable_NormalPriority,me=t.unstable_LowPriority,he=t.unstable_IdlePriority,ge=t.log,_e=t.unstable_setDisableYieldValue,ve=null,ye=null;function be(e){if(typeof ge==`function`&&_e(e),ye&&typeof ye.setStrictMode==`function`)try{ye.setStrictMode(ve,e)}catch{}}var xe=Math.clz32?Math.clz32:we,Se=Math.log,Ce=Math.LN2;function we(e){return e>>>=0,e===0?32:31-(Se(e)/Ce|0)|0}var Te=256,Ee=262144,De=4194304;function Oe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Oe(n))):i=Oe(o):i=Oe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Oe(n))):i=Oe(o)):i=Oe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ae(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var e=De;return De<<=1,!(De&62914560)&&(De=4194304),e}function Ne(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-xe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ie(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ie(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-xe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Le(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Re(e,t){var n=t&-t;return n=n&42?1:ze(n),(n&(e.suspendedLanes|t))===0?n:0}function ze(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Be(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ve(){var e=F.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function He(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Ue=Math.random().toString(36).slice(2),We=`__reactFiber$`+Ue,Ge=`__reactProps$`+Ue,Ke=`__reactContainer$`+Ue,qe=`__reactEvents$`+Ue,Je=`__reactListeners$`+Ue,Ye=`__reactHandles$`+Ue,Xe=`__reactResources$`+Ue,Ze=`__reactMarker$`+Ue;function Qe(e){delete e[We],delete e[Ge],delete e[qe],delete e[Je],delete e[Ye]}function $e(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[We])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function et(e){if(e=e[We]||e[Ke]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function nt(e){var t=e[Xe];return t||=e[Xe]={hoistableStyles:new Map,hoistableScripts:new Map},t}function rt(e){e[Ze]=!0}var it=new Set,at={};function ot(e,t){st(e,t),st(e+`Capture`,t)}function st(e,t){for(at[e]=t,e=0;e<t.length;e++)it.add(t[e])}var ct=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),lt={},ut={};function dt(e){return ie.call(ut,e)?!0:ie.call(lt,e)?!1:ct.test(e)?ut[e]=!0:(lt[e]=!0,!1)}function ft(e,t,n){if(dt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function mt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function ht(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function gt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function _t(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vt(e){if(!e._valueTracker){var t=gt(e)?`checked`:`value`;e._valueTracker=_t(e,t,``+e[t])}}function yt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=gt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function bt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var xt=/[\n"\\]/g;function St(e){return e.replace(xt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ct(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+ht(t)):e.value!==``+ht(t)&&(e.value=``+ht(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Tt(e,o,ht(n)):Tt(e,o,ht(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+ht(s):e.removeAttribute(`name`)}function wt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){vt(e);return}n=n==null?``:``+ht(n),t=t==null?n:``+ht(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),vt(e)}function Tt(e,t,n){t===`number`&&bt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Et(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Dt(e,t,n){if(t!=null&&(t=``+ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+ht(n)}function Ot(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(N(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),vt(e)}function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var At=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function jt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||At.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Mt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&jt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&jt(e,o,t[o])}function Nt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Pt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Ft=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function It(e){return Ft.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Lt(){}var Rt=null;function zt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bt=null,Vt=null;function Ht(e){var t=et(e);if(t&&(e=t.stateNode)){var n=e[Ge]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ct(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+St(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Ge]||null;if(!a)throw Error(i(90));Ct(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&yt(r)}break a;case`textarea`:Dt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Et(e,!!n.multiple,t,!1)}}}var Ut=!1;function Wt(e,t,n){if(Ut)return e(t,n);Ut=!0;try{return e(t)}finally{if(Ut=!1,(Bt!==null||Vt!==null)&&(_u(),Bt&&(t=Bt,e=Vt,Vt=Bt=null,Ht(t),e)))for(t=0;t<e.length;t++)Ht(e[t])}}function Gt(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ge]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Kt=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),qt=!1;if(Kt)try{var Jt={};Object.defineProperty(Jt,"passive",{get:function(){qt=!0}}),window.addEventListener(`test`,Jt,Jt),window.removeEventListener(`test`,Jt,Jt)}catch{qt=!1}var Yt=null,Xt=null,Zt=null;function Qt(){if(Zt)return Zt;var e,t=Xt,n=t.length,r,i=`value`in Yt?Yt.value:Yt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Zt=i.slice(e,1<r?1-r:void 0)}function $t(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function en(){return!0}function tn(){return!1}function nn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?en:tn,this.isPropagationStopped=tn,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=en)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=en)},persist:function(){},isPersistent:en}),t}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},an=nn(rn),on=p({},rn,{view:0,detail:0}),sn=nn(on),cn,ln,un,dn=p({},on,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==un&&(un&&e.type===`mousemove`?(cn=e.screenX-un.screenX,ln=e.screenY-un.screenY):ln=cn=0,un=e),cn)},movementY:function(e){return`movementY`in e?e.movementY:ln}}),fn=nn(dn),pn=nn(p({},dn,{dataTransfer:0})),mn=nn(p({},on,{relatedTarget:0})),hn=nn(p({},rn,{animationName:0,elapsedTime:0,pseudoElement:0})),gn=nn(p({},rn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),_n=nn(p({},rn,{data:0})),vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},yn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},bn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function xn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bn[e])?!!t[e]:!1}function Sn(){return xn}var Cn=nn(p({},on,{key:function(e){if(e.key){var t=vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=$t(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?yn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sn,charCode:function(e){return e.type===`keypress`?$t(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?$t(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),wn=nn(p({},dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tn=nn(p({},on,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sn})),En=nn(p({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Dn=nn(p({},dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),On=nn(p({},rn,{newState:0,oldState:0})),kn=[9,13,27,32],An=Kt&&`CompositionEvent`in window,jn=null;Kt&&`documentMode`in document&&(jn=document.documentMode);var Mn=Kt&&`TextEvent`in window&&!jn,Nn=Kt&&(!An||jn&&8<jn&&11>=jn),Pn=` `,Fn=!1;function In(e,t){switch(e){case`keyup`:return kn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Ln(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Rn=!1;function zn(e,t){switch(e){case`compositionend`:return Ln(t);case`keypress`:return t.which===32?(Fn=!0,Pn):null;case`textInput`:return e=t.data,e===Pn&&Fn?null:e;default:return null}}function Bn(e,t){if(Rn)return e===`compositionend`||!An&&In(e,t)?(e=Qt(),Zt=Xt=Yt=null,Rn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Nn&&t.locale!==`ko`?null:t.data;default:return null}}var Vn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Vn[e.type]:t===`textarea`}function Un(e,t,n,r){Bt?Vt?Vt.push(r):Vt=[r]:Bt=r,t=Td(t,`onChange`),0<t.length&&(n=new an(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Wn=null,Gn=null;function Kn(e){_d(e,0)}function qn(e){if(yt(tt(e)))return e}function Jn(e,t){if(e===`change`)return t}var Yn=!1;if(Kt){var Xn;if(Kt){var Zn=`oninput`in document;if(!Zn){var Qn=document.createElement(`div`);Qn.setAttribute(`oninput`,`return;`),Zn=typeof Qn.oninput==`function`}Xn=Zn}else Xn=!1;Yn=Xn&&(!document.documentMode||9<document.documentMode)}function $n(){Wn&&(Wn.detachEvent(`onpropertychange`,er),Gn=Wn=null)}function er(e){if(e.propertyName===`value`&&qn(Gn)){var t=[];Un(t,Gn,e,zt(e)),Wt(Kn,t)}}function tr(e,t,n){e===`focusin`?($n(),Wn=t,Gn=n,Wn.attachEvent(`onpropertychange`,er)):e===`focusout`&&$n()}function nr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return qn(Gn)}function rr(e,t){if(e===`click`)return qn(t)}function ir(e,t){if(e===`input`||e===`change`)return qn(t)}function ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var or=typeof Object.is==`function`?Object.is:ar;function sr(e,t){if(or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ie.call(t,i)||!or(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lr(e,t){var n=cr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=cr(n)}}function ur(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ur(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=bt(e.document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var pr=Kt&&`documentMode`in document&&11>=document.documentMode,mr=null,hr=null,gr=null,vr=!1;function br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vr||mr==null||mr!==bt(r)||(r=mr,`selectionStart`in r&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&sr(gr,r)||(gr=r,r=Td(hr,`onSelect`),0<r.length&&(t=new an(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Sr={animationend:xr(`Animation`,`AnimationEnd`),animationiteration:xr(`Animation`,`AnimationIteration`),animationstart:xr(`Animation`,`AnimationStart`),transitionrun:xr(`Transition`,`TransitionRun`),transitionstart:xr(`Transition`,`TransitionStart`),transitioncancel:xr(`Transition`,`TransitionCancel`),transitionend:xr(`Transition`,`TransitionEnd`)},Cr={},$={};Kt&&($=document.createElement(`div`).style,`AnimationEvent`in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),`TransitionEvent`in window||delete Sr.transitionend.transition);function wr(e){if(Cr[e])return Cr[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $)return Cr[e]=t[n];return e}var Tr=wr(`animationend`),Er=wr(`animationiteration`),Dr=wr(`animationstart`),Or=wr(`transitionrun`),kr=wr(`transitionstart`),Ar=wr(`transitioncancel`),jr=wr(`transitionend`),Mr=new Map,Nr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Nr.push(`scrollEnd`);function Pr(e,t){Mr.set(e,t),ot(t,[e])}var Fr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ir=[],Lr=0,Rr=0;function zr(){for(var e=Lr,t=Rr=Lr=0;t<e;){var n=Ir[t];Ir[t++]=null;var r=Ir[t];Ir[t++]=null;var i=Ir[t];Ir[t++]=null;var a=Ir[t];if(Ir[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ur(n,i,a)}}function Br(e,t,n,r){Ir[Lr++]=e,Ir[Lr++]=t,Ir[Lr++]=n,Ir[Lr++]=r,Rr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Vr(e,t,n,r){return Br(e,t,n,r),Wr(e)}function Hr(e,t){return Br(e,null,null,t),Wr(e)}function Ur(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-xe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Wr(e){if(50<cu)throw cu=0,lu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Gr={};function Kr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qr(e,t,n,r){return new Kr(e,t,n,r)}function Jr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yr(e,t){var n=e.alternate;return n===null?(n=qr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Xr(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Zr(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)Jr(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,H.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case D:return e=qr(31,n,t,a),e.elementType=D,e.lanes=o,e;case _:return Qr(n.children,a,o,t);case v:s=8,a|=24;break;case y:return e=qr(12,n,t,a|2),e.elementType=y,e.lanes=o,e;case C:return e=qr(13,n,t,a),e.elementType=C,e.lanes=o,e;case w:return e=qr(19,n,t,a),e.elementType=w,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case x:s=10;break a;case b:s=9;break a;case S:s=11;break a;case T:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=qr(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Qr(e,t,n,r){return e=qr(7,e,r,t),e.lanes=n,e}function $r(e,t,n){return e=qr(6,e,null,t),e.lanes=n,e}function ei(e){var t=qr(18,null,null,0);return t.stateNode=e,t}function ti(e,t,n){return t=qr(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ni=new WeakMap;function ri(e,t){if(typeof e==`object`&&e){var n=ni.get(e);return n===void 0?(t={value:e,source:t,stack:re(t)},ni.set(e,t),t):n}return{value:e,source:t,stack:re(t)}}var ii=[],ai=0,oi=null,si=0,ci=[],li=0,ui=null,di=1,fi=``;function pi(e,t){ii[ai++]=si,ii[ai++]=oi,oi=e,si=t}function mi(e,t,n){ci[li++]=di,ci[li++]=fi,ci[li++]=ui,ui=e;var r=di;e=fi;var i=32-xe(r)-1;r&=~(1<<i),n+=1;var a=32-xe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,di=1<<32-xe(t)+i|n<<i|r,fi=a+e}else di=1<<a|n<<i|r,fi=e}function hi(e){e.return!==null&&(pi(e,1),mi(e,1,0))}function gi(e){for(;e===oi;)oi=ii[--ai],ii[ai]=null,si=ii[--ai],ii[ai]=null;for(;e===ui;)ui=ci[--li],ci[li]=null,fi=ci[--li],ci[li]=null,di=ci[--li],ci[li]=null}function _i(e,t){ci[li++]=di,ci[li++]=fi,ci[li++]=ui,di=t.id,fi=t.overflow,ui=e}var vi=null,yi=null,bi=!1,xi=null,Si=!1,Ci=Error(i(519));function wi(e){throw Ai(ri(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ci}function Ti(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[We]=e,t[Ge]=r,n){case`dialog`:vd(`cancel`,t),vd(`close`,t);break;case`iframe`:case`object`:case`embed`:vd(`load`,t);break;case`video`:case`audio`:for(n=0;n<hd.length;n++)vd(hd[n],t);break;case`source`:vd(`error`,t);break;case`img`:case`image`:case`link`:vd(`error`,t),vd(`load`,t);break;case`details`:vd(`toggle`,t);break;case`input`:vd(`invalid`,t),wt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:vd(`invalid`,t);break;case`textarea`:vd(`invalid`,t),Ot(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&(vd(`beforetoggle`,t),vd(`toggle`,t)),r.onScroll!=null&&vd(`scroll`,t),r.onScrollEnd!=null&&vd(`scrollend`,t),r.onClick!=null&&(t.onclick=Lt),t=!0):t=!1,t||wi(e,!0)}function Ei(e){for(vi=e.return;vi;)switch(vi.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:vi=vi.return}}function Di(e){if(e!==vi)return!1;if(!bi)return Ei(e),bi=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&yi&&wi(e),Ei(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));yi=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));yi=uf(e)}else t===27?(t=yi,Zd(e.type)?(e=lf,lf=null,yi=e):yi=t):yi=vi?cf(e.stateNode.nextSibling):null;return!0}function Oi(){yi=vi=null,bi=!1}function ki(){var e=xi;return e!==null&&(Jl===null?Jl=e:Jl.push.apply(Jl,e),xi=null),e}function Ai(e){xi===null?xi=[e]:xi.push(e)}var ji=z(null),Mi=null,Ni=null;function Pi(e,t,n){V(ji,t._currentValue),t._currentValue=n}function Fi(e){e._currentValue=ji.current,B(ji)}function Ii(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Li(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ii(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ii(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ri(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===G.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Li(t,e,n,r),t.flags|=262144}function zi(e){for(e=e.firstContext;e!==null;){if(!or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bi(e){Mi=e,Ni=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Vi(e){return Ui(Mi,e)}function Hi(e,t){return Mi===null&&Bi(e),Ui(e,t)}function Ui(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ni===null){if(e===null)throw Error(i(308));Ni=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ni=Ni.next=t;return n}var Wi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Gi=t.unstable_scheduleCallback,Ki=t.unstable_NormalPriority,qi={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ji(){return{controller:new Wi,data:new Map,refCount:0}}function Yi(e){e.refCount--,e.refCount===0&&Gi(Ki,function(){e.controller.abort()})}var Xi=null,Zi=0,Qi=0,$i=null;function ea(e,t){if(Xi===null){var n=Xi=[];Zi=0,Qi=ld(),$i={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Zi++,t.then(ta,ta),t}function ta(){if(--Zi===0&&Xi!==null){$i!==null&&($i.status=`fulfilled`);var e=Xi;Xi=null,Qi=0,$i=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function na(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ra=P.S;P.S=function(e,t){Zl=le(),typeof t==`object`&&t&&typeof t.then==`function`&&ea(e,t),ra!==null&&ra(e,t)};var ia=z(null);function aa(){var e=ia.current;return e===null?Ml.pooledCache:e}function oa(e,t){t===null?V(ia,ia.current):V(ia,t.pool)}function sa(){var e=aa();return e===null?null:{parent:qi._currentValue,pool:e}}var ca=Error(i(460)),la=Error(i(474)),ua=Error(i(542)),da={then:function(){}};function fa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Lt,Lt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,_a(e),e;default:if(typeof t.status==`string`)t.then(Lt,Lt);else{if(e=Ml,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,_a(e),e}throw ha=t,ca}}function ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ha=e,ca):e}}var ha=null;function ga(){if(ha===null)throw Error(i(459));var e=ha;return ha=null,e}function _a(e){if(e===ca||e===ua)throw Error(i(483))}var va=null,ya=0;function ba(e){var t=ya;return ya+=1,va===null&&(va=[]),pa(va,e,t)}function xa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Sa(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ca(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Yr(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$r(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===_?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&ma(i)===t.type)?(t=a(t,n.props),xa(t,n),t.return=e,t):(t=Zr(n.type,n.key,n.props,null,e.mode,r),xa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ti(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Qr(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=$r(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case h:return n=Zr(t.type,t.key,t.props,null,e.mode,n),xa(n,t),n.return=e,n;case g:return t=ti(t,e.mode,n),t.return=e,t;case E:return t=ma(t),f(e,t,n)}if(N(t)||A(t))return t=Qr(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ba(t),n);if(t.$$typeof===x)return f(e,Hi(e,t),n);Sa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case h:return n.key===i?l(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case E:return n=ma(n),p(e,t,n,r)}if(N(n)||A(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ba(n),r);if(n.$$typeof===x)return p(e,t,Hi(e,n),r);Sa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case h:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case g:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=ma(r),m(e,t,n,r,i)}if(N(r)||A(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ba(r),i);if(r.$$typeof===x)return m(e,t,n,Hi(t,r),i);Sa(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),bi&&pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return bi&&pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),bi&&pi(i,h),l}function y(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),bi&&pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return bi&&pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),bi&&pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===_&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case h:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===_){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),xa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===_?(c=Qr(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=Zr(o.type,o.key,o.props,null,e.mode,c),xa(c,o),c.return=e,e=c)}return s(e);case g:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ti(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=ma(o),b(e,r,o,c)}if(N(o))return v(e,r,o,c);if(A(o)){if(l=A(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,ba(o),c);if(o.$$typeof===x)return b(e,r,Hi(e,o),c);Sa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=$r(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ya=0;var i=b(e,t,n,r);return va=null,i}catch(t){if(t===ca||t===ua)throw t;var a=qr(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var wa=Ca(!0),Ta=Ca(!1),Ea=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,jl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Wr(e),Ur(e,null,n),t}return Br(e,r,t,n),Wr(e)}function ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Le(e,n)}}function Ma(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Na=!1;function Pa(){if(Na){var e=$i;if(e!==null)throw e}}function Fa(e,t,n,r){Na=!1;var i=e.updateQueue;Ea=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,m=f!==s.lane;if(m?(Pl&f)===f:(r&f)===f){f!==0&&f===Qi&&(Na=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=p({},d,f);break a;case 2:Ea=!0}}f=s.callback,f!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[f]:m.push(f))}else m={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Hl|=o,e.lanes=o,e.memoizedState=d}}function Ia(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function La(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ia(n[e],t)}var Ra=z(null),za=z(0);function Ba(e,t){e=Bl,V(za,e),V(Ra,t),Bl=e|t.baseLanes}function Va(){V(za,Bl),V(Ra,Ra.current)}function Ha(){Bl=za.current,B(Ra),B(za)}var Ua=z(null),Wa=null;function Ga(e){var t=e.alternate;V(Xa,Xa.current&1),V(Ua,e),Wa===null&&(t===null||Ra.current!==null||t.memoizedState!==null)&&(Wa=e)}function Ka(e){V(Xa,Xa.current),V(Ua,e),Wa===null&&(Wa=e)}function qa(e){e.tag===22?(V(Xa,Xa.current),V(Ua,e),Wa===null&&(Wa=e)):Ja(e)}function Ja(){V(Xa,Xa.current),V(Ua,Ua.current)}function Ya(e){B(Ua),Wa===e&&(Wa=null),B(Xa)}var Xa=z(0);function Za(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qa=0,$a=null,eo=null,to=null,no=!1,ro=!1,io=!1,ao=0,oo=0,so=null,co=0;function lo(){throw Error(i(321))}function uo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!or(e[n],t[n]))return!1;return!0}function fo(e,t,n,r,i,a){return Qa=a,$a=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?ks:As,io=!1,a=n(r,i),io=!1,ro&&(a=mo(t,n,r,i)),po(e),a}function po(e){P.H=Os;var t=eo!==null&&eo.next!==null;if(Qa=0,to=eo=$a=null,no=!1,oo=0,so=null,t)throw Error(i(300));e===null||qs||(e=e.dependencies,e!==null&&zi(e)&&(qs=!0))}function mo(e,t,n,r){$a=e;var a=0;do{if(ro&&(so=null),oo=0,ro=!1,25<=a)throw Error(i(301));if(a+=1,to=eo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=js,o=t(n,r)}while(ro);return o}function ho(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?So(t):t,e=e.useState()[0],(eo===null?null:eo.memoizedState)!==e&&($a.flags|=1024),t}function go(){var e=ao!==0;return ao=0,e}function _o(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function vo(e){if(no){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}no=!1}Qa=0,to=eo=$a=null,ro=!1,oo=ao=0,so=null}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return to===null?$a.memoizedState=to=e:to=to.next=e,to}function bo(){if(eo===null){var e=$a.alternate;e=e===null?null:e.memoizedState}else e=eo.next;var t=to===null?$a.memoizedState:to.next;if(t!==null)to=t,eo=e;else{if(e===null)throw $a.alternate===null?Error(i(467)):Error(i(310));eo=e,e={memoizedState:eo.memoizedState,baseState:eo.baseState,baseQueue:eo.baseQueue,queue:eo.queue,next:null},to===null?$a.memoizedState=to=e:to=to.next=e}return to}function xo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(e){var t=oo;return oo+=1,so===null&&(so=[]),e=pa(so,e,t),t=$a,(to===null?t.memoizedState:to.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?ks:As),e}function Co(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return So(e);if(e.$$typeof===x)return Vi(e)}throw Error(i(438,String(e)))}function wo(e){var t=null,n=$a.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=$a.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=xo(),$a.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=O;return t.index++,n}function To(e,t){return typeof t==`function`?t(e):t}function Eo(e){return Do(bo(),eo,e)}function Do(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Qa&f)===f:(Pl&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Qi&&(d=!0);else if((Qa&p)===p){u=u.next,p===Qi&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,$a.lanes|=p,Hl|=p;f=u.action,io&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,$a.lanes|=f,Hl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!or(o,e.memoizedState)&&(qs=!0,d&&(n=$i,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Oo(e){var t=bo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);or(o,t.memoizedState)||(qs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ko(e,t,n){var r=$a,a=bo(),o=bi;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!or((eo||a).memoizedState,n);if(s&&(a.memoizedState=n,qs=!0),a=a.queue,es(Mo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||to!==null&&to.memoizedState.tag&1){if(r.flags|=2048,Yo(9,{destroy:void 0},jo.bind(null,r,a,n,t),null),Ml===null)throw Error(i(349));o||Qa&127||Ao(r,t,n)}return n}function Ao(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$a.updateQueue,t===null?(t=xo(),$a.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jo(e,t,n,r){t.value=n,t.getSnapshot=r,No(t)&&Po(e)}function Mo(e,t,n){return n(function(){No(t)&&Po(e)})}function No(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!or(e,n)}catch{return!0}}function Po(e){var t=Hr(e,2);t!==null&&fu(t,e,2)}function Fo(e){var t=yo();if(typeof e==`function`){var n=e;if(e=n(),io){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t}function Io(e,t,n,r){return e.baseState=n,Do(e,eo,typeof r==`function`?r:To)}function Lo(e,t,n,r,a){if(Ts(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ro(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ro(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),zo(e,t,s)}catch(n){Vo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),zo(e,t,a)}catch(n){Vo(e,t,n)}}function zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Bo(e,t,n)},function(n){return Vo(e,t,n)}):Bo(e,t,n)}function Bo(e,t,n){t.status=`fulfilled`,t.value=n,Ho(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ro(e,n)))}function Vo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ho(t),t=t.next;while(t!==r)}e.action=null}function Ho(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Uo(e,t){return t}function Wo(e,t){if(bi){var n=Ml.formState;if(n!==null){a:{var r=$a;if(bi){if(yi){b:{for(var i=yi,a=Si;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){yi=cf(i.nextSibling),r=i.data===`F!`;break a}}wi(r)}r=!1}r&&(t=n[0])}}return n=yo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:t},n.queue=r,n=Ss.bind(null,$a,r),r.dispatch=n,r=Fo(!1),a=ws.bind(null,$a,!1,r.queue),r=yo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Lo.bind(null,$a,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Go(e){return Ko(bo(),eo,e)}function Ko(e,t,n){if(t=Do(e,t,Uo)[0],e=Eo(To)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=So(t)}catch(e){throw e===ca?ua:e}else r=t;t=bo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&($a.flags|=2048,Yo(9,{destroy:void 0},qo.bind(null,i,n),null)),[r,a,e]}function qo(e,t){e.action=t}function Jo(e){var t=bo(),n=eo;if(n!==null)return Ko(t,n,e);bo(),t=t.memoizedState,n=bo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Yo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=$a.updateQueue,t===null&&(t=xo(),$a.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Xo(){return bo().memoizedState}function Zo(e,t,n,r){var i=yo();$a.flags|=e,i.memoizedState=Yo(1|t,{destroy:void 0},n,r===void 0?null:r)}function Qo(e,t,n,r){var i=bo();r=r===void 0?null:r;var a=i.memoizedState.inst;eo!==null&&r!==null&&uo(r,eo.memoizedState.deps)?i.memoizedState=Yo(t,a,n,r):($a.flags|=e,i.memoizedState=Yo(1|t,a,n,r))}function $o(e,t){Zo(8390656,8,e,t)}function es(e,t){Qo(2048,8,e,t)}function ts(e){$a.flags|=4;var t=$a.updateQueue;if(t===null)t=xo(),$a.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ns(e){var t=bo().memoizedState;return ts({ref:t,nextImpl:e}),function(){if(jl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function rs(e,t){return Qo(4,2,e,t)}function is(e,t){return Qo(4,4,e,t)}function as(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function os(e,t,n){n=n==null?null:n.concat([e]),Qo(4,4,as.bind(null,t,e),n)}function ss(){}function cs(e,t){var n=bo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&uo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ls(e,t){var n=bo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&uo(t,r[1]))return r[0];if(r=e(),io){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function us(e,t,n){return n===void 0||Qa&1073741824&&!(Pl&261930)?e.memoizedState=t:(e.memoizedState=n,e=du(),$a.lanes|=e,Hl|=e,n)}function ds(e,t,n,r){return or(n,t)?n:Ra.current===null?!(Qa&42)||Qa&1073741824&&!(Pl&261930)?(qs=!0,e.memoizedState=n):(e=du(),$a.lanes|=e,Hl|=e,t):(e=us(e,n,r),or(e,t)||(qs=!0),e)}function fs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};P.T=s,ws(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Cs(e,t,na(c,r),uu(e)):Cs(e,t,r,uu(e))}catch(n){Cs(e,t,{then:function(){},status:`rejected`,reason:n},uu())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function ps(){}function ms(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=hs(e).queue;fs(e,a,t,I,n===null?ps:function(){return gs(e),n(r)})}function hs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gs(e){var t=hs(e);t.next===null&&(t=e.alternate.memoizedState),Cs(e,t.next.queue,{},uu())}function _s(){return Vi(Qf)}function vs(){return bo().memoizedState}function ys(){return bo().memoizedState}function bs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=uu();e=ka(n);var r=Aa(t,e,n);r!==null&&(fu(r,t,n),ja(r,t,n)),t={cache:Ji()},e.payload=t;return}t=t.return}}function xs(e,t,n){var r=uu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ts(e)?Es(t,n):(n=Vr(e,t,n,r),n!==null&&(fu(n,e,r),Ds(n,t,r)))}function Ss(e,t,n){Cs(e,t,n,uu())}function Cs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ts(e))Es(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,or(s,o))return Br(e,t,i,0),Ml===null&&zr(),!1}catch{}if(n=Vr(e,t,i,r),n!==null)return fu(n,e,r),Ds(n,t,r),!0}return!1}function ws(e,t,n,r){if(r={lane:2,revertLane:ld(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ts(e)){if(t)throw Error(i(479))}else t=Vr(e,n,r,2),t!==null&&fu(t,e,2)}function Ts(e){var t=e.alternate;return e===$a||t!==null&&t===$a}function Es(e,t){ro=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ds(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Le(e,n)}}var Os={readContext:Vi,use:Co,useCallback:lo,useContext:lo,useEffect:lo,useImperativeHandle:lo,useLayoutEffect:lo,useInsertionEffect:lo,useMemo:lo,useReducer:lo,useRef:lo,useState:lo,useDebugValue:lo,useDeferredValue:lo,useTransition:lo,useSyncExternalStore:lo,useId:lo,useHostTransitionStatus:lo,useFormState:lo,useActionState:lo,useOptimistic:lo,useMemoCache:lo,useCacheRefresh:lo};Os.useEffectEvent=lo;var ks={readContext:Vi,use:Co,useCallback:function(e,t){return yo().memoizedState=[e,t===void 0?null:t],e},useContext:Vi,useEffect:$o,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Zo(4194308,4,as.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){Zo(4,2,e,t)},useMemo:function(e,t){var n=yo();t=t===void 0?null:t;var r=e();if(io){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=yo();if(n!==void 0){var i=n(t);if(io){be(!0);try{n(t)}finally{be(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=xs.bind(null,$a,e),[r.memoizedState,e]},useRef:function(e){var t=yo();return e={current:e},t.memoizedState=e},useState:function(e){e=Fo(e);var t=e.queue,n=Ss.bind(null,$a,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ss,useDeferredValue:function(e,t){return us(yo(),e,t)},useTransition:function(){var e=Fo(!1);return e=fs.bind(null,$a,e.queue,!0,!1),yo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=$a,a=yo();if(bi){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ml===null)throw Error(i(349));Pl&127||Ao(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,$o(Mo.bind(null,r,o,e),[e]),r.flags|=2048,Yo(9,{destroy:void 0},jo.bind(null,r,o,n,t),null),n},useId:function(){var e=yo(),t=Ml.identifierPrefix;if(bi){var n=fi,r=di;n=(r&~(1<<32-xe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ao++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:_s,useFormState:Wo,useActionState:Wo,useOptimistic:function(e){var t=yo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ws.bind(null,$a,!0,n),n.dispatch=t,[e,t]},useMemoCache:wo,useCacheRefresh:function(){return yo().memoizedState=bs.bind(null,$a)},useEffectEvent:function(e){var t=yo(),n={impl:e};return t.memoizedState=n,function(){if(jl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},As={readContext:Vi,use:Co,useCallback:cs,useContext:Vi,useEffect:es,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Eo,useRef:Xo,useState:function(){return Eo(To)},useDebugValue:ss,useDeferredValue:function(e,t){return ds(bo(),eo.memoizedState,e,t)},useTransition:function(){var e=Eo(To)[0],t=bo().memoizedState;return[typeof e==`boolean`?e:So(e),t]},useSyncExternalStore:ko,useId:vs,useHostTransitionStatus:_s,useFormState:Go,useActionState:Go,useOptimistic:function(e,t){return Io(bo(),eo,e,t)},useMemoCache:wo,useCacheRefresh:ys};As.useEffectEvent=ns;var js={readContext:Vi,use:Co,useCallback:cs,useContext:Vi,useEffect:es,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Oo,useRef:Xo,useState:function(){return Oo(To)},useDebugValue:ss,useDeferredValue:function(e,t){var n=bo();return eo===null?us(n,e,t):ds(n,eo.memoizedState,e,t)},useTransition:function(){var e=Oo(To)[0],t=bo().memoizedState;return[typeof e==`boolean`?e:So(e),t]},useSyncExternalStore:ko,useId:vs,useHostTransitionStatus:_s,useFormState:Jo,useActionState:Jo,useOptimistic:function(e,t){var n=bo();return eo===null?(n.baseState=e,[e,n.queue.dispatch]):Io(n,eo,e,t)},useMemoCache:wo,useCacheRefresh:ys};js.useEffectEvent=ns;function Ms(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ns={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=uu(),i=ka(r);i.payload=t,n!=null&&(i.callback=n),t=Aa(e,i,r),t!==null&&(fu(t,e,r),ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=uu(),i=ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Aa(e,i,r),t!==null&&(fu(t,e,r),ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=uu(),r=ka(n);r.tag=2,t!=null&&(r.callback=t),t=Aa(e,r,n),t!==null&&(fu(t,e,n),ja(t,e,n))}};function Ps(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(i,a):!0}function Fs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ns.enqueueReplaceState(t,t.state,null)}function Is(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ls(e){Fr(e)}function Rs(e){console.error(e)}function zs(e){Fr(e)}function Bs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Vs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Hs(e,t,n){return n=ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Bs(e,t)},n}function Us(e){return e=ka(e),e.tag=3,e}function Ws(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Vs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Vs(t,n,r),typeof i!=`function`&&(eu===null?eu=new Set([this]):eu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Gs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ri(t,n,a,!0),n=Ua.current,n!==null){switch(n.tag){case 31:case 13:return Wa===null?wu():n.alternate===null&&Vl===0&&(Vl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Uu(e,r,a)),!1;case 22:return n.flags|=65536,r===da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Uu(e,r,a)),!1}throw Error(i(435,n.tag))}return Uu(e,r,a),wu(),!1}if(bi)return t=Ua.current,t===null?(r!==Ci&&(t=Error(i(423),{cause:r}),Ai(ri(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ri(r,n),a=Hs(e.stateNode,r,a),Ma(e,a),Vl!==4&&(Vl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ci&&(e=Error(i(422),{cause:r}),Ai(ri(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ri(o,n),ql===null?ql=[o]:ql.push(o),Vl!==4&&(Vl=2),t===null)return!0;r=ri(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Hs(n.stateNode,r,e),Ma(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(eu===null||!eu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Us(a),Ws(a,e,n,r),Ma(n,a),!1}n=n.return}while(n!==null);return!1}var Ks=Error(i(461)),qs=!1;function Js(e,t,n,r){t.child=e===null?Ta(t,null,n,r):wa(t,e.child,n,r)}function Ys(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Bi(t),r=fo(e,t,n,o,a,i),s=go(),e!==null&&!qs?(_o(e,t,i),yc(e,t,i)):(bi&&s&&hi(t),t.flags|=1,Js(e,t,r,i),t.child)}function Xs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Jr(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Zs(e,t,a,r,i)):(e=Zr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!bc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?sr:n,n(o,r)&&e.ref===t.ref)return yc(e,t,i)}return t.flags|=1,e=Yr(a,r),e.ref=t.ref,e.return=t,t.child=e}function Zs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(sr(a,r)&&e.ref===t.ref)if(qs=!1,t.pendingProps=r=a,bc(e,i))e.flags&131072&&(qs=!0);else return t.lanes=e.lanes,yc(e,t,i)}return ac(e,t,n,r,i)}function Qs(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ec(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&oa(t,a===null?null:a.cachePool),a===null?Va():Ba(t,a),qa(t);else return r=t.lanes=536870912,ec(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&oa(t,null),Va(),Ja(t)):(oa(t,a.cachePool),Ba(t,a),Ja(t),t.memoizedState=null);return Js(e,t,i,n),t.child}function $s(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ec(e,t,n,r,i){var a=aa();return a=a===null?null:{parent:qi._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&oa(t,null),Va(),qa(t),e!==null&&Ri(e,t,r,!0),t.childLanes=i,null}function tc(e,t){return t=mc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function nc(e,t,n){return wa(t,e.child,null,n),e=tc(t,t.pendingProps),e.flags|=2,Ya(t),t.memoizedState=null,e}function rc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(bi){if(r.mode===`hidden`)return e=tc(t,r),t.lanes=536870912,$s(null,e);if(Ka(t),(e=yi)?(e=rf(e,Si),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ui===null?null:{id:di,overflow:fi},retryLane:536870912,hydrationErrors:null},n=ei(e),n.return=t,t.child=n,vi=t,yi=null)):e=null,e===null)throw wi(t);return t.lanes=536870912,null}return tc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Ka(t),a)if(t.flags&256)t.flags&=-257,t=nc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(qs||Ri(e,t,n,!1),a=(n&e.childLanes)!==0,qs||a){if(r=Ml,r!==null&&(s=Re(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Hr(e,s),fu(r,e,s),Ks;wu(),t=nc(e,t,n)}else e=o.treeContext,yi=cf(s.nextSibling),vi=t,bi=!0,xi=null,Si=!1,e!==null&&_i(t,e),t=tc(t,r),t.flags|=4096;return t}return e=Yr(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ic(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ac(e,t,n,r,i){return Bi(t),n=fo(e,t,n,r,void 0,i),r=go(),e!==null&&!qs?(_o(e,t,i),yc(e,t,i)):(bi&&r&&hi(t),t.flags|=1,Js(e,t,n,i),t.child)}function oc(e,t,n,r,i,a){return Bi(t),t.updateQueue=null,n=mo(t,r,n,i),po(e),r=go(),e!==null&&!qs?(_o(e,t,a),yc(e,t,a)):(bi&&r&&hi(t),t.flags|=1,Js(e,t,n,a),t.child)}function sc(e,t,n,r,i){if(Bi(t),t.stateNode===null){var a=Gr,o=n.contextType;typeof o==`object`&&o&&(a=Vi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ns,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Da(t),o=n.contextType,a.context=typeof o==`object`&&o?Vi(o):Gr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ms(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ns.enqueueReplaceState(a,a.state,null),Fa(t,r,a,i),Pa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Is(n,s);a.props=c;var l=a.context,u=n.contextType;o=Gr,typeof u==`object`&&u&&(o=Vi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Fs(t,a,r,o),Ea=!1;var f=t.memoizedState;a.state=f,Fa(t,r,a,i),Pa(),l=t.memoizedState,s||f!==l||Ea?(typeof d==`function`&&(Ms(t,n,d,r),l=t.memoizedState),(c=Ea||Ps(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Oa(e,t),o=t.memoizedProps,u=Is(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Gr,typeof l==`object`&&l&&(c=Vi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Fs(t,a,r,c),Ea=!1,f=t.memoizedState,a.state=f,Fa(t,r,a,i),Pa();var p=t.memoizedState;o!==d||f!==p||Ea||e!==null&&e.dependencies!==null&&zi(e.dependencies)?(typeof s==`function`&&(Ms(t,n,s,r),p=t.memoizedState),(u=Ea||Ps(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&zi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,ic(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=wa(t,e.child,null,i),t.child=wa(t,null,n,i)):Js(e,t,n,i),t.memoizedState=a.state,e=t.child):e=yc(e,t,i),e}function cc(e,t,n,r){return Oi(),t.flags|=256,Js(e,t,n,r),t.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(e){return{baseLanes:e,cachePool:sa()}}function dc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Gl),e}function fc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(Xa.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(bi){if(a?Ga(t):Ja(t),(e=yi)?(e=rf(e,Si),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ui===null?null:{id:di,overflow:fi},retryLane:536870912,hydrationErrors:null},n=ei(e),n.return=t,t.child=n,vi=t,yi=null)):e=null,e===null)throw wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(Ja(t),a=t.mode,c=mc({mode:`hidden`,children:c},a),r=Qr(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=uc(n),r.childLanes=dc(e,s,n),t.memoizedState=lc,$s(null,r)):(Ga(t),pc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Ga(t),t.flags&=-257,t=hc(e,t,n)):t.memoizedState===null?(Ja(t),c=r.fallback,a=t.mode,r=mc({mode:`visible`,children:r.children},a),c=Qr(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,wa(t,e.child,null,n),r=t.child,r.memoizedState=uc(n),r.childLanes=dc(e,s,n),t.memoizedState=lc,t=$s(null,r)):(Ja(t),t.child=e.child,t.flags|=128,t=null);else if(Ga(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ai({value:r,source:null,stack:null}),t=hc(e,t,n)}else if(qs||Ri(e,t,n,!1),s=(n&e.childLanes)!==0,qs||s){if(s=Ml,s!==null&&(r=Re(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Hr(e,r),fu(s,e,r),Ks;af(c)||wu(),t=hc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,yi=cf(c.nextSibling),vi=t,bi=!0,xi=null,Si=!1,e!==null&&_i(t,e),t=pc(t,r.children),t.flags|=4096);return t}return a?(Ja(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=Yr(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Qr(c,a,n,null),c.flags|=2):c=Yr(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,$s(null,r),r=t.child,c=e.child.memoizedState,c===null?c=uc(n):(a=c.cachePool,a===null?a=sa():(l=qi._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=dc(e,s,n),t.memoizedState=lc,$s(e.child,r)):(Ga(t),n=e.child,e=n.sibling,n=Yr(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function pc(e,t){return t=mc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function mc(e,t){return e=qr(22,e,null,t),e.lanes=0,e}function hc(e,t,n){return wa(t,e.child,null,n),e=pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ii(e.return,t,n)}function _c(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function vc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Xa.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,V(Xa,o),Js(e,t,r,n),r=bi?si:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gc(e,n,t);else if(e.tag===19)gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Za(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_c(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Za(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_c(t,!0,n,null,a,r);break;case`together`:_c(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function yc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ri(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Yr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&zi(e))):!0}function xc(e,t,n){switch(t.tag){case 3:K(t,t.stateNode.containerInfo),Pi(t,qi,e.memoizedState.cache),Oi();break;case 27:case 5:J(t);break;case 4:K(t,t.stateNode.containerInfo);break;case 10:Pi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ka(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Ga(t),e=yc(e,t,n),e===null?null:e.sibling):fc(e,t,n):(Ga(t),t.flags|=128,null);Ga(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ri(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return vc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Xa,Xa.current),r)break;return null;case 22:return t.lanes=0,Qs(e,t,n,t.pendingProps);case 24:Pi(t,qi,e.memoizedState.cache)}return yc(e,t,n)}function Sc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qs=!0;else{if(!bc(e,n)&&!(t.flags&128))return qs=!1,xc(e,t,n);qs=!!(e.flags&131072)}else qs=!1,bi&&t.flags&1048576&&mi(t,si,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ma(t.elementType),t.type=e,typeof e==`function`)Jr(e)?(r=Is(e,r),t.tag=1,t=sc(null,t,e,r,n)):(t.tag=0,t=ac(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=Ys(null,t,e,r,n);break a}else if(a===T){t.tag=14,t=Xs(null,t,e,r,n);break a}}throw t=M(e)||e,Error(i(306,t,``))}}return t;case 0:return ac(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Is(r,t.pendingProps),sc(e,t,r,a,n);case 3:a:{if(K(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Oa(e,t),Fa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Pi(t,qi,r),r!==o.cache&&Li(t,[qi],n,!0),Pa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=cc(e,t,r,n);break a}else if(r!==a){a=ri(Error(i(424)),t),Ai(a),t=cc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(yi=cf(e.firstChild),vi=t,bi=!0,xi=null,Si=!0,n=Ta(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Oi(),r===a){t=yc(e,t,n);break a}Js(e,t,r,n)}t=t.child}return t;case 26:return ic(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:bi||(n=t.type,e=t.pendingProps,r=Bd(W.current).createElement(n),r[We]=t,r[Ge]=e,Pd(r,n,e),rt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return J(t),e===null&&bi&&(r=t.stateNode=ff(t.type,t.pendingProps,W.current),vi=t,Si=!0,a=yi,Zd(t.type)?(lf=a,yi=cf(r.firstChild)):yi=a),Js(e,t,t.pendingProps.children,n),ic(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&bi&&((a=r=yi)&&(r=tf(r,t.type,t.pendingProps,Si),r===null?a=!1:(t.stateNode=r,vi=t,yi=cf(r.firstChild),Si=!1,a=!0)),a||wi(t)),J(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=fo(e,t,ho,null,null,n),Qf._currentValue=a),ic(e,t),Js(e,t,r,n),t.child;case 6:return e===null&&bi&&((e=n=yi)&&(n=nf(n,t.pendingProps,Si),n===null?e=!1:(t.stateNode=n,vi=t,yi=null,e=!0)),e||wi(t)),null;case 13:return fc(e,t,n);case 4:return K(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wa(t,null,r,n):Js(e,t,r,n),t.child;case 11:return Ys(e,t,t.type,t.pendingProps,n);case 7:return Js(e,t,t.pendingProps,n),t.child;case 8:return Js(e,t,t.pendingProps.children,n),t.child;case 12:return Js(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Pi(t,t.type,r.value),Js(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Bi(t),a=Vi(a),r=r(a),t.flags|=1,Js(e,t,r,n),t.child;case 14:return Xs(e,t,t.type,t.pendingProps,n);case 15:return Zs(e,t,t.type,t.pendingProps,n);case 19:return vc(e,t,n);case 31:return rc(e,t,n);case 22:return Qs(e,t,n,t.pendingProps);case 24:return Bi(t),r=Vi(qi),e===null?(a=aa(),a===null&&(a=Ml,o=Ji(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Da(t),Pi(t,qi,a)):((e.lanes&n)!==0&&(Oa(e,t),Fa(t,null,null,n),Pa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Pi(t,qi,r),r!==a.cache&&Li(t,[qi],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Pi(t,qi,r))),Js(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Cc(e){e.flags|=4}function wc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(xu())e.flags|=8192;else throw ha=da,la}else e.flags&=-16777217}function Tc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(xu())e.flags|=8192;else throw ha=da,la}function Ec(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Me(),e.lanes|=t,Kl|=t)}function Dc(e,t){if(!bi)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kc(e,t,n){var r=t.pendingProps;switch(gi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oc(t),null;case 1:return Oc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Fi(qi),q(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Di(t)?Cc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ki())),Oc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Cc(t),o===null?(Oc(t),wc(t,a,null,r,n)):(Oc(t),Tc(t,o))):o?o===e.memoizedState?(Oc(t),t.flags&=-16777217):(Cc(t),Oc(t),Tc(t,o)):(e=e.memoizedProps,e!==r&&Cc(t),Oc(t),wc(t,a,e,r,n)),null;case 27:if(Y(t),n=W.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Cc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Oc(t),null}e=H.current,Di(t)?Ti(t,e):(e=ff(a,r,n),t.stateNode=e,Cc(t))}return Oc(t),null;case 5:if(Y(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Cc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Oc(t),null}if(o=H.current,Di(t))Ti(t,o);else{var s=Bd(W.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[We]=t,o[Ge]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Cc(t)}}return Oc(t),wc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Cc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=W.current,Di(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[We]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||wi(t,!0)}else e=Bd(e).createTextNode(r),e[We]=t,t.stateNode=e}return Oc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Di(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[We]=t}else Oi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oc(t),e=!1}else n=ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ya(t),t):(Ya(t),null);if(t.flags&128)throw Error(i(558))}return Oc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Di(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[We]=t}else Oi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oc(t),a=!1}else a=ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ya(t),t):(Ya(t),null)}return Ya(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ec(t,t.updateQueue),Oc(t),null);case 4:return q(),e===null&&xd(t.stateNode.containerInfo),Oc(t),null;case 10:return Fi(t.type),Oc(t),null;case 19:if(B(Xa),r=t.memoizedState,r===null)return Oc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Dc(r,!1);else{if(Vl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Za(e),o!==null){for(t.flags|=128,Dc(r,!1),e=o.updateQueue,t.updateQueue=e,Ec(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Xr(n,e),n=n.sibling;return V(Xa,Xa.current&1|2),bi&&pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&le()>Ql&&(t.flags|=128,a=!0,Dc(r,!1),t.lanes=4194304)}else{if(!a)if(e=Za(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ec(t,e),Dc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!bi)return Oc(t),null}else 2*le()-r.renderingStartTime>Ql&&n!==536870912&&(t.flags|=128,a=!0,Dc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Oc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=le(),e.sibling=null,n=Xa.current,V(Xa,a?n&1|2:n&1),bi&&pi(t,r.treeForkCount),e);case 22:case 23:return Ya(t),Ha(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Oc(t),t.subtreeFlags&6&&(t.flags|=8192)):Oc(t),n=t.updateQueue,n!==null&&Ec(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&B(ia),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Fi(qi),Oc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Ac(e,t){switch(gi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fi(qi),q(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Y(t),null;case 31:if(t.memoizedState!==null){if(Ya(t),t.alternate===null)throw Error(i(340));Oi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ya(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Oi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Xa),null;case 4:return q(),null;case 10:return Fi(t.type),null;case 22:case 23:return Ya(t),Ha(),e!==null&&B(ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Fi(qi),null;case 25:return null;default:return null}}function jc(e,t){switch(gi(t),t.tag){case 3:Fi(qi),q();break;case 26:case 27:case 5:Y(t);break;case 4:q();break;case 31:t.memoizedState!==null&&Ya(t);break;case 13:Ya(t);break;case 19:B(Xa);break;case 10:Fi(t.type);break;case 22:case 23:Ya(t),Ha(),e!==null&&B(ia);break;case 24:Fi(qi)}}function Mc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Hu(t,t.return,e)}}function Nc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Hu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Hu(t,t.return,e)}}function Pc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{La(t,n)}catch(t){Hu(e,e.return,t)}}}function Fc(e,t,n){n.props=Is(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Hu(e,t,n)}}function Ic(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Hu(e,t,n)}}function Lc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Hu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Hu(e,t,n)}else n.current=null}function Rc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Hu(e,e.return,t)}}function zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[Ge]=t}catch(t){Hu(e,e.return,t)}}function Bc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Vc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hc(e,t,n),e=e.sibling;e!==null;)Hc(e,t,n),e=e.sibling}function Uc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Uc(e,t,n),e=e.sibling;e!==null;)Uc(e,t,n),e=e.sibling}function Wc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[We]=e,t[Ge]=n}catch(t){Hu(e,e.return,t)}}var Gc=!1,Kc=!1,qc=!1,Jc=typeof WeakSet==`function`?WeakSet:Set,Yc=null;function Xc(e,t){if(e=e.containerInfo,Rd=sp,e=dr(e),fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,Yc=t;Yc!==null;)if(t=Yc,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Yc=e;else for(;Yc!==null;){switch(t=Yc,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Is(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Hu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Yc=e;break}Yc=t.return}}function Zc(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:fl(e,n),r&4&&Mc(5,n);break;case 1:if(fl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Hu(n,n.return,e)}else{var i=Is(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Hu(n,n.return,e)}}r&64&&Pc(n),r&512&&Ic(n,n.return);break;case 3:if(fl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{La(e,t)}catch(e){Hu(n,n.return,e)}}break;case 27:t===null&&r&4&&Wc(n);case 26:case 5:fl(e,n),t===null&&r&4&&Rc(n),r&512&&Ic(n,n.return);break;case 12:fl(e,n);break;case 31:fl(e,n),r&4&&rl(e,n);break;case 13:fl(e,n),r&4&&il(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ku.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Gc,!r){t=t!==null&&t.memoizedState!==null||Kc,i=Gc;var a=Kc;Gc=r,(Kc=t)&&!a?ml(e,n,(n.subtreeFlags&8772)!=0):fl(e,n),Gc=i,Kc=a}break;case 30:break;default:fl(e,n)}}function Qc(e){var t=e.alternate;t!==null&&(e.alternate=null,Qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $c=null,el=!1;function tl(e,t,n){for(n=n.child;n!==null;)nl(e,t,n),n=n.sibling}function nl(e,t,n){if(ye&&typeof ye.onCommitFiberUnmount==`function`)try{ye.onCommitFiberUnmount(ve,n)}catch{}switch(n.tag){case 26:Kc||Lc(n,t),tl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Kc||Lc(n,t);var r=$c,i=el;Zd(n.type)&&($c=n.stateNode,el=!1),tl(e,t,n),pf(n.stateNode),$c=r,el=i;break;case 5:Kc||Lc(n,t);case 6:if(r=$c,i=el,$c=null,tl(e,t,n),$c=r,el=i,$c!==null)if(el)try{($c.nodeType===9?$c.body:$c.nodeName===`HTML`?$c.ownerDocument.body:$c).removeChild(n.stateNode)}catch(e){Hu(n,t,e)}else try{$c.removeChild(n.stateNode)}catch(e){Hu(n,t,e)}break;case 18:$c!==null&&(el?(e=$c,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd($c,n.stateNode));break;case 4:r=$c,i=el,$c=n.stateNode.containerInfo,el=!0,tl(e,t,n),$c=r,el=i;break;case 0:case 11:case 14:case 15:Nc(2,n,t),Kc||Nc(4,n,t),tl(e,t,n);break;case 1:Kc||(Lc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Fc(n,t,r)),tl(e,t,n);break;case 21:tl(e,t,n);break;case 22:Kc=(r=Kc)||n.memoizedState!==null,tl(e,t,n),Kc=r;break;default:tl(e,t,n)}}function rl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Hu(t,t.return,e)}}}function il(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Hu(t,t.return,e)}}function al(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jc),t;default:throw Error(i(435,e.tag))}}function ol(e,t){var n=al(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=qu.bind(null,e,t);t.then(r,r)}})}function sl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){$c=c.stateNode,el=!1;break a}break;case 5:$c=c.stateNode,el=!1;break a;case 3:case 4:$c=c.stateNode.containerInfo,el=!0;break a}c=c.return}if($c===null)throw Error(i(160));nl(o,s,a),$c=null,el=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ll(t,e),t=t.sibling}var cl=null;function ll(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sl(t,e),ul(e),r&4&&(Nc(3,e,e.return),Mc(3,e),Nc(5,e,e.return));break;case 1:sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),r&64&&Gc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=cl;if(sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ze]||o[We]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[We]=e,rt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[We]=e,rt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),n!==null&&r&4&&zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),e.flags&32){a=e.stateNode;try{kt(a,``)}catch(t){Hu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(qc=!0);break;case 6:if(sl(t,e),ul(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Hu(e,e.return,t)}}break;case 3:if(Bf=null,a=cl,cl=gf(t.containerInfo),sl(t,e),cl=a,ul(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Hu(e,e.return,t)}qc&&(qc=!1,dl(e));break;case 4:r=cl,cl=gf(e.stateNode.containerInfo),sl(t,e),ul(e),cl=r;break;case 12:sl(t,e),ul(e);break;case 31:sl(t,e),ul(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 13:sl(t,e),ul(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Xl=le()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Gc,d=Kc;if(Gc=u||a,Kc=d||l,sl(t,e),Kc=d,Gc=u,ul(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Gc||Kc||pl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Hu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Hu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Hu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ol(e,n))));break;case 19:sl(t,e),ul(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 30:break;case 21:break;default:sl(t,e),ul(e)}}function ul(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Bc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Uc(e,Vc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(kt(o,``),n.flags&=-33),Uc(e,Vc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Hc(e,Vc(e),s);break;default:throw Error(i(161))}}catch(t){Hu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zc(e,t.alternate,t),t=t.sibling}function pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Nc(4,t,t.return),pl(t);break;case 1:Lc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Fc(t,t.return,n),pl(t);break;case 27:pf(t.stateNode);case 26:case 5:Lc(t,t.return),pl(t);break;case 22:t.memoizedState===null&&pl(t);break;case 30:pl(t);break;default:pl(t)}e=e.sibling}}function ml(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:ml(i,a,n),Mc(4,a);break;case 1:if(ml(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Hu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ia(c[i],s)}catch(e){Hu(r,r.return,e)}}n&&o&64&&Pc(a),Ic(a,a.return);break;case 27:Wc(a);case 26:case 5:ml(i,a,n),n&&r===null&&o&4&&Rc(a),Ic(a,a.return);break;case 12:ml(i,a,n);break;case 31:ml(i,a,n),n&&o&4&&rl(i,a);break;case 13:ml(i,a,n),n&&o&4&&il(i,a);break;case 22:a.memoizedState===null&&ml(i,a,n),Ic(a,a.return);break;case 30:break;default:ml(i,a,n)}t=t.sibling}}function hl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Yi(n))}function gl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yi(e))}function _l(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vl(e,t,n,r),t=t.sibling}function vl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:_l(e,t,n,r),i&2048&&Mc(9,t);break;case 1:_l(e,t,n,r);break;case 3:_l(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yi(e)));break;case 12:if(i&2048){_l(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Hu(t,t.return,e)}}else _l(e,t,n,r);break;case 31:_l(e,t,n,r);break;case 13:_l(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?_l(e,t,n,r):(a._visibility|=2,yl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?_l(e,t,n,r):bl(e,t),i&2048&&hl(o,t);break;case 24:_l(e,t,n,r),i&2048&&gl(t.alternate,t);break;default:_l(e,t,n,r)}}function yl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:yl(a,o,s,c,i),Mc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,yl(a,o,s,c,i)):u._visibility&2?yl(a,o,s,c,i):bl(a,o),i&&l&2048&&hl(o.alternate,o);break;case 24:yl(a,o,s,c,i),i&&l&2048&&gl(o.alternate,o);break;default:yl(a,o,s,c,i)}t=t.sibling}}function bl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:bl(n,r),i&2048&&hl(r.alternate,r);break;case 24:bl(n,r),i&2048&&gl(r.alternate,r);break;default:bl(n,r)}t=t.sibling}}var xl=8192;function Sl(e,t,n){if(e.subtreeFlags&xl)for(e=e.child;e!==null;)Cl(e,t,n),e=e.sibling}function Cl(e,t,n){switch(e.tag){case 26:Sl(e,t,n),e.flags&xl&&e.memoizedState!==null&&Gf(n,cl,e.memoizedState,e.memoizedProps);break;case 5:Sl(e,t,n);break;case 3:case 4:var r=cl;cl=gf(e.stateNode.containerInfo),Sl(e,t,n),cl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=xl,xl=16777216,Sl(e,t,n),xl=r):Sl(e,t,n));break;default:Sl(e,t,n)}}function wl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yc=r,Ol(r,e)}wl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)El(e),e=e.sibling}function El(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&Nc(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Dl(e)):Tl(e);break;default:Tl(e)}}function Dl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yc=r,Ol(r,e)}wl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Nc(8,t,t.return),Dl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Dl(t));break;default:Dl(t)}e=e.sibling}}function Ol(e,t){for(;Yc!==null;){var n=Yc;switch(n.tag){case 0:case 11:case 15:Nc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Yi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Yc=r;else a:for(n=e;Yc!==null;){r=Yc;var i=r.sibling,a=r.return;if(Qc(r),r===n){Yc=null;break a}if(i!==null){i.return=a,Yc=i;break a}Yc=a}}}var kl={getCacheForType:function(e){var t=Vi(qi),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Vi(qi).controller.signal}},Al=typeof WeakMap==`function`?WeakMap:Map,jl=0,Ml=null,Nl=null,Pl=0,Fl=0,Il=null,Ll=!1,Rl=!1,zl=!1,Bl=0,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=null,Jl=null,Yl=!1,Xl=0,Zl=0,Ql=1/0,$l=null,eu=null,tu=0,nu=null,ru=null,iu=0,au=0,ou=null,su=null,cu=0,lu=null;function uu(){return jl&2&&Pl!==0?Pl&-Pl:P.T===null?Ve():ld()}function du(){if(Gl===0)if(!(Pl&536870912)||bi){var e=Ee;Ee<<=1,!(Ee&3932160)&&(Ee=262144),Gl=e}else Gl=536870912;return e=Ua.current,e!==null&&(e.flags|=32),Gl}function fu(e,t,n){(e===Ml&&(Fl===2||Fl===9)||e.cancelPendingCommit!==null)&&(yu(e,0),gu(e,Pl,Gl,!1)),Pe(e,n),(!(jl&2)||e!==Ml)&&(e===Ml&&(!(jl&2)&&(Ul|=n),Vl===4&&gu(e,Pl,Gl,!1)),td(e))}function pu(e,t,n){if(jl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ae(e,t),a=r?Du(e,t):Tu(e,t,!0),o=r;do{if(a===0){Rl&&!r&&gu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!hu(n)){a=Tu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ql;var l=c.current.memoizedState.isDehydrated;if(l&&(yu(c,s).flags|=256),s=Tu(c,s,!1),s!==2){if(zl&&!l){c.errorRecoveryDisabledLanes|=o,Ul|=o,a=4;break a}o=Jl,Jl=a,o!==null&&(Jl===null?Jl=o:Jl.push.apply(Jl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){yu(e,0),gu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:gu(r,t,Gl,!Ll);break a;case 2:Jl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Xl+300-le(),10<a)){if(gu(r,t,Gl,!Ll),ke(r,0,!0)!==0)break a;iu=t,r.timeoutHandle=Kd(mu.bind(null,r,n,Jl,$l,Yl,t,Gl,Ul,Kl,Ll,o,`Throttled`,-0,0),a);break a}mu(r,n,Jl,$l,Yl,t,Gl,Ul,Kl,Ll,o,null,-0,0)}}break}while(1);td(e)}function mu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Lt},Cl(t,a,d);var m=(a&62914560)===a?Xl-le():(a&4194048)===a?Zl-le():0;if(m=qf(d,m),m!==null){iu=a,e.cancelPendingCommit=m(Pu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),gu(e,a,o,!l);return}}Pu(e,t,a,n,r,i,o,s,c)}function hu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gu(e,t,n,r){t&=~Wl,t&=~Ul,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-xe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ie(e,n,t)}function _u(){return jl&6?!0:(nd(0,!1),!1)}function vu(){if(Nl!==null){if(Fl===0)var e=Nl.return;else e=Nl,Ni=Mi=null,vo(e),va=null,ya=0,e=Nl;for(;e!==null;)jc(e.alternate,e),e=e.return;Nl=null}}function yu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),iu=0,vu(),Ml=e,Nl=n=Yr(e.current,null),Pl=t,Fl=0,Il=null,Ll=!1,Rl=Ae(e,t),zl=!1,Kl=Gl=Wl=Ul=Hl=Vl=0,Jl=ql=null,Yl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-xe(r),a=1<<i;t|=e[i],r&=~a}return Bl=t,zr(),n}function bu(e,t){$a=null,P.H=Os,t===ca||t===ua?(t=ga(),Fl=3):t===la?(t=ga(),Fl=4):Fl=t===Ks?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Il=t,Nl===null&&(Vl=1,Bs(e,ri(t,e.current)))}function xu(){var e=Ua.current;return e===null?!0:(Pl&4194048)===Pl?Wa===null:(Pl&62914560)===Pl||Pl&536870912?e===Wa:!1}function Su(){var e=P.H;return P.H=Os,e===null?Os:e}function Cu(){var e=P.A;return P.A=kl,e}function wu(){Vl=4,Ll||(Pl&4194048)!==Pl&&Ua.current!==null||(Rl=!0),!(Hl&134217727)&&!(Ul&134217727)||Ml===null||gu(Ml,Pl,Gl,!1)}function Tu(e,t,n){var r=jl;jl|=2;var i=Su(),a=Cu();(Ml!==e||Pl!==t)&&($l=null,yu(e,t)),t=!1;var o=Vl;a:do try{if(Fl!==0&&Nl!==null){var s=Nl,c=Il;switch(Fl){case 8:vu(),o=6;break a;case 3:case 2:case 9:case 6:Ua.current===null&&(t=!0);var l=Fl;if(Fl=0,Il=null,ju(e,s,c,l),n&&Rl){o=0;break a}break;default:l=Fl,Fl=0,Il=null,ju(e,s,c,l)}}Eu(),o=Vl;break}catch(t){bu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ni=Mi=null,jl=r,P.H=i,P.A=a,Nl===null&&(Ml=null,Pl=0,zr()),o}function Eu(){for(;Nl!==null;)ku(Nl)}function Du(e,t){var n=jl;jl|=2;var r=Su(),a=Cu();Ml!==e||Pl!==t?($l=null,Ql=le()+500,yu(e,t)):Rl=Ae(e,t);a:do try{if(Fl!==0&&Nl!==null){t=Nl;var o=Il;b:switch(Fl){case 1:Fl=0,Il=null,ju(e,t,o,1);break;case 2:case 9:if(fa(o)){Fl=0,Il=null,Au(t);break}t=function(){Fl!==2&&Fl!==9||Ml!==e||(Fl=7),td(e)},o.then(t,t);break a;case 3:Fl=7;break a;case 4:Fl=5;break a;case 7:fa(o)?(Fl=0,Il=null,Au(t)):(Fl=0,Il=null,ju(e,t,o,7));break;case 5:var s=null;switch(Nl.tag){case 26:s=Nl.memoizedState;case 5:case 27:var c=Nl;if(s?Wf(s):c.stateNode.complete){Fl=0,Il=null;var l=c.sibling;if(l!==null)Nl=l;else{var u=c.return;u===null?Nl=null:(Nl=u,Mu(u))}break b}}Fl=0,Il=null,ju(e,t,o,5);break;case 6:Fl=0,Il=null,ju(e,t,o,6);break;case 8:vu(),Vl=6;break a;default:throw Error(i(462))}}Ou();break}catch(t){bu(e,t)}while(1);return Ni=Mi=null,P.H=r,P.A=a,jl=n,Nl===null?(Ml=null,Pl=0,zr(),Vl):0}function Ou(){for(;Nl!==null&&!se();)ku(Nl)}function ku(e){var t=Sc(e.alternate,e,Bl);e.memoizedProps=e.pendingProps,t===null?Mu(e):Nl=t}function Au(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=oc(n,t,t.pendingProps,t.type,void 0,Pl);break;case 11:t=oc(n,t,t.pendingProps,t.type.render,t.ref,Pl);break;case 5:vo(t);default:jc(n,t),t=Nl=Xr(t,Bl),t=Sc(n,t,Bl)}e.memoizedProps=e.pendingProps,t===null?Mu(e):Nl=t}function ju(e,t,n,r){Ni=Mi=null,vo(t),va=null,ya=0;var i=t.return;try{if(Gs(e,i,t,n,Pl)){Vl=1,Bs(e,ri(n,e.current)),Nl=null;return}}catch(t){if(i!==null)throw Nl=i,t;Vl=1,Bs(e,ri(n,e.current)),Nl=null;return}t.flags&32768?(bi||r===1?e=!0:Rl||Pl&536870912?e=!1:(Ll=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ua.current,r!==null&&r.tag===13&&(r.flags|=16384))),Nu(t,e)):Mu(t)}function Mu(e){var t=e;do{if(t.flags&32768){Nu(t,Ll);return}e=t.return;var n=kc(t.alternate,t,Bl);if(n!==null){Nl=n;return}if(t=t.sibling,t!==null){Nl=t;return}Nl=t=e}while(t!==null);Vl===0&&(Vl=5)}function Nu(e,t){do{var n=Ac(e.alternate,e);if(n!==null){n.flags&=32767,Nl=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Nl=e;return}Nl=e=n}while(e!==null);Vl=6,Nl=null}function Pu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do zu();while(tu!==0);if(jl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Rr,Fe(e,n,o,s,c,l),e===Ml&&(Nl=Ml=null,Pl=0),ru=t,nu=e,iu=n,au=o,ou=a,su=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Ju(pe,function(){return Bu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=P.T,P.T=null,a=F.p,F.p=2,s=jl,jl|=4;try{Xc(e,t,n)}finally{jl=s,F.p=a,P.T=r}}tu=1,Fu(),Iu(),Lu()}}function Fu(){if(tu===1){tu=0;var e=nu,t=ru,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=jl;jl|=4;try{ll(t,e);var a=zd,o=dr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&ur(s.ownerDocument.documentElement,s)){if(c!==null&&fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=lr(s,h),v=lr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{jl=i,F.p=r,P.T=n}}e.current=t,tu=2}}function Iu(){if(tu===2){tu=0;var e=nu,t=ru,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=jl;jl|=4;try{Zc(e,t.alternate,t)}finally{jl=i,F.p=r,P.T=n}}tu=3}}function Lu(){if(tu===4||tu===3){tu=0,ce();var e=nu,t=ru,n=iu,r=su;t.subtreeFlags&10256||t.flags&10256?tu=5:(tu=0,ru=nu=null,Ru(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(eu=null),Be(n),t=t.stateNode,ye&&typeof ye.onCommitFiberRoot==`function`)try{ye.onCommitFiberRoot(ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=P.T,i=F.p,F.p=2,P.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{P.T=t,F.p=i}}iu&3&&zu(),td(e),i=e.pendingLanes,n&261930&&i&42?e===lu?cu++:(cu=0,lu=e):cu=0,nd(0,!1)}}function Ru(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yi(t)))}function zu(){return Fu(),Iu(),Lu(),Bu()}function Bu(){if(tu!==5)return!1;var e=nu,t=au;au=0;var n=Be(iu),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=ou,ou=null;var o=nu,s=iu;if(tu=0,ru=nu=null,iu=0,jl&6)throw Error(i(331));var c=jl;if(jl|=4,El(o.current),vl(o,o.current,s,n),jl=c,nd(0,!1),ye&&typeof ye.onPostCommitFiberRoot==`function`)try{ye.onPostCommitFiberRoot(ve,o)}catch{}return!0}finally{F.p=a,P.T=r,Ru(e,t)}}function Vu(e,t,n){t=ri(n,t),t=Hs(e.stateNode,t,2),e=Aa(e,t,2),e!==null&&(Pe(e,2),td(e))}function Hu(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(eu===null||!eu.has(r))){e=ri(n,e),n=Us(2),r=Aa(t,n,2),r!==null&&(Ws(n,r,t,e),Pe(r,2),td(r));break}}t=t.return}}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Al;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(zl=!0,i.add(n),e=Wu.bind(null,e,t,n),t.then(e,e))}function Wu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ml===e&&(Pl&n)===n&&(Vl===4||Vl===3&&(Pl&62914560)===Pl&&300>le()-Xl?!(jl&2)&&yu(e,0):Wl|=n,Kl===Pl&&(Kl=0)),td(e)}function Gu(e,t){t===0&&(t=Me()),e=Hr(e,t),e!==null&&(Pe(e,t),td(e))}function Ku(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gu(e,n)}function qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Gu(e,n)}function Ju(e,t){return ae(e,t)}var Yu=null,Xu=null,Zu=!1,Qu=!1,$u=!1,ed=0;function td(e){e!==Xu&&e.next===null&&(Xu===null?Yu=Xu=e:Xu=Xu.next=e),Qu=!0,Zu||(Zu=!0,cd())}function nd(e,t){if(!$u&&Qu){$u=!0;do for(var n=!1,r=Yu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-xe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,sd(r,a))}else a=Pl,a=ke(r,r===Ml?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ae(r,a)||(n=!0,sd(r,a));r=r.next}while(n);$u=!1}}function rd(){id()}function id(){Qu=Zu=!1;var e=0;ed!==0&&Gd()&&(e=ed);for(var t=le(),n=null,r=Yu;r!==null;){var i=r.next,a=ad(r,t);a===0?(r.next=null,n===null?Yu=i:n.next=i,i===null&&(Xu=n)):(n=r,(e!==0||a&3)&&(Qu=!0)),r=i}tu!==0&&tu!==5||nd(e,!1),ed!==0&&(ed=0)}function ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-xe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ml,n=Pl,n=ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Fl===2||Fl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ae(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&oe(r),Be(n)){case 2:case 8:n=fe;break;case 32:n=pe;break;case 268435456:n=he;break;default:n=pe}return r=od.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&oe(r),e.callbackPriority=2,e.callbackNode=null,2}function od(e,t){if(tu!==0&&tu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(zu()&&e.callbackNode!==n)return null;var r=Pl;return r=ke(e,e===Ml?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(pu(e,r,t),ad(e,le()),e.callbackNode!=null&&e.callbackNode===n?od.bind(null,e):null)}function sd(e,t){if(zu())return null;pu(e,t,!0)}function cd(){Yd(function(){jl&6?ae(de,rd):id()})}function ld(){if(ed===0){var e=Qi;e===0&&(e=Te,Te<<=1,!(Te&261888)&&(Te=256)),ed=e}return ed}function ud(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:It(``+e)}function dd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function fd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=ud((i[Ge]||null).action),o=r.submitter;o&&(t=(t=o[Ge]||null)?ud(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new an(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ed!==0){var e=o?dd(i,o):new FormData(i);ms(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?dd(i,o):new FormData(i),ms(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var pd=0;pd<Nr.length;pd++){var md=Nr[pd];Pr(md.toLowerCase(),`on`+(md[0].toUpperCase()+md.slice(1)))}Pr(Tr,`onAnimationEnd`),Pr(Er,`onAnimationIteration`),Pr(Dr,`onAnimationStart`),Pr(`dblclick`,`onDoubleClick`),Pr(`focusin`,`onFocus`),Pr(`focusout`,`onBlur`),Pr(Or,`onTransitionRun`),Pr(kr,`onTransitionStart`),Pr(Ar,`onTransitionCancel`),Pr(jr,`onTransitionEnd`),st(`onMouseEnter`,[`mouseout`,`mouseover`]),st(`onMouseLeave`,[`mouseout`,`mouseover`]),st(`onPointerEnter`,[`pointerout`,`pointerover`]),st(`onPointerLeave`,[`pointerout`,`pointerover`]),ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var hd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),gd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(hd));function _d(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Fr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Fr(e)}i.currentTarget=null,a=c}}}}function vd(e,t){var n=t[qe];n===void 0&&(n=t[qe]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,it.forEach(function(t){t!==`selectionchange`&&(gd.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!qt||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=$e(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Wt(function(){var r=a,i=zt(n),s=[];a:{var c=Mr.get(e);if(c!==void 0){var l=an,u=e;switch(e){case`keypress`:if($t(n)===0)break a;case`keydown`:case`keyup`:l=Cn;break;case`focusin`:u=`focus`,l=mn;break;case`focusout`:u=`blur`,l=mn;break;case`beforeblur`:case`afterblur`:l=mn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Tn;break;case Tr:case Er:case Dr:l=hn;break;case jr:l=En;break;case`scroll`:case`scrollend`:l=sn;break;case`wheel`:l=Dn;break;case`copy`:case`cut`:case`paste`:l=gn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=wn;break;case`toggle`:case`beforetoggle`:l=On}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Gt(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Rt&&(u=n.relatedTarget||n.fromElement)&&($e(u)||u[Ke]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?$e(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=wn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:tt(l),h=u==null?c:tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,$e(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=Jn;else if(Hn(c))if(Yn)v=ir;else{v=nr;var y=tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Nt(r.elementType)&&(v=Jn):v=rr;if(v&&=v(e,r)){Un(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Tt(c,`number`,c.value)}switch(y=r?tt(r):window,e){case`focusin`:(Hn(y)||y.contentEditable===`true`)&&(mr=y,hr=r,gr=null);break;case`focusout`:gr=hr=mr=null;break;case`mousedown`:vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:vr=!1,br(s,n,i);break;case`selectionchange`:if(pr)break;case`keydown`:case`keyup`:br(s,n,i)}var b;if(An)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Rn?In(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Nn&&n.locale!==`ko`&&(Rn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Rn&&(b=Qt()):(Yt=i,Xt=`value`in Yt?Yt.value:Yt.textContent,Rn=!0)),y=Td(r,x),0<y.length&&(x=new _n(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Ln(n),b!==null&&(x.data=b)))),(b=Mn?zn(e,n):Bn(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new _n(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),fd(s,e,r,n,i)}_d(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Gt(e,n),i!=null&&r.unshift(wd(e,i,a)),i=Gt(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Gt(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=Gt(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&kt(e,``+r);break;case`className`:pt(e,`class`,r);break;case`tabIndex`:pt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:pt(e,n,r);break;case`style`:Mt(e,r,o);break;case`data`:if(t!==`object`){pt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=It(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=It(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Lt);break;case`onScroll`:r!=null&&vd(`scroll`,e);break;case`onScrollEnd`:r!=null&&vd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=It(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:vd(`beforetoggle`,e),vd(`toggle`,e),ft(e,`popover`,r);break;case`xlinkActuate`:mt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:mt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:mt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:mt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:mt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:mt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Pt.get(n)||n,ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Mt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&kt(e,``+r);break;case`onScroll`:r!=null&&vd(`scroll`,e);break;case`onScrollEnd`:r!=null&&vd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Lt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!at.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[Ge]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:vd(`error`,e),vd(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:vd(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}wt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in vd(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Et(e,!!r,n,!0):Et(e,!!r,t,!1);return;case`textarea`:for(s in vd(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}Ot(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:vd(`beforetoggle`,e),vd(`toggle`,e),vd(`cancel`,e),vd(`close`,e);break;case`iframe`:case`object`:vd(`load`,e);break;case`video`:case`audio`:for(r=0;r<hd.length;r++)vd(hd[r],e);break;case`image`:vd(`error`,e),vd(`load`,e);break;case`details`:vd(`toggle`,e);break;case`embed`:case`source`:case`link`:vd(`error`,e),vd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(Nt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Ct(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Et(e,!!n,n?[]:``,!1):Et(e,!!n,t,!0)):Et(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}Dt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(Nt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ze]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Qe(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ze])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qe(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=F.d;F.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=_u();return e||t}function yf(e){var t=et(e);t!==null&&t.tag===5&&t.type===`form`?gs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=St(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),rt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+St(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+St(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+St(n.imageSizes)+`"]`)):i+=`[href="`+St(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=p({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),rt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+St(r)+`"][href="`+St(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=p({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),rt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=nt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=p({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);rt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=nt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),rt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=nt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=p({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),rt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=W.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=nt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=nt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=nt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+St(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),rt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+St(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+St(n.href)+`"]`);if(r)return t.instance=r,rt(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),rt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,rt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),rt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,rt(a),a):(r=n,(a=mf.get(o))&&(r=p({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),rt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ze]||a[We]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,rt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),rt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:x,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=qr(3,null,null,t),e.current=a,a.stateNode=e,t=Ji(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Da(a),e}function tp(e){return e?(e=Gr,e):Gr}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Aa(e,r,t),n!==null&&(fu(n,e,t),ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Hr(e,67108864);t!==null&&fu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=uu();t=ze(t);var n=Hr(e,t);n!==null&&fu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,up(e,t,n,r)}finally{F.p=a,P.T=i}}function lp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,up(e,t,n,r)}finally{F.p=a,P.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Oe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-xe(o);s.entanglements[1]|=c,o&=~c}td(a),!(jl&6)&&(Ql=le()+500,nd(0,!1))}}break;case 31:case 13:s=Hr(a,2),s!==null&&fu(s,a,2),_u(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=zt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=$e(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(ue()){case de:return 2;case fe:return 8;case pe:case me:return 32;case he:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=$e(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,He(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,He(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Rt=r,n.target.dispatchEvent(r),Rt=null}else return t=et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=et(n);a!==null&&(e.splice(t,3),t-=3,ms(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Ge]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Ge]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,uu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),_u(),t[Ke]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ve();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{ve=zp.inject(Rp),ye=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ls,s=Rs,c=zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[Ke]=t.current,xd(e),new Fp(t)}})),xr=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=br()}))();function Sr(e,t){return new Proxy({},{get(n,r){if(typeof r==`string`)return Sr(e,[...t,r]);if(r===Ot){if(t.length<1){let n=[e,...t].join(`.`);throw Error(`API path is expected to be of the form \`${e}.childComponent.functionName\`. Found: \`${n}\``)}return`_reference/childComponent/`+t.join(`/`)}else return}})}var Cr=()=>Sr(`components`,[]),$=Ft;Cr();function wr(e,t,n){return new qn(e,{logger:!1,fetch:(e,t)=>fetch(e,{...t,signal:AbortSignal.timeout(8e3)})}).query(t,n)}async function Tr(e){if(navigator.onLine===!1)throw TypeError(`Network request failed while offline`);if((await wr(e,$.connectionHealth.check,{}))?.ok!==!0)throw Error(`Health check failed`);return!0}var Er=(0,m.createContext)({sessionToken:null,coordinated:!1});function Dr({session:e,onSignIn:t,children:n}){let r=ir(),i=cr(),a=(0,m.useSyncExternalStore)(L,R,()=>null),[o,s]=(0,m.useState)(!1),c=(0,m.useRef)(!1),l=(0,m.useRef)(!0),u=x(e?.sessionToken)?e.sessionToken:null,d=(0,m.useRef)(u),f=(0,m.useMemo)(()=>({sessionToken:u,coordinated:!0}),[u]);(0,m.useEffect)(()=>(l.current=!0,()=>{l.current=!1}),[]),(0,m.useEffect)(()=>{d.current!==u&&(d.current=u,W())},[u]),(0,m.useEffect)(()=>{let e=()=>V(TypeError(`Network request failed while offline`),{source:`connection.offline`,operation:`connection.monitor`,canClose:!0}),t=()=>{};return window.addEventListener(`offline`,e),window.addEventListener(`online`,t),navigator.onLine===!1&&e(),()=>{window.removeEventListener(`offline`,e),window.removeEventListener(`online`,t)}},[]),(0,m.useEffect)(()=>{if(i.isWebSocketConnected){H(`connection.socket`),navigator.onLine!==!1&&H(`connection.offline`);return}if(i.connectionRetries<2)return;let e=setTimeout(()=>{navigator.onLine!==!1&&V(Object.assign(Error(`Connection failed`),{code:`CONNECTION_FAILED`}),{source:`connection.socket`,operation:`connection.monitor`,canClose:!0})},4e3);return()=>clearTimeout(e)},[i.isWebSocketConnected,i.connectionRetries]),(0,m.useEffect)(()=>{let e=e=>{e.preventDefault(),V(e.reason,{operation:`application.async`,source:`application.async`,canClose:!0})},t=e=>{e.error&&(e.preventDefault(),V(e.error,{operation:`application.event`,source:`application.event`,canClose:!0}))};return window.addEventListener(`unhandledrejection`,e),window.addEventListener(`error`,t),()=>{window.removeEventListener(`unhandledrejection`,e),window.removeEventListener(`error`,t)}},[]);let p=(0,m.useCallback)(async()=>{if(c.current)return;c.current=!0,s(!0);let e=a,t=u;try{await O(async()=>{if(await Tr(r.url),!r.connectionState().isWebSocketConnected)throw Object.assign(Error(`Connection failed`),{code:`CONNECTION_FAILED`})});for(let n of z()){if(d.current!==t)return;e=n,n.category!==`session`&&(n.kind===`query`&&n.retry?await O(n.retry):n.kind===`render`&&n.retry&&await n.retry(),H(n.source))}}catch(n){if(d.current!==t)return;V(n,{source:e?.source||`connection.recovery`,operation:e?.operation||`connection.recovery`,kind:e?.kind||`query`,retry:e?.retry,canClose:e?.canClose||!1})}finally{c.current=!1,l.current&&s(!1)}},[r,a,u]),h=()=>{W(),t?.()},g=a?.category||(navigator.onLine===!1?`offline`:`service`);return(0,v.jsxs)(Er.Provider,{value:f,children:[n,a&&(0,v.jsx)(k,{category:g,busy:o,canClose:a.canClose,onRetry:p,onSignIn:h,onClose:U})]})}function Or(){let[e,t]=(0,m.useState)(null),n=(0,m.useRef)(!1),r=(0,m.useRef)(null),i=(0,m.useRef)(0),a=(0,m.useRef)(!0);(0,m.useEffect)(()=>(a.current=!0,()=>{a.current=!1}),[]);let o=(0,m.useCallback)(async(e,o)=>{if(n.current)return;n.current=!0,H(`file.prepare`);let s=e=>{a.current&&t(t=>({...t,...e}))};r.current={message:e,action:o},s({id:++i.current,state:`loading`,message:e,progress:void 0,detail:``}),await new Promise(e=>requestAnimationFrame(()=>e()));try{let e=await o(s);return s({state:`success`,progress:100,message:`Your file is ready!`,detail:e?.detail||`The file has been prepared and handed to your browser.`}),e}catch(e){let t=V(e,{operation:`file.prepare`,kind:`file`,canClose:!0});throw s({state:`error`,progress:void 0,message:`Unable to prepare your file.`,detail:E(t)}),t}finally{n.current=!1}},[]);return{operation:e,run:o,retry:(0,m.useCallback)(()=>{let e=r.current;e&&o(e.message,e.action).catch(()=>{})},[o])}}function kr(e){let t=(0,h.c)(12),{operation:n,onRetry:r}=e,i=(0,m.useRef)(null),a=(0,m.useSyncExternalStore)(L,R,Ar),{coordinated:o}=(0,m.useContext)(Er),s=o?a:null,c,l;t[0]===s?(c=t[1],l=t[2]):(c=()=>{let e=i.current,t=document.activeElement;return s||e.showModal(),()=>{e.close(),t?.isConnected&&t.focus({preventScroll:!0})}},l=[s],t[0]=s,t[1]=c,t[2]=l),(0,m.useEffect)(c,l);let u;t[3]!==r||t[4]!==n?(u=(0,v.jsx)(y,{variant:`modal`,...n,onRetry:r}),t[3]=r,t[4]=n,t[5]=u):u=t[5];let d;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(d=()=>i.current?.close(),t[6]=d):d=t[6];let f=n.state===`loading`?`Continue in background`:`Close`,p;t[7]===f?p=t[8]:(p=(0,v.jsx)(`button`,{className:`ibacmi-file-dialog__close`,type:`button`,onClick:d,children:f}),t[7]=f,t[8]=p);let g;return t[9]!==u||t[10]!==p?(g=(0,v.jsxs)(`dialog`,{ref:i,className:`ibacmi-file-dialog`,"aria-label":`File preparation status`,children:[u,p]}),t[9]=u,t[10]=p,t[11]=g):g=t[11],g}function Ar(){return null}var jr=new Set([`adminAuth:listStudentAccounts`,`validation:options`,`validation:history`,`batchExport:options`,`noIdList:options`,`noIdList:progress`,`allinfo:listByStudentId`,`studentProfile:get`,`studentProfile:checkUploadAccess`,`applicants:list`,`applicants:getCourseCounts`,`billing:options`,`billing:workspace`,`form2:settings`,`documentation:list`,`support:listConversations`,`support:listStudentConversations`,`quickActions:list`]);function Mr(e,t){let n=(0,h.c)(42),r;n[0]===t?r=n[1]:(r=t===void 0?{}:t,n[0]=t,n[1]=r);let i=r,a=ir(),o=(0,m.useContext)(Er),s=(0,m.useId)(),c=Mt(e),l;n[2]===c?l=n[3]:(l=Nt(c),n[2]=c,n[3]=l);let u=l,d;n[4]===i?d=n[5]:(d=JSON.stringify(i),n[4]=i,n[5]=d);let f=d,p;if(n[6]!==c||n[7]!==o.sessionToken||n[8]!==f){bb0:{if(f===`"skip"`){let e;n[10]===Symbol.for(`react.memo_cache_sentinel`)?(e={skip:!0,args:{}},n[10]=e):e=n[10],p=e;break bb0}let e=JSON.parse(f);if(jr.has(c)){let t=e.sessionToken??o.sessionToken;if(!x(t)){let e;n[11]===Symbol.for(`react.memo_cache_sentinel`)?(e={skip:!0,missingSession:!0,args:{}},n[11]=e):e=n[11],p=e;break bb0}e.sessionToken=t}let t;n[12]===e?t=n[13]:(t={skip:!1,args:e},n[12]=e,n[13]=t),p=t}n[6]=c,n[7]=o.sessionToken,n[8]=f,n[9]=p}else p=n[9];let g=p,_=c+`:`+JSON.stringify(g),v;n[14]!==g.args||n[15]!==g.skip||n[16]!==u?(v=g.skip?{}:{result:{query:u,args:g.args}},n[14]=g.args,n[15]=g.skip,n[16]=u,n[17]=v):v=n[17];let y=mr(v).result,b;n[18]===_?b=n[19]:(b={key:_,value:void 0,recoveredError:null},n[18]=_,n[19]=b);let[S,C]=(0,m.useState)(b),w=y!==void 0&&!(y instanceof Error);S.key===_?w&&y!==S.value&&C({key:_,value:y,recoveredError:null}):C({key:_,value:w?y:void 0,recoveredError:null});let T;n[20]!==a.url||n[21]!==_||n[22]!==g.args||n[23]!==y||n[24]!==u?(T=async()=>{C({key:_,value:await wr(a.url,u,g.args),recoveredError:y})},n[20]=a.url,n[21]=_,n[22]=g.args,n[23]=y,n[24]=u,n[25]=T):T=n[25];let E=T,D,O;n[26]!==S.key||n[27]!==S.recoveredError||n[28]!==S.value||n[29]!==w||n[30]!==_||n[31]!==c||n[32]!==g.missingSession||n[33]!==g.skip||n[34]!==y||n[35]!==E||n[36]!==s?(D=()=>{g.missingSession?V(Object.assign(Error(`Session expired`),{code:`SESSION_EXPIRED`}),{source:s,operation:c,kind:`query`,canClose:!1}):y instanceof Error&&S.recoveredError!==y?V(y,{source:s,operation:c,retry:E,kind:`query`,canClose:S.key===_&&S.value!==void 0}):(w||g.skip||S.recoveredError===y)&&H(s)},O=[y,g.missingSession,g.skip,w,S.recoveredError,S.key,S.value,_,c,s,E],n[26]=S.key,n[27]=S.recoveredError,n[28]=S.value,n[29]=w,n[30]=_,n[31]=c,n[32]=g.missingSession,n[33]=g.skip,n[34]=y,n[35]=E,n[36]=s,n[37]=D,n[38]=O):(D=n[37],O=n[38]),(0,m.useEffect)(D,O);let k,A;if(n[39]===s?(k=n[40],A=n[41]):(k=()=>()=>H(s),A=[s],n[39]=s,n[40]=k,n[41]=A),(0,m.useEffect)(k,A),!g.skip)return w?y:S.key===_?S.value:void 0}function Nr(e,t,n){let r=Mt(e);return(0,m.useCallback)(async(...e)=>{try{let n=await t(...e);return H(r),n?.success===!1&&typeof n.message==`string`?{...n,message:E(n.message,`Please check your information and try again.`)}:n}catch(e){throw V(e,{operation:r,source:r,kind:n,canClose:!0})}},[t,r,n])}function Pr(e){return Nr(e,or(e),`mutation`)}function Fr(e){return Nr(e,sr(e),`action`)}var Ir={dashboard:[`M3 3h7v7H3z M14 3h7v4h-7z M14 11h7v10h-7z M3 14h7v7H3z`],group:[`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M22 21v-2a4 4 0 0 0-3-3.87`,`M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M17 3.13a4 4 0 0 1 0 7.75`],school:[`m2 9 10-6 10 6-10 6-10-6 M6 11.4V17q6 5 12 0v-5.6 M22 9v8`],archive:[`M3 3h18v5H3z M5 8v13h14V8 M10 12h4`],billing:[`M14 2H4v20h16V8l-6-6 M14 2v6h6 M7 12h10 M7 16h10 M11 12v8`],validation:[`M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4`,`m8 12 3 3 5-6`],images:[`M3 3h18v18H3z M3 16l6-6 5 5 3-3 4 4`,`M16 8h.01`],history:[`M3 11a9 9 0 1 1 2.6 7.4 M3 4v7h7 M12 7v5l3 2`],forum:[`M14 14H6l-4 4V3h16v7 M10 17v3h8l4 3V10h-4`],manage_accounts:[`M14 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M19 10v2m0 6v2m-5-5h2m6 0h-2m-4.5-3.5 1.5 1.5m4 4 1.5 1.5m0-7L20 13m-4 4-1.5 1.5`,`M19 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6`],logout:[`M9 21H3V3h6 M9 12h13 m-5-5 5 5-5 5`],menu:[`M4 6h16 M4 12h16 M4 18h16`],close:[`m6 6 12 12 M18 6 6 18`],left_panel_open:[`M3 3h18v18H3z M8 3v18 m5-12 3 3-3 3`],left_panel_close:[`M3 3h18v18H3z M8 3v18 m8-12-3 3 3 3`]};function Lr(e){let t=(0,h.c)(4),{name:n}=e,r=Ir[n],i;t[0]===r?i=t[1]:(i=r.map(Rr),t[0]=r,t[1]=i);let a;return t[2]===i?a=t[3]:(a=(0,v.jsx)(`svg`,{className:`admin-sidebar-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.7`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:i}),t[2]=i,t[3]=a),a}function Rr(e,t){return(0,v.jsx)(`path`,{d:e},t)}var zr=[{label:`Main dashboard`,items:[{id:`dashboard`,label:`Dashboard`,icon:`dashboard`},{id:`records`,label:`Grantee Records`,icon:`group`}]},{label:`Scholarship operations`,items:[{id:`portal`,label:`UniFAST Portal`,icon:`school`},{id:`archive`,label:`Archive`,icon:`archive`},{id:`logs`,label:`Activity Logs`,icon:`history`},{id:`billing`,label:`Billing Management`,icon:`billing`},{id:`form2`,label:`Form 2 List`,icon:`billing`},{id:`validation`,label:`Validation Management`,icon:`validation`}]},{label:`Student services`,items:[{id:`support`,label:`Student Support`,icon:`forum`}]},{label:`Administration`,items:[{id:`users`,label:`User Management`,icon:`manage_accounts`},{id:`documentation`,label:`Documentation`,icon:`images`}]}];function Br(e){let t=(0,h.c)(54),{activeItem:n,onNavigate:r,onLogout:i}=e,[a,o]=(0,m.useState)(!1),[s,c]=(0,m.useState)(!1),l=(0,m.useRef)(null),u=(0,m.useRef)(null),d;t[0]===n?d=t[1]:(d=zr.flatMap(Ur).find(e=>e.id===n)?.label||`Dashboard`,t[0]=n,t[1]=d);let f=d,p,_;t[2]===a?(p=t[3],_=t[4]):(p=()=>{if(!a)return;let e=l.current,t=u.current,n=document.querySelector(`.admin-main`),r=document.body.style.overflow,i=n?.inert;document.body.style.overflow=`hidden`,n&&(n.inert=!0),e.querySelector(`button`)?.focus();let s=t=>{if(t.key===`Escape`&&(t.preventDefault(),o(!1)),t.key!==`Tab`)return;let n=[...e.querySelectorAll(`button:not([disabled])`)].filter(Hr),r=n[0],i=n.at(-1);t.shiftKey&&document.activeElement===r?(t.preventDefault(),i?.focus()):!t.shiftKey&&document.activeElement===i&&(t.preventDefault(),r?.focus())},c=window.matchMedia(`(min-width: 768px)`),d=()=>{c.matches&&o(!1)};return document.addEventListener(`keydown`,s),c.addEventListener(`change`,d),()=>{document.body.style.overflow=r,n&&(n.inert=i),document.removeEventListener(`keydown`,s),c.removeEventListener(`change`,d),t?.focus()}},_=[a],t[2]=a,t[3]=p,t[4]=_),(0,m.useEffect)(p,_);let y;t[5]===r?y=t[6]:(y=e=>{o(!1),c(!1),r(e)},t[5]=r,t[6]=y);let b=y,x,S;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,v.jsx)(`img`,{src:g,alt:`IBACMI`}),S=(0,v.jsx)(`span`,{children:`Scholarship Office`}),t[7]=x,t[8]=S):(x=t[7],S=t[8]);let C;t[9]===f?C=t[10]:(C=(0,v.jsxs)(`div`,{children:[S,(0,v.jsx)(`strong`,{children:f})]}),t[9]=f,t[10]=C);let w,T;t[11]===Symbol.for(`react.memo_cache_sentinel`)?(w=()=>o(!0),T=(0,v.jsx)(Lr,{name:`menu`}),t[11]=w,t[12]=T):(w=t[11],T=t[12]);let E;t[13]===a?E=t[14]:(E=(0,v.jsx)(`button`,{ref:u,type:`button`,"aria-label":`Open navigation`,"aria-expanded":a,"aria-controls":`admin-sidebar`,onClick:w,children:T}),t[13]=a,t[14]=E);let D;t[15]!==E||t[16]!==C?(D=(0,v.jsxs)(`header`,{className:`admin-mobile-bar`,children:[x,C,E]}),t[15]=E,t[16]=C,t[17]=D):D=t[17];let O;t[18]===a?O=t[19]:(O=a&&(0,v.jsx)(`div`,{className:`admin-sidebar-backdrop`,"aria-hidden":`true`,onClick:()=>o(!1)}),t[18]=a,t[19]=O);let k=`admin-sidebar${s?` is-pinned`:``}${a?` is-mobile-open`:``}`,A=a?`dialog`:void 0,j=a?!0:void 0,M;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,v.jsx)(`img`,{src:g,alt:`IBACMI`}),t[20]=M):M=t[20];let N;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(N=(0,v.jsxs)(`div`,{className:`admin-sidebar-reveal`,children:[(0,v.jsx)(`strong`,{children:`IBACMI`}),(0,v.jsx)(`span`,{children:`Scholarship Office`})]}),t[21]=N):N=t[21];let P;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,v.jsxs)(`div`,{className:`admin-sidebar-brand`,children:[M,N,(0,v.jsx)(`button`,{type:`button`,className:`admin-sidebar-close`,"aria-label":`Close navigation`,onClick:()=>o(!1),children:(0,v.jsx)(Lr,{name:`close`})})]}),t[22]=P):P=t[22];let F=s?`Collapse navigation`:`Expand navigation`,I;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(I=()=>c(Vr),t[23]=I):I=t[23];let L=s?`left_panel_close`:`left_panel_open`,R;t[24]===L?R=t[25]:(R=(0,v.jsx)(Lr,{name:L}),t[24]=L,t[25]=R);let z=s?`Collapse menu`:`Expand menu`,B;t[26]===z?B=t[27]:(B=(0,v.jsx)(`span`,{className:`admin-sidebar-reveal`,children:z}),t[26]=z,t[27]=B);let V;t[28]!==s||t[29]!==F||t[30]!==R||t[31]!==B?(V=(0,v.jsxs)(`button`,{type:`button`,className:`admin-sidebar-toggle`,"aria-label":F,"aria-expanded":s,"aria-controls":`admin-sidebar-nav`,onClick:I,children:[R,B]}),t[28]=s,t[29]=F,t[30]=R,t[31]=B,t[32]=V):V=t[32];let H;t[33]!==n||t[34]!==b?(H=zr.map(e=>(0,v.jsxs)(`div`,{className:`admin-sidebar-group`,role:`group`,"aria-label":e.label,children:[(0,v.jsx)(`p`,{className:`admin-sidebar-reveal`,children:e.label}),e.items.map(e=>(0,v.jsxs)(`button`,{type:`button`,className:`admin-sidebar-item${n===e.id?` is-active`:``}`,"aria-label":e.label,title:e.label,"aria-current":n===e.id?`location`:void 0,onClick:()=>b(e.id),children:[(0,v.jsx)(Lr,{name:e.icon}),(0,v.jsx)(`span`,{className:`admin-sidebar-reveal`,children:e.label})]},e.id))]},e.label)),t[33]=n,t[34]=b,t[35]=H):H=t[35];let U;t[36]===H?U=t[37]:(U=(0,v.jsx)(`nav`,{id:`admin-sidebar-nav`,className:`admin-sidebar-nav`,"aria-label":`Admin navigation`,children:H}),t[36]=H,t[37]=U);let W;t[38]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,v.jsx)(`p`,{className:`admin-sidebar-reveal`,children:`Account`}),t[38]=W):W=t[38];let G,K;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(G=(0,v.jsx)(Lr,{name:`logout`}),K=(0,v.jsx)(`span`,{className:`admin-sidebar-reveal`,children:`Logout`}),t[39]=G,t[40]=K):(G=t[39],K=t[40]);let q;t[41]===i?q=t[42]:(q=(0,v.jsxs)(`div`,{className:`admin-sidebar-account`,children:[W,(0,v.jsxs)(`button`,{type:`button`,className:`admin-sidebar-item admin-sidebar-logout`,"aria-label":`Logout`,title:`Logout`,onClick:i,children:[G,K]})]}),t[41]=i,t[42]=q);let J;t[43]!==k||t[44]!==A||t[45]!==j||t[46]!==V||t[47]!==U||t[48]!==q?(J=(0,v.jsxs)(`aside`,{id:`admin-sidebar`,ref:l,className:k,role:A,"aria-modal":j,"aria-label":`Scholarship Office navigation`,children:[P,V,U,q]}),t[43]=k,t[44]=A,t[45]=j,t[46]=V,t[47]=U,t[48]=q,t[49]=J):J=t[49];let Y;return t[50]!==D||t[51]!==O||t[52]!==J?(Y=(0,v.jsxs)(v.Fragment,{children:[D,O,J]}),t[50]=D,t[51]=O,t[52]=J,t[53]=Y):Y=t[53],Y}function Vr(e){return!e}function Hr(e){return e.getClientRects().length}function Ur(e){return e.items}var Wr=`modulepreload`,Gr=function(e){return`/IBACMI-Scholarship-Office/`+e},Kr={},qr=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Gr(t,n),t in Kr)return;Kr[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Wr,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Jr=e=>new Intl.NumberFormat(`en-PH`,{style:`currency`,currency:`PHP`}).format(e/100),Yr=()=>new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Manila`,year:`numeric`,month:`2-digit`,day:`2-digit`}).format(new Date);function Xr(e){let t=(0,h.c)(3),n,r;t[0]===e?(n=t[1],r=t[2]):(n=()=>{let t=e.current,n=document.activeElement,r=document.body.style.overflow;return t.showModal(),document.body.style.overflow=`hidden`,()=>{t.close(),document.body.style.overflow=r,n?.isConnected&&n.focus({preventScroll:!0})}},r=[e],t[0]=e,t[1]=n,t[2]=r),(0,m.useEffect)(n,r)}function Zr(e){if(e.key!==`Tab`)return;let t=[...e.currentTarget.querySelectorAll(`button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), summary`)].filter(t=>t.getClientRects().length&&t.closest(`dialog`)===e.currentTarget);e.shiftKey&&document.activeElement===t[0]?(e.preventDefault(),t.at(-1)?.focus()):!e.shiftKey&&document.activeElement===t.at(-1)&&(e.preventDefault(),t[0]?.focus())}function Qr(e){let t=(0,h.c)(10),{label:n,children:r}=e,i;t[0]===n?i=t[1]:(i=(0,v.jsx)(`span`,{children:n}),t[0]=n,t[1]=i);let a;if(t[2]!==r||t[3]!==n){let e;t[5]===n?e=t[6]:(e=e=>(0,m.isValidElement)(e)&&[`input`,`select`,`textarea`].includes(e.type)?(0,m.cloneElement)(e,{"aria-label":n}):e,t[5]=n,t[6]=e),a=m.Children.map(r,e),t[2]=r,t[3]=n,t[4]=a}else a=t[4];let o;return t[7]!==i||t[8]!==a?(o=(0,v.jsxs)(`label`,{className:`billing-field`,children:[i,a]}),t[7]=i,t[8]=a,t[9]=o):o=t[9],o}var $r=()=>({category:``,tes1Cap:0,tes2:0,tes3a:0});function ei(e){let t=(0,h.c)(76),{config:n,statuses:r,onSave:i,busy:a}=e,o;t[0]===n?o=t[1]:(o=()=>n?{referenceFormat:n.referenceFormat,authority:n.authority,eligibleStatuses:n.eligibleStatuses,rates:n.rates,ascBasisPoints:n.ascBasisPoints,ascAuthorized:n.ascAuthorized,priorBillingReviewed:n.priorBillingReviewed,priorTranches:n.priorTranches,priorBilledStudentIds:n.priorBilledStudentIds.join(`
`)}:{referenceFormat:``,authority:``,eligibleStatuses:[],rates:[$r()],ascBasisPoints:0,ascAuthorized:!1,priorBillingReviewed:!1,priorTranches:0,priorBilledStudentIds:``},t[0]=n,t[1]=o);let[s,c]=(0,m.useState)(o),l;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(l=(e,t)=>c(n=>({...n,[e]:t})),t[2]=l):l=t[2];let u=l,d=!n,f=n?`· configured`:`· setup required`,p;t[3]===f?p=t[4]:(p=(0,v.jsxs)(`summary`,{children:[`Verified billing rules & prior history `,f]}),t[3]=f,t[4]=p);let g;t[5]!==s||t[6]!==i?(g=e=>{e.preventDefault(),i({...s,priorBilledStudentIds:s.priorBilledStudentIds.split(/[\n,;]+/).map(ti).filter(Boolean)})},t[5]=s,t[6]=i,t[7]=g):g=t[7];let _;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,v.jsx)(`p`,{className:`billing-hint`,children:`Enter the school’s approved rules for this semester and school year. Sample workbook amounts are not rates. Existing grantee records are preserved.`}),t[8]=_):_=t[8];let b;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(b=e=>u(`authority`,e.target.value),t[9]=b):b=t[9];let x;t[10]===s.authority?x=t[11]:(x=(0,v.jsx)(Qr,{label:`Approved policy / authorization reference`,children:(0,v.jsx)(`input`,{required:!0,maxLength:500,value:s.authority,onChange:b,placeholder:`Document or approval authorizing these rules`})}),t[10]=s.authority,t[11]=x);let S;t[12]===Symbol.for(`react.memo_cache_sentinel`)?(S=e=>u(`referenceFormat`,e.target.value),t[12]=S):S=t[12];let C;t[13]===s.referenceFormat?C=t[14]:(C=(0,v.jsx)(`input`,{required:!0,maxLength:120,value:s.referenceFormat,onChange:S,placeholder:`Enter the school-approved format`}),t[13]=s.referenceFormat,t[14]=C);let w;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,v.jsxs)(`small`,{children:[`Optional tokens: `,`{YEAR}`,` (AY start), `,`{TERM}`,` (1/2), `,`{TRANCHE}`,` (1/2). No official format is assumed.`]}),t[15]=w):w=t[15];let T;t[16]===C?T=t[17]:(T=(0,v.jsxs)(Qr,{label:`Authorized reference format`,children:[C,w]}),t[16]=C,t[17]=T);let E=s.ascBasisPoints/100,D;t[18]===Symbol.for(`react.memo_cache_sentinel`)?(D=e=>u(`ascBasisPoints`,Math.round(Number(e.target.value)*100)),t[18]=D):D=t[18];let O;t[19]===E?O=t[20]:(O=(0,v.jsx)(Qr,{label:`Administrative support cost (%)`,children:(0,v.jsx)(`input`,{type:`number`,min:`0`,max:`100`,step:`0.01`,value:E,onChange:D})}),t[19]=E,t[20]=O);let k;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(k=e=>u(`ascAuthorized`,e.target.checked),t[21]=k):k=t[21];let A;t[22]===s.ascAuthorized?A=t[23]:(A=(0,v.jsxs)(`label`,{className:`billing-check`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:s.ascAuthorized,onChange:k}),`Administrative support is authorized for these benefits.`]}),t[22]=s.ascAuthorized,t[23]=A);let j;t[24]!==T||t[25]!==O||t[26]!==A||t[27]!==x?(j=(0,v.jsxs)(`div`,{className:`billing-form-grid`,children:[x,T,O,A]}),t[24]=T,t[25]=O,t[26]=A,t[27]=x,t[28]=j):j=t[28];let M;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,v.jsx)(`legend`,{children:`Eligible source statuses (explicit review is also required per student)`}),t[29]=M):M=t[29];let N;if(t[30]!==s.eligibleStatuses||t[31]!==r){let e;t[33]===s.eligibleStatuses?e=t[34]:(e=e=>(0,v.jsxs)(`label`,{className:`billing-check`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:s.eligibleStatuses.includes(e),onChange:t=>u(`eligibleStatuses`,t.target.checked?[...s.eligibleStatuses,e]:s.eligibleStatuses.filter(t=>t!==e))}),e]},e),t[33]=s.eligibleStatuses,t[34]=e),N=r.map(e),t[30]=s.eligibleStatuses,t[31]=r,t[32]=N}else N=t[32];let P;t[35]===N?P=t[36]:(P=(0,v.jsxs)(`fieldset`,{children:[M,(0,v.jsx)(`div`,{className:`billing-checks`,children:N})]}),t[35]=N,t[36]=P);let F;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(F=(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`TES category`}),(0,v.jsx)(`th`,{children:`TES-1 cap (PHP)`}),(0,v.jsx)(`th`,{children:`TES-2 stipend (PHP)`}),(0,v.jsx)(`th`,{children:`TES-3A (PHP)`}),(0,v.jsx)(`th`,{})]})}),t[37]=F):F=t[37];let I;t[38]===s.rates?I=t[39]:(I=s.rates.map((e,t)=>(0,v.jsxs)(`tr`,{children:[[`category`,`tes1Cap`,`tes2`,`tes3a`].map(n=>(0,v.jsx)(`td`,{children:(0,v.jsx)(`input`,{"aria-label":`${n} for category ${t+1}`,required:!0,type:n===`category`?`text`:`number`,min:n===`category`?void 0:0,step:n===`category`?void 0:`0.01`,value:e[n],onChange:e=>u(`rates`,s.rates.map((r,i)=>i===t?{...r,[n]:n===`category`?e.target.value:Number(e.target.value)}:r))})},n)),(0,v.jsx)(`td`,{children:(0,v.jsx)(`button`,{type:`button`,className:`billing-text-button`,disabled:s.rates.length===1,onClick:()=>u(`rates`,s.rates.filter((e,n)=>n!==t)),children:`Remove`})})]},t)),t[38]=s.rates,t[39]=I);let L;t[40]===I?L=t[41]:(L=(0,v.jsx)(`div`,{className:`billing-scroll`,children:(0,v.jsxs)(`table`,{className:`billing-rate-table`,children:[F,(0,v.jsx)(`tbody`,{children:I})]})}),t[40]=I,t[41]=L);let R;t[42]===s.rates?R=t[43]:(R=(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,onClick:()=>u(`rates`,[...s.rates,$r()]),children:`+ Add category`}),t[42]=s.rates,t[43]=R);let z;t[44]===Symbol.for(`react.memo_cache_sentinel`)?(z=(0,v.jsx)(`p`,{className:`billing-hint`,children:`TES-1 is the lower of verified actual fees and the approved category cap. TES-2 uses the approved stipend. TES-3A applies only after disability eligibility is verified. ASC applies to the combined benefit subtotal when authorized.`}),t[44]=z):z=t[44];let B;t[45]===Symbol.for(`react.memo_cache_sentinel`)?(B=e=>u(`priorBilledStudentIds`,e.target.value),t[45]=B):B=t[45];let V;t[46]===s.priorBilledStudentIds?V=t[47]:(V=(0,v.jsx)(Qr,{label:`Previously billed Student IDs for this period (one per line)`,children:(0,v.jsx)(`textarea`,{rows:3,value:s.priorBilledStudentIds,onChange:B,placeholder:`Include billings issued before this system was introduced`})}),t[46]=s.priorBilledStudentIds,t[47]=V);let H;t[48]===Symbol.for(`react.memo_cache_sentinel`)?(H=e=>u(`priorTranches`,Number(e.target.value)),t[48]=H):H=t[48];let U;t[49]===s.priorTranches?U=t[50]:(U=(0,v.jsx)(`input`,{type:`number`,required:!0,min:`0`,max:`2`,step:`1`,value:s.priorTranches,onChange:H}),t[49]=s.priorTranches,t[50]=U);let W;t[51]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,v.jsx)(`small`,{children:`Previously saved billed IDs and tranche counts cannot be reduced. New reports count toward the two-tranche limit.`}),t[51]=W):W=t[51];let G;t[52]===U?G=t[53]:(G=(0,v.jsxs)(Qr,{label:`Billing tranches issued before this system (0–2)`,children:[U,W]}),t[52]=U,t[53]=G);let K;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(K=e=>u(`priorBillingReviewed`,e.target.checked),t[54]=K):K=t[54];let q;t[55]===s.priorBillingReviewed?q=t[56]:(q=(0,v.jsxs)(`label`,{className:`billing-check`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:s.priorBillingReviewed,onChange:K}),`I checked the complete prior billing history for this period and entered previously billed students, if any.`]}),t[55]=s.priorBillingReviewed,t[56]=q);let J;t[57]===a?J=t[58]:(J=a?(0,v.jsx)(y,{variant:`inline`,message:`Saving verified billing information…`}):`Save verified period rules`,t[57]=a,t[58]=J);let Y;t[59]!==a||t[60]!==J?(Y=(0,v.jsx)(`button`,{className:`billing-primary`,disabled:a,type:`submit`,children:J}),t[59]=a,t[60]=J,t[61]=Y):Y=t[61];let X;t[62]!==j||t[63]!==P||t[64]!==L||t[65]!==R||t[66]!==V||t[67]!==G||t[68]!==q||t[69]!==Y||t[70]!==g?(X=(0,v.jsxs)(`form`,{onSubmit:g,children:[_,j,P,L,R,z,V,G,q,Y]}),t[62]=j,t[63]=P,t[64]=L,t[65]=R,t[66]=V,t[67]=G,t[68]=q,t[69]=Y,t[70]=g,t[71]=X):X=t[71];let ee;return t[72]!==d||t[73]!==X||t[74]!==p?(ee=(0,v.jsxs)(`details`,{className:`billing-rules`,open:d,children:[p,X]}),t[72]=d,t[73]=X,t[74]=p,t[75]=ee):ee=t[75],ee}function ti(e){return e.trim()}function ni(e){let t=(0,h.c)(80),{row:n,categories:r,onSave:i,onClose:a,busy:o,error:s}=e,c=(0,m.useRef)(null);Xr(c);let[l,u]=(0,m.useState)(n.profile),d;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(d=(e,t)=>u(n=>({...n,[e]:t})),t[0]=d):d=t[0];let f=d,p;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(p=[[`lastName`,`Last name`],[`firstName`,`Given name`],[`middleInitial`,`Middle initial (optional)`],[`campus`,`Campus`],[`college`,`College`],[`program`,`Degree program`],[`yearLevel`,`Year level`],[`birthDate`,`Birthdate`],[`units`,`Academic units`],[`zip`,`ZIP code`],[`email`,`Email`],[`phone`,`Phone`],[`actualFees`,`Verified tuition & other fees (PHP)`]],t[1]=p):p=t[1];let g=p,_;t[2]!==o||t[3]!==a?(_=e=>{e.preventDefault(),e.stopPropagation(),o||a()},t[2]=o,t[3]=a,t[4]=_):_=t[4];let b;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,v.jsx)(`p`,{className:`billing-kicker`,children:`Student billing review`}),t[5]=b):b=t[5];let x;t[6]===n.studentId?x=t[7]:(x=(0,v.jsxs)(`div`,{children:[b,(0,v.jsx)(`h2`,{id:`billing-review-title`,children:n.studentId})]}),t[6]=n.studentId,t[7]=x);let S;t[8]!==o||t[9]!==a?(S=(0,v.jsx)(`button`,{type:`button`,className:`billing-close`,"aria-label":`Close student billing review`,disabled:o,onClick:a,children:`×`}),t[8]=o,t[9]=a,t[10]=S):S=t[10];let C;t[11]!==x||t[12]!==S?(C=(0,v.jsxs)(`header`,{className:`billing-header`,children:[x,S]}),t[11]=x,t[12]=S,t[13]=C):C=t[13];let w;t[14]!==i||t[15]!==l?(w=e=>{e.preventDefault(),i(l)},t[14]=i,t[15]=l,t[16]=w):w=t[16];let T;t[17]===s?T=t[18]:(T=s&&(0,v.jsx)(`p`,{className:`billing-error`,role:`alert`,children:s}),t[17]=s,t[18]=T);let E;t[19]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,v.jsx)(`p`,{className:`billing-hint`,children:`Verify against enrollment and financial records. Available applicant details are suggested only for a unique Student ID and school-year match. Changes are saved only to the billing profile.`}),t[19]=E):E=t[19];let D=l.sourceRecordId,O;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(O=e=>f(`sourceRecordId`,e.target.value),t[20]=O):O=t[20];let k;t[21]===n.sourceChoices?k=t[22]:(k=n.sourceChoices.map(ii),t[21]=n.sourceChoices,t[22]=k);let A;t[23]!==l.sourceRecordId||t[24]!==k?(A=(0,v.jsx)(Qr,{label:`Authoritative grantee source`,children:(0,v.jsx)(`select`,{value:D,onChange:O,children:k})}),t[23]=l.sourceRecordId,t[24]=k,t[25]=A):A=t[25];let j=l.category,M,N;t[26]===Symbol.for(`react.memo_cache_sentinel`)?(M=e=>f(`category`,e.target.value),N=(0,v.jsx)(`option`,{value:``,children:`Select category`}),t[26]=M,t[27]=N):(M=t[26],N=t[27]);let P;t[28]===r?P=t[29]:(P=r.map(ri),t[28]=r,t[29]=P);let F;t[30]!==l.category||t[31]!==P?(F=(0,v.jsx)(Qr,{label:`TES benefit category`,children:(0,v.jsxs)(`select`,{value:j,onChange:M,children:[N,P]})}),t[30]=l.category,t[31]=P,t[32]=F):F=t[32];let I;t[33]===l?I=t[34]:(I=g.map(e=>{let[t,n]=e;return(0,v.jsx)(Qr,{label:n,children:(0,v.jsx)(`input`,{type:[`units`,`actualFees`].includes(t)?`number`:t===`birthDate`?`date`:t===`email`?`email`:`text`,step:[`units`,`actualFees`].includes(t)?`0.01`:void 0,min:[`units`,`actualFees`].includes(t)?0:void 0,maxLength:500,value:l[t],onChange:e=>f(t,[`units`,`actualFees`].includes(t)?Number(e.target.value):e.target.value)})},t)}),t[33]=l,t[34]=I);let L,R,z,B;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(L=e=>f(`sex`,e.target.value),R=(0,v.jsx)(`option`,{value:``,children:`Select`}),z=(0,v.jsx)(`option`,{children:`M`}),B=(0,v.jsx)(`option`,{children:`F`}),t[35]=L,t[36]=R,t[37]=z,t[38]=B):(L=t[35],R=t[36],z=t[37],B=t[38]);let V;t[39]===l.sex?V=t[40]:(V=(0,v.jsx)(Qr,{label:`Sex at birth`,children:(0,v.jsxs)(`select`,{value:l.sex,onChange:L,children:[R,z,B]})}),t[39]=l.sex,t[40]=V);let H;t[41]!==A||t[42]!==F||t[43]!==I||t[44]!==V?(H=(0,v.jsxs)(`div`,{className:`billing-form-grid`,children:[A,F,I,V]}),t[41]=A,t[42]=F,t[43]=I,t[44]=V,t[45]=H):H=t[45];let U;t[46]===Symbol.for(`react.memo_cache_sentinel`)?(U=e=>f(`disabilityVerified`,e.target.checked),t[46]=U):U=t[46];let W;t[47]===l.disabilityVerified?W=t[48]:(W=(0,v.jsxs)(`label`,{className:`billing-check`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:l.disabilityVerified,onChange:U}),`TES-3A disability entitlement verified against supporting records.`]}),t[47]=l.disabilityVerified,t[48]=W);let G;t[49]===Symbol.for(`react.memo_cache_sentinel`)?(G=e=>f(`eligible`,e.target.checked),t[49]=G):G=t[49];let K;t[50]===l.eligible?K=t[51]:(K=(0,v.jsxs)(`label`,{className:`billing-check`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:l.eligible,onChange:G}),`Enrollment, TES category and billing entitlement verified for this period.`]}),t[50]=l.eligible,t[51]=K);let q;t[52]===Symbol.for(`react.memo_cache_sentinel`)?(q=e=>f(`reviewNote`,e.target.value),t[52]=q):q=t[52];let J;t[53]===l.reviewNote?J=t[54]:(J=(0,v.jsx)(Qr,{label:`Verification evidence or exclusion reason`,children:(0,v.jsx)(`textarea`,{required:!0,maxLength:500,rows:3,value:l.reviewNote,onChange:q})}),t[53]=l.reviewNote,t[54]=J);let Y;t[55]!==H||t[56]!==W||t[57]!==K||t[58]!==J||t[59]!==T?(Y=(0,v.jsxs)(`div`,{className:`billing-body`,children:[T,E,H,W,K,J]}),t[55]=H,t[56]=W,t[57]=K,t[58]=J,t[59]=T,t[60]=Y):Y=t[60];let X;t[61]!==o||t[62]!==a?(X=(0,v.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:o,onClick:a,children:`Cancel`}),t[61]=o,t[62]=a,t[63]=X):X=t[63];let ee;t[64]===o?ee=t[65]:(ee=o?(0,v.jsx)(y,{variant:`inline`,message:`Saving verified billing information…`}):`Save billing review`,t[64]=o,t[65]=ee);let Z;t[66]!==o||t[67]!==ee?(Z=(0,v.jsx)(`button`,{className:`billing-primary`,disabled:o,type:`submit`,children:ee}),t[66]=o,t[67]=ee,t[68]=Z):Z=t[68];let Q;t[69]!==X||t[70]!==Z?(Q=(0,v.jsxs)(`footer`,{className:`billing-footer`,children:[X,Z]}),t[69]=X,t[70]=Z,t[71]=Q):Q=t[71];let te;t[72]!==Y||t[73]!==Q||t[74]!==w?(te=(0,v.jsxs)(`form`,{className:`billing-review-form`,onSubmit:w,children:[Y,Q]}),t[72]=Y,t[73]=Q,t[74]=w,t[75]=te):te=t[75];let ne;return t[76]!==_||t[77]!==te||t[78]!==C?(ne=(0,v.jsxs)(`dialog`,{ref:c,className:`billing-dialog billing-review-dialog`,"aria-labelledby":`billing-review-title`,onKeyDown:Zr,onCancel:_,children:[C,te]}),t[76]=_,t[77]=te,t[78]=C,t[79]=ne):ne=t[79],ne}function ri(e){return(0,v.jsx)(`option`,{children:e.category},e.category)}function ii(e){return(0,v.jsx)(`option`,{value:e.id,children:e.label},e.id)}function ai(e){let t=(0,h.c)(53),{onClose:n,onDownload:r,busy:i,finalized:a,error:o,operation:s,onRetry:c}=e,l=(0,m.useRef)(null);Xr(l);let[u,d]=(0,m.useState)(`xlsx`),f;t[0]!==i||t[1]!==n?(f=e=>{e.preventDefault(),e.stopPropagation(),i||n()},t[0]=i,t[1]=n,t[2]=f):f=t[2];let p;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`billing-kicker`,children:`Export billing forms`}),(0,v.jsx)(`h2`,{id:`billing-format-title`,children:`Choose Download Format`})]}),t[3]=p):p=t[3];let g;t[4]!==i||t[5]!==n?(g=(0,v.jsxs)(`header`,{className:`billing-header`,children:[p,(0,v.jsx)(`button`,{className:`billing-close`,type:`button`,"aria-label":`Close download formats`,disabled:i,onClick:n,children:`×`})]}),t[4]=i,t[5]=n,t[6]=g):g=t[6];let _;t[7]!==c||t[8]!==s?(_=s&&(0,v.jsx)(y,{variant:`compact`,...s,onRetry:c}),t[7]=c,t[8]=s,t[9]=_):_=t[9];let b;t[10]===o?b=t[11]:(b=o&&(0,v.jsx)(`p`,{className:`billing-error`,role:`alert`,children:o}),t[10]=o,t[11]=b);let x=u===`xlsx`,S;t[12]===Symbol.for(`react.memo_cache_sentinel`)?(S=()=>d(`xlsx`),t[12]=S):S=t[12];let C;t[13]===x?C=t[14]:(C=(0,v.jsx)(`input`,{type:`radio`,name:`billing-format`,checked:x,onChange:S}),t[13]=x,t[14]=C);let w;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:`Excel Report`}),(0,v.jsx)(`p`,{children:`Both original worksheets, editable details, formatting and formulas.`})]}),t[15]=w):w=t[15];let T;t[16]===C?T=t[17]:(T=(0,v.jsxs)(`label`,{className:`billing-format-option`,children:[C,w]}),t[16]=C,t[17]=T);let E=u===`pdf`,D;t[18]===Symbol.for(`react.memo_cache_sentinel`)?(D=()=>d(`pdf`),t[18]=D):D=t[18];let O;t[19]===E?O=t[20]:(O=(0,v.jsx)(`input`,{type:`radio`,name:`billing-format`,checked:E,onChange:D}),t[19]=E,t[20]=O);let k;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:`PDF Report`}),(0,v.jsx)(`p`,{children:`Printable statement and complete billing details with page breaks.`})]}),t[21]=k):k=t[21];let A;t[22]===O?A=t[23]:(A=(0,v.jsxs)(`label`,{className:`billing-format-option`,children:[O,k]}),t[22]=O,t[23]=A);let j=a?`This downloads the saved report again. No additional billing entries are created.`:`Downloading finalizes this report and reserves its eligible students in the billing ledger. Review all amounts before proceeding.`,M;t[24]===j?M=t[25]:(M=(0,v.jsx)(`p`,{className:`billing-notice`,children:j}),t[24]=j,t[25]=M);let N;t[26]!==T||t[27]!==A||t[28]!==M||t[29]!==_||t[30]!==b?(N=(0,v.jsxs)(`div`,{className:`billing-body`,children:[_,b,T,A,M]}),t[26]=T,t[27]=A,t[28]=M,t[29]=_,t[30]=b,t[31]=N):N=t[31];let P;t[32]!==i||t[33]!==n?(P=(0,v.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:i,onClick:n,children:`Cancel`}),t[32]=i,t[33]=n,t[34]=P):P=t[34];let F;t[35]!==u||t[36]!==r?(F=()=>r(u),t[35]=u,t[36]=r,t[37]=F):F=t[37];let I;t[38]!==i||t[39]!==u?(I=i?(0,v.jsx)(y,{variant:`inline`,message:`Preparing your file…`}):`Download ${u===`xlsx`?`Excel`:`PDF`}`,t[38]=i,t[39]=u,t[40]=I):I=t[40];let L;t[41]!==i||t[42]!==F||t[43]!==I?(L=(0,v.jsx)(`button`,{className:`billing-primary`,disabled:i,type:`button`,onClick:F,children:I}),t[41]=i,t[42]=F,t[43]=I,t[44]=L):L=t[44];let R;t[45]!==P||t[46]!==L?(R=(0,v.jsxs)(`footer`,{className:`billing-footer`,children:[P,L]}),t[45]=P,t[46]=L,t[47]=R):R=t[47];let z;return t[48]!==f||t[49]!==N||t[50]!==R||t[51]!==g?(z=(0,v.jsxs)(`dialog`,{ref:l,className:`billing-dialog billing-format-dialog`,"aria-labelledby":`billing-format-title`,onKeyDown:Zr,onCancel:f,children:[g,N,R]}),t[48]=f,t[49]=N,t[50]=R,t[51]=g,t[52]=z):z=t[52],z}function oi({sessionToken:e,onClose:t}){let n=(0,m.useRef)(null);Xr(n);let r=Mr($.billing.options,{sessionToken:e}),[i,a]=(0,m.useState)(``),[o,s]=(0,m.useState)(`1st Semester`),[c,l]=(0,m.useState)(`all`),[u,d]=(0,m.useState)([]),[f,p]=(0,m.useState)(``),[h,g]=(0,m.useState)(Yr),[_,b]=(0,m.useState)(``),[x,S]=(0,m.useState)(null),[C,w]=(0,m.useState)(``),[T,E]=(0,m.useState)(1),[D,O]=(0,m.useState)(null),[k,A]=(0,m.useState)(!1),[j,M]=(0,m.useState)(null),[N,P]=(0,m.useState)(null),[F,I]=(0,m.useState)(!1),{operation:L,run:R,retry:z}=Or(),B=F||L?.state===`loading`,[V,H]=(0,m.useState)(``),[U,W]=(0,m.useState)(``),K=Mr($.billing.workspace,i?{sessionToken:e,schoolYear:i,semester:o}:`skip`),q=Pr($.billing.saveConfig),J=Pr($.billing.saveProfile),Y=Pr($.billing.preview),X=Pr($.billing.finalize),ee=Pr($.billing.download),Z={schoolYear:i,semester:o,batches:c===`all`?[]:u},Q=()=>{S(null),M(null),W(``),H(``)},te=async e=>{I(!0),W(``);try{await e()}catch(e){W(G(e,`Billing operation failed. Please try again.`,`admin.BillingManagement`))}finally{I(!1)}},ne=()=>te(async()=>{if(!i)throw Error(`Select a school year.`);if(c===`specific`&&!u.length)throw Error(`Select at least one batch.`);let t=await Y({sessionToken:e,...Z});S(t),E(1),w(``),M(null),t.config&&b(t.config.referenceFormat.replaceAll(`{YEAR}`,i.slice(0,4)).replaceAll(`{TERM}`,o===`1st Semester`?`1`:`2`).replaceAll(`{TRANCHE}`,String(t.nextTranche)))}),re=t=>{let n=N||j;return te(()=>R(t===`pdf`?`Generating PDF report…`:`Generating Excel report…`,async r=>{W(``),r({message:`Preparing billing template…`,progress:void 0});let i=await qr(()=>import(`./billingExport-Dcl5xeHF.js`),[]),a=await i.loadBillingTemplate();if(r({message:`Validating billing records…`}),!n){if(!x)throw Error(`Generate a billing preview first.`);n=await X({sessionToken:e,...Z,reference:_,billingDate:h,expectedVersion:x.version}),M(n)}let o=await ee({sessionToken:e,reportId:n,format:t});r({message:t===`pdf`?`Generating PDF report…`:`Generating Excel report…`}),await i.downloadBilling(o,t,a,r),A(!1),P(null),H(`Your file is ready! Saved in billing history for future downloads.`)}))},ie=(x?.rows||[]).filter(e=>`${e.studentId} ${e.tesAwardNumber} ${e.profile.lastName} ${e.profile.firstName} ${e.batch}`.toLowerCase().includes(C.toLowerCase())),ae=Math.max(1,Math.ceil(ie.length/10));return(0,v.jsxs)(`dialog`,{ref:n,className:`billing-dialog billing-main-dialog`,"aria-labelledby":`billing-management-title`,onKeyDown:Zr,onCancel:e=>{e.target===e.currentTarget&&(e.preventDefault(),B||t())},children:[(0,v.jsxs)(`header`,{className:`billing-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`billing-kicker`,children:`Scholarship operations`}),(0,v.jsx)(`h2`,{id:`billing-management-title`,children:`TES Billing Management`}),(0,v.jsx)(`p`,{children:`Generate consolidated TES billing statements and reports.`})]}),(0,v.jsx)(`button`,{className:`billing-close`,type:`button`,"aria-label":`Close Billing Management`,disabled:B,onClick:t,children:`×`})]}),(0,v.jsxs)(`div`,{className:`billing-body`,children:[U&&(0,v.jsx)(`p`,{className:`billing-error`,role:`alert`,children:U}),V&&(0,v.jsx)(`p`,{className:`billing-notice`,role:`status`,children:V}),(0,v.jsxs)(`section`,{className:`billing-card`,"aria-label":`Billing filters`,children:[(0,v.jsxs)(`div`,{className:`billing-filters`,children:[(0,v.jsx)(Qr,{label:`School year`,children:(0,v.jsxs)(`select`,{value:i,disabled:B,onChange:e=>{a(e.target.value),d([]),Q()},children:[(0,v.jsx)(`option`,{value:``,children:`Select school year`}),r?.years.map(e=>(0,v.jsx)(`option`,{children:e},e))]})}),(0,v.jsx)(Qr,{label:`Semester`,children:(0,v.jsxs)(`select`,{value:o,disabled:B,onChange:e=>{s(e.target.value),d([]),Q()},children:[(0,v.jsx)(`option`,{children:`1st Semester`}),(0,v.jsx)(`option`,{children:`2nd Semester`})]})}),(0,v.jsx)(Qr,{label:`Select Batch`,children:(0,v.jsxs)(`select`,{value:c,disabled:B,onChange:e=>{l(e.target.value),Q()},children:[(0,v.jsx)(`option`,{value:`all`,children:`All Batches`}),(0,v.jsx)(`option`,{value:`specific`,children:`Specific Batches`})]})}),(0,v.jsx)(Qr,{label:`Billing date`,children:(0,v.jsx)(`input`,{type:`date`,required:!0,value:h,disabled:B||!!j,onChange:e=>g(e.target.value)})}),(0,v.jsx)(Qr,{label:`Billing reference number`,children:(0,v.jsx)(`input`,{maxLength:120,value:_,disabled:B||!!j,onChange:e=>b(e.target.value),placeholder:`From approved period rules`})})]}),c===`specific`&&(0,v.jsxs)(`div`,{className:`billing-batches`,children:[(0,v.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,v.jsx)(`input`,{"aria-label":`Search batches`,placeholder:`Search batch…`,value:f,onChange:e=>p(e.target.value)}),(0,v.jsx)(`button`,{className:`billing-text-button`,type:`button`,disabled:B,onClick:()=>{d(K?.batches.map(e=>e.id)||[]),Q()},children:`Select All`}),(0,v.jsx)(`button`,{className:`billing-text-button`,type:`button`,disabled:B,onClick:()=>{d([]),Q()},children:`Deselect All`}),(0,v.jsxs)(`span`,{children:[u.length,` batches selected`]})]}),(0,v.jsx)(`div`,{className:`billing-checks`,children:K?.batches.filter(e=>e.id.toLowerCase().includes(f.toLowerCase())).map(e=>(0,v.jsxs)(`label`,{className:`billing-check`,children:[(0,v.jsx)(`input`,{type:`checkbox`,disabled:B,checked:u.includes(e.id),onChange:t=>{d(t.target.checked?[...u,e.id]:u.filter(t=>t!==e.id)),Q()}}),`Batch `,e.id,` `,(0,v.jsxs)(`small`,{children:[e.count,` grantees`]})]},e.id))})]}),(0,v.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,v.jsx)(`p`,{className:`billing-hint`,children:`Counts use unique Student IDs within the selected period. Missing data stays visible for review.`}),(0,v.jsx)(`button`,{type:`button`,className:`billing-primary`,disabled:B||!K,onClick:ne,children:B?(0,v.jsx)(y,{variant:`inline`,message:`Preparing billing records…`}):`Generate Billing Preview`})]})]}),i&&!K&&(0,v.jsx)(y,{variant:`compact`,message:`Preparing billing records…`}),K&&(0,v.jsx)(ei,{config:K.config,statuses:r?.statuses||[],busy:B,onSave:t=>te(async()=>{await q({sessionToken:e,schoolYear:i,semester:o,...t}),Q(),H(`Verified period rules saved. Generate a new preview.`)})},`${i}-${o}-${K.config?.updatedAt||0}`),x&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`billing-summary`,children:[[`Total Selected Records`,x.selectedCount],[`Eligible Grantees`,x.eligibleCount],[`Records Needing Review`,x.reviewCount],[`TES Benefit Subtotal`,Jr(x.totals.benefits)],[`Administrative Support Cost`,Jr(x.totals.asc)],[`Total Billing Amount`,Jr(x.totals.total)]].map(([e,t])=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{children:e}),(0,v.jsx)(`strong`,{children:t})]},e))}),(0,v.jsxs)(`p`,{className:`billing-hint`,children:[x.duplicateCount,` duplicate source rows counted once. `,x.excludedCount,` students explicitly excluded or already billed. Preview totals include eligible records only.`]}),x.globalIssues.length>0&&(0,v.jsxs)(`div`,{className:`billing-error`,children:[(0,v.jsx)(`strong`,{children:`Resolve before export`}),(0,v.jsx)(`ul`,{children:x.globalIssues.map(e=>(0,v.jsx)(`li`,{children:e},e))})]}),(0,v.jsxs)(`section`,{className:`billing-card`,children:[(0,v.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,v.jsx)(`h3`,{children:`Billing details`}),(0,v.jsx)(`input`,{"aria-label":`Search billing records`,placeholder:`Student ID, name, award or batch…`,value:C,onChange:e=>{w(e.target.value),E(1)}})]}),(0,v.jsx)(`div`,{className:`billing-scroll`,children:(0,v.jsxs)(`table`,{className:`billing-preview-table`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsx)(`tr`,{children:[`Student ID`,`TES Award Number`,`Full Name`,`Batch`,`Semester`,`School Year`,`TES Category`,`Billing Amount`,`Billing Eligibility`,`Review`].map(e=>(0,v.jsx)(`th`,{children:e},e))})}),(0,v.jsx)(`tbody`,{children:ie.slice((T-1)*10,T*10).map(e=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:e.studentId}),(0,v.jsx)(`td`,{children:e.tesAwardNumber||`Missing`}),(0,v.jsx)(`td`,{children:[e.profile.lastName,e.profile.firstName,e.profile.middleInitial].filter(Boolean).join(`, `)||`Missing`}),(0,v.jsx)(`td`,{children:e.batch}),(0,v.jsx)(`td`,{children:e.semester}),(0,v.jsx)(`td`,{children:e.schoolYear}),(0,v.jsx)(`td`,{children:e.profile.category||`Unassigned`}),(0,v.jsx)(`td`,{children:e.eligible?Jr(e.total):`Pending review`}),(0,v.jsxs)(`td`,{children:[(0,v.jsx)(`span`,{className:`billing-status ${e.eligible?`is-eligible`:``}`,children:e.eligible?`Eligible`:e.excluded?`Excluded`:`Needs review`}),e.issues.length>0&&(0,v.jsxs)(`details`,{children:[(0,v.jsxs)(`summary`,{children:[e.issues.length,` issue(s)`]}),(0,v.jsx)(`ul`,{children:e.issues.map(e=>(0,v.jsx)(`li`,{children:e},e))})]})]}),(0,v.jsx)(`td`,{children:(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:B||!!j,onClick:()=>O(e),children:`Review`})})]},e.studentId))})]})}),(0,v.jsxs)(`div`,{className:`billing-pagination`,children:[(0,v.jsxs)(`span`,{children:[ie.length,` students · Page `,T,` of `,ae]}),(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:T===1,onClick:()=>E(e=>e-1),children:`Previous`}),(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:T>=ae,onClick:()=>E(e=>e+1),children:`Next`})]})]})]}),K?.reports.length>0&&(0,v.jsxs)(`section`,{className:`billing-card`,children:[(0,v.jsx)(`h3`,{children:`Finalized billing history`}),(0,v.jsx)(`p`,{className:`billing-hint`,children:`These immutable reports can be downloaded again without billing students twice.`}),K.reports.map(e=>(0,v.jsxs)(`div`,{className:`billing-history-row`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:e.reference}),(0,v.jsxs)(`span`,{children:[e.billingDate,` · `,e.granteeCount,` grantees · `,Jr(e.totals.total)]})]}),(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:B,onClick:()=>{P(e._id),A(!0)},children:`Download saved report`})]},e._id))]}),!r&&(0,v.jsx)(y,{message:`Preparing billing records…`})]}),L&&(0,v.jsx)(y,{variant:`compact`,...L,onRetry:z}),(0,v.jsxs)(`footer`,{className:`billing-footer`,children:[(0,v.jsx)(`span`,{className:`billing-hint`,children:`Original grantee records remain unchanged.`}),(0,v.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:B,onClick:t,children:`Close`}),(0,v.jsx)(`button`,{className:`billing-primary`,type:`button`,disabled:B||!x||!j&&x.globalIssues.length>0||!h||!_.trim(),onClick:()=>A(!0),children:`Download Billing Report`})]}),D&&(0,v.jsx)(ni,{error:U,row:D,categories:K?.config?.rates||[],busy:B,onClose:()=>O(null),onSave:t=>te(async()=>{await J({sessionToken:e,schoolYear:i,semester:o,studentId:D.studentId,...t}),S(await Y({sessionToken:e,...Z})),M(null),O(null),H(`Billing review saved.`)})},D.studentId),k&&(0,v.jsx)(ai,{operation:L,onRetry:z,error:U,busy:B,finalized:!!(j||N),onClose:()=>{A(!1),P(null)},onDownload:re})]})}var si=e=>new Intl.NumberFormat(`en-PH`,{style:`currency`,currency:`PHP`}).format(e/100);function ci(e){let t=(0,h.c)(44),{mapping:n,configured:r,busy:i,onSave:a}=e,[o,s]=(0,m.useState)(n?.applicationNumberVerified||!1),[c,l]=(0,m.useState)(n?.batchColumnMode||``),[u,d]=(0,m.useState)(n?.designation||``),[f,p]=(0,m.useState)(n?.authority||``),g=!n,_=n?`· verified`:`· confirmation required`,y;t[0]===_?y=t[1]:(y=(0,v.jsxs)(`summary`,{children:[`Official field mappings `,_]}),t[0]=_,t[1]=y);let b;t[2]!==f||t[3]!==u||t[4]!==c||t[5]!==a||t[6]!==o?(b=e=>{e.preventDefault(),a({applicationNumberVerified:o,batchColumnMode:c,designation:u,authority:f})},t[2]=f,t[3]=u,t[4]=c,t[5]=a,t[6]=o,t[7]=b):b=t[7];let x;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,v.jsx)(`p`,{className:`billing-hint`,children:`The workbook calls column D “TES Application Number” and its sample column N contains “LISTAHANAN 2”. Confirm the school’s official meanings before export.`}),t[8]=x):x=t[8];let S;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(S=e=>s(e.target.checked),t[9]=S):S=t[9];let C;t[10]===o?C=t[11]:(C=(0,v.jsxs)(`label`,{className:`billing-check`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:o,onChange:S}),`I verified that Convex tesAwardNumber contains the official TES Application Number required in column D.`]}),t[10]=o,t[11]=C);let w;t[12]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,v.jsx)(`span`,{children:`Column N — TES Batch`}),t[12]=w):w=t[12];let T,E,D,O;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(O=e=>l(e.target.value),T=(0,v.jsx)(`option`,{value:``,children:`Confirm the official mapping`}),E=(0,v.jsx)(`option`,{value:`databaseBatch`,children:`Use actual database batch numbers`}),D=(0,v.jsx)(`option`,{value:`designation`,children:`Use an authorized designation`}),t[13]=T,t[14]=E,t[15]=D,t[16]=O):(T=t[13],E=t[14],D=t[15],O=t[16]);let k;t[17]===c?k=t[18]:(k=(0,v.jsxs)(`label`,{className:`billing-field`,children:[w,(0,v.jsxs)(`select`,{"aria-label":`Column N — TES Batch`,required:!0,value:c,onChange:O,children:[T,E,D]})]}),t[17]=c,t[18]=k);let A;t[19]!==u||t[20]!==c?(A=c===`designation`&&(0,v.jsxs)(`label`,{className:`billing-field`,children:[(0,v.jsx)(`span`,{children:`Authorized designation`}),(0,v.jsx)(`input`,{"aria-label":`Authorized designation`,required:!0,maxLength:80,value:u,onChange:e=>d(e.target.value),placeholder:`Enter the approved designation`})]}),t[19]=u,t[20]=c,t[21]=A):A=t[21];let j;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,v.jsx)(`span`,{children:`Mapping approval / documentary reference`}),t[22]=j):j=t[22];let M;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(M=e=>p(e.target.value),t[23]=M):M=t[23];let N;t[24]===f?N=t[25]:(N=(0,v.jsxs)(`label`,{className:`billing-field`,children:[j,(0,v.jsx)(`input`,{"aria-label":`Mapping approval / documentary reference`,required:!0,maxLength:500,value:f,onChange:M})]}),t[24]=f,t[25]=N);let P;t[26]!==k||t[27]!==A||t[28]!==N?(P=(0,v.jsxs)(`div`,{className:`billing-form-grid`,children:[k,A,N]}),t[26]=k,t[27]=A,t[28]=N,t[29]=P):P=t[29];let F;t[30]===r?F=t[31]:(F=!r&&(0,v.jsx)(`p`,{className:`billing-notice`,children:`Configure the verified semester rates and eligibility rules in Billing Management first.`}),t[30]=r,t[31]=F);let I=i||!r||!o||!c,L;t[32]===I?L=t[33]:(L=(0,v.jsx)(`button`,{type:`submit`,className:`billing-primary`,disabled:I,children:`Save verified mappings`}),t[32]=I,t[33]=L);let R;t[34]!==P||t[35]!==F||t[36]!==L||t[37]!==b||t[38]!==C?(R=(0,v.jsxs)(`form`,{onSubmit:b,children:[x,C,P,F,L]}),t[34]=P,t[35]=F,t[36]=L,t[37]=b,t[38]=C,t[39]=R):R=t[39];let z;return t[40]!==g||t[41]!==R||t[42]!==y?(z=(0,v.jsxs)(`details`,{className:`billing-rules`,open:g,children:[y,R]}),t[40]=g,t[41]=R,t[42]=y,t[43]=z):z=t[43],z}function li(e){let t=(0,h.c)(20),{row:n,busy:r,onSave:i}=e,[a,o]=(0,m.useState)(n.continuingVerified),[s,c]=(0,m.useState)(n.continuingEvidence),l;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,v.jsx)(`summary`,{children:`Review continuing eligibility`}),t[0]=l):l=t[0];let u;t[1]!==s||t[2]!==i||t[3]!==a?(u=e=>{e.preventDefault(),i(a,s)},t[1]=s,t[2]=i,t[3]=a,t[4]=u):u=t[4];let d;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(d=e=>o(e.target.checked),t[5]=d):d=t[5];let f;t[6]===a?f=t[7]:(f=(0,v.jsxs)(`label`,{className:`billing-check`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:a,onChange:d}),`Verified continuing TES grantee for this period`]}),t[6]=a,t[7]=f);let p;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,v.jsx)(`span`,{children:`Evidence / review reason`}),t[8]=p):p=t[8];let g=`Continuing evidence for ${n.studentId}`,_;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(_=e=>c(e.target.value),t[9]=_):_=t[9];let y;t[10]!==s||t[11]!==g?(y=(0,v.jsxs)(`label`,{className:`billing-field`,children:[p,(0,v.jsx)(`textarea`,{"aria-label":g,required:!0,maxLength:500,rows:3,value:s,onChange:_})]}),t[10]=s,t[11]=g,t[12]=y):y=t[12];let b;t[13]===r?b=t[14]:(b=(0,v.jsx)(`button`,{type:`submit`,disabled:r,className:`billing-secondary`,children:`Save continuing review`}),t[13]=r,t[14]=b);let x;return t[15]!==u||t[16]!==f||t[17]!==y||t[18]!==b?(x=(0,v.jsxs)(`details`,{className:`form2-review`,children:[l,(0,v.jsxs)(`form`,{onSubmit:u,children:[f,y,b]})]}),t[15]=u,t[16]=f,t[17]=y,t[18]=b,t[19]=x):x=t[19],x}function ui({sessionToken:e,onClose:t,onOpenBilling:n}){let r=(0,m.useRef)(null);(0,m.useEffect)(()=>{let e=r.current,t=document.activeElement,n=document.body.style.overflow;return e.showModal(),document.body.style.overflow=`hidden`,()=>{e.close(),document.body.style.overflow=n,t?.isConnected&&t.focus({preventScroll:!0})}},[]);let i=Mr($.billing.options,{sessionToken:e}),[a,o]=(0,m.useState)(``),[s,c]=(0,m.useState)(`1st Semester`),[l,u]=(0,m.useState)(`all`),[d,f]=(0,m.useState)([]),[p,h]=(0,m.useState)(``),[g,_]=(0,m.useState)(``),[b,x]=(0,m.useState)(``),[S,C]=(0,m.useState)(1),[w,T]=(0,m.useState)(0),[E,D]=(0,m.useState)(null),[O,k]=(0,m.useState)(!1),[A,j]=(0,m.useState)(``),[M,N]=(0,m.useState)(``),{operation:P,run:F,retry:I}=Or(),L=O||P?.state===`loading`,[R,z]=(0,m.useState)(``),[B,V]=(0,m.useState)(()=>new Date().toLocaleDateString(`en-CA`,{timeZone:`Asia/Manila`})),[H,U]=(0,m.useState)(null),W=Mr($.billing.workspace,a?{sessionToken:e,schoolYear:a,semester:s}:`skip`),K=Mr($.form2.settings,a?{sessionToken:e,schoolYear:a,semester:s}:`skip`),q=Pr($.form2.preview),J=Pr($.form2.saveMapping),Y=Pr($.form2.reviewContinuing),X=Pr($.form2.generate),ee=Pr($.form2.download),Z=JSON.stringify({year:a,semester:s,mode:l,batches:d,sourceId:g,refresh:w,mapping:K?.mapping||null});(0,m.useEffect)(()=>{let t=!0,n=JSON.parse(Z);if(n.year)return(n.mode===`specific`&&!n.batches.length?Promise.reject(Error(`Select at least one batch.`)):q({sessionToken:e,schoolYear:n.year,semester:n.semester,batches:n.mode===`all`?[]:n.batches,...n.sourceId?{billingReportId:n.sourceId}:{}})).then(e=>{t&&(D({key:Z,data:e}),C(1),U(null),e.reference?z(e.reference):e.config&&z(e.config.referenceFormat.replaceAll(`{YEAR}`,n.year.slice(0,4)).replaceAll(`{TERM}`,n.semester===`1st Semester`?`1`:`2`).replaceAll(`{TRANCHE}`,String(e.nextTranche))))}).catch(e=>{t&&D({key:Z,error:G(e,`Unable to complete this request.`,`admin.Form2Management`)})}),()=>{t=!1}},[Z,q,e]);let Q=E?.key===Z?E.data:null,te=!!(a&&E?.key!==Z),ne={schoolYear:a,semester:s,batches:l===`all`?[]:d,...g?{billingReportId:g}:{}},re=()=>{C(1),U(null),j(``),N(``),x(``)},ie=async e=>{k(!0),j(``);try{await e()}catch(e){j(G(e,`Form 2 operation failed. Please try again.`,`admin.Form2Management`))}finally{k(!1)}},ae=(t,n)=>{let r=n||H;return ie(()=>F(t===`pdf`?`Generating PDF report…`:`Generating Excel report…`,async n=>{j(``),n({message:`Preparing official Form 2 template…`,progress:void 0});let i=await qr(()=>import(`./form2Export-CL6Oxchl.js`),__vite__mapDeps([0,1])),a=await i.loadForm2Template();if(n({message:`Generating official Form 2…`}),!r){if(!Q)throw Error(`Generate and review Form 2 first.`);r=await X({sessionToken:e,...ne,expectedVersion:Q.version,reference:R,billingDate:B}),U(r)}let o=await ee({sessionToken:e,reportId:r,format:t});n({message:t===`pdf`?`Generating PDF report…`:`Generating Excel report…`}),await i.downloadForm2(o,t,a,n),N(`Your file is ready! Re-download from history without creating another bill.`)}))},oe=(Q?.rows||[]).map((e,t)=>({...e,number:t+1})).filter(e=>`${e.studentId} ${e.tesAwardNumber} ${e.profile.lastName} ${e.profile.firstName} ${e.profile.program} ${e.batch}`.toLowerCase().includes(b.toLowerCase())),se=Math.max(1,Math.ceil(oe.length/10)),ce=Array.from({length:se},(e,t)=>t+1).filter(e=>e===1||e===se||Math.abs(e-S)<=2),le=L||te||!Q||!H&&Q.globalIssues.length>0||!g&&(!R.trim()||!B);return(0,v.jsxs)(`dialog`,{ref:r,className:`billing-dialog billing-main-dialog form2-main-dialog`,"aria-labelledby":`form2-title`,onCancel:e=>{e.preventDefault(),L||t()},onKeyDown:e=>{if(e.key!==`Tab`)return;let t=[...e.currentTarget.querySelectorAll(`button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),summary`)].filter(e=>e.getClientRects().length);e.shiftKey&&document.activeElement===t[0]?(e.preventDefault(),t.at(-1)?.focus()):!e.shiftKey&&document.activeElement===t.at(-1)&&(e.preventDefault(),t[0]?.focus())},children:[(0,v.jsxs)(`header`,{className:`billing-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`billing-kicker`,children:`Scholarship operations · Listahanan 2`}),(0,v.jsx)(`h2`,{id:`form2-title`,children:`Form 2 List — TES Continuing Grantees`}),(0,v.jsx)(`p`,{children:`Generate official TES Continuing Form 2 records from the Convex database.`})]}),(0,v.jsx)(`button`,{type:`button`,className:`billing-close`,"aria-label":`Close Form 2 List`,disabled:L,onClick:t,children:`×`})]}),(0,v.jsxs)(`div`,{className:`billing-body`,children:[!i&&(0,v.jsx)(y,{message:`Preparing Form 2 options…`}),a&&!W&&(0,v.jsx)(y,{variant:`compact`,message:`Preparing billing records…`}),P&&(0,v.jsx)(y,{variant:`compact`,...P,onRetry:I}),A&&(0,v.jsx)(`p`,{role:`alert`,className:`billing-error`,children:A}),M&&(0,v.jsx)(`p`,{role:`status`,className:`billing-notice`,children:M}),(0,v.jsxs)(`section`,{className:`billing-card`,children:[(0,v.jsxs)(`div`,{className:`billing-filters form2-filters`,children:[(0,v.jsxs)(`label`,{className:`billing-field`,children:[(0,v.jsx)(`span`,{children:`Select School Year`}),(0,v.jsxs)(`select`,{"aria-label":`Select School Year`,value:a,disabled:L,onChange:e=>{o(e.target.value),f([]),_(``),re()},children:[(0,v.jsx)(`option`,{value:``,children:`Select school year`}),i?.years.map(e=>(0,v.jsx)(`option`,{children:e},e))]})]}),(0,v.jsxs)(`label`,{className:`billing-field`,children:[(0,v.jsx)(`span`,{children:`Select Semester`}),(0,v.jsxs)(`select`,{"aria-label":`Select Semester`,value:s,disabled:L,onChange:e=>{c(e.target.value),f([]),_(``),re()},children:[(0,v.jsx)(`option`,{children:`1st Semester`}),(0,v.jsx)(`option`,{children:`2nd Semester`})]})]}),(0,v.jsxs)(`label`,{className:`billing-field`,children:[(0,v.jsx)(`span`,{children:`Report source`}),(0,v.jsxs)(`select`,{"aria-label":`Report source`,value:g,disabled:L,onChange:e=>{_(e.target.value),u(`all`),f([]),re()},children:[(0,v.jsx)(`option`,{value:``,children:`Current Convex grantee records`}),W?.reports.map(e=>(0,v.jsxs)(`option`,{value:e._id,children:[`Saved bill: `,e.reference]},e._id))]})]}),(0,v.jsxs)(`label`,{className:`billing-field`,children:[(0,v.jsx)(`span`,{children:`Select Batches`}),(0,v.jsxs)(`select`,{"aria-label":`Select Batches`,value:l,disabled:L||!!g,onChange:e=>{u(e.target.value),re()},children:[(0,v.jsx)(`option`,{value:`all`,children:`All Batches`}),(0,v.jsx)(`option`,{value:`specific`,children:`Specific Batches`})]})]})]}),l===`specific`&&(0,v.jsxs)(`div`,{className:`billing-batches`,children:[(0,v.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,v.jsx)(`input`,{"aria-label":`Search Form 2 batches`,placeholder:`Search batch…`,value:p,onChange:e=>h(e.target.value)}),(0,v.jsx)(`button`,{type:`button`,className:`billing-text-button`,disabled:L,onClick:()=>{f(W?.batches.map(e=>e.id)||[]),re()},children:`Select All`}),(0,v.jsx)(`button`,{type:`button`,className:`billing-text-button`,disabled:L,onClick:()=>{f([]),re()},children:`Deselect All`}),(0,v.jsxs)(`span`,{children:[d.length,` selected`]})]}),(0,v.jsx)(`div`,{className:`billing-checks`,children:W?.batches.filter(e=>e.id.toLowerCase().includes(p.toLowerCase())).map(e=>(0,v.jsxs)(`label`,{className:`billing-check`,children:[(0,v.jsx)(`input`,{type:`checkbox`,disabled:L,checked:d.includes(e.id),onChange:t=>{f(t.target.checked?[...d,e.id]:d.filter(t=>t!==e.id)),re()}}),`Batch `,e.id,` `,(0,v.jsxs)(`small`,{children:[e.count,` grantees`]})]},e.id))})]}),(0,v.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,v.jsx)(`p`,{className:`billing-hint`,children:`Filter changes refresh the preview automatically. Saved bills are exported in full to reconcile with their original statement.`}),(0,v.jsx)(`button`,{className:`billing-primary`,type:`button`,disabled:!a||L||te,onClick:()=>{re(),T(e=>e+1)},children:`Generate Form 2`})]}),!g&&(0,v.jsxs)(`div`,{className:`billing-form-grid form2-reference`,children:[(0,v.jsxs)(`label`,{className:`billing-field`,children:[(0,v.jsx)(`span`,{children:`Authorized billing reference`}),(0,v.jsx)(`input`,{"aria-label":`Authorized billing reference`,maxLength:120,value:R,disabled:L||!!H,onChange:e=>z(e.target.value),placeholder:`From verified Billing Management rules`})]}),(0,v.jsxs)(`label`,{className:`billing-field`,children:[(0,v.jsx)(`span`,{children:`Billing date`}),(0,v.jsx)(`input`,{"aria-label":`Form 2 billing date`,type:`date`,value:B,disabled:L||!!H,onChange:e=>V(e.target.value)})]})]})]}),K&&(0,v.jsx)(ci,{mapping:K.mapping,configured:K.configured,busy:L,onSave:t=>ie(async()=>{await J({sessionToken:e,schoolYear:a,semester:s,...t}),re(),T(e=>e+1),N(`Official Form 2 field mappings saved.`)})},JSON.stringify(K.mapping)),te&&(0,v.jsx)(y,{message:`Generating official Form 2…`}),E?.key===Z&&E.error&&(0,v.jsx)(`p`,{className:`billing-error`,role:`alert`,children:E.error}),Q&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`billing-summary form2-summary`,children:[[`Matching grantees`,Q.rows.length],[`Complete / verified`,Q.eligibleCount],[`Missing data / review`,Q.rows.filter(e=>!e.eligible&&!e.excluded).length],[`TES benefits`,si(Q.totals.tes1+Q.totals.tes2)],[`TES-3A`,si(Q.totals.tes3a)],[`Total with authorized ASC`,si(Q.totals.total)]].map(([e,t])=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{children:e}),(0,v.jsx)(`strong`,{children:t})]},e))}),Q.globalIssues.length>0&&(0,v.jsxs)(`div`,{className:`billing-error`,children:[(0,v.jsx)(`strong`,{children:`Resolve before export`}),(0,v.jsx)(`ul`,{children:Q.globalIssues.map(e=>(0,v.jsx)(`li`,{children:e},e))}),(0,v.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:L,onClick:n,children:`Review details and rates in Billing Management`})]}),(0,v.jsxs)(`section`,{className:`billing-card`,children:[(0,v.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,v.jsx)(`h3`,{children:`Official grantee preview`}),(0,v.jsx)(`input`,{"aria-label":`Search Form 2 grantees`,value:b,onChange:e=>{x(e.target.value),C(1)},placeholder:`Student ID, application no., name, course or batch…`})]}),(0,v.jsxs)(`p`,{className:`billing-hint`,children:[oe.length,` matching students · `,Q.duplicateCount,` duplicate source rows counted once. Export includes every validated matching record, not just this page. Amounts shown are the proposed or saved billing amounts; export stays blocked until all reviews pass.`]}),(0,v.jsx)(`div`,{className:`billing-scroll`,children:(0,v.jsxs)(`table`,{className:`form2-preview-table`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsx)(`tr`,{children:[`No.`,`Student ID`,`TES Award No.`,`Full Name`,`Course`,`Year Level`,`Batch`,`Semester`,`School Year`,`Status`,`Validation`].map(e=>(0,v.jsx)(`th`,{children:e},e))})}),(0,v.jsx)(`tbody`,{children:oe.slice((S-1)*10,S*10).map(t=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:t.number}),(0,v.jsx)(`td`,{children:t.studentId}),(0,v.jsx)(`td`,{children:t.tesAwardNumber||`Missing`}),(0,v.jsx)(`td`,{children:[t.profile.lastName,t.profile.firstName,t.profile.middleInitial].filter(Boolean).join(`, `)}),(0,v.jsx)(`td`,{children:t.profile.program||`Missing`}),(0,v.jsx)(`td`,{children:t.profile.yearLevel||`Missing`}),(0,v.jsx)(`td`,{children:t.batch}),(0,v.jsx)(`td`,{children:t.semester}),(0,v.jsx)(`td`,{children:t.schoolYear}),(0,v.jsx)(`td`,{children:t.sourceStatus}),(0,v.jsxs)(`td`,{children:[(0,v.jsx)(`span`,{className:`billing-status ${t.eligible?`is-eligible`:``}`,children:t.eligible?`Complete`:t.excluded?`Excluded`:`Missing Data`}),t.issues.length>0&&(0,v.jsxs)(`details`,{children:[(0,v.jsxs)(`summary`,{children:[t.issues.length,` validation issue(s)`]}),(0,v.jsx)(`ul`,{children:t.issues.map(e=>(0,v.jsx)(`li`,{children:e},e))})]}),(0,v.jsx)(li,{row:t,busy:L||!!H,onSave:(n,r)=>ie(async()=>{await Y({sessionToken:e,schoolYear:a,semester:s,studentId:t.studentId,verified:n,evidence:r}),T(e=>e+1),N(`Continuing-grantee review saved.`)})},`${t.studentId}-${t.continuingVerified}-${t.continuingEvidence}`)]})]},t.studentId))})]})}),(0,v.jsxs)(`nav`,{className:`billing-pagination form2-pagination`,"aria-label":`Form 2 pagination`,children:[(0,v.jsxs)(`span`,{children:[oe.length,` matching · Page `,S,` of `,se]}),(0,v.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:S<=1,onClick:()=>C(e=>e-1),children:`Previous`}),ce.map(e=>(0,v.jsx)(`button`,{className:`billing-secondary ${e===S?`form2-page-active`:``}`,"aria-current":e===S?`page`:void 0,"aria-label":`Page ${e}`,type:`button`,onClick:()=>C(e),children:e},e)),(0,v.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:S>=se,onClick:()=>C(e=>e+1),children:`Next`})]})]})]}),K?.history.length>0&&(0,v.jsxs)(`section`,{className:`billing-card`,children:[(0,v.jsx)(`h3`,{children:`Form 2 report history`}),K.history.map(e=>(0,v.jsxs)(`div`,{className:`billing-history-row`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:e.reference}),(0,v.jsxs)(`span`,{children:[new Date(e.generatedAt).toLocaleString(`en-PH`,{timeZone:`Asia/Manila`}),` · `,e.schoolYear,` · `,e.semester,` · `,e.batches.length?e.batches.join(`, `):`All matching batches`]}),(0,v.jsxs)(`span`,{children:[e.granteeCount,` grantees · `,e.generatedBy,` · `,e.status]})]}),(0,v.jsxs)(`div`,{className:`form2-history-buttons`,children:[(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:L,onClick:()=>ae(`xlsx`,e._id),children:`Excel`}),(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:L,onClick:()=>ae(`pdf`,e._id),children:`PDF`})]})]},e._id))]}),!a&&(0,v.jsx)(`p`,{className:`billing-notice`,children:`Select an academic period to retrieve actual Convex grantees. No sample students are loaded.`})]}),(0,v.jsxs)(`footer`,{className:`billing-footer`,children:[(0,v.jsx)(`p`,{className:`billing-hint`,children:g||H?`Supporting export reuses the saved bill; no duplicate charge.`:`A new export finalizes the existing billing workflow and reserves its eligible students.`}),(0,v.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:L,onClick:t,children:`Close`}),(0,v.jsx)(`button`,{className:`billing-secondary`,type:`button`,disabled:le,onClick:()=>ae(`pdf`),children:L?(0,v.jsx)(y,{variant:`inline`,message:P?.state===`loading`?P.message:`Saving Form 2 information…`}):`Download PDF`}),(0,v.jsx)(`button`,{className:`billing-primary`,type:`button`,disabled:le,onClick:()=>ae(`xlsx`),children:`Download Excel`})]})]})}var di=[`image/png`,`image/jpeg`,`image/webp`];Ye.string(),Ye.string(),Ye.string(),Ye.number(),Ye.union(Ye.literal(`draft`),Ye.literal(`published`));function fi(e,t){let n=e.length,r=new DataView(e.buffer,e.byteOffset,e.byteLength);if(!n||n>10485760)throw Error(`Each image must be no larger than 10 MB.`);let i=``,a=0,o=0;if(n>=33&&[137,80,78,71,13,10,26,10].every((t,n)=>e[n]===t)){if(String.fromCharCode(...e.slice(12,16))!==`IHDR`||String.fromCharCode(...e.slice(-8,-4))!==`IEND`)throw Error(`Invalid PNG image.`);i=`image/png`,a=r.getUint32(16),o=r.getUint32(20)}else if(n>10&&e[0]===255&&e[1]===216&&e[2]===255){if(e[n-2]!==255||e[n-1]!==217)throw Error(`Invalid JPEG image.`);i=`image/jpeg`;let t=2;for(;t+4<n;){if(e[t++]!==255)continue;for(;e[t]===255;)t++;let i=e[t++];if(i===218||i===217)break;if(i===1||i>=208&&i<=215)continue;let s=r.getUint16(t);if(s<2||t+s>n)throw Error(`Invalid JPEG segments.`);if([192,193,194,195,197,198,199,201,202,203,205,206,207].includes(i)){o=r.getUint16(t+3),a=r.getUint16(t+5);break}t+=s}}else if(n>=30&&String.fromCharCode(...e.slice(0,4))===`RIFF`&&String.fromCharCode(...e.slice(8,12))===`WEBP`){if(r.getUint32(4,!0)+8!==n)throw Error(`Invalid WebP image length.`);i=`image/webp`;let t=String.fromCharCode(...e.slice(12,16));if(t===`VP8X`)a=1+e[24]+(e[25]<<8)+(e[26]<<16),o=1+e[27]+(e[28]<<8)+(e[29]<<16);else if(t===`VP8L`&&e[20]===47){let e=r.getUint32(21,!0);a=(e&16383)+1,o=(e>>>14&16383)+1}else t===`VP8 `&&e[23]===157&&e[24]===1&&e[25]===42&&(a=r.getUint16(26,!0)&16383,o=r.getUint16(28,!0)&16383)}if(!i||i!==t||!di.includes(t))throw Error(`Only valid PNG, JPEG and WebP image files are accepted.`);if(!a||!o||a>16e3||o>16e3||a*o>4e7)throw Error(`Image dimensions exceed the supported 40-megapixel limit.`);return{mimeType:i,width:a,height:o,fileSize:n}}var pi=`https://ideal-crane-292.convex.site`.replace(/\/$/,``),mi=e=>`${pi}/documentation/image?id=${encodeURIComponent(e._id)}&v=${e.updatedAt}`;async function hi(e){if(![`image/png`,`image/jpeg`,`image/webp`].includes(e.type)||!e.size||e.size>10*1024*1024)throw Error(`${e.name}: choose a PNG, JPG or WebP image up to 10 MB.`);fi(new Uint8Array(await e.arrayBuffer()),e.type);let t=await createImageBitmap(e).catch(()=>{throw Error(`${e.name}: this image could not be decoded.`)});try{let n=Math.min(1,2560/Math.max(t.width,t.height)),r=document.createElement(`canvas`);r.width=Math.max(1,Math.round(t.width*n)),r.height=Math.max(1,Math.round(t.height*n)),r.getContext(`2d`).drawImage(t,0,0,r.width,r.height);let i=await new Promise(t=>r.toBlob(t,e.type,.88));if(!i||i.type!==e.type||i.size>10*1024*1024)throw Error(`${e.name}: optimized image could not be saved within 10 MB.`);return i}finally{t.close()}}function gi(e,t,n,r,i){return new Promise((a,o)=>{let s=new XMLHttpRequest,c=()=>s.abort();i?.addEventListener(`abort`,c,{once:!0}),s.open(`POST`,`${pi}/documentation/upload?ticket=${encodeURIComponent(e)}`),s.setRequestHeader(`Authorization`,`Bearer ${n}`),s.setRequestHeader(`Content-Type`,t.type),s.timeout=12e4,s.upload.onprogress=e=>{e.lengthComputable&&r(Math.round(e.loaded/e.total*100))};let l=()=>i?.removeEventListener(`abort`,c);if(s.onload=()=>{l();let e;try{e=JSON.parse(s.responseText)}catch{o(Error(`The image server returned an invalid response.`));return}s.status>=200&&s.status<300?a(e.id):o(Error(e.message||`Image upload failed.`))},s.onerror=()=>{l(),o(Error(`Upload failed. Check your connection and try again.`))},s.ontimeout=()=>{l(),o(Error(`Image upload timed out. Please try again.`))},s.onabort=()=>{l(),o(Error(`Image upload cancelled.`))},i?.aborted){o(Error(`Image upload cancelled.`));return}s.send(t)})}function _i(e){let t=(0,h.c)(19),{image:n,sessionToken:r,imageCache:i,loading:a,className:o}=e,s=a===void 0?`lazy`:a,c=o===void 0?``:o,l=(0,m.useRef)(null),u;t[0]===n?u=t[1]:(u=mi(n),t[0]=n,t[1]=u);let d=u,[f,p]=(0,m.useState)(null),[g,_]=(0,m.useState)(`loading`),b,x;t[2]!==i||t[3]!==s||t[4]!==r||t[5]!==d?(b=()=>{if(!r&&!i)return;let e,t,n=new AbortController,a=()=>{(i?i.get(d):fetch(d,{headers:{Authorization:`Bearer ${r}`},signal:n.signal,cache:`no-store`}).then(vi).then(t=>n.signal.aborted?null:(e=URL.createObjectURL(t),e))).then(e=>{n.signal.aborted||p(e)}).catch(()=>{n.signal.aborted||_(`error`)})};return s===`eager`?a():(t=new IntersectionObserver(e=>{let[n]=e;n.isIntersecting&&(t.disconnect(),a())},{rootMargin:`200px`}),t.observe(l.current)),()=>{n.abort(),t?.disconnect(),e&&URL.revokeObjectURL(e)}},x=[d,r,i,s],t[2]=i,t[3]=s,t[4]=r,t[5]=d,t[6]=b,t[7]=x):(b=t[6],x=t[7]),(0,m.useEffect)(b,x);let S=r||i?f:d,C=`documentation-image ${c} ${g===`loading`?`is-loading`:``}`,w;t[8]===g?w=t[9]:(w=g===`loading`&&(0,v.jsx)(y,{variant:`image`,message:`Loading image…`}),t[8]=g,t[9]=w);let T;t[10]!==n||t[11]!==s||t[12]!==S||t[13]!==g?(T=g===`error`?(0,v.jsx)(`span`,{className:`documentation-image-error`,role:`img`,"aria-label":`Documentation image unavailable`,children:`Image unavailable`}):S&&(0,v.jsx)(`img`,{src:S,alt:n.title||`Scholarship Office documentation`,loading:s,decoding:`async`,width:n.width,height:n.height,onLoad:()=>_(`ready`),onError:()=>_(`error`)}),t[10]=n,t[11]=s,t[12]=S,t[13]=g,t[14]=T):T=t[14];let E;return t[15]!==C||t[16]!==w||t[17]!==T?(E=(0,v.jsxs)(`span`,{ref:l,className:C,children:[w,T]}),t[15]=C,t[16]=w,t[17]=T,t[18]=E):E=t[18],E}function vi(e){if(!e.ok)throw Error(`Image unavailable`);return e.blob()}function yi(e){let t=(0,h.c)(53),{images:n,index:r,onIndex:i,onClose:a,sessionToken:o,imageCache:s}=e,c=(0,m.useRef)(null),l=(0,m.useRef)(null),u=n[r],d;t[0]!==n.length||t[1]!==r||t[2]!==i?(d=e=>i((r+e+n.length)%n.length),t[0]=n.length,t[1]=r,t[2]=i,t[3]=d):d=t[3];let f=d,p,g;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(p=()=>{let e=c.current,t=document.activeElement,n=document.body.style.overflow;return e.showModal(),document.body.style.overflow=`hidden`,()=>{e.close(),document.body.style.overflow=n,t?.isConnected&&t.focus({preventScroll:!0})}},g=[],t[4]=p,t[5]=g):(p=t[4],g=t[5]),(0,m.useEffect)(p,g);let _;t[6]===a?_=t[7]:(_=e=>{e.preventDefault(),e.stopPropagation(),a()},t[6]=a,t[7]=_);let y;t[8]!==n.length||t[9]!==f?(y=e=>{if(e.key===`ArrowLeft`&&n.length>1&&(e.preventDefault(),f(-1)),e.key===`ArrowRight`&&n.length>1&&(e.preventDefault(),f(1)),e.key===`Tab`){let t=[...e.currentTarget.querySelectorAll(`button`)];e.shiftKey&&document.activeElement===t[0]?(e.preventDefault(),t.at(-1).focus()):!e.shiftKey&&document.activeElement===t.at(-1)&&(e.preventDefault(),t[0].focus())}},t[8]=n.length,t[9]=f,t[10]=y):y=t[10];let b;t[11]===a?b=t[12]:(b=e=>{let t=e.currentTarget.getBoundingClientRect();e.target===e.currentTarget&&(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&a()},t[11]=a,t[12]=b);let x;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,v.jsx)(`span`,{children:`Scholarship Office Documentation`}),t[13]=x):x=t[13];let S;t[14]===a?S=t[15]:(S=(0,v.jsxs)(`header`,{children:[x,(0,v.jsx)(`button`,{type:`button`,className:`documentation-icon-button`,"aria-label":`Close image viewer`,onClick:a,children:`×`})]}),t[14]=a,t[15]=S);let C;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(C=e=>{l.current={x:e.clientX,y:e.clientY}},t[16]=C):C=t[16];let w;t[17]!==n.length||t[18]!==f?(w=e=>{let t=l.current;l.current=null,t&&n.length>1&&Math.abs(e.clientX-t.x)>50&&Math.abs(e.clientX-t.x)>Math.abs(e.clientY-t.y)&&f(e.clientX<t.x?1:-1)},t[17]=n.length,t[18]=f,t[19]=w):w=t[19];let T;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(T=()=>{l.current=null},t[20]=T):T=t[20];let E=`${u._id}-${u.updatedAt}`,D;t[21]!==u||t[22]!==s||t[23]!==o||t[24]!==E?(D=(0,v.jsx)(_i,{image:u,sessionToken:o,imageCache:s,loading:`eager`},E),t[21]=u,t[22]=s,t[23]=o,t[24]=E,t[25]=D):D=t[25];let O;t[26]!==w||t[27]!==D?(O=(0,v.jsx)(`div`,{className:`documentation-viewer-stage`,onPointerDown:C,onPointerUp:w,onPointerCancel:T,children:D}),t[26]=w,t[27]=D,t[28]=O):O=t[28];let k=u.title||`Scholarship Office documentation`,A;t[29]===k?A=t[30]:(A=(0,v.jsx)(`h2`,{children:k}),t[29]=k,t[30]=A);let j;t[31]===u.description?j=t[32]:(j=u.description&&(0,v.jsx)(`p`,{children:u.description}),t[31]=u.description,t[32]=j);let M;t[33]===u.eventDate?M=t[34]:(M=u.eventDate&&(0,v.jsx)(`time`,{dateTime:u.eventDate,children:new Date(`${u.eventDate}T00:00:00`).toLocaleDateString(`en-PH`,{dateStyle:`long`})}),t[33]=u.eventDate,t[34]=M);let N;t[35]!==A||t[36]!==j||t[37]!==M?(N=(0,v.jsxs)(`div`,{className:`documentation-viewer-caption`,children:[A,j,M]}),t[35]=A,t[36]=j,t[37]=M,t[38]=N):N=t[38];let P;t[39]!==n.length||t[40]!==r||t[41]!==f?(P=n.length>1&&(0,v.jsxs)(`nav`,{"aria-label":`Image viewer controls`,children:[(0,v.jsx)(`button`,{type:`button`,className:`documentation-icon-button`,"aria-label":`Previous image`,onClick:()=>f(-1),children:`←`}),(0,v.jsxs)(`span`,{"aria-live":`polite`,children:[r+1,` / `,n.length]}),(0,v.jsx)(`button`,{type:`button`,className:`documentation-icon-button`,"aria-label":`Next image`,onClick:()=>f(1),children:`→`})]}),t[39]=n.length,t[40]=r,t[41]=f,t[42]=P):P=t[42];let F;t[43]!==N||t[44]!==P?(F=(0,v.jsxs)(`footer`,{children:[N,P]}),t[43]=N,t[44]=P,t[45]=F):F=t[45];let I;return t[46]!==O||t[47]!==F||t[48]!==_||t[49]!==y||t[50]!==b||t[51]!==S?(I=(0,v.jsxs)(`dialog`,{ref:c,className:`documentation-viewer`,"aria-label":`Documentation image viewer`,onCancel:_,onKeyDown:y,onClick:b,children:[S,O,F]}),t[46]=O,t[47]=F,t[48]=_,t[49]=y,t[50]=b,t[51]=S,t[52]=I):I=t[52],I}var bi={title:``,description:``,eventDate:``,displayOrder:0,status:`draft`};function xi(e){let t=(0,h.c)(43),{values:n,onChange:r}=e,i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,v.jsx)(`span`,{children:`Documentation title (optional)`}),t[0]=i):i=t[0];let a;t[1]!==r||t[2]!==n?(a=e=>r({...n,title:e.target.value}),t[1]=r,t[2]=n,t[3]=a):a=t[3];let o;t[4]!==a||t[5]!==n.title?(o=(0,v.jsxs)(`label`,{className:`billing-field`,children:[i,(0,v.jsx)(`input`,{"aria-label":`Documentation title`,maxLength:120,value:n.title,onChange:a})]}),t[4]=a,t[5]=n.title,t[6]=o):o=t[6];let s;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,v.jsx)(`span`,{children:`Event date (optional)`}),t[7]=s):s=t[7];let c;t[8]!==r||t[9]!==n?(c=e=>r({...n,eventDate:e.target.value}),t[8]=r,t[9]=n,t[10]=c):c=t[10];let l;t[11]!==c||t[12]!==n.eventDate?(l=(0,v.jsxs)(`label`,{className:`billing-field`,children:[s,(0,v.jsx)(`input`,{"aria-label":`Documentation event date`,type:`date`,value:n.eventDate,onChange:c})]}),t[11]=c,t[12]=n.eventDate,t[13]=l):l=t[13];let u;t[14]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,v.jsx)(`span`,{children:`Display order`}),t[14]=u):u=t[14];let d;t[15]!==r||t[16]!==n?(d=e=>r({...n,displayOrder:Number(e.target.value)}),t[15]=r,t[16]=n,t[17]=d):d=t[17];let f;t[18]!==d||t[19]!==n.displayOrder?(f=(0,v.jsxs)(`label`,{className:`billing-field`,children:[u,(0,v.jsx)(`input`,{"aria-label":`Documentation display order`,type:`number`,min:`0`,max:`1000000`,step:`1`,value:n.displayOrder,onChange:d})]}),t[18]=d,t[19]=n.displayOrder,t[20]=f):f=t[20];let p;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,v.jsx)(`span`,{children:`Publication status`}),t[21]=p):p=t[21];let m;t[22]!==r||t[23]!==n?(m=e=>r({...n,status:e.target.value}),t[22]=r,t[23]=n,t[24]=m):m=t[24];let g,_;t[25]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,v.jsx)(`option`,{value:`draft`,children:`Draft`}),_=(0,v.jsx)(`option`,{value:`published`,children:`Published`}),t[25]=g,t[26]=_):(g=t[25],_=t[26]);let y;t[27]!==m||t[28]!==n.status?(y=(0,v.jsxs)(`label`,{className:`billing-field`,children:[p,(0,v.jsxs)(`select`,{"aria-label":`Documentation publication status`,value:n.status,onChange:m,children:[g,_]})]}),t[27]=m,t[28]=n.status,t[29]=y):y=t[29];let b;t[30]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,v.jsx)(`span`,{children:`Description (optional)`}),t[30]=b):b=t[30];let x;t[31]!==r||t[32]!==n?(x=e=>r({...n,description:e.target.value}),t[31]=r,t[32]=n,t[33]=x):x=t[33];let S;t[34]!==x||t[35]!==n.description?(S=(0,v.jsxs)(`label`,{className:`billing-field documentation-description`,children:[b,(0,v.jsx)(`textarea`,{"aria-label":`Documentation description`,maxLength:2e3,rows:3,value:n.description,onChange:x})]}),t[34]=x,t[35]=n.description,t[36]=S):S=t[36];let C;return t[37]!==y||t[38]!==S||t[39]!==o||t[40]!==l||t[41]!==f?(C=(0,v.jsxs)(`div`,{className:`billing-form-grid documentation-metadata`,children:[o,l,f,y,S]}),t[37]=y,t[38]=S,t[39]=o,t[40]=l,t[41]=f,t[42]=C):C=t[42],C}function Si(e){let t=(0,h.c)(40),{image:n,busy:r,error:i,onClose:a,onSave:o}=e,s=(0,m.useRef)(null),c;t[0]===n?c=t[1]:(c=()=>Object.fromEntries(Object.keys(bi).map(e=>[e,n[e]])),t[0]=n,t[1]=c);let[l,u]=(0,m.useState)(c),d,f;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(d=()=>{let e=s.current,t=document.activeElement;return e.showModal(),()=>{e.close(),t?.focus({preventScroll:!0})}},f=[],t[2]=d,t[3]=f):(d=t[2],f=t[3]),(0,m.useEffect)(d,f);let p;t[4]!==r||t[5]!==a?(p=e=>{e.preventDefault(),e.stopPropagation(),r||a()},t[4]=r,t[5]=a,t[6]=p):p=t[6];let g;t[7]!==o||t[8]!==l?(g=e=>{e.preventDefault(),o(l)},t[7]=o,t[8]=l,t[9]=g):g=t[9];let _;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,v.jsx)(`h2`,{id:`documentation-edit-title`,children:`Edit documentation details`}),t[10]=_):_=t[10];let b;t[11]!==r||t[12]!==a?(b=(0,v.jsxs)(`header`,{className:`billing-header`,children:[_,(0,v.jsx)(`button`,{type:`button`,className:`billing-close`,disabled:r,"aria-label":`Close documentation details`,onClick:a,children:`×`})]}),t[11]=r,t[12]=a,t[13]=b):b=t[13];let x;t[14]===i?x=t[15]:(x=i&&(0,v.jsx)(`p`,{className:`billing-error`,role:`alert`,children:i}),t[14]=i,t[15]=x);let S;t[16]===l?S=t[17]:(S=(0,v.jsx)(xi,{values:l,onChange:u}),t[16]=l,t[17]=S);let C;t[18]!==x||t[19]!==S?(C=(0,v.jsxs)(`div`,{className:`billing-body`,children:[x,S]}),t[18]=x,t[19]=S,t[20]=C):C=t[20];let w;t[21]!==r||t[22]!==a?(w=(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:r,onClick:a,children:`Cancel`}),t[21]=r,t[22]=a,t[23]=w):w=t[23];let T;t[24]===r?T=t[25]:(T=r?(0,v.jsx)(y,{variant:`inline`,message:`Saving documentation…`}):`Save details`,t[24]=r,t[25]=T);let E;t[26]!==r||t[27]!==T?(E=(0,v.jsx)(`button`,{type:`submit`,className:`billing-primary`,disabled:r,children:T}),t[26]=r,t[27]=T,t[28]=E):E=t[28];let D;t[29]!==w||t[30]!==E?(D=(0,v.jsxs)(`footer`,{className:`billing-footer`,children:[w,E]}),t[29]=w,t[30]=E,t[31]=D):D=t[31];let O;t[32]!==C||t[33]!==D||t[34]!==g||t[35]!==b?(O=(0,v.jsxs)(`form`,{onSubmit:g,children:[b,C,D]}),t[32]=C,t[33]=D,t[34]=g,t[35]=b,t[36]=O):O=t[36];let k;return t[37]!==O||t[38]!==p?(k=(0,v.jsx)(`dialog`,{ref:s,className:`billing-dialog documentation-details-dialog`,"aria-labelledby":`documentation-edit-title`,onCancel:p,children:O}),t[37]=O,t[38]=p,t[39]=k):k=t[39],k}function Ci(e){let t=(0,h.c)(29),{image:n,busy:r,error:i,onClose:a,onDelete:o}=e,s=(0,m.useRef)(null),c,l;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(c=()=>{let e=s.current,t=document.activeElement;return e.showModal(),()=>{e.close(),t?.isConnected&&t.focus({preventScroll:!0})}},l=[],t[0]=c,t[1]=l):(c=t[0],l=t[1]),(0,m.useEffect)(c,l);let u;t[2]!==r||t[3]!==a?(u=e=>{e.preventDefault(),e.stopPropagation(),r||a()},t[2]=r,t[3]=a,t[4]=u):u=t[4];let d;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,v.jsx)(`header`,{className:`billing-header`,children:(0,v.jsx)(`h2`,{id:`documentation-delete-title`,children:`Delete documentation?`})}),t[5]=d):d=t[5];let f=n.title||`Untitled documentation`,p;t[6]===f?p=t[7]:(p=(0,v.jsxs)(`p`,{children:[`Delete “`,f,`” from the gallery? This action removes its record and deletes the image file when it is not referenced elsewhere.`]}),t[6]=f,t[7]=p);let g;t[8]===i?g=t[9]:(g=i&&(0,v.jsx)(`p`,{className:`billing-error`,role:`alert`,children:i}),t[8]=i,t[9]=g);let _;t[10]!==p||t[11]!==g?(_=(0,v.jsxs)(`div`,{className:`billing-body`,children:[p,g]}),t[10]=p,t[11]=g,t[12]=_):_=t[12];let b;t[13]!==r||t[14]!==a?(b=(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:r,onClick:a,children:`Cancel`}),t[13]=r,t[14]=a,t[15]=b):b=t[15];let x;t[16]===r?x=t[17]:(x=r?(0,v.jsx)(y,{variant:`inline`,message:`Deleting image…`}):`Delete image`,t[16]=r,t[17]=x);let S;t[18]!==r||t[19]!==o||t[20]!==x?(S=(0,v.jsx)(`button`,{type:`button`,className:`billing-primary`,disabled:r,onClick:o,children:x}),t[18]=r,t[19]=o,t[20]=x,t[21]=S):S=t[21];let C;t[22]!==S||t[23]!==b?(C=(0,v.jsxs)(`footer`,{className:`billing-footer`,children:[b,S]}),t[22]=S,t[23]=b,t[24]=C):C=t[24];let w;return t[25]!==C||t[26]!==u||t[27]!==_?(w=(0,v.jsxs)(`dialog`,{ref:s,className:`billing-dialog documentation-delete-dialog`,"aria-labelledby":`documentation-delete-title`,onCancel:u,children:[d,_,C]}),t[25]=C,t[26]=u,t[27]=_,t[28]=w):w=t[28],w}function wi({sessionToken:e,onClose:t}){let n=(0,m.useRef)(null),r=(0,m.useRef)(null),i=(0,m.useRef)([]),a=(0,m.useRef)(!0),o=(0,m.useRef)(null),s=(0,m.useRef)(0),[c,l]=(0,m.useState)([]),[u,d]=(0,m.useState)(bi),[f,p]=(0,m.useState)(!1),[h,g]=(0,m.useState)(!1),[_,b]=(0,m.useState)(!1),[x,S]=(0,m.useState)(``),[C,w]=(0,m.useState)(``),[T,E]=(0,m.useState)(``),[D,O]=(0,m.useState)(``),[k,A]=(0,m.useState)(`all`),[j,M]=(0,m.useState)(`desc`),[N,P]=(0,m.useState)(1),[F,I]=(0,m.useState)(null),[L,R]=(0,m.useState)(null),[z,B]=(0,m.useState)(null),V=Mr($.documentation.list,{sessionToken:e,search:D,status:k,sort:j,page:N}),H=Pr($.documentation.beginUpload),U=Pr($.documentation.edit),W=Pr($.documentation.remove);(0,m.useEffect)(()=>{let e=n.current,t=document.activeElement,r=document.body.style.overflow;return a.current=!0,e.showModal(),document.body.style.overflow=`hidden`,()=>{a.current=!1,e.close(),document.body.style.overflow=r,o.current?.abort(),i.current.forEach(e=>URL.revokeObjectURL(e.url)),t?.isConnected&&t.focus({preventScroll:!0})}},[]),(0,m.useEffect)(()=>{let e=setTimeout(()=>O(T),250);return()=>clearTimeout(e)},[T]);let K=e=>{i.current=e,l(e)},q=async e=>{if(_||h)return;let t=10-i.current.length;if(!t){S(`Upload up to 10 images at a time.`);return}g(!0),S(``),w(``);let n=[];for(let r of[...e].slice(0,t))try{let e=await hi(r);if(!a.current)return;let t={key:`documentation-${s.current++}`,name:r.name,blob:e,url:URL.createObjectURL(e),progress:0,state:`ready`};K([...i.current,t])}catch(e){n.push(G(e,`Please check the selected file and try again.`,`admin.DocumentationManagement`))}[...e].length>t&&n.push(`Only the first available 10 images were selected.`),a.current&&(g(!1),S(n.join(` `)))},J=async e=>{b(!0),S(``);try{await e()}catch(e){S(G(e,`Documentation operation failed.`,`admin.DocumentationManagement`))}finally{a.current&&b(!1)}},Y=()=>J(async()=>{if(!i.current.length)throw Error(`Choose at least one documentation image.`);o.current=new AbortController;let t=0,n=[],r=[...i.current];for(let a=0;a<r.length;a++){let s=r[a];if(o.current.signal.aborted)break;let c=e=>K(i.current.map(t=>t.key===s.key?{...t,...e}:t));try{c({state:`uploading`,error:``}),await gi(await H({sessionToken:e,...u,displayOrder:u.displayOrder+a,mimeType:s.blob.type,fileSize:s.blob.size}),s.blob,e,e=>c({progress:e}),o.current.signal),t++,URL.revokeObjectURL(s.url),K(i.current.filter(e=>e.key!==s.key))}catch(e){c({state:`error`,error:G(e,`Unable to complete this request.`,`admin.DocumentationManagement`)}),n.push(`${s.name}: ${G(e,`Unable to complete this request.`,`admin.DocumentationManagement`)}`)}}w(`${t} documentation image${t===1?``:`s`} saved to Convex Storage.`),n.length&&S(n.join(` `)),P(1)}),X=V?.rows||[],ee=X.findIndex(e=>e._id===z);return(0,v.jsxs)(`dialog`,{ref:n,className:`billing-dialog billing-main-dialog documentation-admin-dialog`,"aria-labelledby":`documentation-management-title`,onCancel:e=>{e.target===e.currentTarget&&(e.preventDefault(),!_&&!h&&t())},onKeyDown:e=>{if(e.key!==`Tab`||e.target.closest(`dialog`)!==e.currentTarget)return;let t=[...e.currentTarget.querySelectorAll(`button:not(:disabled),input:not(:disabled),textarea:not(:disabled),select:not(:disabled)`)].filter(t=>t.getClientRects().length&&t.closest(`dialog`)===e.currentTarget);e.shiftKey&&document.activeElement===t[0]?(e.preventDefault(),t.at(-1)?.focus()):!e.shiftKey&&document.activeElement===t.at(-1)&&(e.preventDefault(),t[0]?.focus())},children:[(0,v.jsxs)(`header`,{className:`billing-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`billing-kicker`,children:`Administration`}),(0,v.jsx)(`h2`,{id:`documentation-management-title`,children:`Documentation Management`}),(0,v.jsx)(`p`,{children:`Manage official Scholarship Office documentation and gallery images.`})]}),(0,v.jsx)(`button`,{type:`button`,className:`billing-close`,"aria-label":`Close Documentation Management`,disabled:_||h,onClick:t,children:`×`})]}),(0,v.jsxs)(`div`,{className:`billing-body`,children:[x&&(0,v.jsx)(`p`,{className:`billing-error`,role:`alert`,children:x}),C&&(0,v.jsx)(`p`,{className:`billing-notice`,role:`status`,children:C}),(0,v.jsxs)(`section`,{className:`billing-card`,"aria-labelledby":`documentation-upload-title`,children:[(0,v.jsx)(`h3`,{id:`documentation-upload-title`,children:`Upload Documentation`}),(0,v.jsxs)(`div`,{className:`documentation-dropzone ${f?`is-dragging`:``}`,onDragOver:e=>{e.preventDefault(),p(!0)},onDragLeave:()=>p(!1),onDrop:e=>{e.preventDefault(),p(!1),q(e.dataTransfer.files)},children:[(0,v.jsx)(`svg`,{viewBox:`0 0 48 48`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,"aria-hidden":`true`,children:(0,v.jsx)(`path`,{d:`M7 32v9h34v-9M24 34V7m-10 10L24 7l10 10`})}),(0,v.jsx)(`strong`,{children:`Drag your documentation images here`}),(0,v.jsx)(`p`,{children:`PNG, JPG or WebP · up to 10 MB each · 10 images per upload. Images are optimized for web display.`}),(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:_||h,onClick:()=>r.current?.click(),children:h?(0,v.jsx)(y,{variant:`inline`,message:`Preparing images…`}):`Browse files`}),(0,v.jsx)(`input`,{ref:r,className:`documentation-file-input`,"aria-label":`Choose documentation images`,type:`file`,accept:`image/png,image/jpeg,image/webp`,multiple:!0,disabled:_||h,onChange:e=>{q(e.target.files),e.target.value=``}})]}),c.length>0&&(0,v.jsx)(`div`,{className:`documentation-upload-queue`,children:c.map(e=>(0,v.jsxs)(`article`,{children:[(0,v.jsx)(`img`,{src:e.url,alt:`Selected image ${e.name}`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:e.name}),(0,v.jsxs)(`small`,{children:[(e.blob.size/1024/1024).toFixed(2),` MB · `,e.state===`uploading`?e.progress>=100?`Saving uploaded image…`:`${e.progress}% transferred`:e.state===`error`?`Upload failed`:`Ready`]}),e.state===`uploading`&&(0,v.jsx)(y,{variant:`compact`,progress:e.progress,message:e.progress>=100?`Saving uploaded image…`:`Uploading documentation…`}),e.error&&(0,v.jsx)(y,{variant:`compact`,state:`error`,message:`Image upload failed.`,detail:e.error,onRetry:_?void 0:Y})]}),(0,v.jsx)(`button`,{type:`button`,className:`billing-text-button`,disabled:_,"aria-label":`Remove ${e.name}`,onClick:()=>{URL.revokeObjectURL(e.url),K(i.current.filter(t=>t.key!==e.key))},children:`Remove`})]},e.key))}),(0,v.jsx)(xi,{values:u,onChange:d}),(0,v.jsx)(`p`,{className:`billing-hint`,children:`These details apply to the selected images. Display order increments for each image; individual details can be edited after saving. Draft images remain private.`}),(0,v.jsxs)(`div`,{className:`billing-toolbar`,children:[(0,v.jsx)(`button`,{type:`button`,className:`billing-primary`,disabled:_||h||!c.length,onClick:Y,children:_?(0,v.jsx)(y,{variant:`inline`,message:`Saving documentation…`}):`Save Documentation`}),_&&c.length>0&&(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,onClick:()=>o.current?.abort(),children:`Cancel remaining uploads`})]})]}),(0,v.jsxs)(`section`,{className:`billing-card`,"aria-labelledby":`documentation-manage-title`,children:[(0,v.jsx)(`h3`,{id:`documentation-manage-title`,children:`Manage Uploaded Documentation`}),(0,v.jsxs)(`div`,{className:`documentation-admin-filters`,children:[(0,v.jsxs)(`label`,{className:`billing-field`,children:[(0,v.jsx)(`span`,{children:`Search by title`}),(0,v.jsx)(`input`,{"aria-label":`Search documentation by title`,value:T,maxLength:120,onChange:e=>{E(e.target.value),P(1)}})]}),(0,v.jsxs)(`label`,{className:`billing-field`,children:[(0,v.jsx)(`span`,{children:`Publication status`}),(0,v.jsxs)(`select`,{"aria-label":`Filter documentation status`,value:k,onChange:e=>{A(e.target.value),P(1)},children:[(0,v.jsx)(`option`,{value:`all`,children:`All statuses`}),(0,v.jsx)(`option`,{value:`draft`,children:`Draft`}),(0,v.jsx)(`option`,{value:`published`,children:`Published`})]})]}),(0,v.jsxs)(`label`,{className:`billing-field`,children:[(0,v.jsx)(`span`,{children:`Sort by upload date`}),(0,v.jsxs)(`select`,{"aria-label":`Sort documentation by date`,value:j,onChange:e=>{M(e.target.value),P(1)},children:[(0,v.jsx)(`option`,{value:`desc`,children:`Newest first`}),(0,v.jsx)(`option`,{value:`asc`,children:`Oldest first`})]})]})]}),V?X.length?(0,v.jsx)(`div`,{className:`documentation-admin-grid`,children:X.map(t=>(0,v.jsxs)(`article`,{className:`documentation-admin-card`,children:[(0,v.jsx)(`button`,{type:`button`,className:`documentation-thumbnail`,"aria-label":`Preview ${t.title||`documentation image`}`,onClick:()=>B(t._id),children:(0,v.jsx)(_i,{image:t,sessionToken:e})}),(0,v.jsxs)(`div`,{className:`documentation-admin-card-body`,children:[(0,v.jsxs)(`div`,{className:`documentation-card-title`,children:[(0,v.jsx)(`h4`,{children:t.title||`Untitled documentation`}),(0,v.jsx)(`span`,{className:`billing-status ${t.status===`published`?`is-eligible`:``}`,children:t.status===`published`?`Published`:`Draft`})]}),(0,v.jsxs)(`p`,{children:[`Event: `,t.eventDate||`Not specified`]}),(0,v.jsxs)(`p`,{children:[`Uploaded: `,new Date(t.createdAt).toLocaleDateString(`en-PH`,{timeZone:`Asia/Manila`}),` · Order `,t.displayOrder]}),(0,v.jsxs)(`div`,{className:`documentation-card-actions`,children:[(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:_,onClick:()=>{S(``),I(t)},children:`Edit details`}),(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:_,onClick:()=>J(async()=>{await U({sessionToken:e,id:t._id,...Object.fromEntries(Object.keys(bi).map(e=>[e,t[e]])),status:t.status===`published`?`draft`:`published`}),w(t.status===`published`?`Image unpublished.`:`Image published on the homepage.`)}),children:t.status===`published`?`Unpublish`:`Publish`}),(0,v.jsx)(`button`,{type:`button`,className:`billing-text-button`,disabled:_,onClick:()=>{S(``),R(t)},children:`Delete`})]})]})]},`${t._id}-${t.updatedAt}`))}):(0,v.jsx)(`p`,{className:`billing-hint`,children:`No documentation matches these filters.`}):(0,v.jsx)(y,{message:`Loading documentation gallery…`}),V&&(0,v.jsxs)(`nav`,{className:`billing-pagination`,"aria-label":`Documentation pagination`,children:[(0,v.jsxs)(`span`,{children:[V.total,` images · Page `,V.page,` of `,V.pages]}),(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:_||V.page<=1,onClick:()=>P(V.page-1),children:`Previous`}),(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:_||V.page>=V.pages,onClick:()=>P(V.page+1),children:`Next`})]})]})]}),(0,v.jsxs)(`footer`,{className:`billing-footer`,children:[(0,v.jsx)(`span`,{className:`billing-hint`,children:`Only published documentation appears on the public homepage.`}),(0,v.jsx)(`button`,{type:`button`,className:`billing-secondary`,disabled:_||h,onClick:t,children:`Close`})]}),F&&(0,v.jsx)(Si,{image:F,busy:_,error:x,onClose:()=>I(null),onSave:t=>J(async()=>{await U({sessionToken:e,id:F._id,...t}),I(null),w(`Documentation details saved.`)})}),L&&(0,v.jsx)(Ci,{image:L,busy:_,error:x,onClose:()=>R(null),onDelete:()=>J(async()=>{let t=await W({sessionToken:e,id:L._id});R(null),w(t.retainedFile?`Documentation removed. Its referenced storage file was retained.`:`Documentation and its image file deleted.`)})}),ee>=0&&(0,v.jsx)(yi,{images:X,index:ee,sessionToken:e,onIndex:e=>B(X[e]._id),onClose:()=>B(null)})]})}var Ti={link1Name:``,link1Url:``,link2Name:``,link2Url:``};function Ei(e=``){return String(e).split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`S`}function Di(){let e=globalThis.crypto;if(typeof e?.randomUUID==`function`)try{return e.randomUUID()}catch{}if(typeof e?.getRandomValues==`function`)try{let t=e.getRandomValues(new Uint8Array(16));return Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}catch{}return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`}function Oi(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`short`,timeStyle:`short`}).format(new Date(e)):``}function ki(e,t){let n=new Date(e),r=new Date(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate()}function Ai({sessionToken:e,requestCount:t,onExport:n,onClose:r}){let[i,a]=(0,m.useState)(null),[o,s]=(0,m.useState)(()=>window.matchMedia(`(max-width: 767px)`).matches),[c,l]=(0,m.useState)(``),[u,d]=(0,m.useState)(`all`),[f,p]=(0,m.useState)(``),[h,g]=(0,m.useState)(!1),[_,b]=(0,m.useState)(!1),[x,S]=(0,m.useState)(!1),[C,w]=(0,m.useState)(``),[T,E]=(0,m.useState)(!1),[D,O]=(0,m.useState)(Ti),[k,A]=(0,m.useState)(!1),j=(0,m.useRef)(null),M=(0,m.useRef)(null),N=(0,m.useRef)(!1),P=(0,m.useRef)(!0),F=(0,m.useRef)(null),I=(0,m.useRef)(0),L=Mr($.support.listConversations,e?{sessionToken:e}:`skip`),R=Mr($.support.getSettings),z=Pr($.support.migrateLegacyRequests),B=Pr($.support.sendMessage),V=Pr($.support.markRead),H=Pr($.support.setStatus),U=Pr($.support.saveSettings),W=Pr($.support.clearAll);(0,m.useEffect)(()=>{e&&z({sessionToken:e}).catch(e=>{w(G(e,`Unable to prepare existing requests.`,`admin.StudentSupport`)),E(!0)})},[e,t,z]),(0,m.useEffect)(()=>{if(!C)return;let e=window.setTimeout(()=>w(``),4500);return()=>window.clearTimeout(e)},[C]);let K=k?D:{...Ti,...R},q=(0,m.useMemo)(()=>(L??[]).filter(e=>{let t=c.trim().toLowerCase(),n=!t||[e.studentName,e.studentId,e.email,e.visitorType,e.visitorStudentName].some(e=>String(e??``).toLowerCase().includes(t)),r=e.messages?.at(-1),i=e.source===`Visitor Chat`||!!e.visitorSessionHash,a=u===`all`||u===`students`&&!i||u===`visitors`&&i||u===`unread`&&e.unreadCount>0||u===`replied`&&e.messages?.some(e=>e.senderRole===`admin`)||u===`resolved`&&e.status===`resolved`;return n&&a&&r}),[L,c,u]),J=o?null:(L??[]).find(e=>e._id===i)??q[0]??null,Y=J?._id,X=J?.messages??[];(0,m.useEffect)(()=>{let e=j.current;if(!e||!Y)return;let t=F.current!==Y,n=I.current!==X.length;(t||n&&P.current)&&(e.scrollTo({top:e.scrollHeight,behavior:`smooth`}),P.current=!0),F.current=Y,I.current=X.length},[Y,X.length]),(0,m.useEffect)(()=>{e&&J?._id&&V({sessionToken:e,conversationId:J._id}).catch(()=>{})},[e,J?._id,V]);let ee=e=>{a(e._id),s(!1),F.current=null,w(``),E(!1)},Z=async()=>{let t=f.trim();if(!(!t||!J||N.current)){N.current=!0,P.current=!0,g(!0),w(``),E(!1);try{await B({sessionToken:e,conversationId:J._id,content:t,clientMessageId:Di()}),p(``),M.current&&(M.current.style.height=``)}catch(e){w(G(e,`Message could not be sent. Please try again.`,`admin.StudentSupport`)),E(!0)}finally{N.current=!1,g(!1)}}},Q=e=>{p(e.target.value),e.target.style.height=`auto`,e.target.style.height=`${Math.min(e.target.scrollHeight,140)}px`},te=e=>{let t=e.currentTarget;P.current=t.scrollHeight-t.scrollTop-t.clientHeight<80},ne=async t=>{t.preventDefault(),b(!0),w(``);try{let t=await U({sessionToken:e,...K});t.settings&&(O(t.settings),A(!0)),w(t.skippedNames?.length?`Saved complete links. Add a URL for: ${t.skippedNames.join(`, `)}.`:`Support links saved.`),E(!1)}catch(e){w(G(e,`Support links could not be saved.`,`admin.StudentSupport`)),E(!0)}finally{b(!1)}},re=async()=>{if(!J)return;let t=J.status===`resolved`?`open`:`resolved`;try{await H({sessionToken:e,conversationId:J._id,status:t})}catch(e){w(G(e,`Conversation status could not be updated.`,`admin.StudentSupport`)),E(!0)}},ie=async()=>{if(!x){S(!0);try{await W({sessionToken:e}),a(null),w(`Requests and chat history were archived and cleared.`),E(!1)}catch(e){w(G(e,`Messages could not be cleared.`,`admin.StudentSupport`)),E(!0)}finally{S(!1)}}};return(0,v.jsxs)(`div`,{className:`support-modal`,children:[(0,v.jsxs)(`header`,{className:`support-titlebar`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{className:`support-eyebrow`,children:`STUDENT SERVICES`}),(0,v.jsx)(`h2`,{id:`admin-quick-actions-title`,children:`Student Support`}),(0,v.jsx)(`p`,{children:`Requests, conversations, and support settings in one place.`})]}),(0,v.jsxs)(`div`,{className:`support-toolbar`,children:[(0,v.jsxs)(`span`,{className:`support-total`,children:[(0,v.jsx)(`b`,{children:t}),` total requests`]}),(0,v.jsx)(`button`,{type:`button`,className:`support-secondary-button`,onClick:n,disabled:!t,children:`Export responses`}),(0,v.jsx)(`button`,{type:`button`,className:`support-danger-button`,onClick:()=>{window.confirm(`Move ${t} student requests and their chat history to the archive, then remove them from the active inbox? You can restore archived records later.`)&&ie()},disabled:!t||x,children:x?(0,v.jsx)(y,{variant:`inline`,message:`Archiving requests…`}):`Clear all`}),(0,v.jsx)(`button`,{type:`button`,className:`admin-modal-close support-close`,"aria-label":`Close Student Support`,onClick:r,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})]}),(0,v.jsxs)(`details`,{className:`support-settings`,children:[(0,v.jsxs)(`summary`,{children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`settings`}),` Support Links Configuration `,(0,v.jsx)(`span`,{className:`support-settings-hint`,children:`Student portal links`})]}),(0,v.jsxs)(`form`,{onSubmit:ne,className:`support-settings-grid`,children:[[1,2].map(e=>(0,v.jsxs)(`fieldset`,{children:[(0,v.jsxs)(`legend`,{children:[`Support Link `,e]}),(0,v.jsxs)(`label`,{children:[`Link name`,(0,v.jsx)(`input`,{value:K[`link${e}Name`],maxLength:80,onChange:t=>{A(!0),O(n=>({...n,[`link${e}Name`]:t.target.value}))},placeholder:e===1?`Facebook Messenger`:`Student Support Portal`})]}),(0,v.jsxs)(`label`,{children:[`Support URL`,(0,v.jsx)(`input`,{type:`url`,value:K[`link${e}Url`],onChange:t=>{A(!0),O(n=>({...n,[`link${e}Url`]:t.target.value}))},placeholder:`https://example.com/support`})]})]},e)),(0,v.jsx)(`button`,{type:`submit`,className:`support-primary-button`,disabled:_,children:_?(0,v.jsx)(y,{variant:`inline`,message:`Saving links…`}):`Save Support Links`})]})]}),C&&(0,v.jsx)(`div`,{className:`support-notice ${T?`support-notice--error`:``}`,role:T?`alert`:`status`,children:C}),!e&&(0,v.jsx)(`div`,{className:`support-notice support-notice--error`,children:`Your administrator session needs to be refreshed. Sign out and sign back in to manage support.`}),(0,v.jsxs)(`div`,{className:`support-chat ${J&&!o?`support-chat--selected`:``}`,children:[(0,v.jsxs)(`aside`,{className:`support-inbox`,children:[(0,v.jsxs)(`div`,{className:`support-inbox-heading`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`Conversations`}),(0,v.jsxs)(`span`,{children:[L?.length??`…`,` conversations`]})]}),(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`forum`})]}),(0,v.jsxs)(`label`,{className:`support-search`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,v.jsx)(`input`,{"aria-label":`Search conversations`,value:c,onChange:e=>l(e.target.value),placeholder:`Search name, ID or email`})]}),(0,v.jsx)(`div`,{className:`support-filters`,role:`tablist`,"aria-label":`Conversation filters`,children:[[`all`,`All`],[`students`,`Student Requests`],[`visitors`,`Visitor Chats`],[`unread`,`Unread`],[`replied`,`Replied`],[`resolved`,`Resolved`]].map(([e,t])=>(0,v.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":u===e,onClick:()=>d(e),children:t},e))}),(0,v.jsxs)(`div`,{className:`support-conversation-list`,children:[L===void 0&&(0,v.jsx)(y,{variant:`compact`,message:`Connecting to your conversations…`}),L?.length===0&&(0,v.jsx)(`div`,{className:`support-list-state`,children:`No student requests yet.`}),q.map(e=>{let t=e.messages.at(-1),n=e.source===`Visitor Chat`||!!e.visitorSessionHash,r=n?`${e.visitorType||`Visitor`} · Visitor${e.visitorStudentName?` · Student: ${e.visitorStudentName}`:``}${e.studentId?` · ID: ${e.studentId}`:``}`:`${e.studentPortal?`Student Portal · `:``}${e.studentId||e.email}${e.tesAwardNumber?` · TES ${e.tesAwardNumber}`:``}`;return(0,v.jsxs)(`button`,{type:`button`,className:`support-conversation ${J?._id===e._id?`is-active`:``}`,onClick:()=>ee(e),children:[(0,v.jsx)(`span`,{className:`support-avatar`,children:Ei(e.studentName)}),(0,v.jsxs)(`span`,{className:`support-conversation-copy`,children:[(0,v.jsxs)(`strong`,{children:[e.studentName||`Student`,n&&(0,v.jsx)(`span`,{className:`support-visitor-badge`,children:`Visitor`}),e.studentPortal&&(0,v.jsx)(`span`,{className:`support-portal-badge`,children:`Student Portal`})]}),(0,v.jsx)(`small`,{children:r}),(0,v.jsx)(`span`,{children:t.content})]}),(0,v.jsxs)(`span`,{className:`support-conversation-meta`,children:[(0,v.jsx)(`time`,{children:Oi(t.createdAt)}),e.unreadCount>0&&(0,v.jsx)(`i`,{"aria-label":`${e.unreadCount} unread messages`,children:e.unreadCount}),(0,v.jsx)(`small`,{className:e.status===`resolved`?`is-resolved`:``,children:e.status})]})]},e._id)}),L?.length>0&&q.length===0&&(0,v.jsx)(`div`,{className:`support-list-state`,children:`No conversations match those filters.`})]})]}),(0,v.jsx)(`section`,{className:`support-thread`,"aria-label":`Student conversation`,children:J?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`header`,{className:`support-thread-header`,children:[(0,v.jsx)(`button`,{type:`button`,className:`support-back-button`,onClick:()=>s(!0),children:`← Back`}),(0,v.jsx)(`span`,{className:`support-avatar support-avatar--large`,children:Ei(J.studentName)}),(0,v.jsxs)(`div`,{className:`support-student-id`,children:[(0,v.jsxs)(`h3`,{children:[J.studentName||`Student`,(J.source===`Visitor Chat`||J.visitorSessionHash)&&(0,v.jsxs)(`span`,{className:`support-visitor-badge`,children:[`Visitor · `,J.visitorType||`Other Visitor`]}),J.studentPortal&&(0,v.jsx)(`span`,{className:`support-portal-badge`,children:`Student Portal`})]}),(0,v.jsx)(`span`,{children:J.source===`Visitor Chat`||J.visitorSessionHash?`${J.studentId?`School ID: ${J.studentId} · `:``}${J.visitorStudentName?`Student: ${J.visitorStudentName} · `:``}Visitor chat`:`${J.studentId||`No student ID`} · ${J.email} · ${J.source||`Student Portal`}${J.tesAwardNumber?` · TES Award No. ${J.tesAwardNumber}`:``}`})]}),(0,v.jsx)(`span`,{className:`support-status-pill ${J.status===`resolved`?`is-resolved`:``}`,children:J.status}),(0,v.jsx)(`button`,{type:`button`,className:`support-resolve-button`,onClick:re,children:J.status===`resolved`?`Reopen`:`Mark resolved`})]}),(0,v.jsxs)(`div`,{className:`support-message-history`,ref:j,onScroll:te,children:[X.length===0&&(0,v.jsx)(`div`,{className:`support-list-state`,children:`No messages in this conversation yet.`}),X.map((e,t)=>{let n=X[t-1],r=!n||!ki(n.createdAt,e.createdAt),i=e.senderRole===`admin`;return(0,v.jsxs)(`div`,{children:[r&&(0,v.jsx)(`div`,{className:`support-date-divider`,children:(0,v.jsx)(`span`,{children:new Intl.DateTimeFormat(`en-PH`,{dateStyle:`full`}).format(new Date(e.createdAt))})}),(0,v.jsxs)(`div`,{className:`support-message-row ${i?`is-own`:``}`,children:[(0,v.jsx)(`span`,{className:`support-avatar support-avatar--message`,children:i?`A`:Ei(J.studentName)}),(0,v.jsxs)(`div`,{className:`support-message-body`,children:[(0,v.jsx)(`div`,{className:`support-bubble ${i?`is-own`:``}`,children:e.content}),(0,v.jsx)(`time`,{children:Oi(e.createdAt)})]})]})]},e._id)})]}),(0,v.jsxs)(`form`,{className:`support-composer`,onSubmit:e=>{e.preventDefault(),Z()},children:[(0,v.jsxs)(`div`,{className:`support-composer-input`,children:[(0,v.jsx)(`textarea`,{ref:M,value:f,onChange:Q,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),Z())},maxLength:2e3,placeholder:`Write a helpful reply…`,"aria-label":`Write a message`}),(0,v.jsx)(`button`,{className:`support-send-button`,type:`submit`,"aria-label":h?`Sending message`:`Send message`,disabled:!f.trim()||h,children:h?(0,v.jsx)(y,{variant:`inline`,message:``}):(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`send`})})]}),(0,v.jsxs)(`div`,{className:`support-composer-meta`,children:[(0,v.jsxs)(`span`,{children:[f.length,`/2000 · Enter to send, Shift + Enter for a new line`]}),(0,v.jsx)(`span`,{children:h?`Sending…`:`Messages are saved to this conversation`})]})]})]}):(0,v.jsxs)(`div`,{className:`support-empty-thread`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`forum`}),(0,v.jsx)(`h3`,{children:`Select a conversation`}),(0,v.jsx)(`p`,{children:`Choose a student request to review its history and reply.`})]})})]})]})}function ji(e){if(!Array.isArray(e)||e.length<2||e.some(e=>!Array.isArray(e)||e.length!==13))throw Error(`Invalid export response`);return e.map(e=>e.map(e=>`"${String(e??``).replaceAll(`"`,`""`)}"`).join(`,`)).join(`
`)}function Mi(e,t){let n=new Blob([ji(t)],{type:`text/csv;charset=utf-8`});if(!n.size||!/^IBACMI_[a-zA-Z0-9_.-]+\.csv$/.test(e))throw Error(`Invalid export file`);return{blob:n,filename:e}}function Ni({blob:e,filename:t}){let n=URL.createObjectURL(e),r=document.createElement(`a`);try{r.href=n,r.download=t,document.body.appendChild(r),r.click()}finally{r.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}}var Pi=()=>new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),Fi=(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,"aria-hidden":`true`,children:(0,v.jsx)(`path`,{d:`M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4`,strokeLinecap:`round`,strokeLinejoin:`round`})});function Ii({sessionToken:e,onClose:t}){let n=(0,m.useRef)(null),r=(0,m.useRef)(!1),i=(0,m.useRef)(!0),[a,o]=(0,m.useState)(``),[s,c]=(0,m.useState)([]),[l,u]=(0,m.useState)(``),[d,f]=(0,m.useState)(`idle`),[p,h]=(0,m.useState)(``),[g,_]=(0,m.useState)(``),b=Mr($.batchExport.options,e?{sessionToken:e}:`skip`),x=Pr($.batchExport.prepare),S=b?.find(e=>e.schoolYear===a)?.batches||[],C=s.filter(e=>S.some(t=>t.id===e)),w=S.reduce((e,t)=>e+(C.includes(t.id)?t.count:0),0),T=JSON.stringify([a,S.map(e=>e.id)]),[E,D]=(0,m.useState)(T);b&&T!==E&&(D(T),C.length!==s.length&&c(C));let O=d===`loading`,k=()=>{f(`idle`),_(``)};return(0,m.useEffect)(()=>{let e=n.current,t=document.activeElement,r=document.body.style.overflow;return i.current=!0,e.showModal(),document.body.style.overflow=`hidden`,()=>{i.current=!1,e.close(),document.body.style.overflow=r,t?.isConnected&&t.focus({preventScroll:!0})}},[]),(0,v.jsxs)(`dialog`,{ref:n,className:`download-batch`,"aria-labelledby":`download-batch-title`,"aria-describedby":`download-batch-description`,onCancel:e=>{e.preventDefault(),e.stopPropagation(),r.current||t()},children:[(0,v.jsxs)(`header`,{className:`download-batch__header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{className:`download-batch__eyebrow`,children:`Official grantee records`}),(0,v.jsx)(`h2`,{id:`download-batch-title`,children:`Download Batch`}),(0,v.jsx)(`p`,{id:`download-batch-description`,children:`Select a school year and batches to download official grantee records.`})]}),(0,v.jsx)(`button`,{className:`download-batch__close`,type:`button`,"aria-label":`Close Download Batch`,disabled:O,onClick:t,children:`×`})]}),(0,v.jsxs)(`div`,{className:`download-batch__body`,"aria-busy":O,children:[(0,v.jsxs)(`fieldset`,{disabled:O||b===void 0,children:[(0,v.jsxs)(`label`,{className:`download-batch__field`,children:[`Select School Year`,(0,v.jsxs)(`select`,{value:a,onChange:e=>{o(e.target.value),c([]),u(``),k()},children:[(0,v.jsx)(`option`,{value:``,children:`Choose a school year`}),b?.map(e=>(0,v.jsx)(`option`,{value:e.schoolYear,children:e.schoolYear},e.schoolYear))]})]}),(0,v.jsxs)(`div`,{className:`download-batch__section-title`,children:[(0,v.jsx)(`h3`,{children:`Select Batches`}),(0,v.jsxs)(`span`,{children:[C.length,` selected`]})]}),(0,v.jsxs)(`label`,{className:`download-batch__field`,children:[`Search Batch`,(0,v.jsx)(`input`,{type:`search`,placeholder:`Search batch number…`,value:l,onChange:e=>u(e.target.value),disabled:!a})]}),(0,v.jsxs)(`div`,{className:`download-batch__selection-actions`,children:[(0,v.jsx)(`button`,{type:`button`,disabled:!S.length,onClick:()=>{c(S.map(e=>e.id)),k()},children:`Select All`}),(0,v.jsx)(`button`,{type:`button`,disabled:!C.length,onClick:()=>{c([]),k()},children:`Deselect All`}),(0,v.jsx)(`span`,{children:`All batches in the selected year`})]}),(0,v.jsxs)(`div`,{className:`download-batch__list`,role:`group`,"aria-label":`Available batches`,children:[S.filter(e=>e.id.toLowerCase().includes(l.trim().toLowerCase())).map(e=>(0,v.jsxs)(`label`,{className:`download-batch__row`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:C.includes(e.id),onChange:t=>{c(t.target.checked?[...new Set([...C,e.id])]:C.filter(t=>t!==e.id)),k()}}),(0,v.jsxs)(`span`,{children:[`Batch `,e.id]}),(0,v.jsxs)(`span`,{children:[e.count.toLocaleString(),` `,e.count===1?`grantee record`:`grantee records`]})]},e.id)),!b&&(0,v.jsx)(y,{variant:`compact`,message:`Loading school years and batches…`}),b&&!b.length&&(0,v.jsx)(`p`,{className:`download-batch__empty`,children:`No grantee batches with a school year are available.`}),b?.length>0&&!a&&(0,v.jsx)(`p`,{className:`download-batch__empty`,children:`Choose a school year to see its batches.`}),a&&!S.length&&(0,v.jsx)(`p`,{className:`download-batch__empty`,children:`No batches are available for this school year.`}),S.length>0&&!S.some(e=>e.id.toLowerCase().includes(l.trim().toLowerCase()))&&(0,v.jsx)(`p`,{className:`download-batch__empty`,children:`No batches match your search.`})]})]}),(0,v.jsxs)(`section`,{className:`download-batch__summary`,"aria-label":`Export summary`,"aria-live":`polite`,children:[(0,v.jsx)(`h3`,{children:`Export Summary`}),(0,v.jsxs)(`dl`,{children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`School Year`}),(0,v.jsx)(`dd`,{children:a||`Not selected`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Selected Batches`}),(0,v.jsx)(`dd`,{children:C.length})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Matching Grantees`}),(0,v.jsx)(`dd`,{children:w.toLocaleString()})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`File Format`}),(0,v.jsx)(`dd`,{children:`CSV (.csv)`})]})]}),(0,v.jsx)(`p`,{children:`Includes each matching record’s semester. Identical duplicate records are included once.`})]}),g&&(0,v.jsxs)(`div`,{className:`download-batch__notice is-${d}`,role:d===`error`?`alert`:`status`,children:[d===`success`&&(0,v.jsx)(`strong`,{children:`Download Ready!`}),d===`error`&&(0,v.jsx)(`strong`,{children:`Download Failed`}),(0,v.jsx)(`p`,{children:g})]})]}),(0,v.jsxs)(`footer`,{className:`download-batch__footer`,children:[(0,v.jsx)(`button`,{className:`download-batch__secondary`,type:`button`,disabled:O,onClick:t,children:`Close`}),(0,v.jsxs)(`button`,{className:`download-batch__primary`,type:`button`,disabled:O||!a||!C.length||w===0,onClick:async()=>{if(!r.current){if(!a||!C.length){_(`Select a school year and at least one batch.`);return}r.current=!0,f(`loading`),_(``),h(`Validating Selection`);try{await Pi(),h(`Fetching Grantee Records`);let t=await x({sessionToken:e,schoolYear:a,batches:C});if(!i.current)return;h(`Generating File`),await Pi();let n=Mi(t.filename,t.rows);if(h(`Preparing Download`),await Pi(),!i.current)return;Ni(n),f(`success`),h(`Completed`),_(`${t.count.toLocaleString()} records prepared. Your selected batch records have been prepared successfully.`)}catch(e){i.current&&(G(e,`We couldn’t prepare the file. Please try again.`,`batchExport.download`),f(`error`),_(`We couldn't prepare the file. Please try again.`))}finally{r.current=!1}}},children:[Fi,d===`error`?`Retry`:`Download Batch`]})]}),O&&(0,v.jsxs)(`div`,{className:`download-batch__preparing`,role:`status`,children:[Fi,(0,v.jsx)(`h3`,{children:`Preparing Your Download`}),(0,v.jsx)(`p`,{children:`Please wait while we prepare your selected grantee records.`}),(0,v.jsx)(y,{variant:`compact`,message:p})]})]})}var Li=o(((e,t)=>{(function(n){typeof e==`object`&&t!==void 0?t.exports=n():typeof define==`function`&&define.amd?define([],n):(typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:this).JSZip=n()})(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var c=typeof l==`function`&&l;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var u=Error(`Cannot find module '`+o+`'`);throw u.code=`MODULE_NOT_FOUND`,u}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return i(n||e)},d,d.exports,e,t,n,r)}return n[o].exports}for(var a=typeof l==`function`&&l,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){var r=e(`./utils`),i=e(`./support`),a=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;n.encode=function(e){for(var t,n,i,o,s,c,l,u=[],d=0,f=e.length,p=f,m=r.getTypeOf(e)!==`string`;d<e.length;)p=f-d,i=m?(t=e[d++],n=d<f?e[d++]:0,d<f?e[d++]:0):(t=e.charCodeAt(d++),n=d<f?e.charCodeAt(d++):0,d<f?e.charCodeAt(d++):0),o=t>>2,s=(3&t)<<4|n>>4,c=1<p?(15&n)<<2|i>>6:64,l=2<p?63&i:64,u.push(a.charAt(o)+a.charAt(s)+a.charAt(c)+a.charAt(l));return u.join(``)},n.decode=function(e){var t,n,r,o,s,c,l=0,u=0,d=`data:`;if(e.substr(0,d.length)===d)throw Error(`Invalid base64 input, it looks like a data url.`);var f,p=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,``)).length/4;if(e.charAt(e.length-1)===a.charAt(64)&&p--,e.charAt(e.length-2)===a.charAt(64)&&p--,p%1!=0)throw Error(`Invalid base64 input, bad content length.`);for(f=i.uint8array?new Uint8Array(0|p):Array(0|p);l<e.length;)t=a.indexOf(e.charAt(l++))<<2|(o=a.indexOf(e.charAt(l++)))>>4,n=(15&o)<<4|(s=a.indexOf(e.charAt(l++)))>>2,r=(3&s)<<6|(c=a.indexOf(e.charAt(l++))),f[u++]=t,s!==64&&(f[u++]=n),c!==64&&(f[u++]=r);return f}},{"./support":30,"./utils":32}],2:[function(e,t,n){var r=e(`./external`),i=e(`./stream/DataWorker`),a=e(`./stream/Crc32Probe`),o=e(`./stream/DataLengthProbe`);function s(e,t,n,r,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=n,this.compression=r,this.compressedContent=i}s.prototype={getContentWorker:function(){var e=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o(`data_length`)),t=this;return e.on(`end`,function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw Error(`Bug : uncompressed data size mismatch`)}),e},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo(`compressedSize`,this.compressedSize).withStreamInfo(`uncompressedSize`,this.uncompressedSize).withStreamInfo(`crc32`,this.crc32).withStreamInfo(`compression`,this.compression)}},s.createWorkerFrom=function(e,t,n){return e.pipe(new a).pipe(new o(`uncompressedSize`)).pipe(t.compressWorker(n)).pipe(new o(`compressedSize`)).withStreamInfo(`compression`,t)},t.exports=s},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,n){var r=e(`./stream/GenericWorker`);n.STORE={magic:`\0\0`,compressWorker:function(){return new r(`STORE compression`)},uncompressWorker:function(){return new r(`STORE decompression`)}},n.DEFLATE=e(`./flate`)},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,n){var r=e(`./utils`),i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t){return e!==void 0&&e.length?r.getTypeOf(e)===`string`?function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,t,n){var r=null;r=typeof Promise<`u`?Promise:e(`lie`),t.exports={Promise:r}},{lie:37}],7:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Uint32Array<`u`,i=e(`pako`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=r?`uint8array`:`array`;function c(e,t){o.call(this,`FlateWorker/`+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}n.magic=`\b\0`,a.inherits(c,o),c.prototype.processChunk=function(e){this.meta=e.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(s,e.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},n.compressWorker=function(e){return new c(`Deflate`,e)},n.uncompressWorker=function(){return new c(`Inflate`,{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,n){function r(e,t){var n,r=``;for(n=0;n<t;n++)r+=String.fromCharCode(255&e),e>>>=8;return r}function i(e,t,n,i,o,u){var d,f,p=e.file,m=e.compression,h=u!==s.utf8encode,g=a.transformTo(`string`,u(p.name)),_=a.transformTo(`string`,s.utf8encode(p.name)),v=p.comment,y=a.transformTo(`string`,u(v)),b=a.transformTo(`string`,s.utf8encode(v)),x=_.length!==p.name.length,S=b.length!==v.length,C=``,w=``,T=``,E=p.dir,D=p.date,O={crc32:0,compressedSize:0,uncompressedSize:0};t&&!n||(O.crc32=e.crc32,O.compressedSize=e.compressedSize,O.uncompressedSize=e.uncompressedSize);var k=0;t&&(k|=8),h||!x&&!S||(k|=2048);var A=0,j=0;E&&(A|=16),o===`UNIX`?(j=798,A|=function(e,t){var n=e;return e||(n=t?16893:33204),(65535&n)<<16}(p.unixPermissions,E)):(j=20,A|=function(e){return 63&(e||0)}(p.dosPermissions)),d=D.getUTCHours(),d<<=6,d|=D.getUTCMinutes(),d<<=5,d|=D.getUTCSeconds()/2,f=D.getUTCFullYear()-1980,f<<=4,f|=D.getUTCMonth()+1,f<<=5,f|=D.getUTCDate(),x&&(w=r(1,1)+r(c(g),4)+_,C+=`up`+r(w.length,2)+w),S&&(T=r(1,1)+r(c(y),4)+b,C+=`uc`+r(T.length,2)+T);var M=``;return M+=`
\0`,M+=r(k,2),M+=m.magic,M+=r(d,2),M+=r(f,2),M+=r(O.crc32,4),M+=r(O.compressedSize,4),M+=r(O.uncompressedSize,4),M+=r(g.length,2),M+=r(C.length,2),{fileRecord:l.LOCAL_FILE_HEADER+M+g+C,dirRecord:l.CENTRAL_FILE_HEADER+r(j,2)+M+r(y.length,2)+`\0\0\0\0`+r(A,4)+r(i,4)+g+C+y}}var a=e(`../utils`),o=e(`../stream/GenericWorker`),s=e(`../utf8`),c=e(`../crc32`),l=e(`../signature`);function u(e,t,n,r){o.call(this,`ZipFileWorker`),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=n,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(u,o),u.prototype.push=function(e){var t=e.meta.percent||0,n=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:n?(t+100*(n-r-1))/n:100}}))},u.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var n=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,n=i(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var n=this.bytesWritten-e,i=function(e,t,n,i,o){var s=a.transformTo(`string`,o(i));return l.CENTRAL_DIRECTORY_END+`\0\0\0\0`+r(e,2)+r(e,2)+r(t,4)+r(n,4)+r(s.length,2)+s}(this.dirRecords.length,n,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on(`error`,function(e){t.error(e)}),this},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var n=0;n<t.length;n++)try{t[n].error(e)}catch{}return!0},u.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,n){var r=e(`../compressions`),i=e(`./ZipFileWorker`);n.generateWorker=function(e,t,n){var a=new i(t.streamFiles,n,t.platform,t.encodeFileName),o=0;try{e.forEach(function(e,n){o++;var i=function(e,t){var n=e||t,i=r[n];if(!i)throw Error(n+` is not a valid compression method !`);return i}(n.options.compression,t.compression),s=n.options.compressionOptions||t.compressionOptions||{},c=n.dir,l=n.date;n._compressWorker(i,s).withStreamInfo(`file`,{name:e,dir:c,date:l,comment:n.comment||``,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions}).pipe(a)}),a.entriesCount=o}catch(e){a.error(e)}return a}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw Error(`The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`);this.files=Object.create(null),this.comment=null,this.root=``,this.clone=function(){var e=new r;for(var t in this)typeof this[t]!=`function`&&(e[t]=this[t]);return e}}(r.prototype=e(`./object`)).loadAsync=e(`./load`),r.support=e(`./support`),r.defaults=e(`./defaults`),r.version=`3.10.2`,r.loadAsync=function(e,t){return new r().loadAsync(e,t)},r.external=e(`./external`),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,n){var r=e(`./utils`),i=e(`./external`),a=e(`./utf8`),o=e(`./zipEntries`),s=e(`./stream/Crc32Probe`),c=e(`./nodejsUtils`);function l(e){return new i.Promise(function(t,n){var r=e.decompressed.getContentWorker().pipe(new s);r.on(`error`,function(e){n(e)}).on(`end`,function(){r.streamInfo.crc32===e.decompressed.crc32?t():n(Error(`Corrupted zip : CRC32 mismatch`))}).resume()})}t.exports=function(e,t){var n=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(e)?i.Promise.reject(Error(`JSZip can't accept a stream when loading a zip file.`)):r.prepareContent(`the loaded zip file`,e,!0,t.optimizedBinaryString,t.base64).then(function(e){var n=new o(t);return n.load(e),n}).then(function(e){var n=[i.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var a=0;a<r.length;a++)n.push(l(r[a]));return i.Promise.all(n)}).then(function(e){for(var i=e.shift(),a=i.files,o=0;o<a.length;o++){var s=a[o],c=s.fileNameStr,l=r.resolve(s.fileNameStr);n.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(n.file(l).unsafeOriginalName=c)}return i.zipComment.length&&(n.comment=i.zipComment),n})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,n){var r=e(`../utils`),i=e(`../stream/GenericWorker`);function a(e,t){i.call(this,`Nodejs stream input adapter for `+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(a,i),a.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on(`data`,function(e){t.push({data:e,meta:{percent:0}})}).on(`error`,function(e){t.isPaused?this.generatedError=e:t.error(e)}).on(`end`,function(){t.isPaused?t._upstreamEnded=!0:t.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,n){var r=e(`readable-stream`).Readable;function i(e,t,n){r.call(this,t),this._helper=e;var i=this;e.on(`data`,function(e,t){i.push(e)||i._helper.pause(),n&&n(t)}).on(`error`,function(e){i.emit(`error`,e)}).on(`end`,function(){i.push(null)})}e(`../utils`).inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,t,n){t.exports={isNode:typeof Buffer<`u`,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(typeof e==`number`)throw Error(`The "data" argument must not be a number`);return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&typeof e.on==`function`&&typeof e.pause==`function`&&typeof e.resume==`function`}}},{}],15:[function(e,t,n){function r(e,t,n){var r,i=a.getTypeOf(t),s=a.extend(n||{},c);s.date=s.date||new Date,s.compression!==null&&(s.compression=s.compression.toUpperCase()),typeof s.unixPermissions==`string`&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=h(e)),s.createFolders&&(r=m(e))&&g.call(this,r,!0);var d=i===`string`&&!1===s.binary&&!1===s.base64;n&&n.binary!==void 0||(s.binary=!d),(t instanceof l&&t.uncompressedSize===0||s.dir||!t||t.length===0)&&(s.base64=!1,s.binary=!0,t=``,s.compression=`STORE`,i=`string`);var _=null;_=t instanceof l||t instanceof o?t:f.isNode&&f.isStream(t)?new p(e,t):a.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var v=new u(e,_,s);this.files[e]=v}var i=e(`./utf8`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=e(`./stream/StreamHelper`),c=e(`./defaults`),l=e(`./compressedObject`),u=e(`./zipObject`),d=e(`./generate`),f=e(`./nodejsUtils`),p=e(`./nodejs/NodejsStreamInputAdapter`),m=function(e){e.slice(-1)===`/`&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf(`/`);return 0<t?e.substring(0,t):``},h=function(e){return e.slice(-1)!==`/`&&(e+=`/`),e},g=function(e,t){return t=t===void 0?c.createFolders:t,e=h(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function _(e){return Object.prototype.toString.call(e)===`[object RegExp]`}t.exports={load:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},forEach:function(e){var t,n,r;for(t in this.files)r=this.files[t],(n=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(n,r)},filter:function(e){var t=[];return this.forEach(function(n,r){e(n,r)&&t.push(r)}),t},file:function(e,t,n){if(arguments.length!==1)return e=this.root+e,r.call(this,e,t,n),this;if(_(e)){var i=e;return this.filter(function(e,t){return!t.dir&&i.test(e)})}var a=this.files[this.root+e];return a&&!a.dir?a:null},folder:function(e){if(!e)return this;if(_(e))return this.filter(function(t,n){return n.dir&&e.test(t)});var t=this.root+e,n=g.call(this,t),r=this.clone();return r.root=n.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||=(e.slice(-1)!==`/`&&(e+=`/`),this.files[e]),t&&!t.dir)delete this.files[e];else for(var n=this.filter(function(t,n){return n.name.slice(0,e.length)===e}),r=0;r<n.length;r++)delete this.files[n[r].name];return this},generate:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},generateInternalStream:function(e){var t,n={};try{if((n=a.extend(e||{},{streamFiles:!1,compression:`STORE`,compressionOptions:null,type:``,platform:`DOS`,comment:null,mimeType:`application/zip`,encodeFileName:i.utf8encode})).type=n.type.toLowerCase(),n.compression=n.compression.toUpperCase(),n.type===`binarystring`&&(n.type=`string`),!n.type)throw Error(`No output type specified.`);a.checkSupport(n.type),n.platform!==`darwin`&&n.platform!==`freebsd`&&n.platform!==`linux`&&n.platform!==`sunos`||(n.platform=`UNIX`),n.platform===`win32`&&(n.platform=`DOS`);var r=n.comment||this.comment||``;t=d.generateWorker(this,n,r)}catch(e){(t=new o(`error`)).error(e)}return new s(t,n.type||`string`,n.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e||={}).type||(e.type=`nodebuffer`),this.generateInternalStream(e).toNodejsStream(t)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,n){t.exports=e(`stream`)},{stream:void 0}],17:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.length-4;0<=a;--a)if(this.data[a]===t&&this.data[a+1]===n&&this.data[a+2]===r&&this.data[a+3]===i)return a-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&n===a[1]&&r===a[2]&&i===a[3]},i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,n){var r=e(`../utils`);function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw Error(`End of data reached (data length = `+this.length+`, asked index = `+e+`). Corrupted zip ?`)},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,n=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)n=(n<<8)+this.byteAt(t);return this.index+=e,n},readString:function(e){return r.transformTo(`string`,this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,n){var r=e(`./Uint8ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,n){var r=e(`./ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return new Uint8Array;var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,n){var r=e(`../utils`),i=e(`../support`),a=e(`./ArrayReader`),o=e(`./StringReader`),s=e(`./NodeBufferReader`),c=e(`./Uint8ArrayReader`);t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),t!==`string`||i.uint8array?t===`nodebuffer`?new s(e):i.uint8array?new c(r.transformTo(`uint8array`,e)):new a(r.transformTo(`array`,e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,n){n.LOCAL_FILE_HEADER=`PK`,n.CENTRAL_FILE_HEADER=`PK`,n.CENTRAL_DIRECTORY_END=`PK`,n.ZIP64_CENTRAL_DIRECTORY_LOCATOR=`PK\x07`,n.ZIP64_CENTRAL_DIRECTORY_END=`PK`,n.DATA_DESCRIPTOR=`PK\x07\b`},{}],24:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../utils`);function a(e){r.call(this,`ConvertWorker to `+e),this.destType=e}i.inherits(a,r),a.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../crc32`);function a(){r.call(this,`Crc32Probe`),this.withStreamInfo(`crc32`,0)}e(`../utils`).inherits(a,r),a.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataLengthProbe for `+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(a,i),a.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataWorker`);var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type=``,this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case`string`:e=this.data.substring(this.index,t);break;case`uint8array`:e=this.data.subarray(this.index,t);break;case`array`:case`nodebuffer`:e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,n){function r(e){this.name=e||`default`,this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit(`data`,e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit(`end`),this.cleanUp(),this.isFinished=!0}catch(e){this.emit(`error`,e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit(`error`,e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var n=0;n<this._listeners[e].length;n++)this._listeners[e][n].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.end()}),e.on(`error`,function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e=`Worker `+this.name;return this.previous?this.previous+` -> `+e:e}},t.exports=r},{}],29:[function(e,t,n){var r=e(`../utils`),i=e(`./ConvertWorker`),a=e(`./GenericWorker`),o=e(`../base64`),s=e(`../support`),c=e(`../external`),l=null;if(s.nodestream)try{l=e(`../nodejs/NodejsStreamOutputAdapter`)}catch{}function u(e,t){return new c.Promise(function(n,i){var a=[],s=e._internalType,c=e._outputType,l=e._mimeType;e.on(`data`,function(e,n){a.push(e),t&&t(n)}).on(`error`,function(e){a=[],i(e)}).on(`end`,function(){try{n(function(e,t,n){switch(e){case`blob`:return r.newBlob(r.transformTo(`arraybuffer`,t),n);case`base64`:return o.encode(t);default:return r.transformTo(e,t)}}(c,function(e,t){var n,r=0,i=null,a=0;for(n=0;n<t.length;n++)a+=t[n].length;switch(e){case`string`:return t.join(``);case`array`:return Array.prototype.concat.apply([],t);case`uint8array`:for(i=new Uint8Array(a),n=0;n<t.length;n++)i.set(t[n],r),r+=t[n].length;return i;case`nodebuffer`:return Buffer.concat(t);default:throw Error(`concat : unsupported type '`+e+`'`)}}(s,a),l))}catch(e){i(e)}a=[]}).resume()})}function d(e,t,n){var o=t;switch(t){case`blob`:case`arraybuffer`:o=`uint8array`;break;case`base64`:o=`string`}try{this._internalType=o,this._outputType=t,this._mimeType=n,r.checkSupport(o),this._worker=e.pipe(new i(o)),e.lock()}catch(e){this._worker=new a(`error`),this._worker.error(e)}}d.prototype={accumulate:function(e){return u(this,e)},on:function(e,t){var n=this;return e===`data`?this._worker.on(e,function(e){t.call(n,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,n)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport(`nodestream`),this._outputType!==`nodebuffer`)throw Error(this._outputType+` is not supported by this method`);return new l(this,{objectMode:this._outputType!==`nodebuffer`},e)}},t.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<`u`&&typeof Uint8Array<`u`,n.nodebuffer=typeof Buffer<`u`,n.uint8array=typeof Uint8Array<`u`,typeof ArrayBuffer>`u`)n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:`application/zip`}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=i.getBlob(`application/zip`).size===0}catch{n.blob=!1}}}try{n.nodestream=!!e(`readable-stream`).Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,n){for(var r=e(`./utils`),i=e(`./support`),a=e(`./nodejsUtils`),o=e(`./stream/GenericWorker`),s=Array(256),c=0;c<256;c++)s[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;s[254]=s[254]=1;function l(){o.call(this,`utf-8 decode`),this.leftOver=null}function u(){o.call(this,`utf-8 encode`)}n.utf8encode=function(e){return i.nodebuffer?a.newBufferFrom(e,`utf-8`):function(e){var t,n,r,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=i.uint8array?new Uint8Array(c):Array(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t}(e)},n.utf8decode=function(e){return i.nodebuffer?r.transformTo(`nodebuffer`,e).toString(`utf-8`):function(e){var t,n,i,a,o=e.length,c=Array(2*o);for(t=n=0;t<o;)if((i=e[t++])<128)c[n++]=i;else if(4<(a=s[i]))c[n++]=65533,t+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&t<o;)i=i<<6|63&e[t++],a--;1<a?c[n++]=65533:i<65536?c[n++]=i:(i-=65536,c[n++]=55296|i>>10&1023,c[n++]=56320|1023&i)}return c.length!==n&&(c.subarray?c=c.subarray(0,n):c.length=n),r.applyFromCharCode(c)}(e=r.transformTo(i.uint8array?`uint8array`:`array`,e))},r.inherits(l,o),l.prototype.processChunk=function(e){var t=r.transformTo(i.uint8array?`uint8array`:`array`,e.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var a=t;(t=new Uint8Array(a.length+this.leftOver.length)).set(this.leftOver,0),t.set(a,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+s[e[n]]>t?n:t}(t),c=t;o!==t.length&&(i.uint8array?(c=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(c=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:n.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=l,r.inherits(u,o),u.prototype.processChunk=function(e){this.push({data:n.utf8encode(e.data),meta:e.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,n){var r=e(`./support`),i=e(`./base64`),a=e(`./nodejsUtils`),o=e(`./external`);function s(e){return e}function c(e,t){for(var n=0;n<e.length;++n)t[n]=255&e.charCodeAt(n);return t}e(`setimmediate`),n.newBlob=function(e,t){n.checkSupport(`blob`);try{return new Blob([e],{type:t})}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch{throw Error(`Bug : can't construct the Blob.`)}}};var l={stringifyByChunk:function(e,t,n){var r=[],i=0,a=e.length;if(a<=n)return String.fromCharCode.apply(null,e);for(;i<a;)t===`array`||t===`nodebuffer`?r.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+n,a)))):r.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+n,a)))),i+=n;return r.join(``)},stringifyByChar:function(e){for(var t=``,n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function u(e){var t=65536,r=n.getTypeOf(e),i=!0;if(r===`uint8array`?i=l.applyCanBeUsed.uint8array:r===`nodebuffer`&&(i=l.applyCanBeUsed.nodebuffer),i)for(;1<t;)try{return l.stringifyByChunk(e,r,t)}catch{t=Math.floor(t/2)}return l.stringifyByChar(e)}function d(e,t){for(var n=0;n<e.length;n++)t[n]=e[n];return t}n.applyFromCharCode=u;var f={};f.string={string:s,array:function(e){return c(e,Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,a.allocBuffer(e.length))}},f.array={string:u,array:s,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(e)}},f.arraybuffer={string:function(e){return u(new Uint8Array(e))},array:function(e){return d(new Uint8Array(e),Array(e.byteLength))},arraybuffer:s,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(new Uint8Array(e))}},f.uint8array={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:s,nodebuffer:function(e){return a.newBufferFrom(e)}},f.nodebuffer={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return d(e,new Uint8Array(e.length))},nodebuffer:s},n.transformTo=function(e,t){return t||=``,e?(n.checkSupport(e),f[n.getTypeOf(t)][e](t)):t},n.resolve=function(e){for(var t=e.split(`/`),n=[],r=0;r<t.length;r++){var i=t[r];i===`.`||i===``&&r!==0&&r!==t.length-1||(i===`..`?n.pop():n.push(i))}return n.join(`/`)},n.getTypeOf=function(e){if(typeof e==`string`)return`string`;var t=Object.prototype.toString.call(e);return t===`[object Array]`?`array`:r.nodebuffer&&a.isBuffer(e)?`nodebuffer`:r.uint8array&&t===`[object Uint8Array]`?`uint8array`:r.arraybuffer&&t===`[object ArrayBuffer]`?`arraybuffer`:void 0},n.checkSupport=function(e){if(!r[e.toLowerCase()])throw Error(e+` is not supported by this platform`)},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(e){var t,n,r=``;for(n=0;n<(e||``).length;n++)r+=`\\x`+((t=e.charCodeAt(n))<16?`0`:``)+t.toString(16).toUpperCase();return r},n.delay=function(e,t,n){setImmediate(function(){e.apply(n||null,t||[])})},n.inherits=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.extend=function(){var e,t,n={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&n[t]===void 0&&(n[t]=arguments[e][t]);return n},n.prepareContent=function(e,t,a,s,l){return o.Promise.resolve(t).then(function(t){return r.blob&&(t instanceof Blob||[`[object File]`,`[object Blob]`].indexOf(Object.prototype.toString.call(t))!==-1)?Blob.prototype.arrayBuffer===void 0?typeof FileReader<`u`?new o.Promise(function(e,n){var r=new FileReader;r.onload=function(t){e(t.target.result)},r.onerror=function(e){n(e.target.error)},r.readAsArrayBuffer(t)}):o.Promise.reject(Error(e+` is a Blob, but we have no way of reading it.`)):t.arrayBuffer():t}).then(function(t){var u=n.getTypeOf(t);return u?(u===`arraybuffer`?t=n.transformTo(`uint8array`,t):u===`string`&&(l?t=i.decode(t):a&&!0!==s&&(t=function(e){return c(e,r.uint8array?new Uint8Array(e.length):Array(e.length))}(t))),t):o.Promise.reject(Error(`Can't read the data of '`+e+`'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./signature`),o=e(`./zipEntry`),s=e(`./support`);function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw Error(`Corrupted zip or bug: unexpected signature (`+i.pretty(t)+`, expected `+i.pretty(e)+`)`)}},isSignature:function(e,t){var n=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(n),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=s.uint8array?`uint8array`:`array`,n=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(n)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,n,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),n=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:n}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw Error(`Multi-volumes zip are not supported`)},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw Error(`Corrupted zip or bug: expected `+this.centralDirRecords+` records in central dir, got `+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?Error(`Corrupted zip: can't find end of central directory`):Error(`Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`);this.reader.setIndex(e);var t=e;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error(`Corrupted zip: can't find the ZIP64 end of central directory locator`);if(this.reader.setIndex(e),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var n=this.centralDirOffset+this.centralDirSize;this.zip64&&(n+=20,n+=12+this.zip64EndOfCentralSize);var r=t-n;if(0<r)this.isSignature(t,a.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw Error(`Corrupted zip: missing `+Math.abs(r)+` bytes.`)},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./compressedObject`),o=e(`./crc32`),s=e(`./utf8`),c=e(`./compressions`),l=e(`./support`);function u(e,t){this.options=e,this.loadOptions=t}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(e){var t,n;if(e.skip(22),this.fileNameLength=e.readInt(2),n=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw Error(`Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`);if((t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod))===null)throw Error(`Corrupted zip : compression `+i.pretty(this.compressionMethod)+` unknown (inner file : `+i.transformTo(`string`,this.fileName)+`)`);this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw Error(`Encrypted zip are not supported`);e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),e==0&&(this.dosPermissions=63&this.externalFileAttributes),e==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!==`/`||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,n,r,i=e.index+this.extraFieldsLength;for(this.extraFields||={};e.index+4<i;)t=e.readInt(2),n=e.readInt(2),r=e.readData(n),this.extraFields[t]={id:t,length:n,value:r};e.setIndex(i)},handleUTF8:function(){var e=l.uint8array?`uint8array`:`array`;if(this.useUTF8())this.fileNameStr=s.utf8decode(this.fileName),this.fileCommentStr=s.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(t!==null)this.fileNameStr=t;else{var n=i.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var r=this.findExtraFieldUnicodeComment();if(r!==null)this.fileCommentStr=r;else{var a=i.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(a)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileName)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileComment)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null}},t.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,n){function r(e,t,n){this.name=e,this.dir=n.dir,this.date=n.date,this.comment=n.comment,this.unixPermissions=n.unixPermissions,this.dosPermissions=n.dosPermissions,this._data=t,this._dataBinary=n.binary,this.options={compression:n.compression,compressionOptions:n.compressionOptions}}var i=e(`./stream/StreamHelper`),a=e(`./stream/DataWorker`),o=e(`./utf8`),s=e(`./compressedObject`),c=e(`./stream/GenericWorker`);r.prototype={internalStream:function(e){var t=null,n=`string`;try{if(!e)throw Error(`No output type specified.`);var r=(n=e.toLowerCase())===`string`||n===`text`;n!==`binarystring`&&n!==`text`||(n=`string`),t=this._decompressWorker();var a=!this._dataBinary;a&&!r&&(t=t.pipe(new o.Utf8EncodeWorker)),!a&&r&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(e){(t=new c(`error`)).error(e)}return new i(t,n,``)},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||`nodebuffer`).toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof s&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var n=this._decompressWorker();return this._dataBinary||(n=n.pipe(new o.Utf8EncodeWorker)),s.createWorkerFrom(n,e,t)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var l=[`asText`,`asBinary`,`asNodeBuffer`,`asUint8Array`,`asArrayBuffer`],u=function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},d=0;d<l.length;d++)r.prototype[l[d]]=u;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,o=new i(u),s=e.document.createTextNode(``);o.observe(s,{characterData:!0}),n=function(){s.data=a=++a%2}}else if(e.setImmediate||e.MessageChannel===void 0)n=`document`in e&&`onreadystatechange`in e.document.createElement(`script`)?function(){var t=e.document.createElement(`script`);t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var c=new e.MessageChannel;c.port1.onmessage=u,n=function(){c.port2.postMessage(0)}}var l=[];function u(){var e,t;r=!0;for(var n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}r=!1}t.exports=function(e){l.push(e)!==1||r||n()}}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}],37:[function(e,t,n){var r=e(`immediate`);function i(){}var a={},o=[`REJECTED`],s=[`FULFILLED`],c=[`PENDING`];function l(e){if(typeof e!=`function`)throw TypeError(`resolver must be a function`);this.state=c,this.queue=[],this.outcome=void 0,e!==i&&p(this,e)}function u(e,t,n){this.promise=e,typeof t==`function`&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof n==`function`&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function d(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return a.reject(e,t)}r===e?a.reject(e,TypeError(`Cannot resolve promise with itself`)):a.resolve(e,r)})}function f(e){var t=e&&e.then;if(e&&(typeof e==`object`||typeof e==`function`)&&typeof t==`function`)return function(){t.apply(e,arguments)}}function p(e,t){var n=!1;function r(t){n||(n=!0,a.reject(e,t))}function i(t){n||(n=!0,a.resolve(e,t))}var o=m(function(){t(i,r)});o.status===`error`&&r(o.value)}function m(e,t){var n={};try{n.value=e(t),n.status=`success`}catch(e){n.status=`error`,n.value=e}return n}(t.exports=l).prototype.finally=function(e){if(typeof e!=`function`)return this;var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if(typeof e!=`function`&&this.state===s||typeof t!=`function`&&this.state===o)return this;var n=new this.constructor(i);return this.state===c?this.queue.push(new u(n,e,t)):d(n,this.state===s?e:t,this.outcome),n},u.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){d(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){a.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){d(this.promise,this.onRejected,e)},a.resolve=function(e,t){var n=m(f,t);if(n.status===`error`)return a.reject(e,n.value);var r=n.value;if(r)p(e,r);else{e.state=s,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},a.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:a.resolve(new this(i),e)},l.reject=function(e){var t=new this(i);return a.reject(t,e)},l.all=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=Array(n),s=0,c=-1,l=new this(i);++c<n;)u(e[c],c);return l;function u(e,i){t.resolve(e).then(function(e){o[i]=e,++s!==n||r||(r=!0,a.resolve(l,o))},function(e){r||(r=!0,a.reject(l,e))})}},l.race=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=-1,s=new this(i);++o<n;)c=e[o],t.resolve(c).then(function(e){r||(r=!0,a.resolve(s,e))},function(e){r||(r=!0,a.reject(s,e))});var c;return s}},{immediate:36}],38:[function(e,t,n){var r={};(0,e(`./lib/utils/common`).assign)(r,e(`./lib/deflate`),e(`./lib/inflate`),e(`./lib/zlib/constants`)),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,n){var r=e(`./zlib/deflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/messages`),s=e(`./zlib/zstream`),c=Object.prototype.toString,l=0,u=-1,d=0,f=8;function p(e){if(!(this instanceof p))return new p(e);this.options=i.assign({level:u,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:``},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==l)throw Error(o[n]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m;if(m=typeof t.dictionary==`string`?a.string2buf(t.dictionary):c.call(t.dictionary)===`[object ArrayBuffer]`?new Uint8Array(t.dictionary):t.dictionary,(n=r.deflateSetDictionary(this.strm,m))!==l)throw Error(o[n]);this._dict_set=!0}}function m(e,t){var n=new p(t);if(n.push(e,!0),n.err)throw n.msg||o[n.err];return n.result}p.prototype.push=function(e,t){var n,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,typeof e==`string`?s.input=a.string2buf(e):c.call(e)===`[object ArrayBuffer]`?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(s.avail_out===0&&(s.output=new i.Buf8(u),s.next_out=0,s.avail_out=u),(n=r.deflate(s,o))!==1&&n!==l)return this.onEnd(n),!(this.ended=!0);s.avail_out!==0&&(s.avail_in!==0||o!==4&&o!==2)||(this.options.to===`string`?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((0<s.avail_in||s.avail_out===0)&&n!==1);return o===4?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===l):o!==2||(this.onEnd(l),!(s.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Deflate=p,n.deflate=m,n.deflateRaw=function(e,t){return(t||={}).raw=!0,m(e,t)},n.gzip=function(e,t){return(t||={}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,n){var r=e(`./zlib/inflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/constants`),s=e(`./zlib/messages`),c=e(`./zlib/zstream`),l=e(`./zlib/gzheader`),u=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:``},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,t.windowBits);if(n!==o.Z_OK)throw Error(s[n]);this.header=new l,r.inflateGetHeader(this.strm,this.header)}function f(e,t){var n=new d(t);if(n.push(e,!0),n.err)throw n.msg||s[n.err];return n.result}d.prototype.push=function(e,t){var n,s,c,l,d,f,p=this.strm,m=this.options.chunkSize,h=this.options.dictionary,g=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,typeof e==`string`?p.input=a.binstring2buf(e):u.call(e)===`[object ArrayBuffer]`?p.input=new Uint8Array(e):p.input=e,p.next_in=0,p.avail_in=p.input.length;do{if(p.avail_out===0&&(p.output=new i.Buf8(m),p.next_out=0,p.avail_out=m),(n=r.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&h&&(f=typeof h==`string`?a.string2buf(h):u.call(h)===`[object ArrayBuffer]`?new Uint8Array(h):h,n=r.inflateSetDictionary(this.strm,f)),n===o.Z_BUF_ERROR&&!0===g&&(n=o.Z_OK,g=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),!(this.ended=!0);p.next_out&&(p.avail_out!==0&&n!==o.Z_STREAM_END&&(p.avail_in!==0||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||(this.options.to===`string`?(c=a.utf8border(p.output,p.next_out),l=p.next_out-c,d=a.buf2string(p.output,c),p.next_out=l,p.avail_out=m-l,l&&i.arraySet(p.output,p.output,c,l,0),this.onData(d)):this.onData(i.shrinkBuf(p.output,p.next_out)))),p.avail_in===0&&p.avail_out===0&&(g=!0)}while((0<p.avail_in||p.avail_out===0)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(p.avail_out=0))},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===o.Z_OK&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=d,n.inflate=f,n.inflateRaw=function(e,t){return(t||={}).raw=!0,f(e,t)},n.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Int32Array<`u`;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if(typeof n!=`object`)throw TypeError(n+`must be non-object`);for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){var t,n,r,i,a,o;for(t=r=0,n=e.length;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),t=i=0,n=e.length;t<n;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,t,n){var r=e(`./common`),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new r.Buf8(256),s=0;s<256;s++)o[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function c(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n=``,o=0;o<t;o++)n+=String.fromCharCode(e[o]);return n}o[254]=o[254]=1,n.string2buf=function(e){var t,n,i,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return c(e,e.length)},n.binstring2buf=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,r,i,a,s=t||e.length,l=Array(2*s);for(n=r=0;n<s;)if((i=e[n++])<128)l[r++]=i;else if(4<(a=o[i]))l[r++]=65533,n+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&n<s;)i=i<<6|63&e[n++],a--;1<a?l[r++]=65533:i<65536?l[r++]=i:(i-=65536,l[r++]=55296|i>>10&1023,l[r++]=56320|1023&i)}return c(l,r)},n.utf8border=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+o[e[n]]>t?n:t}},{"./common":41}],43:[function(e,t,n){t.exports=function(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;n!==0;){for(n-=o=2e3<n?2e3:n;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16|0}},{}],44:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,n){var r=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t,n,i){var a=r,o=i+n;e^=-1;for(var s=i;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}},{}],46:[function(e,t,n){var r,i=e(`../utils/common`),a=e(`./trees`),o=e(`./adler32`),s=e(`./crc32`),c=e(`./messages`),l=0,u=4,d=0,f=-2,p=-1,m=4,h=2,g=8,_=9,v=286,y=30,b=19,x=2*v+1,S=15,C=3,w=258,T=w+C+1,E=42,D=113,O=1,k=2,A=3,j=4;function M(e,t){return e.msg=c[t],t}function N(e){return(e<<1)-(4<e?9:0)}function P(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(i.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))}function I(e,t){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function L(e,t){e.pending_buf[e.pending++]=t}function R(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function z(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-T?e.strstart-(e.w_size-T):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+w,p=l[a+o-1],m=l[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do if(l[(n=t)+o]===m&&l[n+o-1]===p&&l[n]===l[a]&&l[++n]===l[a+1]){a+=2,n++;do;while(l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&a<f);if(r=w-(f-a),a=f-w,o<r){if(e.match_start=t,s<=(o=r))break;p=l[a+o-1],m=l[a+o]}}while((t=d[t&u])>c&&--i!=0);return o<=e.lookahead?o:e.lookahead}function B(e){var t,n,r,a,c,l,u,d,f,p,m=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-T)){for(i.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=n=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--n;);for(t=n=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--n;);a+=m}if(e.strm.avail_in===0)break;if(l=e.strm,u=e.window,d=e.strstart+e.lookahead,f=a,p=void 0,p=l.avail_in,f<p&&(p=f),n=p===0?0:(l.avail_in-=p,i.arraySet(u,l.input,l.next_in,p,d),l.state.wrap===1?l.adler=o(l.adler,u,p,d):l.state.wrap===2&&(l.adler=s(l.adler,u,p,d)),l.next_in+=p,l.total_in+=p,p),e.lookahead+=n,e.lookahead+e.insert>=C)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+C-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<C)););}while(e.lookahead<T&&e.strm.avail_in!==0)}function V(e,t){for(var n,r;;){if(e.lookahead<T){if(B(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),n!==0&&e.strstart-n<=e.w_size-T&&(e.match_length=z(e,n)),e.match_length>=C)if(r=a._tr_tally(e,e.strstart-e.match_start,e.match_length-C),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=C){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function H(e,t){for(var n,r,i;;){if(e.lookahead<T){if(B(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=C-1,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-T&&(e.match_length=z(e,n),e.match_length<=5&&(e.strategy===1||e.match_length===C&&4096<e.strstart-e.match_start)&&(e.match_length=C-1)),e.prev_length>=C&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-C,r=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-C),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=C-1,e.strstart++,r&&(I(e,!1),e.strm.avail_out===0))return O}else if(e.match_available){if((r=a._tr_tally(e,0,e.window[e.strstart-1]))&&I(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return O}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&=(r=a._tr_tally(e,0,e.window[e.strstart-1]),0),e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function U(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function W(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*x),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*b+1)),P(this.dyn_ltree),P(this.dyn_dtree),P(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(S+1),this.heap=new i.Buf16(2*v+1),P(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),P(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=h,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?E:D,e.adler=t.wrap===2?0:1,t.last_flush=l,a._tr_init(t),d):M(e,f)}function K(e){var t=G(e);return t===d&&function(e){e.window_size=2*e.w_size,P(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=C-1,e.match_available=0,e.ins_h=0}(e.state),t}function q(e,t,n,r,a,o){if(!e)return f;var s=1;if(t===p&&(t=6),r<0?(s=0,r=-r):15<r&&(s=2,r-=16),a<1||_<a||n!==g||r<8||15<r||t<0||9<t||o<0||m<o)return M(e,f);r===8&&(r=9);var c=new W;return(e.state=c).strm=e,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=a+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+C-1)/C),c.window=new i.Buf8(2*c.w_size),c.head=new i.Buf16(c.hash_size),c.prev=new i.Buf16(c.w_size),c.lit_bufsize=1<<a+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new i.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=o,c.method=n,K(e)}r=[new U(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(B(e),e.lookahead===0&&t===l)return O;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,I(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-T&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):(e.strstart>e.block_start&&(I(e,!1),e.strm.avail_out),O)}),new U(4,4,8,4,V),new U(4,5,16,8,V),new U(4,6,32,32,V),new U(4,4,16,16,H),new U(8,16,32,32,H),new U(8,16,128,128,H),new U(8,32,128,256,H),new U(32,128,258,1024,H),new U(32,258,258,4096,H)],n.deflateInit=function(e,t){return q(e,t,g,15,8,0)},n.deflateInit2=q,n.deflateReset=K,n.deflateResetKeep=G,n.deflateSetHeader=function(e,t){return e&&e.state&&e.state.wrap===2?(e.state.gzhead=t,d):f},n.deflate=function(e,t){var n,i,o,c;if(!e||!e.state||5<t||t<0)return e?M(e,f):f;if(i=e.state,!e.output||!e.input&&e.avail_in!==0||i.status===666&&t!==u)return M(e,e.avail_out===0?-5:f);if(i.strm=e,n=i.last_flush,i.last_flush=t,i.status===E)if(i.wrap===2)e.adler=0,L(i,31),L(i,139),L(i,8),i.gzhead?(L(i,+!!i.gzhead.text+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),L(i,255&i.gzhead.time),L(i,i.gzhead.time>>8&255),L(i,i.gzhead.time>>16&255),L(i,i.gzhead.time>>24&255),L(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),L(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(L(i,255&i.gzhead.extra.length),L(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=s(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(L(i,0),L(i,0),L(i,0),L(i,0),L(i,0),L(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),L(i,3),i.status=D);else{var p=g+(i.w_bits-8<<4)<<8;p|=(2<=i.strategy||i.level<2?0:i.level<6?1:i.level===6?2:3)<<6,i.strstart!==0&&(p|=32),p+=31-p%31,i.status=D,R(i,p),i.strstart!==0&&(R(i,e.adler>>>16),R(i,65535&e.adler)),e.adler=1}if(i.status===69)if(i.gzhead.extra){for(o=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending!==i.pending_buf_size));)L(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(i.status===73)if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,L(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.gzindex=0,i.status=91)}else i.status=91;if(i.status===91)if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,L(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.status=103)}else i.status=103;if(i.status===103&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&F(e),i.pending+2<=i.pending_buf_size&&(L(i,255&e.adler),L(i,e.adler>>8&255),e.adler=0,i.status=D)):i.status=D),i.pending!==0){if(F(e),e.avail_out===0)return i.last_flush=-1,d}else if(e.avail_in===0&&N(t)<=N(n)&&t!==u)return M(e,-5);if(i.status===666&&e.avail_in!==0)return M(e,-5);if(e.avail_in!==0||i.lookahead!==0||t!==l&&i.status!==666){var m=i.strategy===2?function(e,t){for(var n;;){if(e.lookahead===0&&(B(e),e.lookahead===0)){if(t===l)return O;break}if(e.match_length=0,n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):i.strategy===3?function(e,t){for(var n,r,i,o,s=e.window;;){if(e.lookahead<=w){if(B(e),e.lookahead<=w&&t===l)return O;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=C&&0<e.strstart&&(r=s[i=e.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){o=e.strstart+w;do;while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);e.match_length=w-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=C?(n=a._tr_tally(e,1,e.match_length-C),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):r[i.level].func(i,t);if(m!==A&&m!==j||(i.status=666),m===O||m===A)return e.avail_out===0&&(i.last_flush=-1),d;if(m===k&&(t===1?a._tr_align(i):t!==5&&(a._tr_stored_block(i,0,0,!1),t===3&&(P(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),F(e),e.avail_out===0))return i.last_flush=-1,d}return t===u?i.wrap<=0?1:(i.wrap===2?(L(i,255&e.adler),L(i,e.adler>>8&255),L(i,e.adler>>16&255),L(i,e.adler>>24&255),L(i,255&e.total_in),L(i,e.total_in>>8&255),L(i,e.total_in>>16&255),L(i,e.total_in>>24&255)):(R(i,e.adler>>>16),R(i,65535&e.adler)),F(e),0<i.wrap&&(i.wrap=-i.wrap),i.pending===0?1:d):d},n.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==E&&t!==69&&t!==73&&t!==91&&t!==103&&t!==D&&t!==666?M(e,f):(e.state=null,t===D?M(e,-3):d):f},n.deflateSetDictionary=function(e,t){var n,r,a,s,c,l,u,p,m=t.length;if(!e||!e.state||(s=(n=e.state).wrap)===2||s===1&&n.status!==E||n.lookahead)return f;for(s===1&&(e.adler=o(e.adler,t,m,0)),n.wrap=0,m>=n.w_size&&(s===0&&(P(n.head),n.strstart=0,n.block_start=0,n.insert=0),p=new i.Buf8(n.w_size),i.arraySet(p,t,m-n.w_size,n.w_size,0),t=p,m=n.w_size),c=e.avail_in,l=e.next_in,u=e.input,e.avail_in=m,e.next_in=0,e.input=t,B(n);n.lookahead>=C;){for(r=n.strstart,a=n.lookahead-(C-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+C-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--a;);n.strstart=r,n.lookahead=C-1,B(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=C-1,n.match_available=0,e.next_in=l,e.input=u,e.avail_in=c,n.wrap=s,d},n.deflateInfo=`pako deflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=``,this.comment=``,this.hcrc=0,this.done=!1}},{}],48:[function(e,t,n){t.exports=function(e,t){var n=e.state,r=e.next_in,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e.input,E;i=r+(e.avail_in-5),a=e.next_out,E=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),c=n.dmax,l=n.wsize,u=n.whave,d=n.wnext,f=n.window,p=n.hold,m=n.bits,h=n.lencode,g=n.distcode,_=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=h[p&_];t:for(;;){if(p>>>=b=y>>>24,m-=b,(b=y>>>16&255)==0)E[a++]=65535&y;else{if(!(16&b)){if(!(64&b)){y=h[(65535&y)+(p&(1<<b)-1)];continue t}if(32&b){n.mode=12;break e}e.msg=`invalid literal/length code`,n.mode=30;break e}x=65535&y,(b&=15)&&(m<b&&(p+=T[r++]<<m,m+=8),x+=p&(1<<b)-1,p>>>=b,m-=b),m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=g[p&v];r:for(;;){if(p>>>=b=y>>>24,m-=b,!(16&(b=y>>>16&255))){if(!(64&b)){y=g[(65535&y)+(p&(1<<b)-1)];continue r}e.msg=`invalid distance code`,n.mode=30;break e}if(S=65535&y,m<(b&=15)&&(p+=T[r++]<<m,(m+=8)<b&&(p+=T[r++]<<m,m+=8)),c<(S+=p&(1<<b)-1)){e.msg=`invalid distance too far back`,n.mode=30;break e}if(p>>>=b,m-=b,(b=a-o)<S){if(u<(b=S-b)&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break e}if(w=f,(C=0)===d){if(C+=l-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}}else if(d<b){if(C+=l+d-b,(b-=d)<x){for(x-=b;E[a++]=f[C++],--b;);if(C=0,d<x){for(x-=b=d;E[a++]=f[C++],--b;);C=a-S,w=E}}}else if(C+=d-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}for(;2<x;)E[a++]=w[C++],E[a++]=w[C++],E[a++]=w[C++],x-=3;x&&(E[a++]=w[C++],1<x&&(E[a++]=w[C++]))}else{for(C=a-S;E[a++]=E[C++],E[a++]=E[C++],E[a++]=E[C++],2<(x-=3););x&&(E[a++]=E[C++],1<x&&(E[a++]=E[C++]))}break}}break}}while(r<i&&a<s);r-=x=m>>3,p&=(1<<(m-=x<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=p,n.bits=m}},{}],49:[function(e,t,n){var r=e(`../utils/common`),i=e(`./adler32`),a=e(`./crc32`),o=e(`./inffast`),s=e(`./inftrees`),c=1,l=2,u=0,d=-2,f=1,p=852,m=592;function h(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg=``,t.wrap&&(e.adler=1&t.wrap),t.mode=f,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(p),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,u):d}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,_(e)):d}function y(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?d:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,v(e))):d}function b(e,t){var n,r;return e?(r=new g,(e.state=r).window=null,(n=y(e,t))!==u&&(e.state=null),n):d}var x,S,C=!0;function w(e){if(C){var t;for(x=new r.Buf32(512),S=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(c,e.lens,0,288,x,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(l,e.lens,0,32,S,0,e.work,{bits:5}),C=!1}e.lencode=x,e.lenbits=9,e.distcode=S,e.distbits=5}function T(e,t,n,i){var a,o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i<(a=o.wsize-o.wnext)&&(a=i),r.arraySet(o.window,t,n-i,a,o.wnext),(i-=a)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}n.inflateReset=v,n.inflateReset2=y,n.inflateResetKeep=_,n.inflateInit=function(e){return b(e,15)},n.inflateInit2=b,n.inflate=function(e,t){var n,p,m,g,_,v,y,b,x,S,C,E,D,O,k,A,j,M,N,P,F,I,L,R,z=0,B=new r.Buf8(4),V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return d;(n=e.state).mode===12&&(n.mode=13),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,S=v,C=y,I=u;e:for(;;)switch(n.mode){case f:if(n.wrap===0){n.mode=13;break}for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(2&n.wrap&&b===35615){B[n.check=0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0),x=b=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg=`incorrect header check`,n.mode=30;break}if((15&b)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(x-=4,F=8+(15&(b>>>=4)),n.wbits===0)n.wbits=F;else if(F>n.wbits){e.msg=`invalid window size`,n.mode=30;break}n.dmax=1<<F,e.adler=n.check=1,n.mode=512&b?10:12,x=b=0;break;case 2:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.flags=b,(255&n.flags)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(57344&n.flags){e.msg=`unknown header flags set`,n.mode=30;break}n.head&&(n.head.text=b>>8&1),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0,n.mode=3;case 3:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.time=b),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,B[2]=b>>>16&255,B[3]=b>>>24&255,n.check=a(n.check,B,4,0)),x=b=0,n.mode=4;case 4:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.xflags=255&b,n.head.os=b>>8),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0,n.mode=5;case 5:if(1024&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length=b,n.head&&(n.head.extra_len=b),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(v<(E=n.length)&&(E=v),E&&(n.head&&(F=n.head.extra_len-n.length,n.head.extra||(n.head.extra=Array(n.head.extra_len)),r.arraySet(n.head.extra,p,g,E,F)),512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,n.length-=E),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(v===0)break e;for(E=0;F=p[g+ E++],n.head&&F&&n.length<65536&&(n.head.name+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(v===0)break e;for(E=0;F=p[g+ E++],n.head&&F&&n.length<65536&&(n.head.comment+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(65535&n.check)){e.msg=`header crc mismatch`,n.mode=30;break}x=b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}e.adler=n.check=h(b),x=b=0,n.mode=11;case 11:if(n.havedict===0)return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,2;e.adler=n.check=1,n.mode=12;case 12:if(t===5||t===6)break e;case 13:if(n.last){b>>>=7&x,x-=7&x,n.mode=27;break}for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}switch(n.last=1&b,--x,3&(b>>>=1)){case 0:n.mode=14;break;case 1:if(w(n),n.mode=20,t!==6)break;b>>>=2,x-=2;break e;case 2:n.mode=17;break;case 3:e.msg=`invalid block type`,n.mode=30}b>>>=2,x-=2;break;case 14:for(b>>>=7&x,x-=7&x;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if((65535&b)!=(b>>>16^65535)){e.msg=`invalid stored block lengths`,n.mode=30;break}if(n.length=65535&b,x=b=0,n.mode=15,t===6)break e;case 15:n.mode=16;case 16:if(E=n.length){if(v<E&&(E=v),y<E&&(E=y),E===0)break e;r.arraySet(m,p,g,E,_),v-=E,g+=E,y-=E,_+=E,n.length-=E;break}n.mode=12;break;case 17:for(;x<14;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.nlen=257+(31&b),b>>>=5,x-=5,n.ndist=1+(31&b),b>>>=5,x-=5,n.ncode=4+(15&b),b>>>=4,x-=4,286<n.nlen||30<n.ndist){e.msg=`too many length or distance symbols`,n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.lens[V[n.have++]]=7&b,b>>>=3,x-=3}for(;n.have<19;)n.lens[V[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,L={bits:n.lenbits},I=s(0,n.lens,0,19,n.lencode,0,n.work,L),n.lenbits=L.bits,I){e.msg=`invalid code lengths set`,n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(z=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(j<16)b>>>=k,x-=k,n.lens[n.have++]=j;else{if(j===16){for(R=k+2;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b>>>=k,x-=k,n.have===0){e.msg=`invalid bit length repeat`,n.mode=30;break}F=n.lens[n.have-1],E=3+(3&b),b>>>=2,x-=2}else if(j===17){for(R=k+3;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=3+(7&(b>>>=k)),b>>>=3,x-=3}else{for(R=k+7;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=11+(127&(b>>>=k)),b>>>=7,x-=7}if(n.have+E>n.nlen+n.ndist){e.msg=`invalid bit length repeat`,n.mode=30;break}for(;E--;)n.lens[n.have++]=F}}if(n.mode===30)break;if(n.lens[256]===0){e.msg=`invalid code -- missing end-of-block`,n.mode=30;break}if(n.lenbits=9,L={bits:n.lenbits},I=s(c,n.lens,0,n.nlen,n.lencode,0,n.work,L),n.lenbits=L.bits,I){e.msg=`invalid literal/lengths set`,n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,L={bits:n.distbits},I=s(l,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,L),n.distbits=L.bits,I){e.msg=`invalid distances set`,n.mode=30;break}if(n.mode=20,t===6)break e;case 20:n.mode=21;case 21:if(6<=v&&258<=y){e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,o(e,C),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,n.mode===12&&(n.back=-1);break}for(n.back=0;A=(z=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(A&&!(240&A)){for(M=k,N=A,P=j;A=(z=n.lencode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&z,!(M+(k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,n.length=j,A===0){n.mode=26;break}if(32&A){n.back=-1,n.mode=12;break}if(64&A){e.msg=`invalid literal/length code`,n.mode=30;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(R=n.extra;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(z=n.distcode[b&(1<<n.distbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(!(240&A)){for(M=k,N=A,P=j;A=(z=n.distcode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&z,!(M+(k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,64&A){e.msg=`invalid distance code`,n.mode=30;break}n.offset=j,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(R=n.extra;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg=`invalid distance too far back`,n.mode=30;break}n.mode=25;case 25:if(y===0)break e;if(E=C-y,n.offset>E){if((E=n.offset-E)>n.whave&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break}D=E>n.wnext?(E-=n.wnext,n.wsize-E):n.wnext-E,E>n.length&&(E=n.length),O=n.window}else O=m,D=_-n.offset,E=n.length;for(y<E&&(E=y),y-=E,n.length-=E;m[_++]=O[D++],--E;);n.length===0&&(n.mode=21);break;case 26:if(y===0)break e;m[_++]=n.length,y--,n.mode=21;break;case 27:if(n.wrap){for(;x<32;){if(v===0)break e;v--,b|=p[g++]<<x,x+=8}if(C-=y,e.total_out+=C,n.total+=C,C&&(e.adler=n.check=n.flags?a(n.check,m,C,_-C):i(n.check,m,C,_-C)),C=y,(n.flags?b:h(b))!==n.check){e.msg=`incorrect data check`,n.mode=30;break}x=b=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(4294967295&n.total)){e.msg=`incorrect length check`,n.mode=30;break}x=b=0}n.mode=29;case 29:I=1;break e;case 30:I=-3;break e;case 31:return-4;case 32:default:return d}return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,(n.wsize||C!==e.avail_out&&n.mode<30&&(n.mode<27||t!==4))&&T(e,e.output,e.next_out,C-e.avail_out)?(n.mode=31,-4):(S-=e.avail_in,C-=e.avail_out,e.total_in+=S,e.total_out+=C,n.total+=C,n.wrap&&C&&(e.adler=n.check=n.flags?a(n.check,m,C,e.next_out-C):i(n.check,m,C,e.next_out-C)),e.data_type=n.bits+(n.last?64:0)+(n.mode===12?128:0)+(n.mode===20||n.mode===15?256:0),(S==0&&C===0||t===4)&&I===u&&(I=-5),I)},n.inflateEnd=function(e){if(!e||!e.state)return d;var t=e.state;return t.window&&=null,e.state=null,u},n.inflateGetHeader=function(e,t){var n;return e&&e.state&&2&(n=e.state).wrap?((n.head=t).done=!1,u):d},n.inflateSetDictionary=function(e,t){var n,r=t.length;return e&&e.state?(n=e.state).wrap!==0&&n.mode!==11?d:n.mode===11&&i(1,t,r,0)!==n.check?-3:T(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):d},n.inflateInfo=`pako inflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,n){var r=e(`../utils/common`),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,c,l,u,d,f){var p,m,h,g,_,v,y,b,x,S=f.bits,C=0,w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,M=0,N=null,P=0,F=new r.Buf16(16),I=new r.Buf16(16),L=null,R=0;for(C=0;C<=15;C++)F[C]=0;for(w=0;w<c;w++)F[t[n+w]]++;for(D=S,E=15;1<=E&&F[E]===0;E--);if(E<D&&(D=E),E===0)return l[u++]=20971520,l[u++]=20971520,f.bits=1,0;for(T=1;T<E&&F[T]===0;T++);for(D<T&&(D=T),C=A=1;C<=15;C++)if(A<<=1,(A-=F[C])<0)return-1;if(0<A&&(e===0||E!==1))return-1;for(I[1]=0,C=1;C<15;C++)I[C+1]=I[C]+F[C];for(w=0;w<c;w++)t[n+w]!==0&&(d[I[t[n+w]]++]=w);if(v=e===0?(N=L=d,19):e===1?(N=i,P-=257,L=a,R-=257,256):(N=o,L=s,-1),C=T,_=u,k=w=M=0,h=-1,g=(j=1<<(O=D))-1,e===1&&852<j||e===2&&592<j)return 1;for(;;){for(y=C-k,x=d[w]<v?(b=0,d[w]):d[w]>v?(b=L[R+d[w]],N[P+d[w]]):(b=96,0),p=1<<C-k,T=m=1<<O;l[_+(M>>k)+(m-=p)]=y<<24|b<<16|x|0,m!==0;);for(p=1<<C-1;M&p;)p>>=1;if(p===0?M=0:(M&=p-1,M+=p),w++,--F[C]==0){if(C===E)break;C=t[n+d[w]]}if(D<C&&(M&g)!==h){for(k===0&&(k=D),_+=T,A=1<<(O=C-k);O+k<E&&!((A-=F[O+k])<=0);)O++,A<<=1;if(j+=1<<O,e===1&&852<j||e===2&&592<j)return 1;l[h=M&g]=D<<24|O<<16|_-u|0}}return M!==0&&(l[_+M]=C-k<<24|4194304),f.bits=D,0}},{"../utils/common":41}],51:[function(e,t,n){t.exports={2:`need dictionary`,1:`stream end`,0:``,"-1":`file error`,"-2":`stream error`,"-3":`data error`,"-4":`insufficient memory`,"-5":`buffer error`,"-6":`incompatible version`}},{}],52:[function(e,t,n){var r=e(`../utils/common`),i=0,a=1;function o(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,c=29,l=256,u=l+1+c,d=30,f=19,p=2*u+1,m=15,h=16,g=7,_=256,v=16,y=17,b=18,x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=Array(2*(u+2));o(T);var E=Array(2*d);o(E);var D=Array(512);o(D);var O=Array(256);o(O);var k=Array(c);o(k);var A,j,M,N=Array(d);function P(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function I(e){return e<256?D[e]:D[256+(e>>>7)]}function L(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function R(e,t,n){e.bi_valid>h-n?(e.bi_buf|=t<<e.bi_valid&65535,L(e,e.bi_buf),e.bi_buf=t>>h-e.bi_valid,e.bi_valid+=n-h):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function z(e,t,n){R(e,n[2*t],n[2*t+1])}function B(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function V(e,t,n){var r,i,a=Array(m+1),o=0;for(r=1;r<=m;r++)a[r]=o=o+n[r-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];s!==0&&(e[2*i]=B(a[s]++,s))}}function H(e){var t;for(t=0;t<u;t++)e.dyn_ltree[2*t]=0;for(t=0;t<d;t++)e.dyn_dtree[2*t]=0;for(t=0;t<f;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*_]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function U(e){8<e.bi_valid?L(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function W(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function G(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&W(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!W(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function K(e,t,n){var r,i,a,o,s=0;if(e.last_lit!==0)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,r===0?z(e,i,t):(z(e,(a=O[i])+l+1,t),(o=x[a])!==0&&R(e,i-=k[a],o),z(e,a=I(--r),n),(o=S[a])!==0&&R(e,r-=N[a],o)),s<e.last_lit;);z(e,_,t)}function q(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=p,n=0;n<c;n++)a[2*n]===0?a[2*n+1]=0:(e.heap[++e.heap_len]=l=n,e.depth[n]=0);for(;e.heap_len<2;)a[2*(i=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=l,n=e.heap_len>>1;1<=n;n--)G(e,a,n);for(i=c;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,G(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,a,o,s,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,f=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,g=t.stat_desc.max_length,_=0;for(a=0;a<=m;a++)e.bl_count[a]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<p;n++)g<(a=c[2*c[2*(r=e.heap[n])+1]+1]+1)&&(a=g,_++),c[2*r+1]=a,l<r||(e.bl_count[a]++,o=0,h<=r&&(o=f[r-h]),s=c[2*r],e.opt_len+=s*(a+o),d&&(e.static_len+=s*(u[2*r+1]+o)));if(_!==0){do{for(a=g-1;e.bl_count[a]===0;)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[g]--,_-=2}while(0<_);for(a=g;a!==0;a--)for(r=e.bl_count[a];r!==0;)l<(i=e.heap[--n])||(c[2*i+1]!==a&&(e.opt_len+=(a-c[2*i+1])*c[2*i],c[2*i+1]=a),r--)}}(e,t),V(a,l,e.bl_count)}function J(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<c&&i===o||(s<l?e.bl_tree[2*i]+=s:i===0?s<=10?e.bl_tree[2*y]++:e.bl_tree[2*b]++:(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*v]++),a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4))}function Y(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<c&&i===o)){if(s<l)for(;z(e,i,e.bl_tree),--s!=0;);else i===0?s<=10?(z(e,y,e.bl_tree),R(e,s-3,3)):(z(e,b,e.bl_tree),R(e,s-11,7)):(i!==a&&(z(e,i,e.bl_tree),s--),z(e,v,e.bl_tree),R(e,s-3,2));a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4)}}o(N);var X=!1;function ee(e,t,n,i){R(e,(s<<1)+ +!!i,3),function(e,t,n,i){U(e),i&&(L(e,n),L(e,~n)),r.arraySet(e.pending_buf,e.window,t,n,e.pending),e.pending+=n}(e,t,n,!0)}n._tr_init=function(e){X||=(function(){var e,t,n,r,i,a=Array(m+1);for(r=n=0;r<c-1;r++)for(k[r]=n,e=0;e<1<<x[r];e++)O[n++]=r;for(O[n-1]=r,r=i=0;r<16;r++)for(N[r]=i,e=0;e<1<<S[r];e++)D[i++]=r;for(i>>=7;r<d;r++)for(N[r]=i<<7,e=0;e<1<<S[r]-7;e++)D[256+ i++]=r;for(t=0;t<=m;t++)a[t]=0;for(e=0;e<=143;)T[2*e+1]=8,e++,a[8]++;for(;e<=255;)T[2*e+1]=9,e++,a[9]++;for(;e<=279;)T[2*e+1]=7,e++,a[7]++;for(;e<=287;)T[2*e+1]=8,e++,a[8]++;for(V(T,u+1,a),e=0;e<d;e++)E[2*e+1]=5,E[2*e]=B(e,5);A=new P(T,x,l+1,u,m),j=new P(E,S,0,d,m),M=new P([],C,0,f,g)}(),!0),e.l_desc=new F(e.dyn_ltree,A),e.d_desc=new F(e.dyn_dtree,j),e.bl_desc=new F(e.bl_tree,M),e.bi_buf=0,e.bi_valid=0,H(e)},n._tr_stored_block=ee,n._tr_flush_block=function(e,t,n,r){var o,s,c=0;0<e.level?(e.strm.data_type===2&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&e.dyn_ltree[2*t]!==0)return i;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return a;for(t=32;t<l;t++)if(e.dyn_ltree[2*t]!==0)return a;return i}(e)),q(e,e.l_desc),q(e,e.d_desc),c=function(e){var t;for(J(e,e.dyn_ltree,e.l_desc.max_code),J(e,e.dyn_dtree,e.d_desc.max_code),q(e,e.bl_desc),t=f-1;3<=t&&e.bl_tree[2*w[t]+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=o&&(o=s)):o=s=n+5,n+4<=o&&t!==-1?ee(e,t,n,r):e.strategy===4||s===o?(R(e,2+ +!!r,3),K(e,T,E)):(R(e,4+ +!!r,3),function(e,t,n,r){var i;for(R(e,t-257,5),R(e,n-1,5),R(e,r-4,4),i=0;i<r;i++)R(e,e.bl_tree[2*w[i]+1],3);Y(e,e.dyn_ltree,t-1),Y(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),K(e,e.dyn_ltree,e.dyn_dtree)),H(e),r&&U(e)},n._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,t===0?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(O[n]+l+1)]++,e.dyn_dtree[2*I(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){R(e,2,3),z(e,_,T),function(e){e.bi_valid===16?(L(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=``,this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){(function(e,t){if(!e.setImmediate){var n,r,i,a,o=1,s={},c=!1,l=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,n={}.toString.call(e.process)===`[object process]`?function(e){process.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage(``,`*`),e.onmessage=n,t}}()?(a=`setImmediate$`+Math.random()+`$`,e.addEventListener?e.addEventListener(`message`,p,!1):e.attachEvent(`onmessage`,p),function(t){e.postMessage(a+t,`*`)}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},function(e){i.port2.postMessage(e)}):l&&`onreadystatechange`in l.createElement(`script`)?(r=l.documentElement,function(e){var t=l.createElement(`script`);t.onreadystatechange=function(){f(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(f,0,e)},u.setImmediate=function(e){typeof e!=`function`&&(e=Function(``+e));for(var t=Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];return s[o]={callback:e,args:t},n(o),o++},u.clearImmediate=d}function d(e){delete s[e]}function f(e){if(c)setTimeout(f,0,e);else{var n=s[e];if(n){c=!0;try{(function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}})(n)}finally{d(e),c=!1}}}}function p(t){t.source===e&&typeof t.data==`string`&&t.data.indexOf(a)===0&&f(+t.data.slice(a.length))}})(typeof self>`u`?e===void 0?this:e:self)}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}]},{},[10])(10)})})),Ri=c(Li(),1),zi=e=>[...String(e??``)].filter(e=>e.charCodeAt(0)>=32||[`	`,`
`,`\r`].includes(e)).join(``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`),Bi=[`No.`,`Student ID`,`TES Award Number`,`Last Name`,`First Name`,`Middle Name`,`Complete Name`,`Batch Number`,`School Year`,`School ID Status`],Vi=e=>String.fromCharCode(65+e),Hi=(e,t,n=0)=>`<c r="${e}" s="${n}" t="inlineStr"><is><t xml:space="preserve">${zi(t)}</t></is></c>`;async function Ui(e,t){if(!e||!Array.isArray(e.rows)||!e.schoolYear||!Array.isArray(e.batches))throw Error(`Invalid report response`);let n=new Ri.default,r=e.rows.length+8,i=[`<row r="1" ht="28" customHeight="1">${Hi(`A1`,`IBACMI Scholarship Office`,1)}</row>`,`<row r="2" ht="25" customHeight="1">${Hi(`A2`,`NO ID LIST`,2)}</row>`,`<row r="3">${Hi(`A3`,`School Year: ${e.schoolYear}`)}</row>`,`<row r="4" ht="36" customHeight="1">${Hi(`A4`,`Selected Batches: ${e.batches.join(`, `)}`)}</row>`,`<row r="5">${Hi(`A5`,`Date Generated: ${new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`,timeZone:`Asia/Manila`}).format(new Date(e.generatedAt))} (Philippines)`)}</row>`,`<row r="6">${Hi(`A6`,`Total Missing School ID Records: ${e.rows.length}`)}</row>`,`<row r="8" ht="30" customHeight="1">${Bi.map((e,t)=>Hi(`${Vi(t)}8`,e,3)).join(``)}</row>`];return e.rows.forEach((e,t)=>{let n=t+9,r=[t+1,e.studentId,e.tesAwardNumber,e.lastName,e.firstName,e.middleName,[e.lastName,[e.firstName,e.middleName].filter(Boolean).join(` `)].filter(Boolean).join(`, `),e.batchId,e.schoolYear,`Not Submitted`];i.push(`<row r="${n}" ht="30" customHeight="1">${r.map((e,r)=>Hi(`${Vi(r)}${n}`,e,t%2?5:4)).join(``)}</row>`)}),n.file(`[Content_Types].xml`,`<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`),n.file(`_rels/.rels`,`<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`),n.file(`xl/workbook.xml`,`<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="NO ID LIST" sheetId="1" r:id="rId1"/></sheets></workbook>`),n.file(`xl/_rels/workbook.xml.rels`,`<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`),n.file(`xl/styles.xml`,`<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="0"/><fonts count="3"><font><sz val="11"/><name val="Calibri"/><color rgb="FF60372E"/></font><font><b/><sz val="16"/><name val="Calibri"/><color rgb="FF792D39"/></font><font><b/><sz val="11"/><name val="Calibri"/><color rgb="FFFFFFFF"/></font></fonts><fills count="5"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF792D39"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFF1E5"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE47D32"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="6"><xf numFmtId="49" fontId="0" fillId="0" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf><xf numFmtId="49" fontId="1" fillId="0" borderId="0"/><xf numFmtId="49" fontId="2" fillId="4" borderId="0"/><xf numFmtId="49" fontId="2" fillId="2" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf><xf numFmtId="49" fontId="0" fillId="0" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf><xf numFmtId="49" fontId="0" fillId="3" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`),n.file(`xl/worksheets/sheet1.xml`,`<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><dimension ref="A1:J${Math.max(8,r)}"/><sheetViews><sheetView workbookViewId="0"><pane ySplit="8" topLeftCell="A9" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><sheetFormatPr defaultRowHeight="20"/><cols>${[7,20,30,22,22,20,38,22,20,22].map((e,t)=>`<col min="${t+1}" max="${t+1}" width="${e}" customWidth="1"/>`).join(``)}</cols><sheetData>${i.join(``)}</sheetData><autoFilter ref="A8:J${Math.max(8,r)}"/><mergeCells count="6">${[1,2,3,4,5,6].map(e=>`<mergeCell ref="A${e}:J${e}"/>`).join(``)}</mergeCells></worksheet>`),n.generateAsync({type:`uint8array`,compression:`DEFLATE`},e=>t?.(e.percent))}function Wi(e,t){if(!/^IBACMI_NO_ID_LIST[A-Za-z0-9_.-]*\.xlsx$/.test(e)||!t?.length)throw Error(`Invalid report file`);let n=URL.createObjectURL(new Blob([t],{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`})),r=document.createElement(`a`);try{r.href=n,r.download=e,document.body.appendChild(r),r.click()}finally{r.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}}var Gi=e=>String(e??``).trim(),Ki=(e,t)=>[e.studentId,e.tesAwardNumber,e.lastName,e.firstName,e.middleName,`${e.firstName} ${e.middleName} ${e.lastName}`,`${e.lastName} ${e.firstName} ${e.middleName}`].join(` `).toLowerCase().replace(/\s+/g,` `).includes(Gi(t).toLowerCase().replace(/\s+/g,` `)),qi=()=>new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)));function Ji({sessionToken:e,onClose:t}){let n=(0,m.useRef)(null),r=(0,m.useRef)(!1),i=(0,m.useRef)(!0),[a,o]=(0,m.useState)(``),[s,c]=(0,m.useState)([]),[l,u]=(0,m.useState)(``),[d,f]=(0,m.useState)(``),[p,h]=(0,m.useState)(1),[_,b]=(0,m.useState)(null),[x,S]=(0,m.useState)(0),[C,w]=(0,m.useState)(null),T=Mr($.noIdList.options,e?{sessionToken:e}:`skip`),E=T!==void 0,D=Pr($.noIdList.start),O=Fr($.noIdList.prepare),k=JSON.stringify([e,a,T?.revision,x]),A=_?.key===k?_.jobId:null,j=Mr($.noIdList.progress,A?{sessionToken:e,jobId:A}:`skip`),M=j?.report||null,N=(_?.key===k?_.error:``)||(j?.state===`failed`?`Some School ID files could not be verified. Retry verification to finish the list.`:j?.state===`stale`?`School ID records changed. Refresh verification to gather the updated list.`:``),P=!!(a&&!N&&(!j||j.state===`running`)),F=M?.batches||[],I=s.filter(e=>F.some(t=>t.id===e)),L=JSON.stringify([a,F.map(e=>e.id)]),[R,z]=(0,m.useState)(L);M&&L!==R&&(z(L),I.length!==s.length&&c(I));let B=F.filter(e=>I.includes(e.id)).reduce((e,t)=>({total:e.total+t.total,withId:e.withId+t.withId,withoutId:e.withoutId+t.withoutId}),{total:0,withId:0,withoutId:0}),V=(M?.rows||[]).filter(e=>I.includes(e.batchId)&&Ki(e,d)),H=Math.max(1,Math.ceil(V.length/10)),U=Math.min(p,H),W=V.slice((U-1)*10,U*10),K=C?.state===`loading`;(0,m.useEffect)(()=>{let e=n.current,t=document.activeElement,r=document.body.style.overflow;return i.current=!0,e.showModal(),document.body.style.overflow=`hidden`,()=>{i.current=!1,e.close(),document.body.style.overflow=r,t?.isConnected&&t.focus({preventScroll:!0})}},[]),(0,m.useEffect)(()=>{if(!a||!E)return;let t=!0;return D({sessionToken:e,schoolYear:a}).then(e=>{t&&b({key:k,jobId:e.jobId})}).catch(e=>{t&&b({key:k,error:G(e,`Unable to verify School ID submissions.`,`noIdList.start`)})}),()=>{t=!1}},[k,a,e,E,D]);let q=()=>{w(null),h(1)};return(0,v.jsxs)(`dialog`,{ref:n,className:`download-batch no-id-list`,"aria-label":`NO ID LIST — Missing School ID Submissions`,onCancel:e=>{e.preventDefault(),e.stopPropagation(),r.current||t()},children:[(0,v.jsxs)(`header`,{className:`download-batch__header`,children:[(0,v.jsx)(`img`,{src:g,width:`42`,height:`42`,alt:`IBACMI`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{className:`download-batch__eyebrow`,children:`School ID Monitoring`}),(0,v.jsx)(`h2`,{children:`NO ID LIST`}),(0,v.jsx)(`p`,{children:`View and download the list of grantees who have not submitted their School ID.`})]}),(0,v.jsx)(`button`,{className:`download-batch__close`,"aria-label":`Close NO ID LIST`,disabled:K,onClick:t,children:`×`})]}),(0,v.jsxs)(`div`,{className:`download-batch__body`,"aria-busy":P||K,children:[(0,v.jsxs)(`fieldset`,{disabled:K,children:[(0,v.jsxs)(`label`,{className:`download-batch__field`,children:[`School Year`,(0,v.jsxs)(`select`,{"aria-label":`School Year`,value:a,disabled:!T,onChange:e=>{o(e.target.value),c([]),u(``),f(``),q()},children:[(0,v.jsx)(`option`,{value:``,children:`Select school year`}),T?.years.map(e=>(0,v.jsx)(`option`,{children:e},e))]})]}),!T&&(0,v.jsx)(y,{variant:`compact`,message:`Loading school years...`}),T&&!T.years.length&&(0,v.jsx)(`p`,{children:`No official grantee records with a school year are available.`}),P&&(0,v.jsx)(y,{variant:`compact`,message:`Checking School ID submissions...`,detail:j?`${j.checked} of ${j.total} uploaded files checked. Confirmed missing records appear below while verification continues.`:`Gathering grantee records and saved School ID references...`,progress:j?.total?j.checked/j.total*100:void 0}),N&&(0,v.jsxs)(`div`,{className:`download-batch__notice is-error`,role:`alert`,children:[(0,v.jsx)(`p`,{children:N}),(0,v.jsx)(`button`,{type:`button`,onClick:()=>S(e=>e+1),children:`Retry verification`})]}),M&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`download-batch__selection-actions`,children:[(0,v.jsx)(`button`,{type:`button`,onClick:()=>{S(e=>e+1),q()},children:`Refresh submissions`}),(0,v.jsxs)(`span`,{children:[`Verified `,new Date(M.checkedAt).toLocaleTimeString(`en-PH`,{timeZone:`Asia/Manila`}),` (Philippines)`]})]}),(0,v.jsxs)(`div`,{className:`download-batch__section-title`,children:[(0,v.jsx)(`h3`,{children:`Select Batches`}),(0,v.jsxs)(`span`,{children:[I.length,` selected`]})]}),(0,v.jsxs)(`label`,{className:`download-batch__field`,children:[`Search Batch`,(0,v.jsx)(`input`,{type:`search`,value:l,onChange:e=>u(e.target.value),placeholder:`Search batch number…`})]}),(0,v.jsxs)(`div`,{className:`download-batch__selection-actions`,children:[(0,v.jsx)(`button`,{type:`button`,onClick:()=>{c(F.map(e=>e.id)),q()},children:`Select All`}),(0,v.jsx)(`button`,{type:`button`,onClick:()=>{c([]),q()},children:`Deselect All`}),(0,v.jsx)(`span`,{children:`Select All includes batches hidden by search.`})]}),(0,v.jsx)(`div`,{className:`download-batch__list`,role:`group`,"aria-label":`Batches and School ID counts`,children:F.filter(e=>e.id.toLowerCase().includes(l.trim().toLowerCase())).map(e=>(0,v.jsxs)(`label`,{className:`no-id-list__batch`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:I.includes(e.id),onChange:t=>{c(t.target.checked?[...new Set([...I,e.id])]:I.filter(t=>t!==e.id)),q()}}),(0,v.jsxs)(`strong`,{children:[`Batch `,e.id]}),(0,v.jsxs)(`span`,{children:[e.total,` total · `,e.withId,` with ID · `,(0,v.jsxs)(`b`,{children:[e.withoutId,` without ID`]}),e.pending>0?` · ${e.pending} pending verification`:``]})]},e.id))}),(0,v.jsx)(`section`,{className:`no-id-list__stats`,"aria-label":`School ID summary`,"aria-live":`polite`,children:[[`TOTAL GRANTEES`,B.total],[`WITH SCHOOL ID`,B.withId],[`WITHOUT SCHOOL ID`,B.withoutId],[`SELECTED BATCHES`,I.length]].map(([e,t])=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{children:e}),(0,v.jsx)(`strong`,{children:t.toLocaleString()})]},e))}),(0,v.jsxs)(`label`,{className:`download-batch__field`,children:[`Search Missing Students`,(0,v.jsx)(`input`,{type:`search`,placeholder:`Name, Student ID, or TES Award Number…`,value:d,onChange:e=>{f(e.target.value),q()}})]}),(0,v.jsxs)(`p`,{className:`no-id-list__count`,children:[V.length,` matching missing-ID records · `,B.withoutId,` without School ID in selected batches`]}),(0,v.jsx)(`div`,{className:`no-id-list__table`,tabIndex:`0`,role:`region`,"aria-label":`Missing School ID records`,children:(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsx)(`tr`,{children:[`No.`,`Student ID`,`TES Award Number`,`Last Name`,`First Name`,`Middle Name / Initial`,`Batch Number`,`School Year`,`School ID Status`].map(e=>(0,v.jsx)(`th`,{scope:`col`,children:e},e))})}),(0,v.jsxs)(`tbody`,{children:[W.map((e,t)=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(U-1)*10+t+1}),[e.studentId,e.tesAwardNumber,e.lastName,e.firstName,e.middleName,e.batchId,e.schoolYear,e.status].map((e,t)=>(0,v.jsx)(`td`,{children:e||`—`},t))]},`${e.studentId}|${e.batchId}`)),!W.length&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{colSpan:`9`,children:I.length?`No missing-ID records match your selection.`:`Select batches to view missing School ID submissions.`})})]})]})}),(0,v.jsxs)(`nav`,{className:`no-id-list__pagination`,"aria-label":`Missing ID pages`,children:[(0,v.jsx)(`button`,{type:`button`,disabled:U===1,onClick:()=>h(e=>e-1),children:`Previous`}),(0,v.jsxs)(`span`,{children:[`Page `,U,` of `,H]}),(0,v.jsx)(`button`,{type:`button`,disabled:U>=H,onClick:()=>h(e=>e+1),children:`Next`})]}),(0,v.jsx)(`p`,{children:`Excel includes all matching records across every page. Your student search and selected batches apply to the export.`})]})]}),C&&!K&&(0,v.jsxs)(`div`,{className:`download-batch__notice is-${C.state}`,role:C.state===`error`?`alert`:`status`,children:[(0,v.jsx)(`strong`,{children:C.message}),(0,v.jsx)(`p`,{children:C.detail})]})]}),(0,v.jsxs)(`footer`,{className:`download-batch__footer`,children:[(0,v.jsx)(`button`,{type:`button`,className:`download-batch__secondary`,disabled:K,onClick:t,children:`Close`}),(0,v.jsx)(`button`,{type:`button`,className:`download-batch__primary`,disabled:K||j?.state!==`complete`||!M||!I.length||!V.length,onClick:async()=>{if(!(r.current||!a||!I.length||!M||j?.state!==`complete`)){r.current=!0,w({state:`loading`,message:`Checking School ID submissions...`});try{await qi();let t=await O({sessionToken:e,schoolYear:a,batches:I,search:d.trim(),jobId:A});if(!i.current)return;w({state:`loading`,message:`Preparing missing student records...`}),await qi(),w({state:`loading`,message:`Generating Excel report...`}),await qi();let n=await Ui(t,e=>{i.current&&w({state:`loading`,message:`Generating Excel report...`,progress:e<100?e:void 0})});if(!i.current)return;Wi(t.filename,n),w({state:`success`,message:`Your file is ready!`,detail:`${t.rows.length} missing-ID records prepared and handed to your browser.`})}catch(e){i.current&&(G(e,`Unable to prepare the Excel report.`,`noIdList.export`),w({state:`error`,message:`Unable to prepare the Excel report. Please try again.`}))}finally{r.current=!1}}},children:C?.state===`error`?`Retry Excel Download`:`Download NO ID List`})]}),K&&(0,v.jsx)(`div`,{className:`download-batch__preparing`,children:(0,v.jsx)(y,{variant:`compact`,message:C.message,progress:C.progress})})]})}var Yi=[`MATCHED`,`MISMATCHED`,`NOT FOUND`,`DUPLICATE`,`MISSING FROM UPLOAD`,`INVALID DATA`,`AMBIGUOUS MATCH`],Xi=e=>[...String(e??``)].filter(e=>e.charCodeAt(0)>=32||[`
`,`\r`,`	`].includes(e)).join(``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`),Zi=e=>{let t=``;for(let n=e+1;n;n=Math.floor((n-1)/26))t=String.fromCharCode(65+(n-1)%26)+t;return t},Qi=(e,t,n=0)=>`<c r="${e}" s="${n}" t="inlineStr"><is><t xml:space="preserve">${Xi(t)}</t></is></c>`,$i=[`No.`,`Batch Number`,`Student ID`,`Uploaded Last Name`,`Official Last Name`,`Uploaded First Name`,`Official First Name`,`Uploaded Ext Name`,`Official Ext Name`,`Uploaded Middle Name`,`Official Middle Name`,`Validation Status`,`Remarks`],ea=e=>e.map((e,t)=>[t+1,e.batchId,e.studentId,e.uploaded?.lastName??``,e.official?.lastName??``,e.uploaded?.firstName??``,e.official?.firstName??``,e.uploaded?.extensionName??``,e.official?.extensionName??``,e.uploaded?.middleName??``,e.official?.middleName??``,e.status,e.remarks]);async function ta(e,t){if(!Array.isArray(e.rows)||!e.summary)throw Error(`Invalid comparison report`);let n=[[`ALL COMPARISON RESULTS`,e.rows],[`MATCHED`,e.rows.filter(e=>e.status===`MATCHED`)],[`MISMATCHED`,e.rows.filter(e=>e.status===`MISMATCHED`)],[`NOT FOUND`,e.rows.filter(e=>e.status===`NOT FOUND`)],[`DUPLICATES`,e.rows.filter(e=>e.status===`DUPLICATE`)],[`MISSING FROM UPLOAD`,e.rows.filter(e=>e.status===`MISSING FROM UPLOAD`)],[`INVALID - AMBIGUOUS`,e.rows.filter(e=>[`INVALID DATA`,`AMBIGUOUS MATCH`].includes(e.status))]],r=[[`VALIDATION SUMMARY`,[`Metric`,`Count`],Object.entries(e.summary).map(([e,t])=>[e===`uploaded`?`Uploaded Records`:e===`official`?`Official Grantee Records`:e,t])],...n.map(([e,t])=>[e,$i,ea(t)])],i=new Ri.default,a=[],o=[],s=[];for(let[t,[n,c,l]]of r.entries()){let r=Zi(c.length-1),u=l.length+8,d=[[`IBACMI Scholarship Office`,1],[`STUDENT RECORD VALIDATION REPORT`,2],[`School Year: ${e.schoolYear}`,0],[`Selected Batches: ${e.batches.join(`, `)}`,0],[`Generated: ${new Date(e.generatedAt).toLocaleString(`en-PH`,{timeZone:`Asia/Manila`})} (Philippines)`,0],[n,1]].map(([e,t],n)=>`<row r="${n+1}" ht="25" customHeight="1">${Qi(`A${n+1}`,e,t)}</row>`);d.push(`<row r="8" ht="32" customHeight="1">${c.map((e,t)=>Qi(`${Zi(t)}8`,e,3)).join(``)}</row>`),l.forEach((e,n)=>{let r=t===0?30:Math.min(409,Math.max(36,...e.map((e,t)=>Math.ceil(String(e??``).length/(c[t]===`Remarks`?58:23))*15+12)));d.push(`<row r="${n+9}" ht="${r}" customHeight="1">${e.map((e,t)=>Qi(`${Zi(t)}${n+9}`,e,n%2?5:4)).join(``)}</row>`)}),i.file(`xl/worksheets/sheet${t+1}.xml`,`<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><dimension ref="A1:${r}${u}"/><sheetViews><sheetView workbookViewId="0"><pane ySplit="8" topLeftCell="A9" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><sheetFormatPr defaultRowHeight="22"/><cols>${c.map((e,n)=>`<col min="${n+1}" max="${n+1}" width="${t===0&&n===0?50:n===0?9:e===`Remarks`?60:25}" customWidth="1"/>`).join(``)}</cols><sheetData>${d.join(``)}</sheetData><autoFilter ref="A8:${r}${u}"/><mergeCells count="6">${[1,2,3,4,5,6].map(e=>`<mergeCell ref="A${e}:${r}${e}"/>`).join(``)}</mergeCells><pageMargins left="0.25" right="0.25" top="0.4" bottom="0.4" header="0.2" footer="0.2"/><pageSetup orientation="landscape" paperSize="9" fitToWidth="1" fitToHeight="0"/></worksheet>`),a.push(`<Override PartName="/xl/worksheets/sheet${t+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`),o.push(`<Relationship Id="rId${t+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${t+1}.xml"/>`),s.push(`<sheet name="${Xi(n)}" sheetId="${t+1}" r:id="rId${t+1}"/>`)}return i.file(`[Content_Types].xml`,`<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${a.join(``)}</Types>`),i.file(`_rels/.rels`,`<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`),i.file(`xl/workbook.xml`,`<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${s.join(``)}</sheets></workbook>`),i.file(`xl/_rels/workbook.xml.rels`,`<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${o.join(``)}<Relationship Id="rId9" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`),i.file(`xl/styles.xml`,`<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="3"><font><sz val="11"/><name val="Calibri"/><color rgb="FF60372E"/></font><font><b/><sz val="16"/><name val="Calibri"/><color rgb="FF792D39"/></font><font><b/><sz val="11"/><name val="Calibri"/><color rgb="FFFFFFFF"/></font></fonts><fills count="5"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF792D39"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFF1E5"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE47D32"/></patternFill></fill></fills><borders count="1"><border/></borders><cellStyleXfs count="1"><xf/></cellStyleXfs><cellXfs count="6"><xf numFmtId="49" fontId="0" fillId="0" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf><xf numFmtId="49" fontId="1" fillId="0" borderId="0"/><xf numFmtId="49" fontId="2" fillId="4" borderId="0"/><xf numFmtId="49" fontId="2" fillId="2" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf><xf numFmtId="49" fontId="0" fillId="0" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf><xf numFmtId="49" fontId="0" fillId="3" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`),i.generateAsync({type:`uint8array`,compression:`DEFLATE`},e=>t?.(e.percent))}function na(e,t){if(!/^IBACMI_VALIDATION_[A-Za-z0-9_.-]+\.xlsx$/.test(e)||!t?.length)throw Error(`Invalid validation report file`);let n=URL.createObjectURL(new Blob([t],{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`})),r=document.createElement(`a`);try{r.href=n,r.download=e,document.body.appendChild(r),r.click()}finally{r.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}}var ra=[[`lastName`,`Last Name`],[`firstName`,`First Name`],[`extensionName`,`Ext Name`],[`middleName`,`Middle Name`]],ia=e=>e===null?`Not recorded`:e||`—`;function aa(e){let t=(0,h.c)(31),{row:n,onClose:r}=e,i=(0,m.useRef)(null),a,o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=()=>{let e=i.current,t=document.activeElement;return e.showModal(),()=>{e.close(),t?.isConnected&&t.focus()}},o=[],t[0]=a,t[1]=o):(a=t[0],o=t[1]),(0,m.useEffect)(a,o);let s;t[2]===r?s=t[3]:(s=e=>{e.preventDefault(),e.stopPropagation(),r()},t[2]=r,t[3]=s);let c;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,v.jsx)(`h2`,{id:`validation-details-title`,children:`Student Validation Details`}),t[4]=c):c=t[4];let l;t[5]===r?l=t[6]:(l=(0,v.jsxs)(`header`,{children:[c,(0,v.jsx)(`button`,{type:`button`,onClick:r,"aria-label":`Close comparison details`,children:`×`})]}),t[5]=r,t[6]=l);let u;t[7]===n.status?u=t[8]:(u=(0,v.jsx)(`strong`,{children:n.status}),t[7]=n.status,t[8]=u);let d;t[9]!==n.schoolYear||t[10]!==u?(d=(0,v.jsxs)(`p`,{children:[u,` · `,n.schoolYear]}),t[9]=n.schoolYear,t[10]=u,t[11]=d):d=t[11];let f;t[12]===n.remarks?f=t[13]:(f=(0,v.jsx)(`p`,{children:n.remarks}),t[12]=n.remarks,t[13]=f);let p;t[14]===Symbol.for(`react.memo_cache_sentinel`)?(p=[[`uploaded`,`UPLOADED EXCEL DATA`],[`official`,`OFFICIAL CONVEX GRANTEE DATA`]],t[14]=p):p=t[14];let g;t[15]===n?g=t[16]:(g=(0,v.jsx)(`div`,{className:`validation-details__columns`,children:p.map(e=>{let[t,r]=e;return(0,v.jsxs)(`section`,{children:[(0,v.jsx)(`h3`,{children:r}),(0,v.jsx)(`dl`,{children:[[`studentId`,`Student ID`],[`batchId`,`Batch`],...ra].map(e=>{let[r,i]=e;return(0,v.jsxs)(`div`,{className:n.differences.includes(r)?`is-different`:``,children:[(0,v.jsx)(`dt`,{children:i}),(0,v.jsx)(`dd`,{children:n[t]?ia(n[t][r]):`—`})]},r)})})]},t)})}),t[15]=n,t[16]=g);let _;t[17]===n.candidates?_=t[18]:(_=n.candidates&&(0,v.jsxs)(`section`,{children:[(0,v.jsx)(`h3`,{children:`Official candidates — no record selected automatically`}),n.candidates.map(oa)]}),t[17]=n.candidates,t[18]=_);let y;t[19]!==g||t[20]!==_||t[21]!==d||t[22]!==f?(y=(0,v.jsxs)(`div`,{className:`validation-details__body`,children:[d,f,g,_]}),t[19]=g,t[20]=_,t[21]=d,t[22]=f,t[23]=y):y=t[23];let b;t[24]===r?b=t[25]:(b=(0,v.jsx)(`footer`,{children:(0,v.jsx)(`button`,{type:`button`,onClick:r,children:`Close`})}),t[24]=r,t[25]=b);let x;return t[26]!==y||t[27]!==b||t[28]!==s||t[29]!==l?(x=(0,v.jsxs)(`dialog`,{ref:i,className:`validation-details`,"aria-labelledby":`validation-details-title`,onCancel:s,children:[l,y,b]}),t[26]=y,t[27]=b,t[28]=s,t[29]=l,t[30]=x):x=t[30],x}function oa(e,t){return(0,v.jsxs)(`p`,{children:[e.studentId,` · `,e.batchId,` · `,e.lastName,`, `,e.firstName,` `,e.middleName]},t)}function sa({sessionToken:e}){let t=Mr($.validation.options,e?{sessionToken:e}:`skip`),n=Fr($.validationActions.run),r=Fr($.validationActions.results),[i,a]=(0,m.useState)(``),[o,s]=(0,m.useState)([]),[c,l]=(0,m.useState)(``),[u,d]=(0,m.useState)(null),[f,p]=(0,m.useState)(``),[h,g]=(0,m.useState)(``),[_,b]=(0,m.useState)(``),[x,S]=(0,m.useState)(void 0),[C,w]=(0,m.useState)(``),[T,E]=(0,m.useState)(null),[D,O]=(0,m.useState)(null),[k,A]=(0,m.useState)(``),[j,M]=(0,m.useState)(``),[N,P]=(0,m.useState)(``),[F,I]=(0,m.useState)(``),[L,R]=(0,m.useState)(`batch`),[z,B]=(0,m.useState)(1),[V,H]=(0,m.useState)(null),[U,W]=(0,m.useState)(``),K=Mr($.validation.history,e?{sessionToken:e,search:U.slice(0,200)}:`skip`),q=(0,m.useRef)(null),J=(0,m.useRef)(0),Y=(0,m.useRef)(!1),X=(0,m.useRef)(!0),ee=(0,m.useRef)(null),Z=t?.find(e=>e.schoolYear===i)?.batches||[],Q=o.filter(e=>Z.some(t=>t.id===e)),te=K?.find(e=>e._id===C)||(D?._id===C?D:null),ne=JSON.stringify([e,C,j,N,F,L,z]),re=T?.key===ne?T.report:null,ie=T?.key===ne?T.error:``;(0,m.useEffect)(()=>(X.current=!0,()=>{X.current=!1,q.current?.terminate()}),[]),(0,m.useEffect)(()=>{let e=setTimeout(()=>M(k),250);return()=>clearTimeout(e)},[k]),(0,m.useEffect)(()=>{if(!C)return;let t=!0;return r({sessionToken:e,runId:C,search:j,status:N,batch:F,sort:L,page:z}).then(e=>{t&&E({key:ne,report:e})}).catch(e=>{t&&E({key:ne,error:G(e,`Unable to load validation results.`,`validation.results`)})}),()=>{t=!1}},[e,C,j,N,F,L,z,ne,r]);let ae=async e=>{let t=e.target.files?.[0];if(!t||Y.current)return;q.current?.terminate();let n=++J.current;if(d(null),b(``),g(``),!/\.(xlsx|xls|csv)$/i.test(t.name)||!t.size||t.size>5*1024*1024){b(`Choose a nonempty .xlsx, .xls, or .csv file no larger than 5 MB.`);return}p(`Reading uploaded Excel file...`);try{let e=await t.arrayBuffer();if(!X.current||n!==J.current)return;let r=new Worker(new URL(`/IBACMI-Scholarship-Office/assets/validationWorker-dzDNot3w.js`,``+import.meta.url),{type:`module`});q.current=r;let i=await new Promise((n,i)=>{let a=setTimeout(()=>{r.terminate(),i(Error(`Reading took too long. Simplify the workbook or save it as CSV.`))},15e3);r.onmessage=e=>{clearTimeout(a),r.terminate(),e.data.ok?n(e.data.parsed):i(Error(e.data.message))},r.onerror=()=>{clearTimeout(a),r.terminate(),i(Error(`The spreadsheet could not be read.`))},r.postMessage({bytes:e,filename:t.name})});X.current&&n===J.current&&d({filename:t.name,bytes:e,parsed:i})}catch(e){X.current&&n===J.current&&b(e.message)}finally{X.current&&n===J.current&&(p(``),ee.current&&(ee.current.value=``))}},oe=()=>{A(``),M(``),P(``),I(``),B(1)},se=async()=>{if(!(Y.current||!u||!i||!Q.length)){Y.current=!0,b(``),g(``),p(`Checking official grantee records...`);try{let t=await n({sessionToken:e,schoolYear:i,batches:Q,filename:u.filename,bytes:u.bytes});if(!X.current)return;if(!t.ok){b(t.message);return}p(`Preparing validation results...`),oe(),O({_id:t.runId,schoolYear:i,batches:Q,summary:t.summary,retained:!0}),w(t.runId),g(`Validation completed. Official grantee records were preserved.`)}catch(e){X.current&&b(G(e,`Unable to validate the spreadsheet.`,`validation.run`))}finally{Y.current=!1,X.current&&p(``)}}},ce=async t=>{if(!Y.current){Y.current=!0,b(``),g(``),S(void 0),p(`Generating Excel report...`);try{let n=await r({sessionToken:e,runId:t,download:!0}),i=await ta(n,e=>{X.current&&S(e<100?e:void 0)});if(!X.current)return;na(n.exportFilename,i),g(`Your validation report is ready!`)}catch(e){X.current&&b(G(e,`Unable to prepare the Excel report.`,`validation.download`))}finally{Y.current=!1,X.current&&(p(``),S(void 0))}}},le=re?.summary||te?.summary,ue=le?[[`Uploaded Records`,le.uploaded],[`Official Grantee Records`,le.official],[`Matched`,le.MATCHED],[`Mismatched`,le.MISMATCHED],[`Not Found`,le[`NOT FOUND`]],[`Duplicate`,le.DUPLICATE],[`Missing from Upload`,le[`MISSING FROM UPLOAD`]],[`Invalid / Ambiguous`,le[`INVALID DATA`]+le[`AMBIGUOUS MATCH`]]]:[];return(0,v.jsxs)(`div`,{className:`validation-page admin-container`,children:[(0,v.jsxs)(`header`,{className:`validation-heading`,children:[(0,v.jsx)(`span`,{children:`IBACMI Scholarship Office`}),(0,v.jsx)(`h1`,{children:`Validation Management`}),(0,v.jsx)(`p`,{children:`Upload and verify student records against the official grantee database.`})]}),f&&(0,v.jsx)(y,{variant:`compact`,message:f,detail:f===`Checking official grantee records...`?`Comparing student information...`:void 0,progress:x}),_&&(0,v.jsx)(`p`,{className:`validation-notice is-error`,role:`alert`,children:_}),h&&(0,v.jsx)(`p`,{className:`validation-notice`,role:`status`,children:h}),(0,v.jsxs)(`div`,{className:`validation-setup`,children:[(0,v.jsxs)(`section`,{className:`validation-card`,children:[(0,v.jsx)(`h2`,{children:`Excel Upload`}),(0,v.jsxs)(`label`,{className:`validation-upload`,children:[`Choose Excel or CSV file`,(0,v.jsx)(`input`,{ref:ee,type:`file`,accept:`.xlsx,.xls,.csv`,disabled:!!f,onChange:ae}),(0,v.jsx)(`span`,{children:u?.filename||`XLSX, XLS, or CSV · up to 5 MB and 10,000 rows`})]}),(0,v.jsx)(`p`,{children:`Required columns: BATCH NO., STUDENT ID, LAST NAME, FIRST NAME, EXT NAME, MIDDLE NAME.`}),(0,v.jsx)(`p`,{children:`Use text cells for Student IDs. Formulas and ambiguous column mappings require correction.`}),u&&(0,v.jsxs)(`p`,{children:[(0,v.jsxs)(`strong`,{children:[u.parsed.rows.length.toLocaleString(),` records`]}),` · `,u.parsed.sheetName]}),u?.parsed.warnings.map(e=>(0,v.jsx)(`p`,{className:`validation-warning`,children:e},e))]}),(0,v.jsxs)(`section`,{className:`validation-card`,children:[(0,v.jsx)(`h2`,{children:`Official Grantee Scope`}),(0,v.jsxs)(`label`,{children:[`Select School Year`,(0,v.jsxs)(`select`,{value:i,"aria-label":`Select School Year`,disabled:!t||!!f,onChange:e=>{a(e.target.value),s([]),l(``)},children:[(0,v.jsx)(`option`,{value:``,children:`Choose school year`}),t?.map(e=>(0,v.jsx)(`option`,{children:e.schoolYear},e.schoolYear))]})]}),(0,v.jsxs)(`h3`,{children:[`Select Batch Numbers `,(0,v.jsxs)(`span`,{children:[Q.length,` selected`]})]}),(0,v.jsxs)(`label`,{children:[`Search Batch`,(0,v.jsx)(`input`,{type:`search`,disabled:!!f,value:c,onChange:e=>l(e.target.value)})]}),(0,v.jsxs)(`div`,{className:`validation-actions`,children:[(0,v.jsx)(`button`,{type:`button`,disabled:!Z.length||!!f,onClick:()=>s(Z.map(e=>e.id)),children:`Select All`}),(0,v.jsx)(`button`,{type:`button`,disabled:!!f,onClick:()=>s([]),children:`Deselect All`})]}),(0,v.jsxs)(`div`,{className:`validation-batches`,children:[Z.filter(e=>e.id.toLowerCase().includes(c.trim().toLowerCase())).map(e=>(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`input`,{type:`checkbox`,disabled:!!f,checked:Q.includes(e.id),onChange:t=>s(t.target.checked?[...new Set([...Q,e.id])]:Q.filter(t=>t!==e.id))}),(0,v.jsxs)(`span`,{children:[`Batch `,e.id]}),(0,v.jsxs)(`strong`,{children:[e.count,` records`]})]},e.id)),!i&&(0,v.jsx)(`p`,{children:`Choose a school year to load official batches.`})]}),(0,v.jsx)(`p`,{children:`Select All includes batches hidden by search.`}),(0,v.jsx)(`p`,{children:`Official name components that are not recorded require review. Full middle names are never inferred from initials.`}),(0,v.jsx)(`button`,{type:`button`,className:`validation-primary`,disabled:!!f||!u||!i||!Q.length,onClick:se,children:`Start Validation`})]})]}),u&&(0,v.jsxs)(`section`,{className:`validation-card`,children:[(0,v.jsx)(`h2`,{children:`Uploaded File Preview`}),(0,v.jsx)(`p`,{children:`First 10 rows · the server validates the original file again before comparison.`}),(0,v.jsx)(`div`,{className:`validation-table-scroll`,role:`region`,"aria-label":`Uploaded file preview`,tabIndex:`0`,children:(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsx)(`tr`,{children:[`Source Row`,`Batch No.`,`Student ID`,`Last Name`,`First Name`,`Ext Name`,`Middle Name`,`Input Issues`].map(e=>(0,v.jsx)(`th`,{children:e},e))})}),(0,v.jsx)(`tbody`,{children:u.parsed.rows.slice(0,10).map(e=>(0,v.jsx)(`tr`,{children:[e.sourceRow,e.batchId,e.studentId,e.lastName,e.firstName,e.extensionName,e.middleName,e.issues.join(` `)].map((e,t)=>(0,v.jsx)(`td`,{children:ia(e)},t))},e.sourceRow))})]})})]}),le&&(0,v.jsx)(`section`,{className:`validation-summary`,"aria-label":`Validation summary`,children:ue.map(([e,t])=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{children:e}),(0,v.jsx)(`strong`,{children:Number(t||0).toLocaleString()})]},e))}),C&&(0,v.jsxs)(`section`,{className:`validation-card`,children:[(0,v.jsxs)(`div`,{className:`validation-section-heading`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h2`,{children:`Comparison Results`}),(0,v.jsxs)(`p`,{children:[`Run `,C,` · `,te?.schoolYear,` · `,te?.batches.join(`, `)]})]}),(0,v.jsx)(`button`,{type:`button`,className:`validation-primary`,disabled:!!f||!te?.retained,onClick:()=>ce(C),children:`Download Excel Report`})]}),(0,v.jsxs)(`div`,{className:`validation-filters`,children:[(0,v.jsxs)(`label`,{children:[`Search Student ID or Name`,(0,v.jsx)(`input`,{type:`search`,value:k,onChange:e=>{A(e.target.value),B(1)}})]}),(0,v.jsxs)(`label`,{children:[`Status`,(0,v.jsxs)(`select`,{value:N,onChange:e=>{P(e.target.value),B(1)},children:[(0,v.jsx)(`option`,{value:``,children:`All statuses`}),Yi.map(e=>(0,v.jsx)(`option`,{children:e},e))]})]}),(0,v.jsxs)(`label`,{children:[`Batch`,(0,v.jsxs)(`select`,{value:F,onChange:e=>{I(e.target.value),B(1)},children:[(0,v.jsx)(`option`,{value:``,children:`All selected batches`}),te?.batches.map(e=>(0,v.jsx)(`option`,{children:e},e))]})]}),(0,v.jsxs)(`label`,{children:[`Sort by`,(0,v.jsxs)(`select`,{value:L,onChange:e=>R(e.target.value),children:[(0,v.jsx)(`option`,{value:`batch`,children:`Batch`}),(0,v.jsx)(`option`,{value:`status`,children:`Status`})]})]})]}),!re&&!ie&&(0,v.jsx)(y,{variant:`compact`,message:`Preparing validation results...`}),ie&&(0,v.jsx)(`p`,{role:`alert`,children:ie}),re?.warnings.map(e=>(0,v.jsx)(`p`,{className:`validation-warning`,children:e},e)),re&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`validation-table-scroll`,role:`region`,"aria-label":`Comparison results`,tabIndex:`0`,children:(0,v.jsxs)(`table`,{className:`validation-comparison`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`No.`}),(0,v.jsx)(`th`,{children:`Batch Number`}),(0,v.jsx)(`th`,{children:`Student ID`}),ra.flatMap(([,e])=>[(0,v.jsxs)(`th`,{children:[`Uploaded `,e]},`u${e}`),(0,v.jsxs)(`th`,{children:[`Official `,e]},`o${e}`)]),(0,v.jsx)(`th`,{children:`Validation Status`}),(0,v.jsx)(`th`,{children:`Remarks`})]})}),(0,v.jsxs)(`tbody`,{children:[re.rows.map((e,t)=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(re.page-1)*10+t+1}),(0,v.jsx)(`td`,{children:e.batchId}),(0,v.jsx)(`td`,{children:e.studentId}),ra.flatMap(([t])=>[`uploaded`,`official`].map(n=>(0,v.jsx)(`td`,{className:e.differences.includes(t)?`is-different`:``,children:e[n]?ia(e[n][t]):`—`},`${t}-${n}`))),(0,v.jsx)(`td`,{children:(0,v.jsx)(`button`,{type:`button`,className:`validation-status status-${e.status.toLowerCase().replaceAll(` `,`-`)}`,onClick:()=>H(e),title:`View detailed comparison`,children:e.status})}),(0,v.jsx)(`td`,{children:e.remarks})]},`${re.page}-${t}`)),!re.rows.length&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{colSpan:`13`,children:`No comparison results match these filters.`})})]})]})}),(0,v.jsxs)(`div`,{className:`validation-pagination`,children:[(0,v.jsx)(`button`,{type:`button`,disabled:re.page<=1,onClick:()=>B(re.page-1),children:`Previous`}),(0,v.jsxs)(`span`,{children:[re.total,` results · Page `,re.page,` of `,re.pages]}),(0,v.jsx)(`button`,{type:`button`,disabled:re.page>=re.pages,onClick:()=>B(re.page+1),children:`Next`})]}),(0,v.jsx)(`p`,{children:`Excel exports the complete validation run, including all pages and result categories.`})]})]}),(0,v.jsxs)(`section`,{className:`validation-card`,children:[(0,v.jsx)(`h2`,{children:`Validation History`}),(0,v.jsx)(`p`,{children:`Detailed results are retained for 30 days; summary metadata is retained for 12 months.`}),(0,v.jsxs)(`label`,{children:[`Search History`,(0,v.jsx)(`input`,{type:`search`,value:U,onChange:e=>W(e.target.value)})]}),K===void 0&&(0,v.jsx)(y,{variant:`compact`,message:`Loading validation history...`}),(0,v.jsxs)(`div`,{className:`validation-history`,children:[K?.filter(e=>[e._id,e.filename,e.schoolYear,e.batches.join(` `),e.uploadedBy].join(` `).toLowerCase().includes(U.toLowerCase())).map(e=>(0,v.jsxs)(`article`,{children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:e.filename}),(0,v.jsxs)(`span`,{children:[e.schoolYear,` · `,e.batches.join(`, `),` · `,e.uploadedBy]}),(0,v.jsxs)(`span`,{children:[new Date(e.createdAt).toLocaleString(`en-PH`,{timeZone:`Asia/Manila`}),` · `,e.status]}),(0,v.jsxs)(`span`,{children:[e.summary.uploaded,` uploaded · `,e.summary.MATCHED,` matched · `,e.summary.MISMATCHED,` mismatched · `,e.summary[`NOT FOUND`],` not found · `,e.summary.DUPLICATE,` duplicate · `,e.summary[`MISSING FROM UPLOAD`],` missing`]}),(0,v.jsxs)(`small`,{children:[`Run `,e._id,e.retained?``:` · Detailed results expired`]})]}),(0,v.jsxs)(`div`,{className:`validation-actions`,children:[(0,v.jsx)(`button`,{type:`button`,disabled:!e.retained||!!f,onClick:()=>{oe(),w(e._id)},children:`View results`}),(0,v.jsx)(`button`,{type:`button`,disabled:!e.retained||!!f,onClick:()=>ce(e._id),children:`Download report`})]})]},e._id)),K?.length===0&&(0,v.jsx)(`p`,{children:`No validation runs yet.`})]})]}),V&&(0,v.jsx)(aa,{row:V,onClose:()=>H(null)})]})}function ca(e){let t=(0,h.c)(3),{name:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r={edit:`m16 3 5 5-13 13H3v-5L16 3 M13 6l5 5`,delete:`M3 6h18 M9 6V3h6v3 M5 6l1 15h12l1-15 M10 10v7 M14 10v7`,close:`m6 6 12 12 M18 6 6 18`,search:`M21 21l-5-5 M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0`,previous:`m15 6-6 6 6 6`,next:`m9 6 6 6-6 6`},t[0]=r):r=t[0];let i=r[n],a;return t[1]===i?a=t[2]:(a=(0,v.jsx)(`svg`,{"aria-hidden":`true`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,v.jsx)(`path`,{d:i})}),t[1]=i,t[2]=a),a}function la({user:e,onClose:t,onEdit:n,onDelete:r}){let i=(0,m.useRef)(null);(0,m.useEffect)(()=>{i.current.showModal()},[]);let a=(e,t)=>(0,v.jsxs)(`section`,{children:[(0,v.jsx)(`h3`,{children:e}),(0,v.jsx)(`dl`,{children:t.map(([e,t])=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:e}),(0,v.jsx)(`dd`,{children:t?.trim()||`Not provided`})]},e))})]});return(0,v.jsxs)(`dialog`,{ref:i,className:`student-account-details`,"aria-labelledby":`student-account-details-title`,onCancel:t,onClick:e=>{if(e.target===i.current){let n=i.current.getBoundingClientRect();(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)&&t()}},children:[(0,v.jsxs)(`header`,{children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{children:`Student Accounts`}),(0,v.jsx)(`h2`,{id:`student-account-details-title`,children:`Student Account Details`})]}),(0,v.jsx)(`button`,{type:`button`,"aria-label":`Close student account details`,onClick:t,children:`×`})]}),(0,v.jsxs)(`div`,{className:`student-account-details-body`,children:[a(`Personal Information`,[[`Student ID`,e.schoolId],[`Last Name`,e.lastName],[`First Name`,e.firstName],[`Middle Name`,e.middleName],[`Complete Name`,e.completeName]]),a(`Contact Information`,[[`Complete Permanent Address`,e.currentAddress],[`Email Address`,e.email],[`Phone Number`,e.phoneNumber],[`Facebook Profile`,e.facebookProfileUrl]])]}),(0,v.jsxs)(`footer`,{children:[(0,v.jsx)(`button`,{type:`button`,onClick:t,children:`Close`}),(0,v.jsx)(`button`,{type:`button`,onClick:()=>n(e),children:`Edit Account`}),(0,v.jsx)(`button`,{type:`button`,className:`student-account-delete`,onClick:()=>r(e),children:`Delete Account`})]})]})}var ua=5,da=5,fa=5,pa=7,ma=5,ha=5,ga=5,_a=10,va=10,ya=5,ba=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``),xa=[`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`];function Sa(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}var Ca=[`No.`,`TES Award Number`,`Student ID`,`Last Name`,`First Name`,`MI.`,`batch No.`,`Status`,`Semester`,`School Year`];function wa(e){let t=(0,h.c)(4),{status:n,tone:r}=e,i=`admin-status admin-status--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,v.jsx)(`span`,{className:`admin-status__dot`}),t[0]=a):a=t[0];let o=n||`—`,s;return t[1]!==i||t[2]!==o?(s=(0,v.jsxs)(`span`,{className:i,children:[a,o]}),t[1]=i,t[2]=o,t[3]=s):s=t[3],s}function Ta(e=``){let t=e.toLowerCase();return t.includes(`grantee`)?`grantee`:t.includes(`applicant`)?`applicant`:t.includes(`complete`)||t.includes(`resolved`)||t.includes(`valid`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function Ea(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function Da(e){return`"${String(e??``).replaceAll(`"`,`""`)}"`}function Oa(e,t){if(!Array.isArray(t)||t.length<2)throw Error(`No applicant rows are available to download.`);let n=t.map(e=>e.map(Da).join(`,`)).join(`
`),r=new Blob([n],{type:`text/csv;charset=utf-8`});if(!r.size)throw Error(`The applicant CSV file could not be generated.`);let i=URL.createObjectURL(r),a=document.createElement(`a`);return a.href=i,a.download=e,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(i),!0}function ka(){let e=[Ca,[`1`,`TES-2024-0001`,`2024-UNI-0001`,`Dela Cruz`,`Juan`,`P`,`2024-01`,`Pending`,`1st Semester`,`2024-2025`]].map(e=>e.map(e=>`"${e.replaceAll(`"`,`""`)}"`).join(`,`)).join(`
`),t=new Blob([e],{type:`text/csv;charset=utf-8`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`tdp-grantee-template.csv`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function Aa(e,t){return String(e??``).trim().replace(/[^a-z0-9-]+/gi,`-`).replace(/^-+|-+$/g,``)||t}function ja(e,t){for(let n of[`lastName`,`firstName`,`middleInitial`,`studentId`]){let r=String(e?.[n]??``).localeCompare(String(t?.[n]??``),void 0,{numeric:!0,sensitivity:`base`});if(r!==0)return r}return 0}function Ma(e){return String(e?.course??e?.program??e?.degreeProgram??``).trim()}function Na(e){let t=String(e?.applicationYear??``).trim();if(t)return t;let n=e?.submittedAt;return n?String(new Date(n).getFullYear()):``}function Pa(e,t=``){return[`Application Year,Course,Student ID,LRN,PhilSys ID Number,4Ps ID Number,Last Name,First Name,Ext Name,Middle Name,Gender,Sex Code,Birth Date,Year,Year Level Code,Father Last Name,Father First Name,Father Middle Name,Mother Last Name,Mother First Name,Mother Middle Name,Address,Street / Barangay,City / Municipality,Province,Region,Zip Code,PWD ID,Has Disability,Disability Type,Solo Parent Dependent Code,First Generation Code,Indigenous Peoples Member,Indigenous Group,Applicant Classification,PWD ID PDF,4Ps ID PDF,COR / Study Load PDF,Mobile No.,Email Address,Status,Submitted At`.split(`,`),...e.map(e=>[Na(e),Ma(e)||t,e.studentId??``,e.lrn??``,e.philSysIdNumber??``,e.fourPsIdNumber??``,e.lastName??``,e.firstName??``,e.extensionName??``,e.middleName??``,e.gender??``,e.sexCode??``,e.birthDate??``,e.year??``,e.yearLevelCode??``,e.fatherLastName??``,e.fatherFirstName??``,e.fatherMiddleName??``,e.motherLastName??``,e.motherFirstName??``,e.motherMiddleName??``,e.address??``,e.streetBarangay??``,e.cityMunicipality??``,e.province??``,e.region??``,e.zipCode??``,e.pwdId??``,e.hasDisability===void 0?``:e.hasDisability?`Yes`:`No`,e.disabilityType??``,e.soloParentDependent??``,e.firstGeneration??``,e.isIndigenous===void 0?``:e.isIndigenous?`Yes`:`No`,e.indigenousGroup??``,e.applicantClassification??``,e.pwdIdFileName??``,e.fourPsFileName??``,e.corFileName??``,e.mobileNumber??``,e.emailAddress??``,e.status??``,Ea(e.submittedAt)])]}function Fa(e,t){if(t<=5)return Array.from({length:t},(e,t)=>t+1);let n=[1],r=Math.max(2,e-1),i=Math.min(t-1,e+1);r>2&&n.push(`left-ellipsis`);for(let e=r;e<=i;e+=1)n.push(e);return i<t-1&&n.push(`right-ellipsis`),n.push(t),n}function Ia(e,t){if(e===`application/pdf`)return`.pdf`;if(e===`image/png`)return`.png`;if(e===`image/jpeg`)return`.jpg`;try{let e=new URL(t).pathname.match(/\.(pdf|png|jpe?g)$/i);return e?`.${e[1].toLowerCase().replace(`jpeg`,`jpg`)}`:``}catch{return``}}async function La(e,t){let n=`${ba}/google-drive/file?url=${encodeURIComponent(e.frontIdUrl)}`,r=await fetch(n,{signal:AbortSignal.timeout(12e4)});if(!r.ok)throw Error(`Unable to download School ID file for ${e.studentId||`student`}.`);let i=await r.blob(),a=new Uint8Array(await i.arrayBuffer()),o=Aa(e.studentId,`student-${t+1}`),s=Aa(e.lastName,`no-last-name`),c=Aa(e.firstName,`no-first-name`),l=Aa(e.middleInitial,`no-middle-name`),u=Aa(e.batchId,`no-batch`),d=Ia(i.type,e.frontIdUrl);return{bytes:a,name:`${s}-${c}-${l}-student-id-${o}-batch-${u}-${t+1}${d}`}}function Ra(){return Array.from({length:256},(e,t)=>{let n=t;for(let e=0;e<8;e+=1)n=n&1?3988292384^n>>>1:n>>>1;return n>>>0})}var za=Ra(),Ba=new TextEncoder;function Va(e){let t=4294967295;for(let n of e)t=za[(t^n)&255]^t>>>8;return(t^4294967295)>>>0}function Ha(){let e=new Date,t=e.getHours()<<11|e.getMinutes()<<5|Math.floor(e.getSeconds()/2);return{date:e.getFullYear()-1980<<9|e.getMonth()+1<<5|e.getDate(),time:t}}function Ua(e,t,n,r){if(n===2){e.setUint16(t,r,!0);return}e.setUint32(t,r>>>0,!0)}function Wa(e){let{date:t,time:n}=Ha(),r=[],i=[],a=0;e.forEach(e=>{let o=Ba.encode(e.name),s=Va(e.bytes),c=new Uint8Array(30+o.length),l=new DataView(c.buffer);Ua(l,0,4,67324752),Ua(l,4,2,20),Ua(l,8,2,0),Ua(l,10,2,n),Ua(l,12,2,t),Ua(l,14,4,s),Ua(l,18,4,e.bytes.length),Ua(l,22,4,e.bytes.length),Ua(l,26,2,o.length),c.set(o,30),r.push(c,e.bytes);let u=new Uint8Array(46+o.length),d=new DataView(u.buffer);Ua(d,0,4,33639248),Ua(d,4,2,20),Ua(d,6,2,20),Ua(d,10,2,0),Ua(d,12,2,n),Ua(d,14,2,t),Ua(d,16,4,s),Ua(d,20,4,e.bytes.length),Ua(d,24,4,e.bytes.length),Ua(d,28,2,o.length),Ua(d,42,4,a),u.set(o,46),i.push(u),a+=c.length+e.bytes.length});let o=i.reduce((e,t)=>e+t.length,0),s=new Uint8Array(22),c=new DataView(s.buffer);return Ua(c,0,4,101010256),Ua(c,8,2,e.length),Ua(c,10,2,e.length),Ua(c,12,4,o),Ua(c,16,4,a),new Blob([...r,...i,s],{type:`application/zip`})}function Ga(e){return e.replaceAll(`\xA0`,` `).trim()}function Ka(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a+=1){let o=e[a],s=e[a+1];o===`"`&&i&&s===`"`?(r+=`"`,a+=1):o===`"`?i=!i:o===`,`&&!i?(n.push(Ga(r)),r=``):(o===`
`||o===`\r`)&&!i?(o===`\r`&&s===`
`&&(a+=1),n.push(Ga(r)),n.some(Boolean)&&t.push(n),n=[],r=``):r+=o}return n.push(Ga(r)),n.some(Boolean)&&t.push(n),t}function qa(e){return Ka(e).filter(e=>e.some(Boolean)).filter(e=>!e.join(` `).toLowerCase().includes(`tes award number`)).map(e=>({no:e[0]??``,tesAwardNumber:e[1]??``,studentId:e[2]??``,lastName:e[3]??``,firstName:e[4]??``,middleInitial:e[5]??``,batchId:e[6]??``,status:e[7]??``,semester:e[8]??``,schoolYear:e[9]??``})).filter(e=>e.no&&e.tesAwardNumber&&e.studentId&&e.lastName&&e.firstName&&e.batchId&&e.status&&e.semester&&e.schoolYear)}function Ja({adminSession:e,onLogout:t}){let[n,r]=(0,m.useState)(!1),[i,a]=(0,m.useState)(!1),[o,s]=(0,m.useState)(!1),[c,l]=(0,m.useState)(`dashboard`),[u,d]=(0,m.useState)(0),[f,p]=(0,m.useState)(!1),[h,g]=(0,m.useState)(!1),[_,b]=(0,m.useState)(``),[x,S]=(0,m.useState)(``),[C,w]=(0,m.useState)(1),[T,E]=(0,m.useState)(null),[D,O]=(0,m.useState)(``),[k,A]=(0,m.useState)(!1),[j,M]=(0,m.useState)(!1),[N,P]=(0,m.useState)(null),[F,I]=(0,m.useState)(null),[L,R]=(0,m.useState)(null),[z,V]=(0,m.useState)({email:``,phoneNumber:``}),[H,U]=(0,m.useState)(``),[W,K]=(0,m.useState)(!1),[q,J]=(0,m.useState)(!1),[Y,X]=(0,m.useState)(1),[ee,Z]=(0,m.useState)(``),[Q,te]=(0,m.useState)(!1),[ne,re]=(0,m.useState)(!1),[ie,ae]=(0,m.useState)(!1),[oe,se]=(0,m.useState)(``),[ce,le]=(0,m.useState)(``),[ue,de]=(0,m.useState)(``),[fe,pe]=(0,m.useState)(``),[me,he]=(0,m.useState)(1),[ge,_e]=(0,m.useState)(null),[ve,ye]=(0,m.useState)(`all`),[be,xe]=(0,m.useState)([]),[Se,Ce]=(0,m.useState)(``),[we,Te]=(0,m.useState)(``),[Ee,De]=(0,m.useState)(!1),[Oe,ke]=(0,m.useState)(``),[Ae,je]=(0,m.useState)(!1),[Me,Ne]=(0,m.useState)(!1),[Pe,Fe]=(0,m.useState)(!1),[Ie,Le]=(0,m.useState)(!1),[Re,ze]=(0,m.useState)(!1),[Be,Ve]=(0,m.useState)(``),[He,Ue]=(0,m.useState)(null),[We,Ge]=(0,m.useState)(!1),[Ke,qe]=(0,m.useState)(!1),[Je,Ye]=(0,m.useState)(!1),[Xe,Ze]=(0,m.useState)(null),[Qe,$e]=(0,m.useState)(null),[et,tt]=(0,m.useState)(null),[nt,rt]=(0,m.useState)(``),[it,at]=(0,m.useState)(``),[ot,st]=(0,m.useState)(!1),[ct,lt]=(0,m.useState)(!1),[ut,dt]=(0,m.useState)(!1),[ft,pt]=(0,m.useState)(1),[mt,ht]=(0,m.useState)([]),[gt,_t]=(0,m.useState)(null),[vt,yt]=(0,m.useState)(null),[bt,xt]=(0,m.useState)(``),[St,Ct]=(0,m.useState)(!1),[wt,Tt]=(0,m.useState)(``),[Et,Dt]=(0,m.useState)(``),[Ot,kt]=(0,m.useState)(``),[At,jt]=(0,m.useState)(``),[Mt,Nt]=(0,m.useState)(0),[Pt,Ft]=(0,m.useState)(1),[It,Lt]=(0,m.useState)(1),[Rt,zt]=(0,m.useState)(1),[Bt,Vt]=(0,m.useState)(1),[Ht,Ut]=(0,m.useState)(``),[Wt,Gt]=(0,m.useState)(!1),[Kt,qt]=(0,m.useState)(!1),[Jt,Yt]=(0,m.useState)(!1),[Xt,Zt]=(0,m.useState)(null),[Qt,$t]=(0,m.useState)(1),[en,tn]=(0,m.useState)(1),nn=Mr($.quickActions.list,e?.sessionToken?{sessionToken:e.sessionToken}:`skip`),rn=Pr($.support.logout),an=Mr($.activityLogs.list),on=Mr($.archive.list,h?{}:`skip`),sn=Mr($.allinfo.list,{refreshVersion:Mt}),cn=Mr($.applicants.list,e?.sessionToken?{sessionToken:e.sessionToken}:`skip`),ln=Mr($.applicantPortal.get),un=Mr($.adminAuth.listStudentAccounts,e?.sessionToken?{sessionToken:e.sessionToken}:`skip`),dn=Pr($.applicantPortal.setReceivingApplicants),fn=Pr($.allinfo.bulkCreate),pn=Pr($.allinfo.update),mn=Pr($.allinfo.deleteMany),hn=Pr($.activityLogs.clearAll),gn=Pr($.archive.restore),_n=Fr($.archive.remove),vn=Fr($.allinfo.deleteSchoolIdFilesByBatch),yn=Fr($.applicants.deleteAllByCourse),bn=Fr($.applicants.exportCourseApplicants),xn=Pr($.adminAuth.updateStudentAccount),Sn=Pr($.adminAuth.deleteStudentAccount),{operation:Cn,run:wn,retry:Tn}=Or(),En=(e,t)=>wn(`Generating CSV report…`,async()=>Oa(e,t)).catch(()=>!1),Dn=()=>{wn(`Preparing grantee template…`,async()=>ka()).catch(()=>{})},On=f||h||k||j||!!N||!!L||Q||ne||ie||Ee||!!Oe||Wt||Jt||Kt||!!Xt||Ae||Me||Pe||!!Qe||Ie||!!Be||!!He||We||Ke||Je||!!Xe||!!gt,kn=async()=>{try{e?.sessionToken&&await rn({sessionToken:e.sessionToken})}catch{}finally{t?.()}},An=(0,m.useMemo)(()=>sn??[],[sn]),jn=nn??[],Mn=an??[],Nn=(0,m.useMemo)(()=>on??[],[on]),Pn=(0,m.useMemo)(()=>cn??[],[cn]),Fn=(0,m.useMemo)(()=>un??[],[un]),In=ln?.applicationYear,Ln=String(In??new Date().getFullYear()),Rn=Mr($.applicants.getCourseCounts,ie&&e?.sessionToken?{sessionToken:e.sessionToken,applicationYear:Ln}:`skip`),zn=xa.filter(e=>e.toLowerCase().includes(Se.trim().toLowerCase())),Bn=Rn?ve===`all`?Rn.totalCount:be.reduce((e,t)=>e+(Rn.counts?.[t]??0),0):0,Vn=(0,m.useMemo)(()=>Array.from(new Set(Pn.map(e=>Ma(e)).filter(Boolean))).sort((e,t)=>e.localeCompare(t)),[Pn]),Hn=(0,m.useMemo)(()=>Array.from(new Set(Pn.map(e=>Na(e)).filter(Boolean))).sort((e,t)=>t.localeCompare(e,void 0,{numeric:!0})),[Pn]),Un=(0,m.useMemo)(()=>Array.from(new Set(Pn.map(e=>String(e.status??``).trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t)),[Pn]),Wn=(0,m.useMemo)(()=>{let e=oe.trim().toLowerCase();return Pn.filter(t=>{let n=[t.firstName,t.middleName,t.lastName,t.extensionName].filter(Boolean).join(` `),r=[t.studentId,n,t.course,t.year,t.applicationYear,t.emailAddress,t.mobileNumber,t.status].map(e=>String(e??``).toLowerCase()).join(` `);return(!e||r.includes(e))&&(!ce||Ma(t)===ce)&&(!ue||Na(t)===ue)&&(!fe||String(t.status??``).trim()===fe)})},[Pn,oe,ce,ue,fe]),Gn=Math.max(1,Math.ceil(Wn.length/va)),Kn=Math.min(me,Gn),qn=(Kn-1)*va,Jn=Wn.slice(qn,qn+va),Yn=Fa(Kn,Gn),Xn=Wn.length?qn+1:0,Zn=qn+Jn.length,Qn=(0,m.useMemo)(()=>{let e=new Date().getFullYear(),t=new Set([String(e-1),String(e),String(e+1),String(e+2),String(e+3),String(e+4),String(e+5)]);return In&&t.add(String(In)),Pn.forEach(e=>{let n=Na(e);n&&t.add(n)}),Array.from(t).sort()},[Pn,In]),$n=Math.max(1,Math.ceil(Qn.length/ya)),er=Math.min(en,$n),tr=(er-1)*ya,nr=Qn.slice(tr,tr+ya),rr=Fa(er,$n),ir=Qn.length===0?0:tr+1,ar=tr+nr.length,or=(0,m.useMemo)(()=>Array.from(new Set(An.map(e=>String(e.batchId??``).trim()).filter(Boolean))).sort(),[An]),sr=(0,m.useMemo)(()=>Array.from(new Set(An.map(e=>String(e.schoolYear??``).trim()).filter(Boolean))).sort((e,t)=>{let n=Number(e.match(/\d{4}/)?.[0]??0);return Number(t.match(/\d{4}/)?.[0]??0)-n||t.localeCompare(e)}),[An]),cr=(0,m.useMemo)(()=>or.map(e=>{let t=An.filter(t=>String(t.batchId??``).trim()===e),n=new Set(t.map(e=>String(e.studentId??``).trim().toLowerCase()));return{accountCount:Fn.filter(e=>n.has(String(e.schoolId??``).trim().toLowerCase())).length,batchId:e,recordCount:t.length}}),[or,An,Fn]),lr=(0,m.useMemo)(()=>{let e=Oe.trim().toLowerCase();return e?Pn.filter(t=>Na(t)===Ln&&Ma(t).toLowerCase()===e):[]},[Ln,Pn,Oe]),ur=(0,m.useMemo)(()=>{let e=Ht.trim().toLowerCase();return e?lr.filter(t=>{let n=[t.firstName,t.middleName,t.lastName,t.extensionName].filter(Boolean).join(` `);return[t.studentId,n,t.gender,t.birthDate,t.year,t.address,t.mobileNumber,t.emailAddress,t.status,t.psaFileName,t.schoolIdFileName,t.corFileName,t.pwdIdFileName,t.fourPsFileName,Ea(t.submittedAt)].map(e=>String(e??``).toLowerCase()).join(` `).includes(e)}):lr},[Ht,lr]),dr=Math.max(1,Math.ceil(ur.length/_a)),fr=Math.min(Qt,dr),pr=(fr-1)*_a,mr=ur.slice(pr,pr+_a),hr=Fa(fr,dr),gr=ur.length===0?0:pr+1,_r=pr+mr.length,vr=(0,m.useMemo)(()=>{let e=wt.trim().toLowerCase(),t=Et.trim().toLowerCase(),n=Ot.trim().toLowerCase(),r=At.trim().toLowerCase();return An.filter(i=>{let a=[i.no,i.tesAwardNumber,i.studentId,i.lastName,i.firstName,i.middleInitial,i.batchId,i.status,i.semester,i.schoolYear].map(e=>String(e??``).toLowerCase()).join(` `),o=e?a.includes(e):!0,s=t?String(i.batchId??``).trim().toLowerCase()===t:!0,c=n?String(i.semester??``).trim().toLowerCase()===n:!0,l=r?String(i.schoolYear??``).trim().toLowerCase()===r:!0;return o&&s&&c&&l})},[An,wt,Et,Ot,At]),yr=Math.max(1,Math.ceil(vr.length/ua)),br=Math.min(ft,yr),xr=(br-1)*ua,Sr=Fa(br,yr),Cr=vr.slice(xr,xr+ua),wr=vr.filter(e=>e.frontIdUrl),Tr=(0,m.useMemo)(()=>Array.from(new Set(wr.map(e=>String(e.schoolYear??``).trim()).filter(Boolean))).sort((e,t)=>t.localeCompare(e)),[wr]),Er=(0,m.useMemo)(()=>Tr.map(e=>({fileCount:wr.filter(t=>String(t.schoolYear??``).trim()===e).length,schoolYear:e})),[wr,Tr]),Dr=(0,m.useMemo)(()=>{if(!Be)return[];let e=new Map;return wr.forEach(t=>{if(String(t.schoolYear??``).trim()!==Be)return;let n=String(t.batchId??``).trim();if(!n)return;let r=e.get(n)??{batchId:n,fileCount:0};r.fileCount+=1,e.set(n,r)}),Array.from(e.values()).sort((e,t)=>e.batchId.localeCompare(t.batchId))},[wr,Be]),Ar=vr.length===0?0:xr+1,jr=xr+Cr.length,Nr=(0,m.useMemo)(()=>{let e=ee.trim().toLowerCase();return e?Fn.filter(t=>[t.schoolId,t.lastName,t.firstName,t.middleName,t.completeName,[t.lastName,t.firstName,t.middleName].filter(Boolean).join(` `),t.currentAddress,t.email,t.phoneNumber,t.facebookProfileUrl].map(e=>String(e??``).toLowerCase()).join(` `).includes(e)):Fn},[Fn,ee]),Ir=Math.max(1,Math.ceil(Nr.length/da)),Lr=Math.min(Y,Ir),Rr=(Lr-1)*da,zr=Nr.slice(Rr,Rr+da),Vr=Fa(Lr,Ir),Hr=Nr.length===0?0:Rr+1,Ur=Rr+zr.length,Wr=Math.max(1,Math.ceil(Mn.length/fa)),Gr=Math.min(Pt,Wr),Kr=(Gr-1)*fa,qr=Mn.slice(Kr,Kr+fa),Jr=Mn.length===0?0:Kr+1,Yr=Kr+qr.length,Xr=(0,m.useMemo)(()=>Array.from(new Set(Nn.map(e=>e.sourceTable))).sort(),[Nn]),Zr=(0,m.useMemo)(()=>{let e=_.trim().toLowerCase();return Nn.filter(t=>{let n=x?t.sourceTable===x:!0,r=[t.sourceTable,t.sourceLabel,t.sourceId,t.deletionKind,Sa(t.deletedAt)].map(e=>String(e??``).toLowerCase()).join(` `);return n&&(!e||r.includes(e))})},[Nn,_,x]),Qr=Math.max(1,Math.ceil(Zr.length/pa)),$r=Math.min(C,Qr),ei=($r-1)*pa,ti=Zr.slice(ei,ei+pa),ni=Zr.length===0?0:ei+1,ri=ei+ti.length,ii=Math.max(1,Math.ceil(cr.length/ma)),ai=Math.min(It,ii),si=(ai-1)*ma,ci=cr.slice(si,si+ma),li=cr.length===0?0:si+1,di=si+ci.length,fi=Math.max(1,Math.ceil(Er.length/ha)),pi=Math.min(Rt,fi),mi=(pi-1)*ha,hi=Er.slice(mi,mi+ha),gi=Er.length===0?0:mi+1,_i=mi+hi.length,vi=Math.max(1,Math.ceil(Dr.length/ga)),yi=Math.min(Bt,vi),bi=(yi-1)*ga,xi=Dr.slice(bi,bi+ga),Si=Dr.length===0?0:bi+1,Ci=bi+xi.length,Ti=e=>{pt(Math.min(Math.max(e,1),yr))},Ei=e=>{Ft(Math.min(Math.max(e,1),Wr))},Di=e=>{w(Math.min(Math.max(e,1),Qr))},Oi=e=>{Lt(Math.min(Math.max(e,1),ii))},ki=e=>{zt(Math.min(Math.max(e,1),fi))},ji=e=>{Vt(Math.min(Math.max(e,1),vi))},Mi=e=>{$t(Math.min(Math.max(e,1),dr))},Ni=e=>{tn(Math.min(Math.max(e,1),$n))},Pi=()=>{Kt||Jt||(ke(``),Ut(``),$t(1),Gt(!1))},Fi=e=>{Ut(e.target.value),$t(1)},Li=e=>{Ve(e),Vt(1)},Ri=()=>{Ke||Je||(Le(!1),Ve(``),Ue(null),Ge(!1),Vt(1))},zi=(e,t)=>{Ue({batchId:e,fileCount:t,schoolYear:Be})},Bi=()=>{Ke||Je||(Ue(null),Ge(!1))},Vi=e=>{Tt(e.target.value),pt(1)},Hi=e=>{Dt(e.target.value),pt(1)},Ui=e=>{kt(e.target.value),pt(1)},Wi=e=>{jt(e.target.value),pt(1)},Gi=async(e,t)=>{let n=String(e??``).trim(),r=String(t??``).trim(),i=wr.filter(e=>String(e.schoolYear??``).trim()===n&&String(e.batchId??``).trim()===r).sort(ja);if(i.length!==0){qe(!0);try{await wn(`Preparing your batch download…`,async e=>{qe(!0);try{let t=[];for(let[n,r]of i.entries()){try{let e=await La(r,n);t.push(e)}catch(e){B(e,`admin.admin`)}e({message:`Preparing your batch download…`,progress:(n+1)/(i.length+2)*100,detail:`${n+1} of ${i.length} file requests processed.`})}if(t.length===0)throw Error(`No School ID files could be downloaded for this batch.`);let a=Wa(t);e({message:`Preparing ZIP file…`,progress:(i.length+1)/(i.length+2)*100});let o=URL.createObjectURL(a),s=document.createElement(`a`),c=Aa(n,`school-year`),l=Aa(r,`batch`);return s.href=o,s.download=`school-id-files-${c}-batch-${l}.zip`,s.rel=`noreferrer`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o),Le(!1),Ve(``),Ue(null),Vt(1),{detail:`${t.length} of ${i.length} School ID files are ready in the ZIP.${t.length<i.length?` ${i.length-t.length} files were unavailable.`:``}`}}finally{qe(!1)}})}catch(e){B(e,`admin.admin`)}finally{qe(!1)}}},Ki=async()=>{if(He){Ye(!0);try{let e=await vn({batchId:He.batchId,schoolYear:He.schoolYear});Ge(!1),Ue(null),Ve(``),Le(!1),Vt(1),Ze({batchId:He.batchId,count:e.deleted,schoolYear:He.schoolYear,type:`delete`})}catch(e){window.alert(G(e,`Unable to delete School ID files.`,`admin.admin`))}finally{Ye(!1)}}},qi=async e=>{if(cn===void 0)return;let t=String(e??``).trim(),n=Pn.filter(e=>Na(e)===Ln&&Ma(e).toLowerCase()===t.toLowerCase());if(n.length===0){window.alert(`No applicants are available for this course.`);return}Yt(!0);let r=Pa(n,t),i=Aa(t,`course`);await En(`unifast-applicants-${Aa(Ln,`application-year`)}-${i}.csv`,r),Yt(!1)},Yi=async()=>{if(Oe){qt(!0);try{let e=await yn({applicationYear:Ln,course:Oe});Gt(!1),Zt({count:e.deleted,course:Oe,filesDeleted:e.filesDeleted,type:`delete`,year:Ln}),ke(``),Ut(``),$t(1)}catch(e){window.alert(G(e,`Unable to delete course applicants.`,`admin.admin`))}finally{qt(!1)}}},Xi=async()=>{if(nn===void 0)return;if(jn.length===0){window.alert(`No student requests are available to export.`);return}let e=Ea(Date.now()),t=[[`No.`,`Student ID`,`Last Name`,`First Name`,`MI`,`Email Account`,`Question / Request`,`Source`,`Status`,`Submitted At`,`Exported At`],...jn.map((t,n)=>[n+1,t.studentId??``,t.lastName??``,t.firstName??``,t.middleInitial??``,t.email??``,t.question??``,t.source??``,t.status??``,Ea(t.submittedAt),e])];await En(`student-requests-responses-${new Date().toISOString().slice(0,10)}.csv`,t)},Zi=async()=>{if(!(ut||Mn.length===0)&&window.confirm(`Move all ${Mn.length} visible activity logs to the archive?`)){dt(!0);try{await hn({}),Ft(1)}catch(e){window.alert(G(e,`Unable to clear activity logs.`,`admin.admin`))}finally{dt(!1)}}},Qi=async e=>{if(!T&&window.confirm(`Restore ${e.sourceLabel||e.sourceTable} to ${e.sourceTable}?`)){E(e._id),O(``);try{await gn({id:e._id}),O(`${e.sourceLabel||`Item`} restored successfully.`)}catch(e){O(G(e,`Unable to restore this item.`,`admin.admin`))}finally{E(null)}}},$i=async e=>{if(!T&&window.confirm(`Permanently delete ${e.sourceLabel||e.sourceTable} from the archive? This cannot be undone.`)){E(e._id),O(``);try{await _n({id:e._id}),O(`${e.sourceLabel||`Item`} permanently deleted.`)}catch(e){O(G(e,`Unable to permanently delete this item.`,`admin.admin`))}finally{E(null)}}},ea=async(t,n)=>{try{let r=await dn({sessionToken:e?.sessionToken,isReceivingApplicants:t,...n?{applicationYear:n}:{}});r.success||window.alert(r.message||`Unable to update applicant portal status.`)}catch(e){window.alert(G(e,`Unable to update applicant portal status.`,`admin.admin`))}},ta=async e=>{await ea(!0,e),De(!1),tn(1)},na=()=>{te(!1),re(!1),ae(!1),De(!1),tn(1),ke(``),Ut(``),$t(1),_e(null)},ra=()=>{ye(`all`),xe([]),Ce(``),Te(``),ae(!0)},ia=()=>{Jt||(ae(!1),Te(``))},aa=e=>{xe(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),Te(``)},oa=async()=>{if(Jt)return;if(Rn===void 0){Te(`Applicant counts are still loading. Please try again in a moment.`);return}let t=ve===`all`?xa:xa.filter(e=>be.includes(e));if(!t.length){Te(`Select at least one course to download applicant records.`);return}if(Bn===0){Te(`No applicant records match the selected courses and application year.`);return}Te(``),Yt(!0);try{await wn(`Fetching official applicant records…`,async n=>{Te(``),Yt(!0);try{let r=await bn({sessionToken:e?.sessionToken,applicationYear:Ln,courses:t});if(!Array.isArray(r)||r.length===0)throw Error(`No applicant records matched the selected courses and application year.`);n({message:`Generating CSV report…`,progress:void 0});let i=Pa(r);if(!Oa(`unifast-applicants-${Aa(Ln,`application-year`)}-${ve===`all`?`all-courses`:`selected-courses`}.csv`,i))throw Error(`The applicant CSV file could not be generated.`);ae(!1)}finally{Yt(!1)}})}catch(e){Te(G(e,`Unable to download applicant records. Please try again.`,`admin.admin`))}finally{Yt(!1)}},ba=()=>Ne(!0),Da=()=>Ne(!1),Ia=()=>{Lt(1),at(``),Fe(!0)},Ra=()=>{ct||(Fe(!1),$e(null))},za=()=>{A(!0)},Ba=()=>{tt(null),rt(``),at(``),st(!1),je(!0)},Va=()=>{ot||(je(!1),tt(null),rt(``),st(!1))},Ha=()=>{St||(_t(null),yt(null),xt(``))},Ua=e=>{_t(e),yt({no:e.no??``,tesAwardNumber:e.tesAwardNumber??``,studentId:e.studentId??``,lastName:e.lastName??``,firstName:e.firstName??``,middleInitial:e.middleInitial??``,batchId:e.batchId??``,status:e.status??``,semester:e.semester??``,schoolYear:e.schoolYear??``}),xt(``)},Ga=e=>t=>{xt(``),yt(n=>({...n,[e]:t.target.value}))},Ka=async e=>{if(e.preventDefault(),!(!gt||!vt)){if([`no`,`tesAwardNumber`,`studentId`,`lastName`,`firstName`,`batchId`,`status`,`semester`,`schoolYear`].some(e=>!String(vt[e]??``).trim())){xt(`Please complete all required fields before saving.`);return}Ct(!0),xt(`Saving changes...`);try{await pn({id:gt._id,...vt}),xt(`Record updated successfully.`),_t(null),yt(null)}catch(e){xt(G(e,`Unable to update record.`,`admin.admin`))}finally{Ct(!1)}}},Ja=e=>{at(``),ht(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},Xa=async()=>{if(mt.length===0){at(`Please check at least one record before deleting.`);return}if(window.confirm(`Delete ${mt.length} checked record${mt.length===1?``:`s`}?`)){lt(!0),at(`Deleting checked record...`);try{let e=await mn({ids:mt});ht([]),at(`${e?.deleted??mt.length} record${(e?.deleted??mt.length)===1?``:`s`} deleted successfully.`)}catch(e){at(G(e,`Unable to delete records.`,`admin.admin`))}finally{lt(!1)}}},Za=async()=>{if(!Qe)return;let e=Qe.batchId,t=An.filter(t=>String(t.batchId??``).trim()===e).map(e=>e._id);if(t.length===0){at(`No records found for this batch.`),$e(null);return}lt(!0),at(`Deleting batch ${e}...`);try{let n=await mn({ids:t});ht(e=>e.filter(e=>!t.includes(e))),at(`${n?.deleted??t.length} record${(n?.deleted??t.length)===1?``:`s`} deleted from batch ${e}.`),$e(null),Fe(!1),pt(1)}catch(e){at(G(e,`Unable to delete batch records.`,`admin.admin`))}finally{lt(!1)}},Qa=e=>{let t=e.target.files?.[0]??null;tt(t),rt(t?`${t.name} is ready to upload.`:``)},$a=async e=>{if(e.preventDefault(),!et){rt(`Select a CSV file before uploading.`);return}if(!et.name.toLowerCase().endsWith(`.csv`)){rt(`Please upload the downloaded CSV template file.`);return}st(!0),rt(`Reading file...`);try{let e=qa(await et.text());if(e.length===0){rt(`No valid rows found. Use the CSV template headers and add record values.`);return}let t=await fn({records:e});rt(`${t.inserted} record${t.inserted===1?``:`s`} saved to allinfo.`),tt(null)}catch(e){rt(G(e,`Unable to upload records.`,`admin.admin`))}finally{st(!1)}},eo=()=>{X(1),U(``),M(!0)},to=e=>{e===`validation`?(l(`validation`),window.scrollTo({top:0})):e===`dashboard`||e===`records`?(l(e),requestAnimationFrame(()=>{let t=document.getElementById(e===`records`?`admin-records`:`admin-dashboard`);t?.focus({preventScroll:!0}),t?.scrollIntoView({block:`start`,behavior:`instant`})})):e===`portal`?te(!0):e===`archive`?(O(``),w(1),g(!0)):e===`logs`?(Ft(1),p(!0)):e===`users`?eo():e===`support`?za():e===`billing`?r(!0):e===`form2`?a(!0):e===`documentation`&&s(!0)},no=e=>{P(e),V({email:e.email??``,phoneNumber:e.phoneNumber??``}),U(``)},ro=e=>{let{name:t,value:n}=e.target;V(e=>({...e,[t]:n}))};return(0,m.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;d(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,m.useEffect)(()=>{if(!On)return;let e=e=>{Me||Re||e.target?.closest?.(`dialog[open]`)||e.key===`Escape`&&(p(!1),g(!1),A(!1),M(!1),P(null),R(null),te(!1),re(!1),De(!1),tn(1),ke(``),Ut(``),$t(1),je(!1),Ne(!1),Fe(!1),$e(null),Le(!1),Ve(``),Vt(1),tt(null),rt(``),st(!1),_t(null))};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[On,Me,Re]),(0,v.jsxs)(`div`,{className:`admin-page`,children:[(0,v.jsx)(`style`,{children:Ya}),Cn&&(0,v.jsx)(kr,{operation:Cn,onRetry:Tn},Cn.id),sn===void 0&&(0,v.jsx)(y,{variant:`compact`,message:`Loading dashboard information…`}),(0,v.jsx)(Br,{activeItem:o?`documentation`:i?`form2`:n?`billing`:k?`support`:j?`users`:h?`archive`:f?`logs`:Q||ne||Ee||Oe||ie?`portal`:c,onNavigate:to,onLogout:kn}),(0,v.jsx)(`main`,{className:`admin-main`,children:c===`validation`?(0,v.jsx)(sa,{sessionToken:e?.sessionToken}):(0,v.jsxs)(`div`,{className:`admin-container`,children:[(0,v.jsxs)(`section`,{id:`admin-dashboard`,className:`admin-heading`,tabIndex:-1,children:[(0,v.jsxs)(`div`,{className:`admin-heading__copy`,children:[(0,v.jsx)(`span`,{className:`admin-eyebrow`,children:`Tertiary Education Subsidy and Tulong Dunong Program`}),(0,v.jsx)(`h1`,{children:`Grantee Management`})]}),(0,v.jsxs)(`div`,{className:`admin-heading__actions`,children:[(0,v.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:or.length===0,onClick:ba,title:or.length===0?`No batches available to export`:`Select a school year and batches to download`,type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`download`}),`Download Batch`]}),(0,v.jsxs)(`button`,{className:`admin-button admin-button--secondary`,disabled:sn===void 0,onClick:()=>{zt(1),Le(!0)},title:wr.length===0?`Review missing School ID submissions`:`Choose a School Year to download School ID files`,type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`download`}),`Download School ID File`]}),(0,v.jsxs)(`button`,{className:`admin-button admin-button--primary`,onClick:Ba,type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`add`}),`Add New Record`]}),(0,v.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:or.length===0,onClick:Ia,title:or.length===0?`No batches available to delete`:`Choose a batch to delete`,type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`}),`Delete Batch`]})]})]}),(0,v.jsxs)(`section`,{className:`admin-stats-grid`,"aria-label":`Grantee summary`,children:[(0,v.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,v.jsx)(`span`,{children:`Total Records`}),(0,v.jsx)(`strong`,{children:An.length})]}),(0,v.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,v.jsx)(`span`,{children:`Filtered Results`}),(0,v.jsx)(`strong`,{children:vr.length})]}),(0,v.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,v.jsx)(`span`,{children:`Checked Records`}),(0,v.jsx)(`strong`,{children:mt.length})]}),(0,v.jsxs)(`div`,{className:`admin-stat-card`,children:[(0,v.jsx)(`span`,{children:`Student Requests`}),(0,v.jsx)(`strong`,{children:jn.length})]})]}),(0,v.jsxs)(`section`,{className:`admin-filter-panel`,"aria-label":`Grantee filters`,children:[(0,v.jsxs)(`div`,{className:`admin-search-field`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,v.jsx)(`input`,{"aria-label":`Search grantee records`,placeholder:`Search by Student ID, award number, status, or semester...`,type:`text`,value:wt,onChange:Vi})]}),(0,v.jsxs)(`select`,{"aria-label":`Filter by batch`,value:Et,onChange:Hi,children:[(0,v.jsx)(`option`,{value:``,children:`All Batches`}),or.map(e=>(0,v.jsx)(`option`,{value:e,children:e},e))]}),(0,v.jsxs)(`select`,{"aria-label":`Filter by semester`,value:Ot,onChange:Ui,children:[(0,v.jsx)(`option`,{value:``,children:`All Semesters`}),(0,v.jsx)(`option`,{value:`1st Semester`,children:`1st Semester`}),(0,v.jsx)(`option`,{value:`2nd Semester`,children:`2nd Semester`})]}),(0,v.jsxs)(`select`,{"aria-label":`Filter by school year`,value:At,onChange:Wi,children:[(0,v.jsx)(`option`,{value:``,children:`All School Years`}),sr.map(e=>(0,v.jsx)(`option`,{value:e,children:e},e))]}),(0,v.jsx)(`button`,{className:`admin-filter-button`,type:`button`,"aria-label":`Refresh records`,title:`Refresh records`,onClick:()=>Nt(e=>e+1),children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`refresh`})})]}),(0,v.jsxs)(`section`,{id:`admin-records`,className:`admin-table-card`,"aria-label":`TDP grantee records`,tabIndex:-1,children:[(0,v.jsx)(`div`,{className:`admin-table-header`,children:(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h2`,{children:`Grantee Records`}),(0,v.jsx)(`p`,{children:`Review, check, edit, or delete selected records.`})]})}),(0,v.jsx)(`div`,{className:`admin-table-scroll`,children:(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`No.`}),(0,v.jsx)(`th`,{children:`TES Award Number`}),(0,v.jsx)(`th`,{children:`Student ID`}),(0,v.jsx)(`th`,{children:`Last Name`}),(0,v.jsx)(`th`,{children:`First Name`}),(0,v.jsx)(`th`,{children:`MI.`}),(0,v.jsx)(`th`,{children:`Batch No.`}),(0,v.jsx)(`th`,{children:`Status`}),(0,v.jsx)(`th`,{children:`Semester`}),(0,v.jsx)(`th`,{children:`School Year`}),(0,v.jsx)(`th`,{children:`School ID File`}),(0,v.jsx)(`th`,{children:`Actions`})]})}),(0,v.jsxs)(`tbody`,{children:[sn===void 0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:(0,v.jsx)(y,{variant:`table`,message:`Fetching official grantee records…`})})}),sn?.length===0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No grantee records yet. Upload a CSV file to add records.`})}),sn&&sn.length>0&&vr.length===0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-empty-state`,colSpan:12,children:`No matching record found.`})}),Cr.map((e,t)=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{"data-label":`No.`,children:xr+t+1}),(0,v.jsx)(`td`,{className:`admin-award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,v.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,v.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`—`}),(0,v.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`—`}),(0,v.jsx)(`td`,{"data-label":`MI.`,children:e.middleInitial||`—`}),(0,v.jsx)(`td`,{className:`admin-batch-cell`,"data-label":`Batch No.`,children:e.batchId}),(0,v.jsx)(`td`,{"data-label":`Status`,children:(0,v.jsx)(wa,{status:e.status,tone:Ta(e.status)})}),(0,v.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,v.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`}),(0,v.jsx)(`td`,{"data-label":`School ID File`,children:e.frontIdUrl?(0,v.jsx)(`a`,{className:`admin-file-link`,href:e.frontIdUrl,rel:`noreferrer`,target:`_blank`,children:`View file`}):(0,v.jsx)(`span`,{className:`admin-file-empty`,children:`No file`})}),(0,v.jsx)(`td`,{"data-label":`Actions`,children:(0,v.jsxs)(`div`,{className:`admin-row-actions`,children:[(0,v.jsx)(`button`,{className:`admin-edit-button`,type:`button`,onClick:()=>Ua(e),children:`Edit`}),(0,v.jsxs)(`label`,{className:`admin-checkbox-control`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:mt.includes(e._id),onChange:()=>Ja(e._id)}),(0,v.jsx)(`span`,{children:`Check`})]}),(0,v.jsx)(`button`,{className:`admin-delete-button`,type:`button`,disabled:ct||!mt.includes(e._id),onClick:Xa,children:`Delete`})]})})]},e._id))]})]})}),(0,v.jsxs)(`div`,{className:`admin-pagination`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(`p`,{children:[`Showing `,(0,v.jsx)(`strong`,{children:Ar}),` to `,(0,v.jsx)(`strong`,{children:jr}),` of`,` `,(0,v.jsx)(`strong`,{children:vr.length}),` results`]}),it&&(0,v.jsx)(`p`,{className:`admin-delete-message`,children:it})]}),(0,v.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,v.jsx)(`button`,{type:`button`,disabled:br===1||vr.length===0,"aria-label":`Previous page`,onClick:()=>Ti(br-1),children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Sr.map(e=>{if(typeof e==`string`)return(0,v.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e);let t=e;return(0,v.jsx)(`button`,{"aria-current":br===t?`page`:void 0,className:br===t?`admin-page-button--active`:void 0,disabled:vr.length===0,onClick:()=>Ti(t),type:`button`,children:t},t)}),(0,v.jsx)(`button`,{type:`button`,disabled:br===yr||vr.length===0,"aria-label":`Next page`,onClick:()=>Ti(br+1),children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]})}),n&&(0,v.jsx)(oi,{sessionToken:e?.sessionToken,onClose:()=>r(!1)}),i&&(0,v.jsx)(ui,{sessionToken:e?.sessionToken,onClose:()=>a(!1),onOpenBilling:()=>{a(!1),r(!0)}}),o&&(0,v.jsx)(wi,{sessionToken:e?.sessionToken,onClose:()=>s(!1)}),f&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-logs-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close logs modal`,className:`admin-modal-backdrop`,onClick:()=>p(!1),type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Activity Logs`}),(0,v.jsx)(`h2`,{id:`admin-logs-title`,children:`System Activity Records`}),(0,v.jsx)(`p`,{children:`Review recent uploads, edits, deletes, student updates, and page actions.`})]}),(0,v.jsx)(`button`,{"aria-label":`Close logs`,className:`admin-modal-close`,onClick:()=>p(!1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`admin-logs-toolbar`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{children:`Log Management`}),(0,v.jsx)(`strong`,{children:`Move all system activity records to the archive.`})]}),(0,v.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:an===void 0||Mn.length===0||ut,onClick:Zi,type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_sweep`}),ut?(0,v.jsx)(y,{variant:`inline`,message:`Archiving activity logs…`}):`Clear All Logs`]})]}),(0,v.jsx)(`div`,{className:`admin-logs-table-wrap`,children:(0,v.jsxs)(`table`,{className:`admin-logs-table`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`Date & Time`}),(0,v.jsx)(`th`,{children:`Action`}),(0,v.jsx)(`th`,{children:`Actor`}),(0,v.jsx)(`th`,{children:`Target`}),(0,v.jsx)(`th`,{children:`Summary`})]})}),(0,v.jsxs)(`tbody`,{children:[an===void 0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:(0,v.jsx)(y,{variant:`table`,message:`Loading activity logs…`})})}),an&&Mn.length===0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:`No activity logs recorded yet.`})}),qr.map(e=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{"data-label":`Date & Time`,children:Sa(e.createdAt)}),(0,v.jsx)(`td`,{"data-label":`Action`,children:(0,v.jsx)(`span`,{className:`admin-log-action`,children:e.action})}),(0,v.jsxs)(`td`,{"data-label":`Actor`,children:[(0,v.jsx)(`strong`,{children:e.actorName||e.actorId||e.actorRole}),(0,v.jsx)(`span`,{children:e.actorRole})]}),(0,v.jsxs)(`td`,{"data-label":`Target`,children:[(0,v.jsx)(`strong`,{children:e.targetLabel||e.targetType}),(0,v.jsx)(`span`,{children:e.targetType})]}),(0,v.jsx)(`td`,{"data-label":`Summary`,children:e.summary})]},e._id))]})]})}),(0,v.jsxs)(`div`,{className:`admin-pagination admin-logs-pagination`,children:[(0,v.jsxs)(`p`,{children:[`Showing `,(0,v.jsx)(`strong`,{children:Jr}),` to `,(0,v.jsx)(`strong`,{children:Yr}),` of`,` `,(0,v.jsx)(`strong`,{children:Mn.length}),` logs`]}),(0,v.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,v.jsx)(`button`,{type:`button`,disabled:Gr===1||Mn.length===0,"aria-label":`Previous logs page`,onClick:()=>Ei(Gr-1),children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Wr},(e,t)=>{let n=t+1;return(0,v.jsx)(`button`,{className:Gr===n?`admin-page-button--active`:void 0,disabled:Mn.length===0,onClick:()=>Ei(n),type:`button`,children:n},n)}),(0,v.jsx)(`button`,{type:`button`,disabled:Gr===Wr||Mn.length===0,"aria-label":`Next logs page`,onClick:()=>Ei(Gr+1),children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),h&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-archive-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close archive modal`,className:`admin-modal-backdrop`,onClick:()=>g(!1),type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--archive`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Archive`}),(0,v.jsx)(`h2`,{id:`admin-archive-title`,children:`Deleted Records`}),(0,v.jsx)(`p`,{children:`Search deleted data, restore it to its original table, or delete it permanently.`})]}),(0,v.jsx)(`button`,{"aria-label":`Close archive`,className:`admin-modal-close`,disabled:!!T,onClick:()=>g(!1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`admin-archive-toolbar`,children:[(0,v.jsxs)(`label`,{className:`admin-archive-search`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,v.jsx)(`input`,{onChange:e=>{b(e.target.value),w(1)},placeholder:`Search table, deleted item, ID, or date...`,type:`search`,value:_})]}),(0,v.jsxs)(`select`,{"aria-label":`Filter archive by table`,onChange:e=>{S(e.target.value),w(1)},value:x,children:[(0,v.jsx)(`option`,{value:``,children:`All tables`}),Xr.map(e=>(0,v.jsx)(`option`,{value:e,children:e},e))]})]}),D&&(0,v.jsx)(`p`,{className:`admin-archive-message`,children:D}),(0,v.jsx)(`div`,{className:`admin-logs-table-wrap admin-archive-table-wrap`,children:(0,v.jsxs)(`table`,{className:`admin-logs-table admin-archive-table`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`Table`}),(0,v.jsx)(`th`,{children:`Deleted Item`}),(0,v.jsx)(`th`,{children:`Deletion Type`}),(0,v.jsx)(`th`,{children:`Date & Time Deleted`}),(0,v.jsx)(`th`,{children:`Actions`})]})}),(0,v.jsxs)(`tbody`,{children:[on===void 0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:(0,v.jsx)(y,{variant:`table`,message:`Loading archived records…`})})}),on&&Zr.length===0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-empty-state`,colSpan:5,children:Nn.length===0?`No deleted records in the archive.`:`No archived records match your filters.`})}),ti.map(e=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{"data-label":`Table`,children:(0,v.jsx)(`span`,{className:`admin-archive-table-name`,children:e.sourceTable})}),(0,v.jsxs)(`td`,{"data-label":`Deleted Item`,children:[(0,v.jsx)(`strong`,{children:e.sourceLabel||e.sourceId}),(0,v.jsx)(`span`,{children:e.sourceId})]}),(0,v.jsx)(`td`,{"data-label":`Deletion Type`,children:e.deletionKind===`fields`?`File data`:`Full record`}),(0,v.jsx)(`td`,{"data-label":`Date & Time Deleted`,children:Sa(e.deletedAt)}),(0,v.jsx)(`td`,{"data-label":`Actions`,children:(0,v.jsxs)(`div`,{className:`admin-archive-actions`,children:[(0,v.jsxs)(`button`,{className:`admin-archive-action admin-archive-action--restore`,disabled:!!T,onClick:()=>Qi(e),type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`restore`}),T===e._id?(0,v.jsx)(y,{variant:`inline`,message:`Restoring record…`}):`Restore`]}),(0,v.jsxs)(`button`,{className:`admin-archive-action admin-archive-action--delete`,disabled:!!T,onClick:()=>$i(e),type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),`Delete`]})]})})]},e._id))]})]})}),(0,v.jsxs)(`div`,{className:`admin-pagination admin-logs-pagination`,children:[(0,v.jsxs)(`p`,{children:[`Showing `,(0,v.jsx)(`strong`,{children:ni}),` to`,` `,(0,v.jsx)(`strong`,{children:ri}),` of`,` `,(0,v.jsx)(`strong`,{children:Zr.length}),` archived items`]}),(0,v.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,v.jsx)(`button`,{"aria-label":`Previous archive page`,disabled:$r===1||Zr.length===0,onClick:()=>Di($r-1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:Qr},(e,t)=>t+1).map(e=>(0,v.jsx)(`button`,{className:$r===e?`admin-page-button--active`:void 0,disabled:Zr.length===0,onClick:()=>Di(e),type:`button`,children:e},e)),(0,v.jsx)(`button`,{"aria-label":`Next archive page`,disabled:$r===Qr||Zr.length===0,onClick:()=>Di($r+1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]})]}),Me&&(0,v.jsx)(Ii,{sessionToken:e?.sessionToken,onClose:Da}),Pe&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close batch delete modal`,className:`admin-modal-backdrop`,onClick:Ra,type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Delete Batch`}),(0,v.jsx)(`h2`,{id:`admin-batch-delete-title`,children:`Choose Batch`}),(0,v.jsx)(`p`,{children:`Select a batch to delete all information records under that batch.`})]}),(0,v.jsx)(`button`,{"aria-label":`Close batch delete`,className:`admin-modal-close`,disabled:ct,onClick:Ra,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsx)(`div`,{className:`admin-school-year-downloads`,children:ci.map(({batchId:e,recordCount:t})=>(0,v.jsxs)(`button`,{className:`admin-school-year-button admin-school-year-button--danger`,disabled:ct,onClick:()=>$e({batchId:e,recordCount:t}),type:`button`,children:[(0,v.jsx)(`span`,{children:e}),(0,v.jsxs)(`strong`,{children:[t,` `,t===1?`record`:`records`]})]},e))}),(0,v.jsxs)(`div`,{className:`admin-pagination admin-batch-export-pagination`,children:[(0,v.jsxs)(`p`,{children:[`Showing `,(0,v.jsx)(`strong`,{children:li}),`-`,(0,v.jsx)(`strong`,{children:di}),` `,`of `,(0,v.jsx)(`strong`,{children:cr.length}),` batches`]}),(0,v.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,v.jsx)(`button`,{"aria-label":`Previous batch delete page`,disabled:ai===1||ct,onClick:()=>Oi(ai-1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:ii},(e,t)=>{let n=t+1;return(0,v.jsx)(`button`,{"aria-current":ai===n?`page`:void 0,className:ai===n?`admin-page-button--active`:void 0,disabled:ct,onClick:()=>Oi(n),type:`button`,children:n},n)}),(0,v.jsx)(`button`,{"aria-label":`Next batch delete page`,disabled:ai===ii||ct,onClick:()=>Oi(ai+1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,v.jsx)(`div`,{className:`admin-upload-actions`,children:(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ct,onClick:Ra,type:`button`,children:`Cancel`})})]})]}),Qe&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-batch-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-backdrop`,onClick:()=>{ct||$e(null)},type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact admin-modal-card--applicant-years`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Confirm Delete`}),(0,v.jsx)(`h2`,{id:`admin-batch-delete-confirm-title`,children:`Delete this batch information?`}),(0,v.jsx)(`p`,{children:`Are you sure you want to delete this batch information?`})]}),(0,v.jsx)(`button`,{"aria-label":`Close batch delete confirmation`,className:`admin-modal-close`,disabled:ct,onClick:()=>$e(null),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`admin-confirm-body`,children:[(0,v.jsx)(`strong`,{children:Qe.batchId}),(0,v.jsxs)(`p`,{children:[`This will move `,Qe.recordCount,` `,Qe.recordCount===1?`record`:`records`,` from this batch to the archive, where they can be restored.`]})]}),(0,v.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ct,onClick:()=>$e(null),type:`button`,children:`Cancel`}),(0,v.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:ct,onClick:Za,type:`button`,children:ct?(0,v.jsx)(y,{variant:`inline`,message:`Deleting grantee records…`}):`Delete Batch`})]})]})]}),Q&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-unifast-open-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-backdrop`,onClick:na,type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`UNIFAST Portal`}),(0,v.jsx)(`h2`,{id:`admin-unifast-open-title`,children:`Open the portal?`}),(0,v.jsx)(`p`,{children:`Do you want to open the portal for receiving applicants information?`})]}),(0,v.jsx)(`button`,{"aria-label":`Close UNIFAST portal confirmation`,className:`admin-modal-close`,onClick:na,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsx)(`div`,{className:`admin-confirm-body`,children:(0,v.jsx)(`p`,{children:`Select Yes to view applicants by course and prepare a course download.`})}),(0,v.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:na,type:`button`,children:`No`}),(0,v.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>{te(!1),he(1),re(!0)},type:`button`,children:`Yes`})]})]})]}),ne&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-unifast-courses-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-receiving-applicants-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-backdrop`,onClick:na,type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-receiving-applicants-modal`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header admin-receiving-applicants-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receiving Applicants Information`}),(0,v.jsx)(`h2`,{id:`admin-unifast-courses-title`,children:`Receiving Applicants Management`}),(0,v.jsx)(`p`,{children:`Manage applicant records, application availability, and downloads.`})]}),(0,v.jsx)(`button`,{"aria-label":`Close UNIFAST portal courses`,className:`admin-modal-close`,onClick:na,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`admin-receiving-applicants-controls`,children:[(0,v.jsxs)(`div`,{className:`admin-receiving-status`,children:[(0,v.jsx)(`span`,{className:`admin-receiving-status__indicator${ln?.isReceivingApplicants?` is-open`:` is-closed`}`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{children:`Landing Portal Status`}),(0,v.jsx)(`strong`,{children:ln===void 0?(0,v.jsx)(y,{variant:`inline`,message:`Checking portal status…`}):ln.isReceivingApplicants?`OPEN`:`CLOSED`}),(0,v.jsx)(`small`,{children:ln?.isReceivingApplicants?`Receiving ${Ln} applicants`:`Not receiving ${Ln} applicants`})]})]}),(0,v.jsxs)(`div`,{className:`admin-receiving-applicants-actions`,children:[(0,v.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:ln===void 0||ln?.isReceivingApplicants,onClick:()=>{tn(1),De(!0)},type:`button`,children:`Receive Applicants`}),(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ln===void 0||!ln?.isReceivingApplicants,onClick:()=>ea(!1),type:`button`,children:`Close Applicants`}),(0,v.jsxs)(`button`,{className:`admin-button admin-button--primary admin-download-applicants-button`,onClick:ra,type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`download`}),`Download Applicants`]})]})]}),(0,v.jsxs)(`div`,{className:`admin-receiving-applicants-body`,children:[(0,v.jsxs)(`div`,{className:`admin-receiving-grantee-toolbar`,children:[(0,v.jsxs)(`label`,{className:`admin-receiving-grantee-search`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`search`}),(0,v.jsx)(`input`,{"aria-label":`Search applicants`,onChange:e=>{se(e.target.value),he(1)},placeholder:`Search student ID, applicant name, email, or course`,type:`search`,value:oe})]}),(0,v.jsxs)(`select`,{"aria-label":`Filter applicants by course`,onChange:e=>{le(e.target.value),he(1)},value:ce,children:[(0,v.jsx)(`option`,{value:``,children:`All Courses`}),Vn.map(e=>(0,v.jsx)(`option`,{value:e,children:e},e))]}),(0,v.jsxs)(`select`,{"aria-label":`Filter applicants by application year`,onChange:e=>{de(e.target.value),he(1)},value:ue,children:[(0,v.jsx)(`option`,{value:``,children:`All Application Years`}),Hn.map(e=>(0,v.jsx)(`option`,{value:e,children:e},e))]}),(0,v.jsxs)(`select`,{"aria-label":`Filter applicants by status`,onChange:e=>{pe(e.target.value),he(1)},value:fe,children:[(0,v.jsx)(`option`,{value:``,children:`All Statuses`}),Un.map(e=>(0,v.jsx)(`option`,{value:e,children:e},e))]}),(0,v.jsxs)(`button`,{className:`admin-button admin-button--secondary admin-receiving-reset`,onClick:()=>{se(``),le(``),de(``),pe(``),he(1)},type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`filter_alt_off`}),`Reset Filters`]})]}),(0,v.jsx)(`div`,{className:`admin-receiving-grantee-table-wrap`,children:(0,v.jsxs)(`table`,{className:`admin-receiving-grantee-table`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`Student ID`}),(0,v.jsx)(`th`,{children:`Applicant Name`}),(0,v.jsx)(`th`,{children:`Course`}),(0,v.jsx)(`th`,{children:`Year Level`}),(0,v.jsx)(`th`,{children:`Application Year`}),(0,v.jsx)(`th`,{children:`Status`}),(0,v.jsx)(`th`,{children:`Mobile Number`}),(0,v.jsx)(`th`,{children:`Details`})]})}),(0,v.jsx)(`tbody`,{children:cn===void 0?(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-receiving-empty`,colSpan:8,children:(0,v.jsx)(y,{variant:`table`,message:`Loading UniFAST applicants…`})})}):Wn.length===0?(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-receiving-empty`,colSpan:8,children:Pn.length?`No applicants match these filters.`:`No applicant records are available yet.`})}):Jn.map(e=>{let t=[e.firstName,e.middleName,e.lastName,e.extensionName].filter(Boolean).join(` `);return(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:e.studentId||`—`}),(0,v.jsx)(`td`,{children:t||`—`}),(0,v.jsx)(`td`,{children:Ma(e)||`—`}),(0,v.jsx)(`td`,{children:e.year||e.yearLevelCode||`—`}),(0,v.jsx)(`td`,{children:Na(e)||`—`}),(0,v.jsx)(`td`,{children:(0,v.jsx)(wa,{status:e.status,tone:Ta(e.status)})}),(0,v.jsx)(`td`,{children:e.mobileNumber||`—`}),(0,v.jsx)(`td`,{children:(0,v.jsxs)(`button`,{"aria-label":`View details for applicant ${e.studentId||``}`,className:`admin-receiving-view-button`,onClick:()=>_e(e),type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`visibility`}),`View`]})})]},e._id)})})]})})]}),(0,v.jsxs)(`footer`,{className:`admin-receiving-applicants-footer`,children:[(0,v.jsxs)(`p`,{children:[`Showing `,(0,v.jsxs)(`strong`,{children:[Xn,`–`,Zn]}),` of `,(0,v.jsx)(`strong`,{children:Wn.length}),` applicants`]}),(0,v.jsxs)(`div`,{className:`admin-pagination__buttons`,"aria-label":`Applicant records pages`,children:[(0,v.jsx)(`button`,{"aria-label":`Previous page`,disabled:Kn<=1,onClick:()=>he(e=>Math.max(1,e-1)),type:`button`,children:`‹`}),Yn.map((e,t)=>typeof e==`string`?(0,v.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`…`},`ellipsis-${t}`):(0,v.jsx)(`button`,{"aria-current":Kn===e?`page`:void 0,className:Kn===e?`admin-page-button--active`:``,onClick:()=>he(e),type:`button`,children:e},e)),(0,v.jsx)(`button`,{"aria-label":`Next page`,disabled:Kn>=Gn,onClick:()=>he(e=>Math.min(Gn,e+1)),type:`button`,children:`›`})]}),(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary admin-receiving-close`,onClick:na,type:`button`,children:`Close`})]})]})]}),ge&&(0,v.jsxs)(`div`,{className:`admin-modal-overlay admin-receiving-details-overlay`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`admin-receiving-details-title`,children:[(0,v.jsx)(`button`,{"aria-label":`Close applicant details`,className:`admin-modal-backdrop`,onClick:()=>_e(null),type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-receiving-details-card`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Applicant Record`}),(0,v.jsx)(`h2`,{id:`admin-receiving-details-title`,children:`Applicant Details`}),(0,v.jsx)(`p`,{children:`Application information submitted to the Scholarship Office.`})]}),(0,v.jsx)(`button`,{"aria-label":`Close applicant details`,className:`admin-modal-close`,onClick:()=>_e(null),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`admin-receiving-details-body`,children:[(0,v.jsx)(`div`,{className:`admin-receiving-details-grid`,children:[[`Student ID`,ge.studentId],[`Applicant Name`,[ge.firstName,ge.middleName,ge.lastName,ge.extensionName].filter(Boolean).join(` `)],[`Course`,Ma(ge)],[`Year Level`,ge.year||ge.yearLevelCode],[`Application Year`,Na(ge)],[`Status`,ge.status],[`Gender`,ge.gender],[`Birth Date`,ge.birthDate],[`Mobile Number`,ge.mobileNumber],[`Email Address`,ge.emailAddress],[`Address`,ge.address]].map(([e,t])=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{children:e}),(0,v.jsx)(`strong`,{children:t||`—`})]},e))}),(0,v.jsxs)(`section`,{className:`admin-receiving-documents`,"aria-labelledby":`admin-receiving-documents-title`,children:[(0,v.jsxs)(`div`,{className:`admin-receiving-documents__heading`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`folder_open`}),(0,v.jsx)(`h3`,{id:`admin-receiving-documents-title`,children:`Submitted ID Files`})]}),(0,v.jsx)(`p`,{children:`Open a submitted PDF in a new tab.`})]}),(0,v.jsx)(`div`,{className:`admin-receiving-documents-grid`,children:[{label:`Birth Certificate (PSA)`,url:ge.psaFileUrl,fileName:ge.psaFileName,icon:`picture_as_pdf`},{label:`School ID`,url:ge.schoolIdFileUrl,fileName:ge.schoolIdFileName,icon:`badge`},{label:`COR / Study Load`,url:ge.corFileUrl,fileName:ge.corFileName,icon:`description`},{label:`PWD ID`,url:ge.pwdIdFileUrl,fileName:ge.pwdIdFileName,icon:`accessible`},{label:`4Ps ID`,url:ge.fourPsFileUrl,fileName:ge.fourPsFileName,icon:`family_restroom`}].map(({fileName:e,icon:t,label:n,url:r})=>(0,v.jsxs)(`div`,{className:`admin-receiving-document-card`,children:[(0,v.jsx)(`span`,{className:`admin-receiving-document-card__icon material-symbols-outlined`,"aria-hidden":`true`,children:t}),(0,v.jsxs)(`div`,{className:`admin-receiving-document-card__copy`,children:[(0,v.jsx)(`strong`,{children:n}),(0,v.jsx)(`small`,{children:r?e||`PDF document`:`Not submitted`})]}),r?(0,v.jsxs)(`a`,{className:`admin-receiving-document-view`,href:r,rel:`noopener noreferrer`,target:`_blank`,"aria-label":`View ${n}`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`visibility`}),`View`]}):(0,v.jsx)(`span`,{className:`admin-receiving-document-missing`,children:`—`})]},n))})]})]}),(0,v.jsx)(`div`,{className:`admin-receiving-details-footer`,children:(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>_e(null),type:`button`,children:`Done`})})]})]}),ie&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-applicant-download-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-applicant-download-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close applicant download dialog`,className:`admin-modal-backdrop`,disabled:Jt,onClick:ia,type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-applicant-download-card`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receiving Applicants Information`}),(0,v.jsx)(`h2`,{id:`admin-applicant-download-title`,children:`Download Applicant Records`}),(0,v.jsxs)(`p`,{children:[`Choose all courses or select the courses to include in your `,Ln,` CSV.`]})]}),(0,v.jsx)(`button`,{"aria-label":`Close applicant download dialog`,className:`admin-modal-close`,disabled:Jt,onClick:ia,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`admin-applicant-download-body`,children:[Rn===void 0?(0,v.jsx)(y,{message:`Loading live applicant counts for ${Ln}…`}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`admin-applicant-download-options`,children:[(0,v.jsxs)(`label`,{className:`admin-applicant-download-option${ve===`all`?` is-selected`:``}`,children:[(0,v.jsx)(`input`,{checked:ve===`all`,name:`applicant-download-mode`,onChange:()=>{ye(`all`),Te(``)},type:`radio`,value:`all`}),(0,v.jsxs)(`span`,{className:`admin-applicant-download-option__copy`,children:[(0,v.jsx)(`strong`,{children:`All Courses`}),(0,v.jsx)(`small`,{children:`Include every course with applicant records.`})]}),(0,v.jsxs)(`span`,{className:`admin-applicant-download-count`,children:[Rn.totalCount,` records`]})]}),(0,v.jsxs)(`label`,{className:`admin-applicant-download-option${ve===`specific`?` is-selected`:``}`,children:[(0,v.jsx)(`input`,{checked:ve===`specific`,name:`applicant-download-mode`,onChange:()=>{ye(`specific`),Te(``)},type:`radio`,value:`specific`}),(0,v.jsxs)(`span`,{className:`admin-applicant-download-option__copy`,children:[(0,v.jsx)(`strong`,{children:`Select Specific Courses`}),(0,v.jsx)(`small`,{children:`Choose one or more courses to include.`})]}),(0,v.jsxs)(`span`,{className:`admin-applicant-download-count`,children:[be.length,` selected`]})]})]}),ve===`specific`&&(0,v.jsxs)(`div`,{className:`admin-applicant-course-picker`,children:[(0,v.jsxs)(`div`,{className:`admin-applicant-course-picker__toolbar`,children:[(0,v.jsxs)(`label`,{className:`admin-applicant-course-search`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`search`}),(0,v.jsx)(`input`,{"aria-label":`Search courses`,onChange:e=>Ce(e.target.value),placeholder:`Search courses`,type:`search`,value:Se})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`button`,{className:`admin-link-button`,onClick:()=>xe(xa),type:`button`,children:`Select all`}),(0,v.jsx)(`button`,{className:`admin-link-button`,onClick:()=>xe([]),type:`button`,children:`Deselect all`})]})]}),(0,v.jsx)(`div`,{className:`admin-applicant-course-list`,children:zn.length?zn.map(e=>(0,v.jsxs)(`label`,{className:`admin-applicant-course-item`,children:[(0,v.jsx)(`input`,{checked:be.includes(e),onChange:()=>aa(e),type:`checkbox`}),(0,v.jsx)(`span`,{children:e}),(0,v.jsx)(`strong`,{children:Rn.counts?.[e]??0})]},e)):(0,v.jsxs)(`p`,{className:`admin-applicant-course-empty`,children:[`No courses match “`,Se,`”.`]})})]}),(0,v.jsxs)(`div`,{className:`admin-applicant-download-summary`,children:[(0,v.jsxs)(`span`,{children:[`Matching records for `,Ln]}),(0,v.jsx)(`strong`,{children:Bn.toLocaleString()})]}),Bn===0&&(0,v.jsxs)(`p`,{className:`admin-applicant-download-empty`,children:[`No applicant records match this selection for `,Ln,`.`]})]}),we&&(0,v.jsx)(`p`,{className:`admin-applicant-download-error`,role:`alert`,children:we})]}),(0,v.jsxs)(`div`,{className:`admin-applicant-download-footer`,children:[(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Jt,onClick:ia,type:`button`,children:`Cancel`}),(0,v.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:Rn===void 0||!Bn||ve===`specific`&&!be.length||Jt,onClick:oa,type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`download`}),Jt?(0,v.jsx)(y,{variant:`inline`,message:`Generating CSV report…`}):`Download CSV (${Bn.toLocaleString()} Applicants)`]})]})]})]}),Ee&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-applicant-year-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-backdrop`,onClick:()=>{De(!1),tn(1)},type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Receive Applicants`}),(0,v.jsx)(`h2`,{id:`admin-applicant-year-title`,children:`Choose Application Year`}),(0,v.jsx)(`p`,{children:`Select the year for the new applicant cycle. Counts and downloads will use this year.`})]}),(0,v.jsx)(`button`,{"aria-label":`Close applicant year selection`,className:`admin-modal-close`,onClick:()=>{De(!1),tn(1)},type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsx)(`div`,{className:`admin-year-options`,children:nr.map(e=>(0,v.jsxs)(`button`,{className:`admin-year-option`,onClick:()=>ta(e),type:`button`,children:[(0,v.jsx)(`span`,{children:e}),(0,v.jsxs)(`strong`,{children:[Pn.filter(t=>Na(t)===e).length,` `,`existing applicants`]})]},e))}),(0,v.jsxs)(`div`,{className:`admin-pagination admin-applicant-year-pagination`,children:[(0,v.jsxs)(`p`,{children:[`Showing `,(0,v.jsx)(`strong`,{children:ir}),` to`,` `,(0,v.jsx)(`strong`,{children:ar}),` of`,` `,(0,v.jsx)(`strong`,{children:Qn.length}),` years`]}),(0,v.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,v.jsx)(`button`,{"aria-label":`Previous application years page`,disabled:er===1||Qn.length===0,onClick:()=>Ni(er-1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),rr.map(e=>typeof e==`number`?(0,v.jsx)(`button`,{className:er===e?`admin-page-button--active`:void 0,disabled:Qn.length===0,onClick:()=>Ni(e),type:`button`,children:e},e):(0,v.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,v.jsx)(`button`,{"aria-label":`Next application years page`,disabled:er===$n||Qn.length===0,onClick:()=>Ni(er+1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,v.jsx)(`div`,{className:`admin-upload-actions`,children:(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>{De(!1),tn(1)},type:`button`,children:`Cancel`})})]})]}),Oe&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-course-applicants-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-backdrop`,onClick:Pi,type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-course-applicants-modal`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Course Applicants Information`}),(0,v.jsx)(`h2`,{id:`admin-course-applicants-title`,children:`Applicants Table`}),(0,v.jsxs)(`p`,{children:[Oe,` applicants for `,Ln,`.`]})]}),(0,v.jsx)(`button`,{"aria-label":`Close course applicants`,className:`admin-modal-close`,onClick:Pi,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`admin-course-applicants-toolbar`,children:[(0,v.jsxs)(`div`,{className:`admin-search-field admin-course-applicant-search`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,v.jsx)(`input`,{"aria-label":`Search course applicants`,placeholder:`Search applicant name, ID, email, mobile, status...`,type:`search`,value:Ht,onChange:Fi})]}),(0,v.jsxs)(`div`,{className:`admin-course-applicants-toolbar__actions`,children:[(0,v.jsxs)(`button`,{className:`admin-button admin-button--danger`,disabled:cn===void 0||lr.length===0||Kt||Jt,onClick:()=>Gt(!0),type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),`Delete All Applicants`]}),(0,v.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:cn===void 0||lr.length===0||Kt||Jt,onClick:()=>qi(Oe),type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download All Applicants Info`]})]})]}),(0,v.jsxs)(`div`,{className:`admin-course-applicants-summary`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{children:`Total Course Applicants`}),(0,v.jsx)(`strong`,{children:lr.length})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{children:`Filtered Results`}),(0,v.jsx)(`strong`,{children:ur.length})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{children:`Rows Per Page`}),(0,v.jsx)(`strong`,{children:_a})]})]}),(0,v.jsx)(`div`,{className:`admin-course-applicants-table-wrap`,children:(0,v.jsxs)(`table`,{className:`admin-course-applicants-table`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`No.`}),(0,v.jsx)(`th`,{children:`Student ID`}),(0,v.jsx)(`th`,{children:`Applicant Name`}),(0,v.jsx)(`th`,{children:`Gender`}),(0,v.jsx)(`th`,{children:`Birth Date`}),(0,v.jsx)(`th`,{children:`Year`}),(0,v.jsx)(`th`,{children:`Mobile No.`}),(0,v.jsx)(`th`,{children:`Email Address`}),(0,v.jsx)(`th`,{children:`Address`}),(0,v.jsx)(`th`,{children:`PSA`}),(0,v.jsx)(`th`,{children:`School ID`}),(0,v.jsx)(`th`,{children:`COR / Study Load`}),(0,v.jsx)(`th`,{children:`PWD ID PDF`}),(0,v.jsx)(`th`,{children:`4Ps ID PDF`}),(0,v.jsx)(`th`,{children:`Status`}),(0,v.jsx)(`th`,{children:`Submitted`})]})}),(0,v.jsxs)(`tbody`,{children:[cn===void 0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-empty-state`,colSpan:17,children:(0,v.jsx)(y,{variant:`table`,message:`Loading UniFAST applicants…`})})}),cn!==void 0&&ur.length===0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-empty-state`,colSpan:17,children:`No applicants found for this course.`})}),mr.map((e,t)=>{let n=[e.firstName,e.middleName,e.lastName,e.extensionName].filter(Boolean).join(` `)||`No name`;return(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{"data-label":`No.`,children:pr+t+1}),(0,v.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,v.jsx)(`td`,{"data-label":`TES Details`,children:(0,v.jsxs)(`details`,{className:`admin-applicant-details`,children:[(0,v.jsx)(`summary`,{children:`View details`}),(0,v.jsxs)(`dl`,{children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`LRN`}),(0,v.jsx)(`dd`,{children:e.lrn||`Not provided`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`PhilSys ID`}),(0,v.jsx)(`dd`,{children:e.philSysIdNumber||`Not provided`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`4Ps ID`}),(0,v.jsx)(`dd`,{children:e.fourPsIdNumber||`Not provided`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Address`}),(0,v.jsx)(`dd`,{children:[e.streetBarangay,e.cityMunicipality,e.province,e.region,e.zipCode].filter(Boolean).join(`, `)||e.address})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Father`}),(0,v.jsx)(`dd`,{children:e.fatherInformationUnavailable?`Information unavailable`:[e.fatherFirstName,e.fatherMiddleName,e.fatherLastName].filter(Boolean).join(` `)||`Not provided`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Mother`}),(0,v.jsx)(`dd`,{children:e.motherInformationUnavailable?`Information unavailable`:[e.motherFirstName,e.motherMiddleName,e.motherLastName].filter(Boolean).join(` `)||`Not provided`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Disability`}),(0,v.jsx)(`dd`,{children:e.hasDisability?`Yes${e.disabilityType?` — ${e.disabilityType}`:``}`:`No`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Solo parent dependent`}),(0,v.jsx)(`dd`,{children:e.soloParentDependent===1?`Yes`:`No`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`First generation`}),(0,v.jsx)(`dd`,{children:e.firstGeneration===1?`Yes`:`No`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Indigenous Peoples member`}),(0,v.jsx)(`dd`,{children:e.isIndigenous?`Yes${e.indigenousGroup?` — ${e.indigenousGroup}`:``}`:`No`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Classification`}),(0,v.jsx)(`dd`,{children:e.applicantClassification||`TES Applicant`})]})]})]})}),(0,v.jsx)(`td`,{className:`admin-applicant-name`,"data-label":`Applicant Name`,children:n}),(0,v.jsx)(`td`,{"data-label":`Gender`,children:e.gender}),(0,v.jsx)(`td`,{"data-label":`Birth Date`,children:e.birthDate}),(0,v.jsx)(`td`,{"data-label":`Year`,children:e.year}),(0,v.jsx)(`td`,{"data-label":`Mobile No.`,children:e.mobileNumber}),(0,v.jsx)(`td`,{className:`admin-applicant-email`,"data-label":`Email Address`,children:e.emailAddress}),(0,v.jsx)(`td`,{className:`admin-applicant-address`,"data-label":`Address`,children:e.address}),(0,v.jsx)(`td`,{"data-label":`PSA`,children:e.psaFileUrl?(0,v.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.psaFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`}),`View PSA`]}):(0,v.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,v.jsx)(`td`,{"data-label":`School ID`,children:e.schoolIdFileUrl?(0,v.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.schoolIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`}),`View School ID`]}):(0,v.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,v.jsx)(`td`,{"data-label":`COR / Study Load`,children:e.corFileUrl?(0,v.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.corFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`description`}),`View COR`]}):(0,v.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`No file`})}),(0,v.jsx)(`td`,{"data-label":`PWD ID PDF`,children:e.pwdIdFileUrl?(0,v.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.pwdIdFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`}),`View PWD ID`]}):(0,v.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,v.jsx)(`td`,{"data-label":`4Ps ID PDF`,children:e.fourPsFileUrl?(0,v.jsxs)(`a`,{className:`admin-applicant-file-link`,href:e.fourPsFileUrl,rel:`noreferrer`,target:`_blank`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`}),`View 4Ps ID`]}):(0,v.jsx)(`span`,{className:`admin-applicant-file-missing`,children:`Optional`})}),(0,v.jsx)(`td`,{"data-label":`Status`,children:(0,v.jsx)(wa,{status:e.status,tone:Ta(e.status)})}),(0,v.jsx)(`td`,{"data-label":`Submitted`,children:Ea(e.submittedAt)})]},e._id)})]})]})}),(0,v.jsxs)(`div`,{className:`admin-pagination admin-course-applicants-pagination`,children:[(0,v.jsxs)(`p`,{children:[`Showing `,(0,v.jsx)(`strong`,{children:gr}),` to`,` `,(0,v.jsx)(`strong`,{children:_r}),` of`,` `,(0,v.jsx)(`strong`,{children:ur.length}),` applicants`]}),(0,v.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,v.jsx)(`button`,{"aria-label":`Previous course applicants page`,disabled:fr===1||ur.length===0,onClick:()=>Mi(fr-1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),hr.map(e=>typeof e==`number`?(0,v.jsx)(`button`,{className:fr===e?`admin-page-button--active`:void 0,disabled:ur.length===0,onClick:()=>Mi(e),type:`button`,children:e},e):(0,v.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e)),(0,v.jsx)(`button`,{"aria-label":`Next course applicants page`,disabled:fr===dr||ur.length===0,onClick:()=>Mi(fr+1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,v.jsx)(`div`,{className:`admin-upload-actions`,children:(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:Pi,type:`button`,children:`Close`})})]})]}),Wt&&Oe&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-course-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close applicant deletion warning`,className:`admin-modal-backdrop`,onClick:()=>{Kt||Gt(!1)},type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,v.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`warning`})}),(0,v.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Move to Archive`}),(0,v.jsx)(`h2`,{id:`admin-course-delete-confirm-title`,children:`Delete all course applications?`}),(0,v.jsxs)(`p`,{children:[`Are you sure you want to delete all`,` `,(0,v.jsx)(`strong`,{children:lr.length}),` applications for`,` `,(0,v.jsx)(`strong`,{children:Oe}),`, application year`,` `,(0,v.jsx)(`strong`,{children:Ln}),`?`]})]}),(0,v.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`report`}),`Applicant records will move to the archive. Their uploaded PDFs stay available so the records can be restored.`]}),(0,v.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Kt,onClick:()=>Gt(!1),type:`button`,children:`No, Keep Applications`}),(0,v.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:Kt,onClick:Yi,type:`button`,children:Kt?(0,v.jsx)(y,{variant:`inline`,message:`Deleting applicant records…`}):`Yes, Delete All`})]})]})]}),Xt&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-course-success-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close applicant action success message`,className:`admin-modal-backdrop`,onClick:()=>Zt(null),type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card admin-success-card`,children:[(0,v.jsx)(`div`,{className:`admin-success-card__icon`,"aria-hidden":`true`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,v.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Completed Successfully`}),(0,v.jsx)(`h2`,{id:`admin-course-success-title`,children:Xt.type===`download`?`Applicant download is ready`:`Applications deleted`}),(0,v.jsxs)(`p`,{children:[Xt.count,` applicant`,` `,Xt.count===1?`record`:`records`,` for`,` `,(0,v.jsx)(`strong`,{children:Xt.course}),`, application year`,` `,(0,v.jsx)(`strong`,{children:Xt.year}),` `,Xt.type===`download`?`were added to the CSV file.`:`were deleted successfully.`]})]}),(0,v.jsx)(`div`,{className:`admin-confirm-card__actions admin-success-card__actions`,children:(0,v.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>Zt(null),type:`button`,children:`Done`})})]})]}),Ie&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-school-id-download-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close School ID download modal`,className:`admin-modal-backdrop`,onClick:Ri,type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,v.jsx)(`h2`,{id:`admin-school-id-download-title`,children:`Choose School Year`}),(0,v.jsx)(`p`,{children:`Download all uploaded School ID files for a specific School Year.`})]}),(0,v.jsx)(`button`,{"aria-label":`Close School ID download`,className:`admin-modal-close`,disabled:Ke,onClick:Ri,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsx)(`div`,{style:{marginBottom:18},children:(0,v.jsxs)(`button`,{type:`button`,className:`admin-button admin-button--secondary`,onClick:()=>ze(!0),children:[(0,v.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,"aria-hidden":`true`,children:[(0,v.jsx)(`rect`,{x:`3`,y:`5`,width:`18`,height:`14`,rx:`3`}),(0,v.jsx)(`path`,{d:`M8 10h3m-3 4h3m6-5v4m0 2v1`})]}),`NO ID LIST`]})}),(0,v.jsxs)(`div`,{className:`admin-school-year-downloads`,children:[!Er.length&&(0,v.jsx)(`p`,{children:`No uploaded School ID files are available. Open NO ID LIST to review missing submissions.`}),hi.map(({fileCount:e,schoolYear:t})=>(0,v.jsxs)(`button`,{className:`admin-school-year-button`,disabled:Ke,onClick:()=>Li(t),type:`button`,children:[(0,v.jsx)(`span`,{children:t}),(0,v.jsx)(`strong`,{children:Ke?(0,v.jsx)(y,{variant:`inline`,message:`Preparing your file…`}):`${e} ${e===1?`file`:`files`}`})]},t))]}),(0,v.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,v.jsxs)(`p`,{children:[`Showing `,(0,v.jsx)(`strong`,{children:gi}),`-`,(0,v.jsx)(`strong`,{children:_i}),` of`,` `,(0,v.jsx)(`strong`,{children:Er.length}),` school years`]}),(0,v.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,v.jsx)(`button`,{"aria-label":`Previous School ID page`,disabled:pi===1||Ke,onClick:()=>ki(pi-1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:fi},(e,t)=>{let n=t+1;return(0,v.jsx)(`button`,{"aria-current":pi===n?`page`:void 0,className:pi===n?`admin-page-button--active`:void 0,disabled:Ke,onClick:()=>ki(n),type:`button`,children:n},n)}),(0,v.jsx)(`button`,{"aria-label":`Next School ID page`,disabled:pi===fi||Ke,onClick:()=>ki(pi+1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,v.jsx)(`div`,{className:`admin-upload-actions`,children:(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Ke,onClick:Ri,type:`button`,children:`Cancel`})})]})]}),Re&&(0,v.jsx)(Ji,{sessionToken:e?.sessionToken,onClose:()=>ze(!1)}),Be&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-school-id-batch-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close School ID batch modal`,className:`admin-modal-backdrop`,onClick:()=>{Ke||Ve(``)},type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`School ID Files`}),(0,v.jsx)(`h2`,{id:`admin-school-id-batch-title`,children:`Choose Batch`}),(0,v.jsxs)(`p`,{children:[`Download uploaded School ID files for `,Be,` by batch. File names include Student ID, last name, first name, middle name, and batch no.`]})]}),(0,v.jsx)(`button`,{"aria-label":`Close School ID batch download`,className:`admin-modal-close`,disabled:Ke,onClick:()=>Ve(``),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`admin-school-year-downloads`,children:[xi.map(({batchId:e,fileCount:t})=>(0,v.jsxs)(`button`,{className:`admin-school-year-button`,disabled:Ke||Je,onClick:()=>zi(e,t),type:`button`,children:[(0,v.jsx)(`span`,{children:e}),(0,v.jsxs)(`strong`,{children:[t,` `,t===1?`file`:`files`]})]},e)),Dr.length===0&&(0,v.jsx)(`div`,{className:`admin-modal-empty-state`,children:`No batches with uploaded School ID files were found for this School Year.`})]}),(0,v.jsxs)(`div`,{className:`admin-pagination admin-school-id-pagination`,children:[(0,v.jsxs)(`p`,{children:[`Showing `,(0,v.jsx)(`strong`,{children:Si}),`-`,(0,v.jsx)(`strong`,{children:Ci}),` of`,` `,(0,v.jsx)(`strong`,{children:Dr.length}),` batches`]}),(0,v.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,v.jsx)(`button`,{"aria-label":`Previous School ID batch page`,disabled:yi===1||Ke,onClick:()=>ji(yi-1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Array.from({length:vi},(e,t)=>{let n=t+1;return(0,v.jsx)(`button`,{"aria-current":yi===n?`page`:void 0,className:yi===n?`admin-page-button--active`:void 0,disabled:Ke,onClick:()=>ji(n),type:`button`,children:n},n)}),(0,v.jsx)(`button`,{"aria-label":`Next School ID batch page`,disabled:yi===vi||Ke,onClick:()=>ji(yi+1),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]}),(0,v.jsx)(`div`,{className:`admin-upload-actions`,children:(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Ke,onClick:()=>Ve(``),type:`button`,children:`Back`})})]})]}),He&&!We&&!Ke&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-school-id-batch-action-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close School ID batch actions`,className:`admin-modal-backdrop`,onClick:Bi,type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--compact`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(`p`,{className:`admin-modal-kicker`,children:[`Batch `,He.batchId]}),(0,v.jsx)(`h2`,{id:`admin-school-id-batch-action-title`,children:`Manage School ID Files`}),(0,v.jsxs)(`p`,{children:[He.fileCount,` `,He.fileCount===1?`file`:`files`,` for School Year`,` `,He.schoolYear,`.`]})]}),(0,v.jsx)(`button`,{"aria-label":`Close School ID batch actions`,className:`admin-modal-close`,onClick:Bi,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`admin-school-id-actions`,children:[(0,v.jsxs)(`button`,{className:`admin-school-id-action admin-school-id-action--download`,onClick:()=>Gi(He.schoolYear,He.batchId),type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`folder_zip`}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`strong`,{children:`Download All IDs`}),(0,v.jsx)(`small`,{children:`Create one ZIP file for this batch.`})]})]}),(0,v.jsxs)(`button`,{className:`admin-school-id-action admin-school-id-action--delete`,onClick:()=>Ge(!0),type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete_forever`}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`strong`,{children:`Delete All IDs`}),(0,v.jsx)(`small`,{children:`Remove the Drive files and clear their Convex links.`})]})]})]}),(0,v.jsx)(`div`,{className:`admin-upload-actions`,children:(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:Bi,type:`button`,children:`Back`})})]})]}),We&&He&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-school-id-delete-confirm-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close School ID delete warning`,className:`admin-modal-backdrop`,onClick:()=>{Je||Ge(!1)},type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card`,children:[(0,v.jsx)(`div`,{className:`admin-confirm-card__icon`,"aria-hidden":`true`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`warning`})}),(0,v.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Move to Archive`}),(0,v.jsx)(`h2`,{id:`admin-school-id-delete-confirm-title`,children:`Delete all IDs in this batch?`}),(0,v.jsxs)(`p`,{children:[`Are you sure you want to delete all`,` `,(0,v.jsx)(`strong`,{children:He.fileCount}),` School ID files from Batch`,` `,(0,v.jsx)(`strong`,{children:He.batchId}),`?`]})]}),(0,v.jsxs)(`div`,{className:`admin-confirm-card__notice`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`report`}),`The file links will move to the archive and can be restored. The Drive PDFs remain available until their archive entries are permanently deleted.`]}),(0,v.jsxs)(`div`,{className:`admin-confirm-card__actions`,children:[(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:Je,onClick:()=>Ge(!1),type:`button`,children:`No, Keep Files`}),(0,v.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:Je,onClick:Ki,type:`button`,children:Je?(0,v.jsx)(y,{variant:`inline`,message:`Deleting School ID files…`}):`Yes, Delete All`})]})]})]}),Xe&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-school-id-success-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-confirm-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close School ID success message`,className:`admin-modal-backdrop`,onClick:()=>Ze(null),type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-confirm-card admin-success-card`,children:[(0,v.jsx)(`div`,{className:`admin-success-card__icon`,"aria-hidden":`true`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,v.jsxs)(`div`,{className:`admin-confirm-card__copy`,children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Completed Successfully`}),(0,v.jsx)(`h2`,{id:`admin-school-id-success-title`,children:Xe.type===`download`?`Batch download is ready`:`Batch ID files deleted`}),(0,v.jsxs)(`p`,{children:[Xe.count,` School ID`,` `,Xe.count===1?`file`:`files`,` for Batch`,` `,(0,v.jsx)(`strong`,{children:Xe.batchId}),`, School Year`,` `,(0,v.jsx)(`strong`,{children:Xe.schoolYear}),` `,Xe.type===`download`?`were added to the ZIP file.`:`were deleted successfully.`]})]}),(0,v.jsx)(`div`,{className:`admin-confirm-card__actions admin-success-card__actions`,children:(0,v.jsx)(`button`,{className:`admin-button admin-button--primary`,onClick:()=>Ze(null),type:`button`,children:`Done`})})]})]}),gt&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-edit-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close edit record modal`,className:`admin-modal-backdrop`,onClick:Ha,type:`button`}),(0,v.jsxs)(`form`,{className:`admin-modal-card admin-modal-card--edit`,onSubmit:Ka,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header admin-modal-header--edit`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Edit Record`}),(0,v.jsx)(`h2`,{id:`admin-edit-record-title`,children:`Edit Grantee Information`}),(0,v.jsx)(`p`,{children:`Update the selected grantee record details.`})]}),(0,v.jsx)(`button`,{"aria-label":`Close edit record`,className:`admin-modal-close`,disabled:St,onClick:Ha,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`admin-edit-summary`,children:[(0,v.jsx)(`div`,{className:`admin-edit-summary__icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`person`})}),(0,v.jsxs)(`div`,{className:`admin-edit-summary__text`,children:[(0,v.jsx)(`span`,{children:`Selected Record`}),(0,v.jsx)(`strong`,{children:gt.studentId||`No Student ID`}),(0,v.jsx)(wa,{status:gt.status,tone:Ta(gt.status)})]})]}),(0,v.jsxs)(`div`,{className:`admin-record-details admin-record-details--responsive`,children:[(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`span`,{children:`No.`}),(0,v.jsx)(`input`,{value:vt?.no??``,onChange:Ga(`no`)})]}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`span`,{children:`TES Award Number`}),(0,v.jsx)(`input`,{value:vt?.tesAwardNumber??``,onChange:Ga(`tesAwardNumber`)})]}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`span`,{children:`Student ID`}),(0,v.jsx)(`input`,{value:vt?.studentId??``,onChange:Ga(`studentId`)})]}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`span`,{children:`Last Name`}),(0,v.jsx)(`input`,{value:vt?.lastName??``,onChange:Ga(`lastName`)})]}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`span`,{children:`First Name`}),(0,v.jsx)(`input`,{value:vt?.firstName??``,onChange:Ga(`firstName`)})]}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`span`,{children:`MI.`}),(0,v.jsx)(`input`,{value:vt?.middleInitial??``,onChange:Ga(`middleInitial`)})]}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`span`,{children:`Batch No.`}),(0,v.jsx)(`input`,{value:vt?.batchId??``,onChange:Ga(`batchId`)})]}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`span`,{children:`Status`}),(0,v.jsxs)(`select`,{value:vt?.status??``,onChange:Ga(`status`),children:[(0,v.jsx)(`option`,{value:``,children:`Select Status`}),(0,v.jsx)(`option`,{children:`Grantee`}),(0,v.jsx)(`option`,{children:`Validated`}),(0,v.jsx)(`option`,{children:`Pending`}),(0,v.jsx)(`option`,{children:`Rejected`})]})]}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`span`,{children:`Semester`}),(0,v.jsx)(`input`,{value:vt?.semester??``,onChange:Ga(`semester`)})]}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`span`,{children:`School Year`}),(0,v.jsx)(`input`,{value:vt?.schoolYear??``,onChange:Ga(`schoolYear`)})]})]}),bt&&(0,v.jsx)(`p`,{className:`admin-edit-message`,children:bt}),(0,v.jsxs)(`div`,{className:`admin-upload-actions admin-upload-actions--sticky`,children:[(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:St,onClick:Ha,type:`button`,children:`Cancel`}),(0,v.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:St,type:`submit`,children:St?(0,v.jsx)(y,{variant:`inline`,message:`Saving grantee information…`}):`Save Changes`})]})]})]}),Ae&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-add-record-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close add record modal`,className:`admin-modal-backdrop`,onClick:Va,type:`button`}),(0,v.jsxs)(`form`,{className:`admin-modal-card`,onSubmit:$a,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Add New Record`}),(0,v.jsx)(`h2`,{id:`admin-add-record-title`,children:`Upload CSV File`}),(0,v.jsx)(`p`,{children:`Use the required template format before uploading grantee records.`})]}),(0,v.jsx)(`button`,{"aria-label":`Close add record`,className:`admin-modal-close`,disabled:ot,onClick:Va,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`admin-upload-body`,children:[(0,v.jsxs)(`button`,{className:`admin-button admin-button--secondary`,onClick:Dn,type:`button`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`download`}),`Download CSV Template`]}),(0,v.jsxs)(`label`,{className:`admin-upload-dropzone`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload_file`}),(0,v.jsx)(`strong`,{children:et?et.name:`Choose CSV file`}),(0,v.jsx)(`span`,{children:`Accepted format: downloaded CSV template`}),(0,v.jsx)(`input`,{accept:`.csv,text/csv`,disabled:ot,onChange:Qa,type:`file`})]}),(0,v.jsx)(`div`,{className:`admin-template-preview`,"aria-label":`CSV template headers`,children:Ca.map(e=>(0,v.jsx)(`span`,{children:e},e))}),nt&&(0,v.jsx)(`p`,{className:`admin-upload-message`,children:nt})]}),(0,v.jsxs)(`div`,{className:`admin-upload-actions`,children:[(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,disabled:ot,onClick:Va,type:`button`,children:`Cancel`}),(0,v.jsxs)(`button`,{className:`admin-button admin-button--primary`,disabled:ot,type:`submit`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`upload`}),ot?(0,v.jsx)(y,{variant:`inline`,message:`Saving grantee records…`}):`Upload`]})]})]})]}),j&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-user-management-title`,"aria-modal":`true`,className:`admin-modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close user management modal`,className:`admin-modal-backdrop`,onClick:()=>{!N&&!L&&M(!1)},type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--users`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`User Management`}),(0,v.jsx)(`h2`,{id:`admin-user-management-title`,children:`Student Accounts`}),(0,v.jsx)(`p`,{children:`Search and manage registered student account details.`})]}),(0,v.jsx)(`button`,{"aria-label":`Close user management`,className:`admin-modal-close`,onClick:()=>M(!1),type:`button`,children:(0,v.jsx)(ca,{name:`close`})})]}),H&&(0,v.jsx)(`p`,{className:`admin-user-message`,role:`status`,children:H}),(0,v.jsxs)(`div`,{className:`admin-search-field admin-user-search`,children:[(0,v.jsx)(ca,{name:`search`}),(0,v.jsx)(`input`,{"aria-label":`Search student accounts`,onChange:e=>{Z(e.target.value),X(1)},placeholder:`Search Student ID, Name, Address, Email, Phone, or Facebook...`,type:`search`,value:ee})]}),(0,v.jsx)(`div`,{className:`admin-quick-actions-table-wrap admin-users-table-wrap`,children:(0,v.jsxs)(`table`,{className:`admin-quick-actions-table admin-users-table`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`No.`}),(0,v.jsx)(`th`,{children:`Student ID`}),(0,v.jsx)(`th`,{children:`Last Name`}),(0,v.jsx)(`th`,{children:`First Name`}),(0,v.jsx)(`th`,{children:`Middle Name`}),(0,v.jsx)(`th`,{children:`Complete Permanent Address`}),(0,v.jsx)(`th`,{children:`Email Address`}),(0,v.jsx)(`th`,{children:`Phone Number`}),(0,v.jsx)(`th`,{children:`Facebook Profile`}),(0,v.jsx)(`th`,{children:`Actions`})]})}),(0,v.jsxs)(`tbody`,{children:[un===void 0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-empty-state`,colSpan:10,children:(0,v.jsx)(y,{variant:`table`,message:`Loading student accounts…`})})}),un!==void 0&&Nr.length===0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`admin-empty-state`,colSpan:10,children:`No student accounts found.`})}),zr.map((e,t)=>(0,v.jsxs)(`tr`,{className:`student-account-row`,onClick:()=>I(e.id),children:[(0,v.jsx)(`td`,{"data-label":`No.`,children:Rr+t+1}),(0,v.jsx)(`td`,{"data-label":`Student ID`,children:(0,v.jsx)(`button`,{type:`button`,className:`student-account-view`,"aria-label":`View student account ${e.schoolId||e.email}`,onClick:t=>{t.stopPropagation(),I(e.id)},children:e.schoolId||`Not provided`})}),(0,v.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`Not provided`}),(0,v.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`Not provided`}),(0,v.jsx)(`td`,{"data-label":`Middle Name`,children:e.middleName||`Not provided`}),(0,v.jsx)(`td`,{"data-label":`Complete Permanent Address`,children:e.currentAddress||`Not provided`}),(0,v.jsx)(`td`,{"data-label":`Email Address`,children:e.email||`Not provided`}),(0,v.jsx)(`td`,{"data-label":`Phone Number`,children:e.phoneNumber||`Not provided`}),(0,v.jsx)(`td`,{"data-label":`Facebook Profile`,children:e.facebookProfileUrl?(0,v.jsx)(`a`,{className:`admin-user-facebook-link`,href:e.facebookProfileUrl,onClick:e=>e.stopPropagation(),rel:`noreferrer`,target:`_blank`,children:`View Profile`}):`Not provided`}),(0,v.jsx)(`td`,{"data-label":`Actions`,children:(0,v.jsxs)(`div`,{className:`admin-user-actions`,children:[(0,v.jsx)(`button`,{"aria-label":`Edit ${e.email}`,onClick:t=>{t.stopPropagation(),no(e)},type:`button`,children:(0,v.jsx)(ca,{name:`edit`})}),(0,v.jsx)(`button`,{"aria-label":`Delete ${e.email}`,className:`admin-user-action--delete`,onClick:t=>{t.stopPropagation(),R(e),U(``)},type:`button`,children:(0,v.jsx)(ca,{name:`delete`})})]})})]},e.id))]})]})}),(0,v.jsxs)(`div`,{className:`admin-pagination admin-user-pagination`,children:[(0,v.jsxs)(`p`,{children:[`Showing `,(0,v.jsx)(`strong`,{children:Hr}),` to `,(0,v.jsx)(`strong`,{children:Ur}),` of `,(0,v.jsx)(`strong`,{children:Nr.length}),` matching users · `,(0,v.jsx)(`strong`,{children:Fn.length}),` total`]}),(0,v.jsxs)(`div`,{className:`admin-pagination__buttons`,children:[(0,v.jsx)(`button`,{"aria-label":`Previous users page`,disabled:Lr===1||Nr.length===0,onClick:()=>X(Lr-1),type:`button`,children:(0,v.jsx)(ca,{name:`previous`})}),Vr.map(e=>typeof e==`string`?(0,v.jsx)(`span`,{className:`admin-pagination__ellipsis`,children:`...`},e):(0,v.jsx)(`button`,{className:Lr===e?`admin-page-button--active`:void 0,disabled:Nr.length===0,onClick:()=>X(e),type:`button`,children:e},e)),(0,v.jsx)(`button`,{"aria-label":`Next users page`,disabled:Lr===Ir||Nr.length===0,onClick:()=>X(Lr+1),type:`button`,children:(0,v.jsx)(ca,{name:`next`})})]})]})]})]}),F&&Fn.some(e=>e.id===F)&&(0,v.jsx)(la,{user:Fn.find(e=>e.id===F),onClose:()=>I(null),onEdit:e=>{I(null),no(e)},onDelete:e=>{I(null),R(e),U(``)}}),N&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-edit-user-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-modal-overlay--nested`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close edit user modal`,className:`admin-modal-backdrop`,onClick:()=>P(null),type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--user-form`,children:[(0,v.jsxs)(`div`,{className:`admin-modal-header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`admin-modal-kicker`,children:`Edit User`}),(0,v.jsx)(`h2`,{id:`admin-edit-user-title`,children:`Update Account`})]}),(0,v.jsx)(`button`,{"aria-label":`Close edit user`,className:`admin-modal-close`,onClick:()=>P(null),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsxs)(`form`,{className:`admin-user-form`,onSubmit:async t=>{if(t.preventDefault(),!(!N||W)){K(!0),U(``);try{let t=await xn({sessionToken:e?.sessionToken,id:N.id,email:z.email,phoneNumber:z.phoneNumber});if(!t.success){U(t.message);return}P(null),U(t.message)}catch(e){U(G(e,`Unable to update the user account.`,`admin.admin`))}finally{K(!1)}}},children:[(0,v.jsxs)(`label`,{children:[`Email Address`,(0,v.jsx)(`input`,{autoComplete:`email`,name:`email`,onChange:ro,required:!0,type:`email`,value:z.email})]}),(0,v.jsxs)(`label`,{children:[`Phone Number`,(0,v.jsx)(`input`,{autoComplete:`tel`,name:`phoneNumber`,onChange:ro,placeholder:`09123456789`,required:!0,type:`tel`,value:z.phoneNumber})]}),H&&(0,v.jsx)(`p`,{className:`admin-user-message admin-user-message--error`,role:`alert`,children:H}),(0,v.jsxs)(`div`,{className:`admin-user-form__actions`,children:[(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>P(null),type:`button`,children:`Cancel`}),(0,v.jsx)(`button`,{className:`admin-button admin-button--primary`,disabled:W,type:`submit`,children:W?(0,v.jsx)(y,{variant:`inline`,message:`Saving account information…`}):`Save Changes`})]})]})]})]}),L&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-delete-user-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-modal-overlay--nested`,role:`alertdialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Cancel deleting user`,className:`admin-modal-backdrop`,onClick:()=>R(null),type:`button`}),(0,v.jsxs)(`section`,{className:`admin-modal-card admin-modal-card--confirm`,children:[(0,v.jsx)(`div`,{className:`admin-delete-user-icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`delete`})}),(0,v.jsx)(`h2`,{id:`admin-delete-user-title`,children:`Delete user account?`}),(0,v.jsxs)(`p`,{children:[`This moves `,(0,v.jsx)(`strong`,{children:L.email}),` to the archive, where the account can be restored.`]}),H&&(0,v.jsx)(`p`,{className:`admin-user-message admin-user-message--error`,role:`alert`,children:H}),(0,v.jsxs)(`div`,{className:`admin-user-form__actions`,children:[(0,v.jsx)(`button`,{className:`admin-button admin-button--secondary`,onClick:()=>R(null),type:`button`,children:`Cancel`}),(0,v.jsx)(`button`,{className:`admin-button admin-button--danger`,disabled:q,onClick:async()=>{if(!(!L||q)){J(!0),U(``);try{let t=await Sn({id:L.id,sessionToken:e?.sessionToken});if(!t.success){U(t.message);return}R(null),U(t.message)}catch(e){U(G(e,`Unable to delete the user account.`,`admin.admin`))}finally{J(!1)}}},type:`button`,children:q?(0,v.jsx)(y,{variant:`inline`,message:`Deleting account…`}):`Delete User`})]})]})]}),k&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-quick-actions-title`,"aria-modal":`true`,className:`admin-modal-overlay admin-modal-overlay--support`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close Student Support modal`,className:`admin-modal-backdrop`,onClick:()=>A(!1),type:`button`}),(0,v.jsx)(`section`,{className:`admin-modal-card admin-modal-card--wide admin-modal-card--quick-actions`,children:(0,v.jsx)(Ai,{sessionToken:e?.sessionToken,requestCount:jn.length,onExport:Xi,onClose:()=>A(!1)})})]}),(0,v.jsx)(`div`,{className:`admin-scroll-progress`,style:{"--admin-scroll":u}})]})}var Ya=`
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
`,Xa={quickActions:{table:`quickActions`,source:`all-grantee-information-header`,defaultStatus:`new`,fields:{email:{label:`Email account`,type:`email`,required:!0,placeholder:`name@example.com`},question:{label:`Question`,type:`textarea`,required:!0,placeholder:`Type your question or request here...`}}}},Za=`ibacmi-visitor-support-token`;function Qa(){let e=globalThis.crypto;if(typeof e?.randomUUID==`function`)try{return e.randomUUID()}catch{}if(typeof e?.getRandomValues==`function`)try{let t=e.getRandomValues(new Uint8Array(16));return Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}catch{}return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`}function $a(e){return new Intl.DateTimeFormat(`en-PH`,{hour:`numeric`,minute:`2-digit`}).format(new Date(e))}function eo(e){return new Intl.DateTimeFormat(`en-PH`,{dateStyle:`medium`}).format(new Date(e))}function to(e){try{let t=new URL(e),n=t.hostname.toLowerCase(),r=[`example.com`,`example.org`,`example.net`,`localhost`].some(e=>n===e||n.endsWith(`.${e}`))||[`.test`,`.invalid`,`.local`].some(e=>n.endsWith(e));return[`http:`,`https:`].includes(t.protocol)&&!!t.hostname&&!t.username&&!t.password&&!r}catch{return!1}}function no(e){let t=`${e.name} ${e.url}`.toLowerCase();return t.includes(`messenger`)||t.includes(`facebook`)?`forum`:t.includes(`whatsapp`)||t.includes(`phone`)?`call`:t.includes(`email`)||t.includes(`mail`)?`mail`:t.includes(`student`)||t.includes(`school`)||t.includes(`portal`)?`school`:`link`}function ro({onRequest:e}){let[t,n]=(0,m.useState)(()=>window.localStorage.getItem(Za)||``),[r,i]=(0,m.useState)(!1),[a,o]=(0,m.useState)(``),[s,c]=(0,m.useState)(`Student`),[l,u]=(0,m.useState)(``),[d,f]=(0,m.useState)(``),[p,h]=(0,m.useState)(``),[g,_]=(0,m.useState)(``),[b,x]=(0,m.useState)(!1),[S,C]=(0,m.useState)(!1),[w,T]=(0,m.useState)(!1),E=(0,m.useRef)(null),D=(0,m.useRef)(null),O=Mr($.support.getVisitorConversation,t?{visitorToken:t}:`skip`),k=Pr($.support.createVisitorConversation),A=Pr($.support.sendVisitorMessage),j=Pr($.support.markVisitorRead),M=Mr($.support.getPublicLinks,b?{}:`skip`),N=O?.messages??[],P=(M?.links??[]).filter(e=>to(e.url)),F=r?0:O?.unreadCount??0,I=!!(t&&O===null);(0,m.useEffect)(()=>{!r||!t||!O?.unreadCount||j({visitorToken:t}).catch(()=>{})},[r,t,O?.unreadCount,j]),(0,m.useEffect)(()=>{!r||!E.current||E.current.scrollTo({top:E.current.scrollHeight,behavior:`smooth`})},[r,N.length]),(0,m.useEffect)(()=>{if(!b)return;let e=e=>{e.key===`Escape`&&x(!1)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[b]);let L=async e=>{if(e.preventDefault(),!S){C(!0),_(``);try{let e=await k({name:a,visitorType:s,...s===`Student`&&l.trim()?{schoolId:l.trim()}:{},...s===`Parent / Guardian`&&d.trim()?{studentName:d.trim()}:{}});window.localStorage.setItem(Za,e.visitorToken),n(e.visitorToken)}catch(e){_(G(e,`Unable to start a conversation. Please try again.`,`support.visitor`))}finally{C(!1)}}},R=async()=>{let e=p.trim();if(!(!e||w||!t||I)){T(!0),_(``);try{await A({visitorToken:t,content:e,clientMessageId:Qa()}),h(``),D.current&&(D.current.style.height=``)}catch(e){_(G(e,`Message could not be sent. Please try again.`,`support.visitor`))}finally{T(!1)}}},z=e=>{h(e.target.value),e.target.style.height=`auto`,e.target.style.height=`${Math.min(e.target.scrollHeight,120)}px`},B=I||!t;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`button`,{className:`visitor-launcher`,type:`button`,"aria-label":`Chat with Scholarship Support`,"aria-expanded":r,onClick:()=>i(e=>!e),children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:r?`close`:`chat`}),F>0&&(0,v.jsx)(`span`,{className:`visitor-launcher__badge`,"aria-label":`${F} unread replies`,children:F>9?`9+`:F}),(0,v.jsx)(`span`,{className:`visitor-launcher__hint`,children:`Need help? Chat with us`})]}),r&&(0,v.jsxs)(`section`,{className:`visitor-chat`,role:`dialog`,"aria-modal":`false`,"aria-label":`IBACMI Scholarship Support chat`,children:[(0,v.jsxs)(`header`,{className:`visitor-chat__header`,children:[(0,v.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:`IBACMI`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:`IBACMI Scholarship Support`}),(0,v.jsx)(`span`,{children:`Chat with our Scholarship Office`})]}),(0,v.jsx)(`button`,{type:`button`,"aria-label":`Minimize chat`,onClick:()=>i(!1),children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`expand_more`})})]}),!B&&O===void 0&&(0,v.jsx)(y,{variant:`compact`,message:`Connecting to your conversations…`}),B&&(0,v.jsxs)(`form`,{className:`visitor-welcome`,onSubmit:L,children:[(0,v.jsx)(`p`,{className:`visitor-welcome__intro`,children:`Welcome to IBACMI Scholarship Office Support! We're here to assist you with your scholarship questions.`}),I&&(0,v.jsx)(`p`,{className:`visitor-chat__expired`,children:`Your previous chat session has expired. You can start a new conversation.`}),(0,v.jsxs)(`label`,{children:[`May I know your name?`,(0,v.jsx)(`input`,{required:!0,minLength:2,maxLength:100,value:a,onChange:e=>o(e.target.value),placeholder:`Full name`,autoComplete:`name`})]}),(0,v.jsxs)(`fieldset`,{children:[(0,v.jsx)(`legend`,{children:`May I know if you are a Student or Parent/Guardian?`}),[`Student`,`Parent / Guardian`,`Other Visitor`].map(e=>(0,v.jsxs)(`label`,{className:`visitor-choice`,children:[(0,v.jsx)(`input`,{type:`radio`,name:`visitorType`,value:e,checked:s===e,onChange:()=>c(e)}),e]},e))]}),s===`Student`&&(0,v.jsxs)(`label`,{children:[`School ID `,(0,v.jsx)(`span`,{children:`(optional)`}),(0,v.jsx)(`input`,{maxLength:30,value:l,onChange:e=>u(e.target.value),placeholder:`Your school ID`})]}),s===`Parent / Guardian`&&(0,v.jsxs)(`label`,{children:[`Student's name `,(0,v.jsx)(`span`,{children:`(optional)`}),(0,v.jsx)(`input`,{maxLength:100,value:d,onChange:e=>f(e.target.value),placeholder:`Student's name`})]}),(0,v.jsx)(`p`,{className:`visitor-privacy`,children:`We use these details only to identify your conversation and respond to your inquiry.`}),g&&(0,v.jsx)(`p`,{className:`visitor-chat__error`,role:`alert`,children:g}),(0,v.jsx)(`button`,{className:`visitor-primary`,type:`submit`,disabled:S,children:S?(0,v.jsx)(y,{variant:`inline`,message:`Connecting…`}):`Start Conversation`}),e&&(0,v.jsx)(`button`,{className:`visitor-request-link`,type:`button`,onClick:()=>x(!0),children:`Submit a student support request`})]}),!B&&O&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`visitor-chat__history`,ref:E,children:[N.length===0&&(0,v.jsxs)(`div`,{className:`visitor-chat__empty`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`forum`}),(0,v.jsxs)(`p`,{children:[`Hi `,O.conversation.studentName,`, how can we help?`]})]}),N.map((e,t)=>{let n=N[t-1],r=!n||new Date(n.createdAt).toDateString()!==new Date(e.createdAt).toDateString(),i=e.senderRole===`visitor`;return(0,v.jsxs)(`div`,{children:[r&&(0,v.jsx)(`div`,{className:`visitor-date`,children:(0,v.jsx)(`span`,{children:eo(e.createdAt)})}),(0,v.jsxs)(`div`,{className:`visitor-message ${i?`is-own`:``}`,children:[!i&&(0,v.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:``}),(0,v.jsxs)(`div`,{className:`visitor-message__body`,children:[(0,v.jsx)(`p`,{children:e.content}),(0,v.jsx)(`time`,{children:$a(e.createdAt)})]})]})]},e._id)})]}),(0,v.jsxs)(`form`,{className:`visitor-composer`,onSubmit:e=>{e.preventDefault(),R()},children:[g&&(0,v.jsx)(`p`,{className:`visitor-chat__error`,role:`alert`,children:g}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`textarea`,{ref:D,value:p,onChange:z,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),R())},maxLength:2e3,placeholder:`Write a message…`,"aria-label":`Write a message`}),(0,v.jsx)(`button`,{type:`submit`,"aria-label":`Send message`,disabled:!p.trim()||w,children:w?(0,v.jsx)(y,{variant:`inline`,message:``}):(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`send`})})]}),(0,v.jsx)(`small`,{children:`Enter to send · Shift + Enter for a new line`})]})]})]}),b&&(0,v.jsx)(`div`,{className:`support-options-backdrop`,onMouseDown:e=>{e.target===e.currentTarget&&x(!1)},children:(0,v.jsxs)(`section`,{className:`support-options-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`support-options-title`,children:[(0,v.jsx)(`button`,{className:`support-options-close`,type:`button`,"aria-label":`Close support options`,onClick:()=>x(!1),children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,v.jsxs)(`div`,{className:`support-options-heading`,children:[(0,v.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:`IBACMI`}),(0,v.jsx)(`span`,{className:`support-options-eyebrow`,children:`IBACMI SCHOLARSHIP OFFICE`}),(0,v.jsx)(`h2`,{id:`support-options-title`,children:`How can we help you?`}),(0,v.jsx)(`p`,{children:`Choose your preferred support channel to contact the IBACMI Scholarship Office.`})]}),(0,v.jsxs)(`div`,{className:`support-options-list`,"aria-live":`polite`,children:[M===void 0&&(0,v.jsx)(y,{variant:`compact`,message:`Loading support channels…`}),M?.error&&(0,v.jsx)(`div`,{className:`support-options-state support-options-state--error`,role:`alert`,children:`Support channels could not be loaded. Please try again shortly.`}),M&&!M.error&&P.length===0&&(0,v.jsx)(`div`,{className:`support-options-state`,children:`No support channels are configured yet. Please continue using this chat for help.`}),P.map(e=>(0,v.jsxs)(`a`,{className:`support-option-card`,href:e.url,target:`_blank`,rel:`noopener noreferrer`,children:[(0,v.jsx)(`span`,{className:`support-option-card__icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:no(e)})}),(0,v.jsxs)(`span`,{className:`support-option-card__copy`,children:[(0,v.jsx)(`strong`,{children:e.name}),(0,v.jsx)(`small`,{children:`Open this support channel`})]}),(0,v.jsx)(`span`,{className:`material-symbols-outlined support-option-card__arrow`,"aria-hidden":`true`,children:`open_in_new`})]},e.id))]})]})})]})}function io(e){let t=(0,h.c)(76),{onDismiss:n,onLogin:r,onRegister:i,onSearch:a}=e,[o,s]=(0,m.useState)(1),c=(0,m.useRef)(null),l=(0,m.useRef)(null),u,d;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(u=()=>{let e=c.current,t=document.activeElement,n=document.body.style.overflow;return e.showModal(),document.body.style.overflow=`hidden`,()=>{e.close(),document.body.style.overflow=n,t?.isConnected&&t.focus({preventScroll:!0})}},d=[],t[0]=u,t[1]=d):(u=t[0],d=t[1]),(0,m.useEffect)(u,d);let f;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(f=()=>{l.current?.focus()},t[2]=f):f=t[2];let p;t[3]===o?p=t[4]:(p=[o],t[3]=o,t[4]=p),(0,m.useEffect)(f,p);let _;t[5]===n?_=t[6]:(_=e=>{e.preventDefault(),n()},t[5]=n,t[6]=_);let y;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(y=e=>{if(e.key!==`Tab`)return;let t=[...e.currentTarget.querySelectorAll(`button:not([disabled])`)],n=t[0],r=t.at(-1);e.shiftKey&&(document.activeElement===n||document.activeElement===l.current)?(e.preventDefault(),r?.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n?.focus())},t[7]=y):y=t[7];let b;t[8]===n?b=t[9]:(b=e=>{let t=e.currentTarget.getBoundingClientRect();e.target===e.currentTarget&&(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&n()},t[8]=n,t[9]=b);let x;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,v.jsxs)(`div`,{className:`verification-brand`,children:[(0,v.jsx)(`img`,{src:g,alt:`IBACMI`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:`IBACMI`}),(0,v.jsx)(`span`,{children:`Scholarship Office`})]})]}),t[10]=x):x=t[10];let S;t[11]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,"aria-hidden":`true`,children:(0,v.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),t[11]=S):S=t[11];let C;t[12]===n?C=t[13]:(C=(0,v.jsxs)(`div`,{className:`verification-topline`,children:[x,(0,v.jsx)(`button`,{className:`verification-icon-button`,type:`button`,"aria-label":`Sirad-i ang verification`,onClick:n,children:S})]}),t[12]=n,t[13]=C);let w=`Lakang ${o} sa 2`,T=o===1?`is-current`:`is-complete`,E=o===1?`step`:void 0,D;t[14]!==T||t[15]!==E?(D=(0,v.jsx)(`span`,{className:T,"aria-current":E,children:`1`}),t[14]=T,t[15]=E,t[16]=D):D=t[16];let O;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(O=(0,v.jsx)(`i`,{"aria-hidden":`true`}),t[17]=O):O=t[17];let k=o===2?`is-current`:``,A=o===2?`step`:void 0,j;t[18]!==k||t[19]!==A?(j=(0,v.jsx)(`span`,{className:k,"aria-current":A,children:`2`}),t[18]=k,t[19]=A,t[20]=j):j=t[20];let M;t[21]===o?M=t[22]:(M=(0,v.jsxs)(`p`,{children:[`Lakang `,o,` sa 2`]}),t[21]=o,t[22]=M);let N;t[23]!==w||t[24]!==D||t[25]!==j||t[26]!==M?(N=(0,v.jsxs)(`div`,{className:`verification-progress`,"aria-label":w,children:[D,O,j,M]}),t[23]=w,t[24]=D,t[25]=j,t[26]=M,t[27]=N):N=t[27];let P;t[28]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,v.jsx)(`span`,{className:`verification-kicker`,children:`Tabangan ka namo`}),t[28]=P):P=t[28];let F=o===1?`Naa na kay account?`:`Naa ba imong pangalan sa official grantee list?`,I;t[29]===F?I=t[30]:(I=(0,v.jsx)(`h2`,{id:`account-verification-title`,ref:l,tabIndex:-1,children:F}),t[29]=F,t[30]=I);let L=o===1?`Palihog pili sa imong tubag aron matabangan ka namo sa sunod nga proseso.`:`Na-search ug nakumpirma na ba nimo imong pangalan gamit ang Student ID, Batch Number, o Apelyido?`,R;t[31]===L?R=t[32]:(R=(0,v.jsx)(`p`,{id:`account-verification-description`,children:L}),t[31]=L,t[32]=R);let z=o===1?r:i,B;t[33]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,"aria-hidden":`true`,children:[(0,v.jsx)(`path`,{d:`m7 12 3 3 7-7`}),(0,v.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`})]}),t[33]=B):B=t[33];let V=o===1?`Oo, naa na koy account`:`Oo, naa ko sa list`,H;t[34]===V?H=t[35]:(H=(0,v.jsx)(`span`,{children:V}),t[34]=V,t[35]=H);let U;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,v.jsx)(`span`,{"aria-hidden":`true`,children:`→`}),t[36]=U):U=t[36];let W;t[37]!==z||t[38]!==H?(W=(0,v.jsxs)(`button`,{className:`verification-option verification-option--primary`,type:`button`,onClick:z,children:[B,H,U]}),t[37]=z,t[38]=H,t[39]=W):W=t[39];let G;t[40]!==a||t[41]!==o?(G=o===1?()=>s(2):a,t[40]=a,t[41]=o,t[42]=G):G=t[42];let K;t[43]===o?K=t[44]:(K=(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,"aria-hidden":`true`,children:o===1?(0,v.jsx)(`path`,{d:`M12 5v14M5 12h14`}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`circle`,{cx:`10.5`,cy:`10.5`,r:`6.5`}),(0,v.jsx)(`path`,{d:`m16 16 5 5`})]})}),t[43]=o,t[44]=K);let q=o===1?`Wala pa koy account`:`Wala pa nako na-check`,J;t[45]===q?J=t[46]:(J=(0,v.jsx)(`span`,{children:q}),t[45]=q,t[46]=J);let Y;t[47]===Symbol.for(`react.memo_cache_sentinel`)?(Y=(0,v.jsx)(`span`,{"aria-hidden":`true`,children:`→`}),t[47]=Y):Y=t[47];let X;t[48]!==G||t[49]!==K||t[50]!==J?(X=(0,v.jsxs)(`button`,{className:`verification-option`,type:`button`,onClick:G,children:[K,J,Y]}),t[48]=G,t[49]=K,t[50]=J,t[51]=X):X=t[51];let ee;t[52]!==W||t[53]!==X?(ee=(0,v.jsxs)(`div`,{className:`verification-options`,children:[W,X]}),t[52]=W,t[53]=X,t[54]=ee):ee=t[54];let Z;t[55]!==o||t[56]!==I||t[57]!==R||t[58]!==ee?(Z=(0,v.jsxs)(`div`,{className:`verification-question`,children:[P,I,R,ee]},o),t[55]=o,t[56]=I,t[57]=R,t[58]=ee,t[59]=Z):Z=t[59];let Q;t[60]!==n||t[61]!==o?(Q=o===1?n:()=>s(1),t[60]=n,t[61]=o,t[62]=Q):Q=t[62];let te;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(te=(0,v.jsx)(`span`,{"aria-hidden":`true`,children:`←`}),t[63]=te):te=t[63];let ne;t[64]===Q?ne=t[65]:(ne=(0,v.jsxs)(`button`,{type:`button`,className:`verification-back`,onClick:Q,children:[te,` Balik`]}),t[64]=Q,t[65]=ne);let re;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(re=(0,v.jsx)(`span`,{children:`IBACMI · Student access`}),t[66]=re):re=t[66];let ie;t[67]===ne?ie=t[68]:(ie=(0,v.jsxs)(`footer`,{className:`verification-footer`,children:[ne,re]}),t[67]=ne,t[68]=ie);let ae;return t[69]!==C||t[70]!==N||t[71]!==Z||t[72]!==ie||t[73]!==_||t[74]!==b?(ae=(0,v.jsxs)(`dialog`,{ref:c,className:`account-verification`,lang:`ceb`,"aria-labelledby":`account-verification-title`,"aria-describedby":`account-verification-description`,onCancel:_,onKeyDown:y,onClick:b,children:[C,N,Z,ie]}),t[69]=C,t[70]=N,t[71]=Z,t[72]=ie,t[73]=_,t[74]=b,t[75]=ae):ae=t[75],ae}var ao=yr();function oo(){let e=new Map,t=t=>{let n=e.get(t);n&&(n.abort.abort(),n.url&&URL.revokeObjectURL(n.url),e.delete(t))};return{get(n){let r=e.get(n);if(r)return r.used=Date.now(),r.promise;let i={abort:new AbortController,used:Date.now(),size:0,url:null,promise:null};return i.promise=fetch(n,{cache:`no-store`,signal:i.abort.signal}).then(e=>{if(!e.ok)throw Error(`Image unavailable`);return e.blob()}).then(r=>{if(i.abort.signal.aborted)throw Error(`Image request cancelled`);i.size=r.size,i.url=URL.createObjectURL(r);let a=[...e.values()].reduce((e,t)=>e+t.size,0);for(let[r,i]of[...e].sort((e,t)=>e[1].used-t[1].used)){if(e.size<=20&&a<=40*1024*1024)break;r!==n&&i.url&&(a-=i.size,t(r))}return i.url}).catch(t=>{throw e.get(n)===i&&e.delete(n),t}),e.set(n,i),i.promise},retain(n){let r=new Set(n);for(let n of e.keys())r.has(n)||t(n)},destroy(){for(let n of e.keys())t(n)}}}var so=(e,t)=>(e%t+t)%t,co=[-2,-1,0,1,2];function lo(e){let t=(0,h.c)(94),{images:n,imageCache:r}=e,i=(0,m.useRef)(null),a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=[],t[0]=a):a=t[0];let o=(0,m.useRef)(a),s=(0,m.useRef)(0),c=(0,m.useRef)(null),l=(0,m.useRef)(0),u=(0,m.useRef)(null),d=(0,m.useRef)(!1),[f,p]=(0,m.useState)(0),[g,_]=(0,m.useState)(!1),[y,b]=(0,m.useState)(!1),[x,S]=(0,m.useState)(!1),[C,w]=(0,m.useState)(!0),[T,E]=(0,m.useState)(ho),[D,O]=(0,m.useState)(0),[k,A]=(0,m.useState)(null),[j,M]=(0,m.useState)(mo),N=n.length,P;t[1]!==x||t[2]!==T||t[3]!==y||t[4]!==n||t[5]!==g||t[6]!==j||t[7]!==k||t[8]!==C?(P=g||y||x||!C||T||j||n.some(e=>e._id===k),t[1]=x,t[2]=T,t[3]=y,t[4]=n,t[5]=g,t[6]=j,t[7]=k,t[8]=C,t[9]=P):P=t[9];let F=P,I,L;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(I=()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>{e.matches&&(c.current=null),M(e.matches)},n=()=>E(document.hidden);e.addEventListener(`change`,t),document.addEventListener(`visibilitychange`,n);let r=new IntersectionObserver(e=>{let[t]=e;return w(t.isIntersecting)},{threshold:.1});return r.observe(i.current),()=>{e.removeEventListener(`change`,t),document.removeEventListener(`visibilitychange`,n),r.disconnect()}},L=[],t[10]=I,t[11]=L):(I=t[10],L=t[11]),(0,m.useEffect)(I,L);let R;t[12]===N?R=t[13]:(R=e=>{let t=window.innerWidth<=600?8:window.innerWidth<=900?18:26;o.current.forEach((n,r)=>{if(!n)return;let i=co[r]-e,a=Math.abs(i);N===2?(n.style.transform=`translate(-50%, -50%) translateX(${i*108}%)`,n.style.opacity=a>1.25?`0`:`1`):(n.style.transform=`translate(-50%, -50%) translateX(${i*78}%) translateZ(${-a*125}px) rotateY(${Math.max(-38,Math.min(38,-i*t))}deg) scale(${Math.max(.62,1-a*.12)})`,n.style.opacity=String(Math.max(0,Math.min(1,2.4-a)))),n.style.zIndex=String(30-Math.round(a*5))})},t[12]=N,t[13]=R);let z=R,B,V;t[14]===z?(B=t[15],V=t[16]):(B=()=>{let e=()=>z(s.current-Math.floor(s.current));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},V=[z],t[14]=z,t[15]=B,t[16]=V),(0,m.useEffect)(B,V);let H;t[17]===z?H=t[18]:(H=()=>{z(s.current-Math.floor(s.current))},t[17]=z,t[18]=H),(0,m.useLayoutEffect)(H);let U;t[19]!==N||t[20]!==z||t[21]!==F?(U=()=>{if(N<2)return;let e,t=0,n=r=>{let i=t?Math.min(50,r-t):0;if(t=r,c.current){let e=c.current;e.start||=r;let t=Math.min(1,(r-e.start)/480),n=1-(1-t)**3;s.current=e.from+(e.to-e.from)*n,t===1&&(c.current=null)}else F||(s.current+=i/5500);let a=so(Math.floor(s.current),N);a!==l.current&&(l.current=a,(0,ao.flushSync)(()=>p(a))),z(s.current-Math.floor(s.current)),(!F||c.current)&&(e=requestAnimationFrame(n))};return(!F||c.current)&&(e=requestAnimationFrame(n)),()=>cancelAnimationFrame(e)},t[19]=N,t[20]=z,t[21]=F,t[22]=U):U=t[22];let W;t[23]!==N||t[24]!==z||t[25]!==F||t[26]!==D?(W=[N,F,D,z],t[23]=N,t[24]=z,t[25]=F,t[26]=D,t[27]=W):W=t[27],(0,m.useEffect)(U,W);let G;t[28]!==N||t[29]!==j?(G=e=>{let t=Math.floor(s.current)+e;j?(s.current=t,l.current=so(t,N),p(l.current),O(po)):(c.current={from:s.current,to:t,start:0},O(fo))},t[28]=N,t[29]=j,t[30]=G):G=t[30];let K=G,q,J,Y,X,ee,Z,Q,te,ne,re,ie,ae,oe,se,ce;if(t[31]!==K||t[32]!==N||t[33]!==r||t[34]!==n||t[35]!==f||t[36]!==k){let e=e=>{if(d.current){d.current=!1;return}c.current=null,A(e)},a;t[52]===k?a=t[53]:(a=e=>e._id===k,t[52]=k,t[53]=a),ce=n.findIndex(a),q=so(f,N),J=i,Y=`documentation-stage ${N===1?`is-single`:N===2?`is-pair`:``}`,X=`carousel`,ee=`Published Scholarship Office documentation`,t[54]===Symbol.for(`react.memo_cache_sentinel`)?(Z=()=>b(!0),Q=()=>b(!1),te=()=>S(!0),ne=e=>{e.currentTarget.contains(e.relatedTarget)||S(!1)},t[54]=Z,t[55]=Q,t[56]=te,t[57]=ne):(Z=t[54],Q=t[55],te=t[56],ne=t[57]),t[58]!==K||t[59]!==N?(re=e=>{N>1&&[`ArrowLeft`,`ArrowRight`].includes(e.key)&&(e.preventDefault(),K(e.key===`ArrowRight`?1:-1))},t[58]=K,t[59]=N,t[60]=re):re=t[60],t[61]===Symbol.for(`react.memo_cache_sentinel`)?(ie=e=>{u.current={x:e.clientX,y:e.clientY},d.current=!1},t[61]=ie):ie=t[61],t[62]!==K||t[63]!==N?(ae=e=>{let t=u.current;u.current=null,t&&N>1&&Math.abs(e.clientX-t.x)>40&&Math.abs(e.clientX-t.x)>Math.abs(e.clientY-t.y)&&(d.current=!0,K(e.clientX<t.x?1:-1))},t[62]=K,t[63]=N,t[64]=ae):ae=t[64],t[65]===Symbol.for(`react.memo_cache_sentinel`)?(oe=()=>{u.current=null},t[65]=oe):oe=t[65],se=N===1?(0,v.jsxs)(`button`,{type:`button`,className:`documentation-card documentation-single-card`,"aria-label":`View ${n[0].title||`documentation image`}`,onClick:()=>e(n[0]._id),children:[(0,v.jsx)(_i,{image:n[0],imageCache:r,loading:`eager`}),(0,v.jsx)(`span`,{className:`documentation-card-caption`,children:n[0].title||`Scholarship Office documentation`})]}):co.map((t,i)=>{let a=n[so(q+t,N)],s=N===2?t===0:Math.abs(t)<=1;return(0,v.jsxs)(`button`,{ref:e=>{o.current[i]=e},type:`button`,className:`documentation-card`,tabIndex:s?0:-1,"aria-hidden":!s,"aria-label":`View ${a.title||`documentation image`}`,style:{pointerEvents:s?`auto`:`none`},onClick:()=>e(a._id),children:[(0,v.jsx)(_i,{image:a,imageCache:r,loading:Math.abs(t)<=1?`eager`:`lazy`},`${a._id}-${a.updatedAt}`),(0,v.jsx)(`span`,{className:`documentation-card-caption`,children:a.title||`Scholarship Office documentation`})]},i)}),t[31]=K,t[32]=N,t[33]=r,t[34]=n,t[35]=f,t[36]=k,t[37]=q,t[38]=J,t[39]=Y,t[40]=X,t[41]=ee,t[42]=Z,t[43]=Q,t[44]=te,t[45]=ne,t[46]=re,t[47]=ie,t[48]=ae,t[49]=oe,t[50]=se,t[51]=ce}else q=t[37],J=t[38],Y=t[39],X=t[40],ee=t[41],Z=t[42],Q=t[43],te=t[44],ne=t[45],re=t[46],ie=t[47],ae=t[48],oe=t[49],se=t[50],ce=t[51];let le;t[66]!==J||t[67]!==Y||t[68]!==X||t[69]!==ee||t[70]!==Z||t[71]!==Q||t[72]!==te||t[73]!==ne||t[74]!==re||t[75]!==ie||t[76]!==ae||t[77]!==oe||t[78]!==se?(le=(0,v.jsx)(`div`,{ref:J,className:Y,"aria-roledescription":X,"aria-label":ee,onMouseEnter:Z,onMouseLeave:Q,onFocusCapture:te,onBlurCapture:ne,onKeyDown:re,onPointerDown:ie,onPointerUp:ae,onPointerCancel:oe,children:se}),t[66]=J,t[67]=Y,t[68]=X,t[69]=ee,t[70]=Z,t[71]=Q,t[72]=te,t[73]=ne,t[74]=re,t[75]=ie,t[76]=ae,t[77]=oe,t[78]=se,t[79]=le):le=t[79];let ue;t[80]!==K||t[81]!==N||t[82]!==q||t[83]!==g||t[84]!==j?(ue=N>1&&(0,v.jsxs)(`div`,{className:`documentation-controls`,onFocusCapture:()=>S(!0),onBlurCapture:e=>{e.currentTarget.contains(e.relatedTarget)||S(!1)},children:[(0,v.jsx)(`button`,{type:`button`,className:`documentation-icon-button`,"aria-label":`Previous documentation`,onClick:()=>K(-1),children:`←`}),(0,v.jsxs)(`span`,{children:[q+1,` `,(0,v.jsx)(`span`,{"aria-hidden":`true`,children:`/`}),(0,v.jsx)(`span`,{className:`documentation-sr-only`,children:`of`}),` `,N]}),(0,v.jsx)(`button`,{type:`button`,className:`documentation-icon-button`,"aria-label":`Next documentation`,onClick:()=>K(1),children:`→`}),!j&&(0,v.jsx)(`button`,{type:`button`,className:`documentation-pause`,"aria-label":g?`Play documentation carousel`:`Pause documentation carousel`,onClick:()=>_(uo),children:g?`Play`:`Pause`})]}),t[80]=K,t[81]=N,t[82]=q,t[83]=g,t[84]=j,t[85]=ue):ue=t[85];let de;t[86]!==r||t[87]!==n||t[88]!==ce?(de=ce>=0&&(0,v.jsx)(yi,{images:n,index:ce,imageCache:r,onIndex:e=>A(n[e]._id),onClose:()=>A(null)}),t[86]=r,t[87]=n,t[88]=ce,t[89]=de):de=t[89];let fe;return t[90]!==le||t[91]!==ue||t[92]!==de?(fe=(0,v.jsxs)(v.Fragment,{children:[le,ue,de]}),t[90]=le,t[91]=ue,t[92]=de,t[93]=fe):fe=t[93],fe}function uo(e){return!e}function fo(e){return e+1}function po(e){return e+1}function mo(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function ho(){return document.hidden}function go(){let e=(0,h.c)(11),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t={},e[0]=t):t=e[0];let n=Mr($.documentation.published,t),r;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(r=oo(),e[1]=r):r=e[1];let i=r,a,o;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(a=()=>()=>i.destroy(),o=[i],e[2]=a,e[3]=o):(a=e[2],o=e[3]),(0,m.useEffect)(a,o);let s,c;if(e[4]===n?(s=e[5],c=e[6]):(s=()=>{i.retain((n||[]).map(mi))},c=[n,i],e[4]=n,e[5]=s,e[6]=c),(0,m.useEffect)(s,c),n===void 0){let t;return e[7]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,v.jsx)(y,{message:`Loading documentation gallery…`}),e[7]=t):t=e[7],t}if(!n.length)return null;let l;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,v.jsxs)(`header`,{className:`documentation-gallery-heading`,children:[(0,v.jsx)(`span`,{children:`IBACMI · Scholarship Office`}),(0,v.jsx)(`h2`,{id:`documentation-gallery-title`,children:`Scholarship Office Documentation`}),(0,v.jsx)(`p`,{children:`Explore official activities, announcements, and memorable moments from the Scholarship Office.`})]}),e[8]=l):l=e[8];let u;return e[9]===n?u=e[10]:(u=(0,v.jsxs)(`section`,{className:`documentation-gallery`,"aria-labelledby":`documentation-gallery-title`,children:[l,(0,v.jsx)(lo,{images:n,imageCache:i})]}),e[9]=n,e[10]=u),u}var _o=[`BACHELOR OF ELEMENTARY EDUCATION`,`BACHELOR OF EARLY CHILDHOOD EDUCATION`,`BACHELOR OF SCIENCE IN CRIMINOLOGY`,`BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY`,`BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT`,`BACHELOR OF PUBLIC ADMINISTRATION`,`BACHELOR OF SCIENCE IN ENTREPRENEURSHIP`],vo=[[`studentId`,`Student ID`],[`lastName`,`Last Name`],[`firstName`,`First Name`],[`phoneNumber`,`Phone Number`],[`currentAddress`,`Permanent Address`],[`course`,`Degree Program`],[`yearLevelCode`,`Year Level`],[`birthDate`,`Birthdate`],[`zipCode`,`ZIP Code`],[`emailAddress`,`Email Address`],[`sexCode`,`Sex at Birth`],[`schoolIdUpload`,`School ID Upload`]];function yo(){return new Date(Date.now()+480*60*1e3).toISOString().slice(0,10)}function bo(e){let[t,n]=yo().split(`-`).map(Number),r=n>=6?t:t-1,i=`${r}-${r+1}`,a=e.filter(e=>e.schoolYear===i);return[...a.length?a:e].sort((e,t)=>String(t.schoolYear||``).localeCompare(String(e.schoolYear||``))||(t.uploadedAt||0)-(e.uploadedAt||0)||(t._creationTime||0)-(e._creationTime||0))[0]}function xo(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e||``))return!1;let t=Date.parse(`${e}T00:00:00Z`);return Number.isFinite(t)&&new Date(t).toISOString().slice(0,10)===e&&e<=yo()}function So(e,{schoolIdUploaded:t=!1}={}){let n={};for(let[r]of vo)(r===`schoolIdUpload`?!t:e[r]===void 0||e[r]===null||String(e[r]).trim()===``)&&(n[r]=`Required — Palihog kompletoha kini nga impormasyon.`);/^09\d{9}$|^\+639\d{9}$/.test(e.phoneNumber||``)||(n.phoneNumber=`Palihog ibutang ang sakto nga mobile number (09… o +639…).`),String(e.currentAddress||``).trim().length<8&&(n.currentAddress=`Required — Palihog ibutang ang kompleto nga permanent address.`),_o.includes(e.course)||(n.course=`Required — Palihog pili sa imong degree program.`),[1,2,3,4,5].includes(e.yearLevelCode)||(n.yearLevelCode=`Required — Palihog pili sa imong year level.`),xo(e.birthDate)||(n.birthDate=`Required — Palihog ibutang ang sakto nga birthdate; dili mahimong umaabot nga petsa.`),/^\d{4}$/.test(e.zipCode||``)||(n.zipCode=`Required — Palihog ibutang ang sakto nga 4-digit ZIP code.`),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.emailAddress||``)||(n.emailAddress=`Required — Palihog ibutang ang sakto nga email address.`),[0,1].includes(e.sexCode)||(n.sexCode=`Required — Palihog pili sa imong sex at birth.`);let r=vo.filter(([e])=>n[e]).map(([e,t])=>({key:e,label:t,message:n[e]}));return{errors:n,missing:r,percent:Math.round((vo.length-r.length)/vo.length*100),requiredCount:vo.length,status:r.length?`Incomplete`:`Complete`}}function Co(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,typeof t==`string`?e===`emailAddress`?t.trim().toLowerCase():e===`phoneNumber`?t.replace(/[\s-]/g,``):t.trim():t]))}function wo(e){let t=(0,h.c)(4),{status:n,tone:r}=e,i=`status-badge status-badge--${r}`,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,v.jsx)(`span`,{className:`status-badge__dot`}),t[0]=a):a=t[0];let o;return t[1]!==n||t[2]!==i?(o=(0,v.jsxs)(`span`,{className:i,children:[a,n]}),t[1]=n,t[2]=i,t[3]=o):o=t[3],o}function To(e=``){let t=e.toLowerCase();return t.includes(`grantee`)||t.includes(`valid`)||t.includes(`complete`)||t.includes(`resolved`)||t.includes(`approved`)?`validated`:t.includes(`reject`)||t.includes(`decline`)?`rejected`:`pending`}function Eo(e,t){let n=[];if(t<=5){for(let e=1;e<=t;e+=1)n.push(e);return n}n.push(1),e>3&&n.push(`left-ellipsis`);let r=Math.max(2,e-1),i=Math.min(t-1,e+1);for(let e=r;e<=i;e+=1)n.push(e);return e<t-2&&n.push(`right-ellipsis`),n.push(t),n}function Do(e){return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e)}function Oo(e){return/^[A-Za-z0-9-]{4,30}$/.test(e)}function ko(e){return e.replace(/[\s-]/g,``).trim()}function Ao(e){return e.replace(/[^\d+]/g,``).replace(/(?!^)\+/g,``)}function jo(e){return e.replace(/[\r\n]+/g,` `).replace(/\s{2,}/g,` `)}function Mo(e){return String(e??``).toUpperCase().replace(/Ñ/g,`N`)}function No(e){let t=ko(e);return/^09\d{9}$/.test(t)||/^\+639\d{9}$/.test(t)}var Po=10*1024*1024;function Fo(e){return e?e.type===`application/pdf`||/\.pdf$/i.test(e.name):!1}function Io(e){if(!e)return``;let t=e/(1024*1024);return`${t.toFixed(t>=10?0:1)} MB`}function Lo(e){return e.length>=6}function Ro(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}var zo=[{label:`Student ID`,name:`studentId`,autoComplete:`off`,required:!0},{label:`Last Name`,name:`lastName`,autoComplete:`family-name`,required:!0},{label:`First Name`,name:`firstName`,autoComplete:`given-name`,required:!0},{label:`Ext Name (JR)`,name:`extensionName`,autoComplete:`honorific-suffix`},{label:`Middle Name`,name:`middleName`,autoComplete:`additional-name`},{label:`Learner Reference Number (LRN)`,name:`lrn`,autoComplete:`off`,inputMode:`numeric`,pattern:`\\d{12}`,helper:`Optional if not assigned`},{label:`PhilSys ID Number`,name:`philSysIdNumber`,autoComplete:`off`,helper:`Optional`},{label:`4Ps ID Number`,name:`fourPsIdNumber`,autoComplete:`off`,helper:`Optional`}],Bo=[{label:`Last Name`,name:`fatherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`fatherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`fatherMiddleName`,autoComplete:`additional-name`}],Vo=[{label:`Last Name`,name:`motherLastName`,autoComplete:`family-name`},{label:`First Name`,name:`motherFirstName`,autoComplete:`given-name`},{label:`Middle Name`,name:`motherMiddleName`,autoComplete:`additional-name`}],Ho=_o,Uo=[`Student Information`,`Parent Information`,`Permanent Address`,`Additional Information`,`Required Documents`,`Review & Submit`],Wo=[{label:`Street / Purok / Barangay`,name:`streetBarangay`,autoComplete:`address-line1`,required:!0},{label:`City / Municipality`,name:`cityMunicipality`,required:!0},{label:`Province`,name:`province`,required:!0},{label:`Region`,name:`region`,required:!0},{label:`ZIP Code`,name:`zipCode`,autoComplete:`postal-code`,inputMode:`numeric`,required:!0},{label:`Mobile No.`,name:`mobileNumber`,autoComplete:`tel`,inputMode:`tel`,type:`tel`,pattern:`\\+?[0-9]*`,required:!0},{label:`Email Address`,name:`emailAddress`,autoComplete:`email`,inputMode:`email`,type:`email`,required:!0}];function Go({initialSignIn:e=!1,onAdminLoginSuccess:t,onStudentRegistrationSuccess:n}){let r=(0,m.useRef)(null),[i,a]=(0,m.useState)(!1),[o,s]=(0,m.useState)(``),c=(0,m.useRef)(null),l=(0,m.useRef)(null),[u,d]=(0,m.useState)(0),[f,p]=(0,m.useState)(()=>window.matchMedia(`(display-mode: standalone)`).matches||window.navigator.standalone===!0),[h,_]=(0,m.useState)(!1),[b,x]=(0,m.useState)(!1),[S,C]=(0,m.useState)(!1),[w,T]=(0,m.useState)(e),[E,D]=(0,m.useState)(!1),[O,k]=(0,m.useState)(!1),[A,j]=(0,m.useState)(!1),[M,N]=(0,m.useState)(!1),[P,F]=(0,m.useState)(``),[I,L]=(0,m.useState)(``),[R,z]=(0,m.useState)(``),[B,V]=(0,m.useState)(``),[H,U]=(0,m.useState)(``),[W,K]=(0,m.useState)(``),[q,J]=(0,m.useState)({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),[Y,X]=(0,m.useState)(null),[ee,Z]=(0,m.useState)(0),[Q,te]=(0,m.useState)({}),[ne,re]=(0,m.useState)(!1),[ie,ae]=(0,m.useState)(!1),[oe,se]=(0,m.useState)(!1),[ce,le]=(0,m.useState)(!1),[ue,de]=(0,m.useState)(!1),[fe,pe]=(0,m.useState)(1),[me,he]=(0,m.useState)(``),[ge,_e]=(0,m.useState)(``),[ve,ye]=(0,m.useState)(``),[be,xe]=(0,m.useState)(``),[Se,Ce]=(0,m.useState)(``),[we,Te]=(0,m.useState)(``),[Ee,De]=(0,m.useState)(``),[Oe,ke]=(0,m.useState)(``),[Ae,je]=(0,m.useState)(``),[Me,Ne]=(0,m.useState)(``),[Pe,Fe]=(0,m.useState)(``),[Ie,Le]=(0,m.useState)(null),[Re,ze]=(0,m.useState)(``),[Be,Ve]=(0,m.useState)(``),[He,Ue]=(0,m.useState)(``),[We,Ge]=(0,m.useState)(``),[Ke,qe]=(0,m.useState)(``),[Je,Ye]=(0,m.useState)(``),[Xe,Ze]=(0,m.useState)(``),[Qe,$e]=(0,m.useState)(``),[et,tt]=(0,m.useState)(!1),[nt,rt]=(0,m.useState)(!1),[it,at]=(0,m.useState)(!1),ot=Pr($.applicants.create),st=Pr($.applicants.generateUploadUrl),ct=Pr($.quickActions.create),lt=Pr($.adminAuth.login),ut=Pr($.adminAuth.register),dt=Pr($.adminAuth.requestPasswordResetOtp),ft=Pr($.adminAuth.changePasswordWithOtp),pt=Mr($.allinfo.searchPublic,ge?{searchValue:ge}:`skip`),mt=Mr($.applicantPortal.get),ht=(0,m.useMemo)(()=>pt??[],[pt]),gt=me.trim().length>0,_t=mt===void 0,vt=mt?.isReceivingApplicants===!0;(0,m.useEffect)(()=>{let e=e=>{e.preventDefault(),l.current=e},t=()=>{l.current=null,p(!0)};return window.addEventListener(`beforeinstallprompt`,e),window.addEventListener(`appinstalled`,t),()=>{window.removeEventListener(`beforeinstallprompt`,e),window.removeEventListener(`appinstalled`,t)}},[]);let yt=async()=>{if(f){window.alert(`The IBACMI Scholarship web app is already installed on this device.`);return}let e=l.current;if(e){await e.prompt(),await e.userChoice,l.current=null;return}window.alert(`To install the web app, open your browser menu and choose “Install app” or “Add to Home Screen”.`)},bt=ht,xt=bt.length,St=Math.max(1,Math.ceil(xt/6)),Ct=(fe-1)*6,wt=Math.min(Ct+6,xt),Tt=(0,m.useMemo)(()=>bt.slice(Ct,wt),[bt,Ct,wt]),Et=(0,m.useMemo)(()=>Eo(fe,St),[fe,St]);(0,m.useEffect)(()=>{let e=window.setTimeout(()=>{_e(me.trim())},500);return()=>window.clearTimeout(e)},[me]);let Dt=(0,m.useCallback)(()=>{Fe(``),Le(null),Ce(``),Te(``),ke(``),je(``),typeof n==`function`&&n(Ie)},[n,Ie,Fe,Le,Ce,Te,ke,je]);(0,m.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;d(t>0?e/t:0)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,m.useEffect)(()=>{if(!h&&!b&&!S&&!w&&!E&&!O&&!A&&!M&&!W&&!Pe&&!R)return;let e=e=>{if(e.key===`Escape`){if(ce)return;if(A){j(!1);return}if(M){N(!1);return}_(!1),x(!1),C(!1),V(``),U(``),X(null),J({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),T(!1),ae(!1),D(!1),k(!1),K(``),Pe&&Dt(),z(``)}};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[h,b,S,w,E,O,A,M,ce,W,Pe,R,Dt]);let Ot=()=>{z(``),L(``),_(!0)},kt=()=>{_(!1),L(``)},At=()=>{if(mt===void 0){K(`Please wait while the UNIFAST portal status is loading.`);return}if(!mt.isReceivingApplicants){K(`The UNIFAST portal is not receiving applicants right now. Please wait for the administrator to open applications.`);return}V(``),U(``),j(!1),N(!1),C(!0)},jt=()=>{C(!1),V(``),U(``),j(!1),N(!1),x(!0)},Mt=()=>{C(!1),Kt()},Nt=()=>{ce||(C(!1),x(!1),V(``),U(``),j(!1),J({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),X(null))},Pt=async(e,t)=>{let n=await st({});te(e=>({...e,[t]:0}));let r=await new Promise((r,i)=>{let a=new XMLHttpRequest;a.open(`POST`,n),a.timeout=12e4,a.ontimeout=()=>i(Error(`Document upload timed out. Please try again.`)),a.setRequestHeader(`Content-Type`,`application/pdf`),a.upload.onprogress=e=>{e.lengthComputable&&te(n=>({...n,[t]:Math.round(e.loaded/e.total*100)}))},a.onload=()=>{if(a.status<200||a.status>=300){try{i(Error(JSON.parse(a.responseText)?.message||`Unable to upload ${e.name}.`))}catch{i(Error(`Unable to upload ${e.name}.`))}return}try{r(JSON.parse(a.responseText))}catch{i(Error(`Upload service returned an invalid response.`))}},a.onerror=()=>i(Error(`Unable to upload ${e.name}. Check your internet connection and try again.`)),a.send(e)});if(!r.storageId)throw Error(`Upload service did not return storage for ${e.name}.`);return te(e=>({...e,[t]:100})),r.storageId},Ft=e=>{if(!e)return;let t=URL.createObjectURL(e);window.open(t,`_blank`,`noopener,noreferrer`),window.setTimeout(()=>URL.revokeObjectURL(t),6e4)},It=e=>{let t=c.current?.elements.namedItem(e);t&&(t.value=``),J(t=>({...t,[e]:null})),X(null),V(``)},Lt=e=>{let t=q[e];return!t&&!ce?null:(0,v.jsxs)(`span`,{className:`portal-document-controls`,children:[t&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`button`,{type:`button`,onClick:e=>{e.preventDefault(),e.stopPropagation(),Ft(t)},children:`Preview`}),(0,v.jsx)(`button`,{type:`button`,onClick:t=>{t.preventDefault(),t.stopPropagation(),It(e)},children:`Remove`})]}),ce&&Q[e]!==void 0&&(0,v.jsx)(y,{variant:`compact`,progress:Q[e],message:Q[e]>=100?`Saving uploaded document…`:`Uploading application document…`})]})},Rt=async e=>{let{files:t,name:n}=e.target,r=t?.[0]??null;if(V(``),U(``),X(null),!r){J(e=>({...e,[n]:null}));return}if(!Fo(r)){e.target.value=``,J(e=>({...e,[n]:null})),V(`Please upload PDF files only for all document requirements.`);return}if(r.size>Po){e.target.value=``,J(e=>({...e,[n]:null})),V(`Each uploaded PDF must be 10MB or smaller.`);return}if(await r.slice(0,5).text()!==`%PDF-`){e.target.value=``,J(e=>({...e,[n]:null})),V(`This file does not appear to be a valid PDF. Choose a valid PDF document.`);return}J(e=>({...e,[n]:r}))},zt=e=>{let t=e.target;if(!(t instanceof HTMLInputElement)||t.name===`emailAddress`||![`text`,`tel`,`search`,`url`].includes(t.type))return;let{selectionStart:n,selectionEnd:r}=t,i=Mo(t.value);if(t.value===i)return;let a=n===null?null:Mo(t.value.slice(0,n)).length,o=r===null?null:Mo(t.value.slice(0,r)).length;t.value=i,a!==null&&o!==null&&t.setSelectionRange(a,o)},Bt=async e=>{e.preventDefault();let t=e.currentTarget;t.querySelectorAll(`input`).forEach(e=>{e.name!==`emailAddress`&&[`text`,`tel`,`search`,`url`].includes(e.type)&&(e.value=Mo(e.value))});let n=new FormData(t),r=ko(String(n.get(`mobileNumber`)||``)),i=String(n.get(`emailAddress`)||``).trim().toLowerCase(),a=n.get(`psaFile`),o=n.get(`schoolIdFile`),s=n.get(`corFile`),c=n.get(`pwdIdFile`),l=n.get(`fourPsFile`);if(V(``),U(``),!mt?.isReceivingApplicants){V(`The UNIFAST portal is closed for applicants right now.`);return}for(let[e,r]of[[`Student ID`,`studentId`],[`Last Name`,`lastName`],[`Given / First Name`,`firstName`],[`Birthdate`,`birthDate`],[`Program`,`course`],[`Year level`,`year`],[`Street / Purok / Barangay`,`streetBarangay`],[`City / Municipality`,`cityMunicipality`],[`Province`,`province`],[`Region`,`region`],[`ZIP Code`,`zipCode`]])if(!String(n.get(r)||``).trim()){V(`${e} is required.`),Z([`streetBarangay`,`cityMunicipality`,`province`,`region`,`zipCode`].includes(r)?2:0),window.setTimeout(()=>t.elements.namedItem(r)?.focus(),0);return}let u=String(n.get(`studentId`)||``).trim();if(!Oo(u)){Z(0),V(`Student ID must be 4 to 30 letters, numbers, or hyphens.`);return}let d=String(n.get(`lrn`)||``).trim();if(d&&!/^\d{12}$/.test(d)){Z(0),V(`LRN must contain exactly 12 digits.`);return}let f=String(n.get(`birthDate`)||``);if(!f||new Date(`${f}T00:00:00`)>new Date){Z(0),V(`Enter a valid birthdate that is not in the future.`);return}if(!No(r)){Z(2),V(`Please enter a valid mobile number. Example: 09123456789 or +639123456789.`);return}if(!Do(i)){Z(2),V(`Please enter a valid email address.`);return}if(n.get(`fatherInformationUnavailable`)!==`on`&&(!String(n.get(`fatherLastName`)||``).trim()||!String(n.get(`fatherFirstName`)||``).trim())){Z(1),V(`Enter father's last and given name, or select Information unavailable.`);return}if(n.get(`motherInformationUnavailable`)!==`on`&&(!String(n.get(`motherLastName`)||``).trim()||!String(n.get(`motherFirstName`)||``).trim())){Z(1),V(`Enter mother's maiden last and given name, or select Information unavailable.`);return}if(!(a instanceof File)||!a.size||!Fo(a)){Z(4),V(`Please upload a valid PSA Birth Certificate PDF.`);return}if(!(o instanceof File)||!o.size||!Fo(o)){Z(4),V(`Please upload a valid School ID or valid ID PDF.`);return}let p=[c,l,s].filter(e=>e instanceof File&&e.size);if([a,o,...p].some(e=>e.size>Po)){Z(4),V(`Each uploaded PDF must be 10MB or smaller.`);return}for(let e of[a,o,...p])if(!Fo(e)||await e.slice(0,5).text()!==`%PDF-`){Z(4),V(`${e.name} is not a valid PDF document.`);return}if(!n.get(`sexCode`)||!n.get(`course`)||!n.get(`year`)){Z(0),V(`Select sex, program, and year level.`);return}if(!n.get(`soloParentDependent`)||!n.get(`firstGeneration`)){Z(3),V(`Answer both additional information questions.`);return}X({studentId:u,lrn:d,philSysIdNumber:String(n.get(`philSysIdNumber`)||``).trim(),fourPsIdNumber:String(n.get(`fourPsIdNumber`)||``).trim(),lastName:String(n.get(`lastName`)||``).trim(),firstName:String(n.get(`firstName`)||``).trim(),extensionName:String(n.get(`extensionName`)||``).trim(),middleName:String(n.get(`middleName`)||``).trim(),gender:Number(n.get(`sexCode`))===0?`Male`:`Female`,sexCode:Number(n.get(`sexCode`)),birthDate:f,course:String(n.get(`course`)||``),year:String(n.get(`year`)||``),yearLevelCode:Number(String(n.get(`year`)||``).charAt(0)),fatherInformationUnavailable:n.get(`fatherInformationUnavailable`)===`on`,motherInformationUnavailable:n.get(`motherInformationUnavailable`)===`on`,fatherLastName:String(n.get(`fatherLastName`)||``).trim(),fatherFirstName:String(n.get(`fatherFirstName`)||``).trim(),fatherMiddleName:String(n.get(`fatherMiddleName`)||``).trim(),motherLastName:String(n.get(`motherLastName`)||``).trim(),motherFirstName:String(n.get(`motherFirstName`)||``).trim(),motherMiddleName:String(n.get(`motherMiddleName`)||``).trim(),streetBarangay:String(n.get(`streetBarangay`)||``).trim(),cityMunicipality:String(n.get(`cityMunicipality`)||``).trim(),province:String(n.get(`province`)||``).trim(),region:String(n.get(`region`)||``).trim(),address:[`streetBarangay`,`cityMunicipality`,`province`,`region`].map(e=>String(n.get(e)||``).trim()).join(`, `),zipCode:String(n.get(`zipCode`)||``).trim(),pwdId:String(n.get(`pwdId`)||``).trim(),mobileNumber:r,emailAddress:i,hasDisability:n.get(`hasDisability`)===`yes`,disabilityType:String(n.get(`disabilityType`)||``).trim(),soloParentDependent:Number(n.get(`soloParentDependent`)),firstGeneration:Number(n.get(`firstGeneration`)),isIndigenous:n.get(`isIndigenous`)===`yes`,indigenousGroup:String(n.get(`indigenousGroup`)||``).trim(),applicantClassification:`TES Applicant`,psaFile:a,schoolIdFile:o,corFile:s instanceof File&&s.size?s:null,pwdIdFile:c instanceof File&&c.size?c:null,fourPsFile:l instanceof File&&l.size?l:null}),Z(5)},Vt=e=>{let t=c.current?.querySelector(`[data-portal-step="${e}"]`);if(!t)return!0;let n=[...t.querySelectorAll(`input, select, textarea`)].find(e=>e.required&&!e.checkValidity());return n?(n.reportValidity(),n.focus(),!1):!0},Ht=e=>{V(``),!(e>ee&&!Vt(ee))&&Z(e)},Ut=()=>{V(``),U(``),j(!1),X(null),Z(0)},Wt=()=>{if(Y){if(V(``),U(``),!mt?.isReceivingApplicants){V(`The UNIFAST portal is closed for applicants right now.`);return}if(!ne){V(`Please certify that your information and documents are true and accurate.`);return}j(!0)}},Gt=async()=>{if(Y){if(V(``),U(``),!mt?.isReceivingApplicants){V(`The UNIFAST portal is closed for applicants right now.`);return}le(!0);try{let[e,t,n,r,i]=await Promise.all([Pt(Y.psaFile,`psaFile`),Pt(Y.schoolIdFile,`schoolIdFile`),Y.corFile?Pt(Y.corFile,`corFile`):Promise.resolve(void 0),Y.pwdIdFile?Pt(Y.pwdIdFile,`pwdIdFile`):Promise.resolve(void 0),Y.fourPsFile?Pt(Y.fourPsFile,`fourPsFile`):Promise.resolve(void 0)]),a={studentId:Y.studentId,lastName:Y.lastName,firstName:Y.firstName,extensionName:Y.extensionName,middleName:Y.middleName,gender:Y.gender,sexCode:Y.sexCode,birthDate:Y.birthDate,course:Y.course,year:Y.year,yearLevelCode:Y.yearLevelCode,lrn:Y.lrn,philSysIdNumber:Y.philSysIdNumber,fourPsIdNumber:Y.fourPsIdNumber,fatherLastName:Y.fatherLastName,fatherFirstName:Y.fatherFirstName,fatherMiddleName:Y.fatherMiddleName,motherLastName:Y.motherLastName,motherFirstName:Y.motherFirstName,motherMiddleName:Y.motherMiddleName,fatherInformationUnavailable:Y.fatherInformationUnavailable,motherInformationUnavailable:Y.motherInformationUnavailable,address:Y.address,streetBarangay:Y.streetBarangay,cityMunicipality:Y.cityMunicipality,province:Y.province,region:Y.region,zipCode:Y.zipCode,pwdId:Y.pwdId,mobileNumber:Y.mobileNumber,emailAddress:Y.emailAddress,hasDisability:Y.hasDisability,disabilityType:Y.disabilityType,soloParentDependent:Y.soloParentDependent,firstGeneration:Y.firstGeneration,isIndigenous:Y.isIndigenous,indigenousGroup:Y.indigenousGroup,applicantClassification:`TES Applicant`,psaFileStorageId:e,psaFileName:Y.psaFile.name,schoolIdFileStorageId:t,schoolIdFileName:Y.schoolIdFile.name,...n?{corFileStorageId:n,corFileName:Y.corFile.name}:{}};r&&Y.pwdIdFile&&(a.pwdIdFileStorageId=r,a.pwdIdFileName=Y.pwdIdFile.name),i&&Y.fourPsFile&&(a.fourPsFileStorageId=i,a.fourPsFileName=Y.fourPsFile.name);let o=await ot(a);if(!o.success){j(!1),V(o.message||`Unable to submit applicant information.`);return}c.current?.reset(),J({psaFile:null,schoolIdFile:null,corFile:null,pwdIdFile:null,fourPsFile:null}),te({}),Z(0),re(!1),X(null),U(``),j(!1),x(!1),N(!0)}catch(e){j(!1),V(G(e,`Unable to submit applicant information right now.`,`landingpage.alllanding`))}finally{le(!1)}}},Kt=()=>{F(``),ye(``),xe(``),T(!0)},qt=e=>{a(!1),e===`login`?Kt():Xt(),requestAnimationFrame(()=>{document.querySelector(e===`login`?`#admin-login-title`:`#sign-up-title`)?.closest(`.modal-card`)?.querySelector(`input`)?.focus()})},Jt=()=>{a(!1),s(`Palihog pangitaa una imong pangalan sa official grantee list sa dili pa mag-create og account.`),requestAnimationFrame(()=>{r.current?.focus({preventScroll:!0}),r.current?.scrollIntoView({block:`center`,behavior:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?`instant`:`smooth`})})},Yt=()=>{T(!1),ae(!1),F(``),ye(``),xe(``)},Xt=()=>{let e=ve.trim(),t=e.includes(`@`);T(!1),k(!0),Ne(``),Fe(``),Ce(t?e.toLowerCase():``),Te(t?``:e),ke(``),je(``)},Zt=()=>{k(!1),Ne(``),Fe(``),Ce(``),Te(``),De(``),ke(``),je(``)},Qt=()=>{k(!1),Ne(``),Fe(``),Le(null),ye(Se||we),xe(``),T(!0)},$t=()=>{let e=ve.trim(),t=e.includes(`@`);T(!1),D(!0),Ze(``),$e(``),tt(!1),ze(t?e.toLowerCase():``),Ve(t?``:e),Ue(``),Ge(``),qe(``),Ye(``)},en=()=>{D(!1),Ze(``),$e(``),tt(!1),ze(``),Ve(``),Ue(``),Ge(``),qe(``),Ye(``)},tn=()=>{pe(e=>Math.max(e-1,1))},nn=()=>{pe(e=>Math.min(e+1,St))},rn=()=>{he(``),_e(``),pe(1)},an=e=>{he(e.target.value),pe(1)},on=e=>{e.target.value=Ao(e.target.value)},sn=()=>{tt(!1),$e(``),Ge(``),qe(``),Ye(``)},cn=e=>{let t=e.target.value;ze(t),t.trim()&&Ve(``),sn()},ln=e=>{let t=e.target.value;Ve(t),t.trim()&&ze(``),sn()},un=e=>{Ue(Ao(e.target.value)),sn()},dn=()=>{let e=Re.trim().toLowerCase(),t=Be.trim(),n=ko(He);return!e&&!t?`Email address or School ID is required.`:e&&t?`Use either email address or School ID, not both.`:e&&!Do(e)?`Please enter a valid email address.`:t&&!Oo(t)?`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`:n?No(n)?``:`Please enter a valid phone number. Example: 09123456789 or +639123456789.`:`Phone number is required.`};return(0,v.jsxs)(`div`,{className:`landing-page`,children:[(0,v.jsx)(`style`,{children:Ko}),(0,v.jsxs)(`header`,{className:`landing-header`,children:[(0,v.jsxs)(`div`,{className:`brand-lockup`,children:[(0,v.jsx)(`div`,{className:`brand-mark`,children:(0,v.jsx)(`img`,{alt:`IBACMI`,className:`brand-mark__image`,src:g})}),(0,v.jsx)(`div`,{className:`brand-copy`,children:(0,v.jsx)(`p`,{className:`brand-title`,children:`IBACMI - Scholarship Office`})})]}),(0,v.jsx)(`div`,{className:`header-actions`,children:(0,v.jsx)(`button`,{className:`button button--compact button--admin`,onClick:()=>{s(``),a(!0)},type:`button`,children:`SIGN IN`})})]}),(0,v.jsx)(`main`,{className:`landing-main`,children:(0,v.jsxs)(`div`,{className:`landing-container`,children:[(0,v.jsx)(`section`,{className:`page-heading`,children:(0,v.jsxs)(`div`,{className:`page-heading__copy`,children:[(0,v.jsx)(`span`,{className:`eyebrow`,children:`Grantee Records`}),(0,v.jsxs)(`h2`,{className:`landing-office-title`,children:[(0,v.jsx)(`span`,{className:`landing-office-title__school`,children:`IBACMI`}),(0,v.jsx)(`span`,{className:`landing-office-title__separator`,"aria-hidden":`true`,children:`—`}),(0,v.jsx)(`span`,{className:`landing-office-title__office`,children:`Scholarship Office`})]})]})}),(0,v.jsx)(`div`,{role:`status`,"aria-live":`polite`,lang:`ceb`,children:o&&(0,v.jsx)(`p`,{id:`grantee-verification-guidance`,className:`grantee-verification-guidance`,children:o})}),(0,v.jsxs)(`section`,{className:`filter-panel`,"aria-label":`Grantee filters`,children:[(0,v.jsxs)(`div`,{className:`search-field`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`search`}),(0,v.jsx)(`input`,{ref:r,"aria-label":`Search official grantee records`,"aria-describedby":o?`grantee-verification-guidance`:void 0,placeholder:`Enter School ID, Either Batch No., or Last Name...`,type:`text`,value:me,onChange:an})]}),(0,v.jsxs)(`button`,{className:`icon-button filter-button`,type:`button`,"aria-label":`Clear search`,title:`Clear search`,onClick:rn,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`restart_alt`}),(0,v.jsx)(`span`,{className:`filter-button__text`,children:`Reset`})]})]}),!gt&&(0,v.jsxs)(`section`,{className:`scholarship-showcase`,"aria-labelledby":`scholarship-showcase-title`,children:[(0,v.jsxs)(`div`,{className:`scholarship-showcase__heading`,children:[(0,v.jsx)(`div`,{children:(0,v.jsx)(`span`,{className:`eyebrow`,children:`Scholarship Office`})}),(0,v.jsxs)(`span`,{className:`scholarship-showcase__status`,children:[(0,v.jsx)(`span`,{"aria-hidden":`true`}),`Official Information`]})]}),(0,v.jsxs)(`a`,{className:`scholarship-showcase__image-link`,href:`/IBACMI-Scholarship-Office/assets/desktop-Di8cTPxJ.png`,rel:`noreferrer`,target:`_blank`,title:`Open the Scholarship Office banner in full size`,children:[(0,v.jsx)(`img`,{alt:`IBACMI Scholarship Office banner featuring the scholarship coordinator and students assistant`,decoding:`async`,src:`/IBACMI-Scholarship-Office/assets/desktop-Di8cTPxJ.png`}),(0,v.jsxs)(`span`,{className:`scholarship-showcase__view`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`open_in_full`}),`View full banner`]})]})]}),!gt&&(0,v.jsx)(go,{}),gt&&(0,v.jsxs)(`section`,{className:`table-card`,"aria-label":`Filtered grantee records`,children:[(0,v.jsx)(`div`,{className:`table-scroll`,children:(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`No.`}),(0,v.jsx)(`th`,{children:`TES Award Number`}),(0,v.jsx)(`th`,{children:`Student ID`}),(0,v.jsx)(`th`,{children:`Last Name`}),(0,v.jsx)(`th`,{children:`First Name`}),(0,v.jsx)(`th`,{children:`Middle Name`}),(0,v.jsx)(`th`,{children:`Batch No.`}),(0,v.jsx)(`th`,{children:`Status`}),(0,v.jsx)(`th`,{children:`Semester`}),(0,v.jsx)(`th`,{children:`School Year`})]})}),(0,v.jsxs)(`tbody`,{children:[pt===void 0&&ge&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`empty-state`,colSpan:10,children:(0,v.jsx)(y,{variant:`table`,message:`Fetching official grantee records…`})})}),pt&&bt.length===0&&(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{className:`empty-state`,colSpan:10,children:`No matching School ID, Batch No./ID, or name found.`})}),Tt.map((e,t)=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{"data-label":`No.`,children:e.no||Ct+t+1}),(0,v.jsx)(`td`,{className:`award-cell`,"data-label":`TES Award Number`,children:e.tesAwardNumber}),(0,v.jsx)(`td`,{"data-label":`Student ID`,children:e.studentId}),(0,v.jsx)(`td`,{"data-label":`Last Name`,children:e.lastName||`â€”`}),(0,v.jsx)(`td`,{"data-label":`First Name`,children:e.firstName||`â€”`}),(0,v.jsx)(`td`,{"data-label":`Middle Name`,children:e.middleName||e.middleInitial||`â€”`}),(0,v.jsx)(`td`,{className:`batch-cell`,"data-label":`Batch ID`,children:e.batchId}),(0,v.jsx)(`td`,{"data-label":`Status`,children:(0,v.jsx)(wo,{status:e.status,tone:To(e.status)})}),(0,v.jsx)(`td`,{"data-label":`Semester`,children:e.semester||`—`}),(0,v.jsx)(`td`,{"data-label":`School Year`,children:e.schoolYear||`—`})]},e._id))]})]})}),(0,v.jsxs)(`div`,{className:`table-footer`,children:[(0,v.jsxs)(`p`,{children:[`Showing `,(0,v.jsx)(`strong`,{children:xt===0?0:Ct+1}),` to`,` `,(0,v.jsx)(`strong`,{children:wt}),` of `,(0,v.jsx)(`strong`,{children:xt}),` result`,xt===1?``:`s`]}),(0,v.jsxs)(`div`,{className:`pagination`,children:[(0,v.jsx)(`button`,{className:`page-button`,disabled:fe===1||xt===0,onClick:tn,type:`button`,"aria-label":`Previous page`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_left`})}),Et.map(e=>typeof e==`string`?(0,v.jsx)(`span`,{className:`pagination__ellipsis`,children:`...`},e):(0,v.jsx)(`button`,{className:`page-button ${fe===e?`page-button--active`:``}`,disabled:xt===0,onClick:()=>pe(e),type:`button`,children:e},e)),(0,v.jsx)(`button`,{className:`page-button`,disabled:fe===St||xt===0,onClick:nn,type:`button`,"aria-label":`Next page`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`chevron_right`})})]})]})]}),_t&&(0,v.jsx)(y,{variant:`compact`,message:`Loading UniFAST information…`}),vt&&(0,v.jsxs)(`section`,{className:`portal-cta`,"aria-labelledby":`portal-cta-title`,children:[(0,v.jsx)(`div`,{className:`portal-cta__icon`,"aria-hidden":`true`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`assignment`})}),(0,v.jsxs)(`div`,{className:`portal-cta__copy`,children:[(0,v.jsx)(`span`,{className:`eyebrow`,children:`Unified Student Financial Assistance System for Tertiary Education`}),(0,v.jsx)(`h3`,{id:`portal-cta-title`,children:`UNIFAST APPLICATION`}),(0,v.jsx)(`p`,{children:`Complete the student, parent, address, and contact information form for UNIFAST applicant processing.`})]}),(0,v.jsxs)(`button`,{"aria-label":_t?`Checking UNIFAST portal status`:vt?`UNIFAST portal is open. Open application form`:`UNIFAST portal is closed`,className:`button button--portal ${_t?`button--portal-loading`:vt?`button--portal-open`:`button--portal-closed`}`,disabled:_t,onClick:At,type:`button`,children:[!_t&&(0,v.jsx)(`span`,{className:`portal-status-dot`,"aria-hidden":`true`}),_t?(0,v.jsx)(y,{variant:`inline`,message:`Loading UniFAST information…`}):vt?`PORTAL OPEN`:`PORTAL IS CLOSED`]})]})]})}),(0,v.jsx)(`footer`,{className:`landing-footer`,children:(0,v.jsxs)(`p`,{children:[`Copyright 2026 | All Rights Reserved IBACMI - Scholarship Office |`,` `,(0,v.jsx)(`button`,{className:`landing-footer__download`,onClick:yt,type:`button`,children:f?`App installed`:`Download app`}),` `,`| Developed By CINIFIX Technology`]})}),S&&(0,v.jsxs)(`div`,{"aria-labelledby":`grantee-question-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close grantee question`,className:`modal-backdrop-button`,onClick:()=>C(!1),type:`button`}),(0,v.jsxs)(`section`,{className:`modal-card portal-grantee-modal`,children:[(0,v.jsx)(`div`,{className:`portal-grantee-icon`,"aria-hidden":`true`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`school`})}),(0,v.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST APPLICATION`}),(0,v.jsx)(`h3`,{id:`grantee-question-title`,children:`Grantee ka?`}),(0,v.jsx)(`p`,{className:`portal-grantee-copy`,children:`Are you an existing UniFAST grantee?`}),(0,v.jsxs)(`div`,{className:`portal-grantee-actions`,children:[(0,v.jsx)(`button`,{className:`button button--secondary`,onClick:Mt,type:`button`,children:`Yes`}),(0,v.jsx)(`button`,{className:`button`,onClick:jt,type:`button`,children:`No`})]})]})]}),b&&(0,v.jsxs)(`div`,{"aria-labelledby":`unifast-portal-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close UNIFAST portal modal`,className:`modal-backdrop-button`,onClick:Nt,type:`button`}),(0,v.jsxs)(`form`,{className:`modal-card portal-modal-card`,noValidate:!0,ref:c,onInput:zt,onSubmit:Bt,children:[(0,v.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,v.jsxs)(`div`,{className:`modal-title-row`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,v.jsx)(`h3`,{id:`unifast-portal-title`,children:`Student Information Form`}),(0,v.jsxs)(`p`,{children:[`Complete the student, parent, and contact information fields below`,mt?.applicationYear?` for ${mt.applicationYear}.`:`.`]})]}),(0,v.jsx)(`button`,{"aria-label":`Close UNIFAST portal`,className:`icon-button modal-close`,onClick:Nt,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,v.jsx)(`nav`,{className:`portal-stepper`,"aria-label":`Application form progress`,children:Uo.map((e,t)=>(0,v.jsxs)(`button`,{type:`button`,disabled:t>=5||t>=ee,className:`portal-stepper__step${ee===t?` is-active`:``}${ee>t?` is-complete`:``}`,"aria-current":ee===t?`step`:void 0,onClick:()=>{if(!(t>=5)){if(Y){X(null),re(!1),Z(t);return}t<ee&&Ht(t)}},children:[(0,v.jsx)(`span`,{children:ee>t?`✓`:t+1}),(0,v.jsx)(`small`,{children:e})]},e))}),(0,v.jsxs)(`div`,{className:`modal-body portal-form${Y?` portal-form--hidden`:``}`,children:[(0,v.jsx)(`div`,{className:`portal-step-panel${ee===0?` is-active`:``}`,"data-portal-step":`0`,children:(0,v.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-student-heading`,children:[(0,v.jsx)(`h4`,{id:`portal-student-heading`,children:`Student Information`}),(0,v.jsxs)(`div`,{className:`portal-grid`,children:[zo.map(e=>(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:e.label}),(0,v.jsx)(`input`,{autoComplete:e.autoComplete,maxLength:e.name===`studentId`?30:e.name===`lrn`?12:void 0,name:e.name,pattern:e.name===`studentId`?`[A-Za-z0-9-]{4,30}`:e.pattern,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:`text`}),e.helper&&(0,v.jsx)(`small`,{className:`portal-field-helper`,children:e.helper})]},e.name)),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Sex`}),(0,v.jsxs)(`select`,{name:`sexCode`,defaultValue:``,required:!0,children:[(0,v.jsx)(`option`,{value:``,disabled:!0,children:`Select sex`}),(0,v.jsx)(`option`,{value:`0`,children:`Male`}),(0,v.jsx)(`option`,{value:`1`,children:`Female`})]})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Birth Date`}),(0,v.jsx)(`input`,{name:`birthDate`,max:new Date().toISOString().slice(0,10),required:!0,type:`date`})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Year`}),(0,v.jsxs)(`select`,{name:`year`,defaultValue:``,required:!0,children:[(0,v.jsx)(`option`,{value:``,disabled:!0,children:`Select year`}),(0,v.jsx)(`option`,{value:`1st Year`,children:`1st Year`}),(0,v.jsx)(`option`,{value:`2nd Year`,children:`2nd Year`}),(0,v.jsx)(`option`,{value:`3rd Year`,children:`3rd Year`}),(0,v.jsx)(`option`,{value:`4th Year`,children:`4th Year`}),(0,v.jsx)(`option`,{value:`5th Year`,children:`5th Year`}),(0,v.jsx)(`option`,{value:`6th Year`,children:`6th Year`})]})]}),(0,v.jsxs)(`fieldset`,{className:`portal-course-list`,children:[(0,v.jsx)(`legend`,{children:`Course`}),Ho.map(e=>(0,v.jsxs)(`label`,{className:`portal-course-option`,children:[(0,v.jsx)(`input`,{name:`course`,required:!0,type:`radio`,value:e}),(0,v.jsx)(`span`,{children:e})]},e))]})]})]})}),(0,v.jsx)(`div`,{className:`portal-step-panel${ee===1?` is-active`:``}`,"data-portal-step":`1`,children:(0,v.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-parents-heading`,children:[(0,v.jsx)(`h4`,{id:`portal-parents-heading`,children:`Parent Information`}),(0,v.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,v.jsx)(`p`,{children:`Father's Name`}),(0,v.jsxs)(`label`,{className:`portal-unavailable`,children:[(0,v.jsx)(`input`,{type:`checkbox`,name:`fatherInformationUnavailable`}),` Information unavailable`]}),(0,v.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:Bo.map(e=>(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:e.label}),(0,v.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter father's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]}),(0,v.jsxs)(`div`,{className:`portal-parent-group`,children:[(0,v.jsx)(`p`,{children:`Mother's Maiden Name`}),(0,v.jsxs)(`label`,{className:`portal-unavailable`,children:[(0,v.jsx)(`input`,{type:`checkbox`,name:`motherInformationUnavailable`}),` Information unavailable`]}),(0,v.jsx)(`div`,{className:`portal-grid portal-grid--three`,children:Vo.map(e=>(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:e.label}),(0,v.jsx)(`input`,{autoComplete:e.autoComplete,name:e.name,placeholder:`Enter mother's ${e.label.toLowerCase()}`,type:`text`})]},e.name))})]})]})}),(0,v.jsx)(`div`,{className:`portal-step-panel${ee===2?` is-active`:``}`,"data-portal-step":`2`,children:(0,v.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-contact-heading`,children:[(0,v.jsx)(`h4`,{id:`portal-contact-heading`,children:`Permanent Address & Contact`}),(0,v.jsx)(`div`,{className:`portal-grid`,children:Wo.map(e=>(0,v.jsxs)(`label`,{className:`form-field ${e.className??``}`.trim(),children:[(0,v.jsx)(`span`,{children:e.label}),(0,v.jsx)(`input`,{autoComplete:e.autoComplete,inputMode:e.inputMode,name:e.name,onInput:e.name===`mobileNumber`?on:void 0,pattern:e.pattern,placeholder:`Enter ${e.label.toLowerCase()}`,required:e.required,type:e.type??`text`})]},e.name))})]})}),(0,v.jsx)(`div`,{className:`portal-step-panel${ee===3?` is-active`:``}`,"data-portal-step":`3`,children:(0,v.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-additional-heading`,children:[(0,v.jsx)(`h4`,{id:`portal-additional-heading`,children:`Additional Student Information`}),(0,v.jsxs)(`div`,{className:`portal-grid`,children:[(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Do you have a disability?`}),(0,v.jsxs)(`select`,{name:`hasDisability`,defaultValue:``,required:!0,children:[(0,v.jsx)(`option`,{value:``,disabled:!0,children:`Select one`}),(0,v.jsx)(`option`,{value:`no`,children:`No`}),(0,v.jsx)(`option`,{value:`yes`,children:`Yes`})]})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsxs)(`span`,{children:[`Please specify your disability type `,(0,v.jsx)(`small`,{children:`(if applicable)`})]}),(0,v.jsx)(`input`,{name:`disabilityType`,maxLength:120,placeholder:`Optional`})]}),(0,v.jsxs)(`fieldset`,{className:`portal-choice-field`,children:[(0,v.jsx)(`legend`,{children:`Are you a dependent or child of a solo parent?`}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`input`,{type:`radio`,name:`soloParentDependent`,value:`1`,required:!0}),` Yes`]}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`input`,{type:`radio`,name:`soloParentDependent`,value:`0`}),` No`]})]}),(0,v.jsxs)(`fieldset`,{className:`portal-choice-field`,children:[(0,v.jsx)(`legend`,{children:`Are you a first-generation college student?`}),(0,v.jsx)(`p`,{children:`Neither of your parents or legal guardians attended college or completed a college degree.`}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`input`,{type:`radio`,name:`firstGeneration`,value:`1`,required:!0}),` Yes`]}),(0,v.jsxs)(`label`,{children:[(0,v.jsx)(`input`,{type:`radio`,name:`firstGeneration`,value:`0`}),` No`]})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Do you belong to an Indigenous Peoples (IP) group?`}),(0,v.jsxs)(`select`,{name:`isIndigenous`,defaultValue:``,required:!0,children:[(0,v.jsx)(`option`,{value:``,disabled:!0,children:`Select one`}),(0,v.jsx)(`option`,{value:`no`,children:`No`}),(0,v.jsx)(`option`,{value:`yes`,children:`Yes`})]})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsxs)(`span`,{children:[`Please specify your IP group `,(0,v.jsx)(`small`,{children:`(if applicable)`})]}),(0,v.jsx)(`input`,{name:`indigenousGroup`,maxLength:120,placeholder:`Optional`})]}),(0,v.jsxs)(`div`,{className:`portal-classification`,children:[(0,v.jsx)(`span`,{children:`Applicant Classification`}),(0,v.jsx)(`strong`,{children:`TES Applicant`}),(0,v.jsx)(`small`,{children:`This classification is assigned by the Scholarship Office.`})]})]})]})}),(0,v.jsx)(`div`,{className:`portal-step-panel${ee===4?` is-active`:``}`,"data-portal-step":`4`,children:(0,v.jsxs)(`section`,{className:`portal-section`,"aria-labelledby":`portal-documents-heading`,children:[(0,v.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,v.jsx)(`h4`,{id:`portal-documents-heading`,children:`Document Requirements`}),(0,v.jsx)(`p`,{children:`Upload clear PDF copies up to 10MB each. Required and optional documents are labeled below.`})]}),(0,v.jsxs)(`div`,{className:`portal-document-grid`,children:[(0,v.jsxs)(`label`,{className:`portal-document-upload${q.psaFile?` portal-document-upload--selected`:``}`,children:[(0,v.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`psaFile`,onChange:Rt,required:!0,type:`file`}),(0,v.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`})}),(0,v.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,v.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,v.jsx)(`strong`,{children:`PSA Birth Certificate`}),(0,v.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,v.jsx)(`span`,{children:q.psaFile?`${q.psaFile.name} (${Io(q.psaFile.size)})`:`Select PSA PDF file`}),Lt(`psaFile`)]})]}),(0,v.jsxs)(`label`,{className:`portal-document-upload${q.schoolIdFile?` portal-document-upload--selected`:``}`,children:[(0,v.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`schoolIdFile`,onChange:Rt,required:!0,type:`file`}),(0,v.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`badge`})}),(0,v.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,v.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,v.jsx)(`strong`,{children:`School ID / Valid ID with Three Signatures`}),(0,v.jsx)(`span`,{className:`portal-document-badge portal-document-badge--required`,children:`Required`})]}),(0,v.jsx)(`span`,{children:q.schoolIdFile?`${q.schoolIdFile.name} (${Io(q.schoolIdFile.size)})`:`Upload a clear School ID or valid ID showing three specimen signatures.`}),Lt(`schoolIdFile`)]})]}),(0,v.jsxs)(`label`,{className:`portal-document-upload${q.corFile?` portal-document-upload--selected`:``}`,children:[(0,v.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`corFile`,onChange:Rt,type:`file`}),(0,v.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`description`})}),(0,v.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,v.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,v.jsx)(`strong`,{children:`COR / Study Load`}),(0,v.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,v.jsx)(`span`,{children:q.corFile?`${q.corFile.name} (${Io(q.corFile.size)})`:`Attach a COR or Study Load PDF, if available.`}),Lt(`corFile`)]})]}),(0,v.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${q.pwdIdFile?` portal-document-upload--selected`:``}`,children:[(0,v.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`pwdIdFile`,onChange:Rt,type:`file`}),(0,v.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`accessible`})}),(0,v.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,v.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,v.jsx)(`strong`,{children:`PWD ID`}),(0,v.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,v.jsx)(`span`,{children:q.pwdIdFile?`${q.pwdIdFile.name} (${Io(q.pwdIdFile.size)})`:`Attach a clear PWD ID PDF, if applicable`}),Lt(`pwdIdFile`)]})]}),(0,v.jsxs)(`label`,{className:`portal-document-upload portal-document-upload--optional${q.fourPsFile?` portal-document-upload--selected`:``}`,children:[(0,v.jsx)(`input`,{accept:`application/pdf,.pdf`,name:`fourPsFile`,onChange:Rt,type:`file`}),(0,v.jsx)(`span`,{className:`portal-document-upload__icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`family_restroom`})}),(0,v.jsxs)(`span`,{className:`portal-document-upload__copy`,children:[(0,v.jsxs)(`span`,{className:`portal-document-upload__title`,children:[(0,v.jsx)(`strong`,{children:`4Ps ID`}),(0,v.jsx)(`span`,{className:`portal-document-badge`,children:`Optional`})]}),(0,v.jsx)(`span`,{children:q.fourPsFile?`${q.fourPsFile.name} (${Io(q.fourPsFile.size)})`:`Attach a clear 4Ps ID PDF, if applicable`}),Lt(`fourPsFile`)]})]})]})]})})]}),Y&&(0,v.jsx)(`div`,{className:`modal-body portal-review`,children:(0,v.jsxs)(`section`,{className:`portal-review-card`,"aria-labelledby":`portal-review-heading`,children:[(0,v.jsxs)(`div`,{className:`portal-section-heading`,children:[(0,v.jsx)(`h4`,{id:`portal-review-heading`,children:`Review Information`}),(0,v.jsx)(`p`,{children:`Please check every detail before final submission.`})]}),(0,v.jsxs)(`div`,{className:`portal-review-grid`,children:[(0,v.jsxs)(`div`,{className:`portal-review-group`,children:[(0,v.jsx)(`h5`,{children:`Student Information`}),(0,v.jsxs)(`dl`,{children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Student ID`}),(0,v.jsx)(`dd`,{children:Y.studentId})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`LRN`}),(0,v.jsx)(`dd`,{children:Y.lrn||`Not assigned / not provided`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`PhilSys ID`}),(0,v.jsx)(`dd`,{children:Y.philSysIdNumber||`Not provided`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`4Ps ID Number`}),(0,v.jsx)(`dd`,{children:Y.fourPsIdNumber||`Not provided`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Full Name`}),(0,v.jsx)(`dd`,{children:[Y.firstName,Y.middleName,Y.lastName,Y.extensionName].filter(Boolean).join(` `)})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Gender`}),(0,v.jsx)(`dd`,{children:Y.gender})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Birth Date`}),(0,v.jsx)(`dd`,{children:Y.birthDate})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Year`}),(0,v.jsx)(`dd`,{children:Y.year})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Course`}),(0,v.jsx)(`dd`,{children:Y.course})]})]})]}),(0,v.jsxs)(`div`,{className:`portal-review-group`,children:[(0,v.jsx)(`h5`,{children:`Parents Information`}),(0,v.jsxs)(`dl`,{children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Father`}),(0,v.jsx)(`dd`,{children:[Y.fatherFirstName,Y.fatherMiddleName,Y.fatherLastName].filter(Boolean).join(` `)||(Y.fatherInformationUnavailable?`Information unavailable`:`Not provided`)})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Mother`}),(0,v.jsx)(`dd`,{children:[Y.motherFirstName,Y.motherMiddleName,Y.motherLastName].filter(Boolean).join(` `)||(Y.motherInformationUnavailable?`Information unavailable`:`Not provided`)})]})]})]}),(0,v.jsxs)(`div`,{className:`portal-review-group`,children:[(0,v.jsx)(`h5`,{children:`Address and Contact`}),(0,v.jsxs)(`dl`,{children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Permanent Address`}),(0,v.jsx)(`dd`,{children:Y.address})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Zip Code`}),(0,v.jsx)(`dd`,{children:Y.zipCode||`Not provided`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`PWD ID`}),(0,v.jsx)(`dd`,{children:Y.pwdId||`Not provided`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Mobile No.`}),(0,v.jsx)(`dd`,{children:Y.mobileNumber})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Email Address`}),(0,v.jsx)(`dd`,{children:Y.emailAddress})]})]})]}),(0,v.jsxs)(`div`,{className:`portal-review-group`,children:[(0,v.jsx)(`h5`,{children:`Additional Information`}),(0,v.jsxs)(`dl`,{children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Disability`}),(0,v.jsx)(`dd`,{children:Y.hasDisability?Y.disabilityType||`Yes — details not specified`:`No`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Solo Parent Dependent`}),(0,v.jsx)(`dd`,{children:Y.soloParentDependent?`Yes (1)`:`No (0)`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`First Generation`}),(0,v.jsx)(`dd`,{children:Y.firstGeneration?`Yes (1)`:`No (0)`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Indigenous Peoples Group`}),(0,v.jsx)(`dd`,{children:Y.isIndigenous?Y.indigenousGroup||`Yes — group not specified`:`No`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`Classification`}),(0,v.jsx)(`dd`,{children:`TES Applicant`})]})]})]}),(0,v.jsxs)(`div`,{className:`portal-review-group`,children:[(0,v.jsx)(`h5`,{children:`Documents`}),(0,v.jsxs)(`dl`,{children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`PSA Birth Certificate`}),(0,v.jsxs)(`dd`,{children:[Y.psaFile.name,` (`,Io(Y.psaFile.size),`)`]})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`School ID Photocopy`}),(0,v.jsxs)(`dd`,{children:[Y.schoolIdFile.name,` (`,Io(Y.schoolIdFile.size),`)`]})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`COR / Study Load`}),(0,v.jsx)(`dd`,{children:Y.corFile?`${Y.corFile.name} (${Io(Y.corFile.size)})`:`Not provided (optional)`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`PWD ID (Optional)`}),(0,v.jsx)(`dd`,{children:Y.pwdIdFile?`${Y.pwdIdFile.name} (${Io(Y.pwdIdFile.size)})`:`Not provided`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`dt`,{children:`4Ps ID (Optional)`}),(0,v.jsx)(`dd`,{children:Y.fourPsFile?`${Y.fourPsFile.name} (${Io(Y.fourPsFile.size)})`:`Not provided`})]})]})]})]}),(0,v.jsxs)(`label`,{className:`portal-acknowledgment`,children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:ne,onChange:e=>re(e.target.checked)}),` I certify that the information and documents I have submitted are true and accurate to the best of my knowledge.`]}),(0,v.jsx)(`p`,{className:`portal-review-privacy`,children:`Your information and supporting documents will be used by the Scholarship Office for TES application processing, eligibility verification, and related scholarship administration.`})]})}),(B||H)&&(0,v.jsxs)(`div`,{className:`portal-message-row`,children:[B&&(0,v.jsx)(`p`,{className:`form-error`,children:B}),H&&(0,v.jsx)(`p`,{className:`form-success`,children:H})]}),(0,v.jsx)(`div`,{className:`modal-actions portal-actions`,children:Y?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`button`,{className:`button button--secondary`,disabled:ce,onClick:()=>{X(null),Z(4),re(!1)},type:`button`,children:`Previous`}),(0,v.jsx)(`button`,{className:`button button--secondary`,disabled:ce,onClick:Ut,type:`button`,children:`Edit Information`}),(0,v.jsx)(`button`,{className:`button`,disabled:ce,onClick:Wt,type:`button`,children:`Submit Application`})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`button`,{className:`button button--secondary`,disabled:ce,onClick:Nt,type:`button`,children:`Cancel`}),ee>0&&(0,v.jsx)(`button`,{className:`button button--secondary`,disabled:ce,onClick:()=>Ht(ee-1),type:`button`,children:`Previous`}),ee<4?(0,v.jsx)(`button`,{className:`button`,disabled:ce,onClick:()=>Ht(ee+1),type:`button`,children:`Continue`}):(0,v.jsx)(`button`,{className:`button`,disabled:ce,onClick:()=>Bt({preventDefault(){},currentTarget:c.current}),type:`button`,children:`Review & Submit`})]})})]})]}),A&&(0,v.jsxs)(`div`,{"aria-labelledby":`portal-privacy-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Return to application review`,className:`modal-backdrop-button`,disabled:ce,onClick:()=>j(!1),type:`button`}),(0,v.jsxs)(`section`,{className:`modal-card portal-privacy-card`,children:[(0,v.jsxs)(`div`,{className:`success-modal-body`,children:[(0,v.jsx)(`div`,{className:`portal-privacy-icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`privacy_tip`})}),(0,v.jsx)(`p`,{className:`modal-kicker`,children:`Data Privacy Notice`}),(0,v.jsx)(`h3`,{id:`portal-privacy-title`,children:`Your Privacy Matters`}),(0,v.jsx)(`p`,{children:`I understand that the personal information I provide will be collected, stored, and processed by the Scholarship Office solely for scholarship administration, verification, monitoring, and related educational purposes. I am informed that my data will be kept confidential and protected in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173), and will only be accessed by authorized personnel when necessary.`})]}),(0,v.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,v.jsx)(`button`,{className:`button`,disabled:ce,onClick:Gt,type:`button`,children:ce?(0,v.jsx)(y,{variant:`inline`,message:`Submitting your application…`}):`I UNDERSTAND`})})]})]}),M&&(0,v.jsxs)(`div`,{"aria-labelledby":`portal-submission-success-title`,"aria-modal":`true`,className:`modal-overlay portal-confirmation-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close application success modal`,className:`modal-backdrop-button`,onClick:()=>N(!1),type:`button`}),(0,v.jsxs)(`section`,{className:`modal-card modal-card--success`,children:[(0,v.jsxs)(`div`,{className:`success-modal-body`,children:[(0,v.jsx)(`div`,{className:`success-icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,v.jsx)(`h3`,{id:`portal-submission-success-title`,children:`Application Submitted Successfully`}),(0,v.jsxs)(`p`,{children:[`Please wait for the UNIFAST results. You will be notified through the Facebook page, `,(0,v.jsx)(`strong`,{children:`Iba College of Mindanao Inc. - Scholarship Office`}),`.`]})]}),(0,v.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,v.jsx)(`button`,{className:`button`,onClick:()=>N(!1),type:`button`,children:`Done`})})]})]}),W&&(0,v.jsxs)(`div`,{"aria-labelledby":`portal-status-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close portal status modal`,className:`modal-backdrop-button`,onClick:()=>K(``),type:`button`}),(0,v.jsxs)(`section`,{className:`modal-card portal-status-card`,children:[(0,v.jsx)(`div`,{className:`modal-header portal-modal-header`,children:(0,v.jsxs)(`div`,{className:`modal-title-row`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{id:`portal-status-title`,children:`Portal Status`}),(0,v.jsx)(`p`,{children:W})]}),(0,v.jsx)(`button`,{"aria-label":`Close portal status`,className:`icon-button modal-close`,onClick:()=>K(``),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]})}),(0,v.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,v.jsx)(`button`,{className:`button`,onClick:()=>K(``),type:`button`,children:`OK`})})]})]}),h&&(0,v.jsxs)(`div`,{"aria-labelledby":`quick-actions-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close quick actions modal`,className:`modal-backdrop-button`,onClick:kt,type:`button`}),(0,v.jsxs)(`form`,{className:`modal-card modal-card--wide auth-modal-card`,onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=String(n.get(`email`)||``).trim().toLowerCase(),i=String(n.get(`studentId`)||``).trim(),a=String(n.get(`lastName`)||``).trim(),o=String(n.get(`firstName`)||``).trim(),s=String(n.get(`middleInitial`)||``).trim(),c=jo(String(n.get(`question`)||``)).trim();L(``),z(``),se(!0);try{if(!Do(r))throw Error(`Please enter a valid email account.`);if(!Oo(i))throw Error(`Please enter a valid Student ID.`);if(!a||!o)throw Error(`Last name and first name are required.`);if(s&&!/^[A-Za-z. -]{1,10}$/.test(s))throw Error(`Please enter a valid middle initial.`);if(!c)throw Error(`Please enter your question or request.`);if(c.length>500)throw Error(`Your question must be 500 characters or fewer.`);await ct({email:r,studentId:i,lastName:a,firstName:o,middleInitial:s,question:c,source:Xa.quickActions.source,status:Xa.quickActions.defaultStatus}),t.reset(),_(!1),z(`Your request has been submitted.`)}catch(e){L(G(e,`Unable to submit your request right now.`,`landingpage.alllanding`))}finally{se(!1)}},children:[(0,v.jsxs)(`div`,{className:`modal-header`,children:[(0,v.jsxs)(`div`,{className:`modal-title-row`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`modal-kicker`,children:`Quick Actions`}),(0,v.jsx)(`h3`,{id:`quick-actions-title`,children:`Submit a Request`})]}),(0,v.jsx)(`button`,{"aria-label":`Close modal`,className:`icon-button modal-close`,onClick:kt,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})})]}),(0,v.jsx)(`p`,{children:`Send a question or request to the scholarship office for review.`})]}),(0,v.jsxs)(`div`,{className:`modal-body quick-action-form-grid`,children:[(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Student ID`}),(0,v.jsx)(`input`,{autoComplete:`off`,name:`studentId`,placeholder:`Enter Student ID`,required:!0})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Email account`}),(0,v.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`email`,placeholder:Xa.quickActions.fields.email.placeholder,required:!0,type:`email`})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Last name`}),(0,v.jsx)(`input`,{autoComplete:`family-name`,name:`lastName`,placeholder:`Enter last name`,required:!0})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`First name`}),(0,v.jsx)(`input`,{autoComplete:`given-name`,name:`firstName`,placeholder:`Enter first name`,required:!0})]}),(0,v.jsxs)(`label`,{className:`form-field quick-action-mi-field`,children:[(0,v.jsx)(`span`,{children:`MI`}),(0,v.jsx)(`input`,{autoComplete:`additional-name`,maxLength:10,name:`middleInitial`,placeholder:`M`})]}),(0,v.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,v.jsx)(`span`,{children:`Question`}),(0,v.jsx)(`textarea`,{"aria-describedby":`quick-action-question-help`,maxLength:500,name:`question`,onInput:e=>{e.currentTarget.value=jo(e.currentTarget.value)},placeholder:Xa.quickActions.fields.question.placeholder,required:!0,rows:4}),(0,v.jsx)(`small`,{className:`form-field__help`,id:`quick-action-question-help`,children:`One paragraph only, up to 500 characters.`})]}),I&&(0,v.jsx)(`p`,{className:`form-error auth-full-field`,children:I})]}),(0,v.jsxs)(`div`,{className:`modal-actions`,children:[(0,v.jsx)(`button`,{className:`button button--secondary`,disabled:oe,onClick:kt,type:`button`,children:`Cancel`}),(0,v.jsx)(`button`,{className:`button`,disabled:oe,type:`submit`,children:oe?(0,v.jsx)(y,{variant:`inline`,message:`Submitting your request…`}):`Submit`})]})]})]}),i&&(0,v.jsx)(io,{onDismiss:()=>a(!1),onLogin:()=>qt(`login`),onRegister:()=>qt(`register`),onSearch:Jt}),w&&(0,v.jsxs)(`div`,{"aria-labelledby":`admin-login-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close admin login modal`,className:`modal-backdrop-button`,onClick:Yt,type:`button`}),(0,v.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card`,onSubmit:async e=>{e.preventDefault();let n=ve.trim(),r=be,i=n.includes(`@`),a=i?n.toLowerCase():``,o=i?``:n;if(F(``),!n){F(`Enter your official registered email address or School ID.`);return}if(i&&!Do(a)){F(`Please enter a valid registered email address.`);return}if(!i&&!Oo(o)){F(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(!r){F(`Password is required.`);return}if(!Lo(r)){F(`Password must be at least 6 characters.`);return}let s={password:r,...i?{email:a}:{schoolId:o}};ae(!0);try{let e=await Ro(lt(s),15e3,`Login is taking too long. Please check your internet connection is running, then try again.`);if(!e.success){F(e.message||`Invalid admin credentials.`);return}T(!1),typeof t==`function`&&t(e.admin)}catch(e){F(G(e,`Unable to login right now.`,`landingpage.alllanding`))}finally{ae(!1)}},children:[(0,v.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,v.jsx)(`div`,{className:`admin-login-brand`,children:(0,v.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,v.jsx)(`button`,{"aria-label":`Close admin login`,className:`icon-button modal-close admin-login-close`,onClick:Yt,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,v.jsx)(`p`,{className:`modal-kicker`,children:`UNIFAST Portal`}),(0,v.jsx)(`h3`,{id:`admin-login-title`,children:`Sign in`})]}),(0,v.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,v.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,v.jsx)(`span`,{children:`Official Registered Email or School ID`}),(0,v.jsx)(`input`,{autoCapitalize:`none`,autoComplete:`username`,maxLength:254,name:`adminIdentifier`,placeholder:`Enter your official registered email or School ID`,required:!0,spellCheck:!1,type:`text`,value:ve,onChange:e=>ye(e.target.value)})]}),(0,v.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,v.jsx)(`span`,{children:`Password`}),(0,v.jsx)(`input`,{autoComplete:`current-password`,name:`adminPassword`,placeholder:`Enter password`,required:!0,type:`password`,minLength:6,value:be,onChange:e=>xe(e.target.value)})]}),(0,v.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`info`}),(0,v.jsx)(`p`,{children:`Enter either your official registered email address or your School ID. Your password is still required.`})]}),(0,v.jsxs)(`div`,{className:`auth-link-row auth-full-field`,children:[(0,v.jsx)(`button`,{className:`auth-text-button`,disabled:ie,onClick:$t,type:`button`,children:`Forgot Password?`}),(0,v.jsx)(`button`,{className:`auth-text-button auth-text-button--strong`,disabled:ie,onClick:Xt,type:`button`,children:`Create Account`})]}),P&&(0,v.jsx)(`p`,{className:`form-error auth-full-field`,children:P})]}),(0,v.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,v.jsx)(`button`,{className:`button button--secondary`,disabled:ie,onClick:Yt,type:`button`,children:`Cancel`}),(0,v.jsx)(`button`,{className:`button`,disabled:ie,type:`submit`,children:ie?(0,v.jsx)(y,{variant:`inline`,message:`Signing you in securely…`}):`Login`})]})]})]}),O&&(0,v.jsxs)(`div`,{"aria-labelledby":`sign-up-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close sign up modal`,className:`modal-backdrop-button`,onClick:Zt,type:`button`}),(0,v.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=Se.trim().toLowerCase(),n=we.trim(),r=ko(Ee),i=Oe,a=Ae;if(Ne(``),Fe(``),!t){Ne(`Email account is required.`);return}if(!Do(t)){Ne(`Please enter a valid email account.`);return}if(!n){Ne(`School ID is required.`);return}if(!Oo(n)){Ne(`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`);return}if(!r){Ne(`Phone number is required.`);return}if(!No(r)){Ne(`Please enter a valid phone number. Example: 09123456789 or +639123456789.`);return}if(!i){Ne(`Password is required.`);return}if(!Lo(i)){Ne(`Password must be at least 6 characters.`);return}if(!a){Ne(`Confirm password is required.`);return}if(i!==a){Ne(`Password and confirm password do not match.`);return}de(!0);try{let e=await ut({email:t,schoolId:n,phoneNumber:r,password:i});if(!e.success){Ne(`Dili makompleto ang pagrehistro gamit niini nga mga detalye. Palihog i-check ang imong impormasyon, pag-login o gamita ang Forgot Password kung naa na kay account, o kontaka ang Scholarship Office.`);return}k(!1),Le(e.admin??{email:t,schoolId:n,role:`student`}),Fe(`Your account has been registered successfully.`),ye(t||n),xe(``),De(``),ke(``),je(``)}catch{Ne(`Dili makompleto ang pagrehistro karon. Palihog sulayi pag-usab o kontaka ang Scholarship Office.`)}finally{de(!1)}},children:[(0,v.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,v.jsx)(`div`,{className:`admin-login-brand`,children:(0,v.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,v.jsx)(`button`,{"aria-label":`Close sign up`,className:`icon-button modal-close admin-login-close`,onClick:Zt,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,v.jsx)(`p`,{className:`modal-kicker`,children:`Account Registration`}),(0,v.jsx)(`h3`,{id:`sign-up-title`,children:`Create Account`}),(0,v.jsx)(`p`,{children:`Registration is only available for verified School IDs listed in the IBACMI Scholarship Office records.`})]}),(0,v.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Email account`}),(0,v.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`signUpEmail`,placeholder:`Enter email account`,required:!0,type:`email`,value:Se,onChange:e=>Ce(e.target.value)})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`School ID`}),(0,v.jsx)(`input`,{autoComplete:`off`,name:`signUpSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,value:we,onChange:e=>Te(e.target.value)})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Phone Number`}),(0,v.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`signUpPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`e.g. 09123456789`,required:!0,type:`tel`,value:Ee,onChange:e=>De(Ao(e.target.value))})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Password`}),(0,v.jsx)(`input`,{autoComplete:`new-password`,name:`signUpPassword`,placeholder:`Create password`,required:!0,type:`password`,minLength:6,value:Oe,onChange:e=>ke(e.target.value)})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Confirm Password`}),(0,v.jsx)(`input`,{autoComplete:`new-password`,name:`signUpConfirmPassword`,placeholder:`Confirm password`,required:!0,type:`password`,minLength:6,value:Ae,onChange:e=>je(e.target.value)})]}),(0,v.jsxs)(`div`,{className:`auth-note-box auth-full-field`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`verified_user`}),(0,v.jsx)(`p`,{children:`Your School ID will be checked against the official grantee information record before account creation.`})]}),Me&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`p`,{className:`form-error auth-full-field`,role:`alert`,lang:`ceb`,children:Me}),(0,v.jsxs)(`div`,{className:`registration-help auth-full-field`,lang:`ceb`,children:[(0,v.jsx)(`strong`,{children:`Giya sa pagrehistro — mga posibleng hinungdan:`}),(0,v.jsx)(`p`,{children:`Kung wala sa list: Wala makita ang imong Student ID sa official grantee list. Palihog i-check pag-usab o kontaka ang Scholarship Office.`}),(0,v.jsx)(`p`,{children:`Kung nakarehistro na: Naa na kay account nga nakarehistro niini nga Student ID. Palihog pag-login o gamita ang Forgot Password.`})]})]}),Pe&&(0,v.jsx)(`p`,{className:`form-success auth-full-field`,children:Pe})]}),(0,v.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,v.jsx)(`button`,{className:`button button--secondary`,disabled:ue,onClick:Qt,type:`button`,children:`Back to Login`}),(0,v.jsx)(`button`,{className:`button`,disabled:ue,type:`submit`,children:ue?(0,v.jsx)(y,{variant:`inline`,message:`Creating your student account…`}):`Register Now`})]})]})]}),Pe&&(0,v.jsxs)(`div`,{"aria-labelledby":`sign-up-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Continue to student page`,className:`modal-backdrop-button`,onClick:Dt,type:`button`}),(0,v.jsxs)(`section`,{className:`modal-card modal-card--success auth-modal-card`,children:[(0,v.jsxs)(`div`,{className:`success-modal-body`,children:[(0,v.jsx)(`div`,{className:`success-icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,v.jsx)(`h3`,{id:`sign-up-success-title`,children:`Successfully Registered`}),(0,v.jsxs)(`p`,{children:[Pe,` You can now continue to the student information page.`]})]}),(0,v.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,v.jsx)(`button`,{className:`button`,onClick:Dt,type:`button`,children:`Continue`})})]})]}),E&&(0,v.jsxs)(`div`,{"aria-labelledby":`forgot-password-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close forgot password modal`,className:`modal-backdrop-button`,onClick:en,type:`button`}),(0,v.jsxs)(`form`,{className:`modal-card modal-card--admin auth-modal-card auth-modal-card--large`,onSubmit:async e=>{e.preventDefault();let t=dn(),n=Re.trim().toLowerCase(),r=Be.trim(),i=ko(He),a=We.trim(),o=Ke,s=Je;if(Ze(``),$e(``),t){Ze(t);return}if(!et){Ze(`Please request an OTP first.`);return}if(!a){Ze(`OTP is required.`);return}if(!/^\d{4,8}$/.test(a)){Ze(`OTP must be 4 to 8 digits.`);return}if(!o){Ze(`New password is required.`);return}if(!Lo(o)){Ze(`New password must be at least 6 characters.`);return}if(!s){Ze(`Confirm password is required.`);return}if(o!==s){Ze(`New password and confirm password do not match.`);return}at(!0);try{let e=await ft({email:n||void 0,schoolId:r||void 0,phoneNumber:i,otp:a,newPassword:o});if(!e.success){Ze(e.message||`Unable to change password.`);return}$e(e.message||`Password changed successfully.`),Ge(``),qe(``),Ye(``),tt(!1),ye(n||r),xe(``)}catch(e){Ze(G(e,`Unable to change password right now.`,`landingpage.alllanding`))}finally{at(!1)}},children:[(0,v.jsxs)(`div`,{className:`admin-login-hero auth-modal-hero`,children:[(0,v.jsx)(`div`,{className:`admin-login-brand`,children:(0,v.jsx)(`img`,{alt:`IBACMI`,src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`})}),(0,v.jsx)(`button`,{"aria-label":`Close forgot password`,className:`icon-button modal-close admin-login-close`,onClick:en,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`close`})}),(0,v.jsx)(`p`,{className:`modal-kicker`,children:`Account Recovery`}),(0,v.jsx)(`h3`,{id:`forgot-password-title`,children:`Forgot Password`}),(0,v.jsx)(`p`,{children:`Verify your email or School ID with your registered phone number before changing your password.`})]}),(0,v.jsxs)(`div`,{className:`modal-body admin-login-body auth-form-grid`,children:[(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`Email address`}),(0,v.jsx)(`input`,{autoComplete:`email`,inputMode:`email`,name:`forgotEmail`,placeholder:`Enter valid email address`,required:!Be.trim(),type:`email`,disabled:Be.trim().length>0||nt||it,value:Re,onChange:cn})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`School ID`}),(0,v.jsx)(`input`,{autoComplete:`off`,name:`forgotSchoolId`,placeholder:`Enter School ID`,required:!0,type:`text`,minLength:4,maxLength:30,pattern:`[A-Za-z0-9-]{4,30}`,title:`School ID must be 4 to 30 characters and may only contain letters, numbers, and hyphens.`,required:!Re.trim(),disabled:Re.trim().length>0||nt||it,value:Be,onChange:ln})]}),(0,v.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,v.jsx)(`span`,{children:`Phone number`}),(0,v.jsx)(`input`,{autoComplete:`tel`,inputMode:`tel`,name:`forgotPhoneNumber`,pattern:`\\+?[0-9]*`,placeholder:`09123456789 or +639123456789`,required:!0,type:`tel`,disabled:nt||it,value:He,onChange:un})]}),(0,v.jsx)(`button`,{className:`button button--secondary auth-full-field`,disabled:nt||it,onClick:async()=>{let e=dn();if(Ze(``),$e(``),e){Ze(e);return}let t=Re.trim().toLowerCase(),n=Be.trim(),r=ko(He);rt(!0);try{let e=await dt({email:t||void 0,schoolId:n||void 0,phoneNumber:r});if(!e.success){Ze(e.message||`Unable to send OTP.`);return}tt(!0),$e(e.message||`OTP generated successfully. Enter it below to change your password.`)}catch(e){Ze(G(e,`Unable to request OTP right now.`,`landingpage.alllanding`))}finally{rt(!1)}},type:`button`,children:nt?(0,v.jsx)(y,{variant:`inline`,message:`Sending your verification code…`}):et?`Resend OTP`:`Send OTP`}),et&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`OTP Code`}),(0,v.jsx)(`input`,{autoComplete:`one-time-code`,inputMode:`numeric`,name:`forgotOtp`,placeholder:`Enter OTP`,required:!0,type:`text`,maxLength:8,value:We,onChange:e=>Ge(e.target.value.replace(/\D/g,``))})]}),(0,v.jsxs)(`label`,{className:`form-field`,children:[(0,v.jsx)(`span`,{children:`New Password`}),(0,v.jsx)(`input`,{autoComplete:`new-password`,name:`forgotNewPassword`,placeholder:`Enter new password`,required:!0,type:`password`,minLength:6,value:Ke,onChange:e=>qe(e.target.value)})]}),(0,v.jsxs)(`label`,{className:`form-field auth-full-field`,children:[(0,v.jsx)(`span`,{children:`Confirm New Password`}),(0,v.jsx)(`input`,{autoComplete:`new-password`,name:`forgotConfirmPassword`,placeholder:`Confirm new password`,required:!0,type:`password`,minLength:6,value:Je,onChange:e=>Ye(e.target.value)})]})]}),Xe&&(0,v.jsx)(`p`,{className:`form-error auth-full-field`,children:Xe}),Qe&&(0,v.jsx)(`p`,{className:`form-success auth-full-field`,children:Qe})]}),(0,v.jsxs)(`div`,{className:`modal-actions admin-login-actions auth-actions`,children:[(0,v.jsx)(`button`,{className:`button button--secondary`,disabled:nt||it,onClick:en,type:`button`,children:`Cancel`}),(0,v.jsx)(`button`,{className:`button`,disabled:!et||nt||it,type:`submit`,children:it?(0,v.jsx)(y,{variant:`inline`,message:`Updating your password…`}):`Change Password`})]})]})]}),R&&(0,v.jsxs)(`div`,{"aria-labelledby":`quick-action-success-title`,"aria-modal":`true`,className:`modal-overlay`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close success modal`,className:`modal-backdrop-button`,onClick:()=>z(``),type:`button`}),(0,v.jsxs)(`div`,{className:`modal-card modal-card--success`,children:[(0,v.jsxs)(`div`,{className:`success-modal-body`,children:[(0,v.jsx)(`div`,{className:`success-icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,v.jsx)(`h3`,{id:`quick-action-success-title`,children:`Submitted Successfully`}),(0,v.jsxs)(`p`,{children:[R,` The scholarship office can now review your request. Please always check your valid email. The TECH Scholarship Office will notify you when your account is updated.`]})]}),(0,v.jsx)(`div`,{className:`modal-actions modal-actions--single`,children:(0,v.jsx)(`button`,{className:`button`,onClick:()=>z(``),type:`button`,children:`Done`})})]})]}),(0,v.jsx)(`div`,{className:`scroll-progress`,style:{"--scroll-progress":u}}),(0,v.jsx)(ro,{onRequest:Ot})]})}var Ko=`
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
`;function qo(e,t,{headers:n={},onProgress:r,signal:i}={}){return new Promise((a,o)=>{let s=new XMLHttpRequest,c=()=>s.abort(),l=()=>i?.removeEventListener(`abort`,c);s.open(`POST`,e),s.timeout=12e4;for(let[e,t]of Object.entries(n))s.setRequestHeader(e,t);if(s.upload.onprogress=e=>{e.lengthComputable&&r?.(e.loaded/e.total*100)},s.onload=()=>{if(l(),s.status<200||s.status>599){o(Error(`The upload server returned an invalid response.`));return}a(new Response([204,205,304].includes(s.status)?null:s.responseText,{status:s.status}))},s.onerror=()=>{l(),o(Error(`Unable to upload. Check your connection and try again.`))},s.ontimeout=()=>{l(),o(Error(`The upload timed out. Please try again.`))},s.onabort=()=>{l(),o(Error(`Upload cancelled.`))},i?.aborted){o(Error(`Upload cancelled.`));return}i?.addEventListener(`abort`,c,{once:!0}),s.send(t)})}var Jo=`/IBACMI-Scholarship-Office/assets/samp-wIlKUzMl.jpg`;function Yo(){let e=globalThis.crypto;if(typeof e?.randomUUID==`function`)try{return e.randomUUID()}catch{}if(typeof e?.getRandomValues==`function`)try{return Array.from(e.getRandomValues(new Uint8Array(16)),e=>e.toString(16).padStart(2,`0`)).join(``)}catch{}return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`}function Xo(e){return e?new Intl.DateTimeFormat(`en-PH`,{dateStyle:`short`,timeStyle:`short`}).format(new Date(e)):``}function Zo(e,t){let n=new Date(e),r=new Date(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate()}function Qo({studentSession:e}){let t=e?.sessionToken,n=Mr($.support.listStudentConversations,t?{sessionToken:t}:`skip`),r=Pr($.support.sendStudentPortalMessage),i=Pr($.support.markRead),[a,o]=(0,m.useState)(!1),[s,c]=(0,m.useState)(null),[l,u]=(0,m.useState)(``),[d,f]=(0,m.useState)(``),[p,h]=(0,m.useState)(!1),g=(0,m.useRef)(null),_=(0,m.useRef)(null),b=(0,m.useRef)(null),x=(0,m.useRef)(!1),S=(0,m.useCallback)(()=>{o(!1),window.setTimeout(()=>g.current?.focus(),0)},[]),C=s?n?.find(e=>e._id===s)??n?.[0]??null:n?.[0]??null,w=C?.messages??[],T=(n??[]).reduce((e,t)=>e+(t.unreadCount??0),0);return(0,m.useEffect)(()=>{a&&t&&C?._id&&i({sessionToken:t,conversationId:C._id}).catch(()=>{})},[a,t,C?._id,i]),(0,m.useEffect)(()=>{a&&_.current?.scrollIntoView({block:`end`,behavior:`smooth`})},[a,C?._id,w.length]),(0,m.useEffect)(()=>{if(!a)return;let e=document.body.style.overflow;document.body.style.overflow=`hidden`;let t=e=>{e.key===`Escape`&&S()};return window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`keydown`,t),document.body.style.overflow=e}},[a,S]),(0,v.jsxs)(v.Fragment,{children:[t&&(0,v.jsxs)(`button`,{ref:g,className:`student-chat-launcher`,type:`button`,onClick:()=>{o(!0),f(``)},"aria-label":`Chat with Scholarship Support${T?`, ${T} unread messages`:``}`,title:`Chat with Scholarship Support`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`chat`}),(0,v.jsx)(`span`,{className:`student-chat-tooltip`,role:`tooltip`,children:`Chat with Scholarship Support`}),T>0&&(0,v.jsx)(`span`,{className:`student-chat-unread`,"aria-label":`${T} unread messages`,children:T>99?`99+`:T})]}),a&&t&&(0,v.jsx)(`div`,{className:`student-chat-overlay`,role:`presentation`,onMouseDown:e=>{e.target===e.currentTarget&&S()},children:(0,v.jsxs)(`section`,{className:`student-chat-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`student-chat-title`,children:[(0,v.jsxs)(`header`,{className:`student-chat-header`,children:[(0,v.jsx)(`img`,{src:`/IBACMI-Scholarship-Office/assets/IBACMI-DvrUkuyb.png`,alt:`IBACMI`}),(0,v.jsxs)(`div`,{className:`student-chat-heading-copy`,children:[(0,v.jsx)(`h2`,{id:`student-chat-title`,children:`UniFAST Scholarship Support`}),(0,v.jsx)(`p`,{children:`Chat directly with our Scholarship Office`})]}),(0,v.jsx)(`button`,{type:`button`,"aria-label":`Minimize chat`,title:`Minimize`,onClick:S,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`expand_more`})}),(0,v.jsx)(`button`,{type:`button`,"aria-label":`Close chat`,title:`Close`,onClick:S,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`close`})})]}),(0,v.jsxs)(`div`,{className:`student-chat-history`,"aria-live":`polite`,"aria-label":`Scholarship Support messages`,children:[n===void 0&&(0,v.jsx)(y,{variant:`compact`,message:`Connecting to your conversations…`}),n!==void 0&&w.length===0&&(0,v.jsxs)(`div`,{className:`student-chat-welcome`,children:[(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`forum`}),(0,v.jsx)(`p`,{children:C?.status===`resolved`?`Your previous conversation is resolved. Send a message to reopen it or ask a new question.`:`Hello! How can we help with your UniFAST application today?`})]}),w.map((e,t)=>{let n=w[t-1],r=e.senderRole===`student`;return(0,v.jsxs)(`div`,{children:[(!n||!Zo(n.createdAt,e.createdAt))&&(0,v.jsx)(`div`,{className:`student-chat-date`,children:(0,v.jsx)(`span`,{children:new Intl.DateTimeFormat(`en-PH`,{dateStyle:`full`}).format(new Date(e.createdAt))})}),(0,v.jsxs)(`div`,{className:`student-chat-message${r?` is-own`:``}`,children:[(0,v.jsx)(`div`,{className:`student-chat-bubble`,children:e.content}),(0,v.jsxs)(`time`,{children:[Xo(e.createdAt),r&&e.readByAdmin?` · Seen by Scholarship Office`:``]})]})]},e._id)}),(0,v.jsx)(`div`,{ref:_})]}),d&&(0,v.jsx)(`p`,{className:`student-chat-error`,role:`alert`,children:d}),(0,v.jsxs)(`form`,{className:`student-chat-composer`,onSubmit:async e=>{e.preventDefault();let n=l.trim();if(!(!t||!n||x.current)){x.current=!0,h(!0),f(``);try{c((await r({sessionToken:t,content:n,clientMessageId:Yo()})).conversationId),u(``),b.current&&(b.current.style.height=``)}catch(e){f(G(e,`Your message could not be sent. Please try again.`,`student.StudentInbox`))}finally{x.current=!1,h(!1)}}},children:[(0,v.jsx)(`textarea`,{ref:b,value:l,maxLength:2e3,"aria-label":`Write a message`,placeholder:`Write a message…`,onChange:e=>{u(e.target.value),e.target.style.height=`auto`,e.target.style.height=`${Math.min(e.target.scrollHeight,140)}px`},onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),e.currentTarget.form?.requestSubmit())}}),(0,v.jsx)(`button`,{type:`submit`,"aria-label":p?`Sending message`:`Send message`,disabled:!l.trim()||p,children:p?(0,v.jsx)(y,{variant:`inline`,message:``}):(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`send`})}),(0,v.jsx)(`small`,{children:p?`Sending…`:`Enter to send · Shift + Enter for a new line`})]})]})})]})}function $o(e){let t=(0,h.c)(2),{warning:n}=e,r=n===void 0?!1:n,i;return t[0]===r?i=t[1]:(i=(0,v.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,"aria-hidden":`true`,focusable:`false`,children:r?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`path`,{d:`M12 3 2 21h20L12 3Z`,strokeLinejoin:`round`}),(0,v.jsx)(`path`,{d:`M12 9v5m0 3v1`,strokeLinecap:`round`})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,v.jsx)(`path`,{d:`m8 12 3 3 5-6`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),t[0]=r,t[1]=i),i}function es(e,t){try{return window.sessionStorage.getItem(`unifast.profileWarning.${e}.${t}`)===`shown`}catch{return!1}}function ts(e){let t=(0,h.c)(30),{data:n,sessionToken:r,onComplete:i}=e,a=(0,m.useRef)(null),o,s;t[0]!==n.submission.schoolYear||t[1]!==r?(o=()=>{let e=a.current;e.showModal();try{window.sessionStorage.setItem(`unifast.profileWarning.${r}.${n.submission.schoolYear}`,`shown`)}catch{}let t=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{e.close(),document.body.style.overflow=t}},s=[r,n.submission.schoolYear],t[0]=n.submission.schoolYear,t[1]=r,t[2]=o,t[3]=s):(o=t[2],s=t[3]),(0,m.useEffect)(o,s);let c;t[4]===i?c=t[5]:(c=e=>{e.preventDefault(),i()},t[4]=i,t[5]=c);let l,u,d,f,p;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,v.jsx)(`span`,{className:`profile-warning-icon`,children:(0,v.jsx)($o,{warning:!0})}),u=(0,v.jsx)(`span`,{className:`profile-eyebrow`,children:`Your UniFAST profile`}),d=(0,v.jsx)(`h2`,{id:`profile-warning-title`,children:`Incomplete Student Information`}),f=(0,v.jsx)(`strong`,{children:`Kulang pa imong impormasyon!`}),p=(0,v.jsx)(`p`,{id:`profile-warning-description`,children:`Palihog kompletoha ang imong required student information aron ma-update ug ma-validate ang imong UniFAST profile.`}),t[6]=l,t[7]=u,t[8]=d,t[9]=f,t[10]=p):(l=t[6],u=t[7],d=t[8],f=t[9],p=t[10]);let g=`Profile completion ${n.percent}%`,_;t[11]!==n.percent||t[12]!==g?(_=(0,v.jsx)(`progress`,{max:`100`,value:n.percent,"aria-label":g}),t[11]=n.percent,t[12]=g,t[13]=_):_=t[13];let y;t[14]!==n.missing.length||t[15]!==n.percent?(y=(0,v.jsxs)(`p`,{className:`profile-progress-caption`,children:[n.percent,`% complete · Missing Information (`,n.missing.length,`)`]}),t[14]=n.missing.length,t[15]=n.percent,t[16]=y):y=t[16];let b;t[17]===n.missing?b=t[18]:(b=n.missing.map(ns),t[17]=n.missing,t[18]=b);let x;t[19]===b?x=t[20]:(x=(0,v.jsx)(`ul`,{children:b}),t[19]=b,t[20]=x);let S;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,v.jsx)(`span`,{"aria-hidden":`true`,children:`→`}),t[21]=S):S=t[21];let C;t[22]===i?C=t[23]:(C=(0,v.jsxs)(`button`,{type:`button`,className:`student-save-button`,onClick:i,children:[`Complete My Information `,S]}),t[22]=i,t[23]=C);let w;return t[24]!==_||t[25]!==y||t[26]!==x||t[27]!==C||t[28]!==c?(w=(0,v.jsxs)(`dialog`,{ref:a,className:`profile-warning`,"aria-labelledby":`profile-warning-title`,"aria-describedby":`profile-warning-description`,onCancel:c,children:[l,u,d,f,p,_,y,x,C]}),t[24]=_,t[25]=y,t[26]=x,t[27]=C,t[28]=c,t[29]=w):w=t[29],w}function ns(e){return(0,v.jsxs)(`li`,{children:[(0,v.jsx)($o,{warning:!0}),e.label]},e.key)}function rs(e){let t=(0,h.c)(18),{schoolYear:n,onClose:r}=e,i=(0,m.useRef)(null),a,o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=()=>{let e=i.current;e.showModal();let t=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{e.close(),document.body.style.overflow=t}},o=[],t[0]=a,t[1]=o):(a=t[0],o=t[1]),(0,m.useEffect)(a,o);let s;t[2]===r?s=t[3]:(s=e=>{e.preventDefault(),r()},t[2]=r,t[3]=s);let c;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,v.jsx)(`span`,{className:`profile-warning-icon`,children:(0,v.jsx)($o,{})}),t[4]=c):c=t[4];let l;t[5]===n?l=t[6]:(l=(0,v.jsxs)(`span`,{className:`profile-eyebrow`,children:[`School Year `,n]}),t[5]=n,t[6]=l);let u,d,f,p;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,v.jsx)(`h2`,{id:`profile-submitted-title`,children:`Student Information Submitted`}),d=(0,v.jsx)(`p`,{children:`Successfully submitted! Kumpleto na ang imong student information ug School ID upload.`}),f=(0,v.jsx)(`p`,{children:`Usa ra ka submission sa student information matag school year. Ma-edit balik sa bag-ong school year. Mahimo gihapon nimo ilisan ang School ID kung sayop ang na-upload.`}),p=(0,v.jsx)(`p`,{className:`profile-help`,children:`Ang Scholarship Office maoy mo-review sa imong submission.`}),t[7]=u,t[8]=d,t[9]=f,t[10]=p):(u=t[7],d=t[8],f=t[9],p=t[10]);let g;t[11]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,v.jsx)($o,{}),t[11]=g):g=t[11];let _;t[12]===r?_=t[13]:(_=(0,v.jsxs)(`button`,{type:`button`,className:`student-save-button`,onClick:r,children:[`Done `,g]}),t[12]=r,t[13]=_);let y;return t[14]!==_||t[15]!==s||t[16]!==l?(y=(0,v.jsxs)(`dialog`,{ref:i,className:`profile-warning profile-submitted`,"aria-labelledby":`profile-submitted-title`,onCancel:s,children:[c,l,u,d,f,p,_]}),t[14]=_,t[15]=s,t[16]=l,t[17]=y):y=t[17],y}function is({data:e,sessionToken:t,record:n,children:r}){let i=Pr($.studentProfile.save),[a,o]=(0,m.useState)({}),[s,c]=(0,m.useState)(null),[l,u]=(0,m.useState)(!1),[d,f]=(0,m.useState)(()=>!e.submission.locked&&e.missing.length>0&&!es(t,e.submission.schoolYear)),[p,h]=(0,m.useState)(!1),[g,_]=(0,m.useState)(``),[b,x]=(0,m.useState)(``),[S,C]=(0,m.useState)(null),w=(0,m.useRef)(null),T=(0,m.useRef)(null),E={...e.profile,...a},D=So(Co(E),{schoolIdUploaded:e.schoolIdUploaded}),O=l?D.errors:{},k=e.submission.locked||S===e.submission.schoolYear,A=k?`Submitted`:e.missing.length?`Incomplete`:e.needsOfficeReview?`Needs Review`:`Complete`;function j(e){let t=e[0]?.key,n=t===`schoolIdUpload`?document.getElementById(`file-front-control`):w.current?.elements.namedItem(t);n?.scrollIntoView({behavior:`smooth`,block:`center`}),n?.focus({preventScroll:!0})}function M(){f(!1),u(!0),requestAnimationFrame(()=>j(D.missing))}function N(t,n){s===null&&c(e.version),o(e=>({...e,[t]:n})),_(``),x(``)}async function P(n){if(n.preventDefault(),!(k||!e.submission.canSubmit)){if(u(!0),_(``),x(``),D.missing.length){j(D.missing);return}h(!0);try{let n=Object.fromEntries(Object.entries(Co(E)).filter(([e])=>e!==`studentId`)),r=await i({sessionToken:t,expectedVersion:s??e.version,schoolYear:e.submission.schoolYear,...n});o({}),c(null),_(`Successfully submitted! Kumpleto na ang imong student information ug School ID upload.`),C(r.schoolYear)}catch(e){x(G(e,`Dili ma-save karon. Palihog sulayi pag-usab.`,`student.ProfileCompletion`))}finally{h(!1)}}}let F=Object.fromEntries(vo),I=(e,t,n)=>(0,v.jsxs)(`div`,{className:`student-field`,children:[(0,v.jsx)(`label`,{htmlFor:`profile-${e}`,children:t}),(0,v.jsx)(`input`,{id:`profile-${e}`,value:n||``,readOnly:!0})]},e),L=(e,t={})=>(0,v.jsxs)(`div`,{className:`student-field ${e===`currentAddress`||e===`course`||e===`facebookProfileUrl`?`profile-field-wide`:``}`,children:[(0,v.jsxs)(`label`,{htmlFor:`profile-${e}`,children:[F[e]||(e===`middleInitial`?`Middle Name / Initial (optional)`:`Facebook Profile Link (optional)`),F[e]&&(0,v.jsx)(`span`,{"aria-hidden":`true`,children:` *`})]}),t.options?(0,v.jsxs)(`select`,{id:`profile-${e}`,name:e,value:E[e],required:!0,"aria-invalid":!!O[e],"aria-describedby":O[e]?`profile-${e}-error`:void 0,onChange:t=>N(e,[`sexCode`,`yearLevelCode`].includes(e)&&t.target.value!==``?Number(t.target.value):t.target.value),children:[(0,v.jsxs)(`option`,{value:``,children:[`Select `,F[e]]}),t.options.map(([e,t])=>(0,v.jsx)(`option`,{value:e,children:t},e)),E[e]!==``&&!t.options.some(([t])=>t===E[e])&&(0,v.jsxs)(`option`,{value:E[e],children:[`Previously recorded: `,E[e],` — please review`]})]}):e===`currentAddress`?(0,v.jsx)(`textarea`,{id:`profile-${e}`,name:e,value:E[e],rows:3,required:!0,maxLength:500,"aria-invalid":!!O[e],"aria-describedby":O[e]?`profile-${e}-error`:void 0,onChange:t=>N(e,t.target.value)}):(0,v.jsx)(`input`,{id:`profile-${e}`,name:e,value:E[e],required:!!F[e],maxLength:500,...t,"aria-invalid":!!O[e],"aria-describedby":O[e]?`profile-${e}-error`:e===`birthDate`?`profile-date-hint`:void 0,onChange:t=>N(e,t.target.value)}),e===`birthDate`&&(0,v.jsx)(`small`,{id:`profile-date-hint`,children:`MM/DD/YYYY · Use the calendar to select your birthdate.`}),O[e]&&(0,v.jsx)(`small`,{id:`profile-${e}-error`,className:`profile-field-error`,children:O[e]})]},e);return(0,v.jsxs)(`section`,{className:`profile-completion`,"aria-labelledby":`profile-completion-title`,children:[(0,v.jsxs)(`div`,{className:`profile-heading`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{className:`profile-eyebrow`,children:`Student Information`}),(0,v.jsx)(`h2`,{id:`profile-completion-title`,children:`Make your profile complete`})]}),(0,v.jsx)(`span`,{className:`profile-status ${e.missing.length?``:`profile-status-complete`}`,children:A})]}),(0,v.jsxs)(`div`,{className:`profile-progress-caption`,children:[(0,v.jsxs)(`strong`,{children:[`Profile Completion — `,e.percent,`%`]}),(0,v.jsxs)(`span`,{children:[vo.length-e.missing.length,` of `,vo.length,` required fields`]})]}),(0,v.jsx)(`progress`,{max:`100`,value:e.percent,"aria-label":`Saved profile completion ${e.percent}%`}),(0,v.jsx)(`p`,{className:`profile-help`,children:`Fields marked * are required. Profile completion is separate from Scholarship Office verification.`}),k&&(0,v.jsxs)(`p`,{className:`profile-office-note`,role:`status`,children:[`Submitted for School Year `,e.submission.lastSubmittedYear||S||e.submission.schoolYear,`. Ma-edit balik kung naa nay bag-ong school year sa imong student record.`]}),k&&(0,v.jsx)(`p`,{className:`profile-help`,children:`Abli gihapon ang School ID upload. Pwede nimo ilisan ang file kung sayop ang na-upload.`}),!e.submission.canSubmit&&!k&&(0,v.jsx)(`p`,{className:`profile-office-note`,children:`Palihog kontaka ang Scholarship Office aron ma-assign ang imong active school year.`}),e.needsOfficeReview&&(0,v.jsx)(`p`,{className:`profile-office-note`,children:`Needs Review: Palihog kontaka ang Scholarship Office aron ma-check ang imong grantee record o TES Award Number. Mahimo gihapon nimo ma-save ang imong impormasyon.`}),(0,v.jsxs)(`form`,{ref:w,className:`profile-grid`,noValidate:!0,onSubmit:P,children:[(0,v.jsxs)(`fieldset`,{disabled:p||k||!e.submission.canSubmit,children:[(0,v.jsx)(`legend`,{className:`profile-sr-only`,children:`Required student information`}),(0,v.jsxs)(`div`,{className:`profile-record-fields profile-field-wide`,children:[I(`tesAwardNumber`,`TES Award No.`,n?.tesAwardNumber),L(`studentId`,{readOnly:!0}),I(`batchId`,`Batch No.`,n?.batchId),(0,v.jsxs)(`div`,{className:`profile-record-status`,children:[I(`recordStatus`,`Status`,n?.status),I(`semester`,`Semester`,n?.semester),I(`schoolYear`,`School Year`,n?.schoolYear)]}),L(`lastName`,{readOnly:!0,autoComplete:`family-name`}),L(`firstName`,{readOnly:!0,autoComplete:`given-name`}),L(`middleInitial`,{readOnly:!0,autoComplete:`additional-name`})]}),[`lastName`,`firstName`].some(e=>!E[e])&&(0,v.jsx)(`p`,{className:`profile-office-note profile-field-wide`,children:`Palihog kontaka ang Scholarship Office aron makompleto ang imong opisyal nga ngalan.`}),L(`course`,{options:_o.map(e=>[e,e])}),L(`yearLevelCode`,{options:[1,2,3,4,5].map(e=>[e,String(e)])}),L(`sexCode`,{options:[[0,`Male`],[1,`Female`]]}),L(`birthDate`,{type:`date`,lang:`en-US`,max:yo(),autoComplete:`bday`}),L(`zipCode`,{inputMode:`numeric`,pattern:`[0-9]{4}`,maxLength:4,autoComplete:`postal-code`}),L(`emailAddress`,{type:`email`,autoComplete:`email`}),L(`phoneNumber`,{type:`tel`,autoComplete:`tel`}),L(`currentAddress`,{autoComplete:`street-address`}),L(`facebookProfileUrl`,{type:`url`})]}),(0,v.jsxs)(`div`,{className:`profile-field-wide${O.schoolIdUpload?` profile-upload-error`:``}`,children:[r,O.schoolIdUpload&&(0,v.jsx)(`p`,{className:`profile-field-error`,role:`alert`,children:`Required — Palihog i-upload ug i-save ang imong School ID para niini nga school year.`})]}),(0,v.jsx)(`p`,{className:`profile-help profile-field-wide`,children:`This contact email is used for your student profile. Your login email stays unchanged.`}),b&&(0,v.jsx)(`p`,{className:`profile-field-error profile-field-wide`,role:`alert`,children:b}),g&&(0,v.jsx)(`p`,{className:`profile-success profile-field-wide`,role:`status`,children:g}),(0,v.jsxs)(`button`,{ref:T,className:`student-save-button profile-field-wide`,type:`submit`,disabled:p||k||!e.submission.canSubmit,children:[k?`Submitted for ${e.submission.schoolYear}`:p?(0,v.jsx)(y,{variant:`inline`,message:`Submitting student information…`}):`Save Student Information`,(0,v.jsx)($o,{})]})]}),d&&(0,v.jsx)(ts,{data:e,sessionToken:t,onComplete:M}),S&&(0,v.jsx)(rs,{schoolYear:S,onClose:()=>{C(null),requestAnimationFrame(()=>T.current?.focus())}})]})}var as=`https://ideal-crane-292.convex.site`.replace(/\/+$/,``),os={tesAwardNo:``,studentId:``,batchNo:``,status:``,semester:``,schoolYear:``};function ss({url:e}){let t=(0,m.useRef)(null),[n,r]=(0,m.useState)(0),[i,a]=(0,m.useState)(``),[o,s]=(0,m.useState)(!0),[c,l]=(0,m.useState)(0);return(0,m.useEffect)(()=>{let e=t.current;if(!e)return;let n=()=>r(Math.floor(e.clientWidth));if(n(),typeof ResizeObserver>`u`)return window.addEventListener(`resize`,n),()=>window.removeEventListener(`resize`,n);let i=new ResizeObserver(n);return i.observe(e),()=>i.disconnect()},[]),(0,m.useEffect)(()=>{let r=t.current;if(!r||!e||!n)return;let i=!1,o,c;return(async()=>{a(``),s(!0),r.replaceChildren(),r.setAttribute(`aria-busy`,`true`);try{let[{getDocument:t,GlobalWorkerOptions:a},{default:s}]=await Promise.all([qr(()=>import(`./pdf-DoroOOrP.js`),[]),qr(()=>import(`./pdf.worker.min-D7EoebCV.js`),[])]);if(i)return;a.workerSrc=s;let l=await fetch(e,{mode:`cors`});if(!l.ok)throw Error(`Unable to download PDF (${l.status}).`);let u=new Uint8Array(await l.arrayBuffer());if(i)return;if(!u.length)throw Error(`The uploaded PDF is empty.`);o=t({data:u,disableAutoFetch:!0,disableRange:!0,disableStream:!0});let d=await o.promise;for(let e=1;e<=d.numPages;e+=1){if(i)return;let t=await d.getPage(e),a=n/t.getViewport({scale:1}).width,o=t.getViewport({scale:a}),s=Math.min(window.devicePixelRatio||1,2),l=document.createElement(`canvas`);l.className=`student-id-preview__page`,l.setAttribute(`aria-label`,`Uploaded School ID page ${e}`),l.width=Math.floor(o.width*s),l.height=Math.floor(o.height*s),l.style.width=`${Math.floor(o.width)}px`,l.style.height=`${Math.floor(o.height)}px`,r.appendChild(l),c=t.render({canvas:l,transform:s===1?null:[s,0,0,s,0,0],viewport:o}),await c.promise}}catch(e){!i&&e?.name!==`RenderingCancelledException`&&(B(e,`student.preview`),r.replaceChildren(),a(`Preview unavailable, but your file was uploaded successfully.`))}finally{i||(r.removeAttribute(`aria-busy`),s(!1))}})(),()=>{i=!0,c?.cancel(),o?.destroy()}},[n,c,e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`student-id-preview__pages${i?` student-id-preview__pages--error`:``}`,ref:t}),o&&(0,v.jsx)(y,{variant:`compact`,message:`Preparing School ID preview…`}),i&&(0,v.jsxs)(`div`,{className:`student-id-preview__error`,children:[(0,v.jsx)(`span`,{className:`student-id-preview__status-icon`,"aria-hidden":`true`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`check_circle`})}),(0,v.jsxs)(`div`,{className:`student-id-preview__error-copy`,children:[(0,v.jsx)(`strong`,{children:`School ID file is uploaded`}),(0,v.jsx)(`span`,{children:i})]}),(0,v.jsxs)(`div`,{className:`student-id-preview__error-actions`,children:[(0,v.jsx)(`a`,{href:e,rel:`noreferrer`,target:`_blank`,children:`Open file`}),(0,v.jsx)(`button`,{onClick:()=>l(e=>e+1),type:`button`,children:`Retry preview`})]})]})]})}function cs({studentSession:e,onLogout:t}){let n=String(e?.schoolId??``).trim(),r=Mr($.studentProfile.get,e?.sessionToken?{sessionToken:e.sessionToken}:`skip`),i=r?.records,a=Pr($.allinfo.saveStudentIdUploads),[o,s]=(0,m.useState)(null),[c,l]=(0,m.useState)(``),[u,d]=(0,m.useState)(``),[f,p]=(0,m.useState)(!1),[h,g]=(0,m.useState)(void 0),_=(0,m.useRef)(null),b=Pr($.support.logout),x=n.toLowerCase(),S=(0,m.useMemo)(()=>!x||!i?null:bo(i.filter(e=>String(e.studentId??``).trim().toLowerCase()===x))??null,[i,x]),C=S?{tesAwardNo:S.tesAwardNumber??``,studentId:S.studentId??``,lastName:S.lastName??``,firstName:S.firstName??``,middleInitial:S.middleInitial??``,batchNo:S.batchId??``,status:S.status??``,semester:S.semester??``,schoolYear:S.schoolYear??``}:os,w=i===void 0,T=!!x,E=!w&&T&&!S,D=!!(S?.frontIdUrl||S?.frontIdStorageId),O=S?.frontIdUrl??``;(0,m.useEffect)(()=>{if(!u)return;let e=e=>{e.key===`Escape`&&d(``)},t=document.body.style.overflow;return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),_.current?.focus(),()=>{document.body.style.overflow=t,window.removeEventListener(`keydown`,e)}},[u]);let k=async()=>{try{e?.sessionToken&&await b({sessionToken:e.sessionToken})}catch{}finally{typeof t==`function`&&t()}},A=e=>t=>{let n=t.target.files?.[0]??null;if(l(``),d(``),n&&n.type!==`application/pdf`&&!/\.pdf$/i.test(n.name)){l(`Only PDF files are allowed.`),t.target.value=``,e(null);return}if(n&&n.size>5*1024*1024){l(`Each file must be 5MB or smaller.`),t.target.value=``,e(null);return}e(n)},j=async t=>{let n=[S.lastName,S.firstName,S.middleInitial].filter(Boolean).join(` `),r=new URLSearchParams({batchNo:S.batchId||`no-batch`,documentType:`School-ID`,fileName:t.name,fullName:n,schoolYear:S.schoolYear||`unknown-school-year`,studentId:S.studentId}),i;try{i=await qo(`${as}/google-drive/student-upload?${r.toString()}`,t,{onProgress:g,headers:{"Content-Type":t.type||`application/pdf`,Authorization:`Bearer ${e.sessionToken}`}})}catch(e){throw Error(G(e,`Unable to upload your School ID. Please check your connection and try again.`,`student.student`),{cause:e})}if(!i.ok){let e=await i.json().catch(()=>null);throw Error(e?.message||`Unable to upload ${t.name} to Google Drive.`)}let{fileUrl:a}=await i.json();if(!a)throw Error(`Google Drive did not return a file link for ${t.name}.`);return a},M=(0,v.jsxs)(`section`,{className:`student-upload-section`,"aria-labelledby":`student-upload-title`,children:[(0,v.jsxs)(`div`,{className:`student-upload-copy`,children:[(0,v.jsx)(`h3`,{id:`student-upload-title`,children:`Upload colored copy of School ID with 3 signatures and Batch No.`}),(0,v.jsxs)(`p`,{children:[`Files will be saved to your `,C.schoolYear||`current`,` allinfo record. If you have records from other years, the portal automatically uses the current or latest School Year.`]})]}),(0,v.jsxs)(`aside`,{className:`student-sample-card`,"aria-label":`Sample School ID upload format`,children:[(0,v.jsxs)(`div`,{className:`student-sample-card__header`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{className:`student-sample-card__eyebrow`,children:`Sample Format`}),(0,v.jsx)(`h4`,{children:`Scan layout guide`})]}),(0,v.jsx)(`span`,{className:`student-sample-card__badge`,children:`Required`})]}),(0,v.jsxs)(`div`,{className:`student-sample-card__body`,children:[(0,v.jsx)(`a`,{className:`student-sample-card__image-link`,href:Jo,rel:`noreferrer`,target:`_blank`,title:`Open sample format`,children:(0,v.jsx)(`img`,{alt:`Sample scan format showing front and back School ID, three signatures, and Batch No.`,src:Jo})}),(0,v.jsxs)(`div`,{className:`student-sample-card__checklist`,children:[(0,v.jsx)(`p`,{children:`Before converting to PDF, make sure your scan includes:`}),(0,v.jsxs)(`ul`,{children:[(0,v.jsx)(`li`,{children:`Colored front and back copy of your School ID`}),(0,v.jsx)(`li`,{children:`Three clear signatures below the ID copies`}),(0,v.jsx)(`li`,{children:`Readable Batch No. written on the same page`})]}),(0,v.jsx)(`span`,{children:`Upload the final file as PDF only, maximum 5MB.`})]})]})]}),(0,v.jsxs)(`div`,{className:`student-upload-field`,children:[(0,v.jsx)(`span`,{className:`student-upload-label`,children:`Upload File`}),(0,v.jsxs)(`label`,{id:`file-front-control`,role:`button`,tabIndex:r?.submission.canUploadId&&!f?0:-1,"aria-disabled":!r?.submission.canUploadId||f,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&r?.submission.canUploadId&&!f&&(e.preventDefault(),document.getElementById(`file-front`)?.click())},className:`student-upload-card${o||D?` student-upload-card--selected`:``}`,htmlFor:`file-front`,children:[(0,v.jsx)(`input`,{accept:`application/pdf,.pdf`,disabled:!S||f||!r?.submission.canUploadId,id:`file-front`,type:`file`,onChange:A(s)}),(0,v.jsx)(`span`,{className:`student-upload-icon`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`id_card`})}),(0,v.jsx)(`span`,{className:`student-upload-title`,children:o?.name||(D?`File already uploaded`:`Tap to upload File`)}),(0,v.jsx)(`span`,{className:`student-upload-note`,children:`PDF only up to 5MB`})]})]}),O&&(0,v.jsxs)(`div`,{className:`student-id-preview`,children:[(0,v.jsxs)(`div`,{className:`student-id-preview__header`,children:[(0,v.jsxs)(`div`,{className:`student-id-preview__title`,children:[(0,v.jsx)(`span`,{className:`student-id-preview__title-icon`,"aria-hidden":`true`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`task_alt`})}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{children:`Uploaded School ID`}),(0,v.jsx)(`small`,{children:`File received and ready for review`})]})]}),(0,v.jsx)(`a`,{href:O,rel:`noreferrer`,target:`_blank`,children:`View full file`})]}),(0,v.jsx)(ss,{url:O}),(0,v.jsx)(`noscript`,{children:(0,v.jsxs)(`a`,{className:`student-id-preview__file`,href:O,rel:`noreferrer`,target:`_blank`,children:[(0,v.jsx)(`span`,{className:`student-id-preview__file-icon`,"aria-hidden":`true`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`picture_as_pdf`})}),(0,v.jsx)(`span`,{children:`Open uploaded PDF`})]})})]}),c&&(0,v.jsx)(`p`,{className:`student-upload-message student-upload-message--error`,children:c}),(0,v.jsxs)(`button`,{className:`student-save-button`,disabled:!S||f||!r?.submission.canUploadId,onClick:async()=>{if(!r?.submission.canUploadId){l(`Palihog i-check ang imong login ug active school year para maka-upload sa School ID.`);return}if(l(``),d(``),!S){l(`No allinfo record is available for your Student ID.`);return}if(!o){l(`Choose a PDF file before saving.`);return}p(!0),g(void 0);try{let t=await j(o),n=await a({sessionToken:e.sessionToken,studentId:S.studentId,schoolYear:S.schoolYear,frontIdUrl:t});s(null),d(`ID file saved for School Year ${n.schoolYear||C.schoolYear}.`)}catch(e){l(G(e,`Unable to save uploaded files.`,`student.student`))}finally{p(!1)}},type:`button`,children:[(0,v.jsx)(`span`,{children:f?(0,v.jsx)(y,{variant:`inline`,message:h>=100?`Saving uploaded School ID…`:`Uploading School ID…`,progress:h}):`Save Uploaded ID`}),(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`check_circle`})]})]});return(0,v.jsxs)(`div`,{className:`student-page`,children:[(0,v.jsxs)(`header`,{className:`student-topbar`,children:[(0,v.jsx)(`button`,{"aria-label":`Log out and return to landing page`,className:`student-icon-button`,onClick:k,type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`arrow_back`})}),(0,v.jsx)(`h1`,{children:`Student Information`})]}),(0,v.jsxs)(`main`,{className:`student-main`,children:[(0,v.jsxs)(`section`,{className:`student-hero`,"aria-labelledby":`student-title`,children:[(0,v.jsx)(`div`,{className:`student-badge`,children:`Academic Year Update`}),(0,v.jsx)(`h2`,{id:`student-title`,children:`Unifast Portal`}),(0,v.jsx)(`p`,{children:`Please ensure all details match your official documents for successful validation.`})]}),T&&(0,v.jsx)(Qo,{studentSession:e}),!T&&(0,v.jsx)(`div`,{className:`student-state-box`,children:`Please sign in with a student account to view your grantee information.`}),w&&T&&(0,v.jsx)(y,{message:`Loading your grantee information…`}),E&&(0,v.jsxs)(`div`,{className:`student-state-box student-state-box--warning`,children:[`No allinfo record was found for Student ID `,e?.schoolId,`.`]}),r&&(0,v.jsx)(is,{data:r,sessionToken:e.sessionToken,record:S,children:M},`${e.sessionToken}:${r.submission.schoolYear}`)]}),u?(0,v.jsxs)(`div`,{"aria-describedby":`student-upload-success-description`,"aria-labelledby":`student-upload-success-title`,"aria-modal":`true`,className:`student-success-modal`,role:`dialog`,children:[(0,v.jsx)(`button`,{"aria-label":`Close upload success message`,className:`student-success-modal__backdrop`,onClick:()=>d(``),type:`button`}),(0,v.jsxs)(`section`,{className:`student-success-modal__card`,children:[(0,v.jsx)(`button`,{"aria-label":`Close`,className:`student-success-modal__close`,onClick:()=>d(``),type:`button`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,"aria-hidden":`true`,children:`close`})}),(0,v.jsx)(`div`,{className:`student-success-modal__icon`,"aria-hidden":`true`,children:(0,v.jsx)(`span`,{className:`material-symbols-outlined`,children:`check`})}),(0,v.jsx)(`span`,{className:`student-success-modal__eyebrow`,children:`Upload complete`}),(0,v.jsx)(`h2`,{id:`student-upload-success-title`,children:`School ID uploaded`}),(0,v.jsxs)(`p`,{id:`student-upload-success-description`,children:[u,` Your document is now available for review.`]}),(0,v.jsx)(`button`,{className:`student-success-modal__action`,onClick:()=>d(``),ref:_,type:`button`,children:`Done`})]})]}):null]})}var ls=class extends m.Component{state={hasError:!1};pending=null;static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){this.pending?.reject(e),this.pending=null,V(e,{operation:`application.render`,source:`application.render`,kind:`render`,canClose:!1,retry:()=>new Promise((e,t)=>{this.pending={resolve:e,reject:t},this.setState({hasError:!1})})})}componentDidUpdate(){!this.state.hasError&&this.pending&&(this.pending.resolve(),this.pending=null,H(`application.render`))}componentWillUnmount(){this.pending?.resolve(),H(`application.render`)}render(){return this.state.hasError?(0,v.jsx)(`main`,{className:`ibacmi-error-fallback`,children:(0,v.jsx)(`p`,{children:`This page could not be loaded. Please use the recovery options to try again.`})}):this.props.children}},us=`unifast.adminSession`,ds=`unifast.studentViewOpen`,fs=`unifast.studentSession`;function ps(){try{let e=window.localStorage.getItem(us),t=e?JSON.parse(e):null;return S(t,`admin`)?t:null}catch{return null}}function ms(){try{return window.localStorage.getItem(ds)===`true`}catch{return!1}}function hs(){try{let e=window.localStorage.getItem(fs),t=e?JSON.parse(e):null;return S(t,`student`)?t:null}catch{return null}}function gs(){let e=(0,h.c)(27),[t,n]=(0,m.useState)(ps),[r,i]=(0,m.useState)(hs),[a,o]=(0,m.useState)(_s),[s,c]=(0,m.useState)(!1),l;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(l=()=>{W();for(let e of[us,fs,ds])try{window.localStorage.removeItem(e)}catch{}n(null),i(null),o(!1),c(!0)},e[0]=l):l=e[0];let u=l,d;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(d=()=>{W(),c(!1),n(null)},e[1]=d):d=e[1];let f=d,p;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(p=()=>{W(),c(!1),i(null),o(!1)},e[2]=p):p=e[2];let g=p,_;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(_=e=>{if(c(!1),e?.role===`student`){n(null),i(e),o(!0);return}i(null),o(!1),n(e)},e[3]=_):_=e[3];let y=_,b;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(b=e=>{n(null),i(e??null),o(!0)},e[4]=b):b=e[4];let x=b,S;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(S=e=>{i(t=>({...t??{},...e??{}}))},e[5]=S):S=e[5];let C=S,w,T;e[6]===t?(w=e[7],T=e[8]):(w=()=>{if(!t)return;let e=window.location.href,n={...window.history.state??{},unifastAdminGuard:!0};window.history.pushState(n,``,e);let r=()=>{window.history.pushState(n,``,e)};return window.addEventListener(`popstate`,r),()=>window.removeEventListener(`popstate`,r)},T=[t],e[6]=t,e[7]=w,e[8]=T),(0,m.useEffect)(w,T);let E,D;e[9]===t?(E=e[10],D=e[11]):(E=()=>{try{if(t){window.localStorage.setItem(us,JSON.stringify(t)),window.localStorage.removeItem(ds),window.localStorage.removeItem(fs);return}window.localStorage.removeItem(us)}catch{}},D=[t],e[9]=t,e[10]=E,e[11]=D),(0,m.useEffect)(E,D);let O,k;e[12]!==a||e[13]!==r?(O=()=>{try{if(a){window.localStorage.setItem(ds,`true`),window.localStorage.removeItem(us),r&&window.localStorage.setItem(fs,JSON.stringify(r));return}window.localStorage.removeItem(ds),window.localStorage.removeItem(fs)}catch{}},k=[a,r],e[12]=a,e[13]=r,e[14]=O,e[15]=k):(O=e[14],k=e[15]),(0,m.useEffect)(O,k);let A=t||r,j;e[16]!==t||e[17]!==s||e[18]!==a||e[19]!==r?(j=t?(0,v.jsx)(Ja,{adminSession:t,onLogout:f}):a?(0,v.jsx)(cs,{studentSession:r,onLogout:g,onStudentSessionUpdate:C},r?.schoolId):(0,v.jsx)(Go,{initialSignIn:s,onAdminLoginSuccess:y,onStudentRegistrationSuccess:x},s?`sign-in`:`public`),e[16]=t,e[17]=s,e[18]=a,e[19]=r,e[20]=j):j=e[20];let M=j,N=A?.id||A?.schoolId||A?.role||`public`,P;e[21]!==M||e[22]!==N?(P=(0,v.jsx)(ls,{children:M},N),e[21]=M,e[22]=N,e[23]=P):P=e[23];let F;return e[24]!==A||e[25]!==P?(F=(0,v.jsx)(Dr,{session:A,onSignIn:u,children:P}),e[24]=A,e[25]=P,e[26]=F):F=e[26],F}function _s(){return ms()&&!!hs()?.sessionToken}var vs=`https://ideal-crane-292.convex.cloud`;function ys(){return(0,v.jsx)(k,{category:`service`,onRetry:()=>window.location.reload()})}var bs=(0,xr.createRoot)(document.getElementById(`root`),{onCaughtError:e=>B(e,`application.render`),onUncaughtError:e=>B(e,`application.startup`)}),xs=document.getElementById(`ibacmi-boot-loader`);xs&&(xs.classList.add(`is-ready`),xs.addEventListener(`transitionend`,()=>xs.remove(),{once:!0}),window.setTimeout(()=>xs.remove(),220)),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`${`/IBACMI-Scholarship-Office/`.replace(/\/+$/,``)}/sw.js`,{updateViaCache:`none`}).catch(e=>{B(e,`application.worker`)})});{let e;try{e=new nr(vs,{logger:!1})}catch(e){B(e,`application.configuration`)}bs.render(e?(0,v.jsx)(m.StrictMode,{children:(0,v.jsx)(ar,{client:e,children:(0,v.jsx)(gs,{})})}):ys())}export{c as i,qr as n,o as r,Li as t};