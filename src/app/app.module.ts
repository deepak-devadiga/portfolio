import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main-module/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';

import { PortfolioComponent } from './main-module/portfolio/portfolio.component';
import { MainComponent } from './main-module/main.component';
import { WorkComponent } from './main-module/work/work.component';
import { ContactComponent } from './main-module/contact/contact.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidemenuComponent,
    PortfolioComponent,
    MainComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
