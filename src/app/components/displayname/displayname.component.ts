import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css',
})
export class DisplaynameComponent {
  name: string = '';

  showName(name: HTMLInputElement) {
    this.name = name.value;
  }
}
