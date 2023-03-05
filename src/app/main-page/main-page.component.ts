import { Component, OnInit } from '@angular/core';
import { ApiAdviceService } from '../services/api-advice.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor( private apiService: ApiAdviceService) { }
  idAdvice: String = '';
  textAdvice: String = '';

  ngOnInit(): void {
    this.getAdvice()
    }
    
  getAdvice() {
    this.apiService.getAdviceFromAPI().subscribe(data => {
      
      this.idAdvice = data.slip.id;
      this.textAdvice = data.slip.advice;
      console.log(this.idAdvice);
    })
    
  };

}
