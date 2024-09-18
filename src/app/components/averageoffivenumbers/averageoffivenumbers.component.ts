import { Component } from '@angular/core';

@Component({
  selector: 'app-averageoffivenumbers',
  templateUrl: './averageoffivenumbers.component.html',
  styleUrl: './averageoffivenumbers.component.css',
})
export class AverageoffivenumbersComponent {
  average: number = 0;

  calculate(
    number1: HTMLInputElement,
    number2: HTMLInputElement,
    number3: HTMLInputElement,
    number4: HTMLInputElement,
    number5: HTMLInputElement
  ) {
    this.average =
      (Number(number1.value) +
        Number(number2.value) +
        Number(number3.value) +
        Number(number4.value) +
        Number(number5.value)) /
      5;
  }
}
