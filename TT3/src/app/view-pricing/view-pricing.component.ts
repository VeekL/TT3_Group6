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


  constructor()
  {
    this.currentPrice = 
    {
      "price": 32.28,
      "assetSymbol": "TTK",
      "timestamp": 1614916200
    };
  
  };


  ngOnInit() {


    
    };
    

  
}
