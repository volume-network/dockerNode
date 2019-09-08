(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b38ee9f"],{"3b08":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mine-pool-nodes"},[a("vs-container",[a("vs-header",{staticStyle:{"margin-top":"20px"},attrs:{title:t.$t("Pool.MPRN")}}),a("vs-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"hidden-xs-only",staticStyle:{"margin-top":"10px"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("div",{ref:"vsChart1",staticStyle:{width:"500px",height:"400px"}})]),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[a("div",{staticClass:"lines"})]),a("el-col",{attrs:{span:11}},[a("div",{ref:"vsChart2",staticStyle:{width:"500px",height:"400px"}})])],1)],1),a("vs-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"hidden-sm-and-up",staticStyle:{"margin-top":"10px"}},[a("div",{ref:"vsChart3",staticStyle:{width:"100%",height:"300px"}})]),a("vs-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"hidden-sm-and-up",staticStyle:{"margin-top":"10px"}},[a("div",{ref:"vsChart4",staticStyle:{width:"100%",height:"300px"}})]),a("vs-main",{staticStyle:{"margin-top":"10px","margin-bottom":"46px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"font-size":"14px"},attrs:{data:t.poolArray,"header-cell-style":t.rowClass}},[a("el-table-column",{attrs:{prop:"id",type:"index",index:t.indexMethod,label:"",width:"50",align:"center"}}),a("el-table-column",{attrs:{prop:"shortName",label:t.$t("Pool.MPRNAbbreviation"),width:"160",align:"left"},scopedSlots:t._u([{key:"default",fn:function(t){return[t.row.accountID?a("router-link",{attrs:{to:"/mine-pool-node/"+t.row.accountID}},[a("vs-poollogoname",{attrs:{id:t.row.id,name:t.row.shortName}})],1):a("vs-poollogoname",{attrs:{id:t.row.id,name:t.row.shortName,noLink:"true"}})]}}])}),a("el-table-column",{attrs:{prop:"location",label:t.$t("Pool.Location"),align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"minerCount",width:"80",align:"center",label:t.$t("Pool.Miner")}}),a("el-table-column",{attrs:{prop:"usedCap",width:"80",align:"right",label:t.$t("Pool.Capacity")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t._f("toFixed1")(e.row.usedCap))+"T\n          ")]}}])}),a("el-table-column",{attrs:{prop:"capRate",width:"110",align:"center",label:t.$t("Pool.CapacityRate")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("toRate")(e.row.capRate)))])]}}])}),a("el-table-column",{attrs:{prop:"totalPledged",width:"100",align:"right",label:t.$t("Pool.StakedAmount")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("toThousands")(t._f("formatVol")(e.row.totalPledged))))])]}}])}),a("el-table-column",{attrs:{prop:"pledgeRate",width:"120",align:"center",label:t.$t("Pool.StakedRate")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("toRate")(e.row.pledgeRate)))])]}}])}),a("el-table-column",{attrs:{prop:"blockNum",width:"80",align:"center",label:t.$t("Pool.BlockForged")}}),a("el-table-column",{attrs:{prop:"latestBlockReward",width:"150",align:"right",label:t.$t("Pool.LatestBlockReward")+"(VOL)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("toThousands")(t._f("formatVol")(e.row.latestBlockReward))))])]}}])}),a("el-table-column",{attrs:{prop:"totalForgedBalance",align:"right",label:t.$t("Pool.TotalBlockEarning")+"(VOL)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("toThousands")(t._f("formatVol")(e.row.totalForgedBalance))))])]}}])})],1)],1)],1)],1)},n=[],l=a("164e"),r=a.n(l),i=a("c493"),s=a("365c"),d={name:"MinePoolNodes",data:function(){return{loading:!1,poolArray:[],openFullScreen:!1,totalCap:""}},created:function(){this.getCap(),this.poolList()},mounted:function(){},update:function(){this.drawPie1(),this.drawPie2()},methods:{getCap:function(){var t=this;Object(s["g"])().then(function(e){t.totalCap=e.data.data})},rowClass:function(){return"font-weight: normal;font-size:14px;"},indexMethod:function(t){return 0===t?"":t++},drawPie1:function(){var t,e,a=this.$refs.vsChart1,o=this.$refs.vsChart3;a&&(t=r.a.init(a)),o&&(e=r.a.init(o));for(var n=[],l=this.poolArray.length,i=1;i<l;i++){var s=100*this.poolArray[i].totalCap;s&&n.push({value:s,name:this.poolArray[i].shortName||"无名"})}var d={backgroundColor:"#ffffff",title:{text:"矿池节点空间容量占比",x:"center",y:"20"},series:[{name:"访问来源",type:"pie",radius:["30%","60%"],center:["50%","55%"],data:n,label:{normal:{show:!0,textStyle:{color:"#666"}},emphasis:{show:!0}},labelLine:{normal:{show:!0}},itemStyle:{normal:{color:function(t){var e=["#89b4e7","#434347","#a8ea89","#e9a668","#8186e2","#dd6681","#e8da69","#539e9e","#e06560","#a7e6df"];return e[t.dataIndex%10]}}}}]};t&&t.setOption(d),e&&e.setOption(d)},drawPie2:function(){var t,e,a=this.$refs.vsChart2,o=this.$refs.vsChart4;a&&(t=r.a.init(a)),o&&(e=r.a.init(o));for(var n=[],l=this.poolArray.length,i=1;i<l;i++){var s=100*this.poolArray[i].pledgeRate;s&&n.push({value:s,name:this.poolArray[i].shortName||"无名"})}var d={backgroundColor:"#ffffff",title:{text:"矿池节点质押量占比",x:"center",y:"20"},series:[{name:"访问来源",type:"pie",radius:["30%","60%"],center:["50%","55%"],data:n,label:{normal:{show:!0,textStyle:{color:"#666"}},emphasis:{show:!0}},labelLine:{normal:{show:!0}},itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},normal:{color:function(t){var e=["#89b4e7","#434347","#a8ea89","#e9a668","#8186e2","#dd6681","#e8da69","#539e9e","#e06560","#a7e6df"];return e[t.dataIndex%10]}}}}]};t&&t.setOption(d),e&&e.setOption(d)},openDetails:function(t){var e="/mine-pool-node/"+t.accountID;this.$router.push({path:e})},poolList:function(){var t=this,e="https://volumenetwork.io/api/vlm/node/queryMinePool?debug=true&lang=";this.loading=!0;var a=this;Object(i["c"])(e+this.$i18n.locale).then(function(e){if(0===e.code){for(var o=e.data.rows,n=0,l=0,r=0,i=0,s=0;s<o.length;s++)o[s].minerCount&&(n+=parseFloat(o[s].minerCount)),o[s].totalForgedBalance&&(l+=parseFloat(o[s].totalForgedBalance)),o[s].blockNum&&(r+=parseFloat(o[s].blockNum)),o[s].totalPledged&&(i+=parseFloat(o[s].totalPledged));var d={id:0,shortName:"全网",location:"-",minerCount:n,usedCap:a.totalCap,capRate:"1",pledgeRate:"1",totalPledged:i,totalForgedBalance:l,blockNum:r};o.unshift(d),a.poolArray=e.data.rows,t.drawPie1(),t.drawPie2()}}).finally(function(){t.loading=!1})}}},c=d,u=(a("e089"),a("2877")),p=Object(u["a"])(c,o,n,!1,null,"c908a562",null),f=p.exports;e["default"]=f},c493:function(t,e,a){"use strict";a.d(e,"c",function(){return l}),a.d(e,"a",function(){return r}),a.d(e,"b",function(){return i}),a.d(e,"d",function(){return s});var o=a("bc3a"),n=a.n(o);function l(t){return new Promise(function(e,a){n.a.get(t).then(function(t){t.data.data&&t.data.data.rows&&d(t.data.data.rows),e(t.data)},function(t){console.log(t)}).catch(function(t){console.log(t)})})}function r(){var t=localStorage.getItem("poolConfig");return t}function i(){var t=localStorage.getItem("poolConfigId");return t}function s(t){var e="https://volumenetwork.io/api/vlm/node/queryMinePool?debug=true";l(e).then(function(e){if(0===e.code){var a=e.data.rows;d(a),t()}})}function d(t){for(var e={},a={},o=0;o<t.length;o++)t[o].accountID&&(e[t[o].accountID]=t[o].shortName,a[t[o].accountID]=t[o].id);var n=JSON.stringify(e),l=JSON.stringify(a);localStorage.setItem("poolConfig",n),localStorage.setItem("poolConfigId",l)}},db03:function(t,e,a){},e089:function(t,e,a){"use strict";var o=a("db03"),n=a.n(o);n.a}}]);