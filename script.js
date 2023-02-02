// open and close menu script

let burger_btn= document.querySelector('.header__burger');
burger_btn.addEventListener('click',function(e){
 console.log(
    this
 .closest('.header')
 .classList.toggle('active')
 )
})