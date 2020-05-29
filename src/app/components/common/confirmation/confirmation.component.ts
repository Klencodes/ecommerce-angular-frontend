import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
// import { ProductResponseModel } from 'src/app/models/order.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  
  message: string;
  orderId: number;
  products: ProductResponseModel[] = [];
  cartTotal: number;
   constructor(private router: Router,
               private orderService: OrderService) {
     const navigation = this.router.getCurrentNavigation();
 
     const state = navigation.extras.state as {
       message: string,
       products: ProductResponseModel[],
       orderId: number,
       total: number
     };
 
     this.message = state.message;
     this.products = state.products;
     console.log(this.products);
     this.orderId = state.orderId;
     this.cartTotal = state.total;
 
 
 
   }
 
   ngOnInit(): void {
   }
 
 }
 
 interface ProductResponseModel {
   id: number;
   name: string;
   description: string;
   price: number;
   image: string;
   quantityOrdered: number;
 }