import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { DeleteTaskDialogComponent } from 'src/app/dialogs/delete-task/delete-task-dialog.component';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  panelOpenState = true;
  tasks: Task[] = [];
  filter: 'all' | 'completed' | 'incomplete' = 'all';
  filteredTasks$ = new BehaviorSubject<Task[]>([]);
  newTask = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
    console.log(this.tasks)
    this.updateFilteredTasks();
  }

  addTask() {
    this.tasks.push({
      id: Math.random(),
      name: this.newTask,
      completed: false
    });
    this.newTask = '';
    this.saveTasks();
    this.updateFilteredTasks();
  }

  toggleTaskCompletion() {
    this.saveTasks();
    this.updateFilteredTasks();
  }

  deleteTask(taskId: number) {
    const dialogRef = this.dialog.open(DeleteTaskDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
        this.updateFilteredTasks();
      }
    });
  }

  changeFilter(filter: 'all' | 'completed' | 'incomplete') {
    this.filter = filter;
    this.updateFilteredTasks();
  }

  updateFilteredTasks() {
    let filtered = this.tasks;
    if (this.filter === 'completed') {
      filtered = this.tasks.filter(task => task.completed);
    } else if (this.filter === 'incomplete') {
      filtered = this.tasks.filter(task => !task.completed);
    }
    this.filteredTasks$.next(filtered);
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}