import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../services/token-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDetails } from '../services/types/loginDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loginDetails:LoginDetails;


  userLogin={
    "username":"Group6",
    "password":"mnlBi9C5lHzPiMN"
  }
  constructor(private tokenService:TokenServiceService) { }

  ngOnInit() {
    this.tokenService.userLogin(this.userLogin).subscribe(response=>{
      console.log(response);
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
      console.log(response);
    })
  }
}
