import { Component, OnInit } from '@angular/core';
import { CartModelServer } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartData: CartModelServer;
  cartTotal: Number;

  constructor( public cartService: CartService ) { }

  ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe((data)=> this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }


  ChangeQuantity(index: number, increase: boolean) {
    this.cartService.UpdateCartData(index, increase);
  }
}
