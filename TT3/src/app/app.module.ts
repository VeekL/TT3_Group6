import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ViewBalanceComponent } from './view-balance/view-balance.component';
import { ViewPricingComponent } from './view-pricing/view-pricing.component';
import { HistoricalPricingComponent } from './historical-pricing/historical-pricing.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewBalanceComponent,
    ViewPricingComponent,
    HistoricalPricingComponent,
    ViewTransactionsComponent,
    BuySellComponent,
    NavbarComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
