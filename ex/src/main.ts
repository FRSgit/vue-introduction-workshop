import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules';

extend('email', email);
extend('required', required);


Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
