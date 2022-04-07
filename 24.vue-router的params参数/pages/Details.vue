<template>
  <div>
    <p>消息编号：{{ $route.params.id }}</p>
    <p>消息名字：{{ $route.params.name }}</p>
  </div>
</template>

<script>
export default {
  name: "Details",
//   mounted() {
//     console.log(this.$route);
//   },
};
</script>

<style>
</style>