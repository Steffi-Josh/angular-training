import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // [
  //   new Todo(1,'Onepiece',false,new Date),
  //   new Todo(2,'bleach',false,new Date),
  //   new Todo(3,'Naruto',false,new Date)
  // ]

  todos: Todo[] = [];
  message !: string;

  constructor(private tododataService: TodoDataService , private route : Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  updateTodo(id: number) {
  //  this.tododataService.updateTodo(id);
    this.route.navigate(['todo',id])
  }

  addTodo(){
    this.route.navigate(['todo',-1])
  }

  refreshTodos() {
    this.tododataService.retriveAllTodos('admin').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    this.tododataService.deleteTodo('admin', id).subscribe(
      response => {
        console.log(response);
        this.message = `Deletion of Todo ${id} is successfull!`
        this.refreshTodos();
      }
    )
  }

}
