<template>
  <div class="todo-footer" v-show="Total">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ DoneTotal }}</span> / 全部{{ Total }}
    </span>
    <button class="btn btn-danger" @click="checkAllTodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos","checkAllTodo"],
  computed: {
    Total() {
      return this.todos.length;
    },
    DoneTotal() {
      return this.todos.reduce((pre, cur) => {
        return pre + (cur.done ? 1 : 0);
      }, 0);
    },
    //控制全选框
    isAll: {
      // （list控制footer）
      get() {
        // (允许套娃)
        return this.Total === this.DoneTotal && this.Total > 0;
      },
      //   footer控制list
      set(value) {
        this.todos.forEach((todo) => {
          todo.done = value;
        });
      },
    },
  },
};
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
