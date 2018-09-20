
import '@webcomponents/custom-elements/src/native-shim';
import Vue from 'vue'
import App from '../docs/App.vue'

Vue.config.ignoredElements = [
  'p-card'
];

new Vue({
  el: '#app',
  render: h => h(App)
})
