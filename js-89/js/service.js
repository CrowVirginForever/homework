import { todoKeys, errTodoNotFound } from "./constants.js";

const getNewTodoId = todos =>
    todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

export const createTodo = (arr, text) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(arr),
        [todoKeys.text]: text,
        [todoKeys.isCompleted]: false
    }
    arr.push(newTodo)
    return newTodo
}

export const completeTodoById = (arr, todoId) => {
    let todo = arr.find(todo => todo[todoKeys.id] === todoId)
    
    if (!todo) {
        console.error(errTodoNotFound(todoId))
        return null
    }
    todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted]
    return todo
}

export const deleteTodoById = (arr, todoId) => {
    const todoIndex = arr.findIndex(item => item[todoKeys.id] === todoId)
    if (todoIndex === -1) {
        console.error(errTodoNotFound(todoId))
        return arr

    } else {
        arr.splice(todoIndex, 1)
        return arr
    }
}
