import { Injectable } from '@angular/core';
import { Observable, of , throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse,  } from '@angular/common/http';
import { LoginDetails } from './types/loginDetails';
import { LoginResponse } from './types/loginResponse';
import { ViewBalanceDetails } from './types/viewBalanceDetails';
import { ViewBalanceResponse } from './types/viewBalanceResponse';
import { ViewPricingResponse } from './types/viewPricingResponse';
import { HistoricalPricingResponse } from './types/historicalPricingResponse';
import { TransactionDetails } from './types/transactionDetails';
import { TransactionResponse } from './types/transactionResponse';
import { BuyOrSellDetails } from './types/buyOrSellDetails';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
    
  url='https://cors-anywhere.herokuapp.com/https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/';

  loginUrl=this.url+'/login'; //POST
  viewBalanceUrl= this.url+'/balance'; //POST
  viewPricingUrl= this.url+'/pricing/current'; //POST
  viewHistoryUrl= this.url+'/pricing/historical'; //POST
  viewTransactionsUrl = this.url+'/transactions/view'; //POST
  buySellUrl = this.url+'/transactions/add'; //POST


  constructor(private http:HttpClient) { }

  userLogin(loginDetails:LoginDetails):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.loginUrl,loginDetails); //login details, username,password, 
  }

  viewBalance(accountKey:ViewBalanceDetails):Observable<ViewBalanceResponse>{
    return this.http.post<ViewBalanceResponse>(this.viewBalanceUrl,accountKey); //accountKey
  }

  viewPricing():Observable<ViewPricingResponse>{
    return this.http.post<ViewPricingResponse>(this.viewPricingUrl,''); //Empty Body
  }

  viewHistoricalPricing():Observable<HistoricalPricingResponse>{
    return this.http.post<HistoricalPricingResponse>(this.viewHistoryUrl,''); // Empty Body
  }

  viewTransactions(accountKey:TransactionDetails):Observable<TransactionResponse>{
    return this.http.post<TransactionResponse>(this.viewTransactionsUrl,accountKey); //accountKey
  }

  buyOrSell(transactionType:BuyOrSellDetails):Observable<any>{
    return this.http.post<any>(this.buySellUrl,transactionType); // accountKey, orderType,assetAmount
  }

}
