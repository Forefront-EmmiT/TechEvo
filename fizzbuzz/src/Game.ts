export class Game {
    button: HTMLButtonElement;

    constructor(button: HTMLButtonElement) {
        this.button = button;
        this.addEventListeners();
    }

    startCount()  {
        console.log("1, 2, fizz..")
    } 

    addEventListeners() {
        this.button.addEventListener('click', () => {
            this.startCount();
        });
     }
}
