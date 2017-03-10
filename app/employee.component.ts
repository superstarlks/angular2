import { Component, OnInit } from '@angular/core';
//import service employee
import { EmployeeService } from './services/employee.service';
@Component({
    selector: 'employee-list',
    templateUrl: './app/employee.component.html',
    //goi service rieng cho thag emplyee o day
   // providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit{
    public employees: any[];
    //khai bao contructure
    //bien employeeService truc thuộc EmployeeService
    constructor(private employeeService : EmployeeService){

    }

    //implements OnInit fai co phuong thuc này
    ngOnInit(){
            this.employees = this.employeeService.GetList();
    }
    //mang any 
    
}