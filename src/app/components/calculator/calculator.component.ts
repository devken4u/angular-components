import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  result: number = 0;

  multiply(number1: HTMLInputElement, number2: HTMLInputElement) {
    this.result = Number(number1.value) * Number(number2.value);
  }

  divide(number1: HTMLInputElement, number2: HTMLInputElement) {
    this.result = Number(number1.value) / Number(number2.value);
  }

  add(number1: HTMLInputElement, number2: HTMLInputElement) {
    this.result = Number(number1.value) + Number(number2.value);
  }

  subtract(number1: HTMLInputElement, number2: HTMLInputElement) {
    this.result = Number(number1.value) - Number(number2.value);
  }
}
