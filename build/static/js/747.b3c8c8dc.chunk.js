"use strict";(self.webpackChunkfitify_final=self.webpackChunkfitify_final||[]).push([[747],{5809:function(e,t,n){var r=n(74165),i=n(15861),a=n(29439),o=n(13967),s=n(92995),d=n(11607),l=(n(85212),n(72791)),c=n(88249),g=n(80184);t.Z=function(e){var t=e.isDashboard,n=void 0!==t&&t,m=(0,o.Z)(),p=(0,d.TV)(m.palette.mode),u=(0,l.useState)(Array),f=(0,a.Z)(u,2),h=f[0],y=f[1],k=["SO","MO","DI","MI","DO","FR","SA"];return(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.h.get("/get-training.php");case 3:t=e.sent,n=t.data.map((function(e){return{day:k[new Date(e.date).getDay()],Trainingsdauer:e.training,TrainingsdauerColor:"hsl(28, 100%, 52.7%)"}})),y(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();("coach"!==sessionStorage.getItem("role").toString().toLowerCase()||sessionStorage.getItem("sus_id"))&&e()}),[]),(0,g.jsx)(s.jM,{data:h,theme:{axis:{domain:{line:{stroke:p.grey[100]}},legend:{text:{fill:p.grey[100]}},ticks:{line:{stroke:p.grey[100],strokeWidth:1},text:{fill:p.grey[100]}}},legends:{text:{fill:p.grey[100]}}},keys:["Trainingsdauer"],indexBy:"day",margin:{top:50,right:150,bottom:50,left:60},padding:.3,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:{scheme:"spectral"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],borderColor:{from:"color",modifiers:[["darker","1.6"]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:n?void 0:"Tag",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:n?void 0:"in h",legendPosition:"middle",legendOffset:-40},enableLabel:!1,labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}],role:"application",barAriaLabel:function(e){return e.id+": "+e.formattedValue+" in day: "+e.indexValue}})}},85212:function(e,t,n){n.d(t,{B_:function(){return a},lc:function(){return i}});var r=n(11607),i=[{id:1,name:"Jon Snow",e5l:"jonsnow@g5l.com",age:35,phone:"(665)121-5454",address:"0912 Won Street, Alabama, SY 10001",city:"New York",zipCode:"10001",registrarId:123512},{id:2,name:"Cersei Lannister",e5l:"cerseilannister@g5l.com",age:42,phone:"(421)314-2288",address:"1234 5n Street, New York, NY 10001",city:"New York",zipCode:"13151",registrarId:123512},{id:3,name:"Jaime Lannister",e5l:"jaimelannister@g5l.com",age:45,phone:"(422)982-6739",address:"3333 Want Blvd, Estanza, NAY 42125",city:"New York",zipCode:"87281",registrarId:4132513},{id:4,name:"Anya Stark",e5l:"anyastark@g5l.com",age:16,phone:"(921)425-6742",address:"1514 5n Street, New York, NY 22298",city:"New York",zipCode:"15551",registrarId:123512},{id:5,name:"Daenerys Targaryen",e5l:"daenerystargaryen@g5l.com",age:31,phone:"(421)445-1189",address:"11122 Welping Ave, Tenting, CD 21321",city:"Tenting",zipCode:"14215",registrarId:123512},{id:6,name:"Ever Melisandre",e5l:"evermelisandre@g5l.com",age:150,phone:"(232)545-6483",address:"1234 Canvile Street, Esvazark, NY 10001",city:"Esvazark",zipCode:"10001",registrarId:123512},{id:7,name:"Ferrara Clifford",e5l:"ferraraclifford@g5l.com",age:44,phone:"(543)124-0123",address:"22215 Super Street, Everting, ZO 515234",city:"Evertin",zipCode:"51523",registrarId:123512},{id:8,name:"Rossini Frances",e5l:"rossinifrances@g5l.com",age:36,phone:"(222)444-5555",address:"4123 Ever Blvd, Wentington, AD 142213",city:"Esteras",zipCode:"44215",registrarId:512315},{id:9,name:"Harvey Roxie",e5l:"harveyroxie@g5l.com",age:65,phone:"(444)555-6239",address:"51234 Avery Street, Cantory, ND 212412",city:"Colunza",zipCode:"111234",registrarId:928397},{id:10,name:"Enteri Redack",e5l:"enteriredack@g5l.com",age:42,phone:"(222)444-5555",address:"4123 Easer Blvd, Wentington, AD 142213",city:"Esteras",zipCode:"44215",registrarId:533215},{id:11,name:"Steve Goodman",e5l:"stevegoodmane@g5l.com",age:11,phone:"(444)555-6239",address:"51234 Fiveton Street, CunFory, ND 212412",city:"Colunza",zipCode:"1234",registrarId:92197}],a=[{id:1,name:"Jon Snow",e5l:"jonsnow@g5l.com",cost:"21.24",phone:"(665)121-5454",date:"03/12/2022"},{id:2,name:"Cersei Lannister",e5l:"cerseilannister@g5l.com",cost:"1.24",phone:"(421)314-2288",date:"06/15/2021"},{id:3,name:"Jaime Lannister",e5l:"jaimelannister@g5l.com",cost:"11.24",phone:"(422)982-6739",date:"05/02/2022"},{id:4,name:"Anya Stark",e5l:"anyastark@g5l.com",cost:"80.55",phone:"(921)425-6742",date:"03/21/2022"},{id:5,name:"Daenerys Targaryen",e5l:"daenerystargaryen@g5l.com",cost:"1.24",phone:"(421)445-1189",date:"01/12/2021"},{id:6,name:"Ever Melisandre",e5l:"evermelisandre@g5l.com",cost:"63.12",phone:"(232)545-6483",date:"11/02/2022"},{id:7,name:"Ferrara Clifford",e5l:"ferraraclifford@g5l.com",cost:"52.42",phone:"(543)124-0123",date:"02/11/2022"},{id:8,name:"Rossini Frances",e5l:"rossinifrances@g5l.com",cost:"21.24",phone:"(222)444-5555",date:"05/02/2021"}];(0,r.TV)("dark").greenAccent[500],(0,r.TV)("dark").blueAccent[300]},60747:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(74165),i=n(15861),a=n(29439),o=n(64554),s=n(27391),d=n(94294),l=n(37084),c=n(5809),g=n(13967),m=n(92995),p=n(11607),u=(n(85212),n(72791)),f=n(88249),h=n(80184),y=function(e){var t=e.isDashboard,n=void 0!==t&&t,o=e.reload,s=(0,g.Z)(),d=(0,p.TV)(s.palette.mode),l=(0,u.useState)(Array),c=(0,a.Z)(l,2),y=c[0],k=c[1],v=["SO","MO","DI","MI","DO","FR","SA"];return(0,u.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.h.get("/get-training.php");case 3:t=e.sent,n=t.data.map((function(e){return{day:v[new Date(e.date).getDay()],"Trainingsintensit\xe4t":e.training_intensity,"Trainingsintensit\xe4tColor":"hsl(28, 100%, 52.7%)"}})),k(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();("coach"!==sessionStorage.getItem("role").toString().toLowerCase()||sessionStorage.getItem("sus_id"))&&e()}),[o]),(0,h.jsx)(m.jM,{data:y,theme:{axis:{domain:{line:{stroke:d.grey[100]}},legend:{text:{fill:d.grey[100]}},ticks:{line:{stroke:d.grey[100],strokeWidth:1},text:{fill:d.grey[100]}}},legends:{text:{fill:d.grey[100]}}},keys:["Trainingsintensit\xe4t"],indexBy:"day",margin:{top:50,right:150,bottom:50,left:60},padding:.3,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:{scheme:"set1"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],borderColor:{from:"color",modifiers:[["darker","1.6"]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:n?void 0:"Tag",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:n?void 0:"in h",legendPosition:"middle",legendOffset:-40},enableLabel:!1,labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}],role:"application",barAriaLabel:function(e){return e.id+": "+e.formattedValue+" in day: "+e.indexValue}})},k=function(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),n=t[0],g=t[1],m=(0,u.useState)(""),p=(0,a.Z)(m,2),k=p[0],v=p[1],x=(0,u.useState)(crypto.randomUUID()),S=(0,a.Z)(x,2),b=S[0],C=S[1],Z=(0,u.useState)(crypto.randomUUID()),z=(0,a.Z)(Z,2),D=z[0],I=z[1],w=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(JSON.stringify({training:n,training_intensity:k})),e.next=4,f.h.post("/set-training.php",t);case 4:g(""),v(""),C(crypto.randomUUID()),I(crypto.randomUUID()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)(o.Z,{m:"20px",children:[(0,h.jsx)(l.Z,{title:"Trainingsdetails",subtitle:"Alles im \xdcberblick"}),"coach"!==sessionStorage.getItem("role").toString().toLowerCase()&&(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(s.Z,{type:"number",value:n,label:"Trainingsdauer",variant:"outlined",onChange:function(e){return g(e.target.value)},sx:{mr:"20px"}}),(0,h.jsx)(s.Z,{type:"number",value:k,label:"Trainingsintensit\xe4t",variant:"outlined",onChange:function(e){return v(e.target.value)},sx:{mr:"20px"}}),(0,h.jsx)(d.Z,{disabled:!n||!k,variant:"contained",size:"large",sx:{height:"50px"},onClick:w,children:"Eintragen"})]}),(0,h.jsx)(o.Z,{height:"38vh",children:(0,h.jsx)(y,{},b)}),(0,h.jsx)(o.Z,{height:"38vh",children:(0,h.jsx)(c.Z,{},D)})]})}}}]);
//# sourceMappingURL=747.b3c8c8dc.chunk.js.map