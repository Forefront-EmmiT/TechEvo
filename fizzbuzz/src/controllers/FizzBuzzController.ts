import { ruleList } from "../rules/rules"
import { FIZZBUZZ_CONSTANTS } from '../constants/constants'

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

    reset() {
        this.fizzCount = 0;
        this.buzzCount = 0;
        this.fizzBuzzCount = 0;
        this.numberCount = 0;
    }

    testRules(testNumber: number) {
        for (const rule of ruleList) {
            if (rule.condition(testNumber)) {
                const result = rule.output;
                this.countRuleMatches(result);
                return
            }
        }
        this.countRuleMatches('')
    }

    startCount(input: number)  {
        this.reset()
        for (let i = 1; i <= input; ++i) {
            this.testRules(i);
        }
        this.renderOutput();
    }

    countRuleMatches(result: string) {
        switch(result) {
            case FIZZBUZZ_CONSTANTS.FIZZBUZZ:
                this.fizzBuzzCount++
                break
            case FIZZBUZZ_CONSTANTS.FIZZ:
                this.fizzCount++
                break
            case FIZZBUZZ_CONSTANTS.BUZZ:
                this.buzzCount++
                break
            default:
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
