import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../employee-list.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './app-employee-detail.component.html',
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

public selectedEmployee = {};

  constructor(private _employeelistservice : EmployeeListService) { }

  ngOnInit() {
    this.selectedEmployee = this._employeelistservice.selectedEmployee;
  }

}
