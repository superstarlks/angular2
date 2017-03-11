import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

//su dung service cho toan bo he thong
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';

// su dung http api, fai import HttpModule
import { HttpModule } from '@angular/http';

//su dung routing thi import tai day
import { appRoutes } from './app.routes';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent
  ],

  //su dung service chung cho toan bo he thong
  providers: [EmployeeService],
  //end service
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
