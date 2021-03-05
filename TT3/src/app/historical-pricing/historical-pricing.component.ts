import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../services/token-service.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-historical-pricing',
  templateUrl: './historical-pricing.component.html',
  styleUrls: ['./historical-pricing.component.css']
})


export class HistoricalPricingComponent implements OnInit {
  loading = false;
  data: any;

  priceArr = [];
  assetsymbols=[];
  timeStampArr = [];
  linechart = [];

  constructor(private tokenService: TokenServiceService) { }

  ngOnInit() {
    this.loading = true;
    this.tokenService.viewHistoricalPricing().subscribe(
      response => {
        this.data = response;
        this.loading = false;
        for (var curPrice in this.data) {
          var s = new Date(response[curPrice].timestamp * 1000).toLocaleDateString("en-US")
          this.priceArr.push(response[curPrice].price);
          this.timeStampArr.push(s);
        }
        console.log(response);
      }
    );
    this.linechart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.timeStampArr,
        datasets: [{
          label: 'price',
          data: this.priceArr
        }]
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