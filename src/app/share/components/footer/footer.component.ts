import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl(
      '',
      [
        Validators.minLength(4),
        Validators.maxLength(25),
        Validators.required,
        Validators.email
      ]
    )
    // this.emailField.valueChanges.subscribe(value => console.log(value))
  }

  ngOnInit() {
  }
  /**
   * Envia el email 
   */
  sendMail(): void {
    if (this.emailField.valid) {
      console.log(this.emailField.value)
    }
  }
}