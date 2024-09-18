import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css',
})
export class GuessnumbergameComponent {
  constructor() {
    this.randomNumber = this.generate();
  }

  randomNumberPlaceholder: string = '?';
  randomNumber: number | undefined;

  counter: number = 0;

  checkGuess(guess: HTMLInputElement) {
    if (Number(guess.value) === this.randomNumber) {
      this.randomNumberPlaceholder = `${guess.value} is Correct`;
    } else {
      this.randomNumberPlaceholder = `${guess.value} is Wrong`;
    }
    guess.value = '';
  }

  generate() {
    return Math.floor(Math.random() * 10) + 1;
  }

  newRandomNumber() {
    this.randomNumber = this.generate();
    this.randomNumberPlaceholder = '?';
  }
}
