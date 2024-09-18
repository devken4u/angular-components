import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css',
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    'Don’t watch the clock; do what it does. Keep going. - Sam Levenson',
    'Believe you can and you’re halfway there. - Theodore Roosevelt',
    'Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs',
    'You miss 100% of the shots you don’t take. - Wayne Gretzky',
    'The best way to predict the future is to create it. - Peter Drucker',
    'It always seems impossible until it’s done. - Nelson Mandela',
    'Act as if what you do makes a difference. It does. - William James',
    'Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis',
  ];
  quote: string = '';

  generate() {
    this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
