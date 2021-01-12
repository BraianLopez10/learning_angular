import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ContactComponent } from './components/contact/contact.component'
import { ContactRouting } from './contact-routing.module'
@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ContactRouting,
    CommonModule
  ],
})

export class ContactModule { }