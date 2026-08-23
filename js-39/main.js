// Задача 1
const person = {
    name: "Кирилл",
    country: "Russian",
    isStudent: true,
}

// Задача 2
const isEmpty = (object) => {
    for (let key in object) {
        if (key in object) {
            return false
        } else {
            return true
        }
    }
}

console.log(isEmpty(person))

// Задача 3
const task = {
    title: "Помыть посуду",
    description: "Помыть посуду до 12:00",
    isComplete: false,
}

const cloneAndModify = (object, modifications) => {
    return { ...object, ...modifications }
}

console.log(cloneAndModify(task, person))

// Задача 4
const callAllMethods = object => {
    for (const key in object) {
        if (typeof object[key] === 'function') {
            object[key]()
        }
    }
}

const myObject = {
    method1() {
        console.log("Метод 1 вызван")
    },
    method2() {
        console.log("Метод 2 вызван")
    },
    property: "Это не метод"
}


console.log(callAllMethods(myObject))