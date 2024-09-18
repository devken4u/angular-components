import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css',
})
export class FibonaccigeneratorComponent {
  fibonacciNumbers: number[] = [];

  fibonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  generate(n: HTMLInputElement) {
    this.fibonacciNumbers = [];

    for (let i = 0; i < Number(n.value); i++) {
      this.fibonacciNumbers.push(this.fibonacci(i));
    }
  }
}
