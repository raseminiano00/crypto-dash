import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { TokenDashboardModule } from './token-dashboard/token-dashboard.module';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TokenDashboardModule,
    HttpClientModule
  ],
  providers: [SocialAuthService,{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true, //keeps the user signed in
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('972266518246-cnp7egfurjb83ufogcv34kdil2f0a72c.apps.googleusercontent.com') // your client id
        }
      ]
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
