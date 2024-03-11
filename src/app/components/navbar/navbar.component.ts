import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [NgClass, NgOptimizedImage, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navBarLogo = '/assets/library-icon.svg';
  menuMobileVisible = false;
  @Input() titleApp!: string;

  showMenuMobile() {
    this.menuMobileVisible = !this.menuMobileVisible;
  }

  closeMenu() {
    this.menuMobileVisible = false;
  }
}
