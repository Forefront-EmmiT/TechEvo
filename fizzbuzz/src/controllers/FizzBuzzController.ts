import { ruleList } from "../rules/rules"
import { FIZZBUZZ_CONSTANTS } from '../constants/constants'
import { OutputComponent } from '../components/OutputComponent'

export class FizzBuzzController {
    form: HTMLFormElement;
    input: HTMLInputElement;
    fizzCount: number;
    buzzCount: number;
    numberCount: number;
    output: OutputComponent;

    constructor(form: HTMLFormElement, input: HTMLInputElement, output: OutputComponent) {
        this.form = form;
        this.input = input;
        this.fizzCount = 0;
        this.buzzCount = 0;
        this.numberCount = 0;
        this.output = output;
    }
    
    init() {
        this.addEventListeners();
    }

    reset() {
        this.fizzCount = 0;
        this.buzzCount = 0;
        this.numberCount = 0;
    }

    startCount(input: bigint)  {
        this.reset()

        const counts = new Map<string, bigint>();

        for (const rule of ruleList) {
            const count = input / rule.divisor;
            counts.set(rule.output, count)
        }

        this.fizzCount = Number(counts.get("Fizz") || 0n)
        this.buzzCount = Number(counts.get("Buzz") || 0n)

        this.renderOutput();
    }
    
    renderOutput() {
        this.output.updateOutput(
            this.fizzCount,
            this.buzzCount
        );
    }

    addEventListeners() {
        if(this.form) {
            this.form.addEventListener('submit', (event) => {
                event.preventDefault();
                const value = BigInt(this.input.value)
                this.startCount(value);
            });
        }
     }
}
