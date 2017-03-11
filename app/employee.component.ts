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
            // this.employees = this.employeeService.GetList(); dung de tra ve 1 mang

            //tra ve kieu json va bat loi (Handing error)
            this.employeeService.GetList().subscribe((response:any)=>{
                this.employees = response;
                console.log(response);
            }, error =>{
                console.log(error);
            });
    }
    //mang any 
    
}