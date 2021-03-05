import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../services/token-service.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-historical-pricing',
  templateUrl: './historical-pricing.component.html',
  styleUrls: ['./historical-pricing.component.css']
})


export class HistoricalPricingComponent implements OnInit {

  data: any;

  price = [];
  assetsymbols = [];
  timestamp = [];
  linechart = [];

  constructor(private tokenService: TokenServiceService) { }

  ngOnInit() {
    this.tokenService.viewHistoricalPricing().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
        this.price = this.data.price;
        this.assetsymbols = this.data.assetSymbol;
        this.timestamp = this.data.timestamp;
      }
    );
    this.lineChartMethod;
  }

  // ngAfterViewInit() { this.lineChartMethod }

  lineChartMethod() {
    this.linechart = new Chart('linechart', {
      type: 'line',
      data: {
        labels: ['jan', 'feb', 'mar', 'april', 'may', 'june'],
        data: [1, 2, 3, 4, 5, 6]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}