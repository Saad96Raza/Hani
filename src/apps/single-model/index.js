const { default: GLightbox } = await import(
    /* webpackChunkName: "glightbox" */ 'glightbox'
)

const { default: Splide } = await import(
    /* webpackChunkName: "splide" */ '@splidejs/splide'
)



export default class SingleModel {
    constructor() {
        this.createReRender()        
    }
    createReRender(){
        this.createSlider()
        this.createPlaybtn()
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
    createPlaybtn() {
    let that = this;
    that.video = document.querySelector('.video-container video');
    that.playBtn = document.querySelector('.video-container .play-btn');

    if (that.video && that.playBtn) {
        // Ensure muted for autoplay to work
        that.video.muted = true;

        // Start autoplay
        that.video.play().then(() => {
            // Update play button to pause state
            that.playBtn.classList.remove('fa-solid','fa-play');
            that.playBtn.classList.add('fa-regular', 'fa-circle-pause');
        })

        // Toggle play/pause on click
        that.video.parentElement.addEventListener('click', () => {
            if (that.video.paused) {
                that.video.play();
                that.playBtn.classList.remove('fa-solid','fa-play');
                that.playBtn.classList.add('fa-regular', 'fa-circle-pause');
            } else {
                that.video.pause();
                that.playBtn.classList.remove('fa-regular', 'fa-circle-pause');
                that.playBtn.classList.add('fa-solid','fa-play');
            }
        });
        
    }
}
    createLightBox(){
        this.lightbox = GLightbox({
            selector: ".glightbox",
            closeButton: true,
           
        })
    }
   
}
