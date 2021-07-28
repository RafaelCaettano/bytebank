import { CardModule } from './../card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotlightCardRoutingModule } from './spotlight-card-routing.module';
import { SpotlightCardComponent } from './spotlight-card.component';


@NgModule({
  declarations: [
    SpotlightCardComponent
  ],
  imports: [
    CommonModule,
    SpotlightCardRoutingModule,
    CardModule
  ],
  exports: [
    SpotlightCardComponent
  ]
})
export class SpotlightCardModule { }
