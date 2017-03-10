import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  public cities = [
    {
      Id:1,
      Name: 'Hà Nội'
    },
    {
      Id:2,
      Name: 'Hồ Chí Minh'
    }
  ];
}
