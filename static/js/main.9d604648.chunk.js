(this.webpackJsonpjwitter=this.webpackJsonpjwitter||[]).push([[0],{27:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),u=n.n(c),l=n(3),i=n(10),o=n(1),s=n(4),m=n.n(s),p=n(8),d=n(12);n(33),n(35);d.initializeApp({apiKey:"AIzaSyDHPpDE_dVh2ZTTL-l0OWDrI7i_iFhMYmw",authDomain:"jwitter-389db.firebaseapp.com",databaseURL:"https://jwitter-389db.firebaseio.com",projectId:"jwitter-389db",storageBucket:"jwitter-389db.appspot.com",messagingSenderId:"357516351068",appId:"1:357516351068:web:e1a4733d49558d5c6f3899"});var f=d,b=d.auth(),E=d.firestore(),h=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(),i=Object(l.a)(u,2),o=i[0],s=i[1],d=Object(a.useState)(!0),E=Object(l.a)(d,2),h=E[0],v=E[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),g=j[0],O=j[1],x=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&s(a)},y=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=8;break}return e.next=5,b.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,b.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),O(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new f.auth.GoogleAuthProvider:"github"===n&&(a=new f.auth.GithubAuthProvider),e.next=4,b.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:y},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,vlaue:n,onChange:x}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,vlaue:o,onChange:x}),r.a.createElement("input",{type:"submit",value:h?"Create Account":"Sign In"}),r.a.createElement("span",{onClick:function(){return v((function(e){return!e}))}},h?"Sign In":"Create Account"),g),r.a.createElement("div",null,r.a.createElement("button",{onClick:S,name:"google"},"Continue with Google"),r.a.createElement("button",{onClick:S,name:"github"},"Continue with Github")))},v=n(26),w=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),u=Object(l.a)(c,2),i=u[0],o=u[1],s=Object(a.useState)(t.text),d=Object(l.a)(s,2),f=d[0],b=d[1],h=function(){return o((function(e){return!e}))},v=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,E.doc("nweets/".concat(t.id)).update({text:f});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("Are you sure you want to delete this nweet?"),console.log(n),!n){e.next=5;break}return e.next=5,E.doc("nweets/".concat(t.id)).delete();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,i?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{type:"text",placeholder:"Edit you nweet",value:f,onChange:function(e){var t=e.target.value;b(t)},required:!0}),r.a.createElement("input",{type:"submit",value:"Update Nweet"})),r.a.createElement("button",{onClick:h},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:w},"Delete Nweet"),r.a.createElement("button",{onClick:h},"Edit Nweet"))))},j=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(l.a)(n,2),u=c[0],i=c[1],o=Object(a.useState)([]),s=Object(l.a)(o,2),d=s[0],f=s[1];Object(a.useEffect)((function(){E.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(v.a)({id:e.id},e.data())}));f(t)}))}),[]);var b=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,E.collection("nweets").add({text:u,createdAt:Date.now(),creatorId:t.uid});case 3:i("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:b},r.a.createElement("input",{value:u,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"Nweet"})),r.a.createElement("div",null,d.map((function(e){return r.a.createElement(w,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},g=function(){var e=Object(o.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){b.signOut(),e.push("/")}},"Log Out"))},O=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile"},"My Profile"))))},x=function(e){var t=e.isLoggedIn,n=e.userObj;return r.a.createElement(i.a,null,t&&r.a.createElement(O,null),r.a.createElement(o.c,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(j,{userObj:n})),r.a.createElement(o.a,{exact:!0,path:"/profile"},r.a.createElement(g,null))):r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(h,null))))};var y=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(!1),i=Object(l.a)(u,2),o=i[0],s=i[1],m=Object(a.useState)(null),p=Object(l.a)(m,2),d=p[0],f=p[1];return Object(a.useEffect)((function(){b.onAuthStateChanged((function(e){e?(s(!0),f(e)):s(!1),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,n?r.a.createElement(x,{isLoggedIn:o,userObj:d}):"Initializing...",r.a.createElement("footer",null,"\xa9 ",(new Date).getFullYear()," Jwitter "))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.9d604648.chunk.js.map