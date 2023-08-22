import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonsModule } from './Common/button/button.module';
import { CustomInputComponent } from './Common/custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsModule } from "./Common/card/card.module";

@NgModule({
    declarations: [AppComponent, CustomInputComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InputTextModule,
        ButtonsModule,
        ReactiveFormsModule,
        CardsModule
    ]
})
export class AppModule {}
