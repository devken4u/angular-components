import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css',
})
export class EvenoddcheckerComponent {
  result: string = '';

  check(number: HTMLInputElement) {
    if (Number(number.value) % 2 === 0) {
      this.result = 'Even';
    } else {
      this.result = 'Odd';
    }
  }
}
