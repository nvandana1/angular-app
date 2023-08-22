import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './button.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports:[ButtonsComponent]
})
export class ButtonsModule { }
