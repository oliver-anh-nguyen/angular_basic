import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenService: AuthService) { }

  ngOnInit(): void {
  }

  public login(): void {
    console.log('login');
    this.authenService.login('Oliver');
  }

}
