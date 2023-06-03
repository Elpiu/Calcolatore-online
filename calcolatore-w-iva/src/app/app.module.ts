import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TopicComponent} from "./components/topic/topic.component";


@NgModule({
    declarations: [
        AppComponent,
        CalculatorComponent,
        TopicComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
