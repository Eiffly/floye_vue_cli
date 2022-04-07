<template>
  <div id="APP">
    <div>学生的姓名是{{ studentName }}</div>
    <!-- 第一种方式：通过props获取 -->
    <School :getSchoolName="getSchoolName"></School>
    <!-- 第二种方式：通过 on-emit 实现 -->
    <!-- 1.v-on或者@ 绑定 showStudentName-->
    <!-- <Student v-on:showStudentName="getStudentlName"></Student> -->

    <!-- 第三种方式:通过ref实现 -->
    <Student ref="student"></Student>
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
  data() {
    return {
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("学校名字为：" + name);
    },
    // 3.调用执行回调函数 getStudentlName
    /* getStudentName(name) {
      console.log("学生名字为：" + name);
      this.studentName = name;
      console.log(this);
    }, */
  },
  mounted() {
    // 给student的组件实例对象绑定给一个事件
    this.$refs.student.$on("showStudentName", function (name) {
      console.log("学生名字为：" + name);
      this.studentName = name;
      console.log(this);
    });
  },
};
</script>


<style >
#APP {
  background-color: pink;
  padding: 5px;
}
</style>