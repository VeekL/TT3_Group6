import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TokenServiceService } from '../services/token-service.service';

@Component({
  selector: 'app-view-balance',
  templateUrl: './view-balance.component.html',
  styleUrls: ['./view-balance.component.css']
})
export class ViewBalanceComponent implements OnInit {

  responseBody = {
    "accountKey": "6ed40918-a2a2-42dd-b1c2-f727898c6d0f"
  }

  data: any;

  constructor(private tokenService: TokenServiceService) { }

  ngOnInit() {
    this.tokenService.viewBalance(this.responseBody).subscribe(
      response => {
        console.log(response);
        this.data = response;
      }
    )
  }
}
