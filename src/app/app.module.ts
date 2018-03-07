import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { PeopleListModule } from './modules/people-list/people-list.module'
import { VehicleListModule } from './modules/vehicle-list/vehicle-list.module'
import { HomeModule } from './modules/home/home.module'
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'

import { AppComponent } from './app.component'
import {appRoutes} from './app.routes'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

import { PeopleService } from './api/people.service'
import { VehicleService } from './api/vehicle.service'

const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyDcGxaA790ZjQkjY3xrUHvaDHnTrCL2dTc',
    authDomain: 'people-list-571c4.firebaseapp.com',
    databaseURL: 'https://people-list-571c4.firebaseio.com',
    projectId: 'people-list-571c4',
    storageBucket: '',
    messagingSenderId: '824480851995'
  }
}

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
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'people-list'),
    AngularFirestoreModule
  ],
  providers: [PeopleService, VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
