(this["webpackJsonpweb-negosyo"]=this["webpackJsonpweb-negosyo"]||[]).push([[0],{39:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(11),s=a.n(c),i=a(42),o=a(12),u=a(21),j=(a(31),u.a.initializeApp({apiKey:"AIzaSyC0KkT4PYpIHjRtzc4h3KATtoSbW1qaksk",authDomain:"web-negosyo.firebaseapp.com",databaseURL:"https://web-negosyo-default-rtdb.firebaseio.com/",projectId:"web-negosyo",storageBucket:"web-negosyo.appspot.com",messagingSenderId:"548307081250",appId:"1:548307081250:web:6394e97da6d47fd49e127b",measurementId:"G-869J347LV0"})),d=j.auth(),b=a(6),l=n.a.createContext();function p(e){var t=e.children,a=Object(r.useState)(),n=Object(o.a)(a,2),c=n[0],s=n[1],i=Object(r.useState)(!0),u=Object(o.a)(i,2),j=u[0],p=u[1];Object(r.useEffect)((function(){return d.onAuthStateChanged((function(e){s(e),p(!1)}))}),[]);var h={currentUser:c,signup:function(e,t){return d.createUserWithEmailAndPassword(e,t)}};return Object(b.jsx)(l.Provider,{value:h,children:!j&&t})}var h=a(18),O=a.n(h),x=a(22),f=a(45),m=a(43),w=a(44),v=a(41);function g(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),n=Object(r.useContext)(l).signup,c=Object(r.useState)(""),s=Object(o.a)(c,2),i=s[0],u=s[1],j=Object(r.useState)(!1),d=Object(o.a)(j,2),p=d[0],h=d[1];function g(){return(g=Object(x.a)(O.a.mark((function r(c){return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c.preventDefault(),t.current.value===a.current.value){r.next=3;break}return r.abrupt("return",u("Passwords do not match"));case 3:return r.prev=3,u(""),h(!0),r.next=8,n(e.current.value,t.current.value);case 8:r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),u("Failed to create an account");case 13:h(!1);case 14:case"end":return r.stop()}}),r,null,[[3,10]])})))).apply(this,arguments)}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{children:Object(b.jsxs)(f.a.Body,{children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(b.jsx)(m.a,{variant:"danger",children:i}),Object(b.jsxs)(w.a,{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(b.jsxs)(w.a.Group,{id:"email",children:[Object(b.jsx)(w.a.Label,{children:"Email"}),Object(b.jsx)(w.a.Control,{type:"email",ref:e,required:!0})]}),Object(b.jsxs)(w.a.Group,{id:"password",children:[Object(b.jsx)(w.a.Label,{children:"Password"}),Object(b.jsx)(w.a.Control,{type:"password",ref:t,required:!0})]}),Object(b.jsxs)(w.a.Group,{id:"password-confirm",children:[Object(b.jsx)(w.a.Label,{children:"Password Confirmation"}),Object(b.jsx)(w.a.Control,{type:"password",ref:a,required:!0})]}),Object(b.jsx)(v.a,{disabled:p,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(b.jsx)("div",{className:"w-100 text-center mt-2",children:"Already have an account? Log In"})]})}var y=function(){return Object(b.jsx)(p,{children:Object(b.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(b.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(b.jsx)(g,{})})})})};a(38);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.641e2faa.chunk.js.map