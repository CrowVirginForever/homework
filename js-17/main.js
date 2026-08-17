// Задача 1
const number = +prompt("Введите число: ", 0)


if (isNaN(number)) {
    console.log(`Введенное значение не является числом`)
} else if (number % 2 == 0) {
    console.log(`${number} - четное число`)
} else {
    console.log(`${number} - нечетное число`)
}

// Задача 2
const age = +prompt("Введите свой возраст", 0)
let discount

if (isNaN(age)) {
    console.log(`Введенное значение не является числом. Введите корректный возраст`)
} else if (age < 18) {
    discount = 10
} else if (age >= 18 && age <= 65) {
    discount = 20
} else {
    discount = 30
}

switch (true) {
    case isNaN(age):
        console.log("Введите корректный возраст")
        break
    case age < 18:
        discount = 10
        break
    case age >= 18 && age <= 65:
        discount = 20
        break
    case age > 65:
        discount = 30
        break
}

if (!isNaN(age)) {
    console.log(`Ваша скидка составляет ${discount}%!`)
}

// Задача 3
let username = prompt("Введите имя пользователя: ")
let password = prompt("Введите пароль:")

if (username == "admin" || username == "user" && password == "123456") {
    console.log("Доступ разрешен")
} else {
    console.log("Доступ запрещен")
}


// Задача 4
let weight = +prompt("Введите вес посылки (в килограммах): ", 1)
let deliveryType = prompt("Выберите тип доставки (Стандарт, Экспресс, Премиум): ", "Стандарт")
let deliveryBasicPrice

if (weight <= 0) {
    alert("Некорректный вес посылки")
} else if (deliveryType !== "Стандарт" && deliveryType !== "Экспресс" && deliveryType !== "Премиум") {
    alert("Некорректный тип доставки")
} else if (weight < 1) {
    deliveryBasicPrice = 5
} else if (1 <= weight && weight <= 5) {
    deliveryBasicPrice = 10
} else {
    deliveryBasicPrice = 15
}

switch (true) {
    case deliveryType == "Стандарт":
        deliveryRatio = 1
    break
    case deliveryType == "Экспресс":
        deliveryRatio = 1.5
    break
    case deliveryType == "Премиум":
        deliveryRatio = 2
    break
    default: 
    alert("Произошла ошибка, попробуйте обновить страницу")
}

let deliveryPrice = deliveryBasicPrice * deliveryRatio
alert(`Итоговая стоимость доставки: ${deliveryPrice}$`)

