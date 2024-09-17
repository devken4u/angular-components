import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';
import { UserageComponent } from './components/userage/userage.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'displayHelloWorld', component: DisplayhelloworldComponent },
  { path: 'showHelloButton', component: ShowhellobuttonComponent },
  { path: 'displayName', component: DisplaynameComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'simpleForm', component: SimpleformComponent },
  { path: 'userAge', component: UserageComponent },
];
