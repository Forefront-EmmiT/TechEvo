import { fizzBuzzRule, fizzRule, buzzRule } from "../rules/rules"

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

    testRules(testNumber: number) {
        if(fizzBuzzRule.condition(testNumber)) {
            console.log("FizzBuzz")
        } else if (fizzRule.condition(testNumber)) {
            console.log("Fizz")
        } else if (buzzRule.condition(testNumber)) {
            console.log("Buzz")
        } else {
            console.log(testNumber)
        }
    }

    startCount(input: number)  {
        for (let i = 1; i <= input; ++i) {
            this.testRules(i);
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
