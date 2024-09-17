import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrenheittocelsius',
  templateUrl: './fahrenheittocelsius.component.html',
  styleUrl: './fahrenheittocelsius.component.css',
})
export class FahrenheittocelsiusComponent {
  celsius: number | string = 0;

  convert(fahrenheit: HTMLInputElement) {
    this.celsius = ((Number(fahrenheit.value) - 32) * (5 / 9)).toFixed(2);
  }
}
