import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, tap, switchAll } from 'rxjs/operators';
import * as URLS from '../constants/urls';
import { ITokenCurrentDetail } from '../models/crypto-token.model';
import { EMPTY, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoTokenService {
  private socket$: WebSocketSubject<any>;
  private messagesSubject$: Subject<any> = new Subject<any>();

  tokenPricesObservable: Observable<any>;
  public messages$ = this.messagesSubject$.pipe(
    switchAll(),
    catchError((e) => {
      throw e;
    })
  );

  constructor(private http: HttpClient) {
    this.tokenPricesObservable = this.messagesSubject$.asObservable();
  }

  async getCurrentTokenDetails(
    tokenId: string[],
    fiatSymbol: string
  ): Promise<ITokenCurrentDetail[]> {
    const url = `${URLS.API.root}/${URLS.API.token.root}/${
      URLS.API.token.currentDetails
    }?ids=${tokenId.join(',')}&fiat=${fiatSymbol}`;
    const response = (await this.http
      .get(url)
      .toPromise()) as ITokenCurrentDetail[];
    return [...response];
  }

  connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
      const messages = this.socket$.pipe(
        tap({
          error: (error) => console.log(error),
        }),
        catchError((_) => EMPTY)
      );
      this.messagesSubject$.next(messages);
    }
  }

  closeWebSocket() {
    this.socket$.complete();
  }

  private getNewWebSocket() {
    return webSocket({
      url: 'wss://stream.binance.com:9443/ws/slpusdt@trade/axsusdt@trade',
      closeObserver: {
        next: () => {
          console.log('[DataService]: connection closed');
        },
      },
      openObserver: {
        next: () => {
          console.log('[DataService]: connection established');
        },
      },
    });
  }
}
