import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import{ MatInputModule,} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
  ]
})
export class MaterialModule { }
