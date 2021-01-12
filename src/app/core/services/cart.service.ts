import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Product } from 'src/app/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  private cart = new BehaviorSubject<Product[]>([])
  cart$ = this.cart.asObservable()
  constructor() {

  }

  // getAll(): Product[] {
  //   return this.items;
  // }

  addToCart(prod: Product) {
    this.items = [...this.items, prod]
    this.cart.next(this.items)
  }
}
