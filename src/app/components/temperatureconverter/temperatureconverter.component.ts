import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css',
})
export class TemperatureconverterComponent {
  temperature: string = '';

  CelsiusToFahrenheit(temperature: HTMLInputElement) {
    this.temperature =
      'Fahrenheit: ' + `${Number(temperature.value) * (9 / 5) + 32}`;
  }

  FahrenheitToCelsius(temperature: HTMLInputElement) {
    this.temperature =
      'Celsius: ' + `${((Number(temperature.value) - 32) * 5) / 9}`;
  }
}
