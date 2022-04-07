<template>
  <div class="box">
    <h1>{{ title }}分类</h1>
    <slot name="first">我是一些默认值，当使用者没有使用的时候</slot>
    <slot name="second">我是具名插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["items", "title"],
  data() {
    return {};
  },
};
</script> 

<style scoped>
.box {
  width: 300px;
  height: 400px;
  background-color: skyblue;
}
h1 {
  background-color: orange;
  text-align: center;
}
</style>