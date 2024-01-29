import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Characters} from "../models/characters";
import * as md5 from 'md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {

  private publicKey = '7fe5025f70546ca798ba1a7fe1d55dc3';
  private privateKey = '91e095af50b02b8dce0cd5ff2da732b73d70f14a';
  private baseUrl = 'https://gateway.marvel.com:443/';

  constructor(private http: HttpClient) {}

  // Generate MD5 hash for authentication
  private generateHash(timestamp: number) {
    return md5(timestamp + this.privateKey + this.publicKey);
  }

  // Get character details by ID
  getCharacters$():Observable<Characters> {
    const timestamp = new Date().getTime();
    const hash = this.generateHash(timestamp);
    const url = `${this.baseUrl}v1/public/characters?ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}&limit=90`;
    return this.http.get<Characters>(url);
  }
  getCharacterDetails$(characterId: string): Observable<any> {
    const timestamp = new Date().getTime();
    const hash = this.generateHash(timestamp);
    const url = `${this.baseUrl}v1/public/characters/${characterId}?ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
    return this.http.get<Characters>(url);
  }

  // Search characters by name
  /*searchCharacters(nameStartsWith: string): Observable<MarvelApiResponse> {
    const timestamp = new Date().getTime();
    const hash = this.generateHash(timestamp);
    const url = `${this.baseUrl}characters?nameStartsWith=${nameStartsWith}&ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;

    // Použití metody get s explicitním typováním návratové hodnoty
    return this.http.get<MarvelApiResponse>(url);
  }
*/
}
