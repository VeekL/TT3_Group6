import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../services/token-service.service';

@Component({
  selector: 'app-historical-pricing',
  templateUrl: './historical-pricing.component.html',
  styleUrls: ['./historical-pricing.component.css']
})


export class HistoricalPricingComponent implements OnInit {
  loading=false;
  data: any;

  constructor(private tokenService: TokenServiceService) { }

  ngOnInit() {
    this.loading=true;
    this.tokenService.viewHistoricalPricing().subscribe(
      response => {
        this.data = response;
        this.loading=false;
      }
    );
  }
}