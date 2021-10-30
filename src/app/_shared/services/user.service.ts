import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private socialAuthService: SocialAuthService) { }

  async signIn(): Promise<boolean> {
    try {
      await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
      return true;
    }
    catch {
      return false;
    }
  }

  async getCurrentUserInfo(): Promise<SocialUser> {
    const result = await this.socialAuthService.authState.pipe(take(1)).toPromise();
    return result;
  }

  async logout(): Promise<boolean> {
    try {
      await this.socialAuthService.signOut();
      return true;
    }
    catch (e) {
      return false;
    }
  }
}
