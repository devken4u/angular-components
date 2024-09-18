import { Component } from '@angular/core';

@Component({
  selector: 'app-areaofcircle',
  templateUrl: './areaofcircle.component.html',
  styleUrl: './areaofcircle.component.css',
})
export class AreaofcircleComponent {
  area: number = 0;

  calculate(radius: HTMLInputElement) {
    this.area = Math.PI * Number(radius.value) * Number(radius.value);
  }
}
