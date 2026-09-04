const extraPhotos = document.querySelector(".reviews--extra-photos")
const extraPhotosBtn = document.querySelector(".reviews__card-more")

extraPhotosBtn.addEventListener("click", () => {
    extraPhotos.classList.toggle("hidden")
    
    if (extraPhotos.classList.contains("hidden")) {
        extraPhotosBtn.textContent = "Смотреть все фото"
    } else {
        extraPhotosBtn.textContent = "Показать меньше фото"
    }
})
