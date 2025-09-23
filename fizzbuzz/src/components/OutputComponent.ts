export class OutputComponent {
    container: HTMLElement;
    tallyEl: HTMLElement;
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
            <h2>Result:</h2>
            <li id='tally-el'>Tally for n: 0</li>
            <li id='fizz-el'>Fizz: 0</li>
            <li id='buzz-el'>Buzz: 0</li>
        `;
        this.container.appendChild(outputElement);

        this.tallyEl = document.getElementById('tally-el')!;
        this.fizzEl = document.getElementById('fizz-el')!;
        this.buzzEl = document.getElementById('buzz-el')!;
    }

    updateOutput(input: string, fizz: number, buzz: number) {
        this.tallyEl.textContent = `Tally for n: ${input}`;
        this.fizzEl.textContent = `Fizz: ${fizz}`;
        this.buzzEl.textContent = `Buzz: ${buzz}`;
    }
}