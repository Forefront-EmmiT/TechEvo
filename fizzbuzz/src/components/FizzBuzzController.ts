export class FizzBuzzController {
    form: HTMLFormElement;
    button: HTMLButtonElement | null;

    constructor(form: HTMLFormElement) {
        this.form = form;
        this.button = form.querySelector('button');
        this.addEventListeners();
    }

    startCount()  {
        console.log("1, 2, fizz..")
    } 

    addEventListeners() {
        if(this.button) {
            this.button.addEventListener('click', () => {
                this.startCount();
            });
        }
     }
}
