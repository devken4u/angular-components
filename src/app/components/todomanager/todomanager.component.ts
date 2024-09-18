import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css',
})
export class TodomanagerComponent {
  todoList: string[] = [];

  add(todo: HTMLInputElement) {
    this.todoList.push(todo.value);
    todo.value = '';
  }

  remove(index: number) {
    this.todoList.splice(index, 1);
  }
}
