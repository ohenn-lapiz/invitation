import{r as je,R as Ui,w as Xo,T as Jo}from"./vendor-react-7YxsCXYx.js";var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ud(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Zo(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),n}var _n={exports:{}},mn={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi;function ea(){return Hi||(Hi=1,function(t){function e(_,E){var C=_.length;_.push(E);e:for(;0<C;){var W=C-1>>>1,U=_[W];if(0<s(U,E))_[W]=E,_[C]=U,C=W;else break e}}function n(_){return _.length===0?null:_[0]}function i(_){if(_.length===0)return null;var E=_[0],C=_.pop();if(C!==E){_[0]=C;e:for(var W=0,U=_.length,xe=U>>>1;W<xe;){var ve=2*(W+1)-1,ot=_[ve],le=ve+1,B=_[le];if(0>s(ot,C))le<U&&0>s(B,ot)?(_[W]=B,_[le]=C,W=le):(_[W]=ot,_[ve]=C,W=ve);else if(le<U&&0>s(B,C))_[W]=B,_[le]=C,W=le;else break e}}return E}function s(_,E){var C=_.sortIndex-E.sortIndex;return C!==0?C:_.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],l=[],h=1,u=null,d=3,g=!1,p=!1,m=!1,y=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(_){for(var E=n(l);E!==null;){if(E.callback===null)i(l);else if(E.startTime<=_)i(l),E.sortIndex=E.expirationTime,e(c,E);else break;E=n(l)}}function $(_){if(m=!1,F(_),!p)if(n(c)!==null)p=!0,ye(v);else{var E=n(l);E!==null&&De($,E.startTime-_)}}function v(_,E){p=!1,m&&(m=!1,w(J),J=-1),g=!0;var C=d;try{for(F(E),u=n(c);u!==null&&(!(u.expirationTime>E)||_&&!ee());){var W=u.callback;if(typeof W=="function"){u.callback=null,d=u.priorityLevel;var U=W(u.expirationTime<=E);E=t.unstable_now(),typeof U=="function"?u.callback=U:u===n(c)&&i(c),F(E)}else i(c);u=n(c)}if(u!==null)var xe=!0;else{var ve=n(l);ve!==null&&De($,ve.startTime-E),xe=!1}return xe}finally{u=null,d=C,g=!1}}var S=!1,b=null,J=-1,de=5,oe=-1;function ee(){return!(t.unstable_now()-oe<de)}function Z(){if(b!==null){var _=t.unstable_now();oe=_;var E=!0;try{E=b(!0,_)}finally{E?se():(S=!1,b=null)}}else S=!1}var se;if(typeof A=="function")se=function(){A(Z)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Dt=Te.port2;Te.port1.onmessage=Z,se=function(){Dt.postMessage(null)}}else se=function(){y(Z,0)};function ye(_){b=_,S||(S=!0,se())}function De(_,E){J=y(function(){_(t.unstable_now())},E)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(_){_.callback=null},t.unstable_continueExecution=function(){p||g||(p=!0,ye(v))},t.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<_?Math.floor(1e3/_):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(_){switch(d){case 1:case 2:case 3:var E=3;break;default:E=d}var C=d;d=E;try{return _()}finally{d=C}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(_,E){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var C=d;d=_;try{return E()}finally{d=C}},t.unstable_scheduleCallback=function(_,E,C){var W=t.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?W+C:W):C=W,_){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=C+U,_={id:h++,callback:E,priorityLevel:_,startTime:C,expirationTime:U,sortIndex:-1},C>W?(_.sortIndex=C,e(l,_),n(c)===null&&_===n(l)&&(m?(w(J),J=-1):m=!0,De($,C-W))):(_.sortIndex=U,e(c,_),p||g||(p=!0,ye(v))),_},t.unstable_shouldYield=ee,t.unstable_wrapCallback=function(_){var E=d;return function(){var C=d;d=E;try{return _.apply(this,arguments)}finally{d=C}}}}(mn)),mn}var $i;function Hd(){return $i||($i=1,_n.exports=ea()),_n.exports}function Wn(){return Wn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Wn.apply(null,arguments)}function ta(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function na(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var ia=function(){function t(n){var i=this;this._insertTag=function(s){var r;i.tags.length===0?i.insertionPoint?r=i.insertionPoint.nextSibling:i.prepend?r=i.container.firstChild:r=i.before:r=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,r),i.tags.push(s)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(na(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var r=ta(s);try{r.insertRule(i,r.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var s;return(s=i.parentNode)==null?void 0:s.removeChild(i)}),this.tags=[],this.ctr=0},t}(),Y="-ms-",Ht="-moz-",N="-webkit-",tr="comm",li="rule",ui="decl",sa="@import",nr="@keyframes",ra="@layer",oa=Math.abs,nn=String.fromCharCode,aa=Object.assign;function ca(t,e){return V(t,0)^45?(((e<<2^V(t,0))<<2^V(t,1))<<2^V(t,2))<<2^V(t,3):0}function ir(t){return t.trim()}function la(t,e){return(t=e.exec(t))?t[0]:t}function k(t,e,n){return t.replace(e,n)}function Bn(t,e){return t.indexOf(e)}function V(t,e){return t.charCodeAt(e)|0}function yt(t,e,n){return t.slice(e,n)}function fe(t){return t.length}function hi(t){return t.length}function Pt(t,e){return e.push(t),t}function ua(t,e){return t.map(e).join("")}var sn=1,Ye=1,sr=0,ie=0,H=0,et="";function rn(t,e,n,i,s,r,o){return{value:t,root:e,parent:n,type:i,props:s,children:r,line:sn,column:Ye,length:o,return:""}}function ct(t,e){return aa(rn("",null,null,"",null,null,0),t,{length:-t.length},e)}function ha(){return H}function da(){return H=ie>0?V(et,--ie):0,Ye--,H===10&&(Ye=1,sn--),H}function re(){return H=ie<sr?V(et,ie++):0,Ye++,H===10&&(Ye=1,sn++),H}function ge(){return V(et,ie)}function Ft(){return ie}function Tt(t,e){return yt(et,t,e)}function vt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rr(t){return sn=Ye=1,sr=fe(et=t),ie=0,[]}function or(t){return et="",t}function Wt(t){return ir(Tt(ie-1,Un(t===91?t+2:t===40?t+1:t)))}function fa(t){for(;(H=ge())&&H<33;)re();return vt(t)>2||vt(H)>3?"":" "}function pa(t,e){for(;--e&&re()&&!(H<48||H>102||H>57&&H<65||H>70&&H<97););return Tt(t,Ft()+(e<6&&ge()==32&&re()==32))}function Un(t){for(;re();)switch(H){case t:return ie;case 34:case 39:t!==34&&t!==39&&Un(H);break;case 40:t===41&&Un(t);break;case 92:re();break}return ie}function _a(t,e){for(;re()&&t+H!==57;)if(t+H===84&&ge()===47)break;return"/*"+Tt(e,ie-1)+"*"+nn(t===47?t:re())}function ma(t){for(;!vt(ge());)re();return Tt(t,ie)}function ga(t){return or(Bt("",null,null,null,[""],t=rr(t),0,[0],t))}function Bt(t,e,n,i,s,r,o,a,c){for(var l=0,h=0,u=o,d=0,g=0,p=0,m=1,y=1,w=1,A=0,F="",$=s,v=r,S=i,b=F;y;)switch(p=A,A=re()){case 40:if(p!=108&&V(b,u-1)==58){Bn(b+=k(Wt(A),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:b+=Wt(A);break;case 9:case 10:case 13:case 32:b+=fa(p);break;case 92:b+=pa(Ft()-1,7);continue;case 47:switch(ge()){case 42:case 47:Pt(ya(_a(re(),Ft()),e,n),c);break;default:b+="/"}break;case 123*m:a[l++]=fe(b)*w;case 125*m:case 59:case 0:switch(A){case 0:case 125:y=0;case 59+h:w==-1&&(b=k(b,/\f/g,"")),g>0&&fe(b)-u&&Pt(g>32?qi(b+";",i,n,u-1):qi(k(b," ","")+";",i,n,u-2),c);break;case 59:b+=";";default:if(Pt(S=ji(b,e,n,l,h,s,a,F,$=[],v=[],u),r),A===123)if(h===0)Bt(b,e,S,S,$,r,u,a,v);else switch(d===99&&V(b,3)===110?100:d){case 100:case 108:case 109:case 115:Bt(t,S,S,i&&Pt(ji(t,S,S,0,0,s,a,F,s,$=[],u),v),s,v,u,a,i?$:v);break;default:Bt(b,S,S,S,[""],v,0,a,v)}}l=h=g=0,m=w=1,F=b="",u=o;break;case 58:u=1+fe(b),g=p;default:if(m<1){if(A==123)--m;else if(A==125&&m++==0&&da()==125)continue}switch(b+=nn(A),A*m){case 38:w=h>0?1:(b+="\f",-1);break;case 44:a[l++]=(fe(b)-1)*w,w=1;break;case 64:ge()===45&&(b+=Wt(re())),d=ge(),h=u=fe(F=b+=ma(Ft())),A++;break;case 45:p===45&&fe(b)==2&&(m=0)}}return r}function ji(t,e,n,i,s,r,o,a,c,l,h){for(var u=s-1,d=s===0?r:[""],g=hi(d),p=0,m=0,y=0;p<i;++p)for(var w=0,A=yt(t,u+1,u=oa(m=o[p])),F=t;w<g;++w)(F=ir(m>0?d[w]+" "+A:k(A,/&\f/g,d[w])))&&(c[y++]=F);return rn(t,e,n,s===0?li:a,c,l,h)}function ya(t,e,n){return rn(t,e,n,tr,nn(ha()),yt(t,2,-2),0)}function qi(t,e,n,i){return rn(t,e,n,ui,yt(t,0,i),yt(t,i+1,-1),i)}function ze(t,e){for(var n="",i=hi(t),s=0;s<i;s++)n+=e(t[s],s,t,e)||"";return n}function va(t,e,n,i){switch(t.type){case ra:if(t.children.length)break;case sa:case ui:return t.return=t.return||t.value;case tr:return"";case nr:return t.return=t.value+"{"+ze(t.children,i)+"}";case li:t.value=t.props.join(",")}return fe(n=ze(t.children,i))?t.return=t.value+"{"+n+"}":""}function ba(t){var e=hi(t);return function(n,i,s,r){for(var o="",a=0;a<e;a++)o+=t[a](n,i,s,r)||"";return o}}function Ea(t){return function(e){e.root||(e=e.return)&&t(e)}}var Ca=function(e,n,i){for(var s=0,r=0;s=r,r=ge(),s===38&&r===12&&(n[i]=1),!vt(r);)re();return Tt(e,ie)},wa=function(e,n){var i=-1,s=44;do switch(vt(s)){case 0:s===38&&ge()===12&&(n[i]=1),e[i]+=Ca(ie-1,n,i);break;case 2:e[i]+=Wt(s);break;case 4:if(s===44){e[++i]=ge()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=nn(s)}while(s=re());return e},Sa=function(e,n){return or(wa(rr(e),n))},zi=new WeakMap,Ia=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,s=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!zi.get(i))&&!s){zi.set(e,!0);for(var r=[],o=Sa(n,r),a=i.props,c=0,l=0;c<o.length;c++)for(var h=0;h<a.length;h++,l++)e.props[l]=r[c]?o[c].replace(/&\f/g,a[h]):a[h]+" "+o[c]}}},Ta=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function ar(t,e){switch(ca(t,e)){case 5103:return N+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return N+t+Ht+t+Y+t+t;case 6828:case 4268:return N+t+Y+t+t;case 6165:return N+t+Y+"flex-"+t+t;case 5187:return N+t+k(t,/(\w+).+(:[^]+)/,N+"box-$1$2"+Y+"flex-$1$2")+t;case 5443:return N+t+Y+"flex-item-"+k(t,/flex-|-self/,"")+t;case 4675:return N+t+Y+"flex-line-pack"+k(t,/align-content|flex-|-self/,"")+t;case 5548:return N+t+Y+k(t,"shrink","negative")+t;case 5292:return N+t+Y+k(t,"basis","preferred-size")+t;case 6060:return N+"box-"+k(t,"-grow","")+N+t+Y+k(t,"grow","positive")+t;case 4554:return N+k(t,/([^-])(transform)/g,"$1"+N+"$2")+t;case 6187:return k(k(k(t,/(zoom-|grab)/,N+"$1"),/(image-set)/,N+"$1"),t,"")+t;case 5495:case 3959:return k(t,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return k(k(t,/(.+:)(flex-)?(.*)/,N+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+N+t+t;case 4095:case 3583:case 4068:case 2532:return k(t,/(.+)-inline(.+)/,N+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fe(t)-1-e>6)switch(V(t,e+1)){case 109:if(V(t,e+4)!==45)break;case 102:return k(t,/(.+:)(.+)-([^]+)/,"$1"+N+"$2-$3$1"+Ht+(V(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Bn(t,"stretch")?ar(k(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(V(t,e+1)!==115)break;case 6444:switch(V(t,fe(t)-3-(~Bn(t,"!important")&&10))){case 107:return k(t,":",":"+N)+t;case 101:return k(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+N+(V(t,14)===45?"inline-":"")+"box$3$1"+N+"$2$3$1"+Y+"$2box$3")+t}break;case 5936:switch(V(t,e+11)){case 114:return N+t+Y+k(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return N+t+Y+k(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return N+t+Y+k(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return N+t+Y+t+t}return t}var Ra=function(e,n,i,s){if(e.length>-1&&!e.return)switch(e.type){case ui:e.return=ar(e.value,e.length);break;case nr:return ze([ct(e,{value:k(e.value,"@","@"+N)})],s);case li:if(e.length)return ua(e.props,function(r){switch(la(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ze([ct(e,{props:[k(r,/:(read-\w+)/,":"+Ht+"$1")]})],s);case"::placeholder":return ze([ct(e,{props:[k(r,/:(plac\w+)/,":"+N+"input-$1")]}),ct(e,{props:[k(r,/:(plac\w+)/,":"+Ht+"$1")]}),ct(e,{props:[k(r,/:(plac\w+)/,Y+"input-$1")]})],s)}return""})}},Aa=[Ra],$d=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(m){var y=m.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var s=e.stylisPlugins||Aa,r={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var y=m.getAttribute("data-emotion").split(" "),w=1;w<y.length;w++)r[y[w]]=!0;a.push(m)});var c,l=[Ia,Ta];{var h,u=[va,Ea(function(m){h.insert(m)})],d=ba(l.concat(s,u)),g=function(y){return ze(ga(y),d)};c=function(y,w,A,F){h=A,g(y?y+"{"+w.styles+"}":w.styles),F&&(p.inserted[w.name]=!0)}}var p={key:n,sheet:new ia({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:r,registered:{},insert:c};return p.sheet.hydrate(a),p},Na=!0;function ka(t,e,n){var i="";return n.split(" ").forEach(function(s){t[s]!==void 0?e.push(t[s]+";"):s&&(i+=s+" ")}),i}var cr=function(e,n,i){var s=e.key+"-"+n.name;(i===!1||Na===!1)&&e.registered[s]===void 0&&(e.registered[s]=n.styles)},Oa=function(e,n,i){cr(e,n,i);var s=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var r=n;do e.insert(n===r?"."+s:"",r,e.sheet,!0),r=r.next;while(r!==void 0)}};function Da(t){for(var e=0,n,i=0,s=t.length;s>=4;++i,s-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(s){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var xa={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Pa(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Ma=/[A-Z]|^ms/g,La=/_EMO_([^_]+?)_([^]*?)_EMO_/g,lr=function(e){return e.charCodeAt(1)===45},Vi=function(e){return e!=null&&typeof e!="boolean"},gn=Pa(function(t){return lr(t)?t:t.replace(Ma,"-$&").toLowerCase()}),Gi=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(La,function(i,s,r){return pe={name:s,styles:r,next:pe},s})}return xa[e]!==1&&!lr(e)&&typeof n=="number"&&n!==0?n+"px":n};function bt(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var s=n;if(s.anim===1)return pe={name:s.name,styles:s.styles,next:pe},s.name;var r=n;if(r.styles!==void 0){var o=r.next;if(o!==void 0)for(;o!==void 0;)pe={name:o.name,styles:o.styles,next:pe},o=o.next;var a=r.styles+";";return a}return Fa(t,e,n)}case"function":{if(t!==void 0){var c=pe,l=n(t);return pe=c,bt(t,e,l)}break}}var h=n;if(e==null)return h;var u=e[h];return u!==void 0?u:h}function Fa(t,e,n){var i="";if(Array.isArray(n))for(var s=0;s<n.length;s++)i+=bt(t,e,n[s])+";";else for(var r in n){var o=n[r];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?i+=r+"{"+e[a]+"}":Vi(a)&&(i+=gn(r)+":"+Gi(r,a)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var c=0;c<o.length;c++)Vi(o[c])&&(i+=gn(r)+":"+Gi(r,o[c])+";");else{var l=bt(t,e,o);switch(r){case"animation":case"animationName":{i+=gn(r)+":"+l+";";break}default:i+=r+"{"+l+"}"}}}return i}var Ki=/label:\s*([^\s;{]+)\s*(;|$)/g,pe;function Wa(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";pe=void 0;var r=t[0];if(r==null||r.raw===void 0)i=!1,s+=bt(n,e,r);else{var o=r;s+=o[0]}for(var a=1;a<t.length;a++)if(s+=bt(n,e,t[a]),i){var c=r;s+=c[a]}Ki.lastIndex=0;for(var l="",h;(h=Ki.exec(s))!==null;)l+="-"+h[1];var u=Da(s)+l;return{name:u,styles:s,next:pe}}var Ba=function(e){return e()},ur=Ui.useInsertionEffect?Ui.useInsertionEffect:!1,Ua=ur||Ba,jd=ur||je.useLayoutEffect;function Ha(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var $a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ja=Ha(function(t){return $a.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),qa=ja,za=function(e){return e!=="theme"},Yi=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?qa:za},Qi=function(e,n,i){var s;if(n){var r=n.shouldForwardProp;s=e.__emotion_forwardProp&&r?function(o){return e.__emotion_forwardProp(o)&&r(o)}:r}return typeof s!="function"&&i&&(s=e.__emotion_forwardProp),s},Va=function(e){var n=e.cache,i=e.serialized,s=e.isStringTag;return cr(n,i,s),Ua(function(){return Oa(n,i,s)}),null},Ga=function t(e,n){var i=e.__emotion_real===e,s=i&&e.__emotion_base||e,r,o;n!==void 0&&(r=n.label,o=n.target);var a=Qi(e,n,i),c=a||Yi(s),l=!c("as");return function(){var h=arguments,u=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(r!==void 0&&u.push("label:"+r+";"),h[0]==null||h[0].raw===void 0)u.push.apply(u,h);else{var d=h[0];u.push(d[0]);for(var g=h.length,p=1;p<g;p++)u.push(h[p],d[p])}var m=Xo(function(y,w,A){var F=l&&y.as||s,$="",v=[],S=y;if(y.theme==null){S={};for(var b in y)S[b]=y[b];S.theme=je.useContext(Jo)}typeof y.className=="string"?$=ka(w.registered,v,y.className):y.className!=null&&($=y.className+" ");var J=Wa(u.concat(v),w.registered,S);$+=w.key+"-"+J.name,o!==void 0&&($+=" "+o);var de=l&&a===void 0?Yi(F):c,oe={};for(var ee in y)l&&ee==="as"||de(ee)&&(oe[ee]=y[ee]);return oe.className=$,A&&(oe.ref=A),je.createElement(je.Fragment,null,je.createElement(Va,{cache:w,serialized:J,isStringTag:typeof F=="string"}),je.createElement(F,oe))});return m.displayName=r!==void 0?r:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",m.defaultProps=e.defaultProps,m.__emotion_real=m,m.__emotion_base=s,m.__emotion_styles=u,m.__emotion_forwardProp=a,Object.defineProperty(m,"toString",{value:function(){return"."+o}}),m.withComponent=function(y,w){var A=t(y,Wn({},n,w,{shouldForwardProp:Qi(m,w,!0)}));return A.apply(void 0,u)},m}},Ka=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Xi=Ga.bind(null);Ka.forEach(function(t){Xi[t]=Xi(t)});function hr(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=hr(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function qd(){for(var t,e,n=0,i="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=hr(t))&&(i&&(i+=" "),i+=e);return i}function zd(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.includes(i))continue;n[i]=t[i]}return n}function Hn(t,e){return Hn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Hn(t,e)}function Vd(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Hn(t,e)}function Gd(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var yn,Ji;function Kd(){if(Ji)return yn;Ji=1;var t="Expected a function",e=NaN,n="[object Symbol]",i=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,c=typeof xt=="object"&&xt&&xt.Object===Object&&xt,l=typeof self=="object"&&self&&self.Object===Object&&self,h=c||l||Function("return this")(),u=Object.prototype,d=u.toString,g=Math.max,p=Math.min,m=function(){return h.Date.now()};function y(v,S,b){var J,de,oe,ee,Z,se,Te=0,Dt=!1,ye=!1,De=!0;if(typeof v!="function")throw new TypeError(t);S=$(S)||0,w(b)&&(Dt=!!b.leading,ye="maxWait"in b,oe=ye?g($(b.maxWait)||0,S):oe,De="trailing"in b?!!b.trailing:De);function _(B){var Re=J,at=de;return J=de=void 0,Te=B,ee=v.apply(at,Re),ee}function E(B){return Te=B,Z=setTimeout(U,S),Dt?_(B):ee}function C(B){var Re=B-se,at=B-Te,Bi=S-Re;return ye?p(Bi,oe-at):Bi}function W(B){var Re=B-se,at=B-Te;return se===void 0||Re>=S||Re<0||ye&&at>=oe}function U(){var B=m();if(W(B))return xe(B);Z=setTimeout(U,C(B))}function xe(B){return Z=void 0,De&&J?_(B):(J=de=void 0,ee)}function ve(){Z!==void 0&&clearTimeout(Z),Te=0,J=se=de=Z=void 0}function ot(){return Z===void 0?ee:xe(m())}function le(){var B=m(),Re=W(B);if(J=arguments,de=this,se=B,Re){if(Z===void 0)return E(se);if(ye)return Z=setTimeout(U,S),_(se)}return Z===void 0&&(Z=setTimeout(U,S)),ee}return le.cancel=ve,le.flush=ot,le}function w(v){var S=typeof v;return!!v&&(S=="object"||S=="function")}function A(v){return!!v&&typeof v=="object"}function F(v){return typeof v=="symbol"||A(v)&&d.call(v)==n}function $(v){if(typeof v=="number")return v;if(F(v))return e;if(w(v)){var S=typeof v.valueOf=="function"?v.valueOf():v;v=w(S)?S+"":S}if(typeof v!="string")return v===0?v:+v;v=v.replace(i,"");var b=r.test(v);return b||o.test(v)?a(v.slice(2),b?2:8):s.test(v)?e:+v}return yn=y,yn}var vn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Zi;function Yd(){return Zi||(Zi=1,function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(r=s(r,i(a)))}return r}function i(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return n.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var o="";for(var a in r)e.call(r,a)&&r[a]&&(o=s(o,a));return o}function s(r,o){return o?r?r+" "+o:r+o:r}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}(vn)),vn.exports}var dr=function(){if(typeof Map<"u")return Map;function t(e,n){var i=-1;return e.some(function(s,r){return s[0]===n?(i=r,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var i=t(this.__entries__,n),s=this.__entries__[i];return s&&s[1]},e.prototype.set=function(n,i){var s=t(this.__entries__,n);~s?this.__entries__[s][1]=i:this.__entries__.push([n,i])},e.prototype.delete=function(n){var i=this.__entries__,s=t(i,n);~s&&i.splice(s,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,i){i===void 0&&(i=null);for(var s=0,r=this.__entries__;s<r.length;s++){var o=r[s];n.call(i,o[1],o[0])}},e}()}(),$n=typeof window<"u"&&typeof document<"u"&&window.document===document,$t=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Ya=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind($t):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),Qa=2;function Xa(t,e){var n=!1,i=!1,s=0;function r(){n&&(n=!1,t()),i&&a()}function o(){Ya(r)}function a(){var c=Date.now();if(n){if(c-s<Qa)return;i=!0}else n=!0,i=!1,setTimeout(o,e);s=c}return a}var Ja=20,Za=["top","right","bottom","left","width","height","size","weight"],ec=typeof MutationObserver<"u",tc=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Xa(this.refresh.bind(this),Ja)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,i=n.indexOf(e);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!$n||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ec?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!$n||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,i=n===void 0?"":n,s=Za.some(function(r){return!!~i.indexOf(r)});s&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),fr=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var s=i[n];Object.defineProperty(t,s,{value:e[s],enumerable:!1,writable:!1,configurable:!0})}return t},Qe=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||$t},pr=on(0,0,0,0);function jt(t){return parseFloat(t)||0}function es(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(i,s){var r=t["border-"+s+"-width"];return i+jt(r)},0)}function nc(t){for(var e=["top","right","bottom","left"],n={},i=0,s=e;i<s.length;i++){var r=s[i],o=t["padding-"+r];n[r]=jt(o)}return n}function ic(t){var e=t.getBBox();return on(0,0,e.width,e.height)}function sc(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return pr;var i=Qe(t).getComputedStyle(t),s=nc(i),r=s.left+s.right,o=s.top+s.bottom,a=jt(i.width),c=jt(i.height);if(i.boxSizing==="border-box"&&(Math.round(a+r)!==e&&(a-=es(i,"left","right")+r),Math.round(c+o)!==n&&(c-=es(i,"top","bottom")+o)),!oc(t)){var l=Math.round(a+r)-e,h=Math.round(c+o)-n;Math.abs(l)!==1&&(a-=l),Math.abs(h)!==1&&(c-=h)}return on(s.left,s.top,a,c)}var rc=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof Qe(t).SVGGraphicsElement}:function(t){return t instanceof Qe(t).SVGElement&&typeof t.getBBox=="function"}}();function oc(t){return t===Qe(t).document.documentElement}function ac(t){return $n?rc(t)?ic(t):sc(t):pr}function cc(t){var e=t.x,n=t.y,i=t.width,s=t.height,r=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(r.prototype);return fr(o,{x:e,y:n,width:i,height:s,top:n,right:e+i,bottom:s+n,left:e}),o}function on(t,e,n,i){return{x:t,y:e,width:n,height:i}}var lc=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=on(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=ac(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),uc=function(){function t(e,n){var i=cc(n);fr(this,{target:e,contentRect:i})}return t}(),hc=function(){function t(e,n,i){if(this.activeObservations_=[],this.observations_=new dr,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=i}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Qe(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new lc(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Qe(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(i){return new uc(i.target,i.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),_r=typeof WeakMap<"u"?new WeakMap:new dr,mr=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=tc.getInstance(),i=new hc(e,n,this);_r.set(this,i)}return t}();["observe","unobserve","disconnect"].forEach(function(t){mr.prototype[t]=function(){var e;return(e=_r.get(this))[t].apply(e,arguments)}});var dc=function(){return typeof $t.ResizeObserver<"u"?$t.ResizeObserver:mr}();const fc=Object.freeze(Object.defineProperty({__proto__:null,default:dc},Symbol.toStringTag,{value:"Module"})),Qd=Zo(fc);var bn,ts;function pc(){if(ts)return bn;ts=1;var t=function(e){return e.replace(/[A-Z]/g,function(n){return"-"+n.toLowerCase()}).toLowerCase()};return bn=t,bn}var En,ns;function Xd(){if(ns)return En;ns=1;var t=pc(),e=function(s){var r=/[height|width]$/;return r.test(s)},n=function(s){var r="",o=Object.keys(s);return o.forEach(function(a,c){var l=s[a];a=t(a),e(a)&&typeof l=="number"&&(l=l+"px"),l===!0?r+=a:l===!1?r+="not "+a:r+="("+a+": "+l+")",c<o.length-1&&(r+=" and ")}),r},i=function(s){var r="";return typeof s=="string"?s:s instanceof Array?(s.forEach(function(o,a){r+=n(o),a<s.length-1&&(r+=", ")}),r):n(s)};return En=i,En}var Cn,is;function _c(){if(is)return Cn;is=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},Cn=t,Cn}var wn,ss;function gr(){if(ss)return wn;ss=1;function t(i,s){var r=0,o=i.length,a;for(r;r<o&&(a=s(i[r],r),a!==!1);r++);}function e(i){return Object.prototype.toString.apply(i)==="[object Array]"}function n(i){return typeof i=="function"}return wn={isFunction:n,isArray:e,each:t},wn}var Sn,rs;function mc(){if(rs)return Sn;rs=1;var t=_c(),e=gr().each;function n(i,s){this.query=i,this.isUnconditional=s,this.handlers=[],this.mql=window.matchMedia(i);var r=this;this.listener=function(o){r.mql=o.currentTarget||o,r.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(i){var s=new t(i);this.handlers.push(s),this.matches()&&s.on()},removeHandler:function(i){var s=this.handlers;e(s,function(r,o){if(r.equals(i))return r.destroy(),!s.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(i){i.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var i=this.matches()?"on":"off";e(this.handlers,function(s){s[i]()})}},Sn=n,Sn}var In,os;function gc(){if(os)return In;os=1;var t=mc(),e=gr(),n=e.each,i=e.isFunction,s=e.isArray;function r(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return r.prototype={constructor:r,register:function(o,a,c){var l=this.queries,h=c&&this.browserIsIncapable;return l[o]||(l[o]=new t(o,h)),i(a)&&(a={match:a}),s(a)||(a=[a]),n(a,function(u){i(u)&&(u={match:u}),l[o].addHandler(u)}),this},unregister:function(o,a){var c=this.queries[o];return c&&(a?c.removeHandler(a):(c.clear(),delete this.queries[o])),this}},In=r,In}var Tn,as;function Jd(){if(as)return Tn;as=1;var t=gc();return Tn=new t,Tn}var cs={};/**
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
 */const yr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const f=function(t,e){if(!t)throw tt(e)},tt=function(t){return new Error("Firebase Database ("+yr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const vr=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},di={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),i.push(n[h],n[u],n[d],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||u==null)throw new vc;const d=r<<2|a>>4;if(i.push(d),l!==64){const g=a<<4&240|l>>2;if(i.push(g),u!==64){const p=l<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const br=function(t){const e=vr(t);return di.encodeByteArray(e,!0)},qt=function(t){return br(t).replace(/\./g,"")},jn=function(t){try{return di.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bc(t){return Er(void 0,t)}function Er(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ec(n)||(t[n]=Er(t[n],e[n]));return t}function Ec(t){return t!=="__proto__"}/**
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
 */function Cc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wc=()=>Cc().__FIREBASE_DEFAULTS__,Sc=()=>{if(typeof process>"u"||typeof cs>"u")return;const t=cs.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ic=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jn(t[1]);return e&&JSON.parse(e)},Cr=()=>{try{return wc()||Sc()||Ic()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tc=t=>{var e,n;return(n=(e=Cr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rc=t=>{const e=Tc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},wr=()=>{var t;return(t=Cr())===null||t===void 0?void 0:t.config};/**
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
 */class an{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Ac(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qt(JSON.stringify(n)),qt(JSON.stringify(o)),""].join(".")}/**
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
 */function Nc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nc())}function kc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oc(){return yr.NODE_ADMIN===!0}function Dc(){try{return typeof indexedDB=="object"}catch{return!1}}function xc(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Pc="FirebaseError";class Rt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Pc,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ir.prototype.create)}}class Ir{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Mc(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Rt(s,a,i)}}function Mc(t,e){return t.replace(Lc,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Lc=/\{\$([^}]+)}/g;/**
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
 */function Et(t){return JSON.parse(t)}function K(t){return JSON.stringify(t)}/**
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
 */const Tr=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Et(jn(r[0])||""),n=Et(jn(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Fc=function(t){const e=Tr(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Wc=function(t){const e=Tr(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ie(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xe(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ls(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zt(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function qn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(us(r)&&us(o)){if(!qn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function us(t){return t!==null&&typeof t=="object"}/**
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
 */function Bc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Uc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,h;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),h=1518500249):(l=r^o^a,h=1859775393):u<60?(l=r&o|a&(r|o),h=2400959708):(l=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+l+c+h+i[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function fi(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Hc=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cn=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class Ct{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pe="[DEFAULT]";/**
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
 */class $c{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new an;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qc(e))try{this.getOrInitializeService({instanceIdentifier:Pe})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Pe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pe){return this.instances.has(e)}getOptions(e=Pe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:jc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Pe){return this.component?this.component.multipleInstances?e:Pe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jc(t){return t===Pe?void 0:t}function qc(t){return t.instantiationMode==="EAGER"}/**
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
 */class zc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $c(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(x||(x={}));const Vc={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Gc=x.INFO,Kc={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Yc=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Kc[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rr{constructor(e){this.name=e,this._logLevel=Gc,this._logHandler=Yc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const Qc=(t,e)=>e.some(n=>t instanceof n);let hs,ds;function Xc(){return hs||(hs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jc(){return ds||(ds=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ar=new WeakMap,zn=new WeakMap,Nr=new WeakMap,Rn=new WeakMap,pi=new WeakMap;function Zc(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ae(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ar.set(n,t)}).catch(()=>{}),pi.set(e,t),e}function el(t){if(zn.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});zn.set(t,e)}let Vn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ae(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tl(t){Vn=t(Vn)}function nl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(An(this),e,...n);return Nr.set(i,e.sort?e.sort():[e]),Ae(i)}:Jc().includes(t)?function(...e){return t.apply(An(this),e),Ae(Ar.get(this))}:function(...e){return Ae(t.apply(An(this),e))}}function il(t){return typeof t=="function"?nl(t):(t instanceof IDBTransaction&&el(t),Qc(t,Xc())?new Proxy(t,Vn):t)}function Ae(t){if(t instanceof IDBRequest)return Zc(t);if(Rn.has(t))return Rn.get(t);const e=il(t);return e!==t&&(Rn.set(t,e),pi.set(e,t)),e}const An=t=>pi.get(t);function sl(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ae(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ae(o.result),c.oldVersion,c.newVersion,Ae(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const rl=["get","getKey","getAll","getAllKeys","count"],ol=["put","add","delete","clear"],Nn=new Map;function fs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nn.get(e))return Nn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ol.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||rl.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Nn.set(e,r),r}tl(t=>({...t,get:(e,n,i)=>fs(e,n)||t.get(e,n,i),has:(e,n)=>!!fs(e,n)||t.has(e,n)}));/**
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
 */class al{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cl(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function cl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gn="@firebase/app",ps="0.10.17";/**
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
 */const Ce=new Rr("@firebase/app"),ll="@firebase/app-compat",ul="@firebase/analytics-compat",hl="@firebase/analytics",dl="@firebase/app-check-compat",fl="@firebase/app-check",pl="@firebase/auth",_l="@firebase/auth-compat",ml="@firebase/database",gl="@firebase/data-connect",yl="@firebase/database-compat",vl="@firebase/functions",bl="@firebase/functions-compat",El="@firebase/installations",Cl="@firebase/installations-compat",wl="@firebase/messaging",Sl="@firebase/messaging-compat",Il="@firebase/performance",Tl="@firebase/performance-compat",Rl="@firebase/remote-config",Al="@firebase/remote-config-compat",Nl="@firebase/storage",kl="@firebase/storage-compat",Ol="@firebase/firestore",Dl="@firebase/vertexai",xl="@firebase/firestore-compat",Pl="firebase",Ml="11.1.0";/**
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
 */const Kn="[DEFAULT]",Ll={[Gn]:"fire-core",[ll]:"fire-core-compat",[hl]:"fire-analytics",[ul]:"fire-analytics-compat",[fl]:"fire-app-check",[dl]:"fire-app-check-compat",[pl]:"fire-auth",[_l]:"fire-auth-compat",[ml]:"fire-rtdb",[gl]:"fire-data-connect",[yl]:"fire-rtdb-compat",[vl]:"fire-fn",[bl]:"fire-fn-compat",[El]:"fire-iid",[Cl]:"fire-iid-compat",[wl]:"fire-fcm",[Sl]:"fire-fcm-compat",[Il]:"fire-perf",[Tl]:"fire-perf-compat",[Rl]:"fire-rc",[Al]:"fire-rc-compat",[Nl]:"fire-gcs",[kl]:"fire-gcs-compat",[Ol]:"fire-fst",[xl]:"fire-fst-compat",[Dl]:"fire-vertex","fire-js":"fire-js",[Pl]:"fire-js-all"};/**
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
 */const Vt=new Map,Fl=new Map,Yn=new Map;function _s(t,e){try{t.container.addComponent(e)}catch(n){Ce.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gt(t){const e=t.name;if(Yn.has(e))return Ce.debug(`There were multiple attempts to register component ${e}.`),!1;Yn.set(e,t);for(const n of Vt.values())_s(n,t);for(const n of Fl.values())_s(n,t);return!0}function Wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Bl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ne=new Ir("app","Firebase",Bl);/**
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
 */class Ul{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ne.create("app-deleted",{appName:this._name})}}/**
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
 */const Hl=Ml;function $l(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Kn,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ne.create("bad-app-name",{appName:String(s)});if(n||(n=wr()),!n)throw Ne.create("no-options");const r=Vt.get(s);if(r){if(qn(n,r.options)&&qn(i,r.config))return r;throw Ne.create("duplicate-app",{appName:s})}const o=new zc(s);for(const c of Yn.values())o.addComponent(c);const a=new Ul(n,i,o);return Vt.set(s,a),a}function jl(t=Kn){const e=Vt.get(t);if(!e&&t===Kn&&wr())return $l();if(!e)throw Ne.create("no-app",{appName:t});return e}function Ve(t,e,n){var i;let s=(i=Ll[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ce.warn(a.join(" "));return}Gt(new Ct(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ql="firebase-heartbeat-database",zl=1,wt="firebase-heartbeat-store";let kn=null;function kr(){return kn||(kn=sl(ql,zl,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wt)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ne.create("idb-open",{originalErrorMessage:t.message})})),kn}async function Vl(t){try{const n=(await kr()).transaction(wt),i=await n.objectStore(wt).get(Or(t));return await n.done,i}catch(e){if(e instanceof Rt)Ce.warn(e.message);else{const n=Ne.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ce.warn(n.message)}}}async function ms(t,e){try{const i=(await kr()).transaction(wt,"readwrite");await i.objectStore(wt).put(e,Or(t)),await i.done}catch(n){if(n instanceof Rt)Ce.warn(n.message);else{const i=Ne.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ce.warn(i.message)}}}function Or(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Gl=1024,Kl=30*24*60*60*1e3;class Yl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xl(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gs();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Kl}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ce.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gs(),{heartbeatsToSend:i,unsentEntries:s}=Ql(this._heartbeatsCache.heartbeats),r=qt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Ce.warn(n),""}}}function gs(){return new Date().toISOString().substring(0,10)}function Ql(t,e=Gl){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ys(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ys(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Xl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dc()?xc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ms(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ms(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ys(t){return qt(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Jl(t){Gt(new Ct("platform-logger",e=>new al(e),"PRIVATE")),Gt(new Ct("heartbeat",e=>new Yl(e),"PRIVATE")),Ve(Gn,ps,t),Ve(Gn,ps,"esm2017"),Ve("fire-js","")}Jl("");var Zl="firebase",eu="11.1.0";/**
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
 */Ve(Zl,eu,"app");var vs={};const bs="@firebase/database",Es="1.0.10";/**
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
 */let Dr="";function tu(t){Dr=t}/**
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
 */class nu{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),K(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Et(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class iu{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ie(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const xr=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nu(e)}}catch{}return new iu},Le=xr("localStorage"),su=xr("sessionStorage");/**
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
 */const Ge=new Rr("@firebase/database"),ru=function(){let t=1;return function(){return t++}}(),Pr=function(t){const e=Hc(t),n=new Uc;n.update(e);const i=n.digest();return di.encodeByteArray(i)},At=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=At.apply(null,i):typeof i=="object"?e+=K(i):e+=i,e+=" "}return e};let pt=null,Cs=!0;const ou=function(t,e){f(!0,"Can't turn on custom loggers persistently."),Ge.logLevel=x.VERBOSE,pt=Ge.log.bind(Ge)},Q=function(...t){if(Cs===!0&&(Cs=!1,pt===null&&su.get("logging_enabled")===!0&&ou()),pt){const e=At.apply(null,t);pt(e)}},Nt=function(t){return function(...e){Q(t,...e)}},Qn=function(...t){const e="FIREBASE INTERNAL ERROR: "+At(...t);Ge.error(e)},we=function(...t){const e=`FIREBASE FATAL ERROR: ${At(...t)}`;throw Ge.error(e),new Error(e)},ne=function(...t){const e="FIREBASE WARNING: "+At(...t);Ge.warn(e)},au=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cu=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Je="[MIN_NAME]",We="[MAX_NAME]",it=function(t,e){if(t===e)return 0;if(t===Je||e===We)return-1;if(e===Je||t===We)return 1;{const n=ws(t),i=ws(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},lu=function(t,e){return t===e?0:t<e?-1:1},lt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+K(e))},_i=function(t){if(typeof t!="object"||t===null)return K(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=K(e[i]),n+=":",n+=_i(t[e[i]]);return n+="}",n},Lr=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function ce(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fr=function(t){f(!Mr(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const h=l.join("");let u="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},uu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},du=new RegExp("^-?(0*)\\d{1,10}$"),fu=-2147483648,pu=2147483647,ws=function(t){if(du.test(t)){const e=Number(t);if(e>=fu&&e<=pu)return e}return null},st=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ne("Exception was thrown by user callback.",n),e},Math.floor(0))}},_u=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_t=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mu{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ne(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gu{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Q("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ne(e)}}class Ut{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ut.OWNER="owner";/**
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
 */const mi="5",Wr="v",Br="s",Ur="r",Hr="f",$r=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jr="ls",qr="p",Xn="ac",zr="websocket",Vr="long_polling";/**
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
 */class Gr{constructor(e,n,i,s,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Le.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Le.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yu(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Kr(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===zr)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vr)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yu(t)&&(n.ns=t.namespace);const s=[];return ce(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class vu{constructor(){this.counters_={}}incrementCounter(e,n=1){Ie(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bc(this.counters_)}}/**
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
 */const On={},Dn={};function gi(t){const e=t.toString();return On[e]||(On[e]=new vu),On[e]}function bu(t,e){const n=t.toString();return Dn[n]||(Dn[n]=e()),Dn[n]}/**
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
 */class Eu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&st(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ss="start",Cu="close",wu="pLPCommand",Su="pRTLPCB",Yr="id",Qr="pw",Xr="ser",Iu="cb",Tu="seg",Ru="ts",Au="d",Nu="dframe",Jr=1870,Zr=30,ku=Jr-Zr,Ou=25e3,Du=3e4;class qe{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nt(e),this.stats_=gi(n),this.urlFn=c=>(this.appCheckToken&&(c[Xn]=this.appCheckToken),Kr(n,Vr,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Eu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Du)),cu(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yi((...r)=>{const[o,a,c,l,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ss)this.id=a,this.password=c;else if(o===Cu)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ss]="t",i[Xr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Iu]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Wr]=mi,this.transportSessionId&&(i[Br]=this.transportSessionId),this.lastSessionId&&(i[jr]=this.lastSessionId),this.applicationId&&(i[qr]=this.applicationId),this.appCheckToken&&(i[Xn]=this.appCheckToken),typeof location<"u"&&location.hostname&&$r.test(location.hostname)&&(i[Ur]=Hr);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qe.forceAllow_=!0}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){return qe.forceAllow_?!0:!qe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uu()&&!hu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=K(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=br(n),s=Lr(i,ku);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Nu]="t",i[Yr]=e,i[Qr]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=K(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yi{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ru(),window[wu+this.uniqueCallbackIdentifier]=e,window[Su+this.uniqueCallbackIdentifier]=n,this.myIFrame=yi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Q("frame writing exception"),a.stack&&Q(a.stack),Q(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Q("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yr]=this.myID,e[Qr]=this.myPW,e[Xr]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zr+i.length<=Jr;){const o=this.pendingSegs.shift();i=i+"&"+Tu+s+"="+o.seg+"&"+Ru+s+"="+o.ts+"&"+Au+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Ou)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Q("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const xu=16384,Pu=45e3;let Kt=null;typeof MozWebSocket<"u"?Kt=MozWebSocket:typeof WebSocket<"u"&&(Kt=WebSocket);class _e{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nt(this.connId),this.stats_=gi(n),this.connURL=_e.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Wr]=mi,typeof location<"u"&&location.hostname&&$r.test(location.hostname)&&(o[Ur]=Hr),n&&(o[Br]=n),i&&(o[jr]=i),s&&(o[Xn]=s),r&&(o[qr]=r),Kr(e,zr,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Le.set("previous_websocket_failure",!0);try{let i;Oc(),this.mySock=new Kt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){_e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Kt!==null&&!_e.forceDisallow_}static previouslyFailed(){return Le.isInMemoryStorage||Le.get("previous_websocket_failure")===!0}markConnectionHealthy(){Le.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Et(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=K(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Lr(n,xu);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Pu))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_e.responsesRequiredToBeHealthy=2;_e.healthyTimeout=3e4;/**
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
 */class St{static get ALL_TRANSPORTS(){return[qe,_e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=_e.isAvailable();let i=n&&!_e.previouslyFailed();if(e.webSocketOnly&&(n||ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[_e];else{const s=this.transports_=[];for(const r of St.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);St.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}St.globalTransportInitialized_=!1;/**
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
 */const Mu=6e4,Lu=5e3,Fu=10*1024,Wu=100*1024,xn="t",Is="d",Bu="s",Ts="r",Uu="e",Rs="o",As="a",Ns="n",ks="p",Hu="h";class $u{constructor(e,n,i,s,r,o,a,c,l,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nt("c:"+this.id+":"),this.transportManager_=new St(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=_t(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fu?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xn in e){const n=e[xn];n===As?this.upgradeIfSecondaryHealthy_():n===Ts?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rs&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=lt("t",e),i=lt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ks,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:As,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ns,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=lt("t",e),i=lt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=lt(xn,e);if(Is in e){const i=e[Is];if(n===Hu){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Ns){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Bu?this.onConnectionShutdown_(i):n===Ts?this.onReset_(i):n===Uu?Qn("Server Error: "+i):n===Rs?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qn("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),mi!==i&&ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),_t(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Mu))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_t(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Lu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ks,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Le.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class eo{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class to{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Yt extends to{static getInstance(){return new Yt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Os=32,Ds=768;class L{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function D(){return new L("")}function I(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Oe(t){return t.pieces_.length-t.pieceNum_}function M(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new L(t.pieces_,e)}function no(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ju(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function io(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function so(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new L(e,0)}function j(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof L)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new L(n,0)}function T(t){return t.pieceNum_>=t.pieces_.length}function ae(t,e){const n=I(t),i=I(e);if(n===null)return e;if(n===i)return ae(M(t),M(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ro(t,e){if(Oe(t)!==Oe(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ue(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Oe(t)>Oe(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class qu{constructor(e,n){this.errorPrefix_=n,this.parts_=io(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=cn(this.parts_[i]);oo(this)}}function zu(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=cn(e),oo(t)}function Vu(t){const e=t.parts_.pop();t.byteLength_-=cn(e),t.parts_.length>0&&(t.byteLength_-=1)}function oo(t){if(t.byteLength_>Ds)throw new Error(t.errorPrefix_+"has a key path longer than "+Ds+" bytes ("+t.byteLength_+").");if(t.parts_.length>Os)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Os+") or object contains a cycle "+Me(t))}function Me(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class vi extends to{static getInstance(){return new vi}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ut=1e3,Gu=60*5*1e3,xs=30*1e3,Ku=1.3,Yu=3e4,Qu="server_kill",Ps=3;class Ee extends eo{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ee.nextPersistentConnectionId_++,this.log_=Nt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ut,this.maxReconnectDelay_=Gu,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(K(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new an,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Ee.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ie(e,"w")){const i=Xe(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Wc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Fc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+K(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qn("Unrecognized action received from server: "+K(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ut,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ut,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Yu&&(this.reconnectDelay_=ut),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ku)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ee.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(u){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Q("getToken() completed but was canceled"):(Q("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new $u(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{ne(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Qu)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ne(u),c())}}}interrupt(e){Q("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Q("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ls(this.interruptReasons_)&&(this.reconnectDelay_=ut,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>_i(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new L(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Q("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ps&&(this.reconnectDelay_=xs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Q("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ps&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Dr.replace(/\./g,"-")]=1,Sr()?e["framework.cordova"]=1:kc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yt.getInstance().currentlyOnline();return ls(this.interruptReasons_)&&e}}Ee.nextPersistentConnectionId_=0;Ee.nextConnectionId_=0;/**
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
 */class R{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new R(e,n)}}/**
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
 */class ln{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new R(Je,e),s=new R(Je,n);return this.compare(i,s)!==0}minPost(){return R.MIN}}/**
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
 */let Mt;class ao extends ln{static get __EMPTY_NODE(){return Mt}static set __EMPTY_NODE(e){Mt=e}compare(e,n){return it(e.name,n.name)}isDefinedOn(e){throw tt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return R.MIN}maxPost(){return new R(We,Mt)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new R(e,Mt)}toString(){return".key"}}const Ke=new ao;/**
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
 */class Lt{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class z{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??z.RED,this.left=s??te.EMPTY_NODE,this.right=r??te.EMPTY_NODE}copy(e,n,i,s,r){return new z(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return te.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return te.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}z.RED=!0;z.BLACK=!1;class Xu{copy(e,n,i,s,r){return this}insert(e,n,i){return new z(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class te{constructor(e,n=te.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new te(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,z.BLACK,null,null))}remove(e){return new te(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,z.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Lt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Lt(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Lt(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Lt(this.root_,null,this.comparator_,!0,e)}}te.EMPTY_NODE=new Xu;/**
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
 */function Ju(t,e){return it(t.name,e.name)}function bi(t,e){return it(t,e)}/**
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
 */let Jn;function Zu(t){Jn=t}const co=function(t){return typeof t=="number"?"number:"+Fr(t):"string:"+t},lo=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ie(e,".sv"),"Priority must be a string or number.")}else f(t===Jn||t.isEmpty(),"priority of unexpected type.");f(t===Jn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ms;class q{static set __childrenNodeConstructor(e){Ms=e}static get __childrenNodeConstructor(){return Ms}constructor(e,n=q.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lo(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new q(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:q.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return T(e)?this:I(e)===".priority"?this.priorityNode_:q.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:q.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=I(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||Oe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,q.__childrenNodeConstructor.EMPTY_NODE.updateChild(M(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+co(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fr(this.value_):e+=this.value_,this.lazyHash_=Pr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===q.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof q.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=q.VALUE_TYPE_ORDER.indexOf(n),r=q.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}q.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let uo,ho;function eh(t){uo=t}function th(t){ho=t}class nh extends ln{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?it(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return R.MIN}maxPost(){return new R(We,new q("[PRIORITY-POST]",ho))}makePost(e,n){const i=uo(e);return new R(n,new q("[PRIORITY-POST]",i))}toString(){return".priority"}}const X=new nh;/**
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
 */const ih=Math.log(2);class sh{constructor(e){const n=r=>parseInt(Math.log(r)/ih,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qt=function(t,e,n,i){t.sort(e);const s=function(c,l){const h=l-c;let u,d;if(h===0)return null;if(h===1)return u=t[c],d=n?n(u):u,new z(d,u.node,z.BLACK,null,null);{const g=parseInt(h/2,10)+c,p=s(c,g),m=s(g+1,l);return u=t[g],d=n?n(u):u,new z(d,u.node,z.BLACK,p,m)}},r=function(c){let l=null,h=null,u=t.length;const d=function(p,m){const y=u-p,w=u;u-=p;const A=s(y+1,w),F=t[y],$=n?n(F):F;g(new z($,F.node,m,null,A))},g=function(p){l?(l.left=p,l=p):(h=p,l=p)};for(let p=0;p<c.count;++p){const m=c.nextBitIsOne(),y=Math.pow(2,c.count-(p+1));m?d(y,z.BLACK):(d(y,z.BLACK),d(y,z.RED))}return h},o=new sh(t.length),a=r(o);return new te(i||e,a)};/**
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
 */let Pn;const ht={};class be{static get Default(){return f(X,"ChildrenNode.ts has not been loaded"),Pn=Pn||new be({".priority":ht},{".priority":X}),Pn}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Xe(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof te?n:null}hasIndex(e){return Ie(this.indexSet_,e.toString())}addIndex(e,n){f(e!==Ke,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(R.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Qt(i,e.getCompare()):a=ht;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new be(h,l)}addToIndexes(e,n){const i=zt(this.indexes_,(s,r)=>{const o=Xe(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===ht)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(R.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Qt(a,o.getCompare())}else return ht;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new R(e.name,a))),c.insert(e,e.node)}});return new be(i,this.indexSet_)}removeFromIndexes(e,n){const i=zt(this.indexes_,s=>{if(s===ht)return s;{const r=n.get(e.name);return r?s.remove(new R(e.name,r)):s}});return new be(i,this.indexSet_)}}/**
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
 */let dt;class O{static get EMPTY_NODE(){return dt||(dt=new O(new te(bi),null,be.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&lo(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dt}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?dt:n}}getChild(e){const n=I(e);return n===null?this:this.getImmediateChild(n).getChild(M(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new R(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?dt:this.priorityNode_;return new O(s,o,r)}}updateChild(e,n){const i=I(e);if(i===null)return n;{f(I(e)!==".priority"||Oe(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(M(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(X,(o,a)=>{n[o]=a.val(e),i++,r&&O.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+co(this.getPriority().val())+":"),this.forEachChild(X,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Pr(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new R(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new R(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new R(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,R.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,R.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===kt?-1:0}withIndex(e){if(e===Ke||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ke||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(X),s=n.getIterator(X);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ke?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rh extends O{constructor(){super(new te(bi),O.EMPTY_NODE,be.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const kt=new rh;Object.defineProperties(R,{MIN:{value:new R(Je,O.EMPTY_NODE)},MAX:{value:new R(We,kt)}});ao.__EMPTY_NODE=O.EMPTY_NODE;q.__childrenNodeConstructor=O;Zu(kt);th(kt);/**
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
 */const oh=!0;function G(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new q(n,G(e))}if(!(t instanceof Array)&&oh){const n=[];let i=!1;if(ce(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=G(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new R(o,c)))}}),n.length===0)return O.EMPTY_NODE;const r=Qt(n,Ju,o=>o.name,bi);if(i){const o=Qt(n,X.getCompare());return new O(r,G(e),new be({".priority":o},{".priority":X}))}else return new O(r,G(e),be.Default)}else{let n=O.EMPTY_NODE;return ce(t,(i,s)=>{if(Ie(t,i)&&i.substring(0,1)!=="."){const r=G(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(G(e))}}eh(G);/**
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
 */class ah extends ln{constructor(e){super(),this.indexPath_=e,f(!T(e)&&I(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?it(e.name,n.name):r}makePost(e,n){const i=G(e),s=O.EMPTY_NODE.updateChild(this.indexPath_,i);return new R(n,s)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,kt);return new R(We,e)}toString(){return io(this.indexPath_,0).join("/")}}/**
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
 */class ch extends ln{compare(e,n){const i=e.node.compareTo(n.node);return i===0?it(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return R.MIN}maxPost(){return R.MAX}makePost(e,n){const i=G(e);return new R(n,i)}toString(){return".value"}}const lh=new ch;/**
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
 */function uh(t){return{type:"value",snapshotNode:t}}function hh(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function dh(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ls(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fh(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ei{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=X}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Je}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:We}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===X}copy(){const e=new Ei;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Fs(t){const e={};if(t.isDefault())return e;let n;if(t.index_===X?n="$priority":t.index_===lh?n="$value":t.index_===Ke?n="$key":(f(t.index_ instanceof ah,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=K(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=K(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+K(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=K(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+K(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ws(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==X&&(e.i=t.index_.toString()),e}/**
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
 */class Xt extends eo{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Nt("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Xt.getListenId_(e,i),a={};this.listens_[o]=a;const c=Fs(e._queryParams);this.restRequest_(r+".json",c,(l,h)=>{let u=h;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,i),Xe(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,n){const i=Xt.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Fs(e._queryParams),i=e._path.toString(),s=new an;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bc(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Et(a.responseText)}catch{ne("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&ne("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class ph{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Jt(){return{value:null,children:new Map}}function fo(t,e,n){if(T(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=I(e);t.children.has(i)||t.children.set(i,Jt());const s=t.children.get(i);e=M(e),fo(s,e,n)}}function Zn(t,e,n){t.value!==null?n(e,t.value):_h(t,(i,s)=>{const r=new L(e.toString()+"/"+i);Zn(s,r,n)})}function _h(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class mh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ce(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Bs=10*1e3,gh=30*1e3,yh=5*60*1e3;class vh{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mh(e);const i=Bs+(gh-Bs)*Math.random();_t(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ce(e,(s,r)=>{r>0&&Ie(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),_t(this.reportStats_.bind(this),Math.floor(Math.random()*2*yh))}}/**
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
 */var me;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(me||(me={}));function po(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _o(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Zt{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=me.ACK_USER_WRITE,this.source=po()}operationForChild(e){if(T(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new L(e));return new Zt(D(),n,this.revert)}}else return f(I(this.path)===e,"operationForChild called for unrelated child."),new Zt(M(this.path),this.affectedTree,this.revert)}}/**
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
 */class Be{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=me.OVERWRITE}operationForChild(e){return T(this.path)?new Be(this.source,D(),this.snap.getImmediateChild(e)):new Be(this.source,M(this.path),this.snap)}}/**
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
 */class It{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=me.MERGE}operationForChild(e){if(T(this.path)){const n=this.children.subtree(new L(e));return n.isEmpty()?null:n.value?new Be(this.source,D(),n.value):new It(this.source,D(),n)}else return f(I(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new It(this.source,M(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ci{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(T(e))return this.isFullyInitialized()&&!this.filtered_;const n=I(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function bh(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fh(o.childName,o.snapshotNode))}),ft(t,s,"child_removed",e,i,n),ft(t,s,"child_added",e,i,n),ft(t,s,"child_moved",r,i,n),ft(t,s,"child_changed",e,i,n),ft(t,s,"value",e,i,n),s}function ft(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>Ch(t,a,c)),o.forEach(a=>{const c=Eh(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function Eh(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ch(t,e,n){if(e.childName==null||n.childName==null)throw tt("Should only compare child_ events.");const i=new R(e.childName,e.snapshotNode),s=new R(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function go(t,e){return{eventCache:t,serverCache:e}}function mt(t,e,n,i){return go(new Ci(e,n,i),t.serverCache)}function yo(t,e,n,i){return go(t.eventCache,new Ci(e,n,i))}function ei(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ue(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Mn;const wh=()=>(Mn||(Mn=new te(lu)),Mn);class P{static fromObject(e){let n=new P(null);return ce(e,(i,s)=>{n=n.set(new L(i),s)}),n}constructor(e,n=wh()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:D(),value:this.value};if(T(e))return null;{const i=I(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(M(e),n);return r!=null?{path:j(new L(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(T(e))return this;{const n=I(e),i=this.children.get(n);return i!==null?i.subtree(M(e)):new P(null)}}set(e,n){if(T(e))return new P(n,this.children);{const i=I(e),r=(this.children.get(i)||new P(null)).set(M(e),n),o=this.children.insert(i,r);return new P(this.value,o)}}remove(e){if(T(e))return this.children.isEmpty()?new P(null):new P(null,this.children);{const n=I(e),i=this.children.get(n);if(i){const s=i.remove(M(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new P(null):new P(this.value,r)}else return this}}get(e){if(T(e))return this.value;{const n=I(e),i=this.children.get(n);return i?i.get(M(e)):null}}setTree(e,n){if(T(e))return n;{const i=I(e),r=(this.children.get(i)||new P(null)).setTree(M(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new P(this.value,o)}}fold(e){return this.fold_(D(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(j(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,D(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(T(e))return null;{const r=I(e),o=this.children.get(r);return o?o.findOnPath_(M(e),j(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,D(),n)}foreachOnPath_(e,n,i){if(T(e))return this;{this.value&&i(n,this.value);const s=I(e),r=this.children.get(s);return r?r.foreachOnPath_(M(e),j(n,s),i):new P(null)}}foreach(e){this.foreach_(D(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(j(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class he{constructor(e){this.writeTree_=e}static empty(){return new he(new P(null))}}function gt(t,e,n){if(T(e))return new he(new P(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ae(s,e);return r=r.updateChild(o,n),new he(t.writeTree_.set(s,r))}else{const s=new P(n),r=t.writeTree_.setTree(e,s);return new he(r)}}}function Us(t,e,n){let i=t;return ce(n,(s,r)=>{i=gt(i,j(e,s),r)}),i}function Hs(t,e){if(T(e))return he.empty();{const n=t.writeTree_.setTree(e,new P(null));return new he(n)}}function ti(t,e){return He(t,e)!=null}function He(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ae(n.path,e)):null}function $s(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(X,(i,s)=>{e.push(new R(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new R(i,s.value))}),e}function ke(t,e){if(T(e))return t;{const n=He(t,e);return n!=null?new he(new P(n)):new he(t.writeTree_.subtree(e))}}function ni(t){return t.writeTree_.isEmpty()}function Ze(t,e){return vo(D(),t.writeTree_,e)}function vo(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=vo(j(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(j(t,".priority"),i)),n}}/**
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
 */function bo(t,e){return Io(e,t)}function Sh(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=gt(t.visibleWrites,e,n)),t.lastWriteId=i}function Ih(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Th(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Rh(a,i.path)?s=!1:ue(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Ah(t),!0;if(i.snap)t.visibleWrites=Hs(t.visibleWrites,i.path);else{const a=i.children;ce(a,c=>{t.visibleWrites=Hs(t.visibleWrites,j(i.path,c))})}return!0}else return!1}function Rh(t,e){if(t.snap)return ue(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ue(j(t.path,n),e))return!0;return!1}function Ah(t){t.visibleWrites=Eo(t.allWrites,Nh,D()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Nh(t){return t.visible}function Eo(t,e,n){let i=he.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)ue(n,o)?(a=ae(n,o),i=gt(i,a,r.snap)):ue(o,n)&&(a=ae(o,n),i=gt(i,D(),r.snap.getChild(a)));else if(r.children){if(ue(n,o))a=ae(n,o),i=Us(i,a,r.children);else if(ue(o,n))if(a=ae(o,n),T(a))i=Us(i,D(),r.children);else{const c=Xe(r.children,I(a));if(c){const l=c.getChild(M(a));i=gt(i,D(),l)}}}else throw tt("WriteRecord should have .snap or .children")}}return i}function Co(t,e,n,i,s){if(!i&&!s){const r=He(t.visibleWrites,e);if(r!=null)return r;{const o=ke(t.visibleWrites,e);if(ni(o))return n;if(n==null&&!ti(o,D()))return null;{const a=n||O.EMPTY_NODE;return Ze(o,a)}}}else{const r=ke(t.visibleWrites,e);if(!s&&ni(r))return n;if(!s&&n==null&&!ti(r,D()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(ue(l.path,e)||ue(e,l.path))},a=Eo(t.allWrites,o,e),c=n||O.EMPTY_NODE;return Ze(a,c)}}}function kh(t,e,n){let i=O.EMPTY_NODE;const s=He(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(X,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=ke(t.visibleWrites,e);return n.forEachChild(X,(o,a)=>{const c=Ze(ke(r,new L(o)),a);i=i.updateImmediateChild(o,c)}),$s(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ke(t.visibleWrites,e);return $s(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Oh(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=j(e,n);if(ti(t.visibleWrites,r))return null;{const o=ke(t.visibleWrites,r);return ni(o)?s.getChild(n):Ze(o,s.getChild(n))}}function Dh(t,e,n,i){const s=j(e,n),r=He(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=ke(t.visibleWrites,s);return Ze(o,i.getNode().getImmediateChild(n))}else return null}function xh(t,e){return He(t.visibleWrites,e)}function Ph(t,e,n,i,s,r,o){let a;const c=ke(t.visibleWrites,e),l=He(c,D());if(l!=null)a=l;else if(n!=null)a=Ze(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=d.getNext();for(;g&&h.length<s;)u(g,i)!==0&&h.push(g),g=d.getNext();return h}else return[]}function Mh(){return{visibleWrites:he.empty(),allWrites:[],lastWriteId:-1}}function ii(t,e,n,i){return Co(t.writeTree,t.treePath,e,n,i)}function wo(t,e){return kh(t.writeTree,t.treePath,e)}function js(t,e,n,i){return Oh(t.writeTree,t.treePath,e,n,i)}function en(t,e){return xh(t.writeTree,j(t.treePath,e))}function Lh(t,e,n,i,s,r){return Ph(t.writeTree,t.treePath,e,n,i,s,r)}function wi(t,e,n){return Dh(t.writeTree,t.treePath,e,n)}function So(t,e){return Io(j(t.treePath,e),t.writeTree)}function Io(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Fh{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Ls(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,dh(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,hh(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ls(i,e.snapshotNode,s.oldSnap));else throw tt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Wh{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const To=new Wh;class Si{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ci(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wi(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ue(this.viewCache_),r=Lh(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function Bh(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Uh(t,e,n,i,s){const r=new Fh;let o,a;if(n.type===me.OVERWRITE){const l=n;l.source.fromUser?o=si(t,e,l.path,l.snap,i,s,r):(f(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!T(l.path),o=tn(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===me.MERGE){const l=n;l.source.fromUser?o=$h(t,e,l.path,l.children,i,s,r):(f(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ri(t,e,l.path,l.children,i,s,a,r))}else if(n.type===me.ACK_USER_WRITE){const l=n;l.revert?o=zh(t,e,l.path,i,s,r):o=jh(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===me.LISTEN_COMPLETE)o=qh(t,e,n.path,i,r);else throw tt("Unknown operation type: "+n.type);const c=r.getChanges();return Hh(e,o,c),{viewCache:o,changes:c}}function Hh(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ei(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(uh(ei(e)))}}function Ro(t,e,n,i,s,r){const o=e.eventCache;if(en(i,n)!=null)return e;{let a,c;if(T(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Ue(e),h=l instanceof O?l:O.EMPTY_NODE,u=wo(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=ii(i,Ue(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=I(n);if(l===".priority"){f(Oe(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=js(i,n,h,c);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=M(n);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=js(i,n,o.getNode(),c);d!=null?u=o.getNode().getImmediateChild(l).updateChild(h,d):u=o.getNode().getImmediateChild(l)}else u=wi(i,l,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),l,u,h,s,r):a=o.getNode()}}return mt(e,a,o.isFullyInitialized()||T(n),t.filter.filtersNodes())}}function tn(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const h=o?t.filter:t.filter.getIndexedFilter();if(T(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),g,null)}else{const g=I(n);if(!c.isCompleteForPath(n)&&Oe(n)>1)return e;const p=M(n),y=c.getNode().getImmediateChild(g).updateChild(p,i);g===".priority"?l=h.updatePriority(c.getNode(),y):l=h.updateChild(c.getNode(),g,y,p,To,null)}const u=yo(e,l,c.isFullyInitialized()||T(n),h.filtersNodes()),d=new Si(s,u,r);return Ro(t,u,n,s,d,a)}function si(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const h=new Si(s,e,r);if(T(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=mt(e,l,!0,t.filter.filtersNodes());else{const u=I(n);if(u===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=mt(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=M(n),g=a.getNode().getImmediateChild(u);let p;if(T(d))p=i;else{const m=h.getCompleteChild(u);m!=null?no(d)===".priority"&&m.getChild(so(d)).isEmpty()?p=m:p=m.updateChild(d,i):p=O.EMPTY_NODE}if(g.equals(p))c=e;else{const m=t.filter.updateChild(a.getNode(),u,p,d,h,o);c=mt(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function qs(t,e){return t.eventCache.isCompleteForChild(e)}function $h(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const h=j(n,c);qs(e,I(h))&&(a=si(t,a,h,l,s,r,o))}),i.foreach((c,l)=>{const h=j(n,c);qs(e,I(h))||(a=si(t,a,h,l,s,r,o))}),a}function zs(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ri(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;T(n)?l=i:l=new P(null).setTree(n,i);const h=e.serverCache.getNode();return l.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),p=zs(t,g,d);c=tn(t,c,new L(u),p,s,r,o,a)}}),l.children.inorderTraversal((u,d)=>{const g=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!g){const p=e.serverCache.getNode().getImmediateChild(u),m=zs(t,p,d);c=tn(t,c,new L(u),m,s,r,o,a)}}),c}function jh(t,e,n,i,s,r,o){if(en(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(T(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return tn(t,e,n,c.getNode().getChild(n),s,r,a,o);if(T(n)){let l=new P(null);return c.getNode().forEachChild(Ke,(h,u)=>{l=l.set(new L(h),u)}),ri(t,e,n,l,s,r,a,o)}else return e}else{let l=new P(null);return i.foreach((h,u)=>{const d=j(n,h);c.isCompleteForPath(d)&&(l=l.set(h,c.getNode().getChild(d)))}),ri(t,e,n,l,s,r,a,o)}}function qh(t,e,n,i,s){const r=e.serverCache,o=yo(e,r.getNode(),r.isFullyInitialized()||T(n),r.isFiltered());return Ro(t,o,n,i,To,s)}function zh(t,e,n,i,s,r){let o;if(en(i,n)!=null)return e;{const a=new Si(i,e,s),c=e.eventCache.getNode();let l;if(T(n)||I(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ii(i,Ue(e));else{const u=e.serverCache.getNode();f(u instanceof O,"serverChildren would be complete if leaf node"),h=wo(i,u)}h=h,l=t.filter.updateFullNode(c,h,r)}else{const h=I(n);let u=wi(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?l=t.filter.updateChild(c,h,u,M(n),a,r):e.eventCache.getNode().hasChild(h)?l=t.filter.updateChild(c,h,O.EMPTY_NODE,M(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ii(i,Ue(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||en(i,D())!=null,mt(e,l,o,t.filter.filtersNodes())}}function Vh(t,e){const n=Ue(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!T(e)&&!n.getImmediateChild(I(e)).isEmpty())?n.getChild(e):null}function Vs(t,e,n,i){e.type===me.MERGE&&e.source.queryId!==null&&(f(Ue(t.viewCache_),"We should always have a full cache before handling merges"),f(ei(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Uh(t.processor_,s,e,n,i);return Bh(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Gh(t,r.changes,r.viewCache.eventCache.getNode())}function Gh(t,e,n,i){const s=t.eventRegistrations_;return bh(t.eventGenerator_,e,n,s)}/**
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
 */let Gs;function Kh(t){f(!Gs,"__referenceConstructor has already been defined"),Gs=t}function Ii(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),Vs(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Vs(o,e,n,i));return r}}function Ti(t,e){let n=null;for(const i of t.views.values())n=n||Vh(i,e);return n}/**
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
 */let Ks;function Yh(t){f(!Ks,"__referenceConstructor has already been defined"),Ks=t}class Ys{constructor(e){this.listenProvider_=e,this.syncPointTree_=new P(null),this.pendingWriteTree_=Mh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ao(t,e,n,i,s){return Sh(t.pendingWriteTree_,e,n,i,s),s?hn(t,new Be(po(),e,n)):[]}function Fe(t,e,n=!1){const i=Ih(t.pendingWriteTree_,e);if(Th(t.pendingWriteTree_,e)){let r=new P(null);return i.snap!=null?r=r.set(D(),!0):ce(i.children,o=>{r=r.set(new L(o),!0)}),hn(t,new Zt(i.path,r,n))}else return[]}function un(t,e,n){return hn(t,new Be(_o(),e,n))}function Qh(t,e,n){const i=P.fromObject(n);return hn(t,new It(_o(),e,i))}function Xh(t,e,n,i){const s=Oo(t,i);if(s!=null){const r=Do(s),o=r.path,a=r.queryId,c=ae(o,e),l=new Be(mo(a),c,n);return xo(t,o,l)}else return[]}function Jh(t,e,n,i){const s=Oo(t,i);if(s){const r=Do(s),o=r.path,a=r.queryId,c=ae(o,e),l=P.fromObject(n),h=new It(mo(a),c,l);return xo(t,o,h)}else return[]}function Ri(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=ae(o,e),l=Ti(a,c);if(l)return l});return Co(s,e,r,n,!0)}function hn(t,e){return No(e,t.syncPointTree_,null,bo(t.pendingWriteTree_,D()))}function No(t,e,n,i){if(T(t.path))return ko(t,e,n,i);{const s=e.get(D());n==null&&s!=null&&(n=Ti(s,D()));let r=[];const o=I(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,h=So(i,o);r=r.concat(No(a,c,l,h))}return s&&(r=r.concat(Ii(s,t,i,n))),r}}function ko(t,e,n,i){const s=e.get(D());n==null&&s!=null&&(n=Ti(s,D()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=So(i,o),h=t.operationForChild(o);h&&(r=r.concat(ko(h,a,c,l)))}),s&&(r=r.concat(Ii(s,t,i,n))),r}function Oo(t,e){return t.tagToQueryMap.get(e)}function Do(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new L(t.substr(0,e))}}function xo(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=bo(t.pendingWriteTree_,e);return Ii(i,n,s,null)}/**
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
 */class Ai{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ai(n)}node(){return this.node_}}class Ni{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=j(this.path_,e);return new Ni(this.syncTree_,n)}node(){return Ri(this.syncTree_,this.path_)}}const Zh=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qs=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ed(t[".sv"],e,n);if(typeof t[".sv"]=="object")return td(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ed=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},td=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},nd=function(t,e,n,i){return ki(e,new Ni(n,t),i)},Po=function(t,e,n){return ki(t,new Ai(e),n)};function ki(t,e,n){const i=t.getPriority().val(),s=Qs(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Qs(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new q(a,G(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new q(s))),o.forEachChild(X,(a,c)=>{const l=ki(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class Oi{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Di(t,e){let n=e instanceof L?e:new L(e),i=t,s=I(n);for(;s!==null;){const r=Xe(i.node.children,s)||{children:{},childCount:0};i=new Oi(s,i,r),n=M(n),s=I(n)}return i}function rt(t){return t.node.value}function Mo(t,e){t.node.value=e,oi(t)}function Lo(t){return t.node.childCount>0}function id(t){return rt(t)===void 0&&!Lo(t)}function dn(t,e){ce(t.node.children,(n,i)=>{e(new Oi(n,t,i))})}function Fo(t,e,n,i){n&&e(t),dn(t,s=>{Fo(s,e,!0)})}function sd(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ot(t){return new L(t.parent===null?t.name:Ot(t.parent)+"/"+t.name)}function oi(t){t.parent!==null&&rd(t.parent,t.name,t)}function rd(t,e,n){const i=id(n),s=Ie(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,oi(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,oi(t))}/**
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
 */const od=/[\[\].#$\/\u0000-\u001F\u007F]/,ad=/[\[\].#$\u0000-\u001F\u007F]/,Ln=10*1024*1024,Wo=function(t){return typeof t=="string"&&t.length!==0&&!od.test(t)},Bo=function(t){return typeof t=="string"&&t.length!==0&&!ad.test(t)},cd=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Bo(t)},Uo=function(t,e,n,i){i&&e===void 0||xi(fi(t,"value"),e,n)},xi=function(t,e,n){const i=n instanceof L?new qu(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Me(i));if(typeof e=="function")throw new Error(t+"contains a function "+Me(i)+" with contents = "+e.toString());if(Mr(e))throw new Error(t+"contains "+e.toString()+" "+Me(i));if(typeof e=="string"&&e.length>Ln/3&&cn(e)>Ln)throw new Error(t+"contains a string greater than "+Ln+" utf8 bytes "+Me(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ce(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Wo(o)))throw new Error(t+" contains an invalid key ("+o+") "+Me(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zu(i,o),xi(t,a,i),Vu(i)}),s&&r)throw new Error(t+' contains ".value" child '+Me(i)+" in addition to actual children.")}},Ho=function(t,e,n,i){if(!Bo(n))throw new Error(fi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ld=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ho(t,e,n)},$o=function(t,e){if(I(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ud=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!cd(n))throw new Error(fi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class hd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jo(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!ro(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Se(t,e,n){jo(t,n),dd(t,i=>ue(i,e)||ue(e,i))}function dd(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(fd(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fd(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();pt&&Q("event: "+n.toString()),st(i)}}}/**
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
 */const pd="repo_interrupt",_d=25;class md{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jt(),this.transactionQueueTree_=new Oi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gd(t,e,n){if(t.stats_=gi(t.repoInfo_),t.forceRestClient_||_u())t.server_=new Xt(t.repoInfo_,(i,s,r,o)=>{Xs(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Js(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{K(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Ee(t.repoInfo_,e,(i,s,r,o)=>{Xs(t,i,s,r,o)},i=>{Js(t,i)},i=>{yd(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=bu(t.repoInfo_,()=>new vh(t.stats_,t.server_)),t.infoData_=new ph,t.infoSyncTree_=new Ys({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=un(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Mi(t,"connected",!1),t.serverSyncTree_=new Ys({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);Se(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function qo(t){const n=t.infoData_.getNode(new L(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Pi(t){return Zh({timestamp:qo(t)})}function Xs(t,e,n,i,s){t.dataUpdateCount++;const r=new L(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=zt(n,l=>G(l));o=Jh(t.serverSyncTree_,r,c,s)}else{const c=G(n);o=Xh(t.serverSyncTree_,r,c,s)}else if(i){const c=zt(n,l=>G(l));o=Qh(t.serverSyncTree_,r,c)}else{const c=G(n);o=un(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=fn(t,r)),Se(t.eventQueue_,a,o)}function Js(t,e){Mi(t,"connected",e),e===!1&&bd(t)}function yd(t,e){ce(e,(n,i)=>{Mi(t,n,i)})}function Mi(t,e,n){const i=new L("/.info/"+e),s=G(n);t.infoData_.updateSnapshot(i,s);const r=un(t.infoSyncTree_,i,s);Se(t.eventQueue_,i,r)}function zo(t){return t.nextWriteId_++}function vd(t,e,n,i,s){Li(t,"set",{path:e.toString(),value:n,priority:i});const r=Pi(t),o=G(n,i),a=Ri(t.serverSyncTree_,e),c=Po(o,a,r),l=zo(t),h=Ao(t.serverSyncTree_,e,c,l,!0);jo(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const p=d==="ok";p||ne("set at "+e+" failed: "+d);const m=Fe(t.serverSyncTree_,l,!p);Se(t.eventQueue_,e,m),Cd(t,s,d,g)});const u=Qo(t,e);fn(t,u),Se(t.eventQueue_,u,[])}function bd(t){Li(t,"onDisconnectEvents");const e=Pi(t),n=Jt();Zn(t.onDisconnect_,D(),(s,r)=>{const o=nd(s,r,t.serverSyncTree_,e);fo(n,s,o)});let i=[];Zn(n,D(),(s,r)=>{i=i.concat(un(t.serverSyncTree_,s,r));const o=Qo(t,s);fn(t,o)}),t.onDisconnect_=Jt(),Se(t.eventQueue_,D(),i)}function Ed(t){t.persistentConnection_&&t.persistentConnection_.interrupt(pd)}function Li(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Q(n,...e)}function Cd(t,e,n,i){e&&st(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Vo(t,e,n){return Ri(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Fi(t,e=t.transactionQueueTree_){if(e||pn(t,e),rt(e)){const n=Ko(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&wd(t,Ot(e),n)}else Lo(e)&&dn(e,n=>{Fi(t,n)})}function wd(t,e,n){const i=n.map(l=>l.currentWriteId),s=Vo(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const h=n[l];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ae(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{Li(t,"transaction put response",{path:c.toString(),status:l});let h=[];if(l==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Fe(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();pn(t,Di(t.transactionQueueTree_,e)),Fi(t,t.transactionQueueTree_),Se(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)st(u[d])}else{if(l==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{ne("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=l}fn(t,e)}},o)}function fn(t,e){const n=Go(t,e),i=Ot(n),s=Ko(t,n);return Sd(t,s,i),i}function Sd(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ae(n,c.path);let h=!1,u;if(f(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,s=s.concat(Fe(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=_d)h=!0,u="maxretry",s=s.concat(Fe(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Vo(t,c.path,o);c.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){xi("transaction failed: Data returned ",g,c.path);let p=G(g);typeof g=="object"&&g!=null&&Ie(g,".priority")||(p=p.updatePriority(d.getPriority()));const y=c.currentWriteId,w=Pi(t),A=Po(p,d,w);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=A,c.currentWriteId=zo(t),o.splice(o.indexOf(y),1),s=s.concat(Ao(t.serverSyncTree_,c.path,A,c.currentWriteId,c.applyLocally)),s=s.concat(Fe(t.serverSyncTree_,y,!0))}else h=!0,u="nodata",s=s.concat(Fe(t.serverSyncTree_,c.currentWriteId,!0))}Se(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}pn(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)st(i[a]);Fi(t,t.transactionQueueTree_)}function Go(t,e){let n,i=t.transactionQueueTree_;for(n=I(e);n!==null&&rt(i)===void 0;)i=Di(i,n),e=M(e),n=I(e);return i}function Ko(t,e){const n=[];return Yo(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Yo(t,e,n){const i=rt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);dn(e,s=>{Yo(t,s,n)})}function pn(t,e){const n=rt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Mo(e,n.length>0?n:void 0)}dn(e,i=>{pn(t,i)})}function Qo(t,e){const n=Ot(Go(t,e)),i=Di(t.transactionQueueTree_,e);return sd(i,s=>{Fn(t,s)}),Fn(t,i),Fo(i,s=>{Fn(t,s)}),n}function Fn(t,e){const n=rt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Fe(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Mo(e,void 0):n.length=r+1,Se(t.eventQueue_,Ot(e),s);for(let o=0;o<i.length;o++)st(i[o])}}/**
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
 */function Id(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Td(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ne(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zs=function(t,e){const n=Rd(t),i=n.namespace;n.domain==="firebase.com"&&we(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&we("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||au();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Gr(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new L(n.pathString)}},Rd=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=Id(t.substring(h,u)));const d=Td(t.substring(Math.min(t.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const g=e.slice(0,l);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const er="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ad=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=er.charAt(n%64),n=Math.floor(n/64);f(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=er.charAt(e[s]);return f(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Wi{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return T(this._path)?null:no(this._path)}get ref(){return new $e(this._repo,this._path)}get _queryIdentifier(){const e=Ws(this._queryParams),n=_i(e);return n==="{}"?"default":n}get _queryObject(){return Ws(this._queryParams)}isEqual(e){if(e=nt(e),!(e instanceof Wi))return!1;const n=this._repo===e._repo,i=ro(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ju(this._path)}}class $e extends Wi{constructor(e,n){super(e,n,new Ei,!1)}get parent(){const e=so(this._path);return e===null?null:new $e(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Zd(t,e){return t=nt(t),t._checkNotDeleted("ref"),ai(t._root,e)}function ai(t,e){return t=nt(t),I(t._path)===null?ld("child","path",e):Ho("child","path",e),new $e(t._repo,j(t._path,e))}function ef(t,e){t=nt(t),$o("push",t._path),Uo("push",e,t._path,!0);const n=qo(t._repo),i=Ad(n),s=ai(t,i),r=ai(t,i);let o;return e!=null?o=Nd(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Nd(t,e){t=nt(t),$o("set",t._path),Uo("set",e,t._path,!1);const n=new an;return vd(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}Kh($e);Yh($e);/**
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
 */const kd="FIREBASE_DATABASE_EMULATOR_HOST",ci={};let Od=!1;function Dd(t,e,n,i){t.repoInfo_=new Gr(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function xd(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||we("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Q("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zs(r,s),a=o.repoInfo,c;typeof process<"u"&&vs&&(c=vs[kd]),c?(r=`http://${c}?ns=${a.namespace}`,o=Zs(r,s),a=o.repoInfo):o.repoInfo.secure;const l=new gu(t.name,t.options,e);ud("Invalid Firebase Database URL",o),T(o.path)||we("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Md(a,t,l,new mu(t.name,n));return new Ld(h,t)}function Pd(t,e){const n=ci[e];(!n||n[t.key]!==t)&&we(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ed(t),delete n[t.key]}function Md(t,e,n,i){let s=ci[e.name];s||(s={},ci[e.name]=s);let r=s[t.toURLString()];return r&&we("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new md(t,Od,n,i),s[t.toURLString()]=r,r}class Ld{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $e(this._repo,D())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Pd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&we("Cannot call "+e+" on a deleted database.")}}function tf(t=jl(),e){const n=Wl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Rc("database");i&&Fd(n,...i)}return n}function Fd(t,e,n,i={}){t=nt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&we("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&we('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ut(Ut.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Ac(i.mockUserToken,t.app.options.projectId);r=new Ut(o)}Dd(s,e,n,r)}/**
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
 */function Wd(t){tu(Hl),Gt(new Ct("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xd(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ve(bs,Es,t),Ve(bs,Es,"esm2017")}Ee.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ee.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Wd();export{Vd as _,$d as a,ka as b,qd as c,cr as d,jd as e,zd as f,Ud as g,Gd as h,Oa as i,Wn as j,Yd as k,Kd as l,Qd as m,Xi as n,Jd as o,Xd as p,$l as q,Hd as r,Wa as s,tf as t,Ua as u,Zd as v,ef as w};
