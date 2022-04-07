<template>
  <div id="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentNameToSchool">点我发送姓名给学校</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "StudentCom",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    sendStudentNameToSchool() {
      pubsub.publish("getStudentName", this.name);
      // this.$bus.$emit("getStudentName", this.name);
    },
  },
};
</script>

<style >
#student {
  background-color: blue;
}
</style>