import Vue from "vue"
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./router"  //默认引入的是router里面的文件index.js

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
	el: '#app',
	render: h => h(App),
	router: router
})