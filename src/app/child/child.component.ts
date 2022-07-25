import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()  name: string = '';
  @Output() call: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  public ngOnInit(): void {
  }

  public hiDaddy(): void {
      this.call.emit(this.name);
  }

  public giveMoney(amount: number): void {
    console.log(`My name is ` + this.name + ` thank you daddy give ` + amount);
  }

}
