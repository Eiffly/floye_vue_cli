
export default {
    namespaced: true,//开启命名空间
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2 === 1) {
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
      
    },
    mutations: {
        JIA(state, value) {
            console.log("mutations里面JIA被调用了", state, value);
            state.sum += value
        },
        JIAN(state, value) {
            console.log("mutations里面JIAN被调用了", state, value);
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: 'USTB',
        subject: "SC",
    },
    getters: {
        getTenSum(state) {
            // console.log(value);
            return state.sum * 10
        }
    }
}

