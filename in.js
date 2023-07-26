let listElements = document.querySelectorAll(".list-bottom-click");

listElements.forEach(listElement => {
    listElement.addEventListener("click", () => {

        listElement.classList.toggle("arrow");

        let height = 0
        let menu = listElement.nextElementSibling;

        if (menu.clientHeight == 0) {
            height = menu.scrollHeight

        }
        menu.style.height = `${height}px`
    })

})

const darkMode = document.querySelector(".dark")
const body = document.querySelector(".body")
const nav = document.querySelector(".nav")
const enlaces = document.querySelectorAll(".nav-link")
const borde = document.querySelectorAll(".list-show")
const a2 = document.querySelectorAll(".nav-link-inside")


darkMode.addEventListener("click", () => {
    body.classList.toggle("body-active")
    nav.classList.toggle("nav-active")

    a2.forEach(a2 => {
        a2.classList.toggle("a-active-2")
    } )

    borde.forEach(borde => {
        borde.classList.toggle("list-show-active")
    })

    enlaces.forEach(enlace => {
        enlace.classList.toggle("a-active");
    })
})

const toggle = document.querySelector(".toggle2")
toggle.addEventListener("click", () => {
    nav.classList.toggle("nav2")
})
