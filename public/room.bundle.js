!function(){"use strict";var e,t,n,s,i,o={},r=[],l=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function a(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function u(e,t,n){var s,i=arguments,o={};for(s in t)"key"!==s&&"ref"!==s&&(o[s]=t[s]);if(arguments.length>3)for(n=[n],s=3;s<arguments.length;s++)n.push(i[s]);if(null!=n&&(o.children=n),"function"==typeof e&&null!=e.defaultProps)for(s in e.defaultProps)void 0===o[s]&&(o[s]=e.defaultProps[s]);return _(e,o,t&&t.key,t&&t.ref)}function _(t,n,s,i){var o={type:t,props:n,key:s,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return e.vnode&&e.vnode(o),o}function p(e){return e.children}function h(e,t){this.props=e,this.context=t}function d(e,t){if(null==t)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?d(e):null}function f(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return f(e)}}function v(i){(!i.__d&&(i.__d=!0)&&1===t.push(i)||s!==e.debounceRendering)&&((s=e.debounceRendering)||n)(m)}function m(){var e,n,s,i,o,r,l;for(t.sort((function(e,t){return t.__v.__b-e.__v.__b}));e=t.pop();)e.__d&&(s=void 0,i=void 0,r=(o=(n=e).__v).__e,(l=n.__P)&&(s=[],i=S(l,o,a({},o),n.__n,void 0!==l.ownerSVGElement,null,s,null==r?d(o):r),$(s,o),i!=r&&f(o)))}function y(e,t,n,s,i,l,a,u,_){var p,h,f,v,m,y,k,b=n&&n.__k||r,w=b.length;if(u==o&&(u=null!=l?l[0]:w?d(n,0):null),p=0,t.__k=g(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(f=b[p])||f&&n.key==f.key&&n.type===f.type)b[p]=void 0;else for(h=0;h<w;h++){if((f=b[h])&&n.key==f.key&&n.type===f.type){b[h]=void 0;break}f=null}if(v=S(e,n,f=f||o,s,i,l,a,u,_),(h=n.ref)&&f.ref!=h&&(k||(k=[]),f.ref&&k.push(f.ref,null,n),k.push(h,n.__c||v,n)),null!=v){var r;if(null==y&&(y=v),void 0!==n.__d)r=n.__d,n.__d=void 0;else if(l==f||v!=u||null==v.parentNode){e:if(null==u||u.parentNode!==e)e.appendChild(v),r=null;else{for(m=u,h=0;(m=m.nextSibling)&&h<w;h+=2)if(m==v)break e;e.insertBefore(v,u),r=u}"option"==t.type&&(e.value="")}u=void 0!==r?r:v.nextSibling,"function"==typeof t.type&&(t.__d=u)}else u&&f.__e==u&&u.parentNode!=e&&(u=d(f))}return p++,n})),t.__e=y,null!=l&&"function"!=typeof t.type)for(p=l.length;p--;)null!=l[p]&&c(l[p]);for(p=w;p--;)null!=b[p]&&N(b[p],b[p]);if(k)for(p=0;p<k.length;p++)C(k[p],k[++p],k[++p])}function g(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var s=0;s<e.length;s++)g(e[s],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?_(null,e,null,null):null!=e.__e||null!=e.__c?_(e.type,e.props,e.key,null):e):e);return n}function k(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===l.test(t)?n+"px":null==n?"":n}function b(e,t,n,s,i){var o,r,l,a,c;if(i?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(o=e.style,"string"==typeof n)o.cssText=n;else{if("string"==typeof s&&(o.cssText="",s=null),s)for(r in s)n&&r in n||k(o,r,"");if(n)for(l in n)s&&n[l]===s[l]||k(o,l,n[l])}else"o"===t[0]&&"n"===t[1]?(a=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(s||e.addEventListener(t,w,a),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,w,a)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!i&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function w(t){this.l[t.type](e.event?e.event(t):t)}function S(t,n,s,i,o,r,l,c,u){var _,d,f,v,m,g,k,b,w,S,$=n.type;if(void 0!==n.constructor)return null;(_=e.__b)&&_(n);try{e:if("function"==typeof $){if(b=n.props,w=(_=$.contextType)&&i[_.__c],S=_?w?w.props.value:_.__:i,s.__c?k=(d=n.__c=s.__c).__=d.__E:("prototype"in $&&$.prototype.render?n.__c=d=new $(b,S):(n.__c=d=new h(b,S),d.constructor=$,d.render=L),w&&w.sub(d),d.props=b,d.state||(d.state={}),d.context=S,d.__n=i,f=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=$.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=a({},d.__s)),a(d.__s,$.getDerivedStateFromProps(b,d.__s))),v=d.props,m=d.state,f)null==$.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==$.getDerivedStateFromProps&&b!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,S),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,S)){for(d.props=b,d.state=d.__s,d.__d=!1,d.__v=n,n.__e=s.__e,n.__k=s.__k,d.__h.length&&l.push(d),_=0;_<n.__k.length;_++)n.__k[_]&&(n.__k[_].__=n);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,S),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,m,g)}))}d.context=S,d.props=b,d.state=d.__s,(_=e.__r)&&_(n),d.__d=!1,d.__v=n,d.__P=t,_=d.render(d.props,d.state,d.context),n.__k=null!=_&&_.type==p&&null==_.key?_.props.children:Array.isArray(_)?_:[_],null!=d.getChildContext&&(i=a(a({},i),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(v,m)),y(t,n,s,i,o,r,l,c,u),d.base=n.__e,d.__h.length&&l.push(d),k&&(d.__E=d.__=null),d.__e=!1}else n.__e=x(s.__e,n,s,i,o,r,l,u);(_=e.diffed)&&_(n)}catch(t){e.__e(t,n,s)}return n.__e}function $(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(e){e.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function x(e,t,n,s,i,l,a,c){var u,_,p,h,d,f=n.props,v=t.props;if(i="svg"===t.type||i,null!=l)for(u=0;u<l.length;u++)if(null!=(_=l[u])&&((null===t.type?3===_.nodeType:_.localName===t.type)||e==_)){e=_,l[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=i?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),l=null}if(null===t.type)f!==v&&e.data!=v&&(e.data=v);else if(t!==n){if(null!=l&&(l=r.slice.call(e.childNodes)),p=(f=n.props||o).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!c){if(f===o)for(f={},d=0;d<e.attributes.length;d++)f[e.attributes[d].name]=e.attributes[d].value;(h||p)&&(h&&p&&h.__html==p.__html||(e.innerHTML=h&&h.__html||""))}(function(e,t,n,s,i){var o;for(o in n)o in t||b(e,o,null,n[o],s);for(o in t)i&&"function"!=typeof t[o]||"value"===o||"checked"===o||n[o]===t[o]||b(e,o,t[o],n[o],s)})(e,v,f,i,c),t.__k=t.props.children,h||y(e,t,n,s,"foreignObject"!==t.type&&i,l,a,o,c),c||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function C(t,n,s){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,s)}}function N(t,n,s){var i,o,r;if(e.unmount&&e.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||C(i,null,n)),s||"function"==typeof t.type||(s=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){e.__e(t,n)}i.base=i.__P=null}if(i=t.__k)for(r=0;r<i.length;r++)i[r]&&N(i[r],n,s);null!=o&&c(o)}function L(e,t,n){return this.constructor(e,n)}e={__e:function(e,t){for(var n,s;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(s=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(s=!0,n.componentDidCatch(e)),s)return v(n.__E=n)}catch(t){e=t}throw e}},h.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&a(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),v(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},h.prototype.render=p,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=o;var P=function(e,t,n,s){var i;t[0]=0;for(var o=1;o<t.length;o++){var r=t[o++],l=t[o]?(t[0]|=r?1:2,n[t[o++]]):t[++o];3===r?s[0]=l:4===r?s[1]=Object.assign(s[1]||{},l):5===r?(s[1]=s[1]||{})[t[++o]]=l:6===r?s[1][t[++o]]+=l+"":r?(i=e.apply(l,P(e,l,n,["",null])),s.push(i),l[0]?t[0]|=2:(t[o-2]=0,t[o]=i)):s.push(l)}return s},E=new Map;var M=function(e){var t=E.get(this);return t||(t=new Map,E.set(this,t)),(t=P(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,s=1,i="",o="",r=[0],l=function(e){1===s&&(e||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?r.push(0,e,i):3===s&&(e||i)?(r.push(3,e,i),s=2):2===s&&"..."===i&&e?r.push(4,e,0):2===s&&i&&!e?r.push(5,0,!0,i):s>=5&&((i||!e&&5===s)&&(r.push(s,0,i,n),s=6),e&&(r.push(s,e,0,n),s=6)),i=""},a=0;a<e.length;a++){a&&(1===s&&l(),l(a));for(var c=0;c<e[a].length;c++)t=e[a][c],1===s?"<"===t?(l(),r=[r],s=3):i+=t:4===s?"--"===i&&">"===t?(s=1,i=""):i=t+i[0]:o?t===o?o="":i+=t:'"'===t||"'"===t?o=t:">"===t?(l(),s=1):s&&("="===t?(s=5,n=i,i=""):"/"===t&&(s<5||">"===e[a][c+1])?(l(),3===s&&(r=r[0]),s=r,(r=r[0]).push(2,0,s),s=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(l(),s=2):i+=t),3===s&&"!--"===i&&(s=4,r=r[0])}return l(),r}(e)),t),arguments,[])).length>1?t:t[0]}.bind(u);class U extends h{render({condition:e,children:t}){return t instanceof Array||(t=[t]),e?t.filter(e=>e.type!==D):t.filter(e=>e.type===D)}}class D extends h{render({children:e}){return e}}const z={raise:"✋",yes:"👍",no:"👎",speaker:"🔈",problem:"⚠️"},T=Object.entries(z);let W=window.location.pathname.split("/").pop().toLowerCase(),A=null;if(window.location.search){A=new URLSearchParams(window.location.search).get("name")}let H=new class{constructor({path:e="/",url:t}={}){this.path=e,this.url=t,this.connect(),this.connected=!1,this.ping=null,this._listeners={message:new Set,open:new Set,close:new Set}}connect(){let e="ws://";"https:"===location.protocol&&(e="wss://");let t=this.url||e+location.host+this.path;this.socket=new WebSocket(t),this.socket.addEventListener("open",e=>{this.connected=!0,this._emit("open")}),this.socket.addEventListener("close",e=>{this.connected=!1,this._emit("close"),setTimeout(()=>this.connect(),2e3)}),this.socket.addEventListener("message",e=>{this._emit("message",e.data)}),clearInterval(this.ping),this.ping=setInterval(()=>this.send("ping"),5e3)}_emit(e,t){this._listeners[e].forEach(e=>{try{e(t)}catch(e){console.warn("error in message handler",e)}})}on(e,t){e in this._listeners&&this._listeners[e].add(t)}off(e,t){"message"===e&&this.messageHandlers.delete(t)}send(e){this.connected&&("object"==typeof e?this.socket.send(JSON.stringify(e)):this.socket.send(e))}};!function(t,n,s){var l,a,c;e.__&&e.__(t,n),a=(l=s===i)?null:s&&s.__k||n.__k,t=u(p,null,[t]),c=[],S(n,(l?n:s||n).__k=t,a||o,o,void 0!==n.ownerSVGElement,s&&!l?[s]:a?null:r.slice.call(n.childNodes),c,s||o,l),$(c,t)}(M`<${class extends h{constructor(e){super(e);let t=new URL(window.location);t.pathname="/r/"+this.props.room,this.state={status:null,connected:!1,editing:!1,name:e.name||null,participants:[],size:0,inviteURL:t,height:window.innerHeight+"px"},this.safety=0,this.input={},this.holder={},this.props.socket.on("close",e=>this.setState({connected:!1})),this.props.socket.on("open",e=>{this.setState({connected:!0}),this.props.socket.send({type:"join",room:this.props.room}),this.props.socket.send({type:"update",data:{name:this.state.name,status:this.state.status}})}),this.props.socket.on("message",e=>this.handleMessage(e)),window.addEventListener("resize",e=>{this.setState({height:window.innerHeight+"px"}),this.getSize()})}handleMessage(e){try{e=JSON.parse(e)}catch(e){return void console.warn(e)}"update"===e.type&&this.setState({participants:e.data})}setStatus(e){this.setState({status:e}),this.props.socket.send({type:"update",data:{status:e}})}clearStatus(){this.setState({status:null}),this.props.socket.send({type:"update",data:{status:null}})}changeName(e){this.setState({name:e,editing:!1}),this.props.socket.send({type:"update",data:{name:e}})}copyInvite(e){e.preventDefault(),this.invite.current&&(this.invite.current.select(),document.execCommand("copy"),console.log("copied invite link"))}getSize(){if(this.safety<1e5&&this.holder.current){let e=this.holder.current.offsetWidth,t=this.holder.current.offsetHeight,n=this.state.participants.filter(e=>e.status).length;if(n&&t){let s=function(e,t,n,s,i,o){let r=e/t,l=0,a=1/0;for(let e=1;e<=i;e++){let t=(e*(n+o)+o)/(Math.ceil(i/e)*(s+o)+o),c=Math.abs(t-r);c<a&&(l=e,a=c)}return l}(e,t,4,3,n,1),i=Math.ceil(n/s),o=Math.min(e/s/9,t/i/7);o!==this.state.size&&(this.safety++,this.setState({size:o}))}}}componentDidUpdate(){this.getSize(),this.input.current&&this.state.editing&&this.input.current.select()}componentDidMount(){this.getSize(),this.input.current&&this.state.editing&&this.input.current.select()}render({room:e},{participants:t=[],connected:n,size:s,inviteURL:i,height:o="100%",name:r,editing:l}){return M`
      <div class="app host" style="height:${o}">
        <header>
          <div class="room">
            <div><b>${r}</b> in #<b>${e}</b></div>
            <button class="link"
                    onClick=${e=>this.setState({name:r,editing:!0})}>
              ${r?"change name":"set your name"}
            </button>
          </div>
          <${U} condition=${n}>
            <div class="connection connected">
              <span>✅ connected</span>
            </div>
            <${D}>
              <div class="connection connecting">
                🔌 connecting
              </div>
            </>
          </>
        </header>
        <div class="stats">
          <div class="count">
            🗣×${t.length}
            
          </div>
          ${T.map(([e,n])=>M`
            <div>${n}×${t.filter(t=>t.status===e).length}</div>
          `)}
        </div>
        <div class="participants" ref=${this.holder}>
          <div class="layout" style="font-size:${s}px">
            ${t.filter(e=>e.status).map(e=>M`
              <div class="participant">
                <div class="participant-status">${e.status?z[e.status]:""}</div>
                <div class="participant-name">${e.name}</div>
              </div>
            `)}
          </div>
        </div>
        <div class="reactions">
          ${T.map(([e,t])=>M`
            <button class="${status===e?"current":""}"
                    onClick=${t=>this.setStatus(e)}>
              ${t}
            </button>
          `)}
          <button class="clear"
                  onClick=${e=>this.clearStatus()}>
            clear
          </button>
        </div>
        <${U} condition=${l}>
          <div class="dialog">
            <h3>set your name</h3>
            <input class="edit-name"
                   type="text"
                   ref=${this.input}
                   value=${r}
                   placeholder="enter name"
                   onKeyPress=${e=>"Enter"===e.key&&this.changeName(e.target.value)}
                   onBlur=${e=>this.changeName(e.target.value)} />
          </div>
        </>
      </div>
    `}}} socket=${H} room=${W} name=${A}/>`,document.body)}();
//# sourceMappingURL=room.bundle.js.map
