import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModelServer, serverResponse} from "../models/product.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private ServerURL = environment.SERVER_URL;

  constructor(private httpClient: HttpClient) {
  }

/* GET ALL PRODUCTS FROM SERVER */
  getAllProducts(limitOfResults=10): Observable<serverResponse> {
    return this.httpClient.get<serverResponse>(this.ServerURL + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  /* GET SINGLE PRODUCT FROM SERVER */
  getSingleProduct(id: Number): Observable<ProductModelServer> {
    return this.httpClient.get<ProductModelServer>(this.ServerURL + 'products/' +id);
  }

  /* GET PRODUCT FROM CATEGORY FROM SERVER */
  getProductsFromCategory(catName: String): Observable<ProductModelServer[]> {
    return this.httpClient.get<ProductModelServer[]>(this.ServerURL + 'products/category/' + catName);
  }

}
