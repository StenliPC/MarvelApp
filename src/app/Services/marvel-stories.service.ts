import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from "../models/stories";
import * as md5 from "md5";


@Injectable({
  providedIn: 'root'
})
export class MarvelStoriesService {
  private publicKey = '7fe5025f70546ca798ba1a7fe1d55dc3';
  private privateKey = '91e095af50b02b8dce0cd5ff2da732b73d70f14a';
  private baseUrl = 'https://gateway.marvel.com:443/';

  constructor(private http: HttpClient) {
  }


  private generateHash(timestamp: number) {
    return md5(timestamp + this.privateKey + this.publicKey);
  }

  getStories$(storyId: string): Observable<any> {
    const timestamp = new Date().getTime();
    const hash = this.generateHash(timestamp);
    const url = `${this.baseUrl}GET /v1/public/stories?ts=${storyId}?${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
    return this.http.get<Story>(url)
  }
}
