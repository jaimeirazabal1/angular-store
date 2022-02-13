import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { ProductService } from './services/product.service'
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(private productsSvc: ProductService, private ShoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.productsSvc.getProducts()
    .pipe(
      tap((products:Product[]) => this.products = products)
    )
    .subscribe();
  }
  addToCart(product:Product):void{
    // console.log('add to cart', product)
    this.ShoppingCartSvc.updateCart(product);
  }
}
