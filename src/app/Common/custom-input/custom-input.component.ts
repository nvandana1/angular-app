import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  @Input() label!: string;
  @Input() type!: string;
  @Input() controlName!: string;
  @Input() form!: FormGroup;
  @Input() validations!: FormGroup;

  ngOnInit() {
    this.form.addControl(this.controlName, new FormControl(null,this.validations));
  }
}
