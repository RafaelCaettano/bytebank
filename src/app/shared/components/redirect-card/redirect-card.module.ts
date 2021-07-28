import { CardModule } from './../card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedirectCardRoutingModule } from './redirect-card-routing.module';
import { RedirectCardComponent } from './redirect-card.component';


@NgModule({
  declarations: [
    RedirectCardComponent
  ],
  imports: [
    CommonModule,
    RedirectCardRoutingModule,
    CardModule
  ],
  exports: [
    RedirectCardComponent
  ]
})
export class RedirectCardModule { }
