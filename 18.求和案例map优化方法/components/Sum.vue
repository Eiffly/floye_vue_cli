<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大十倍为：{{ getTenSum }}</h1>
    <h1>我在{{ school }}学习{{ subject }}</h1>
    <!-- 下面的select可以下面这样写 v-model.click="n" -->
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>

    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Sum",
  data() {
    return {
      n: 0,
    };
  },
  computed: {
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["getTenSum"]),
  },
  methods: {
    /* increment() {
      //   console.log(this.$store);
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    }, */
    /* incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    }, */
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
};
</script>

<style>
button,
select {
  margin-right: 5px;
}
</style>