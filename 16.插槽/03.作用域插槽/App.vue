<template>
  <div id="app">
    <div class="container">
      <Category title="美食">
        <template slot-scope="{ food }">
          <ul>
            <li v-for="f in food" :key="f">{{ f }}</li>
          </ul>
        </template>
        <!-- 生成的是ul列表 -->
      </Category>
      <Category title="游戏">
        <template slot-scope="{ game }">
          <ol>
            <li v-for="g in game" :key="g">{{ g }}</li>
          </ol>
        </template>
      </Category>

      <Category title="电影">
        <template slot-scope="{ film }">
          <h4 v-for="f in film" :key="f">{{ f }}</h4>
        </template>
      </Category>
    </div>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  margin: 100px auto;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
a {
  margin: 0 auto;
  text-align: center;
}
.juzhong {
  display: flex;
  justify-content: space-around;
}
</style>


