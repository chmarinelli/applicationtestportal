import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment';
import "@/core/filters";
import axiosInterceptorsSetup from "@/core/interceptors/axios-interceptor";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VeeValidate from "vee-validate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VeeValidate,  { fieldsBagName: "veeFields" });
axiosInterceptorsSetup();

moment.locale("es-do");

Vue.mixin({
  methods: {
    isValid(name: string, items: any) {
      if (items[name] && (items[name].validated || items[name].dirty)) {
        return !this.$validator.errors.has(name);
      }
      return null;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
