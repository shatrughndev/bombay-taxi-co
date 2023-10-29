import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  activeAdminRoute: string = 'bookings';
  constructor() { }

  ngOnInit(): void {
  }

  sidemenuRoute(event:any){
    if(event){
      this.activeAdminRoute = event;
    }
  }

}
