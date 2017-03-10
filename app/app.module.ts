import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {FormsModule} from '@angular/forms';

//su dung service cho toan bo he thong
import { EmployeeListComponent }   from './employee.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,EmployeeListComponent],

  //su dung service chung cho toan bo he thong
   providers: [EmployeeService],
  //end service
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 
}
