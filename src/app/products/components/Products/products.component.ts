import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) { }

  products: Product[] = []
  ngOnInit(): void {
    this.fetchProducts()
  }
  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => this.products = products)
  }
  clickProduct(id: number) {
  }

}
