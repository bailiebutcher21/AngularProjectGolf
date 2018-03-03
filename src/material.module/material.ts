import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule,
  MatCardModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [
    MatTableModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
