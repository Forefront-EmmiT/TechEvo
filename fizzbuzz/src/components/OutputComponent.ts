export class OutputComponent {
    container: HTMLElement;
    fizzBuzzEl: HTMLElement;
    fizzEl: HTMLElement;
    buzzEl: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
        this.renderOutput()
    }
    
    renderOutput() {
        const outputElement = document.createElement('div');
        outputElement.id = 'output'
        outputElement.innerHTML = `
            <li id='fizzbuzz-el'>FizzBuzz: 0</li>
            <li id='fizz-el'>Fizz: 0</li>
            <li id='buzz-el'>Buzz: 0</li>
        `;
        this.container.appendChild(outputElement);

        this.fizzBuzzEl = document.getElementById('fizzbuzz-el')!;
        this.fizzEl = document.getElementById('fizz-el')!;
        this.buzzEl = document.getElementById('buzz-el')!;
    }

    updateOutput(fizzbuzz: number, fizz: number, buzz: number) {
        this.fizzBuzzEl.textContent = `Fizzbuzz: ${fizzbuzz}`;
        this.fizzEl.textContent = `Fizz: ${fizz}`;
        this.buzzEl.textContent = `Buzz: ${buzz}`;
    }
}