"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//de su dung duoc service fai import cai nay
var core_1 = require("@angular/core");
//end import
var http_1 = require("@angular/http"); //dung de goi api tu link 
require("rxjs/add/operator/map"); // map
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
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
        this.apiUrl = "http://58c363fa17bb2612000870e1.mockapi.io/api/employees/";
    }
    EmployeeService.prototype.GetList = function () {
        return this._http.get(this.apiUrl).map(function (response) { return response.json(); });
        //tuong ung co cac phuong thuc post,put,delete...
    };
    EmployeeService.prototype.GetSingle = function (id) {
        return this._http.get(this.apiUrl + id).map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.Update = function (id, data) {
        return this._http.put(this.apiUrl + id, data).map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.Add = function (data) {
        return this._http.post(this.apiUrl, data).map(function (response) { return response.json(); });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable() //bat buoc dang ky decorator Injectable trong class , neu ko se loi ko the inject duoc http
    ,
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map