<template>
  <div>
    <StudentCom name="李四" :age="22" />
  </div>
</template>

<script>
import StudentCom from "./components/StudentCom.vue";
export default {
  name: "App",
  components: { StudentCom },
};
</script>

