import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CartModelServer } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { FormBuilder, NgForm, Validators, FormGroup } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class CheckoutComponent implements OnInit {
   personalFormGroup: FormGroup;
   addressFormGroup: FormGroup;
   paymentFormGroup: FormGroup;
 

  cartData: CartModelServer;
  cartTotal: Number;
  showSpinner: Boolean;
  checkoutForm: any;

  constructor(public cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private  spinner: NgxSpinnerService,
              private formBuilder: FormBuilder
               ) { 

                // this.checkoutForm = this.formBuilder.group({
                //   firstname: ['', [Validators.required]],
                //   lastname: ['', [Validators.required]],
                //   email: ['', [Validators.required, Validators.email]],
                //   phone: ['', [Validators.required]],
            
                // });
            
              }

  ngOnInit(): void {
    this.personalFormGroup = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
     });

     this.addressFormGroup = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postal_code: ['', Validators.required]
    });

    this.paymentFormGroup = this.formBuilder.group({
      full_name: ['', Validators.required],
      card_number: ['', Validators.required],
      expires_date: ['', Validators.required],
      cvv_number: ['', Validators.required],
      phone_number: ['', Validators.required],
      voda_voucher: ['', Validators.required]
    });
    
   
  
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
