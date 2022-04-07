<template>
  <div>
    <h1 v-text="msg" ref="h1"></h1>
    <button @click="showDOM" ref="btn">点击我输出上方的showdom</button>
    <SchoolCom ref="SchoolCom" />
  </div>
</template>

<script>
import SchoolCom from "./components/SchoolCom.vue";
export default {
  name: "App",
  components: { SchoolCom },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showDOM() {
      // 给元素打标识
      console.log(this.$refs);
      console.log(this.$refs.h1);  //DOM
      console.log(this.$refs.btn);  //DOM
      console.log(this.$refs.SchoolCom); //vc
    },
  },
};
</script>

