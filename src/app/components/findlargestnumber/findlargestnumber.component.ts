import { Component } from '@angular/core';

@Component({
  selector: 'app-findlargestnumber',
  templateUrl: './findlargestnumber.component.html',
  styleUrl: './findlargestnumber.component.css',
})
export class FindlargestnumberComponent {
  largest: number = 0;
  find(
    number1: HTMLInputElement,
    number2: HTMLInputElement,
    number3: HTMLInputElement
  ) {
    this.largest = Math.max(
      Number(number1.value),
      Number(number2.value),
      Number(number3.value)
    );
  }
}
