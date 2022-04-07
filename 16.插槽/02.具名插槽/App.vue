<template>
  <div id="app">
    <div class="container">
      <Category title="美食" :items="food">
        <img
          slot="first"
          src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
          alt="美食的图片"
        />
        <a slot="second" href="#">更多游戏</a>
      </Category>

      <Category>
        <template v-slot:first>
          <ul>
            <li v-for="(item, index) in game" :key="index">{{ item }}</li>
          </ul>
        </template>
        <template v-slot:second>
          <a slot="second" href="#">单机游戏</a>
          <a slot="second" href="#">网络游戏</a>
        </template>
      </Category>

      <Category>
        <video
          slot="first"
          controls
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        ></video>
        <div class="juzhong" slot="second">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
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
a {
  margin: 0 auto;
  text-align: center;
}
.juzhong {
  display: flex;
  justify-content: space-around;
}
</style>


