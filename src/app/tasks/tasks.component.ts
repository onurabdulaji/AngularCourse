import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userid!: string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn the basics of Angular and build a simple application.',
      dueDate: '2023-10-01',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Learn the basics of Angular and build a simple application.',
      dueDate: '2023-10-01',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Learn the basics of Angular and build a simple application.',
      dueDate: '2023-10-01',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userid);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
