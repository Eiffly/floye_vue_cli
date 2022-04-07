<template>
  <div class="SchoolCom">
    <div>{{ name }}</div>
    <div>{{ address }}</div>
  </div>
</template>

<script>
// 这里不用再去另外写，因为：
// const school = Vue.extend(options) 可简写为：const school = options

export default {
  name: "SchoolCom",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
};
</script>

<style>
.SchoolCom {
  background-color: pink;
}
</style>