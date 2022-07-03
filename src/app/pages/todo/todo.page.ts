import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { filter, takeLast } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { ServiceService } from 'src/app/services/service.service';
//import { NgModel } from '@angular/forms';



@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})
export class TodoPage implements OnInit {

todolist: Todo[] = [];


constructor(private serviceService:ServiceService){}
  ngOnInit(): void {
    this.todolist = this.serviceService.read();
  }
task:string='';

counter:number=0;

addTodo() {
this.counter++
  let task:Todo={
    id:this.counter, title:this.task, completed:false,
  }
this.serviceService.stampa(task)
console.log(task)
}

}
