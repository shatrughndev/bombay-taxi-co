import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    MatChipsModule
    // NgxMatSelectSearchModule
  ],
  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    MatSelectModule,
    MatChipsModule
    // NgxMatSelectSearchModule,
  ]
})
export class MaterialModule { }