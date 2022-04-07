import Vue from "vue"
import Vuex from "vuex"
import sum from './sum'
import person from './person'
Vue.use(Vuex)
// 常见求和Sum相关的代码



export default new Vuex.Store({
    modules: {
        sum,
        person
    }
})