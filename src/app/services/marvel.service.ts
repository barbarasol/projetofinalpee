import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  public marvelUrl = environment.marvelUrl;

  constructor(protected httpClient: HttpClient) { }

  chamadaQuadrinhosMarvel(){

    const timestamp = new Date().getTime().toString();

    const publicKey = "e0f27c5db47bfc1fa59aa3eb0a8c42e4";

    const privateKey = "7e44d606eaff134384bbd3e2c42b028211a08f5f";

    const md5 = new Md5();

    const hash = md5.appendStr(timestamp + privateKey + publicKey).end();

    return this.httpClient.get<any>(`${this.marvelUrl}/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    })
  }


}


