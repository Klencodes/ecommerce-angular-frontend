import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';


const routes: Routes = [
  {
    path: 'account', children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'orders-history', component: OrderHistoryComponent },
      { path: 'transactions', component:   TransactionsComponent }
    ]
  },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
