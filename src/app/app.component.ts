import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "./Services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular12';

  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  public logout(): void {
    this.authService.logout();
  }
}
