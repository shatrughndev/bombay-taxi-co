import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-routes',
  templateUrl: './admin-routes.component.html',
  styleUrls: ['./admin-routes.component.scss']
})
export class AdminRoutesComponent implements OnInit {
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
