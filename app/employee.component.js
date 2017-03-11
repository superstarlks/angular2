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
var core_1 = require("@angular/core");
//import service employee
var employee_service_1 = require("./services/employee.service");
var EmployeeListComponent = (function () {
    //khai bao contructure
    //bien employeeService truc thuộc EmployeeService
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
    }
    //implements OnInit fai co phuong thuc này
    EmployeeListComponent.prototype.ngOnInit = function () {
        // this.employees = this.employeeService.GetList(); dung de tra ve 1 mang
        var _this = this;
        //tra ve kieu json va bat loi (Handing error)
        this.employeeService.GetList().subscribe(function (response) {
            _this.employees = response;
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        templateUrl: './app/employee.component.html',
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee.component.js.map