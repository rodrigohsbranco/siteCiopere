import Vue from 'vue'
import App from './App.vue'
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.css';

new Vue({
  el: '#app',
  render: h => h(App)
})
