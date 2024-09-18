import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css',
})
export class BmisolverComponent {
  result: string = '0';
  calculate(kg: HTMLInputElement, cm: HTMLInputElement) {
    this.result = (
      Number(kg.value) / Math.pow(Number(cm.value) / 100, 2)
    ).toFixed(1);
  }
}
