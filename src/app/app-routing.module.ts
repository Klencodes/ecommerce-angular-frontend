import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './components/default-pages/shop/shop.component';
import { ProductDetailComponent } from './components/default-pages/product-detail/product-detail.component';
import { CartComponent } from './components/default-pages/cart/cart.component';
import { CheckoutComponent } from './components/default-pages/checkout/checkout.component';
import { SignupComponent } from './components/setup/signup/signup.component';
import { LoginComponent } from './components/setup/login/login.component';
import { ResetPasswordComponent } from './components/setup/reset-password/reset-password.component';
import { ConfirmationComponent } from './components/common/confirmation/confirmation.component';
import { ProfileGuard } from './guards/profile.guard';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { HelpComponent } from './components/setup/help/help.component';


const routes: Routes = [
  { path: '', component : ShopComponent},
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'confirmation', component: ConfirmationComponent, canActivate: [ProfileGuard] },
  
  // { path: 'account', loadChildren:()=>import('./components/account/account.module')
  //   .then(mod=>mod.AccountModule)},

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
