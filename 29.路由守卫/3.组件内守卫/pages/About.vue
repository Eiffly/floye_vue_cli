<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  //进入守卫：通过【路由规则】，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("组件内路由守卫--进入", to, from);
    next();
  },
  //离开守卫：通过【路由规则】，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("组件内路由守卫--离开", to, from);
    next();
  },
};
</script>