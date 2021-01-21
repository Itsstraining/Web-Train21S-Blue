import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { Item1Component } from './item/item1/item1.component';
import { Item2Component } from './list/item2/item2.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    Item1Component,
    Item2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
