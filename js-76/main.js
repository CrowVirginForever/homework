"use strict"


const todoKeys = {
    id: 'id',
    text: 'text',
    isCompleted: 'isCompleted'
}

const todos = []

const errTodoNotFound = todoId => `Todo with ID (${todoId}) not found!`

const getNewTodoId = todos =>
    todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (arr, text) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(arr),
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
        arr.splice(todoIndex, 1)
        return todos
    }

}

const formElement = document.querySelector(".form")
const inputElement = document.querySelector(".input")
const todosElement = document.querySelector(".todos")

console.log(todosElement)

const createTodoElement = (text) => {
    const todoElement = document.createElement("li")
    todoElement.classList.add("todo")
    todoElement.innerHTML = `
        <div class="todo-text">${text}</div>
        <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
        </div>
    `
    return todoElement
}

const handleCreateTodo = (todos, text) => {
    const todo = createTodo(todos, text)
    const todoElement = createTodoElement(todo[todoKeys.text])
    todosElement.prepend(todoElement)
}

formElement.addEventListener("submit", handleCreateTodo);
