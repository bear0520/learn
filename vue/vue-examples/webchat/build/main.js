!function(e){function t(o){if(s[o])return s[o].exports;var r=s[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var s={};return t.m=e,t.c=s,t.p="./build/",t(0)}([function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=s(11),n=o(r);Vue.config.debug=!0,new Vue(n["default"])},function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(3),n=o(r),i=s(12),a=o(i),u=s(17),l=o(u),d=s(22),f=o(d),p=s(33),c=o(p);t["default"]={el:"#chat",data:function(){var e=n["default"].fetch();return console.log(e),{_data:e,user:e.user,search:"",userIndex:e.userIndex||0,userList:e.userList,messageList:e.sessionList,text:"",showContextMenu:!1}},components:{userList:a["default"],card:l["default"],message:f["default"],text:c["default"]},computed:{messages:function(){return this.messageList[this.userIndex]}},watch:{"[messageList,userIndex]":{deep:!0,handler:function(){n["default"].save({userIndex:this.userIndex,user:this.user,userList:this.userList,sessionList:this.messageList})}}},filters:{},methods:{APPCLICK:function(){this.showContextMenu=!1}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["userList","search","userIndex"],data:function(){return{isTrue:!0}},methods:{chooseThis:function(e){this.userIndex=e}}}},function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(4),n=o(r),i="vue-chat",a=(new Date).getTime(),u={userIndex:0,user:{id:1,name:"cody",img:"build/images/1.jpg"},userList:[{id:2,name:"大蟹",img:"build/images/2.jpg"},{id:3,name:"Jsonz",img:"build/images/3.jpg"},{id:4,name:"bear",img:"build/images/4.jpg"}],sessionList:[{userId:2,data:[{text:"这是第一条信息",time:new Date("2012,4,4 11:02:10").getTime()},{text:"要搬家了,长寿路那边",time:new Date("2012,4,4 11:11:10").getTime()}]},{userId:3,data:[]},{userId:4,data:[{text:"hey",time:a}]}]};window.localStorage.setItem(i,(0,n["default"])(u)),t["default"]={fetch:function(){return JSON.parse(window.localStorage.getItem(i))},save:function(e){window.localStorage.setItem(i,(0,n["default"])(e))}}},function(e,t,s){e.exports={"default":s(5),__esModule:!0}},function(e,t,s){var o=s(6),r=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},function(e,t){var s=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=s)},function(e,t,s){t=e.exports=s(8)(),t.push([e.id,"#chat{overflow:hidden;border-radius:3px}#chat .main,#chat .sidebar{height:100%}#chat .sidebar{float:left;width:200px;color:#f4f4f4;background-color:#2e3238}#chat .main{position:relative;overflow:hidden;background-color:#eee}#chat .m-text{position:absolute;width:100%;bottom:0;left:0}#chat .m-message{height:calc(100% - 160px)}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var s=this[t];s[2]?e.push("@media "+s[2]+"{"+s[1]+"}"):e.push(s[1])}return e.join("")},e.i=function(t,s){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var n=this[r][0];"number"==typeof n&&(o[n]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(s&&!i[2]?i[2]=s:s&&(i[2]="("+i[2]+") and ("+s+")"),e.push(i))}},e}},function(e,t){e.exports="<div @click=APPCLICK()> <div class=sidebar> <card :user=user :search.sync=search></card> <user-list :user-list=userList :search=search :user-index.sync=userIndex></user-list> </div> <div class=main> <message :message-list=messages :user-list=userList :user=user :show-context.sync=showContextMenu></message> <text :text=text :messages.sync=messages></text> </div> </div>"},function(e,t){e.exports='<div class=m-list> <ul> <li v-for="user in userList | filterBy search in \'name\' " :class="{active:$index===userIndex}" @click=chooseThis($index)> <img :src=user.img width=30 height=30 :alt=user.name :title=user.name class=avatar> <p class=name>{{user.name}}</p> </li> </ul> </div>'},function(e,t,s){var o,r;s(14),o=s(1),r=s(9),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,s){var o,r;s(16),o=s(2),r=s(10),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,s){function o(e,t){for(var s=0;s<e.length;s++){var o=e[s],r=f[o.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](o.parts[n]);for(;n<o.parts.length;n++)r.parts.push(u(o.parts[n],t))}else{for(var i=[],n=0;n<o.parts.length;n++)i.push(u(o.parts[n],t));f[o.id]={id:o.id,refs:1,parts:i}}}}function r(e){for(var t=[],s={},o=0;o<e.length;o++){var r=e[o],n=r[0],i=r[1],a=r[2],u=r[3],l={css:i,media:a,sourceMap:u};s[n]?s[n].parts.push(l):t.push(s[n]={id:n,parts:[l]})}return t}function n(e,t){var s=x(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?s.insertBefore(t,o.nextSibling):s.appendChild(t):s.insertBefore(t,s.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");s.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",n(e,t),t}function u(e,t){var s,o,r;if(t.singleton){var n=h++;s=m||(m=a(t)),o=l.bind(null,s,n,!1),r=l.bind(null,s,n,!0)}else s=a(t),o=d.bind(null,s),r=function(){i(s)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function l(e,t,s,o){var r=s?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var n=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(n,i[t]):e.appendChild(n)}}function d(e,t){var s=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(s+="\n/*# sourceURL="+r.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var f={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},c=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),x=p(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,h=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=c()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var s=r(e);return o(s,t),function(e){for(var n=[],i=0;i<s.length;i++){var a=s[i],u=f[a.id];u.refs--,n.push(u)}if(e){var l=r(e);o(l,t)}for(var i=0;i<n.length;i++){var u=n[i];if(0===u.refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete f[u.id]}}}};var v=function(){var e=[];return function(t,s){return e[t]=s,e.filter(Boolean).join("\n")}}()},function(e,t,s){var o=s(7);"string"==typeof o&&(o=[[e.id,o,""]]);s(13)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,s){t=e.exports=s(8)(),t.push([e.id,".m-list li{padding:12px 15px;border-bottom:1px solid #292c33;cursor:pointer;-webkit-transition:background-color .1s;transition:background-color .1s}.m-list li:hover{background-color:hsla(0,0%,100%,.03)}.m-list li.active{background-color:hsla(0,0%,100%,.1)}.m-list .avatar,.m-list .name{vertical-align:middle}.m-list .name{line-height:30px;height:30px}.m-list .avatar{border-radius:2px}.m-list .name{display:inline-block;margin:0 0 0 15px}",""])},function(e,t,s){var o=s(15);"string"==typeof o&&(o=[[e.id,o,""]]);s(13)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,s){var o,r;s(21),o=s(18),r=s(19),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["user","search"]}},function(e,t){e.exports='<div class=m-card> <header> <img class=avatar width=40 :src=user.img :alt=user.name :title=user.user> <p class=name>{{user.name}}</p> </header> <footer> <input type=text class=search placeholder="search user..." v-model=search> </footer> </div>'},function(e,t,s){t=e.exports=s(8)(),t.push([e.id,".m-card{padding:12px;border-bottom:1px solid}.m-card footer{margin-top:10px}.avatar,.name{vertical-align:middle}.avatar{border-radius:2px}.name{display:inline-block;margin:0 0 0 15px;font-size:16px}.search{padding:0 10px;width:100%;font-size:12px;color:#fff;height:30px;line-height:30px;border:1px solid #3a3a3a;border-radius:4px;outline:none;background-color:#26292e}",""])},function(e,t,s){var o=s(20);"string"==typeof o&&(o=[[e.id,o,""]]);s(13)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,s){var o,r;s(27),o=s(23),r=s(26),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(28),n=o(r),i=new Date,a=i.getFullYear(),u=i.getMonth(),l=i.getDate(),d=new Date(a,u-1,l);t["default"]={props:["messageList","userList","user","showContext"],data:function(){return{site:{x:0,y:0}}},filters:{time:function(e){var t=new Date(e),s=t.getHours()+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()),o=t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日";return t.getTime()<d.getTime()?o+s:s},img:function(e){var t="undefined"==typeof e.self?this.sessionUser:this.user;return t&&t.img}},computed:{sessionUser:function(){var e=this,t=this.userList.filter(function(t){return t.id===e.messageList.userId});return t[0]}},methods:{showContextMenuFn:function(e){this.site.x=e.offsetX+20,this.site.y=e.pageY-50,this.showContext=!0}},components:{contextMenu:n["default"]}}},,function(e,t,s){t=e.exports=s(8)(),t.push([e.id,".m-message[_v-242f5feb]{padding:10px 15px;overflow-y:scroll;position:relative}.m-message li[_v-242f5feb]{margin-bottom:15px}.m-message .time[_v-242f5feb]{margin:7px 0;text-align:center}.m-message .time>span[_v-242f5feb]{display:inline-block;padding:0 18px;font-size:12px;color:#fff;border-radius:2px;background-color:#dcdcdc}.m-message .avatar[_v-242f5feb]{float:left;margin:0 10px 0 0;border-radius:3px}.m-message .text[_v-242f5feb]{display:inline-block;position:relative;padding:0 10px;max-width:calc(100% - 40px);min-height:30px;line-height:2.5;font-size:12px;text-align:left;word-break:break-all;background-color:#fafafa;border-radius:4px}.m-message .text[_v-242f5feb]:before{content:'';position:absolute;top:9px;right:100%;border:6px solid transparent;border-right-color:#fafafa}.m-message .self[_v-242f5feb]{text-align:right}.m-message .self .avatar[_v-242f5feb]{float:right;margin:0 0 0 10px}.m-message .self .text[_v-242f5feb]{background-color:#b2e281}.m-message .self .text[_v-242f5feb]:before{right:inherit;left:100%;border-right-color:transparent;border-left-color:#b2e281}",""])},function(e,t){e.exports='<div class=m-message @contextmenu.prevent=showContextMenuFn _v-242f5feb=""> <ul _v-242f5feb=""> <li v-for="message in messageList.data" _v-242f5feb=""> <p class=time _v-242f5feb=""><span _v-242f5feb="">{{message.time | time}}</span></p> <div class=main :class={self:message.self} _v-242f5feb=""> <img :src="message | img" class=avatar width=30 height=30 _v-242f5feb=""> <div class=text v-html=message.text _v-242f5feb=""></div> </div> </li> </ul> </div> <context-menu v-show=showContext :site=site :message.sync=messageList :show-menu.sync=showContext _v-242f5feb=""></context-menu>'},function(e,t,s){var o=s(25);"string"==typeof o&&(o=[[e.id,o,""]]);s(13)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,s){var o,r;s(32),o=s(29),r=s(30),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["site","showMenu","message"],methods:{clearMessage:function(){this.showMenu=!1,this.message.data=[]}}}},function(e,t){e.exports="<div id=contextMenu :style=\"{left:site.x + 'px',top:site.y + 'px'}\"> <ul class=dropdown_menu> <li @click=clearMessage> <a>清屏</a> </li> </ul> </div>"},function(e,t,s){t=e.exports=s(8)(),t.push([e.id,"#contextMenu{z-index:1000;position:absolute}.dropdown_menu{background-color:#fff;border-radius:4px;overflow:hidden;border:1px solid #d6d6d6;box-shadow:2px 3px 10px rgba(0,0,0,.1);min-width:125px}.dropdown_menu li:hover{background-color:#f1f1f1}.dropdown_menu a{display:block;text-decoration:none;color:#000;font-size:14px;padding:8px;border-bottom:1ox solid #f1f1f1;text-align:left}",""])},function(e,t,s){var o=s(31);"string"==typeof o&&(o=[[e.id,o,""]]);s(13)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,s){var o,r;s(37),o=s(34),r=s(35),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["text","messages"],methods:{sendData:function(e){13===e.keyCode&&this.text.length&&(this.messages.data.push({text:this.text,time:(new Date).getTime(),self:!0}),this.text="")}}}},function(e,t){e.exports='<div class=m-text> <textarea placeholder="按 enter 发送" v-model=text @keyup=sendData></textarea> </div>'},function(e,t,s){t=e.exports=s(8)(),t.push([e.id,".m-text{height:160px;border-top:1px solid #ddd}.m-text textarea{padding:10px;height:100%;width:100%;border:none;outline:none;font-family:Micrsofot Yahei;resize:none}",""])},function(e,t,s){var o=s(36);"string"==typeof o&&(o=[[e.id,o,""]]);s(13)(o,{});o.locals&&(e.exports=o.locals)}]);
//# sourceMappingURL=main.js.map