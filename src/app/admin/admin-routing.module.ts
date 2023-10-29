import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutesComponent } from './admin-routes/admin-routes.component';
import { AdminComponent } from './admin.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CitiesComponent } from './cities/cities.component';
import { DriversComponent } from './drivers/drivers.component';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent, data: {headerFooter: 'N'} },
      { path: 'bookings', component: BookingsComponent },
      { path: 'routes', component: AdminRoutesComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'cities', component: CitiesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
