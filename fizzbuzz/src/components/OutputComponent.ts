export class OutputComponent {
    constructor(container: HTMLElement) {
        const outputElement = document.createElement('div');
        outputElement.id = 'output'
        outputElement.innerHTML = `
            <li>FizzBuzz: 0</li>
            <li>Fizz: 0</li>
            <li>Buzz: 0</li>
        `;
        container.appendChild(outputElement)
    }
}