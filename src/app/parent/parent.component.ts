import {Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public message = '';
  @ViewChild('child1') child1: ChildComponent | undefined;
  @ViewChild('child2') child2: ChildComponent | undefined;
  constructor() { }

  public ngOnInit(): void {
  }

  public sayHello(name: string): void {
    this.message = 'Hey boy! '+ name;
  }

  public giveMoney(): void {
    this.child1?.giveMoney(10);
    this.child2?.giveMoney(24);
  }
}
