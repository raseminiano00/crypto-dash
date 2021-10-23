import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less']
})
export class TopNavComponent implements OnInit {
  showMenu: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  menuClick() {
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
  }
}
