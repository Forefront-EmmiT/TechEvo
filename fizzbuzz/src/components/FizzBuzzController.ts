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
        for (let i = 1; i <= input; ++i) {
            console.log(i)
        }
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
