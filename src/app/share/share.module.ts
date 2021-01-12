import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { CartComponent } from './components/cart/cart.component';
import { RepeatProdPipe } from './pipes/repeat-prod.pipe';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    RepeatProdPipe,
  ],
  exports: [
    CartComponent,
    HeaderComponent,
    FooterComponent,
    RepeatProdPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
