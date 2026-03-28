import Home from './home';
import Contact from './contact';
import BecomeAModel from './become-a-model';
import Model from './model';
import SingleModel from './single-model';

const { default: barba } = await import(
    /* webpackChunkName: "barba-core" */ '@barba/core'
)

const { default: GSAP } = await import(
    /* webpackChunkName: "gsap" */ 'gsap'
)

import  forEach  from 'lodash/forEach';
import _  from '../scss/main.scss';

    class App{
        constructor(){
            this.scroll ={
                last: 0,
                current: 0,
                nav:document.querySelector('.header')
            }

            this.pages = {
                home : new Home(),
                contact : new Contact(),
                model : new Model(),
                become_a_model : new BecomeAModel(),
                single_model : new SingleModel(),
                
            }
    
      
            this.offCanvas = document.querySelector('#offcanvas')
            this.links = document.querySelectorAll('.menu li a')
    

            this.createStickyNavigation()
            this.createAjaxNavigation()
            this.createCreativeCta()
            this.createReRender()
            this.addEventListeners()
        }
        createStickyNavigation(){
            
            this.scroll.current = window.scrollY;

            if (this.scroll.current > this.scroll.last) {
                this.scroll.nav.style.transform = "translateY(-100%)";
            } else {
                this.scroll.nav.style.transform = "translateY(0)";
            }

            this.scroll.last  = this.scroll.current;
        }
        createAjaxNavigation(){

          

            const easeIn = (container,done)=> {
                return GSAP.to(container, {
                    autoAlpha: 0,
                    duration: 1,
                    ease: 'none',
                    onComplete: ()=> done()
                })
            }

            const  easeOut = (container) => {

                return GSAP.from(container, {
                    autoAlpha: 0,
                    duration: 1,
                    ease: 'none',
                })
            }

        barba.init({
                prevent: ({ event, href }) => {
                        if (event.type === 'click') {
                            if (href === window.location.href) {
                                event.preventDefault(); 
                                event.stopPropagation();
                                
                                return true;
                            }
                        }
                    },
                transitions: [
                    {
                    once({ next }) {
                        easeOut(next.container);
                    },
                    leave({ current }) {
                        const done = this.async();
                        easeIn(current.container, done);
                    },
                    enter({ next }) {
                        easeOut(next.container);
                    }
                    }
                ],
                
            })
            
        }
        
        createReRender(){
            barba.hooks.before(() => {
            })
        
            barba.hooks.after(() => {
                this.pages.home.createReRender()
                this.pages.contact.createReRender()
                this.pages.model.createReRender() 
                this.pages.become_a_model.createReRender() 
                this.pages.single_model.createReRender()
                this.createCreativeCta() 
            })
        }
    
        createCreativeCta(){
            this.buttons = document.querySelectorAll('.button-1-stroke , .button-1-bg')
            forEach(this.buttons,(element)=>{
                element.addEventListener('mouseenter', () => {
                    if (!element.classList.contains('is-animating')) element.classList.add('is-animating')
                    element.addEventListener('animationend', () => element.classList.remove('is-animating'))
                })
            })
        }
        
        addEventListeners(){
            window.addEventListener('scroll',this.createStickyNavigation.bind(this))
            forEach(this.links,(element)=>{
                element.addEventListener('click',()=> this.offCanvas.checked = false)
            })
        }
    }

    new App()





