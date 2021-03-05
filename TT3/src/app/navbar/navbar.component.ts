import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn=false;
  accountKey:string;
  constructor() { }

  ngOnInit() {
    this.accountKey=localStorage.getItem('accountKey');
    if(this.accountKey!==null){
      this.loggedIn=true;
    }
  }
}