import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/models/item.models';
import { WineDataService } from 'src/app/services/wine-data.service';

@Component({
  selector: 'app-list-wine',
  templateUrl: './list-wine.component.html',
  styleUrls: ['./list-wine.component.scss']
})
export class ListWineComponent implements OnInit {

  constructor(private WineDataService: WineDataService) { }

  ngOnInit(): void {
    this.wineList = this.wineData.wineList;
  }
 

}
