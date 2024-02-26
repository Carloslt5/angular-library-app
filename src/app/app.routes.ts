import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'library',
        pathMatch: 'full',
        component: LibraryComponent,
      },
    ],
  },
];
