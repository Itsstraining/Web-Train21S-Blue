import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';


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
  public counter=0;
  @Output()  
public dem:EventEmitter<Number>= new EventEmitter;

  public tang(){
    this.counter++;
  }
  public giam(){
    if(this.counter!=0)
    this.counter--;
  }



}
