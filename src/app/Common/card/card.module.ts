import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardModule } from 'primeng/card';
import { ButtonsModule } from "../button/button.module";


@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [
        CommonModule,
        CardModule,
        ButtonsModule
    ]
})
export class CardsModule { }
