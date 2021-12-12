import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {

  typePassword = 'password';
  password = 'visibility';

  constructor(private router: Router) { }

  verSenha(){
    if(this.password == 'visibility'){
      this.password = 'visibility_off';
      this.typePassword = 'text';
    }else{
      this.password = 'visibility';
      this.typePassword = 'password';
    }
  }

  onSubmit(formAcc: any){
    console.log(formAcc)
    this.router.navigate(['/register-payment'])
  }

  mudarRota(){
    this.router.navigate(['/register-payment'])
  }

  public Padraonickname = { N: { pattern: new RegExp(`[A-Za-z_.-]`) } };

  public Padraoname = { N: { pattern: new RegExp(`[A-Za-z]`) } };

  ngOnInit(): void {
  }

}
