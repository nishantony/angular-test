import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';
  userLoggedIn = true;

  mockData: Employee[] = [
    {
      employeeID: "emp1",
      name: "Joe",
      email: "j@gmail.com",
      dept: "IT"
    },
    {
      employeeID: "emp2",
      name: "Leo",
      email: "l@gmail.com",
      dept: "Finance"
    },
    {
      employeeID: "emp3",
      name: "Tom",
      email: "T@gmail.com",
      dept: "Marketing"
    },
    {
      employeeID: "emp4",
      name: "John",
      email: "john@gmail.com",
      dept: "IT"
    }
  ];

  displayMessage(data) {
    console.log(data);
    alert('Hi, '+ data.name);
  }

  /* create a delete func. to remove the object from the list. employeeID is unique */
}
