const { default: Pristine } = await import(
    /* webpackChunkName: "pristine-js" */ 'pristinejs'
)

export default class Contact {
    constructor() {

        this.createReRender()        
    }
    createReRender(){
        this.createFormValidation()
    }
    createFormValidation(){

        const form = document.querySelector('.contact-form')
            if(form){
                this.pristine = new Pristine(form, {
                classTo: 'form-group', 
                errorTextParent: 'form-group', 
                errorTextTag: 'p',           
                errorTextClass: 'text-highlight'
            })

            form.addEventListener('submit', (e)=> {
                e.preventDefault(); // stop default submit

                if (this.pristine.validate()) {
                    console.log('Submit allowed ✅');
                    form.submit(); // manually submit
                } else {
                    console.log('Blocked ❌');
                }
            })

        }

        
    }
   
}
   
