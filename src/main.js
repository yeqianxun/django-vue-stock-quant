import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { Icon } from "ant-design-vue";
import Antd from "ant-design-vue";
import router from "./router/index.js";
import "./style/index.scss";
import "ant-design-vue/dist/antd.min.css";

import AliIconFont from "./assets/iconfont/iconfont.js";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: AliIconFont,
});

Vue.component("custom-icon", IconFont);

Vue.use(Antd);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
