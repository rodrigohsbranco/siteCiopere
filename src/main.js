import Vue from 'vue'
import App from './App.vue'
import 'popper.js';
import 'bootstrap';
import './assets/app.css';
import JQuery from 'jquery'
window.$ = JQuery

// import FuturaBold from './assets/fontes/Futura-Bold-font.ttf';
// import FuturaLight from './assets/fontes/Futura-Light-font.ttf';
// import OpenSansLight from './assets/fontes/OpenSans-Light.ttf';
// import OpenSansBold from './assets/fontes/OpenSans-Bold.ttf';

new Vue({
  el: '#app',
  render: h => h(App)
})
