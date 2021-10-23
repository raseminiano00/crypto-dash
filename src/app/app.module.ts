import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { TokenDashboardModule } from './token-dashboard/token-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TokenDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
