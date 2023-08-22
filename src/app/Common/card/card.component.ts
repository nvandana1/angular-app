import { TaskService } from './../services/task.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private service: TaskService) {}
  @Input() tasks: any;
  @Input() allTasks: any;
  setAsDone() {
    if(this.tasks.status === 'Not Done'){
      this.service.markTaskAsDone(this.allTasks,this.tasks,'Done');
    }
    else{
      this.service.markTaskAsDone(this.allTasks,this.tasks,'Not Done');
    }

  }
}
