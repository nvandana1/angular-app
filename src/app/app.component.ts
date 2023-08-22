import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app';
  myForm: FormGroup;
  show: any;
  validations: any;
  tasks: any = [];
  constructor(private fb: FormBuilder) {
    this.validations = Validators.required;
    this.myForm = this.fb.group({});
  }

  submit() {
    this.show = true;
    if (!this.myForm.invalid) {
      this.tasks.push({
        id: this.tasks.length + 1,
        task: this.myForm.value.task,
        status: 'Not Done',
      });
      console.log(this.tasks);
    }
  }
}
