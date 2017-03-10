import {Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`<h2>{{title}}</h2>   
        <p>Child Component input: {{name}}</p>    
        <button [disabled] ="voted" (click) = "vote(true)" >Agree</button>
        <button [disabled] ="voted" (click) = "vote(false)" >Disgree</button>
        Result: {{voted}}
    `
})
export class TutorialComponent{ 
    @Input() name: string;

    @Output() onVote = new EventEmitter<boolean>();
    public voted:boolean = false;
    vote(agree:boolean){
        this.voted = true; //xac dinh co
        this.onVote.emit(agree); // xuat ra ket qua la vote hay ko vote
    }
}

