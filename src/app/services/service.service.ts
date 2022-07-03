import { Injectable } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  deleteTodo(): any {
    throw new Error('Method not implemented.');
  }

  todolist: Todo[] = [];

  constructor() { }

  stampa(nuovooggetto:Todo): void {
    this.todolist.push(nuovooggetto);
  }

  read(): Todo[]{
    return this.todolist;
  }

  delete(ele: Todo) {
    const i: number = this.todolist.indexOf(ele);
    this.todolist.splice(i, 1);
  }


}
