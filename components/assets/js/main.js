const scoll = document.querySelector(".wrapper__header-top")
window.addEventListener("scroll", () => {
    var y = this.scrollY;
   
    if(y >= 50) {
        scoll.classList.add("fixed")
    }else {
        scoll.classList.remove("fixed")
    }
})



const modal = document.querySelector(".modal_search");
const btn = document.querySelector(".search");
const close = document.querySelector(".close")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("hj"); 
    modal.style.display = "block";
})
close.addEventListener("click", (e) => {
    e.preventDefault()
    modal.style.display = "none"
})




const btnnav = document.querySelector('.btn_nav')
const subnav = document.querySelector('.subnav')
btnnav.addEventListener("click", (e) => {
        e.preventDefault() 
        subnav.style.display = "block"
})

window.onclick = function(event)  {
    
    if(event.target === modal) {
        modal.style.display = "none"
    }
    if(event.target != btnnav) {
        subnav.style.display = "none"
    }
}