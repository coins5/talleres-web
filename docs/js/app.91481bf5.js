(function(e){function t(t){for(var r,n,s=t[0],A=t[1],i=t[2],u=0,d=[];u<s.length;u++)n=s[u],o[n]&&d.push(o[n][0]),o[n]=0;for(r in A)Object.prototype.hasOwnProperty.call(A,r)&&(e[r]=A[r]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],r=!0,s=1;s<l.length;s++){var A=l[s];0!==o[A]&&(r=!1)}r&&(a.splice(t--,1),e=n(n.s=l[0]))}return e}var r={},o={app:0},a=[];function n(t){if(r[t])return r[t].exports;var l=r[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=r,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(l,r,function(t){return e[t]}.bind(null,r));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/talleres-web/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],A=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var c=A;a.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"034f":function(e,t,l){"use strict";var r=l("64a9"),o=l.n(r);o.a},1057:function(e,t){e.exports="data:image/png;base64,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"},"56d7":function(e,t,l){"use strict";l.r(t);l("cadf"),l("551c"),l("f751"),l("097d");var r=l("2b0e"),o=l("8a03"),a=l.n(o),n=(l("5abe"),function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("router-view")],1)}),s=[],A=(l("034f"),l("2877")),i={},c=Object(A["a"])(i,n,s,!1,null,null,null),u=c.exports,d=l("8c4f"),D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:l("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},b=[],v=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"hello"},[l("h1",[e._v(e._s(e.msg))]),e._m(0),l("h3",[e._v("Installed CLI Plugins")]),e._m(1),l("h3",[e._v("Essential Links")]),e._m(2),l("h3",[e._v("Ecosystem")]),e._m(3)])},f=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),l("br"),e._v("\n    check out the\n    "),l("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[l("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),l("li",[l("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),l("li",[l("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[l("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),l("li",[l("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),l("li",[l("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),l("li",[l("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),l("li",[l("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",[l("li",[l("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),l("li",[l("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),l("li",[l("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),l("li",[l("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),l("li",[l("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],p={name:"HelloWorld",props:{msg:String}},m=p,g=(l("7310"),Object(A["a"])(m,v,f,!1,null,"e061bc90",null)),_=g.exports,h={name:"home",components:{HelloWorld:_}},w=h,T=Object(A["a"])(w,D,b,!1,null,null,null),E=T.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"columns is-mobile is-centered"},[r("div",{staticClass:"column is-half"},[r("br"),r("br"),r("br"),r("div",{staticClass:"has-text-centered"},[r("img",{attrs:{src:l("1057"),alt:"UPC"}})]),r("br"),r("br"),r("form",[r("b-field",{attrs:{label:"Usuario"}},[r("b-input",{attrs:{placeholder:"Usuario"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),r("b-field",{attrs:{label:"Password"}},[r("b-input",{attrs:{placeholder:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("br"),r("div",{staticClass:"level"},[r("div",{staticClass:"level-left"}),r("div",{staticClass:"level-right"},[r("b-button",{attrs:{type:"is-primary","native-type":"submit"},on:{click:e.login}},[e._v("Ingresar")])],1)])],1)])])},k=[],M={data:function(){return{user:"",password:""}},methods:{login:function(e){e.preventDefault();var t={user:this.user,password:this.password};return console.log(t),!1}}},y=M,L=Object(A["a"])(y,C,k,!1,null,null,null),O=L.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nav",{staticClass:"level"},[r("div",{staticClass:"level-left"},[r("img",{attrs:{src:l("1057"),width:"64"}}),r("div",{staticClass:"is-size-4"},[e._v("\n        Alumno\n      ")])]),r("div",{staticClass:"level-right"},[r("p",{staticClass:"level-item"},[r("b-dropdown",{attrs:{"aria-role":"list","mobile-modal":!1}},[r("b-button",{attrs:{slot:"trigger",type:"is-primary",outlined:""},slot:"trigger"},[r("span",{staticStyle:{"vertical-align":"top"}},[e._v(e._s(e.alumno.nombre))]),r("b-icon",{attrs:{icon:"menu-down"}})],1),r("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(t){return e.logout()}}},[r("div",{staticClass:"media"},[r("b-icon",{staticClass:"media-left",attrs:{icon:"power"}}),r("div",{staticClass:"media-content"},[r("h3",[e._v("Salir")])])],1)])],1)],1)])]),r("div",{staticClass:"columns is-mobile is-centered"},[r("div",{staticClass:"column"},[r("br"),r("div",{directives:[{name:"show",rawName:"v-show",value:e.talleresFromAlumno.length>0,expression:"talleresFromAlumno.length > 0"}]},[r("div",{staticClass:"is-size-5"},[e._v("\n          Talleres matriculados\n        ")]),r("br"),r("b-table",{attrs:{data:e.talleresFromAlumno},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-table-column",{attrs:{field:"codigo_taller",label:"ID",width:"40",numeric:""}},[e._v("\n              "+e._s(t.row.codigo_taller)+"\n            ")]),r("b-table-column",{attrs:{field:"nombre_taller",label:"Nombre taller"}},[e._v("\n              "+e._s(t.row.nombre_taller)+"\n            ")]),r("b-table-column",{attrs:{field:"tipoTaller",label:"Tipo de taller"}},[e._v("\n              "+e._s(t.row.tipoTaller)+"\n            ")]),r("b-table-column",{attrs:{field:"nombre_docente",label:"Nombre de docente"}},[e._v("\n              "+e._s(t.row.nombre_docente)+"\n            ")]),r("b-table-column",{attrs:{field:"eval1",label:"Eval 1",width:"80",numeric:""}},[e._v("\n              "+e._s(parseFloat(t.row.eval1))+"\n            ")]),r("b-table-column",{attrs:{field:"eval2",label:"Eval 2",width:"80",numeric:""}},[e._v("\n              "+e._s(parseFloat(t.row.eval2))+"\n            ")]),r("b-table-column",{attrs:{field:"evalFinal",label:"Eval final",width:"80",numeric:""}},[e._v("\n              "+e._s(parseFloat(t.row.evalFinal))+"\n            ")]),r("b-table-column",{attrs:{field:"promedio",label:"Promedio",width:"80",numeric:""}},[e._v("\n              "+e._s((parseFloat(t.row.eval1)+parseFloat(t.row.eval2)+parseFloat(t.row.evalFinal))/3)+"\n            ")])]}}])}),r("br"),r("br"),r("br")],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.draftTalleres.length>0,expression:"draftTalleres.length > 0"}]},[r("div",{staticClass:"is-size-5"},[e._v("\n          Matriculando en talleres\n        ")]),r("br"),r("b-table",{attrs:{data:e.draftTalleres},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-table-column",{attrs:{field:"codigo_taller",label:"ID",width:"40",numeric:""}},[e._v("\n              "+e._s(t.row.codigo_taller)+"\n            ")]),r("b-table-column",{attrs:{field:"nombre_taller",label:"Nombre taller"}},[e._v("\n              "+e._s(t.row.nombre_taller)+"\n            ")]),r("b-table-column",{attrs:{field:"tipoTaller",label:"Tipo de taller"}},[e._v("\n              "+e._s(t.row.tipoTaller)+"\n            ")]),r("b-table-column",{attrs:{field:"nombre_docente",label:"Nombre de docente"}},[e._v("\n              "+e._s(t.row.nombre_docente)+"\n            ")]),r("b-table-column",{attrs:{label:"Acciones"}},[r("b-button",{attrs:{size:"is-small",type:"is-danger",outlined:"","icon-left":"delete"},on:{click:function(l){return e.drop(t.index)}}},[e._v("\n                  Borrar\n              ")])],1)]}}])}),r("br"),r("br"),r("div",{staticClass:"level"},[r("div",{staticClass:"level-left"}),r("div",{staticClass:"level-right"},[r("b-button",{attrs:{type:"is-primary"},on:{click:function(t){return e.joinAll()}}},[e._v("Aceptar")])],1)]),r("br")],1),r("div",{staticClass:"is-size-5"},[e._v("\n        Talleres disponibles\n      ")]),r("br"),r("b-table",{attrs:{data:e.talleres},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-table-column",{attrs:{field:"codigo_taller",label:"ID",width:"40",numeric:""}},[e._v("\n            "+e._s(t.row.codigo_taller)+"\n          ")]),r("b-table-column",{attrs:{field:"nombre_taller",label:"Nombre taller"}},[e._v("\n            "+e._s(t.row.nombre_taller)+"\n          ")]),r("b-table-column",{attrs:{field:"tipoTaller",label:"Tipo de taller"}},[e._v("\n            "+e._s(t.row.tipoTaller)+"\n          ")]),r("b-table-column",{attrs:{field:"nombre_docente",label:"Nombre de docente"}},[e._v("\n            "+e._s(t.row.nombre_docente)+"\n          ")]),r("b-table-column",{attrs:{label:"Acciones"}},[r("b-button",{directives:[{name:"show",rawName:"v-show",value:e.inUse(t.row.codigo_taller),expression:"inUse(props.row.codigo_taller)"}],attrs:{size:"is-small",type:"is-info",outlined:"","icon-left":"plus"},on:{click:function(l){return e.join(t.row)}}},[e._v("\n                Unirme\n            ")])],1)]}}])})],1)])])},U=[],R=(l("7514"),l("bc3a")),S=l.n(R),G="http://localhost:2193",j="".concat(G,"/getTalleres"),N="".concat(G,"/createMatricula"),H="".concat(G,"/getAlumno/{codigo}"),x="".concat(G,"/alumno/{codigo}/getTalleres"),I="".concat(G,"/getDocente/{codigo}"),J="".concat(G,"/docente/{codigo}/getTalleres"),K="".concat(G,"/taller/{codigo}/getAlumnos"),Q={GET_TALLERES:j,CREATE_MATRICULA:N,GET_TALLERES_FROM_ALUMNO:function(e){return x.replace("{codigo}",e)},GET_ALUMNO:function(e){return H.replace("{codigo}",e)},GET_DOCENTE:function(e){return I.replace("{codigo}",e)},GET_TALLERES_FROM_DOCENTE:function(e){return J.replace("{codigo}",e)},GET_ALUMNOS_FROM_TALLER:function(e){return K.replace("{codigo}",e)}},B=l("2ef0"),z=l.n(B),Z={mounted:function(){this.loadData()},data:function(){return{alumno:{},draftTalleres:[],talleresFromAlumno:[],talleres:[],columns:[{field:"codigo_taller",label:"ID",width:"40",numeric:!0},{field:"nombre_taller",label:"Taller"},{field:"tipoTaller",label:"Tipo"},{field:"nombre_docente",label:"Docente"}]}},methods:{loadData:function(){var e=this;S.a.get(Q.GET_ALUMNO(this.$route.params.codigo)).then(function(t){return e.alumno=t.data.rows[0],S.a.get(Q.GET_TALLERES_FROM_ALUMNO(e.$route.params.codigo))}).then(function(t){return e.talleresFromAlumno=t.data.rows,S.a.get(Q.GET_TALLERES)}).then(function(t){e.talleres=t.data.rows}).catch(function(e){return console.log(e.response)})},inUse:function(e){var t=void 0==z.a.find(this.talleresFromAlumno,function(t){return t.codigo_taller==e}),l=void 0==z.a.find(this.draftTalleres,function(t){return t.codigo_taller==e});return t&&l},join:function(e){this.draftTalleres.push(e),console.log(e)},drop:function(e){this.draftTalleres.splice(e,1),console.log(e)},joinAll:function(){var e=this,t=this.draftTalleres.map(function(t){return{codigo_alumno:e.$route.params.codigo,codigo_taller:t.codigo_taller}});console.log(t),this.recursiveCreateMatricula(t)},recursiveCreateMatricula:function(e){var t=this,l=e.pop();void 0!==l?this.createMatricula(l.codigo_alumno,l.codigo_taller).then(function(l){return t.recursiveCreateMatricula(e)}).catch(function(l){return t.recursiveCreateMatricula(e)}):(this.draftTalleres.length=0,S.a.get(Q.GET_TALLERES_FROM_ALUMNO(this.$route.params.codigo)).then(function(e){t.talleresFromAlumno=e.data.rows}).catch(function(e){return console.log(e.response)}))},createMatricula:function(e,t){return S.a.post(Q.CREATE_MATRICULA,{codigo_alumno:e,codigo_taller:t})},logout:function(){console.log("logout")}}},P=Z,Y=Object(A["a"])(P,F,U,!1,null,null,null),X=Y.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nav",{staticClass:"level"},[r("div",{staticClass:"level-left"},[r("img",{attrs:{src:l("1057"),width:"64"}}),r("div",{staticClass:"is-size-4"},[e._v("\n        Profesor\n      ")])]),r("div",{staticClass:"level-right"},[r("p",{staticClass:"level-item"},[r("b-dropdown",{attrs:{"aria-role":"list","mobile-modal":!1}},[r("b-button",{attrs:{slot:"trigger",type:"is-primary",outlined:""},slot:"trigger"},[r("span",{staticStyle:{"vertical-align":"top"}},[e._v(e._s(e.docente.nombre))]),r("b-icon",{attrs:{icon:"menu-down"}})],1),r("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(t){return e.logout()}}},[r("div",{staticClass:"media"},[r("b-icon",{staticClass:"media-left",attrs:{icon:"power"}}),r("div",{staticClass:"media-content"},[r("h3",[e._v("Salir")])])],1)])],1)],1)])]),r("div",{staticClass:"columns is-mobile is-centered"},[r("div",{staticClass:"column"},[r("br"),r("div",[r("div",{staticClass:"is-size-5"},[e._v("\n          Talleres\n        ")]),r("b-table",{attrs:{data:e.talleres},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-table-column",{attrs:{field:"codigo",label:"ID",width:"40",numeric:""}},[e._v("\n              "+e._s(t.row.codigo)+"\n            ")]),r("b-table-column",{attrs:{field:"nombre",label:"Nombre taller"}},[e._v("\n              "+e._s(t.row.nombre)+"\n            ")]),r("b-table-column",{attrs:{field:"tipoTaller",label:"Tipo de taller"}},[e._v("\n              "+e._s(t.row.tipoTaller)+"\n            ")]),r("b-table-column",{attrs:{field:"alumnos",label:"Alumnos",width:"80",numeric:""}},[e._v("\n              "+e._s(t.row.alumnos)+"\n            ")]),r("b-table-column",{attrs:{field:"acciones",label:"Acciones",width:"80",numeric:""}},[r("b-button",{attrs:{size:"is-small",type:"is-info",outlined:"","icon-left":"eye"},on:{click:function(l){return e.viewTaller(t.row.codigo)}}},[e._v("\n                  ver\n              ")])],1)]}}])}),r("br"),r("br"),r("br"),r("br")],1),r("div",{staticClass:"is-size-5"},[e._v("\n        Talleres disponibles\n      ")]),r("br")])])])},W=[],V={mounted:function(){this.loadData()},data:function(){return{docente:{},talleres:[]}},methods:{loadData:function(){var e=this;S.a.get(Q.GET_DOCENTE(this.$route.params.codigo)).then(function(t){return e.docente=t.data.rows[0],S.a.get(Q.GET_TALLERES_FROM_DOCENTE(e.$route.params.codigo))}).then(function(t){console.log(t.data.rows),e.talleres=t.data.rows}).catch(function(e){return console.log(e,e.response)})},viewTaller:function(e){S.a.get(Q.GET_ALUMNOS_FROM_TALLER(e)).then(function(e){return console.log(e.data.rows)})},logout:function(){console.log("logout")}}},$=V,ee=Object(A["a"])($,q,W,!1,null,null,null),te=ee.exports;r["default"].use(d["a"]);var le=new d["a"]({routes:[{path:"/",name:"home",component:E},{path:"/login",name:"login",component:O},{path:"/alumno/:codigo",name:"Alumno",component:X},{path:"/profesor/:codigo",name:"Profesor",component:te}]});r["default"].config.productionTip=!1,r["default"].use(a.a),new r["default"]({router:le,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,l){},7310:function(e,t,l){"use strict";var r=l("fa7b"),o=l.n(r);o.a},cf05:function(e,t,l){e.exports=l.p+"img/logo.82b9c7a5.png"},fa7b:function(e,t,l){}});
//# sourceMappingURL=app.91481bf5.js.map