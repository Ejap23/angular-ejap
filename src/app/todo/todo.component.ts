import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone:true,
  imports:[ReactiveFormsModule, NgFor],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoItem = new FormControl("");
  todoList: string[] = [];
  editIndex: number | null = null;

  pushItemToList() {
    if (this.editIndex !== null) {
      this.todoList[this.editIndex] = this.todoItem.value as string;
      this.editIndex = null;
    } else {
      this.todoList.push(this.todoItem.value as string);
    }
    this.todoItem.setValue("");
  }

  removeItem(index: number) {
    this.todoList.splice(index, 1);
  }

  editItem(index: number) {
    this.todoItem.setValue(this.todoList[index]);
    this.editIndex = index;
  }
}