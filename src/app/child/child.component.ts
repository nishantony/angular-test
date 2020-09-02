import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() loggedIn: boolean;
  @Input() empData: Employee;
  @Output() greetEvent = new EventEmitter<Employee>();
  // logginIn = true;
  constructor() { }

  ngOnInit() {
  }

  callParentfuntion() {
    this.greetEvent.emit(this.empData);
  }

}
