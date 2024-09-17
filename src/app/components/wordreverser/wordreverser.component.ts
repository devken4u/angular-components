import { Component } from '@angular/core';

@Component({
  selector: 'app-wordreverser',
  templateUrl: './wordreverser.component.html',
  styleUrl: './wordreverser.component.css',
})
export class WordreverserComponent {
  reversedText: string | any = '';

  reverse(text: HTMLInputElement) {
    this.reversedText = text.value.split('').reverse().join('');
  }
}
