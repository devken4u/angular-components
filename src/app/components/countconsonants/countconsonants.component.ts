import { Component } from '@angular/core';

@Component({
  selector: 'app-countconsonants',
  templateUrl: './countconsonants.component.html',
  styleUrl: './countconsonants.component.css',
})
export class CountconsonantsComponent {
  consonantCount: number = 0;

  count(text: HTMLInputElement) {
    const vowels = 'aeiouAEIOU ';
    this.consonantCount = 0;
    for (let char of text.value) {
      if (!vowels.includes(char)) {
        this.consonantCount++;
      }
    }
  }
}
