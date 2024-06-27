import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property/property.component';
import { PropertyCardComponent } from './property_card/property-card/property-card.component';
import { NavBarComponent } from './nav_bar/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertyCardComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
