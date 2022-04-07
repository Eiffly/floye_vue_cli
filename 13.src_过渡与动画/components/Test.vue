//用动画的形式去写 
<template>
  <div>
    <button @click="isTrue = !isTrue">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 class="hello" v-show="isTrue">hello world</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isTrue: true,
    };
  },
};
</script>

<style scoped>
.hello {
  background-color: greenyellow;
}
.hello-enter-active {
  animation: move 2s linear;
}
.hello-leave-active {
  animation: move 1s linear reverse;
}
@keyframes move {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>