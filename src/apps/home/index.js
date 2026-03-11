import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';

export default class Home {
    constructor() {
        
        this.createReRender()        
    }
    createReRender(){
        this.createModelsSlider()
    }

    createModelsSlider(){
        this.splideHome =  document.querySelector(".splide")
        if(this.splideHome){
            this.splide = new Splide(this.splideHome,{
            type   : 'loop',
            drag   : 'free',
            perPage: 5,
            autoplay:true,
            speed : 1000,
            arrows:false,
            focus  : 'start',
            gap:'1.5rem',
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
            }
  }
        })

        this.bar = this.splide.root.querySelector('.my-slider-progress-bar')

        this.splide.on('mounted move', () => {
            const end  = this.splide.Components.Controller.getEnd() + 1
            const rate = Math.min((this.splide.index + 1) / end, 1)
            this.bar.style.width = (100 * rate) + '%'
        })

        this.splide.mount();
        }
    }
   
}


