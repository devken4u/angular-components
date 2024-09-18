import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css',
})
export class UppercasegreetingComponent {
  greeting: string = '';
  uppercase(text: HTMLInputElement) {
    this.greeting = `Hi, ${text.value.toUpperCase()}`;
  }
}
