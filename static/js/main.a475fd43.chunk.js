(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(8),c=a.n(i),r=(a(14),a(2)),l=a(3),o=a(5),d=a(4),u=a(6),p=a(1),h=(a(16),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).clickHandler=a.clickHandler.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"clickHandler",value:function(e){this.props.pass(e.target.id)}},{key:"render",value:function(){return n.a.createElement("div",{id:this.props.btn,onClick:this.clickHandler,className:"button "+this.props.className},this.props.btn)}}]),t}(s.Component)),b=0,m=[{index:1,text:"one"},{index:2,text:"two"},{index:3,text:"three"},{index:4,text:"four"},{index:5,text:"five"},{index:6,text:"six"},{index:7,text:"seven"},{index:8,text:"eight"},{index:9,text:"nine"}],y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={a:0,b:0,typedDec:!1,action:0},a.passNum=a.passNum.bind(Object(p.a)(Object(p.a)(a))),a.decimal=a.decimal.bind(Object(p.a)(Object(p.a)(a))),a.action=a.action.bind(Object(p.a)(Object(p.a)(a))),a.equals=a.equals.bind(Object(p.a)(Object(p.a)(a))),a.clear=a.clear.bind(Object(p.a)(Object(p.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"display",value:function(e){this.props.display(e),b=0}},{key:"clear",value:function(e){this.setState({a:0,b:0,typedDec:!1,action:0}),this.display(0)}},{key:"passNum",value:function(e){var t=this.state.b;0!==t?this.setState({b:t.toString().concat(e.toString())}):this.setState({b:e}),b=1}},{key:"decimal",value:function(e){this.state.typedDec||(this.passNum("."),this.setState({typedDec:!0}))}},{key:"action",value:function(e){0===this.state.a?this.setState({a:parseFloat(this.state.b),b:0,typedDec:!1,action:e}):this.setState({action:e})}},{key:"equals",value:function(e){var t=parseFloat(this.state.a),a=parseFloat(this.state.b);if(this.state.action){var s=0;switch(this.state.action){case"+":s=t+a;break;case"-":s=t-a;break;case"x":s=t*a;break;case"/":s=t/a}this.setState({a:0,b:s,action:0}),parseInt(s)===parseFloat(s)?this.setState({typedDec:!1}):this.setState({typedDec:!0}),this.display(s)}}},{key:"handleKeyPress",value:function(e){e.key<10&e.key>-1&&(this.passNum(e.key),this.display(this.state.b)),"Enter"===e.key&&this.equals(e.key),"."===e.key&&this.decimal(e.key)}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentDidUpdate",value:function(){0!==b&&this.display(this.state.b)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"calculator"},n.a.createElement("div",{id:"num"},m.map(function(t){return n.a.createElement(h,{className:"numbers",id:t.text,btn:t.index,pass:e.passNum})})),n.a.createElement("div",{id:"row2"},n.a.createElement(h,{className:"secondary",id:"clear",btn:"C",pass:this.clear}),n.a.createElement(h,{className:"secondary",btn:"=",pass:this.equals}),n.a.createElement(h,{className:"primary",id:"add",btn:"+",pass:this.action}),n.a.createElement(h,{className:"primary",id:"subtract",btn:"-",pass:this.action}),n.a.createElement(h,{className:"primary",id:"multiply",btn:"x",pass:this.action}),n.a.createElement(h,{className:"primary",id:"divide",btn:"/",pass:this.action}),n.a.createElement(h,{className:"numbers",id:"zero",btn:"0",pass:this.passNum}),n.a.createElement(h,{className:"numbers",id:"decimal",btn:".",pass:this.decimal})))}}]),t}(s.Component),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={display:0},a.display=a.display.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"display",value:function(e){this.setState({display:e})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",null," CALCULATOR "),n.a.createElement("hr",{className:"hr"}),n.a.createElement("div",{id:"display"},this.state.display),n.a.createElement(y,{display:this.display})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.a475fd43.chunk.js.map