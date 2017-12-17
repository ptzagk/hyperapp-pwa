!function(){"use strict";function n(n,e){for(var t,r=arguments,o=[],i=[],u=arguments.length;u-- >2;)o.push(r[u]);for(;o.length;)if(Array.isArray(t=o.pop()))for(u=t.length;u--;)o.push(t[u]);else null==t||!0===t||!1===t||i.push("number"==typeof t?t+"":t);return"string"==typeof n?{tag:n,props:e||{},children:i}:n(e||{},i)}function e(e){return function(t,r){return"object"!=typeof t||Array.isArray(t)?n(e,{},t):n(e,t,r)}}function t(n,t){return e("button")(n,t)}history.replaceState(null,null,sessionStorage.redirect),delete sessionStorage.redirect,"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js"),function(n,e){if("undefined"==typeof document)return e;n=n||"";var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}("html {\n  font-size: calc(8px + 2vmin);\n  font-family: sans-serif;\n  background: white;\n}\n\nbody,\nbody * {\n  display: block;\n  background: none;\n  box-sizing: border-box;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  outline: 0;\n}\n\nbody,\nnoscript {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\ndiv {\n  display: flex;\n}\n\ndiv > * + * {\n    margin-left: 0.38rem;\n  }\n\nnoscript {\n  width: 100vw;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\nbutton {\n  padding: 0.62rem 1rem;\n  font-size: 0.62rem;\n  border: 1px solid #000;\n  font-weight: bold;\n  cursor: pointer;\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nh1 {\n  margin: auto;\n  font-size: 8rem;\n  cursor: pointer;\n  text-align: center;\n}\n",void 0);!function(n,e,t){function r(n,e){return n&&{tag:n.tagName.toLowerCase(),props:{},children:e.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:r(n,e)})}}function o(n){for(v=!v,n=e(k),t&&!v&&(m=g(t,m,y,y=n));n=b.pop();)n()}function i(){e&&!v&&setTimeout(o,v=!v)}function u(n,e){var t={};for(var r in n)t[r]=n[r];for(var r in e)t[r]=e[r];return t}function c(n,e,t){var r={};return 0===n.length?e:(r[n[0]]=1<n.length?c(n.slice(1),e,t[n[0]]):e,u(t,r))}function s(n,e){for(var t=0;t<n.length;t++)e=e[n[t]];return e}function a(n,e,t){for(var r in t)"function"==typeof t[r]?function(r,o){t[r]=function(r){return e=s(n,k.state),"function"==typeof(r=o(r))&&(r=r(e,t)),r&&r!==e&&!r.then&&i(k.state=c(n,u(e,r),k.state)),r}}(r,t[r]):a(n.concat(r),e[r]=e[r]||{},t[r])}function l(n){if(n&&n.props)return n.props.key}function f(n,e,t,r){if("key"===e);else if("style"===e)for(var o in u(r,t=t||{}))n.style[o]=null==t[o]?"":t[o];else{try{n[e]=null==t?"":t}catch(n){}"function"!=typeof t&&(null==t||!1===t?n.removeAttribute(e):n.setAttribute(e,t))}}function d(n,e){if("string"==typeof n)var t=document.createTextNode(n);else{t=(e=e||"svg"===n.tag)?document.createElementNS("http://www.w3.org/2000/svg",n.tag):document.createElement(n.tag),n.props.oncreate&&b.push(function(){n.props.oncreate(t)});for(var r=0;r<n.children.length;r++)t.appendChild(d(n.children[r],e));for(var r in n.props)f(t,r,n.props[r])}return t}function p(n,e){if("string"!=typeof e){for(var t=0;t<e.children.length;t++)p(n.childNodes[t],e.children[t]);e.props.ondestroy&&e.props.ondestroy(n)}}function h(n,e,t){function r(){p(e,t),n.removeChild(e)}t.props&&t.props.onremove?t.props.onremove(e,r):r()}function g(n,e,t,r,o,i){if(t===r);else if(null==t)e=n.insertBefore(d(r,o),e);else if(null!=r.tag&&r.tag===t.tag){!function(n,e,t){for(var r in u(e,t)){var o=t[r],i="value"===r||"checked"===r?n[r]:e[r];o!==i&&f(n,r,o,i)}t.onupdate&&b.push(function(){t.onupdate(n,e)})}(e,t.props,r.props),o=o||"svg"===r.tag;for(var c=r.children.length,s=t.children.length,a={},p=[],v={},m=0;m<s;m++){var y=p[m]=e.childNodes[m];null!=(S=l(w=t.children[m]))&&(a[S]=[y,w])}m=0;for(var k=0;k<c;){y=p[m];var w=t.children[m],x=r.children[k];if(v[S=l(w)])m++;else{var N=l(x),A=a[N]||[];null==N?(null==S&&(g(e,y,w,x,o),k++),m++):(S===N?(g(e,A[0],A[1],x,o),m++):A[0]?(e.insertBefore(A[0],y),g(e,A[0],A[1],x,o)):g(e,y,null,x,o),k++,v[N]=x)}}for(;m<s;){var S;null==(S=l(w=t.children[m]))&&h(e,p[m],w),m++}for(var m in a){var T=(A=a[m])[1];v[T.props.key]||h(e,A[0],T)}}else e&&r!==e.nodeValue&&("string"==typeof r&&"string"==typeof t?e.nodeValue=r:(e=n.insertBefore(d(r,o),i=e),h(n,i,t)));return e}var v,m=t&&t.children[0],y=r(m,[].map),b=[],k=u({},n);i(a([],k.state=u({},k.state),k.actions=u({},k.actions)))}({state:{count:0},actions:{reset:function(){return{count:0}},sum:function(n){return function(e){return{count:e.count+n}}}}},function(n){var r=n.state,o=n.actions;return function(n,t){return e("main")(n,t)}([function(n,t){return e("h1")(n,t)}(r.count),function(n,t){return e("div")(n,t)}([t({onclick:function(n){return o.sum(-1)}},"Sub"),t({onclick:function(n){return o.reset()}},"Reset"),t({onclick:function(n){return o.sum(1)}},"Add")])])},document.body)}();