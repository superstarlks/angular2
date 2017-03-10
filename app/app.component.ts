import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
   public title = "Hello TED channel"
   onSubmit(value: any) {
    console.log(value);
  }
}
