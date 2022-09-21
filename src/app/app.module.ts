import { ReplaceCommaPipe } from './shared/pipes/replace-comma.pipe';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { StarRatingComponents } from './shared/components/star-rating/star-rating.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotel/hotel-detail/hotel-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HotelCardComponent } from './hotel/hotel-card/hotel-card.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent, HotelListComponent, ReplaceCommaPipe, StarRatingComponents, HomeComponent, HotelDetailComponent, NavbarComponent, HotelCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
