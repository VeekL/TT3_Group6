import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../services/token-service.service';

@Component({
  selector: 'app-historical-pricing',
  templateUrl: './historical-pricing.component.html',
  styleUrls: ['./historical-pricing.component.css']
})
export class HistoricalPricingComponent implements OnInit {

  constructor(private tokenService: TokenServiceService) { }

  ngOnInit() {
    return this.tokenService.viewHistoricalPricing.subscribe(response => {
      console.log(response);
    })
  }

}
