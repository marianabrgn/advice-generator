import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAdviceService {

  constructor(
    private http: HttpClient
  ) { }

  getAdvice(){
    return this.http.get('https://api.adviceslip.com/')
  }
}
