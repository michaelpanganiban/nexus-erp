(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{68416:function(e,t,n){Promise.resolve().then(n.bind(n,81202))},81202:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var r=n(57437),i=n(45427),a=n.n(i),o=n(81580),l=n(93062),s=n(2265),d=n(78242),c=n(99376),u=n(34692);function p(e){let{options:t,CacheProvider:n=u.C,children:i}=e,[{cache:a,flush:o}]=s.useState(()=>{let e=(0,d.Z)(t);e.compat=!0;let n=e.insert,r=[];return e.insert=function(){for(var t=arguments.length,i=Array(t),a=0;a<t;a++)i[a]=arguments[a];let o=i[1];return void 0===e.inserted[o.name]&&r.push(o.name),n(...i)},{cache:e,flush:()=>{let e=r;return r=[],e}}});return(0,c.useServerInsertedHTML)(()=>{let e=o();if(0===e.length)return null;let t="";for(let n of e)t+=a.inserted[n];return(0,r.jsx)("style",{"data-emotion":"".concat(a.key," ").concat(e.join(" ")),dangerouslySetInnerHTML:{__html:t}},a.key)}),(0,r.jsx)(n,{value:a,children:i})}(0,d.Z)({key:"mui",prepend:!0});var h=n(8862);function x(e){let{children:t}=e;return(0,r.jsx)(p,{options:{key:"mui"},children:(0,r.jsxs)(o.Z,{theme:h.rS,children:[(0,r.jsx)(l.ZP,{}),t]})})}var m=n(68575),g=n(1455);let f=(0,g.oM)({name:"counter",initialState:{value:0},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},incrementByAmount:(e,t)=>{e.value+=t.payload}}}),{increment:j,decrement:y,incrementByAmount:b}=f.actions;var v=f.reducer;let Z=(0,g.oM)({name:"auth",initialState:{userId:"",firstName:"",lastName:"",token:""},reducers:{setAuthState:e=>{e.userId="6c796c51-d0c1-49b1-9f5a-dcd0e8f08e0d",e.firstName="John Michael",e.lastName="Panganiban",e.token="eyJjbGllbnRfaWQiOiJZekV6TUdkb01ISm5PSEJpT0cxaWJEaHlOVEE9IiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJzY29wZSI6ImludHJvc2NwZWN0X3Rva2VucywgcmV2b2tlX3Rva2VucyIsImlzcyI6ImJqaElSak0xY1hwYWEyMXpkV3RJU25wNmVqbE1iazQ0YlRsTlpqazNkWEU9Iiwic3ViIjoiWXpFek1HZG9NSEpuT0hCaU9HMWliRGh5TlRBPSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0Ojg0NDMve3RpZH0ve2FpZH0vb2F1dGgyL2F1dGhvcml6ZSIsImp0aSI6IjE1MTYyMzkwMjIiLCJleHAiOiIyMDIxLTA1LTE3VDA3OjA5OjQ4LjAwMCswNTQ1In0"}}}),{setAuthState:k}=Z.actions;var C=Z.reducer,w=n(89685),F=n(72033);let M=(0,g.xC)({reducer:{user:v,auth:C,geographics:w.ZP,modal:F.ZP}});var I=e=>{let{children:t}=e;return(0,r.jsx)(m.zt,{store:M,children:t})},P=n(80605),S=e=>{let{children:t}=e;return(0,r.jsx)(P.SessionProvider,{children:t})},T=n(45169),D=n(35301),A=n(16210),O=n(71495),z=n(57742),E=n(42187),N=n(71004),B=n(59832),H=n(46387),R=n(55861),V=n(99465),W=n(92495),L=n(33188),U=n(362),G=n(37929),q=n(98218);let J=(0,A.ZP)(O.Z,{shouldForwardProp:e=>"open"!==e&&"onDrawerOpen"!==e})(e=>{let{theme:t,open:n}=e;return{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...n&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}}}),_=e=>{var t;let{open:n,onDrawerOpen:i}=e,a=(0,c.useRouter)(),{data:o}=(0,P.useSession)(),[l,d]=(0,s.useState)(null),u=()=>{d(null)},p=(0,r.jsxs)(z.Z,{anchorEl:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!l,onClose:u,children:[(0,r.jsxs)(E.Z,{onClick:()=>{a.push("/profile")},sx:{width:"7rem",alignItems:"center",height:"3rem"},children:[(0,r.jsx)(G.Z,{})," \xa0  Profile"]}),(0,r.jsxs)(E.Z,{onClick:()=>{u(),(0,P.signOut)()},sx:{width:"7rem",alignItems:"center",height:"3rem"},children:[(0,r.jsx)(q.Z,{})," \xa0 Logout"]})]});return(0,r.jsxs)(J,{position:"fixed",open:n,onDrawerOpen:function(){throw Error("Function not implemented.")},sx:{backgroundColor:h.primaryDark},children:[(0,r.jsxs)(N.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsx)(B.Z,{color:"inherit","aria-label":"open drawer",onClick:i,edge:"start",sx:{marginRight:5,...n&&{display:"none"}},children:(0,r.jsx)(V.Z,{})}),(0,r.jsx)(H.default,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1},children:"Company Name"}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(B.Z,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:(0,r.jsx)(R.Z,{badgeContent:4,color:"error",children:(0,r.jsx)(W.Z,{})})}),(0,r.jsx)(B.Z,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:(0,r.jsx)(R.Z,{badgeContent:17,color:"error",children:(0,r.jsx)(L.Z,{})})}),(0,r.jsxs)(B.Z,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",onClick:e=>{d(e.currentTarget)},sx:{borderRadius:0},children:[(0,r.jsx)(H.default,{noWrap:!0,component:"div",sx:{marginX:1},children:null==o?void 0:null===(t=o.user)||void 0===t?void 0:t.name}),(0,r.jsx)(U.Z,{})]})]})]}),p]})};var Y=n(75624),X=n(31691),$=n(69077),Q=n(2958),K=n(93209);let ee=(0,A.ZP)("div")(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1),...t.mixins.toolbar}}),et=e=>({width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}),en=e=>({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)"),[e.breakpoints.up("sm")]:{width:"calc(".concat(e.spacing(8)," + 1px)")}}),er=(0,A.ZP)(Y.ZP,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:t,open:n}=e;return{width:240,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...n&&{...et(t),"& .MuiDrawer-paper":et(t)},...!n&&{...en(t),"& .MuiDrawer-paper":en(t)}}}),ei=e=>{let{open:t,onClose:n,children:i}=e,a=(0,X.Z)(),o=(0,$.Z)(a.breakpoints.down("sm"));return(0,s.useEffect)(()=>{o&&n()},[o,n]),(0,r.jsxs)(er,{variant:o?"temporary":"permanent",open:t,children:[(0,r.jsxs)(ee,{children:[(0,r.jsx)(H.default,{sx:{fontWeight:"bold",color:h.E4,textAlign:"center",fontSize:"20px",flexGrow:1},children:"ERP Nexus"}),(0,r.jsx)(B.Z,{onClick:n,children:"rtl"===a.direction?(0,r.jsx)(K.Z,{}):(0,r.jsx)(Q.Z,{})})]}),i]})};var ea=n(15273),eo=n(73261),el=n(11741),es=n(53431),ed=n(67051),ec=n(8350),eu=n(17162),ep=n(93533),eh=n(86037),ex=n(55022),em=n(23468),eg=n(42589),ef=n(90416),ej=n(4972),ey=n(92350),eb=n(30024),ev=n(93528),eZ=n(11056),ek=n(27822),eC=n(26220),ew=n(63474),eF=n(86459);let eM=[{text:"Inventory",icon:(0,r.jsx)(ex.Z,{}),link:"/inventory",children:[{id:1.1,text:"Dashboard",link:"/inventory",icon:(0,r.jsx)(ep.Z,{})},{id:1.2,text:"Products",link:"/inventory/products",icon:(0,r.jsx)(eg.Z,{})},{id:1.3,text:"Purchase Order",link:"/inventory/purchase-order",icon:(0,r.jsx)(ef.Z,{})},{id:1.4,text:"Purchase Delivery",link:"/inventory/purchase-delivery",icon:(0,r.jsx)(ej.Z,{})},{id:1.5,text:"Reorder Point",link:"/inventory/reorder-point",icon:(0,r.jsx)(ev.Z,{})},{id:1.6,text:"UOM",link:"/inventory/uom",icon:(0,r.jsx)(eb.default,{})},{id:1.7,text:"Stock In",link:"/inventory/stock-in",icon:(0,r.jsx)(ey.Z,{})},{id:1.8,text:"Stock Out",link:"/inventory/stock-out",icon:(0,r.jsx)(eZ.Z,{})},{id:1.9,text:"Suppliers",link:"/inventory/suppliers",icon:(0,r.jsx)(ek.Z,{})},{id:1.13,text:"Reports",link:"/inventory/reports",icon:(0,r.jsx)(eC.Z,{})},{id:1.12,text:"Logging",link:"/inventory/logging",icon:(0,r.jsx)(ew.Z,{})}]},{text:"Sales",icon:(0,r.jsx)(em.Z,{}),link:"/sales",children:[]}],eI=[{text:"Dashboard",icon:(0,r.jsx)(ep.Z,{}),link:"/dashboard"},{text:"Users",icon:(0,r.jsx)(eF.Z,{}),link:"/users"},{text:"Reports",icon:(0,r.jsx)(eh.Z,{}),link:"/reports"}];var eP=n(98612),eS=n(96703);let eT=e=>{let{open:t}=e,n=window.location.pathname,[i,a]=(0,s.useState)(-1),[o,l]=(0,s.useState)(n),d=(0,c.useRouter)(),u=(e,t)=>{a(e),l(t),d.push(t)},[p,h]=(0,s.useState)({}),x=e=>{h(t=>({...t,[e]:!t[e]}))},m=o.split("/");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ea.Z,{children:eI.map((e,n)=>(0,r.jsx)(eo.ZP,{disablePadding:!0,sx:{display:"block"},onClick:()=>u(n,e.link),children:(0,r.jsxs)(el.Z,{selected:i===n||o===e.link,sx:{minHeight:48,justifyContent:t?"initial":"center",px:2.5},children:[(0,r.jsx)(es.Z,{sx:{minWidth:0,mr:t?3:"auto",justifyContent:"center",color:i===n||o===e.link?"primary.main":"inherit"},children:e.icon}),(0,r.jsx)(ed.Z,{primary:e.text,sx:{opacity:t?1:0,fontWeight:i===n?"bold":"normal"}})]})},e.text))}),(0,r.jsx)(ec.default,{}),(0,r.jsx)(ea.Z,{children:eM.map((e,n)=>(0,r.jsxs)(eo.ZP,{disablePadding:!0,sx:{display:"block"},onClick:e.children?void 0:()=>u(n,e.link),children:[(0,r.jsxs)(el.Z,{selected:i===n+eI.length,sx:{minHeight:48,justifyContent:t?"initial":"center",px:2.5},onClick:()=>x(e.text),children:[(0,r.jsx)(es.Z,{sx:{minWidth:0,mr:t?3:"auto",justifyContent:"center",color:i===n+eI.length?"primary.main":"inherit"},children:e.icon}),(0,r.jsx)(ed.Z,{primary:e.text,sx:{opacity:t?1:0,fontWeight:i===n+eI.length?"bold":"normal"}}),e.children.length>0&&(p[e.text]||m[1]==e.text.toLocaleLowerCase()?(0,r.jsx)(eP.Z,{}):(0,r.jsx)(eS.Z,{}))]}),e.children.length>0&&(0,r.jsx)(eu.Z,{in:p[e.text]||m[1]==e.text.toLocaleLowerCase(),timeout:"auto",unmountOnExit:!0,children:(0,r.jsx)(ea.Z,{component:"div",disablePadding:!0,children:e.children.map(e=>(0,r.jsxs)(el.Z,{sx:{pl:4},onClick:()=>u(e.id,e.link),selected:i===e.id||o===e.link,children:[(0,r.jsx)(es.Z,{sx:{color:i===e.id||o===e.link?"primary.main":"inherit"},children:e.icon}),(0,r.jsx)(ed.Z,{primary:e.text})]},e.id))})})]},n))})]})},eD=e=>{let{children:t}=e,[n,i]=s.useState(!0);return(0,r.jsxs)(D.Z,{sx:{display:"flex"},children:[(0,r.jsx)(l.ZP,{}),(0,r.jsx)(_,{open:n,onDrawerOpen:()=>{i(!0)}}),(0,r.jsx)(ei,{open:n,onClose:()=>{i(!1)},children:(0,r.jsx)(eT,{open:n})}),(0,r.jsxs)(D.Z,{component:"main",sx:{flexGrow:1,p:3},children:[(0,r.jsx)(ee,{}),t]})]})};var eA=n(35791),eO=n(79507),ez=n(77468),eE=n(9026),eN=n(83156),eB=n(31790),eH=n(81705),eR=n(66593),eV=n(36117),eW=n(2764);let eL={Group:(0,r.jsx)(eR.Z,{sx:{verticalAlign:"middle"}}),Warning:(0,r.jsx)(eW.Z,{sx:{verticalAlign:"middle"}}),Delete:(0,r.jsx)(eV.Z,{sx:{verticalAlign:"middle"}})};var eU=n(40045),eG=()=>{let{handleUpdateUser:e}=(0,eU.Z)();return{handleButtonClick:(t,n)=>{"saveEditUser"===t&&e(n)}}},eq=n(80097),eJ=n(41327),e_=n(64393),eY=n(14087),eX=n(85860),e$=n(5390),eQ=n(69250),eK=n(76729),e0=n(3989),e1=n(71096),e2=n.n(e1);let e3=()=>(0,r.jsxs)(D.Z,{component:"form",sx:{"& .MuiTextField-root":{m:2,width:{xs:"100%",sm:"90%",md:"45ch"}}},autoComplete:"off",children:[(0,r.jsxs)(eN.default,{sx:{flexDirection:{sm:"column",md:"row"}},children:[(0,r.jsx)(eq.Z,{label:"Employee ID",id:"employee-id",defaultValue:"EMP10325",size:"small",required:!0,helperText:"Cannot be edited",disabled:!0}),(0,r.jsx)(eq.Z,{label:"Date Joined",id:"date-joined",defaultValue:"Jan 1, 2024",size:"small",required:!0,helperText:"Cannot be edited",disabled:!0}),(0,r.jsx)(eq.Z,{label:"Role",id:"role",defaultValue:"Admin",size:"small",required:!0,helperText:"Cannot be edited",disabled:!0})]}),(0,r.jsxs)(eN.default,{margin:1,sx:{flexDirection:{sm:"column",md:"row"}},children:[(0,r.jsx)(eq.Z,{label:"First Name",id:"first-name",defaultValue:"John Michael",size:"small",required:!0,helperText:"Please enter your first name"}),(0,r.jsx)(eq.Z,{label:"Last Name",id:"last-name",defaultValue:"Panganiban",size:"small",required:!0,helperText:"Please enter your last name"}),(0,r.jsx)(eq.Z,{label:"Middle Name",id:"middle-name",defaultValue:"Espina",size:"small",helperText:"Please enter your middle name"})]}),(0,r.jsxs)(eN.default,{margin:1,sx:{flexDirection:{sm:"column",md:"row"}},children:[(0,r.jsx)(eQ._,{dateAdapter:e0.y,children:(0,r.jsx)(eK.M,{label:"Birthdate",value:e2()("2025-03-19"),slotProps:{textField:{helperText:"Please enter your birthdate",size:"small",sx:{width:{xs:"100% !important",md:"28% !important"}}}}})}),(0,r.jsxs)(eJ.Z,{sx:{paddingLeft:"4%"},children:[(0,r.jsx)(e_.Z,{id:"demo-row-radio-buttons-group-label",children:"Gender"}),(0,r.jsxs)(eY.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,r.jsx)(eX.Z,{checked:!0,value:"female",control:(0,r.jsx)(e$.Z,{}),label:"Female"}),(0,r.jsx)(eX.Z,{value:"male",control:(0,r.jsx)(e$.Z,{}),label:"Male"}),(0,r.jsx)(eX.Z,{value:"other",control:(0,r.jsx)(e$.Z,{}),label:"Other"})]})]})]})]}),e5={UserFormComponent:()=>(0,r.jsx)(e3,{}),Default:()=>(0,r.jsx)(r.Fragment,{})},e6=(0,A.ZP)(eA.Z)(e=>{let{theme:t}=e;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}),e4=()=>{let e=(0,m.I0)(),{handleButtonClick:t}=eG(),{isOpen:n,content:i,modalTitle:a,buttons:o,titleIcon:l}=(0,m.v9)(e=>e.modal.modal);if(!i)return;let d=e5[i],c=eL[l]||"";return(0,r.jsx)(s.Fragment,{children:(0,r.jsxs)(e6,{"aria-labelledby":"customized-dialog-title",open:n,disableEscapeKeyDown:!0,slotProps:{backdrop:{onClick:e=>e.stopPropagation()}},children:[(0,r.jsx)(eO.Z,{sx:{m:0,p:2},id:"customized-dialog-title",children:(0,r.jsxs)("span",{style:{color:h.primaryDark},children:[c," ",a]})}),(0,r.jsx)(B.Z,{"aria-label":"close",onClick:()=>e((0,F.Mr)()),sx:e=>({position:"absolute",right:8,top:8,color:e.palette.grey[500]}),children:(0,r.jsx)(eH.Z,{})}),(0,r.jsx)(ez.Z,{dividers:!0,children:d&&(0,r.jsx)(d,{})}),(0,r.jsx)(eE.Z,{children:(0,r.jsx)(eN.default,{direction:"row",spacing:2,children:o&&o.map((e,n)=>(0,r.jsx)(eB.Z,{variant:e.variant,size:e.size,sx:{color:e.color,backgroundColor:e.backgroundColor},onClick:()=>t(e.action,e),children:e.label},n))})})]})})};var e8=n(12258);let e7=()=>{let e=(0,m.I0)(),{isDialogOpen:t,dialogContent:n,dialogTitle:i,color:a,icon:o}=(0,m.v9)(e=>e.modal.dialog),l=eL[o]||"",d=()=>{e((0,F.nf)())};return(0,r.jsx)(s.Fragment,{children:(0,r.jsxs)(eA.Z,{open:t,onClose:d,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"sm",fullWidth:!0,children:[(0,r.jsxs)(eO.Z,{id:"alert-dialog-title",sx:{color:a,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsx)(H.default,{variant:"h6",component:"div",children:i}),(0,r.jsx)(B.Z,{"aria-label":"delete",color:"error",size:"large",children:l})]}),(0,r.jsx)(ec.default,{}),(0,r.jsx)(ez.Z,{children:(0,r.jsx)(e8.Z,{id:"alert-dialog-description",sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:n})}),(0,r.jsx)(ec.default,{}),(0,r.jsxs)(eE.Z,{children:[(0,r.jsx)(eB.Z,{onClick:d,sx:{backgroundColor:h.AH,color:h.B$,borderColor:h.B$,"&:hover":{backgroundColor:h.AH,color:h.B$}},children:"Cancel"}),(0,r.jsx)(eB.Z,{onClick:d,autoFocus:!0,color:"error",children:"Confirm Action"})]})]})})};var e9=e=>{let{children:t}=e,{data:n,status:i}=(0,P.useSession)();return"loading"===i?(0,r.jsx)(D.Z,{sx:{mt:10,display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,r.jsx)(T._,{message:"Please wait.."})}):(0,r.jsx)(r.Fragment,{children:n?(0,r.jsxs)("div",{children:[(0,r.jsx)(eD,{children:t}),(0,r.jsx)(e4,{}),(0,r.jsx)(e7,{})]}):t})};function te(e){let{children:t}=e;return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)(P.SessionProvider,{children:(0,r.jsx)(S,{children:(0,r.jsx)(I,{children:(0,r.jsx)(x,{children:(0,r.jsx)("body",{className:a().className,children:(0,r.jsx)(e9,{children:t})})})})})})})}},45169:function(e,t,n){"use strict";n.d(t,{_:function(){return l}});var r=n(57437),i=n(83156),a=n(35389),o=n(46387);n(2265);let l=e=>{let{message:t}=e;return(0,r.jsxs)(i.default,{sx:{textAlign:"center",justifyContent:"center",alignItems:"center",height:"100%"},children:[(0,r.jsx)(a.Z,{size:"3rem"}),(0,r.jsx)(o.default,{variant:"body1",sx:{mt:2},children:t})]})}},40045:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(57437);let i=["User Id","Name","Position","Status","Action"];var a=n(72033),o=n(8862),l=n(68575),s=n(51332),d=n(67801),c=n(66380),u=()=>{let e=(0,l.I0)(),t={options:{withPagination:!0,withButtons:!0},body:[{id:1,name:"John Michael Panganiban",userType:"Admin",status:"Active"},{id:2,name:"Sarah Panganiban",userType:"Supervisor",status:"Suspended"},{id:3,name:"Matteo Sage Panganiban",userType:"Clerk",status:"Active"},{id:4,name:"Salvacion Gavillo",userType:"Clerk",status:"Inactive"}],header:i,buttons:[{label:"Edit",onClick:e=>n(e),variant:"outlined",size:"small",icon:(0,r.jsx)(s.Z,{})},{label:"Delete",onClick:e=>u(e),variant:"outlined",size:"small",icon:(0,r.jsx)(d.Z,{})},{label:"Change Status",onClick:e=>p(e),variant:"outlined",size:"small",icon:(0,r.jsx)(c.Z,{})}]},n=t=>{let n=[{label:"Save Changes",action:"saveEditUser",variant:"outlined",size:"medium",backgroundColor:o.sy,color:o.AH}];e((0,a.h7)({isOpen:!0,content:"UserFormComponent",modalTitle:"Edit User",titleIcon:"Group",buttons:n}))},u=t=>{let n={isDialogOpen:!0,dialogTitle:"Delete User Data",icon:"Delete",dialogContent:"Are you sure you want to delete this user? This action cannot be undone.",color:o.nY};e((0,a.HV)(n))},p=t=>{let n={isDialogOpen:!0,dialogTitle:"Change User Status",icon:"Warning",dialogContent:"Are you sure you want to change the status of this user?",color:o.nY};e((0,a.HV)(n))};return{editUser:n,tableData:t,deleteUser:u,handleUpdateUser:t=>{console.log(t),e((0,a.Mr)())}}}},89685:function(e,t,n){"use strict";n.d(t,{ZP:function(){return b},Cl:function(){return y},Zk:function(){return f},$r:function(){return j},F:function(){return g},nx:function(){return m}}),(p=h||(h={})).region="https://psgc.gitlab.io/api/regions/",p.province="https://psgc.gitlab.io/api/provinces/",p.municipality="https://psgc.gitlab.io/api/municipalities/";let r=async()=>{let e=h.region;try{let t=await fetch(e);return await t.json()}catch(e){return e}},i=async e=>{let t="".concat(h.region,"/").concat(e,"/provinces/");try{let e=await fetch(t);return await e.json()}catch(e){return e}},a=async e=>{let t="".concat(h.province,"/").concat(e,"/cities/");try{let e=await fetch(t);return await e.json()}catch(e){return e}},o=async e=>{let t="".concat(h.province,"/").concat(e,"/municipalities/");try{let e=await fetch(t);return await e.json()}catch(e){return e}},l=async e=>{let t="".concat(h.municipality,"/").concat(e,"/barangays/");try{let e=await fetch(t);return await e.json()}catch(e){return e}},s=async()=>await r(),d=async e=>await i(e),c=async e=>await a(e),u=async e=>await o(e);var p,h,x=n(1455);let m=(0,x.hg)("geographics/region",(e,t)=>{let{rejectWithValue:n}=t;try{return s()}catch(e){return n(e.message||"An unknown error occurred")}}),g=(0,x.hg)("geographics/provinces",(e,t)=>{let{rejectWithValue:n}=t;try{return d(e)}catch(e){return n(e.message||"An unknown error occurred")}}),f=(0,x.hg)("geographics/cities",(e,t)=>{let{rejectWithValue:n}=t;try{return c(e)}catch(e){return n(e.message||"An unknown error occurred")}}),j=(0,x.hg)("geographics/municipalities",(e,t)=>{let{rejectWithValue:n}=t;try{return u(e)}catch(e){return n(e.message||"An unknown error occurred")}}),y=(0,x.hg)("geographics/barangays",(e,t)=>{let{rejectWithValue:n}=t;try{return l(e)}catch(e){return n(e.message||"An unknown error occurred")}});var b=(0,x.oM)({name:"geographics",initialState:{regions:null,provinces:null,cities:null,municipalities:null,barangays:null,loading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(m.pending,e=>{e.loading=!0,e.error=null}).addCase(m.fulfilled,(e,t)=>{e.loading=!1,e.regions=t.payload}).addCase(m.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}),e.addCase(g.pending,e=>{e.loading=!0,e.error=null}).addCase(g.fulfilled,(e,t)=>{e.loading=!1,e.provinces=t.payload}).addCase(g.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}),e.addCase(f.pending,e=>{e.loading=!0,e.error=null}).addCase(f.fulfilled,(e,t)=>{e.loading=!1,e.cities=t.payload}).addCase(f.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}),e.addCase(j.pending,e=>{e.loading=!0,e.error=null}).addCase(j.fulfilled,(e,t)=>{e.loading=!1,e.municipalities=t.payload}).addCase(j.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}),e.addCase(y.pending,e=>{e.loading=!0,e.error=null}).addCase(y.fulfilled,(e,t)=>{e.loading=!1,e.barangays=t.payload}).addCase(y.rejected,(e,t)=>{e.loading=!1,e.error=t.payload})}}).reducer},72033:function(e,t,n){"use strict";n.d(t,{HV:function(){return o},Mr:function(){return a},h7:function(){return i},nf:function(){return l}});let r=(0,n(1455).oM)({name:"modal",initialState:{modal:{isOpen:!1,content:"Default",modalTitle:null,titleIcon:null,buttons:[]},dialog:{isDialogOpen:!1,dialogTitle:"",icon:null,dialogContent:"",color:""}},reducers:{openModal(e,t){e.modal.isOpen=t.payload.isOpen,e.modal.content=t.payload.content,e.modal.modalTitle=t.payload.modalTitle,e.modal.titleIcon=t.payload.titleIcon,e.modal.buttons=t.payload.buttons},closeModal(e){e.modal.isOpen=!1,e.modal.content="Default"},openModalDialog(e,t){e.dialog.isDialogOpen=t.payload.isDialogOpen,e.dialog.dialogTitle=t.payload.dialogTitle,e.dialog.dialogContent=t.payload.dialogContent,e.dialog.color=t.payload.color,e.dialog.icon=t.payload.icon},closeModalDialog(e){e.dialog.isDialogOpen=!1}}}),{openModal:i,closeModal:a,openModalDialog:o,closeModalDialog:l}=r.actions;t.ZP=r.reducer},8862:function(e,t,n){"use strict";n.d(t,{eU:function(){return Z},H2:function(){return v},B$:function(){return P},AH:function(){return S},k2:function(){return M},Pe:function(){return F},primaryDark:function(){return w},E4:function(){return C},sy:function(){return k},rS:function(){return y},nY:function(){return I}});var r=n(20858),i=n(2306);let a=e=>({...e,alpha4:(0,i.Fq)(e.main,.04),alpha8:(0,i.Fq)(e.main,.08),alpha12:(0,i.Fq)(e.main,.12),alpha30:(0,i.Fq)(e.main,.3),alpha50:(0,i.Fq)(e.main,.5)}),o={50:"#F8F9FA",100:"#F3F4F6",200:"#E5E7EB",300:"#D2D6DB",400:"#9DA4AE",500:"#6C737F",600:"#4D5761",700:"#2F3746",800:"#1C2536",900:"#111927"},l=a({lightest:"#9294e2",light:"#7d80dc",main:"#5c60d3",dark:"#414496",darkest:"#333574",contrastText:"#FFFFFF"}),s=a({lightest:"#e7e8e9",light:"#b5b8bc",main:"#414752",dark:"#2D3139",darkest:"#22252B",contrastText:"#FFFFFF"}),d=a({lightest:"#E8F8E6",light:"#D1F1CC",main:"#1AB800",dark:"#106e00",darkest:"#052500",contrastText:"#FFFFFF"}),c=a({lightest:"#D7E7FF",light:"#AFCFFF",main:"#3686FF",dark:"#004AB9",darkest:"#00317C",contrastText:"#FFFFFF"}),u=a({lightest:"#ffedeb",light:"#ffd7af",main:"#ff9a36",dark:"#b33524",darkest:"#6a1f15",contrastText:"#FFFFFF"}),p=a({lightest:"#ffedeb",light:"#fec7bf",main:"#fc4a32",dark:"#b33524",darkest:"#6a1f15",contrastText:"#FFFFFF"});var h=n(8443),x=n(13046),m=n.n(x);let g={mode:"light",primary:l,secondary:s,success:d,info:c,error:p,warning:u,background:{default:"#ffffff",secondary:"#f6f9fc"},text:{primary:o[900],secondary:o[500],disabled:(0,i.Fq)(o[900],.38)},divider:"rgba(0, 0, 0, 0.12)",border:"rgba(0, 0, 0, 0.23)"},f=function(e){let{palette:t}=e;return{MuiCssBaseline:{styleOverrides:{"*":{boxSizing:"border-box"},body:{overflowX:"hidden"},html:{"*::-webkit-scrollbar":{width:"20px"},"*::-webkit-scrollbar-track":{backgroundColor:"transparent"},"*::-webkit-scrollbar-thumb":{backgroundColor:"#a8bbbf",borderRadius:"20px",border:"6px solid transparent",backgroundClip:"content-box"},"*::-webkit-scrollbar-thumb:hover":{backgroundColor:"#a8bbbf"}},"& .MuiTreeItem-iconContainer":{width:"auto !important"},"& .MuiTreeItem-content":{borderRadius:3,margin:"1px 0",padding:"3px !important"}}},MuiButton:{defaultProps:{size:"medium",variant:"contained"}},MuiFilledInput:{defaultProps:{margin:"dense"}},MuiFormControl:{defaultProps:{margin:"dense"}},MuiFormHelperText:{defaultProps:{margin:"dense"}},MuiIconButton:{defaultProps:{size:"small"}},MuiInputBase:{defaultProps:{margin:"dense"}},MuiInputLabel:{defaultProps:{margin:"dense"}},MuiListItem:{defaultProps:{dense:!0}},MuiMenuItem:{styleOverrides:{root:{borderRadius:5,paddingTop:0,paddingBottom:0,"& .MuiButtonBase-root-MuiMenuItem-root.Mui-selected":{bgcolor:"red"}}}},MuiOutlinedInput:{defaultProps:{margin:"dense"},styleOverrides:{root:e=>{let{ownerState:n}=e;return{backgroundColor:h.Z.white,fieldset:{borderColor:t.divider},"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{borderColor:t.primary.main},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"1px solid ".concat(t.primary.main)}}},input:e=>{let{ownerState:t}=e;return{..."search"===t.type&&{padding:"7px 14px"}}}}},MuiFab:{defaultProps:{size:"small"}},MuiTable:{defaultProps:{size:"small"}},MuiTextField:{defaultProps:{margin:"dense"}},MuiAppBar:{defaultProps:{color:"secondary",elevation:0}},MuiAccordion:{styleOverrides:{root:e=>{let{ownerState:t}=e;return{..."outlined"===t.variant&&{border:"none",backgroundColor:"inherit","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-root":{flexDirection:"row-reverse"}}}}}},MuiPaginationItem:{styleOverrides:{root:{"&.Mui-selected":{backgroundColor:t.primary.main,color:"white"}}}}}}({palette:g}),j={fontFamily:m().style.fontFamily,fontSize:12},y=(0,r.Z)({typography:j,palette:g,components:f}),b=y.palette.background,v=b.secondary,Z=b.default;b.paper;let k=y.palette.primary.main,C=y.palette.primary.light,w=y.palette.primary.dark,F=y.palette.primary.contrastText;y.palette.secondary.main,y.palette.secondary.light,y.palette.secondary.dark,y.palette.secondary.contrastText,y.palette.error.main,y.palette.error.light;let M=y.palette.error.dark;y.palette.error.contrastText,y.palette.warning.main,y.palette.warning.light;let I=y.palette.warning.dark;y.palette.warning.contrastText,y.palette.info.main,y.palette.info.light,y.palette.info.dark,y.palette.info.contrastText,y.palette.success.main,y.palette.success.light,y.palette.success.dark,y.palette.success.contrastText,y.palette.divider;let P=y.palette.common.black,S=y.palette.common.white;y.palette.grey}},function(e){e.O(0,[56,304,882,110,519,84,808,663,795,971,117,744],function(){return e(e.s=68416)}),_N_E=e.O()}]);