(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{440:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page skills-page"},[n("div",{staticClass:"title-block"},[n("h1",{staticClass:"title title__skills-page"},[t._v('Блок "Обо мне"')]),!1===t.showAddingForm?n("button",{staticClass:"add-skills-group",on:{click:function(e){t.showAddingForm=!0}}},[t._m(0),n("div",{staticClass:"add-button__title"},[t._v("Добавить группу")])]):t._e()]),n("div",{staticClass:"content-block"},[n("ul",{staticClass:"cards-group"},[t.showAddingForm?n("li",{staticClass:"card-block card-block__skills"},[n("skills-add",{on:{closed:t.handleClose}})],1):t._e(),t._l(t.categories,function(e){return n("li",{key:e.id,staticClass:"card-block card-block__skills"},[n("skills-group",{attrs:{category:e,skills:t.filterSkillsByCategoryId(e.id)}})],1)})],2)])])};r._withStripped=!0;var s=n(135);function i(t,e,n,r,s,i,c){try{var l=t[i](c),o=l.value}catch(t){return void n(t)}l.done?e(o):Promise.resolve(o).then(r,s)}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o={components:{skillsAdd:function(){return n.e(8).then(n.bind(null,445))},skillsGroup:function(){return n.e(15).then(n.bind(null,446))}},data:function(){return{showAddingForm:!1}},computed:c({},Object(s.c)("categories",{categories:function(t){return t.categories}}),Object(s.c)("skills",{skills:function(t){return t.skills}})),methods:c({},Object(s.b)("categories",["fetchCategories"]),Object(s.b)("skills",["fetchSkills"]),{filterSkillsByCategoryId:function(t){return this.skills.filter(function(e){return e.category===t})},handleClose:function(){this.showAddingForm=!1}}),created:function(){var t,e=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.fetchCategories();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),alert("Произошла ошибка призагрузке категорий");case 8:return t.prev=8,t.next=11,this.fetchSkills();case 11:t.next=16;break;case 13:t.prev=13,t.t1=t.catch(8),alert("Произошла ошибка при загрузке скиллов");case 16:case"end":return t.stop()}},t,this,[[0,5],[8,13]])}),function(){var e=this,n=arguments;return new Promise(function(r,s){var c=t.apply(e,n);function l(t){i(c,r,s,l,o,"next",t)}function o(t){i(c,r,s,l,o,"throw",t)}l(void 0)})});return function(){return e.apply(this,arguments)}}()},a=n(7),u=Object(a.a)(o,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"add-icon add-icon__title"},[e("div",{staticClass:"plus-icon plus-icon--small"},[this._v("+")])])}],!1,null,null,null);u.options.__file="src/admin/components/pages/about.vue";e.default=u.exports}}]);