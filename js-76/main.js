"use strict"


const todoKeys = {
    id: 'id',
    text: 'text',
    isCompleted: 'isCompleted'
}

const todos = []

const errTodoNotFound = todoId => `Todo with ID (${todoId}) not found!`


const createTodo = (arr, text) => {
    const newTodo = {
        [todoKeys.id]: arr.length + 1,
        [todoKeys.text]: text,
        [todoKeys.isCompleted]: false
    }

    arr.push(newTodo)

    return newTodo
}


const completeTodoById = (arr, todoId) => {
    let todo = arr.find(todo => todo[todoKeys.id] === todoId)
    if (!todo) {
        console.error(errTodoNotFound(todoId))
        return null
    }
    todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted]
    return todo
}

const deleteTodoById = (arr, todoId) => {
    const todoIndex = arr.findIndex(item => item[todoKeys.id] === todoId)
    if (todoIndex === -1) {
        console.error(errTodoNotFound(todoId))
        return todos

    } else {
        arr.splice(todoId, 1)
        return todos
    }

}

const form = document.querySelector(".form")
const input = document.querySelector(".input")
const todosList = document.querySelector(".todos")

const createTodoElement = (text) => {
    todosList.innerHTML += `
    <li class="todo">
        <div class="todo-text">Задача ${text}</div>
        <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
        </div>
    </li>
    `
}

const handleCreateTodo = (todos, text) => {
    createTodoElement(text)
    createTodo(todos, text)
}
