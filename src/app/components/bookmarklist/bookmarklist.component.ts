import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css',
})
export class BookmarklistComponent {
  url: string = 'https://www.facebook.com';

  display(url: HTMLInputElement) {
    this.url = url.value;
  }
}
