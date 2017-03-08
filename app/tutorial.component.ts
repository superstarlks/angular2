import {Component} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`<h2>This Angular2 Tutorial component aaaaaa</h2>
                <h3 [class.redColor] = "applyClass"> Apply Class </h3>
                <h4 [style.color] = "blueColor?'blue':'orange'" >Apply style</h4>
    `,
    styles:[`.redColor{
        color:red;
    }`]
})
export class TutorialComponent{
    public applyClass = true; //áp dụng class, =false ko áp dung
    public blueColor = false; //áp dụng style, =false ko áp dung
}
