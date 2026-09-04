
const offersSlider = document.querySelector(".offers__slider")

function updateMinusBtn(item, amount) {
    const btnMinus = item.querySelector(".btn--minus")
    if (btnMinus) {
        btnMinus.disabled = amount <= 1
    }
}


offersSlider.addEventListener("click", ({ target }) => {
    const item = target.closest(".offers__slide-article")
    if (!item) return
    let itemAmount = Number(item.dataset.itemAmount)
    let itemInput = item.querySelector(".offers__slide-count")

    if (target.matches(".btn--minus")) {
        itemAmount--
        item.dataset.itemAmount = itemAmount
        itemInput.value = itemAmount
        console.log(itemAmount, itemInput.value)
    }

    if (target.matches(".btn--plus")) {
        itemAmount++
        item.dataset.itemAmount = itemAmount
        itemInput.value = itemAmount
        console.log(itemAmount, itemInput.value)
    }

    updateMinusBtn(item, itemAmount)
})

offersSlider.addEventListener("input", ({ target }) => {
    const item = target.closest(".offers__slide-article")
    if (!item) return
    if (!target.matches(".offers__slide-count")) return

    let itemAmount = Number(target.value)

    if (itemAmount < 1 || isNaN(itemAmount)) {
        itemAmount = 1
    }

    target.value = itemAmount
    item.dataset.itemAmount = itemAmount

    console.log("Пользователь ввел вручную:", itemAmount)

    updateMinusBtn(item, itemAmount)
})