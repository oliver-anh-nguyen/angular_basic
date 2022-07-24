import { Component, OnInit } from '@angular/core';
import {CommonService} from "../Services/common.service";
import {count} from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public loginName = 'user';
  public myColor = 'red';
  public counter = 0;
  public counterDouble = 0;

  constructor(private common: CommonService) {

  }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterDouble = this.common.power(this.counter);
    this.common.counter++;
  }

}
