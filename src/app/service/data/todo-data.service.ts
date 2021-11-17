import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }

  retriveAllTodos(userName: string){
    return this.http.get<Todo[]>(`http://localhost:4040/jpa/users/${userName}/todos`)
  }

  updateTodo(userName:string ,id : number , todo : Todo){
    return this.http.put<Todo>(`http://localhost:4040/jpa/users/${userName}/todos/${id}`,todo)
  }

  deleteTodo(userName:string , id : number){
    return this.http.delete(`http://localhost:4040/jpa/users/${userName}/todos/${id}`)
  }

  retriveTodo(userName:string , id : number){
    return this.http.get<Todo>(`http://localhost:4040/jpa/users/${userName}/todos/${id}`)
  }

  
  createTodo(userName: string , todo : Todo){
    return this.http.post<Todo>(`http://localhost:4040/jpa/users/${userName}/todos`,todo)
  }
}
