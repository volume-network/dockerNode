(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc906496"],{"00b8":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"transition-details"},[s("vs-container",{staticStyle:{"margin-top":"20px"}},[s("div",{staticClass:"header"},[s("h3",{staticClass:"title"},[t._v(t._s(t.$t("blockTran.TransactionDetail")))])]),s("vs-main",{staticStyle:{padding:"0 20px",margin:"10px 0 20px 0"}},[s("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{gutter:10}},[s("el-col",[s("div",{staticClass:"col-line"},[s("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.TransactionID")))]),s("div",{staticClass:"col-right to-link"},[t._v(t._s(t.TransactionID))])])]),s("el-col",[s("div",{staticClass:"col-line"},[s("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.Block")))]),s("div",{staticClass:"col-right to-link",on:{click:t.toBlock}},[t._v(t._s(t.Block))])])]),s("el-col",[s("div",{staticClass:"col-line"},[s("div",{staticClass:"col-left"},[t._v(t._s(t.$t("myaccount.state")))]),s("div",{staticClass:"col-right"},[t._v("-")])])]),s("el-col",[s("div",{staticClass:"col-line"},[s("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.Time")))]),s("div",{staticClass:"col-right"},[t._v(t._s(t._f("vmoment")(t.Time)))])])]),s("el-col",[s("div",{staticClass:"col-line"},[s("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.Confirmations")))]),s("div",{staticClass:"col-right"},[t._v(t._s(t.Confirmations))])])]),s("el-col",[s("div",{staticClass:"col-line"},[s("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.TransactionType")))]),s("div",{staticClass:"col-right"},[t._v(t._s(t._f("toBlank")(t.TransactionType)))])])]),s("el-col",[s("div",{staticClass:"col-line"},[s("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.Amount")))]),s("div",{staticClass:"col-right"},[t._v(t._s(t.Amount))])])]),s("el-col",[s("div",{staticClass:"col-line"},[s("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.Fee")))]),s("div",{staticClass:"col-right"},[t._v(t._s(t.Fee))])])]),s("el-col",[s("div",{staticClass:"col-line"},[s("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.Sender")))]),s("router-link",{attrs:{to:"/account/"+t.senderId}},[s("div",{staticClass:"col-right to-link"},[t._v("\n                "+t._s(t.Sender)+"\n              ")])])],1)]),s("el-col",[s("div",{staticClass:"col-line"},[s("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.Recipient")))]),t.Recipient?s("div",{staticClass:"col-right"},[s("router-link",{attrs:{to:"/account/"+t.reciveId}},[s("span",{staticClass:"to-link"},[t._v(t._s(t.Recipient))])]),t.message?s("span",{staticClass:"tips"},[t._v("( "+t._s(t.message)+" )")]):t._e()],1):t.attachment.length?s("div",{staticClass:"col-right"},[t._l(t.attachment,function(a){return[s("div",{key:a.accountId,staticStyle:{"margin-bottom":"5px"}},[s("router-link",{attrs:{to:"/account/"+a.accountId}},[s("span",{staticClass:"to-link left-address"},[t._v(t._s(a.address))])]),s("span",{staticClass:"value"},[t._v(t._s(a.value)+" VOL")])],1)]})],2):s("div",[t._v("-")])])])],1)],1)],1)],1)},e=[],c=s("cf45"),n=s("365c"),l=s("aff9"),o={name:"TransitionDetails",data:function(){return{loading:!1,TransactionID:"",Block:"",Time:"",Confirmations:"",TransactionType:"",Amount:"",Fee:"",Sender:"",Recipient:"",attachment:[],senderId:"",reciveId:"",message:""}},created:function(){var t=this.$route.params.txId;this.initData(t)},beforeRouteUpdate:function(t,a,s){var i=t.params.txId;this.initData(i),s()},methods:{initData:function(t){var a=this;this.loading=!0,Object(n["o"])({page:this.page,transaction:t}).then(function(t){var s=t.data;s=void 0===s?{}:s;var i=s.data.data,e=void 0===i?[]:i,n=Object(c["b"])(e,a.$i18n.locale),o=n[0];if(a.TransactionID=o.transaction,a.Block=o.block,a.Time=o.timestamp,a.Confirmations=o.confirmations,a.TransactionType=o.txType,a.Amount=Object(c["g"])(Object(c["c"])(o.amountNQT))+" VOL",a.Fee=Object(c["g"])(Object(c["c"])(o.feeNQT))+" VOL",a.Sender=o.senderRS,a.Recipient=o.recipientRS,a.senderId=o.sender,a.reciveId=o.recipient,o.attachment&&o.attachment.message&&(a.message=o.attachment.message),o.attachment&&o.attachment.recipients){for(var r=o.attachment.recipients,d=[],v=0;v<r.length;v++){var _={};_["address"]=l["a"].createAddressByAccountId(r[v][0]),_["accountId"]=r[v][0],_["value"]=Object(c["c"])(r[v][1]),d.push(_)}a.attachment=d}}).finally(function(){a.loading=!1})},toBlock:function(t){var a=t.currentTarget.innerHTML,s="/block/"+a;this.$router.push({path:s})},toSender:function(){this.$router.push({path:"/account/"+this.senderId})}}},r=o,d=(s("9f54"),s("2877")),v=Object(d["a"])(r,i,e,!1,null,"d2ead99e",null);a["default"]=v.exports},"9e57":function(t,a,s){},"9f54":function(t,a,s){"use strict";var i=s("9e57"),e=s.n(i);e.a}}]);