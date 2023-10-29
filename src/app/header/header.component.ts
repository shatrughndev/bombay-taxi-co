import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes: Array<any> = [];
  constructor() {
    this.routes = [
      {
        label: 'FAQ',
        routeTo: '/faq'
      },
      {
        label: 'About Us',
        routeTo: '/aboutus'
      },
      {
        label: 'Terms & Conditions',
        routeTo: '/termsCondition'
      },
      {
        label: 'Login',
        routeTo: '/login'
      }
    ]
  }

  ngOnInit(): void {
  }

}
