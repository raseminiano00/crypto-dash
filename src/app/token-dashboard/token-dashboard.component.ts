import { Component, OnInit } from '@angular/core';
import { ITokenCurrentDetail } from '../_shared/models/crypto-token.model';
import { CryptoTokenService } from '../_shared/services/crypto-token.service';

@Component({
  selector: 'app-token-dashboard',
  templateUrl: './token-dashboard.component.html',
  styleUrls: ['./token-dashboard.component.less']
})
export class TokenDashboardComponent implements OnInit {
  tokenCurrentDetails: ITokenCurrentDetail[] = [];
  constructor(private cryptoTokenService: CryptoTokenService) { }

  async ngOnInit(): Promise<void> {
    this.tokenCurrentDetails = await this.cryptoTokenService.getCurrentTokenDetails(['smooth-love-potion','axie-infinity'], 'php');
  }
}
