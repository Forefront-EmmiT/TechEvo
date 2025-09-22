export class TitleComponent {
    constructor(container: HTMLElement) {
        const titleElement = document.createElement('div');
        titleElement.id = "title";
        titleElement.innerHTML = `
                <h1>FizzBuzz</h1>
            `;
        container.appendChild(titleElement)
    }
}