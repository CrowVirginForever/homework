// 1 Задача
for (let i = 0; i <= 20; i++) {
    if (i % 4 === 0) {
        continue
    } else {
        console.log(i)
    }
}

// 2 Задача
const number = +prompt("Введите число", 1)
let factorial = 1

for (let i = 1; i <= number; i++) {
    factorial = factorial * i 
}

console.log(factorial)

// Задача 3

let board = ""

for (let i = 1; i <= 8; i++) {
    let row = ""
    for (let j = i; j <= 7 + i; j++) {
        if (j % 2 === 0) {
            row += "Б"
        } else {
            row += "Ч"
        }
    }
    row += "\n"
    board += row
}

console.log(board)