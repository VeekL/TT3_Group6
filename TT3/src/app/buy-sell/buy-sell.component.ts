import { Component, OnInit } from '@angular/core';
import { TokenServiceService} from '../services/token-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyOrSellDetails } from '../services/types/buyOrSellDetails';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.css']
})

export class BuySellComponent implements OnInit {
  constructor(private tokenService:TokenServiceService,private formBuilder:FormBuilder) { }
  accountKey:string;
  balance:any;
  buyForm:FormGroup;
  sellForm:FormGroup;
  tradeBody:BuyOrSellDetails;

  responseBody = {
    "accountKey": ""
  }

  ngOnInit() {
    this.buyForm=this.formBuilder.group({
      buyAmount:[null,[Validators.required]]
    })

    this.sellForm=this.formBuilder.group({
      sellAmount:[null,[Validators.required]],
    })

    this.accountKey=localStorage.getItem('accountKey');
    this.responseBody={
      "accountKey": this.accountKey
    }
    this.tokenService.viewBalance(this.responseBody).subscribe(balance=>{
      this.balance=balance;
      console.log(this.balance);
    });
  }

  buy(){
    this.tradeBody={
      "accountKey":this.accountKey,
      "orderType":"BUY",
      "assetAmount":1
    }
    this.tokenService.buyOrSell(this.tradeBody).subscribe((response)=>{
      console.log(response);
    })
  }

  sell(){
    console.log('sell');
  }
}
