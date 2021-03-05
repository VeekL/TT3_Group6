import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { getMatIconNameNotFoundError } from '@angular/material';
import { TokenServiceService } from '../services/token-service.service';



@Component({
  selector: 'app-view-pricing',
  templateUrl: './view-pricing.component.html',
  styleUrls: ['./view-pricing.component.css']
})




export class ViewPricingComponent implements OnInit {

currentPrice:any;
currentTime:any;

  constructor(private tokenService:TokenServiceService)
  {};


  ngOnInit() {
    this.getInfo();
  };
    
  getInfo(){
    this.tokenService.viewPricing().subscribe(response=>{
      this.currentPrice = response;
      });
  }
}
