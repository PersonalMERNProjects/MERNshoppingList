(window.webpackJsonpmernshoppinglist=window.webpackJsonpmernshoppinglist||[]).push([[0],{43:function(e,t,n){e.exports=n(79)},49:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(9),i=n.n(o),c=(n(48),n(49),n(14)),l=n(15),m=n(19),s=n(16),u=n(20),p=n(81),d=n(82),f=n(83),E=n(84),g=n(85),h=n(86),O=n(87),b=n(88),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},n.toggleNavbarHandler=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(d.a,null,r.a.createElement(f.a,{href:"/"},"ShoppingList"),r.a.createElement(E.a,{onClick:this.toggleNavbarHandler}),r.a.createElement(g.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(h.a,{className:"ml-auto",navbar:!0},r.a.createElement(O.a,null,r.a.createElement(b.a,{href:"https://github.com"},"Git Hub")))))))}}]),t}(a.Component),y=n(21),j=n(89),w=n(90),S=n(91),k=n(100),I=n(98),_=n(18),D=n(22),T=n.n(D),N=function(){return{type:"ITEMS_LOADING"}},A=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){var e=this,t=this.props.item.items;return r.a.createElement(d.a,null,r.a.createElement(j.a,{color:"dark",style:{marginBottom:"2rem"},onClick:function(){var t=prompt("Enter Item");t&&e.setState((function(e){return{items:[].concat(Object(y.a)(e.items),[{name:t}])}}))}},"Add Item"),r.a.createElement(w.a,null,r.a.createElement(k.a,{className:"shopping-list"},t.map((function(t){var n=t.id,a=t.name;return r.a.createElement(I.a,{key:n,timeout:500,classNames:"fade"},r.a.createElement(S.a,null,r.a.createElement(j.a,{className:"remove-btn mr-3",color:"danger",size:"sm",onClick:function(){e.setState((function(e){return{items:e.items.filter((function(e){return e.id!==n}))}}))}},"\xd7"),a))})))))}}]),t}(a.Component),C=Object(_.b)((function(e){return{item:e.item}}),{getItems:function(){return function(e){e(N()),T.a.get("/api/items").then((function(t){return e({type:"GET_ITEMS",payload:t.data})})).catch((function(e){console.error("fetch failed",e)}))}}})(A),L=n(11),M=n(41),P=n(17);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(P.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X={items:[],loading:!1},x=Object(L.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return B({},e,{items:t.payload.items,loading:!1});case"DELETE_ITEM":return B({},e,{items:e.items.filter((function(e){return e._id!==t.payload}))});case"ADD_ITEM":return B({},e,{items:[t.payload.item].concat(Object(y.a)(e.items))});case"ITEMS_LOADING":return B({},e,{loading:!0});default:return e}}}),H=[M.a],J=Object(L.e)(x,{},Object(L.d)(L.a.apply(void 0,H),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),R=n(99),U=n(92),V=n(93),W=n(94),z=n(95),$=n(96),q=n(97),F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,name:""},n.toggle=function(){n.setState({modal:!n.state.modal})},n.onChange=function(e){n.setState(Object(P.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t={name:n.state.name};n.props.addItem(t),n.toggle()},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{color:"dark",style:{marginBottom:"2rem"},onClick:this.toggle},"Add Item"),r.a.createElement(R.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(U.a,{toggle:this.toggle},"Add To Shopping List"),r.a.createElement(V.a,null,r.a.createElement(W.a,{onSubmit:this.onSubmit},r.a.createElement(z.a,null,r.a.createElement($.a,{for:"item"},"Add To Shopping List"),r.a.createElement(q.a,{type:"text",name:"name",id:"item",placeholder:"Add Shopping item",onChange:this.onChange}),r.a.createElement(j.a,{color:"dark",style:{marginTop:"2rem"},block:!0},"Add Item"))))))}}]),t}(a.Component),K=Object(_.b)((function(e){return{item:e.item}}),{addItem:function(e){return function(t){T.a.post("/api/items",e).then((function(e){t({type:"ADD_ITEM",payload:e.data})}))}}})(F);var Q=function(){return r.a.createElement(_.a,{store:J},r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(d.a,null,r.a.createElement(K,null),r.a.createElement(C,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.07427118.chunk.js.map