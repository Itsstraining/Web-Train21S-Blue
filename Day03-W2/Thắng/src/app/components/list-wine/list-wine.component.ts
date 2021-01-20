import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/models/item.models';

@Component({
  selector: 'app-list-wine',
  templateUrl: './list-wine.component.html',
  styleUrls: ['./list-wine.component.scss']
})
export class ListWineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listWine: Array <Wine> =[{
    id: "Wine 0001",
    name: "Hennesy",
    unitPrice: "123",
    discount: 0.15,
    imgUrl: "https://phanphoiruounhapkhau.com/wp-content/uploads/2018/01/ruou-hennessy-vsop.jpg"
  },{
    id: "Wine 0002",
    name: "X.O",
    discount: 0.15,
    unitPrice: "18",
    imgUrl: "https://phanphoiruounhapkhau.com/wp-content/uploads/2018/01/ruou-hennessy-vsop.jpg"
  },{
    id: "Wine 0001",
    name: "Chivas18",
    discount: 0.15,
    unitPrice: "18",
    imgUrl: "https://phanphoiruounhapkhau.com/wp-content/uploads/2018/01/ruou-hennessy-vsop.jpg"
  },{
    id: "Wine 0001",
    name: "Chivas21",
    discount: 0.15,
    unitPrice: "18",
    imgUrl: "https://phanphoiruounhapkhau.com/wp-content/uploads/2018/01/ruou-hennessy-vsop.jpg"
  },{
    id: "Wine 0001",
    name: "Chivas18",
    discount: 0.15,
    unitPrice: "18",
    imgUrl: "https://phanphoiruounhapkhau.com/wp-content/uploads/2018/01/ruou-hennessy-vsop.jpg"
  },{
    id: "Wine 0001",
    name: "Chivas18",
    discount: 0.15,
    unitPrice: "18",
    imgUrl: "https://phanphoiruounhapkhau.com/wp-content/uploads/2018/01/ruou-hennessy-vsop.jpg"
  },{
    id: "Wine 0001",
    name: "Chivas18",
    discount: 0.15,
    unitPrice: "18",
    imgUrl: "https://phanphoiruounhapkhau.com/wp-content/uploads/2018/01/ruou-hennessy-vsop.jpg"
  },{
    id: "Wine 0001",
    name: "Chivas18",
    discount: 0.15,
    unitPrice: "18",
    imgUrl: "https://phanphoiruounhapkhau.com/wp-content/uploads/2018/01/ruou-hennessy-vsop.jpg"
  }]

}
