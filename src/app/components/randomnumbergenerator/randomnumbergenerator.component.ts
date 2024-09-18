import { Component } from '@angular/core';

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html',
  styleUrl: './randomnumbergenerator.component.css',
})
export class RandomnumbergeneratorComponent {
  rand: number = 0;

  generate(min: HTMLInputElement, max: HTMLInputElement) {
    this.rand =
      Math.floor(Math.random() * (Number(max.value) - Number(min.value) + 1)) +
      Number(min.value);
  }
}
