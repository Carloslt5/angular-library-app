import { Component } from '@angular/core';
import { MainContainerComponent } from '../../components/layout/main-container/main-container.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MainContainerComponent, RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
