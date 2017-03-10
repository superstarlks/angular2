import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
   public title = "Hello TED channel"
   onSubmit(value: any) {
    console.log(value);
  }
}
