import { Component, OnInit } from '@angular/core';
import { Employee } from './employee'
import { EMPS } from './mock-employees'


@Component({
  selector: 'first-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  emps = EMPS;

  constructor() { }

  ngOnInit(): void {
  }

}
