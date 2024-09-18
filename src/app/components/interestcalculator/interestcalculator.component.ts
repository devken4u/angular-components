import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css',
})
export class InterestcalculatorComponent {
  interest: number = 0;

  calculate(
    principal: HTMLInputElement,
    rate: HTMLInputElement,
    time: HTMLInputElement
  ) {
    this.interest =
      Number(principal.value) * Number(rate.value) * Number(time.value);
  }
}
