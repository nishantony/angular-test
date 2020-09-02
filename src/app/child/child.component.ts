import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() loggedIn: boolean;
  @Input() employeeData: Employee;
  @Output() sendEvent = new EventEmitter<Employee>();
  constructor() { }

  ngOnInit() {
  }

  callParentFunction() {
    this.sendEvent.emit(this.employeeData);
  }

}
