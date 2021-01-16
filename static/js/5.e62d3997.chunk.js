(this["webpackJsonpreact-form-fp"]=this["webpackJsonpreact-form-fp"]||[]).push([[5],{28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n(0)),a=l(n(33)),i=l(n(29));function l(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({}),s=u.Provider,c=u.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(c,null,(function(t){return o.default.createElement(e,r({components:n||t},a))}))}};var p=function(e){var t=e.components,n=e.children;return o.default.createElement(s,{value:t},n)};p.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=p},29:function(e,t,n){e.exports=n(35)()},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(31);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(28);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=s(a),l=s(n(32)),u=n(28);function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return c(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,u=e.children,s=e.components,c=void 0===s?{}:s,p=e.Layout,m=e.layoutProps,d=c[n+"."+t]||c[t]||f[t]||t;return p?((0,l.default)(this,p),i.default.createElement(p,r({components:c},m),i.default.createElement(d,a,u))):i.default.createElement(d,a,u)}}]),t}(a.Component);t.default=(0,u.withMDXComponents)(m)},32:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);e.exports=function e(t,n,p){if("string"!==typeof n){if(c){var f=s(n);f&&f!==c&&e(t,f,p)}var m=i(n);l&&(m=m.concat(l(n)));for(var d=0;d<m.length;++d){var v=m[d];if(!r[v]&&!o[v]&&(!p||!p[v])){var h=u(n,v);try{a(t,v,h)}catch(y){}}}return t}return t}},33:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(0)),o=a(n(34));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},34:function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(i(r),i(n(29))),a=i(n(37));i(n(39));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}t.default=function(e,t){var n,i,p="__create-react-context-"+(0,a.default)()+"__",f=function(e){function n(){var t,r;l(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=u(this,e.call.apply(e,[this].concat(a))),r.emitter=c(r.props.value),u(r,t)}return s(n,e),n.prototype.getChildContext=function(){var e;return(e={})[p]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(i=r)?0!==a||1/a===1/i:a!==a&&i!==i)?o=0:(o="function"===typeof t?t(n,r):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var a,i},n.prototype.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[p]=o.default.object.isRequired,n);var m=function(t){function n(){var e,r;l(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=r=u(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!==((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},u(r,e)}return s(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return m.contextTypes=((i={})[p]=o.default.object,i),{Provider:f,Consumer:m}},e.exports=t.default},35:function(e,t,n){"use strict";var r=n(36);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},36:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},37:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(38))},38:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},39:function(e,t,n){"use strict";var r=n(40);e.exports=r},40:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},41:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},42:function(e,t,n){"use strict";n.r(t);var r=n(41),o=n(0),a=n.n(o),i=n(30);t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return a.a.createElement(i.MDXTag,{name:"wrapper",components:t},a.a.createElement(i.MDXTag,{name:"pre",components:t},a.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx",metaString:""}},"import React, { useCallback, ChangeEvent } from 'react'\nimport {\n  FormContextProvider,\n  ValidationSchema,\n  useFormContext\n} from 'react-form-fp'\n\nenum FormName {\n  Example = 'example'\n}\nenum FormField {\n  FirstName = 'firstName',\n  LastName = 'lastName'\n}\n\ntype FormState = {\n  firstName: string\n  lastName: string\n}\n\nconst validation: ValidationSchema<FormName, FormField> = {\n  example: {\n    firstName: (val: string) =>\n      !!val.trim() ? null : 'First name is required',\n    lastName: () => null // Empty validator\n  }\n}\n\nconst SimpleFormValidationExample = () => {\n  const {\n    setFieldValue,\n    validate,\n    validateForm,\n    state: { errors, example },\n    clearForm\n  } = useFormContext<FormName, FormState>()\n\n  const handleFieldChange = useCallback(\n    (field: FormField) => ({\n      target: { value }\n    }: ChangeEvent<HTMLInputElement>) => {\n      setFieldValue(FormName.Example)(field)(value)\n    },\n    [setFieldValue]\n  )\n\n  const validateField = useCallback(\n    (field: FormField) => ({\n      target: { value }\n    }: ChangeEvent<HTMLInputElement>) => {\n      validate(FormName.Example)(field)(value || example[field])\n    },\n    [validate, example]\n  )\n\n  const submit = useCallback(() => {\n    if (validateForm(FormName.Example, example)) {\n      alert(JSON.stringify(example, null, 2))\n    }\n  }, [validateForm, example])\n\n  const clearFormState = useCallback(() => {\n    clearForm(FormName.Example)\n  }, [])\n\n  return (\n    <div className='form-group'>\n      <label>First Name</label>\n      <input\n        value={example.firstName}\n        onChange={handleFieldChange(FormField.FirstName)}\n        onBlur={validateField(FormField.FirstName)}\n      />\n      {!!errors.example.firstName && (\n        <p className='text-danger'>{errors.example.firstName}</p>\n      )}\n\n      <label>Last Name</label>\n      <input\n        value={example.lastName}\n        onChange={handleFieldChange(FormField.LastName)}\n        onBlur={validateField(FormField.LastName)}\n      />\n      {!!errors.example.lastName && (\n        <p className='text-danger'>{errors.example.lastName}</p>\n      )}\n\n      <button onClick={submit}>Submit Form</button>\n      <button onClick={clearFormState}>Clear Form</button>\n    </div>\n  )\n}\n\nexport default () => (\n  <FormContextProvider<FormName, FormState>\n    initialState={{ example: { firstName: '', lastName: '' } }}\n    validationSchema={validation}\n  >\n    <SimpleFormValidationExample />\n  </FormContextProvider>\n)\n")))}}}]);
//# sourceMappingURL=5.e62d3997.chunk.js.map