import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  mainTitle!: string;
  isHeaderFooterDisabled = 'N';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // if (!JSON.parse(localStorage.getItem('currentUser')!)) {
    //   this.router.navigate(['/login']);
    // }
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route: any) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route: any) => route.data)
      )
      .subscribe((event: any) => {
        if (Object.keys(this.activatedRoute.snapshot.queryParams).length > 0) {
          let [title] = Object.values(this.activatedRoute.snapshot.queryParams);
          this.mainTitle = `${event.title} for ${title.replace(/_/g, ' ')}`;
        } else {
          this.mainTitle = event.title;
          this.isHeaderFooterDisabled = (event.headerFooter && event.headerFooter === 'N') ? 'N' : 'Y';
          console.log('is h', event.headerFooter)
        }
      });
  }

  ngOnInit(): void {}
}
