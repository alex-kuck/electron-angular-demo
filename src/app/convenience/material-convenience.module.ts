import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdInputModule, MdTabsModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdToolbarModule,
    MdTabsModule
  ],
  declarations: [],
  exports: [
    MdInputModule,
    MdToolbarModule,
    MdTabsModule
  ]
})
export class MaterialConvenienceModule { }
