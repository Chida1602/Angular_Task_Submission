import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TypefilterPipe } from './pipes/typefilter.pipe';
import { PricefilterPipe } from './pipes/pricefilter.pipe';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ProductBoxComponent } from './pages/product-box/product-box.component';
import { DetailsComponent } from './pages/home/details/details.component';






@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TypefilterPipe,
    PricefilterPipe,
    HomeComponent,
    ProductBoxComponent,
    DetailsComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
