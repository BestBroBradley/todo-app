(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(4),d=n.n(i),a=(n(14),n(15),n(0)),r=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("h1",{children:"My To-do List"})})},s=n(2),j=function(e,t){return{type:"CONTROL",field:e,update:t}},l=function(e){var t=e.props,n=t.title,c=t.date,o=t.memo,i=t.id,d=Object(s.b)();return Object(a.jsxs)("div",{id:"todoitem",children:[Object(a.jsx)("h2",{id:"todotitle",children:n}),Object(a.jsxs)("h3",{className:"TodoDetails",children:["Do by: ",c]}),Object(a.jsx)("h3",{className:"TodoDetails",children:"Notes:"}),Object(a.jsx)("p",{children:o}),Object(a.jsx)("button",{onClick:function(){d(j("title",n)),d(j("date",c)),d(j("memo",o)),d(j("id",i))},children:"Update Todo"}),Object(a.jsx)("button",{onClick:function(){d(function(e){return{type:"REMOVE",payload:e}}(i))},children:"Delete Todo"})]})},u=function(){var e=Object(s.c)((function(e){return e.todos}));return Object(a.jsx)(a.Fragment,{children:0===e.length?Object(a.jsx)("h1",{id:"notodos",children:"Let's make some to-do items!"}):e.map((function(e){return Object(a.jsx)(l,{props:e},e.id)}))})},b=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.current})),n=function(t){var n=t.target,c=n.name,o=n.value;e(j(c,o))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"Header",children:"Add a new to-do:"}),Object(a.jsx)("h4",{children:"I have to..."}),Object(a.jsx)("input",{value:t.title,name:"title",onChange:n}),Object(a.jsx)("h4",{children:"Gotta do it by..."}),Object(a.jsx)("input",{value:t.date,name:"date",onChange:n}),Object(a.jsx)("h4",{children:"Extra notes?"}),Object(a.jsx)("input",{value:t.memo,name:"memo",onChange:n}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",onClick:function(){""===t.title||""===t.date?alert("Make sure you have a title and due date!"):(e({type:"ADD",payload:t}),e({type:"CLEAR"}))},children:"Submit"})]})},O=function(){return Object(a.jsxs)("div",{className:"Body",children:[Object(a.jsx)("div",{id:"newtodo",children:Object(a.jsx)(b,{})}),Object(a.jsx)("div",{id:"todos",children:Object(a.jsx)(u,{})})]})},h=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(r,{})}),Object(a.jsx)("div",{children:Object(a.jsx)(O,{})})]})},p=n(6),m=n(3),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{title:"Buy catfood",date:"5/30/2021",memo:"Don't buy beef food!",id:1},{title:"Return book to library",date:"4/30/2021",memo:"Overdue!!",id:2}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":switch(t.payload.id){case 0:var n=Object(m.a)(Object(m.a)({},t.payload),{},{id:Date.now()});return console.log(n),e.concat(n);default:console.log(t.payload);var c=e.filter((function(e){return e.id===t.payload.id}));c=t.payload;var o=e.filter((function(e){return e.id!==t.payload.id}));return o.concat(c)}case"REMOVE":var i=e.filter((function(e){return e.id!==t.payload}));return i;default:return e}},f=n(5),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",date:"",memo:"",id:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONTROL":return e=Object(m.a)(Object(m.a)({},e),{},Object(f.a)({},t.field,t.update));case"UPDATE":return e;case"CLEAR":return e={title:"",date:"",memo:"",id:0};default:return e}},y=Object(p.a)({todos:x,current:v}),g=Object(p.b)(y);d.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(s.a,{store:g,children:Object(a.jsx)(h,{})})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9fce29eb.chunk.js.map