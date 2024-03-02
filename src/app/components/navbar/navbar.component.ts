import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navBarLogo = '/assets/library-icon.svg';
  @Input() titleApp!: string;
}
