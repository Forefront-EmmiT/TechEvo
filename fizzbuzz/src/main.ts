import './style.css'
import { FizzBuzzController } from './controllers/FizzBuzzController'
import { FormComponent } from './components/FormComponent'
import { OutputComponent } from './components/OutputComponent'

const app = document.querySelector<HTMLDivElement>('#app');
if(app) {
  const formComponent = new FormComponent(app);
  const outputComponent = new OutputComponent(app);
  if(formComponent.form) {
    const fizzBuzzController = new FizzBuzzController(formComponent.form, formComponent.input)
    fizzBuzzController.init();
  }
}