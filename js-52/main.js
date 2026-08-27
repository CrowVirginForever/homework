// Задача 1
const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
]

users.push(
    { name: 'Anne', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true },
)

console.log(users)

// Задача 2
let ageSum = 0

const getUsersAverageAge = (array) => {
    array.forEach((object) => {
        ageSum += object.age
    })
    return ageSum / array.length
}

console.log(getUsersAverageAge(users))

// Задача 3
const adminsArray = []

const getAllAdmins = (array) => {
    array.forEach((object) => {
        if (object.isAdmin) {
            adminsArray.push(object)
        }
    })
    return adminsArray
}

console.log(getAllAdmins(users))

// Задача 4

const first = (arr, n = 1) => {
    const first_n_array = []

    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            first_n_array.push(arr[i])
        }

        return first_n_array
    }

    console.error(
        `${n} - больше длины массива!`)
    return
}

console.log(first(users, 2))
