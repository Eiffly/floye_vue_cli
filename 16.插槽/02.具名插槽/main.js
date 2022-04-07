//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'

//关闭Vue的生产提示
Vue.use(vueResource)
Vue.config.productionTip = false

//应用（使用）插件
//创建vm
new Vue({
	el: '#app',
	beforeCreate() {
		Vue.prototype.$bus = this
	},
	render: h => h(App)
})