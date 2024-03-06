import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TITLE_APP } from '../constants/title-app.constant';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ToastComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = TITLE_APP;
}
