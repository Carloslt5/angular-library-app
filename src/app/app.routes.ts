import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { CreatebookComponent } from './pages/createbook/createbook.component';
import { EditbookComponent } from './pages/editbook/editbook.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'library', pathMatch: 'full', component: LibraryComponent },
  { path: 'library/:id', pathMatch: 'full', component: BookDetailsComponent },
  { path: 'create', pathMatch: 'full', component: CreatebookComponent },
  { path: ':id/edit', pathMatch: 'full', component: EditbookComponent },
];
