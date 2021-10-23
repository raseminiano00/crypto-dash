import { Component, OnInit } from '@angular/core';
import * as URL_CONSTANT from '../_shared/constants/urls';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less']
})
export class TopNavComponent implements OnInit {
  routes = URL_CONSTANT.routes;

  showMenu: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
}
