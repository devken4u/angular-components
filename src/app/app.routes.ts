import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';
import { UserageComponent } from './components/userage/userage.component';
import { UsergreetingComponent } from './components/usergreeting/usergreeting.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TextlengthComponent } from './components/textlength/textlength.component';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';
import { EvenoddcheckerComponent } from './components/evenoddchecker/evenoddchecker.component';
import { WordreverserComponent } from './components/wordreverser/wordreverser.component';
import { ShowdateComponent } from './components/showdate/showdate.component';
import { ShowusernameComponent } from './components/showusername/showusername.component';
import { MultiplicationtableComponent } from './components/multiplicationtable/multiplicationtable.component';
import { SimpleloginComponent } from './components/simplelogin/simplelogin.component';
import { FahrenheittocelsiusComponent } from './components/fahrenheittocelsius/fahrenheittocelsius.component';
import { BookmarklistComponent } from './components/bookmarklist/bookmarklist.component';
import { CharactercounterComponent } from './components/charactercounter/charactercounter.component';
import { PalindromecheckerComponent } from './components/palindromechecker/palindromechecker.component';
import { TemperatureconverterComponent } from './components/temperatureconverter/temperatureconverter.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'displayHelloWorld', component: DisplayhelloworldComponent },
  { path: 'showHelloButton', component: ShowhellobuttonComponent },
  { path: 'displayName', component: DisplaynameComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'simpleForm', component: SimpleformComponent },
  { path: 'userAge', component: UserageComponent },
  { path: 'userGreeting', component: UsergreetingComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'textLength', component: TextlengthComponent },
  { path: 'currencyConverter', component: CurrencyconverterComponent },
  { path: 'evenoOddChecker', component: EvenoddcheckerComponent },
  { path: 'wordReverser', component: WordreverserComponent },
  { path: 'showDate', component: ShowdateComponent },
  { path: 'showUsername', component: ShowusernameComponent },
  { path: 'multiplicationTable', component: MultiplicationtableComponent },
  { path: 'simpleLogin', component: SimpleloginComponent },
  { path: 'fahrenheitToCelsius', component: FahrenheittocelsiusComponent },
  { path: 'bookmarkList', component: BookmarklistComponent },
  { path: 'characterCounter', component: CharactercounterComponent },
  { path: 'palindromeChecker', component: PalindromecheckerComponent },
  { path: 'temperatureConverter', component: TemperatureconverterComponent },
];
