import { Component } from '@angular/core';

@Component({
  selector: 'app-userage',
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css',
})
export class UserageComponent {
  age: number | string = 0;

  showAge(birthdate: HTMLInputElement) {
    const birthdateInMs: number = new Date(birthdate.value).getTime();
    const dateNowInMs: number = new Date().getTime();

    const age: number = Math.floor(
      (dateNowInMs - birthdateInMs) / 1000 / 60 / 60 / 24 / 365
    );

    if (age > 0) {
      this.age = age;
    } else {
      this.age = 'Invalid.';
    }
  }
}
