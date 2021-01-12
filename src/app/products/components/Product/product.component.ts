import { Component, Input, OnInit } from '@angular/core'
import { Product } from '../../../product.model'
import { CartService } from '../../../core/services/cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  @Input() product: Product
  today = new Date();
  constructor(private cartService: CartService) { }
  ngOnInit() {
  }
  addCart() {
    this.cartService.addToCart(this.product)
  }
}