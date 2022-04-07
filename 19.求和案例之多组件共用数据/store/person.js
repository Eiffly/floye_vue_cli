import { nanoid } from "nanoid";
import axios from "axios";

export default {
    namespaced: true,//开启命名空间
    actions: {
        addPerson(context, value) {
            context.commit("ADD_PERSONS", value);
        },
        addWangPerson(context, value) {
            if (value[0] !== "王") {
                return alert("添加的人必须姓王")
            } else {
                context.state.personList.unshift({ id: nanoid(), name: value })
            }
        },
        addServerPerson(context) {
            axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                (response) => {
                    context.commit('ADD_PERSONS', response.data)
                },
                (error) => {
                    alert(error.message)
                }
            );
        },
    },
    mutations: {
        ADD_PERSONS(state, value) {
            state.personList.unshift({ id: nanoid(), name: value })
        }
    },
    state: {
        personList: [{ id: " 001", name: "张三" }],

    },
    getters: {
        getFirstPerson(state) {
            return state.personList[0].name
        }
    }
}
