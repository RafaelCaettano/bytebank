import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconOptionRoutingModule } from './icon-option-routing.module';
import { IconOptionComponent } from './icon-option.component';


@NgModule({
  declarations: [
    IconOptionComponent
  ],
  imports: [
    CommonModule,
    IconOptionRoutingModule
  ],
  exports: [
    IconOptionComponent
  ]
})
export class IconOptionModule { }
