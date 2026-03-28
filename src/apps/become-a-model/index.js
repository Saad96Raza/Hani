
import map from 'lodash/map'
import  forEach  from 'lodash/forEach'

const { default: Pristine } = await import(
    /* webpackChunkName: "pristine-js" */ 'pristinejs'
)


const { default: {getData} } = await import(
    /* webpackChunkName: "country-list" */ 'country-list'
)


import {modelProfileAttributes} from '../extra/model-data'
 

const { default: Litepicker } = await import(
    /* webpackChunkName: "litepicker" */ 'litepicker'
)



export default class BecomeAModel {
    constructor() {
        this.createReRender()       
    }
    createReRender(){

        this.createFormValidation()
        this.createCountries()
        this.createModelMeasurement()
        this.createFileInput()
        this.createDateInput()

    }

    createFormValidation(){
        const form = document.querySelector('.become-a-model-form')
            if (form) {
                this.pristine = new Pristine(form, {
                live: true, // Enables immediate removal on check
                classTo: 'form-group', // The parent to receive success/error classes
                errorTextParent: 'form-group', // Where to append the error message
                errorTextTag: 'p',           
                errorTextClass: 'text-highlight'
            })

            this.pristine.form.querySelectorAll('.file').forEach((element) => {
                this.pristine.addValidator(element, (_) => {
                    if (element.files && element.files[0]) {
                        const file = element.files[0];
                        const ext = file.name.toLowerCase().split('.').pop();
                        const isAllowedExt = ['png', 'jpg', 'jpeg', 'webp'].includes(ext);
                        const isUnderLimit = file.size <= 1024 * 1024;
                        return isAllowedExt && isUnderLimit;
                    }
                    return true;
                }, "Only PNG/JPG/WEBP And 1MB Size", 2, false);
            });

        
            form.addEventListener('submit', (e)=> {
                e.preventDefault(); // stop default submit

                if (this.pristine.validate()) {
                    console.log('Submit allowed ✅')
                    // form.submit(); // manually submit
                } else {
                    console.log('Blocked ❌')
                }
            });
        }
    }



    createCountries(){
        this.countries =  document.querySelector('.countries')

        if (this.countries) {
            map(getData(),(element)=>{
                this.countries.innerHTML += `<option value="${element.name}">${element.code} - ${element.name}</option>`
            })
        }           
    }
    createModelMeasurement(){
        this.heights =  document.querySelector('.heights')
        this.waist =  document.querySelector('.waist')
        this.hips =  document.querySelector('.hips')
        this.bust =  document.querySelector('.bust')

        if (this.heights || this.waist || this.hips || this.bust ) {
            map(modelProfileAttributes,(element)=>{
               switch (element.type) {
                    case "Height":
                        return  this.heights.innerHTML += `<option value="${element.cm}">${element.cm} cm - ${element.label}</option>`
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
            })
        }           
    }
    createFileInput(){
        let that = this
        that.input = document.querySelectorAll('.file-button .file')
        if (that.input) {
            
            that.placeHolder = document.querySelectorAll('.file-button .place-holder span')

            forEach(that.input, (element, index) => {
                element.addEventListener('change', () => {
                    const isValid = this.pristine.validate(element); 
                    const file = element.files[0];
                    const displayName = file.name.slice(0, 10) + "...";

                    if (isValid && file) {
                        that.placeHolder[index].textContent = displayName;
                        that.placeHolder[index].style.color = "inherit"; 
                    } else {
                        // Failure: Make text transparent and clear content
                        that.placeHolder[index].style.color = "transparent";
                    }
                });
            });

        }
    }



    createDateInput() {
    let that = this;
    that.dataPicker = document.getElementById("datePicker")

    if (that.dataPicker) {
        this.picker = new Litepicker({
            element: that.dataPicker,
            format: 'YYYY-MM-DD',
            allowRepick: true,
            allowInput: true,
            dropdowns: {
                minYear: 1970,
                maxYear: new Date().getFullYear(),
                months: true,
                years: true
            }
        });

        this.picker.on('selected', () => {
            if(this.pristine) this.pristine.validate(that.dataPicker)
        });

        that.dataPicker.addEventListener('input', (e) => {
            if (e.target.value === "") {
                this.picker.clearSelection()
            }
            if(this.pristine) this.pristine.validate(that.dataPicker)
        });
    }
}

    
   
}