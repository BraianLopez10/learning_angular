import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NoFoundComponent } from './no-found/no-found.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

//Module
import { ShareModule } from './share/share.module'
//Core
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NoFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
