import { Component } from '@angular/core';

@Component({
  selector: 'app-largestwordinsentence',
  templateUrl: './largestwordinsentence.component.html',
  styleUrl: './largestwordinsentence.component.css',
})
export class LargestwordinsentenceComponent {
  largest: string = '';

  check(sentence: HTMLInputElement) {
    const words = sentence.value.split(' ');

    words.forEach((element) => {
      if (element.length > this.largest.length) {
        this.largest = element;
      }
    });
  }
}
