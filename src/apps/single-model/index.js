import GLightbox from 'glightbox';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';
import "glightbox/dist/css/glightbox.css";

export default class SingleModel {
    constructor() {
        this.createReRender()        
    }
    createReRender(){
        this.createSlider()
        this.createLightBox()
    }
    createSlider(){
        this.splideWrapper =  document.querySelector(".single-model-slider")
        if(this.splideWrapper){
            new Splide(this.splideWrapper,{
                type   : 'loop',
                drag   : 'free',
                perPage: 3,
                interval: 3000,
                autoplay:true,
                speed : 1000,
                arrows:false,
                focus  : 'start',
                gap:'calc(7.527rem/2)',
                drag   : true,
                breakpoints: {
                    1280: {
                        perPage: 4,
                    },
                    1024: {
                        perPage: 3,
                    },
                    768: {
                        perPage: 2,
                    },
                    480: {
                        perPage: 1.5,
                        gap:'calc(7.527rem/4)',
                }
            }
        }).mount()

        
        }
    }
    createLightBox(){
        this.lightbox = GLightbox({
            selector: ".glightbox",
            closeButton: true,
           
        })
    }
   
}
