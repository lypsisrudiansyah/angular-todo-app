import { Todo } from './../../interfaces/todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }


}
