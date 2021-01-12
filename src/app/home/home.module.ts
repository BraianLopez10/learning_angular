import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeComponent } from './components/Home/home.component'
import { BannerComponent } from './components/banner/banner.component'
//Modules
import { HomeRoutingModule } from './home-routing.module'
import { SwiperModule } from 'swiper/angular';
import {
  MaterialModule
} from '../material/material.module'
@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    MaterialModule
  ]
})
export class homeModule { }