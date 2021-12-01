import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSnackBarModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatInputModule, } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
