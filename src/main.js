import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import "@aws-amplify/ui-vue";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import Vuelidate from 'vuelidate'
import { Auth } from '@aws-amplify/auth'

Amplify.configure(awsconfig);

Auth.configure(awsconfig)
Vue.config.productionTip = false
Vue.use(Vuelidate)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
