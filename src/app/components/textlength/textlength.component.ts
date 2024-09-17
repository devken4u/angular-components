import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css',
})
export class TextlengthComponent {
  textLength: number = 0;

  getLength(text: HTMLInputElement) {
    this.textLength = text.value.length;
  }
}
