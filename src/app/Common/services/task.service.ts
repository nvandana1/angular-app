import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasksSubject = new BehaviorSubject<any>('');

  markTaskAsDone(allTasks:any,tasks:any,status:any): void {
    console.log(allTasks,tasks,status);
    const updatedTasks = allTasks;
    updatedTasks.find((task: any)=> task.id === tasks.id).status = status;
    this.tasksSubject.next(updatedTasks);
  }

  getTasks(): Observable<{ id: number; text: string; done: boolean }[]> {
    return this.tasksSubject.asObservable();
  }
}
