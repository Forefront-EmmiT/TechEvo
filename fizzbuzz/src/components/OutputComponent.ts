export class OutputComponent {
    container: HTMLElement;
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
            <li id='fizz-el'>Fizz: 0</li>
            <li id='buzz-el'>Buzz: 0</li>
        `;
        this.container.appendChild(outputElement);

        this.fizzEl = document.getElementById('fizz-el')!;
        this.buzzEl = document.getElementById('buzz-el')!;
    }

    updateOutput(fizz: number, buzz: number) {
        this.fizzEl.textContent = `Fizz: ${fizz}`;
        this.buzzEl.textContent = `Buzz: ${buzz}`;
    }
}