import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  typePassword = 'password';
  password = 'visibility';

  constructor() { }

  verSenha(){
    if(this.password == 'visibility'){
      this.password = 'visibility_off';
      this.typePassword = 'text';
    }else{
      this.password = 'visibility';
      this.typePassword = 'password';
    }
  }

  
  ngOnInit(): void {
  }

}
