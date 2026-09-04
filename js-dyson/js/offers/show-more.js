const showMoreBtn = [...document.querySelectorAll(".more__btn")]

showMoreBtn.forEach((button) => {
    button.addEventListener("click", () => {
        const currentSection = button.closest("section")

        if (!currentSection) return

        const reviewsCard = [...currentSection.querySelectorAll(".extra--card")]

        reviewsCard.forEach((item) => {
            item.classList.toggle("hidden")

            if (item.classList.contains("hidden")) {
                button.innerHTML = `Показать еще
                <svg class="news__more-icon more__btn-icon" width="25" height="25">
                        <use href="imgs/icons/main-sprite.svg#arrow-left"></use>
                    </svg>
                `
            } else {
                button.innerHTML = "Показать меньше!"
            }
        })

    })
})