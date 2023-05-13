let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");

menu.addEventListener("click",function(){
    nav.style.display = 'block';
})

menu.addEventListener("dblclick",function(){
    nav.style.display = 'none';
})


/**carousel */

let index = 0;
const slides = document.querySelectorAll('.swiper_slide');
const width = slides[0].getBoundingClientRect().width;
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');

for(let i = 0;i<slides.length;++i){
    slides[i].style.left = i * width + 'px';
}

icon1.addEventListener('click',()=>{
    if(index > 0){
        index--;
        uptadeSlade()
    }
})
icon2.addEventListener('click',()=>{
    if(index < slides.length -1){
        index++;
        uptadeSlade()
    }
})

function uptadeSlade(){
    for(let i = 0;i<slides.length;++i){
        slides[i].style.left = (i - index) * width + 'px';
    }
}


