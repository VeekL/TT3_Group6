import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TokenServiceService} from '../services/token-service.service';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.css']
})
export class BuySellComponent implements OnInit {
  constructor(private tokenService:TokenServiceService) { }
  accountKey:string;
  balance:any;
  tradeForm:FormGroup;
  //tradeDetails:tradeDetails;
  //tradeResponse:tradeResponse;


  ngOnInit() {
    this.accountKey=localStorage.getItem('accountKey');
    console.log(this.accountKey);
    this.tokenService.viewBalance(localStorage.getItem('accountKey')).subscribe(balance=>{
      this.balance=balance;
    });
  }
}
