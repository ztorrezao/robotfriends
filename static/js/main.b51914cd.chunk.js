(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=n(4),i=n(5),s=n(7),u=n(6),h=n(8),m=function(e){e.id;var t=e.name,n=e.email;return r.a.createElement("div",{className:"tc dib bg-light-green br3 pa3 ma2 shadow-5 grow bw2"},r.a.createElement("img",{src:"https://robohash.org/".concat(n),alt:t}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(m,{key:t,id:e.id,name:e.name,email:e.email})}))},b=function(e){var t=e.searchChange;return r.a.createElement("input",{className:"b--green bg-lightest-blue ba pa3",type:"search",placeholder:"Robot Search",onChange:t})},f=function(e){return r.a.createElement("div",{className:"bt ma2 pa2",style:{overflowY:"scroll",height:"432px",borderColor:"#0ccac4",borderWidth:"2px"}},e.children)},p=(n(14),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchEvent=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return 0===t.length?r.a.createElement("h1",{className:"tc"},"Loading RobotFriends..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RobotFriends"),r.a.createElement(b,{searchChange:this.onSearchEvent}),r.a.createElement(f,null,r.a.createElement(d,{robots:a})))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}}]),t}(a.Component));n(16),n(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.b51914cd.chunk.js.map