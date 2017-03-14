import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { Subscription } from 'rxjs';
//dung decorator Component
@Component({
    selector: 'employee-add-component',
    templateUrl: './app/employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit {
    public employee: any;
    constructor(
        private router: Router, private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService
    ) {

    }
    ngOnInit() {
        this.employee = {};
    }

    GotoEmployee() {
        this.router.navigate(['employees']); //vd sau nay khi insert xong de tro ve list
    }

    SaveForm() {
        this.employeeService.Add(this.employee).subscribe(response => {
            if (response) {
                alert('add success');
                this.router.navigate(['/employees']);
            }
        })
    }
}