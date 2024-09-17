import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'displayHelloWorld', component: DisplayhelloworldComponent },
];
