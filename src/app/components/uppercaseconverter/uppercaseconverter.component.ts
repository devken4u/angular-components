import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css',
})
export class UppercaseconverterComponent {
  converted: string = '';
  convert(text: HTMLInputElement) {
    this.converted = text.value.toUpperCase();
  }
}
