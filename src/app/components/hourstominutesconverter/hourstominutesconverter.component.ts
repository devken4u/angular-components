import { Component } from '@angular/core';

@Component({
  selector: 'app-hourstominutesconverter',
  templateUrl: './hourstominutesconverter.component.html',
  styleUrl: './hourstominutesconverter.component.css',
})
export class HourstominutesconverterComponent {
  result: string = '';
  convert(hour: HTMLInputElement) {
    this.result = `${hour.value} hour(s) is ${
      Number(hour.value) * 60
    } minute(s)`;
  }
}
