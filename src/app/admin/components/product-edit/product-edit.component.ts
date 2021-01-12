import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { ProductsService } from '../../../core/services/products.service'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { MyValidatos } from '../../../utils/validators'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(private productsService: ProductsService, private formBuilder: FormBuilder, private router: Router, private activadRoute: ActivatedRoute) {
    this.activadRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      productsService.getProduct(this.id).subscribe(pr => {
        this.form.patchValue({
          id: pr.id,
          title: pr.title,
          price: pr.price,
          description: pr.description
        })
      })
    })
    this.buildForm()
  }

  ngOnInit() { }

  buildForm(): void {
    this.form = this.formBuilder.group({
      id: '',
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidatos.isPriceValid]]
    })
  }
  saveProduct(event: Event): void {
    event.preventDefault();
    const newProd = this.form.value;
    this.productsService.updateProduct(newProd, this.id).subscribe(() => {
      this.router.navigate(['/admin/products'])
    })
  }
}
