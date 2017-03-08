import {Component} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`<h2>{{title}}</h2>
        <h3 *ngIf="showLineIf">this is ngIf directive line.</h3>
        <div [ngSwitch] = "color">
            <p *ngSwitchCase="'red'">this line color is red</p>
            <p *ngSwitchCase="'blue'">this line color is blue</p>
            <p *ngSwitchCase="'green'">this line color is green</p>
            <p *ngSwitchDefault>invalid color</p>
        </div>
        <ul>
            <li *ngFor="let color of colors" >{{color}}</li>
        </ul>
    `
})
export class TutorialComponent{
    public showLineIf = false // tao 1 bien 
    public color = "red"; // muon hien thi dong "red" thi bo red vao
    public colors: string[] = ["red","green","blue"];
}
