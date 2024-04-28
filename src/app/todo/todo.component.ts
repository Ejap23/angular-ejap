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
  todoList: any[] = [];
  editIndex: number | null = null;



  async pushItemToList() {
    const todoItem = this.todoItem.value;
  
    try {
      const response = await axios.post('http://localhost:3000/todoS', { itemName: todoItem });
      this.todoList.push(response.data);
      this.todoItem.reset();
    } catch (error) {
      console.log('Error', error);
    }
  }

  
  async removeItem(index: number) {
    this.todoList.splice(index, 1);
  }

 async editItem(index: number) {
    this.todoItem.setValue(this.todoList[index]);
    this.editIndex = index;
  }
}