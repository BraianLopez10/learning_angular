import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { ProductsService } from '../../../core/services/products.service'
import { Router } from '@angular/router'
import { MyValidatos } from '../../../utils/validators'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router) {
    this.buildForm()
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault()
    console.log(this.form.value)
    if (this.form.valid) {
      this.productsService.createProduct(this.form.value).subscribe(pr => {
        this.router.navigate(['./admin/products'])
        console.log(pr)
      })
    }
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidatos.isPriceValid]],
      description: ['', [Validators.required]],
      image: [''],
    })
  }

}
