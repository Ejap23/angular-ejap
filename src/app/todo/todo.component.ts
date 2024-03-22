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
  todoList: string[] = []
   
  pushItemToList(){

    this.todoList.push(this.todoItem.value as string)
    this .todoItem.setValue("")
  }

  removeItem(index: number) {
    this.todoList.splice(index, 1);
  }

}
