import { MaterialConvenienceModule } from './convenience/material-convenience.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    MaterialConvenienceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
