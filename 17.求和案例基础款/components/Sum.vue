<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h1>当前求和放大十倍为：{{ this.$store.getters.getTenSum }}</h1>
    <!-- 下面的select可以下面这样写 v-model.click="n" -->
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Sum",
  data() {
    return {
      n: 0,
    };
  },
  methods: {
    increment() {
      //   console.log(this.$store);
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style>
button,
select {
  margin-right: 5px;
}
</style>