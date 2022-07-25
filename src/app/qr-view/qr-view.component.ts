import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.component.html',
  styleUrls: ['./qr-view.component.scss']
})
export class QrViewComponent implements OnInit {
  public title = 'QR';
  public qrInfo = 'https://zingnews.vn/';
  public width = 300;
  constructor() { }

  ngOnInit(): void {
  }

  public change(event: any): void {
    console.log(event.target.value);
    this.qrInfo = event.target.value;
  }

}
