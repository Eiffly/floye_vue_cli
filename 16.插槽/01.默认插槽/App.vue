<template>
  <div id="app">
    <div class="container">
      <Category title="美食" :items="food">
        <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="美食的图片" />
      </Category>
      <Category title="游戏" :items="game">
        <ul>
          <li v-for="(g, index) in game" :key="index">{{ g }}</li>
        </ul>
      </Category>
      <Category title="电影" :items="film">
        <video
          controls
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        ></video>
      </Category>
    </div>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      food: ["火锅", "烧烤", "小龙虾", "牛排"],
      game: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      film: ["《东京教父》", "《你的名字》", "《青蛇劫起》", "《大鱼海棠》"],
    };
  },
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
</style>


