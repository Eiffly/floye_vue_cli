<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!-- 第一种写法 模板字符串-->
        <!-- <router-link :to="`/home/message/details?id=${m.id}&name=${m.name}`"
          >消息{{ m.name }}</router-link
        > -->

        <!--第二种写法 对象写法-->
        <router-link
          :to="{
            path: '/home/message/details',
            query: {
              id: m.id,
              name: m.name,
            },
          }"
          >消息{{ m.name }}</router-link
        >
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
        { id: "001", name: "001" },
        { id: "002", name: "002" },
        { id: "003", name: "003" },
      ],
    };
  },
  components: { Details },
};
</script>