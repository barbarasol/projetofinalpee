import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  typePassword = 'password';
  password = 'visibility';

  onSubmit(form: any){
    console.log(form.value)
  }

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

  public Padraonickname = { N: { pattern: new RegExp(`[A-Za-z_.-]`) } };

  ngOnInit(): void {
  }

}
