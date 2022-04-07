<template>
  <div class="SchoolCom">
    <div>{{ name }}</div>
    <div>{{ address }}</div>
    <button @click="showCon()">点击我显示内容</button>
  </div>
</template>

<script>
// import { hunhe1, hunhe2 } from "../mixin";

export default {
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  //   mixins: [hunhe1, hunhe2],
};
</script>

<style>
</style>