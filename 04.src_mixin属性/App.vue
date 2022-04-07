<template>
  <div>
    <StudentCom />
    <SchoolCom />
  </div>
</template>

<script>
import StudentCom from "./components/StudentCom.vue";
import SchoolCom from "./components/SchoolCom.vue";
export default {
  name: "App",
  components: { StudentCom, SchoolCom },
};
</script>

