import {Component} from '@angular/core';
import {Router} from '@angular/router';
//dung decorator Component
@Component({
    selector : 'home-component',
    template : `<h2>This is Home Component  </h2>
            <button (click) = "GotoEmployee()">go to employee</button>
    `
})
export class HomeComponent{
    constructor (private router : Router){

    }

    GotoEmployee(){
        this.router.navigate(['employees']); //vd sau nay khi insert xong de tro ve list
    }
}