(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03d8859e"],{"0bdb":function(t,a,o){"use strict";var s=o("7809"),e=o.n(s);e.a},"5afd":function(t,a,o){"use strict";var s=o("e448"),e=o.n(s);e.a},"68ab":function(t,a,o){"use strict";var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"myaccount-transitions"},[o("div",{staticClass:"transitions__header"},[o("div",{staticClass:"header__left"},[t.title?o("h6",[t._v(t._s(t.$t("blockTran.Transaction")))]):t._e(),o("i18n",{attrs:{path:"myaccount.totalTxs",tag:"span"}},[o("span",{attrs:{place:"total"}},[t._v(t._s(t.total))])])],1),o("div",{staticClass:"header__right hidden-xs-only"},[o("el-pagination",{attrs:{background:"","current-page":t.page,"page-size":t.limit,total:t.total,layout:"prev, pager, next, sizes, jumper"},on:{"update:currentPage":function(a){t.page=a},"update:current-page":function(a){t.page=a},"update:pageSize":function(a){t.limit=a},"update:page-size":function(a){t.limit=a},"size-change":t.handleChangeCurrent,"current-change":t.handleChangeCurrent}})],1)]),o("div",{staticClass:"transitions__body"},[o("div",{staticClass:"transition"},[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"transition__body",staticStyle:{},attrs:{data:t.transactionList,"span-method":t.arraySpanMethod,"row-class-name":t.addRowClassName}},[o("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"fullHash",align:"left",label:t.$t("myaccount.hash"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?[o("div",{staticClass:"time__wrap"},[o("span",{staticClass:"font-color__secondary"},[t._v(t._s(t.$t("blockTran.Time"))+"：")]),o("span",{staticClass:"font-color__long"},[t._v(t._s(t._f("vmoment")(a.row.blockTimestamp)))])])]:[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("myaccount.hash")))]),a.row.unconfirmedTransactions?o("span",{staticClass:"pending"},[t._v(t._s(a.row.fullHash))]):o("router-link",{attrs:{to:"/tx/"+a.row.transaction}},[o("span",{staticClass:"color-text-button-primary"},[t._v(t._s(a.row.fullHash))])])]]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"feeNQT",align:"center",label:t.$t("blockTran.Fee")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?o("span",[o("div",{staticClass:"thead__wrap"},[o("span",{staticClass:"font-color__secondary"},[t._v(t._s(t.$t("blockTran.Fee"))+"：")]),t._v("\n                  "+t._s(t._f("toThousands")(t._f("formatVol")(a.row.feeNQT)))+" VOL\n                ")])]):[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.TransactionType")))]),o("span",[t._v(" "+t._s(a.row.txType))])]]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"block",align:"center",label:t.$t("blockTran.Block")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?[o("div",{staticClass:"thead__wrap"},[o("span",{staticClass:"font-color__secondary"},[t._v(t._s(t.$t("blockTran.Fee"))+"：")]),t._v("\n                  "+t._s(t._f("toThousands")(t._f("formatVol")(a.row.feeNQT)))+" VOL\n                ")])]:[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.Block")))]),a.row.unconfirmedTransactions?o("span",{staticClass:"pending"},[t._v("(pending)")]):o("router-link",{attrs:{to:"/block/"+a.row.block}},[o("span",{staticClass:"color-text-button-primary"},[t._v(t._s(a.row.block))])])]]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"confirmations",align:"center",width:"80",label:t.$t("blockTran.Confirmations")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?o("span"):[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.Confirmations")))]),a.row.unconfirmedTransactions?o("span",[t._v("未确认")]):o("span",[t._v(t._s(a.row.confirmations))])]]}}])}),o("el-table-column",{attrs:{prop:"senderRS",align:"center",width:"240",label:t.$t("blockTran.Sender")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?o("span"):[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.Sender")))]),o("div",[[[a.row.senderRS,a.row.sender].includes(t.account)?o("span",[t._v(t._s(a.row.senderRS))]):o("router-link",{attrs:{to:"/account/"+a.row.senderRS}},[o("span",{staticClass:"color-text-button-primary"},[t._v(t._s(a.row.senderRS))])])]],2)]]}}])}),o("el-table-column",{attrs:{prop:"recipientRS",align:"center",width:"300",label:t.$t("blockTran.Recipient")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?o("span"):[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.Recipient")))]),a.row.recipient||a.row.attachment.recipients?t._e():o("div",[t._v("-")]),[1,2].includes(a.row.subtype)?o("div",[t._l(a.row.recipients,function(s,e){return o("div",{key:s.accountRS,staticClass:"address__wrap"},[a.row.showAll||e<t.limit_recipient?[[s.accountRS,s].includes(t.account)?o("span",[t._v(t._s(s.accountRS))]):o("router-link",{attrs:{to:"/account/"+s.accountRS}},[o("span",{staticClass:"color-text-button-primary"},[t._v(t._s(s.accountRS))])])]:t._e()],2)}),o("div",{staticClass:"button-more__wrap"},[a.row.recipients.length>t.limit_recipient?o("el-button",{attrs:{size:"mini",plain:""},on:{click:function(t){a.row.showAll=!a.row.showAll}}},[t._v("\n                      "+t._s(a.row.showAll?"隐藏":"更多")+"\n                      "),o("i",{staticClass:"el-icon-arrow-down"})]):t._e()],1)],2):[[a.row.recipientRS,a.row.recipient].includes(t.account)?o("span",{staticClass:"address__wrap"},[t._v(t._s(a.row.recipientRS))]):o("router-link",{staticClass:"address__wrap",attrs:{to:"/account/"+a.row.recipientRS}},[o("span",{staticClass:"color-text-button-primary"},[t._v(t._s(a.row.recipientRS))])])],o("vs-icon",{staticClass:"vs-icon-right",attrs:{name:"to"}})]]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"amountNQT",align:"right",label:t.$t("blockTran.Amount")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?o("span"):[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.Amount")))]),1==a.row.type&&2==a.row.subtype?o("span",[t._v("-")]):t._e(),[1,2].includes(a.row.subtype)?o("div",t._l(a.row.recipients,function(a){return o("div",{key:a.accountRS},[o("span",[t._v(t._s(t._f("toThousand")(t._f("toFixed1")(t._f("formatVol")(a.amountNQT))))+" VOL")])])}),0):o("span",[t._v(t._s(t._f("toThousand")(t._f("toFixed1")(t._f("formatVol")(a.row.amountNQT))))+" VOL")])]]}}])})],1)],1)]),o("el-pagination",{staticClass:"hidden-sm-and-up",attrs:{background:"",small:!0,"current-page":t.page,"page-size":t.limit,total:t.total,"pager-count":5,layout:"prev, pager, next, jumper"},on:{"update:currentPage":function(a){t.page=a},"update:current-page":function(a){t.page=a},"update:pageSize":function(a){t.limit=a},"update:page-size":function(a){t.limit=a},"size-change":t.handleChangeCurrent,"current-change":t.handleChangeCurrent}})],1)},e=[],n=o("365c"),i=o("f195"),c=o("aff9"),r=o("cf45"),l=o("07a4"),d={name:"MyAccountTransitions",props:{title:{type:Boolean,default:function(){return!0}},account:{type:String,required:!1},block:{type:String,required:!1}},data:function(){return{transactionList:[],loading:!1,total:0,limit:20,page:1}},computed:{limit_recipient:function(){return 4}},created:function(){var t=this;this.$store.state.accountOverview.isActive&&"MyAccount"===this.$route.name?(l["a"].dispatch("getAccountOverview"),this.getTransactionList()):"MyAccount"!==this.$route.name&&this.getTransactionList(),i["a"].$on("quickRefresh",function(){"MyAccount"!==t.$route.name&&t.getTransactionList(!0)}),i["a"].$on("updateTransactionList",function(){t.$store.state.accountOverview.isActive&&"MyAccount"===t.$route.name&&t.getTransactionList(!0)})},beforeDestroy:function(){i["a"].$off("updateTransactionList"),i["a"].$off("quickRefresh")},methods:{getTransactionList:function(t){var a=this;t||(this.loading=!0);var o={page:this.page,limit:this.limit};this.account&&(o["account"]=this.account),this.block&&(o["block"]=this.block),Object(n["n"])(o).then(function(t){var o=t.data;o=void 0===o?{}:o;var s=o.data,e=s.data,n=void 0===e?[]:e,i=s.total,l=void 0===i?0:i;n=Object(r["c"])(n,a.$i18n.locale),a.transactionList=n.map(function(t){if(t.showAll=!1,1===t.subtype&&(t.recipients=t.attachment.recipients.map(function(t){return{accountId:t[0],accountRS:c["a"].createAddressByAccountId(t[0]),amountNQT:t[1]}})),2===t.subtype)if(t.attachment.recipients){var a=t.amountNQT/t.attachment.recipients.length;t.recipients=t.attachment.recipients.map(function(t){return{accountId:t,accountRS:c["a"].createAddressByAccountId(t),amountNQT:a}})}else t.recipients=[];return t}).reduce(function(t,a){return t.push({rowType:"TIME",blockTimestamp:a.blockTimestamp||a.timestamp,type:a.type,feeNQT:a.feeNQT}),t.push(a),t},[]),a.total=l}).finally(function(){a.loading=!1})},handleChangeCurrent:function(t){this.getTransactionList()},arraySpanMethod:function(t){var a=t.row,o=(t.column,t.rowIndex,t.columnIndex);if("TIME"===a.rowType){if(0===o)return[1,4];if(1===o)return[1,3];if(2===o)return[0,0]}},addRowClassName:function(t){var a=t.row;return"TIME"===a.rowType?"row__time":"THEAD"===a.rowType?"row__thead":""}},watch:{account:function(){this.getTransactionList()},block:function(){this.getTransactionList()}}},u=d,p=(o("a053"),o("2877")),_=Object(p["a"])(u,s,e,!1,null,"44aac8f8",null);a["a"]=_.exports},7809:function(t,a,o){},8581:function(t,a,o){},a053:function(t,a,o){"use strict";var s=o("8581"),e=o.n(s);e.a},c13e:function(t,a,o){"use strict";var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"received"},[o("span",{staticClass:"received-title",attrs:{text:t.topTitle}},[t._v(t._s(t.topTitle))]),o("div",{staticClass:"received-qrcode__wrap"},[o("vs-qrcode",{attrs:{text:t.address}})],1),o("span",{staticClass:"received-address"},[t._v(t._s(t.address))]),o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.address,expression:"address",arg:"copy"}],staticClass:"received-button",attrs:{type:"text"}},[t._v(t._s(t.$t("myaccount.copyAddress")))])],1)},e=[],n={name:"Received",props:{address:{type:String,required:!0},topTitle:{type:String,required:!1}}},i=n,c=(o("5afd"),o("2877")),r=Object(c["a"])(i,s,e,!1,null,"38d24f10",null);a["a"]=r.exports},c493:function(t,a,o){"use strict";o.d(a,"d",function(){return n}),o.d(a,"a",function(){return i}),o.d(a,"b",function(){return c}),o.d(a,"c",function(){return r}),o.d(a,"e",function(){return l});var s=o("bc3a"),e=o.n(s);function n(t,a){return new Promise(function(o,s){e.a.get(t).then(function(t){t.data.data&&t.data.data.rows&&a&&d(t.data.data.rows),o(t.data)},function(t){console.log(t)}).catch(function(t){console.log(t)})})}function i(t,a){return new Promise(function(o,s){e.a.get(t).then(function(t){t.data.data&&t.data.data.rows&&a&&d(t.data.data.rows),o(t.data)},function(t){console.log(t)}).catch(function(t){console.log(t)})})}function c(){var t=localStorage.getItem("poolConfig");return t}function r(){var t=localStorage.getItem("poolConfigLogo");return t}function l(t){t()}function d(t){for(var a={},o={},s=0;s<t.length;s++)t[s].accountID&&(a[t[s].accountID]=t[s].shortName,o[t[s].accountID]=t[s].logo);var e=JSON.stringify(a),n=JSON.stringify(o);localStorage.setItem("poolConfig",e),localStorage.setItem("poolConfigLogo",n)}},e448:function(t,a,o){},eb5c:function(t,a,o){"use strict";o.r(a);var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"account-details"},[o("vs-container",{staticStyle:{"margin-top":"20px"}},[o("div",{staticClass:"header"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("account.Address")))])]),o("vs-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{padding:"0 20px","margin-top":"6px"}},[o("el-row",{attrs:{gutter:50}},[o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("account.Address"))+"：")]),o("div",{staticClass:"col-right"},[o("span",{staticClass:"addr"},[t._v(t._s(t._f("toBlank")(t.rows.accountRS))+"\n                "),o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.rows.accountRS,expression:"rows.accountRS",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"button——copy vs-mini-button no-border font-color__button-primary copy hidden-sm-and-down",attrs:{size:"mini",plain:""}},[t._v("\n                "+t._s(t.$t("myaccount.copy"))+"\n              ")]),o("vs-icon",{staticClass:"vs-qr-code",attrs:{name:"vs_qr_code"},nativeOn:{click:function(a){return t.handleQRCode(a)}}})],1)])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("account.Transfers")))]),o("div",{staticClass:"col-right"},[o("div",[t._v(t._s(t.rows.totalTnx||0)),o("span",{staticClass:"font--small"},[t._v("（"),o("span",{staticClass:"number__inner"},[t._v(t._s(t.rows.tnxIn||0)),o("vs-icon",{staticClass:"icon-zoom icon-zoom__down",attrs:{name:"down"}}),t._v(t._s(t.rows.tnxOut||0)),o("vs-icon",{staticClass:"icon-zoom icon-zoom__up",attrs:{name:"up"}})],1),t._v("）")])])])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("account.Name"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t._f("toBlank")(t.rows.name)))])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("account.Pool"))+"：")]),t.rows.minePoolRS!==t.rows.accountRS?o("router-link",{staticClass:"color-text-button-primary",attrs:{to:"/account/"+t.rows.minePool}},[t._v("\n            "+t._s(t.rows.minePoolRS)+"\n            ")]):o("span",[t._v(t._s(t.rows.minePoolRS))])],1)]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("account.TotalBalance"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t._f("toThousand")(t._f("formatVol")(t.rows.totalBalance)))+" VOL")])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("account.BlockForged"))+"：")]),o("div",{staticClass:"col-right theme-color"},[t._v("\n              "+t._s(t.rows.blockNum)+"\n            ")])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("account.Available"))+"：")]),o("div",{staticClass:"col-right theme-color"},[t._v(t._s(t._f("toThousand")(t._f("formatVol")(t.rows.balanceNQT)))+" VOL")])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("account.BlockEarning"))+"：")]),o("div",{staticClass:"col-right theme-color"},[t._v(t._s(t._f("toThousand")(t._f("formatVol")(t.rows.forgedBalanceNQT)))+" VOL")])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("account.Staked"))+"：")]),o("div",{staticClass:"col-right theme-color"},[t._v(t._s(t._f("toThousand")(t._f("formatVol")(t.rows.totalPledged)))+" VOL")])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("myaccount.stakingEarning"))+"：")]),o("div",{staticClass:"col-right theme-color"},[t._v(t._s(t._f("toThousand")(t._f("formatVol")(t.rows.pledgeRewardBalanceNQT)))+" VOL")])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("account.Unstaking"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t._f("toThousand")(t._f("formatVol")(t.rows.totalUnpledged)))+" VOL")])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("Pool.Total"))+"：")]),o("div",{staticClass:"col-right theme-color"},[t._v(t._s(t._f("toThousand")(t._f("formatVol")(t.totalReward)))+" VOL")])])])],1)],1),o("vs-main",{staticClass:"vs-main transition--wrap"},[o("MyAccountTransitions",{attrs:{account:t.$route.params.accountId}})],1),o("el-dialog",{attrs:{width:t.pledgeDialogWidth,visible:t.isShowPledgeDialog,"show-close":!1,"destroy-on-close":!0,"custom-class":"vs-dialog"},on:{"update:visible":function(a){t.isShowPledgeDialog=a}}},[o(t.currentPledgeComponent,{tag:"component",attrs:{address:t.rows.accountRS,topTitle:t.$t("account.QrCode")},model:{value:t.isShowPledgeDialog,callback:function(a){t.isShowPledgeDialog=a},expression:"isShowPledgeDialog"}})],1)],1)],1)},e=[],n=o("365c"),i=o("c13e"),c=o("51e6"),r=o("68ab"),l=o("c493"),d={Received:"Received"},u={name:"AccountDetails",components:{MyAccountTransitions:r["a"],Received:i["a"]},data:function(){return{loading:!1,isShowPledgeDialog:!1,currentPledgeComponent:d.Received,limit:10,page:1,total:0,totalReward:0,rows:{},accountRS:"",poolsConfig:{},poolsConfigIds:{}}},computed:{isMobile:function(){return Object(c["a"])()},pledgeDialogWidth:function(){return Object(c["a"])()?"100%":[d.Received].includes(this.currentPledgeComponent)?"380px":"466px"}},created:function(){var t=this;Object(l["b"])()&&Object(l["c"])()?(this.poolsConfig=JSON.parse(Object(l["b"])()),this.poolsConfigIds=JSON.parse(Object(l["c"])()),this.getAccountList(this.$route.params.accountId)):Object(l["e"])(function(){t.poolsConfig=JSON.parse(Object(l["b"])()),t.poolsConfigIds=JSON.parse(Object(l["c"])()),t.getAccountList(t.$route.params.accountId)})},beforeRouteUpdate:function(t,a,o){this.getAccountList(t.params.accountId),o()},methods:{onCopy:function(t){this.$message({message:this.$t("myaccount.copySuccess")+":"+t.text,type:"success"})},onError:function(t){this.$message.error("复制失败")},getAccountList:function(t){var a=this;this.loading=!0,Object(n["d"])({account:t,includeTransactions:!0}).then(function(t){var o=t.data;o=void 0===o?{}:o;var s=o.data.data,e=void 0===s?[]:s;e.length&&(a.rows=e[0],a.totalReward=parseFloat(e[0].pledgeRewardBalanceNQT)+parseFloat(e[0].forgedBalanceNQT))}).finally(function(){a.loading=!1})},handleQRCode:function(){this.isShowPledgeDialog=!0}}},p=u,_=(o("0bdb"),o("2877")),v=Object(_["a"])(p,s,e,!1,null,"79aea9da",null);a["default"]=v.exports}}]);