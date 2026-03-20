import Home from './home';
import Contact from './contact';
import BecomeAModel from './become-a-model';
import Model from './model';
import SingleModel from './single-model';
import barba from '@barba/core';
import GSAP from 'gsap';
import _ from 'lodash';
import __ from '../scss/main.scss';


class App{
    constructor(){

        this.header = document.querySelector('.header')
        
        console.log(this.header.getBoundingClientRect().height)

        this.scroll ={
            last: 0,
            current: 0
        }

        const nav = document.querySelector('.header');


        window.addEventListener('scroll', () => {


           this.scroll.current = window.scrollY;

            if (this.scroll.current > this.scroll.last) {
                 nav.style.transform = "translateY(-100%)";
            } else {
                 nav.style.transform = "translateY(0)";
            }

            this.scroll.last  = this.scroll.current;

        });
 
        this.pages = {
            home : new Home(),
            contact : new Contact(),
            model : new Model(),
            become_a_model : new BecomeAModel(),
            single_model : new SingleModel(),
            
        }
        this.offCanvas = document.querySelector('#offcanvas')
        this.links = document.querySelectorAll('.menu li a')
   


        this.createAjaxNavigation()
        this.createCreativeCta()
        this.createReRender()
        this.addEventListeners()
    }
    createAjaxNavigation(){

        _.forEach(this.links,(element)=>{
            element.addEventListener('click',()=> this.offCanvas.checked = false)
        })

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
                preventRunning: true,
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
            this.pages.model.createReRender() 
            this.pages.become_a_model.createReRender() 
            this.pages.single_model.createReRender()
            this.createCreativeCta() 
        })
    }
   
    createCreativeCta(){
        this.buttons = document.querySelectorAll('.button-1-stroke , .button-1-bg')
        _.forEach(this.buttons,(element)=>{
            element.addEventListener('mouseenter', () => {
                if (!element.classList.contains('is-animating')) element.classList.add('is-animating')
                element.addEventListener('animationend', () => element.classList.remove('is-animating'))
            })
        })
    }
    
    addEventListeners(){
        
        
        
    }
}

new App()
