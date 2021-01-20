import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemComponent } from './components/item/item.component';
import { ListWineComponent } from './components/list-wine/list-wine.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemComponent,
    ListWineComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
