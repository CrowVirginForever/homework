const moreBtn = document.getElementById("offers-more-btn")
const filters = [...document.querySelectorAll(".filter--hidden")]

moreBtn.addEventListener("click", () => {
    filters.forEach(item => item.classList.toggle("hidden"))

    if (filters.every(item => item.classList.contains("hidden"))) {
        moreBtn.textContent = "Показать еще"
    } else {
        moreBtn.textContent = "Показать меньше"
    }
})


const offersSelect = document.getElementById("filters-names")
const offersSliders = [...document.getElementsByClassName("offers__slider")]

offersSelect.addEventListener("change", () => {
    const selectedValue = offersSelect.value
    
    offersSliders.forEach((item) => {
        if (item.dataset.sortSlider === selectedValue) {
            item.classList.remove("hidden")
        } else {
            item.classList.add("hidden")
        }
    })
})