(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15029fba"],{"68ab":function(t,a,o){"use strict";var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"myaccount-transitions"},[o("div",{staticClass:"transitions__header"},[o("div",{staticClass:"header__left"},[o("h6",[t._v(t._s(t.$t("blockTran.Transaction")))]),o("i18n",{attrs:{path:"myaccount.totalTxs",tag:"span"}},[o("span",{attrs:{place:"total"}},[t._v(t._s(t.total))])])],1),o("div",{staticClass:"header__right hidden-xs-only"},[o("el-pagination",{attrs:{background:"","current-page":t.page,"page-size":t.limit,total:t.total,layout:"prev, pager, next, sizes, jumper"},on:{"update:currentPage":function(a){t.page=a},"update:current-page":function(a){t.page=a},"update:pageSize":function(a){t.limit=a},"update:page-size":function(a){t.limit=a},"size-change":t.handleChangeCurrent,"current-change":t.handleChangeCurrent}})],1)]),o("div",{staticClass:"transitions__body"},[o("div",{staticClass:"transition"},[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"transition__body",staticStyle:{},attrs:{data:t.transactionList,"span-method":t.arraySpanMethod,"row-class-name":t.addRowClassName}},[o("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"fullHash",align:"left",label:t.$t("myaccount.hash"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?[o("div",{staticClass:"time__wrap"},[o("span",{staticClass:"font-color__secondary"},[t._v(t._s(t.$t("blockTran.Time"))+"：")]),o("span",{staticClass:"font-color__long"},[t._v(t._s(t._f("vmoment")(a.row.blockTimestamp)))])])]:[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("myaccount.hash")))]),a.row.unconfirmedTransactions?o("span",{staticClass:"pending"},[t._v(t._s(a.row.fullHash))]):o("router-link",{attrs:{to:"/tx/"+a.row.transaction}},[o("span",{staticClass:"color-text-button-primary"},[t._v(t._s(a.row.fullHash))])])]]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"feeNQT",align:"center",label:t.$t("blockTran.Fee")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?o("span",[o("div",{staticClass:"thead__wrap"},[o("span",{staticClass:"font-color__secondary"},[t._v(t._s(t.$t("blockTran.Fee"))+"：")]),t._v("\n                  "+t._s(t._f("toThousands")(t._f("formatVol")(a.row.feeNQT)))+" VOL\n                ")])]):[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.TransactionType")))]),o("span",[t._v(" "+t._s(a.row.txType))])]]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"block",align:"center",label:t.$t("blockTran.Block")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?[o("div",{staticClass:"thead__wrap"},[o("span",{staticClass:"font-color__secondary"},[t._v(t._s(t.$t("blockTran.Fee"))+"：")]),t._v("\n                  "+t._s(t._f("toThousands")(t._f("formatVol")(a.row.feeNQT)))+" VOL\n                ")])]:[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.Block")))]),a.row.unconfirmedTransactions?o("span",{staticClass:"pending"},[t._v("(pending)")]):o("router-link",{attrs:{to:"/block/"+a.row.block}},[o("span",{staticClass:"color-text-button-primary"},[t._v(t._s(a.row.block))])])]]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"confirmations",align:"center",width:"80",label:t.$t("blockTran.Confirmations")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?o("span"):[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.Confirmations")))]),a.row.unconfirmedTransactions?o("span",[t._v("未确认")]):o("span",[t._v(t._s(a.row.confirmations))])]]}}])}),o("el-table-column",{attrs:{prop:"senderRS",align:"center",width:"240",label:t.$t("blockTran.Sender")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?o("span"):[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.Sender")))]),o("div",[[[a.row.senderRS,a.row.sender].includes(t.account)?o("span",[t._v(t._s(a.row.senderRS))]):o("router-link",{attrs:{to:"/account/"+a.row.senderRS}},[o("span",{staticClass:"color-text-button-primary"},[t._v(t._s(a.row.senderRS))])])]],2)]]}}])}),o("el-table-column",{attrs:{prop:"recipientRS",align:"center",width:"300",label:t.$t("blockTran.Recipient")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?o("span"):[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.Recipient")))]),a.row.recipient||a.row.attachment.recipients?t._e():o("div",[t._v("-")]),[1,2].includes(a.row.subtype)?o("div",[t._l(a.row.recipients,function(s,n){return o("div",{key:s.accountRS,staticClass:"address__wrap"},[a.row.showAll||n<t.limit_recipient?[[s.accountRS,s].includes(t.account)?o("span",[t._v(t._s(s.accountRS))]):o("router-link",{attrs:{to:"/account/"+s.accountRS}},[o("span",{staticClass:"color-text-button-primary"},[t._v(t._s(s.accountRS))])])]:t._e()],2)}),o("div",{staticClass:"button-more__wrap"},[a.row.recipients.length>t.limit_recipient?o("el-button",{attrs:{size:"mini",plain:""},on:{click:function(t){a.row.showAll=!a.row.showAll}}},[t._v("\n                      "+t._s(a.row.showAll?"隐藏":"更多")+"\n                      "),o("i",{staticClass:"el-icon-arrow-down"})]):t._e()],1)],2):[[a.row.recipientRS,a.row.recipient].includes(t.account)?o("span",{staticClass:"address__wrap"},[t._v(t._s(a.row.recipientRS))]):o("router-link",{staticClass:"address__wrap",attrs:{to:"/account/"+a.row.recipientRS}},[o("span",{staticClass:"color-text-button-primary"},[t._v(t._s(a.row.recipientRS))])])],o("vs-icon",{staticClass:"vs-icon-right",attrs:{name:"to"}})]]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"amountNQT",align:"right",label:t.$t("blockTran.Amount")},scopedSlots:t._u([{key:"default",fn:function(a){return["TIME"===a.row.rowType?o("span"):[o("div",{staticClass:"row__thead"},[t._v(t._s(t.$t("blockTran.Amount")))]),1==a.row.type&&2==a.row.subtype?o("span",[t._v("-")]):t._e(),[1,2].includes(a.row.subtype)?o("div",t._l(a.row.recipients,function(a){return o("div",{key:a.accountRS},[o("span",[t._v(t._s(t._f("toFixed1")(t._f("toThousand")(t._f("formatVol")(a.amountNQT))))+" VOL")])])}),0):o("span",[t._v(t._s(t._f("toFixed1")(t._f("toThousand")(t._f("formatVol")(a.row.amountNQT))))+" VOL")])]]}}])})],1)],1)]),o("el-pagination",{staticClass:"hidden-sm-and-up",attrs:{background:"",small:!0,"current-page":t.page,"page-size":t.limit,total:t.total,"pager-count":5,layout:"prev, pager, next, jumper"},on:{"update:currentPage":function(a){t.page=a},"update:current-page":function(a){t.page=a},"update:pageSize":function(a){t.limit=a},"update:page-size":function(a){t.limit=a},"size-change":t.handleChangeCurrent,"current-change":t.handleChangeCurrent}})],1)},n=[],i=o("365c"),e=o("f195"),l=o("aff9"),c=o("cf45"),r=o("07a4"),d={name:"MyAccountTransitions",props:{account:{type:String,required:!1},block:{type:String,required:!1}},data:function(){return{transactionList:[],loading:!1,total:0,limit:20,page:1}},computed:{limit_recipient:function(){return 4}},created:function(){var t=this;r["a"].dispatch("getAccountOverview"),"MyAccount"!==this.$route.name&&this.getTransactionList(),e["a"].$on("updateTransactionList",function(){t.getTransactionList(!0)})},destroyed:function(){e["a"].$off("updateTransactionList")},methods:{getTransactionList:function(t){var a=this;t||(this.loading=!0);var o={page:this.page,limit:this.limit};this.account&&(o["account"]=this.account),this.block&&(o["block"]=this.block),Object(i["o"])(o).then(function(t){var o=t.data;o=void 0===o?{}:o;var s=o.data,n=s.data,i=void 0===n?[]:n,e=s.total,r=void 0===e?0:e;i=Object(c["b"])(i,a.$i18n.locale),a.transactionList=i.map(function(t){if(t.showAll=!1,1===t.subtype&&(t.recipients=t.attachment.recipients.map(function(t){return{accountId:t[0],accountRS:l["a"].createAddressByAccountId(t[0]),amountNQT:t[1]}})),2===t.subtype)if(t.attachment.recipients){var a=t.amountNQT/t.attachment.recipients.length;t.recipients=t.attachment.recipients.map(function(t){return{accountId:t,accountRS:l["a"].createAddressByAccountId(t),amountNQT:a}})}else t.recipients=[];return t}).reduce(function(t,a){return t.push({rowType:"TIME",blockTimestamp:a.blockTimestamp||a.timestamp,type:a.type,feeNQT:a.feeNQT}),t.push(a),t},[]),a.total=r}).finally(function(){a.loading=!1})},handleChangeCurrent:function(t){this.getTransactionList()},arraySpanMethod:function(t){var a=t.row,o=(t.column,t.rowIndex,t.columnIndex);if("TIME"===a.rowType){if(0===o)return[1,4];if(1===o)return[1,3];if(2===o)return[0,0]}},addRowClassName:function(t){var a=t.row;return"TIME"===a.rowType?"row__time":"THEAD"===a.rowType?"row__thead":""}},watch:{account:function(){this.getTransactionList()}}},u=d,p=(o("7151"),o("2877")),_=Object(p["a"])(u,s,n,!1,null,"f34ce44a",null);a["a"]=_.exports},7151:function(t,a,o){"use strict";var s=o("cde9"),n=o.n(s);n.a},"97b5":function(t,a,o){},"9e61":function(t,a,o){"use strict";o.r(a);var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"block-details"},[o("vs-container",[o("vs-header",{staticStyle:{"margin-top":"20px"},attrs:{title:t.getTitle}}),o("vs-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{padding:"0 20px","margin-top":"6px"}},[o("el-row",{attrs:{gutter:50}},[o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.Height"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t._f("toThousand")(t.rows.height)))])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.BlockSize"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t.rows.payloadLength)+" Byte")])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.Confirmations"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t._f("toThousand")(t.rows.confirmations)))])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.TxCount"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t._f("toThousand")(t.rows.numberOfTransactions)))])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.BlockTime"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t._f("vmoment")(t.rows.timestamp)))])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v("Block Signature：")]),o("div",{staticClass:"col-right not-long ",attrs:{"show-overflow-tooltip":""}},[t._v(t._s(t.rows.blockSignature))])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line",staticStyle:{padding:"10px 0"}},[o("div",{staticClass:"col-left",staticStyle:{"line-height":"1.71"}},[t._v(t._s(t.$t("blockTran.RelayedBy"))+"：")]),o("router-link",{attrs:{to:"/mine-pool-node/"+t.rows.minePool}},[o("div",{staticClass:"col-right theme-color pointer"},[o("vs-poollogoname",{attrs:{id:t.poolsConfigIds[t.rows.minePool],name:t.poolsConfig[t.rows.minePool]}})],1)])],1)]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.BlockID"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t.rows.block))])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.Forger"))+"：")]),o("router-link",{attrs:{to:"/account/"+t.rows.generator}},[o("div",{staticClass:"col-right theme-color pointer"},[t._v(t._s(t._f("toAddress")(t.rows.generator)))])])],1)]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.PrevBlock"))+"：")]),o("router-link",{attrs:{to:"/block/"+t.rows.previousBlock}},[o("div",{staticClass:"col-right theme-color pointer"},[t._v(t._s(t.rows.previousBlock))])])],1)]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.TotalFees"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t._f("toThousand")(t._f("formatVol")(t.rows.totalAmountNQT)))+" VOL")])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.NextBlock"))+"：")]),o("router-link",{attrs:{to:"/block/"+t.rows.nextBlock}},[o("div",{staticClass:"col-right theme-color pointer"},[t._v(t._s(t._f("toBlank")(t.rows.nextBlock)))])])],1)]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.BlockReward"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t._f("toThousand")(t._f("formatVol")(t.rows.blockReward)))+" VOL")])])]),t.rows.cumulativeDifficulty?o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v("Difficulty:")]),o("div",{staticClass:"col-right"},[o("span",[t._v(t._s(t.rows.cumulativeDifficulty))]),t.rows.cumulativeDifficulty?o("span",[t._v("[ "+t._s(t._f("bytesToSize")(t.rows.cumulativeDifficulty))+" ]")]):t._e()])])]):t._e(),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v(t._s(t.$t("blockTran.BlockEarning"))+"：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t._f("toThousand")(t._f("formatVol")(t.rows.blockBonus)))+" VOL")])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v("PlotterID:")]),o("div",{staticClass:"col-right"},[t._v(t._s(t.rows.scoopNum))])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line"},[o("div",{staticClass:"col-left"},[t._v("Nonce：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t.rows.nonce))])])]),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[o("div",{staticClass:"col-line no-border"},[o("div",{staticClass:"col-left"},[t._v("Base Target：")]),o("div",{staticClass:"col-right"},[t._v(t._s(t.rows.baseTarget))])])])],1)],1),o("vs-main",{staticClass:"vs-main transition--wrap"},[o("MyAccountTransitions",{attrs:{block:t.blockId}})],1)],1)],1)},n=[],i=o("c6e6"),e=o("68ab"),l=o("c493"),c={name:"BlockDetails",components:{MyAccountTransitions:e["a"]},provide:function(){return{reload:this.reload}},data:function(){return{loading:!1,loadingTx:!1,rows:{},poolsConfig:{},poolsConfigIds:{},transactionList:[],hTitle:"",limit:10,page:1,total:40,blockId:"",isRouterAlive:!0}},computed:{getTitle:function(){return this.$t("blockTran.Block")+"#"+this.hTitle}},created:function(){var t=this;Object(l["a"])()?(this.poolsConfig=JSON.parse(Object(l["a"])()),this.poolsConfigIds=JSON.parse(Object(l["b"])()),this.initData(this.$route.params.blockId)):Object(l["d"])(function(){t.poolsConfig=JSON.parse(Object(l["a"])()),t.poolsConfigIds=JSON.parse(Object(l["b"])()),t.initData(t.$route.params.blockId)}),this.blockId=this.$route.params.blockId},beforeRouteUpdate:function(t,a,o){Object(l["a"])()?(this.poolsConfig=JSON.parse(Object(l["a"])()),this.poolsConfigIds=JSON.parse(Object(l["b"])()),this.initData(t.params.blockId)):Object(l["d"])(function(){this.poolsConfig=JSON.parse(Object(l["a"])()),this.poolsConfigIds=JSON.parse(Object(l["b"])()),this.initData(t.params.blockId)}),o()},methods:{rowClass:function(){return"font-weight: normal;font-size:14px;"},reload:function(){this.isRouterAlive=!1,this.$nextTick(function(){this.isRouterAlive=!0})},initData:function(t){var a=this;this.loading=!0,Object(i["a"])({requestType:"getBlockList",block:t}).then(function(t){0===t.errCode&&t.data.data.length&&(a.rows=t.data.data[0],a.hTitle=a.rows.height)}).finally(function(){a.loading=!1})}}},r=c,d=(o("be9a"),o("2877")),u=Object(d["a"])(r,s,n,!1,null,"2ab937c8",null);a["default"]=u.exports},be9a:function(t,a,o){"use strict";var s=o("97b5"),n=o.n(s);n.a},c493:function(t,a,o){"use strict";o.d(a,"c",function(){return i}),o.d(a,"a",function(){return e}),o.d(a,"b",function(){return l}),o.d(a,"d",function(){return c});var s=o("bc3a"),n=o.n(s);function i(t,a){return new Promise(function(o,s){n.a.get(t).then(function(t){t.data.data&&t.data.data.rows&&a&&r(t.data.data.rows),o(t.data)},function(t){console.log(t)}).catch(function(t){console.log(t)})})}function e(){var t=localStorage.getItem("poolConfig");return t}function l(){var t=localStorage.getItem("poolConfigId");return t}function c(t){var a="https://volumenetwork.io/api/vlm/node/queryMinePool?debug=true";i(a).then(function(a){if(0===a.code){var o=a.data.rows;r(o),t()}})}function r(t){for(var a={},o={},s=0;s<t.length;s++)t[s].accountID&&(a[t[s].accountID]=t[s].shortName,o[t[s].accountID]=t[s].id);var n=JSON.stringify(a),i=JSON.stringify(o);localStorage.setItem("poolConfig",n),localStorage.setItem("poolConfigId",i)}},c6e6:function(t,a,o){"use strict";o.d(a,"a",function(){return n});var s=o("0189");function n(t){return new Promise(function(a,o){s["a"].get("/vol",{params:t}).then(function(t){a(t.data)}).catch(function(t){o(t),console.log(t)})})}},cde9:function(t,a,o){}}]);