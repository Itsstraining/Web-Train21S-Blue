import { Component, OnInit } from '@angular/core';
import { Item } from '../../Models/Item.models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

item:Item = {
  id: "ITEM 001",
  name: "Hello 1",
  discount: 0.10,
  unitPrice:2,
  outOfStock: false,
}

  ngOnInit(): void {
  }

}
