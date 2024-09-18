import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css',
})
export class WordshufflerComponent {
  shuffledWord: string = '';

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffle(text: HTMLInputElement) {
    this.shuffledWord = text.value
      .split(' ')
      .map((element) => this.shuffleArray(element.split('')).join(''))
      .join(' ');
  }
}
