<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="add"
      v-model="title"
    />
  </div>
</template>

<script>
//nanoid是一个函数，可以生成一个全球唯一的id（简易版uuid）
import { nanoid } from "nanoid";

export default {
  name: "MyHeader",
  //接收App传过来的函数
  props: ["AddTodo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      //判断输入内容
      if (!this.title) return alert("请输入内容");
      //将用户的输入包装成为一个todo对象
      const todoObj = { id: nanoid(), title: this.title, done: false };
      //将输入的todo对象通过调用函数传给App
      this.AddTodo(todoObj);
      //清空输入框
      this.title = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>