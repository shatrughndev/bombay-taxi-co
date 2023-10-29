import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';

const routes : Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(list => list.AdminModule),
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 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
