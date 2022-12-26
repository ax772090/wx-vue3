<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

const newTodoText = ref('')
const todoList = ref([
    {
        id: 1,
        title: 'Do the dishes'
    },
    {
        id: 2,
        title: 'Take out the trash'
    },
    {
        id: 3,
        title: 'Mow the lawn'
    }
])
let newTodoId = 4
function addNewTodo() {
    if (newTodoText.value.length === 0) return
    todoList.value.push({
        id: newTodoId++,
        title: newTodoText.value
    })
    newTodoText.value = ''
}
</script>
<template>
    <!-- @submit.prevent: 提交事件将不再重新加载页面 -->
    <form @submit.prevent="addNewTodo">
        <label for="new-todo">add new todo</label>
        <input v-model="newTodoText" placeholder="Please input info">
        <button>Add</button>
    </form>
    <ul>
        <!-- <template v-for="item of todoList" :key="item.id">
            <li>{{ item.title }}</li>
            <button>Remove</button>
        </template> -->
        <TodoItem v-for="(item, index) of todoList" :key="item.id" :todo="item" @remove="todoList.splice(index, 1)">
        </TodoItem>
    </ul>
</template>