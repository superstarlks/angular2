import { Routes, RouterModule }   from '@angular/router'; //import 2 cai nay de sd router
import {HomeComponent} from './home.component';
import {EmployeeListComponent} from './employee.component';

const routing : Routes = [
    {path: '', component:HomeComponent}, //ko can fai co dấu /, có sẽ có lỗi
    {path: 'employees', component:EmployeeListComponent}
]

export const appRoutes = RouterModule.forRoot(routing); //khai bao appRoutes de import vao appmodule