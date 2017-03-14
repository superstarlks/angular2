import { Routes, RouterModule } from '@angular/router'; //import 2 cai nay de sd router
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects.component';
import { LoginComponent } from './login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import {CheckSaveFormGuard} from './guards/check-save-form.guard'; 
import { NotFoundComponent } from './notfound.component';
const routing: Routes = [
    { path: '', component: HomeComponent }, //ko can fai co dấu /, có sẽ có lỗi
    // redirectTo : {path: '', redirectTo:'employees' , pathMatch:'full'}, //ko can fai co dấu /, có sẽ có lỗi
    { path: 'employees', component: EmployeeListComponent, canActivate: [CheckLoginGuard] },

    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent, canDeactivate: [CheckSaveFormGuard],
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' }, //ko co gi thi defaul la overview
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectsComponent },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing); //khai bao appRoutes de import vao appmodule