import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'The field "{_field_}" is required'
});
extend('email', email);

Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
