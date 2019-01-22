$(document).ready(function(){
    $('.burger').click(function(){
        $('.nav').toggleClass('nav-active');
    })
});

let navItems = document.querySelectorAll('.nav .nav-li');
let nav = document.querySelector('nav');

nav.addEventListener('click',function(e){
    navItems.forEach(function(el){
        if(el.classList.contains('active')){
            el.classList.remove('active');
            let toBeActive = e.target;
            let paret = toBeActive.parentElement;
            paret.classList.add('active');
        }
        nav.classList.remove('nav-active');
    })
});

function goTop() {
    let top = document.getElementById('gotop');
    let ypos = window.pageYOffset;
    if (ypos > 70) {
        top.classList.add('show');
    }else{
        top.classList.remove('show')
    }
}
window.addEventListener('scroll',goTop)