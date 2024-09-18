import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css',
})
export class WordcounterComponent {
  wordCount: number = 0;

  count(text: HTMLInputElement) {
    this.wordCount = text.value.split(' ').length;
  }
}
