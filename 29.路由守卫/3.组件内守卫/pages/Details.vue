<template>
  <div>
    <p>消息编号：{{ id }}</p>
    <p>消息名字：{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: ["id", "name"],
};
</script>

<style>
</style>