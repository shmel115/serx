(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{443:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"login__content"},[n("form",{staticClass:"login__form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("div",{staticClass:"login__form-title"},[t._v("Авторизация")]),n("div",{staticClass:"login__row"},[n("app-input",{attrs:{title:"Логин",icon:"user"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),n("div",{staticClass:"login__row"},[n("app-input",{attrs:{title:"Пароль",icon:"key",type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),t._m(0)])])])};s._withStripped=!0;var r=n(371);function a(t,e,n,s,r,a,i){try{var o=t[a](i),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(s,r)}var i={components:{appInput:function(){return n.e(4).then(n.bind(null,451))}},data:function(){return{user:{name:"",password:""}}},methods:{login:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.post("/login",this.user);case 3:e=t.sent,n=e.data.token,localStorage.setItem("token",n),r.a.defaults.headers.Authorization="Bearer ".concat(n),this.$router.replace("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),alert(t.t0.message);case 13:case"end":return t.stop()}},t,this,[[0,10]])}),function(){var e=this,n=arguments;return new Promise(function(s,r){var i=t.apply(e,n);function o(t){a(i,s,r,o,u,"next",t)}function u(t){a(i,s,r,o,u,"throw",t)}o(void 0)})});return function(){return e.apply(this,arguments)}}()}},o=n(7),u=Object(o.a)(i,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login__btn"},[e("button",{staticClass:"login__send-data",attrs:{type:"submit"}},[this._v("Отправить")])])}],!1,null,null,null);u.options.__file="src/admin/components/pages/login.vue";e.default=u.exports}}]);