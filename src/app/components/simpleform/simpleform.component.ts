import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css',
})
export class SimpleformComponent {
  firstname: string = '';
  lastname: string = '';
  address: string = '';

  submit(
    firstname: HTMLInputElement,
    lastname: HTMLInputElement,
    address: HTMLInputElement
  ) {
    this.firstname = firstname.value;
    this.lastname = lastname.value;
    this.address = address.value;
    firstname.value = '';
    lastname.value = '';
    address.value = '';
  }
}
