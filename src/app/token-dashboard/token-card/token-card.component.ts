import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-card',
  templateUrl: './token-card.component.html',
  styleUrls: ['./token-card.component.less']
})
export class TokenCardComponent implements OnInit {
  @Input() image: string;
  @Input() overlineText: string;
  @Input() headlineText: string;


  constructor() {
  }

  ngOnInit(): void {
  }

}
