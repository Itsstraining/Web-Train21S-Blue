import { Component, OnInit } from '@angular/core';
import {Item} from "../../model/item.model"
@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.scss']
})
export class Item1Component implements OnInit {

  constructor() { }
  
  item: Array<Item> = [{
    id:"ITEM 0001",
    name:"Shop Bán Áo",
    discount:0.15,
    unitPrice:10,
    outOfStock:false
  },{
    id:"ITEM 0002",
    name:"Shop Bán Quần",
    discount:0.15,
    unitPrice:10,
    outOfStock:false
  },{
    id:"ITEM 0003",
    name:"Shop Áo Ngắn",
    discount:0.15,
    unitPrice:10,
    outOfStock:false
  },{
    id:"ITEM 0004",
    name:"Shop Sơ Mi",
    discount:0.15,
    unitPrice:10,
    outOfStock:false
  },{
    id:"ITEM 0005",
    name:"Shop Quần Ngắn",
    discount:0.15,
    unitPrice:9,
    outOfStock:false
  },{
    id:"ITEM 0006",
    name:"Shop Quần Dài",
    discount:0.15,
    unitPrice:10,
    outOfStock:false
  },{
    id:"ITEM 0007",
    name:"Shop Dây Nịt",
    discount:0.15,
    unitPrice:7,
    outOfStock:false
  },{
    id:"ITEM 0008",
    name:"Shop Cà vạt",
    discount:0.15,
    unitPrice:4,
    outOfStock:false
  },{
    id:"ITEM 0009",
    name:"Shop Áo Khoác",
    discount:0.15,
    unitPrice:14,
    outOfStock:false
  }]
  ngOnInit(): void {
  }

}
