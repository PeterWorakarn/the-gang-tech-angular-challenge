import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LightDarkToggleComponent } from './light-dark-toggle/light-dark-toggle.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { InfoDashboardComponent } from './info-dashboard/info-dashboard.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LightDarkToggleComponent,
    MainDashboardComponent,
    InfoDashboardComponent,
    ShortNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
