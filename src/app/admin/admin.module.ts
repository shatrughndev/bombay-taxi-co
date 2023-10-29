import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MaterialModule } from '../material/material.module';
import { AdminRoutesComponent } from './admin-routes/admin-routes.component';
import { CitiesComponent } from './cities/cities.component';
import { DefaultComponent } from './layout/default/default.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavigationComponent,
    AdminComponent,
    SideMenuComponent,
    BookingsComponent,
    AdminRoutesComponent,
    CitiesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
