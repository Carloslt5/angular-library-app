import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainContainerComponent } from '../../components/layout/main-container/main-container.component';
import { TITLE_APP } from '../../../constants/title-app.constant';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MainContainerComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = TITLE_APP;
  bgImage = '/assets/bg_index.jpeg';
}
