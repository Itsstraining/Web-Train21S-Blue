import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  @Input()
  public count = 0;

  @Output()
  public countChange: EventEmitter<Number> = new EventEmitter();


  public increase() {
    this.count++;
    this.countChange.emit(this.count);
  }

  public decrease() {
    if (this.count == 0) {
      return;
    }
    this.count--;
    this.countChange.emit(this.count);
  }

}
