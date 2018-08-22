import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAdibroEcommerceGridModule } from 'ngx-adibro-ecommerce-grid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAdibroEcommerceGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
