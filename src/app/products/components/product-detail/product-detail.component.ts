import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ProductsService: ProductsService) { }

  product: Product

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const { id } = params
      this.fetchProduct(id)
    })
  }
  fetchProduct(id: String) {
    this.ProductsService.getProduct(id).subscribe(prod => this.product = prod)
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo desde Angular papurri',
      image: 'assets/image/banner-1.jpg',
      price: 650,
      description: 'Nuevo producto'
    }
    this.ProductsService.createProduct(newProduct).subscribe(pr => console.log(pr))
  }

}
