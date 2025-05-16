import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type newTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userid!: string;
  @Input({ required: true }) name!: string;
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

  onAddTask(taskData: newTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.userid,
    });
    this.isAddingTask = false;
  }
}
