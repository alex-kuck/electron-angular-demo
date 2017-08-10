import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdInputModule, MdRadioModule, MdTabsModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdToolbarModule,
    MdTabsModule,
    MdRadioModule
  ],
  declarations: [],
  exports: [
    MdInputModule,
    MdToolbarModule,
    MdTabsModule,
    MdRadioModule
  ]
})
export class MaterialConvenienceModule { }
