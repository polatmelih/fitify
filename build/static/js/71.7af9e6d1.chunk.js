"use strict";(self.webpackChunkfitify_final=self.webpackChunkfitify_final||[]).push([[71],{3071:function(e,l,a){a.r(l);var r=a(64554),n=a(27391),i=a(94294),t=a(55705),s=a(8007),u=a(95193),d=a(37084),m=a(80184),o=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,h=s.Ry().shape({firstName:s.Z_().matches(o,"Nur Buchstaben erlaubt").required("auszuf\xfcllen"),lastName:s.Z_().matches(o,"Nur Buchstaben erlaubt").required("auszuf\xfcllen"),email:s.Z_().email("invalid email").required("auszuf\xfcllen"),phone:s.Z_().matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"Telefonnummer ist ung\xfcltig").required("auszuf\xfcllen"),address:s.Z_().required("auszuf\xfcllen"),zip:s.Z_().matches(/^\d{4}$/,"Nur 4 Ziffern erlaubt").required("auszuf\xfcllen"),club:s.Z_().required("auszuf\xfcllen")}),p={firstName:"",lastName:"",email:"",phone:"",address:"",zip:"",club:""};l.default=function(){var e=(0,u.Z)("(min-width:600px)");return(0,m.jsxs)(r.Z,{m:"20px",children:[(0,m.jsx)(d.Z,{title:"Profil",subtitle:"Willkommen in Ihrem Profil"}),(0,m.jsx)(t.J9,{onSubmit:function(e){console.log(e)},initialValues:p,validationSchema:h,children:function(l){var a=l.values,t=l.errors,s=l.touched,u=l.handleBlur,d=l.handleChange,o=l.handleSubmit;return(0,m.jsxs)("form",{onSubmit:o,children:[(0,m.jsxs)(r.Z,{display:"grid",gap:"30px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",sx:{"& > div":{gridColumn:e?void 0:"span 4"}},children:[(0,m.jsx)(n.Z,{fullWidth:!0,variant:"filled",type:"text",label:"Vorname",onBlur:u,onChange:d,value:a.firstName,name:"firstName",error:!!s.firstName&&!!t.firstName,helperText:s.firstName&&t.firstName,sx:{gridColumn:"span 2"}}),(0,m.jsx)(n.Z,{fullWidth:!0,variant:"filled",type:"text",label:"Nachname",onBlur:u,onChange:d,value:a.lastName,name:"lastName",error:!!s.lastName&&!!t.lastName,helperText:s.lastName&&t.lastName,sx:{gridColumn:"span 2"}}),(0,m.jsx)(n.Z,{fullWidth:!0,variant:"filled",type:"text",label:"Email",onBlur:u,onChange:d,value:a.email,name:"email",error:!!s.email&&!!t.email,helperText:s.email&&t.email,sx:{gridColumn:"span 2"}}),(0,m.jsx)(n.Z,{fullWidth:!0,variant:"filled",type:"text",label:"Telefonnummer",onBlur:u,onChange:d,value:a.phone,name:"phone",error:!!s.phone&&!!t.phone,helperText:s.phone&&t.phone,sx:{gridColumn:"span 2"}}),(0,m.jsx)(n.Z,{fullWidth:!0,variant:"filled",type:"text",label:"PLZ",onBlur:u,onChange:d,value:a.zip,name:"zip",error:!!s.zip&&!!t.zip,helperText:s.zip&&t.zip,sx:{gridColumn:"span 2"}}),(0,m.jsx)(n.Z,{fullWidth:!0,variant:"filled",type:"text",label:"Adresse",onBlur:u,onChange:d,value:a.address,name:"address",error:!!s.address&&!!t.address,helperText:s.address&&t.address,sx:{gridColumn:"span 2"}}),(0,m.jsx)(n.Z,{fullWidth:!0,variant:"filled",type:"text",label:"Verein",onBlur:u,onChange:d,value:a.club,name:"club",error:!!s.club&&!!t.club,helperText:s.club&&t.club,sx:{gridColumn:"span 2"}})]}),(0,m.jsx)(r.Z,{display:"flex",justifyContent:"end",mt:"20px",children:(0,m.jsx)(i.Z,{type:"submit",color:"secondary",variant:"contained",children:"Speichern"})})]})}})]})}}}]);
//# sourceMappingURL=71.7af9e6d1.chunk.js.map