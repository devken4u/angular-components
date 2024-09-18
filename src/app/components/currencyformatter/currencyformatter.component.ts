import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css',
})
export class CurrencyformatterComponent {
  dollar: number = 0;
  euro: number = 0;

  format(number: HTMLInputElement) {
    this.dollar = Number(number.value) * 0.018;
    this.euro = Number(number.value) * 0.016;
  }
}
