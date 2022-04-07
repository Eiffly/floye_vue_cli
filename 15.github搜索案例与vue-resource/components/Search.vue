<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWords"
      />&nbsp;
      <button @click="getUserName">Search</button>
    </div>
  </section>
</template>

<script>
// import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyWords: "",
    };
  },

  methods: {
    getUserName() {
      this.$bus.$emit("getUsers", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      //ES6的模板字符串
      this.$http
        .get(`https://api.github.com/search/users?q=${this.keyWords}`)
        .then(
          (response) => {
            this.$bus.$emit("getUsers", {
              isFirst: false,
              isLoading: false,
              errMsg: "",
              users: response.data.items,
            });
          },
          (error) => {
            // console.log(status);
            //请求后更新List的数据
            this.$bus.$emit("getUsers", {
              isLoading: false,
              errMsg: error.message,
              users: [],
            });
          }
        );
    },
  },
};
</script>

<style>
</style>