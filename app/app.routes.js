"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router"); //import 2 cai nay de sd router
var home_component_1 = require("./home.component");
var employee_component_1 = require("./employee.component");
var employee_detail_component_1 = require("./employee-detail.component");
var employee_overview_component_1 = require("./employee-overview.component");
var employee_projects_component_1 = require("./employee-projects.component");
var employee_edit_component_1 = require("./employee-edit.component");
var employee_add_component_1 = require("./employee-add.component");
var login_component_1 = require("./login.component");
var check_login_guard_1 = require("./guards/check-login.guard");
var check_save_form_guard_1 = require("./guards/check-save-form.guard");
var notfound_component_1 = require("./notfound.component");
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    // redirectTo : {path: '', redirectTo:'employees' , pathMatch:'full'}, //ko can fai co dấu /, có sẽ có lỗi
    { path: 'employees', component: employee_component_1.EmployeeListComponent, canActivate: [check_login_guard_1.CheckLoginGuard] },
    { path: 'employee-edit/:id', component: employee_edit_component_1.EmployeeEditComponent },
    { path: 'employee-add', component: employee_add_component_1.EmployeeAddComponent },
    {
        path: 'employee-detail/:id', component: employee_detail_component_1.EmployeeDetailComponent, canDeactivate: [check_save_form_guard_1.CheckSaveFormGuard],
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: employee_overview_component_1.EmployeeOverviewComponent },
            { path: 'projects', component: employee_projects_component_1.EmployeeProjectsComponent },
        ]
    },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing); //khai bao appRoutes de import vao appmodule
//# sourceMappingURL=app.routes.js.map