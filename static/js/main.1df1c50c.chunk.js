(this["webpackJsonpreact-form-fp"]=this["webpackJsonpreact-form-fp"]||[]).push([[0],{136:function(e,a,t){"use strict";t.r(a);t(32);var l,n,r=t(0),c=t.n(r),m=t(47),i=t.n(m),o=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{id:"about"},"React Form FP"),c.a.createElement("hr",null),c.a.createElement("blockquote",null,"Yet another form library for React, created as context provider, following functional programming principles."," "),c.a.createElement("hr",null),c.a.createElement("p",null,"React Form FP is a state management and validation library for easy form manipulation. Entire API is exposed though context provider, so it makes it easy to work with ",c.a.createElement("b",null,"class components")," or"," ",c.a.createElement("b",null,"functional components")),c.a.createElement("p",null,"Library has two major functionalities ",c.a.createElement("b",null,"FormContext")," for form state and validation and ",c.a.createElement("b",null,"WizardContext")," for multi-step forms."))},s=function(){return c.a.createElement("div",{className:"md-3 sidebar"},c.a.createElement("div",{className:"paper"},c.a.createElement("h4",null,c.a.createElement("a",{href:"#about"},"About")),c.a.createElement("h4",null,c.a.createElement("a",{href:"#installation"},"Installation")),c.a.createElement("h4",null,c.a.createElement("a",{href:"#usage"},"Usage")),c.a.createElement("h4",null,c.a.createElement("a",{href:"#examples"},"Examples")),c.a.createElement("h5",null,c.a.createElement("a",{href:"#examples-sfv"},"Simple Form Validation"))))},u=function(){return c.a.createElement("nav",{className:"border fixed split-nav"},c.a.createElement("div",{className:"nav-brand"},c.a.createElement("h3",null,c.a.createElement("a",{href:"/"},"React Form FP"))),c.a.createElement("div",{className:"collapsible"},c.a.createElement("input",{id:"collapsible1",type:"checkbox",name:"collapsible1"}),c.a.createElement("label",{htmlFor:"collapsible1"},c.a.createElement("div",{className:"bar1"}),c.a.createElement("div",{className:"bar2"}),c.a.createElement("div",{className:"bar3"})),c.a.createElement("div",{className:"collapsible-body"},c.a.createElement("ul",{className:"inline"},c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"About")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"Documentation")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/rasha08/react-form-fp",target:"_blank",rel:"noopener noreferrer"},"Github"))))))},E=function(){return c.a.createElement("div",{className:"row flex-center beta-warn"},c.a.createElement("div",{className:"md-6"},c.a.createElement("input",{className:"alert-state",id:"alert-4",type:"checkbox"}),c.a.createElement("div",{className:"alert alert-warning dismissible"},"React Form FP library is still in beta version",c.a.createElement("label",{className:"btn-close",htmlFor:"alert-4"},"X"))))},d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"installation"},"Installation"),c.a.createElement("p",null,"Install the package from ",c.a.createElement("b",null,"NPM")," by running:"),c.a.createElement("code",null,"npm install react-form-fp"),c.a.createElement("p",null," or"),c.a.createElement("code",null,"yarn add react-form-fp"))},f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"usage"},"Usage"),c.a.createElement("p",null,"Coming Soon..."))},p=(t(30),t(48),t(51),t(12)),b=t(13),v=t(2),N=t(141),h=t(140),F=t(139),O=(t(31),t(138),function(e,a){switch(a.type){case"CLEAR_FIELD_ERROR":return Object(v.a)(Object(v.a)({},e),{errors:Object(v.a)(Object(v.a)({},e.errors),{},Object(b.a)({},a.payload.field,null))});case"SET_FIELD_ERROR":return Object(v.a)(Object(v.a)({},e),{errors:Object(v.a)(Object(v.a)({},e.errors),Object(b.a)({},a.payload.field,a.payload.error))});case"SET_FILED_VALUE":return Object(v.a)(Object(v.a)({},e),Object(b.a)({},a.payload.formName,Object(v.a)(Object(v.a)({},e[a.payload.formName]),Object(b.a)({},a.payload.field,a.payload.value))));default:return e}}),j=Object(r.createContext)({}),x=function(e){var a=e.initialState,t=e.validationSchema,l=e.children,n=Object(r.useReducer)(O,Object(v.a)(Object(v.a)({},a),{errors:{}})),m=Object(p.a)(n,2),i=m[0],o=m[1],s=function(e,a){return{setFieldValueAction:function(e,t,l){a({type:"SET_FILED_VALUE",payload:{formName:e,field:t,value:l}})},setFieldErrorAction:function(e,t){a({type:"SET_FIELD_ERROR",payload:{field:e,error:t}})},clearFieldError:function(t){e.errors[t]&&a({type:"CLEAR_FIELD_ERROR",payload:{field:t}})}}}(i,o),u=s.setFieldErrorAction,E=s.clearFieldError,d=s.setFieldValueAction,f=function(e,a,t){var l=Object(N.a)(2,(function(e,l){return l?a(e,l):t(e)}));return{validate:Object(N.a)(3,(function(a,t,n){if(Object(h.a)(a,e)&&Object(h.a)(t,e[a])){var r=e[a][t];Object(F.a)(l(t),r)(n)}})),validateAll:function(a,t){var n=[],r=function(e){return e&&n.push(!!n),e};return Object.entries(t).forEach((function(t){var n=Object(p.a)(t,2),c=n[0],m=n[1];Object(h.a)(a,e)&&Object(h.a)(c,e[a])&&Object(F.a)(l(c),r,e[a][c])(m)})),!n.length}}}(t,u,E),b=f.validate,x=f.validateAll;return c.a.createElement(j.Provider,{value:{setFieldValue:function(e){return function(a){return function(t){i.errors[a]&&b(e)(a)(t),d(e,a,t)}}},validate:b,state:i,validateForm:function(e,a){return x(e,a)}}},l)};Object(r.createContext)({});!function(e){e.Example="example"}(l||(l={})),function(e){e.FirstName="firstName",e.LastName="lastName"}(n||(n={}));var g={example:{firstName:function(e){return e.trim()?null:"First name is required"},lastName:function(){return null}}},y=function(){var e=Object(r.useContext)(j),a=e.setFieldValue,t=e.validate,m=e.validateForm,i=e.state,o=e.state,s=o.errors,u=o.example,E=Object(r.useCallback)((function(e){return function(t){var n=t.target.value;a(l.Example)(e)(n)}}),[a]),d=Object(r.useCallback)((function(e){return function(a){var n=a.target.value;t(l.Example)(e)(n||u[e])}}),[t,u]),f=Object(r.useCallback)((function(){m(l.Example,u)&&alert(JSON.stringify(u,null,2))}),[m,u]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"form-group col-6"},c.a.createElement("label",null,"First Name"),c.a.createElement("input",{value:u.firstName,onChange:E(n.FirstName),onBlur:d(n.FirstName)}),!!s.firstName&&c.a.createElement("p",{className:"text-danger"},s.firstName),c.a.createElement("label",null,"Last Name"),c.a.createElement("input",{value:u.lastName,onChange:E(n.FirstName),onBlur:d(n.FirstName)}),!!s.lastName&&c.a.createElement("p",{className:"text-danger"},s.lastName),c.a.createElement("button",{onClick:f},"Submit Form")),c.a.createElement("div",{className:"col-6"},c.a.createElement("b",null,"Form ContextState"),c.a.createElement("pre",null,c.a.createElement("code",null,JSON.stringify(i,null,2)))))},R=function(){return c.a.createElement(x,{initialState:{example:{firstName:"",lastName:""}},validationSchema:g},c.a.createElement(y,null))},S=t(49),C=t.n(S),k=function(e){var a=e.title,t=e.id,l=e.example,n=e.doc,m=Object(r.useState)(!1),i=Object(p.a)(m,2),o=i[0],s=i[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{id:t},a),c.a.createElement("div",{className:"example row"},c.a.createElement(l,null),c.a.createElement("div",{className:"example-doc"},o&&c.a.createElement(C.a,{source:n})),c.a.createElement("button",{className:"example-toggle",onClick:function(){return s((function(e){return!e}))}},o?"Hide Code":"Show Code")))},w=t(50),A=t.n(w),L=function(){return c.a.createElement(r.Suspense,{fallback:"..."},c.a.createElement("h2",{id:"examples"},"Examples"),c.a.createElement(k,{example:R,doc:A.a,title:"Simple Form validation",id:"examples-sfv"}))},_=function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement(u,null),c.a.createElement(E,null),c.a.createElement("div",{className:"row flex-center"},c.a.createElement(s,null),c.a.createElement("div",{className:"md-8 offset-1"},c.a.createElement("div",{className:"paper"},c.a.createElement(o,null),c.a.createElement("div",{className:"section"},c.a.createElement(d,null)),c.a.createElement("div",{className:"section"},c.a.createElement(f,null)),c.a.createElement("div",{className:"section"},c.a.createElement(L,null))))))};i.a.render(c.a.createElement(_,null),document.getElementById("root"))},32:function(e,a,t){},50:function(e,a,t){e.exports=t.p+"static/media/SimpleFormValidation.27ffdb5e.md"},52:function(e,a,t){e.exports=t(136)}},[[52,1,2]]]);
//# sourceMappingURL=main.1df1c50c.chunk.js.map