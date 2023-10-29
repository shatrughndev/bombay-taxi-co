import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {fromEvent} from "rxjs";
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewChecked {
  // @ViewChild('onTypedInSearchInput', {static: true}) onTypedInSearchInput!: ElementRef;
  logo!: string;
  searchResult: any[] = [];
  isProfileChecked = false;
  frontEndURL = '';

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private authService: AuthService
  ) {
  }

  get userDetails() {
    if (!localStorage.getItem('user-profile') && !this.isProfileChecked) {
      this.isProfileChecked = true;
    }
    return JSON.parse(localStorage.getItem('user-profile')!);
  }

  setProfilePicNotFound(ref: HTMLInputElement) {
    ref.src = 'assets/img/avatar/profile-pic.jpg';
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  toggleSidebar() {
    const sidebar: any = document.querySelector('.sidebar');
    const mainContent: any = document.querySelector('.main-content');

    const footer: any = document.querySelector('.footer');
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('active');
    footer.classList.toggle('active');

  }

  logout() {
    this.authService.logout();
  }

}
