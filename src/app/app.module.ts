import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './components/default-pages/cart/cart.component';
import { LoginComponent } from './components/setup/login/login.component';
import { SignupComponent } from './components/setup/signup/signup.component';
import { CheckoutComponent } from './components/default-pages/checkout/checkout.component';
import { ShopCatComponent } from './components/default-pages/shop-cat/shop-cat.component';
import { ShopComponent } from './components/default-pages/shop/shop.component';
import { ProductDetailComponent } from './components/default-pages/product-detail/product-detail.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { ResetPasswordComponent } from './components/setup/reset-password/reset-password.component';
import { AccountComponent } from './components/account-detail/account/account.component';
import { OrderHistoryComponent } from './components/account-detail/order-history/order-history.component';
import { TransactionsComponent } from './components/account-detail/transactions/transactions.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { ConfirmationComponent } from './components/common/confirmation/confirmation.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angularx-social-login";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("111415594140-nig8df0731ghjqdv4pctj259seeru58v.apps.googleusercontent.com")
  },
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
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
    TransactionsComponent,
    FooterComponent,
    HeaderComponent,
    ConfirmationComponent,
    PageNotFoundComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    FormsModule,
    SocialLoginModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MaterialModule

  ],
  providers: [ 
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
