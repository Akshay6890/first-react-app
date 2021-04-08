(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(16),o=c.n(a),r=(c(22),c(7)),l=c(0),i=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)(r.b,{to:"/",className:"logo",children:"The Dojo Blog"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(r.b,{to:"/",children:"Home"}),Object(l.jsx)(r.b,{to:"/create",children:"New Blog"})]})]})},j=c(8),b=c(2),d=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),o=Object(j.a)(a,2),r=o[0],i=o[1],d=Object(s.useState)("Mario"),h=Object(j.a)(d,2),u=h[0],O=h[1],x=Object(s.useState)(!1),g=Object(j.a)(x,2),m=g[0],f=g[1],p=Object(b.f)();return Object(l.jsxs)("div",{className:"create",children:[Object(l.jsx)("h2",{children:"Add a New Blog"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(!0);var t={title:c,author:u,body:r};fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){f(!1),p.push("/")}))},children:[Object(l.jsx)("input",{type:"text",required:!0,placeholder:"Blog Title",value:c,onChange:function(e){return n(e.target.value)}}),Object(l.jsx)("textarea",{required:!0,placeholder:"Blog Body",rows:"10",cols:"100",value:r,onChange:function(e){return i(e.target.value)}}),Object(l.jsxs)("select",{value:u,onChange:function(e){return O(e.target.value)},children:[Object(l.jsx)("option",{value:"Mario",children:"Mario"}),Object(l.jsx)("option",{value:"Yoshi",children:"Yoshi"}),Object(l.jsx)("option",{value:"Akshay",children:"Akshay"}),Object(l.jsx)("option",{value:"Vikas",children:"Vikas"}),Object(l.jsx)("option",{value:"Vamsi",children:"Vamsi"})]}),!m&&Object(l.jsx)("button",{children:"Add Blog"}),m&&Object(l.jsx)("button",{disabled:!0,children:"Adding Blog..."})]})]})},h=function(e){var t=e.blogs;return Object(l.jsx)("div",{className:"bloglist",children:t.map((function(e){return Object(l.jsxs)(r.b,{to:"/blog/".concat(e.id),className:"blog-preview",children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsxs)("h4",{children:["Written by ",e.author]}),Object(l.jsx)("br",{})]},e.id)}))})},u=function(e){var t=new AbortController,c=Object(s.useState)(null),n=Object(j.a)(c,2),a=n[0],o=n[1],r=Object(s.useState)(!0),l=Object(j.a)(r,2),i=l[0],b=l[1],d=Object(s.useState)(null),h=Object(j.a)(d,2),u=h[0],O=h[1];return Object(s.useEffect)((function(){return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(t){if(t.ok)return t.json();throw Error("Oops! Invalid Resource... "+e)})).then((function(e){o(e),b(!1),O(null)})).catch((function(e){"AbortError"!==e.name&&(b(!1),O(e.message))}))}),1e3),function(){return t.abort()}}),[e]),{data:a,error:u,status:i}},O=function(){var e=u("http://localhost:8000/blogs"),t=e.data,c=e.error,s=e.status;return Object(l.jsxs)("div",{className:"home",children:[c&&Object(l.jsx)("div",{className:"error-msg",children:c}),s&&Object(l.jsx)("div",{className:"status",children:"Loading..."}),t&&Object(l.jsx)(h,{blogs:t})]})},x=function(){var e=Object(b.g)().id,t=Object(b.f)(),c=u("http://localhost:8000/blogs/"+e),s=c.data,n=c.error,a=c.status;return Object(l.jsxs)("div",{className:"blog-page",children:[n&&Object(l.jsx)("div",{className:"error-msg",children:n}),a&&Object(l.jsx)("div",{className:"status",children:"Loading..."}),s&&Object(l.jsxs)("div",{className:"blog",children:[Object(l.jsx)("h2",{className:"blog-title",children:s.title}),Object(l.jsxs)("h4",{className:"blog-author",children:["Written by ",s.author]}),Object(l.jsx)("p",{className:"blog-body",children:s.body}),Object(l.jsx)("button",{className:"blog-delete",onClick:function(){fetch("http://localhost:8000/blogs/"+e,{method:"DELETE"}).then((function(){t.push("/")}))},children:"Delete"})]})]})},g=function(){return Object(l.jsxs)("div",{className:"not-found",children:[Object(l.jsx)("h2",{className:"not-found-head",children:"Looks like you are lost \ud83d\ude41"}),Object(l.jsx)(r.b,{to:"/",className:"not-found-msg",children:"Take me back to home page."})]})};var m=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(i,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{exact:!0,path:"/",children:Object(l.jsx)(O,{})}),Object(l.jsx)(b.a,{path:"/create",children:Object(l.jsx)(d,{})}),Object(l.jsx)(b.a,{path:"/blog/:id",children:Object(l.jsx)(x,{})}),Object(l.jsx)(b.a,{path:"*",children:Object(l.jsx)(g,{})})]})})]})})};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.3a16211e.chunk.js.map