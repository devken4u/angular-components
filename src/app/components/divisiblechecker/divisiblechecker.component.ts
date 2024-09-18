import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css',
})
export class DivisiblecheckerComponent {
  result: string = '';

  check(number1: HTMLInputElement, number2: HTMLInputElement) {
    if (Number(number1.value) % Number(number2.value) === 0) {
      this.result = `${number1.value} is divisible by ${number2.value}`;
    } else {
      this.result = `${number1.value} is not divisible by ${number2.value}`;
    }
  }
}
