import{g as C,S as oe,Q as re,_ as ne,a as se}from"./green.0f01b477.js";import{o as ae,j as le,k as ce,d as dt,K as _t,l as y,Q as fe,M as O}from"./index.63f5ccbc.js";import{Q as he}from"./QPage.8ad68dfe.js";var pe="/assets/story.3cc3fe5a.png",ue="/assets/\u7406\u5FF5\u6545\u4E8Bsu.4142b403.png",ge="/assets/\u7406\u5FF5\u6545\u4E8Bsi.01c70f0c.png",de="/assets/info.ae138798.svg",_e="/assets/\u677E\u679C.c23748c8.svg",ye="/assets/\u8449\u5B500.fb651eb9.png",xe="/assets/\u5BB6\u5177.1938f4c2.jpg",me="/assets/\u722C\u5C71.62c85701.jpg",ve="/assets/plan.f34d6152.svg",be="/assets/goods.ec810dba.svg",we="/assets/\u5496\u5561\u74F6(\u6709\u76D2)(500).f9c1896d.png",Pe="/assets/\u5BB6\u5EAD0.fca57270.jpg",Se="/assets/btn.6ab1f451.svg";/*!
 * paths 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Me=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Te=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Le=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Ce=/(^[#\.][a-z]|[a-y][a-z])/i,Ne=Math.PI/180,Ae=180/Math.PI,at=Math.sin,lt=Math.cos,k=Math.abs,Y=Math.sqrt,Re=Math.atan2,vt=1e8,Rt=function(t){return typeof t=="string"},Xt=function(t){return typeof t=="number"},Oe=function(t){return typeof t=="undefined"},Be={},De={},ht=1e5,Gt=function(t){return Math.round((t+vt)%1*ht)/ht||(t<0?0:1)},M=function(t){return Math.round(t*ht)/ht||0},Ot=function(t){return Math.round(t*1e10)/1e10||0},Bt=function(t,e,i,o){var n=t[e],a=o===1?6:bt(n,i,o);if(a&&a+i+2<n.length)return t.splice(e,0,n.slice(0,i+a+2)),n.splice(0,i+a),1},Yt=function(t,e,i){var o=t.length,n=~~(i*o);if(t[n]>e){for(;--n&&t[n]>e;);n<0&&(n=0)}else for(;t[++n]<e&&n<o;);return n<o?n:o-1},ke=function(t,e){var i=t.length;for(e||t.reverse();i--;)t[i].reversed||qe(t[i])},Dt=function(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e},Ee=function(t,e){var i=t.length,o=t[i-1]||[],n=o.length;i&&e[0]===o[n-2]&&e[1]===o[n-1]&&(e=o.concat(e.slice(2)),i--),t[i]=e};function ct(r){r=Rt(r)&&Ce.test(r)&&document.querySelector(r)||r;var t=r.getAttribute?r:0,e;return t&&(r=r.getAttribute("d"))?(t._gsPath||(t._gsPath={}),e=t._gsPath[r],e&&!e._dirty?e:t._gsPath[r]=pt(r)):r?Rt(r)?pt(r):Xt(r[0])?[r]:r:console.warn("Expecting a <path> element or an SVG path data string")}function je(r){for(var t=[],e=0;e<r.length;e++)t[e]=Dt(r[e],r[e].slice(0));return Dt(r,t)}function qe(r){var t=0,e;for(r.reverse();t<r.length;t+=2)e=r[t],r[t]=r[t+1],r[t+1]=e;r.reversed=!r.reversed}var Ve=function(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg","path"),o=[].slice.call(t.attributes),n=o.length,a;for(e=","+e+",";--n>-1;)a=o[n].nodeName.toLowerCase(),e.indexOf(","+a+",")<0&&i.setAttributeNS(null,a,o[n].nodeValue);return i},Xe={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},Ge=function(t,e){for(var i=e?e.split(","):[],o={},n=i.length;--n>-1;)o[i[n]]=+t.getAttribute(i[n])||0;return o};function Ye(r,t){var e=r.tagName.toLowerCase(),i=.552284749831,o,n,a,c,l,s,p,f,h,g,d,u,_,x,m,v,P,w,b,T,L,S;return e==="path"||!r.getBBox?r:(s=Ve(r,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),S=Ge(r,Xe[e]),e==="rect"?(c=S.rx,l=S.ry||c,n=S.x,a=S.y,g=S.width-c*2,d=S.height-l*2,c||l?(u=n+c*(1-i),_=n+c,x=_+g,m=x+c*i,v=x+c,P=a+l*(1-i),w=a+l,b=w+d,T=b+l*i,L=b+l,o="M"+v+","+w+" V"+b+" C"+[v,T,m,L,x,L,x-(x-_)/3,L,_+(x-_)/3,L,_,L,u,L,n,T,n,b,n,b-(b-w)/3,n,w+(b-w)/3,n,w,n,P,u,a,_,a,_+(x-_)/3,a,x-(x-_)/3,a,x,a,m,a,v,P,v,w].join(",")+"z"):o="M"+(n+g)+","+a+" v"+d+" h"+-g+" v"+-d+" h"+g+"z"):e==="circle"||e==="ellipse"?(e==="circle"?(c=l=S.r,f=c*i):(c=S.rx,l=S.ry,f=l*i),n=S.cx,a=S.cy,p=c*i,o="M"+(n+c)+","+a+" C"+[n+c,a+f,n+p,a+l,n,a+l,n-p,a+l,n-c,a+f,n-c,a,n-c,a-f,n-p,a-l,n,a-l,n+p,a-l,n+c,a-f,n+c,a].join(",")+"z"):e==="line"?o="M"+S.x1+","+S.y1+" L"+S.x2+","+S.y2:(e==="polyline"||e==="polygon")&&(h=(r.getAttribute("points")+"").match(Te)||[],n=h.shift(),a=h.shift(),o="M"+n+","+a+" L"+h.join(","),e==="polygon"&&(o+=","+n+","+a+"z")),s.setAttribute("d",Zt(s._gsRawPath=pt(o))),t&&r.parentNode&&(r.parentNode.insertBefore(s,r),r.parentNode.removeChild(r)),s)}function zt(r,t,e){var i=r[t],o=r[t+2],n=r[t+4],a;return i+=(o-i)*e,o+=(n-o)*e,i+=(o-i)*e,a=o+(n+(r[t+6]-n)*e-o)*e-i,i=r[t+1],o=r[t+3],n=r[t+5],i+=(o-i)*e,o+=(n-o)*e,i+=(o-i)*e,M(Re(o+(n+(r[t+7]-n)*e-o)*e-i,a)*Ae)}function It(r,t,e){e=Oe(e)?1:Ot(e)||0,t=Ot(t)||0;var i=Math.max(0,~~(k(e-t)-1e-8)),o=je(r);if(t>e&&(t=1-t,e=1-e,ke(o),o.totalLength=0),t<0||e<0){var n=Math.abs(~~Math.min(t,e))+1;t+=n,e+=n}o.totalLength||U(o);var a=e>1,c=kt(o,t,Be,!0),l=kt(o,e,De),s=l.segment,p=c.segment,f=l.segIndex,h=c.segIndex,g=l.i,d=c.i,u=h===f,_=g===d&&u,x,m,v,P,w,b,T,L;if(a||i){for(x=f<h||u&&g<d||_&&l.t<c.t,Bt(o,h,d,c.t)&&(h++,x||(f++,_?(l.t=(l.t-c.t)/(1-c.t),g=0):u&&(g-=d))),Math.abs(1-(e-t))<1e-5?f=h-1:!l.t&&f?f--:Bt(o,f,g,l.t)&&x&&h++,c.t===1&&(h=(h+1)%o.length),w=[],b=o.length,T=1+b*i,L=h,T+=(b-h+f)%b,P=0;P<T;P++)Ee(w,o[L++%b]);o=w}else if(v=l.t===1?6:bt(s,g,l.t),t!==e)for(m=bt(p,d,_?c.t/l.t:c.t),u&&(v+=m),s.splice(g+v+2),(m||d)&&p.splice(0,d+m),P=o.length;P--;)(P<h||P>f)&&o.splice(P,1);else s.angle=zt(s,g+v,0),g+=v,c=s[g],l=s[g+1],s.length=s.totalLength=0,s.totalPoints=o.totalPoints=8,s.push(c,l,c,l,c,l,c,l);return o.totalLength=0,o}function ze(r,t,e){t=t||0,r.samples||(r.samples=[],r.lookup=[]);var i=~~r.resolution||12,o=1/i,n=e?t+e*6+1:r.length,a=r[t],c=r[t+1],l=t?t/6*i:0,s=r.samples,p=r.lookup,f=(t?r.minLength:vt)||vt,h=s[l+e*i-1],g=t?s[l-1]:0,d,u,_,x,m,v,P,w,b,T,L,S,N,A,j,B,$;for(s.length=p.length=0,u=t+2;u<n;u+=6){if(_=r[u+4]-a,x=r[u+2]-a,m=r[u]-a,w=r[u+5]-c,b=r[u+3]-c,T=r[u+1]-c,v=P=L=S=0,k(_)<.01&&k(w)<.01&&k(m)+k(T)<.01)r.length>8&&(r.splice(u,6),u-=6,n-=6);else for(d=1;d<=i;d++)A=o*d,N=1-A,v=P-(P=(A*A*_+3*N*(A*x+N*m))*A),L=S-(S=(A*A*w+3*N*(A*b+N*T))*A),B=Y(L*L+v*v),B<f&&(f=B),g+=B,s[l++]=g;a+=_,c+=w}if(h)for(h-=g;l<s.length;l++)s[l]+=h;if(s.length&&f){if(r.totalLength=$=s[s.length-1]||0,r.minLength=f,$/f<9999)for(B=j=0,d=0;d<$;d+=f)p[B++]=s[j]<d?++j:j}else r.totalLength=s[0]=0;return t?g-s[t/2-1]:g}function U(r,t){var e,i,o;for(o=e=i=0;o<r.length;o++)r[o].resolution=~~t||12,i+=r[o].length,e+=ze(r[o]);return r.totalPoints=i,r.totalLength=e,r}function bt(r,t,e){if(e<=0||e>=1)return 0;var i=r[t],o=r[t+1],n=r[t+2],a=r[t+3],c=r[t+4],l=r[t+5],s=r[t+6],p=r[t+7],f=i+(n-i)*e,h=n+(c-n)*e,g=o+(a-o)*e,d=a+(l-a)*e,u=f+(h-f)*e,_=g+(d-g)*e,x=c+(s-c)*e,m=l+(p-l)*e;return h+=(x-h)*e,d+=(m-d)*e,r.splice(t+2,4,M(f),M(g),M(u),M(_),M(u+(h-u)*e),M(_+(d-_)*e),M(h),M(d),M(x),M(m)),r.samples&&r.samples.splice(t/6*r.resolution|0,0,0,0,0,0,0,0),6}function kt(r,t,e,i){e=e||{},r.totalLength||U(r),(t<0||t>1)&&(t=Gt(t));var o=0,n=r[0],a,c,l,s,p,f,h;if(!t)h=f=o=0,n=r[0];else if(t===1)h=1,o=r.length-1,n=r[o],f=n.length-8;else{if(r.length>1){for(l=r.totalLength*t,p=f=0;(p+=r[f++].totalLength)<l;)o=f;n=r[o],s=p-n.totalLength,t=(l-s)/(p-s)||0}a=n.samples,c=n.resolution,l=n.totalLength*t,f=n.lookup.length?n.lookup[~~(l/n.minLength)]||0:Yt(a,l,t),s=f?a[f-1]:0,p=a[f],p<l&&(s=p,p=a[++f]),h=1/c*((l-s)/(p-s)+f%c),f=~~(f/c)*6,i&&h===1&&(f+6<n.length?(f+=6,h=0):o+1<r.length&&(f=h=0,n=r[++o]))}return e.t=h,e.i=f,e.path=r,e.segment=n,e.segIndex=o,e}function Et(r,t,e,i){var o=r[0],n=i||{},a,c,l,s,p,f,h,g,d;if((t<0||t>1)&&(t=Gt(t)),r.length>1){for(l=r.totalLength*t,p=f=0;(p+=r[f++].totalLength)<l;)o=r[f];s=p-o.totalLength,t=(l-s)/(p-s)||0}return a=o.samples,c=o.resolution,l=o.totalLength*t,f=o.lookup.length?o.lookup[t<1?~~(l/o.minLength):o.lookup.length-1]||0:Yt(a,l,t),s=f?a[f-1]:0,p=a[f],p<l&&(s=p,p=a[++f]),h=1/c*((l-s)/(p-s)+f%c)||0,d=1-h,f=~~(f/c)*6,g=o[f],n.x=M((h*h*(o[f+6]-g)+3*d*(h*(o[f+4]-g)+d*(o[f+2]-g)))*h+g),n.y=M((h*h*(o[f+7]-(g=o[f+1]))+3*d*(h*(o[f+5]-g)+d*(o[f+3]-g)))*h+g),e&&(n.angle=o.totalLength?zt(o,f,h>=1?1-1e-9:h||1e-9):o.angle||0),n}function K(r,t,e,i,o,n,a){for(var c=r.length,l,s,p,f,h;--c>-1;)for(l=r[c],s=l.length,p=0;p<s;p+=2)f=l[p],h=l[p+1],l[p]=f*t+h*i+n,l[p+1]=f*e+h*o+a;return r._dirty=1,r}function Ie(r,t,e,i,o,n,a,c,l){if(!(r===c&&t===l)){e=k(e),i=k(i);var s=o%360*Ne,p=lt(s),f=at(s),h=Math.PI,g=h*2,d=(r-c)/2,u=(t-l)/2,_=p*d+f*u,x=-f*d+p*u,m=_*_,v=x*x,P=m/(e*e)+v/(i*i);P>1&&(e=Y(P)*e,i=Y(P)*i);var w=e*e,b=i*i,T=(w*b-w*v-b*m)/(w*v+b*m);T<0&&(T=0);var L=(n===a?-1:1)*Y(T),S=L*(e*x/i),N=L*-(i*_/e),A=(r+c)/2,j=(t+l)/2,B=A+(p*S-f*N),$=j+(f*S+p*N),q=(_-S)/e,V=(x-N)/i,ot=(-_-S)/e,rt=(-x-N)/i,Ct=q*q+V*V,Nt=(V<0?-1:1)*Math.acos(q/Y(Ct)),X=(q*rt-V*ot<0?-1:1)*Math.acos((q*ot+V*rt)/Y(Ct*(ot*ot+rt*rt)));isNaN(X)&&(X=h),!a&&X>0?X-=g:a&&X<0&&(X+=g),Nt%=g,X%=g;var At=Math.ceil(k(X)/(g/4)),G=[],nt=X/At,st=4/3*at(nt/2)/(1+lt(nt/2)),Jt=p*e,te=f*e,ee=f*-i,ie=p*i,R;for(R=0;R<At;R++)o=Nt+R*nt,_=lt(o),x=at(o),q=lt(o+=nt),V=at(o),G.push(_-st*x,x+st*_,q+st*V,V-st*q,q,V);for(R=0;R<G.length;R+=2)_=G[R],x=G[R+1],G[R]=_*Jt+x*ee+B,G[R+1]=_*te+x*ie+$;return G[R-2]=c,G[R-1]=l,G}}function pt(r){var t=(r+"").replace(Le,function(S){var N=+S;return N<1e-4&&N>-1e-4?0:N}).match(Me)||[],e=[],i=0,o=0,n=2/3,a=t.length,c=0,l="ERROR: malformed path: "+r,s,p,f,h,g,d,u,_,x,m,v,P,w,b,T,L=function(N,A,j,B){m=(j-N)/3,v=(B-A)/3,u.push(N+m,A+v,j-m,B-v,j,B)};if(!r||!isNaN(t[0])||isNaN(t[1]))return console.log(l),e;for(s=0;s<a;s++)if(w=g,isNaN(t[s])?(g=t[s].toUpperCase(),d=g!==t[s]):s--,f=+t[s+1],h=+t[s+2],d&&(f+=i,h+=o),s||(_=f,x=h),g==="M")u&&(u.length<8?e.length-=1:c+=u.length),i=_=f,o=x=h,u=[f,h],e.push(u),s+=2,g="L";else if(g==="C")u||(u=[0,0]),d||(i=o=0),u.push(f,h,i+t[s+3]*1,o+t[s+4]*1,i+=t[s+5]*1,o+=t[s+6]*1),s+=6;else if(g==="S")m=i,v=o,(w==="C"||w==="S")&&(m+=i-u[u.length-4],v+=o-u[u.length-3]),d||(i=o=0),u.push(m,v,f,h,i+=t[s+3]*1,o+=t[s+4]*1),s+=4;else if(g==="Q")m=i+(f-i)*n,v=o+(h-o)*n,d||(i=o=0),i+=t[s+3]*1,o+=t[s+4]*1,u.push(m,v,i+(f-i)*n,o+(h-o)*n,i,o),s+=4;else if(g==="T")m=i-u[u.length-4],v=o-u[u.length-3],u.push(i+m,o+v,f+(i+m*1.5-f)*n,h+(o+v*1.5-h)*n,i=f,o=h),s+=2;else if(g==="H")L(i,o,i=f,o),s+=1;else if(g==="V")L(i,o,i,o=f+(d?o-i:0)),s+=1;else if(g==="L"||g==="Z")g==="Z"&&(f=_,h=x,u.closed=!0),(g==="L"||k(i-f)>.5||k(o-h)>.5)&&(L(i,o,f,h),g==="L"&&(s+=2)),i=f,o=h;else if(g==="A"){if(b=t[s+4],T=t[s+5],m=t[s+6],v=t[s+7],p=7,b.length>1&&(b.length<3?(v=m,m=T,p--):(v=T,m=b.substr(2),p-=2),T=b.charAt(1),b=b.charAt(0)),P=Ie(i,o,+t[s+1],+t[s+2],+t[s+3],+b,+T,(d?i:0)+m*1,(d?o:0)+v*1),s+=p,P)for(p=0;p<P.length;p++)u.push(P[p]);i=u[u.length-2],o=u[u.length-1]}else console.log(l);return s=u.length,s<6?(e.pop(),s=0):u[0]===u[s-2]&&u[1]===u[s-1]&&(u.closed=!0),e.totalPoints=c+s,e}function Ze(r,t){t===void 0&&(t=1);for(var e=r[0],i=0,o=[e,i],n=2;n<r.length;n+=2)o.push(e,i,r[n],i=(r[n]-e)*t/2,e=r[n],-i);return o}function wt(r,t){k(r[0]-r[2])<1e-4&&k(r[1]-r[3])<1e-4&&(r=r.slice(2));var e=r.length-2,i=+r[0],o=+r[1],n=+r[2],a=+r[3],c=[i,o,i,o],l=n-i,s=a-o,p=Math.abs(r[e]-i)<.001&&Math.abs(r[e+1]-o)<.001,f,h,g,d,u,_,x,m,v,P,w,b,T,L,S;for(p&&(r.push(n,a),n=i,a=o,i=r[e-2],o=r[e-1],r.unshift(i,o),e+=4),t=t||t===0?+t:1,g=2;g<e;g+=2)f=i,h=o,i=n,o=a,n=+r[g+2],a=+r[g+3],!(i===n&&o===a)&&(d=l,u=s,l=n-i,s=a-o,_=Y(d*d+u*u),x=Y(l*l+s*s),m=Y(Math.pow(l/x+d/_,2)+Math.pow(s/x+u/_,2)),v=(_+x)*t*.25/m,P=i-(i-f)*(_?v/_:0),w=i+(n-i)*(x?v/x:0),b=i-(P+((w-P)*(_*3/(_+x)+.5)/4||0)),T=o-(o-h)*(_?v/_:0),L=o+(a-o)*(x?v/x:0),S=o-(T+((L-T)*(_*3/(_+x)+.5)/4||0)),(i!==f||o!==h)&&c.push(M(P+b),M(T+S),M(i),M(o),M(w+b),M(L+S)));return i!==n||o!==a||c.length<4?c.push(M(n),M(a),M(n),M(a)):c.length-=2,c.length===2?c.push(i,o,i,o,i,o):p&&(c.splice(0,6),c.length=c.length-6),c}function Zt(r){Xt(r[0])&&(r=[r]);var t="",e=r.length,i,o,n,a;for(o=0;o<e;o++){for(a=r[o],t+="M"+M(a[0])+","+M(a[1])+" C",i=a.length,n=2;n<i;n++)t+=M(a[n++])+","+M(a[n++])+" "+M(a[n++])+","+M(a[n++])+" "+M(a[n++])+","+M(a[n])+" ";a.closed&&(t+="z")}return t}/*!
 * matrix 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var z,I,Tt,Q,J,ft,ut,et,E="transform",Pt=E+"Origin",Ft,Ut=function(t){var e=t.ownerDocument||t;for(!(E in t.style)&&("msTransform"in t.style)&&(E="msTransform",Pt=E+"Origin");e.parentNode&&(e=e.parentNode););if(I=window,ut=new it,e){z=e,Tt=e.documentElement,Q=e.body,et=z.createElementNS("http://www.w3.org/2000/svg","g"),et.style.transform="none";var i=e.createElement("div"),o=e.createElement("div");Q.appendChild(i),i.appendChild(o),i.style.position="static",i.style[E]="translate3d(0,0,1px)",Ft=o.offsetParent!==i,Q.removeChild(i)}return e},Fe=function(t){for(var e,i;t&&t!==Q;)i=t._gsap,i&&i.uncache&&i.get(t,"x"),i&&!i.scaleX&&!i.scaleY&&i.renderTransform&&(i.scaleX=i.scaleY=1e-4,i.renderTransform(1,i),e?e.push(i):e=[i]),t=t.parentNode;return e},Qt=[],Wt=[],Ue=function(){return I.pageYOffset||z.scrollTop||Tt.scrollTop||Q.scrollTop||0},Qe=function(){return I.pageXOffset||z.scrollLeft||Tt.scrollLeft||Q.scrollLeft||0},Lt=function(t){return t.ownerSVGElement||((t.tagName+"").toLowerCase()==="svg"?t:null)},We=function r(t){if(I.getComputedStyle(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return r(t)},yt=function r(t,e){if(t.parentNode&&(z||Ut(t))){var i=Lt(t),o=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",n=i?e?"rect":"g":"div",a=e!==2?0:100,c=e===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",s=z.createElementNS?z.createElementNS(o.replace(/^https/,"http"),n):z.createElement(n);return e&&(i?(ft||(ft=r(t)),s.setAttribute("width",.01),s.setAttribute("height",.01),s.setAttribute("transform","translate("+a+","+c+")"),ft.appendChild(s)):(J||(J=r(t),J.style.cssText=l),s.style.cssText=l+"width:0.1px;height:0.1px;top:"+c+"px;left:"+a+"px",J.appendChild(s))),s}throw"Need document and parent."},$e=function(t){for(var e=new it,i=0;i<t.numberOfItems;i++)e.multiply(t.getItem(i).matrix);return e},He=function(t){var e=t.getCTM(),i;return e||(i=t.style[E],t.style[E]="none",t.appendChild(et),e=et.getCTM(),t.removeChild(et),i?t.style[E]=i:t.style.removeProperty(E.replace(/([A-Z])/g,"-$1").toLowerCase())),e||ut.clone()},Ke=function(t,e){var i=Lt(t),o=t===i,n=i?Qt:Wt,a=t.parentNode,c,l,s,p,f,h;if(t===I)return t;if(n.length||n.push(yt(t,1),yt(t,2),yt(t,3)),c=i?ft:J,i)o?(s=He(t),p=-s.e/s.a,f=-s.f/s.d,l=ut):t.getBBox?(s=t.getBBox(),l=t.transform?t.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?$e(l):l.getItem(0).matrix:ut,p=l.a*s.x+l.c*s.y,f=l.b*s.x+l.d*s.y):(l=new it,p=f=0),e&&t.tagName.toLowerCase()==="g"&&(p=f=0),(o?i:a).appendChild(c),c.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+p)+","+(l.f+f)+")");else{if(p=f=0,Ft)for(l=t.offsetParent,s=t;s&&(s=s.parentNode)&&s!==l&&s.parentNode;)(I.getComputedStyle(s)[E]+"").length>4&&(p=s.offsetLeft,f=s.offsetTop,s=0);if(h=I.getComputedStyle(t),h.position!=="absolute"&&h.position!=="fixed")for(l=t.offsetParent;a&&a!==l;)p+=a.scrollLeft||0,f+=a.scrollTop||0,a=a.parentNode;s=c.style,s.top=t.offsetTop-f+"px",s.left=t.offsetLeft-p+"px",s[E]=h[E],s[Pt]=h[Pt],s.position=h.position==="fixed"?"fixed":"absolute",t.parentNode.appendChild(c)}return c},xt=function(t,e,i,o,n,a,c){return t.a=e,t.b=i,t.c=o,t.d=n,t.e=a,t.f=c,t},it=function(){function r(e,i,o,n,a,c){e===void 0&&(e=1),i===void 0&&(i=0),o===void 0&&(o=0),n===void 0&&(n=1),a===void 0&&(a=0),c===void 0&&(c=0),xt(this,e,i,o,n,a,c)}var t=r.prototype;return t.inverse=function(){var i=this.a,o=this.b,n=this.c,a=this.d,c=this.e,l=this.f,s=i*a-o*n||1e-10;return xt(this,a/s,-o/s,-n/s,i/s,(n*l-a*c)/s,-(i*l-o*c)/s)},t.multiply=function(i){var o=this.a,n=this.b,a=this.c,c=this.d,l=this.e,s=this.f,p=i.a,f=i.c,h=i.b,g=i.d,d=i.e,u=i.f;return xt(this,p*o+h*a,p*n+h*c,f*o+g*a,f*n+g*c,l+d*o+u*a,s+d*n+u*c)},t.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(i){var o=this.a,n=this.b,a=this.c,c=this.d,l=this.e,s=this.f;return o===i.a&&n===i.b&&a===i.c&&c===i.d&&l===i.e&&s===i.f},t.apply=function(i,o){o===void 0&&(o={});var n=i.x,a=i.y,c=this.a,l=this.b,s=this.c,p=this.d,f=this.e,h=this.f;return o.x=n*c+a*s+f||0,o.y=n*l+a*p+h||0,o},r}();function W(r,t,e,i){if(!r||!r.parentNode||(z||Ut(r)).documentElement===r)return new it;var o=Fe(r),n=Lt(r),a=n?Qt:Wt,c=Ke(r,e),l=a[0].getBoundingClientRect(),s=a[1].getBoundingClientRect(),p=a[2].getBoundingClientRect(),f=c.parentNode,h=!i&&We(r),g=new it((s.left-l.left)/100,(s.top-l.top)/100,(p.left-l.left)/100,(p.top-l.top)/100,l.left+(h?0:Qe()),l.top+(h?0:Ue()));if(f.removeChild(c),o)for(l=o.length;l--;)s=o[l],s.scaleX=s.scaleY=0,s.renderTransform(1,s);return t?g.inverse():g}/*!
 * MotionPathPlugin 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Je="x,translateX,left,marginLeft,xPercent".split(","),ti="y,translateY,top,marginTop,yPercent".split(","),ei=Math.PI/180,D,$t,Z,St,mt,jt,ii=function(){return D||typeof window!="undefined"&&(D=window.gsap)&&D.registerPlugin&&D},H=function(t,e,i,o){for(var n=e.length,a=o===2?0:o,c=0;c<n;c++)t[a]=parseFloat(e[c][i]),o===2&&(t[a+1]=0),a+=2;return t},F=function(t,e,i){return parseFloat(t._gsap.get(t,e,i||"px"))||0},Ht=function(t){var e=t[0],i=t[1],o;for(o=2;o<t.length;o+=2)e=t[o]+=e,i=t[o+1]+=i},qt=function(t,e,i,o,n,a,c,l,s){if(c.type==="cubic")e=[e];else{c.fromCurrent!==!1&&e.unshift(F(i,o,l),n?F(i,n,s):0),c.relative&&Ht(e);var p=n?wt:Ze;e=[p(e,c.curviness)]}return e=a(Kt(e,i,c)),gt(t,i,o,e,"x",l),n&&gt(t,i,n,e,"y",s),U(e,c.resolution||(c.curviness===0?20:12))},oi=function(t){return t},ri=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,Vt=function(t,e,i){var o=W(t),n=0,a=0,c;return(t.tagName+"").toLowerCase()==="svg"?(c=t.viewBox.baseVal,c.width||(c={width:+t.getAttribute("width"),height:+t.getAttribute("height")})):c=e&&t.getBBox&&t.getBBox(),e&&e!=="auto"&&(n=e.push?e[0]*(c?c.width:t.offsetWidth||0):e.x,a=e.push?e[1]*(c?c.height:t.offsetHeight||0):e.y),i.apply(n||a?o.apply({x:n,y:a}):{x:o.e,y:o.f})},Mt=function(t,e,i,o){var n=W(t.parentNode,!0,!0),a=n.clone().multiply(W(e)),c=Vt(t,i,n),l=Vt(e,o,n),s=l.x,p=l.y,f;return a.e=a.f=0,o==="auto"&&e.getTotalLength&&e.tagName.toLowerCase()==="path"&&(f=e.getAttribute("d").match(ri)||[],f=a.apply({x:+f[0],y:+f[1]}),s+=f.x,p+=f.y),f&&(f=a.apply(e.getBBox()),s-=f.x,p-=f.y),a.e=s-c.x,a.f=p-c.y,a},Kt=function(t,e,i){var o=i.align,n=i.matrix,a=i.offsetX,c=i.offsetY,l=i.alignOrigin,s=t[0][0],p=t[0][1],f=F(e,"x"),h=F(e,"y"),g,d,u;return!t||!t.length?ct("M0,0L0,0"):(o&&(o==="self"||(g=St(o)[0]||e)===e?K(t,1,0,0,1,f-s,h-p):(l&&l[2]!==!1?D.set(e,{transformOrigin:l[0]*100+"% "+l[1]*100+"%"}):l=[F(e,"xPercent")/-100,F(e,"yPercent")/-100],d=Mt(e,g,l,"auto"),u=d.apply({x:s,y:p}),K(t,d.a,d.b,d.c,d.d,f+d.e-(u.x-d.e),h+d.f-(u.y-d.f)))),n?K(t,n.a,n.b,n.c,n.d,n.e,n.f):(a||c)&&K(t,1,0,0,1,a||0,c||0),t)},gt=function(t,e,i,o,n,a){var c=e._gsap,l=c.harness,s=l&&l.aliases&&l.aliases[i],p=s&&s.indexOf(",")<0?s:i,f=t._pt=new $t(t._pt,e,p,0,0,oi,0,c.set(e,p,t));f.u=Z(c.get(e,p,a))||0,f.path=o,f.pp=n,t._props.push(p)},ni=function(t,e){return function(i){return t||e!==1?It(i,t,e):i}},tt={version:"3.11.4",name:"motionPath",register:function(t,e,i){D=t,Z=D.utils.getUnit,St=D.utils.toArray,mt=D.core.getStyleSaver,jt=D.core.reverting||function(){},$t=i},init:function(t,e,i){if(!D)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof e=="object"&&!e.style)||!e.path)&&(e={path:e});var o=[],n=e,a=n.path,c=n.autoRotate,l=n.unitX,s=n.unitY,p=n.x,f=n.y,h=a[0],g=ni(e.start,"end"in e?e.end:1),d,u;if(this.rawPaths=o,this.target=t,this.tween=i,this.styles=mt&&mt(t,"transform"),(this.rotate=c||c===0)&&(this.rOffset=parseFloat(c)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=Z(t._gsap.get(t,this.rProp))||0),Array.isArray(a)&&!("closed"in a)&&typeof h!="number"){for(u in h)!p&&~Je.indexOf(u)?p=u:!f&&~ti.indexOf(u)&&(f=u);p&&f?o.push(qt(this,H(H([],a,p,0),a,f,1),t,p,f,g,e,l||Z(a[0][p]),s||Z(a[0][f]))):p=f=0;for(u in h)u!==p&&u!==f&&o.push(qt(this,H([],a,u,2),t,u,0,g,e,Z(a[0][u])))}else d=g(Kt(ct(e.path),t,e)),U(d,e.resolution),o.push(d),gt(this,t,e.x||"x",d,"x",e.unitX||"px"),gt(this,t,e.y||"y",d,"y",e.unitY||"px")},render:function(t,e){var i=e.rawPaths,o=i.length,n=e._pt;if(e.tween._time||!jt()){for(t>1?t=1:t<0&&(t=0);o--;)Et(i[o],t,!o&&e.rotate,i[o]);for(;n;)n.set(n.t,n.p,n.path[n.pp]+n.u,n.d,t),n=n._next;e.rotate&&e.rSet(e.target,e.rProp,i[0].angle*(e.radians?ei:1)+e.rOffset+e.ru,e,t)}else e.styles.revert()},getLength:function(t){return U(ct(t)).totalLength},sliceRawPath:It,getRawPath:ct,pointsToSegment:wt,stringToRawPath:pt,rawPathToString:Zt,transformRawPath:K,getGlobalMatrix:W,getPositionOnPath:Et,cacheRawPathMeasurements:U,convertToPath:function(t,e){return St(t).map(function(i){return Ye(i,e!==!1)})},convertCoordinates:function(t,e,i){var o=W(e,!0,!0).multiply(W(t));return i?o.apply(i):o},getAlignMatrix:Mt,getRelativePosition:function(t,e,i,o){var n=Mt(t,e,i,o);return{x:n.e,y:n.f}},arrayToRawPath:function(t,e){e=e||{};var i=H(H([],t,e.x||"x",0),t,e.y||"y",1);return e.relative&&Ht(i),[e.type==="cubic"?i:wt(i,e.curviness)]}};ii()&&D.registerPlugin(tt);const si={id:"storyPage"},ai=y("div",{class:"hero"},[y("img",{class:"parallax01",src:pe}),y("img",{class:"parallax02",src:ue}),y("img",{class:"parallax03",src:ge})],-1),li={class:"wrap"},ci=y("div",{class:"run"},[y("svg",{id:"linesvg",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 869 3002","xml:space":"preserve"},[y("path",{id:"motionPath",class:"st0",d:"M155.395,383.31 C152.773,390.548 92.401,646.162 250.215,727.041 453.479,831.213 835.629,715.412 832.33,924.268 830.006,1071.385 20.339,1040.965 22.58,1206.204 24.517,1348.994 835.125,1320.378 832.275,1445.504 827.175,1669.362 57.235,1623.348 56.673,1760.63 55.674,2004.272 837.157,1936.609 837.205,2053.845 837.283,2246.807 137.92199,2252.96102 137.92199,2252.96102 "}),y("g",{id:"motionSVG","data-name":"\u5716\u5C64 2"},[y("g",{id:"tractor","data-name":"\u5716\u5C64 1"},[y("path",{class:"cls-1",d:"M23.88,3c1.63,3,3.57,4.81,7.5,5,7.77.42,13.07,6,13.59,12.85.21,2.75-.82,3.68-3.52,3.49A15.47,15.47,0,0,1,27.27,12.53a8.1,8.1,0,0,0-3-4.92Z"}),y("path",{class:"cls-2",d:"M23.18,5a34.65,34.65,0,0,0-3.28,6.35C17.38,18.53,9.07,23.17,1.71,21.55-.1,21.15-.41,20.21.49,18.78,4.5,12.42,9.31,7.17,17.6,7.13A2.94,2.94,0,0,0,20.81,4.6c.34-1.47.54-3,.85-4.45Z"}),y("path",{class:"cls-3",d:"M20.27,1.53c-.59-.2.18-1.36,1-1.51s1.12.52,1.47,1.05a21.3,21.3,0,0,1,1.16,2,7.5,7.5,0,0,1,.41,4.59c.53,3.9,1.22,7.4,1.13,11a5.37,5.37,0,0,0,1,3.34c3.16,4.47,2.86,9.13.59,13.82a30.28,30.28,0,0,1-5,7.17c-1.4,1.54-2.61,1.62-3.24-.55C16.57,34.62,15.61,27,22.12,20.59a3.89,3.89,0,0,0,1.1-2.93A42.51,42.51,0,0,0,21.8,6.34S21.87,2.08,20.27,1.53Z"})])])])],-1),fi={class:"container"},hi=y("section",{class:"row sec01 q-gutter-lg"},[y("div",{class:"col-12 col-md-4"}),y("div",{class:"col-12 col-md-3"},[y("img",{class:"title",src:de}),y("h5",null," \u8336\u6A39\u8A8D\u990A\u4ECB\u7D39 "),y("p",{class:"info"}," \u6FB3\u6D32\u8336\u6A39\uFF0C\u81EA\u53E4\u4EE5\u4F86\u5EE3\u6CDB\u904B\u7528\u65BC\u5C45\u5BB6\u751F\u6D3B,\u5C0D\u65BC\u8B77\u819A\u53CA\u4FDD\u990A\u3001\u6E05\u6F54\u9632\u8B77\u3001\u5C45\u5BB6\u4FDD\u5065\u3001\u96A8\u6642\u5475\u8B77\u81EA\u5DF1\u548C\u5BB6\u4EBA\u7684\u5065\u5EB7\u5728\u6B64\u523B\u975E\u5E38\u6642\u671F.\u7DA0\u8335\u5B50\u7DA0\u5584\u751F\u6D3B\u8FB2\u5834\u555F\u52D5\u300C\u8336\u6A39\u8A8D\u990A\u8A08\u5283\u300D\u63A8\u52D5\u9999\u8349\u751F\u6D3B\u3002\u9080\u8ACB\u60A8\u4E00\u540C\u5B88\u8B77\u5927\u5730\u53CA\u8EAB\u5FC3\u5065\u5EB7\u3002")]),y("div",{class:"col-12 col-md-4 pic oneCart"},[y("img",{class:"dot",src:_e}),y("img",{class:"leaf",src:ye}),y("img",{class:"furn",src:xe})])],-1),pi=y("section",{class:"row sec02"},[y("div",{class:"col-12 col-md-5"},[y("img",{class:"climb",src:me})]),y("div",{class:"col-12 col-md-4"},[y("img",{class:"title",src:ve}),y("h5",null,"\u8A8D\u990A\u8A08\u756B\u53C3\u8207\u5C0D\u8C61"),y("p",{class:"info"},[O(" 1.\u5B88\u8B77\u81EA\u7136\u751F\u614B\u7684\u670B\u53CB "),y("br"),O(" 2.\u5C0D\u5712\u7A2E\u690D\u6709\u8208\u8DA3\u7684\u540C\u597D "),y("br"),O(" 3.\u9999\u8349\u61C9\u7528\u6709\u8208\u8DA3\u7684\u670B\u53CB "),y("br"),O(" \u5BA2\u670D\u5C08\u7DDA:02-2232-5886 ")])]),y("div",{class:"col-12 col-md-3"})],-1),ui=y("section",{class:"row sec03 q-gutter-lg"},[y("div",{class:"col-12 col-md-3"}),y("div",{class:"col-12 col-md-3"},[y("img",{class:"title",src:be}),y("h5",null,[O("\u8A8D\u990A\u671F\u9593\u8336\u6A39\u6536\u6210"),y("br"),O(" \u7576\u6708\u65B0\u9BAE\u690D\u8403\u56DE\u994B")]),y("p",{class:"info"},[O(" 1.\u8336\u6A39\u7D14\u9732100ml-2\u74F6"),y("br"),O(" 2.\u9999\u8349\u6D17\u7897\u6DB2400ml-1\u74F6"),y("br"),O(" 3.\u9999\u8349\u6D17\u9AEE\u6DB2400ml-1\u74F6"),y("br"),O(" 4.\u65E5\u6708\u96EA\u6676\u9E7D300g/\u5305"),y("br"),O(" \u8D08\u9001\u7E3D\u50F9\u503C 2050\u5143 ")])]),y("div",{class:"col-12 col-md-5 pic"},[y("img",{class:"box",src:we}),y("img",{class:"wash",src:ne})])],-1),gi={class:"sec04"},di=y("img",{class:"title",src:se},null,-1),_i=y("h6",{class:"text-white"},"\u7DA0\u5584\u751F\u6D3B\u8FB2\u5834\u8336\u6A39\u8A8D\u990A\u8A08\u5283",-1),yi=y("p",{class:"info"},[y("br"),O(" \u967D\u5149\u3002\u5927\u5730\u3002\u68EE\u6797\u3002\u5C71\u6CC9\u3002\u5FAE\u98A8"),y("br"),O(" \u9080\u8ACB\u60A8\u4E00\u8D77\u7A2E\u4E0B\u7DA0\u7DA0\u56E0\u5B50"),y("br")],-1),xi=y("img",{src:Se},null,-1),wi={__name:"StoryPage",setup(r){return C.registerPlugin(tt,oe),ae(()=>{C.to(".dot",{scrollTrigger:{trigger:".oneCart",start:"top 50%",end:"bottom 50%",scrub:3},yPercent:-250,xPercent:50,scale:1.5,rotation:50}),C.to(".leaf",{scrollTrigger:{trigger:".oneCart",start:"top 50%",end:"bottom 50%",scrub:3},yPercent:-200,xPercent:-50,scale:1.3,rotation:50}),C.from(".climb",{scrollTrigger:{trigger:".sec02",start:"top 50%",end:"30% 50%",scrub:3},xPercent:-50,scale:.1}),C.from(".box",{scrollTrigger:{trigger:".sec03",start:"top 50%",end:"30% 50%",scrub:3},scale:.1}),C.from(".wash",{scrollTrigger:{trigger:".sec03",start:"top 50%",end:"30% 50%",scrub:3},scale:.1}),C.from(".cls-1",{opacity:0,rotation:50,duration:3,repeat:-1,yoyo:!0}),C.from(".cls-2",{opacity:0,rotation:50,duration:2,delay:1,repeat:-1,yoyo:!0}),C.from("#tractor",{rotationZ:30,duration:1,repeat:-1,yoyo:!0,ease:"power1.inOut"}),C.set("#motionSVG",{scale:.7,autoAlpha:1}),C.set("#tractor",{transformOrigin:"50% 50%"});let t=C.quickTo("#tractor","rotation"),e=0;C.to("#motionSVG",{scrollTrigger:{trigger:"#motionPath",start:"top center",end:()=>"+="+document.querySelector("#motionPath").getBoundingClientRect().height,scrub:.5,onUpdate:o=>{e!==o.direction&&(t(o.direction===1?0:-180),e=o.direction)}},ease:i("#motionPath"),immediateRender:!0,motionPath:{path:"#motionPath",align:"#motionPath",alignOrigin:[.5,.5],autoRotate:90}});function i(o,n="y",a=1){let c=tt.cacheRawPathMeasurements(tt.getRawPath(C.utils.toArray(o)[0]),Math.round(a*12)),l=n==="x",s=c[0][l?0:1],p=c[c.length-1][c[c.length-1].length-(l?2:1)],f=p-s,h=Math.round(a*200),g=1/h,d=[0],u=[],_=0,x=w=>{for(;d[_]<=w&&_++<h;);u.push((w-d[_-1])/(d[_]-d[_-1])*g+_*g)},m=1,v,P;for(;m<h;m++)v=m/h,P=tt.getPositionOnPath(c,v)[n],d[m]=(P-s)/f;for(d[h]=1,m=0;m<h;m++)x(m/h);return u.push(1),w=>{let b=w*h,T=u[b|0];return T+(u[Math.ceil(b)]-T)*(b%1)}}C.set(".parallax01",{position:"absolute",left:0,right:0,margin:"auto",width:"100%"}),C.to(".parallax01",{yPercent:10,duration:10,repeat:-1,yoyo:!0,ease:"power1.inOut"}),C.set(".parallax02",{position:"absolute",left:0,top:"20%",margin:"auto",width:"100%"}),C.to(".parallax02",{yPercent:20,duration:10,repeat:-1,yoyo:!0,ease:"power1.inOut"}),C.to(".parallax02",{scrollTrigger:{trigger:".hero",start:"top 50%",end:"bottom 50%",scrub:3},top:"10%"}),C.set(".parallax03",{position:"absolute",right:"0",top:"0%",width:"100%"}),C.to(".parallax03",{yPercent:20,duration:10,repeat:-1,yoyo:!0,ease:"power1.inOut"}),C.to(".parallax03",{scrollTrigger:{trigger:".hero",start:"top 50%",end:"bottom 50%",scrub:5},bottom:"50%"})}),(t,e)=>(le(),ce("div",si,[dt(he,{class:"bg text-center",style:{"padding-top":"100px","padding-bottom":"-70vh"}},{default:_t(()=>[ai,y("div",li,[ci,y("div",fi,[hi,pi,ui,y("section",gi,[di,dt(re,{class:"col-12",src:Pe,style:{height:"50vh"}},{default:_t(()=>[_i]),_:1}),yi,dt(fe,{rounded:"",class:"btn",to:"/tree"},{default:_t(()=>[xi]),_:1})])])])]),_:1})]))}};export{wi as default};
