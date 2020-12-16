(this["webpackJsonpreact-form-fp"]=this["webpackJsonpreact-form-fp"]||[]).push([[0],{14:function(e,a,t){"use strict";t.r(a);t(5);var l=t(0),n=t.n(l),r=t(7),i=t.n(r),m=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{id:"about"},"React Form FP"),n.a.createElement("hr",null),n.a.createElement("blockquote",null,"Yet another form library for React, created as context provider, following functional programming principles."," "),n.a.createElement("hr",null),n.a.createElement("p",null,"React Form FP is a state management and validation library for easy form manipulation. Entire API is exposed though context provider, so it makes it easy to work with ",n.a.createElement("b",null,"class components")," or"," ",n.a.createElement("b",null,"functional components")),n.a.createElement("p",null,"Library has two major functionalities ",n.a.createElement("b",null,"FormContext")," for form state and validation and ",n.a.createElement("b",null,"WizardContext")," for multi-step forms."))},o=function(){return n.a.createElement("div",{className:"md-3 sidebar"},n.a.createElement("div",{className:"paper"},n.a.createElement("h4",null,n.a.createElement("a",{href:"#about"},"About")),n.a.createElement("h4",null,n.a.createElement("a",{href:"#installation"},"Installation")),n.a.createElement("h4",null,n.a.createElement("a",{href:"#usage"},"Usage"),n.a.createElement("small",null,n.a.createElement("a",{href:"#form-state"},"Form State")),n.a.createElement("small",null,n.a.createElement("a",{href:"#handle-change"},"Handling updates")),n.a.createElement("small",null,n.a.createElement("a",{href:"#add-remove-field"},"Adding and Removing Form Fields")),n.a.createElement("small",null,n.a.createElement("a",{href:"#reading-errors"},"Showing Errors")),n.a.createElement("small",null,n.a.createElement("a",{href:"#validation-schema"},"Validation Schema")),n.a.createElement("small",null,n.a.createElement("a",{href:"#single-field-validator"},"Single Field Validator")),n.a.createElement("small",null,n.a.createElement("a",{href:"#validate-form"},"Validate Entire Form")),n.a.createElement("small",null,n.a.createElement("a",{href:"#set-field-validator"},"Set Field Validator"))),n.a.createElement("h4",null,n.a.createElement("a",{href:"#examples"},"Examples"),n.a.createElement("small",null,n.a.createElement("a",{href:"#examples-sfv"},"Simple Form Validation")),n.a.createElement("small",null,n.a.createElement("a",{href:"#examples-cfv"},"Conditional Form Validation")),n.a.createElement("small",null,n.a.createElement("a",{href:"#examples-dv"},"Adding and removing validators")))))},c=function(){return n.a.createElement("nav",{className:"border fixed split-nav"},n.a.createElement("div",{className:"nav-brand"},n.a.createElement("h3",null,n.a.createElement("a",{href:"/"},"React Form FP"))),n.a.createElement("div",{className:"collapsible"},n.a.createElement("input",{id:"collapsible1",type:"checkbox",name:"collapsible1"}),n.a.createElement("label",{htmlFor:"collapsible1"},n.a.createElement("div",{className:"bar1"}),n.a.createElement("div",{className:"bar2"}),n.a.createElement("div",{className:"bar3"})),n.a.createElement("div",{className:"collapsible-body"},n.a.createElement("ul",{className:"inline"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"About")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Documentation")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/rasha08/react-form-fp",target:"_blank",rel:"noopener noreferrer"},"Github"))))))},u=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"installation"},"Installation"),n.a.createElement("p",null,"Install the package from ",n.a.createElement("b",null,"NPM")," by running:"),n.a.createElement("code",null,"npm install react-form-fp"),n.a.createElement("p",null," or"),n.a.createElement("code",null,"yarn add react-form-fp"))},s=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"usage"},"Usage"),n.a.createElement("p",null,"Form Context has on 2 major blocks"),n.a.createElement("ul",null,n.a.createElement("li",null,"State",n.a.createElement("ul",null,n.a.createElement("li",null,"Form State and Errors"),n.a.createElement("li",null,"Field value update handler"),n.a.createElement("li",null,"Adding and Removing form fields"))),n.a.createElement("li",null,"Validation Schema",n.a.createElement("ul",null,n.a.createElement("li",null,"Schema"),n.a.createElement("li",null,"Validators",n.a.createElement("ul",null,n.a.createElement("li",null,"Single Field Validator"),n.a.createElement("li",null,"Entire Form Validator"),n.a.createElement("li",null,"Registering New Validators Dynamically")))))),n.a.createElement("h4",{id:"form-state"},"Form State"),n.a.createElement("p",null,"Form State is created from the initial state provided to the"," ",n.a.createElement("b",null,n.a.createElement("i",null,"FormContextProvider"))," ","and extended with errors property."),n.a.createElement("code",null,"<FormContextProvider initialState={...} ...> ... </FormContextProvider>"),n.a.createElement("p",null,"State model is really simple but strict, initial state must have form name as top level key, and form fields as nested level properties, this is because of support for multiple forms on single view as well as multiple steps forms (Wizard)."),n.a.createElement("p",null,n.a.createElement("i",null,"So for example if we want to handle login form which have a username and password fields, our initial state model would look like this:")),n.a.createElement("code",null,"\n        const initialState = {\n          login: {\n            username: '',\n            password: ''\n          }\n        }\n        "),n.a.createElement("p",null,"And inside of your component you can consume that state by using"," ",n.a.createElement("b",null,n.a.createElement("i",null,"useFormContext()"))),n.a.createElement("code",null,"const { state: { login } } = useFormContext()"),n.a.createElement("p",null,"And this login object is of same structure as you initial state, so you can now have some input with value, for example,"," ",n.a.createElement("b",null,n.a.createElement("i",null,"username"))),n.a.createElement("code",null,"<input value={login.username} ... />"),n.a.createElement("h4",{id:"handle-change"},"Field value update handler"),n.a.createElement("p",null,"To update any field value inside the form you need to use"," ",n.a.createElement("b",null,n.a.createElement("i",null,"setFieldValue"))," ","handler from"," ",n.a.createElement("b",null,n.a.createElement("i",null,"useFormContext")),". It is a very simple method that is in charge of updating specific field within the form."),n.a.createElement("p",null,"Method is curried function and accepts 3 params"," ",n.a.createElement("b",null,n.a.createElement("i",null,"formName")),n.a.createElement("i",null,"(form key in FormContext state) "),n.a.createElement("b",null,n.a.createElement("i",null,"field")),n.a.createElement("i",null,"(key within the form) "),n.a.createElement("b",null,n.a.createElement("i",null,"value")),n.a.createElement("i",null,"(new value for the field)")),n.a.createElement("code",null,"const { setFieldValue } = useFormContext()"),n.a.createElement("br",null),n.a.createElement("code",null,"..."),n.a.createElement("br",null),n.a.createElement("code",null,"const handleFormChange = setFieldValue('login')"),n.a.createElement("br",null),n.a.createElement("code",null,"const handleFieldChange = (field) => ({ target: { value }}) => handleFormChange(field)(value);"),n.a.createElement("br",null),n.a.createElement("code",null,"..."),n.a.createElement("br",null),n.a.createElement("code",null,"<input value={login.username} onChange={handleFieldChange('username')} ... />"),n.a.createElement("h4",{id:"add-remove-field"},"Adding and Removing Form Fields"),n.a.createElement("p",null,"Sometimes you will need to add new fields to a form, or to remove the existing ones, depending on your application logic"),n.a.createElement("p",null,n.a.createElement("b",null,"Add Form Field")," (",n.a.createElement("i",null,"Validator is optional"),")"),n.a.createElement("code",null,"type AddField<FormName extends string | number, ValueType = FieldValue> = (\n  formName: FormName,\n  field: string,\n  value: FieldValue,\n  validator?: Validator<ValueType>\n) => void"),n.a.createElement("p",null,n.a.createElement("b",null,"Remove Form Field")," (",n.a.createElement("i",null,"Validator will be removed"),")"),n.a.createElement("code",null,"type RemoveField<FormName extends string | number> = (\n  formName: FormName,\n  field: string\n) => void"),n.a.createElement("h4",{id:"reading-errors"},"Errors"),n.a.createElement("p",null,"Errors are stored inside of the"," ",n.a.createElement("b",null,n.a.createElement("i",null,"FormContext state"))," ","by the"," ",n.a.createElement("b",null,n.a.createElement("i",null,"errors"))," ","key and every form field that has a defined validator have either"," ",n.a.createElement("b",null,n.a.createElement("i",null,"null"))," ","or"," ",n.a.createElement("b",null,n.a.createElement("i",null,"string"))," ","value"),n.a.createElement("p",null,"Error State type is:"),n.a.createElement("code",null,"type ErrorState<FormName extends number | string, T> = {\n  errors: {\n    [key in FormName]: {\n      [key in FieldName<T>]: string | null\n    }\n  }"),n.a.createElement("p",null,"In our login example, error message logic for ",n.a.createElement("i",null,"username")," field should look something like this"),n.a.createElement("code",null,"..."),n.a.createElement("br",null),n.a.createElement("code",null,"{!!errors.example.username && <p className='text-danger'>{errors.example.username}</p>} "),n.a.createElement("br",null),n.a.createElement("code",null,"..."),n.a.createElement("h4",{id:"validation-schema"},"Validation Schema"),n.a.createElement("p",null,"Validation schema is used to define form validation and it follows the same structure as initial form state"),n.a.createElement("code",null,"{ [formName]: { formField: validatorFunc } }"),n.a.createElement("p",null,"Validator function is a simple function that accepts a value and returns either"," ",n.a.createElement("b",null,n.a.createElement("i",null,"string | null"))),n.a.createElement("p",null," ",n.a.createElement("b",null,n.a.createElement("i",null,"ValidationSchema"))," ","is generic type accepts two additional types"," ",n.a.createElement("b",null,n.a.createElement("i",null,"FormName"))," ",n.a.createElement("b",null,n.a.createElement("i",null,"FormType")),n.a.createElement("code",null,"\n          export type Validator<VT = unknown, ST = unknown> = (\n            value: VT,\n            state?: ST\n          ) => string | null\n\n          export type ValidationSchema<\n            FormName extends number | string = string,\n            FormField extends number | string = string\n          > = {\n            [key in FormName]: {\n              [key in FormField]: Validator\n            }\n          }\n          ")),n.a.createElement("p",null,"So for our login form we can define a validation schema:"),n.a.createElement("code",null,"   {\n        login: {\n         firstName: (val: string) => !!val.trim() ? null : 'First name is required',\n         lastName: () => null // Empty validator\n       }\n    }"),n.a.createElement("p",null,"The idea behind it is really simple, every field that has a defined validator will be validated against it, and if validator returns a"," ",n.a.createElement("b",null,n.a.createElement("i",null,"null"))," ","field is valid."),n.a.createElement("h4",{id:"single-field-validator"},"Single Field Validator"),n.a.createElement("p",null,"Field validator is a function which takes field value as an argument and returns either string or null. Additionally every validator gets a"," ",n.a.createElement("b",null,n.a.createElement("i",null,"FormContext state"))," ","as second a parameter, which can be useful when writing a conditional validations"," ",n.a.createElement("i",null,n.a.createElement("small",null,"(if the field validation logic depends on a another field value within the state. ex: Passport number validation is bound to selected country)"))),n.a.createElement("p",null,"Validator function type is:"),n.a.createElement("code",null,"type Validator<VT, ST> = (value: VT, state?: ST) => string | null"),n.a.createElement("h4",{id:"validate-form"},"Validate Entire Form"),n.a.createElement("p",null,"Validate entire form will run all defined validator and return"," ",n.a.createElement("b",null,"true")," or ",n.a.createElement("b",null,"false"),", also while running the validators will set form errors if any of the validator fails"),n.a.createElement("p",null,"Validate form function type is"),n.a.createElement("code",null,"ValidateForm<FormName extends string | number, T> = (formName: FormName, values: T) => boolean"),n.a.createElement("h4",{id:"set-field-validator"},"Set Field Validator"),n.a.createElement("p",null,"Set filed validator is used for adding, removing or updating validators from initial validation schema."),n.a.createElement("p",null,"Type of setValidator function is: "),"s",n.a.createElement("code",null,"SetValidator<FormName extends string | number, T, ValueType = unknown> = (\n  formName: FormName,\n  field: keyof T,\n  validator: Validator<ValueType>\n) => void"))},d=t(8),E=function(e){var a=e.title,t=e.id,r=e.example,i=e.doc,m=Object(l.useState)(!1),o=Object(d.a)(m,2),c=o[0],u=o[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"margin-top-large"}),n.a.createElement("hr",null),n.a.createElement("h4",{id:t},a),n.a.createElement("div",{className:"example row"},n.a.createElement(r,null),n.a.createElement("div",{className:"example-doc"},c&&n.a.createElement(i,null)),n.a.createElement("button",{className:"example-toggle",onClick:function(){return u((function(e){return!e}))}},c?"Hide Code":"Show Code")))},f=t(16),p=t(18),h=t(19);t(4),t(17);function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var b,N,g=function(e,a){var t,l,n,r,i,m,o,c,u;switch(a.type){case"CLEAR_FIELD_ERROR":return v({},e,{errors:v({},e.errors,(l={},l[a.payload.formName]=v({},e.errors[a.payload.formName],(t={},t[a.payload.field]=null,t)),l))});case"SET_FIELD_ERROR":return console.log(a),v({},e,{errors:v({},e.errors,(r={},r[a.payload.formName]=v({},e.errors[a.payload.formName],(n={},n[a.payload.field]=a.payload.error,n)),r))});case"SET_FILED_VALUE":return v({},e,((m={})[a.payload.formName]=v({},e[a.payload.formName],((i={})[a.payload.field]=a.payload.value,i)),m));case"ADD_FIELD":return v({},e,((c={})[a.payload.formName]=v({},e[a.payload.formName],((o={})[a.payload.field]=a.payload.value,o)),c));case"REMOVE_FIELD":return v({},e,((u={})[a.payload.formName]=Object(f.a)([a.payload.field],e[a.payload.formName]),u));default:return e}},F=function(e,a,t){var l=function(e,l,n){return n?a(e,l,n):t(e,l)};return{validate:Object(p.a)(4,(function(a,t,n,r){if(Object(h.a)(a,e)&&Object(h.a)(t,e[a])){var i=e[a][t];l(a,t,i(n,r))}})),validateAll:function(a,t,n){var r=[];return Object.entries(t).forEach((function(t){var i,m=t[0],o=t[1];Object(h.a)(a,e)&&(Object(h.a)(m,e[a])&&l(a,m,((i=e[a][m](o,n))&&r.push(!!r),i)))})),!r.length}}},x=Object(l.createContext)({}),y=function(){return Object(l.useContext)(x)},C=function(e){var a=e.initialState,t=e.validationSchema,r=e.children,i=Object(l.useReducer)(g,v({},a,{errors:Object.fromEntries(Object.keys(a).map((function(e){return[e,{}]})))})),m=i[0],o=i[1],c=Object(l.useState)(t),u=c[0],s=c[1],d=function(e,a){return{setFieldValueAction:function(e,t,l){a({type:"SET_FILED_VALUE",payload:{formName:e,field:t,value:l}})},setFieldErrorAction:function(e,t,l){a({type:"SET_FIELD_ERROR",payload:{formName:e,field:t,error:l}})},clearFieldError:function(t,l){e.errors[t]&&e.errors[t][l]&&a({type:"CLEAR_FIELD_ERROR",payload:{formName:t,field:l}})},addFieldAction:function(e,t,l){a({type:"ADD_FIELD",payload:{formName:e,field:t,value:l}})},removeFieldAction:function(e,t){a({type:"ADD_FIELD",payload:{formName:e,field:t}})}}}(m,o),E=d.setFieldErrorAction,f=d.clearFieldError,p=d.setFieldValueAction,h=d.addFieldAction,b=d.removeFieldAction,N=F(u,E,f),y=N.validate,C=N.validateAll,S=function(e,a,t){s((function(l){var n,r;return v({},l,((r={})[e]=v({},l[e],((n={})[a]=t,n)),r))}))},w=function(e){return function(a){return function(t){return y(e,a,t,m)}}};return n.a.createElement(x.Provider,{value:{setFieldValue:function(e){return function(a){return function(t){m.errors[e][a]&&w(e)(a)(t),p(e,a,t)}}},validate:w,state:m,validateForm:function(e,a){return C(e,a,m)},setValidator:S,addField:function(e,a,t,l){void 0===l&&(l=function(e){return null}),h(e,a,t),S(e,a,l)},removeField:function(e,a){b(e,a),S(e,a,(function(){return null}))}}},r)};Object(l.createContext)({});!function(e){e.Example="example"}(b||(b={})),function(e){e.FirstName="firstName",e.LastName="lastName"}(N||(N={}));var S,w,V={example:{firstName:function(e){return e.trim()?null:"First name is required"},lastName:function(){return null}}},O=function(){var e=y(),a=e.setFieldValue,t=e.validate,r=e.validateForm,i=e.state,m=e.state,o=m.errors,c=m.example,u=Object(l.useCallback)((function(e){return function(t){var l=t.target.value;a(b.Example)(e)(l)}}),[a]),s=Object(l.useCallback)((function(e){return function(a){var l=a.target.value;t(b.Example)(e)(l||c[e])}}),[t,c]),d=Object(l.useCallback)((function(){r(b.Example,c)&&alert(JSON.stringify(c,null,2))}),[r,c]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"form-group col-6"},n.a.createElement("label",null,"First Name"),n.a.createElement("input",{value:c.firstName,onChange:u(N.FirstName),onBlur:s(N.FirstName)}),!!o.example.firstName&&n.a.createElement("p",{className:"text-danger"},o.example.firstName),n.a.createElement("label",null,"Last Name"),n.a.createElement("input",{value:c.lastName,onChange:u(N.LastName),onBlur:s(N.LastName)}),!!o.example.lastName&&n.a.createElement("p",{className:"text-danger"},o.example.lastName),n.a.createElement("button",{onClick:d},"Submit Form")),n.a.createElement("div",{className:"col-6"},n.a.createElement("b",null,"Form ContextState"),n.a.createElement("pre",null,n.a.createElement("code",null,JSON.stringify(i,null,2)))))},k=function(){return n.a.createElement(C,{initialState:{example:{firstName:"",lastName:""}},validationSchema:V},n.a.createElement(O,null))};!function(e){e.Example="example"}(S||(S={})),function(e){e.FirstName="firstName",e.LastName="lastName",e.NumberOfChildren="numberOfChildren",e.HasKids="hasKids"}(w||(w={}));var j,A,L={example:{firstName:function(e){return e.trim()?null:"First name is required"},lastName:function(){return null},hasKids:function(){return null},numberOfChildren:function(e,a){return(null===a||void 0===a?void 0:a.example.hasKids)?e>0?null:"Please specify how many children do you have.":null}}},R=function(){var e=y(),a=e.setFieldValue,t=e.validate,r=e.validateForm,i=e.state,m=e.state,o=m.errors,c=m.example,u=Object(l.useCallback)((function(e){return function(t){var l=t.target.value;a(S.Example)(e)(l)}}),[a]),s=Object(l.useCallback)((function(){a(S.Example)(w.HasKids)(!c.hasKids)}),[a,c]),d=Object(l.useCallback)((function(e){return function(a){var l=a.target.value;t(S.Example)(e)(l||c[e])}}),[t,c]),E=Object(l.useCallback)((function(){r(S.Example,c)&&alert(JSON.stringify(c,null,2))}),[r,c]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"form-group col-6"},n.a.createElement("label",null,"First Name"),n.a.createElement("input",{value:c.firstName,onChange:u(w.FirstName),onBlur:d(w.FirstName)}),!!o.example.firstName&&n.a.createElement("p",{className:"text-danger"},o.example.firstName),n.a.createElement("label",null,"Last Name"),n.a.createElement("input",{value:c.lastName,onChange:u(w.LastName),onBlur:d(w.LastName)}),!!o.example.lastName&&n.a.createElement("p",{className:"text-danger"},o.example.lastName),n.a.createElement("label",{className:"row paper-check"},n.a.createElement("input",{id:"paperSwitch4",name:"paperSwitch4",type:"checkbox",checked:c.hasKids,onChange:s}),n.a.createElement("span",{className:"paper-switch-slider"},"Do you have kids?")),n.a.createElement("br",null),c.hasKids&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",null,"Number Of children"),n.a.createElement("input",{type:"number",value:c.numberOfChildren,onChange:u(w.NumberOfChildren),onBlur:d(w.NumberOfChildren)}),!!o.example.numberOfChildren&&n.a.createElement("p",{className:"text-danger"},o.example.numberOfChildren)),n.a.createElement("button",{onClick:E},"Submit Form")),n.a.createElement("div",{className:"col-6"},n.a.createElement("b",null,"Form ContextState"),n.a.createElement("pre",null,n.a.createElement("code",null,JSON.stringify(i,null,2)))))},T=function(){return n.a.createElement(C,{initialState:{example:{firstName:"",lastName:"",hasKids:!1,numberOfChildren:void 0}},validationSchema:L},n.a.createElement(R,null))};!function(e){e.Example="example"}(j||(j={})),function(e){e.FirstName="firstName",e.LastName="lastName",e.Married="married",e.WifeName="wifeName"}(A||(A={}));var D={example:{firstName:function(e){return e.trim()?null:"First name is required"},lastName:function(){return null},married:function(){return null},wifeName:function(){return null}}},I=function(){var e=y(),a=e.setFieldValue,t=e.validate,r=e.validateForm,i=e.state,m=e.state,o=m.errors,c=m.example,u=e.setValidator,s=Object(l.useMemo)((function(){return c.married}),[c]),d=Object(l.useCallback)((function(e){return function(t){var l=t.target.value;a(j.Example)(e)(l)}}),[a]),E=Object(l.useCallback)((function(){a(j.Example)(A.Married)(!c.married)}),[a,c]),f=Object(l.useCallback)((function(e){return function(a){var l=a.target.value;t(j.Example)(e)(l||c[e])}}),[t,c]),p=Object(l.useCallback)((function(){r(j.Example,c)&&alert(JSON.stringify(c,null,2))}),[r,c]);return Object(l.useEffect)((function(){u(j.Example,A.WifeName,s?function(e){return(null===e||void 0===e?void 0:e.length)>2?null:"Name must be at least 3 chars long."}:function(){return null})}),[s]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"form-group col-6"},n.a.createElement("label",null,"First Name"),n.a.createElement("input",{value:c.firstName,onChange:d(A.FirstName),onBlur:f(A.FirstName)}),!!o.example.firstName&&n.a.createElement("p",{className:"text-danger"},o.example.firstName),n.a.createElement("label",null,"Last Name"),n.a.createElement("input",{value:c.lastName,onChange:d(A.LastName),onBlur:f(A.LastName)}),!!o.example.lastName&&n.a.createElement("p",{className:"text-danger"},o.example.lastName),n.a.createElement("label",{className:"row paper-check"},n.a.createElement("input",{id:"switch8",type:"checkbox",checked:c.married,onChange:E}),n.a.createElement("span",{className:"paper-switch-slider"},"Are you married?")),n.a.createElement("br",null),c.married&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",null,"Wife's Name"),n.a.createElement("input",{value:c.wifeName,onChange:d(A.WifeName),onBlur:f(A.WifeName)}),!!o.example.wifeName&&n.a.createElement("p",{className:"text-danger"},o.example.wifeName)),n.a.createElement("button",{onClick:p},"Submit Form")),n.a.createElement("div",{className:"col-6"},n.a.createElement("b",null,"Form ContextState"),n.a.createElement("pre",null,n.a.createElement("code",null,JSON.stringify(i,null,2)))))},_=function(){return n.a.createElement(C,{initialState:{example:{firstName:"",lastName:"",married:!1,wifeName:void 0}},validationSchema:D},n.a.createElement(I,null))},P=function(){var e=Object(l.lazy)((function(){return t.e(5).then(t.bind(null,34))})),a=Object(l.lazy)((function(){return t.e(3).then(t.bind(null,35))})),r=Object(l.lazy)((function(){return t.e(4).then(t.bind(null,36))}));return n.a.createElement(l.Suspense,{fallback:"..."},n.a.createElement("h2",{id:"examples"},"Examples"),n.a.createElement(E,{example:k,doc:e,title:"Simple Form validation",id:"examples-sfv"}),n.a.createElement(E,{example:T,doc:a,title:"Conditional Form validation",id:"examples-cfv"}),n.a.createElement(E,{example:_,doc:r,title:"Adding and removing Validators",id:"examples-dv"}))},B=function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement(c,null),n.a.createElement("div",{className:"row flex-center"},n.a.createElement(o,null),n.a.createElement("div",{className:"md-8 offset-1"},n.a.createElement("div",{className:"paper"},n.a.createElement(m,null),n.a.createElement("div",{className:"section"},n.a.createElement(u,null)),n.a.createElement("div",{className:"section"},n.a.createElement(s,null)),n.a.createElement("div",{className:"section"},n.a.createElement(P,null))))))};i.a.render(n.a.createElement(B,null),document.getElementById("root"))},5:function(e,a,t){},9:function(e,a,t){e.exports=t(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.d2fa5399.chunk.js.map