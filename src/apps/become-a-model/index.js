import { getData } from "country-list"
import _ from 'lodash'
import {modelHeights} from '../extra/model-height-data'

export default class BecomeAModel {
    constructor() {
        this.createReRender()       
    }
    createReRender(){
        this.createCountries()
        this.createModelHeight()
    }

    createCountries(){
        this.countries =  document.querySelector('.countries')
        if (this.countries) {
            _.map(getData(),(element)=>{
                this.countries.innerHTML += `<option value="${element.name}">${element.code} - ${element.name}</option>`
            })
        }           
    }
    createModelHeight(){
        this.heights =  document.querySelector('.heights')
        if (this.heights) {
            _.map(modelHeights,(element)=>{
                this.heights.innerHTML += `<option value="${element.cm}">${element.cm} cm - ${element.label}</option>`
            })
        }           
    }
   
}