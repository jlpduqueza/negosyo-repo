(this["webpackJsonpweb-negosyo"]=this["webpackJsonpweb-negosyo"]||[]).push([[0],{39:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(11),s=r.n(c),i=r(42),o=r(13),u=r(21),j=(r(31),u.a.initializeApp({apiKey:"AIzaSyC0KkT4PYpIHjRtzc4h3KATtoSbW1qaksk",authDomain:"web-negosyo.firebaseapp.com",projectId:"web-negosyo",storageBucket:"web-negosyo.appspot.com",messagingSenderId:"548307081250",appId:"1:548307081250:web:6394e97da6d47fd49e127b",measurementId:"G-869J347LV0"})),d=j.auth(),b=r(6),l=n.a.createContext();function p(e){var t=e.children,r=Object(a.useState)(),n=Object(o.a)(r,2),c=n[0],s=n[1];Object(a.useEffect)((function(){var e=d.onAuthStateChanged((function(t){return s(t),e}))}),[]);var i={currentUser:c,signup:function(e,t){return d.createUserWithEmailAndPassword(e,t)}};return Object(b.jsx)(l.Provider,{value:i,children:t})}var h=r(18),O=r.n(h),x=r(22),m=r(45),f=r(43),v=r(44),w=r(41);function g(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useRef)(),n=Object(a.useContext)(l).signup,c=Object(a.useState)(""),s=Object(o.a)(c,2),i=s[0],u=s[1],j=Object(a.useState)(!1),d=Object(o.a)(j,2),p=d[0],h=d[1];function g(){return(g=Object(x.a)(O.a.mark((function a(c){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),t.current.value!==r.current.value){a.next=3;break}return a.abrupt("return",u("Passwords do not match"));case 3:return a.prev=3,u(""),h(!0),a.next=8,n(e.current.value,t.current.value);case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),u("Failed to create an account");case 13:h(!1);case 14:case"end":return a.stop()}}),a,null,[[3,10]])})))).apply(this,arguments)}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m.a,{children:Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(b.jsx)(f.a,{variant:"danger",children:i}),Object(b.jsxs)(v.a,{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(b.jsxs)(v.a.Group,{id:"email",children:[Object(b.jsx)(v.a.Label,{children:"Email"}),Object(b.jsx)(v.a.Control,{type:"email",ref:e,required:!0})]}),Object(b.jsxs)(v.a.Group,{id:"password",children:[Object(b.jsx)(v.a.Label,{children:"Password"}),Object(b.jsx)(v.a.Control,{type:"password",ref:t,required:!0})]}),Object(b.jsxs)(v.a.Group,{id:"password-confirm",children:[Object(b.jsx)(v.a.Label,{children:"Password Confirmation"}),Object(b.jsx)(v.a.Control,{type:"password",ref:r,required:!0})]}),Object(b.jsx)(w.a,{disabled:p,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(b.jsx)("div",{className:"w-100 text-center mt-2",children:"Already have an account? Log In"})]})}var y=function(){return Object(b.jsx)(p,{children:Object(b.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(b.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(b.jsx)(g,{})})})})};r(38);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7a972301.chunk.js.map