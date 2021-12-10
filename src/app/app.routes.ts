import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterAccountComponent } from "./register-account/register-account.component";
import { RegisterAddressComponent } from "./register-address/register-address.component";
import { RegisterPaymentComponent } from "./register-payment/register-payment.component";


export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register-account', component: RegisterAccountComponent},
  {path: 'register-address', component: RegisterAddressComponent},
  {path: 'register-payment', component: RegisterPaymentComponent}
]
