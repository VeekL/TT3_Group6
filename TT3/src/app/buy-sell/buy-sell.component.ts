import { Component, OnInit } from '@angular/core';
import { TokenServiceService} from '../services/token-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyOrSellDetails } from '../services/types/buyOrSellDetails';
import { interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.css']
})

export class BuySellComponent implements OnInit {
  constructor(private tokenService:TokenServiceService,private formBuilder:FormBuilder) { }
  accountKey:string;
  balance:any;
  currentPrice:any;
  currentDate:any;
  buyForm:FormGroup;
  sellForm:FormGroup;
  tradeBody:BuyOrSellDetails;
  tradeDetails=[];
  newData:any;
  sub: Subscription;


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
    this.getInfo();
    this.getTransactionHistory();
    this.updateInfo();
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

  updateInfo()
  {
    const source = interval(10000); //every 10 sec
    this.sub = source.subscribe(()=>
    {this.getInfo()});
  };

  getInfo()
  {
    this.tokenService.viewPricing().subscribe((response)=>{
    this.currentPrice = response;
    this.currentDate = response.timestamp;
    });
  }
}
