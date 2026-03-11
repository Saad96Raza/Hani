import Home from './home';
import Contact from './contact';
import BecomeAModel from './become-a-model';

import barba from '@barba/core';
import GSAP from 'gsap';
import _ from 'lodash';

import __ from '../scss/main.scss';




class App{
    constructor(){


        this.pages = {
            home : new Home(),
            contact : new Contact(),
            become_a_model : new BecomeAModel(),
            
        }
        this.offCanvas = document.querySelector('#offcanvas')
        this.links = document.querySelectorAll('.menu li a')

        this.createAjaxNavigation()
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
            this.pages.become_a_model.createReRender() 
        })
    }
   
    
    addEventListeners(){
        
        
        
    }
}

new App()
