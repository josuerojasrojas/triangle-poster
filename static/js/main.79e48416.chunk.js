(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(14),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),p=(n(15),Math.sqrt(3)),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getTriangleStyle",value:function(e,t,n,a){var r="rgb(".concat(t[0],", ").concat(t[1],", ").concat(t[2],")"),c="rgb(".concat(n[0],", ").concat(n[1],", ").concat(n[2],")");return{width:"".concat(e,"px"),height:"".concat(e,"px"),backgroundImage:"linear-gradient(120deg, ".concat(r,", ").concat(c,")"),zIndex:a}}},{key:"createTriangles",value:function(e,t,n,a){var c=[],o=[];o.push(Math.round((a[0]>n[0]?-(a[0]-n[0]):n[0]-a[0])/e)),o.push(Math.round((a[1]>n[1]?-(a[1]-n[1]):n[1]-a[1])/e)),o.push(Math.round((a[0]>n[2]?-(a[2]-n[2]):n[2]-a[2])/e));for(var i=n.slice(),s=[i[0]-o[0],i[1]-o[1],i[2]-o[2]],l=1,u=0;u<e;u++){var h={};h=0===u?this.getTriangleStyle(t,n,n,l++):u===e-1?this.getTriangleStyle(t,a,a,l++):this.getTriangleStyle(t,s,i,l++),c.push(r.a.createElement("div",{key:"triangle".concat(u),className:"triangle",style:h})),0===u&&u===e-1||(i=s.slice(),s=[i[0]-o[0],i[1]-o[1],i[2]-o[2]]),t-=32}return c}},{key:"getTriangleWidth",value:function(e){var t=e/2,n=e*p/2;return"0 ".concat(t,"px ").concat(n,"px ").concat(t,"px")}},{key:"render",value:function(){var e=this.props.width,t=this.props.firstColor,n=this.props.secondColor,a={width:"".concat(e,"px"),height:"".concat(e,"px")};return r.a.createElement("div",{style:a,className:"triangle-wrapper"},this.createTriangles(this.props.numTriangles,e,t,n))}}]),t}(r.a.Component),g=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"poster"},r.a.createElement("div",{className:"header"},r.a.createElement("a",{href:"https://dribbble.com/shots/4864465-PosterSeries-BasicBlends-Jungle"},"Poster",r.a.createElement("br",null),"Source"),r.a.createElement("p",null,"/07")),r.a.createElement(d,{width:250,numTriangles:6,firstColor:[71,65,156],secondColor:[166,215,102]}),r.a.createElement("a",{href:"https://github.com/withcheesepls/triangle-poster"},"Source")))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.79e48416.chunk.js.map