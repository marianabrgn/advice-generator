import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiAdviceService {

  constructor(
    private http: HttpClient
  ) { }

  getAdviceFromAPI(){
    return this.http.get<any>('https://api.adviceslip.com/advice');
  }
}
