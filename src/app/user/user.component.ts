import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import {Funcionario} from './model/user_model'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public formNew:FormGroup
  public logins:object[]=[]
  constructor(

    private formBuilder:FormBuilder,
    private loginService:LoginService
  ) { }

  ngOnInit() {
    this.getLogin()
    this.formNew = this.formBuilder.group({
      id_funcionario:[null],
      nome_Funcionario:[null],
      email_Funcionario:[null],
      telefone_Funcionario:[null],
      cargo_Funcionario:[null],
      usuario:[null],
      senha:[null]
   })
  }
  
  getLogin(){

    this.loginService.getLogin().subscribe(value => this.logins = value)
  }
}
