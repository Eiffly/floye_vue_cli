<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!-- 第一种写法 模板字符串-->
        <!-- <router-link :to="`/home/message/details/${m.id}/${m.name}`"
          >消息{{ m.name }}</router-link
        > -->

        <!--第二种写法 对象写法-->
        <router-link
          :to="{
            name: 'xijie',
            params: {
              id: m.id,
              name: m.name,
            },
          }"
          >{{ m.name }}</router-link
        >
        <button @click="pushMethod(m)">push</button>
        <button @click="replaceMethod(m)">replace</button>
      </li>
    </ul>
    <hr />
    <router-view>
      <Details />
    </router-view>
  </div>
</template>

<script>
import Details from "./Details.vue";
export default {
  name: "Message",
  data() {
    return {
      messages: [
        { id: "001", name: "消息001" },
        { id: "002", name: "消息002" },
        { id: "003", name: "消息003" },
      ],
    };
  },
  methods: {
    pushMethod(m) {
      // push传入的参数和to是一样的
      this.$router.push({
        name: "xijie",
        params: {
          id: m.id,
          name: m.name,
        },
      });
    },
    replaceMethod(m) {
      // push传入的参数和to是一样的
      this.$router.replace({
        name: "xijie",
        params: {
          id: m.id,
          name: m.name,
        },
      });
    },
  },
  beforeDestroy() {
    console.log("Message即将被销毁了");
  },

  components: { Details },
};
</script>