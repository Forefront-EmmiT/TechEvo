export class FizzBuzzController {
    form: HTMLFormElement;

    constructor(form: HTMLFormElement) {
        this.form = form;
    }
    
    init() {
        this.addEventListeners();
    }

    startCount()  {
        console.log("1, 2, fizz..")
    } 

    addEventListeners() {
        if(this.form) {
            this.form.addEventListener('submit', (event) => {
                event.preventDefault();
                this.startCount();
            });
        }
     }
}
