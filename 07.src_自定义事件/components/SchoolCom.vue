<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showSchoolName">点我提示学校名</button>
  </div>
</template>

<script>
export default {
  // 与文件最好是保持一致
  name: "SchoolCom",
  props: ["getSchoolName"],
  data() {
    return {
      name: "尚硅谷",
      address: "北京昌平",
    };
  },
  methods: {
    showSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>