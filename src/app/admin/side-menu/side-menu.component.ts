import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  sideMenu: Array<any> = [];
  activeLink: String = 'bookings'
  @Output() viewAdminPagesroute: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.sideMenu = [
      {
        label: 'Bookings',
        routeTo: 'bookings'
      },
      {
        label: 'Routes',
        routeTo: 'routes'
      },
      {
        label: 'Drivers',
        routeTo: 'drivers'
      },
      {
        label: 'Cities',
        routeTo: 'cities'
      },
    ]
  }

  ngOnInit(): void {
  }

  viewAdminPages(item: any){
    this.activeLink = item.routeTo;
    this.viewAdminPagesroute.emit(item.routeTo)
  }

}
