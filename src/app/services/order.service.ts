
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProductResponseModel} from 'src/app/models/order.model'
@Injectable({
  providedIn: 'root'
})
export class OrderService {
products: ProductResponseModel []= [];
  private ServerURL = environment.SERVER_URL;

  constructor( private httpClient: HttpClient ) { }
//GET A SINGLE ORDER FROM BAKCEND
  getSingleOrder(orderId: number){
    return this.httpClient.get<ProductResponseModel[]>(this.ServerURL + 'orders/' + orderId).toPromise();
  }

}