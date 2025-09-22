export class FormComponent {
    form: HTMLFormElement | null;
    input: HTMLInputElement;

    constructor(container: HTMLElement) {
        const formElemet = document.createElement('form');
        formElemet.id = 'fizzbuzz-form'
        formElemet.innerHTML= `
            <form id="fizzbuzz-form">
                <input type="number" id="input-number" placeholder="Insert number" required>
                <button type="submit">Buzz this button to fizz this game up</button>
            </form>
        `;

        container.appendChild(formElemet);
        
        this.form = container.querySelector<HTMLFormElement>('#fizzbuzz-form');
        this.input = container.querySelector<HTMLInputElement>('#input-number')!;
    }
}
