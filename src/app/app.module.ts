import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared/shared.module';
import { ProfileComponent } from './components/account/profile/profile.component';
import { OrderHistoryComponent } from './components/account/order-history/order-history.component';
import { TransactionsComponent } from './components/account/transactions/transactions.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    OrderHistoryComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
