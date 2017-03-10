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

   public cities = [
    {
      Id:1,
      Name: 'Hà Nội'
    },
    {
      Id:2,
      Name: 'Hồ Chí Minh'
    }
  ];
}
