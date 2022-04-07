<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color: red">Count组件求和为：{{ getAll }}</h2>
    <h2>列表中第一个人的名字是：{{ getFirstName }}</h2>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addWangPerson">添加姓王的人</button>
    <button @click="addServerPerson">添加服务器中的人</button>
    <ul>
      <li v-for="p in getAllPerson" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    getAll() {
      return this.$store.state.sum.sum;
    },
    getAllPerson() {
      return this.$store.state.person.personList;
    },
    getFirstName() {
      return this.$store.getters["person/getFirstPerson"];
    },
  },
  methods: {
    addPerson() {
      if (this.name === "") return alert("输入的姓名不能为空！");
      // this.$store.dispatch("person/addPerson", this.name);
      this.$store.commit("person/ADD_PERSONS", this.name);
      this.name = "";
    },

    addWangPerson() {
      if (this.name === "") return alert("输入的姓名不能为空！");
      this.$store.dispatch("person/addWangPerson", this.name);
      this.name = "";
    },
    addServerPerson() {
      this.$store.dispatch("person/addServerPerson", this.name);
    },
  },
};
</script>

<style>
input {
  margin-right: 5px;
}
</style>