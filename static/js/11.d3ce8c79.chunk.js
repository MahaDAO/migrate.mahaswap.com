(this.webpackJsonp=this.webpackJsonp||[]).push([[11],{1210:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(24),c=n(42),s=n(63),l=n(96);t.a=function(e){var t=Object(s.a)(),n=Object(c.a)(),a=n.textDark,i=n.textLight,u=n.placeholder;return r.a.createElement(l.a,{style:{fontSize:o.d?28:20,marginBottom:o.g.normal,color:e.disabled?u:e.amount?a:i}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1211:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(63),c=n(319);t.a=function(e){var t=e.symbol,n=Object(o.a)();return r.a.createElement(c.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1218:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(20),c=n.n(o),s=n(0),l=n.n(s),i=n(4),u=n(24),m=n(55),d=n(63),f=n(319);t.a=function(e){var t,n=Object(d.a)(),a=Object(s.useContext)(m.b).approveToken,o=Object(s.useState)(!1),p=c()(o,2),b=p[0],k=p[1],y=Object(s.useCallback)((function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),k(!0),n.prev=3,n.next=6,r.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,k(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?l.a.createElement(i.a,null):l.a.createElement(f.a,{title:n("approve-",{symbol:(null==(t=e.token)?void 0:t.symbol)||""}),onPress:y,loading:b,containerStyle:{marginBottom:u.g.tiny}})}},1225:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(24),c=n(96);t.a=function(e){return r.a.createElement(c.a,{medium:!0,caption:!0,disabled:e.disabled,style:{marginLeft:o.g.tiny}},e.token.symbol)}},1226:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a),o=n(239),c=n(4),s=n(24),l=n(42),i=n(22),u=n(1214),m=n(1219),d=n(123),f=n(1207),p=n(1222),b=n(1208),k=n(1217),y=n(96),v=n(1209),O=function(e){var t=e.state,n=e.emptyText,c=e.Item,s=Object(a.useCallback)((function(e){var n=e.item;return r.a.createElement(c,{key:n.symbol,token:n,selected:!1,onSelectToken:t.setSelectedLPToken})}),[t.setSelectedLPToken]),l=t.lpTokens.sort((function(e,t){var n=e.multiplier||0,a=t.multiplier||0;return n===a?(t.apy||0)-(e.apy||0):a-n}));return t.loading?r.a.createElement(p.a,null):0===l.length?r.a.createElement(T,{text:n}):r.a.createElement(o.a,{keyExtractor:function(e){return e.symbol},data:l,renderItem:s})},T=function(e){var t=e.text;return r.a.createElement(c.a,{style:{margin:s.g.normal}},r.a.createElement(y.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},t))},g=function(e){var t=Object(l.a)().textMedium,n=Object(i.d)(e.token.balance,e.token.decimals,6),o=Object(a.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return r.a.createElement(b.a,{selected:e.selected,onPress:o,containerStyle:{marginBottom:f.a}},r.a.createElement(d.a,{style:{alignItems:"center"}},r.a.createElement(v.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),r.a.createElement(v.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),r.a.createElement(y.a,{medium:!0,caption:!0,style:{marginLeft:s.g.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),r.a.createElement(c.a,{style:{flex:1,marginLeft:s.g.tiny}},r.a.createElement(y.a,{caption:!0,light:!0,style:{textAlign:"right",color:t}},n)),e.selected?r.a.createElement(u.a,null):r.a.createElement(k.a,null)))};t.b=function(e){return r.a.createElement(c.a,{style:e.style},r.a.createElement(m.a,{title:e.title,expanded:!e.state.selectedLPToken,onExpand:function(){return e.state.setSelectedLPToken()}},r.a.createElement(O,{state:e.state,emptyText:e.emptyText,Item:e.Item})),e.state.selectedLPToken&&r.a.createElement(e.Item,{token:e.state.selectedLPToken,selected:!0,onSelectToken:function(){return e.state.setSelectedLPToken()}}))}},1228:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(2),c=n.n(o),s=n(20),l=n.n(s),i=n(0),u=n(139),m=n.n(u),d=n(55),f=n(320),p=n(1232),b=n(414),k=n(1233);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=!1;t.a=function(e){var t=Object(k.a)(),n=Object(i.useContext)(d.b),a=n.provider,r=n.address,o=n.tokens,s=Object(i.useState)(0),u=l()(s,2),y=u[0],T=u[1],g=Object(i.useState)(!0),j=l()(g,2),h=j[0],P=j[1],x=Object(i.useState)([]),E=l()(x,2),w=E[0],L=E[1],S=Object(i.useState)(),A=l()(S,2),C=A[0],I=A[1],D=Object(i.useState)(!1),B=l()(D,2),_=B[0],Z=B[1],q=Object(i.useState)(),R=l()(q,2),W=R[0],M=R[1],U=Object(i.useState)(""),F=l()(U,2),H=F[0],z=F[1],G=Object(b.a)().getPair,$=function(){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r&&a&&o.length>0)||O){n.next=11;break}return n.prev=1,O=!0,n.next=5,c.a.awrap("my-pools"===e?Object(f.d)(r,o,a):"pools"===e?Object(f.f)(r,o,a):"my-lp-tokens"===e?Object(f.b)(r,o,a):Object(f.e)(r,o,a));case 5:(t=n.sent)&&L(t);case 7:return n.prev=7,O=!1,P(!1),n.finish(7);case 11:case"end":return n.stop()}}),null,null,[[1,,7,11]],Promise)};return Object(i.useEffect)((function(){C||z("")}),[C]),m()((function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(!0),M(void 0),!C||!a){e.next=18;break}return e.prev=3,e.t0=M,e.next=7,c.a.awrap(G(C.tokenA,C.tokenB,a));case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 11:e.prev=11,e.t2=e.catch(3);case 13:return e.prev=13,P(!1),e.finish(13);case 16:e.next=19;break;case 18:P(!1);case 19:case"end":return e.stop()}}),null,null,[[3,11,13,16]],Promise)}),[C,a]),Object(p.a)((function(t){return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r||!("pools"===e||o.length>0)){n.next=4;break}return t||P(!0),n.next=4,c.a.awrap($());case 4:case"end":return n.stop()}}),null,null,null,Promise)}),(function(){return"updateLPTokens()"}),[o.length,r,y],0),v(v({},t),{},{fromToken:t.fromToken||(null==C?void 0:C.tokenA),toToken:t.toToken||(null==C?void 0:C.tokenB),updateLPTokens:$,loading:t.loading||h,lastTimeRefreshed:y,updateLastTimeRefreshed:function(){T(Date.now())},lpTokens:w,selectedLPToken:C,setSelectedLPToken:I,selectedLPTokenAllowed:_,setSelectedLPTokenAllowed:Z,pair:W,amount:H,setAmount:z})}},1239:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function c(e){try{l(a.next(e))}catch(t){o(t)}}function s(e){try{l(a.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.signERC2612Permit=t.signDaiPermit=void 0;const r=n(419),o=n(1240),c="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",s=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],l=e=>"".padEnd(e,"0"),i=(e,t)=>a(void 0,void 0,void 0,(function*(){return o.hexToUtf8((yield r.call(e,t,"0x06fdde03")).substr(130))})),u=(e,t)=>a(void 0,void 0,void 0,(function*(){if("string"!==typeof t)return t;const n=t,[a,o]=yield Promise.all([i(e,n),r.getChainId(e)]);return{name:a,version:"1",chainId:o,verifyingContract:n}}));t.signDaiPermit=(e,t,n,o,i,m)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,d={holder:n,spender:o,nonce:m||(yield r.call(e,a,`0x7ecebe00${l(24)}${n.substr(2)}`)),expiry:i||c,allowed:!0},f=((e,t)=>({types:{EIP712Domain:s,Permit:[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}]},primaryType:"Permit",domain:t,message:e}))(d,yield u(e,t)),p=yield r.signData(e,n,f);return Object.assign(Object.assign({},p),d)})),t.signERC2612Permit=(e,t,n,o,i=c,m,d)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,f={owner:n,spender:o,value:i,nonce:d||(yield r.call(e,a,`0x7ecebe00${l(24)}${n.substr(2)}`)),deadline:m||c},p=((e,t)=>({types:{EIP712Domain:s,Permit:[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}]},primaryType:"Permit",domain:t,message:e}))(f,yield u(e,t)),b=yield r.signData(e,n,p);return Object.assign(Object.assign({},b),f)}))},1240:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.hexToUtf8=void 0;const r=a(n(1241));t.hexToUtf8=function(e){let t="",n=0,a=(e=(e=(e=(e=(e=e.replace(/^0x/i,"")).replace(/^(?:00)*/,"")).split("").reverse().join("")).replace(/^(?:00)*/,"")).split("").reverse().join("")).length;for(let r=0;r<a;r+=2)n=parseInt(e.substr(r,2),16),t+=String.fromCharCode(n);return r.default.decode(t)}},1241:function(e,t,n){!function(e){var t,n,a,r=String.fromCharCode;function o(e){for(var t,n,a=[],r=0,o=e.length;r<o;)(t=e.charCodeAt(r++))>=55296&&t<=56319&&r<o?56320==(64512&(n=e.charCodeAt(r++)))?a.push(((1023&t)<<10)+(1023&n)+65536):(a.push(t),r--):a.push(t);return a}function c(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function s(e,t){return r(e>>t&63|128)}function l(e){if(0==(4294967168&e))return r(e);var t="";return 0==(4294965248&e)?t=r(e>>6&31|192):0==(4294901760&e)?(c(e),t=r(e>>12&15|224),t+=s(e,6)):0==(4292870144&e)&&(t=r(e>>18&7|240),t+=s(e,12),t+=s(e,6)),t+=r(63&e|128)}function i(){if(a>=n)throw Error("Invalid byte index");var e=255&t[a];if(a++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function u(){var e,r;if(a>n)throw Error("Invalid byte index");if(a==n)return!1;if(e=255&t[a],a++,0==(128&e))return e;if(192==(224&e)){if((r=(31&e)<<6|i())>=128)return r;throw Error("Invalid continuation byte")}if(224==(240&e)){if((r=(15&e)<<12|i()<<6|i())>=2048)return c(r),r;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=(7&e)<<18|i()<<12|i()<<6|i())>=65536&&r<=1114111)return r;throw Error("Invalid UTF-8 detected")}e.version="3.0.0",e.encode=function(e){for(var t=o(e),n=t.length,a=-1,r="";++a<n;)r+=l(t[a]);return r},e.decode=function(e){t=o(e),n=t.length,a=0;for(var c,s=[];!1!==(c=u());)s.push(c);return function(e){for(var t,n=e.length,a=-1,o="";++a<n;)(t=e[a])>65535&&(o+=r((t-=65536)>>>10&1023|55296),t=56320|1023&t),o+=r(t);return o}(s)}}(t)},1244:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(30),c=n.n(o),s=n(0),l=n(34),i=n(1239),u=n(32),m=n(60),d=n(55),f=n(22),p=n(97),b=n(414),k=n(418);t.a=function(){var e=Object(s.useContext)(d.b).ethereum,t=Object(b.a)(),n=t.getPair,a=t.getTrade,o=t.calculateAmountOfLPTokenMinted,y=Object(k.b)(),v=y.allowedSlippage,O=y.ttl,T=new l.g("3","100"),g=function(e,t,n,o,s){var i,u,d,p,b;return r.a.async((function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,r.a.awrap(a(e,t,n,o));case 2:if(u=k.sent){k.next=5;break}throw new Error("Cannot find trade");case 5:return d=l.h.swapCallParameters(u,{feeOnTransfer:!1,allowedSlippage:v,recipient:m.h,ttl:O}),p=Object(f.g)("IUniswapV2Router02",m.d,s),k.next=9,r.a.awrap((i=p.populateTransaction)[d.methodName].apply(i,c()(d.args).concat([{value:d.value}])));case 9:return b=k.sent,k.abrupt("return",b.data||"");case 11:case"end":return k.stop()}}),null,null,null,Promise)},j=Object(s.useCallback)((function(e,t,a,s,i){var d,b,k,y,v,O,j,h,P;return r.a.async((function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,r.a.awrap(n(e,t,s));case 2:return b=x.sent,k=new l.j(Object(f.b)(e),a.div(2).toString()),x.next=6,r.a.awrap(o(b,k,b.getOutputAmount(k)[0]));case 6:if(y=x.sent){x.next=9;break}throw new Error("Cannot calculate LP token amount");case 9:return v=Object(f.g)("ZapIn",m.h,i),x.t0=e.address,x.t1=b.liquidityToken.address,x.t2=a,x.t3=Object(f.c)(y,T),x.t4=m.d,x.t5=m.d,x.next=18,r.a.awrap(g(e,t,a.div(2),s,i));case 18:return x.t6=x.sent,O=[x.t0,x.t1,x.t2,x.t3,x.t4,x.t5,x.t6],j=Object(f.h)(e)?a:u.ethers.constants.Zero,x.next=23,r.a.awrap((d=v.estimateGas).ZapIn.apply(d,O.concat([{value:j}])));case 23:return h=x.sent,x.next=26,r.a.awrap(v.ZapIn.apply(v,O.concat([{value:j,gasLimit:h.mul(120).div(100)}])));case 26:return P=x.sent,x.abrupt("return",p.a.apply(void 0,[P,"ZapIn_General_V2.ZapIn()"].concat(c()(O.map((function(e){return e.toString()}))))));case 28:case"end":return x.stop()}}),null,null,null,Promise)}),[g]),h=function(e,t,o,c){var s,l,i,u,m,d;return r.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(e!==t.tokenA){p.next=5;break}s=t.tokenB,l=t.tokenA,p.next=11;break;case 5:if(e!==t.tokenB){p.next=10;break}s=t.tokenA,l=t.tokenB,p.next=11;break;case 10:throw new Error("Wrong outputToken");case 11:return p.next=13,r.a.awrap(n(s,l,c));case 13:return i=p.sent,u=Object(f.m)(i.reserveOf(Object(f.b)(s)),s.decimals),m=o.mul(u).div(t.totalSupply),p.next=18,r.a.awrap(a(s,l,m,c));case 18:if(d=p.sent){p.next=21;break}throw new Error("Cannot find trade");case 21:return p.abrupt("return",Object(f.m)(d.outputAmount));case 22:case"end":return p.stop()}}),null,null,null,Promise)};return{zapIn:j,zapOut:Object(s.useCallback)((function(t,n,a,o,s){var l,u,d,b,k,y,v;return r.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:return u=Object(f.g)("ZapOut",m.i,s),d=Math.floor((new Date).getTime()/1e3)+O,g.t0=r.a,g.t1=i.signERC2612Permit,g.t2=e,g.t3=t.address,g.next=8,r.a.awrap(s.getAddress());case 8:return g.t4=g.sent,g.t5=m.i,g.t6=a.toString(),g.t7=d,g.t8=(0,g.t1)(g.t2,g.t3,g.t4,g.t5,g.t6,g.t7),g.next=15,g.t0.awrap.call(g.t0,g.t8);case 15:return b=g.sent,g.t9=n.address,g.t10=t.address,g.t11=a,g.t12=f.c,g.next=22,r.a.awrap(h(n,t,a,o));case 22:return g.t13=g.sent,g.t14=T,g.t15=(0,g.t12)(g.t13,g.t14),g.t16=a,g.t17=d,g.t18=b.v,g.t19=b.r,g.t20=b.s,k=[g.t9,g.t10,g.t11,g.t15,g.t16,g.t17,g.t18,g.t19,g.t20],g.next=33,r.a.awrap((l=u.estimateGas).ZapOutWithPermit.apply(l,k));case 33:return y=g.sent,g.next=36,r.a.awrap(u.ZapOutWithPermit.apply(u,k.concat([{gasLimit:y.mul(120).div(100)}])));case 36:return v=g.sent,g.abrupt("return",p.a.apply(void 0,[v,"ZapOut_General_V1.ZapOutWithPermit()"].concat(c()(k.map((function(e){return e.toString()}))))));case 38:case"end":return g.stop()}}),null,null,null,Promise)}),[h]),getZapOutSwappedAmount:h}}},1392:function(e,t,n){"use strict";n.r(t),n.d(t,"LPTokenOutputItem",(function(){return te}));var a=n(20),r=n.n(a),o=n(0),c=n.n(o),s=n(11),l=n(4),i=n(139),u=n.n(i),m=n(1210),d=n(1218),f=n(415),p=n(1212),b=n(319),k=n(1213),y=n(1214),v=n(409),O=n(410),T=n(1215),g=n(1221),j=n(123),h=n(1206),P=n(1216),x=n(1211),E=n(1207),w=n(1226),L=n(1223),S=n(1208),A=n(1217),C=n(96),I=n(411),D=n(1224),B=n(1209),_=(n(1225),n(412)),Z=n(416),q=n(60),R=n(24),W=n(55),M=n(10),U=n.n(M),F=n(2),H=n.n(F),z=n(32),G=n(22),$=n(1228),N=n(418),V=n(1244);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){U()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(){var e=Object($.a)("my-lp-tokens"),t=Object(o.useContext)(W.b),n=t.provider,a=t.signer,c=t.getTokenAllowance,s=t.updateTokens,l=Object(N.b)(),i=l.removeLiquidity,m=l.removeLiquidityETH,d=Object(V.a)().zapOut,f=Object(o.useState)(!1),p=r()(f,2),b=p[0],k=p[1],y=Object(o.useState)(),v=r()(y,2),O=v[0],T=v[1],g=Object(o.useState)(!1),j=r()(g,2),h=j[0],P=j[1];u()((function(){var t,n;return H.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!a||!e.selectedLPToken){r.next=16;break}return e.setFromSymbol(e.selectedLPToken.tokenA.symbol),e.setToSymbol(e.selectedLPToken.tokenB.symbol),k(!0),e.setSelectedLPTokenAllowed(!1),r.prev=5,t=z.ethers.BigNumber.from(2).pow(96).sub(1),r.next=9,H.a.awrap(c(e.selectedLPToken.address,q.d));case 9:n=r.sent,e.setSelectedLPTokenAllowed(z.ethers.BigNumber.from(n).gte(t));case 11:return r.prev=11,k(!1),r.finish(11);case 14:r.next=18;break;case 16:e.setFromSymbol(""),e.setToSymbol("");case 18:case"end":return r.stop()}}),null,null,[[5,,11,14]],Promise)}),[a,e.selectedLPToken]),u()((function(){var t,n;return H.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.selectedLPToken&&e.selectedLPToken.totalSupply&&e.pair&&e.fromToken&&e.toToken&&e.pair.liquidityToken.address===e.selectedLPToken.address&&(t=Object(G.m)(e.pair.reserveOf(Object(G.b)(e.fromToken)),e.fromToken.decimals),n=Object(G.m)(e.pair.reserveOf(Object(G.b)(e.toToken)),e.toToken.decimals),e.setFromAmount(Object(G.d)(Object(G.l)(e.amount,e.selectedLPToken.decimals).mul(t).div(e.selectedLPToken.totalSupply).toString(),e.selectedLPToken.tokenA.decimals)),e.setToAmount(Object(G.d)(Object(G.l)(e.amount,e.selectedLPToken.decimals).mul(n).div(e.selectedLPToken.totalSupply).toString(),e.selectedLPToken.tokenB.decimals)));case 1:case"end":return a.stop()}}),null,null,null,Promise)}),[e.selectedLPToken,e.amount,e.pair,e.fromToken,e.toToken,a]);var x=function(){var t,n,r,o,c,s,l,u;return H.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(!e.selectedLPToken||!a){d.next=20;break}if(t=Object(G.l)(e.fromAmount,e.fromToken.decimals),n=Object(G.l)(e.toAmount,e.toToken.decimals),r=Object(G.l)(e.amount,e.selectedLPToken.decimals),!Object(G.k)(e.fromToken)&&!Object(G.k)(e.toToken)){d.next=15;break}return o=Object(G.k)(e.fromToken)?e.toToken:e.fromToken,c=Object(G.k)(e.fromToken)?n:t,s=Object(G.k)(e.fromToken)?t:n,d.next=10,H.a.awrap(m(o,r,c,s,a));case 10:return l=d.sent,d.next=13,H.a.awrap(l.wait());case 13:d.next=20;break;case 15:return d.next=17,H.a.awrap(i(e.fromToken,e.toToken,r,t,n,a));case 17:return u=d.sent,d.next=20,H.a.awrap(u.wait());case 20:case"end":return d.stop()}}),null,null,null,Promise)},E=Object(o.useCallback)((function(){return H.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.fromAmount&&e.toAmount&&e.selectedLPToken&&e.amount&&n&&a)){t.next=13;break}return P(!0),t.prev=2,t.next=5,H.a.awrap(x());case 5:return t.next=7,H.a.awrap(s());case 7:return t.next=9,H.a.awrap(e.updateLPTokens());case 9:e.setSelectedLPToken(void 0);case 10:return t.prev=10,P(!1),t.finish(10);case 13:case"end":return t.stop()}}),null,null,[[2,,10,13]],Promise)}),[e.fromAmount,e.toAmount,e.selectedLPToken,e.amount,e.updateLPTokens,x,d,s,n,a]);return K(K({},e),{},{loading:e.loading||b,outputToken:O,setOutputToken:T,onRemove:E,removing:h})},X=n(63),Y=n(413),ee=function(){var e=Object(o.useContext)(W.b).chainId,t=Object(X.a)(),n=Q();return 1!==e?c.a.createElement(k.a,null):c.a.createElement(l.a,{style:{marginTop:R.g.large}},c.a.createElement(w.b,{state:n,title:t("your-liquidity"),emptyText:t("you-dont-have-liquidity"),Item:w.a}),c.a.createElement(p.a,null),c.a.createElement(ne,{state:n}),c.a.createElement(ae,{state:n}))},te=function(e){return e.hidden?c.a.createElement(l.a,null):c.a.createElement(S.a,{selected:e.selected,onPress:e.onSelectToken,containerStyle:{marginBottom:E.a}},c.a.createElement(j.a,{style:{alignItems:"center"}},c.a.createElement(B.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),c.a.createElement(B.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),c.a.createElement(C.a,{medium:!0,caption:!0,style:{marginLeft:R.g.tiny}},e.token.tokenA.symbol," + ",e.token.tokenB.symbol),c.a.createElement(l.a,{style:{flex:1}}),e.selected?c.a.createElement(y.a,null):c.a.createElement(A.a,null)))},ne=function(e){var t=e.state,n=Object(X.a)();return t.selectedLPToken?c.a.createElement(D.a,{title:n("amount-of-tokens"),token:t.selectedLPToken,amount:t.amount,onAmountChanged:t.setAmount}):c.a.createElement(h.a,{text:n("amount-of-tokens"),disabled:!0})},ae=function(e){var t,n=e.state,a=Object(X.a)(),r=!n.selectedLPToken||!n.fromToken||!n.toToken,s=Object(o.useMemo)((function(){if(n.fromToken&&n.outputToken===n.fromToken){var e=Object(G.l)(n.fromAmount,n.fromToken.decimals);return Object(G.d)(e.add(Object(G.c)(e,N.a)),n.fromToken.decimals)}if(n.toToken&&n.outputToken===n.toToken){var t=Object(G.l)(n.toAmount,n.toToken.decimals);return Object(G.d)(t.add(Object(G.c)(t,N.a)),n.toToken.decimals)}}),[n.outputToken,n.fromToken,n.toToken,n.fromAmount,n.toAmount]);return c.a.createElement(P.a,null,(n.outputToken===n.fromToken||n.outputToken===n.toToken)&&c.a.createElement(m.a,{amount:s,suffix:null==(t=n.outputToken)?void 0:t.symbol,disabled:r}),c.a.createElement(L.a,{label:n.fromToken?n.fromToken.symbol:a("1st-token"),text:n.fromAmount,disabled:r}),c.a.createElement(L.a,{label:n.toToken?n.toToken.symbol:a("2nd-token"),text:n.toAmount,disabled:r}),c.a.createElement(re,{state:n}))},re=function(e){var t=e.state,n=Object(o.useState)({}),a=r()(n,2),s=a[0],i=a[1];u()((function(){return i({})}),[t.fromSymbol,t.toSymbol,t.fromAmount]);var m=!t.selectedLPTokenAllowed,f=m||Object(G.j)(t.amount);return c.a.createElement(l.a,{style:{marginTop:R.g.normal}},!t.selectedLPToken||Object(G.j)(t.amount)?c.a.createElement(oe,{state:t,onError:i,disabled:!0}):Object(G.l)(t.amount,t.selectedLPToken.decimals).gt(t.selectedLPToken.balance)?c.a.createElement(x.a,{symbol:t.selectedLPToken.symbol}):t.loading||!t.pair?c.a.createElement(g.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{token:t.selectedLPToken,spender:q.d,onSuccess:function(){return t.setSelectedLPTokenAllowed(!0)},onError:i,hidden:!m}),c.a.createElement(oe,{state:t,onError:i,disabled:f})),s.message&&4001!==s.code&&c.a.createElement(T.a,{error:s}))},oe=function(e){var t=e.state,n=e.onError,a=e.disabled,r=Object(X.a)(),s=Object(o.useCallback)((function(){n({}),t.onRemove().catch(n)}),[t.onRemove,n]);return c.a.createElement(b.a,{title:r("remove-liquidity"),disabled:a,loading:t.removing,onPress:s})};t.default=function(){var e=Object(X.a)();return c.a.createElement(Y.a,null,c.a.createElement(v.a,null,c.a.createElement(f.a,null),c.a.createElement(O.a,null,c.a.createElement(I.a,{text:e("remove-liquidity")}),c.a.createElement(C.a,{light:!0},e("remove-liquidity-desc")),c.a.createElement(ee,null)),"web"===s.a.OS&&c.a.createElement(_.a,null)),c.a.createElement(Z.b,null))}}}]);
//# sourceMappingURL=11.d3ce8c79.chunk.js.map