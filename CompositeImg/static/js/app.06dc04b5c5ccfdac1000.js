webpackJsonp([1],{"+BTi":function(t,e){},AgmQ:function(t,e){},Dzb6:function(t,e){},GXEp:function(t,e){},LL4n:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("LL4n"),a("+BTi");var i=a("BrEC"),n=a.n(i),s=(a("U/ZW"),a("+nRk")),o=a.n(s),c=(a("Dzb6"),a("o6kb")),l=a.n(c),r=(a("jAzQ"),a("wOhx")),m=a.n(r),g=(a("X+ky"),a("HJMx")),h=a.n(g),d=(a("GXEp"),a("mtrD")),v=a.n(d),u=a("7+uW"),p={name:"CompositeImage",data:function(){return{lang:this.$i18n.locale,langList:[{key:"zh",value:"简体中文"},{key:"tw",value:"繁体中文"},{key:"en",value:"EN"}],thumbnailImg:[{id:"car",src:"/CompositeImg/static/VC01.png"},{id:"ceilling",src:"/CompositeImg/static/DD06A.png"},{id:"floor",src:"/CompositeImg/static/DF106.png"},{id:"controlBox",src:"/CompositeImg/static/CC102.png"}],imgWidth:"",imgHeight:"",fileName:"",canvas:"",ctx:"",canvasImgArr:[]}},mounted:function(){this.initLang(this.lang),this.draw()},methods:{draw:function(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d")},saveImageInfo:function(){var t=this.canvas.toDataURL("image/png");this.$refs.linkDown.href=t,this.$refs.downImg.src=t},saveAsLocalImage:function(){var t=void 0;t=this.imgHeight||this.imgWidth?this.reDraw().toDataURL("image/png").replace("image/png","image/octet-stream"):this.canvas.toDataURL("image/png").replace("image/png","image/octet-stream");var e=this.$parent.$el.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml","a");e.href=t,e.download=this.fileName?this.fileName:"elevater.png";var a=this.$parent.$el.ownerDocument.createEvent("MouseEvents");a.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(a)},handleRemove:function(t,e){console.log(t,e)},handlePictureCardPreview:function(t){var e=new Image;e.src=this.changeImgSize(t.url),this.ctx.drawImage(e,0,0,150,300),this.canvasImgArr.push(e)},selectedImg:function(t){this.ctx.drawImage(this.$refs.images[t],0,0,150,300),this.canvasImgArr.push(this.$refs.images[t])},reDraw:function(){var t=this.$refs.reCanvas;t.setAttribute("width",this.imgWidth?this.imgWidth:this.imgHeight/2),t.setAttribute("height",this.imgHeight?this.imgHeight:2*this.imgWidth);for(var e=t.getContext("2d"),a=0;a<this.canvasImgArr.length;a++)e.drawImage(this.canvasImgArr[a],0,0,this.imgWidth?this.imgWidth:this.imgHeight/2,this.imgHeight?this.imgHeight:2*this.imgWidth);return t},switchLang:function(t){this.$i18n.locale=t,this.initLang(t)},initLang:function(t){var e=this;this.langList.map(function(a){a.key===t&&(e.lang=a.value)})},changeImgSize:function(t){var e=this.$parent.$el.ownerDocument.createElement("canvas"),a=e.getContext("2d");e.width=1e3,e.height=2e3;var i=new Image;return i.src=t,a.drawImage(i,0,0,e.width,e.height),e.toDataURL("image/png")},clearCanvas:function(){this.canvas.height=this.canvas.height}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"switchLangBox"},[a("el-dropdown",{attrs:{size:"mini"},on:{command:t.switchLang}},[a("span",{staticClass:"el-dropdown-link"},[t._v("\n        "+t._s(t.lang)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t._l(t.langList,function(e){return[a("el-dropdown-item",{attrs:{command:e.key}},[t._v(t._s(e.value))])]})],2)],1)],1),t._v(" "),a("div",{staticClass:"handleBtnBox"},[t._v("\n    "+t._s(t.$t("imgWidth"))+"：\n    "),a("el-input",{staticClass:"sizeInput",attrs:{placeholder:"e.g.:150",clearable:""},model:{value:t.imgWidth,callback:function(e){t.imgWidth=e},expression:"imgWidth"}}),t._v("\n    "+t._s(t.$t("imgHeight"))+"：\n    "),a("el-input",{staticClass:"sizeInput",attrs:{placeholder:"e.g.:300",clearable:""},model:{value:t.imgHeight,callback:function(e){t.imgHeight=e},expression:"imgHeight"}}),t._v("\n    "+t._s(t.$t("fileName"))+"：\n    "),a("el-input",{staticClass:"inputStyle",attrs:{placeholder:"e.g.:elevater.png",clearable:""},model:{value:t.fileName,callback:function(e){t.fileName=e},expression:"fileName"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveImageInfo}},[t._v("\n      "+t._s(t.$t("saveImgBtn"))+"\n    ")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveAsLocalImage}},[t._v("\n      "+t._s(t.$t("downloadImgBtn"))+"\n    ")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.clearCanvas}},[t._v("\n      "+t._s(t.$t("clearCanvasBtn"))+"\n    ")])],1),t._v(" "),a("div",{staticClass:"showImgBox"},[a("div",{staticClass:"boxHeader thumbnailBox"},[a("h1",[t._v(t._s(t.$t("thumbnailPic")))])]),t._v(" "),a("div",{staticClass:"boxHeader canvasBox"},[a("h1",[t._v(t._s(t.$t("canvas")))])]),t._v(" "),a("div",{staticClass:"boxHeader compositeBox"},[a("h1",[t._v(t._s(t.$t("compositePic")))])])]),t._v(" "),a("div",{staticClass:"showImgBox"},[a("div",{staticClass:"boxSize boxSizeT thumbnailBox"},[t._l(t.thumbnailImg,function(e,i){return[a("img",{ref:"images",refInFor:!0,attrs:{src:e.src,id:e.id},on:{click:function(e){t.selectedImg(i)}}})]}),t._v(" "),a("el-upload",{staticClass:"upload-card",attrs:{action:"","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,"auto-upload":!1}},[a("i",{staticClass:"el-icon-plus"})])],2),t._v(" "),a("div",{staticClass:"boxSize canvasBox"},[a("canvas",{ref:"canvas",attrs:{width:"150",height:"300"}}),t._v(" "),a("canvas",{ref:"reCanvas",staticStyle:{display:"none"}})]),t._v(" "),a("div",{staticClass:"boxSize compositeBox"},[a("a",{ref:"linkDown",attrs:{href:"",download:"elevater"}},[a("img",{ref:"downImg",attrs:{src:""}})])])])])},staticRenderFns:[]};var w={name:"app",components:{CompositeImage:a("VU/8")(p,f,!1,function(t){a("P+a9")},"data-v-2332f008",null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("CompositeImage")],1)},staticRenderFns:[]};var I=a("VU/8")(w,C,!1,function(t){a("AgmQ")},null,null).exports,_=a("TXmL");u.default.config.productionTip=!1,u.default.use(_.a),u.default.use(v.a),u.default.use(h.a),u.default.use(m.a),u.default.use(l.a),u.default.use(o.a),u.default.use(n.a);var x={"zh-CN":{switchLangTitle:"简体中文",imgWidth:"宽度",imgHeight:"高度",fileName:"图片名",saveImgBtn:"保存图片",downloadImgBtn:"下载图片",clearCanvasBtn:"清空画布",thumbnailPic:"缩略图",canvas:"画布",compositePic:"合成图"},"zh-TW":{switchLangTitle:"繁体中文",imgWidth:"寬度",imgHeight:"高度",fileName:"圖片名",saveImgBtn:"保存圖片",downloadImgBtn:"下載圖片",clearCanvasBtn:"清空畫布",thumbnailPic:"縮略圖",canvas:"畫布",compositePic:"合成圖"},"en-US":{switchLangTitle:"EN",imgWidth:"Width",imgHeight:"Height",fileName:"Picture Name",saveImgBtn:"Save",downloadImgBtn:"Download",clearCanvasBtn:"Clear",thumbnailPic:"Thumbnail",canvas:"Canvas",compositePic:"Compositing"}},b=new _.a({locale:"zh",messages:{zh:x["zh-CN"],tw:x["zh-TW"],en:x["en-US"]}});new u.default({el:"#app",i18n:b,template:"<App/>",components:{App:I}})},"P+a9":function(t,e){},"U/ZW":function(t,e){},"X+ky":function(t,e){},jAzQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.06dc04b5c5ccfdac1000.js.map