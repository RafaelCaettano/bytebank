import { CardModule } from './../card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkRoutingModule } from './mark-routing.module';
import { MarkComponent } from './mark.component';


@NgModule({
  declarations: [
    MarkComponent
  ],
  imports: [
    CommonModule,
    MarkRoutingModule,
    CardModule
  ],
  exports: [
    MarkComponent
  ]
})
export class MarkModule { }
