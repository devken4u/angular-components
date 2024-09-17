import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
