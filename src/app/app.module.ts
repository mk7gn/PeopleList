import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { PeopleListModule } from './modules/people-list/people-list.module'
import { VehicleListModule } from './modules/vehicle-list/vehicle-list.module'
import { HomeModule } from './modules/home/home.module'

import { AppComponent } from './app.component'
import {appRoutes} from './app.routes'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    PeopleListModule,
    VehicleListModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
