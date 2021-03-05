import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ViewBalanceComponent } from './view-balance/view-balance.component';
import { ViewPricingComponent } from './view-pricing/view-pricing.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { HistoricalPricingComponent } from './historical-pricing/historical-pricing.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';




const routes:Routes=[
  {path: 'login',component:LoginComponent},
  {path: 'viewbalance',component:ViewBalanceComponent},
  {path: 'viewpricing',component:ViewPricingComponent },
  {path:'viewtransactions',component:ViewTransactionsComponent},
  {path:'buysell',component:BuySellComponent},
  {path:'history',component:HistoricalPricingComponent},
  {path:'userinfo',component:UserinfoComponent},
  {
    path: '**',
    redirectTo: ''
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
