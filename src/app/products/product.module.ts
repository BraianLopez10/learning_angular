import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
//Components
import { ProductComponent } from './components/Product/product.component'
import { ProductsComponent } from './components/Products/products.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
//Modules
import { ProductRouting } from './product-routing.module'
import { MaterialModule } from '../material/material.module';
@NgModule({
  imports: [
    CommonModule,
    ProductRouting,
    MaterialModule
  ],
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
})
export class ProductModule { }