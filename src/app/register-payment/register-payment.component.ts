import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.css']
})
export class RegisterPaymentComponent implements OnInit {

  constructor(private router: Router) { }

  onSubmit(formPay: any){
    console.log(formPay.value);
    this.router.navigate(['/register-address'])
  }

  public PadraoCardHolder = { N: { pattern: new RegExp(`[A-Za-z ]`) } };

  ngOnInit(): void {
  }

}
