const { default: Splide } = await import(
    /* webpackChunkName: "splide" */ '@splidejs/splide'
)

export default class Home {
    constructor() {
        this.createReRender()        
    }
    createReRender(){
        this.createModelsSlider()
    }

    createModelsSlider(){
        this.splideWrapper =  document.querySelector(".home-gallery-slider")
        if(this.splideWrapper){
            this.splide = new Splide(this.splideWrapper,{
            type : 'loop',
            drag : 'free',
            interval:3000,
            autoplay:true,
            speed:2000,
            pauseOnHover:false,
            perPage: 3,
            arrows:false,
            focus  : 'center',
            gap:'4rem',
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
                    gap:'1rem',
                    perPage: 1.2,
                    focus  : 'start',
            }
  }
        })

        this.bar = this.splide.root.querySelector('.home-slider-progress-bar')

        this.splide.on('mounted move', () => {
            const end  = this.splide.Components.Controller.getEnd() + 1
            const rate = Math.min((this.splide.index + 1) / end, 1)
            this.bar.style.width = (100 * rate) + '%'
        })

        this.splide.mount();
        }
    }
   
}


