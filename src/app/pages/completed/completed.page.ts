import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss']
})
export class CompletedPage implements OnInit {

completed: Todo[] = [];

  constructor(private serviceService:ServiceService){}

  ngOnInit(): void {
    this.completed=this.serviceService.read().filter((element)=>
    element.completed==true);

    console.log(this.completed);
  }

/*   delete(ele: Todo): void {      MANCA METODO SU BUTTON ELIMINA
  this.completed.delete(ele);
  }
 */
}
