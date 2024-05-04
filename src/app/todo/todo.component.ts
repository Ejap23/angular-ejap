import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-todo',
  standalone:true,
  imports:[ReactiveFormsModule, NgFor],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoItem = new FormControl('', Validators.required );
  todoName = new FormControl('', Validators.required );
  todoList: any[] = [];




  async pushItemToList() {
    const todoItem = this.todoItem.value;
    const todoName = this.todoName.value;
  
    try {
      const response = await axios.post('http://localhost:3000/todoS', {
        Name: todoName,
        taskName: todoItem
      });
      this.todoList.push(response.data);
      this.todoName.reset();
      this.todoItem.reset();
    } catch (error) {
      console.log('Error', error);
    }
  }

  
  
 
}