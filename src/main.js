import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
//import Global from "@/components/_globals";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  //Global,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
