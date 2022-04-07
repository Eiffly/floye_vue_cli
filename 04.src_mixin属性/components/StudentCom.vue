<template>
  <div class="StudentCom">
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="showCon()">点击我显示内容</button>
  </div>
</template>

<script>
// import { hunhe1, hunhe2 } from "../mixin";

export default {
  name: "StudentCom",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  // mixins: [hunhe1, hunhe2],
};
</script>

<style>
.StudentCom {
  background-color: pink;
}
</style>