window.addEventListener("scroll", function(){
    let header = document.querySelector(".header")
    let headerScroll = document.querySelector(".header-scroll")
    let scroll = this.scrollY
    const height = window.innerHeight;
    const vhPixels = height * 1
    if (scroll > 100) {
        header.classList.remove("header-back")
        header.classList.add("header-scroll")
    } else {
        header.classList.remove("header-scroll")
        header.classList.add("header-back")
        
    }
})

// SUB HEADER CODE //

var submenuItem = document.querySelectorAll(".sub-header-item")


 for(let i in submenuItem) {
    submenuItem[i].addEventListener("click", function(){
        var currentActive = document.getElementsByClassName("sub-header-active")

        if (currentActive.length > 0) {
            currentActive[0].className = currentActive[0].className.replace(" sub-header-active", "")
        }

        this.className += " sub-header-active" 
   })
} 

 function currentsub(n) {
    let a1 = document.querySelector(".index-animation")
    let a2 = document.querySelector(".style-animation")
    let a3 = document.querySelector(".script-animation")
    let logo = document.querySelector(".logo-content")
    let logoContent1 = " <p>.knowledge</p>"
    let logoContent2 = " <p>.experience</p>"
    let logoContent3 = " <p>.script</p>"

    if (n == 1) {

            a1.style.display = "block"
            a2.style.display = "none"
            a3.style.display = "none"
            logo.innerHTML = logoContent1
  
    } else if (n == 2) {
            
            a1.style.display = "none"
            a2.style.display = "block"
            a3.style.display = "none"
            logo.innerHTML = logoContent2
            
    } else if (n == 3) {
            
            a1.style.display = "none"
            a2.style.display = "none"
            a3.style.display = "block"
            logo.innerHTML = logoContent3
    }}


// HEADER CODE //




/* HEADER ANIMATION CODE */







//MAIN CODE // 








    
       





    





 /* function scaleNavFunction() { 
    for(const values in navItens) {
        navItens[values].style.transform = "scale(1,1.5)"
    }
    
}

navItens.addEventListener("mouseover", scaleNavFunction())


*/

