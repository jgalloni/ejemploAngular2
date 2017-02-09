import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosViewComponent } from './servicios-view/servicios-view.component';
import {routes} from './app-routing.module';
import {DummyService} from './dummy.service';
import { MainComponent } from './main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiciosViewComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DummyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
