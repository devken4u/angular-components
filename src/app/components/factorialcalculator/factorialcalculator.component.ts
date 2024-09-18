import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css',
})
export class FactorialcalculatorComponent {
  result: number = 0;

  factorial(number: HTMLInputElement) {
    let tempResult: number = 1;

    for (let i = 2; i <= Number(number.value); i++) {
      tempResult *= i;
    }

    this.result = tempResult;
  }
}
