import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo';

export const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: '**', redirectTo: '' },
];