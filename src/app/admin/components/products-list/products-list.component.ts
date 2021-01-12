import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/product.model';
import { Thumbs } from 'swiper';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = []
  displayedColumns: string[] = ['id', 'title', 'image', 'price', 'actions']
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  deleteProd(id: string): void {
    this.productsService.deleteProd(id).subscribe(res => {
      if (res)
        this.products = this.products.filter(pr => pr.id !== id)
    })
  }
  fetchProducts(): void {
    this.productsService.getAllProducts().subscribe(prod => {
      console.log(prod)
      this.products = prod
    })
  }

}
