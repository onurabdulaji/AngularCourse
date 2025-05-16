import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<newTaskData>();
  enteredTitle = '';
  eneteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSumbit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.eneteredSummary,
      date: this.enteredDate,
    });
  }
}
