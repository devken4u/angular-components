import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css',
})
export class CompoundinterestcalculatorComponent {
  compound: string = '0';

  calculate(
    principal: HTMLInputElement,
    rate: HTMLInputElement,
    time: HTMLInputElement,
    frequency: HTMLInputElement
  ) {
    const rateDecimal = Number(rate.value) / 100;

    this.compound = (
      Number(principal.value) *
      (1 + rateDecimal / Number(frequency.value)) **
        (Number(frequency.value) * Number(time.value))
    ).toFixed(2);
  }
}
