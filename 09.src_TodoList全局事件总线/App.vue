<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList
          :todos="todos"
          :changeCheck="changeCheck"
          :deleteTodo="deleteTodo"
        />
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")),
      // todos: [
      //   { id: "001", title: "撸代码", done: true },
      //   { id: "002", title: "画画", done: false },
      //   { id: "003", title: "看演唱会", done: true },
      // ],
    };
  },
  methods: {
    // 数据在哪里，操作数据的方法就在哪里
    //添加待办
    addTodo(e) {
      this.todos.unshift(e);
      // console.log("我收到了：" + e);
    },
    // 勾选与取消勾选
    changeCheck(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //删除某一个特定的事件
    //方法一：使用过滤器
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    //使用findIndex(不可取，因为diff标识的并不一致，id必须是唯一的)
    /*  deleteTodo(id) {
      let index = this.todos.findIndex((todo) => todo.id !== id);
      this.todos.splice(index, 1);
    }, */
    //清除掉所有的已完成任务
    checkAllTodo() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(newValue, oldValue) {
        localStorage.setItem("todos", JSON.stringify(newValue));
      },
    },
  },
  mounted() {
    this.$bus.$on("changeCheck", this.changeCheck);
    this.$bus.$on("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off("changeCheck");
    this.$bus.$off("deleteTodo");
  },
};
</script>


<style >
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>