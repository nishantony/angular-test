import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() loggedIn: boolean;
  @Output() greetEvent = new EventEmitter();
  // logginIn = true;
  constructor() { }

  ngOnInit() {
  }

  callParentfuntion() {
    this.greetEvent.emit();
  }

}
