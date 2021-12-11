import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.css']
})
export class RegisterAddressComponent implements OnInit {

  constructor(private router: Router) { }

  mudarRota(){
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
