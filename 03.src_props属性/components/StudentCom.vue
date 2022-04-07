<template>
  <div class="StudentCom">
    <div>{{ name }}</div>
    <div>{{ Myage }}</div>
    <button @click="showAge">点我变老！</button>
  </div>
</template>

<script>
// 这里不用再去另外写，因为：
// const school = Vue.extend(options) 可简写为：const school = options

export default {
  name: "StudentCom",
  data() {
    return {
      // name: "张三",
      Myage: this.age,
    };
  },
  methods: {
    showAge() {
      this.Myage++;
    },
  },
  props: {
    name: {
      // required: true, //必要性
      default: "老王", //默认值
    },
    age: {
      type: Number, //类型
      // required: true, //必要性
      default: 19, //默认值
    },
  },
};
</script>

<style>
.StudentCom {
  background-color: pink;
}
</style>