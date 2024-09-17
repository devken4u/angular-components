import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css',
})
export class PalindromecheckerComponent {
  isPalindrome: boolean = false;

  check(text: HTMLInputElement) {
    const reversed = text.value.split('').reverse().join('');

    if (reversed === text.value) {
      this.isPalindrome = true;
    } else {
      this.isPalindrome = false;
    }
  }
}
