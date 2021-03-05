import { Component, OnInit } from '@angular/core';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material';
import { TokenServiceService } from '../services/token-service.service';
import { TransactionDetails } from '../services/types/transactionDetails';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {
  newData:any;
  constructor(private tokenService:TokenServiceService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.tokenService.viewTransactions({ accountKey: localStorage.getItem('accountKey')}).subscribe(
      (response) => {
        this.newData = response;
        console.log(response);
      }
    );
  }
}
