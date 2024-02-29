import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'library', pathMatch: 'full', component: LibraryComponent },
  { path: 'library/:id', pathMatch: 'full', component: BookDetailsComponent },
];
