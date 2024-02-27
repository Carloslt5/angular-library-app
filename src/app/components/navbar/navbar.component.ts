import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navBarLogo = '/assets/library-icon.svg';
}
