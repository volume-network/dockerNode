(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d0f215e"],{"05a8":function(o,t,n){"use strict";var a=n("0e67"),e=n.n(a);e.a},"0e67":function(o,t,n){},"54ec":function(o,t,n){"use strict";n.r(t);var a=function(){var o=this,t=o.$createElement,n=o._self._c||t;return o.logo||o.gitLogo(o.id)?n("div",[n("img",{staticClass:"logo",attrs:{src:o.logo||o.gitLogo(o.id)}}),o.noLink?n("span",{staticClass:"color-text-button-primary-no"},[o._v(o._s(o.name))]):n("span",{staticClass:"color-text-button-primary "},[o._v(o._s(o.name))])]):n("div",[o._v("-")])},e=[],r=n("c493"),c={name:"VSPoolLogoName",props:["name","id","logo","noLink"],methods:{getClass:function(o){return"logo logo-"+o},gitLogo:function(o){var t="";return t=JSON.parse(Object(r["b"])())[o],t}}},i=c,u=(n("05a8"),n("2877")),s=Object(u["a"])(i,a,e,!1,null,"228bfcf6",null),l=s.exports;t["default"]=l},c493:function(o,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return i}),n.d(t,"d",function(){return u});var a=n("bc3a"),e=n.n(a);function r(o,t){return new Promise(function(n,a){e.a.get(o).then(function(o){o.data.data&&o.data.data.rows&&t&&s(o.data.data.rows),n(o.data)},function(o){console.log(o)}).catch(function(o){console.log(o)})})}function c(){var o=localStorage.getItem("poolConfig");return o}function i(){var o=localStorage.getItem("poolConfigLogo");return o}function u(o){var t="https://volumenetwork.io/api/vlm/node/queryMinePool?debug=true";r(t).then(function(t){if(0===t.code){var n=t.data.rows;s(n),o()}})}function s(o){for(var t={},n={},a=0;a<o.length;a++)o[a].accountID&&(t[o[a].accountID]=o[a].shortName,n[o[a].accountID]=o[a].logo);var e=JSON.stringify(t),r=JSON.stringify(n);localStorage.setItem("poolConfig",e),localStorage.setItem("poolConfigLogo",r)}}}]);