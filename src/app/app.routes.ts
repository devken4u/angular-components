import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'displayHelloWorld', component: DisplayhelloworldComponent },
  { path: 'showHelloButton', component: ShowhellobuttonComponent },
  { path: 'displayName', component: DisplaynameComponent },
];
