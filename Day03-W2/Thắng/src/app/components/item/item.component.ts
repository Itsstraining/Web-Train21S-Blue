import { Component, Input, OnInit } from '@angular/core';
import { Wine } from 'src/app/models/item.models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  public item :Wine;

}
