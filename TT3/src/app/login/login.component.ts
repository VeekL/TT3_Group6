import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../services/token-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDetails } from '../services/types/loginDetails';
import { LoginResponse } from '../services/types/loginResponse';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loginDetails:LoginDetails;
  loginResponse:LoginResponse;

  constructor(private tokenService:TokenServiceService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      username:[null,[Validators.required,Validators.minLength(4)]],
      password:[null,[Validators.required,Validators.minLength(6)]]
    })
  }

  get f(){
    return this.loginForm.controls;
  }

  login(){
    this.loginDetails={
      "username":this.f.username.value,
      "password":this.f.password.value
    }
    this.tokenService.userLogin(this.loginDetails).subscribe(response=>{
      this.loginResponse=response;
    })
  }
}
