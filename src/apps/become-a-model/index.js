import { getData } from "country-list"
import _ from 'lodash'
import Litepicker from "litepicker";
import {modelProfileAttributes} from '../extra/model-data'
import "litepicker/dist/css/litepicker.css";


export default class BecomeAModel {
    constructor() {
        this.createReRender()       
    }
    createReRender(){
        this.createCountries()
        this.createModelMeasurement()
        this.createFileInput()
        this.createDateInput()
    }

    createCountries(){
        this.countries =  document.querySelector('.countries')

        if (this.countries) {
            _.map(getData(),(element)=>{
                this.countries.innerHTML += `<option value="${element.name}">${element.code} - ${element.name}</option>`
            })
        }           
    }
    createModelMeasurement(){
        this.heights =  document.querySelector('.heights')
        this.waist =  document.querySelector('.waist')
        this.hips =  document.querySelector('.hips')
        this.shoeSize =  document.querySelector('.shoe-size')
        this.hairColor =  document.querySelector('.hair-color')
        this.eyeColor =  document.querySelector('.eye-color')
        this.bust =  document.querySelector('.bust')

        if (this.heights || this.waist || this.hips || this.shoeSize || this.hairColor || this.eyeColor) {
            _.map(modelProfileAttributes,(element)=>{
               switch (element.type) {
                    case "Height":
                        return  this.heights.innerHTML += `<option value="${element.cm}">${element.cm} cm - ${element.label}</option>`
                }
                switch (element.type) {
                    case "Eye Color":
                        return  this.eyeColor.innerHTML += `<option value="${element.name}">"${element.name}"</option>`
                }
                switch (element.type) {
                    case "Hair Color":
                        return  this.hairColor.innerHTML += `<option value="${element.name}">"${element.name}"</option>`
                }
                switch (element.type) {
                    case "Waist":
                        return  this.waist.innerHTML += `<option value="${element.cm}">${element.cm} cm - ${element.label}</option>`
                }
                switch (element.type) {
                    case "Bust":
                        return  this.bust.innerHTML += `<option value="${element.cm}">${element.cm} cm - ${element.label}</option>`
                }
                switch (element.type) {
                    case "Hips":
                        return  this.hips.innerHTML += `<option value="${element.cm}">${element.cm} cm - ${element.label}</option>`
                }
                switch (element.type) {
                    case "Shoe Size":
                        return  this.shoeSize.innerHTML += `<option value="${element.size}">"Size - ${element.size}"</option>`
                }

                
            })
        }           
    }
    createFileInput(){
        let that = this
        that.input = document.querySelectorAll('.file-button .file')
        if (that.input) {
            
            that.placeHolder = document.querySelectorAll('.file-button .place-holder')

            _.forEach(that.input,(element,index)=>{
                element.addEventListener('change',()=>{
                    that.placeHolder[index].textContent = element.files[0].name
            
                })
            })
        }
    }
    createDateInput(){
        let that = this
        that.dataPicker = document.getElementById("datePicker")
        if (that.dataPicker) {
        new Litepicker({
            element: that.dataPicker,
            format: "YYYY-MM-DD",
            allowInput: true,
            dropdowns: {
                minYear: 1970,       // earliest year to select
                maxYear: 2026,       // latest year (current)
                months: true,        // show month dropdown
                years: true          // show year dropdown
            }
        });
        }
    }
   
}