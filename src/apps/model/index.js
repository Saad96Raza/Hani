import _ from 'lodash'

export default class Model {
    constructor() {
       
        this.createReRender()       
    }
    createReRender(){
        this.createModelFilter()
    }
   createModelFilter() {
    this.filter = document.querySelector('.filter input');
    this.filterCard = [...document.querySelectorAll('.model-section-1 .filter-card')];
    this.notFoundMessage = document.querySelector('.no-models-found');

    if (this.filter && this.filterCard) {
        // 1. Define the debounced logic
        const updateFilter = _.debounce((value) => {
            let visibleCount = 0;

            _.each(this.filterCard, (element) => {
                const titles = element.querySelectorAll('h3');
                const match = _.some(titles, (title) => 
                    title.innerText.trim().toLowerCase().startsWith(value)
                );

                const isVisible = match || value === '';
                element.style.display = isVisible ? 'block' : 'none';
                if (isVisible) visibleCount++;
            });

            if (this.notFoundMessage) {
                this.notFoundMessage.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        }, 200); // 200ms delay

        // 2. Call the debounced function on input
        this.filter.addEventListener('input', (e) => {
            const value = e.target.value.trim().toLowerCase();
            updateFilter(value);
        });
    }
}
   
}
                                                   