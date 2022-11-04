/*----------------------FIXED HEADER SCROLL------------------------*/

window.addEventListener("scroll", function(){
    let header = document.querySelector(".header")
    let scroll = this.scrollY
    if (scroll > 100) {
        header.classList.remove("header-back")
        header.classList.add("header-scroll")
    } else {
        header.classList.remove("header-scroll")
        header.classList.add("header-back")
        
    }
});

/*----------------------FLOAT BUTTON------------------------*/

let floatBtn = document.querySelector("#float-btn")
let slides = document.querySelector(".slide")
let nextBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".prev")
let subItem = document.querySelectorAll(".sub-header-item")


floatBtn.addEventListener("click", function(){

    slides.style.display = "block"
    floatBtn.classList.replace("float-btn-normal", "float-btn-press")
    nextBtn.style.display = "block"
    prevBtn.style.display = "block"
    subItem[0].className += " sub-header-active"

})

/*----------------------SLIDE------------------------*/

let slideN = 0

function currentslide(n){
    let i;
    slideN = n
    let slides = document.querySelectorAll(".slide")
    let subItem = document.querySelectorAll(".sub-header-item")

    floatBtn.classList.replace("float-btn-normal", "float-btn-press")
    nextBtn.style.display = "block"
    prevBtn.style.display = "block"

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for(i = 0; i < slides.length; i++) {
        subItem[i].className = subItem[i].className.replace(" sub-header-active", "")
    }

    slides[slideN-1].style.display = "block"
    subItem[slideN-1].className += " sub-header-active"
}

function pslide(n) {
    let i;
    slideN += n
    let slides = document.querySelectorAll(".slide")
    let subItem = document.querySelectorAll(".sub-header-item")
    if(slideN > slides.length) {slideN = 1}
    if(slideN <1 ) {slideN = slides.length}
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for(i = 0; i < slides.length; i++) {
        subItem[i].className = subItem[i].className.replace(" sub-header-active", "")
    }

    slides[slideN-1].style.display = "block"
    subItem[slideN-1].className += " sub-header-active"
}


function showmobile() {
        let navMobile = document.querySelector("#menu-nav-mobile")
        let IconBar = document.querySelectorAll(".mobile-icon-bar")

        navMobile.classList.toggle("menu-nav-mobile-active")
        for(let i in IconBar) {
        IconBar[i].className += " bar-active" }
        
        menuMobileList = document.querySelector("#menu-nav-mobile ul")
        if(menuMobileList.style.display == "block") {

            menuMobileList.style.display = "none"
            navMobile.classList.remove("menu-nav-mobile-active")
            for(let i in IconBar) {
                IconBar[i].className = "mobile-icon-bar" }

        } else {

            menuMobileList.style.display = "block"
        }
    }









    
       





    








