import { Component, Input, OnInit } from '@angular/core';
import { items } from '../../../app/item.model';
import { Item } from '../../model/item.model';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.scss']
})
export class Item2Component implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  @Input()
  public item:any;
}
