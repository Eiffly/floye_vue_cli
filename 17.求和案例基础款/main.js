//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'

import store from './store/index.js'


//关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(vueResource)

//应用（使用）插件
//创建vm
new Vue({
	el: '#app',
	store,
	beforeCreate() {
		Vue.prototype.$bus = this
	},
	render: h => h(App)
})