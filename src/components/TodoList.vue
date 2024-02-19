<template>
  <section class="bg-black grid gap-4 rounded-md mx-auto mt-14 max-w-sm p-8">
    <h1 class="text-white">Tasks</h1>
    <button @click="addTodo" class="border-2 w-full pt-1 rounded-md text-white">
      Add task
    </button>

    <ul v-for="todo in todos" v-bind:key="todo.todoString">
      <li class="text-white text-left w-full flex justify-between">
        {{ todo.todoString }} <button>Del</button>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "TodoList",
  // function to handle list
  methods: {
    addTodo(newTodo) {
      console.log(newTodo.target);
      this.todos.push({
        todoString: "New tasks",
        completed: false,
      });
    },
    delTodo(clickedTodo) {
      console.log(clickedTodo);
    },
    updateTodo(updateTodo) {
      console.log(updateTodo);
    },
  },
  //   passing data as a function
  data() {
    return {
      todos: [
        { completed: false, todoString: "Buy groceries" },
        { completed: false, todoString: "Wash clothes" },
      ],
    };
  },
};
</script>
