import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  dataSource: any = [];
  displayedColumns:any = [{columnDef: 'id'}, {columnDef: 'name'}, {columnDef: 'contact'}, {columnDef: 'assigned'}, {columnDef: 'actions'}];
  columnsHeading: Array<String>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { 
    this.columnsHeading = this.displayedColumns.map((list: any) => list .columnDef);
    this.dataSource = [
      {
        id: 1,
        name: 'amit',
        contact: '9999999999',
        assigned: 'Baba',
        actions: '',
        mapped: ''
      }
    ]
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}
