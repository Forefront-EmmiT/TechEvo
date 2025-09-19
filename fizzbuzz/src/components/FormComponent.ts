export class FormComponent {
    form: HTMLFormElement | null;

    constructor(container: HTMLElement) {
        container.innerHTML= `
            <form id="fizzbuzz-form">
                <input type="number" id="input-number" placeholder="Insert number" required>
                <button type="submit">Buzz this button to fizz this game up</button>
            </form>
        `;
        this.form = container.querySelector<HTMLFormElement>('#fizzbuzz-form')
    }
}
