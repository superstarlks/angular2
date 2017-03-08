import {Component} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`<h2>{{title}}</h2>
        <p [ngClass] = "{classOne:cone, classTwo:ctwo}" >this is ngClass style</p>
        <button (click) = "Toggle()">Toggle</button>
        <p [ngStyle] = "{'font-style': style, 'font-size':size }" >this is paragaph</p>
    `,
    styles:[
        `
        .classOne{
            color: yellow;
        }
        .classTwo{
            background-color: black;
        }
        `
            ]
})
export class TutorialComponent{ 
    public cone = true;
    public ctwo = true;
    public style = "italic";
    public size = "30px";
    Toggle(){
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
}
