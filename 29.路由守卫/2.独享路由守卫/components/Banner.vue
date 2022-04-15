<template>
  <div>
    <button @click="forward()">前进</button>
    <button @click="back()">后退</button>
    <button @click="go(-3)">后退3步</button>
  </div>
</template>

<script>
// import VueRouter frsom "vue-router";
export default {
  name: "Banner",
  methods: {
    forward() {
      this.$router.forward();
    },
    back() {
      this.$router.back(); //后退
    },

    go(steps) {
      this.$router.go(steps); //可前进也可后退（正数表示前进，负数表示后退）
    },
  },
};
</script>

<style>
</style>