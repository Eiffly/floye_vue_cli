<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div
      v-show="listObj.users.length"
      class="card"
      v-for="user in listObj.users"
      :key="user.login"
    >
      <!-- 下面的src和href记得要动态绑定 -->
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示是不是初次使用 -->
    <h1 v-show="listObj.isFirst">欢迎进行搜索</h1>
    <!-- 展示数据是不是在加载中 -->
    <h1 v-show="listObj.isLoading">加载中.....</h1>
    <!-- 展示数据出现了错误 -->
    <h1 v-show="listObj.errMsg">{{ listObj.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      listObj: {
        isFirst: true, //是否是初次展示
        isLoading: false, //是否是初次展示
        errMsg: "",
        users: [],
      },
    };
  },
  // A组件：接收数据
  mounted() {
    this.$bus.$on("getUsers", (listObj) => {
      this.listObj = { ...this.listObj, ...listObj };
      console.log(this.listObj);
    });
  },
  beforeDestroy() {
    this.$bus.$off("getUsers");
  },
};
</script>

<style>
</style>