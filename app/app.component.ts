import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  public title = "Hello TED channel"
  public isLoggedIn: boolean;
  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    this.isLoggedIn = this.loginService.IsLogged(); //ktra trang thai login roi thi ko hien thi nut login dung ngIf
  }
  Logout() {
    this.loginService.SetLogin(false); //logout thi set false
    alert('Logged out');
  }
}
