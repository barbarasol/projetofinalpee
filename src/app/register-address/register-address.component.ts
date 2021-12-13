import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.css']
})
export class RegisterAddressComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  consultaCEP(cep: string, form: any){
    cep = cep.replace("-","");
    this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaDadosForm(dados, form));
  }

  populaDadosForm(dados: any, formulario: any){
    formulario.form.patchValue({
      address: dados.logradouro,
      cep: dados.cep,
      district: dados.localidade,
      city: dados.uf
    });
  }

 onSubmit(formAddress: any){
  console.log(formAddress.value);
  this.router.navigate(['/login'])
 }

  ngOnInit(): void {
  }

}
