import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';  
import {MatToolbarModule} from '@angular/material/toolbar'  
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table'; 
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRouters} from './app.routes';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule, 
    MatCheckboxModule, 
    MatButtonModule, 
  // MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatRadioModule, 
    MatSelectModule, 
    MatSlideToggleModule, 
    MatSliderModule ,
    MatIconModule ,
    MatToolbarModule ,
    MatSidenavModule ,
    MatListModule ,
    MatCardModule ,
    MatTableModule ,
    FlexLayoutModule ,
    AppRouters ,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
