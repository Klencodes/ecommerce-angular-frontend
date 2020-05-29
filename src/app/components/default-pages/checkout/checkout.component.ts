import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CartModelServer } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { FormBuilder, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartData: CartModelServer;
  cartTotal: Number;
  showSpinner: Boolean;
  checkoutForm: any;

  constructor(public cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private  spinner: NgxSpinnerService,
              // private formBuilder: FormBuilder
               ) { 

                // this.checkoutForm = this.formBuilder.group({
                //   firstname: ['', [Validators.required]],
                //   lastname: ['', [Validators.required]],
                //   email: ['', [Validators.required, Validators.email]],
                //   phone: ['', [Validators.required]],
            
                // });
            
              }

  ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe((data)=> this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }

  ChangeQuantity(index: number, increase: boolean) {
    this.cartService.UpdateCartData(index, increase);
  }
  onCheckout() {
    this.spinner.show().then(p => {
       this.cartService.CheckoutFromCart(1);
     });
    //console.log(this.checkoutForm.value);
  }
}
