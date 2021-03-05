import { Component, OnInit } from '@angular/core';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material';
import { TokenServiceService } from '../services/token-service.service';

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
    this.tokenService.viewTransactions({accountKey: "6ed40918-a2a2-42dd-b1c2-f727898c6d0f"}).subscribe(
      (response) => {
        this.newData = response;
        console.log(response);
      }
    );
  }
}
