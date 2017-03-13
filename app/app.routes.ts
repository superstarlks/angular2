import { Routes, RouterModule }   from '@angular/router'; //import 2 cai nay de sd router
import {HomeComponent} from './home.component';
import {EmployeeListComponent} from './employee.component';
import {EmployeeDetailComponent} from './employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects.component';
import {NotFoundComponent} from './notfound.component';
const routing : Routes = [
    {path: '', component:HomeComponent  }, //ko can fai co dấu /, có sẽ có lỗi
    // redirectTo : {path: '', redirectTo:'employees' , pathMatch:'full'}, //ko can fai co dấu /, có sẽ có lỗi
    {path: 'employees', component:EmployeeListComponent},
    {path: 'employee-detail/:id', component: EmployeeDetailComponent, children:[
        {path: '', redirectTo:'overview' , pathMatch:'full'}, //ko co gi thi defaul la overview
        {path: 'overview' , component: EmployeeOverviewComponent },
        {path: 'projects' , component: EmployeeProjectsComponent },
    ]},
    {path: '**', component:NotFoundComponent}
]

export const appRoutes = RouterModule.forRoot(routing); //khai bao appRoutes de import vao appmodule