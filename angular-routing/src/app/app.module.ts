import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaptainAmericaComponent } from './captain-america/captain-america.component';
import { IronManComponent } from './iron-man/iron-man.component';
import { AvengersComponent } from './avengers/avengers.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CaptainAmericaComponent,
    IronManComponent,
    AvengersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
