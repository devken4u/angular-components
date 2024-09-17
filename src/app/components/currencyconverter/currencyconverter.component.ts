import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css',
})
export class CurrencyconverterComponent {
  convertedValue: number = 0;

  convert(value: HTMLInputElement) {
    const PHP_PER_DOLLAR = 55.59;

    this.convertedValue = Number(
      (Number(value.value) / PHP_PER_DOLLAR).toFixed(2)
    );
  }
}
