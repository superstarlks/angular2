import { Component, OnInit } from '@angular/core';
//import service employee
import { EmployeeService } from './services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'employee-list',
    templateUrl: './app/employee.component.html',
    //goi service rieng cho thag emplyee o day
    // providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {
    public employees: any[];
    public pages: number[];
    public currentPage: number;
    //khai bao contructure
    //bien employeeService truc thuộc EmployeeService
    constructor(private employeeService: EmployeeService,
        private router: Router, private activatedRouter: ActivatedRoute
    ) {

    }

    //implements OnInit fai co phuong thuc này
    ngOnInit() {
        //lay link theo param
        this.activatedRouter.queryParams.subscribe( params => {
            this.currentPage = params['pageNumber'] || 1; //neu null thi gan = 1
            console.log(this.currentPage);
            console.log(params['filter']); //co the truyen them bien o day
        });
        // this.employees = this.employeeService.GetList(); dung de tra ve 1 mang

        //tra ve kieu json va bat loi (Handing error)
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
            console.log(response);
        }, error => {
            console.log(error);
        });
        this.pages = [1, 2, 3, 4, 5]; //vd phan trang
    }
    //mang any 

}