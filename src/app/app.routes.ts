import {PeopleListComponent} from './modules/people-list/people-list.component'
import {VehicleListComponent} from './modules/vehicle-list/vehicle-list.component'
import { HomeComponent } from './modules/home/home.component'
import { PageNotFoundComponent } from './components/page-not-found.component'

export const appRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'people-list', component: PeopleListComponent },
    { path: 'vehicle-list', component: VehicleListComponent },
    { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
]
