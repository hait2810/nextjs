const logo = document.querySelector(".main__logo")
const btns = document.querySelectorAll(".btn__logo")
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
            btns.forEach((button) => button.classList.remove('active'))
            btn.classList.add("active")
            logo.src = btn.src
    })
})