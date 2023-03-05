import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ApiAdviceService } from './services/api-advice.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ApiAdviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
