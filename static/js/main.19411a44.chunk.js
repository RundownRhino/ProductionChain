(this["webpackJsonpproduction-chain"]=this["webpackJsonpproduction-chain"]||[]).push([[0],{374:function(e,t,a){e.exports=a(492)},482:function(e,t){},484:function(e,t){},492:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a(27),c=a(24),o=a(33),u=a(34),m=a(35),s=a(522),p=a(242),h=a(308),d=a(183),f=a(515),g=a(523),b=a(84),E=["N/A","ULV","LV","MV","HV","EV","IV","LuV","ZPMV","UV"],y=[8,32,128,512,2048,8192,32768,131072,524288],v=[{step:0,machineName:"Wiremill",machineTier:2,overclock:!1,rft:24,time:3.15,inputs:[{name:"Copper Ingot",quantity:1,unit:"b"}],outputs:[{name:"Copper Wire",quantity:2,unit:"b"}],targetMachines:1},{step:1,machineName:"Wiremill",machineTier:2,overclock:!1,rft:24,time:10,inputs:[{name:"Copper Wire",quantity:1,unit:"b"}],outputs:[{name:"Fine Copper Wire",quantity:4,unit:"b"}],targetMachines:1},{step:2,machineName:"Macerator",machineTier:2,overclock:!1,rft:48,time:10,inputs:[{name:"Coal",quantity:1,unit:"b"}],outputs:[{name:"Coal Dust",quantity:1,unit:"b"}],targetMachines:1},{step:3,machineName:"Assembler",machineTier:2,overclock:!1,rft:24,time:8,inputs:[{name:"Fine Copper Wire",quantity:4,unit:"b"},{name:"Coal Dust",quantity:1,unit:"b"}],outputs:[{name:"Resistor",quantity:12,unit:"b"}],targetMachines:1},{step:4,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,inputs:[{name:"Aluminium Ingot",quantity:1,unit:"b"}],outputs:[{name:"Aluminium Plate",quantity:1,unit:"b"}],targetMachines:1},{step:5,machineName:"Cluster Mill",machineTier:2,overclock:!1,rft:96,time:1.3,inputs:[{name:"Aluminium Plate",quantity:1,unit:"b"}],outputs:[{name:"Aluminium Foil",quantity:4,unit:"b"}],targetMachines:1},{step:6,machineName:"Assembler",machineTier:3,overclock:!1,rft:384,time:4,inputs:[{name:"Aluminium Foil",quantity:2,unit:"b"},{name:"Polyethylene Sheet",quantity:1,unit:"b"}],outputs:[{name:"Capacitor",quantity:2,unit:"b"}],targetMachines:1},{step:7,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,inputs:[{name:"Tin Ingot",quantity:1,unit:"b"}],outputs:[{name:"Tin Plate",quantity:1,unit:"b"}],targetMachines:1},{step:8,machineName:"Cluster Mill",machineTier:2,overclock:!1,rft:96,time:5.9,inputs:[{name:"Tin Plate",quantity:1,unit:"b"}],outputs:[{name:"Tin Foil",quantity:4,unit:"b"}],targetMachines:1},{step:9,machineName:"Diamond Furnace",machineTier:0,overclock:!1,rft:0,time:1.28,inputs:[{name:"Silicon Dust",quantity:1,unit:"b"}],outputs:[{name:"Silicon Ingot",quantity:1,unit:"b"}],targetMachines:1},{step:10,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,inputs:[{name:"Silicon Ingot",quantity:1,unit:"b"}],outputs:[{name:"Silicon Plate",quantity:1,unit:"b"}],targetMachines:1},{step:11,machineName:"Pyrolyse Oven",machineTier:3,overclock:!1,rft:120,time:30,inputs:[{name:"Wood",quantity:16,unit:"b"},{name:"Steam",quantity:4e3,unit:"mb"}],outputs:[{name:"Wood Gas",quantity:1500,unit:"mb"}],targetMachines:1},{step:12,machineName:"Distillery",machineTier:3,overclock:!1,rft:256,time:4,inputs:[{name:"Wood Gas",quantity:1e3,unit:"mb"}],outputs:[{name:"Ethylene",quantity:20,unit:"mb"}],targetMachines:1},{step:13,machineName:"Chemical Reactor",machineTier:2,overclock:!1,rft:120,time:8,inputs:[{name:"Ethylene",quantity:144,unit:"mb"},{name:"Air",quantity:1e3,unit:"mb"}],outputs:[{name:"Polyethylene",quantity:144,unit:"mb"}],targetMachines:1},{step:14,machineName:"Assembler",machineTier:2,overclock:!1,rft:96,time:4,inputs:[{name:"Tin Foil",quantity:6,unit:"b"},{name:"Silicon Plate",quantity:1,unit:"b"},{name:"Polyethylene",quantity:144,unit:"mb"}],outputs:[{name:"Transistor",quantity:8,unit:"b"}],targetMachines:1},{step:15,machineName:"Alloy Smelter",machineTier:2,overclock:!1,rft:64,time:5,inputs:[{name:"Tin Ingot",quantity:1,unit:"b"},{name:"Iron Ingot",quantity:1,unit:"b"}],outputs:[{name:"Tin Alloy Ingot",quantity:2,unit:"b"}],targetMachines:1},{step:16,machineName:"Wiremill",machineTier:2,overclock:!1,rft:32,time:20,inputs:[{name:"Tin Alloy Ingot",quantity:1,unit:"b"}],outputs:[{name:"Fine Tin Alloy Wire",quantity:8,unit:"b"}],targetMachines:1},{step:17,machineName:"Blast Furnace",machineTier:3,overclock:!1,rft:480,time:300,inputs:[{name:"Silicon Dust",quantity:32,unit:"b"},{name:"Tiny Pile of Gallium Dust",quantity:1,unit:"b"}],outputs:[{name:"Monocrystalline Silicon Boule",quantity:1,unit:"b"}],targetMachines:1},{step:18,machineName:"Cutting Saw",machineTier:3,overclock:!1,rft:32,time:20,inputs:[{name:"Water",quantity:5,unit:"mb"},{name:"Monocrystalline Silicon Boule",quantity:1,unit:"b"}],outputs:[{name:"Wafer",quantity:16,unit:"b"}],targetMachines:1},{step:19,machineName:"Precision Laser Engraver",machineTier:3,overclock:!1,rft:480,time:45,inputs:[{name:"Wafer",quantity:1,unit:"mb"}],outputs:[{name:"CPU Wafer",quantity:1,unit:"b"}],targetMachines:1},{step:20,machineName:"Cutting Saw",machineTier:3,overclock:!1,rft:32,time:60,inputs:[{name:"Water",quantity:90,unit:"mb"},{name:"CPU Wafer",quantity:1,unit:"b"}],outputs:[{name:"Central Processing Unit",quantity:8,unit:"b"}],targetMachines:1},{step:21,machineName:"Fluid Solidifier",machineTier:2,overclock:!1,rft:32,time:2,inputs:[{name:"Polyethylene",quantity:144,unit:"mb"}],outputs:[{name:"Polyethylene Sheet",quantity:1,unit:"b"}],targetMachines:1},{step:22,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,inputs:[{name:"Copper Ingot",quantity:1,unit:"b"}],outputs:[{name:"Copper Plate",quantity:1,unit:"b"}],targetMachines:1},{step:23,machineName:"Cluster Mill",machineTier:2,overclock:!1,rft:96,time:3.15,inputs:[{name:"Copper Plate",quantity:1,unit:"b"}],outputs:[{name:"Copper Foil",quantity:4,unit:"b"}],targetMachines:1},{step:24,machineName:"Chemical Reactor",machineTier:2,overclock:!1,rft:40,time:30,inputs:[{name:"Water",quantity:2e3,unit:"mb"},{name:"Sulfur Dust",quantity:1,unit:"b"}],outputs:[{name:"Sulfuric Acid",quantity:3e3,unit:"mb"}],targetMachines:1},{step:25,machineName:"Chemical Reactor",machineTier:2,overclock:!1,rft:40,time:30,inputs:[{name:"Polyethylene Sheet",quantity:1,unit:"b"},{name:"Copper Foil",quantity:1,unit:"b"},{name:"Sulfuric Acid",quantity:125,unit:"mb"}],outputs:[{name:"Plastic Circuit Board",quantity:8,unit:"b"}],targetMachines:1},{step:26,machineName:"Fluid Extractor",machineTier:2,overclock:!1,rft:128,time:4,inputs:[{name:"Soldering Alloy Ingot",quantity:1,unit:"b"}],outputs:[{name:"Soldering Alloy",quantity:144,unit:"mb"}],targetMachines:1},{step:27,machineName:"Assembler",machineTier:3,overclock:!1,rft:240,time:10,inputs:[{name:"Resistor",quantity:4,unit:"b"},{name:"Capacitor",quantity:4,unit:"b"},{name:"Transistor",quantity:4,unit:"b"},{name:"Fine Tin Alloy Wire",quantity:4,unit:"b"},{name:"Central Processing Unit",quantity:1,unit:"b"},{name:"Plastic Circuit Board",quantity:1,unit:"b"},{name:"Soldering Alloy",quantity:72,unit:"mb"}],outputs:[{name:"Refined Circuit",quantity:4,unit:"b"}],targetMachines:1}],C={typography:{htmlFontSize:16,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700},palette:{type:"dark",primary:{light:"#58a5f0",main:"#0277bd",dark:"#004c8c",contrastText:"#fff"},secondary:{light:"#ff5c8d",main:"#d81b60",dark:"#a00037",contrastText:"#000"}}},S=a(349),k=a(350),O=a(351),q=a.n(O);function T(e){var t=new S.DirectedGraph;t.upgradeToMulti(),e.forEach((function(e){t.addNode(Number(e.step),{inputs:e.inputs,machineName:e.machineName,machineTier:e.machineTier,outputs:e.outputs,targetMachines:1,time:e.overclock?e.timeoc:e.time,visitedCount:0})}));var a=function(e){var t=e;return t.forEachNode((function(e,a){a.outputs.forEach((function(n){t.forEachNode((function(r,i){e!==r&&i.inputs.forEach((function(l){l.name===n.name&&t.addDirectedEdge(e,r,{name:l.name,inputQuantity:l.quantity,inputTime:i.time,outputQuantity:n.quantity,outputTime:a.time})}))}))}))})),t}(t);return function(e){var t=function(e){var t=[];return e.forEachNode((function(e){t[e]=[]})),e.forEachEdge((function(e,a,n,r,i,l){t[n].push(Number(r))})),Object.values(t)}(e),a=q()(t);return a?function(e,t){var a=e,n=!0,r=!1,i=void 0;try{for(var l,c=t[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var o=l.value,u=o[0],m=o[1];a.edges(u,m).forEach((function(e){a.dropEdge(e)}))}}catch(s){r=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}(e,a):e}(Object(k.reverse)(a))}function N(e,t){var a=[],n=[],r=0,i=[],l=[];return"undefined"===typeof e||0===e.length||(i=function(e){var t=[];return e.forEachNode((function(a,n){n.inputs.forEach((function(e){e.name in t||(t[e.name]={node:Number(a),quantity:e.quantity,time:n.time,targetMachines:n.targetMachines})})),e.forEachOutEdge((function(e,a,n,r,i,l){a.name in t&&delete t[a.name]}))})),t.sort()}(t),l=function(e){var t=[];return e.forEachNode((function(a,n){n.outputs.forEach((function(e){e.name in t||(t[e.name]={node:Number(a),quantity:e.quantity,time:n.time,targetMachines:n.targetMachines})})),e.forEachOutEdge((function(e,a,n,r,i,l){a.name in t&&delete t[a.name]}))})),t.sort()}(t),t.forEachNode((function(t,i){var l=E[i.machineTier],c=("N/A"!==l?l+" ":"")+i.machineName,o=e[t],u=o.overclock?o.rftoc:o.rft;a[c]=c in a?a[c]+Math.ceil(i.targetMachines):Math.ceil(i.targetMachines),n[t]=c+" "+Math.ceil(i.targetMachines),r+=Math.ceil(i.targetMachines)*u}))),{machineTotals:a,machineSteps:n,rft:r,inputs:i,outputs:l}}var j=a(15),M=a(123),w=a(299),W=a(352),x=a.n(W),A=a(517),U=a(524),F=a(519),P=a(518),I=a(525),D=a(527),R=r.a.memo((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,e.title),r.a.createElement(P.a,null,r.a.createElement(U.a,null,"A production chain calculator inspired by the"," ",r.a.createElement(D.a,{rel:"noopener noreferrer",target:"_blank",href:"https://kirkmcdonald.github.io/"},"Kirk McDonald calculator")," ","for Factorio. Please ask questions and report bugs at"," ",r.a.createElement(D.a,{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/SimonNguyen/ProductionChain"},"GitHub"),".",r.a.createElement("br",null),r.a.createElement("br",null),"Shortcuts: ",r.a.createElement("br",null),r.a.createElement("code",null,"ESC")," closes dialog menus.")),r.a.createElement(F.a,null,r.a.createElement(w.a,{onClick:e.handleClose,color:"default"},"Close")))})),B=a(10),L=a(323),V=a(251),z=r.a.memo((function(e){var t=r.a.useState(""),a=Object(B.a)(t,2),n=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,e.title),r.a.createElement(P.a,null,r.a.createElement(U.a,null,"Paste a recipe string below to import a recipe."),r.a.createElement(L.a,{multiline:!0,fullWidth:!0,size:"medium",rowsMax:"10",variant:"outlined",value:n,onChange:function(e){i(e.target.value)}})),r.a.createElement(F.a,null,r.a.createElement(w.a,{onClick:e.handleClose,color:"default"},"Close"),r.a.createElement(w.a,{onClick:function(){var t=n.split(","),a=Uint8Array.from(t),r=JSON.parse(Object(V.decompress)(a));e.handleRecipes(r)},color:"default"},"Import"),r.a.createElement(w.a,{onClick:function(){var t=JSON.stringify(e.recipes),a=Object(V.compress)(t);i(a.toString())},color:"default"},"Export")))})),Q=r.a.memo((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,e.title),r.a.createElement(P.a,null,r.a.createElement(U.a,null,"This action cannot be undone.")),r.a.createElement(F.a,null,r.a.createElement(F.a,null,r.a.createElement(w.a,{onClick:e.handleClose,color:"default"},"Cancel"),r.a.createElement(w.a,{onClick:function(){return e.handleClear()},color:"default"},"Accept"))))})),G=a(301),$=a(526),H=a(245),_=a(521),J=a(246),K=a(307),Z=a(248),X=a(328),Y=a(342),ee=a(5),te=/^-?\d+\.?\d*$/,ae=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleQuantity=function(e){var t=Number(e.target.value),n=a.state.item;n.quantity=t,a.setState({item:n}),a.props.handleUpdateItems(a.props.id,a.state.item)},a.handleUnit=function(e){var t=e.target.value,n=a.state.item;n.unit=t,a.setState({item:n}),a.props.handleUpdateItems(a.props.id,a.state.item)},a.handleName=function(e){var t=e.target.value,n=a.state.item;n.name=t,a.setState({item:n}),a.props.handleUpdateItems(a.props.id,a.state.item)},a.unitLabelRef=r.a.createRef(),a.state={unitLabelWidth:0,item:a.props.item},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({unitLabelWidth:this.unitLabelRef.current.offsetWidth})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{className:this.props.classes.formControlSmall},r.a.createElement(L.a,{error:!te.test(this.props.item.quantity),label:"Quantity",required:!0,type:"number",value:this.state.item.quantity.toString(),variant:"outlined",onChange:this.handleQuantity})),r.a.createElement(H.a,{variant:"outlined",className:this.props.classes.formControlSmall},r.a.createElement(J.a,{ref:this.unitLabelRef},"Unit"),r.a.createElement(Z.a,{labelWidth:this.state.unitLabelWidth,label:"Unit",placeholder:"b",value:this.state.item.unit,onChange:this.handleUnit},r.a.createElement(K.a,{value:"b"},"b"),r.a.createElement(K.a,{value:"mb"},"mb"))),r.a.createElement(H.a,{className:this.props.classes.formControl},r.a.createElement(L.a,{error:0===this.props.item.name.length,label:"Item Name",required:!0,type:"string",value:this.state.item.name,variant:"outlined",onChange:this.handleName})),r.a.createElement("br",null))}}]),t}(n.Component),ne=Object(ee.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},formControlSmall:{margin:e.spacing(1),maxWidth:100}}}))(ae),re=Object(G.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},formControlSmall:{margin:e.spacing(1),maxWidth:100}}}));function ie(e,t){var a=e;if(e.length<t)for(var n=e.length;n<t;n++)a.push({name:"",quantity:1,unit:"b"});else a=a.slice(0,t);return a}var le=r.a.memo((function(e){var t=re(),a=r.a.useState(!1),n=Object(B.a)(a,2),i=n[0],l=n[1],c=r.a.useState(""),o=Object(B.a)(c,2),u=o[0],m=o[1],s=r.a.useState(0),p=Object(B.a)(s,2),h=p[0],d=p[1],f=r.a.useState(!1),g=Object(B.a)(f,2),b=g[0],y=g[1],v=r.a.useState(0),C=Object(B.a)(v,2),S=C[0],k=C[1],O=r.a.useState(0),q=Object(B.a)(O,2),T=q[0],N=q[1],j=r.a.useState(1),M=Object(B.a)(j,2),W=M[0],x=M[1],A=r.a.useState(1),D=Object(B.a)(A,2),R=D[0],V=D[1],z=r.a.useState([{name:"",quantity:1,unit:"b"}]),Q=Object(B.a)(z,2),G=Q[0],ee=Q[1],te=r.a.useState([{name:"",quantity:1,unit:"b"}]),ae=Object(B.a)(te,2),le=ae[0],ce=ae[1],oe=/^-?\d+\.?\d*$/,ue=/^\d+$/,me=r.a.useRef(null),se=r.a.useState(0),pe=Object(B.a)(se,2),he=pe[0],de=pe[1];r.a.useEffect((function(){de(me.current.offsetWidth)}),[]);var fe=function(e,t){var a=G;a[e]=t,ee(a)},ge=function(e,t){var a=G;a[e]=t,ce(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,e.title),r.a.createElement(P.a,null,r.a.createElement(U.a,null,"Recipe information:"),r.a.createElement(H.a,{className:t.formControl},r.a.createElement(L.a,{label:"Machine Name",error:0===u.length,placeholder:"Macerator",required:!0,value:u,variant:"outlined",onChange:function(e){return m(e.target.value)}})),r.a.createElement(H.a,{variant:"outlined",className:t.formControl},r.a.createElement(J.a,{ref:me},"Machine Tier"),r.a.createElement(Z.a,{label:"Machine Tier",labelWidth:he,value:h,onChange:function(e){return d(e.target.value)}},E.map((function(e,t){return r.a.createElement(K.a,{key:t,value:t},e)})))),r.a.createElement(X.a,{control:r.a.createElement(Y.a,{checked:!0===b,onChange:function(){return y(!b)},value:b,color:"primary"}),label:"Overclock",labelPlacement:"top"}),r.a.createElement(H.a,{className:t.formControlSmall},r.a.createElement(L.a,{error:!oe.test(S),label:i?"EU/t":"RF/t",placeholder:S.toString(),required:!0,type:"number",value:S,variant:"outlined",onChange:function(e){return k(Number(e.target.value))}})),r.a.createElement(H.a,{className:t.formControlSmall},r.a.createElement(L.a,{error:!oe.test(T),label:"Time (s)",placeholder:T.toString(),required:!0,type:"number",value:T,variant:"outlined",onChange:function(e){return N(Number(e.target.value))}})),r.a.createElement(H.a,{className:t.formControlSmall},r.a.createElement(L.a,{error:!ue.test(W),label:"# Inputs",placeholder:W.toString(),required:!0,type:"number",value:W,variant:"outlined",onChange:function(e){var t;(t=Number(e.target.value))>=0&&ue.test(t)&&(x(t),ee((function(e){return ie(e,t)})))}})),r.a.createElement(H.a,{className:t.formControlSmall},r.a.createElement(L.a,{error:!ue.test(R),label:"# Outputs",placeholder:R.toString(),required:!0,type:"number",value:R,variant:"outlined",onChange:function(e){var t;(t=Number(e.target.value))>=0&&ue.test(t)&&(V(t),ce((function(e){return ie(e,t)})))}})),r.a.createElement(X.a,{control:r.a.createElement(Y.a,{checked:!0===i,onChange:function(){return l(!i)},value:i,color:"primary"}),label:"Use EU/t",labelPlacement:"top"}),r.a.createElement($.a,{style:{margin:"12px 0"}}),r.a.createElement(_.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(_.a,{item:!0,xs:6},r.a.createElement(U.a,null,"Inputs: ",0===G.length?"This recipe has no inputs.":"")),r.a.createElement(_.a,{item:!0,xs:6},r.a.createElement(U.a,null,"Outputs:",0===le.length?" This recipe has no outputs.":""))),r.a.createElement(_.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(_.a,{item:!0,xs:6},G.map((function(e,t){return r.a.createElement(ne,{key:"input"+t,id:t,item:e,handleUpdateItems:fe})}))),r.a.createElement(_.a,{item:!0,xs:6},le.map((function(e,t){return r.a.createElement(ne,{key:"output"+t,id:t,item:e,handleUpdateItems:ge})}))))),r.a.createElement(F.a,null,r.a.createElement(w.a,{onClick:e.handleClose,color:"default"},"Add"),r.a.createElement(w.a,{onClick:e.handleClose,color:"default"},"Close")))})),ce=Object(G.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},formControlSmall:{margin:e.spacing(1),maxWidth:100},margin:{margin:e.spacing(1)}}})),oe=r.a.memo((function(e){var t=ce(),a=r.a.useState(N(e.recipes,e.graph)),n=Object(B.a)(a,2),i=n[0],l=n[1],c=r.a.useState(1),o=Object(B.a)(c,2),u=o[0],m=o[1],s=r.a.useState(0!==i.outputs.length?Object.keys(i.outputs)[0]:0),p=Object(B.a)(s,2),h=p[0],d=p[1],f=r.a.useState(0!==i.outputs.length?i.outputs[h].quantity:0),g=Object(B.a)(f,2),b=g[0],E=g[1],y=r.a.useState(0!==i.outputs.length?b/i.outputs[h].time:0),v=Object(B.a)(y,2),C=v[0],S=v[1],k=r.a.useState(C),O=Object(B.a)(k,2),q=O[0],T=O[1],j=r.a.useState(0),M=Object(B.a)(j,2),W=M[0],x=M[1],A=r.a.useRef(null);r.a.useEffect((function(){0!==e.recipes.length&&x(A.current.offsetWidth)}),[e.recipes.length]);var D=/^-?\d+\.?\d*$/;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,e.title),r.a.createElement(P.a,null,0!==e.recipes.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,"The default setting for the calculator is a single machine producing the final product. If you require more or less product, adjust the machines or outputs per second. Once you have set custom targets, press the 'calculate' button to redetermine the requirements for the recipe."),r.a.createElement(_.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(H.a,{className:t.formControl},r.a.createElement(L.a,{error:!D.test(q),label:"Output per second",placeholder:"1",required:!0,type:"number",value:q,variant:"outlined",onChange:function(e){return t=Number(e.target.value),T(t),void m(t/C);var t}})),r.a.createElement(H.a,{variant:"outlined",className:t.formControl},r.a.createElement(L.a,{error:!D.test(u),label:"Number of machines",placeholder:"1",required:!0,type:"number",value:u,variant:"outlined",onChange:function(e){return t=Number(e.target.value),m(t),void T(t*C);var t}})),r.a.createElement(H.a,{variant:"outlined",className:t.formControl},r.a.createElement(J.a,{ref:A},"Target Output"),r.a.createElement(Z.a,{label:"Target Output",labelWidth:W,value:h,onChange:function(e){return function(e){var t=i.outputs[e].quantity;d(e),E(t),S(t/i.outputs[e].time)}(e.target.value)}},Object.entries(i.outputs).sort().map((function(e){var t=Object(B.a)(e,2),a=t[0];t[1];return r.a.createElement(K.a,{key:"select"+a,value:a},a)})))),r.a.createElement("div",null,r.a.createElement(w.a,{className:t.margin,onClick:function(){e.graph.setNodeAttribute(i.outputs[h].node,"targetMachines",u)},color:"default",variant:"outlined"},"Set Target"),r.a.createElement(w.a,{className:t.margin,onClick:function(){var t=e.graph.copy();Object.entries(i.outputs).sort().forEach((function(e){var a=Object(B.a)(e,2),n=(a[0],a[1]);return function e(t,a,n){var r=t.getNodeAttributes(a);return"undefined"!==typeof n&&t.setNodeAttribute(a,"targetMachines",n),t.forEachOutNeighbor(a,(function(n,i){return t.edges(a,n).forEach((function(e){var a=t.getEdgeAttributes(e),i=a.inputQuantity/a.inputTime*r.targetMachines/(a.outputQuantity/a.outputTime);t.getNodeAttribute(n,"visitedCount")>0&&t.inDegree(n)>1?(t.updateNodeAttribute(n,"targetMachines",(function(e){return e+i})),t.updateNodeAttribute(n,"visitedCount",(function(e){return e+1}))):(t.setNodeAttribute(n,"targetMachines",i),t.setNodeAttribute(n,"visitedCount",1))})),e(t,n)})),t}(t,n.node)})),l(N(e.recipes,t))},color:"default",variant:"outlined"},"Calculate"))),r.a.createElement($.a,{style:{margin:"12px 0"}}),r.a.createElement(_.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(_.a,{item:!0,xs:3},r.a.createElement(U.a,null,"Machines per Step")),r.a.createElement(_.a,{item:!0,xs:3},r.a.createElement(U.a,null,"Machine Totals")),r.a.createElement(_.a,{item:!0,xs:2},r.a.createElement(U.a,null,"Inputs/s")),r.a.createElement(_.a,{item:!0,xs:2},r.a.createElement(U.a,null,"Outputs/s")),r.a.createElement(_.a,{item:!0,xs:2},r.a.createElement(U.a,null,"Power Consumed"))),r.a.createElement(_.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(_.a,{item:!0,xs:3},Object.entries(i.machineSteps).map((function(e){var t=Object(B.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,{key:a},"Step ",a," : ",n," ",r.a.createElement("br",null))}))),r.a.createElement(_.a,{item:!0,xs:3},Object.entries(i.machineTotals).sort().map((function(e){var t=Object(B.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,{key:a},a," : ",n," ",r.a.createElement("br",null))}))),r.a.createElement(_.a,{item:!0,xs:2},Object.entries(i.inputs).sort().map((function(e){var t=Object(B.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,{key:a},a," :"," ",(n.quantity/n.time*n.targetMachines).toFixed(2),r.a.createElement("br",null))}))),r.a.createElement(_.a,{item:!0,xs:2},Object.entries(i.outputs).sort().map((function(e){var t=Object(B.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,{key:a},a," :"," ",(n.quantity/n.time*n.targetMachines).toFixed(2),r.a.createElement("br",null))}))),r.a.createElement(_.a,{item:!0,xs:2},"RF/t: ",i.rft," ",r.a.createElement("br",null),"EU/t: ",i.rft/4))):r.a.createElement(U.a,null,"No recipe information.")),r.a.createElement(F.a,null,r.a.createElement(w.a,{onClick:e.handleClose,color:"default"},"Close")))})),ue=Object(G.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},formControlSmall:{margin:e.spacing(1),maxWidth:100}}}));function me(e,t){var a=e;if(e.length<t)for(var n=e.length;n<t;n++)a.push({name:"",quantity:1,unit:"b"});else a=a.slice(0,t);return a}var se=r.a.memo((function(e){var t=ue(),a=r.a.useState(!1),n=Object(B.a)(a,2),i=n[0],l=n[1],c=r.a.useState(e.rowData.machineName),o=Object(B.a)(c,2),u=o[0],m=o[1],s=r.a.useState(e.rowData.machineTier),p=Object(B.a)(s,2),h=p[0],d=p[1],f=r.a.useState(e.rowData.overclock),g=Object(B.a)(f,2),b=g[0],y=g[1],v=r.a.useState(e.rowData.rft),C=Object(B.a)(v,2),S=C[0],k=C[1],O=r.a.useState(e.rowData.time),q=Object(B.a)(O,2),T=q[0],N=q[1],j=r.a.useState(e.rowData.inputs.length),M=Object(B.a)(j,2),W=M[0],x=M[1],A=r.a.useState(e.rowData.outputs.length),D=Object(B.a)(A,2),R=D[0],V=D[1],z=r.a.useState(e.rowData.inputs),Q=Object(B.a)(z,2),G=Q[0],ee=Q[1],te=r.a.useState(e.rowData.outputs),ae=Object(B.a)(te,2),re=ae[0],ie=ae[1],le=r.a.useState(!0),ce=Object(B.a)(le,2),oe=ce[0],se=ce[1],pe=/^-?\d+\.?\d*$/,he=/^\d+$/,de=r.a.useRef(null),fe=r.a.useState(0),ge=Object(B.a)(fe,2),be=ge[0],Ee=ge[1];r.a.useEffect((function(){Ee(de.current.offsetWidth)}),[]);var ye=function(e,t){var a=G;a[e]=t,ee(a),a.forEach((function(e){0===e.name.length?se(!1):se(!0)}))},ve=function(e,t){var a=re;a[e]=t,ie(a),a.forEach((function(e){0===e.name.length?se(!1):se(!0)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,e.title),r.a.createElement(P.a,null,r.a.createElement(U.a,null,"Recipe information:"),r.a.createElement(H.a,{className:t.formControl},r.a.createElement(L.a,{label:"Machine Name",error:0===u.length,placeholder:"Macerator",required:!0,value:u,variant:"outlined",onChange:function(e){return t=e.target.value,m(t),void(0===t.length?se(!1):se(!0));var t}})),r.a.createElement(H.a,{variant:"outlined",className:t.formControl},r.a.createElement(J.a,{ref:de},"Machine Tier"),r.a.createElement(Z.a,{label:"Machine Tier",labelWidth:be,value:h,onChange:function(e){return d(e.target.value)}},E.map((function(e,t){return r.a.createElement(K.a,{key:t,value:t},e)})))),r.a.createElement(X.a,{control:r.a.createElement(Y.a,{checked:!0===b,onChange:function(){return y(!b)},value:b,color:"primary"}),label:"Overclock",labelPlacement:"top"}),r.a.createElement(H.a,{className:t.formControlSmall},r.a.createElement(L.a,{error:!pe.test(S),label:i?"EU/t":"RF/t",placeholder:S.toString(),required:!0,type:"number",value:S,variant:"outlined",onChange:function(e){return k(Number(e.target.value))}})),r.a.createElement(H.a,{className:t.formControlSmall},r.a.createElement(L.a,{error:!pe.test(T),label:"Time (s)",placeholder:T.toString(),required:!0,type:"number",value:T,variant:"outlined",onChange:function(e){return N(Number(e.target.value))}})),r.a.createElement(H.a,{className:t.formControlSmall},r.a.createElement(L.a,{error:!he.test(W),label:"# Inputs",placeholder:W.toString(),required:!0,type:"number",value:W,variant:"outlined",onChange:function(e){var t;(t=Number(e.target.value))>=0&&he.test(t)&&(x(t),ee((function(e){return me(e,t)})))}})),r.a.createElement(H.a,{className:t.formControlSmall},r.a.createElement(L.a,{error:!he.test(R),label:"# Outputs",placeholder:R.toString(),required:!0,type:"number",value:R,variant:"outlined",onChange:function(e){var t;(t=Number(e.target.value))>=0&&he.test(t)&&(V(t),ie((function(e){return me(e,t)})))}})),r.a.createElement(X.a,{control:r.a.createElement(Y.a,{checked:!0===i,onChange:function(){return l(!i)},value:i,color:"primary"}),label:"Use EU/t",labelPlacement:"top"}),r.a.createElement($.a,{style:{margin:"12px 0"}}),r.a.createElement(_.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(_.a,{item:!0,xs:6},r.a.createElement(U.a,null,"Inputs: ",0===G.length?"This recipe has no inputs.":"")),r.a.createElement(_.a,{item:!0,xs:6},r.a.createElement(U.a,null,"Outputs:",0===re.length?" This recipe has no outputs.":""))),r.a.createElement(_.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(_.a,{item:!0,xs:6},G.map((function(e,t){return r.a.createElement(ne,{key:"input"+t,id:t,item:e,handleUpdateItems:ye})}))),r.a.createElement(_.a,{item:!0,xs:6},re.map((function(e,t){return r.a.createElement(ne,{key:"output"+t,id:t,item:e,handleUpdateItems:ve})}))))),r.a.createElement(F.a,null,r.a.createElement(w.a,{onClick:function(){var t=e.recipes,a=t.indexOf(e.rowData);t[a]=function(e,t,a,n,r,i,l,c,o){return{step:t,machineName:a,machineTier:n,overclock:r,rft:e?4*i:i,time:l,inputs:c,outputs:o,targetMachines:1}}(i,e.rowData.step,u,h,b,S,T,G,re),e.handleUpdate(t),e.handleClose()},color:"default",disabled:!oe},"Save"),r.a.createElement(w.a,{onClick:e.handleClose,color:"default"},"Close")))})),pe=a(8),he=a(359),de=a(529),fe=a(71),ge=r.a.memo((function(e){var t,a=r.a.useState({checked:"dark"===e.themeType}),n=Object(B.a)(a,2),i=n[0],l=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,e.title),r.a.createElement(P.a,null,r.a.createElement(_.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(fe.a,{color:"textPrimary",variant:"subtitle1"},"Dark Theme"),r.a.createElement(de.a,{checked:i.checked,onChange:(t="checked",function(a){e.handleTheme(),l(Object(he.a)({},i,Object(pe.a)({},t,a.target.checked)))})}))),r.a.createElement(F.a,null,r.a.createElement(w.a,{onClick:e.handleClose,color:"default"},"Close")))})),be=function(e){var t=e.contentType,a=e.graph,n=e.isOpen,i=e.recipes,l=e.rowData,c=e.size,o=e.themeType,u=e.title,m=e.handleClose,s=e.handleClear,p=e.handleRecipes,h=e.handleTheme,d=e.handleUpdate;return r.a.createElement(A.a,{disableBackdropClick:"add"===t||"calculator"===t,fullScreen:"chart"===t,fullWidth:!0,maxWidth:c,open:n,onClose:m},"about"===t?r.a.createElement(R,{title:u,handleClose:m}):"import"===t?r.a.createElement(z,{title:u,handleClose:m,handleRecipes:p,recipes:i}):"clear"===t?r.a.createElement(Q,{title:u,handleClear:s,handleClose:m}):"add"===t?r.a.createElement(le,{title:u,recipes:i,handleClose:m}):"settings"===t?r.a.createElement(ge,{title:u,handleClose:m,handleTheme:h,themeType:o}):"calculator"===t?r.a.createElement(oe,{title:u,graph:a,recipes:i,handleClose:m,handleUpdate:d}):"edit"===t?r.a.createElement(se,{title:u,recipes:i,rowData:l,handleEdit:m,handleClose:m,handleUpdate:d}):r.a.createElement(U.a,null,"No valid content type selected."))};function Ee(e){return r.a.createElement(r.a.Fragment,null,e.items.map((function(t){return r.a.createElement("div",{key:"_"+e.type+t.name+e.step},t.quantity+t.unit+" "+t.name)})))}var ye=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleDialogOpen=function(e){a.setState({editable:e}),a.setState({dialog:!0})},a.handleDialogClose=function(){a.setState({dialog:!1})},a.state={columns:[{title:"Step",field:"step",readonly:!0,editable:"never",width:100},{title:"Machine Name",field:"machineName",width:200},{title:"Machine Tier",field:"machineTier",lookup:Object.assign({},E),width:200},{title:"Overclock",field:"overclock",type:"boolean",customFilterAndSearch:function(e,t){return t.overclock.toString().toUpperCase()===e.toUpperCase()},width:100},{title:"RF/t",field:"rft",type:"numeric",width:100},{title:"Time (s)",field:"time",type:"numeric",width:100},{title:"Base Inputs",field:"inputs",render:function(e){return r.a.createElement(Ee,{items:e.inputs,step:e.step,type:"input"})},editComponent:function(){return r.a.createElement(w.a,{variant:"outlined"},"Modify")},customFilterAndSearch:function(e,t){var a=!1;return t.inputs.forEach((function(t){Object.values(t).forEach((function(t){t.toString().toUpperCase().includes(e.toUpperCase())&&(a=a||!0)}))})),a}},{title:"Base Outputs",field:"outputs",render:function(e){return r.a.createElement(Ee,{items:e.outputs,step:e.step,type:"output"})},editComponent:function(){return r.a.createElement(w.a,{variant:"outlined"},"Modify")},customFilterAndSearch:function(e,t){var a=!1;return t.outputs.forEach((function(t){Object.values(t).forEach((function(t){t.toString().toUpperCase().includes(e.toUpperCase())&&(a=a||!0)}))})),a}}],recipes:Array.from(a.props.recipes),dialog:!1,editable:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(M.a,{variant:"outlined",my:2},r.a.createElement(x.a,{columns:this.state.columns,data:Array.from(this.props.recipes),options:{actionsColumnIndex:-1,maxBodyHeight:"77vh",paging:!0,pageSizeOptions:[5,10,15,20],showTitle:!1,sorting:!1,tableLayout:"auto"},editable:{onRowDelete:function(t){return new Promise((function(a,n){setTimeout((function(){var n=Object(j.a)(e.state.recipes),r=n.indexOf(t);n.splice(r,1),n.forEach((function(e,t){e.step=t+1})),e.setState({recipes:n},(function(){return a()})),e.props.handleUpdate(n),a()}),200)}))}},actions:[{icon:"arrow_upward",tooltip:"Move up",onClick:function(t,a){var n=Object(j.a)(e.state.recipes),r=n.indexOf(a);if(r>0){var i=n[r-1];n[r-1]=n[r],n[r-1].step=r-1,n[r]=i,n[r].step=r}e.setState({recipes:n}),e.props.handleUpdate(n)}},{icon:"arrow_downward",tooltip:"Move down",onClick:function(t,a){var n=Object(j.a)(e.state.recipes),r=n.indexOf(a);if(r<n.length-1){var i=n[r+1];n[r+1]=n[r],n[r+1].step=r+1,n[r]=i,n[r].step=r}e.setState({recipes:n}),e.props.handleUpdate(n)}},{icon:"edit",tooltip:"Edit Recipe",onClick:function(t,a){e.handleDialogOpen(a)}}]}),r.a.createElement(be,{contentType:"edit",size:"lg",title:"Edit a recipe",recipes:this.state.recipes,rowData:this.state.editable,isOpen:this.state.dialog,handleClose:this.handleDialogClose,handleUpdate:this.props.handleUpdate}))}}]),t}(n.Component),ve=a(503),Ce=a(498),Se=a(326),ke=a(528),Oe=a(365),qe=a.n(Oe),Te=a(360),Ne=a.n(Te),je=a(361),Me=a.n(je),we=a(362),We=a.n(we),xe=a(363),Ae=a.n(xe),Ue=a(364),Fe=a.n(Ue),Pe=r.a.memo((function(e){var t=r.a.useState(!1),a=Object(B.a)(t,2),n=a[0],i=a[1],l=r.a.useState(""),c=Object(B.a)(l,2),o=c[0],u=c[1],m=r.a.useState(""),s=Object(B.a)(m,2),p=s[0],h=s[1],d=r.a.useState("xs"),f=Object(B.a)(d,2),g=f[0],b=f[1],E=function(e,t,a){b(a),u(t),h(e),i(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,null,r.a.createElement(Ce.a,{button:!0,onClick:function(){return E("about","About","xs")}},r.a.createElement(ke.a,null,r.a.createElement(Ne.a,null)),r.a.createElement(Se.a,{primary:"About",primaryTypographyProps:{noWrap:!0}})),r.a.createElement(Ce.a,{button:!0,onClick:function(){return E("import","Import or export a recipe list","sm")}},r.a.createElement(ke.a,null,r.a.createElement(Me.a,null)),r.a.createElement(Se.a,{primary:"Import/Export Recipe",primaryTypographyProps:{noWrap:!0}})),r.a.createElement(Ce.a,{button:!0,onClick:function(){return E("clear","Are you sure you want to clear all recipes?","xs")}},r.a.createElement(ke.a,null,r.a.createElement(We.a,null)),r.a.createElement(Se.a,{primary:"Clear All Recipes",primaryTypographyProps:{noWrap:!0}})),r.a.createElement(Ce.a,{button:!0,onClick:function(){return E("add","Add a recipe","lg")}},r.a.createElement(ke.a,null,r.a.createElement(Ae.a,null)),r.a.createElement(Se.a,{primary:"Add Recipe",primaryTypographyProps:{noWrap:!0}})),r.a.createElement(Ce.a,{button:!0,onClick:function(){return E("calculator","Calculated requirements for this recipe","lg")}},r.a.createElement(ke.a,null,r.a.createElement(Fe.a,null)),r.a.createElement(Se.a,{primary:"Calculator",primaryTypographyProps:{noWrap:!0}})),r.a.createElement($.a,{style:{margin:"12px 0"}}),r.a.createElement(Ce.a,{button:!0,onClick:function(){return E("settings","Settings","xs")}},r.a.createElement(ke.a,null,r.a.createElement(qe.a,null)),r.a.createElement(Se.a,{primary:"Settings",primaryTypographyProps:{noWrap:!0}}))),r.a.createElement(be,{contentType:p,graph:e.graph,recipes:e.recipes,size:g,themeType:e.themeType,title:o,isOpen:n,handleClear:function(){e.handleClear(),i(!1)},handleClose:function(){i(!1)},handleRecipes:e.handleRecipes,handleTheme:e.handleTheme}))})),Ie=Object(ee.a)((function(){return{header:{fontWeight:700,minWidth:0,fontSize:18},grow:{flexGrow:1}}}))((function(e){var t=e.classes;return r.a.createElement(fe.a,{noWrap:!0,color:"textPrimary",className:t.header},"Production Chain")}));function De(e){return e.forEach((function(e){var t=function(e,t,a){var n=E[t]-1,r=e,i=a,l=0;if(y[n]<=e||0===n||-1===n||0===e)return{eut:r,ticks:i};if(e<=16)return{eut:r=e*(1<<(l=e<=8?n:n-1))*(1<<l),ticks:i=a/(1<<l)};for(;i>=3&&r<=y[t-1];)r*=4,i/=2.8;return{eut:r,ticks:Math.ceil(i)}}(e.rft/4,e.machineTier,e.time);e.rftoc=4*t.eut,e.timeoc=t.ticks})),e}var Re={sidebar:{anchor:"left",width:256,variant:"permanent",collapsible:!0,collapsedWidth:64},content:{persistentBehavior:"fit"},header:{position:"fixed",clipped:!1,persistentBehavior:"fit",offsetHeight:64}},Be=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).toggleDarkTheme=function(){var e=a.state.theme;"light"===e.palette.type?(window.localStorage.setItem("theme","dark"),e.palette.type="dark"):(window.localStorage.setItem("theme","light"),e.palette.type="light"),a.setState({theme:e})},a.handleCollapse=function(e){window.localStorage.setItem("collapsed",!e),a.setState({collapsed:!e})},a.handleClear=function(){var e=a.state.recipes;e.length=0,a.setState({recipes:e})},a.handleUpdate=function(e){var t=e,n=T(t);a.setState({recipes:t}),a.setState({graph:n})};var n=window.localStorage.getItem("theme"),r=window.localStorage.getItem("collapsed"),i=De(v),c=T(i);return null===n?window.localStorage.setItem("theme","dark"):"light"===n?C.palette.type="light":"dark"===n&&(C.palette.type="dark"),null===r&&window.localStorage.setItem("collapsed","false"),a.state={theme:C,headers:Headers,recipes:i,collapsed:"true"===r,graph:c},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Object(d.a)(this.state.theme);return r.a.createElement(f.a,{theme:t},r.a.createElement(g.a,null),r.a.createElement(b.e,{theme:t,config:Re,initialCollapsed:this.state.collapsed},(function(t){var a=t.sidebarStyles,n=t.collapsed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.d,null,r.a.createElement(h.a,null,r.a.createElement(b.g,{className:b.i.leftTrigger},r.a.createElement(b.h,null)),r.a.createElement(Ie,null))),r.a.createElement(b.f,null,r.a.createElement("div",{className:a.container},r.a.createElement(Pe,{graph:e.state.graph,handleTheme:e.toggleDarkTheme,handleRecipes:e.handleUpdate,handleClear:e.handleClear,recipes:e.state.recipes,themeType:e.state.theme.palette.type})),r.a.createElement(b.a,{onClick:function(){return e.handleCollapse(n)}},r.a.createElement(b.b,null))),r.a.createElement(b.c,null,r.a.createElement(s.a,{maxWidth:"xl"},r.a.createElement(p.a,{my:2},r.a.createElement(ye,{recipes:e.state.recipes,handleUpdate:e.handleUpdate,onChangeOC:e.handleOverclock,onChangeTier:e.handleTier})))))})))}}]),t}(n.Component);Object(i.render)(r.a.createElement(r.a.Fragment,null,r.a.createElement(Be,null)),document.querySelector("#root"))}},[[374,1,2]]]);
//# sourceMappingURL=main.19411a44.chunk.js.map