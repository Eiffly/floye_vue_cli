<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  // 与文件最好是保持一致
  name: "SchoolCom",
  data() {
    return {
      name: "尚硅谷",
      address: "北京昌平",
    };
  },
  methods: {
    haha(_, e) {
      console.log("我是学校，我收到的学生姓名是" + e);
    },
  },
  mounted() {
    this.pid = pubsub.subscribe("getStudentName", this.haha); //订阅消息，这里也可以使用箭头函数来实现
    // this.$bus.$on("getStudentName", this.haha);
  },
  beforeDestroy() {
    pubsub.unsubscribe(pid);
    // this.$bus.$off("getStudentName");
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>