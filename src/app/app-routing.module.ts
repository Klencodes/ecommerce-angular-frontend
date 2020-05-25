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


const routes: Routes = [
  { path: '', component : ShopComponent},
  { path: 'product', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cat/:id', component: ShopCatComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
