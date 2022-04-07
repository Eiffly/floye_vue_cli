import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const actions = {
    /*   jia(context, value) {
          // console.log("actions里面jia被调用了", context, value);
          context.commit("JIA", value)
      },
      jian(context, value) {
          console.log("actions里面jian被调用了", context, value);
      }, */
    jiaOdd(context, value) {
        if (value % 2 === 1) {
            context.commit("JIA", value)
        }
        console.log("actions里面jiaOdd被调用了", context, value);
    },
    jiaWait(context, value) {
        console.log("actions里面jiaWait被调用了", context, value);
        setTimeout(() => {
            context.commit("JIA", value)
        }, 3000);
    },
}
const mutations = {
    JIA(state, value) {
        console.log("mutations里面JIA被调用了", state, value);
        state.sum += value
    },
    JIAN(state, value) {
        console.log("mutations里面JIAN被调用了", state, value);
        state.sum -= value
    },

}
const state = {
    sum: 0
}
// getters里面必须要有返回值
const getters = {
    getTenSum(state) {
        // console.log(value);
        return state.sum * 10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})