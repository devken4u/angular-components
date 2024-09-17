import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css',
})
export class UsergreetingComponent {
  greetings: string = '';

  enter(name: HTMLInputElement) {
    this.greetings = `Hello ${name.value}, have a good day!!!`;
  }
}
