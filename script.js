import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';
import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js";


// open and close menu script
let burger_btn= document.querySelector('.header__burger');
burger_btn.addEventListener('click',function(e){

    this.classList.toggle('burger-icon')

  this
 .closest('.header')
 .classList.toggle('active')
 document.body.classList.toggle('body-off')  
 
})

// tab-bar script for section "course"
let tab_titles=[...document.querySelectorAll('.tab__title')]
let tab_contents=[...document.querySelectorAll('.tab__content')]
tab_titles.forEach((tab_title,index,arr)=>{
   

    tab_title.addEventListener('click',function(e){
        let eltId= this.dataset.tab
        // remove active class for all item
        arr.forEach(item=> item.classList.remove('active'))
        // set active element
        this.classList.add('active')

        // remove active class for content active
        tab_contents.forEach(elt=> elt.classList.remove('active'))
        //set actice content
        tab_contents.forEach(elt=>{
            if(elt.dataset.tab === eltId){
                elt.classList.add('active')
            }
        })
    })
})

// sliders
const swiper = new Swiper('.teacher__slider .swiper',{
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides:true,
    centeredSlidesBounds:true,
    pagination:{
        el:'.slider__pagination'
    }
})

// open modal with video
let video_icon =document.querySelector('.video__icon')
video_icon.addEventListener('click',function(e){
    Fancybox.show(
        // Array containing gallery items
        [
          // Gallery item
          {
            src: "https://youtu.be/_770O2pzlkg",
            type: "iframe",
            preload: false,
          },
        ]
        
      );
})

// menu script

let menu_item= [...document.querySelectorAll('.menu__item')]

menu_item.forEach((item,index,arr)=>{
    item.addEventListener('click',function(e){
       
    })
})

