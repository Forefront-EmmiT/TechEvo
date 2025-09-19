import { ruleList } from "../rules/rules"

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
        const matchedRule = ruleList.filter(rule => rule.condition(testNumber))
        const result = matchedRule.map(rule => rule.output).join('');
        console.log(result || testNumber)
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
