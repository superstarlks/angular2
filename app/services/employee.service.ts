//de su dung duoc service fai import cai nay
import { Injectable } from '@angular/core';
//end import

import { Http, Response } from '@angular/http'; //dung de goi api tu link 
import { Observable } from 'rxjs/Observable'; //import Observable de dung api
import 'rxjs/add/operator/map'; // map

@Injectable() //bat buoc dang ky decorator Injectable trong class , neu ko se loi ko the inject duoc http
export class EmployeeService {
    // get list kieu tra ve 1 mảng any[], set cung
    /*
    GetList(): any[] {
        let employees: any[] = [
            { Id: 1, Name: "Nguyen van A" },
            { Id: 2, Name: "Nguyen van B" },
            { Id: 3, Name: "Nguyen van C" },
            { Id: 4, Name: "Nguyen van D" },
        ];
        return employees;
    }
    */


    //goi api tu moc
    private apiUrl = "http://58c363fa17bb2612000870e1.mockapi.io/api/employees/";
    constructor(private _http: Http) {

    }

    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => response.json())
        //tuong ung co cac phuong thuc post,put,delete...
    }

    GetSingle(id: number): Observable<any> {
        return this._http.get(this.apiUrl + id).map((response: Response) => response.json())
    }

    Update(id: number, data: any): Observable<any> {
        return this._http.put(this.apiUrl + id, data).map((response: Response) => response.json())
    }

    Add(data: any): Observable<any> {
        return this._http.post(this.apiUrl, data).map((response: Response) => response.json())
    }
}