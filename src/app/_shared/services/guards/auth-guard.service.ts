import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }


  async canActivate(): Promise<boolean> {
    const currentUser = await this.userService.getCurrentUserInfo();
    if (!currentUser) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
