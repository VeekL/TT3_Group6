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
  tradeDetails=[];
  newData:any;

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
    });
    this.getTransactionHistory();
  }

  get fb(){
    return this.buyForm.controls;
  }

  get fs(){
    return this.sellForm.controls;
  }

  buy(){
    this.tradeBody={
      "accountKey":this.accountKey,
      "orderType":"BUY",
      "assetAmount":this.fb.buyAmount.value
    }
    this.tokenService.buyOrSell(this.tradeBody).subscribe((response)=>{
      console.log("Buy",response);
    })
    this.getBalance();
    this.getTransactionHistory();
  }

  sell(){
    this.tradeBody={
      "accountKey":this.accountKey,
      "orderType":"SELL",
      "assetAmount":this.fs.sellAmount.value
    }
    this.tokenService.buyOrSell(this.tradeBody).subscribe((response)=>{
      console.log("Sell",response);
    })
    this.getBalance();
    this.getTransactionHistory();
  }

  getBalance(){
    this.tokenService.viewBalance(this.responseBody).subscribe(balance=>{
      this.balance=balance;
    });
  }

  getTransactionHistory() {
    this.tokenService.viewTransactions({ accountKey: localStorage.getItem('accountKey')}).subscribe(
      (response) => {
        this.newData = response;
      }
    );
  }
}
