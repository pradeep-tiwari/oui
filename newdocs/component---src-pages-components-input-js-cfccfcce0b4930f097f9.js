webpackJsonp([0x6345e680ff97],{252:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),i=a(u),s=n(5),p=a(s),d=n(308),c=a(d),f=n(639),m=a(f),h={name:"Input\n",description:"",start:{line:1,column:1},end:{line:21,column:4},example:[{type:"html",description:null,code:'<label>\n  <span class="oui-label">Name</span>\n  <input class="oui-text-input" placeholder="Jane Doe" />\n</label>'},{type:"html",description:null,code:'<label>\n  <span class="oui-label oui-label--disabled">Name</span>\n  <input class="oui-text-input" disabled placeholder="Jane Doe" />\n</label>'},{type:"html",description:null,code:'<label class="#{$namespace}form-bad-news">\n  <span class="oui-label oui-label--required">\n    Experiment Hypothesis\n  </span>\n  <input class="oui-text-input" placeholder="Jane Doe" />\n  <div class="#{$namespace}form-note #{$namespace}form-note--bad-news">This field is required.</div>\n</label>'}]},y={description:"Generates an `input` element (optionally wrapped in a label) and accepts\nmost of the common input types.",displayName:"Input",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null},{name:"renderInput",docblock:null,modifiers:[],params:[{name:"{\n  isFilter,\n  displayError,\n  type,\n  value,\n  defaultValue,\n  placeholder,\n  isRequired,\n  isReadOnly,\n  isDisabled,\n  onInput,\n  onChange,\n  onBlur,\n  onKeyDown,\n  onFocus,\n  min,\n  max,\n  testSection,\n  focus,\n  textAlign }",type:null}],returns:null}],props:{defaultValue:{type:{name:"string"},required:!1,description:"The default value of the input used on initial render"},displayError:{type:{name:"bool"},required:!1,description:"Includes search icon if true"},isDisabled:{type:{name:"bool"},required:!1,description:"Prevents input from being modified and appears disabled"},isFilter:{type:{name:"bool"},required:!1,description:"Includes error if true"},isOptional:{type:{name:"custom",raw:"function verifyIsOptionalProp(props) {\n  if (props.isOptional && !props.label) {\n    return new Error('Must include a value for the label prop to use the isOptional prop');\n  }\n  return null;\n}"},required:!1,description:"Adds an optional label if there is a label provided\n @param {Object} props Object of props\n @returns {Error} Error or null"},isReadOnly:{type:{name:"bool"},required:!1,description:"Prevents input from being modified but doesn't appear disabled"},isRequired:{type:{name:"bool"},required:!1,description:"Prevents input from being submitted without value"},label:{type:{name:"string"},required:!1,description:"Text that describes the input"},max:{type:{name:"number"},required:!1,description:"Max value for the `input`. Should be used only when `type` is `number`."},min:{type:{name:"number"},required:!1,description:"Min value for the `input`. Should be used only when `type` is `number`."},onBlur:{type:{name:"func"},required:!1,description:"Function that fires when the input loses focus. It fires regardless of\nwhether the value has changed."},onChange:{type:{name:"func"},required:!1,description:"Function that fires when the input loses focus after the value changes"},onFocus:{type:{name:"func"},required:!1,description:"Function that fires when the input gains focus"},onInput:{type:{name:"func"},required:!1,description:"Function that fires on keypress"},onKeyDown:{type:{name:"func"},required:!1,description:"Function that fires when a key is pressed down"},placeholder:{type:{name:"string"},required:!1,description:"Input placeholder text"},testSection:{type:{name:"string"},required:!1,description:"Hook for automated JavaScript tests"},textAlign:{type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1,description:"Align text inside input. Default is left."},type:{type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'password'",computed:!1},{value:"'date'",computed:!1},{value:"'number'",computed:!1},{value:"'email'",computed:!1},{value:"'url'",computed:!1},{value:"'search'",computed:!1},{value:"'tel'",computed:!1}]},required:!0,description:"Supported input types"},value:{type:{name:"string"},required:!1,description:"Text within the input"}},private:!1},b={react:y,examples:c.default?c.default:null,readme:m.default?m.default:null,sass:h},x=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return i.default.createElement(p.default,{data:b})},t}(i.default.Component);t.default=x,e.exports=t.default},639:function(e,t){e.exports="# Input Component\n\n- Add storybook link\n- Add design guidelines"},308:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),r=a(l),o=n(309),u=a(o),i=function(){};t.default=[{examples:[r.default.createElement(u.default,{type:"text",placeholder:"This is a placeholder"})]},{examples:[r.default.createElement(u.default,{type:"text",label:"Test",hasError:!0,placeholder:"This is a placeholder"})]},{examples:[r.default.createElement(u.default,{type:"text",defaultValue:"isReadOnly Example",label:"Test",isReadOnly:!0})]},{examples:[r.default.createElement(u.default,{type:"text",placeholder:"Browse by Name",isFilter:!0})]},{examples:[r.default.createElement(u.default,{type:"text",defaultValue:"onChange Example",onChange:i})]},{examples:[r.default.createElement(u.default,{type:"text",defaultValue:"onBlur Example",onBlur:i})]},{examples:[r.default.createElement(u.default,{type:"text",defaultValue:"onKeyDown Example",onKeyDown:i})]},{examples:[r.default.createElement(u.default,{type:"text",label:"Label with Optional",isOptional:!0})]},{examples:[r.default.createElement(u.default,{type:"password",label:"Password",testSection:"input"})]},{examples:[r.default.createElement(u.default,{type:"number",min:10,max:50})]},{examples:[r.default.createElement(u.default,{type:"number",textAlign:"right",min:10,max:50})]},{examples:[r.default.createElement(u.default,{type:"date"})]}],e.exports=t.default},309:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),i=a(u),s=n(31),p=a(s),d=n(9),c=a(d),f=n(2),m=a(f),h=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.blur=function(){this._input&&this._input.blur()},t.prototype.renderInput=function(e){var t,n=this,a=e.isFilter,l=e.displayError,r=e.type,o=e.value,u=e.defaultValue,s=e.placeholder,p=e.isRequired,d=e.isReadOnly,f=e.isDisabled,m=e.onInput,h=e.onChange,y=e.onBlur,b=e.onKeyDown,x=e.onFocus,w=e.min,v=e.max,E=e.testSection,g=e.focus,O=e.textAlign,q=!1;O&&(q=!0);var _=(0,c.default)("oui-text-input",{"oui-text-input--read-only":d},{"oui-text-input--search":a},{"oui-form-bad-news":l},(t={},t["text--"+O]=q,t));return i.default.createElement("input",{"data-oui-component":!0,className:_,ref:function(e){n._input=e},type:r,value:o,defaultValue:u,placeholder:s,required:p,readOnly:d,disabled:f,onInput:m,onChange:h,onBlur:y,onKeyDown:b,onFocus:x,min:w,max:v,"data-test-section":E,autoFocus:g})},t.prototype.render=function(){var e=this.props,t=e.label,n=e.displayError,a=e.testSection,l=e.isOptional;return t?i.default.createElement("div",{"data-oui-component":!0,className:(0,c.default)({"oui-form-bad-news":n})},i.default.createElement(p.default,{testSection:a&&a+"-label"},i.default.createElement("div",{className:"oui-label"},t,l&&i.default.createElement("span",{className:"oui-label__optional"},"(Optional)")),this.renderInput(this.props))):this.renderInput(this.props)},t}(i.default.Component);h.propTypes={defaultValue:m.default.string,displayError:m.default.bool,isDisabled:m.default.bool,isFilter:m.default.bool,isOptional:function(e){return e.isOptional&&!e.label?new Error("Must include a value for the label prop to use the isOptional prop"):null},isReadOnly:m.default.bool,isRequired:m.default.bool,label:m.default.string,max:m.default.number,min:m.default.number,onBlur:m.default.func,onChange:m.default.func,onFocus:m.default.func,onInput:m.default.func,onKeyDown:m.default.func,placeholder:m.default.string,testSection:m.default.string,textAlign:m.default.oneOf(["left","right"]),type:m.default.oneOf(["text","password","date","number","email","url","search","tel"]).isRequired,value:m.default.string},t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-input-js-cfccfcce0b4930f097f9.js.map