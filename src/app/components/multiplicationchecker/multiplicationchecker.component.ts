import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css',
})
export class MultiplicationcheckerComponent {
  result: string = '';

  check(number: HTMLInputElement, multiple: HTMLInputElement) {
    if (Number(number.value) % Number(multiple.value) === 0) {
      this.result = `${number.value} is a multiple of ${multiple.value}`;
    } else {
      this.result = `${number.value} is not multiple of ${multiple.value}`;
    }
  }
}
