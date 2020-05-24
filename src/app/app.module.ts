import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { DefaultHomeComponent } from './components/default-home/default-home.component';
import { LoginComponent } from './components/setup/login/login.component';
import { SignupComponent } from './components/setup/signup/signup.component';
import { ResetPasswordComponent } from './components/setup/reset-password/reset-password.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { ShopCatComponent } from './components/default-pages/shop-cat/shop-cat.component';
import { ProductDetailComponent } from './components/default-pages/product-detail/product-detail.component';
import { CartComponent } from './components/default-pages/cart/cart.component';
import { CheckoutComponent } from './components/default-pages/checkout/checkout.component';
import { ShopComponent } from './components/default-pages/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DefaultHomeComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    OrdersComponent,
    OrderDetailComponent,
    ShopCatComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
