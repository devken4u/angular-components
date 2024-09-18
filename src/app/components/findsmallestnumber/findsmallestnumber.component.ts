import { Component } from '@angular/core';

@Component({
  selector: 'app-findsmallestnumber',
  templateUrl: './findsmallestnumber.component.html',
  styleUrl: './findsmallestnumber.component.css',
})
export class FindsmallestnumberComponent {
  smallest: number = 0;
  find(
    number1: HTMLInputElement,
    number2: HTMLInputElement,
    number3: HTMLInputElement
  ) {
    this.smallest = Math.min(
      Number(number1.value),
      Number(number2.value),
      Number(number3.value)
    );
  }
}
