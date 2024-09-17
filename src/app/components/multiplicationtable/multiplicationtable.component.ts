import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css',
})
export class MultiplicationtableComponent {
  table: string[] = [];
  tableColumn: number = 10;

  showMultiplicationTable(number: HTMLInputElement) {
    this.table = [];
    for (let i = 1; i <= this.tableColumn; i++) {
      this.table.push(`${number.value} x ${i} = ${Number(number.value) * i}`);
    }
  }
}
