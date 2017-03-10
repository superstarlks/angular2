//de su dung duoc service fai import cai nay
import {Injectable} from '@angular/core'
//end import

export class EmployeeService {
    // get list kieu tra ve 1 mảng any[]
    GetList(): any[] {
        let employees: any[] = [
            { Id: 1, Name: "Nguyen van A" },
            { Id: 2, Name: "Nguyen van B" },
            { Id: 3, Name: "Nguyen van C" },
            { Id: 4, Name: "Nguyen van D" },
        ];
        return employees;
    }
}