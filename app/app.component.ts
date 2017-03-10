import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hell {{title}}</h1>  
  <input type="text" #textname (keyup)="0" />
  <p>Agree number: {{agree}} - Disgree number: {{disgree}}</p>
  <my-tutorial *ngFor="let person of names" [name] = "person" (onVote) = "parentVote($event)" ></my-tutorial>
  `
})
export class AppComponent {
  public title = "TED channel"

public agree:number = 0;
public disgree:number = 0;
public names = ["Mr A","Mr B","Mr C","Mr D"];
  parentVote(agree:boolean){
    if(agree) this.agree++;
    else this.disgree++;
  }
 }
