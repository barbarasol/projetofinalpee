import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { RegisterPaymentComponent } from './register-payment/register-payment.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from  './app.routes';

import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterAccountComponent,
    RegisterPaymentComponent,
    RegisterAddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
