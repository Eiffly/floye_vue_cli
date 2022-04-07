<template>
  <div id="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">点我提示学生姓名</button>
  </div>
</template>

<script>
export default {
  name: "StudentCom",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    sendStudentName() {
      // 2.通过点击 emit触发showStudentName事件
      this.$emit("showStudentName", this.name);
    },
  },
};
</script>

<style >
#student {
  background-color: blue;
}
</style>