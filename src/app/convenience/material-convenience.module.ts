import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule
  ],
  declarations: [],
  exports: [
    MdInputModule
  ]
})
export class MaterialConvenienceModule { }
