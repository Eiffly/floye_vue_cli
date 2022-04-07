// import { from } from 'core-js/core/array'
import Vue from 'vue'
import App from './App.vue'
import { hunhe1, hunhe2 } from "./mixin"
Vue.mixin(hunhe1)
Vue.mixin(hunhe1)
Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App)
})  