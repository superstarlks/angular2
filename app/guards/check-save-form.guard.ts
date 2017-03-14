import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import {EmployeeDetailComponent} from '../employee-detail.component';
@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent> {
    //truyen vao component nao muon check 
    //tra ve kieu void
    canDeactivate(component: EmployeeDetailComponent ) {
        //dang co thay doi thi ko cho thoat ra
        alert('you can not leave this page without saving data');
        return false;
    }
}