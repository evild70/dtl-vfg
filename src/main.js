// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueFormGenerator from 'vue-form-generator';

import fieldStatictext from './fieldStatictext.vue';
Vue.component('fieldStatictext', fieldStatictext);

Vue.use(VueFormGenerator);
import App from './App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
