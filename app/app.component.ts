import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hell {{title}}</h1>
  <img [src] = "image" />
  
  <my-tutorial></my-tutorial>
  <input type = "text" [value]= "welcometext" />
  `
})
export class AppComponent {
  public title = "TED"

  //property binding
  public image = "http://img.f30.vnecdn.net/2017/03/08/xe-bien-do-3797-1488949522_490x294.jpg";
  public welcometext = "welcome to kingcom vietnam";
 }
