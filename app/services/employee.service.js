"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//end import
var EmployeeService = (function () {
    function EmployeeService() {
    }
    // get list kieu tra ve 1 mảng any[]
    EmployeeService.prototype.GetList = function () {
        var employees = [
            { Id: 1, Name: "Nguyen van A" },
            { Id: 2, Name: "Nguyen van B" },
            { Id: 3, Name: "Nguyen van C" },
            { Id: 4, Name: "Nguyen van D" },
        ];
        return employees;
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map