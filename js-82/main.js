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

const formElement = document.querySelector(".form")
const inputElement = document.querySelector(".input")
const todosElement = document.querySelector(".todos")


const createTodoElement = (todo) => {
    const todoElement = document.createElement("li")
    todoElement.classList.add("todo")
    todoElement.dataset.id = todo[todoKeys.id]
    todoElement.innerHTML = `
        <div class="todo-text">${todo[todoKeys.text]}</div>
        <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
        </div>
    `
    return todoElement
}

const handleCreateTodo = (todos, text) => {
    const todo = createTodo(todos, text)
    const todoElement = createTodoElement(todo)
    todosElement.prepend(todoElement)
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = inputElement.value.trim()

    if (!text) return

    handleCreateTodo(todos, text)
    inputElement.value = ""
})

todosElement.addEventListener("click", ({target}) => {
    const todo = target.closest(".todo")
    if (!todo) return
    const todoId = Number(todo.dataset.id)

    if (event.target.matches(".button-complete")) {
        completeTodoById(todos, todoId)
        todo.classList.toggle("completed")
    }

    if (target.matches(".button-delete")) {
        deleteTodoById(todos, todoId)
        todo.remove()
    }
})