webpackJsonp([0xaaf1ef72d97f],{132:function(t,e,n){t.exports=n(133)},133:function(t,e,n){(function(t,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i,u=n(134),a=o(u);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof t?t:r;var c=(0,a.default)(i);e.default=c}).call(e,function(){return this}(),n(79)(t))},134:function(t,e){"use strict";function n(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},248:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var a=n(1),c=r(a),s=n(5),p=r(s),l=n(302),f=r(l),d=n(635),h=r(d),m={name:"Disclose\n",description:"Similar to an accordion but any number of items can be opened\nclosed independently.",start:{line:1,column:1},end:{line:18,column:4},example:[{type:"html",description:null,code:'<div class="#{$namespace}disclose is-active">\n  <a href="#" class="#{$namespace}disclose__link link--dark">\n    <div class="#{$namespace}disclose__arrow is-active">\n      <span class="#{$namespace}disclose__symbol"></span>\n      Title of Disclosure\n    </div>\n  </a>\n  <div class="#{$namespace}disclose__content">\n    <h3>Some Title</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.</p>\n  </div>\n</div>'}]},y={description:"",displayName:"Disclose",methods:[{name:"handleToggle",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null}],props:{children:{type:{name:"node"},required:!0,description:""},childrenStyle:{type:{name:"string"},required:!1,description:""},headerStyle:{type:{name:"string"},required:!1,description:""},noBorder:{type:{name:"bool"},required:!1,description:""},title:{type:{name:"string"},required:!0,description:""}},private:!1},v={react:y,examples:f.default?f.default:null,readme:h.default?h.default:null,sass:m},b=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return u(e,t),e.prototype.render=function(){return c.default.createElement(p.default,{data:v})},e}(c.default.Component);e.default=b,t.exports=e.default},135:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.createChangeEmitter=function(){function t(){o===r&&(o=r.slice())}function e(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var n=!0;return t(),o.push(e),function(){if(n){n=!1,t();var r=o.indexOf(e);o.splice(r,1)}}}function n(){r=o;for(var t=r,e=0;e<t.length;e++)t[e].apply(t,arguments)}var r=[],o=r;return{listen:e,emit:n}}},58:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}function o(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),u=r(i),a=r(n(52)),c=r(n(71)),s=n(135),p=r(n(132)),l=function(t,e){return function(n){return n[t]=e,n}},f=function(t){return l("displayName",t)},d=function(t){if("string"==typeof t)return t;if(t)return t.displayName||t.name||"Component"},h=function(t,e){return e+"("+d(t)+")"},m=function(t){return function(e){var n=i.createFactory(e),r=function(e){return n(t(e))};return r}},y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},b=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},g=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},_=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},O=function(t){var e=m(function(e){return v({},e,"function"==typeof t?t(e):t)});return e},E=function(t,e){for(var n={},r=0;r<e.length;r++){var o=e[r];t.hasOwnProperty(o)&&(n[o]=t[o])}return n},S=function(t,e){return function(n){var r=i.createFactory(n),o="function"==typeof t?t:function(e,n){return!a(E(e,t),E(n,t))},u=function(t){function n(){var r,o,i;y(this,n);for(var u=arguments.length,a=Array(u),c=0;c<u;c++)a[c]=arguments[c];return r=o=_(this,t.call.apply(t,[this].concat(a))),o.computedProps=e(o.props),i=r,_(o,i)}return b(n,t),n.prototype.componentWillReceiveProps=function(t){o(this.props,t)&&(this.computedProps=e(t))},n.prototype.render=function(){return r(v({},this.props,this.computedProps))},n}(i.Component);return u}},w=function(t,e){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r],r));return n},C=function(t){return function(e){var n=i.createFactory(e),r=function(t){function e(){var n,r,i;y(this,e);for(var u=arguments.length,a=Array(u),c=0;c<u;c++)a[c]=arguments[c];return n=r=_(this,t.call.apply(t,[this].concat(a))),o.call(r),i=n,_(r,i)}return b(e,t),e.prototype.componentWillReceiveProps=function(){this.cachedHandlers={}},e.prototype.render=function(){return n(v({},this.props,this.handlers))},e}(i.Component),o=function(){var e=this;this.cachedHandlers={},this.handlers=w("function"==typeof t?t(this.props):t,function(t,n){return function(){var r=e.cachedHandlers[n];if(r)return r.apply(void 0,arguments);var o=t(e.props);return e.cachedHandlers[n]=o,o.apply(void 0,arguments)}})};return r}},P=function(t){return function(e){var n=i.createFactory(e),r=function(t){return n(t)};return r.defaultProps=t,r}},x=function(t,e){for(var n=g(t,[]),r=0;r<e.length;r++){var o=e[r];n.hasOwnProperty(o)&&delete n[o]}return n},T=function(t,e){var n=m(function(n){var r;return v({},x(n,[t]),(r={},r[e]=n[t],r))});return n},F=Object.keys,j=function(t,e){return F(t).reduce(function(n,r){var o=t[r];return n[e(o,r)]=o,n},{})},k=function(t){var e=m(function(e){return v({},x(e,F(t)),j(E(e,F(t)),function(e,n){return t[n]}))});return e},N=function(t){return function(e){var n=i.createFactory(e),r=function(e){return n(v({},e,e[t]))};return r}},q=function(t,e,n){return function(r){var o=i.createFactory(r),u=function(r){function i(){var t,e,o;y(this,i);for(var u=arguments.length,a=Array(u),c=0;c<u;c++)a[c]=arguments[c];return t=e=_(this,r.call.apply(r,[this].concat(a))),e.state={stateValue:"function"==typeof n?n(e.props):n},e.updateStateValue=function(t,n){return e.setState(function(e){var n=e.stateValue;return{stateValue:"function"==typeof t?t(n):t}},n)},o=t,_(e,o)}return b(i,r),i.prototype.render=function(){var n;return o(v({},this.props,(n={},n[t]=this.state.stateValue,n[e]=this.updateStateValue,n)))},i}(i.Component);return u}},M=function(t,e){return function(n){var r=i.createFactory(n),o=function(t){function e(){var n,r,o;y(this,e);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return n=r=_(this,t.call.apply(t,[this].concat(a))),u.call(r),o=n,_(r,o)}return b(e,t),e.prototype.shouldComponentUpdate=function(t,e){var n=t!==this.props,r=!a(e,this.state);return n||r},e.prototype.render=function(){return r(v({},this.props,this.state,this.stateUpdaters))},e}(i.Component),u=function(){var n=this;this.state="function"==typeof t?t(this.props):t,this.stateUpdaters=w(e,function(t){return function(e){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];e&&"function"==typeof e.persist&&e.persist(),n.setState(function(n,r){return t(n,r).apply(void 0,[e].concat(o))})}})};return o}},A=function(t,e,n,r){return function(o){var u=i.createFactory(o),a=function(o){function i(){var t,e,r;y(this,i);for(var u=arguments.length,a=Array(u),c=0;c<u;c++)a[c]=arguments[c];return t=e=_(this,o.call.apply(o,[this].concat(a))),e.state={stateValue:e.initializeStateValue()},e.dispatch=function(t){return e.setState(function(e){var r=e.stateValue;return{stateValue:n(r,t)}})},r=t,_(e,r)}return b(i,o),i.prototype.initializeStateValue=function(){return void 0!==r?"function"==typeof r?r(this.props):r:n(void 0,{type:"@@recompose/INIT"})},i.prototype.render=function(){var n;return u(v({},this.props,(n={},n[t]=this.state.stateValue,n[e]=this.dispatch,n)))},i}(i.Component);return a}},V=function(t){return t},R=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:V;return function(r){var o=void 0,u=void 0,a=function(a){return t(a)?(o=o||i.createFactory(e(r)))(a):(u=u||i.createFactory(n(r)))(a)};return a}},W=function(t){return function(e){var n=i.createFactory(t),r=function(t){return n(t)};return r}},H=function(t){function e(){return y(this,e),_(this,t.apply(this,arguments))}return b(e,t),e.prototype.render=function(){return null},e}(i.Component),U=function(t){return H},$=function(t){return function(e){var n=i.createFactory(e),r=function(e){function r(){return y(this,r),_(this,e.apply(this,arguments))}return b(r,e),r.prototype.shouldComponentUpdate=function(e){return t(this.props,e)},r.prototype.render=function(){return n(this.props)},r}(i.Component);return r}},D=function(t){var e=$(function(t,e){return!a(t,e)});return e(t)},B=function(t){var e=$(function(e,n){return!a(E(n,t),E(e,t))});return e},z=function(t){var e=t.propTypes,n=Object.keys(e||{}),r=B(n)(t);return r},I=function(t,e){return function(n){var r=i.createFactory(n),o=function(t){function n(){var r,o,i;y(this,n);for(var u=arguments.length,a=Array(u),c=0;c<u;c++)a[c]=arguments[c];return r=o=_(this,t.call.apply(t,[this].concat(a))),o.getChildContext=function(){return e(o.props)},i=r,_(o,i)}return b(n,t),n.prototype.render=function(){return r(this.props)},n}(i.Component);return o.childContextTypes=t,o}},L=function(t){return function(e){var n=i.createFactory(e),r=function(t,e){return n(v({},t,e))};return r.contextTypes=t,r}},J=function(t){return function(e){var n=i.createFactory(e),r=function(t){function e(){return y(this,e),_(this,t.apply(this,arguments))}return b(e,t),e.prototype.render=function(){return n(v({},this.props,this.state))},e}(i.Component);return Object.keys(t).forEach(function(e){return r.prototype[e]=t[e]}),r}},K=function(t){return Boolean(t&&t.prototype&&"function"==typeof t.prototype.render)},G=function(t){if(K(t))return t;var e=function(e){function n(){return y(this,n),_(this,e.apply(this,arguments))}return b(n,e),n.prototype.render=function(){return"string"==typeof t?u.createElement(t,this.props):t(this.props,this.context)},n}(i.Component);return e.displayName=d(t),e.propTypes=t.propTypes,e.contextTypes=t.contextTypes,e.defaultProps=t.defaultProps,e},Q=function(t){return l("propTypes",t)},X=function(t){return function(e){function n(){return y(this,n),_(this,e.apply(this,arguments))}return b(n,e),n.prototype.componentWillMount=function(){t(this.props)},n.prototype.componentWillReceiveProps=function(e){t(e)},n.prototype.render=function(){return null},n}(i.Component)},Y=function(t){var e=function(e){return i.createElement(e[t],x(e,[t]))};return e.displayName="componentFromProp("+t+")",e},Z=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(i.createFactory),o=function(t){var e=g(t,[]),n=t.children;return r.reduceRight(function(t,n){return n(e,t)},n)};return o},tt=function(t){return function(e){var n=t(e);return c(n,e),n}},et={fromESObservable:null,toESObservable:null},nt=function(t){et=t},rt={fromESObservable:function(t){return"function"==typeof et.fromESObservable?et.fromESObservable(t):t},toESObservable:function(t){return"function"==typeof et.toESObservable?et.toESObservable(t):t}},ot=function(t){return function(e){return function(n){function r(){var o,i,u,a;y(this,r);for(var c=arguments.length,l=Array(c),f=0;f<c;f++)l[f]=arguments[f];return i=u=_(this,n.call.apply(n,[this].concat(l))),u.state={vdom:null},u.propsEmitter=s.createChangeEmitter(),u.props$=t.fromESObservable((o={subscribe:function(t){var e=u.propsEmitter.listen(function(e){e?t.next(e):t.complete()});return{unsubscribe:e}}},o[p]=function(){return this},o)),u.vdom$=t.toESObservable(e(u.props$)),a=i,_(u,a)}return b(r,n),r.prototype.componentWillMount=function(){var t=this;this.subscription=this.vdom$.subscribe({next:function(e){t.setState({vdom:e})}}),this.propsEmitter.emit(this.props)},r.prototype.componentWillReceiveProps=function(t){this.propsEmitter.emit(t)},r.prototype.shouldComponentUpdate=function(t,e){return e.vdom!==this.state.vdom},r.prototype.componentWillUnmount=function(){this.propsEmitter.emit(),this.subscription.unsubscribe()},r.prototype.render=function(){return this.state.vdom},r}(i.Component)}},it=function(t){return ot(rt)(t)},ut=function(t){return t},at=function(t){var e=ot({fromESObservable:ut,toESObservable:ut});return function(n){return function(r){var o=i.createFactory(r),u=t.fromESObservable,a=t.toESObservable;return e(function(t){var e;return e={subscribe:function(e){var r=a(n(u(t))).subscribe({next:function(t){return e.next(o(t))}});return{unsubscribe:function(){return r.unsubscribe()}}}},e[p]=function(){return this},e})}}},ct=function(t){var e=at(rt)(t);return e},st=function(t){return function(){var e,n=s.createChangeEmitter(),r=t.fromESObservable((e={subscribe:function(t){var e=n.listen(function(e){return t.next(e)});return{unsubscribe:e}}},e[p]=function(){return this},e));return{handler:n.emit,stream:r}}},pt=st(rt);e.mapProps=m,e.withProps=O,e.withPropsOnChange=S,e.withHandlers=C,e.defaultProps=P,e.renameProp=T,e.renameProps=k,e.flattenProp=N,e.withState=q,e.withStateHandlers=M,e.withReducer=A,e.branch=R,e.renderComponent=W,e.renderNothing=U,e.shouldUpdate=$,e.pure=D,e.onlyUpdateForKeys=B,e.onlyUpdateForPropTypes=z,e.withContext=I,e.getContext=L,e.lifecycle=J,e.toClass=G,e.setStatic=l,e.setPropTypes=Q,e.setDisplayName=f,e.compose=o,e.getDisplayName=d,e.wrapDisplayName=h,e.shallowEqual=a,e.isClassComponent=K,e.createSink=X,e.componentFromProp=Y,e.nest=Z,e.hoistStatics=tt,e.componentFromStream=it,e.componentFromStreamWithConfig=ot,e.mapPropsStream=ct,e.mapPropsStreamWithConfig=at,e.createEventHandler=pt,e.createEventHandlerWithConfig=st,e.setObservableConfig=nt},635:function(t,e){t.exports="# Disclose Component\n\n- Add storybook link\n- Add design guidelines"},302:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),i=r(o),u=n(303),a=r(u);e.default=[{examples:[i.default.createElement(a.default,{title:"Some Title"},i.default.createElement("h3",null,"Some Title"),i.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."))]}],t.exports=e.default},303:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(9),s=r(c),p=n(58),l=n(86),f=function(t){var e,n,r=t.isOpen,o=t.children,u=t.headerStyle,a=t.childrenStyle,c=t.title,p=t.toggle,l=(0,s.default)("oui-disclose__content",(e={},e["border--sides border--bottom"]="border"===a,e["border--bottom"]="divider"===a&&r,e)),f=(0,s.default)("oui-disclose__link link--dark soft-half flush",(n={},n["background--faint display--block"]="header"===u,n["border--all background--faint display--block"]="header-bordered"===u,n)),d=r?"oui-disclose is-active":"oui-disclose";return i.default.createElement("div",{className:d,style:{marginTop:"-1px"}},i.default.createElement("a",{onClick:p,className:f},i.default.createElement("div",{className:"oui-disclose__arrow"},i.default.createElement("span",{className:"oui-disclose__symbol push-half--right"}),c)),i.default.createElement("div",{className:l},r&&o))};f.propTypes={children:a.default.node.isRequired,childrenStyle:a.default.string,headerStyle:a.default.string,isOpen:a.default.bool,noBorder:a.default.bool,title:a.default.string.isRequired,toggle:a.default.func},e.default=(0,l.withToggle)((0,p.toClass)(f)),t.exports=e.default},86:function(t,e,n){"use strict";e.__esModule=!0,e.withToggle=void 0;var r=n(58),o=(0,r.compose)((0,r.withState)("isOpen","toggle",!1),(0,r.withHandlers)({show:function(t){var e=t.toggle;return function(t){return e(!0)}},hide:function(t){var e=t.toggle;return function(t){return e(!1)}},toggle:function(t){var e=t.toggle;return function(t){return e(function(t){return!t})}}}));e.withToggle=o}});
//# sourceMappingURL=component---src-pages-components-disclose-js-298c2fe13aef9a0d2750.js.map