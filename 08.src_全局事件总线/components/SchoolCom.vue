<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
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
    haha(e) {
      console.log("我是学校，我收到的学生姓名是" + e);
    },
  },
  mounted() {
    this.$bus.$on("getStudentName", this.haha);
  },
  beforeDestroy() {
    this.$bus.$off("getStudentName");
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>