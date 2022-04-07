<template>
  <div class="box">
    <h1>{{ title }}</h1>
    <slot :food="food" :game="game" :film="film"
      >我是一些默认值，当使用者没有使用的时候</slot
    >
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
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
.box {
  width: 300px;
  height: 400px;
  background-color: skyblue;
}
h1 {
  background-color: orange;
  text-align: center;
}
</style>