!function(){var t=function(){return function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var r=o(1),i=o(2),a=o(3);$app_define$("@app-component/index",[],function(t,e,o){a(o,e,t),e.__esModule&&e.default&&(o.exports=e.default),o.exports.template=r,o.exports.style=i}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},function(t,e){t.exports={type:"div",attr:{},classList:["demo-page"],children:[{type:"image",attr:{id:"icon",src:function(){return this.icon}},id:"icon"},{type:"text",attr:{id:"name",value:function(){return this.name}},id:"name"},{type:"div",attr:{id:"tags"},id:"tags",children:[{type:"text",attr:{value:"无安装"},classList:["tag"]},{type:"text",attr:{value:"|"},classList:["gap"]},{type:"text",attr:{value:"体积小"},classList:["tag"]},{type:"text",attr:{value:"|"},classList:["gap"]},{type:"text",attr:{value:"一步直达"},classList:["tag"]}]},{type:"text",attr:{id:"desc",value:function(){return this.desc}},id:"desc"},{type:"div",attr:{},classList:["detail","detail-first"],children:[{type:"text",attr:{value:"服务类型"},classList:["detail-title"]},{type:"text",attr:{value:function(){return this.serviceType}},classList:["detail-content"]}]},{type:"div",attr:{},classList:["detail"],children:[{type:"text",attr:{value:"主体信息"},classList:["detail-title"]},{type:"text",attr:{value:function(){return this.subjectInfo}},classList:["detail-content"]}]},{type:"input",attr:{type:"button",value:"创建快捷方式"},classList:["btn"],events:{click:"createShortcut"}},{type:"text",attr:{id:"footer",value:function(){return this.copyright}},id:"footer"}]}},function(t,e){t.exports={".demo-page":{flexDirection:"column",alignItems:"center"},"#icon":{marginTop:"90px",width:"134px",height:"134px",borderRadius:"10px",borderTopWidth:"1px",borderRightWidth:"1px",borderBottomWidth:"1px",borderLeftWidth:"1px",borderStyle:"solid",borderTopColor:"#8d8d8d",borderRightColor:"#8d8d8d",borderBottomColor:"#8d8d8d",borderLeftColor:"#8d8d8d"},"#name":{marginTop:"20px",fontSize:"36px",color:"#000000"},"#tags":{marginTop:"22px",alignItems:"center"},".tag":{paddingLeft:"20px",paddingRight:"20px",fontSize:"28px",color:"#2a9700"},".gap":{fontSize:"22px",color:"#b2b2b2"},"#desc":{width:"650px",marginTop:"40px",lineHeight:"35px",fontSize:"25px",color:"#8d8d8d"},".detail":{width:"650px",height:"90px",borderBottomWidth:"1px",borderBottomColor:"#f0f0f0"},".detail-first":{marginTop:"65px",borderTopWidth:"1px",borderTopColor:"#f0f0f0"},".detail-title":{width:"160px",paddingLeft:"10px",fontSize:"25px",color:"#000000"},".detail-content":{fontSize:"25px",color:"#8d8d8d"},".btn":{width:"550px",height:"86px",marginTop:"75px",borderRadius:"43px",backgroundColor:"#09ba07",fontSize:"30px",color:"#ffffff"},"#footer":{width:"750px",position:"fixed",bottom:"55px",fontSize:"25px",color:"#8d8d8d",textAlign:"center"}}},function(t,e){t.exports=function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={protected:{name:null,icon:null},private:{desc:"即点即用，让你省去下载安装的步骤，立即使用各类服务",serviceType:"工具类",subjectInfo:"xxx有限公司",copyright:""},onInit:function(){this.$page.setTitleBar({text:this.name})},createShortcut:function(){this.$app.$def.createShortcut()}};var i=e.default||t.exports,a=["public","protected","private"];if(i.data&&a.some(function(t){return i[t]}))throw new Error('页面VM对象中的属性data不可与"'+a.join(",")+'"同时存在，请使用private替换data名称');i.data||(i.data={},i._descriptor={},a.forEach(function(t){var e=r(i[t]);if("object"===e){i.data=Object.assign(i.data,i[t]);for(var o in i[t])i._descriptor[o]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")}))}}])};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();