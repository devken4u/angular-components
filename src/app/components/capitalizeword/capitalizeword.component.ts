import { Component } from '@angular/core';

@Component({
  selector: 'app-capitalizeword',
  templateUrl: './capitalizeword.component.html',
  styleUrl: './capitalizeword.component.css',
})
export class CapitalizewordComponent {
  capitalizedWord: string = '';
  capitalize(word: HTMLInputElement) {
    this.capitalizedWord = word.value[0].toUpperCase() + word.value.slice(1);
  }
}
