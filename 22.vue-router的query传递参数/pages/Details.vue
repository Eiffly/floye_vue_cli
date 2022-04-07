<template>
  <div>
    <p>消息编号：{{ $route.query.id }}</p>
    <p>消息名字：{{ $route.query.name }}</p>
  </div>
</template>

<script>
export default {
  name: "Details",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>