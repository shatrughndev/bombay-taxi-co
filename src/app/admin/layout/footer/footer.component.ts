import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {

  }

  get version(){
    return localStorage.getItem('userReleaseVersion') || '3.0.0';
  }

  ngOnInit(): void {
  }



}
