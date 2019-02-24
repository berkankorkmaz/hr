import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../employee-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees ={};

  
  onClick(employee) {
    console.log(employee);
    this._employeelistservice.selectedEmployee = employee;
    this._router.navigate(['employeedetail']);
  } 

  constructor( private _employeelistservice : EmployeeListService,private _router: Router ) { }

  ngOnInit() {
    this._employeelistservice.getEmployees().subscribe((data: {}) => {
      console.log(data);
      this.employees = data;
    });
  }

}
