import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { getMatIconNameNotFoundError } from '@angular/material';
import { TokenServiceService } from '../services/token-service.service';
import { Observable, interval, Subscription} from 'rxjs';



@Component({
  selector: 'app-view-pricing',
  templateUrl: './view-pricing.component.html',
  styleUrls: ['./view-pricing.component.css']
})




export class ViewPricingComponent implements OnInit {

currentPrice:any;
currentDate:any;
testPrice:any;
sub: Subscription;
  constructor(private tokenService:TokenServiceService)
  {
  };


  ngOnInit() {
    this.getInfo();
    this.updateInfo();
    };
    


  updateInfo()
  {
    const source = interval(1000); //every 1 sec
    this.sub = source.subscribe(()=>
    {this.getInfo()};
    )

  };

  getInfo()
  {
    this.tokenService.viewPricing().subscribe((response)=>{
    this.currentPrice = response;
    this.currentDate = Date(this.currentPrice.timestamp * 1000); 
    };
  }

  
}


