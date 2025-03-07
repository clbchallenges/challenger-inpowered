import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSliderModule,
        MatNativeDateModule,
        MatExpansionModule
      ],
      exports: [
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSliderModule,
        MatNativeDateModule,
        MatExpansionModule
      ],
})

export class AngularMaterialModule{}