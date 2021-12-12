import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.css']
})
export class RegisterPaymentComponent implements OnInit {

  constructor(private router: Router) { }

  mudarRota(){
    this.router.navigate(['/register-address'])
  }

  onSubmit(formPay: any){
    console.log(formPay)
  }

  public PadraoCardHolder = { N: { pattern: new RegExp(`[A-Za-z ]`) } };

  ngOnInit(): void {
  }

}
