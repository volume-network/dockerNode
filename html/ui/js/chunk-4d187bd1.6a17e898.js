(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d187bd1"],{"1e48":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"myaccount-transitions"},[e("div",{staticClass:"transitions__header"},[e("div",{staticClass:"header__left"},[e("i18n",{attrs:{path:"myaccount.totalBlock",tag:"span"}},[e("span",{attrs:{place:"total"}},[t._v(t._s(t.total))])])],1),e("div",{staticClass:"header__right hidden-xs-only"},[e("el-pagination",{attrs:{background:"","current-page":t.page,"page-size":t.limit,total:t.total,layout:"prev, pager, next, sizes, jumper"},on:{"update:currentPage":function(a){t.page=a},"update:current-page":function(a){t.page=a},"update:pageSize":function(a){t.limit=a},"update:page-size":function(a){t.limit=a},"size-change":t.handleChangeCurrent,"current-change":t.handleChangeCurrent}})],1)]),e("div",{staticClass:"transitions__body"},[e("div",{staticClass:"transition"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingBlock,expression:"loadingBlock"}],staticClass:"vs-main-bhr-table",staticStyle:{"font-size":"14px"},attrs:{"header-cell-style":{fontWeight:"normal",fontSize:"14px"},"span-method":t.arraySpanMethod,"row-class-name":t.addRowClassName,data:t.blockData}},[e("el-table-column",{attrs:{prop:"height",label:t.$t("blockTran.Height"),width:"180",align:"left"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("router-link",{attrs:{to:"/block/"+a.row.block}},[e("div",{staticClass:"color-text-button-primary"},[t._v(t._s(t._f("toThousand")(a.row.height)))])])]}}])}),e("el-table-column",{attrs:{prop:"timestamp",label:t.$t("blockTran.Time"),align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[t.timeLittle(a.row.timestamp)?e("div",[t._v(t._s(t.timeLittle(a.row.timestamp))+" "+t._s(t.$t("home.SecondAgo")))]):e("div",[t._v("\n                "+t._s(t.$vmoment(a.row.timestamp).fromNow())+"\n              ")])]}}])}),e("el-table-column",{attrs:{prop:"generatorRS",width:"260",align:"center",label:t.$t("blockTran.Forger")},scopedSlots:t._u([{key:"default",fn:function(a){return[e("router-link",{attrs:{to:"/account/"+a.row.generatorRS}},[e("div",{staticClass:"color-text-button-primary"},[t._v(t._s(a.row.generatorRS))])])]}}])}),e("el-table-column",{attrs:{prop:"totalFeeNQT",width:"150",align:"center",label:t.$t("blockTran.TotalFees")+"(VOL)"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              "+t._s(t._f("toThousand")(t._f("toFixed1")(t._f("formatVol")(a.row.totalFeeNQT))))+"\n            ")]}}])}),e("el-table-column",{attrs:{prop:"blockReward",width:"200",align:"center",label:t.$t("blockTran.BlockReward")+"(VOL)"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              "+t._s(t._f("toThousand")(t._f("toFixed1")(t._f("formatVol")(a.row.blockReward))))+"\n            ")]}}])}),e("el-table-column",{attrs:{width:"200",prop:"blockBonus",align:"right",label:t.$t("blockTran.BlockEarningAll")+"(VOL)"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(t._f("toThousands")(t._f("formatVol")(a.row.blockBonus))))])]}}])})],1)],1)]),e("el-pagination",{staticClass:"hidden-sm-and-up",attrs:{background:"",small:!0,"current-page":t.page,"page-size":t.limit,total:t.total,"pager-count":5,layout:"prev, pager, next, jumper"},on:{"update:currentPage":function(a){t.page=a},"update:current-page":function(a){t.page=a},"update:pageSize":function(a){t.limit=a},"update:page-size":function(a){t.limit=a},"size-change":t.handleSizeChange,"current-change":t.handleChangeCurrent}})],1)},o=[],i=e("365c"),l=e("c6e6"),r=e("f195"),c=e("aff9"),s=e("cf45"),u={name:"BlockList",props:{requestType:{type:String,required:!0,validator:function(t){return"pool"===t||"account"===t}},account:{type:String,required:!1},block:{type:String,required:!1}},data:function(){return{loadingBlock:!1,transactionList:[],blockData:[],loading:!1,total:0,limit:20,page:1}},computed:{limit_recipient:function(){return 4}},created:function(){var t=this;this._getBlockList(),r["a"].$on("upData",function(){t._getBlockList()})},beforeDestroy:function(){r["a"].$off("upData")},methods:{timeLittle:function(t){var a="",e=this.$moment().format("X"),n=this.$vmoment(t).format("X");return e-n<60&&(a=(e-n).toString()),a},_getBlockList:function(){var t=this;this.loadingBlock=!0;var a={requestType:"getBlockList",limit:this.limit,page:this.page};"pool"===this.requestType?a["pool"]=this.account:"account"===this.requestType&&(a["account"]=this.account),Object(l["a"])(a).then(function(a){0===a.errCode&&(t.blockData=a.data.data),t.total=a.data.total}).finally(function(){t.loadingBlock=!1})},getTransactionList:function(t){var a=this;t||(this.loading=!0);var e={page:this.page,limit:this.limit};this.account&&(e["account"]=this.account),this.block&&(e["block"]=this.block),Object(i["n"])(e).then(function(t){var e=t.data;e=void 0===e?{}:e;var n=e.data,o=n.data,i=void 0===o?[]:o,l=n.total,r=void 0===l?0:l;i=Object(s["c"])(i,a.$i18n.locale),a.transactionList=i.map(function(t){if(t.showAll=!1,1===t.subtype&&(t.recipients=t.attachment.recipients.map(function(t){return{accountId:t[0],accountRS:c["a"].createAddressByAccountId(t[0]),amountNQT:t[1]}})),2===t.subtype)if(t.attachment.recipients){var a=t.amountNQT/t.attachment.recipients.length;t.recipients=t.attachment.recipients.map(function(t){return{accountId:t,accountRS:c["a"].createAddressByAccountId(t),amountNQT:a}})}else t.recipients=[];return t}).reduce(function(t,a){return t.push({rowType:"TIME",blockTimestamp:a.blockTimestamp||a.timestamp,type:a.type,feeNQT:a.feeNQT}),t.push(a),t},[]),a.total=r}).finally(function(){a.loading=!1})},handleSizeChange:function(t){this._getBlockList()},handleChangeCurrent:function(t){this._getBlockList()},arraySpanMethod:function(t){var a=t.row,e=(t.column,t.rowIndex,t.columnIndex);if("TIME"===a.rowType){if(0===e)return[1,4];if(1===e)return[1,3];if(2===e)return[0,0]}},addRowClassName:function(t){var a=t.row;return"TIME"===a.rowType?"row__time":"THEAD"===a.rowType?"row__thead":""}},watch:{account:function(){this.getTransactionList()}}},d=u,p=(e("450b"),e("2877")),f=Object(p["a"])(d,n,o,!1,null,"68da4913",null);a["a"]=f.exports},"450b":function(t,a,e){"use strict";var n=e("871f"),o=e.n(n);o.a},"750a":function(t,a,e){"use strict";var n=e("8f27"),o=e.n(n);o.a},"871f":function(t,a,e){},"8f27":function(t,a,e){},a739:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mine-pool-node-details"},[e("vs-container",[e("vs-header",{staticStyle:{"margin-top":"20px"},attrs:{title:t.$t("Pool.MPRNDetails")}}),t.showTable?e("vs-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingPoolMiner,expression:"loadingPoolMiner"}],staticStyle:{"margin-top":"10px","margin-bottom":"90px","padding-bottom":"10px"}},[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:t.$t("Pool.MinerList"),name:"first"}},[e("div",{staticClass:"pool-table-wrap"},[e("div",{staticClass:"vs-main-bh"},[e("div",{staticClass:"vs-main-bhl"},[e("span",{staticClass:"hidden-xs-only"},[t._v(t._s(t.$t("Pool.TotalOf"))+t._s(t.total)+t._s(t.$t("Pool.Accounts")))])]),e("div",{staticClass:"vs-main-bhr hidden-sm-and-up"},[t._v(t._s(t.$t("Pool.TotalOf"))+t._s(t.total)+t._s(t.$t("Pool.Accounts")))]),e("div",{staticClass:"vs-main-bhr hidden-xs-only"},[e("el-pagination",{attrs:{background:"","page-sizes":[10,20,30,40],"page-size":10,layout:"prev, pager, next, sizes, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),e("el-table",{staticStyle:{"font-size":"14px"},attrs:{data:t.tableData,"header-cell-style":t.rowClass}},[e("el-table-column",{attrs:{prop:"accountRS",label:t.$t("Pool.Address"),width:"260",align:"left"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("router-link",{attrs:{to:"/account/"+a.row.account}},[e("span",{staticClass:"color-text-button-primary"},[t._v(t._s(a.row.accountRS))])])]}}],null,!1,1824260730)}),e("el-table-column",{attrs:{prop:"totalCap",label:t.$t("Pool.Capacity")+"( T )",align:"right",width:"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n                  "+t._s(t._f("toFixed1")(a.row.totalCap))+"\n                ")]}}],null,!1,2617123208)}),e("el-table-column",{attrs:{prop:"totalPledged",width:"180",align:"right",label:t.$t("Pool.Staked")},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n                  "+t._s(t._f("toThousands")(t._f("formatVol")(a.row.totalPledged)))+"\n                ")]}}],null,!1,3564922628)}),e("el-table-column",{attrs:{prop:"blockNum",width:"220",align:"right",label:t.$t("Pool.BlockForged")}}),e("el-table-column",{attrs:{prop:"mineReward",width:"280",align:"right",label:t.$t("Pool.Total")},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n                  "+t._s(t._f("toThousands")(t._f("formatVol")(a.row.totalProfit)))+"\n                ")]}}],null,!1,2290021417)})],1),e("el-pagination",{staticClass:"hidden-sm-and-up",attrs:{small:!0,background:"",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)]),e("el-tab-pane",{attrs:{label:t.$t("myaccount.blockList"),name:"second"}},[e("div",{staticClass:"pool-table-wrap"},[e("BlockList",{attrs:{requestType:"pool",account:t.$route.params.minePoolNodeId}})],1)])],1)],1):t._e()],1)],1)},o=[],i=e("1e48"),l=e("365c"),r=e("c493"),c=e("aff9"),s={name:"MinePoolNodeDetails",components:{BlockList:i["a"]},data:function(){return{activeName:"first",loading:!1,loadingPoolMiner:!1,limit:10,page:1,total:0,showTable:!1,imgUrl:"",NodeName:"",Abbr:"",Contact:"",Location:"",accountID:"",accountAddress:"",Website:"",BriefIntroduction:"",tableData:[]}},created:function(){this.$route.params.minePoolNodeId&&(this.showTable=!0,this.handleList(this.$route.params.minePoolNodeId))},methods:{handleClick:function(t,a){},onCopy:function(t){this.$message({message:this.$t("myaccount.copySuccess")+":"+t.text,type:"success"})},onError:function(t){this.$message.error(this.$t("myaccount.copyFail"))},rowClass:function(){return"font-weight: normal;font-size:14px;"},handleSizeChange:function(t){this.limit=t,this.handleList(this.$route.params.minePoolNodeId)},handleCurrentChange:function(t){this.page=t,this.handleList(this.$route.params.minePoolNodeId)},getDetail:function(t){var a=this;this.loading=!0;var e="https://volumenetwork.io/deploy/api/vlm/node/queryMinePool?debug=false&lang=";Object(r["d"])(e+this.$i18n.locale+"&account="+t).then(function(t){if(0===t.code){var e=t.data.rows[0];a.imgUrl=e.logo,a.NodeName=e.name||"-",a.Abbr=e.shortName||"-",a.Contact=e.telephone||"-",a.Location=e.location||"-",a.Website=e.webpage?"<a href=".concat(e.webpage,' target="_blank" style="color: #2A549D;">').concat(e.webpage,"</a>"):"-",a.BriefIntroduction=e.description||"-",a.accountID=e.accountID,a.accountAddress=c["a"].createAddressByAccountId(a.accountID)}}).finally(function(){a.loading=!1})},handleList:function(t){var a=this;this.loadingPoolMiner=!0,Object(l["l"])({account:t,limit:this.limit,page:this.page}).then(function(t){var e=t.data;e=void 0===e?{}:e;for(var n=e.data,o=n.data,i=void 0===o?[]:o,l=n.total,r=void 0===l?0:l,c=0;c<i.length;c++)i[c]["totalProfit"]=i[c].pledgeRewardBalance+i[c].mineReward;a.tableData=i,a.total=r}).finally(function(){a.loadingPoolMiner=!1})}}},u=s,d=(e("750a"),e("2877")),p=Object(d["a"])(u,n,o,!1,null,"ae814914",null);a["default"]=p.exports},c493:function(t,a,e){"use strict";e.d(a,"d",function(){return i}),e.d(a,"a",function(){return l}),e.d(a,"b",function(){return r}),e.d(a,"c",function(){return c}),e.d(a,"e",function(){return s});var n=e("bc3a"),o=e.n(n);function i(t,a){return new Promise(function(e,n){o.a.get(t).then(function(t){t.data.data&&t.data.data.rows&&a&&u(t.data.data.rows),e(t.data)},function(t){console.log(t)}).catch(function(t){console.log(t)})})}function l(t,a){return new Promise(function(e,n){o.a.get(t).then(function(t){t.data.data&&t.data.data.rows&&a&&u(t.data.data.rows),e(t.data)},function(t){console.log(t)}).catch(function(t){console.log(t)})})}function r(){var t=localStorage.getItem("poolConfig");return t}function c(){var t=localStorage.getItem("poolConfigLogo");return t}function s(t){t()}function u(t){for(var a={},e={},n=0;n<t.length;n++)t[n].accountID&&(a[t[n].accountID]=t[n].shortName,e[t[n].accountID]=t[n].logo);var o=JSON.stringify(a),i=JSON.stringify(e);localStorage.setItem("poolConfig",o),localStorage.setItem("poolConfigLogo",i)}},c6e6:function(t,a,e){"use strict";e.d(a,"a",function(){return o});var n=e("0189");function o(t){return new Promise(function(a,e){n["a"].get("/vol",{params:t}).then(function(t){a(t.data)}).catch(function(t){e(t),console.log(t)})})}}}]);