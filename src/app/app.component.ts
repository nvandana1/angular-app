import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-app';
  myForm: FormGroup;
  show:any;
  validations:any;
  constructor(private fb: FormBuilder) {
    this.validations = Validators.required;
    this.myForm = this.fb.group({});
  }

  submit() {
    this.show = true;
    }
}
