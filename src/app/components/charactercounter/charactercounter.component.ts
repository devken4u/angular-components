import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css',
})
export class CharactercounterComponent {
  charCount: number = 0;

  getCharCount(text: HTMLInputElement) {
    this.charCount = text.value.split(' ').join('').length;
  }
}
