(this["webpackJsonptype-racer-game"]=this["webpackJsonptype-racer-game"]||[]).push([[4],{100:function(e,n,t){},101:function(e,n,t){"use strict";var r=t(31),a=t(0),o=t.n(a);function i(){var e=Object(r.a)(["\n    text-align: center;\n    border-radius: 2.5px;\n    background-color: silver;\n    font-size: 1.5rem;\n    color: #fa391d;\n"]);return i=function(){return e},e}var c=t(32).a.div(i());n.a=function(e){var n=e.alert;return o.a.createElement(c,null,o.a.createElement("p",null,n))}},102:function(e,n,t){"use strict";var r=t(31),a=t(32);function o(){var e=Object(r.a)(["\n    height: 100px;\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);return o=function(){return e},e}n.a=a.a.section(o())},107:function(e,n,t){e.exports=t.p+"static/media/coding2.d32e673d.jpg"},111:function(e,n,t){"use strict";t.r(n);var r=t(35),a=t(34),o=t(98),i=t(0),c=t.n(i),u=t(22),l=t(16),s=t(20),f=t(17),m=t(97),d=t(107),p=t.n(d),g=(t(100),t(24)),b=t(7),v=t(33),h=t(99),j=t(101),y=t(102),E=function(e){var n=e.userLoginActionCreator,t=e.isLoading,u=e.isAuth,l=e.alert,d=e.error,g=Object(i.useState)({login:"",password:""}),b=Object(o.a)(g,2),E=b[0],O=b[1],x=function(e){var n=e.currentTarget,t=n.name,o=n.value;O(Object(a.a)({},E,Object(r.a)({},t,o)))},w=E.login,k=E.password;return u?c.a.createElement(s.a,{to:"/home"}):c.a.createElement(m.a,{bgImage:p.a},c.a.createElement("div",{className:"login-area"},c.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),n(w,k)}(e)}},c.a.createElement("h3",null,"Login here"),c.a.createElement("input",{className:"login-field",type:"email",placeholder:"E-mail",name:"login",value:w,onChange:function(e){return x(e)},required:!0}),c.a.createElement("input",{className:"login-field",type:"password",placeholder:"Password",name:"password",value:k,onChange:function(e){return x(e)},minLength:"6",required:!0}),c.a.createElement("input",{type:"submit",value:"Login",className:"designed-btn"}),c.a.createElement("p",{className:"form-bottom"},"Don't have an account? ",c.a.createElement(f.b,{to:"/registration"},"Sign Up")))),c.a.createElement(y.a,null,d&&c.a.createElement(h.a,{error:d}),l&&c.a.createElement(j.a,{alert:l}),t&&c.a.createElement(v.a,null)))};E.defaultProps={alert:null,error:null};n.default=Object(u.b)((function(e){return{user:Object(g.b)(e),isAuth:Object(g.d)(e),isLoading:Object(g.e)(e),error:Object(g.c)(e),alert:Object(g.a)(e)}}),(function(e){return Object(l.bindActionCreators)({userLoginActionCreator:b.h},e)}))(E)},97:function(e,n,t){"use strict";var r=t(31);function a(){var e=Object(r.a)(["\n    background: url(",");\n    width: 100%;\n    min-height: 600px;\n    background-size: cover;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    flex-direction: column;\n    overflow-scrolling: touch;\n"]);return a=function(){return e},e}var o=t(32).a.div(a(),(function(e){return e.bgImage}));n.a=o},98:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(n,"a",(function(){return r}))},99:function(e,n,t){"use strict";var r=t(31),a=t(0),o=t.n(a);function i(){var e=Object(r.a)(["\n    text-align: center;\n    border-radius: 2.5px;\n    padding: 0.25rem;\n    background-color: darkorange;\n    font-size: 1.5rem;\n    color: whitesmoke;\n    transition: ease-out 0.2s;\n    :hover{\n      box-shadow: 0 0 16px 6px gray;\n    } \n"]);return i=function(){return e},e}var c=t(32).a.div(i());n.a=function(e){var n=e.error;return o.a.createElement(c,null,o.a.createElement("p",null,o.a.createElement("b",null,n)))}}}]);
//# sourceMappingURL=4.71765dea.chunk.js.map