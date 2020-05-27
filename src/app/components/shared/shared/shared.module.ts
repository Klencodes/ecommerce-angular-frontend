import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../../default-pages/cart/cart.component';
import { LoginComponent } from '../../setup/login/login.component';
import { SignupComponent } from '../../setup/signup/signup.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { HeaderComponent } from '../../common/header/header.component';
import { CheckoutComponent } from '../../default-pages/checkout/checkout.component';
import { ShopCatComponent } from '../../default-pages/shop-cat/shop-cat.component';
import { ShopComponent } from '../../default-pages/shop/shop.component';
import { ProductDetailComponent } from '../../default-pages/product-detail/product-detail.component';
import { OrdersComponent } from '../../order/orders/orders.component';
import { OrderDetailComponent } from '../../order/order-detail/order-detail.component';
import { ResetPasswordComponent } from '../../setup/reset-password/reset-password.component';
import { OrderHistoryComponent } from '../../account-detail/order-history/order-history.component';
import { TransactionsComponent } from '../../account-detail/transactions/transactions.component';
import { AccountComponent } from '../../account-detail/account/account.component';



@NgModule({
  declarations: [
    CartComponent,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
    ShopCatComponent,
    ShopComponent,
    ProductDetailComponent,
    OrdersComponent,
    OrderDetailComponent,
    ResetPasswordComponent,
    FooterComponent,
    HeaderComponent,
    AccountComponent,
    OrderHistoryComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule

  ],
  entryComponents: [
    CartComponent,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
    ShopCatComponent,
    ShopComponent,
    ProductDetailComponent,
    OrdersComponent,
    OrderDetailComponent,
    ResetPasswordComponent,
    AccountComponent,
    OrderHistoryComponent,
    TransactionsComponent

  ],
  exports: [
    FooterComponent,
    HeaderComponent
    
  ]
})
export class SharedModule { }
