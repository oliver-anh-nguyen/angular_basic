import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Oliver';
  public age = 18;
  public arrFruit = ['Apple', 'Cherry', 'Orange'];
  public arrFruit2 = [{name: 'Apple', price: 10, sale: false},
    {name: 'Cherry', price: 20, sale: true},
    {name: 'Orange', price: -5, sale: false}];

  public cities = [
    {city: 'Select city', district: ['District']},
    {city: 'HCM', district: [
        'Go Vap',
        'Quan 12',
        'Quan 1',
        'Quan 2',
        'Quan 3',
        'Quan 4'
      ]},
    {city: 'Ha Noi', district: [
        'Hai Ba Trung',
        'Ton Duc Thang',
        'Hai Ba Trung',
        'Ton Duc Thang',
        'Hai Ba Trung',
        'Ton Duc Thang'
      ]}
  ]
  public districts:string[] = ['District'];
  constructor() { }

  public ngOnInit(): void {
    console.log('Fruits = ', this.arrFruit);
  }

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

  public changeCity(event: any): void {
    const city = event.target.value;
    if (!city) {
      return;
    }

    // 1
    // console.log('event', city);
    // const search = this.cities.filter(c => c.city === city);
    // console.log(search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    // 2
    this.districts = this.cities.find(data => data.city === city)?.district || [];
  }
}
