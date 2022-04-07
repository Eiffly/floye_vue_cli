<template>
  <div id="APP">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
//引入组件
import School from "./components/SchoolCom.vue";
import Student from "./components/StudentCom.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>


<style >
#APP {
  background-color: pink;
  padding: 5px;
}
</style>