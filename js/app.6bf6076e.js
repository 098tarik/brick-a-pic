(function(e){function t(t){for(var n,A,o=t[0],g=t[1],c=t[2],s=0,u=[];s<o.length;s++)A=o[s],Object.prototype.hasOwnProperty.call(i,A)&&i[A]&&u.push(i[A][0]),i[A]=0;for(n in g)Object.prototype.hasOwnProperty.call(g,n)&&(e[n]=g[n]);l&&l(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var g=a[o];0!==i[g]&&(n=!1)}n&&(r.splice(t--,1),e=A(A.s=a[0]))}return e}var n={},i={app:0},r=[];function A(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,A),a.l=!0,a.exports}A.m=e,A.c=n,A.d=function(e,t,a){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(A.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)A.d(a,n,function(t){return e[t]}.bind(null,n));return a},A.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],g=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=g;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.showDrawer=!e.showDrawer}}}),a("v-toolbar-title",[e._v("Brick a Pic")]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"/"}},[e._v("About")]),a("v-btn",{attrs:{text:"",href:"https://github.com/brick-a-pic/brick-a-pic",target:"_blank"}},[e._v("Source")])],1),a("v-content",[a("Preview",{attrs:{imageData:e.imageData}}),a("v-container",{attrs:{fluid:""}},[e.showDrawer?a("Settings",{on:{imageLoaded:e.passImage}}):e._e()],1)],1)],1)},r=[],A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"background-wrapper",attrs:{id:"background"}},[a("div",{attrs:{id:"draggable"}},[e.imageData?a("svg",{staticClass:"preview-svg",attrs:{"shape-rendering":"crispEdges",viewBox:"-1 -1 "+(e.imageData.width+1)+" "+(e.imageData.height+1)}},[a("g",[e._l(e.imageData.data,(function(t,n){return a("g",{key:n},[e._l(t,(function(t,i){return a("rect",{key:i,staticClass:"pixel",attrs:{width:"1",height:"1",x:i,y:n,fill:e.getColor(t)}})})),a("text",{staticClass:"small",attrs:{x:-.2,y:n+.5,"text-anchor":"end","dominant-baseline":"central"}},[e._v(" "+e._s(n+1)+" ")])],2)})),e._l(e.imageData.data,(function(t,n){return a("g",{key:"row"+n},[a("text",{staticClass:"small",attrs:{x:n+.5,y:-.2,"text-anchor":"middle"}},[e._v(" "+e._s(n+1)+" ")])])}))],2),a("defs",[a("pattern",{attrs:{id:"smallGrid",width:"1",height:"1",patternUnits:"userSpaceOnUse"}},[a("path",{attrs:{d:"M 1 0 L 0 0 0 1",fill:"none",stroke:"black","stroke-width":"0.2"}})]),a("pattern",{attrs:{id:"grid",width:"10",height:"10",patternUnits:"userSpaceOnUse"}},[a("rect",{attrs:{width:"10",height:"10",fill:"url(#smallGrid)"}}),a("path",{attrs:{d:"M 10 0 L 0 0 0 10",fill:"none",stroke:"black","stroke-width":"0.4"}})])]),a("rect",{attrs:{width:"100%",height:"100%",fill:"url(#grid)"}})]):e._e()])])},o=[],g=(a("99af"),a("3835")),c=a("7d05"),l=a.n(c),s={name:"Preview",props:["imageData"],components:{},methods:{getColor:function(e){var t=Object(g["a"])(e,4),a=t[0],n=t[1],i=t[2],r=t[3];return"rgba(".concat(a,", ").concat(n,", ").concat(i,", ").concat((r||256)/256,")")}},mounted:function(){var e=document.querySelector("#draggable");l()(e)}},u=s,d=(a("773a"),a("2877")),m=Object(d["a"])(u,A,o,!1,null,null,null),h=m.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"max-width":"20em"}},[a("v-card-title",[e._v("Options")]),a("v-card-text",[a("OpenImage",{attrs:{imageCheck:e.imageCheck},on:{change:e.onImageOpen,delete:e.ImageDelete}}),a("ImageProcessor",{attrs:{"image-width":e.imageWidth,"image-height":e.imageHeight,"image-url":e.imageUrl},on:{imageSampled:e.onImageSampled}}),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticStyle:{margin:"24px"},attrs:{xs3:""}},[a("v-text-field",{attrs:{label:"Width",id:"widthSetting",type:"number",min:"1",max:"100"},model:{value:e.imageWidth,callback:function(t){e.imageWidth=e._n(t)},expression:"imageWidth"}})],1),a("v-flex",{staticStyle:{margin:"24px"},attrs:{xs3:""}},[a("v-text-field",{attrs:{label:"Height",id:"heightSetting",type:"number",min:"1",max:"100"},model:{value:e.imageHeight,callback:function(t){e.imageHeight=e._n(t)},expression:"imageHeight"}})],1)],1)],1)],1)},p=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-file-input",{ref:"chosenFile",attrs:{label:"Open image",id:"imageInput",accept:"image/*","prepend-icon":"mdi-image",clearable:!1,rules:e.rules},on:{change:e.onChange}}),a("div",{staticClass:"subtitle-1"},[e._v("Choose a sample")]),a("v-container",{attrs:{fluid:""}},[a("v-row",e._l(e.sampleImages,(function(t,n){return a("v-col",{key:n,attrs:{cols:"4"}},[a("v-card",{attrs:{flat:"",tile:"",link:""},on:{click:function(a){return e.$emit("change",t)}}},[a("v-img",{attrs:{src:t,"aspect-ratio":"1"}})],1)],1)})),1)],1)],1)},C=[],w=(a("d3b7"),a("3ca3"),a("2ca0"),a("ddb0"),a("2b3d"),a("7ca7")),I=a("7ca7"),b=a("7ca7"),k={name:"OpenImage",props:["ImageCheck"],watch:{ImageCheck:function(){var e=URL.createObjectURL(this.fileUpload);this.$emit("change",e)}},data:function(){return{chosenFile:null,data:null,rules:[function(e){return!e||e.type.startsWith("image/")||"Please select a valid image"}],sampleImages:[w,I,b],fileUpload:null}},methods:{onChange:function(e){if(e){var t=URL.createObjectURL(e);this.fileUpload=e,this.$emit("change",t)}}}},U=k,y=a("6544"),B=a.n(y),V=a("b0af"),O=a("62ad"),x=a("a523"),L=a("23a7"),S=a("adda"),G=a("0fd9"),H=Object(d["a"])(U,v,C,!1,null,null,null),j=H.exports;B()(H,{VCard:V["a"],VCol:O["a"],VContainer:x["a"],VFileInput:L["a"],VImg:S["a"],VRow:G["a"]});var D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"offscreen"},[a("canvas",{attrs:{id:"processing-canvas"}})])}],W=(a("d81d"),[[242,243,242],[161,165,162],[249,233,153],[215,197,153],[194,218,184],[232,186,199],[203,132,66],[204,142,104],[196,40,27],[196,112,160],[13,105,171],[245,205,47],[98,71,50],[27,42,52],[109,110,108],[40,127,70],[161,196,139],[243,207,155],[75,151,74],[160,95,52],[193,202,222],[180,210,227],[238,196,182],[218,134,121],[110,153,201],[199,193,183],[107,50,123],[226,155,63],[218,133,64],[0,143,155],[104,92,67],[67,84,147],[104,116,172],[199,210,60],[85,165,175],[183,215,213],[164,189,70],[217,228,167],[231,172,88],[211,111,76],[146,57,120],[234,184,145],[220,188,129],[174,122,89],[156,163,168],[116,134,156],[135,124,144],[224,152,100],[149,138,115],[32,58,86],[39,70,44],[121,136,161],[149,142,163],[147,135,103],[87,88,87],[22,29,50],[171,173,172],[120,144,129],[149,121,118],[123,46,47],[117,108,98],[215,169,75],[130,138,93],[249,214,46],[232,171,45],[105,64,39],[207,96,36],[163,162,164],[70,103,164],[35,71,139],[142,66,133],[99,95,97],[229,228,222],[176,142,68],[112,149,120],[121,181,181],[159,195,233],[108,129,183],[143,76,42],[124,92,69],[150,112,159],[107,98,155],[167,169,206],[205,98,152],[228,173,200],[220,144,149],[240,213,160],[235,184,127],[253,234,140],[125,187,221],[52,43,117],[236,236,236],[205,84,75],[193,223,240],[123,182,232],[247,241,141],[217,133,108],[132,182,141],[248,241,132],[236,232,222],[191,183,177],[228,173,200],[165,165,203],[213,115,61],[216,221,86],[207,226,247],[255,246,123],[225,164,194],[151,105,91],[180,132,85],[137,135,136]]),P=function(e){for(var t=1/0,a=0,n=e[0],i=e[1],r=e[2],A=0;A<W.length;A+=1){var o=W[A][0],g=W[A][1],c=W[A][2],l=Math.pow(o-n,2)+Math.pow(g-i,2)+Math.pow(c-r,2);l<t&&(t=l,a=A)}return W[a]},J=function(e){return e.map((function(e){return e.map(P)}))},Q=(a("fb6a"),a("d4ec"));function K(e,t){var a=[],n=0;while(n<e.length)a.push(e.slice(n,t+n)),n+=t;return a}var X=function e(t){var a=t.height,n=t.width,i=t.data;Object(Q["a"])(this,e),this.height=a,this.width=n,this.data=K(K(i,4),n)},N={name:"ImageProcessor",props:["imageUrl","imageWidth","imageHeight"],methods:{sampleImage:function(){if(""!==this.imageUrl){var e=document.getElementById("processing-canvas").getContext("2d");e.clearRect(0,0,e.canvas.width,e.canvas.height);var t=new Image,a=this;t.onload=function(){var n=a.imageWidth,i=a.imageHeight;e.drawImage(t,0,0,n,i);var r=e.getImageData(0,0,n,i),A=new X(r);A.data=J(A.data),a.$emit("imageSampled",A)},t.src=this.imageUrl}}},watch:{imageUrl:function(){this.sampleImage()},imageWidth:function(){this.sampleImage()},imageHeight:function(){this.sampleImage()}}},R=N,T=(a("79ff"),Object(d["a"])(R,D,E,!1,null,null,null)),Z=T.exports,F={name:"Settings",components:{OpenImage:j,ImageProcessor:Z},data:function(){return{imageCheck:0,imageDelete:0,imageUrl:"",imageHeight:64,imageWidth:64,minEdgeLength:64,minWidth:1,maxWidth:100,minHeight:1,maxHeight:100}},methods:{onImageOpen:function(e){var t=this,a=new Image;a.onload=function(){var n=a.height/a.width;a.height>a.width?(t.imageWidth=t.minEdgeLength,t.imageHeight=Math.floor(t.minEdgeLength*n)):a.height<a.width?(t.imageHeight=t.minEdgeLength,t.imageWidth=Math.floor(t.minEdgeLength/n)):(t.imageWidth=t.minEdgeLength,t.imageHeight=t.minEdgeLength),t.imageUrl=e},a.src=e},onImageSampled:function(e){this.imageData=e,this.$emit("imageLoaded",e)},ImageDelete:function(){}}},q=F,M=a("99d9"),_=a("0e8f"),Y=a("a722"),z=a("8654"),$=Object(d["a"])(q,f,p,!1,null,null,null),ee=$.exports;B()($,{VCard:V["a"],VCardText:M["a"],VCardTitle:M["b"],VFlex:_["a"],VLayout:Y["a"],VTextField:z["a"]});var te={components:{Preview:h,Settings:ee},data:function(){return{showDrawer:!0,imageData:""}},methods:{passImage:function(e){this.imageData=e}}},ae=te,ne=a("7496"),ie=a("40dc"),re=a("5bc1"),Ae=a("8336"),oe=a("a75b"),ge=a("2fa4"),ce=a("2a7f"),le=Object(d["a"])(ae,i,r,!1,null,null,null),se=le.exports;B()(le,{VApp:ne["a"],VAppBar:ie["a"],VAppBarNavIcon:re["a"],VBtn:Ae["a"],VContainer:x["a"],VContent:oe["a"],VSpacer:ge["a"],VToolbarTitle:ce["a"]});var ue=a("9483");Object(ue["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var de=a("f309");n["a"].use(de["a"]);var me=new de["a"]({});a("d5e8"),a("5363");n["a"].config.productionTip=!1,new n["a"]({vuetify:me,render:function(e){return e(se)}}).$mount("#app")},"773a":function(e,t,a){"use strict";var n=a("968f"),i=a.n(n);i.a},"79ff":function(e,t,a){"use strict";var n=a("97f7"),i=a.n(n);i.a},"7ca7":function(e,t){e.exports="data:image/png;base64,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"},"968f":function(e,t,a){},"97f7":function(e,t,a){}});
//# sourceMappingURL=app.6bf6076e.js.map