import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ITokenCurrentDetail } from '../_shared/models/crypto-token.model';
import { CryptoTokenService } from '../_shared/services/crypto-token.service';

@Component({
  selector: 'app-token-dashboard',
  templateUrl: './token-dashboard.component.html',
  styleUrls: ['./token-dashboard.component.less']
})
export class TokenDashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  tokenCurrentDetails: ITokenCurrentDetail[] = [];
  constructor(private cryptoTokenService: CryptoTokenService) {

  }
  ngOnDestroy(): void {
    this.cryptoTokenService.closeWebSocket();
  }
  ngAfterViewInit(): void {
    this.cryptoTokenService.connect();
  }

  async ngOnInit(): Promise<void> {
    this.subscribeToLivePriceData();
    this.tokenCurrentDetails = await this.cryptoTokenService.getCurrentTokenDetails(['smooth-love-potion', 'axie-infinity'], 'php');
  }

  private subscribeToLivePriceData() {
    this.cryptoTokenService.messages$.subscribe((x: any) => {
      const tokenDetail = this.tokenCurrentDetails.find(detail =>
        x.s.includes(detail.symbol.toUpperCase())
      );

      if (tokenDetail) {
        tokenDetail.currentPrice = +(Math.round((x.p * 50) * 100) / 100).toFixed(2);
      }
    })
  }


}
