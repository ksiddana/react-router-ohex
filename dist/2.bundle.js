webpackJsonp([2],{1815:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n(23),f=n(118),s=n(69),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"componentWillUnmount",value:function(){this.props.clearError()}},{key:"onSubmit",value:function(e){this.props.createArtist(e)}},{key:"render",value:function(){var e=this.props.handleSubmit;return u.default.createElement("form",{onSubmit:e(this.onSubmit.bind(this))},u.default.createElement("div",{className:"input-field"},u.default.createElement(f.Field,{name:"name",component:"input",placeholder:"Name"})),u.default.createElement("div",{className:"input-field"},u.default.createElement(f.Field,{name:"age",component:"input",placeholder:"Age"})),u.default.createElement("div",{className:"input-field"},u.default.createElement(f.Field,{name:"yearsActive",component:"input",placeholder:"Years Active"})),u.default.createElement("div",{className:"input-field"},u.default.createElement(f.Field,{name:"genre",component:"input",placeholder:"Genre"})),u.default.createElement("div",{className:"has-error"},this.props.errorMessage),u.default.createElement("button",{className:"btn"},"Submit"))}}]),t}(i.Component),m=function(e){return{errorMessage:e.errors}};t.default=(0,c.connect)(m,p)((0,f.reduxForm)({form:"create"})(d))}});