(this.webpackJsonp=this.webpackJsonp||[]).push([[10],{1206:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(24),o=a(42),s=a(319),i=a(123),c=a(96);t.a=function(e){var t=Object(o.a)().accent;return r.a.createElement(i.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:l.g.small}},r.a.createElement(c.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:l.d?24:18,paddingBottom:l.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(s.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:l.g.tiny}}))}},1209:function(e,t,a){"use strict";var n=a(20),r=a.n(n),l=a(0),o=a.n(l),s=a(50),i=a(4),c=a(42),u=a(22);t.a=function(e){var t=Object(c.a)().backgroundLight,n=Object(l.useState)(!1),d=r()(n,2),m=d[0],g=d[1],b=e.small?22:27,f=a(1234),p=a(1235),k=e.replaceWETH&&Object(u.k)(e.token)?p:{uri:e.token.logoURI};return o.a.createElement(i.a,{style:[{width:b,height:b,backgroundColor:e.disabled?t:"white",borderRadius:b/2},e.style]},o.a.createElement(s.a,{source:!e.token.logoURI||m?f:k,onError:function(){return g(!0)},style:{width:"100%",height:"100%",borderRadius:b/2,opacity:e.disabled?.5:1}}))}},1212:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),o=a(24),s=a(42);t.a=function(e){var t=Object(s.a)().border;return r.a.createElement(l.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?o.g.tiny:o.g.small,marginBottom:e.small?o.g.tiny:o.g.small+o.g.tiny}})}},1220:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),o=a(24),s=a(42),i=a(408),c=a(319),u=a(96);t.a=function(e){var t=Object(s.a)().textLight,a=(0,Object(i.a)().border)({color:e.color}),n=e.color||t;return r.a.createElement(l.a,{style:[e.clear?{}:a,e.style]},r.a.createElement(u.a,{note:!0,style:{color:n}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(c.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:n},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:o.g.tiny}}))}},1222:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(86),o=a(24);t.a=function(){return r.a.createElement(l.a,{size:"large",style:{marginVertical:o.g.large}})}},1225:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(24),o=a(96);t.a=function(e){return r.a.createElement(o.a,{medium:!0,caption:!0,disabled:e.disabled,style:{marginLeft:l.g.tiny}},e.token.symbol)}},1230:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(24),o=a(22),s=a(96);t.a=function(e){return r.a.createElement(s.a,{caption:l.d,disabled:e.disabled,style:e.style},Object(o.d)(e.amount||e.token.balance,e.token.decimals,8))}},1231:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(24),o=a(96);t.a=function(e){return r.a.createElement(o.a,{caption:!0,numberOfLines:1,ellipsizeMode:"tail",style:{marginLeft:l.g.small,width:180},disabled:e.disabled},l.d?e.token.name:e.token.symbol)}},1234:function(e,t,a){e.exports=a.p+"static/media/empty-token.e8aa64c5.png"},1235:function(e,t,a){e.exports=a.p+"static/media/ETH.ab794f02.png"},1237:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(22),o=a(96);t.a=function(e){return r.a.createElement(o.a,{note:!0,fontWeight:"light",disabled:e.disabled,style:e.style},Object(l.f)(e.token.priceUSD||0,4))}},1238:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(22),o=a(96);t.a=function(e){return r.a.createElement(o.a,{note:!0,fontWeight:"light",disabled:e.disabled,style:e.style},Object(l.f)(e.token.valueUSD||0,4))}},1389:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(239),o=a(11),s=a(53),i=a(4),c=a(100),u=a(32),d=a(415),m=a(1212),g=a(409),b=a(410),f=a(24),p=a(1220),k=function(){return r.a.createElement(i.a,{style:{marginVertical:f.g.tiny}},r.a.createElement(p.a,{text:"Please note, as part of SushiSwap's ongoing feature enhancements, this interface will be deprecated on Monday March 1, 2021. Please begin visiting https://www.sushiswap.fi",color:"orange"}))},E=a(123),y=a(1206),h=a(1222),v=a(96),x=a(411),O=a(1230),j=a(1209),w=a(1231),T=a(1237),S=a(1225),P=a(1238),L=a(412),I=a(55),B=a(42),z=a(2),W=a.n(z),D=a(20),C=a.n(D),H=a(121),U=a.n(H),A=a(139),R=a.n(A),V=a(156),M=a(22),q=a(320),Z=a(414),J=function(){var e=Object(n.useContext)(I.b),t=e.provider,a=e.signer,r=e.address,l=e.tokens,o=Object(n.useState)(),s=C()(o,2),i=s[0],c=s[1],u=Object(n.useState)(),d=C()(u,2),m=d[0],g=d[1],b=Object(n.useState)(!0),f=C()(b,2),p=f[0],k=f[1],E=Object(n.useState)(!0),y=C()(E,2),h=y[0],v=y[1],x=Object(Z.a)().getPair;return Object(n.useEffect)((function(){c(void 0),g(void 0),k(!0),v(!0)}),[r]),R()((function(){var e,n,r;return W.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=l.find((function(e){return Object(M.k)(e)})),!(t&&a&&e&&l&&l.length>0)){o.next=30;break}return k(!0),o.t0=V.a,o.t1=String,o.next=7,W.a.awrap(U.a.weth.price());case 7:return o.t2=o.sent,o.t3=(0,o.t1)(o.t2),n=o.t0.parse.call(o.t0,o.t3),o.t4=W.a,o.t5=q.b,o.next=14,W.a.awrap(a.getAddress());case 14:return o.t6=o.sent,o.t7=l,o.t8=t,o.t9=(0,o.t5)(o.t6,o.t7,o.t8),o.next=20,o.t4.awrap.call(o.t4,o.t9);case 20:return r=o.sent,o.prev=21,o.t10=c,o.next=25,W.a.awrap(Promise.all(r.map((function(a){return Object(q.a)(a,e,n,x,t)}))));case 25:o.t11=o.sent,(0,o.t10)(o.t11);case 27:return o.prev=27,k(!1),o.finish(27);case 30:case"end":return o.stop()}}),null,null,[[21,,27,30]],Promise)}),[x,t,a,l]),R()((function(){var e,n,r;return W.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=l.find((function(e){return Object(M.k)(e)})),!(t&&a&&e&&l&&l.length>0&&i)){o.next=30;break}return v(!0),o.t0=V.a,o.t1=String,o.next=7,W.a.awrap(U.a.weth.price());case 7:return o.t2=o.sent,o.t3=(0,o.t1)(o.t2),n=o.t0.parse.call(o.t0,o.t3),o.t4=W.a,o.t5=q.d,o.next=14,W.a.awrap(a.getAddress());case 14:return o.t6=o.sent,o.t7=l,o.t8=t,o.t9=(0,o.t5)(o.t6,o.t7,o.t8),o.next=20,o.t4.awrap.call(o.t4,o.t9);case 20:return r=o.sent,o.prev=21,o.t10=g,o.next=25,W.a.awrap(Promise.all(r.map((function(a){return Object(q.a)(a,e,n,x,t)}))));case 25:o.t11=o.sent,(0,o.t10)(o.t11);case 27:return o.prev=27,v(!1),o.finish(27);case 30:case"end":return o.stop()}}),null,null,[[21,,27,30]],Promise)}),[x,t,a,l,i]),{loadingLPTokens:p,loadingPools:h,tokens:l,lpTokens:i,pools:m}},F=a(417),_=a(63),G=a(413),K=function(e){var t=e.state;return r.a.createElement(i.a,{style:{marginTop:f.d?f.g.large:f.g.normal}},r.a.createElement(N,{state:t}),r.a.createElement(i.a,{style:{height:f.g.large}}),r.a.createElement(Q,{state:t}),r.a.createElement(i.a,{style:{height:f.g.large}}),r.a.createElement(X,{state:t}))},N=function(e){e.state;var t=Object(_.a)(),a=Object(n.useContext)(I.b),l=a.loadingTokens,o=a.tokens,s=Object(F.a)("/swap","Swap");return r.a.createElement(i.a,null,r.a.createElement(y.a,{text:t("tokens"),buttonText:t("manage"),onPressButton:s}),r.a.createElement(Y,{loading:l,tokens:o,TokenItem:ee}))},Q=function(e){var t=e.state,a=Object(_.a)(),n=Object(F.a)("/liquidity/remove","RemoveLiquidity");return r.a.createElement(i.a,null,r.a.createElement(y.a,{text:a("liquidity"),buttonText:a("manage"),onPressButton:n}),r.a.createElement(Y,{loading:t.loadingLPTokens,tokens:t.lpTokens,TokenItem:te}))},X=function(e){var t=e.state,a=Object(_.a)(),n=Object(F.a)("/farming","Farming");return r.a.createElement(i.a,null,r.a.createElement(y.a,{text:a("farms"),buttonText:a("manage"),onPressButton:n}),r.a.createElement(Y,{loading:t.loadingPools,tokens:t.pools,TokenItem:te}))},Y=function(e){var t=Object(n.useCallback)((function(t){var a=t.item;return r.a.createElement(e.TokenItem,{key:a.address,token:a})}),[]),a=Object(n.useMemo)((function(){return(e.tokens||[]).filter((function(e){return!(e.amountDeposited?e.amountDeposited.isZero():e.balance.isZero())})).sort((function(e,t){return(t.valueUSD||0)-(e.valueUSD||0)}))}),[e.tokens]);return e.loading?r.a.createElement(h.a,null):0===a.length?r.a.createElement($,null):r.a.createElement(l.a,{keyExtractor:function(e){return e.address},data:a,renderItem:t,ItemSeparatorComponent:function(){return r.a.createElement(m.a,{small:!0})}})},$=function(){var e=Object(_.a)();return r.a.createElement(i.a,{style:{margin:f.g.normal}},r.a.createElement(v.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},e("you-dont-have-assets")))},ee=function(e){return r.a.createElement(E.a,{style:{alignItems:"center",paddingHorizontal:f.g.tiny,paddingVertical:4}},r.a.createElement(j.a,{token:e.token,disabled:e.disabled}),r.a.createElement(i.a,null,r.a.createElement(T.a,{token:e.token,disabled:e.disabled,style:{marginLeft:f.g.small}}),r.a.createElement(w.a,{token:e.token,disabled:e.disabled})),r.a.createElement(i.a,{style:{flex:1,alignItems:"flex-end"}},r.a.createElement(P.a,{token:e.token,disabled:e.disabled}),r.a.createElement(E.a,null,r.a.createElement(O.a,{token:e.token,disabled:e.disabled}),f.d&&r.a.createElement(S.a,{token:e.token,disabled:e.disabled}))),r.a.createElement(ae,{path:"/tokens/"+e.token.address}))},te=function(e){return r.a.createElement(E.a,{style:{alignItems:"center",paddingHorizontal:f.g.tiny,paddingVertical:4}},r.a.createElement(j.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),r.a.createElement(j.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),r.a.createElement(v.a,{medium:!0,caption:!0,style:{marginLeft:f.g.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),r.a.createElement(i.a,{style:{flex:1,alignItems:"flex-end"}},r.a.createElement(P.a,{token:e.token,disabled:e.disabled}),r.a.createElement(E.a,null,r.a.createElement(O.a,{token:e.token,amount:e.token.amountDeposited,disabled:e.disabled}))),r.a.createElement(ae,{path:"/pairs/"+e.token.address}))},ae=function(e){var t=e.path,a=Object(B.a)(),n=a.textDark,l=a.disabled,o=t.endsWith(u.ethers.constants.AddressZero);return r.a.createElement(s.a,{onPress:function(){return window.open("https://sushiswapanalytics.com/"+t.toLowerCase(),"_blank")},disabled:o},r.a.createElement(c.b,{type:"evilicon",name:"external-link",color:o?l:n,style:{marginLeft:f.g.tiny}}))},ne=function(e){return e?e.reduce((function(e,t){return e+(t.valueUSD||0)}),0):0};t.default=function(){var e=Object(_.a)(),t=J(),a=Object(n.useContext)(I.b).loadingTokens||t.loadingLPTokens||t.loadingPools,l=ne(t.tokens)+ne(t.lpTokens)+ne(t.pools);return r.a.createElement(G.a,null,r.a.createElement(g.a,null,r.a.createElement(d.a,null),r.a.createElement(b.a,{style:{paddingBottom:f.g.huge}},r.a.createElement(k,null),r.a.createElement(x.a,{text:e("total-value"),style:{flex:1,marginTop:f.g.normal}}),r.a.createElement(x.a,{text:a?e("fetching"):Object(M.f)(l,4),fontWeight:"light",disabled:a,style:{fontSize:f.d?32:24}}),r.a.createElement(K,{state:t})),"web"===o.a.OS&&r.a.createElement(L.a,null)))}}}]);
//# sourceMappingURL=10.1601881c.chunk.js.map