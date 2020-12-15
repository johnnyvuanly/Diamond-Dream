(function(t){function e(e){for(var n,i,a=e[0],s=e[1],d=e[2],p=0,l=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(l.length)l.shift()();return u.push.apply(u,d||[]),r()}function r(){for(var t,e=0;e<u.length;e++){for(var r=u[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(u.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},u=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var c=s;u.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("html",[r("div",{attrs:{id:"app"}},[t._m(0),r("h1",[t._v("Diamond Dream")]),r("order",{attrs:{orders:t.orders},on:{"order-added":t.newOrderAdded,"delete-order":t.deleteOrder}}),r("h2",[t._v("Product Catalog")]),t._l(t.products,(function(e){return r("product",{key:e.id,attrs:{product:e,productApiUrl:t.productApiUrl},on:{"product-ordered":t.productOrdered}})}))],2)])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("head",[r("link",{attrs:{rel:"preconnect",href:"https://fonts.gstatic.com"}}),r("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Sacramento&display=swap",rel:"stylesheet"}})])}],i=(r("4de4"),r("7db0"),r("c740"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v(t._s(t.product.productName))]),r("img",{attrs:{src:t.product.image}}),r("p",[t._v(t._s(t.product.description))]),t.product.available?r("p",[t._v("This product is available!")]):r("p",[t._v("*Sorry, this product is not available. Please check back later.")]),r("p",[t._v("Quantity Available: "+t._s(t.product.quantityAvailable))]),r("ul",t._l(t.product.features,(function(e){return r("li",{key:e},[t._v(t._s(e))])})),0),r("div",[r("div",[r("p",[t._v("The maximum quantity you can order is "+t._s(t.product.maxQuantity))]),r("button",{on:{click:function(e){return t.decreaseQuantity(t.product)}}},[t._v("-")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number"},domProps:{value:t.quantity},on:{change:function(e){return t.verifyQuantity(t.product)},input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),r("button",{on:{click:function(e){return t.increaseQuantity(t.product)}}},[t._v("+")])]),r("p",{staticClass:"error"},[t._v(t._s(t.message))])]),r("button",{on:{click:function(e){return t.order(t.product)}}},[t._v("Order")])])}),a=[],s={name:"Product",props:{product:Object,productApiUrl:String},data:function(){return{message:"",quantity:0}},methods:{order:function(t){this.quantity<=0?this.message="Quantity must be more than 0":(this.message="",this.$emit("product-ordered",this.product.id,this.quantity))},decreaseQuantity:function(t){this.message="";var e=this.quantity-1;e<t.minQuantity?this.message="Minimum quantity is "+t.minQuantity:this.quantity=e},increaseQuantity:function(t){this.message="";var e=this.quantity+1;e>t.maxQuantity?this.message="Maximum quantity is "+t.maxQuantity:this.quantity=e},verifyQuantity:function(t){this.message="",this.quantity<t.minQuantity&&(this.messsage="Minimum quantity is "+t.minQuantity,this.quantity=t.minQuantity),this.quantity>t.maxQuantity&&(this.message="Maximum quantity "+t.maxQuantity,this.quantity=t.maxQuantity)}}},d=s,c=(r("d343"),r("2877")),p=Object(c["a"])(d,i,a,!1,null,"6cb8fed0",null),l=p.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[0==t.orders.length?r("p"):r("div",[r("label",[t._v("Your Name:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.customerName,expression:"customerName"}],domProps:{value:t.customerName},on:{input:function(e){e.target.composing||(t.customerName=e.target.value)}}}),r("br"),r("label",[t._v("Your Address:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.customerAddress,expression:"customerAddress"}],domProps:{value:t.customerAddress},on:{input:function(e){e.target.composing||(t.customerAddress=e.target.value)}}}),r("table",[t._m(0),t._l(t.sortedOrdersByName,(function(e){return r("tr",{key:e.product.id},[r("td",[t._v(t._s(e.product.id))]),r("td",[t._v(t._s(e.product.productName)+" ")]),r("td",[t._v(t._s(e.quantity))]),r("td",[r("button",{on:{click:function(r){return t.deleteOrder(e)}}},[t._v("X")])])])}))],2),r("button",{attrs:{id:"orderButton"},on:{click:t.submitOrders}},[t._v("Submit Order")]),r("p",[t._v(t._s(t.message))])])])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Product ID")]),r("th",[t._v("Name")]),r("th",[t._v("Quantity")]),r("th",[t._v("Delete?")])])}],h=(r("99af"),r("b0c0"),r("2909")),v={name:"Order",data:function(){return{message:"",customerName:"",customerAddress:""}},props:{orders:Array},computed:{sortedOrdersByName:function(){var t=Object(h["a"])(this.orders);return t.sort((function(t,e){return t.product.name>e.product.name?-1:1}))}},methods:{deleteOrder:function(t){confirm("Delete your order for ".concat(t.quantity," ").concat(t.product.productName,", are you sure? "))&&this.$emit("delete-order",t)},submitOrders:function(){this.$emit("order-added",this.customerName,this.customerAddress),this.message="Your order has been submitted!"}}},y=v,_=(r("7523"),Object(c["a"])(y,m,f,!1,null,"f87bd51c",null)),b=_.exports,g={name:"App",components:{Product:l,Order:b},data:function(){return{productApiUrl:"",products:[],orders:[]}},mounted:function(){var t=this;this.$diamond_dream_api.getProducts().then((function(e){t.products=e})),this.updateOrders()},methods:{newOrderAdded:function(t,e){var r=this,n={customerName:t,productsOrdered:this.orders,customerAddress:e};console.log(n),this.$order_api.addOrder(n).then((function(t){r.updateOrders()}))},productOrdered:function(t,e){var r=this.products.find((function(e){return e.id==t})),n={product:r,quantity:e},o=this.orders.findIndex((function(e){return e.product.id==t}));-1==o?this.orders.push(n):this.$set(this.orders,o,n)},deleteOrder:function(t){this.orders=this.orders.filter((function(e){return e.product.id!=t.product.id}))},updateOrders:function(){var t=this;this.$order_api.getAllOrders().then((function(e){t.orders=e}))}}},O=g,q=(r("034f"),Object(c["a"])(O,o,u,!1,null,null,null)),x=q.exports,A=r("bc3a"),Q=r.n(A),w={getProducts:function(){return Q.a.get("api/products").then((function(t){return t.data}))}},N="/api/orders",P={getAllOrders:function(){return Q.a.get(N).then((function(t){return t.data}))},addOrder:function(t){return Q.a.post(N,t).then((function(t){return t.data}))}};n["a"].config.productionTip=!1,n["a"].prototype.$diamond_dream_api=w,n["a"].prototype.$order_api=P,new n["a"]({render:function(t){return t(x)}}).$mount("#app")},7523:function(t,e,r){"use strict";r("bc45")},"85ec":function(t,e,r){},bc45:function(t,e,r){},d343:function(t,e,r){"use strict";r("dbd3")},dbd3:function(t,e,r){}});
//# sourceMappingURL=app.f9975d2b.js.map