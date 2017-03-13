import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
//dung decorator Component
@Component({
    selector : 'employee-overview-component',
    template: `
        <h3>Overview employee</h3>
    `
    
})
export class EmployeeOverviewComponent implements OnInit, OnDestroy {
    public parentRouterId :number;
    public sub: Subscription;
    constructor (private router: Router, private activatedRoute: ActivatedRoute){

    }

    ngOnInit(){
        this.sub = this.activatedRoute.parent.params.subscribe(params =>{
            this.parentRouterId = params['id'];
            alert('children get id' + this.parentRouterId);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}