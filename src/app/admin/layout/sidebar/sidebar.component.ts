import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebar', { static: true }) sidebar!: ElementRef;
  user: any;
  loaderStatus = false;
  isSetupMenuActive = false;
  isCollapsed: boolean = true;
  isCatalogueExpanded = false;
  isCatalogueExpandeds = false;
  isCatalogueExpandedss = false;
  isCatalogueExpandedsss = false;



  constructor(
    private renderer: Renderer2,
  ) {
  }
  
  toggleCatalogue() {
    this.isCatalogueExpanded = !this.isCatalogueExpanded;
  }
  
  toggleCatalogues() {
    this.isCatalogueExpandeds = !this.isCatalogueExpandeds;
  }
  toggleCataloguess() {
    this.isCatalogueExpandedss = !this.isCatalogueExpandedss;
  }
  toggleCataloguesss() {
    this.isCatalogueExpandedsss = !this.isCatalogueExpandedsss;
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser')!);
  }

  ngAfterViewInit(): void {
    fromEvent(this.sidebar.nativeElement, 'mouseenter').subscribe((event) => {
      this.renderer.addClass(this.sidebar.nativeElement, 'isHovered');
    });
    fromEvent(this.sidebar.nativeElement, 'mouseleave').subscribe((event) => {
      if (!this.loaderStatus) {
        this.renderer.removeClass(this.sidebar.nativeElement, 'isHovered');
      }
    });
  }
  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  setupMenuToggle() {
    this.isSetupMenuActive = !this.isSetupMenuActive;
  }
}
