import {Component, OnInit} from '@angular/core';
import {ProductService} from "src/app/services/product.service";
import {ProductModelServer, ServerResponse} from "src/app/models/product.model";
import {CartService} from "src/app/services/cart.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: ProductModelServer[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router:Router) {
  }

  ngOnInit() {
    this.productService.getAllProducts(12).subscribe((prods: ServerResponse ) => {
      this.products = prods.products;
      // console.log(this.products);
    });


  }

  AddProduct(id: Number) {
    this.cartService.AddProductToCart(id);
  }

  selectProduct(name: string) {
    this.router.navigate(['/product', +name]).then();
  }
}
