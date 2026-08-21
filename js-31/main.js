// Задача 1
function calculateFinalPrice(basicPrice, discount, tax) {
    const discountValue = basicPrice * discount / 100
    const afterDiscountPrice = basicPrice - discountValue
    const taxValue = afterDiscountPrice * tax
    const totalCost = afterDiscountPrice + taxValue
    
    return totalCost
    
}

console.log(calculateFinalPrice(300, 10, 0.2))

// Задача 2
const checkAccess = (userName, password) => userName === "admin" && password === "123456" ? "Доступ разрешен" : "Доступ запрещен";

console.log(checkAccess("admin", "123456"))

// Задача 3
function getTimeOfDay(currentHour) {
    if (currentHour < 0 || currentHour > 23) {
        return "Некорректное время"
    } else {
        if (currentHour >= 0 && currentHour <= 5) {
            return "Ночь"
        } else if (currentHour >= 6 && currentHour <= 11) {
            return "Утро"
        } else if (currentHour >= 12 && currentHour <= 17) {
            return "День"
        } else if (currentHour >= 18 && currentHour <= 23) {
            return "Вечер"
        }
    }
}

console.log(getTimeOfDay(17))

// Задача 4
function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (start === end) {
            return "Четных чисел нет"
        } else {
            if (i % 2 === 0) {
                return i
            } else {
                continue
            }
        }
    }
}

console.log(findFirstEven(10, 19))
