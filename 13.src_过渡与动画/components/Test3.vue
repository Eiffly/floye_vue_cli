//用过度的形式去写 
<template>
  <div>
    <button @click="isTrue = !isTrue">显示/隐藏</button>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutLeft"
    >
      <h1 v-show="!isTrue" key="1">hello world</h1>
      <h1 v-show="isTrue" key="2">hello world</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test3",
  data() {
    return {
      isTrue: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: greenyellow;
  /* transition: 9s linear; */
}
/* .hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
} */
</style>