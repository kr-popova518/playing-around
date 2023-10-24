import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})

export class HomepageComponent {
  todo: string[] = [];
  done: string[] = [];

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    const todo = localStorage.getItem('todo');
    const done = localStorage.getItem('done');

    this.todo = todo ? JSON.parse(todo) : [];
    this.done = done ? JSON.parse(done) : [];
  }

  saveTasks() {
    localStorage.setItem('todo', JSON.stringify(this.todo));
    localStorage.setItem('done', JSON.stringify(this.done));
  }

  addTask(newTask: string) {
    if (!newTask) {
      alert('Please enter a task.');
    } else if (newTask.length > 50) {
      alert('Task is too long.');
    } else {
      this.todo.push(newTask);
      this.saveTasks();
    }
  }

  deleteTask(list: 'todo' | 'done', index: number) {
    if (list === 'todo') {
      this.todo.splice(index, 1);
    } else {
      this.done.splice(index, 1);
    }
    this.saveTasks();
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.saveTasks();
  }
}