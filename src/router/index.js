import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/**
 * vue-router3.x.x 报错解决方式
 * info NavigationDuplicated: Avoided redundant navigation to current location
 */
//获取原型对象上的push函数
const originalPush = Router.prototype.push;
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const VueRouterReplace = Router.prototype.replace;
Router.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch((err) => err);
};

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: (resolve) => require(["@/views/index.vue"], resolve),
    },
  ],
});

export default router;
