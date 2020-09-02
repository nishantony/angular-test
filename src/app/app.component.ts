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

  greet(data) {
    alert("Hey, " + data.name);
  }

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
  ]
}
