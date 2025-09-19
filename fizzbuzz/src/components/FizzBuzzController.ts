export class FizzBuzzController {
    form: HTMLFormElement;
    input: HTMLInputElement;

    constructor(form: HTMLFormElement, input: HTMLInputElement) {
        this.form = form;
        this.input = input;
    }
    
    init() {
        this.addEventListeners();
    }

    startCount(input: number)  {
        console.log(input)
    } 

    addEventListeners() {
        if(this.form) {
            this.form.addEventListener('submit', (event) => {
                event.preventDefault();
                const value = Number(this.input.value)
                this.startCount(value);
            });
        }
     }
}
