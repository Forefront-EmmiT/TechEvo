import './style.css'
import { Game } from './Game'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>FizzBuzzed</h1>
    <button id="activateFun">Buzz this button to fizz this game up</button>
  </div>
`
document.addEventListener('DOMContentLoaded', () => {
  const activateFunButton = document.querySelector<HTMLButtonElement>('#activateFun');
  if(activateFunButton) {
    new Game(activateFunButton);
  }
})
