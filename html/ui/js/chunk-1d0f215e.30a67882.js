(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d0f215e"],{"05a8":function(o,t,n){"use strict";var a=n("0e67"),c=n.n(a);c.a},"0e67":function(o,t,n){},"54ec":function(o,t,n){"use strict";n.r(t);var a=function(){var o=this,t=o.$createElement,n=o._self._c||t;return o.logo||o.gitLogo(o.id)?n("div",[n("img",{staticClass:"logo",attrs:{src:o.logo||o.gitLogo(o.id)}}),o.noLink?n("span",{staticClass:"color-text-button-primary-no"},[o._v(o._s(o.name))]):n("span",{staticClass:"color-text-button-primary "},[o._v(o._s(o.name))])]):n("div",[o._v("-")])},c=[],e=n("c493"),r={name:"VSPoolLogoName",props:["name","id","logo","noLink"],methods:{getClass:function(o){return"logo logo-"+o},gitLogo:function(o){var t="";return t=JSON.parse(Object(e["c"])())[o],t}}},i=r,u=(n("05a8"),n("2877")),s=Object(u["a"])(i,a,c,!1,null,"228bfcf6",null),l=s.exports;t["default"]=l},c493:function(o,t,n){"use strict";n.d(t,"d",function(){return e}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return s});var a=n("bc3a"),c=n.n(a);function e(o,t){return new Promise(function(n,a){c.a.get(o).then(function(o){o.data.data&&o.data.data.rows&&t&&l(o.data.data.rows),n(o.data)},function(o){console.log(o)}).catch(function(o){console.log(o)})})}function r(o,t){return new Promise(function(n,a){c.a.get(o).then(function(o){o.data.data&&o.data.data.rows&&t&&l(o.data.data.rows),n(o.data)},function(o){console.log(o)}).catch(function(o){console.log(o)})})}function i(){var o=localStorage.getItem("poolConfig");return o}function u(){var o=localStorage.getItem("poolConfigLogo");return o}function s(o){o()}function l(o){for(var t={},n={},a=0;a<o.length;a++)o[a].accountID&&(t[o[a].accountID]=o[a].shortName,n[o[a].accountID]=o[a].logo);var c=JSON.stringify(t),e=JSON.stringify(n);localStorage.setItem("poolConfig",c),localStorage.setItem("poolConfigLogo",e)}}}]);