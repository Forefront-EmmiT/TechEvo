import { ruleList } from "../rules/rules"

export class FizzBuzzController {
    form: HTMLFormElement;
    input: HTMLInputElement;
    fizzCount: number;
    buzzCount: number;
    fizzBuzzCount: number;
    numberCount: number;

    constructor(form: HTMLFormElement, input: HTMLInputElement) {
        this.form = form;
        this.input = input;
        this.fizzCount = 0;
        this.buzzCount = 0;
        this.fizzBuzzCount = 0;
        this.numberCount = 0;
    }
    
    init() {
        this.addEventListeners();
    }

    testRules(testNumber: number) {
        for (const rule of ruleList) {
            if (rule.condition(testNumber)) {
                const result = rule.output;
                this.countRuleMatches(testNumber, result);
                return
            }
        }
        this.countRuleMatches(testNumber, '')
    }

    startCount(input: number)  {
        this.fizzCount = 0;
        this.buzzCount = 0;
        this.fizzBuzzCount = 0;
        this.numberCount = 0;

        for (let i = 1; i <= input; ++i) {
            this.testRules(i);
        }
        this.renderOutput();
    }

    countRuleMatches(testNumber: number, result: string) {
        if(result == "Fizz") {  
            this.fizzCount++
        }
        if(result == "Buzz") {  
            this.buzzCount++
        }
        if(result == "FizzBuzz") {  
            this.fizzBuzzCount++
        }
        if(testNumber) {  
            this.numberCount++
        }
    }

    renderOutput() {
        console.log("antalet FizzBuzz: " + this.fizzBuzzCount);
        console.log("antalet Fizz: " + this.fizzCount);
        console.log("antalet Buzz: " + this.buzzCount);

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
