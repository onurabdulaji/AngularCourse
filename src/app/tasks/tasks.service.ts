import { Injectable } from '@angular/core';
import { type newTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
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

  getUserTaks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: newTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: userId,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
