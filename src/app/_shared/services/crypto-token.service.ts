import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as URLS from '../constants/urls';
import { ITokenCurrentDetail } from '../models/crypto-token.model';


@Injectable({
  providedIn: 'root'
})
export class CryptoTokenService {

  constructor(private http: HttpClient) { }

  async getCurrentTokenDetails(tokenId: string[], fiatSymbol: string): Promise<ITokenCurrentDetail[]> {
    const url = `${URLS.API.root}/${URLS.API.token.root}/${URLS.API.token.currentDetails}?ids=${tokenId.join(',')}&fiat=${fiatSymbol}`;
    const response = await this.http.get(url).toPromise() as ITokenCurrentDetail[];
    return [...response];
  }
}
