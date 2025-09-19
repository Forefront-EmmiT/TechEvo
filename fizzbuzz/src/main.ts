import './style.css'
import { FizzBuzzController } from './components/FizzBuzzController'
import { FormComponent } from './components/FormComponent'

const app = document.querySelector<HTMLDivElement>('#app');
if(app) {
  const formComponent = new FormComponent(app);
  if(formComponent.form) {
    const fizzBuzzController = new FizzBuzzController(formComponent.form, formComponent.input)
    fizzBuzzController.init();
  }
}