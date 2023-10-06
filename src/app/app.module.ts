import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationMenuComponent } from './top-navigation-menu/top-navigation-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomepageComponent } from './homepage/homepage.component';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { WeatherDataService } from './services/weather-api/weather-data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationMenuComponent,
    HomepageComponent,
    WeatherApiComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherDataService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
