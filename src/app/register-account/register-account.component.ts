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

  mudarRota(){
    this.router.navigate(['/register-address'])
  }

  ngOnInit(): void {
  }

}
