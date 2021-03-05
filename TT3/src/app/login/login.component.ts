import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../services/token-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  
}
