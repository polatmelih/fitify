"use strict";(self.webpackChunkfitify_final=self.webpackChunkfitify_final||[]).push([[268],{25827:function(e,t,i){var r=i(74165),n=i(15861),a=i(29439),o=i(10311),s=i(72791),l=i(13967),c=i(11607),u=i(88249),d=i(80184);t.Z=function(e){e.isCustomLineColors;var t=e.isDashboard,i=void 0!==t&&t,g=(0,s.useState)(Array),h=(0,a.Z)(g,2),p=h[0],f=h[1],m=["SO","MO","DI","MI","DO","FR","SA"];(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var t,i,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.h.get("/get-weight.php");case 3:t=e.sent,i=t.data.map((function(e){return{x:m[new Date(e.date).getDay()],y:e.weight}})),n=t.data.map((function(e){return{x:m[new Date(e.date).getDay()],y:e.goal_weight}})),f([{id:"Gewicht",data:i,color:(0,c.TV)("dark").blueAccent[300]},{id:"Zielgewicht",data:n,color:(0,c.TV)("dark").greenAccent[500]}]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();("coach"!==sessionStorage.getItem("role").toString().toLowerCase()||sessionStorage.getItem("sus_id"))&&e()}),[]);var x=(0,l.Z)(),v=(0,c.TV)(x.palette.mode);return p?(0,d.jsx)(o.fH,{data:p,theme:{axis:{domain:{line:{stroke:v.grey[100]}},legend:{text:{fill:v.grey[100]}},ticks:{line:{stroke:v.grey[100],strokeWidth:1},text:{fill:v.grey[100]}}},legends:{text:{fill:v.grey[100]}},tooltip:{container:{color:v.primary[500]}}},colors:i?{datum:"color"}:{scheme:"nivo"},margin:{top:50,right:110,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!1,reverse:!1},yFormat:" >-.2f",curve:"catmullRom",axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:0,tickPadding:5,tickRotation:0,legend:i?void 0:"Monate",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickValues:5,tickSize:3,tickPadding:5,tickRotation:0,legend:i?void 0:"in kg",legendOffset:-40,legendPosition:"middle"},enableGridX:!1,enableGridY:!1,pointSize:8,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,useMesh:!0,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]}]}):(0,d.jsx)("div",{children:"Loading..."})}},19268:function(e,t,i){i.r(t);var r=i(74165),n=i(15861),a=i(29439),o=i(64554),s=i(27391),l=i(94294),c=i(37084),u=i(25827),d=i(72791),g=i(88249),h=i(80184);t.default=function(){var e=(0,d.useState)(""),t=(0,a.Z)(e,2),i=t[0],p=t[1],f=(0,d.useState)(""),m=(0,a.Z)(f,2),x=m[0],v=m[1],y=(0,d.useState)(crypto.randomUUID()),k=(0,a.Z)(y,2),b=k[0],Z=k[1],w=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(JSON.stringify({weight:i,goal_weight:x})),e.next=4,g.h.post("/set-weight.php",t);case 4:p(""),v(""),Z(crypto.randomUUID()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)(o.Z,{m:"20px",children:[(0,h.jsx)(c.Z,{title:"Gewichtsdetails",subtitle:"Alles im \xdcberblick"}),"coach"!==sessionStorage.getItem("role").toString().toLowerCase()&&(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(s.Z,{type:"number",value:i,label:"Gewicht",variant:"outlined",onChange:function(e){return p(e.target.value)},sx:{mr:"20px"}}),(0,h.jsx)(s.Z,{type:"number",value:x,label:"Zielgewicht",variant:"outlined",onChange:function(e){return v(e.target.value)},sx:{mr:"20px"}}),(0,h.jsx)(l.Z,{disabled:!i||!x,variant:"contained",size:"large",sx:{height:"50px"},onClick:w,children:"Eintragen"})]}),(0,h.jsx)(o.Z,{height:"75vh",children:(0,h.jsx)(u.Z,{},b)})]})}}}]);
//# sourceMappingURL=268.3ce9beb0.chunk.js.map