import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'beam-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToDashboard() {
    this.router.navigate(['/admin/dashboard'])
  }

}
