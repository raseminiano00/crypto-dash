import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as URL_CONSTANT from '../_shared/constants/urls';
import { UserService } from '../_shared/services/user.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less']
})
export class TopNavComponent implements OnInit, AfterViewInit {
  routes = URL_CONSTANT.routes;

  showMenu: boolean = true;
  hasUserLoggedIn: boolean;
  constructor(private userService: UserService, private router: Router) { }
  async ngAfterViewInit(): Promise<void> {
    this.hasUserLoggedIn = !(await this.userService.getCurrentUserInfo()) ? false : true;
  }

  async ngOnInit(): Promise<void> {
  }

  async loginWithGoogle(): Promise<void> {
    const loginResponse = await this.userService.signIn();
    if (loginResponse) {
      this.hasUserLoggedIn = true;
      this.router.navigate(['dashboard']);
    }
  }

  async logout(): Promise<void> {
    const logoutResponse = await this.userService.logout();
    if (logoutResponse) {
      this.router.navigate(['']);
    }
  }
}
