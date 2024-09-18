import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css',
})
export class UsernamevalidatorComponent {
  result: string = '';

  checkLength(username: string): boolean {
    if (username.length >= 8) {
      return true;
    }
    return false;
  }

  checkNumeric(username: string): boolean {
    let numericCount = 0;
    for (let i = 0; i < username.length; i++) {
      if (parseFloat(username[i])) {
        numericCount++;
      }
      if (numericCount >= 2) {
        return true;
      }
    }
    return false;
  }

  validate(username: HTMLInputElement) {
    if (
      this.checkLength(username.value.trim()) &&
      this.checkNumeric(username.value.trim())
    ) {
      this.result = 'Valid';
    } else {
      this.result = 'Invalid';
    }
  }
}
