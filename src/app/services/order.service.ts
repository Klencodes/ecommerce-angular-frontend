
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
products: ProductResponseModel []= [];
  private ServerURL = environment.SERVER_URL;

  constructor( private httpClient: HttpClient ) { }
//GET A SINGLE ORDER FROM BAKCEND
  getSingleOrder(orderId: Number){
    return this.httpClient.get<ProductResponseModel[]>(this.ServerURL + 'orders/' +orderId).toPromise();
  }

}

interface ProductResponseModel {
  id: number;
  title: string;
  description: string;
  price: number;
  quantityOrdered: number;
  image: string;
}
