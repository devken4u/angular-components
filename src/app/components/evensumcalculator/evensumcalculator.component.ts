import { Component } from '@angular/core';

@Component({
  selector: 'app-evensumcalculator',
  templateUrl: './evensumcalculator.component.html',
  styleUrl: './evensumcalculator.component.css',
})
export class EvensumcalculatorComponent {
  result: number = 0;

  calculate(n: HTMLInputElement) {
    this.result = 0;
    for (let i = 1; i <= Number(n.value); i++) {
      if (i % 2 === 0) {
        this.result += i;
      }
    }
  }
}
