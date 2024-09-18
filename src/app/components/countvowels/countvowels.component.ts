import { Component } from '@angular/core';

@Component({
  selector: 'app-countvowels',
  templateUrl: './countvowels.component.html',
  styleUrl: './countvowels.component.css',
})
export class CountvowelsComponent {
  vowelCount: number = 0;

  count(text: HTMLInputElement) {
    const vowels = 'aeiouAEIOU';
    this.vowelCount = 0;
    for (let char of text.value) {
      if (vowels.includes(char)) {
        this.vowelCount++;
      }
    }
  }
}
