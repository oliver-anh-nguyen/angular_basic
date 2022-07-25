import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.component.html',
  styleUrls: ['./qr-view.component.scss']
})
export class QrViewComponent implements OnInit {
  public title = 'QR';
  public width = 300;
  public baseInfo = 'https://codelaghien.club/covid19';
  public qrInfo = this.baseInfo;
  public name = '';
  public age = 0;

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((v) => {
      console.log('queryParams=', v);
      // if (v && v.data) {
      //   const data = v.data;
      //   console.log('queryParams data =', data);
      //   console.log('name =', data.name);
      //   console.log('age =', data.age);
      //
      //   const obj = JSON.parse(data);
      //   console.log('queryParams obj =', obj);
      //   console.log('name =', obj.name);
      //   console.log('age =', obj.age);
      // }
    });
  }

  ngOnInit(): void {
  }

  public changeBase(event: any): void {
    this.baseInfo = event.target.value;
    this.qrInfo = event.target.value;
    this.combine();
  }

  public changeName(event: any): void {
    this.name = event.target.value;
    this.combine();
  }

  public changeAge(event: any): void {
    this.age = +event.target.value;
    this.combine();
  }

  private combine(): void {
    const data = JSON.stringify({ name: this.name, age: this.age });
    this.qrInfo = this.baseInfo + '?data=' + data;
    console.log('qrInfo=', this.qrInfo);
  }

}
