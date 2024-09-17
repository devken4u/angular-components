import { Component } from '@angular/core';

@Component({
  selector: 'app-showusername',
  templateUrl: './showusername.component.html',
  styleUrl: './showusername.component.css',
})
export class ShowusernameComponent {
  username: string = '';

  showUsername(username: HTMLInputElement) {
    this.username = username.value;
  }
}
