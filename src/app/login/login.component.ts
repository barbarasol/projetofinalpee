import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  onSubmit(form: any){
    console.log(form.value)
    this.router.navigate(['/home'])
  }

  public Padraonickname = { N: { pattern: new RegExp(`[A-Za-z_.-]`) } };

  ngOnInit(): void {
  }

}
