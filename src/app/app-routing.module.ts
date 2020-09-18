import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './components/default-pages/shop/shop.component';
import { ProductDetailComponent } from './components/default-pages/product-detail/product-detail.component';
import { CartComponent } from './components/default-pages/cart/cart.component';
import { CheckoutComponent } from './components/default-pages/checkout/checkout.component';
import { ShopCatComponent } from './components/default-pages/shop-cat/shop-cat.component';
import { SignupComponent } from './components/setup/signup/signup.component';
import { LoginComponent } from './components/setup/login/login.component';
import { ResetPasswordComponent } from './components/setup/reset-password/reset-password.component';
import { AccountComponent } from './components/account-detail/account/account.component';
// import { OrderHistoryComponent } from './components/order/order-history/order-history.component';
import { TransactionsComponent } from './components/account-detail/transactions/transactions.component';
import { ConfirmationComponent } from './components/common/confirmation/confirmation.component';
import { ProfileGuard } from './guards/profile.guard';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component : ShopComponent},
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'category', component: ShopCatComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'confirmation', component: ConfirmationComponent, canActivate: [ProfileGuard] },
  // {path: 'account', component : AccountComponent, children: [
  // {path: 'account/orders', component : OrderHistoryComponent, canActivate: [ProfileGuard]},
  //   {path: 'account/transactions', component : TransactionsComponent, canActivate: [ProfileGuard]}
  // ]},
  {path: 'account', component : AccountComponent, canActivate: [ProfileGuard]},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
